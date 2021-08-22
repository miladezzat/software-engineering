---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca077740569d1a4ca48d3.jpg"
tags: [JavaScript]
description: queueMicrotask is a new browser API which can be used to conv
author: "Milad E. Fahmy"
title: "An Introduction to JavaScript's queueMicrotask"
created: "2021-08-15T19:32:50+02:00"
modified: "2021-08-15T19:32:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-browsers tag-api tag-asynchronous-programming ">
<header class="post-full-header">
<h1 class="post-full-title">An Introduction to JavaScript's queueMicrotask</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca077740569d1a4ca48d3.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca077740569d1a4ca48d3.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca077740569d1a4ca48d3.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca077740569d1a4ca48d3.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca077740569d1a4ca48d3.jpg" alt="An Introduction to JavaScript's queueMicrotask">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h2 id="introduction">Introduction</h2>
<p><strong>queueMicrotask</strong> is a new browser API which can be used to convert your synchronous code into async:</p><pre><code class="language-javascript">queueMicrotask(() =&gt; {
console.log('hey i am executed asychronously by queueMicrotask');
});</code></pre>
<p>It's similar to what we were doing using setTimeout:</p><pre><code class="language-javascript">setTimeout(() =&gt; {
console.log('hey i am executed asychronously by setTimeout');
}, 0);</code></pre>
<p>So what's the use of <strong>queueMicrotask</strong> when we already have <strong>setTimeout</strong> ?</p>
<blockquote><strong>queueMicrotask</strong> adds the function (task) into a queue and each function is executed one by one (FIFO) after the current task has completed its work and when there is no other code waiting to be run before control of the execution context is returned to the browser's event loop.</blockquote>
<p>Basically the tasks of <strong>queueMicrotask</strong> are executed just after current callstack is empty before passing the execution to the event loop.</p>
<blockquote>In the case of <strong>setTimeout</strong>, each task is executed from the event queue, after control is given to the event loop.</blockquote>
<p>So if we execute <strong>setTimeout</strong> first and then <strong>queueMicrotask</strong>, which will be called first? &nbsp;Execute the below code and check out yourself:</p><pre><code class="language-javascript">setTimeout(() =&gt; {
console.log('hey i am executed asychronously by setTimeout');
},0);
queueMicrotask(() =&gt; {
console.log('hey i am executed asychronously by queueMicrotask');
}); </code></pre>
<p>Node.js does the same thing with "process.nextTick".</p>
<h2 id="when-to-use-it">When to Use <strong>It</strong></h2>
<p>There is no rule for when to use <strong>queueMicrotask, </strong>but it can be used cleverly to run a piece of code without stopping the current execution.</p>
<p>For example, let's say we have an array where we are maintaining list of values. After every value is inserted, we sort the array so that searching for values is faster.</p><pre><code>var arr=[];
function add(value){
arr.push(value);
arr.sort();
}</code></pre>
<p>However, searching for an element is done whenever someone uses a search input box. This means the event handler will be called after control is transferred to the event loop, so sorting the data blocks the execution of other important synchronous code.</p>
<p>Here's how we can use <strong>queueMicrotask</strong> to improve our code:</p><pre><code class="language-javascript">var arr = [];
function add(value) {
arr.push(value);
queueMicrotask(() =&gt; {
arr.sort();
})
}</code></pre>
<h2 id="references">References</h2>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/queueMicrotask">https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/queueMicrotask</a></li>
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
