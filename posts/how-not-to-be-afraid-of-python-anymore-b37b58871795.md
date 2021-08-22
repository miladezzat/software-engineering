---
card: "https://cdn-media-1.freecodecamp.org/images/0*YOVsFZ95l6WcVFXf"
tags: [Programming]
description: "For the first year or two when I started coding, I thought le"
author: "Milad E. Fahmy"
title: "How not to be afraid of Python anymore"
created: "2021-08-16T15:39:44+02:00"
modified: "2021-08-16T15:39:44+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-python tag-productivity tag-technology tag-software-development ">
<header class="post-full-header">
<h1 class="post-full-title">How not to be afraid of Python anymore</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*YOVsFZ95l6WcVFXf 300w,
https://cdn-media-1.freecodecamp.org/images/0*YOVsFZ95l6WcVFXf 600w,
https://cdn-media-1.freecodecamp.org/images/0*YOVsFZ95l6WcVFXf 1000w,
https://cdn-media-1.freecodecamp.org/images/0*YOVsFZ95l6WcVFXf 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*YOVsFZ95l6WcVFXf" alt="How not to be afraid of Python anymore">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h4 id="a-dive-into-the-language-reference-documentation">A dive into the language reference documentation</h4><p>For the first year or two when I started coding, I thought learning a language was all about learning the syntax. So, that’s all I did.</p><p>Needless to say, I didn’t turn into a great developer. I was stuck. Then, one fine day, it just clicked. I realised I was doing this wrong. Learning the syntax should be the least of my concerns. What matters is everything else about the language. What exactly is all that? Read on.</p><p>This article is divided into three main subparts: The Data Model, the Execution model and the Lexical analysis.</p><p>This article is more an insight into how things work in Pythonland — in contrast to how to learn Python. You’ll find many how-to learning sources online.</p><p>What I didn’t find online was a single source of common ‘gotchas’ in Python. A source explaining how the language works. This attempts to solve that problem. I think I’ve come up short, there’s so much to it!</p><p>Everything here comes from the official documentation. I’ve condensed it — to the important points, reordered stuff and added my examples. All links point to the documentation.</p><p>Without further ado, here we go.</p><h3 id="data-model">Data Model</h3><h4 id="objects-values-and-types">Objects, values and types</h4><p><a href="https://docs.python.org/3.7/reference/datamodel.html#objects-values-and-types" rel="noopener">Objects</a> are Python’s abstraction for data.</p><p>Every object has its unique fixed <code>identity</code>, a fixed <code>type</code> and a <code>value</code>.</p><p>‘Fixed’ means the <code>identity</code> and <code>type</code> of an <code>Object</code> can never change.</p><p>The <code>value</code> may change. Objects whose value can change are called <strong>mutable </strong>while objects whose value can’t change are called <strong>immutable</strong>.</p><p>The mutability is determined by <code>type</code> :</p><ul><li>Numbers, Strings and Tuples are immutable</li><li>Lists and Dictionaries are mutable</li></ul><p>The identity of objects can be compared via the <code>is</code> operator.</p><p><code>id()</code> returns the <code>identity</code></p><p><code>type()</code> returns the <code>type</code></p><blockquote>Note: The value of an immutable container object that contains a reference to a mutable object can change when the latter’s value is changed. However, the container is still considered immutable, because the collection of objects it contains cannot be changed. So, immutability is not strictly the same as having an unchangeable value.</blockquote><p>This note made my head spin the first two times I read it.</p><p>Simple translation: Immutability is not the same as unchangeable value. In the example below, the <code>tuple</code> is <code>immutable</code>, while it’s <code>value</code> keeps changing (as the <code>list</code> changes).</p><p>Example:</p><pre><code class="language-python">&gt;&gt;&gt; t = ("a", [1]) # a tuple of string and list
&gt;&gt;&gt; id(t)
4372661064
&gt;&gt;&gt; t
('a', [1])
&gt;&gt;&gt; type(t)
&lt;class 'tuple'&gt;
&gt;&gt;&gt; t[1]
[1]
&gt;&gt;&gt; t[1].append(2)
&gt;&gt;&gt; t
('a', [1, 2])
&gt;&gt;&gt; id(t)
4372661064
&gt;&gt;&gt; type(t)
&lt;class 'tuple'&gt;</code></pre><p>The tuple is immutable, even though it contains a mutable object, a list.</p><p>Compare this to a string, where changing the existing array changes the object (since strings are immutable).</p><pre><code class="language-py">&gt;&gt;&gt; x = "abc"
&gt;&gt;&gt; id(x)
4371437472
&gt;&gt;&gt; x += "d"
&gt;&gt;&gt; x
'abcd'
&gt;&gt;&gt; id(x)
4373053712</code></pre><p>Here, the name , <code>x</code> is bound to another object of type string. This changes its id as well.</p><p>The original object, being immutable, stays immutable. The binding is explained in further detail below, which should make things clearer.</p><h4 id="built-in-types">Built-in types</h4><p>Python comes with several <a href="https://docs.python.org/3.7/reference/datamodel.html#the-standard-type-hierarchy" rel="noopener">built-in types</a>:</p><h4 id="none">None</h4><p>The type is represented by a single object, hence a single value. The sole object with <code>type = NoneType</code></p><pre><code class="language-py">&gt;&gt;&gt; type(None)
&lt;class 'NoneType'&gt;</code></pre><h4 id="numbers">Numbers</h4><p>This is a collection of abstract base classes used to represent numbers. They can’t be instantiated, and<strong> </strong><code>int</code>, <code>float</code> inherit from <code>numbers.Number</code>.</p><p>They are created by numeric literals and arithmetic operations. The returned objects are immutable, as we have seen. The following list of examples will make this clear:</p><pre><code class="language-py">&gt;&gt;&gt; a = 3 + 4
&gt;&gt;&gt; type(a)
&lt;class 'int'&gt;
&gt;&gt;&gt; isinstance(a, numbers.Number)
True
&gt;&gt;&gt; isinstance(a, numbers.Integral)
True
&gt;&gt;&gt; isinstance(3.14 + 2j, numbers.Real)
False
&gt;&gt;&gt; isinstance(3.14 + 2j, numbers.Complex)
True</code></pre><h4 id="sequences">Sequences</h4><p>These represent finite ordered sets indexed by non negative integers. Just like an array from other languages.</p><p><code>len()</code> returns the length of sequences. When length is <code>n</code>, the index set has elements from <code>0...n-1</code> . Then the ith element is selected by <code>seq[i-1]</code>.</p><p>For a sequence <code>l</code>, you can select elements in between indexes using slicing: <code>l[i:j]</code>.</p><p>There are two types of sequences: mutable and immutable.</p><ul><li>Immutable sequences include: strings, tuples and bytes.</li><li>Mutable sequences include: lists and byte arrays</li></ul><h4 id="sets">Sets</h4><p>These represent unordered, finite sets of unique, immutable objects. They can’t be indexed, but can be iterated over. <code>len()</code> still returns the number of items in the set.</p><p>There are two types of sets: mutable and immutable.</p><ul><li>A mutable set is created by <code>set()</code>.</li><li>An immutable set is created by <code>frozenset()</code>.</li></ul><h4 id="mappings">Mappings</h4><h4 id="dictionary">Dictionary</h4><p>These represent finite sets of objects indexed by nearly arbitrary values. Keys can’t be mutable objects. That includes lists, other dictionaries and other objects that are compared by value, and not by object identity.</p><p>This means a <code>frozenset</code> can be a dictionary key too!</p><h4 id="modules"><strong>Modules</strong></h4><p>A module object is a basic organisational unit in Python. The namespace is implemented as a dictionary. Attribute references are lookups in this dictionary.</p><p>For a module <code>m</code>, the dictionary is read-only, accessed by <code>m.__dict__</code> .</p><p>It’s a regular dictionary so you can add keys to it!</p><p>Here’s an example, with the <a href="https://www.python.org/dev/peps/pep-0020/" rel="noopener">Zen of Python</a>:</p><p>We are adding our custom function, <code>figure()</code> to the module <code>this</code>.</p><pre><code>&gt;&gt;&gt; import this as t
&gt;&gt;&gt; t.__dict__
{'__name__': 'this', '__doc__': None, '__package__': '',
.....
.....
's': "Gur Mra bs Clguba, ol Gvz Crgref\n\nOrnhgvshy vf orggre guna
vqrn.\nAnzrfcnprf ner bar ubaxvat terng vqrn -- yrg'f qb zber bs gubfr!",
'd': {'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q', 'E': 'R', 'F': 'S',
'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k', 'y': 'l', 'z': 'm'},
'c': 97,
'i': 25
}
&gt;&gt;&gt; def figure():
...   print("Can you figure out the Zen of Python?")
...
&gt;&gt;&gt; t.fig = figure
&gt;&gt;&gt; t.fig()
Can you figure out the Zen of Python?
&gt;&gt;&gt; t.__dict__
{'__name__': 'this', '__doc__': None, '__package__': '',
.....
.....
's': "Gur Mra bs Clguba, ol Gvz Crgref\n\nOrnhgvshy vf orggre guna
vqrn.\nAnzrfcnprf ner bar ubaxvat terng vqrn -- yrg'f qb zber bs gubfr!",
'd': {'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q', 'E': 'R', 'F': 'S',
'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k', 'y': 'l', 'z': 'm'},
'c': 97,
'i': 25
'fig': &lt;function figure at 0x109872620&gt;
}
&gt;&gt;&gt; print("".join([t.d.get(c, c) for c in t.s]))
The Zen of Python, by Tim Peters
Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!</code></pre><p>Not very useful either, but good to know.</p><h4 id="operator-overloading">Operator Overloading</h4><p>Python allows for <a href="https://docs.python.org/3.7/reference/datamodel.html#special-method-names" rel="noopener">operator overloading</a>.</p><p>Classes have special function names — methods they can implement to use Python’s defined operators. This includes slicing, arithmetic operations and subscripting.</p><p>For example, <code>__getitem__()</code> refers to subscripting. Hence, <code>x[i]</code> is equivalent to <code>type(x).__getitem__(x,i)</code>.</p><p>Hence, to use the operator <code>[]</code> on a class <code>someClass</code> : you need to define <code>__getitem__()</code> in <code>someClass</code>.</p><pre><code class="language-py">&gt;&gt;&gt; class operatorTest(object):
...     vals = [1,2,3,4]
...     def __getitem__(self, i):
...   return self.vals[i]
...
&gt;&gt;&gt; x = operatorTest()
&gt;&gt;&gt; x[2]
3
&gt;&gt;&gt; x.__getitem__(2)
3
&gt;&gt;&gt; type(x)
&lt;class '__main__.OperatorTest'&gt;
&gt;&gt;&gt; type(x).__getitem__(x,2)
3
&gt;&gt;&gt; OperatorTest.__getitem__(x,2)
3</code></pre><p>Confused about why all of them are equivalent? That’s for next part — where we cover class and function definitions.</p><p>Likewise, the <code>__str__()</code> <a href="https://docs.python.org/3.7/reference/datamodel.html#object.__str__" rel="noopener">function</a> determines the output when the <code>str()</code> method is called on an object of your class.</p><p>For comparison operations, the special function names are:</p><ul><li><code>object.__lt__(self, other)</code> for <code>&amp;</code>lt; (“less than”)</li><li><code>object.__le__(self, other)</code> for <code>&amp;l</code>t;= (“less than or equal to”)</li><li><code>object.__eq__(self, other)</code> for <code>==</code> (“equal to”)</li><li><code>object.__ne__(self, other)</code> for <code>!=</code> (“not equal to”)</li><li><code>object.__gt__(self, other)</code> for <code>&amp;</code>gt; (“greater than”)</li><li><code>object.__ge__(self, other)</code> for <code>&amp;g</code>t;= (“greater than or equal to”)</li></ul><p>So for example, <code>x&amp;l</code>t;y is called <code>as x.__lt__</code>(y)</p><p>There are also <a href="https://docs.python.org/3.7/reference/datamodel.html#emulating-numeric-types" rel="noopener">special functions for arithmetic operations</a>, like <code>object.__add__(self, other)</code>.</p><p>As an example, <code>x+y</code> is called as <code>x.__add__(y)</code></p><p>Another interesting <a href="https://docs.python.org/3.7/reference/datamodel.html#object.__iter__" rel="noopener">function</a> is <code>__iter__()</code>.</p><p>You call this method when you need an iterator for a container. It returns a <a href="https://docs.python.org/3.7/library/stdtypes.html#iterator-types" rel="noopener">new iterator object</a> that can iterate over all the objects in the container.</p><p>For mappings, it should iterate over the keys of the container.</p><p>The iterator object itself supports two methods:</p><ul><li><code>iterator.__iter__()</code> : Returns the object itself.</li></ul><p>This makes <code>iterators</code> and the <code>containers</code> equivalent.</p><p>This allows the iterator and containers both to be used in <code>for</code> and <code>in</code> statements.</p><ul><li><code>iterator.__next__()</code> : Returns the next item from the container. If there are no further items, raises the <code>StopIteration</code> exception.</li></ul><pre><code class="language-py">class IterableObject(object):    # The iterator object class
vals = []
it = 0
def __init__(self, val):
self.vals = val
it = 0
def __iter__(self):
return self
def __next__(self):
if self.it &lt; len(self.vals):
index = self.it
self.it += 1
return self.vals[index]
raise StopIteration
class IterableClass(object):    # The container class
vals = [1,2,3,4]
def __iter__(self):
return iterableObject(self.vals)
&gt;&gt;&gt; iter_object_example = IterableObject([1,2,3])
&gt;&gt;&gt; for val in iter_object_example:
...   print(val)
...
1
2
3
&gt;&gt;&gt; iter_container_example = IterableClass()
&gt;&gt;&gt; for val in iter_container_example:
...  print(val)
...
1
2
3
4</code></pre><p>Cool stuff, right? There’s also a direct equivalent in Javascript.</p><p><a href="https://docs.python.org/3.7/reference/datamodel.html#with-statement-context-managers" rel="noopener">Context Managers</a> are also implemented via operator overloading.</p><p><code>with open(filename, 'r') as f</code></p><p><code>open(filename, 'r')</code> is a context manager object which implements</p><p><code>object.__enter__(self)</code> and</p><p><code>object.__exit__(self, exc_type, exc_value, traceback)</code> <br>All the above three parameters are null when error is <code>None</code>.</p><pre><code class="language-py">class MyContextManager(object):
def __init__(self, some_stuff):
self.object_to_manage = some_stuff
def __enter__(self):
print("Entering context management")
return self.object_to_manage # can do some transforms too
def __exit__(self, exc_type, exc_value, traceback):
if exc_type is None:
print("Successfully exited")
# Other stuff to close
&gt;&gt;&gt; with MyContextManager("file") as f:
...     print(f)
...
Entering context management
file
Traceback (most recent call last):
File "&lt;stdin&gt;", line 1, in &lt;module&gt;
NameError: name 'x' is not defined</code></pre><p>Name binding, or assignment occurs in a block.</p><p>Examples of name binding — these are intuitive:</p><ul><li>Parameters to functions are bound to the names defined in the function</li><li>Import statements bind name of module</li><li>Class and function definitions bind the name to class / function objects</li><li>Context managers: <code>with ... as f</code> : f is the name binding to the <code>...</code> object</li></ul><p>Names bound to a block are local to that block . That means global variables are simply names bound to the module.</p><p>Variables used in a block without being defined there are free variables.</p><p>Scopes define visibility of a name in a block. The scope of a variable includes the block it is defined in, as well as all blocks contained inside the defining block.</p><p>Remember how for loops aren’t blocks? That’s why iteration variables defined in the loop are accessible after the loop, unlike in C++ and JavaScript.</p><pre><code class="language-py">&gt;&gt;&gt; for i in range(5):
...   x = 2*i
...   print(x, i)
...
0 0
2 1
4 2
6 3
8 4
&gt;&gt;&gt; print(x, i)    # outside the loop! x was defined inside.
8 4</code></pre><p>When a name is used in a block, it is resolved using the nearest enclosing scope.</p><blockquote>Note: If a name binding operation occurs anywhere within a code block, all uses of the name within the block are treated as references to the current block. This can lead to errors when a name is used within a block before it is bound.</blockquote><p>For example:</p><pre><code>&gt;&gt;&gt; name = "outer_scope"
&gt;&gt;&gt; def foo():
...     name = "inner_function" if name == "outer_scope" \
else "not_inner_function"
...
&gt;&gt;&gt; foo()
Traceback (most recent call last):
File "&lt;stdin&gt;", line 1, in &lt;module&gt;
File "&lt;stdin&gt;", line 2, in foo
and c &lt; 10: # Comment okay
return True
else:
return False</code></pre><p>Implicitly, line joining occurs on its own when elements are inside braces. Comments here are allowed.</p><pre><code class="language-py">month_names = ['Januari', 'Februari', 'Maart',# These are the
'April',   'Mei',      'Juni',       # Dutch names
'Juli',    'Augustus', 'September',  # for the months
'Oktober', 'November', 'December']   # of the year</code></pre><h4 id="indentation">Indentation</h4><p>The number of spaces / tabs in the <a href="https://docs.python.org/3.7/reference/lexical_analysis.html#indentation" rel="noopener">indentation</a> doesn’t matter, as long as it’s increasing for things that should be indented. The first line shouldn’t be indented.</p><p>The four spaces rule is a convention defined by <a href="https://www.python.org/dev/peps/pep-0008/#string-quotes" rel="noopener">PEP 8: Style Guide</a>. It’s good practice to follow it.</p><pre><code class="language-py"># Compute the list of all permutations of l.
def perm(l):
# Comment indentation is ignored
if len(l) &lt;= 1:
return [l]
r = []
for i in range(len(l)):
s = l[:i] + l[i+1:]     # Indentation level chosen
p = perm(s)             # Must be same level as above
for x in p:
r.append(l[i:i+1] + x) # One space okay
return r</code></pre><p>There are a few reserved identifiers as well.</p><ul><li><code>_</code> for import: functions / variables starting with <code>_</code> aren’t imported.</li><li><code>__*__</code> for system defined names, defined by implementation : we’ve seen a few of these. ( <code>__str__()</code>, <code>__iter__()</code>, <code>__add__()</code> )</li></ul><p>Python also offers <a href="https://docs.python.org/3.7/reference/lexical_analysis.html#string-literal-concatenation" rel="noopener">Implicit String Literal concatenation</a></p><pre><code class="language-py">&gt;&gt;&gt; def name():
...   return "Neil" "Kakkar"
...
&gt;&gt;&gt; name()
'Neil Kakkar'</code></pre><h4 id="format-strings">Format Strings</h4><p><a href="https://docs.python.org/3.7/reference/lexical_analysis.html#formatted-string-literals" rel="noopener">String formatting</a> is a useful tool in Python.</p><p>Strings can have <code>{ expr }</code> in the string literal where <code>expr</code> is an expression. The expression evaluation is substituted in place.</p><p>Conversions can be specified to convert the result before formatting.</p><p><code>!r</code> calls <code>repr()</code>, <code>!s</code> calls <code>str()</code> and <code>!a</code> calls <code>ascii()</code></p><pre><code class="language-py">&gt;&gt;&gt; name = "Fred"
&gt;&gt;&gt; f"He said his name is {name!r}."
"He said his name is 'Fred'."
&gt;&gt;&gt; f"He said his name is {repr(name)}."  # repr() is equiv. to !r
"He said his name is 'Fred'."
&gt;&gt;&gt; width = 10
&gt;&gt;&gt; precision = 4
&gt;&gt;&gt; value = decimal.Decimal("12.34567")
&gt;&gt;&gt; f"result: {value:{width}.{precision}}"  # nested fields
'result:12.35'
# This is same as "{decf:10.4f}".format(decf=float(value))
&gt;&gt;&gt; today = datetime(year=2017, month=1, day=27)
&gt;&gt;&gt; f"{today:%B %d, %Y}"  # using date format specifier
'January 27, 2017'
&gt;&gt;&gt; number = 1024
&gt;&gt;&gt; f"{number:#0x}"  # using integer format specifier
'0x400'</code></pre><p>It’s a cleaner syntax to using <code><a href="https://docs.python.org/3.7/library/stdtypes.html#str.format" rel="noopener">str.format()</a></code></p><h3 id="summary">Summary</h3><p>With this, we’ve covered the major pillars of Python. The object data model, execution model with its scopes and blocks and some bits on strings. Knowing all this puts you ahead of every developer who only knows the syntax. That’s a higher number than you think.</p><p>In Part 2, we’ll look at object based classes and functions.</p><p>To learn more, here’s a great book — <a href="https://amzn.to/2BRnpNa" rel="noopener">Effective Python</a>.<br>[Affiliate link — thanks for supporting!]</p><p>Other stories in this series:</p><ul><li><a href="https://medium.freecodecamp.org/how-not-to-be-afraid-of-vim-anymore-ec0b7264b0ae" rel="noopener">How not to be afraid of Vim anymore</a></li><li><a href="https://medium.freecodecamp.org/how-not-to-be-afraid-of-git-anymore-fe1da7415286" rel="noopener">How not to be afraid of GIT anymore</a></li></ul><p>Enjoyed this? <a href="http://neilkakkar.com/subscribe/" rel="noopener">Don’t miss a post again — subscribe to my mailing list!</a></p>
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
