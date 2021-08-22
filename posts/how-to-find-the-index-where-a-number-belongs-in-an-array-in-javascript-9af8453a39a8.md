---
card: "https://cdn-media-1.freecodecamp.org/images/1*XdBvGuY3oLB3E3Iv0CD-SA.jpeg"
tags: [Tech]
description: "Sorting is a very important concept when writing algorithms. "
author: "Milad E. Fahmy"
title: "How to find the index where a number belongs in an array in JavaScript"
created: "2021-08-15T23:43:59+02:00"
modified: "2021-08-15T23:43:59+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-tech tag-programming tag-coding tag-javascript tag-algorithms ">
<header class="post-full-header">
<h1 class="post-full-title">How to find the index where a number belongs in an array in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*XdBvGuY3oLB3E3Iv0CD-SA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*XdBvGuY3oLB3E3Iv0CD-SA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*XdBvGuY3oLB3E3Iv0CD-SA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*XdBvGuY3oLB3E3Iv0CD-SA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*XdBvGuY3oLB3E3Iv0CD-SA.jpeg" alt="How to find the index where a number belongs in an array in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Sorting is a very important concept when writing algorithms. There are all kinds of sorts: bubble sort, shell sort, block sort, comb sort, cocktail sort, gnome sort — <a href="https://en.wikipedia.org/wiki/Sorting_algorithm" rel="noopener">I’m not making these up</a>!</p><p>This challenge gives us a glimpse into the wonderful world of sorts. We have to sort an array of numbers from least to greatest and find out where a given number would belong in that array.</p><h4 id="algorithm-instructions">Algorithm instructions</h4><blockquote>Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.</blockquote><blockquote>For example, <code><em>getIndexToIns([1,2,3,4], 1.5)</em></code> should return <code><em>1</em></code>because it is greater than <code><em>1</em></code> (index 0), but less than <code><em>2</em></code> (index 1).</blockquote><blockquote>Likewise, <code><em>getIndexToIns([20,3,5], 19)</em></code> should return <code><em>2</em></code>because once the array has been sorted it will look like <code><em>[3,5,20]</em></code> and <code><em>19</em></code> is less than <code><em>20</em></code> (index 2) and greater than <code><em>5</em></code> (index 1).</blockquote><pre><code class="language-js">function getIndexToIns(arr, num) {
return num;
}
getIndexToIns([40, 60], 50);</code></pre><h4 id="provided-test-cases">Provided Test Cases</h4><ul><li><code>getIndexToIns([10, 20, 30, 40, 50], 35)</code> should return <code>3</code>.</li><li><code>getIndexToIns([10, 20, 30, 40, 50], 35)</code> should return a number.</li><li><code>getIndexToIns([10, 20, 30, 40, 50], 30)</code> should return <code>2</code>.</li><li><code>getIndexToIns([10, 20, 30, 40, 50], 30)</code> should return a number.</li><li><code>getIndexToIns([40, 60], 50)</code> should return <code>1</code>.</li><li><code>getIndexToIns([40, 60], 50)</code> should return a number.</li><li><code>getIndexToIns([3, 10, 5], 3)</code> should return <code>0</code>.</li><li><code>getIndexToIns([3, 10, 5], 3)</code> should return a number.</li><li><code>getIndexToIns([5, 3, 20, 3], 5)</code> should return <code>2</code>.</li><li><code>getIndexToIns([5, 3, 20, 3], 5)</code> should return a number.</li><li><code>getIndexToIns([2, 20, 10], 19)</code> should return <code>2</code>.</li><li><code>getIndexToIns([2, 20, 10], 19)</code> should return a number.</li><li><code>getIndexToIns([2, 5, 10], 15)</code> should return <code>3</code>.</li><li><code>getIndexToIns([2, 5, 10], 15)</code> should return a number.</li><li><code>getIndexToIns([], 1)</code> should return <code>0</code>.</li><li><code>getIndexToIns([], 1)</code> should return a number.</li></ul><h3 id="solution-1-sort-indexof-">Solution #1: .sort( ), .indexOf( )</h3><h4 id="pedac">PEDAC</h4><p><strong>Understanding the Problem</strong>: We have two inputs, an array, and a number. Our goal is to return the index of our input number after it is sorted into the input array.</p><p><strong>Examples/Test Cases</strong>: The good people at freeCodeCamp don’t tell us in which way the input array should be sorted, but the provided test cases make it clear that the input array should be sorted from least to greatest.</p><p>Notice that there is an edge case on the last two provided test cases where the input array is an empty array.</p><p><strong>Data Structure</strong>: Since we’re ultimately returning an index, sticking with arrays is going to work for us.</p><p>We’re going to utilize a nifty method named <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf" rel="noopener">.indexOf()</a></code>:</p><p><code>.indexOf()</code> returns the first index at which an element is present in an array, or a <code>-1</code> if the element is not present at all. For example:</p><pre><code>let food = ['pizza', 'ice cream', 'chips', 'hot dog', 'cake']</code></pre><pre><code>food.indexOf('chips')// returns 2food.indexOf('spaghetti')// returns -1</code></pre><p>We’re also going to be using <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat" rel="noopener">.concat()</a></code> here instead of <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push" rel="noopener">.push()</a></code>. Why? Because when you add an element to an array using <code>.push()</code>, it returns the length of the new array. When you add an element to an array using <code>.concat()</code>, it returns the new array itself. For example:</p><pre><code>let array = [4, 10, 20, 37, 45]</code></pre><pre><code>array.push(98)// returns 6array.concat(98)// returns [4, 10, 20, 37, 45, 98]</code></pre><p><strong>Algorithm</strong>:</p><ol><li>Insert <code>num</code> into <code>arr</code>.</li><li>Sort <code>arr</code> from least to greatest.</li><li>Return the index of <code>num</code>.</li></ol><p><strong>Code</strong>: See below!</p><pre><code class="language-js">function getIndexToIns(arr, num) {
// Insert num into arr, creating a new array.
let newArray = arr.concat(num)
//       [40, 60].concat(50)
//       [40, 60, 50]
// Sort the new array from least to greatest.
newArray.sort((a, b) =&gt; a - b)
// [40, 60, 50].sort((a, b) =&gt; a - b)
// [40, 50, 60]
// Return the index of num which is now
// in the correct place in the new array.
return newArray.indexOf(num);
// return [40, 50, 60].indexOf(50)
// 1
}
getIndexToIns([40, 60], 50);</code></pre><p>Without local variables and comments:</p><pre><code class="language-js">function getIndexToIns(arr, num) {
return arr.concat(num).sort((a, b) =&gt; a - b).indexOf(num);
}
getIndexToIns([40, 60], 50);</code></pre><h3 id="solution-2-sort-findindex-">Solution #2: .sort( ), .findIndex( )</h3><h4 id="pedac-1">PEDAC</h4><p><strong>Understanding the Problem</strong>: We have two inputs, an array, and a number. Our goal is to return the index of our input number after it is sorted into the input array.</p><p><strong>Examples/Test Cases</strong>: The good people at freeCodeCamp don’t tell us in which way the input array should be sorted, but the provided test cases make it clear that the input array should be sorted from least to greatest.</p><p>There are two edge cases to take into account with this solution:</p><ol><li>If the input array is empty then we need to return <code>0</code> because <code>num</code> would be the <em>only</em> element in that array, therefore at index <code>0</code>.</li><li>If <code>num</code> would belong at the very end of <code>arr</code> sorted from least to greatest, then we need to return the length of <code>arr</code>.</li></ol><p><strong>Data Structure</strong>: Since we’re ultimately returning an index, sticking with arrays is going to work for us.</p><p>Let’s checkout <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex" rel="noopener">.findIndex()</a></code> to see how it’s going to help solve this challenge:</p><p><code>.findIndex()</code> returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating no element passed the test. For example:</p><pre><code class="language-js">let numbers = [3, 17, 94, 15, 20]
numbers.findIndex((currentNum) =&gt; currentNum % 2 == 0)
// returns 2
numbers.findIndex((currentNum) =&gt; currentNum &gt; 100)
// returns -1</code></pre><p>This is useful for us because we can use <code>.findIndex()</code> to compare our input <code>num</code> to every number in our input <code>arr</code> and figure out where it would fit in order from least to greatest.</p><p><strong>Algorithm</strong>:</p><ol><li>If <code>arr</code> is an empty array, return <code>0</code>.</li><li>If <code>num</code> belongs at the end of the sorted array, return the length of <code>arr</code>.</li><li>Otherwise, return the index <code>num</code> would be if <code>arr</code> was sorted from least to greatest.</li></ol><p><strong>Code</strong>: See below!</p><pre><code class="language-js">function getIndexToIns(arr, num) {
// Sort arr from least to greatest.
let sortedArray = arr.sort((a, b) =&gt; a - b)
//            [40, 60].sort((a, b) =&gt; a - b)
//            [40, 60]
// Compare num to each number in sortedArray
// and find the index where num is less than or equal to
// a number in sortedArray.
let index = sortedArray.findIndex((currentNum) =&gt; num &lt;= currentNum)
//      [40, 60].findIndex(40 =&gt; 50 &lt;= 40) --&gt; falsy
//      [40, 60].findIndex(60 =&gt; 50 &lt;= 60) --&gt; truthy
//      returns 1 because num would fit like so [40, 50, 60]
// Return the correct index of num.
// If num belongs at the end of sortedArray or if arr is empty
// return the length of arr.
return index === -1 ? arr.length : index
}
getIndexToIns([40, 60], 50);</code></pre><p>Without local variables and comments:</p><pre><code class="language-js">function getIndexToIns(arr, num) {
let index = arr.sort((a, b) =&gt; a - b).findIndex((currentNum) =&gt; num &lt;= currentNum)
return index === -1 ? arr.length : index
}
getIndexToIns([40, 60], 50);</code></pre><p>If you have other solutions and/or suggestions, please share in the comments!</p><h4 id="this-article-is-a-part-of-the-series-freecodecamp-algorithm-scripting-">This article is a part of the series <a href="https://medium.com/@DylanAttal/freecodecamp-algorithm-scripting-b96227b7f837" rel="noopener">freeCodeCamp Algorithm Scripting</a>.</h4><h4 id="this-article-references-freecodecamp-basic-algorithm-scripting-where-do-i-belong-">This article references<a href="https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong" rel="noopener"> freeCodeCamp Basic Algorithm Scripting: Where do I Belong</a>.</h4><p>You can follow me on <a href="https://medium.com/@DylanAttal" rel="noopener">Medium</a>, <a href="https://www.linkedin.com/in/dylanattal/" rel="noopener">LinkedIn</a>, and <a href="https://github.com/DylanAttal" rel="noopener">GitHub</a>!</p>
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
