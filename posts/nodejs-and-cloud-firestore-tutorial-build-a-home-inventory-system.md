---
card: "/images/default.jpg"
tags: [node.js]
description: In this article, you'll practice your JavaScript skills while
author: "Milad E. Fahmy"
title: "Node.js and Cloud Firestore Tutorial – How to Build a Home Inventory System"
created: "2021-08-15T19:26:28+02:00"
modified: "2021-08-15T19:26:28+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-node-js tag-cloud-computing tag-firebase tag-firebase-cloud-functions tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">Node.js and Cloud Firestore Tutorial – How to Build a Home Inventory System</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/04/home-inventory-system-article.jpg 300w,
/news/content/images/size/w600/2021/04/home-inventory-system-article.jpg 600w,
/news/content/images/size/w1000/2021/04/home-inventory-system-article.jpg 1000w,
/news/content/images/size/w2000/2021/04/home-inventory-system-article.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/04/home-inventory-system-article.jpg" alt="Node.js and Cloud Firestore Tutorial – How to Build a Home Inventory System">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this article, you'll practice your JavaScript skills while streamlining your household chores by creating your very own home inventory system. </p>
<p>I've often found that it's hard to keep track common household items that I buy frequently such as food, spices, medicine, and the like. It's annoying at best and frustrating at worst when I uncover a long-forgotten packet of chips from the depths of the cupboard. </p>
<p>Tired of keeping track manually, I decided to make my own home inventory system. This system would allow me to:</p>
<ul>
<li>create records for each item, along with helpful information such as price and quantity</li>
<li>filter items on the basis of different criteria such as price, quantity and expiration date</li>
<li>sort items based on given criteria</li>
<li>delete items no longer in use</li>
<li>edit existing records</li>
</ul>
<p>In this tutorial I'll walk you through the process of how I built this system. Let's get started.</p>
<h2 id="how-to-define-the-database-schema">How to Define the Database Schema</h2>
<p><a href="https://firebase.google.com/docs/firestore">Cloud Firestore</a> is a cloud-hosted, scalable, flexible NoSQL database offered by Firebase. Data is stored in documents, and documents are grouped together into collections, similar to storing pages of information in a file and keeping multiple files together in a drawer. </p>
<p>Firestore offers powerful querying options ranging from simple sorting to adding limits to query results. </p>
<p>For our purposes, we'll define a Collection for a specific category. Each Document will correspond to a product within that category and the contents of a Document will be each field of information along with it's data value. For example: </p><pre><code class="language-python">"Snacks" : {
"Food_Item_1" : { "Price":P1, "Quantity":Q1, "ExpiryDate":D1},
"Food_Item_2" : { "Price":P2, "Quantity":Q2, "ExpiryDate":D2},
.
.
"Food_Item_N" : { "Price":PN, "Quantity":QN, "ExpiryDate":DN}
}</code></pre>
<p>Our Collection name would be Snacks, our Document names would be Food_Item_1, Food_Item_2 and so on, and the contents of each document would be price, quantity and expiry date.</p>
<h2 id="how-to-get-input-from-the-user">How to Get Input from the User</h2>
<p>Let's first create a few routes and views and import the required node modules. </p><pre><code>const express = require("express")
const app = express()
//Middleware to parse data in body portion of incoming request, like POST //request
const body_parser = require("body-parser")
objForUrlencoded = body_parser.urlencoded({extended:false})
app.set("view engine", "ejs")
app.use("/assets", express.static("assets"))
app.use(objForUrlencoded)
app.get("/", (req,res,next)=&gt;{//Show the homepage
res.render("homepage")
})
app.get("/save_data.ejs", (req,res,next)=&gt;{//Show the form for saving data
res.render("save_data")
})
app.get("/search_data.ejs", (req,res,next)=&gt;{//Show the form for searching data
res.render("search_data")
})
app.listen(1337, ()=&gt;{ console.log("Listening on port 1337")})</code></pre>
<p>Here we define a simple Express app which listens on port 1337 and renders pages as specified by the HTTP method (GET, POST) and URL. We create a simple form for user input. </p>
<p>Keep in mind that each HTML input field must have a name attribute which will later on serve as a key to access the corresponding values of the input field. For example:</p><pre><code>&lt;input type="text" name="productName"&gt;
&lt;br/&gt;&lt;br/&gt;
&lt;label for="productCategory"&gt;Product Category:&lt;/label&gt;
&lt;select name="productCategory"&gt;
&lt;option value="Snacks"&gt;Snacks&lt;/option&gt;
&lt;option value="Biscuits"&gt;Biscuits&lt;/option&gt;
&lt;option value="Spices"&gt;Spices&lt;/option&gt;
&lt;/select&gt;
&lt;br/&gt;&lt;br/&gt;
&lt;label for="price"&gt;Price:&lt;/label&gt;
&lt;input type="number" name="price"&gt;
&lt;br/&gt;&lt;br/&gt;
&lt;label for="quantity"&gt;Quantity:&lt;/label&gt;
&lt;input type="number" name="quantity"&gt;</code></pre>
<p>Later we can access the name of the product as the value of key "productName", the category of the product as the value of the key "productCategory", and so on.</p>
<h2 id="how-to-save-data-to-the-database">How to Save Data to the Database</h2>
<figcaption>Simple UI of the home inventory system</figcaption>
</figure>
<p>Okay then, now that we've got some data, let's save it to Firestore! This involves setting up a service account, obtaining a secret key, and using that to initialize the Credentials object to connect the database to our app using the Firebase Admin API. </p>
<p>For a more in-depth explanation of the process, you can check out their <a href="https://firebase.google.com/docs/database/admin/start">docs</a>. </p><pre><code>/*Set up Admin API for Firebase*/
const admin = require('firebase-admin');
//Define path to secret key generated for service account
const serviceAccount = require(PATH TO KEY);
//Initialize the app
admin.initializeApp({
credential: admin.credential.cert(serviceAccount)
});</code></pre>
<p>Here, we've used the path to the secret key which is a JSON file. You can do the same by defining environment variables as described <a href="https://firebase.google.com/docs/admin/setup#prerequisites">here</a>. </p>
<p>Next, we save our data to Firestore using the set method as follows:</p><pre><code>let db = admin.firestore()
//Depending on your schema, save data by specifying the collection name, //document name and data contents as follows
await db.collection(key).doc(prod).set(save_to_database[key][prod])</code></pre>
<p>Here are a few terms you should be familiar with while navigating the Firestore docs, particularly the <a href="https://firebase.google.com/docs/reference/js/firebase.firestore.CollectionReference">API reference</a>:</p>
<ul>
<li><strong>CollectionReference</strong> – this object is used for adding documents, getting DocumentReferences, and querying documents.</li>
<li><strong>DocumentReference</strong> – this refers to a document location in the database used to read/write/listen to that location.</li>
<li><strong>QuerySnapshot</strong> – an object that contains the results of a query</li>
<li><strong>DocumentSnapshot</strong> – contains data read from a document. You can extract the data using the .data() method.</li>
</ul>
<h2 id="how-to-query-the-data">How to Query the Data</h2>
<figcaption>Simple UI for searching/filtering the data</figcaption>
</figure>
<p>Once Firestore is packed with data, we can perform all sorts of complex queries on it. </p>
<p>Let's say we want to know how many items we have with the Category "Snacks". Whenever we execute a query, we get a QuerySnapshot which is a list of DocumentSnapshots. </p><pre><code>//Get all docs under the given category
helper_func_get_data = async (category, db) =&gt; {
const data = await db.collection(category).get()
if(data.empty)
{
return -1
}
else return data
}</code></pre>
<p>We can check if the query returned any data at all using the .empty property and iterate over all received documents using the forEach function like this:</p><pre><code>data.forEach((doc) =&gt; { Product_Info[doc.id] = doc.data()})
//Here data is a QuerySnapshot and Product_Info is a JavaScript object
//with document names as keys and their corresponding values. We can pass this
//object as an argument in render() method to display the received contents</code></pre>
<p>Here's how to figure out the total price of all Snacks:</p><pre><code>total_agg = 0
data.forEach((doc) =&gt; { total_agg+=doc.data()[aggregate_over]
//aggregate_over is a variable which defines criteria to sum over like price //or quantity</code></pre>
<p>To sort all Snacks on the basis of their price, do this:</p><pre><code>const data = await db.collection(category).orderBy(filter_criteria).get() </code></pre>
<p>where filter_criteria = "Price".</p>
<h2 id="how-to-delete-items-from-the-database">How to Delete Items from the Database</h2>
<p>Over time, our household items that we consume daily are depleted and we'll need to delete them from the database to maintain consistency. </p>
<p>Until there's a feasible mechanism to connect the refrigerator to Cloud Firestore, we'll have to manually delete our records for Snacks once we've eaten them.</p><pre><code>firebase_delete_data = async (category, response, product_name) =&gt; {
try
{
let db = admin.firestore()
await db.collection(category).doc(product_name).delete()
response.render("search_data")
}
catch(err)
{console.log(err)}
}</code></pre>
<h2 id="how-to-update-items-in-the-database">How to Update Items in the Database</h2><pre><code>firebase_update_data = async (category, response, reqbody) =&gt; {
try
{
let db = admin.firestore()
await db.collection(category).doc(reqbody["productName"]).update({"Price": parseFloat(reqbody["price"]), "Quantity": parseFloat(reqbody["quantity"]), "ExpiryDate": reqbody["expiryDate"]})
response.render("successpage")
}
catch(err)
{
console.log(err)
response.render("failurepage")
}
}</code></pre>
<p>Another common functionality we'll want to have is to update existing records in the database. </p>
<figcaption>Simple UI for updating product details</figcaption>
</figure>
<p>Once our functionalities are implemented, we export the functions to use from our Express app like this:</p><pre><code>module.exports = {
"firebase_save_data" : firebase_save_data,
"firebase_retrieve_data": firebase_retrieve_data,
"firebase_delete_data": firebase_delete_data,
"firebase_update_data": firebase_update_data
}</code></pre>
<p>and import the required module as follows:</p><pre><code>const firebase_functions = require("./firebase_CRUD_custom_code/firebase_functions.js")</code></pre>
<p>Then we can use our functions as required. For example, if we want to update any items we can do the following:</p><pre><code>app.post("/update", objForUrlencoded, (req,res) =&gt; {
firebase_functions.firebase_update_data(req.body["category"], res, req.body)
})</code></pre>
<h2 id="wrapping-up-">Wrapping up!</h2>
<p>To wrap up, in this article we learned about the data model of Cloud Firestore, how to save data, the mechanism for retrieving data, how to work with QuerySnapshots, sorting data on different filters, deleting items, and updating items through our Express app. </p>
<p>In this way, we can automate the task of tracking frequently used products in our households. We can also check which products are out of stock and so much more to make our busy lives easier. </p>
<p>I hope you enjoyed reading this article just as much as I enjoyed writing it. Thank you for your time, have a good day and happy coding!</p>
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
