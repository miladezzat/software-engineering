---
card: "https://cdn-media-2.freecodecamp.org/w1280/6051c3af28094f59be25734b.jpg"
tags: [HTML]
description: "In this article, we are going to learn how to use the <b> tag"
author: "Milad E. Fahmy"
title: "HTML Bold Text Tutorial – How to Use the b Tag"
created: "2021-08-16T10:03:58+02:00"
modified: "2021-08-16T10:03:58+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-html tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">HTML Bold Text Tutorial – How to Use the b Tag</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/6051c3af28094f59be25734b.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/6051c3af28094f59be25734b.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/6051c3af28094f59be25734b.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/6051c3af28094f59be25734b.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/6051c3af28094f59be25734b.jpg" alt="HTML Bold Text Tutorial – How to Use the b Tag">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
</code></pre><p>The appropriate tag for this situation would be the <code>&lt;strong&gt;</code> tag because it conveys a sense of seriousness. </p><h2 id="differences-between-the-b-tag-and-strong-tag-in-html">Differences between the &lt;b&gt; tag and &lt;strong&gt; tag in HTML</h2><p>When I first started learning HTML, I thought that the <code>&lt;b&gt;</code> tag and <code>&lt;strong&gt;</code> tag were the same thing. Part of the confusion is that they both have the same default boldface styling in most browsers. </p><p>One key difference is that <code>&lt;strong&gt;</code> tags should be used when the text has strong importance, or a sense of urgency or seriousness. <code>&lt;b&gt;</code> tags, on the other hand, should be used to bring attention to a span of text without increased importance. </p><p>This example of the <code>&lt;strong&gt;</code> tag tells the user what list item should be read first and that it holds more importance than the other two list items.</p><pre><code class="language-html">&lt;p&gt;To do list for Monday:&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;&lt;p&gt;&lt;strong&gt;Pay rent.&lt;/strong&gt;&lt;/p&gt;&lt;/li&gt;
&lt;li&gt;&lt;p&gt;Start term paper.&lt;/p&gt;&lt;/li&gt;
&lt;li&gt;&lt;p&gt;Go grocery shopping.&lt;/p&gt;&lt;/li&gt;
&lt;/ul&gt;
</code></pre><h2 id="how-to-use-the-class-attribute-with-b-tags-in-html">How to Use the Class Attribute with &lt;b&gt; Tags in HTML</h2><p>It is common to add a class attribute in the <code>&lt;b&gt;</code> tag to add more semantic meaning. </p><p>If you have a series of &nbsp;sentences, you can add a class like this <code>&lt;b class="lead"&gt;</code> to the first <code>&lt;p&gt;</code> tag and that will mark it as the lead sentence. &nbsp; </p><pre><code class="language-html">&lt;article&gt;
&lt;h2&gt;A young boy reunites with birth mother&lt;/h2&gt;
&lt;p&gt;&lt;b class="lead"&gt;A six year old boy unexpectedly meets his birth mother at the local grocery store.&lt;/b&gt;&lt;/p&gt;
&lt;p&gt;A young boy and his grandfather were shopping at the grocery store, when a young woman approached them from behind.&lt;/p&gt;
[...]
&lt;/article&gt;</code></pre><h2 id="should-you-use-the-b-tag-for-styling-text-in-html">Should you use the &lt;b&gt; tag for styling text in HTML?</h2><p>In HTML 5, it is not appropriate to use the <code>&lt;b&gt;</code> tag for styling text. The preferred styling method is to use the CSS <code>font-weight</code> property. </p><h3 id="example-using-the-keyword-of-bold">Example using the keyword of bold</h3><pre><code class="language-html"> &lt;p class="demo-para"&gt;I am using CSS to make the text bold.&lt;/p&gt;
</code></pre><pre><code class="language-css">.demo-para {
font-weight: bold;
}</code></pre><h3 id="example-using-numeric-values">Example using numeric values</h3><pre><code class="language-css">.demo-para {
font-weight: 700;
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
