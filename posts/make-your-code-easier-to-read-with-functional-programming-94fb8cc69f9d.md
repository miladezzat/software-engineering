---
card: "https://cdn-media-1.freecodecamp.org/images/1*uFGSHrjaQSpCC6_rTKT3Lg.jpeg"
tags: [Tech]
description: "Discover Functional JavaScript was named one of the best new "
author: "Milad E. Fahmy"
title: "Make your code easier to read with Functional Programming"
created: "2021-08-16T11:45:57+02:00"
modified: "2021-08-16T11:45:57+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-tech tag-functional-programming tag-web-development tag-technology tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">Make your code easier to read with Functional Programming</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*uFGSHrjaQSpCC6_rTKT3Lg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*uFGSHrjaQSpCC6_rTKT3Lg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*uFGSHrjaQSpCC6_rTKT3Lg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*uFGSHrjaQSpCC6_rTKT3Lg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*uFGSHrjaQSpCC6_rTKT3Lg.jpeg" alt="Make your code easier to read with Functional Programming">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE" rel="nofollow noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener nofollow noopener nofollow noopener"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the <a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781" rel="noopener nofollow nofollow noopener"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><p>Pure functions are easier to read and understand. All the function’s dependencies are in its definition and are therefore easier to see. Pure functions also tend to be small and do one thing. They don’t use <code>this</code>, a constant source of confusion.</p><h3 id="chaining">Chaining</h3><blockquote><strong>Chaining </strong>is a technique used to simplify code where multiple methods are applied to an object one after another.</blockquote><p><a href="https://jsfiddle.net/cristi_salcescu/5va5dkq7/" rel="noopener">Let’s look and compare</a> the two styles: imperative and functional. In the functional style, I use the basic toolbox for list operations <code>filter()</code> and <code>map()</code> . Then I chain them together.</p><p>I took the case of a collection of tasks. A task has an <code>id</code>, a description (<code>desc</code>) a boolean <code>completed</code>, a <code>type</code> and an assigned <code>user</code> object. The user object has a <code>name</code> property.</p><pre><code>//Imperative style
let filteredTasks = [];
for(let i=0; i&lt;tasks.length; i++){
let task = tasks[i];
if (task.type === "RE" &amp;&amp; !task.completed) {
filteredTasks.push({ ...task, userName: task.user.name });
}
}
//Functional style
function isPriorityTask(task){
return task.type === "RE" &amp;&amp; !task.completed;
}
function toTaskView(task) {
return { ...task, userName: task.user.name };
}
let filteredTasks = tasks.filter(isPriorityTask).map(toTaskView);</code></pre><p>Notice the callbacks for <code>filter()</code> and <code>map()</code> as <strong>pure functions with intention revealing names.</strong></p><blockquote><code><em>map()</em></code> transforms a list of values to another list of values using a mapping function.</blockquote><p>Here is a <a href="https://jsperf.com/make-code-easier-to-read-imperative-vs-functional" rel="noopener">performance test</a> measuring the difference between the two styles. It seems that the functional approach is 60% slower. When the imperative process finishes in 10 milliseconds, the functional approach will finish in 16 milliseconds. <a href="https://jsfiddle.net/cristi_salcescu/v5jegr61/" rel="noopener">In that case</a> using the imperative loop will be a premature optimization.</p><h3 id="point-free-style">Point-free style</h3><p>In the previous example, I have used the point-free style when composing functions. Point-free is a technique that improves readability by eliminating the unnecessary arguments. Consider the next code:</p><pre><code>tasks.filter(task =&gt; isPriorityTask(task)).map(task =&gt; toTaskView(task));</code></pre><p>In a point-free style it is written without arguments:</p><pre><code>tasks.filter(isPriorityTask).map(toTaskView);</code></pre><p>For more on point-free look at <a href="https://medium.freecodecamp.org/how-point-free-composition-will-make-you-a-better-functional-programmer-33dcb910303a" rel="noopener">How point-free composition will make you a better functional programmer</a></p><h3 id="partial-application">Partial Application</h3><p>Next, I want to look into how we can improve readability and also reuse an existing function. Before doing that, we need a new function in our toolbox.</p><blockquote><strong>Partial application </strong>refers to the process of fixing a number of arguments to a function.</blockquote><blockquote>It’s a way to go from generalization to specialization.</blockquote><p>For partial application we can use the <code>partial()</code> function from a popular library like <a href="http://underscorejs.org/#partial" rel="noopener">underscore.js </a>or <a href="https://lodash.com/docs/4.17.5#partial" rel="noopener">lodash.js</a>. The <code>bind()</code> method can also do partial application.</p><p>Let’s say we want to refactor <a href="https://jsfiddle.net/cristi_salcescu/9p0ffasn/" rel="noopener">the following imperative code</a> to a functional, easier to read, style:</p><pre><code>let filteredTasks = [];
for(let i=0; i&lt;tasks.length; i++){
let task = tasks[i];
if (task.type === "NC") {
filteredTasks.push(task);
}
}</code></pre><p>As I said, this time we want to create a generic function that can be used for filtering by any task type. <code>isTaskOfType()</code> is the generic function. The <code>partial()</code> function is used to create a new predicate function <code>isCreateNewContent()</code> that filters by a specific type.</p><blockquote><strong>A predicate function </strong>is a function that takes one value as input and returns true/false based on whether the value satisfies the condition.</blockquote><pre><code>function isTaskOfType(type, task){
return task.type === type;
}
let isCreateNewContent = partial(isTaskOfType, "NC");
let filteredTasks = tasks.filter(isCreateNewContent);</code></pre><p>Notice the predicate function. It has a name expressing its intention. When I’m reading <code>tasks.filter(isCreateNewContent)</code> I clearly understand what kind of <code>tasks</code> I’m selecting.</p><blockquote><code>filter()</code><strong> </strong>selects values from a list based on a predicate function that decides what values should be kept.</blockquote><h3 id="reduce-function reduce() { [native code] }1">Reduce</h3><p><a href="https://jsfiddle.net/cristi_salcescu/zo9zkrcc/" rel="noopener">I will start a new example</a> using a shopping list. Here is how the list may look like:</p><pre><code>let shoppingList = [
{ name : "orange", units : 2, price : 10, type : "FRT"},
{ name : "lemon", units : 1, price : 15, type : "FRT"},
{ name : "fish", units : 0.5, price : 30, type : "MET"}
];</code></pre><p>I will compute the total price and the price for fruits only. Below is the imperative style:</p><pre><code>let totalPrice = 0, fruitsPrice = 0;
for(let i=0; i&lt;shoppingList.length; i++){
let line = shoppingList[i];
totalPrice += line.units * line.price;
if (line.type === "FRT") {
fruitsPrice += line.units * line.price;
}
}</code></pre><p>Taking the functional approach in this case will require the use of <code>reduce()</code> to compute the total price.</p><blockquote><code>reduce()</code><em> </em>reduces a list of values to one value.</blockquote><p>As we did before, we create new functions for the required callbacks and give them intention revealing names : <code>addPrice()</code> and <code>areFruits()</code>.</p><pre><code>function addPrice(totalPrice, line){
return totalPrice + (line.units * line.price);
}
function areFruits(line){
return line.type === "FRT";
}
let totalPrice = shoppingList.reduce(addPrice,0);
let fruitsPrice = shoppingList.filter(areFruits).reduce(addPrice,0);</code></pre><h3 id="conclusion">Conclusion</h3><p>Pure functions are easier to read and reason about.</p><p>Functional Programming will break list operations in steps like: filter, map, reduce, sort. At the same time, it will require to define new pure small functions to support those operations.</p><p>Combining Functional Programming with the practice of giving intention revealing names greatly improves the readability of the code.</p><p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE&amp;source=post_page---------------------------"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the<strong><strong> </strong></strong><a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781&amp;source=post_page---------------------------"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><p><strong><strong>For more on applying functional programming techniques in React take a look at</strong></strong> <a href="https://read.amazon.com/kp/embed?asin=B07S1NLFTS&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_Pko5CbA30383Y" rel="noopener nofollow"><strong><strong>Functional React</strong></strong></a><strong><strong>.</strong></strong></p><p>Learn <strong><strong>functional React</strong></strong>, in a project-based way, with <a href="https://read.amazon.com/kp/embed?asin=B0846NRJYR&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_o.hlEbDD02JB2" rel="noopener nofollow"><strong><strong>Functional Architecture with React and Redux</strong></strong></a><strong><strong>.</strong></strong></p><p><a href="https://twitter.com/cristi_salcescu" rel="noopener nofollow nofollow noopener nofollow noopener nofollow noopener">Follow on Twitter</a></p>
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
