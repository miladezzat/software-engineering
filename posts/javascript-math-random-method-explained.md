---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9d8c740569d1a4ca3853.jpg"
tags: [JavaScript]
description: The JavaScript Math.random() method is an excellent built-in
author: "Milad E. Fahmy"
title: "JavaScript Math.random() Method Explained"
created: "2021-08-15T19:31:10+02:00"
modified: "2021-08-15T19:31:10+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-math tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Math.random() Method Explained</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d8c740569d1a4ca3853.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d8c740569d1a4ca3853.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d8c740569d1a4ca3853.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d8c740569d1a4ca3853.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d8c740569d1a4ca3853.jpg" alt="JavaScript Math.random() Method Explained">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="random-method"><strong>Random Method</strong></h2>
<p>The JavaScript <code>Math.random()</code> method is an excellent built-in method for producing random numbers. When <code>Math.random()</code> is executed, it returns a random number that can be anywhere between 0 and 1. The 0 is included and 1 is excluded.</p>
<h2 id="generating-a-random-floating-point-number-between-0-and-1">Generating a random floating point number between 0 and 1</h2>
<p>The <code>Math.random()</code> method will return a floating point (decimal) number greater than or equal to 0 and less than (but never equal to) 1. In other words <code>0 &lt;= x &lt; 1</code>. For example:</p><pre><code class="language-javascript">console.log(Math.random());
// 0.7069207248635578
console.log(Math.random());
// 0.765046694794209
console.log(Math.random());
// 0.14069121642698246</code></pre>
<p>(Of course, the numbers returned will be different every time. This will be assumed for all following examples - different results will happen on each pass.)</p>
<p>To get a random number between a larger range multiply the result of <code>Math.random()</code> by a number.</p>
<h2 id="generating-a-random-floating-point-number-between-0-and-a-specified-max">Generating a random floating point number between 0 and a specified max</h2>
<p>Usually you do not need random numbers between 0 and 1 - you need larger numbers or even integers.</p>
<p>For example, if you want a random floating point number between 0 and 10, you could use:</p><pre><code class="language-javascript">var x = Math.random()*10;
console.log(x);
// 4.133793901445541</code></pre>
<h2 id="generating-a-random-floating-point-number-within-a-range">Generating a random floating point number within a range</h2>
<p>If you need a random floating point number that ranges between two specific numbers, you could do something like this:</p><pre><code class="language-javascript">var min = 83.1;
var max = 193.36;
var x = Math.random()*(max - min)+min;
console.log(x);
// 126.94014012699063</code></pre>
<h2 id="generating-a-random-integer-between-0-and-a-max">Generating a random integer between 0 and a max</h2>
<p>Often you need integers. To do this you will have to use some other methods from the <code>Math</code> object, <code>Math.floor()</code> (rounds down to the nearest integer) and <code>Math.ceil()</code> (rounds up to the nearest integer).</p>
<p>For example, if you need to select randomly from an array of 10 elements, you would need a random number between 0 and 9 inclusive (remember that arrays are zero indexed).</p><pre><code class="language-javascript">var x = Math.floor(Math.random()*10);
console.log(x);
// 7</code></pre>
<p>(Remember that <code>Math.random()</code> will never return exactly 1, so <code>Math.random()*10</code> will never return exactly 10. This means that after rounding down, the result will always be 9 or less.)</p>
<h2 id="generating-a-random-integer-between-1-and-a-max">Generating a random integer between 1 and a max</h2>
<p>If you need a random number with the minimum number being 1 (for example picking a random day in January) you could use the <code>Math.ceil()</code> method.</p><pre><code class="language-javascript">var x = Math.ceil(Math.random()*31);
console.log(x);
// 23</code></pre>
<p>Another way would have been to use the previous function (using <code>Math.floor()</code>) and add 1 to it:</p><pre><code class="language-javascript">var x = Math.floor(Math.random()*31)+1;
console.log(x);
// 17</code></pre>
<h2 id="generating-a-random-integer-within-a-range">Generating a random integer within a range</h2>
<p>Lastly, occasionally you need a random integer between two specific integers. For example, if you are trying to pick raffle tickets and you know the numbers of the lowest and largest number:</p><pre><code class="language-javascript">var min = 1718;
var max = 3429;
var x = Math.floor(Math.random()*(max-min+1)+min);
console.log(x);
//2509</code></pre>
<h2 id="how-random-is-math-random-">How random is Math.random()?</h2>
<p>It may be pointed out that the number returned by <code>Math.random()</code> is a pseudo-random number as no computer can generate a truly random number, that exhibits randomness over all scales and over all sizes of data sets. However, the pseudo-random number generated by <code>Math.random()</code> is usually sufficient for the needs of nearly any program you may write. The not-truly-randomness only becomes apparent in astronomically large number sets or when uncommonly precise decimals are needed.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
