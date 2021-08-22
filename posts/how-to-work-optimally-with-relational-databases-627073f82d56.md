---
card: "https://cdn-media-1.freecodecamp.org/images/1*Sd50m5VidzQA8wzhJiFHhQ.jpeg"
tags: [Programming]
description: "Relational databases handle data smoothly, whether working wi"
author: "Milad E. Fahmy"
title: "How to work optimally with relational databases"
created: "2021-08-16T11:37:25+02:00"
modified: "2021-08-16T11:37:25+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-sql tag-data tag-technology tag-tutorial ">
<header class="post-full-header">
<h1 class="post-full-title">How to work optimally with relational databases</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Sd50m5VidzQA8wzhJiFHhQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*Sd50m5VidzQA8wzhJiFHhQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*Sd50m5VidzQA8wzhJiFHhQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Sd50m5VidzQA8wzhJiFHhQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Sd50m5VidzQA8wzhJiFHhQ.jpeg" alt="How to work optimally with relational databases">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
------------------------------------------------
id  borrower_id  lender_id  book_id  return_date</code></pre><p>Here <strong>id</strong> is the primary key and <strong>borrower_id</strong>, <strong>lender_id</strong>, <strong>book_id</strong> are the foreign keys. After we launch our application there are few transactions recorded:</p><pre><code>book_transactions
------------------------------------------------
id  borrower_id  lender_id  book_id  return_date
------------------------------------------------
1   1      1          1        2018-01-13
2   2      3          2        2018-01-13
3   1      2          1        2018-01-13</code></pre><h4 id="fetching-the-data">Fetching the data</h4><p>We have a dashboard page for each user where they can see the transactions of their books rented. So let’s fetch the book transactions for a user:</p><pre><code>&gt; SELECT * FROM book_transactions WHERE borrower_id = 1;
book_transactions
------------------------------------------------
id  borrower_id  lender_id  book_id  return_date
------------------------------------------------
1   1      1          1        2018-01-13
2   1      2          1        2018-01-13</code></pre><p>This scans the relation sequentially and gives us the data for the user. This seems to be very fast, as there are very few data in our relation. To see the exact time of the query execution, <strong>set profiling</strong> to be true by executing the following command:</p><pre><code>&gt; set profiling=1;</code></pre><p>Once the profiling is set, run the query again and use the following command to look into the <strong>execution time:</strong></p><pre><code>&gt; show profiles;</code></pre><p>This will return the duration of the query we executed.</p><pre><code>Query_ID | Duration   | Query
1 | 0.00254000 | SELECT * FROM book_transactions ...</code></pre><p>The execution seems to be very good.</p><p>Slowly, the book_transactions table starts to get filled with data, as there are a lots of transactions going on.</p><h3 id="the-problem">The problem</h3><p>This increases the number of <strong>tuples</strong> in our relation. With this, the time it takes to fetch the book transactions for the user will start to take more time. MySQL needs to go through all the tuples to find the result.</p><p>To insert a lot of data into this table, I wrote the following stored procedure:</p><pre><code>DELIMITER //
CREATE PROCEDURE InsertALot()
BEGIN
DECLARE i INT DEFAULT 1;
WHILE (i &lt;= 100000) DO
INSERT INTO book_transactions (borrower_id, lender_id, book_id,   return_date) VALUES ((FLOOR(1 + RAND() * 60)), (FLOOR(1 + RAND() * 60)), (FLOOR(1 + RAND() * 60)), CURDATE());
SET i = i+1;
END WHILE;
END //
DELIMITER ;
* It took around 7 minutes to insert 1.5 million data</code></pre><p>This inserts 100,000 random records in our table book_transactions. After running this, the profiler shows a slight increase in the runtime:</p><pre><code>Query_ID | Duration   | Query
1 | 0.07151000 | SELECT * FROM book_transactions ...</code></pre><p>Let’s add few more data running the above procedure and see what happens. With more and more data added, the duration of the query increases. With 1.5 million data inserted into the table, the response time to get the same query is now increased.</p><pre><code>Query_ID | Duration   | Query
----------------------------------------------------
* It took around 6.18sec Adding this index</code></pre><p>The above command adds an index on the lender_id field. Let’s look at how this affects performance for the 1.5 million data that we have by running the same query again.</p><pre><code>&gt; SELECT * FROM book_transactions WHERE lender_id = 1;
Query_ID | Duration   | Query
1 | 0.00787600 | SELECT * FROM book_transactions ...</code></pre><p>Woohoo! We are back now.</p><p>It is as fast as it used to be when there were only 3 records in our relation. With the right index added, we can see a dramatic improvement in performance.</p><h4 id="composite-and-single-index">Composite and single index</h4><p>The index we added was a single field index. Indices can also be added to a composite field.</p><p>If our query involved multiple fields, a composite index would have helped us. We can add a composite index with the following command:</p><pre><code>&gt; CREATE INDEX lenderReturnDate ON book_transactions(lender_id, return_date);</code></pre><h4 id="other-usage-of-indices">Other Usage of Indices</h4><p>Querying is not the only use of indices. They can be used for the <strong>ORDER BY </strong>clause as well. Let’s order the records with respect to lender_id.</p><pre><code>&gt; SELECT * FROM book_transactions ORDER BY lender_id;
1517185 rows in set (4.08 sec)</code></pre><p><strong>4.08</strong> <strong>sec</strong>, that’s a lot! So what went wrong? We have our index in place. Let’s deep dive into how the query is being executed with the help of <strong>EXPLAIN </strong>clause.</p><h4 id="using-explain">Using Explain</h4><p>We can add an explain clause to see how the query will be executed in our current dataset.</p><pre><code>&gt; EXPLAIN SELECT * FROM book_transactions ORDER BY lender_id;
</code></pre><p>This will return the result in 0.46 seconds, which is way faster. But there is still room for improvement.</p><p>As this query is done on all the 1.5 million records that we have, it is taking a little more time as it needs to load data into memory.</p><h4 id="use-limit">Use Limit</h4><p>We might not need all the 1.5 million data at the same time. So instead of fetching all the data, using LIMIT and fetching data in batches is a better way to go.</p><pre><code>&gt; SELECT lender_id
FROM book_transactions
ORDER BY lender_id LIMIT 1000;</code></pre><p>With a limit in place, the response time now improves drastically, and executes in 0.0025 seconds. Now we can fetch next batch with <strong>OFFSET.</strong></p><pre><code>&gt; SELECT lender_id
FROM book_transactions
ORDER BY lender_id LIMIT 1000 OFFSET 1000;</code></pre><p>This will fetch the next 1000 row batch. With this we can increase the offset and limit to get all the data. But there is a ‘gotcha’! With an increase in offset, the performance of the query decreases.</p><p>This is because MySQL will scan through all the data to reach the offset point. So it is better not to use higher offset.</p><h4 id="what-about-count-query">What about Count query?</h4><p>InnoDB engine has an ability to write concurrently. This makes it highly scalable and improves the throughput per second.</p><p>But this comes at a cost. InnoDB cannot add a cache counter for the number of records in any table. So, the count has to be done in real time by scanning through all the filtered data. This makes the COUNT query slow.</p><p>So it is recommended to calculate the summarized count data from application logic for large number of data.</p><h3 id="why-not-add-an-index-to-all-fields">Why not add an index to all fields?</h3><p>Adding index helps improve performance a lot, but it also comes with a cost. It should be used effectively. Adding an index to more fields has the following issues:</p><ul><li>Needs a lot of memory, bigger machine</li><li>When we delete, there is a re-index (CPU intensive and slower deletes)</li><li>When we add anything, there is reindex (CPU intensive and slower inserts)</li><li>Update does not do full reindex, so update is faster and CPU efficient.</li></ul><p>We are now clear that adding an index helps a lot. But we cannot select all the data, except that which is indexed for fast performance.</p><p>So how can we select all the attributes and still get fast performance?</p><h3 id="partitioning">Partitioning</h3><p>While we build indices, we only have information about the field that is indexed. But we do not have data of the fields that are not present in the index.</p><p>So, as we said earlier, MySQL needs to look back at the main table to get the data for other fields. This can slow down the execution time.</p><p>The way we can solve this is by using partitioning.</p><p>Partitioning is a technique in which MySQL splits a table’s data into multiple tables, but still manages it as one.</p><p>While doing any kind of operation in the table we need to specify which partition is being used. With data being broken down, MySQL has a smaller data set to query on. Figuring out the right partitioning according to the needs is key for high performance.</p><p>But if we are still using the same machine, will it scale?</p><h3 id="sharding">Sharding</h3><p>With a huge data set, storing all your data on the same machine can be troublesome.</p><p>A specific partition can be heavy and needs more querying, while other are less. So one will affect another. They cannot scale separately.</p><p>Let’s say the recent three months worth of data are the most used, where as the older one are less used. Perhaps the recent data are mostly updated/created whereas the old data are mostly only ever read.</p><p>To resolve this issue, we can move the recent three months partition to another machine. Sharding is a way in which we divide a big data set into smaller chunks, and move to separate RDBMS. In other words sharding can also be called ‘horizontal partitioning’.</p><p>Relational databases have the ability to scale as the application grows. Finding out the right index and tuning the infrastructure according to need is necessary.</p><hr><p>Also Posted on Milap Neupane Blog: <a href="https://milapneupane.com.np/2019/07/06/how-to-work-optimally-with-relational-databases/">How to work Optimally with relational Databases</a></p>
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
