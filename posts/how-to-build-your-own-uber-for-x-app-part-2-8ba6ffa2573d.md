---
card: "https://cdn-media-1.freecodecamp.org/images/1*WcHHixgDq7o5lN3biKIu9Q.png"
tags: [JavaScript]
description: "Featured in Mybridge’s Top Ten NodeJS articles from Jan-Feb 2"
author: "Milad E. Fahmy"
title: "How to Build your Own Uber-for-X App (PART 2)"
created: "2021-08-16T10:25:30+02:00"
modified: "2021-08-16T10:25:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-startup tag-tech tag-web-development tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build your Own Uber-for-X App (PART 2)</h1>
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
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*WcHHixgDq7o5lN3biKIu9Q.png" alt="How to Build your Own Uber-for-X App (PART 2)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<blockquote>
<p><strong>Update:</strong> Read the updated version of this article on my <a href="https://blog.booleanhunter.com/how-to-build-your-own-uber-for-x-app-part-2/">tech blog</a></p>
</blockquote>
<hr>
&lt;html lang = "en"&gt;
&lt;head&gt;
&lt;meta charset="utf-8"/&gt;
&lt;title&gt;Citizen &lt;%= userId %&gt; &lt;/title&gt;
&lt;/head&gt;
&lt;body data-userId="&lt;%= userId %&gt;"&gt;
&lt;h1&gt;Hello Citizen &lt;%= userId %&gt;&lt;/h1&gt;
&lt;h4 id="notification"&gt;
&lt;!-- Some info will be displayed here--&gt;
&lt;/h4&gt;
&lt;div id="map"&gt;
&lt;!-- We will load a map here later--&gt;
&lt;/div&gt;
&lt;!--Load JavaScripts --&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>Repeat this step for <em>cop.html </em>as well, but replace the word <em>Citizen</em> with<em> Cop</em>.</p><p>The <em>data-userId </em>is an attribute that begins with the prefix <em>data-, </em>which you can use to store some information as strings, that doesn’t necessarily need to have a visual representation. <code>&lt;%= userId %&gt;</code><em> </em>would appear to be a strange looking syntax, but don’t worry —y our template engine understands that anything that’s between <code><em>&lt;%=</em></code> and <code>%&gt;</code> is a variable, and it will substitute the variable <em>userId </em>for actual value on the server side before the page is served. You’ll understand this better as you progress.</p><p>If you recall in the earlier part, you had these lines in <em>app.js :</em></p><pre><code class="language-js">app.set('views', 'views');
app.use(express.static('./public'));
app.set('view engine','html');
app.engine('html',consolidate.underscore);</code></pre><p>The first line tells your app to look for HTML files inside the <em>views </em>folder whenever it gets a request for a particular page. The second line sets the folder from which static assets like stylesheets and JavaScripts will be served when a page loads on the browser. The next two lines tell our application to use the <em>underscore </em>template engine to parse our html files.</p><p>Now that the directory structure is set-up and the views are ready, it’s time to start implementing features! Before continuing, it’ll be helpful to keep the following points in mind:</p><ul><li>Write JS code inside the <em>script </em>tag in the HTML document. You may choose to write it inside a <em>.js </em>file, in which case you should save the JS file(s) inside <em>/public/js </em>folder and load it in your page. Make sure that you load the libraries and other dependencies first!</li><li>It’ll be helpful if you keep the developer console open in your browser to check for error messages in case something doesn’t seem to be working. Keep a watch on the terminal output too.</li><li>The words <em>event </em>and <em>signal </em>will be used interchangeably in this tutorial — both mean the same thing.</li></ul><p>Let’s start hacking!</p><h3 id="serving-citizen-and-cop-pages">Serving Citizen and Cop Pages</h3><p>Let’s render the citizen page on going to <a href="http://localhost:8000/police.html," rel="noopener"><em>http://localhost:8000/citizen.html,</em></a><em> </em>and the cop page on going to <a href="http://localhost:8000/police.html," rel="noopener"><em>http://localhost:8000/cop.html</em></a>. To do this, open <em>app.js </em>and add these lines inside the callback function of <em>mongoClient.connect</em>:</p><pre><code class="language-js">app.get('/citizen.html', function(req, res){
res.render('citizen.html',{
userId: req.query.userId
});
});
app.get('/cop.html', function(req, res){
res.render('cop.html', {
userId: req.query.userId
});
&lt;script src="/socket.io/socket.io.js"&gt;&lt;/script&gt;
&lt;!-- Load JQuery from a CDN --&gt;
&lt;script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"&gt;&lt;/script&gt;
&lt;!-- load libraries before your JS code
Write rest of your JS code here --&gt;
&lt;script type="text/javascript"&gt;
var socket = io();
//Fetch userId from the data-atribute of the body tag
var userId = document.body.getAttribute("data-userId");
/*Fire a 'join' event and send your userId to the server, to join a room - room-name will be the userId itself!
*/
socket.emit('join', {userId: userId});
//Declare variables, this will be used later
var requestDetails = {};
var copDetails = {};
var map, marker;
&lt;/script&gt;</code></pre><p>The first <em>script </em>tag loads Socket.IO’s client library (once we serve the page using socket.io server), which exposes a global <em>io </em>object. Your app will make use of this object to emit events/signals to the server and listen to events from the server.</p><p>Now you have to change <em>app.js </em>to use socket.io:</p><pre><code class="language-js">var http = require("http");
var express = require("express");
var consolidate = require("consolidate"); //1
var _ = require("underscore");
var bodyParser = require('body-parser');
var routes = require('./routes'); //File that contains our endpoints
var mongoClient = require("mongodb").MongoClient;
var app = express();
app.use(bodyParser.urlencoded({
extended: true,
}));
app.use(bodyParser.json({
limit: '5mb'
}));
app.set('views', 'views'); //Set the folder-name from where you serve the html page.
app.use(express.static('./public')); //setting the folder name (public) where all the static files like css, js, images etc are made available
app.set('view engine', 'html');
app.engine('html', consolidate.underscore); //Use underscore to parse templates when we do res.render
var server = http.Server(app);
var portNumber = 8000; //for locahost:8000
var io = require('socket.io')(server); //Creating a new socket.io instance by passing the HTTP server object
server.listen(portNumber, function() { //Runs the server on port 8000
console.log('Server listening at port ' + portNumber);
var url = 'mongodb://localhost:27017/myUberApp'; //Db name
mongoClient.connect(url, function(err, db) { //a connection with the mongodb is established here.
console.log("Connected to Database");
app.get('/citizen.html', function(req, res) { //a request to /citizen.html will render our citizen.html page
//Substitute the variable userId in citizen.html with the userId value extracted from query params of the request.
res.render('citizen.html', {
userId: req.query.userId
});
});
app.get('/cop.html', function(req, res) {
res.render('cop.html', {
userId: req.query.userId
});
});
io.on('connection', function(socket) { //Listen on the 'connection' event for incoming sockets
console.log('A user just connected');
socket.on('join', function(data) { //Listen to any join event from connected users
socket.join(data.userId); //User joins a unique room/channel that's named after the userId
console.log("User joined room: " + data.userId);
});
routes.initialize(app, db, socket, io); //Pass socket and io objects that we could use at different parts of our app
});
});
});
/* 1. Not all the template engines work uniformly with express, hence this library in js, (consolidate), is used to make the template engines work uniformly. Altough it doesn't have any
app.get('/cops/info', function(req, res){
var userId = req.query.userId //extract userId from query params
dbOperations.fetchCopDetails(db, userId, function(results){
res.json({
copDetails: results //return results to client
});
});
});</code></pre><ul><li>Next, you’ll write the function <em>fetchCopDetails </em>in <em>db-operations.js, </em>that accepts an instance of <em>db, </em>the cop’s <em>userId </em>and a callback function. This function will use MongoDB’s <a href="https://docs.mongodb.com/v3.2/reference/method/db.collection.findOne/" rel="noopener"><em>findOne</em></a><em> </em>query to fetch a cop’s info with a given <em>userId</em> from the database, and then return the result to the callback:</li></ul><pre><code class="language-js">function fetchCopDetails(db, userId, callback) {
db.collection("policeData").findOne({
userId: userId
}, function(err, results) {
if (err) {
console.log(err);
} else {
callback({
copId: results.userId,
displayName: results.displayName,
phone: results.phone,
location: results.location
});
}
});
}
exports.fetchCopDetails = fetchCopDetails;</code></pre><ul><li><strong>Inside <em>cop.html </em>:</strong></li></ul><p>Now that you’ve created the endpoint, you can call it using JQuery’s AJAX function to fetch the cop’s profile info and display it inside an empty <em>div id=”copDetails”</em>. You’ll also configure the cop page to begin listening to any help requests:</p><pre><code class="language-js">//First send a GET request using JQuery AJAX and get the cop's details and save it
$.ajax({
url: "/cops/info?userId="+userId,
type: "GET",
dataType: "json",
success: function(data){ //Once response is successful
copDetails = data.copDetails; //Save the cop details
copDetails.location = {
address: copDetails.location.address,
longitude: copDetails.location.coordinates[0],
latitude: copDetails.location.coordinates[1]
};
document.getElementById("copDetails").innerHTML = JSON.stringify(data.copDetails);
},
error: function(httpRequest, status, error){
console.log(error);
}
});
//Listen for a "request-for-help" event
socket.on("request-for-help", function(eventData){
//Once request is received, do this:
//Save request details
requestDetails = eventData; //Contains info of citizen
//display the data received from the event
document.getElementById("notification").innerHTML = "Someone's being attacked by a wildling! \n" + JSON.stringify(requestDetails);
});</code></pre><p>If you restart the server and go to <a href="http://localhost:8000/cop.html?userId=02," rel="noopener"><em>http://localhost:8000/cop.html?userId=02</em>,</a> (passing userId of a saved cop in the query params) you’ll find the cop’s info displayed on the page. Your cop page has also begun to listen to any <em>request-for-help </em>events.</p><h4 id="inside-citizen-html"><strong>Inside <em>citizen.html</em></strong></h4><p>The next step is to create a button for the citizen that can be clicked in case of emergency. Once clicked, it will fire a <em>request-for-help </em>signal and the signal can carry back information of the citizen back to the server:</p><pre><code class="language-html">&lt;button onclick="requestForHelp()"&gt;
Request for help
&lt;/button&gt;</code></pre><p>Write the handler for generating the event in the <em>script</em> tag:</p><pre><code class="language-js">//Citizen's info
requestDetails = {
citizenId: userId,
location: {
address: "Indiranagar, Bengaluru, Karnataka 560038, India",
latitude: 12.9718915,
longitude: 77.64115449999997
}
}
//When button is clicked, fire request-for-help and send citizen's userId and location
function requestForHelp(){
socket.emit("request-for-help", requestDetails);
}</code></pre><ul><li>Finally, the server needs to handle this event, as shown in the illustration. Go to <em>db-operations.js </em>and create a new function that can be used to save the request details in a new table <em>requestsData</em>:</li></ul><pre><code class="language-js">//Saves details like citizen’s location, time
function saveRequest(db, issueId, requestTime, location, citizenId, status, callback){
db.collection('requestsData').insert({
"_id": issueId,
"requestTime": requestTime,
"location": location,
"citizenId": citizenId,
"status": status
}, function(err, results){
if(err) {
console.log(err);
}else{
callback(results);
}
});
}
exports.saveRequest = saveRequest;</code></pre><p>The <em>status</em> field will tell whether a cop has responded to the request or not. Finally, in <em>routes.js, </em>add this inside the <em>initialize</em> function:</p><pre><code class="language-js">//Listen to a 'request-for-help' event from connected citizens
socket.on('request-for-help', function(eventData) {
/*
eventData contains userId and location
1. First save the request details inside a table requestsData
2. AFTER saving, fetch nearby cops from citizen’s location
3. Fire a request-for-help event to each of the cop’s room
*/
var requestTime = new Date(); //Time of the request
var ObjectID = require('mongodb').ObjectID;
var requestId = new ObjectID; //Generate unique ID for the request
//1. First save the request details inside a table requestsData.
//Convert latitude and longitude to [longitude, latitude]
var location = {
coordinates: [
eventData.location.longitude,
eventData.location.latitude
],
address: eventData.location.address
};
dbOperations.saveRequest(db, requestId, requestTime, location, eventData.citizenId, 'waiting', function(results) {
//2. AFTER saving, fetch nearby cops from citizen’s location
dbOperations.fetchNearestCops(db, location.coordinates, function(results) {
eventData.requestId = requestId;
//3. After fetching nearest cops, fire a 'request-for-help' event to each of them
for (var i = 0; i &lt; results.length; i++) {
io.sockets.in(results[i].userId).emit('request-for-help', eventData);
}
});
});
Help Citizen
&lt;/button&gt;</code></pre><p>and the event handler will look like this:</p><pre><code class="language-js">function helpCitizen(){
//Fire a "request-accepted" event/signal and send relevant info back to server
socket.emit("request-accepted", {
requestDetails: requestDetails,
copDetails: copDetails
});
}</code></pre><h4 id="inside-citizen-html-1"><strong>Inside <em>citizen.html</em></strong></h4><p>The citizen page will start listening to any <em>request-accepted </em>events from the server. Once it receives the signal, you can display the cop info inside an empty <em>div</em>:</p><pre><code class="language-html">//Listen for a "request-accepted" event
socket.on("request-accepted", function(eventData){
copDetails = data; //Save cop details
//Display Cop details
document.getElementById("notification").innerHTML = "A cop is coming to your rescue! \n" + JSON.stringify(copDetails);
});</code></pre><p>Now the server needs to handle the <em>request-accepted </em>event as shown in the illustration. First you’ll write a function in <em>db-operations.js </em>that will update the request in the database with the cop’s <em>userId</em> and change the <em>status </em>field from <em>waiting </em>to <em>engaged</em>:</p><pre><code class="language-js">function updateRequest(db, requestId, copId, status, callback) {
db.collection('requestsData').update({
"_id": requestId //Perform update for the given requestId
}, {
$set: {
"status": status, //Update status to 'engaged'
"copId": copId  //save cop's userId
}
}, function(err, results) {
if (err) {
console.log(err);
} else {
callback("Issue updated")
}
});
}
exports.updateRequest = updateRequest;</code></pre><p>When the server listens to a <em>request-accepted </em>event, it’ll use the above function to save the request details and then emit a <em>request-accepted </em>event to the citizen. So go ahead, write this in your <em>routes.js </em>file:</p><pre><code class="language-js">//Listen to a 'request-accepted' event from connected cops
socket.on('request-accepted', function(eventData){
//Convert string to MongoDb's ObjectId data-type
var ObjectID = require('mongodb').ObjectID;
var requestId = new ObjectID(eventData.requestDetails.requestId);
//For the request with requestId, update request details
dbOperations.updateRequest(db, requestId, eventData.copDetails.copId, 'engaged’, function(results){
//Fire a 'request-accepted' event to the citizen and send cop details
io.sockets.in(eventData.requestDetails.citizenId).emit('request-accepted', eventData.copDetails);
});
//Load the map and give it a default style
map = L.mapbox.map("map", "mapbox.streets");
//set it to a given lat-lng and zoom level
map.setView([12.9718915, 77.64115449999997], 9);
//Display a default marker
marker = L.marker([12.9718915, 77.64115449999997]).addTo(map);
//This will display an input box
map.addControl(L.mapbox.geocoderControl("mapbox.places", {
autocomplete: true, //will suggest for places as you type
}).on("select", function(data){
//This function runs when a place is selected
//data contains the geocoding results
console.log(data);
//Do something with the results
//Extract address and coordinates from the results and save it
requestDetails.location = {
address: data.feature["place_name"],
latitude: data.feature.center[1],
longitude: data.feature.center[0]
};
//Set the marker to new location
marker.setLatLng( [data.feature.center[1], data.feature.center[0]]);
}));</code></pre><p>The above code extracts the place information once you select a place and updates the location details, so the next time you click the <em>help </em>button, you’ll send the new location along with your request.</p><p>Once a cop accepts the request, you can show the location of the cop using a custom marker. First save <a href="https://github.com/booleanhunter/code-samples/blob/master/blog-posts/how-to-build-your-own-uber-for-x-app/public/images/police.png" rel="noopener">this image</a> inside <em>/public/images</em>, then write this code inside the event-handler of the <em>request-accepted </em>event:</p><pre><code class="language-js">//Show cop location on the map
L.marker([
copDetails.location.latitude,
copDetails.location.longitude
],{
icon: L.icon({
iconUrl: "/images/police.png", //image path
iconSize: [60, 28] //in pixels
})
}).addTo(map);</code></pre><p>That’s it! Now let’s repeat the same for the cop page as well inside <em>cop.html</em>.</p><p>Your cop’s page fetches the cop’s location info from the server using AJAX, so all you need to do is set the map and the marker to point to it. Let’s write this code inside the <em>success </em>callback of your AJAX function:</p><pre><code class="language-js">L.mapbox.accessToken = "YOUR_API_KEY";
//Load the map and give it a default style
map = L.mapbox.map("map", "mapbox.streets");
//set it to a cop's lat-lng and zoom level
map.setView( [copDetails.location.latitude, copDetails.location.longitude ], 9);
//Display a default marker
marker = L.marker([copDetails.location.latitude, copDetails.location.longitude]).addTo(map);
//This will display an input box
map.addControl(L.mapbox.geocoderControl("mapbox.places", {
autocomplete: true, //will suggest for places as you type
}).on("select", function(data){
//This function runs when a place is selected
//data contains the geocoding results
console.log(data);
//Do something with the results
//Set the marker to new location
marker.setLatLng([
data.feature.center[1],
data.feature.center[0]
]);
}));</code></pre><p>Once a cop gets a request, you can use a custom marker to display the citizen’s location. <a href="https://github.com/booleanhunter/code-samples/blob/master/blog-posts/how-to-build-your-own-uber-for-x-app/public/images/citizen.png" rel="noopener">Download</a> the marker image and save it in <em>/public/images.</em> Next, let’s write the logic inside the event handler of your <em>request-for-help </em>event:</p><pre><code class="language-js">//Show citizen location on the map
L.marker([
requestDetails.location.latitude,
requestDetails.location.longitude
],{
icon: L.icon({
iconUrl: "/images/citizen.png",
iconSize: [50,50]
})
res.render('data.html');
});</code></pre><h4 id="step-2-">Step 2:</h4><p>Let’s write a function in <em>db-operations.js </em>that fetches all results from your <em>requestsData</em> table:</p><pre><code class="language-js">function fetchRequests(db, callback) {
var collection = db.collection('requestsData');
//Using stream to process potentially huge records
var stream = collection.find({}, {
requestTime: true,
status: true,
location: true
}).stream();
var requestsData = [];
stream.on('data', function(request) {
requestsData.push(request);
});
//Runs after results are fetched
stream.on('end', function() {
callback(requestsData);
});
}
exports.fetchRequests = fetchRequests;</code></pre><p>In the above code, you query the <em>requestsData </em>table to return all documents. You can specify which fields to include and exclude from the results using boolean values — <em>true </em>to include the field and <em>false </em>to exclude the field. The results are then returned back to a callback function.</p><p><strong>How does GeoJSON look like?</strong></p><p>Information stored in GeoJSON has the following format:</p><pre><code class="language-json">{
type: "FeatureCollection",
features: [
{
type: "Feature",
geometry: {
type: "Point",
coordinates: [&lt;longitude&gt;, &lt;latitude&gt;]
},
properties: {
&lt;field1&gt;: &lt;value1&gt;,
&lt;field2&gt;: &lt;value2&gt;,
...
}
}
...
]
}</code></pre><p>You’ll need to convert each object returned by your function into feature objects. The <em>properties </em>field can hold optional meta-data like <em>status, requestTime, address </em>etc. You’ll write the handle in <em>routes.js </em>that will call the function, convert it to GeoJSON and then return it back:</p><pre><code class="language-js">app.get('/requests/info', function(req, res){
dbOperations.fetchRequests(db, function(results){
var features = [];
for(var i=0; i&lt;results.length; i++){
features.push({
type: 'Feature',
geometry: {
type: 'Point',
coordinates: results[i].location.coordinates
},
properties: {
status: results[i].status,
requestTime: results[i].requestTime,
address: results[i].location.address
}
});
}
var geoJsonData = {
type: 'FeatureCollection',
features: features
}
res.json(geoJsonData);
});
});</code></pre><h4 id="step-3-">Step 3:</h4><p>Create a page <em>data.html </em>in your <em>views </em>folder, and load the stylesheet and library for the visualization:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="utf-8" /&gt;
&lt;title&gt;Visualize Data&lt;/title&gt;
&lt;link href="https://api.tiles.mapbox.com/mapbox-gl-js/v0.26.0/mapbox-gl.css" rel="stylesheet" /&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="map" style="width: 800px; height: 500px"&gt;
&lt;!--Load the map here --&gt;
&lt;/div&gt;
&lt;!-- Load socket.io client library --&gt;
&lt;script src="/socket.io/socket.io.js"&gt;&lt;/script&gt;
&lt;!-- Load JQuery from a CDN --&gt;
&lt;script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"&gt;&lt;/script&gt;
&lt;!-- Load Mapbox GL Library --&gt;
&lt;script src="https://api.tiles.mapbox.com/mapbox-gl-js/v0.26.0/mapbox-gl.js"&gt;&lt;/script&gt;
&lt;!-- load libraries before your JS code
Write rest of your JS code here --&gt;
&lt;script type="text/javascript"&gt;
var socket = io();
var map, marker;
mapboxgl.accessToken = "YOUR_ACCESS_TOKEN";
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>Now you’ll use AJAX to call your endpoint and fetch the GeoJSON data:</p><pre><code class="language-js">$.ajax({
url: "/requests/info",
type: "GET",
dataType: "json",
success: function(data) {
console.log(data);
}
error: function(httpRequest, status, error) {
console.log(error);
}
});</code></pre><p>Cool — save your code, re-start your server and point your browser to <a href="http://localhost:8000/data.html" rel="noopener"><em>http://localhost:8000/data.html</em></a><em> . </em>You’ll see the results of your AJAX call in the console.</p><p>Now, let’s use it to generate a heat-map. Write this inside the <em>success</em> callback of your AJAX call:</p><pre><code class="language-js">var map = new mapboxgl.Map({
container: "map",
style: "mapbox://styles/mapbox/dark-v9",
center: [77.64115449999997, 12.9718915],
zoom: 10
});
map.on("load", function() {
//Add a new source from our GeoJSON data
map.addSource("help-requests", {
type: "geojson",
data: data
});
//we can specify different color and styling formats by adding different layers
map.addLayer({
"id": "help-requests",
"type": "circle",
"source": "help-requests",
"paint": {
//Apply a different color to different status fields
"circle-color": {
property: "status",
type: "categorical",
stops: [
//For waiting, show in red
["waiting", "rgba(255,0,0,0.5)"],
//For engaged, show in green
["engaged", "rgba(0,255,0,0.5)"]
]
},
"circle-radius": 20, //Radius of the circle
"circle-blur": 1 //Amount of blur
}
});
<p>Check out my Patreon page!<br>
<a href="https://www.patreon.com/bePatron?u=20804433" data-patreon-widget-type="become-patron-button">Become a Patron!</a></p>
</blockquote>
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
