---
card: "/images/default.jpg"
tags: [Programming]
description: "The function calls itself until someone stops it."
author: "Milad E. Fahmy"
title: "A Quick Intro to Recursion in Javascript"
created: "2021-08-16T11:28:33+02:00"
modified: "2021-08-16T11:28:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-functional-programming tag-javascript tag-technology tag-recursion ">
<header class="post-full-header">
<h1 class="post-full-title">A Quick Intro to Recursion in Javascript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/09/cover-image.jpeg 300w,
/news/content/images/size/w600/2019/09/cover-image.jpeg 600w,
/news/content/images/size/w1000/2019/09/cover-image.jpeg 1000w,
/news/content/images/size/w2000/2019/09/cover-image.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/09/cover-image.jpeg" alt="A Quick Intro to Recursion in Javascript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Recursion can feel difficult to new developers. Perhaps that's because many resources teach it using algorithmic examples (Fibonacci, linked-lists). This piece will hopefully introduce things plainly, using one simple example.</p>
<h2 id="coreidea">Core Idea</h2>
<p><strong>Recursion</strong> is when a function calls itself until someone stops it. If no one stops it then it'll <strong>recurse</strong> (call itself) forever.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/09/no-this-is-patrick.jpeg" alt="no-this-is-patrick"></p>
<p>Recursive functions let you perform a unit of work multiple times. This is exactly what <code>for/while</code> loops let us accomplish! Sometimes, however, recursive solutions are a more elegant approach to solving a problem.</p>
<h2 id="countdownfunction">Countdown Function</h2>
<p>Let's create a function that counts down from a given number. We'll use it like this.</p>
<pre><code class="language-js">countDownFrom(5);
// 5
// 4
// 3
// 2
// 1
</code></pre>
<p>And here's our algorithm to solve this problem.</p>
<ol>
<li>Take one parameter called <code>number</code>. This is our starting point.</li>
<li>Go from <code>number</code> down to <code>0</code>, logging each one along the way.</li>
</ol>
<p>We'll start with a <code>for</code> loop approach and then compare it to a recursive one.</p>
<h3 id="imperativeapproachloops">Imperative approach (loops)</h3>
<pre><code class="language-js">function countDownFrom(number) {
for (let i = number; i &gt; 0; i--) {
console.log(i);
}
}
countDownFrom(5);
// 5
// 4
// 3
// 2
// 1
</code></pre>
<p>This one contains both algorithmic steps.</p>
<ol>
<li>✅ Take one parameter called <code>number</code>.</li>
<li>✅ Log everything from <code>number</code> to <code>0</code>.</li>
</ol>
<h3 id="recursiveapproach">Recursive approach</h3>
<pre><code class="language-js">function countDownFrom(number) {
if (number === 0) {
return;
}
console.log(number);
countDownFrom(number - 1);
}
countDownFrom(5);
// 5
// 4
// 3
// 2
// 1
</code></pre>
<p>This one also passes.</p>
<ol>
<li>✅ Take one parameter called <code>number</code>.</li>
<li>✅ Log everything from <code>number</code> to <code>0</code>.</li>
</ol>
<p>So conceptually the two approaches are the same. However, they get the job done in different ways.</p>
<h3 id="debuggingourimperativesolution">Debugging our imperative solution</h3>
<p>For a more visual example, let's put a <code>debugger</code> in our loop version and throw it into Chrome Developer Tools.</p>
<pre><code class="language-js">function countDownFrom(number) {
for (let i = number; i &gt; 0; i--) {
console.log(i);
debugger;
}
}
</code></pre>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/09/countdownFrom-iterative.gif" alt="countdownFrom-iterative"></p>
<p>See how it uses an extra variable, <code>i</code>, to track the current number? As you iterate <code>i</code> decreases, eventually hitting <code>0</code> and terminating.</p>
<p>And in the <code>for</code> loop we specified "stop if <code>i &gt; 0</code>".</p>
<h3 id="debuggingourrecursivesolution">Debugging our recursive solution</h3>
<pre><code class="language-js">function countDownFrom(number) {
if (number === 0) {
return;
}
console.log(number);
debugger;
countDownFrom(number - 1);
}
</code></pre>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/09/countdownFrom-recursive.gif" alt="countdownFrom-recursive"></p>
<p>The recursive version doesn't need extra variables to track its progress. Notice how the pile of functions (<em>call stack</em>) grows as we recurse?</p>
<p>That's because each call to <code>countDownFrom</code> adds to the stack, feeding it <code>number - 1</code>. By doing this we're we're passing along an updated <code>number</code> each time. No extra state needed!</p>
<p>That's main difference between the two approaches.</p>
<ol>
<li>Iterative uses internal state (extra variables for counting, etc).</li>
<li>Recursive does not, it simply passes updated parameters between each call.</li>
</ol>
<p>But how does either version know when to stop?</p>
<h2 id="infiniteloops">Infinite Loops</h2>
<p>In your travels, you may have been warned about the dreaded infinite loop.</p>
<pre><code class="language-js">? THIS RUNS FOREVER, BE WARNED ?
while (true) { console.log('WHY DID YOU RUN THIS?!' }
? THIS RUNS FOREVER, BE WARNED ?
for (i = 0;;) { console.log('WHY DID YOU RUN THIS?!') }
</code></pre>
<p>Since they'd theoretically run forever, an infinite loop will halt your program and possibly crash your browser. You can prevent them by always coding a <em>stopping condition</em>.</p>
<pre><code class="language-js">✅ This does not run forever
x = 0;
while (x &lt; 3) { console.log(x); x++; }
✅ This does not run forever
for (x = 0; x &lt; 3; x++) { console.log(x); }
</code></pre>
<p>In both cases we log <code>x</code>, increment it, and stop when it becomes <code>3</code>. Our <code>countDownFrom</code> function had similar logic.</p>
<pre><code class="language-js">// Stop at 0
for (let i = number; i &gt; 0; i--)
</code></pre>
<p>Again, loops need extra state to determine when they should stop. That's what <code>x</code> and <code>i</code> are for.</p>
<h2 id="infiniterecursion">Infinite Recursion</h2>
<p>Recursion also presents the same danger. It's not hard to write a self-referencing function that'll crash your browser.</p>
<pre><code class="language-js">?THIS RUNS FOREVER, BE WARNED?
function run() {
console.log('running');
run();
}
run();
// running
// running
// ...
</code></pre>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/09/is-this-a-recursive.jpg" alt="is-this-a-recursive"></p>
<p>Without a stopping condition, <code>run</code> will forever call itself. You can fix that with an <code>if</code> statement.</p>
<pre><code class="language-js">✅ This does not run forever
function run(x) {
if (x === 3) return;
console.log('running');
run(x + 1);
}
run(0);
// running
// running
// running
// x is 3 now, we're done.
</code></pre>
<h3 id="basecase">Base case</h3>
<p>This is known as the <strong>base case</strong>–our recursive <code>countDownFrom</code> had one.</p>
<pre><code class="language-js">if (number === 0) {
return;
}
</code></pre>
<p>It's the same idea as our loop's stopping logic. Whichever approach you pick, always remember that at some point <strong>it needs to be stopped</strong>.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/09/is-this-you-need-to-be-stopped-2.png" alt="is-this-you-need-to-be-stopped"></p>
<h2 id="summary">Summary</h2>
<ul>
<li>Recursion is when a function calls itself until someone stops it.</li>
<li>It can be used instead of a loop.</li>
<li>If no one stops it, it'll recurse forever and crash your program.</li>
<li>A <strong>base case</strong> is a condition that stops the recursion. Don't forget to add them!</li>
<li>Loops use extra state variables for tracking and counting, while recursion only uses the provided parameters.</li>
</ul>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/08/disappearing-loops.jpg" alt="disappearing-loops"></p>
<h2 id="thanksforreading">Thanks for reading</h2>
<p>For more content like this, check out <a href="https://yazeedb.com">https://yazeedb.com</a>. And please let me know what else you'd like to see! <a href="https://twitter.com/yazeedBee">My DMs are open on Twitter.</a></p>
<p>Until next time!</p>
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
