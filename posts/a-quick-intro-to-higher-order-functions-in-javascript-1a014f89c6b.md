---
card: "https://cdn-media-1.freecodecamp.org/images/1*JyhQls2zLuu22yrnsk6mcA.png"
tags: [JavaScript]
description: "A function that accepts and/or returns another function is ca"
author: "Milad E. Fahmy"
title: "A quick intro to Higher-Order Functions in JavaScript"
created: "2021-08-16T11:31:52+02:00"
modified: "2021-08-16T11:31:52+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-technology tag-react tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">A quick intro to Higher-Order Functions in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*JyhQls2zLuu22yrnsk6mcA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*JyhQls2zLuu22yrnsk6mcA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*JyhQls2zLuu22yrnsk6mcA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*JyhQls2zLuu22yrnsk6mcA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*JyhQls2zLuu22yrnsk6mcA.png" alt="A quick intro to Higher-Order Functions in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>A function that accepts and/or returns another function is called a <strong>higher-order function</strong>.</p>
<p>It’s <em>higher-order</em> because instead of strings, numbers, or booleans, it goes <em>higher</em> to operate on functions. Pretty meta.</p>
<p>With functions in JavaScript, you can</p>
<ul>
<li>Store them as variables</li>
<li>Use them in arrays</li>
<li>Assign them as object properties (methods)</li>
<li>Pass them as arguments</li>
<li>Return them from other functions</li>
</ul>
<p><em>Like any other piece of data</em>. That’s the key here.</p>
<h3 id="functionsoperateondata">Functions Operate on Data</h3>
<h4 id="stringsaredata">Strings Are Data</h4>
<pre><code class="language-js">sayHi = (name) =&gt; `Hi, ${name}!`;
result = sayHi('User');
console.log(result); // 'Hi, User!'
</code></pre>
<h4 id="numbersaredata">Numbers Are Data</h4>
<pre><code class="language-js">double = (x) =&gt; x * 2;
result = double(4);
console.log(result); // 8
</code></pre>
<h4 id="booleansaredata">Booleans Are Data</h4>
<pre><code class="language-js">getClearance = (allowed) =&gt; (allowed ? 'Access granted' : 'Access denied');
result1 = getClearance(true);
result2 = getClearance(false);
console.log(result1); // 'Access granted'
console.log(result2); // 'Access denied'
</code></pre>
<h4 id="objectsaredata">Objects Are Data</h4>
<pre><code class="language-js">getFirstName = (obj) =&gt; obj.firstName;
result = getFirstName({
firstName: 'Yazeed'
});
console.log(result); // 'Yazeed'
</code></pre>
<h4 id="arraysaredata">Arrays Are Data</h4>
<pre><code class="language-js">len = (array) =&gt; array.length;
result = len([1, 2, 3]);
console.log(result); // 3
</code></pre>
<p>These 5 types are <a href="https://en.wikipedia.org/wiki/First-class_citizen">first-class citizens</a> in every mainstream language.</p>
<p>What makes them first-class? You can pass them around, store them in variables and arrays, use them as inputs for calculations. You can use them like <em>any piece of data</em>.</p>
<h3 id="functionscanbedatatoo">Functions Can Be Data Too</h3>
<p><img src="https://cdn-media-1.freecodecamp.org/images/0*wy_bAnMM-coF9cep.png" alt=""></p>
<h4 id="functionsasarguments">Functions as Arguments</h4>
<pre><code class="language-js">isEven = (num) =&gt; num % 2 === 0;
result = [1, 2, 3, 4].filter(isEven);
console.log(result); // [2, 4]
</code></pre>
<p>See how <code>filter</code> uses <code>isEven</code> to decide what numbers to keep? <code>isEven</code>, <em>a function</em>, was a parameter <em>to another function</em>.</p>
<h4 id="returningfunctions">Returning Functions</h4>
<pre><code class="language-js">add = (x) =&gt; (y) =&gt; x + y;
</code></pre>
<p><code>add</code> requires two parameters, but not all at once. It’s a function asking for just <code>x</code>, that returns a function asking for just <code>y</code>.</p>
<p>Again, this is only possible because JavaScript allows functions to be a return value — just like strings, numbers, booleans, etc.</p>
<p>You can still supply <code>x</code> and <code>y</code> immediately, if you wish, with a double invocation</p>
<pre><code class="language-js">result = add(10)(20);
</code></pre>
<pre><code class="language-js">console.log(result); // 30
</code></pre>
<p>Or <code>x</code> now and <code>y</code> later:</p>
<pre><code class="language-js">add10 = add(10);
result = add10(20);
console.log(result); // 30
</code></pre>
<p>Let’s rewind that last example. <code>add10</code> is the result of calling <code>add</code> with one parameter. Try logging it in the console.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*BaPwZXD00kXBtTy7QV_tzA.png" alt=""></p>
<p><code>add10</code> is a function that takes a <code>y</code> and returns <code>x + y</code>. After you supply <code>y</code>, it hurries to calculate and return your end result.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*kg9Sv6gQExV_llaE3GUI-g.png" alt=""></p>
<h3 id="greaterreusability">Greater Reusability</h3>
<p>Probably the greatest benefit of HOFs is greater reusability. Without them, JavaScript’s premiere Array methods — <code>map</code>, <code>filter</code>, and <code>reduce</code> — wouldn’t exist!</p>
<p>Here’s a list of users. We’re going to do some calculations with their information.</p>
<pre><code class="language-js">users = [
{
name: 'Yazeed',
age: 25
},
{
name: 'Sam',
age: 30
},
{
name: 'Bill',
age: 20
}
];
</code></pre>
<h4 id="map">Map</h4>
<p>Without higher-order functions, we’d always need loops to mimic <code>map</code>'s functionality.</p>
<pre><code class="language-js">getName = (user) =&gt; user.name;
usernames = [];
for (let i = 0; i &lt; users.length; i++) {
const name = getName(users[i]);
usernames.push(name);
}
console.log(usernames);
// ["Yazeed", "Sam", "Bill"]
</code></pre>
<p>Or we could do this!</p>
<pre><code class="language-js">usernames = users.map(getName);
console.log(usernames);
// ["Yazeed", "Sam", "Bill"]
</code></pre>
<h4 id="filter">Filter</h4>
<p>In a HOF-less world, we’d still need loops to recreate <code>filter</code>'s functionality too.</p>
<pre><code class="language-js">startsWithB = (string) =&gt; string.toLowerCase().startsWith('b');
namesStartingWithB = [];
for (let i = 0; i &lt; users.length; i++) {
if (startsWithB(users[i].name)) {
namesStartingWithB.push(users[i]);
}
}
console.log(namesStartingWithB);
// [{ "name": "Bill", "age": 20 }]
</code></pre>
<p>Or we could do this!</p>
<pre><code class="language-js">namesStartingWithB = users.filter((user) =&gt; startsWithB(user.name));
console.log(namesStartingWithB);
// [{ "name": "Bill", "age": 20 }]
</code></pre>
<h4 id="reduce">Reduce</h4>
<p>Yup, reduce too… Can’t do much cool stuff without higher-order functions!! ?</p>
<pre><code class="language-js">total = 0;
for (let i = 0; i &lt; users.length; i++) {
total += users[i].age;
}
console.log(total);
// 75
</code></pre>
<p>How’s this?</p>
<pre><code class="language-js">totalAge = users.reduce((total, user) =&gt; user.age + total, 0);
console.log(totalAge);
// 75
</code></pre>
<h3 id="summary">Summary</h3>
<ul>
<li>Strings, numbers, bools, arrays, and objects can be stored as variables, arrays, and properties or methods.</li>
<li>JavaScript treats functions the same way.</li>
<li>This allows for functions that operate on other functions: <strong>higher-order functions</strong>.</li>
<li>Map, filter, and reduce are prime examples — and make common patterns like transforming, searching, and summing lists much easier!</li>
</ul>
<p><a href="https://twitter.com/yazeedBee">I’m on Twitter</a> if you’d like to talk. Until next time!</p>
<p>Take care, <br><br>
Yazeed Bzadough <br><br>
<a href="http://yazeedb.com/">yazeedb.com</a></p>
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
