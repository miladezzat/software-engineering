---
card: "/images/default.jpg"
tags: [Python]
description: "Python is a popular, versatile and easy-to-learn language. It"
author: "Milad E. Fahmy"
title: "Want to learn Python? Here s our free 4-hour interactive course"
created: "2021-08-16T15:37:11+02:00"
modified: "2021-08-16T15:37:11+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-learn-to-code tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Want to learn Python? Here's our free 4-hour interactive course</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/03/gpython.jpg 300w,
/news/content/images/size/w600/2020/03/gpython.jpg 600w,
/news/content/images/size/w1000/2020/03/gpython.jpg 1000w,
/news/content/images/size/w2000/2020/03/gpython.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/03/gpython.jpg" alt="Want to learn Python? Here's our free 4-hour interactive course">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
</figure><p>This course aims to give you a solid foundation in both Python and basic programming in general. It's great for beginners looking for an interactive and engaging way to learn to code.</p><p>The course has been created by our brilliant teacher <a href="https://twitter.com/OlofPaulson">Olof Paulson</a>, who's one of the advocates for the Khan Academy in Swedish. Olof has a background in finance, is experienced in writing algorithms, and has a passion for open and accessible education.</p><p>Now let's have a look at how the course is laid out!</p><h2 id="1-course-introduction">1. Course Introduction</h2><p>This course covers all the topics you need to go from a beginner to an intermediate Python developer. It goes through:</p><ul><li>Outputting data and program flow</li><li>Strings, Variables</li><li>Arithmetic operations and comparisons</li><li>Lists, Tuples, Sets and Dictionaries</li><li>Conditionals, if and elifs</li><li>While and for loops</li><li>Functions / Return Statements</li><li>Objects, Classes and Inheritance</li><li>List / Dictionary Comprehensions and Lambda functions</li><li>Modules</li></ul><h2 id="2-running-python-on-scrimba-with-brython">2. Running Python on Scrimba with Brython</h2><p>To get a back-end language like Python to run on a front-end platform like Scrimba, we use the Brython plugin in the <code>index.html</code> file to recompile Python code into Javascript.</p><p>Generally, we'll be using the minimum JS (<code>brython.min.js</code>) version but for more functionality, simply uncomment the standard lib version (<code>brython_stdlib.js</code>).</p><pre><code class="language-html">&lt;head&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/brython/3.8.0/brython.min.js"&gt;&lt;/script&gt;
&lt;!--&lt;script type="text/javascript"
src="https://cdnjs.cloudflare.com/ajax/libs/brython/3.8.0/brython_stdlib.js"&gt;&lt;/script&gt;--&gt;
&lt;/head&gt;
</code></pre><p>It's also worth noting a few Brython oddities in Scrimba:</p><ol><li>The <code>input()</code> box is the JS prompt and not seen in the cast but works when you run local code.</li><li>The Scrimba minibrowser sometimes hovers in the corner during some tutorials - you don't have to worry about it.</li></ol><h2 id="3-print-statement-and-programflow">3. Print Statement and Programflow</h2><p>When we write Python, we often want to test that it is working as expected. To do this, we use the <code>print()</code> command to output data to the console.</p><pre><code class="language-python">print('Welcome to Python 101!')
</code></pre><p><strong>Note:</strong> The computer reads code from top to bottom, so it runs commands nearer the top first.</p><h2 id="4-variables">4. Variables</h2><p>Variables are used to save data for use later on. We declare variables using their name in lower case followed by the basic assignment operator (<code>=</code>). Note that if the variable name consists of more than one word, they should be separated with an underscore (<code>_</code>).</p><pre><code class="language-python">failed_subjects="6"
</code></pre><p>We use variables in our code by preceding them with a plus sign (<code>+</code>).</p><pre><code class="language-python">print('Your son Eric is failing' + failed_subjects + ' subjects.')
</code></pre><h2 id="5-datatypes-typecasting">5. Datatypes &amp; Typecasting</h2><p>The basic datatypes of Python are:</p><ul><li><strong>Strings</strong> - these surrounded by two quotation marks (can be double or single quotes).</li><li><strong>Integers</strong> - these are whole numbers.</li><li><strong>Floats</strong> - numbers with decimal points.</li><li><strong>Booleans</strong> - these take on the value <code>true</code> or <code>false</code>.</li></ul><p>To find out which data type you are using, use <code>type()</code></p><pre><code class="language-python">print(type('hello'))
</code></pre><p><strong>Note:</strong> If you want to use quotes or an apostrophe in a string, surround the entire string with double quotes. Alternatively, you can use Python's escape character, which is the backslash (<code>\</code>)</p><pre><code class="language-python">a="it's"
b='it\'s'
</code></pre><p>There are rules around mixing data types, for example you can't put numbers inside a string. <code>Typecasting</code>, or changing the type, resolves this.</p><ul><li><code>str()</code> changes data to a string.</li><li><code>int()</code> changes data to an integer.</li><li><code>float()</code> changes data to a float.</li></ul><pre><code class="language-python">print('Your son ' + name + ' is failing ' + str(failed_subjects) + ' subjects.')
</code></pre><h2 id="6-variables-datatypes-exercise">6. Variables &amp; Datatypes - Exercise</h2><p>It's time for your very first Scrimba Python challenge! In this cast, you can put your new-found knowledge of variables and datatypes to the test. Try to solve the challenge by yourself, and then <a href="https://scrimba.com/p/pNpZMAB/cZPZ6wSb?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=gpython_launch_article">check out Olof's solution</a> to see whether you're on the right track.</p><h2 id="7-arithmetic-operations">7. Arithmetic Operations</h2><p>Here, we learn that the basic arithmetic operations in Python are addition, subtraction, multiplication, float division (which returns a floating point number), floor division (which rounds the result down to the nearest integer), modulus (which returns the remainder of the calculation) and exponent (which multiplies a number the to power of another number).</p><pre><code class="language-python">a=10
b=3
print('Addition : ', a + b)
print('Subtraction : ', a - b)
print('Multiplication : ', a * b)
print('Division (float) : ', a / b)
print('Division (floor) : ', a // b)
print('Modulus : ', a % b)
print('Exponent : ', a ** b)
</code></pre><h2 id="8-strings-basics-slicing">8. Strings - Basics / Slicing</h2><p>In this cast, we learn about some of the basic concepts when it comes to using strings.</p><ul><li>Multiplying strings allows us to print a string multiple times. There are three ways of doing this (the final one inserts a space between strings):</li></ul><pre><code class="language-python">print(msg+msg)
print(msg*2)
print(msg,msg)
</code></pre><p>We can change the case of the strings in a number of ways:</p><ul><li><code>upper()</code> changes the string to upper case.</li><li><code>lower()</code> changes the string to lower case.</li><li><code>capitalize()</code> capitalizes a string's first word.</li><li><code>title()</code> capitalizes every word in a string.</li></ul><pre><code class="language-python">print(msg.upper())
print(msg.lower())
print(msg.capitalize())
print(msg.title())
</code></pre><p>We can use the following functions to find out information about a string:</p><ul><li><code>print(len(msg))</code> tells us how many characters the string has (in this case, <code>msg</code>).</li><li><code>print(msg.count('Python'))</code> counts the number of instances of a word or letter - note that this is case sensitive.</li></ul><p>We access strings with square brackets (<code>[]</code>).</p><pre><code>print(msg[0])
You must cut down the mightiest
tree in the forest with…
a herring! &lt;3"""
</code></pre><p>Olof runs us through some examples of working with strings:</p><p><code>print(msg.find('Python'))</code> returns the position of the words or characters we search for (in this case, 'Python').</p><p><code>print(msg.replace('Python','Java'))</code> allows us to replace words or characters in a string. Note that strings are immutable in Python, so to use the result of this function, you need to save it to a variable.</p><pre><code class="language-python">msg1=msg.replace('Python','C')
</code></pre><p><code>print('Python' in msg)</code> tells us whether a word or character exists in a string by returning <code>true</code> or <code>false</code>.</p><p><code>msg1 = f'[{name}] loves the color {color}!'</code> allows us to format strings so that they are more readable.</p><h2 id="11-user-input">11. User Input</h2><p>In Python, we capture user input and print it like this:</p><pre><code class="language-python">name= input('What is your name?: ')
print(name)
</code></pre><p>Lists are also zero-indexed, and can be accessed with square brackets, just like strings:</p><pre><code class="language-py">print(friends[1])
</code></pre><p>We can also use the same commands we used with strings to find out a string's length, find certain data within a string, etc.</p><pre><code class="language-py">print(friends[1],friends[4])
print(len(friends))
print(friends.coun('Eric'))
print('-'.join(friends_list))
</code></pre><h2 id="17-split-and-join-exercise">17. Split and Join - Exercise</h2><p>Here you'll use what you now know about splitting and joining to create a list of friends from a string.</p><p>As usual, have a go on your own and then <a href="https://scrimba.com/p/pNpZMAB/cJp2gEcW?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=gpython_launch_article">check out Olof's solution</a> to check your work.</p><h2 id="18-tuples">18. Tuples</h2><p>Tuples are lists that you can't change. They look the same as lists but are surrounded by parentheses instead of square brackets.</p><pre><code class="language-py">friends_tuple = ('John','Michael','Terry','Eric','Graham')
</code></pre><p>You should use tuples instead of lists when you want to make sure that your data won't change in the course of your program running.</p><h2 id="19-sets">19. Sets</h2><p>Sets are similar to lists and tuples but they're unordered and remove duplicates inside themselves. They are also very fast. Sets are surrounded by curly brackets.</p><pre><code class="language-py">friends_set = {'John','Michael','Terry','Eric','Graham','Eric'}
</code></pre><p>In this cast, Olof takes us through some tips and tricks for using lists. <strong>Note:</strong> Creating an empty set works differently than creating an empty list or tuple:</p><pre><code class="language-py">#empty Lists
empty_list = []
empyt_list = list()
#empty Tuple
empty_tuple = ()
empty_tuple = tuple()
#empty Set
empty_set = {} # this is wrong, this is a dictionary
empty_set = set()
</code></pre><h2 id="20-sets-exercise">20. Sets - Exercise</h2><p>Here, we'll put our new-found knowledge of sets to the test. Take a look at the <a href="https://scrimba.com/p/pNpZMAB/caqBRLsW?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=gpython_launch_article">end of the cast</a> to check your answer.</p><h2 id="21-comments">21. Comments</h2><p>Comments are text in the code that Python ignores. They are mainly used for human-human communication, e.g. notes about the code, debugging or testing, and code documentation. Comments are preceded by the pound sign (<code>#</code>):</p><pre><code class="language-py">#Hiding in the comments
</code></pre><h2 id="22-functions-calling-parameters-arguments-defaults">22. Functions - Calling, Parameters, Arguments, Defaults</h2><p>In this cast, Olof introduces us to functions - bundles of code which we can reuse later.</p><p>Functions are created (defined) with <code>def</code> and called with the function name plus parentheses <code>()</code>:</p><pre><code class="language-py">def greeting():
print("Hello Friend!")
greeting()
</code></pre><p>We also take another look at formatted strings, and how using them makes code more readable and more efficient.</p><pre><code class="language-py">def greeting(name,age=28):
print("Hello " + name + ", you are " + str(age) + "!")
print(f"Hello {name}, you are {age}!")
</code></pre><h2 id="23-functions-exercise">23. Functions - Exercise</h2><p>Here, Olof gives us the task of modifying and extending the functionality of an existing function. Give it a shot and then watch <a href="https://scrimba.com/p/pNpZMAB/c67dzEAV?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=gpython_launch_article">the rest of the cast</a> to see if you're on the right track.</p><h2 id="24-functions-named-notation">24. Functions - Named Notation</h2><p>Named notation is the practice of naming arguments when calling a function so that the function definition understands which argument is which, even if they appear in a different order.</p><pre><code class="language-py">Profile(yob=1995,weight=83.5,height=192,eye_color="blue")
</code></pre><h2 id="25-return-statements">25. Return statements</h2><p>This cast takes us through return statements. A return statement allows us to get back our data after performing a function.</p><pre><code class="language-py">def value_added_tax(amount):
tax = amount * 0.25
return tax
</code></pre><p>Olof also takes us through a few handy ways of playing with our returned data, including creating strings, sets and tuples with it.</p><h2 id="26-comparisons-and-booleans">26. Comparisons and Booleans</h2><p>This tutorial whizzes through some ways of comparing data, including equals (<code>==</code>), is not equal (<code>!=</code>), greater than (<code>&gt;</code>), greater than or equal to (<code>&gt;=</code>), less than (<code>&lt;</code>), less than or equal to (<code>&lt;=</code>), in (<code>in</code>), not in (<code>not in</code>), is (<code>is</code>) and is not (<code>is not</code>).</p><p>We also take a look at some Boolean properties and learn that <code>false</code> evaluates to 0 and <code>true</code> evaluates to 1. Empty objects and zeroes evaluate to false and everything else (strings, numbers except 0, and so on) evaluates to true.</p><h2 id="27-conditionals-if-else-elif">27. Conditionals: If, Else, Elif</h2><p>Conditionals allow us to run different code for different circumstances. <code>if</code> statements run if the function returns true, <code>elif</code> (else if) statements run if the functions returns true after another statement has returned false, and <code>else</code> statements run if none of the preceding statements have returned true, i.e. in all other eventualities.</p><pre><code class="language-py">is_raining = False
is_cold = False
print("Good Morning")
if is_raining and is_cold:
print("Bring Umbrella and jacket")
elif is_raining and not(is_cold):
print("Bring Umbrella")
elif not(is_raining) and is_cold:
print("Bring Jacket")
else:
print("Shirt is fine!")
</code></pre><h2 id="28-if-elif-else-exercise">28. If/Elif/Else - Exercise</h2><p>It's time to flex our conditional muscles with an exercise. We also get the chance to have a go at some extended functionality with a temperature converter.</p><p>As usual, go ahead and see if you can solve it yourself and check your answer against <a href="https://scrimba.com/p/pNpZMAB/c2PWdWCN?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=gpython_launch_article">Olof's solution</a>.</p><h2 id="29-conditionals-exercise-improve">29. Conditionals - Exercise Improve</h2><p>The cast gives us the chance to try out some optimization by shortening code and reducing the number of conditionals it contains. </p><p>There are many different ways of achieving this, so have a go on your own and then compare your answer to how Olof tackles it at the <a href="https://scrimba.com/p/pNpZMAB/cPJDRNcr?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=gpython_launch_article">end of the cast</a>.</p><h2 id="30-while-loops">30. While Loops</h2><p>While loops are code which runs repeatedly until a condition tells it to stop. To create a loop, begin by asking yourself these questions:</p><p>What do I want to repeat?</p><p>What do I want to change each time?</p><p>How long should we repeat?</p><p>In the below example, we want to repeat adding one, we want to change <code>i</code>, and we want this to repeat until the number five is reached:</p><pre><code class="language-py">i=0
while i &lt; 5:
i+=1
print(f"{i}."+ "*"*i + "Loops are awesome" + "*"*i)
</code></pre><h2 id="31-while-loops-exercise">31. While Loops - Exercise</h2><p>It's time for an exercise on loops. In this challenge, we'll make a fun guessing game. Don't forget to consider the three loop questions in the previous chapter before you start, and then check the solution at the <a href="https://scrimba.com/p/pNpZMAB/cV8WmMcM?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=gpython_launch_article">end of the cast</a> to see how it went.</p><h2 id="32-for-loops-and-nesting">32. For Loops and Nesting</h2><p>For loops allow us to execute a statement for each item in a string, list, tuple or set. For example, the following code prints every number between two and eight:</p><pre><code class="language-py">for number in range(2,8):
print(number)
</code></pre><p>It is also possible to nest loops inside other loops. The code below prints each of the numbers 1, 2 and 3 for every friend (John 1, John 2, John 3, Terry 1, Terry 2, Terry 3, etc.)</p><pre><code class="language-py">friends = ['John','Terry','Eric']
for friend in friends:
for number in [1,2,3]:
print(friend, number)
'title' : 'Life of Brian',
'year' : 1979,
'cast' : ['John','Eric','Michael','George','Terry']
}
</code></pre><p>Olof also runs us through how to change entries in a dictionary and add new ones, as well as how to handle the error message caused by users looking up entries which don't exist and how to run for loops over dictionary data.</p><pre><code class="language-py">for key, value in movie.items():
print(key, value)
</code></pre><h2 id="35-sort-and-sorted-">35. Sort() and Sorted()</h2><p>Here, we learn about the difference between <code>sort()</code> and <code>sorted()</code>. While both functions sort the contents of a list, only <code>sorted()</code> returns the results.</p><p>We also look at the behavior of dictionaries, tuples and strings when they are sorted and see a brief introduction to <em>lambda functions</em> - one-line convenient throwaway functions, which we will see more on in a later tutorial. The lambda example below sorts the list according to the first entries:</p><pre><code class="language-py">my_list=[['car',4,65],['dog',2,30],['add',3,10],['bee',1,24]]
print(sorted(my_list, key = lambda item :item[0]))
</code></pre><h2 id="36-exceptions-try-except-raise">36. Exceptions: Try/Except, Raise</h2><p>In this cast, Olof takes us through some techniques for handling errors. We do this with <code>try-except</code> blocks, which look like this:</p><pre><code class="language-py">#try:
#code you want to run
#except:
#executed if error occurs
#else:
#executed if no error
#finally:
#always executed
</code></pre><h2 id="37-classes-and-objects">37. Classes and Objects</h2><p>Next up, Olof shows us classes and objects. There are four main concepts to understand when it comes to classes. These are classes, objects, attributes and methods.</p><p>Classes are blueprints which show us the structure of the data required. Objects contain the actual data we use. Attributes are variables within a class and methods are functions within a class.</p><p>We initialize a class with the initialization statement <code>init</code>:</p><pre><code class="language-py">class Movie:
def __init__(self,title,year,imdb_score,have_seen):
self.title = title
self.year = year
self.imdb_score = imdb_score
self.have_seen = have_seen
</code></pre><p><strong>Note:</strong> By convention, we use the <code>self</code> keyword when naming attributes.</p><p>Having done this, we can now create instances of the class, as below:</p><pre><code class="language-py">film_1 = Movie("Life of Brian",1979,8.1,True)
film_2 = Movie("The Holy Grail",1975,8.2,True)
</code></pre><p>Methods are defined in classes as follows:</p><pre><code class="language-py">    def nice_print(self):
print("Title: ", self.title)
print("Year of production: ", self.year)
</code></pre><p>There are two ways of calling methods (the output is the same):</p><pre><code class="language-py">film_2.nice_print()
Movie.nice_print(film_2)
</code></pre><h2 id="38-inheritance">38. Inheritance</h2><p>In this cast, Olof shows us around the concept of inheritance. Inheritance allows us to use the methods from one class in another class without repeating all the code. We can then add further methods to differentiate the classes from each other.</p><pre><code class="language-py">class Person:
def move(self):
print("Moves 4 paces")
def rest(self):
print("Gains 4 health points")
class Doctor(Person):
def heal(self):
print("Heals 10 health points")
</code></pre><p>A class can inherit from multiple other classes. If the classes have different outputs for the same method, the class will choose the inherited method which is declared first. </p><p>In the example below, the Wizard class will inherit any shared methods from the Doctor and not the Fighter.</p><pre><code class="language-py">class Wizard(Doctor,Fighter):
def cast_spell(self):
print("Turns invisble")
def heal(self):
print("Heals 15 health points")
</code></pre><h2 id="39-modules">39. Modules</h2><p>Now it's time to look at modules. Modules are code snippets which you can import and use in the code. Some commonly-used ones provided by Python are <code>datetime</code>, <code>random</code>, <code>string</code>, <code>os</code>, <code>math</code>, <code>browser</code> and <code>platform</code></p><p>To use modules, we first need to import Brython's standard lib version:</p><pre><code class="language-html">&lt;head&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/brython/3.7.0/brython.min.js"&gt;&lt;/script&gt;
&lt;script
type="text/javascript"
src="https://cdnjs.cloudflare.com/ajax/libs/brython/3.7.0/brython_stdlib.js"
&gt;&lt;/script&gt;
--&gt;
&lt;/head&gt;
</code></pre><p>Modules are imported with the <code>import</code> keyword and can be given an easier-to-use alias with <code>as</code>:</p><pre><code class="language-py">import platform as pl
print(pl.python_version())
</code></pre><h2 id="40-zip-unzip">40. Zip / Unzip</h2><p>In this cast, Olof shows us how to zip and unzip objects. Zipping allows us to combine two or more iterable objects (strings, tuples, lists, etc.).</p><pre><code class="language-py">nums = [1,2,3,4]
letters = ['a','b','c','d']
combo = list(zip(nums,letters))
print(combo)
</code></pre><p>The example above turns the combined iterables into a list, but we could also turn it into a tuple, set or dictionary. <strong>Note:</strong> A dictionary is unsuitable when zipping more than two objects.</p><p>Unzipping allows us to assign results into separate variables, in this case <code>num</code>, <code>let</code> and <code>nam</code>.</p><pre><code class="language-py">num,let,nam =zip(*combo)
</code></pre><h2 id="41-lambda-functions-part-1">41 Lambda Functions part 1</h2><p>Here, we take a closer look at lambdas, or anonymous functions, which allow you to write single-line, throwaway function definitions which you might just use once. Compare the following:</p><p><strong>Standard function:</strong></p><pre><code class="language-py">def square(x):
return x*x
print(square(3))
</code></pre><p><strong>Lambda:</strong></p><pre><code class="language-py">square1 = lambda x: x*x
</code></pre><p><strong>Note:</strong> The return value in a lambda is implicit.</p><h2 id="42-lambda-functions-part-2">42. Lambda Functions Part 2</h2><p>In this cast, we delve a little deeper into lambdas. Although we could always replicate a lambda with a standard function, there are some instances when lambdas are significantly better.</p><p>In this example, the return value of the lambda is a function, which gives us the ability to reuse the lambda for multiple different tasks. In the code below, we use a single lambda to multiply by two and five:</p><pre><code class="language-py">def func(n):
return lambda a: a*n
# a*2
doubler = func(2)
print(doubler(3))
quintipler = func(5)
print(quintipler(3))
print(type(func(3)))
</code></pre><p>This cast also explains that we can call lambdas as soon as we create them.</p><pre><code class="language-py">print((lambda a,b,c: a+b+c)(2,3,4))
for movie, yr in zip(movies,year):
new_dict[movie] = yr
print(new_dict)
</code></pre><p>With a comparison, it looks like this:</p><pre><code class="language-py">new_dict = {movie:yr for movie,yr in zip(movies,year)}
print(new_dict)
</code></pre><p>Much more concise and readable!</p><h2 id="46-randomness">46. Randomness</h2><p>This cast takes us through the <code>random</code> module and teaches us how to generate pseudo-random events. To use the module, we first import it:</p><pre><code class="language-py">import random
</code></pre><p>We can then use the module to generate pseudo-random numbers:</p><pre><code class="language-py">for i in range(5):
print(random.random()*6)
</code></pre><p>Olof also shows us a variety of functions we can use with <code>random</code>.</p><p>Use of <code>random</code> is not limited to numbers though. We can also use it with iterables:</p><pre><code class="language-py">friends_list =  ['John', 'Eric', 'Michael', 'Terry', 'Graham']
print(random.choice(friends_list))
</code></pre><p>Lastly, Olof shows us the <code>string</code> modules and we learn how to create pseudo-random words.</p><pre><code class="language-py">import random, string
smallcaps = 'abcdefghijklmnopqrstuvwxyz'
largecaps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
digits = '0123456789'
letters_numbers = string.ascii_letters + string.digits
word = ''
for i in range(7):
word += random.choice(letters_numbers)
word1 = ''.join(random.sample(letters_numbers,7))
word = random.choices(letter_numbers, k=7)
print(word)
print(word1)
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
