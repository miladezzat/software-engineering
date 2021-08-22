---
card: "/images/default.jpg"
tags: [JavaScript]
description: Hash Tables are a data structure that allow you to create a l
author: "Milad E. Fahmy"
title: "JavaScript Hash Table – Associative Array Hashing in JS"
created: "2021-08-15T19:26:23+02:00"
modified: "2021-08-15T19:26:23+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-hash-tables tag-data-structures ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Hash Table – Associative Array Hashing in JS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/05/JavaScript-Hash-Table.png 300w,
/news/content/images/size/w600/2021/05/JavaScript-Hash-Table.png 600w,
/news/content/images/size/w1000/2021/05/JavaScript-Hash-Table.png 1000w,
/news/content/images/size/w2000/2021/05/JavaScript-Hash-Table.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/05/JavaScript-Hash-Table.png" alt="JavaScript Hash Table – Associative Array Hashing in JS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Hash Tables are a data structure that allow you to create a list of paired values. You can then retrieve a certain value by using the key for that value, which you put into the table beforehand.</p>
<p>A Hash Table transforms a key into an integer index using a hash function, and the index will decide where to store the key/value pair in memory:</p>
<figcaption>Hash table for storing phone books (from <a href="https://en.wikipedia.org/wiki/Hash_table">Wikipedia</a>)</figcaption>
</figure>
<p>You'll commonly use a Hash Table because of its fast search, insertion, and delete operations:</p>
<table>
<thead>
<tr>
<th style="text-align:center"></th>
<th style="text-align:center">Hash Table time complexity in Big O Notation</th>
<th style="text-align:center"></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">Algorithm</td>
<td style="text-align:center">Average</td>
<td style="text-align:center">Worst case</td>
</tr>
<tr>
<td style="text-align:center">Space</td>
<td style="text-align:center">O(n)</td>
<td style="text-align:center">O(n)</td>
</tr>
<tr>
<td style="text-align:center">Search</td>
<td style="text-align:center">O(1)</td>
<td style="text-align:center">O(n)</td>
</tr>
<tr>
<td style="text-align:center">Insert</td>
<td style="text-align:center">O(1)</td>
<td style="text-align:center">O(n)</td>
</tr>
<tr>
<td style="text-align:center">Delete</td>
<td style="text-align:center">O(1)</td>
<td style="text-align:center">O(n)</td>
</tr>
</tbody>
</table>
<p><small>Source from <a href="https://en.wikipedia.org/wiki/Hash_table">Wikipedia</a></small></p>
<p>This tutorial will help you understand Hash Table implementation in JavaScript as well as how you can build your own Hash Table class. </p>
<p>First, let's look at JavaScript's <code>Object</code> and <code>Map</code> classes.</p>
<h2 id="how-to-use-hash-tables-with-object-and-map-classes-in-javascript">How to Use Hash Tables with Object and Map Classes in JavaScript</h2>
<p>The most common example of a Hash Table in JavaScript is the <code>Object</code> data type, where you can pair the object's property value with a property key.</p>
<p>In the following example, the key <code>Nathan</code> is paired with the phone number value of <code>"555-0182"</code> and the key <code>Jane</code> is paired with the value <code>"315-0322"</code>:</p>
Nathan: "555-0182",
Jane: "315-0322"
}</code></pre>
<figcaption>JavaScript object is an example of Hash Table implementation</figcaption>
</figure>
<p>But JavaScript's <code>Object</code> type is a special kind of Hash Table implementation for two reasons:</p>
<ul>
<li>It has properties added by the <code>Object</code> class. Keys you input may conflict and overwrite default properties inherited from the class.</li>
<li>The size of the Hash Table is not tracked. You need to manually count how many properties are defined by the programmer instead of inherited from the prototype.</li>
</ul>
<p>For example, the <code>Object</code> prototype has the <code>hasOwnProperty()</code> method which allows you to check if a property is not inherited:</p>
obj.name = "Nathan";
console.log(obj.hasOwnProperty("name")); // true</code></pre>
<figcaption>JavaScript object inherited method call example</figcaption>
</figure>
<p>JavaScript doesn't block an attempt to overwrite the <code>hasOwnProperty()</code> method, which may cause an error like this:</p>
obj.name = "Nathan";
obj.hasOwnProperty = true;
console.log(obj.hasOwnProperty("name"));
// Error: obj.hasOwnProperty is not a function</code></pre>
<figcaption>JavaScript object inherited property gets overwritten</figcaption>
</figure>
<p>To handle these shortcomings, JavaScript created another implementation of the Hash Table data structure which is called <code>Map</code></p>
<p>Just like <code>Object</code>, <code>Map</code> allows you to store key-value pairs inside the data structure. Here's an example of <code>Map</code> in action:</p>
collection.set("Nathan", "555-0182");
collection.set("Jane", "555-0182");
console.log(collection.get("Nathan")); // 555-0182
console.log(collection.size); // 2</code></pre>
<figcaption>JavaScript Map class is another implementation of Hash Table</figcaption>
</figure>
<p>Unlike the <code>Object</code> type, <code>Map</code> requires you to use the <code>set()</code> and <code>get()</code> methods to define and retrieve any key-pair values that you want to be added to the data structure. </p>
<p>You also can't overwrite <code>Map</code> inherited properties. For example, the following code tried to overwrite the <code>size</code> property value to <code>false</code>:</p>
collection.set("Nathan", "555-0182");
collection["size"] = false;
console.log(collection.get("size")); // undefined
console.log(collection.size); // 1</code></pre>
<figcaption>Map type property can't be overwritten</figcaption>
</figure>
<p>As you can see from the code above, you can't add a new entry to the <code>Map</code> object without using the <code>set()</code> method.</p>
<p>The <code>Map</code> data structure is also iterable, which means you can loop over the data as follows:</p>
myMap.set("Nathan", "555-0182");
myMap.set("Jane", "315-0322");
for (let [key, value] of myMap) {
console.log(`${key} = ${value}`);
}</code></pre>
<figcaption>Iterating through a Map object</figcaption>
</figure>
<p>Now that you've learned how JavaScript implements Hash Tables in the form of <code>Object</code> and <code>Map</code> data structures, let's see how you can create your own Hash Table implementation next.</p>
<h2 id="how-to-implement-a-hash-table-data-structure-in-javascript">How to Implement a Hash Table Data Structure in JavaScript</h2>
<p>Although JavaScript already has two Hash Table implementations, writing your own Hash Table implementation is one of the most common JavaScript interview questions.</p>
<p>You can implement a Hash Table in JavaScript in three steps:</p>
<ul>
<li>Create a <code>HashTable</code> class with <code>table</code> and <code>size</code> initial properties</li>
<li>Add a <code>hash()</code> function to transform keys into indices</li>
<li>Add the <code>set()</code> and <code>get()</code> methods for adding and retrieving key/value pairs from the table.</li>
</ul>
<p>Alright, let's start with creating the <code>HashTable</code> class. The code below will create a <code>table</code> of buckets with the size of <code>127</code>:</p>
constructor() {
this.table = new Array(127);
this.size = 0;
}
}</code></pre>
<figcaption>HashTable class initial properties</figcaption>
</figure>
<p>All your key/value pairs will be stored inside the <code>table</code> property.</p>
<h3 id="how-to-write-the-hash-method">How to write the hash() method</h3>
<p>Next, you need to create the <code>hash()</code> method that will accept a <code>key</code> value and transform it into an index. </p>
<p>A simple way to create the hash would be to sum the ASCII code of the characters in the key using the <code>charCodeAt()</code> method as follows. Note that the method is named using <code>_</code> to indicate that it's a private class:</p><pre><code class="language-js">_hash(key) {
let hash = 0;
for (let i = 0; i &lt; key.length; i++) {
hash += key.charCodeAt(i);
}
return hash;
}</code></pre>
<p>But since the <code>HashTable</code> class only has 127 buckets, this means that the <code>_hash()</code> method must return a number between <code>0 and 127</code>.</p>
<p>To ensure that the hash value doesn't exceed the bucket size, you need to use the modulo operator as shown below:</p><pre><code class="language-js">_hash(key) {
let hash = 0;
for (let i = 0; i &lt; key.length; i++) {
hash += key.charCodeAt(i);
}
return hash % this.table.length;
}</code></pre>
<p> Now that you have the <code>_hash()</code> method completed, it's time to write the <code>set()</code> and <code>get()</code> methods.</p>
<h3 id="how-to-write-the-set-method">How to write the set() method</h3>
<p>To set the key/value pair in your Hash Table, you need to write a <code>set()</code> method that accepts &nbsp;<code>(key, value)</code> as its parameters:</p>
<ul>
<li>The <code>set()</code> method will call the <code>_hash()</code> method to get the <code>index</code> value. </li>
<li>The <code>[key, value]</code> pair will be assigned to the <code>table</code> at the specified <code>index</code></li>
<li>Then, the <code>size</code> property will be incremented by one</li>
</ul><pre><code class="language-js">set(key, value) {
const index = this._hash(key);
this.table[index] = [key, value];
this.size++;
}</code></pre>
<p>Now that the <code>set()</code> method is complete, let's write the <code>get()</code> method to retrieve a value by its key.</p>
<h3 id="how-to-write-the-get-method">How to write the get() method</h3>
<p>To get a certain value from the Hash Table, you need to write a <code>get()</code> method that accepts a <code>key</code> value as its parameter:</p>
<ul>
<li>The method will call the <code>_hash()</code> method to once again retrieve the table <code>index</code></li>
<li>Return the value stored at <code>table[index]</code></li>
</ul><pre><code class="language-js">get(key) {
const index = this._hash(key);
return this.table[index];
}</code></pre>
<p>This way, the <code>get()</code> method will return either the key/value pair back or <code>undefined</code> when there is no key/value pair stored in the specified <code>index</code>.</p>
<p>So far so good. Let's add another method to delete key/value pair from the Hash Table next.</p>
<h3 id="how-to-write-the-remove-method">How to write the remove() method</h3>
<p>To delete a key/value pair from the Hash Table, you need to write a <code>remove()</code> method that accepts a <code>key</code> value as its parameter:</p>
<ul>
<li>Retrieve the right <code>index</code> using the <code>_hash()</code> method</li>
<li>Check if the <code>table[index]</code> has a truthy value and the <code>length</code> property is greater than zero. Assign the <code>undefined</code> value to the right <code>index</code> and decrement the <code>size</code> property by one if it is.</li>
<li>If not, simply return <code>false</code></li>
</ul><pre><code class="language-js">remove(key) {
const index = this._hash(key);
if (this.table[index] &amp;&amp; this.table[index].length) {
this.table[index] = undefined;
this.size--;
return true;
} else {
return false;
}
}</code></pre>
<p>With that, you now have a working <code>remove()</code> method. Let's see if the <code>HashTable</code> class works properly.</p>
<h2 id="how-to-test-the-hash-table-implementation">How to Test the Hash Table Implementation</h2>
<p>It's time to test the Hash Table implementation. Here's the full code for the Hash Table implementation again:</p>
constructor() {
this.table = new Array(127);
this.size = 0;
}
_hash(key) {
let hash = 0;
for (let i = 0; i &lt; key.length; i++) {
hash += key.charCodeAt(i);
}
return hash % this.table.length;
}
set(key, value) {
const index = this._hash(key);
this.table[index] = [key, value];
this.size++;
}
get(key) {
const target = this._hash(key);
return this.table[target];
}
remove(key) {
const index = this._hash(key);
if (this.table[index] &amp;&amp; this.table[index].length) {
this.table[index] = [];
this.size--;
return true;
} else {
return false;
}
}
}</code></pre>
<figcaption>The HashTable implementation in JavaScript</figcaption>
</figure>
<p>To test the <code>HashTable</code> class, I'm going to create a new instance of the <code>class</code> and set some key/value pairs as shown below. The key/value pairs below are just arbitrary number values paired with country names without any special meaning:</p>
ht.set("Canada", 300);
ht.set("France", 100);
ht.set("Spain", 110);</code></pre>
<figcaption>Testing HashTable set() method</figcaption>
</figure>
<p>Then, let's try to retrieve them using the <code>get()</code> method:</p>
console.log(ht.get("France")); // [ 'France', 100 ]
console.log(ht.get("Spain")); // [ 'Spain', 110 ]</code></pre>
<figcaption>Testing HashTable get() method</figcaption>
</figure>
<p>Finally, let's try to delete one of these values with the <code>remove()</code> method:</p>
console.log(ht.get("Spain")); // undefined</code></pre>
<figcaption>Testing HashTable remove() method</figcaption>
</figure>
<p>Alright, all the methods are working as expected. Let's try another insertion with a new <code>HashTable</code> instance and retrieve those values:</p>
ht.set("Spain", 110);
ht.set("ǻ", 192);
console.log(ht.get("Spain")); // [ 'ǻ', 192 ]
console.log(ht.get("ǻ")); // [ 'ǻ', 192 ]</code></pre>
<figcaption>Hash Table index collision&nbsp;</figcaption>
</figure>
<p>Oops! Looks like we got into some trouble here. 😨</p>
<h2 id="how-to-handle-index-collision">How to Handle Index Collision</h2>
<p>Sometimes, the hash function in a Hash Table may return the same <code>index</code> number. In the test case above, the string <code>"Spain"</code> and <code>"ǻ"</code> <strong>both return the same <code>hash</code> value</strong> because the number <code>507</code> is the sum of both of their ASCII code.</p>
<p>The same <code>hash</code> value will cause the index to <em>collide</em>, overwriting the previous entry with the new one.</p>
<p>Right now, the data stored in our Hash Table implementation looks as follows:</p><pre><code class="language-js">[
[ "Spain", 110],
[ "France", 100]
]</code></pre>
<p>To handle the <code>index</code> number collision, you need to store the key/value pair in a second array so that the end result looks as follows:</p><pre><code class="language-js">[
[
[ "Spain", 110 ],
[ "ǻ", 192 ]
],
[
["France", 100]
],
]</code></pre>
<p>To create the second array, you need to update the <code>set()</code> method so that it will:</p>
<ul>
<li>Look to the <code>table[index]</code> and loop over the array values.</li>
<li>If the key at one of the arrays is equal to the <code>key</code> passed to the method, replace the value at index <code>1</code> and stop any further execution with the <code>return</code> statement.</li>
<li>If no matching <code>key</code> is found, push a new array of key and value to the second array.</li>
<li>Else, initialize a new array and push the key/value pair to the specified <code>index</code></li>
<li>Whenever a <code>push()</code> method is called, increment the <code>size</code> property by one.</li>
</ul>
<p>The complete <code>set()</code> method code will be as follows:</p><pre><code class="language-js">set(key, value) {
const index = this._hash(key);
if (this.table[index]) {
for (let i = 0; i &lt; this.table[index].length; i++) {
// Find the key/value pair in the chain
if (this.table[index][i][0] === key) {
this.table[index][i][1] = value;
return;
}
}
// not found, push a new key/value pair
this.table[index].push([key, value]);
} else {
this.table[index] = [];
this.table[index].push([key, value]);
}
this.size++;
}</code></pre>
<p>Next, update the <code>get()</code> method so that it will also check the second-level array with a <code>for</code> loop and return the right key/value pair:</p><pre><code class="language-js">get(key) {
const target = this._hash(key);
if (this.table[target]) {
for (let i = 0; i &lt; this.table.length; i++) {
if (this.table[target][i][0] === key) {
return this.table[target][i][1];
}
}
}
return undefined;
}</code></pre>
<p>Finally, you need to update the <code>remove()</code> method so that it will loop over the second-level array and remove the array with the right <code>key</code> value using the <code>splice()</code> method:</p><pre><code class="language-js">remove(key) {
const index = this._hash(key);
if (this.table[index] &amp;&amp; this.table[index].length) {
for (let i = 0; i &lt; this.table.length; i++) {
if (this.table[index][i][0] === key) {
this.table[index].splice(i, 1);
this.size--;
return true;
}
}
} else {
return false;
}
}</code></pre>
<p>With that, your <code>HashTable</code> class will be able to avoid any index number collision and store the key/value pair inside the second-level array.</p>
<p>As a bonus, let's add a <code>display()</code> method that will display all key/value pairs stored in the Hash Table. You just need to use the <code>forEach()</code> method to iterate over the table and <code>map()</code> the values to a string as shown below:</p><pre><code class="language-js">display() {
this.table.forEach((values, index) =&gt; {
const chainedValues = values.map(
([key, value]) =&gt; `[ ${key}: ${value} ]`
);
console.log(`${index}: ${chainedValues}`);
});
}</code></pre>
<p>Here's the complete <code>HashTable</code> class code again with the collision avoidance applied for your reference:</p>
constructor() {
this.table = new Array(127);
this.size = 0;
}
_hash(key) {
let hash = 0;
for (let i = 0; i &lt; key.length; i++) {
hash += key.charCodeAt(i);
}
return hash % this.table.length;
}
set(key, value) {
const index = this._hash(key);
if (this.table[index]) {
for (let i = 0; i &lt; this.table[index].length; i++) {
if (this.table[index][i][0] === key) {
this.table[index][i][1] = value;
return;
}
}
this.table[index].push([key, value]);
} else {
this.table[index] = [];
this.table[index].push([key, value]);
}
this.size++;
}
get(key) {
const index = this._hash(key);
if (this.table[index]) {
for (let i = 0; i &lt; this.table.length; i++) {
if (this.table[index][i][0] === key) {
return this.table[index][i][1];
}
}
}
return undefined;
}
remove(key) {
const index = this._hash(key);
if (this.table[index] &amp;&amp; this.table[index].length) {
for (let i = 0; i &lt; this.table.length; i++) {
if (this.table[index][i][0] === key) {
this.table[index].splice(i, 1);
this.size--;
return true;
}
}
} else {
return false;
}
}
display() {
this.table.forEach((values, index) =&gt; {
const chainedValues = values.map(
([key, value]) =&gt; `[ ${key}: ${value} ]`
);
console.log(`${index}: ${chainedValues}`);
});
}
}</code></pre>
<figcaption>Complete HashTable class implementation</figcaption>
</figure>
<p>You can test the implementation by creating a new <code>HashTable</code> instance and do some insertion and deletion:</p>
ht.set("France", 111);
ht.set("Spain", 150);
ht.set("ǻ", 192);
ht.display();
// 83: [ France: 111 ]
// 126: [ Spain: 150 ],[ ǻ: 192 ]
console.log(ht.size); // 3
ht.remove("Spain");
ht.display();
// 83: [ France: 111 ]
// 126: [ ǻ: 192 ]</code></pre>
<figcaption>Another HashTable test</figcaption>
</figure>
<p>Now there's no collision inside the <code>HashTable</code> instance. Great work!</p>
<h2 id="conclusion">Conclusion</h2>
<p>In this tutorial, you've learned what a Hash Table is and how JavaScript uses it to create the <code>Object</code> and <code>Map</code> data structure.</p>
<p>You've also learned how to implement your own <code>HashTable</code> class as well as how to prevent the Hash Table's key indices from colliding by using the chaining technique.</p>
<p>By using a Hash Table data structure, you will be able to create an associative array with fast search, insertion, and delete operations. 😉</p>
<h2 id="thanks-for-reading-this-tutorial"><strong><strong><strong><strong><strong><strong><strong>Thanks for reading this tutorial</strong></strong></strong></strong></strong></strong></strong></h2>
<p>If you want to learn more about JavaScript, you may want to check out my site at sebhastian.com, where I have published <a href="https://sebhastian.com/javascript-tutorials/">over 100 tutorials about programming with JavaScript</a>, all using easy-to-understand explanations and code examples.</p>
<p>The tutorials include String manipulation, Date manipulation, Array and Object methods, JavaScript algorithm solutions, and many more.</p>
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
