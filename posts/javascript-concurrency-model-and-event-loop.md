---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9de6740569d1a4ca3a44.jpg"
tags: [JavaScript]
description: Javascript runtime is single threaded which means that it can
author: "Milad E. Fahmy"
title: "JavaScript Concurrency Model and Event Loop"
created: "2021-08-15T19:31:22+02:00"
modified: "2021-08-15T19:31:22+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-concurrency ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Concurrency Model and Event Loop</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9de6740569d1a4ca3a44.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9de6740569d1a4ca3a44.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9de6740569d1a4ca3a44.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9de6740569d1a4ca3a44.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9de6740569d1a4ca3a44.jpg" alt="JavaScript Concurrency Model and Event Loop">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>Javascript runtime is single threaded which means that it can execute one piece of code at a time. In order to understand the concurrency model and the event loop in Javascript we have to first get to know some common terms that are associated with it. </p>
<h2 id="the-call-stack">The call stack</h2>
<p>First let’s learn about what a call stack is.</p>
<p>A call stack is a simple data structure that records where in the code we are currently. So if we step into a function that is a function invocation it is pushed to the call stack. When we return from a function it is popped out of the stack.</p>
<p>Let’s look at a code example to understand the call stack:</p><pre><code class="language-javascript">function multiply(x,y) {
return x * y;
}
function squared(n) {
return multiply(n,n)
}
function printSquare(n) {
return squared(n)
}
let numberSquared = printSquare(5);
console.log(numberSquared);</code></pre>
<p>First when the code executes the runtime will read through each of the function definitions. But when it reaches the line where the first function <strong><strong>printSquare(5)</strong></strong> is invoked it will push this function into the call stack. </p>
<p>Next, this function will execute. Before returning it will encounter another function, <strong><strong>squared(n)</strong>,</strong> so it will suspend its current operation and push this function on top of the existing function. </p>
<p>It executes the function (in this case the squared function) and finally it encounters another function <strong><strong>multiply(n,n)</strong>.</strong> Then it suspends its current executions and pushes this function into the call stack. The function multiply executes and it returns with the multiplied value. </p>
<p>Finally the squared function returns and is popped off the stack and then the same goes with printSquare. The final squared value is allocated to the numberSquared variable. </p>
<p>We encounter again a function invocation (in this case it’s a console.log() statement) so the runtime pushes this to the stack. This executes it thus printing the squared number on the console. </p>
<p>Note that the first function that gets pushed into the stack before any of the above code runs is the main function. In the runtime this is denoted as an ‘anonymous function’.</p>
<p>So to summarize: whenever a function is invoked it is pushed into the call stack where it executes. Finally when the function is done with its execution and is returning either implicitly or explicitly it will be popped off the stack. </p>
<p>The call stack just records at what point in time which function was executing. And it keeps track of which function is currently executing.</p>
<h2 id="the-browser">The browser</h2>
<p>Now we know from this that Javascript can execute one thing at a time but that’s not the case with the Browser. The Browser has its own set of APIs like setTimeout and XMLHttpRequests which are not specified in the Javascript runtime. </p>
<p>In fact if you look through the source code of V8, the popular Javascript runtime that powers browsers like Google Chrome, you won’t find any definitions for it. That's because these special web API’s exist in the browser environment not inside the javascript environment. So you can say that these APIs introduce concurrency into the mix. </p>
<p>Let’s look at a diagram to understand the whole picture.</p>
<p>Some more terms are introduced here, so let's go through them:</p>
<p><strong><strong>Heap</strong>:</strong> It’s mostly the place where objects are allocated.</p>
<p><strong><strong>Callback Queue</strong>:</strong> It’s a data structure that stores all the callbacks. Since it’s a queue, the elements are processed based on FIFO which is First in First Out.</p>
<p><strong><strong>Event Loop</strong>:</strong> This is where all these things come together. The event loop simply checks the call stack, and if it is empty (which means there are no functions in the stack) it takes the oldest callback from the callback queue and pushes it into the call stack which eventually executes the callback.</p>
<p>Let’s understand this with a code example:</p><pre><code class="language-javascript">console.log('hi');
setTimeout(function() {
console.log('freecodeCamp')
},5000);
console.log('JS')</code></pre>
<p>When the first line executes it’s a console.log(). This is a function invocation which means that this function is pushed into the call stack where it executes printing ‘hi’ to the console. Finally it’s returned and is popped off the stack. </p>
<p>Then when the runtime goes to execute setTimeout() it knows that this is a web API. Therefore it gives it off to the browser to handle its execution. The browser starts the timer and then JS runtime pops the setTimeout() out of the stack. It encounters another console.log() invocation and so it pushes this into the call stack, the message ‘JS’ is logged into the console, and then it’s finally returned. Then the last console.log() is popped off the stack. Now the call stack is empty. </p>
<p>Meanwhile while all of this was going on the timer finishes. When 5 seconds have elapsed the browser goes ahead and pushes the callback function into the callback queue. </p>
<p>Next the event loop checks if the call stack is free or not. Since it is free it takes the callback function and pushes it again back to the call stack which executes the code inside it. </p>
<p>Again inside the code there is a console.log() invocation so this function goes to the top of the stack executes which logs ‘freecodecamp’ into the console and finally it returns. This means it gets popped off the stack and finally the callback gets popped off the stack and we are done.</p>
<p>To visualize this better try this tool by Phillip Roberts: <a href="http://latentflip.com/loupe/?code=!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D">Loupe Event Loop Visualizer</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
