---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9c2d740569d1a4ca306d.jpg"
tags: [JavaScript]
description: You may have seen double and triple equals signs in JavaScrip
author: "Milad E. Fahmy"
title: "JavaScript Triple Equals Sign VS Double Equals Sign – Comparison Operators Explained with Examples"
created: "2021-08-15T19:30:26+02:00"
modified: "2021-08-15T19:30:26+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Triple Equals Sign VS Double Equals Sign – Comparison Operators Explained with Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c2d740569d1a4ca306d.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c2d740569d1a4ca306d.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c2d740569d1a4ca306d.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c2d740569d1a4ca306d.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c2d740569d1a4ca306d.jpg" alt="JavaScript Triple Equals Sign VS Double Equals Sign – Comparison Operators Explained with Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>You may have seen double and triple equals signs in JavaScript. But what do they mean?</p>
<p>Well in short: <code>==</code> inherently converts type and <code>===</code> does not convert type.</p>
<p>Double Equals (<code>==</code>) checks for value equality only. It inherently does type coercion. This means that before checking the values, it converts the types of the variables to match each other.</p>
<p>On the other hand, Triple Equals (<code>===</code>) does not perform type coercion. It will verify whether the variables being compared have both the same value <strong>AND</strong> the same type.</p>
<p>OK - so let's help you better understand the difference through a few examples. For each of these, consider what the output of these statements will be.</p>
<h3 id="example-1-">Example 1:</h3><pre><code class="language-JS">const foo = "test"
const bar = "test"
console.log(foo == bar) //true
console.log(foo === bar) //true                            </code></pre>
<p>The value and the type of both <code>foo</code> and <code>bar</code> is same. Therefore the result is <code>true</code> for both.</p>
<h3 id="example-2-">Example 2:‌</h3><pre><code class="language-JS">const number = 1234
const stringNumber = '1234'
console.log(number == stringNumber) //true
console.log(number === stringNumber)  //false
</code></pre>
<p>The value of <code>number</code> and <code>stringNumber</code> looks similar here. However, the type of <code>number</code> is <code>Number</code> and type of <code>stringNumber</code> is <code>string</code>. Even though the values are same, the type is not the same. Hence a <code>==</code> check returns <code>true</code>, but when checked for value <strong>and</strong> type, the value is <code>false</code>. </p>
<h3 id="example-3-">Example 3:</h3><pre><code class="language-JS">console.log(0 == false) //true
console.log(0 === false) //false                  </code></pre>
<p>Reason: same value, different type. Type coercion </p>
<p>This is an interesting case. The value of <code>0</code> when checked with <code>false</code> is same. It is so because <code>0</code> and <code>false</code> have the same value for JavaScript, but when checked for type <strong>and</strong> value, the value is false because <code>0</code> is a <code>number</code> and <code>false</code> is <code>boolean</code>. </p>
<h3 id="example-4-">Example 4: </h3><pre><code>const str = ""
console.log(str == false) //true
console.log(str === false) //false</code></pre>
<p>The value of empty string and <code>false</code> is same in JavaScript. Hence, <code>==</code> returns true. However, the type is different and hence <code>===</code> returns false. </p>
<h2 id="when-should-you-use-and-when-should-you-use-">When should you use <code>==</code> and when should you use <code>===</code>?</h2>
<p>When in doubt, use <code>===</code>. This will save you from a ton of potential bugs.</p>
<p>If you are supporting a use case where you can be a little lenient about the type of incoming data, then use <code>==</code>. For example, if an API accepts both <code>"true"</code> and <code>true</code> from the client, use <code>==</code>. In short, do not use <code>==</code> unless you have a strong use case for it. </p>
<p>Here's a handy JavaScript truth table for your reference, and to show you just how complicated equality is in JavaScript:</p>
<figcaption>Source: <a href="https://dorey.github.io/JavaScript-Equality-Table/">https://dorey.github.io/JavaScript-Equality-Table/</a></figcaption>
</figure>
<p>If you enjoyed this article, be sure to follow me on twitter for updates.</p>
<blockquote class="twitter-tweet">
<p lang="en" dir="ltr">Q: How much space will be freed up once Britain leaves the EU?<br>.<br>.<br>.<br><br>A: 1 GB<a href="https://twitter.com/hashtag/DevJoke?src=hash&amp;ref_src=twsrc%5Etfw">#DevJoke</a> <a href="https://twitter.com/hashtag/NotAJoke?src=hash&amp;ref_src=twsrc%5Etfw">#NotAJoke</a></p>— Shruti Kapoor (@shrutikapoor08) <a href="https://twitter.com/shrutikapoor08/status/1180173695643348992?ref_src=twsrc%5Etfw">October 4, 2019</a>
</blockquote>
</figure>
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
