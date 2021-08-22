---
card: "/images/default.jpg"
tags: [Python]
description: "Welcome! If you want to learn how to work with while loops in"
author: "Milad E. Fahmy"
title: "Python While Loop Tutorial – While True Syntax Examples and Infinite Loops"
created: "2021-08-16T15:35:13+02:00"
modified: "2021-08-16T15:35:13+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">Python While Loop Tutorial – While True Syntax Examples and Infinite Loops</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/11/While-loops-image-1.png 300w,
/news/content/images/size/w600/2020/11/While-loops-image-1.png 600w,
/news/content/images/size/w1000/2020/11/While-loops-image-1.png 1000w,
/news/content/images/size/w2000/2020/11/While-loops-image-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/11/While-loops-image-1.png" alt="Python While Loop Tutorial – While True Syntax Examples and Infinite Loops">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
while i &lt; 8:
print(i)
i += 1</code></pre><p>If we run the code, we see this output:</p><pre><code>4
5
6
nums = []
# The loop will run while the length of the
# list nums is less than 4
while len(nums) &lt; 4:
# Ask for user input and store it in a variable as an integer.
user_input = int(input("Enter an integer: "))
# If the input is an even number, add it to the list
if user_input % 2 == 0:
nums.append(user_input)</code></pre><p>The loop condition is <code>len(nums) &lt; 4</code>, so the loop will run while the length of the list <code>nums</code> is strictly less than 4.</p><p><strong>Let's analyze this program line by line:</strong></p><ul><li>We start by defining an empty list and assigning it to a variable called <code>nums</code>.</li></ul><pre><code class="language-python">nums = []</code></pre><ul><li>Then, we define a while loop that will run while <code>len(nums) &lt; 4</code>.</li></ul><pre><code class="language-python">while len(nums) &lt; 4:</code></pre><ul><li>We ask for user input with the <code>input()</code> function and store it in the <code>user_input</code> variable.</li></ul><pre><code class="language-python">user_input = int(input("Enter an integer: "))</code></pre><p><strong>💡 Tip:</strong> We need to convert (cast) the value entered by the user to an integer using the <code>int()</code> function before assigning it to the variable because the <code>input()</code> function returns a string (<a href="https://docs.python.org/3/library/functions.html#input">source</a>).</p><ul><li>We check if this value is even or odd. </li></ul><pre><code class="language-python">if user_input % 2 == 0:</code></pre><ul><li>If it's even, we append it to the <code>nums</code> list. </li></ul><pre><code class="language-python">nums.append(user_input)</code></pre><ul><li>Else, if it's odd, the loop starts again and the condition is checked to determine if the loop should continue or not.</li></ul><p>If we run this code with custom user input, we get the following output:</p><pre><code class="language-python">Enter an integer: 3
Enter an integer: 4
Enter an integer: 2
Enter an integer: 1
Enter an integer: 7
Enter an integer: 6
Enter an integer: 3
while i &lt; 9:
print(i)
i += 1
</code></pre><p>We see this output when the code runs:</p><pre><code class="language-python">6
7
while i &lt;= 9:
print(i)
i += 1</code></pre><p>We see this output:</p><pre><code class="language-python">6
7
8
i = 5
# Run this loop while i is less than 15
while i &lt; 15:
# Print a message
print("Hello, World!")
</code></pre><p>Analyze this code for a moment. </p><p>Don't you notice something missing in the body of the loop? </p><p>That's right! </p><p>The value of the variable <code>i</code> is never updated (it's always <code>5</code>). Therefore, the condition <code>i &lt; 15</code> is always <code>True</code> and the loop never stops. </p><p>If we run this code, the output will be an "infinite" sequence of <code>Hello, World!</code> messages because the body of the loop <code>print("Hello, World!")</code> will run indefinitely. </p><pre><code class="language-python">Hello, World!
Hello, World!
Hello, World!
Hello, World!
Hello, World!
Hello, World!
Hello, World!
Hello, World!
Hello, World!
Hello, World!
Hello, World!
Hello, World!
Hello, World!
Hello, World!
Hello, World!
Hello, World!
Hello, World!
Hello, World!
.
.
.
while i &lt; 15:
print("Hello, World!")
# Update the value of i
print(0)
0
0
0
0
0
0
0
0
0
0
0
0
0
Traceback (most recent call last):
File "&lt;pyshell#2&gt;", line 2, in &lt;module&gt;
print(0)
# Code
if &lt;condition&gt;:
break
break</code></pre><p>Else, if the input is even , the message <code>This number is even</code> is printed and the loop starts again.</p><pre><code>print("This number is even")</code></pre><p>The loop will run indefinitely until an odd integer is entered because that is the only way in which the <code>break</code> statement will be found. </p><p>Here we have an example with custom user input:</p><pre><code class="language-python">Enter an integer: 4
This number is even
Enter an integer: 6
This number is even
Enter an integer: 8
This number is even
Enter an integer: 3
This number is odd
&gt;&gt;&gt; </code></pre><h2 id="-in-summary">🔸 In Summary</h2><ul><li>While loops are programming structures used to repeat a sequence of statements while a condition is <code>True</code>. They stop when the condition evaluates to <code>False</code>. </li><li>When you write a while loop, you need to make the necessary updates in your code to make sure that the loop will eventually stop.</li><li>An infinite loop is a loop that runs indefinitely and it only stops with external intervention or when a <code>break</code> statement is found. </li><li>You can stop an infinite loop with <code>CTRL + C</code>.</li><li>You can generate an infinite loop intentionally with <code>while True</code>.</li><li>The <code>break</code> statement can be used to stop a while loop immediately. </li></ul><p><strong><strong><strong><strong>I really hope you liked my article and found it helpful. </strong></strong></strong></strong>Now you know how to work with While Loops in Python. </p><p>Follow me on Twitter <a href="https://twitter.com/EstefaniaCassN">@EstefaniaCassN</a> and if you want to learn more about this topic, check out my online course <a href="https://www.udemy.com/course/python-loops-and-looping-techniques-beginner-to-advanced/?referralCode=EEABE054BAB98C00CC8E">Python Loops and Looping Techniques: Beginner to Advanced</a>. </p>
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
