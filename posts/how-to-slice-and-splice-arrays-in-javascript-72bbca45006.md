---
card: "https://cdn-media-1.freecodecamp.org/images/1*XLAL5nDPpacrVdZ4MhJH2Q.jpeg"
tags: [JavaScript]
description: ".slice() and .splice() are similar methods in JavaScript. The"
author: "Milad E. Fahmy"
title: "How to slice and splice arrays in JavaScript"
created: "2021-08-16T11:30:16+02:00"
modified: "2021-08-16T11:30:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-algorithms tag-programming tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to slice and splice arrays in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*XLAL5nDPpacrVdZ4MhJH2Q.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*XLAL5nDPpacrVdZ4MhJH2Q.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*XLAL5nDPpacrVdZ4MhJH2Q.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*XLAL5nDPpacrVdZ4MhJH2Q.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*XLAL5nDPpacrVdZ4MhJH2Q.jpeg" alt="How to slice and splice arrays in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><code>.slice()</code> and <code>.splice()</code> are similar methods in JavaScript. They look similar, they sound similar, and they do similar things. For those reasons, it’s important to know the differences between them. Also, they’re used very often, so understanding their usage is good to learn early on for any software developer.</p><p>In this article we’ll look at how to use them with a specific algorithm scripting challenge. We’ll be inserting elements from one array into another and returning the combined array without mutating the original arrays.</p><h4 id="algorithm-instructions">Algorithm instructions</h4><blockquote>You are given two arrays and an index.</blockquote><blockquote>Use the array methods <code>slice</code> and <code>splice</code> to copy each element of the first array into the second array, in order.</blockquote><blockquote>Begin inserting elements at index <code>n</code> of the second array.</blockquote><blockquote>Return the resulting array. The input arrays should remain the same after the function runs.</blockquote><pre><code class="language-js">function frankenSplice(arr1, arr2, n) {
return arr2;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);</code></pre><h4 id="provided-test-cases">Provided Test Cases</h4><ul><li><code>frankenSplice([1, 2, 3], [4, 5], 1)</code>should return <code>[4, 1, 2, 3, 5]</code>.</li><li><code>frankenSplice([1, 2], ["a", "b"], 1)</code>should return <code>["a", 1, 2, "b"]</code>.</li><li><code>frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)</code>should return <code>["head", "shoulders", "claw", "tentacle", "knees", "toes"]</code>.</li><li>All elements from the first array should be added to the second array in their original order.</li><li>The first array should remain the same after the function runs.</li><li>The second array should remain the same after the function runs.</li></ul><h3 id="solution-1-slice-splice-and-spread-operator">Solution #1: .slice( ), .splice( ), and spread operator</h3><h4 id="pedac">PEDAC</h4><p><strong>Understanding the Problem</strong>: We have one input, a string. Our output is also a string. Ultimately, we want to return the input string with the first letter — and only the first letter — of each word capitalized.</p><p><strong>Examples/Test Cases</strong>: Our provided test cases show that we should have a capitalized letter only at the beginning of each word. We need to lower case the rest. The provided test cases also show that we aren’t being thrown any curve balls in terms of weird compound words separated by symbols instead of whitespace. That’s good news for us!</p><p><strong>Data Structure</strong>: We are going to have to transform our input string into an array in order to manipulate each word separately.</p><p>Let’s have a little chat about <code>.slice()</code> and <code>.splice()</code>:</p><p>First let’s address <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice" rel="noopener">.slice()</a></code>:</p><p><code>.slice()</code> extracts a section of a string and returns it as a new string. If you call <code>.slice()</code> on a string without passing it any additional information, it will return the whole string.</p><pre><code class="language-js">"Bastian".slice()
// returns "Bastian"</code></pre><p>This will be useful to us in this algorithm scripting challenge because the instructions tell us that we should not directly modify the input arrays. So we’re going to need to make a copy of one of them.</p><p>Now let’s look at <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice" rel="noopener">.splice()</a></code>:</p><p><code>.splice()</code> changes the contents of an array by removing or replacing existing elements and/or adding new elements.</p><p>We can pass <code>.splice()</code> several arguments that determine where the deletion begins, how much is deleted, and what is inserted. <code>start</code> is a number that tells <code>.splice()</code> at which index to begin deleting elements. <code>deleteCount</code> tells <code>.splice()</code> how many elements to delete.</p><p>Wait a second! What if you don’t want to delete anything? What if you just want to insert elements? That’s fine. Just set <code>deleteCount</code> to zero. Now we can start adding items. Just separate each element with a comma, like so <code>item1, item2, item3, item4</code>.</p><pre><code>.splice(start, deleteCount, item1, item2, item3, etc.)</code></pre><p>Another concept to keep in mind for this algorithm scripting challenge is the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax" rel="noopener">spread operator</a>. ES6 gifted us with the spread operator which looks like ellipses — just three dots in a row.</p><p>The spread operator is most commonly used when you want to use the elements of an array as arguments to a function. That’s exactly what we’re going to do with it in this challenge. We don’t want to insert the entire array <code>arr1</code> into <code>arr2</code>. We want to insert each element of <code>arr1</code> into <code>arr2</code>.</p><p><strong>Algorithm</strong>:</p><ol><li>Create a copy of <code>arr2</code>.</li><li>Insert all the elements of <code>arr1</code> into <code>arr2</code> starting at the index in <code>arr2</code> specified by <code>n</code>.</li><li>Return the combined arrays.</li></ol><p><strong>Code</strong>: See below!</p><pre><code class="language-js">function frankenSplice(arr1, arr2, n) {
// Create a copy of arr2.
let combinedArrays = arr2.slice()
//             [4, 5, 6]
// Insert all the elements of arr1 into arr2 beginning
// at the index specified by n. We're using the spread
// operator "..." to insert each individual element of
// arr1 instead of the whole array.
combinedArrays.splice(n, 0, ...arr1)
//             (1, 0, ...[1, 2, 3])
//             [4, 1, 2, 3, 5, 6]
// Return the combined arrays.
return combinedArrays
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);</code></pre><p>Without comments:</p><pre><code class="language-js">function frankenSplice(arr1, arr2, n) {
let combinedArrays = arr2.slice()
combinedArrays.splice(n, 0, ...arr1)
return combinedArrays
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);</code></pre><h3 id="solution-2-slice-splice-and-for-loop">Solution #2: .slice( ), .splice( ), and for loop</h3><h4 id="pedac-1">PEDAC</h4><p><strong>Understanding the Problem</strong>: We have one input, a string. Our output is also a string. Ultimately, we want to return the input string with the first letter — and only the first letter — of each word capitalized.</p><p><strong>Examples/Test Cases</strong>: Our provided test cases show that we should have a capitalized letter only at the beginning of each word. We need to lower case the rest. The provided test cases also show that we aren’t being thrown any curve balls in terms of weird compound words separated by symbols instead of whitespace. That’s good news for us!</p><p><strong>Data Structure</strong>: We are going to have to transform our input string into an array in order to manipulate each word separately.</p><p>Let’s have a little chat about <code>.slice()</code> and <code>.splice()</code>:</p><p>First let’s address <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice" rel="noopener">.slice()</a></code>:</p><p><code>.slice()</code> extracts a section of a string and returns it as a new string. If you call <code>.slice()</code> on a string without passing it any additional information, it will return the whole string.</p><pre><code class="language-js">"Bastian".slice()
// returns "Bastian"</code></pre><p>This will be useful to us in this algorithm scripting challenge because the instructions tell us that we should not directly modify the input arrays. So we’re going to need to make a copy of one of them.</p><p>Now let’s look at <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice" rel="noopener">.splice()</a></code>:</p><p><code>.splice()</code> changes the contents of an array by removing or replacing existing elements and/or adding new elements.</p><p>We can pass <code>.splice()</code> several arguments that determine where the deletion begins, how much is deleted, and what is inserted. <code>start</code> is a number that tells <code>.splice()</code> at which index to begin deleting elements. <code>deleteCount</code> tells <code>.splice()</code> how many elements to delete. Wait a second! What if you don’t want to delete anything? What if you just want to insert elements? That’s fine. Just set <code>deleteCount</code> to zero. Now we can start adding items. Just separate each element with a comma, like so <code>item1, item2, item3, item4</code>.</p><pre><code>.splice(start, deleteCount, item1, item2, item3, etc.)</code></pre><p>Unlike in the previous solution, we won’t be using the spread operator here. We’ll be using a for loop instead to pluck each element one at a time from <code>arr1</code> and insert them into <code>arr2</code>.</p><p>The trick here is to increment <code>n</code> by 1 each time the loop runs or else the elements of <code>arr1</code> will not end up in the right order when inserted into <code>arr2</code>.</p><p><strong>Algorithm</strong>:</p><ol><li>Create a copy of <code>arr2</code>.</li><li>Using a for loop, insert each element of <code>arr1</code> into <code>arr2</code> starting at index <code>n</code>.</li><li>Increment <code>n</code> by 1 each time the loop runs.</li><li>Return the combined arrays.</li></ol><p><strong>Code</strong>: See below!</p><pre><code class="language-js">function frankenSplice(arr1, arr2, n) {
// Create a copy of arr2.
let combinedArrays = arr2.slice()
// Using a for loop, insert each element of arr1
// into combinedArrays starting at index n.
for (let i = 0; i &lt; arr1.length; i++) {
combinedArrays.splice(n, 0, arr1[i])
// [4, 5, 6].splice(1, 0, 1)
//    [4, 1, 5, 6].splice(2, 0, 2)
// [4, 1, 2, 5, 6].splice(3, 0, 3)
// [4, 1, 2, 3, 5, 6]
//  increment n by 1 each time the loop runs
n++
}
// Return the combined arrays.
return combinedArrays
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);</code></pre><p>Without comments:</p><pre><code class="language-js">function frankenSplice(arr1, arr2, n) {
let combinedArrays = arr2.slice()
for (let i = 0; i &lt; arr1.length; i++) {
combinedArrays.splice(n, 0, arr1[i])
n++
}
return combinedArrays
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);</code></pre><p>If you have other solutions and/or suggestions, please share in the comments!</p><h4 id="this-article-is-a-part-of-the-series-freecodecamp-algorithm-scripting-">This article is a part of the series <a href="https://medium.com/@DylanAttal/freecodecamp-algorithm-scripting-b96227b7f837" rel="noopener">freeCodeCamp Algorithm Scripting</a>.</h4><h4 id="this-article-references-freecodecamp-basic-algorithm-scripting-slice-and-splice">This article references <a href="https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice" rel="noopener">freeCodeCamp Basic Algorithm Scripting: Slice and Splice</a></h4><p>You can follow me on <a href="https://medium.com/@DylanAttal" rel="noopener">Medium</a>, <a href="https://www.linkedin.com/in/dylanattal/" rel="noopener">LinkedIn</a>, and <a href="https://github.com/DylanAttal" rel="noopener">GitHub</a>!</p>
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
