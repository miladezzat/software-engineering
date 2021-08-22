---
card: "https://cdn-media-1.freecodecamp.org/images/1*TGyQ2F-PxAhKWA6p6b6rYA.jpeg"
tags: [CSS]
description: "by Veronika Ivhed"
author: "Milad E. Fahmy"
title: "Z-Index Explained: How to Stack Elements Using CSS"
created: "2021-08-16T11:44:14+02:00"
modified: "2021-08-16T11:44:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-technology tag-programming tag-html tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Z-Index Explained: How to Stack Elements Using CSS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*TGyQ2F-PxAhKWA6p6b6rYA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*TGyQ2F-PxAhKWA6p6b6rYA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*TGyQ2F-PxAhKWA6p6b6rYA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*TGyQ2F-PxAhKWA6p6b6rYA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*TGyQ2F-PxAhKWA6p6b6rYA.jpeg" alt="Z-Index Explained: How to Stack Elements Using CSS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
&lt;div class=”orange”&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class=”blue”&gt;&lt;/div&gt;
&lt;div class=”green”&gt;&lt;/div&gt;</code></pre><p>CSS:</p><pre><code class="language-css">/* This is only the CSS that is relevant for the example. For the complete CSS check the links below the pictures. */
.blue, .pink, .orange {
position: absolute;
position: absolute;
}
.blue {
z-index: 2;
}
.orange {
z-index: 3;
}
.green {
z-index: 100; // has no effect since the green box is non-   positioned
&lt;div class=”orange”&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class=”blue”&gt;&lt;/div&gt;
&lt;div class=”purple”&gt;&lt;/div&gt;
&lt;div class=”green”&gt;&lt;/div&gt;</code></pre><p>CSS:</p><pre><code class="language-css">.blue, .pink, .orange, .purple {
position: absolute;
}
.purple {
z-index: 0;
}
.pink {
z-index: 1;
}
.blue {
z-index: 2;
}
.orange {
z-index: 3;
}
.green {
z-index: 100;
&lt;div class=”orange”&gt;&lt;/div&gt;
&lt;div class=”blue”&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class=”purple”&gt;&lt;/div&gt;
&lt;div class=”orange”&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class=”blue”&gt;&lt;/div&gt;
&lt;div class=”green”&gt;&lt;/div&gt;</code></pre><p>CSS:</p><pre><code class="language-css">.blue, .pink, .orange {
position: absolute;
}
.pink {
filter: hue-rotate(20deg);
}
.blue {
z-index: 2;
}
.orange {
z-index: 3;
}
.green {
z-index: 100;
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
