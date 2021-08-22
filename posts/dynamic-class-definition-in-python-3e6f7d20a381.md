---
card: "https://cdn-media-1.freecodecamp.org/images/0*bJlMQkXW7FOfL5CL"
tags: [Programming]
description: "Here’s a neat Python trick you might just find useful one day"
author: "Milad E. Fahmy"
title: "Dynamic class definition in Python"
created: "2021-08-16T15:40:01+02:00"
modified: "2021-08-16T15:40:01+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-python tag-tech tag-technology tag-object-oriented ">
<header class="post-full-header">
<h1 class="post-full-title">Dynamic class definition in Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*bJlMQkXW7FOfL5CL 300w,
https://cdn-media-1.freecodecamp.org/images/0*bJlMQkXW7FOfL5CL 600w,
https://cdn-media-1.freecodecamp.org/images/0*bJlMQkXW7FOfL5CL 1000w,
https://cdn-media-1.freecodecamp.org/images/0*bJlMQkXW7FOfL5CL 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*bJlMQkXW7FOfL5CL" alt="Dynamic class definition in Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Here’s a neat Python trick you might just find useful one day. Let’s look at how you can dynamically define classes, and create instances of them as required.</p><p>This trick makes use of Python’s object oriented programming (OOP) capabilities, so we’ll review those first.</p><h3 id="classes-and-objects">Classes and objects</h3><p>Python is an object-oriented language, meaning it lets you write code in the <a href="https://guide.freecodecamp.org/design-patterns/object-oriented-programming/" rel="noopener">object oriented paradigm</a>.</p><p>The key concept in this programming paradigm is classes. In Python, these are used to create objects which can have attributes.</p><p>Objects are specific instances of a class. A class is essentially a blueprint of what an object is and how it should behave.</p><p>Classes are defined with two types of attribute:</p><ul><li><a href="https://docs.python.org/3/tutorial/classes.html#instance-objects" rel="noopener">Data attributes</a> — variables available to a given instance of that class</li><li><a href="https://docs.python.org/3/tutorial/classes.html#method-objects" rel="noopener">Methods</a> — functions available to an instance of that class</li></ul><p>The classic OOP example usually involves different types of animal, or food. Here, I’ve gone more practical with a simple data visualization theme.</p><p>First, define the class <code>BarChart</code>.</p><pre><code class="language-Python">class BarChart:
def __init__(self, title, data):
self.title = title
self.data = data
def plot(self):
print("\n"+self.title)
for k in self.data.keys():
print("-"*self.data[k]+" "+k)</code></pre><p>The <code>__init__</code> method lets you set attributes upon instantiation. That is, when you create a new instance of <code>BarChart</code>, you can pass arguments that provide the chart’s title and data.</p><p>This class also has a <code>plot()</code> method. This prints a very basic bar chart to the console when it is called. It could feasibly do more interesting things in a real application.</p><p>Next, instantiate an instance of <code>BarChart</code>:</p><pre><code class="language-Python">data = {"a":4, "b":7, "c":8}bar = BarChart("A Simple Chart", data)</code></pre><p>Now you can use the <code>bar</code> object in the rest of your code:</p><pre><code class="language-Python">bar.data['d'] = bar.plot()</code></pre><pre><code>A Simple Chart
---- a
------- b
-------- c
----- d</code></pre><p>This is great, because it allows you to define a class and create instances dynamically. You can spin up instances of other bar charts in one line of code.</p><pre><code class="language-Python">new_data = {"x":1, "y":2, "z":3}
bar2 = BarChart("Another Chart", new_data)
bar2.plot()</code></pre><pre><code>Another Chart
- x
-- y
--- z</code></pre><p>Say you wanted to define several classes of chart. <a href="https://docs.python.org/3.7/tutorial/classes.html#inheritance" rel="noopener">Inheritance</a> lets you define classes which “inherit” properties from base classes.</p><p>For example, you could define a base <code>Chart</code> class. Then you can define derived classes which inherit from the base.</p><pre><code class="language-Python">class Chart:
def __init__(self, title, data):
self.title = title
self.data = data
def plot(self):
pass</code></pre><pre><code class="language-Python">class BarChart(Chart):
def plot(self):
print("\n"+self.title)
for k in self.data.keys():
print("-"*self.data[k]+" "+k)</code></pre><pre><code class="language-Python">class Scatter(Chart):
def plot(self):
points = zip(data['x'],data['y'])
y = max(self.data['y'])+1
x = max(self.data['x'])+1
print("\n"+self.title)
for i in range(y,-1,-1):
line = str(i)+"|"
for j in range(x):
if (j,i) in points:
line += "X"
else:
line += " "
print(line)</code></pre><p>Here, the <code>Chart</code> class is a base class. The <code>BarChart</code> and <code>Scatter</code> classes inherit the <code>__init__()</code> method from <code>Chart.</code> But they have their own <code>plot()</code> methods which override the one defined in <code>Chart</code><em>.</em></p><p>Now you can create scatter chart objects as well.</p><pre><code class="language-Python">data = {'x':[1,2,4,5], 'y':[1,2,3,4]}
scatter = Scatter('Scatter Chart', data)
scatter.plot()</code></pre><pre><code>Scatter Chart
4|     X
3|	  X
2|  X
1| X
0|</code></pre><p>This approach lets you write more abstract code, giving your application greater flexibility. Having blueprints to create countless variations of the same general object will save you unnecessarily repeating lines of code. It can also make your application code easier to understand.</p><p>You can also import classes into future projects, if you want to reuse them at a later time.</p><h3 id="factory-methods">Factory methods</h3><p>Sometimes, you won’t know the specific class you want to implement before runtime. For example, perhaps the objects you create will depend on user input, or the results of another process with a variable outcome.</p><p><a href="https://en.wikipedia.org/wiki/Factory_method_pattern" rel="noopener">Factory methods</a> offer a solution. These are methods that take a dynamic list of arguments and return an object. The arguments supplied determine the class of the object that is returned.</p><p>A simple example is illustrated below. This factory can return either a bar chart or a scatter plot object, depending on the <code>style</code> argument it receives. A smarter factory method could even guess the best class to use, by looking at the structure of the <code>data</code> argument.</p><pre><code class="language-Python">def chart_factory(title, data, style):
if style == "bar":
return BarChart(title, data)
if style == "scatter":
return Scatter(title, data)
else:
raise Exception("Unrecognized chart style.")
</code></pre><pre><code class="language-Python">chart = chart_factory("New Chart", data, "bar")
chart.plot()</code></pre><p>Factory methods are great when you know in advance which classes you want to return, and the conditions under which they are returned.</p><p>But what if you don’t even know this in advance?</p><h3 id="dynamic-definitions">Dynamic definitions</h3><p>Python lets you define classes dynamically, and instantiate objects with them as required.</p><p>Why might you want to do this? The short answer is yet more abstraction.</p><p>Admittedly, needing to write code at this level of abstraction is generally a rare occurrence. As always when programming, you should consider if there is an easier solution.</p><p>However, there may be times when it genuinely proves useful to define classes dynamically. We’ll cover a possible use-case below.</p><p>You may be familiar with Python’s <code>type()</code> function. With one argument, it simply returns the “type” of the object of the argument.</p><pre><code class="language-Python">type(1) # &lt;type 'int'&gt;
type('hello') # &lt;type 'str'&gt;
type(True) # &lt;type 'bool'&gt;</code></pre><p>But, with three arguments, <code>type()</code> returns a whole new <a href="https://docs.python.org/3/library/stdtypes.html#bltin-type-objects" rel="noopener">type object</a>. This is <a href="https://docs.python.org/3/library/functions.html#type" rel="noopener">equivalent to defining a new class</a>.</p><pre><code>NewClass = type('NewClass', (object,), {})</code></pre><ul><li>The first argument is a string that gives the new class a name</li><li>The next is a tuple, which contains any base classes the new class should inherit from</li><li>The final argument is a dictionary of attributes specific to this class</li></ul><p>When might you need to use something as abstract as this? Consider the following example.</p><p><a href="https://flask-table.readthedocs.io/en/stable/#flask-table" rel="noopener">Flask Table</a> is a Python library that generates syntax for HTML tables. It can be installed via the pip package manager.</p><p>You can use Flask Table to define classes for each table you want to generate. You define a class that inherits from a base <code>Table</code> class. Its attributes are column objects, which are instances of the <code>Col</code> class.</p><pre><code class="language-python">from flask_table import Table, Col
class MonthlyDownloads(Table):
month = Col('Month')
downloads = Col('Downloads')
data = [{'month':'Jun', 'downloads':700},
{'month':'Jul', 'downloads':900},
{'month':'Aug', 'downloads':1600},
{'month':'Sep', 'downloads':1900},
{'month':'Oct', 'downloads':2200}]
table = MonthlyDownloads(data)print(table.__html__())</code></pre><p>You then create an instance of the class, passing in the data you want to display. The <code>__html__()</code> method generates the required HTML.</p><p>Now, say you’re developing a tool that uses Flask Table to generate HTML tables based on a user-provided config file. You don’t know in advance how many columns the user wants to define — it could be one, it could be a hundred! How can your code define the right class for the job?</p><p>Dynamic class definition is useful here. For each class you wish to define, you can dynamically build the <code>attributes</code> dictionary.</p><p>Say your user config is a CSV file, with the following structure:</p><pre><code>Table1, column1, column2, column3
Table2, column1
Table3, column1, column2</code></pre><p>You could read the CSV file line-by-line, using the first element of each row as the name of each table class. The remaining elements in that row would be used to define <code>Col</code> objects for that table class. These are added to an <code>attributes</code> dictionary, which is built up iteratively.</p><pre><code>for row in csv_file:
attributes = {}
for column in row[1:]:
attributes[column] = Col(column)
globals()[row[0]] = type(row[0], (Table,), attributes)</code></pre><p>The code above defines classes for each of the tables in the CSV config file. Each class is added to the <code>globals</code> dictionary.</p><p>Of course, this is a relatively trivial example. FlaskTable is capable of generating much more sophisticated tables. A real life use-case would make better use of this! But, hopefully, you’ve seen how dynamic class definition might prove useful in some contexts.</p><h3 id="so-now-you-know-">So now you know…</h3><p>If you are new to Python, then it is worth getting up to speed with classes and objects early on. Try implementing them in your next learning project. Or, <a href="https://github.com/trending/python" rel="noopener">browse open source projects on Github</a> to see how other developers make use of them.</p><p>For those with a little more experience, it can be very rewarding to learn how things work “behind-the-scenes”. Browsing <a href="https://docs.python.org/3/" rel="noopener">the official docs</a> can be illuminating!</p><p>Have you ever found a use-case for dynamic class definition in Python? If so, it’d be great to share it in the responses below.</p>
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
