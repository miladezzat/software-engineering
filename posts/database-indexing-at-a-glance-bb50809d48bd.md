---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca322740569d1a4ca596f.jpg"
tags: [Programming]
description: "Performance is extremely important in many consumer products "
author: "Milad E. Fahmy"
title: "An in-depth look at Database Indexing"
created: "2021-08-16T11:30:09+02:00"
modified: "2021-08-16T11:30:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-mysql tag-database tag-software-development tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">An in-depth look at Database Indexing</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca322740569d1a4ca596f.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca322740569d1a4ca596f.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca322740569d1a4ca596f.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca322740569d1a4ca596f.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca322740569d1a4ca596f.jpg" alt="An in-depth look at Database Indexing">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Performance is extremely important in many consumer products like e-commerce, payment systems, gaming, transportation apps, and so on. Although databases are internally optimised through multiple mechanisms to meet their performance requirements in the modern world, a lot depends on the application developer as well — after all, only a developer knows what queries the application has to perform.</p><p>Developers who deal with relational databases have used or at least heard about indexing, and it’s a very common concept in the database world. However, the most important part is to understand what to index &amp; how the indexing is going to boost the query response time. For doing that you need to understand how you are going to query your database tables. A proper index can be created only when you know exactly what your query &amp; data access patterns look like.</p><p>In simple terminology, an index maps search keys to corresponding data on disk by using different in-memory &amp; on-disk data structures. Index is used to quicken the search by reducing the number of records to search for.</p><p>Mostly an index is created on the columns specified in the <code>WHERE</code> clause of a query as the database retrieves &amp; filters data from the tables based on those columns. If you don’t create an index, the database scans all the rows, filters out the matching rows &amp; returns the result. With millions of records, this scan operation may take many seconds &amp; this high response time makes APIs &amp; applications slower &amp; unusable. Let’s see an example —</p><p>We will use MySQL with a default InnoDB database engine, although concepts explained in this article are more or less same in other database servers as well like Oracle, MSSQL etc.</p><p>Create a table called <code>index_demo</code> with the following schema:</p><pre><code class="language-sql">CREATE TABLE index_demo (
name VARCHAR(20) NOT NULL,
age INT,
pan_no VARCHAR(20),
phone_no VARCHAR(20)
- If the primary key does not exist, you get the following error:
name
age
pan_no
phone_no
+--------+------+------------+------------+
kousik
28
HJKXS9086W
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
