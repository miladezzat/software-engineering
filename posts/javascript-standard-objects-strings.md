---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9d18740569d1a4ca35df.jpg"
tags: [JavaScript]
description: Surely you've heard that, in JavaScript, everything is an obj
author: "Milad E. Fahmy"
title: "JavaScript Standard Objects: Strings"
created: "2021-08-15T19:30:55+02:00"
modified: "2021-08-15T19:30:55+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Standard Objects: Strings</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d18740569d1a4ca35df.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d18740569d1a4ca35df.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d18740569d1a4ca35df.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d18740569d1a4ca35df.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d18740569d1a4ca35df.jpg" alt="JavaScript Standard Objects: Strings">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>Surely you've heard that, in JavaScript, everything is an object. Strings, numbers, functions, arrays, and, well, objects, are considered objects.</p>
<p>In this tutorial we'll take a deep dive into the <strong>String</strong> "global" or "standard built-in" object, along with the methods associated with it.</p>
<h2 id="string-prototype-touppercase-">String.prototype.toUpperCase()</h2>
<p>The JavaScript method <code>String.toUpperCase()</code> returns the same string it was called on, but in all uppercase characters.</p>
<h3 id="syntax">Syntax</h3><pre><code class="language-text">str.toUpperCase()</code></pre>
<h3 id="examples">Examples</h3><pre><code class="language-text">console.log("hello world".toUpperCase()); // "HELLO WORLD"</code></pre>
<h2 id="string-prototype-fromcharcode-">String.prototype.fromCharCode()</h2>
<p>The <code>String.fromCharCode()</code> method returns a string created by using the specified sequence of Unicode values.</p>
<h3 id="syntax-1">Syntax</h3><pre><code class="language-text">String.fromCharCode(num1, num2...)</code></pre>
<h3 id="parameters"><strong>Parameters</strong></h3>
<p>A sequence of numbers that represent Unicode values.</p>
<h3 id="examples-1">Examples</h3><pre><code class="language-text">String.fromCharCode(65, 66, 67);  // "ABC"
var test = String.fromCharCode(112, 108, 97, 105, 110);
document.write(test);
// Output: plain</code></pre>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
