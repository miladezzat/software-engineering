---
card: "/images/default.jpg"
tags: [Python]
description: "Welcome! In this article, you will learn how to handle except"
author: "Milad E. Fahmy"
title: "How to Handle Exceptions in Python: A Detailed Visual Introduction"
created: "2021-08-16T15:38:13+02:00"
modified: "2021-08-16T15:38:13+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-exception-handling tag-learning-to-code tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to Handle Exceptions in Python: A Detailed Visual Introduction</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/12/Exception-Handling-in-Python.png 300w,
/news/content/images/size/w600/2019/12/Exception-Handling-in-Python.png 600w,
/news/content/images/size/w1000/2019/12/Exception-Handling-in-Python.png 1000w,
/news/content/images/size/w2000/2019/12/Exception-Handling-in-Python.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/12/Exception-Handling-in-Python.png" alt="How to Handle Exceptions in Python: A Detailed Visual Introduction">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Welcome! In this article, you will learn how to handle exceptions in Python.</p><p><strong>In particular, we will cover:</strong></p><ul><li>Exceptions</li><li>The purpose of exception handling</li><li>The try clause</li><li>The except clause</li><li>The else clause</li><li>The finally clause</li><li>How to raise exceptions</li></ul><p><strong>Are you ready? Let's begin! 😀</strong></p><h2 id="1-intro-to-exceptions">1️⃣ Intro to Exceptions</h2><p>We will start with exceptions:</p><ul><li><strong>What </strong>are they? </li><li><strong>Why </strong>are they relevant? </li><li><strong>Why </strong>should you handle them?</li></ul><p>According to the <a href="https://docs.python.org/3/tutorial/errors.html#exceptions">Python documentation</a>:</p><blockquote>Errors detected during execution are called <strong><em>exceptions</em> </strong>and are not unconditionally fatal.</blockquote><p><strong>Exceptions are raised when the program encounters an error during its execution.</strong> They disrupt the normal flow of the program and usually end it abruptly. To avoid this, you can catch them and handle them appropriately.</p><p>You've probably seen them during your programming projects. </p><p>If you've ever tried to divide by zero in Python, you must have seen this error message:</p><pre><code class="language-python">&gt;&gt;&gt; a = 5/0
Traceback (most recent call last):
File "&lt;pyshell#1&gt;", line 1, in &lt;module&gt;
a = 5/0
ZeroDivisionError: division by zero</code></pre><p>If you tried to index a string with an invalid index, you definitely got this error message:</p><pre><code class="language-python">&gt;&gt;&gt; a = "Hello, World"
&gt;&gt;&gt; a[456]
Traceback (most recent call last):
File "&lt;pyshell#3&gt;", line 1, in &lt;module&gt;
a[456]
IndexError: string index out of range</code></pre><p>These are examples of exceptions.</p><h3 id="-common-exceptions">🔹 Common Exceptions</h3><p>There are many different types of exceptions, and they are all raised in particular situations. Some of the exceptions that you will most likely see as you work on your projects are:</p><ul><li><strong>IndexError</strong> - raised when you try to index a list, tuple, or string beyond the permitted boundaries. For example:</li></ul><pre><code class="language-python">&gt;&gt;&gt; num = [1, 2, 6, 5]
&gt;&gt;&gt; num[56546546]
Traceback (most recent call last):
File "&lt;pyshell#7&gt;", line 1, in &lt;module&gt;
num[56546546]
IndexError: list index out of range</code></pre><ul><li><strong>KeyError </strong>- raised when you try to access the value of a key that doesn't exist in a dictionary. For example:</li></ul><pre><code class="language-python">&gt;&gt;&gt; students = {"Nora": 15, "Gino": 30}
&gt;&gt;&gt; students["Lisa"]
Traceback (most recent call last):
File "&lt;pyshell#9&gt;", line 1, in &lt;module&gt;
students["Lisa"]
KeyError: 'Lisa'</code></pre><ul><li><strong>NameError</strong> - raised when a name that you are referencing in the code doesn't exist. For example:</li></ul><pre><code class="language-python">&gt;&gt;&gt; a = b
Traceback (most recent call last):
File "&lt;pyshell#10&gt;", line 1, in &lt;module&gt;
a = b
NameError: name 'b' is not defined</code></pre><ul><li><strong>TypeError</strong> - raised when an operation or function is applied to an object of an inappropriate type. For example:</li></ul><pre><code class="language-python">&gt;&gt;&gt; (5, 6, 7) * (1, 2, 3)
Traceback (most recent call last):
File "&lt;pyshell#12&gt;", line 1, in &lt;module&gt;
(5, 6, 7) * (1, 2, 3)
TypeError: can't multiply sequence by non-int of type 'tuple'</code></pre><ul><li><strong>ZeroDivisionError </strong>- raised when you try to divide by zero.</li></ul><pre><code class="language-python">&gt;&gt;&gt; a = 5/0
Traceback (most recent call last):
File "&lt;pyshell#13&gt;", line 1, in &lt;module&gt;
a = 5/0
def print_student_age():
name = input("Please enter the name of the student: ")
print(students[name])
print_student_age()</code></pre><p>Notice how we are not validating user input at the moment, so the user might enter invalid values (names that are not in the dictionary) and the consequences would be catastrophic because the program would crash if a KeyError is raised:</p><pre><code class="language-python"># User Input
Please enter the name of the student: "Daniel"
# Error Message
Traceback (most recent call last):
File "&lt;path&gt;", line 15, in &lt;module&gt;
print_student_age()
File "&lt;path&gt;", line 13, in print_student_age
print(students[name])
def print_student_age():
while True:
try:
name = input("Please enter the name of the student: ")
print(students[name])
break
except:
print("This name is not registered")
print_student_age()</code></pre><p>If we "zoom in", we see the try ... except statement:</p><pre><code>try:
name = input("Please enter the name of the student: ")
print(students[name])
break
except:
print("This name is not registered")</code></pre><ul><li>When the function is called, the try clause will run. If no exceptions are raised, the program will run as expected. </li><li>But if an exception is raised in the try clause, the flow of execution will immediately jump to the except clause to handle the exception.</li></ul><p><strong>💡 Note: </strong>This code is contained within a while loop to continue asking for user input if the value is invalid. This is an example:</p><pre><code class="language-python">Please enter the name of the student: "Lulu"
This name is not registered
while True:
try:
a = int(input("Please enter the numerator: "))
b = int(input("Please enter the denominator: "))
print(a / b)
except ZeroDivisionError:
print("Please enter a valid denominator.")
divide_integers()</code></pre><p>This would be the result:</p><pre><code class="language-python"># First iteration
Please enter the numerator: 5
Please enter the denominator: 0
Please enter a valid denominator.
# Second iteration
Please enter the numerator: 5
Please enter the denominator: 2
2.5</code></pre><p>We are handling this correctly. But... if another type of exception is raised, the program will not handle it gracefully. </p><p>Here we have an example of a ValueError because one of the values is a float, not an int:</p><pre><code class="language-python">Please enter the numerator: 5
Please enter the denominator: 0.5
Traceback (most recent call last):
File "&lt;path&gt;", line 53, in &lt;module&gt;
divide_integers()
File "&lt;path&gt;", line 47, in divide_integers
b = int(input("Please enter the denominator: "))
ValueError: invalid literal for int() with base 10: '0.5'</code></pre><p>We can customize how we handle different types of exceptions.</p><h3 id="-multiple-except-clauses">🔹 Multiple Except Clauses</h3><p>To do this, we need to add multiple <code>except</code> clauses to handle different types of exceptions differently. </p><p>According to the <a href="https://docs.python.org/3/tutorial/errors.html#handling-exceptions">Python Documentation</a>:</p><blockquote>A try statement may have <strong>more than one except clause</strong>, to specify handlers for different exceptions. <strong>At most one handler will be executed</strong>.</blockquote><p>In this example, we have two except clauses. One of them handles ZeroDivisionError and the other one handles ValueError, the two types of exceptions that could be raised in this try block. </p><pre><code>def divide_integers():
while True:
try:
a = int(input("Please enter the numerator: "))
b = int(input("Please enter the denominator: "))
print(a / b)
except ZeroDivisionError:
print("Please enter a valid denominator.")
except ValueError:
print("Both values have to be integers.")
divide_integers() </code></pre><p>💡 <strong>Tip: </strong>You have to determine which types of exceptions might be raised in the try block to handle them appropriately.</p><h3 id="-multiple-exceptions-one-except-clause">🔸 Multiple Exceptions, One Except Clause</h3><p>You can also choose to handle different types of exceptions with the same except clause. </p><p>According to the <a href="https://docs.python.org/3/tutorial/errors.html#handling-exceptions">Python Documentation</a>:</p><blockquote>An except clause may name <strong>multiple exceptions</strong> as a parenthesized tuple.</blockquote><p>This is an example where we catch two exceptions (ZeroDivisionError and ValueError) with the same <code>except</code> clause:</p><pre><code class="language-python">def divide_integers():
while True:
try:
a = int(input("Please enter the numerator: "))
b = int(input("Please enter the denominator: "))
print(a / b)
except (ZeroDivisionError, ValueError):
print("Please enter valid integers.")
divide_integers()</code></pre><p>The output would be the same for the two types of exceptions because they are handled by the same except clause:</p><pre><code class="language-python">Please enter the numerator: 5
Please enter the denominator: 0
Please enter valid integers.</code></pre><pre><code class="language-python">Please enter the numerator: 0.5
Please enter valid integers.
Please enter the numerator: </code></pre><h3 id="-handling-exceptions-raised-by-functions-called-in-the-try-clause">🔹 Handling Exceptions Raised by Functions Called in the try Clause</h3><p>An interesting aspect of exception handling is that if an exception is raised in a function that was previously called in the try clause of another function and the function itself does not handle it, the caller will handle it if there is an appropriate except clause. </p><p>According to the <a href="https://docs.python.org/3/tutorial/errors.html#handling-exceptions">Python Documentation</a>:</p><blockquote>Exception handlers don’t just handle exceptions if they occur immediately in the try clause, but also <strong>if they occur inside functions that are called (even indirectly) in the try clause.</strong></blockquote><p>Let's see an example to illustrate this:</p><pre><code>def f(i):
try:
g(i)
except IndexError:
print("Please enter a valid index")
def g(i):
a = "Hello"
return a[i]
while True:
try:
a = int(input("Please enter the numerator: "))
b = int(input("Please enter the denominator: "))
print(a / b)
# Here we assign the exception to the variable e
except ZeroDivisionError as e:
print(type(e))
print(e)
print(e.args)
divide_integers()</code></pre><p>The corresponding output would be:</p><pre><code class="language-python">Please enter the numerator: 5
Please enter the denominator: 0
# Type
&lt;class 'ZeroDivisionError'&gt;
# Message
division by zero
# Args
while True:
try:
a = int(input("Please enter the numerator: "))
b = int(input("Please enter the denominator: "))
result = a / b
except (ZeroDivisionError, ValueError):
print("Please enter valid integers. The denominator can't be zero")
else:
print(result)
divide_integers()</code></pre><p>If no exception are raised, the result is printed:</p><pre><code class="language-python">Please enter the numerator: 5
Please enter the denominator: 5
1.0</code></pre><p>But if an exception is raised, the result is not printed:</p><pre><code class="language-python">Please enter the numerator: 5
Please enter the denominator: 0
while True:
try:
a = int(input("Please enter the numerator: "))
b = int(input("Please enter the denominator: "))
result = a / b
except (ZeroDivisionError, ValueError):
print("Please enter valid integers. The denominator can't be zero")
else:
print(result)
finally:
print("Inside the finally clause")
divide_integers()</code></pre><p>This is the output when no exceptions were raised:</p><pre><code>Please enter the numerator: 5
Please enter the denominator: 5
1.0
Inside the finally clause</code></pre><p>This is the output when an exception was raised:</p><pre><code class="language-python">Please enter the numerator: 5
Please enter the denominator: 0
Please enter valid integers. The denominator can't be zero
if len(data) != 5:
raise ValueError("The argument must have five elements")
for item in data:
print(item)
print_five_items([5, 2])</code></pre><p>The output would be:</p><pre><code class="language-python">Traceback (most recent call last):
File "&lt;path&gt;", line 122, in &lt;module&gt;
print_five_items([5, 2])
File "&lt;path&gt;", line 117, in print_five_items
raise ValueError("The argument must have five elements")
ValueError: The argument must have five elements</code></pre><p>Notice how the last line displays the descriptive message:</p><pre><code class="language-python">ValueError: The argument must have five elements</code></pre><p>You can then choose how to handle the exception with a try ... except statement. You could add an else clause and/or a finally clause. You can customize it to fit your needs. </p><h3 id="-helpful-resources">🔹 Helpful Resources</h3><ul><li><a href="https://docs.python.org/3/tutorial/errors.html#exceptions">Exceptions</a></li><li><a href="https://docs.python.org/3/tutorial/errors.html#handling-exceptions">Handling Exceptions</a></li><li><a href="https://docs.python.org/3/tutorial/errors.html#defining-clean-up-actions">Defining Clean-up Actions</a></li></ul><p><strong>I hope you enjoyed reading my article and found it helpful.</strong> Now you have the necessary tools to handle exceptions in Python and you can use them to your advantage when you write Python code. ? <a href="https://www.udemy.com/user/estefania-cn/">Check out my online courses</a>. You can follow me on <a href="https://twitter.com/EstefaniaCassN">Twitter</a>. </p><p>⭐️ You may enjoy my other freeCodeCamp /news articles:</p><ul><li><a href="/news/python-property-decorator/">The @property Decorator in Python: Its Use Cases, Advantages, and Syntax</a></li><li><a href="/news/data-structures-101-graphs-a-visual-introduction-for-beginners-6d88f36ec768/">Data Structures 101: Graphs — A Visual Introduction for Beginners</a></li><li><a href="/news/data-structures-101-arrays-a-visual-introduction-for-beginners-7f013bcc355a/">Data Structures 101: Arrays — A Visual Introduction for Beginners</a></li></ul>
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
