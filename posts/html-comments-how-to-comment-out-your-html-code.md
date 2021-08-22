---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9d42740569d1a4ca36c2.jpg"
tags: [HTML]
description: "The comment tag is an element used to leave notes, mostly rel"
author: "Milad E. Fahmy"
title: "HTML Comments: How to Comment Out your HTML Code"
created: "2021-08-15T22:49:45+02:00"
modified: "2021-08-15T22:49:45+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-html tag-html5 tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">HTML Comments: How to Comment Out your HTML Code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d42740569d1a4ca36c2.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d42740569d1a4ca36c2.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d42740569d1a4ca36c2.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d42740569d1a4ca36c2.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d42740569d1a4ca36c2.jpg" alt="HTML Comments: How to Comment Out your HTML Code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="comments-in-html"><strong>Comments in HTML</strong></h2><p>The comment tag is an element used to leave notes, mostly related to the project or the website. This tag is frequently used to explain something in the code or leave some recommendations about the project. The comment tag also makes it easier for the developer to come back and understand the code he’s written at a later stage. Comments can also used for commenting out lines of code for debugging purposes.</p><p>It is good practice to add comments to your code, especially when working with a team or at a company.</p><p>Comments are started with <code>&lt;!--</code> and ended with <code>--&gt;</code>, and can span multiple lines. They can contain code or text, and won’t appear on the front-end of the website when a user visits a page. You can view comments through the Inspector Console, or by viewing Page Source.</p><h3 id="example"><strong>Example</strong></h3><pre><code class="language-html">&lt;!-- You can comment out a large number of lines like this.
Author: xyz
Date: xx/xx/xxxx
Purpose: abc
--&gt;
Read more: https://html.com/tags/comment-tag/#ixzz4vtZHu5uR
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;
&lt;h1&gt;FreeCodeCamp web&lt;/h1&gt;
&lt;!-- Leave some space between the h1 and the p in order to understand what are we talking about--&gt;
&lt;p&gt;FreeCodeCamp is an open-source project that needs your help&lt;/p&gt;
&lt;!-- For readability of code use proper indentation --&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><h2 id="conditional-comments"><strong>Conditional Comments</strong></h2><p>Conditional Comments defines some HTML tags to be excuted when a certain codition is fullfilled.</p><p>Conditional Comments are only recognised by Internet Explorer Version 5 through to Version 9 - IE5 - IE9.</p><h3 id="example-1"><strong>Example</strong></h3><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;
&lt;!--[if IE 9]&gt;
&lt;h1&gt;FreeCodeCamp web&lt;/h1&gt;
&lt;p&gt;FreeCodeCamp is an open-source project that needs your help&lt;/p&gt;
&lt;![endif]--&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><h3 id="ie-conditional-comments"><strong>IE Conditional Comments</strong></h3><p>These comments are only available in Internet Explorer and can be used up to IE9. In the current times, there is a good change you will never see them, but it is good to know about their existance. Conditional comments are a way to serve a different experience for different client browsers. For example:</p><pre><code class="language-html">&lt;!--[if lt IE 9]&gt; &lt;p&gt;Your browser is lower then IE9&lt;/p&gt; &lt;![endif]--&gt;
&lt;!--[if IE 9]&gt; &lt;p&gt;Your browser is IE9&lt;/p&gt; &lt;![endif]--&gt;
&lt;!--[if gt IE 9]&gt; &lt;p&gt;Your browser is greater then IE9&lt;/p&gt; &lt;![endif]--&gt;</code></pre><h2 id="more-info-on-html-">More info on HTML:</h2><ul><li><a href="/news/p/1c7bd638-2e4d-48f7-aba2-29d97a02021b/">Beginner's guide to HTML</a></li><li><a href="/news/best-html-html5-tutorial/">Best HTML and HTML5 tutorials</a></li><li><a href="/news/the-html-handbook/">The HTML Handbook</a></li></ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
