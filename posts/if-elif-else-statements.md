---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9e09740569d1a4ca3afe.jpg"
tags: [Python]
description: "The if/elif/else structure is a common way to control the flo"
author: "Milad E. Fahmy"
title: "If, Elif, and Else Statements in Python"
created: "2021-08-16T15:37:45+02:00"
modified: "2021-08-16T15:37:45+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">If, Elif, and Else Statements in Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e09740569d1a4ca3afe.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e09740569d1a4ca3afe.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e09740569d1a4ca3afe.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e09740569d1a4ca3afe.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e09740569d1a4ca3afe.jpg" alt="If, Elif, and Else Statements in Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="if-elif-else-statements"><strong>If Elif Else Statements</strong></h2><p>The <code>if</code>/<code>elif</code>/<code>else</code> structure is a common way to control the flow of a program, allowing you to execute specific blocks of code depending on the value of some data.</p><h3 id="if-statement">if statement </h3><p>If the condition following the keyword <code>if</code> evaluates as <code>true</code>, the block of code will execute. Note that parentheses are not used before and after the condition check as in other languages.</p><pre><code class="language-python">if True:
print('If block will execute!')</code></pre><pre><code class="language-python">x = 5
if x &gt; 4:
print("The condition was true!") #this statement executes</code></pre><h3 id="else-statement">else statement</h3><p>You can optionally add an <code>else</code> response that will execute if the condition is <code>false</code>:</p><pre><code class="language-python">if not True:
print('If statement will execute!')
else:
print('Else statement will execute!')</code></pre><p>Or you can also see this example:</p><pre><code class="language-python">y = 3
if y &gt; 4:
print("I won't print!") #this statement does not execute
else:
print("The condition wasn't true!") #this statement executes</code></pre><p><em>Note that there is no condition following the <code>else</code> keyword - it catches all situations where the condition was <code>false</code></em></p><h3 id="elif-statement">elif statement</h3><p>Multiple conditions can be checked by including one or more <code>elif</code> checks after your initial <code>if</code> statement. Just keep in mind that only one condition will execute:</p><pre><code class="language-python">z = 7
if z &gt; 8:
print("I won't print!") #this statement does not execute
elif z &gt; 5:
print("I will!") #this statement will execute
elif z &gt; 6:
print("I also won't print!") #this statement does not execute
else:
print("Neither will I!") #this statement does not execute</code></pre><p><em>Note: only the first condition that evaluates as <code>true</code> will execute. </em>Even though <code>z &gt; 6</code> is <code>true</code>, the <code>if/elif/else</code> block terminates after the first true condition. This means that an <code>else</code> will only execute if none of the conditions were <code>true</code>.</p><h3 id="nested-if-statements">Nested if statements</h3><p>We can also create nested if’s for decision making. Before preceding please refer to the href=’<a href="https://guide.freecodecamp.org/python/code-blocks-and-indentation">https://guide.freecodecamp.org/python/code-blocks-and-indentation</a>’ target=’_blank’ rel=‘nofollow’&gt;indentation guide once before preceding.</p><p>Let’s take an example of finding a number which is even and also greater than 10</p><pre><code class="language-text">python
x = 34
if x %  2 == 0:  # this is how you create a comment and now, checking for even.
if x &gt; 10:
print("This number is even and is greater than 10")
else:
print("This number is even, but not greater 10")
else:
print ("The number is not even. So point checking further.")</code></pre><p>This was just a simple example for nested if’s. Please feel free to explore more online.</p><p>While the examples above are simple, you can create complex conditions using <a href="https://guide.freecodecamp.org/python/comparisons" rel="nofollow">boolean comparisons</a> and <a href="https://guide.freecodecamp.org/python/boolean-operations" rel="nofollow">boolean operators</a>.</p><h3 id="inline-python-if-else-statement">Inline python if-else statement</h3><p>We can also use if-else statements inline python functions. The following example should check if the number is greater or equal than 50, if yes return True:</p><pre><code class="language-text">python
x = 89
is_greater = True if x &gt;= 50 else False
print(is_greater)</code></pre><p>Output</p><pre><code class="language-text">&gt;
True
&gt;</code></pre><h2 id="more-info-on-if-elif-else-statements-">More info on if/elif/else statements:</h2><ul><li><a href="/news/so-youre-in-if-else-hell-here-s-how-to-get-out-of-it-fc6407fec0e/">How to get out of if/else hell</a></li><li><a href="/news/javascript-essentials-how-to-make-life-decisions-with-if-else-statements-1908ff7cf5da/">If/else in JavaScript</a></li></ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
