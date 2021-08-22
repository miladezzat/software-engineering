---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9d34740569d1a4ca367b.jpg"
tags: [Python]
description: "Itertools is a Python module of functions that return generat"
author: "Milad E. Fahmy"
title: "Python Itertools --- chain, isSlice, and izip Explained with Examples"
created: "2021-08-16T15:37:19+02:00"
modified: "2021-08-16T15:37:19+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">Python Itertools --- chain, isSlice, and izip Explained with Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d34740569d1a4ca367b.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d34740569d1a4ca367b.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d34740569d1a4ca367b.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d34740569d1a4ca367b.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d34740569d1a4ca367b.jpg" alt="Python Itertools --- chain, isSlice, and izip Explained with Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>Itertools is a Python module of functions that return generators, which are objects that only function when iterated over.</p><h2 id="chain-">chain()</h2><p>The <code>chain()</code> function takes several iterators as arguments. It goes through each element of each passed iterable, then returns a single iterator with the contents of all passed iterators.</p><pre><code class="language-py">import itertools
list(itertools.chain([1, 2], [3, 4]))
# Output
# [1, 2, 3, 4]</code></pre><h2 id="islice-">islice()</h2><p>The <code>islice()</code> function returns specific elements from the passed iterator.</p><p>It takes the same arguments as the <code>slice()</code> operator for lists: start, stop, and step. Start and stop are optional.</p><pre><code class="language-py">import itertools
list(itertools.islice(count(), 5))
# Output
# [0, 1, 2, 3, 4]</code></pre><h2 id="izip-">izip()</h2><p><code>izip()</code> returns an iterator that combines the elements of the passed iterators into tuples.</p><p>It works similarly to <code>zip()</code>, but returns an iterator instead of a list.</p><pre><code class="language-py">import itertools
list(izip([1, 2, 3], ['a', 'b', 'c']))
# Output
# [(1, 'a'),(2, 'b'),(3, 'c')]</code></pre><h2 id="more-information-">More Information:</h2><ul><li><a href="/news/learn-data-analysis-with-python-course/">Learn Data Analysis with Python – A Free 4-Hour Course</a></li><li><a href="/news/multithreaded-python/">Multithreaded Python: slithering through an I/O bottleneck ?</a></li></ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
