---
card: "https://cdn-media-1.freecodecamp.org/images/0*A8uxgOGZV8XlHg8s.jpg"
tags: [Blockchain]
description: "by Subhan Nadeem"
author: "Milad E. Fahmy"
title: "How Bitcoin mining really works"
created: "2021-08-16T11:43:32+02:00"
modified: "2021-08-16T11:43:32+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-blockchain tag-bitcoin tag-technology tag-cryptocurrency tag-security ">
<header class="post-full-header">
<h1 class="post-full-title">How Bitcoin mining really works</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*A8uxgOGZV8XlHg8s.jpg 300w,
https://cdn-media-1.freecodecamp.org/images/0*A8uxgOGZV8XlHg8s.jpg 600w,
https://cdn-media-1.freecodecamp.org/images/0*A8uxgOGZV8XlHg8s.jpg 1000w,
https://cdn-media-1.freecodecamp.org/images/0*A8uxgOGZV8XlHg8s.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*A8uxgOGZV8XlHg8s.jpg" alt="How Bitcoin mining really works">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
&lt;Bitcoin Transaction&gt;
Output to SHA-256:
77077b1f4c3ad44c83dc0bdb8d937e9b71c0ef07a35c2664bb7da85be738eacf</code></pre><p>Interestingly enough, in the majority of places where hashing is used in the Bitcoin protocol, <strong>double hashing</strong> is used. This means that the output of the original SHA-256 function is then put right back into the SHA-256 function to obtain another output. Here is what that process looks like:</p><pre><code>Input to SHA-256(first round):
&lt;Bitcoin Transaction&gt;
Output (first round):
77077b1f4c3ad44c83dc0bdb8d937e9b71c0ef07a35c2664bb7da85be738eacf
Input to SHA-256 (second round):
77077b1f4c3ad44c83dc0bdb8d937e9b71c0ef07a35c2664bb7da85be738eacf
Output (second round and final result):
4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b</code></pre><ul><li>The first known Bitcoin version: <code>0.1.0</code></li><li>The timestamp of the block: <code>2009–01–03 18:15:05</code></li><li>The target (this is also the highest the target will ever be):</li></ul><pre><code>Target:
7d80bd12dfdccbdde2c41c9f406edfc05afb3320f5affc4f510b05a3394e1c91
SHA-256 of the previous result (final result):
c5aa3150f61b752c8fb39525f911981e2f9982c8b9bc907c73914585ad2ef12b</code></pre><p>Both the target and the output hash are incredibly large numbers when converted to base 10 (remember, over 67 digits long). Instead of trying to demonstrate the comparison of the two here, the following Python function handles the comparison instead:</p><pre><code>def isBlockHashLessThanTarget(blockHash, target):
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
