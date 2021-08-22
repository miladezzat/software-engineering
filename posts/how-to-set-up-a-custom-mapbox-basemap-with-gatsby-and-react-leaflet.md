---
card: "/images/default.jpg"
tags: [JavaScript]
description: Building maps can be pretty powerful, but often you’re stuck
author: "Milad E. Fahmy"
title: "How to set up a custom Mapbox basemap style with React Leaflet and Leaflet Gatsby Starter"
created: "2021-08-15T19:30:11+02:00"
modified: "2021-08-15T19:30:11+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-gatsby tag-gatsbyjs tag-create-react-app tag-reactjs tag-react-leaflet tag-leaflet tag-react tag-mapping tag-maps tag-mapbox tag-frontend tag-front-end tag-front-end-development tag-jamstack ">
<header class="post-full-header">
<h1 class="post-full-title">How to set up a custom Mapbox basemap style with React Leaflet and Leaflet Gatsby Starter</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/04/mapbox-basemap-react-leaflet-1.jpg 300w,
/news/content/images/size/w600/2020/04/mapbox-basemap-react-leaflet-1.jpg 600w,
/news/content/images/size/w1000/2020/04/mapbox-basemap-react-leaflet-1.jpg 1000w,
/news/content/images/size/w2000/2020/04/mapbox-basemap-react-leaflet-1.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/04/mapbox-basemap-react-leaflet-1.jpg" alt="How to set up a custom Mapbox basemap style with React Leaflet and Leaflet Gatsby Starter">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Building maps can be pretty powerful, but often you’re stuck with open source options for the map imagery that might not help the readability of your data. How can we leverage Mapbox’s tile APIs to add a custom basemap to our React Leaflet app?</p>
<ul>
<li><a href="#what-are-we-going-to-build">What are we going to build?</a></li>
<li><a href="#what-is-mapbox">What is Mapbox?</a></li>
<li><a href="#part-1-creating-a-custom-mapbox-style">Part 1: Creating a custom Mapbox style</a></li>
<li><a href="#part-2-adding-a-custom-tilelayer-to-react-leaflet">Part 2: Adding a custom TileLayer to React Leaflet</a></li>
<li><a href="#part-3-adding-a-custom-basemap-to-gatsby-starter-leaflet">Part 3: Adding a custom basemap to Gatsby Starter Leaflet</a></li>
<li><a href="#securing-your-mapbox-key">Securing your Mapbox key</a></li>
<li><a href="#want-to-learn-more-about-maps">Want to learn more about maps?</a></li>
</ul>
<h2 id="what-are-we-going-to-build">What are we going to build?</h2>
<p>We’re going to walk through creating a new basic <a href="https://www.mapbox.com/mapbox-studio/">Mapbox style</a> in our <a href="https://www.mapbox.com/">Mapbox</a> account. Once created, we’re going to use their <a href="https://docs.mapbox.com/api/maps/">Map API</a> to add a custom basemap to our <a href="https://react-leaflet.js.org/">React Leaflet</a> app.</p>
<figcaption>Gatsby Starter Leaflet with Mapbox basemap</figcaption>
</figure>
<p>For our map, we’re going to use this <a href="https://github.com/colbyfayock/gatsby-starter-leaflet">Leaflet Gatsby Starter</a> I created that will allow you to easily spin up a new mapping app. Before we spin that up though, I’ll walk you through how to add it using only React Leaflet components.</p>
<h2 id="a-mapping-app">A mapping app?</h2>
<p>Yup! Maps are used all around the world to study datasets for geographic locations. They're important tools for scientists and others that are trying to help the world.</p>
<figcaption>Coronavirus (COVID-19) custom map</figcaption>
</figure>
<p>If you want to learn more about building a map and adding data to it, you can check out some of <a href="/news/author/colbyfayock/">my other articles</a> first such as creating a <a href="/news/how-to-create-a-coronavirus-covid-19-dashboard-map-app-in-react-with-gatsby-and-leaflet/">Coronavirus (COVID-19) map</a> or a <a href="/news/how-to-create-a-summer-road-trip-mapping-app-with-gatsby-and-leaflet/">Summer Road Trip map</a> as well as a little bit of inspiration about why <a href="/news/anyone-can-map-inspiration-and-an-introduction-to-the-world-of-mapping/">Anyone Can Map</a>.</p>
<h2 id="what-is-mapbox">What is Mapbox?</h2>
<p>Mapbox is a mapping platform that allows its customers to create custom mapping solutions. They also leverage a variety of APIs that provide powerful capabilities for building map features.</p>
<figcaption><a href="https://www.mapbox.com/">mapbox.com</a></figcaption>
</figure>
<p>For our purposes, we’re going to utilize their Map API, specifically their Static Tiles API, to serve a custom map style that we create.</p>
<h2 id="part-1-creating-a-custom-mapbox-style">Part 1: Creating a custom Mapbox style</h2>
<p>To get the look and feel that we want for our map, it’s important to have a basemap that helps make our data present itself without distractions. Plus, sometimes it’s fun to have a custom map.</p>
<h3 id="mapbox-account">Mapbox account</h3>
<p>The first thing we’ll need to set up our custom Mapbox style is to have an account. I'm not going to walk you through that process, but you can head over to <a href="https://www.mapbox.com/">Mapbox’s website</a> where you can sign up for free: <a href="https://www.mapbox.com/">mapbox.com</a></p>
<h3 id="creating-a-new-custom-style">Creating a new custom style</h3>
<p>Creating a new style in Mapbox isn’t as hard as it sounds. While it can get really complex if you want something unique, we can copy one of Mapbox’s default styles to get started.</p>
<p>First, head over to Mapbox’s <a href="https://studio.mapbox.com/">Studio dashboard</a> by clicking your account link in the top right corner when logged in.</p>
<figcaption>Mapbox Studio</figcaption>
</figure>
<p>Once we’re on our Studio dashboard, we want to select the New Style button.</p>
<figcaption>Create a new style in Mapbox Studio</figcaption>
</figure>
<p>After clicking the button, a modal will pop up allowing you to choose a template. You can choose whatever you want here, but I’m going to choose Monochrome with a variation of Dark. And after you’ve selected your template, click the Customize button.</p>
<figcaption>Select and customize a template for a new style in Mapbox Studio</figcaption>
</figure>
<p>And now we’re dropped into our customization UI.</p>
<figcaption>Mapbox customize style UI</figcaption>
</figure>
<p>From here, you can really do what you’d like. There are a ton of options to customize your map. It’s a little complex to try to dig in here, but <a href="https://docs.mapbox.com/studio-manual/overview/">Mapbox provides some resources</a> to try to help you get productive.</p>
<h3 id="generating-a-mapbox-token">Generating a Mapbox token</h3>
<p>Once you’re happy with your new style and everything’s published, we want to generate a token that we’ll use for providing access to our Map.</p>
<p>Head on over to the Account section of the Mapbox dashboard.</p>
<figcaption>Creating a new token in Mapbox</figcaption>
</figure>
<p>Mapbox provides you with a “default” token that you can use in your applications. You're free to use this, but I recommend creating a new token that you can provide a unique name, that way if you ever blow past the <a href="https://www.mapbox.com/pricing/">free tier</a> of Mapbox, you’ll be able to track your usage.</p>
<p>Additionally, it’s best to keep a separate token for each application, that way you can easily rotate an individual key, without having to update every application using it.</p>
<p>Once you click Create a token, you can set up the key how you’d like, with the scopes and permissions you choose, but for our purposes, you can leave all of the Public scopes checked for our map, which they do by default.</p>
<figcaption>Create a new access token in Mapbox</figcaption>
</figure>
<h3 id="configuring-our-custom-endpoint">Configuring our custom endpoint</h3>
<p>For this tutorial, we’re going to use <a href="https://docs.mapbox.com/api/maps/#static-tiles">Mapbox’s Static Tiles service</a>.</p>
<figcaption>Mapbox Static Tiles Maps API</figcaption>
</figure>
<p>Our endpoint will look like the following:</p><pre><code>https://api.mapbox.com/styles/v1/{username}/{style_id}/tiles/256/{z}/{x}/{y}@2x?access_token={access_token}
</code></pre>
<p>There are a few parameters here we need to understand:</p>
<ul>
<li>username: this will be your Mapbox account’s username</li>
<li>style_id: this will be the ID of the style you created before</li>
<li>z, x, y: these are parameters that Leaflet programmatically swaps out, so we want to leave them as is</li>
<li>access_token: this is the Mapbox key you created above</li>
</ul>
<p>To find your username and style ID, we can use the Style URL for our new Mapbox style to get those values.</p>
<figcaption>Finding the Style URL in Mapbox Studio</figcaption>
</figure>
<p>In my example, my Style URL looks like:</p><pre><code>mapbox://styles/colbyfayock/ck8lryjfq0jdo1ip9ctmuhc6p
</code></pre>
<p><code>colbyfayock</code> is my username and <code>ck8lryjfq0jdo1ip9ctmuhc6p</code> is my style ID.</p>
<p>And once I update my endpoint parameters, the final tilepoint URL will look like:</p><pre><code>https://api.mapbox.com/styles/v1/colbyfayock/ck8lryjfq0jdo1ip9ctmuhc6p/tiles/256/{z}/{x}/{y}@2x?access_token=MYACCESSTOKEN
</code></pre>
<h2 id="part-2-adding-a-custom-tilelayer-to-react-leaflet">Part 2: Adding a custom TileLayer to React Leaflet</h2>
<p>When building a map with React Leaflet, your main component will be a <code>&lt;Map&gt;</code> that wraps the entirety of the app. This is what sets up your <a href="https://leafletjs.com/reference-1.6.0.html#map-example">Map instance</a> for <a href="https://leafletjs.com/">Leaflet</a>.</p>
<p>For our purposes here, we’re going to use the example on the <a href="https://react-leaflet.js.org/">React Leaflet homepage</a> as our starting point.</p>
<h3 id="react-leaflet-tilelayer-component">React Leaflet TileLayer Component</h3>
<p>Inside of your <code>&lt;Map&gt;</code> component you include a <code>&lt;TileLayer&gt;</code> component, which defines the imagery of the world that you base your map upon.</p>
<p>The example on the React Leaflet homepage uses a public version of <a href="https://www.openstreetmap.org/">OpenStreetMap</a> as their TileLayer, which is an open source map project created and updated by people all around the world.</p><pre><code class="language-react">&lt;Map center={position} zoom={13}&gt;
&lt;TileLayer
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
attribution="&amp;copy; &lt;a href=&amp;quot;http://osm.org/copyright&amp;quot;&gt;OpenStreetMap&lt;/a&gt; contributors"
/&gt;
&lt;/Map&gt;
</code></pre>
<p>This gives you a basic map, but we want to swap in Mapbox so we can set up a custom look and feel for our map.</p>
<h3 id="custom-mapbox-tilelayer">Custom Mapbox TileLayer</h3>
<p>To add our custom style, we’ll want to update the <code>url</code> and <code>attribution</code> props of the <code>TileLayer</code> component.</p>
<p>For URL, it will simply be the custom style endpoint we created earlier, so in my example, it looks like:</p><pre><code>https://api.mapbox.com/styles/v1/colbyfayock/ck8lryjfq0jdo1ip9ctmuhc6p/tiles/256/{z}/{x}/{y}@2x?access_token=MYACCESSTOKEN
</code></pre>
<p>For attribution, we want to credit Mapbox as the service, so we want to set our attribution as:</p><pre><code>Map data &amp;copy; &lt;a href=&amp;quot;https://www.openstreetmap.org/&amp;quot;&gt;OpenStreetMap&lt;/a&gt; contributors, &lt;a href=&amp;quot;https://creativecommons.org/licenses/by-sa/2.0/&amp;quot;&gt;CC-BY-SA&lt;/a&gt;, Imagery &amp;copy; &lt;a href=&amp;quot;https://www.mapbox.com/&amp;quot;&gt;Mapbox&lt;/a&gt;
</code></pre>
<p>When plugged in to our <code>TileLayer</code>, our code should now look like this:</p><pre><code class="language-react">&lt;Map center={position} zoom={13}&gt;
&lt;TileLayer
url="https://api.mapbox.com/styles/v1/colbyfayock/ck8lryjfq0jdo1ip9ctmuhc6p/tiles/256/{z}/{x}/{y}@2x?access_token=MYACCESSTOKEN"
attribution="Map data &amp;copy; &lt;a href=&amp;quot;https://www.openstreetmap.org/&amp;quot;&gt;OpenStreetMap&lt;/a&gt; contributors, &lt;a href=&amp;quot;https://creativecommons.org/licenses/by-sa/2.0/&amp;quot;&gt;CC-BY-SA&lt;/a&gt;, Imagery &amp;copy; &lt;a href=&amp;quot;https://www.mapbox.com/&amp;quot;&gt;Mapbox&lt;/a&gt;"
/&gt;
&lt;/Map&gt;
</code></pre>
<p>And once we open up our map, we should see our new basemap!</p>
<figcaption>React Leaflet with a Mapbox basemap</figcaption>
</figure>
<h3 id="see-the-code-">See the code!</h3>
<p>If you want to see how I did it, <a href="https://github.com/colbyfayock/my-mapbox-react-leaflet/commits/master">check out the diff commit by commit</a>.</p>
<p>The only caveat there is I created an <code>.env.development.local</code> file in the root of my project in which I stored a new environment variable called <code>REACT_APP_MAPBOX_KEY</code> &nbsp;to store my Mapbox key.</p>
<h2 id="part-3-adding-a-custom-basemap-to-gatsby-starter-leaflet">Part 3: Adding a custom basemap to Gatsby Starter Leaflet</h2>
<p>I’ve written <a href="https://www.colbyfayock.com/2020/03/how-to-create-a-coronavirus-covid-19-dashboard-map-app-with-gatsby-and-leaflet">a few</a> <a href="https://www.colbyfayock.com/2020/03/how-to-create-a-summer-road-trip-mapping-app-with-gatsby-and-leaflet">other</a> <a href="https://www.colbyfayock.com/2020/03/anyone-can-map-inspiration-and-an-introduction-to-the-world-of-mapping/">articles</a> on <a href="/news/easily-spin-up-a-mapping-app-in-react-with-leaflet/">how to get started</a> with my <a href="https://github.com/colbyfayock/gatsby-starter-leaflet">Leaflet Gatsby Starter</a>, but for this part, we’ll want to have a basic app spun up that we can use to change our <code>TileLayer</code> endpoint.</p>
<h3 id="setting-up-our-react-leaflet-gatsby-app">Setting up our React Leaflet Gatsby app</h3>
<p>To get started, check out the instructions on the Starter github:</p>
<p><a href="https://github.com/colbyfayock/gatsby-starter-leaflet">https://github.com/colbyfayock/gatsby-starter-leaflet</a></p>
<p>Once you’re ready, you should have a basic mapping app ready to go!</p>
<figcaption>New Leaflet Gatsby app in the browser</figcaption>
</figure>
<h3 id="configuring-our-mapbox-service">Configuring our Mapbox service</h3>
<p>The first thing we’ll want to do is add Mapbox as a service in our <code>src/data/map-services.js</code> file.</p>
<p>Taking our custom endpoint URL that we created in Part 1, let’s set up a new object with a name of Mapbox, and with a url and attribution similar to what we did in Part 2.</p><pre><code class="language-js">export const mapServices = [
{
name: ‘OpenStreetMap’,
attribution: '&amp;copy; &lt;a href="http://osm.org/copyright”&gt;OpenStreetMap&lt;/a&gt; contributors’,
url: ‘https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png’
},
{
name: ‘Mapbox’,
attribution: ‘Map data &amp;copy; &lt;a href=&amp;quot;https://www.openstreetmap.org/&amp;quot;&gt;OpenStreetMap&lt;/a&gt; contributors, &lt;a href=&amp;quot;https://creativecommons.org/licenses/by-sa/2.0/&amp;quot;&gt;CC-BY-SA&lt;/a&gt;, Imagery &amp;copy; &lt;a href=&amp;quot;https://www.mapbox.com/&amp;quot;&gt;Mapbox&lt;/a&gt;’,
url: `https://api.mapbox.com/styles/v1/colbyfayock/ck8c2foj72lqk1jnug0g2haw0/tiles/256/{z}/{x}/{y}@2x?access_token=MY_ACCESS_TOKEN`
}
];
</code></pre>
<h3 id="using-our-mapbox-map-service">Using our Mapbox map service</h3>
<p>Once you have your Mapbox service set up, all that’s left is to open up the <code>src/pages/index.js</code> file, find the <code>mapSettings</code> object definition, and update the <code>defaultBaseMap</code> property to <code>Mapbox</code>.</p><pre><code class="language-js">const mapSettings = {
center: CENTER,
defaultBaseMap: ‘Mapbox’,
zoom: DEFAULT_ZOOM,
mapEffect
};
</code></pre>
<p>Save that change, refresh the map in your browser, and you should now see your custom basemap style!</p>
<figcaption>Gatsby Starter Leaflet with custom Mapbox basemap in browser</figcaption>
</figure>
<h3 id="see-the-code--1">See the code!</h3>
<p>If you want to see how I did it, <a href="https://github.com/colbyfayock/my-mapbox-gatsby-starter-leaflet/commit/9baa1b7003504dec5c938328ea9b54477f65ec58">check out the diff with the commit</a>.</p>
<p>The only caveat there is I created an <code>.env.development</code> file in the root of my project in which I stored a new environment variable called <code>GATSBY_MAPBOX_KEY</code> &nbsp;to store my Mapbox key.</p>
<h2 id="securing-your-mapbox-key">Securing your Mapbox key</h2>
<h3 id="environment-variables">Environment variables</h3>
<p>Part of most development processes that use individual keys will generally set the keys up as environment variables. Environment variables are configured settings that don’t live in the code itself.</p>
<p>This is important because it prevents your key from being checked in to your code, which is bad from a security perspective, but it also allows you to provide a different key for different environments.</p>
<p>When generating your keys, try to keep this in mind, as it can save you in the long run.</p>
<h3 id="locking-down-your-mapbox-key">Locking down your Mapbox key</h3>
<p>In your settings when creating a token or when editing a token, Mapbox allows you to specify only the URLs you want your key to be accessible from.</p>
<p>Though Mapbox has a generous free tier, you probably want to keep it locked down only to the URLs that you’re using it on. You can create multiple keys, where one could be for public use on your website and one would be for your local development.</p>
<p>This is helpful for instance, where you have a key that will never be used publicly for development purposes, but then you have a key that you deploy with, which can be locked down only to that URL.</p>
<p>If someone grabs your key, they could plug it into their own website and use up all of your free tier, potentially running up your bill!</p>
<h2 id="want-to-learn-more-about-maps">Want to learn more about maps?</h2>
<p>You can check out a few of my other resources to get started:</p>
<ul>
<li><a href="https://www.colbyfayock.com/2020/03/how-to-create-a-coronavirus-covid-19-dashboard-map-app-with-gatsby-and-leaflet">How to create a Coronavirus (COVID-19) Dashboard &amp; Map App in React with Gatsby and Leaflet</a></li>
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
