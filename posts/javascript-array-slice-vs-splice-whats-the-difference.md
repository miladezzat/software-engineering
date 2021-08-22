---
card: "/images/default.jpg"
tags: [JavaScript]
description: This title could have been "how not to get confused between J
author: "Milad E. Fahmy"
title: "JavaScript Array Slice vs Splice: the Difference Explained with Cake"
created: "2021-08-15T19:28:45+02:00"
modified: "2021-08-15T19:28:45+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-arrays ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Array Slice vs Splice: the Difference Explained with Cake</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/08/dilyara-garifullina-I48gnI1Qs5o-unsplash.jpg 300w,
/news/content/images/size/w600/2020/08/dilyara-garifullina-I48gnI1Qs5o-unsplash.jpg 600w,
/news/content/images/size/w1000/2020/08/dilyara-garifullina-I48gnI1Qs5o-unsplash.jpg 1000w,
/news/content/images/size/w2000/2020/08/dilyara-garifullina-I48gnI1Qs5o-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/08/dilyara-garifullina-I48gnI1Qs5o-unsplash.jpg" alt="JavaScript Array Slice vs Splice: the Difference Explained with Cake">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>This title could have been "how not to get confused between JavaScript's splice and slice," because I can never remember the difference between the two.</p>
<p>So I am hoping this trick will help both me and you in the future:</p>
<pre><code>S (p) lice = Slice + (p) =&gt; Slice + in (p) lace
</code></pre>
<h2 id="arrayprototypeslice">Array.prototype.slice()</h2>
<p>Array.prototype.slice() is used to slice an array from the <code>start</code> point to the <code>end</code> point, excluding the <code>end</code>.</p>
<p>As the name suggests, it is used to slice elements out of an array. But unlike slicing a cake, slicing an array does not cut the actual array, but keeps it unmodified (infinite cake!).</p>
<pre><code class="language-JS">arr.slice(start, [end])
</code></pre>
<p>Rules</p>
<ol>
<li>A new array is returned and the original array is unmodified.</li>
<li>If <code>end</code> is omitted, end becomes the end (last element) of the array.</li>
<li>If <code>start</code> is -ve, the elements are counted from the end.</li>
</ol>
<pre><code class="language-JS">const infiniteCake = ['?','?','?','?','?','?']
let myPieceOfCake = infiniteCake.slice(0,1) // ['?']
let yourDoublePieceOfCake = infiniteCake.slice(0,2) // (2)&nbsp;["?", "?"]
console.log(infiniteCake) //['?','?','?','?','?','?']
</code></pre>
<p>As you see, <code>inifinteCake</code> is unmodified.</p>
<h2 id="arrayprototypesplice">Array.prototype.splice()</h2>
<p>Splice does operations <strong>in place</strong>, which means it modifies the exisiting array.</p>
<p>In addition to removing elements, splice is also used to add elements. Splice is the real world cake "slice":</p>
<pre><code class="language-JS">arr.splice(start, [deleteCount, itemToInsert1, itemToInsert2, ...])
</code></pre>
<p>Rules</p>
<ol>
<li>Operations are performed in place.</li>
<li>An array is returned with the deleted items.</li>
<li>If <code>start</code> is -ve, the elements are counted from the end.</li>
<li>If <code>deleteCount</code>is omitted,the elements until the end of the array are removed.</li>
<li>If items to insert such as <code>itemToInsert1</code> are omitted, elements are only removed.</li>
</ol>
<pre><code class="language-JS">const cake = ['?','?','?','?','?','?'];
let myPieceOfCake = cake.splice(0, 1) // ["?"]
console.log(cake) // (5)&nbsp;["?", "?", "?", "?", "?"]
let yourDoublePieceOfCake = cake.splice(0,2) //(2)&nbsp;["?", "?"]
console.log(cake) //(3)&nbsp;["?", "?", "?"]
</code></pre>
<p>Here, <code>cake</code> is modified and reduces in size.</p>
<h2 id="codeexamples">Code Examples</h2>
<pre><code class="language-JS">const myArray  = [1,2,3,4,5,6,7]
console.log(myArray.slice(0))       // [ 1, 2, 3, 4, 5, 6, 7 ]
console.log(myArray.slice(0, 1))    // [ 1 ]
console.log(myArray.slice(1))       // [ 2, 3, 4, 5, 6, 7 ]
console.log(myArray.slice(5))       // [ 6, 7 ]
console.log(myArray.slice(-1))      // [ 7 ]
console.log(myArray)                // [ 1, 2, 3, 4, 5, 6, 7 ]
const secondArray = [10, 20, 30, 40, 50]
console.log(secondArray.splice(0, 1))   // [ 10 ] : deletes 1 element starting at index 0
console.log(secondArray.splice(-2, 1))  // [ 40 ] : deletes 1 element starting at index end-2
console.log(secondArray)                // [ 20, 30, 50 ]
console.log(secondArray.splice(0))      // [ 20, 30, 50 ] : deletes all elements starting at index 0
console.log(secondArray)                // []
console.log(secondArray.splice(2, 0, 60, 70)) // [] : deletes 0 elements starting at index 2 (doesn't exist so defaults to 0) and then inserts 60, 70
console.log(secondArray)                // [60, 70]
</code></pre>
<h2 id="tldr">TL;DR</h2>
<p>Use <code>splice</code> if the original array needs to be modified, or elements need to be added.</p>
<p>Use <code>slice</code> for removing elements if the original array should not be modified.</p>
<hr>
<p>Interested in more tutorials and JSBytes from me? <a href="https://tinyletter.com/shrutikapoor">Sign up for my newsletter.</a> or <a href="https://twitter.com/shrutikapoor08">follow me on Twitter</a></p>
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
