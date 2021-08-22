---
card: "https://cdn-media-1.freecodecamp.org/images/1*-WOpjPy_2Idl4jIAzPokRQ.jpeg"
tags: [Tech]
description: "The JavaScript engine (which is found in a hosting environmen"
author: "Milad E. Fahmy"
title: "The JavaScript Call Stack - What It Is and Why It s Necessary"
created: "2021-08-16T14:41:35+02:00"
modified: "2021-08-16T14:41:35+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-tech tag-life-lessons tag-startup tag-self-improvement tag-education ">
<header class="post-full-header">
<h1 class="post-full-title">The JavaScript Call Stack - What It Is and Why It's Necessary</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*-WOpjPy_2Idl4jIAzPokRQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*-WOpjPy_2Idl4jIAzPokRQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*-WOpjPy_2Idl4jIAzPokRQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*-WOpjPy_2Idl4jIAzPokRQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*-WOpjPy_2Idl4jIAzPokRQ.jpeg" alt="The JavaScript Call Stack - What It Is and Why It's Necessary">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>The JavaScript engine (which is found in a hosting environment like the browser), is a single-threaded interpreter comprising of a heap and a single call stack. The browser provides web APIs like the DOM, AJAX, and Timers.</p><p>This article is aimed at explaining what the call stack is and why it is needed. An understanding of the call stack will give clarity to how “function hierarchy and execution order” works in the JavaScript engine.</p><p>The call stack is primarily used for function invocation (call). Since the call stack is single, function(s) execution, is done, one at a time, from top to bottom. It means the call stack is synchronous.</p><p>The understanding of the call stack is vital to Asynchronous programming (which we will look at in a later article).</p><p>In Asynchronous JavaScript, we have a callback function, an event loop, and a task queue. The callback function is acted upon by the call stack during execution after the call back function has been pushed to the stack by the event loop.</p><p>But before we jump the gun, let us first attempt to answer the question - What is the call stack?</p><p>At the most basic level, a call stack is a data structure that uses the Last In, First Out (LIFO) principle to temporarily store and manage function invocation (call).</p><p>Let’s break down our definition:</p><p><strong>LIFO: </strong>When we say that the call stack, operates by the data structure principle of Last In, First Out, it means that the last function that gets pushed into the stack is the first to be pop out, when the function returns.</p><p>Let us take a look at a code sample to demonstrate LIFO by printing a stack trace error to the console.</p><pre><code class="language-js">function firstFunction(){
throw new Error('Stack Trace Error');
}
function secondFunction(){
firstFunction();
}
function thirdFunction(){
secondFunction();
}
console.log("Hello from firstFunction");
}
function secondFunction(){
firstFunction();
console.log("The end from secondFunction");
}
callMyself();
}
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
