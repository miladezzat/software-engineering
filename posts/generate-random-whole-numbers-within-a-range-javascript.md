---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9ef9740569d1a4ca4026.jpg"
tags: [JavaScript]
description: If the values were myMin = 1, myMax= 10, one result could be
author: "Milad E. Fahmy"
title: "How to Generate Random Whole Numbers within a Range using JavaScript Math.floor - Solved"
created: "2021-08-15T19:32:02+02:00"
modified: "2021-08-15T19:32:02+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-math ">
<header class="post-full-header">
<h1 class="post-full-title">How to Generate Random Whole Numbers within a Range using JavaScript Math.floor - Solved</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ef9740569d1a4ca4026.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ef9740569d1a4ca4026.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ef9740569d1a4ca4026.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ef9740569d1a4ca4026.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ef9740569d1a4ca4026.jpg" alt="How to Generate Random Whole Numbers within a Range using JavaScript Math.floor - Solved">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h2 id="quick-solution">Quick Solution</h2><pre><code class="language-javascript">function randomRange(myMin, myMax) {
return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}
</code></pre>
<h2 id="code-explanation">Code Explanation</h2>
<ul>
<li><code>Math.random()</code> generates our random number between 0 and ≈ 0.9.</li>
<li>Before multiplying it, it resolves the part between parenthesis <code>(myMax - myMin + 1)</code> because of the grouping operator <code>( &nbsp; )</code>.</li>
<li>The result of that multiplication is followed by adding <code>myMin</code> and then "rounded" to the largest integer less than or equal to it (eg: 9.9 would result in 9)</li>
</ul>
<p>If the values were <code>myMin = 1, myMax= 10</code>, one result could be the following:</p>
<ol>
<li><code>Math.random() = 0.8244326990411024</code></li>
<li><code>(myMax - myMin + 1) = 10 - 1 + 1 -&gt; 10</code></li>
<li><code>a * b = &nbsp;8.244326990411024</code></li>
<li><code>c + myMin = 9.244326990411024</code></li>
<li><code>Math.floor(9.244326990411024) = 9</code></li>
</ol>
<p><code>randomRange</code> should use both <code>myMax</code> and <code>myMin</code>, and return a random number in your range.</p>
<p>You cannot pass the test if you are only re-using the function <code>ourRandomRange</code> inside your <code>randomRange</code> formula. You need to write your own formula that uses the variables <code>myMax</code> and <code>myMin</code>. It will do the same job as using <code>ourRandomRange</code>, but ensures that you have understood the principles of the <code>Math.floor()</code> and <code>Math.random()</code> functions.</p>
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
