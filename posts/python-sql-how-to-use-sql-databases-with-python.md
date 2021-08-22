---
card: "/images/default.jpg"
tags: [Python]
description: "One of my greatest joys as a developer is learning how differ"
author: "Milad E. Fahmy"
title: "Python SQL – How to use the SQLite, MySQL, and PostgreSQL Databases with Python"
created: "2021-08-16T15:34:33+02:00"
modified: "2021-08-16T15:34:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-sql tag-mysql tag-sqlite tag-database ">
<header class="post-full-header">
<h1 class="post-full-title">Python SQL – How to use the SQLite, MySQL, and PostgreSQL Databases with Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/03/max-duzij-qAjJk-un3BI-unsplash-1.jpg 300w,
/news/content/images/size/w600/2021/03/max-duzij-qAjJk-un3BI-unsplash-1.jpg 600w,
/news/content/images/size/w1000/2021/03/max-duzij-qAjJk-un3BI-unsplash-1.jpg 1000w,
/news/content/images/size/w2000/2021/03/max-duzij-qAjJk-un3BI-unsplash-1.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/03/max-duzij-qAjJk-un3BI-unsplash-1.jpg" alt="Python SQL – How to use the SQLite, MySQL, and PostgreSQL Databases with Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
import psycopg
#Library for reading the config file, which is in JSON
import json
#Data manipulation library
import pandas as pd</code></pre><p>You'll notice we also imported the JSON and pandas libraries. We imported JSON because creating a JSON config file is a secure way to store your database credentials. We don't want anyone else eyeing those! </p><p>The pandas library will enable you to use all of pandas' statistical capabilities for your Python script. In this instance, the library will enable Python to store the data your SQL query returns into a data frame. </p><p>Next, you'll want to access your config file. The <code>json.load()</code> function reads the JSON file so you can access your database credentials in the next step.</p><pre><code class="language-Setup (continued)">config_file = open(r"C:\Users\yourname\config.json")
config = json.load(config_file)
</code></pre><p>Now that your Python script can access your JSON config file, you'll want to create a database connection. You'll need to read and use the credentials from your config file:</p><pre><code>con = psycopg2.connect(dbname= "db_name", host=config[hostname], port = config["port"],user=config["user_id"], password=config["password_key"])
cur = con.cursor()</code></pre><p>You just created a database connection! When you imported the psycopg library, you translated the Python code you wrote above to speak to the PostgreSQL database (AWS Redshift). </p><p>In it of itself, AWS Redshift would not understand the above code. But because you imported the psycopg library, you now speak a language AWS Redshift can understand. </p><p>The nice thing about Python is that it has libraries for SQLite, MySQL, and PostgreSQL. You'll be able to integrate the technologies with ease.</p><h3 id="how-to-write-a-sql-query">How to Write a SQL Query</h3><p><em>Feel free to download the <a href="https://www.kaggle.com/hugomathien/soccer">European Soccer Data</a> to your PostgreSQL database. I'll be using its data for this example. &nbsp;</em></p><p>The database connection you created in the last step lets you write SQL to then store the data in a Python-friendly data structure. Now that you've established a database connection, you can write a SQL query to start pulling data:</p><pre><code class="language-SQL query">query = "SELECT *
FROM League
JOIN Country ON Country.id = League.country_id;"</code></pre><p>The work is not done yet, though. You need to write some additional Python code that executes the SQL query:</p><pre><code>#Runs your SQL query
execute1 = cur.execute(query)
result = cur.fetchall()</code></pre><p>Then you need to store the returned data in a pandas data frame:</p><pre><code>#Create initial dataframe from SQL data
raw_initial_df = pd.read_sql_query(query, con)
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
