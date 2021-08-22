---
card: "https://cdn-media-1.freecodecamp.org/images/1*f1HRu4YeZDn3PAS81QjuNg.jpeg"
tags: [JavaScript]
description: "by The Hungry Brain"
author: "Milad E. Fahmy"
title: "Web workers in action: why they’re helpful, and how you should use them"
created: "2021-08-16T10:09:33+02:00"
modified: "2021-08-16T10:09:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development tag-webworker tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Web workers in action: why they’re helpful, and how you should use them</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*f1HRu4YeZDn3PAS81QjuNg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*f1HRu4YeZDn3PAS81QjuNg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*f1HRu4YeZDn3PAS81QjuNg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*f1HRu4YeZDn3PAS81QjuNg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*f1HRu4YeZDn3PAS81QjuNg.jpeg" alt="Web workers in action: why they’re helpful, and how you should use them">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
let startTime = new Date().getTime();
let len = numbers,
sum = 0,
i;
if (len === 0) {
return 0;
}
for (i = 0; i &lt; len; i++) {
console.log('i :: ', i)
sum += i;
}
let endTime = new Date().getTime();
alert('Average - ', sum / len);
}
hello = () =&gt; {
alert("Hello World !!");
}
/*
Paste the above code in browser dev tool console
and try to call average(10000) and hello one by one
let startTime = new Date().getTime();
var len = numbers,
sum = 0,
i;
if (len === 0) {
return 0;
}
let calculateSumAsync = (i) =&gt; {
if (i &lt; len) {
// Put the next function call on the event loop.
setTimeout(() =&gt; {
sum += i;
calculateSumAsync(i + 1);
}, 0);
} else {
// The end of the array is reached so we're invoking the alert.
let endTime = new Date().getTime();
alert('Average - ', sum / len);
}
};
calculateSumAsync(0);
};
hello = () =&gt; {
alert('Hello World !!')
};</code></pre><figcaption><em><em>async programming using setTimeout</em></em></figcaption></figure><p>In this example, you can see that after you click on the <em>Calculate Average</em> button, you can still click on the <em>Hello </em>button (which in turn shows an alert message). This way of programming is surely non-blocking but takes too much time, and is not feasible in real world applications.</p><p>Here, for the same input 10000, it took ~60 seconds, which is very inefficient.</p><p><strong>So, how do we solve these kinds of issues efficiently?</strong></p><p>The answer is <strong>Web Workers.</strong></p><h3 id="what-are-web-workers">What are web workers ?</h3><p>Web workers in Javascript are a great way to execute some task which is very laborious and time taking into a thread separate from the main thread. They run in background and perform tasks without interfering with the user interface.</p><p>Web Workers are not the part of JavaScript, they’re a browser feature which can be accessed through JavaScript.</p><p>Web workers are created by a constructor function <strong><strong>Worker()</strong></strong> which runs a named JS file.</p><pre><code class="language-js">// create a dedicated web worker
// new worker
let myWorker = new Worker('worker.js');
// event handler to recieve message from worker
myWorker.onmessage = (e) =&gt; {
document.getElementById('time').innerHTML = `${e.data.time} seconds`;
};
let average = (numbers) =&gt; {
// sending message to web worker with an argument
myWorker.postMessage(numbers);
}
average(1000);
let numbers = e.data;
let startTime = new Date().getTime();
let len = numbers,
sum = 0,
i;
if (len === 0) {
return 0;
}
for (i = 0; i &lt; len; i++) {
sum += i;
}
let endTime = new Date().getTime();
postMessage({average: sum / len, time: ((endTime - startTime) / 1000)})
// new worker
let myWorker = new Worker('worker.js');
// event handler to recieve message from worker
myWorker.onmessage = (e) =&gt; {
document.getElementById('time').innerHTML = `${e.data.time} seconds`;
};
let average = (numbers) =&gt; {
// sending message to web worker with an argument
myWorker.postMessage(numbers);
}
let numbers = e.data;
let startTime = new Date().getTime();
let len = numbers,
sum = 0,
i;
if (len === 0) {
return 0;
}
for (i = 0; i &lt; len; i++) {
sum += i;
}
let endTime = new Date().getTime();
postMessage({average: sum / len, time: ((endTime - startTime) / 1000)})
};</code></pre><figcaption>main-shared-worker.js</figcaption></figure><h4 id="termination-of-a-web-worker">Termination of a web worker</h4><p>If you need to immediately terminate a running worker from the main thread, you can do so by calling the worker’s <em>terminate</em> method:</p><pre><code class="language-js">// terminating a web worker instance
myWorker.terminate();</code></pre><p>The worker thread is killed immediately without an opportunity to complete its operations.</p><h3 id="spawning-of-web-worker">Spawning of web worker</h3><p>Workers may spawn more workers if they wish. But they must be hosted within the same origin as the parent page.</p><h3 id="importing-scripts">Importing Scripts</h3><p>Worker threads have access to a global function, <code>importScripts()</code>, which lets them import scripts.</p><pre><code class="language-js">importScripts();                   /* imports nothing */
importScripts('foo.js');           /* imports just "foo.js" */
importScripts('foo.js', 'bar.js'); /* imports two scripts */
importScripts('//example.com/hello.js'); /* You can import scripts from other origins */</code></pre><h3 id="working-demo">Working Demo</h3><p>We have discussed some of the approaches above to achieve async programming so that our UI doesn’t get blocked due to any heavy computational task. But there are some limitations to those approaches. So we can use web workers to solve these kind of problems efficiently.</p><blockquote><em>Click <a href="https://bhushangoel.github.io/webworker-demo-1/" rel="noopener">here</a> to run this live demo.</em></blockquote><p>Here, you will see 3 sections:</p><ol><li><strong>Blocking Code</strong>:<br>When you click on <em>calculate average</em>, the loader does not display and after some time you see the final result and time taken. This is because as soon as the <em>average method</em> gets called, I have triggered the <em>showLoader</em> method also. But since JS is single threaded, it won’t execute showLoader until the execution of average gets completed. So, you won’t be able to see the loader in this case ever.</li><li><strong>Async Code</strong>:<br>In this I tried to achieve the same functionality by using the setTimeout method and putting every function execution into an event loop. You will see the loader in this case, but the response takes time as compared to the method defined above.</li><li><strong>Web worker</strong>:<br>This is an example of using a web worker. In this you will see the loader as soon as you click on calculate average and you will get a response in the same time as of method 1, for the same number.</li></ol><p>You can access the source code for the same <a href="https://github.com/bhushangoel/webworker-demo-1/tree/master" rel="noopener">here</a>.</p><h3 id="advanced-concepts">Advanced concepts</h3><p>There are some advanced concepts related to web workers. We won’t be discussing them in detail, but its good to know about them.</p><ol><li><strong>Content Security Policy — </strong><br>Web workers have their own execution context independent of the document that created them and because of this reason they are not governed by the Content Security Policy of the parent thread/worker. <br>The exception to this is if the worker script's origin is a globally unique identifier (for example, if its URL has a scheme of data or blob). In this case, the worker inherit the content security policy of the document or worker that created it.</li><li><strong>Transferring data to and from workers </strong>— <br>Data passed between main and worker thread is <strong><strong>copied</strong></strong> and not shared. Objects are serialized as they're handed to the worker, and subsequently, de-serialized on the other end. The page and worker <strong><strong>do not share the same instance</strong></strong>, so the end result is that <strong><strong>a duplicate</strong></strong> is created on each end. <br>Browsers implemented <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm" rel="noopener"><strong><strong><u>Structured Cloning</u></strong></strong></a> algorithm to achieve this.</li><li><strong>Embedded workers — </strong><br>You can also embed the code of worker inside a web page (html). For this you need to add a script tag without a src attribute and assign a non-executable MIME type to it, like this:</li></ol><pre><code class="language-js">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset="UTF-8" /&gt;
&lt;title&gt;embedded worker&lt;/title&gt;
&lt;!--script tag with un-identified MIME and w/o src attr --&gt;
&lt;script type="text/js-worker"&gt;
// This script WON'T be parsed by JS engines because its MIME type is text/js-worker.
var myVar = 'Hello World!';
// worker block
function onmessage(e) {
// worker code
}
&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;&lt;/body&gt;
&lt;/html&gt;</code></pre><p>There are a lot of use cases to use web workers in our application. I have just discussed a small scenario. Hope this helps you understand the concept of web workers.</p><h4 id="-links-">[Links]</h4><p>Github Repo : <a href="https://github.com/bhushangoel/webworker-demo-1" rel="noopener">https://github.com/bhushangoel/webworker-demo-1</a> Web worker in action : <a href="https://bhushangoel.github.io/webworker-demo-1/" rel="noopener">https://bhushangoel.github.io/webworker-demo-1/</a>JS demo showcase : <a href="https://bhushangoel.github.io/" rel="noopener">https://bhushangoel.github.io/</a></p><p>Thank you for reading.</p><p>Happy Learning :)</p><p><em>Originally published at <a href="https://www.thehungrybrain.com/home/web-workers" rel="noopener">www.thehungrybrain.com</a>.</em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
