---
card: "/images/default.jpg"
tags: [JavaScript]
description: The Christmas season is a magical time of year. We have Santa
author: "Milad E. Fahmy"
title: "How to Create your own Santa Tracker with Gatsby and React Leaflet"
created: "2021-08-15T19:31:52+02:00"
modified: "2021-08-15T19:31:52+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-mapping tag-maps tag-react tag-reactjs tag-leaflet tag-react-leaflet tag-santa tag-christmas tag-holidays tag-gatsby tag-gatsbyjs ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create your own Santa Tracker with Gatsby and React Leaflet</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/12/santa-tracker.jpg 300w,
/news/content/images/size/w600/2019/12/santa-tracker.jpg 600w,
/news/content/images/size/w1000/2019/12/santa-tracker.jpg 1000w,
/news/content/images/size/w2000/2019/12/santa-tracker.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/12/santa-tracker.jpg" alt="How to Create your own Santa Tracker with Gatsby and React Leaflet">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>The Christmas season is a magical time of year. We have Santa flying around spreading cheer and Elf roaming around New York during our yearly rewatch with family and friends.</p>
<figcaption>Buddy the Elf waving</figcaption>
</figure>
<p>To get in the spirit, we’re going to spin up a web app that includes a map that tracks Santa on it!</p>
<p><em>Edit 12/23: Updated the app to request directly to Santa's route, just in case the original API doesn't work as originally expected.</em></p>
<h2 id="what-are-we-going-to-build"><strong>What are we going to build?</strong></h2>
<p>We’re going to work through building a mapping app that tracks Santa’s route and his current location.</p>
<p>To achieve this, we’re going to spin up a premade Gatsby starter that will give us a basic foundation for a map, utilize Google’s unofficial API to grab Santa’s route, and overlay his position and route on top of the map with Leaflet.</p>
<h2 id="woah-a-mapping-app"><strong>Woah, a mapping app?</strong></h2>
<figcaption>Ay Caramba</figcaption>
</figure>
<p>Yup. If you haven’t played with maps before, don’t be discouraged! It's not as bad as you probably think. If you’d rather start with mapping basics, you can <a href="/news/easily-spin-up-a-mapping-app-in-react-with-leaflet/">read more about how mapping works</a> first.</p>
<h2 id="what-do-we-need-before-we-get-started"><strong>What do we need before we get started?</strong></h2>
<p>For this exercise, I’m going to assume you have <a href="https://nodejs.org/en/">node</a> or <a href="https://yarnpkg.com/en/">yarn</a> installed. For each example, I'll use yarn, but use the tool of your choice.</p>
<p>You’ll also want to install <a href="https://www.gatsbyjs.org/docs/gatsby-cli/">Gatsby’s CLI</a> globally which will allow us to use their <a href="https://www.gatsbyjs.org/docs/starters/">Starter tools</a>.</p>
<p>To set up Gatsby’s CLI, run the following command:</p><pre><code>yarn global add gatsby-cli</code></pre>
<p>After, you should be able to run <code>gatsby -h</code> to see the available commands, which means it’s successfully installed.</p>
<figcaption>Running gatsby -h to verify install</figcaption>
</figure>
<p>For more info about the Gatsby CLI, you can <a href="https://www.gatsbyjs.org/docs/gatsby-cli/">check out their documentation</a>.</p>
<h2 id="getting-started-with-our-map-foundation"><strong>Getting started with our map foundation</strong></h2>
<p>Once our command line tools are set up, the first thing we’ll want to do is create a new Gatsby project using <a href="https://github.com/colbyfayock/gatsby-starter-leaflet">a Leaflet starter</a> I put together. It provides us with a basic setup with <a href="https://leafletjs.com/">Leaflet</a> and <a href="https://react-leaflet.js.org/">React Leaflet</a>.</p>
<p>Starting in your project directory, let’s install the project:</p><pre><code>gatsby new [directory] https://github.com/colbyfayock/gatsby-starter-leaflet
</code></pre>
<p>Make sure to replace <code>[directory]</code> with the location you want to set up your project.</p>
<p>Once you run that command, Gatsby will clone that project without any of the git references and install the packages required to start.</p>
<figcaption>Installing Gatsby Starter Leaflet</figcaption>
</figure>
<p>To make sure it works, you can now navigate to that directory, spin up your server, and test it in the browser:</p><pre><code>cd [directory]
yarn develop
</code></pre>
<p>Where you see <code>[directory]</code> above, make sure to use the same path as you did before when setting up the new Gatsby project.</p>
<figcaption>Running Gatsby Starter Leaflet</figcaption>
</figure>
<p>If all goes as planned, your server should start and you should now be able to see your basic mapping app in your browser!</p>
<figcaption>Gatsby Starter Leaflet in the browser</figcaption>
</figure>
<h2 id="cleaning-things-up"><strong>Cleaning things up</strong></h2>
<p>This starter comes with a quick example of how we can interact with the map. We're not going to need this at all for our purposes so we can go ahead and clean things up.</p>
<p>To start, we’re going to open up our <code>index.js</code> file, the homepage file, and get rid of everything inside of the <code>mapEffect</code> function, which leaves us with:</p><pre><code class="language-js">// In src/pages/index.js
async function mapEffect({ leafletElement } = {}) {
// Get rid of everything in here
}
</code></pre>
<p>Now, let’s remove the <code>Marker</code> component nested inside of our <code>Map</code>, so we end up with:</p><pre><code class="language-jsx">&lt;Map {…mapSettings} /&gt;</code></pre>
<p>Now that we’re no longer using that functionality, we can get rid of the variables and references at the top of the file, so you can go ahead and remove:</p>
<ul>
<li>useRef</li>
<li>promiseToFlyTo</li>
<li>getCurrentLocation</li>
<li>Marker</li>
<li>gatsby_astronaut</li>
<li>ZOOM</li>
<li>timeToZoom</li>
<li>timeToOpenPopupAfterZoom</li>
<li>timeToUpdatePopupAfterZoom</li>
<li>popupContentHello</li>
<li>popupContentGatsby</li>
<li>markerRef</li>
</ul>
<p><a href="https://github.com/colbyfayock/my-santa-tracker/commit/58106bad98ff7491f56d580d01f70f1400120fce">Follow along with the commit.</a></p>
<h2 id="finding-santa"><strong>Finding Santa</strong></h2>
<p>Now that we’re in a good place, let’s get our hands dirty and find Santa. To do this, we’re going to use Google’s unofficial, undocumented API. This means that it’s possible this API won’t be available the day after this get’s published, but let’s be optimistic.</p>
<p>Additionally, at the time of writing, it’s still showing last year’s destinations, so what we’re really going to be visualizing here is Santa’s previous year’s route, though the hope is this would reset on the 24th and we’ll all be merry!</p>
<p>Before we get Santa, let’s first add a line back to our <code>mapEffect</code> function:</p><pre><code class="language-js">async function mapEffect({ leafletElement } = {}) {
if ( !leafletElement ) return;
}
</code></pre>
<p>What this will do is prevent the rest of our code from running in the event our map isn't ready yet. The <code>mapEffect</code> function itself, as you can see in the <code>Map</code> component, runs inside of an instance of <code>useEffect</code> passing an argument of a <code>ref</code> to the map, allowing us to run some code after our component renders.</p>
<p>So once we have that line, let’s now fetch Santa’s route inside of our <code>mapEffect</code> function:</p><pre><code class="language-js">async function mapEffect({ leafletElement } = {}) {
if ( !leafletElement ) return;
let route, routeJson;
try {
route = await fetch('https://firebasestorage.googleapis.com/v0/b/santa-tracker-firebase.appspot.com/o/route%2Fsanta_en.json?alt=media&amp;2018b');
routeJson = await route.json();
} catch(e) {
console.log(`Failed to find Santa!: ${e}`);
}
console.log(‘routeJson’, routeJson);
}</code></pre>
<p>Let’s break this down:</p>
<ul>
<li>We grab Santa’s route via the API endpoint</li>
<li>Once we have his route, we grab the response in a JSON format to make it easier to work with</li>
<li>This is all wrapped in a try/catch so we can safely handle any response errors</li>
<li>Finally, we just <code>log</code> out our response for now</li>
</ul>
<figcaption>Santa's route object in the web console</figcaption>
</figure>
<p>Now we have Santa and his route, which means we can see all the destinations in his route. If you dig in the response a little bit, you can see some fun things like how many presents were delivered to each location and the weather at the time!</p>
<p><a href="https://github.com/colbyfayock/my-santa-tracker/commit/f42c48fb0f0d70b4d20f1c2a1410bde1a4f27e84">Follow along with the commit.</a></p>
<h2 id="put-a-pin-in-his-location"><strong>Put a pin in his location</strong></h2>
<p>We found Santa! ? Now let’s put him on the map.</p>
<p>For our purposes, we’ll need to find the latitude and longitude of Santa. The problem is, we don’t get this exact value defined anywhere, we just get his destinations.</p>
<p>Since we don’t have his location specified anywhere, we can utilize his last known location where presents were delivered. Add the following after our last snippet inside the <code>mapEffect</code> function:</p><pre><code class="language-js">const { destinations = [] } = routeJson || {};
const destinationsVisited = destinations.filter(({arrival}) =&gt; arrival &lt; Date.now());
const destinationsWithPresents = destinationsVisited.filter(({presentsDelivered}) =&gt; presentsDelivered &gt; 0);
const lastKnownDestination = destinationsWithPresents[destinationsWithPresents.length - 1]</code></pre>
<p>Below our request code, we:</p>
<ul>
<li>Destructure <code>routeJson</code> to grab <code>destinations</code> into a constant, adding a fallback to an empty object</li>
<li>Filter the results to only find the destinations that he's visited, using the arrival time from the route object</li>
<li>Filter the results to find only the locations with presents</li>
<li>And finally grab the last item from the array, which shows his last known location</li>
</ul>
<p>At this point in time, 12/23, we don't actually have any destinations, as Santa is still at the North Pole. At any time, we can test this out to simulate a future date by replaceing <code>Date.now()</code> in <code>destinationsVisited</code> with a future date, such as <code>1577188980000</code> which would be around 7pm Eastern on 12/24. With that change, we can see what Santa's route actually looks like!</p>
<h2 id="handle-a-missing-santa">Handle a missing Santa</h2>
<p>Now that it's close to Christmas, Santa will still be at the North Pole, so let's handle the case where we don't have a location.</p>
<p>Above the line where we set <code>lastKnownDestination</code>, let's add:</p><pre><code class="language-js">if ( destinationsWithPresents.length === 0 ) {
// Create a Leaflet Market instance using Santa's LatLng location
const center = new L.LatLng( 0, 0 );
const noSanta = L.marker( center, {
icon: L.divIcon({
className: 'icon',
html: `&lt;div class="icon-santa"&gt;?&lt;/div&gt;`,
iconSize: 50
})
});
noSanta.addTo( leafletElement );
noSanta.bindPopup( `Santa's still at the North Pole!` );
noSanta.openPopup();
return;
}</code></pre>
<p>Okay so what are we doing here?</p>
<ul>
<li>First, we’re checking if we have any destinations with presents, which here we don't</li>
<li>We first create a LatLng of the center of the map</li>
<li>We create a Leaflet marker, using that center, with a custom Icon of Santa</li>
<li>Next we add that Santa marker to the leafletElement, which is our map</li>
<li>To show a message, we first bind a popup with a custom message and open it</li>
<li>Finally we return so the rest of the code doesn’t run, as we don’t have Santa at this point</li>
</ul>
<p>This was a section added after published to handle the API resetting, but you can still follow along with the code I added in context of the rest of the rest of the code.</p>
<p><a href="https://github.com/colbyfayock/my-santa-tracker/blob/master/src/pages/index.js#L40">Follow along in the code.</a></p>
<h2 id="pinning-santa">Pinning Santa</h2>
<p><em>Edit 12/23: This section was originally written with the previous year's API, but this is still a good example of what you'll expect on the response, so you can follow right along.</em></p>
<p>And as we can see, since we’re looking at last year’s data, Santa is back home at the North Pole.</p>
<figcaption>Santa's last known location in the web console</figcaption>
</figure>
<p>With his location, we can pull that apart, set up a Leaflet marker instance, and add our old friend to the map. Add the following after our last snippet inside the <code>mapEffect</code> function:</p><pre><code class="language-js">const santaLocation = new L.LatLng( lastKnownDestination.location.lat, lastKnownDestination.location.lng );
const santaMarker = L.marker( santaLocation, {
icon: L.divIcon({
className: ‘icon’,
html: `&lt;div class=“icon-santa”&gt;?&lt;/div&gt;`,
iconSize: 50
})
});
santaMarker.addTo(leafletElement);</code></pre>
<p>Here we:</p>
<ul>
<li>Create a Leaflet LatLng instance with his location</li>
<li>Create a Marker instance with our newly created LatLng instance</li>
<li>Add our new Marker to the map</li>
</ul>
<p>If we refresh our page, you’ll have to zoom out and pan up a little bit, but we'll see Santa on the map!</p>
<figcaption>Santa on the map</figcaption>
</figure>
<p>Before we move on, let’s give Santa a little holiday cheer to make him easier to find. Find your <code>application.scss</code> file and toss these styles in:</p><pre><code class="language-scss">// In src/assets/stylesheets/application.scss
.icon {
&amp; &gt; div {
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
border-radius: 100%;
box-shadow: 0 3px 4px rgba(0,0,0,.4);
border: none;
transition: all .2s;
&amp;:hover {
box-shadow: 0 4px 8px rgba(0,0,0,.6);
}
}
}
.icon-santa {
width: 50px;
height: 50px;
font-size: 3em;
background: white;
}
</code></pre>
<p>This just adds a white circle around him, a little drop shadow, and increases the size a bit to make him a little easier to find on the map.</p>
<figcaption>Santa styled on the map</figcaption>
</figure>
<p><a href="https://github.com/colbyfayock/my-santa-tracker/commit/1b636107078fce64068ce661903892c095cb4668">Follow along with the commit.</a></p>
<h2 id="drawing-his-route"><strong>Drawing his route</strong></h2>
<p>The last thing we’re going to do here is draw a path on the map showing his route so we can follow along.</p>
<p>To get started, let’s update our code and add this last bit after our last snippet in the <code>mapEffect</code> function:</p><pre><code class="language-js">// Create a set of LatLng coordinates that make up Santa's route
const santasRouteLatLngs = destinationsWithPresents.map(destination =&gt; {
const { location } = destination;
const { lat, lng } = location;
return new L.LatLng( lat, lng );
});
// Utilize Leaflet's Polyline to add the route to the map
const santasRoute = new L.Polyline( santasRouteLatLngs, {
weight: 2,
color: 'green',
opacity: 1,
fillColor: 'green',
fillOpacity: 0.5
});
// Add Santa to the map!
santasRoute.addTo(leafletElement);
</code></pre>
<p>What we’re doing:</p>
<ul>
<li>Creating an array of Leaflet LatLng instances that make up Santa’s route</li>
<li>Creating a Leaflet Polyline (a multi-point line) using that routes array</li>
<li>Make that Polyline green</li>
<li>Add our Polyline to the map</li>
</ul>
<p>What we get… is a bunch of squiggly lines!</p>
<figcaption>Santa's route on the map</figcaption>
</figure>
<p>This is expected. This gets technical really fast, but Leaflet by default can only understand 1 “portion” of the map as it wraps around in our browser. What this realistically means, is instead of drawing a line around a globe, the coordinates think it goes from one side of the world to the other as it hits the International Dateline. This is a bit out of scope for this tutorial, but you can check out <a href="https://github.com/briannaAndCo/Leaflet.Antimeridian">Leaflet.Antimeridian</a> to learn more and see if you can implement the solution to it.</p>
<p><a href="https://github.com/colbyfayock/my-santa-tracker/commit/3b0c08f066212ff32c82d3df2a13d1419da8ac41">Follow along with the commit.</a></p>
<h2 id="a-few-quick-style-tweaks"><strong>A few quick style tweaks</strong></h2>
<p>One last thing! And this is completely optional. Let’s make the map a little bit bigger, set the background color to match our oceans, and zoom out a little bit. So let’s make a few changes:</p><pre><code class="language-js">// In src/pages/index.js
const DEFAULT_ZOOM = 1;
</code></pre>
<p>We’re setting our default zoom to <code>1</code> instead of <code>2</code> to allow the map to be zoomed out a bit.</p><pre><code class="language-scss">// In src/assets/stylesheets/pages/_home.scss
.page-home {
.map,
.map-base {
height: 80vh;
}
}</code></pre>
<p>We’re setting our map to a height of <code>80vh</code> instead of <code>50vh</code> to make it take up a little more of our screen.</p><pre><code class="language-scss">// In src/assets/stylesheets/components/_map.scss
.map {
&amp;,
.map-base {
background: #acd3de;
}
}</code></pre>
<p>We’re setting the background color of our map to <code>#acd3de</code> instead of <code>$blue-grey-50</code> which allows us to match the color of the oceans on our map.</p>
<p>What this achieves is being able to see Santa’s full route and Santa on the first view. Additionally, since the map only covers part of the screen, setting the background color of the map allows us to not have a little bit of a weird cutoff.</p>
<figcaption>Santa's route zoomed out</figcaption>
</figure>
<p><a href="https://github.com/colbyfayock/my-santa-tracker/commit/882ea5c0b1b48da86d81494b8b4ad5db7bc1bae6">Follow along with the commit.</a></p>
<h2 id="want-a-challenge"><strong>Want a challenge?</strong></h2>
<p>To take this 1 step further, follow along with both how we added the routes and Santa to the map and try to see if you can add a marker to each destination location to show where all of the stops are. Bonus, add a popup to each one that says how many presents were delivered to that location!</p>
<p>To see the answer with some code organization and how I added the gift markers, check out the final version of the <a href="https://github.com/colbyfayock/santa-tracker">Santa Tracker demo</a>.</p>
<figcaption>Final Santa Tracker demo</figcaption>
</figure>
<p>While you’re there, you can also see how I utilized Leaflet.Antimeridian to fix our map's route.</p>
<h2 id="what-did-we-learn"><strong>What did we learn?</strong></h2>
<p>Building basic apps with a map isn’t nearly as bad as we thought! We learned how to fetch some data from an API, grab the data we need, and draw representations of that data on a map.</p>
<p>Next time you want to add a map widget to your landing page, try Leaflet. Share what you create on <a href="https://twitter.com/colbyfayock">Twitter</a>! Would love to see what you come up with.</p>
<p>I hope you and your family have a fantastic holiday season!</p>
<figcaption>Happy Holidays from Dunder Mifflin</figcaption>
</figure>
<h2 id="want-to-learn-more-about-maps">Want to learn more about maps?</h2>
<p>You can check out a few of my other resources to get started:</p>
<ul>
<li><a href="https://www.colbyfayock.com/2020/03/anyone-can-map-inspiration-and-an-introduction-to-the-world-of-mapping">Anyone Can Map! Inspiration and an introduction to the world of mapping</a></li>
<li><a href="https://www.colbyfayock.com/2020/03/how-to-create-a-coronavirus-covid-19-dashboard-map-app-with-gatsby-and-leaflet">How to create a Coronavirus (COVID-19) Dashboard &amp; Map App in React with Gatsby and Leaflet</a></li>
<li><a href="https://www.colbyfayock.com/2020/04/how-to-set-up-a-custom-mapbox-basemap-style-with-react-leaflet-and-leaflet-gatsby-starter/">How to set up a custom Mapbox basemap style with React Leaflet and Leaflet Gatsby Starter</a></li>
<li><a href="https://www.colbyfayock.com/2020/03/how-to-create-a-summer-road-trip-mapping-app-with-gatsby-and-leaflet">How to Create a Summer Road Trip Mapping App with Gatsby and Leaflet</a></li>
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
<p><em>Want to read some of my other articles? Check out my blog: <a href="https://www.colbyfayock.com/2019/12/create-your-own-santa-tracker-with-gatsby-and-react-leaflet/">https://www.colbyfayock.com/2019/12/create-your-own-santa-tracker-with-gatsby-and-react-leaflet/</a></em></p>
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
