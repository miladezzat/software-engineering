---
card: "https://cdn-media-2.freecodecamp.org/w1280/60721be2d5756f080ba9871d.jpg"
tags: [Python]
description: "If you re learning how to code, the Python Map Function is yo"
author: "Milad E. Fahmy"
title: "Python Map – How to Map a List in Python 3.0, With Example Function Code"
created: "2021-08-16T15:34:26+02:00"
modified: "2021-08-16T15:34:26+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">Python Map – How to Map a List in Python 3.0, With Example Function Code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/60721be2d5756f080ba9871d.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/60721be2d5756f080ba9871d.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/60721be2d5756f080ba9871d.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/60721be2d5756f080ba9871d.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/60721be2d5756f080ba9871d.jpg" alt="Python Map – How to Map a List in Python 3.0, With Example Function Code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>If you're learning how to code, the Python Map Function is your opportunity to level up. </p><p>Picture this: you want to become a more efficient coder. You want your code to compile faster. You want to impress your peers with your robust coding knowledge. If any of this resonates with you, then you've come to the right place. </p><p>Before we move forward you need to understand what functions and iterables are:</p><p>Functions are code that performs a specific task.</p><p><em>Examples: <code>len()</code>, <code>print()</code>, <code>str()</code></em></p><p>Iterables are objects that contain one or more members.</p><p><em>Examples: list, dictionary, tuple</em></p><p>The Python Map Function is a function that allows you to transform an entire iterable using another function. The key concept here is transformation which can include but is not limited to:</p><ul><li>Converting strings to numbers</li><li>Rounding numbers</li><li>Getting the length of each iterable member</li></ul><p>You might be wondering, "why can't I just do the above with a for loop?"</p><p>The answer is, you can. But using the Python Map Function saves you memory (which means that your code runs faster) and requires less code. Let's walk through an example so you can understand what I mean. </p><h2 id="first-let-s-start-with-a-for-loop">First Let's Start with a For Loop</h2><p>Let's say you have a list of strings that are actually numbers, but you need to convert the list of strings to integers:</p><p><code>list_of_strings = ["5","6","7","8","9", "10"]</code></p><p>You could use an empty list and a for loop to accomplish this:</p><pre><code>list_of_strings = ["5","6","7","8","9", "10"]
result = []
for string in list_of_strings:
result.append(int(string))
print(result)</code></pre><p>If you ran this example you'd get:</p><p>Output: [5, 6, 7, 8, 9, 10]</p><h3 id="what-s-happening-under-the-hood-with-the-for-loop">What's Happening Under the Hood with the For Loop</h3><p>You may be happy with the result, but think about what your code just did. </p><p>You told the computer to go through each member ("5", "6", "7", etc...), convert the member, and then store that member in a new list. While using a for loop to transform a list is functional, it isn't optimal.</p><h2 id="python-map-function-with-example-code-">Python Map Function (with Example Code)</h2><p>Instead, let's use the Python Map Function to produce a functional AND optimal result. We'll start with our list of strings that need to be converted:</p><pre><code>list_of_strings = ["5","6","7","8","9", "10"]
</code></pre><p>Then we'll use the Python Map Function to transform the list of strings to a list of integers:</p><pre><code>result = map(int,list_of_strings)
print(list(result))</code></pre><p>If you run the above example, you'd get the same result:</p><p>Output: [5, 6, 7, 8, 9, 10]</p><p>Before we get to why the Python Map Function is more optimal than using a for loop, let's break down what we just did:</p><pre><code>list_of_strings = ["5","6","7","8","9", "10"]
</code></pre><p>All we did here is create a variable that stores the list of strings that we want to convert to numbers. </p><pre><code>result = map(int,list_of_strings)
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
