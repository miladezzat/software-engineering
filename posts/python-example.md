---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9e5a740569d1a4ca3ca7.jpg"
tags: [Python]
description: "Python is a general purpose programming language which is dyn"
author: "Milad E. Fahmy"
title: "Python Examples – Data Structures, Algorithms, Syntax Example Code"
created: "2021-08-16T15:38:08+02:00"
modified: "2021-08-16T15:38:08+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">Python Examples – Data Structures, Algorithms, Syntax Example Code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e5a740569d1a4ca3ca7.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e5a740569d1a4ca3ca7.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e5a740569d1a4ca3ca7.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e5a740569d1a4ca3ca7.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e5a740569d1a4ca3ca7.jpg" alt="Python Examples – Data Structures, Algorithms, Syntax Example Code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
3.14
&gt;&gt;&gt; 314\.    # Trailing zero(s) not required.
314.0
&gt;&gt;&gt; .314    # Leading zero(s) not required.
0.314
&gt;&gt;&gt; 3e0
3.0
&gt;&gt;&gt; 3E0     # 'e' or 'E' can be used.
3.0
&gt;&gt;&gt; 3e1     # Positive value after e moves the decimal to the right.
30.0
&gt;&gt;&gt; 3e-1    # Negative value after e moves the decimal to the left.
0.3
&gt;&gt;&gt; 3.14e+2 # '+' not required but can be used for exponent part.
314.0</code></pre><p>Numeric literals do not contain a sign, however creating negative float objects is possible by prefixing with a unary <code>-</code> (minus) operator with no space before the literal:</p><pre><code>&gt;&gt;&gt; -3.141592653589793
-3.141592653589793
&gt;&gt;&gt; type(-3.141592653589793)
&lt;class 'float'&gt;</code></pre><p>Likewise, positive float objects can be prefixed with a unary <code>+</code> (plus) operator with no space before the literal. Usually <code>+</code> is omitted:</p><pre><code class="language-text">&gt;&gt;&gt; +3.141592653589793
3.141592653589793</code></pre><p>Note that leading and trailing zero(s) are valid for floating point literals.</p><p>Likewise, positive float objects can be prefixed with a unary <code>+</code> (plus) operator with no space before the literal. Usually <code>+</code> is omitted:</p><pre><code class="language-text">&gt;&gt;&gt; +3.141592653589793
3.141592653589793</code></pre><p>Note that leading and trailing zero(s) are valid for floating point literals.</p><pre><code class="language-text">&gt;&gt;&gt; 0.0
0.0
&gt;&gt;&gt; 00.00
0.0
&gt;&gt;&gt; 00100.00100
100.001
&gt;&gt;&gt; 001e0010# Same as 1e10
10000000000.0</code></pre><p>The <a href="https://docs.python.org/3/library/functions.html#float" rel="nofollow"><code>float</code> constructor</a> is another way to create <code>float</code> objects.</p><p>Creating <code>float</code> objects with floating point literals is preferred when possible:</p><pre><code>&gt;&gt;&gt; a = 3.14   # Prefer floating point literal when possible.
&gt;&gt;&gt; type(a)
&lt;class 'float'&gt;
&gt;&gt;&gt; b = int(3.14)    # Works but unnecessary.
&gt;&gt;&gt; type(b)
&lt;class 'float'&gt;</code></pre><p>However, the float constructor allows for creating float objects from other number types:</p><pre><code>&gt;&gt;&gt; a = 4
&gt;&gt;&gt; type(a)
&lt;class 'int'&gt;
&gt;&gt;&gt; print(a)
4
&gt;&gt;&gt; b = float(4)
&gt;&gt;&gt; type(b)
&lt;class 'float'&gt;
&gt;&gt;&gt; print(b)
4.0
&gt;&gt;&gt; float(400000000000000000000000000000000)
4e+32
&gt;&gt;&gt; float(.00000000000000000000000000000004)
4e-32
&gt;&gt;&gt; float(True)
1.0
&gt;&gt;&gt; float(False)
0.0</code></pre><p>The <code>float</code> constructor will also make <code>float</code> objects from strings that represent number literals:</p><pre><code>&gt;&gt;&gt; float('1')
1.0
&gt;&gt;&gt; float('.1')
0.1
&gt;&gt;&gt; float('3.')
3.0
&gt;&gt;&gt; float('1e-3')
0.001
&gt;&gt;&gt; float('3.14')
3.14
&gt;&gt;&gt; float('-.15e-2')
-0.0015</code></pre><p>The <code>float</code> constructor can also be used to make numeric representations of <code>NaN</code> (Not a Number), negative <code>infinity</code> and <code>infinity</code> (note that strings for these are case insensitive):</p><pre><code>&gt;&gt;&gt; float('nan')
nan
&gt;&gt;&gt; float('inf')
inf
&gt;&gt;&gt; float('-inf')
-inf
&gt;&gt;&gt; float('infinity')
inf
&gt;&gt;&gt; float('-infinity')
-inf</code></pre><h3 id="complex-numbers">Complex Numbers</h3><p>Complex numbers have a real and an imaginary part, each represented by a floating point number.</p><p>The imaginary part of a complex number can be created using an imaginary literal, this results in a complex number with a real part of <code>0.0</code>:</p><pre><code class="language-python">&gt;&gt;&gt; a = 3.5j
&gt;&gt;&gt; type(a)
&lt;class 'complex'&gt;
&gt;&gt;&gt; print(a)
3.5j
&gt;&gt;&gt; a.real
0.0
&gt;&gt;&gt; a.imag
3.5</code></pre><p>No literal exists for creating a complex number with non-zero real and imaginary parts. To create a non-zero real part complex number, add an imaginary literal to a floating point number:</p><pre><code class="language-python">&gt;&gt;&gt; a = 1.1 + 3.5j
&gt;&gt;&gt; type(a)
&lt;class 'complex'&gt;
&gt;&gt;&gt; print(a)
(1.1+3.5j)
&gt;&gt;&gt; a.real
1.1
&gt;&gt;&gt; a.imag
3.5</code></pre><p>Or use the <a href="https://docs.python.org/3/library/functions.html#complex" rel="nofollow">complex constructor</a>.</p><pre><code class="language-python">class complex([real[, imag]])</code></pre><p>The arguments used to call the complex constructor can be of numeric (including <code>complex</code>) type for either parameter:</p><pre><code class="language-python">&gt;&gt;&gt; complex(1, 1)
(1+1j)
&gt;&gt;&gt; complex(1j, 1j)
(-1+1j)
&gt;&gt;&gt; complex(1.1, 3.5)
(1.1+3.5j)
&gt;&gt;&gt; complex(1.1)
(1.1+0j)
&gt;&gt;&gt; complex(0, 3.5)
3.5j</code></pre><p>A <code>string</code> can also be used as the argument. No second argument is allowed if a string is used as an argument</p><pre><code class="language-python">&gt;&gt;&gt; complex("1.1+3.5j")
(1.1+3.5j)</code></pre><h1 id="python-bools-example">Python Bools Example</h1><p><code>bool()</code> is a built-in function in Python 3. This function returns a Boolean value, i.e. True or False. It takes one argument, <code>x</code>.</p><h2 id="arguments"><strong>Arguments</strong></h2><p>It takes one argument, <code>x</code>. <code>x</code> is converted using the standard <a href="https://docs.python.org/3/library/stdtypes.html#truth" rel="nofollow">Truth Testing Procedure</a>.</p><h2 id="return-value"><strong>Return Value</strong></h2><p>If <code>x</code> is false or omitted, this returns <code>False</code>; otherwise it returns <code>True</code>.</p><h2 id="code-sample"><strong>Code Sample</strong></h2><pre><code>print(bool(4 &gt; 2)) # Returns True as 4 is greater than 2
print(bool(4 &lt; 2)) # Returns False as 4 is not less than 2
print(bool(4 == 4)) # Returns True as 4 is equal to 4
print(bool(4 != 4)) # Returns False as 4 is equal to 4 so inequality doesn't holds
print(bool(4)) # Returns True as 4 is a non-zero value
print(bool(-4)) # Returns True as -4 is a non-zero value
print(bool(0)) # Returns False as it is a zero value
print(bool('dskl')) # Returns True as the string is a non-zero value
print(bool([1, 2, 3])) # Returns True as the list is a non-zero value
print(bool((2,3,4))) # Returns True as tuple is a non-zero value
print(bool([])) # Returns False as list is empty and equal to 0 according to truth value testing</code></pre><h1 id="python-bool-operators-example">Python Bool Operators Example</h1><p><a href="https://docs.python.org/3/reference/expressions.html#and" rel="nofollow"><code>and</code></a>, <a href="https://docs.python.org/3/reference/expressions.html#or" rel="nofollow"><code>or</code></a>, <a href="https://docs.python.org/3/reference/expressions.html#not" rel="nofollow"><code>not</code></a></p><p><a href="https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not" rel="nofollow">Python Docs - Boolean Operations</a></p><p>These are the Boolean operations, ordered by ascending priority:</p><p>OperationResultNotes x or y if x is false, then y, else x (1) x and y if x is false, then x, else y (2) not x if x is false, then True, else False (3).</p><p><strong><strong>Notes:</strong></strong></p><ol><li>This is a short-circuit operator, so it only evaluates the second argument if the first one is False.</li><li>This is a short-circuit operator, so it only evaluates the second argument if the first one is True.</li><li>not has a lower priority than non-Boolean operators, so not a == b is interpreted as not (a == b), and a == not b is a syntax error.</li></ol><h2 id="examples-"><strong>Examples:</strong></h2><h3 id="not-"><strong><code>not</code>:</strong></h3><pre><code>&gt;&gt;&gt; not True
False
&gt;&gt;&gt; not False
True</code></pre><h3 id="and-"><strong><code>and</code>:</strong></h3><pre><code>&gt;&gt;&gt; True and False    # Short-circuited at first argument.
False
&gt;&gt;&gt; False and True    # Second argument is evaluated.
False
&gt;&gt;&gt; True and True     # Second argument is evaluated.
True</code></pre><h3 id="or-"><strong><code>or</code>:</strong></h3><pre><code>&gt;&gt;&gt; True or False    # Short-circuited at first argument.
True
&gt;&gt;&gt; False or True    # Second argument is evaluated.
True
&gt;&gt;&gt; False or False   # Second argument is evaluated.
False</code></pre><h1 id="python-constant-example">Python Constant Example</h1><p>Three commonly used built-in constants:</p><ul><li><code>True</code>: The true value of the <em>bool</em> type. Assignments to <code>True</code> raise a <em>SyntaxError</em>.</li><li><code>False</code>: The false value of the <em>bool</em> type. Assignments to <code>False</code> raise a <em>SyntaxError</em>.</li><li><code>None</code> : The sole value of the type <em>NoneType</em>. None is frequently used to represent the absence of a value, as when default arguments are not passed to a function. Assignments to <code>None</code> raise a <em>SyntaxError</em>.</li></ul><p>Other built-in constants:</p><ul><li><code>NotImplemented</code>: Special value which should be returned by the binary special methods, such as <code>__eg__()</code>, <code>__add__()</code>, <code>__rsub__()</code>, etc.) to indicate that the operation is not implemented with respect to the other type.</li><li><code>Ellipsis</code>: Special value used mostly in conjunction with extended slicing syntax for user-defined container data types.</li><li><code>__debug__</code>: True if Python was not started with an -o option.</li></ul><p>Constants added by the site module. The site module (which is imported automatically during startup, except if the -S command-line option is given) adds several constants to the built-in namespace. They are useful for the interactive interpreter shell and should not be used in programs.</p><p>Objects that, when printed, print a message like “Use quit() or Ctrl-D (i.e. EOF) to exit”, and when called, raise SystemExit with the specified exit code:</p><ul><li>quit(code=None)</li><li>exit(code=None)</li></ul><p>Objects that, when printed, print a message like “Type license() to see the full license text”, and when called, display the corresponding text in a pager-like fashion (one screen at a time):</p><ul><li>copyright</li><li>license</li><li>credits</li></ul><h1 id="calling-python-function-example">Calling Python Function Example</h1><p>A function definition statement does not execute the function. Executing (calling) a function is done by using the name of the function followed by parenthesis enclosing required arguments (if any).</p><pre><code>&gt;&gt;&gt; def say_hello():
...     print('Hello')
...
&gt;&gt;&gt; say_hello()
Hello</code></pre><p>The execution of a function introduces a new symbol table used for the local variables of the function. More precisely, all variable assignments in a function store the value in the local symbol table. </p><p>On the other hand, variable references first look in the local symbol table, then in the local symbol tables of enclosing functions, then in the global symbol table, and finally in the table of built-in names. Thus, global variables cannot be directly assigned a value within a function (unless named in a global statement), although they may be referenced.</p><pre><code>&gt;&gt;&gt; a = 1
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
10</code></pre><p>The actual parameters (arguments) to a function call are introduced in the local symbol table of the called function when it is called. In this way, arguments are passed using call by value (where the value is always an object reference, not the value of the object). When a function calls another function, a new local symbol table is created for that call.</p><pre><code>&gt;&gt;&gt; def greet(s):
...     s = "Hello " + s    # s in local symbol table is reassigned.
...     print(s)
...
&gt;&gt;&gt; person = "Bob"
&gt;&gt;&gt; greet(person)
Hello Bob
&gt;&gt;&gt; person            # person used to call remains bound to original object, 'Bob'.
'Bob'</code></pre><p>The arguments used to call a function cannot be reassigned by the function, but arguments that reference mutable objects can have their values changed:</p><pre><code>&gt;&gt;&gt; def fn(arg):
...     arg.append(1)
...
&gt;&gt;&gt; a = [1, 2, 3]
&gt;&gt;&gt; fn(a)
&gt;&gt;&gt; a
[1, 2, 3, 1]</code></pre><h1 id="python-class-example">Python Class Example</h1><p>Classes provide a means of bundling data and functionality together. Creating a new class creates a new type of object, allowing new instances of that type to be made. Each class instance can have attributes attached to it for maintaining its state. Class instances can also have methods (defined by its class) for modifying its state.</p><p>Compared with other programming languages, Python’s class mechanism adds classes with a minimum of new syntax and semantics. It is a mixture of the class mechanisms found in C++. </p><p>Python classes provide all the standard features of Object Oriented Programming: the class inheritance mechanism allows multiple base classes, a derived class can override any methods of its base class or classes, and a method can call the method of a base class with the same name. </p><p>Objects can contain arbitrary amounts and kinds of data. As is true for modules, classes partake of the dynamic nature of Python: they are created at runtime, and can be modified further after creation.</p><h4 id="class-definition-syntax-"><strong>Class Definition Syntax :</strong></h4><p>The simplest form of class definition looks like this:</p><pre><code class="language-python">class ClassName:
&lt;statement-1&gt;
...
...
...
&lt;statement-N&gt;</code></pre><h4 id="class-objects-"><strong>Class Objects:</strong></h4><p>Class objects support two kinds of operations: attribute references and instantiation.</p><p>Attribute references use the standard syntax used for all attribute references in Python: <code>obj.name</code>. Valid attribute names are all the names that were in the class’s namespace when the class object was created. So, if the class definition looked like this:</p><pre><code class="language-python">class MyClass:
""" A simple example class """
i = 12345
def f(self):
return 'hello world'</code></pre><p>Then <code>MyClass.i</code> and <code>MyClass.f</code> are valid attribute references, returning an integer and a function object, respectively. Class attributes can also be assigned to, so you can change the value of <code>MyClass.i</code> by assignment. <code>__doc__</code> is also a valid attribute, returning the docstring belonging to the class: <code>"A simple example class"</code>.</p><p>Class instantiation uses function notation. Just pretend that the class object is a parameterless function that returns a new instance of the class. For example (assuming the above class):</p><pre><code class="language-python">x = MyClass()</code></pre><p>Creates a new instance of the class and assigns this object to the local variable x.</p><p>The instantiation operation (“calling” a class object) creates an empty object. Many classes like to create objects with instances customized to a specific initial state. Therefore a class may define a special method named <strong><strong>init</strong></strong>(), like this:</p><pre><code class="language-python">def __init__(self):
self.data = []</code></pre><p>When a class defines an <code>__init__()</code> method, class instantiation automatically invokes <code>__init__()</code> for the newly-created class instance. So in this example, a new, initialized instance can be obtained by:</p><pre><code class="language-python">x = MyClass()</code></pre><p>Of course, the <code>__init__()</code> method may have arguments for greater flexibility. In that case, arguments given to the class instantiation operator are passed on to <code>__init__()</code>. For example,</p><pre><code class="language-python">class Complex:
def __init__(self, realpart, imagpart):
self.r = realpart
self.i = imagpart
...
x = Complex(3.0, -4.5)
&gt;&gt;&gt; x.r, x.i
(3.0, -4.5)</code></pre><h1 id="python-code-blocks-and-indention-example">Python Code Blocks and Indention Example</h1><p>It is generally good practice for you not to mix tabs and spaces when coding in Python. Doing this can possibly cause a <code>TabError</code>, and your program will crash. Be consistent when you code - choose either to indent using tabs or spaces and follow your chosen convention throughout your program.</p><h4 id="code-blocks-and-indentation"><strong>Code Blocks and Indentation</strong></h4><p>One of the most distinctive features of Python is its use of indentation to mark blocks of code. Consider the if-statement from our simple password-checking program:</p><pre><code class="language-python">if pwd == 'apple':
print('Logging on ...')
else:
print('Incorrect password.')
print('All done!')</code></pre><p>The lines print(‘Logging on …’) and print(‘Incorrect password.’) are two separate code blocks. These happen to be only a single line long, but Python lets you write code blocks consisting of any number of statements.</p><p>To indicate a block of code in Python, you must indent each line of the block by the same amount. The two blocks of code in our example if-statement are both indented four spaces, which is a typical amount of indentation for Python.</p><p>In most other programming languages, indentation is used only to help make the code look pretty. But in Python, it is required for indicating what block of code a statement belongs to. For instance, the final print(‘All done!’) is not indented, and so is not part of the else-block.</p><p>Programmers familiar with other languages often bristle at the thought that indentation matters: Many programmers like the freedom to format their code how they please. However, Python indentation rules are quite simple, and most programmers already use indentation to make their code readable. Python simply takes this idea one step further and gives meaning to the indentation.</p><h4 id="if-elif-statements"><strong>If/elif-statements</strong></h4><p>An if/elif-statement is a generalized if-statement with more than one condition. It is used for making complex decisions. For example, suppose an airline has the following “child” ticket rates: Kids 2 years old or younger fly for free, kids older than 2 but younger than 13 pay a discounted child fare, and anyone 13 years or older pays a regular adult fare. The following program determines how much a passenger should pay:</p><pre><code class="language-python"># airfare.py
age = int(input('How old are you? '))
if age &lt;= 2:
print(' free')
elif 2 &lt; age &lt; 13:
print(' child fare)
else:
print('adult fare')</code></pre><p>After Python gets age from the user, it enters the if/elif-statement and checks each condition one after the other in the order they are given. </p><p>So first it checks if age is less than 2, and if so, it indicates that the flying is free and jumps out of the elif-condition. If age is not less than 2, then it checks the next elif-condition to see if age is between 2 and 13. If so, it prints the appropriate message and jumps out of the if/elif-statement. If neither the if-condition nor the elif-condition is True, then it executes the code in the else-block.</p><h4 id="conditional-expressions"><strong>Conditional expressions</strong></h4><p>Python has one more logical operator that some programmers like (and some don’t!). It’s essentially a shorthand notation for if-statements that can be used directly within expressions. Consider this code:</p><pre><code class="language-python">food = input("What's your favorite food? ")
reply = 'yuck' if food == 'lamb' else 'yum'</code></pre><p>The expression on the right-hand side of = in the second line is called a conditional expression, and it evaluates to either ‘yuck’ or ‘yum’. It’s equivalent to the following:</p><pre><code class="language-python">food = input("What's your favorite food? ")
if food == 'lamb':
reply = 'yuck'
else:
<thead>
<tr>
<th>Operation</th>
<th>Meaning</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>&lt;</code></td>
<td>strictly less than</td>
</tr>
<tr>
<td><code>&lt;=</code></td>
<td>less than or equal to</td>
</tr>
<tr>
<td><code>&gt;</code></td>
<td>strictly greater than</td>
</tr>
<tr>
<td><code>&gt;=</code></td>
<td>greater than or equal to</td>
</tr>
<tr>
<td><code>==</code></td>
<td>equal to</td>
</tr>
<tr>
<td><code>!=</code></td>
<td>not equal to</td>
</tr>
<tr>
<td><code>is</code></td>
<td>object identity</td>
</tr>
<tr>
<td><code>is not</code></td>
<td>negated object identity</td>
</tr>
</tbody>
</table>
True
&gt;&gt;&gt; myListB is myListA # myListB contains the same elements
True</code></pre><p>This is because both myListA and myListB are pointing to the same list variable, which I defined at beginning of my Python program. Both lists are exactly the same, both in identity and in content.</p><p>However, what if I now create a new list?</p><pre><code class="language-python">myListC = [1,2,3]</code></pre><p>Performing the <code>==</code> operator still shows that both lists are the same, in terms of content.</p><pre><code class="language-python">&gt;&gt;&gt; myListA == myListC
True</code></pre><p>However, performing the <code>is</code> operator will now produce a <code>False</code> output. This is because myListA and myListC are two different variables, despite containing the same data. Even though they look the same, they are <strong><strong>different</strong></strong>.</p><pre><code class="language-python">&gt;&gt;&gt; myListA is myListC
False # both lists have different reference</code></pre><p>To sum up:</p><ul><li>An <code>is</code> expression outputs <code>True</code> if both variables are pointing to the same reference</li><li>An <code>==</code> expression outputs <code>True</code> if both variables contain the same data</li></ul><h1 id="python-dictionary-example">Python Dictionary Example</h1><p>A Dictionary (a.k.a “dict”) in python is a built-in datatype that can be used to store <strong><strong><code>key-value</code></strong></strong> pairs. This allows you to treat a <strong><strong><code>dict</code></strong></strong> like it’s a <em>database</em> to store and organize data.</p><p>The special thing about dictionaries is the way they are implemented. Hash-table-like structure makes it easy to check for existence - which means that we can easily determine if a specific key is present in the dictionary without needing to examine every element. The Python interpreter can just go to the location key and check if the key is there.</p><p>Dictionaries can use almost any arbitrary datatypes, like strings, integers etc, for keys. However, values that are not hashable, that is, values containing lists, dictionaries or other mutable types (that are compared by value rather than by object identity) may not be used as keys. Numeric types used for keys obey the normal rules for numeric comparison: if two numbers compare equal (such as <code>1</code> and <code>1.0</code>) then they can be used interchangeably to index the same dictionary entry. (Note however, that since computers store floating-point numbers as approximations it is usually unwise to use them as dictionary keys.)</p><p>One most important requirement of a dictionary is that the keys <strong><strong>must</strong></strong> be unique.</p><p>To create an empty dictionary just use a pair of braces:</p><pre><code class="language-py">    &gt;&gt;&gt; teams = {}
&gt;&gt;&gt; type(teams)
&gt;&gt;&gt; &lt;class 'dict'&gt;</code></pre><p>To create a non-empty dictionary with some initial values, place a comma-seperated list of key-value pairs:</p><pre><code class="language-python">    &gt;&gt;&gt; teams = {'barcelona': 1875, 'chelsea': 1910}
&gt;&gt;&gt; teams
{'barcelona': 1875, 'chelsea': 1910}</code></pre><p>It’s easy to add key-value pairs to an existing dictionary:</p><pre><code class="language-python">    &gt;&gt;&gt; teams['santos'] = 1787
&gt;&gt;&gt; teams
{'chelsea': 1910, 'barcelona': 1875, 'santos': 1787} # Notice the order - Dictionaries are unordered !
&gt;&gt;&gt; # extracting value - Just provide the key
...
&gt;&gt;&gt; teams['barcelona']
1875</code></pre><p><strong><strong><code>del</code></strong></strong> operator is used to delete a key-value pair from the dict. In scenarios where a key that’s already in use is again used to store values, the old value associated with that key is completely lost. Also, keep in mind that it’s an error to extract the value using a non-existent key.</p><pre><code>    &gt;&gt;&gt; del teams['santos']
&gt;&gt;&gt; teams
{'chelsea': 1910, 'barcelona': 1875}
&gt;&gt;&gt; teams['chelsea'] = 2017 # overwriting
&gt;&gt;&gt; teams
{'chelsea': 2017, 'barcelona': 1875}</code></pre><p><strong><strong><code>in</code></strong></strong> keyword can be used to check whether a key exist in the dict or not:</p><pre><code class="language-python">    &gt;&gt;&gt; 'sanots' in teams
False
&gt;&gt;&gt; 'barcelona' in teams
True
&gt;&gt;&gt; 'chelsea' not in teams
False</code></pre><p><strong><strong><code>keys</code></strong></strong> is a built-in <em>method</em> that can be used to get the keys of a given dictionary. To extract the keys present in a dict as lists:</p><pre><code class="language-python">    &gt;&gt;&gt; club_names = list(teams.keys())
&gt;&gt;&gt; club_names
['chelsea', 'barcelona']</code></pre><p>Yet another way of creating a dictionary is using the <strong><strong><code>dict()</code></strong></strong> method:</p><pre><code class="language-python">    &gt;&gt;&gt; players = dict( [('messi','argentina'), ('ronaldo','portugal'), ('kaka','brazil')] ) # sequence of key-value pair is passed
&gt;&gt;&gt; players
{'ronaldo': 'portugal', 'kaka': 'brazil', 'messi': 'argentina'}
&gt;&gt;&gt;
&gt;&gt;&gt; # If keys are simple strings, it's quite easier to specify pairs using keyword arguments
...
&gt;&gt;&gt; dict( totti = 38, zidane = 43 )
{'zidane': 43, 'totti': 38}</code></pre><p>Dict comprehensions can be used as well to create dictionaries from arbitrary key and value expressions:</p><pre><code class="language-python">    &gt;&gt;&gt; {x: x**2 for x in (2, 4, 6)}
{2: 4, 4: 16, 6: 36}</code></pre><p><strong><strong>Looping in Dictionary</strong></strong><br>To simply loop over the keys in the dictionary, rather than the keys and values:</p><pre><code class="language-python">    &gt;&gt;&gt; d = {'x': 1, 'y': 2, 'z': 3}
&gt;&gt;&gt; for key in d:
...     print(key) # do something
...
x
y
z</code></pre><p>To loop over both key and value, you can use the following:<br>For Python 2.x:</p><pre><code>    &gt;&gt;&gt; for key, item in d.iteritems():
...     print items
...
1
2
3</code></pre><p>Use <strong><strong><code>items()</code></strong></strong> for Python 3.x:</p><pre><code class="language-python">    &gt;&gt;&gt; for key, item in d.items():
...     print(key, items)
...
x 1
y 2
z 3</code></pre><h1 id="python-objects-example">Python Objects Example</h1><p>In Python, everything is an <em>object</em>.</p><p><em>Objects</em> represent a logical grouping of attributes. Attributes are data and/or functions. When an object is created in Python it is created with an <em>identity</em>, <em>type</em>, and <em>value</em>.</p><p>In other languages, <em>primitives</em> are <em>values</em> that have no <em>properties</em> (attributes). For example, in javascript <code>undefined</code>, <code>null</code>, <code>boolean</code>, <code>string</code>, <code>number</code>, and <code>symbol</code> (new in ECMAScript 2015) are primitives.</p><p>In Python, there are no primitives. <code>None</code>, <em>booleans</em>, <em>strings</em>, <em>numbers</em>, and even <em>functions</em> are all <em>objects </em>regardless how they are created.</p><p>We can demonstrate this using some built-in functions:</p><ul><li><a href="https://docs.python.org/3/library/functions.html#id" rel="nofollow"><code>id</code></a></li><li><a href="https://docs.python.org/3/library/functions.html#type" rel="nofollow"><code>type</code></a></li><li><a href="https://docs.python.org/3/library/functions.html#dir" rel="nofollow"><code>dir</code></a></li><li><a href="https://docs.python.org/3/library/functions.html#issubclass" rel="nofollow"><code>issubclass</code></a></li></ul><p>Built-in constants <code>None</code>, <code>True</code>, and <code>False</code> are <em>objects</em>:</p><p>We test the <code>None</code> object here.</p><pre><code>&gt;&gt;&gt; id(None)
4550218168
&gt;&gt;&gt; type(None)
&lt;class 'NoneType'&gt;
&gt;&gt;&gt; dir(None)
[__bool__', '__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__le__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__']
&gt;&gt;&gt; issubclass(type(None), object)
True</code></pre><p>Next, let’s inspect <code>True</code>.</p><pre><code class="language-py">&gt;&gt;&gt; id(True)
4550117616
&gt;&gt;&gt; type(True)
&lt;class 'bool'&gt;
&gt;&gt;&gt; dir(True)
['__abs__', '__add__', '__and__', '__bool__', '__ceil__', '__class__', '__delattr__', '__dir__', '__divmod__', '__doc__', '__eq__', '__float__', '__floor__', '__floordiv__', '__format__', '__ge__', '__getattribute__', '__getnewargs__', '__gt__', '__hash__', '__index__', '__init__', '__int__', '__invert__', '__le__', '__lshift__', '__lt__', '__mod__', '__mul__', '__ne__', '__neg__', '__new__', '__or__', '__pos__', '__pow__', '__radd__', '__rand__', '__rdivmod__', '__reduce__', '__reduce_ex__', '__repr__', '__rfloordiv__', '__rlshift__', '__rmod__', '__rmul__', '__ror__', '__round__', '__rpow__', '__rrshift__', '__rshift__', '__rsub__', '__rtruediv__', '__rxor__', '__setattr__', '__sizeof__', '__str__', '__sub__', '__subclasshook__', '__truediv__', '__trunc__', '__xor__', 'bit_length', 'conjugate', 'denominator', 'from_bytes', 'imag', 'numerator', 'real', 'to_bytes']
&gt;&gt;&gt; issubclass(type(True), object)
True</code></pre><p>No reason to leave out <code>False</code>!</p><pre><code class="language-py">&gt;&gt;&gt; id(False)
4550117584
&gt;&gt;&gt; type(False)
&lt;class 'bool'&gt;
&gt;&gt;&gt; dir(False)
['__abs__', '__add__', '__and__', '__bool__', '__ceil__', '__class__', '__delattr__', '__dir__', '__divmod__', '__doc__', '__eq__', '__float__', '__floor__', '__floordiv__', '__format__', '__ge__', '__getattribute__', '__getnewargs__', '__gt__', '__hash__', '__index__', '__init__', '__int__', '__invert__', '__le__', '__lshift__', '__lt__', '__mod__', '__mul__', '__ne__', '__neg__', '__new__', '__or__', '__pos__', '__pow__', '__radd__', '__rand__', '__rdivmod__', '__reduce__', '__reduce_ex__', '__repr__', '__rfloordiv__', '__rlshift__', '__rmod__', '__rmul__', '__ror__', '__round__', '__rpow__', '__rrshift__', '__rshift__', '__rsub__', '__rtruediv__', '__rxor__', '__setattr__', '__sizeof__', '__str__', '__sub__', '__subclasshook__', '__truediv__', '__trunc__', '__xor__', 'bit_length', 'conjugate', 'denominator', 'from_bytes', 'imag', 'numerator', 'real', 'to_bytes']
&gt;&gt;&gt; issubclass(type(False), object)
True</code></pre><p><em>Strings</em>, even when created by a string literals, are also <em>objects</em>.</p><pre><code class="language-py">&gt;&gt;&gt; id("Hello campers!")
4570186864
&gt;&gt;&gt; type('Hello campers!')
&lt;class 'str'&gt;
&gt;&gt;&gt; dir("Hello campers!")
['__add__', '__class__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__gt__', '__hash__', '__init__', '__iter__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'capitalize', 'casefold', 'center', 'count', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'format_map', 'index', 'isalnum', 'isalpha', 'isdecimal', 'isdigit', 'isidentifier', 'islower', 'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill']
&gt;&gt;&gt; issubclass(type('Hello campers!'), object)
True</code></pre><p>Same with <em>numbers.</em></p><pre><code class="language-py">&gt;&gt;&gt; id(42)
4550495728
&gt;&gt;&gt; type(42)
&lt;class 'int'&gt;
&gt;&gt;&gt; dir(42)
['__abs__', '__add__', '__and__', '__bool__', '__ceil__', '__class__', '__delattr__', '__dir__', '__divmod__', '__doc__', '__eq__', '__float__', '__floor__', '__floordiv__', '__format__', '__ge__', '__getattribute__', '__getnewargs__', '__gt__', '__hash__', '__index__', '__init__', '__int__', '__invert__', '__le__', '__lshift__', '__lt__', '__mod__', '__mul__', '__ne__', '__neg__', '__new__', '__or__', '__pos__', '__pow__', '__radd__', '__rand__', '__rdivmod__', '__reduce__', '__reduce_ex__', '__repr__', '__rfloordiv__', '__rlshift__', '__rmod__', '__rmul__', '__ror__', '__round__', '__rpow__', '__rrshift__', '__rshift__', '__rsub__', '__rtruediv__', '__rxor__', '__setattr__', '__sizeof__', '__str__', '__sub__', '__subclasshook__', '__truediv__', '__trunc__', '__xor__', 'bit_length', 'conjugate', 'denominator', 'from_bytes', 'imag', 'numerator', 'real', 'to_bytes']
&gt;&gt;&gt; issubclass(type(42), object)
True</code></pre><h2 id="functions-are-objects-too"><strong>Functions are Objects Too</strong></h2><p>In Python, functions are first class objects.</p><p><em>Functions</em> in Python are also <em>objects</em>, created with an <em>identity</em>, <em>type</em>, and <em>value</em>. They too can be passed into other <em>functions</em>:</p><pre><code class="language-py">&gt;&gt;&gt; id(dir)
4568035688
&gt;&gt;&gt; type(dir)
&lt;class 'builtin_function_or_method'&gt;
&gt;&gt;&gt; dir(dir)
['__call__', '__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__le__', '__lt__', '__module__', '__name__', '__ne__', '__new__', '__qualname__', '__reduce__', '__reduce_ex__', '__repr__', '__self__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__text_signature__']
&gt;&gt;&gt; issubclass(type(dir), object)
True</code></pre><p>It is also possible to bind functions to a name and call the bound function using that name:</p><pre><code class="language-py">&gt;&gt;&gt; a = dir
&gt;&gt;&gt; print(a)
&lt;built-in function dir&gt;
&gt;&gt;&gt; a(a)
['__call__', '__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__le__', '__lt__', '__module__', '__name__', '__ne__', '__new__', '__qualname__', '__reduce__', '__reduce_ex__', '__repr__', '__self__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__text_signature__']</code></pre><h2 id="name-binding-and-aliasing-functions">Name Binding and Aliasing Functions</h2><p>When you define a function in Python, that function name is introduced into the current symbol table. The value of the function's name then has a type that's recognized as a user-defined function by the interpreter:</p><pre><code class="language-py">&gt;&gt;&gt; something = 1
&gt;&gt;&gt; type(something)
&lt;type 'int'&gt;
&gt;&gt;&gt; def something():
...     pass
...
&gt;&gt;&gt; type(something)
&lt;type 'function'&gt;
&gt;&gt;&gt; something = []
&gt;&gt;&gt; type(something)
&lt;type 'list'&gt;</code></pre><p>The value of the function can then be assigned to another name. After it's been reassigned, it can still be used as a function. Use this method to rename your functions:</p><pre><code class="language-py">&gt;&gt;&gt; def something(n):
...     print(n)
...
&gt;&gt;&gt; type(something)
&lt;type 'function'&gt;
&gt;&gt;&gt; s = something
&gt;&gt;&gt; s(100)
100</code></pre><h1 id="python-tuples">Python Tuples</h1><p>A tuple is a sequence of Python objects. Tuples are immutable which means they cannot be modified after creation, unlike lists.</p><p><strong><strong>Creation:</strong></strong></p><p>An empty <code>tuple</code> is created using a pair of round brackets, <code>()</code>:</p><pre><code class="language-py">    &gt;&gt;&gt; empty_tuple = ()
&gt;&gt;&gt; print(empty_tuple)
()
&gt;&gt;&gt; type(empty_tuple)
&lt;class 'tuple'&gt;
&gt;&gt;&gt; len(empty_tuple)
0</code></pre><p>A <code>tuple</code> with elements is created by separating the elements with commas (surrounding round brackets, <code>()</code>, are optional with exceptions):</p><pre><code class="language-py">    &gt;&gt;&gt; tuple_1 = 1, 2, 3 # Create tuple without round brackets.
&gt;&gt;&gt; print(tuple_1)
(1, 2, 3)
&gt;&gt;&gt; type(tuple_1)
&lt;class 'tuple'&gt;
&gt;&gt;&gt; len(tuple_1)
3
&gt;&gt;&gt; tuple_2 = (1, 2, 3)     # Create tuple with round brackets.
&gt;&gt;&gt; print(tuple_2)
(1, 2, 3)
&gt;&gt;&gt; tuple_3 = 1, 2, 3,# Trailing comma is optional.
&gt;&gt;&gt; print(tuple_3)
(1, 2, 3)
&gt;&gt;&gt; tuple_4 = (1, 2, 3,)    # Trailing comma in round brackets is also optional.
&gt;&gt;&gt; print(tuple_4)
(1, 2, 3)</code></pre><p>A <code>tuple</code> with a single element must have the trailing comma (with or without round brackets):</p><pre><code>&gt;&gt;&gt; not_tuple = (2)    # No trailing comma makes this not a tuple.
&gt;&gt;&gt; print(not_tuple)
2
&gt;&gt;&gt; type(not_tuple)
&lt;class 'int'&gt;
&gt;&gt;&gt; a_tuple = (2,)     # Single element tuple. Requires trailing comma.
&gt;&gt;&gt; print(a_tuple)
(2,)
&gt;&gt;&gt; type(a_tuple)
&lt;class 'tuple'&gt;
&gt;&gt;&gt; len(a_tuple)
1
&gt;&gt;&gt; also_tuple = 2,    # Round brackets omitted. Requires trailing comma.
&gt;&gt;&gt; print(also_tuple)
(2,)
&gt;&gt;&gt; type(also_tuple)
&lt;class 'tuple'&gt;</code></pre><p>Round brackets are required in cases of ambiguity (if the tuple is part of a larger expression):</p><p>Note that it is actually the comma which makes a tuple, not the parentheses. The parentheses are optional, except in the empty tuple case, or when they are needed to avoid syntactic ambiguity. </p><p>For example, <code>f(a, b, c)</code> is a function call with three arguments, while <code>f((a, b, c))</code> is a function call with a 3-tuple as the sole argument.</p><pre><code class="language-py">    &gt;&gt;&gt; print(1,2,3,4,)    # Calls print with 4 arguments: 1, 2, 3, and 4
1 2 3 4
&gt;&gt;&gt; print((1,2,3,4,))  # Calls print with 1 argument: (1, 2, 3, 4,)
(1, 2, 3, 4)
&gt;&gt;&gt; 1, 2, 3 == (1, 2, 3)     # Equivalent to 1, 2, (3 == (1, 2, 3))
(1, 2, False)
&gt;&gt;&gt; (1, 2, 3) == (1, 2, 3)   # Use surrounding round brackets when ambiguous.
True</code></pre><p>A <code>tuple</code> can also be created with the <code>tuple</code> constructor:</p><pre><code class="language-py">    &gt;&gt;&gt; empty_tuple = tuple()
&gt;&gt;&gt; print(empty_tuple)
()
&gt;&gt;&gt; tuple_from_list = tuple([1,2,3,4])
&gt;&gt;&gt; print(tuple_from_list)
(1, 2, 3, 4)
&gt;&gt;&gt; tuple_from_string = tuple("Hello campers!")
&gt;&gt;&gt; print(tuple_from_string)
('H', 'e', 'l', 'l', 'o', ' ', 'c', 'a', 'm', 'p', 'e', 'r', 's', '!')
&gt;&gt;&gt; a_tuple = 1, 2, 3
&gt;&gt;&gt; b_tuple = tuple(a_tuple)    # If the constructor is called with a tuple for
the iterable,
&gt;&gt;&gt; a_tuple is b_tuple    # the tuple argument is returned.
True</code></pre><p><strong><strong>Accessing elements of a <code>tuple</code>:</strong></strong></p><p>Elements of <code>tuples</code> are accessed and indexed the same way that <code>lists</code> are.</p><pre><code class="language-py">&gt;&gt;&gt; my_tuple = 1, 2, 9, 16, 25
&gt;&gt;&gt; print(my_tuple)
(1, 2, 9, 16, 25)</code></pre><p><em>Zero indexed</em></p><pre><code class="language-py">    &gt;&gt;&gt; my_tuple[0]
1
&gt;&gt;&gt; my_tuple[1]
2
&gt;&gt;&gt; my_tuple[2]
9</code></pre><p><em>Wrap around indexing</em></p><pre><code class="language-py">    &gt;&gt;&gt; my_tuple[-1]
25
&gt;&gt;&gt; my_tuple[-2]
16</code></pre><p><strong><strong>Packing and Unpacking:</strong></strong></p><p>The statement <code>t = 12345, 54321, 'hello!'</code> is an example of tuple packing: the values <code>12345</code>, <code>54321</code>and <code>'hello!'</code> are packed together in a tuple. The reverse operation is also possible:</p><pre><code class="language-shell">    &gt;&gt;&gt; x, y, z = t</code></pre><p>This is called, appropriately enough, sequence unpacking and works for any sequence on the right-hand side. Sequence unpacking requires that there are as many variables on the left side of the equals sign as there are elements in the sequence. Note that multiple assignment is really just a combination of tuple packing and sequence unpacking.</p><pre><code class="language-py">    &gt;&gt;&gt; t = 1, 2, 3    # Tuple packing.
&gt;&gt;&gt; print(t)
(1, 2, 3)
&gt;&gt;&gt; a, b, c = t    # Sequence unpacking.
&gt;&gt;&gt; print(a)
1
&gt;&gt;&gt; print(b)
2
&gt;&gt;&gt; print(c)
3
&gt;&gt;&gt; d, e, f = 4, 5, 6    # Multiple assignment combines packing and unpacking.
&gt;&gt;&gt; print(d)
4
&gt;&gt;&gt; print(e)
5
&gt;&gt;&gt; print(f)
6
&gt;&gt;&gt; a, b = 1, 2, 3 # Multiple assignment requires each variable (right)
have a matching element (left).
Traceback (most recent call last):
File "&lt;stdin&gt;", line 1, in &lt;module&gt;
ValueError: too many values to unpack (expected 2)</code></pre><p><strong><strong>Immutable:</strong></strong></p><p><code>tuples</code> are immutable containers, guaranteeing <strong><strong>which</strong></strong> objects they contain will not change. It does <strong><strong>not</strong> </strong>guarantee that the objects they contain will not change:</p><pre><code class="language-shell">    &gt;&gt;&gt; a_list = []
&gt;&gt;&gt; a_tuple = (a_list,)    # A tuple (immutable) with a list (mutable) element.
&gt;&gt;&gt; print(a_tuple)
([],)
&gt;&gt;&gt; a_list.append("Hello campers!")
&gt;&gt;&gt; print(a_tuple)   # Element of the immutable is mutated.
(['Hello campers!'],)</code></pre><p><strong><strong>Uses:</strong></strong></p><p>Functions can only return a single value, however, a heterogenuous <code>tuple</code> can be used to return multiple values from a function. One example is the built-in <code>enumerate</code> function that returns an iterable of heterogeneous <code>tuples</code>:</p><pre><code class="language-py">    &gt;&gt;&gt; greeting = ["Hello", "campers!"]
&gt;&gt;&gt; enumerator = enumerate(greeting)
&gt;&gt;&gt; enumerator.next()
&gt;&gt;&gt; enumerator.__next__()
(0, 'Hello')
&gt;&gt;&gt; enumerator.__next__()
(1, 'campers!')</code></pre><h1 id="python-for-loop-statement-example">Python For Loop Statement Example</h1><p>Python utilizes a for loop to iterate over a list of elements. This is unlike C or Java, which use the for loop to change a value in steps and access something such as an array using that value.</p><p>For loops iterate over collection-based data structures like lists, tuples, and dictionaries.</p><p>The basic syntax is:</p><pre><code class="language-python">for value in list_of_values:
# use value inside this block</code></pre><p>In general, you can use anything as the iterator value, where entries of the iterable can be assigned to. E.g. you can unpack tuples from a list of tuples:</p><pre><code class="language-python">list_of_tuples = [(1,2), (3,4)]
for a, b in list_of_tuples:
print("a:", a, "b:", b)</code></pre><p>On the other hand, you can loop over anything that is iterable. You can call a function or use a list literal.</p><pre><code class="language-python">for person in load_persons():
print("The name is:", person.name)</code></pre><pre><code class="language-python">for character in ["P", "y", "t", "h", "o", "n"]:
print("Give me a '{}'!".format(character))</code></pre><p>Some ways in which For loops are used:</p><p><strong><strong>Iterate over the range() function</strong></strong></p><pre><code class="language-python">for i in range(10):
print(i)</code></pre><p>Rather than being a function, range is actually an immutable sequence type. The output will contain results from lower bound i.e 0 to the upper bound i.e 10, but excluding 10. By default the lower bound or the starting index is set to zero. Output:</p><pre><code class="language-text">&gt;
0
1
2
3
4
5
6
7
8
9
&gt;</code></pre><p>Additionally, one can specify the lower bound of the sequence and even the step of the sequence by adding a second and a third parameter.</p><pre><code class="language-py">for i in range(4,10,2): #From 4 to 9 using a step of two
print(i)</code></pre><p>Output:</p><pre><code class="language-py">&gt;
4
6
8
&gt;</code></pre><p><strong><strong>xrange() function</strong></strong></p><p>For the most part, xrange and range are the exact same in terms of functionality. They both provide a way to generate a list of integers for you to use, however you please. The only difference is that range returns a Python list object and xrange returns an xrange object. It means that xrange doesn’t actually generate a static list at run-time like range does. It creates the values as you need them with a special technique called yielding. This technique is used with a type of object known as generators.</p><p>One more thing to add. In Python 3.x, the xrange function does not exist anymore. The range function now does what xrange does in Python 2.x</p><p><strong><strong>Iterate over values in a list or tuple</strong></strong></p><pre><code class="language-python">A = ["hello", 1, 65, "thank you", [2, 3]]
for value in A:
print(value)</code></pre><p>Output:</p><pre><code class="language-text">&gt;
hello
1
65
thank you
[2, 3]
&gt;</code></pre><p><strong><strong>Iterate over keys in a dictionary (aka hashmap)</strong></strong></p><pre><code class="language-python">fruits_to_colors = {"apple": "#ff0000",
"lemon": "#ffff00",
"orange": "#ffa500"}
for key in fruits_to_colors:
print(key, fruits_to_colors[key])</code></pre><p>Output:</p><pre><code class="language-text">&gt;
apple #ff0000
lemon #ffff00
orange #ffa500
&gt;</code></pre><p><strong><strong>Iterate over two lists of same size in a single loop with the zip() function</strong></strong></p><pre><code class="language-python">A = ["a", "b", "c"]
B = ["a", "d", "e"]
for a, b in zip(A, B):
print a, b, a == b
</code></pre><p>Output:</p><pre><code class="language-text">&gt;
a a True
b d False
c e False
&gt;</code></pre><p><strong><strong>Iterate over a list and get the corresponding index with the enumerate() function</strong></strong></p><pre><code class="language-python">A = ["this", "is", "something", "fun"]
for index,word in enumerate(A):
print(index, word)</code></pre><p>Output:</p><pre><code class="language-text">&gt;
0 this
1 is
2 something
3 fun
&gt;</code></pre><p>A common use case is iterating over a dictionary:</p><pre><code class="language-python">for name, phonenumber in contacts.items():
print(name, "is reachable under", phonenumber)</code></pre><p>If you absolutely need to access the current index of your iteration, do <strong><strong>NOT</strong></strong> use <code>range(len(iterable))</code>! This is an extremely bad practice and will get you plenty of chuckles from senior Python developers. Use the built in function <code>enumerate()</code> instead:</p><pre><code class="language-python">for index, item in enumerate(shopping_basket):
print("Item", index, "is a", item)</code></pre><p><strong><strong>for/else statements</strong></strong> Pyhton permits you to use else with for loops, the else case is executed when none of the conditions with in the loop body was satisfied. To use the else we have to make use of <code>break</code> statement so that we can break out of the loop on a satisfied condition. If we do not break out then the else part will be executed.</p><p></p><pre><code class="language-python">week_days = ['Monday','Tuesday','Wednesday','Thursday','Friday']
today = 'Saturday'
for day in week_days:
if day == today:
print('today is a week day')
break
else:
print('today is not a week day')</code></pre><p>In the above case the output will be <code>today is not a week day</code> since the break within the loop will never be executed.</p><p><strong><strong>Iterate over a list using inline loop function</strong></strong></p><p>We could also iterate inline using python. For example if we need to uppercase all the words in a list from a list, we could simply do the following:</p><pre><code class="language-python">A = ["this", "is", "awesome", "shinning", "star"]
UPPERCASE = [word.upper() for word in A]
print (UPPERCASE)</code></pre><p>Output:</p><pre><code class="language-text">&gt;
['THIS', 'IS', 'AWESOME', 'SHINNING', 'STAR']</code></pre><h1 id="python-function-example">Python Function Example</h1><p>A function allows you to define a reusable block of code that can be executed many times within your program.</p><p>Functions allow you to create more modular and <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself">DRY</a> solutions to complex problems.</p><p>While Python already provides many built-in functions such as <code>print()</code> and <code>len()</code>, you can also define your own functions to use within your projects.</p><p>One of the great advantages of using functions in your code is that it reduces the overall number of lines of code in your project.</p><h3 id="syntax"><strong>Syntax</strong></h3><p>In Python, a function definition has the following features:</p><ol><li>The keyword <code>def</code></li><li>a function name</li><li>parentheses’()’, and within parentheses input parameters, although the input parameters are optional.</li><li>a colon ’:’</li><li>some block of code to execute</li><li>a return statement (optional)</li></ol><pre><code class="language-python"># a function with no parameters or returned values
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
multiply(3, 5)  # prints 15 to the console</code></pre><p>Functions are blocks of code that can be reused simply by calling the function. This enables simple, elegant code reuse without explicitly re-writing sections of code. This makes code more readable, easier to debug, and limits typing errors.</p><p>Functions in Python are created using the <code>def</code> keyword, followed by a function name and function parameters inside parentheses.</p><p>A function always returns a value. The <code>return</code> keyword is used by the function to return a value. If you don’t want to return any value, the default value <code>None</code> will be returned.</p><p>The function name is used to call the function, passing the needed parameters inside parentheses.</p><p></p><pre><code class="language-python"># this is a basic sum function
def sum(a, b):
return a + b
result = sum(1, 2)
# result = 3</code></pre><p>You can define default values for the parameters, and that way Python will interpret that the value of that parameter is the default one if none is given.</p><pre><code class="language-python">def sum(a, b=3):
return a + b
result = sum(1)
# result = 4</code></pre><p>You can pass the parameters in the order you want, using the name of the parameter.</p><pre><code class="language-python">result = sum(b=2, a=2)
# result = 4</code></pre><p>However, it is not possible to pass a keyword argument before a non-keyword one.</p><pre><code class="language-python">result = sum(3, b=2)
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
print(double(4))  # prints 8</code></pre><p>Python interprets the function block only when the function is called and not when the function is defined. So even if the function definition block contains some sort of error, the python interpreter will point that out only when the function is called.</p><h1 id="python-generator-example">Python Generator Example</h1><p>Generators are a special type of function that allows you to return values without ending a function. It does this by using the <code>yield</code> keyword. Similar to <code>return</code>, the <code>yield</code> expression will return a value to the caller. The key difference between the two is that <code>yield</code> will suspend the function, allowing for more values to be returned in the future.</p><p>Generators are iterable so they can be used cleanly with for loops or anything else that iterates.</p><p></p><pre><code class="language-python">def my_generator():
yield 'hello'
yield 'world'
yield '!'
for item in my_generator():
print(item)
# output:
# hello
# world
# !</code></pre><p>Like other iterators, generators can be passed to the <code>next</code> function to retrieve the next item. When a generator has no more values to yield, a <code>StopIteration</code> error is raised.</p><pre><code class="language-python">g = my_generator()
print(next(g))
# 'hello'
print(next(g))
# 'world'
print(next(g))
# '!'
print(next(g))
# Traceback (most recent call last):
#   File "&lt;stdin&gt;", line 1, in &lt;module&gt;
# StopIteration</code></pre><p>Generators are particularly useful when you need to create a large set of values but do not need to keep them all in memory at the same time. For example, if you need to print the first million fibonacci numbers, you would typically return a list of a million values and iterate over the list to print each value. However with a generator, you can return each value one at a time:</p><pre><code class="language-python">def fib(n):
a = 1
b = 1
for i in range(n):
yield a
a, b = b, a + b
for x in fib(1000000):
print(x)</code></pre><h1 id="python-iterator-example">Python Iterator Example</h1><p>Python supports a concept of iteration over containers. This is implemented using two distinct methods; these are used to allow user-defined classes to support iteration.</p><p><a href="https://docs.python.org/3/library/stdtypes.html#iterator-types" rel="nofollow">Python Docs - Iterator Types</a></p><p>Iteration is the process of programmatically repeating a step a given number of times. A programmer can make use of iteration to perform the same operation on every item in a collection of data, for example printing out every item in a list.</p><ul><li>Objects can implement a <code>__iter__()</code> method that returns an iterator object to support iteration.</li></ul><p>Iterator objects must implement:</p><ul><li><code>__iter__()</code>: returns the iterator object.</li><li><code>__next__()</code>: returns the next object of the container.iterator<em>object = ‘abc’.<strong><strong>iter</strong></strong>() print(iterator</em>object) print(id(iterator<em>object)) print(id(iterator</em>object.<strong><strong>iter</strong></strong>())) # Returns the iterator itself. print(iterator<em>object.<strong><strong>next</strong></strong>()) # Returns 1st object and advances iterator. print(iterator</em>object.<strong><strong>next</strong></strong>()) # Returns 2nd object and advances iterator. print(iterator<em>object.<strong><strong>next</strong></strong>()) # Returns 3rd object and advances iterator. print(iterator</em>object.<strong><strong>next</strong></strong>()) # Raises StopIteration Exception.</li></ul><p>Output :</p><pre><code class="language-text">&lt;str_iterator object at 0x102e196a0&gt;
4343305888
4343305888
a
b
c
---------------------------------------------------------------------------
StopIteration                       Traceback (most recent call last)
&lt;ipython-input-1-d466eea8c1b0&gt; in &lt;module&gt;()
6 print(iterator_object.__next__())     # Returns 2nd object and advances iterator.
7 print(iterator_object.__next__())     # Returns 3rd object and advances iterator.
----&gt; 8 print(iterator_object.__next__())     # Raises StopIteration Exception.
StopIteration:</code></pre><h1 id="ternary-operator-in-python-example"><strong>Ternary operator in Python Example</strong></h1><p>Ternary operations in Python, often also referred to as conditional expressions, allow the programmer to perform an evaluation and return a value based on the truth of the given condition.</p><p>The ternary operator differs from a standard <code>if</code>, <code>else</code>, <code>elif</code> structure in the sense that it is not a control flow structure, and behaves more like other operators such as <code>==</code> or <code>!=</code> in the Python language.</p><h3 id="example-1"><strong>Example</strong></h3><p>In this example, the string <code>Even</code> is returned if the <code>val</code> variable is even, otherwise the string <code>Odd</code> is returned. The returned string is then assigned to the <code>is_even</code> variable and printed to the console.</p><h4 id="input"><strong>Input</strong></h4><pre><code class="language-python">for val in range(1, 11):
is_even = "Even" if val % 2 == 0 else "Odd"
print(val, is_even, sep=' = ')</code></pre><h4 id="output"><strong>Output</strong></h4><pre><code class="language-text">1 = Odd
2 = Even
3 = Odd
4 = Even
5 = Odd
6 = Even
7 = Odd
8 = Even
9 = Odd
10 = Even</code></pre><h1 id="python-while-loop-statement-example">Python While Loop Statement Example</h1><p>Python utilizes the <code>while</code> loop similarly to other popular languages. The <code>while</code> loop evaluates a condition then executes a block of code if the condition is true. The block of code executes repeatedly until the condition becomes false.</p><p>The basic syntax is:</p><pre><code class="language-python">counter = 0
while counter &lt; 10:
# Execute the block of code here as
# long as counter is less than 10</code></pre><p>An example is shown below:</p><pre><code class="language-python">days = 0
week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
while days &lt; 7:
print("Today is " + week[days])
days += 1</code></pre><p>Output:</p><p></p><pre><code class="language-text">Today is Monday
Today is Tuesday
Today is Wednesday
Today is Thursday
Today is Friday
Today is Saturday
Today is Sunday</code></pre><p>Line-by-Line explanation of the above CODE:</p><ol><li>the variable ‘days’ is set to a value 0.</li><li>a variable week is assigned to a list containing all the days of the week.</li><li>while loop starts</li><li>the block of code will be executed until the condition returns ‘true’.</li><li>the condition is ‘days&lt;7’ which roughly says run the while loop until the point the variable days is less than 7</li><li>So when the days=7 the while loop stops executing.</li><li>the days variable gets updated on every iteration.</li><li>When the while loop runs for the first time, the line ‘Today is Monday’ is printed onto the console and the variable days becomes equal to 1.</li><li>Since the variable days is equal to 1 which is less than 7, &nbsp;the while loop is executed again.</li><li>It goes on again and again and when the console prints ‘Today is Sunday’ the variable days is now equal to 7 and the while loop stops executing.</li></ol><h2 id="f-strings-in-python">f-strings in Python</h2><p>In Python version 3.6, a new method of formatting strings was implemented. The new method is called Literal string interpolation (though commonly referred to as an f-string).</p><p>The use of f-string allows the programmer to dynamically insert a variable into a string in a clean and concise manner. In addition to inserting variables into a string this feature also also provides the ability for a programmer to evaluate expressions, join the contents of collection, and even invoke functions within the f-string.</p><p>To perform these dynamic behaviors within an f-string we wrap them inside curly brackets within the string, and prepend a lower case f to the beginning of the string (before the opening quote.</p><h3 id="examples"><strong>Examples</strong></h3><p>Dynamically inserting a variable into a string at runtime:</p><pre><code class="language-python">name = 'Jon Snow'
greeting = f'Hello! {name}'
print(greeting)</code></pre><p>Evaluate an expression in a string:</p><pre><code class="language-python">val1 = 2
val2 = 3
expr = f'The sum of {val1} + {val2} is {val1 + val2}'
print(expr)</code></pre><p>Calling a function and inserting output within a string:</p><pre><code class="language-python">def sum(*args):
result = 0
for arg in args:
result += arg
return result
func = f'The sum of 3 + 5 is {sum(3, 5)}'
print(func)</code></pre><p>Joining the contents of a collection within a string:</p><pre><code class="language-python">fruits = ['Apple', 'Banana', 'Pear']
list_str = f'List of fruits: {", ".join(fruits)}'
print(list_str)</code></pre><h1 id="how-to-install-python-3">How to Install Python 3</h1><p>You can download Python from this official <a href="https://www.python.org/downloads/" rel="nofollow">link</a>. Based on your OS (Windows or Linux or OSX), you might want to install Python 3 following <a href="http://docs.python-guide.org/en/latest/starting/installation/" rel="nofollow">these instructions</a>.</p><h2 id="using-virtual-environments"><strong>Using Virtual Environments</strong></h2><p>It is always a great idea to <a href="https://en.wikipedia.org/wiki/Sandbox_(computer_security)" rel="nofollow">sandbox</a> your Python installation and keep it separate from your <em>System Python</em>. The <em>System Python</em> is the path to Python interpreter, which is used by other modules installed along with your OS.</p><p>It’s <strong><strong>not safe</strong></strong> to install Python Web-frameworks or libraries directly using <em>System Python</em>. Instead, you can use <a href="https://virtualenv.readthedocs.org/en/latest/" rel="nofollow">Virtualenv</a> to create and spawn a separate Python process when you are developing Python applications.</p><h3 id="virtualenvwrapper"><strong>Virtualenvwrapper</strong></h3><p>The <a href="https://virtualenvwrapper.readthedocs.org/en/latest/" rel="nofollow">Virtualenvwrapper module</a> makes it easy for you to manage and sandbox multiple Python sandboxed environments in one machine, without corrupting any modules or services written in Python and used by your machine.</p><p>Of course, most cloud hosted development environments such as <a href="https://www.nitrous.io/" rel="nofollow">Nitrous</a> or <a href="https://c9.io/" rel="nofollow">Cloud9</a> also come with these pre-installed and ready for you to get coding! You can quickly pick a box from your dashboard and start coding after activating a Python 3 environment.</p><p>In <a href="https://c9.io/" rel="nofollow">Cloud9</a>, you need to select the Django box while creating a new development environment.</p><p>A few shell command examples follow. If you wish to copy-paste, do note that the <code>$</code> sign is a shorthand for the terminal prompt, it’s not part of the command. My terminal prompt looks something like this:</p><pre><code class="language-text">alayek:~/workspace (master) $</code></pre><p>And, an <code>ls</code> would look like</p><pre><code class="language-text">alayek:~/workspace (master) $ ls</code></pre><p>But, while writing the same in this documentation, I would be writing it as</p><pre><code class="language-text">$ ls</code></pre><p>Getting back to our discussion, you can create a Python 3 interpreter-included sandbox on Cloud9 by running on your cloud terminal:</p><pre><code class="language-text">$ mkvirtualenv py3 --python=/usr/bin/python3</code></pre><p>You have to run it only once after creating a new box for your project. Once executed, this command would create a new sandboxed virtualenv ready for you to use, named <code>py3</code>.</p><p>To view available virtual environments, you can use</p><pre><code class="language-text">$ workon</code></pre><p>To activate <code>py3</code>, you can use the <code>workon</code> command with the name of the environment:</p><pre><code class="language-text">$ workon py3</code></pre><p>All three terminal commands above would also work on local Linux machines or OSX machines. These are <a href="https://virtualenvwrapper.readthedocs.org/en/latest/#introduction" rel="nofollow">virtualenvwrapper</a> commands; so if you are planning on using them, make sure you have this module installed and added to <code>PATH</code> variable.</p><p>If you are inside a virtual environment; you can easily find that out by checking your terminal prompt. The environment name will be clearly shown in your terminal prompt.</p><p>For instance, when I am inside the <code>py3</code> environment, I will be seeing this as my terminal prompt:</p><pre><code class="language-text">(py3)alayek:~/workspace (master) $</code></pre><p>Notice the <code>(py3)</code> in braces! If for some reason you are not seeing this, even if you are inside a virtual env; you can try doing one of the things <a href="http://stackoverflow.com/questions/1871549/python-determine-if-running-inside-virtualenv" rel="nofollow">mentioned here</a>.</p><p>To get out of a virtual environment or to deactivate one - use this command:</p><pre><code class="language-text">$ deactivate</code></pre><p>Again, this works only with virtualenvwrapper module.</p><h3 id="pipenv"><strong>Pipenv</strong></h3><p>An alternative to using virtualenvwrapper is <a href="https://docs.pipenv.org/">Pipenv</a>. It automatically creates virtual environments for your projects, and maintains a <code>Pipfile</code> which contains the dependencies. Using Pipenv means you no longer need to use pip and virtualenv separately, or manage your own <code>requirements.txt</code> file. For those familiar with JavaScript, Pipenv is similar to using a packaging tool like <code>npm</code>.</p><p>To get started with Pipenv, you can follow this very detailed <a href="https://docs.pipenv.org/install.html#installing-pipenv">guide</a>. Pipenv makes it easy to <a href="https://docs.pipenv.org/basics.html#specifying-versions-of-python">specify which version of Python</a> you wish to use for each project, <a href="https://docs.pipenv.org/basics.html#importing-from-requirements-txt">import</a> from an existing <code>requirements.txt</code> file and <a href="https://docs.pipenv.org/#pipenv-graph">graph</a> your dependencies.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
