---
card: "https://cdn-media-1.freecodecamp.org/images/1*aVzJTznRRfP1lM7AXe9yLw.jpeg"
tags: [CSS]
description: "As a web developer, there is a high probability that you have"
author: "Milad E. Fahmy"
title: "Time-saving CSS techniques to create responsive images"
created: "2021-08-15T23:47:29+02:00"
modified: "2021-08-15T23:47:29+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-coding tag-responsive-design tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Time-saving CSS techniques to create responsive images</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*aVzJTznRRfP1lM7AXe9yLw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*aVzJTznRRfP1lM7AXe9yLw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*aVzJTznRRfP1lM7AXe9yLw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*aVzJTznRRfP1lM7AXe9yLw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*aVzJTznRRfP1lM7AXe9yLw.jpeg" alt="Time-saving CSS techniques to create responsive images">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>As a web developer, there is a high probability that you have encountered the two enemies of this article: <strong>images</strong> and <strong>deadlines</strong>. Sometimes, for some reasons, your images won’t fit the layout and you don’t want to wrap your head around this for hours.</p><p>This situation has happened to me many times and I have learned from my mistakes. No more black magic hacks — here are my five favorites techniques to handle image resizing.</p><h3 id="the-omg-i-need-this-asap-way">the “OMG I NEED THIS ASAP” way</h3><p>It’s 5:00 pm on Friday, you have to finish this page, but the images won’t fit the layout. It’s time to use your magic trick!</p><pre><code class="language-css">.myImg {
background-image: url("my-image.png");
background-size: cover;
}</code></pre><p>Sounds familiar? We’ve all done it once, doesn’t it feel like cheating to you?</p><p>Using <code>background</code> properties is very useful, they just work. Yet, remember that you should use them only for non-content images or as a replacement of text and in <a href="https://stackoverflow.com/a/1469139" rel="noopener">some particular cases</a>.</p><h3 id="the-way-from-the-future">The way from the future</h3><p>What if I told you this kind of magic exists also for <code>&lt;img&gt;</code> elements? Say “hi” to the object-fit property — which also works for videos, by the way!</p><pre><code class="language-css">.myImg {
object-fit: cover;
width: 320px;
height: 180px;
position: relative;
padding-top: 56.25%; /* 16:9 Aspect Ratio */
}
img {
position: absolute;
left: 0;
top: 0;
width: 100%;
height: auto;
height: auto;
width: 100%;
/* even more control with max-width */
max-width: 720px;
&lt;source media="(max-width: 799px)" srcset="elva-480w.jpg"&gt;
&lt;source media="(min-width: 800px)" srcset="elva-800w.jpg"&gt;
&lt;img src="elva-800w.jpg"&gt;
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
