---
card: "https://cdn-media-1.freecodecamp.org/images/1*btQyN4AbhZ-RWQQser8y5A.jpeg"
tags: [JavaScript]
description: "I came across this freeCodeCamp challenge and got stuck for s"
author: "Milad E. Fahmy"
title: "Let’s explore Slice(), Splice() & Spread Syntax(…) in JavaScript"
created: "2021-08-15T23:45:48+02:00"
modified: "2021-08-15T23:45:48+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-es6 tag-tech tag-programming tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">Let’s explore Slice(), Splice() &amp; Spread Syntax(…) in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*btQyN4AbhZ-RWQQser8y5A.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*btQyN4AbhZ-RWQQser8y5A.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*btQyN4AbhZ-RWQQser8y5A.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*btQyN4AbhZ-RWQQser8y5A.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*btQyN4AbhZ-RWQQser8y5A.jpeg" alt="Let’s explore Slice(), Splice() &amp; Spread Syntax(…) in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I came across this <a href="https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice" rel="noopener">freeCodeCamp</a> challenge and got stuck for some time thinking about how I could find a way to solve it. They already mentioned solving using Slice &amp; Splice. I was confused at that time when to use Slice and when to use Splice.</p><p>Here, I’m gonna share how I solved it with those methods.</p><p>Both Slice and Splice are used to manipulate arrays. Let’s see how they do it.</p><h3 id="slice-">Slice:</h3><p>The Slice method takes 2 arguments.</p><p><strong>1st Argument</strong>: Specifies from where the selection should be started.</p><p>For Example:</p><pre><code class="language-javascript">var arr1 = [1,5,8,9];
arr1.slice(1); // [5,8,9]</code></pre><p>From the first index (5) it will return the elements.</p><p><strong>2nd Argument</strong>: Specifies at which level the endpoint should be. If you didn’t put this in the parenthesis while calling the slice method, it will return the elements from the starting index to the end of the array.</p><pre><code class="language-javascript">var arr1 = [1,5,8,9];
console.log(arr1.slice(1,3));
//[ 5, 8 ]</code></pre><p>If you put a negative number while calling, the selection will be selected from the end of the array.</p><pre><code class="language-javascript">var arr1 = [1,5,8,9];
console.log(arr1.slice(-2));
//[ 8, 9 ]</code></pre><p><strong>Note: Slice always returns the selected elements from the array.</strong></p><p><strong>Slice won’t change the array. The array remains intact. See the below Example:</strong></p><pre><code class="language-javascript">var arr1 = [1,5,8,9];
arr1.slice(2);
console.log(arr1);
// [ 1, 5, 8, 9 ]</code></pre><p>Even if you made some changes to the array it won’t affect it. It will return the original array as it is at the start.</p><h3 id="splice-"><strong>Splice:</strong></h3><p>It can take multiple arguments.</p><p>That means,</p><p><strong>1st Argument</strong>: Specifies at which position a new element or existing element should be added/removed. If the value is negative the position will be counted from the end of the array.</p><p><strong>2nd Argument</strong>: The numbers of elements to be removed from the starting position. If it is 0, then no elements will be removed. If it is not passed, it will delete all elements from the starting position.</p><pre><code class="language-javascript">var arr1 = [1,5,8,9];
console.log(arr1.splice(1,2));
// [ 5, 8 ]</code></pre><p><strong>3rd Argument -&gt;nth Argum</strong>ent: The value of the items you want to add to the array.</p><pre><code class="language-javascript">var arr1 = [1,5,8,9];
console.log(arr1.splice(1,2,'Hi','Medium'));
// [5,8]</code></pre><p>You may think that we have added ‘Hi’,’Medium’ to the array but it doesn't show here…. Right?</p><p>Yes, we have consoled the<strong> arr1.splice(1,2,’Hi’,’Medium’).</strong></p><p><strong>Note:</strong></p><ul><li><strong>Splice will return removed elements from the array only.</strong></li><li><strong>Splice will change the original array</strong></li></ul><pre><code class="language-javascript">var arr1 = [1,5,8,9];
arr1.splice(1,2,'Hi','Medium');
console.log(arr1);
// [ 1, 'Hi', 'Medium', 9 ]</code></pre><h3 id="spread-syntax-"><strong>Spread Syntax:</strong></h3><p><strong>Definition</strong>: Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.</p><p>Let's have an example for this:</p><pre><code class="language-javascript">var arr1 = [1,3,6,7];
var arr2 = [5,arr1,8,9];
console.log(arr2);
// [ 5, [ 1, 3, 6, 7 ], 8, 9 ]</code></pre><p>I want this to be in a single array like <strong>[ 5, 1, 3, 6, 7, 8, 9 ].</strong></p><p>I can use this Spread Syntax to solve this:</p><pre><code class="language-javascript">var arr1 = [1,3,6,7];
var arr2 = [5,...arr1,8,9];
console.log(arr2);
//[ 5, 1, 3, 6, 7, 8, 9 ]</code></pre><p>Another main use of Spread Syntax is while copying an array:</p><pre><code class="language-javascript">var arr = [1, 2, 3];
var arr2 = arr;
arr2.push(4);
console.log(arr2);
// [ 1, 2, 3, 4 ]
console.log(arr);
// [ 1, 2, 3, 4 ]</code></pre><p>I added “<strong>4</strong>” to <strong>arr2 </strong>only. But it made the change to arr also.</p><p>We can solve this using the Spread Syntax as follows...</p><pre><code class="language-javascript">var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4);
console.log(arr2);
// [ 1, 2, 3, 4 ]
console.log(arr);
// [ 1, 2, 3]</code></pre><p>You may refer to the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax" rel="noopener">MDN</a> documentation for more info about Spread Syntax.</p><p><strong>So, let’s have a look at the challenge.</strong></p><pre><code class="language-javascript">function frankenSplice(arr1, arr2, n) {
// It's alive. It's alive!
let array2Copy = [...arr2];
array2Copy.splice(n,0, ...arr1);
//console.log(array2Copy);
return array2Copy;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);</code></pre><p>The main condition of this challenge is “should not alter arr1/arr2 after function has executed”.</p><p>So, created a <strong>copy array of arr2,</strong> and <strong>using the splice</strong> <strong>method</strong> add the arr1 inside the arr2’s copy which is named as <strong>array2Copy.</strong></p><h4 id="final-conclusion-"><strong>Final Conclusion:</strong></h4><p>-&gt;Slice method will</p><ul><li>return the selected elements from the array</li><li>take 2 arguments</li><li>not alter the original array</li></ul><p>-&gt;Splice method will</p><ul><li>return the removed elements of the array</li><li>take multiple arguments</li><li>alters the original array</li></ul><p>This is my first ever tutorial about coding — thanks for reading! Your feedback will help me to shape up my coding &amp; writing skill.</p><p>Happy Coding…!</p><p>Connect with me through <a href="https://twitter.com/parathantl" rel="noopener">Twitter</a></p>
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
