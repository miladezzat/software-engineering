---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9d41740569d1a4ca36bc.jpg"
tags: [Python]
description: "There are two options for finding a substring within a string"
author: "Milad E. Fahmy"
title: "Python String Methods Explained with Examples"
created: "2021-08-16T15:37:25+02:00"
modified: "2021-08-16T15:37:25+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">Python String Methods Explained with Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d41740569d1a4ca36bc.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d41740569d1a4ca36bc.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d41740569d1a4ca36bc.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d41740569d1a4ca36bc.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d41740569d1a4ca36bc.jpg" alt="Python String Methods Explained with Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="string-find-method"><strong>String Find Method</strong></h2><p>There are two options for finding a substring within a string in Python, <code>find()</code> and <code>rfind()</code>.</p><p>Each will return the position that the substring is found at. The difference between the two is that <code>find()</code> returns the lowest position, and <code>rfind()</code> returns the highest position.</p><p>Optional start and end arguments can be provided to limit the search for the substring to within portions of the string.</p><p>Example:</p><pre><code class="language-shell">&gt;&gt;&gt; string = "Don't you call me a mindless philosopher, you overweight glob of grease!"
&gt;&gt;&gt; string.find('you')
6
&gt;&gt;&gt; string.rfind('you')
42</code></pre><p>If the substring is not found, -1 is returned.</p><pre><code class="language-shell">&gt;&gt;&gt; string = "Don't you call me a mindless philosopher, you overweight glob of grease!"
&gt;&gt;&gt; string.find('you', 43)  # find 'you' in string anywhere from position 43 to the end of the string
-1</code></pre><p>More Information:</p><p>String methods <a href="https://docs.python.org/3/library/stdtypes.html#string-methods" rel="nofollow">documentation</a>.</p><h2 id="string-join-method"><strong>String Join Method</strong></h2><p>The <code>str.join(iterable)</code> method is used to join all elements in an <code>iterable</code> with a specified string <code>str</code>. If the iterable contains any non-string values, it raises a TypeError exception.</p><p><code>iterable</code>: All iterables of string. Could a list of strings, tuple of string or even a plain string.</p><h4 id="examples"><strong>Examples</strong></h4><p>Join a ist of strings with <code>":"</code></p><pre><code class="language-python">print ":".join(["freeCodeCamp", "is", "fun"])</code></pre><p>Output</p><pre><code class="language-shell">freeCodeCamp:is:fun</code></pre><p>Join a tuple of strings with <code>" and "</code></p><pre><code class="language-python">print " and ".join(["A", "B", "C"])</code></pre><p>Output</p><pre><code class="language-shell">A and B and C</code></pre><p>Insert a <code>" "</code> after every character in a string</p><pre><code class="language-python">print " ".join("freeCodeCamp")</code></pre><p>Output:</p><pre><code class="language-shell">f r e e C o d e C a m p</code></pre><p>Joining with empty string.</p><pre><code class="language-python">list1 = ['p','r','o','g','r','a','m']
print("".join(list1))</code></pre><p>Output:</p><pre><code class="language-shell">program</code></pre><p>Joining with sets.</p><pre><code class="language-python">test =  {'2', '1', '3'}
s = ', '
print(s.join(test))</code></pre><p>Output:</p><pre><code class="language-shell">2, 3, 1</code></pre><h4 id="more-information-"><strong>More Information:</strong></h4><p><a href="https://docs.python.org/2/library/stdtypes.html#str.join" rel="nofollow">Python Documentation on String Join</a></p><h2 id="string-replace-method"><strong>String Replace Method</strong></h2><p>The <code>str.replace(old, new, max)</code> method is used to replace the substring <code>old</code> with the string <code>new</code> for a total of <code>max</code> times. This method returns a new copy of the string with the replacement. The original string <code>str</code> is unchanged.</p><h4 id="examples-1"><strong>Examples</strong></h4><ol><li>Replace all occurrences of <code>"is"</code> with <code>"WAS"</code></li></ol><pre><code class="language-python">string = "This is nice. This is good."
newString = string.replace("is","WAS")
print(newString)</code></pre><p>Output</p><pre><code class="language-python">ThWAS WAS nice. ThWAS WAS good.</code></pre><ol><li>Replace the first 2 occurrences of <code>"is"</code> with <code>"WAS"</code></li></ol><pre><code class="language-python">string = "This is nice. This is good."
newString = string.replace("is","WAS", 2)
print(newString)</code></pre><p>Output</p><pre><code class="language-python">ThWAS WAS nice. This is good.</code></pre><h4 id="more-information--1"><strong>More Information:</strong></h4><p>Read more about string replacement in the <a href="https://docs.python.org/2/library/string.html#string.replace" rel="nofollow">Python docs</a></p><h2 id="string-strip-method"><strong>String Strip Method</strong></h2><p>There are three options for stripping characters from a string in Python, <code>lstrip()</code>, <code>rstrip()</code> and <code>strip()</code>.</p><p>Each will return a copy of the string with characters removed, at from the beginning, the end or both beginning and end. If no arguments are given the default is to strip whitespace characters.</p><p>Example:</p><pre><code class="language-py">&gt;&gt;&gt; string = '   Hello, World!    '
&gt;&gt;&gt; strip_beginning = string.lstrip()
&gt;&gt;&gt; strip_beginning
'Hello, World!    '
&gt;&gt;&gt; strip_end = string.rstrip()
&gt;&gt;&gt; strip_end
'   Hello, World!'
&gt;&gt;&gt; strip_both = string.strip()
&gt;&gt;&gt; strip_both
'Hello, World!'</code></pre><p>An optional argument can be provided as a string containing all characters you wish to strip.</p><pre><code class="language-py">&gt;&gt;&gt; url = 'www.example.com/'
&gt;&gt;&gt; url.strip('w./')
'example.com'</code></pre><p>However, do notice that only the first <code>.</code> got stripped from the string. This is because the <code>strip</code> function only strips the argument characters that lie at the left or rightmost. Since w comes before the first <code>.</code> they get stripped together, whereas ‘com’ is present in the right end before the <code>.</code> after stripping <code>/</code>.</p><h2 id="string-split-method">String Split Method</h2><p>The <code>split()</code> function is commonly used for string splitting in Python.</p><h4 id="the-split-method"><strong>The <code>split()</code> method</strong></h4><p>Template: <code>string.split(separator, maxsplit)</code></p><p><code>separator</code>: The delimiter string. You split the string based on this character. For eg. it could be ” ”, ”:”, ”;” etc</p><p><code>maxsplit</code>: The number of times to split the string based on the <code>separator</code>. If not specified or -1, the string is split based on all occurrences of the <code>separator</code></p><p>This method returns a list of substrings delimited by the <code>separator</code></p><h4 id="examples-2"><strong>Examples</strong></h4><p>Split string on space: ” ”</p><pre><code class="language-python">string = "freeCodeCamp is fun."
print(string.split(" "))</code></pre><p>Output:</p><pre><code class="language-python">['freeCodeCamp', 'is', 'fun.']</code></pre><p>Split string on comma: ”,”</p><pre><code class="language-python">string = "freeCodeCamp,is fun, and informative"
print(string.split(","))</code></pre><p>Output:</p><pre><code class="language-python">['freeCodeCamp', 'is fun', ' and informative']</code></pre><p>No <code>separator</code> specified</p><pre><code class="language-python">string = "freeCodeCamp is fun and informative"
print(string.split())</code></pre><p>Output:</p><pre><code class="language-python">['freeCodeCamp', 'is', 'fun', 'and', 'informative']</code></pre><p>Note: If no <code>separator</code> is specified, then the string is stripped of <strong><strong>all</strong></strong> whitespace</p><pre><code class="language-python">string = "freeCodeCamp  is     fun and    informative"
print(string.split())</code></pre><p>Output:</p><pre><code class="language-python">['freeCodeCamp', 'is', 'fun', 'and', 'informative']</code></pre><p>Split string using <code>maxsplit</code>. Here we split the string on ” ” twice:</p><pre><code class="language-python">string = "freeCodeCamp is fun and informative"
print(string.split(" ", 2))</code></pre><p>Output:</p><pre><code class="language-python">['freeCodeCamp', 'is', 'fun and informative']</code></pre><h4 id="more-information"><strong>More Information</strong></h4><p>Check out the <a href="https://docs.python.org/2/library/stdtypes.html#str.split" rel="nofollow">Python docs on string splitting</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
