---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9ddf740569d1a4ca3a21.jpg"
tags: [Python]
description: "It is generally good practice for you not to mix tabs and spa"
author: "Milad E. Fahmy"
title: "Indentation in Python with Examples"
created: "2021-08-16T15:37:35+02:00"
modified: "2021-08-16T15:37:35+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-syntax ">
<header class="post-full-header">
<h1 class="post-full-title">Indentation in Python with Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ddf740569d1a4ca3a21.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ddf740569d1a4ca3a21.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ddf740569d1a4ca3a21.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ddf740569d1a4ca3a21.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ddf740569d1a4ca3a21.jpg" alt="Indentation in Python with Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>It is generally good practice for you not to mix tabs and spaces when coding in Python. Doing this can possibly cause a <code>TabError</code>, and your program will crash. Be consistent when you code - choose either to indent using tabs or spaces and follow your chosen convention throughout your program.</p><h3 id="code-blocks-and-indentation">Code Blocks and Indentation</h3><p>One of the most distinctive features of Python is its use of indentation to mark blocks of code. Consider the if-statement from our simple password-checking program:</p><pre><code class="language-python">if pwd == 'apple':
print('Logging on ...')
else:
print('Incorrect password.')
print('All done!')</code></pre><p>The lines print(‘Logging on …’) and print(‘Incorrect password.’) are two separate code blocks. These ones happen to be only a single line long, but Python lets you write code blocks consisting of any number of statements.</p><p>To indicate a block of code in Python, you must indent each line of the block by the same amount. The two blocks of code in our example if-statement are both indented four spaces, which is a typical amount of indentation for Python.</p><p>In most other programming languages, indentation is used only to help make the code look pretty. But in Python, it is required for indicating what block of code a statement belongs to. For instance, the final print(‘All done!’) is not indented, and so is not part of the else-block.</p><p>Programmers familiar with other languages often bristle at the thought that indentation matters: Many programmers like the freedom to format their code how they please. However, Python indentation rules are quite simple, and most programmers already use indentation to make their code readable. Python simply takes this idea one step further and gives meaning to the indentation.</p><h3 id="if-elif-statements">If/elif-statements</h3><p>An if/elif-statement is a generalized if-statement with more than one condition. It is used for making complex decisions. For example, suppose an airline has the following “child” ticket rates: Kids 2 years old or younger fly for free, kids older than 2 but younger than 13 pay a discounted child fare, and anyone 13 years or older pays a regular adult fare. The following program determines how much a passenger should pay:</p><pre><code class="language-python"># airfare.py
age = int(input('How old are you? '))
if age &lt;= 2:
print(' free')
elif 2 &lt; age &lt; 13:
print(' child fare)
else:
print('adult fare')</code></pre><p>After Python gets age from the user, it enters the if/elif-statement and checks each condition one after the other in the order they are given. So first it checks if age is less than 2, and if so, it indicates that the flying is free and jumps out of the elif-condition. If age is not less than 2, then it checks the next elif-condition to see if age is between 2 and 13. If so, it prints the appropriate message and jumps out of the if/elif-statement. If neither the if-condition nor the elif-condition is True, then it executes the code in the else-block.</p><h3 id="conditional-expressions">Conditional expressions</h3><p>Python has one more logical operator that some programmers like (and some don’t!). It’s essentially a shorthand notation for if-statements that can be used directly within expressions. Consider this code:</p><pre><code class="language-python">food = input("What's your favorite food? ")
reply = 'yuck' if food == 'lamb' else 'yum'</code></pre><p>The expression on the right-hand side of = in the second line is called a conditional expression, and it evaluates to either ‘yuck’ or ‘yum’. It’s equivalent to the following:</p><pre><code class="language-python">food = input("What's your favorite food? ")
if food == 'lamb':
reply = 'yuck'
else:
reply = 'yum'</code></pre><p>Conditional expressions are usually shorter than the corresponding if/else-statements, although not quite as flexible or easy to read. In general, you should use them when they make your code simpler.</p><p><a href="https://docs.python.org/3/reference/lexical_analysis.html#indentation">Python Documentation - Indentation</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
