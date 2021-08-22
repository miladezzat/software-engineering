---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9c92740569d1a4ca32f7.jpg"
tags: [JavaScript]
description: Loops are used in JavaScript to perform repeated tasks based
author: "Milad E. Fahmy"
title: "JavaScript Loops Explained: For Loop, While Loop, Do...while Loop, and More"
created: "2021-08-15T19:30:41+02:00"
modified: "2021-08-15T19:30:41+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-loops tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Loops Explained: For Loop, While Loop, Do...while Loop, and More</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c92740569d1a4ca32f7.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c92740569d1a4ca32f7.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c92740569d1a4ca32f7.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c92740569d1a4ca32f7.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c92740569d1a4ca32f7.jpg" alt="JavaScript Loops Explained: For Loop, While Loop, Do...while Loop, and More">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>Loops are used in JavaScript to perform repeated tasks based on a condition. Conditions typically return <code>true</code> or <code>false</code> when analysed. A loop will continue running until the defined condition returns <code>false</code>.</p>
<p>The three most common types of loops are</p>
<ul>
<li><a href="http://forum.freecodecamp.com/t/javascript-for-loop/14666" rel="nofollow">for</a></li>
<li><a href="http://forum.freecodecamp.com/t/javascript-while-loop/14668" rel="nofollow">while</a></li>
<li><a href="http://forum.freecodecamp.com/t/javascript-for-loop/14662" rel="nofollow">do while</a></li>
</ul>
<p>You can type <code>js for</code>, <code>js while</code> or <code>js do while</code> to get more info on any of these. Let's look at them, and some variations, in more detail now.</p>
<h2 id="for-loop">for loop</h2>
<h3 id="syntax"><strong>Syntax</strong></h3><pre><code class="language-javascript">for ([initialization]); [condition]; [final-expression]) {
// statement
}</code></pre>
<p>The javascript <code>for</code> statement consists of three expressions and a statement:</p>
<h3 id="description">Description</h3>
<ul>
<li>initialization - Run before the first execution on the loop. This expression is commonly used to create counters. Variables created here are scoped to the loop. Once the loop has finished it’s execution they are destroyed.</li>
<li>condition - Expression that is checked prior to the execution of every iteration. If omitted, this expression evaluates to true. If it evaluates to true, the loop’s statement is executed. If it evaluates to false, the loop stops.</li>
<li>final-expression - Expression that is run after every iteration. Usually used to increment a counter. But it can be used to decrement a counter too.</li>
<li>statement - Code to be repeated in the loop</li>
</ul>
<p>any of these three expressions or the statement can be omitted. For loops are commonly used to count a certain number of iterations to repeat a statement. Use a <code>break</code> statement to exit the loop before the condition expression evaluates to false.</p>
<h3 id="common-pitfalls">Common Pitfalls</h3>
<p><strong><strong>Exceeding the bounds of an array</strong></strong></p>
<p>When indexing over an array many times it is easy to exceed the bounds of the array (ex. try to reference the 4th element of a 3 element array).</p><pre><code class="language-javascript">    // This will cause an error.
// The bounds of the array will be exceeded.
var arr = [ 1, 2, 3 ];
for (var i = 0; i &lt;= arr.length; i++) {
console.log(arr[i]);
}
output:
1
2
3
undefined</code></pre>
<p>There are two ways to fix this code. Set the condition to either <code>i &lt; arr.length</code> or <code>i &lt;= arr.length - 1</code></p>
<h3 id="examples"><strong>Examples</strong></h3>
<p>Iterate through integers from 0-8</p><pre><code class="language-javascript">for (var i = 0; i &lt; 9; i++) {
console.log(i);
}
output:
0
1
2
3
4
5
6
7
8</code></pre>
<p>Break out of a loop before condition expression is false</p><pre><code class="language-javascript">for (var elephant = 1; elephant &lt; 10; elephant+=2) {
if (elephant === 7) {
break;
}
console.info('elephant is ' + elephant);
}
output:
elephant is 1
elephant is 3
elephant is 5</code></pre>
<h2 id="for-in-loop">for...in loop</h2>
<p>The <code>for...in</code> statement iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed.</p><pre><code class="language-text">for (variable in object) {
...
}</code></pre>
<p>Required/OptionalParameterDescriptionRequiredVariableA different property name is assigned to variable on each iteration.OptionalObjectObject whose enumerable properties are iterated.</p>
<h3 id="examples-1">Examples</h3><pre><code class="language-text">// Initialize object.
a = { "a": "Athens", "b": "Belgrade", "c": "Cairo" }
// Iterate over the properties.
var s = ""
for (var key in a) {
s += key + ": " + a[key];
s += "&lt;br /&gt;";
}
document.write (s);
// Output:
// a: Athens
// b: Belgrade
// c: Cairo
// Initialize the array.
var arr = new Array("zero", "one", "two");
// Add a few expando properties to the array.
arr["orange"] = "fruit";
arr["carrot"] = "vegetable";
// Iterate over the properties and elements.
var s = "";
for (var key in arr) {
s += key + ": " + arr[key];
s += "&lt;br /&gt;";
}
document.write (s);
// Output:
//   0: zero
//   1: one
//   2: two
//   orange: fruit
//   carrot: vegetable
// Efficient way of getting an object's keys using an expression within the for-in loop's conditions
var myObj = {a: 1, b: 2, c:3}, myKeys = [], i=0;
for (myKeys[i++] in myObj);
document.write(myKeys);
//Output:
//   a
//   b
//   c</code></pre>
<h2 id="for-of-loop">for...of loop</h2>
<p>The <code>for...of</code> statement creates a loop iterating over iterable objects (including Array, Map, Set, Arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.</p><pre><code class="language-javascript">    for (variable of object) {
statement
}</code></pre>
<p>DescriptionvariableOn each iteration a value of a different property is assigned to variable.objectObject whose enumerable properties are iterated.</p>
<h3 id="examples-2">Examples</h3>
<h3 id="array"><strong>Array</strong></h3><pre><code class="language-javascript">    let arr = [ "fred", "tom", "bob" ];
for (let i of arr) {
console.log(i);
}
// Output:
// fred
// tom
// bob</code></pre>
<h3 id="map-function map() { [native code] }1"><strong>Map</strong></h3><pre><code class="language-javascript">    var m = new Map();
m.set(1, "black");
m.set(2, "red");
for (var n of m) {
console.log(n);
}
// Output:
// 1,black
// 2,red</code></pre>
<h3 id="set"><strong>Set</strong></h3><pre><code class="language-javascript">    var s = new Set();
s.add(1);
s.add("red");
for (var n of s) {
console.log(n);
}
// Output:
// 1
// red</code></pre>
<h3 id="arguments-object"><strong>Arguments object</strong></h3><pre><code class="language-javascript">    // your browser must support for..of loop
// and let-scoped variables in for loops
function displayArgumentsObject() {
for (let n of arguments) {
console.log(n);
}
}
displayArgumentsObject(1, 'red');
// Output:
// 1
// red</code></pre>
<h2 id="while-loop">while loop</h2>
<p>The while loop starts by evaluating the condition. If the condition is true, the statement(s) is/are executed. If the condition is false, the statement(s) is/are not executed. After that, while loop ends.</p>
<p>Here is the <strong><strong>syntax</strong></strong> for while loop:</p>
<h3 id="syntax-">Syntax:</h3><pre><code class="language-text">while (condition)
{
statement(s);
}</code></pre>
<p><em>statement(s):</em> A statement that is executed as long as the condition evaluates to true.</p>
<p><em>condition:</em> Here, condition is a Boolean expression which is evaluated before each pass through the loop. If this condition evaluates to true, statement(s) is/are executed. When condition evaluates to false, execution continues with the statement after the while loop.</p>
<h3 id="example-">Example:</h3><pre><code class="language-text">    var i = 1;
while (i &lt; 10)
{
console.log(i);
i++; // i=i+1 same thing
}
Output:
1
2
3
4
5
6
7
8
9</code></pre>
<h3 id="how-to-iterate-with-javascript-while-loops">How to Iterate with JavaScript While Loops</h3>
<p>While loops will run as long as the condition inside the ( ) is true. Example:</p><pre><code class="language-javascript">while(condition){
code...
}</code></pre>
<p><strong>Hint 1:</strong></p>
<p>Use a iterator variable such as i in your condition</p><pre><code class="language-javascript">var i = 0;
while(i &lt;= 4){
}</code></pre>
<h3 id="spoiler-alert-solution-ahead-">Spoiler Alert Solution Ahead!</h3>
<p><strong>Solution</strong>:</p><pre><code class="language-javascript">// Setup
var myArray = [];
// Only change code below this line.
var i = 0;
while (i &lt;= 4){
myArray.push(i);
i++;
}</code></pre>
<h2 id="do-while-loop">Do...while loop</h2>
<p>The <code>do...while</code> loop is closely related to <a href="http://forum.freecodecamp.com/t/javascript-while-loop/14668" rel="nofollow"><code>while</code></a> loop. In the do while loop, the condition is checked at the end of the loop.</p>
<p>Here is the <strong><strong>syntax</strong></strong> for <code>do...while</code> loop:</p>
<h3 id="syntax--1">Syntax:</h3><pre><code class="language-text"> do {
*Statement(s);*
} while (*condition*);</code></pre>
<p><strong><strong>statement(s):</strong></strong> A statement that is executed <strong><strong>at least once</strong></strong> before the condition or Boolean expression is evaluated and is re-executed each time the condition evaluates to true.</p>
<p><strong><strong>condition:</strong></strong> Here, a condition is a <a>Boolean expression</a>. If Boolean expression evaluates to true, the statement is executed again. When Boolean expression evaluates to false, the loops ends.</p>
<h3 id="example--1">Example:</h3><pre><code class="language-text">var i = 0;
do {
i = i + 1;
console.log(i);
} while (i &lt; 5);
Output:
1
2
3
4
5</code></pre>
<h3 id="how-to-iterate-with-javascript-do-while-loops">How to Iterate with JavaScript Do…While Loops</h3>
<ul>
<li><code>Do...While</code> loops makes sure that the code is executed at least once, and after the execution, if the condition inside the <code>while()</code> is <strong><strong>true</strong></strong>, it continues with the loop, otherwise it stop.</li>
</ul>
<p><strong>Solution:</strong></p><pre><code class="language-javascript">var myArray = [];
var i = 10;
do {
myArray.push(i);
i++;
} while(i &lt;= 10);</code></pre>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
