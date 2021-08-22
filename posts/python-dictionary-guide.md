---
card: "/images/default.jpg"
tags: [Python]
description: "Python is a popular language for data science. And working wi"
author: "Milad E. Fahmy"
title: "Python Dictionary Guide – How to Iterate Over, Copy, and Merge Dictionaries in Python 3.9"
created: "2021-08-16T15:35:18+02:00"
modified: "2021-08-16T15:35:18+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-dictionary tag-data-science ">
<header class="post-full-header">
<h1 class="post-full-title">Python Dictionary Guide – How to Iterate Over, Copy, and Merge Dictionaries in Python 3.9</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/10/thumb.png 300w,
/news/content/images/size/w600/2020/10/thumb.png 600w,
/news/content/images/size/w1000/2020/10/thumb.png 1000w,
/news/content/images/size/w2000/2020/10/thumb.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/10/thumb.png" alt="Python Dictionary Guide – How to Iterate Over, Copy, and Merge Dictionaries in Python 3.9">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<li>What dictionaries are</li>
<li>How to work with dictionaries</li>
<li>How to iterate over dictionaries</li>
<li>How to copy dictionaries</li>
<li>How to merge dictionaries in Python 3.9</li>
t1 = (10, "Hello", True, 20.23) # Tuple
s1 = {10, "Hello", True, 20.23} # Set
d1 = {'number': 10,
'greeting': "Hello",
'boolean': True,
'float': 20.23} # Dictionary
</code></pre><p>In the example above, you can see the difference. The individual key-value pairs are separated by commas. Each pair starts with a unique key followed by a colon and the respective value. Notice that the value doesn’t have to be unique, since we are not using it to access or identify anything. </p><p>Also keep in mind that we can use any data type for the keys and values we want. Here we only use strings for the identifiers but we can also use integers, floats, collections or even Booleans. </p><p>However, you should always ask yourself how reasonable this is. Most of the time a string will be the best choice.</p><h2 id="how-to-work-with-dictionaries-in-python">How to Work with Dictionaries in Python</h2><p>Alright, now that we know what dictionaries are, let's take a look at how to work with them. </p><p>First, we will go through the basic operations like accessing, adding, and removing values. After that we will look into some more advanced and more interesting topics.</p><p>You can access elements of a dictionary in Python in the same way as you access elements from any other collection. The only difference is that you pass a key rather than an index. This also goes for changing and even for appending values.</p><pre><code class="language-Python">person = {'name': "Mike", 'age': 25, 'weight': 80.5}
print(person['name'])
person['name'] = "Bob" # Changing existing value
print(person['name'])
person['gender'] = 'm' # Creating new key-value pair
print(person['gender'])
</code></pre><p>As you can see here, you just pass a key to access the value it refers to. First you print the name, then you change it. Then you print it again to make sure the changes were made. </p><p>Notice that this doesn't only work for already existing pairs but also for new ones. In order to create a new key-value pair, just refer to a key that doesn’t exist yet and assign a value to it. The pair is then added to the dictionary automatically.</p><p>Removing values from a dictionary works differently. Here you can either use the <strong>del<em> </em></strong>keyword or the <strong>pop() </strong>method. </p><p>The main difference between those two approaches is that <strong>del </strong>only removes the key-value pair, whereas <strong>pop() </strong>also returns the removed value afterwards. Depending on your use-case you will have to decide which method fits your task better.</p><h2 id="how-to-iterate-over-dictionaries-in-python">How to Iterate Over Dictionaries in Python</h2><p>Since dictionaries are collections, you can also iterate over them. But this is not as simple and straightforward as it is with the other collection types. </p><p>This is because you are not dealing with individual values but with pairs. When you iterate over a dictionary, using a for loop, you are actually just iterating over the keys.</p><pre><code class="language-Python">names_ages = {'Bob': 50,
'Anna': 28,
'Max': 30,
'John': 76}
for element in names_ages:
print(element)
# Output: Bob  Anna  Max  John
</code></pre><p>Therefore, if you want to iterate over the values or even the whole pairs, you need to use additional methods. </p><p>In order to access the values, you just have to call the <strong>values()</strong><em> </em>method. It returns an iterator for all the values of the dictionary. </p><p>To access the full pairs, you can call the <strong>items()<em> </em></strong>method. Here you iterate over a list of tuples, where each tuple represents one key-value pair. </p><p>Of course there is also the <strong>keys()</strong> method, in case you want to work with the dictionary keys outside of a for loop.</p><pre><code class="language-Python">print(list(names_ages.keys()))
print(list(names_ages.values()))
print(list(names_ages.items()))
# Output
# &gt; ['Bob', 'Anna', 'Max', 'John']
# &gt; [50, 28, 30, 76]
# &gt; [('Bob', 50), ('Anna', 28), ('Max', 30), ('John', 76)]
</code></pre><p>One important thing to keep in mind here is that those methods do not return actual lists. They return objects, which you can use to iterate over the keys and values. But you can easily typecast those objects into lists by using the <strong>list()</strong><em> </em>function.</p><h2 id="how-to-copy-dictionaries-in-python">How to Copy Dictionaries in Python</h2><p>Now we are getting into some more advanced stuff. </p><p>You wouldn't believe how many times new and inexperienced programmers run into trouble because they copy collections the wrong way. They troubleshoot their projects for hours and are unable to find the problem. </p><p>So pay attention here if you don’t want to experience that frustration yourself. </p><p>Before we talk about copying collections and dictionaries, let's look at how you would usually copy primitive data types like integers.</p><pre><code class="language-Python">i1 = 20
i2 = i1
i2 += 10
print(i1, i2)
# Output: 20  30
</code></pre><p>When you want to create a new variable and copy the value of another integer into it, you just directly assign the variable. Then you can change the value of the second integer and work with it, without changing anything about the first one. </p><p>This also works for Booleans, Floats, Strings etc. However, let’s see what happens, when we do this with a dictionary.</p><pre><code class="language-Python">d1 = {'a': 10, 'b': 20, 'c': 30}
d2 = d1
d2['c'] = 50
print(d1)
print(d2)
# Output
# {'a': 10, 'b': 20, 'c': 50}
# {'a': 10, 'b': 20, 'c': 50}
</code></pre><p>What happened here? Didn’t we do the same thing as before? Why does the first dictionary change, when we modify the second one? Isn’t it just a copy? </p><p>The answer is a clear no. When you assign a dictionary to a new variable, you are actually passing a so-called <em>reference</em>. </p><p>The second variable is not actually a dictionary but just another variable pointing to the same dictionary as the first one. Therefore, it doesn’t matter on which variable you apply changes, since they are all performed on the one dictionary they both are referring to.</p><p>If you want to create an actual shallow copy of a dictionary in Python, you need to either use the <strong>dict()<em> </em></strong>function or call the <strong>copy()</strong> method of the dictionary. By doing that you create a new dictionary that has the same elements as the original.</p><pre><code class="language-Python">d1 = {'a': 10, 'b': 20, 'c': 30}
d2 = dict(d1)
d3 = d1.copy()
d2['b'] = 50
d3['a'] = -90
print(d1) # unchanged
</code></pre><p>Notice, however, that the objects inside the copy are still the exact same objects as in the first dictionary. Therefore, if they are more complex objects or collections, you will end up with a new separate dictionary (but the objects inside it will refer to the same objects as those in the first dictionary). </p><p>In order to change that, you would have to make a so-called deep copy, but this is not in the scope of this article.</p><h2 id="how-to-merge-dictionaries-in-python">How to Merge Dictionaries in Python</h2><p>Last but not least, let's talk about the cutting-edge dictionary features of Python 3.9. These features are focused on merging dictionaries. </p><p>Up until recently, programmers had to either use the <strong>update() </strong>method or make use of the unpacking operators.</p><pre><code class="language-Python">d1 = {'a': 10, 'b': 20, 'c': 30}
d2 = {'c': 40, 'd': 60, 'e': 20}
d1.update(d2)
print(d1)
d1 = {'a': 10, 'b': 20, 'c': 30}
d3 = {**d1, **d2}
print(d3)
</code></pre><p>The main difference between those two approaches is that the <strong>update()</strong> method adds the values of one dictionary to another and applies the changes directly. The resulting dictionary is not returned but actually saved into the first object. </p><p>When you use the unpacking operators, on the other hand, you create a new dictionary and put the key-value pairs of the two dictionaries into it by unpacking them.</p><p>Now you may be asking yourself what happens when you merge two dictionaries that have the same key inside them. </p><p>You can think of that like this: The first dictionary creates the key-value pair and the second one overwrites it. So if you call the update method on the first collection and pass the second collection as an argument, the key-value pair of the second dictionary will end up in the result. </p><p>The same goes for the unpacking. Whichever dictionary you pass last overwrites the previous ones.</p><p>So this is the old way of doing things. In Python 3.9, however, the merging and updating operators were introduced. They make joining dictionaries simpler.</p><pre><code class="language-Python">d1 = {'a': 10, 'b': 20, 'c': 30}
d2 = {'c': 40, 'd': 60, 'e': 20}
d3 = d1 | d2  # Merging
d1 |= d2# Updating
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
