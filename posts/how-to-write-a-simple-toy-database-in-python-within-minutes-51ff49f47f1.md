---
card: "https://cdn-media-1.freecodecamp.org/images/1*yp-GUhlz1nZTRbkW-ye2HA.jpeg"
tags: [Python]
description: "MySQL, PostgreSQL, Oracle, Redis, and many more, you just nam"
author: "Milad E. Fahmy"
title: "How to write a simple toy database in Python within minutes"
created: "2021-08-16T15:39:29+02:00"
modified: "2021-08-16T15:39:29+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-database tag-json tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to write a simple toy database in Python within minutes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*yp-GUhlz1nZTRbkW-ye2HA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*yp-GUhlz1nZTRbkW-ye2HA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*yp-GUhlz1nZTRbkW-ye2HA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*yp-GUhlz1nZTRbkW-ye2HA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*yp-GUhlz1nZTRbkW-ye2HA.jpeg" alt="How to write a simple toy database in Python within minutes">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>MySQL, PostgreSQL, Oracle, Redis, and many more, you just name it — databases are a really important piece of technology in the progress of human civilization. Today we can see how valuable <strong>data</strong> are, and so keeping them safe and stable is where the database comes in!</p><p>So we can see how important databases are as well. For a quite some time I was thinking of creating My Own Toy Database just to understand, play around, and experiment with it. As <a href="https://en.wikipedia.org/wiki/Richard_Feynman" rel="noopener"><strong>Richard Feynman</strong></a> said:</p><blockquote><strong><em>“What I cannot create, I do not understand.”</em></strong></blockquote><p>So without any further talking let’s jump into the fun part: coding.</p><h3 id="let-s-start-coding-">Let’s Start Coding…</h3><p>For this Toy Database, we’ll use <strong>Python</strong> (my favorite ❤️). I named this database <strong>FooBarDB</strong> (I couldn’t find any other name ?), but you can call it whatever you want!</p><p>So first let’s import some necessary Python libraries which are already available in Python Standard Library:</p><pre><code class="language-python">import json
import os</code></pre><p>Yes, we only need these two libraries! We need <code>json</code> as our database will be based on JSON, and <code>os</code> for some path related stuff.</p><p>Now let’s define the main class <code>FoobarDB</code> with some pretty basic functions, which I'll explain below.</p><pre><code class="language-python">class FoobarDB(object):
def __init__(self , location):
self.location = os.path.expanduser(location)
self.load(self.location)
def load(self , location):
if os.path.exists(location):
self._load()
else:
self.db = {}
return True
def _load(self):
self.db = json.load(open(self.location , "r"))
def dumpdb(self):
try:
json.dump(self.db , open(self.location, "w+"))
return True
except:
return False</code></pre><p>Here we defined our main class with an <code>__init__</code> function. Whenever creating a Foobar Database we only need to pass the location of the database. In the first <code>__init__</code> function we take the location parameter and replace <code>~</code> or <code>~user</code> with user’s home directory to make it work intended way. And finally, put it in <code>self.location</code> variable to access it later on the same class functions. In the end, we are calling the <code>load</code> function passing <code>self.location</code> as an argument.</p><pre><code class="language-python">. . . .
def load(self , location):
if os.path.exists(location):
self._load()
else:
self.db = {}
return True
. . . .</code></pre><p>In the next <code>load</code> function we take the location of the database as a param. Then check if the database exists or not. If it exists, we load it with the <code>_load()</code> function (explained below). Otherwise, we create an empty in-memory JSON object. And finally, return true on success.</p><pre><code class="language-python">. . . .
def _load(self):
self.db = json.load(open(self.location , "r"))
. . . .</code></pre><p>In the <code>_load</code> function, we just simply open the database file from the location stored in <code>self.location</code>. Then we transform it into a JSON object and load it into <code>self.db</code> variable.</p><pre><code class="language-py">. . . .
def dumpdb(self):
try:
json.dump(self.db , open(self.location, "w+"))
return True
except:
return False
. . . .</code></pre><p>And finally, the <code>dumpdb</code> function: its name says what it does. It takes the in-memory database (actually a JSON object) from the <code>self.db</code> variable and saves it in the database file! It returns <strong>True</strong> if saved successfully, otherwise returns <strong>False.</strong></p><h3 id="make-it-a-little-more-usable-">Make It a Little More Usable… ?</h3><p>Wait a minute! ? A database is useless if it can’t store and retrieve data, isn’t it? Let’s go and add them also…?</p><pre><code class="language-py">. . . .
def set(self , key , value):
try:
self.db[str(key)] = value
self.dumpdb()
return True
except Exception as e:
print("[X] Error Saving Values to Database : " + str(e))
return False
def get(self , key):
try:
return self.db[key]
except KeyError:
print("No Value Can Be Found for " + str(key))
return False
def delete(self , key):
if not key in self.db:
return False
del self.db[key]
self.dumpdb()
return True
. . . .</code></pre><p>The <code>set</code> function is to add data to the database. As our database is a simple key-value based database, we’ll only take a <code>key</code> and <code>value</code> as an argument.</p><p>First, we’ll try to add the key and value to the database and then save the database. If everything goes right it will return True. Otherwise, it will print an error message and return False. (We don’t want it to crash and erase our data every time an error occurs ?).</p><pre><code class="language-py">. . . .
def get(self, key):
try:
return self.db[key]
except KeyError:
return False
. . . .</code></pre><p><code>get</code> is a simple function, we take <code>key</code> as an argument and try to return the value linked to the key from the database. Otherwise False is returned with a message.</p><pre><code class="language-py">. . . .
def delete(self , key):
if not key in self.db:
return False
del self.db[key]
self.dumpdb()
return True
. . . .</code></pre><p><code>delete</code> function is to delete a key as well as its value from the database. First, we make sure the key is present in the database. If not we return False. Otherwise, we delete the key with the built-in <code>del</code> which automatically deletes the value of the key. Next, we save the database and it returns false.</p><p>Now you might think, what if I’ve created a large database and want to reset it? In theory, we can use <code>delete</code> — but it's not practical, and it’s also very time-consuming! ⏳ So we can create a function to do this task...</p><pre><code class="language-py">. . . .
def resetdb(self):
self.db={}
self.dumpdb()
return True
<p>If You Like My Work (My Articles, Stories, Softwares, Researches and many more) Consider <a href="https://www.buymeacoffee.com/palash">Buying Me A Coffee ☕</a> ?</p>
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
