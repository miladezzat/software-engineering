---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9cca740569d1a4ca3436.jpg"
tags: [JavaScript]
description: The Label Statement is used with the break and continue state
author: "Milad E. Fahmy"
title: "JavaScript Loops: Label Statement, Continue Statement, and Break Statement Explained"
created: "2021-08-15T19:30:50+02:00"
modified: "2021-08-15T19:30:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-loops tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Loops: Label Statement, Continue Statement, and Break Statement Explained</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9cca740569d1a4ca3436.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9cca740569d1a4ca3436.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9cca740569d1a4ca3436.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9cca740569d1a4ca3436.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9cca740569d1a4ca3436.jpg" alt="JavaScript Loops: Label Statement, Continue Statement, and Break Statement Explained">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="label-statement"><strong>Label Statement</strong></h2>
<p>The <strong><strong>Label Statement</strong></strong> is used with the <code>break</code> and <code>continue</code> statements and serves to identify the statement to which the <code>break</code> and <code>continue</code> statements apply. </p>
<p>We'll talk more about the <code>break</code> and <code>continue</code> statements below.</p>
<h3 id="syntax"><strong>Syntax</strong></h3><pre><code class="language-javascript">labelname:
statements</code></pre>
<h3 id="usage"><strong>Usage</strong></h3>
<p>Without the use of a <code>labeled</code> statement the <code>break</code> statement can only break out of a loop or a <code>switch</code> statement. Using a <code>labeled</code> statement allows <code>break</code> to jump out of any code block.</p>
<h4 id="example"><strong>Example</strong></h4><pre><code class="language-javascript">foo: {
console.log("This prints:");
break foo;
console.log("This will never print.");
}
console.log("Because execution jumps to here!")
/* output
This prints:
Because execution jumps to here! */</code></pre>
<p>When used with a <code>continue</code> statement the <code>labeled</code> statement allows you to skip a loop iteration, the advantage comes from being able to jump out from an inner loop to an outer one when you have nested loop statements. Without the use of a <code>labeled</code> statement you could only jump out of the existing loop iteration to the <code>next iteration of the same loop.</code></p>
<h4 id="example-1"><strong>Example</strong></h4><pre><code class="language-javascript">// without labeled statement, when j==i inner loop jumps to next iteration
function test() {
for (var i = 0; i &lt; 3; i++) {
console.log("i=" + i);
for (var j = 0; j &lt; 3; j++) {
if (j === i) {
continue;
}
console.log("j=" + j);
}
}
}
/* output
i=0 (note j=0 is missing)
j=1
j=2
i=1
j=0 (note j=1 is missing)
j=2
i=2
j=0
j=1 (note j=2 is missing)
*/
// using a labeled statement we can jump to the outer (i) loop instead
function test() {
outer: for (var i = 0; i &lt; 3; i++) {
console.log("i=" + i);
for (var j = 0; j &lt; 3; j++) {
if (j === i) {
continue outer;
}
console.log("j=" + j);
}
}
}
/*
i=0 (j only logged when less than i)
i=1
j=0
i=2
j=0
j=1
*/</code></pre>
<h2 id="break-statement"><strong>Break statement</strong></h2>
<p>The <strong><strong>break</strong></strong> statement terminates the current loop, <code>switch</code> or <code>label</code> statement and transfers program control to the statement following the terminated statement.</p><pre><code class="language-text">break;</code></pre>
<p>If the <strong><strong>break</strong></strong> statement is used in a labeled statement, the syntax is as follows:</p><pre><code class="language-text">break labelName;</code></pre>
<h3 id="examples">Examples</h3>
<p>The following function has a <strong><strong>break</strong></strong> statement that terminates the <code>while</code> loop when <strong><strong>i</strong></strong> is 3, and then returns the value <strong><strong>3 * x</strong></strong>.</p><pre><code class="language-text">function testBreak(x) {
var i = 0;
while (i &lt; 6) {
if (i == 3) {
break;
}
i += 1;
}
return i * x;
}</code></pre>
<p><a href="https://repl.it/C7VM/0" rel="nofollow">Run Code</a></p>
<p>In the following example, the counter is set up to count from 1 to 99; however, the <strong><strong>break</strong></strong> statement terminates the loop after 14 counts.</p><pre><code class="language-text">for (var i = 1; i &lt; 100; i++) {
if (i == 15) {
break;
}
}</code></pre>
<p><a href="https://repl.it/C7VO/0" rel="nofollow">Run Code</a></p>
<h2 id="continue-statement">Continue statement</h2>
<p>The <strong><strong>continue</strong></strong> statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.</p><pre><code class="language-text">continue;</code></pre>
<p>If the <strong><strong>continue</strong></strong> statement is used in a labeled statement, the syntax is as follows:</p><pre><code class="language-text">continue labelName;</code></pre>
<p>In contrast to the <strong><strong>break</strong></strong> statement, <strong><strong>continue</strong></strong> does not terminate the execution of the loop entirely; instead:</p>
<ul>
<li>In a <code>while</code> loop, it jumps back to the condition.</li>
<li>In a <code>for</code> loop, it jumps to the update expression.</li>
</ul>
<h3 id="examples-1">Examples</h3>
<p>The following example shows a <code>while</code> loop that has a <strong><strong>continue</strong></strong> statement that executes when the value of <strong><strong>i</strong></strong> is 3. Thus, <strong><strong>n</strong></strong> takes on the values 1, 3, 7, and 12.</p><pre><code class="language-text">var i = 0;
var n = 0;
while (i &lt; 5) {
i++;
if (i === 3) {
continue;
}
n += i;
console.log (n);
}</code></pre>
<p><a href="https://repl.it/C7hx/0" rel="nofollow">Run Code</a></p>
<p>In the following example, a loop iterates from 1 through 9. The statements between <strong><strong>continue</strong></strong> and the end of the <code>for</code> body are skipped because of the use of the <strong><strong>continue</strong></strong> statement together with the expression <code>(i &lt; 5)</code>.</p><pre><code class="language-text">for (var i = 1; i &lt; 10; i++) {
if (i &lt; 5) {
continue;
}
console.log (i);
}</code></pre>
<p><a href="https://repl.it/C7hs/0" rel="nofollow">Run Code</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
