---
card: "/images/default.jpg"
tags: [Python]
description: "This article is for people who already have experience in pro"
author: "Milad E. Fahmy"
title: "Python Crash Course for Non-Python Programmers - How to Get Started Quickly"
created: "2021-08-16T15:36:23+02:00"
modified: "2021-08-16T15:36:23+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-python3 tag-tutorial tag-beginners-guide tag-100daysofcode tag-code-newbie tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">Python Crash Course for Non-Python Programmers - How to Get Started Quickly</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/05/Python-language.png 300w,
/news/content/images/size/w600/2020/05/Python-language.png 600w,
/news/content/images/size/w1000/2020/05/Python-language.png 1000w,
/news/content/images/size/w2000/2020/05/Python-language.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/05/Python-language.png" alt="Python Crash Course for Non-Python Programmers - How to Get Started Quickly">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>This article is for people who already have experience in programming and want to learn Python quickly.</p><p>I created this resource out of frustration when I couldn't find an online course or any other resource that taught Python to programmers who already knew other programming languages.</p><p>In this course, I will be covering all the basics of Python (in-depth lessons will be added later on) so that you can get started with the language very quickly.</p><h2 id="table-of-contents">Table of contents</h2><ul><li>Setting up the environment</li><li>Hello World</li><li>Strings</li><li>Numbers</li><li>Float</li><li>Bool</li><li>List</li><li>Tuple</li><li>Sets</li><li>Dictionary</li><li>if..else</li><li>Loops</li><li>Functions</li><li>Classes</li><li>Modules</li><li>Truthy and Falsy values</li><li>Exception handling</li></ul><h2 id="setting-up-the-environment">Setting up the environment</h2><p>To get started, install Python 3. I recommend using VSCode as your editor. It has lots of extensions to configure so that you can setup your environment in just a few minutes.</p><h2 id="hello-world">Hello world</h2><pre><code>print("Hello world")
</code></pre><p>If you already know programming basics, you'll probably know how to run this program :P. Save the program with the <code>.py</code> extension. Then run <code>python hello.py</code> or <code>python3 hello.py</code>.</p><p>In this whole tutorial, we will follow <code>python3</code>. <code>python2</code> will be discontinued by 2020. So I think it’s good to go with the latest version.</p><h2 id="variables-and-data-types">Variables and data types</h2><p>Variables can contain letters, numbers, and underscores.</p><h3 id="strings">Strings</h3><pre><code class="language-python"># This is comment in Python
msg_from_computer = "Hello" # String
another_msg ='Hello in single quote' # This is also a String.
print(msg_from_computer + " World..!")
# Type will return the data type.
print(type(msg_from_computer)) # &lt;type 'str'&gt;. We will see the explanation of this later.
</code></pre><h3 id="numbers">Numbers</h3><pre><code class="language-python">2
2 * 3
2 ** 7
(2 + 3) * 4
</code></pre><h3 id="floats">Floats</h3><pre><code class="language-python">2.7
0.1 + 0.2 # 0.3
2 * 0.1 # 0.2
</code></pre><p>Be careful in Concatenation:</p><pre><code class="language-python">count = 5
print("I need" + count + "chocolates") # This line will throw error. As count is a integer, you have to type cast it.
print("I need" + str(count) + "chocolates") # This will work
</code></pre><h3 id="bool">Bool</h3><pre><code class="language-python">True # First letter is caps
False
bool("some value") # Returns True
bool("") # Returns False
bool(1) # Returns True
</code></pre><h3 id="list">List</h3><p>Lists are basically like arrays. In the Python world, they call them <code>List</code>. And they are ordered.</p><pre><code class="language-python">numbers = ["one", "two", "three"]
numbers[0] # one
numbers[-1] # three. This is awesome. If we pass negative value Python will start from the end.
numbers[-2] # two
len(numbers) # 3. It just returns the length
numbers.append("four") # Append will add the element to the last. ["one", "two", "three", "four"]
numbers.insert(1, "wrong_one") # Insert will insert the particular value to the appropiate position. ["one", "wrong_one", "two", "three", "four"]
# Deleting a value is somewhat weird
del numbers[1] # Will delete the value in the appropiate position. "one", "two", "three", "four"]
# Pop will help you to remove the last element of an array
popped_element = numbers.pop()
print(popped_element) # four
print(numbers) # ["one", "two", "three"]
# Remove elements by value
numbers.remove("two") # ["one", "three"]. This will remove only the first occurence of an array.
# Sorting
alpha = ["z", "c", "a"]
alpha.sort()
print(alpha) # ["a", "c", "z"] Sorting is permanent. now `alpha` is sorted permanently
alpha.sort(reverse=True)
print(alpha) #["z", "c" , "a"] Reverse sorting.
alpha = ["z", "c", "a"]
print(sorted(alpha)) # ["a", "c", "z"] This will just return the sorted array. It wont save the sorted array to the variable itself.
print(alpha) # ["z", "c", "a"] As you can see, it's not sorted
# Reversing an array
nums = [10, 1, 5]
nums.reverse()
print(nums) # [5, 1, 10] It just reverses an array. It means it reads from last. It's not sorting it. It's just changing the chronological order.
# Slicing elements
alpha = ['a', 'b', 'c', 'd', 'e']
alpha[1:3] # ['b', 'c']. The first element is the starting index. And Python stops in the item before the second index.
alpha[2:5] # ['c', 'd', 'e']
alpha[:4] # [ 'a', 'b', 'c', 'd'] In this case, the first index is not present, so Python startes from the beginning.
alpha[:3] # ['a', 'b', 'c']
alpha[3:] # ['d', 'e'] In this case, last index is not present. So it travels till the end of the list.
alpha[:] # ['a', 'b', 'c', 'd', 'e'] There is no starting or ending index. So you know what happens. And this helps you in copying the entire array. I think I don't have to explain that if you copy the array, then any changes in the original array won't affect the copied array.
another_alpha = alpha # This is not copying the array. Any changes in alpha will affect another_alpha too.
</code></pre><h3 id="tuples">Tuples</h3><p>Tuples are just like lists but they are <strong>immutable.</strong> This means you can’t add or update them. You can just read elements. And remember, like lists, Tuples are also sequential.</p><pre><code class="language-python">nums = (1, 2, 3)
print(nums) # (1, 2, 3)
print(nums[0]) # 1
print(len(nums)) # 3
empty_tuple = () # empty tuple. Length is zero.
num = (1, ) # Note the trailing comma. When defining a single element in the tuple, consider adding a trailing comma.
num = (1)
print(type(num)) # &lt;type 'int'&gt; It won't return a tuple. Because there is no trailing comma.
# Creating a new tuple from the existing tuple
nums = (1, 2, 3)
char = ('a', )
new_tuple = nums + char
print(new_tuple) # (1, 2, 3, 'a')
</code></pre><h3 id="sets">Sets</h3><p>Sets are unordered collections with no duplicate elements.</p><pre><code class="language-python">alpha = {'a', 'b', 'c', 'a'}
print(alpha) # set(['a', 'c', 'b']) As you can see, duplicates are removed in sets. And also the output is not ordered.
# Accessing items in set
# You can't access by index because Sets are unordered. You can access it only by loop. Don't worry about the for loop, we will get that in-depth in the following section.
for ele in alpha:
print(ele)
# To add element into the set
alpha.add('s')
# add can be used to insert only one element. If you want multiple elements, then update will be handy
alpha.update(['a', 'x', 'z']) # set(['a', 'c', 'b', 'x', 'z']) Remember duplicated are removed.
# Length of the alpha
len(alpha) # 5
# Remove the element from the set
alpha.remove('a')
</code></pre><h3 id="dictionaries">Dictionaries</h3><p>Dictionaries are key-value maps in Python. They're unordered.</p><pre><code class="language-python">user = {'id': 1, 'name': 'John wick', 'email': 'john@gmail.com'}
user['id'] # 1
user['name'] # John wick
# Length of the dict
len(user) # 3
# Add new key-value pair
user['age'] = 35
# To get all the keys
keys = user.keys() # ['id', 'name', 'email', 'age']. This will return a list.
# To get all the values
values = user.values() # [1, 'John wick', 'john@gmail.com']
# To delete a key
del user['age']
# Example of nested dict.
user = {
'id': 1,
'name': 'John wick',
'cars': ['audi', 'bmw', 'tesla'],
'projects': [
{
'id': 10,
'name': 'Project 1'
},
{
'id': 11,
'name': 'Project 2'
}
]
}
# We will see, how to loop through the dict in for loop section.
</code></pre><h2 id="if-else">if..else</h2><p>You likely already know how the <code>if..else</code> statement works. But let's see an example here:</p><pre><code class="language-python">a = 5
b = 10
# See for the indentation. Indentations are very important in Python. Python will throw error if indentations are proper.
if a == 5:
print('Awesome')
# and is equivalent to &amp;&amp;
if a == 5 and b == 10:
print('A is five and b is ten')
# if else statement. This is same as most of the languages.
if a == 5:
print('A is five')
elif a == 6:
print('A is six')
elif a == 7:
print('A is seven')
else:
print('A is some number')
# or is equivalent to ||
if a &lt; 6 or a == 10:
print('A should be less than 6 or should be equal to ten')
# not is equivalent to !
if not a == 10:
print('A is not equal to 10')
# This is the short-hand notation of if statement.
if a == 5: print('A is five')
# Short-hand for if-else statement.
print('A is five') if a == 5 else print('A is not five')
</code></pre><h2 id="loops">Loops</h2><p>Python has two types of loops:</p><ol><li>For</li><li>While</li></ol><h3 id="while-loops">while loops</h3><pre><code class="language-python"># The following while print till 5. Remember the indentation.
i = 0
while i &lt;= 5:
print(i)
i += 1
# Using brake or continue in while loop
i = 0
while i &lt;= 5:
print(i)
i += 1
if i == 2:
break # You can try using continue here
# Here comes the interesting part. While loop has else part. Else part will execute once the entire loop is completed.
i = 10
while i &lt;= 15:
print(i)
i += 1
else:
print('Completed')
# Output
10
11
12
13
14
15
Completed
# But if you are using break in the loop, then Python will break out of the entire loop and it won't execute else part.
i = 10
while i &lt;= 15:
print(i)
i += 1
if i == 13:
break
else:
print('Completed')
# Output
10
11
12
</code></pre><h3 id="for-loops">For loops</h3><pre><code class="language-python"># For loops like for(i=0; i&lt;5; i++) are not mostly used in Python. Instead, Python insists on iterating over items
arr = ['a', 'b', 'c', 'd', 'e']
for ele in arr: # Prints every element in an array
print(ele)
word = "python"
for char in word: # Prints every char in the word
print(char)
# You can use break, continue and else part in for-loop also.
# When talking about for loops, I noticed that most resources have also mentioned about range() function. (We will deal with functions later part of this article.)
# range() function will generates a sequence of numbers.
# range(start, stop, step)
# start - optional, the starting number. Default is 0. This number is included in the sequence
# stop - mandatory, the ending number. This number is excluded in the sequence
# step - optional, increments by. Default is 1.
range(3) # This code generates a sequences from 0 to 2.
range(1, 4) # This code generates a sequence from 1 to 3.
range(1, 8, 2) # This code generates a sequence with 1, 3, 5, 7
for ele in range(3): # Prints from 0 to 2.
print(ele)
# In the below example, you can see I have used range to iterate through an array with index.
for index in range(0, len(arr)):
print(arr[index])
dict = {'name': 'John wick'}
# You can iterate through a dictionary. items() will return both keys and values. You can also use keys() and values() if needed.
for key, value in dict.items():
print(key + " is " + value)
# You can also use a built-in function enumerate(). enumurate() will return a tuple with index. It is mostly used to add a counter to the iterable objects in Python.
for index, value in enumerate(arr):
print(value + " is present in " + str(index))
</code></pre><h2 id="functions">Functions</h2><pre><code class="language-python">def prints_hello_world():
print('Hello world from Python')
prints_hello_world()
# Return statement
def prints_something(something):
return something + ' from Python'
print(prints_something('Hello world'))
# If you pass wrong number of arguments like two or three arguments to this function then Python will throw an error.
print(prints_something())
# Default parameter. I think its common in most languages now.
def prints_something(something = 'Hello world'):
print(something + ' from Python')
# keyword arguments. You can pass explicitly which parameter should be matched. In this way, you don't have to send the arguments in order just explicitly mention the parameter name.
def movie_info(title, director_name, ratings):
print(title + " - " + director_name + " - " + ratings)
movie_info(ratings='9/10', director_name='David Fincher', title='Fight Club')
# Arbitrary number of arguments
# Sometimes, you dont know how many arguments are passed. In that case, you have ask Python to accept as many arguments as possible.
def languages(*names):
print(names) # ('Python', 'Ruby', 'JavaScript', 'Go'). This is a tuple.
return 'You have mentioned '+ str(len(names))+ ' languages'
print(languages('Python', 'Ruby', 'JavaScript', 'Go')) # You have mentioned 4 languages
def languages(fav_language, *names):
print(names) # ('Ruby', 'JavaScript', 'Go')
return 'My favorite language is ' + fav_language+ '. And Im planning to learn other '+ str(len(names))+ ' languages too'
print(languages('Python', 'Ruby', 'JavaScript', 'Go')) # My favorite language is Python. And Im planning to learn other 3 languages too
# Arbitrary keyword arguments
# These types of arguments are useful when you don't know what kind of parameters are passed. In the previous case, it's useful when you don't know how many number of parameters are passed but in this case, you don't know what type of information will be passed.
def user_info(**info):
print(info) # {'id': 1, 'name': 'Srebalaji', 'fav_language': ['Python', 'Ruby']} This is a dictionary
# Arbitrary keyword args will always expect to mention the parameters explicitly
user_info(id=1, name='Srebalaji', fav_language=['Python', 'Ruby'])
# The below code will throw error. There is no keyword arguments.
user_info(1, 'Srebalaji')
def user_info(id, name, **info):
print(info) # {'fav_language': ['Python', 'Ruby'], 'twitter_handle': '@srebalaji'}
user_info(1, 'Srebalaji', fav_language=['Python', 'Ruby'], twitter_handle='@srebalaji')
</code></pre><h2 id="classes">Classes</h2><pre><code class="language-python"># Python is general purpose and also object oriented language.
# It's a convention that the class name starts with caps. But Python doesn't throw any error if you are not following it.
class Animal():
# This is the constructor.
# As you can see in every method of the class I have passed 'self' as the first parameter. The first parameter is always expected to be the current instance of the class and it is mandatory to pass the instance in the first parameter. And you can name that variable whatever you like.
def __init__(self, name):
self.name = name
def eat(self):
print(self.name +' eats')
def sleep(self):
print(self.name+' sleeps')
# Initiating a class
dog = Animal('harry')
dog.eat()
print(dog.name) # As you can see, 'name' attribute is also avaiable in public.
# It can even be modified.
dog.name = 'Rosie'
print(dog.name) # 'Rosie'
# Technically there is no way to make private attrbiutes in Python. But there are some techniques Python devs are using it. I will try to list out some.
# Protected attributes.
# These attributes can only be accessed within the class and also by the sub-class.
class Person():
# You can see that I have used different name for the first parameter.
def __init__(my_instance, name):
# 'name' attribute is protected.
my_instance._name = name
def reads(my_instance):
print(my_instance._name + ' reads')
def writes(my_object):
print(my_object._name + ' writes')
person1 = Person('Ram')
person1.reads()
# But the worst part is that instance of the class can still access and change it :P
print(person1._name) # 'Ram'
person1._name = 'I can still change.'
print(person1._name) # I can still change
# Protected can useful sometimes. Let's see how private attributes works. That can be a life saver sometimes.
class Person():
def __init__(self, name):
# 'name' attribute is private.
self.__name = name
def reads(self):
print(self.__name + ' reads')
def writes(self):
print(self.__name + ' writes')
# This is a private method. This can't be accessed outside the class.
def __some_helper_method():
print('Some helper method.')
person1 = Person('Ram')
person1.reads() # Ram reads
print(person1.name) # Will throw an error. 'Person' object has no attribute 'name'
print(person1.__name) # Will throw an error. 'Person' object has no attribute '__name'
# Private attributes can only be accessed within the class. So it's safe. But still there is a catch :P
print(person1._Person__name) # Ram.
# You can even change the value
person1._Person__name = 'Hari'
print(person1._Person__name) # Hari.
# But every dev know that accessing and modifying the private attributes is a bad practice. And Python doesn't really have a clear restriction to avoid it. So you got to trust your peers on this.
# Inheritance
class Animal():
def __init__(self, name):
self.name = name
def eat(self):
print('Animal eats')
def sleep(self):
print('Animal sleeps')
# Dog is a sub class of Animal
class Dog(Animal):
def __init__(self, name):
self.name = name
def eat(self):
print('Dog eats')
dog1 = Dog('harry')
dog1.eat() # Dog eats
dog1.sleep() # Animal sleeps
</code></pre><h2 id="modules">Modules</h2><pre><code class="language-python"># Modules helps us to organise code in Python. You can split code in different files and in folders and can access them when you wanted.
# Consider the below file. It has two functions.
# calculations.py
def add(a, b):
return a + b
def substract(a, b):
return a - b
# consider another file which we consider as a main file.
# main.py
import calculations
calculations.add(5, 10) # 15
calculations.substract(10, 3) # 7
# In the above example, you have imported the file and have accessed the functions in that.
# There are other ways of importing.
# You can change the method name if you want
import calculations as calc
calc.add(5, 10) # 15
# You can import specific functions you need.
# You can access the function directly. You don't want to mention the module.
from calculations import add
add(5, 10) # 15
# You can also import multiple functions
from calculations import add, multiple, divide
# You can import all the functions
from calculations import *
add(10, 15)
multiple(4, 5)
divide(10, 3)
# These will work for classes and variables too.
</code></pre><h2 id="truthy-and-falsy-values">Truthy and Falsy values</h2><pre><code class="language-python"># According to Python docs, any object can be tested truthy or falsy.
# Below are the Truthy values
True
2 # Any numeric values other than 0
[1] # non-empty list
{'a': 1} # non-empty dict
'a' # non-empty string
{'a'} # non-empty Set
# Below are the Falsy values
False
None
0
0.0
[] # empty list
{} # empty dict
() # empty tuple
"" # empty string
range(0) # empty set
# You can evaluate any object to bool using
bool(any_object) # returns True or False
</code></pre><h2 id="exception-handling">Exception handling</h2><pre><code class="language-python"># The code which can raise exceptions can be wrapped in 'try' statement. 'except' will handle that exception.
try:
some_error_raised
except:
print('Exception handled')
# Every exception in Python will inherit from 'exception' class.
# In the below example, you can see that the 'NameError' is the exception class derived from the main 'Exception' class.
try:
some_error_raised
except Exception as e:
print('Exception raised')
print(e.__class__) # &lt;class 'NameError'&gt;
# 'else' block will execute if the code in the 'try' block has raised no exception. This will be useful in many situations.
try:
some_error_raised
except:
print('Exception handled')
else:
print('No error raised. You can resume your operation here') # this code will execute if no error is raised in the 'try' block
# final block
# Code in 'finally' block will execute no matter whether the exception is raised or not.
try:
some_error_raised
except Exception as e:
print('Exception raised')
else:
print('This will execute if no error is raised in try')
finally:
print('This code will run whether the code has error or not.')
# Raise your own exception. You can also create your own exception class inherited from Exception class.
try:
raise ZeroDivisionError # Python built-in exception class
except Exception as e:
print(e.__class__) # &lt;class 'ZeroDivisionError'&gt;
# Catch a specific exception.
try:
raise ZeroDivisionError # Python built-in exception class
except TypeError as e:
print('Only type error exception is captured')
except ZeroDivisionError as e:
print('Only zero division exception is captured')
except Exception as e:
print('Other execeptions')
</code></pre><p>Thank you for reading :)</p><p>Originally posted in this Github repo: <a href="https://github.com/srebalaji/python-crash-course">Python crash course</a> </p>
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
