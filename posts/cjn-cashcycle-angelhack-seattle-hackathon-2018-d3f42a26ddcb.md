---
card: "https://cdn-media-1.freecodecamp.org/images/1*J8qxFL2Bdpu8iCXlsF2ooQ.png"
tags: [JavaScript]
description: "This was my second time participating in a Hackathon, and it "
author: "Milad E. Fahmy"
title: "How my team rocked the AngelHack Seattle Hackathon"
created: "2021-08-16T11:40:13+02:00"
modified: "2021-08-16T11:40:13+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-hackathon tag-learning-to-code tag-technology tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How my team rocked the AngelHack Seattle Hackathon</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*J8qxFL2Bdpu8iCXlsF2ooQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*J8qxFL2Bdpu8iCXlsF2ooQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*J8qxFL2Bdpu8iCXlsF2ooQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*J8qxFL2Bdpu8iCXlsF2ooQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*J8qxFL2Bdpu8iCXlsF2ooQ.png" alt="How my team rocked the AngelHack Seattle Hackathon">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
var directionsDisplay = null;
var directionsService = null;
request.onload = function() {
var myJson = request.response;
for (var i = 0; i &lt; myJson.length; i++) {
// hidden code: new array from json
makeBike(xArrSta[i], yArrSta[i], arrId[i]);
}
populateList(rewardList, distanceList);
populateFirstJob(unmodifiedJson[0]);
}</code></pre><p>Get the JSON endpoint from Heroku.</p><p>Initialize directionsDisplay and directionsService so that it when it generates a new path, the previous path will be deleted.</p><h3 id="google-api-functions-initmap-and-calculateanddisplayroute-"><strong>Google API functions initMap() and calculateAndDisplayRoute()</strong></h3><pre><code class="language-js">function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
zoom: 13,
center: {lat: changingLat, lng: changingLon},
});
}
function calculateAndDisplayRoute(directionsService, directionsDisplay) {
var selectedMode = document.getElementById('mode').value;
directionsService.route({
origin: {lat: staLocLat, lng: staLocLong},
destination: {lat: endLocLat, lng: endLocLong},
travelMode: google.maps.TravelMode[selectedMode]}, function(response, status) {
if (status == 'OK') {
directionsDisplay.setDirections(response);
distance = response['routes'][0]['legs'][0]['distance']['value'];
duration = response['routes'][0]['legs'][0]['duration']['value'];
document.getElementById('distance').innerHTML = distance;
document.getElementById('duration').innerHTML = duration;
} else {
window.alert('Directions request failed due to ' + status);
}
});
}</code></pre><p><strong>initMap</strong> is a Google API function that renders the map on load. You can set the zoom and center of the map.</p><p><strong>calculateAndDisplayRoute</strong> is the function that generates the blue path. We modified the function to be able to show “distance” and “duration”.</p><h3 id="functions-changejobstatus-choosejob-id-jobavailable-"><strong>functions changeJobStatus(), chooseJob(id), jobAvailable()</strong></h3><pre><code class="language-js">function changeJobStatus(jobId, status, worker) {
// need to send id, status and workervar data = {};
var url = "https://whispering-stream-27392.herokuapp.com/job/" + jobId;
data.id = jobId;
data.status = status;
data.worker = worker;
var json = JSON.stringify(data);
var xhr = new XMLHttpRequest();
xhr.open("PATCH", url, true);
xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
xhr.onload = function() {
var users = JSON.parse(xhr.responseText);
if (xhr.readyState == 4 &amp;&amp; xhr.status == "201") {console.table(users);} else {console.error(users);}};
xhr.send(json);
}
function chooseJob(id) {
// hidden code: id, starting lat &amp; long, ending lat &amp; long
directionsDisplay.setMap(map);
calculateAndDisplayRoute(directionsService, directionsDisplay);
}
function jobAvailable() {
changeJobStatus(globalId, "AVAILABLE", "Johnny Cash");
}</code></pre><h3 id="function-makebike-"><strong>function makeBike()</strong></h3><pre><code class="language-js">function makeBike(latitude, longitude, id) {
var image = 'bicycle.png';
if (onBike) {image = 'rDot.png';}
if (count &gt; 10) {image = 'green-marker.png';}
var size = new google.maps.Size(54, 54);
if (count &gt; 10) {size = new google.maps.Size(60, 75)}
var icon = {url: image, scaledSize: size, origin: new google.maps.Point(0,0), anchor: new google.maps.Point(0, 0)};
var Bike = new google.maps.Marker({position: {lat: latitude, lng: longitude}, map: map, zoom: 200, icon: icon});
if (!directionsDisplay) {directionsDisplay = new google.maps.DirectionsRenderer;}
if (!directionsService) {directionsService = new google.maps.DirectionsService;}
Bike.addListener('click', function() {
map.setZoom(18);
flag = true;
map.setCenter(Bike.getPosition());
hideStartRide();
bikeId(id);
$("#dialog-jobOne").show();
// code: id, starting lat &amp; long, ending lat &amp; long
directionsDisplay.setMap(map);
calculateAndDisplayRoute(directionsService, directionsDisplay);
document.getElementById('mode').addEventListener('change', function() {
calculateAndDisplayRoute(directionsService, directionsDisplay);
});
});
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
