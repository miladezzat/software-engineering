---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9ef5740569d1a4ca4014.jpg"
tags: [Python]
description: "Python is a general purpose programming language which is dyn"
author: "Milad E. Fahmy"
title: "The Best Python Tutorials"
created: "2021-08-16T15:38:19+02:00"
modified: "2021-08-16T15:38:19+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">The Best Python Tutorials</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ef5740569d1a4ca4014.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ef5740569d1a4ca4014.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ef5740569d1a4ca4014.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ef5740569d1a4ca4014.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ef5740569d1a4ca4014.jpg" alt="The Best Python Tutorials">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
Hello campers!</code></pre><p>When multiple versions of Python are installed, calling them by version is possible depending on the install configuration. In the Cloud9 IDE custom environment, they can be invoked like:</p><pre><code class="language-text">$ python --version
Python 2.7.6
$ python3 --version
Python 3.4.3
$ python3.5 --version
Python 3.5.1
$ python3.6 --version
Python 3.6.2
$ python3.7 --version
Python 3.7.1</code></pre><h2 id="python-interpreter-interactive-mode"><strong>Python Interpreter Interactive Mode</strong></h2><p>Interactive mode can be started by invoking the Python interpreter with the <code>-i</code> flag or without any arguments.</p><p>Interactive mode has a prompt where Python commands can be entered and run:</p><pre><code class="language-text">$ python3.5
Python 3.5.1 (default, Dec 18 2015, 00:00:00)
GCC 4.8.4 on linux
Type "help", "copyright", "credits" or "license" for more information.
&gt;&gt;&gt; print("Hello campers!")
Hello campers!
&gt;&gt;&gt; 1 + 2
3
&gt;&gt;&gt; exit()
$</code></pre><h2 id="the-zen-of-python"><strong>The Zen of Python</strong></h2><p>Some of the principles that influenced the design of Python are included as an Easter egg and can be read by using the command inside Python interpreter interactive mode:</p><pre><code class="language-text">&gt;&gt;&gt; import this
The Zen of Python, by Tim Peters
Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!</code></pre><h2 id="pros-and-cons-of-python"><strong>Pros and Cons of Python</strong></h2><h3 id="pros"><strong>Pros</strong></h3><ol><li>Interactive language with a module support for almost all functionality.</li><li>Open Source: So, you can contribute to the community, the functions you have developed for future use and to help others</li><li>A lot of good interpreters and notebooks available for better experience like jupyter notebook.</li></ol><h4 id="cons"><strong>Cons</strong></h4><ol><li>Being open source, many different ways have developed over the years for the same functions. This sometimes creates chaos for others to read someone's else code.</li><li>It is a slow language. So it's a very bad language to use for developing general algorithms.</li></ol><h2 id="documentation"><strong>Documentation</strong></h2><p><a href="https://docs.python.org/3/" rel="nofollow">Python is well documented</a>. These docs include tutorials, guides, references and meta information for language.</p><p>Another important reference is the Python Enhancement Proposals (<a href="https://www.python.org/dev/peps/" rel="nofollow">PEPs</a>). Included in the PEPs is a style guide for writing Python code, <a href="https://www.python.org/dev/peps/pep-0008/" rel="nofollow"><code>PEP 8</code></a>.</p><h2 id="debugging"><strong>Debugging</strong></h2><p>Inline <code>print</code> statements can be used for simple debugging:</p><blockquote><strong><strong>… often the quickest way to debug a program is to add a few print statements to the source: the fast edit-test-debug cycle makes this simple approach very effective.</strong></strong><br><br><a href="https://www.python.org/doc/essays/blurb/" rel="nofollow">Executive Summary</a></blockquote><p>Python also includes more powerful tools for debugging, such as:</p><ul><li>logging module, <a href="https://docs.python.org/3/library/logging.html" rel="nofollow"><em>logging</em></a></li><li>debugging module, <a href="https://docs.python.org/3/library/pdb.html" rel="nofollow"><em>pdb</em></a></li></ul><p>Just note that these exist for now.</p><h2 id="hello-world-"><strong>Hello World!</strong></h2><p>Going back to the docs, we can read about the <a href="https://docs.python.org/3/library/functions.html#print" rel="nofollow"><code>print</code></a> function, a <a href="https://docs.python.org/3/library/functions.html" rel="nofollow"><em>built-in function</em></a> of the <a href="https://docs.python.org/3/library/index.html" rel="nofollow">Python Standard Library</a>.</p><pre><code class="language-text">print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)</code></pre><p>The built-in functions are listed in alphabetical order. The name is followed by a parenthesized list of formal parameters with optional default values. Under that is a short description of the function and its parameters are given and there is occasionally an example.</p><p>The <a href="https://docs.python.org/3/library/functions.html#print" rel="nofollow"><code>print</code></a> function in Python 3 replaces the <a href="https://docs.python.org/2/reference/simple_stmts.html#print" rel="nofollow"><code>print</code></a> statement in Python 2.</p><pre><code class="language-text">&gt;&gt;&gt; print("Hello world!")
Hello world!</code></pre><p>A function is called when the name of the function is followed by <code>()</code>. For the Hello world! example, the print function is called with a string as an argument for the first parameter. For the rest of the parameters the defaults are used.</p><p>The argument that we called the <code>print</code> function with is a <code>str</code> object or <em>string</em>, one of Python’s <a href="https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str" rel="nofollow"><em>built-in types</em></a>. Also the most important thing about python is that you don’t have to specify the data type while declaring a variable; python’s compiler will do that itself based on the type of value assigned.</p><p>The <code>objects</code> parameter is prefixed with a <code>*</code> which indicates that the function will take an arbitrary number of arguments for that parameter.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
