---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9e24740569d1a4ca3b94.jpg"
tags: [Python]
description: "A nested function is simply a function within another functio"
author: "Milad E. Fahmy"
title: "Nested Functions in Python"
created: "2021-08-16T15:37:52+02:00"
modified: "2021-08-16T15:37:52+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">Nested Functions in Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e24740569d1a4ca3b94.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e24740569d1a4ca3b94.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e24740569d1a4ca3b94.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e24740569d1a4ca3b94.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e24740569d1a4ca3b94.jpg" alt="Nested Functions in Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>A nested function is simply a function within another function, and is sometimes called an "inner function". There are many reasons why you would want to use nested functions, and we'll go over the most common in this article.</p><h3 id="how-to-define-a-nested-function">How to define a nested function</h3><p>To define a nested function, just initialize another function within a function by using the <code>def</code> keyword:</p><pre><code class="language-py">def greeting(first, last):
# nested helper function
def getFullName():
return first + " " + last
print("Hi, " + getFullName() + "!")
greeting('Quincy', 'Larson')</code></pre><p><strong>Output:</strong></p><pre><code class="language-sh">Hi, Quincy Larson!</code></pre><p>As you can see, the nested <code>getFullName</code> function has access to the outer <code>greeting</code> function's parameters, <code>first</code> and <code>last</code>. This is a common use case for nested functions–to serve as small helper function to a more complex outer function.</p><h2 id="reasons-to-use-nested-functions">Reasons to use nested functions</h2><p>While there are many valid reasons to use nested functions, among the most common are encapsulation and closures / factory functions.</p><h3 id="data-encapsulation">Data encapsulation</h3><p>There are times when you want to prevent a function or the data it has access to from being accessed from other parts of your code, so you can <em>encapsulate</em> it within another function. </p><p>When you nest a function like this, it's hidden from the global scope. Because of this behavior, data encapsulation is sometimes referred to as <strong>data hiding </strong>or<strong> data privacy</strong>. For example:</p><pre><code class="language-py">def outer():
print("I'm the outer function.")
def inner():
print("And I'm the inner function.")
inner()
inner()</code></pre><p><strong>Output:</strong></p><pre><code class="language-sh">Traceback (most recent call last):
File "main.py", line 16, in &lt;module&gt;
inner()
NameError: name 'inner' is not defined</code></pre><p>In the code above, the <code>inner</code> function is only available from within the function <code>outer</code>. If you try to call <code>inner</code> from outside the function, you'll get the error above.</p><p>Instead, you must call the <code>outer</code> function like so:</p><pre><code class="language-py">def outer():
print("I'm the outer function.")
def inner():
print("And I'm the inner function.")
inner()
outer()</code></pre><p><strong>Output:</strong></p><pre><code class="language-sh">I'm the outer function.
And I'm the inner function.</code></pre><h3 id="closures">Closures</h3><p>But what would happen if the outer function returns the inner function itself, rather than calling it like in the example above? In that case you would have what's known as a closure.</p><p>The following are the conditions that are required to be met in order to create a closure in Python:</p><p>These are the conditions you need to create a closure in Python:</p><blockquote>1. There must be a nested function<br><br>2. The inner function has to refer to a value that is defined in the enclosing scope<br><br>3. The enclosing function has to return the nested function<br><br>- Source: <a href="https://stackabuse.com/python-nested-functions/">https://stackabuse.com/python-nested-functions/</a></blockquote><p>Here's a simple example of a closure:</p><pre><code class="language-py">def num1(x):
def num2(y):
return x + y
return num2
print(num1(10)(5))</code></pre><p><strong>Output:</strong></p><pre><code class="language-sh">15</code></pre><p>Closures make it possible to pass data to inner functions without first passing them to outer functions with parameters like the <code>greeting</code> example at the beginning of the article. They also make it possible to invoke the inner function from outside of the encapsulating outer function. All this with the benefit of data encapsulation / hiding mentioned before.</p><p>Now that you understand how and why to nest functions in Python, go out and nest 'em with the best of 'em.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
