---
card: "/images/default.jpg"
tags: [JavaScript]
description: The Coronavirus (COVID-19) pandemic has swiftly changed how a
author: "Milad E. Fahmy"
title: "How to create a Coronavirus (COVID-19) Dashboard & Map App in React with Gatsby and Leaflet"
created: "2021-08-15T19:30:17+02:00"
modified: "2021-08-15T19:30:17+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-reactjs tag-react-leaflet tag-mapping tag-maps tag-coronavirus tag-covid-19 tag-frontend tag-front-end tag-front-end-development tag-react tag-gatsby tag-gatsbyjs tag-leaflet tag-analytics tag-data-analytics ">
<header class="post-full-header">
<h1 class="post-full-title">How to create a Coronavirus (COVID-19) Dashboard &amp; Map App in React with Gatsby and Leaflet</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/03/coronavirus-mapping-app.jpg 300w,
/news/content/images/size/w600/2020/03/coronavirus-mapping-app.jpg 600w,
/news/content/images/size/w1000/2020/03/coronavirus-mapping-app.jpg 1000w,
/news/content/images/size/w2000/2020/03/coronavirus-mapping-app.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/03/coronavirus-mapping-app.jpg" alt="How to create a Coronavirus (COVID-19) Dashboard &amp; Map App in React with Gatsby and Leaflet">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>The Coronavirus (COVID-19) pandemic has swiftly changed how all of us interact day to day. How can we use available APIs to build a mapping app that shows the impact it has had on the world?</p>
<p><strong>Update: </strong>The original NovelCOVID API v1 endpoint has been deprecated. Please update and use the following instead: <a href="https://corona.lmao.ninja/v2/countries">https://corona.lmao.ninja/v2/countries</a></p>
<p><em>Author’s Note: This is meant to be a demo and proof of concept for putting together an impactful mapping application using real life data. For complete and accurate analysis, please make sure to use tools like <a href="https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6">Johns Hopkins University dashboard</a>. Stay home and be safe! ❤️</em></p>
<ul>
<li><a href="#what-are-we-going-to-build">What are we going to build?</a></li>
<li><a href="#what-do-we-need-before-we-get-started">What do we need before we get started?</a></li>
<li><a href="#step-1-cleaning-up-some-unneeded-code">Step 1: Cleaning up some unneeded code</a></li>
<li><a href="#step-2-fetching-the-coronavirus-data">Step 2: Fetching the Coronavirus data</a></li>
<li><a href="#step-3-transform-the-coronavirus-data-into-a-geographic-data-format">Step 3: Transform the Coronavirus data into a geographic data format</a></li>
<li><a href="#step-4-adding-the-coronavirus-data-to-the-map">Step 4: Adding the Coronavirus data to the map</a></li>
<li><a href="#what-else-can-we-do">What else can we do?</a></li>
<li><a href="#be-safe-and-stay-informed">Be safe and stay informed</a></li>
<li><a href="#want-to-learn-more-about-maps">Want to learn more about maps?</a></li>
</ul>
<h2 id="what-are-we-going-to-build">What are we going to build?</h2>
<p>We’ll be putting together a mapping application that uses an API containing recent Coronavirus statistics and maps out the locations and impact each country is facing.</p>
<figcaption>Coronavirus map dashboard demo</figcaption>
</figure>
<p>On the map, we’ll show a marker for each country with the number of confirmed cases. On top of that, we’ll include a little popup tooltip that shows more in depth information.</p>
<p>The map we’ll build will mostly look like the above, but will look a little simpler. We’ll utilize the OpenStreetMap public tileserver instead of using a custom <a href="https://www.mapbox.com/">Mapbox</a></p>
<p>To get started, we’re going to use this <a href="https://github.com/colbyfayock/gatsby-starter-leaflet">Leaflet Gatsby Starter</a> I created to make the initial setup a little smoother. With our app bootstrapped, we’ll fetch our data and add markers to the map with our data.</p>
<h2 id="woah-a-mapping-app">Woah, a mapping app?</h2>
<p>Yup. If you haven’t played with maps before, don’t be discouraged! It's not as bad as you probably think. If you’d rather start with mapping basics, you can <a href="/news/easily-spin-up-a-mapping-app-in-react-with-leaflet/">read more about how mapping works</a> first.</p>
<h2 id="what-do-we-need-before-we-get-started">What do we need before we get started?</h2>
<p>If you followed along with my previous tutorials for <a href="/news/create-your-own-santa-tracker-with-gatsby-and-react-leaflet/">building a Santa Tracker</a> or <a href="/news/how-to-create-a-summer-road-trip-mapping-app-with-gatsby-and-leaflet/">creating a Summer Road Trip map</a>, you can follow the same steps to get started. If not, we’ll want to make sure we have the following set up:</p>
<ul>
<li><a href="https://nodejs.org/en/">node</a> or <a href="https://yarnpkg.com/en/">yarn</a> - I'll be using yarn, but you can substitute with npm where appropriate</li>
<li><a href="https://www.gatsbyjs.org/docs/gatsby-cli/">Gatsby’s CLI</a> - <code>yarn global add gatsby-cli</code></li>
</ul>
<p>If you’re not sure about one of the above, you can try checking out the beginning <a href="/news/create-your-own-santa-tracker-with-gatsby-and-react-leaflet/">my previous tutorial</a>.</p>
<p>We’ll also want to set up a foundation for our map. We can do this by utilizing the Leaflet Gatsby Starter I put together that provides us a basic setup with <a href="https://leafletjs.com/">Leaflet</a> and <a href="https://react-leaflet.js.org/">React Leaflet</a>.</p><pre><code class="language-shell">gatsby new my-coronavirus-map https://github.com/colbyfayock/gatsby-starter-leaflet
</code></pre>
<figcaption>Creating a new Leaflet Gatsby app in the terminal</figcaption>
</figure>
<p>After that’s finished running, you can navigate to the newly created project directory and start your local development server:</p><pre><code class="language-shell">cd my-coronavirus-map
yarn develop
</code></pre>
<figcaption>Starting your Gatsby app in the terminal</figcaption>
</figure>
<p>If all goes as planned, your server should start and you should now be able to see your basic mapping app in your browser!</p>
<figcaption>New Leaflet Gatsby app in the browser</figcaption>
</figure>
<p><a href="https://github.com/colbyfayock/my-coronavirus-map/commits/master">Follow along with the commit!</a></p>
<h2 id="step-1-cleaning-up-some-unneeded-code">Step 1: Cleaning up some unneeded code</h2>
<p>The Gatsby Starter we're using to spin up this app comes with some demo code that we don’t need here. We’ll want to make all of the changes below in the file <code>src/pages/index.js</code>, which is the homepage of our app.</p>
<p>First, let’s remove everything from the <code>mapEffect</code> function. This function is used to run code that fires when the map renders.</p><pre><code class="language-javascript">// In src/pages/index.js
async function mapEffect({ leafletElement } = {}) {
// Get rid of everything in here
}
</code></pre>
<p>We’ll also change the variable name of our <code>leafletElement</code> simply for being able to more easily understand the code as we write it.</p><pre><code class="language-javascript">async function mapEffect({ leafletElement: map } = {}) {
}
</code></pre>
<p>Next, we don’t want a marker this time, so let’s remove the <code>&lt;Marker</code> component from our <code>&lt;Map</code> component:</p><pre><code class="language-react">&lt;Map {...mapSettings} /&gt;
</code></pre>
<p>Now that we have those pieces cleared out, we can remove all of the following imports and variables from the top of our file:</p>
<ul>
<li>useRef</li>
<li>Marker</li>
<li>promiseToFlyTo</li>
<li>getCurrentLocation</li>
<li>gatsby_astronaut</li>
<li>timeToZoom</li>
<li>timeToOpenPopupAfterZoom</li>
<li>timeToUpdatePopupAfterZoom</li>
<li>ZOOM</li>
<li>popupContentHello</li>
<li>popupContentGatsby</li>
<li>markerRef</li>
</ul>
<p>After, our map should still work, but not do anything.</p>
<figcaption><em>New mapping app with nothing going on</em></figcaption>
</figure>
<p><a href="https://github.com/colbyfayock/my-coronavirus-map/commit/a3e9cff3949bb7ebb7cc89166c875e97b6dcb5a8">Follow along with the commit!</a></p>
<h2 id="step-2-fetching-the-coronavirus-data">Step 2: Fetching the Coronavirus data</h2>
<p>For our app, we’re going to use the <a href="https://github.com/NovelCOVID/API">NovelCOVID API</a>. Particularly, we’re going to use the <a href="https://corona.lmao.ninja/countries">countries endpoint</a> to fetch the list of our countries and the stats associated with them.</p>
<p>For making requests, I personally like to use <a href="https://github.com/axios/axios">axios</a> as it has a nice to use API. If you want to use <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">fetch</a> or your own favorite request library, substitute that in for this step.</p>
<p>We’ll start by installing axios:</p><pre><code class="language-shell">yarn add axios
</code></pre>
<p>Once that installs, remember to restart your server.</p>
<p>Import the axios package ta the top of our <code>pages/index.js</code> file:</p><pre><code class="language-javascript">import axios from 'axios';
</code></pre>
<p>Next we’ll actually make our request. Inside our <code>mapEffect</code> function, let’s try to make a request to the API endpoint:</p><pre><code class="language-javascript">async function mapEffect({ leafletElement: map } = {}) {
let response;
try {
response = await axios.get('https://corona.lmao.ninja/v2/countries');
} catch(e) {
console.log(`Failed to fetch countries: ${e.message}`, e);
return;
}
const { data = [] } = response;
}
</code></pre>
<p>In this snippet, we’re doing the following:</p>
<ul>
<li>Setting up a <code>response</code> variable that will allow us to store the response</li>
<li>Adding a <code>try/catch</code> block that will catch any API errors if the request fails</li>
<li>If the request is successful, we store the response in the <code>response</code> variable</li>
<li>If the request fails, we console log out the error and return out of the function so we don’t continue to run the code with a failed request</li>
<li>Once we have our response, we can destructure <code>data</code> from the response and set the default value to an empty array, as that will be the type of data we need</li>
</ul>
<p>After that’s set up, we can console log out the <code>data</code> object and we’ll see our data successfully fetched!</p>
<figcaption>Logging the Coronavirus location data to the browser console</figcaption>
</figure>
<p><a href="https://github.com/colbyfayock/my-coronavirus-map/commit/86bebfee4a34b9bad516879b228921cdaad55126">Follow along with the commit!</a></p>
<p><strong>Update:</strong> The previous commit includes a link to the original NovelCOVID v1 API endpoint which has now been deprecated. Please use this instead: <a href="https://corona.lmao.ninja/v2/countries">https://corona.lmao.ninja/v2/countries</a>.</p>
<p><a href="https://github.com/colbyfayock/my-coronavirus-map/commit/e8f63c7ca60ec358b2edc9bc3ed8935be85b5573">See updated commit</a>.</p>
<h2 id="step-3-transform-the-coronavirus-data-into-a-geographic-data-format">Step 3: Transform the Coronavirus data into a geographic data format</h2>
<p>Now that we have our data, we can transform it into a geographic data format, particularly <a href="https://geojson.org/">GeoJSON</a>, that will allow us to interface with Leaflet.</p>
<p>Let’s start by adding this block of code:</p><pre><code class="language-javascript">const { data = [] } = response;
const hasData = Array.isArray(data) &amp;&amp; data.length &gt; 0;
if ( !hasData ) return;
const geoJson = {
type: 'FeatureCollection',
features: data.map((country = {}) =&gt; {
const { countryInfo = {} } = country;
const { lat, long: lng } = countryInfo;
return {
type: 'Feature',
properties: {
...country,
},
geometry: {
type: 'Point',
coordinates: [ lng, lat ]
}
}
})
}
</code></pre>
<p>So what are we doing here?</p>
<ul>
<li>We create a new constant called <code>hasData</code> that checks if our <code>data</code> variable is an array and has data</li>
<li>If we don’t have data, we want to return out of the function, as we don’t want to try to add data we don’t have</li>
<li>We create a <code>geoJson</code> object that will be our GeoJSON document</li>
<li>Our document is of type <code>FeatureCollection</code> and as our <code>features</code> we loop through our dataset</li>
<li>For each country in our data, we obtain the <code>lat</code> and <code>lng</code> to create a point for our map</li>
<li>We additionally add our country data as properties so we can access it within our mapping APIs</li>
</ul>
<p>If you <code>console.log</code> this object our into your browser and copy the contents, you can paste this into geojson.io and see the location data show up correctly.</p>
<figcaption>Previewing Coronavirus location data on geojson.io</figcaption>
</figure>
<p>With this GeoJSON document, we'll now be able to add it to our map.</p>
<p><a href="https://github.com/colbyfayock/my-coronavirus-map/commit/f0da2d05cbc16783322684da7a3efaa61022f5b6">Follow along with the commit!</a></p>
<h2 id="step-4-adding-the-coronavirus-data-to-the-map">Step 4: Adding the Coronavirus data to the map</h2>
<p>We have our GeoJSON document with our location data, so let’s add it to the map.</p>
<p>Let’s start with this code block. It's a long one, but we’ll break it down piece by piece:</p><pre><code class="language-javascript">const geoJsonLayers = new L.GeoJSON(geoJson, {
pointToLayer: (feature = {}, latlng) =&gt; {
const { properties = {} } = feature;
let updatedFormatted;
let casesString;
const {
country,
updated,
cases,
deaths,
recovered
} = properties
casesString = `${cases}`;
if ( cases &gt; 1000 ) {
casesString = `${casesString.slice(0, -3)}k+`
}
if ( updated ) {
updatedFormatted = new Date(updated).toLocaleString();
}
const html = `
&lt;span class="icon-marker"&gt;
&lt;span class="icon-marker-tooltip"&gt;
&lt;h2&gt;${country}&lt;/h2&gt;
&lt;ul&gt;
&lt;li&gt;&lt;strong&gt;Confirmed:&lt;/strong&gt; ${cases}&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;Deaths:&lt;/strong&gt; ${deaths}&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;Recovered:&lt;/strong&gt; ${recovered}&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;Last Update:&lt;/strong&gt; ${updatedFormatted}&lt;/li&gt;
&lt;/ul&gt;
&lt;/span&gt;
${ casesString }
&lt;/span&gt;
`;
return L.marker( latlng, {
icon: L.divIcon({
className: 'icon',
html
}),
riseOnHover: true
});
}
});
</code></pre>
<p>So what are we doing here?</p>
<ul>
<li>We create a new instance of <code>L.GeoJSON</code> which will transform our GeoJSON document into something Leaflet will understand</li>
<li>Inside that instance, we define a custom <code>pointToLayer</code> function. This allows us to customize the map layer Leaflet creates for our map</li>
<li>In our function, we assign and create our datapoints that we want. Most of it is destructuring, but we format the cases count to show <code>1k+</code> instead of <code>1000</code> and a formatted date instead of the timestamp</li>
<li>We create an HTML string block which is used to define our map marker that will be added to the map. This also includes the HTML for the tooltip that will pop up when hovering over a marker</li>
<li>We return <code>L.marker</code> with our custom configuration that includes a class of <code>icon</code> for the container and our custom HTML.</li>
<li>Additionally, we add the <code>riseOnHover</code> property so when hoving over a marker, it surfaces itself above over the other markers on the map</li>
</ul>
<p>We also want to add a bit of CSS here so that we can make sure our markers show up in the map and are usable. Let’s add this snippet to our <code>assets/stylesheets/components/_map.scss</code> file:</p><pre><code class="language-scss">.icon-marker {
display: flex;
position: relative;
justify-content: center;
align-items: center;
color: white;
width: 3.6em;
height: 3.6em;
font-size: .7em;
font-weight: bold;
background-color: $red-800;
border-radius: 100%;
box-shadow: 0 2px 5px rgba(black, .9);
&amp;:hover {
.icon-marker-tooltip {
display: block;
}
}
}
.icon-marker-tooltip {
display: none;
position: absolute;
bottom: 100%;
width: 16em;
font-size: 1.4em;
padding: 1em;
background-color: $blue-grey-900;
border-radius: .4em;
margin-bottom: 1em;
box-shadow: 0 3px 5px rgba(black, .9);
&amp;:before {
display: block;
position: absolute;
bottom: -.6em;
left: 50%;
content: '';
width: 1.4em;
height: 1.4em;
background-color: $blue-grey-900;
transform: rotate(45deg);
margin-left: -.7em;
}
h2 {
font-size: 1.5em;
line-height: 1.2;
margin-bottom: .1em;
margin-top: 0;
}
h3 {
font-size: 1.2em;
margin: .1em 0;
font-weight: normal;
color: $blue-grey-100;
}
ul,
p {
font-weight: normal;
}
ul {
list-style: none;
padding: 0;
margin: .6em 0 0;
}
}
</code></pre>
<p>What we’re doing:</p>
<ul>
<li>We create our round markers using the <code>.icon-marker</code> class and set up our <code>.icon-marker-tooltip</code> class to show up when hovered over</li>
<li>Our <code>.icon-marker-tooltip</code> class is hidden by default, as it’s our tooltip, but we position it absolutely to appear over top of our marker and formatted the way we want it</li>
</ul>
<p>And finally, once we have our <code>geoJsonLayers</code> created with our styling added, we can add it to the map!</p><pre><code>geoJsonLayers.addTo(map)
</code></pre>
<figcaption>Map with Coronavirus location data</figcaption>
</figure>
<p>Now you might be wondering why it doesn't appear to be centering properly. Go ahead and change the <code>LOCATION</code> variable at the top of the <code>index.js</code> file to:</p><pre><code class="language-javascript">const LOCATION = {
lat: 0,
lng: 0
};
</code></pre>
<p>Once that’s set, when the page reloads, the map should be centered in the middle of the world!</p>
<figcaption>Map with Coronavirus location data centered with a tooltip</figcaption>
</figure>
<p><a href="https://github.com/colbyfayock/my-coronavirus-map/commit/49c78e4ef3e98c974fab7bca10b6f8f7578b42c2">Follow along with the commit!</a></p>
<h2 id="yay-we-did-it-">Yay, we did it! ?</h2>
<p>If you followed along, you now have created your own Coronavirus map dashboard that gives some quick stats about the cases around the world.</p>
<p>Take what you learned and run with it. You can apply this to any other type of data that you can imagine.</p>
<h2 id="what-else-can-we-do">What else can we do?</h2>
<h3 id="add-more-styles-and-a-custom-basemap">Add more styles and a custom basemap</h3>
<p>In my original demo, I set up a custom basemap using <a href="https://mapbox.com/">Mapbox</a> that allows me to have a dark background making the markers easier to see.</p>
<figcaption>Creating a new basemap in Mapbox Studio</figcaption>
</figure>
<p>Mapbox is great and has a nice free tier if you’re interested in getting started.</p>
<p>Once you have a Mapbox account, you can even <a href="https://api.mapbox.com/styles/v1/colbyfayock/ck8c2foj72lqk1jnug0g2haw0.html?fresh=true&amp;title=copy&amp;access_token=pk.eyJ1IjoiY29sYnlmYXlvY2siLCJhIjoiY2swODZzbXYxMGZzdzNjcXczczF6MnlvcCJ9.HCfgUYZUTP7uixjYF7tBSw">copy the style</a> I used and make it your own.</p>
<p><a href="https://api.mapbox.com/styles/v1/colbyfayock/ck8c2foj72lqk1jnug0g2haw0.html?fresh=true&amp;title=copy&amp;access_token=pk.eyJ1IjoiY29sYnlmYXlvY2siLCJhIjoiY2swODZzbXYxMGZzdzNjcXczczF6MnlvcCJ9.HCfgUYZUTP7uixjYF7tBSw">Basic Dark Mapbox Theme</a></p>
<p>To learn how to integrate it, you can try to check out the source code of <a href="https://github.com/colbyfayock/coronavirus-map-dashboard">my original demo</a>:</p>
<p><a href="https://github.com/colbyfayock/coronavirus-map-dashboard">https://github.com/colbyfayock/coronavirus-map-dashboard</a></p>
<h3 id="add-overview-dashboard-stats">Add overview dashboard stats</h3>
<p>Dashboards with maps like the <a href="https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6">Johns Hopkins University app</a> allows us to see more than a look on the map, but a glimpse at quick stats about the cases around the world.</p>
<figcaption>Johns Hopkins University Coronavirus Map Dashboard - March 29, 2020</figcaption>
</figure>
<p>The <a href="https://github.com/NovelCOVID/API">NovelCOVID API</a> has more endpoints like <code>/all</code> that provide a few global stats.</p>
<h2 id="be-safe-and-stay-informed">Be safe and stay informed</h2>
<p>I want to reiterate that you should make sure you're staying up to date using official sources for information, such as the Johns Hopkins University dashboard. Though the data should be reliable, it should also be considered a proof of concept for building a map and referencing, but shouldn't be considered for any kind of statistical analysis.</p>
<p>Please take care of yourself during these times. We're all in this together! ❤️</p>
<h2 id="want-to-learn-more-about-maps">Want to learn more about maps?</h2>
<p>You can check out a few of my other resources to get started:</p>
<ul>
<li><a href="https://www.colbyfayock.com/2020/03/anyone-can-map-inspiration-and-an-introduction-to-the-world-of-mapping">Anyone Can Map! Inspiration and an introduction to the world of mapping</a></li>
<li><a href="https://www.colbyfayock.com/2020/04/how-to-set-up-a-custom-mapbox-basemap-style-with-react-leaflet-and-leaflet-gatsby-starter/">How to set up a custom Mapbox basemap style with React Leaflet and Leaflet Gatsby Starter</a></li>
<li><a href="https://www.colbyfayock.com/2020/03/how-to-create-a-summer-road-trip-mapping-app-with-gatsby-and-leaflet">How to Create a Summer Road Trip Mapping App with Gatsby and Leaflet</a></li>
<li><a href="https://www.colbyfayock.com/2019/12/create-your-own-santa-tracker-with-gatsby-and-react-leaflet/">How to Create your own Santa Tracker with Gatsby and React Leaflet</a></li>
<li><a href="/news/easily-spin-up-a-mapping-app-in-react-with-leaflet/">How to build a mapping app in React the easy way with Leaflet</a></li>
</ul>
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
