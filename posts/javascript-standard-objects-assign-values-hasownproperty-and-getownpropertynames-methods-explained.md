---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9d0c740569d1a4ca359c.jpg"
tags: [JavaScript]
description: In JavaScript, the Object data type is used to store key valu
author: "Milad E. Fahmy"
title: "JavaScript Standard Objects: assign, values, hasOwnProperty, and getOwnPropertyNames Methods Explained"
created: "2021-08-15T19:30:56+02:00"
modified: "2021-08-15T19:30:56+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Standard Objects: assign, values, hasOwnProperty, and getOwnPropertyNames Methods Explained</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d0c740569d1a4ca359c.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d0c740569d1a4ca359c.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d0c740569d1a4ca359c.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d0c740569d1a4ca359c.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d0c740569d1a4ca359c.jpg" alt="JavaScript Standard Objects: assign, values, hasOwnProperty, and getOwnPropertyNames Methods Explained">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>In JavaScript, the <code>Object</code> data type is used to store key value pairs, and like the <code>Array</code> data type, contain many useful methods. These are some useful methods you'll use while working with objects.</p>
<h2 id="object-assign-method">Object Assign Method</h2>
<p>The <code>Object.assign()</code> method is used to </p>
<ol>
<li>add properties and values to an existing object</li>
<li>make a new copy of an existing object, or </li>
<li>combine multiple existing objects into a single object. </li>
</ol>
<p>The <code>Object.assign()</code> method requires one <code>targetObject</code> as a parameter and can accept an unlimited number of <code>sourceObjects</code> as additional parameters.</p>
<p>It's important to note here is that the <code>targetObject</code> parameter will always be modified. If that parameter points to an existing object, then that object will be both modified and copied. </p>
<p>If, you wish to create a copy of an object without modifying that original object, you can pass an empty object <code>{}</code> as the first (<code>targetObject</code>) parameter and the object to be copied as the second (<code>sourceObject</code>) parameter.</p>
<p>If objects passed as parameters into <code>Object.assign()</code> share the same properties (or keys), property values that come later in the parameters list will overwrite those which came earlier.</p>
<p><strong><strong>Syntax</strong></strong></p><pre><code class="language-javascript">Object.assign(targetObject, ...sourceObject);</code></pre>
<p><strong><strong>Return Value</strong></strong></p>
<p><code>Object.assign()</code> returns the <code>targetObject</code>.</p>
<h3 id="examples">Examples</h3>
<p>Modifying and copying <code>targetObject</code>:</p><pre><code class="language-javascript">let obj = {name: 'Dave', age: 30};
let objCopy = Object.assign(obj, {coder: true});
console.log(obj); // { name: 'Dave', age: 30, coder: true }
console.log(objCopy); // { name: 'Dave', age: 30, coder: true }</code></pre>
<p>Copying <code>targetObject</code> without modification:</p><pre><code class="language-javascript">let obj = {name: 'Dave', age: 30};
let objCopy = Object.assign({}, obj, {coder: true});
console.log(obj); // { name: 'Dave', age: 30 }
console.log(objCopy); // { name: 'Dave', age: 30, coder: true }</code></pre>
<p>Objects with the same properties<em>:</em></p><pre><code class="language-javascript">let obj = {name: 'Dave', age: 30, favoriteColor: 'blue'};
let objCopy = Object.assign({}, obj, {coder: true, favoriteColor: 'red'});
console.log(obj); // { name: 'Dave', age: 30, favoriteColor: 'blue' }
console.log(objCopy); // { name: 'Dave', age: 30, favoriteColor: 'red', coder: true }</code></pre>
<h2 id="object-values-method">Object Values Method</h2>
<p>The <code>Object.values()</code> method takes an object as a parameter and returns an array of its values. This makes it useful for chaining with common <code>Array</code> methods like <code>.map()</code>, <code>.forEach()</code>, and <code>.reduce()</code>.</p>
<p><strong>Syntax</strong></p><pre><code class="language-text">Object.values(targetObject);</code></pre>
<p><strong>Return value</strong></p>
<p>An array of the passed object's (<code>targetObject</code>) values.</p>
<h3 id="examples-1">Examples</h3><pre><code class="language-js">const obj = {
firstName: 'Quincy',
lastName: 'Larson'
}
const values = Object.values(obj);
console.log(values); // ["Quincy", "Larson"]</code></pre>
<p>If the object you're passing has numbers as keys, then <code>Object.value()</code> will return the values according to the numerical order of the keys:</p><pre><code class="language-js">const obj1 = { 0: 'first', 1: 'second', 2: 'third' };
const obj2 = { 100: 'apple', 12: 'banana', 29: 'pear' };
console.log(Object.values(obj1)); // ["first", "second", "third"]
console.log(Object.values(obj2)); // ["banana", "pear", "apple"]</code></pre>
<p>If something other than an object is passed to <code>Object.values()</code>, it will be coerced into an object before being returned as an array:</p><pre><code class="language-js">const str = 'hello';
console.log(Object.values(str)); // ["h", "e", "l", "l", "o"]</code></pre>
<h2 id="object-hasownproperty-method"><strong>Object hasOwnProperty Method</strong></h2>
<p>The <code>Object.hasOwnProperty()</code> method returns a <a href="/news/p/6bce9cb3-38ff-45d1-a56b-322354699b01/www.freecodecamp.org/news/booleans-in-javascript-explained-how-to-use-booleans-in-javascript/">boolean</a> indicating if the object owns the specified property.</p>
<p>This is a convenient method to check if an object has the specified property or not since it returns true/false accordingly.</p>
<p><strong>Syntax</strong></p>
<p><code>Object.hasOwnProperty(prop)</code></p>
<p><strong>Return value</strong></p><pre><code class="language-js">true
// or
false</code></pre>
<h3 id="examples-2"><strong>Examples</strong></h3>
<p>Using <code>Object.hasOwnProperty()</code> to test if a property exist or not in a given object:</p><pre><code class="language-js">const course = {
name: 'freeCodeCamp',
feature: 'is awesome',
}
const student = {
name: 'enthusiastic student',
}
course.hasOwnProperty('name');  // returns true
course.hasOwnProperty('feature');   // returns true
student.hasOwnProperty('name');  // returns true
student.hasOwnProperty('feature'); // returns false</code></pre>
<h2 id="object-getownpropertynames-method">Object getOwnPropertyNames Method</h2>
<p>The <code>Object.getOwnPropertyNames()</code> method takes an object as a parameter and returns and array of all its properties.</p>
<p><strong>Syntax</strong></p><pre><code class="language-text">Object.getOwnPropertyNames(obj)</code></pre>
<p><strong>Return value</strong></p>
<p>An array of strings of the passed object's properties.</p>
<h3 id="examples-3">Examples</h3><pre><code class="language-js">const obj = { firstName: 'Quincy', lastName: 'Larson' }
console.log(Object.getOwnPropertyNames(obj)); // ["firstName", "lastName"]</code></pre>
<p>If something other than an object is passed to <code>Object.getOwnPropertyNames()</code>, it will be coerced into an object before being returned as an array:</p><pre><code class="language-js">const arr = ['1', '2', '3'];
console.log(Object.getOwnPropertyNames(arr)); // ["0", "1", "2", "length"]</code></pre>
<h2 id="promise-prototype-then"><strong>Promise.prototype.then</strong></h2>
<p>A <code>Promise.prototype.then</code> function accepts two arguments and returns a Promise.</p>
<p>The first argument is a required function that accepts one argument. Successful fulfillment of a Promise will trigger this function.</p>
<p>The second argument is an optional function that also accepts one argument of its own. A thrown Error or Rejection of a Promise will trigger this function.</p><pre><code class="language-javascript">   function onResolved (resolvedValue) {
/*
* access to resolved values of promise
*/
}
function onRejected(rejectedReason) {
/*
* access to rejection reasons of promise
*/
}
promiseReturningFunction(paramList)
.then( // then function
onResolved,
[onRejected]
);</code></pre>
<p><code>Promise.prototype.then</code> allows you to perform many asynchronous activities in sequence. You do this by attaching one <code>then</code> function to another separated by a dot operator.</p><pre><code class="language-javascript">   promiseReturningFunction(paramList)
.then( // first then function
function(arg1) {
// ...
return someValue;
}
)
...
.then( // nth then function
function(arg2) {
// ...
return otherValue;
}
)</code></pre>
<h2 id="map-prototype-entries"><strong>Map.prototype.entries</strong></h2>
<p>Returns a new <code>Iterator</code> object that contains the <code>[key, value]</code> pairs for each element in the <code>Map</code> object in insertion order.</p>
<h2 id="syntax"><strong>Syntax</strong></h2><pre><code class="language-javascript">myMap.entries()</code></pre>
<h2 id="example"><strong>Example</strong></h2><pre><code class="language-javascript">const myMap = new Map();
myMap.set('foo',1);
myMap.set('bar',2);
myMap.set('baz',3);
var iterator = myMap.entries();
console.log(iterator.next().value); // ['foo', 1]
console.log(iterator.next().value); // ['bar', 2]
console.log(iterator.next().value); // ['baz', 3]</code></pre>
<h2 id="more-info-on-objects-in-javascript-">More info on objects in JavaScript:</h2>
<ul>
<li><a href="/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/">How to create objects in JavaScript</a></li>
<li><a href="/news/how-to-loop-through-objects-in-javascript-a80b7d2478ac/">How to loop through objects in JavaScript</a></li>
</ul>
<h2 id="more-info-about-booleans-">More info about booleans:</h2>
<ul>
<li><a href="/news/p/6bce9cb3-38ff-45d1-a56b-322354699b01/www.freecodecamp.org/news/booleans-in-javascript-explained-how-to-use-booleans-in-javascript/">Booleans in JavaScript</a></li>
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
