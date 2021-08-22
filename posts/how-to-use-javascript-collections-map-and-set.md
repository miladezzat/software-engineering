---
card: "/images/default.jpg"
tags: [JavaScript]
description: "In JavaScript, objects are used to store multiple values as a"
author: "Milad E. Fahmy"
title: "How to Use JavaScript Collections – Map and Set"
created: "2021-08-16T10:04:34+02:00"
modified: "2021-08-16T10:04:34+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-data-structures tag-programming tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to Use JavaScript Collections – Map and Set</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/09/cover-5.png 300w,
/news/content/images/size/w600/2020/09/cover-5.png 600w,
/news/content/images/size/w1000/2020/09/cover-5.png 1000w,
/news/content/images/size/w2000/2020/09/cover-5.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/09/cover-5.png" alt="How to Use JavaScript Collections – Map and Set">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In JavaScript, <code>objects</code> are used to store multiple values as a complex data structure.</p><p>An object is created with curly braces <code>{…}</code> and a list of properties. A property is a key-value pair where the <code>key</code> must be a string and the <code>value</code> can be of any type.</p><p>On the other hand, <code>arrays</code> are an ordered collection that can hold data of any type. In JavaScript, arrays are created with square brackets <code>[...]</code> and allow duplicate elements.</p><p>Until ES6 (ECMAScript 2015), JavaScript <code>objects</code> and <code>arrays</code> were the most important data structures to handle collections of data. The developer community didn't have many choices outside of that. Even so, a combination of objects and arrays was able to handle data in many scenarios.</p><p>However, there were a few shortcomings,</p><ul><li>Object keys can only be of type <code>string</code>.</li><li>Objects don't maintain the order of the elements inserted into them.</li><li>Objects lack some useful methods, which makes them difficult to use in some situations. For example, you can't compute the size (<code>length</code>) of an object easily. Also, enumerating an object is not that straightforward.</li><li>Arrays are collections of elements that allow duplicates. Supporting arrays that only have distinct elements requires extra logic and code.</li></ul><p>With the introduction of ES6, we got two new data structures that address the shortcomings mentioned above: <code>Map</code> and <code>Set</code>. In this article, we will look at both closely and understand how to use them in different situations.</p><h2 id="map-in-javascript">Map in JavaScript</h2><p><code>Map</code> is a collection of key-value pairs where the key can be of any type. <code>Map</code> remembers the original order in which the elements were added to it, which means data can be retrieved in the same order it was inserted in.</p><p>In other words, <code>Map</code> has characteristics of both <code>Object</code> and <code>Array</code>:</p><ul><li>Like an object, it supports the key-value pair structure.</li><li>Like an array, it remembers the insertion order.</li></ul><h3 id="how-to-create-and-initialize-a-map-in-javascript"><strong>How to Create and Initialize a Map in JavaScript</strong></h3><p>A new <code>Map</code> can be created like this:</p><pre><code class="language-js">const map = new Map();</code></pre><p>Which returns an empty <code>Map</code>:</p><pre><code class="language-shell">Map(0) {}</code></pre><p>Another way of creating a <code>Map</code> is with initial values. Here's how to create a <code>Map</code> with three key-value pairs:</p><pre><code class="language-js">const freeCodeCampBlog = new Map([
['name', 'freeCodeCamp'],
['type', 'blog'],
['writer', 'Tapas Adhikary'],
]);</code></pre><p>Which returns a <code>Map</code> with three elements:</p><pre><code class="language-shell">Map(3) {"name" =&gt; "freeCodeCamp", "type" =&gt; "blog", "writer" =&gt; "Tapas Adhikary"}</code></pre><h3 id="how-to-add-values-to-a-map-in-javascript"><strong>How to Add values to a Map in JavaScript</strong></h3><p>To add value to a Map, use the <code>set(key, value)</code> method.</p><p>The <code>set(key, value)</code> method takes two parameters, <code>key</code> and <code>value</code>, where the key and value can be of any type, a primitive (<code>boolean</code>, <code>string</code>, <code>number</code>, etc.) or an object:</p><pre><code class="language-js">// create a map
const map = new Map();
// Add values to the map
map.set('name', 'freeCodeCamp');
map.set('type', 'blog');
map.set('writer', 'Tapas Adhikary');</code></pre><p>Output:</p><pre><code class="language-shell">Map(3) {"name" =&gt; "freeCodeCamp", "type" =&gt; "blog", "writer" =&gt; "Tapas Adhikary"}</code></pre><p>Please note, if you use the same key to add a value to a <code>Map</code> multiple times, it'll always replace the previous value:</p><pre><code class="language-js">// Add a different writer
map.set('writer', 'Someone else!');</code></pre><p>So the output would be:</p><pre><code class="language-shell">Map(3)
{"name" =&gt; "freeCodeCamp", "type" =&gt; "blog", "writer" =&gt; "Someone else!"}</code></pre><h3 id="how-to-get-values-from-a-map-in-javascript"><strong>How to Get values from a Map in JavaScript</strong></h3><p>To get a value from a <code>Map</code>, use the <code>get(key)</code> method:</p><pre><code class="language-js">map.get('name'); // returns freeCodeCamp</code></pre><h3 id="all-about-map-keys-in-javascript"><strong>All About Map Keys in JavaScript</strong></h3><p><code>Map</code> keys can be of any type, a primitive, or an object. This is one of the major differences between <code>Map</code> and regular JavaScript objects where the key can only be a string:</p><pre><code class="language-js">// create a Map
const funMap = new Map();
funMap.set(360, 'My House Number'); // number as key
funMap.set(true, 'I write blogs!'); // boolean as key
let obj = {'name': 'tapas'}
funMap.set(obj, true); // object as key
console.log(funMap);</code></pre><p>Here is the output:</p><pre><code class="language-shell">Map(3)
{
360 =&gt; "My House Number",
true =&gt; "I write blogs!",
{…} =&gt; true
}</code></pre><p>A regular JavaScript object always treats the key as a string. Even when you pass it a primitive or object, it internally converts the key into a string:</p><pre><code class="language-js">// Create an empty object
const funObj = {};
// add a property. Note, passing the key as a number.
funObj[360] = 'My House Number';
// It returns true because the number 360 got converted into the string '360' internally!
console.log(funObj[360] === funObj['360']);</code></pre><h3 id="map-properties-and-methods-in-javascript"><strong>Map Properties and Methods in JavaScript</strong></h3><p>JavaScript's <code>Map</code> has in-built properties and methods that make it easy to use. Here are some of the common ones:</p><ul><li>Use the <code>size</code> property to know how many elements are in a <code>Map</code>:</li><li>Search an element with the <code>has(key)</code> method:</li><li>Remove an element with the <code>delete(key)</code> method:</li><li>Use the <code>clear()</code> method to remove all the elements from the <code>Map</code> at once:</li></ul><pre><code class="language-js">console.log('size of the map is', map.size);</code></pre><pre><code class="language-js">// returns true, if map has an element with the key, 'John'
console.log(map.has('John'));
// returns false, if map doesn't have an element with the key, 'Tapas'
console.log(map.has('Tapas')); </code></pre><pre><code class="language-js">map.delete('Sam'); // removes the element with key, 'Sam'.</code></pre><pre><code class="language-js">// Clear the map by removing all the elements
map.clear();
map.size // It will return, 0
</code></pre><h3 id="mapiterator-keys-values-and-entries-in-javascript"><strong>MapIterator: keys(), values(), and entries() in JavaScript</strong></h3><p>The methods <code>keys()</code>, <code>values()</code> and <code>entries()</code> methods return a <code>MapIterator</code>, which is excellent because you can use a <code>for-of</code> or <code>forEach</code> loop directly on it.</p><p>First, create a simple <code>Map</code>:</p><pre><code class="language-js">const ageMap = new Map([
['Jack', 20],
['Alan', 34],
['Bill', 10],
['Sam', 9]
]);</code></pre><ul><li>Get all the keys:</li><li>Get all the values:</li><li>Get all the entries (key-value pairs):</li></ul><pre><code class="language-js">console.log(ageMap.keys());
// Output:
// MapIterator {"Jack", "Alan", "Bill", "Sam"}</code></pre><pre><code class="language-js">console.log(ageMap.values());
// Output
// MapIterator {20, 34, 10, 9}</code></pre><pre><code class="language-js">console.log(ageMap.entries());
// Output
// MapIterator {"Jack" =&gt; 20, "Alan" =&gt; 34, "Bill" =&gt; 10, "Sam" =&gt; 9}</code></pre><h3 id="how-to-iterate-over-a-map-in-javascript"><strong>How to Iterate Over a Map in JavaScript</strong></h3><p>You can use either the <code>forEach</code> or <code>for-of</code> loop to iterate over a <code>Map</code>:</p><pre><code class="language-js">// with forEach
ageMap.forEach((value, key) =&gt; {
console.log(`${key} is ${value} years old!`);
});
// with for-of
for(const [key, value] of ageMap) {
console.log(`${key} is ${value} years old!`);
}</code></pre><p>The output is going to be the same in both cases:</p><pre><code class="language-shell">Jack is 20 years old!
Alan is 34 years old!
Bill is 10 years old!
Sam is 9 years old!</code></pre><h3 id="how-to-convert-an-object-into-a-map-in-javascript"><strong>How to Convert an Object into a Map in JavaScript</strong></h3><p>You may encounter a situation where you need to convert an <code>object</code> to a <code>Map</code>-like structure. You can use the method <code>entries</code> of <code>Object</code> to do that:</p><pre><code class="language-js">const address = {
'Tapas': 'Bangalore',
'James': 'Huston',
'Selva': 'Srilanka'
};
const addressMap = new Map(Object.entries(address));</code></pre><h3 id="how-to-convert-a-map-into-an-object-in-javascript"><strong>How to Convert a Map into an Object in JavaScript</strong></h3><p>If you want to do the reverse, you can use the <code>fromEntries</code> method:</p><pre><code class="language-js">Object.fromEntries(map)</code></pre><h3 id="how-to-convert-a-map-into-an-array-in-javascript"><strong>How to Convert a Map into an Array in JavaScript</strong></h3><p>There are a couple of ways to convert a map into an array:</p><ul><li>Using <code>Array.from(map)</code>:</li><li>Using the spread operator:</li></ul><pre><code class="language-js">const map = new Map();
map.set('milk', 200);
map.set("tea", 300);
map.set('coffee', 500);
console.log(Array.from(map));</code></pre><pre><code class="language-js">console.log([...map]);</code></pre><h3 id="map-vs-object-when-should-you-use-them"><strong>Map vs. Object: When should you use them?</strong></h3><p><code>Map</code> has characteristics of both <code>object</code> and <code>array</code>. However, <code>Map</code> is more like an <code>object</code> than <code>array</code> due to the nature of storing data in the <code>key-value</code> format.</p><p>The similarity with objects ends here though. As you've seen, <code>Map</code> is different in a lot of ways. So, which one should you use, and when? How do you decide?</p><p>Use <code>Map</code> when:</p><ul><li>Your needs are not that simple. You may want to create keys that are non-strings. Storing an object as a key is a very powerful approach. <code>Map</code> gives you this ability by default.</li><li>You need a data structure where elements can be ordered. Regular objects do not maintain the order of their entries.</li><li>You are looking for flexibility without relying on an external library like lodash. You may end up using a library like lodash because we do not find methods like has(), values(), delete(), or a property like size with a regular object. Map makes this easy for you by providing all these methods by default.</li></ul><p>Use an object when:</p><ul><li>You do not have any of the needs listed above.</li><li>You rely on <code>JSON.parse()</code> as a <code>Map</code> cannot be parsed with it.</li></ul><h2 id="set-in-javascript">Set in JavaScript</h2><p>A <code>Set</code> is a collection of unique elements that can be of any type. <code>Set</code> is also an ordered collection of elements, which means that elements will be retrieved in the same order that they were inserted in.</p><p>A <code>Set</code> in JavaScript behaves the same way as a mathematical set.</p><h3 id="how-to-create-and-initialize-a-set-in-javascript">How to Create and Initialize a Set in JavaScript</h3><p>A new <code>Set</code> can be created like this:</p><pre><code class="language-js">const set = new Set();
console.log(set);</code></pre><p>And the output will be an empty <code>Set</code>:</p><pre><code class="language-shell">Set(0) {}</code></pre><p>Here's how to create a <code>Set</code> with some initial values:</p><pre><code class="language-js">const fruteSet = new Set(['🍉', '🍎', '🍈', '🍏']);
console.log(fruteSet);</code></pre><p>Output:</p><pre><code class="language-shell">Set(4) {"🍉", "🍎", "🍈", "🍏"}</code></pre><h3 id="set-properties-and-methods-in-javascript"><strong>Set Properties and Methods in JavaScript</strong></h3><p><code>Set</code> has methods to add an element to it, delete elements from it, check if an element exists in it, and to clear it completely:</p><ul><li>Use the <code>size</code> property to know the size of the <code>Set</code>. It returns the number of elements in it:</li><li>Use the <code>add(element)</code> method to add an element to the <code>Set</code>:</li></ul><pre><code class="language-js">set.size</code></pre><pre><code class="language-js">// Create a set - saladSet
const saladSet = new Set();
// Add some vegetables to it
saladSet.add('🍅'); // tomato
saladSet.add('🥑'); // avocado
saladSet.add('🥕'); // carrot
saladSet.add('🥒'); // cucumber
console.log(saladSet);
// Output
// Set(4) {"🍅", "🥑", "🥕", "🥒"}</code></pre><p>I love cucumbers! How about adding one more?</p><p>Oh no, I can't – <code>Set</code> is a collection of <em><em>unique</em></em> elements:</p><pre><code class="language-js">saladSet.add('🥒');
console.log(saladSet);</code></pre><p>The output is the same as before – nothing got added to the <code>saladSet</code>.</p><ul><li>Use the <code>has(element)</code> method to search if we have a carrot (🥕) or broccoli (🥦) in the <code>Set</code>:</li><li>Use the <code>delete(element)</code> method to remove the avocado(🥑) from the <code>Set</code>:</li></ul><pre><code class="language-js">// The salad has a🥕, so returns true
console.log('Does the salad have a carrot?', saladSet.has('🥕'));
// The salad doesn't have a🥦, so returns false
console.log('Does the salad have broccoli?', saladSet.has('🥦'));</code></pre><pre><code class="language-js">saladSet.delete('🥑');
console.log('I do not like 🥑, remove from the salad:', saladSet);</code></pre><p>Now our salad <code>Set</code> is as follows:</p><pre><code class="language-shell">Set(3) {"🍅", "🥕", "🥒"}</code></pre><ul><li>Use the <code>clear()</code> method to remove all elements from a <code>Set</code>:</li></ul><pre><code class="language-js">saladSet.clear();</code></pre><h3 id="how-to-iterate-over-a-set-in-javascript"><strong><strong><strong>How to Iterate Over a Set</strong></strong> in JavaScript</strong></h3><p><code>Set</code> has a method called <code>values()</code> which returns a <code>SetIterator</code> to get all its values:</p><pre><code class="language-js">// Create a Set
const houseNos = new Set([360, 567, 101]);
// Get the SetIterator using the `values()` method
console.log(houseNos.values());</code></pre><p>Output:</p><pre><code class="language-js">SetIterator {360, 567, 101}</code></pre><p>We can use a <code>forEach</code> or <code>for-of</code> loop on this to retrieve the values.</p><p>Interestingly, JavaScript tries to make <code>Set</code> compatible with <code>Map</code>. That's why we find two of the same methods as <code>Map</code>, <code>keys()</code> and <code>entries()</code>.</p><p>As <code>Set</code> doesn't have keys, the <code>keys()</code> method returns a <code>SetIterator</code> to retrieve its values:</p><pre><code class="language-js">console.log(houseNos.keys());
// Output
// console.log(houseNos.keys());</code></pre><p>With <code>Map</code>, the <code>entries()</code> method returns an iterator to retrieve key-value pairs. Again there are no keys in a <code>Set</code>, so <code>entries()</code> returns a <code>SetIterator</code> to retrieve the value-value pairs:</p><pre><code class="language-js">console.log(houseNos.entries());
// Output
// SetIterator {360 =&gt; 360, 567 =&gt; 567, 101 =&gt; 101}</code></pre><h3 id="how-to-enumerate-over-a-set-in-javascript"><strong>How to Enumerate over a Set in JavaScript</strong></h3><p>We can enumerate over a Set using <code>forEach</code> and <code>for-of</code> loops:</p><pre><code class="language-js">// with forEach
houseNos.forEach((value) =&gt; {
console.log(value);
});
// with for-of
for(const value of houseNos) {
console.log(value);
}</code></pre><p>The output of both is:</p><pre><code class="language-shell">360
567
101</code></pre><h3 id="sets-and-arrays-in-javascript"><strong>Sets and Arrays in JavaScript</strong></h3><p>An array, like a <code>Set</code>, allows you to add and remove elements. But <code>Set</code> is quite different, and is not meant to replace arrays.</p><p>The major difference between an array and a <code>Set</code> is that arrays allow you to have duplicate elements. Also, some of the <code>Set</code> operations like <code>delete()</code> are faster than array operations like <code>shift()</code> or <code>splice()</code>.</p><p>Think of <code>Set</code> as an extension of a regular array, just with more muscles. The <code>Set</code> data structure is not a replacement of the <code>array</code>. Both can solve interesting problems.</p><h3 id="how-to-convert-a-set-into-an-array-in-javascript"><strong>How to Convert a Set into an array in JavaScript</strong></h3><p>Converting a <code>Set</code> into an array is simple:</p><pre><code class="language-js">const arr = [...houseNos];
console.log(arr);</code></pre><h3 id="unique-values-from-an-array-using-the-set-in-javascript"><strong>Unique values from an array using the Set in JavaScript</strong></h3><p>Creating a <code>Set</code> is a really easy way to remove duplicate values from an array:</p><pre><code class="language-js">// Create a mixedFruit array with a few duplicate fruits
const mixedFruit = ['🍉', '🍎', '🍉', '🍈', '🍏', '🍎', '🍈'];
// Pass the array to create a set of unique fruits
const mixedFruitSet = new Set(mixedFruit);
console.log(mixedFruitSet);</code></pre><p>Output:</p><pre><code class="language-shell">Set(4) {"🍉", "🍎", "🍈", "🍏"}</code></pre><h3 id="set-and-object-in-javascript"><strong>Set and Object in JavaScript</strong></h3><p>A <code>Set</code> can have elements of any type, even objects:</p><pre><code class="language-js">// Create a person object
const person = {
'name': 'Alex',
'age': 32
};
// Create a set and add the object to it
const pSet = new Set();
pSet.add(person);
person.name = 'Bob';
// Add the person object to the set again
pSet.add(person);
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
