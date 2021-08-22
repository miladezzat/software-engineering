---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9ceb740569d1a4ca34e7.jpg"
tags: [JavaScript]
description: The async / await operators make it easier to implement many
author: "Milad E. Fahmy"
title: "Async/Await and Promises Explained"
created: "2021-08-15T19:30:59+02:00"
modified: "2021-08-15T19:30:59+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-promises tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">Async/Await and Promises Explained</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ceb740569d1a4ca34e7.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ceb740569d1a4ca34e7.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ceb740569d1a4ca34e7.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ceb740569d1a4ca34e7.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ceb740569d1a4ca34e7.jpg" alt="Async/Await and Promises Explained">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>The <code>async</code> / <code>await</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators" rel="nofollow">operators</a> make it easier to implement many async Promises. They also allow engineers to write clearer, more succinct, testable code.</p>
<p>To understand this subject, you should have a solid understanding of how <a href="https://guide.freecodecamp.org/javascript/promises" rel="nofollow">Promises</a> work.</p>
<h2 id="basic-syntax"><strong>Basic Syntax</strong></h2><pre><code class="language-javascript">function slowlyResolvedPromiseFunc(string) {
return new Promise(resolve =&gt; {
setTimeout(() =&gt; {
resolve(string);
}, 5000);
});
}
async function doIt() {
const myPromise = await slowlyResolvedPromiseFunc("foo");
console.log(myPromise); // "foo"
}
doIt();</code></pre>
<p>There are a few things to note:</p>
<ul>
<li>The function that encompasses the <code>await</code> declaration must include the <code>async</code> operator. This will tell the JS interpreter that it must wait until the Promise is resolved or rejected.</li>
<li>The <code>await</code> operator must be inline, during the const declaration.</li>
<li>This works for <code>reject</code> as well as <code>resolve</code>.</li>
</ul>
<hr>
<h2 id="nested-promises-vs-async-await"><strong>Nested Promises vs. <code>Async</code> / <code>Await</code></strong></h2>
<p>Implementing a single Promise is pretty straightforward. In contrast, Chained Promises or the creation of a dependency pattern may produce “spaghetti code”.</p>
<p>The following examples assume that the <a href="https://github.com/request/request-promise" rel="nofollow"><code>request-promise</code></a> library is available as <code>rp</code>.</p>
<h3 id="chained-nested-promises"><strong>Chained/Nested Promises</strong></h3><pre><code class="language-javascript">// First Promise
const fooPromise = rp("http://domain.com/foo");
fooPromise.then(resultFoo =&gt; {
// Must wait for "foo" to resolve
console.log(resultFoo);
const barPromise = rp("http://domain.com/bar");
const bazPromise = rp("http://domain.com/baz");
return Promise.all([barPromise, bazPromise]);
}).then(resultArr =&gt; {
// Handle "bar" and "baz" resolutions here
console.log(resultArr[0]);
console.log(resultArr[1]);
});</code></pre>
<h3 id="async-and-await-promises"><strong><code>async</code> and <code>await</code> Promises</strong></h3><pre><code class="language-javascript">// Wrap everything in an async function
async function doItAll() {
// Grab data from "foo" endpoint, but wait for resolution
console.log(await rp("http://domain.com/foo"));
// Concurrently kick off the next two async calls,
// don't wait for "bar" to kick off "baz"
const barPromise = rp("http://domain.com/bar");
const bazPromise = rp("http://domain.com/baz");
// After both are concurrently kicked off, wait for both
const barResponse = await barPromise;
const bazResponse = await bazPromise;
console.log(barResponse);
console.log(bazResponse);
}
// Finally, invoke the async function
doItAll().then(() =&gt; console.log('Done!'));</code></pre>
<p>The advantages of using <code>async</code> and <code>await</code> should be clear. This code is more readable, modular, and testable.</p>
<p>It’s fair to note that even though there is an added sense of concurrency, the underlying computational process is the same as the previous example.</p>
<hr>
<h2 id="handling-errors-rejection"><strong>Handling Errors / Rejection</strong></h2>
<p>A basic try-catch block handles a rejected Promise.</p><pre><code class="language-javascript">async function errorExample() {
try {
const rejectedPromise = await Promise.reject("Oh-oh!");
} catch (error) {
console.log(error); // "Uh-oh!"
}
}
errorExample();</code></pre>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
