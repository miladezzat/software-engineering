---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9f75740569d1a4ca42b1.jpg"
tags: [JavaScript]
description: Map, reduce, and filter are all array methods in JavaScript.
author: "Milad E. Fahmy"
title: "JavaScript Map, Reduce, and Filter - JS Array Functions Explained with Code Examples"
created: "2021-08-15T19:32:14+02:00"
modified: "2021-08-15T19:32:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-functional-programming ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Map, Reduce, and Filter - JS Array Functions Explained with Code Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9f75740569d1a4ca42b1.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9f75740569d1a4ca42b1.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9f75740569d1a4ca42b1.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9f75740569d1a4ca42b1.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9f75740569d1a4ca42b1.jpg" alt="JavaScript Map, Reduce, and Filter - JS Array Functions Explained with Code Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Map, reduce, and filter are all array methods in JavaScript. Each one will iterate over an array and perform a transformation or computation. Each will return a new array based on the result of the function. In this article, you will learn why and how to use each one.</p>
<p>Here is a fun summary by Steven Luscher:</p>
<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">Map/filter/reduce in a tweet:<br><br>map([?, ?, ?], cook)<br>=&gt; [?, ?, ?]<br><br>filter([?, ?, ?], isVegetarian)<br>=&gt; [?, ?]<br><br>reduce([?, ?], eat)<br>=&gt; ?</p>— Steven Luscher (@steveluscher) <a href="https://twitter.com/steveluscher/status/741089564329054208?ref_src=twsrc%5Etfw">June 10, 2016</a>
</blockquote>
</figure>
<h2 id="map-function map() { [native code] }1">Map</h2>
<p>The <code>map()</code> method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.</p>
<h3 id="syntax">Syntax</h3><pre><code class="language-javascript">var new_array = arr.map(function callback(element, index, array) {
// Return value for new_array
}[, thisArg])</code></pre>
<p>In the callback, only the array <code>element</code> is required. Usually some action is performed on the value and then a new value is returned.</p>
<h3 id="example">Example </h3>
<p>In the following example, each number in an array is doubled.</p><pre><code class="language-javascript">const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item =&gt; item * 2);
console.log(doubled); // [2, 4, 6, 8]</code></pre>
<h2 id="filter-function filter() { [native code] }1">Filter</h2>
<p>The <code>filter()</code> method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array. </p>
<h3 id="syntax-1">Syntax</h3><pre><code class="language-javascript">var new_array = arr.filter(function callback(element, index, array) {
// Return true or false
}[, thisArg])</code></pre>
<p>The syntax for <code>filter</code> is similar to <code>map</code>, except the callback function should return <code>true</code> to keep the element, or <code>false</code> otherwise. In the callback, only the <code>element</code> is required. </p>
<h3 id="examples">Examples</h3>
<p>In the following example, odd numbers are "filtered" out, leaving only even numbers.</p><pre><code class="language-javascript">const numbers = [1, 2, 3, 4];
const evens = numbers.filter(item =&gt; item % 2 === 0);
console.log(evens); // [2, 4]</code></pre>
<p>In the next example, <code>filter()</code> is used to get all the students whose grades are greater than or equal to 90.</p><pre><code class="language-javascript">const students = [
{ name: 'Quincy', grade: 96 },
{ name: 'Jason', grade: 84 },
{ name: 'Alexis', grade: 100 },
{ name: 'Sam', grade: 65 },
{ name: 'Katie', grade: 90 }
];
const studentGrades = students.filter(student =&gt; student.grade &gt;= 90);
return studentGrades; // [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ]</code></pre>
<h2 id="reduce-function reduce() { [native code] }1">Reduce</h2>
<p>The <code>reduce()</code> method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.</p>
<h3 id="syntax-2"><strong>Syntax</strong></h3><pre><code class="language-javascript">arr.reduce(callback[, initialValue])</code></pre>
<p>The <code>callback</code> argument is a function that will be called once for every item in the array. This function takes four arguments, but often only the first two are used.</p>
<ul>
<li><em>accumulator</em> - the returned value of the previous iteration</li>
<li><em>currentValue</em> - the current item in the array</li>
<li><em>index</em> - the index of the current item</li>
<li><em>array</em> - the original array on which reduce was called</li>
<li>The <code>initialValue</code> argument is optional. If provided, it will be used as the initial accumulator value in the first call to the callback function.</li>
</ul>
<h3 id="examples-1">Examples</h3>
<p>The following example adds every number together in an array of numbers.</p><pre><code class="language-javascript">const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (result, item) {
return result + item;
}, 0);
console.log(sum); // 10</code></pre>
<p>In the next example, <code>reduce()</code> is used to transform an array of strings into a single object that shows how many times each string appears in the array. Notice this call to reduce passes an empty object <code>{}</code> as the <code>initialValue</code> parameter. This will be used as the initial value of the accumulator (the first argument) passed to the callback function.</p><pre><code class="language-javascript">var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
var petCounts = pets.reduce(function(obj, pet){
if (!obj[pet]) {
obj[pet] = 1;
} else {
obj[pet]++;
}
return obj;
}, {});
console.log(petCounts);
/*
Output:
{
dog: 2,
chicken: 3,
cat: 1,
rabbit: 1
}
*/</code></pre>
<h2 id="video-explanation">Video Explanation</h2>
<p>Check out the video below from the freeCodeCamp.org YouTube channel. It covers the array methods discussed, plus a few more.</p>
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
