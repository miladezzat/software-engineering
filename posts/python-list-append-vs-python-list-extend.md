---
card: "/images/default.jpg"
tags: [Python]
description: "If you want to learn how to work with .append() and .extend()"
author: "Milad E. Fahmy"
title: "Python List Append VS Python List Extend – The Difference Explained with Array Method Examples"
created: "2021-08-16T15:37:09+02:00"
modified: "2021-08-16T15:37:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-tutorial ">
<header class="post-full-header">
<h1 class="post-full-title">Python List Append VS Python List Extend – The Difference Explained with Array Method Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/03/Image---Append-vs-Extend-1.png 300w,
/news/content/images/size/w600/2020/03/Image---Append-vs-Extend-1.png 600w,
/news/content/images/size/w1000/2020/03/Image---Append-vs-Extend-1.png 1000w,
/news/content/images/size/w2000/2020/03/Image---Append-vs-Extend-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/03/Image---Append-vs-Extend-1.png" alt="Python List Append VS Python List Extend – The Difference Explained with Array Method Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&gt;&gt;&gt; nums = [1, 2, 3, 4]
# Add the integer 5 to the end of the existing list
&gt;&gt;&gt; nums.append(5)
# See the updated value of the list
&gt;&gt;&gt; nums
[1, 2, 3, 4, 5]</code></pre><p>💡 <strong>Tips:</strong> When you use <code>.append()</code> the original list is modified. The method does not create a copy of the list – it mutates the original list in memory. </p><p>Let's pretend that we are conducting a research and that we want to analyze the data collected using Python. We need to add a new measurement to the existing list of values. </p><p>How do we do it? We use the <code>.append()</code> method! </p><p>You can see it right here:</p><pre><code class="language-python"># Existing list
&gt;&gt;&gt; nums = [5.6, 7.44, 6.75, 4.56, 2.3]
# Add the float (decimal number) to the end of the existing list
&gt;&gt;&gt; nums.append(7.34)
# See the updated value of the list
&gt;&gt;&gt; nums
[5.6, 7.44, 6.75, 4.56, 2.3, 7.34]</code></pre><h3 id="equivalent-to-">Equivalent to...</h3><p>If you are familiar with string, list, or tuple slicing, what <code>.append()</code> really does behind the scenes is equivalent to:</p><pre><code class="language-python">a[len(a):] = [x]</code></pre><p>With this example, you can see that they are equivalent. </p><p>Using <code>.append()</code>:</p><pre><code class="language-python">&gt;&gt;&gt; nums = [5.6, 7.44, 6.75, 4.56, 2.3]
&gt;&gt;&gt; nums.append(4.52)
&gt;&gt;&gt; nums
[5.6, 7.44, 6.75, 4.56, 2.3, 4.52]</code></pre><p>Using list slicing:</p><pre><code class="language-python">&gt;&gt;&gt; nums = [5.6, 7.44, 6.75, 4.56, 2.3]
&gt;&gt;&gt; nums[len(nums):] = [4.52]
&gt;&gt;&gt; nums
[5.6, 7.44, 6.75, 4.56, 2.3, 4.52]</code></pre><h3 id="appending-a-sequence">Appending a Sequence</h3><p>Now, what do you think about this example? What do you think will be output?</p><pre><code class="language-python">&gt;&gt;&gt; nums = [5.6, 7.44, 6.75, 4.56, 2.3]
&gt;&gt;&gt; nums.append([5.67, 7.67, 3.44])
&gt;&gt;&gt; nums
# OUTPUT?</code></pre><p>Are you ready? This will be the output:</p><pre><code class="language-Python">[5.6, 7.44, 6.75, 4.56, 2.3, [5.67, 7.67, 3.44]]</code></pre><p>You might be asking, why was the full list added as a single item? It's because the <code>.append()</code> method adds the entire item to the end of the list. If the item is a sequence such as a list, dictionary, or tuple, the entire sequence will be added as a single item of the existing list.</p><p>Here we have another example (below). In this case, the item is a tuple and it is added as a single item of the list, not as individual items:</p><pre><code class="language-python">&gt;&gt;&gt; names = ["Lulu", "Nora", "Gino", "Bryan"]
&gt;&gt;&gt; names.append(("Emily", "John"))
&gt;&gt;&gt; names
['Lulu', 'Nora', 'Gino', 'Bryan', ('Emily', 'John')]</code></pre><h2 id="-extend">🔹 Extend</h2><p>Now let's dive into the functionality of the <code>.extend()</code> method. </p><h3 id="use-cases-1">Use Cases</h3><p>You should use this method if you need to <strong>append several items to a list as individual items</strong>. </p><p>Let me illustrate the importance of this method with a familiar friend that you just learned: the <code>.append()</code> method. Based on what you've learned so far, if we wanted to add several <strong>individual </strong>items to a list using <code>.append()</code>, we would need to use <code>.append()</code> several times, like this:</p><pre><code class="language-python"># List that we want to modify
&gt;&gt;&gt; nums = [5.6, 7.44, 6.75, 4.56, 2.3]
# Appending the items
&gt;&gt;&gt; nums.append(2.3)
&gt;&gt;&gt; nums.append(9.6)
&gt;&gt;&gt; nums.append(4.564)
&gt;&gt;&gt; nums.append(7.56)
# Updated list
&gt;&gt;&gt; nums
[5.6, 7.44, 6.75, 4.56, 2.3, 2.3, 9.6, 4.564, 7.56]</code></pre><p>I'm sure that you are probably thinking that this would not be very efficient, right? What if I need to add thousands or millions of values? I cannot write thousands or millions of lines for this simple task. That would take forever!</p><p>So let's see an alternative. We can store the values that we want to add in a separate list and then use a for loop to call <code>.append()</code> as many times as needed:</p><pre><code class="language-python"># List that we want to modify
&gt;&gt;&gt; nums = [5.6, 7.44, 6.75, 4.56, 2.3]
# Values that we want to add
&gt;&gt;&gt; new_values = [2.3, 9.6, 4.564, 7.56]
# For loop that is going to append the value
&gt;&gt;&gt; for num in new_values:
nums.append(num)
# Updated value of the list
&gt;&gt;&gt; nums
[5.6, 7.44, 6.75, 4.56, 2.3, 2.3, 9.6, 4.564, 7.56]</code></pre><p>This is more efficient, right? We are only writing a few lines. But there is an even more efficient, readable, and compact way to achieve the same purpose: <code>.extend()</code>!</p><pre><code class="language-python">&gt;&gt;&gt; nums = [5.6, 7.44, 6.75, 4.56, 2.3]
&gt;&gt;&gt; new_values = [2.3, 9.6, 4.564, 7.56]
# This is where the magic occurs! No more for loops
&gt;&gt;&gt; nums.extend(new_values)
# The list was updated with individual values
&gt;&gt;&gt; nums
&gt;&gt;&gt; a = [1, 2, 3, 4]
# Sequence of values that we want to add to the list a
&gt;&gt;&gt; b = [5, 6, 7]
# Calling .extend()
&gt;&gt;&gt; a.extend(b)
# See the updated list. Now the list a has the values 5, 6, and 7
&gt;&gt;&gt; a
&gt;&gt;&gt; b = [5, 6, 7]
&gt;&gt;&gt; a.extend(b)
&gt;&gt;&gt; a
[1, 2, 3, 4, 5, 6, 7]
# List b is intact!
&gt;&gt;&gt; b
[5, 6, 7]</code></pre><h3 id="examples-1">Examples</h3><p>You may be curious to know how the <code>.extend()</code> method works when you pass different types of iterables. Let's see how in the following examples:</p><p><strong>For tuples:</strong><br>The process works exactly the same if you pass a tuple. The individual elements of the tuple are appended one by one in the order that they appear. </p><pre><code class="language-python"># List that will be extended
&gt;&gt;&gt; a = [1, 2, 3, 4]
# Values that will be added (the iterable is a tuple!)
&gt;&gt;&gt; b = (1, 2, 3, 4)
# Method call
&gt;&gt;&gt; a.extend(b)
# The value of the list a was updated
&gt;&gt;&gt; a
[1, 2, 3, 4, 1, 2, 3, 4]</code></pre><p><strong>For sets:</strong><br>The same occurs if you pass a set. The elements of the set are appended one by one.</p><pre><code class="language-python"># List that will be extended
&gt;&gt;&gt; a = [1, 2, 3, 4]
# Values that will be appended (the iterable is a set!)
&gt;&gt;&gt; c = {5, 6, 7}
# Method call
&gt;&gt;&gt; a.extend(c)
# The value of a was updated
&gt;&gt;&gt; a
[1, 2, 3, 4, 5, 6, 7]</code></pre><p><strong>For strings:</strong><br>Strings work a little bit different with the <code>.extend()</code> method. Each character of the string is considered an "item", so the characters are appended one by one in the order that they appear in the string. </p><pre><code class="language-python"># List that will be extended
&gt;&gt;&gt; a = ["a", "b", "c"]
# String that will be used to extend the list
&gt;&gt;&gt; b = "Hello, World!"
# Method call
&gt;&gt;&gt; a.extend(b)
# The value of a was updated
&gt;&gt;&gt; a
['a', 'b', 'c', 'H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!']</code></pre><p><strong>For dictionaries:</strong><br>Dictionaries have a particular behavior when you pass them as arguments to <code>.extend()</code>. In this case, the <strong>keys </strong>of the dictionary are appended one by one. The values of the corresponding key-value pairs are not appended. </p><p>In this example (below), the keys are "d", "e", and "f". These values are appended to the list <code>a</code>. </p><pre><code class="language-python"># List that will be extended
&gt;&gt;&gt; a = ["a", "b", "c"]
# Dictionary that will be used to extend the list
&gt;&gt;&gt; b = {"d": 5, "e": 6, "f": 7}
# Method call
&gt;&gt;&gt; a.extend(b)
# The value of a was updated
&gt;&gt;&gt; a
['a', 'b', 'c', 'd', 'e', 'f']</code></pre><h3 id="equivalent-to--1">Equivalent to...</h3><p>What <code>.extend()</code> does is equivalent to <code>a[len(a):] = iterable</code>. Here we have an example to illustrate that they are equivalent:</p><p>Using <code>.extend()</code>:</p><pre><code># List that will be extended
&gt;&gt;&gt; a = [1, 2, 3, 4]
# Values that will be appended
&gt;&gt;&gt; b = (6, 7, 8)
# Method call
&gt;&gt;&gt; a.extend(b)
# The list was updated
&gt;&gt;&gt; a
[1, 2, 3, 4, 6, 7, 8]
</code></pre><p>Using list slicing:</p><pre><code class="language-python"># List that will be extended
&gt;&gt;&gt; a = [1, 2, 3, 4]
# Values that will be appended
&gt;&gt;&gt; b = (6, 7, 8)
# Assignment statement. Assign the iterable b as the final portion of the list a
&gt;&gt;&gt; a[len(a):] = b
# The value of a was updated
&gt;&gt;&gt; a
[1, 2, 3, 4, 6, 7, 8]</code></pre><p>The result is the same, but using <code>.extend()</code> is much more readable and compact, right? Python truly offers amazing tools to improve our workflow. </p><h2 id="-summary-of-their-differences">🔸 Summary of their Differences</h2><p>Now that you know how to work with <code>.append()</code> and <code>.extend()</code>, let's see a summary of their key differences:</p><ul><li><strong>Effect</strong>: <code>.append()</code> adds a single element to the end of the list while <code>.extend()</code> can add multiple individual elements to the end of the list.</li><li><strong>Argument</strong>: <code>.append()</code> takes a single element as argument while <code>.extend()</code> takes an iterable as argument (list, tuple, dictionaries, sets, strings).</li></ul><p><strong>I really hope that you liked my article and found it helpful. </strong>Now you can work with <code>.append()</code> and <code>.extend()</code> in your Python projects. <a href="https://www.udemy.com/user/estefania-cn/">Check out my online courses</a>. Follow me on <a href="https://twitter.com/EstefaniaCassN">Twitter</a>. ⭐️</p>
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
