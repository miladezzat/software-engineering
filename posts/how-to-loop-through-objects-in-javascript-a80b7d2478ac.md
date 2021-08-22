---
card: "https://cdn-media-1.freecodecamp.org/images/1*_H9NgZvI5oB0dEpzaQLjeg.jpeg"
tags: [JavaScript]
description: "Once in a while, you may need to loop through objects in Java"
author: "Milad E. Fahmy"
title: "How to loop through objects in JavaScript"
created: "2021-08-16T11:41:27+02:00"
modified: "2021-08-16T11:41:27+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-programming tag-es6 tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to loop through objects in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*_H9NgZvI5oB0dEpzaQLjeg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*_H9NgZvI5oB0dEpzaQLjeg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*_H9NgZvI5oB0dEpzaQLjeg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*_H9NgZvI5oB0dEpzaQLjeg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*_H9NgZvI5oB0dEpzaQLjeg.jpeg" alt="How to loop through objects in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Once in a while, you may need to loop through objects in JavaScript. The only way to do so before ES6 was with a <code>for...in</code> loop.</p><p>The problem with a <code>for...in</code> loop is that it iterates through properties in the Prototype chain. When you loop through an object with the <code>for...in</code> loop, you need to check if the property belongs to the object. You can do this with <code>hasOwnProperty</code>.</p><pre><code class="language-js">for (var property in object) {  if (object.hasOwnProperty(property)) {    // Do things here  }}</code></pre><p>We no longer have to rely on <code>for...in</code> and <code>hasOwnProperty</code> now. There’s a better way.</p><h3 id="a-better-way-to-loop-through-objects">A better way to loop through objects</h3><p>The better way to loop through objects is <strong>first to convert the object into an array. Then, you loop through the array.</strong></p><p>You can convert an object into an array with three methods:</p><ol><li><code>Object.keys</code></li><li><code>Object.values</code></li><li><code>Object.entries</code></li></ol><h4 id="object-keys">Object.keys</h4><p><code>Object.keys</code> creates an array that contains the properties of an object. Here’s an example.</p><pre><code class="language-js">const fruits = { apple: 28, orange: 17, pear: 54 };
const keys = Object.keys(fruits);
console.log(keys); // ["apple", "orange", "pear"]</code></pre><h4 id="object-values">Object.values</h4><p><code>Object.values</code> creates an array that contains the values of every property in an object. Here’s an example:</p><pre><code class="language-js">const fruits = { apple: 28, orange: 17, pear: 54 };
const values = Object.values(fruits);
console.log(values); // [28, 17, 54]</code></pre><h4 id="object-entries">Object.entries</h4><p><code>Object.entries</code> creates an array of arrays. Each inner array has two items. The first item is the property; the second item is the value.</p><p>Here’s an example:</p><pre><code class="language-js">const fruits = { apple: 28, orange: 17, pear: 54 };
const entries = Object.entries(fruits);
console.log(entries); // [["apple", 28], ["orange", 17], ["pear", 54]]</code></pre><p>My favorite of the three is <code>Object.entries</code>, because you get both the key and property values.</p><h3 id="looping-through-the-array">Looping through the array</h3><p>Once you’ve converted the object into an array with <code>Object.keys</code>, <code>Object.values</code>, or <code>Object.entries</code>, you can loop through it as if it was a normal array.</p><pre><code class="language-js">const fruits = { apple: 28, orange: 17, pear: 54 };
// Looping through arrays created from Object.keys
const keys = Object.keys(fruits);
for (const key of keys) {
console.log(keys);
}
// ["apple", "orange", "pear"]
// ["apple", "orange", "pear"]
// ["apple", "orange", "pear"]</code></pre><p>If you use <code>Object.entries</code>, you might want to <a href="https://zellwk.com/blog/es6" rel="noopener">destructure</a> the array into its key and property.</p><pre><code>const fruits = { apple: 28, orange: 17, pear: 54 };
const entries = Object.entries(fruits);
for (const [fruit, count] of entries) {
console.log(`There are ${count} ${fruit}s`);
}
// "There are 28 apples"
// "There are 17 oranges"
// "There are 54 pears"</code></pre><h3 id="wrapping-up">Wrapping up</h3><p>The better way to loop through objects is first convert it into an array with one of these three methods.</p><ol><li><code>Object.keys</code></li><li><code>Object.values</code></li><li><code>Object.entries</code></li></ol><p>Then, you loop through the results like a normal array.</p><p>If this lesson has helped you, might enjoy <a href="https://learnjavascript.today/" rel="noopener">Learn JavaScript</a>, where you’ll learn how to build anything you want from scratch. Enrollment for Learn JavaScript opens in July 2018 (very soon!).</p><p>Thanks for reading. Did this article help you in any way? If I did, <a href="http://twitter.com/share?text=Looping%20through%20objects%20in%20JavaScript%20by%20@zellwk%20?%20&amp;url=https://zellwk.com/blog/looping-through-js-objects/&amp;hashtags=" rel="noopener">I hope you consider sharing it</a>; you might just help someone who felt the same way you did before reading the article. Thank you.</p><p>This article was originally posted at<em> <a href="https://zellwk.com/blog/looping-through-js-objects" rel="noopener">my blog</a>. </em>Sign up for my<a href="https://zellwk.com/" rel="noopener"> newsletter</a> if you want more articles to help you become a better frontend developer.</p>
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
