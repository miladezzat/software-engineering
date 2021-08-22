---
card: "https://cdn-media-1.freecodecamp.org/images/1*ak94Xh5LGvl2TgtnXPQQhQ.jpeg"
tags: [Python]
description: "by Dmitry Rastorguev"
author: "Milad E. Fahmy"
title: "A simple introduction to Test Driven Development with Python"
created: "2021-08-16T15:41:47+02:00"
modified: "2021-08-16T15:41:47+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-testing tag-software-testing tag-coding tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">A simple introduction to Test Driven Development with Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*ak94Xh5LGvl2TgtnXPQQhQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*ak94Xh5LGvl2TgtnXPQQhQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*ak94Xh5LGvl2TgtnXPQQhQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*ak94Xh5LGvl2TgtnXPQQhQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*ak94Xh5LGvl2TgtnXPQQhQ.jpeg" alt="A simple introduction to Test Driven Development with Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
from mycode import *
class MyFirstTests(unittest.TestCase):
def test_hello(self):
self.assertEqual(hello_world(), 'hello world')</code></pre><p>Notice that we are importing <code>helloworld()</code> function from <code>mycode</code> file. In the file <code>mycode.py</code> we will initially just include the code below, which creates the function but doesn’t return anything at this stage:</p><pre><code class="language-py">def hello_world():
pass</code></pre><p>Running <code>python mytests.py</code> will generate the following output in the command line:</p><pre><code>F
====================================================================
FAIL: test_hello (__main__.MyFirstTests)
--------------------------------------------------------------------
Traceback (most recent call last):
File "mytests.py", line 7, in test_hello
self.assertEqual(hello_world(), 'hello world')
AssertionError: None != 'hello world'
--------------------------------------------------------------------
Ran 1 test in 0.000s
FAILED (failures=1)</code></pre><p>This clearly indicates that the test failed, which was expected. Fortunately, we have already written the tests, so we know that it will always be there to check this function, which gives us confidence in spotting potential bugs in the future.</p><p>To ensure the code passes, lets change <code>mycode.py</code> to the following:</p><pre><code class="language-py">def hello_world():
return 'hello world'</code></pre><p>Running <code>python mytests.py</code> again we get the following output in the command line:</p><pre><code>.
--------------------------------------------------------------------
Ran 1 test in 0.000s
OK</code></pre><p>Congrats! You’ve have just written your first test. Let’s now move on to a slightly more difficult challenge. We’ll create a function that would allow us to create a custom numeric <a href="https://docs.python.org/2/tutorial/datastructures.html" rel="noopener">list comprehension</a> in Python.</p><p>Let’s begin by writing a test for a function that would create a list of specific length.</p><p>In the file <code>mytests.py</code> this would be a method <code>test_custom_num_list</code>:</p><pre><code class="language-py">import unittest
from mycode import *
class MyFirstTests(unittest.TestCase):
def test_hello(self):
self.assertEqual(hello_world(), 'hello world')
def test_custom_num_list(self):
self.assertEqual(len(create_num_list(10)), 10)</code></pre><p>This would test that the function <code>create_num_list</code> returns a list of length 10. Let’s create function <code>create_num_list</code> in <code>mycode.py</code>:</p><pre><code class="language-py">def hello_world():
return 'hello world'
def create_num_list(length):
pass</code></pre><p>Running <code>python mytests.py</code> will generate the following output in the command line:</p><pre><code>E.
====================================================================
ERROR: test_custom_num_list (__main__.MyFirstTests)
--------------------------------------------------------------------
Traceback (most recent call last):
File "mytests.py", line 14, in test_custom_num_list
self.assertEqual(len(create_num_list(10)), 10)
TypeError: object of type 'NoneType' has no len()
--------------------------------------------------------------------
Ran 2 tests in 0.000s
FAILED (errors=1)</code></pre><p>This is as expected, so let’s go ahead and change function <code>create_num_list</code> in <code>mytest.py</code> in order to pass the test:</p><pre><code class="language-py">def hello_world():
return 'hello world'
def create_num_list(length):
return [x for x in range(length)]</code></pre><p>Executing <code>python mytests.py</code> on the command line demonstrates that the second test has also now passed:</p><pre><code>..
--------------------------------------------------------------------
Ran 2 tests in 0.000s
OK</code></pre><p>Let’s now create a custom function that would transform each value in the list like this: <code>const * ( X ) ^ power</code> . First let’s write the test for this, using method <code>test_custom_func_</code> that would take value 3 as X, take it to the power of 3, and multiply by a constant of 2, resulting in the value 54:</p><pre><code class="language-py">import unittest
from mycode import *
class MyFirstTests(unittest.TestCase):
def test_hello(self):
self.assertEqual(hello_world(), 'hello world')
def test_custom_num_list(self):
self.assertEqual(len(create_num_list(10)), 10)
def test_custom_func_x(self):
self.assertEqual(custom_func_x(3,2,3), 54)</code></pre><p>Let’s create the function <code>custom_func_x</code> in the file <code>mycode.py</code>:</p><pre><code class="language-py">def hello_world():
return 'hello world'
def create_num_list(length):
return [x for x in range(length)]
def custom_func_x(x, const, power):
pass</code></pre><p>As expected, we get a fail:</p><pre><code>F..
====================================================================
FAIL: test_custom_func_x (__main__.MyFirstTests)
--------------------------------------------------------------------
Traceback (most recent call last):
File "mytests.py", line 17, in test_custom_func_x
self.assertEqual(custom_func_x(3,2,3), 54)
AssertionError: None != 54
--------------------------------------------------------------------
Ran 3 tests in 0.000s
FAILED (failures=1)</code></pre><p>Updating function <code>custom_func_x</code> to pass the test, we have the following:</p><pre><code class="language-py">def hello_world():
return 'hello world'
def create_num_list(length):
return [x for x in range(length)]
def custom_func_x(x, const, power):
return const * (x) ** power</code></pre><p>Running the tests again we get a pass:</p><pre><code>...
--------------------------------------------------------------------
Ran 3 tests in 0.000s
OK</code></pre><p>Finally, let’s create a new function that would incorporate <code>custom_func_x</code> function into the list comprehension. As usual, let’s begin by writing the test. Note that just to be certain, we include two different cases:</p><pre><code class="language-py">import unittest
from mycode import *
class MyFirstTests(unittest.TestCase):
def test_hello(self):
self.assertEqual(hello_world(), 'hello world')
def test_custom_num_list(self):
self.assertEqual(len(create_num_list(10)), 10)
def test_custom_func_x(self):
self.assertEqual(custom_func_x(3,2,3), 54)
def test_custom_non_lin_num_list(self):
self.assertEqual(custom_non_lin_num_list(5,2,3)[2], 16)
self.assertEqual(custom_non_lin_num_list(5,3,2)[4], 48)</code></pre><p>Now let’s create the function <code>custom_non_lin_num_list</code> in <code>mycode.py</code>:</p><pre><code class="language-py">def hello_world():
return 'hello world'
def create_num_list(length):
return [x for x in range(length)]
def custom_func_x(x, const, power):
return const * (x) ** power
def custom_non_lin_num_list(length, const, power):
pass</code></pre><p>As before, we get a fail:</p><pre><code>.E..
====================================================================
ERROR: test_custom_non_lin_num_list (__main__.MyFirstTests)
--------------------------------------------------------------------
Traceback (most recent call last):
File "mytests.py", line 20, in test_custom_non_lin_num_list
self.assertEqual(custom_non_lin_num_list(5,2,3)[2], 16)
TypeError: 'NoneType' object has no attribute '__getitem__'
--------------------------------------------------------------------
Ran 4 tests in 0.000s
FAILED (errors=1)</code></pre><p>In order to pass the test, let’s update the <code>mycode.py</code> file to the following:</p><pre><code class="language-py">def hello_world():
return 'hello world'
def create_num_list(length):
return [x for x in range(length)]
def custom_func_x(x, const, power):
return const * (x) ** power
def custom_non_lin_num_list(length, const, power):
return [custom_func_x(x, const, power) for x in range(length)]</code></pre><p>Running the tests for the final time, we pass all of them!</p><pre><code>....
--------------------------------------------------------------------
Ran 4 tests in 0.000s
OK</code></pre><p>Congrats! This concludes this introduction to testing in Python. Make sure you check out the resources below for more information on testing in general.</p><p>The code is available here on <a href="https://github.com/drastorguev/python_testing" rel="noopener">GitHub</a>.</p><h3 id="useful-resources-for-further-learning-">Useful resources for further learning!</h3><h4 id="web-resources">Web resources</h4><p>Below are links to some of the libraries focusing on testing in Python:</p><ul><li><a href="https://docs.python.org/2.7/library/unittest.html" rel="noopener"><strong>25.3. unittest - Unit testing framework - Python 2.7.14 documentation</strong></a></li><li><a href="https://docs.pytest.org/en/latest/" rel="noopener"><strong>pytest: helps you write better programs - pytest documentation</strong></a></li><li><a href="https://hypothesis.readthedocs.io/en/latest/" rel="noopener"><strong>Welcome to Hypothesis! - Hypothesis 3.45.2 documentation</strong></a></li><li><a href="https://pypi.python.org/pypi/unittest2" rel="noopener"><strong>unittest2 1.1.0 : Python Package Index</strong></a></li></ul><h4 id="youtube-videos">YouTube videos</h4><p>If you prefer not to read, I recommend watching the following videos on YouTube.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
