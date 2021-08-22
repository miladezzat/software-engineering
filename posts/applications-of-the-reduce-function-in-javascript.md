---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9dbc740569d1a4ca395f.jpg"
tags: [JavaScript]
description: As the year begins, I have decided to make a series of articl
author: "Milad E. Fahmy"
title: "Intro to JavaScript APIs: The Reduce Function"
created: "2021-08-15T19:31:16+02:00"
modified: "2021-08-15T19:31:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-api ">
<header class="post-full-header">
<h1 class="post-full-title">Intro to JavaScript APIs: The Reduce Function</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9dbc740569d1a4ca395f.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9dbc740569d1a4ca395f.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9dbc740569d1a4ca395f.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9dbc740569d1a4ca395f.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9dbc740569d1a4ca395f.jpg" alt="Intro to JavaScript APIs: The Reduce Function">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>As the year begins, I have decided to make a series of articles that explain the various APIs (Application Programming Interfaces) in the JavaScript language. In each article we will break down a commonly used function in JavaScript and try to go through its various applications.</p>
<p>The first function we will be going through is the '<strong>Reduce</strong>' higher-order function. This is mainly because, out of all the JS array methods, it took me a bit of time to understand how the Reduce function works.</p>
<p>This article assumes that the reader understands other array methods like <strong>Map </strong>and <strong>Filter </strong>because it will help in understanding how <strong>Reduce </strong>works. </p>
<p>In order to fully grasp the idea behind Reduce<strong>,</strong> we will look at a few examples of simple solutions using <strong>for </strong>loops and then implement those same solutions using the Reduce<strong> </strong>function. Then we will look at some more advanced use cases for the Reduce<strong> </strong>function.</p>
<h2 id="example-1">Example 1</h2>
<p>The first example we will look at is a common one: calculating the sum of items in an array. This requires a simple solution, and using a <strong>for </strong>loop should look like this:</p><pre><code class="language-javascript">const arrayItems = [1,2,3,4,5,6];
let sum = 0;
for (let i = 0; i &lt; arrayItems.length; i++) {
sum = sum + arrayItems[i];
}
// sum = 21</code></pre>
<p>The solution above is pretty straightforward, where we add each item in the array and store the result in the <code>sum</code> variable. So the next step is to implement the same solution using <strong>Reduce</strong>,<strong> </strong>which should look like the code below:</p><pre><code class="language-javascript">const arrayItems = [1,2,3,4,5,6];
const sum = arrayItems.reduce(function(accumulator, currentItemInArray){
accumulator = accumulator + currentItemInArray;
return accumulator;
}, 0);
// sum = 21</code></pre>
<p>Looking at the two examples above it's pretty obvious that the <strong>for </strong>loop example seems simpler, and this has been the cause of some arguments in the ecosystem. But this example is overkill, and we are only using it make it easy to understand how the Reduce<strong> </strong>function works, so let's work through the example.</p>
<p>We need to, first of all, understand what the Reduce function is. It is a method that exists for every JavaScript Array. It enables us to loop through each item in the array and perform a function on each of those items. </p>
<p>This is pretty similar to the behavior of the <strong>Map </strong>function, but it has a twist–it allows us to return any value from our function in a particular iteration, which will then exist as a parameter (argument) in that function in the next iteration (that value is commonly known as the <strong>accumulator</strong>).</p>
<p>To explain further, the Reduce<strong> </strong>function takes 2 arguments:</p>
<ul>
<li>Callback function: This is a function that contains 4 parameters typically. But right now we are only concerned with the first, the accumulator, and the second which is the current item in the array during that iteration.</li>
<li>Initial value: This is the initial value of the accumulator when the iteration starts. In the example above the value is 0, which means the initial value of the accumulator will be 0.</li>
</ul>
<p>Back to our example:</p><pre><code class="language-javascript">const arrayItems = [1,2,3,4,5,6];
const sum = arrayItems.reduce(function(accumulator, currentItemInArray){
accumulator = accumulator + currentItemInArray;
return accumulator;
}, 0);
// sum = 21</code></pre>
<p>It can be further broken out into the callback function and the initial value:</p><pre><code class="language-javascript">const arrayItems = [1,2,3,4,5,6];
function callbackFunction(accumulator, currentItemInArray){
accumulator = accumulator + currentItemInArray;
return accumulator;
}
const initialValue = 0;
const sum = arrayItems.reduce(callbackFunction, initialValue);
// sum = 21</code></pre>
<p>The tricky part for me was understanding how the accumulator works. To explain it we will go through each iteration in the loop.</p>
<h3 id="iteration-1">Iteration 1</h3>
<p>In the first iteration, since our initial value is 0, our accumulator will have a value of 0. So our function will look like this:</p><pre><code class="language-javascript">const arrayItems = [1,2,3,4,5,6];
// 1 is the current item in the array
function callbackFunction(accumulator = 0, currentItemInArray = 1){
accumulator = 0 + 1;
return accumulator // which is 1;
}</code></pre>
<p><code>callbackFunction</code> will return a value of 1. This will automatically be used as the next value for the accumulator in the second iteration.</p>
<h3 id="iteration-2">Iteration 2</h3><pre><code class="language-javascript">const arrayItems = [1,2,3,4,5,6];
// 2 is the current item in the array
function callbackFunction(accumulator = 1, currentItemInArray = 2){
accumulator = 1 + 2;
return accumulator // which is 3;
}</code></pre>
<p>In this iteration, our accumulator will have a value of 1 which was returned in our first iteration. The <code>callbackFunction</code> will return a value of 3 in this iteration. This means that our accumulator will have a value of 3 in our third iteration.</p>
<h3 id="iteration-3">Iteration 3</h3><pre><code class="language-js">const arrayItems = [1,2,3,4,5,6];
// 3 is the current item in the array
function callbackFunction(accumulator = 3, currentItemInArray = 3){
accumulator = 3 + 3;
return accumulator // which is 6;
}</code></pre>
<p>In the third iteration, our accumulator will have a value of 3 which was returned by the <code>callbackFunction</code> in iteration 2. The &nbsp;<code>callbackFunction</code> will return a value of 6, which will be used as the value of accumulator in iteration 4. These steps will repeat themselves until we get to the last item in the array which is 6.</p>
<p>As I mentioned before, the example above can be an overkill, so let's look at a problem where using Reduce<strong> </strong>is more common. (However, this doesn't mean that a <strong>for</strong> loop cannot be used to implement a working solution). </p>
<h2 id="example-2">Example 2</h2>
<p>The second example will involve counting the number of occurrences of each element in an array, for example:</p><pre><code class="language-js">//Given an input
const fruits = ['apples', 'apples', 'bananas', 'oranges', 'apples', 'oranges', 'bananas', 'grapes'];
// should give an output of
const count = { 'apples': 3,'oranges': 2,'bananas': 2, 'grapes': 1 };</code></pre>
<p>Let's implement the solution, then go through each iteration and see what is happening:</p><pre><code class="language-js">const fruits = ['apples', 'apples', 'bananas', 'oranges', 'apples', 'oranges', 'bananas', 'grapes'];
function countOccurrence(accumulator, currentFruit){
const currentFruitCount = accumulator[currentFruit];
// if the fruit exists as a key in the  object, increment its value, else add the fruit as a key to the object with a value of 1
if(currentFruitCount) {
accumulator[currentFruit] = currentFruitCount + 1;
} else {
accumulator[currentFruit] = 1
}
return accumulator;
}
const initialValue = {};
const count = fruits.reduce(countOccurrence, initialValue);</code></pre>
<p>The solution is written to be as verbose a possible so we can understand what is going on in the code. As we did before, let's go through the first few iterations.</p>
<h3 id="iteration-1-1">Iteration 1</h3>
<p>In the first iteration, since we made our initial value an empty object, the value of <code>accumulator</code> will be an empty object. This means that the <code>countOcurrence</code> function will look like the code below when it is called:</p><pre><code class="language-js">const fruits = ['apples', 'apples', 'bananas', 'oranges', 'apples', 'oranges', 'bananas', 'grapes'];
// current element is 'apples'
function countOccurrence(accumulator = {}, currentFruit = 'apples'){
// since currentFruit = 'apples' then accumulator[currentFruit] = accumulator['apples']
const currentFruitCount = accumulator[currentFruit];
// currentFruitCount will be null since accumulator is an empty object
if(currentFruitCount) {
accumulator[currentFruit] = currentFruitCount + 1;
} else {
// this block will run since accumulator is empty
// currentFruit = 'apples'
accumulator['apples'] = 1
// accumulator should look like this: { 'apples': 1 }
}
return accumulator // which is { 'apples': 1 };
}</code></pre>
<p>Since <code>accumulator</code> is an empty object, <code>currentFruitCount</code> will be <code>null</code>. This means that the <code>else</code> block will run where a new key (apples) with the value of 1 will be added to the <code>accumulator</code>. This will be returned from the function which will be passed as the value of the accumulator in the second iteration.</p>
<h3 id="iteration-2-1">Iteration 2</h3>
<p>In the second iteration, our <code>accumulator</code> will have the value of <code>{ 'apples': 1 }</code>, which was returned by the <code>countOccurrence</code> function in the first iteration. Then the <code>countOccurrence</code> function will look like the code below:</p><pre><code class="language-js">const fruits = ['apples', 'apples', 'bananas', 'oranges', 'apples', 'oranges', 'bananas', 'grapes'];
// current element is 'apples'
function countOccurrence(accumulator = { 'apples': 1 }, currentFruit = 'apples'){
// since currentFruit = 'apples' then accumulator[currentFruit] = accumulator['apples']
const currentFruitCount = accumulator[currentFruit];
// currentFruitCount will be 1
if(currentFruitCount) {
// this block will run since currentFruitCount is 1
// currentFruit = 'apples'
accumulator['apples'] = 1 + 1;
// accumulator should look like this: { 'apples': 2 }
} else {
accumulator[currentFruit] = 1
}
return accumulator // which is { 'apples': 2 };
}</code></pre>
<p>Since the <code>accumulator</code> contains a key ('apple') with the value of 1, <code>currentFruit</code> will be 1, which means the <code>if</code> block will be run. In that block the value of the <code>apple</code> key will be incremented by 1 making it 2, and this new value will be updated in the accumulator object to make it <code>{ 'apples' : 2 }</code> . This value will be returned by the <code>countOccurrence</code> function and passed as the value for the accumulator in the third iteration.</p>
<h3 id="iteration-3-1">Iteration 3</h3>
<p>For our third iteration, <code>accumulator</code> has the value of <code>{ apples: 2 }</code> which was returned by <code>countOccurence</code> during the second iteration. The <code>countOccurence</code> function will look like the code below:</p><pre><code class="language-js">const fruits = ['apples', 'apples', 'bananas', 'oranges', 'apples', 'oranges', 'bananas', 'grapes'];
// current element is 'bananas'
function countOccurrence(accumulator = { 'apples': 2 }, currentFruit = 'bananas'){
// since currentFruit = 'bananas' then accumulator[currentFruit] = accumulator['bananas']
const currentFruitCount = accumulator[currentFruit];
// currentFruitCount will be null since accumulator doesn't contain 'bananas'
if(currentFruitCount) {
accumulator[currentFruit] = currentFruitCount + 1;
} else {
// this block will run since currentFruitCount is null
// currentFruit = 'bananas'
accumulator['bananas'] = 1
}
return accumulator // which is { 'apples': 2, 'bananas': 1  };
}</code></pre>
<p>This iteration is similar to the first one–since <code>bananas</code> doesn't exist in <code>accumulator</code> it will be added to the object and given a value of <code>1</code> , making <code>accumulator</code> look like this: <code>{ 'apples': 2, 'bananas': 1 }</code>. This will then become the value of <code>accumulator</code> for the fourth iteration.</p>
<p>The process will repeat itself until the Reduce<strong> </strong>function has iterated through each element in the array.</p>
<h2 id="wrapping-up">Wrapping up</h2>
<p>I really hope these examples were clear enough to create a mental model of how the <strong>Reduce </strong>function works. </p>
<p>If you are reading this and you would like to see more advanced examples (like implementing the <code>pipe</code> function) feel free to tweet at me and I'll respond as soon as I can. Also, if you have other examples I would love to see them. Thanks!!!</p>
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
