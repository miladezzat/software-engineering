---
card: "/images/default.jpg"
tags: [Python]
description: "Python has become one of the fastest-growing programming lang"
author: "Milad E. Fahmy"
title: "The Ultimate Python Beginner s Handbook"
created: "2021-08-16T15:36:57+02:00"
modified: "2021-08-16T15:36:57+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-beginners-guide ">
<header class="post-full-header">
<h1 class="post-full-title">The Ultimate Python Beginner's Handbook</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/04/cover-post-smaller.png 300w,
/news/content/images/size/w600/2020/04/cover-post-smaller.png 600w,
/news/content/images/size/w1000/2020/04/cover-post-smaller.png 1000w,
/news/content/images/size/w2000/2020/04/cover-post-smaller.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/04/cover-post-smaller.png" alt="The Ultimate Python Beginner's Handbook">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Not only it is widely used, it is also an awesome language to tackle if you want to get into the world of programming.</p>
<p>This Python Guide for Beginners allows you to learn the core of the language in a matter of hours instead of weeks.</p>
<p>Quick info: <a href="https://renanmf.com/python-guide-beginners/">You can download a PDF version of this Python Guide for Beginners</a>.</p>
<p>Ready to dive in?</p>
<ol>
<li><a href="#introductiontopython">Introduction to Python</a></li>
<li><a href="#installingpython3">Installing Python 3</a></li>
<li><a href="#runningcode">Running Code</a></li>
<li><a href="#syntax">Syntax</a></li>
<li><a href="#comments">Comments</a></li>
<li><a href="#variables">Variables</a></li>
<li><a href="#types">Types</a></li>
<li><a href="#typecasting">Typecasting</a></li>
<li><a href="#userinput">User Input</a></li>
<li><a href="#operators">Operators</a></li>
<li><a href="#conditionals">Conditionals</a></li>
<li><a href="#lists">Lists</a></li>
<li><a href="#tuples">Tuples</a></li>
<li><a href="#sets">Sets</a></li>
<li><a href="#dictionaries">Dictionaries</a></li>
<li><a href="#whileloops">while Loops</a></li>
<li><a href="#forloops">for Loops</a></li>
<li><a href="#functions">Functions</a></li>
<li><a href="#scope">Scope</a></li>
<li><a href="#listcomprehensions">List Comprehensions</a></li>
<li><a href="#lambdafunctions">Lambda Functions</a></li>
<li><a href="#modules">Modules</a></li>
<li><a href="#if__name____main__">if <strong>name</strong> == '<strong>main</strong>'</a></li>
<li><a href="#files">Files</a></li>
<li><a href="#classesandobjects">Classes and Objects</a></li>
<li><a href="#inheritance">Inheritance</a></li>
<li><a href="#exceptions">Exceptions</a></li>
<li><a href="#conclusion">Conclusion</a></li>
</ol>
<p>Python was created in 1990 by Guido van Rossum in Holland.</p>
<p>One of the objectives of the language was to be accessible to non-programmers.</p>
<p>Python was also designed to be a second language for programmers to learn due to its low learning curve and ease of use.</p>
<p>Python runs on Mac, Linux, Windows, and many other platforms.</p>
<p>Python is:</p>
<ul>
<li>
<p>Interpreted: it can execute at runtime, and changes in a program are instantly perceptible. To be very technical, Python has a compiler. The difference when compared to Java or C++ is how transparent and automatic it is. With Python, we don't have to worry about the compilation step as it's done in real-time. The tradeoff is that interpreted languages are usually slower than compiled ones.</p>
</li>
<li>
<p>Semantically Dynamic: you don't have to specify types for variables and there is nothing that makes you do it.</p>
</li>
<li>
<p>Object-Oriented: everything in Python is an object. But you can choose to write code in an object-oriented, procedural, or even functional way.</p>
</li>
<li>
<p>High level: you don't have to deal with low-level machine details.</p>
</li>
</ul>
<p>Python has been growing a lot recently partly because of its many uses in the following areas:</p>
<ul>
<li>
<p>System scripting: it's a great tool to automate everyday repetitive tasks.</p>
</li>
<li>
<p>Data Analysis: it is a great language to experiment with and has tons of libraries and tools to handle data, create models, visualize results and even deploy solutions. This is used in areas like Finance, E-commerce, and Research.</p>
</li>
<li>
<p>Web Development: frameworks like Django and Flask allow the development of web applications, API's, and websites.</p>
</li>
<li>
<p>Machine Learning: Tensorflow and Pytorch are some of the libraries that allow scientists and the industry to develop and deploy Artificial Intelligence solutions in Image Recognition, Health, Self-driving cars, and many other fields.</p>
</li>
</ul>
<p>You can easily organize your code in modules and reuse them or share them with others.</p>
<p>Finally, we have to keep in mind that Python had breaking changes between versions 2 and 3. And since Python 2 support ended in 2020, this article is solely based on Python 3.</p>
<p>So let's get started.</p>
<p>If you use a Mac or Linux you already have Python installed. But Windows doesn't come with Python installed by default.</p>
<p>You also might have Python 2, and we are going to use Python 3. So you should check to see if you have Python 3 first.</p>
<p>Type the following in your terminal.</p>
<pre><code class="language-shell">python3 -V
</code></pre>
<p>Notice the uppercase <code>V</code>.</p>
<p>If your result is something similar to 'Python 3.x.y', for instance, <code>Python 3.8.1</code>, then you are ready to go.</p>
<p>If not, follow the next instructions according to your Operating System.</p>
<h2 id="installingpython3onwindows">Installing Python 3 on Windows</h2>
<p>Go to <a href="https://www.python.org/downloads/">https://www.python.org/downloads/</a>.</p>
<p>Download the latest version.</p>
<p>After the download, double-click the installer.</p>
<p>On the first screen, check the box indicating to "Add Python 3.x to PATH" and then click on "Install Now".</p>
<p>Wait for the installation process to finish until the next screen with the message "Setup was successful".</p>
<p>Click on "Close".</p>
<h2 id="installingpython3onmac">Installing Python 3 on Mac</h2>
<p>Install <a href="https://itunes.apple.com/br/app/xcode/id497799835">XCode</a> from the App Store.</p>
<p>Install the command line tools by running the following in your terminal.</p>
<pre><code class="language-shell">xcode-select --install
</code></pre>
<p>I recommend using Homebrew. Go to <a href="https://brew.sh/">https://brew.sh/</a> and follow the instructions on the first page to install it.</p>
<p>After installing Homebrew, run the following <code>brew</code> commands to install Python 3.</p>
<pre><code class="language-shell">brew update
brew install python3
</code></pre>
<p>Homebrew already adds Python 3 to the PATH, so you don't have to do anything else.</p>
<h2 id="installingpython3onlinux">Installing Python 3 on Linux</h2>
<p>To install using <code>apt</code>, available in Ubuntu and Debian, enter the following:</p>
<pre><code class="language-shell">sudo apt install python3
</code></pre>
<p>To install using <code>yum</code>, available in RedHat and CentOS, enter the following:</p>
<pre><code class="language-shell">sudo yum install python3
</code></pre>
<p>You can run Python code directly in the terminal as commands or you can save the code in a file with the <code>.py</code> extension and run the Python file.</p>
<h2 id="terminal">Terminal</h2>
<p>Running commands directly in the terminal is recommended when you want to run something simple.</p>
<p>Open the command line and type <code>python3</code></p>
<pre><code class="language-shell">renan@mypc:~$ python3
</code></pre>
<p>You should see something like this in your terminal indicating the version (in my case, Python 3.6.9), the operating system (I'm using Linux), and some basic commands to help you.</p>
<p>The <code>&gt;&gt;&gt;</code> tells us we are in the Python console.</p>
<pre><code class="language-shell">Python 3.6.9 (default, Nov  7 2019, 10:44:02)
[GCC 8.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
&gt;&gt;&gt;
</code></pre>
<p>Let's test it by running our first program to perform basic math and add two numbers.</p>
<pre><code class="language-shell">&gt;&gt;&gt; 2 + 2
</code></pre>
<p>The output is:</p>
<pre><code>4
</code></pre>
<p>To exit the Python console simply type <code>exit()</code>.</p>
<pre><code class="language-shell">&gt;&gt;&gt; exit()
</code></pre>
<h2 id="runningpyfiles">Running <code>.py</code> files</h2>
<p>If you have a complex program, with many lines of code, the Python console isn't the best option.</p>
<p>The alternative is simply to open a text editor, type the code, and save the file with a <code>.py</code> extension.</p>
<p>Let's do that, create a file called <code>second_program.py</code> with the following content.</p>
<pre><code class="language-python">print('Second Program')
</code></pre>
<p>The <code>print()</code> function prints a message on the screen.</p>
<p>The message goes inside the parentheses with either single quotes or double quotes, both work the same.</p>
<p>To run the program, on your terminal do the following:</p>
<pre><code class="language-shell">renan@mypc:~$ python3 second_program.py
</code></pre>
<p>The output is:</p>
<pre><code>Second Program
</code></pre>
<p>Python is known for its clean syntax.</p>
<p>The language avoids using unnecessary characters to indicate some specificity.</p>
<h2 id="semicolons">Semicolons</h2>
<p>Python doesn't use semicolons to finish lines. A new line is enough to tell the interpreter that a new command is beginning.</p>
<p>The <code>print()</code> method will display something.</p>
<p>In this example, we have two commands that will display the messages inside the single quotes.</p>
<pre><code class="language-python">print('First command')
print('Second command')
</code></pre>
<p>Output:</p>
<pre><code>First command
Second command
</code></pre>
<p>But the following is <strong>wrong</strong> due to the semicolons in the end:</p>
<pre><code class="language-python">print('First command');
print('Second command');
</code></pre>
<h2 id="indentation">Indentation</h2>
<p>Many languages use curly-brackets to define scope.</p>
<p>Python's interpreter uses only indentation to define when a scope ends and another one starts.</p>
<p>This means you have to be aware of white spaces at the beginning of each line -- they have meaning and might break your code if misplaced.</p>
<p>This definition of a function works:</p>
<pre><code class="language-python">def my_function():
print('First command')
</code></pre>
<p>This <strong>doesn't work</strong> because the indentation of the second line is missing and will throw an error:</p>
<pre><code class="language-python">def my_function():
print('First command')
</code></pre>
<h2 id="casesensitivityandvariables">Case sensitivity and variables</h2>
<p>Python is case sensitive. So the variables <code>name</code> and <code>Name</code> are not the same thing and store different values.</p>
<pre><code class="language-python">name = 'Renan'
Name = 'Moura'
</code></pre>
<p>As you can see, variables are easily created by just assigning values to them using the <code>=</code> symbol.</p>
<p>This means <code>name</code> stores 'Renan' and <code>Name</code> stores 'Moura'.</p>
<h2 id="comments">Comments</h2>
<p>Finally, to comment something in your code, use the hash mark <code>#</code>.</p>
<p>The commented part does not influence the program flow.</p>
<pre><code class="language-python"># this function prints something
def my_function():
print('First command')
</code></pre>
<p>This was just an overview. The details of each of these will become clearer in the next chapters with examples and broader explanations.</p>
<p>The purpose of comments is to explain what is happening in the code.</p>
<p>Comments are written along with your code but do not influence your program flow.</p>
<p>When you work by yourself, maybe comments don't feel like something you should write. After all, at the moment, you know the whys of every single line of code.</p>
<p>But what if new people come on board your project after a year and the project has 3 modules, each with 10,000 lines of code?</p>
<p>Think about people who don't know a thing about your app and who are suddenly having to maintain it, fix it, or add new features.</p>
<p>Remember, there is no single solution for a given problem. Your way of solving things is yours and yours only. If you ask 10 people to solve the same problem, they will come up with 10 different solutions.</p>
<p>If you want others to fully understand your reasoning, good code design is mandatory, but comments are an integral part of any codebase.</p>
<h2 id="howtowritecommentsinpython">How to Write Comments in Python</h2>
<p>The syntax of comments in Python is rather easy: just use the hash mark <code>#</code> symbol in front of the text you want to be a comment.</p>
<pre><code class="language-python">#This is a comment and it won't influence my program flow
</code></pre>
<p>You can use a comment to explain what some piece of code does.</p>
<pre><code class="language-python">#calculates the sum of any given two numbers
a + b
</code></pre>
<h2 id="multilinecomments">Multiline Comments</h2>
<p>Maybe you want to comment on something very complex or describe how some process works in your code.</p>
<p>In these cases, you can use multiline comments.</p>
<p>To do that, just use a single hash mark <code>#</code> for each line.</p>
<pre><code class="language-python">#Everything after the hash mark # is a comment
#This is a comment and it won't influence my program flow
#Calculates the cost of the project given variables a and b
#a is the time in months it will take until the project is finished
#b is how much money it will cost per month
a + b * 10
</code></pre>
<p>In any program, you need to store and manipulate data to create a flow or some specific logic.</p>
<p>That's what variables are for.</p>
<p>You can have a variable to store a name, another one to store the age of a person, or even use a more complex type to store all of this at once like a dictionary.</p>
<h2 id="creatingalsoknownasdeclaring">Creating, also known as Declaring</h2>
<p>Declaring a variable is a basic and straightforward operation in Python</p>
<p>Just pick a name and attribute a value to it using the <code>=</code> symbol.</p>
<pre><code class="language-python">name='Bob'
age=32
</code></pre>
<p>You can use the <code>print()</code> function to show the value of a variable.</p>
<pre><code class="language-python">print(name)
print(age)
</code></pre>
<pre><code>Bob
32
</code></pre>
<p>Notice that in Python there is no special word to declare a variable.</p>
<p>The moment you assign a value, the variable is created in memory.</p>
<p>Python also has dynamic typing, which means you don't have to tell it if your variable is a text or a number, for instance.</p>
<p>The interpreter infers the typing based on the value assigned.</p>
<p>If you need it, you can also re-declare a variable just by changing its value.</p>
<pre><code class="language-python">#declaring name as a string
name='Bob'
#re-declaring name as an int
name = 32
</code></pre>
<p>Keep in my mind, though, that this is not recommended since variables must have meaning and context.</p>
<p>If I have a variable called <code>name</code> I don't expect it to have a number stored in it.</p>
<h2 id="namingconventions">Naming Conventions</h2>
<p>Let's continue from the last section when I talked about meaning and context.</p>
<p>Don't use random variable names like <code>x</code> or <code>y</code>.</p>
<p>Say you want to store the time of a party, just call it <code>party_time</code>.</p>
<p>Oh, did you notice the underscore <code>_</code>?</p>
<p>By convention, if you want to use a variable name that is composed of two or more words, you separate them by underscores. This is called Snake Case.</p>
<p>Another option would be using CamelCase as in <code>partyTime</code>. This is very common in other languages, but not the convention in Python as stated before.</p>
<p>Variables are case sensitive, so <code>party_time</code> and <code>Party_time</code> are not the same. Also, keep in mind that the convention tells us to always use lower case.</p>
<p>Remember, use names that you can recall inside your program easily. Bad naming can cost you a lot of time and cause annoying bugs.</p>
<p>In summary, variable names:</p>
<ul>
<li>Are Case sensitive: <code>time</code> and <code>TIME</code> are not the same</li>
<li>Have to start with an underscore <code>_</code> or a letter (DO NOT start with a number)</li>
<li>Are allowed to have only numbers, letters and underscores. No special characters like: #, $, &amp;, @, etc.</li>
</ul>
<p>This, for instance, is <strong>not</strong> allowed: <code>party#time</code>, <code>10partytime</code>.</p>
<p>To store data in Python you need to use a variable. And every variable has its type depending on the value of the data stored.</p>
<p>Python has dynamic typing, which means you don't have to explicitly declare the type of your variable -- but if you want to, you can.</p>
<p>Lists, Tuples, Sets, and Dictionaries are all data types and have dedicated sections later on with more details, but we'll look at them briefly here.</p>
<p>This way I can show you the most important aspects and operations of each one in their own section while keeping this section more concise and focused on giving you a broad view of the main data types in Python.</p>
<h2 id="determiningthetype">Determining the Type</h2>
<p>First of all, let's learn how to determine the data type.</p>
<p>Just use the <code>type()</code> function and pass the variable of your choice as an argument, like the example below.</p>
<pre><code class="language-python">print(type(my_variable))
</code></pre>
<h2 id="boolean">Boolean</h2>
<p>The boolean type is one of the most basic types of programming.</p>
<p>A boolean type variable can only represent either <em>True</em> or <em>False</em>.</p>
<pre><code class="language-python">my_bool = True
print(type(my_bool))
my_bool = bool(1024)
print(type(my_bool))
</code></pre>
<pre><code>&lt;class 'bool'&gt;
&lt;class 'bool'&gt;
</code></pre>
<h2 id="numbers">Numbers</h2>
<p>There are three types of numeric types: int, float, and complex.</p>
<h3 id="integer">Integer</h3>
<pre><code class="language-python">my_int = 32
print(type(my_int))
my_int = int(32)
print(type(my_int))
</code></pre>
<pre><code>&lt;class 'int'&gt;
&lt;class 'int'&gt;
</code></pre>
<h3 id="float">Float</h3>
<pre><code class="language-python">my_float = 32.85
print(type(my_float))
my_float = float(32.85)
print(type(my_float))
</code></pre>
<pre><code>&lt;class 'float'&gt;
&lt;class 'float'&gt;
</code></pre>
<h3 id="complex">Complex</h3>
<pre><code class="language-python">my_complex_number = 32+4j
print(type(my_complex_number))
my_complex_number = complex(32+4j)
print(type(my_complex_number))
</code></pre>
<pre><code>&lt;class 'complex'&gt;
&lt;class 'complex'&gt;
</code></pre>
<h2 id="string">String</h2>
<p>The text type is one of the most commons types out there and is often called <em>string</em> or, in Python, just <code>str</code>.</p>
<pre><code class="language-python">my_city = "New York"
print(type(my_city))
#Single quotes have exactly
#the same use as double quotes
my_city = 'New York'
print(type(my_city))
#Setting the variable type explicitly
my_city = str("New York")
print(type(my_city))
</code></pre>
<pre><code>&lt;class 'str'&gt;
&lt;class 'str'&gt;
&lt;class 'str'&gt;
</code></pre>
<p>You can use the <code>+</code> operator to concatenate strings.</p>
<p>Concatenation is when you have two or more strings and you want to join them into one.</p>
<pre><code class="language-python">word1 = 'New '
word2 = 'York'
print(word1 + word2)
</code></pre>
<pre><code>New York
</code></pre>
<p>The string type has many built-in methods that let us manipulate them. I will demonstrate how some of these methods work.</p>
<p>The <code>len()</code> function returns the length of a string.</p>
<pre><code class="language-python">print(len('New York'))
</code></pre>
<pre><code>8
</code></pre>
<p>The <code>replace()</code> method replaces a part of the string with another. As an example, let's replace 'New' for 'Old'.</p>
<pre><code class="language-python">print('New York'.replace('New', 'Old'))
</code></pre>
<pre><code>Old York
</code></pre>
<p>The <code>upper()</code> method will return all characters as uppercase.</p>
<pre><code class="language-python">print('New York'.upper())
</code></pre>
<pre><code>NEW YORK
</code></pre>
<p>The <code>lower()</code> method does the opposite, and returns all characters as lowercase.</p>
<pre><code class="language-python">print('New York'.lower())
</code></pre>
<pre><code>new york
</code></pre>
<h2 id="lists">Lists</h2>
<p>A list has its items ordered and you can add the same item as many times as you want. An important detail is that lists are mutable.</p>
<p>Mutability means you can change a list after its creation by adding items, removing them, or even just changing their values. These operations will be demonstrated later in the section dedicated to Lists.</p>
<pre><code class="language-python">my_list = ["bmw", "ferrari", "maclaren"]
print(type(my_list))
my_list = list(("bmw", "ferrari", "maclaren"))
print(type(my_list))
</code></pre>
<pre><code>&lt;class 'list'&gt;
&lt;class 'list'&gt;
</code></pre>
<h2 id="tuples">Tuples</h2>
<p>A tuple is just like a list: ordered, and allows repetition of items.</p>
<p>There is just one difference: a tuple is immutable.</p>
<p>Immutability means you can't change a tuple after its creation. If you try to add an item or update one, for instance, the Python intepreter will show you an error. I will show that these errors occur later in the section dedicated to Tuples.</p>
<pre><code class="language-python">my_tuple = ("bmw", "ferrari", "maclaren")
print(type(my_tuple))
my_tuple = tuple(("bmw", "ferrari", "maclaren"))
print(type(my_tuple))
</code></pre>
<pre><code>&lt;class 'tuple'&gt;
&lt;class 'tuple'&gt;
</code></pre>
<h2 id="sets">Sets</h2>
<p>Sets don't guarantee the order of the items and are not indexed.</p>
<p>A key point when using sets: they don't allow repetition of an item.</p>
<pre><code class="language-python">my_set = {"bmw", "ferrari", "maclaren"}
print(type(my_set))
my_set = set(("bmw", "ferrari", "maclaren"))
print(type(my_set))
</code></pre>
<pre><code>&lt;class 'set'&gt;
&lt;class 'set'&gt;
</code></pre>
<h2 id="dictionaries">Dictionaries</h2>
<p>A dictionary doesn't guarantee the order of the elements and is mutable.</p>
<p>One important characteristic in dictionaries is that you can set your own access keys for each element.</p>
<pre><code class="language-python">my_dict = {"country" : "France", "worldcups" : 2}
print(type(my_dict))
my_dict = dict(country="France", worldcups=2)
print(type(my_dict))
</code></pre>
<pre><code>&lt;class 'dict'&gt;
&lt;class 'dict'&gt;
</code></pre>
<p>Typecasting allows you to convert between different types.</p>
<p>This way you can have an <code>int</code> turned into a <code>str</code>, or a <code>float</code> turned into an <code>int</code>, for instance.</p>
<h2 id="explicitconversion">Explicit conversion</h2>
<p>To cast a variable to a string just use the <code>str()</code> function.</p>
<pre><code class="language-python"># this is just a regular explicit intialization
my_str = str('32')
print(my_str)
# int to str
my_str = str(32)
print(my_str)
# float to str
my_str = str(32.0)
print(my_str)
</code></pre>
<pre><code>32
32
32.0
</code></pre>
<p>To cast a variable to an integer just use the <code>int()</code> function.</p>
<pre><code class="language-python"># this is just a regular explicit intialization
my_int = int(32)
print(my_int)
# float to int: rounds down to 3
my_int = int(3.2)
print(my_int)
# str to int
my_int = int('32')
print(my_int)
</code></pre>
<pre><code>32
3
32
</code></pre>
<p>To cast a variable to a float just use the <code>float()</code> function.</p>
<pre><code class="language-python"># this is an explicit intialization
my_float = float(3.2)
print(my_float)
# int to float
my_float = float(32)
print(my_float)
# str to float
my_float = float('32')
print(my_float)
</code></pre>
<pre><code>3.2
32.0
32.0
</code></pre>
<p>What I did above is called an <em>explicit</em> type conversion.</p>
<p>In some cases you don't need to do the conversion explicitly, since Python can do it by itself.</p>
<h2 id="implicitconversion">Implicit conversion</h2>
<p>The example below shows implicit conversion when adding an <code>int</code> and a <code>float</code>.</p>
<p>Notice that <code>my_sum</code> is <code>float</code>. Python uses <code>float</code> to avoid data loss since the <code>int</code> type can not represent the decimal digits.</p>
<pre><code class="language-python">my_int = 32
my_float = 3.2
my_sum = my_int + my_float
print(my_sum)
print(type(my_sum))
</code></pre>
<pre><code>35.2
&lt;class 'float'&gt;
</code></pre>
<p>On the other hand, in this example, when you add an <code>int</code> and a <code>str</code>, Python will not be able to make the implicit conversion, and the explicit type conversion is necessary.</p>
<pre><code class="language-python">my_int = 32
my_str = '32'
# explicit conversion works
my_sum = my_int + int(my_str)
print(my_sum)
#implicit conversion throws an error
my_sum = my_int + my_str
</code></pre>
<pre><code>64
Traceback (most recent call last):
File "&lt;stdin&gt;", line 1, in &lt;module&gt;
TypeError: unsupported operand type(s) for +: 'int' and 'str'
</code></pre>
<p>The same error is thrown when trying to add <code>float</code> and <code>str</code> types without making an explicit conversion.</p>
<pre><code class="language-python">my_float = 3.2
my_str = '32'
# explicit conversion works
my_sum = my_float + float(my_str)
print(my_sum)
#implicit conversion throws an error
my_sum = my_float + my_str
</code></pre>
<pre><code>35.2
Traceback (most recent call last):
File "&lt;stdin&gt;", line 1, in &lt;module&gt;
TypeError: unsupported operand type(s) for +: 'float' and 'str'
</code></pre>
<p>If you need to interact with a user when running your program in the command line (for example, to ask for a piece of information), you can use the <code>input()</code> function.</p>
<pre><code class="language-python">country = input("What is your country? ") #user enters 'Brazil'
print(country)
</code></pre>
<pre><code>Brazil
</code></pre>
<p>The captured value is always <code>string</code>. Just remember that you might need to convert it using typecasting.</p>
<pre><code class="language-python">age = input("How old are you? ") #user enters '29'
print(age)
print(type(age))
age = int(age)
print(type(age))
</code></pre>
<p>The output for each <code>print()</code> is:</p>
<pre><code>29
&lt;class 'str'&gt;
&lt;class 'int'&gt;
</code></pre>
<p>Notice the age 29 is captured as <code>string</code> and then converted explicitly to <code>int</code>.</p>
<p>In a programming language, operators are special symbols that you can apply to your variables and values in order to perform operations such as arithmetic/mathematical and comparison.</p>
<p>Python has lots of operators that you can apply to your variables and I will demonstrate the most used ones.</p>
<h2 id="arithmeticoperators">Arithmetic Operators</h2>
<p>Arithmetic operators are the most common type of operators and also the most recognizable ones.</p>
<p>They allow you to perform simple mathematical operations.</p>
<p>They are:</p>
<ul>
<li><code>+</code>: Addition</li>
<li><code>-</code>: Subtraction</li>
<li><code>*</code>: Multiplication</li>
<li><code>/</code>: Division</li>
<li><code>**</code>: Exponentiation</li>
<li><code>//</code>: Floor Division, rounds down the result of a division</li>
<li><code>%</code>: Modulus, gives you the remainder of a division</li>
</ul>
<p>Let's see a program that shows how each of them is used.</p>
<pre><code class="language-python">print('Addition:', 5 + 2)
print('Subtraction:', 5 - 2)
print('Multiplication:', 5 * 2)
print('Division:', 5 / 2)
print('Floor Division:', 5 // 2)
print('Exponentiation:', 5 ** 2)
print('Modulus:', 5 % 2)
</code></pre>
<pre><code>Addition: 7
Subtraction: 3
Multiplication: 10
Division: 2.5
Floor Division: 2
Exponentiation: 25
Modulus: 1
</code></pre>
<h3 id="concatenation">Concatenation</h3>
<p>Concatenation is when you have two or more strings and you want to join them into one.</p>
<p>This useful when you have information in multiple variables and want to combine them.</p>
<p>For instance, in this next example I combine two variables that contain my first name and my last name respectively to have my full name.</p>
<p>The <code>+</code> operator is also used to concatenate.</p>
<pre><code class="language-python">first_name = 'Renan '
last_name = 'Moura'
print(first_name + last_name)
</code></pre>
<pre><code>Renan Moura
</code></pre>
<p>Since concatenation is applied to strings, to concatenate strings with other types, you have to do an explicit typecast using <code>str()</code>.</p>
<p>I have to typecast the <code>int</code> value 30 to string with <code>str()</code> to concatenate it with the rest of the string.</p>
<pre><code class="language-python">age = 'I have ' + str(30) + ' years old'
print(age)
</code></pre>
<pre><code>I have 30 years old
</code></pre>
<h2 id="comparisonoperators">Comparison Operators</h2>
<p>Use comparison operators to compare two values.</p>
<p>These operators return either <code>True</code> or <code>False</code>.</p>
<p>They are:</p>
<ul>
<li><code>==</code>: Equal</li>
<li><code>!=</code>: Not equal</li>
<li><code>&gt;</code>: Greater than</li>
<li><code>&lt;</code>: Less than</li>
<li><code>&gt;=</code>: Greater than or equal to</li>
<li><code>&lt;=</code>: Less than or equal to</li>
</ul>
<p>Let's see a program that shows how each of them is used.</p>
<pre><code class="language-python">print('Equal:', 5 == 2)
print('Not equal:', 5 != 2)
print('Greater than:', 5 &gt; 2)
print('Less than:', 5 &lt; 2)
print('Greater than or equal to:', 5 &gt;= 2)
print('Less than or equal to:', 5 &lt;= 2)
</code></pre>
<pre><code>Equal: False
Not equal: True
Greater than: True
Less than: False
Greater than or equal to: True
Less than or equal to: False
</code></pre>
<h2 id="assignmentoperators">Assignment Operators</h2>
<p>As the name implies, these operators are used to assign values to variables.</p>
<p><code>x = 7</code> in the first example is a direct assignment storing the number <code>7</code> in the variable <code>x</code>.</p>
<p>The assignment operation takes the value on the right and assigns it to the variable on the left.</p>
<p>The other operators are simple shorthands for the Arithmetic Operators.</p>
<p>In the second example <code>x</code> starts with <code>7</code> and <code>x += 2</code> is just another way to write <code>x = x + 2</code>. This means the previous value of <code>x</code> is added by <code>2</code> and reassigned to <code>x</code> that is now equal to <code>9</code>.</p>
<ul>
<li><code>=</code>: simple assignment</li>
</ul>
<pre><code class="language-python">x = 7
print(x)
</code></pre>
<pre><code>7
</code></pre>
<ul>
<li><code>+=</code>: addition and assignment</li>
</ul>
<pre><code class="language-python">x = 7
x += 2
print(x)
</code></pre>
<pre><code>9
</code></pre>
<ul>
<li><code>-=</code>: subtraction and assignment</li>
</ul>
<pre><code class="language-python">x = 7
x -= 2
print(x)
</code></pre>
<pre><code>5
</code></pre>
<ul>
<li><code>*=</code>: multiplication and assignment</li>
</ul>
<pre><code class="language-python">x = 7
x *= 2
print(x)
</code></pre>
<pre><code>14
</code></pre>
<ul>
<li><code>/=</code>: division and assignment</li>
</ul>
<pre><code class="language-python">x = 7
x /= 2
print(x)
</code></pre>
<pre><code>3.5
</code></pre>
<ul>
<li><code>%=</code>: modulus and assignment</li>
</ul>
<pre><code class="language-python">x = 7
x %= 2
print(x)
</code></pre>
<pre><code>1
</code></pre>
<ul>
<li><code>//=</code>: floor division and assignment</li>
</ul>
<pre><code class="language-python">x = 7
x //= 2
print(x)
</code></pre>
<pre><code>3
</code></pre>
<ul>
<li><code>**=</code>: exponentiation and assignment</li>
</ul>
<pre><code class="language-python">x = 7
x **= 2
print(x)
</code></pre>
<pre><code>49
</code></pre>
<h2 id="logicaloperators">Logical Operators</h2>
<p>Logical operators are used to combine statements applying boolean algebra.</p>
<p>They are:</p>
<ul>
<li><code>and</code>: <code>True</code> only when both statements are true</li>
<li><code>or</code>: <code>False</code> only when both x and y are false</li>
<li><code>not</code>: The <code>not</code> operator simply inverts the input, <code>True</code> becomes <code>False</code> and vice versa.</li>
</ul>
<p>Let's see a program that shows how each one is used.</p>
<pre><code class="language-python">x = 5
y = 2
print(x == 5 and y &gt; 3)
print(x == 5 or y &gt; 3)
print(not (x == 5))
</code></pre>
<pre><code>False
True
False
</code></pre>
<h2 id="membershipoperators">Membership Operators</h2>
<p>These operators provide an easy way to check if a certain object is present in a sequence: <code>string</code>, <code>list</code>, <code>tuple</code>, <code>set</code>, and <code>dictionary</code>.</p>
<p>They are:</p>
<ul>
<li><code>in</code>: returns <code>True</code> if the object is present</li>
<li><code>not in</code>: returns <code>True</code> if the object is not present</li>
</ul>
<p>Let's see a program that shows how each one is used.</p>
<pre><code class="language-python">number_list = [1, 2, 4, 5, 6]
print( 1 in number_list)
print( 5 not in number_list)
print( 3 not in number_list)
</code></pre>
<pre><code>True
False
True
</code></pre>
<p>Conditionals are one of the cornerstones of any programming language.</p>
<p>They allow you to control the program flow according to specific conditions you can check.</p>
<h2 id="theifstatement">The <code>if</code> statement</h2>
<p>The way you implement a conditional is through the <code>if</code> statement.</p>
<p>The general form of an <code>if</code> statement is:</p>
<pre><code class="language-python">if expression:
statement
</code></pre>
<p>The <code>expression</code> contains some logic that returns a boolean, and the <code>statement</code> is executed only if the return is <code>True</code>.</p>
<p>A simple example:</p>
<pre><code class="language-python">bob_age = 32
sarah_age = 29
if bob_age &gt; sarah_age:
print('Bob is older than Sarah')
</code></pre>
<pre><code>Bob is older than Sarah
</code></pre>
<p>We have two variables indicating the ages of Bob and Sarah. The condition in plain English says "if Bob's age is greater than Sarah's age, then print the phrase 'Bob is older than Sarah'".</p>
<p>Since the condition returns <code>True</code>, the phrase will be printed on the console.</p>
<h2 id="theifelseandelifstatements">The <code>if else</code> and <code>elif</code> statements</h2>
<p>In our last example, the program only does something if the condition returns <code>True</code>.</p>
<p>But we also want it to do something if it returns <code>False</code> or even check a second or third condition if the first one wasn't met.</p>
<p>In this example, we swapped Bob's and Sarah's age. The first condition will return <code>False</code> since Sarah is older now, and then the program will print the phrase after the <code>else</code> instead.</p>
<pre><code class="language-python">bob_age = 29
sarah_age = 32
if bob_age &gt; sarah_age:
print('Bob is older than Sarah')
else:
print('Bob is younger than Sarah')
</code></pre>
<pre><code>Bob is younger than Sarah
</code></pre>
<p>Now, consider the example below with the <code>elif</code>.</p>
<pre><code class="language-python">bob_age = 32
sarah_age = 32
if bob_age &gt; sarah_age:
print('Bob is older than Sarah')
elif bob_age == sarah_age:
print('Bob and Sarah have the same age')
else:
print('Bob is younger than Sarah')
</code></pre>
<pre><code>Bob and Sarah have the same age
</code></pre>
<p>The purpose of the <code>elif</code> is to provide a new condition to be checked before the <code>else</code> is executed.</p>
<p>Once again we changed their ages and now both are 32 years old.</p>
<p>As such, the condition in the <code>elif</code> is met. Since both have the same age the program will print "Bob and Sarah have the same age".</p>
<p>Notice you can have as many <code>elif</code>s as you want, just put them in sequence.</p>
<pre><code class="language-python">bob_age = 32
sarah_age = 32
if bob_age &gt; sarah_age:
print('Bob is older than Sarah')
elif bob_age &lt; sarah_age:
print('Bob is younger than Sarah')
elif bob_age == sarah_age:
print('Bob and Sarah have the same age')
else:
print('This one is never executed')
</code></pre>
<pre><code>Bob and Sarah have the same age
</code></pre>
<p>In this example, the <code>else</code> is never executed because all the possibilities are covered in the previous conditions and thus could be removed.</p>
<h2 id="nestedconditionals">Nested conditionals</h2>
<p>You might need to check more than one conditional for something to happen.</p>
<p>In this case, you can nest your <code>if</code> statements.</p>
<p>For instance, the second phrase "Bob is the oldest" is printed only if both <code>if</code>s pass.</p>
<pre><code class="language-python">bob_age = 32
sarah_age = 28
mary_age = 25
if bob_age &gt; sarah_age:
print('Bob is older than Sarah')
if bob_age &gt; mary_age:
print('Bob is the oldest')
</code></pre>
<pre><code>Bob is older than Sarah
Bob is the oldest
</code></pre>
<p>Or, depending on the logic, make it simpler with Boolean Algebra.</p>
<p>This way, your code is smaller, more readable and easier to maintain.</p>
<pre><code class="language-python">bob_age = 32
sarah_age = 28
mary_age = 25
if bob_age &gt; sarah_age and bob_age &gt; mary_age:
print('Bob is the oldest')
</code></pre>
<pre><code>Bob is the oldest
</code></pre>
<h2 id="ternaryoperators">Ternary Operators</h2>
<p>The ternary operator is a one-line <code>if</code> statement.</p>
<p>It's very handy for simple conditions.</p>
<p>This is how it looks:</p>
<pre><code class="language-python">&lt;expression&gt; if &lt;condition&gt; else &lt;expression&gt;
</code></pre>
<p>Consider the following Python code:</p>
<pre><code class="language-python">a = 25
b = 50
x = 0
y = 1
result = x if a &gt; b else y
print(result)
</code></pre>
<pre><code>1
</code></pre>
<p>Here we use four variables, <code>a</code> and <code>b</code> are for the condition, while <code>x</code> and <code>y</code> represent the expressions.</p>
<p><code>a</code> and <code>b</code> are the values we are checking against each other to evaluate some condition. In this case, we are checking if <code>a</code> is greater than <code>b</code>.</p>
<p>If the expression holds true, i.e., <code>a</code> is greater than <code>b</code>, then the value of <code>x</code> will be attributed to <code>result</code> which will be equal to 0.</p>
<p>However, if <code>a</code> is less than <code>b</code>, then we have the value of <code>y</code> assigned to <code>result</code>, and <code>result</code> will hold the value <code>1</code>.</p>
<p>Since <code>a</code> is less than <code>b</code>, 25 &lt; 50, <code>result</code> will have <code>1</code> as final value from <code>y</code>.</p>
<p>The easy way to remember how the condition is evaluated is to read it in plain English.</p>
<p>Our example would read: <code>result</code> will be <code>x</code> if <code>a</code> is greater than <code>b</code> otherwise <code>y</code>.</p>
<p>As promised in the <a href="#types">Types</a> section, this section and the next three about Tuples, Sets, and Dictionaries will have more in depth explanations of each of them since they are very important and broadly used structures in Python to organize and deal with data.</p>
<p>A list has its items ordered and you can add the same item as many times as you want.</p>
<p>An important detail is that lists are mutable.</p>
<p>Mutability means you can change a list after its creation by adding items, removing them, or even just changing their values.</p>
<h3 id="initialization">Initialization</h3>
<h4 id="emptylist">Empty List</h4>
<pre><code class="language-python">people = []
</code></pre>
<h4 id="listwithinitialvalues">List with initial values</h4>
<pre><code class="language-python">people = ['Bob', 'Mary']
</code></pre>
<h3 id="addinginalist">Adding in a List</h3>
<p>To add an item in the end of a list, use <code>append()</code>.</p>
<pre><code class="language-python">people = ['Bob', 'Mary']
people.append('Sarah')
print(people)
</code></pre>
<pre><code>['Bob', 'Mary', 'Sarah']
</code></pre>
<p>To specify the position for the new item, use the <code>insert()</code> method.</p>
<pre><code class="language-python">people = ['Bob', 'Mary']
people.insert(0, 'Sarah')
print(people)
</code></pre>
<pre><code>['Sarah', 'Bob', 'Mary']
</code></pre>
<h3 id="updatinginalist">Updating in a List</h3>
<p>Specify the position of the item to update and set the new value</p>
<pre><code class="language-python">people = ['Bob', 'Mary']
people[1] = 'Sarah'
print(people)
</code></pre>
<pre><code>['Bob', 'Sarah']
</code></pre>
<h3 id="deletinginalist">Deleting in a List</h3>
<p>Use the <code>remove()</code> method to delete the item given as an argument.</p>
<pre><code class="language-python">people = ['Bob', 'Mary']
people.remove('Bob')
print(people)
</code></pre>
<pre><code>['Mary']
</code></pre>
<p>To delete everybody, use the <code>clear()</code> method:</p>
<pre><code class="language-python">people = ['Bob', 'Mary']
people.clear()
</code></pre>
<h3 id="retrievinginalist">Retrieving in a List</h3>
<p>Use the index to reference the item.</p>
<p>Remember that the index starts at 0.</p>
<p>So to access the second item use the index 1.</p>
<pre><code class="language-python">people = ['Bob', 'Mary']
print(people[1])
</code></pre>
<pre><code>Mary
</code></pre>
<h3 id="checkifagivenitemalreadyexistsinalist">Check if a given item already exists in a List</h3>
<pre><code class="language-python">people = ['Bob', 'Mary']
if 'Bob' in people:
print('Bob exists!')
else:
print('There is no Bob!')
</code></pre>
<p>A tuple is similar to a list: it's ordered, and allows repetition of items.</p>
<p>There is just one difference: a tuple is immutable.</p>
<p>Immutability, if you remember, means you can't change a tuple after its creation. If you try to add an item or update one, for instance, the Python interpreter will show you an error.</p>
<h3 id="initialization">Initialization</h3>
<h4 id="emptytuple">Empty Tuple</h4>
<pre><code class="language-python">people = ()
</code></pre>
<h4 id="tuplewithinitialvalues">Tuple with initial values</h4>
<pre><code class="language-python">people = ('Bob', 'Mary')
</code></pre>
<h3 id="addinginatuple">Adding in a Tuple</h3>
<p>Tuples are immutable. This means that if you try to add an item, you will see an error.</p>
<pre><code class="language-python">people = ('Bob', 'Mary')
people[2] = 'Sarah'
</code></pre>
<pre><code>Traceback (most recent call last):
File "&lt;stdin&gt;", line 1, in &lt;module&gt;
TypeError: 'tuple' object does not support item assignment
</code></pre>
<h3 id="updatinginatuple">Updating in a Tuple</h3>
<p>Updating an item will also return an error.</p>
<p>But there is a trick: you can convert into a list, change the item, and then convert it back to a tuple.</p>
<pre><code class="language-python">people = ('Bob', 'Mary')
people_list = list(people)
people_list[1] = 'Sarah'
people = tuple(people_list)
print(people)
</code></pre>
<pre><code>('Bob', 'Sarah')
</code></pre>
<h3 id="deletinginatuple">Deleting in a Tuple</h3>
<p>For the same reason you can't add an item, you also can't delete an item, since they are immutable.</p>
<h3 id="retrievinginatuple">Retrieving in a Tuple</h3>
<p>Use the index to reference the item.</p>
<pre><code class="language-python">people = ('Bob', 'Mary')
print(people[1])
</code></pre>
<pre><code>Mary
</code></pre>
<h3 id="checkifagivenitemalreadyexistsinatuple">Check if a given item already exists in a Tuple</h3>
<pre><code class="language-python">people = ('Bob', 'Mary')
if 'Bob' in people:
print('Bob exists!')
else:
print('There is no Bob!')
</code></pre>
<p>Sets don't guarantee the order of items and are not indexed.</p>
<p>A key point when using sets: they don't allow repetition of an item.</p>
<h3 id="initialization">Initialization</h3>
<h4 id="emptyset">Empty Set</h4>
<pre><code class="language-python">people = set()
</code></pre>
<h4 id="setwithinitialvalues">Set with initial values</h4>
<pre><code class="language-python">people = {'Bob', 'Mary'}
</code></pre>
<h3 id="addinginaset">Adding in a Set</h3>
<p>Use the <code>add()</code> method to add one item.</p>
<pre><code class="language-python">people.add('Sarah')
</code></pre>
<p>Use the <code>update()</code> method to add multiple items at once.</p>
<pre><code class="language-python">people.update(['Carol', 'Susan'])
</code></pre>
<p>Remember, Sets do not allow repetition, so if you add 'Mary' again, nothing changes.</p>
<pre><code class="language-python">people = {'Bob', 'Mary'}
people.add('Mary')
print(people)
</code></pre>
<pre><code>{'Bob', 'Mary'}
</code></pre>
<h3 id="updatinginaset">Updating in a Set</h3>
<p>Items in a set are not mutable. You have to either add or delete an item.</p>
<h3 id="deletinginaset">Deleting in a Set</h3>
<p>To remove Bob from the dictionary:</p>
<pre><code class="language-python">people = {'Bob', 'Mary'}
people.remove('Bob')
print(people)
</code></pre>
<pre><code>{'Mary'}
</code></pre>
<p>To delete everybody:</p>
<pre><code class="language-python">people.clear()
</code></pre>
<h3 id="checkifagivenitemalreadyexistsinaset">Check if a given item already exists in a set</h3>
<pre><code class="language-python">people = {'Bob', 'Mary'}
if 'Bob' in people:
print('Bob exists!')
else:
print('There is no Bob!')
</code></pre>
<p>The dictionary doesn't guarantee the order of the elements and it is mutable.</p>
<p>One important characteristic of dictionaries is that you can set your customized access keys for each element.</p>
<h3 id="initializationofadictionary">Initialization of a Dictionary</h3>
<h4 id="emptydictionary">Empty Dictionary</h4>
<pre><code class="language-python">people = {}
</code></pre>
<h4 id="dictionarywithinitialvalues">Dictionary with initial values</h4>
<pre><code class="language-python">people = {'Bob':30, 'Mary':25}
</code></pre>
<h3 id="addinginadictionary">Adding in a Dictionary</h3>
<p>If the key doesn't exist yet, it is appended to the dictionary.</p>
<pre><code class="language-python">people['Sarah']=32
</code></pre>
<h3 id="updatingadictionary">Updating a Dictionary</h3>
<p>If the key already exists, the value is just updated.</p>
<pre><code class="language-python">#Bob's age is 28 now
people['Bob']=28
</code></pre>
<p>Notice that the code is pretty much the same.</p>
<h3 id="deletinginadictionary">Deleting in a Dictionary</h3>
<p>To remove Bob from the dictionary:</p>
<pre><code class="language-python">people.pop('Bob')
</code></pre>
<p>To delete everybody:</p>
<pre><code class="language-python">people.clear()
</code></pre>
<h3 id="retrievinginadictionary">Retrieving in a Dictionary</h3>
<pre><code class="language-python">bob_age = people['Bob']
print(bob_age)
</code></pre>
<pre><code>30
</code></pre>
<h3 id="checkifagivenkeyalreadyexistsinadictionary">Check if a given key already exists in a Dictionary</h3>
<pre><code class="language-python">if 'Bob' in people:
print('Bob exists!')
else:
print('There is no Bob!')
</code></pre>
<p>Loops are used when you need to repeat a block of code a certain number of times or apply the same logic over each item in a collection.</p>
<p>There are two types of loops: <code>for</code> and <code>while</code>.</p>
<p>You will learn about <code>for</code> loops in the next section.</p>
<h2 id="basicsyntax">Basic Syntax</h2>
<p>The basic syntax of a <code>while</code> loop is as below.</p>
<pre><code class="language-python">while condition:
statement
</code></pre>
<p>The loop will continue <em>while</em> the condition is <code>True</code>.</p>
<h2 id="thesquareofanumberis">The square of a number is</h2>
<p>The example below takes each value of <code>number</code> and calculates its squared value.</p>
<pre><code class="language-python">number = 1
while number &lt;= 5:
print(number, 'squared is', number**2)
number = number + 1
</code></pre>
<pre><code>1 squared is 1
2 squared is 4
3 squared is 9
4 squared is 16
5 squared is 25
</code></pre>
<p>You can use any variable name, but I chose <code>number</code> because it makes sense in the context. A common generic choice would be simply <code>i</code>.</p>
<p>The loop will go on until <code>number</code> (initialized with 1) is less than or equal to 5.</p>
<p>Notice that after the <code>print()</code> command, the variable <code>number</code> is incremented by 1 to take the next value.</p>
<p>If you don't do the incrementation you will have an infinite loop since <code>number</code> will never reach a value greater than 5. This is a very important detail!</p>
<h2 id="elseblock"><code>else</code> block</h2>
<p>When the condition returns <code>False</code>, the <code>else</code> block will be called.</p>
<pre><code class="language-python">number = 1
while number &lt;= 5:
print(number, 'squared is', number**2)
number = number + 1
else:
print('No numbers left!')
</code></pre>
<pre><code>1 squared is 1
2 squared is 4
3 squared is 9
4 squared is 16
5 squared is 25
No numbers left!
</code></pre>
<p>Notice the phrase 'No numbers left!' is printed after the loop ends, that is after the condition <code>number &lt;= 5</code> evaluates to <code>False</code>.</p>
<h2 id="howtobreakoutofawhileloopinpython">How to break out of a <code>while</code> loop in Python</h2>
<p>Simply use the <code>break</code> keyword, and the loop will stop its execution.</p>
<pre><code class="language-python">number = 1
while number &lt;= 5:
print(number, 'squared is', number**2)
number = number + 1
if number == 4:
break
</code></pre>
<pre><code>1 squared is 1
2 squared is 4
3 squared is 9
</code></pre>
<p>The loop runs normally, and when <code>number</code> reaches 4 the <code>if</code> statement evaluates to <code>True</code> and the <code>break</code> command is called. This finishes the loop before the squared value of the numbers 4 and 5 are calculated.</p>
<h2 id="howtoskipaniteminawhileloop">How to skip an item in a <code>while</code> loop</h2>
<p>The <code>continue</code> will do that for you.</p>
<p>I had to invert the order of the <code>if</code> statement and the <code>print()</code> to show how it works properly.</p>
<pre><code class="language-python">number = 0
while number &lt; 5:
number = number + 1
if number == 4:
continue
print(number, 'squared is', number**2)
</code></pre>
<pre><code>1 squared is 1
2 squared is 4
3 squared is 9
5 squared is 25
</code></pre>
<p>The program always checks if 4 is the current value of <code>number</code>. If it is, the square of 4 won't be calculated and the <code>continue</code> will skip to the next iteration when the value of <code>number</code> is 5.<br>
*</p>
<p><code>for</code> loops are similar to <code>while</code> loops in the sense that they are used to repeat blocks of code.</p>
<p>The most important difference is that you can easily iterate over sequential types.</p>
<h2 id="basicsyntax">Basic Syntax</h2>
<p>The basic syntax of a <code>for</code> loop is as below.</p>
<pre><code class="language-python">for item in collection:
statement
</code></pre>
<h2 id="loopoveralist">Loop over a list</h2>
<p>To loop over a list or any other collection, just proceed as shown in the example below.</p>
<pre><code class="language-python">cars = ['BMW', 'Ferrari', 'McLaren']
for car in cars:
print(car)
</code></pre>
<pre><code>BMW
Ferrari
McLaren
</code></pre>
<p>The list of <code>cars</code> contains three items. The <code>for</code> loop will iterate over the list and store each item in the <code>car</code> variable, and then execute a statement, in this case <code>print(car)</code>, to print each car in the console.</p>
<h2 id="rangefunction"><code>range()</code> function</h2>
<p>The range function is widely used in for loops because it gives you a simple way to list numbers.</p>
<p>This code will loop through the numbers 0 to 5 and print each of them.</p>
<pre><code class="language-python">for number in range(5):
print(number)
</code></pre>
<pre><code>0
1
2
3
4
</code></pre>
<p>In contrast, without the <code>range()</code> function, we would do something like this.</p>
<pre><code class="language-python">numbers = [0, 1, 2, 3, 4]
for number in numbers:
print(number)
</code></pre>
<pre><code>0
1
2
3
4
</code></pre>
<p>You can also define a <code>start</code> and <code>stop</code> using <code>range()</code>.</p>
<p>Here we are starting in 5 and a stoping in 10. The number you set to stop is not included.</p>
<pre><code class="language-python">for number in range(5, 10):
print(number)
</code></pre>
<pre><code>5
6
7
8
9
</code></pre>
<p>Finally, it is also possible to set a step.</p>
<p>Here we starting in 10 and incrementing by 2 until 20, since 20 is the <code>stop</code>, it is not included.</p>
<pre><code class="language-python">for number in range(10, 20, 2):
print(number)
</code></pre>
<pre><code>10
12
14
16
18
</code></pre>
<h2 id="elseblock"><code>else</code> block</h2>
<p>When the items in the list are over, the <code>else</code> block will be called.</p>
<pre><code class="language-python">cars = ['BMW', 'Ferrari', 'McLaren']
for car in cars:
print(car)
else:
print('No cars left!')
</code></pre>
<pre><code>BMW
Ferrari
McLaren
No cars left!
</code></pre>
<h2 id="howtobreakoutofaforloopinpython">How to break out of a for loop in Python</h2>
<p>Simply use the <code>break</code> keyword, and the loop will stop its execution.</p>
<pre><code class="language-python">cars = ['BMW', 'Ferrari', 'McLaren']
for car in cars:
print(car)
if car == 'Ferrari':
break
</code></pre>
<pre><code>BMW
Ferrari
</code></pre>
<p>The loop will iterate through the list and print each car.</p>
<p>In this case, after the loop reaches 'Ferrari', the <code>break</code> is called and 'McLaren' won't be printed.</p>
<h2 id="howtoskipaniteminaforloop">How to skip an item in a for loop</h2>
<p>In this section, we'll learn how <code>continue</code> can do this for you.</p>
<p>I had to invert the order of the <code>if</code> statement and the <code>continue</code> to show how it works properly.</p>
<p>Notice that I always check if 'Ferrari' is the current item. If it is, 'Ferrari' won't be printed, and the <code>continue</code> will skip to the next item 'McLaren'.</p>
<pre><code class="language-python">cars = ['BMW', 'Ferrari', 'McLaren']
for car in cars:
if car == 'Ferrari':
continue
print(car)
</code></pre>
<pre><code>BMW
McLaren
</code></pre>
<h2 id="loopoveraloopnestedloops">Loop over a Loop: Nested Loops</h2>
<p>Sometimes you have more complex collections, like a list of lists.</p>
<p>To iterate over these lists, you need nested <code>for</code> loops.</p>
<p>In this case, I have three lists: one of BMW models, another on Ferrari models, and finally one with McLaren models.</p>
<p>The first loop iterates over each brand's list, and the second will iterate over the models of each brand.</p>
<pre><code class="language-python">car_models = [
['BMW I8', 'BMW X3',
'BMW X1'],
['Ferrari 812', 'Ferrari F8',
'Ferrari GTC4'],
['McLaren 570S', 'McLaren 570GT',
'McLaren 720S']
]
for brand in car_models:
for model in brand:
print(model)
</code></pre>
<pre><code>BMW I8
BMW X3
BMW X1
Ferrari 812
Ferrari F8
Ferrari GTC4
McLaren 570S
McLaren 570GT
McLaren 720S
</code></pre>
<h2 id="loopoverotherdatastructures">Loop over other Data Structures</h2>
<p>The same logic that applies <code>for</code> loops over a <code>list</code> can be extended to the other data structures: <code>tuple</code>, <code>set</code>, and <code>dictionary</code>.</p>
<p>I will briefly demonstrate how to make a basic loop over each one of them.</p>
<h3 id="loopoveratuple">Loop over a Tuple</h3>
<pre><code class="language-python">people = ('Bob', 'Mary')
for person in people:
print(person)
</code></pre>
<pre><code>Bob
Mary
</code></pre>
<h3 id="loopoveraset">Loop over a Set</h3>
<pre><code class="language-python">people = {'Bob', 'Mary'}
for person in people:
print(person)
</code></pre>
<pre><code>Bob
Mary
</code></pre>
<h3 id="loopoveradictionary">Loop over a Dictionary</h3>
<p>To print the keys:</p>
<pre><code class="language-python">people = {'Bob':30, 'Mary':25}
for person in people:
print(person)
</code></pre>
<pre><code>Bob
Mary
</code></pre>
<p>To print the values:</p>
<pre><code class="language-python">people = {'Bob':30, 'Mary':25}
for person in people:
print(people[person])
</code></pre>
<pre><code>30
25
</code></pre>
<p>As the code grows the complexity also grows. And functions help organize the code.</p>
<p>Functions are a handy way to create blocks of code that you can reuse.</p>
<h2 id="definitionandcalling">Definition and Calling</h2>
<p>In Python use the <code>def</code> keyword to define a function.</p>
<p>Give it a name and use parentheses to inform 0 or more arguments.</p>
<p>In the line after the declaration starts, remember to indent the block of code.</p>
<p>Here is an example of a function called <code>print_first_function()</code> that only prints a phrase 'My first function!'.</p>
<p>To call the function just use its name as defined.</p>
<pre><code class="language-python">def print_first_function():
print('My first function!')
print_first_function()
</code></pre>
<pre><code class="language--">My first function!
</code></pre>
<h2 id="returnavalue"><code>return</code> a value</h2>
<p>Use the <code>return</code> keyword to return a value from the function.</p>
<p>In this example the function <code>second_function()</code> returns the string 'My second function!'.</p>
<p>Notice that <code>print()</code> is a built-in function and our function is called from inside it.</p>
<p>The string returned by <code>second_function()</code> is passed as an argument to the <code>print()</code> function.</p>
<pre><code class="language-python">def second_function():
return 'My second function!'
print(second_function())
</code></pre>
<pre><code>My second function!
</code></pre>
<h2 id="returnmultiplevalues"><code>return</code> multiple values</h2>
<p>Functions can also return multiple values at once.</p>
<p><code>return_numbers()</code> returns two values simultaneously.</p>
<pre><code class="language-python">def return_numbers():
return 10, 2
print(return_numbers())
</code></pre>
<pre><code>(10, 2)
</code></pre>
<h2 id="arguments">Arguments</h2>
<p>You can define parameters between the parentheses.</p>
<p>When calling a function with parameters you have to pass arguments according to the parameters defined.</p>
<p>The past examples had no parameters, so there was no need for arguments. The parentheses remained empty when the functions were called.</p>
<h3 id="oneargument">One Argument</h3>
<p>To specify one parameter, just define it inside the parentheses.</p>
<p>In this example, the function <code>my_number</code> expects one number as argument defined by the parameter <code>num</code>.</p>
<p>The value of the argument is then accessible inside the function to be used.</p>
<pre><code class="language-python">def my_number(num):
return 'My number is: ' + str(num)
print(my_number(10))
</code></pre>
<pre><code>My number is: 10
</code></pre>
<h3 id="twoormorearguments">Two or more Arguments</h3>
<p>To define more parameters, just use a comma to separate them.</p>
<p>Here we have a function that adds two numbers called <code>add</code>. It expects two arguments defined by <code>first_num</code> and <code>second_num</code>.</p>
<p>The arguments are added by the <code>+</code> operator and the result is then returned by the <code>return</code>.</p>
<pre><code class="language-python">def add(first_num, second_num):
return first_num + second_num
print(add(10,2))
</code></pre>
<pre><code>12
</code></pre>
<p>This example is very similar to the last one. The only difference is that we have 3 parameters instead of 2.</p>
<pre><code class="language-python">def add(first_num, second_num, third_num):
return first_num + second_num + third_num
print(add(10,2,3))
</code></pre>
<pre><code>15
</code></pre>
<p>This logic of defining parameters and passing arguments is the same for any number of parameters.</p>
<p>It is important to point out that the arguments have to be passed in the same order that the parameters are defined.</p>
<h3 id="defaultvalue">Default value.</h3>
<p>You can set a default value for a parameter if no argument is given using the <code>=</code> operator and a value of choice.</p>
<p>In this function, if no argument is given, the number 30 is assumed as the expected value by default.</p>
<pre><code class="language-python">def my_number(my_number = 30):
return 'My number is: ' + str(my_number)
print(my_number(10))
print(my_number())
</code></pre>
<pre><code>My number is: 10
My number is: 30
</code></pre>
<h3 id="keywordornamedarguments">Keyword or Named Arguments</h3>
<p>When calling a function, the order of the arguments have to match the order of the parameters.</p>
<p>The alternative is if you use keyword or named arguments.</p>
<p>Set the arguments to their respective parameters directly using the name of the parameters and the <code>=</code> operators.</p>
<p>This example flips the arguments, but the function works as expected because I tell it which value goes to which parameter by name.</p>
<pre><code class="language-python">def my_numbers(first_number, second_number):
return 'The numbers are: ' + str(first_number) + ' and ' + str(second_number)
print(my_numbers(second_number=30, first_number=10))
</code></pre>
<pre><code>The numbers are: 10 and 30
</code></pre>
<h3 id="anynumberofargumentsargs">Any number of arguments: <code>*args</code></h3>
<p>If you don't want to specify the number of parameters, just use the <code>*</code> before the parameter name. Then the function will take as many arguments as necessary.</p>
<p>The parameter name could be anything like <code>*numbers</code>, but there is a convention in Python to use <code>*args</code> for this definition of a variable number of arguments.</p>
<pre><code class="language-python">def my_numbers(*args):
for arg in args:
print(number)
my_numbers(10,2,3)
</code></pre>
<pre><code>10
2
3
</code></pre>
<h3 id="anynumberofkeywordnamedargumentskwargs">Any number of Keyword/Named arguments: <code>**kwargs</code></h3>
<p>Similar to <code>*args</code>, we can use <code>**kwargs</code> to pass as many keyword arguments as we want, as long as we use <code>**</code>.</p>
<p>Again, the name could be anything like <code>**numbers</code>, but <code>**kwargs</code> is a convention.</p>
<pre><code class="language-python">def my_numbers(**kwargs):
for key, value in kwargs.items():
print(key)
print(value)
my_numbers(first_number=30, second_number=10)
</code></pre>
<pre><code>first_number
30
second_number
10
</code></pre>
<h3 id="othertypesasarguments">Other types as arguments</h3>
<p>The past examples used mainly numbers, but you can pass any type as argument and they will be treated as such inside the function.</p>
<p>This example takes strings as arguments.</p>
<pre><code class="language-python">def my_sport(sport):
print('I like ' + sport)
my_sport('football')
my_sport('swimming')
</code></pre>
<pre><code>I like football
I like swimming
</code></pre>
<p>This function takes a list as argument.</p>
<pre><code class="language-python">def my_numbers(numbers):
for number in numbers:
print(number)
my_numbers([30, 10, 64, 92, 105])
</code></pre>
<pre><code>30
10
64
92
105
</code></pre>
<p>The place where a variable is created defines its availability to be accessed and manipulated by the rest of the code. This is known as <strong>scope</strong>.</p>
<p>There are two types of scope: local and global.</p>
<h2 id="globalscope">Global Scope</h2>
<p>A global scope allows you to use the variable anywhere in your program.</p>
<p>If your variable is outside a function, it has global scope by default.</p>
<pre><code class="language-python">name = 'Bob'
def print_name():
print('My name is ' + name)
print_name()
</code></pre>
<pre><code>My name is Bob
</code></pre>
<p>Notice that the function could use the variable <code>name</code> and print <code>My name is Bob</code>.</p>
<h2 id="localscope">Local Scope</h2>
<p>When you declare a variable inside a function, it only exists inside that function and can't be accessed from the outside.</p>
<pre><code class="language-python">def print_name():
name = "Bob"
print('My name is ' + name)
print_name()
</code></pre>
<pre><code>My name is Bob
</code></pre>
<p>The variable <code>name</code> was declared inside the function, so the output is the same as before.</p>
<p>But this will throw an error:</p>
<pre><code class="language-python">def print_name():
name = 'Bob'
print('My name is ' + name)
print(name)
</code></pre>
<p>The output of the code above is:</p>
<pre><code class="language-bash">Traceback (most recent call last):
File "&lt;stdin&gt;", line 1, in &lt;module&gt;
NameError: name 'name' is not defined
</code></pre>
<p>I tried to print the variable <code>name</code> from outside the function, but the scope of the variable was local and could not be found in a global scope.</p>
<h2 id="mixingscopes">Mixing Scopes</h2>
<p>If you use the same name for variables inside and outside a function, the function will use the one inside its scope.</p>
<p>So when you call <code>print_name()</code>, the <code>name='Bob'</code> is used to print the phrase.</p>
<p>On the other hand, when calling <code>print()</code> outside the function scope, <code>name="Sarah"</code> is used because of its global scope.</p>
<pre><code class="language-python">name = "Sarah"
def print_name():
name = 'Bob'
print('My name is ' + name)
print_name()
print(name)
</code></pre>
<p>The output of the code above is:</p>
<pre><code>My name is Bob
Sarah
</code></pre>
<p>Sometimes we want to perform some very simple operations over the items of a list.</p>
<p>List comprehensions give us a succinct way to work on lists as an alternative to other methods of iteration, such as <code>for</code> loops.</p>
<h2 id="basicsyntax">Basic syntax</h2>
<p>To use a list comprehension to replace a regular for loop, we can make:</p>
<pre><code class="language-python">[expression for item in list]
</code></pre>
<p>Which is the same as doing:</p>
<pre><code class="language-python">for item in list:
expression
</code></pre>
<p>If we want some conditional to apply the expression, we have:</p>
<pre><code class="language-python">[expression for item in list if conditional ]
</code></pre>
<p>Which is the same as doing:</p>
<pre><code class="language-python">for item in list:
if conditional:
expression
</code></pre>
<h2 id="example1calculatingthecubeofanumber">Example 1: calculating the cube of a number</h2>
<p><strong>Regular way</strong></p>
<pre><code class="language-python">numbers = [1, 2, 3, 4, 5]
new_list = []
for n in numbers:
new_list.append(n**3)
print(new_list)
</code></pre>
<pre><code>[1, 8, 27, 64, 125]
</code></pre>
<p><strong>Using list comprehensions</strong></p>
<pre><code class="language-python">numbers = [1, 2, 3, 4, 5]
new_list = []
new_list = [n**3 for n in numbers]
print(new_list)
</code></pre>
<pre><code> [1, 8, 27, 64, 125]
</code></pre>
<h2 id="example2calculatingthecubeofanumberonlyifitisgreaterthan3">Example 2: calculating the cube of a number only if it is greater than 3</h2>
<p>Using the conditional, we can filter only the values we want the expression to be applied to.</p>
<p><strong>Regular way</strong></p>
<pre><code class="language-python">numbers = [1, 2, 3, 4, 5]
new_list = []
for n in numbers:
if(n &gt; 3):
new_list.append(n**3)
print(new_list)
</code></pre>
<pre><code>[64, 125]
</code></pre>
<p><strong>Using list comprehensions</strong></p>
<pre><code class="language-python">numbers = [1, 2, 3, 4, 5]
new_list = []
new_list = [n**3 for n in numbers if n &gt; 3]
print(new_list)
</code></pre>
<pre><code>[64, 125]
</code></pre>
<h2 id="example3callingfunctionswithlistcomprehensions">Example 3: calling functions with list comprehensions</h2>
<p>We can also call functions using the list comprehension syntax:</p>
<pre><code class="language-python">numbers = [1, 2, 3, 4, 5]
new_list = []
def cube(number):
return number**3
new_list = [cube(n) for n in numbers if n &gt; 3]
print(new_list)
</code></pre>
<pre><code>[64, 125]
</code></pre>
<p>A Python lambda function can only have one expression and can't have multiple lines.</p>
<p>It is supposed to make it easier to create some small logic in one line instead of a whole function as is usually done.</p>
<p>Lambda functions are also anonymous, which means there is no need to name them.</p>
<h2 id="basicsyntax">Basic Syntax</h2>
<p>The basic syntax is very simple: just use the <code>lambda</code> keyword, define the parameters needed, and use ":" to separate the parameters from the expression.</p>
<p>The general forms is:</p>
<pre><code>lambda arguments : expression
</code></pre>
<h3 id="oneparameterexample">One parameter example</h3>
<p>Look at this example using only one parameter</p>
<pre><code class="language-python">cubic = lambda number : number**3
print(cubic(2))
</code></pre>
<pre><code>8
</code></pre>
<h3 id="multipleparameterexample">Multiple parameter example</h3>
<p>If you want, you can also have multiple parameters.</p>
<pre><code class="language-python">exponential = lambda multiplier, number, exponent : multiplier * number**exponent
print(exponential(2, 2, 3))
</code></pre>
<pre><code>16
</code></pre>
<h3 id="callingthelambdafunctiondirectly">Calling the Lambda Function directly</h3>
<p>You don't need to use a variable as we did before. Instead you can make use of parenthesis around the lambda function and another pair of parenthesis around the arguments.</p>
<p>The declaration of the function and the execution will happen in the same line.</p>
<pre><code class="language-python">(lambda multiplier, number, exponent : multiplier * number**exponent)(2, 2, 3)
</code></pre>
<pre><code>16
</code></pre>
<h2 id="examplesusinglambdafunctionswithotherbuiltinfunctions">Examples using lambda functions with other built-in functions</h2>
<h3 id="map">Map</h3>
<p>The Map function applies the expression to each item in a list.</p>
<p>Let's calculate the cubic of each number in the list.</p>
<pre><code class="language-python">numbers = [2, 5, 10]
cubics = list(map(lambda number : number**3, numbers))
print(cubics)
</code></pre>
<pre><code>[8, 125, 1000]
</code></pre>
<h3 id="filter">Filter</h3>
<p>The Filter function will filter the list based on the expression.</p>
<p>Let's filter to have only the numbers greater than 5.</p>
<pre><code class="language-python">numbers = [2, 5, 10]
filtered_list = list(filter(lambda number : number &gt; 5, numbers))
print(filtered_list)
</code></pre>
<pre><code>[10]
</code></pre>
<p>After some time your code starts to get more complex with lots of functions and variables.</p>
<p>To make it easier to organize the code we use Modules.</p>
<p>A well-designed Module also has the advantage of being reusable, so you write code once and reuse it everywhere.</p>
<p>You can write a module with all the mathematical operations and other people can use it.</p>
<p>And, if you need, you can use someone else's modules to simplify your code, speeding up your project.</p>
<p>In other programming languages, these are also referred to as libraries.</p>
<h2 id="usingamodule">Using a Module</h2>
<p>To use a module we use the <code>import</code> keyword.</p>
<p>As the name implies we have to tell our program what module to import.</p>
<p>After that, we can use any function available in that module.</p>
<p>Let's see an example using the <code>math</code> module.</p>
<p>First, let's see how to have access to a constant, Euler's number.</p>
<pre><code class="language-python">import math
math.e
</code></pre>
<pre><code>2.718281828459045
</code></pre>
<p>In this second example, we are going to use a function that calculates the square root of a number.</p>
<p>It is also possible to use the <code>as</code> keyword to create an alias.</p>
<pre><code class="language-python">import math as m
m.sqrt(121)
m.sqrt(729)
</code></pre>
<pre><code>11
27
</code></pre>
<p>Finally, using the <code>from</code> keyword, we can specify exactly what to import instead of the whole module and use the function directly without the module's name.</p>
<p>This example uses the <code>floor()</code> function that returns the largest integer less than or equal to a given number.</p>
<pre><code class="language-python">from math import floor
floor(9.8923)
</code></pre>
<pre><code>9
</code></pre>
<h2 id="creatingamodule">Creating a Module</h2>
<p>Now that we know how to use modules, let's see how to create one.</p>
<p>It is going to be a module with the basic math operations <code>add</code>, <code>subtract</code>, <code>multiply</code>, <code>divide</code> and it is gonna be called <code>basic_operations</code>.</p>
<p>Create the <code>basic_operations.py</code> file with the four functions.</p>
<pre><code class="language-python">def add(first_num, second_num):
return first_num + second_num
def subtract(first_num, second_num):
return first_num - second_num
def multiply(first_num, second_num):
return first_num * second_num
def divide(first_num, second_num):
return first_num / second_num
</code></pre>
<p>Then, just import the <code>basic_operations</code> module and use the functions.</p>
<pre><code class="language-python">import basic_operations
basic_operations.add(10,2)
basic_operations.subtract(10,2)
basic_operations.multiply(10,2)
basic_operations.divide(10,2)
</code></pre>
<pre><code>12
8
20
5.0
</code></pre>
<p>You are in the process of building a module with the basic math operations <code>add</code>, <code>subtract</code>, <code>multiply</code>, and <code>divide</code>  called <code>basic_operations</code> saved in the <code>basic_operations.py</code> file.</p>
<p>To guarantee everything is fine, you can run some tests.</p>
<pre><code class="language-python">def add(first_num, second_num):
return first_num + second_num
def subtract(first_num, second_num):
return first_num - second_num
def multiply(first_num, second_num):
return first_num * second_num
def divide(first_num, second_num):
return first_num / second_num
print(add(10, 2))
print(subtract(10,2))
print(multiply(10,2))
print(divide(10,2))
</code></pre>
<p>After running the code:</p>
<pre><code class="language-shell">renan@pro-home:~$ python3 basic_operations.py
</code></pre>
<p>The output is:</p>
<pre><code>12
8
20
5.0
</code></pre>
<p>The output for those tests are what we expected.</p>
<p>Our code is right and ready to share.</p>
<p>Let's import the new module run it in the Python console.</p>
<pre><code class="language-python">Python 3.6.9 (default, Nov  7 2019, 10:44:02)
[GCC 8.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
&gt;&gt;&gt; import basic_operations
12
8
20
5.0
&gt;&gt;&gt;
</code></pre>
<p>When the module is imported our tests are displayed on the screen even though we didn't do anything besides importing <code>basic_operations</code>.</p>
<p>To fix that we use <code>if __name__ == '__main__'</code> in the <code>basic_operations.py</code> file like this:</p>
<pre><code class="language-python">def add(first_num, second_num):
return first_num + second_num
def subtract(first_num, second_num):
return first_num - second_num
def multiply(first_num, second_num):
return first_num * second_num
def divide(first_num, second_num):
return first_num / second_num
if __name__ == '__main__':
print(add(10, 2))
print(subtract(10,2))
print(multiply(10,2))
print(divide(10,2))
</code></pre>
<p>Running the code directly on the terminal will continue to display the tests. But when you import it like a module, the tests won't show and you can use the functions the way you intended.</p>
<pre><code class="language-python">Python 3.6.9 (default, Nov  7 2019, 10:44:02)
[GCC 8.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
&gt;&gt;&gt; import basic_operations
&gt;&gt;&gt; basic_operations.multiply(10,2)
20
&gt;&gt;&gt;
</code></pre>
<p>Now that you know how to use the <code>if __name__ == '__main__'</code>, let's understand how it works.</p>
<p>The condition tells when the interpreter is treating the code as a module or as a program itself being executed directly.</p>
<p>Python has this native variable called <code>__name__</code>.</p>
<p>This variable represents the name of the module which is the name of the <code>.py</code> file.</p>
<p>Create a file <code>my_program.py</code> with the following and execute it.</p>
<pre><code class="language-python">print(__name__)
</code></pre>
<p>The output will be:</p>
<pre><code>__main__
</code></pre>
<p>This tells us that when a program is executed directly, the variable <code>__name__</code> is defined as <code>__main__</code>.</p>
<p>But when it is imported as a module, the value of <code>__name__</code> is the name of the module.</p>
<pre><code class="language-python">Python 3.6.9 (default, Nov  7 2019, 10:44:02)
[GCC 8.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
&gt;&gt;&gt; import my_program
my_program
&gt;&gt;&gt;
</code></pre>
<p>This is how the Python interpreter differentiates the behavior of an imported module and a program executed directly on the terminal.</p>
<p>Creating, deleting, reading, and many other functions applied to files are an integral part of many programs.</p>
<p>As such, it is very important to know how to organize and deal with files directly from your code.</p>
<p>Let's see how to handle files in Python.</p>
<h2 id="filecreate">File create</h2>
<p>First things first, create!</p>
<p>We are going to use the <code>open()</code> function.</p>
<p>This function opens a file and returns its corresponding object.</p>
<p>The first argument is the name of the file we are handling, the second refers to the operation we are using.</p>
<p>The code below creates the file "people.txt", the <code>x</code> argument is used when we just want to create the file. If a file with the same name already exists, it will throw an exception.</p>
<pre><code class="language-python">people_file = open("people.txt", "x")
</code></pre>
<p>You can also use the <code>w</code> mode to create a file. Unlike the <code>x</code> mode, it will not throw an exception since this mode indicates the <em>writing</em> mode. We are opening a file to write data into it and, if the file doesn't exist, it is created.</p>
<pre><code class="language-python">people_file = open("people.txt", "w")
</code></pre>
<p>The last one is the <code>a</code> mode which stands for <em>append</em>. As the name implies, you can append more data to the file, while the <code>w</code> mode simply overwrites any existing data.</p>
<p>When appending, if the file doesn't exist, it also creates it.</p>
<pre><code class="language-python">people_file = open("people.txt", "a")
</code></pre>
<h2 id="filewrite">File write</h2>
<p>To write data into a file, you simply open a file with the <code>w</code> mode.</p>
<p>Then, to add data, you use the object return by the <code>open()</code> function. In this case, the object is called <code>people_file</code>. Then you call the <em>write()</em> function passing the data as argument.</p>
<pre><code class="language-python">people_file = open("people.txt", "w")
people_file.write("Bob\n")
people_file.write("Mary\n")
people_file.write("Sarah\n")
people_file.close()
</code></pre>
<p>We use <code>\n</code> at the end to break the line, otherwise the content in the file will stay in the same line as "BobMarySarah".</p>
<p>One more detail is to <em>close()</em> the file. This is not only a good practice, but also ensures that your changes were applied to the file.</p>
<p>Remember that when using <code>w</code> mode, the data that already existed in the file will be overwritten by the new data. To add new data without losing what was already there, we have to use the append mode.</p>
<h2 id="fileappend">File append</h2>
<p>The <code>a</code> mode appends new data to the file, keeping the existing one.</p>
<p>In this example, after the first writing with <code>w</code> mode, we are using the <code>a</code> mode to append. The result is that each name will appear twice in the file "people.txt".</p>
<pre><code class="language-python">#first write
people_file = open("people.txt", "w")
people_file.write("Bob\n")
people_file.write("Mary\n")
people_file.write("Sarah\n")
people_file.close()
#appending more data
#keeping the existing data
people_file = open("people.txt", "a")
people_file.write("Bob\n")
people_file.write("Mary\n")
people_file.write("Sarah\n")
people_file.close()
</code></pre>
<h2 id="fileread">File read</h2>
<p>Reading the file is also very straightforward: just use the <code>r</code> mode like so.</p>
<p>If you read the "people.txt" file created in the last example, you should see 6 names in your output.</p>
<pre><code class="language-python">people_file = open("people.txt", "r")
print(people_file.read())
</code></pre>
<pre><code>Bob
Mary
Sarah
Bob
Mary
Sarah
</code></pre>
<p>The <code>read()</code> function reads the whole file at once. If you use the <code>readline()</code> function, you can read the file line by line.</p>
<pre><code class="language-python">people_file = open("people.txt", "r")
print(people_file.readline())
print(people_file.readline())
print(people_file.readline())
</code></pre>
<pre><code>Bob
Mary
Sarah
</code></pre>
<p>You can also loop to read the lines like the example below.</p>
<pre><code class="language-python">people_file = open("people.txt", "r")
for person in people_file:
print(person)
</code></pre>
<pre><code>Bob
Mary
Sarah
Bob
Mary
Sarah
</code></pre>
<h2 id="deleteafile">Delete a File</h2>
<p>To delete a file, you also need the <code>os</code> module.</p>
<p>Use the <code>remove()</code> method.</p>
<pre><code class="language-python">import os
os.remove('my_file.txt')
</code></pre>
<h2 id="checkifafileexists">Check if a File Exists</h2>
<p>Use the <code>os.path.exists()</code> method to check the existence of a file.</p>
<pre><code class="language-python">import os
if os.path.exists('my_file.txt'):
os.remove('my_file.txt')
else:
print('There is no such file!')
</code></pre>
<h2 id="copyafile">Copy a File</h2>
<p>For this one, I like to use the <code>copyfile()</code> method from the <code>shutil</code> module.</p>
<pre><code class="language-python">from shutil import copyfile
copyfile('my_file.txt','another_file.txt')
</code></pre>
<p>There are a few options to copy a file, but <code>copyfile()</code> is the fastest one.</p>
<h2 id="renameandmoveafile">Rename and Move a File</h2>
<p>If you need to move or rename a file you can use the <code>move()</code> method from the <code>shutil</code> module.</p>
<pre><code class="language-python">from shutil import move
move('my_file.txt','another_file.txt')
</code></pre>
<p>Classes and Objects are the fundamental concepts of Object-Oriented Programming.</p>
<p>In Python, <strong>everything is an object</strong>!</p>
<p>A variable (object) is just an instance of its type (class).</p>
<p>That's why when you check the type of a variable you can see the <code>class</code> keyword right next to its type (class).</p>
<p>This code snippet shows that <code>my_city</code> is an object and it is an instance of the class <code>str</code>.</p>
<pre><code class="language-python">my_city = "New York"
print(type(my_city))
</code></pre>
<pre><code>&lt;class 'str'&gt;
</code></pre>
<h2 id="differentiateclassxobject">Differentiate Class x Object</h2>
<p>The class gives you a standard way to create objects. A class is like a base project.</p>
<p>Say you are an engineer working for Boeing.</p>
<p>Your new mission is to build the new product for the company, a new model called 747-Space. This aircraft flies higher altitudes than other commercial models.</p>
<p>Boeing needs to build dozens of those to sell to airlines all over the world, and the aircrafts have to be all the same.</p>
<p>To guarantee that the aircrafts (objects) follow the same standards, you need to have a project (class) that can be replicable.</p>
<p>The class is a project, a blueprint for an object.</p>
<p>This way you make the project once, and reuse it many times.</p>
<p>In our code example before, consider that every string has the same behavior and the same attributes. So it only makes sense for strings to have a class <code>str</code> to define them.</p>
<h2 id="attributesandmethods">Attributes and Methods</h2>
<p>Objects have some behavior which is is given by attributes and methods.</p>
<p>In simple terms, in the context of an object, attributes are variables and methods are functions attached to an object.</p>
<p>For example, a string has many built-in methods that we can use.</p>
<p>They work like functions, you just need to separate them from the objects using a <code>.</code>.</p>
<p>In this code snippet, I'm calling the <code>replace()</code> method from the string variable <code>my_city</code> which is an object, and an instance of the class <code>str</code>.</p>
<p>The <code>replace()</code> method replaces a part of the string for another and returns a new string with the change. The original string remains the same.</p>
<p>Let's replace 'New' for 'Old' in 'New York'.</p>
<pre><code class="language-python">my_city = 'New York'
print(my_city.replace('New', 'Old'))
print(my_city)
</code></pre>
<pre><code>Old York
New York
</code></pre>
<h2 id="creatingaclass">Creating a Class</h2>
<p>We have used many objects (instances of classes) like strings, integers, lists, and dictionaries. All of them are instances of predefined classes in Python.</p>
<p>To create our own classes we use the <code>class</code> keyword.</p>
<p>By convention, the name of the class matches the name of the <code>.py</code> file and the module by consequence. It is also a good practice to organize the code.</p>
<p>Create a file <code>vehicle.py</code> with the following class <code>Vehicle</code>.</p>
<pre><code class="language-python">class Vehicle:
def __init__(self, year, model, plate_number, current_speed = 0):
self.year = year
self.model = model
self.plate_number = plate_number
self.current_speed = current_speed
def move(self):
self.current_speed += 1
def accelerate(self, value):
self.current_speed += value
def stop(self):
self.current_speed = 0
def vehicle_details(self):
return self.model + ', ' + str(self.year) + ', ' + self.plate_number
</code></pre>
<p>Let's break down the class to explain it in parts.</p>
<p>The <code>class</code> keyword is used to specify the name of the class <code>Vehicle</code>.</p>
<p>The <code>__init__</code> function is a built-in function that all classes have. It is called when an object is created and is often used to initialize the attributes, assigning values to them, similar to what is done to variables.</p>
<p>The first parameter <code>self</code> in the <code>__init__</code> function is a reference to the object (instance) itself. We call it <code>self</code> by convention and it has to be the first parameter in every instance method, as you can see in the other method definitions <code>def move(self)</code>, <code>def accelerate(self, value)</code>, <code>def stop(self)</code>, and <code>def vehicle_details(self)</code>.</p>
<p><code>Vehicle</code> has 5 attributes (including self): <code>year</code>, <code>model</code>, <code>plate_number</code>, and <code>current_speed</code>.</p>
<p>Inside the <code>__init__</code>, each one of them is initialized with the parameters given when the object is instantiated.</p>
<p>Notice that <code>current_speed</code> is initialized with <code>0</code> by default, meaning that if no value is given, <code>current_speed</code> will be equal to 0 when the object is first instantiated.</p>
<p>Finally, we have three methods to manipulate our vehicle regarding its speed:  <code>def move(self)</code>, <code>def accelerate(self, value)</code>, and <code>def stop(self)</code>.</p>
<p>And one method to give back information about the vehicle: <code>def vehicle_details(self)</code>.</p>
<p>The implementation inside the methods work the same way as in functions. You can also have a <code>return</code> to give you back some value at the end of the method as demonstrated by <code>def vehicle_details(self)</code>.</p>
<h2 id="usingtheclass">Using the Class</h2>
<p>To use the class in your terminal, import the <code>Vehicle</code> class from the <code>vehicle</code> module.</p>
<p>Create an instance called <code>my_car</code>, initializing <code>year</code> with 2009, <code>model</code> with 'F8', <code>plate_number</code> with 'ABC1234', and <code>current_speed</code> with 100.</p>
<p>The <code>self</code> parameter is not taken into consideration when calling methods. The Python interpreter infers its value as being the current object/instance automatically, so we just have to pass the other arguments when instantiating and calling methods.</p>
<p>Now use the methods to <code>move()</code> the car which increases its <code>current_speed</code> by 1, <code>accelerate(10)</code> which increases its <code>current_speed</code> by the value given in the argument, and <code>stop()</code> which sets the <code>current_speed</code> to 0.</p>
<p>Remember to print the value of <code>current_speed</code> at every command to see the changes.</p>
<p>To finish the test, call <code>vehicle_details()</code> to print the information about our vehicle.</p>
<pre><code class="language-python">&gt;&gt;&gt; from vehicle import Vehicle
&gt;&gt;&gt;
&gt;&gt;&gt; my_car = Vehicle(2009, 'F8', 'ABC1234', 100)
&gt;&gt;&gt; print(my_car.current_speed)
100
&gt;&gt;&gt; my_car.move()
&gt;&gt;&gt; print(my_car.current_speed)
101
&gt;&gt;&gt; my_car.accelerate(10)
&gt;&gt;&gt; print(my_car.current_speed)
111
&gt;&gt;&gt; my_car.stop()
&gt;&gt;&gt; print(my_car.current_speed)
0
&gt;&gt;&gt; print(my_car.vehicle_details())
F8, 2009, ABC1234
</code></pre>
<p>If we don't set the initial value for <code>current_speed</code>, it will be zero by default as stated before and demonstrated in the next example.</p>
<pre><code class="language-python">&gt;&gt;&gt; from vehicle import Vehicle
&gt;&gt;&gt;
&gt;&gt;&gt; my_car = Vehicle(2009, 'F8', 'ABC1234')
&gt;&gt;&gt; print(my_car.current_speed)
0
&gt;&gt;&gt; my_car.move()
&gt;&gt;&gt; print(my_car.current_speed)
1
&gt;&gt;&gt; my_car.accelerate(10)
&gt;&gt;&gt; print(my_car.current_speed)
11
&gt;&gt;&gt; my_car.stop()
&gt;&gt;&gt; print(my_car.current_speed)
0
&gt;&gt;&gt; print(my_car.vehicle_details())
F8, 2009, ABC1234
</code></pre>
<p>Let's define a generic <code>Vehicle</code> class and save it inside the <code>vehicle.py</code> file.</p>
<pre><code class="language-python">class Vehicle:
def __init__(self, year, model, plate_number, current_speed):
self.year = year
self.model = model
self.plate_number = plate_number
self.current_speed = current_speed
def move(self):
self.current_speed += 1
def accelerate(self, value):
self.current_speed += value
def stop(self):
self.current_speed = 0
def vehicle_details(self):
return self.model + ', ' + str(self.year) + ', ' + self.plate_number
</code></pre>
<p>A vehicle has attributes <code>year</code>, <code>model</code>, <code>plate_number</code>, and <code>current_speed</code>.</p>
<p>The definition of vehicle in the <code>Vehicle</code> is very generic and might not be suitable for trucks, for instance, because it should include a <code>cargo</code> attribute.</p>
<p>On the other hand, a cargo attribute does not make much sense for small vehicles like motorcycles.</p>
<p>To solve this we can use <em>inheritance</em>.</p>
<p>When a class (child) inherits another class (parent), all the attributes and methods from the parent class are inherited by the child class.</p>
<h2 id="parentandchild">Parent and Child</h2>
<p>In our case, we want a new <code>Truck</code> class to inherit everything from the <code>Vehicle</code> class. Then we want it to add its own specific attribute <code>current_cargo</code> to control the addition and removal of cargo from the truck.</p>
<p>The <code>Truck</code> class is called a <em>child</em> class that inherits from its <em>parent</em> class <code>Vehicle</code>.</p>
<p>A <em>parent</em> class is also called a <em>superclass</em> while a <em>child</em> class is also known as a <em>subclass</em>.</p>
<p>Create the class <code>Truck</code> and save it inside the <code>truck.py</code> file.</p>
<pre><code class="language-python">from vehicle import Vehicle
class Truck(Vehicle):
def __init__(self, year, model, plate_number, current_speed, current_cargo):
super().__init__(year, model, plate_number, current_speed)
self.current_cargo = current_cargo
def add_cargo(self, cargo):
self.current_cargo += cargo
def remove_cargo(self, cargo):
self.current_cargo -= cargo
</code></pre>
<p>Let's break down the class to explain it in parts.</p>
<p>The class <code>Vehicle</code> inside the parentheses when defining the class <code>Truck</code> indicates that the <em>parent</em> <code>Vehicle</code> is being inherited by its child <code>Truck</code>.</p>
<p>The <code>__init__</code> method has <code>self</code> as its first parameter, as usual.</p>
<p>The parameters <code>year</code>, <code>model</code>, <code>plate_number</code>, and <code>current_speed</code> are there to match the ones in the <code>Vehicle</code> class.</p>
<p>We added a new parameter <code>current_cargo</code> suited for the <code>Truck</code> class.</p>
<p>In the first line of the <code>__init__</code> method of the <code>Truck</code> class we have to call the <code>__init__</code> method of the <code>Vehicle</code> class.</p>
<p>To do that we use <code>super()</code> to make a reference to the <em>supperclass</em> <code>Vehicle</code>, so when <code>super().__init__(year, model, plate_number, current_speed)</code> is called we avoid repetition of our code.</p>
<p>After that, we can assign the value of <code>current_cargo</code> normally.</p>
<p>Finally, we have two methods to deal with the <code>current_cargo</code>: <code>def add_cargo(self, cargo):</code>, and <code>def remove_cargo(self, cargo):</code>.</p>
<p>Remember that <code>Truck</code> inherits attributes and methods from <code>Vehicle</code>, so we also have an implicit access to the methods that manipulate the speed: <code>def move(self)</code>, <code>def accelerate(self, value)</code>, and <code>def stop(self)</code>.</p>
<h2 id="usingthetruckclass">Using the <code>Truck</code> class</h2>
<p>To use the class in your terminal, import the <code>Truck</code> class from the <code>truck</code> module.</p>
<p>Create an instance called <code>my_truck</code>, initializing <code>year</code> with 2015, <code>model</code> with 'V8', <code>plate_number</code> with 'XYZ1234', <code>current_speed</code> with 0, and <code>current_cargo</code> with 0.</p>
<p>Use <code>add_cargo(10)</code> to increase <code>current_cargo</code> by 10, <code>remove_cargo(4)</code>, to decrease <code>current_cargo</code> by 4.</p>
<p>Remember to print the value of <code>current_cargo</code> at every command to see the changes.</p>
<p>By inheritance, we can use the methods from the <code>Vehicle</code> class to <code>move()</code> the truck which increases its <code>current_speed</code> by 1, <code>accelerate(10)</code> which increases its <code>current_speed</code> by the value given in the argument, and <code>stop()</code> which sets the <code>current_speed</code> to 0.</p>
<p>Remember to print the value of <code>current_speed</code> at every interaction to see the changes.</p>
<p>To finish the test, call <code>vehicle_details()</code> inherited from the <code>Vehicle</code> class to print the information about our truck.</p>
<pre><code class="language-python">&gt;&gt;&gt; from truck import Truck
&gt;&gt;&gt;
&gt;&gt;&gt; my_truck = Truck(2015, 'V8', 'XYZ1234', 0, 0)
&gt;&gt;&gt; print(my_truck.current_cargo)
0
&gt;&gt;&gt; my_truck.add_cargo(10)
&gt;&gt;&gt; print(my_truck.current_cargo)
10
&gt;&gt;&gt; my_truck.remove_cargo(4)
&gt;&gt;&gt; print(my_truck.current_cargo)
6
&gt;&gt;&gt; print(my_truck.current_speed)
0
&gt;&gt;&gt; my_truck.accelerate(10)
&gt;&gt;&gt; print(my_truck.current_speed)
10
&gt;&gt;&gt; my_truck.stop()
&gt;&gt;&gt; print(my_truck.current_speed)
0
&gt;&gt;&gt; print(my_truck.vehicle_details())
V8, 2015, XYZ1234
</code></pre>
<p>Errors are a part of every programmer's life, and knowing how to deal with them is a skill on its own.</p>
<p>The way Python deals with errors is called 'Exception Handling'.</p>
<p>If some piece of code runs into an error, the Python interpreter will <em>raise</em> an exception.</p>
<h2 id="typesofexceptions">Types of Exceptions</h2>
<p>Let's try to raise some exceptions on purpose and see the errors they produce.</p>
<ul>
<li><code>TypeError</code></li>
</ul>
<p>First, try to add a string and an integer</p>
<pre><code class="language-python">'I am a string' + 32
</code></pre>
<pre><code>Traceback (most recent call last):
File "&lt;stdin&gt;", line 1, in &lt;module&gt;
TypeError: must be str, not int
</code></pre>
<ul>
<li><code>IndexError</code></li>
</ul>
<p>Now, try to access an index that doesn't exist in a list.</p>
<p>A common mistake is to forget that sequences are 0-indexed, meaning the first item has index 0, not 1.</p>
<p>In this example, the list <code>car_brands</code> ends at index 2.</p>
<pre><code class="language-python">car_brands = ['ford', 'ferrari', 'bmw']
print(car_brands[3])
</code></pre>
<pre><code>Traceback (most recent call last):
File "&lt;stdin&gt;", line 1, in &lt;module&gt;
IndexError: list index out of range
</code></pre>
<ul>
<li><code>NameError</code></li>
</ul>
<p>If we try to print a variable that doesn't exist:</p>
<pre><code class="language-python">print(my_variable)
</code></pre>
<pre><code>Traceback (most recent call last):
File "&lt;stdin&gt;", line 1, in &lt;module&gt;
NameError: name 'my_variable' is not defined
</code></pre>
<ul>
<li><code>ZeroDivisionError</code></li>
</ul>
<p>Math doesn't allow division by zero, so trying to do so will raise an error, as expected.</p>
<pre><code class="language-python">32/0
</code></pre>
<pre><code>Traceback (most recent call last):
File "&lt;stdin&gt;", line 1, in &lt;module&gt;
ZeroDivisionError: division by zero
</code></pre>
<p>This was just a sample of the kinds of exceptions you might see during your daily routine and what can cause each of them.</p>
<h2 id="exceptionhandling">Exception Handling</h2>
<p>Now we know how to cause errors that will crash our code and show us some message saying something is wrong.</p>
<p>To handle these exceptions just make use of the <code>try/except</code> statement.</p>
<pre><code class="language-python">try:
32/0
except:
print('Dividing by zero!')
</code></pre>
<pre><code>Dividing by zero!
</code></pre>
<p>The example above shows the use of the <code>try</code> statement.</p>
<p>Put the block of code that may cause an exception inside the <code>try</code> scope. If everything runs alright, the <code>except</code> block is not invoked. But if an exception is raised, the block of code inside the <code>except</code> is executed.</p>
<p>This way the program doesn't crash and if you have some code after the exception, it will keep running if you want it to.</p>
<h2 id="specificexceptionhandling">Specific Exception Handling</h2>
<p>In the last example the <code>except</code> block was generic, meaning it was catching anything.</p>
<p>Good practice it to specify the type of exception we are trying to catch, which helps a lot when debugging the code later.</p>
<p>If you know a block of code can throw an <code>IndexError</code>, specify it in the <code>except</code>:</p>
<pre><code class="language-python">try:
car_brands = ['ford', 'ferrari', 'bmw']
print(car_brands[3])
except IndexError:
print('There is no such index!')
</code></pre>
<pre><code>There is no such index!
</code></pre>
<p>You can use a tuple to specify as many exception types as you want in a single <code>except</code>:</p>
<pre><code class="language-python">try:
print('My code!')
except(IndexError, ZeroDivisionError, TypeError):
print('My Excepetion!')
</code></pre>
<h2 id="else"><code>else</code></h2>
<p>It is possible to add an <code>else</code> command at the end of the <code>try/except</code>. It runs only if there are no exceptions.</p>
<pre><code class="language-python">my_variable = 'My variable'
try:
print(my_variable)
except NameError:
print('NameError caught!')
else:
print('No NameError')
</code></pre>
<pre><code>My variable
No NameError
</code></pre>
<h2 id="raisingexceptions">Raising Exceptions</h2>
<p>The <code>raise</code> command allows you to manually raise an exception.</p>
<p>This is particularly useful if you want to catch an exception and do something with it -- like logging the error in some personalized way like redirecting it to a log aggregator, or ending the execution of the code since the error should not allow the progress of the program.</p>
<pre><code class="language-python">try:
raise IndexError('This index is not allowed')
except:
print('Doing something with the exception!')
raise
</code></pre>
<pre><code>Doing something with the exception!
Traceback (most recent call last):
File "&lt;stdin&gt;", line 2, in &lt;module&gt;
IndexError: This index is not allowed
</code></pre>
<h2 id="finally"><code>finally</code></h2>
<p>The <code>finally</code> block is executed independently of exceptions being raised or not.</p>
<p>They are usually there to allow the program to clean up resources like files, memory, network connections, etc.</p>
<pre><code class="language-python">try:
print(my_variable)
except NameError:
print('Except block')
finally:
print('Finally block')
</code></pre>
<pre><code>Except block
Finally block
</code></pre>
<p>That's it!</p>
<p>Congratulations on reaching the end.</p>
<p>I want to thank you for reading this article.</p>
<p>If you want to learn more, checkout my blog <a href="https://renanmf.com">renanmf.com</a>.</p>
<p>Remember <a href="https://renanmf.com/python-guide-beginners/">to download a PDF version of this Python Guide for Beginners</a>.</p>
<p>You can also find me on Twitter: <a href="https://twitter.com/renanmouraf">@renanmouraf</a>.</p>
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
