---
card: "https://cdn-media-1.freecodecamp.org/images/1*4YCJhT2ZeEMP7YxQbgVCyg.jpeg"
tags: [JavaScript]
description: "Scope defines the lifetime and visibility of a variable. Vari"
author: "Milad E. Fahmy"
title: "An introduction to scope in JavaScript"
created: "2021-08-16T11:31:07+02:00"
modified: "2021-08-16T11:31:07+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-front-end-development tag-technology tag-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">An introduction to scope in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*4YCJhT2ZeEMP7YxQbgVCyg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*4YCJhT2ZeEMP7YxQbgVCyg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*4YCJhT2ZeEMP7YxQbgVCyg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*4YCJhT2ZeEMP7YxQbgVCyg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*4YCJhT2ZeEMP7YxQbgVCyg.jpeg" alt="An introduction to scope in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Scope defines the lifetime and visibility of a variable. Variables are not visible outside the scope in which they are declared.</p><p>JavaScript has module scope, function scope, block scope, lexical scope and global scope.</p><h3 id="global-scope">Global Scope</h3><p>Variables defined outside any function, block, or module scope have global scope. Variables in global scope can be accessed from everywhere in the application.</p><p>When a module system is enabled it’s harder to make global variables, but one can still do it. By defining a variable in HTML, outside any function, a global variable can be created:</p><pre><code>&lt;script&gt;
let GLOBAL_DATA = { value : 1};
&lt;/script&gt;
console.log(GLOBAL_DATA);</code></pre><p>When there is no module system in place, it is a lot easier to create global variables. A variable declared outside any function, in any file, is a global variable.</p><p>Global variables are available for the lifetime of the application.</p><p>Another way for creating a global variable is to use the <code>window</code> global object anywhere in the application:</p><pre><code>window.GLOBAL_DATA = { value: 1 };</code></pre><p>At this point, the <code>GLOBAL_DATA</code> variable is visible everywhere.</p><pre><code>console.log(GLOBAL_DATA)</code></pre><p>As you can imagine these practices are bad practices.</p><h3 id="module-scope">Module scope</h3><p>Before modules, a variable declared outside any function was a global variable. In modules, a variable declared outside any function is hidden and not available to other modules unless it is explicitly exported.</p><p>Exporting makes a function or object available to other modules. In the next example, I export a function from the <code>sequence.js</code> module file:</p><pre><code>// in sequence.js
export { sequence, toList, take };</code></pre><p>Importing makes a function or object, from other modules, available to the current module.</p><pre><code>import { sequence, toList, toList } from "./sequence";</code></pre><p>In a way, we can imagine a module as a self-executing function that takes the import data as inputs and returns the export data.</p><h3 id="function-scope">Function Scope</h3><p>Function scope means that parameters and variables defined in a function are visible everywhere within the function, but are not visible outside of the function.</p><p>Consider the next function that auto-executes, called IIFE.</p><pre><code>(function autoexecute() {
let x = 1;
})();
console.log(x);
//Uncaught ReferenceError: x is not defined</code></pre><p>IIFE stands for Immediately Invoked Function Expression and is a function that runs immediately after its definition.</p><p>Variables declared with <code>var</code> have only function scope. Even more, variables declared with <code>var</code> are hoisted to the top of their scope. This way they can be accessed before being declared. Take a look at the code below:</p><pre><code>function doSomething(){
console.log(x);
var x = 1;
}
doSomething(); //undefined</code></pre><p>This does not happen for <code>let</code>. A variable declared with <code>let</code> can be accessed only after its definition.</p><pre><code>function doSomething(){
console.log(x);
let x = 1;
}
doSomething();
//Uncaught ReferenceError: x is not defined</code></pre><p>A variable declared with <code>var</code> can be re-declared multiple times in the same scope. The following code is just fine:</p><pre><code>function doSomething(){
var x = 1
var x = 2;
console.log(x);
}
doSomething();</code></pre><p>Variables declared with <code>let</code> or <code>const</code> cannot be re-declared in the same scope:</p><pre><code>function doSomething(){
let x = 1
let x = 2;
}
//Uncaught SyntaxError: Identifier 'x' has already been declared</code></pre><p>Maybe we don’t even have to care about this, as <code>var</code> has started to become obsolete.</p><h3 id="block-scope">Block Scope</h3><p>Block scope is defined with curly braces. It is separated by <code>{</code> and <code>}</code>.</p><p>Variables declared with <code>let</code> and <code>const</code> can have block scope. They can only be accessed in the block in which they are defined.</p><p>Consider the next code that emphasizes <code>let</code> block scope:</p><pre><code>let x = 1;
{
let x = 2;
}
console.log(x); //1</code></pre><p>In contrast, the <code>var</code> declaration has no block scope:</p><pre><code>var x = 1;
{
var x = 2;
}
console.log(x); //2</code></pre><p>Another common problem with not having block scope is the use of an asynchronous operation like <code>setTimeout()</code> in a loop. The flowing loop code displays the number 5, five times.</p><pre><code>(function run(){
for(var i=0; i&lt;5; i++){
setTimeout(function logValue(){
console.log(i);         //5
}, 100);
}
})();</code></pre><p>The <code>for</code> loop statement, with the <code>let</code> declaration, creates a new variable locale to the block scope, for each iteration. The next loop code shows <code>0 1 2 3 4 5</code>.</p><pre><code>(function run(){
for(let i=0; i&lt;5; i++){
setTimeout(function log(){
console.log(i); //0 1 2 3 4
}, 100);
}
})();</code></pre><h3 id="lexical-scope">Lexical Scope</h3><p>Lexical scope is the ability of the inner function to access the outer scope in which it is defined.</p><p><a href="https://jsfiddle.net/cristi_salcescu/pcg6fab7/" rel="noopener">Consider the next code</a>:</p><pre><code>(function autorun(){
let x = 1;
function log(){
console.log(x);
};
function run(fn){
let x = 100;
fn();
}
run(log);//1
})();</code></pre><p>The <code>log</code> function is a closure. It refers the <code>x</code> variable from its parent function <code>autorun()</code>, not the one from the <code>run()</code> function.</p><p>The closure function has access to the scope in which it was created, not the scope in which it was executed.</p><p>The local function scope of <code>autorun()</code> is the lexical scope of the <code>log()</code> function.</p><h3 id="scope-chain">Scope chain</h3><p>Every scope has a link to the parent scope. When a variable is used, JavaScript looks down the scope chain until it either finds the requested variable or until it reaches the global scope, which is the end of the scope chain.</p><p><a href="https://jsfiddle.net/cristi_salcescu/udq46asp/" rel="noopener">Look at the next example</a>:</p><pre><code>let x0 = 0;
(function autorun1(){
let x1 = 1;
(function autorun2(){
let x2 = 2;
(function autorun3(){
let x3 = 3;
console.log(x0 + " " + x1 + " " + x2 + " " + x3);//0 1 2 3
})();
})();
})();</code></pre><p>The <code>autorun3()</code> inner function has access to the local <code>x3</code> variable. It has also access to the <code>x1</code> and <code>x2</code> variables from the outer functions and the <code>x0</code> global variable.</p><p>If it cannot find the variable, it will return an error in strict mode.</p><pre><code>"use strict";
x = 1;
console.log(x)
//Uncaught ReferenceError: x is not defined</code></pre><p>In non-strict mode, referred to as “sloppy mode”, it will do a bad thing and create a global variable.</p><pre><code>x = 1;
console.log(x); //1</code></pre><h3 id="conclusion">Conclusion</h3><p>Variables defined in global scope are available everywhere in the application.</p><p>In a module, a variable declared outside any function is hidden and not available to other modules unless it is explicitly exported.</p><p>Function scope means that parameters and variables defined in a function are visible everywhere within the function</p><p>Variables declared with <code>let</code> and <code>const</code> have block scope. <code>var</code> doesn’t have block scope.</p><p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE&amp;source=post_page---------------------------"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the<strong><strong> </strong></strong><a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781&amp;source=post_page---------------------------"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><p><strong><strong>For more on applying functional programming techniques in React take a look at</strong></strong> <a href="https://read.amazon.com/kp/embed?asin=B07S1NLFTS&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_Pko5CbA30383Y" rel="noopener nofollow"><strong><strong>Functional React</strong></strong></a><strong><strong>.</strong></strong></p><p>Learn <strong><strong>functional React</strong></strong>, in a project-based way, with <a href="https://read.amazon.com/kp/embed?asin=B0846NRJYR&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_o.hlEbDD02JB2" rel="noopener nofollow"><strong><strong>Functional Architecture with React and Redux</strong></strong></a><strong><strong>.</strong></strong></p><p><a href="https://twitter.com/cristi_salcescu" rel="noopener nofollow nofollow noopener nofollow noopener nofollow noopener">Follow on Twitter</a></p>
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
