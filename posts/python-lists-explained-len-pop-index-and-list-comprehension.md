---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9ced740569d1a4ca34ee.jpg"
tags: [Python]
description: "Lists in Python are similar to arrays in JavaScript. They are"
author: "Milad E. Fahmy"
title: "Python Lists Explained: Len, Pop, Index, and List Comprehension"
created: "2021-08-16T15:37:24+02:00"
modified: "2021-08-16T15:37:24+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-programming-languages tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">Python Lists Explained: Len, Pop, Index, and List Comprehension</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ced740569d1a4ca34ee.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ced740569d1a4ca34ee.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ced740569d1a4ca34ee.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ced740569d1a4ca34ee.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ced740569d1a4ca34ee.jpg" alt="Python Lists Explained: Len, Pop, Index, and List Comprehension">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>Lists in Python are similar to arrays in JavaScript. They are one of the built in data types in Python used to store collections of data.</p><h2 id="basic-usage">Basic usage</h2><h3 id="how-to-create-a-list">How to create a list</h3><p>An empty <code>list</code> is created using a pair of square brackets:</p><pre><code class="language-shell">&gt;&gt;&gt; empty_list = []
&gt;&gt;&gt; type(empty_list)
&lt;class 'list'&gt;
&gt;&gt;&gt; len(empty_list)
0</code></pre><p>A <code>list</code> can be created with elements by enclosing a comma separated list of elements with square brackets. Lists allow for the elements to be of different types (heterogeneous) but are most commonly of a single type (homogeneous):</p><pre><code class="language-shell">&gt;&gt;&gt; homogeneous_list = [1, 1, 2, 3, 5, 8]
&gt;&gt;&gt; type(homogeneous_list)
&lt;class 'list'&gt;
&gt;&gt;&gt; print(homogeneous_list)
[1, 1, 2, 3, 5, 8]
&gt;&gt;&gt; len(homogeneous_list)
6
&gt;&gt;&gt; heterogeneous_list = [1, "Hello Campers!"]
&gt;&gt;&gt; print(heterogeneous_list)
[1, "Hello Campers!"]
&gt;&gt;&gt; len(heterogeneous_list)
2</code></pre><p>The <code>list</code> constructor can also be used to create a <code>list</code>:</p><pre><code class="language-shell">&gt;&gt;&gt; empty_list = list()                      # Creates an empty list
&gt;&gt;&gt; print(empty_list)
[]
&gt;&gt;&gt; list_from_iterable = list("Hello campers!")    # Creates a list from an iterable.
&gt;&gt;&gt; print(list_from_iterable)
['H', 'e', 'l', 'l', 'o', ' ', 'c', 'a', 'm', 'p', 'e', 'r', 's', '!']</code></pre><p>You can also use List Comprehension to create lists, which we'll cover later in the article.</p><h3 id="access-elements-in-a-list">Access elements in a list</h3><pre><code class="language-shell">&gt;&gt;&gt; my_list = [1, 2, 9, 16, 25]
&gt;&gt;&gt; print(my_list)
[1, 2, 9, 16, 25]</code></pre><p><em>Zero indexed</em></p><pre><code class="language-shell">&gt;&gt;&gt; my_list[0]
1
&gt;&gt;&gt; my_list[1]
2
&gt;&gt;&gt; my_list[2]
9</code></pre><p><em>Wrap around indexing</em></p><pre><code class="language-shell">&gt;&gt;&gt; my_list[-1]
25
&gt;&gt;&gt; my_list[-2]
16</code></pre><p><em>Unpacking lists for python-3</em></p><pre><code class="language-shell">&gt;&gt;&gt; print(*my_list)
1 2 9 16 25</code></pre><h3 id="lists-are-mutable">Lists are mutable</h3><p><code>lists</code> are mutable containers. Mutable containers are containers that allow changes to which objects are contained by the container.</p><p>Elements from a <code>list</code> may be extracted and re-arranged using another <code>list</code> as index.</p><pre><code class="language-shell">&gt;&gt;&gt; my_list = [1, 2, 9, 16, 25, 34, 53, 21]
&gt;&gt;&gt; my_index = [5, 2, 0]
&gt;&gt;&gt; my_new_list = [my_list[i] for i in my_index]
&gt;&gt;&gt; print(my_new_list)
[34, 9, 1]</code></pre><h2 id="list-methods">List methods</h2><h3 id="len-"><code>len()</code></h3><p>The <code>len()</code> method returns the length of an object, whether that be a list, a string, tuple, or dictionary.</p><p><code>len()</code> takes one argument, which can be a sequence (such as a string, bytes, tuple, list, or range) or collection (such as a dictionary, set, or frozen set).</p><pre><code class="language-text">list1 = [123, 'xyz', 'zara'] # list
print(len(list1)) # prints 3 as there are 3 elements in the list1
str1 = 'basketball' # string
print(len(str1)) # prints 10 as the str1 is made of 10 characters
tuple1 = (2, 3, 4, 5) # tuple
print(len(tuple1)) # prints 4 as there are 4 elements in the tuple1
dict1 = {'name': 'John', 'age': 4, 'score': 45} # dictionary
print(len(dict1)) # prints 3 as there are 3 key and value pairs in the dict1</code></pre><h3 id="index-"><code>index()</code></h3><p><code>index()</code> returns the the first occurrence/index of the element in the list given as an argument to the function.</p><pre><code class="language-py">numbers = [1, 2, 2, 3, 9, 5, 6, 10]
words = ["I", "love", "Python", "I", "love"]
print(numbers.index(9)) # 4
print(numbers.index(2)) # 1
print(words.index("I")) # 0
print(words.index("am")) # returns a ValueError as 'am' is not in the `words` list</code></pre><p>Here the first output is very obvious, but the second and third might seem confusing at first. But remember <code>index()</code> returns the first occurrence of the element and hence in this case <code>1</code> and <code>0</code> are the indices where <code>2</code> and <code>"I"</code> occur first in the lists respectively.</p><p>Also, if an element is not found in the list, a <code>ValueError</code> is returned as in the case of indexing <code>"am"</code> in the <code>words</code> list.</p><p><strong>Optional arguments</strong></p><p>You can also use optional arguments to limit your search to a particular sub-sequence of the list:</p><pre><code class="language-py">words = ["I", "am", "a", "I", "am", "Pythonista"]
print(words.index("am", 2, 5)) # 4</code></pre><p>Although the element is searched between the indices 2 (inclusive) and 5 (not inclusive), the returned index is computed relative to the beginning of the full list rather than the start argument.</p><h3 id="pop-"><code>pop()</code></h3><p>The <code>pop()</code> method removes and returns the last element from a list. </p><p>There is an optional parameter which is the index of the element to be removed from the list. If no index is specified, <code>pop()</code> removes and returns the last item in the list. </p><p>If the index passed to the <code>pop()</code> method is not in the range, it throws the <code>IndexError: pop index out of range</code> exception.</p><pre><code class="language-py">cities = ['New York', 'Dallas', 'San Antonio', 'Houston', 'San Francisco'];
print "City popped is: ", cities.pop() # City popped is: San Francisco
print "City at index 2 is  : ", cities.pop(2) # City at index 2 is: San Antonio</code></pre><p><strong>Basic stack functionality</strong></p><p>The <code>pop()</code> method is often used in conjunction with <code>append()</code> to implement basic stack functionality in a Python application:</p><pre><code class="language-py">stack = []
for i in range(5):
stack.append(i)
while len(stack):
print(stack.pop())</code></pre><h3 id="list-comprehension">List Comprehension</h3><p>List Comprehension is a way of looping through a list to produce a new list based on some conditions. It can be confusing at first but once you are acclimated to the syntax it is very powerful and quick.</p><p>The first step in learning how to use list comprehension is to look at the traditional way of looping through a list. The following is a simple example that returns a new list of even numbers.</p><pre><code class="language-python"># Example list for demonstration
some_list = [1, 2, 5, 7, 8, 10]
# Empty list that will be populate with a loop
even_list = []
for number in some_list:
if number % 2 == 0:
even_list.append(number)
# even_list now equals [2, 8, 10]</code></pre><p>First a list is created with some numbers. You then create an empty list that will hold your results from the loop. In the loop you check to see if each number is divisible by 2 and if so you add it the the <code>even_list</code>. This took 5 lines of code not including comments and white space which isn’t much in this example.</p><p>Now for the list comprehension example.</p><pre><code class="language-python"># Example list for demonstration
some_list = [1, 2, 5, 7, 8, 10]
# List Comprehension
even_list = [number for number in some_list if number % 2 == 0]
# even_list now equals [2, 8, 10]</code></pre><p>Another example, with the same two steps: The following will create a list of numbers that correspond to the numbers in <code>my_starting_list</code> multiplied by 7.</p><pre><code class="language-py">my_starting_list = [1, 2, 3, 4, 5, 6, 7, 8]
my_new_list = []
for item in my_starting_list:
my_new_list.append(item * 7)</code></pre><p>When this code is run, the final value of <code>my_new_list</code> is: <code>[7, 14, 21, 28, 35, 42, 49, 56]</code></p><p>A developer using list comprehension could achieve the same result using the following list comprehension, which results in the same <code>my_new_list</code>.</p><pre><code class="language-py">my_starting_list = [1, 2, 3, 4, 5, 6, 7, 8]
my_new_list = [item * 7 for item in my_starting_list]</code></pre><p>A simple formula to write in a list comprehension way is:</p><p><code>my_list = [{operation with input n} for n in {python iterable}]</code></p><p>Replace <code>{operation with input n}</code> with however you want to change the item returned from the iterable. The above example uses <code>n * 7</code> but the operation can be as simple or as complex as necessary.</p><p>Replace <code>{python iterable}</code> with any iterable. Sequence types will be most common. A list was used in the above example, but tuples and ranges are also common.</p><p>List comprehension adds an element from an existing list to a new list if some condition is met. It is neater, but is also much faster in most cases. In some cases, list comprehension may hinder readability, so the developer must weigh their options when choosing to use list comprehension.</p><p><strong>Examples of list comprehension with conditionals</strong></p><p>The flow of control in list comprehensions can be controlled using conditionals. For example:</p><pre><code class="language-py">only_even_list = [i for i in range(13) if i%2==0]</code></pre><p>This is equivalent to the following loop:</p><pre><code class="language-py">only_even_list = list()
for i in range(13):
if i%2 == 0:
only_even_list.append(i)</code></pre><p>List comprehension can also contain nested if conditions. Consider the following loop:</p><pre><code class="language-py">divisible = list()
for i in range(50):
if i%2 == 0:
if i%3 == 0:
divisible.append(i)</code></pre><p>Using list comprehension this can be written as:</p><pre><code class="language-py">divisible = [i for i in range(50) if i%2==0 if i%3==0]</code></pre><p>If-Else statement can also be used along with list comprehension.</p><pre><code class="language-py">list_1 = [i if i%2==0 else i*-1 for i in range(10)]</code></pre><h4 id="more-information-"><strong>More Information:</strong></h4><ul><li><a href="/news/python-example/">The Best Python Code Examples</a></li></ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
