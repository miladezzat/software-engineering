---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9d49740569d1a4ca36ed.jpg"
tags: [Python]
description: "The method pop() removes and returns the last element from a "
author: "Milad E. Fahmy"
title: "Pop Function in Python"
created: "2021-08-16T15:37:26+02:00"
modified: "2021-08-16T15:37:26+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">Pop Function in Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d49740569d1a4ca36ed.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d49740569d1a4ca36ed.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d49740569d1a4ca36ed.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d49740569d1a4ca36ed.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d49740569d1a4ca36ed.jpg" alt="Pop Function in Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h1 id="what-is-the-pop-function">What is the pop function?</h1><p>The method pop() removes and returns the last element from a list. There is an optional parameter which is the index of the element to be removed from the list. If no index is specified, a.pop() removes and returns the last item in the list. If the index passed to the pop() method is not in the range, it throws IndexError: pop index out of range exception.</p><h3 id="example-usage">Example Usage</h3><pre><code class="language-py">cities = ['New York', 'Dallas', 'San Antonio', 'Houston', 'San Francisco'];
print "City popped is : ", cities.pop()
print "City at index 2 is  : ", cities.pop(2)</code></pre><h4 id="output"><strong>Output</strong></h4><pre><code class="language-text">City popped is :  San Francisco
City at index 2 is  :  San Antonio</code></pre><h3 id="basic-stack-functionality">Basic Stack Functionality</h3><p>The <code>pop()</code> method is often used in conjunction with <code>append()</code> to implement basic stack functionality in a Python application.</p><pre><code class="language-py">stack = []
for i in range(5):
stack.append(i)
while len(stack):
print(stack.pop())</code></pre><h4 id="more-information-"><strong>More Information:</strong></h4><p>The official documentation for <code>pop()</code> can be found <a href="https://docs.python.org/3.6/tutorial/datastructures.html" rel="nofollow">here</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
