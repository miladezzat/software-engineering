---
card: "https://cdn-media-1.freecodecamp.org/images/1*WcHHixgDq7o5lN3biKIu9Q.png"
tags: [JavaScript]
description: "Featured in Mybridge’s Top Ten NodeJS articles from October 2"
author: "Milad E. Fahmy"
title: "How to Build your Own Uber-for-X App"
created: "2021-08-16T10:27:18+02:00"
modified: "2021-08-16T10:27:18+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development tag-startup tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build your Own Uber-for-X App</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*WcHHixgDq7o5lN3biKIu9Q.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*WcHHixgDq7o5lN3biKIu9Q.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*WcHHixgDq7o5lN3biKIu9Q.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*WcHHixgDq7o5lN3biKIu9Q.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*WcHHixgDq7o5lN3biKIu9Q.png" alt="How to Build your Own Uber-for-X App">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<blockquote>
<p><strong>Update: Check-out the latest version on my <a href="https://blog.booleanhunter.com/how-to-build-your-own-uber-for-x-app/">tech blog</a>!</strong><br>
This article is now a few years old - and due to JavaScript's rapidly changing ecosystem, the article has become slightly outdated. Click on the above link for the updated version of this article and the project.</p>
</blockquote>
<hr>
"_id" : ObjectId("57e75af5eb1b8edc94406943"),
"userId" : "01",
"displayName" : "Cop 1",
"phone" : "01",
"email" : "cop01@gmail.com",
"earnedRatings" : 21,
"totalRatings" : 25,
"location" : {
"type" : "Point",
"address" : "Kalyan Nagar, Bengaluru, Karnataka 560043, India",
"coordinates" : [
77.63997110000003,
13.0280047
]
}
}</code></pre><h4 id="using-mongodb-geospatial-indexes"><strong>Using MongoDB geospatial indexes</strong></h4><p>Geospatial indexes allow you to store <a href="http://geojson.org/" rel="noopener">GeoJSON</a> objects within documents.</p><p>GeoJSON objects can be of different <a href="https://docs.mongodb.com/manual/reference/geojson/#overview" rel="noopener">types</a>, such as <em>Point, LineString </em>and <em>Polygon.</em></p><p>If you observe the output of your <em>.find() </em>command, you’ll notice that every <em>location</em> is an object which has the <em>type </em>field and the <em>coordinates </em>field within it. This is important, because if you store your GeoJSON object as a <em>Point </em>type, you can use the <a href="https://docs.mongodb.com/manual/reference/operator/query/near/" rel="noopener">$near</a> command to query for points within certain proximity for a given longitude and latitude.</p><p>To use this, you need to create a <a href="https://docs.mongodb.com/v3.2/core/2dsphere/" rel="noopener"><em>2dsphere</em></a> index (which is a geospatial index) on the <em>location </em>field, and have a <em>type </em>field within it. The <em>2dsphere </em>index supports queries that calculate geometries on an earth-like sphere. This includes MongoDB geospatial queries: queries for inclusion, intersection and proximity.</p><p>So type this in your mongo shell:</p><pre><code>db.policeData.createIndex({"location": "2dsphere"})</code></pre><p>Now, to fetch documents from nearest to furthest from a given pair of co-ordinates, you need to issue a command with this syntax :</p><pre><code class="language-javascript">db.&lt;collectionName&gt;.find({
&lt;fieldName&gt;: {
$near: {
$geometry: {
type: "Point",
coordinates: [&lt;longitude&gt;, &lt;latitude&gt;]
},
$minDistance: &lt;distance in metres&gt;,
$maxDistance: &lt;distance in metres&gt;
}
}
}).pretty()</code></pre><p>$minDistance and $maxDistance are optional fields. Now, to get all cops that are located within 2 kilometers from <em>latitude 12.9718915</em> and <em>longitude 77.64115449999997, </em>run this :</p><pre><code class="language-javascript">db.policeData.find({
location: {
$near: {
$geometry: {
type: "Point",
coordinates: [77.64115449999997, 12.9718915]
},
$maxDistance: 2000
}
}
}).pretty()</code></pre><p>And that’s it — you’ll find a list of documents returned in the output!</p><p>Perfect! Now let’s try doing the same with a web server. Download this <a href="https://github.com/booleanhunter/code-samples/blob/master/blog-posts/how-to-build-your-own-uber-for-x-app/package.json" rel="noopener">package.json</a> file and save it in the root of your project folder (make sure you named it <em>package.json</em>), and then in your terminal, <em>cd </em>to the directory that contains the file and run</p><pre><code>sudo npm install</code></pre><p>A brief explanation about some of the packages that you’re going to use :</p><ul><li><a href="https://expressjs.com/" rel="noopener">Express</a> is a web framework for NodeJS. It has lots of APIs, utilities and middlewares in its ecosystem to help you build your application.</li><li><a href="https://github.com/expressjs/body-parser" rel="noopener">body-parser</a> parses incoming request bodies in a middleware before your handlers, available under the <em>req.body</em> property. You need this so you can handle POST requests.</li><li><a href="http://underscorejs.org/" rel="noopener">underscore</a> makes writing JavaScript simpler. Feel free to use another library if you prefer.</li><li><a href="http://socket.io" rel="noopener">socket.io</a> lets you use web sockets within your Node application.</li><li><a href="https://www.npmjs.com/package/mongodb" rel="noopener">mongodb</a> is the official NodeJS driver for MongoDB. It helps your Node app talk to your database.</li></ul><p>The package.json file contains other modules as well. You’ll need them while building a complete app, but I’ll focus on how to use the <em>mongodb</em> driver in your express app to execute queries. Here’s what some of the other modules do :</p><ul><li><a href="https://www.npmjs.com/package/async" rel="noopener">async</a> is a utility for dealing with asynchronous code in NodeJS. It helps you avoid callback hell.</li><li><a href="https://www.npmjs.com/package/debug" rel="noopener">debug</a> is a debugging library. This handy tool helps debug your programs without the use of ugly <em>console.log </em>statement outputs.</li><li><a href="https://www.npmjs.com/package/redis" rel="noopener">redis</a> is similar to the <em>mongodb </em>driver. It lets your NodeJS app talk to your Redis database.</li><li><a href="https://www.npmjs.com/package/connect-redis" rel="noopener">connect-redis</a> is a session store that uses Redis to manage sessions. You’ll need this later when you decide to have user accounts.</li></ul><p>Before you write code, it’ll be helpful to organize it first. For now, you can use two files:</p><ul><li>A file for writing your API endpoints</li><li>A file that uses database drivers for database related operations. The route-handler would decide which function to call from the database file. Once a query is performed, the results are returned back to your route-handler with the help of a callback function.</li></ul><p>Let’s see how this looks like when you write your code:</p><pre><code class="language-javascript">var http = require("http");
var express = require("express");
var consolidate = require("consolidate");//1
var _ = require("underscore");
var bodyParser = require('body-parser');
var routes = require('./routes'); //File that contains our endpoints
var mongoClient = require("mongodb").MongoClient;
var app = express();
app.use(bodyParser.urlencoded({
extended: true,
}));
app.use(bodyParser.json({limit: '5mb'}));
app.set('views', 'views'); //Set the folder-name from where you serve the html page.
app.use(express.static('./public')); //setting the folder name (public) where all the static files like css, js, images etc are made available
app.set('view engine','html');
app.engine('html',consolidate.underscore);
var portNumber = 8000; //for locahost:8000
http.createServer(app).listen(portNumber, function(){ //creating the server which is listening to the port number:8000, and calls a function within in which calls the initialize(app) function in the router module
console.log('Server listening at port '+ portNumber);
var url = 'mongodb://localhost:27017/myUberApp';
mongoClient.connect(url, function(err, db) { //a connection with the mongodb is established here.
console.log("Connected to Database");
routes.initialize(app, db); //function defined in routes.js which is exported to be accessed by other modules
});
});
/* 1. Not all the template engines work uniformly with express, hence this library in js, (consolidate), is used to make the template engines work uniformly. Altough it doesn't have any
modules of its own and any template engine to be used should be seprately installed!*/
</code></pre><p>In this example, you create a new instance of the <em>MongoClient</em> object from the <em>mongodb </em>module. Once the web server begins, you connect to your MongoDB database using the <em>connect </em>function that’s exposed by your <em>MongoClient </em>instance. After it initializes the connection, it returns a <em>Db </em>instance in the callback.</p><p>You can now pass both the <em>app </em>and <em>db </em>instances to the <em>initialize </em>function of your <em>routes.js </em>file.</p><p>Next, you need to create a new file called <em>routes.js</em>, and add this code:</p><pre><code class="language-js">function initialize(app, db) {
//A GET request to /cops should return back the nearest cops in the vicinity.
app.get('/cops', function(req, res){
/*extract the latitude and longitude info from the request. Then, fetch the nearest cops using MongoDB's geospatial queries and return it back to the client.
*/
});
}
exports.initialize = initialize;</code></pre><p>For this to work, you’ll have to pass the coordinates as query strings in your request. You’ll also write your database operations in another file. So go ahead and create a new file <em>db-operations.js, </em>and write this:</p><pre><code class="language-javascript">function fetchNearestCops(db, coordinates, callback) {
db.collection('policeData').createIndex({
"location": "2dsphere"
}, function() {
db.collection("policeData").find({
location: {
$near: {
$geometry: {
type: "Point",
coordinates: coordinates
},
$maxDistance: 2000
}
}
}).toArray(function(err, results) {
if(err) {
console.log(err)
}else {
callback(results);
}
});
});
}
exports.fetchNearestCops = fetchNearestCops;</code></pre><p>This function accepts three arguments: an instance of <em>db</em>, an array that contains co-ordinates in the order [&lt;longitude&gt;,&lt;latitude&gt;], and a callback function, to which it returns the results of your query.</p><p>The <em>createIndex </em>ensures that an index is created on the specified field if it doesn’t exist, so you may want to skip that if you have already created an index prior to querying.</p><p>Now, all that’s left to do is to call this function inside your handler. So modify your <em>routes.js </em>code to this:</p><pre><code class="language-javascript">var dbOperations = require('./db-operations');
function initialize(app, db) {
// '/cops?lat=12.9718915&amp;&amp;lng=77.64115449999997'
app.get('/cops', function(req, res){
//Convert the query strings into Numbers
var latitude = Number(req.query.lat);
var longitude = Number(req.query.lng);
dbOperations.fetchNearestCops(db, [longitude,latitude], function(results){
//return the results back to the client in the form of JSON
res.json({
cops: results
});
});
});
}
<p><a href="https://www.patreon.com/bePatron?u=20804433" data-patreon-widget-type="become-patron-button">Become a Patron!</a></p>
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
