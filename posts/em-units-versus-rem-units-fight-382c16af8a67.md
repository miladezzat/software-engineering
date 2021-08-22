---
card: "https://cdn-media-1.freecodecamp.org/images/1*VbEg9oepDwSg4mrtTYfNfA.png"
tags: [Web Development]
description: "by ZAYDEK"
author: "Milad E. Fahmy"
title: "CSS Unit Battle: EMs Vs. REMs…FIGHT! ?"
created: "2021-08-16T10:13:56+02:00"
modified: "2021-08-16T10:13:56+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-html tag-css tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">CSS Unit Battle: EMs Vs. REMs…FIGHT! ?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*VbEg9oepDwSg4mrtTYfNfA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*VbEg9oepDwSg4mrtTYfNfA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*VbEg9oepDwSg4mrtTYfNfA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*VbEg9oepDwSg4mrtTYfNfA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*VbEg9oepDwSg4mrtTYfNfA.png" alt="CSS Unit Battle: EMs Vs. REMs…FIGHT! ?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
&lt;html&gt;
&lt;head&gt;
…
&lt;style&gt;
.a { font-size: 40px; }
.b { font-size: 30px; }
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div class="wrapper"&gt;
&lt;span class="a"&gt;&lt;/span&gt;
&lt;span class="b"&gt;&lt;/span&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>Here we’ve defined a <code>wrapper</code> with two <code>span</code> elements, each with no content. So our website is terrible! But what we can do is give our <code>span</code> elements some text to demonstrate how <code>em</code> works:</p><pre><code class="language-html">    …
&lt;body&gt;
&lt;div class="wrapper"&gt;
&lt;span class="a"&gt;hello from inside .a&lt;/span&gt;
&lt;span class="b"&gt;hello from inside .b&lt;/span&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;style&gt;
.wrapper { font-size: 20px; }
.a { font-size: 1.5em; }
.b { font-size: 2.0em; }
&lt;/style&gt;
/  \
head  body
/\
…  …</code></pre><p>This is what our website is—a tree!—an “upside-down” tree!</p><pre><code class="language-html">        …
&lt;style&gt;
html { font-size: 20px; }
.a { font-size: 1.5rem; }
.b { font-size: 2.0rem; }
&lt;/style&gt;
&lt;style&gt;
p { color: green; }
@media (max-width: 8.5in) { p { color: blue; } }
&lt;/style&gt;
…</code></pre><p>Here <code>p</code> renders <code>green</code>, but if the width is at or less than <code>8.5in</code>, the same <code>p</code> reads <code>blue</code>. And we can go a step further than this: instead of using media queries for <code>color</code>, we can use them for <code>font-size</code>:</p><pre><code class="language-html">        …
&lt;style&gt;
:root { font-size: 20px; }
.a { font-size: 1.5rem; }
.b { font-size: 2.0rem; }
@media (max-width: 650px) { :root { font-size: 3vw; } }
&lt;/style&gt;
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
