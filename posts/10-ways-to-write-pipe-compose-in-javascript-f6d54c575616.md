---
card: "https://cdn-media-1.freecodecamp.org/images/1*I2oy7YWlgX6Ej9uGSOGD7Q.jpeg"
tags: [JavaScript]
description: "compose, and especially pipe, are easily among my favorite fu"
author: "Milad E. Fahmy"
title: "My favorite ways to write pipe and compose in JavaScript"
created: "2021-08-16T11:44:20+02:00"
modified: "2021-08-16T11:44:20+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-functional-programming tag-react tag-technology tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">My favorite ways to write pipe and compose in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*I2oy7YWlgX6Ej9uGSOGD7Q.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*I2oy7YWlgX6Ej9uGSOGD7Q.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*I2oy7YWlgX6Ej9uGSOGD7Q.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*I2oy7YWlgX6Ej9uGSOGD7Q.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*I2oy7YWlgX6Ej9uGSOGD7Q.jpeg" alt="My favorite ways to write pipe and compose in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>This article’s just to have fun and explore different implementations of these two gems. I recommend you understand what they do before reading this; perhaps check out <a href="https://medium.com/front-end-hacking/pipe-and-compose-in-javascript-5b04004ac937">my deep-dive here</a>.</p>
<pre><code class="language-js">pipe = (...fns) =&gt; (x) =&gt; fns.reduce((v, f) =&gt; f(v), x);
</code></pre>
<p>Classic.</p>
<p>Starting with the leftmost function, reduce an array of functions to a single value by calling the next function with the previous one’s output.</p>
<pre><code class="language-js">double = (x) =&gt; x * 2;
add1 = (x) =&gt; x + 1;
pipe(
double,
add1
)(100); // 201
</code></pre>
<p>I discovered this implementation through <a href="https://medium.com/@_ericelliott">Eric Elliott</a>, and wrote a deep-dive on it <a href="https://medium.com/front-end-hacking/pipe-and-compose-in-javascript-5b04004ac937">here</a>.</p>
<p>Use <code>reduceRight</code> to implement <code>compose</code>. Now your functions are called from right, to left.</p>
<pre><code class="language-js">compose = (...fns) =&gt; (x) =&gt; fns.reduceRight((v, f) =&gt; f(v), x);
compose(
double,
add1
)(100);
// 202
</code></pre>
<p>You could also reverse <code>fns</code> and keep using <code>reduce</code> (less performant).</p>
<pre><code class="language-js">compose = (...fns) =&gt; (x) =&gt; fns.reverse().reduce((v, f) =&gt; f(v), x);
compose(
double,
add1
)(100); // 202
</code></pre>
<p><code>reverse</code> mutates the array, though, so you might copy it first (even less performant).</p>
<pre><code class="language-js">compose = (...fns) =&gt; (x) =&gt; [...fns].reverse().reduce((v, f) =&gt; f(v), x);
compose(
double,
add1
)(100); // 202
</code></pre>
<p>Use <code>reduceRight</code> to go back to <code>pipe</code>.</p>
<pre><code class="language-js">pipe = (...fns) =&gt; (x) =&gt; [...fns].reverse().reduceRight((v, f) =&gt; f(v), x);
pipe(
double,
add1
)(100); // 201
</code></pre>
<h3 id="buttheyreallunary">But They’re All Unary</h3>
<p>All the above snippets, by the way, are <em>unary</em>. Each function may only accept <em>a single argument</em>.</p>
<p>If your pipeline’s first function must be <em>nAry</em> (accepting <code>n</code> arguments), try this implementation:</p>
<pre><code class="language-js">multiply = (x, y) =&gt; x * y;
pipe = (...fns) =&gt; fns.reduce((f, g) =&gt; (...args) =&gt; g(f(...args)));
pipe(
multiply,
add1
)(10, 10); // 101
// Takes multiple args now
</code></pre>
<p>This snippet’s from <a href="https://30secondsofcode.org/adapter#pipefunctions">30secondsofcode.org</a>. Your first (leftmost) function may accept <code>n</code> arguments–all others must be unary.</p>
<p>Again, <code>reduceRight</code> gives us <code>compose</code>. Now your rightmost function may accept <code>n</code> arguments. Let’s move <code>multiply</code> to the end of the chain.</p>
<pre><code class="language-js">compose = (...fns) =&gt; fns.reduceRight((f, g) =&gt; (...args) =&gt; g(f(...args)));
compose(
add1,
multiply
)(10, 10); // 101
// Takes multiple args now
// Put multiply first
</code></pre>
<p>Like before, you could reverse the <code>fns</code> array and keep using <code>reduce</code>:</p>
<pre><code class="language-js">compose = (...fns) =&gt;
[...fns].reverse().reduce((f, g) =&gt; (...args) =&gt; g(f(...args)));
compose(
add1,
multiply
)(10, 10); // 101
</code></pre>
<p>If you want to keep <code>reduce</code> without the slight performance hit, just switch <code>g</code> and <code>f</code>:</p>
<pre><code class="language-js">compose = (...fns) =&gt; fns.reduce((f, g) =&gt; (...args) =&gt; f(g(...args)));
compose(
add1,
multiply
)(10, 10); // 101
</code></pre>
<p>And use <code>reduceRight</code> to switch back to <code>pipe</code>.</p>
<pre><code class="language-js">pipe = (...fns) =&gt; fns.reduceRight((f, g) =&gt; (...args) =&gt; f(g(...args)));
pipe(
multiply,
add1
)(10, 10); // 101
// put multiply first now
</code></pre>
<h3 id="conclusion">Conclusion</h3>
<p>Phew! That’s a lot of ways to pipe and compose!</p>
<p>It just proves that, no matter what, you <em>must loop over an array of functions, calling the next one with the previous one’s result</em>.</p>
<p>Doesn’t matter if you use <code>reduce</code>, <code>reduceRight</code>, switch the invocation order, or whatever else.</p>
<blockquote>
<p>If you want <code>pipe()</code>, go left-to-right. Want compose()? Go right-to-left.</p>
</blockquote>
<p>Plain and simple. Until next time!</p>
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
