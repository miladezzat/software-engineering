---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9d54740569d1a4ca372d.jpg"
tags: [Python]
description: "A function allows you to define a reusable block of code that"
author: "Milad E. Fahmy"
title: "Python Function Guide with Examples"
created: "2021-08-16T15:37:27+02:00"
modified: "2021-08-16T15:37:27+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">Python Function Guide with Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d54740569d1a4ca372d.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d54740569d1a4ca372d.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d54740569d1a4ca372d.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d54740569d1a4ca372d.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d54740569d1a4ca372d.jpg" alt="Python Function Guide with Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="introduction-to-functions-in-python">Introduction to Functions in Python</h2><p>A function allows you to define a reusable block of code that can be executed many times within your program.</p><p>Functions allow you to create more modular and <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself">DRY</a> solutions to complex problems.</p><p>While Python already provides many built-in functions such as <code>print()</code> and <code>len()</code>, you can also define your own functions to use within your projects.</p><p>One of the great advantages of using functions in your code is that it reduces the overall number of lines of code in your project.</p><h3 id="syntax"><strong>Syntax</strong></h3><p>In Python, a function definition has the following features:</p><ol><li>The keyword <code>def</code></li><li>a function name</li><li>paranthesis’()’, and within paranthesis input parameters,although the input parameters are optional.</li><li>a colon ’:’</li><li>some block of code to execute</li><li>a return statement (optional)</li></ol><pre><code class="language-python"># a function with no parameters or returned values
def sayHello():
print("Hello!")
sayHello()  # calls the function, 'Hello!' is printed to the console
# a function with a parameter
def helloWithName(name):
print("Hello " + name + "!")
helloWithName("Ada")  # calls the function, 'Hello Ada!' is printed to the console
# a function with multiple parameters with a return statement
def multiply(val1, val2):
return val1 * val2
multiply(3, 5)  # prints 15 to the console</code></pre><p>Functions are blocks of code that can be reused simply by calling the function. This enables simple, elegant code reuse without explicitly re-writing sections of code. This makes code both more readable, makes for easier debugging, and limits typing errors.</p><p>Functions in Python are created using the <code>def</code> keyword, followed by a function name and function parameters inside parentheses.</p><p>A function always returns a value,The <code>return</code> keyword is used by the function to return a value, if you don’t want to return any value, the default value <code>None</code> will returned.</p><p>The function name is used to call the function, passing the needed parameters inside parentheses.</p><pre><code class="language-python"># this is a basic sum function
def sum(a, b):
return a + b
result = sum(1, 2)
# result = 3</code></pre><p>You can define default values for the parameters, that way Python will interpretate that the value of that parameter is the default one if none is given.</p><pre><code class="language-python">def sum(a, b=3):
return a + b
result = sum(1)
# result = 4</code></pre><p>You can pass the parameters in the order you want, using the name of the parameter.</p><pre><code class="language-python">result = sum(b=2, a=2)
# result = 4</code></pre><p>However, it is not possible to pass a keyword argument before a non-keyword one</p><pre><code class="language-python">result = sum(3, b=2)
#result = 5
result2 = sum(b=2, 3)
#Will raise SyntaxError</code></pre><p>Functions are also Objects, so you can assign them to a variable, and use that variable like a function.</p><pre><code class="language-python">s = sum
result = s(1, 2)
# result = 3</code></pre><h3 id="notes"><strong>Notes</strong></h3><p>If a function definition includes parameters, you must provide the same number of parameters when you call the function.</p><pre><code class="language-python">print(multiply(3))  # TypeError: multiply() takes exactly 2 arguments (0 given)
print(multiply('a', 5))  # 'aaaaa' printed to the console
print(multiply('a', 'b'))  # TypeError: Python can't multiply two strings</code></pre><p>The block of code that the function will run includes all statements indented within the function.</p><pre><code class="language-python">def myFunc():
print('this will print')
print('so will this')
x = 7
# the assignment of x is not a part of the function since it is not indented</code></pre><p>Variables defined within a function only exist within the scope of that function.</p><pre><code class="language-python">def double(num):
x = num * 2
return x
print(x)  # error - x is not defined
print(double(4))  # prints 8</code></pre><p>Python interprets the function block only when the function is called and not when the function is defined.So even if the function definition block contains some sort of error, the python interpreter will point that out only when the function is called.</p><p>Now let's look at some specific functions with examples.</p><h2 id="max-function">max() function</h2><p><code>max()</code> is a built-in function in Python 3. It returns the largest item in an iterable or the largest of two or more arguments.</p><h3 id="arguments">Arguments</h3><p>This function takes two or more numbers or any kind of iterable as an argument. While giving an iterable as an argument we must make sure that all the elements in the iterable are of the same type. This means that we cannot pass a list which has both string and integer values stored in it. Syntax: max(iterable, *iterables[,key, default]) max(arg1, arg2, *args[, key])</p><p>Valid Arguments:</p><pre><code class="language-text">max(2, 3)
max([1, 2, 3])
max('a', 'b', 'c')</code></pre><p>Invalid Arguments:</p><pre><code class="language-text">max(2, 'a')
max([1, 2, 3, 'a'])
max([])</code></pre><h3 id="return-value">Return Value</h3><p>The largest item in the iterable is returned. If two or more positional arguments are provided, the largest of the positional arguments is returned. If the iterable is empty and default is not provided, a <code>ValueError</code> is raised.</p><h3 id="code-sample">Code Sample</h3><pre><code class="language-text">print(max(2, 3)) # Returns 3 as 3 is the largest of the two values
print(max(2, 3, 23)) # Returns 23 as 23 is the largest of all the values
list1 = [1, 2, 4, 5, 54]
print(max(list1)) # Returns 54 as 54 is the largest value in the list
list2 = ['a', 'b', 'c' ]
print(max(list2)) # Returns 'c' as 'c' is the largest in the list because c has ascii value larger then 'a' ,'b'.
list3 = [1, 2, 'abc', 'xyz']
print(max(list3)) # Gives TypeError as values in the list are of different type
#Fix the TypeError mentioned above first before moving on to next step
list4 = []
print(max(list4)) # Gives ValueError as the argument is empty</code></pre><p><a href="https://repl.it/CVok" rel="nofollow">Run Code</a></p><p><a href="https://docs.python.org/3/library/functions.html#max" rel="nofollow">Official Docs</a></p><h2 id="min-function">min() function</h2><p><code>min()</code> is a built-in function in Python 3. It returns the smallest item in an iterable or the smallest of two or more arguments.</p><h3 id="arguments-1">Arguments</h3><p>This function takes two or more numbers or any kind of iterable as an argument. While giving an iterable as an argument we must make sure that all the elements in the iterable are of the same type. This means that we cannot pass a list which has both string and integer values stored in it.</p><p>Valid Arguments:</p><pre><code class="language-text">min(2, 3)
min([1, 2, 3])
min('a', 'b', 'c')</code></pre><p>Invalid Arguments:</p><pre><code class="language-text">min(2, 'a')
min([1, 2, 3, 'a'])
min([])</code></pre><h3 id="return-value-1">Return Value</h3><p>The smallest item in the iterable is returned. If two or more positional arguments are provided, the smallest of the positional arguments<br>is returned. If the iterable is empty and default is not provided, a ValueError is raised.</p><h3 id="code-sample-1">Code Sample</h3><pre><code class="language-text">print(min(2, 3)) # Returns 2 as 2 is the smallest of the two values
print(min(2, 3, -1)) # Returns -1 as -1 is the smallest of the two values
list1 = [1, 2, 4, 5, -54]
print(min(list1)) # Returns -54 as -54 is the smallest value in the list
list2 = ['a', 'b', 'c' ]
print(min(list2)) # Returns 'a' as 'a' is the smallest in the list in alphabetical order
list3 = [1, 2, 'abc', 'xyz']
print(min(list3)) # Gives TypeError as values in the list are of different type
#Fix the TypeError mentioned above first before moving on to next step
list4 = []
print(min(list4)) # Gives ValueError as the argument is empty</code></pre><p><a href="https://repl.it/CVir/4" rel="nofollow">Run Code</a></p><p><a href="https://docs.python.org/3/library/functions.html#min" rel="nofollow">Official Docs</a></p><h1 id="divmod-function">divmod() function</h1><p><code>divmod()</code> is a built-in function in Python 3, which returns the quotient and remainder when dividing the number <code>a</code> by the number <code>b</code>. It takes two numbers as arguments <code>a</code> &amp; <code>b</code>. The argument can’t be a complex number.</p><h3 id="argument">Argument</h3><p>It takes two arguments <code>a</code> &amp; <code>b</code> - an integer, or a decimal number.It can’t be a complex number.</p><h3 id="return-value-2">Return Value</h3><p>The return value will be the pair of positive numbers consisting of quotient and remainder obtained by dividing <code>a</code> by <code>b</code>. In case of mixed operand types, rules for binary arithmetic operators will be applied.<br>For <strong><strong>Integer number arguments</strong></strong>, return value will be same as <code>(a // b, a % b)</code>.<br>For <strong><strong>Decimal number arguments</strong></strong>, return value will be same as <code>(q, a % b)</code>, where <code>q</code> is usually <strong><strong>math.floor(a / b)</strong></strong> but may be 1 less than that.</p><h3 id="code-sample-2">Code Sample</h3><pre><code class="language-text">print(divmod(5,2)) # prints (2,1)
print(divmod(13.5,2.5)) # prints (5.0, 1.0)
q,r = divmod(13.5,2.5)  # Assigns q=quotient &amp; r= remainder
print(q) # prints 5.0 because math.floor(13.5/2.5) = 5.0
print(r) # prints 1.0 because (13.5 % 2.5) = 1.0</code></pre><p><a href="https://repl.it/FGLK/0" rel="nofollow">REPL It!</a></p><p><a href="https://docs.python.org/3/library/functions.html#divmod" rel="nofollow">Official Docs</a></p><h2 id="hex-x-function">Hex(x) function</h2><p><code>hex(x)</code> is a built-in function in Python 3 to convert an integer number to a lowercase <a href="https://www.mathsisfun.com/hexadecimals.html" rel="nofollow">hexadecimal</a> string prefixed with “0x”.</p><h3 id="argument-1">Argument</h3><p>This function takes one argument, <code>x</code>, that should be of integer type.</p><h3 id="return">Return</h3><p>This function returns a lowercase hexadecimal string prefixed with “0x”.</p><h3 id="example">Example</h3><pre><code class="language-text">print(hex(16))    # prints  0x10
print(hex(-298))  # prints -0x12a
print(hex(543))   # prints  0x21f</code></pre><p><a href="https://repl.it/CV0S" rel="nofollow">Run Code</a></p><p><a href="https://docs.python.org/3/library/functions.html#hex" rel="nofollow">Official Documentation</a></p><h2 id="len-function">len() function</h2><p><code>len()</code> is a built-in function in Python 3. This method returns the length (the number of items) of an object. It takes one argument <code>x</code>.</p><h3 id="arguments-2">Arguments</h3><p>It takes one argument, <code>x</code>. This argument may be a sequence (such as a string, bytes, tuple, list, or range) or a collection (such as a dictionary, set, or frozen set).</p><h3 id="return-value-3">Return Value</h3><p>This function returns the number of elements in the argument which is passed to the <code>len()</code> function.</p><h3 id="code-sample-3">Code Sample</h3><pre><code class="language-text">list1 = [123, 'xyz', 'zara'] # list
print(len(list1)) # prints 3 as there are 3 elements in the list1
str1 = 'basketball' # string
print(len(str1)) # prints 10 as the str1 is made of 10 characters
tuple1 = (2, 3, 4, 5) # tuple
print(len(tuple1)) # prints 4 as there are 4 elements in the tuple1
dict1 = {'name': 'John', 'age': 4, 'score': 45} # dictionary
print(len(dict1)) # prints 3 as there are 3 key and value pairs in the dict1</code></pre><p><a href="https://repl.it/CUmt/15" rel="nofollow">Run Code</a></p><p><a href="https://docs.python.org/3/library/functions.html#len" rel="nofollow">Official Docs</a></p><h2 id="ord-function"><strong>Ord function</strong></h2><p><code>ord()</code> is a built-in function in Python 3, to convert the string representing one Unicode character into integer representing the Unicode code of the character.</p><h4 id="examples-"><strong>Examples:</strong></h4><pre><code class="language-text">&gt;&gt;&gt; ord('d')
100
&gt;&gt;&gt; ord('1')
49</code></pre><h2 id="chr-function">chr function</h2><p><code>chr()</code> is a built-in function in Python 3, to convert the integer representing the Unicode code into a string representing a corresponding character.</p><h4 id="examples--1"><strong>Examples:</strong></h4><pre><code class="language-text">&gt;&gt;&gt; chr(49)
'1'</code></pre><p>One thing is to be noted that, if the integer value passed to <code>chr()</code> is out of range then, a ValueError will be raised.</p><pre><code class="language-text">&gt;&gt;&gt; chr(-10)
'Traceback (most recent call last):
File "&lt;pyshell#24&gt;", line 1, in &lt;module&gt;
chr(-1)
ValueError: chr() arg not in range(0x110000)'</code></pre><h2 id="input-functions">input() functions</h2><p>Many a time, in a program we need some input from the user. Taking inputs from the user makes the program feel interactive. In Python 3, to take input from the user we have a function <code>input()</code>. If the input function is called, the program flow will be stopped until the user has given an input and has ended the input with the return key. Let’s see some examples:</p><p>When we just want to take the input:</p><h1 id="this-will-just-give-a-prompt-without-any-message"><strong><strong>This will just give a prompt without any message</strong></strong></h1><p>inp = input()</p><p><a href="https://repl.it/CUqX/0" rel="nofollow">Run Code</a></p><p>To give a prompt with a message:</p><p>prompt<em>with</em>message = input(’‘)</p><h1 id="_"><strong><strong>_</strong></strong></h1><h1 id="the-_-in-the-output-is-the-prompt"><strong><strong>The ’_’ in the output is the prompt</strong></strong></h1><p><a href="https://repl.it/CUqX/1" rel="nofollow">Run Code</a></p><p>3. When we want to take an integer input:</p><pre><code class="language-text">number = int(input('Please enter a number: '))</code></pre><p><a href="https://repl.it/CUqX/2" rel="nofollow">Run Code</a></p><p>If you enter a non integer value then Python will throw an error <code>ValueError</code>. <strong><strong>So whenever you use this, please make sure that you catch it too.</strong></strong> Otherwise, your program will stop unexpectedly after the prompt.</p><pre><code class="language-text">number = int(input('Please enter a number: '))
# Please enter a number: as
# Enter a string and it will throw this error
# ValueError: invalid literal for int() with base 10 'as'</code></pre><p>4. When we want a string input:</p><pre><code class="language-text">string = str(input('Please enter a string: '))</code></pre><p><a href="https://repl.it/CUqX/3" rel="nofollow">Run Code</a></p><p>Though, inputs are stored by default as a string. Using the <code>str()</code> function makes it clear to the code-reader that the input is going to be a ‘string’. It is a good practice to mention what type of input will be taken beforehand.</p><p><a href="https://docs.python.org/3/library/functions.html#input" rel="nofollow">Official Docs</a></p><h2 id="how-to-call-a-function-in-python">How to call a function in Python</h2><p>A function definition statement does not execute the function. Executing (calling) a function is done by using the name of the function followed by parenthesis enclosing required arguments (if any).</p><pre><code class="language-text">&gt;&gt;&gt; def say_hello():
...     print('Hello')
...
&gt;&gt;&gt; say_hello()
Hello</code></pre><p>The execution of a function introduces a new symbol table used for the local variables of the function. More precisely, all variable assignments in a function store the value in the local symbol table; whereas variable references first look in the local symbol table, then in the local symbol tables of enclosing functions, then in the global symbol table, and finally in the table of built-in names. Thus, global variables cannot be directly assigned a value within a function (unless named in a global statement), although they may be referenced.</p><pre><code class="language-text">&gt;&gt;&gt; a = 1
&gt;&gt;&gt; b = 10
&gt;&gt;&gt; def fn():
...     print(a)    # local a is not assigned, no enclosing function, global a referenced.
...     b = 20# local b is assigned in the local symbol table for the function.
...     print(b)    # local b is referenced.
...
&gt;&gt;&gt; fn()
1
20
&gt;&gt;&gt; b         # global b is not changed by the function call.
10</code></pre><p>The actual parameters (arguments) to a function call are introduced in the local symbol table of the called function when it is called; thus, arguments are passed using call by value (where the value is always an object reference, not the value of the object). When a function calls another function, a new local symbol table is created for that call.</p><pre><code class="language-text">&gt;&gt;&gt; def greet(s):
...     s = "Hello " + s    # s in local symbol table is reassigned.
...     print(s)
...
&gt;&gt;&gt; person = "Bob"
&gt;&gt;&gt; greet(person)
Hello Bob
&gt;&gt;&gt; person            # person used to call remains bound to original object, 'Bob'.
'Bob'</code></pre><p>The arguments used to call a function cannot be reassigned by the function, but arguments that reference mutable objects can have their values changed:</p><pre><code class="language-text">&gt;&gt;&gt; def fn(arg):
...     arg.append(1)
...
&gt;&gt;&gt; a = [1, 2, 3]
&gt;&gt;&gt; fn(a)
&gt;&gt;&gt; a
[1, 2, 3, 1]</code></pre><p></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
