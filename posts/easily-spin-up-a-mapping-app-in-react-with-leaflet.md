---
card: "/images/default.jpg"
tags: [JavaScript]
description: Mapping is hard, but spinning up a new app that renders maps
author: "Milad E. Fahmy"
title: "How to build a mapping app in React the easy way with Leaflet"
created: "2021-08-15T19:32:22+02:00"
modified: "2021-08-15T19:32:22+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-reactjs tag-react tag-mapping tag-maps tag-leaflet tag-react-leaflet tag-gatsby tag-gatsbyjs ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a mapping app in React the easy way with Leaflet</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/10/mapping-with-leaflet.jpg 300w,
/news/content/images/size/w600/2019/10/mapping-with-leaflet.jpg 600w,
/news/content/images/size/w1000/2019/10/mapping-with-leaflet.jpg 1000w,
/news/content/images/size/w2000/2019/10/mapping-with-leaflet.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/10/mapping-with-leaflet.jpg" alt="How to build a mapping app in React the easy way with Leaflet">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Mapping is hard, but spinning up a new app that renders maps doesn’t have to be. Here’s how you can easily get started working with maps in a new React app.</p>
<h1 id="not-that-aaa-map-under-your-car-seat">Not that AAA map under your car seat</h1>
<p>Maps have been around for thousands of years, but they’ve become more complex and powerful within the last couple decades simply due to the fact that computers exist. This has enabled the creation of products we use every day - like Google Maps that help us get home from work and avoid traffic, or weather maps that allow us to check real time radar images. Taking that a step further, scientists use maps every day using data from satellite imagery to try to get a better understanding of our humble planet.</p>
<p>This sounds hard…</p>
<h1 id="building-maps">Building maps</h1>
<p>Plot twist, it’s not hard!</p>
<figcaption><em>Final Space — What a twist!</em></figcaption>
</figure>
<p>At least it’s not hard to get started. Thankfully, the parts that are the hardest are already built into libraries that can easily be tapped into with JavaScript.</p>
<p>Enter Leaflet…</p>
<h1 id="mapping-libraries">Mapping Libraries</h1>
<p>There are a few libraries in the mapping space right now (like<a href="https://openlayers.org/" rel="noopener"> OpenLayers</a>), but we like <a href="https://leafletjs.com/" rel="noopener">Leaflet</a>.</p>
<p>To get started with Leaflet, first include the library’s assets on your page. Next, mount the application onto a root element within the DOM with some basic settings. You can kind of think of it like how React mounts to a DOM node, but Leaflet itself doesn’t use React. Once initialized, Leaflet allows you to start utilizing it’s API to project a basemap, add layers, tiles on those layers, and even start to draw on it.</p>
<h3 id="basemap-layers-tiles">Basemap? Layers? Tiles?</h3>
<p>To get the basic gist, think of a cake. Traditionally, cakes have different layers, some on the bottom, some on the top, some might just cover one side with icing. Your map layers function similarly. The bottom layer, which is your foundation, will be your “basemap”. Below, we’re seeing a snapshot of the 2018 California Camp Fire wildfires on top of NASA’s <a href="https://terra.nasa.gov/about/terra-instruments/modis" rel="noopener">MODIS Aqua</a> satellite imagery.</p>
<figcaption><em>MODIS Aqua – California “Campfire” Wildfires</em></figcaption>
</figure>
<p>Now, to get a basemap, we need the imagery to produce it, which is where tiles come in. A tile is a single image block that makes up your group of tiles that represent your layer.</p>
<figcaption><em>MODIS Aqua single tile and URI scheme – <a href="https://gibs-a.earthdata.nasa.gov/wmts/epsg3857/best/MODIS_Aqua_CorrectedReflectance_TrueColor/default/2018-11-08/EPSG3857_250m/8/97/41.jpg">Tile Link</a></em></figcaption>
</figure>
<p>Your tiles are really just a simple image, but alongside the rest, coordinated by geographic positions and zoom levels, make up what you see when you’re looking at a web map like the basemap shown above. The goal of including these smaller individual pieces rather than 1 huge image is that between dealing with the entire globe, the different zoom levels available, and the resolutions available beyond that, we’re talking about gigabytes upon gigabytes of image assets that just wouldn’t be reliable or realistic to serve as a whole.</p>
<p>Once you’ve established your basemap, you can then overlay additional layers using more imagery, vector tiles, or datapoints that get transformed to layers. In the screenshot below, we’re zoomed in beyond the highest resolution of our basemap. Notice though the imagery on the left, is an individual overlay tile from <a href="http://blog.digitalglobe.com/news/open-data-response-for-the-california-wildfires/" rel="noopener">Digital Globe</a> that provides us with a higher resolution of part of the area surrounding the fire zone.</p>
<figcaption><em>MODIS Aqua with tile overlay from Digital Globe</em></figcaption>
</figure>
<p>Another example on top of that is adding points representing fires collected from NASA’s<a href="https://earthdata.nasa.gov/earth-observation-data/near-real-time/download-nrt-data/viirs-nrt" rel="noopener"> VIIRS</a> imagery.</p>
<figcaption><em>MODIS Aqua with VIIRS fire datapoint layer</em></figcaption>
</figure>
<p>This allows us to have the context of the basemap as well as being able to cast any type of data we’d like to better understand its effects.</p>
<p>In addition to the VIIRS data, there are many sources of imagery, vector tiles, and datasets published by governments and municipalities that you can use to help build interesting maps and data visualizations. NASA is one good source of these types of assets, but many commercial providers release <a href="https://www.digitalglobe.com/ecosystem/open-data" rel="noopener">open access to disaster datasets</a> that help others build solutions around relief efforts.</p>
<h3 id="what-s-this-about-drawing-stuff">What’s this about drawing stuff?</h3>
<p>Usually when people use maps, they want to look at points of interest. Drawing gives us the ability to frame those areas of interest with different drawing tools such as creating a rectangle using a bounding box tool or drawing a circle. These are simple shapes, but those shapes represent a geographic space that can then be used to gather data about that area.</p>
<figcaption><em>Rectangular bounding box around Alexandria, VA</em></figcaption>
</figure>
<h1 id="react-leaflet">React ❤️ Leaflet</h1>
<p>Leaflet in itself gives you a lot to work with, but there’s still a lot of manual effort that goes along with it. If you’re used to building a React app, you’re probably not as used to building an entire UI using nothing but APIs based on the browser’s window, and this is where<a href="https://react-leaflet.js.org/" rel="noopener"> React Leaflet</a> shines.</p>
<p>React Leaflet is a React library that takes the map building and bundles it into intuitive components that represents those parts of the map. Consider the above, where we talked about your basemap and layers to along with it, you might see it looking something along the lines of:</p>
<figcaption>Pseudo map component code</figcaption>
</figure>
<p>While you would probably expect that it’s not <em><em>as</em></em> flexible as utilizing the Leaflet APIs directly, this completely opens up one’s world to being able to easily spin up simple map solutions in an intuitive way without all the effort. After all, at that point, you’re spinning up a React app which you’re probably already familiar with.</p>
<h1 id="taking-it-a-bit-further-with-gatsby">Taking it a bit further with Gatsby</h1>
<p>You want it easier, you say? You want me to build the map for you, you say? Well, you’re in luck! First, let’s give a brief introduction to another tool.</p>
<p>For the unfamiliar,<a href="https://www.gatsbyjs.org/" rel="noopener"> Gatsby</a> is a javascript framework that allows developers to easily spin up full, completely working React applications in a matter of minutes. They have all the nuts and bolts in place and moved out of the way to let you do what you do best: focus on the important parts of your application.</p>
<p>The beautiful part about Gatsby is that it supports extensions of their default installation which they call <em><em>Starters</em></em>. What better way to make it easier for people to spin up maps than to create a Gatsby Starter?</p>
<h1 id="gatsby-starter-leaflet">Gatsby Starter Leaflet</h1>
<p>Combining the ease of a Gatsby Starter and the flexibility of Leaflet, we have<a href="https://github.com/colbyfayock/gatsby-starter-leaflet" rel="noopener"> Gatsby Starter Leaflet</a>. This simple tool allows you to scaffold a new React application running Leaflet along side React Leaflet in the matter of seconds (or minutes depending on your computer).</p>
<figcaption><em>Starting page for Gatsby Starter Leaflet</em></figcaption>
</figure>
<p>With<a href="https://github.com/colbyfayock/gatsby-starter-leaflet" rel="noopener"> a few basic commands</a>, including installing your dependencies, you have an app that’s ready for you to start building on top of to create maps that will save the world. Even better, it includes some out of the box integrations like <a href="https://www.openstreetmap.org/" rel="noopener">OpenStreetMap</a> and an easy to setup map service configuration to the foundational React Leaflet component APIs that allow you to easily get product and have more flexibility to create smarter Mapping apps.</p>
<h1 id="there-s-gotta-be-some-downsides-">There’s gotta be some downsides…</h1>
<p>No library or framework isn’t without its downsides. The more complicated your mapping application gets, the more pain points you run into. Here are a few from our experience that might help you settle in.</p>
<figcaption><em>Bob Kelso — Scrubs</em></figcaption>
</figure>
<h1 id="leaflet-from-the-window-to-react">Leaflet — from the Window to React</h1>
<p>Trying to manage state and the lifecycle between your Leaflet map and your React components can prove to be tricky. Trying to constantly maintain and update your component using props will immediately start to create issues between stale map state or memory leaks due to maps not properly unmounting when the component does.</p>
<p><strong><strong>Advice:</strong></strong> mount your map with React, interact with it using the native Leaflet API. Once your map is rendered and settled down, you can use Leaflet to fly your user around the world and draw on your map without running into the state issues of multiple component renders.</p>
<h1 id="limited-use-of-public-tiles">Limited Use of Public Tiles</h1>
<p>While there are a few tiling services available that allow you to easily plug in and create a basemap, not all of these are actually intended to be heavily used. Take for instance OpenStreetMap, while you may be able to play around and develop basic solutions on their public endpoint, heavy use will be throttled and potentially blocked without explicit permission from those who maintain their servers.</p>
<p><strong><strong>Advice</strong></strong>: when you’re just starting out playing around, you shouldn’t have to worry too much. Worst case the maps will be a little slow to download. As your application starts to get more traffic, you’ll want to look into <a href="https://github.com/Overv/openstreetmap-tile-server" rel="noopener">spinning up your own tiling service</a> or paying for an out of the box solution such as <a href="https://www.mapbox.com/" rel="noopener">Mapbox</a>.</p>
<h1 id="get-mapping-">Get mapping!</h1>
<p>It has never been easier to build a map-based web application. There is enough tooling, documentation, and public data available to help you get off the ground and start building maps to explore our world in the time it takes you to set up a blog or static website. So what are you waiting for?</p>
<figcaption>Go explore with Dora!</figcaption>
</figure>
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
<p><em>Originally published at <a href="https://www.element84.com/blog/mapping-with-leaflet-and-react">https://www.element84.com/blog/mapping-with-leaflet-and-react</a></em></p>
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
