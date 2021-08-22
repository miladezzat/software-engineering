---
card: "https://cdn-media-1.freecodecamp.org/images/1*Nm0GW5PgM1okjXAZz_aQrQ.jpeg"
tags: [JavaScript]
description: "The Closure is a collection of all variables in scope at the "
author: "Milad E. Fahmy"
title: "A basic guide to Closures in JavaScript"
created: "2021-08-16T10:06:24+02:00"
modified: "2021-08-16T10:06:24+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-es6 tag-tech tag-programming tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">A basic guide to Closures in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Nm0GW5PgM1okjXAZz_aQrQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*Nm0GW5PgM1okjXAZz_aQrQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*Nm0GW5PgM1okjXAZz_aQrQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Nm0GW5PgM1okjXAZz_aQrQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Nm0GW5PgM1okjXAZz_aQrQ.jpeg" alt="A basic guide to Closures in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>The Closure is a collection of all variables in scope at the time of function creation. To use closure, create a function inside another function which is called a Nested Function. The inner function will have access to the variables in the outer function scope (<strong>Closure</strong> helps to access the outer function scope), even after the outer function has returned. Closures are created every time a function is created.</p><p>Before moving on to understand about Closures, let’s first get the big picture about Scope Chain in JavaScript.</p><p>Normally, there are 2 types of scope:</p><ul><li>Global Scope</li><li>Local Scope</li></ul><p>In ES5 version, a variable inside a function is not visible outside. But variables inside a block (conditions like if or while) are visible outside too.</p><p>From this, ES5 has function scope. There is no block scope.</p><blockquote>Edited on: 9th May 2019</blockquote><blockquote>According to <strong>ES5</strong>, using functions were the only way to declare a block scope in code.</blockquote><blockquote>But, in ES6 it was eased by <strong>let</strong> &amp; <strong>const</strong> keywords which provides block scope.</blockquote><blockquote>Anyhow, Its better to have a knowledge on how JavaScript evolved step by step.</blockquote><p>Lets continue this in ES5 version :</p><pre><code class="language-javascript">var a = 10;
function app(){
var b = 2;
console.log(a); // 10
console.log(b); // 2
}
console.log(b); //   ReferenceError: b is not defined
app();</code></pre><p>As we already know, <strong>a</strong> is a Global variable &amp; <strong>b</strong> is a local variable which is <strong>specific </strong>to the app function.</p><p>We can’t get the value of a local variable out of the local scope.</p><h4 id="using-a-nested-function-function-inside-a-function">Using a Nested Function — Function inside a Function</h4><pre><code class="language-js">var a = 10;
function app(){
var b = 2;
var d = 3;
function add(){
var c = a + b;
}
return add;
}
var x = app();
var startFunc;
function app(){
var b = 2;
function add(){
var c = a + b;
console.log(c);
}
startFunc = add();
}
app(); // Invoke the app function
startFunc;
// as the app function invoked above will assign the add function to startFunc &amp; console the value of c</code></pre><ul><li>a Global function called startFunc is assigned to the add function which is a child function of the parent app function.</li><li>This is possible only after the app function is invoked, otherwise startFunc will act as a global variable without any value assigned</li></ul><h4 id="application-of-closures-in-javascript">Application of Closures in JavaScript</h4><p>Most of us use Closures while coding but we don’t get why we are using it. JavaScript doesn’t have the access modifiers like <strong>private, public, protected</strong> like other Object Oriented Programming Languages. So, we have to use functions to protect the namespace from the outside code usage in ES5.</p><p>Especially in functions, <strong>Immediately-invoked Function Expression (IIFE) </strong>is the one which is executed immediately after the declaration. You don’t need to invoke the function after the function is declared.</p><p>IIFE enables to write <strong>Module Pattern</strong> (one of the Design Pattern) in JavaScript.</p><p>Syntax definition of IIFE is:</p><pre><code>(function(){
//variables &amp; scope that inside the function
})();</code></pre><p>Let’s have an example:</p><pre><code class="language-js">var studnetEnrollment = (function () {
//private variables which no one can change
//except the function declared below.
var count = 0;
var prefix = "S";
// returning a named function expression
function innerFunc() {
count = count + 1;
return prefix + count;
};
return innerFunc;
})();
var x = studnetEnrollment(); // S1
console.log(x);
var y = studnetEnrollment(); // S2
console.log(y);</code></pre><p>count &amp; prefix are the 2 private variables which can’t be changed by anyone &amp; can only be accessible to the inner function (here its innerFunc). This access is possible only by the feature called Closure.</p><ul><li>At the first time, when the studentEnrollment function is called, the count variable inside the function is incremented 1 by innerFunc function.</li><li>At the second time, the count is incremented the previous value of count which is 1 to 2</li><li>These are possible by the Closure feature.</li></ul><h4 id="conclusion">Conclusion</h4><p>The Closure is a collection of variables in an outer function which gives access to the inner function scope to protect the global namespace.</p><p>Closures enable developers to write clean code like OOP Languages which doesn’t confuse the global &amp; local variable names in ES5 version.</p><p>Happy Coding…….!!!!!</p>
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
