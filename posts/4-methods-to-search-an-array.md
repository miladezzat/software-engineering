---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9a13740569d1a4ca2358.jpg"
tags: [JavaScript]
description: "There are different methods in JavaScript that you can use to"
author: "Milad E. Fahmy"
title: "Four Different Ways to Search an Array in JavaScript"
created: "2021-08-15T19:29:09+02:00"
modified: "2021-08-15T19:29:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-100daysofcode tag-arrays ">
<header class="post-full-header">
<h1 class="post-full-title">Four Different Ways to Search an Array in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9a13740569d1a4ca2358.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a13740569d1a4ca2358.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a13740569d1a4ca2358.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a13740569d1a4ca2358.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9a13740569d1a4ca2358.jpg" alt="Four Different Ways to Search an Array in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>There are different methods in JavaScript that you can use to search for an item in an array. Which method you choose depends on your specific use case. </p>
<p>For instance, do you want to get all items in an array that meet a specific condition? Do you want to check if any item meets the condition? Do you want to check if a specific value is in the array? Or do you want to find the index of the value in the array?</p>
<p>For all these use cases, JavaScript's Array.prototype methods have you covered. In this article, we will discuss four methods we can use to search for an item in an array. These methods are:</p>
<ol>
<li>Filter</li>
<li>Find</li>
<li>Includes</li>
<li>IndexOf</li>
</ol>
<p>Let's discuss each of them.</p>
<h3 id="array-filter-">Array.filter()</h3>
<p>We can use the Array.filter() method to find elements in an array that meet a certain condition. For instance, if we want to get all items in an array of numbers that are greater than 10, we can do this:</p><pre><code class="language-js">const array = [10, 11, 3, 20, 5];
const greaterThanTen = array.filter(element =&gt; element &gt; 10);
console.log(greaterThanTen) //[11, 20]</code></pre>
<p>The syntax for using the array.filter() method is the following:</p><pre><code class="language-text">let newArray = array.filter(callback);</code></pre>
<p>where</p>
<ul>
<li><code>newArray</code> is the new array that is returned</li>
<li><code>array</code> is the array on which the filter method is called</li>
<li><code>callback</code> is the callback function that is applied to each element of the array</li>
</ul>
<p>If no item in the array meets the condition, an empty array is returned. You can read more about <a href="https://sarahchima.com/blog/javascript-array-filter/">this method here</a>.</p>
<p>There are times when we don't need all the elements that meet a certain condition. We just need one element that matches the condition. In that case, you need the find() method.</p>
<h3 id="array-find-">Array.find()</h3>
<p>We use the Array.find() method to find the first element that meets a certain condition. Just like the filter method, it takes a callback as an argument and returns the first element that meets the callback condition.</p>
<p>Let's use the find method on the array in our example above.</p><pre><code class="language-js">const array = [10, 11, 3, 20, 5];
const greaterThanTen = array.find(element =&gt; element &gt; 10);
console.log(greaterThanTen)//11</code></pre>
<p>The syntax for the array.find() is</p><pre><code class="language-js">let element = array.find(callback);</code></pre>
<p>The callback is the function that is executed on each value in the array and takes three arguments:</p>
<ul>
<li><code>element</code> - the element being iterated on (required)</li>
<li><code>index</code> - the index/position of the current element (optional)</li>
<li><code>array</code> - the array that <code>find</code> was called on (optional)</li>
</ul>
<p>Note, though, that if no item in the array meets the condition, it returns <code>undefined</code>.</p>
<p>What if, though, you want to check if a certain element is in an array? How do you do this?</p>
<h3 id="array-includes-">Array.includes()</h3>
<p>The includes() method determines whether an array includes a certain value and returns true or false as appropriate.</p>
<p>So in the example above, if we want to check if 20 is one of the elements in the array, we can do this:</p><pre><code class="language-js">const array = [10, 11, 3, 20, 5];
const includesTwenty = array.includes(20);
console.log(includesTwenty)//true</code></pre>
<p>You'll notice a difference between this method and other methods we have considered. This method accepts a value rather than a callback as the argument. Here's the syntax for the includes method:</p><pre><code class="language-js">const includesValue = array.includes(valueToFind, fromIndex)</code></pre>
<p>Where </p>
<ul>
<li><code>valueToFind</code> is the value you are checking for in the array (required), and</li>
<li><code>fromIndex</code> is the index or position in the array that you want to start searching for the element from (optional)</li>
</ul>
<p>To get the concept of the index, let's visit our example again. If we want to check whether the array contains 10 in other positions apart from the first element, we can do this:</p><pre><code class="language-js">const array = [10, 11, 3, 20, 5];
const includesTenTwice = array.includes(10, 1);
console.log(includesTenTwice)//false</code></pre>
<h3 id="array-indexof-">Array.indexOf()</h3>
<p>The indexOf() method returns the first index at which a given element can be found in an array. It returns -1 if the element does not exist in the array.</p>
<p>Let's go back to our example. Let's find the index of 3 in the array.</p><pre><code class="language-js">const array = [10, 11, 3, 20, 5];
const indexOfThree = array.indexOf(3);
console.log(indexOfThree)//2</code></pre>
<p>Its syntax is similar to that of the <code>includes</code> method.</p><pre><code class="language-js">const indexOfElement = array.indexOf(element, fromIndex)</code></pre>
<p>Where </p>
<ul>
<li><code>element</code> is the element you are checking for in the array (required), and</li>
<li><code>fromIndex</code> is the index or position in the array that you want to start searching for the element from (optional)</li>
</ul>
<p>It's important to note that both the <code>includes</code> and <code>indexOf</code> methods use strict equality( '===' ) to search the array. If the values are of different types (for example '4' and 4), they'll return <code>false</code> and <code>-1</code> respectively.</p>
<h2 id="summary">Summary</h2>
<p>With these array methods, you don't need to use a for loop to search an array. Depending on what you need, you can decide which of the methods is best suited for your use case. </p>
<p>Here is a summary of when to use each method:</p>
<ul>
<li>Use <code>filter</code> if you want to find all items in an array that meet a specific condition.</li>
<li>Use <code>find</code> if you want to check if that at least one item meets a specific condition.</li>
<li>Use <code>includes</code> if you want to check if an array contains a particular value.</li>
<li>Use <code>indexOf</code> if you want to find the index of a particular item in an array.</li>
</ul>
<p><em><em>Want to get notified when I publish a new article? <a href="https://mailchi.mp/69ea601a3f64/join-sarahs-mailing-list">Click here</a>.</em></em></p>
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
