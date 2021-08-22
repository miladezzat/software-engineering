---
card: "/images/default.jpg"
tags: [Python]
description: "In this article, you will learn:"
author: "Milad E. Fahmy"
title: "Truthy and Falsy Values in Python: A Detailed Introduction"
created: "2021-08-16T15:37:31+02:00"
modified: "2021-08-16T15:37:31+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-learning-to-code tag-computer-science tag-programming-languages ">
<header class="post-full-header">
<h1 class="post-full-title">Truthy and Falsy Values in Python: A Detailed Introduction</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/01/Truthy-and-Falsy-Values.png 300w,
/news/content/images/size/w600/2020/01/Truthy-and-Falsy-Values.png 600w,
/news/content/images/size/w1000/2020/01/Truthy-and-Falsy-Values.png 1000w,
/news/content/images/size/w2000/2020/01/Truthy-and-Falsy-Values.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/01/Truthy-and-Falsy-Values.png" alt="Truthy and Falsy Values in Python: A Detailed Introduction">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h2 id="welcome">Welcome</h2><p>In this article, you will learn:</p><ul><li>What truthy and falsy values are.</li><li>What makes a value truthy or falsy.</li><li>How to use the <code>bool()</code> function to determine if a value is truthy or falsy.</li><li>How to make objects from user-defined classes truthy or falsy using the special method <code>__bool __</code>.</li></ul><p><strong>Let's begin! ✨</strong></p><h2 id="-truth-values-vs-truthy-and-falsy-values">🔹 Truth Values vs. Truthy and Falsy Values</h2><p>Let me introduce you to these concepts by comparing them with the values <code>True</code> and <code>False</code> that we typically work with. </p><p>Expressions with operands and operators evaluate to either <code>True</code> or <code>False</code> and they can be used in an <code>if</code> or <code>while</code> condition to determine if a code block should run.</p><p>Here we have an example:</p><pre><code class="language-python"># Expression 5 &lt; 3
&gt;&gt;&gt; if 5 &lt; 3:
print("True")
else:
print("False")
# Output
False</code></pre><p>In this example, everything is working as we expected because we used an expression with two operands and an operator <code>5 &lt; 3</code>.</p><p><strong>But what do you think will happen if we try to run this code?</strong></p><pre><code class="language-python">&gt;&gt;&gt; a = 5
&gt;&gt;&gt; if a:
&gt;&gt;&gt; if a:
&gt;&gt;&gt; if a:
print(a)
# No Output	</code></pre><h3 id="-truthy-values">🔹 Truthy Values</h3><p>According to the <a href="https://docs.python.org/3/library/stdtypes.html#truth-value-testing">Python Documentation</a>:</p><blockquote>By default, an object is considered <strong>true</strong>.</blockquote><p><strong>Truthy values include:</strong></p><ul><li>Non-empty sequences or collections (lists, tuples, strings, dictionaries, sets).</li><li>Numeric values that are not zero.</li><li><code>True</code></li></ul><p>This is why the value of <code>a</code> was printed in our initial example because its value was 5 (a truthy value):</p><pre><code class="language-python">&gt;&gt;&gt; a = 5
&gt;&gt;&gt; if a:
print(a)
# Output
True
&gt;&gt;&gt; bool(0)
False
&gt;&gt;&gt; bool([])
False
&gt;&gt;&gt; bool({5, 5})
True
&gt;&gt;&gt; bool(-5)
True
&gt;&gt;&gt; bool(0.0)
False
&gt;&gt;&gt; bool(None)
False
&gt;&gt;&gt; bool(1)
True
&gt;&gt;&gt; bool(range(0))
False
&gt;&gt;&gt; bool(set())
False
&gt;&gt;&gt; bool({5, 6, 2, 5})
True</code></pre><p>💡 <strong>Tip: </strong>You can also pass a variable as the argument to test if its value is truthy or falsy.</p><h3 id="-real-examples">🔹 Real Examples</h3><p>One of the advantages of using truthy and falsy values is that they can help you make your code more concise and readable. Here we have two real examples.</p><p><strong>Example:</strong> <br>We have this function <code>print_even()</code> that takes as an argument a list or tuple that contains numbers and only prints the values that are even. If the argument is empty, it prints a descriptive message:</p><pre><code class="language-python">def print_even(data):
if len(data) &gt; 0:
for value in data:
if value % 2 == 0:
print(value)
else:
print("The argument cannot be empty")</code></pre><p>Notice this line:</p><pre><code class="language-python">if len(data) &gt; 0:</code></pre><p>We can make the condition much more concise with truthy and falsy values:</p><pre><code class="language-python">if data:</code></pre><p>If the list is empty, <code>data</code> will evaluate to <code>False</code>. If it's not empty, it will evaluate to <code>True</code>. We get the same functionality with more concise code.</p><p>This would be our final function:</p><pre><code class="language-python">def print_even(data):
if data:
for value in data:
if value % 2 == 0:
print(value)
else:
print("The argument cannot be empty")</code></pre><p><strong>Example: </strong><br>We could also use truthy and falsy values to raise an exception (error) when the argument passed to a function is not valid.</p><pre><code class="language-python">&gt;&gt;&gt; def print_even(data):
if not data:
raise ValueError("The argument data cannot be empty")
for value in data:
if value % 2 == 0:
print(value)</code></pre><p>In this case, by using <code>not data</code> as the condition of the <code>if</code> statement, we are getting the opposite truth value of <code>data</code> for the <code>if</code> condition. </p><p>Let's analyze <code>not data</code> in more detail:</p><p>If <code>data</code> is empty:</p><ul><li>It will be a falsy value, so <code>data</code> will evaluate to <code>False</code>.</li><li><code>not data</code> will be equivalent to <code>not False</code>, which is <code>True</code>.</li><li>The condition will be <code>True</code>. </li><li>The exception will be raised.</li></ul><p>If <code>data</code> is not empty:</p><ul><li>It will be a truthy value, so it will evaluate to <code>True</code>. </li><li><code>not data</code> will be equivalent to <code>not True</code>, which is <code>False</code> .</li><li>The condition will be <code>False</code>. </li><li>The exception will not be raised.</li></ul><h2 id="-making-custom-objects-truthy-and-falsy-values">🔸 Making Custom Objects Truthy and Falsy Values</h2><p>If you are familiar with classes and Object-Oriented Programming, you can add a special method to your classes to make your objects act like truthy and falsy values.</p><h3 id="__bool-__-">__bool __()</h3><p>With the special method <code>__bool__()</code>, you can set a "customized" condition that will determine when an object of your class will evaluate to <code>True</code> or <code>False</code>. </p><p>According to the <a href="https://docs.python.org/3/library/stdtypes.html#truth-value-testing">Python Documentation</a>:</p><blockquote>By default, an object is considered true unless its class defines either a <a href="https://docs.python.org/3/reference/datamodel.html#object.__bool__"><code>__bool__()</code></a> method that returns <code>False</code> or a <a href="https://docs.python.org/3/reference/datamodel.html#object.__len__"><code>__len__()</code></a> method that returns zero, when called with the object.</blockquote><p>For example, if we have this very simple class:</p><pre><code class="language-python">&gt;&gt;&gt; class Account:
def __init__(self, balance):
self.balance = balance</code></pre><p>You can see that no special methods are defined, so all the objects that you create from this class will always evaluate to <code>True</code>:</p><pre><code class="language-python">&gt;&gt;&gt; account1 = Account(500)
&gt;&gt;&gt; bool(account1)
True
&gt;&gt;&gt; account2 = Account(0)
&gt;&gt;&gt; bool(account2)
True</code></pre><p>We can customize this behavior by adding the special method <a href="https://docs.python.org/3/reference/datamodel.html#object.__bool__"><code>__bool__()</code></a>:</p><pre><code class="language-python">&gt;&gt;&gt; class Account:
def __init__(self, balance):
self.balance = balance
def __bool__(self):
return self.balance &gt; 0</code></pre><p>Now, if the account balance is greater than zero, the object will evaluate to <code>True</code>. Otherwise, if the account balance is zero, the object will evaluate to <code>False</code>. </p><pre><code class="language-python">&gt;&gt;&gt; account1 = Account(500)
&gt;&gt;&gt; bool(account1)
True
&gt;&gt;&gt; account2 = Account(0)
&gt;&gt;&gt; bool(account2)
False</code></pre><p>💡 <strong>Tip:</strong> If <code><a href="https://docs.python.org/3/reference/datamodel.html#object.__bool__">__bool__()</a></code> is not defined in the class but the <code>__len__()</code> method is, the value returned by this method will determine if the object is truthy or falsy.</p><h2 id="-in-summary">🔹 In Summary </h2><ul><li>Truthy values are values that evaluate to <code>True</code> in a boolean context.</li><li>Falsy values are values that evaluate to <code>False</code> in a boolean context.</li><li>Falsy values include empty sequences (lists, tuples, strings, dictionaries, sets), zero in every numeric type, <code>None</code>, and <code>False</code>.</li><li>Truthy values include non-empty sequences, numbers (except <code>0</code> in every numeric type), and basically every value that is not falsy. </li><li>They can be used to make your code more concise. </li></ul><p><strong>I really hope you liked my article and found it helpful. </strong>Now you can work with truthy and falsy values in your Python projects. <a href="https://www.udemy.com/user/estefania-cn/">Check out my online courses</a>. Follow me on <a href="https://twitter.com/EstefaniaCassN">Twitter</a>. ⭐️</p>
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
