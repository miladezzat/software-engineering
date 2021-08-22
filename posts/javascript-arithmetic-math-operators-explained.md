---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9d3b740569d1a4ca369f.jpg"
tags: [JavaScript]
description: "JavaScript provides the user with five arithmetic operators:"
author: "Milad E. Fahmy"
title: "JavaScript Modulo, Division, Remainder and Other Math Operators Explained"
created: "2021-08-15T19:31:01+02:00"
modified: "2021-08-15T19:31:01+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-math tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Modulo, Division, Remainder and Other Math Operators Explained</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d3b740569d1a4ca369f.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d3b740569d1a4ca369f.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d3b740569d1a4ca369f.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d3b740569d1a4ca369f.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d3b740569d1a4ca369f.jpg" alt="JavaScript Modulo, Division, Remainder and Other Math Operators Explained">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>JavaScript provides the user with five arithmetic operators: <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code> and <code>%</code>. The operators are for addition, subtraction, multiplication, division and remainder (or modulo), respectively.</p>
<h2 id="addition"><strong>Addition</strong></h2>
<p><strong><strong>Syntax</strong></strong></p>
<p><code>a + b</code></p>
<p><strong><strong>Usage</strong></strong></p><pre><code class="language-text">2 + 3          // returns 5
true + 2       // interprets true as 1 and returns 3
false + 5      // interprets false as 0 and returns 5
true + "bar"   // concatenates the boolean value and returns "truebar"
5 + "foo"      // concatenates the string and the number and returns "5foo"
"foo" + "bar"  // concatenates the strings and returns "foobar"</code></pre>
<p><em>Hint:</em> There is a handy <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment_(" rel="nofollow">increment</a>) operator that is a great shortcut when you’re adding numbers by 1.</p>
<h2 id="subtraction"><strong>Subtraction</strong></h2>
<p><strong><strong>Syntax</strong></strong></p>
<p><code>a - b</code></p>
<p><strong><strong>Usage</strong></strong></p><pre><code class="language-text">2 - 3      // returns -1
3 - 2      // returns 1
false - 5  // interprets false as 0 and returns -5
true + 3   // interprets true as 1 and returns 4
5 + "foo"  // returns NaN (Not a Number)</code></pre>
<p><em>Hint:</em> There is a handy <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement_(--" rel="nofollow">decrement</a>) operator that is a great shortcut when you’re subtracting numbers by 1.</p>
<h2 id="multiplication"><strong>Multiplication</strong></h2>
<p><strong><strong>Syntax</strong></strong></p>
<p><code>a * b</code></p>
<p><strong><strong>Usage</strong></strong></p><pre><code class="language-text">2 * 3                // returns 6
3 * -2               // returns -6
false * 5            // interprets false as 0 and returns 0
true * 3             // interprets true as 1 and returns 3
5 * "foo"            // returns NaN (Not a Number)
Infinity * 0         // returns NaN
Infinity * Infinity  // returns Infinity</code></pre>
<h2 id="division"><strong>Division</strong></h2>
<p><strong><strong>Syntax</strong></strong></p>
<p><code>a / b</code></p>
<p><strong><strong>Usage</strong></strong></p><pre><code class="language-text">3 / 2                // returns 1.5
3.0 / 2/0            // returns 1.5
3 / 0                // returns Infinity
3.0 / 0.0            // returns Infinity
-3 / 0               // returns -Infinity
false / 5            // interprets false as 0 and returns 0
true / 2             // interprets true a 1 and returns 0.5
5 + "foo"            // returns NaN (Not a Number)
Infinity / Infinity  // returns NaN</code></pre>
<h2 id="remainder"><strong>Remainder</strong></h2>
<p><strong><strong>Syntax</strong></strong></p>
<p><code>a % b</code></p>
<p><strong><strong>Usage</strong></strong></p><pre><code class="language-text">3 % 2          // returns 1
true % 5       // interprets true as 1 and returns 1
false % 4      // interprets false as 0 and returns 0
3 % "bar"      // returns NaN</code></pre>
<h2 id="increment"><strong>Increment</strong></h2>
<p><strong><strong>Syntax</strong></strong></p>
<p><code>a++ or ++a</code></p>
<p><strong><strong>Usage</strong></strong><br>// Postfix x = 3; // declare a variable y = x++; // y = 4, x = 3<br>// Prefix var a = 2; b = ++a; // a = 3, b = 3</p>
<h2 id="decrement"><strong>Decrement</strong></h2>
<p><strong><strong>Syntax</strong></strong></p>
<p><code>a-- or --a</code></p>
<p><strong><strong>Usage</strong></strong><br>// Postfix x = 3; // declare a variable y = x—; // y = 3, x = 3<br>// Prefix var a = 2; b = —a; // a = 1, b = 1 <em>!Important!</em> As you can see, you <strong><strong>cannot</strong></strong> perform any sort of operations on <code>Infinity</code>.</p>
<h2 id="more-on-math-in-javascript-">More on math in JavaScript:</h2>
<ul>
<li><a href="/news/math-in-javascript/">JavaScript math functions explained</a></li>
<li><a href="/news/p/b988fbe9-a282-435b-8df0-71eb9193ad5c/">JavaScript's math.random() method explained</a></li>
</ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
