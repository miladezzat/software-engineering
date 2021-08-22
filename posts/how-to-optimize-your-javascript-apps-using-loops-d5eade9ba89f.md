---
card: "https://cdn-media-1.freecodecamp.org/images/1*lTVOyrPN6uiYJKCVmuBxtQ.jpeg"
tags: [JavaScript]
description: "Everyone wants high-performance apps — so in this post, we’ll"
author: "Milad E. Fahmy"
title: "How to optimize your JavaScript apps using Loops"
created: "2021-08-16T10:06:45+02:00"
modified: "2021-08-16T10:06:45+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-optimization tag-coding tag-web-development tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to optimize your JavaScript apps using Loops</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*lTVOyrPN6uiYJKCVmuBxtQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*lTVOyrPN6uiYJKCVmuBxtQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*lTVOyrPN6uiYJKCVmuBxtQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*lTVOyrPN6uiYJKCVmuBxtQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*lTVOyrPN6uiYJKCVmuBxtQ.jpeg" alt="How to optimize your JavaScript apps using Loops">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Everyone wants high-performance apps — so in this post, we’ll learn how to achieve that goal.</p><p>One of the easiest and most neglected things you can do to boost the performance of your JavaScript applications is to learn how to write properly high performing loop statements. The idea of this article is to help with that.</p><blockquote><em>We will see the main types of loop used in JavaScript and how can we write them in a performant way.</em></blockquote><p>Let’s begin!</p><h3 id="loop-performance">Loop performance</h3><p>When it comes to loop performance, the debate is always about which loop to use. Which is the fastest and most performant? The truth is that, of the four loop types provided by JavaScript, only one of them is significantly slower than the others — <code>for-in</code> loop. <em>The choice of loop type should be based on your requirements rather than performance concerns</em>.</p><p>There are two main factors that contribute to loop performance — <strong>work done per iteration</strong> and <strong>number of iterations</strong>.</p><p>In the sections below we will see how, by decreasing them, we can have a positive overall impact on loop performance.</p><h3 id="for-loop">For Loop</h3><p>ECMA-262 (the specification that defines JavaScript’s basic syntax and behaviour), the third edition, defines four types of loops. The first is the standard <code>for</code> loop, which shares its syntax with other C-like languages:</p><pre><code class="language-js">for (var i = 0; i &lt; 10; i++){    //loop body}</code></pre><p>This is probably the most commonly used JavaScript looping construct. To understand how can we optimize its work, we need to dissect it a little bit.</p><h4 id="dissection">Dissection</h4><p>The <code>for</code> loop consists of four parts: initialization, pretest condition, loop body, and post-execute. The way it works is the following: first, the initialization code is executed (var i = 0;). Then the pretest condition (i &lt; 10;). If the pretest condition evaluates <code>to t</code>rue, then the body of the loop is executed. After that the post-execute code (i++) is run.</p><h4 id="optimizations">Optimizations</h4><p>The first step in optimizing the amount of work in a loop is to minimize the number of object members and array item lookups.</p><p>You can also increase the performance of loops by reversing their order. In JavaScript, reversing a loop does result in a small performance improvement for loops, provided that you eliminate extra operations as a result.</p><p>Both of the statements above are valid for the other two faster loops as well (<code>while</code> and <code>do-while</code>).</p><pre><code class="language-js">// original loop
for (var i = 0; i &lt; items.length; i++){
process(items[i]);
}
// minimizing property lookups
for (var i = 0, len = items.length; i &lt; len; i++){
process(items[i]);
}
// minimizing property lookups and reversing
for (var i = items.length; i--; ){
process(items[i]);
}</code></pre><h3 id="while-loop">While Loop</h3><p>The second type of loop is the <code>while</code> loop. This is a simple pretest loop, consisting of a pretest condition and a loop body.</p><pre><code class="language-js">var i = 0;
while(i &lt; 10){
//loop body
i++;
}</code></pre><h4 id="dissection-1">Dissection</h4><p>If the pretest condition evaluates to <code>true</code>, the loop body is executed. If not — it’s skipped. Every <code>while</code> loop can be replaced with <code>for</code> and vice versa.</p><h4 id="optimizations-1">Optimizations</h4><pre><code class="language-js">// original loop
var j = 0;
while (j &lt; items.length){
process(items[j++]);
}
// minimizing property lookups
var j = 0,
count = items.length;
while (j &lt; count){
process(items[j++]);
}
// minimizing property lookups and reversing
var j = items.length;
while (j--){
process(items[j]);
}</code></pre><h4 id="do-while-loop">Do-While Loop</h4><p><code>do-while</code> is the third type of loop and it’s the only post-test loop in JavaScript. It is comprised of body loop and post-test condition:</p><pre><code class="language-js">var i = 0;
do {
//loop body
} while (i++ &lt; 10);</code></pre><h4 id="dissection-2">Dissection</h4><p>In this type of loop, the loop body is executed always at least once. Then the post-test condition is being evaluated, and if it’s <code>true</code>, another loop cycle is executed.</p><h4 id="optimizations-2">Optimizations</h4><pre><code class="language-js">// original loop
var k = 0;
do {
process(items[k++]);
} while (k &lt; items.length);
// minimizing property lookups
var k = 0,
num = items.length;
do {
process(items[k++]);
} while (k &lt; num);
// minimizing property lookups and reversing
var k = items.length - 1;
do {
process(items[k]);
} while (k--);</code></pre><h3 id="for-in-loop">For-In Loop</h3><p>The fourth and the last type of loop is called <code>for-in</code> loop.<strong> </strong>It has a very special purpose —<strong> enumerates the named properties of any JavaScript object.</strong> Here it is how it looks:</p><pre><code class="language-js">for (var prop in object){
//loop body
}</code></pre><h4 id="dissection-3">Dissection</h4><p>It’s similar to the <em>regular </em><code>for</code> loop only by its name. The way it works is totally different. And this difference makes it much slower than the other three loops, which have equivalent performance characteristics such that it’s not useful to try to determine which is fastest.</p><p>Each time the loop is executed, the variable <code>prop</code> has the name of another property, which is a <em>string</em>, on the <code>object.</code> It will execute until all properties have been returned. These would be the properties of the object itself, as well as the ones inherited through its prototype chain.</p><h4 id="notes"><strong>Notes</strong></h4><p><strong>You should never use “<code>for-in”</code> to iterate over members of an array</strong>.</p><p>Each iteration through this loop causes a property lookup either on the instance or on the prototype, which makes the <code>for-in</code> loop much slower than the other loops. For the same number of iterations, it could be seven-time slower than the rest.</p><h3 id="conclusion">Conclusion</h3><ul><li>The <code>for</code>, <code>while</code>, and <code>do-while</code> loops all have similar performance characteristics, and so no one loop type is significantly faster or slower than the others.</li><li>Avoid the <code>for-in</code> loop unless you need to iterate over a number of unknown object properties.</li><li>The best ways to improve loop performance are to <strong>decrease the amount of work done per iteration and decrease the number of loop iterations</strong>.</li></ul><p>I hope this was useful for you, as it was for me!</p><p>Thanks for reading.</p><h3 id="resources">Resources</h3><p>“<a href="https://www.amazon.com/High-Performance-JavaScript-Application-Interfaces/dp/059680279X" rel="noopener">High Performance JavaScript</a>” — Nicholas C. Zakas</p><p>Read more of my articles at <a href="https://mihail-gaberov.eu/optimizing-javascript-apps-loops/" rel="noopener">mihail-gaberov.eu</a>.</p>
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
