---
card: "https://cdn-media-1.freecodecamp.org/images/1*BqQhKwkKqIBn_lL-pmYHNg.png"
tags: [JavaScript]
description: by Ben Gubler
author: "Milad E. Fahmy"
title: "How to generate ReadMe badges with Express"
created: "2021-08-15T19:39:44+02:00"
modified: "2021-08-15T19:39:44+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-software-development tag-expressjs tag-tech tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">How to generate ReadMe badges with Express</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*BqQhKwkKqIBn_lL-pmYHNg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*BqQhKwkKqIBn_lL-pmYHNg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*BqQhKwkKqIBn_lL-pmYHNg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*BqQhKwkKqIBn_lL-pmYHNg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*BqQhKwkKqIBn_lL-pmYHNg.png" alt="How to generate ReadMe badges with Express">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Ben Gubler</p>
<h1 id="how-to-generate-readme-badges-with-express">How to generate ReadMe badges with Express</h1>
<figcaption>The kind of badge you’ll be able to generate (enlarged)</figcaption>
</figure>
<p>I first came across this idea on <a href="https://odino.org/generating-badges-slash-shields-with-nodejs/" rel="noopener">this</a> website. Since the tutorial there is a few years old, I wrote a new tutorial with updated code.</p>
<p><em>If you’re in a hurry, you can find the completed code <a href="https://github.com/nebrelbug/badge-generator" rel="noopener">here</a>.</em></p>
<p>We all know about them or use them — the shiny badges at the top of nearly every ReadMe that say things like “<strong>build: passing</strong>”, or “<strong>size: 10KB</strong>”. This guide will teach you how to generate your own badges, with nothing but Node.js, ExpressJS, and Squirrelly.</p>
<h3 id="now-for-the-tutorial">Now for the tutorial</h3>
<h4 id="prerequisites">Prerequisites</h4>
<p>This tutorial assumes you have Node.js and npm (or yarn) already installed. If you don’t, go to the Node site <a href="https://nodejs.org/en/" rel="noopener">here</a> (it installs with npm by default).</p>
<h4 id="setup">Setup</h4>
<p>First, create a new directory and <code>cd</code> into it:</p><pre><code>mkdir badge-generator &amp;&amp; cd badge-generator</code></pre>
<p>Next, install the necessary dependencies, <a href="https://expressjs.com/" rel="noopener">Express</a> and <a href="https://squirrelly.js.org/" rel="noopener">Squirrelly</a>.</p>
<p>With npm:</p><pre><code>npm install express squirrelly</code></pre>
<p>Or for those who use yarn:</p><pre><code>yarn add express squirrelly</code></pre>
<h4 id="creating-the-server">Creating the server</h4>
<p>We’ll only need two files for our program, <strong>index.js</strong> and <strong>template.svg </strong>(which we’ll create next).</p>
<p>Create a file named <strong>index.js </strong>and paste the following code:</p>
<p>This opens a server on port 8080, and listens to requests. By the end of this tutorial, you’ll be able to make a request to <a href="http://localhost:8080/left-text/right-text/color" rel="noopener"><strong>http://localhost:8080/left-text/right-text/color</strong></a> and have an awesome-looking SVG badge returned! Yay! But what’s the part of the code with <code>Sqrl</code> about?</p><pre><code>var badge = Sqrl.renderFile(path.join(__dirname, 'template.svg'), req.params)</code></pre>
<p>This is where Squirrelly comes in. We want to serve an SVG image file, but the content (width, length, and text) of the image will be different each time. Squirrelly is a <strong>template engine</strong>, a program that takes a file or string called a template and inserts the data. It also does some other fancy stuff, like handling caching, but we won’t need to worry about that.</p>
<p>The code above reads the file named <code>template.svg</code> , then uses <code>req.params</code> (an object that contains the paths) to fill the template. In this case, <code>req.params</code> will look like:</p><pre><code>{  left: "first-part-of-the-url-path",  right: "second-part-of-the-url-path",  color: "third-part"}</code></pre>
<h4 id="creating-a-template">Creating a template</h4>
<p>Create a new file called <code>template.svg</code>, and paste the following code:</p>
<p>You can read the full Squirrelly docs <a href="https://squirrelly.js.org/" rel="noopener">here</a>, but essentially, anything between double brackets: <code>{{</code> and <code>}}</code> will be replaced by its actual value.</p>
<p>But wait: we only passed in <code>left</code> , <code>right</code> , and <code>color</code> — where did we get <code>leftWidth</code> and <code>rightWidth</code> from? That’s what the code below (at the top of the template) does; using the <code>js</code> helper (which lets you write JS inside of a template), it defines a new variable, called <code>leftWidth</code> .</p><pre><code>{{js(options.leftWidth = options.left.length * 10)/}}</code></pre>
<p>There’s one more thing to do. Notice that line 18 looks like this:</p><pre><code>&lt;rect ...stuff... fill="{{returnColor(options.color)/}}"/&gt;</code></pre>
<p>With SVG images, the fill attribute must either contain one of a few predefined colors that don’t look that great, or an <a href="https://en.wikipedia.org/wiki/RGB_color_model" rel="noopener">RGB</a> or hex color. We want to use hex codes, but there’s a catch: you’ll notice that if you enter <a href="http://localhost:8080/ben/gubler/#fff" rel="noopener"><strong>http://localhost:8080/some/text/#fff</strong></a> into a browser, it thinks the hex code at the end is the hash at the end of the url, and Express doesn’t recognize it.</p>
<p>What we’re going to do is create a helper (called <code>returnColor</code>) that will translate color words, like ‘brightgreen’, ‘green’, and ‘red’, into hex color codes. Paste the following anywhere into index.js:</p>
<h4 id="see-if-it-works">See if it works</h4>
<p>Type <code>node index.js</code> into your terminal, then go to <a href="http://localhost:8080/test/badge/brightgreen" rel="noopener">http://localhost:8080/test/badge/brightgreen</a>. If all went well, you should see a badge!</p>
<p>If anything throws an error, compare your code to the working code <a href="https://github.com/nebrelbug/badge-generator" rel="noopener">here</a>.</p>
<p>You can find more information about Squirrelly below.</p>
<p><a href="https://squirrelly.js.org/" rel="noopener"><strong>Squirrelly Documentation</strong></a><br><a href="https://squirrelly.js.org/" rel="noopener"><em>Squirrelly is only 2KB gzipped, has 0 dependencies, and is blazing fast.</em>squirrelly.js.org</a></p>
<p>Thanks for reading this guide. I hope it was helpful!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
