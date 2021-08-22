---
card: "/images/default.jpg"
tags: [Python]
description: "Hi! If you want to learn how to use the append() method, then"
author: "Milad E. Fahmy"
title: "Python List Append – How to Add an Element to an Array, Explained with Examples"
created: "2021-08-16T15:36:42+02:00"
modified: "2021-08-16T15:36:42+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-tutorial ">
<header class="post-full-header">
<h1 class="post-full-title">Python List Append – How to Add an Element to an Array, Explained with Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/05/Append.png 300w,
/news/content/images/size/w600/2020/05/Append.png 600w,
/news/content/images/size/w1000/2020/05/Append.png 1000w,
/news/content/images/size/w2000/2020/05/Append.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/05/Append.png" alt="Python List Append – How to Add an Element to an Array, Explained with Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&gt;&gt;&gt; musical_notes.append("B")</code></pre><ul><li>First, the list is defined and assigned to a variable. </li><li>Then, using this variable we call the <code>append()</code> method, passing the element that we want to append (the string <code>"B"</code>) as argument. </li></ul><h2 id="-effect-return-value">🔹 Effect &amp; Return Value</h2><p>This method <strong>mutates </strong>(changes) the original list in memory. It doesn't return a new copy of the list as we might intuitively think, it returns <code>None</code>. Therefore, just by calling this method you are modifying the original list. </p><p>In our previous example:</p><pre><code class="language-python">&gt;&gt;&gt; musical_notes = ["C", "D", "E", "F", "G", "A"]
&gt;&gt;&gt; musical_notes.append("B")</code></pre><p>You can see (below) that the original list was modified after appending the element. The last element is now <code>"B"</code> and the original list is now the modified version.</p><pre><code class="language-python">&gt;&gt;&gt; musical_notes
['C', 'D', 'E', 'F', 'G', 'A', 'B']</code></pre><p>You can confirm that the return value of <code>append()</code> is <code>None</code> by assigning this value to a variable and printing it:</p><pre><code class="language-python">&gt;&gt;&gt; musical_notes = ["C", "D", "E", "F", "G", "A"]
&gt;&gt;&gt; a = musical_notes.append("B")
&gt;&gt;&gt; print(a)
None</code></pre><h2 id="-examples">🔸 Examples</h2><p>Now that you know the purpose, syntax, and effect of the <code>append()</code> method, let's see some examples of its use with various data types.</p><h3 id="append-a-string">Append a String</h3><pre><code class="language-python">&gt;&gt;&gt; top_players = ["gino234", "nor233", "lal453"]
&gt;&gt;&gt; top_players.append("auop342")
# The string was appended
&gt;&gt;&gt; top_players
['gino234', 'nor233', 'lal453', 'auop342']</code></pre><h3 id="append-an-integer">Append an Integer</h3><pre><code class="language-python">&gt;&gt;&gt; data = [435, 324, 275, 567, 123]
&gt;&gt;&gt; data.append(456)
&gt;&gt;&gt; data
[435, 324, 275, 567, 123, 456]</code></pre><h3 id="append-a-float">Append a Float</h3><pre><code class="language-python">&gt;&gt;&gt; data = [435.34, 324.35, 275.45, 567.34, 123.23]
&gt;&gt;&gt; data.append(456.23)
&gt;&gt;&gt; data
[435.34, 324.35, 275.45, 567.34, 123.23, 456.23]</code></pre><h3 id="append-a-boolean-value">Append a Boolean Value</h3><pre><code class="language-python">&gt;&gt;&gt; values = [True, True, False, True]
&gt;&gt;&gt; values.append(False)
&gt;&gt;&gt; values
[True, True, False, True, False]</code></pre><h3 id="append-a-list">Append a List</h3><p>This method appends a single element to the end of the list, so if you pass a list as argument, the entire list will be appended as a single element (it will be a nested list within the original list). </p><pre><code>&gt;&gt;&gt; data = [[4.5, 4.8, 5.7], [2.5, 2.6, 2.7]]
&gt;&gt;&gt; data.append([6.7, 2.3])
&gt;&gt;&gt; data
[[4.5, 4.8, 5.7], [2.5, 2.6, 2.7], [6.7, 2.3]]</code></pre><h3 id="append-a-tuple">Append a Tuple</h3><p>This works exactly the same for tuples, the entire tuple is appended as a single element. </p><pre><code>&gt;&gt;&gt; data = [[4.5, 4.8, 5.7], [2.5, 2.6, 2.7]]
&gt;&gt;&gt; data.append((6.7, 2.3))
&gt;&gt;&gt; data
[[4.5, 4.8, 5.7], [2.5, 2.6, 2.7], (6.7, 2.3)] </code></pre><p><strong>💡 Tip:</strong> If you need to add the elements of a list or tuple as individual elements of the original list, you need to use the <code>extend()</code> method instead of <code>append()</code>. To learn more about this, you can read my article: <a href="/news/python-list-append-vs-python-list-extend/">Python List Append VS Python List Extend – The Difference Explained with Array Method Examples</a></p><h3 id="append-a-dictionary">Append a dictionary </h3><p>Similarly, if you try to append a dictionary, the entire dictionary will be appended as a single element of the list.</p><pre><code>&gt;&gt;&gt; data = [{"a": 1, "b": 2}]
&gt;&gt;&gt; data.append({"c": 3, "d": 4})
&gt;&gt;&gt; data
&gt;&gt;&gt; musical_notes.insert(len(musical_notes), "B")
&gt;&gt;&gt; musical_notes
&gt;&gt;&gt; musical_notes[len(musical_notes):] = ["B"]
&gt;&gt;&gt; musical_notes
['C', 'D', 'E', 'F', 'G', 'A', 'B']</code></pre><p>These are interesting alternatives, but for practical purposes we typically use <code>append()</code> because it's a priceless tool that Python offers. It is precise, concise, and easy to use. </p><p><strong>I really hope that you liked my article and found it helpful. </strong>Now you can work with <code>append()</code> in your Python projects. <a href="https://www.udemy.com/user/estefania-cn/">Check out my online courses</a>. Follow me on <a href="https://twitter.com/EstefaniaCassN">Twitter</a>. ⭐️</p>
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
