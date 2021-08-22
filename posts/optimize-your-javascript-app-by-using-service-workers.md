---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca08e740569d1a4ca4963.jpg"
tags: [JavaScript]
description: Every now and then we hear about optimizing something. There
author: "Milad E. Fahmy"
title: "How to optimize your JavaScript app by using service workers"
created: "2021-08-15T19:32:53+02:00"
modified: "2021-08-15T19:32:53+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-optimization ">
<header class="post-full-header">
<h1 class="post-full-title">How to optimize your JavaScript app by using service&nbsp;workers</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca08e740569d1a4ca4963.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca08e740569d1a4ca4963.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca08e740569d1a4ca4963.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca08e740569d1a4ca4963.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca08e740569d1a4ca4963.jpg" alt="How to optimize your JavaScript app by using service&nbsp;workers">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Every now and then we hear about optimizing something. There are different kinds of optimizations we can do to make our apps faster and more efficient, or to save time or memory. This article will cover one of those methods — s<em>ervice </em>w<em>orkers.</em></p>
<h3 id="tl-dr">TL;DR</h3>
<p>This tutorial explains what a <em>service worker</em> is and how to use it, in JavaScript. There is a code example at the end of it. If you want to skip the reading, <a href="https://github.com/mihailgaberov/learn-service-workers" rel="noopener">here</a> is the Git repo and <a href="https://compassionate-brahmagupta-71d9b4.netlify.com/" rel="noopener">here</a> you may see a live demo.</p>
<h3 id="the-theory">The Theory</h3>
<p>Let’s see first what a w<em>orker </em>is this ? and what s<em>ervice </em>can we use it for ?.</p>
<p>The<em> service worker</em> is a <a href="https://developers.google.com/web/fundamentals/primers/service-workers/" rel="noopener">simple script</a>. It's JavaScript code, that your browser runs in the background, separate from a web page. </p>
<p>It’s very convenient to use service workers for features that don’t need a web page or user interaction. One of the most common uses is intercepting and handling network requests. This includes managing a cache of responses. </p>
<p>The following is a simple example of how to include a service worker in your application.</p>
<p>Usually, in the entry point of your app, you add this code:</p><pre><code class="language-js">if ('serviceWorker' in navigator) {
window.addEventListener('load', function() {
navigator.serviceWorker.register('/service-worker.js');
});
}</code></pre>
<p>This way of using service workers is a little bit improved than the basic one. The basic method involves directly calling the <em>register</em>() method inside the <em>if statement. </em>In this case, we use the window load event to register the service worker after the page has finished loading. After doing this, you need to add your service worker code in the <em>service-worker.js</em> file. At this point, you might want to take a look at my service worker file.</p>
<p><em>All major browsers support Service Workers now, and you can start using them right away.</em></p>
<h3 id="the-example">The Example</h3>
<p>Enough theory, let’s build a real example app that will leverage the service workers feature.</p>
<p>Let’s imagine we are building an app that needs to load a big chunk of data. It could be, for example, a nice, big full-screen image we display on the front page. Or it could be a big video clip we have to wait to load. This is an ideal use case for a service worker to shine. Let’s see how. ?</p>
<p>In our specific case, we will use the clock time to show the benefit of using service workers. What I mean is, that we will build a simple app, showing the time. It will have a nice, big button for fetching a nice, big image. And it will provide the user with an option to choose <strong>to use or not </strong>a service worker.</p>
<p>Here is a screenshot of how it looks:</p>
<p>What this app demonstrates is, that when fetching the image (by clicking the button, wow!) with an active service worker — we don’t get blocked UI (user interface, i.e. fields, buttons, ?). If you choose not to use the service worker, you will get a frozen UI for a certain period of time. When the work completes and the main thread frees itself, it will unfreeze the UI.</p>
<p>If you don’t want to clone and run the code yourself, jump straight to the <a href="https://compassionate-brahmagupta-71d9b4.netlify.com/" rel="noopener">live demo</a>.</p>
<h3 id="conclusion">Conclusion</h3>
<p>This demo of service workers in action shows us the advantage we get from using them. Especially when you are trying to build responsive and robust JavaScript applications. No user wants to end up in a frozen page for an unknown time, as no developer should want that for his application’s users. Keeping in mind the above, service workers are a *must* now. And we should not neglect them.</p>
<p>? Thanks for reading! ?</p>
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
