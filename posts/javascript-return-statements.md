---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9da5740569d1a4ca38df.jpg"
tags: [JavaScript]
description: When a return statement is called in a function, the executio
author: "Milad E. Fahmy"
title: "JavaScript Return Statements"
created: "2021-08-15T19:31:12+02:00"
modified: "2021-08-15T19:31:12+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Return Statements</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9da5740569d1a4ca38df.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9da5740569d1a4ca38df.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9da5740569d1a4ca38df.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9da5740569d1a4ca38df.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9da5740569d1a4ca38df.jpg" alt="JavaScript Return Statements">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="introduction"><strong>Introduction</strong></h2>
<p>When a <strong><strong>return</strong></strong> statement is called in a function, the execution of this function is stopped. If specified, a given value is returned to the function caller. If the expression is omitted, <code>undefined</code> is returned instead.</p><pre><code class="language-js">    return expression;</code></pre>
<p>Functions can return:</p>
<ul>
<li>Primitive values (string, number, boolean, etc.)</li>
<li>Object types (arrays, objects, functions, etc.)</li>
</ul>
<p>Never return something on a new line without using parentheses. This is a JavaScript quirk and the result will be undefined. Try to always use parentheses when returning something on multiple lines.</p><pre><code class="language-javascript">function foo() {
return
1;
}
function boo() {
return (
1
);
}
foo(); --&gt; undefined
boo(); --&gt; 1</code></pre>
<h2 id="examples"><strong>Examples</strong></h2>
<p>The following function returns the square of its argument, <strong><strong>x</strong></strong>, where <strong><strong>x</strong></strong> is a number.</p><pre><code class="language-js">    function square(x) {
return x * x;
}</code></pre>
<p><a href="https://repl.it/C7VT/0" rel="nofollow">Run Code</a></p>
<p>The following function returns the product of its arguments, <strong><strong>arg1</strong></strong> and <strong><strong>arg2</strong></strong>.</p><pre><code class="language-js">    function myfunction(arg1, arg2){
var r;
r = arg1 * arg2;
return(r);
}</code></pre>
<p><a href="https://repl.it/C7VU/0" rel="nofollow">Run Code</a></p>
<p>When a function <code>return</code>s a value, the value can be assigned to a variable using the assignment operator (<code>=</code>). In the example below, the function returns the square of the argument. When the function resolves or ends, its value is the <code>return</code>ed value. The value is then assigned to the variable <code>squared2</code>.</p><pre><code class="language-javascript">    function square(x) {
return x * x;
}
let squared2 = square(2); // 4</code></pre>
<p>If there is no explicit return statement, meaning the function is missing the <code>return</code> keyword, the function automatically returns <code>undefined</code>. </p>
<p>In the following example, the <code>square</code> function is missing the <code>return</code> keyword. When the result of calling the function is assigned to a variable, the variable has a value of <code>undefined</code>.</p><pre><code class="language-javascript">    function square(x) {
let y = x * x;
}
let squared2 = square(2); // undefined</code></pre>
<p><a href="https://repl.it/M8BE" rel="nofollow">Run Code</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
