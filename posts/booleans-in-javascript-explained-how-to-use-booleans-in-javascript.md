---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9d04740569d1a4ca3574.jpg"
tags: [JavaScript]
description: Booleans are a primitive datatype commonly used in computer p
author: "Milad E. Fahmy"
title: "JavaScript Booleans Explained – How to use Booleans in JavaScript"
created: "2021-08-15T19:30:57+02:00"
modified: "2021-08-15T19:30:57+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Booleans Explained – How to use Booleans in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d04740569d1a4ca3574.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d04740569d1a4ca3574.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d04740569d1a4ca3574.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d04740569d1a4ca3574.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d04740569d1a4ca3574.jpg" alt="JavaScript Booleans Explained – How to use Booleans in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="boolean"><strong>Boolean</strong></h2>
<p>Booleans are a primitive datatype commonly used in computer programming languages. By definition, a boolean has two possible values: <code>true</code> or <code>false</code>.</p>
<p>In JavaScript, there is often implicit type coercion to boolean. If for example you have an if statement which checks a certain expression, that expression will be coerced to a boolean:</p><pre><code class="language-javascript">const a = 'a string';
if (a) {
console.log(a); // logs 'a string'
}</code></pre>
<p>There are only a few values that will be coerced to false:</p>
<ul>
<li>false (not really coerced as it already is false)</li>
<li>null</li>
<li>undefined</li>
<li>NaN</li>
<li>0</li>
<li>"" (empty string)</li>
</ul>
<p>All other values will be coerced to true. When a value is coerced to a boolean, we also call that either ‘falsy’ or ‘truthy’.</p>
<p>One way that type coercion is used is with the use of the or (<code>||</code>) and and (<code>&amp;&amp;</code>) operators:</p><pre><code class="language-javascript">const a = 'word';
const b = false;
const c = true;
const d = 0
const e = 1
const f = 2
const g = null
console.log(a || b); // 'word'
console.log(c || a); // true
console.log(b || a); // 'word'
console.log(e || f); // 1
console.log(f || e); // 2
console.log(d || g); // null
console.log(g || d); // 0
console.log(a &amp;&amp; c); // true
console.log(c &amp;&amp; a); // 'word'</code></pre>
<p>As you can see, the <em>or</em> operator checks the first operand. If this is true or truthy, it returns it immediately (which is why we get ‘word’ in the first case &amp; true in the second case). If it is not true or truthy, it returns the second operand (which is why we get ‘word’ in the third case).</p>
<p>With the and operator it works in a similar way, but for ‘and’ to be true, both operands need to be truthy. So it will always return the second operand if both are true/truthy, otherwise it will return false. That is why in the fourth case we get true and in the last case we get ‘word’.</p>
<h2 id="the-boolean-object"><strong>The Boolean Object</strong></h2>
<p>There is also a native JavaScript object that wraps around a value. The value passed as the first parameter is converted to a boolean value, if necessary. If value is omitted, 0, -0, null, false, NaN, undefined, or the empty string (""), the object has an initial value of false. All other values, including any object or the string “false”, create an object with an initial value of true.</p>
<p>Do not confuse the primitive Boolean values true and false with the true and false values of the Boolean object.</p>
<h2 id="more-details"><strong>More Details</strong></h2>
<p>Any object whose value is not undefined or null, including a Boolean object whose value is false, evaluates to true when passed to a conditional statement. If true, this will execute the function. For example, the condition in the following if statement evaluates to true:</p><pre><code class="language-javascript">const x = new Boolean(false);
if (x) {
// this code is executed
}</code></pre>
<p>This behavior does not apply to Boolean primitives. For example, the condition in the following if statement evaluates to false:</p><pre><code class="language-javascript">const x = false;
if (x) {
// this code is not executed
}</code></pre>
<p>Do not use a Boolean object to convert a non-boolean value to a boolean value. Instead, use Boolean as a function to perform this task:</p><pre><code class="language-javascript">const x = Boolean(expression);     // preferred
const x = new Boolean(expression); // don't use</code></pre>
<p>If you specify any object, including a Boolean object whose value is false, as the initial value of a Boolean object, the new Boolean object has a value of true.</p><pre><code class="language-javascript">const myFalse = new Boolean(false);   // initial value of false
const g = new Boolean(myFalse);       // initial value of true
const myString = new String('Hello'); // string object
const s = new Boolean(myString);      // initial value of true</code></pre>
<p>Do not use a Boolean object in place of a Boolean primitive.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
