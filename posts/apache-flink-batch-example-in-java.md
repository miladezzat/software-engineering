---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9ca8740569d1a4ca3379.jpg"
tags: [Java]
description: "Apache Flink is an open source stream processing framework wi"
author: "Milad E. Fahmy"
title: "Apache Flink Batch Example in Java"
created: "2021-08-15T23:32:25+02:00"
modified: "2021-08-15T23:32:25+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-java tag-apache tag-data-science tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">Apache Flink Batch Example in Java</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ca8740569d1a4ca3379.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ca8740569d1a4ca3379.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ca8740569d1a4ca3379.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ca8740569d1a4ca3379.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ca8740569d1a4ca3379.jpg" alt="Apache Flink Batch Example in Java">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="flink-batch-example-java"><strong>Flink Batch Example JAVA</strong></h2><p>Apache Flink is an open source stream processing framework with powerful stream- and batch-processing capabilities.</p><h3 id="prerequisites"><strong>Prerequisites</strong></h3><ul><li>Unix-like environment (Linux, Mac OS X, Cygwin)</li><li>git</li><li>Maven (we recommend version 3.0.4)</li><li>Java 7 or 8</li><li>IntelliJ IDEA or Eclipse IDE</li></ul><pre><code class="language-text">git clone https://github.com/apache/flink.git
cd flink
mvn clean package -DskipTests # this will take up to 10 minutes</code></pre><h2 id="datasets">Datasets</h2><p>For the batch processing data we’ll be using the datasets in here: <a href="http://files.grouplens.org/datasets/movielens/ml-latest-small.zip">datasets</a> In this example we’ll be using the movies.csv and the ratings.csv, create a new java project and put them in a folder in the application base.</p><h2 id="example">Example</h2><p>We’re going to make an execution where we retrieve the average rating by movie genre of the entire dataset we have.</p><h3 id="environment-and-datasets">Environment and datasets</h3><p>First create a new Java file, I’m going to name it AverageRating.java</p><p>The first thing we’ll do is to create the execution environment and load the csv files in a dataset. Like this:</p><pre><code class="language-text">ExecutionEnvironment env = ExecutionEnvironment.getExecutionEnvironment();
DataSet&lt;Tuple3&lt;Long, String, String&gt;&gt; movies = env.readCsvFile("ml-latest-small/movies.csv")
.ignoreFirstLine()
.parseQuotedStrings('"')
.ignoreInvalidLines()
.types(Long.class, String.class, String.class);
DataSet&lt;Tuple2&lt;Long, Double&gt;&gt; ratings = env.readCsvFile("ml-latest-small/ratings.csv")
.ignoreFirstLine()
.includeFields(false, true, true, false)
.types(Long.class, Double.class);</code></pre><p>There, we are making a dataset with a &lt;Long, String, String&gt; for the movies, ignoring errors, quotes and the header line, and a dataset with &lt;Long, Double&gt; for the movie ratings, also ignoring the header, invalid lines and quotes.</p><h3 id="flink-processing">Flink Processing</h3><p>Here we will process the dataset with flink. The result will be in a List of String, Double tuples. where the genre will be in the String and the average rating will be in the double.</p><p>First we’ll join the ratings dataset with the movies dataset by the moviesId present in each dataset. With this we’ll create a new Tuple with the movie name, genre and score. Later, we group this tuple by genre and add the score of all equal genres, finally we divide the score by the total results and we have our desired result.</p><pre><code class="language-text">List&lt;Tuple2&lt;String, Double&gt;&gt; distribution = movies.join(ratings)
.where(0)
.equalTo(0)
.with(new JoinFunction&lt;Tuple3&lt;Long, String, String&gt;,Tuple2&lt;Long, Double&gt;, Tuple3&lt;StringValue, StringValue, DoubleValue&gt;&gt;() {
private StringValue name = new StringValue();
private StringValue genre = new StringValue();
private DoubleValue score = new DoubleValue();
private Tuple3&lt;StringValue, StringValue, DoubleValue&gt; result = new Tuple3&lt;&gt;(name,genre,score);
@Override
public Tuple3&lt;StringValue, StringValue, DoubleValue&gt; join(Tuple3&lt;Long, String, String&gt; movie,Tuple2&lt;Long, Double&gt; rating) throws Exception {
name.setValue(movie.f1);
genre.setValue(movie.f2.split("\\|")[0]);
score.setValue(rating.f1);
return result;
}
})
.groupBy(1)
.reduceGroup(new GroupReduceFunction&lt;Tuple3&lt;StringValue,StringValue,DoubleValue&gt;, Tuple2&lt;String, Double&gt;&gt;() {
@Override
public void reduce(Iterable&lt;Tuple3&lt;StringValue,StringValue,DoubleValue&gt;&gt; iterable, Collector&lt;Tuple2&lt;String, Double&gt;&gt; collector) throws Exception {
StringValue genre = null;
int count = 0;
double totalScore = 0;
for(Tuple3&lt;StringValue,StringValue,DoubleValue&gt; movie: iterable){
genre = movie.f1;
totalScore += movie.f2.getValue();
count++;
}
collector.collect(new Tuple2&lt;&gt;(genre.getValue(), totalScore/count));
}
})
.collect();</code></pre><p>With this you’ll have a working batch processing flink application. Enjoy!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
