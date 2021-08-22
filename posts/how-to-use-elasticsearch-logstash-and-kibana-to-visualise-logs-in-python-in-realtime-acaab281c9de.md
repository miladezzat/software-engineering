---
card: "https://cdn-media-1.freecodecamp.org/images/0*-sOdBVARaJLNvu17.png"
tags: [Python]
description: "by Ritvik Khanna"
author: "Milad E. Fahmy"
title: "How to use Elasticsearch, Logstash and Kibana to visualise logs in Python in realtime"
created: "2021-08-16T15:39:38+02:00"
modified: "2021-08-16T15:39:38+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-tech tag-programming tag-logging tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to use Elasticsearch, Logstash and Kibana to visualise logs in Python in realtime</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*-sOdBVARaJLNvu17.png 300w,
https://cdn-media-1.freecodecamp.org/images/0*-sOdBVARaJLNvu17.png 600w,
https://cdn-media-1.freecodecamp.org/images/0*-sOdBVARaJLNvu17.png 1000w,
https://cdn-media-1.freecodecamp.org/images/0*-sOdBVARaJLNvu17.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*-sOdBVARaJLNvu17.png" alt="How to use Elasticsearch, Logstash and Kibana to visualise logs in Python in realtime">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
import random
logging.basicConfig(filename="logFile.txt",
filemode='a',
format='%(asctime)s %(levelname)s-%(message)s',
datefmt='%Y-%m-%d %H:%M:%S')
for i in xrange(0,15):
x=random.randint(0,2)
if(x==0):
logging.warning('Log Message')
elif(x==1):
logging.critical('Log Message')
else:
2019-01-09 09:01:05,333 WARNING-Log Message
2019-01-09 09:01:05,333 ERROR-Log Message
2019-01-09 09:01:05,333 CRITICAL-Log Message
2019-01-09 09:01:05,333 WARNING-Log Message
2019-01-09 09:01:05,333 ERROR-Log Message
2019-01-09 09:01:05,333 ERROR-Log Message
2019-01-09 09:01:05,333 WARNING-Log Message
2019-01-09 09:01:05,333 WARNING-Log Message
2019-01-09 09:01:05,333 ERROR-Log Message
2019-01-09 09:01:05,333 CRITICAL-Log Message
2019-01-09 09:01:05,333 CRITICAL-Log Message
2019-01-09 09:01:05,333 CRITICAL-Log Message
2019-01-09 11:07:05,333 ERROR-Log Message
2019-01-09 11:07:05,333 WARNING-Log Message
2019-01-09 11:07:05,333 ERROR-Log Message
2019-01-09 11:07:05,333 ERROR-Log Message
2019-01-09 11:07:05,333 WARNING-Log Message
2019-01-09 11:07:05,333 CRITICAL-Log Message
2019-01-09 11:07:05,333 WARNING-Log Message
file{
path =&gt; "full/path/to/log_file/location/logFile.txt"
start_position =&gt; "beginning"
}
}
filter
{
grok{
match =&gt; {"message" =&gt; "%{TIMESTAMP_ISO8601:timestamp} %{LOGLEVEL:log-level}-%{GREEDYDATA:message}"}
}
date {
match =&gt; ["timestamp", "ISO8601"]
}
}
output{
elasticsearch{
hosts =&gt; ["localhost:9200"]
index =&gt; "index_name"}
stdout{codec =&gt; rubydebug}
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
