---
card: "https://cdn-media-1.freecodecamp.org/images/1*cl_Y0G1UBK76g5vkRxOIoA.jpeg"
tags: [Google Analytics]
description: "One of the messier bits of a new app setup is trying to figur"
author: "Milad E. Fahmy"
title: "How to set up reliable and maintainable Google Analytics in Webpack"
created: "2021-08-16T11:38:57+02:00"
modified: "2021-08-16T11:38:57+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-google-analytics tag-javascript tag-web-development tag-react tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to set up reliable and maintainable Google Analytics in Webpack</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*cl_Y0G1UBK76g5vkRxOIoA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*cl_Y0G1UBK76g5vkRxOIoA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*cl_Y0G1UBK76g5vkRxOIoA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*cl_Y0G1UBK76g5vkRxOIoA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*cl_Y0G1UBK76g5vkRxOIoA.jpeg" alt="How to set up reliable and maintainable Google Analytics in Webpack">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
body { background-color: #5F4B8B; }
&lt;/style&gt;</code></pre><h4 id="configure-your-partial">Configure your partial</h4><p>Open up your <code>webpack.config.js</code> and let’s set up the partial to get included in our build.</p><p>First, require the plugin at the top of your config. In <code>webpack.config.js</code>:</p><pre><code>const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');</code></pre><p>Next, and this is very important, include a new instance of the plugin <em>AFTER</em> your instance of <code>HtmlWebpackPlugin()</code>. In the plugins section of <code>webpack.config.js</code>:</p><pre><code>...
plugins: [
new HtmlWebpackPlugin(),
new HtmlWebpackPartialsPlugin({
path: './path/to/src/partials/analytics.html'),
location: 'head',
priority: 'high'
})
&lt;script&gt;
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-XXXXXXXX-X');
&lt;/script&gt;</code></pre><p>Just make sure to update the IDs (<code>UA-XXXXXXXX-X</code>) to your match your Google Analytics property value. Your Analytics snippet may also vary depending on your setup.</p><p>You should now be able to recompile Webpack and see your page start to ping Google Analytics! ?</p><p><em>Note: you might have to load your project file from a server before GA is recognized rather than straight off of your local filesystem</em></p><h3 id="let-s-take-it-a-step-further">Let’s take it a step further</h3><p>This is great and all, but when dealing with Google Analytics, it’s nice to have a few different properties, such as one for development and one for production. This helps avoid polluting the production property with data from your development team (or you) poking around the application.</p><h4 id="setting-up-partial-variables">Setting up partial variables</h4><p>Let’s go back to our <code>webpack.config.js</code> file and set up a variable to pass our property ID in:</p><pre><code>...
plugins: [
new HtmlWebpackPlugin(),
new HtmlWebpackPartialsPlugin({
path: './path/to/src/partials/analytics.html'),
location: 'head',
priority: 'high',
options: {
ga_property_id: 'UA-XXXXXXXX-X'
}
})
...</code></pre><p>Next, update your <code>analytics.html</code> file to recognize this value. Similar to HTML Webpack Plugin, Partials uses <a href="https://lodash.com/docs/#template" rel="noopener">Lodash templating</a> to make this work. In <code>analytics.html</code>:</p><pre><code class="language-html">&lt;script async src="https://www.googletagmanager.com/gtag/js?id=&lt;%= ga_property_id %&gt;"&gt;&lt;/script&gt;
&lt;script&gt; window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '&lt;%= ga_property_id %&gt;');
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
