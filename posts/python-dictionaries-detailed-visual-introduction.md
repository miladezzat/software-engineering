---
card: "/images/default.jpg"
tags: [Python]
description: "In this article, you will learn how to work with Python dicti"
author: "Milad E. Fahmy"
title: "Python Dictionaries 101: A Detailed Visual Introduction"
created: "2021-08-16T15:38:09+02:00"
modified: "2021-08-16T15:38:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-learning-to-code tag-dictionary tag-data-structures ">
<header class="post-full-header">
<h1 class="post-full-title">Python Dictionaries 101: A Detailed Visual Introduction</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/12/Dictionaries-2.png 300w,
/news/content/images/size/w600/2019/12/Dictionaries-2.png 600w,
/news/content/images/size/w1000/2019/12/Dictionaries-2.png 1000w,
/news/content/images/size/w2000/2019/12/Dictionaries-2.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/12/Dictionaries-2.png" alt="Python Dictionaries 101: A Detailed Visual Introduction">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&gt;&gt;&gt; ages["Gino"]
15</code></pre><p>Notice that the syntax is very similar to indexing a string, tuple, or list, but now we are using the key as the index instead of an integer.</p><p>If we want to access the value that corresponds to "Nora", we would do this:</p><pre><code class="language-python">&gt;&gt;&gt; ages = {"Gino": 15, "Nora": 30}
&gt;&gt;&gt; ages["Nora"]
30</code></pre><p>💡 <strong>Tip:</strong> If you try to access a key that does not exist in the dictionary, you will get a <code>KeyError</code>:</p><pre><code class="language-python">&gt;&gt;&gt; ages = {"Gino": 15, "Nora": 30}
&gt;&gt;&gt; ages["Talina"]
Traceback (most recent call last):
File "&lt;pyshell#10&gt;", line 1, in &lt;module&gt;
ages["Talina"]
# Add the key-value pair "Talina": 24
&gt;&gt;&gt; ages["Talina"] = 24
# The dictionary now has this key-value pair
&gt;&gt;&gt; ages
{'Gino': 15, 'Nora': 30, 'Talina': 24}</code></pre><h3 id="modify-a-key-value-pair">Modify a Key-Value Pair</h3><p>To modify the value associated to a specific key, we use the same syntax that we use to add a new key-value pair, but now we will be assigning the new value to an existing key:</p><pre><code class="language-python">&gt;&gt;&gt; ages = {"Gino": 15, "Nora": 30}
# The key "Gino" already exists in the dictionary, so its associated value
# will be updated to 45.
&gt;&gt;&gt; ages["Gino"] = 45
# The value was updated to 45.
&gt;&gt;&gt; ages
# Delete the key-value pair "Gino": 15.
&gt;&gt;&gt; del ages["Gino"]
# The key-value pair was deleted.
&gt;&gt;&gt; ages
{'Nora': 30, 'Talina': 45}</code></pre><h2 id="-check-if-a-key-is-in-a-dictionary">🔸 Check if a Key is in a Dictionary</h2><p>Sometimes, it can be very helpful to check if a key already exists in a dictionary (remember that keys have to be unique).</p><p>According to the <a href="https://docs.python.org/3/tutorial/datastructures.html#dictionaries">Python Documentation</a>:</p><blockquote>To check whether a single <strong>key</strong> is in the dictionary, use the <a href="https://docs.python.org/3/reference/expressions.html#in"><code>in</code></a> keyword.</blockquote><pre><code class="language-python">&gt;&gt;&gt; ages = {"Gino": 15, "Nora": 30, "Talina": 45}
&gt;&gt;&gt; "Talina" in ages
True
&gt;&gt;&gt; "Gino" in ages
True
&gt;&gt;&gt; "Lulu" in ages
False</code></pre><p>The <code>in</code> operator checks the keys, not the values. If we write this:</p><pre><code class="language-python">&gt;&gt;&gt; 15 in ages
False</code></pre><p>We are checking if the <strong><em>key </em></strong>15 is in the dictionary, not the value. This is why the expression evaluates to <code>False</code>.</p><p>💡 <strong>Tip:</strong> You can use the <code>in</code> operator to check if a value is in a dictionary with &lt;dict&gt;<a href="https://docs.python.org/3/library/stdtypes.html#dict.values">.values()</a>.</p><pre><code class="language-python">&gt;&gt;&gt; ages = {"Gino": 15, "Nora": 30, "Talina": 45}
&gt;&gt;&gt; 30 in ages.values()
True
&gt;&gt;&gt; 10 in ages.values()
False</code></pre><h2 id="-length-of-a-python-dictionary">🔹 Length of a Python Dictionary</h2><p>The length of a dictionary is the number of key-value pairs it contains. You can check the length of a dictionary with the <a href="https://docs.python.org/3/library/functions.html#len">len()</a> function that we commonly use, just like we check the length of lists, tuples, and strings:</p><pre><code># Two key-value pairs. Length 2.
&gt;&gt;&gt; ages = {"Gino": 15, "Nora": 30}
&gt;&gt;&gt; len(ages)
2
# Three key-value pairs. Length 3.
&gt;&gt;&gt; ages = {"Gino": 15, "Nora": 30, "Talina": 45}
&gt;&gt;&gt; len(ages)
3</code></pre><h2 id="-iterating-over-dictionaries-in-python">🔸 Iterating over Dictionaries in Python</h2><p>You can iterate over dictionaries using a for loop. There are various approaches to do this and they are all equally relevant. You should choose the approach that works best for you, depending on what you are trying to accomplish.</p><h3 id="first-option-iterate-over-the-keys">First Option - Iterate over the Keys</h3><p>We can iterate over the keys of a dictionary like this:</p><pre><code>for &lt;key&gt; in &lt;dictionary&gt;:
# Do this</code></pre><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; ages = {"Gino": 15, "Nora": 30, "Talina": 45}
&gt;&gt;&gt; for student in ages:
print(student)
Gino
Nora
Talina</code></pre><h3 id="second-option-iterate-over-the-key-value-pairs">Second Option - Iterate over the Key-Value Pairs</h3><p>To do this, we need to use the built-in method <a href="https://docs.python.org/3/library/stdtypes.html#dict.items">.items()</a>, which allows us to iterate over the key-value pairs as tuples of this format <code>(key, value)</code>. </p><pre><code>for &lt;key-value-pair-as-tuple&gt; in &lt;dictionary&gt;.items():
# Do this</code></pre><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; ages = {"Gino": 15, "Nora": 30, "Talina": 45}
&gt;&gt;&gt; for pair in ages.items():
print(pair)
('Gino', 15)
('Nora', 30)
('Talina', 45)</code></pre><h3 id="third-option-assign-keys-and-values-to-individual-variables">Third Option - Assign Keys and Values to Individual Variables</h3><p>With <a href="https://docs.python.org/3/library/stdtypes.html#dict.items">.items()</a> and for loops, you can use the power of a tuple assignment to directly assign the keys and values to individual variables that you can use within the loop:</p><pre><code class="language-python">&gt;&gt;&gt; ages = {"Gino": 15, "Nora": 30, "Talina": 45}
# Tuple assignment to assign the key to the variable key
# and the value to the variable value.
&gt;&gt;&gt; for key, value in ages.items():
print("Key:", key, "; Value:", value)
Key: Gino ; Value: 15
Key: Nora ; Value: 30
Key: Talina ; Value: 45</code></pre><h3 id="fourth-option-iterate-over-the-values">Fourth Option - Iterate over the Values</h3><p>You can iterate over the values of a dictionary using the <a href="https://docs.python.org/3/library/stdtypes.html#dict.values">.values()</a> method.</p><pre><code class="language-python">&gt;&gt;&gt; ages = {"Gino": 15, "Nora": 30, "Talina": 45}
&gt;&gt;&gt; for age in ages.values():
print(age)
15
30
45</code></pre><h2 id="-dictionary-methods">🔹 Dictionary Methods</h2><p>Dictionaries include very helpful built-in methods that can save you time and work to perform common functionality:</p><h3 id="-clear-">.clear()</h3><p>This method removes all the key-value pairs from the dictionary.</p><pre><code class="language-python">&gt;&gt;&gt; ages = {"Gino": 15, "Nora": 30, "Talina": 45}
&gt;&gt;&gt; ages.clear()
&gt;&gt;&gt; ages
{}</code></pre><h3 id="-get-key-default-">.get(&lt;key&gt;, &lt;default&gt;)</h3><p>This method returns the value associated with the key. Otherwise, it returns the default value that was provided as the second argument (this second argument is optional).</p><pre><code class="language-python">&gt;&gt;&gt; ages = {"Gino": 15, "Nora": 30, "Talina": 45}
&gt;&gt;&gt; ages.get("Nora")
30
&gt;&gt;&gt; ages.get("Nor", "Not Found")
'Not Found'</code></pre><p>If you don't add a second argument, this is equivalent to the previous syntax with square brackets <code>[]</code>that you learned:</p><pre><code>&gt;&gt;&gt; ages = {"Gino": 15, "Nora": 30, "Talina": 45}
&gt;&gt;&gt; ages["Nora"]
30
&gt;&gt;&gt; ages.get("Nora")
30</code></pre><h3 id="-pop-key-default-">.pop(&lt;key&gt;, &lt;default&gt;)</h3><p>This method removes the key-value pair from the dictionary and returns the value. </p><pre><code class="language-python">&gt;&gt;&gt; ages = {"Gino": 15, "Nora": 30, "Talina": 45}
&gt;&gt;&gt; ages.pop("Talina")
45
&gt;&gt;&gt; ages
{'Gino': 15, 'Nora': 30}</code></pre><h3 id="-update-other-">.update(&lt;other&gt;)</h3><p>This method replaces the values of a dictionary with the values of another dictionary only for those keys that exist in both dictionaries. </p><p>An example of this would be a dictionary with the original grades of three students (see code below). We only want to replace the grades of the students who took the make-up exam (in this case, only one student took the make-up exam, so the other grades should remain unchanged). </p><pre><code>&gt;&gt;&gt; grades = {"Gino": 0, "Nora": 98, "Talina": 99}
&gt;&gt;&gt; new_grades = {"Gino": 67}
&gt;&gt;&gt; grades.update(new_grades)
&gt;&gt;&gt; grades
{'Gino': 67, 'Nora': 98, 'Talina': 99}</code></pre><p>By using the .update() method, we could update the value associated with the string "Gino" in the original dictionary since this is the only common key in both dictionaries. </p><p>The original value would be replaced by the value associated with this key in the dictionary that was passed as argument to .update().</p><p>💡 <strong>Tips:</strong> To learn more about dictionary methods, I recommend reading <a href="https://docs.python.org/3/library/stdtypes.html#mapping-types-dict">this article in the Python Documentation</a>.</p><h2 id="-mini-project-a-frequencies-dictionary">🔸 Mini Project - A Frequencies Dictionary</h2><p>Now you will apply your knowledge by writing a function <code>freq_dict</code> that creates and returns a dictionary with the frequency of each element of a list, string, or tuple (the number of times the element appears). The elements will be the keys and the frequencies will be the values. </p><h3 id="code">Code</h3><p>We will be writing the function step-by-step to see the logic behind each line of code.</p><ul><li><strong>Step 1:</strong> The first thing that we need to do is to write the function header. Notice that this function only takes one argument, the list, string or tuple, which we call <code>data</code>.</li></ul><pre><code class="language-python">def freq_dict(data):</code></pre><ul><li><strong>Step 2:</strong> Then, we need to create an empty dictionary that will map each element of the list, string, or tuple to its corresponding frequency.</li></ul><pre><code class="language-python">def freq_dict(data):
freq = {}</code></pre><ul><li><strong>Step 3:</strong> Then, we need to iterate over the list, string, or tuple to determine what to do with each element. </li></ul><pre><code class="language-python">def freq_dict(data):
freq = {}
for elem in data: </code></pre><ul><li><strong>Step 4:</strong> If the element has already been included in the dictionary, then the element appears more than once and we need to add 1 to its current frequency. Else, if the element is not in the dictionary already, it's the first time it appears and its initial value should be 1. </li></ul><pre><code class="language-python">def freq_dict(data):
freq = {}
for elem in data:
if elem in freq:
freq[elem] += 1
else:
freq[elem] = 1</code></pre><ul><li><strong>Step 5: </strong>Finally, we need to return the dictionary.</li></ul><pre><code class="language-python">def freq_dict(data):
freq = {}
for elem in data:
if elem in freq:
freq[elem] += 1
else:
freq[elem] = 1
return freq</code></pre><p>❗️<strong>Important: </strong>Since we are assigning the elements as the keys of the dictionary, they have to be of an immutable data type.</p><h3 id="examples">Examples</h3><p>Here we have an example of the use of this function. Notice how the dictionary maps each character of the string to how many times it occurs. </p><pre><code class="language-python">&gt;&gt;&gt; def freq_dict(data):
freq = {}
for elem in data:
if elem in freq:
freq[elem] += 1
else:
freq[elem] = 1
return freq
&gt;&gt;&gt; freq_dict("Hello, how are you?")
{'H': 1, 'e': 2, 'l': 2, 'o': 3, ',': 1, ' ': 3, 'h': 1, 'w': 1, 'a': 1, 'r': 1, 'y': 1, 'u': 1, '?': 1}</code></pre><p>This is another example applied to a list of integers:</p><pre><code class="language-python">&gt;&gt;&gt; def freq_dict(data):
freq = {}
for elem in data:
if elem in freq:
freq[elem] += 1
else:
freq[elem] = 1
return freq
&gt;&gt;&gt; freq_dict([5, 2, 6, 2, 6, 5, 2, 2, 2])
{5: 2, 2: 5, 6: 2}</code></pre><p>Great Work! Now we have the final function. </p><h2 id="-in-summary">🔹 In Summary </h2><ul><li>Dictionaries are built-in data types in Python that associate (map) keys to values, forming key-value pairs.</li><li>You can access a value with its corresponding key. &nbsp;</li><li>Keys have to be of an immutable data type.</li><li>You can access, add, modify, and delete key-value pairs. </li><li>Dictionaries offer a wide variety of methods that can help you perform common functionality.</li></ul><p><strong>I really hope you liked my article and found it helpful. </strong>Now you can work with dictionaries in your Python projects. <a href="https://www.udemy.com/user/estefania-cn/">Check out my online courses</a>. Follow me on <a href="https://twitter.com/EstefaniaCassN">Twitter</a>. ⭐️</p>
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
