---
card: "https://cdn-media-1.freecodecamp.org/images/1*fXBo56b0tanSCNHo4O2eWw.jpeg"
tags: [CSS]
description: "Positioning elements with CSS in web development isn’t as eas"
author: "Milad E. Fahmy"
title: "How to use the position property in CSS to align elements"
created: "2021-08-16T11:37:12+02:00"
modified: "2021-08-16T11:37:12+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-tech tag-design tag-programming tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to use the position property in CSS to align elements</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*fXBo56b0tanSCNHo4O2eWw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*fXBo56b0tanSCNHo4O2eWw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*fXBo56b0tanSCNHo4O2eWw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*fXBo56b0tanSCNHo4O2eWw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*fXBo56b0tanSCNHo4O2eWw.jpeg" alt="How to use the position property in CSS to align elements">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;div class="box-orange"&gt;&lt;/div&gt;
&lt;div class="box-blue"&gt;&lt;/div&gt;
&lt;/body&gt;</code></pre><p>Then, we create 2 boxes and define their widths, heights &amp; positions:</p><pre><code class="language-css">.box-orange {    // without any position declaration
background: orange;
height: 100px;
width: 100px;
}
.box-blue {
background: lightskyblue;
height: 100px;
width: 100px;
position: static;   // Declared as static
position: relative;  // We are now ready to move the element
background: orange;
width: 100px;
height: 100px;
top: 100px;   // 100px from top relative to its old position
left: 100px;  // 100px from left
&lt;div class="container"&gt;
&lt;div class="box-orange"&gt;&lt;/div&gt;
&lt;div class="box-blue"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;</code></pre><pre><code class="language-css">.box-orange {
position: absolute;
background: orange;
width: 100px;
height: 100px;
position: absolute;
background: orange;
width: 100px;
height: 100px;
left: 5px;
top: 5px;
position: relative;
background: lightgray;
}
.box-orange {
position: absolute;
background: orange;
width: 100px;
height: 100px;
right: 5px;    // 5px relative to the most-right of parent
position: relative;
background: lightgray;
}
.box-orange {
position: fixed;
background: orange;
width: 100px;
height: 100px;
right: 5px;    // 5px relative to the most-right of parent
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
