---
card: "/images/default.jpg"
tags: [Python]
description: "Beginners in the field of data science who are not familiar w"
author: "Milad E. Fahmy"
title: "Python Fundamentals for Data Science"
created: "2021-08-16T15:35:57+02:00"
modified: "2021-08-16T15:35:57+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-data-science ">
<header class="post-full-header">
<h1 class="post-full-title">Python Fundamentals for Data Science</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/07/1_5YaueU4meqq-bCM8y3OlkQ.jpeg 300w,
/news/content/images/size/w600/2020/07/1_5YaueU4meqq-bCM8y3OlkQ.jpeg 600w,
/news/content/images/size/w1000/2020/07/1_5YaueU4meqq-bCM8y3OlkQ.jpeg 1000w,
/news/content/images/size/w2000/2020/07/1_5YaueU4meqq-bCM8y3OlkQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/07/1_5YaueU4meqq-bCM8y3OlkQ.jpeg" alt="Python Fundamentals for Data Science">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Beginners in the field of data science who are not familiar with programming often have a hard time figuring out where they should start.</p><p>With hundreds of questions about how to get started with <a href="https://github.com/dswh/python_fundamentals" rel="noopener nofollow">Python for DS </a>on various forums, this post (and video series) is my attempt to settle all those questions.</p><p>I'm a Python evangelist that started off as a Full Stack Python Developer before moving on to data engineering and then data science. My prior experience with Python and a decent grasp of math helped make the switch to data science more comfortable for me.</p><p>So, here are the fundamentals to help you with programming in Python.</p><p>Before we take a deep dive into the essentials, make sure that you have <a href="https://youtu.be/t8AUwTDtno8" rel="noopener nofollow">set up your Python environment</a> and know how to use a <a href="https://www.youtube.com/watch?v=TmDUZfkdZoo&amp;list=PLIkXejH7XPT_y00hj-mB-zTzePsMu2gRb&amp;index=3&amp;t=0s" rel="noopener nofollow">Jupyter Notebook (optional).</a></p><p>A basic Python curriculum can be broken down into 4 essential topics that include:</p><ol><li>Data types (int, float, strings)</li><li>Compound data structures (lists, tuples, and dictionaries)</li><li>Conditionals, loops, and functions</li><li>Object-oriented programming and using external libraries</li></ol><p>Let's go over each one and see what are the fundamentals you should learn.</p><h2 id="1-data-types-and-structures">1. Data Types and Structures</h2><p>The very first step is to understand how Python interprets data. </p><p>Starting with widely used data types, you should be familiar with integers (int), floats (float), strings (str), and booleans (bool). Here's what you should practice.</p><h3 id="type-typecasting-and-i-o-functions-">Type, typecasting, and I/O functions:</h3><ul><li>Learning the type of data using the <code>type()</code> method.</li></ul><pre><code class="language-py">type('Harshit')
# output: str
</code></pre><ul><li>Storing values into variables and input-output functions (<code>a = 5.67</code>)</li><li>Typecasting — converting a particular type of variable/data into another type if possible. For example, converting a string of integers into an integer:</li></ul><pre><code class="language-py">astring = "55"
print(type(astring))
# output: &lt;class 'str'&gt;
</code></pre><pre><code class="language-py">astring = int(astring)
print(type(astring))
# output: &lt;class 'int64'&gt;
print(answer)
# output: 29.0
</code></pre><h3 id="strings-">Strings:</h3><p>Knowing how to deal with textual data and their operators comes in handy when dealing with the string data type. Practice these concepts:</p><ul><li>Concatenating strings using <code>+</code></li><li>Splitting and joining the string using the <code>split()</code> and <code>join()</code>method</li><li>Changing the case of the string using <code>lower()</code> and <code>upper()</code> methods</li><li>Working with substrings of a string</li></ul><p>Here’s <a href="https://github.com/dswh/python_fundamentals/blob/master/Notebooks/python_fundamentals_part-1.ipynb" rel="noopener nofollow">the Notebook</a> that covers all the points discussed.</p><h2 id="2-compound-data-structures-lists-tuples-and-dictionaries-">2. Compound data structures (lists, tuples, and dictionaries)</h2><h3 id="lists-and-tuples-compound-data-types-">Lists and tuples (compound data types):</h3><p>One of the most commonly used and important data structures in Python are lists. A list is a collection of elements, and the collection can be of the same or varied data types. </p><p>Understanding lists will eventually pave the way for computing algebraic equations and statistical models on your array of data. </p><p>Here are the concepts you should be familiar with:</p><ul><li>How multiple data types can be stored in a Python list.</li><li><strong><strong>Indexing and slicing</strong></strong> to access a specific element or sub-list of the list.</li><li>Helper methods for <strong><strong>sorting, reversing, deleting elements, copying, and appending</strong></strong>.</li><li>Nested lists — lists containing lists. For example, <code>[1,2,3, [10,11]]</code>.</li><li>Addition in a list.</li></ul><pre><code class="language-py">alist + alist
# output: ['harshit', 2, 5.5, 10, [1, 2, 3], 'harshit', 2, 5.5, 10, [1, 2, 3]]</code></pre><p>Multiplying the list with a scalar:</p><pre><code class="language-py">alist * 2
ptint(type(x))
# output: &lt;class bool&gt;</code></pre><pre><code class="language-py">print(1 == 2)
percentile = 83
if score &gt; 75 or percentile &gt; 90:
print("Admission successful!")
else:
print("Try again next year")
# output: Try again next year
</code></pre><p>Concepts to learn:</p><ul><li><code>if</code>, <code>else</code>, and <code>elif</code> statements to construct your condition.</li><li>Making complex comparisons in one condition.</li><li>Keeping indentation in mind while writing nested <code>if</code> / <code>else</code> statements.</li><li>Using boolean, <code>in</code>, <code>is</code>, and <code>not</code> operators.</li></ul><h3 id="loops">Loops</h3><p>Often you'll need to do a repetitive task, and loops will be your best friend to eliminate the overhead of code redundancy. You’ll often need to iterate through each element of a list or dictionary, and loops come in handy for that. <code>while</code> and <code>for</code> are two types of loops. </p><p>Focus on:</p><ul><li>The <code>range()</code> function and iterating through a sequence using <code>for</code> loops.</li><li><code>while</code> loops</li></ul><pre><code class="language-py">age = [12,43,45,10]
i = 0
while i &lt; len(age):
if age[i] &gt;= 18:
print("Adult")
else:
print("Juvenile")
i += 1
# output:
# Juvenile
# Adult
# Adult
# Juvenile
</code></pre><ul><li>Iterating through lists and appending (or any other task with list items) elements in a particular order</li></ul><pre><code class="language-py">cubes = []
for i in range(1,10):
cubes.append(i ** 3)
print(cubes)
#output: [1, 8, 27, 64, 125, 216, 343, 512, 729]
</code></pre><ul><li>Using <code>break</code>, <code>pass</code>, and <code>continue</code> keywords.</li></ul><h3 id="list-comprehension">List Comprehension</h3><p>A sophisticated and succinct way of creating a list using and iterable followed by a <code>for</code> clause. </p><p>For example, you can create a list of 9 cubes as shown in the example above using list comprehension.</p><pre><code class="language-py"># list comprehension
cubes = [n** 3 for n in range(1,10)]
print(cubes)
# output: [1, 8, 27, 64, 125, 216, 343, 512, 729]</code></pre><h3 id="functions">Functions</h3><p>While working on a big project, maintaining code becomes a real chore. If your code performs similar tasks many times, a convenient way to manage your code is by using functions.</p><p>A function is a block of code that performs some operations on input data and gives you the desired output.</p><p>Using functions makes the code more readable, reduces redundancy, makes the code reusable, and saves time.</p><p>Python uses indentation to create blocks of code. This is an example of a function:</p><pre><code class="language-py">def add_two_numbers(a, b):
sum = a + b
return sum
def __init__(self, height, width):
self.height = height
self.width = width
def area(self):
area = self.height * self.width
return area
rect1 = Rectangle(12, 10)
print(type(rect1))
# output: &lt;class '__main__.Rectangle'&gt;
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
