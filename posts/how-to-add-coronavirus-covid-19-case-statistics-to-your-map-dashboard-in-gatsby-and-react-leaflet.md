---
card: "/images/default.jpg"
tags: [JavaScript]
description: Previously, we walked through creating a map that shows an in
author: "Milad E. Fahmy"
title: "How to add Coronavirus (COVID-19) case statistics to your React map dashboard with Gatsby"
created: "2021-08-15T19:30:04+02:00"
modified: "2021-08-15T19:30:04+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-reactjs tag-react-leaflet tag-mapping tag-maps tag-coronavirus tag-covid-19 tag-front-end tag-front-end-development tag-frontend tag-react tag-gatsby tag-gatsbyjs tag-leaflet tag-analytics tag-data-analytics ">
<header class="post-full-header">
<h1 class="post-full-title">How to add Coronavirus (COVID-19) case statistics to your React map dashboard with Gatsby</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/04/coronavirus-mapping-app-2600x1000.jpg 300w,
/news/content/images/size/w600/2020/04/coronavirus-mapping-app-2600x1000.jpg 600w,
/news/content/images/size/w1000/2020/04/coronavirus-mapping-app-2600x1000.jpg 1000w,
/news/content/images/size/w2000/2020/04/coronavirus-mapping-app-2600x1000.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/04/coronavirus-mapping-app-2600x1000.jpg" alt="How to add Coronavirus (COVID-19) case statistics to your React map dashboard with Gatsby">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Previously, we walked through creating a map that shows an interactive look at Coronavirus (COVID-19) cases per country. How can we extend this with some case statistics to show recent data about the impacts on our world?</p>
<p><em>Author's note: Similar to before, this dashboard is meant to be a demo and proof of concept for using real world data to build a dashboard. While this data should be accurate per the NovelCOVID API, I would recommend using tools like the <a href="https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6">Johns Hopkins University dashboard</a> for complete and accurate analysis. Stay home and be safe! ❤️</em></p>
<ul>
<li><a href="#what-are-we-going-to-build">What are we going to build?</a></li>
<li><a href="#what-do-we-need-before-we-get-started">What do we need before we get started?</a></li>
<li><a href="#step-1-update-how-we-fetch-our-data-and-fetch-the-statistics">Step 1: Update how we fetch our data and fetch the statistics</a></li>
<li><a href="#step-2-adding-statistics-to-our-dashboard">Step 2: Adding statistics to our dashboard</a></li>
<li><a href="#step-3-make-the-data-human-friendly">Step 3: Make the data human friendly</a></li>
<li><a href="#step-4-add-the-last-updated-date">Step 4: Add the Last Updated date</a></li>
<li><a href="#what-can-i-do-next">What can I do next?</a></li>
</ul>
<h2 id="what-are-we-going-to-build">What are we going to build?</h2>
<p>We're going to be extending our <a href="https://www.colbyfayock.com/2020/03/how-to-create-a-coronavirus-covid-19-dashboard-map-app-with-gatsby-and-leaflet">original map demo</a> with some basic statistics that we can retrieve from the <a href="https://github.com/NovelCOVID/API">NovelCOVID API</a>. To get an idea, here's <a href="https://coronavirus-map-dashboard.netlify.app/">my demo</a> I'm basing this off of.</p>
<figcaption>Coronavirus (COVID-19) map demo with dashboard statistics</figcaption>
</figure>
<p>While you're not required to have completed <a href="https://www.colbyfayock.com/2020/03/how-to-create-a-coronavirus-covid-19-dashboard-map-app-with-gatsby-and-leaflet/">Part 1</a> to apply these concepts, it definitely helps, and it lets you set up a map for your dashboard. If you'd like to start there, which I recommend, check out <a href="https://www.colbyfayock.com/2020/03/how-to-create-a-coronavirus-covid-19-dashboard-map-app-with-gatsby-and-leaflet/">How to create a Coronavirus (COVID-19) Dashboard &amp; Map App with Gatsby and Leaflet</a> first.</p>
<h2 id="woah-a-mapping-app">Woah, a mapping app?</h2>
<p>Yup. If you haven't played with maps before, don't be discouraged! It's not as bad as you probably think. If you'd rather start with mapping basics, you can &nbsp;<a href="/news/easily-spin-up-a-mapping-app-in-react-with-leaflet/">read more about how mapping works</a> &nbsp;first.</p>
<h2 id="what-do-we-need-before-we-get-started">What do we need before we get started?</h2>
<p>For this walkthrough, you pretty much need a React app in some form. I'll be working with the dashboard we previously built in my last walkthrough that includes a <a href="https://www.colbyfayock.com/2020/03/how-to-create-a-coronavirus-covid-19-dashboard-map-app-with-gatsby-and-leaflet/">map of the cases of the Coronavirus (COVID-19) per country</a>.</p>
<figcaption>Coronavirus (COVID-19) map dashboard</figcaption>
</figure>
<p>I recommend starting with the previous tutorial, but if you want to skip the map and start fresh, the easiest way would probably be to use <a href="https://github.com/facebook/create-react-app">Create React App</a>, <a href="https://www.gatsbyjs.org/">Gatsby</a>, or <a href="https://nextjs.org/">Next.js</a>.</p>
<h2 id="step-1-update-how-we-fetch-our-data-and-fetch-the-statistics">Step 1: Update how we fetch our data and fetch the statistics</h2>
<p>To get started with our statistics dashboard, we're going to do a little prep work by changing how we're fetching the data. The goal here, is we're going to wrap our request logic in a reusable way so that we can use it for both our countries data and our new statistics data.</p>
<h3 id="creating-a-new-react-hook-to-fetch-data">Creating a new React hook to fetch data</h3>
<p>Diving in, the first we'll do is create a new <a href="https://reactjs.org/docs/hooks-reference.html">React hook</a> that will serve as how we fetch the data. To get started, create a new file in your hooks directory called <code>useTracker.js</code> &nbsp;and add a line inside of <code>hooks/index.js</code> to export it:</p><pre><code class="language-js">// New file src/hooks/useTracker.js
// This will be empty for now</code></pre><pre><code class="language-js">// Inside hooks/index.js
export { default as useTracker } from './useTracker';
</code></pre>
<p>Inside of our <code>useTracker.js</code> file, we're going to set up our request logic. This is a long file, so make sure you copy and paste the entire thing before we walk through what it does:</p><pre><code class="language-js">import { useEffect, useState } from 'react';
import axios from 'axios';
const API_HOST = 'https://corona.lmao.ninja/v2';
const ENDPOINTS = [
{
id: 'all',
path: '/all',
isDefault: true
},
{
id: 'countries',
path: '/countries'
}
]
const defaultState = {
data: null,
state: 'ready'
}
const useTracker = ({ api = 'all' }) =&gt; {
const [tracker = {}, updateTracker] = useState(defaultState)
async function fetchTracker() {
let route = ENDPOINTS.find(({ id } = {}) =&gt; id === api);
if ( !route ) {
route = ENDPOINTS.find(({ isDefault } = {}) =&gt; !!isDefault);
}
let response;
try {
updateTracker((prev) =&gt; {
return {
...prev,
state: 'loading'
}
});
response = await axios.get(`${API_HOST}${route.path}`);
} catch(e) {
updateTracker((prev) =&gt; {
return {
...prev,
state: 'error',
error: e
}
});
return;
}
const { data } = response;
updateTracker((prev) =&gt; {
return {
...prev,
state: 'ready',
data
}
});
}
useEffect(() =&gt; {
fetchTracker()
}, [api])
return {
fetchTracker,
...tracker
}
};
export default useTracker;
</code></pre>
<p>Starting from the top:</p>
<ul>
<li>We import our dependencies: we're going to use Reacts <code>useEffect</code> &nbsp;and <code>useState</code> hooks to manage our requests</li>
<li>We define default constants: we have a base API endpoint for our data, a list of the available endpoints we'll use, and a state object that will store our data</li>
<li>We define our <code>useTracker</code> hook: &nbsp;our hook includes one argument <code>api</code> &nbsp;that will allow us to specify which endpoint we'll use to make our request</li>
<li>We set up a state instance: we'll want to keep track of our fetched data, so we create a <code>tracker</code> state instance that we'll be able to update</li>
<li>We created an asynchronous <code>fetchTracker</code> function: we'll use this to make our actual request</li>
<li>Inside our function: we first find the API route and create our URL, update our state instance to a "loading" state, try to make our request, catch any errors if there are any, and finally if the request is successful, we update our state with that data</li>
<li>We trigger our function: using a <code>useEffect</code> hook, we trigger our <code>fetchTracker</code> function to make the request. We only have one dependency of <code>api</code>. This means the function will only fire the first time and any time the <code>api</code> value we pass in changes. We won't be changing that value, but it may be helpful in other instances if you're dynamically changing the API used</li>
<li>We return our tracker: the returned object includes both our <code>tracker</code> data as well as our <code>fetchTracker</code> function that we could use to refetch the data if we'd like</li>
</ul>
<p>And with all of that, we have a brand new hook that will fetch data from the NovelCOVID API.</p>
<h3 id="using-our-new-tracker-hook">Using our new tracker hook</h3>
<p>To make use of this hook, let's jump over to <code>src/pages/index.js</code>, remove our <code>axios</code> import if it's there, and instead import our hook:</p><pre><code class="language-js">import { useTracker } from 'hooks';
</code></pre>
<p>With our hook, let's replace our original country data request. &nbsp;First, add the following to the top of the <code>IndexPage</code> component:</p><pre><code class="language-js">const { data: countries = [] } = useTracker({
api: 'countries'
});
const hasCountries = Array.isArray(countries) &amp;&amp; countries.length &gt; 0;
</code></pre>
<p>This will let us fetch our country data and let us know if we have any results. Next, let's replace our original request.</p>
<p>Inside of our <code>mapEffect</code> function, let's remove the <code>axios</code> request in addition to the response, the destructured data object, and the <code>hasData</code> constant.</p>
<figcaption>Code diff showing update to map effect</figcaption>
</figure>
<p>Then, replace <code>hasData</code> with <code>hasCountries</code>:</p><pre><code class="language-js">if ( !hasCountries ) return;
</code></pre>
<p>And replace <code>data</code> with <code>countries</code> in the <code>geoJson</code> object where we map our features:</p><pre><code class="language-js">features: countries.map((country = {}) =&gt; {
</code></pre>
<p>At this point, if you hit save and refresh, you shouldn't notice any difference to what you previously had.</p>
<h3 id="add-a-request-for-our-stats">Add a request for our stats</h3>
<p>Now that we are using our <code>useTracker</code> hook to fetch our country data, let's also use that to fetch our stats.</p>
<p>Right next to where we set up our <code>useTracker</code> hook before, let's add another request:</p><pre><code class="language-js">const { data: stats = {} } = useTracker({
api: 'all'
});
</code></pre>
<p>And if we add a <code>console.log</code> statement under to see what's inside <code>stats</code>:</p><pre><code class="language-js">console.log('stats', stats);
</code></pre>
<p>We should see our <code>stats</code> data object logged out!</p>
<figcaption>Using console.log to show Coronavirus (COVID-19) statistics</figcaption>
</figure>
<p><a href="https://github.com/colbyfayock/my-coronavirus-map/commit/fe9d85e57f7474a86d38213676bf62df4b6168a4">Follow along with the commit!</a></p>
<h2 id="step-2-adding-statistics-to-our-dashboard">Step 2: Adding statistics to our dashboard</h2>
<p>Now that we have our data available to use, let's use it!</p>
<p>To get started adding our statistics to the dashboard, let's create a data structure that will allow us to easily configure the data we want to use.</p>
<p>To do this, let's first create a new array called <code>dashboardStats</code> below <code>hasCountries</code> at the top of the page component:</p><pre><code class="language-js">const dashboardStats = [];
</code></pre>
<p>Inside this array, let's add some new objects that specify our data that we're pulling from the <code>stats</code> object we requested. To start, let's try to add:</p><pre><code class="language-js">const dashboardStats = [
{
primary: {
label: 'Total Cases',
value: stats?.cases
},
secondary: {
label: 'Per 1 Million',
value: stats?.casesPerOneMillion
}
},
{
primary: {
label: 'Total Deaths',
value: stats?.deaths
},
secondary: {
label: 'Per 1 Million',
value: stats?.deathsPerOneMillion
}
},
{
primary: {
label: 'Total Tests',
value: stats?.tests
},
secondary: {
label: 'Per 1 Million',
value: stats?.testsPerOneMillion
}
}
]
</code></pre>
<p>The reason we're splitting this up into <code>primary</code> and <code>secondary</code> keys, is we're going to use that to differentiate between logically similar stats that we want to style a little bit differently.</p>
<p><em>Note: if you're not familiar with the <code>?.</code> syntax, it's called <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining">Optional Chaining</a>. This allows us to chain our properties without worrying about if the objects exist. If <code>stats</code> is undefined, it will simply return undefined instead of throwing an error.</em></p>
<p>With our stats data, let's add the tracker to our map. Let's remove our current <code>&lt;Map&gt;</code> component and include it nested inside our tracker div in the following:</p><pre><code class="language-jsx">&lt;div className="tracker"&gt;
&lt;Map {...mapSettings} /&gt;
&lt;div className="tracker-stats"&gt;
&lt;ul&gt;
{ dashboardStats.map(({ primary = {}, secondary = {} }, i) =&gt; {
return (
&lt;li key={`Stat-${i}`} className="tracker-stat"&gt;
{ primary.value &amp;&amp; (
&lt;p className="tracker-stat-primary"&gt;
{ primary.value }
&lt;strong&gt;{ primary.label }&lt;/strong&gt;
&lt;/p&gt;
)}
{ secondary.value &amp;&amp; (
&lt;p className="tracker-stat-secondary"&gt;
{ secondary.value }
&lt;strong&gt;{ secondary.label }&lt;/strong&gt;
&lt;/p&gt;
)}
&lt;/li&gt;
);
})}
&lt;/ul&gt;
&lt;/div&gt;
&lt;/div&gt;
</code></pre>
<p>This code should be immediately following the <code>&lt;Helmet&gt;</code> component if you're following along.</p>
<p>To explain what we're doing:</p>
<ul>
<li>We're creating a "tracker" div that will organize our stats</li>
<li>We move our <code>&lt;Map</code> component inside of this tracker</li>
<li>We create a separate section called "tracker-stats"</li>
<li>Inside of this, we create an unordered list (<code>ul</code>)</li>
<li>Inside of our list, we loop through all of our stats inside <code>dashboardStats</code></li>
<li>For each stat, we create a new list element (<code>li</code>) and include 2 optional paragraphs that includes our primary stat data and our secondary stat data</li>
</ul>
<p>Once we reload our page, we should now see a few stats:</p>
<figcaption>Adding the first statistics to the page</figcaption>
</figure>
<p>Now that we have our stats on our page, let's make them look like they're in a dashboard.</p>
<p>Let's create a new file called <code>_tracker.scss</code> inside of our <code>src/assets/stylesheets/components</code> directory. Once that file is created, additionally add it to the <code>src/assets/stylesheets/components/__components.scss</code> file:</p><pre><code class="language-scss">@import "tracker";
</code></pre>
<p>With our new component style file ready to go, let's add some styles into <code>_tracker.scss</code>:</p><pre><code class="language-scss">.tracker-stats {
color: white;
background-color: $blue-grey-900;
border-top: solid 1px darken($blue-grey-900, 5);
ul {
display: grid;
grid-template-columns: 1fr 1fr 1fr;
list-style: none;
padding: 0;
margin: 0;
}
}
.tracker-stat {
font-size: 2em;
text-align: center;
padding: .5em;
border-right: solid 1px darken($blue-grey-900, 5);
border-bottom: solid 1px darken($blue-grey-900, 5);
strong {
font-weight: normal;
color: $blue-grey-300;
}
}
.tracker-stat-primary {
margin: 0;
strong {
display: block;
font-size: .5em;
}
}
.tracker-stat-secondary {
font-size: .5em;
margin: .8em 0 0;
strong {
font-size: .8em;
margin-left: .4em;
}
}
</code></pre>
<p>Above – we're adding colors and organizational effects, such as using <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout">CSS Grid</a>, to allow our data to be organized in an easy to read way and to look good! We're also making use of some pre-existing colors variables that are used within the project to keep the color use consistent.</p>
<p>Once you save those styles and reload the page, it should look much better:</p>
<figcaption>Adding case statistics to the dashboard</figcaption>
</figure>
<p>From here, feel free to add more stats or adjust them to your liking. In the demo I created, I added the stats for active cases, critical cases, and recovered cases. If you'd like to do the same, you can <a href="https://github.com/colbyfayock/my-coronavirus-map/commit/eb8a28c9e46dc2327ada0df21b250422e55d304c">check out the commit</a>.</p>
<p><a href="https://github.com/colbyfayock/my-coronavirus-map/commit/eb8a28c9e46dc2327ada0df21b250422e55d304c">Follow along with the commit!</a></p>
<h2 id="step-3-make-the-data-human-friendly">Step 3: Make the data human friendly</h2>
<p>Now the rest of this walkthrough could be considered optional, but ultimately we want people to be able to read these statistics, right? So let's make the numbers a little more easy to read.</p>
<p>First, let's open our <code>src/lib/util.js</code> file and add this function:</p><pre><code class="language-js">/**
* commafy
* @description Applies appropriate commas to large numbers
*/
export function commafy(value) {
let numberString = `${value}`;
numberString = numberString.split('');
numberString.reverse();
numberString = numberString.reduce((prev, current, index) =&gt; {
const shouldComma = (index + 1) % 3 === 0 &amp;&amp; index + 1 &lt; numberString.length;
let updatedValue = `${prev}${current}`;
if ( shouldComma ) {
updatedValue = `${updatedValue},`;
}
return updatedValue;
}, '');
numberString = numberString.split('');
numberString.reverse()
numberString = numberString.join('');
return numberString;
}
</code></pre>
<p>This function will take a number and turn it into a string with commas. To walk through what it does:</p>
<ul>
<li>Takes in a value as an argument. For our use, this value will most likely be a number.</li>
<li>It converts the value into a string. We'll use this to work with adding commas to our number.</li>
<li>We split that string into an array and reverse it. We want to reverse it because it makes it easier to add our commas depending on the index.</li>
<li>We use the javascript <code>reduce</code> function to recreate our number-string. After every 3 numbers, we want to add a comma.</li>
<li>Once we have our new value with the commas, we want to re-reverse it. So we split it again, reverse the array of characters, and re-join it, which is what we return</li>
</ul>
<p>And now that we have our <code>commafy</code> function, let's use it. Back inside <code>src/pages/index.js</code>, let's import our function at the top of the page:</p><pre><code class="language-js">import { commafy } from 'lib/util';
</code></pre>
<p>Then, in our <code>dashboardStats</code> array, let's replace every number value with a ternary expression and function that will convert our number if it's available:</p><pre><code class="language-js">value: stats ? commafy(stats?.cases) : '-'
</code></pre>
<p>This line checks to see if <code>stats</code> exists. If it does, we <code>commafy</code> the <code>cases</code> value. If it doesn't exist, we return a <code>-</code> to show it's unavailable.</p>
<p>Once we repeat that process for all of our numbers, we can save, reload the page, and see our human friendly numbers!</p>
<figcaption>Formatting the statistics to be human readable</figcaption>
</figure>
<p><a href="https://github.com/colbyfayock/my-coronavirus-map/commit/90f266c17815239d9d3356d9b9d660915fdc26c2">Follow along with the commit!</a></p>
<h2 id="step-4-add-the-last-updated-date">Step 4: Add the Last Updated date</h2>
<p>Finally, we want to make sure people are staying informed and understand the last time this data was updated. Luckily, our API provides a Last Updated date for us, so let's use it!</p>
<p>At the bottom of our "tracker" <code>div</code> under <code>tracker-stats</code>, let's add the following:</p><pre><code class="language-jsx">&lt;div className="tracker-last-updated"&gt;
&lt;p&gt;
Last Updated: { stats?.updated }
&lt;/p&gt;
&lt;/div&gt;
</code></pre>
<p>This creates a new section where we simply include the <code>updated</code> property from our stats. And if we save and reload the page, we can see the last updated date!</p>
<figcaption>Adding last updated to the dashboard</figcaption>
</figure>
<p>But how could we even understand what that number is, unless you're the computer crawling this blog post? So let's change it to a human readable format like we did with our numbers.</p>
<p>Inside of our <code>src/lib/util.js</code> file, let's add another function:</p><pre><code class="language-js">/**
* friendlyDate
* @description Takes in a date value and returns a friendly version
*/
export function friendlyDate(value) {
const date = new Date(value);
return new Intl.DateTimeFormat('en', {
year: 'numeric',
month: 'short',
day: '2-digit',
hour: 'numeric',
minute: 'numeric'
}).format(date);
}
</code></pre>
<p>This function creates a new <code>Date</code> object, then uses the javascript <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat">International DateTimeFormat API</a> to convert it into a friendly readable format!</p>
<p>Once that's saved, let's import it next to our <code>commafy</code> function at the top of <code>src/pages/index.js</code>:</p><pre><code class="language-js">import { commafy, friendlyDate } from 'lib/util';
</code></pre>
<p>Then we can update our code similar to how we updated our numbers:</p><pre><code class="language-jsx">Last Updated: { stats ? friendlyDate(stats?.updated) : '-' }
</code></pre>
<p>And if we save and reload, we see it in a human readable way!</p>
<figcaption>Formatting the last updated date</figcaption>
</figure>
<p>Finally for our "last updated" should look like it fits in with the rest of the dashboard, so let's add a few more styles. Inside of our <code>_tracker.scss</code> file we were working with earlier:</p><pre><code class="language-scss">.tracker-last-updated {
color: white;
background-color: $blue-grey-900;
padding: .8em 0;
p {
color: $blue-grey-300;
font-size: .8em;
text-align: center;
margin: 0;
}
}
</code></pre>
<p>And once we hit save and refresh the browser, we have our dashboard statistics with the last updated time! ?</p>
<figcaption>Final dashboard with formatted lasted updated date</figcaption>
</figure>
<p><a href="https://github.com/colbyfayock/my-coronavirus-map/commit/408286aecb32223c8782eb1539f5563135c75dfb">Follow along with the commit!</a></p>
<h2 id="what-can-i-do-next">What can I do next?</h2>
<h3 id="make-the-marker-tooltip-data-human-friendly">Make the marker tooltip data human friendly</h3>
<p>Now that we have our handy <code>commafy</code> and <code>friendlyDate</code> functions, we can reuse those functions to clean up the data in our country marker popups!</p>
<h3 id="use-the-fetchtracker-function-to-poll-for-updates">Use the fetchTracker function to poll for updates</h3>
<p>Inside of the <code>useTracker</code> hook we created, we exported a function called <code>fetchTracker</code>. This allows us to force a request to the API to fetch new data. To make sure our map stays current even when somebody doesn't refresh the page, we can create a <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout">timer</a> in javascript to regularly invoke that function to update our dashboard data.</p>
<h3 id="clear-the-map-layers-before-re-adding-the-new-ones">Clear the map layers before re-adding the new ones</h3>
<p>One thing we're currently not doing is cleaning up old layers before adding a new one. The way the map is set up, it just keeps layering them on top. What we can do is before we add all of our new layers, we can clear out the old ones. <a href="https://github.com/colbyfayock/my-coronavirus-map/commit/cad3b5a6e31a6ae090549c12e40a08fee4db4aa5">Check out this commit</a> to get started!</p>
<h2 id="want-to-learn-more-about-maps">Want to learn more about maps?</h2>
<p>You can check out a few of my other resources to get started:</p>
<ul>
<li><a href="https://www.colbyfayock.com/2020/03/how-to-create-a-coronavirus-covid-19-dashboard-map-app-with-gatsby-and-leaflet">How to create a Coronavirus (COVID-19) Dashboard &amp; Map App in React with Gatsby and Leaflet</a> (Part 1 of this post)</li>
<li><a href="https://www.colbyfayock.com/2020/04/how-to-set-up-a-custom-mapbox-basemap-style-with-react-leaflet-and-leaflet-gatsby-starter/">How to set up a custom Mapbox basemap style with React Leaflet and Leaflet Gatsby Starter</a></li>
<li><a href="https://www.colbyfayock.com/2020/03/anyone-can-map-inspiration-and-an-introduction-to-the-world-of-mapping">Anyone Can Map! Inspiration and an introduction to the world of mapping</a></li>
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
