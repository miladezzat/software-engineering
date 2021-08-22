---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9e0d740569d1a4ca3b11.jpg"
tags: [Python]
description: "There are times when you want your program to run immediately"
author: "Milad E. Fahmy"
title: "How to Make a Time Delay in Python Using the sleep() Function"
created: "2021-08-16T15:37:46+02:00"
modified: "2021-08-16T15:37:46+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">How to Make a Time Delay in Python Using the sleep() Function</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e0d740569d1a4ca3b11.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e0d740569d1a4ca3b11.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e0d740569d1a4ca3b11.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e0d740569d1a4ca3b11.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e0d740569d1a4ca3b11.jpg" alt="How to Make a Time Delay in Python Using the sleep() Function">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>There are times when you want your program to run immediately. But there are also some times when you want to delay the execution of certain pieces of code.</p><p>That's where Python's <code>time</code> module comes in. <code>time</code> is part of Python's standard library, and contains the helpful <code>sleep()</code> function that suspends or pauses a program for a given number of seconds:</p><pre><code class="language-text">import time
print('runs immediately')
for letter in 'hello, world!':
time.sleep(2)  # sleep 2 seconds between each print
print(letter)</code></pre><p><strong>Output:</strong></p><pre><code>runs immediately
h # each character printed after a two second delay
e
l
l
o
,
w
o
r
l
d
!</code></pre><p>Floating point numbers can be given as the argument to <code>sleep()</code> for more precise sleep times. For example, the following code will delay each <code>print()</code> statement for half a second, or 500 ms:</p><pre><code class="language-py">import time
for letter in 'floats work, too':
time.sleep(0.5) # adds a 500 ms delay
print(letter)</code></pre><p><strong>Output:</strong></p><pre><code>f # each character printed after a 500 ms delay
l
o
a
t
s
w
o
r
k
,
t
o
o</code></pre><p>Sometimes you might need to delay for known, different increments of time. In that case you can iterate through a list of different delay periods with a <code>for</code> loop:</p><pre><code class="language-py">import time
for i in [.5, 1, 2, 3, 4]:
time.sleep(i)
print(f"Delayed for {i} seconds")</code></pre><p><strong>Output:</strong></p><pre><code>Delayed for 0.5 seconds
Delayed for 1 seconds
Delayed for 2 seconds
Delayed for 3 seconds
Delayed for 4 seconds</code></pre><p>As you can imagine, there's a lot that you can do with the <code>sleep()</code> function. Now go ahead and try it in your own programs – no need to sleep on it!</p><h4 id="more-information-"><strong>More Information:</strong></h4><p>Time module <a href="https://docs.python.org/3/library/time.html#time.sleep" rel="nofollow">documentation</a> on the sleep function.</p><h2 id="more-python-tutorials-">More Python tutorials:</h2><p><a href="/news/best-python-tutorial/">The best Python tutorials</a></p><p><a href="/news/python-example/">The best Python code examples</a></p><p><a href="/news/python-for-everybody/">Python for Everybody from Dr. Chuck</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
