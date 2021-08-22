---
card: "https://cdn-media-1.freecodecamp.org/images/1*G3EYLVI1Rwf-PIou6TLwQA.jpeg"
tags: [CSS]
description: "by Jason Arnold"
author: "Milad E. Fahmy"
title: "How to use Sass Mixins and Loops"
created: "2021-08-16T10:24:01+02:00"
modified: "2021-08-16T10:24:01+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-sass tag-web-development tag-front-end-development tag-web-design ">
<header class="post-full-header">
<h1 class="post-full-title">How to use Sass Mixins and Loops</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*G3EYLVI1Rwf-PIou6TLwQA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*G3EYLVI1Rwf-PIou6TLwQA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*G3EYLVI1Rwf-PIou6TLwQA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*G3EYLVI1Rwf-PIou6TLwQA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*G3EYLVI1Rwf-PIou6TLwQA.jpeg" alt="How to use Sass Mixins and Loops">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
Sass code goes here...</code></pre><p>This Mixin can then be called anywhere else in your code that you need it. And you pass along the arguments that the Mixin needs and Sass converts all of that to CSS.</p><p>Here is an example of a Mixin I wrote to define a basic box.</p><pre><code class="language-sass">=box($height, $width, $backgroundColor)
height: $height
width: $width
background-color: $backgroundColor
margin-bottom: 5px
border: 1px solid black</code></pre><p>I’ve defined my three parameters after the name of the Mixin, in this case it is <code>box</code>. Then I have Sass code, some of which calls on the parameters. I can now use this Mixin elsewhere in my Sass code whenever I want to define a box with these characteristics. I can call the Mixin as many times as I want, passing in different arguments each time. You call a Mixin with the <code>+</code> character.</p><pre><code class="language-sass">.box-1
+box(100px, 200px, tomato)
.box-2
Sass code goes here...</code></pre><p>The <code>to</code> version is the same. Just replace <code>through</code> with <code>to</code>.</p><p>The <code>$variable</code> can be whatever name you want it to be. The <code>&lt;sta</code>rt&gt;<code>; and</code> &lt;end&gt; values should be integers.</p><p>Here is an example I wrote that creates 10 divs on the page, each wider than the last and a slightly different color. I also included them in a Mixin so I could pass in parameters and call it wherever I needed to.</p><pre><code class="language-sass">=graph($height, $baseColor)
@for $i from 1 through 10
.line-#{$i}
height: $height
width: 2em * $i
@for $i from 1 through 30
.stack-#{$i}
position: absolute
height: 100px
width: 100px
top $i + 10px
left $i + 10px
background-color: rgba($i * 1, $i * 2, $i * 3, 1)
&amp;:hover
background-color: rgba($i * 2, $i * 4, $i * 8, 1)</code></pre><p>Call this Mixin like so (no arguments needed):</p><pre><code class="language-sass">+stack</code></pre><p>The loop will run once when the page renders and then again on each individual <code>.stack</code> element when the mouse hovers over it. This changes the background color.</p><p>It was much easier and faster to write this Mixin with an <code>@for</code> loop rather than writing out 299 lines of CSS. And again, if I want to change something for all of them I do it once instead of 299 times.</p><p>The result is underwhelming since you can’t hover on the screenshot. Here is a <a href="https://codepen.io/thejasonfile/full/wdmpjZ/" rel="noopener">CodePen</a> with all the above examples.</p><p>These are only two of the great tools that Sass offers. They can help you create some great looking and functional CSS in a fraction of the time.</p><p>I hope you enjoyed this post. Please let me know if you have any questions. Thanks!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
