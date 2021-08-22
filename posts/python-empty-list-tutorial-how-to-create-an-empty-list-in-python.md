---
card: "/images/default.jpg"
tags: [Python]
description: "If you want to learn how to create an empty list in Python ef"
author: "Milad E. Fahmy"
title: "Python Empty List Tutorial – How to Create an Empty List in Python"
created: "2021-08-16T15:36:16+02:00"
modified: "2021-08-16T15:36:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-tutorial ">
<header class="post-full-header">
<h1 class="post-full-title">Python Empty List Tutorial – How to Create an Empty List in Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/06/Empty-list.png 300w,
/news/content/images/size/w600/2020/06/Empty-list.png 600w,
/news/content/images/size/w1000/2020/06/Empty-list.png 1000w,
/news/content/images/size/w2000/2020/06/Empty-list.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/06/Empty-list.png" alt="Python Empty List Tutorial – How to Create an Empty List in Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&gt;&gt;&gt; len(num)
0</code></pre><p>Empty lists are <strong>falsy </strong>values, which means that they evaluate to <code>False</code> in a boolean context:</p><pre><code class="language-python">&gt;&gt;&gt; num = []
&gt;&gt;&gt; bool(num)
False</code></pre><h3 id="add-elements-to-an-empty-list">Add Elements to an Empty List</h3><p>You can add elements to an empty list using the methods <code>append()</code> and <code>insert()</code>:</p><ul><li><code>append()</code> adds the element to the end of the list.</li><li><code>insert()</code> adds the element at the particular index of the list that you choose.</li></ul><p>Since lists can be either truthy or falsy values depending on whether they are empty or not when they are evaluated, you can use them in conditionals like this:</p><pre><code class="language-python">if num:
print("This list is not empty")
else:
print("This list is empty")</code></pre><p>The output of this code is:</p><pre><code class="language-python">This list is empty</code></pre><p>Because the list was empty, so it evaluates to False.</p><p>In general:</p><ul><li>If the list is not empty, it evaluates to <code>True</code>, so the if clause is executed.</li><li>If the list is empty, it evaluates to <code>False</code>, so the else clause is executed. </li></ul><h3 id="example-">Example:</h3><p>In the example below, we create an empty list and assign it to the variable <code>num</code>. Then, using a for loop, we add a sequence of elements (integers) to the list that was initially empty:</p><pre><code class="language-python">&gt;&gt;&gt; num = []
&gt;&gt;&gt; for i in range(3, 15, 2):
num.append(i)</code></pre><p>We check the value of the variable to see if the items were appended successfully and confirm that the list is not empty anymore: &nbsp;</p><pre><code class="language-python">&gt;&gt;&gt; num
[3, 5, 7, 9, 11, 13]</code></pre><p><strong>💡 Tip:</strong> We commonly use <code>append()</code> to add the first element to an empty list, but you can also add this element calling the <code>insert()</code> method with index <code>0</code>:</p><pre><code class="language-python">&gt;&gt;&gt; num = []
&gt;&gt;&gt; num.insert(0, 1.5) # add the float 1.5 at index 0
&gt;&gt;&gt; num
&gt;&gt;&gt; len(num)
0</code></pre><p>And it is a <strong>falsy </strong>value when it is empty (it evaluates to <code>False</code> in a boolean context):</p><pre><code class="language-python">&gt;&gt;&gt; num = list()
&gt;&gt;&gt; bool(num)
False</code></pre><h3 id="example--1">Example:</h3><p>This is a fully functional list, so we can add elements to it:</p><pre><code class="language-python">&gt;&gt;&gt; num = list()
&gt;&gt;&gt; for i in range(3, 15, 2):
num.append(i)</code></pre><p>And the result will be a non-empty list, as you can see right here:</p><pre><code class="language-python">&gt;&gt;&gt; num
0.0008467000000109692</code></pre><h3 id="testing-list-">Testing <code>list()</code>:</h3><pre><code class="language-python">&gt;&gt;&gt; timeit.timeit('list()', number=10**4)
0.002867799999989984</code></pre><p><strong>💡 Tip:</strong> Notice that the code that you want to time has to be surrounded by single quotes <code>''</code> or double quotes <code>""</code>. The time returned by the <code>timeit</code> function is expressed in seconds.</p><p>Compare these results:</p><ul><li><code>[]</code>: <code>0.0008467000000109692</code> </li><li><code>list()</code>: <code>0.002867799999989984</code></li></ul><p>You can see that <code>[]</code> is much faster than <code>list()</code>. There was a difference of approximately <code>0.002</code> seconds in this test:</p><pre><code class="language-python">&gt;&gt;&gt; 0.002867799999989984 - 0.0008467000000109692
0.0020210999999790147</code></pre><p><strong>I'm sure that you must be asking this right now: </strong>Why is <code>list()</code> less efficient than <code>[]</code> if they do exactly the same thing?</p><p>Well... <code>list()</code> is slower because it requires looking up the name of the function, calling it, and then creating the list object in memory. In contrast, <code>[]</code> is like a "shortcut" that doesn't require so many intermediate steps to create the list in memory. </p><p>This time difference will not affect the performance of your program very much but it's nice to know which one is more efficient and how they work behind the scenes.</p><h2 id="-in-summary">🔹 In Summary</h2><p>You can create an empty list using an empty pair of square brackets <code>[]</code> or the type constructor <code>list()</code>, a built-in function that creates an empty list when no arguments are passed. </p><p>Square brackets <code>[]</code> are commonly used in Python to create empty lists because it is faster and more concise.</p><p><strong>I really hope that you liked my article and found it helpful. </strong>Now you can create empty lists in your Python projects. <a href="https://www.udemy.com/user/estefania-cn/">Check out my online courses</a>. Follow me on <a href="https://twitter.com/EstefaniaCassN">Twitter</a>. ⭐️</p><p>If you want to dive deeper into lists, you may like to read:</p><ul><li><a href="/news/python-list-append-how-to-add-an-element-to-an-array-explained-with-examples/">Python List Append – How to Add an Element to an Array, Explained with Examples</a></li><li><a href="/news/the-python-sort-list-array-method-ascending-and-descending-explained-with-examples/">The Python Sort List Array Method – Ascending and Descending Explained with Examples</a></li><li><a href="/news/python-list-append-vs-python-list-extend/">Python List Append VS Python List Extend – The Difference Explained with Array Method Examples</a></li></ul>
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
