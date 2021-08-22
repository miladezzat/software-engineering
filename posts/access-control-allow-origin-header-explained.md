---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c99aa740569d1a4ca210e.jpg"
tags: [JavaScript]
description: Often times when calling an API, you may see an error in your
author: "Milad E. Fahmy"
title: "The Access-Control-Allow-Origin Header Explained – With a CORS Example"
created: "2021-08-15T19:28:57+02:00"
modified: "2021-08-15T19:28:57+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-cors ">
<header class="post-full-header">
<h1 class="post-full-title">The Access-Control-Allow-Origin Header Explained – With a CORS Example</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c99aa740569d1a4ca210e.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c99aa740569d1a4ca210e.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c99aa740569d1a4ca210e.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c99aa740569d1a4ca210e.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c99aa740569d1a4ca210e.jpg" alt="The Access-Control-Allow-Origin Header Explained – With a CORS Example">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Often times when calling an API, you may see an error in your console that looks like this:</p>
<pre><code>
Access to fetch at 'http://somesite.com' from origin 'http://yoursite.com' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value that is not equal to the supplied origin
</code></pre>
<p>In this post, we are going to learn why this error happens and how you can fix it.</p>
<h2 id="whatistheaccesscontrolalloworiginheader">What is the <code>Access-Control-Allow-Origin</code> header?</h2>
<p><code>Access-Control-Allow-Origin</code> is a CORS header. CORS, or Cross Origin Resource Sharing, is a mechanism for browsers to let a site running at origin A to request resources from origin B.</p>
<p>Origin is not just the hostname, but a combination of port, hostname and scheme, such as - <code>http://mysite.example.com:8080/</code></p>
<p>Here's an example of where this comes into action -</p>
<ol>
<li>I have an origin A: <code>http://mysite.com</code> and I want to get resources from origin B: <code>http://yoursite.com</code>.</li>
<li>To protect your security, the browser will not let me access resources from yoursite.com and will block my request.</li>
<li>In order to allow origin A to access your resources, your origin B will need to let the browser know that it is okay for me to get resources from your origin.</li>
</ol>
<p>Here is an example from Mozilla Developer Network that explains this really well:</p>
<p>With the help of CORS, browsers allow origins to share resources amongst each other.</p>
<p>There are a <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#The_HTTP_response_headers">few headers</a> that allow sharing of resources across origins, but the main one is <code>Access-Control-Allow-Origin</code>. This tells the browser what origins are allowed to receive requests from this server.</p>
<h2 id="whoneedstosetaccesscontrolalloworigin">Who needs to set <code>Access-Control-Allow-Origin</code>?</h2>
<p>To understand who needs to set this header, consider this scenario: You are browsing a website that is used to view and listen to songs. The website attempts to make a connection to your bank in the background maliciously.</p>
<p>So who has the ultimate ability to prevent this malicious website from stealing your data from the bank? The bank! So, the bank will need to protect its resources by setting the <code>Access-Control-Allow-Origin</code> header as part of the response.</p>
<p>Just remember: the origin responsible for serving resources will need to set this header.</p>
<h2 id="howtouseandwhentopassthisheader">How to use and when to pass this header</h2>
<p>Here's an example of values you can set:</p>
<ol>
<li><code>Access-Control-Allow-Origin : *</code> : Allows any origin.</li>
<li><code>Access-Control-Allow-Origin : http://mysite.com</code> : Allow requests only from mysite.com.</li>
</ol>
<h2 id="seeitinaction">See it in action</h2>
<p>Let's look at an example. You can check out this code <a href="https://github.com/shrutikapoor08/blogs/tree/master/code-examples/CORS">on my GitHub repo</a>.</p>
<p>We are going to build a server on origin A <code>http://localhost:8000</code> which will send a string of <code>Hello</code>s to an <code>api</code> endpoint. We are going to call with this endpoint by creating a client on origin B <code>http://localhost:3000</code> and then use fetch to request the resource. We expect to see the string <code>Hello</code> passed by origin A in the browser console of origin B.</p>
<p>Let's say we have an origin up on <code>http://localhost:8000</code> that serves up this resource on <code>/api</code> endpoint. The server sends a response with the header <code>Access-Control-Allow-Origin</code>.</p>
<pre><code>const express = require("express");
const app = express();
const port = process.env.SERVER_PORT || 8000;
// Add Access Control Allow Origin headers
app.use((req, res, next) =&gt; {
res.setHeader("Access-Control-Allow-Origin", "https://yoursite.com");
res.header(
"Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept"
);
next();
});
app.get("/api", (req, res) =&gt; {
res.json("Hello");
});
app.listen(port, () =&gt; console.log(`Listening on port ${port}`));
</code></pre>
<p>On the client side, you can call this endpoint by calling <code>fetch</code> like this:</p>
<pre><code>fetch('http://localhost:8000/api')
.then(res =&gt; res.json())
.then(res =&gt; console.log(res));
</code></pre>
<p>Now open your browser's console to see the result.<br>
Since the header is currently set to allow access only from <code>https://yoursite.com</code>, the browser will block access to the resource and you will see an error in your console.</p>
<p>Now, to fix this, change the headers to this:</p><pre><code> res.setHeader("Access-Control-Allow-Origin", "*");
</code></pre>
<p>Check your browser's console and now you will be able to see the string <code>Hello</code>.</p>
<h3 id="interested-in-more-tutorials-and-jsbytes-from-me-sign-up-for-my-newsletter-">Interested in more tutorials and JSBytes from me? <a>Sign up for my newsletter</a>.</h3>
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
