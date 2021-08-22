---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9a97740569d1a4ca2681.jpg"
tags: [JavaScript]
description: If you're having trouble understanding freeCodeCamp's Nesting
author: "Milad E. Fahmy"
title: "Nesting For Loops in JavaScript"
created: "2021-08-15T19:29:32+02:00"
modified: "2021-08-15T19:29:32+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-loops tag-tutorial tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">Nesting For Loops in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9a97740569d1a4ca2681.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a97740569d1a4ca2681.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a97740569d1a4ca2681.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a97740569d1a4ca2681.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9a97740569d1a4ca2681.jpg" alt="Nesting For Loops in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>If you're having trouble understanding freeCodeCamp's <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/nesting-for-loops">Nesting For Loops</a> challenge, don't worry. We got your back.</p>
<p>In this problem you have to complete the <code>multiplyAll()</code> function, and takes a multi-dimensional array as an argument. Remember that a multi-dimensional array, sometimes called a 2D array, is just an array of arrays, for example, <code>[[1,2], [3,4], [5,6]]</code>.</p>
<p>In the editor on the right, <code>multiplyAll()</code> is defined as follows:</p><pre><code class="language-js">function multiplyAll(arr) {
var product = 1;
// Only change code below this line
// Only change code above this line
return product;
}
multiplyAll([[1,2],[3,4],[5,6,7]]);
</code></pre>
<p>You need to complete the function so it multiplies the <code>product</code> variable by each number in the sub-arrays of the parameter <code>arr</code>, which is a multi-dimensional array.</p>
<p>There are a lot of different ways to solve this problem, but we'll focus on the simplest method using <code>for</code> loops.</p>
<h2 id="set-up-your-for-loops">Set up your <code>for</code> loops</h2>
<p>Because <code>arr</code> is a multi-dimensional array, you'll need two <code>for</code> loops: one to loop through each of the sub-arrays arrays, and another to loop through the elements in each sub-array.</p>
<h3 id="loop-through-the-inner-arrays">Loop through the inner arrays</h3>
<p>To do this, set up a <code>for</code> loop like you've done in previous challenges:</p><pre><code class="language-js">function multiplyAll(arr) {
let product = 1;
// Only change code below this line
for (let i = 0; i &lt; arr.length; i++) {
}
// Only change code above this line
return product;
}
multiplyAll([[1,2],[3,4],[5,6,7]]);
</code></pre>
<p>Note that we're using <code>let</code> instead of <code>var</code> for the loop and to declare <code>product</code>. In this challenge you won't notice a difference between the two, but generally it's good practice to use ES6's <code>const</code> and <code>let</code> whenever you can. You can read more about why <a href="/news/var-let-and-const-whats-the-difference/">in this article</a>.</p>
<p>Now log each of the sub-arrays to the console:</p><pre><code class="language-js">function multiplyAll(arr) {
let product = 1;
// Only change code below this line
for (let i = 0; i &lt; arr.length; i++) {
console.log(arr[i]);
}
// Only change code above this line
return product;
}
multiplyAll([[1,2],[3,4],[5,6,7]]);
</code></pre>
<p>Because you're calling <code>multiplyAll()</code> with <code>[[1,2],[3,4],[5,6,7]]</code> at the bottom, you should see the following:</p><pre><code>[ 1, 2 ]
[ 3, 4 ]
[ 5, 6, 7 ]</code></pre>
<h3 id="loop-through-the-elements-in-each-sub-array">Loop through the elements in each sub-array</h3>
<p>Now you need to loop through each number in the sub-arrays you just logged to the console.</p>
<p>Remove <code>console.log(arr[i]);</code> and create another <code>for</code> loop inside of the one you just wrote:</p><pre><code class="language-js">function multiplyAll(arr) {
let product = 1;
// Only change code below this line
for (let i = 0; i &lt; arr.length; i++) {
for (let j = 0; j &lt; arr[i].length; j++) {
}
}
// Only change code above this line
return product;
}
multiplyAll([[1,2],[3,4],[5,6,7]]);
</code></pre>
<p>Remember that, for the inner loop, we need to check the <code>.length</code> of <code>arr[i]</code> since <code>arr[i]</code> is one of the sub-arrays we looked at earlier.</p>
<p>Now log <code>arr[i][j]</code> to the console to see each of the individual elements:</p><pre><code class="language-js">function multiplyAll(arr) {
let product = 1;
// Only change code below this line
for (let i = 0; i &lt; arr.length; i++) {
for (let j = 0; j &lt; arr[i].length; j++) {
console.log(arr[i][j]);
}
}
// Only change code above this line
return product;
}
multiplyAll([[1,2],[3,4],[5,6,7]]);
</code></pre><pre><code>1
2
3
4
5
6
7</code></pre>
<p>Finally, multiply <code>product</code> by every element in each of the sub-arrays:</p><pre><code class="language-js">function multiplyAll(arr) {
let product = 1;
// Only change code below this line
for (let i = 0; i &lt; arr.length; i++) {
for (let j = 0; j &lt; arr[i].length; j++) {
product *= arr[i][j];
}
}
// Only change code above this line
return product;
}
multiplyAll([[1,2],[3,4],[5,6,7]]);</code></pre>
<p>If you log <code>product</code> to the console, you'll see the correct answer for each test case:</p><pre><code>function multiplyAll(arr) {
let product = 1;
// Only change code below this line
for (let i = 0; i &lt; arr.length; i++) {
for (let j = 0; j &lt; arr[i].length; j++) {
product *= arr[i][j];
}
}
// Only change code above this line
console.log(product);
return product;
}
multiplyAll([[1,2],[3,4],[5,6,7]]);</code></pre><pre><code>6  // [[1], [2], [3]]
5040  // [[1, 2], [3, 4], [5, 6, 7]]
54  // [[5, 1], [0.2, 4, 0.5], [3, 9]]</code></pre>
<h2 id="a-closer-look">A closer look</h2>
<p>If you're still not sure why the code above works, don't worry – you're not alone. Working with nested loops is complicated, and even experienced developers can get confused.</p>
<p>In cases like this, it can be helpful to log something more detailed to the console. Go back to your code and log <code>`Sub-array ${i}: ${arr[i]}`</code> to the console just before the inner <code>for</code> loop:</p><pre><code class="language-js">function multiplyAll(arr) {
let product = 1;
// Only change code below this line
for (let i = 0; i &lt; arr.length; i++) {
console.log(`Sub-array ${i}: ${arr[i]}`);
for (let j = 0; j &lt; arr[i].length; j++) {
product *= arr[i][j];
}
}
// Only change code above this line
return product;
}
multiplyAll([[1,2],[3,4],[5,6,7]]);</code></pre>
<p>In the outer <code>for</code> loop, each iteration goes through the sub-arrays in <code>arr</code>. You should see this in the console:</p><pre><code>Sub-array 0: 1,2
Sub-array 1: 3,4
Sub-array 2: 5,6,7</code></pre>
<p>Note that we're using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals">template literals</a> above. <code>`Sub-array ${i}: ${arr[i]}`</code> is the same as <code>'Sub-array ' + i + ': ' + arr[i]</code>, just much easier to write.</p>
<p>Now in the inner <code>for</code> loop, log <code>`Element ${j}: ${arr[i][j]}`</code> to the console:</p><pre><code class="language-js">function multiplyAll(arr) {
let product = 1;
// Only change code below this line
for (let i = 0; i &lt; arr.length; i++) {
console.log(`Sub-array ${i}: ${arr[i]}`);
for (let j = 0; j &lt; arr[i].length; j++) {
console.log(`Element ${j}: ${arr[i][j]}`);
product *= arr[i][j];
}
}
// Only change code above this line
return product;
}
multiplyAll([[1,2],[3,4],[5,6,7]]);</code></pre>
<p>The inner <code>for</code> loop goes through each element in each sub-array (<code>arr[i]</code>), so you should see this in the console:</p><pre><code>Sub-array 0: 1,2
Element 0: 1
Element 1: 2
Sub-array 1: 3,4
Element 0: 3
Element 1: 4
Sub-array 2: 5,6,7
Element 0: 5
Element 1: 6
Element 2: 7</code></pre>
<p>The first iteration of <code>i</code> grabs the first sub-array, <code>[1, 2]</code>. Then the first iteration of <code>j</code> goes through each element in that sub-array:</p><pre><code>// i is 0
arr[0] // [1, 2];
// j is 0
arr[0][0] // 1
// j is 1
arr[0][1] // 2
-----
// i is 1
arr[1] // [3, 4]
// j is 0
arr[1][0] // 3
// j is 1
arr[1][1] // 4
...</code></pre>
<p>This example is pretty simple, but <code>arr[i][j]</code> can still be difficult to understand without logging multiple things to the console.</p>
<p>One quick improvement we can make is declaring a <code>subArray</code> variable in the outer <code>for</code> loop and setting it equal to <code>arr[i]</code>:</p><pre><code class="language-js">function multiplyAll(arr) {
let product = 1;
// Only change code below this line
for (let i = 0; i &lt; arr.length; i++) {
const subArray = arr[i];
for (let j = 0; j &lt; arr[i].length; j++) {
product *= arr[i][j];
}
}
// Only change code above this line
return product;
}
multiplyAll([[1,2],[3,4],[5,6,7]]);
</code></pre>
<p>Then just make a few tweaks to the code to use the new <code>subArray</code> variable instead of <code>arr[i]</code>:</p><pre><code class="language-js">function multiplyAll(arr) {
let product = 1;
// Only change code below this line
for (let i = 0; i &lt; arr.length; i++) {
const subArray = arr[i];
for (let j = 0; j &lt; subArray.length; j++) {
product *= subArray[j];
}
}
// Only change code above this line
return product;
}
multiplyAll([[1,2],[3,4],[5,6,7]]);
</code></pre>
<p>That should be everything you need to know about multi-dimensional arrays and nested <code>for</code> loops. Now get out there and iterate with the best of 'em!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
