---
card: "/images/default.jpg"
tags: [Python]
description: "Hi! Welcome. If you are learning Python, then this article is"
author: "Milad E. Fahmy"
title: "Python Code Examples – Sample Script Coding Tutorial for Beginners"
created: "2021-08-16T15:34:24+02:00"
modified: "2021-08-16T15:34:24+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-beginners-guide ">
<header class="post-full-header">
<h1 class="post-full-title">Python Code Examples – Sample Script Coding Tutorial for Beginners</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/11/Code-Examples-Image.png 300w,
/news/content/images/size/w600/2020/11/Code-Examples-Image.png 600w,
/news/content/images/size/w1000/2020/11/Code-Examples-Image.png 1000w,
/news/content/images/size/w2000/2020/11/Code-Examples-Image.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/11/Code-Examples-Image.png" alt="Python Code Examples – Sample Script Coding Tutorial for Beginners">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Hi! Welcome. If you are learning Python, then this article is for you. You will find a thorough description of Python syntax and lots of code examples to guide you during your coding journey. </p><h3 id="what-we-will-cover-">What we will cover:</h3><ul><li><a href="#-variable-definitions-in-python">Variable Definitions in Python</a></li><li><a href="#-hello-world-program-in-python">Hello, World! Program in Python</a></li><li><a href="#-data-types-and-built-in-data-structures-in-python">Data Types and Built-in Data Structures in Python</a></li><li><a href="#-python-operators">Python Operators</a></li><li><a href="#-conditionals-in-python">Conditionals in Python</a></li><li><a href="#-for-loops-in-python">For Loops in Python</a></li><li><a href="#-while-loops-in-python">While Loops in Python</a></li><li><a href="#-nested-loops-in-python">Nested Loops in Python</a></li><li><a href="#-functions-in-python">Functions in Python</a></li><li><a href="#-recursion-in-python">Recursion in Python</a></li><li><a href="#-exception-handling-in-python">Exception Handling in Python</a></li><li><a href="#-object-oriented-programming-in-python">Object-Oriented Programming in Python</a></li><li><a href="#-how-to-work-with-files-in-python">How to Work with Files in Python</a></li><li><a href="#-import-statements-in-python">Import Statements in Python</a></li><li><a href="#-list-and-dictionary-comprehension-in-python">List and Dictionary Comprehension in Python</a></li><li>and more...</li></ul><p>Are you ready? Let's begin! 🔅</p><p>💡 <strong>Tip: </strong>throughout this article, I will use <code>&lt;&gt;</code> to indicate that this part of the syntax will be replaced by the element described by the text. For example, <code>&lt;var&gt;</code> means that this will be replaced by a variable when we write the code.</p><h2 id="-variable-definitions-in-python">🔹 Variable Definitions in Python</h2><p>The most basic building-block of any programming language is the concept of a variable, a name and place in memory that we reserve for a value. </p><p>In Python, we use this syntax to create a variable and assign a value to this variable:</p><pre><code class="language-Python">&lt;var_name&gt; = &lt;value&gt;</code></pre><p>For example:</p><pre><code>age = 56</code></pre><pre><code>name = "Nora"</code></pre><pre><code>color = "Blue"</code></pre><pre><code>grades = [67, 100, 87, 56]</code></pre><p>If the name of a variable has more than one word, then the <a href="https://www.python.org/dev/peps/pep-0008/">Style Guide for Python Code</a> recommends separating words with an underscore "as necessary to improve readability."</p><p>For example:</p><pre><code>my_list = [1, 2, 3, 4, 5]</code></pre><p>💡 <strong>Tip:</strong> The Style Guide for Python Code (PEP 8) has great suggestions that you should follow to write clean Python code.</p><h2 id="-hello-world-program-in-python">🔸 Hello, World! Program in Python</h2><p>Before we start diving into the data types and data structures that you can use in Python, let's see how you can write your first Python program. </p><p>You just need to call the <code>print()</code> function and write <code>"Hello, World!"</code> within parentheses:</p><pre><code class="language-python">print("Hello, World!")</code></pre><p>You will see this message after running the program:</p><pre><code>"Hello, World!"</code></pre><p>💡 <strong>Tip:</strong> Writing a <code>"Hello, World!"</code> program is a tradition in the developer community. Most developers start learning how to code by writing this program.</p><p>Great. You just wrote your first Python program. Now let's start learning about the data types and built-in data structures that you can use in Python.</p><h2 id="-data-types-and-built-in-data-structures-in-python">🔹 Data Types and Built-in Data Structures in Python</h2><p>We have several basic data types and built-in data structures that we can work with in our programs. Each one has its own particular applications. Let's see them in detail.</p><h3 id="numeric-data-types-in-python-integers-floats-and-complex">Numeric Data Types in Python: Integers, Floats, and Complex</h3><p>These are the numeric types that you can work with in Python:</p><h4 id="integers">Integers</h4><p>Integers are numbers without decimals. You can check if a number is an integer with the <code>type()</code> function. If the output is <code>&lt;class 'int'&gt;</code>, then the number is an integer.</p><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; type(1)
&lt;class 'int'&gt;
&gt;&gt;&gt; type(15)
&lt;class 'int'&gt;
&gt;&gt;&gt; type(0)
&lt;class 'int'&gt;
&gt;&gt;&gt; type(-46)
&lt;class 'int'&gt;</code></pre><h4 id="floats">Floats</h4><p>Floats are numbers with decimals. You can detect them visually by locating the decimal point. If we call <code>type()</code> to check the data type of these values, we will see this as the output: </p><pre><code>&lt;class 'float'&gt;</code></pre><p>Here we have some examples:</p><pre><code class="language-python">&gt;&gt;&gt; type(4.5)
&lt;class 'float'&gt;
&gt;&gt;&gt; type(5.8)
&lt;class 'float'&gt;
&gt;&gt;&gt; type(2342423424.3)
&lt;class 'float'&gt;
&gt;&gt;&gt; type(4.0)
&lt;class 'float'&gt;
&gt;&gt;&gt; type(0.0)
&lt;class 'float'&gt;
&gt;&gt;&gt; type(-23.5)
&lt;class 'float'&gt;</code></pre><h4 id="complex">Complex </h4><p>Complex numbers have a real part and an imaginary part denoted with <code>j</code>. You can create complex numbers in Python with <code>complex()</code>. The first argument will be the real part and the second argument will be the imaginary part.</p><p>These are some examples:</p><pre><code class="language-python">&gt;&gt;&gt; complex(4, 5)
(4+5j)
&gt;&gt;&gt; complex(6, 8)
(6+8j)
&gt;&gt;&gt; complex(3.4, 3.4)
(3.4+3.4j)
&gt;&gt;&gt; complex(0, 0)
0j
&gt;&gt;&gt; complex(5)
(5+0j)
&gt;&gt;&gt; complex(0, 4)
4j</code></pre><h3 id="strings-in-python">Strings in Python</h3><p>Strings incredibly helpful in Python. They contain a sequence of characters and they are usually used to represent text in the code.</p><p>For example:</p><pre><code>"Hello, World!"</code></pre><pre><code>'Hello, World!'</code></pre><p>We can use both single quotes <code>''</code> or double quotes <code>""</code> to define a string. They are both valid and equivalent, but you should choose one of them and use it consistently throughout the program.</p><p><strong>💡 Tip:</strong> Yes! You used a string when you wrote the <code>"Hello, World!"</code> program. Whenever you see a value surrounded by single or double quotes in Python, that is a string.</p><p>Strings can contain any character that we can type in our keyboard, including numbers, symbols, and other special characters.</p><p>For example:</p><pre><code>"45678"</code></pre><pre><code>"my_email@email.com"</code></pre><pre><code>"#IlovePython"</code></pre><p><strong>💡 Tip:</strong> Spaces are also counted as characters in a string.</p><h4 id="quotes-within-strings">Quotes Within Strings</h4><p>If we define a string with double quotes <code>""</code>, then we can use single quotes within the string. For example:</p><pre><code>"I'm 20 years old"</code></pre><p>If we define a string with single quotes <code>''</code>, then we can use double quotes within the string. For example:</p><pre><code>'My favorite book is "Sense and Sensibility"'</code></pre><h4 id="string-indexing">String Indexing</h4><p>We can use indices to access the characters of a string in our Python program. An index is an integer that represents a specific position in the string. They are associated to the character at that position. </p><p>This is a diagram of the string <code>"Hello"</code>:</p><pre><code>String:  H e l l o
Index:   0 1 2 3 4</code></pre><p><strong>💡 Tip: </strong>Indices start from <code>0</code> and they are incremented by <code>1</code> for each character to the right. </p><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; my_string = "Hello"
&gt;&gt;&gt; my_string[0]
'H'
&gt;&gt;&gt; my_string[1]
'e'
&gt;&gt;&gt; my_string[2]
'l'
&gt;&gt;&gt; my_string[3]
'l'
&gt;&gt;&gt; my_string[4]
'o'</code></pre><p>We can also use negative indices to access these characters:</p><pre><code class="language-python">&gt;&gt;&gt; my_string = "Hello"
&gt;&gt;&gt; my_string[-1]
'o'
&gt;&gt;&gt; my_string[-2]
'l'
&gt;&gt;&gt; my_string[-3]
'l'
&gt;&gt;&gt; my_string[-4]
'e'
&gt;&gt;&gt; my_string[-5]
'H'</code></pre><p><strong>💡 Tip:</strong> we commonly use <code>-1</code> to access the last character of a string.</p><h4 id="string-slicing">String Slicing</h4><p>We may also need to get a slice of a string or a subset of its characters. We can do so with string slicing. </p><p>This is the general syntax:</p><pre><code class="language-python">&lt;string_variable&gt;[start:stop:step]</code></pre><p><code>start</code> is the index of the first character that will be included in the slice. By default, it's <code>0</code>.</p><ul><li><code>stop</code> is the index of the last character in the slice (this character will <strong>not </strong>be included). By default, it is the last character in the string (if we omit this value, the last character will also be included).</li><li><code>step</code> is how much we are going to add to the current index to reach the next index.</li></ul><p>We can specify two parameters to use the default value of <code>step</code>, which is <code>1</code>. This will include all the characters between <code>start</code> and <code>stop</code> (not inclusive):</p><pre><code class="language-python">&lt;string_variable&gt;[start:stop]</code></pre><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; freecodecamp = "freeCodeCamp"
&gt;&gt;&gt; freecodecamp[2:8]
'eeCode'
&gt;&gt;&gt; freecodecamp[0:3]
'fre'
&gt;&gt;&gt; freecodecamp[0:4]
'free'
&gt;&gt;&gt; freecodecamp[4:7]
'Cod'
&gt;&gt;&gt; freecodecamp[4:8]
'Code'
&gt;&gt;&gt; freecodecamp[8:11]
'Cam'
&gt;&gt;&gt; freecodecamp[8:12]
'Camp'
&gt;&gt;&gt; freecodecamp[8:13]
'Camp'</code></pre><p><strong>💡 Tip:</strong> Notice that if the value of a parameter goes beyond the valid range of indices, the slice will still be presented. This is how the creators of Python implemented this feature of string slicing. </p><p>If we customize the <code>step</code>, we will "jump" from one index to the next according to this value.</p><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; freecodecamp = "freeCodeCamp"
&gt;&gt;&gt; freecodecamp[0:9:2]
'feCdC'
&gt;&gt;&gt; freecodecamp[2:10:3]
'eoC'
&gt;&gt;&gt; freecodecamp[1:12:4]
'roa'
&gt;&gt;&gt; freecodecamp[4:8:2]
'Cd'
&gt;&gt;&gt; freecodecamp[3:9:2]
'eoe'
&gt;&gt;&gt; freecodecamp[1:10:5]
'rd'</code></pre><p>We can also use a <strong>negative </strong>step to go from right to left:</p><pre><code class="language-python">&gt;&gt;&gt; freecodecamp = "freeCodeCamp"
&gt;&gt;&gt; freecodecamp[10:2:-1]
'maCedoCe'
&gt;&gt;&gt; freecodecamp[11:4:-2]
'paeo'
&gt;&gt;&gt; freecodecamp[5:2:-4]
'o'</code></pre><p>And we can omit a parameter to use its default value. We just have to include the corresponding colon (<code>:</code>) if we omit <code>start</code>, <code>stop</code>, or both:</p><pre><code class="language-python">&gt;&gt;&gt; freecodecamp = "freeCodeCamp"
# Default start and step
&gt;&gt;&gt; freecodecamp[:8]
'freeCode'
# Default end and step
&gt;&gt;&gt; freecodecamp[4:]
'CodeCamp'
# Default start
&gt;&gt;&gt; freecodecamp[:8:2]
'feCd'
# Default stop
&gt;&gt;&gt; freecodecamp[4::3]
'Cem'
# Default start and stop
&gt;&gt;&gt; freecodecamp[::-2]
'paeoer'
# Default start and stop
&gt;&gt;&gt; freecodecamp[::-1]
'pmaCedoCeerf'</code></pre><p><strong>💡 Tip:</strong> The last example is one of the most common ways to reverse a string.</p><h4 id="f-strings">f-Strings</h4><p>In Python 3.6 and more recent versions, we can use a type of string called f-string that helps us format our strings much more easily. </p><p>To define an f-string, we just add an <code>f</code> before the single or double quotes. Then, within the string, we surround the variables or expressions with curly braces <code>{}</code>. This replaces their value in the string when we run the program.</p><p>For example: </p><pre><code class="language-python">first_name = "Nora"
favorite_language = "Python"
print(f"Hi, I'm {first_name}. I'm learning {favorite_language}.")
</code></pre><p>The output is:</p><pre><code>Hi, I'm Nora. I'm learning Python.</code></pre><p>Here we have an example where we calculate the value of an expression and replace the result in the string:</p><pre><code class="language-python">value = 5
print(f"{value} multiplied by 2 is: {value * 2}")</code></pre><p>The values are replaced in the output:</p><pre><code class="language-python">5 multiplied by 2 is: 10</code></pre><p>We can also call methods within the curly braces and the value returned will be replaced in the string when we run the program:</p><pre><code class="language-python">freecodecamp = "FREECODECAMP"
print(f"{freecodecamp.lower()}")</code></pre><p>The output is:</p><pre><code class="language-python">freecodecamp</code></pre><h4 id="string-methods">String Methods</h4><p>Strings have methods, which represent common functionality that has been implemented by Python developers, so we can use it in our programs directly. They are very helpful to perform common operations. </p><p>This is the general syntax to call a string method:</p><pre><code class="language-python">&lt;string_variable&gt;.&lt;method_name&gt;(&lt;arguments&gt;)</code></pre><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; freecodecamp = "freeCodeCamp"
&gt;&gt;&gt; freecodecamp.capitalize()
'Freecodecamp'
&gt;&gt;&gt; freecodecamp.count("C")
2
&gt;&gt;&gt; freecodecamp.find("e")
2
&gt;&gt;&gt; freecodecamp.index("p")
11
&gt;&gt;&gt; freecodecamp.isalnum()
True
&gt;&gt;&gt; freecodecamp.isalpha()
True
&gt;&gt;&gt; freecodecamp.isdecimal()
False
&gt;&gt;&gt; freecodecamp.isdigit()
False
&gt;&gt;&gt; freecodecamp.isidentifier()
True
&gt;&gt;&gt; freecodecamp.islower()
False
&gt;&gt;&gt; freecodecamp.isnumeric()
False
&gt;&gt;&gt; freecodecamp.isprintable()
True
&gt;&gt;&gt; freecodecamp.isspace()
False
&gt;&gt;&gt; freecodecamp.istitle()
False
&gt;&gt;&gt; freecodecamp.isupper()
False
&gt;&gt;&gt; freecodecamp.lower()
'freecodecamp'
&gt;&gt;&gt; freecodecamp.lstrip("f")
'reeCodeCamp'
&gt;&gt;&gt; freecodecamp.rstrip("p")
'freeCodeCam'
&gt;&gt;&gt; freecodecamp.replace("e", "a")
'fraaCodaCamp'
&gt;&gt;&gt; freecodecamp.split("C")
['free', 'ode', 'amp']
&gt;&gt;&gt; freecodecamp.swapcase()
'FREEcODEcAMP'
&gt;&gt;&gt; freecodecamp.title()
'Freecodecamp'
&gt;&gt;&gt; freecodecamp.upper()
'FREECODECAMP'</code></pre><p>To learn more about Python methods, I would recommend reading <a href="https://docs.python.org/3/library/stdtypes.html#string-methods">this article</a> from the Python documentation.</p><p>💡<strong> Tip: </strong>All string methods return copies of the string. They do not modify the string because strings are immutable in Python.</p><h3 id="booleans-in-python">Booleans in Python</h3><p>Boolean values are <code>True</code> and <code>False</code> in Python. They must start with an uppercase letter to be recognized as a boolean value.</p><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; type(True)
&lt;class 'bool'&gt;
&gt;&gt;&gt; type(False)
&lt;class 'bool'&gt;</code></pre><p>If we write them in lowercase, we will get an error:</p><pre><code class="language-python">&gt;&gt;&gt; type(true)
Traceback (most recent call last):
File "&lt;pyshell#92&gt;", line 1, in &lt;module&gt;
type(true)
NameError: name 'true' is not defined
&gt;&gt;&gt; type(false)
Traceback (most recent call last):
File "&lt;pyshell#93&gt;", line 1, in &lt;module&gt;
type(false)
NameError: name 'false' is not defined</code></pre><h3 id="lists-in-python">Lists in Python</h3><p>Now that we've covered the basic data types in Python, let's start covering the built-in data structures. First, we have lists.</p><p>To define a list, we use square brackets <code>[]</code> with the elements separated by a comma.</p><p><strong>💡 Tip:</strong> It's recommended to add a space after each comma to make the code more readable.</p><p>For example, here we have examples of lists:</p><pre><code>[1, 2, 3, 4, 5]</code></pre><pre><code>["a", "b", "c", "d"]</code></pre><pre><code>[3.4, 2.4, 2.6, 3.5]</code></pre><p>Lists can contain values of different data types, so this would be a valid list in Python:</p><pre><code>[1, "Emily", 3.4]</code></pre><p>We can also assign a list to a variable:</p><pre><code class="language-python">my_list = [1, 2, 3, 4, 5]</code></pre><pre><code class="language-python">letters = ["a", "b", "c", "d"]</code></pre><h4 id="nested-lists">Nested Lists</h4><p>Lists can contain values of any data type, even other lists. These inner lists are called <strong>nested lists</strong>.</p><pre><code class="language-python">[[1, 2, 3], [4, 5, 6]]</code></pre><p>In this example, <code>[1, 2, 3]</code> and <code>[4, 5, 6]</code> are nested lists.</p><p>Here we have other valid examples:</p><pre><code class="language-python">[["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]]</code></pre><pre><code class="language-python">[1, [2, 3, 4], [5, 6, 7], 3.4]</code></pre><p>We can access the nested lists using their corresponding index:</p><pre><code class="language-python">&gt;&gt;&gt; my_list = [[1, 2, 3], [4, 5, 6]]
&gt;&gt;&gt; my_list[0]
[1, 2, 3]
&gt;&gt;&gt; my_list[1]
[4, 5, 6]</code></pre><p>Nested lists could be used to represent, for example, the structure of a simple 2D game board where each number could represent a different element or tile:</p><pre><code class="language-python"># Sample Board where:
# 0 = Empty tile
# 1 = Coin
# 2 = Enemy
# 3 = Goal
board = [[0, 0, 1],
[0, 2, 0],
[1, 0, 3]]</code></pre><h4 id="list-length">List Length</h4><p>We can use the <code>len()</code> function to get the length of a list (the number of elements it contains).</p><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; my_list = [1, 2, 3, 4]
&gt;&gt;&gt; len(my_list)
4</code></pre><h4 id="update-a-value-in-a-list">Update a Value in a List</h4><p>We can update the value at a particular index with this syntax:</p><pre><code class="language-python">&lt;list_variable&gt;[&lt;index&gt;] = &lt;value&gt;</code></pre><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; letters = ["a", "b", "c", "d"]
&gt;&gt;&gt; letters[0] = "z"
&gt;&gt;&gt; letters
['z', 'b', 'c', 'd']</code></pre><h4 id="add-a-value-to-a-list">Add a Value to a List</h4><p>We can add a new value to the end of a list with the <code>.append()</code> method. </p><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; my_list = [1, 2, 3, 4]
&gt;&gt;&gt; my_list.append(5)
&gt;&gt;&gt; my_list
[1, 2, 3, 4, 5]</code></pre><h4 id="remove-a-value-from-a-list">Remove a Value from a List</h4><p>We can remove a value from a list with the <code>.remove()</code> method.</p><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; my_list = [1, 2, 3, 4]
&gt;&gt;&gt; my_list.remove(3)
&gt;&gt;&gt; my_list
[1, 2, 4]</code></pre><p>💡 <strong>Tip:</strong> This will only remove the first occurrence of the element. For example, if we try to remove the number 3 from a list that has two number 3s, the second number will not be removed:</p><pre><code class="language-python">&gt;&gt;&gt; my_list = [1, 2, 3, 3, 4]
&gt;&gt;&gt; my_list.remove(3)
&gt;&gt;&gt; my_list
[1, 2, 3, 4]</code></pre><h4 id="list-indexing">List Indexing</h4><p>We can index a list just like we index strings, with indices that start from <code>0</code>:</p><pre><code class="language-python">&gt;&gt;&gt; letters = ["a", "b", "c", "d"]
&gt;&gt;&gt; letters[0]
'a'
&gt;&gt;&gt; letters[1]
'b'
&gt;&gt;&gt; letters[2]
'c'
&gt;&gt;&gt; letters[3]
'd'</code></pre><h4 id="list-slicing">List Slicing</h4><p>We can also get a slice of a list using the same syntax that we used with strings and we can omit the parameters to use their default values. Now, instead of adding characters to the slice, we will be adding the elements of the list.</p><pre><code class="language-python">&lt;list_variable&gt;[start:stop:step]</code></pre><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; my_list = ["a", "b", "c", "d", "e", "f", "g", "h", "i"]
&gt;&gt;&gt; my_list[2:6:2]
['c', 'e']
&gt;&gt;&gt; my_list[2:8]
['c', 'd', 'e', 'f', 'g', 'h']
&gt;&gt;&gt; my_list[1:10]
['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
&gt;&gt;&gt; my_list[4:8:2]
['e', 'g']
&gt;&gt;&gt; my_list[::-1]
['i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']
&gt;&gt;&gt; my_list[::-2]
['i', 'g', 'e', 'c', 'a']
&gt;&gt;&gt; my_list[8:1:-1]
['i', 'h', 'g', 'f', 'e', 'd', 'c']</code></pre><h4 id="list-methods">List Methods</h4><p>Python also has list methods already implemented to help us perform common list operations. Here are some examples of the most commonly used list methods:</p><pre><code class="language-python">&gt;&gt;&gt; my_list = [1, 2, 3, 3, 4]
&gt;&gt;&gt; my_list.append(5)
&gt;&gt;&gt; my_list
[1, 2, 3, 3, 4, 5]
&gt;&gt;&gt; my_list.extend([6, 7, 8])
&gt;&gt;&gt; my_list
[1, 2, 3, 3, 4, 5, 6, 7, 8]
&gt;&gt;&gt; my_list.insert(2, 15)
&gt;&gt;&gt; my_list
[1, 2, 15, 3, 3, 4, 5, 6, 7, 8, 2, 2]
&gt;&gt;&gt; my_list.remove(2)
&gt;&gt;&gt; my_list
[1, 15, 3, 3, 4, 5, 6, 7, 8, 2, 2]
&gt;&gt;&gt; my_list.pop()
2
&gt;&gt;&gt; my_list.index(6)
6
&gt;&gt;&gt; my_list.count(2)
1
&gt;&gt;&gt; my_list.sort()
&gt;&gt;&gt; my_list
[1, 2, 3, 3, 4, 5, 6, 7, 8, 15]
&gt;&gt;&gt; my_list.reverse()
&gt;&gt;&gt; my_list
[15, 8, 7, 6, 5, 4, 3, 3, 2, 1]
&gt;&gt;&gt; my_list.clear()
&gt;&gt;&gt; my_list
[]</code></pre><p>To learn more about list methods, I would recommend reading <a href="https://docs.python.org/3/tutorial/datastructures.html#more-on-lists">this article</a> from the Python documentation.</p><h3 id="tuples-in-python">Tuples in Python</h3><p>To define a tuple in Python, we use parentheses <code>()</code> and separate the elements with a comma. It is recommended to add a space after each comma to make the code more readable.</p><pre><code class="language-python">(1, 2, 3, 4, 5)</code></pre><pre><code class="language-python">("a", "b", "c", "d")</code></pre><pre><code class="language-python">(3.4, 2.4, 2.6, 3.5)</code></pre><p>We can assign tuples to variables:</p><pre><code class="language-python">my_tuple = (1, 2, 3, 4, 5)</code></pre><h4 id="tuple-indexing">Tuple Indexing</h4><p>We can access each element of a tuple with its corresponding index:</p><pre><code class="language-python">&gt;&gt;&gt; my_tuple = (1, 2, 3, 4)
&gt;&gt;&gt; my_tuple[0]
1
&gt;&gt;&gt; my_tuple[1]
2
&gt;&gt;&gt; my_tuple[2]
3
&gt;&gt;&gt; my_tuple[3]
4</code></pre><p>We can also use negative indices:</p><pre><code class="language-python">&gt;&gt;&gt; my_tuple = (1, 2, 3, 4)
&gt;&gt;&gt; my_tuple[-1]
4
&gt;&gt;&gt; my_tuple[-2]
3
&gt;&gt;&gt; my_tuple[-3]
2
&gt;&gt;&gt; my_tuple[-4]
1</code></pre><h4 id="tuple-length">Tuple Length</h4><p>To find the length of a tuple, we use the <code>len()</code> function, passing the tuple as argument:</p><pre><code class="language-python">&gt;&gt;&gt; my_tuple = (1, 2, 3, 4)
&gt;&gt;&gt; len(my_tuple)
4</code></pre><h4 id="nested-tuples">Nested Tuples</h4><p>Tuples can contain values of any data type, even lists and other tuples. These inner tuples are called <strong>nested tuples</strong>.</p><pre><code class="language-python">([1, 2, 3], (4, 5, 6))</code></pre><p>In this example, we have a nested tuple <code>(4, 5, 6)</code> and a list. You can access these nested data structures with their corresponding index.</p><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; my_tuple = ([1, 2, 3], (4, 5, 6))
&gt;&gt;&gt; my_tuple[0]
[1, 2, 3]
&gt;&gt;&gt; my_tuple[1]
(4, 5, 6)</code></pre><h4 id="tuple-slicing">Tuple Slicing</h4><p>We can slice a tuple just like we sliced lists and strings. The same principle and rules apply.</p><p>This is the general syntax:</p><pre><code class="language-python">&lt;tuple_variable&gt;[start:stop:step]</code></pre><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; my_tuple = (4, 5, 6, 7, 8, 9, 10)
&gt;&gt;&gt; my_tuple[3:8]
(7, 8, 9, 10)
&gt;&gt;&gt; my_tuple[2:9:2]
(6, 8, 10)
&gt;&gt;&gt; my_tuple[:8]
(4, 5, 6, 7, 8, 9, 10)
&gt;&gt;&gt; my_tuple[:6]
(4, 5, 6, 7, 8, 9)
&gt;&gt;&gt; my_tuple[:4]
(4, 5, 6, 7)
&gt;&gt;&gt; my_tuple[3:]
(7, 8, 9, 10)
&gt;&gt;&gt; my_tuple[2:5:2]
(6, 8)
&gt;&gt;&gt; my_tuple[::2]
(4, 6, 8, 10)
&gt;&gt;&gt; my_tuple[::-1]
(10, 9, 8, 7, 6, 5, 4)
&gt;&gt;&gt; my_tuple[4:1:-1]
(8, 7, 6)</code></pre><h4 id="tuple-methods">Tuple Methods</h4><p>There are two built-in tuple methods in Python:</p><pre><code class="language-python">&gt;&gt;&gt; my_tuple = (4, 4, 5, 6, 6, 7, 8, 9, 10)
&gt;&gt;&gt; my_tuple.count(6)
2
&gt;&gt;&gt; my_tuple.index(7)
5</code></pre><p>💡 <strong>Tip:</strong> tuples are immutable. They cannot be modified, so we can't add, update, or remove elements from the tuple. If we need to do so, then we need to create a new copy of the tuple.</p><h4 id="tuple-assignment">Tuple Assignment</h4><p>In Python, we have a really cool feature called Tuple Assignment. With this type of assignment, we can assign values to multiple variables on the same line.</p><p>The values are assigned to their corresponding variables in the order that they appear. For example, in <code>a, b = 1, 2</code> the value <code>1</code> is assigned to the variable <code>a</code> and the value <code>2</code> is assigned to the variable <code>b</code>.</p><p>For example:</p><pre><code class="language-python"># Tuple Assignment
&gt;&gt;&gt; a, b = 1, 2
&gt;&gt;&gt; a
1
&gt;&gt;&gt; b
2</code></pre><p><strong>💡 Tip: </strong>Tuple assignment is commonly used to swap the values of two variables:</p><pre><code class="language-python">&gt;&gt;&gt; a = 1
&gt;&gt;&gt; b = 2
# Swap the values
&gt;&gt;&gt; a, b = b, a
&gt;&gt;&gt; a
2
&gt;&gt;&gt; b
1</code></pre><h3 id="dictionaries-in-python">Dictionaries in Python</h3><p>Now let's start diving into dictionaries. This built-in data structure lets us create pairs of values where one value is associated with another one. </p><p>To define a dictionary in Python, we use curly brackets <code>{}</code> with the key-value pairs separated by a comma. </p><p>The key is separated from the value with a colon <code>:</code>, like this:</p><pre><code class="language-python">{"a": 1, "b": 2, "c"; 3}</code></pre><p>You can assign the dictionary to a variable:</p><pre><code class="language-python">my_dict = {"a": 1, "b": 2, "c"; 3}</code></pre><p>The keys of a dictionary must be of an immutable data type. For example, they can be strings, numbers, or tuples but not lists since lists are mutable. </p><ul><li>Strings: <code>{"City 1": 456, "City 2": 577, "City 3": 678}</code></li><li>Numbers: <code>{1: "Move Left", 2: "Move Right", 3: "Move Up", 4: "Move Down"}</code></li><li>Tuples: <code>{(0, 0): "Start", (2, 4): "Goal"}</code></li></ul><p>The values of a dictionary can be of any data type, so we can assign strings, numbers, lists, tuple, sets, and even other dictionaries as the values. Here we have some examples:</p><pre><code>{"product_id": 4556, "ingredients": ["tomato", "cheese", "mushrooms"], "price": 10.67}</code></pre><pre><code class="language-python">{"product_id": 4556, "ingredients": ("tomato", "cheese", "mushrooms"), "price": 10.67}</code></pre><pre><code class="language-python">{"id": 567, "name": "Emily", "grades": {"Mathematics": 80, "Biology": 74, "English": 97}}</code></pre><h4 id="dictionary-length">Dictionary Length</h4><p>To get the number of key-value pairs, we use the <code>len()</code> function:</p><pre><code class="language-python">&gt;&gt;&gt; my_dict = {"a": 1, "b": 2, "c": 3, "d": 4}
&gt;&gt;&gt; len(my_dict)
4</code></pre><h4 id="get-a-value-in-a-dictionary">Get a Value in a Dictionary</h4><p>To get a value in a dictionary, we use its key with this syntax:</p><pre><code class="language-python">&lt;variable_with_dictionary&gt;[&lt;key&gt;]</code></pre><p>This expression will be replaced by the value that corresponds to the key.</p><p>For example:</p><pre><code class="language-python">my_dict = {"a": 1, "b": 2, "c": 3, "d": 4}
print(my_dict["a"])</code></pre><p>The output is the value associated to <code>"a"</code>:</p><pre><code>1</code></pre><h4 id="update-a-value-in-a-dictionary">Update a Value in a Dictionary</h4><p>To update the value associated with an existing key, we use the same syntax but now we add an assignment operator and the value:</p><pre><code class="language-python">&lt;variable_with_dictionary&gt;[&lt;key&gt;] = &lt;value&gt;</code></pre><p>For example:</p><pre><code>&gt;&gt;&gt; my_dict = {"a": 1, "b": 2, "c": 3, "d": 4}
&gt;&gt;&gt; my_dict["b"] = 6</code></pre><p>Now the dictionary is:</p><pre><code class="language-python">{'a': 1, 'b': 6, 'c': 3, 'd': 4}</code></pre><h4 id="add-a-key-value-pair-to-a-dictionary">Add a Key-Value Pair to a Dictionary</h4><p>The keys of a dictionary have to be unique. To add a new key-value pair we use the same syntax that we use to update a value, but now the key has to be new.</p><pre><code class="language-python">&lt;variable_with_dictionary&gt;[&lt;new_key&gt;] = &lt;value&gt;</code></pre><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; my_dict = {"a": 1, "b": 2, "c": 3, "d": 4}
&gt;&gt;&gt; my_dict["e"] = 5</code></pre><p>Now the dictionary has a new key-value pair:</p><pre><code class="language-python">{'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}</code></pre><h4 id="delete-a-key-value-pair-in-a-dictionary">Delete a Key-Value Pair in a Dictionary</h4><p>To delete a key-value pair, we use the <code>del</code> statement:</p><pre><code class="language-python">del &lt;dictionary_variable&gt;[&lt;key&gt;]
</code></pre><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; my_dict = {"a": 1, "b": 2, "c": 3, "d": 4}
&gt;&gt;&gt; del my_dict["c"]</code></pre><p>Now the dictionary is:</p><pre><code class="language-python">{'a': 1, 'b': 2, 'd': 4}</code></pre><h4 id="dictionary-methods">Dictionary Methods</h4><p>These are some examples of the most commonly used dictionary methods:</p><pre><code class="language-python">&gt;&gt;&gt; my_dict = {"a": 1, "b": 2, "c": 3, "d": 4}
&gt;&gt;&gt; my_dict.get("c")
3
&gt;&gt;&gt; my_dict.items()
dict_items([('a', 1), ('b', 2), ('c', 3), ('d', 4)])
&gt;&gt;&gt; my_dict.keys()
dict_keys(['a', 'b', 'c', 'd'])
&gt;&gt;&gt; my_dict.pop("d")
4
&gt;&gt;&gt; my_dict.popitem()
('c', 3)
&gt;&gt;&gt; my_dict.setdefault("a", 15)
1
&gt;&gt;&gt; my_dict
{'a': 1, 'b': 2}
&gt;&gt;&gt; my_dict.setdefault("f", 25)
25
&gt;&gt;&gt; my_dict
{'a': 1, 'b': 2, 'f': 25}
&gt;&gt;&gt; my_dict.update({"c": 3, "d": 4, "e": 5})
&gt;&gt;&gt; my_dict.values()
dict_values([1, 2, 25, 3, 4, 5])
&gt;&gt;&gt; my_dict.clear()
&gt;&gt;&gt; my_dict
{}</code></pre><p>To learn more about dictionary methods, I recommend <a href="https://docs.python.org/3/library/stdtypes.html#mapping-types-dict">reading this article</a> from the documentation.</p><h2 id="-python-operators">🔸 Python Operators</h2><p>Great. Now you know the syntax of the basic data types and built-in data structures in Python, so let's start diving into operators in Python. They are essential to perform operations and to form expressions.</p><h3 id="arithmetic-operators-in-python">Arithmetic Operators in Python</h3><p>These operators are: </p><h4 id="addition-">Addition: +</h4><pre><code class="language-python">&gt;&gt;&gt; 5 + 6
11
&gt;&gt;&gt; 0 + 6
6
&gt;&gt;&gt; 3.4 + 5.7
9.1
&gt;&gt;&gt; "Hello" + ", " + "World"
'Hello, World'
&gt;&gt;&gt; True + False
1</code></pre><p>💡 <strong>Tip: </strong>The last two examples are curious, right? This operator behaves differently based on the data type of the operands. </p><p>When they are strings, this operator concatenates the strings and when they are Boolean values, it performs a particular operation. </p><p>In Python, <code>True</code> is equivalent to <code>1</code> and <code>False</code> is equivalent to <code>0</code>. This is why the result is <code>1 + 0 = 1</code></p><h4 id="subtraction-">Subtraction: -</h4><pre><code class="language-python">&gt;&gt;&gt; 5 - 6
-1
&gt;&gt;&gt; 10 - 3
7
&gt;&gt;&gt; 5 - 6
-1
&gt;&gt;&gt; 4.5 - 5.6 - 2.3
-3.3999999999999995
&gt;&gt;&gt; 4.5 - 7
-2.5
&gt;&gt;&gt; - 7.8 - 6.2
-14.0</code></pre><h4 id="multiplication-">Multiplication: *</h4><pre><code class="language-python">&gt;&gt;&gt; 5 * 6
30
&gt;&gt;&gt; 6 * 7
42
&gt;&gt;&gt; 10 * 100
1000
&gt;&gt;&gt; 4 * 0
0
&gt;&gt;&gt; 3.4 *6.8
23.119999999999997
&gt;&gt;&gt; 4 * (-6)
-24
&gt;&gt;&gt; (-6) * (-8)
48
&gt;&gt;&gt; "Hello" * 4
'HelloHelloHelloHello'
&gt;&gt;&gt; "Hello" * 0
''
&gt;&gt;&gt; "Hello" * -1
''</code></pre><p><strong>💡 Tip:</strong> you can "multiply" a string by an integer to repeat the string a given number of times. </p><h4 id="exponentiation-">Exponentiation: **</h4><pre><code class="language-python">&gt;&gt;&gt; 6 ** 8
1679616
&gt;&gt;&gt; 5 ** 2
25
&gt;&gt;&gt; 4 ** 0
1
&gt;&gt;&gt; 16 ** (1/2)
4.0
&gt;&gt;&gt; 16 ** (0.5)
4.0
&gt;&gt;&gt; 125 ** (1/3)
4.999999999999999
&gt;&gt;&gt; 4.5 ** 2.3
31.7971929089206
&gt;&gt;&gt; 3 ** (-1)
0.3333333333333333</code></pre><h4 id="division-">Division: /</h4><pre><code class="language-python">&gt;&gt;&gt; 25 / 5
5.0
&gt;&gt;&gt; 3 / 6
0.5
&gt;&gt;&gt; 0 / 5
0.0
&gt;&gt;&gt; 2467 / 4673
0.5279263856195163
&gt;&gt;&gt; 1 / 2
0.5
&gt;&gt;&gt; 4.5 / 3.5
1.2857142857142858
&gt;&gt;&gt; 6 / 7
0.8571428571428571
&gt;&gt;&gt; -3 / -4
0.75
&gt;&gt;&gt; 3 / -4
-0.75
&gt;&gt;&gt; -3 / 4
-0.75</code></pre><p>💡 <strong>Tip: </strong>this operator returns a <code>float</code> as the result, even if the decimal part is <code>.0</code></p><p>If you try to divide by <code>0</code>, you will get a <code>ZeroDivisionError</code>:</p><pre><code class="language-python">&gt;&gt;&gt; 5 / 0
Traceback (most recent call last):
File "&lt;pyshell#109&gt;", line 1, in &lt;module&gt;
5 / 0
ZeroDivisionError: division by zero</code></pre><h4 id="integer-division-">Integer Division: //</h4><p>This operator returns an integer if the operands are integers. If they are floats, the result will be a float with <code>.0</code> as the decimal part because it truncates the decimal part.</p><pre><code class="language-python">&gt;&gt;&gt; 5 // 6
0
&gt;&gt;&gt; 8 // 2
4
&gt;&gt;&gt; -4 // -5
0
&gt;&gt;&gt; -5 // 8
-1
&gt;&gt;&gt; 0 // 5
0
&gt;&gt;&gt; 156773 // 356
440</code></pre><h4 id="modulo-">Modulo: %</h4><pre><code>&gt;&gt;&gt; 1 % 5
1
&gt;&gt;&gt; 2 % 5
2
&gt;&gt;&gt; 3 % 5
3
&gt;&gt;&gt; 4 % 5
4
&gt;&gt;&gt; 5 % 5
0
&gt;&gt;&gt; 5 % 8
5
&gt;&gt;&gt; 3 % 1
0
&gt;&gt;&gt; 15 % 3
0
&gt;&gt;&gt; 17 % 8
1
&gt;&gt;&gt; 2568 % 4
0
&gt;&gt;&gt; 245 % 15
5
&gt;&gt;&gt; 0 % 6
0
&gt;&gt;&gt; 3.5 % 2.4
1.1
&gt;&gt;&gt; 6.7 % -7.8
-1.0999999999999996
&gt;&gt;&gt; 2.3 % 7.5
2.3</code></pre><h4 id="comparison-operators">Comparison Operators</h4><p>These operators are:</p><ul><li>Greater than: <code>&gt;</code></li><li>Greater than or equal to: <code>&gt;=</code> </li><li>Less than: <code>&lt;</code></li><li>Less than or equal to: <code>&lt;=</code> </li><li>Equal to: <code>==</code> </li><li>Not Equal to: <code>!=</code></li></ul><p>These comparison operators make expressions that evaluate to either <code>True</code> or <code>False</code>. Here we have are some examples:</p><pre><code>&gt;&gt;&gt; 5 &gt; 6
False
&gt;&gt;&gt; 10 &gt; 8
True
&gt;&gt;&gt; 8 &gt; 8
False
&gt;&gt;&gt; 8 &gt;= 5
True
&gt;&gt;&gt; 8 &gt;= 8
True
&gt;&gt;&gt; 5 &lt; 6
True
&gt;&gt;&gt; 10 &lt; 8
False
&gt;&gt;&gt; 8 &lt; 8
False
&gt;&gt;&gt; 8 &lt;= 5
False
&gt;&gt;&gt; 8 &lt;= 8
True
&gt;&gt;&gt; 8 &lt;= 10
True
&gt;&gt;&gt; 56 == 56
True
&gt;&gt;&gt; 56 == 78
False
&gt;&gt;&gt; 34 != 59
True
&gt;&gt;&gt; 67 != 67
False</code></pre><p>We can also use them to compare strings based on their alphabetical order:</p><pre><code class="language-python">&gt;&gt;&gt; "Hello" &gt; "World"
False
&gt;&gt;&gt; "Hello" &gt;= "World"
False
&gt;&gt;&gt; "Hello" &lt; "World"
True
&gt;&gt;&gt; "Hello" &lt;= "World"
True
&gt;&gt;&gt; "Hello" == "World"
False
&gt;&gt;&gt; "Hello" != "World"
True</code></pre><p>We typically use them to compare the values of two or more variables:</p><pre><code class="language-python">&gt;&gt;&gt; a = 1
&gt;&gt;&gt; b = 2
&gt;&gt;&gt; a &lt; b
True
&gt;&gt;&gt; a &lt;= b
True
&gt;&gt;&gt; a &gt; b
False
&gt;&gt;&gt; a &gt;= b
False
&gt;&gt;&gt; a == b
False
&gt;&gt;&gt; a != b
True</code></pre><p>💡 <strong>Tip: </strong>notice that<strong> </strong>the comparison operator is <code>==</code> while the assignment operator is <code>=</code>. Their effect is different. <code>==</code> returns <code>True</code> or <code>False</code> while <code>=</code> assigns a value to a variable.</p><h4 id="comparison-operator-chaining">Comparison Operator Chaining</h4><p>In Python, we can use something called "comparison operator chaining" in which we chain the comparison operators to make more than one comparison more concisely. </p><p>For example, this checks if <code>a</code> is less than <code>b</code> and if <code>b</code> is less than <code>c</code>:</p><pre><code>a &lt; b &lt; c</code></pre><p>Here we have some examples:</p><pre><code>&gt;&gt;&gt; a = 1
&gt;&gt;&gt; b = 2
&gt;&gt;&gt; c = 3
&gt;&gt;&gt; a &lt; b &lt; c
True
&gt;&gt;&gt; a &gt; b &gt; c
False
&gt;&gt;&gt; a &lt;= b &lt;= c
True
&gt;&gt;&gt; a &gt;= b &gt;= c
False
&gt;&gt;&gt; a &gt;= b &gt; c
False
&gt;&gt;&gt; a &lt;= b &lt; c
True</code></pre><h4 id="logical-operators">Logical Operators</h4><p>There are three logical operators in Python: <code>and</code>, <code>or</code>, and <code>not</code>. Each one of these operators has its own truth table and they are essential to work with conditionals.</p><p>The <code>and</code> operator:</p><pre><code class="language-python">&gt;&gt;&gt; True and True
True
&gt;&gt;&gt; True and False
False
&gt;&gt;&gt; False and True
False
&gt;&gt;&gt; False and False
False</code></pre><p>The <code>or</code> operator:</p><pre><code class="language-python">&gt;&gt;&gt; True or True
True
&gt;&gt;&gt; True or False
True
&gt;&gt;&gt; False or True
True
&gt;&gt;&gt; False or False
False</code></pre><p>The <code>not</code> operator:</p><pre><code class="language-python">&gt;&gt;&gt; not True
False
&gt;&gt;&gt; not False
True</code></pre><p>These operator are used to form more complex expressions that combine different operators and variables.</p><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; a = 6
&gt;&gt;&gt; b = 3
&gt;&gt;&gt; a &lt; 6 or b &gt; 2
True
&gt;&gt;&gt; a &gt;= 3 and b &gt;= 1
True
&gt;&gt;&gt; (a + b) == 9 and b &gt; 1
True
&gt;&gt;&gt; ((a % 3) &lt; 2) and ((a + b) == 3)
False</code></pre><h4 id="assignment-operators">Assignment Operators</h4><p>Assignment operators are used to assign a value to a variable. </p><p>They are: <code>=</code>, <code>+=</code>, <code>-=</code>, <code>*=</code>, <code>%=</code>, <code>/=</code>, <code>//=</code>, <code>**=</code></p><ul><li>The <code>=</code> operator assigns the value to the variable.</li><li>The other operators perform an operation with the current value of the variable and the new value and assigns the result to the same variable.</li></ul><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; x = 3
&gt;&gt;&gt; x
3
&gt;&gt;&gt; x += 15
&gt;&gt;&gt; x
18
&gt;&gt;&gt; x -= 2
&gt;&gt;&gt; x
16
&gt;&gt;&gt; x *= 2
&gt;&gt;&gt; x
32
&gt;&gt;&gt; x %= 5
&gt;&gt;&gt; x
2
&gt;&gt;&gt; x /= 1
&gt;&gt;&gt; x
2.0
&gt;&gt;&gt; x //= 2
&gt;&gt;&gt; x
1.0
&gt;&gt;&gt; x **= 5
&gt;&gt;&gt; x
1.0</code></pre><p>💡 <strong>Tips:</strong> these operators perform bitwise operations before assigning the result to the variable: <code>&amp;=</code>, <code>|=</code>, <code>^=</code>, <code>&gt;&gt;=</code>, <code>&lt;&lt;=</code>.</p><h4 id="membership-operators">Membership Operators</h4><p>You can check if an element is in a sequence or not with the operators: <code>in</code> and <code>not in</code>. The result will be either <code>True</code> or <code>False</code>.</p><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; 5 in [1, 2, 3, 4, 5]
True
&gt;&gt;&gt; 8 in [1, 2, 3, 4, 5]
False
&gt;&gt;&gt; 5 in (1, 2, 3, 4, 5)
True
&gt;&gt;&gt; 8 in (1, 2, 3, 4, 5)
False
&gt;&gt;&gt; "a" in {"a": 1, "b": 2}
True
&gt;&gt;&gt; "c" in {"a": 1, "b": 2}
False
&gt;&gt;&gt; "h" in "Hello"
False
&gt;&gt;&gt; "H" in "Hello"
True
&gt;&gt;&gt; 5 not in [1, 2, 3, 4, 5]
False
&gt;&gt;&gt; 8 not in (1, 2, 3, 4, 5)
True
&gt;&gt;&gt; "a" not in {"a": 1, "b": 2}
False
&gt;&gt;&gt; "c" not in {"a": 1, "b": 2}
True
&gt;&gt;&gt; "h" not in "Hello"
True
&gt;&gt;&gt; "H" not in "Hello"
False</code></pre><p>We typically use them with variables that store sequences, like in this example:</p><pre><code class="language-python">&gt;&gt;&gt; message = "Hello, World!"
&gt;&gt;&gt; "e" in message
True</code></pre><h2 id="-conditionals-in-python">🔹 Conditionals in Python</h2><p>Now let's see how we can write conditionals to make certain parts of our code run (or not) based on whether a condition is <code>True</code> or <code>False</code>.</p><h3 id="if-statements-in-python"><code>if</code> statements in Python</h3><p>This is the syntax of a basic <code>if</code> statement:</p><pre><code>if &lt;condition&gt;:
&lt;code&gt;</code></pre><p>If the condition is <code>True</code>, the code will run. Else, if it's <code>False</code>, the code will not run.</p><p><strong>💡 Tip:</strong> there is a colon (<code>:</code>) at the end of the first line and the code is indented. This is essential in Python to make the code belong to the conditional.</p><p>Here we have some examples:</p><h4 id="false-condition">False Condition</h4><pre><code>x = 5
if x &gt; 9:
print("Hello, World!")</code></pre><p>The condition is <code>x &gt; 9</code> and the code is <code>print("Hello, World!")</code>. </p><p>In this case, the condition is <code>False</code>, so there is no output.</p><h4 id="true-condition">True Condition</h4><p>Here we have another example. Now the condition is <code>True</code>:</p><pre><code>color = "Blue"
if color == "Blue":
print("This is my favorite color")</code></pre><p>The output is:</p><pre><code>"This is my favorite color"</code></pre><h4 id="code-after-the-conditional">Code After the Conditional</h4><p>Here we have an example with code that runs after the conditional has been completed. Notice that the last line is not indented, which means that it doesn't belong to the conditional.</p><pre><code class="language-python">x = 5
if x &gt; 9:
print("Hello!")
print("End")</code></pre><p>In this example, the condition <code>x &gt; 9</code> is <code>False</code>, so the first print statement doesn't run but the last print statement runs because it is not part of the conditional, so the output is:</p><pre><code class="language-python">End</code></pre><p>However, if the condition is <code>True</code>, like in this example:</p><pre><code class="language-python">x = 15
if x &gt; 9:
print("Hello!")
print("End")</code></pre><p>The output will be:</p><pre><code>Hello!
End</code></pre><h4 id="examples-of-conditionals">Examples of Conditionals</h4><p>This is another example of a conditional:</p><pre><code class="language-python">favorite_season = "Summer"
if favorite_season == "Summer":
print("That is my favorite season too!")</code></pre><p>In this case, the output will be:</p><pre><code class="language-python">That is my favorite season too!</code></pre><p>But if we change the value of <code>favorite_season</code>:</p><pre><code class="language-python">favorite_season = "Winter"
if favorite_season == "Summer":
print("That is my favorite season too!")</code></pre><p>There will be no output because the condition will be <code>False</code>.</p><h3 id="if-else-statements-in-python"><code>if/else</code> statements in Python</h3><p>We can add an <code>else</code> clause to the conditional if we need to specify what should happen when the condition is <code>False</code>.</p><p>This is the general syntax:</p><pre><code class="language-python">if &lt;condition&gt;:
&lt;code&gt;
else:
&lt;code&gt;</code></pre><p><strong>💡 Tip:</strong> notice that the two code blocks are indented (<code>if</code> and <code>else</code>). This is essential for Python to be able to differentiate between the code that belongs to the main program and the code that belongs to the conditional.</p><p>Let's see an example with the <code>else</code> clause:</p><h4 id="true-condition-1">True Condition</h4><pre><code class="language-python">x = 15
if x &gt; 9:
print("Hello!")
else:
print("Bye!")
print("End")</code></pre><p>The output is:</p><pre><code>Hello!
End</code></pre><p>When the condition of the <code>if</code> clause is <code>True</code>, this clause runs. The <code>else</code> clause doesn't run.</p><h4 id="false-condition-1">False Condition</h4><p>Now the <code>else</code> clause runs because the condition is <code>False</code>.</p><pre><code class="language-python">x = 5
if x &gt; 9:
print("Hello!")
else:
print("Bye!")
print("End")</code></pre><p>Now the output is:</p><pre><code>Bye!
End</code></pre><h3 id="if-elif-else-statements-in-python"><code>if/elif/else</code> statements in Python</h3><p>To customize our conditionals even further, we can add one or more <code>elif</code> clauses to check and handle multiple conditions. Only the code of the first condition that evaluates to <code>True</code> will run. </p><p><strong>💡 Tip:</strong> <code>elif</code> has to be written after <code>if</code> and before <code>else</code>.</p><h4 id="first-condition-true">First Condition True</h4><pre><code class="language-python">x = 5
if x &lt; 9:
print("Hello!")
elif x &lt; 15:
print("It's great to see you")
else:
print("Bye!")
print("End")</code></pre><p>We have two conditions <code>x &lt; 9</code> and <code>x &lt; 15</code>. Only the code block from the first condition that is <code>True</code> from top to bottom will be executed.</p><p>In this case, the output is:</p><pre><code>Hello!
End</code></pre><p>Because the first condition is <code>True</code>: <code>x &lt; 9</code>.</p><h4 id="second-condition-true">Second Condition True</h4><p>If the first condition is <code>False</code>, then the second condition will be checked. </p><p>In this example, the first condition <code>x &lt; 9</code> is <code>False</code> but the second condition <code>x &lt; 15</code> is <code>True</code>, so the code that belongs to this clause will run.</p><pre><code class="language-python">x = 13
if x &lt; 9:
print("Hello!")
elif x &lt; 15:
print("It's great to see you")
else:
print("Bye!")
print("End")</code></pre><p>The output is:</p><pre><code>It's great to see you
End</code></pre><h4 id="all-conditions-are-false">All Conditions are False</h4><p>If all conditions all <code>False</code>, then the <code>else</code> clause will run:</p><pre><code class="language-python">x = 25
if x &lt; 9:
print("Hello!")
elif x &lt; 15:
print("It's great to see you")
else:
print("Bye!")
print("End")</code></pre><p>The output will be:</p><pre><code>Bye!
End</code></pre><h4 id="multiple-elif-clauses">Multiple elif Clauses</h4><p>We can add as many <code>elif</code> clauses as needed. This is an example of a conditional with two <code>elif</code> clauses:</p><pre><code class="language-python">if favorite_season == "Winter":
print("That is my favorite season too")
elif favorite_season == "Summer":
print("Summer is amazing")
elif favorite_season == "Spring":
print("I love spring")
else:
print("Fall is my mom's favorite season")</code></pre><p>Each condition will be checked and only the code block of the first condition that evaluates to <code>True</code> will run. If none of them are <code>True</code>, the <code>else</code> clause will run.</p><h2 id="-for-loops-in-python">🔸 For Loops in Python</h2><p>Now you know how to write conditionals in Python, so let's start diving into loops. For loops are amazing programming structures that you can use to repeat a code block a specific number of times. </p><p>This is the basic syntax to write a for loop in Python:</p><pre><code>for &lt;loop_variable&gt; in &lt;iterable&gt;:
&lt;code&gt;</code></pre><p>The iterable can be a list, tuple, dictionary, string, the sequence returned by range, a file, or any other type of iterable in Python. We will start with <code>range()</code>.</p><h3 id="the-range-function-in-python">The <code>range()</code> function in Python</h3><p>This function returns a sequence of integers that we can use to determine how many iterations (repetitions) of the loop will be completed. The loop will complete one iteration per integer. </p><p><strong>💡 Tip:</strong> Each integer is assigned to the loop variable one at a time per iteration.</p><p>This is the general syntax to write a for loop with <code>range()</code>:</p><pre><code>for &lt;loop_variable&gt; in range(&lt;start&gt;, &lt;stop&gt;, &lt;step&gt;):
&lt;code&gt;</code></pre><p>As you can see, the range function has three parameters:</p><ul><li><code>start</code>: where the sequence of integers will start. By default, it's <code>0</code>.</li><li><code>stop</code>: where the sequence of integers will stop (without including this value). </li><li><code>step</code>: the value that will be added to each element to get the next element in the sequence. By default, it's <code>1</code>. </li></ul><p>You can pass 1, 2, or 3 arguments to <code>range()</code>:</p><ul><li>With 1 argument, the value is assigned to the <code>stop</code> parameter and the default values for the other two parameters are used. </li><li>With 2 arguments, the values are assigned to the <code>start</code> and <code>stop</code> parameters and the default value for <code>step</code> is used.</li><li>With 3 arguments, the values are assigned to the <code>start</code>, <code>stop</code>, and <code>step</code> parameters (in order).</li></ul><p>Here we have some examples with <strong>one parameter</strong>:</p><pre><code class="language-python">for i in range(5):
print(i)</code></pre><p>Output:</p><pre><code>0
1
2
3
4</code></pre><p>💡 <strong>Tip:</strong> the loop variable is updated automatically.</p><pre><code class="language-python">&gt;&gt;&gt; for j in range(15):
print(j * 2)</code></pre><p>Output:</p><pre><code class="language-python">0
2
4
6
8
10
12
14
16
18
20
22
24
26
28</code></pre><p>In the example below, we repeat a string as many times as indicated by the value of the loop variable:</p><pre><code class="language-python">&gt;&gt;&gt; for num in range(8):
print("Hello" * num)</code></pre><p>Output:</p><pre><code class="language-python">Hello
HelloHello
HelloHelloHello
HelloHelloHelloHello
HelloHelloHelloHelloHello
HelloHelloHelloHelloHelloHello
HelloHelloHelloHelloHelloHelloHello</code></pre><p>We can also use for loops with built-in data structures such as lists:</p><pre><code class="language-python">&gt;&gt;&gt; my_list = ["a", "b", "c", "d"]
&gt;&gt;&gt; for i in range(len(my_list)):
print(my_list[i])
</code></pre><p>Output:</p><pre><code>a
b
c
d</code></pre><p>💡<strong> Tip: </strong>when you use <code>range(len(&lt;seq&gt;))</code>, you get a sequence of numbers that goes from <code>0</code> up to <code>len(&lt;seq&gt;)-1</code>. This represents the sequence of valid indices.</p><p>These are some examples with <strong>two parameters</strong>:</p><pre><code class="language-python">&gt;&gt;&gt; for i in range(2, 10):
print(i)</code></pre><p>Output:</p><pre><code class="language-python">2
3
4
5
6
7
8
9</code></pre><p><strong>Code:</strong></p><pre><code class="language-python">&gt;&gt;&gt; for j in range(2, 5):
print("Python" * j)</code></pre><p>Output:</p><pre><code class="language-python">PythonPython
PythonPythonPython
PythonPythonPythonPython</code></pre><p><strong>Code:</strong></p><pre><code class="language-python">&gt;&gt;&gt; my_list = ["a", "b", "c", "d"]
&gt;&gt;&gt; for i in range(2, len(my_list)):
print(my_list[i])</code></pre><p>Output:</p><pre><code class="language-python">c
d</code></pre><p><strong>Code:</strong></p><pre><code class="language-python">&gt;&gt;&gt; my_list = ["a", "b", "c", "d"]
&gt;&gt;&gt; for i in range(2, len(my_list)-1):
my_list[i] *= i</code></pre><p>Now the list is: <code>['a', 'b', 'cc', 'd']</code></p><p>These are some examples with <strong>three parameters</strong>:</p><pre><code class="language-python">&gt;&gt;&gt; for i in range(3, 16, 2):
print(i)</code></pre><p>Output:</p><pre><code class="language-python">3
5
7
9
11
13
15</code></pre><p><strong>Code:</strong></p><pre><code>&gt;&gt;&gt; for j in range(10, 5, -1):
print(j)</code></pre><p>Output:</p><pre><code class="language-python">10
9
8
7
6</code></pre><p><strong>Code:</strong></p><pre><code class="language-python">&gt;&gt;&gt; my_list = ["a", "b", "c", "d", "e", "f", "g"]
&gt;&gt;&gt; for i in range(len(my_list)-1, 2, -1):
print(my_list[i])</code></pre><p>Output:</p><pre><code class="language-python">g
f
e
d</code></pre><h3 id="how-to-iterate-over-iterables-in-python">How to Iterate over Iterables in Python</h3><p>We can iterate directly over iterables such as lists, tuples, dictionaries, strings, and files using for loops. We will get each one of their elements one at a time per iteration. This is very helpful to work with them directly.</p><p>Let's see some examples:</p><h4 id="iterate-over-a-string">Iterate Over a String</h4><p>If we iterate over a string, its characters will be assigned to the loop variable one by one (including spaces and symbols).</p><pre><code class="language-python">&gt;&gt;&gt; message = "Hello, World!"
&gt;&gt;&gt; for char in message:
print(char)
H
e
l
l
o
,
W
o
r
l
d
!</code></pre><p>We can also iterate over modified copies of the string by calling a string method where we specify the iterable in the for loop. This will assign the copy of the string as the iterable that will be used for the iterations, like this:</p><pre><code class="language-python">&gt;&gt;&gt; word = "Hello"
&gt;&gt;&gt; for char in word.lower(): # calling the string method
print(char)
h
e
l
l
o</code></pre><pre><code class="language-python">&gt;&gt;&gt; word = "Hello"
&gt;&gt;&gt; for char in word.upper(): # calling the string method
print(char)
H
E
L
L
O</code></pre><h4 id="iterate-over-lists-and-tuples">Iterate Over Lists and Tuples</h4><pre><code class="language-python">&gt;&gt;&gt; my_list = [2, 3, 4, 5]
&gt;&gt;&gt; for num in my_list:
print(num)</code></pre><p>The output is:</p><pre><code class="language-python">2
3
4
5</code></pre><p><strong>Code:</strong></p><pre><code class="language-python">&gt;&gt;&gt; my_list = (2, 3, 4, 5)
&gt;&gt;&gt; for num in my_list:
if num % 2 == 0:
print("Even")
else:
print("Odd")</code></pre><p>Output:</p><pre><code class="language-python">Even
Odd
Even
Odd</code></pre><h3 id="iterate-over-the-keys-values-and-key-value-pairs-of-dictionaries">Iterate Over the Keys, Values, and Key-Value Pairs of Dictionaries</h3><p>We can iterate over the keys, values, and key-value pairs of a dictionary by calling specific dictionary methods. Let's see how.</p><p>To<strong> iterate over the</strong> <strong>keys</strong>, we write:</p><pre><code class="language-python">for &lt;var&gt; in &lt;dictionary_variable&gt;:
&lt;code&gt;</code></pre><p>We just write the name of the variable that stores the dictionary as the iterable.</p><p><strong>💡 Tip: </strong>you can also write <code>&lt;dictionary_variable&gt;.keys()</code> but writing the name of the variable directly is more concise and it works exactly the same. </p><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; my_dict = {"a": 1, "b": 2, "c": 3}
&gt;&gt;&gt; for key in my_dict:
print(key)
a
b
c</code></pre><p><strong>💡 Tip: </strong>you can assign any valid name to the loop variable.</p><p>To<strong> iterate over the</strong> <strong>values</strong>, we use:</p><pre><code class="language-python">for &lt;var&gt; in &lt;dictionary_variable&gt;.values():
&lt;code&gt;</code></pre><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; my_dict = {"a": 1, "b": 2, "c": 3}
&gt;&gt;&gt; for value in my_dict.values():
print(value)
1
2
3</code></pre><p>To<strong> iterate over the</strong> <strong>key-value pairs</strong>, we use:</p><pre><code class="language-python">for &lt;key&gt;, &lt;value&gt; in &lt;dictionary_variable&gt;.items():
&lt;code&gt;</code></pre><p>💡 <strong>Tip:</strong> we are defining two loop variables because we want to assign the key and the value to variables that we can use in the loop. </p><pre><code class="language-python">&gt;&gt;&gt; my_dict = {"a": 1, "b": 2, "c": 3}
&gt;&gt;&gt; for key, value in my_dict.items():
print(key, value)
a 1
b 2
c 3</code></pre><p>If we define only one loop variable, this variable will contain a tuple with the key-value pair:</p><pre><code class="language-python">&gt;&gt;&gt; my_dict = {"a": 1, "b": 2, "c": 3}
&gt;&gt;&gt; for pair in my_dict.items():
print(pair)
('a', 1)
('b', 2)
('c', 3)</code></pre><h3 id="break-and-continue-in-python">Break and Continue in Python</h3><p>Now you know how to iterate over sequences in Python. We also have loop control statements to customize what happens when the loop runs: <code>break</code> and <code>continue</code>.</p><h4 id="the-break-statement">The Break Statement</h4><p>The <code>break</code> statement is used to stop the loop immediately. </p><p>When a <code>break</code> statement is found, the loop stops and the program returns to its normal execution beyond the loop.</p><p>In the example below, we stop the loop when an even element is found. </p><pre><code class="language-python">&gt;&gt;&gt; my_list = [1, 2, 3, 4, 5]
&gt;&gt;&gt; for elem in my_list:
if elem % 2 == 0:
print("Even:", elem)
print("break")
break
else:
print("Odd:", elem)
Odd: 1
Even: 2
break</code></pre><h4 id="the-continue-statement">The Continue Statement</h4><p>The <code>continue</code> statement is used to skip the rest of the current iteration. </p><p>When it is found during the execution of the loop, the current iteration stops and a new one begins with the updated value of the loop variable.</p><p>In the example below, we skip the current iteration if the element is even and we only print the value if the element is odd:</p><pre><code class="language-python">&gt;&gt;&gt; my_list = [1, 2, 3, 4, 5]
&gt;&gt;&gt; for elem in my_list:
if elem % 2 == 0:
print("continue")
continue
print("Odd:", elem)
Odd: 1
continue
Odd: 3
continue
Odd: 5</code></pre><h3 id="the-zip-function-in-python">The zip() function in Python</h3><p><code>zip()</code> is an amazing built-in function that we can use in Python to iterate over multiple sequences at once, getting their corresponding elements in each iteration.</p><p>We just need to pass the sequences as arguments to the <code>zip()</code> function and use this result in the loop.</p><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; my_list1 = [1, 2, 3, 4]
&gt;&gt;&gt; my_list2 = [5, 6, 7, 8]
&gt;&gt;&gt; for elem1, elem2 in zip(my_list1, my_list2):
print(elem1, elem2)
1 5
2 6
3 7
4 8</code></pre><h3 id="the-enumerate-function-in-python">The enumerate() Function in Python</h3><p>You can also keep track of a counter while the loop runs with the <code>enum()</code> function. It is commonly used to iterate over a sequence and get the corresponding index.</p><p><strong>💡 Tip: </strong>By default, the counter starts at <code>0</code>.</p><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; my_list = [5, 6, 7, 8]
&gt;&gt;&gt; for i, elem in enumerate(my_list):
print(i, elem)
0 5
1 6
2 7
3 8</code></pre><pre><code class="language-python">&gt;&gt;&gt; word = "Hello"
&gt;&gt;&gt; for i, char in enumerate(word):
print(i, char)
0 H
1 e
2 l
3 l
4 o</code></pre><p>If you start the counter from <code>0</code>, you can use the index and the current value in the same iteration to modify the sequence:</p><pre><code class="language-python">&gt;&gt;&gt; my_list = [5, 6, 7, 8]
&gt;&gt;&gt; for index, num in enumerate(my_list):
my_list[index] = num * 3
&gt;&gt;&gt; my_list
[15, 18, 21, 24]</code></pre><p>You can start the counter from a different number by passing a second argument to <code>enumerate()</code>:</p><pre><code class="language-python">&gt;&gt;&gt; word = "Hello"
&gt;&gt;&gt; for i, char in enumerate(word, 2):
print(i, char)
2 H
3 e
4 l
5 l
6 o</code></pre><h4 id="the-else-clause">The else Clause</h4><p>For loops also have an <code>else</code> clause. You can add this clause to the loop if you want to run a specific block of code when the loop completes all its iterations without finding the <code>break</code> statement.</p><p><strong>💡 Tip:</strong> if <code>break</code> is found, the <code>else</code> clause doesn't run and if <code>break</code> is not found, the <code>else</code> clause runs.</p><p>In the example below, we try to find an element greater than 6 in the list. That element is not found, so <code>break</code> doesn't run and the <code>else</code> clause runs.</p><pre><code class="language-python">my_list = [1, 2, 3, 4, 5]
for elem in my_list:
if elem &gt; 6:
print("Found")
break
else:
print("Not Found")</code></pre><p>The output is:</p><pre><code>Not Found</code></pre><p>However, if the <code>break</code> statement runs, the <code>else</code> clause doesn't run. We can see this in the example below:</p><pre><code class="language-python">my_list = [1, 2, 3, 4, 5, 8] # Now the list has the value 8
for elem in my_list:
if elem &gt; 6:
print("Found")
break
else:
print("Not Found")</code></pre><p>The output is:</p><pre><code>Found</code></pre><h2 id="-while-loops-in-python">🔹 While Loops in Python</h2><p>While loops are similar to for loops in that they let us repeat a block of code. The difference is that while loops run while a condition is <code>True</code>. </p><p>In a while loop, we define the condition, not the number of iterations. The loop stops when the condition is <code>False</code>.</p><p>This is the general syntax of a while loop:</p><pre><code class="language-python">while &lt;condition&gt;:
&lt;code&gt;</code></pre><p>💡 <strong>Tip: </strong>in while loops, you must update the variables that are part of the condition to make sure that the condition will eventually become <code>False</code>.</p><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; x = 6
&gt;&gt;&gt; while x &lt; 15:
print(x)
x += 1
6
7
8
9
10
11
12
13
14</code></pre><pre><code class="language-python">&gt;&gt;&gt; x = 4
&gt;&gt;&gt; while x &gt;= 0:
print("Hello" * x)
x -= 1
HelloHelloHelloHello
HelloHelloHello
HelloHello
Hello</code></pre><pre><code class="language-python">&gt;&gt;&gt; num = 5
&gt;&gt;&gt; while num &gt;= 1:
print("*" * num)
num -= 2
*****
***
*</code></pre><h4 id="break-and-continue">Break and Continue</h4><p>We can also use <code>break</code> and <code>continue</code> with while loops and they both work exactly the same:</p><ul><li><code>break</code> stops the while loop immediately.</li><li><code>continue</code> stops the current iteration and starts the next one.</li></ul><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; x = 5
&gt;&gt;&gt; while x &lt; 15:
if x % 2 == 0:
print("Even:", x)
break
print(x)
x += 1
5
Even: 6</code></pre><pre><code class="language-python">&gt;&gt;&gt; x = 5
&gt;&gt;&gt; while x &lt; 15:
if x % 2 == 0:
x += 1
continue
print("Odd:", x)
x += 1
Odd: 5
Odd: 7
Odd: 9
Odd: 11
Odd: 13</code></pre><h4 id="the-else-clause-1">The <code>else</code> Clause</h4><p>We can also add an <code>else</code> clause to a while loop. If <code>break</code> is found, the <code>else</code> clause doesn't run but if the <code>break</code> statement is not found, the <code>else</code> clause runs.</p><p>In the example below, the <code>break</code> statement is not found because none of the numbers are even before the condition becomes <code>False</code>, so the <code>else</code> clause runs.</p><pre><code class="language-python">x = 5
while x &lt; 15:
if x % 2 == 0:
print("Even number found")
break
print(x)
x += 2
else:
print("All numbers were odd")</code></pre><p>This is the output:</p><pre><code class="language-python">5
7
9
11
13
All numbers were odd</code></pre><p>But in this version of the example, the <code>break</code> statement is found and the <code>else</code> clause doesn't run:</p><pre><code>x = 5
while x &lt; 15:
if x % 2 == 0:
print("Even number found")
break
print(x)
x += 1 # Now we are incrementing the value by 1
else:
print("All numbers were odd")</code></pre><p>The output is:</p><pre><code class="language-python">5
Even number found</code></pre><h4 id="infinite-while-loops">Infinite While Loops</h4><p>When we write and work with while loops, we can have something called an "infinite loop." If the condition is never <code>False</code>, the loop will never stop without external intervention. </p><p>This usually happens when the variables in the condition are not updated properly during the execution of the loop.</p><p><strong>💡 Tip:</strong> you must make the necessary updates to these variables to make sure that the condition will eventually evaluate to <code>False</code>.</p><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; x = 5
&gt;&gt;&gt; while x &gt; 2:
print(x)
5
5
5
5
5
5
5
5
5
.
.
.
# The output continues indefinitely</code></pre><p>💡 <strong>Tip:</strong> to stop this process, type <code>CTRL + C</code>. You should see a <code>KeyboardInterrupt</code> message.</p><h2 id="-nested-loops-in-python">🔸 Nested Loops in Python</h2><p>We can write for loops within for loops and while loops within while loops. These inner loops are called nested loops. </p><p>💡 <strong>Tip:</strong> the inner loop runs for each iteration of the outer loop.</p><h3 id="nested-for-loops-in-python">Nested For Loops in Python</h3><pre><code class="language-python">&gt;&gt;&gt; for i in range(3):
for j in range(2):
print(i, j)
0 0
0 1
1 0
1 1
2 0
2 1</code></pre><p>If we add print statements, we can see what is happening behind the scenes:</p><pre><code class="language-python">&gt;&gt;&gt; for i in range(3):
print("===&gt; Outer Loop")
print(f"i = {i}")
for j in range(2):
print("Inner Loop")
print(f"j = {j}")
===&gt; Outer Loop
i = 0
Inner Loop
j = 0
Inner Loop
j = 1
===&gt; Outer Loop
i = 1
Inner Loop
j = 0
Inner Loop
j = 1
===&gt; Outer Loop
i = 2
Inner Loop
j = 0
Inner Loop
j = 1</code></pre><p>The inner loop completes two iterations per iteration of the outer loop. The loop variables are updated when a new iteration starts.</p><p>This is another example:</p><pre><code class="language-python">&gt;&gt;&gt; num_rows = 5
&gt;&gt;&gt; for i in range(5):
for num_cols in range(num_rows-i):
print("*", end="")
print()
*****
****
***
**
*</code></pre><h3 id="nested-while-loops-in-python">Nested While Loops in Python</h3><p>Here we have an example of nested while loops. In this case, we have to update the variables that are part of each condition to guarantee that the loops will stop.</p><pre><code class="language-python">&gt;&gt;&gt; i = 5
&gt;&gt;&gt; while i &gt; 0:
j = 0
while j &lt; 2:
print(i, j)
j += 1
i -= 1
5 0
5 1
4 0
4 1
3 0
3 1
2 0
2 1
1 0
1 1</code></pre><p>💡 <strong>Tip:</strong> we can also have for loops within while loops and while loops within for loops.</p><h2 id="-functions-in-python">🔹 Functions in Python</h2><p>In Python, we can define functions to make our code reusable, more readable, and organized. This is the basic syntax of a Python function:</p><pre><code class="language-python">def &lt;function_name&gt;(&lt;param1&gt;, &lt;param2&gt;, ...):
&lt;code&gt;</code></pre><p><strong>💡 Tip:</strong> a function can have zero, one, or multiple parameters.</p><h3 id="function-with-no-parameters-in-python">Function with No Parameters in Python</h3><p>A function with no parameters has an empty pair of parentheses after its name in the function definition. For example:</p><pre><code class="language-python">def print_pattern():
size = 4
for i in range(size):
print("*" * size)</code></pre><p>This is the output when we call the function:</p><pre><code class="language-python">&gt;&gt;&gt; print_pattern()
****
****
****
****</code></pre><p><strong>💡 Tip:</strong> You have to write an empty pair of parentheses after the name of the function to call it.</p><h3 id="function-with-one-parameter-in-python">Function with One Parameter in Python</h3><p>A function with one or more parameters has a list of parameters surrounded by parentheses after its name in the function definition:</p><pre><code class="language-python">def welcome_student(name):
print(f"Hi, {name}! Welcome to class.")</code></pre><p>When we call the function, we just need to pass one value as argument and that value will be replaced where we use the parameter in the function definition:</p><pre><code class="language-python">&gt;&gt;&gt; welcome_student("Nora")
Hi, Nora! Welcome to class.</code></pre><p>Here we have another example – a function that prints a pattern made with asterisks. You have to specify how many rows you want to print:</p><pre><code class="language-python">def print_pattern(num_rows):
for i in range(num_rows):
for num_cols in range(num_rows-i):
print("*", end="")
print()</code></pre><p>You can see the different outputs for different values of <code>num_rows</code>:</p><pre><code>&gt;&gt;&gt; print_pattern(3)
***
**
*
&gt;&gt;&gt; print_pattern(5)
*****
****
***
**
*
&gt;&gt;&gt; print_pattern(8)
********
*******
******
*****
****
***
**
*</code></pre><h3 id="functions-with-two-or-more-parameters-in-python">Functions with Two or More Parameters in Python</h3><p>To define two or more parameters, we just separate them with a comma:</p><pre><code>def print_sum(a, b):
print(a + b)
</code></pre><p>Now when we call the function, we must pass two arguments:</p><pre><code class="language-python">&gt;&gt;&gt; print_sum(4, 5)
9
&gt;&gt;&gt; print_sum(8, 9)
17
&gt;&gt;&gt; print_sum(0, 0)
0
&gt;&gt;&gt; print_sum(3, 5)
8</code></pre><p>We can adapt the function that we just saw with one parameter to work with two parameters and print a pattern with a customized character:</p><pre><code class="language-python">def print_pattern(num_rows, char):
for i in range(num_rows):
for num_cols in range(num_rows-i):
print(char, end="")
print()</code></pre><p>You can see the output with the customized character is that we call the function passing the two arguments:</p><pre><code>&gt;&gt;&gt; print_pattern(5, "A")
AAAAA
AAAA
AAA
AA
A
&gt;&gt;&gt; print_pattern(8, "%")
%%%%%%%%
%%%%%%%
%%%%%%
%%%%%
%%%%
%%%
%%
%
&gt;&gt;&gt; print_pattern(10, "#")
##########
#########
########
#######
######
#####
####
###
##
#</code></pre><h3 id="how-to-return-a-value-in-python">How to Return a Value in Python</h3><p>Awesome. Now you know how to define a function, so let's see how you can work with return statements. </p><p>We will often need to return a value from a function. We can do this with the <code>return</code> statement in Python. We just need to write this in the function definition:</p><pre><code class="language-python">return &lt;value_to_return&gt;</code></pre><p><strong>💡 Tip:</strong> the function stops immediately when <code>return</code> is found and the value is returned. </p><p>Here we have an example:</p><pre><code class="language-python">def get_rectangle_area(length, width):
return length * width</code></pre><p>Now we can call the function and assign the result to a variable because the result is returned by the function:</p><pre><code class="language-python">&gt;&gt;&gt; area = get_rectangle_area(4, 5)
&gt;&gt;&gt; area
20</code></pre><p>We can also use <code>return</code> with a conditional to return a value based on whether a condition is <code>True</code> or <code>False</code>.</p><p>In this example, the function returns the first even element found in the sequence:</p><pre><code class="language-python">def get_first_even(seq):
for elem in seq:
if elem % 2 == 0:
return elem
else:
return None</code></pre><p>If we call the function, we can see the expected results:</p><pre><code class="language-python">&gt;&gt;&gt; value1 = get_first_even([2, 3, 4, 5])
&gt;&gt;&gt; value1
2</code></pre><pre><code class="language-python">&gt;&gt;&gt; value2 = get_first_even([3, 5, 7, 9])
&gt;&gt;&gt; print(value2)
None</code></pre><p>💡 <strong>Tip:</strong> if a function doesn't have a <code>return</code> statement or doesn't find one during its execution, it returns <code>None</code> by default. </p><p>The <a href="https://www.python.org/dev/peps/pep-0008/#programming-recommendations">Style Guide for Python Code</a> recommends using return statements consistently. It mentions that we should:</p><blockquote>Be consistent in return statements. Either all return statements in a function should return an expression, or none of them should. If any return statement returns an expression, any return statements where no value is returned should explicitly state this as return None, and an explicit return statement should be present at the end of the function (if reachable)</blockquote><h3 id="default-arguments-in-python">Default Arguments in Python</h3><p>We can assign default arguments for the parameters of our function. To do this, we just need to write <code>&lt;parameter&gt;=&lt;value&gt;</code> in the list of parameters.</p><p><strong>💡 Tip:</strong> The <a href="https://www.python.org/dev/peps/pep-0008/#other-recommendations">Style Guide for Python Code</a> mentions that we shouldn't "use spaces around the = sign when used to indicate a keyword argument."</p><p>In this example, we assign the default value 5 to the parameter <code>b</code>. If we omit this value when we call the function, the default value will be used.</p><pre><code>def print_product(a, b=5):
print(a * b)</code></pre><p>If we call the function without this argument, you can see the output:</p><pre><code class="language-python">&gt;&gt;&gt; print_product(4)
20</code></pre><p>We confirm that the default argument 5 was used in the operation. </p><p>But we can also assign a custom value for <code>b</code> by passing a second argument:</p><pre><code class="language-python">&gt;&gt;&gt; print_product(3, 4)
12</code></pre><p>💡 <strong>Tip:</strong> parameters with default arguments have to be defined at the end of the list of parameters. Else, you will see this error: <code>SyntaxError: non-default argument follows default argument</code>.</p><p>Here we have another example with the function that we wrote to print a pattern. We assign the default value <code>"*"</code> to the <code>char</code> parameter.</p><pre><code>def print_pattern(num_rows, char="*"):
for i in range(num_rows):
for num_cols in range(num_rows-i):
print(char, end="")
print()</code></pre><p>Now we have the option to use the default value or customize it:</p><pre><code class="language-python">&gt;&gt;&gt; print_pattern(5)
*****
****
***
**
*
&gt;&gt;&gt; print_pattern(6, "&amp;")
&amp;&amp;&amp;&amp;&amp;&amp;
&amp;&amp;&amp;&amp;&amp;
&amp;&amp;&amp;&amp;
&amp;&amp;&amp;
&amp;&amp;
if n == 0 or n == 1:
return 1
else:
if n == 0 or n == 1:
return n
else:
if b == 0:
return 1
else:
return a * find_power(a, b-1)</code></pre><figcaption>Find a Power Recursively</figcaption></figure><h2 id="-exception-handling-in-python">🔹 Exception Handling in Python</h2><p>An error or unexpected event that that occurs while a program is running is called an <strong>exception</strong>. Thanks to the elements that we will see in just a moment, we can avoid terminating the program abruptly when this occurs.</p><p>Let's see the types of exceptions in Python and how we can handle them.</p><h3 id="common-exceptions-in-python">Common Exceptions in Python</h3><p>This is a list of common exceptions in Python and why they occur:</p><ul><li><strong>ZeroDivisionError: </strong>raised when the second argument of a division or modulo operation is zero.</li></ul><pre><code class="language-python">&gt;&gt;&gt; 5 / 0
Traceback (most recent call last):
File "&lt;pyshell#0&gt;", line 1, in &lt;module&gt;
5 / 0
ZeroDivisionError: division by zero
&gt;&gt;&gt; 7 // 0
Traceback (most recent call last):
File "&lt;pyshell#1&gt;", line 1, in &lt;module&gt;
7 // 0
ZeroDivisionError: integer division or modulo by zero
&gt;&gt;&gt; 8 % 0
Traceback (most recent call last):
File "&lt;pyshell#2&gt;", line 1, in &lt;module&gt;
8 % 0
ZeroDivisionError: integer division or modulo by zero</code></pre><ul><li><strong>IndexError:</strong> raised when we try to use an invalid index to access an element of a sequence.</li></ul><pre><code class="language-python">&gt;&gt;&gt; my_list = [3, 4, 5, 6]
&gt;&gt;&gt; my_list[15]
Traceback (most recent call last):
File "&lt;pyshell#4&gt;", line 1, in &lt;module&gt;
my_list[15]
IndexError: list index out of range</code></pre><ul><li><strong>KeyError: </strong>raised when we try to access a key-value pair that doesn't exist because the key is not in the dictionary.</li></ul><pre><code class="language-python">&gt;&gt;&gt; my_dict = {"a": 1, "b": 2, "c": 3}
&gt;&gt;&gt; my_dict["d"]
Traceback (most recent call last):
File "&lt;pyshell#6&gt;", line 1, in &lt;module&gt;
my_dict["d"]
KeyError: 'd'</code></pre><ul><li><strong>NameError:</strong> raised when we use a variable that has not been defined previously.</li></ul><pre><code class="language-python">&gt;&gt;&gt; b
Traceback (most recent call last):
File "&lt;pyshell#8&gt;", line 1, in &lt;module&gt;
b
NameError: name 'b' is not defined
</code></pre><ul><li><strong>RecursionError:</strong> raised when the interpreter detects that the maximum recursion depth is exceeded. This usually occurs when the process never reaches the base case. </li></ul><p>In the example below, we will get a <code>RecursionError</code>. The <code>factorial</code> function is implemented recursively but the argument passed to the recursive call is <code>n</code> instead of <code>n-1</code>. Unless the value is already <code>0</code> or <code>1</code>, the base case will not be reached because the argument is not being decremented, so the process will continue and we will get this error.</p><pre><code class="language-python">&gt;&gt;&gt; def factorial(n):
if n == 0 or n == 1:
return 1
else:
return n * factorial(n)
&gt;&gt;&gt; factorial(5)
Traceback (most recent call last):
File "&lt;pyshell#6&gt;", line 1, in &lt;module&gt;
factorial(5)
File "&lt;pyshell#5&gt;", line 5, in factorial
return n * factorial(n)
File "&lt;pyshell#5&gt;", line 5, in factorial
return n * factorial(n)
File "&lt;pyshell#5&gt;", line 5, in factorial
return n * factorial(n)
[Previous line repeated 1021 more times]
File "&lt;pyshell#5&gt;", line 2, in factorial
if n == 0 or n == 1:
RecursionError: maximum recursion depth exceeded in comparison</code></pre><p>💡 <strong>Tip:</strong> to learn more about these exceptions, I recommend reading <a href="https://docs.python.org/3/library/exceptions.html">this article</a> from the documentation.</p><h3 id="try-except-in-python"><code>try</code> / <code>except</code> in Python</h3><p>We can use try/except in Python to catch the exceptions when they occur and handle them appropriately. This way, the problem can terminate appropriately or even recover from the exception. </p><p>This is the basic syntax:</p><pre><code class="language-python">try:
&lt;code_that_may_raise_an_exception&gt;
except:
&lt;code_to_handle_the_exception_if_it_occurs&gt;
</code></pre><p>For example, if we take user input to access an element in a list, the input might not be a valid index, so an exception could be raised:</p><pre><code class="language-python">index = int(input("Enter the index: "))
try:
my_list = [1, 2, 3, 4]
print(my_list[index])
except:
print("Please enter a valid index.")</code></pre><p>If we enter an invalid value like 15, the output will be:</p><pre><code class="language-python">Please enter a valid index.</code></pre><p>Because the <code>except</code> clause runs. However, if the value is valid, the code in <code>try</code> will run as expected. </p><p>Here we have another example:</p><pre><code>a = int(input("Enter a: "))
b = int(input("Enter b: "))
try:
division = a / b
print(division)
except:
print("Please enter valid values.")</code></pre><p>The output is:</p><pre><code>Enter a: 5
Enter b: 0
Please enter valid values.</code></pre><h3 id="how-to-catch-a-specific-type-of-exception-in-python">How to Catch a Specific Type of Exception in Python</h3><p>Instead of catching and handling all possible exceptions that could occur in the <code>try</code> clause, we could catch and handle a specific type of exception. We just need to specify the type of the exception after the <code>except</code> keyword:</p><pre><code class="language-python">try:
&lt;code_that_may_raise_an_exception&gt;
except &lt;exception_type&gt;:
&lt;code_to_handle_an_exception_if_it_occurs&gt;
</code></pre><p>For example:</p><pre><code class="language-python">index = int(input("Enter the index: "))
try:
my_list = [1, 2, 3, 4]
print(my_list[index])
except IndexError: # specify the type
print("Please enter a valid index.")</code></pre><pre><code class="language-python">a = int(input("Enter a: "))
b = int(input("Enter b: "))
try:
division = a / b
print(division)
except ZeroDivisionError: # specify the type
print("Please enter valid values.")</code></pre><h3 id="how-to-assign-a-name-to-the-exception-object-in-python">How to Assign a Name to the Exception Object in Python</h3><p>We can specify a name for the exception object by assigning it to a variable that we can use in the <code>except</code> clause. This will let us access its description and attributes. </p><p>We only need to add <code>as &lt;name&gt;</code>, like this:</p><pre><code class="language-python">try:
&lt;code_that_may_raise_an_exception&gt;
except &lt;exception_type&gt; as &lt;name&gt;:
&lt;code_to_handle_an_exception_if_it_occurs&gt;
</code></pre><p>For example:</p><pre><code class="language-python">index = int(input("Enter the index: "))
try:
my_list = [1, 2, 3, 4]
print(my_list[index])
except IndexError as e:
print("Exception raised:", e)</code></pre><p>This is the output if we enter <code>15</code> as the index:</p><pre><code>Enter the index: 15
Exception raised: list index out of range</code></pre><p>This is another example:</p><pre><code class="language-python">a = int(input("Enter a: "))
b = int(input("Enter b: "))
try:
division = a / b
print(division)
except ZeroDivisionError as err:
print("Please enter valid values.", err)
</code></pre><p>This is the output if we enter the value <code>0</code> for <code>b</code>:</p><pre><code class="language-python">Please enter valid values. division by zero</code></pre><h3 id="try-except-else-in-python"><code>try</code> / <code>except</code> / <code>else</code> in Python</h3><p>We can add an <code>else</code> clause to this structure after <code>except</code> if we want to choose what happens when no exceptions occur during the execution of the <code>try</code> clause:</p><pre><code class="language-python">try:
&lt;code_that_may_raise_an_exception&gt;
except:
&lt;code_to_handle_an_exception_if_it_occurs&gt;
else:
&lt;code_that_only_runs_if_no_exception_in_try&gt;
</code></pre><p>For example:</p><pre><code class="language-python">a = int(input("Enter a: "))
b = int(input("Enter b: "))
try:
division = a / b
print(division)
except ZeroDivisionError as err:
print("Please enter valid values.", err)
else:
print("Both values were valid.")</code></pre><p>If we enter the values <code>5</code> and <code>0</code> for <code>a</code> and <code>b</code> respectively, the output is:</p><pre><code>Please enter valid values. division by zero</code></pre><p>But if both values are valid, for example <code>5</code> and <code>4</code> for <code>a</code> and <code>b</code> respectively, the <code>else</code> clause runs after <code>try</code> is completed and we see:</p><pre><code class="language-python">1.25
Both values were valid.</code></pre><h3 id="try-except-else-finally-in-python"><code>try</code> / <code>except</code> / <code>else</code> / <code>finally</code> in Python</h3><p>We can also add a <code>finally</code> clause if we need to run code that should always run, even if an exception is raised in <code>try</code>.</p><p>For example:</p><pre><code class="language-python">a = int(input("Enter a: "))
b = int(input("Enter b: "))
try:
division = a / b
print(division)
except ZeroDivisionError as err:
print("Please enter valid values.", err)
else:
print("Both values were valid.")
finally:
print("Finally!")</code></pre><p>If both values are valid, the output is the result of the division and:</p><pre><code>Both values were valid.
Finally!</code></pre><p>And if an exception is raised because <code>b</code> is <code>0</code>, we see:</p><pre><code class="language-python">Please enter valid values. division by zero
Finally!</code></pre><p>The <code>finally</code> clause always runs.</p><p><strong>💡 Tip:</strong> this clause can be used, for example, to close files even if the code throws an exception.</p><h2 id="-object-oriented-programming-in-python">🔸 Object-Oriented Programming in Python</h2><p>In Object-Oriented Programming (OOP), we define classes that act as blueprints to create objects in Python with attributes and methods (functionality associated with the objects).</p><p>This is a general syntax to define a class:</p><pre><code>class &lt;className&gt;:
&lt;class_attribute_name&gt; = &lt;value&gt;
def __init__(self,&lt;param1&gt;, &lt;param2&gt;, ...):
self.&lt;attr1&gt; = &lt;param1&gt;
self.&lt;attr2&gt; = &lt;param2&gt;
.
.
.
# As many attributes as needed
def &lt;method_name&gt;(self, &lt;param1&gt;, ...):
&lt;code&gt;
# As many methods as needed</code></pre><p><strong>💡 Tip:</strong> <code>self</code> refers to an instance of the class (an object created with the class blueprint).</p><p>As you can see, a class can have many different elements so let's analyze them in detail:</p><h3 id="class-header">Class Header</h3><p>The first line of the class definition has the <code>class</code> keyword and the name of the class:</p><pre><code>class Dog:</code></pre><pre><code>class House:
</code></pre><pre><code>class Ball:</code></pre><p><strong>💡 Tip:</strong> If the class inherits attributes and methods from another class, we will see the name of the class within parentheses:</p><pre><code>class Poodle(Dog):</code></pre><pre><code>class Truck(Vehicle):</code></pre><pre><code>class Mom(FamilyMember):</code></pre><p>In Python, we write class name in Upper Camel Case (also known as Pascal Case), in which each word starts with an uppercase letter. For example: <code>FamilyMember</code></p><h3 id="__init__-and-instance-attributes"><code>__init__</code> and instance attributes</h3><p>We are going to use the class to create object in Python, just like we build real houses from blueprints. </p><p>The objects will have attributes that we define in the class. Usually, we initialize these attributes in <code>__init__</code>. This is a method that runs when we create an instance of the class. </p><p>This is the general syntax:</p><pre><code class="language-python">def __init__(self, &lt;parameter1&gt;, &lt;parameter2&gt;, ...):
self.&lt;attribute1&gt; = &lt;parameter1&gt;  # Instance attribute
self.&lt;attribute2&gt; = &lt;parameter2&gt;  # Instance attribute
.
.
.
# As many instance attributes as needed</code></pre><p>We specify as many parameters as needed to customize the values of the attributes of the object that will be created.</p><p>Here is an example of a <code>Dog</code> class with this method:</p><pre><code class="language-python">class Dog:
def __init__(self, name, age):
self.name = name
self.age = age</code></pre><p>💡 <strong>Tip:</strong> notice the double leading and trailing underscore in the name <code>__init__</code>.</p><h3 id="how-to-create-an-instance">How to Create an Instance</h3><p>To create an instance of <code>Dog</code>, we need to specify the name and age of the dog instance to assign these values to the attributes:</p><pre><code class="language-python">my_dog = Dog("Nora", 10)</code></pre><p>Great. Now we have our instance ready to be used in the program.</p><p>Some classes will not require any arguments to create an instance. In that case, we just write empty parentheses. For example:</p><pre><code>class Circle:
def __init__(self):
self.radius = 1</code></pre><p>To create an instance:</p><pre><code class="language-python">&gt;&gt;&gt; my_circle = Circle()</code></pre><p>💡<strong> Tip:</strong> <code>self</code> is like a parameter that acts "behind the scenes", so even if you see it in the method definition, you shouldn't consider it when you pass the arguments. </p><h3 id="default-arguments">Default Arguments</h3><p>We can also assign default values for the attributes and give the option to the user if they would like to customize the value.</p><p>In this case, we would write <code>&lt;attribute&gt;=&lt;value&gt;</code> in the list of parameters. </p><p>This is an example:</p><pre><code>class Circle:
def __init__(self, radius=1):
self.radius = radius</code></pre><p>Now we can create a <code>Circle</code> instance with the default value for the radius by omitting the value or customize it by passing a value:</p><pre><code class="language-python"># Default value
&gt;&gt;&gt; my_circle1 = Circle()
# Customized value
&gt;&gt;&gt; my_circle2 = Circle(5)</code></pre><h3 id="how-to-get-an-instance-attribute">How to Get an Instance Attribute</h3><p>To access an instance attribute, we use this syntax:</p><pre><code class="language-python">&lt;object_variable&gt;.&lt;attribute&gt;</code></pre><p>For example:</p><pre><code class="language-python"># Class definition
&gt;&gt;&gt; class Dog:
def __init__(self, name, age):
self.name = name
self.age = age
# Create instance
&gt;&gt;&gt; my_dog = Dog("Nora", 10)
# Get attributes
&gt;&gt;&gt; my_dog.name
'Nora'
&gt;&gt;&gt; my_dog.age
10</code></pre><h3 id="how-to-update-an-instance-attribute">How to Update an Instance Attribute</h3><p>To update an instance attribute, we use this syntax:</p><pre><code>&lt;object_variable&gt;.&lt;attribute&gt; = &lt;new_value&gt;</code></pre><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; class Dog:
def __init__(self, name, age):
self.name = name
self.age = age
&gt;&gt;&gt; my_dog = Dog("Nora", 10)
&gt;&gt;&gt; my_dog.name
'Nora'
# Update the attribute
&gt;&gt;&gt; my_dog.name = "Norita"
&gt;&gt;&gt; my_dog.name
'Norita'</code></pre><h3 id="how-to-remove-an-instance-attribute">How to Remove an Instance Attribute</h3><p>To remove an instance attribute, we use this syntax:</p><pre><code>del &lt;object_variable&gt;.&lt;attribute&gt;</code></pre><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; class Dog:
def __init__(self, name, age):
self.name = name
self.age = age
&gt;&gt;&gt; my_dog = Dog("Nora", 10)
&gt;&gt;&gt; my_dog.name
'Nora'
# Delete this attribute
&gt;&gt;&gt; del my_dog.name
&gt;&gt;&gt; my_dog.name
Traceback (most recent call last):
File "&lt;pyshell#77&gt;", line 1, in &lt;module&gt;
my_dog.name
AttributeError: 'Dog' object has no attribute 'name'</code></pre><h3 id="how-to-delete-an-instance">How to Delete an Instance</h3><p>Similarly, we can delete an instance using <code>del</code>:</p><pre><code>&gt;&gt;&gt; class Dog:
def __init__(self, name, age):
self.name = name
self.age = age
&gt;&gt;&gt; my_dog = Dog("Nora", 10)
&gt;&gt;&gt; my_dog.name
'Nora'
# Delete the instance
&gt;&gt;&gt; del my_dog
&gt;&gt;&gt; my_dog
Traceback (most recent call last):
File "&lt;pyshell#79&gt;", line 1, in &lt;module&gt;
my_dog
NameError: name 'my_dog' is not defined</code></pre><h3 id="public-vs-non-public-attributes-in-python">Public vs. Non-Public Attributes in Python</h3><p>In Python, we don't have access modifiers to functionally restrict access to the instance attributes, so we rely on naming conventions to specify this.</p><p>For example, by adding a leading underscore, we can signal to other developers that an attribute is meant to be non-public. </p><p>For example:</p><pre><code class="language-python">class Dog:
def __init__(self, name, age):
self.name = name  # Public attribute
self._age = age   # Non-Public attribute</code></pre><p>The Python documentation mentions:</p><blockquote>Use one leading underscore only for non-public methods and instance variables. <br><br>Always decide whether a class's methods and instance variables (collectively: "attributes") should be public or non-public. If in doubt, choose non-public; it's easier to make it public later than to make a public attribute non-public.<br><br>Non-public attributes are those that are not intended to be used by third parties; you make no guarantees that non-public attributes won't change or even be removed. - <a href="https://www.python.org/dev/peps/pep-0008/#designing-for-inheritance">source</a></blockquote><p>However, as the documentation also mentions:</p><blockquote>We don't use the term "private" here, since no attribute is really private in Python (without a generally unnecessary amount of work). - <a href="https://www.python.org/dev/peps/pep-0008/#designing-for-inheritance">source</a></blockquote><p><strong>💡 Tip:</strong> technically, we can still access and modify the attribute if we add the leading underscore to its name, but we shouldn't. </p><h3 id="class-attributes-in-python">Class Attributes in Python</h3><p>Class attributes are shared by all instances of the class. They all have access to this attribute and they will also be affected by any changes made to these attributes.</p><pre><code class="language-python">class Dog:
# Class attributes
kingdom = "Animalia"
species = "Canis lupus"
def __init__(self, name, age):
self.name = name
self.age = age</code></pre><p><strong>💡 Tip:</strong> usually, they are written before the <code>__init__</code> method.</p><h3 id="how-to-get-a-class-attribute">How to Get a Class Attribute</h3><p>To get the value of a class attribute, we use this syntax:</p><pre><code>&lt;class_name&gt;.&lt;attribute&gt;</code></pre><p>For example:</p><pre><code>&gt;&gt;&gt; class Dog:
kingdom = "Animalia"
def __init__(self, name, age):
self.name = name
self.age = age
&gt;&gt;&gt; Dog.kingdom
'Animalia'</code></pre><p><strong>💡 Tip:</strong> You can use this syntax within the class as well.</p><h3 id="how-to-update-a-class-attribute">How to Update a Class Attribute</h3><p>To update a class attribute, we use this syntax:</p><pre><code>&lt;class_name&gt;.&lt;attribute&gt; = &lt;value&gt;</code></pre><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; class Dog:
kingdom = "Animalia"
def __init__(self, name, age):
self.name = name
self.age = age
&gt;&gt;&gt; Dog.kingdom
'Animalia'
&gt;&gt;&gt; Dog.kingdom = "New Kingdom"
&gt;&gt;&gt; Dog.kingdom
'New Kingdom'</code></pre><h3 id="how-to-delete-a-class-attribute">How to Delete a Class Attribute</h3><p>We use <code>del</code> to delete a class attribute. For example:</p><pre><code class="language-python">&gt;&gt;&gt; class Dog:
kingdom = "Animalia"
def __init__(self, name, age):
self.name = name
self.age = age
&gt;&gt;&gt; Dog.kingdom
'Animalia'
# Delete class attribute
&gt;&gt;&gt; del Dog.kingdom
&gt;&gt;&gt; Dog.kingdom
Traceback (most recent call last):
File "&lt;pyshell#88&gt;", line 1, in &lt;module&gt;
Dog.kingdom
AttributeError: type object 'Dog' has no attribute 'kingdom'</code></pre><h3 id="how-to-define-methods">How to Define Methods</h3><p>Methods represent the functionality of the instances of the class.</p><p><strong>💡 Tip:</strong> Instance methods can work with the attributes of the instance that is calling the method if we write <code>self.&lt;attribute&gt;</code> in the method definition. </p><p>This is the basic syntax of a method in a class. They are usually located below <code>__init__</code>: </p><pre><code class="language-python">class &lt;ClassName&gt;:
# Class attributes
# __init__
def &lt;method_name&gt;(self, &lt;param1&gt;, ...):
&lt;code&gt;</code></pre><p>They may have zero, one, or more parameters if needed (just like functions!) but instance methods must always have <code>self</code> as the first parameter.</p><p>For example, here is a <code>bark</code> method with no parameters (in addition to <code>self</code>):</p><pre><code class="language-python">class Dog:
def __init__(self, name, age):
self.name = name
self.age = age
def bark(self):
print(f"woof-woof. I'm {self.name}")</code></pre><p>To call this method, we use this syntax:</p><pre><code>&lt;object_variable&gt;.&lt;method&gt;(&lt;arguments&gt;)</code></pre><p>For example:</p><pre><code class="language-python"># Create the instance
&gt;&gt;&gt; my_dog = Dog("Nora", 10)
# Call the method
&gt;&gt;&gt; my_dog.bark()
woof-woof. I'm Nora</code></pre><p>Here we have a <code>Player</code> class with an <code>increment_speed</code> method with one parameter:</p><pre><code class="language-python">class Player:
def __init__(self, name):
self.name = name
self.speed = 50
def increment_speed(self, value):
self.speed += value</code></pre><p>To call the method:</p><pre><code># Create instance
&gt;&gt;&gt; my_player = Player("Nora")
# Check initial speed to see the change
&gt;&gt;&gt; my_player.speed
50
# Increment the speed
&gt;&gt;&gt; my_player.increment_speed(5)
# Confirm the change
&gt;&gt;&gt; my_player.speed
55</code></pre><p>💡 <strong>Tip:</strong> to add more parameters, just separate them with a comma. It is recommended to add a space after the comma.</p><h3 id="properties-getters-and-setters-in-python">Properties, Getters and Setters in Python</h3><p>Getters and setters are methods that we can define to get and set the value of an instance attribute, respectively. They work as intermediaries to "protect" the attributes from direct changes. </p><p>In Python, we typically use properties instead of getters and setters. Let's see how we can use them.</p><p>To define a property, we write a method with this syntax:</p><pre><code>@property
def &lt;property_name&gt;(self):
return self.&lt;attribute&gt;</code></pre><p>This method will act as a getter, so it will be called when we try to access the value of the attribute.</p><p>Now, we may also want to define a setter:</p><pre><code>@&lt;property_name&gt;.setter
def &lt;property_name&gt;(self, &lt;param&gt;):
self.&lt;attribute&gt; = &lt;param&gt;</code></pre><p>And a deleter to delete the attribute:</p><pre><code>@&lt;property_name&gt;.deleter
def &lt;property_name&gt;(self):
del self.&lt;attribute&gt;</code></pre><p><strong>💡 Tip:</strong> you can write any code that you need in these methods to get, set, and delete an attribute. It is recommended to keep them as simple as possible.</p><p>This is an example:</p><pre><code class="language-python">class Dog:
def __init__(self, name):
self._name = name
@property
def name(self):
return self._name
@name.setter
def name(self, new_name):
self._name = new_name
@name.deleter
def name(self):
del self._name</code></pre><p>If we add descriptive print statements, we can see that they are called when we perform their operation:</p><pre><code class="language-python">&gt;&gt;&gt; class Dog:
def __init__(self, name):
self._name = name
@property
def name(self):
print("Calling getter")
return self._name
@name.setter
def name(self, new_name):
print("Calling setter")
self._name = new_name
@name.deleter
def name(self):
print("Calling deleter")
del self._name
&gt;&gt;&gt; my_dog = Dog("Nora")
&gt;&gt;&gt; my_dog.name
Calling getter
'Nora'
&gt;&gt;&gt; my_dog.name = "Norita"
Calling setter
&gt;&gt;&gt; my_dog.name
Calling getter
'Norita'
&gt;&gt;&gt; del my_dog.name
Calling deleter</code></pre><h2 id="-how-to-work-with-files-in-python">🔹 How to Work with Files in Python</h2><p>Working with files is very important to create powerful programs. Let's see how you can do this in Python.</p><h3 id="how-to-read-files-in-python">How to Read Files in Python</h3><p>In Python, it's recommended to use a <code>with</code> statement to work with files because it opens them only while we need them and it closes them automatically when the process is completed.</p><p>To read a file, we use this syntax:</p><pre><code class="language-python">with open("&lt;file_path&gt;") as &lt;file_var&gt;:
&lt;code&gt;</code></pre><p>We can also specify that we want to open the file in read mode with an <code>"r"</code>:</p><pre><code class="language-python">with open("&lt;file_path&gt;", "r") as &lt;file_var&gt;:
&lt;code&gt;</code></pre><p>But this is already the default mode to open a file, so we can omit it like in the first example.</p><p>This is an example:</p><pre><code class="language-python">with open("famous_quotes.txt") as file:
for line in file:
print(line)</code></pre><p>or...</p><pre><code class="language-python">with open("famous_quotes.txt", "r") as file:
for line in file:
print(line)</code></pre><p><strong>💡 Tip:</strong> that's right! We can iterate over the lines of the file using a for loop. The file path can be relative to the Python script that we are running or it can be an absolute path.</p><h3 id="how-to-write-to-a-file-in-python">How to Write to a File in Python</h3><p>There are two ways to write to a file. You can either replace the entire content of the file before adding the new content, or append to the existing content.</p><pre><code class="language-python">with open("&lt;file_path&gt;", "w") as &lt;file_var&gt;:
&lt;code&gt;</code></pre><p>To replace the content completely, we use the <code>"w"</code> mode, so we pass this string as the second argument to <code>open()</code>. We call the <code>.write()</code> method on the file object passing the content that we want to write as argument.</p><p>For example:</p><pre><code class="language-python">words = ["Amazing", "Green", "Python", "Code"]
with open("famous_quotes.txt", "w") as file:
for word in words:
file.write(word + "\n")</code></pre><p>When you run the program, a new file will be created if it doesn't exist already in the path that we specified.</p><p>This will be the content of the file:</p><pre><code class="language-python">Amazing
Green
Python
Code</code></pre><h3 id="how-to-append-to-a-file-in-python">How to Append to a File in Python</h3><p>However, if you want to append the content, then you need to use the <code>"a"</code> mode:</p><pre><code>with open("&lt;file_path&gt;", "a") as &lt;file_var&gt;:
&lt;code&gt;
</code></pre><p>For example:</p><pre><code class="language-python">words = ["Amazing", "Green", "Python", "Code"]
with open("famous_quotes.txt", "a") as file:
for word in words:
file.write(word + "\n")</code></pre><p>This small change will keep the existing content of the file and it will add the new content to the end.</p><p>If we run the program again, these strings will be added to the end of the file:</p><pre><code class="language-python">Amazing
Green
Python
Code
Amazing
Green
Python
Code
</code></pre><h3 id="how-to-delete-a-file-in-python">How to Delete a File in Python</h3><p>To delete a file with our script, we can use the <code>os</code> module. It is recommended to check with a conditional if the file exists before calling the <code>remove()</code> function from this module:</p><pre><code class="language-import">import os
if os.path.exists("&lt;file_path&gt;"):
os.remove("&lt;file_path&gt;")
else:
&lt;code&gt;</code></pre><p>For example:</p><pre><code class="language-python">import os
if os.path.exists("famous_quotes.txt"):
os.remove("famous_quotes.txt")
else:
print("This file doesn't exist")</code></pre><p>You might have noticed the first line that says <code>import os</code>. This is an import statement. Let's see why they are helpful and how you can work with them.</p><h2 id="-import-statements-in-python">🔸 Import Statements in Python</h2><p>Organizing your code into multiple files as your program grows in size and complexity is good practice. But we need to find a way to combine these files to make the program work correctly, and that is exactly what import statements do.</p><p>By writing an import statement, we can import a module (a file that contains Python definitions and statements) into another file.</p><p>These are various alternatives for import statements:</p><h3 id="first-alternative-">First Alternative:</h3><pre><code>import &lt;module_name&gt;</code></pre><p>For example:</p><pre><code>import math</code></pre><p>💡 <strong>Tip: </strong><code>math</code> is a built-in Python module.</p><p>If we use this import statement, we will need to add the name of the module before the name of the function or element that we are referring to in our code: </p><pre><code class="language-python">&gt;&gt;&gt; import math
&gt;&gt;&gt; math.sqrt(25)
5.0</code></pre><p>We explicitly mention in our code the module that the element belongs to.</p><h3 id="second-alternative-">Second Alternative:</h3><pre><code>import &lt;module&gt; as &lt;new_name&gt;</code></pre><p>For example:</p><pre><code>import math as m</code></pre><p>In our code, we can use the new name that we assigned instead of the original name of the module:</p><pre><code class="language-python">&gt;&gt;&gt; import math as m
&gt;&gt;&gt; m.sqrt(25)
5.0</code></pre><h3 id="third-alternative-">Third Alternative:</h3><pre><code>from &lt;module_name&gt; import &lt;element&gt;</code></pre><p>For example:</p><pre><code>from math import sqrt</code></pre><p>With this import statement, we can call the function directly without specifiying the name of the module:</p><pre><code>&gt;&gt;&gt; from math import sqrt
&gt;&gt;&gt; sqrt(25)
5.0</code></pre><h3 id="fourth-alternative-">Fourth Alternative:</h3><pre><code>from &lt;module_name&gt; import &lt;element&gt; as &lt;new_name&gt;</code></pre><p>For example:</p><pre><code class="language-python">from math import sqrt as square_root</code></pre><p>With this import statement, we can assign a new name to the element imported from the module:</p><pre><code class="language-python">&gt;&gt;&gt; from math import sqrt as square_root
&gt;&gt;&gt; square_root(25)
5.0</code></pre><h3 id="fifth-alternative-">Fifth Alternative:</h3><pre><code>from &lt;module_name&gt; import *</code></pre><p>This statement imports all the elements of the module and you can refer to them directly by their name without specifying the name of the module. </p><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; from math import *
&gt;&gt;&gt; sqrt(25)
5.0
&gt;&gt;&gt; factorial(5)
120
&gt;&gt;&gt; floor(4.6)
4
&gt;&gt;&gt; gcd(5, 8)
[4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
&gt;&gt;&gt; [chr(i) for i in range(67, 80)]
['C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O']
&gt;&gt;&gt; [i**3 for i in range(2, 5)]
[8, 27, 64]
&gt;&gt;&gt; [i + j for i in range(5, 8) for j in range(3, 6)]
[8, 9, 10, 9, 10, 11, 10, 11, 12]
&gt;&gt;&gt; [k for k in range(3, 35) if k % 2 == 0]
[4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34]
&gt;&gt;&gt; [i * j for i in range(2, 6) for j in range(3, 7) if i % j == 0]
[9, 16, 25]</code></pre><h3 id="list-comprehensions-vs-generator-expressions-in-python">List Comprehensions vs. Generator Expressions in Python</h3><p>List comprehensions are defined with square brackets <code>[]</code>. This is different from generator expressions, which are defined with parentheses <code>()</code>. They look similar but they are quite different. Let's see why.</p><ul><li><strong>List comprehensions</strong> generate the entire sequence at once and store it in memory.</li><li><strong>Generator expressions</strong> yield the elements one at a time when they are requested.</li></ul><p>We can check this with the <code>sys</code> module. In the example below, you can see that their size in memory is very different:</p><pre><code>&gt;&gt;&gt; import sys
&gt;&gt;&gt; sys.getsizeof([i for i in range(500)])
2132
&gt;&gt;&gt; sys.getsizeof((i for i in range(500)))
56</code></pre><p>We can use generator expressions to iterate in a for loop and get the elements one at a time. But if we need to store the elements in a list, then we should use list comprehension. </p><h3 id="dictionary-comprehension-in-python">Dictionary Comprehension in Python</h3><p>Now let's dive into dictionary comprehension. The basic syntax that we need to use to define a dictionary comprehension is:</p><pre><code>{&lt;key_value&gt;: &lt;value&gt; for &lt;var&gt; in &lt;sequence&gt;}</code></pre><pre><code class="language-python">{&lt;key_value&gt;: &lt;value&gt; for &lt;var&gt; in &lt;sequence&gt; if &lt;condition&gt;}</code></pre><p>Here we have some examples of dictionary comprehension:</p><pre><code>&gt;&gt;&gt; {num: num**3 for num in range(3, 15)}
{3: 27, 4: 64, 5: 125, 6: 216, 7: 343, 8: 512, 9: 729, 10: 1000, 11: 1331, 12: 1728, 13: 2197, 14: 2744}
&gt;&gt;&gt; {x: x + y for x in range(4, 8) for y in range(3, 7)}
{4: 10, 5: 11, 6: 12, 7: 13}</code></pre><p>This is an example with a conditional where we take an existing dictionary and create a new dictionary with only the students who earned a passing grade greater than or equal to 60:</p><pre><code>&gt;&gt;&gt; grades = {"Nora": 78, "Gino": 100, "Talina": 56, "Elizabeth": 45, "Lulu": 67}
&gt;&gt;&gt; approved_students = {student: grade for (student, grade) in grades.items() if grade &gt;= 60}
&gt;&gt;&gt; approved_students
{'Nora': 78, 'Gino': 100, 'Lulu': 67}</code></pre><p><strong><strong>I </strong>really <strong>hope you liked this article and found it helpful. </strong></strong>Now you know how to write and work with the most important elements of Python.</p><p>⭐ <a href="https://www.youtube.com/channel/UCng0h8WiHLmT57JJ8At4LfQ">Subscribe to my YouTube channel</a> and follow me on <a href="https://twitter.com/EstefaniaCassN">Twitter</a><strong><strong> </strong></strong>to find more coding tutorials and tips. Check out my online course <a href="https://www.udemy.com/course/python-exercises-for-beginners-solve-coding-challenges/?referralCode=804D1EFAF779D07914D2">Python Exercises for Beginners: Solve 100+ Coding Challenges</a></p>
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
