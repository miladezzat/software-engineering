---
card: "https://cdn-media-1.freecodecamp.org/images/1*fWhAxeITIQaYWeqE7wogkQ.png"
tags: [JavaScript]
description: "JavaScript has many ways to do anything. I’ve written on 10 W"
author: "Milad E. Fahmy"
title: "How to clone an array in JavaScript"
created: "2021-08-16T11:30:20+02:00"
modified: "2021-08-16T11:30:20+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-technology tag-react tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to clone an array in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*fWhAxeITIQaYWeqE7wogkQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*fWhAxeITIQaYWeqE7wogkQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*fWhAxeITIQaYWeqE7wogkQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*fWhAxeITIQaYWeqE7wogkQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*fWhAxeITIQaYWeqE7wogkQ.png" alt="How to clone an array in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>JavaScript has many ways to do anything. I’ve written on <a>10 Ways to Write pipe/compose in JavaScript</a>, and now we’re doing arrays.</p><h3 id="1-spread-operator-shallow-copy-">1. Spread Operator (Shallow copy)</h3><p>Ever since ES6 dropped, this has been the most popular method. It’s a brief syntax and you’ll find it incredibly useful when using libraries like React and Redux.</p><pre><code class="language-js">numbers = [1, 2, 3];
numbersCopy = [...numbers];
</code></pre><p><strong>Note:</strong> This doesn’t safely copy multi-dimensional arrays. Array/object values are copied by <em>reference</em> instead of by <em>value</em>.</p><p>This is fine</p><pre><code class="language-js">numbersCopy.push(4);
console.log(numbers, numbersCopy);
// [1, 2, 3] and [1, 2, 3, 4]
// numbers is left alone
</code></pre><p>This is not fine</p><pre><code class="language-js">nestedNumbers = [[1], [2]];
numbersCopy = [...nestedNumbers];
numbersCopy[0].push(300);
console.log(nestedNumbers, numbersCopy);
// [[1, 300], [2]]
// [[1, 300], [2]]
// They've both been changed because they share references
</code></pre><h3 id="2-good-old-for-loop-shallow-copy-">2. Good Old for() Loop (Shallow copy)</h3><p>I imagine this approach is the <em>least</em> popular, given how trendy functional programming’s become in our circles.</p><p>Pure or impure, declarative or imperative, it gets the job done!</p><pre><code class="language-js">numbers = [1, 2, 3];
numbersCopy = [];
for (i = 0; i &lt; numbers.length; i++) {
numbersCopy[i] = numbers[i];
}
</code></pre><p><strong>Note:</strong> This doesn’t safely copy multi-dimensional arrays. Since you’re using the <code>=</code> operator, it’ll assign objects/arrays by <em>reference</em> instead of by <em>value</em>.</p><p>This is fine</p><pre><code class="language-js">numbersCopy.push(4);
console.log(numbers, numbersCopy);
// [1, 2, 3] and [1, 2, 3, 4]
// numbers is left alone
</code></pre><p>This is not fine</p><pre><code class="language-js">nestedNumbers = [[1], [2]];
numbersCopy = [];
for (i = 0; i &lt; nestedNumbers.length; i++) {
numbersCopy[i] = nestedNumbers[i];
}
numbersCopy[0].push(300);
console.log(nestedNumbers, numbersCopy);
// [[1, 300], [2]]
// [[1, 300], [2]]
// They've both been changed because they share references
</code></pre><h3 id="3-good-old-while-loop-shallow-copy-">3. Good Old while() Loop (Shallow copy)</h3><p>Same as <code>for</code>—impure, imperative, blah, blah, blah…it works! ?</p><pre><code class="language-js">numbers = [1, 2, 3];
numbersCopy = [];
i = -1;
while (++i &lt; numbers.length) {
numbersCopy[i] = numbers[i];
}
</code></pre><p><strong>Note:</strong> This also assigns objects/arrays by <em>reference</em> instead of by <em>value</em>.</p><p>This is fine</p><pre><code class="language-js">numbersCopy.push(4);
console.log(numbers, numbersCopy);
// [1, 2, 3] and [1, 2, 3, 4]
// numbers is left alone
</code></pre><p>This is not fine</p><pre><code class="language-js">nestedNumbers = [[1], [2]];
numbersCopy = [];
i = -1;
while (++i &lt; nestedNumbers.length) {
numbersCopy[i] = nestedNumbers[i];
}
numbersCopy[0].push(300);
console.log(nestedNumbers, numbersCopy);
// [[1, 300], [2]]
// [[1, 300], [2]]
// They've both been changed because they share references
</code></pre><h3 id="4-array-map-shallow-copy-">4. Array.map (Shallow copy)</h3><p>Back in modern territory, we’ll find the <code>map</code> function. <a href="https://en.wikipedia.org/wiki/Morphism">Rooted in mathematics</a>, <code>map</code> is the concept of transforming a set into another type of set, while preserving structure.</p><p>In English, that means <code>Array.map</code> returns an array of the same length every single time.</p><p>To double a list of numbers, use <code>map</code> with a <code>double</code> function.</p><pre><code class="language-js">numbers = [1, 2, 3];
double = (x) =&gt; x * 2;
numbers.map(double);
</code></pre><h4 id="what-about-cloning">What about cloning??</h4><p>True, this article’s about cloning arrays. To duplicate an array, just return the element in your <code>map</code> call.</p><pre><code class="language-js">numbers = [1, 2, 3];
numbersCopy = numbers.map((x) =&gt; x);
</code></pre><p>If you’d like to be a bit more mathematical, <code>(x) =&gt; x</code> is called <a href="https://en.wikipedia.org/wiki/Identity_function"><em>identity</em></a>. It returns whatever parameter it’s been given.</p><p><code>map(identity)</code> clones a list.</p><pre><code class="language-js">identity = (x) =&gt; x;
numbers.map(identity);
// [1, 2, 3]
</code></pre><p><strong>Note:</strong> This also assigns objects/arrays by <em>reference</em> instead of by <em>value</em>.</p><h3 id="5-array-filter-shallow-copy-">5. Array.filter (Shallow copy)</h3><p>This function returns an array, just like <code>map</code>, but it’s not guaranteed to be the same length.</p><p>What if you’re filtering for even numbers?</p><pre><code class="language-js">[1, 2, 3].filter((x) =&gt; x % 2 === 0);
// [2]
</code></pre><p>The input array length was 3, but the resulting length is 1.</p><p>If your <code>filter</code>'s predicate always returns <code>true</code>, however, you get a duplicate!</p><pre><code class="language-js">numbers = [1, 2, 3];
numbersCopy = numbers.filter(() =&gt; true);
</code></pre><p>Every element passes the test, so it gets returned.</p><p><strong>Note:</strong> This also assigns objects/arrays by <em>reference</em> instead of by <em>value</em>.</p><h3 id="6-array-reduce-shallow-copy-">6. Array.reduce (Shallow copy)</h3><p>I almost feel bad using <code>reduce</code> to clone an array, because it’s so much more powerful than that. But here we go…</p><pre><code class="language-js">numbers = [1, 2, 3];
numbersCopy = numbers.reduce((newArray, element) =&gt; {
newArray.push(element);
return newArray;
}, []);
</code></pre><p><code>reduce</code> transforms an initial value as it loops through a list.</p><p>Here the initial value is an empty array, and we’re filling it with each element as we go. That array must be returned from the function to be used in the next iteration.</p><p><strong>Note:</strong> This also assigns objects/arrays by <em>reference</em> instead of by <em>value</em>.</p><h3 id="7-array-slice-shallow-copy-">7. Array.slice (Shallow copy)</h3><p><code>slice</code> returns a <em>shallow</em> copy of an array based on the provided start/end index you provide.</p><p>If we want the first 3 elements:</p><pre><code class="language-js">[1, 2, 3, 4, 5].slice(0, 3);
// [1, 2, 3]
// Starts at index 0, stops at index 3
</code></pre><p>If we want all the elements, don’t give any parameters</p><pre><code class="language-js">numbers = [1, 2, 3, 4, 5];
numbersCopy = numbers.slice();
// [1, 2, 3, 4, 5]
</code></pre><p><strong>Note:</strong> This is a <em>shallow</em> copy, so it also assigns objects/arrays by <em>reference</em> instead of by <em>value</em>.</p><h3 id="8-json-parse-and-json-stringify-deep-copy-">8. JSON.parse and JSON.stringify (Deep copy)</h3><p><code>JSON.stringify</code> turns an object into a string.</p><p><code>JSON.parse</code> turns a string into an object.</p><p>Combining them can turn an object into a string, and then reverse the process to create a brand new data structure.</p><p><strong>Note: This one</strong> <strong>safely copies deeply nested objects/arrays</strong>!</p><pre><code class="language-js">nestedNumbers = [[1], [2]];
numbersCopy = JSON.parse(JSON.stringify(nestedNumbers));
numbersCopy[0].push(300);
console.log(nestedNumbers, numbersCopy);
// [[1], [2]]
// [[1, 300], [2]]
// These two arrays are completely separate!
</code></pre><h3 id="9-array-concat-shallow-copy-">9. Array.concat (Shallow copy)</h3><p><code>concat</code> combines arrays with values or other arrays.</p><pre><code class="language-js">[1, 2, 3].concat(4); // [1, 2, 3, 4]
[1, 2, 3].concat([4, 5]); // [1, 2, 3, 4, 5]
</code></pre><p>If you give nothing or an empty array, a shallow copy’s returned.</p><pre><code class="language-js">[1, 2, 3].concat(); // [1, 2, 3]
[1, 2, 3].concat([]); // [1, 2, 3]
</code></pre><p><strong>Note:</strong> This also assigns objects/arrays by <em>reference</em> instead of by <em>value</em>.</p><h3 id="10-array-from-shallow-copy-">10. Array.from (Shallow copy)</h3><p>This can turn any iterable object into an array. Giving an array returns a shallow copy.</p><pre><code class="language-js">numbers = [1, 2, 3];
numbersCopy = Array.from(numbers);
// [1, 2, 3]
</code></pre><p><strong>Note:</strong> This also assigns objects/arrays by <em>reference</em> instead of by <em>value</em>.</p><h3 id="conclusion">Conclusion</h3><p>Well, this was fun ?</p><p>I tried to clone using just 1 step. You’ll find many more ways if you employ multiple methods and techniques.</p>
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
