---
card: "/images/default.jpg"
tags: [Python]
description: "Let’s suppose you’re planning to visit your neighborhood stor"
author: "Milad E. Fahmy"
title: "Lists in Python – A Comprehensive Guide"
created: "2021-08-16T15:34:20+02:00"
modified: "2021-08-16T15:34:20+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-beginners-guide ">
<header class="post-full-header">
<h1 class="post-full-title">Lists in Python – A Comprehensive Guide</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/07/PYTHON-LISTS.png 300w,
/news/content/images/size/w600/2021/07/PYTHON-LISTS.png 600w,
/news/content/images/size/w1000/2021/07/PYTHON-LISTS.png 1000w,
/news/content/images/size/w2000/2021/07/PYTHON-LISTS.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/07/PYTHON-LISTS.png" alt="Lists in Python – A Comprehensive Guide">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Let’s suppose you’re planning to visit your neighborhood store to stock up on essentials. What is the first thing you’d do? </p><p>Have the answer already? Yes, you'd probably write down a shopping list! Python also has a built-in data structure called <code>List</code> that’s very similar to your shopping list.</p><p>This post is a beginner-friendly tutorial on Python lists. Over the next few minutes, we'll get to know lists and cover some of the most common operations such as slicing through lists and modifying them using list methods. </p><p>So let's go ahead and learn more about Python lists and see how they’re analogous to our shopping list. </p><blockquote>Let’s hop in and shop together!</blockquote><h2 id="how-lists-work-in-python">How Lists Work in Python</h2><p>It’s quite natural to write down items on a shopping list one below the other. For Python to recognize our list, we have to enclose all list items within square brackets <code>([ ])</code>, with the items<em> separated by commas</em>. </p><p>Here’s an example where we create a list with 6 items that we’d like to buy.</p><pre><code class="language-Python">shopping_list = ['apples','pens','oatmeal  cookies','notepad','brushes','paint']
</code></pre><h2 id="mutability-of-lists-in-python">Mutability of lists in Python</h2><p>Just the way that we can always modify our shopping list by reordering items – do things like replacing <code>oatmeal cookies</code> with our favorite <code>candy</code>, for example – we can do the same with Python lists. </p><p>For this reason, lists are <strong>mutable</strong>. Here’s how we can replace <code>oatmeal cookies</code> with <code>candy</code> in our list.</p><pre><code class="language-Python">shopping_list[2] = 'candy'
print(shopping_list)
# Output
&gt;&gt; ['apples', 'pens', 'candy', 'notepad', 'brushes', 'paint']</code></pre><h3 id="indexing-in-python-lists">Indexing in Python Lists</h3><p>Did you notice that <code>oatmeal cookies</code> is the third item in the list, but is at index <code>2</code>? Well, this is because of <strong>zero-indexing</strong>. In Python, <strong><code>index</code></strong> is essentially an <em>offset from the beginning of the list.</em></p><blockquote>This is why the first element is at index <code>0</code> (no offset), the second element is at index <code>1</code>, and so on. In general, if the list has n elements, the last element is at index <code>(n-1)</code>.</blockquote><p>If we try to access an element at an invalid index, we'll get an <code>IndexError</code> . </p><p>In our example, our shopping list has 6 elements (index ranges from 0 to 5). As shown in the code snippet below, if we try to access an element at <code>index = 6</code> , we'd get an error as there's no element at index <code>6</code>.</p><pre><code class="language-Python">print(shopping_list[6])
# Output
&gt;&gt; --------------------------------------------------------------------------
IndexError                          Traceback (most recent call last)
&lt;ipython-input-21-a9f3b9517136&gt; in &lt;module&gt;()
----&gt; 1 shopping_list[6]
IndexError: list index out of range</code></pre><p>On the other hand, we can also use <strong>negative indexing</strong>. &nbsp;The <em>last element</em> is at index <code>-1</code>, the <em>second to last element</em> is at index <code>-2</code> and so on. </p><pre><code class="language-Python">print(shopping_list[-1])
# Output
&gt;&gt; paint</code></pre><p>Just as our shopping list could contain items of any type such as fruits, vegetables, sweets and more, a Python list could also contain <em>items of any type</em>. </p><p>That being said, it’s perfectly normal for a list to contain another little list as one of its elements. This process is called nesting and such lists are called nested lists. </p><p>Here’s an example where our shopping list has two smaller lists.<br> <code>my_nested_list = [['apple','banana'],['paint','brushes']]</code></p><h2 id="how-to-loop-through-lists-in-python">How to Loop Through Lists in Python</h2><p>It’s quite common to read through our <code>shopping_list</code> to check if we’ve purchased all that we need. This is called traversing through the list. </p><p>In Python, you can do this using loops and the <code>in</code> operator.</p><pre><code class="language-Python">for item in shopping_list:
print(item)
# Output
apples
pens
candy
notepad
brushes
paint</code></pre><p>If we were to do some operations on the list instead, it's recommended to use <code>range</code> to get a set of indices that we can then loop through. </p><h2 id="how-to-slice-through-lists-in-python">How to Slice Through Lists in Python</h2><p>What if we were interested in looking at only a subset of our <code>shopping_list</code>? This would require us to slice through the list and retrieve a subset of items. </p><p>Here's a general template: <code>list_name[start_index:end_index +1]</code>. Let's now try to parse this. </p><ul><li>If we need a slice of the list up to <code>end_index</code>, specify <code>end_index + 1</code> when specifying the start and end indices. </li><li>The default <code>start_index</code> is <code>0</code>, and the default <code>end_index</code> is the index of the last element in the list. </li><li>If we do not specify the <code>start_index</code>, the slice starts from the first element in the list. </li><li>If we do not specify the <code>end_index</code>, the slice extends until the last element in the list.</li><li>If we do not specify both of these indices, then the slice returned is the entire list.</li></ul><p>The following code snippet illustrates this.</p><pre><code class="language-Python">print(shopping_list[2:])
# Output
&gt;&gt; ['candy', 'notepad', 'brushes', 'paint']
print(shopping_list[:2])
# Output
&gt;&gt; ['apples', 'pens']
print(shopping_list[:])
# Output
&gt;&gt; ['apples', 'pens', 'candy', 'notepad', 'brushes', 'paint']</code></pre><h2 id="how-to-operate-on-lists-in-python">How to Operate on Lists in Python</h2><p>You can apply common built-in functions such as <code>len()</code>, <code>min()</code> , and <code>max()</code> on lists to get the length of the list, the minimum element, and the maximum element, respectively. </p><p>As our <code>shopping_list</code> has only strings, <code>min()</code> returns the string that occurs first when the list is lexicographically sorted. <code>max()</code> returns the string that occurs last. </p><p>You can see the code snippet for this section below.</p><pre><code class="language-Python">print(len(shopping_list))
&gt;&gt; 6
print(max(shopping_list))
&gt;&gt; pens
print(min(shopping_list))
&gt;&gt; apples</code></pre><p>We can create a new list by concatenating existing lists, just as we can always piece together two small shopping lists to create a new list.</p><pre><code class="language-Python">list_2 = shopping_list + ['noodles','almonds']
print(list_2)
&gt;&gt; ['apples', 'pens', 'candy', 'notepad', 'brushes', 'paint', 'noodles', 'almonds']</code></pre><h2 id="python-list-methods">Python List Methods</h2><p>In addition to built-in functions that can operate on lists, Python has several list methods that help us perform useful operations on lists. </p><p>Let's consider our <code>shopping_list</code>. What are the common operations that we would likely perform on our list? Let's list down a few:</p><ul><li>Add an item/multiple items to our <code>shopping_list</code></li><li>Remove an item/multiple items from our <code>shopping_list</code></li><li>Reorder items in our <code>shopping_list</code></li></ul><h3 id="how-to-add-elements-to-a-list-in-python">How to add elements to a list in Python</h3><p>We can add items, one at a time, to the end of list using the <code>append()</code> method. Let's add <code>grapes</code> to our <code>shopping_list</code>.</p><pre><code class="language-Python">shopping_list.append('grapes')
print(shopping_list)
&gt;&gt; ['apples', 'pens', 'candy', 'notepad', 'brushes', 'paint', 'grapes']</code></pre><p>What if we had an another list (or any other iterable) that we wanted to add to an existing list? Instead of adding the items from the new list one by one, we could use the <code>extend()</code> method to add the entire list to the first list as shown below.</p><pre><code class="language-Python">shopping_list.extend(['protein bars','cheese'])
print(shopping_list)
&gt;&gt; ['apples', 'pens', 'candy', 'notepad', 'brushes', 'paint', 'grapes', 'protein bars', 'cheese']</code></pre><p><strong>Note</strong>: There's an inherent difference between the list methods <code>append()</code> and <code>extend()</code> and the '+' operator to concatenate two lists. </p><p>While the '+' operator creates a new list by combining the lists that we specify as operands, the methods <code>append()</code> and <code>extend()</code> modify the list on which they are called (invoked) and do not return a new list.</p><h3 id="how-to-remove-elements-from-a-list-in-python">How to remove elements from a list in Python</h3><p>We can remove elements from list, either a single element or a group, using the following methods. </p><p>The <code>pop()</code> method returns the last item in the list and also deletes it, as shown below. <code>cheese</code> was the last item in the list, and it's removed now.</p><pre><code class="language-Python">last_element = shopping_list.pop()
print(shopping_list)
print(last_element)
# Output
&gt;&gt; ['apples', 'pens', 'candy', 'notepad', 'brushes', 'paint', 'grapes', 'protein bars']
&gt;&gt; cheese</code></pre><p>If we would like to remove an item from a particular index, we can specify the <code>index</code> as an argument to <code>pop()</code>.</p><pre><code class="language-Python">not_needed = shopping_list.pop(2)
print(not_needed)
# Output
&gt;&gt; candy</code></pre><p>If we do not need access to the value of the removed list item, we can choose to use the <code>del</code> function instead. </p><p>We can delete an item at a particular index by specifying that index, or we can delete all items in a list slice by slicing through the list as explained in the previous section.</p><pre><code class="language-Python">del shopping_list[1]
print(shopping_list)
# Output
&gt;&gt; ['apples', 'notepad', 'brushes', 'paint', 'grapes', 'protein bars']</code></pre><p>Suppose we know the item that we no longer need to buy but do not know at which index the item is. In these cases, we can use the <code>remove()</code> method to remove an item by name. </p><p>In our example, the item at index <code>1</code> in our most recent copy is <code>pens</code>. If we did not know the index of <code>pens</code>, we could write <code>shopping_list.remove('pens')</code> to do the same task as in the above code snippet. </p><p>To remove all elements from a list, we can use <code>list_name.clear()</code>.</p><p><strong>Note</strong>: If we try to remove an element that does not exist in the list, we'd get a <code>ValueError</code>.</p><h2 id="how-to-sort-a-list-in-python">How to Sort a List in Python</h2><p>We can choose to sort our <code>shopping_list</code> by calling the <code>sort()</code> method. As our list has only strings, <code>sort()</code> will sort our list in alphabetical order. If we have a list of numbers, the elements will be sorted in ascending order by default. </p><p>If you'd like to sort in descending order, set the optional argument <code>reverse = True</code>.</p><p><strong>Note</strong>: Calling the <code>sort()</code> method modifies the existing list and does not create a new one. If you'd like to have a new sorted list while keeping the existing list as is, use the <code>sorted()</code> method instead.</p><pre><code class="language-Python">shopping_list.sort()
print(shopping_list)
# Output
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
