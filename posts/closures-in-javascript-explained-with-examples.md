---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9c82740569d1a4ca32a5.jpg"
tags: [Closure]
description: A closure is the combination of a function and the lexical en
author: "Milad E. Fahmy"
title: "Closures in JavaScript Explained with Examples"
created: "2021-08-15T19:30:39+02:00"
modified: "2021-08-15T19:30:39+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-closure tag-javascript tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">Closures in JavaScript Explained with Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c82740569d1a4ca32a5.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c82740569d1a4ca32a5.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c82740569d1a4ca32a5.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c82740569d1a4ca32a5.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c82740569d1a4ca32a5.jpg" alt="Closures in JavaScript Explained with Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h1 id="what-are-closures"><strong>What are Closures?</strong></h1>
<p>A closure is the combination of a function and the lexical environment (scope) within which that function was declared. Closures are a fundamental and powerful property of Javascript. This article discusses the ‘how’ and ‘why’ about Closures:</p>
<h3 id="example"><strong>Example</strong></h3><pre><code class="language-js">//we have an outer function named walk and an inner function named fly
function walk (){
var dist = '1780 feet';
function fly(){
console.log('At '+dist);
}
return fly;
}
var flyFunc = walk(); //calling walk returns the fly function which is being assigned to flyFunc
//you would expect that once the walk function above is run
//you would think that JavaScript has gotten rid of the 'dist' var
flyFunc(); //Logs out 'At 1780 feet'
//but you still can use the function as above
//this is the power of closures</code></pre>
<h3 id="another-example"><strong>Another Example</strong></h3><pre><code class="language-js">function by(propName) {
return function(a, b) {
return a[propName] - b[propName];
}
}
const person1 = {name: 'joe', height: 72};
const person2 = {name: 'rob', height: 70};
const person3 = {name: 'nicholas', height: 66};
const arr_ = [person1, person2, person3];
const arr_sorted = arr_.sort(by('height')); // [ { name: 'nicholas', height: 66 }, { name: 'rob', height: 70 },{ name: 'joe', height: 72 } ]</code></pre>
<p>The closure ‘remembers’ the environment in which it was created. This environment consists of any local variables that were in-scope at the time the closure was created.</p><pre><code class="language-js">function outside(num) {
var rememberedVar = num; // In this example, rememberedVar is the lexical environment that the closure 'remembers'
return function inside() { // This is the function which the closure 'remembers'
console.log(rememberedVar)
}
}
var remember1 = outside(7); // remember1 is now a closure which contains rememberedVar = 7 in its lexical environment, and //the function 'inside'
var remember2 = outside(9); // remember2 is now a closure which contains rememberedVar = 9 in its lexical environment, and //the function 'inside'
remember1(); // This now executes the function 'inside' which console.logs(rememberedVar) =&gt; 7
remember2(); // This now executes the function 'inside' which console.logs(rememberedVar) =&gt; 9 </code></pre>
<p>Closures are useful because they let you ‘remember’ data and then let you operate on that data through returned functions. This allows javascript to emulate private methods that are found in other programming languages. Private methods are useful for restricting access to code as well as managing your global namespace.</p>
<h2 id="private-variables-and-methods">Private variables and methods</h2>
<p>Closures can also be used to encapsulate private data/methods. Take a look at this example:</p><pre><code class="language-javascript">const bankAccount = (initialBalance) =&gt; {
const balance = initialBalance;
return {
getBalance: function() {
return balance;
},
deposit: function(amount) {
balance += amount;
return balance;
},
};
};
const account = bankAccount(100);
account.getBalance(); // 100
account.deposit(10); // 110</code></pre>
<p>In this example, we won’t be able to access <code>balance</code> from anywhere outside of the <code>bankAccount</code> function, which means we’ve just created a private variable. Where’s the closure? Well, think about what <code>bankAccount()</code> is returning. It actually returns an Object with a bunch of functions inside it, and yet when we call <code>account.getBalance()</code>, the function is able to “remember” its initial reference to <code>balance</code>. That is the power of the closure, where a function “remembers” its lexical scope (compile time scope), even when the function is executed outside that lexical scope.</p>
<h3 id="emulating-block-scoped-variables-">Emulating block-scoped variables.</h3>
<p>Javascript did not have a concept of block-scoped variables. Meaning that when defining a variable inside a forloop for example, this variable is visible from outside the forloop as well. So how can closures help us solve this problem ? Let’s take a look.</p><pre><code class="language-javascript">    var funcs = [];
for(var i = 0; i &lt; 3; i++){
funcs[i] = function(){
console.log('My value is ' + i);  //creating three different functions with different param values.
}
}
for(var j = 0; j &lt; 3; j++){
funcs[j]();             // My value is 3
// My value is 3
// My value is 3
}</code></pre>
<p>Since the variable i does not have block-scope, it’s value within all three functions was updated with the loop counter and created malicious values. Closure can help us solve this issue by creating a snapshot of the environment the function was in when it was created, preserving its state.</p><pre><code class="language-javascript">    var funcs = [];
var createFunction = function(val){
return function() {console.log("My value: " + val);};
}
for (var i = 0; i &lt; 3; i++) {
funcs[i] = createFunction(i);
}
for (var j = 0; j &lt; 3; j++) {
funcs[j]();                 // My value is 0
// My value is 1
// My value is 2
}</code></pre>
<p>The late versions of javascript es6+ have a new keyword called let which can be used to give the variable a blockscope. There are also many functions (forEach) and entire libraries (lodash.js) that are dedicated to solve such problems as the ones explained above. They can certainly boost your productivity, however it remains extremely important to have knowledge of all these issues when attempting to create something big.</p>
<p>Closures have many special applications that are useful when creating large javascript programs.</p>
<ol>
<li>Emulating private variables or encapsulation</li>
<li>Making Asynchronous server side calls</li>
<li>Creating a block-scoped variable.</li>
</ol>
<h3 id="emulating-private-variables-">Emulating private variables.</h3>
<p>Unlike many other languages, Javascript does not have a mechanism which allows you to create encapsulated instance variables within an object. Having public instance variables can cause a lot of problems when building medium to large programs. However with closures, this problem can be mitigated.</p>
<p>Much like in the previous example, you can build functions which return object literals with methods that have access to the object’s local variables without exposing them. Thus, making them effectively private.</p>
<p>Closures can also help you manage your global namespace to avoid collisions with globally shared data. Usually all global variables are shared between all scripts in your project, which will definitely give you alot of trouble when building medium to large programs. That is why library and module authors use closures to hide an entire module’s methods and data. This is called the module pattern, it uses an immediately invoked function expression which exports only certain functionality to the outside world, significantly reducing the amount of global references.</p>
<p>Here’s a short sample of a module skeleton.</p><pre><code class="language-javascript">var myModule = (function() = {
let privateVariable = 'I am a private variable';
let method1 = function(){ console.log('I am method 1'); };
let method2 = function(){ console.log('I am method 2, ', privateVariable); };
return {
method1: method1,
method2: method2
}
}());
myModule.method1(); // I am method 1
myModule.method2(); // I am method 2, I am a private variable</code></pre>
<p>Closures are useful for capturing new instances of private variables contained in the ‘remembered’ environment, and those variables can only be accessed through the returned function or methods.</p>
<h2 id="vectors">Vectors</h2>
<p>A vector is perhaps the most simple type of collection in Clojure. You can think of it like an array in Javascript. Let’s define a simple vector:</p><pre><code class="language-text">(def a-vector [1 2 3 4 5])
;; Alternatively, use the vector function:
(def another-vector (vector 1 2 3 4 5))
;; You can use commas to separate items, since Clojure treats them as whitespace.
(def comma-vector [1, 2, 3, 4, 5])</code></pre>
<p>You’ll see that it uses square brackets, just like an array in JS. Since Clojure, like JS, is dynamically typed, vectors can hold elements of any type, including other vectors.</p><pre><code class="language-text">(def mixed-type-vector [1 "foo" :bar ["spam" 22] #"^baz$"])</code></pre>
<h3 id="adding-items-to-a-vector">Adding items to a vector</h3>
<p>You can append items to a vector using <code>conj</code>. You can also prepend to a list using <code>into</code>, but note that <code>into</code> is intended for merging two vectors, so both its arguments must be vectors, and using <code>into</code> is slower than using <code>conj</code>.</p><pre><code class="language-text">(time (conj [1 2] 3))
; =&gt; "Elapsed time: 0.032206 msecs"
;    [1 2 3]
(time (into [1] [2 3]))
; =&gt; "Elapsed time: 0.078499 msecs"
;    [1 2 3]</code></pre>
<p><a href="https://ideone.com/wBSUEd" rel="nofollow">IDEOne it!</a></p>
<h3 id="retrieving-items-from-a-vector">Retrieving items from a vector</h3>
<p>You can retrieve items from a vector using <code>get</code>. This is equivalent to using bracket notation to access items in an array in many imperative languages. Items in a vector are 0-indexed, counting from the left.</p><pre><code class="language-text">var arr = [1, 2, 3, 4, 5];
arr[0];
// =&gt; 1</code></pre>
<p>In Clojure, this would be written like so:</p><pre><code class="language-text">(def a-vector [1 2 3 4 5])
(get a-vector 0)
; =&gt; 1</code></pre>
<p>You can also give <code>get</code> a default value, if you give it an index that isn’t in the array.</p><pre><code class="language-text">;; the list doesn't have 2147483647 elements, so it'll return a string instead.
(get a-vector 2147483646 "sorry, not found!")
; =&gt; "sorry, not found!"</code></pre>
<h3 id="converting-other-collections-into-vectors">Converting other collections into vectors</h3>
<p>Non-vector data structures can be converted into vectors using the <code>vec</code> function. With hashmaps, this produces a 2D vector containing pairs of keys and values.</p><pre><code class="language-text">(vec '(1 2 3 4 5))
; =&gt; [1 2 3 4 5]
(vec {:jack "black" :barry "white"})
; =&gt; [[:jack "black"] [:barry "white"]]</code></pre>
<h3 id="when-to-use-a-vector">When to use a vector?</h3>
<p>A vector should be used in almost all cases if you need a collection, because they have the shortest random-access times, which makes it easy to retrieve items from a vector. Note that vectors are ordered. If order doesn’t matter, it may be better to use a set. Also note that vectors are designed for appending items; if you need to prepend items, you might want to use a list.</p>
<h2 id="more-info-on-closures-">More info on Closures:</h2>
<ul>
<li><a href="/news/learn-javascript-closures-in-n-minutes/">Learn JavaScript closures in six minutes</a></li>
<li><a href="/news/a-basic-guide-to-closures-in-javascript-9fc8b7e3463e/">A basic guide to closures in JavaScript</a></li>
<li><a href="/news/closures-vuejs-higher-order-functions-emojipicker-f10d3c249a12/">Discover the power of closures in VueJS</a></li>
<li><a href="/news/javascript-closures-explained-by-mailing-a-package-4f23e9885039/">JavaScript closures explained by mailing a package</a></li>
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
