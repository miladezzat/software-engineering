---
card: "/images/default.jpg"
tags: [JavaScript]
description: "Get ready for the summer by building your own road trip mappi"
author: "Milad E. Fahmy"
title: "How to Create a Summer Road Trip Mapping App with Gatsby and Leaflet"
created: "2021-08-16T10:05:24+02:00"
modified: "2021-08-16T10:05:24+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-mapping tag-leaflet tag-react-leaflet tag-web-applications tag-web-development tag-frontend tag-front-end tag-front-end-development tag-gatsby tag-gatsbyjs tag-maps tag-react tag-reactjs ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create a Summer Road Trip Mapping App with Gatsby and Leaflet</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/03/road-trip-mapping-app-2.jpg 300w,
/news/content/images/size/w600/2020/03/road-trip-mapping-app-2.jpg 600w,
/news/content/images/size/w1000/2020/03/road-trip-mapping-app-2.jpg 1000w,
/news/content/images/size/w2000/2020/03/road-trip-mapping-app-2.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/03/road-trip-mapping-app-2.jpg" alt="How to Create a Summer Road Trip Mapping App with Gatsby and Leaflet">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
async function mapEffect({ leafletElement } = {}) {
// Get rid of everything in here
{
placename: ‘Herndon, VA’,
date: ‘August 1, 2015’,
location: {
lat: 38.958988,
lng: -77.417320
},
todo: [
‘Where we start! ?’
]
},
{
placename: ‘Middlesboro, KY',
date: ‘August 1, 2015’,
location: {
lat: 36.627517,
lng: -83.621635
},
todo: [
‘Cumberland Gap ?’
]
}
];
</code></pre><p>You can use the above to get started, but you’ll eventually want to change the details to something of your choosing.</p><p>If you want to add an image to your location, you can do so by including an <code>image</code> property to the object. You can use either a URL string or you can import a local file if you have one available, like I’m doing in this example:</p><pre><code class="language-js">import imgHerndonStart from 'assets/images/herndon-start.jpg’;
export const locations = [
{
placename: ‘Herndon, VA’,
date: ‘August 1, 2015’,
image: imgHerndonStart,
location: {
lat: 38.958988,
lng: -77.417320
},
todo: [
‘Where we start! ?’
]
}
]
</code></pre><p>Once we have that file created, we can now import our locations into our <code>src/pages/index.js</code> file so we can use it in our next step:</p><pre><code class="language-js">import { locations } from 'data/locations’;
</code></pre><p>If you add a <code>console.log(locations)</code> inside of your page, you should now see all of your location data in an array!</p><p><a href="https://github.com/colbyfayock/my-road-trip/commit/55f4eb32d402364a20ad0342ebfde995081c521e">Follow along with the commit</a></p><h2 id="step-3-prepare-our-app-with-some-functions">Step 3: Prepare our app with some functions</h2><p>To try to keep things simple and focused, I grouped together 3 important components of creating our map into functions. Though it’s available to copy and paste, we’ll walk through what’s happening in each function.</p><p>You can place each of these functions at the bottom of the <code>src/pages/index.js</code> file so they’re ready to use in our next step.</p><h3 id="createtrippointsgeojson">createTripPointsGeoJson</h3><p>Our first function is going to take the array of our locations and return a <a href="https://geojson.org/">GeoJSON document</a>, with our locations mapped into an individual Feature. We’ll use this function to create the individual points on our map.</p><p>What is a GeoJSON document? It's essentially a JavaScript object or JSON document with a specific structure that creates consistency with geographical data.</p><pre><code class="language-js">function createTripPointsGeoJson({ locations } = {}) {
return {
“type”: “FeatureCollection”,
“features”: locations.map(({ placename, location = {}, image, date, todo = [] } = {}) =&gt; {
const { lat, lng } = location;
return {
“type”: “Feature”,
“properties”: {
placename,
todo,
date,
image
},
“geometry”: {
“type”: “Point”,
“coordinates”: [ lng, lat ]
}
}
})
}
}
</code></pre><p>So what’s happening in the above?</p><ul><li>We take an argument of locations, which will be our array of destinations</li><li>We return an object with some dynamic properties associated with it</li><li>Within the object, we map our locations to individual <code>Feature</code> objects</li><li>Each object includes a <code>Point</code> shape using our coordinates</li><li>It additionally includes our properties that store our metadata</li></ul><p>When this function is invoked, we will have a newly created JavaScript object that includes an array of Points representing the locations we are stopping at on our road trip.</p><h3 id="createtriplinesgeojson">createTripLinesGeoJson</h3><p>We’re going to create another function that’s similar to the previous one. This time however, instead of points, we want to create lines that represent going from one point to the next.</p><pre><code class="language-js">function createTripLinesGeoJson({ locations } = {}) {
return {
“type”: “FeatureCollection”,
“features”: locations.map((stop = {}, index) =&gt; {
const prevStop = locations[index - 1];
if ( !prevStop ) return [];
const { placename, location = {}, date, todo = [] } = stop;
const { lat, lng } = location;
const properties = {
placename,
todo,
date
};
const { location: prevLocation = {} } = prevStop;
const { lat: prevLat, lng: prevLng } = prevLocation;
return {
type: ‘Feature’,
properties,
geometry: {
type: ‘LineString’,
coordinates: [
[ prevLng, prevLat ],
[ lng, lat ]
]
}
}
})
}
}
</code></pre><p>So you’ll immediately notice that this is very similar to our last function. We’re returning an object and setting our metadata properties on a list of Features.</p><p>The big difference, however, is that we're creating a Line. To do this, we're looking up and referring to <code>prevStop</code> which will be the previous stop. We’ll use both the previous stop and our current stop in order to have 2 points which we can use to draw the line. </p><p>If we don’t have a previous stop, we return an empty array, which basically means we’re at the beginning of our journey with no line before it.</p><p>With the previous stop and current stop, we create a <code>LineString</code> type of Feature with our 2 points.</p><h3 id="tripstoppointtolayer">tripStopPointToLayer</h3><p>Our last function is going to allow us to create custom content for each of the points that we will be adding to our map. We’ll actually be utilizing this function within a Leaflet property, so we’ll be conforming our arguments to that specification.</p><pre><code class="language-js">function tripStopPointToLayer( feature = {}, latlng ) {
const { properties = {} } = feature;
const { placename, todo = [], image, date } = properties;
const list = todo.map(what =&gt; `&lt;li&gt;${ what }&lt;/li&gt;`);
let listString = ‘’;
let imageString = ‘’;
if ( Array.isArray(list) &amp;&amp; list.length &gt; 0 ) {
listString = list.join(‘’);
listString = `
&lt;p&gt;Things we will or have done…&lt;/p&gt;
&lt;ul&gt;${listString}&lt;/ul&gt;
`
}
if ( image ) {
imageString = `
&lt;span class=“trip-stop-image” style=“background-image: url(${image})”&gt;${placename}&lt;/span&gt;
`;
}
const text = `
&lt;div class=“trip-stop”&gt;
${ imageString }
&lt;div class=“trip-stop-content”&gt;
&lt;h2&gt;${placename}&lt;/h2&gt;
&lt;p class=“trip-stop-date”&gt;${date}&lt;/p&gt;
${ listString }
&lt;/div&gt;
&lt;/div&gt;
`;
const popup = L.popup({
maxWidth: 400
}).setContent(text);
const layer = L.marker( latlng, {
icon: L.divIcon({
className: ‘icon’,
html: `&lt;span class=“icon-trip-stop”&gt;&lt;/span&gt;`,
iconSize: 20
}),
riseOnHover: true
}).bindPopup(popup);
return layer;
}
</code></pre><p>Next, we want to use the <code>eachLayer</code> utility function and remove each <code>layer</code> from our map element. We do this to make sure we always have the correct map layer state.</p><pre><code class="language-js">leafletElement.eachLayer((layer) =&gt; leafletElement.removeLayer(layer));</code></pre><p>With our cleaned up map, we can utilize 2 of the functions we created to create new GeoJSON objects.</p><pre><code class="language-js">const tripPoints = createTripPointsGeoJson({ locations });
const tripLines = createTripLinesGeoJson({ locations });
</code></pre><p>With our GeoJSON objects, we need to convert those to Leaflet GeoJSON instances, which we’ll use to add to the map.</p><pre><code class="language-js">const tripPointsGeoJsonLayers = new L.geoJson(tripPoints, {
pointToLayer: tripStopPointToLayer
});
const tripLinesGeoJsonLayers = new L.geoJson(tripLines);
</code></pre><p>If you notice in the above, we're using our <code>tripStopPointToLayer</code> function. As I alluded to before, the <code>geoJson</code> instance we’re creating includes a property that allows us to pass in a function, giving us the ability to manipulate the layer creation. This is how we create our point and popup content.</p><p>We can proceed to adding both of those new layers to our map using the <code>addTo</code> .</p><pre><code class="language-js">tripPointsGeoJsonLayers.addTo(leafletElement);
tripLinesGeoJsonLayers.addTo(leafletElement);
</code></pre><p>Next, to make sure we zoom and center on the right location, we want to grab the bounds of the map using the <code>getBounds</code> function on our GeoJSON layer instance.</p><pre><code class="language-js">const bounds = tripPointsGeoJsonLayers.getBounds();
</code></pre><p>Finally, we fit our map's view to those bounds using the <code>fitBounds</code> function on our Map instance.</p><pre><code class="language-js">leafletElement.fitBounds(bounds);
width: 400px;
overflow: hidden;
h2 {
font-size: 1.4em;
margin-top: 0;
margin-bottom: .2em;
}
p,
ul,
h3 {
font-size: 1.2em;
font-weight: normal;
}
p {
margin: .2em 0;
}
.trip-stop-date {
color: $grey-600;
font-size: 1em;
}
ul {
padding: 0 0 0 1.4em;
margin: 0;
}
}
.trip-stop-image {
display: block;
float: left;
overflow: hidden;
width: 150px;
height: 150px;
text-indent: 100%;
color: transparent;
background-position: center;
background-size: cover;
}
.trip-stop-content {
float: left;
width: 250px;
padding-left: 1em;
}
.icon-trip-stop {
display: block;
width: 1.5em;
height: 1.5em;
background-color: $orange-500;
border-radius: 100%;
box-shadow: 0 2px 5px rgba(0,0,0,.5);
&amp;:hover {
background-color: $deep-orange-400;
}
}
<p style="margin: 0;">
<a href="https://twitter.com/colbyfayock" style="display: block;">
</a>
</p>
<ul style="display:flex;justify-content:center;list-style:none;padding:0;margin: .5em 0 0;font-size: .8em;">
<li style="margin: 0 .6em;padding: 0;">
<a href="https://twitter.com/colbyfayock" style="text-decoration: none;">? Follow Me On Twitter</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://youtube.com/colbyfayock" style="text-decoration: none;">?️ Subscribe To My Youtube</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://www.colbyfayock.com/newsletter/" style="text-decoration: none;">✉️ Sign Up For My Newsletter</a>
</li>
</ul>
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
