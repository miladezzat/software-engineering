---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9ce8740569d1a4ca34d2.jpg"
tags: [JavaScript]
description: Programmers use timing events to delay the execution of certa
author: "Milad E. Fahmy"
title: "JavaScript Timing Events: setTimeout and setInterval"
created: "2021-08-15T19:31:00+02:00"
modified: "2021-08-15T19:31:00+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-events tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Timing Events: setTimeout and setInterval</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ce8740569d1a4ca34d2.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ce8740569d1a4ca34d2.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ce8740569d1a4ca34d2.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ce8740569d1a4ca34d2.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ce8740569d1a4ca34d2.jpg" alt="JavaScript Timing Events: setTimeout and setInterval">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>Programmers use timing events to delay the execution of certain code, or to repeat code at a specific interval.</p>
<p>There are two native functions in the JavaScript library used to accomplish these tasks: <code>setTimeout()</code> and <code>setInterval()</code>.</p>
<h3 id="settimeout">setTimeout</h3>
<p><code>setTimeout()</code> is used to delay the execution of the passed function by a specified amount of time.</p>
<p>There are two parameters that you pass to <code>setTimeout()</code>: the function you want to call, and the amount of time in milliseconds to delay the execution of the function.</p>
<p>Remember that there are 1000 milliseconds (ms) in a 1 second, so 5000 ms is equal to 5 seconds.</p>
<p><code>setTimeout()</code> will execute the function from the first argument one time after the specified time has elapsed.</p>
<p><strong>Example:</strong></p><pre><code class="language-javascript">let timeoutID;
function delayTimer() {
timeoutID = setTimeout(delayedFunction, 3000);
}
function delayedFunction() {
alert(“Three seconds have elapsed.”);
}</code></pre>
<p>When the <code>delayTimer</code> function is called it will run <code>setTimeout</code>. After 3 seconds (3000 ms) pass, it will execute <code>delayedFunction</code> which will send an alert.</p>
<p><strong>setInterval</strong></p>
<p>Use <code>setInterval()</code> to specify a function to repeat with a time delay between executions. </p>
<p>Again, two parameters are passed to <code>setInterval()</code>: the function you want to call, and the amount of time in milliseconds to delay each call of the function . </p>
<p><code>setInterval()</code> will continue to execute until it is cleared.</p>
<p><strong>Example:</strong></p><pre><code class="language-javascript">let intervalID;
function repeatEverySecond() {
intervalID = setInterval(sendMessage, 1000);
}
function sendMessage() {
console.log(“One second elapsed.”);
}</code></pre>
<p>When your code calls the function <code>repeatEverySecond</code> it will run <code>setInterval</code>. <code>setInterval</code> will run the function <code>sendMessage</code> every second (1000 ms).</p>
<h3 id="cleartimeout-and-clearinterval">clearTimeout and clearInterval</h3>
<p>There are also corresponding native functions to stop the timing events: <code>clearTimeout()</code> and <code>clearInterval()</code>.</p>
<p>You may have noticed that each timer function above is saved to a variable. When either the <code>setTimeout</code> or <code>setInterval</code> function runs, it is assigned a number which is saved to this variable. Note that JavaScript does this all in the background.</p>
<p>This generated number is unique for each instance of timers. This assigned number is also how timers are identified when you want to stop them. For this reason, you must always set your timer to a variable.</p>
<p>For clarity of your code, you should always match <code>clearTimeout()</code> to <code>setTimeout()</code> and <code>clearInterval()</code> to <code>setInterval()</code>.</p>
<p>To stop a timer, call the corresponding clear function and pass it the timer ID variable that matches the timer you wish to stop. The syntax for <code>clearInterval()</code> and <code>clearTimeout()</code> are the same.</p>
<p><strong>Example:</strong></p><pre><code class="language-javascript">let timeoutID;
function delayTimer() {
timeoutID = setTimeout(delayedFunction, 3000);
}
function delayedFunction() {
alert(“Three seconds have elapsed.”);
}
function clearAlert() {
clearTimeout(timeoutID);
}</code></pre>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
