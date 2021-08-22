---
card: "https://cdn-media-1.freecodecamp.org/images/1*ArHOj9iu7kJxxEhRukDKJw.jpeg"
tags: [JavaScript]
description: "There are a lot of ways to remove elements from an array in J"
author: "Milad E. Fahmy"
title: "How to remove falsy values from an array in JavaScript"
created: "2021-08-15T23:44:29+02:00"
modified: "2021-08-15T23:44:29+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-tech tag-algorithms tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">How to remove falsy values from an array in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*ArHOj9iu7kJxxEhRukDKJw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*ArHOj9iu7kJxxEhRukDKJw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*ArHOj9iu7kJxxEhRukDKJw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*ArHOj9iu7kJxxEhRukDKJw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*ArHOj9iu7kJxxEhRukDKJw.jpeg" alt="How to remove falsy values from an array in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>There are a lot of ways to remove elements from an array in JavaScript, but what’s the easiest way to remove all falsy values from an array? In order to answer that question we’ll take a close look at truthy versus falsy values and type coercion within the context of an algorithm scripting challenge.</p><h4 id="algorithm-instructions">Algorithm instructions</h4><blockquote>Remove all falsy values from an array.</blockquote><blockquote>Falsy values in JavaScript are <code>false</code>, <code>null</code>, <code>0</code>, <code>""</code>, <code>undefined</code>, and <code>NaN</code>.</blockquote><blockquote>Hint: Try converting each value to a Boolean.</blockquote><h4 id="provided-test-cases">Provided Test Cases</h4><ul><li><code>bouncer([7, "ate", "", false, 9])</code>should return <code>[7, "ate", 9]</code>.</li><li><code>bouncer(["a", "b", "c"])</code>should return <code>["a", "b", "c"]</code>.</li><li><code>bouncer([false, null, 0, NaN, undefined, ""])</code>should return <code>[]</code>.</li><li><code>bouncer([1, null, NaN, 2, undefined])</code>should return <code>[1, 2]</code>.</li></ul><h3 id="solution-1-filter-and-boolean-">Solution #1: .filter( ) and Boolean( )</h3><h4 id="pedac">PEDAC</h4><p><strong>Understanding the Problem</strong>: We have one input, an array. Our goal is to remove all the falsy values from the array then return the array.</p><p>The good people at freeCodeCamp have told us that falsy values in JavaScript are <code>false</code>, <code>null</code>, <code>0</code>, <code><em>""</em></code>, <code>undefined</code>, and <code>NaN</code>.</p><p>They have also dropped a major hint for us! They suggest converting each value of the array into a boolean in order to accomplish this challenge. I think that’s a great hint!</p><p><strong>Examples/Test Cases</strong>: Our provided test cases show us that if the input array only contains falsy values, then we should just return an empty array. That’s pretty straightforward.</p><p><strong>Data Structure</strong>: We are going to stick with arrays here.</p><p>Let’s talk about <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" rel="noopener">.filter()</a></code>:</p><p><code>.filter()</code> creates a new array with all elements that pass the test implemented by the provided function.</p><p>In other words, <code>.filter()</code> goes through each element in an array and preserves all the elements that pass a certain test. All the elements in the array that fail that test are filtered out — they’re removed.</p><p>For example, if we had an array of numbers and we only wanted the numbers greater than 100, we could use <code>.filter()</code> to accomplish that:</p><pre><code>let numbers = [4, 56, 78, 99, 101, 150, 299, 300]numbers.filter(number =&gt; number &gt; 100)// returns [ 101, 150, 299, 300 ]</code></pre><p>Let’s talk about the hint of converting each element to a boolean. This is a good hint because we can use <code>.filter()</code> to return the array with only the truthy values.</p><p>We’re going to accomplish that through <a href="https://www.w3schools.com/js/js_type_conversion.asp" rel="noopener">JavaScript type conversion</a>.</p><p>JavaScript gives us useful functions to convert one data type to another. <code>String()</code> converts to a string, <code>Number()</code> converts to a number, and <code>Boolean()</code> converts to a boolean.</p><p>For example:</p><pre><code>String(1234)// returns "1234"</code></pre><pre><code>Number("47")// returns 47</code></pre><pre><code>Boolean("meow")// returns true</code></pre><p><code>Boolean()</code> is the function we’ll be implementing with this challenge. If the argument provided to <code>Boolean()</code> is truthy, then <code>Boolean()</code> will return <code>true.</code> If the argument provided to <code>Boolean()</code> is falsy, then <code>Boolean()</code> will return <code>false</code>.</p><p>This is useful to us because we know from the instructions that only <code>false</code>, <code>null</code>, <code>0</code>, <code><em>""</em></code>, <code>undefined</code>, and <code>NaN</code> are falsy in JavaScript. Every other value is truthy. Knowing that, if we convert each value in the input array to a boolean, we can remove all elements that evaluate to <code>false</code>, and that will satisfy the requirements for this challenge.</p><p><strong>Algorithm</strong>:</p><ol><li>Determine which values in <code>arr</code> are falsy.</li><li>Remove all falsy values.</li><li>Return the new array that contains only truthy values.</li></ol><p><strong>Code</strong>: See below!</p><p>Without comments and removing the local variable:</p><p>If you have other solutions and/or suggestions, please share in the comments!</p><h4 id="this-article-is-a-part-of-the-series-freecodecamp-algorithm-scripting-">This article is a part of the series <a href="https://medium.com/@DylanAttal/freecodecamp-algorithm-scripting-b96227b7f837" rel="noopener">freeCodeCamp Algorithm Scripting</a>.</h4><h4 id="this-article-references-freecodecamp-basic-algorithm-scripting-falsy-bouncer-">This article references <a href="https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer" rel="noopener">freeCodeCamp Basic Algorithm Scripting: Falsy Bouncer</a>.</h4><p>You can follow me on <a href="https://medium.com/@DylanAttal" rel="noopener">Medium</a>, <a href="https://www.linkedin.com/in/dylanattal/" rel="noopener">LinkedIn</a>, and <a href="https://github.com/DylanAttal" rel="noopener">GitHub</a>!</p>
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
