---
card: "https://cdn-media-1.freecodecamp.org/images/1*G7XlxVd4okqhBrn6_WhMaQ.jpeg"
tags: [Programming]
description: "One of the key aspects of any data science workflow is the so"
author: "Milad E. Fahmy"
title: "SQLAlchemy makes ETL magically easy"
created: "2021-08-16T15:41:58+02:00"
modified: "2021-08-16T15:41:58+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-tech tag-python tag-software-development tag-data-science tag-sql tag-sqlalchemy tag-data-engineering tag-etl tag-backend tag-backend-development tag-analytics ">
<header class="post-full-header">
<h1 class="post-full-title">SQLAlchemy makes ETL magically easy</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*G7XlxVd4okqhBrn6_WhMaQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*G7XlxVd4okqhBrn6_WhMaQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*G7XlxVd4okqhBrn6_WhMaQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*G7XlxVd4okqhBrn6_WhMaQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*G7XlxVd4okqhBrn6_WhMaQ.jpeg" alt="SQLAlchemy makes ETL magically easy">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
$ touch demo.db</code></pre><h4 id="defining-a-schema">Defining a schema</h4><p>A <strong>database schema</strong> defines the structure of a database system, in terms of tables, columns, fields, and the relationships between them. Schemas can be defined in raw SQL, or through the use of SQLAlchemy’s ORM feature.</p><p>Below is an example showing how to define a schema of two tables for an imaginary blogging platform. One is a table of users, and the other is a table of posts uploaded.</p><pre><code class="language-Python">from sqlalchemy import *
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.sql import *
engine = create_engine('sqlite:///demo.db')
Base = declarative_base()
class Users(Base):
__tablename__ = "users"
UserId = Column(Integer, primary_key=True)
Title = Column(String)
FirstName = Column(String)
LastName = Column(String)
Email = Column(String)
Username = Column(String)
DOB = Column(DateTime)
class Uploads(Base):
__tablename__ = "uploads"
UploadId = Column(Integer, primary_key=True)
UserId = Column(Integer)
Title = Column(String)
Body = Column(String)
Timestamp = Column(DateTime)
Users.__table__.create(bind=engine, checkfirst=True)
Uploads.__table__.create(bind=engine, checkfirst=True)</code></pre><p>First, import everything you need from SQLAlchemy. Then, use <code>create_engine(connection_string)</code> to connect to your database. The exact connection string will depend on the version of SQL you are working with. This example uses a relative path to the SQLite database created earlier.</p><p>Next, start defining your table classes. The first one in the example is <code>Users</code>. Each column in this table is defined as a class variable using SQLAlchemy’s <code>Column(type)</code>, where <code>type</code> is a data type (such as <code>Integer</code>, <code>String</code>, <code>DateTime</code> and so on). Use <code>primary_key=True</code> to denote columns which will be used as primary keys.</p><p>The next table defined here is <code>Uploads</code>. It’s very much the same idea — each column is defined as before.</p><p>The final two lines actually create the tables. The <code>checkfirst=True</code> parameter ensures that new tables are only created if they do not currently exist in the database.</p><h4 id="extract">Extract</h4><p>Once the schema has been defined, the next task is to <strong>extract</strong> the raw data from its source. The exact details can vary wildly from case to case, depending on how the raw data is provided. Maybe your app calls an in-house or third-party API, or perhaps you need to read data logged in a CSV file.</p><p>The example below uses two APIs to simulate data for the fictional blogging platform described above. The <code>Users</code> table will be populated with profiles randomly generated at <a href="https://randomuser.me/" rel="noopener">randomuser.me</a>, and the <code>Uploads</code> table will contain lorem ipsum-inspired data courtesy of <a href="http://jsonplaceholder.typicode.com/" rel="noopener">JSONPlaceholder</a>.</p><p>Python’s <code>Requests</code> module can be used to call these APIs, as shown below:</p><pre><code class="language-Python">import requests
url = 'https://randomuser.me/api/?results=10'
users_json = requests.get(url).json()
url2 = 'https://jsonplaceholder.typicode.com/posts/'
uploads_json = requests.get(url2).json()</code></pre><p>The data is currently held in two objects (<code>users_json</code> and <code>uploads_json</code>) in JSON format. The next step will be to transform and load this data into the tables defined earlier.</p><h4 id="transform">Transform</h4><p>Before the data can be loaded into the database, it is important to ensure that it is in the correct format. The JSON objects created in the code above are nested, and contain more data than is required for the tables defined.</p><p>An important intermediary step is to <strong>transform</strong> the data from its current nested JSON format to a flat format that can be safely written to the database without error.</p><p>For the example running through this article, the data are relatively simple, and won’t need much transformation. The code below creates two lists, <code>users</code> and <code>uploads</code>, which will be used in the final step:</p><pre><code class="language-Python">from datetime import datetime, timedelta
from random import randint
users, uploads = [], []
for i, result in enumerate(users_json['results']):
row = {}
row['UserId'] = i
row['Title'] = result['name']['title']
row['FirstName'] = result['name']['first']
row['LastName'] = result['name']['last']
row['Email'] = result['email']
row['Username'] = result['login']['username']
dob = datetime.strptime(result['dob'],'%Y-%m-%d %H:%M:%S')
row['DOB'] = dob.date()
users.append(row)
for result in uploads_json:
row = {}
row['UploadId'] = result['id']
row['UserId'] = result['userId']
row['Title'] = result['title']
row['Body'] = result['body']
delta = timedelta(seconds=randint(1,86400))
row['Timestamp'] = datetime.now() - delta
uploads.append(row)</code></pre><p>The main step here is to iterate through the JSON objects created before. For each result, create a new Python dictionary object with keys corresponding to each column defined for the relevant table in the schema. This ensures that the data is no longer nested, and keeps only the data needed for the tables.</p><p>The other step is to use Python’s <code>datetime</code> module to manipulate dates, and transform them into <code>DateTime</code> type objects that can be written to the database. For the sake of this example, random <code>DateTime</code> objects are generated using the <code>timedelta()</code> method from Python’s DateTime module.</p><p>Each created dictionary is appended to a list, which will be used in the final step of the pipeline.</p><h4 id="load">Load</h4><p>Finally, the data is in a form that can be <strong>loaded</strong> into the database. SQLAlchemy makes this step straightforward through its Session API.</p><p>The Session API acts a bit like a middleman, or “holding zone,” for Python objects you have either loaded from or associated with the database. These objects can be manipulated within the session before being committed to the database.</p><p>The code below creates a new session object, adds rows to it, then merges and commits them to the database:</p><pre><code class="language-Python">Session = sessionmaker(bind=engine)
session = Session()
for user in users:
row = Users(**user)
session.add(row)
for upload in uploads:
row = Uploads(**upload)
session.add(row)
session.commit()</code></pre><p>The <code>sessionmaker</code> factory is used to generate newly-configured <code>Session</code> classes. <code>Session</code> is an everyday Python class that is instantiated on the second line as <code>session</code>.</p><p>Next up are two loops which iterate through the <code>users</code> and <code>uploads</code> lists created earlier. The elements of these lists are dictionary objects whose keys correspond to the columns given in the <code>Users</code> and <code>Uploads</code> classes defined previously.</p><p>Each object is used to instantiate a new instance of the relevant class (using Python’s handy <code>some_function(**some_dict)</code> trick). This object is added to the current session with <code>session.add()</code>.</p><p>Finally, when the session contains the rows to be added, <code>session.commit()</code> is used to commit the transaction to the database.</p><h4 id="aggregating">Aggregating</h4><p>Another cool feature of SQLAlchemy is the ability to use its Expression Language system to write and execute backend-agnostic SQL queries.</p><p>What are the advantages of writing backend-agnostic queries? For a start, they make any future migration projects a whole lot easier. Different versions of SQL have somewhat incompatible syntaxes, but SQLAlchemy’s Expression Language acts as a lingua franca between them.</p><p>Also, being able to query and interact with your database in a seamlessly Pythonic way is a real advantage to developers who’d prefer work entirely in the language they know best. However, SQLAlchemy will also let you work in plain SQL, for cases when it is simpler to use a pre-written query.</p><p>Here, we will extend the fictional blogging platform example to illustrate how this works. Once the basic Users and Uploads tables have been created and populated, a next step might be to create an <strong>aggregated</strong> table — for instance, showing how many articles each user has posted, and the time they were last active.</p><p>First, define a class for the aggregated table:</p><pre><code class="language-Python">class UploadCounts(Base):
__tablename__ = "upload_counts"
UserId = Column(Integer, primary_key=True)
LastActive = Column(DateTime)
PostCount = Column(Integer)
UploadCounts.__table__.create(bind=engine, checkfirst=True)</code></pre><p>This table will have three columns. For each <code>UserId</code>, it will store the timestamp of when they were last active, and a count of how many posts they have uploaded.</p><p>In plain SQL, this table would be populated using a query along the lines of:</p><pre><code class="language-SQL">INSERT INTO upload_counts
SELECT
UserId,
MAX(Timestamp) AS LastActive,
COUNT(UploadId) AS PostCount
FROM
uploads
GROUP BY 1;</code></pre><p>In SQLAlchemy, this would be written as:</p><pre><code class="language-Python">connection = engine.connect()
query = select([Uploads.UserId,
func.max(Uploads.Timestamp).label('LastActive'),
func.count(Uploads.UploadId).label('PostCount')]).\
group_by('UserId')
results = connection.execute(query)
for result in results:
row = UploadCounts(**result)
session.add(row)
session.commit()</code></pre><p>The first line creates a <code>Connection</code> object using the <code>engine</code> object’s <code>connect()</code> method. Next, a query is defined using the <code>select()</code> function.</p><p>This query is the same as the plain SQL version given above. It selects the <code>UserId</code> column from the <code>uploads</code> table. It also applies <code>func.max()</code> to the <code>Timestamp</code> column, which identifies the most recent timestamp. This is labelled <code>LastActive</code> using the <code>label()</code> method.</p><p>Likewise, the query applies <code>func.count()</code> to count the number of records that appear in the <code>Title</code> column. This is labelled <code>PostCount</code>.</p><p>Finally, the query uses <code>group_by()</code> to group results by <code>UserId</code>.</p><p>To use the results of the query, a for loop iterates over the row objects returned by <code>connection.execute(query)</code>. Each row is used to instantiate an instance of the <code>UploadCounts</code> table class. As before, each row is added to the <code>session</code> object, and finally the session is committed to the database.</p><h4 id="checking-out">Checking out</h4><p>Once you have run this script, you may want to convince yourself that the data have been written correctly into the <code>demo.db</code> database created earlier.</p><p>After quitting Python, open the database in SQLite:</p><pre><code>$ sqlite3 demo.db</code></pre><p>Now, you should be able to run the following queries:</p><pre><code class="language-SQL">SELECT * FROM users;
SELECT * FROM uploads;
SELECT * FROM upload_counts;</code></pre><p>And the contents of each table will be printed to the console! By scheduling the Python script to run at regular intervals, you can be sure the database will be kept up-to-date.</p><p>You could now use these tables to write queries for further analysis, or to build dashboards for visualisation purposes.</p><h4 id="reading-further">Reading further</h4><p>If you’ve made it this far, then hopefully you’ll have learned a thing or two about how SQLAlchemy can make ETL development in Python much more straightforward!</p><p>It is not possible for a single article to do full justice to all the features of SQLAlchemy. However, one of the project’s key advantages is the depth and detail of its documentation. You can dive into it <a href="http://docs.sqlalchemy.org/en/latest/" rel="noopener">here</a>.</p><p>Otherwise, check out <a href="https://github.com/crazyguitar/pysheeet/blob/master/docs/notes/python-sqlalchemy.rst" rel="noopener">this cheatsheet</a> if you want to get started quickly.</p><p>The full code for this article can be found in <a href="https://gist.github.com/anonymous/a2fc91fdb87dbfaee365f6707e94c442" rel="noopener">this gist</a>.</p><p>Thanks for reading! If you have any questions or comments, please leave a response below.</p>
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
