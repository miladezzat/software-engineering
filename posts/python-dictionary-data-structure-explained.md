---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9e33740569d1a4ca3bdc.jpg"
tags: [Python]
description: "Dictionary is one of the most used data structures in Python."
author: "Milad E. Fahmy"
title: "Python Dictionary Data Structure Explained"
created: "2021-08-16T15:38:02+02:00"
modified: "2021-08-16T15:38:02+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-data-structures ">
<header class="post-full-header">
<h1 class="post-full-title">Python Dictionary Data Structure Explained</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e33740569d1a4ca3bdc.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e33740569d1a4ca3bdc.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e33740569d1a4ca3bdc.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e33740569d1a4ca3bdc.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e33740569d1a4ca3bdc.jpg" alt="Python Dictionary Data Structure Explained">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>Dictionary is one of the most used data structures in Python. A dictionary is an unordered collection of items and we usually have keys and values stored in a dictionary. Let us look at a few examples for how the dictionary is usually used.</p><pre><code class="language-python"># dictionary declaration 1
dict1 = dict()
# dictionary declaration 2
dict2 = {}
# Add items to the dictionary
# The syntax to add and retrieve items is same for either of the two objects we defined above.
key = "X"
value = "Y"
dict1[key] = value
# The dictionary doesn't have any specific data-type.
# So, the values can be pretty diverse.
dict1[key] = dict2</code></pre><p>Let’s now look at some retrieval ways.</p><pre><code class="language-python"># Since "X" exists in our dictionary, this will retrieve the value
value = dict1[key]
# This key doesn't exist in the dictionary.
# So, we will get a `KeyError`
value = dict1["random"]</code></pre><h3 id="avoiding-keyerror-use-get-function"><strong>Avoiding KeyError: Use .get function</strong></h3><p>In case the given key does not exist in the dictionary, Python will throw a <code>KeyError</code>. There is a simple workaround for this. Let’s look at how we can avoid <code>KeyError</code> using the in-built <code>.get</code> function for dictionaries.</p><pre><code class="language-python">dict_ = {}
# Some random key
random_key = "random"
# The most basic way of doing this is to check if the key
# exists in the dictionary or not and only retrieve if the
# key exists. Otherwise not.
if random_key in dict_:
print(dict_[random_key])
else:
print("Key = {} doesn't exist in the dictionary".format(dict_))</code></pre><p>A lot of times we are ok getting a default value when the key doesn’t exist. For e.g. when building a counter. There is a better way to get default values from the dictionary in case of missing keys rather than relying on standard <code>if-else</code>.</p><pre><code class="language-python"># Let's say we want to build a frequency counter for items in the following array
arr = [1,2,3,1,2,3,4,1,2,1,4,1,2,3,1]
freq = {}
for item in arr:
# Fetch a value of 0 in case the key doesn't exist. Otherwise, fetch the stored value
freq[item] = freq.get(item, 0) + 1</code></pre><p>So, the <code>get(&lt;key&gt;, &lt;defaultval&gt;)</code> is a handy operation for retrieving the default value for any given key from the dictionary. The problem with this method comes when we want to deal with mutable data structures as values e.g. <code>list</code> or <code>set</code>.</p><pre><code class="language-python">dict_ = {}
# Some random key
random_key = "random"
dict_[random_key] = dict_.get(random_key, []).append("Hello World!")
print(dict_) # {'random': None}
dict_ = {}
dict_[random_key] = dict_.get(random_key, set()).add("Hello World!")
print(dict_) # {'random': None}</code></pre><p>Did you see the problem?</p><p>The new <code>set</code> or the <code>list</code> doesn’t get assigned to the dictionary’s key. We should assign a new <code>list</code> or a <code>set</code> to the key in case of missing value and then <code>append</code> or <code>add</code> respectively. Ley’s look at an example for this.</p><pre><code class="language-python">dict_ = {}
dict_[random_key] = dict_.get(random_key, set())
dict_[random_key].add("Hello World!")
print(dict_) # {'random': set(['Hello World!'])}. Yay!</code></pre><h3 id="avoiding-keyerror-use-defaultdict"><strong>Avoiding KeyError: Use defaultdict</strong></h3><p>This works most of the times. However, there is a better way to do this. A more <code>pythonic</code> way. The <code>defaultdict</code> is a subclass of the built-in dict class. The <code>defaultdict</code> simply assigns the default value that we specify in case of a missing key. So, the two steps:</p><pre><code class="language-python">dict_[random_key] = dict_.get(random_key, set())
dict_[random_key].add("Hello World!")</code></pre><p>can now be combined into one single step. For e.g.</p><pre><code class="language-python">from collections import defaultdict
# Yet another random key
random_key = "random_key"
# list defaultdict
list_dict_ = defaultdict(list)
# set defaultdict
set_dict_ = defaultdict(set)
# integer defaultdict
int_dict_ = defaultdict(int)
list_dict_[random_key].append("Hello World!")
set_dict_[random_key].add("Hello World!")
int_dict_[random_key] += 1
"""
defaultdict(&lt;class 'list'&gt;, {'random_key': ['Hello World!']})
defaultdict(&lt;class 'set'&gt;, {'random_key': {'Hello World!'}})
defaultdict(&lt;class 'int'&gt;, {'random_key': 1})
"""
print(list_dict_, set_dict_, int_dict_)</code></pre><p><a href="https://docs.python.org/2/library/collections.html" rel="nofollow">Official Docs</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
