---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9a9a740569d1a4ca2696.jpg"
tags: [JavaScript]
description: Knowing how to quickly iterate through an array and count obj
author: "Milad E. Fahmy"
title: "How to Count Objects in an Array"
created: "2021-08-15T19:29:33+02:00"
modified: "2021-08-15T19:29:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-arrays tag-object tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">How to Count Objects in an Array</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9a9a740569d1a4ca2696.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a9a740569d1a4ca2696.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a9a740569d1a4ca2696.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a9a740569d1a4ca2696.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9a9a740569d1a4ca2696.jpg" alt="How to Count Objects in an Array">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>Knowing how to quickly iterate through an array and count objects is deceptively simple. The <code>length()</code> method will tell you the total number of values in the array, but what if you only want to count those values based on certain conditions?</p>
<p>For example, imagine you have an array like this:</p><pre><code class="language-js">const storage = [
{ data: '1', status: '0' },
{ data: '2', status: '0' },
{ data: '3', status: '0' },
{ data: '4', status: '0' },
{ data: '5', status: '0' },
{ data: '6', status: '0' },
{ data: '7', status: '1' },
];</code></pre>
<p>And you only want to count the number of objects with <code>status</code> set to <code>'0'</code>.</p>
<p>Like with just about everything in programming, there are a number of ways to do this. We'll go through a few of the common methods below.</p>
<h2 id="use-a-for-loop">Use a <code>for</code> loop</h2>
<p>Probably the easiest way would be to declare a <code>counter</code> variable, loop through the array, and iterate <code>counter</code> only if <code>status</code> is equal to <code>'0'</code>:</p><pre><code class="language-js">const storage = [
{ data: '1', status: '0' },
{ data: '2', status: '0' },
{ data: '3', status: '0' },
{ data: '4', status: '0' },
{ data: '5', status: '0' },
{ data: '6', status: '0' },
{ data: '7', status: '1' },
];
let counter = 0;
for (let i = 0; i &lt; storage.length; i++) {
if (storage[i].status === '0') counter++;
}
console.log(counter); // 6</code></pre>
<p>You could simplify this a bit by using a <code>for...of</code> loop:</p><pre><code class="language-js">const storage = [
{ data: '1', status: '0' },
{ data: '2', status: '0' },
{ data: '3', status: '0' },
{ data: '4', status: '0' },
{ data: '5', status: '0' },
{ data: '6', status: '0' },
{ data: '7', status: '1' },
];
let counter = 0;
for (const obj of storage) {
if (obj.status === '0') counter++;
}
console.log(counter); // 6</code></pre>
<p>Also, you could create a function to do the same thing if you have other arrays of objects to count conditionally:</p><pre><code class="language-js">const storage = [
{ data: '1', status: '0' },
{ data: '2', status: '0' },
{ data: '3', status: '0' },
{ data: '4', status: '0' },
{ data: '5', status: '0' },
{ data: '6', status: '0' },
{ data: '7', status: '1' },
];
function statusCounter(inputs) {
let counter = 0;
for (const input of inputs) {
if (input.status === '0') counter += 1;
}
return counter;
}
statusCounter(storage); // 6</code></pre>
<h2 id="use-array-methods">Use array methods</h2>
<p>JavaScript includes a bunch of <a href="/news/javascript-standard-objects-arrays/">helpful methods</a> when working with arrays. Each one can be chained to an array and passed different parameters to work with while iterating through the elements in the array.</p>
<p>The two we'll look at are <code>filter()</code> and <code>reduce()</code>.</p>
<h3 id="filter-"><code>filter()</code></h3>
<p>The filter method does just that – it iterates through each element in the array and filters out all elements that don't meet the condition(s) you provide. It then returns a new array with all the elements that returned true based on your condition(s).</p>
<p>For example:</p><pre><code class="language-js">const storage = [
{ data: '1', status: '0' },
{ data: '2', status: '0' },
{ data: '3', status: '0' },
{ data: '4', status: '0' },
{ data: '5', status: '0' },
{ data: '6', status: '0' },
{ data: '7', status: '1' },
];
const count = storage.filter(function(item){
if (item.status === 0) {
return true;
} else {
return false;
}
});
/*
[
{ data: '1', status: '0' },
{ data: '2', status: '0' },
{ data: '3', status: '0' },
{ data: '4', status: '0' },
{ data: '5', status: '0' },
{ data: '6', status: '0' }
]
*/</code></pre>
<p>Now that you've filtered out the object with <code>status: '1'</code>, just call the <code>length()</code> method on the new array to get the total count of objects with <code>status: '1'</code>:</p><pre><code class="language-js">const storage = [
{ data: '1', status: '0' },
{ data: '2', status: '0' },
{ data: '3', status: '0' },
{ data: '4', status: '0' },
{ data: '5', status: '0' },
{ data: '6', status: '0' },
{ data: '7', status: '1' },
];
const count = storage.filter(function(item){
if (item.status === 0) {
return true;
} else {
return false;
}
}).length; // 6</code></pre>
<p>But this can be shortened a lot with ES6 syntax:</p><pre><code class="language-js">const storage = [
{ data: '1', status: '0' },
{ data: '2', status: '0' },
{ data: '3', status: '0' },
{ data: '4', status: '0' },
{ data: '5', status: '0' },
{ data: '6', status: '0' },
{ data: '7', status: '1' },
];
const count = storage.filter(item =&gt; item.status === '0').length; // 6</code></pre>
<h3 id="reduce-"><code>reduce()</code></h3>
<p>Think of the <code>reduce()</code> method like a Swiss army knife – it's extremely flexible, and lets you take an array as input and transform it into just about anything. Even better, like <code>filter()</code>, this method returns a new array, leaving the original unchanged.</p>
<p>You can read more about <code>reduce()</code> in <a href="/news/the-ultimate-guide-to-javascript-array-methods-reduce/">this article</a>.</p>
<p>For our purposes, we want to take an array, examine its contents, and produce a number. Here's a simple way to do that:</p><pre><code class="language-js">const storage = [
{ data: '1', status: '0' },
{ data: '2', status: '0' },
{ data: '3', status: '0' },
{ data: '4', status: '0' },
{ data: '5', status: '0' },
{ data: '6', status: '0' },
{ data: '7', status: '1' },
];
const count = storage.reduce((counter, obj) =&gt; {
if (obj.status === '0') counter += 1
return counter;
}, 0); // 6</code></pre>
<p>You could simplify further by using ES6 syntax and a ternary operator:</p><pre><code class="language-js">const storage = [
{ data: '1', status: '0' },
{ data: '2', status: '0' },
{ data: '3', status: '0' },
{ data: '4', status: '0' },
{ data: '5', status: '0' },
{ data: '6', status: '0' },
{ data: '7', status: '1' },
];
const count = storage.reduce((counter, obj) =&gt; obj.status === '0' ? counter += 1 : counter, 0); // 6</code></pre>
<p>And even a bit more by using <a href="/news/array-and-object-destructuring-in-javascript/">object destructuring</a>: </p><pre><code class="language-js">const storage = [
{ data: '1', status: '0' },
{ data: '2', status: '0' },
{ data: '3', status: '0' },
{ data: '4', status: '0' },
{ data: '5', status: '0' },
{ data: '6', status: '0' },
{ data: '7', status: '1' },
];
const count = storage.reduce((counter, { status }) =&gt; status === '0' ? counter += 1 : counter, 0); // 6</code></pre>
<p>So those are a few ways to go through the elements of an array and count them conditionally. Now get out there and count with confidence!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
