---
card: "https://cdn-media-1.freecodecamp.org/images/1*Bx0gNW69lAXaSRqRw0_8dw.jpeg"
tags: [CSS]
description: "In this article, I’ll teach you how to use CSS Grid to create"
author: "Milad E. Fahmy"
title: "How to make your HTML responsive by adding a single line of CSS"
created: "2021-08-16T11:48:10+02:00"
modified: "2021-08-16T11:48:10+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-web-development tag-design tag-technology tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to make your HTML responsive by adding a single line of CSS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Bx0gNW69lAXaSRqRw0_8dw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*Bx0gNW69lAXaSRqRw0_8dw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*Bx0gNW69lAXaSRqRw0_8dw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Bx0gNW69lAXaSRqRw0_8dw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Bx0gNW69lAXaSRqRw0_8dw.jpeg" alt="How to make your HTML responsive by adding a single line of CSS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;div&gt;1&lt;/div&gt;
&lt;div&gt;2&lt;/div&gt;
&lt;div&gt;3&lt;/div&gt;
&lt;div&gt;4&lt;/div&gt;
&lt;div&gt;5&lt;/div&gt;
&lt;div&gt;6&lt;/div&gt;
&lt;/div&gt;
</code></pre><p>And the CSS:</p><pre><code class="language-css">.container {
display: grid;
grid-template-columns: 100px 100px 100px;
grid-template-rows: 50px 50px;
}
</code></pre><p>Note: the example also has a little bit of basic styling, which I won’t go into here, as it’s got nothing to do with CSS Grid.</p><p>If this code confuses you, I’d recommend you to read my <a href="https://medium.freecodecamp.org/learn-css-grid-in-5-minutes-f582e87b1228">Learn CSS Grid in 5 minutes</a> article, where I explain the basics of the layout module.</p><p>Let’s start by making the columns responsive.</p><h3 id="basic-responsiveness-with-the-fraction-unit">Basic responsiveness with the fraction unit</h3><p>CSS Grid brings with it a whole new value called a fraction unit. The fraction unit is written like <code>fr</code>, and it allows you to split the container into as many fractions as you want.</p><p>Let’s change each of the columns to be one fraction unit wide.</p><pre><code class="language-css">.container {
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 50px 50px;
}
display: grid;
grid-template-columns: repeat(3, 100px);
grid-template-rows: repeat(2, 50px);
}
display: grid;
grid-gap: 5px;
grid-template-columns: repeat(auto-fit, 100px);
grid-template-rows: repeat(2, 100px);
}
display: grid;
grid-gap: 5px;
grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
grid-template-rows: repeat(2, 100px);
}
&lt;img src="img/forest.jpg"/&gt;
&lt;/div&gt;
</code></pre><p>To make the image fit into the item, we’ll set it to be as wide and tall as the item itself, and then use <code>object-fit: cover;</code>. This will make the image cover its entire container, and the browser will crop it if it’s needed.</p><pre><code class="language-css">.container &gt; div &gt; img {
width: 100%;
height: 100%;
object-fit: cover;
}
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
