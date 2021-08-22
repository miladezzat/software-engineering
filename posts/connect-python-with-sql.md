---
card: "/images/default.jpg"
tags: [Sql]
description: "Python and SQL are two of the most important languages for Da"
author: "Milad E. Fahmy"
title: "How to Create and Manipulate SQL Databases with Python"
created: "2021-08-16T15:35:36+02:00"
modified: "2021-08-16T15:35:36+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-sql tag-python tag-database tag-data-analysis tag-mysql ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create and Manipulate SQL Databases with Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/08/Untitled-design-1-.png 300w,
/news/content/images/size/w600/2020/08/Untitled-design-1-.png 600w,
/news/content/images/size/w1000/2020/08/Untitled-design-1-.png 1000w,
/news/content/images/size/w2000/2020/08/Untitled-design-1-.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/08/Untitled-design-1-.png" alt="How to Create and Manipulate SQL Databases with Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<ul>
<li>Why learn how to use Python and SQL together?</li>
<li>How to set up your Python environment and MySQL Server</li>
<li>Connecting to MySQL Server in Python</li>
<li>Creating a new Database</li>
<li>Creating Tables and Table Relationships</li>
<li>Populating Tables with Data</li>
<li>Reading Data</li>
<li>Updating Records</li>
<li>Deleting Records</li>
<li>Creating Records from Python Lists</li>
<li>Creating re-usable functions to do all of this for us in the future</li>
</ul>
from mysql.connector import Error
connection = None
try:
connection = mysql.connector.connect(
host=host_name,
user=user_name,
passwd=user_password
)
print("MySQL Database connection successful")
except Error as err:
print(f"Error: '{err}'")
cursor = connection.cursor()
try:
cursor.execute(query)
print("Database created successfully")
except Error as err:
connection = None
try:
connection = mysql.connector.connect(
host=host_name,
user=user_name,
passwd=user_password,
database=db_name
)
print("MySQL Database connection successful")
except Error as err:
print(f"Error: '{err}'")
return connection</code></pre><p>This is the exact same function, but now we take one more argument - the database name - and pass that as an argument to the connect() method.</p><h3 id="creating-a-query-execution-function">Creating a Query Execution Function</h3><p>The final function we're going to create (for now) is an extremely vital one - a query execution function. This is going to take our SQL queries, stored in Python as strings, and pass them to the <a href="https://dev.mysql.com/doc/connector-python/en/connector-python-api-mysqlcursor-execute.html">cursor.execute() </a>method to execute them on the server. </p><pre><code class="language-Python">def execute_query(connection, query):
cursor = connection.cursor()
try:
cursor.execute(query)
connection.commit()
print("Query successful")
except Error as err:
print(f"Error: '{err}'")</code></pre><p>This function is exactly the same as our create_database function from earlier, except that it uses the <a href="https://dev.mysql.com/doc/connector-python/en/connector-python-api-mysqlconnection-commit.html">connection.commit()</a> method to make sure that the commands detailed in our SQL queries are implemented. </p><p>This is going to be our workhorse function, which we will use (alongside create_db_connection) to create tables, establish relationships between those tables, populate the tables with data, and update and delete records in our database.</p><p>If you're a SQL expert, this function will let you execute any and all of the complex commands and queries you might have lying around, directly from a Python script. This can be a very powerful tool for managing your data.</p><h2 id="creating-tables">Creating Tables</h2><p>Now we're all set to start running SQL commands into our Server and to start building our database. The first thing we want to do is to create the necessary tables. </p><p>Let's start with our Teacher table:</p><pre><code class="language-Python">create_teacher_table = """
CREATE TABLE teacher (
teacher_id INT PRIMARY KEY,
first_name VARCHAR(40) NOT NULL,
last_name VARCHAR(40) NOT NULL,
language_1 VARCHAR(3) NOT NULL,
language_2 VARCHAR(3),
dob DATE,
tax_id INT UNIQUE,
phone_no VARCHAR(20)
);
"""
connection = create_db_connection("localhost", "root", pw, db) # Connect to the Database
CREATE TABLE client (
client_id INT PRIMARY KEY,
client_name VARCHAR(40) NOT NULL,
address VARCHAR(60) NOT NULL,
industry VARCHAR(20)
);
"""
create_participant_table = """
CREATE TABLE participant (
participant_id INT PRIMARY KEY,
first_name VARCHAR(40) NOT NULL,
last_name VARCHAR(40) NOT NULL,
phone_no VARCHAR(20),
client INT
);
"""
create_course_table = """
CREATE TABLE course (
course_id INT PRIMARY KEY,
course_name VARCHAR(40) NOT NULL,
language VARCHAR(3) NOT NULL,
level VARCHAR(2),
course_length_weeks INT,
start_date DATE,
in_school BOOLEAN,
teacher INT,
client INT
);
"""
connection = create_db_connection("localhost", "root", pw, db)
execute_query(connection, create_client_table)
execute_query(connection, create_participant_table)
execute_query(connection, create_course_table)</code></pre><p>This creates the four tables necessary for our four entities. </p><p>Now we want to define the relationships between them and create one more table to handle the many-to-many relationship between the participant and course tables (see <a href="https://towardsdatascience.com/designing-a-relational-database-and-creating-an-entity-relationship-diagram-89c1c19320b2">here</a> for more details). </p><p>We do this in exactly the same way:</p><pre><code class="language-Python">alter_participant = """
ALTER TABLE participant
ADD FOREIGN KEY(client)
REFERENCES client(client_id)
ON DELETE SET NULL;
"""
alter_course = """
ALTER TABLE course
ADD FOREIGN KEY(teacher)
REFERENCES teacher(teacher_id)
ON DELETE SET NULL;
"""
alter_course_again = """
ALTER TABLE course
ADD FOREIGN KEY(client)
REFERENCES client(client_id)
ON DELETE SET NULL;
"""
create_takescourse_table = """
CREATE TABLE takes_course (
participant_id INT,
course_id INT,
PRIMARY KEY(participant_id, course_id),
FOREIGN KEY(participant_id) REFERENCES participant(participant_id) ON DELETE CASCADE,
FOREIGN KEY(course_id) REFERENCES course(course_id) ON DELETE CASCADE
);
"""
connection = create_db_connection("localhost", "root", pw, db)
execute_query(connection, alter_participant)
execute_query(connection, alter_course)
execute_query(connection, alter_course_again)
execute_query(connection, create_takescourse_table)</code></pre><p>Now our tables are created, along with the appropriate constraints, primary key, and foreign key relations.</p><h3 id="populating-the-tables">Populating the Tables</h3><p>The next step is to add some records to the tables. Again we use execute_query to feed our existing SQL commands into the Server. Let's again start with the Teacher table.</p><pre><code class="language-Python">pop_teacher = """
INSERT INTO teacher VALUES
(1,  'James', 'Smith', 'ENG', NULL, '1985-04-20', 12345, '+491774553676'),
(2, 'Stefanie',  'Martin',  'FRA', NULL,  '1970-02-17', 23456, '+491234567890'),
(3, 'Steve', 'Wang',  'MAN', 'ENG', '1990-11-12', 34567, '+447840921333'),
(4, 'Friederike',  'Müller-Rossi', 'DEU', 'ITA', '1987-07-07',  45678, '+492345678901'),
(5, 'Isobel', 'Ivanova', 'RUS', 'ENG', '1963-05-30',  56789, '+491772635467'),
(6, 'Niamh', 'Murphy', 'ENG', 'IRI', '1995-09-08',  67890, '+491231231232');
"""
connection = create_db_connection("localhost", "root", pw, db)
INSERT INTO client VALUES
(101, 'Big Business Federation', '123 Falschungstraße, 10999 Berlin', 'NGO'),
(102, 'eCommerce GmbH', '27 Ersatz Allee, 10317 Berlin', 'Retail'),
(103, 'AutoMaker AG',  '20 Künstlichstraße, 10023 Berlin', 'Auto'),
(104, 'Banko Bank',  '12 Betrugstraße, 12345 Berlin', 'Banking'),
(105, 'WeMoveIt GmbH', '138 Arglistweg, 10065 Berlin', 'Logistics');
"""
pop_participant = """
INSERT INTO participant VALUES
(101, 'Marina', 'Berg','491635558182', 101),
(102, 'Andrea', 'Duerr', '49159555740', 101),
(103, 'Philipp', 'Probst',  '49155555692', 102),
(104, 'René',  'Brandt',  '4916355546',  102),
(105, 'Susanne', 'Shuster', '49155555779', 102),
(106, 'Christian', 'Schreiner', '49162555375', 101),
(107, 'Harry', 'Kim', '49177555633', 101),
(108, 'Jan', 'Nowak', '49151555824', 101),
(109, 'Pablo', 'Garcia',  '49162555176', 101),
(110, 'Melanie', 'Dreschler', '49151555527', 103),
(111, 'Dieter', 'Durr',  '49178555311', 103),
(112, 'Max', 'Mustermann', '49152555195', 104),
(113, 'Maxine', 'Mustermann', '49177555355', 104),
(114, 'Heiko', 'Fleischer', '49155555581', 105);
"""
pop_course = """
INSERT INTO course VALUES
(12, 'English for Logistics', 'ENG', 'A1', 10, '2020-02-01', TRUE,  1, 105),
(13, 'Beginner English', 'ENG', 'A2', 40, '2019-11-12',  FALSE, 6, 101),
(14, 'Intermediate English', 'ENG', 'B2', 40, '2019-11-12', FALSE, 6, 101),
(15, 'Advanced English', 'ENG', 'C1', 40, '2019-11-12', FALSE, 6, 101),
(16, 'Mandarin für Autoindustrie', 'MAN', 'B1', 15, '2020-01-15', TRUE, 3, 103),
(17, 'Français intermédiaire', 'FRA', 'B1',  18, '2020-04-03', FALSE, 2, 101),
(18, 'Deutsch für Anfänger', 'DEU', 'A2', 8, '2020-02-14', TRUE, 4, 102),
(19, 'Intermediate English', 'ENG', 'B2', 10, '2020-03-29', FALSE, 1, 104),
(20, 'Fortgeschrittenes Russisch', 'RUS', 'C1',  4, '2020-04-08',  FALSE, 5, 103);
"""
pop_takescourse = """
INSERT INTO takes_course VALUES
(101, 15),
(101, 17),
(102, 17),
(103, 18),
(104, 18),
(105, 18),
(106, 13),
(107, 13),
(108, 13),
(109, 14),
(109, 15),
(110, 16),
(110, 20),
(111, 16),
(114, 12),
(112, 19),
(113, 19);
"""
connection = create_db_connection("localhost", "root", pw, db)
execute_query(connection, pop_client)
execute_query(connection, pop_participant)
execute_query(connection, pop_course)
execute_query(connection, pop_takescourse)</code></pre><p>Amazing! Now we have created a database complete with relations, constraints and records in MySQL, using nothing but Python commands. </p><p>We have gone through this step by step to keep it understandable. But by this point you can see that this could all very easily be written into one Python script and executed in one command in the terminal. Powerful stuff.</p><h2 id="reading-data">Reading Data </h2><p>Now we have a functional database to work with. As a Data Analyst, you are likely to come into contact with existing databases in the organisations where you work. It will be very useful to know how to pull data out of those databases so it can then be fed into your python data pipeline. This is what we are going to work on next.</p><p>For this, we will need one more function, this time using <a href="https://dev.mysql.com/doc/connector-python/en/connector-python-api-mysqlcursor-fetchall.html">cursor.fetchall()</a> instead of <a href="https://dev.mysql.com/doc/connector-python/en/connector-python-api-mysqlconnection-commit.html">cursor.commit()</a>. With this function, we are reading data from the database and will not be making any changes.</p><pre><code class="language-Python">def read_query(connection, query):
cursor = connection.cursor()
result = None
try:
cursor.execute(query)
result = cursor.fetchall()
return result
except Error as err:
print(f"Error: '{err}'")</code></pre><p>Again, we are going to implement this in a very similar way to execute_query. Let's try it out with a simple query to see how it works.</p><pre><code class="language-Python">q1 = """
SELECT *
FROM teacher;
"""
connection = create_db_connection("localhost", "root", pw, db)
results = read_query(connection, q1)
for result in results:
SELECT course.course_id, course.course_name, course.language, client.client_name, client.address
FROM course
JOIN client
ON course.client = client.client_id
WHERE course.in_school = FALSE;
"""
connection = create_db_connection("localhost", "root", pw, db)
results = read_query(connection, q5)
for result in results:
from_db = []
# Loop over the results and append them into our list
# Returns a list of tuples
for result in results:
result = result
from_db = []
for result in results:
result = list(result)
from_db = []
for result in results:
result = list(result)
from_db.append(result)
columns = ["course_id", "course_name", "language", "client_name", "address"]
UPDATE client
SET address = '23 Fingiertweg, 14534 Berlin'
WHERE client_id = 101;
"""
connection = create_db_connection("localhost", "root", pw, db)
DELETE FROM course
WHERE course_id = 20;
"""
connection = create_db_connection("localhost", "root", pw, db)
<ul>
<li>Create - entirely new databases, tables and records</li>
<li>Read - extract data from a database, and store that data in multiple formats</li>
<li>Update - make changes to existing records in the database</li>
<li>Delete - remove records which are no longer needed</li>
</ul>
cursor = connection.cursor()
try:
cursor.executemany(sql, val)
connection.commit()
print("Query successful")
except Error as err:
print(f"Error: '{err}'")</code></pre><p>Now we have the function, we need to define an SQL command ('sql') and a list containing the values we wish to enter into the database ('val'). The values must be stored as a <a href="https://www.w3schools.com/python/python_lists.asp">list</a> of <a href="https://www.w3schools.com/python/python_tuples.asp">tuples</a>, which is a fairly common way to store data in Python.</p><p>To add two new teachers to the database, we can write some code like this:</p><pre><code class="language-Python">sql = '''
INSERT INTO teacher (teacher_id, first_name, last_name, language_1, language_2, dob, tax_id, phone_no)
VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
'''
val = [
(7, 'Hank', 'Dodson', 'ENG', None, '1991-12-23', 11111, '+491772345678'),
(8, 'Sue', 'Perkins', 'MAN', 'ENG', '1976-02-02', 22222, '+491443456432')
]</code></pre><p>Notice here that in the 'sql' code we use the '%s' as a placeholder for our value. The resemblance to the <a href="https://stackoverflow.com/questions/4288973/whats-the-difference-between-s-and-d-in-python-string-formatting/48660475">'%s' placeholder</a> for a string in python is just coincidental (and frankly, very confusing), we want to use '%s' for all data types (strings, ints, dates, etc) with the MySQL Python Connector. </p><p>You can see a number of questions on <a href="https://stackoverflow.com/questions/20818155/not-all-parameters-were-used-in-the-sql-statement-python-mysql/20818201">Stackoverflow</a> where someone has become confused and tried to use <a href="https://stackoverflow.com/questions/4288973/whats-the-difference-between-s-and-d-in-python-string-formatting/48660475">'%d' placeholders</a> for integers because they're used to doing this in Python. This won't work here - we need to use a '%s' for each column we want to add a value to.</p><p>The executemany function then takes each tuple in our 'val' list and inserts the relevant value for that column in place of the placeholder and executes the SQL command for each tuple contained in the list.</p><p>This can be performed for multiple rows of data, so long as they are formatted correctly. In our example we will just add two new teachers, for illustrative purposes, but in principle we can add as many as we would like. </p><p>Let's go ahead and execute this query and add the teachers to our database.</p><pre><code class="language-Python">connection = create_db_connection("localhost", "root", pw, db)
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
