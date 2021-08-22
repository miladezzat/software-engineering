---
card: "/images/default.jpg"
tags: [Python]
description: "If you want to learn how these functions work behind the scen"
author: "Milad E. Fahmy"
title: "Python List Files in a Directory Guide - listdir VS system( ls ) Explained with Examples"
created: "2021-08-16T15:37:07+02:00"
modified: "2021-08-16T15:37:07+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-tutorial tag-command ">
<header class="post-full-header">
<h1 class="post-full-title">Python List Files in a Directory Guide - listdir VS system("ls") Explained with Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/04/listdir-vs-system-v2.png 300w,
/news/content/images/size/w600/2020/04/listdir-vs-system-v2.png 600w,
/news/content/images/size/w1000/2020/04/listdir-vs-system-v2.png 1000w,
/news/content/images/size/w2000/2020/04/listdir-vs-system-v2.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/04/listdir-vs-system-v2.png" alt="Python List Files in a Directory Guide - listdir VS system(&quot;ls&quot;) Explained with Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h2 id="-welcome">🔹 Welcome</h2><p>If you want to learn how these functions work behind the scenes and how you can use their full power, then this article is for you.</p><p>We will start by diving into concepts that are essential to work with <code>listdir</code> and <code>system</code>:</p><ul><li>The built-in Python <code>os</code> module and how to import it.</li><li>The concepts of "directory" and "current working directory".</li><li>How to check and change your current working directory. </li><li>The difference between an absolute path and a relative path.</li></ul><p>Then, we will dive into the functions themselves:</p><ul><li>How to work with the <code>listdir</code> function and when to use it.</li><li>How to work with the <code>system("ls")</code> function and when to use it.</li><li>Examples of both of them and how they work behind the scenes.</li></ul><p>Let's begin! ⭐</p><h2 id="-the-os-module">🔸 The OS Module</h2><p>The two functions that we will discuss: <code>listdir()</code> and <code>system()</code> belong to the <code>os</code> module. This module includes functions that are used to interact with your operating system, performing actions like:</p><ul><li>Making a new directory.</li><li>Renaming an existing directory.</li><li>Removing a directory.</li><li>Displaying the path to your current working directory.</li><li>Much more! </li></ul><p><strong>💡 Tips:</strong> </p><ul><li>A <strong>directory </strong>is what we commonly know as a "folder", where we usually store related files and/or other directories, creating a hierarchy of directories within directories that are called subdirectories. An example of a directory is your "Documents" folder.</li><li>A <strong>module </strong>is a file that contains related Python code. </li></ul><h3 id="how-to-import-the-os-module">How to Import the OS Module</h3><p>To use the <code>os</code> module in your script, you need to "import" it. Importing a module means gaining access to all the functions and variables that are stored within the module. We import a module when we want to use its code in our script. </p><p>To import the <code>os</code> module, you simply need to include this line at the top of your Python script or run this line in the interactive shell:</p><pre><code class="language-python">import os</code></pre><p>This will give you access to all the functions defined in the <code>os</code> module.</p><p><strong>💡 Tip:</strong> this module was already installed when you installed Python 3, so you will be able to use it immediately.</p><p>To be able to use the functions from the <code>os</code> module, you will need to add the prefix <code>os.</code> before the name of the function that you want to call, like this:</p><pre><code class="language-python">os.&lt;function&gt;(&lt;params&gt;)</code></pre><p>For example:</p><pre><code>os.mkdir("New Folder")</code></pre><h3 id="how-to-import-individual-functions">How to Import Individual Functions</h3><p>If you are only going to work with one or two functions from the module, you can import them individually using this syntax:</p><pre><code>from &lt;module&gt; import &lt;function1&gt;, &lt;function2&gt;, ...</code></pre><p>For example:</p><pre><code class="language-python">from os import listdir, system</code></pre><p>In this case, you can call the functions in your script as you normally would, <strong>without </strong>adding the <code>os.</code> prefix, like this:</p><pre><code class="language-python">&lt;function&gt;(&lt;params&gt;)</code></pre><p>For example:</p><pre><code>mkdir("New Folder")</code></pre><h2 id="-current-working-directory">🔹 Current Working Directory</h2><p>Now let's see a very important concept that you need to know before you start working with <code>listdir</code> and <code>system</code>. Your current working directory, as the name implies, is the directory (folder) where you are currently working. </p><p>You can check your current working directory with this function from the <code>os</code> module:</p><pre><code class="language-python">os.getcwd()</code></pre><p>This will show you the path to your current working directory. </p><p>💡 <strong>Tip:</strong> <code>cwd</code> means "current working directory."</p><h3 id="from-the-interactive-shell">From the Interactive Shell</h3><p>If I run this command in the interactive shell (Windows), I see this:</p><pre><code class="language-python">&gt;&gt;&gt; os.getcwd()
'C:\\Users\\estef\\AppData\\Local\\Programs\\Python\\Python38-32'</code></pre><p>This is the full path to my current working directory:</p><pre><code class="language-python">'C:\\Users\\estef\\AppData\\Local\\Programs\\Python\\Python38-32'</code></pre><h3 id="from-a-script">From a Script</h3><p>If I run this command from a script, like this:</p><pre><code class="language-python">import os
print(os.getcwd())</code></pre><p> I see:</p><pre><code class="language-python">C:\Users\estef\Documents\freeCodeCamp\freeCodeCamp News\listdir vs system</code></pre><p>The full path to the script (its location in the system, in the hierarchy of directories).</p><p>💡 <strong>Tip:</strong> If you run a script (a Python file), your current working directory is the directory where the script is currently in.</p><h3 id="how-to-change-your-current-working-directory">How to Change your Current Working Directory</h3><p>You can change your current working directory with this command from the <code>os</code> module:</p><pre><code class="language-python">os.chdir(&lt;path&gt;)</code></pre><p>You will need to specify the path to the new working directory, passing it as an argument, formatted as a string. It can be either an absolute path or a relative path. </p><p>💡 <strong>Tip: </strong></p><ul><li>An <strong>absolute path</strong> specifies all the sequence of directories that you need to go through to reach your target directory. This path starts from the root directory of your system. </li></ul><p>For example:</p><pre><code class="language-python">&gt;&gt;&gt; import os
&gt;&gt;&gt; os.chdir(r"C:\Users\estef\Documents\FreeCodeCamp\freeCodeCamp News\9 - listdir vs system")
# Checking current working directory:
&gt;&gt;&gt; os.getcwd()
'C:\\Users\\estef\\Documents\\FreeCodeCamp\\freeCodeCamp News\\9 - listdir vs system'</code></pre><p>Notice that I added an <code>r</code> before the absolute path to convert the string into a raw string. If you use <code>\</code> and you don't add the <code>r</code>, you will get an error because the <code>\</code> symbol will be treated as a special character.</p><p>Alternatively, you could replace the backslashes &nbsp;<code>\</code> with forward slashes <code>/</code> in the path:</p><pre><code class="language-python">&gt;&gt;&gt; os.chdir("C:/Users/estef/Documents/FreeCodeCamp/freeCodeCamp News/9 - listdir vs system")
# Checking current working directory
&gt;&gt;&gt; os.getcwd()
'C:\\Users\\estef\\Documents\\FreeCodeCamp\\freeCodeCamp News\\9 - listdir vs system'</code></pre><ul><li>A <strong>relative path</strong> specifies the path that you want to follow to find the target directory, but now the path starts from your <strong>current </strong>working directory. It's shorter and simpler than the absolute path. </li></ul><p>For example, if your current working directory contains a subdirectory (folder) <code>Directory 1</code>, you can move to this directory using a relative path (imagine it as a folder within another folder, and we are going deeper and deeper into the hierarchy), like this:</p><pre><code class="language-python">&gt;&gt;&gt; import os
&gt;&gt;&gt; os.chdir(".\Directory 1")
# Check current working directory
&gt;&gt;&gt; os.getcwd()
for image in images:
# Do something to the image
&gt;&gt;&gt; os.system("ls")</code></pre><p>This is the output:</p><pre><code class="language-python">'Directory 1'  'file 1.py'  'file 2.py'   main.py
0</code></pre><p>We can see the standard output in the console (the list of files and directories):</p><pre><code class="language-python">'Directory 1'  'file 1.py'  'file 2.py'   main.py</code></pre><p>and the return value:</p><pre><code class="language-python">0</code></pre><p>💡 <strong>Note:</strong> For these examples of the <code>system()</code> function, I'm working with an online command line tool called Repl.it since my computer has Windows installed and the command <code>ls</code> is not recognized by the default command prompt. </p><h3 id="limitations">Limitations</h3><p>One of the main limitation of this function is that the command passed as argument has to be recognized by the operating system or environment that you are working with. </p><p>For example, the <code>ls</code> command will not be recognized in Windows by default in the command prompt. You will see this error if you try to run it:</p><blockquote>'ls' is not recognized as an internal or external command, operable program or batch file.</blockquote><p>A similar command in Windows would be the <code>'dir'</code> command:</p><pre><code class="language-python">os.system('dir')</code></pre><p><strong>💡 Tip:</strong> There are alternative ways to run the <code>ls</code> command on Windows, such as using terminal programs that recognize Unix commands, but by default Windows does not recognize the <code>'ls'</code> command.</p><h3 id="return-value">Return Value</h3><p>According to the <a href="https://docs.python.org/3/library/os.html#os.system">Python documentation</a>:</p><blockquote>On Unix, the return value is the exit status of the process encoded in the format specified for <a href="https://docs.python.org/3/library/os.html#os.wait"><code>wait()</code></a>.</blockquote><p>and...</p><blockquote>On Windows, the return value is that returned by the system shell after running <em>command</em>.</blockquote><p>💡 <strong>Tip:</strong> Note that this function does not return a list. It simply displays the list as standard output, so you can't store it in a variable like you did with <code>listdir</code>.</p><h3 id="variations-of-the-ls-command">Variations of the <code>ls</code> command</h3><p>A key feature of <code>os.system('ls')</code> is that it has many helpful and interesting options to customize how present the output. Let's see some of them.</p><p><strong>Option 1:</strong> We can show more information about files and directories such as their size, location, and modification date and time using the command <code>ls -l</code>.</p><pre><code class="language-python">&gt;&gt;&gt; import os
&gt;&gt;&gt; os.system('ls -l')
total 12
drwxr-xr-x 1 runner runner  0 Apr  3 18:23 'Directory 1'
-rw-r--r-- 1 runner runner 11 Apr  3 18:38 'file 1.py'
-rw-r--r-- 1 runner runner 11 Apr  3 18:38 'file 2.py'
-rw-r--r-- 1 runner runner 11 Apr  3 18:38  main.py
0</code></pre><p><strong>Option 2: </strong>To be able to visually recognize directories faster, we can use <code>ls -F</code>, which adds a forward slash <code>/</code> to the end of their names (see <code>'Directory 1/'</code> below).</p><pre><code class="language-python">&gt;&gt;&gt; import os
&gt;&gt;&gt; os.system('ls -F')
'Directory 1'/  'file 1.py'  'file 2.py'   main.py
0</code></pre><p><strong>Option 3:</strong> To sort the files by size, we can use the command <code>ls -lS</code>.</p><pre><code class="language-python">&gt;&gt;&gt; import os
&gt;&gt;&gt; os.system('ls -lS')
total 12
-rw-r--r-- 1 runner runner 11 Apr  3 18:38 'file 1.py'
-rw-r--r-- 1 runner runner 11 Apr  3 18:38 'file 2.py'
-rw-r--r-- 1 runner runner 11 Apr  3 18:38  main.py
drwxr-xr-x 1 runner runner  0 Apr  3 18:23 'Directory 1'
0</code></pre><p>There are many more options for customization that can be helpful for your particular goal. <a href="https://en.wikipedia.org/wiki/Ls">Here you can find more information</a> about the <code>-ls</code> command and how you can use its full power.</p><h2 id="-summary-of-listdir-vs-system-ls-">🔸 Summary of listdir vs. system("ls")</h2><ul><li><strong>Purpose:</strong> <code>listdir</code> returns the list of file names and directories in the path specified (by default, the current working directory) while <code>system("ls")</code> only displays them as standard output.</li><li><strong>Operating System:</strong> <code>listdir</code> can be used independently of the operating system that you are working with. In contrast, <code>system('ls')</code> has to be executed in an operating system or environment that recognizes the <code>'ls'</code> command. </li><li><strong>Customization:</strong> you can filter the list returned by <code>listdir</code> if you need to remove files or directories using the <code>filter()</code> function and you can pass options to customize the output of <code>system('ls')</code>.</li></ul><p><strong>I really hope that you liked my article and found it helpful. </strong>Now you can work with these functions in your Python projects. <a href="https://www.udemy.com/user/estefania-cn/">Check out my online courses</a>. Follow me on <a href="https://twitter.com/EstefaniaCassN">Twitter</a>. ⭐️</p>
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
