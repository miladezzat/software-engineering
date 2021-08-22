---
card: "https://cdn-media-2.freecodecamp.org/w1280/60190c1a0a2838549dcbcd11.jpg"
tags: [JavaScript]
description: In this tutorial, you'll learn how to add a randomized delay
author: "Milad E. Fahmy"
title: "How to Make your Console Output Fun and Interactive in JavaScript and Node.js"
created: "2021-08-15T19:27:23+02:00"
modified: "2021-08-15T19:27:23+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-console tag-node-js ">
<header class="post-full-header">
<h1 class="post-full-title">How to Make your Console Output Fun and Interactive in JavaScript and Node.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/60190c1a0a2838549dcbcd11.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/60190c1a0a2838549dcbcd11.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/60190c1a0a2838549dcbcd11.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/60190c1a0a2838549dcbcd11.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/60190c1a0a2838549dcbcd11.jpg" alt="How to Make your Console Output Fun and Interactive in JavaScript and Node.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this tutorial, you'll learn how to add a randomized delay to the <code>console.log</code> statements in JavaScript and Node.js.</p>
<h2 id="why-would-you-want-to-do-this">Why would you want to do this?</h2>
<p>First of all, programming should be fun. And making a boring thing like <code>console.log</code> look nice is very pleasing.</p>
<p>If you want to get quick access to the source code, you can check out this <a href="https://github.com/AgileNix/funkylog/">GitHub repository</a>.</p>
<h2 id="step-1-create-a-function-that-takes-the-string-and-passes-it-into-console-log">Step 1: Create a function that takes the string and passes it into console.log</h2>
<p>To make sure that every step is clear, we'll start small and create a function that accepts a string as a parameter and logs it to the console.</p><pre><code class="language-javascript">const log = (s) =&gt; {
console.log(s);
}</code></pre>
<h2 id="step-2-log-characters-of-the-string-one-by-one">Step 2: Log characters of the string one-by-one</h2>
<p>Before we can add a delay between the output of the individual chars, we need to make sure that they're actually split.</p>
<p>Let's add a <code>for</code> loop that iterates over each letter of the string and prints it to the console.</p><pre><code class="language-javascript">const log = (s) =&gt; {
for (const c of s) {
console.log(c);
}
}</code></pre>
<h2 id="step-3-how-to-fix-the-newline-issue">Step 3: How to fix the newline issue</h2>
<p>Now, each letter is printed on a new line as every call to <code>console.log</code> adds an empty line.</p>
<p>We'll replace the <code>console.log</code> with <code><em><strong>process</strong></em>.stdout.write</code> which essentially does the same thing, but doesn't add a new line after the output.</p>
<p>Now, however, we've lost the newline in the very end of the output, which is still desirable. We'll add it by explicitly printing the <code>\n</code> character.</p><pre><code class="language-javascript">const log = (s) =&gt; {
for (const c of s) {
process.stdout.write(c);
}
process.stdout.write('\n');
}</code></pre>
<h2 id="step-4-implement-the-sleep-function">Step 4: Implement the <code>sleep</code> function</h2>
<p>In JavaScript we can't simply stop the execution of the synchronous code for some amount of time. To make this happen, we need to write our own function. Let's call it sleep.</p>
<p>It should accept a single parameter <code>ms</code> and return a Promise that resolves after the delay of <code>ms</code> milliseconds.</p><pre><code class="language-javascript">const sleep = (ms) =&gt; {
return new Promise(resolve =&gt; setTimeout(resolve, ms));
};</code></pre>
<h2 id="step-5-add-the-delay">Step 5: Add the delay</h2>
<p>So, we're ready to add a delay to our output! We need a couple of things here:</p>
<ul>
<li>add a parameter <code>delay</code> to the function <code>log</code></li>
<li>make the function <code>log</code> asynchronous by adding the keyword <code>async</code></li>
<li>call a <code>sleep</code> function that will delay the next loop iteration by <code>delay</code> milliseconds</li>
</ul><pre><code class="language-javascript">const sleep = (ms) =&gt; {
return new Promise(resolve =&gt; setTimeout(resolve, ms));
};
const log = async (s, delay) =&gt; {
for (const c of s) {
process.stdout.write(c);
await sleep(delay);
}
process.stdout.write('\n');
}</code></pre>
<h2 id="step-6-implement-randomized-delay">Step 6: Implement randomized delay</h2>
<p>The output will look even better if we randomize the timing.</p>
<p>Let's add another boolean parameter <code>randomized</code> to the function <code>log</code>. If it's true, then the argument passed into <code>sleep</code> should be in the range from <code>0</code> to <code>delay</code> milliseconds.</p><pre><code class="language-javascript">const sleep = (ms) =&gt; {
return new Promise(resolve =&gt; setTimeout(resolve, ms));
};
const log = async (s, delay, randomized) =&gt; {
for (const c of s) {
process.stdout.write(c);
await sleep((randomized ? Math.random() : 1) * delay);
}
process.stdout.write('\n');
}</code></pre>
<p>I've used a ternary operator, but you can replace it with a regular <code>if</code> statement:</p><pre><code class="language-javascript">if (randomized) {
sleep(Math.random * delay);
} else {
sleep(delay);
}</code></pre>
<h2 id="step-7-make-the-log-configurable">Step 7: Make the log configurable</h2>
<p>Right now, we've implemented pretty much everything we wanted to. But calling it isn't very clean as we have to pass the <code>delay</code> and randomization flag every time we want to print something to the console.</p><pre><code class="language-javascript">log('Hello, world!', 100, true);
log('What\'s up?', 100, true);
log('How are you?', 100, true);</code></pre>
<p>It'd be nice if we could have a configurable log that could be called with a single parameter - a string that we want to output.</p>
<p>To do this, we'll have to rewrite our code. Here's the plan:</p>
<ul>
<li>wrap all current functionality into a single function <code>funkylog</code> that accepts an object with 2 fields, <code>delay</code> and <code>randomized</code></li>
<li><code>funkylog</code> should return the anonymous arrow function. Its implementation should be the same as <code>log</code>, that we've implemented on steps 1 through 6</li>
<li>parameters <code>delay</code> and <code>randomized</code> should be removed from the <code>log</code> function as now they'll be passed down from the <code>funkylog</code></li>
</ul><pre><code class="language-javascript">const funkylog = ({ delay, randomized }) =&gt; {
const sleep = (ms) =&gt; {
return new Promise(resolve =&gt; setTimeout(resolve, ms));
};
return async (s) =&gt; {
for (const c of s) {
process.stdout.write(c);
await sleep((randomized ? Math.random() : 1) * delay);
}
process.stdout.write('\n');
}
};</code></pre>
<h2 id="step-8-add-the-finishing-touch">Step 8: Add the finishing touch</h2>
<p>Let's take a look at what we've got:</p><pre><code class="language-javascript">const log = funkylog({ delay: 100, randomized: true });
log('Hello, world!');
log('What\'s up?');
log('How are you?');</code></pre>
<ul>
<li>We can create a configurable logger using the function <code>funkylog</code></li>
<li>We can select any delay we want</li>
<li>Using the logger doesn't require us to pass the <code>delay</code> every time we call it</li>
</ul>
<p>One more improvement that we can make is providing a default value for the <code>delay</code> parameter.</p><pre><code class="language-javascript">const funkylog = ({ delay = 100, randomized }) =&gt; {
..
..</code></pre>
<p>So, now we can create the <code>funkylog</code> without any arguments and it will still work!</p><pre><code class="language-javascript">const log = funkylog();
console.log('Hello, world!');</code></pre>
<h2 id="improvement-ideas">Improvement ideas</h2>
<p>As I've said from the very beginning, first of all, programming should be fun. Otherwise it'll become a routine and you won't enjoy doing it.</p>
<p>Do make further improvements to the <code>funkylog</code> and let me know what your results look like! For example, you can spice up the output by colorizing it. You can use the <code>npm</code> module <code>chalk</code> for it.</p>
<p>Then, once you have implemented different colors, you can add another flag that would add an additional delay between the words in the string.</p>
<p>Thank you for staying with me, throughout the whole tutorial!<br>I write a programming blog at <a href="https://learn.coderslang.com">learn.coderslang.com</a> and build a <a href="https://js.coderslang.com">Full Stack JS course</a>.</p>
<h3 id="if-you-have-feedback-or-questions-on-this-tutorial-feel-free-to-tweet-me-coderslang-or-jump-into-the-discussion-on-telegram-coderslang_chat">If you have feedback or questions on this tutorial, feel free to Tweet me <strong>@coderslang</strong> or jump into the discussion on Telegram <strong>@coderslang_chat</strong></h3>
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
