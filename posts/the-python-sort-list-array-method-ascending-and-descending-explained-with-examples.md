---
card: "/images/default.jpg"
tags: [Python]
description: "If you want to learn how to work with the sort() method in yo"
author: "Milad E. Fahmy"
title: "The Python Sort List Array Method – Ascending and Descending Explained with Examples"
created: "2021-08-16T15:37:03+02:00"
modified: "2021-08-16T15:37:03+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-tutorial ">
<header class="post-full-header">
<h1 class="post-full-title">The Python Sort List Array Method – Ascending and Descending Explained with Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/04/sort-method.png 300w,
/news/content/images/size/w600/2020/04/sort-method.png 600w,
/news/content/images/size/w1000/2020/04/sort-method.png 1000w,
/news/content/images/size/w2000/2020/04/sort-method.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/04/sort-method.png" alt="The Python Sort List Array Method – Ascending and Descending Explained with Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&gt;&gt;&gt; b.sort()
&gt;&gt;&gt; b
&gt;&gt;&gt; b = [6, 3, 8, 2, 7, 3, 9]
&gt;&gt;&gt; b.sort()
&gt;&gt;&gt; b
[2, 3, 3, 6, 7, 8, 9]
# List of Strings
&gt;&gt;&gt; c = ["A", "Z", "D", "T", "U"]
&gt;&gt;&gt; c.sort()
&gt;&gt;&gt; c
['A', 'D', 'T', 'U', 'Z']
&gt;&gt;&gt; b = [6, 3, 8, 2, 7, 3, 9]
&gt;&gt;&gt; b.sort(reverse=True)
&gt;&gt;&gt; b
[9, 8, 7, 6, 3, 3, 2]
# List of Strings
&gt;&gt;&gt; c = ["A", "Z", "D", "T", "U"]
&gt;&gt;&gt; c.sort(reverse=True)
&gt;&gt;&gt; c
&gt;&gt;&gt; d.sort(key=len)
&gt;&gt;&gt; d
True</code></pre><p>So the string <code>"Emma"</code> would come before <code>"emily"</code> in a sorted list, even if their lowercase versions would be in the opposite order:</p><pre><code>&gt;&gt;&gt; "Emma" &lt; "emily"
True
&gt;&gt;&gt; "emma" &lt; "emily"
False</code></pre><p>To avoid distinguishing between capital and lowercase letters, we can pass the function <code>str.lower</code> as <code>key</code>. This will generate a lowercase version of the strings that will be used for the comparisons:</p><pre><code class="language-python">&gt;&gt;&gt; e = ["Emma", "emily", "Amy", "Jason"]
&gt;&gt;&gt; e.sort(key=str.lower)
&gt;&gt;&gt; e
['Amy', 'emily', 'Emma', 'Jason']</code></pre><p>Notice that now, <code>"emily"</code> comes before <code>"Emma"</code> in the sorted list, which is exactly what we wanted.</p><p>💡 <strong>Tip:</strong> if we had used the default sorting process, all the strings that started with an uppercase letter would have come before all the strings that started with a lowercase letter:</p><pre><code class="language-python">&gt;&gt;&gt; e = ["Emma", "emily", "Amy", "Jason"]
&gt;&gt;&gt; e.sort()
&gt;&gt;&gt; e
['Amy', 'Emma', 'Jason', 'emily']</code></pre><p><strong>Here is an example using Object-Oriented Programming (OOP):</strong></p><p>If we have this very simple Python class:</p><pre><code class="language-python">&gt;&gt;&gt; class Client:
def __init__(self, age):
self.age = age</code></pre><p>And we create four instances:</p><pre><code class="language-python">&gt;&gt;&gt; client1 = Client(67)
&gt;&gt;&gt; client2 = Client(23)
&gt;&gt;&gt; client3 = Client(13)
&gt;&gt;&gt; client4 = Client(35)</code></pre><p>We can make a list that references them:</p><pre><code class="language-python">&gt;&gt;&gt; clients = [client1, client2, client3, client4]</code></pre><p>Then, if we define a function to get the <code>age</code> of these instances:</p><pre><code class="language-python">&gt;&gt;&gt; def get_age(client):
return client.age</code></pre><p>We can sort the list based on their age by passing the <code>get_age</code> function an an argument:</p><pre><code class="language-python">&gt;&gt;&gt; clients.sort(key=get_age)</code></pre><p>This is the final, sorted version of the list. We use a for loop to print the age of the instances in the order that they appear in the list:</p><pre><code class="language-python">&gt;&gt;&gt; for client in clients:
print(client.age)
13
23
35
&gt;&gt;&gt; f.sort(key=str.lower, reverse=True)
&gt;&gt;&gt; f
&gt;&gt;&gt; a.sort(key=str.lower, reverse=True)
&gt;&gt;&gt; a
['Zz', 'y', 'o', 'F', 'c']</code></pre><p>If we change the order of the arguments, we get the exact same result:</p><pre><code class="language-python">&gt;&gt;&gt; a = ["Zz", "c", "y", "o", "F"]
&gt;&gt;&gt; a.sort(reverse=True, key=str.lower)
&gt;&gt;&gt; a
['Zz', 'y', 'o', 'F', 'c']</code></pre><h2 id="-return-value">🔹 Return Value</h2><p>Now let's talk a little bit about the return value of this method. The <code>sort()</code> method returns <code>None</code> – it does <strong>not </strong>return a sorted version of the list, like we might intuitively expect. </p><p>According to the <a href="https://docs.python.org/3/library/stdtypes.html#list.sort">Python Documentation</a>:</p><blockquote>To remind users that it operates by side effect, it does not return the sorted sequence.</blockquote><p>Basically, this is used to remind us that we are modifying the original list in memory, not generating a new copy of the list.</p><p>This is an example of the return value of <code>sort()</code>:</p><pre><code class="language-python">&gt;&gt;&gt; nums = [6.5, 2.4, 7.3, 3.5, 2.6, 7.4]
# Assign the return value to this variable:
&gt;&gt;&gt; val = nums.sort()
# Check the return value:
&gt;&gt;&gt; print(val)
&gt;&gt;&gt; nums = [6.5, 2.4, 7.3, 3.5, 2.6, 7.4]
&gt;&gt;&gt; val = nums.sort()
&gt;&gt;&gt; print(val)
&gt;&gt;&gt; nums = [6.5, 2.4, 7.3, 3.5, 2.6, 7.4]
&gt;&gt;&gt; val = sorted(nums)
&gt;&gt;&gt; val
[2.4, 2.6, 3.5, 6.5, 7.3, 7.4]
# But it doesn't modify the original list
&gt;&gt;&gt; nums
[6.5, 2.4, 7.3, 3.5, 2.6, 7.4]</code></pre><figcaption>Example of sorted()</figcaption></figure><p>This is very important because their effect is very different. Using the <code>sort()</code> method when you intended to use <code>sorted()</code> can introduce serious bugs into your program because you might not realize that the list is being mutated.</p><h2 id="-the-sort-method-performs-a-stable-sort">🔸 The sort() Method Performs a Stable Sort</h2><p>Now let's talk a little bit about the characteristics of the sorting algorithm used by <code>sort()</code>.</p><p>This method performs a stable sort because it works with an implementation of <a href="https://en.wikipedia.org/wiki/Timsort">TimSort</a>, a very efficient and stable sorting algorithm.</p><p>According to the <a href="https://docs.python.org/3/library/stdtypes.html#list.sort">Python Documentation</a>:</p><blockquote>A sort is stable if it guarantees <strong>not to change the relative order of elements that compare equal</strong> — this is helpful for sorting in multiple passes (for example, sort by department, then by salary grade).</blockquote><p>This means that if two elements have the same value or intermediate value (key), they are guaranteed to stay in the same order relative to each other. </p><p>Let's see what I mean with this. Please take a look at this example for a few moments:</p><pre><code class="language-python">&gt;&gt;&gt; d = ["BB", "AA", "CC", "A", "B", "AAA", "BBB"]
&gt;&gt;&gt; d.sort(key=len)
&gt;&gt;&gt; d
&gt;&gt;&gt; id(a)
&gt;&gt;&gt; a = [7, 3, 5, 1]
# Check its id
&gt;&gt;&gt; id(a)
67091624
# Sort the list using .sort()
&gt;&gt;&gt; a.sort()
# Check its id (it's the same, so the list is the same object in memory)
&gt;&gt;&gt; id(a)
67091624
# Now the list is sorted. It has been mutated!
&gt;&gt;&gt; a
[1, 3, 5, 7]</code></pre><p>The list was mutated after calling <code>.sort()</code>.</p><p>Every single line of code that works with list <code>a</code> after the mutation has occurred will use the new, sorted version of the list. If this was not what you intended, you may not realize that other parts of your program are working with the new version of the list.</p><p>Here is another example of the risks of mutation within a function:</p><pre><code class="language-python"># List
&gt;&gt;&gt; a = [7, 3, 5, 1]
# Function that prints the elements of the list in ascending order.
&gt;&gt;&gt; def print_sorted(x):
x.sort()
for elem in x:
print(elem)
# Call the function passing 'a' as argument
&gt;&gt;&gt; print_sorted(a)
1
3
5
7
# Oops! The original list was mutated.
&gt;&gt;&gt; a
[1, 3, 5, 7]</code></pre><p>The list <code>a</code> that was passed as argument was mutated, even if that wasn't what you intended when you initially wrote the function. </p><p><strong>💡 Tip:</strong> If a function mutates an argument, it should be clearly stated to avoid introducing bugs into other parts of your program.</p><h2 id="-summary-of-the-sort-method">🔸 Summary of the sort() Method</h2><ul><li>The <code>sort()</code> method lets you sort a list in ascending or descending order.</li><li>It takes two keyword-only arguments: <code>key</code> and <code>reverse</code>. </li><li><code>reverse</code> determines if the list is sorted in ascending or descending order.</li><li><code>key</code> is a function that generates an intermediate value for each element, and this value is used to do the comparisons during the sorting process. </li><li>The <code>sort()</code> method mutates the list, causing permanent changes. You need to be very careful and only use it if you do not need the original version of the list.</li></ul><p><strong><strong>I really hope that you liked my article and found it helpful. </strong></strong>Now you can work with the <code>sort()</code> method in your Python projects. <a href="https://www.udemy.com/user/estefania-cn/">Check out my online courses</a>. Follow me on <a href="https://twitter.com/EstefaniaCassN">Twitter</a>. ⭐️</p>
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
