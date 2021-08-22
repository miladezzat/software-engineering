---
card: "https://cdn-media-1.freecodecamp.org/images/1*DF0g7bNW5e2z9XS9N2lAiw.jpeg"
tags: [JavaScript]
description: "by Pablo Regen"
author: "Milad E. Fahmy"
title: "Node.js: what it is, when and how to use it, and why you should"
created: "2021-08-16T11:30:23+02:00"
modified: "2021-08-16T11:30:23+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development tag-technology tag-tech tag-startup ">
<header class="post-full-header">
<h1 class="post-full-title">Node.js: what it is, when and how to use it, and why you should</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*DF0g7bNW5e2z9XS9N2lAiw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*DF0g7bNW5e2z9XS9N2lAiw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*DF0g7bNW5e2z9XS9N2lAiw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*DF0g7bNW5e2z9XS9N2lAiw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*DF0g7bNW5e2z9XS9N2lAiw.jpeg" alt="Node.js: what it is, when and how to use it, and why you should">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Pablo Regen</p><p>You’ve probably read these sentences before…</p><blockquote>Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine</blockquote><blockquote>Node.js uses an event-driven, asynchronous non-blocking I/O model</blockquote><blockquote>Node.js operates on a single thread event loop</blockquote><p>… and were left wondering what all this meant. Hopefully by the end of this article you’ll have a better understanding about these terms as well as about what Node is, how it works, and why and when is a good idea to use it.</p><p>Let’s start by going over the terminology.</p><h4 id="i-o-input-output-">I/O (input/output)</h4><p>Short for input/output, <strong>I/O</strong> refers primarily to the program’s interaction with the system’s disk and network. Examples of I/O operations include reading/writing data from/to a disk, making HTTP requests, and talking to databases. They are very slow compared to accessing memory (RAM) or doing work on the CPU.</p><h4 id="synchronous-vs-asynchronous"><strong>Synchronous vs Asynchronous</strong></h4><p><a href="https://stackoverflow.com/questions/10570246/what-is-non-blocking-or-asynchronous-i-o-in-node-js" rel="noopener"><strong>Synchronous</strong></a> (or sync) execution usually refers to code executing in sequence. In sync programming, the program is executed line by line, one line at a time. Each time a function is called, the program execution waits until that function returns before continuing to the next line of code.</p><p><strong>Asynchronous</strong> (or async) execution refers to execution that doesn’t run in the sequence it appears in the code. In async programming the program doesn’t wait for the task to complete and can move on to the next task.</p><p>In the following example, the sync operation causes the alerts to fire in sequence. In the async operation, while alert(2) appears to execute second, it doesn’t.</p><pre><code class="language-js">// Synchronous: 1,2,3
alert(1);
alert(2);
alert(3);
// Asynchronous: 1,3,2
alert(1);
setTimeout(() =&gt; alert(2), 0);
alert(3);</code></pre><p>An async operation is often I/O related, although <code>setTimeout</code> is an example of something that isn’t I/O but still async. Generally speaking, anything computation-related is sync and anything input/output/timing-related is async. The reason for I/O operations to be done asynchronously is that they are very slow and would block further execution of code otherwise.</p><h4 id="blocking-vs-non-blocking"><strong>Blocking vs Non-blocking</strong></h4><p><strong>Blocking</strong> refers to operations that block further execution until that operation finishes while <strong>non-blocking</strong> refers to code that doesn’t block execution. Or as <a href="https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/#blocking" rel="noopener">Node.js</a> docs puts it, blocking is when the execution of additional JavaScript in the Node.js process must wait until a non-JavaScript operation completes.</p><p>Blocking methods execute synchronously while non-blocking methods execute asynchronously.</p><pre><code class="language-js">// Blocking
const fs = require('fs');
const data = fs.readFileSync('/file.md'); // blocks here until file is read
console.log(data);
moreWork(); // will run after console.log
// Non-blocking
const fs = require('fs');
fs.readFile('/file.md', (err, data) =&gt; {
if (err) throw err;
console.log(data);
});
moreWork(); // will run before console.log</code></pre><p>In the first example above, <code>console.log</code> will be called before <code>moreWork()</code>. In the second example <code>fs.readFile()</code> is non-blocking so JavaScript execution can continue and <code>moreWork()</code> will be called first.</p><p>In Node, non-blocking primarily refers to I/O operations, and JavaScript that exhibits poor performance due to being CPU intensive rather than waiting on a non-JavaScript operation, such as I/O, isn’t typically referred to as blocking.</p><p>All of the I/O methods in the Node.js standard library provide async versions, which are non-blocking, and accept callback functions. Some methods also have blocking counterparts, which have names that end with Sync.</p><p>Non-blocking I/O operations allow a single process to serve multiple requests at the same time. Instead of the process being blocked and waiting for I/O operations to complete, the I/O operations are delegated to the system, so that the process can execute the next piece of code. Non-blocking I/O operations provide a callback function that is called when the operation is completed.</p><h4 id="callbacks"><strong>Callbacks</strong></h4><p>A <strong>callback</strong> is a function passed as an argument into another function, which can then be invoked (called back) inside the outer function to complete some kind of action at a convenient time. The invocation may be immediate (sync callback) or it might happen at a later time (async callback).</p><pre><code class="language-js">// Sync callback
function greetings(callback) {
callback();
}
greetings(() =&gt; { console.log('Hi'); });
moreWork(); // will run after console.log
// Async callback
const fs = require('fs');
fs.readFile('/file.md', function callback(err, data) { // fs.readFile is an async method provided by Node
if (err) throw err;
console.log(data);
});
moreWork(); // will run before console.log
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
