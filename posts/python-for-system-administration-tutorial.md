---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9daf740569d1a4ca390c.jpg"
tags: [Bash]
description: "I have a bit of a love and hate relationship with bash. I spe"
author: "Milad E. Fahmy"
title: "How to Replace Bash with Python as Your Go-To Command Line Language"
created: "2021-08-16T15:37:32+02:00"
modified: "2021-08-16T15:37:32+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-bash tag-python tag-command-line ">
<header class="post-full-header">
<h1 class="post-full-title">How to Replace Bash with Python as Your Go-To Command Line Language</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9daf740569d1a4ca390c.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9daf740569d1a4ca390c.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9daf740569d1a4ca390c.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9daf740569d1a4ca390c.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9daf740569d1a4ca390c.jpg" alt="How to Replace Bash with Python as Your Go-To Command Line Language">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<li>Python has lots of nice libraries to help out with pretty much anything. That includes dealing with system operations, reading files, listing directories, writing for loops, checking for exit codes, and so on.</li>
<li>Autocomplete with IDEs. Seriously. Who wants to have to memorize anything?</li>
<li>Robust testing suite if that's your thing (and if it's not, you should consider making it your thing).</li>
<li>The iPython console. It's wonderful. It's amazing. <strong>I LOVE IT.</strong></li>
<li>Python is available on most systems, and if it's not you can get it with <a href="https://docs.conda.io/en/latest/miniconda.html">Miniconda</a>.</li>
<li>Robust error checking with try and catch blocks.</li>
<li>If you work on different operating systems you can use Python libraries that will deal with all that under the hood.</li>
<li>Even if you have no programming ability Python is an easy language to get started with.</li>
</ul>
<p>To get started, first off you'll need to either have Python installed or install it with Miniconda.</p>
<h3 id="checkifyouhaveipythoninstalled">Check if you have iPython installed</h3>
<pre><code>which python
which ipython
</code></pre>
<p>If both of these are successful, you're in business! If you have Python, but not iPython, you will have to install it. You could install it as a system package, but I really recommend that you just install it with Miniconda.</p>
<h3 id="installminiconda">Install Miniconda</h3>
<p>Grab the installer for your OS <a href="https://docs.conda.io/en/latest/miniconda.html">here</a>. I suggest getting the Python3 installation.</p>
<p>Then it's just a simple installation.</p>
<pre><code>bash Miniconda3-latest-Linux-x86_64.sh
</code></pre>
<p>Follow the prompts and you'll have Miniconda3 installed. Once you have it installed you'll want to run an update, because this is tech and of course you want to run an update. ;-)</p>
<pre><code>conda update conda
conda config --add channels conda-forge
conda update -y --all
conda install -y ipython
</code></pre>
<h3 id="troubleshooting">Troubleshooting</h3>
<p>If you have trouble installing any packages here are some tips.</p>
<ul>
<li>Run <code>conda clean --all</code> and try again.</li>
<li>Make sure you're using the correct channel.</li>
<li>Run <code>conda update -y --all</code></li>
<li>Try to install as little as possible to your global conda space. Instead create environments for different tasks and projects, which we will get into next.</li>
</ul>
<h3 id="createenvironmentswithconda">Create Environments with Conda</h3>
<p>If you've ever used virtualenv, pipenv (is that a thing?), Rbenv, plenv, anyenv or any of the other various envs that have popped up over the years, this will sound very familiar to you. The idea is that different projects should have their own isolated software environments.</p>
<pre><code>conda create -n my-project ipython package1 package2 package2
</code></pre>
<p><em>If you're like me and like to have iPython readily availabe make sure you install it to any new environments!</em></p>
<p>Before we get into the examples let's just list some handy packages along with their docs.</p>
<p>My go to package is the <a href="https://docs.python.org/3/library/os.html">os</a> package. You can use it to list directories, check if files exist, check if symlinks exist, make directories, run system commands, get and set environmental variables, and more. It's great!</p>
<p>My second package for running system commands that don't exist as handy python libraries is the <a href="https://docs.python.org/3/library/subprocess.html">subprocess</a> module.</p>
<p>The <a href="https://docs.python.org/3/library/shutil.html">shutil</a> has file operations that aren't in the os library.</p>
<p>The <a href="https://docs.python.org/3/library/pprint.html">pprint</a> library prints out complex data structures with nice indentation.</p>
<p>The <a href="https://docs.pytest.org/en/latest/">pytest</a> library let's you test your Python code, because let's face it, nothing ever works correctly the first (few) times.</p>
<p>Finally! Code!</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/12/Screenshot-2019-12-13-10.33.52.png" alt="Screenshot-2019-12-13-10.33.52"></p>
<p>When you're using Python for system administration you can dive straight into the iPython console, or write scripts and then execute them with <code>python name-of-script.py</code>.</p>
<p>If you prefer to write your scripts you have so many choices, and it's truly a matter of personal preference. I use <a href="https://www.jetbrains.com/pycharm/">PyCharm</a>, which is paid, but <a href="https://code.visualstudio.com/">Visual Studio Code</a> and <a href="https://atom.io/">Atom</a> are equally excellent free choices.</p>
<p>I find that it depends on what I'm working on. Sometimes I just open up the iPython console and start typing, and other times I need something more robust with tests and whatnot.</p>
<p>If you're using either the iPython console or any of the editors I listed above, you will have autocomplete. Autocomplete is awesome! With iPython simply start typing your function and press tab to get a list of potential functions you may want.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/12/Screenshot-2019-12-13-10.49.07.png" alt="Screenshot-2019-12-13-10.49.07"></p>
<p>I cannot express how much I love autocomplete. ;-)</p>
<h2 id="gethelp">Get Help</h2>
<p>You can go to any of the doc pages for any library, but if you know the name of either the library or the function you can bring it up in iPython.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/12/Screenshot-2019-12-13-10.55.14.png" alt="Screenshot-2019-12-13-10.55.14"></p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/12/Screenshot-2019-12-13-10.55.55.png" alt="Screenshot-2019-12-13-10.55.55"></p>
<p>First you will need to import your packages</p>
<pre><code>import os
import subprocess
import shutil
from pprint import pprint
</code></pre>
<p>Here are some examples of common file and directory operations.</p>
<pre><code># Get your current working directly
# This returns a string
my_cwd = os.getcwd()
print(my_cwd)
</code></pre>
<pre><code># List the contents of a directory
# This returns a list
dir_list = os.listdir()
for item in dir_list:
print(item)
</code></pre>
<pre><code># Get the Absolute Path name of a file (file + current working dir)
os.path.abspath('some-file')
</code></pre>
<pre><code>#Get the basename - returns file
os.path.basename('/path/to/file')
</code></pre>
<pre><code># Split a directory path - platform independent
os.path.split(os.getcwd())
# Out[17]: ('/Users', 'jillian')
</code></pre>
<pre><code># Check if a path exists
os.path.exists('/path/on/filesystem')
</code></pre>
<pre><code># Check if a path is a symlink
os.path.islink()
</code></pre>
<p>Move files and directories around</p>
<pre><code># Copy a directory
# cp -rf
shutil.copytree('src', 'dest')
</code></pre>
<pre><code># Copy a file
# cp -rf
shutil.copyfile('file1', 'file2')
</code></pre>
<pre><code># Move a directory
# mv
shutil.move('src', 'dest')
</code></pre>
<p>Not everything is going to be available through python libraries, such as installing system libraries, so run a few system commands!</p>
<pre><code># Run an arbitrary system command
command = "echo 'hello'"
result = subprocess.run(command.split(' '), stdout=subprocess.PIPE, stderr=subprocess.PIPE)
#Print the stdout and stderr
print(result.stdout)
print(result.stderr)
</code></pre>
<p>Write to files!</p>
<pre><code># Write to a file (and create it if it doesn't exist)
# echo "hello" &gt; hello.txt
f= open("hello.txt","w+")
f.write("hello!")
f.close()
</code></pre>
<pre><code># Append to a file
# echo "hello" &gt;&gt; hello.txt
f = open("hello.txt", "a+")
f.write("hello again!")
f.close()
</code></pre>
<p>Tests mostly work by using a function called assert, which is essentially saying make sure this is true and if not die loudly.</p>
<pre><code>def test_system_command():
"""Test the exit code of a system command"""
command = "echo 'hello'"
result = subprocess.run(command.split(' '), stdout=subprocess.PIPE)
assert result.returncode == 0
</code></pre>
<p>Put this function in a file called <code>test_my_code.py</code> and run as <code>pytest test_my_code.py</code>.</p>
<p>That's it for my main tips and tricks for using Python as your go-to bash replacement. The next time you need to write a loop in bash, consider breaking out the iPython console and seeing what you can come up with instead!</p>
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
