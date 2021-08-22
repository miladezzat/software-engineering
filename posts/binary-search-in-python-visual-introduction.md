---
card: "/images/default.jpg"
tags: [Python]
description: "In this article, you will learn how the Binary Search algorit"
author: "Milad E. Fahmy"
title: "Binary Search in Python: A Visual Introduction"
created: "2021-08-16T15:37:38+02:00"
modified: "2021-08-16T15:37:38+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-computer-science tag-programing tag-algorithms ">
<header class="post-full-header">
<h1 class="post-full-title">Binary Search in Python: A Visual Introduction</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/01/Binary-Search-1.png 300w,
/news/content/images/size/w600/2020/01/Binary-Search-1.png 600w,
/news/content/images/size/w1000/2020/01/Binary-Search-1.png 1000w,
/news/content/images/size/w2000/2020/01/Binary-Search-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/01/Binary-Search-1.png" alt="Binary Search in Python: A Visual Introduction">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
low = 0
high = len(data) - 1
while low &lt;= high:
middle = (low + high)//2
if data[middle] == elem:
return middle
elif data[middle] &gt; elem:
high = middle - 1
else:
low = middle + 1
return -1</code></pre><h3 id="header">Header</h3><p>Here we have the function header:</p><pre><code>def binary_search(data, elem):</code></pre><p>It takes two arguments: </p><ul><li>The ordered sequence of elements (for example: list, tuple, or string). </li><li>The element that we want to find.</li></ul><h3 id="initial-interval">Initial Interval</h3><p>The next line sets the initial lower and upper bounds:</p><pre><code class="language-python">low = 0
high = len(data) - 1</code></pre><p>The initial lower bound is index <code>0</code> and the initial upper bound is the last index of the sequence.</p><h3 id="loop">Loop</h3><p>We will repeat the process while there is a valid interval, while the lower bound is smaller than or equal to the upper bound. </p><pre><code class="language-python">while low &lt;= high:</code></pre><p>💡 <strong>Tip:</strong> Remember that the bounds are indices.</p><h3 id="middle-element-2">Middle Element</h3><p>On every iteration, we need to find the index of the middle element. To do this, we add the lower and upper bounds and divide the result by 2 using integer division. </p><pre><code class="language-python">middle = (low + high)//2</code></pre><p>💡 <strong>Tip:</strong> We use integer division in case the list or interval contains an even number of elements. For example, if the list had 6 elements and we did not use integer division, <code>middle</code> would be the result of <code>(0 + 5)/2</code> which is <code>2.5</code>. An index cannot be a float, so we truncate the decimal portion by using <code>//</code> and select the element at index <code>2</code>. </p><h3 id="comparisons-2">Comparisons</h3><p>With these conditionals (see below), we determine what to do depending on the value of the middle element <code>data[middle]</code>. We compare it to the target element that we are looking for.</p><pre><code class="language-python">if data[middle] == elem:
return middle
elif data[middle] &gt; elem:
high = middle - 1
else:
low = middle + 1</code></pre><p>There are three options:</p><ul><li>If the middle element is equal to the element that we are looking for, we return the index immediately because we found the element.</li></ul><pre><code class="language-python">if data[middle] == elem:
return middle</code></pre><ul><li>If the middle element is greater than the element that we are looking for, we reassign the upper bound because we know that the target element is in the lower half of the list.</li></ul><pre><code class="language-python">elif data[middle] &gt; elem:
high = middle - 1</code></pre><ul><li>Else, the only option left is that the middle element is smaller than the element that we are looking for, so we reassign the lower bound because we know that the target element is in the upper half of the list.</li></ul><pre><code class="language-python">else:
low = middle + 1</code></pre><h3 id="element-not-found">Element Not Found</h3><p>If the loop is completed without finding the element, the value -1 is returned.</p><pre><code class="language-python">return -1</code></pre><p>and we have the final implementation of the Binary Search algorithm:</p><pre><code>def binary_search(data, elem):
low = 0
high = len(data) - 1
while low &lt;= high:
middle = (low + high)//2
if data[middle] == elem:
return middle
elif data[middle] &gt; elem:
high = middle - 1
else:
low = middle + 1
return -1</code></pre><h2 id="-special-cases">🔸 Special Cases</h2><p>These are some particular cases that you may find as you start working with this algorithm:</p><h3 id="repeated-elements">Repeated Elements</h3><p>If the element that you are looking for is repeated in the sequence, the index returned will depend on the number of elements and on the sequence of operations that the algorithm performs on the sequence.</p><pre><code class="language-python">&gt;&gt;&gt; &gt;&gt;&gt; b = [2, 2, 3, 6, 7, 7]
&gt;&gt;&gt; binary_search(b, 7)
4
</code></pre><h3 id="element-not-found-1">Element Not Found</h3><p>If the element is not found, -1 is returned.</p><pre><code class="language-python">&gt;&gt;&gt; b = [2, 2, 3, 6, 7, 7]
&gt;&gt;&gt; binary_search(b, 8)
-1</code></pre><h3 id="empty-sequence">Empty Sequence</h3><p>If the sequence is empty, -1 will be returned.</p><pre><code class="language-python">&gt;&gt;&gt; b = []
&gt;&gt;&gt; binary_search(b, 8)
-1</code></pre><h3 id="unsorted-sequence">Unsorted Sequence</h3><p>If the sequence is unsorted, the answer will not be correct. Getting the correct index is pure coincidence and it could be due to the order of the elements in the sequence and the sequence of operations performed by the algorithm.</p><p>This example returns the correct result:</p><pre><code class="language-python">&gt;&gt;&gt; b = [5, 7, 3, 0, -9, 2, 6]
&gt;&gt;&gt; binary_search(b, 6)
6</code></pre><p>But this one doesn't:</p><pre><code class="language-python">&gt;&gt;&gt; b = [5, 7, 3, 0, -9, 2, 10, 6]
&gt;&gt;&gt; binary_search(b, 6)
8</code></pre><h2 id="-extra-practice">🔸 Extra Practice</h2><p>If you would like to have some extra practice with this algorithm, try to explain how the algorithm works behind the scenes when it's applied to this list to find the integer <strong>90</strong>:</p><pre><code>[5, 8, 15, 26, 38, 56]</code></pre><ul><li>What happens step by step?</li><li>What value is returned?</li><li>Is the element found?</li></ul><p><strong>I really hope you liked my article and found it helpful. </strong>Now you can implement the Binary Search algorithm in Python. Check out my online course "<a href="https://www.udemy.com/course/python-searching-sorting-algorithms/?couponCode=FREECODECAMP-ALG">Python Searching &amp; Sorting Algorithms: A Practical Approach</a>". Follow me on <a href="https://twitter.com/EstefaniaCassN">Twitter</a>. ⭐️</p>
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
