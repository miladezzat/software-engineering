---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9f19740569d1a4ca40cf.jpg"
tags: [JavaScript]
description: The reduce() method reduces an array of values down to just o
author: "Milad E. Fahmy"
title: "The Ultimate Guide to JavaScript Array Methods - Reduce"
created: "2021-08-15T19:32:04+02:00"
modified: "2021-08-15T19:32:04+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-arrays ">
<header class="post-full-header">
<h1 class="post-full-title">The Ultimate Guide to JavaScript Array Methods - Reduce</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9f19740569d1a4ca40cf.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9f19740569d1a4ca40cf.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9f19740569d1a4ca40cf.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9f19740569d1a4ca40cf.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9f19740569d1a4ca40cf.jpg" alt="The Ultimate Guide to JavaScript Array Methods - Reduce">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>The <code>reduce()</code> method reduces an array of values down to just one value. The single value that is returned can be of any type.</p>
<p><code>reduce()</code> is like the Swiss Army knife of array methods. While others like <code>map()</code> and <code>filter()</code> provide specific functionality, <code>reduce()</code> can be used to transform an input array into any output you desire, all while preserving the original array.</p>
<h2 id="syntax">Syntax</h2><pre><code class="language-js">const newValue = arr.reduce(function(accumulator, currentValue, index, array) {
// Do stuff with accumulator and currentValue (index, array, and initialValue are optional)
}, initialValue);</code></pre>
<ul>
<li><code>newValue</code> - the new number, array, string, or object that is returned</li>
<li><code>arr</code> - the array being operated on</li>
<li><code>accumulator</code> - the returned value of the previous iteration</li>
<li><code>currentValue</code> - the current item in the array</li>
<li><code>index</code> - the index of the current item</li>
<li><code>array</code> - the original array on which <code>reduce()</code> was called</li>
<li><code>initialValue</code> - a number, array, string, or object that serves as an initial value for the eventual output</li>
</ul>
<h2 id="examples">Examples</h2>
<h3 id="es5">ES5</h3><pre><code class="language-js">var numbers = [1, 2, 3];
var sum = numbers.reduce(function(total, current) {
return total + current;
}, 0);
console.log(numbers); // [1, 2, 3]
console.log(sum); // 6</code></pre>
<h3 id="es6">ES6</h3><pre><code class="language-js">const numbers = [1, 2, 3];
const sum = numbers.reduce((total, current) =&gt; {
return total + current;
}, 0);
const sumOneLiner = numbers.reduce((total, current) =&gt; total + current, 0);
console.log(numbers); // [1, 2, 3]
console.log(sum); // 6
console.log(sumOneLiner); // 6</code></pre>
<h2 id="all-about-initialvalue">All About <code>initialValue</code></h2>
<h3 id="initialvalue-provided"><code>initialValue</code> Provided</h3>
<p>The <code>initialValue</code> argument is optional. If provided, it will be used as the initial accumulator value (<code>total</code>) in the first call to the callback function:</p><pre><code class="language-js">const numbers = [2, 3, 4];
const product = numbers.reduce((total, current) =&gt; {
return total * current;
}, 1);
console.log(product); // 24</code></pre>
<p>Since the <code>initialValue</code> of 1 is provided after the callback function, the <code>reduce()</code> starts at the beginning of the array and sets the first element (2) as the current value (<code>current</code>). It then iterates through the rest of the array, updating the accumulator value and current value along the way.</p>
<h3 id="initialvalue-omitted"><code>initialValue</code> Omitted</h3>
<p>If <code>initialValue</code> is not provided, the iteration will start at the second element in the array (at index 1), with <code>accumulator</code> equal to the first element in the array and <code>currentValue</code> equal to the second element:</p><pre><code class="language-js">const numbers = [2, 3, 4];
const product = numbers.reduce((total, current) =&gt; {
return total * current;
});
console.log(product);</code></pre>
<p>In this example, no <code>initialValue</code> is provided, so <code>reduce()</code> sets the first element of the array as the accumulator value (<code>total</code> is equal to 2), and sets the second element of the array as the current value (<code>currentValue</code> is equal to 3). It then iterates through the rest of the array.</p>
<p>When reducing an array of strings:</p><pre><code class="language-js">const strings = ['one', 'two', 'three'];
const numberString = strings.reduce((acc, curr) =&gt; {
return acc + ', ' + curr;
});
console.log(numberString); // "one, two, three"</code></pre>
<p>While it's easy to omit the <code>initialValue</code> argument if your <code>reduce()</code> method will return a number or a simple string, you should include one if it will return an array or object.</p>
<h2 id="returning-an-object">Returning an Object</h2>
<p>Transforming an array of strings into a single object that shows how many times each string appears in the array is simple. Just pass an empty object (<code>{}</code>) as the <code>initialValue</code>:</p><pre><code class="language-js">const pets = ["dog", "chicken", "cat", "dog", "chicken", "chicken", "rabbit"];
const petCounts = pets.reduce(function(obj, pet) {
if (!obj[pet]) {
// if the pet doesn't yet exist as a property of the accumulator object,
//   add it as a property and set its count to 1
obj[pet] = 1;
} else {
// pet exists, so increment its count
obj[pet]++;
}
return obj; // return the modified object to be used as accumulator in the next iteration
}, {}); // initialize the accumulator as an empty object
console.log(petCounts);
/*
{
dog: 2,
chicken: 3,
cat: 1,
rabbit: 1
}
*/</code></pre>
<h2 id="returning-and-array">Returning and Array</h2>
<p>Generally, if you plan to return an array, <code>map()</code> is often a better option. It tells the compiler (and others reading your code) that every element in the original array will be transformed and returned as a new array of equal length.</p>
<p>On the other hand, <code>reduce()</code> indicates that all elements of the original array will get transformed into a new value. That new value could be an array, the length of which might be different than the original.</p>
<p>Say you have a shopping list as an array of strings, but you want to remove all of the foods that you don't like from the list. You could use <code>filter()</code> to filter out everything you don't like and <code>map()</code> to return a new array of strings, or you could just use <code>reduce()</code>:</p><pre><code class="language-js">const shoppingList = ['apples', 'mangoes', 'onions', 'cereal', 'carrots', 'eggplants'];
const foodsIDontLike = ['onions', 'eggplants'];
const newShoppingList = shoppingList.reduce((arr, curr) =&gt; {
if (!foodsIDontLike.includes(curr)) {
arr.push(curr);
}
return arr;
}, []);
console.log(newShoppingList); // ["apples", "mangoes", "cereal", "carrots"]</code></pre>
<p>That's all you need to know about the <code>reduce()</code> method. Like a Swiss Army knife, it's not always the best tool for the job. But you'll be glad to have it in your back pocket when you really need it.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
