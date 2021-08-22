---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9e90740569d1a4ca3dc5.jpg"
tags: [JavaScript]
description: Building a simple countdown timer is easy with JavaScript's n
author: "Milad E. Fahmy"
title: "How to Create a Countdown Timer"
created: "2021-08-15T19:31:40+02:00"
modified: "2021-08-15T19:31:40+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create a Countdown Timer</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e90740569d1a4ca3dc5.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e90740569d1a4ca3dc5.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e90740569d1a4ca3dc5.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e90740569d1a4ca3dc5.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e90740569d1a4ca3dc5.jpg" alt="How to Create a Countdown Timer">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>Building a simple countdown timer is easy with JavaScript's native timing events. You can read more about those in <a href="/news/p/50cdf5da-8359-4bd2-8718-d5bd7c0de03d/www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/">this article</a>.</p>
<h3 id="building-the-countdown-timer">Building the countdown timer</h3>
<p>Start by declaring an empty function called <code>startCountdown</code> that takes <code>seconds</code> as an argument:</p><pre><code class="language-javascript">function startCountdown(seconds) {
};</code></pre>
<p>We want to keep track of the seconds that pass once the timer is started, so use <code>let</code> to declare a variable called <code>counter</code> and set it equal to <code>seconds</code>:</p><pre><code class="language-js">function startCountdown(seconds) {
let counter = seconds;
}</code></pre>
<p>Remember that it's best practice to save your timing event function to a variable. This makes it much easier to stop the timer later. Create a variable called <code>interval</code> and set it equal to <code>setInterval()</code>:</p><pre><code class="language-js">function startCountdown(seconds) {
let counter = seconds;
const interval = setInterval();
}</code></pre>
<p>You can pass a function directly to <code>setInterval</code>, so let's pass it an empty arrow function as the first argument. Also, we want the function to run every second, so pass 1000 as the second argument:</p><pre><code class="language-js">function startCountdown(seconds) {
let counter = seconds;
const interval = setInterval(() =&gt; {
}, 1000);
}</code></pre>
<p>Now the function we passed to <code>setInterval</code> will run every second. Every time it runs, we want to log the current value of <code>counter</code> to the console before deincrementing it:</p><pre><code class="language-js">function startCountdown(seconds) {
let counter = seconds;
const interval = setInterval(() =&gt; {
console.log(counter);
counter--;
}, 1000);
}</code></pre>
<p>Now if you run the function, you'll see that it works, but doesn't stop once <code>counter</code> is less than 0:</p><pre><code class="language-js">startCountdown(5);
// Console Output //
// 5
// 4
// 3
// 2
// 1
// 0
// -1
// -2 </code></pre>
<p>To fix this, first write an <code>if</code> statement that executes when <code>counter</code> is less than 0:</p><pre><code class="language-js">function startCountdown(seconds) {
let counter = seconds;
const interval = setInterval(() =&gt; {
console.log(counter);
counter--;
if (counter &lt; 0 ) {
}
}, 1000);
}</code></pre>
<p>Then inside the <code>if</code> statement, clear the <code>interval</code> with <code>clearInterval</code> and log an alarm sound string to the console:</p><pre><code class="language-js">function startCountdown(seconds) {
let counter = seconds;
const interval = setInterval(() =&gt; {
console.log(counter);
counter--;
if (counter &lt; 0 ) {
clearInterval(interval);
console.log('Ding!');
}
}, 1000);
}</code></pre>
<h3 id="execution"><strong>Execution</strong></h3>
<p>Now when you start the timer, you should see the following:</p><pre><code class="language-javascript">startCountdown(5);
// Console Output //
// 5
// 4
// 3
// 2
// 1
// 0
// Ding!</code></pre>
<h3 id="more-resources"><strong>More Resources</strong></h3>
<p><a href="/news/p/50cdf5da-8359-4bd2-8718-d5bd7c0de03d/www.freecodecamp.org/news/javascript-timing-events-settimeout-and-setinterval/">JavaScript Timing Events: setTimeout and setInterval</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
