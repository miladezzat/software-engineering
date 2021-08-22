---
card: "/images/default.jpg"
tags: [Python]
description: "You just finished writing a piece of code and you are wonderi"
author: "Milad E. Fahmy"
title: "An Introduction to Unit Testing in Python"
created: "2021-08-16T15:38:35+02:00"
modified: "2021-08-16T15:38:35+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-testing ">
<header class="post-full-header">
<h1 class="post-full-title">An Introduction to Unit Testing in Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/08/image-45-1.png 300w,
/news/content/images/size/w600/2019/08/image-45-1.png 600w,
/news/content/images/size/w1000/2019/08/image-45-1.png 1000w,
/news/content/images/size/w2000/2019/08/image-45-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/08/image-45-1.png" alt="An Introduction to Unit Testing in Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><em>You just finished writing a piece of code and you are wondering what to do. Will you submit a pull request and have your teammates review the code? Or will you manually test the code? </em></p><p><em>You should do both of these things, but with an additional step: you need to unit test your code to make sure that the code works as intended.</em></p><p>Unit tests can pass or fail, and that makes them a great technique to check your code. In this tutorial, I will demonstrate how to write unit tests in Python and you'll see how easy it is to get them going in your own project.</p><h1 id="getting-started">Getting started</h1><p>The best way you can understand testing is if you do it hands-on. For that purpose, in a file named name_function.py, I will write a simple function that takes a first and last name, and returns a full name:</p><pre><code class="language-py">#Generate a formatted full name
def formatted_name(first_name, last_name):
full_name = first_name + ' ' + last_name
return full_name.title()</code></pre><p>The function formatted_name() takes the first and the last name and combines them with a space between to form a full name. It then capitalizes the first letter of every word. To check that this code works, you need to write some code that uses this function. In names.py I will write some simple code that lets users enter their first and last names:</p><pre><code class="language-py">from name_function import formatted_name
print("Please enter the first and last names or enter x to E[x]it.")
while True:
first_name = input("Please enter the first name: ")
if first_name == "x":
print("Good bye.")
break
last_name = input("Please enter the last name: ")
if last_name == "x":
print("Good bye.")
break
result = formatted_name(first_name, last_name)
print("Formatted name is: " + result + ".")</code></pre><p>This &nbsp;code imports formatted_name() from name_function.py and on running, allows the user to enter a series of first and last names and shows the formatted full names.</p><h1 id="unit-test-and-test-cases">Unit test and Test cases</h1><p>There is a module in Python’s standard library called unittest which contains tools for testing your code. Unit testing checks if all specific parts of your function’s behavior are correct, which will make integrating &nbsp;them together with other parts much easier.</p><p>Test case is a collection of unit tests which together proves that a &nbsp;function works as intended, inside a full range of situations in which that function may find itself and that it’s expected to handle. Test case should consider all possible kinds of input a function could receive from users, and therefore should include tests to represent each of these situations.</p><h1 id="passing-a-test">Passing a test</h1><p>Here’s a typical scenario for writing tests:</p><p>First you need to create a test file. Then import the unittest module, define the testing class that inherits from unittest.TestCase, and lastly, write a series of methods to test all the cases of your function’s behavior.</p><p>There’s a line by line explanation below the following code:</p><pre><code class="language-py">import unittest
from name_function import formatted_name
class NamesTestCase(unittest.TestCase):
def test_first_last_name(self):
result = formatted_name("pete", "seeger")
self.assertEqual(result, "Pete Seeger")</code></pre><p>First, you need to import a unittest and the function you want to test, formatted_name() . Then you create a class, for example NamesTestCase, that will contain tests for your formatted_name() function. This class inherits from the class unittest.TestCase.</p><p>NamesTestCase contains a single method that tests one part of formatted_name() . You &nbsp;can call this method test_first_last_name().</p><blockquote>Remember that every method that starts with “test_” will be run automatically when you run test_name_function.py.</blockquote><p>Within test_first_last_name() test method, you call the function you want to test and store a return value. In this example we are going to call &nbsp;formatted_name() with the arguments “pete” and “seeger” , and store the &nbsp;result in the resulting variable.</p><p>In the last line we will use the assert method. The assert method verifies that a result you received matches the result you expected to receive. And in this case we know that formatted_name() function will return full &nbsp;name with capitalized first letters, so we expect the result “Pete &nbsp;Seeger”. To check this, the unittest’s assertEqual() method is being &nbsp;used.</p><pre><code class="language-py">self.assertEqual(result, “Pete Seeger”)</code></pre><p>This &nbsp;line basically means: Compare the value in the resulting variable with “Pete Seeger” and if they are equal it’s OK, but if they are not let me know.</p><p>On running test_name_function.py you are expected to get a OK meaning that the test has passed.</p><pre><code>Ran 1 test in 0.001s
OK</code></pre><h1 id="failing-a-test">Failing a test</h1><p>To show you what a failing test looks like I’m going to modify a &nbsp;formatted_name() function by including a new middle name argument.</p><p>So I’m going to rewrite the function to look like this:</p><pre><code class="language-py">#Generate a formatted full name including a middle name
def formatted_name(first_name, last_name, middle_name):
full_name = first_name + ' ' + middle_name + ' ' + last_name
return full_name.title()</code></pre><p>This version of formatted_name() will work for people with middle names, but when you test it you will see that the function is broken for people who don’t have a middle name.</p><p>So when you run the test_name_function.py you will get the output that looks something like this:</p><pre><code>Error
Traceback (most recent call last):
File “test_name_function.py”, line 7, in test_first_last_name
result = formatted_name(“pete”, “seeger”)
TypeError: formatted_name() missing 1 required positional argument: ‘middle_name’
Ran 1 test in 0.002s
FAILED (errors=1)</code></pre><p>In the output you will see information that will tell you all you need to know where the test fails:</p><ul><li>First item in the output is the Error telling you that at least one test in test case resulted in an error.</li><li>Next you’ll see the file and method in which the error occurred.</li><li>After that you will see the line in which the error occurred.</li><li>And what kind of error it is, in this case we are missing 1 argument “middle_name”.</li><li>You will also see the number of run tests, the time needed for the tests to &nbsp;complete, and a textual message that represents the status of the tests with number of errors that occurred.</li></ul><h1 id="what-to-do-when-the-test-has-failed">What to do when the test has failed</h1><blockquote>A passing test means the function is behaving according to what’s expected from it. However, a failing test means there’s more fun ahead of you.</blockquote><p>I’ve seen couple of programmers that prefer to change the test instead of improving the code — but don’t to that. Spend a little more time to fix &nbsp;the issue, as it will help you to better understand the code and save &nbsp;time in the long run.</p><p>In this example, our function formatted_name() first required two &nbsp;parameters, and now as it is rewritten it requires one extra: a middle name. Adding a middle name to our function broke the desired behavior of &nbsp;it. Since the idea is not to make changes to the tests, the best solution is to make middle name optional.</p><p>After we do this the idea is to make the tests pass when the first and last name are used, for example “Pete Seeger”, as well as when first, last and middle names are used, for example “Raymond Red Reddington”. So &nbsp;let’s modify the code of formatted_name() once again:</p><pre><code class="language-py">#Generate a formatted full name including a middle name
def formatted_name(first_name, last_name, middle_name=''):
if len(middle_name) &gt; 0:
full_name = first_name + ' ' + middle_name + ' ' + last_name
else:
full_name = first_name + ' ' + last_name
return full_name.title()</code></pre><p>Now the function should work for names with and without the middle name.</p><p>And to make sure it still works with “Pete Seeger” run the test again:</p><pre><code>Ran 1 test in 0.001s
OK</code></pre><blockquote>And this is what I intended to show you: It’s always better to make changes to your code to fit your tests than other way around. Now the time has come to add a new test for names that do have a middle name.</blockquote><h1 id="adding-new-tests">Adding new tests</h1><p>Write a new method to the NamesTestCase class that will test for middle names:</p><pre><code>import unittest
from name_function import formatted_name
class NamesTestCase(unittest.TestCase):
def test_first_last_name(self):
result = formatted_name("pete", "seeger")
self.assertEqual(result, "Pete Seeger")
def test_first_last_middle_name(self):
result = formatted_name("raymond", "reddington", "red")
self.assertEqual(result, "Raymond Red Reddington")</code></pre><p>After you run the test, both tests should pass:</p><pre><code>Ran 2 tests in 0.001s
OK</code></pre><blockquote>Bra gjort!<br>Well done!</blockquote><p>You have written your tests to check if the function works using names with &nbsp;or without a middle name. Stay tuned for part 2 where I’ll talk more about testing in Python.</p><hr><p>Thank you for reading! Check out more articles like this on my freeCodeCamp profile: <a href="/news/author/goran/">https://www.freecodecamp.org/news/author/goran/</a> and other fun stuff I build on my GitHub page:<a href="https://github.com/GoranAviani" rel="noopener"> https://github.com/GoranAviani</a></p>
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
