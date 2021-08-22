---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9d22740569d1a4ca3615.jpg"
tags: [Python]
description: "Python utilizes a for loop to iterate over a list of elements"
author: "Milad E. Fahmy"
title: "For Loops in Python"
created: "2021-08-16T15:37:20+02:00"
modified: "2021-08-16T15:37:20+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">For Loops in Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d22740569d1a4ca3615.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d22740569d1a4ca3615.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d22740569d1a4ca3615.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d22740569d1a4ca3615.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d22740569d1a4ca3615.jpg" alt="For Loops in Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="for-loop-statements"><strong>For Loop Statements</strong></h2><p>Python utilizes a for loop to iterate over a list of elements. Unlike C or Java, which use the for loop to change a value in steps and access something such as an array using that value.</p><p>For loops iterate over collection based data structures like lists, tuples, and dictionaries.</p><p>The basic syntax is:</p><pre><code class="language-python">for value in list_of_values:
# use value inside this block</code></pre><p>In general, you can use anything as the iterator value, where entries of the iterable can be assigned to. E.g. you can unpack tuples from a list of tuples:</p><pre><code class="language-python">list_of_tuples = [(1,2), (3,4)]
for a, b in list_of_tuples:
print("a:", a, "b:", b)</code></pre><p>On the other hand, you can loop over anything that is iterable. You can call a function or use a list literal.</p><pre><code class="language-python">for person in load_persons():
print("The name is:", person.name)</code></pre><pre><code class="language-python">for character in ["P", "y", "t", "h", "o", "n"]:
print("Give me a '{}'!".format(character))</code></pre><p>Some ways in which For loops are used:</p><h3 id="iterate-over-the-range-function">Iterate over the range() function</h3><pre><code class="language-python">for i in range(10):
print(i)</code></pre><p>Rather than being a function, range is actually an immutable sequence type. The output will contain results from lower bound i.e 0 to the upper bound i.e 10 but excluding 10.By default the lower bound or the starting index is set to zero. Output:</p><pre><code class="language-text">&gt;
0
1
2
3
4
5
6
7
8
9
&gt;</code></pre><p>Additionally, one can specify the lower bound of the sequence and even the step of the sequence by adding a second and a third parameter.</p><pre><code class="language-python">for i in range(4,10,2): #From 4 to 9 using a step of two
print(i)</code></pre><p>Output:</p><pre><code class="language-text">&gt;
4
6
8
&gt;</code></pre><h3 id="xrange-function">xrange() function</h3><p>For the most part, xrange and range are the exact same in terms of functionality. They both provide a way to generate a list of integers for you to use, however you please. The only difference is that range returns a Python list object and xrange returns an xrange object. It means that xrange doesn’t actually generate a static list at run-time like range does. It creates the values as you need them with a special technique called yielding. This technique is used with a type of object known as generators.</p><p>One more thing to add. In Python 3.x, the xrange function does not exist anymore. The range function now does what xrange does in Python 2.x</p><h3 id="iterate-over-values-in-a-list-or-tuple">Iterate over values in a list or tuple</h3><pre><code class="language-python">A = ["hello", 1, 65, "thank you", [2, 3]]
for value in A:
print(value)</code></pre><p>Output:</p><pre><code class="language-text">&gt;
hello
1
65
thank you
[2, 3]
&gt;</code></pre><h3 id="iterate-over-keys-in-a-dictionary-aka-hashmap-">Iterate over keys in a dictionary (aka hashmap)</h3><pre><code class="language-python">fruits_to_colors = {"apple": "#ff0000",
"lemon": "#ffff00",
"orange": "#ffa500"}
for key in fruits_to_colors:
print(key, fruits_to_colors[key])</code></pre><p>Output:</p><pre><code class="language-text">&gt;
apple #ff0000
lemon #ffff00
orange #ffa500
&gt;</code></pre><h3 id="iterate-over-two-lists-of-same-size-in-a-single-loop-with-the-zip-function">Iterate over two lists of same size in a single loop with the zip() function</h3><pre><code class="language-python">A = ["a", "b", "c"]
B = ["a", "d", "e"]
for a, b in zip(A, B):
print a, b, a == b
</code></pre><p>Output:</p><pre><code class="language-text">&gt;
a a True
b d False
c e False
&gt;</code></pre><h3 id="iterate-over-a-list-and-get-the-corresponding-index-with-the-enumerate-function">Iterate over a list and get the corresponding index with the enumerate() function</h3><pre><code class="language-python">A = ["this", "is", "something", "fun"]
for index,word in enumerate(A):
print(index, word)</code></pre><p>Output:</p><pre><code class="language-text">&gt;
0 this
1 is
2 something
3 fun
&gt;</code></pre><p>A common use case is iterating over a dictionary:</p><pre><code class="language-python">for name, phonenumber in contacts.items():
print(name, "is reachable under", phonenumber)</code></pre><p>If you absolutely need to access the current index of your iteration, do <strong><strong>NOT</strong></strong> use <code>range(len(iterable))</code>! This is an extremely bad practice and will get you plenty of chuckles from senior Python developers. Use the built in function <code>enumerate()</code> instead:</p><pre><code class="language-python">for index, item in enumerate(shopping_basket):
print("Item", index, "is a", item)</code></pre><h3 id="for-else-statements">for/else statements </h3><p>Pyhton permits you to use else with for loops, the else case is executed when none of the conditions with in the loop body was satisfied. To use the else we have to make use of <code>break</code> statement so that we can break out of the loop on a satsfied condition.If we do not break out then the else part will be executed.</p><pre><code class="language-python">week_days = ['Monday','Tuesday','Wednesday','Thursday','Friday']
today = 'Saturday'
for day in week_days:
if day == today:
print('today is a week day')
break
else:
print('today is not a week day')</code></pre><p>In the above case the output will be <code>today is not a week day</code> since the break within the loop will never be executed.</p><h3 id="iterate-over-a-list-using-inline-loop-function">Iterate over a list using inline loop function</h3><p>We could also iterate inline using python, for example if we need to uppercase all the words in a list from a list we could simply do the following:</p><pre><code class="language-python">A = ["this", "is", "awesome", "shinning", "star"]
UPPERCASE = [word.upper() for word in A]
print (UPPERCASE)</code></pre><p>Output:</p><pre><code class="language-text">&gt;
['THIS', 'IS', 'AWESOME', 'SHINNING', 'STAR']
&gt;</code></pre><h4 id="more-information-"><strong>More Information:</strong></h4><ul><li><a href="https://docs.python.org/2.7/tutorial/controlflow.html#for-statements" rel="nofollow">Python2 for loop documentation</a></li><li><a href="https://docs.python.org/3/tutorial/controlflow.html#for-statements" rel="nofollow">Python3 for loop documentation</a></li></ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
