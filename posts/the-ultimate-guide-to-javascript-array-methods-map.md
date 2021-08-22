---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9f23740569d1a4ca40fc.jpg"
tags: [JavaScript]
description: The map() method applies a function to each element in an arr
author: "Milad E. Fahmy"
title: "The Ultimate Guide to JavaScript Array Methods - Map"
created: "2021-08-15T19:32:05+02:00"
modified: "2021-08-15T19:32:05+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-arrays ">
<header class="post-full-header">
<h1 class="post-full-title">The Ultimate Guide to JavaScript Array Methods - Map</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9f23740569d1a4ca40fc.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9f23740569d1a4ca40fc.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9f23740569d1a4ca40fc.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9f23740569d1a4ca40fc.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9f23740569d1a4ca40fc.jpg" alt="The Ultimate Guide to JavaScript Array Methods - Map">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>The <code>map()</code> method applies a function to each element in an array and returns a copy of the original array with modified values (if any).</p>
<h2 id="syntax-">Syntax:</h2><pre><code class="language-js">const newArr = oldArr.map(function(currentValue, index, array) {
// Do stuff with currentValue (index and array are optional)
});</code></pre>
<ul>
<li><code>newArr</code> - the new array that is returned</li>
<li><code>oldArr</code> - the old array being operated on. This array will not be changed</li>
<li><code>currentValue</code> - the current value being processed</li>
<li><code>index</code> - the current index of the value being processed</li>
<li><code>array</code> - the original array</li>
</ul>
<h2 id="examples-">Examples:</h2>
<h3 id="es5">ES5</h3><pre><code class="language-js">var arr = [1, 2, 3, 4];
var newArray = arr.map(function(element) {
return element * 2
});
console.log(arr); // [1, 2, 3, 4]
console.log(newArray); // [2, 4, 6, 8]</code></pre>
<h3 id="es6">ES6</h3><pre><code class="language-js">const arr = [1, 2, 3, 4];
const newArray = arr.map(element =&gt; {
return element * 2;
});
const newArrayOneLiner = arr.map(element =&gt; element * 2);
console.log(arr); // [1, 2, 3, 4]
console.log(newArray); // [2, 4, 6, 8]
console.log(newArrayOneLiner); // [2, 4, 6, 8]</code></pre>
<h2 id="map-vs-foreach"><code>map</code> vs <code>forEach</code></h2>
<p>On the surface, the <code>map()</code> and <code>forEach()</code> methods are very similar. Both methods iterate through an array and apply a function to each element. The main difference is that <code>map()</code> returns a new array, while <code>forEach()</code> doesn't return anything.</p>
<p>So which method should you use? Generally, it's better to use <code>forEach()</code> if you don't need to change the values in the original array. <code>forEach()</code> is a good choice if all you need to do is log each element of an array to the console, or save them to a database:</p><pre><code class="language-js">const letters = ['a', 'b', 'c', 'd'];
letters.forEach(letter =&gt; {
console.log(letter);
});</code></pre>
<p><code>map()</code> is a better choice if you need to update the values in the original array. It's especially useful if you want to store the updated array as a variable and keep the original as a reference.</p>
<h2 id="how-to-use-map-with-other-array-methods">How to Use <code>map</code> with Other Array Methods</h2>
<p>Since <code>map()</code> returns an array, you can use it with other array methods to make your code much more succinct and readable.</p>
<h3 id="using-map-with-filter">Using <code>map</code> with <code>filter</code></h3>
<p>One thing to remember while using <code>map()</code> is that it applies a function to <em>every</em> element of the original array, and returns a new array the same length as the old one. In other words, it's not possible to skip over elements of the array that you don't want to modify:</p><pre><code class="language-js">const nums = [5, 10, 15, 20];
const doublesOverTen = nums.map(num =&gt; {
if (num &gt; 10) {
return num * 2;
}
});
console.log(doublesOverTen); // [undefined, undefined, 30, 40]</code></pre>
<p>That's where the <code>filter()</code> method comes in. <code>filter()</code> returns a new array of filtered elements that meet a certain condition, which you can then chain <code>map()</code> to:</p><pre><code class="language-js">const nums = [5, 10, 15, 20];
const doublesOverTen = nums.filter(num =&gt; {
return num &gt; 10;
}).map(num =&gt; {
return num * 2;
});
console.log(doublesOverTen); // [30, 40]</code></pre>
<p>This code can be simplified even further:</p><pre><code class="language-js">const nums = [5, 10, 15, 20];
const doublesOverTen = nums.filter(num =&gt; num &gt; 10).map(num =&gt; num * 2);
console.log(doublesOverTen); // [30, 40]</code></pre>
<h3 id="using-map-with-reverse">Using <code>map</code> with <code>reverse</code></h3>
<p>There may be times when you need to reverse an array while mapping through it. The <code>reverse()</code> method makes this easy, but it's important to remember that, while <code>map()</code> is immutable, <code>reverse()</code> isn't. In other words, the <code>reverse()</code> method will change the original array:</p><pre><code class="language-js">const nums = [1, 2, 3, 4, 5];
const reversedDoubles = nums.reverse().map(num =&gt; num * 2);
console.log(nums); // [5, 4, 3, 2, 1]
console.log(reversedDoubles); // [10, 8, 6, 4, 2]</code></pre>
<p>One of the main advantages of <code>map()</code> is that it doesn't alter the original array, and using <code>reverse()</code> like this defeats the purpose. However, this is a simple fix – just remember to use <code>map()</code> first, then <code>reverse()</code> the new array it returns:</p><pre><code class="language-js">const nums = [1, 2, 3, 4, 5];
const reversedDoubles = nums.map(num =&gt; num * 2).reverse();
console.log(nums); // [1, 2, 3, 4, 5]
console.log(reversedDoubles); // [10, 8, 6, 4, 2]</code></pre>
<h3 id="using-map-on-an-object">Using <code>map</code> on an Object</h3>
<p>While <code>map()</code> is meant for operating on arrays, with just a little extra work you can also iterate through objects. <code>Object.keys()</code>, <code>Object.values()</code>, and <code>Object.entries()</code> all return an array, meaning that <code>map()</code> can easily be chained to each method:</p><pre><code class="language-js">const obj = {
a: 1,
b: 2,
c: 3
}
const doubles = Object.values(obj).map(num =&gt; num * 2);
console.log(doubles); // [2, 4, 6]</code></pre>
<p>Now go forth and <code>map()</code> all the things!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
