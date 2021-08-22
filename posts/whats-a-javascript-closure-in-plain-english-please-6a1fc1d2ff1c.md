---
card: "https://cdn-media-1.freecodecamp.org/images/1*O9r2gYaYeQb7EI5KBrkf3Q.jpeg"
tags: [JavaScript]
description: "Every function in JavaScript has a closure. And this is one o"
author: "Milad E. Fahmy"
title: "What’s a JavaScript closure? In plain English, please."
created: "2021-08-16T10:25:13+02:00"
modified: "2021-08-16T10:25:13+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-web-development tag-learning tag-learning-to-code ">
<header class="post-full-header">
<h1 class="post-full-title">What’s a JavaScript closure? In plain English, please.</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*O9r2gYaYeQb7EI5KBrkf3Q.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*O9r2gYaYeQb7EI5KBrkf3Q.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*O9r2gYaYeQb7EI5KBrkf3Q.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*O9r2gYaYeQb7EI5KBrkf3Q.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*O9r2gYaYeQb7EI5KBrkf3Q.jpeg" alt="What’s a JavaScript closure? In plain English, please.">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Every function in JavaScript has a closure. And this is one of the coolest features of the JavaScript language. Because without closures, it would be hard to implement common structures like callbacks or event handlers.</p><p>You create a closure whenever you define a function. Then when you execute functions, their closures enable them to access data in their scopes.</p><p>It’s kind of like when a car is manufactured (defined) it comes with a few functions like <code>start</code>, <code>accelerate</code>, <code>decelerate</code>. These car functions get executed by the driver every time they operate the car. Closures for these functions come defined with the car itself and they <em>close over</em> variables they need to operate.</p><p>Let’s narrow this analogy to the <code>accelerate</code> function. The function definition happens when the car is manufactured:</p><pre><code class="language-js">function accelerate(force) {
// Is the car started?
// Do we have fuel?
// Are we in traction control mode?
// Many other checks...
// If all good, burn more fuel depending on
// the force variable (how hard we’re pressing the gas pedal)
console.log("hello");
};
var func = sayHello;</code></pre><p>You are assigning the variable <code>func</code> a reference to the function <code>sayHello</code><em>, not</em> a copy. Here, <code>func</code> is simply an alias to <code>sayHello</code>. Anything you do on the alias you will actually be doing on the original function. For example:</p><pre><code class="language-js">func.answer = 42;
console.log(sayHello.answer); // prints 42</code></pre><p>The property <code>answer</code> was set directly on <code>func</code><em> </em>and read using <code>sayHello</code>, which works.</p><p>You can also execute <code>sayHello</code> by executing the <code>func</code> alias:</p><pre><code>func() // prints "hello"</code></pre><h3 id="2-scopes-have-a-lifetime">2 — Scopes have a lifetime</h3><p>When you call a function, you create a scope during the execution of that function. Then that scope goes away.</p><p>When you call the function a second time, you create a new different scope during the second execution. Then this second scope goes away as well.</p><pre><code class="language-js">function printA() {
console.log(answer);
var answer = 1;
};
// Define a function and create a closure
function functionA() {
var A = 'A'
// Define a function and create a closure
function functionB() {
var B = 'B'
console.log(A, B, G);
}
functionB();  // prints A, B, G
A = 42;
functionB();  // prints 42, B, G
}
functionA();</code></pre><p>When we define <code>functionB</code> here, its created closure will allow us to access the scope of <code>functionB</code> plus the scope of <code>functionA</code> plus the global scope.</p><p>Every time we execute <code>functionB</code>, we can access variables <code>B</code>, <code>A</code>, and <code>G</code><em> </em>through its previously created closure. However, that closure does not give us a copy of these variables but rather a reference to them. So if, for example, the value of the variable <code>A</code> gets changed at some point after the closure of <code>functionB</code> is created, when we execute <code>functionB</code> after that, we’ll see the new value, not the old one. The second call to <code>functionB</code> prints <code>42, B, G</code><em> </em>because the value of variable <code>A</code> was changed to 42 and the closure gave us a reference to <code>A</code>, not a copy.</p><h4 id="don-t-confuse-closures-with-scopes">Don’t confuse closures with scopes</h4><p>It’s common for closures to be confused with scopes, so let’s make sure not to do that.</p><pre><code class="language-js">// scope: global
var a = 1;
void function one() {
// scope: one
// closure: [one, global]
var b = 2;
void function two() {
// scope: two
// closure: [two, one, global]
var c = 3;
void function three() {
// scope: three
// closure: [three, two, one, global]
var d = 4;
console.log(a + b + c + d); // prints 10
}();
}();
}();</code></pre><p>In the simple example above, we have three functions and they all get defined and immediately invoked, so they all create scopes and closures.</p><p>The scope of function <code>one()</code> is its body. Its closure gives us access to both its scope and the global scope.</p><p>The scope of function <code>two()</code> is its body. Its closure gives us access to its scope plus the scope of function <code>one()</code>plus the global scope</p><p>And similarly, the closure of function <code>three()</code> gives us access to all scopes in the example. This is why we were able to access all variables in function <code>three()</code>.</p><p>But the relation between scopes and closures is not always simple like this. Things become different when the defining and invoking of functions happen in different scopes. Let me explain that with an example:</p><pre><code class="language-js">var v = 1;
var f1 = function () {
console.log(v);
}
var f2 = function() {
var v = 2;
f1(); // Will this print 1 or 2?
};
f2();</code></pre><p>What do you think the above example will print? The code is simple, <code>f1()</code> prints the value of <code>v</code>, which is 1 on the global scope, but we execute <code>f1()</code> inside of <code>f2()</code>, which has a different <code>v</code> that’s equal to 2. Then we execute <code>f2()</code>.</p><p><em>Will this code print 1 or 2?</em></p><p>If you’re tempted to say 2, you’ll be surprised. This code will actually print 1. The reason is, scopes and closures are different. The <code>console.log</code> line will use the closure of <code>f1()</code>, which is created when we define <code>f1()</code>, which means the closure of <code>f1()</code> gives us access to only the scope of <code>f1()</code> plus the global scope. The scope where we execute <code>f1()</code> does not affect that closure. In fact, the closure of <code>f1()</code> will not give us access to the scope of <code>f2()</code> at all. If you remove the global <code>v</code> variable and execute this code, you’ll get a reference error:</p><pre><code class="language-js">var f1 = function () {
console.log(v);
}
var f2 = function() {
var v = 2;
f1(); // ReferenceError: v is not defined
};
f2();</code></pre><p>This is very important to understand and remember.</p><h3 id="4-closures-have-read-and-write-access">4 — Closures have read and write access</h3><p>Since closures give us references to variables in scopes, the access that they give us means both read and write, not just read.</p><p>Take a look at this example:</p><pre><code class="language-js">function outer() {
let a = 42;
function inner() {
a = 43;
}
inner();
console.log(a);
}
outer();</code></pre><p>The <code>inner()</code> function here, when defined, creates a closure that gives us access to the variable <code>a</code>. We can read and modify that variable, and if we do modify it, we will be modifying the actual <code>a</code> variable in the <code>outer()</code> scope.</p><p>This code will print <em>43</em> because we used the <code>inner()</code> function closure to modify the <code>outer()</code> function variable.</p><p>This is actually why we can change global variables everywhere. All closures give us both read and write access to all global variables.</p><h3 id="5-closures-can-share-scopes">5 — Closures can share scopes</h3><p>Since closures give us access to nested scopes at the time we define functions, when we define multiple functions in the same scope, that scope is shared among all created closures, and of course, because of this, the global scope is always shared among all closures.</p><pre><code class="language-js">function parent() {
let a = 10;
function double() {
a = a+a;
console.log(a);
};
function square() {
a = a*a;
console.log(a);
}
return { double, square }
}
let { double, square } = parent();
double(); // prints 20
square(); // prints 400
double(); // prints 800</code></pre><p>In the example above, we have a <code>parent()</code> function with variable <code>a</code> set to 10. We define two functions in this <code>parent()</code> function’s scope, <code>double()</code> and <code>square()</code>. The closures created for <code>double()</code> and <code>square()</code> both share the scope of the <code>parent()</code><em> function</em>. Since both <code>double()</code> and <code>square()</code> change the value of <code>a</code>, when we execute the last 3 lines, we double <code>a</code> (making <code>a</code> = 20), then square that doubled value (making <code>a</code> = 400), then double that squared value (making <code>a</code> = 800).</p><h3 id="one-final-test">One final test</h3><p>Let’s now check your understanding of closures so far. Before you execute the following code, try to guess what it will print:</p><pre><code class="language-js">let a = 1;
const function1 = function() {
console.log(a);
a = 2
}
a = 3;
const function2 = function() {
console.log(a);
}
function1();
function2();</code></pre><p>I hope you got that right and I hope these simple concepts will help you to truly understand the significant role function closures play in JavaScript.</p><p>Thanks for reading.</p><p>Learning React or Node? Checkout my books:</p><ul><li><a href="http://amzn.to/2peYJZj" rel="noopener">Learn React.js by Building Games</a></li><li><a href="http://amzn.to/2FYfYru" rel="noopener">Node.js Beyond the Basics</a></li></ul>
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
