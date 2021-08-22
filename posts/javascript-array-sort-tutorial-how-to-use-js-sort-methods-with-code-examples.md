---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9ad9740569d1a4ca2820.jpg"
tags: [JavaScript]
description: In JavaScript, we can sort the elements of an array easily wi
author: "Milad E. Fahmy"
title: "JavaScript Array Sort – How to Use JS Sort Methods (With Code Examples)"
created: "2021-08-15T19:29:45+02:00"
modified: "2021-08-15T19:29:45+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Array Sort – How to Use JS Sort Methods (With Code Examples)</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ad9740569d1a4ca2820.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ad9740569d1a4ca2820.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ad9740569d1a4ca2820.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ad9740569d1a4ca2820.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ad9740569d1a4ca2820.jpg" alt="JavaScript Array Sort – How to Use JS Sort Methods (With Code Examples)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In JavaScript, we can sort the elements of an array easily with a built-in method called the sort( ) function. </p>
<p>However, data types (string, number, and so on) can differ from one array to another. This means that using the sort( ) method alone is not always an appropriate solution. </p>
<p>In this post, you will learn how to sort an array in JavaScript by using the sort( ) method for strings and numbers.</p>
<h2 id="array-of-strings">Array of Strings</h2>
<p>Let's start with strings:</p><pre><code class="language-javascript">const teams = ['Real Madrid', 'Manchester Utd', 'Bayern Munich', 'Juventus'];</code></pre>
<p>When we use the sort( ) method, elements will be sorted in ascending order (A to Z) by default:</p><pre><code class="language-javascript">teams.sort();
// ['Bayern Munich', 'Juventus', 'Manchester Utd', 'Real Madrid']</code></pre>
<p>If you prefer to sort the array in descending order, you need to use the reverse( ) method instead:</p><pre><code class="language-javascript">teams.reverse();
// ['Real Madrid', 'Manchester Utd', 'Juventus', 'Bayern Munich']</code></pre>
<h2 id="array-of-numbers">Array of Numbers</h2>
<p>Sorting numbers is unfortunately not that simple. If we apply the sort method directly to a numbers array, we will see an unexpected result:</p><pre><code class="language-javascript">const numbers = [3, 23, 12];
numbers.sort(); // --&gt; 12, 23, 3</code></pre>
<h3 id="why-the-sort-method-isn-t-working-for-numbers">Why the sort( ) method isn't working for numbers</h3>
<p>Actually it is working, but this problem happens because JavaScript sorts numbers alphabetically. Let me explain this in detail.</p>
<p>Let's think of A=1, B=2, and C=3.</p><pre><code class="language-javascript">const myArray = ['C', 'BC', 'AB'];
myArray.sort(); // [AB, BC, C]</code></pre>
<p>As an example, if we have three strings as C (3), BC (23) and AB(12), JavaScript will sort them as AB, BC, and C in an ascending order, which is alphabetically correct.</p>
<p>However, JavaScript will sort the numbers (alphabetically again) as 12, 23, and 3, which is incorrect.</p>
<h3 id="solution-the-compare-function">Solution: The Compare Function</h3>
<p>Luckily, we can support the sort( ) method with a basic comparison function which will do the trick:</p><pre><code class="language-javascript">function(a, b) {return a - b}</code></pre>
<p>The sort method, fortunately, can sort negative, zero, and positive values in the correct order. When the sort( ) method compares two values, it sends the values to our compare function and sorts the values according to the returned value.</p>
<ul>
<li>If the result is negative, a is sorted before b.</li>
<li>If the result is positive, b is sorted before a.</li>
<li>If the result is 0, nothing changes.</li>
</ul>
<p>All we need to is using the compare function inside the sort( ) method:</p><pre><code class="language-javascript">const numbers = [3, 23, 12];
numbers.sort(function(a, b){return a - b}); // --&gt; 3, 12, 23</code></pre>
<p>If we want to sort the numbers in descending order, this time we need to subtract the second parameter (b) from the first one (a):</p><pre><code class="language-javascript">const numbers = [3, 23, 12];
numbers.sort(function(a, b){return b - a}); // --&gt; 23, 12, 3</code></pre>
<h2 id="wrap-up">Wrap Up</h2>
<p>So as we can see, sorting the elements of an array can be done easily in JavaScript with the sort( ) method, if we know how to use it correctly. I hope my post helps you to understand how to use the sort( ) method in JavaScript in the right way.</p>
<p><strong>If you want to learn more about Web Development, feel free to visit my <a href="https://www.youtube.com/channel/UC1EgYPCvKCXFn8HlpoJwY3Q?view_as=subscriber">Youtube channel</a>.</strong></p>
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
