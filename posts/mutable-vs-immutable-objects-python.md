---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c95a1740569d1a4ca0dd3.jpg"
tags: [Python]
description: "Python is an awesome language. Because of its simplicity, man"
author: "Milad E. Fahmy"
title: "Mutable vs Immutable Objects in Python – A Visual and Hands-On Guide"
created: "2021-08-16T15:35:15+02:00"
modified: "2021-08-16T15:35:15+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-programming tag-immutability tag-object tag-pythonic-programming tag-mutable ">
<header class="post-full-header">
<h1 class="post-full-title">Mutable vs Immutable Objects in Python – A Visual and Hands-On Guide</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c95a1740569d1a4ca0dd3.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c95a1740569d1a4ca0dd3.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c95a1740569d1a4ca0dd3.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c95a1740569d1a4ca0dd3.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c95a1740569d1a4ca0dd3.jpg" alt="Mutable vs Immutable Objects in Python – A Visual and Hands-On Guide">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
True
&gt;&gt;&gt; isinstance(False, object)
True
def my_func():
return "hello"
&gt;&gt;&gt; isinstance(my_func, object)
&gt;&gt;&gt; id(x)
1470416816</code></pre><figcaption>The function <code>id(obj)</code> returns the address of <code>obj</code> in memory</figcaption></figure><p>Above, we created an <strong>object</strong> by the name of <code>x</code>, and assigned it the value of <code>1</code>. We then used <code>id(x)</code> and discovered that this object is found at the address <code>1470416816</code> in memory.</p><p>This allows us to check interesting things about Python. Let's say we create two variables in Python – one by the name of <code>x</code>, and one by the name of <code>y</code> – and assign them the same value. For example, here:</p><pre><code class="language-python">&gt;&gt;&gt; x = "I love Python!"
&gt;&gt;&gt; y = "I love Python!"</code></pre><p>We can use the equality operator (<code>==</code>) to verify that they indeed have the same value in Python's eyes:</p><pre><code class="language-python">&gt;&gt;&gt; x == y
&gt;&gt;&gt; y = "I love Python!"
&gt;&gt;&gt; x == y
True
&gt;&gt;&gt; id(x)
52889984
&gt;&gt;&gt; id(y)
52889384</code></pre><p>So as we can see, Python's behavior matches scenario (1) described above. Even though <code>x == y</code> in this example (that is, <code>x</code> and <code>y</code> have the same <em>values</em>), they are different objects in memory. This is because <code>id(x) != id(y)</code>, as we can verify explicitly:</p><pre><code class="language-python">&gt;&gt;&gt; id(x) == id(y)
False</code></pre><p>There is a shorter way to make the comparison above, and that is to use Python's <code>is</code> operator. Checking whether <code>x is y</code> is the same as checking <code>id(x) == id(y)</code>, which means whether <code>x</code> and <code>y</code> are the same object in memory:</p><pre><code class="language-python">&gt;&gt;&gt; x == y
True
&gt;&gt;&gt; id(x) == id(y)
False
&gt;&gt;&gt; x is y
False</code></pre><p>This sheds light on the important difference between the equality operator <code>==</code> and the identity operator <code>is</code>. </p><p>As you can see in the example above, it is completely possible for two names in Python (<code>x</code> and <code>y</code>) to be bound to two different objects (and thus, <code>x is y</code> is <code>False</code>), where these two objects have the same value (so <code>x == y</code> is <code>True</code>).</p><p>How can we create another variable that points to the same object that <code>x</code> is pointing to? We can simply use the assignment operator <code>=</code>, like so:</p><pre><code class="language-python">&gt;&gt;&gt; x = "I love Python!"
&gt;&gt;&gt; z = x</code></pre><p>To verify that they indeed point to the same object, we can use the <code>is</code> operator:</p><pre><code class="language-python">&gt;&gt;&gt; x is z
True</code></pre><p>Of course, this means they have the same address in memory, as we can verify explicitly by using <code>id</code>:</p><pre><code class="language-python">&gt;&gt;&gt; id(x)
54221824
&gt;&gt;&gt; id(z)
54221824</code></pre><p>And, of course, they have the same value, so we expect <code>x == z</code> to return <code>True</code> as well:</p><pre><code class="language-python">&gt;&gt;&gt; x == z
True</code></pre><h1 id="mutable-and-immutable-objects-in-python">Mutable and immutable objects in Python</h1><p>We have said that everything in Python is an object, yet there is an important distinction between objects. Some objects are <strong>mutable</strong> while some are <strong>immutable</strong>. </p><p>As I mentioned before, this fact causes confusion for many people who are new to Python, so we are going to make sure it's clear.</p><h2 id="immutable-objects-in-python">Immutable objects in Python</h2><p>For some types in Python, once we have created instances of those types, they never change. They are <strong>immutable</strong>. </p><p>For example, <code>int</code> objects are immutable in Python. What will happen if we try to change the value of an <code>int</code> object?</p><pre><code class="language-python">&gt;&gt;&gt; x = 24601
&gt;&gt;&gt; x
24601
&gt;&gt;&gt; x = 24602
&gt;&gt;&gt; x
24602</code></pre><p>Well, it seems that we changed <code>x</code> successfully. This is exactly where many people get confused. What exactly happened under the hood here? Let's use <code>id</code> to further investigate:</p><pre><code class="language-python">&gt;&gt;&gt; x = 24601
&gt;&gt;&gt; x
24601
&gt;&gt;&gt; id(x)
1470416816
&gt;&gt;&gt; x = 24602
&gt;&gt;&gt; x
24602
&gt;&gt;&gt; id(x)
&gt;&gt;&gt; id(my_tuple)
54263304
&gt;&gt;&gt; my_tuple = (3, 4, 5)
&gt;&gt;&gt; id(my_tuple)
56898184</code></pre><p>Just like an <code>int</code> object, we can see that our assignment actually changed the object that the name <code>my_tuple</code> is bound to.</p><p>What happens if we try to change one of the <code>tuple</code>'s elements?</p><pre><code class="language-python">&gt;&gt;&gt; my_tuple[0] = 'a new value'
Traceback (most recent call last):
File "&lt;stdin&gt;", line 1, in &lt;module&gt;
TypeError: 'tuple' object does not support item assignment</code></pre><p>As we can see, Python doesn't allow us to modify <code>my_tuple</code>'s contents, as it is immutable.</p><h2 id="mutable-objects-in-python">Mutable objects in Python</h2><p>Some types in Python can be modified after creation, and they are called <strong>mutable</strong>. For example, we know that we can modify the contents of a <code>list</code> object:</p><pre><code class="language-python">&gt;&gt;&gt; my_list = [1, 2, 3]
&gt;&gt;&gt; my_list[0] = 'a new value'
&gt;&gt;&gt; my_list
['a new value', 2, 3]</code></pre><p>Does that mean we actually created a new object when assigning a new value to the first element of <code>my_list</code>? Again, we can use <code>id</code> to check:</p><pre><code class="language-python">&gt;&gt;&gt; my_list = [1, 2, 3]
&gt;&gt;&gt; id(my_list)
55834760
&gt;&gt;&gt; my_list
[1, 2, 3]
&gt;&gt;&gt; my_list[0] = 'a new value'
&gt;&gt;&gt; id(my_list)
55834760
&gt;&gt;&gt; my_list
&gt;&gt;&gt; x is y
True
&gt;&gt;&gt; id(x)
18349096
&gt;&gt;&gt; id(y)
18349096
&gt;&gt;&gt; id(x) == id(y)
&gt;&gt;&gt; x
[1, 2, 3]
&gt;&gt;&gt; y
[1, 2, 3]</code></pre><p>Note that <code>x</code> and <code>y</code> have the same <code>id</code> as before – as they are still bound to the same <code>list</code> object:</p><pre><code class="language-python">&gt;&gt;&gt; id(x)
18349096
&gt;&gt;&gt; id(y)
'Omer'</code></pre><p>Dictionaries are <strong>mutable</strong>, so we can change their content after creation. At any given moment, a key in the dictionary can point to one element only:</p><pre><code class="language-python">&gt;&gt;&gt; my_dict["name"] = "John"
&gt;&gt;&gt; my_dict["name"]
'John'</code></pre><p>It is interesting to note that a <strong>dictionary's keys must be immutable</strong>:</p><pre><code class="language-python">&gt;&gt;&gt; my_dict = {[1,2]: "Hello"}
Traceback (most recent call last):
File "&lt;stdin&gt;", line 1, in &lt;module&gt;
&gt;&gt;&gt; y = [1, 2, 3]
&gt;&gt;&gt; my_dict = {x: 'a', y: 'b'}</code></pre><figcaption>This is a hypothetic case that cannot really be run in Python</figcaption></figure><p>So far, things don't seem that bad. We'd assume that if we access <code>my_dict</code> with the key of <code>[1, 2]</code>, we will get the corresponding value of <code>'a'</code>, and if we access the key <code>[1, 2, 3]</code>, we will get the value <code>'b'</code>. </p><p>Now, what would happen if we attempted to use:</p><pre><code class="language-python">&gt;&gt;&gt; x.append(3)</code></pre><p>In this case, <code>x</code> would have the value of <code>[1, 2, 3]</code>, and <code>y</code> would also have the value of <code>[1, 2, 3]</code>. What should we get when we ask for <code>my_dict[[1, 2, 3]]</code>? Will it be <code>'a'</code> or <code>'b'</code>? To avoid such cases, Python simply doesn't allow dictionary keys to be mutable.</p><h1 id="taking-things-a-bit-further">Taking things a bit further</h1><p>Let's try to apply our knowledge to a case that is a bit more interesting.</p><p>Below, we define a <code>list</code> (a <strong>mutable</strong> object) and a <code>tuple</code> (an <strong>immutable</strong> object). The <code>list</code> includes a <code>tuple</code>, and the <code>tuple</code> includes a <code>list</code>:</p><pre><code class="language-python">&gt;&gt;&gt; my_list = [(1, 1), 2, 3]
&gt;&gt;&gt; my_tuple = ([1, 1], 2, 3)
&gt;&gt;&gt; type(my_list)
&lt;class 'list'&gt;
&gt;&gt;&gt; type(my_list[0])
&lt;class 'tuple'&gt;
&gt;&gt;&gt; type(my_tuple)
&lt;class 'tuple'&gt;
&gt;&gt;&gt; type(my_tuple[0])
&lt;class 'list'&gt;</code></pre><p>So far so good. Now, try to think for yourself – what will happen when we try to execute each of the following statements?</p><p>(1) <code>&gt;&gt;&gt; my_list[0][0] = 'Changed!'</code></p><p>(2) <code>&gt;&gt;&gt; my_tuple[0][0] = 'Changed!'</code></p><p>In statement (1), what we are trying to do is change <code>my_list</code>'s first element, that is, a <code>tuple</code>. Since a <code>tuple</code> is <strong>immutable</strong>, this attempt is destined to fail:</p><pre><code class="language-python">&gt;&gt;&gt; my_list[0][0] = 'Changed!'
Traceback (most recent call last):
File "&lt;stdin&gt;", line 1, in &lt;module&gt;
TypeError: 'tuple' object does not support item assignment</code></pre><p>Note that what we were trying to do is <em>not </em>change the list, but rather – change the contents of its first element. </p><p>Let's consider statement (2). In this case, we are accessing <code>my_tuple</code>'s first element, which happens to be a <code>list</code>, and modify it. Let's further investigate this case and look at the addresses of these elements:</p><pre><code class="language-python">&gt;&gt;&gt; my_tuple = ([1, 1], 2, 3)
&gt;&gt;&gt; id(my_tuple)
20551816
&gt;&gt;&gt; type(my_tuple[0])
&lt;class 'list'&gt;
&gt;&gt;&gt; id(my_tuple[0])
&gt;&gt;&gt; id(my_tuple)
20551816
&gt;&gt;&gt; id(my_tuple[0])
20446248
&gt;&gt;&gt; my_tuple
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
