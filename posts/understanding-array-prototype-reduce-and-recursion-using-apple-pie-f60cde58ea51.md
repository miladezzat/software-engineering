---
card: "https://cdn-media-1.freecodecamp.org/images/0*VsKg3XJwl9mJScFc."
tags: [JavaScript]
description: "I was having trouble understanding reduce() and recursion in "
author: "Milad E. Fahmy"
title: "Understanding Array.prototype.reduce() and recursion using apple pie"
created: "2021-08-15T23:49:47+02:00"
modified: "2021-08-15T23:49:47+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-coding tag-programming tag-algorithms ">
<header class="post-full-header">
<h1 class="post-full-title">Understanding Array.prototype.reduce() and recursion using apple pie</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*VsKg3XJwl9mJScFc. 300w,
https://cdn-media-1.freecodecamp.org/images/0*VsKg3XJwl9mJScFc. 600w,
https://cdn-media-1.freecodecamp.org/images/0*VsKg3XJwl9mJScFc. 1000w,
https://cdn-media-1.freecodecamp.org/images/0*VsKg3XJwl9mJScFc. 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*VsKg3XJwl9mJScFc." alt="Understanding Array.prototype.reduce() and recursion using apple pie">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I was having trouble understanding <code>reduce()</code> and recursion in JavaScript, so I wrote this article to explain it to myself (hey, look, recursion!). These concepts share some similarities with making apple pies. I hope you find my examples both helpful and delicious.</p><p>Given an array with nested arrays:</p><pre><code>var arr = [1, [2], [3, [[4]]]]</code></pre><p>We want to produce this:</p><pre><code>var flat = [1, 2, 3, 4]</code></pre><h3 id="using-for-loops-and-if-statements">Using for loops and if statements</h3><p>If we know the maximum number of nested arrays we’ll encounter (there are 4 in this example), we can use <code>for</code> loops to iterate through each array item, then <code>if</code> statements to check whether that item is in itself an array, and so on…</p><pre><code class="language-js">function flatten() {
var flat = [];
for (var i=0; i&lt;arr.length; i++) {
if (Array.isArray(arr[i])) {
for (var ii=0; ii&lt;arr[i].length; ii++) {
if (Array.isArray(arr[i][ii])) {
for (var iii=0; iii&lt;arr[i][ii].length; iii++) {
for (var iiii=0; iiii&lt;arr[i][ii][iii].length; iiii++) {
if (Array.isArray(arr[i][ii][iii])) {
flat.push(arr[i][ii][iii][iiii]);
} else {
flat.push(arr[i][ii][iii]);
}
}
}
} else {
flat.push(arr[i][ii]);
}
}
} else {
flat.push(arr[i]);
}
}
}
// [1, 2, 3, 4]</code></pre><p>…Which works, but is both hard to read and harder to understand. Besides, it only works if you know how many nested arrays to process, and can you imagine having to debug this mess?! (Gee, I think there’s an extra <code>i</code> somewhere.)</p><h3 id="using-reduce">Using reduce</h3><p>JavaScript has a couple methods we can use to make our code more concise and easier to follow. One of these is <code>reduce()</code> and it looks like this:</p><pre><code class="language-js">var flat = arr.reduce(function(done,curr){
return done.concat(curr);
}, []);
if (Array.isArray(arr)) {
return arr.reduce(function(done,curr){
return done.concat(flatten(curr));
}, []);
} else {
return arr;
}
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
