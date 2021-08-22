---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c99d8740569d1a4ca2204.jpg"
tags: [JavaScript]
description: The JavaScript forEach method is one of the several ways to l
author: "Milad E. Fahmy"
title: "JavaScript forEach – How to Loop Through an Array in JS"
created: "2021-08-15T19:29:03+02:00"
modified: "2021-08-15T19:29:03+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript forEach – How to Loop Through an Array in JS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c99d8740569d1a4ca2204.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c99d8740569d1a4ca2204.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c99d8740569d1a4ca2204.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c99d8740569d1a4ca2204.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c99d8740569d1a4ca2204.jpg" alt="JavaScript forEach – How to Loop Through an Array in JS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>The JavaScript forEach method is one of the several ways to loop through arrays. Each method has different features, and it is up to you, depending on what you're doing, to decide which one to use. </p>
<p>In this post, we are going to take a closer look at the JavaScript forEach method.</p>
<p>Considering that we have the following array below:</p><pre><code class="language-javascript">const numbers = [1, 2, 3, 4, 5];</code></pre>
<p>Using the traditional "for loop" to loop through the array would be like this:</p><pre><code class="language-javascript">for (i = 0; i &lt; numbers.length; i++) {
console.log(numbers[i]);
} </code></pre>
<h2 id="what-makes-the-foreach-method-different">What makes the forEach( ) method different?</h2>
<p>The forEach method is also used to loop through arrays, but it uses a function differently than the classic "for loop". </p>
<p>The forEach method passes a <a href="/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/">callback function</a> for each element of an array together with the following parameters: </p>
<ul>
<li>Current Value (required) - The value of the current array element</li>
<li>Index (optional) - The current element's index number</li>
<li>Array (optional) - The array object to which the current element belongs</li>
</ul>
<p>Let me explain these parameters step by step. </p>
<p>Firstly, to loop through an array by using the forEach method, you need a callback function (or anonymous function): </p><pre><code class="language-javascript">numbers.forEach(function() {
// code
});</code></pre>
<p>The function will be executed for every single element of the array. It must take at least one parameter which represents the elements of an array:</p><pre><code class="language-javascript">numbers.forEach(function(number) {
console.log(number);
});</code></pre>
<p>That's all we need to do for looping through the array:</p>
<p>Alternatively, you can use the ES6 arrow function representation for simplifying the code:</p>
<figcaption>Arrow Function Representation</figcaption>
</figure>
<h2 id="optional-parameters">Optional Parameters</h2>
<h3 id="index">Index</h3>
<p>Alright now let's continue with the optional parameters. The first one is the "index" parameter, which represents the index number of each element. </p>
<p>Basically, we can see the index number of an element if we include it as a second parameter:</p><pre><code class="language-javascript">numbers.forEach((number, index) =&gt; {
console.log('Index: ' + index + ' Value: ' + number);
});</code></pre>
<h3 id="array">Array</h3>
<p>The array parameter is the array itself. It is also optional and can be used if necessary in various operations. Otherwise, if we call it, it will just get printed as many times as the number of elements of the array:</p><pre><code class="language-javascript">numbers.forEach((number, index, array) =&gt; {
console.log(array);
});</code></pre>
<p>You can see the example usage of the forEach( ) method in this video:</p>
<h2 id="browser-support">Browser Support</h2>
<p>The Array.forEach method is <a href="https://caniuse.com/#search=Array.foreach">supported</a> in all browsers expect IE version 8 or earlier:</p>
<figcaption><a href="https://caniuse.com">caniuse.com</a></figcaption>
</figure>
<p><strong>If you want to learn more about Web Development, feel free to visit my <a href="https://www.youtube.com/channel/UC1EgYPCvKCXFn8HlpoJwY3Q?view_as=subscriber">Youtube Channel</a>.</strong></p>
<p>Thank you for reading!</p>
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
