---
card: "https://cdn-media-1.freecodecamp.org/images/1*5PyeGXp9J3PpUTHCv9drnQ.jpeg"
tags: [JavaScript]
description: by Hemand Nair
author: "Milad E. Fahmy"
title: "How to write your own map, filter and reduce functions in JavaScript"
created: "2021-08-15T19:36:53+02:00"
modified: "2021-08-15T19:36:53+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-functional-programming tag-es6 tag-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to write your own map, filter and reduce functions in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*5PyeGXp9J3PpUTHCv9drnQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*5PyeGXp9J3PpUTHCv9drnQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*5PyeGXp9J3PpUTHCv9drnQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*5PyeGXp9J3PpUTHCv9drnQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*5PyeGXp9J3PpUTHCv9drnQ.jpeg" alt="How to write your own map, filter and reduce functions in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Hemand Nair</p>
<h1 id="how-to-write-your-own-map-filter-and-reduce-functions-in-javascript">How to write your own map, filter and reduce functions in JavaScript</h1>
<h4 id="a-sneak-peek-into-functional-programming-and-higher-order-functions-in-javascript-">A sneak peek into functional programming and higher order functions in Javascript.</h4>
<figcaption>Photo by <a href="https://unsplash.com/photos/pgSkeh0yl8o?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Christopher Robin Ebbinghaus</a> on <a href="https://unsplash.com/search/photos/javascript?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>Whenever I hear about functional programming, the first thing that comes into my mind is higher order functions. To the folks who don’t know about higher order functions, here’s what Wikipedia says:</p>
<p>A <a href="https://en.wikipedia.org/wiki/Higher-order_function" rel="noopener"><strong>higher-order function</strong></a> is a function that does at least one of the following:</p>
<ul>
<li>Takes one or more functions as arguments,</li>
<li>Returns a function as its result.</li>
</ul>
<p>Higher order functions can be best described by the map, filter and reduce functions. Javascript by default has its own implementation of these functions. Today, we will be writing our own map, filter and reduce functions.</p>
<p><strong>Note: Keep in mind that these implementations of the map, filter and reduce methods might not reflect the native implementations of their Javascript counterparts.</strong></p>
<h4 id="map-function map() { [native code] }1">Map</h4>
<p>From <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" rel="noopener">MDN</a>:</p>
<blockquote>The <code><strong>map()</strong></code> method creates a new array with the results of calling a provided function on every element in the calling array.</blockquote>
<p>Seems pretty straightforward. Now let’s see the Javascript <code>map()</code> in action!</p><pre><code>let arr = [1, 2, 3, 4, 5];</code></pre><pre><code>// pass a function to mapconst squareArr = arr.map(num =&gt; num ** 2);</code></pre><pre><code>console.log(squareArr); // prints [1, 4, 9, 16, 25]</code></pre>
<p>So what just happened? We wrote a function that returns the square of a number and passed that function as an argument to our <code>map()</code>. Let’s see step by step instructions on how to create our own map function.</p>
<ol>
<li>Create an empty array <code>mapArr</code>.</li>
<li>Loop through array elements.</li>
<li>Call function <code>mapFunc</code> with the current element as the argument.</li>
<li>Push the result of the <code>mapFunc</code> function to the <code>mapArr</code> array.</li>
<li>Return the <code>mapArr</code> array after going through all the elements.</li>
</ol>
<p>Now let’s write our implementation of the <code>map()</code></p><pre><code>// map takes an array and function as argumentfunction map(arr, mapFunc) {    const mapArr = []; // empty array        // loop though array    for(let i=0;i&lt;arr.length;i++) {        const result = mapFunc(arr[i], i, arr);        mapArr.push(result);    }    return mapArr;}</code></pre>
<p>Now if you call the new <code>map()</code> in the previous example code,</p><pre><code>const squareArr2 = map(arr, num =&gt; num ** 2);</code></pre><pre><code>console.log(squareArr2); // prints [1, 4, 9, 16, 25]</code></pre>
<p>Pretty cool huh? Let’s jump into <code>filter()</code> next.</p>
<h4 id="filter-function filter() { [native code] }1"><strong>Filter</strong></h4>
<p>From <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" rel="noopener">MDN</a>:</p>
<blockquote>The <code><strong>filter()</strong></code> method creates a new array with all elements that pass the test implemented by the provided function.</blockquote>
<p>Let’s see an example:</p><pre><code>let arr = [1, 2, 3, 4, 5];</code></pre><pre><code>// pass a function to filterconst oddArr = arr.filter(num =&gt; num % 2 === 0);</code></pre><pre><code>console.log(oddArr); // prints [2, 4]</code></pre>
<p>The filter function took a function which will return <code>true</code> if a number is even. The <code>filter()</code> “filters” the input array based on whether the element is true or false. Let’s go through step by step on how the <code>filter()</code> works.</p>
<ol>
<li>Create an empty array <code>filterArr</code>.</li>
<li>Loop through the array elements.</li>
<li>Called the <code>filterFunc</code> function with the current element as the argument.</li>
<li>If the result is true, push the element to the <code>filterArr</code> array.</li>
<li>Return <code>filterArr</code> array after going through all the elements.</li>
</ol>
<p>Time to write our own <code>filter()</code></p><pre><code>// filter takes an array and function as argumentfunction filter(arr, filterFunc) {    const filterArr = []; // empty array        // loop though array    for(let i=0;i&lt;arr.length;i++) {        const result = filterFunc(arr[i], i, arr);        // push the current element if result is true        if(result)             filterArr.push(arr[i]);     }    return filterArr;}</code></pre>
<p>Let’s see if our new <code>filter()</code> works out with the previous example:</p><pre><code>const oddArr2 = filter(arr, num =&gt; num % 2 === 0);</code></pre><pre><code>console.log(oddArr2); //prints [2, 4]</code></pre>
<p>Neat! I have saved the best and hardest one for the last. Let’s go to <code>reduce()</code> next.</p>
<h4 id="reduce-function reduce() { [native code] }1"><strong>Reduce</strong></h4>
<p>From <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" rel="noopener">MDN</a>:</p>
<blockquote>The <code><strong>reduce()</strong></code> method executes a <strong>reducer</strong> function (that you provide) on each member of the array resulting in a single output value.</blockquote>
<p>Makes sense? No? Here’s an example to wrap your head around:</p><pre><code>let arr = [1, 2, 3, 4];const sumReducer = (accumulator, currentValue) =&gt; accumulator + currentValue;</code></pre><pre><code>// 1 + 2 + 3 + 4const sum = arr.reduce(sumReducer);console.log(sum);// prints 10</code></pre><pre><code>// 5 + 1 + 2 + 3 + 4const sum2 = arr.reduce(sumReducer);console.log(sum2);// prints 15</code></pre>
<p>Starting to get a picture? Let’s make it clear. Before digging too deep into the <code>reduce()</code> method, you might need to get acquainted with the reducer function.</p>
<p>If you have used <a href="https://redux.js.org" rel="noopener"><strong>redux</strong></a><strong> </strong>in the past, you might have some idea about what a reducer function is. In the example above, the reducer function is written as the sum between the accumulator and current value. When you pass the reducer function to the <code>reduce()</code> method, it will loop through each number in the array and adds it to the accumulator ( 0 at the beginning), which itself becomes the new accumulator for the next iteration. This continues till the end of the array and returns the accumulator as a result.</p>
<p>If I had to output the value of the accumulator in each step for the above example, it would be like this:</p>
<ul>
<li>Before the start of the iteration, <code>accumulator = 0</code></li>
<li>1st iteration, <code>accumulator += 1; // accumulator = 1</code></li>
<li>2nd iteration, <code>accumulator += 2; // accumulator = 3</code></li>
<li>3rd iteration, <code>accumulator += 3; // accumulator = 6</code></li>
<li>4th iteration, <code>accumulator += 4; // accumulator = 10</code></li>
</ul>
<p>Your <strong>reducer</strong> function’s returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array. It ultimately becomes the final, single resulting value.</p>
<p>If you are still stuck at some point, try writing some operations with the inbuilt <code>reduce()</code> method. Whenever you feel you are ready, go through the next steps on how to implement your custom <code>reduce()</code>:</p>
<ol>
<li>Initialize <code>accumulator</code> variable with 0 or <code>initalValue</code> argument from the <code>reduce()</code>.</li>
<li>Loop through the array elements.</li>
<li>Call the <code>reducer</code> function with the <code>accumulator</code> and current element as the arguments.</li>
<li>Return <code>accumulator</code> after going through all the elements.</li>
</ol>
<p>Alright, time to code.</p><pre><code>// reducer takes an array, reducer() and initialValue as argumentfunction reduce(arr, reducer, initialValue) {    let accumulator = initialValue === undefined ? 0 : initialValue        // loop though array    for(let i=0;i&lt;arr.length;i++)        accumulator = reducer(accumulator, arr[i], i, arr);    return accumulator;}</code></pre>
<p>Well, that was easier than expected. Let’s see if it’s working.</p><pre><code>const sum = reduce(arr, sumReducer);</code></pre><pre><code>console.log(sum); // prints 10</code></pre><pre><code>const sum2 = reduce(arr, sumReducer, 5);</code></pre><pre><code>console.log(sum2);// prints 15</code></pre>
<p>Works like a charm!</p>
<p><strong>That’s it :)</strong></p>
<p>Comment down below if you have any questions.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
