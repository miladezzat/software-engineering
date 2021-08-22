---
card: "/images/default.jpg"
tags: [Python]
description: "If you have an interest in Data Science, Web Development, Rob"
author: "Milad E. Fahmy"
title: "The Ultimate Guide to Python: How to Go From Beginner to Pro"
created: "2021-08-16T15:36:52+02:00"
modified: "2021-08-16T15:36:52+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-python3 tag-100days100projects ">
<header class="post-full-header">
<h1 class="post-full-title">The Ultimate Guide to Python: How to Go From Beginner to Pro</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/05/The-Ultimate-Guide-To-Python-1.png 300w,
/news/content/images/size/w600/2020/05/The-Ultimate-Guide-To-Python-1.png 600w,
/news/content/images/size/w1000/2020/05/The-Ultimate-Guide-To-Python-1.png 1000w,
/news/content/images/size/w2000/2020/05/The-Ultimate-Guide-To-Python-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/05/The-Ultimate-Guide-To-Python-1.png" alt="The Ultimate Guide to Python: How to Go From Beginner to Pro">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
</code></pre><ul><li>After that, we will use the brew package manager to install Python. To install and configure <a href="https://brew.sh/">brew</a>, use the following command:</li></ul><pre><code class="language-shell">/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
</code></pre><ul><li>Once brew setup is done, use the following command to update any outdated packages:</li></ul><pre><code class="language-shell">brew update</code></pre><ul><li>Use the following command to install Python:</li></ul><pre><code class="language-shell">brew install python3</code></pre><ul><li>To confirm if Python is installed and configured properly, use the command <code>python3 --version</code>.</li></ul><h3 id="linux-user-">Linux User:</h3><ul><li>To install Python using <code>apt</code>, use the following command: </li></ul><pre><code class="language-shell">sudo apt install python3
</code></pre><ul><li>To install the Python using <code>yum</code>, use the following command:</li></ul><pre><code class="language-shell">sudo yum install python3
</code></pre><ul><li>To confirm if Python is installed and configured properly, use the command <code>python3 --version</code>.</li></ul><h2 id="python-shell-">Python shell:</h2><p>The shell is one of the most useful tools you'll come across. The Python shell gives us the power to quickly test any concept before integrating it into our application.</p><p>Go to the terminal or command line prompt. Enter <code>python3</code> command and you'll get the following output:</p><pre><code class="language-shell">➜ python3.7
Python 3.7.0 (v3.7.0:1bf9cc5093, Jun 26 2018, 23:26:24)
[Clang 6.0 (clang-600.0.57)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
&gt;&gt;&gt;</code></pre><p>In this tutorial, we will learn some concepts with the help of the python3 shell which you can see above. From now on, whenever I mention <strong>go to the Python shell</strong>, it means that you have to use the <code>python3</code> command.</p><p>To learn the remaining concepts we will create a file called "testing" with the extension <code>.py</code>. To run this file we will use the following command:</p><pre><code class="language-shell">python3 testing.py</code></pre><p>Let's go to the Python shell. Type <code>10 + 12</code> after the <code>&gt;&gt;&gt;</code> mark. You'll get the output 22:</p><pre><code class="language-python">&gt;&gt;&gt; 10 + 12
22</code></pre><h2 id="commenting-">Commenting:</h2><p>Comments make it easy to write code as they help us (and others) understand why a particular piece of code was written. Another awesome thing about comments is that they help improve the readability of the code.</p><pre><code class="language-python"># Stay Safe</code></pre><p>When you add the above syntax, the Python interpreter understands that it is a comment. Everything after <code>#</code> is not executed. </p><p>You may be wondering why you should use comments. Imagine you are a developer and you have been assigned to a huge project. The project has more than a thousand lines of code. To understand how everything works you'll need to go line by line and read through all the code.</p><p>What's a better solution than that? Ah-ha! Comments. Comments help us understand why a particular piece of code was written and what it returns or does. Consider it as documentation for every piece of code.</p><h2 id="print-">Print:</h2><p>Other than debugging tools from the editor, the thing which helps developers solve problems most often is a print statement. The print statement is one of the most underrated pieces of syntax in all of programming.</p><p>So how does it help in debugging an issue? Well, consider that you have a module and you want to check the flow of execution to understand or debug it. There are two options. Either you can use a debugger or add a print statement.</p><p>It's not always possible to use a debugger. For example, if you are using the Python shell, then a debugger is not available. In such a scenario, print helps us. Another scenario is when your application is running. You can add a print statement that will display in the logs of your application and monitor them in runtime.</p><p>Python provides a inbuilt print method with the following syntax:</p><pre><code class="language-python">print("Stay safe...")</code></pre><h2 id="indentation-">Indentation:</h2><p>Another interesting part of this language is indentation. Why? Well, the answer is simple: It makes the code readable and well-formatted. It is compulsory in Python to follow the rules of indentation. If proper indentation is not followed you'll get the following error:</p><pre><code class="language-python">IndentationError: unexpected indent</code></pre><p>See, even the errors in Python are so readable and easy to understand. At the start, you may be annoyed by the compulsion of indentation. But with the time you'll understand that indentation is a developer's friend.</p><h2 id="variables-"><strong>Variables:</strong></h2><p>As the name implies, a variable is something that can change. A variable is a way of referring to a memory location used by a computer program.</p><p>Well in most programming languages you need to assign the type to a variable. But in Python, you don’t need to. For example, to declare an integer in C, the following syntax is used: <code>int num = 5;</code>. In Python it's <code>num = 5</code> .</p><p>Go to the Python shell and perform the operation step by step:</p><ul><li><code>Integer</code>: Numerical values that can be positive, negative, or zero without a decimal point.</li></ul><pre><code class="language-python">&gt;&gt;&gt; num = 5
&gt;&gt;&gt; print(num)
5
&gt;&gt;&gt; type(num)
&lt;class 'int'&gt;</code></pre><p>As you can see here we have declared a <code>num</code> variable and assigned 5 as a value. Python's inbuilt &nbsp;<code>type</code> method can be used to check the type of variable. When we check the type of <code>num</code> we see the output &nbsp;<code>&lt;class 'int'&gt;</code>. For now, just focus on the <code>int</code> in that output. <code>int</code> represents an integer.</p><ul><li><code>Float</code>: Similar an integer but with one slight difference – floats are a numerical value with a decimal place.</li></ul><pre><code class="language-python">&gt;&gt;&gt; num = 5.0
&gt;&gt;&gt; print(num)
5.0
&gt;&gt;&gt; type(num)
&lt;class 'float'&gt;</code></pre><p>Here we have assigned a number with a single decimal to the <code>num</code>. When we check the type of <code>num</code> we can see it is <code>float</code>.</p><ul><li><code>String</code>: A formation of characters or integers. They can be represented using double or single quotes.</li></ul><pre><code class="language-python">&gt;&gt;&gt; greet = "Hello user"
&gt;&gt;&gt; print(greet)
Hello user
&gt;&gt;&gt; type(greet)
&lt;class 'str'&gt;</code></pre><p>Here we have assigned a string to <code>greet</code>. The type of greet is a string as you can see from the output.</p><ul><li><code>Boolean</code>: A binary operator with a True or False value.</li></ul><pre><code class="language-python">&gt;&gt;&gt; is_available = True
&gt;&gt;&gt; print(is_available)
True
&gt;&gt;&gt; type(is_available)
&lt;class 'bool'&gt;</code></pre><p>Here we have assigned a True value to <code>is_available</code>. The type of this variable is boolean. You can only assign <strong>True</strong> or <strong>False</strong>. Remember <strong>T</strong> and <strong>F</strong> should be capital or it will give an error as follows:</p><pre><code class="language-shell">&gt;&gt;&gt; is_available = true
Traceback (most recent call last):
File "&lt;stdin&gt;", line 1, in &lt;module&gt;
NameError: name 'true' is not defined</code></pre><ul><li><code>NoneType</code>: This is used when we don't have the value of the variable.</li></ul><pre><code class="language-python">&gt;&gt;&gt; num = None
&gt;&gt;&gt; print(num)
None
&gt;&gt;&gt; type(num)
&gt;&gt;&gt; b = 2</code></pre><p>Let's try our basic arithmetic operations:</p><pre><code class="language-python">&gt;&gt;&gt; a + b # Addition
8
&gt;&gt;&gt; a - b # Subtraction
4
&gt;&gt;&gt; a * b # Multiplication
12
&gt;&gt;&gt; a / b # Division
3.0
&gt;&gt;&gt; a ** b # Exponentiation
36</code></pre><p>To test for other arithmetic operations let's change the value of <code>a</code> and <code>b</code>.</p><pre><code class="language-python">&gt;&gt;&gt; a = 7
&gt;&gt;&gt; b = 3
&gt;&gt;&gt; a % b # Modulus
1
&gt;&gt;&gt; a // b # Floor division
2</code></pre><p>Shorthand arithmetic operations are also available in Python. Refer back to the image above to test them out. To print the output of the shorthand operations use the <code>print</code> statement.</p><h3 id="comparison-operators">Comparison operators</h3><p>These include equal to, greater than, and less than.</p><pre><code class="language-python">&gt;&gt;&gt; a = 5 # Assign
&gt;&gt;&gt; b = 2 # Assign
&gt;&gt;&gt; a &gt; b # Greater than
True
&gt;&gt;&gt; a &lt; b # less then
False
&gt;&gt;&gt; a == b # Equal to
False
&gt;&gt;&gt; a &gt;= 5 # Greater than or equal to
True
&gt;&gt;&gt; b &lt;= 1 # Less than or equal to
False</code></pre><h3 id="logical-operators">Logical operators</h3><p>These operators include not, and, &amp; or.</p><pre><code class="language-python">&gt;&gt;&gt; a = 10
&gt;&gt;&gt; b = 2
&gt;&gt;&gt; a == 2 and b == 10 # and
False
&gt;&gt;&gt; a == 10 or b == 10 # or
True
&gt;&gt;&gt; not(a == 10) # not
False
&gt;&gt;&gt; not(a == 2)
True</code></pre><h2 id="conditional-statements-">Conditional Statements:</h2><p>As the name suggests, conditional statements are used to evaluate if a condition is true or false. </p><p>Many times when you are developing an application you need to check a certain condition and do different things depending on the outcome. In such scenarios conditional statements are useful. If, elif and else are the conditional statements used in Python.</p><p>We can compare variables, check if the variable has any value or if it's a boolean, then check if it's true or false. Go to the Python shell and perform the operation step by step:</p><p><strong>Condition Number 1: </strong>We have an integer and 3 conditions here. The first one is the <code>if</code> condition. It checks if the number is equal to 10. </p><p>The second one is the <code>elif</code> condition. Here we are checking if the number is less than 10. </p><p>The last condition is <code>else</code>. This condition executes when none of the above conditions match. </p><pre><code class="language-python">&gt;&gt;&gt; number = 5
&gt;&gt;&gt; if number == 10:
...     print("Number is 10")
... elif number &lt; 10:
...     print("Number is less than 10")
... else:
...     print("Number is more than 10")
...</code></pre><p> Output:</p><pre><code class="language-shell">Number is less than 10</code></pre><p><strong>Note: </strong>It is not compulsory to check that two conditions are equal in the <code>if</code> condition. You can do it in the <code>elif</code> also.</p><p><strong>Condition Number 2: </strong>We have a boolean and 2 conditions here. Have you noticed how we are checking if the condition is true? If <code>is_available</code>, then print "Yes it is available", else print "Not available".</p><pre><code class="language-python">&gt;&gt;&gt; is_available = True
&gt;&gt;&gt; if is_available:
...     print("Yes it is available")
... else:
...     print("Not available")
...
</code></pre><p> Output:</p><pre><code class="language-shell">Yes it is available</code></pre><p><strong>Condition Number 3: </strong>Here we have reversed condition number 2 with the help of the not operator.</p><pre><code class="language-python">&gt;&gt;&gt; is_available = True
&gt;&gt;&gt; if not is_available:
...     print("Not available")
... else:
...     print("Yes it is available")
...
</code></pre><p>Output:</p><pre><code class="language-shell">Yes it is available</code></pre><p><strong>Condition Number 4:</strong> Here we are declaring the data as None and checking if the data is available or not.</p><pre><code class="language-python">&gt;&gt;&gt; data = None
&gt;&gt;&gt; if data:
...     print("data is not none")
... else:
...     print("data is none")
...
</code></pre><p>Output:</p><pre><code class="language-shell">data is none</code></pre><p><strong>Condition Number 5:</strong> You can also use an inline if in Python. The syntax to achieve this is the following:</p><pre><code class="language-python">&gt;&gt;&gt; num_a = 10
&gt;&gt;&gt; num_b = 5
&gt;&gt;&gt; if num_a &gt; num_b: print("num_a is greater than num_b")
...</code></pre><p>Output:</p><pre><code class="language-shell">num_a is greater than num_b</code></pre><p><strong>Condition Number 6: </strong>You can also use an inline if else in Python. The syntax to achieve this is the following:</p><pre><code class="language-python">expression_if_true if condition else expression_if_false
</code></pre><p>Example:</p><pre><code class="language-python">&gt;&gt;&gt; num = 5
&gt;&gt;&gt; print("Number is five") if num == 5 else print("Number is not five")</code></pre><p>Output:</p><pre><code class="language-shell">Number is five</code></pre><p><strong>Conditional Number 7: </strong>You can also use nested if-else statements. The syntax to achieve this is the following:</p><pre><code class="language-python">&gt;&gt;&gt; num = 25
&gt;&gt;&gt; if num &gt; 10:
...     print("Number is greater than 10")
...     if num &gt; 20:
...       print("Number is greater than 20")
...     if num &gt; 30:
...       print("Number is greater than 30")
... else:
...     print("Number is smaller than 10")
...</code></pre><p>Output:</p><pre><code class="language-shell">Number is greater than 10
Number is greater than 20</code></pre><p><strong>Condition Number 8:</strong> You can also use the <code>and</code> operator in a conditional statement. It states if condition1 and condition2 both are true then execute it.</p><pre><code class="language-python">&gt;&gt;&gt; num = 10
&gt;&gt;&gt; if num &gt; 5 and num &lt; 15:
...     print(num)
... else:
...     print("Number may be small than 5 or larger than 15")
...</code></pre><p>Output:</p><pre><code class="language-shell">10</code></pre><p>As our number is between 5 and 15 we get the output of 10.</p><p><strong>Condition Number 9:</strong> You can also use the <code>or</code> operator in a conditional statement. It states that if either condition1 or condition2 is true then execute it.</p><pre><code class="language-python">&gt;&gt;&gt; num = 10
&gt;&gt;&gt; if num &gt; 5 or num &lt; 7:
...     print(num)
...</code></pre><p>Output:</p><pre><code class="language-shell">10</code></pre><p>Are you confused because the value of <code>num</code> is 10 and our second condition states that <code>num</code> is less than 7? So why do we get the output as 10? It's because of the <code>or</code> condition. As one of the conditions matches, it will execute it.</p><h2 id="for-loops-">For Loops:</h2><p>Another useful method in any programming language is an iterator. If you have to implement something multiple times, what will you do?</p><pre><code class="language-python">print("Hello")
print("Hello")
print("Hello")</code></pre><p>Well, that's one way to do it. But imagine you have to do it a hundred or a thousand times. Well, that's a lot of print statements we have to write. There's a better way called iterators or loops. We can either use a <code>for</code> or <code>while</code> loop.</p><p>Here we are using the range method. It specifies the range until which the loop should be repeated. By default, the starting point is 0.</p><pre><code class="language-python">&gt;&gt;&gt; for i in range(3):
...     print("Hello")
...</code></pre><p>Output:</p><pre><code class="language-shell">Hello
Hello
Hello</code></pre><p>You can also specify the range in this way <code>range(1,3)</code>.</p><pre><code class="language-python">&gt;&gt;&gt; for i in range(1,3):
...     print("Hello")
...</code></pre><p>Output:</p><pre><code class="language-shell">Hello
Hello</code></pre><p>"Hello" is only printed two times as we have specified the range here. Think of the range as <code>Number on right - Number on left</code>.</p><p>Well, you can also add an else statement in the for loop.</p><pre><code class="language-python">&gt;&gt;&gt; for i in range(3):
...     print("Hello")
... else:
...     print("Finished")</code></pre><p>Output:</p><pre><code class="language-shell">Hello
Hello
Hello
Finished</code></pre><p>See our loop iterated 3 times ( 3 - 0 ) and once that is done it executed the else statement.</p><p>We can also nest a for loop inside another for loop.</p><pre><code class="language-python">&gt;&gt;&gt; for i in range(3):
...     for j in range(2):
...       print("Inner loop")
...     print("Outer loop")
...</code></pre><p>Output:</p><pre><code class="language-shell">Inner loop
Inner loop
Outer loop
Inner loop
Inner loop
Outer loop
Inner loop
Inner loop
Outer loop</code></pre><p>As you can see the inner loop print statement executed two times. After that outer loop print statement executed. Again the inner loop executed two times. So what is happening here? If you are confused then consider this to solve it:</p><ul><li>Our Interpreter comes and sees that there is a <code>for</code> loop. It goes down again and checks there is another <code>for</code> loop. </li><li>So now it will execute the inner <code>for</code> loop two times and exit. Once it's finished it knows that outer for loop has instructed it to repeat two more times. </li><li>It starts again and sees the inner for loop and repeats.</li></ul><p>Well, you can also choose to pass a certain <code>for</code> loop condition. What does pass mean here? Well whenever that for loop will occur and the Interpreter sees the <code>pass</code> statement it won't execute it and will move to the next line.</p><pre><code class="language-python">&gt;&gt;&gt; for i in range(3):
...     pass
...</code></pre><p>You will not get any output on the shell.</p><h2 id="while-loops-">While loops:</h2><p>Another loop or iterator available in Python is the <code>while</code> loop. We can achieve some of the same results with the help of a <code>while</code> loop as we achieved with the <code>for</code> loop.</p><pre><code class="language-python">&gt;&gt;&gt; i = 0
&gt;&gt;&gt; while i &lt; 5:
...     print("Number", i)
...     i += 1
...</code></pre><p>Output:</p><pre><code class="language-shell">Number 0
Number 1
Number 2
Number 3
Number 4</code></pre><p>Remember whenever you use a while loop it's important that you add an increment statement or a statement that will end the while loop at some point. If not then the while loop will execute forever.</p><p>Another option is to add a <code>break</code> statement in a <code>while</code> loop. This will break the loop.</p><pre><code class="language-python">&gt;&gt;&gt; i = 0
&gt;&gt;&gt; while i &lt; 5:
...     if i == 4:
...       break
...     print("Number", i)
...     i += 1
...</code></pre><p>Output:</p><pre><code class="language-shell">Number 0
Number 1
Number 2
Number 3</code></pre><p>Here we are breaking the <code>while</code> loop if we find the value of <code>i</code> to be 4.</p><p>Another option is to add an <code>else</code> statement in <code>while</code> loop. The statement will be executed after the while loop is completed.</p><pre><code class="language-python">&gt;&gt;&gt; i = 0
&gt;&gt;&gt; while i &lt; 5:
...     print("Number", i)
...     i += 1
... else:
...     print("Number is greater than 4")
...</code></pre><p>Output:</p><pre><code class="language-shell">Number 0
Number 1
Number 2
Number 3
Number 4
Number is greater than 4</code></pre><p>The <code>continue</code> statement can be used to skip the current execution and to proceed to the next.</p><pre><code class="language-python">&gt;&gt;&gt; i = 0
&gt;&gt;&gt; while i &lt; 6:
...     i += 1
...     if i == 2:
...       continue
...     print("number", i)
...</code></pre><p>Output:</p><pre><code class="language-shell">number 1
number 3
number 4
number 5
number 6</code></pre><h2 id="user-input-">User Input:</h2><p>Imagine you are building a command-line application. Now you have to take the user input and act accordingly. To do that you can use Python's inbuilt <code>input</code> method.</p><p>The syntax to achieve this is as follows:</p><pre><code class="language-python">variable = input(".....")</code></pre><p>Example:</p><pre><code class="language-python">&gt;&gt;&gt; name = input("Enter your name: ")
Enter your name: Sharvin</code></pre><p>When you use the <code>input</code> &nbsp;method and press enter, you'll be prompted with the text that you enter in the <code>input</code> method. Let's check if our assignment is working or not:</p><pre><code class="language-python">&gt;&gt;&gt; print(name)
Sharvin</code></pre><p>There it is! It is working perfectly. Here <code>Sharvin</code> is of the type string.</p><pre><code class="language-python">&gt;&gt;&gt; type(name)
&lt;class 'str'&gt;</code></pre><p>Let's try one more example where we will assign an integer rather than a string and check the type.</p><pre><code class="language-python">&gt;&gt;&gt; date = input("Today's date: ")
Today's date: 12
&gt;&gt;&gt; type(date)
&lt;class 'str'&gt;</code></pre><p>Are you confused? We entered an integer 12 and it's still giving us its type as a string. It's not a bug. It's how input is intended to work. To convert the string to integer we will use typecasting.</p><h2 id="typecasting-">Typecasting:</h2><p>We saw that the <code>input</code> method returns a string for the integer also. Now if we want to compare this output with another integer then we need a way to convert it back to an integer.</p><pre><code class="language-python">&gt;&gt;&gt; date_to_int = int(date)
&gt;&gt;&gt; type(date_to_int)
&lt;class 'int'&gt;</code></pre><p>Here we took the date that we have declared above in the User input section and converted it into the integer using the Python's inbuilt <code>int</code> method. This is called typecasting.</p><p>Basically you can do the following conversion with the help of typecasting:</p><ul><li>integer to string: <code>str()</code></li><li>string to integer: <code>int()</code></li><li>integer to float: <code>float()</code></li></ul><blockquote>Note: Conversion from float to integer is also possible.</blockquote><pre><code class="language-python">&gt;&gt;&gt; type(date)
&lt;class 'str'&gt;
# Converting from string to float
&gt;&gt;&gt; date_to_float = float(date)
&gt;&gt;&gt; type(date_to_float)
&lt;class 'float'&gt;
# Converting from float to string
&gt;&gt;&gt; date_to_string = str(date_to_float)
&gt;&gt;&gt; type(date_to_string)
&lt;class 'str'&gt;
# Converting from float to integer
&gt;&gt;&gt; date_to_int = int(date_to_float)
&gt;&gt;&gt; type(date_to_int)
&lt;class 'int'&gt;</code></pre><h2 id="dictionaries-">Dictionaries:</h2><p>Imagine you want to store some user details. So how can you store these details? Yes, we can use variable to store them as follows:</p><pre><code class="language-python">&gt;&gt;&gt; fname = "Sharvin"
&gt;&gt;&gt; lname = "Shah"
&gt;&gt;&gt; profession = "Developer"</code></pre><p>To access this value we can do the following:</p><pre><code class="language-python">&gt;&gt;&gt; print(fname)
Sharvin</code></pre><p>But is this an elegant and optimized way to access it? The answer is no. To make it more friendly, let's store the data in a key-value dictionary.</p><p>What is a dictionary? A dictionary is a collection that is unordered and mutable ( i.e. it can be updated ).</p><p>Following is the format of the dictionary:</p><pre><code class="language-json">data = {
"key" : "value"
}</code></pre><p>Let's understand the dictionary further by an example:</p><pre><code class="language-python">&gt;&gt;&gt; user_details = {
...     "fname": "Sharvin",
...     "lname": "Shah",
...     "profession": "Developer"
... }</code></pre><h3 id="how-to-access-a-value-in-a-dictionary">How to access a value in a dictionary </h3><p>We can access the value inside a dictionary in two ways. We will take a look at both and then debug them to find out which is better.</p><p>Method 1:<strong> </strong>To access the value of <code>fname</code> key from <code>user_details</code> dictionary we can use the following syntax:</p><pre><code class="language-python">&gt;&gt;&gt; user_details["fname"]
'Sharvin'</code></pre><p>Method 2: We can also access the value of <code>fname</code> key from <code>user_details</code> dictionary using <code>get</code>.</p><pre><code class="language-python">&gt;&gt;&gt; user_details.get("fname")
'Sharvin'</code></pre><p>I know method 1 looks easier to understand. The problem with it occurs when we try to access the data that is not available in our dictionary.</p><pre><code class="language-python">&gt;&gt;&gt; user_details["age"]
Traceback (most recent call last):
File "&lt;stdin&gt;", line 1, in &lt;module&gt;
KeyError: 'age'</code></pre><p>We get a KeyError which indicates that the key is not available. Let's try the same scenario with method 2.</p><pre><code class="language-python">&gt;&gt;&gt; user_details.get("age")</code></pre><p>We do not get anything printed in our console. Let's debug it further to know why this happened. Assign a variable age to our <code>get</code> operation and we will print it in our console.</p><pre><code class="language-python">&gt;&gt;&gt; age = user_details.get("age")
&gt;&gt;&gt; print(age)
None</code></pre><p>So when <code>get</code> doesn't find the key it sets the value to None. Because of this, we do not get any error. Now you may be wondering which one is right. Most of the time using method 2<strong> </strong>makes more sense, but for some strict checking conditions, we need to use method 1.</p><h3 id="how-to-check-if-a-key-exists">How to check if a key exists</h3><p>You may be wondering how to check if the dictionary has a particular key or not in it. Python provides the built-in method <code>keys()</code> to solve this issue.</p><pre><code class="language-python">&gt;&gt;&gt; if "age" in user_details.keys():
...     print("Yes it is present")
... else:
...     print("Not present")
...</code></pre><p>We will get the following output:</p><pre><code class="language-shell">Not present</code></pre><p>What if we want to check if the dictionary is empty or not? To understand this let's declare an empty dictionary as follows:</p><pre><code class="language-python">&gt;&gt;&gt; user_details = {}</code></pre><p>When we use if-else on a dictionary directly it either returns true if data is present or false if empty.</p><pre><code class="language-python">&gt;&gt;&gt; if user_details:
...     print("Not empty")
... else:
...     print("Empty")
...</code></pre><p>Output:</p><pre><code class="language-shell">Empty</code></pre><p>We can also use Python's inbuilt method <code>bool</code> to check if the dictionary is empty or not. Remember bool returns False if the dictionary is empty and True if it is filled.</p><pre><code class="language-python">&gt;&gt;&gt; bool(user_details)
False
&gt;&gt;&gt; user_details = {
...     "fname" : "Sharvin"
... }
&gt;&gt;&gt; bool(user_details)
True</code></pre><h3 id="how-to-update-the-value-of-an-existing-key">How to update the value of an existing key</h3><p>So now we know how to get a particular key and find if it exists – but how do you update it in the dictionary?</p><p>Declare a dictionary as follows:</p><pre><code class="language-python">&gt;&gt;&gt; user_details = {
...     "fname":"Sharvin",
...     "lname": "Shah",
...     "profession": "Developer"
... }</code></pre><p>To update the value use the following syntax:</p><pre><code class="language-python">&gt;&gt;&gt; user_details["profession"] = "Software Developer"
&gt;&gt;&gt; print(user_details)
{'fname': 'Sharvin', 'lname': 'Shah', 'profession': 'Software Developer'}</code></pre><p>Updating a value of key in dictionary is same as assigning a value to the variable.</p><h3 id="how-to-add-a-key-value-pair">How to add a key-value pair</h3><p>The next question is how to add a new value to the dictionary? Let's add an <code>age</code> key with a value of 100.</p><pre><code class="language-python">&gt;&gt;&gt; user_details["age"] = "100"
&gt;&gt;&gt; print(user_details)
{'fname': 'Sharvin', 'lname': 'Shah', 'profession': 'Software Developer', 'age': '100'}</code></pre><p>As you can see a new key-value is added in our dictionary.</p><h3 id="how-to-remove-a-key-value-pair">How to remove a key-value pair</h3><p>To remove a key-value from the dictionary, Python provides an inbuilt method called <code>pop</code>.</p><pre><code class="language-python">&gt;&gt;&gt; user_details.pop("age")
'100'
&gt;&gt;&gt; print(user_details)
{'fname': 'Sharvin', 'lname': 'Shah', 'profession': 'Software Developer'}</code></pre><p>This removes the <code>age</code> key-value pair from the <code>user_details</code> dictionary. We can also use a <code>del</code> operator to delete the value.</p><pre><code class="language-python">&gt;&gt;&gt; del user_details["age"]
&gt;&gt;&gt; print(user_details)
{'fname': 'Sharvin', 'lname': 'Shah', 'profession': 'Software Developer'}</code></pre><p>The <code>del</code> method can also be used to <strong>delete complete dictionary</strong>. Use the following syntax to delete complete dictionary <code>del user_details</code>.</p><h3 id="how-to-copy-a-dictionary">How to copy a dictionary</h3><p>A dictionary cannot be copied in a traditional way. For example, you cannot copy value of <code>dictA</code> to <code>dictB</code> as follows:</p><pre><code class="language-python">dictA = dictB</code></pre><p>To copy the values you need to use the <code>copy</code> method.</p><pre><code class="language-python">&gt;&gt;&gt; dictB = user_details.copy()
&gt;&gt;&gt; print(dictB)
{'fname': 'Sharvin', 'lname': 'Shah', 'profession': 'Software Developer'}</code></pre><h2 id="lists-">Lists:</h2><p>Imagine you have a bunch of data that is not labeled. In other words, each piece of data doesn't have a key that defines it. So how will you store it? Lists to the rescue. They are defined as follows:</p><pre><code class="language-python">data = [ 1, 5, "xyz", True ]</code></pre><p>A list is a collection of random, ordered, and mutable data (i.e., it can be updated).</p><h3 id="how-to-access-list-elements">How to access list elements</h3><p>Let's try to access the first element:</p><pre><code class="language-python">&gt;&gt;&gt; data[1]
5</code></pre><p>Wait what happened here? We are trying to access the first element but we are getting the second element. Why? </p><p>Indexing of the list begins from zero. So what do I mean by this? The indexing of the position of the elements begins from zero. The syntax to access an element is as follows:</p><pre><code class="language-python">list[position_in_list]</code></pre><p>To access the first element we need to access it as follows:</p><pre><code class="language-python">&gt;&gt;&gt; data[0]
1</code></pre><p>You can also specify a range to access the element between those positions.</p><pre><code class="language-python">&gt;&gt;&gt; data[2:4]
['xyz', True]</code></pre><p>Here, the first value represents the start while the last value represents the position until which we want the value.</p><h3 id="how-to-add-an-item-to-a-list">How to add an item to a list</h3><p>To add an item in the list we need to use the append method provided by python.</p><pre><code class="language-python">&gt;&gt;&gt; data.append("Hello")
&gt;&gt;&gt; data
[1, 5, 'abc', True, 'Hello']</code></pre><h3 id="how-to-change-the-value-of-an-item">How to change the value of an item</h3><p>To change the value of an item, use the following syntax:</p><pre><code class="language-python">&gt;&gt;&gt; data[2] = "abc"
&gt;&gt;&gt; data
[1, 5, 'abc', True]</code></pre><h3 id="how-to-remove-an-item-from-a-list">How to remove an item from a list</h3><p>To remove an item from a list we can use the Python's inbuilt <code>remove</code> method.</p><pre><code class="language-python">&gt;&gt;&gt; data.remove("Hello")
&gt;&gt;&gt; data
[1, 5, 'abc', True]</code></pre><h3 id="how-to-loop-through-a-list">How to loop through a list</h3><p>We can also loop through the list to find a certain element and operate on it.</p><pre><code class="language-python">&gt;&gt;&gt; for i in data:
...     print(i)
...</code></pre><p>Output:</p><pre><code class="language-shell">1
5
abc
True
</code></pre><h3 id="how-to-check-if-an-item-exists-or-not">How to check if an item exists or not</h3><p>To check if a particular item exists or not in list we can use if loop as follows:</p><pre><code class="language-python">&gt;&gt;&gt; if 'abc' in data:
...     print("yess..")
...
yess..</code></pre><h3 id="how-to-copy-list-data">How to copy list data</h3><p>To copy list data from one list to another we need to use <code>copy</code> method.</p><pre><code class="language-python">&gt;&gt;&gt; List2 = data.copy()
&gt;&gt;&gt; List2
[1, 5, 'abc', True]</code></pre><h3 id="how-to-check-the-length-of-a-list">How to check the length of a list</h3><p>We can also check the length of list using Python's inbuilt <code>len</code> method.</p><pre><code class="language-python">&gt;&gt;&gt; len(data)
4</code></pre><h3 id="how-to-join-two-lists">How to join two lists</h3><p>To join two list we can use the <code>+</code> operator.</p><pre><code class="language-python">&gt;&gt;&gt; list1 = [1, 4, 6, "hello"]
&gt;&gt;&gt; list2 = [2, 8, "bye"]
&gt;&gt;&gt; list1 + list2
[1, 4, 6, 'hello', 2, 8, 'bye']</code></pre><p>What happens if we try to access a element position which is not available in the list? We get a <code>list index out of range error</code> in such a condition.</p><pre><code class="language-python">&gt;&gt;&gt; list1[6]
Traceback (most recent call last):
File "&lt;stdin&gt;", line 1, in &lt;module&gt;
IndexError: list index out of range</code></pre><h2 id="tuples-">Tuples:</h2><p>The tuple is a data type which is ordered and immutable (i.e. data cannot be changed).</p><p>Let's create a tuple:</p><pre><code class="language-python">&gt;&gt;&gt; data = ( 1, 3 , 5, "bye")
&gt;&gt;&gt; data
(1, 3, 5, 'bye')</code></pre><h3 id="how-to-access-a-tuple-element">How to access a tuple element</h3><p>We can access elements in the tuple the same way as we access them in a list:</p><pre><code class="language-python">&gt;&gt;&gt; data[3]
'bye'</code></pre><p>We can access the index range as follows:</p><pre><code class="language-python">&gt;&gt;&gt; data[2:4]
(5, 'bye')</code></pre><h3 id="how-to-change-a-tuple-s-value">How to change a tuple's value</h3><p>If you are thinking wait – how can we change the value of tuple, then you are right my friend. We cannot change the value of tuple as it is immutable. We get the following error if we try to change the value of a tuple:</p><pre><code class="language-python">&gt;&gt;&gt; data[1] = 8
Traceback (most recent call last):
File "&lt;stdin&gt;", line 1, in &lt;module&gt;
TypeError: 'tuple' object does not support item assignment</code></pre><p>There's a workaround available to change the value of a tuple:</p><pre><code class="language-python">&gt;&gt;&gt; data = ( 1, 3 , 5, "bye")
&gt;&gt;&gt; data_two = list(data) # Convert data to list
&gt;&gt;&gt; data_two[1] = 8 # Update value as list is mutable
&gt;&gt;&gt; data = tuple(data_two) # Convert again to tuple
&gt;&gt;&gt; data
(1, 8, 5, 'bye')
</code></pre><p>All other methods that we have seen in the list are applicable for the tuple also. </p><p><strong>[ Note: Once a tuple is created a new value cannot be added in it. ]</strong>.</p><h2 id="sets-">Sets:</h2><p>Sets are another data type in Python which are unordered and unindexed. Sets are declared as follows:</p><pre><code class="language-python">&gt;&gt;&gt; data = { "hello", "bye", 10, 15 }
&gt;&gt;&gt; data
{10, 15, 'hello', 'bye'}</code></pre><h3 id="how-to-access-a-value">How to access a value</h3><p>As sets are unindexed we cannot directly access the value in a set. Thus to access the value in the set you need to use a for loop.</p><pre><code class="language-python">&gt;&gt;&gt; for i in data:
...     print(i)
...
10
15
hello
bye</code></pre><h3 id="how-to-change-a-value">How to change a value</h3><p>Once the set is created, values cannot be changed.</p><h3 id="how-to-add-an-item">How to add an item &nbsp;</h3><p>To add an item to the set python provides an inbuilt method called <code>add</code>.</p><pre><code class="language-python">&gt;&gt;&gt; data.add("test")
&gt;&gt;&gt; data
{10, 'bye', 'hello', 15, 'test'}</code></pre><h3 id="how-to-check-length">How to check length</h3><p>To check the length of the set we use the <code>len</code> method.</p><pre><code class="language-python">&gt;&gt;&gt; len(data)
5</code></pre><h3 id="how-to-remove-an-item">How to remove an item</h3><p>To remove an item use the <code>remove</code> method:</p><pre><code class="language-python">&gt;&gt;&gt; data.remove("test")
&gt;&gt;&gt; data
{10, 'bye', 'hello', 15}</code></pre><h2 id="functions-and-arguments-">Functions and Arguments:</h2><p>Functions are a handy way to declare an operation that we want to perform. With the help of functions, you can separate logic according to the operation.</p><p>Functions are a block of code that helps us in the reusability of the repetitive logic. Functions can be both inbuilt and user-defined.</p><p>To declare a function we use the <code>def</code> keyword. Following is the syntax of the functions:</p><pre><code class="language-python">&gt;&gt;&gt; def hello_world():
...     print("Hello world")
...
</code></pre><p>Here we are declaring a function which, when called, prints a "Hello world" statement. To call a function we use the following syntax:</p><pre><code class="language-python">&gt;&gt;&gt; hello_world()</code></pre><p>We will get the following output:</p><pre><code class="language-shell">Hello world</code></pre><p>Remember that the <code>()</code> brackets in a function call means to execute it. Remove those round brackets and try the call again.</p><pre><code class="language-python">&gt;&gt;&gt; hello_world</code></pre><p>You'll get the following output:</p><pre><code class="language-shell">&lt;function hello_world at 0x1083eb510&gt;</code></pre><p>When we remove the round brackets from the function call then it gives us a function reference. Here above as you can see the reference of <code>function hello_world</code> points to this memory address <code>0x1083eb510</code>.</p><p>Consider you have to perform an addition operation. You can do it by declaring <code>a</code> and <code>b</code> and then performing the addition.</p><pre><code class="language-python">&gt;&gt;&gt; a = 5
&gt;&gt;&gt; b = 10
&gt;&gt;&gt; a + b
15</code></pre><p>This is one way to go. But now consider that the value of <code>a</code> and <code>b</code> have changed and you need to do it again.</p><pre><code class="language-python">&gt;&gt;&gt; a = 5
&gt;&gt;&gt; b = 10
&gt;&gt;&gt; a + b
15
&gt;&gt;&gt; a = 2
&gt;&gt;&gt; b = 11
&gt;&gt;&gt; a + b
13</code></pre><p>This still looks doable. Now imagine we need to add a set of two numbers a hundred times. The numbers within the set are different for every calculation. That's a lot to do. Don't worry – we have a function at our disposal to solve this issue.</p><pre><code class="language-python">&gt;&gt;&gt; def add(a,b):
...     print(a+b)
...
</code></pre><p>Here we are adding <code>a</code> and <code>b</code> as a compulsory argument to the <code>add</code> function. To call this function we will use the following syntax:</p><pre><code class="language-python">&gt;&gt;&gt; add(10,5)</code></pre><p>Output:</p><pre><code class="language-shell">15</code></pre><p>See how easy it is to define a function and use it? So what happens if we don't pass an argument?</p><pre><code class="language-python">&gt;&gt;&gt; add()
Traceback (most recent call last):
File "&lt;stdin&gt;", line 1, in &lt;module&gt;
TypeError: add() missing 2 required positional arguments: 'a' and 'b'</code></pre><p>Python throws a TypeError and informs us that the function requires two arguments.</p><p>Can you guess what will happen if we pass a third argument?</p><pre><code>&gt;&gt;&gt; add(10,5,1)
Traceback (most recent call last):
File "&lt;stdin&gt;", line 1, in &lt;module&gt;
TypeError: add() takes 2 positional arguments but 3 were given</code></pre><p>Well, Python will inform us that we have passed 3 arguments but there are only 2 positional arguments.</p><p>So what can we do when we don't know how many arguments a function can take? To solve this issue we use args and kwargs.</p><h2 id="args-">Args:</h2><p>When you don't know how many arguments will be passed to the function, use args and kwargs (kwargs are discussed below).</p><p>To pass n number of arguments to a function we use args. We add a <code>*</code> in front of the argument.</p><blockquote>Remember when you attach a <code>*</code> in front, you will be receiving a tuple of arguments. </blockquote><pre><code class="language-python">&gt;&gt;&gt; def add(*num):
...     print(num)
...</code></pre><p>Here <code>*num</code> is an instance of args. Now when we call the function <code>add</code> we can pass in n number of arguments and it won't throw a <code>TypeError</code>.</p><pre><code class="language-python">&gt;&gt;&gt; add(1,2,3)
(1, 2, 3)
&gt;&gt;&gt; add(1,2,3,4)
(1, 2, 3, 4)</code></pre><p>Now to perform the addition operation we will use the Python's builtin function <code>sum</code> </p><pre><code class="language-python">&gt;&gt;&gt; def add(*num):
...     print(sum(num))
...
</code></pre><p>Now when we call the add function we will get the following output:</p><pre><code class="language-python">&gt;&gt;&gt; add(1,2,3) # Function call
6
&gt;&gt;&gt; add(1,2,3,4) # Function call
10</code></pre><h2 id="keyword-arguments-">Keyword Arguments:</h2><p>There are times when we don't know the order of the arguments that will be passed to our function when it's called. In such a scenario we use keyword arguments because you can pass them in any order in your call and our function will know the value. Take a look at this example:</p><pre><code class="language-python">&gt;&gt;&gt; def user_details(username, age):
...     print("Username is", username)
...     print("Age is", age)
...</code></pre><p>Let's call this function as follows:</p><pre><code class="language-python">&gt;&gt;&gt; user_details("Sharvin", 100)</code></pre><p>We will get the following output:</p><pre><code class="language-shell">Username is Sharvin
Age is 100</code></pre><p>Well this looks correct, but imagine if we called our function in this way:</p><pre><code class="language-python">&gt;&gt;&gt; user_details(100, "Sharvin")</code></pre><p>We will get the following output:</p><pre><code class="language-shell">Username is 100
Age is Sharvin</code></pre><p>This does not look right. What happened is <code>username</code> took the value of 100 while <code>age</code> took the value of "Sharvin". In scenarios like this where we don't know the order of arguments we can use keyword arguments when calling the function:</p><pre><code class="language-python">&gt;&gt;&gt; user_details(age=100, username="Sharvin")
</code></pre><p>Output:</p><pre><code class="language-shell">Username is Sharvin
Age is 100</code></pre><h2 id="default-argument-">Default Argument:</h2><p>Suppose there is a condition where we are not sure if a particular argument will get a value or not when the function is called. In such a scenario we can use Default arguments as follows:</p><pre><code class="language-Python">&gt;&gt;&gt; def user_details(username, age = None):
...     print("Username is", username)
...     print("Age is", age)
...</code></pre><p>Here we are assigning a <code>None</code> to our age argument. If we don't pass a second argument while calling the function it will take None as a default value.</p><p>Let's call the function:</p><pre><code class="language-python">&gt;&gt;&gt; user_details("Sharvin")</code></pre><p>Output:</p><pre><code class="language-shell">Username is Sharvin
Age is None</code></pre><p>If we pass in the second argument it will override None and use it as the value.</p><pre><code class="language-python">&gt;&gt;&gt; user_details("Sharvin", 200)
Username is Sharvin
Age is 200</code></pre><p>But what will happen if we assign the first argument in our function as default and the second as a compulsory argument? Go to the Python shell and try this out:</p><pre><code class="language-python">&gt;&gt;&gt; def user_details(username=None, age):
...     print("Username is", username)
...     print("Age is", age)
...</code></pre><p>You'll get the following error:</p><pre><code class="language-shell">  File "&lt;stdin&gt;", line 1
SyntaxError: non-default argument follows default argument</code></pre><blockquote><strong>Remember:</strong> All compulsory arguments must be declared first and then the default argument must be declared.</blockquote><h2 id="kwargs-">kwargs:</h2><p>There can be a situation where you don't know how many keyword arguments will be passed into the function. In such a scenario we can use Kwargs.</p><p>To use kwargs we put <code>**</code> in front of the argument. </p><blockquote><strong>Remember:</strong> When you attach a <code>**</code> in front, you will be receiving a dictionary of arguments. </blockquote><p>Let's understand this by example. We will declare a function which accepts username as it's argument with <code>**</code> in front of it.</p><pre><code class="language-python">&gt;&gt;&gt; def user(**username):
...     print(username)
...</code></pre><p>When we call the <code>user</code> function as follows we will receive a dictionary.</p><pre><code class="language-python">&gt;&gt;&gt; user(username1="xyz",username2="abc")</code></pre><p>Output:</p><pre><code class="language-shell">{'username1': 'xyz', 'username2': 'abc'}</code></pre><p>So what's happening here? It looks the same as args, right? </p><p>No, it's not. In args, you cannot access a particular value by its name as it is in the form of a tuple. Here we get the data in the form of a dictionary so we can easily access the value. </p><p>Consider this example:</p><pre><code class="language-python">&gt;&gt;&gt; def user(**user_details):
...     print(user_details['username'])
...</code></pre><p>Let's call our function:</p><pre><code class="language-python">&gt;&gt;&gt; user(username="Sharvin",age="1000")</code></pre><p>And you'll get the following output:</p><pre><code class="language-shell">Sharvin</code></pre><h2 id="scope-">Scope:</h2><p>A scope defines where a variable or function is available. There are two types of scope in Python: Global and Local.</p><h3 id="global-scope">Global Scope</h3><p>A variable or function created in the main body of Python code is called a global variable or function and is part of the global scope. For example:</p><pre><code class="language-python">&gt;&gt;&gt; greet = "Hello world"
&gt;&gt;&gt; def testing():
...     print(greet)
...
&gt;&gt;&gt; testing()
Hello world</code></pre><p>Here the variable <code>greet</code> is available globally because it is declared in the body of the program.</p><h3 id="local-scope">Local Scope</h3><p>A variable or function created inside a function is called a local variable or function and is part of the local scope:</p><pre><code class="language-python">&gt;&gt;&gt; def testing():
...     greet = "Hello world"
...     print(greet)
...
&gt;&gt;&gt; testing()
Hello world</code></pre><p>Here <code>greet</code> is created inside the testing function and is only available there. Let's try to access it in our main body and see what happens:</p><pre><code class="language-python">&gt;&gt;&gt; print(greet)
Traceback (most recent call last):
File "&lt;stdin&gt;", line 1, in &lt;module&gt;
NameError: name 'greet' is not defined</code></pre><p><strong>Remember: </strong>Restart the Python console by pressing ctrl + d and starting the shell again by using the <code>python3</code> command before testing the code above. The first example has you declare the <code>greet</code> variable in the global scope meaning it will still be available in memory when you run the second example.</p><p>As <code>greet</code> is not available globally we get the error that it is not defined.</p><h2 id="return-statement-">Return Statement:</h2><p>Until now our functions are pretty simple. They are receiving data, processing it, and printing them. But in the real world, you need a function to return output so that it can be used in different operations.</p><p>To achieve this, return statements are used. Remember, return statements are only part of functions and methods. The syntax for the return statement is quite easy.</p><pre><code class="language-python">&gt;&gt;&gt; def add(a, b):
...     return a + b
...
&gt;&gt;&gt; add(1,3)
4</code></pre><p>Instead of printing our addition, we are returning the output. The value of the returned output can also be stored in a variable.</p><pre><code class="language-python">&gt;&gt;&gt; sum = add(5,10)
&gt;&gt;&gt; print(sum)
15</code></pre><h2 id="lambda-expression-">Lambda Expression:</h2><p>Consider a situation where you don't want to perform much computation in a function. In such a situation writing a full-fledged function doesn't make sense. To solve this we use a lambda expression or lambda function.</p><p>So what is a lambda expression? It is an anonymous function and they are restricted to a single expression. The lambda expression can take n number of arguments.</p><p>The syntax for lambda expression is:</p><pre><code class="language-python">variable = lambda arguments: operation</code></pre><p>Let's understand it more by example:</p><pre><code class="language-python">&gt;&gt;&gt; sum = lambda a: a + 10</code></pre><p>Here we have declared a variable <code>sum</code> which we are using to call the lambda function. <code>a</code> represents the argument that is passed to that function.</p><p>Let's call our function:</p><pre><code class="language-python">&gt;&gt;&gt; x(5)
15</code></pre><h2 id="list-comprehension-">List comprehension:</h2><p>Consider a situation where you want a list of squares. Normally you'll declare a &nbsp;<code>squares</code> list and then in a for loop you'll square out the numbers.</p><pre><code class="language-python">&gt;&gt;&gt; squares = []
&gt;&gt;&gt; for x in range(10):
...     squares.append(x**2)
...
&gt;&gt;&gt; squares
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]</code></pre><p>Well this is doable, but we can achieve this in a single line with the help of list comprehension. </p><p>There are two ways to achieve this. Let's understand both of them.</p><pre><code class="language-python">&gt;&gt;&gt; squares = list(map(lambda x: x**2, range(10)))
&gt;&gt;&gt; squares
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]</code></pre><p>Here we are using <code>list</code> constructor to build a list and inside that lambda function which squares out the number. Another way to achieve the same result is as follows:</p><pre><code class="language-python">&gt;&gt;&gt; squares = list(x**2 for x in range(10))
&gt;&gt;&gt; squares
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]</code></pre><p>I prefer this way because it is easier to more concise and easier to understand.</p><p>What about when we have a condition where we want a set of two numbers that are the same? Well, we need to write two for loops and one if loop.</p><p>Let's see how that will look:</p><pre><code class="language-python">&gt;&gt;&gt; num_list = []
&gt;&gt;&gt; for i in range(10):
...     for j in range(10):
...       if i == j:
...               num_list.append((i,j))
...
&gt;&gt;&gt; num_list
[(0, 0), (1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6), (7, 7), (8, 8), (9, 9)]</code></pre><p>That's a lot of work. And in terms of readability it's hard to understand. </p><p>Let's use list comprehension to achieve the same result.</p><pre><code class="language-python">&gt;&gt;&gt; num_list = list((i,j) for i in range(10) for j in range(10) if i == j)
&gt;&gt;&gt; num_list
[(0, 0), (1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6), (7, 7), (8, 8), (9, 9)]</code></pre><p>See how easy it is to get the same output in a single expression? Well, that's the power of list comprehension.</p><h2 id="oop-concepts-">OOP concepts:</h2><p>Python is a multi-paradigm programming language. It means Python can use different approaches to solve a problem. One of the paradigms is procedural or functional programming. It structures the code like a recipe – a set of steps in the form of functions and code blocks. </p><p>Another approach to solving the problem is by creating classes and objects. This is known as object-oriented oriented programming. An object is a collection of data (variables) and methods that act on those data. And classes are a blueprint for each object.</p><p>The important thing to understand in object-oriented programming is that objects are at the center of the paradigm – they not only represent the data but also the structure of the program.</p><p>You can choose the paradigm that best suits the problem at hand, mix different paradigms in one program, and/or switch from one paradigm to another as your program evolves.</p><h3 id="advantages-of-object-oriented-programming">Advantages of object oriented programming</h3><ul><li><strong>Inheritance:</strong> This is one of the most useful concepts in OOP. It specifies that the child object will have all the properties and behavior of the parent object. Thus Inheritance allows us to define a class that inherits all the methods and properties from another class.</li><li><strong>Polymorphism:</strong> To understand polymorphism let’s divide the word into two parts. The first part "poly" means many and "morph" means to form or shape. Thus polymorphism means one task can be performed in many different ways. <br><br>For example, you have a class <code>animal</code>, and all animals speak. But they speak differently. Here, the “speak” behavior is polymorphic and depends on the animal. So, the abstract “animal” concept does not actually “speak”, but specific animals (like dogs and cats) have a concrete implementation of the action “speak”. <br><br>Polymorphism means the same function name or method name being used for different types.</li><li><strong>Encapsulation:</strong> In object-oriented programming you can restrict access to methods and variables – we can make the methods and variables private. This can prevent the data from being modified by accident and is known as encapsulation.</li></ul><p>First, we will understand classes, objects, and constructors. Then after that, we will look into the above properties again. If you already know about classes, objects, and constructors, feel free to skip ahead.</p><h2 id="classes-">Classes:</h2><p>There are primitive data structures available in Python, for example, numbers, strings, and lists. These can all be used for simple representations like name, place, cost, and so on.</p><p>But what if we have more complex data? If there is a pattern in the repetition of the properties of that data, what can we do?</p><p>Suppose we have 100 different animals. Every animal has a name, age, legs, etc. What if we want to add other properties to each animal, or one more animal gets added to that list? To manage such a complex scenario we need classes.</p><p>According to the official <a href="https://docs.python.org/3/tutorial/classes.html">Python documentation</a>: </p><blockquote>Classes provide a means of bundling data and functionality together. Creating a new class creates a new type of object, allowing new instances of that type to be made.</blockquote><p>Each class instance can have attributes attached to it for maintaining its state. Class instances can also have methods (defined by its class) for modifying its state.</p><p>Syntax of class:</p><pre><code class="language-python">class ClassName:
&lt;expression-1&gt;
.
.
.
&lt;expression-N&gt;</code></pre><p>We use <code>class</code> keyword to define a class. We will define a <code>class Car</code>.</p><pre><code class="language-python">class Car:
pass</code></pre><h2 id="methods-">Methods:</h2><p>Methods look the same as functions. The only difference is that methods are dependent on an object. A function can be invoked by name while methods need to be invoked by using their class reference. They are defined inside the class.</p><p>In our example, let's create two methods. One is an engine and another is a wheel. These two methods define the parts available in our car.</p><p>The below program will give us a better idea of classes:</p><pre><code class="language-python">&gt;&gt;&gt; class Car:
...     def engine(self):
...       print("Engine")
...
&gt;&gt;&gt; Car().engine()
Engine</code></pre><p>Here we are calling the <code>engine</code> method by using the <code>Car()</code> reference.</p><p>To summarize, the class provides a blueprint of what should be defined but it does not provide any real content. The <code>Car</code> class above defines the engine but it will not state what a specific car’s engine is. It is specified by the object.</p><h2 id="objects-">Objects:</h2><p>The object is an instance of the class. Let’s consider the above example of a car. Here Car is our <code>class</code> and <code>toyota</code> is the <code>object</code> of the car. We can create multiple copies of the object. Every object must be defined using the class. </p><p>The syntax for creating an object is:</p><pre><code class="language-python">toyota = Car()
</code></pre><p>Let’s consider our <code>Car</code> example to understand objects a bit better:</p><pre><code class="language-python">class Car:
def engine(self):
print("Engine")
def wheel(self):
print("Wheel")
toyota = Car()</code></pre><p>The above <code>toyota = Car()</code> is a <strong>class object</strong>. Class objects support two kinds of operations: attribute references and instantiation. </p><p>Class instantiation uses function notation. The instantiation operation (“calling” a class object) creates an empty object.</p><p>Now we can call different methods from our class <code>Car</code> using the object <code>toyota</code> that we have created. let’s call the method <code>engine</code> and <code>wheel</code>.</p><p>Open your editor and create a file named <code>mycar.py</code>. In that file copy the code below:</p><pre><code class="language-python">class Car:
def engine(self):
print("Engine")
def wheel(self):
print("Wheel")
if __name__ == "__main__":
toyota = Car()
toyota.engine()
toyota.wheel()</code></pre><p>Save the above code. Now let's take a closer look at our program.</p><p>Here we are creating a <code>toyota</code> object with the help of <code>Car</code> class. The <code>toyota.engine()</code> is a method object. What exactly happens when a method object is called? </p><p>In the call <code>toyota.engine()</code> doesn't take any argument but if you see the method declaration we can see that it takes a <code>self</code> argument. </p><p>You may be confused about why it is not throwing an error. Well whenever we use a method object, the call <code>toyota.engine()</code> is converted to <code>Car.engine(toyota)</code>. We will understand more about the self in the upcoming section.</p><p>Run the program using the following command.</p><pre><code class="language-shell">python mycar.py
</code></pre><p>You'll get the following output:</p><pre><code class="language-shell">Engine
Wheel</code></pre><h2 id="constructor-">Constructor:</h2><p>The <code>__init__</code> method is the constructor method in Python. The constructor method is used to initialize the data.</p><p>Go to the Python shell and enter this example:</p><pre><code class="language-python">&gt;&gt;&gt; class Car():
...     def __init__(self):
...       print("Hello I am the constructor method.")
...
</code></pre><p>When we will call our class we will get the following output:</p><pre><code class="language-python">&gt;&gt;&gt; toyota = Car()
Hello I am the constructor method.</code></pre><p><strong>Note:</strong> You will never have to call the <strong>init</strong>() method – it gets called automatically when you create a class instance.</p><h2 id="instance-attributes-">Instance attributes:</h2><p>All the classes have objects and all the objects have attributes. Attributes are the properties. We use <code>__init__()</code> method to specify an object’s initial attribute.</p><p>Let’s consider our car example:</p><pre><code class="language-python">class Car():
def __init__(self, model):
self.model = model  #instance attribute</code></pre><p>In our example, each <code>Car()</code> has a specific model. Thus instance attributes are unique data to each instance.</p><h2 id="class-attributes-">Class attributes:</h2><p>We saw that instance attributes are specific to each object but class attributes are the same for all the instances. Let us look at the example of the car with the help of class attributes.</p><pre><code class="language-python">class Car():
no_of_wheels = 4 #class attribute</code></pre><p>So each car can have different models but all the cars will have only 4 wheels.</p><h2 id="self-">Self:</h2><p>Now let’s understand what <code>self</code> means and how we use it in object-oriented programming. <code>self</code> represents the instance of a class. By using the <code>self</code> keyword we can access the data initialized in the constructor and methods of a class.</p><p>Let's look at an example of how <code>self</code> can be used. Let’s create a method named <code>brand</code> under our class <code>Car</code>. </p><p>Inside that <code>__init__</code> method, we will pass a model by passing our car’s model name when we are instantiating our object. This name can be accessed anywhere in the class, for example <code>self.model</code> in our case.</p><p>Go to the file named <code>mycar.py</code> and replace old code with this code:</p><pre><code class="language-python">class Car():
def __init__(self, model):
self.model = model
def brand(self):
print("The brand is", self.model)
if __name__ == "__main__":
car = Car("Bmw")
car.brand()
</code></pre><p>Now when we run our above program using the following command:</p><pre><code class="language-shell">python mycar.py</code></pre><p>We will get the following output:</p><pre><code class="language-shell">The brand is Bmw
</code></pre><p><strong>Note: </strong><code>self</code> is a convention and not a real Python keyword. <code>self</code> is an argument in a method and we can use another name in place of it. But it is recommended to use <code>self</code> because it increases the readability of &nbsp;your code.</p><h2 id="inheritance-">Inheritance:</h2><p>Inheritance refers to when a class inherits the property of another class.</p><p>The class from which properties are inherited is called the base class. The class which inherits the property of another class is called the derived class.</p><p>Inheritance can be defined as a parent and child relationship. The child inherits the properties of the parent. Thus making the child a derived class while parent is a base class. Here the term property refers to attributes and methods.</p><p>The syntax for a derived class definition looks like this:</p><pre><code class="language-python">class DerivedClassName(BaseClassName):
&lt;statement-1&gt;
.
.
.
&lt;statement-N&gt;</code></pre><p>It’s important to note that child classes override or extend the attributes and behaviors of parent class methods. This is to say that child classes inherit all of the the attributes and behaviors of their parents – but they're also able to specify different behavior to follow.</p><p>The most basic type of class is an object, which generally all other classes inherit as their parent. Let’s modify our previous example to understand how inheritance works.</p><p>We will create a base class named <code>vehicle</code>:</p><pre><code class="language-python">class Vehicle:
def __init__(self, name):
self.name = name
def getName(self):
return self.name</code></pre><p>We have created a class <code>Vehicle</code> and instantiated a constructor with <code>self.name</code> which we are using in <code>getName</code> method. Whenever this method will be called, it will return the <code>name</code> that has been passed when an object is instantiated for that class.</p><p>Now let’s create a child class <code>Car</code>:</p><pre><code class="language-python">class Vehicle:
def __init__(self, name):
self.name = name
def getName(self):
return self.name
class Car(Vehicle):
pass</code></pre><p><code>Car</code> is a child class of <code>Vehicle</code>. It inherits all the method and attributes of parent class. </p><p>Now let’s use methods and attribute from the <code>Vehicle</code> class in our child class <code>Car</code>.</p><pre><code class="language-python">class Vehicle:
def __init__(self, name, color='silver'):
self.name = name
self.color = color
def get_name(self):
return self.name
def get_color(self):
return self.color
class Car(Vehicle):
pass
audi = Car("Audi r8")
print("The name of our car is", audi.get_name(), "and color is", audi.get_color())</code></pre><p>Let's understand what we have done here. </p><p>We have declared a class named <code>Vehicle</code> with a constructor that takes name as an argument while color has a default argument. </p><p>We have two methods inside it. <code>get_name</code> returns name while <code>get_color</code> returns the color. We have instantiated an object and passed the car name. </p><p>One thing you'll notice here that we are using base class methods in our child class declaration.</p><p>Run the above program using the following command:</p><pre><code class="language-shell">python mycar.py</code></pre><p>Output:</p><pre><code>The name of our car is Audi r8 and color is silver
</code></pre><p><br>We can also override a parent method or attribute. In the above example, we have defined our vehicle color has silver. But what if the color of our car is black? </p><p>Now for every child class, we can’t make changes in the parent class. There comes the overriding functionality.</p><pre><code class="language-python">class Vehicle:
def __init__(self, name, color='silver'):
self.name = name
self.color = color
def get_name(self):
return self.name
def get_color(self):
return self.color
class Car(Vehicle):
def get_color(self):
self.color = 'black'
return self.color
audi = Car("Audi r8")
print("The name of our car is", audi.get_name(), "and color is", audi.get_color()</code></pre><p>As you can see in the above program, I have not instantiated a constructor. The reason behind this is that our child class <code>Car</code> is only using attributes from the <code>Vehicle</code> class and it is already inheriting them. So in such a scenario, there is no need to re-instantiate these attributes.</p><p>Now when we run the above program we will get the following output:</p><pre><code class="language-shell">The name of our car is Audi r8 and color is black
</code></pre><h2 id="super-">Super:</h2><p><code>super()</code> &nbsp;returns a temporary object of the superclass that then allows us to call that superclass’s methods. </p><p>Calling the previously built methods with <code>super()</code> saves us from needing to rewrite those methods in our subclass, and allows us to swap out superclasses with minimal code changes. Thus <code>super</code> extends the functionality of the inherited method.</p><p>Let’s extend our car example using <code>super()</code>. We will instantiate a constructor with <code>brand_name</code> and <code>color</code> in the parent class, <code>Vehicle</code>. Now we will call this constructor from our child class (<code>Car</code>) using <code>super</code>. We will create a <code>get_description</code> method which is returning <code>self.model</code> from <code>Car</code> class and <code>self.brand_name</code>, <code>self.color</code> from the <code>Vehicle</code> class.</p><pre><code class="language-python">class Vehicle:
def __init__(self, brand_name, color):
self.brand_name = brand_name
self.color = color
def get_brand_name(self):
return self.brand_name
class Car(Vehicle):
def __init__(self, brand_name, model, color):
super().__init__(brand_name, color)
self.model = model
def get_description(self):
return "Car Name: " + self.get_brand_name() + self.model + " Color:" + self.color
c = Car("Audi ",  "r8", " Red")
print("Car description:", c.get_description())
print("Brand name:", c.get_brand_name())</code></pre><p>When we run the above program we get following output:</p><pre><code class="language-shell">Car description: Car Name: Audi r8 Color: Red
Brand name: Audi</code></pre><h2 id="multiple-inheritance-">Multiple Inheritance:</h2><p>When a class inherits the method and attributes from multiple parent class then it is called multiple inheritance. This allows us to use the property from multiple base classes or parent classes in a derived or child class.</p><p>The general syntax of multiple Inheritance is as follows:</p><pre><code class="language-python">class DerivedClassName(Base1, Base2, Base3):
&lt;statement-1&gt;
.
.
.
&lt;statement-N&gt;</code></pre><p>Let’s extend our vehicle example using the multiple inheritance property. Here in this example, we will create 3 classes i.e. <code>Vehicle</code>, <code>Cost</code> and <code>Car</code></p><p>The classes <code>Vehicle</code> and <code>Cost</code> will be the Parent class. A <code>Vehicle</code> class represents the general property while the <code>Cost</code> class represents its pricing. </p><p>As <code>Car</code> has a general property and cost will have two parent classes. Thus we will inherit multiple parent classes.</p><pre><code class="language-python">class Vehicle:
def __init__(self, brand_name):
self.brand_name = brand_name
def get_brand_name(self):
return self.brand_name
class Cost:
def __init__(self, cost):
self.cost = cost
def get_cost(self):
return self.cost
class Car(Vehicle, Cost):
def __init__(self, brand_name, model, cost):
self.model = model
Vehicle.__init__(self, brand_name)
Cost.__init__(self, cost)
def get_description(self):
return self.get_brand_name() + self.model + " is the car " + "and it's cost is " + self.get_cost()
c = Car("Audi ",  "r8", "2 cr")
print("Car description:", c.get_description())</code></pre><p>Here you will find one thing in the above program that is different from all the other programs in this tutorial. I have used <code>Vehicle.__init__(self, brand_name)</code> in the constructor of <code>Car</code> class. This is one way of calling attributes from the parent class. Another was is <code>super</code> which I have explained above. </p><p>When we run the above program we will get the following output:</p><pre><code class="language-python">Car description: Audi r8 is the car and it's cost is 2 cr
</code></pre><p>Though it can be used effectively, multiple inheritance should be done with care so that our programs do not become ambiguous and difficult for other programmers to understand.</p><h2 id="polymorphism-">Polymorphism:</h2><p>The word polymorphism means having many forms. In programming, polymorphism means same function name (but different signatures) being uses for different types.</p><p>Let’s extend our car program using polymorphism. We will create two classes, <code>Car</code> and <code>Bike</code>. Both the classes have common method or function, but they are printing different data. The program is pretty self-explanatory:</p><pre><code class="language-python">class Car:
def company(self):
print("Car belongs to Audi company.")
def model(self):
print("The Model is R8.")
def color(self):
print("The color is silver.")
class Bike:
def company(self):
print("Bike belongs to pulsar company.")
def model(self):
print("The Model is dominar.")
def color(self):
print("The color is black.")
def func(obj):
obj.company()
obj.model()
obj.color()
car = Car()
bike = Bike()
func(car)
func(bike)</code></pre><p>When we run the above code we will get the following output:</p><pre><code class="language-shell">Car belongs to Audi company.
The Model is R8.
The color is silver.
Bike belongs to pulsar company.
The Model is dominar.
The color is black.</code></pre><h2 id="encapsulation-">Encapsulation:</h2><p>In most object-oriented programming, we can restrict access to methods and variables. This can prevent the data from being modified by accident and is known as encapsulation.</p><p>Let’s use encapsulation in our car example. Now imagine we have a super-secret engine. In the first example, we will hide our engine using a <strong>private variable</strong>. In the second example, we will hide our engine using a <strong>private method</strong>.</p><p><strong>Example 1:</strong></p><pre><code>class Car:
def __init__(self):
self.brand_name = 'Audi '
self.model = 'r8'
self.__engine = '5.2 L V10'
def get_description(self):
return self.brand_name + self.model + " is the car"
c = Car()
print(c.get_description)
print(c.__engine)</code></pre><p>In this example <code>self.__engine</code> is a private attribute. When we run this program we will get the following output.</p><pre><code class="language-shell">Audi r8 is the car
AttributeError: 'Car' object has no attribute '__engine'</code></pre><p>We get an error that <code>Car</code> object doesn't have _engine because it is a private object.</p><p><strong>Example 2:</strong></p><p>We can also define a private method by adding <code>__</code> in front of the method name. Following is the example of how we can define a private method.</p><pre><code class="language-python">class Car:
def __init__(self):
self.brand_name = 'Audi '
self.model = 'r8'
def __engine(self):
return '5.2 L V10'
def get_description(self):
return self.brand_name + self.model + " is the car"
c = Car()
print(c.get_description())
print(c.__engine()) </code></pre><p>In this example <code>def __engine(self)</code> is a private method. When we run this program we will get the following output.</p><pre><code class="language-shell">Audi r8 is the car
AttributeError: 'Car' object has no attribute '__engine'
</code></pre><p>Now suppose we want to access the private attribute or method we can do it in the following way:</p><pre><code class="language-python">class Car:
def __init__(self):
self.brand_name = 'Audi '
self.model = 'r8'
self.__engine_name = '5.2 L V10'
def __engine(self):
return '5.2 L V10'
def get_description(self):
return self.brand_name + self.model + " is the car"
c = Car()
print(c.get_description())
print("Accessing Private Method: ", c._Car__engine())
print("Accessing Private variable: ", c._Car__engine_name)</code></pre><p>The output of the following program is:</p><pre><code class="language-shell">Audi r8 is the car
Accessing Private Method:  5.2 L V10
Accessing Private variable:  5.2 L V10</code></pre><p>Encapsulation gives you more control over the degree of coupling in your code. It allows a class to change its implementation without affecting other parts of the code.</p><h2 id="decorator-">Decorator:</h2><p>Imagine you have to extend the functionality of multiple functions. How will you do that? </p><p>Well, one way is you can make functional calls and in that function, you can handle it. Making changes in 30 to 40 function calls and remembering where to place the call is a messy task. But the more elegant way provided by Python is with decorators.</p><p>What is a decorator? A decorator is a function that takes a function and extends its functionality without modifying it explicitly. Well, I understand if you are still confused about what decorators are. Don't worry – we have a tool named example to explain it.</p><p>Let's try an example to understand the decorator. There are two ways to write a decorator.</p><h3 id="method-1">Method 1</h3><p>We declare a decorator function and in the arguments of the function we expect the function to be passed as an argument. Inside that, we write a wrapper function where operations are carried out and it is returned.</p><pre><code class="language-python">&gt;&gt;&gt; def my_decorator(func):
...     def wrapper():
...       print("Line Number 1")
...       func()
...       print("Line Number 3")
...     return wrapper
...
&gt;&gt;&gt; def say_hello():
...     print("Hello I am line Number 2")
...</code></pre><p>To call the function we assign the decorator with <code>say_hello</code> as an argument.</p><pre><code class="language-python">&gt;&gt;&gt; say_hello = my_decorator(say_hello)</code></pre><p>We can also check the reference using <code>say_hello</code>. We will get the output that tells us it has been wrapped by the <code>my_decorator</code> function.</p><pre><code class="language-python">&lt;function my_decorator.&lt;locals&gt;.wrapper at 0x10dc84598&gt;</code></pre><p>Let's call our <code>say_hello</code> function:</p><pre><code class="language-python">&gt;&gt;&gt; say_hello()
Line Number 1
Hello I am line Number 2
Line Number 3</code></pre><p>See the magic the line "Hello I am line Number 2" gets printed in between Line Number 1 and 3 because the function call gets executed there.</p><p>Method 1 is clunky, and because of that many people prefer a different approach.</p><h3 id="method-2">Method 2</h3><p>Here our decorator declaration remains same but we change how the call is assigned to that decorator. Whichever function requires that decorator wraps itself with <code>@decorator_name</code>.</p><pre><code class="language-python">&gt;&gt;&gt; def my_decorator(func):
...     def wrapper():
...       print("Line Number 1")
...       func()
...       print("Line Number 3")
...     return wrapper
...
&gt;&gt;&gt; @my_decorator
... def say_hello():
...     print("Hello I am line Number 2")
...
&gt;&gt;&gt; say_hello()</code></pre><p>Output is the same:</p><pre><code class="language-shell">Line Number 1
Hello I am line Number 2
Line Number 3</code></pre><p>A decorator is a powerful tool and it is used in the following development scenarios of an application:</p><ul><li>Setup logger</li><li>Setup configuration</li><li>Setup Error catching</li><li>Extending common functionality for all function and classes</li></ul><h2 id="exceptions-">Exceptions:</h2><p>When we were learning various syntax we came across various errors. Those errors occurred because of the syntax. But in a real-world application, errors (or commonly known as bugs) not only occur due to syntax issues but also because of network errors or some other cause.</p><p>To handle these issues we use Try - Except. In <code>try</code> block, we write the expression that we want to be executed, while in <code>except</code> block we catch the error. The Try-Except block looks as follows:</p><pre><code class="language-python">try:
expression
except:
catch error</code></pre><p>Let's understand this by an example:</p><pre><code class="language-python">&gt;&gt;&gt; try:
...     print(value)
... except:
...     print("Something went wrong")
...</code></pre><p>Here we are trying to print the value variable but it is not defined. So we get the following output:</p><pre><code class="language-shell">Something went wrong</code></pre><p>You may be thinking that the line "something went wrong" is not that helpful. So how can we know what went wrong here? </p><p>We can print the exception and use it to find out what went wrong. Let's test this in our example:</p><pre><code class="language-python">&gt;&gt;&gt; try:
...     print(value)
... except Exception as e:
...     print(e)
...</code></pre><p>And the result is:</p><pre><code class="language-shell">name 'value' is not defined</code></pre><p>Whoa! That's magic. It is notifying me that 'value' is not defined.</p><p>Python also provides a tool named <code>raise</code>. Suppose you don't want a certain condition to occur and if it occurs you want to raise it. In such condition you can use <code>raise</code>. Consider the example below:</p><pre><code class="language-python">&gt;&gt;&gt; i = 5
&gt;&gt;&gt; if i &lt; 6:
...     raise Exception("Number below 6 are not allowed")
...</code></pre><p>The output we get is as follows:</p><pre><code class="language-shell">Traceback (most recent call last):
File "&lt;stdin&gt;", line 2, in &lt;module&gt;
Exception: Number below 6 are not allowed</code></pre><p>There are many sub-types of Exceptions, so I recommend that you go through the <a href="https://docs.python.org/3/tutorial/errors.html#errors-and-exceptions">Python Documentation</a> to understand them.</p><h2 id="package-import-">Package Import:</h2><p>You have learned the basics of Python and now you are all ready to build awesome applications. But hold on – we are still missing some important topics.</p><p>Without package import, you will be forced to write everything in one single file. Imagine what a mess it will be.</p><p>Create two files named <code>main.py</code> and <code>hello.py</code>. Remember both file needs to be in the same directory.</p><p>Under <code>hello.py</code> copy paste the following code:</p><pre><code class="language-python">def say_hello():
print("Hello world")</code></pre><p>Under <code>main.py</code> copy paste the following code:</p><pre><code class="language-python">import hello
if __name__ == "__main__":
hello.say_hello()</code></pre><p>In <code>hello.py</code> we have declared a <code>say_hello()</code> function which prints "Hello world". In <code>main.py</code> you'll see an import statement. We are importing the hello module and calling the <code>say_hello()</code> function from that module. </p><p>Run our program using the following command:</p><pre><code class="language-shell">➜ python main.py</code></pre><p>Output:</p><pre><code class="language-shell">Hello world</code></pre><p>Now let's understand how to import a module which is in another directory.</p><p>Let's create a directory named "data" and move our <code>hello.py</code> inside that directory.</p><p>Go to the <code>main.py</code> and change the previous import statement.</p><pre><code class="language-python">from data import hello
if __name__ == "__main__":
hello.say_hello()</code></pre><p>There are two ways to import from a directory. </p><ul><li>Method 1: <code>from data import hello</code></li><li>Method 2: <code>import data.hello</code></li></ul><p>I prefer method 1 because of its readability. You can choose whichever method looks better to you.</p><p>Let's run our application using the following command:</p><pre><code class="language-shell">➜ python main.py</code></pre><p>And an error occurs. Wait why did this happen? We did everything right. Let's go through the error:</p><pre><code class="language-shell">Traceback (most recent call last):
File "main.py", line 1, in &lt;module&gt;
from data import hello
ImportError: No module named data</code></pre><p>Well Python is telling us that it doesn't recognize a module named data. To solve this issue create a <code>__init__.py</code> inside data directory. Leave the file blank and run the program again and you'll get the following output:</p><pre><code class="language-shell">Hello world</code></pre><p>Well python by default does not treat a directory as a module. To inform Python to treat a directory as a module, <code>__init__.py</code> is required.</p><h2 id="json-handling-">JSON Handling:</h2><p>If you have worked previously with web development or app development you may be aware that all the API calls take place in JSON format. While JSON looks similar to a dictionary in Python, remember that it's very different.</p><p>To handle JSON, Python provides an inbuilt <code>json</code> package. To use this package we need to import it as follows:</p><pre><code class="language-python">import json</code></pre><p>This library provides two methods which help us in handling the JSON. Let's understand them one by one.</p><h3 id="json-loads-">JSON loads:</h3><p>If you have a JSON string and want to convert it back to a dictionary you need to use the <code>loads</code> method. Go to the Python shell and copy-paste the following code:</p><pre><code class="language-python">&gt;&gt;&gt; import json
&gt;&gt;&gt; json_string = '{ "user_name":"Sharvin", "age":1000}' #JSON String
&gt;&gt;&gt; type(json_string)
&lt;class 'str'&gt;
&gt;&gt;&gt; data = json.loads(json_string)
&gt;&gt;&gt; type(data)
&lt;class 'dict'&gt;
&gt;&gt;&gt; data
{'user_name': 'Sharvin', 'age': 1000}</code></pre><h3 id="json-dumps-">JSON dumps:</h3><p>Now let's convert our data back to the JSON string format using the <code>dumps</code> method.</p><pre><code class="language-python">&gt;&gt;&gt; jsonString = json.dumps(data)
&gt;&gt;&gt; type(jsonString)
&lt;class 'str'&gt;
&gt;&gt;&gt; jsonString
'{"user_name": "Sharvin", "age": 1000}'</code></pre><p>To learn more about JSON Manipulation, go through the <a href="https://docs.python.org/3/library/json.html">Python Documentation</a>.</p><h2 id="that-s-it-">That's it!</h2><p>And we're done! I hope you now understand the basics of Python. Congratulations! That's a huge achievement.</p><p>Feedback is welcomed. Also if you want to learn about any other topic you can tweet the topic name on Twitter and include my Twitter handle. [ <strong>@sharvinshah26</strong> ]</p><blockquote>Feel free to connect with me on <a href="https://twitter.com/sharvinshah26" rel="noopener">Twitter</a> and <a href="https://github.com/Sharvin26" rel="noopener">Github</a>.</blockquote>
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
