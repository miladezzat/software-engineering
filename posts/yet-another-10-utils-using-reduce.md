---
card: "/images/default.jpg"
tags: [JavaScript]
description: "Thirty functions total!"
author: "Milad E. Fahmy"
title: "Yet Another 10 Utility Functions Made with Reduce"
created: "2021-08-16T11:28:15+02:00"
modified: "2021-08-16T11:28:15+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-technology tag-functional-programming tag-ramda ">
<header class="post-full-header">
<h1 class="post-full-title">Yet Another 10 Utility Functions Made with Reduce</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/11/Yet-Another-10-Utility-Functions.png 300w,
/news/content/images/size/w600/2019/11/Yet-Another-10-Utility-Functions.png 600w,
/news/content/images/size/w1000/2019/11/Yet-Another-10-Utility-Functions.png 1000w,
/news/content/images/size/w2000/2019/11/Yet-Another-10-Utility-Functions.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/11/Yet-Another-10-Utility-Functions.png" alt="Yet Another 10 Utility Functions Made with Reduce">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>This is my third article on Utility Functions Made with Reduce.</p>
<ul>
<li><a href="/news/10-js-util-functions-in-reduce/">Part one</a> (10 functions)</li>
<li><a href="/news/10-more-js-utils-using-reduce/">Part two</a> (10 functions)</li>
</ul>
<p>Altogether we now have <em>thirty</em> helper functions made using JavaScript's <code>reduce</code>. For more detail on <code>reduce</code> itself, consider reading my <a href="https://www.yazeedb.com/posts/learn-reduce-in-10-minutes">tutorial on it</a>.</p>
<p>The functions listed below were inspired by the amazing <a href="https://ramdajs.com/">RamdaJS</a> library. I also wrote unit tests to ensure correct behavior, which you can find on <a href="https://github.com/yazeedb/js-utils-using-reduce">my GitHub</a>.</p>
<h2 id="1adjust">1. adjust</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>index</code> - Index of source array</li>
<li><code>fn</code> - Function to apply at that <code>index</code></li>
<li><code>list</code> - List of items.</li>
</ol>
<h3 id="description">Description</h3>
<p>Applies a function to the value at the given index. Returns the original array if provided index is out of bounds.</p>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">const double = (x) =&gt; x * 2;
adjust(1, double, [1, 2, 3]);
// [1, 4, 3]
adjust(4, double, [1, 2, 3]);
// [1, 2, 3]
</code></pre>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const adjust = (index, fn, list) =&gt;
list.reduce((acc, value, sourceArrayIndex) =&gt; {
const valueToUse = sourceArrayIndex === index ? fn(value) : value;
acc.push(valueToUse);
return acc;
}, []);
</code></pre>
<h2 id="2frompairs">2. fromPairs</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>pairs</code> - A list of key-value pairs.</li>
</ol>
<h3 id="description">Description</h3>
<p>Creates an object from a list of key-value pairs.</p>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">fromPairs([['a', 1], ['b', 2], ['c', 3]]);
// { a: 1, b: 2, c: 3 }
</code></pre>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const fromPairs = (pairs) =&gt;
pairs.reduce((acc, currentPair) =&gt; {
const [key, value] = currentPair;
acc[key] = value;
return acc;
}, {});
</code></pre>
<h2 id="3range">3. range</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>from</code> - Starting number.</li>
<li><code>to</code> - Ending number.</li>
</ol>
<h3 id="description">Description</h3>
<p>Returns a list of numbers from a given range.</p>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">range(1, 5);
// [1, 2, 3, 4, 5]
</code></pre>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const range = (from, to) =&gt;
Array.from({ length: to - from + 1 }).reduce((acc, _, index) =&gt; {
acc.push(from + index);
return acc;
}, []);
</code></pre>
<h2 id="4repeat">4. repeat</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>item</code> - Item to repeat.</li>
<li><code>times</code> - Number of times to repeat.</li>
</ol>
<h3 id="description">Description</h3>
<p>Returns a list of a given value N times.</p>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">repeat({ favoriteLanguage: 'JavaScript' }, 2);
/*
[{
favoriteLanguage: 'JavaScript'
}, {
favoriteLanguage: 'JavaScript'
}],
*/
</code></pre>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const repeat = (item, times) =&gt;
Array.from({ length: times }).reduce((acc) =&gt; {
acc.push(item);
return acc;
}, []);
</code></pre>
<h2 id="5times">5. times</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>fn</code> - Function to call.</li>
<li><code>numTimes</code> - Number of times to call that function.</li>
</ol>
<h3 id="description">Description</h3>
<p>Calls a given function N times. The <code>fn</code> provided receives the current index as a parameter.</p>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">times((x) =&gt; x * 2, 3);
// [0, 2, 4]
</code></pre>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const times = (fn, numTimes) =&gt;
Array.from({ length: numTimes }).reduce((acc, _, index) =&gt; {
acc.push(fn(index));
return acc;
}, []);
</code></pre>
<h2 id="6deduplicate">6. deduplicate</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>items</code> - List of items.</li>
</ol>
<h3 id="description">Description</h3>
<p>Deduplicates the items in a list.</p>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">deduplicate([[1], [1], { hello: 'world' }, { hello: 'world' }]);
// [[1], { hello: 'world' }]
</code></pre>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const deduplicate = (items) =&gt; {
const cache = {};
return items.reduce((acc, item) =&gt; {
const alreadyIncluded = cache[item] === true;
if (!alreadyIncluded) {
cache[item] = true;
acc.push(item);
}
return acc;
}, []);
};
</code></pre>
<h2 id="7reverse">7. reverse</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>list</code> - List of items.</li>
</ol>
<h3 id="description">Description</h3>
<p>Reverses a list <em>without</em> mutating it by returning a new list, unlike the native <code>Array.reverse</code> method.</p>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">reverse([1, 2, 3]);
// [3, 2, 1]
</code></pre>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const reverse = (list) =&gt;
list.reduce((acc, _, index) =&gt; {
const reverseIndex = list.length - index - 1;
const reverseValue = list[reverseIndex];
acc.push(reverseValue);
return acc;
}, []);
</code></pre>
<h2 id="8insertall">8. insertAll</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>index</code> - Index to insert at.</li>
<li><code>subList</code> - List to insert.</li>
<li><code>sourceList</code> - Source list.</li>
</ol>
<h3 id="description">Description</h3>
<p>Inserts a sub-list into a list at the given index. Appends to the end of the list if index is too large.</p>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">insertAll(1, [2, 3, 4], [1, 5]);
// [1, 2, 3, 4, 5]
insertAll(10, [2, 3, 4], [1, 5]);
// [1, 5, 2, 3, 4]
</code></pre>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const insertAll = (index, subList, sourceList) =&gt; {
if (index &gt; sourceList.length - 1) {
return sourceList.concat(subList);
}
return sourceList.reduce((acc, value, sourceArrayIndex) =&gt; {
if (index === sourceArrayIndex) {
acc.push(...subList, value);
} else {
acc.push(value);
}
return acc;
}, []);
};
</code></pre>
<h2 id="9mergeall">9. mergeAll</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>objectList</code> - List of objects to merge.</li>
</ol>
<h3 id="description">Description</h3>
<p>Merges a list of objects into one.</p>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">mergeAll([
{ js: 'reduce' },
{ elm: 'fold' },
{ java: 'collect' },
{ js: 'reduce' }
]);
/*
{
js: 'reduce',
elm: 'fold',
java: 'collect'
}
*/
</code></pre>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const mergeAll = (objectList) =&gt;
objectList.reduce((acc, obj) =&gt; {
Object.keys(obj).forEach((key) =&gt; {
acc[key] = obj[key];
});
return acc;
}, {});
</code></pre>
<h2 id="10xprod">10. xprod</h2>
<h3 id="parameters">Parameters</h3>
<ol>
<li><code>list1</code> - List of items.</li>
<li><code>list2</code> - List of items.</li>
</ol>
<h3 id="description">Description</h3>
<p>Given a list, returns a new list of all possible pairs.</p>
<h3 id="usage">Usage</h3>
<pre><code class="language-js">xprod(['Hello', 'World'], ['JavaScript', 'Reduce']);
/*
[
['Hello', 'JavaScript'],
['Hello', 'Reduce'],
['World', 'JavaScript'],
['World', 'Reduce']
]
*/
</code></pre>
<h3 id="implementation">Implementation</h3>
<pre><code class="language-js">const xprod = (list1, list2) =&gt;
list1.reduce((acc, list1Item) =&gt; {
list2.forEach((list2Item) =&gt; {
acc.push([list1Item, list2Item]);
});
return acc;
}, []);
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
