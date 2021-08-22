---
card: "/images/default.jpg"
tags: [JavaScript]
description: "This time, with a test suite!"
author: "Milad E. Fahmy"
title: "10 More Utility Functions Made with Reduce"
created: "2021-08-16T11:28:16+02:00"
modified: "2021-08-16T11:28:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-ramda tag-technology tag-functional-programming ">
<header class="post-full-header">
<h1 class="post-full-title">10 More Utility Functions Made with Reduce</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/11/cover-image.png 300w,
/news/content/images/size/w600/2019/11/cover-image.png 600w,
/news/content/images/size/w1000/2019/11/cover-image.png 1000w,
/news/content/images/size/w2000/2019/11/cover-image.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/11/cover-image.png" alt="10 More Utility Functions Made with Reduce">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><a href="/news/10-js-util-functions-in-reduce/">Previously</a> I wrote about 10 utility functions implemented with JavaScript's <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce">reduce function</a>. It was well-received, and I walked away with an even deeper appreciation for this magnificent multi-tool. Why not try 10 more?</p>
<p>Many of these were inspired by the awesome libraries <a href="https://lodash.com/">Lodash</a> and <a href="https://ramdajs.com/">Ramda</a>! I also wrote unit tests to ensure correct behavior. You can see everything on the <a href="https://github.com/yazeedb/js-utils-using-reduce">Github repo here</a>.</p>
<h2 id="1pipe">1. pipe</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>...functions</code> - Any number of functions.</li>
</ol>
<h3 id="description">Description</h3>
<p>Performs <em>left-to-right</em> function composition. The first argument to a pipeline acts as the initial value, and is transformed as it passes through each function.</p>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const pipe = (...functions) =&gt; (initialValue) =&gt;
functions.reduce((value, fn) =&gt; fn(value), initialValue);
</code></pre>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">const mathSequence = pipe(
(x) =&gt; x * 2,
(x) =&gt; x - 1,
(x) =&gt; x * 3
);
mathSequence(1); // 3
mathSequence(2); // 9
mathSequence(3); // 15
</code></pre>
<p>For more detail, I wrote an <a href="https://www.yazeedb.com/posts/a-quick-intro-to-pipe-and-compose">article on pipe here</a>.</p>
<h2 id="2compose">2. compose</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>...functions</code> - Any number of functions.</li>
</ol>
<h3 id="description">Description</h3>
<p>Performs <em>right-to-left</em> function composition. The first argument to a pipeline acts as the initial value, and is transformed as it passes through each function.</p>
<p>Works like <code>pipe</code>, but in the opposite direction.</p>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const compose = (...functions) =&gt; (initialValue) =&gt;
functions.reduceRight((value, fn) =&gt; fn(value), initialValue);
</code></pre>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">const mathSequence = compose(
(x) =&gt; x * 2,
(x) =&gt; x - 1,
(x) =&gt; x * 3
);
mathSequence(1); // 4
mathSequence(2); // 10
mathSequence(3); // 16
</code></pre>
<p>For more detail, I wrote an <a href="https://www.yazeedb.com/posts/a-quick-intro-to-pipe-and-compose">article on compose here</a>.</p>
<h2 id="3zip">3. zip</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>list1</code> - List of items.</li>
<li><code>list2</code> - List of items.</li>
</ol>
<h3 id="description">Description</h3>
<p>Pairs items from two lists via index. If list lengths are not equal, the shorter list's length is used.</p>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const zip = (list1, list2) =&gt; {
const sourceList = list1.length &gt; list2.length ? list2 : list1;
return sourceList.reduce((acc, _, index) =&gt; {
const value1 = list1[index];
const value2 = list2[index];
acc.push([value1, value2]);
return acc;
}, []);
};
</code></pre>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">zip([1, 3], [2, 4]); // [[1, 2], [3, 4]]
zip([1, 3, 5], [2, 4]); // [[1, 2], [3, 4]]
zip([1, 3], [2, 4, 5]); // [[1, 2], [3, 4]]
zip(['Decode', 'secret'], ['this', 'message!']);
// [['Decode', 'this'], ['secret', 'message!']]
</code></pre>
<h2 id="4intersperse">4. intersperse</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>separator</code> - Item to insert.</li>
<li><code>list</code> - List of items.</li>
</ol>
<h3 id="description">Description</h3>
<p>Inserts a separator between each element of a list.</p>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const intersperse = (separator, list) =&gt;
list.reduce((acc, value, index) =&gt; {
if (index === list.length - 1) {
acc.push(value);
} else {
acc.push(value, separator);
}
return acc;
}, []);
</code></pre>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">intersperse('Batman', [1, 2, 3, 4, 5, 6]);
// [1, 'Batman', 2, 'Batman', 3, 'Batman', 4, 'Batman', 5, 'Batman', 6]
intersperse('Batman', []);
// []
</code></pre>
<h2 id="5insert">5. insert</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>index</code> - Index to insert element at.</li>
<li><code>newItem</code> - Element to insert.</li>
<li><code>list</code> - List of items.</li>
</ol>
<h3 id="description">Description</h3>
<p>Inserts an element at the given index. If the index is too large, element is inserted at the end of the list.</p>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const insert = (index, newItem, list) =&gt; {
if (index &gt; list.length - 1) {
return [...list, newItem];
}
return list.reduce((acc, value, sourceArrayIndex) =&gt; {
if (index === sourceArrayIndex) {
acc.push(newItem, value);
} else {
acc.push(value);
}
return acc;
}, []);
};
</code></pre>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">insert(0, 'Batman', [1, 2, 3]);
// ['Batman', 1, 2, 3]
insert(1, 'Batman', [1, 2, 3]);
// [1, 'Batman', 2, 3]
insert(2, ['Batman'], [1, 2, 3]);
// [1, 2, ['Batman'], 3]
insert(10, ['Batman'], [1, 2, 3]);
// [1, 2, 3, ['Batman']]
</code></pre>
<h2 id="6flatten">6. flatten</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>list</code> - List of items.</li>
</ol>
<h3 id="description">Description</h3>
<p>Flattens a list of items by one level.</p>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const flatten = (list) =&gt; list.reduce((acc, value) =&gt; acc.concat(value), []);
</code></pre>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">flatten([[1, 2], [3, 4]]);
// [1, 2, 3, 4]
flatten([[1, 2], [[3, 4]]]);
// [1, 2, [3, 4]]
flatten([[[1, 2]], [3, 4]]);
// [[1, 2], 3, 4]
flatten([[[1, 2], [3, 4]]]);
// [[1, 2], [3, 4]]
</code></pre>
<h2 id="7flatmap">7. flatMap</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>mappingFunction</code> - Function to run on each list item.</li>
<li><code>list</code> - List of items.</li>
</ol>
<h3 id="description">Description</h3>
<p>Maps each list item according to the given function, then flattens the result.</p>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">// Kind of cheating, because we already implemented flatten ?
const flatMap = (mappingFunction, list) =&gt; flatten(list.map(mappingFunction));
</code></pre>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">flatMap((n) =&gt; [n * 2], [1, 2, 3, 4]);
// [2, 4, 6, 8]
flatMap((n) =&gt; [n, n], [1, 2, 3, 4]);
// [1, 1, 2, 2, 3, 3, 4, 4]
flatMap((s) =&gt; s.split(' '), ['flatMap', 'should be', 'mapFlat']);
// ['flatMap', 'should', 'be', 'mapFlat']
</code></pre>
<h2 id="8includes">8. includes</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>item</code> - Item to check the list for.</li>
<li><code>list</code> - List of items.</li>
</ol>
<h3 id="description">Description</h3>
<p>Checks a list for a given element. If the element is found, returns <code>true</code>. Otherwise returns <code>false</code>.</p>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const includes = (item, list) =&gt;
list.reduce((isIncluded, value) =&gt; isIncluded || item === value, false);
</code></pre>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">includes(3, [1, 2, 3]); // true
includes(3, [1, 2]); // false
includes(0, []); // false
</code></pre>
<h2 id="9compact">9. compact</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>list</code> - List of items.</li>
</ol>
<h3 id="description">Description</h3>
<p>Removes "falsey" values from a list.</p>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const compact = (list) =&gt;
list.reduce((acc, value) =&gt; {
if (value) {
acc.push(value);
}
return acc;
}, []);
</code></pre>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">compact([0, null, 1, undefined, 2, '', 3, false, 4, NaN]);
// [1, 2, 3, 4]
</code></pre>
<h2 id="10arrayintoobject">10. arrayIntoObject</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>key</code> - String to use as the new object key.</li>
<li><code>list</code> - List of items.</li>
</ol>
<h3 id="description">Description</h3>
<p>Converts an array into an object, using the given key as the new object's key.</p>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const arrayIntoObject = (key, list) =&gt;
list.reduce((acc, obj) =&gt; {
const value = obj[key];
acc[value] = obj;
return acc;
}, {});
</code></pre>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">const users = [
{ username: 'JX01', status: 'offline' },
{ username: 'yazeedBee', status: 'online' }
];
arrayIntoObject('username', users);
/*
{
JX01: {
username: 'JX01',
status: 'offline'
},
yazeedBee: { username: 'yazeedBee', status: 'online' }
}
*/
arrayIntoObject('status', users);
/*
{
offline: {
username: 'JX01',
status: 'offline'
},
online: { username: 'yazeedBee', status: 'online' }
}
*/
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
