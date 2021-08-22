---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9df4740569d1a4ca3a97.jpg"
tags: [JavaScript]
description: There may be times where your JavaScript application needs to
author: "Milad E. Fahmy"
title: "How to Get Screen Size in Pixels"
created: "2021-08-15T19:31:25+02:00"
modified: "2021-08-15T19:31:25+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Get Screen Size in Pixels</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9df4740569d1a4ca3a97.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9df4740569d1a4ca3a97.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9df4740569d1a4ca3a97.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9df4740569d1a4ca3a97.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9df4740569d1a4ca3a97.jpg" alt="How to Get Screen Size in Pixels">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>There may be times where your JavaScript application needs to know what the size screen needs to be able to perform certain actions.</p>
<p>Luckily for us, there are built in JavaScript functions that can easily grab different dimensions of the screen on the user’s device in pixels. Which you use is dependent on what you’d like to do.</p>
<h2 id="get-user-s-resolution"><strong>Get User’s Resolution</strong></h2>
<p>You might wish to do something involving the user’s device resolution. In this case, you should use the built-in <code>screen.width</code> and <code>screen.height</code> properties. These give you the size of the screen you’re dealing with. </p>
<p><strong><strong>This is not the area you have to work with on the page</strong>.<strong> </strong>T<strong>hese values represent the entirety of the screen</strong>, that is<strong> the user’s display resolution.</strong></strong></p>
<h2 id="get-browser-size"><strong>Get Browser Size</strong></h2>
<p>There might be an interesting application for dealing with the browser’s current size. If you need to access these dimensions, use the <code>screen.availWidth</code> and <code>screen.availHeight</code> properties to do so. </p>
<p>Remember, these are the dimensions of the entire browser window, from the top of the browser window down to where the browser meets a taskbar or the edge of your desktop, depending on your setup.</p>
<p><strong><strong>An interesting note</strong></strong>: <code>screen.availHeight</code> can also be used to figure out how tall a taskbar is on a computer. If your browser resolution is say <code>1366 x 768</code>, and <code>screen.availHeight</code> reports 728 pixels, then your taskbar is 40 pixels high. You can also calculate taskbar height by subtracting <code>screen.height</code> and <code>screen.availHeight</code>:</p><pre><code class="language-text">var taskbarHeight = parseInt(screen.height,10) - parseInt(screen.availHeight,10) + " pixels";
/*
For a user that has a screen resolution of 1366 x 768 pixels, their taskbar is likely 40 pixels if using Windows 10 with no added accessibility features.
*/</code></pre>
<h2 id="get-viewing-window-size"><strong>Get Viewing Window Size</strong></h2>
<p>These properties are interesting and can be used to create some nifty effects. You can use <code>window.innerHeight</code> and <code>window.innerWidth</code> to get the size of the window for the web page as the user sees it. </p>
<p>Keep in mind – these values are not static and will change depending upon what is happening with the browser itself. In other words, if the browser itself is small, these values will be smaller, and if the browser is maximized, they’ll be larger.</p>
<p>If, for example, you are working in Google Chrome and you open the console (must be docked to a side of the window), <code>window.innerHeight</code> will change to reflect the height of the console because part of the window will be blocked. </p>
<p>You can test this out by calling <code>window.innerHeight</code>, taking note of the value, then increasing the size of the console, then calling <code>window.innerHeight</code> again.</p>
<p>These properties will also change if your browser is maximized or resized in any way. At a browser’s maximum size, the property <code>window.innerWidth</code> is the same as both <code>screen.width</code> and <code>screen.availWidth</code> (unless there is a taskbar on the side, in which case <code>screen.availWidth</code> will not be equal). <code>window.innerHeight</code> is equal to the amount of area in the window of the page itself (the area of the web page).</p>
<h2 id="get-height-and-width-of-web-page"><strong>Get Height and Width of Web Page</strong></h2>
<p>If you need to see how tall or wide your web page actually is, there are properties to grab these dimensions: <code>document.body.offsetWidth</code> and <code>document.body.offsetHeight</code>. </p>
<p>These properties represent the size of the content in the body of the page itself. A page with no content has a <code>document.body.offsetHeight</code> of close to the same value as <code>window.innerHeight</code> depending on what margins/padding are set on the body of the document. If margins and padding are set to <code>0</code> on the html root element and the body of the document, then <code>document.body.offsetHeight</code> and <code>window.innerHeight</code> will be equal with no content.</p>
<p>These properties can be used to interact with your page/application depending on what you want to do.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
