---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9d30740569d1a4ca3660.jpg"
tags: [JavaScript]
description: The Map object is a relatively new standard built-in object t
author: "Milad E. Fahmy"
title: "JavaScript Standard Objects: Maps"
created: "2021-08-15T19:30:53+02:00"
modified: "2021-08-15T19:30:53+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-maps tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Standard Objects: Maps</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d30740569d1a4ca3660.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d30740569d1a4ca3660.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d30740569d1a4ca3660.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d30740569d1a4ca3660.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d30740569d1a4ca3660.jpg" alt="JavaScript Standard Objects: Maps">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>The <code>Map</code> object is a relatively new standard built-in object that holds <code>[key, value]</code> pairs in the order that they're inserted. </p>
<p>The keys and values in the <code>Map</code> object can be any value (both objects and primitive values are valid).</p>
<h2 id="syntax"><strong>Syntax</strong></h2><pre><code class="language-javascript">new Map([iterable])</code></pre>
<h2 id="parameters"><strong>Parameters</strong></h2>
<p><strong><strong>iterable</strong></strong> An Array or other iterable object whose elements are key-value pairs.</p>
<h2 id="example"><strong>Example</strong></h2><pre><code class="language-javascript">const myMap = new Map();
myMap.set('foo', 1);
myMap.set('bar', 2);
myMap.set('baz', 3);
myMap.get('foo');   // returns 1
myMap.get('baz');   // returns 3
myMap.get('hihi');  // return undefined
myMap.size;   // 3
console.log(myMap); // Map { 'foo' =&gt; 1, 'bar' =&gt; 2, 'baz' =&gt; 3 }</code></pre>
<p>It's easy to create a new <code>Map</code> from existing 2D arrays of key-value pairs:</p><pre><code class="language-js">const myArr = [['foo', 1], ['bar', 2], ['baz', 3]];
const arrMap = new Map(myArr);
console.log(arrMap); // Map { 'foo' =&gt; 1, 'bar' =&gt; 2, 'baz' =&gt; 3 }</code></pre>
<p>You can also convert an object into a <code>Map</code> with the help of the <code>Object.entries</code>:</p><pre><code class="language-js">const myObj = {
foo: 1,
bar: 2,
baz: 3
}
const objMap = new Map(Object.entries(myObj));
console.log(objMap); // Map { 'foo' =&gt; 1, 'bar' =&gt; 2, 'baz' =&gt; 3 }</code></pre>
<h2 id="map-prototype-get"><strong>Map.prototype.get</strong></h2>
<p>Returns the value of the specified key from a <code>Map</code> object.</p>
<h2 id="syntax-1"><strong>Syntax</strong></h2><pre><code class="language-javascript">myMap.get(key);</code></pre>
<h2 id="parameters-1"><strong>Parameters</strong></h2>
<p><strong><strong>key</strong></strong> Required.</p>
<h2 id="example-1"><strong>Example</strong></h2><pre><code class="language-javascript">const myMap = new Map();
myMap.set('foo',1);
myMap.set('bar',2);
myMap.set('baz',3);
myMap.get('foo');   // returns 1
myMap.get('baz');   // returns 3
myMap.get('hihi');  // return undefined</code></pre>
<h2 id="map-prototype-set"><strong>Map.prototype.set</strong></h2>
<p>Sets or updates an element with the specified key and value in a <code>Map</code> object. The <code>set()</code> method also returns the <code>Map</code> object.</p>
<h2 id="syntax-2"><strong>Syntax</strong></h2><pre><code class="language-javascript">myMap.set(key, value);</code></pre>
<h2 id="parameters-2"><strong>Parameters</strong></h2>
<ul>
<li><strong><strong>key</strong></strong> Required</li>
<li><strong><strong>value</strong></strong> Required</li>
</ul>
<h2 id="example-2"><strong>Example</strong></h2><pre><code class="language-javascript">const myMap = new Map();
// sets new elements
myMap.set('foo', 1);
myMap.set('bar', 2);
myMap.set('baz', 3);
// Updates an existing element
myMap.set('foo', 100);
myMap.get('foo');   // returns 100</code></pre>
<p>Because <code>set()</code> returns the <code>Map</code> object it operated on, the method can be easily chained. For example, the code above can be simplified to:</p><pre><code class="language-js">const myMap = new Map();
// sets new elements
myMap.set('foo', 1)
.set('bar', 2)
.set('baz', 3)
.set('foo', 100); // Updates an existing element
myMap.get('foo');   // returns 100</code></pre>
<h2 id="map-prototype-size"><strong>Map.prototype.size</strong></h2>
<p>Returns the number of elements in a <code>Map</code> object.</p>
<h2 id="syntax-3"><strong>Syntax</strong></h2><pre><code class="language-javascript">myMap.size();</code></pre>
<h2 id="example-3"><strong>Example</strong></h2><pre><code class="language-javascript">const myMap = new Map();
myMap.set('foo',1);
myMap.set('bar',2);
myMap.set('baz',3);
myMap.size(); // 3</code></pre>
<h2 id="map-prototype-keys"><strong>Map.prototype.keys</strong></h2>
<p>Returns a new <code>Iterator</code> object that contains the keys for each element in the <code>Map</code> object in insertion order.</p>
<h2 id="syntax-4"><strong>Syntax</strong></h2><pre><code class="language-javascript">myMap.keys()</code></pre>
<h2 id="example-4"><strong>Example</strong></h2><pre><code class="language-javascript">const myMap = new Map();
myMap.set('foo',1);
myMap.set('bar',2);
myMap.set('baz',3);
const iterator = myMap.keys();
console.log(iterator.next().value); // 'foo'
console.log(iterator.next().value); // 'bar'
console.log(iterator.next().value); // 'baz'</code></pre>
<h2 id="map-prototype-values"><strong>Map.prototype.values</strong></h2>
<p>Returns an iterator object that contains the values for each element in the <code>Map</code> object in the order they were inserted.</p>
<h2 id="syntax-5"><strong>Syntax</strong></h2><pre><code class="language-javascript">myMap.values()</code></pre>
<h2 id="example-5"><strong>Example</strong></h2><pre><code class="language-javascript">const myMap = new Map();
myMap.set('foo',1);
myMap.set('bar',2);
myMap.set('baz',3);
const iterator = myMap.values();
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3</code></pre>
<h2 id="map-prototype-delete"><strong>Map.prototype.delete</strong></h2>
<p>Removes the specified element from a <code>Map</code> object. Returns whether the key was found and successfully deleted.</p>
<h2 id="syntax-6"><strong>Syntax</strong></h2><pre><code class="language-javascript">myMap.delete(key);</code></pre>
<h2 id="parameters-3"><strong>Parameters</strong></h2>
<p><strong><strong>key</strong></strong> Required.</p>
<h2 id="example-6"><strong>Example</strong></h2><pre><code class="language-javascript">const myMap = new Map();
myMap.set('foo',1);
myMap.set('bar',2);
myMap.set('baz',3);
myMap.size(); // 3
myMap.has('foo'); // true;
myMap.delete('foo');  // Returns true. Successfully removed.
myMap.size(); // 2
myMap.has('foo');    // Returns false. The "foo" element is no longer present.</code></pre>
<h2 id="map-prototype-entries"><strong>Map.prototype.entries</strong></h2>
<p>Returns a new <code>Iterator</code> object that contains the <code>[key, value]</code> pairs for each element in the <code>Map</code> object in insertion order.</p>
<h2 id="syntax-7"><strong>Syntax</strong></h2><pre><code class="language-javascript">myMap.entries()</code></pre>
<h2 id="example-7"><strong>Example</strong></h2><pre><code class="language-javascript">const myMap = new Map();
myMap.set('foo',1);
myMap.set('bar',2);
myMap.set('baz',3);
const iterator = myMap.entries();
console.log(iterator.next().value); // ['foo', 1]
console.log(iterator.next().value); // ['bar', 2]
console.log(iterator.next().value); // ['baz', 3]</code></pre>
<h2 id="map-prototype-clear"><strong>Map.prototype.clear</strong></h2>
<p>Removes all elements from a <code>Map</code> object and returns <code>undefined</code>.</p>
<h2 id="syntax-8"><strong>Syntax</strong></h2><pre><code class="language-javascript">myMap.clear();</code></pre>
<h2 id="example-8"><strong>Example</strong></h2><pre><code class="language-javascript">const myMap = new Map();
myMap.set('foo',1);
myMap.set('bar',2);
myMap.set('baz',3);
myMap.size(); // 3
myMap.has('foo'); // true;
myMap.clear();
myMap.size(); // 0
myMap.has('foo'); // false</code></pre>
<h2 id="map-prototype-has"><strong>Map.prototype.has</strong></h2>
<p>Given a <code>Map</code> with elements inside, the <code>has()</code> function allows you to determine whether or not an element exists inside the Map, based on a key that you pass.</p>
<p>The <code>has()</code> function returns a <em><code>Boolean</code> primitive</em> (either <code>true</code> or <code>false</code>), which indicates that the Map contains the element or not.</p>
<p>You pass a <code>key</code> parameter to the <code>has()</code> function, which will be used to look for an element with that key inside the Map.</p>
<p>Example:</p><pre><code class="language-js">// A simple Map
const campers = new Map();
// add some elements to the map
// each element's key is 'camp' and a number
campers.set('camp1', 'Bernardo');
campers.set('camp2', 'Andrea');
campers.set('camp3', 'Miguel');
// Now I want to know if there's an element
// with 'camp4' key:
campers.has('camp4');
// output is `false`</code></pre>
<p>The <code>campers</code> Map does not currently have an element with a <code>'camp4'</code> key. Therefore, the <code>has('camp4')</code> function call will return <code>false</code>.</p><pre><code class="language-js">// If we add an element with the 'camp4' key to the map
campers.set('camp4', 'Ana');
// and try looking for that key again
campers.has('camp4');
// output is `true`</code></pre>
<p>Since the map now does have an element with a <code>'camp4'</code> key, the <code>has('camp4')</code> function call will return <code>true</code> this time!</p>
<p>In a more real-world scenario, you might not manually add the elements to the Map yourself, so the <code>has()</code> function would become really useful in those cases.</p>
<h2 id="map-prototype-foreach"><strong>Map.prototype.forEach</strong></h2>
<p>Executes the passed function on each key-value pair in the <code>Map</code> object. Returns <code>undefined</code>.</p>
<h2 id="syntax-9"><strong>Syntax</strong></h2><pre><code class="language-javascript">myMap.forEach(callback, thisArg)</code></pre>
<h2 id="parameters-4"><strong>Parameters</strong></h2>
<ul>
<li><strong><strong>callback</strong></strong> Function to execute for each element. </li>
<li><strong><strong>thisArg</strong></strong> Value to use as this when executing callback.</li>
</ul>
<h2 id="example-9"><strong>Example</strong></h2><pre><code class="language-javascript">const myMap = new Map();
myMap.set('foo',1);
myMap.set('bar',2);
myMap.set('baz',3);
function valueLogger(value) {
console.log(`${value}`);
}
myMap.forEach(valueLogger);
// 1
// 2
// 3</code></pre>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
