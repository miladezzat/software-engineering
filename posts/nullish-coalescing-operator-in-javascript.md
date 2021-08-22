---
card: "/images/default.jpg"
tags: [JavaScript]
description: ES11 has added a nullish coalescing operator which is denoted
author: "Milad E. Fahmy"
title: "How the Nullish Coalescing Operator Works in JavaScript"
created: "2021-08-15T19:27:47+02:00"
modified: "2021-08-15T19:27:47+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react ">
<header class="post-full-header">
<h1 class="post-full-title">How the Nullish Coalescing Operator Works in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/12/nullish-2.jpeg 300w,
/news/content/images/size/w600/2020/12/nullish-2.jpeg 600w,
/news/content/images/size/w1000/2020/12/nullish-2.jpeg 1000w,
/news/content/images/size/w2000/2020/12/nullish-2.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/12/nullish-2.jpeg" alt="How the Nullish Coalescing Operator Works in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>ES11 has added a nullish coalescing operator which is denoted by double question marks, like this: <code>??</code>. </p>
<p>In this article, we will explore why it's so useful and how to use it.</p>
<p>Let's get started.</p>
<h2 id="background-information">Background Information</h2>
<p>In JavaScript, there is a short-circuit logical OR operator <code>||</code>.</p>
<blockquote>The || operator returns the first <code>truthy</code> value.</blockquote>
<p>The following are the <code>only six</code> values that are considered to be <code>falsy</code> values in JavaScript.</p>
<ul>
<li>false</li>
<li>undefined</li>
<li>null</li>
<li>""(empty string)</li>
<li>NaN</li>
<li>0</li>
</ul>
<p>So if anything is not in the above list, then it will be considered a <code>truthy</code> value.</p>
<p><code>Truthy</code> and <code>Falsy</code> values are the non-boolean values that are coerced to <code>true</code> <br>or <code>false</code> when performing certain operations.</p><pre><code class="language-js">const value1 = 1;
const value2 = 23;
const result = value1 || value2;
console.log(result); // 1</code></pre>
<p>As the || operator returns the first <code>truthy</code> value, in the above code, the <code>result</code> will be the value stored in <code>value1</code> which is <code>1</code>.</p>
<p>If <code>value1</code> is <code>null</code>, <code>undefined</code>, <code>empty</code> or any other <code>falsy</code> value, then the next operand after the || operator will be evaluated and that will the result of the total expression.</p><pre><code class="language-js">const value1 = 0;
const value2 = 23;
const value3 = "Hello";
const result = value1 || value2 || value3;
console.log(result); // 23</code></pre>
<p>Here, because <code>value1</code> is 0, <code>value2</code> will be checked. As it's a truthy value, the result of the entire expression will be the <code>value2</code>.</p>
<blockquote>The issue with the || operator is that it doesn’t distinguish between <code>false</code> , <code>0</code> , an empty string <code>""</code>, <code>NaN</code> , <code>null</code> and <code>undefined</code> . They all are considered as <code>falsy</code> values. </blockquote>
<p>If any of these is the first operand of || , then we’ll get the second operand as the result.</p>
<h2 id="why-javascript-needed-the-nullish-coalescing-operator">Why JavaScript Needed the Nullish Coalescing Operator</h2>
<p>The || operator works great but sometimes we only want the next expression to be evaluated when the first operand is only either <code>null</code> or <code>undefined</code>.</p>
<p>Therefore, ES11 has added the nullish coalescing operator.</p>
<p>In the expression <code>x ?? y</code>,</p>
<ul>
<li>If x is either <code>null</code> or <code>undefined</code> <strong>then only</strong> result will be <code>y</code>.</li>
<li>If x is <strong>not</strong> <code>null</code> or <code>undefined</code> then the result will be <code>x</code>.</li>
</ul>
<p>This will make the conditional checks and debugging code an easy task.</p>
<h2 id="try-it-yourself">Try it yourself</h2><pre><code class="language-js">let result = undefined ?? "Hello";
console.log(result); // Hello
result = null ?? true;
console.log(result); // true
result = false ?? true;
console.log(result); // false
result = 45 ?? true;
console.log(result); // 45
result = "" ?? true;
console.log(result); // ""
result = NaN ?? true;
console.log(result); // NaN
result = 4 &gt; 5 ?? true;
console.log(result); // false because 4 &gt; 5 evaluates to false
result = 4 &lt; 5 ?? true;
console.log(result); // true because 4 &lt; 5 evaluates to true
result = [1, 2, 3] ?? true;
console.log(result); // [1, 2, 3]
</code></pre>
<p>So from all of the above examples, it’s clear that the result of the operation <code>x ?? y</code> is <code>y</code> only when <code>x</code> is either <code>undefined</code> or <code>null</code>. </p>
<p>In all the other cases, the result of the operation will always be <code>x</code>.</p>
<h2 id="conclusion">Conclusion</h2>
<p>As you have seen, the nullish coalescing operator is really useful when you only care about the <code>null</code> or <code>undefined</code> value for any variable.</p>
<p>Starting with ES6, there are many useful additions to JavaScript like </p>
<ul>
<li>ES6 Destructuring</li>
<li>Import and Export Syntax</li>
<li>Arrow functions</li>
<li>Promises</li>
<li>Async/await </li>
<li>Optional chaining operator</li>
</ul>
<p>and a lot more.</p>
<p>You can learn everything about all the ES6+ features in detail in the <a href="https://modernjavascript.yogeshchavan.dev/">Mastering Modern JavaScript</a> book.</p>
<p>You can <a href="https://modernjavascript.yogeshchavan.dev/">get the Mastering Modern JavaScript book at 40% discount</a>.</p>
<p><strong>Subscribe to my <a href="https://yogeshchavan.dev/">weekly newsletter</a> to join 1000+ other subscribers to get amazing tips, tricks, articles and discount deals directly in your inbox.</strong></p>
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
