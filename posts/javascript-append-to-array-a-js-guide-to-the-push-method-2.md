---
card: "https://cdn-media-2.freecodecamp.org/w1280/604b89aba7946308b768767f.jpg"
tags: [JavaScript]
description: Sometimes you need to append one or more new values at the en
author: "Milad E. Fahmy"
title: "JavaScript Append to Array: a JS Guide to the Push Method"
created: "2021-08-15T19:26:34+02:00"
modified: "2021-08-15T19:26:34+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-arrays ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Append to Array: a JS Guide to the Push Method</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/604b89aba7946308b768767f.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/604b89aba7946308b768767f.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/604b89aba7946308b768767f.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/604b89aba7946308b768767f.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/604b89aba7946308b768767f.jpg" alt="JavaScript Append to Array: a JS Guide to the Push Method">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Sometimes you need to append one or more new values at the end of an array. In this situation the <code>push()</code> method is what you need.</p>
<p>The <code>push()</code> method will add one or more arguments at the end of an array in JavaScript:</p><pre><code class="language-JavaScript">let arr = [0, 1, 2, 3];
arr.push(4);
console.log(arr); // [0, 1, 2, 3, 4]</code></pre>
<p>This method accepts an unlimited number of arguments, and you can add as many elements as you want at the end of the array.</p><pre><code>let arr = [0, 1, 2, 3];
arr.push(4, 5, 6, 7, 8, 9);
console.log(arr); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]</code></pre>
<p>The <code>push()</code> method also returns the new length of the array.</p><pre><code>let arr = [0, 1, 2, 3];
let newLength = arr.push(4);
console.log(newLength); // 5</code></pre>
<h2 id="examples-of-push-in-javascript-and-common-errors">Examples of <code>push</code> in JavaScript and common errors</h2>
<h3 id="how-to-reassign-the-array">How to reassign the array</h3>
<p> Reassigning the array with the output from <code>push</code> is a common error.</p><pre><code class="language-JavaScript">let arr = [0, 1, 2, 3];
arr = arr.push(4);
console.log(arr); // 5</code></pre>
<p>To avoid this error you need to remember that <code>push</code> &nbsp;changes the array, and returns the new length. If you reassign the variable with the return value from <code>push()</code> you are overwriting the array value.</p>
<h3 id="how-to-add-the-contents-of-one-array-to-the-end-of-another">How to add the contents of one array to the end of another</h3>
<p>If you want to add the content of an array to the end of another, <code>push</code> is a possible method to use. <code>push</code> will add as new elements whatever you use as an argument. This is the same also for another array, so the array has to be unpacked with the spread operator:</p><pre><code class="language-JavaScript">let arr1 = [0, 1, 2, 3];
let arr2 = [4, 5, 6, 7];
arr1.push(...arr2);
console.log(arr1); // [0, 1, 2, 3, 4, 5, 6, 7]</code></pre>
<h3 id="how-to-use-push-on-an-array-like-object">How to use <code>push</code> on an array-like object</h3>
<p>There are objects that are similar to arrays (like the <code>arguments</code> object – the object that allows access to all arguments of a function), but that do not have all methods that arrays have. </p>
<p>To be able to use <code>push</code> or other array methods on these, first they have to be converted to arrays.</p><pre><code>function myFunc() {
let args = [...arguments];
args.push(4);
returns args;
}
console.log(myFunc(0, 1, 2, 3)); // [0, 1, 2, 3, 4]</code></pre>
<p>If you don't first change the array-like <code>arguments</code> object to an array, the code would stop with a <code>TypeError: arguments.push is not a function</code>.</p>
<h2 id="conclusion">Conclusion</h2>
<p>If you work with arrays, don't miss out on <code>push</code>. It adds one or more elements at the end of an array and returns the new length of the array.</p>
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
