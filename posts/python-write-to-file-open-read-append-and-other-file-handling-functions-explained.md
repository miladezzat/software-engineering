---
card: "/images/default.jpg"
tags: [Python]
description: "Hi! If you want to learn how to work with files in Python, th"
author: "Milad E. Fahmy"
title: "Python Write to File – Open, Read, Append, and Other File Handling Functions Explained"
created: "2021-08-16T15:36:45+02:00"
modified: "2021-08-16T15:36:45+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-tutorial ">
<header class="post-full-header">
<h1 class="post-full-title">Python Write to File – Open, Read, Append, and Other File Handling Functions Explained</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/05/Python-File-Handling-1.png 300w,
/news/content/images/size/w600/2020/05/Python-File-Handling-1.png 600w,
/news/content/images/size/w1000/2020/05/Python-File-Handling-1.png 1000w,
/news/content/images/size/w2000/2020/05/Python-File-Handling-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/05/Python-File-Handling-1.png" alt="Python Write to File – Open, Read, Append, and Other File Handling Functions Explained">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
print(f.read())</code></pre><p>The output is:</p><pre><code class="language-python">Nora
Gino
Timmy
William</code></pre><p>You can use the <code>type()</code> function to confirm that the value returned by <code>f.read()</code> is a string:</p><pre><code class="language-pytohn">print(type(f.read()))
# Output
&lt;class 'str'&gt;</code></pre><p>Yes, it's a string!</p><p>In this case, the entire file was printed because we did not specify a maximum number of bytes, but we can do this as well. </p><p>Here we have an example:</p><pre><code class="language-python">f = open("data/names.txt")
print(f.readline())
f.close()</code></pre><p>The output is:</p><pre><code class="language-python">Nora
print(f.readlines())
f.close()</code></pre><p>The output is:</p><pre><code class="language-python">['Nora\n', 'Gino\n', 'Timmy\n', 'William']</code></pre><p>Notice that there is a <code>\n</code> (newline character) at the end of each string, except the last one.</p><p>💡 <strong>Tip:</strong> You can get the same list with <code>list(f)</code>.</p><p>You can work with this list in your program by assigning it to a variable or using it in a loop:</p><pre><code class="language-python">f = open("data/names.txt")
for line in f.readlines():
# Do something with each line
f.close()</code></pre><p>We can also iterate over <code>f</code> directly (the file object) in a loop:</p><pre><code class="language-python">f = open("data/names.txt", "r")
for line in f:
# Do something with each line
File "&lt;path&gt;", line 8, in &lt;module&gt;
f = open("new_file.txt", "x")
f.write("\nNew Line")
f.write("New Content")
f.close()
f.writelines(["\nline1", "\nline2", "\nline3"])
f.write("New Content") # Trying to write
f.close()</code></pre><p>You will get this error:</p><pre><code class="language-python">Traceback (most recent call last):
File "&lt;path&gt;", line 9, in &lt;module&gt;
f.write("New Content")
io.UnsupportedOperation: not writable</code></pre><p>Similarly, if you open a file in <code>"w"</code> mode (write), and then try to read it:</p><pre><code class="language-python">f = open("data/names.txt", "w")
print(f.readlines()) # Trying to read
f.write("New Content")
f.close()</code></pre><p>You will see this error:</p><pre><code class="language-python">Traceback (most recent call last):
File "&lt;path&gt;", line 14, in &lt;module&gt;
print(f.readlines())
# Working with the file...
# The file is closed here!</code></pre><h3 id="example">Example</h3><p>Here's an example:</p><pre><code class="language-python">with open("data/names.txt", "r+") as f:
print(f.readlines()) </code></pre><p>This context manager opens the <code>names.txt</code> file for read/write operations and assigns that file object to the variable <code>f</code>. This variable is used in the body of the context manager to refer to the file object.</p><h3 id="trying-to-read-it-again">Trying to Read it Again</h3><p>After the body has been completed, the file is automatically closed, so it can't be read without opening it again. But wait! We have a line that tries to read it again, right here below:</p><pre><code class="language-python">with open("data/names.txt", "r+") as f:
print(f.readlines())
print(f.readlines()) # Trying to read the file again, outside of the context manager</code></pre><p>Let's see what happens:</p><pre><code class="language-python">Traceback (most recent call last):
File "&lt;path&gt;", line 21, in &lt;module&gt;
print(f.readlines())
ValueError: I/O operation on closed file.</code></pre><p>This error is thrown because we are trying to read a closed file. Awesome, right? The context manager does all the heavy work for us, it is readable, and concise. </p><h2 id="-how-to-handle-exceptions-when-working-with-files">🔹 How to Handle Exceptions When Working With Files</h2><p>When you're working with files, errors can occur. Sometimes you may not have the necessary permissions to modify or access a file, or a file might not even exist. </p><p>As a programmer, you need to foresee these circumstances and handle them in your program to avoid sudden crashes that could definitely affect the user experience.</p><p>Let's see some of the most common exceptions (runtime errors) that you might find when you work with files:</p><h3 id="filenotfounderror">FileNotFoundError</h3><p>According to the <a href="https://docs.python.org/3/library/exceptions.html#FileNotFoundError">Python Documentation</a>, this exception is:</p><blockquote>Raised when a file or directory is requested but doesn’t exist.</blockquote><p>For example, if the file that you're trying to open doesn't exist in your current working directory:</p><pre><code class="language-python">f = open("names.txt")</code></pre><p>You will see this error:</p><pre><code class="language-python">Traceback (most recent call last):
File "&lt;path&gt;", line 8, in &lt;module&gt;
f = open("names.txt")
FileNotFoundError: [Errno 2] No such file or directory: 'names.txt'</code></pre><p>Let's break this error down this line by line:</p><ul><li><code>File "&lt;path&gt;", line 8, in &lt;module&gt;</code>. This line tells you that the error was raised when the code on the file located in <code>&lt;path&gt;</code> was running. Specifically, when <code>line 8</code> was executed in <code>&lt;module&gt;</code>.</li><li><code>f = open("names.txt")</code>. This is the line that caused the error. </li><li><code>FileNotFoundError: [Errno 2] No such file or directory: 'names.txt'</code> . This line says that a <code>FileNotFoundError</code> exception was raised because the file or directory <code>names.txt</code> doesn't exist.</li></ul><p>💡 <strong>Tip: </strong>Python is very descriptive with the error messages, right? This is a huge advantage during the process of debugging. </p><h3 id="permissionerror">PermissionError</h3><p>This is another common exception when working with files. According to the <a href="https://docs.python.org/3/library/exceptions.html#PermissionError">Python Documentation</a>, this exception is:</p><blockquote>Raised when trying to run an operation without the adequate access rights - for example filesystem permissions.</blockquote><p>This exception is raised when you are trying to read or modify a file that don't have permission to access. If you try to do so, you will see this error:</p><pre><code class="language-python">Traceback (most recent call last):
File "&lt;path&gt;", line 8, in &lt;module&gt;
f = open("&lt;file_path&gt;")
PermissionError: [Errno 13] Permission denied: 'data'</code></pre><h3 id="isadirectoryerror">IsADirectoryError</h3><p>According to the <a href="https://docs.python.org/3/library/exceptions.html#IsADirectoryError">Python Documentation</a>, this exception is:</p><blockquote>Raised when a file operation is requested on a directory.</blockquote><p>This particular exception is raised when you try to open or work on a directory instead of a file, so be really careful with the path that you pass as argument.</p><h3 id="how-to-handle-exceptions">How to Handle Exceptions</h3><p>To handle these exceptions, you can use a <strong>try/except</strong> statement. With this statement, you can "tell" your program what to do in case something unexpected happens.</p><p>This is the basic syntax:</p><pre><code>try:
# Try to run this code
except &lt;type_of_exception&gt;:
# If an exception of this type is raised, stop the process and jump to this block
</code></pre><p>Here you can see an example with <code>FileNotFoundError</code>:</p><pre><code class="language-python">try:
f = open("names.txt")
except FileNotFoundError:
print("The file doesn't exist")</code></pre><p>This basically says:</p><ul><li>Try to open the file <code>names.txt</code>.</li><li>If a <code>FileNotFoundError</code> is thrown, don't crash! Simply print a descriptive statement for the user. </li></ul><p>💡 <strong>Tip:</strong> You can choose how to handle the situation by writing the appropriate code in the <code>except</code> block. Perhaps you could create a new file if it doesn't exist already.</p><p>To close the file automatically after the task (regardless of whether an exception was raised or not in the <code>try</code> block) you can add the <code>finally</code> block. </p><pre><code>try:
# Try to run this code
except &lt;exception&gt;:
# If this exception is raised, stop the process immediately and jump to this block
finally:
# Do this after running the code, even if an exception was raised</code></pre><p>This is an example:</p><pre><code class="language-python">try:
f = open("names.txt")
except FileNotFoundError:
print("The file doesn't exist")
finally:
f.close()</code></pre><p>There are many ways to customize the try/except/finally statement and you can even add an <code>else</code> block to run a block of code only if no exceptions were raised in the <code>try</code> block. </p><p><strong>💡 Tip:</strong> To learn more about exception handling in Python, you may like to read my article: <a href="/news/exception-handling-python/">"How to Handle Exceptions in Python: A Detailed Visual Introduction"</a>. </p><h2 id="-in-summary">🔸 In Summary</h2><ul><li>You can create, read, write, and delete files using Python. </li><li>File objects have their own set of methods that you can use to work with them in your program.</li><li>Context Managers help you work with files and manage them by closing them automatically when a task has been completed.</li><li>Exception handling is key in Python. Common exceptions when you are working with files include <code>FileNotFoundError</code>, <code>PermissionError</code> and <code>IsADirectoryError</code>. They can be handled using try/except/else/finally.</li></ul><p><strong><strong><strong><strong>I really hope you liked my article and found it helpful. </strong></strong></strong></strong>Now you can work with files in your Python projects. <a href="https://www.udemy.com/user/estefania-cn/">Check out my online courses</a>. Follow me on <a href="https://twitter.com/EstefaniaCassN">Twitter</a>. ⭐️</p>
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
