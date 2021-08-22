---
card: "https://cdn-media-1.freecodecamp.org/images/0*FWsvE-8X-T1wNDj5."
tags: [Nodejs]
description: by Pau Pavón
author: "Milad E. Fahmy"
title: "Really, really basic routing in Node.js with Express"
created: "2021-08-15T19:47:05+02:00"
modified: "2021-08-15T19:47:05+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nodejs tag-routing tag-javascript tag-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Really, really basic routing in Node.js with Express</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*FWsvE-8X-T1wNDj5. 300w,
https://cdn-media-1.freecodecamp.org/images/0*FWsvE-8X-T1wNDj5. 600w,
https://cdn-media-1.freecodecamp.org/images/0*FWsvE-8X-T1wNDj5. 1000w,
https://cdn-media-1.freecodecamp.org/images/0*FWsvE-8X-T1wNDj5. 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*FWsvE-8X-T1wNDj5." alt="Really, really basic routing in Node.js with Express">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Pau Pavón</p>
<h1 id="really-really-basic-routing-in-node-js-with-express">Really, really basic routing in Node.js with Express</h1>
<figcaption>Photo by <a href="https://unsplash.com/@clemhlrdt?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Clément H</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>The goal of this story is to briefly explain how routing works in Express while building a simple — very simple — Node app.</p>
<p>We’ll also use EJS, a template engine that “lets you generate HTML markup with plain JavaScript,” according to <a href="http://ejs.co/" rel="noopener">their website</a>. Basically, it’ll let us create HTML pages that can vary depending on the request the client makes. We won’t be using this last feature, but it’s a great one. At the end of this article, you’ll find some resources where you can learn more.</p>
<h3 id="what-is-routing-in-2-ish-lines-">What is routing? (In 2-ish lines)</h3>
<p>First of all, let’s take a quick (really quick) glance at what routing is:</p>
<blockquote>somewebsite.com/someroute</blockquote>
<p>It’s basically taking the user (or some data) from one place to another. That place is the route. I told you I was going to make it quick.</p>
<h3 id="creating-the-project">Creating the project</h3>
<p>We’re going to build a fancy website to learn how routing works in Express. Check it out:</p>
<p>Cool, right? But it’s everything we need for the moment.</p>
<p>First, let’s create the project and install the packages. Just run the following in the command line:</p>
<blockquote>npm install express</blockquote>
<blockquote>npm install ejs</blockquote>
<p>You can additionally add the <em>dash dash save</em> (I write — as “<em>dash”</em> because Medium automatically formats it, and it doesn’t look well for this purpose) to save it in your <em>package.json</em> file. But how this works is a story for another day.</p>
<p>Then we will require Express and set the view engine to EJS in our <em>app.js</em> file as follows:</p><pre><code>var express = require('express');var app = express();app.set('view engine', 'ejs');</code></pre>
<p>We’ll also include the following line so our app listens for requests:</p><pre><code>app.listen(3000);</code></pre>
<h3 id="handling-get-requests">Handling GET requests</h3>
<p>Congratulations, everything is ready to handle requests! There are several types of requests in HTTP, but we’ll only be handling GET requests, which are used to retrieve data from the server. To handle this kind of request in Express, we use the following method:</p><pre><code>app.get('/about', function(req, res) {  res.render('about');});</code></pre>
<p>Let’s take a look at what’s happening here. We’re telling our server that, whenever someone types in <em>somewebsite.com/about</em>, we want to fire a function. That function takes two parameters, <em>req</em> (request) and <em>res</em> (response). Using the response object, we render the <em>about page</em>.</p>
<p>For this to work, we’ll have to create a page named <em>about.ejs</em> in HTML. We’ll also place it in a folder called <em>views</em> inside our project folder. This is the folder where Express will look to render the view. Here you have the mega-complex about page we’ll be using for this example:</p>
<p>Nice! But, what if the user doesn’t type in any route? Just like we do most of the times, <em>somewebsite.com</em>? Well, really easy. Change<em> /about</em> to just <em>/, </em>and render whatever page you like:</p><pre><code>app.get('/', function(req, res) {  res.render('home');});</code></pre>
<h3 id="handling-non-existing-routes">Handling non-existing routes</h3>
<p>But what if someone types in a route that doesn’t exist? We probably don’t want a default error page to show up. Instead, we want a custom, cool error page.</p>
<p>Well, the good news is that it’s extremely easy to make one with Express. Just replace the route parameter in the get method with an asterisk and render your own error page like so:</p><pre><code>app.get('*', function(req, res) {  res.render('error');});</code></pre>
<h3 id="trying-it-out-">Trying it out!</h3>
<p>Finally, let’s run our server from the command line (assuming the server is named <em>app.js</em>)</p>
<blockquote>node app</blockquote>
<p>and see if it works! Let’s type in the name of our server (<em>localhost</em>, as it’s a local server running on our computer) and the port (<em>3000</em> in this case) in our browser:</p>
<blockquote>localhost:3000</blockquote>
<figcaption>localhost:3000 or localhost:3000/</figcaption>
</figure>
<figcaption>localhost:3000/about</figcaption>
</figure>
<figcaption>localhost:3000/anythingthatwehaventsetaroutefor</figcaption>
</figure>
<p>Amazing!</p>
<h3 id="further-reading">Further reading</h3>
<p>You can learn everything you need to know about routing in the <a href="http://expressjs.com/en/guide/routing.html" rel="noopener">Express guide</a>, and there’s a lot of handy things in the <a href="http://ejs.co" rel="noopener">EJS website</a> as well!</p>
<p>I hope this article was helpful for you. If it was, please leave a comment and clap it up!</p>
<p>Happy coding… <strong><em>Or happy routing, I guess!</em></strong></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
