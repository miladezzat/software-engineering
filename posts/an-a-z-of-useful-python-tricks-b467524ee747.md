---
card: "https://cdn-media-1.freecodecamp.org/images/0*omyr-SRrpmo80-28"
tags: [Python]
description: "Python is one of the world’s most popular, in-demand programm"
author: "Milad E. Fahmy"
title: "An A-Z of useful Python tricks"
created: "2021-08-16T15:40:35+02:00"
modified: "2021-08-16T15:40:35+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-programming tag-technology tag-learning tag-software-development ">
<header class="post-full-header">
<h1 class="post-full-title">An A-Z of useful Python tricks</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*omyr-SRrpmo80-28 300w,
https://cdn-media-1.freecodecamp.org/images/0*omyr-SRrpmo80-28 600w,
https://cdn-media-1.freecodecamp.org/images/0*omyr-SRrpmo80-28 1000w,
https://cdn-media-1.freecodecamp.org/images/0*omyr-SRrpmo80-28 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*omyr-SRrpmo80-28" alt="An A-Z of useful Python tricks">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Python is one of the world’s most popular, in-demand programming languages. This is for many reasons:</p><ul><li>it’s easy to learn</li><li>it’s super versatile</li><li>it has a huge range of modules and libraries</li></ul><p>I use Python daily as an integral part of my job as a data scientist. Along the way, I’ve picked up a few useful tricks and tips.</p><p>Here, I’ve shared some of them in an A-Z format.</p><p>Most of these ‘tricks’ are things I’ve used or stumbled upon during my day-to-day work. Some I found while browsing the <a href="https://docs.python.org/3/library/index.html" rel="noopener">Python Standard Library docs</a>. A few others I found searching through <a href="https://pypi.org/search/" rel="noopener">PyPi</a>.</p><p>However, credit where it is due — I discovered four or five of them over at <a href="https://awesome-python.com/" rel="noopener">awesome-python.com</a>. This is a curated list of hundreds of interesting Python tools and modules. It is worth browsing for inspiration!</p><h4 id="all-or-any">all or any</h4><p>One of the many reasons why Python is such a popular language is because it is readable and expressive.</p><p>It is often joked that Python is ‘<a href="https://www.artima.com/intv/tippingP.html" rel="noopener">executable pseudocode</a>’. But when you can write code like this, it’s difficult to argue otherwise:</p><pre><code class="language-Python">x = [True, True, False]
if any(x):
print("At least one True")
if all(x):
print("Not one False")
if any(x) and not all(x):
print("At least one True and one False")</code></pre><h4 id="bashplotlib">bashplotlib</h4><p>You want to plot graphs in the console?</p><pre><code>$ pip install bashplotlib</code></pre><p>You can have graphs in the console.</p><h4 id="collections">collections</h4><p>Python has some great default datatypes, but sometimes they just won’t behave exactly how you’d like them to.</p><p>Luckily, the Python Standard Library offers <a href="https://docs.python.org/3/library/collections.html" rel="noopener">the collections module</a>. This handy add-on provides you with further datatypes.</p><pre><code class="language-Python">from collections import OrderedDict, Counter
# Remembers the order the keys are added!
x = OrderedDict(a=1, b=2, c=3)
# Counts the frequency of each character
y = Counter("Hello World!")
</code></pre><h4 id="dir">dir</h4><p>Ever wondered how you can look inside a Python object and see what attributes it has? Of course you have.</p><p>From the command line:</p><pre><code>&gt;&gt;&gt; dir()
&gt;&gt;&gt; dir("Hello World")
&gt;&gt;&gt; dir(dir)</code></pre><p>This can be a really useful feature when running Python interactively, and for dynamically exploring objects and modules you are working with.</p><p>Read more <a href="https://docs.python.org/3/library/functions.html#dir" rel="noopener">here</a>.</p><h4 id="emoji">emoji</h4><p>Yes, <a href="https://pypi.org/project/emoji/" rel="noopener">really</a>.</p><pre><code>$ pip install emoji</code></pre><p>Don’t pretend you’re not gonna try it out…</p><pre><code class="language-Python">from emoji import emojize
print(emojize(":thumbs_up:"))</code></pre><p>?</p><h4 id="from-__future__-import">from __future__ import</h4><p>One consequence of Python’s popularity is that there are always new versions under development. New versions mean new features — unless your version is out-of-date.</p><p>Fear not, however. The <a href="https://docs.python.org/2/library/__future__.html" rel="noopener">__future__ module</a> lets you import functionality from future versions of Python. It’s literally like time travel, or magic, or something.</p><pre><code class="language-Python">from __future__ import print_function
print("Hello World!")</code></pre><p>Why not have a go <a href="https://stackoverflow.com/questions/17811855/syntax-error-not-a-chance" rel="noopener">importing curly braces</a>?</p><h4 id="geopy">geopy</h4><p>Geography can be a challenging terrain for programmers to navigate (ha, a pun!). But <a href="https://geopy.readthedocs.io/en/latest/" rel="noopener">the geopy module</a> makes it unnervingly easy.</p><pre><code>$ pip install geopy</code></pre><p>It works by abstracting the APIs of a range of different geocoding services. It enables you to obtain a place’s full street address, latitude, longitude, and even altitude.</p><p>There’s also a useful distance class. It calculates the distance between two locations in your favorite unit of measurement.</p><pre><code class="language-Python">from geopy import GoogleV3
place = "221b Baker Street, London"
location = GoogleV3().geocode(place)
print(location.address)
print(location.location)</code></pre><h4 id="howdoi">howdoi</h4><p>Stuck on a coding problem and can’t remember that solution you saw before? Need to check StackOverflow, but don’t want to leave the terminal?</p><p>Then you need <a href="https://github.com/gleitz/howdoi" rel="noopener">this useful command line tool</a>.</p><pre><code>$ pip install howdoi</code></pre><p>Ask it whatever question you have, and it’ll do its best to return an answer.</p><pre><code>$ howdoi vertical align css
$ howdoi for loop in java
$ howdoi undo commits in git</code></pre><p>Be aware though — it scrapes code from top answers from StackOverflow. It might not always give the most helpful information…</p><pre><code>$ howdoi exit vim</code></pre><h4 id="inspect">inspect</h4><p>Python’s <a href="https://docs.python.org/3/library/inspect.html" rel="noopener">inspect module</a> is great for understanding what is happening behind the scenes. You can even call its methods on itself!</p><p>The code sample below uses <code>inspect.getsource()</code> to print its own source code. It also uses <code>inspect.getmodule()</code> to print the module in which it was defined.</p><p>The last line of code prints out its own line number.</p><pre><code class="language-Python">import inspect
print(inspect.getsource(inspect.getsource))
print(inspect.getmodule(inspect.getmodule))
print(inspect.currentframe().f_lineno)</code></pre><p>Of course, beyond these trivial uses, the inspect module can prove useful for understanding what your code is doing. You could also use it for writing self-documenting code.</p><h4 id="jedi">Jedi</h4><p>The Jedi library is an autocompletion and code analysis library. It makes writing code quicker and more productive.</p><p>Unless you’re developing your own IDE, you’ll probably be most interested in <a href="https://jedi.readthedocs.io/en/latest/docs/usage.html" rel="noopener">using Jedi as an editor plugin</a>. Luckily, there are already loads available!</p><p>You may already be using Jedi, however. The IPython project makes use of Jedi for its code autocompletion functionality.</p><h4 id="-kwargs">**kwargs</h4><p>When learning any language, there are many milestones along the way. With Python, understanding the mysterious <code>**kwargs</code> syntax probably counts as one.</p><p>The double-asterisk in front of a dictionary object lets you pass the contents of that dictionary as <a href="https://docs.python.org/3/tutorial/controlflow.html#keyword-arguments" rel="noopener">named arguments to a function</a>.</p><p>The dictionary’s keys are the argument names, and the values are the values passed to the function. You don’t even need to call it <code>kwargs</code>!</p><pre><code class="language-Python">dictionary = {"a": 1, "b": 2}
def someFunction(a, b):
print(a + b)
return
# these do the same thing:
someFunction(**dictionary)
someFunction(a=1, b=2)</code></pre><p>This is useful when you want to write functions that can handle named arguments not defined in advance.</p><h4 id="list-comprehensions">List comprehensions</h4><p>One of my favourite things about programming in Python are its <a href="https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions" rel="noopener">list comprehensions</a>.</p><p>These expressions make it easy to write very clean code that reads almost like natural language.</p><p>You can read more about how to use them <a href="https://www.learnpython.org/en/List_Comprehensions" rel="noopener">here</a>.</p><pre><code class="language-Python">numbers = [1,2,3,4,5,6,7]
evens = [x for x in numbers if x % 2 is 0]
odds = [y for y in numbers if y not in evens]
cities = ['London', 'Dublin', 'Oslo']
def visit(city):
print("Welcome to "+city)
for city in cities:
visit(city)</code></pre><h4 id="map-function map() { [native code] }1">map</h4><p>Python supports functional programming through a number of inbuilt features. One of the most useful is the <code>map()</code> function — especially in combination with <a href="https://docs.python.org/3/tutorial/controlflow.html#lambda-expressions" rel="noopener">lambda functions</a>.</p><pre><code class="language-Python">x = [1, 2, 3]
y = map(lambda x : x + 1 , x)
# prints out [2,3,4]print(list(y))</code></pre><p>In the example above, <code>map()</code> applies a simple lambda function to each element in <code>x</code>. It returns a map object, which can be converted to some iterable object such as a list or tuple.</p><h4 id="newspaper3k">newspaper3k</h4><p>If you haven’t seen it already, then be prepared to have your mind blown by <a href="https://pypi.org/project/newspaper3k/" rel="noopener">Python’s newspaper module</a>.</p><p>It lets you retrieve news articles and associated meta-data from a range of leading international publications. You can retrieve images, text and author names.</p><p>It even has some <a href="https://newspaper.readthedocs.io/en/latest/user_guide/quickstart.html#performing-nlp-on-an-article" rel="noopener">inbuilt NLP functionality</a>.</p><p>So if you were thinking of using BeautifulSoup or some other DIY webscraping library for your next project, save yourself the time and effort and <code>$ pip install newspaper3k</code> instead.</p><h4 id="operator-overloading">Operator overloading</h4><p>Python provides support for <a href="https://docs.python.org/3/reference/datamodel.html#special-method-names" rel="noopener">operator overloading</a>, which is one of those terms that make you sound like a legit computer scientist.</p><p>It’s actually a simple concept. Ever wondered why Python lets you use the <code>+</code> operator to add numbers and also to concatenate strings? That’s operator overloading in action.</p><p>You can define objects which use Python’s standard operator symbols in their own specific way. This lets you use them in contexts relevant to the objects you’re working with.</p><pre><code class="language-Python">class Thing:
def __init__(self, value):
self.__value = value
def __gt__(self, other):
return self.__value &gt; other.__value
def __lt__(self, other):
return self.__value &lt; other.__value
something = Thing(100)
nothing = Thing(0)
# True
something &gt; nothing
# False
something &lt; nothing
# Error
something + nothing</code></pre><h4 id="pprint">pprint</h4><p>Python’s default <code>print</code> function does its job. But try printing out any large, nested object, and the result is rather ugly.</p><p>Here’s where the <a href="https://docs.python.org/3/library/pprint.html" rel="noopener">Standard Library’s pretty-print module</a> steps in. This prints out complex structured objects in an easy-to-read format.</p><p>A must-have for any Python developer who works with non-trivial data structures.</p><pre><code class="language-Python">import requests
import pprint
url = 'https://randomuser.me/api/?results=1'
users = requests.get(url).json()
pprint.pprint(users)</code></pre><h4 id="queue">Queue</h4><p>Python supports multithreading, and this is facilitated by the Standard Library’s Queue module.</p><p>This module lets you implement queue data structures. These are data structures that let you add and retrieve entries according to a specific rule.</p><p>‘First in, first out’ (or FIFO) queues let you retrieve objects in the order they were added. ‘Last in, first out’ (LIFO) queues let you access the most recently added objects first.</p><p>Finally, priority queues let you retrieve objects according to the order in which they are sorted.</p><p><a href="https://www.tutorialspoint.com/python3/python_multithreading.htm" rel="noopener">Here’s an example of how to use queues</a> for multithreaded programming in Python.</p><h4 id="__repr__">__repr__</h4><p>When defining a class or an object in Python, it is useful to provide an ‘official’ way of representing that object as a string. For example:</p><pre><code>&gt;&gt;&gt; file = open('file.txt', 'r')
&gt;&gt;&gt; print(file)
&lt;open file 'file.txt', mode 'r' at 0x10d30aaf0&gt;</code></pre><p>This makes debugging code a lot easier. Add it to your class definitions as below:</p><pre><code class="language-Python">class someClass:
def __repr__(self):
return "&lt;some description here&gt;"
someInstance = someClass()
# prints &lt;some description here&gt;
print(someInstance)</code></pre><h4 id="sh">sh</h4><p>Python makes a great scripting language. Sometimes using the standard os and subprocess libraries can be a bit of a headache.</p><p>The <a href="http://amoffat.github.io/sh/" rel="noopener">sh library</a> provides a neat alternative.</p><p>It lets you call any program as if it were an ordinary function — useful for automating workflows and tasks, all from within Python.</p><pre><code class="language-Python">import sh
sh.pwd()
sh.mkdir('new_folder')
sh.touch('new_file.txt')
sh.whoami()
sh.echo('This is great!')</code></pre><h4 id="type-hints">Type hints</h4><p>Python is a dynamically-typed language. You don’t need to specify datatypes when you define variables, functions, classes etc.</p><p>This allows for rapid development times. However, there are few things more annoying than a runtime error caused by a simple typing issue.</p><p><a href="https://docs.python.org/3/library/typing.html" rel="noopener">Since Python 3.5</a>, you have the option to provide type hints when defining functions.</p><pre><code>def addTwo(x : Int) -&gt; Int:    return x + 2</code></pre><p>You can also define type aliases:</p><pre><code>from typing import List</code></pre><pre><code>Vector = List[float]Matrix = List[Vector]</code></pre><pre><code class="language-Python">def addMatrix(a : Matrix, b : Matrix) -&gt; Matrix:
result = []
for i,row in enumerate(a):
result_row =[]
for j, col in enumerate(row):
result_row += [a[i][j] + b[i][j]]
result += [result_row]
return result
x = [[1.0, 0.0], [0.0, 1.0]]
y = [[2.0, 1.0], [0.0, -2.0]]
z = addMatrix(x, y)</code></pre><p>Although not compulsory, type annotations can make your code easier to understand.</p><p>They also allow you to use type checking tools to catch those stray TypeErrors before runtime. Probably worthwhile if you are working on large, complex projects!</p><h4 id="uuid">uuid</h4><p>A quick and easy way to generate Universally Unique IDs (or ‘UUIDs’) is through the <a href="https://docs.python.org/3/library/uuid.html" rel="noopener">Python Standard Library’s uuid module</a>.</p><pre><code class="language-Python">import uuid
user_id = uuid.uuid4()
print(user_id)</code></pre><p>This creates a randomized 128-bit number that will almost certainly be unique.</p><p>In fact, there are over 2¹²² possible UUIDs that can be generated. That’s over five undecillion (or 5,000,000,000,000,000,000,000,000,000,000,000,000).</p><p>The probability of finding duplicates in a given set is extremely low. Even with a trillion UUIDs, the probability of a duplicate existing is much, much less than one-in-a-billion.</p><p>Pretty good for two lines of code.</p><h4 id="virtual-environments">Virtual environments</h4><p>This is probably my favorite Python thing of all.</p><p>Chances are you are working on multiple Python projects at any one time. Unfortunately, sometimes two projects will rely on different versions of the same dependency. Which do you install on your system?</p><p>Luckily, Python’s <a href="https://docs.python.org/3/tutorial/venv.html" rel="noopener">support for virtual environments</a> lets you have the best of both worlds. From the command line:</p><pre><code>python -m venv my-project
source my-project/bin/activate
pip install all-the-modules </code></pre><p>Now you can have standalone versions and installations of Python running on the same machine. Sorted!</p><h4 id="wikipedia">wikipedia</h4><p>Wikipedia has a great API that allows users programmatic access to an unrivalled body of completely free knowledge and information.</p><p>The <a href="https://wikipedia.readthedocs.io/en/latest/quickstart.html" rel="noopener">wikipedia module</a> makes accessing this API almost embarrassingly convenient.</p><pre><code class="language-Python">import wikipedia
result = wikipedia.page('freeCodeCamp')
print(result.summary)
for link in result.links:
print(link)</code></pre><p>Like the real site, the module provides support for multiple languages, page disambiguation, random page retrieval, and even has a <code>donate()</code> method.</p><h4 id="xkcd">xkcd</h4><p>Humour is a key feature of the Python language — after all, it is named after the British comedy sketch show <a href="https://en.wikipedia.org/wiki/Monty_Python%27s_Flying_Circus" rel="noopener">Monty Python’s Flying Circus</a>. Much of Python’s official documentation references the show’s most famous sketches.</p><p>The sense of humour isn’t restricted to the docs, though. Have a go running the line below:</p><pre><code>import antigravity</code></pre><p>Never change, Python. Never change.</p><h4 id="yaml">YAML</h4><p>YAML stands for ‘<a href="http://yaml.org/" rel="noopener">YAML Ain’t Markup Language</a>’. It is a data formatting language, and is a superset of JSON.</p><p>Unlike JSON, it can store more complex objects and refer to its own elements. You can also write comments, making it particularly suited to writing configuration files.</p><p>The <a href="https://pyyaml.org/wiki/PyYAMLDocumentation" rel="noopener">PyYAML module</a> lets you use YAML with Python. Install with:</p><pre><code>$ pip install pyyaml</code></pre><p>And then import into your projects:</p><pre><code>import yaml</code></pre><p>PyYAML lets you store Python objects of any datatype, and instances of any user-defined classes also.</p><h4 id="zip">zip</h4><p>One last trick for ya, and it really is a cool one. Ever needed to form a dictionary out of two lists?</p><pre><code class="language-Python">keys = ['a', 'b', 'c']
vals = [1, 2, 3]
zipped = dict(zip(keys, vals))</code></pre><p>The <code>zip()</code> inbuilt function takes a number of iterable objects and returns a list of tuples. Each tuple groups the elements of the input objects by their positional index.</p><p>You can also ‘unzip’ objects by calling <code>*zip()</code> on them.</p><h4 id="thanks-for-reading-">Thanks for reading!</h4><p>So there you have it, an A-Z of Python tricks — hopefully you’ve found something useful for your next project.</p><p>Python’s a very diverse and well-developed language, so there’s bound to be many features I haven’t got round to including.</p><p>Please share any of your own favorite Python tricks by leaving a response below!</p>
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
