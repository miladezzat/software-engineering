---
card: "/images/default.jpg"
tags: [JavaScript]
description: "In JavaScript, people often confuse closures with lexical sco"
author: "Milad E. Fahmy"
title: "JavaScript Closure Tutorial – How Closures and Lexical Scope Work in JS"
created: "2021-08-16T10:03:30+02:00"
modified: "2021-08-16T10:03:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development tag-programming tag-closure tag-lexical-scoping tag-software-development tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Closure Tutorial – How Closures and Lexical Scope Work in JS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/06/tim-evans-Uf-c4u1usFQ-unsplash.jpg 300w,
/news/content/images/size/w600/2021/06/tim-evans-Uf-c4u1usFQ-unsplash.jpg 600w,
/news/content/images/size/w1000/2021/06/tim-evans-Uf-c4u1usFQ-unsplash.jpg 1000w,
/news/content/images/size/w2000/2021/06/tim-evans-Uf-c4u1usFQ-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/06/tim-evans-Uf-c4u1usFQ-unsplash.jpg" alt="JavaScript Closure Tutorial – How Closures and Lexical Scope Work in JS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In JavaScript, people often confuse closures with lexical scope.</p><p>Lexical scope is an important part of closures, but it is not a closure by itself.</p><p>Closures are an advanced concept that is also a frequent topic of technical interviews.</p><p>You should have a foundational understanding of functions before attempting to understand closures.</p><p>After reading this article, I hope I will have helped you learn the following:</p><ul><li>The difference between lexical scope and closures.</li><li>Why closures require lexical scope.</li><li>How to give an example of a closure during the interview process.</li></ul><h2 id="what-is-lexical-scope-in-javascript">What is Lexical Scope in JavaScript?</h2><p>Lexical scope describes how nested (also known as "child") functions have access to variables defined in parent scopes.</p><pre><code class="language-js">const myFunction = () =&gt; {
let myValue = 2;
console.log(myValue);
const childFunction = () =&gt; {
console.log(myValue += 1);
}
childFunction();
}
myFunction();</code></pre><p>In this example, <code>childFunction</code> has access to the variable <code>myValue</code> which is defined in the parent scope of <code>myFunction</code>. </p><p>The lexical scope of <code>childFunction</code> allows access to the parent scope.</p><h2 id="what-is-a-closure-in-javascript">What is a Closure in JavaScript?</h2><p><a href="https://www.w3schools.com/js/js_function_closures.asp">w3Schools.com</a> offers a great definition of what a closure is:</p><blockquote>A closure is a function having access to the parent scope, even after the parent function has closed.</blockquote><p>Let's note the first part of the sentence before the comma:</p><blockquote>...a function having access to the parent scope</blockquote><p>That's describing lexical scope!</p><p>But we need the second part of the definition to give an example of a closure...</p><blockquote>...even after the parent function has closed.</blockquote><p>Let's look at an example of a closure:</p><pre><code class="language-js">const myFunction = () =&gt; {
let myValue = 2;
console.log(myValue);
const childFunction = () =&gt; {
console.log(myValue += 1);
}
return childFunction;
}
const result = myFunction();
console.log(result);
result();
result();
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
