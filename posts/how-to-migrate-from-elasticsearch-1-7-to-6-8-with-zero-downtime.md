---
card: "/images/default.jpg"
tags: [Elasticsearch]
description: "My last task at BigPanda was to upgrade an existing service t"
author: "Milad E. Fahmy"
title: "How to migrate from Elasticsearch 1.7 to 6.8 with zero downtime"
created: "2021-08-16T15:38:11+02:00"
modified: "2021-08-16T15:38:11+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-elasticsearch tag-data-migration tag-python tag-availability tag-devops ">
<header class="post-full-header">
<h1 class="post-full-title">How to migrate from Elasticsearch 1.7 to 6.8 with zero downtime</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/12/es-3.png 300w,
/news/content/images/size/w600/2019/12/es-3.png 600w,
/news/content/images/size/w1000/2019/12/es-3.png 1000w,
/news/content/images/size/w2000/2019/12/es-3.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/12/es-3.png" alt="How to migrate from Elasticsearch 1.7 to 6.8 with zero downtime">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
{
"index_patterns": [
"your-index-names*"
],
"mappings": {
"_doc": {
"dynamic_templates": [
{
"tags": {
"mapping": {
"type": "text"
},
"path_match": "actions.tags.*"
}
}
]
}
},
"aliases": {}
}'
curl -X PUT "localhost:9200/your-index-names-1/_doc/1?pretty" -H 'Content-Type: application/json' -d'
{
"actions": {
"tags" : {
"name": "John",
"lname" : "Smith"
}
}
}
'
curl -X PUT "localhost:9200/your-index-names-1/_doc/2?pretty" -H 'Content-Type: application/json' -d'
{
"actions": {
"tags" : {
"name": "Dor",
"lname" : "Sever"
}
}
}
'
curl -X PUT "localhost:9200/your-index-names-1/_doc/3?pretty" -H 'Content-Type: application/json' -d'
{
"actions": {
"tags" : {
"name": "AnotherName",
"lname" : "AnotherLastName"
}
}
}
'
</code></pre><pre><code class="language-bash">
curl -X GET "localhost:9200/_search?pretty" -H 'Content-Type: application/json' -d'
{
"query": {
"match" : {
"actions.tags.name" : {
"query" : "John"
}
}
}
}
'
# returns 1 match(doc 1)
curl -X GET "localhost:9200/_search?pretty" -H 'Content-Type: application/json' -d'
{
"query": {
"match" : {
"actions.tags.lname" : {
"query" : "John"
}
}
}
}
'
# returns zero matches
# search by value
curl -X GET "localhost:9200/_search?pretty" -H 'Content-Type: application/json' -d'
{
"query": {
"query_string" : {
"fields": ["actions.tags.*" ],
"query" : "Dor"
}
}
}
'
</code></pre><h2 id="nested-documents-solution">Nested documents solution</h2><p>Our first instinct in solving the mapping explosion problem was to use nested documents.</p><p>We read the nested data type tutorial in the Elastic docs and defined the following schema and queries:</p><pre><code class="language-bash">curl -X PUT "localhost:9200/my_index?pretty" -H 'Content-Type: application/json' -d'
{
"mappings": {
"_doc": {
"properties": {
"tags": {
"type": "nested"
}
}
}
}
}
'
curl -X PUT "localhost:9200/my_index/_doc/1?pretty" -H 'Content-Type: application/json' -d'
{
"tags" : [
{
"key" : "John",
"value" :  "Smith"
},
{
"key" : "Alice",
"value" :  "White"
}
]
}
'
# Query by tag key and value
curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
"query": {
"nested": {
"path": "tags",
"query": {
"bool": {
"must": [
{ "match": { "tags.key": "Alice" }},
{ "match": { "tags.value":  "White" }}
]
}
}
}
}
}
'
# Returns 1 document
curl -X GET "localhost:9200/my_index/_search?pretty" -H 'Content-Type: application/json' -d'
{
"query": {
"nested": {
"path": "tags",
"query": {
"bool": {
"must": [
{ "match": { "tags.value":  "Smith" }}
]
}
}
}
}
}
'
# Query by tag value
# Returns 1 result
</code></pre><p>And this solution worked. However, when we tried to insert real customer data we saw that the number of documents in our index increased by around 500 times.</p><p>We thought about the following problems and went on to find a better solution:</p><ol><li>The amount of documents we had in our cluster was around 500 million documents. This meant that, with the new schema, we were going to reach two hundred fifty billion documents (that’s 250,000,000,000 documents ?).</li><li>We read this really good blog post — <a href="https://blog.gojekengineering.com/elasticsearch-the-trouble-with-nested-documents-e97b33b46194" rel="noopener nofollow">https://blog.gojekengineering.com/elasticsearch-the-trouble-with-nested-documents-e97b33b46194</a> which highlights that nested documents can cause high latency in queries and heap usage problems.</li><li>Testing — Since we were converting 1 document in the old cluster to an unknown number of documents in the new cluster, it would be much harder to track if the migration process worked without any data loss. If our conversion was 1:1, we could assert that the count in the old cluster equalled the count in the new cluster.</li></ol><h2 id="avoiding-nested-documents">Avoiding nested documents</h2><p>The real trick in this was to focus on what supported queries we were running: search by tag value, and search by tag key and value.</p><p>The first query does not require nested documents since it works on a single field. For the latter, we did the following trick. We created a field that contains the combination of the key and the value. Whenever a user queries on a key, value match, we translate their request to the corresponding text and query against that field.</p><p>Example:</p><pre><code class="language-bash">curl -X PUT "localhost:9200/my_index_2?pretty" -H 'Content-Type: application/json' -d'
{
"mappings": {
"_doc": {
"properties": {
"tags": {
"type": "object",
"properties": {
"keyToValue": {
"type": "keyword"
},
"value": {
"type": "keyword"
}
}
}
}
}
}
}
'
curl -X PUT "localhost:9200/my_index_2/_doc/1?pretty" -H 'Content-Type: application/json' -d'
{
"tags" : [
{
"keyToValue" : "John:Smith",
"value" : "Smith"
},
{
"keyToValue" : "Alice:White",
"value" : "White"
}
]
}
'
# Query by key,value
# User queries for key: Alice, and value : White , we then query elastic with this query:
curl -X GET "localhost:9200/my_index_2/_search?pretty" -H 'Content-Type: application/json' -d'
{
"query": {
"bool": {
"must": [ { "match": { "tags.keyToValue": "Alice:White" }}]
}}}
'
# Query by value only
curl -X GET "localhost:9200/my_index_2/_search?pretty" -H 'Content-Type: application/json' -d'
{
"query": {
"bool": {
"must": [ { "match": { "tags.value": "White" }}]
}}}
'
</code></pre>
from elasticsearch6 import Elasticsearch as Elasticsearch6
import sys
from elasticsearch.helpers import scan
from elasticsearch6.helpers import parallel_bulk
import statsd
ES_SOURCE = Elasticsearch(sys.argv[1])
ES_TARGET = Elasticsearch6(sys.argv[2])
INDEX_SOURCE = sys.argv[3]
INDEX_TARGET = sys.argv[4]
QUERY_MATCH_ALL = {"query": {"match_all": {}}}
SCAN_SIZE = 1000
SCAN_REQUEST_TIMEOUT = '3m'
REQUEST_TIMEOUT = 180
MAX_CHUNK_BYTES = 15 * 1024 * 1024
RAISE_ON_ERROR = False
def transform_item(item, index_target):
# implement your logic transformation here
transformed_source_doc = item.get("_source")
return {"_index": index_target,
"_type": "_doc",
"_id": item['_id'],
"_source": transformed_source_doc}
def transformedStream(es_source, match_query, index_source, index_target, transform_logic_func):
for item in scan(es_source, query=match_query, index=index_source, size=SCAN_SIZE,
timeout=SCAN_REQUEST_TIMEOUT):
yield transform_logic_func(item, index_target)
def index_source_to_target(es_source, es_target, match_query, index_source, index_target, bulk_size, statsd_client,
logger, transform_logic_func):
ok_count = 0
fail_count = 0
count_response = es_source.count(index=index_source, body=match_query)
count_result = count_response['count']
statsd_client.gauge(stat='elastic_migration_document_total_count,index={0},type=success'.format(index_target),
value=count_result)
with statsd_client.timer('elastic_migration_time_ms,index={0}'.format(index_target)):
actions_stream = transformedStream(es_source, match_query, index_source, index_target, transform_logic_func)
for (ok, item) in parallel_bulk(es_target,
chunk_size=bulk_size,
max_chunk_bytes=MAX_CHUNK_BYTES,
actions=actions_stream,
request_timeout=REQUEST_TIMEOUT,
raise_on_error=RAISE_ON_ERROR):
if not ok:
logger.error("got error on index {} which is : {}".format(index_target, item))
fail_count += 1
statsd_client.incr('elastic_migration_document_count,index={0},type=failure'.format(index_target),
1)
else:
ok_count += 1
statsd_client.incr('elastic_migration_document_count,index={0},type=success'.format(index_target),
1)
return ok_count, fail_count
statsd_client = statsd.StatsClient(host='localhost', port=8125)
if __name__ == "__main__":
index_source_to_target(ES_SOURCE, ES_TARGET, QUERY_MATCH_ALL, INDEX_SOURCE, INDEX_TARGET, BULK_SIZE,
statsd_client, transform_item)
</div>
<hr>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
