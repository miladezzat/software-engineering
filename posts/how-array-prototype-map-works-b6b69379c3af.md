---
card: "https://cdn-media-1.freecodecamp.org/images/1*sxqOoI2RvGq8n7MYwoWX-w.jpeg"
tags: [JavaScript]
description: "by Pradeep Pothineni"
author: "Milad E. Fahmy"
title: "How array.prototype.map() works"
created: "2021-08-15T23:45:24+02:00"
modified: "2021-08-15T23:45:24+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-programming tag-coding tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">How array.prototype.map() works</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*sxqOoI2RvGq8n7MYwoWX-w.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*sxqOoI2RvGq8n7MYwoWX-w.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*sxqOoI2RvGq8n7MYwoWX-w.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*sxqOoI2RvGq8n7MYwoWX-w.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*sxqOoI2RvGq8n7MYwoWX-w.jpeg" alt="How array.prototype.map() works">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
// pass a function to map
const map1 = array1.map(x =&gt; x * 2);
console.log(map1);
// expected output: Array [2, 8, 18, 32]</code></pre><h4 id="implementation"><strong>Implementation</strong></h4><p>Let’s pick the implementation right from the horse’s mouth and try dissecting it. Below is the MDN polyfill. Spend some time understanding the code and copy it and run it on your machine. If you are a beginner/intermediate JavaScript developer, you will surely run into at least couple of questions.</p><pre><code class="language-js">/*Array.prototype.map implementation*/
Array.prototype.map = function (callback/*, thisArg*/) {
var T, A, k;
if (this == null) {
throw new TypeError('this is null or not defined');
}
var O = Object(this);
var len = O.length &gt;&gt;&gt; 0;
if (typeof callback !== 'function') {
throw new TypeError(callback + ' is not a function');
}
if (arguments.length &gt; 1) {
T = arguments[1];
}
A = new Array(len);
k = 0;
while (k &lt; len) {
var kValue, mappedValue;
if (k in O) {
kValue = O[k];
mappedValue = callback.call(T, kValue, k, O);
A[k] = mappedValue;
}
k++;
}
return A;
};</code></pre><p>I have highlighted few common questions that might arise in the code comments below.</p><pre><code class="language-js">/*Array.prototype.map implementation*/
Array.prototype.map = function (callback/*, thisArg*/) {
var T, A, k;
if (this == null) {
throw new TypeError('this is null or not defined');
}
var O = Object(this);
var len = O.length &gt;&gt;&gt; 0;// QUESTION 1 : What is the need for this line of code?
if (typeof callback !== 'function') {
throw new TypeError(callback + ' is not a function');
}
if (arguments.length &gt; 1) {
T = arguments[1];
}
//  QUESTION 2 :What is the need for the if condition and why are we assiging T=arguments[1]?
A = new Array(len);
k = 0;
while (k &lt; len) {
var kValue, mappedValue;
if (k in O) {
kValue = O[k];
mappedValue = callback.call(T, kValue, k, O);
// QUESTION 3: why do we pass T,k and O when all you need is kvalue?
A[k] = mappedValue;
}
k++;
}
return A;
};</code></pre><p>Let’s address each of them starting from the bottom</p><p><strong>QUESTION 3: Why do we pass T,k and O when all you need is kValue?</strong></p><pre><code class="language-js">mappedValue = callback.call(T, kValue, k, O);</code></pre><p>This is the simplest of the three questions so I have picked this to start with. In most cases, passing the <strong>kValue</strong> to the <strong>callback</strong> would be sufficient but:</p><ul><li>What if you have a use case where you need to perform an operation only on every other element? Well, you need an index which is <strong>(k)</strong>.</li><li>Similarly there could be other use cases where you need the array <strong>(O)</strong> itself to be available in the callback.</li><li>Why <strong>T</strong>? For now just know that <strong>T</strong> is being passed around to maintain context. You will understand this better once you are done with question 2.</li></ul><p><strong>QUESTION 2 :What is the need for the if condition and why are we assigning T=arguments[1]?</strong></p><pre><code class="language-js">if (arguments.length &gt; 1) {   T = arguments[1];    }</code></pre><p>The map function in the above implementation has two arguments: the <strong>callback</strong> and the optional <strong>thisArg</strong><em>. Callback is a mandatory argument whereas <strong>thisArg</strong> is optional.</em></p><p>One can pass what should be the <strong>“this”</strong> value inside the <strong>callback</strong> by providing the second optional argument. This is why the code checks if there is more than one argument and assigns the second optional argument to a variable that can be passed on to the callback.</p><p>To illustrate better, let’s say you have a mock requirement where you need to return the <em>number/2</em> if it is divisible by 2, and if it is not divisible by 2, you need to return the username of the calling person. The below code illustrates how you can make this happen:</p><pre><code class="language-js">const myObj = { user: "John Smith" }
var x = [10, 7];
let output = x.map(function (n) {
if (n % 2 == 0) {
return n / 2;
} else {
return this.user
}
}, myObj) // myObj is the second optional argument arguments[1]
console.log(output); // [5,'John Smith']
//if you run the program without supplying myObj it would be //undefined as it cannot access myObj values
console.log(output); // [ 5, undefined ]</code></pre><p><strong>QUESTION 1: What is the need for this line of code?</strong></p><pre><code class="language-js">var len = O.length &gt;&gt;&gt; 0</code></pre><p>This one took some time for me to figure out. There is a lot going on in this line of code. In JavaScript, you have the ability to redefine the <strong>“this”</strong> within a function by invoking the method using <strong>call<em>. </em></strong>You can do this using <strong>bind </strong>or <strong>apply</strong> as well, but for this discussion lets stick with <strong>call.</strong></p><pre><code class="language-js">const anotherObject={length:{}}
const myObj = { user: "John Smith" }
var x = [10, 7];
let output = x.map.call(anotherObject,function (n) {
if (n % 2 == 0) {return n / 2;}
else
{return this.user}
}, myObj)</code></pre><p>When you invoke using <strong>call,<em> </em></strong>the first parameter would be the context in which the map function executes. By sending the parameter, you are overwriting the <strong>“this”</strong> inside the map with the <strong>“this”</strong> of anotherObject.</p><p>If you observe, the <strong>length</strong> property of the anotherObject is an empty object and not an integer. If you just use <strong>O.length instead of O.length&gt;</strong>&gt;&gt;0 it would result in an undefined value. By zero shifting, you are actually converting any fractions and non integers to an integer. In this case the result would be coerced to 0.</p><p>Most use cases won’t need this check, but there might be an edge case where this kind of scenario needs to be handled. The good programmers who designed the specification really did think it through! Talking about the specification, you can actually find the specification on how each function has to be implemented in Ecmascript here:</p><p><a href="https://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.19" rel="noopener"><strong>ECMAScript Language Specification - ECMA-262 Edition 5.1</strong></a><br><a href="https://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.19" rel="noopener"><em>This document and possible translations of it may be copied and furnished to others, and derivative works that comment…</em></a><br><a href="https://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.19" rel="noopener">www.ecma-international.org</a></p><p>The spec (<strong>step 3</strong>) clearly says that the length has to be a 32 bit unsigned integer. This is the reason we are zero fill shifting to ensure that length is an integer, as map itself does not require that the <strong>this</strong> value be an Array object.</p><p>That’s it!</p><p>I would like to thank couple of people, i never met them but they were kind enough to take time (in internet forums) and help me understand few nuances.</p><p><a href="https://github.com/SalathielGenese" rel="noopener">Salathiel Genese</a>, <a href="https://twitter.com/ljharb" rel="noopener">Jordan Harband</a> — thank you!</p><p>Note: If you are stuck on a different line of code, feel free to put that in the comments and I will do my best to clarify.</p><p>Thank you for your time and happy coding!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
