---
card: "https://cdn-media-1.freecodecamp.org/images/1*eMH1zFW_YagZqorGErpcVg.jpeg"
tags: [Testing]
description: "Do you use Python, even to wash your clothes? And do you find"
author: "Milad E. Fahmy"
title: "Meet doctests, the shy giants of testing modules"
created: "2021-08-16T15:41:11+02:00"
modified: "2021-08-16T15:41:11+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-testing tag-python tag-technology tag-programming tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">Meet doctests, the shy giants of testing modules</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*eMH1zFW_YagZqorGErpcVg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*eMH1zFW_YagZqorGErpcVg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*eMH1zFW_YagZqorGErpcVg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*eMH1zFW_YagZqorGErpcVg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*eMH1zFW_YagZqorGErpcVg.jpeg" alt="Meet doctests, the shy giants of testing modules">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Do you use Python, even to wash your clothes? And do you find unit testing boring, but still have to do it, because you find value in automated testing? Then this article is for you.</p><h3 id="the-idea">The idea</h3><p>If you are a Python fan, then I believe you have used the Python console from time to time. Let’s assume you are writing a few inline functions like below, to experiment with stuff:</p><pre><code>$ python
Python 3.6.4 |Anaconda custom (64-bit)| (default, Jan 16 2018, 18:10:19)
[GCC 7.2.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
&gt;&gt;&gt; def addme(a):
...     return a + a
...
&gt;&gt;&gt; addme(2)
4
&gt;&gt;&gt; addme(1.9)
3.8
&gt;&gt;&gt; addme(0)
0
"""
This is a docstring, usually to explain the use of a function. Please do not confuse it with doctests. They both mean to provide forms of documentation, but doctests are executable too.
&gt;&gt;&gt; addme(4)
8
&gt;&gt;&gt; addme('a')
'aa'
&gt;&gt;&gt; addme(set())
Traceback (most recent call last):
...
TypeError: unsupported operand type(s) for +: 'set' and 'set'
"""
return a + a
if __name__ == '__main__':
import doctest
doctest.testmod()
print(addme(1))</code></pre><p>There are a couple of points worth noticing here:</p><ul><li>The doctests need to live inside a docstring. In there, just ‘copy-paste’ the output of your Python console’s quick tests.</li><li>If you need to simulate an exception case, you only need to add the first and the last lines of the exception message. Did you expect to hardcode paths or do any weird logic to get the file’s full path and print it in full? C’mon, Python wont do that :)</li><li>You need the doctest library to run the tests. Nose doesn’t need it though.</li><li>You can run the above, as usual, with <code>python mydoctests.py</code></li></ul><h3 id="i-need-my-tests-to-run-as-part-of-ci-cd-ct-cycle-what-s-in-for-me">I need my tests to run as part of CI/CD/CT cycle. What’s in for me?</h3><p>I am not here to disappoint you, am I ? :)</p><p>The <a href="http://nose.readthedocs.io/en/latest/" rel="noopener">nose</a> test runner supports running all your doctests in addition to your unit tests. Just add the flag <code>--with-doctest</code> and you are good to go.</p><h3 id="nice-stuff-where-do-i-go-from-here">Nice stuff, where do I go from here?</h3><ul><li>Read the Python <a href="https://docs.python.org/3.6/library/doctest.html" rel="noopener">documentation</a> for more twitches and cases.</li><li>Read this fantastic <a href="https://amzn.to/2sjvKoP" rel="noopener">book</a> and especially chapter 4, which covers doctests.</li><li>Check implementations of other languages. For example, the one for <a href="https://github.com/davidchambers/doctest" rel="noopener">NodeJS</a></li><li><a href="http://nose.readthedocs.io/en/latest/plugins/doctests.html" rel="noopener">Doctests and nose</a></li></ul><p>Thank you for reading this article, I hope you enjoyed it and that the article triggered your interest in writing more (and less painful) tests. Please spread the love with the buttons below if so. Feel free to add your own thoughts and experiences with doctests too.</p><p>Originally published on<em> </em><a href="https://perigk.github.io" rel="noopener">my blog</a>.</p>
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
