---
card: "https://cdn-media-2.freecodecamp.org/w1280/606365729618b008528a99ae.jpg"
tags: [Python]
description: "Loops are one of the main control structures in any programmi"
author: "Milad E. Fahmy"
title: "Python For Loop - For i in Range Example"
created: "2021-08-16T15:34:32+02:00"
modified: "2021-08-16T15:34:32+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-loops ">
<header class="post-full-header">
<h1 class="post-full-title">Python For Loop - For i in Range Example</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/606365729618b008528a99ae.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/606365729618b008528a99ae.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/606365729618b008528a99ae.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/606365729618b008528a99ae.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/606365729618b008528a99ae.jpg" alt="Python For Loop - For i in Range Example">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Loops are one of the main control structures in any programming language, and Python is no different.</p><p>In this article, we will look at a couple of examples using <code>for</code> loops with Python's <code>range()</code> function.</p><h2 id="for-loops-in-python">For Loops in Python</h2><p><code>for</code> loops repeat a portion of code for a set of values. </p><p>As discussed in <a href="https://docs.python.org/3/tutorial/controlflow.html#for-statements">Python's documentation</a>, <code>for</code> loops work slightly differently than they do in languages such as JavaScript or C. </p><p>A <code>for</code> loop sets the iterator variable to each value in a provided list, array, or string and repeats the code in the body of the <code>for</code> loop for each value of the iterator variable.</p><p>In the example below, we use a <code>for</code> loop to print every number in our array.</p><pre><code class="language-python"># Example for loop
for i in [1, 2, 3, 4]:
print(i, end=", ") # prints: 1, 2, 3, 4,</code></pre><p>We can include more complex logic in the body of a <code>for</code> loop as well. In this example we print the result of a small computation based on the value of our iterator variable.</p><pre><code class="language-python"># More complex example
for i in [1, 3, 5, 7, 9]:
x = i**2 - (i-1)*(i+1)
print(x, end=", ") # prints 1, 1, 1, 1, 1, </code></pre><p>When the values in the array for our <code>for</code> loop are sequential, we can use Python's <code>range()</code> function instead of writing out the contents of our array.</p><h2 id="the-range-function-in-python">The Range function in Python</h2><p>The <code>range()</code> function provides a sequence of integers based upon the function's arguments. Additional information can be found in <a href="https://docs.python.org/3/library/stdtypes.html#range">Python's documentation</a> for the <code>range()</code> function.</p><pre><code class="language-python">range(stop)
range(start, stop[, step])
</code></pre><p>The <code>start</code> argument is the first value in the range. If <code>range()</code> is called with only one argument, then Python assumes <code>start = 0</code>.</p><p>The <code>stop</code> argument is the upper bound of the range. It is important to realize that this upper value is not included in the range.</p><p>In the example below, we have a range starting at the default value of <code>0</code> and including integers less than <code>5</code>.</p><pre><code class="language-python"># Example with one argument
for i in range(5):
print(i, end=", ") # prints: 0, 1, 2, 3, 4, </code></pre><p>In our next example, we set <code>start = -1</code> and again include integers less than <code>5</code>.</p><pre><code class="language-python"># Example with two arguments
for i in range(-1, 5):
print(i, end=", ") # prints: -1, 0, 1, 2, 3, 4, </code></pre><p>The optional <code>step</code> value controls the increment between the values in the range. By default, <code>step = 1</code>.</p><p>In our final example, we use the range of integers from <code>-1</code> to <code>5</code> and set <code>step = 2</code>.</p><pre><code class="language-python"># Example with three arguments
for i in range(-1, 5, 2):
print(i, end=", ") # prints: -1, 1, 3, </code></pre><h2 id="summary">Summary</h2><p>In this article, we looked at <code>for</code> loops in Python and the <code>range()</code> function.</p><p><code>for</code> loops repeat a block of code for all of the values in a list, array, string, or <code>range()</code>.</p><p>We can use a <code>range()</code> to simplify writing a <code>for</code> loop. The <code>stop</code> value of the <code>range()</code> must be specified, but we can also modify the <code>start</code>ing value and the <code>step</code> between integers in the <code>range()</code>.</p>
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
