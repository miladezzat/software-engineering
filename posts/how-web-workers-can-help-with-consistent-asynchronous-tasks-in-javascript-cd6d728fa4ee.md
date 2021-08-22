---
card: "https://cdn-media-1.freecodecamp.org/images/1*tMKwMb5J5ETFpeOUYQyMKQ.png"
tags: [JavaScript]
description: "by Danny Mcwaves"
author: "Milad E. Fahmy"
title: "How to use Web Workers to schedule consistent asynchronous tasks in JavaScript"
created: "2021-08-16T10:18:29+02:00"
modified: "2021-08-16T10:18:29+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-web-development tag-productivity tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to use Web Workers to schedule consistent asynchronous tasks in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*tMKwMb5J5ETFpeOUYQyMKQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*tMKwMb5J5ETFpeOUYQyMKQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*tMKwMb5J5ETFpeOUYQyMKQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*tMKwMb5J5ETFpeOUYQyMKQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*tMKwMb5J5ETFpeOUYQyMKQ.png" alt="How to use Web Workers to schedule consistent asynchronous tasks in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
self.addEventListener(‘message’,  e =&gt; {
let url = e.data;
fetch(url).then(res =&gt; {
if (res.ok) {
self.postMessage(res);
} else {
throw new Error(’error with server’);
}
}).catch(err =&gt; {
self.postMessage(err.message);
});
})</code></pre><blockquote>The <code><a href="https://www.w3.org/TR/workers/#dom-worker" rel="noopener">Worker()</a></code> constructor call creates a worker and returns a <code><a href="https://www.w3.org/TR/workers/#worker" rel="noopener">Worker</a></code> object representing that worker, which is used to communicate with the worker.</blockquote><pre><code class="language-js">let worker = new Worker('fetch.js');</code></pre><p>The constructor takes the name of the script as an argument. If the specified file exists, the worker spawns a new thread and then completely downloads and executes the script. If the file is unavailable, the worker fails silently.</p><h4 id="using-web-workers"><strong>Using Web Workers</strong></h4><p>Web workers communicate with the parent thread (the creator of the worker) using an <a href="https://developer.mozilla.org/en-US/docs/Web/Events" rel="noopener">event</a> model and messages. It uses <code><a href="http://www.w3.org/TR/webmessaging/#message-ports" rel="noopener">MessagePort</a></code> objects behind the scenes, and thus supports all the same features, such as sending structured data and transferring binary data.</p><p>To receive messages from a worker, use the <code><a href="https://www.w3.org/TR/workers/#handler-worker-onmessage" rel="noopener">onmessage</a></code> event handler on the <code>Worker</code> object.</p><pre><code class="language-js">worker.onmessage = (e) =&gt; { // block statements }</code></pre><p>You can also use the <code>addEventListener</code> method.</p><pre><code class="language-js">worker.addEventListener('message', (e) =&gt; { // block statements })</code></pre><p>To receive a message inside of the worker, the <code>onmessage</code> event handler method is used.</p><pre><code class="language-js">onmessage = (e) =&gt; { // blocks of statements }</code></pre><p>You can also use an <code>addEventListener</code> method as exemplified in <code>fetch.js</code>.</p><p>To send data to and from a worker, use the <code><a href="https://www.w3.org/TR/workers/#dom-worker-postmessage" rel="noopener">postMessage()</a></code> method. Structured data such as text and JSON can be sent over this communication channel. Read more on data types that are supported by <code>messagePort</code> over <a href="https://www.html5rocks.com/en/tutorials/workers/basics/#toc-transferrables" rel="noopener">here</a>.</p><pre><code class="language-js">worker.postMessage('some-lousy-data');
// in the parent thread
self.postMessage('some-resulting-data');
// in the worker thread.</code></pre><p>This particular message-passing limitation is in place for a number of reasons: it keeps the child worker running securely (since it can’t, blatantly, affect a parent script) and it keeps the parent page thread-safe (having the DOM be thread safe would be a logistical nightmare for browser developers).</p><h4 id="terminating-a-worker-and-handling-errors"><strong>Terminating a worker and handling errors</strong></h4><p>If you need to immediately terminate a running worker from the main thread, you can do so by calling the worker’s terminate method:</p><pre><code class="language-js">worker.terminate();</code></pre><p>In the worker thread, workers may close themselves by calling their own close method:</p><pre><code class="language-js">close();</code></pre><p>The worker thread is killed immediately without an opportunity to complete its operations or clean up after itself.</p><p>Runtime errors can be handled by explicitly listening for an error event that might be fired by the <code>Worker</code> object.</p><pre><code class="language-js">worker.addEventListener('error', (e) =&gt; { // block of statements })</code></pre><h4 id="web-worker-limitations"><strong>Web Worker Limitations</strong></h4><ol><li>All web worker scripts must be served from the same domain.</li><li>You cannot have direct access to the DOM and the global document.</li><li>The window object exposes limited API. For instance, <code>location</code> and <code>navigator</code> and <code>XMLHttpRequest</code> objects.</li><li>Restricted local access. Web workers do not work on static files. For instance <code>file://my/file/on/my/computer</code>.</li></ol><p>If you are using a worker to handle a task that ultimately needs to update the main user interface, you will need to use the messaging system to pass the data between the worker and the main application. The main application is then responsible for updating the UI.</p><p>Similarly, if your worker needs access to data from the document, window, or parent objects, you will need to send it in the <code>postMessage()</code> call that is used to start the worker.</p><h4 id="conclusion">Conclusion</h4><p>Creating web workers will spawn real OS-level threads that consume system resources. Just be conscious that this will affect the performance of the user’s whole computer, not just the web browser. As such, web workers should be used responsibly and closed when they are no longer in use to free up resources for other applications.</p><p>Using web workers can have a significant impact on the performance of web applications; and more responsive applications have a good effect on user experience.</p><p>For a more in-depth information on web workers such as importing scripts in workers and the scopes of web workers, please visit <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers" rel="noopener">MDN</a> or <a href="https://www.w3.org/TR/workers/" rel="noopener">WHATWG</a>.</p><p>For a fully functional example of web workers, visit <a href="https://github.com/DannyMcwaves/web-workers" rel="noopener">here</a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
