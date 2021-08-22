---
card: "https://cdn-media-1.freecodecamp.org/images/1*ueWmI48uuShON-hX7LwI0w.png"
tags: [Python]
description: "First of all, what is Python? According to its creator, Guido"
author: "Milad E. Fahmy"
title: "Learning Python: From Zero to Hero"
created: "2021-08-16T15:42:19+02:00"
modified: "2021-08-16T15:42:19+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-programming tag-coding tag-web-development tag-software-development ">
<header class="post-full-header">
<h1 class="post-full-title">Learning Python: From Zero to Hero</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*ueWmI48uuShON-hX7LwI0w.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*ueWmI48uuShON-hX7LwI0w.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*ueWmI48uuShON-hX7LwI0w.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*ueWmI48uuShON-hX7LwI0w.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*ueWmI48uuShON-hX7LwI0w.png" alt="Learning Python: From Zero to Hero">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>First of all, what is Python? According to its creator, Guido van Rossum, Python is a:</p><blockquote>“high-level programming language, and its core design philosophy is all about code readability and a syntax which allows programmers to express concepts in a few lines of code.”</blockquote><p>For me, the first reason to learn Python was that it is, in fact, a beautiful<em> </em>programming language. It was really natural to code in it and express my thoughts.</p><p>Another reason was that we can use coding in Python in multiple ways: data science, web development, and machine learning all shine here. Quora, Pinterest and Spotify all use Python for their backend web development. So let’s learn a bit about it.</p><h3 id="the-basics">The Basics</h3><h4 id="1-variables">1. Variables</h4><p>You can think about variables as words that store a value. Simple as that.</p><p>In Python, it is really easy to define a variable and set a value to it. Imagine you want to store number 1 in a variable called “one.” Let’s do it:</p><pre><code class="language-py">one = 1</code></pre><p>How simple was that? You just assigned the value 1 to the variable “one.”</p><pre><code class="language-py">two = 2
some_number = 10000</code></pre><p>And you can assign any other <strong>value</strong> to whatever other <strong>variables </strong>you want. As you see in the table above, the variable “<strong>two</strong>” stores the integer <strong>2</strong>, and “<strong>some_number</strong>” stores <strong>10,000</strong>.</p><p>Besides integers, we can also use booleans (True / False), strings, float, and so many other data types.</p><pre><code class="language-py"># booleans
true_boolean = True
false_boolean = False
# string
my_name = "Leandro Tk"
# float
book_price = 15.80</code></pre><h4 id="2-control-flow-conditional-statements">2. Control Flow: conditional statements</h4><p>“<strong>If</strong>” uses an expression to evaluate whether a statement is True or False. If it is True, it executes what is inside the “if” statement. For example:</p><pre><code class="language-py">if True:
print("Hello Python If")
if 2 &gt; 1:
print("2 is greater than 1")</code></pre><p><strong>2</strong> is greater than <strong>1</strong>, so the “<strong>print</strong>” code is executed.</p><p>The “<strong>else</strong>” statement will be executed if the “<strong>if</strong>” expression is <strong>false</strong>.</p><pre><code class="language-py">if 1 &gt; 2:
print("1 is greater than 2")
else:
print("1 is not greater than 2")</code></pre><p><strong>1</strong> is not greater than <strong>2</strong>, so the code inside the “<strong>else</strong>” statement will be executed.</p><p>You can also use an “<strong>elif</strong>” statement:</p><pre><code class="language-py">if 1 &gt; 2:
print("1 is greater than 2")
elif 2 &gt; 1:
print("1 is not greater than 2")
else:
print("1 is equal to 2")</code></pre><h4 id="3-looping-iterator">3. Looping / Iterator</h4><p>In Python, we can iterate in different forms. I’ll talk about two: <strong>while<em> </em></strong>and <strong>for</strong>.</p><p><strong>While </strong>Looping: while the statement is True, the code inside the block will be executed. So, this code will print the number from <strong>1</strong> to <strong>10</strong>.</p><pre><code class="language-py">num = 1
while num &lt;= 10:
print(num)
num += 1</code></pre><p>The <strong>while</strong> loop needs a “<strong>loop condition.</strong>” If it stays True, it continues iterating. In this example, when <code>num</code> is <code>11</code> the <strong>loop condition</strong> equals <code>False</code>.</p><p>Another basic bit of code to better understand it:</p><pre><code class="language-py">loop_condition = True
while loop_condition:
print("Loop Condition keeps: %s" %(loop_condition))
loop_condition = False</code></pre><p>The <strong>loop condition</strong> is <code>True</code> so it keeps iterating — until we set it to <code>False</code>.</p><p><strong>For Looping</strong>: you apply the variable “<strong>num</strong>” to the block, and the “<strong>for</strong>” statement will iterate it for you. This code will print the same as <strong>while</strong> code: from <strong>1</strong> to <strong>10</strong>.</p><pre><code class="language-py">for i in range(1, 11):
print(my_integers[0]) # 5
print(my_integers[1]) # 7
print(my_integers[4]) # 4</code></pre><p>Imagine that you don’t want to store integers. You just want to store strings, like a list of your relatives’ names. Mine would look something like this:</p><pre><code class="language-py">relatives_names = [
"Toshiaki",
"Juliana",
"Yuji",
"Bruno",
"Kaio"
]
print(relatives_names[4]) # Kaio</code></pre><p>It works the same way as integers. Nice.</p><p>We just learned how <code>Lists</code> indices work. But I still need to show you how we can add an element to the <code>List</code> data structure (an item to a list).</p><p>The most common method to add a new value to a <code>List</code> is <code>append</code>. Let’s see how it works:</p><pre><code class="language-py">bookshelf = []
bookshelf.append("The Effective Engineer")
bookshelf.append("The 4 Hour Work Week")
print(bookshelf[0]) # The Effective Engineer
print(bookshelf[1]) # The 4 Hour Work Week</code></pre><p><code>append</code> is super simple. You just need to apply the element (eg. “<strong>The Effective Engineer</strong>”) as the <code>append</code> parameter.</p><p>Well, enough about <code>Lists</code><strong><em>.</em></strong> Let’s talk about another data structure.</p><h3 id="dictionary-key-value-data-structure">Dictionary: Key-Value Data Structure</h3><p>Now we know that <code>Lists</code> are indexed with integer numbers. But what if we don’t want to use integer numbers as indices? Some data structures that we can use are numeric, string, or other types of indices.</p><p>Let’s learn about the <code>Dictionary</code> data structure. <code>Dictionary</code> is a collection of key-value pairs. Here’s what it looks like:</p><pre><code class="language-py">dictionary_example = {
"key1": "value1",
"key2": "value2",
"key3": "value3"
}</code></pre><p>The <strong>key</strong> is the index pointing to the<strong><em> </em>value</strong>. How do we access the <code>Dictionary</code> <strong>value</strong>? You guessed it — using the <strong>key</strong>. Let’s try it:</p><pre><code class="language-py">dictionary_tk = {
"name": "Leandro",
"nickname": "Tk",
"nationality": "Brazilian"
}
print("My name is %s" %(dictionary_tk["name"])) # My name is Leandro
print("But you can call me %s" %(dictionary_tk["nickname"])) # But you can call me Tk
print("And by the way I'm %s" %(dictionary_tk["nationality"])) # And by the way I'm Brazilian</code></pre><p>I created a <code>Dictionary</code> about me. My name, nickname, and nationality. Those attributes are the <code>Dictionary</code> <strong>keys</strong>.</p><p>As we learned how to access the <code>List</code> using index, we also use indices (<strong>keys</strong> in the <code>Dictionary</code> context) to access the <strong>value</strong> stored in the <code>Dictionary</code>.</p><p>In the example, I printed a phrase about me using all the values stored in the <code>Dictionary</code>. Pretty simple, right?</p><p>Another cool thing about <code>Dictionary</code> is that we can use anything as the value. In the <code>Dictionary</code><strong><em> </em></strong>I created, I want to add the <strong>key</strong> “age” and my real integer age in it:</p><pre><code class="language-py">dictionary_tk = {
"name": "Leandro",
"nickname": "Tk",
"nationality": "Brazilian",
"age": 24
}
print("My name is %s" %(dictionary_tk["name"])) # My name is Leandro
print("But you can call me %s" %(dictionary_tk["nickname"])) # But you can call me Tk
print("And by the way I'm %i and %s" %(dictionary_tk["age"], dictionary_tk["nationality"])) # And by the way I'm Brazilian</code></pre><p>Here we have a <strong>key</strong> (age) <strong>value</strong> (24) pair using string as the <strong>key</strong> and integer as the <strong>value</strong>.</p><p>As we did with <code>Lists</code>, let’s learn how to add elements to a <code>Dictionary</code>. The <strong>key<em> </em></strong>pointing to a<strong><em> </em>value</strong> is a big part of what <code>Dictionary</code> is. This is also true when we are talking about adding elements to it:</p><pre><code class="language-py">dictionary_tk = {
"name": "Leandro",
"nickname": "Tk",
"nationality": "Brazilian"
}
dictionary_tk['age'] = 24
print(dictionary_tk) # {'nationality': 'Brazilian', 'age': 24, 'nickname': 'Tk', 'name': 'Leandro'}
</code></pre><p>We just need to assign a <strong>value</strong> to a <code>Dictionary</code><strong><em> </em>key</strong>. Nothing complicated here, right?</p><h3 id="iteration-looping-through-data-structures">Iteration: Looping Through Data Structures</h3><p>As we learned in the <a href="https://medium.com/the-renaissance-developer/python-101-the-basics-441136fb7cc3" rel="noopener"><strong>Python Basics</strong></a>, the <code>List</code> iteration is very simple. We <code>Python</code><strong><em> </em></strong>developers commonly use <code>For</code> looping. Let’s do it:</p><pre><code class="language-py">bookshelf = [
"The Effective Engineer",
"The 4-hour Workweek",
"Zero to One",
"Lean Startup",
"Hooked"
]
for book in bookshelf:
print(book)</code></pre><p>So for each book in the bookshelf, we (<strong>can do everything with it</strong>) print it. Pretty simple and intuitive. That’s Python.</p><p>For a hash data structure, we can also use the <code>for</code> loop, but we apply the <code>key</code> :</p><pre><code class="language-py">dictionary = { "some_key": "some_value" }
for key in dictionary:
print("%s --&gt; %s" %(key, dictionary[key]))
# some_key --&gt; some_value</code></pre><p>This is an example how to use it. For each <code>key</code> in the <code>dictionary</code> , we <code>print</code> the <code>key</code> and its corresponding <code>value</code>.</p><p>Another way to do it is to use the <code>iteritems</code> method.</p><pre><code class="language-py">dictionary = { "some_key": "some_value" }
for key, value in dictionary.items():
print("%s --&gt; %s" %(key, value))
# some_key --&gt; some_value</code></pre><p>We did name the two parameters as <code>key</code> and <code>value</code>, but it is not necessary. We can name them anything. Let’s see it:</p><pre><code class="language-py">dictionary_tk = {
"name": "Leandro",
"nickname": "Tk",
"nationality": "Brazilian",
"age": 24
}
for attribute, value in dictionary_tk.items():
print("My %s is %s" %(attribute, value))
# My name is Leandro
# My nickname is Tk
# My nationality is Brazilian
# My age is 24</code></pre><p>We can see we used attribute as a parameter for the <code>Dictionary</code> <code>key</code>, and it works properly. Great!</p><h3 id="classes-objects">Classes &amp; Objects</h3><h4 id="a-little-bit-of-theory-">A little bit of theory:</h4><p><strong>Objects</strong> are a representation of real world objects like cars, dogs, or bikes. The objects share two main characteristics: <strong>data</strong> and <strong>behavior</strong>.</p><p>Cars have <strong>data,</strong> like number of wheels, number of doors, and seating capacity They also exhibit <strong>behavior</strong>: they can accelerate, stop, show how much fuel is left, and so many other things.</p><p>We identify <strong>data</strong> as <strong>attributes</strong> and <strong>behavior</strong> as <strong>methods</strong> in object-oriented programming. Again:</p><p>Data → Attributes and Behavior → Methods</p><p>And a <strong>Class</strong> is the blueprint from which individual objects are created. In the real world, we often find many objects with the same type. Like cars. All the same make and model (and all have an engine, wheels, doors, and so on). Each car was built from the same set of blueprints and has the same components.</p><h4 id="python-object-oriented-programming-mode-on">Python Object-Oriented Programming mode: ON</h4><p>Python, as an Object-Oriented programming language, has these concepts: <strong>class</strong> and <strong>object</strong>.</p><p>A class is a blueprint, a model for its objects.</p><p>So again, a class it is just a model, or a way to define <strong>attributes</strong> and <strong>behavior</strong> (as we talked about in the theory section). As an example, a vehicle <strong>class</strong> has its own <strong>attributes</strong> that define what <strong>objects </strong>are vehicles. The number of wheels, type of tank, seating capacity, and maximum velocity are all attributes of a vehicle.</p><p>With this in mind, let’s look at Python syntax for <strong>classes</strong>:</p><pre><code class="language-py">class Vehicle:
pass</code></pre><p>We define classes with a <strong>class statement — </strong>and that’s it. Easy, isn’t it?</p><p><strong>Objects</strong> are instances of a <strong>class</strong>. We create an instance by naming the class.</p><pre><code class="language-py">car = Vehicle()
print(car) # &lt;__main__.Vehicle instance at 0x7fb1de6c2638&gt;</code></pre><p>Here <code>car</code> is an <strong>object</strong> (or instance) of the <strong>class</strong> <code>Vehicle</code>.</p><p>Remember that our vehicle <strong>class</strong> has four <strong>attributes</strong>: number of wheels, type of tank, seating capacity, and maximum velocity. We set all these <strong>attributes</strong> when creating a vehicle <strong>object</strong>. So here, we define our <strong>class</strong> to receive data when it initiates it:</p><pre><code class="language-py">class Vehicle:
def __init__(self, number_of_wheels, type_of_tank, seating_capacity, maximum_velocity):
self.number_of_wheels = number_of_wheels
self.type_of_tank = type_of_tank
self.seating_capacity = seating_capacity
self.maximum_velocity = maximum_velocity</code></pre><p>We use the <code>init</code> <strong>method</strong>. We call it a constructor method. So when we create the vehicle <strong>object</strong>, we can define these <strong>attributes</strong>. Imagine that we love the <strong>Tesla Model S,</strong> and we want to create this kind of <strong>object</strong>. It has four wheels, runs on electric energy, has space for five seats, and the maximum velocity is 250km/hour (155 mph). Let’s create this <strong>object:</strong></p><pre><code class="language-py">tesla_model_s = Vehicle(4, 'electric', 5, 250)</code></pre><p>Four wheels + electric “tank type” + five seats + 250km/hour maximum speed.</p><p>All attributes are set. But how can we access these attributes’ values? We <strong>send a message to the object asking about them</strong>. We call it a <strong>method</strong>. It’s the <strong>object’s behavior</strong>. Let’s implement it:</p><pre><code class="language-py">class Vehicle:
def __init__(self, number_of_wheels, type_of_tank, seating_capacity, maximum_velocity):
self.number_of_wheels = number_of_wheels
self.type_of_tank = type_of_tank
self.seating_capacity = seating_capacity
self.maximum_velocity = maximum_velocity
def number_of_wheels(self):
return self.number_of_wheels
def set_number_of_wheels(self, number):
self.number_of_wheels = number</code></pre><p>This is an implementation of two methods: <strong>number_of_wheels</strong> and <strong>set_number_of_wheels</strong>. We call it <code>getter</code> &amp; <code>setter</code>. Because the first gets the attribute value, and the second sets a new value for the attribute.</p><p>In Python, we can do that using <code>@property</code> (<code>decorators</code>) to define <code>getters</code> and <code>setters</code>. Let’s see it with code:</p><pre><code class="language-py">class Vehicle:
def __init__(self, number_of_wheels, type_of_tank, seating_capacity, maximum_velocity):
self.number_of_wheels = number_of_wheels
self.type_of_tank = type_of_tank
self.seating_capacity = seating_capacity
self.maximum_velocity = maximum_velocity
@property
def number_of_wheels(self):
return self.__number_of_wheels
@number_of_wheels.setter
def number_of_wheels(self, number):
self.__number_of_wheels = number</code></pre><p>And we can use these methods as attributes:</p><pre><code class="language-py">tesla_model_s = Vehicle(4, 'electric', 5, 250)
print(tesla_model_s.number_of_wheels) # 4
tesla_model_s.number_of_wheels = 2 # setting number of wheels to 2
print(tesla_model_s.number_of_wheels) # 2</code></pre><p>This is slightly different than defining methods. The methods work as attributes. For example, when we set the new number of wheels, we don’t apply two as a parameter, but set the value 2 to <code>number_of_wheels</code>. This is one way to write <code>pythonic</code> <code>getter</code> and <code>setter</code> code.</p><p>But we can also use methods for other things, like the “<strong>make_noise</strong>” method. Let’s see it:</p><pre><code class="language-py">class Vehicle:
def __init__(self, number_of_wheels, type_of_tank, seating_capacity, maximum_velocity):
self.number_of_wheels = number_of_wheels
self.type_of_tank = type_of_tank
self.seating_capacity = seating_capacity
self.maximum_velocity = maximum_velocity
def make_noise(self):
print('VRUUUUUUUM')</code></pre><p>When we call this method, it just returns a string <strong><em>“</em>VRRRRUUUUM.<em>”</em></strong></p><pre><code class="language-py">tesla_model_s = Vehicle(4, 'electric', 5, 250)
tesla_model_s.make_noise() # VRUUUUUUUM</code></pre><h3 id="encapsulation-hiding-information">Encapsulation: Hiding Information</h3><p>Encapsulation is a mechanism that restricts direct access to objects’ data and methods. But at the same time, it facilitates operation on that data (objects’ methods).</p><blockquote>“Encapsulation can be used to hide data members and members function. Under this definition, encapsulation means that the internal representation of an <a href="https://en.wikipedia.org/wiki/Object_(computer_science)" rel="noopener">object</a> is generally hidden from view outside of the object’s definition.” — Wikipedia</blockquote><p>All internal representation of an object is hidden from the outside. Only the object can interact with its internal data.</p><p>First, we need to understand how <code>public</code> and <code>non-public</code> instance variables and methods work.</p><h4 id="public-instance-variables">Public Instance Variables</h4><p>For a Python class, we can initialize a <code>public instance variable</code> within our constructor method. Let’s see this:</p><p>Within the constructor method:</p><pre><code class="language-py">class Person:
def __init__(self, first_name):
self.first_name = first_name</code></pre><p>Here we apply the <code>first_name</code> value as an argument to the <code>public instance variable</code>.</p><pre><code class="language-py">tk = Person('TK')
print(tk.first_name) # =&gt; TK</code></pre><p>Within the class:</p><pre><code class="language-py">class Person:
first_name = 'TK'</code></pre><p>Here, we do not need to apply the <code>first_name</code> as an argument, and all instance objects will have a <code>class attribute</code> initialized with <code>TK</code>.</p><pre><code class="language-py">tk = Person()
print(tk.first_name) # =&gt; TK</code></pre><p>Cool. We have now learned that we can use <code>public instance variables</code> and <code>class attributes</code>. Another interesting thing about the <code>public</code> part is that we can manage the variable value. What do I mean by that? Our <code>object</code> can manage its variable value: <code>Get</code> and <code>Set</code> variable values.</p><p>Keeping the <code>Person</code> class in mind, we want to set another value to its <code>first_name</code> variable:</p><pre><code class="language-py">tk = Person('TK')
tk.first_name = 'Kaio'
print(tk.first_name) # =&gt; Kaio</code></pre><p>There we go. We just set another value (<code>kaio</code>) to the <code>first_name</code> instance variable and it updated the value. Simple as that. Since it’s a <code>public</code> variable, we can do that.</p><h4 id="non-public-instance-variable">Non-public Instance Variable</h4><blockquote>We don’t use the term “private” here, since no attribute is really private in Python (without a generally unnecessary amount of work). — <a href="https://www.python.org/dev/peps/pep-0008/#designing-for-inheritance" rel="noopener">PEP 8</a></blockquote><p>As the <code>public instance variable</code> , we can define the <code>non-public instance variable</code> both within the constructor method or within the class. The syntax difference is: for <code>non-public instance variables</code> , use an underscore (<code>_</code>) before the <code>variable</code> name.</p><blockquote>“‘Private’ instance variables that cannot be accessed except from inside an object don’t exist in Python. However, there is a convention that is followed by most Python code: a name prefixed with an underscore (e.g. <code>_spam</code>) should be treated as a non-public part of the API (whether it is a function, a method or a data member)” — <a href="https://docs.python.org/2/tutorial/classes.html#private-variables-and-class-local-references" rel="noopener">Python Software Foundation</a></blockquote><p>Here’s an example:</p><pre><code class="language-py">class Person:
def __init__(self, first_name, email):
self.first_name = first_name
self._email = email</code></pre><p>Did you see the <code>email</code> variable? This is how we define a <code>non-public variable</code> :</p><pre><code class="language-py">tk = Person('TK', 'tk@mail.com')
print(tk._email) # tk@mail.com</code></pre><blockquote>We can access and update it. <code>Non-public variables</code> are just a convention and should be treated as a non-public part of the API.</blockquote><p>So we use a method that allows us to do it inside our class definition. Let’s implement two methods (<code>email</code> and <code>update_email</code>) to understand it:</p><pre><code class="language-py">class Person:
def __init__(self, first_name, email):
self.first_name = first_name
self._email = email
def update_email(self, new_email):
self._email = new_email
def email(self):
return self._email</code></pre><p>Now we can update and access <code>non-public variables</code> using those methods. Let’s see:</p><pre><code class="language-py">tk = Person('TK', 'tk@mail.com')
print(tk.email()) # =&gt; tk@mail.com
# tk._email = 'new_tk@mail.com' -- treat as a non-public part of the class API
print(tk.email()) # =&gt; tk@mail.com
tk.update_email('new_tk@mail.com')
print(tk.email()) # =&gt; new_tk@mail.com</code></pre><ol><li>We initiated a new object with <code>first_name</code> TK and <code>email</code> tk@mail.com</li><li>Printed the email by accessing the <code>non-public variable</code> with a method</li><li>Tried to set a new <code>email</code> out of our class</li><li>We need to treat <code>non-public variable</code> as <code>non-public</code> part of the API</li><li>Updated the <code>non-public variable</code> with our instance method</li><li>Success! We can update it inside our class with the helper method</li></ol><h4 id="public-method">Public Method</h4><p>With <code>public methods</code>, we can also use them out of our class:</p><pre><code class="language-py">class Person:
def __init__(self, first_name, age):
self.first_name = first_name
self._age = age
def show_age(self):
return self._age</code></pre><p>Let’s test it:</p><pre><code class="language-py">tk = Person('TK', 25)
print(tk.show_age()) # =&gt; 25</code></pre><p>Great — we can use it without any problem.</p><h4 id="non-public-method">Non-public Method</h4><p>But with <code>non-public methods</code> we aren’t able to do it. Let’s implement the same <code>Person</code> class, but now with a <code>show_age</code> <code>non-public method</code> using an underscore (<code>_</code>).</p><pre><code class="language-py">class Person:
def __init__(self, first_name, age):
self.first_name = first_name
self._age = age
def _show_age(self):
return self._age</code></pre><p>And now, we’ll try to call this <code>non-public method</code> with our object:</p><pre><code class="language-py">tk = Person('TK', 25)
print(tk._show_age()) # =&gt; 25</code></pre><blockquote>We can access and update it. <code>Non-public methods</code> are just a convention and should be treated as a non-public part of the API.</blockquote><p>Here’s an example for how we can use it:</p><pre><code class="language-py">class Person:
def __init__(self, first_name, age):
self.first_name = first_name
self._age = age
def show_age(self):
return self._get_age()
def _get_age(self):
return self._age
tk = Person('TK', 25)
print(tk.show_age()) # =&gt; 25</code></pre><p>Here we have a <code>_get_age</code> <code>non-public method</code> and a <code>show_age</code> <code>public method</code>. The <code>show_age</code> can be used by our object (out of our class) and the <code>_get_age</code> only used inside our class definition (inside <code>show_age</code> method). But again: as a matter of convention.</p><h4 id="encapsulation-summary">Encapsulation Summary</h4><p>With encapsulation we can ensure that the internal representation of the object is hidden from the outside.</p><h3 id="inheritance-behaviors-and-characteristics">Inheritance: behaviors and characteristics</h3><p>Certain objects have some things in common: their behavior and characteristics.</p><p>For example, I inherited some characteristics and behaviors from my father. I inherited his eyes and hair as characteristics, and his impatience and introversion as behaviors.</p><p>In object-oriented programming, classes can inherit common characteristics (data) and behavior (methods) from another class.</p><p>Let’s see another example and implement it in Python.</p><p>Imagine a car. Number of wheels, seating capacity and maximum velocity are all attributes of a car. We can say that an<em> </em><strong>ElectricCar </strong>class inherits these same attributes from the regular <strong>Car</strong> class.</p><pre><code class="language-py">class Car:
def __init__(self, number_of_wheels, seating_capacity, maximum_velocity):
self.number_of_wheels = number_of_wheels
self.seating_capacity = seating_capacity
self.maximum_velocity = maximum_velocity</code></pre><p>Our <strong>Car</strong> class implemented:</p><pre><code class="language-py">my_car = Car(4, 5, 250)
print(my_car.number_of_wheels)
print(my_car.seating_capacity)
print(my_car.maximum_velocity)</code></pre><p>Once initiated, we can use all <code>instance variables</code> created. Nice.</p><p>In Python, we apply a <code>parent class</code> to the <code>child class</code> as a parameter. An <strong>ElectricCar</strong> class can inherit from our <strong>Car</strong> class.</p><pre><code class="language-py">class ElectricCar(Car):
def __init__(self, number_of_wheels, seating_capacity, maximum_velocity):
Car.__init__(self, number_of_wheels, seating_capacity, maximum_velocity)</code></pre><p>Simple as that. We don’t need to implement any other method, because this class already has it (inherited from <strong>Car</strong> class). Let’s prove it:</p><pre><code class="language-py">my_electric_car = ElectricCar(4, 5, 250)
print(my_electric_car.number_of_wheels) # =&gt; 4
print(my_electric_car.seating_capacity) # =&gt; 5
print(my_electric_car.maximum_velocity) # =&gt; 250</code></pre><p>Beautiful.</p><h3 id="that-s-it-">That’s it!</h3><p>We learned a lot of things about Python basics:</p><ul><li>How Python variables work</li><li>How Python conditional statements work</li><li>How Python looping (while &amp; for) works</li><li>How to use Lists: Collection | Array</li><li>Dictionary Key-Value Collection</li><li>How we can iterate through these data structures</li><li>Objects and Classes</li><li>Attributes as objects’ data</li><li>Methods as objects’ behavior</li><li>Using Python getters and setters &amp; property decorator</li><li>Encapsulation: hiding information</li><li>Inheritance: behaviors and characteristics</li></ul><p>Congrats! You completed this dense piece of content about Python.</p><p>If you want a complete Python course, learn more real-world coding skills and build projects, try <a href="https://onemonth.com/courses/python?campaignid=33447&amp;discount_code=TKPython1&amp;mbsy=lG6tv&amp;mbsy_source=7d89eeb0-0031-478c-a60c-6a96d762712a" rel="noopener"><strong><em>One Month Python Bootcamp</em></strong></a>. See you there ☺</p><p>For more stories and posts about my journey learning &amp; mastering programming, follow my publication <a href="https://medium.com/the-renaissance-developer" rel="noopener"><strong>The Renaissance Developer</strong></a>.</p><p>Have fun, keep learning, and always keep coding.</p><p>My <a href="https://twitter.com/LeandroTk_" rel="noopener">Twitter</a> &amp; <a href="https://github.com/LeandroTk" rel="noopener">Github</a>. ☺</p>
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
