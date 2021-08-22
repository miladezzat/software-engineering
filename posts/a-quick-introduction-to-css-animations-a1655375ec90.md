---
card: "https://cdn-media-1.freecodecamp.org/images/1*feAfQ6VwBLSlXlYVmUxqLQ.png"
tags: [Technology]
description: "An animation is applied to an element using the animation pro"
author: "Milad E. Fahmy"
title: "A quick introduction to CSS animations"
created: "2021-08-16T11:44:35+02:00"
modified: "2021-08-16T11:44:35+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-technology tag-education tag-web-development tag-programming tag-css ">
<header class="post-full-header">
<h1 class="post-full-title">A quick introduction to CSS animations</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*feAfQ6VwBLSlXlYVmUxqLQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*feAfQ6VwBLSlXlYVmUxqLQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*feAfQ6VwBLSlXlYVmUxqLQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*feAfQ6VwBLSlXlYVmUxqLQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*feAfQ6VwBLSlXlYVmUxqLQ.png" alt="A quick introduction to CSS animations">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<blockquote>Interested in learning CSS? Get my <a href="https://flaviocopes.com/page/css-handbook/">CSS Handbook</a> </blockquote><h4 id="introduction">Introduction</h4><p>An animation is applied to an element using the <code>animation</code> property.</p><pre><code>.container { animation: spin 10s linear infinite;}</code></pre><p><code>spin</code> is the name of the animation, which we need to define separately. We also tell CSS to make the animation last 10 seconds, perform it in a linear way (no acceleration or any difference in its speed), and to repeat it infinitely.</p><p>You must <strong>define how your animation works</strong> using <strong>keyframes</strong>. Here’s an example of an animation that rotates an item:</p><pre><code>@keyframes spin { 0% {  transform: rotateZ(0); } 100% {  transform: rotateZ(360deg); }}</code></pre><p>Inside the <code>@keyframes</code> definition you can have as many intermediate waypoints as you want.</p><p>In this case, we instruct CSS to make the transform property to rotate the Z axis from 0 to 360 grades, completing the full loop.</p><p>You can use any CSS transform here.</p><p>Notice how this does not dictate anything about the temporal interval the animation should take. This is defined when you use it via <code>animation</code>.</p><h4 id="a-css-animations-example">A CSS Animations Example</h4><p>I want to draw four circles, all with a starting point in common, all 90 degrees distant from each other.</p><pre><code>&lt;div class="container"&gt;  &lt;div class="circle one"&gt;&lt;/div&gt;  &lt;div class="circle two"&gt;&lt;/div&gt;  &lt;div class="circle three"&gt;&lt;/div&gt;  &lt;div class="circle four"&gt;&lt;/div&gt;&lt;/div&gt;</code></pre><pre><code>body {  display: grid;  place-items: center;  height: 100vh;}</code></pre><pre><code>.circle { border-radius: 50%; left: calc(50% - 6.25em); top: calc(50% - 12.5em); transform-origin: 50% 12.5em; width: 12.5em; height: 12.5em; position: absolute; box-shadow: 0 1em 2em rgba(0, 0, 0, .5);}</code></pre><pre><code>.one,.three { background: rgba(142, 92, 205, .75);}</code></pre><pre><code>.two,.four { background: rgba(236, 252, 100, .75);}</code></pre><pre><code>.one { transform: rotateZ(0);}</code></pre><pre><code>.two { transform: rotateZ(90deg);}</code></pre><pre><code>.three { transform: rotateZ(180deg);}</code></pre><pre><code>.four { transform: rotateZ(-90deg);}</code></pre><p>You can see them in this Glitch:</p><p>Let’s make this structure (all the circles together) rotate. To do this, we apply an animation on the container, and we define that animation as a 360 degrees rotation:</p><pre><code>@keyframes spin { 0% {  transform: rotateZ(0); } 100% {  transform: rotateZ(360deg); }}</code></pre><pre><code>.container { animation: spin 10s linear infinite;}</code></pre><p>See it here:</p><p>You can add more keyframes to have funnier animations:</p><pre><code>@keyframes spin { 0% {  transform: rotateZ(0); } 25% {  transform: rotateZ(30deg); } 50% {  transform: rotateZ(270deg); } 75% {  transform: rotateZ(180deg); } 100% {  transform: rotateZ(360deg); }}</code></pre><p>See the example:</p><h3 id="the-css-animation-properties">The CSS animation properties</h3><p>CSS animations offers a lot of different parameters you can tweak:</p><ul><li><strong>animation-name — </strong>the name of the animation which references an animation created using keyframes</li><li><strong>animation-duration — </strong>how long the animation should last, in seconds</li><li><strong>animation-timing-function — </strong>the timing function used by the animation (common values: linear, ease). Default: ease</li><li><strong>animation-delay — </strong>optional number of seconds to wait before starting the animation</li><li><strong>animation-iteration-count — </strong>how many times the animation should be performed. Expects a number, or infinite. Default: 1</li><li><strong>animation-direction — </strong>the direction of the animation. Can be normal, reverse, alternate or alternate-reverse. In the last 2, it alternates going forward and then backwards</li><li><strong>animation-fill-mode — </strong>defines how to style the element when the animation ends, after it finishes its iteration count number. None or backwards go back to the first keyframe styles. Forwards and both use the style that’s set in the last keyframe</li><li><strong>animation-play-state — </strong>if set to paused, it pauses the animation. Default is running.</li></ul><p>The <code>animation</code> property is a shorthand for all these properties, in this order:</p><pre><code>.container {  animation: name             duration             timing-function             delay             iteration-count             direction             fill-mode             play-state;}</code></pre><p>This is the example we used above:</p><pre><code>.container { animation: spin 10s linear infinite;}</code></pre><h3 id="javascript-events-for-css-animations">JavaScript events for CSS Animations</h3><p>Using JavaScript, you can listen for the following events:</p><ul><li><code>animationstart</code></li><li><code>animationend</code></li><li><code>animationiteration</code></li></ul><p>Be careful with <code>animationstart</code>, because if the animation starts on page load, your JavaScript code is always executed after the CSS has been processed. Then the animation will already be started and you cannot intercept the event.</p><pre><code>const container = document.querySelector('.container')container.addEventListener('animationstart', (e) =&gt; { //do something}, false)container.addEventListener('animationend', (e) =&gt; { //do something}, false)container.addEventListener('animationiteration', (e) =&gt; { //do something}, false)</code></pre><blockquote>Interested in learning CSS? Get my <a href="https://flaviocopes.com/page/css-handbook/">CSS Handbook</a> </blockquote>
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
