---
card: "https://cdn-media-1.freecodecamp.org/images/1*DxjfBur9XKUWgSgceIv11Q.jpeg"
tags: [Functional Programming]
description: "Hey everybody! I’ve written a book called Discover Functional"
author: "Milad E. Fahmy"
title: "An introduction to Functional JavaScript"
created: "2021-08-16T11:29:17+02:00"
modified: "2021-08-16T11:29:17+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-functional-programming tag-javascript tag-books tag-technology tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">An introduction to Functional JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*DxjfBur9XKUWgSgceIv11Q.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*DxjfBur9XKUWgSgceIv11Q.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*DxjfBur9XKUWgSgceIv11Q.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*DxjfBur9XKUWgSgceIv11Q.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*DxjfBur9XKUWgSgceIv11Q.jpeg" alt="An introduction to Functional JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Hey everybody! I’ve written a book called <a href="https://www.amazon.com/dp/B07PBQJYYG" rel="noopener">Discover Functional JavaScript</a>, and it’s now ready in both paperback and Kindle formats.</p><p>After publishing several articles on Functional Programming in JavaScript, at some point I realized I have enough material to think about a book. So, I started from my previous writings, filled in the missing parts and created a book on Functional Programming in JavaScript.</p><p>What I tried to do in this book was to give practical examples of the core functional concepts. I think that if we master the fundamentals then it will be easier to handle more complex situations. And this is what this book is for.</p><p>I looked into a deeper understanding of pure functions other than that they are great. If they are so good, why don’t we write the whole application using only pure functions?</p><p>The other reason behind the book is to emphasize the new way of building encapsulated objects without classes and prototypes in JavaScript. I even saw classes presented as a way to bring encapsulation to objects. Encapsulation means hiding information. Objects built with classes in JavaScript are built over the prototype system. All their properties are public, they are not encapsulated.</p><p>I tried and hope I have succeeded to present the fundamental functional programming concepts in an easy to learn and practical manner. After reading the book you will understand better concepts like first-class functions, closures, currying, and partial application. You will understand what pure functions are and how to create them. You will better understand immutability and how it can be achieved in JavaScript.</p><p>Another thing not taken so much into account is naming. With the rise of arrow functions, more and more anonymous functions are created. The pretext behind all this is the fact that arrow functions have no <code>this</code> and have a shorter syntax. I don’t challenge that, I just challenge the fact that meaningful names are what we understand best. Removing that will make code harder to understand.</p><p>The book is pretty condensed, so you can even read it a few times. In regard to the core JavaScript concepts, it aims to make an overview of them, not to enter into great detail. There are a lot of resources for that.</p><p>For me, it was a great experience trying to organize my thoughts to express these ideas in a simple, practical way. I tried to focus on the main practical concepts and just eliminate everything that ads no value to the reader.</p><p>A deeper understanding of the fundamental concepts in JavaScript makes us better at resolving complex problems. I hope you will like it.</p><p>Here is what you can find inside:</p><h4 id="chapter-1-a-brief-overview-of-javascript">Chapter 1: A brief overview of JavaScript</h4><p>JavaScript has primitives, objects and functions. All of them are values. All are treated as objects, even primitives.</p><p>Number, boolean, string, <code>undefined</code> and <code>null</code> are primitives.</p><p>Variables can be defined using <code>var</code>, <code>let</code> and <code>const</code>. The <code>let</code> declaration has a block scope.</p><p>Primitives, except <code>null</code> and <code>undefined</code>, are treated like objects, in the sense that they have methods but they are not objects.</p><p>Arrays are indexed collections of values. Each value is an element. Elements are ordered and accessed by their index number.</p><p>JavaScript has dynamic typing. Values have types, variables do not. Types can change at run time.</p><p>The main JavaScript runtime is single threaded. Two functions can’t run at the same time.</p><h4 id="chapter-2-new-features-in-es6-">Chapter 2: New features in ES6+</h4><p>ES6 brings more features to the JavaScript language. Some new syntax allows you to write code in a more expressive way, some features complete the functional programming toolbox, and some features are questionable.</p><p><code>let</code> declaration has block scope.</p><pre><code>function doTask(){
let x = 1;
{
let x = 2;
}
console.log(x);
}
doTask(); //1</code></pre><p><code>var</code> declaration has function scope. It doesn't have block scope.</p><pre><code>function doTask(){
var x = 1;
{
var x = 2;
}
console.log(x);
}
doTask(); //2</code></pre><h4 id="chapter-3-first-class-functions">Chapter 3: First-class functions</h4><p>Functions are first-class objects. Functions can be stored in variables, objects or arrays, passed as arguments to other functions or returned from functions.</p><p>A higher-order function is a function that takes another function as an input, returns a function, or does both.</p><p><code>map()</code> transforms a list of values to another list of values using a mapping function.</p><pre><code>let numbers = [1,2,3,4,5];
function doubleNo(x){
const result = x*2;
console.log(`${x} -&gt; ${result}`)
return result;
}
const doubleNumbers = numbers.map(doubleNo);
//1 -&gt; 2
//2 -&gt; 4
//3 -&gt; 6
//4 -&gt; 8
//5 -&gt; 10
let state = 0;
return function(){
state = state + 1;
return state;
}
})();
count(); //1
count(); //2
count(); //3</code></pre><h4 id="chapter-5-function-decorators">Chapter 5: Function decorators</h4><blockquote>A function decorator is a higher-order function that takes one function as an argument and returns another function, and the returned function is a variation of the argument function — Reginald Braithwaite, author of <a href="https://leanpub.com/javascript-allonge/read#decorators" rel="noopener">Javascript Allongé</a></blockquote><p>The <code>unary()</code> decorator returns a new version of the function that accepts only one argument. It may be used to fix problems when the function is called with more arguments than we need.</p><pre><code>function unary(fn){
return function(first){
return fn(first);
}
}
const numbers = ['1','2','3','4','5','6'];
numbers.map(parseInt);
//[1, NaN, NaN, NaN, NaN, NaN]
numbers.map(unary(parseInt));
return x * 2;
}
function add(a, b){
return a + b;
}
function multiply(a, b) {
return a * b;
return function(b){
return function(c){
return a + b + c;
}
}
}
add(1)(2)(3);
//6</code></pre><p>Does currying have a practical application? This chapter shows some practical examples of using partial application and currying.</p><h4 id="chapter-9-function-composition">Chapter 9: Function composition</h4><p>Function composition is applying one function to the result of another.</p><pre><code>function compose(...functions){
return function(x){
return functions.reduceRight((value, f) =&gt; f(value), x);
}
}
f(g(x)) === compose(f,g)(x);</code></pre><h4 id="chapter-10-intention-revealing-names">Chapter 10: Intention revealing names</h4><p>Functions can be created with or without a name. The arrow syntax usually creates anonymous functions.</p><pre><code>(() =&gt; {
/*code*/
(() =&gt; {
/*code*/
})();
})();</code></pre><p>Anonymous functions appear as “(anonymous)” in the CallStack.</p><p>Intention revealing names improve code readability.</p><h4 id="chapter-11-making-code-easier-to-read">Chapter 11: Making code easier to read</h4><p>This chapter shows examples of refactoring imperative code with functional programming techniques and looks at the readability of the final code.</p><h4 id="chapter-12-asynchronous-programming">Chapter 12: Asynchronous programming</h4><p>In an application, there are two kinds of functions: synchronous and asynchronous. We take a look at the asynchronous programming model in JavaScript.</p><h4 id="chapter-13-objects-with-prototypes">Chapter 13: Objects with prototypes</h4><p>Objects are dynamic collections of properties, with a “hidden” property to the object’s prototype.</p><p>Objects inherit from other objects.</p><p><code>class</code> is a sugar syntax from creating objects with a custom prototype.</p><pre><code>class Counter {
constructor(){
this.state = 0;
}
increment(){
this.state = this.state + 1;
return this.state;
}
decrement(){
this.state = this.state - 1;
return this.state;
}
}
const counter = new Counter();
counter.increment(); //1
counter.increment(); //2
counter.increment(); //3
counter.decrement(); //2</code></pre><h4 id="chapter-14-objects-with-closures">Chapter 14: Objects with closures</h4><p>With closures we can create encapsulated and flexible objects. Consider the same counter object created with closures:</p><pre><code>function Counter() {
let state = 0;
function increment(){
state = state + 1;
return state;
}
function decrement(){
state = state - 1;
return state;
}
return Object.freeze({
increment,
decrement
})
}
const counter = Counter();
counter.increment(); //1
counter.increment(); //2
counter.increment(); //3
counter.decrement(); //2</code></pre><p>This chapter presents more encapsulated objects and discusses the difference between objects built with closures and prototypes.</p><h4 id="chapter-15-method-decorators">Chapter 15: Method decorators</h4><p>Method decorators are a tool for reusing common logic.</p><h4 id="chapter-16-waiting-for-the-new-programming-paradigm">Chapter 16: Waiting for the new programming paradigm</h4><p>The last chapter contains thoughts on Functional and Object Oriented Programming in JavaScript.</p><p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_j0hTCbF0B1230" rel="noopener"><strong>Enjoy the book</strong></a><strong>!</strong></p><p>You can find me on <a href="https://twitter.com/cristi_salcescu" rel="noopener">Twitter</a>.</p>
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
