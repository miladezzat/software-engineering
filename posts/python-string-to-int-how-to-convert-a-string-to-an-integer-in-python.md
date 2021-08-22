---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9e2a740569d1a4ca3bb5.jpg"
tags: [Python]
description: "Unlike many other programming languages out there, Python doe"
author: "Milad E. Fahmy"
title: "Python String to Int: How to Convert a String to an Integer in Python"
created: "2021-08-16T15:37:56+02:00"
modified: "2021-08-16T15:37:56+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-data-structures ">
<header class="post-full-header">
<h1 class="post-full-title">Python String to Int: How to Convert a String to an Integer in Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e2a740569d1a4ca3bb5.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e2a740569d1a4ca3bb5.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e2a740569d1a4ca3bb5.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e2a740569d1a4ca3bb5.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e2a740569d1a4ca3bb5.jpg" alt="Python String to Int: How to Convert a String to an Integer in Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Unlike many other programming languages out there, Python does not implicitly typecast integers (or floats) to strings when you concatenate them to strings.</p><p>Fortunately, Python has a handy built-in function <code>str()</code> which will convert the argument passed in to a string format.</p><h2 id="the-wrong-way-to-convert-a-string-to-an-integer-in-python">The Wrong Way to Convert a String to an Integer in Python</h2><p>Programmers coming from other programming languages may attempt to do the following string concatenation, which will produce an error:</p><pre><code class="language-py">age = 18
string = "Hello, I am " + age + " years old"</code></pre><p><a href="https://repl.it/@christopher_tse/int-to-string-error">You can run this code on repl.it</a>.</p><p>The error that shows up is:</p><pre><code class="language-text">Traceback (most recent call last):
File "python", line 3, in &lt;module&gt;
TypeError: must be str, not int</code></pre><p>Here, <code>TypeError: must be str, not int</code> indicates that the integer must first be converted to a string before it can be concatenated.</p><h2 id="the-correct-way-to-convert-a-string-to-an-integer-in-python">The Correct Way to Convert a String to an Integer in Python </h2><p>Here's a simple concatenation example:</p><pre><code class="language-py">age = 18
print("Hello, I am " + str(age) + " years old")
# Output
# Hello, I am 18 years old</code></pre><p><a href="https://repl.it/@christopher_tse/int-to-string-no-error">You can run this code on repl.it</a>.</p><p>Here's how to print <code>1 2 3 4 5 6 7 8 9 10</code> using a single string:</p><pre><code class="language-py">result = ""
for i in range(1, 11):
result += str(i) + " "
print(result)
# Output
# 1 2 3 4 5 6 7 8 9 10</code></pre><p><a href="https://repl.it/@christopher_tse/int-to-string-loop">You can run the code on repl.it</a>.</p><h3 id="here-s-a-line-by-line-explanation-of-how-the-above-code-works-">Here's a line-by-Line explanation of how the above code works:</h3><ol><li>First of all a variable ‘result’ is assigned to an empty string.</li><li>The for loop is being used to iterate over a list of numbers.</li><li>This list of numbers is generated using the range function.</li><li>so range(1,11) is going to generate a list of numbers from 1 to 10.</li><li>On each for loop iteration this ‘i’ variable is going to take up values from 1 to 10.</li><li>On first iteration when the variable i=1,then the variable [result=result+str(i)+“(space character)”],str(i) converts the ‘i’ which is an integer value to a string value.</li><li>Since i=1, on the first iteration finally result=1.</li><li>And the same process goes on until i=10 and finally after the last iteration result=1 2 3 4 5 6 7 8 9 10.</li><li>Therefore when we finally print the result after the for loop the output on the console is ‘1 2 3 4 5 6 7 8 9 10’.</li></ol><p>I hope you've found this helpful. Happy coding.</p>
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
