---
card: "/images/default.jpg"
tags: [JavaScript]
description: I had a really interesting bug recently that, at first glance
author: "Milad E. Fahmy"
title: "Sparse Arrays vs Dense Arrays in JavaScript — Explained with Examples"
created: "2021-08-15T19:27:04+02:00"
modified: "2021-08-15T19:27:04+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-arrays ">
<header class="post-full-header">
<h1 class="post-full-title">Sparse Arrays vs Dense Arrays in JavaScript — Explained with Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/01/UwzSmIVOo.jpeg 300w,
/news/content/images/size/w600/2021/01/UwzSmIVOo.jpeg 600w,
/news/content/images/size/w1000/2021/01/UwzSmIVOo.jpeg 1000w,
/news/content/images/size/w2000/2021/01/UwzSmIVOo.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/01/UwzSmIVOo.jpeg" alt="Sparse Arrays vs Dense Arrays in JavaScript — Explained with Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I had a really interesting bug recently that, at first glance, completely stumped me.<br>I saw I had an array that was empty. But the length was 31.</p>
<p>Wait, what?</p>
<h2 id="what-are-dense-arrays">What are dense arrays?</h2>
<p>Dense arrays are the most well known type of <code>Array</code>. They are the "normal" arrays most are familiar with.</p>
<p>A dense array is an array where the elements are all sequential starting at index 0.</p>
<p>In this instance, the length property of an array accurately specifies the number of elements in the array.</p><pre><code class="language-javascript">let array = [1, 2, 3, 4, 5]
array.length // Returns 5
</code></pre>
<h2 id="what-are-sparse-arrays">What are sparse arrays?</h2>
<p>A sparse array is one in which the elements are not sequential, and they don't always start at 0.</p>
<p>They are essentially <code>Array</code>s with "holes", or gaps in the sequence of their indices.</p>
<p>So an example would be:</p><pre><code class="language-javascript">let array = [];
array[100] = "Holes now exist";
array.length // 101, but only 1 element</code></pre>
<p>Normally, the length property of an <code>Array</code> accurately returns the number of elements in the array, but in sparse arrays they don't. If the array is sparse, the value of the length property is greater than the number of elements.</p>
<h1 id="why-can-arrays-be-sparse">Why can <code>Array</code>s be sparse?</h1>
<p><code>Array</code>s under the hood in JavaScript are <code>Object</code>s. Their keys are numbers, and their values are the elements.</p>
array[20] = {};
array[100] = {};
array[19] = {};
alert(array.length); // Logs 101
</code></pre>
<p>The <code>length</code> property on an <code>Array</code> takes the last element's index and adds one. So if you have an array with holes between index 0 through 100, and an element at index 101, the <code>length</code> will return 101, as it's the last index + 1.</p>
<p>The above happens regardless of how many elements are in the <code>Array</code>.</p>
<p>The spec specifically details this behavior if you <a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.5.2">want to read more on the ECMAScript spec here.</a></p>
<h1 id="how-do-you-get-a-sparse-array">How do you get a sparse array?</h1>
<p>You have seen some ways already, but there are more:</p>
<h2 id="use-the-array-object">Use the <code>Array</code> object</h2><pre><code class="language-javascript">let array = new Array(10); // array initialized with no elements
array.length // 10
</code></pre>
<h2 id="insert-a-key-value-at-a-certain-index">Insert a key/value at a certain index</h2><pre><code class="language-javascript">array[1000] = 0; // Assignment adds one element
array.length // But .length returns 1001
</code></pre>
<h2 id="use-the-delete-operator">Use the <code>delete</code> operator</h2><pre><code class="language-javascript">let array = [1, 2, 3, 4, 5]
delete array[0]
array.length // .length returns 5
</code></pre>
<h2 id="initialize-an-array-with-holes">Initialize an <code>Array</code> with holes</h2><pre><code class="language-javascript">[,,,,] // You have created an array with nothing but holes
[1,2,3,4,,5] // Oh no, you mistyped a comma and entered a hole between 4 and 5!
</code></pre>
<h2 id="browser-implementation-differences">Browser implementation differences</h2>
<p>The browser you are on (as well as the version) represents sparse array's holes differently.</p>
<p>Chrome displays this the best (in my opinion) and shows <code>empty</code>.<br></p>
<p>The newest version of Firefox (80.0.1 at the time of witting) shows it like so:<br></p>
<h2 id="conclusion">Conclusion</h2>
<p>The final solution of the bug I introduced at the beginning is to just check that the element isn't falsy before using it. &nbsp;Something like:</p><pre><code class="language-javascript">let array = [,,,,]
for(let i = 0; i &lt; array.length; i++){
if (array[i]) {
console.log(array[i])
}
}
</code></pre>
<p>Because the holes are falsy, it won't do the logic you are trying on any holes you have in the <code>Array</code>.</p>
<p>So why did my browser show it as empty?</p>
<p>I was using Safari and it showed nothing for the holes. So I &nbsp;logged out the <code>Array</code>'s length which was 31, and when I logged out the contents it just showed me an empty array! Pretty confusing at first glance.</p>
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
