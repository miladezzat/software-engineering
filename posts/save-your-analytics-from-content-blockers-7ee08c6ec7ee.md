---
card: "https://cdn-media-1.freecodecamp.org/images/1*ZKUrBpg1NORp8sGn7OrIjw.jpeg"
tags: [Analytics]
description: "When your product is just getting started out, every single u"
author: "Milad E. Fahmy"
title: "How to prevent your analytics data from being blocked by ad blockers"
created: "2021-08-16T10:24:09+02:00"
modified: "2021-08-16T10:24:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-analytics tag-javascript tag-web-development tag-startup tag-big-data ">
<header class="post-full-header">
<h1 class="post-full-title">How to prevent your analytics data from being blocked by ad blockers</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*ZKUrBpg1NORp8sGn7OrIjw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*ZKUrBpg1NORp8sGn7OrIjw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*ZKUrBpg1NORp8sGn7OrIjw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*ZKUrBpg1NORp8sGn7OrIjw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*ZKUrBpg1NORp8sGn7OrIjw.jpeg" alt="How to prevent your analytics data from being blocked by ad blockers">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script',
'https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-98253329-1', 'auto');
ga('send', 'pageview');
&lt;/script&gt;</code></pre><p>In a few words, this code loads the Google Analytics JavaScript library if it wasn’t loaded before by inserting the script tag to the document. This library includes all the logic of analytics collection, and it is the only thing we need to proceed.</p><h4 id="step-1-download-and-patch-google-s-analytics-library"><strong>Step 1: Download and patch Google’s analytics library</strong></h4><p>Download the script directly from <a href="https://www.google-analytics.com/analytics.js','ga'" rel="noopener"><em>https://www.google-analytics.com/analytics.js</em></a>, open it with any text editor and replace all occurrences of:</p><pre><code>www.google-analytics.com</code></pre><p>with this exact string:</p><pre><code>"+location.host+"/analytics</code></pre><p>By patching the analytics library in this way, it will start making requests to the local host (<em>my.domain.com/analytics)</em> endpoints instead of <em>www.google-analytics.com</em>. Place this patched <em>analytics.js</em> file on your server after the replacement.</p><h4 id="step-2-replace-the-analytics-script-with-the-patched-one"><strong>Step 2: Replace the analytics script with the patched one</strong></h4><p>Let’s modify the Google Analytics embedding code in that way so it use our patched library instead of default one:</p><pre><code class="language-html">&lt;script&gt;
(function(i,s,o,r){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date()})(window,document,'script','ga');
ga('create', 'UA-98253329-1', 'auto');
ga('send', 'pageview');
&lt;/script&gt;
proxy = require("express-http-proxy"), app = express();
app.use(express.static(__dirname)); // serve static files from cwd
function getIpFromReq (req) { // get the client's IP address
var bareIP = ":" + ((req.connection.socket &amp;&amp; req.connection.socket.remoteAddress)
|| req.headers["x-forwarded-for"] || req.connection.remoteAddress || "");
return (bareIP.match(/:([^:]+)$/) || [])[1] || "127.0.0.1";
}
// proxying requests from /analytics to www.google-analytics.com.
app.use("/analytics", proxy("www.google-analytics.com", {
proxyReqPathResolver: function (req) {
return req.url + (req.url.indexOf("?") === -1 ? "?" : "&amp;")
+ "uip=" + encodeURIComponent(getIpFromReq(req));
}
}));
app.listen(1280);
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
