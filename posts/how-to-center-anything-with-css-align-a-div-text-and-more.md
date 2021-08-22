---
card: "/images/default.jpg"
tags: [CSS]
description: "Centering things is one of the most difficult aspects of CSS."
author: "Milad E. Fahmy"
title: "How to Center Anything with CSS - Align a Div, Text, and More"
created: "2021-08-15T22:49:23+02:00"
modified: "2021-08-15T22:49:23+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-responsive-design tag-html ">
<header class="post-full-header">
<h1 class="post-full-title">How to Center Anything with CSS - Align a Div, Text, and More</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/06/5f9c9b00740569d1a4ca291b.jpg 300w,
/news/content/images/size/w600/2021/06/5f9c9b00740569d1a4ca291b.jpg 600w,
/news/content/images/size/w1000/2021/06/5f9c9b00740569d1a4ca291b.jpg 1000w,
/news/content/images/size/w2000/2021/06/5f9c9b00740569d1a4ca291b.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/06/5f9c9b00740569d1a4ca291b.jpg" alt="How to Center Anything with CSS - Align a Div, Text, and More">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Centering things is one of the most difficult aspects of CSS. </p><p>The methods themselves usually aren't difficult to understand. Instead, it's more due to the fact that there are so many ways to center things. </p><p>The method you use can vary depending on the HTML element you're trying to center, or whether you're centering it horizontally or vertically.</p><p>In this tutorial, we'll go over how to center different elements horizontally, vertically, and both vertically and horizontally.</p><h2 id="how-to-center-horizontally">How to Center Horizontally</h2><p>Centering elements horizontally is generally easier than vertically centering them. Here are some common elements you may want to center horizontally and different ways to do it.</p><h3 id="how-to-center-text-with-the-css-text-align-center-property">How to Center Text with the CSS Text-Align Center Property</h3><p>To center text or links horizontally, just use the <code>text-align</code> property with the value <code>center</code>:</p><pre><code class="language-html">&lt;div class="container"&gt;
&lt;p&gt;Hello, (centered) World!&lt;/p&gt;
&lt;/div&gt;</code></pre><pre><code class="language-css">p {
text-align: center;
&lt;div class="child"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre><pre><code class="language-css">.child {
...
margin: 0 auto;
&lt;div class="child"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre><pre><code class="language-css">.container {
...
display: flex;
justify-content: center;
&lt;div class="child"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre><pre><code class="language-css">.container {
...
position: relative;
}
.child {
width: 50px;
height: 50px;
background-color: red;
/* Center vertically */
position: absolute;
top: 50%;
...
position: relative;
}
.child {
width: 50px;
height: 50px;
background-color: red;
/* Center vertically */
position: absolute;
top: 50%;
margin-top: -25px; /* half this element's height */
&lt;div class="child"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre><pre><code class="language-css">.container {
...
position: relative;
}
.child {
...
position: absolute;
top: 50%;
transform: translate(0, -50%);
&lt;div class="child"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre><pre><code class="language-css">.container {
...
display: flex;
align-items: center;
&lt;div class="child"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre><pre><code class="language-css">.container {
...
position: relative;
}
.child {
width: 50px;
height: 50px;
background-color: red;
/* Center vertically and horizontally */
position: absolute;
top: 50%;
left: 50%;
margin: -25px 0 0 -25px; /* apply negative top and left margins to truly center the element */
&lt;div class="child"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre><pre><code class="language-css">.container {
...
position: relative;
}
.child {
...
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
&lt;div class="child"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre><pre><code class="language-css">.container {
...
display: flex;
justify-content: center;
align-items: center;
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
