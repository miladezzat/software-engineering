---
card: "https://cdn-media-1.freecodecamp.org/images/1*iF8uCp-Dx8BfuCSgkbHvnQ.jpeg"
tags: [JavaScript]
description: by Rajika Imal
author: "Milad E. Fahmy"
title: "The differences between JavaScript’s asynchronous API timers"
created: "2021-08-15T19:38:33+02:00"
modified: "2021-08-15T19:38:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-tech tag-programming tag-api ">
<header class="post-full-header">
<h1 class="post-full-title">The differences between JavaScript’s asynchronous API timers</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*iF8uCp-Dx8BfuCSgkbHvnQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*iF8uCp-Dx8BfuCSgkbHvnQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*iF8uCp-Dx8BfuCSgkbHvnQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*iF8uCp-Dx8BfuCSgkbHvnQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*iF8uCp-Dx8BfuCSgkbHvnQ.jpeg" alt="The differences between JavaScript’s asynchronous API timers">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Rajika Imal</p>
<h1 id="the-differences-between-javascript-s-asynchronous-api-timers">The differences between JavaScript’s asynchronous API timers</h1>
<figcaption>Photo by <a href="https://unsplash.com/photos/0gdHUhYkXDc?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Szűcs László</a> on <a href="https://unsplash.com/search/photos/timer?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>JavaScript is a single-threaded language, which makes use of asynchronous constructs to handle tasks concurrently. Interestingly, it handles concurrent tasks efficiently with a different approach compared to traditional languages likes Java and C#.</p>
<h4 id="event-loop">Event loop</h4>
<p>Whether it’s a browser environment or Node.js, JavaScript is asynchronous due to the fact that it’s using the event loop. In the Node environment, it’s implemented using a libuv library. Originally libuv was developed as a wrapper to libev. In Node version 0.9.0, the dependency of libev was removed.</p>
<h4 id="phases-in-event-loops">Phases in event loops</h4><pre><code>   ┌───────────────────────────┐┌─&gt;│           timers          ││  └─────────────┬─────────────┘│  ┌─────────────┴─────────────┐│  │     pending callbacks     ││  └─────────────┬─────────────┘│  ┌─────────────┴─────────────┐│  │       idle, prepare       ││  └─────────────┬─────────────┘      ┌───────────────┐│  ┌─────────────┴─────────────┐      │   incoming:   ││  │           poll            │&lt;─────┤  connections, ││  └─────────────┬─────────────┘      │   data, etc.  ││  ┌─────────────┴─────────────┐      └───────────────┘│  │           check           ││  └─────────────┬─────────────┘│  ┌─────────────┴─────────────┐└──┤      close callbacks      │   └───────────────────────────┘</code></pre>
<blockquote>source: <a href="https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/" rel="noopener">https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/</a></blockquote>
<p>Event loops can be divided into a few phases as illustrated above. Each phase will be executed in each iteration. One such iteration is called a tick in the event loop. Every phase has a first in first out queue (FIFO) which will register different tasks. To understand how setTimeout, setImmediate and nextTick work, we'll go through the relevant important phases.</p>
<h4 id="timers-phase">Timers phase</h4>
<p>Callbacks registered by <em>setTimeout</em> and <em>setInterval</em> will be executed in this phase. It’s important to notice that callbacks will not be executed immediately but rather after a certain threshold of the time expiring.</p>
<h4 id="check-phase">Check phase</h4>
<p>If the poll phase which handles I/O callbacks becomes idle or the maximum number of executions exceed it will move to check phase, where it’ll execute callbacks registered by <em>setImmediate</em>.</p>
<h4 id="microtask-queue-and-macrotask-queue">Microtask queue and macrotask queue</h4>
<p>These two queues are important to understand the order of tasks executed through different APIs. Macrotasks are executed in each of the phases shown in the diagram above.</p>
<p><em>setImmediate</em> is part of the macrotask queue. Microtasks will be executed until the queue is empty before moving on to the next iteration or the tick of the event loop.</p>
<p>process.nextTick callbacks will be registered in the microtask queue and they will be executed until it is empty. Therefore, having recursive calls in the process.nextTick can starve the event loop, prevent it from going to the next tick. Macro tasks won’t starve the event loop as it will move on the next tick once the maximum number of executions is reached.</p>
<p>Let’s look at a few examples to see how each of the APIs behave in the real world to get a better understanding.</p>
<p>In the rest of the examples shown in this article, Node.js will be used as the execution environment.</p>
<h4 id="settimeout-vs-setimmediate">setTimeout vs setImmediate</h4>
<p>Notice that the calls aren’t within an I/O cycle. Because of this fact, the execution will depend on the performance of the CPU. Therefore logs will be printed out randomly in this case.</p>
<p>In this example, they are within an I/O cycle. <em>setImmediate</em> callback will get executed every time since the macrotask queue (check phase) will be executed following the tick. setTimeout will be called in the timers phase once the threshold gets exceeded.</p>
<h4 id="setimmediate-vs-process-nexttick">setImmediate vs process.nextTick</h4>
<p><em>nextTick</em> is part of the microtask queue, and it will get executed before event loop moves on to the next tick. Following nextTick in the next tick setImmediate will fire off its callback in the macrotask queue in the check phase.</p>
<p>nextTick executes the recursive function which will get executed until it enters the base condition (if num &gt; 5). Only after the execution of nextTick, setImmediate will fire its callback. Continuous recursive behavior is due to nextTick being a part of the microtask queue which doesn’t allow the event loop to proceed to the next tick.</p>
<h4 id="setimmediate-vs-settimeout-vs-process-nexttick">setImmediate vs setTimeout vs process.nextTick</h4>
<p>As expected nextTick gets called first, followed by setImmediate and setTimeout. It’s important to note that the functions are called in an I/O cycle. If they are not within an I/O cycle output will be different and will be dependant on the process performance.</p>
<blockquote>Follow up resources</blockquote>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop" rel="noopener"><strong>Concurrency model and Event Loop</strong></a><br><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop" rel="noopener"><em>JavaScript has a concurrency model based on an "event loop". This model is quite different from models in other…</em>developer.mozilla.org</a><a href="https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/" rel="noopener"><strong>The Node.js Event Loop, Timers, and process.nextTick() | Node.js</strong></a><br><a href="https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/" rel="noopener"><em>Edit on GitHub The event loop is what allows Node.js to perform non-blocking I/O operations - despite the fact that…</em>nodejs.org</a><a href="https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/" rel="noopener"><strong>Tasks, microtasks, queues and schedules</strong></a><br><a href="https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/" rel="noopener"><em>When I told my colleague Matt Gaunt I was thinking of writing a piece on microtask queueing and execution within the…</em>jakearchibald.com</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
