---
card: "/images/default.jpg"
tags: [JavaScript]
description: "The multi-tool strikes again."
author: "Milad E. Fahmy"
title: "10 JavaScript Utility Functions Made with Reduce"
created: "2021-08-16T11:28:19+02:00"
modified: "2021-08-16T11:28:19+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-functional-programming tag-ramda tag-arrays tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">10 JavaScript Utility Functions Made with Reduce</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/10/10-js-utility-functions-using-reduce-1.png 300w,
/news/content/images/size/w600/2019/10/10-js-utility-functions-using-reduce-1.png 600w,
/news/content/images/size/w1000/2019/10/10-js-utility-functions-using-reduce-1.png 1000w,
/news/content/images/size/w2000/2019/10/10-js-utility-functions-using-reduce-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/10/10-js-utility-functions-using-reduce-1.png" alt="10 JavaScript Utility Functions Made with Reduce">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In <a href="https://www.yazeedb.com/posts/learn-reduce-in-10-minutes/">my last article</a> I offered you a challenge to recreate well-known functions using <code>reduce</code>. This article will show you how some of them can be implemented, along with some extras!</p>
<p>In total we're going to look at ten utility functions. They're incredibly handy on your projects, and best of all, they're implemented using <code>reduce</code>! I drew lots of inspiration from the <a href="https://ramdajs.com/">RamdaJS library</a> for this one, so check that out!</p>
<h2 id="1some">1. some</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>predicate</code> - Function that returns <code>true</code> or <code>false</code>.</li>
<li><code>array</code> - List of items to test.</li>
</ol>
<h3 id="description">Description</h3>
<p>If <code>predicate</code> returns <code>true</code> for <em>any</em> item, <code>some</code> returns <code>true</code>. Otherwise it returns <code>false</code>.</p>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const some = (predicate, array) =&gt;
array.reduce((acc, value) =&gt; acc || predicate(value), false);
</code></pre>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">const equals3 = (x) =&gt; x === 3;
some(equals3, [3]); // true
some(equals3, [3, 3, 3]); // true
some(equals3, [1, 2, 3]); // true
some(equals3, [2]); // false
</code></pre>
<h2 id="2all">2. all</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>predicate</code> - Function that returns <code>true</code> or <code>false</code>.</li>
<li><code>array</code> - List of items to test.</li>
</ol>
<h3 id="description">Description</h3>
<p>If <code>predicate</code> returns <code>true</code> for <em>every</em> item, <code>all</code> returns <code>true</code>. Otherwise it returns <code>false</code>.</p>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const all = (predicate, array) =&gt;
array.reduce((acc, value) =&gt; acc &amp;&amp; predicate(value), true);
</code></pre>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">const equals3 = (x) =&gt; x === 3;
all(equals3, [3]); // true
all(equals3, [3, 3, 3]); // true
all(equals3, [1, 2, 3]); // false
all(equals3, [3, 2, 3]; // false
</code></pre>
<h2 id="3none">3. none</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>predicate</code> - Function that returns <code>true</code> or <code>false</code>.</li>
<li><code>array</code> - List of items to test.</li>
</ol>
<h3 id="description">Description</h3>
<p>If <code>predicate</code> returns <code>false</code> for <em>every</em> item, <code>none</code> returns <code>true</code>. Otherwise it returns <code>false</code>.</p>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const none = (predicate, array) =&gt;
array.reduce((acc, value) =&gt; !acc &amp;&amp; !predicate(value), false);
</code></pre>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">const isEven = (x) =&gt; x % 2 === 0;
none(isEven, [1, 3, 5]); // true
none(isEven, [1, 3, 4]); // false
none(equals3, [1, 2, 4]); // true
none(equals3, [1, 2, 3]); // false
</code></pre>
<h2 id="4map">4. map</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>transformFunction</code> - Function to run on each element.</li>
<li><code>array</code> - List of items to transform.</li>
</ol>
<h3 id="description">Description</h3>
<p>Returns a new array of items, each one transformed according to the given <code>transformFunction</code>.</p>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const map = (transformFunction, array) =&gt;
array.reduce((newArray, item) =&gt; {
newArray.push(transformFunction(item));
return newArray;
}, []);
</code></pre>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">const double = (x) =&gt; x * 2;
const reverseString = (string) =&gt;
string
.split('')
.reverse()
.join('');
map(double, [100, 200, 300]);
// [200, 400, 600]
map(reverseString, ['Hello World', 'I love map']);
// ['dlroW olleH', 'pam evol I']
</code></pre>
<h2 id="5filter">5. filter</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>predicate</code> - Function that returns <code>true</code> or <code>false</code>.</li>
<li><code>array</code> - List of items to filter.</li>
</ol>
<h3 id="description">Description</h3>
<p>Returns a new array. If <code>predicate</code> returns <code>true</code>, that item is added to the new array. Otherwise that item is excluded from the new array.</p>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const filter = (predicate, array) =&gt;
array.reduce((newArray, item) =&gt; {
if (predicate(item) === true) {
newArray.push(item);
}
return newArray;
}, []);
</code></pre>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">const isEven = (x) =&gt; x % 2 === 0;
filter(isEven, [1, 2, 3]);
// [2]
filter(equals3, [1, 2, 3, 4, 3]);
// [3, 3]
</code></pre>
<h2 id="6reject">6. reject</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>predicate</code> - Function that returns <code>true</code> or <code>false</code>.</li>
<li><code>array</code> - List of items to filter.</li>
</ol>
<h3 id="description">Description</h3>
<p>Just like <code>filter</code>, but with the opposite behavior.</p>
<p>If <code>predicate</code> returns <code>false</code>, that item is added to the new array. Otherwise that item is excluded from the new array.</p>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const reject = (predicate, array) =&gt;
array.reduce((newArray, item) =&gt; {
if (predicate(item) === false) {
newArray.push(item);
}
return newArray;
}, []);
</code></pre>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">const isEven = (x) =&gt; x % 2 === 0;
reject(isEven, [1, 2, 3]);
// [1, 3]
reject(equals3, [1, 2, 3, 4, 3]);
// [1, 2, 4]
</code></pre>
<h2 id="7find">7. find</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>predicate</code> - Function that returns <code>true</code> or <code>false</code>.</li>
<li><code>array</code> - List of items to search.</li>
</ol>
<h3 id="description">Description</h3>
<p>Returns the first element that matches the given <code>predicate</code>. If no element matches then <code>undefined</code> is returned.</p>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const find = (predicate, array) =&gt;
array.reduce((result, item) =&gt; {
if (result !== undefined) {
return result;
}
if (predicate(item) === true) {
return item;
}
return undefined;
}, undefined);
</code></pre>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">const isEven = (x) =&gt; x % 2 === 0;
find(isEven, []); // undefined
find(isEven, [1, 2, 3]); // 2
find(isEven, [1, 3, 5]); // undefined
find(equals3, [1, 2, 3, 4, 3]); // 3
find(equals3, [1, 2, 4]); // undefined
</code></pre>
<h2 id="8partition">8. partition</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>predicate</code> - Function that returns <code>true</code> or <code>false</code>.</li>
<li><code>array</code> - List of items.</li>
</ol>
<h3 id="description">Description</h3>
<p>"Partitions" or splits an array into two based on the <code>predicate</code>. If <code>predicate</code> returns <code>true</code>, the item goes into list 1. Otherwise the item goes into list 2.</p>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const partition = (predicate, array) =&gt;
array.reduce(
(result, item) =&gt; {
const [list1, list2] = result;
if (predicate(item) === true) {
list1.push(item);
} else {
list2.push(item);
}
return result;
},
[[], []]
);
</code></pre>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">const isEven = (x) =&gt; x % 2 === 0;
partition(isEven, [1, 2, 3]);
// [[2], [1, 3]]
partition(isEven, [1, 3, 5]);
// [[], [1, 3, 5]]
partition(equals3, [1, 2, 3, 4, 3]);
// [[3, 3], [1, 2, 4]]
partition(equals3, [1, 2, 4]);
// [[], [1, 2, 4]]
</code></pre>
<h2 id="9pluck">9. pluck</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>key</code> - Key name to pluck from the object</li>
<li><code>array</code> - List of items.</li>
</ol>
<h3 id="description">Description</h3>
<p>Plucks the given <code>key</code> off of each item in the array. Returns a new array of these values.</p>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const pluck = (key, array) =&gt;
array.reduce((values, current) =&gt; {
values.push(current[key]);
return values;
}, []);
</code></pre>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">pluck('name', [{ name: 'Batman' }, { name: 'Robin' }, { name: 'Joker' }]);
// ['Batman', 'Robin', 'Joker']
pluck(0, [[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
// [1, 4, 7]
</code></pre>
<h2 id="10scan">10. scan</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>reducer</code> - Standard reducer function that receives two parameters - the accumulator and current element from the array.</li>
<li><code>initialValue</code> - The initial value for the accumulator.</li>
<li><code>array</code> - List of items.</li>
</ol>
<h3 id="description">Description</h3>
<p>Works just like <code>reduce</code> but instead just the single result, it returns a list of every reduced value on the way to the single result.</p>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const scan = (reducer, initialValue, array) =&gt; {
const reducedValues = [];
array.reduce((acc, current) =&gt; {
const newAcc = reducer(acc, current);
reducedValues.push(newAcc);
return newAcc;
}, initialValue);
return reducedValues;
};
</code></pre>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">const add = (x, y) =&gt; x + y;
const multiply = (x, y) =&gt; x * y;
scan(add, 0, [1, 2, 3, 4, 5, 6]);
// [1, 3, 6, 10, 15, 21] - Every number added from 1-6
scan(multiply, 1, [1, 2, 3, 4, 5, 6]);
// [1, 2, 6, 24, 120, 720] - Every number multiplied from 1-6
</code></pre>
<h2 id="wantfreecoaching">Want Free Coaching?</h2>
<p>If you'd like to schedule a free call to discuss Front-End development questions regarding code, interviews, career, or anything else <a href="https://twitter.com/yazeedBee">follow me on Twitter and DM me</a>.</p>
<p>After that if you enjoy our first meeting, we can discuss an ongoing coaching to help you reach your Front-End development goals!</p>
<h2 id="thanksforreading">Thanks for reading</h2>
<p>For more content like this, check out <a href="https://yazeedb.com">https://yazeedb.com!</a></p>
<p>Until next time!</p>
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
