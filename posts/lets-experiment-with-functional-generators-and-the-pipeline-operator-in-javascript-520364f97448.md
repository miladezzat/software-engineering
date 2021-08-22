---
card: "https://cdn-media-1.freecodecamp.org/images/1*RJoQmQ7L6UZKQ14lYCN6EA.jpeg"
tags: [JavaScript]
description: "Discover Functional JavaScript was named one of the best new "
author: "Milad E. Fahmy"
title: "Let’s experiment with functional generators and the pipeline operator in JavaScript"
created: "2021-08-16T11:33:44+02:00"
modified: "2021-08-16T11:33:44+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-technology tag-functional-programming tag-learning tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Let’s experiment with functional generators and the pipeline operator in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*RJoQmQ7L6UZKQ14lYCN6EA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*RJoQmQ7L6UZKQ14lYCN6EA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*RJoQmQ7L6UZKQ14lYCN6EA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*RJoQmQ7L6UZKQ14lYCN6EA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*RJoQmQ7L6UZKQ14lYCN6EA.jpeg" alt="Let’s experiment with functional generators and the pipeline operator in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE" rel="nofollow noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener nofollow noopener nofollow noopener"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the <a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781" rel="noopener nofollow nofollow noopener"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><blockquote><em>A generator is a function that returns the next value from the sequence each time it is called.</em></blockquote><p>Combining functional generators with the pipeline operator and pure functions with intention revealing names, allows to write code in a more expressive manner, without creating intermediary lists:</p><pre><code class="language-js">import { sequence, filter, map, take, toList } from "./sequence";
const filteredTodos =
sequence(todos)
|&gt; filter(isPriorityTodo)
|&gt; map(toTodoView)
|&gt; take(10)
|&gt; toList;</code></pre><p>Let’s see how.</p><p>I’ll start with a simple functional generator that gives the next integer each time is called. It starts from 0.</p><pre><code class="language-js">function sequence() {
let count = 0;
return function() {
const result = count;
count += 1;
return result;
}
}
const nextNumber = sequence();
nextNumber(); //0
nextNumber(); //1
nextNumber(); //2</code></pre><p><code>nextNumber()</code> is an infinite generator. <code>nextNumber()</code> is also a closure function.</p><h3 id="finite-generator">Finite generator</h3><p>Generators can be finite. Check the next example where <code>sequence()</code> creates a generator that returns consecutive numbers from a specific interval. At the end of the sequence it returns <code>undefined</code>:</p><pre><code class="language-js">function sequence(from, to){
let count = from;
return function(){
if(count&lt; to){
const result = count;
count += 1;
return result;
}
}
}
const nextNumber = sequence(10, 15);
nextNumber(); //10
nextNumber(); //12
nextNumber(); //13
nextNumber(); //14
nextNumber(); //undefined</code></pre><h3 id="tolist-">toList()</h3><p>When working with generators, we may want to create a list with all the values from the sequence. For this situation, we need a new function <code>toList()</code> that takes a generator and returns all the values from the sequence as an array. The sequence should be finite.</p><pre><code class="language-js">function toList(sequence) {
const arr = [];
let value = sequence();
while (value !== undefined) {
arr.push(value);
value = sequence();
}
return arr;
}</code></pre><p>Let’s use it with the previous generator.</p><pre><code class="language-js">const numbers = toList(sequence(10, 15));
//[10,11,12,13,14]</code></pre><h3 id="the-pipeline-operator">The pipeline operator</h3><p>A pipeline is a series of data transformations where the output of one transformation is the input of the next one.</p><p>The pipeline operator <code>|&gt;</code> enables us to write data transformations in a more expressive way. The pipeline operator provides syntactic sugar over function calls with a single argument. Consider the next code:</p><pre><code class="language-js">const shortText = shortenText(capitalize("this is a long text"));
function capitalize(text) {
return text.charAt(0).toUpperCase() + text.slice(1);
}
function shortenText(text) {
return text.substring(0, 8).trim();
}</code></pre><p>With the pipeline operator the transformation can be written like this:</p><pre><code class="language-js">const shortText = "this is a long text"
|&gt; capitalize
|&gt; shortenText;
//This is</code></pre><p>At this moment the pipeline operator is experimental. You can try it using Babel:</p><ul><li>in <code>package.json</code> file add the babel pipeline plugin:</li></ul><pre><code class="language-json">{
"dependencies": {
"@babel/plugin-syntax-pipeline-operator": "7.2.0"
}
}</code></pre><ul><li>in the <code>.babelrc</code> configuration file add:</li></ul><pre><code>{
"plugins": [["@babel/plugin-proposal-pipeline-operator", {
"proposal": "minimal" }]]
}</code></pre><h3 id="generators-over-collections">Generators over collections</h3><p>In <a href="https://medium.freecodecamp.org/make-your-code-easier-to-read-with-functional-programming-94fb8cc69f9d" rel="noopener">Make your code easier to read with Functional Programming</a> I had an example of processing a list of <code>todos</code> . Here is the code:</p><pre><code class="language-js">function isPriorityTodo(task) {
return task.type === "RE" &amp;&amp; !task.completed;
}
function toTodoView(task) {
return Object.freeze({ id: task.id, desc: task.desc });
}
const filteredTodos = todos.filter(isPriorityTodo).map(toTodoView);</code></pre><p>In this example, the <code>todos</code> list goes through two transformations. First a filtered list is created, then a second list with the mapped values is created.</p><p>With generators, we can do the two transformations and create only one list. For this, we need a generator <code>sequence()</code> that gives the next value from a collection.</p><pre><code class="language-js">function sequence(list) {
let index = 0;
return function() {
if (index &lt; list.length) {
const result = list[index];
index += 1;
return result;
}
};
}</code></pre><h4 id="filter-and-map-">filter() and map()</h4><p>Next, we need two decorators <code>filter()</code> and <code>map()</code>, that work with functional generators.</p><p><code>filter()</code> takes a generator and creates a new generator that only returns the values from the sequence that satisfies the predicate function.</p><p><code>map()</code> takes a generator and creates a new generator that returns the mapped value.</p><p>Here are the implementations:</p><pre><code class="language-js">function filter(predicate) {
return function(sequence) {
return function filteredSequence() {
const value = sequence();
if (value !== undefined) {
if (predicate(value)) {
return value;
} else {
return filteredSequence();
}
}
};
};
}
function map(mapping) {
return function(sequence) {
return function() {
const value = sequence();
if (value !== undefined) {
return mapping(value);
}
};
};
}</code></pre><p>I would like to use these decorators with the pipeline operator. So, instead of creating <code>filter(sequence, predicate){ }</code> with two parameters, I created a curried version of it, that will be used like this: <code>filter(predicate)(sequence)</code>. This way, it works nicely with the pipeline operator.</p><p>Now that we have the toolbox, made of <code>sequence</code>, <code>filter</code>, <code>map</code> and <code>toList</code> functions, for working with generators over collections, we can put all of them in a module (<code>"./sequence"</code>). See below for how to rewrite the previous code using this toolbox and the pipeline operator:</p><pre><code class="language-js">import { sequence, filter, map, take, toList } from "./sequence";
const filteredTodos =
sequence(todos)
|&gt; filter(isPriorityTodo)
|&gt; map(toTodoView)
|&gt; toList;</code></pre><p>Here is a <a href="https://jsperf.com/functional-generators-vs-array-methods/1" rel="noopener">performance test</a> measuring the difference between using array methods and using functional generators. It seems that the approach with functional generators is 15–20% slower.</p><h4 id="reduce-">reduce()</h4><p>Let’s take another example that computes the price of fruits from a shopping list.</p><pre><code class="language-js">function addPrice(totalPrice, line){
return totalPrice + (line.units * line.price);
}
function areFruits(line){
return line.type === "FRT";
}
let fruitsPrice = shoppingList.filter(areFruits).reduce(addPrice,0);</code></pre><p>As you can see, it requires us to create a filtered list first and then it computes the total on that list. Let’s rewrite the computation with functional generators and avoid the creation of the filtered list.</p><p>We need a new function in the toolbox: <code>reduce()</code>. It takes a generator and reduces the sequence to a single value.</p><pre><code class="language-js">function reduce(accumulator, startValue) {
return function(sequence) {
let result = startValue;
let value = sequence();
while (value !== undefined) {
result = accumulator(result, value);
value = sequence();
}
return result;
};
}</code></pre><p><code>reduce()</code> has immediate execution.</p><p>Here is the code rewritten with generators:</p><pre><code class="language-js">import { sequence, filter, reduce } from "./sequence";
const fruitsPrice = sequence(shoppingList)
|&gt; filter(areFruits)
|&gt; reduce(addPrice, 0);</code></pre><h4 id="take-">take()</h4><p>Another common scenario is to take only the first <code>n</code> elements from a sequence. For this case we need a new decorator <code>take()</code>, that receives a generator and creates a new generator that returns only the first <code>n</code> elements from the sequence.</p><pre><code class="language-js">function take(n) {
return function(sequence) {
let count = 0;
return function() {
if (count &lt; n) {
count += 1;
return sequence();
}
};
};
}</code></pre><p>Again, this is the curried version of <code>take()</code> that should be called like this: <code>take(n)(sequence)</code>.</p><p>Here is how you can use <code>take()</code> on an infinite sequence of numbers:</p><pre><code class="language-js">import { sequence, toList, filter, take } from "./sequence";
function isEven(n) {
return n % 2 === 0;
}
const first3EvenNumbers = sequence()
|&gt; filter(isEven)
|&gt; take(3)
|&gt; toList;
//[0, 2, 4]</code></pre><p>I remade the previous <a href="https://jsperf.com/functional-generators-vs-array-methods/4" rel="noopener">performance test</a> and use <code>take()</code> to process only the first 100 items. It turns out that the version with functional generators is a lot faster (like 170 times faster).</p><pre><code class="language-js">let filteredTodos = todos
.filter(isPriorityTodo)
.slice(0, 100)
.map(toTodoView);
//320 ops/sec
let filteredTodos =
const filteredTodos =
sequence(todos)
|&gt; filter(isPriorityTodo)
|&gt; map(toTodoView)
|&gt; take(100)
|&gt; toList;
//54000 ops/sec</code></pre><h3 id="custom-generators">Custom generators</h3><p>We can create any custom generator and use it with the toolbox and the pipeline operator. Let’s create the Fibonacci custom generator:</p><pre><code class="language-js">function fibonacciSequence() {
let a = 0;
let b = 1;
return function() {
const aResult = a;
a = b;
b = aResult + b;
return aResult;
};
}
const fibonacci = fibonacciSequence();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
const firstNumbers = fibonacciSequence()
|&gt; take(10)
|&gt; toList;
//[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]</code></pre><h3 id="conclusion">Conclusion</h3><p>The pipeline operator makes data transformation more expressive.</p><p>Functional generators can be created over finite or infinite sequences of values.</p><p>With generators we can do list processing without creating intermediary lists at each step.</p><p>You can check all the samples on <a href="https://codesandbox.io/s/rj2r9mxl0n" rel="noopener">codesandbox</a>.</p><p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE&amp;source=post_page---------------------------"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the<strong><strong> </strong></strong><a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781&amp;source=post_page---------------------------"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><p><strong><strong>For more on applying functional programming techniques in React take a look at</strong></strong> <a href="https://read.amazon.com/kp/embed?asin=B07S1NLFTS&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_Pko5CbA30383Y" rel="noopener nofollow"><strong><strong>Functional React</strong></strong></a><strong><strong>.</strong></strong></p><p>Learn <strong><strong>functional React</strong></strong>, in a project-based way, with <a href="https://read.amazon.com/kp/embed?asin=B0846NRJYR&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_o.hlEbDD02JB2" rel="noopener nofollow"><strong><strong>Functional Architecture with React and Redux</strong></strong></a><strong><strong>.</strong></strong></p><p><a href="https://twitter.com/cristi_salcescu" rel="noopener nofollow nofollow noopener nofollow noopener nofollow noopener">Follow on Twitter</a></p>
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
