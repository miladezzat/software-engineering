---
card: "https://cdn-media-1.freecodecamp.org/images/1*9cRn62IAywuaywMSJ2X6_g.png"
tags: [CSS]
description: "Using CSS position to layout elements on your website can be "
author: "Milad E. Fahmy"
title: "How to use CSS position to layout a website (with example code)"
created: "2021-08-16T11:30:42+02:00"
modified: "2021-08-16T11:30:42+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-web-development tag-technology tag-website-design tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to use CSS position to layout a website (with example code)</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*9cRn62IAywuaywMSJ2X6_g.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*9cRn62IAywuaywMSJ2X6_g.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*9cRn62IAywuaywMSJ2X6_g.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*9cRn62IAywuaywMSJ2X6_g.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*9cRn62IAywuaywMSJ2X6_g.png" alt="How to use CSS position to layout a website (with example code)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
// No position set, so it's static
}
.another {
// No position set, so it's static
top: 50px;
position: static;
}
.another {
position: relative;
top: 50px;
&lt;div class="child magenta"&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre><p>And our CSS styles:</p><pre><code class="language-css">.parent {
position: relative;
}
.child {
position: relative;
top: 0px;
left: 0px;
position: relative;
}
.child {
position: absolute;
top: 0px;
left: 0px;
// No position set, so it's static
}
.child {
position: absolute;
top: 0px;
left: 0px;
Lorem ipsum dolor sit amet, consectetur adipiscing elit....
&lt;/div&gt;
&lt;div class="another green"&gt;&lt;/div&gt;</code></pre><p>And in our CSS, we’ve set the second element to be <code>position: fixed</code>:</p><pre><code>.first {
position: relative;
}
.another {
position: fixed;
top: 0px;
left: 0px;
Lorem ipsum dolor sit amet, consectetur adipiscing elit....
&lt;/div&gt;
&lt;div class="another green"&gt;&lt;/div&gt;
&lt;div class="purple"&gt;
Lorem ipsum dolor sit amet, consectetur adipiscing elit....
&lt;/div&gt;</code></pre><p>And the CSS for our sticky element:</p><pre><code>.first {
position: relative;
}
.another {
position: sticky;
top: 0px;
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
