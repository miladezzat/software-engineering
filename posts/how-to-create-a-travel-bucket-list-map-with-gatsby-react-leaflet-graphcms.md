---
card: "/images/default.jpg"
tags: [JavaScript]
description: "Traveling is fun and we all have a lot of places we want to v"
author: "Milad E. Fahmy"
title: "How to Create a Travel Bucket List Map with Gatsby, React Leaflet, & GraphCMS"
created: "2021-08-16T11:27:34+02:00"
modified: "2021-08-16T11:27:34+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-graphcms tag-cms tag-headless-cms tag-mapping tag-maps tag-tech tag-tutorial tag-beginners-guide tag-travel tag-gatsby tag-gatsbyjs tag-leaflet tag-react-leaflet tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create a Travel Bucket List Map with Gatsby, React Leaflet, &amp; GraphCMS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/06/travel-bucket-list.jpg 300w,
/news/content/images/size/w600/2020/06/travel-bucket-list.jpg 600w,
/news/content/images/size/w1000/2020/06/travel-bucket-list.jpg 1000w,
/news/content/images/size/w2000/2020/06/travel-bucket-list.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/06/travel-bucket-list.jpg" alt="How to Create a Travel Bucket List Map with Gatsby, React Leaflet, &amp; GraphCMS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
</code></pre><p><em>Note: you can replace <code>my-travel-bucket-list</code> with whatever you want. This will be used to create the new folder for the app.</em></p><p>Once you run that, Gatsby will pull down the Starter and install the dependencies. After it’s complete, navigate to that directory and run the development command:</p><pre><code class="language-shell">cd my-travel-bucket-list
yarn develop
# or
npm run develop
</code></pre><p>Once it’s finished location, your app should be ready to go!</p><h3 id="cleaning-our-some-demo-code">Cleaning our some demo code</h3><p>Because we’re using a Starter, it has a little bit of demo code. Let’s clean that out to avoid any confusion.</p><p>Open up the <code>src/pages/index.js</code> file.</p><p>First, remove everything inside of <code>mapEffect</code> except the first line and set up an alias for <code>leafletElement</code> to <code>map</code>:</p><pre><code class="language-js">async function mapEffect({ leafletElement: map } = {}) {
if ( !map ) return;
}
</code></pre><p>With that gone, we can remove the <code>markerRef</code> definition at the top of the <code>IndexPage</code> component, remove the <code>ref={markerRef}</code> prop from our <code>&lt;Marker&gt;</code> component, and the <code>useRef</code> import next to React.</p><p>Now, we can remove all of the variables that start with <code>popup</code> and <code>time</code>, including:</p><ul><li>timeToZoom</li><li>timeToOpenPopupAfterZoom</li><li>timeToUpdatePopupAfterZoom</li><li>popupContentHello</li><li>popupContentGatsby</li></ul><p>Lastly, you can remove all of the following lines:</p><pre><code class="language-js">import L from 'leaflet';
...
import { promiseToFlyTo, getCurrentLocation } from 'lib/map';
...
import gatsby_astronaut from 'assets/images/gatsby-astronaut.jpg';
...
const ZOOM = 10;
# or
npm install gatsby-source-graphql
</code></pre><p>Next, open up your <code>gatsby-config.js</code> file in the root of your project and add the following to your plugins:</p><pre><code class="language-json">{
resolve: 'gatsby-source-graphql',
options: {
typeName: 'GCMS',
fieldName: 'gcms',
url: '[API ENDPOINT]',
}
}
resolve: 'gatsby-source-graphql',
options: {
typeName: 'GCMS',
fieldName: 'gcms',
url: 'https://[region-id].graphcms.com/v2/[project-id]/master',
},
},
</code></pre><p><em>Note: your URL will have actual values inside of <code>[region-id]</code> and <code>[project-id]</code>.</em></p><p>Save your <code>gatsby-config.js</code> file and start your development server backup (<code>yarn develop</code>) and we’re ready to go!</p><h3 id="querying-our-locations-via-graphql">Querying our locations via GraphQL</h3><p>Finally, let’s actually query our data so that we’ll be able to use it in our app.</p><p>We’re going to create a new <a href="https://reactjs.org/docs/hooks-reference.html">React Hook</a> that we’ll be able to use to grab our locations anywhere within our app.</p><p>Under <code>src/hooks/index.js</code>, add the following line to the existing list:</p><pre><code class="language-js">export { default as useDestinations } from './useDestinations';
</code></pre><p>This will allow us to more conveniently import our hook which we’ll create next.</p><p>Under <code>src/hooks</code>, create a new file <code>useDestinations.js</code> and paste in this code:</p><pre><code class="language-js">import { graphql, useStaticQuery } from 'gatsby';
export default function useDestinations() {
const { gcms = {} } = useStaticQuery( graphql`
query {
gcms {
destinations {
id
name
location {
latitude
longitude
}
}
}
}
` );
let { destinations } = gcms;
return {
destinations,
};
}
</code></pre><p>Here, we’re:</p><ul><li>Importing the <code>graphql</code> and <code>useStaticQuery</code> utilities from Gatsby</li><li>We’re creating a new function (or hook) that is exported by default</li><li>In that function, we’re using <code>useStaticQuery</code> to create a new GraphQL query which asks GraphCMS to return the data structure we defined.</li><li>That query returns a value which we destructure immediately to grab the <code>gmcs</code> object</li><li>We destructure <code>destinations</code> from <code>gmcs</code> and return it as part of a new object from our hook</li></ul><p>With this, we can now use our hook anywhere in our app!</p><p>Head over to your <code>src/pages/index.js</code> file, first import our new hook:</p><pre><code class="language-js">import { useDestinations } from 'hooks';
</code></pre><p>And at the top of the <code>IndexPage</code> component, query our data:</p><pre><code class="language-js">const { destinations } = useDestinations();
</code></pre><p>This puts all of our locations into the <code>destinations</code> variable. We can test that this works by console logging it out:</p><pre><code class="language-js">console.log('destinations', destinations);
&lt;ul&gt;
{ destinations.map(destination =&gt; {
const { id, name } = destination;
return &lt;li key={id}&gt;{ name }&lt;/li&gt;
})}
&lt;/ul&gt;
...
ul {
list-style: none;
padding: 0;
margin: 1.2em 0;
}
</code></pre><p>Let’s also modify the <code>h2</code> to space things out a little better:</p><pre><code class="language-scss">.home-start {
...
h2 {
margin-top: 2em;
&amp;:first-child {
margin-top: 0;
}
}
{ destinations.map(destination =&gt; {
const { id, name, location } = destination;
const position = [location.latitude, location.longitude];
return &lt;Marker key={id} position={position} /&gt;
})}
&lt;/Map&gt;
</code></pre><p>Then, let’s update our <code>&lt;Marker&gt;</code> component to return:</p><pre><code class="language-jsx">return (
&lt;Marker key={id} position={position}&gt;
&lt;Popup&gt;{ name }&lt;/Popup&gt;
&lt;/Marker&gt;
);
lat: 0,
lng: 0,
};
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
