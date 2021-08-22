---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9b4c740569d1a4ca2aee.jpg"
tags: [JavaScript]
description: JavaScript is the language of the web. And it hasn't been the
author: "Milad E. Fahmy"
title: "JavaScript setTimeout Tutorial – How to Use the JS Equivalent of sleep, wait, delay, and pause"
created: "2021-08-15T19:29:56+02:00"
modified: "2021-08-15T19:29:56+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript setTimeout Tutorial – How to Use the JS Equivalent of sleep, wait, delay, and pause</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9b4c740569d1a4ca2aee.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9b4c740569d1a4ca2aee.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9b4c740569d1a4ca2aee.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9b4c740569d1a4ca2aee.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9b4c740569d1a4ca2aee.jpg" alt="JavaScript setTimeout Tutorial – How to Use the JS Equivalent of sleep, wait, delay, and pause">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>JavaScript is the language of the web. And it hasn't been the same since ES5 was released. More and more ideas and features are being ported from different languages and being integrated in JavaScript. </p>
<p>One of those features are Promises, which are probably the most widely used feature in JavaScript after ES5 was released.</p>
<p>But one of the things which JavaScript misses is a way to "pause" execution for a while and resume it later. In this post, I'll discuss how you can achieve that and what it really means to "pause" or "sleep" in JavaScript. </p>
<p><em>Spoiler: JavaScript never really "pauses".</em></p>
<h2 id="tl-dr">TL;DR</h2>
<p>Here's the copy-pasta code which does the job:</p><pre><code class="language-js">/**
*
* @param duration Enter duration in seconds
*/
function sleep(duration) {
return new Promise(resolve =&gt; {
setTimeout(() =&gt; {
resolve()
}, duration * 1000)
})
}</code></pre>
<p>But what is really happening here?</p>
<h2 id="settimeout-and-fake-promises">setTimeout and fake Promises</h2>
<p>Let's see a quick example using the above snippet (we'll discuss what's happening in it later):</p><pre><code class="language-js">async function performBatchActions() {
// perform an API call
await performAPIRequest()
// sleep for 5 seconds
await sleep(5)
// perform an API call again
await performAPIRequest()
}</code></pre>
<p>This function <code>performBatchActions</code>, when called, simply executes the <code>performAPIRequest</code> function, waits <strong>about 5 seconds</strong>, and then calls the same function again. Note how I wrote <strong>about 5 seconds</strong>, and not 5 seconds.</p>
<p>A strong note to put out there: the above code does not guarantee a perfect sleep. It means that if you specify duration to be, say, 1 second, JavaScript <strong>does not guarantee</strong> that it will start running the code after the sleep exactly after 1 second. </p>
<p>Why not? you may ask. Unfortunately, it's because timers work in JavaScript, and in general, event loops. However, JavaScript absolutely guarantees that the piece of code after the sleep will never execute <strong>before</strong> the specified time. </p>
<p>So we don't really have a full indeterminate situation, just a partial one. And in most cases it's within a margin of a few milliseconds only.</p>
<h2 id="javascript-is-single-threaded">JavaScript is single threaded</h2>
<p>A single thread means that a JavaScript process cannot really go out of the way at all. It has to do all the things - from event listeners, to HTTP callbacks, on the same main thread. And when one thing is executing, another one cannot execute. </p>
<p>Consider a webpage in which you have multiple buttons and you run the code above to simulate a sleep for, let's say, 10 seconds. What do you expect will happen?</p>
<p>Nothing at all. Your webpage will work just fine, your buttons will be responsive, and once the 10 second sleep is done, the code next to it will execute. So it's evident that JavaScript does not really block the whole main thread because if it did that, your webpage would have frozen and the buttons would have become non-clickable. </p>
<p>So how did JavaScript actually pause a single thread, without ever really pausing it?</p>
<h2 id="meet-the-event-loop">Meet the Event Loop</h2>
<p>Unlike other languages, JavaScript doesn't just keep on executing code in a linear fashion from top to bottom. It is an asynchronous event-driven language with tons of magic in the form of the event loop. </p>
<p>An event loop splits your code in synchronous and certain events - like timers and HTTP requests. Precisely speaking, there are two queues - a task queue and microtask queue. </p>
<p>Whenever you run JS, and there's an asynchronous thing (like a mouseclick event, or a promise), JavaScript throws it in the task queue (or microtask queue) and keeps executing. When it completes a "single tick", it checks if the task queues and microtask queue have some work for it. If yes, then it'll execute the callback/perform an action.</p>
<p>I would really recommend anyone interested in the detailed workings of event loops to watch this video:</p>
<h2 id="conclusion">Conclusion</h2>
<p>You came here for a simple sleep instruction in JavaScript, and ended up learning about one of the core things in JavaScript - event loops! Amazing, isn't it? </p>
<p>Well, if you liked the article, checkout <a href="https://codedamn.com">codedamn</a> - a platform I've been building for developers and learners like you. Also, let's connect on social media - <a href="https://twitter.com/mehulmpt">twitter</a> and <a href="https://instagram.com/mehulmpt">Instagram</a>. See you soon!</p>
<p>Peace</p>
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
