---
card: "https://cdn-media-1.freecodecamp.org/images/1*f5NxsWhcLjKe4GYjw74adg.png"
tags: [JavaScript]
description: "by Shirshendu Bhowmick"
author: "Milad E. Fahmy"
title: "How to declare JavaScript variables: a look at let, const, and var"
created: "2021-08-16T11:31:57+02:00"
modified: "2021-08-16T11:31:57+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-es6 tag-programming tag-tech tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to declare JavaScript variables: a look at let, const, and var</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*f5NxsWhcLjKe4GYjw74adg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*f5NxsWhcLjKe4GYjw74adg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*f5NxsWhcLjKe4GYjw74adg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*f5NxsWhcLjKe4GYjw74adg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*f5NxsWhcLjKe4GYjw74adg.png" alt="How to declare JavaScript variables: a look at let, const, and var">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Shirshendu Bhowmick</p><p>With the old JavaScript, we had only one way to declare a variable, and that was with <code>var</code>, like <code>var x = 10</code>. It will create a variable called x and assign a value 10 to it. Now with modern ES6 JavaScript, we have 3 different ways to declare a variable: <code>let</code>, <code>const</code> and <code>var</code>. We will talk about <code>let</code> &amp; <code>const</code> later. For now, let's focus on <code>var</code>.</p><h2 id="var">var</h2><p>We already know how to declare a variable with <code>var</code>. Let us now refer to some code to understand <code>var</code> properly.</p><pre><code class="language-js">var x = 20;
function foo() {
var y = 10;
console.log(x);
console.log(y);
}
foo(); // will print 20 and 10
console.log(x); // will print 20
console.log(y); // will throw a reference error</code></pre><p>Those who are familiar with C or C++ might understand why the output is like so. This is because <code>x</code> is in global scope and <code>y</code> is in the function foo’s scope. As function <code>foo</code> has access to the global scope, from the inside of the function we can access both <code>x</code> and <code>y</code>. Printing <code>x</code> also goes fine because as <code>x</code> is in global scope, we can access it from everywhere. Things go wrong when we try to access <code>y</code> from the global scope because <code>y</code> is limited to the function scope only.</p><p>Similar to C or C++ right? No. Let’s see why not.</p><pre><code class="language-js">var x = 20;
function foo() {
var y = 10;
{
var z = 30;
}
console.log(x);
console.log(y);
console.log(z);
}
foo();</code></pre><p>What do you think the output of the code will be? If you think that there will be a reference error at the line <code>console.log(z)</code>, then you are correct from a C or C++ point of view. But with JavaScript, that’s not the case. The above code will print 20 10 30.</p><p>This is because in JavaScript with <code>var</code>, unlike in C and C++, we don’t have any block level scope. We have only global and function level scope. So <code>z</code> falls under function foo’s scope.</p><p>Now we have one more example:</p><pre><code class="language-js">var x = 20;
var x = 30;
console.log(x); // this will print 30</code></pre><p>In C or C++ if we declare a variable more than once in the same scope we get an error. But that’s not the case with <code>var</code> in JavaScript. In the above example, it just redefines <code>x</code> and assigns a value of 30.</p><p>Let’s consider the below code snippets:</p><pre><code class="language-js">function foo() {
x = 20;
console.log(x);
}
foo();
console.log(x);</code></pre><p>The above code will print 20 20. So what happens here? If you declare a variable anywhere without the <code>var</code> keyword it becomes a part of the global scope. It is accessible from both inside and outside of <code>foo</code>.</p><pre><code class="language-js">'use strict'
function foo() {
x = 20;
console.log(x);
}
foo();
console.log(x);</code></pre><p>In the above code, we are using strict mode. In strict mode, an <code>x = 20</code> kind of declaration is not allowed. It will throw a reference error. You have to declare a variable using <code>var</code>, <code>let</code> or <code>const</code>.</p><h2 id="let">let</h2><p>Now it’s time to have a look at <code>let</code>. <code>let</code> is the new var in ES6 but with some differences.</p><pre><code class="language-js">let x = 20;
function foo() {
let y = 10;
{
let z = 30;
}
console.log(x);
console.log(y);
console.log(z);
}
foo();</code></pre><p>Remember that in JavaScript, <code>var</code> doesn’t have any block-level scope? Now block level scopes are back with <code>let</code>. If you execute the above code you will get a reference error at the line <code>console.log(z)</code>. The variable <code>z</code> declared with <code>let</code> is now in a different block-level scope and is not accessible outside of this scope.</p><pre><code class="language-js">let x = 10;
let x = 20; // will throw an error</code></pre><p>Re-declaration of variables with <code>let</code> is not allowed.</p><pre><code class="language-js">var x = 10;
let y = 20;
console.log(window.x); // 10
console.log(window.y); // undefined</code></pre><p>Global variables declared globally with <code>var</code> are added to the <code>global</code> object, the <code>window</code> in case of browsers. Variables declared globally with let are not added to <code>window</code> (global object). Though they are accessible globally, it's like it’s there but you can’t see it.</p><pre><code class="language-js">console.log(x); //undefined
console.log(y); //reference error
var x;
let y;</code></pre><p>Unlike <code>var</code>, <code>let</code> variables are not initialized with undefined before their definitions are evaluated. If you try to access the variable before that you will encounter a reference error. This is also known as the temporal dead zone. In simple words, hoisting is only available with <code>var</code>, not with <code>let</code> &amp; <code>const</code>.</p><h2 id="const">const</h2><p><code>const</code> stands for constant, it is very similar to <code>let</code>. The only differences are its value cannot be changed and it needs to be initialized where you are declaring it.</p><pre><code class="language-js">const x = 20;
console.log(x); // will print 20
x = 30 // will throw an error</code></pre><p>It’s not that in the case of <code>const</code> objects you can change the property of that object — it’s just that you can’t reassign a <code>const</code> variable.</p><pre><code class="language-js">const obj = {firstName: "James", lastName: "Bond"}
console.log(obj); // will print the obj object
obj.firstName = "Ruskin";
console.log(obj); // will print the obj object, it has new firstName
obj = {firstName: "James", lastName: "Bond"}; // will throw an error</code></pre><p>Also as mentioned earlier you have to initialize a <code>const</code> variable, you can’t keep it uninitialized.</p><pre><code class="language-js">const x; // will throw an error
some other code;</code></pre><p>That’s all for this article — see you later!</p><h2 id="thank-you-for-reading-">Thank you for reading :)</h2><h2></h2>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
