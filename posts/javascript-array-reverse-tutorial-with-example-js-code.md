---
card: "/images/default.jpg"
tags: [JavaScript]
description: Reversing an array with certain restrictions is one of the mo
author: "Milad E. Fahmy"
title: "JavaScript Reverse Array – Tutorial With Example JS Code"
created: "2021-08-15T19:27:34+02:00"
modified: "2021-08-15T19:27:34+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-arrays ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Reverse Array – Tutorial With Example JS Code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/01/js-reverse.png 300w,
/news/content/images/size/w600/2021/01/js-reverse.png 600w,
/news/content/images/size/w1000/2021/01/js-reverse.png 1000w,
/news/content/images/size/w2000/2021/01/js-reverse.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/01/js-reverse.png" alt="JavaScript Reverse Array – Tutorial With Example JS Code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Reversing an array with certain restrictions is one of the most common challenges you will find in job interviews and coding quizzes. </p>
<p>This tutorial will show you <strong>five</strong> ways to reverse an array in JavaScript with and without the <code>reverse</code> method, along with code snippets that you can use.</p>
<h2 id="how-to-reverse-an-array-in-javascript-with-the-reverse-method">How to Reverse an Array in JavaScript with the Reverse Method</h2>
<p>When you need to reverse an array in JavaScript, you can use the <code>reverse</code> method, which will put the last element first and the first element last:</p>
let reversedNumbers = numbers.reverse();
console.log(reversedNumbers);
// [5, 4, 3, 2, 1]</code></pre>
<figcaption>Reversing an array with JavaScript</figcaption>
</figure>
<p>But keep in mind that the <code>reverse</code> method will also modify the original array:</p>
let reversedNumbers = numbers.reverse();
console.log(reversedNumbers);
// [5, 4, 3, 2, 1]
console.log(numbers);
// [5, 4, 3, 2, 1]</code></pre>
<figcaption>Reverse method modifies the original array</figcaption>
</figure>
<p>Some coding challenges may want you to preserve the original array, so let's look at how you can reverse an array without changing the original.</p>
<h2 id="how-to-reverse-an-array-in-javascript-with-the-spread-operator">How to Reverse an Array in JavaScript with the Spread Operator</h2>
<p>You can use a combination of the <a href="https://sebhastian.com/javascript-spread-operator/">spread operator</a> and the <code>reverse</code> method to reverse an array without changing the original. </p>
<p>First, you put the elements returned from the spread operator into a new array by enclosing the spread syntax with square brackets <code>[]</code>:</p><pre><code class="language-js">[...numbers]</code></pre>
<p>Then, you call the <code>reverse</code> method on the array. This way, the <code>reverse</code> method will be executed on the new array instead of the original:</p>
let reversedNumbers = [...numbers].reverse();
console.log(reversedNumbers);
// [5, 4, 3, 2, 1]
console.log(numbers);
// [1, 2, 3, 4, 5]</code></pre>
<figcaption>Using spread and reverse to reverse the array</figcaption>
</figure>
<p>Note: the <code>spread</code> method is ES6 syntax. When you need to support older browsers or you want to use ES5 syntax, you can combine the <code>slice</code> and <code>reverse</code> methods. Let's look at that now.</p>
<h2 id="how-to-reverse-an-array-in-javascript-with-the-slice-and-reverse-methods">How to Reverse an Array in JavaScript with the Slice and Reverse Methods </h2>
<p><a href="https://sebhastian.com/javascript-array-slice/">The <code>slice</code> method</a> is used to return the selected elements as a new array. When you call the method without any argument, it will return a new array that's identical to the original (from the first element to the last).</p>
<p>Next, you call the <code>reverse</code> method on the newly returned array. This is why the original array is not reversed:</p>
let reversedNumbers = numbers.slice().reverse();
console.log(reversedNumbers);
// [5, 4, 3, 2, 1]
console.log(numbers);
// [1, 2, 3, 4, 5]</code></pre>
<figcaption>Using slice and reverse methods to reverse the array</figcaption>
</figure>
<h2 id="how-to-reverse-an-array-in-javascript-without-the-reverse-method">How to Reverse an Array in JavaScript Without the Reverse Method</h2>
<p>Sometimes a job interview will challenge you to reverse an array without the <code>reverse</code> method. No problem! You can use the combination of <a href="https://sebhastian.com/javascript-for-loop/">a <code>for</code> loop</a> and an array <code>push</code> method like in the example below:</p>
let reversedNumbers = [];
for(let i = numbers.length -1; i &gt;= 0; i--) {
reversedNumbers.push(numbers[i]);
}
console.log(reversedNumbers);</code></pre>
<figcaption>Reversing an array with for loop and push method</figcaption>
</figure>
<h2 id="how-to-write-your-own-reverse-function-in-js">How to Write your Own Reverse Function in JS</h2>
<p>Finally, let's say you're tasked with writing your own reverse function that needs to reverse an array without creating a copy. This might seem complicated at first, but don't worry because it's actually quite easy.</p>
<p>What you need to do here is to swap the first and last elements of the array, then the second and second-to-last elements, and so on until you've swapped all the elements.</p>
<figcaption>A function to reverse an array</figcaption>
</figure>
<p>Let's write a function to do just that.</p>
<p>Write the function <code>customReverse</code> and store both the first index at <code>0</code> and the last index using <code>array.length - 1</code> as variables. </p><pre><code class="language-js">function customReverse(originalArray) {
let leftIndex = 0;
let rightIndex = originalArray.length - 1;
}</code></pre>
<p>Next, create <a href="https://sebhastian.com/javascript-while-loop/">a <code>while</code> loop</a> that runs as long as the <code>leftIndex</code> is smaller than the <code>rightIndex</code>. </p>
<p>Inside this loop, swap the value of the <code>leftIndex</code> and the <code>rightIndex</code>. You can temporary store one of the values in a temporary variable:</p><pre><code class="language-js">while (leftIndex &lt; rightIndex) {
// Swap the elements
let temp = originalArray[leftIndex];
originalArray[leftIndex] = originalArray[rightIndex];
originalArray[rightIndex] = temp;
}</code></pre>
<p>Finally, move the <code>leftIndex</code> up and the <code>rightIndex</code> down. When the <code>while</code> loop repeats, it will swap the second and second-to-last elements, and so on:</p>
let leftIndex = 0;
let rightIndex = originalArray.length - 1;
while (leftIndex &lt; rightIndex) {
// Swap the elements with temp variable
let temp = originalArray[leftIndex];
originalArray[leftIndex] = originalArray[rightIndex];
originalArray[rightIndex] = temp;
// Move indices to the middle
leftIndex++;
rightIndex--;
}
}</code></pre>
<figcaption>The complete reverse array code</figcaption>
</figure>
<p>The loop will stop right when there are no more elements to reverse. For odd-sized arrays, the value of <code>leftIndex</code> and <code>rightIndex</code> will be equal, so no more swapping. For even-sized, the <code>leftIndex</code> will be greater than the <code>rightIndex</code>.</p>
<p>You can test the function to see if it works properly like this:</p>
customReverse(myArray);
console.log(myArray);
// output is [5, 4, 3, 2, 1]</code></pre>
<figcaption>Testing reverse array function</figcaption>
</figure>
<h2 id="conclusion">Conclusion</h2>
<p>Congratulations! You've learned not only how to reverse an array in JavaScript, but also how to write your own reverse function.</p>
<p>Here are some more JavaScript tutorials that you may be interested in:</p>
<ul>
<li><a href="https://sebhastian.com/javascript-array-string/">JavaScript array to string (with and without commas)</a></li>
<li><a href="https://sebhastian.com/javascript-filter-array/">How to filter an array with JavaScript</a></li>
<li><a href="https://sebhastian.com/javascript-reduce/">Understanding JavaScript reduce method</a></li>
<li><a href="https://sebhastian.com/javascript-array-length/">Understanding JavaScript array length</a></li>
</ul>
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
