---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9dd6740569d1a4ca39e8.jpg"
tags: [Python]
description: "Similar to the built-in str() method, Python also offers the "
author: "Milad E. Fahmy"
title: "How to Convert Strings into Integers in Python"
created: "2021-08-16T15:37:34+02:00"
modified: "2021-08-16T15:37:34+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">How to Convert Strings into Integers in Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9dd6740569d1a4ca39e8.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9dd6740569d1a4ca39e8.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9dd6740569d1a4ca39e8.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9dd6740569d1a4ca39e8.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9dd6740569d1a4ca39e8.jpg" alt="How to Convert Strings into Integers in Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>Similar to the built-in <code>str()</code> method, Python also offers the handy <code>int()</code> method that takes a string object as an argument and returns an integer.</p><h4 id="example-usage-"><strong>Example Usage:</strong></h4><pre><code class="language-py"># Here age is a string object
age = "18"
print(age)
# Converting a string to an integer
int_age = int(age)
print(int_age)</code></pre><p><strong>Output:</strong></p><pre><code class="language-py">18
18</code></pre><p>Although the output is visually similar, keep in mind that the first line is a string object while the following line is an integer object. This is further illustrated in the next example:</p><pre><code class="language-py">age = "18"
print(age + 2)</code></pre><p><strong>Output:</strong></p><pre><code class="language-py">Traceback (most recent call last):
File "&lt;stdin&gt;", line 1, in &lt;module&gt;
TypeError: cannot concatenate 'str' and 'int' objects</code></pre><p>The error should make it clear to you that you need to convert the <code>age</code> object to an integer before adding something to it.</p><pre><code class="language-py">age = "18"
age_int = int(age)
print(age_int + 2)</code></pre><p><strong>Output:</strong></p><pre><code class="language-py">20</code></pre><p>But keep these special cases in mind:</p><ul><li>A floating point (an integer with fractional part) as an argument will return the float rounded down to the nearest whole integer. For example : <code>print(int(7.9))</code> will print <code>7</code>. On the other hand, <code>print(int("7.9"))</code> will result in an error since a float as a string object cannot be converted to an integer.</li></ul><pre><code class="language-py">Traceback (most recent call last):
File "&lt;stdin&gt;", line 1, in &lt;module&gt;
ValueError: invalid literal for int() with base 10: '7.9'</code></pre><ul><li>Words given as an argument will return the same error. For example, <code>print(int("one"))</code> will return:</li></ul><pre><code class="language-py">Traceback (most recent call last):
File "&lt;stdin&gt;", line 1, in &lt;module&gt;
ValueError: invalid literal for int() with base 10: 'one'</code></pre>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
