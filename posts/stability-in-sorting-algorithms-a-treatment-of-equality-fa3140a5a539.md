---
card: "https://cdn-media-1.freecodecamp.org/images/1*ghZAH4YaFgcBXL84TuMLXw.jpeg"
tags: [JavaScript]
description: by Onel Harrison
author: "Milad E. Fahmy"
title: "Stability in Sorting Algorithms — A Treatment of Equality"
created: "2021-08-15T19:38:59+02:00"
modified: "2021-08-15T19:38:59+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-software-development tag-algorithms tag-programming tag-computer-science ">
<header class="post-full-header">
<h1 class="post-full-title">Stability in Sorting Algorithms — A Treatment of Equality</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*ghZAH4YaFgcBXL84TuMLXw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*ghZAH4YaFgcBXL84TuMLXw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*ghZAH4YaFgcBXL84TuMLXw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*ghZAH4YaFgcBXL84TuMLXw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*ghZAH4YaFgcBXL84TuMLXw.jpeg" alt="Stability in Sorting Algorithms — A Treatment of Equality">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Onel Harrison</p>
<h1 id="stability-in-sorting-algorithms-a-treatment-of-equality">Stability in Sorting Algorithms — A Treatment of Equality</h1>
<p>Algorithms are at the heart of computer science. Algorithms used for sorting are some of the most fundamental, useful, and consequently, ubiquitous.</p>
<blockquote>Algorithm — a finite set of unambiguous steps for solving a specific problem.</blockquote>
<p>We constantly and often unconsciously sort and rely on the order of grouped objects. For instance, we rank tasks on a list according to priority. We stack books on shelves by their height. We sort rows in a spreadsheet or database, or rely on the alphabetical order of words in a dictionary. Sometimes, we even perceive a certain kind of beauty in ordered arrangements.</p>
<figcaption>Photo by <a href="https://unsplash.com/photos/6GjHwABuci4?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Mikael Kristenson</a> on <a href="https://unsplash.com/search/photos/order-placement?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>As programmers, knowing <strong>how</strong> we sort is important because it affects what a sorted arrangement might look like. Not all sorts order objects in the same way! Because of this, the results of sorting operations differ based on the algorithms used. If this goes unacknowledged, we might surprise ourselves or the people who use our software.</p>
<p>The stability of sorting algorithms is one of the distinguishing properties among them. It deals with how the algorithm treats comparable items with equal sort keys.</p>
<blockquote>Sort key — A key used to determine the ordering of items in a collection, e.g. age, height, position in the alphabet, etc.</blockquote>
<p><strong>A stable sorting algorithm</strong> maintains the relative order of the items with equal sort keys. An unstable sorting algorithm does not. In other words, when a collection is sorted with a stable sorting algorithm, items with the same sort keys preserve their order after the collection is sorted.</p>
<h3 id="an-example-code-and-a-demo">An Example, Code, and a Demo</h3>
<figcaption>Image showing the effect of stable sorting</figcaption>
</figure>
<p>The image above illustrates the effect of a stable sort. On the left, the data was sorted alphabetically by Name. After sorting the data by Grade, you can see that the alphabetical order of the names was maintained for each row with the same Grade.</p>
<figcaption>Image showing the effect of unstable sorting</figcaption>
</figure>
<p>With an unstable sort, there is no guarantee the alphabetical ordering is maintained as shown in the image above.</p>
<h4 id="you-don-t-always-need-a-stable-sort">You don’t always need a stable sort</h4>
<p>Knowing whether or not the sort you use is stable is particularly important. Especially in situations when your data already has some order to it that you would like to maintain when you sort it by another sort key. For example, you have rows in a spreadsheet containing student data that is, by default, sorted by name. You would like also to sort it by grades while maintaining the sorted order of the names.</p>
<p>On the other hand, the stability of the sort doesn’t matter when the sort keys of the objects in a collection are the objects themselves — an array of integers or strings, for example — because we can’t tell the difference among the duplicated keys.</p><pre><code>// JavaScript</code></pre><pre><code>// $5 bucks if you can correctly tell which 4 in the sorted// array was the first 4 when the array was unsorted.</code></pre><pre><code>var numbers = [5, 4, 3, 4, 9];numbers.sort(); // [3, 4, 4, 5, 9]</code></pre><pre><code>// A one second trip around the world, courtesy of the Flash, to// whomever correctly tells me which 'harry' in the sorted array was// the second 'harry' in the unsorted array.</code></pre><pre><code>var names = ['harry', 'barry', 'harry', 'cisco'];names.sort(); // ['barry', 'cisco', 'harry', 'harry']</code></pre>
<h4 id="sorts-are-everywhere-know-your-sorts">Sorts are everywhere — know your sorts</h4>
<p>It’s quite easy to find out if the default sort in your programming language or library is stable. The documentation should include this information. For instance, <a href="https://wiki.python.org/moin/HowTo/Sorting" rel="noopener">default sorting is stable in Python</a>, <a href="https://ruby-doc.org/core-2.0.0/Enumerable.html#method-i-sort" rel="noopener">unstable in Ruby</a>, and <a href="http://www.ecma-international.org/ecma-262/7.0/index.html#sec-array.prototype.sort" rel="noopener">undefined</a>? <a href="http://www.ecma-international.org/ecma-262/7.0/index.html#sec-array.prototype.sort" rel="noopener">in JavaScript </a>(it depends on the browser’s implementation).</p>
<p>Here are a few common sorting algorithms and their stability:</p>
<ul>
<li>Insertion Sort — Stable</li>
<li>Selection Sort — Unstable</li>
<li>Bubble Sort — Stable</li>
<li>Merge Sort — Stable</li>
<li>Shell Sort — Unstable</li>
<li>Timsort — Stable</li>
</ul>
<p>See <a href="https://en.wikipedia.org/wiki/Sorting_algorithm#Stability" rel="noopener">Wikipedia</a> for a more exhaustive list.</p>
<h4 id="it-s-demo-time-">It’s demo time ?‍?</h4>
<p><a href="https://onelharrison.com/sort-stability-demo/" rel="noopener">This demo</a> shows the effect of using a stable (insertion sort) and unstable sorting (selection sort) algorithm to sort a small table of data. I had a bit of fun and practically reverse engineered React while building this. Have a look at the <a href="https://github.com/onelharrison/sort-stability-demo" rel="noopener">source</a>.</p>
<h3 id="what-s-next">What’s next?</h3>
<p>If you are thirsty for more knowledge about the stability of other sorting algorithms, <a href="https://en.wikipedia.org/wiki/Sorting_algorithm#Stability" rel="noopener">Wikipedia</a> has a good comparison table and additional information on well known sorting algorithms.</p>
<p>Until next time, peace.</p>
<h4 id="learned-something-new-or-enjoyed-reading-this-article-clap-it-up-share-it-so-that-others-can-read-too-and-follow-along-for-more-feel-free-to-leave-a-comment-too-">Learned something new or enjoyed reading this article? Clap it up ?, share it so that others can read too, and follow along for more. Feel free to leave a comment too.</h4>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
