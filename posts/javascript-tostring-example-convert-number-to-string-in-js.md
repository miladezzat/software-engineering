---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c982c740569d1a4ca1892.jpg"
tags: [JavaScript]
description: Sometimes you want to convert one data type into another data
author: "Milad E. Fahmy"
title: "JavaScript toString Example – How to Convert a Number into a String in JS and More"
created: "2021-08-15T19:28:15+02:00"
modified: "2021-08-15T19:28:15+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript toString Example – How to Convert a Number into a String in JS and More</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c982c740569d1a4ca1892.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c982c740569d1a4ca1892.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c982c740569d1a4ca1892.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c982c740569d1a4ca1892.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c982c740569d1a4ca1892.jpg" alt="JavaScript toString Example – How to Convert a Number into a String in JS and More">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Sometimes you want to convert one data type into another data type without changing the values manually.</p>
<p>For instance, you might want to convert a number to a string. JavaScript sometimes does this implicitly.</p>
<p>Like when you use the double equals operator (<code>==</code>), or when you attempt to do something on a value with a data type that is incompatible with the operation. This is called <a href="/news/js-type-coercion-explained-27ba3d9a2839/">Type Coercion</a>.</p>
<p>This said, you can also convert data types explicitly. And I'm going to show you how to do that in this article.</p>
<p>The string data type is a very common data type in JavaScript. For almost every other data type, you need to have a string representation.</p>
<p>Just as you must have seen something similar to <code>"[object Object]"</code> when you use an object in place of an actual string.</p>
<p>In this article, we'll learn what the <code>toString</code> method is, and how to convert a number (and a few other data types) to a string using this method.</p>
<h2 id="thetostringmethod">The <code>toString</code> method</h2>
<p>As the name implies, this method is used to change data to a string. Arrays, numbers, and booleans each have this method which converts their data in various ways. Let's look at them individually now.</p>
<h3 id="howtoconvertanumbertoastring">How to convert a number to a string</h3>
<p>The <code>toString</code> method exists on every number literal. It converts numbers to their string representations. Here's how it is used:</p>
<pre><code class="language-js">const num = 54;
console.log(num.toString())
// "54"
</code></pre>
<p>But there's more to this. The <code>toString</code> method for numbers also accepts a <code>base</code> argument. This argument allows you to convert a number to another base.</p>
<p>The returned value is the string representation of the new number. Here's how it is used:</p>
<pre><code class="language-js">const num = 54;
const num2 = num.toString(2);
console.log(num2);
// "110110"
</code></pre>
<p><code>parseInt</code> is another JavaScript method which in contrast converts strings to their respective number representations. Here's how it works:</p>
<pre><code class="language-js">const numInStr = "54";
const str = "Hello";
console.log(parseInt(numInStr));
// 54
console.log(parseInt(str));
// NaN
</code></pre>
<p>For a variable not similar to a number, <code>parseInt</code> returns <code>Nan</code> as seen above.</p>
<h2 id="howtoconvertanarraytoastringinjavascript">How to convert an array to a string in JavaScript</h2>
<p>Arrays also have the <code>toString</code> method. The returned value of this method is a concatenation of all values of the array (and deep-nested arrays in it) separated by commas. Here's how it is used:</p>
<pre><code class="language-js">const arr = ["javascript", "toString", [1, "deep1", [3, 4, "array"]]];
console.log(arr.toString());
// "javascript,toString,1,deep1,3,4,array"
</code></pre>
<h2 id="howtoconvertanobjecttoastringinjavascript">How to convert an object to a string in JavaScript</h2>
<p>The return value of <code>toString</code> on an object is - just as you may have often come across - <code>"[object Object]"</code>. For example:</p>
<pre><code class="language-js">const obj = {name: 'Object'};
const obj2 = {type: 'data', number: 100};
console.log(obj.toString());
// [object Object]
console.log(obj2.toString());
// [object Object]
</code></pre>
<p>The default conversion of objects to string is <code>[object Object]</code>. Notice that there are two <code>object</code>s there, and not just one? And the other is capitalized?</p>
<p>There are more representations for objects like what follows:</p>
<pre><code class="language-js">function print() {};
const arr = [];
const obj = {};
console.log(
Object.prototype.toString.call(print),
Object.prototype.toString.call(arr),
Object.prototype.toString.call(obj)
)
// [object Function] [object Array] [object Object]
</code></pre>
<p>Functions, Arrays, Objects, and even Dates and Regex are all objects. And each of them has the <code>toString</code> method.</p>
<p>When <code>toString</code> is called on them, it grabs whatever class of Object the value is, and then prints it it like you see above ("Function, Array, Object).</p>
<p>We use <code>call(variable)</code> because the <code>toString</code> gets the object class through the <code>this</code> property.</p>
<h2 id="conclusion">Conclusion</h2>
<p>The <code>.toString</code> method returns a string conversion of the data it is used on. This is very useful for certain cases, especially <code>number</code>s.</p>
<p>In this article, we learned how the JavaScript <code>toString</code> method works with <code>number</code>s, <code>array</code>s and <code>object</code>s and we also looked a little at <code>parseInt</code>.</p>
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
