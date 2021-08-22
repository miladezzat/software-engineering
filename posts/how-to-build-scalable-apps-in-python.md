---
card: "/images/default.jpg"
tags: [Python]
description: "Any application that processes data can start to perform slow"
author: "Milad E. Fahmy"
title: "How to Maintain Scalability in Your Python Code"
created: "2021-08-16T15:38:32+02:00"
modified: "2021-08-16T15:38:32+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-scalability tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">How to Maintain Scalability in Your Python Code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/08/python-coding.jpg 300w,
/news/content/images/size/w600/2019/08/python-coding.jpg 600w,
/news/content/images/size/w1000/2019/08/python-coding.jpg 1000w,
/news/content/images/size/w2000/2019/08/python-coding.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/08/python-coding.jpg" alt="How to Maintain Scalability in Your Python Code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Any application that processes data can start to perform slowly or even start to corrupt or break. It is better if developers are able to program quickly and add more value to coding. </p><p>As developers, we should have tools to prototype quickly. That’s why we should invest effort in making an app that is scalable. Broadly, building a substantial and scalable application is possible with the Python programming language.</p><p>Python is a high-level programming language that is also object-oriented. With its qualities such as built-in data structures, dynamic binding, and dynamic typing, we can use it to develop applications as rapidly as possible. </p><p>Python can also be used as a glued scripting language that integrates the existing components and helps us build scalable applications.</p><p>Python is one of the pioneers of programming languages that developers can use to do all the scaling work. </p><p>Here are some tips you can check out for developing scalable apps in Python.</p><h2 id="learn-to-cleverly-use-collections-">Learn to Cleverly Use ‘Collections’</h2><p>Python support rich and powerful data structures/containers for ‘collections’ such as <a href="https://docs.python.org/3.6/library/stdtypes.html#dict">dict</a>, <a href="https://docs.python.org/3.6/library/stdtypes.html#list">list</a>, <a href="https://docs.python.org/3.6/library/stdtypes.html#set">set</a>, and <a href="https://docs.python.org/3.6/library/stdtypes.html#tuple">tuple</a>. They are so valuable in building scalable apps. However, overusing them can impact code scalability. It's easy to spot when collections have been overused. </p><pre><code class="language-python2"># notebooks.csv holds meta information on a collection of notebooks:
# heading, writer, year of pub, etc.
# load_from_file returns a list of dicts.
notebooks = load_from_file('notebooks.csv')
notebook_summaries = dict()
for notebook in notebooks:
notebook_summaries[notebook["heading"]] = notebook["summary"]
for heading, summary in notebook_summaries.items():
# Do something interesting with the summary.
print(heading, summary)
</code></pre><p>From the above code, you can clearly see it creates table mapping titles after reading notebook data from the CSV file. If you see it from the memory-usage viewpoint, there is nothing wrong if notebooks.csv has hundreds of titles. </p><p>However, it is not right if it is related to the inventory of entire notebook stores with dozens of titles. You can have either one or two issues with your coding which also depends on what version you are using, Python 2 or Python 3.</p><p>This creates a bottleneck issue with the scalability of code memory. Creating a data structure called notebook_summaries is unnecessary here but it improves the readability. The “for” line helps you immediately know that a loop is running here through the summaries. </p><p>The new data structure contains the full summary of every notebook that is likely to consume more memory than all the other fields. Suppose if a notebook consumes N bytes of memory, then the complete block will consume at least 1.5 * N bytes. </p><p><strong>This will scale better in Python 3</strong></p><pre><code class="language-python">notebooks = load_from_file('notebooks.csv')
for notebook in notebooks.items():
print(notebook["title"], notebook["summary"])
</code></pre><p>I recommend that you create variables that are well-named as it helps boost the maintainability of your Python code.</p><h2 id="intelligent-iterating-of-python-codes">Intelligent Iterating of Python Codes</h2><p>While developing large-size applications with Python, scalability is not the only thing you should consider. You can face several other problems. For example, the iteration issue is the most common one. </p><p>Sometimes the for line in your coding iterates over notebook_summaries.items() and creates another copy of notebooks. This iteration of code can be responsible for low code performance in which Python code starts to hang before initiating the for loop. &nbsp; &nbsp;<br>This happens because the notebook_summaries.items() forms a very large list that consumes more memory. Also it is because the Python code executes the bytecode after the forloop. </p><p>It will start allocating more memory for this list. Again the iterating issue affects Python 2 as well as Python 3's items() and makes an extra copy of notebooks_summaries' contents. Developers can use iteritems instead of items in Python 2:</p><p><strong>In Python 2, use "iteritems" instead of "items"</strong></p><pre><code class="language-python">notebooks = load_from_file('notebooks.csv')
for notebook in notebooks.iteritems():
print(notebook["title"], notebook["summary"])</code></pre><p>So, the point here is to notice the difference between using an iterator in all Python versions and creating a list. It is the developer’s responsibility to justify the right pattern according to the coding context.</p><h2 id="using-generators-for-scalability-in-python-code">Using ‘Generators’ For Scalability in Python Code</h2><p>The generator function allows you to create iterators in a simpler manner. &nbsp;Imagine you are working on building a software program as Grammarly that takes in text, analyze the sentences, and perform some kind of grammar analysis. Each line of sentence will be split by a period followed by one or more characters.</p><p><strong>See the coding </strong></p><pre><code class="language-python">import re
text = '''Full body of text. It has many sentences.
Some have grammatical errors and some are correct.'''
sentences = re.analyzed(r'\.\s+', text)
for sentence in sentences:
print(sentence)</code></pre><p><strong>Run the listing</strong></p><pre><code class="language-python">This is a body of text
It has many sentences
Some have grammatical errors and some are correct.</code></pre><pre><code class="language-python">import random
def weathermaker(volatility, days):
'''
Yield a series of messages giving the day's weather and occasional commentary
volatility ‑ a float between 0 and 1; the greater this number the greater
the likelihood that the weather will change on each given day
days ‑ number of days for which to generate weather
'''
#Always start as if yesterday were sunny
current_weather = 'sunny'
#First item is the probability that the weather will stay the same
#Second item is the probability that the weather will change
#The higher the volatility the greater the likelihood of change
weights = 1.0‑volatility, volatility    #For fun track how many sunny days in a row there have been
sunny_run = 1
#How many rainy days in a row there have been
rainy_run = 0
for day in range(days):
#Figure out the opposite of the current weather
other_weather = 'rainy' if current_weather == 'sunny' else 'sunny'
#Set up to choose the next day's weather. First set up the choices
choose_from = current_weather, other_weather        #random.choices returns a list of random choices based on the weights
#By default a list of 1 item, so we grab that first and only item with 0 current_weather = random.choices(choose_from, weights)0        yield 'today it is ' + current_weather
if current_weather == 'sunny':
#Check for runs of three or more sunny days
sunny_run += 1
rainy_run = 0
if sunny_run &gt;= 3:
yield "Uh oh! We're getting thirsty!"
else:
#Check for runs of three or more rainy days
rainy_run += 1
sunny_run = 0
if rainy_run &gt;= 3:
yield "Rain, rain go away!"
return
#Create a generator object and print its series of messages
for msg in weathermaker(0.2, 10):
print(msg)
</code></pre><p><strong>Output</strong></p><pre><code class="language-python">$ python weathermaker.py
today it is sunny
today it is sunny
Uh oh! We're getting thirsty!
today it is sunny
Uh oh! We're getting thirsty!
today it is sunny
Uh oh! We're getting thirsty!
today it is rainy
today it is sunny
today it is rainy
today it is rainy
today it is rainy
Rain, rain go away!
today it is rainy
Rain, rain go away!</code></pre><p>From the above code it’s clear that <a href="https://wiki.python.org/moin/Generators">Python generators</a> are a great way to quickly create iterators. They have many benefits, and they allocate memory for each sentence one at a time. They also make it easier for developers to modify the code without screwing up. </p><p>Another benefit generators provide is the <a href="https://pythonspot.com/encapsulation/">encapsulation</a> that provides new and useful ways for you to package and isolate the internal code dependencies. This is why you can use generators in for loops.</p><p><strong>You can add multiple yield statements in a generator</strong></p><pre><code class="language-python">def nums3():
n = 0
while n &lt; 6:
yield n
n += 1
yield 63 # Second yield
for num in nums3():
print(num</code></pre><p><strong>Output</strong></p><pre><code class="language-python">0
1
2
3
63</code></pre><p><strong>Explanation of the code above</strong></p><p>Here the second yield is completed after the whileloop exits. When the function reaches the implicit return at the end, the iteration stops.</p><h2 id="final-words">Final Words</h2><p>So, if you don’t use generators in your python code yet, learn to do so. I know you will be glad you did it. They are the core part of Python coding and can be useful for your next application development on Python.</p><p>No doubt, Python is a very useful, diverse, and well-maintained language, and there is no bound to the features. However, I have shared the ideas which I use in my day to day coding process to make things simple. </p><p><strong>ValueCoders is an experienced <a href="https://www.valuecoders.com/">software development company</a>. In case you need the Python development services, feel free to <a href="https://www.valuecoders.com/contact">get in touch</a><em><em><em><em>.</em></em></em></em></strong></p><p><br></p><p><br></p><p></p>
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
