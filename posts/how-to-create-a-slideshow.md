---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9e44740569d1a4ca3c37.jpg"
tags: [HTML]
description: "A web slideshow is a sequence of images or text that consists"
author: "Milad E. Fahmy"
title: "How to Create a Slideshow with HTML, CSS, and JavaScript"
created: "2021-08-15T22:50:01+02:00"
modified: "2021-08-15T22:50:01+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-html tag-css tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create a Slideshow with HTML, CSS, and JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e44740569d1a4ca3c37.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e44740569d1a4ca3c37.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e44740569d1a4ca3c37.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e44740569d1a4ca3c37.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e44740569d1a4ca3c37.jpg" alt="How to Create a Slideshow with HTML, CSS, and JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>A web slideshow is a sequence of images or text that consists of showing one element of the sequence in a certain time interval.</p><p>For this tutorial you can create a slideshow by following these simple steps:</p><h3 id="write-some-markup"><strong>Write some markup</strong></h3><pre><code class="language-html">  &lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;title&gt;Slideshow&lt;/title&gt;
&lt;link rel="stylesheet" href="style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="slideshow-example" data-component="slideshow"&gt;
&lt;div role="list"&gt;
&lt;div class="slide"&gt;
&lt;img src="" alt=""&gt;
&lt;/div&gt;
&lt;div class="slide"&gt;
&lt;img src="" alt=""&gt;
&lt;/div&gt;
&lt;div class="slide"&gt;
&lt;img src="" alt=""&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;script src="slideshow.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><h2 id="write-styles-to-hide-slides-and-show-only-one-slide-">Write styles to hide slides and show only one slide.</h2><p>To hide the slides you have to give them a default style. It'll dictate that you only show one slide if it is active or if you want to show it.</p><pre><code class="language-css">  [data-component="slideshow"] .slide {
display: none;
}
[data-component="slideshow"] .slide.active {
display: block;
}</code></pre><h2 id="change-the-slides-in-a-time-interval-">Change the slides in a time interval.</h2><p>The first step to changing which slides show is to select the slide wrapper(s) and then its slides.</p><p>When you select the slides you have to go over each slide and add or remove an active class depending on the slide that you want to show. Then just repeat the process for a certain time interval.</p><p>Keep it in mind that when you remove an active class from a slide, you are hiding it because of the styles defined in the previous step. But when you add an active class to the slide, you are overwritring the style <code>display:none to display:block</code> , so the slide will show to the users.</p><pre><code class="language-js">  var slideshows = document.querySelectorAll('[data-component="slideshow"]');
// Apply to all slideshows that you define with the markup wrote
slideshows.forEach(initSlideShow);
function initSlideShow(slideshow) {
var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides
var index = 0, time = 5000;
slides[index].classList.add('active');
setInterval( () =&gt; {
slides[index].classList.remove('active');
//Go over each slide incrementing the index
index++;
// If you go over all slides, restart the index to show the first slide and start again
if (index === slides.length) index = 0;
slides[index].classList.add('active');
}, time);
}</code></pre><h4 id="codepen-example-following-this-tutorial"><strong><a href="https://codepen.io/AndresUris/pen/rGXpvE">Codepen example following this tutorial</a></strong></h4>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
