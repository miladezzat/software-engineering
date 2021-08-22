---
card: "https://cdn-media-1.freecodecamp.org/images/1*cHZLhJhJgiRK48Dzhem5-w.jpeg"
tags: [CSS]
description: "Many frontend developers begin styling their websites with No"
author: "Milad E. Fahmy"
title: "How I style my websites with my favorite CSS resets"
created: "2021-08-16T10:07:19+02:00"
modified: "2021-08-16T10:07:19+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-web-development tag-tech tag-programming tag-design ">
<header class="post-full-header">
<h1 class="post-full-title">How I style my websites with my favorite CSS resets</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*cHZLhJhJgiRK48Dzhem5-w.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*cHZLhJhJgiRK48Dzhem5-w.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*cHZLhJhJgiRK48Dzhem5-w.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*cHZLhJhJgiRK48Dzhem5-w.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*cHZLhJhJgiRK48Dzhem5-w.jpeg" alt="How I style my websites with my favorite CSS resets">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Many frontend developers begin styling their websites with Normalize. Some developers have personal preferences that they add on to Normalize.css. I have my preferences, too.</p><p>In this article, I want to share these preferences with you, my personal CSS reset (that I use in addition to Normalize.css).</p><p>I categorize the resets into 8 categories:</p><p>1. Box sizing</p><p>2. Removing margins and paddings</p><p>3. Lists</p><p>4. Forms and buttons</p><p>5. Images and embeds</p><p>6. Tables</p><p>7. The hidden attribute</p><p>8. Noscript</p><h1 id="box-sizing">Box Sizing</h1><p>The <code>box-sizing</code> property changes how the CSS Box model works. It changes how <code>width</code>, <code>height</code>, <code>padding</code>, <code>border</code>, and <code>margin</code> properties are calculated.</p><p>The default setting for <code>box-sizing</code> is <code>content-box</code>. I prefer changing this to <code>border-box</code> because it’s easier for me to style <code>padding</code> and <code>width</code>.</p><p>For more info on Box Sizing, you might be interested in “<a href="https://zellwk.com/blog/understanding-css-box-sizing/">Understanding Box sizing</a>”.</p><pre><code class="language-css">html {
box-sizing: border-box;
}
*,
*::before,
*::after {
box-sizing: inherit;
}</code></pre><h1 id="removing-margins-and-paddings">Removing margins and paddings</h1><p>Browsers set different margins and paddings for different elements. These default settings throw me off when I’m not aware. When I code, I prefer to set all margins and paddings myself.</p><pre><code class="language-css">/* Reset margins and paddings on most elements */
body,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
li,
p,
pre,
blockquote,
figure,
hr {
margin: 0;
padding: 0;
}</code></pre><h1 id="lists">Lists</h1><p>I use unordered lists in many situations, and I don’t need a <code>disc</code> style in most of them. Here, I set <code>list-style</code> to none. When I need the <code>disc</code>style, I set it back manually on the specific <code>&lt;ul&gt;</code>.</p><pre><code class="language-css">/* Removes discs from ul */
ul {
list-style: none;
}</code></pre><h1 id="forms-and-buttons">Forms and buttons</h1><p>Browsers don’t inherit typography for forms and buttons. They set <code>font</code> to <code>400 11px system-ui</code>. I find this mind-boggling and weird. I always have to make them inherit from ancestor elements manually.</p><pre><code class="language-css">input,
textarea,
select,
button {
color: inherit;
font: inherit;
letter-spacing: inherit;
}</code></pre><p>Different browsers have styled the borders for forms elements and buttons differently. I dislike these default styles, and would prefer to set them to <code>1px solid gray</code>.</p><pre><code class="language-css">button {
border-radius: 0;
padding: 0.75em 1em;
background-color: transparent;
}</code></pre><p>I made a few more adjustments to buttons:</p><ol><li>Set button padding to <code>0.75em</code> and <code>1em</code> because they seem like sensible defaults from my experience.</li><li>Removed the default <code>border-radius</code> that’s applied to buttons.</li><li>Forced background color to be transparentbutton { &nbsp; border-radius: 0; &nbsp; &nbsp;padding: 0.75em 1em; &nbsp; background-color: transparent; }</li></ol><p>Finally, I set <code>pointer-events: none</code> to elements within a button. This is mainly used for JavaScript interaction.</p><p>(When users click on something in a button, <code>event.target</code> is the thing they clicked on, not the button. This style makes it easier to work with <code>click</code> events if there are HTML elements inside a button).</p><pre><code class="language-css">css button * {   pointer-events: none; }</code></pre><p>Media elements include images, videos, objects, iframes, and embed. I tend to let these elements conform to the width of their containers.</p><p>I also set these elements to <code>display: block</code> because <code>inline-block</code>creates unwanted whitespace at the bottom of the element.</p><pre><code class="language-css">embed,
iframe,
img,
object,
video {
display: block;
max-width: 100%;
}</code></pre><h1 id="tables">Tables</h1><p>I rarely use tables, but they may be useful sometimes. Here’s the default styles I’ll begin with:</p><pre><code class="language-css">table {
table-layout: fixed;
width: 100%;
}</code></pre><p>When an element has a <code>hidden</code> attribute, they should be hidden from view. Normalize.css does this for us already.</p><pre><code class="language-css">[hidden] {
display: none;
}</code></pre><p>The problem with this style is its low specificity.</p><p>I often add <code>hidden</code> to other elements I style with a class. A class’s specificity is high than an attribute, and the <code>display: none</code> property doesn’t work.</p><p>This is why I opt to bump up <code>[hidden]</code>'s specificity with <code>!important</code>.</p><pre><code class="language-css">[hidden] {
display: none !important;
}</code></pre><h1 id="noscript">Noscript</h1><p>If a component requires JavaScript to work, I’ll add a <code>&lt;noscript&gt;</code> tag to let users know (if they’ve disabled JavaScript).</p><p>This creates default styles for the <code>&lt;noscript&gt;</code> tag.</p><pre><code class="language-css">/* noscript styles */
noscript {
display: block;
margin-bottom: 1em;
margin-top: 1em;
}</code></pre><p></p><h1 id="wrapping-up">Wrapping up</h1><p>Everyone begins their projects differently. Please feel free to use any of these styles I mentioned. Here’s a <a href="https://github.com/zellwk/css-reset">Github repo</a> of my personal CSS Resets.</p><p>Do you have any recommendations that would help improve this CSS Reset file? If you do, feel free to reach out and let me know!</p><p>Thanks for reading. Did this article help you out? If it did, I hope you consider <a href="https://twitter.com/share?text=My%20CSS%20reset%20by%20@zellwk%20%F0%9F%91%87%20&amp;url=https://zellwk.com/blog/css-reset/">sharing it</a>. You might help someone else out. Thanks so much!</p><hr><p>This article was originally posted at <a href="https://zellwk.com/blog/css-reset">my blog</a>. Sign up for my<a href="https://zellwk.com/"> newsletter</a> if you want more articles to help you become a better frontend developer.</p>
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
