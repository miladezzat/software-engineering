---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9e34740569d1a4ca3be2.jpg"
tags: [Python]
description: "All functions return a value when called."
author: "Milad E. Fahmy"
title: "Python Return Statements Explained: What They Are and Why You Use Them"
created: "2021-08-16T15:38:04+02:00"
modified: "2021-08-16T15:38:04+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">Python Return Statements Explained: What They Are and Why You Use Them</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e34740569d1a4ca3be2.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e34740569d1a4ca3be2.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e34740569d1a4ca3be2.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e34740569d1a4ca3be2.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e34740569d1a4ca3be2.jpg" alt="Python Return Statements Explained: What They Are and Why You Use Them">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>All functions return a value when called.</p><p>If a return statement is followed by an expression list, that expression list is evaluated and the value is returned:</p><pre><code class="language-text">&gt;&gt;&gt; def greater_than_1(n):
...     return n &gt; 1
...
&gt;&gt;&gt; print(greater_than_1(1))
False
&gt;&gt;&gt; print(greater_than_1(2))
True</code></pre><p>If no expression list is specified, <code>None</code> is returned:</p><pre><code class="language-text">&gt;&gt;&gt; def no_expression_list():
...     return    # No return expression list.
...
&gt;&gt;&gt; print(no_expression_list())
None</code></pre><p>If a return statement is reached during the execution of a function, the current function call is left at that point:</p><pre><code class="language-text">&gt;&gt;&gt; def return_middle():
...     a = 1
...     return a
...     a = 2     # This assignment is never reached.
...
&gt;&gt;&gt; print(return_middle())
1</code></pre><p>If there is no return statement the function returns None when it reaches the end:</p><pre><code class="language-text">&gt;&gt;&gt; def no_return():
...     pass     # No return statement.
...
&gt;&gt;&gt; print(no_return())
None
</code></pre><p>A single function can have multiple <code>return</code> statements. Execution of the function ends when one of these <code>return</code> statements is reached:</p><pre><code class="language-text"> &gt;&gt;&gt; def multiple_returns(n):
...    if(n):
...  return "First Return Statement"
...    else:
...  return "Second Return Statement"
...
&gt;&gt;&gt; print(multiple_returns(True))
First Return Statement
&gt;&gt;&gt; print(multiple_returns(False))
Second Return Statement
</code></pre><p>A single function can return various types:</p><pre><code class="language-text"> &gt;&gt;&gt; def various_return_types(n):
...     if(n==1):
...   return "Hello World."   # Return a string
...     elif(n==2):
...   return 42               # Return a value
...     else:
...   return True             # Return a boolean
...
&gt;&gt;&gt; print(various_return_types(1))
Hello World.
&gt;&gt;&gt; print(various_return_types(2))
42
&gt;&gt;&gt; print(various_return_types(3))
True</code></pre><p>It is even possible to have a single function return multiple values with only a single return:</p><pre><code class="language-text"> &gt;&gt;&gt; def return_two_values():
...     a = 40
...     b = 2
...     return a,b
...
&gt;&gt;&gt; print("First value = %d,  Second value = %d" %(return_two_values()))
First value = 40,  Second value = 2</code></pre><p>See the <a href="https://docs.python.org/3/reference/simple_stmts.html#the-return-statement" rel="nofollow">Python Docs</a> for more info.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
