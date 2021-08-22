---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9e32740569d1a4ca3bd6.jpg"
tags: [Python]
description: "Lambda Expressions are ideally used when we need to do someth"
author: "Milad E. Fahmy"
title: "Lambda Expressions in Python"
created: "2021-08-16T15:38:01+02:00"
modified: "2021-08-16T15:38:01+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-lambda-expressions ">
<header class="post-full-header">
<h1 class="post-full-title">Lambda Expressions in Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e32740569d1a4ca3bd6.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e32740569d1a4ca3bd6.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e32740569d1a4ca3bd6.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e32740569d1a4ca3bd6.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e32740569d1a4ca3bd6.jpg" alt="Lambda Expressions in Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="lambda-expressions"><strong>Lambda Expressions</strong></h2><p>Lambda Expressions are ideally used when we need to do something simple and are more interested in getting the job done quickly rather than formally naming the function. Lambda expressions are also known as anonymous functions.</p><p>Lambda Expressions in Python are a short way to declare small and anonymous functions (it is not necessary to provide a name for lambda functions). </p><p>Lambda functions behave just like regular functions declared with the <code>def</code> keyword. They come in handy when you want to define a small function in a concise way. They can contain only one expression, so they are not best suited for functions with control-flow statements. </p><h3 id="syntax-of-a-lambda-function">Syntax of a Lambda Function</h3><p><code>lambda arguments: expression</code></p><p>Lambda functions can have any number of arguments but only one expression.</p><h3 id="example-code">Example code</h3><pre><code class="language-py"># Lambda function to calculate square of a number
square = lambda x: x ** 2
print(square(3)) # Output: 9
# Traditional function to calculate square of a number
def square1(num):
return num ** 2
print(square(5)) # Output: 25</code></pre><p>In the above lambda example, <code>lambda x: x ** 2</code> yields an anonymous function object which can be associated with any name. So, we associated the function object with <code>square</code>. So from now on we can call the <code>square</code> object like any traditional function, for example <code>square(10)</code></p><h2 id="examples-of-lambda-functions"><strong>Examples of lambda functions</strong></h2><h3 id="beginner"><strong>Beginner</strong></h3><pre><code class="language-py">lambda_func = lambda x: x**2 # Function that takes an integer and returns its square
lambda_func(3) # Returns 9</code></pre><h3 id="intermediate"><strong>Intermediate</strong></h3><pre><code class="language-py">lambda_func = lambda x: True if x**2 &gt;= 10 else False
lambda_func(3) # Returns False
lambda_func(4) # Returns True</code></pre><h3 id="complex"><strong>Complex</strong></h3><pre><code class="language-py">my_dict = {"A": 1, "B": 2, "C": 3}
sorted(my_dict, key=lambda x: my_dict[x]%3) # Returns ['C', 'A', 'B']</code></pre><h2 id="use-case">Use-case</h2><p>Let’s say you want to filter out odd numbers from a <code>list</code>. You could use a <code>for</code> loop:</p><pre><code class="language-python">my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
filtered = []
for num in my_list:
if num % 2 != 0:
filtered.append(num)
print(filtered)# Python 2: print filtered
# [1, 3, 5, 7, 9]</code></pre><p>Or you could write this as a one liner with list-comprehensions:</p><pre><code class="language-python">filtered = [x for x in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] if x % 2 != 0]</code></pre><p>But you might be tempted to use the built-in <code>filter</code> function. Why? The first example is a bit too verbose and the one-liner can be harder to understand. But <code>filter</code> offers the best of both words. What is more, the built-in functions are usually faster.</p><pre><code class="language-python">my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
filtered = filter(lambda x: x % 2 != 0, my_list)
list(filtered)
# [1, 3, 5, 7, 9]</code></pre><p>NOTE: in Python 3 built in functions return generator objects, so you have to call <code>list</code>. In Python 2, on the other hand, they return a <code>list</code>, <code>tuple</code>or <code>string</code>.</p><p>So what happened? You told <code>filter</code> to take each element in <code>my_list</code> and apply the lambda expressions. The values that return <code>False</code> are filtered out.</p><h4 id="more-information-"><strong>More Information:</strong></h4><ul><li><a href="https://docs.python.org/3/reference/expressions.html#lambda">Official Docs</a></li></ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
