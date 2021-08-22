---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9df3740569d1a4ca3a91.jpg"
tags: [JavaScript]
description: length is a property of arrays in JavaScript that returns or
author: "Milad E. Fahmy"
title: "JavaScript Array Length Explained"
created: "2021-08-15T19:31:24+02:00"
modified: "2021-08-15T19:31:24+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-arrays ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Array Length Explained</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9df3740569d1a4ca3a91.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9df3740569d1a4ca3a91.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9df3740569d1a4ca3a91.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9df3740569d1a4ca3a91.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9df3740569d1a4ca3a91.jpg" alt="JavaScript Array Length Explained">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p><code>length</code> is a property of arrays in JavaScript that returns or sets the number of elements in a given array.</p>
<p>The <code>length</code> property of an array can be returned like so.</p><pre><code class="language-js">let desserts = ["Cake", "Pie", "Brownies"];
console.log(desserts.length); // 3</code></pre>
<p>The assignment operator, in conjunction with the <code>length</code> property, can be used to set the number of elements in an array like so.</p><pre><code class="language-js">let cars = ["Saab", "BMW", "Volvo"];
cars.length = 2;
console.log(cars.length); // 2</code></pre>
<h2 id="more-info-about-arrays-">More info about arrays:</h2>
<h3 id="isarray-method">isArray() method</h3>
<p>The <code>Array.isArray()</code> method returns <code>true</code> if an object is an array, <code>false</code> if it is not.</p>
<p><strong>Syntax:</strong></p><pre><code class="language-text">Array.isArray(obj)</code></pre>
<p><strong>Parameters:</strong></p>
<p><strong><strong>obj</strong></strong> The object to be checked.</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray" rel="nofollow">MDN link</a> | <a href="https://msdn.microsoft.com/en-us/LIBRary/ff848265%28v=vs.94%29.aspx" rel="nofollow">MSDN link</a></p>
<p><strong>Examples:</strong></p><pre><code class="language-text">// all following calls return true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
// Little known fact: Array.prototype itself is an array:
Array.isArray(Array.prototype);
// all following calls return false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray({ __proto__: Array.prototype });</code></pre>
<h3 id="array-prototype-foreach">Array.prototype.forEach</h3>
<p>The ‘forEach’ array method is used to iterate through each item in an array. The method is called on the array Object and is passed a function that is called on each item in the array.</p><pre><code class="language-javascript">var arr = [1, 2, 3, 4, 5];
arr.forEach(number =&gt; console.log(number * 2));
// 2
// 4
// 6
// 8
// 10</code></pre>
<p>The callback function can also take a second parameter of an index in case you need to reference the index of the current item in the array.</p><pre><code class="language-javascript">var arr = [1, 2, 3, 4, 5];
arr.forEach((number, i) =&gt; console.log(`${number} is at index ${i}`));
// '1 is at index 0'
// '2 is at index 1'
// '3 is at index 2'
// '4 is at index 3'
// '5 is at index 4'</code></pre>
<h2 id="further-reading-about-arrays-">Further reading about arrays:</h2>
<p><a href="https://guide.freecodecamp.org/javascript/standard-objects/array/array-prototype-filter/">array.prototype.filter</a></p>
<p><a href="https://guide.freecodecamp.org/javascript/standard-objects/array/array-prototype-reduce/">array.prototype.reduce</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
