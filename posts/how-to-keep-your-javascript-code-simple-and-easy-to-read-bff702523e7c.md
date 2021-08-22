---
card: "https://cdn-media-1.freecodecamp.org/images/1*ecVfURF6VRf5Yxf2yaRteg.jpeg"
tags: [JavaScript]
description: by Arthur Arakelyan
author: "Milad E. Fahmy"
title: "How to keep your JavaScript code simple and easy to read"
created: "2021-08-15T19:35:24+02:00"
modified: "2021-08-15T19:35:24+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-es6 tag-programming tag-tech tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">How to keep your JavaScript code simple and easy to read</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*ecVfURF6VRf5Yxf2yaRteg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*ecVfURF6VRf5Yxf2yaRteg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*ecVfURF6VRf5Yxf2yaRteg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*ecVfURF6VRf5Yxf2yaRteg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*ecVfURF6VRf5Yxf2yaRteg.jpeg" alt="How to keep your JavaScript code simple and easy to read">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Arthur Arakelyan</p>
<h1 id="how-to-keep-your-javascript-code-simple-and-easy-to-read">How to keep your JavaScript code simple and easy to read</h1>
<p>There are many ways to solve the same problem, but some solutions are complex, and some are even ridiculous. In this article, I want to talk about bad and good solutions for the same problems.</p>
<p>Let’s start with the problem that requires us to remove duplicate values from an array.</p>
<h4 id="complex-removing-duplicates-using-foreach"><strong>Complex - Removing duplicates using forEach</strong></h4>
<p>First, we create a new empty array, then we use the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" rel="noopener"><strong>forEach()</strong></a> method to execute a provided function once for each array element. Eventually, we check if the value doesn’t exist in the new array, and if not, we add it.</p><pre><code>function removeDuplicates(arr) {     const uniqueVals = [];      arr.forEach((value,index) =&gt; {            if(uniqueVals.indexOf(value) === -1) {           uniqueVals.push(value);       }     });  return uniqueVals;}</code></pre>
<h4 id="simple-removing-duplicates-using-filter"><strong>Simple - Removing duplicates using filter</strong></h4>
<p>The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" rel="noopener"><strong>filter</strong></a> method creates a new array with all elements that pass the test implemented by the provided function. Basically, we iterate over the array and, for each element, check if the first position of this element in the array is equal to the current position. Of course, these two positions are different for duplicate elements.</p><pre><code>function removeDuplicates(arr) {  return arr.filter((item, pos) =&gt; arr.indexOf(item) === pos)}</code></pre>
<h4 id="simple-removing-duplicates-using-set"><strong>Simple - Removing duplicates using Set</strong></h4>
<p>ES6 provides the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set" rel="noopener"><strong>Set</strong></a> object, which makes things a whole lot easier. <strong>Set</strong> allows only unique values, so when you pass in an array, it removes any duplicate values.</p>
<p>However, if you need an array with unique elements, why not use <strong>Set</strong> right from the beginning?</p><pre><code>function removeDuplicates(arr) {   return [...new Set(arr)];}</code></pre>
<p>Let’s move on and solve the second problem which requires us to write a function that takes an array of distinct non-negative integers, make them consecutive, and return the count of missing numbers.</p>
<p>For <code>const arr = [4, 2, 6, 8]</code>, the output should be<br><code>countMissingNumbers(arr) = 3</code></p>
<p>As you can see <code>3</code>, <code>5</code>and <code>7</code> are missing</p>
<h4 id="complex-solving-by-using-sort-and-for-loop"><strong>Complex - Solving by using sort and for loop</strong></h4>
<p>To obtain the smallest and largest numbers we need to <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" rel="noopener"><strong>sort</strong></a> them in ascending order, and for that purpose, we use <code>sort</code> method. Then we loop from the smallest number to the largest number. Each time, we check whether a sequential number exists in the array or not, and if not we increase the counter.</p><pre><code>function countMissingNumbers(arr) {    arr.sort((a,b) =&gt; a-b);        let count = 0;        const min = arr[0];        const max = arr[arr.length-1];    for (i = min; i&lt;max; i++) {      if (arr.indexOf(i) === -1) {          count++;               }          }            return count;}</code></pre>
<h4 id="simple-solving-by-using-math-max-and-math-min"><strong>Simple - Solving by using Math.max and Math.min</strong></h4>
<p>This solution has a simple explanation: the <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max" rel="noopener"><strong>Math.max()</strong></a></code> function returns the largest number in the array and the <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min" rel="noopener"><strong>Math.min()</strong></a></code> returns the smallest number in the array.</p>
<p>First, we find how many numbers would be in the array if there weren’t missing numbers. For that, we use the following formula <code>maxNumber - minNuber + 1</code>, and the difference between the result of this and the array length will give us the count of missing numbers.</p><pre><code>function countMissingNumbers(arr) {      return Math.max(...arr) - Math.min(...arr) + 1 - arr.length;}</code></pre>
<p>The last problem I want to bring as an example is to check whether the string is a <strong>palindrome</strong> or not.</p>
<p><em>*A <strong>palindrome</strong> is a string that reads the same left-to-right and right-to-left.</em></p>
<h4 id="complex-checking-by-using-for-loop"><strong>Complex - Checking By using for loop</strong></h4>
<p>In this option, we loop over the string starting from the first character until half of the string length. The index of the last character in a string is string.length-1, the second to last character is string.length-2, and so on. So here we check whether the character at the specified index from the start is equal to the character at the specified index at the end. If they are not equal, we return false.</p><pre><code>function checkPalindrome(inputString) {    let length = inputString.length   for (let i =0; i&lt;length / 2; i++) {        if (inputString[i] !== inputString[length - 1 -i]) {             return false                }   }  return true}</code></pre>
<h4 id="simple-checking-by-using-reverse-and-join"><strong>Simple - Checking by using reverse and join</strong></h4>
<p>I think that this simple solution doesn't require an explanation, as it speaks for itself. We simply create an array from the string using the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax" rel="noopener"><strong>spread operator</strong></a>, then <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse" rel="noopener"><strong>reverse</strong></a> the array, then turn it into a string again using the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join" rel="noopener"><strong>join</strong></a> method and compare it with the original string.</p><pre><code>function checkPalindrome(string) {   return string === [...string].reverse().join('');}</code></pre>
<h4 id="keep-it-simple-">Keep it simple!</h4>
<p>Why complicate when there are simpler ways? I hope you found this article interesting. Have a good day and try not to complicate simple things in life as well :)</p>
<p>Thanks for your claps ?</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
