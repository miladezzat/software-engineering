---
card: "/images/default.jpg"
tags: [Python]
description: "Loops are a sequence of instructions executed until a conditi"
author: "Milad E. Fahmy"
title: "Python While Loop Tutorial – Do While True Example Statement"
created: "2021-08-16T15:35:39+02:00"
modified: "2021-08-16T15:35:39+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-loops ">
<header class="post-full-header">
<h1 class="post-full-title">Python While Loop Tutorial – Do While True Example Statement</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/08/Blue-Engagement-Essentials-Blog-Banner.png 300w,
/news/content/images/size/w600/2020/08/Blue-Engagement-Essentials-Blog-Banner.png 600w,
/news/content/images/size/w1000/2020/08/Blue-Engagement-Essentials-Blog-Banner.png 1000w,
/news/content/images/size/w2000/2020/08/Blue-Engagement-Essentials-Blog-Banner.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/08/Blue-Engagement-Essentials-Blog-Banner.png" alt="Python While Loop Tutorial – Do While True Example Statement">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
x = 1
while(x &lt;= 10):
print(x)
x = x+1</code></pre><p>If you look at the above code, the loop will only run if x is less than or equal to 10. If you initialise x as 20, the loop will never execute. </p><p>Here is the output of that while loop:</p><pre><code>&gt; python script.py
1
2
3
4
5
6
7
8
9
x = 20
def run_commands():
x = x+1
print(x)
run_commands()
while(x &lt;= 10):
run_commands()</code></pre><p>The above code runs the "run_commands()" function once before invoking the while loop. Once the while loop starts, the "run_commands" function will never be executed since x is equal to 20. </p><h3 id="while-else">While - Else</h3><p>You can add an "else" statement to run if the loop condition fails. </p><p>Let's add an else condition to our code to print "Done" once we have printed the numbers from 1 to 10.</p><pre><code>#!/usr/bin/python
x = 1
while(x &lt;= 10):
print(x)
x = x+1
else:
print("Done")</code></pre><p>The above code will first print the numbers from 1 to 10. When x is 11, the while condition will fail, triggering the else condition. </p><h3 id="single-line-while-statement">Single Line While Statement</h3><p>If you only have a single line of code within your while loop, you can use the single line syntax. </p><pre><code>#!/usr/bin/python
x = 1
while (x): print(x)</code></pre><h3 id="infinite-loops">Infinite Loops</h3><p>If you are not careful while writing loops, you will create infinite loops. Infinite loops are the ones where the condition is always true. </p><pre><code>#!/usr/bin/python
x = 1
while (x &gt;= 1):
print(x)</code></pre><p>The above code is an example of an infinite loop. There is no command to alter the value of x, so the condition "x is greater than or equal to 1" is always true. This will make the loop run forever.</p><p>Always be careful while writing loops. A small mistake can lead to an infinite loop and crash your application. </p><h2 id="loop-control">Loop Control</h2><p>Finally, let's look at how to control the flow of a loop while it is running. &nbsp;</p><p>When you are writing real world applications, you will often encounter scenarios where you need to add additional conditions to skip a loop or to break out of a loop.</p><h3 id="break">Break</h3><p>Let's look at how to break out of the loop while the condition is true. </p><pre><code>#!/usr/bin/python
x = 1
while (x &lt;= 10):
if(x == 5):
break
print(x)
x += 1</code></pre><p>In the above code, the loop will stop execution when x is 5, in spite of x being greater than or equal to 1. </p><h3 id="continue">Continue</h3><p>Here's another scenario: say you want to skip the loop if a certain condition is met. However, you want to continue subsequent executions until the main while condition turns false. </p><p>You can use the "continue" keyword for that, like this:</p><pre><code>#!/usr/bin/python
x = 1
while (x &lt;= 10):
if(x == 5):
x += 1
continue
print(x)</code></pre><p>In the above example, &nbsp;the loop will print from 1 to 10, except 5. When x is 5, the rest of the commands are skipped and the control flow returns to the start of the while program. </p><h2 id="summary">Summary</h2><p>Loops are one of the most useful components in programming that you will use on a daily basis. </p><p>For and while are the two main loops in Python. The while loop has two variants, while and do-while, but Python supports only the former. </p><p>You can control the program flow using the 'break' and 'continue' commands. Always be aware of creating infinite loops accidentally. </p><p>I regularly write on topics including Artificial Intelligence and Cybersecurity. If you liked this article, <a href="https://medium.com/manishmshiva">you can read my blog here</a>. </p>
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
