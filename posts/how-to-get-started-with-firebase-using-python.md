---
card: "https://cdn-media-2.freecodecamp.org/w1280/6015593f0a2838549dcbb3b9.jpg"
tags: [Python]
description: "This article a detailed guide that ll help you set up your Fi"
author: "Milad E. Fahmy"
title: "How to Get Started with Firebase Using Python"
created: "2021-08-16T15:34:48+02:00"
modified: "2021-08-16T15:34:48+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-firebase tag-database ">
<header class="post-full-header">
<h1 class="post-full-title">How to Get Started with Firebase Using Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/6015593f0a2838549dcbb3b9.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/6015593f0a2838549dcbb3b9.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/6015593f0a2838549dcbb3b9.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/6015593f0a2838549dcbb3b9.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/6015593f0a2838549dcbb3b9.jpg" alt="How to Get Started with Firebase Using Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
cred_obj = firebase_admin.credentials.Certificate('....path to file')
default_app = firebase_admin.initialize_app(cred_object, {
'databaseURL':databaseURL
ref = db.reference("/")</code></pre><p>We set the reference to the root of the database (or we could also set it to a key value or child key value). The question that naturally arises is what schema is allowed for storing data in Realtime databases? </p><p>All data to be stored must be in JSON format, that is, a sequence of key value pairs. If you need a system generated key, you could opt for using the <code>push()</code> function which we'll cover shortly. </p><p>Let's construct a suitable JSON which can be saved in the database. We have information regarding four books as follows:</p><pre><code class="language-json">{
"Book1":
{
"Title": "The Fellowship of the Ring",
"Author": "J.R.R. Tolkien",
"Genre": "Epic fantasy",
"Price": 100
},
"Book2":
{
"Title": "The Two Towers",
"Author": "J.R.R. Tolkien",
"Genre": "Epic fantasy",
"Price": 100
},
"Book3":
{
"Title": "The Return of the King",
"Author": "J.R.R. Tolkien",
"Genre": "Epic fantasy",
"Price": 100
},
"Book4":
{
"Title": "Brida",
"Author": "Paulo Coelho",
"Genre": "Fiction",
"Price": 100
}
}</code></pre><p>We load the required JSON file and save data to the database like this:</p><pre><code>import json
with open("book_info.json", "r") as f:
file_contents = json.load(f)
ref.set({
"Books":
{
"Best_Sellers": -1
}
})
ref = db.reference("/Books/Best_Sellers")
import json
with open("book_info.json", "r") as f:
file_contents = json.load(f)
for key, value in file_contents.items():
best_sellers = ref.get()
print(best_sellers)
for key, value in best_sellers.items():
if(value["Author"] == "J.R.R. Tolkien"):
value["Price"] = 90
ref.child(key).update({"Price":80})
print(ref.order_by_child("Price").get())</code></pre><p>The return value of the method is an OrderedDict. To order by key, use <code>order_by_key()</code>. To get the book with maximum price, we use the <code>limit_to_last()</code> method as follows:</p><pre><code>ref.order_by_child("Price").limit_to_last(1).get()</code></pre><p>Alternatively, to get the least priced book, we write this:</p><pre><code>ref.order_by_child("Price").limit_to_first(1).get()</code></pre><p>To get books that are exactly priced at 80 units, we use this:</p><pre><code>ref.order_by_child("Price").equal_to(80).get()</code></pre><p>For more examples and methods to query the database as per your requirements, check out the official documentation <a href="https://firebase.google.com/docs/database/admin/retrieve-data">here</a>.</p><h2 id="how-to-delete-data-from-firebase-using-python">How to Delete Data from Firebase Using Python</h2><p>Deleting data is pretty simple. Let's delete all best seller books with J.R.R. Tolkien as the author.</p><pre><code>ref = db.reference("/Books/Best_Sellers")
for key, value in best_sellers.items():
if(value["Author"] == "J.R.R. Tolkien"):
ref.child(key).set({})
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
