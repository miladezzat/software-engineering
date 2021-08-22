---
card: "https://cdn-media-1.freecodecamp.org/images/1*SYxxUFJirsj3BH1-LCsFZw.jpeg"
tags: [JavaScript]
description: by William Gottschalk
author: "Milad E. Fahmy"
title: "Write Modern Asynchronous Javascript using Promises, Generators, and Coroutines"
created: "2021-08-15T19:55:04+02:00"
modified: "2021-08-15T19:55:04+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-es6 tag-software-development tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Write Modern Asynchronous Javascript using Promises, Generators, and Coroutines</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*SYxxUFJirsj3BH1-LCsFZw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*SYxxUFJirsj3BH1-LCsFZw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*SYxxUFJirsj3BH1-LCsFZw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*SYxxUFJirsj3BH1-LCsFZw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*SYxxUFJirsj3BH1-LCsFZw.jpeg" alt="Write Modern Asynchronous Javascript using Promises, Generators, and Coroutines">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by William Gottschalk</p>
<h1 id="write-modern-asynchronous-javascript-using-promises-generators-and-coroutines">Write Modern Asynchronous Javascript using Promises, Generators, and Coroutines</h1>
<figcaption>How you might feel after learning about Promises, Generators, and Coroutines</figcaption>
</figure>
<p>Over the years, “Callback Hell” is often cited as one of the most hated design patterns in Javascript for managing concurrency. Just in case you’ve forgotten what that looks like, here is an example of a varying and processing a transaction in Express:</p>
<h4 id="promises-were-supposed-to-save-us-">Promises were supposed to save us…</h4>
<p>I was told that promises would allow us Javascript developers to write asynchronous code as if it were synchronous by wrapping our async functions in a special object. In order to access the value of the Promise, we call either <strong><em>.then</em></strong> or <strong><em>.catch</em></strong> on the Promise object. But what happens when we try to refactor the above example using Promises?</p>
<p>Since each function inside of the callback is scoped, we cannot access the user object inside of the second <strong><em>.then</em></strong> callback.</p>
<p>So after a little digging, I couldn’t find an elegant solution, but I did find a frustrating one:</p>
<blockquote>Just indent your promises so that they have proper scoping.</blockquote>
<p>Indent my promises!? So its back to the Pyramid of Doom now?</p>
<p>I would argue that the nested callback version looks cleaner and is easier to reason about than the nested promise version.</p>
<h4 id="async-await-will-save-us-">Async Await Will Save Us!</h4>
<p>The <strong><em>async</em></strong> and<strong><em> await</em></strong> keywords will allow us to write our javascript code as though it is synchronous. Here is code written with those keywords coming in ES7:</p>
<p>Unfortunately the majority of ES7 features including <strong><em>async</em></strong><em>/<strong>await</strong></em> have not been natively implemented and therefore, require the use of a transpiler. However, you can write code that looks exactly like the code above using ES6 features that have been implemented in most modern browsers as well as Node version 4+.</p>
<h4 id="the-dynamic-duo-generators-and-coroutines">The Dynamic Duo: Generators and Coroutines</h4>
<p>Generators are a great metaprogramming tool. They can be used for things like lazy evaluation, iterating over memory intensive data sets and on-demand data processing from multiple data sources using a library like RxJs.</p>
<p>However, we wouldn’t want to use generators alone in production code because they forces us to reason about a process over time. And each time we call next, we jump back to our generator like a GOTO statement.</p>
<p>Coroutines understand this and remedy this situation by wrapping a generator and abstracting away all of the complexity.</p>
<h4 id="the-es6-version-using-coroutine">The ES6 version using Coroutine</h4>
<p>Coroutines allow us to <strong><em>yield</em></strong> our asynchronous functions one line at a time, making our code look synchronous.</p>
<p>It’s important to note that I am using the Co library. Co’s coroutine will execute the generator immediately where as Bluebird’s coroutine will return a function that you must invoke to run the generator.</p>
<p>Let’s establish some basic rules to using coroutines:</p>
<ol>
<li>Any function to the right of a <strong><em>yield</em></strong> must return a Promise.</li>
<li>If you want to execute your code now, use <strong><em>co</em></strong>.</li>
<li>If you want to execute your code later, use <strong><em>co.wrap</em></strong>.</li>
<li>Make sure to chain a <strong><em>.catch</em></strong> at the end of your coroutine to handle errors. Otherwise, you should wrap your code in a try/catch block.</li>
<li>Bluebird’s <strong><em>Promise.coroutine</em></strong> is the equivalent to Co’s <strong><em>co.wrap</em></strong> and not the <strong><em>co</em></strong> function on it’s own.</li>
</ol>
<h4 id="what-if-i-want-to-run-multiple-processes-concurrently">What if I want to run multiple processes concurrently?</h4>
<p>You can either use objects or arrays with the yield keyword and then destructure the result.</p>
<h4 id="libraries-that-you-can-use-today-">Libraries that you can use today:</h4>
<p><a href="http://bluebirdjs.com/docs/api/promise.coroutine.html" rel="noopener"><strong>Promise.coroutine | bluebird</strong></a><br><a href="http://bluebirdjs.com/docs/api/promise.coroutine.html" rel="noopener"><em>Bluebird is a fully featured JavaScript promises library with unmatched performance.</em>bluebirdjs.com</a><a href="https://www.npmjs.com/package/co" rel="noopener"><strong>co</strong></a><br><a href="https://www.npmjs.com/package/co" rel="noopener"><em>generator async control flow goodness</em>www.npmjs.com</a><a href="https://babeljs.io/" rel="noopener"><strong>Babel · <em>The compiler for writing next generation JavaScript</em></strong></a><br><a href="https://babeljs.io/" rel="noopener">The compiler for writing next generation JavaScriptbabeljs.io</a><a href="https://www.npmjs.com/package/asyncawait" rel="noopener"><strong>asyncawait</strong></a><br><a href="https://www.npmjs.com/package/asyncawait" rel="noopener"><em>async/await for node.js</em>www.npmjs.com</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
