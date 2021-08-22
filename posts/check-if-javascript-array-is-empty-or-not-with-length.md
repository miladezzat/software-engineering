---
card: "/images/default.jpg"
tags: [JavaScript]
description: When you're programming in JavaScript, you might need to know
author: "Milad E. Fahmy"
title: "How to Check if a JavaScript Array is Empty or Not with .length"
created: "2021-08-15T19:28:21+02:00"
modified: "2021-08-15T19:28:21+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-arrays ">
<header class="post-full-header">
<h1 class="post-full-title">How to Check if a JavaScript Array is Empty or Not with .length</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/09/road-690087_1920.jpg 300w,
/news/content/images/size/w600/2020/09/road-690087_1920.jpg 600w,
/news/content/images/size/w1000/2020/09/road-690087_1920.jpg 1000w,
/news/content/images/size/w2000/2020/09/road-690087_1920.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/09/road-690087_1920.jpg" alt="How to Check if a JavaScript Array is Empty or Not with .length">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>When you're programming in JavaScript, you might need to know how to check whether an array is empty or not.</p>
<p>To check if an array is empty or not, you can use the .length property.</p>
<p>The length property sets or returns the number of elements in an array. By knowing the number of elements in the array, you can tell if it is empty or not. An empty array will have <code>0</code> elements inside of it.</p>
<p>Let’s run through some examples.</p>
<h2 id="-length-example-syntax">.length Example Syntax</h2><pre><code class="language-javascript">Const myArray = [‘Horses’, ‘Dogs’, ‘Cats’];</code></pre>
<p>Here we create a variable pointing towards an empty array.</p>
<p>Using the length property, we can check the length of the array:</p><pre><code class="language-javascript">myArray.length</code></pre>
<p>This will return 3, because there are 3 items in the array.</p>
<p>To check if the array is empty or not with .length, we can do this in in three ways.</p>
<h3 id="-length-example-one">.length example one</h3>
<p>First, let's create a new array with no elements. </p><pre><code class="language-JavaScript">const arr = []</code></pre>
<p>Now we can check if the array is empty by using <code>.length</code>.</p><pre><code class="language-JavaScript">arr.length</code></pre>
<p>This will return 0, as there are 0 items in the array. </p>
<h3 id="-length-example-two">.length example two</h3>
<p>We can also explicitly check if the array is empty or not.</p>
<p><code>if (arr.length === 0) { console.log("Array is empty!") }</code></p>
<p>If our array is empty, the above message will get logged. If the array has elements in it, the code within the <code>if</code> block will not run.</p>
<p>Here's the third way to check whether or not an array is empty using .length. </p>
<h3 id="-length-example-three">.length example three</h3>
<p>By combining the use of the length property and the logical "not" operator in JavaScript, the "!" symbol, we can check if an array is empty or not. </p>
<p>The <code>!</code> operator negates an expression. That is, we can use it to return <code>true</code> if an array is empty.</p>
<p>For this example, let's open up our JavaScript console. To open up your console in Chrome, you can click Inpsect -&gt; Console.</p>
<p>First, create an array with no items in it.</p>
<p>Next, let's use the logical "not" operator, along with our .length property, to test if the array is empty or not.</p>
<p>If we had not used the "not" operator, <code>arr.length</code> would have returned <code>0</code>. With the operator added, it will return <code>true</code> if its operand is <code>false</code>. Because arr.length is <code>0</code>, or false, it returns <code>true</code>. </p>
<p>Let's use this with an <code>if</code> statement, and print out a message if our array is empty. </p>
<p>When checking if an array is empty or not, it's often best to also check if the array is indeed an array. </p>
<p>Why? &nbsp;</p>
<p>Because there might be the case when you were expecting to check the length of an array, but instead you're given a different data type, for example, a string:</p>
<p>Because the <code>length property</code> can be used on other data types, it is good to also check that your array is indeed an array as you were expecting. </p>
<p>I suggest you also use the <code>Array.isArray()</code> method to confirm your array is an array. This method determines if whether what was passed in is an array or not. If what was passed in was an array, this method will return <code>true</code>. </p>
<p>Let's add this method to our example.</p>
<h3 id="how-to-use-the-array-isarray-method">How to use the Array.isArray() method</h3>
<h2 id="wrapping-up">Wrapping up</h2>
<p>In this article, we learned that you can use the <code>length</code> property in JavaScript in various ways to check if an array is empty or not. The <code>length</code> property returns the number of items in an array. </p>
<p>We also learned that it is best to also use the <code>Array.isArray</code> method when using the <code>.length</code> property, to check if the passed value is an array as you're expecting.</p>
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
