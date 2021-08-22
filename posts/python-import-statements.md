---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9c95740569d1a4ca3304.jpg"
tags: [Python]
description: "While learning programming and reading some resources you’d h"
author: "Milad E. Fahmy"
title: "Python Import Statements Explained"
created: "2021-08-16T15:37:16+02:00"
modified: "2021-08-16T15:37:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">Python Import Statements Explained</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c95740569d1a4ca3304.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c95740569d1a4ca3304.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c95740569d1a4ca3304.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c95740569d1a4ca3304.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c95740569d1a4ca3304.jpg" alt="Python Import Statements Explained">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>While learning programming and reading some resources you’d have come across this word ‘abstraction’ which simply means to reduce and reuse the code as much as possible.</p><p>Functions and Modules facilitate abstraction. You create functions when you want to do something repeatedly within a file.</p><p>Modules come into picture when you want to reuse a group of functions in different source files. Modules are also useful in structuring the program well.</p><ul><li>Using Standard Libraries and other third party modules</li><li>Structuring the program</li></ul><h2 id="using-standard-libraries"><strong>Using Standard Libraries</strong></h2><p>Example: You can read about the methods/functions of all the standard libraries in the official Python Docs in detail.</p><pre><code class="language-text">import time
for i in range(100):
time.sleep(1)   # Waits for 1 second and then executes the next command
import time
start = time.time()
# code here
end = time.time()
import math
import requests
rq = requests.get(target_url)
print(rq.status_code)</code></pre><p>Find out more about python-requests module <a href="http://docs.python-requests.org/en/master/" rel="nofollow">here</a></p><h2 id="to-structure-programs"><strong>To structure programs</strong></h2><p>We want to make a program that has various functions regarding prime numbers. So lets start. We will define all the functions in <code>prime_functions.py</code></p><pre><code class="language-text"># prime_functions.py
from math import ceil, sqrt
def isPrime(a):
if a == 2:
return True
elif a % 2 == 0:
return False
else:
for i in range(3,ceil(sqrt(a)) + 1,2):
if a % i == 0:
return False
return True
def print_n_primes(a):
i = 0
m = 2
while True:
if isPrime(m) ==True:
print(m)
i += 1
m += 1
if i == a:
break</code></pre><p>Now we want to use the functions that we just created in <code>prime_functions.py</code> so we create a new file <code>playground.py</code> to use those functions.</p><p><em>Please note that this program is far too simple to make two separate files, it is just to demonstrate. But when there are large complex programs, making different files is really useful.</em></p><pre><code class="language-text"># playground.py
import prime_functions
print(prime_functions.isPrime(29)) # returns True</code></pre><h2 id="sorting-imports"><strong>Sorting Imports</strong></h2><p>Good practice is to sort <code>import</code> modules in three groups - standard library imports, related third-party imports, and local imports. Within each group it is sensible to sort alphabetically by module name. You can find <a href="https://www.python.org/dev/peps/pep-0008/?#imports">more information in PEP8</a>.</p><p>One of the most important thing for Python language is legibility, and alphabetically sorting modules are quicker to read and search. Also it is easier to verify that something is imported, and avoid duplicated imports.</p><h2 id="from-x-import-y-an-example">From X import Y: an example</h2><p>Here's an example problem:</p><pre><code class="language-text">&gt;&gt;&gt; from math import ceil, sqrt
&gt;&gt;&gt; # here it would be
&gt;&gt;&gt; sqrt(36)
&gt;&gt;&gt; # here it would be
&gt;&gt;&gt; math.sqrt(36)
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
