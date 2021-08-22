---
card: "/images/default.jpg"
tags: [Python]
description: "In this article, you will learn the fundamentals of Sets in P"
author: "Milad E. Fahmy"
title: "Python Sets: A Detailed Visual Introduction"
created: "2021-08-16T15:37:48+02:00"
modified: "2021-08-16T15:37:48+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-programing tag-learning-to-code tag-sets tag-computer-science ">
<header class="post-full-header">
<h1 class="post-full-title">Python Sets: A Detailed Visual Introduction</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/12/Sets-3.png 300w,
/news/content/images/size/w600/2019/12/Sets-3.png 600w,
/news/content/images/size/w1000/2019/12/Sets-3.png 1000w,
/news/content/images/size/w2000/2019/12/Sets-3.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/12/Sets-3.png" alt="Python Sets: A Detailed Visual Introduction">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&gt;&gt;&gt; {1, 2, 3, 4}
{1, 2, 3, 4}
# From a list
&gt;&gt;&gt; set([1, 2, 3, 4])
{1, 2, 3, 4}
# From a tuple
&gt;&gt;&gt; set((1, 2, 3, 4))
{1, 2, 3, 4}</code></pre><p><strong>💡 Tip:</strong> To create an empty set, you must use the <a href="https://docs.python.org/3/library/stdtypes.html#set">set()</a> function because using an empty set of curly brackets, like this <code>{}</code>, will automatically create an empty <strong>dictionary</strong>, not an empty set.</p><pre><code class="language-python"># Creates a dictionary, not a set.
&gt;&gt;&gt; type({})
&lt;class 'dict'&gt;
# This is a set
&gt;&gt;&gt; type(set())
&lt;class 'set'&gt;</code></pre><h2 id="-duplicate-elements-are-removed">🔹 Duplicate Elements are Removed</h2><p>If the iterable that you pass as the argument to <code>set()</code> has duplicate elements, they are removed to create the set.</p><p>For example, notice how duplicate elements are removed when we pass this list:</p><pre><code class="language-python">&gt;&gt;&gt; a = [1, 2, 2, 2, 2, 3, 4, 1, 4]
&gt;&gt;&gt; set(a)
{1, 2, 3, 4}</code></pre><p>and notice how duplicate characters are removed when we pass this string:</p><pre><code class="language-python">&gt;&gt;&gt; a = "hhheeelllooo"
&gt;&gt;&gt; set(a)
{'e', 'l', 'o', 'h'}</code></pre><h2 id="-length">🔸 Length</h2><p>To find the length of a set, you can use the built-in function <a href="https://docs.python.org/3/library/stdtypes.html#set">len()</a>:</p><pre><code class="language-python">&gt;&gt;&gt; a = {1, 2, 3, 4}
&gt;&gt;&gt; b = set(a)
&gt;&gt;&gt; len(b)
&gt;&gt;&gt; b = set(a)
&gt;&gt;&gt; b
{'e', 'l', 'o', 'h'}
# Test if the characters 'e' and 'a' are in set b
&gt;&gt;&gt; 'e' in b
True
&gt;&gt;&gt; 'a' in b
False</code></pre><h2 id="-sets-vs-frozensets">🔸 Sets vs. Frozensets</h2><p>Sets are mutable, which means that they can be modified after they have been defined. </p><p>According to the <a href="https://docs.python.org/3.8/library/stdtypes.html#set-types-set-frozenset">Python Documentation</a>:</p><blockquote>The <a href="https://docs.python.org/3.8/library/stdtypes.html#set"><code>set</code></a> type is <strong>mutable </strong>— the contents can be changed using methods like <code>add()</code> and <code>remove()</code>. Since it is mutable, it has no hash value and cannot be used as either a dictionary key or as an element of another set.</blockquote><p>Since they cannot contain values of mutable data types, if we try to create a set that contains sets as elements (nested sets), we will see this error:</p><pre><code class="language-python">TypeError: unhashable type: 'set'
</code></pre><p>This is an example in IDLE. Notice how the elements that we are trying to include are sets:</p><pre><code class="language-python">&gt;&gt;&gt; a = {{1, 2, 3}, {1, 2, 4}}
Traceback (most recent call last):
File "&lt;pyshell#23&gt;", line 1, in &lt;module&gt;
a = {{1, 2, 3}, {1, 2, 4}}
&gt;&gt;&gt; a
{frozenset({1, 2, 3}), frozenset({1, 2, 4})}</code></pre><p>Notice that we don't get any errors and the set is created successfully. </p><h2 id="-introduction-to-set-theory">🔹 Introduction to Set Theory</h2><p>Before diving into set operations, we need to explore a little bit of set theory and Venn diagrams. We will dive into each set operation with its corresponding equivalent in Python code. Let's begin. </p><h3 id="subsets-and-supersets">Subsets and Supersets</h3><p>You can think of a subset as a "smaller portion" of a set. That is how I like to think about it. If you take some of the elements of a set and make a new set with those elements, the new set is a subset of the original set. </p><p>It's as if you had a bag full of rubber balls of different colors. If you make a set with all the rubber balls in the bag, and then take some of those rubber balls and make a new set with them, the new set is a subset of the original set. </p><p>Let me illustrate this graphically. If we have a set A with the elements 1, 2, 3, 4:</p><pre><code>&gt;&gt;&gt; a = {1, 2, 3, 4}</code></pre><p>We can "take" or "select" some elements of a and make a new set called B. Let's say that we chose to include the elements 1 and 2 in set B:</p><pre><code class="language-python">&gt;&gt;&gt; a = {1, 2, 3, 4}
&gt;&gt;&gt; b = {1, 2}
&gt;&gt;&gt; b.issubset(a)
True</code></pre><p>As you can see, B is a subset of A because the value returned is <code>True</code>.</p><p>But the opposite is not true since not all the element of A are in B:</p><pre><code class="language-python">&gt;&gt;&gt; a.issubset(b)
False</code></pre><p>Let's see something very interesting:</p><pre><code class="language-python">&gt;&gt;&gt; a = {1, 2, 3, 4}
&gt;&gt;&gt; b = {1, 2, 3, 4}
&gt;&gt;&gt; a.issubset(b)
True
&gt;&gt;&gt; b.issubset(a)
&gt;&gt;&gt; b = {1, 2, 3, 4}
&gt;&gt;&gt; a &lt;= b
&gt;&gt;&gt; a = {1, 2, 3, 4}
&gt;&gt;&gt; b = {1, 2, 3, 4}
&gt;&gt;&gt; b &lt; a
False
# B is a proper subset of A because B is not equal to A
&gt;&gt;&gt; a = {1, 2, 3, 4}
&gt;&gt;&gt; b = {1, 2}
&gt;&gt;&gt; b &lt; a
&gt;&gt;&gt; b = {1, 2}
&gt;&gt;&gt; a.issuperset(b)
True</code></pre><p>We can also use the operators <code>&gt;</code> and <code>&gt;=</code>. They work exactly like <code>&lt;</code> and <code>&lt;=</code>, but now they determine if the left operand is a <strong>superset </strong>of the right operand:</p><pre><code class="language-python">&gt;&gt;&gt; a = {1, 2, 3, 4}
&gt;&gt;&gt; b = {1, 2}
&gt;&gt;&gt; a &gt; b
True
&gt;&gt;&gt; a &gt;= b
&gt;&gt;&gt; a = {3, 6, 1}
&gt;&gt;&gt; b = {2, 8, 3, 1}
&gt;&gt;&gt; a.isdisjoint(b)
False
# Elements in common: None
&gt;&gt;&gt; a = {3, 1, 4}
&gt;&gt;&gt; b = {8, 9, 0}
&gt;&gt;&gt; a.isdisjoint(b)
&gt;&gt;&gt; b = {2, 8, 3, 1}
&gt;&gt;&gt; a | b
{1, 2, 3, 4, 7, 8}</code></pre><p>💡 <strong>Tip:</strong> We can assign this new set to a variable, like this:</p><pre><code class="language-python">&gt;&gt;&gt; a = {3, 1, 7, 4}
&gt;&gt;&gt; b = {2, 8, 3, 1}
&gt;&gt;&gt; c = a | b
&gt;&gt;&gt; c
&gt;&gt;&gt; b = {2, 8, 3, 1}
&gt;&gt;&gt; c = {1, 0, 4, 6}
&gt;&gt;&gt; d = {8, 2, 6, 3}
# Union of these four sets
&gt;&gt;&gt; a | b | c | d
&gt;&gt;&gt; b = {2, 8, 3, 1}
&gt;&gt;&gt; a &amp; b
&gt;&gt;&gt; b = {2, 8, 3, 1, 5}
&gt;&gt;&gt; c = {1, 0, 4, 6, 5}
&gt;&gt;&gt; d = {8, 2, 6, 3, 5}
# Only 5 is in a, b, c, and d.
&gt;&gt;&gt; a &amp; b &amp; c &amp; d
&gt;&gt;&gt; b = {2, 8, 3, 1}
&gt;&gt;&gt; a - b
&gt;&gt;&gt; b = {2, 8, 3, 1, 5}
&gt;&gt;&gt; c = {1, 0, 4, 6, 5}
# Only 7 is in A but not in B and not in C
&gt;&gt;&gt; a - b - c
&gt;&gt;&gt; b = {2, 8, 3, 1}
&gt;&gt;&gt; a ^ b
&gt;&gt;&gt; b = {2, 8, 3, 1, 5}
&gt;&gt;&gt; c = {1, 0, 4, 6, 5}
&gt;&gt;&gt; d = {8, 2, 6, 3, 5}
&gt;&gt;&gt; a ^ b ^ c ^ d
{0, 1, 3, 7}</code></pre><h3 id="update-sets-automatically">Update Sets Automatically</h3><p>If you want to update set A immediately after performing these operations, you can simply add an equal sign after the operator. For example:</p><pre><code class="language-python">&gt;&gt;&gt; a = {1, 2, 3, 4}
&gt;&gt;&gt; b = {1, 2}
# Notice the &amp;=
&gt;&gt;&gt; a &amp;= b
&gt;&gt;&gt; a
{1, 2}</code></pre><p>We are assigning the set that results from <code>a &amp; b</code> to set <code>a</code> in just one line. You can do the same with the other operators: <code>^=</code> , <code>|=</code>, and <code>-=</code>. </p><p><strong>💡 Tip:</strong> This is very similar to the syntax that we use with variables (for example: <code>a += 5</code>) but now we are working with sets.</p><h2 id="-set-methods">🔹 Set Methods</h2><p>Sets include helpful built-in methods to help us perform common and essential functionality such as adding elements, deleting elements, and clearing the set.</p><h3 id="add-elements">Add Elements</h3><p>To add elements to a set, we use the <a href="https://docs.python.org/3/library/stdtypes.html#frozenset.add">.add()</a> method, passing the element as the only argument.</p><pre><code>&gt;&gt;&gt; a = {1, 2, 3, 4}
&gt;&gt;&gt; a.add(7)
&gt;&gt;&gt; a
&gt;&gt;&gt; a.remove(3)
&gt;&gt;&gt; a
{1, 2, 4}
&gt;&gt;&gt; a = {1, 2, 3, 4}
&gt;&gt;&gt; a
{1, 2, 4}</code></pre><p>The key difference between these two methods is that if we use the <a href="https://docs.python.org/3/library/stdtypes.html#frozenset.remove">.remove()</a> method, we run the risk of trying to remove an element that doesn't exist in the set and this will raise a <code>KeyError</code>:</p><pre><code class="language-python">&gt;&gt;&gt; a = {1, 2, 3, 4}
&gt;&gt;&gt; a.remove(5)
Traceback (most recent call last):
File "&lt;pyshell#102&gt;", line 1, in &lt;module&gt;
a.remove(5)
&gt;&gt;&gt; a
{1, 2, 3, 4}</code></pre><p>The third method (<a href="https://docs.python.org/3/library/stdtypes.html#frozenset.pop">.pop()</a>) will remove and return an arbitrary element from the set and it will raise a <code>KeyError</code> if the set is empty. </p><pre><code class="language-python">&gt;&gt;&gt; a = {1, 2, 3, 4}
&gt;&gt;&gt; a.pop()
1
&gt;&gt;&gt; a.pop()
2
&gt;&gt;&gt; a.pop()
3
&gt;&gt;&gt; a
{4}
&gt;&gt;&gt; a.pop()
4
&gt;&gt;&gt; a
set()
&gt;&gt;&gt; a.pop()
Traceback (most recent call last):
File "&lt;pyshell#119&gt;", line 1, in &lt;module&gt;
a.pop()
KeyError: 'pop from an empty set'</code></pre><h3 id="clear-the-set">Clear the Set</h3><p>You can use the <code>.clear()</code> method if you need to delete all the elements from a set. For example:</p><pre><code class="language-python">&gt;&gt;&gt; a = {1, 2, 3, 4}
&gt;&gt;&gt; a.clear()
&gt;&gt;&gt; a
set()
&gt;&gt;&gt; len(a)
0</code></pre><h2 id="-in-summary">🔸 In Summary</h2><ul><li>Sets are unordered built-in data types that don't have any repeated elements, so they allow us to eliminate repeated elements from lists and tuples.</li><li>They are mutable and they can only contain immutable elements.</li><li>We can check if a set is a subset or superset of another set.</li><li>Frozenset is an immutable type of set that allows us to create nested sets.</li><li>We can operate on sets with: union (<code>|</code>), intersection (<code>&amp;</code>), difference (<code>-</code>), and symmetric difference (<code>^</code>).</li><li>We can add elements to a set, delete them, and clear the set completely using built-in methods.</li></ul><p><strong>I really hope you liked my article and found it helpful. </strong>Now you can work with sets in your Python projects. <a href="https://www.udemy.com/user/estefania-cn/">Check out my online courses</a>. Follow me on <a href="https://twitter.com/EstefaniaCassN">Twitter</a>. ⭐️</p>
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
