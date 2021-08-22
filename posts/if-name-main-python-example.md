---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c99de740569d1a4ca2229.jpg"
tags: [Python]
description: "When a Python interpreter reads a Python file, it first sets "
author: "Milad E. Fahmy"
title: "Python if __name__ == __main__ Explained with Code Examples"
created: "2021-08-16T15:36:11+02:00"
modified: "2021-08-16T15:36:11+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python ">
<header class="post-full-header">
<h1 class="post-full-title">Python if __name__ == __main__ Explained with Code Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c99de740569d1a4ca2229.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c99de740569d1a4ca2229.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c99de740569d1a4ca2229.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c99de740569d1a4ca2229.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c99de740569d1a4ca2229.jpg" alt="Python if __name__ == __main__ Explained with Code Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
print("File two __name__ is set to: {}" .format(__name__))
import file_two
print("File one __name__ is set to: {}" .format(__name__))
</code></pre><figcaption>file_one.py</figcaption></figure><p>Running our <code>file_one</code> code once again will show that the <code>__name__</code> variable in the <code>file_one</code> did not change, and still remains set to <code>__main__</code>. But now the variable <code>__name__</code> in <code>file_two</code> is set as its module name, hence <code>file_two</code>.</p><p>The result should look like this:</p><pre><code>File two __name__ is set to: file_two
File one __name__ is set to: __main__
</code></pre><p>But run <code>file_two</code> directly and you will see that its name is set to <code>__main__</code>:</p><pre><code>File two __name__ is set to: __main__
</code></pre><p>The variable <code>__name__</code> for the file/module that is run will be always <code>__main__</code>. But the <code>__name__</code> variable for all other modules that are being imported will be set to their module's name.</p><h2 id="python-file-naming-conventions">Python File Naming Conventions</h2><p>The usual way of using <code>__name__</code> and <code>__main__</code> looks like this:</p><pre><code class="language-python">if __name__ == "__main__":
Do something here
import file_two
print("File one __name__ is set to: {}" .format(__name__))
if __name__ == "__main__":
print("File one executed when ran directly")
else:
print("File one executed when imported")
print("File two __name__ is set to: {}" .format(__name__))
if __name__ == "__main__":
print("File two executed when ran directly")
else:
print("File two executed when imported")
</code></pre><figcaption>file_two.py</figcaption></figure><p>Again, when running <code>file_one</code> you will see that the program recognized which of these two modules is <code>__main__</code> and executed the code according to our first <code>if else</code> statements.</p><p>The result should look like this:</p><pre><code>File two __name__ is set to: file_two
File two executed when imported
File one __name__ is set to: __main__
File one executed when ran directly
</code></pre><p>Now run <code>file_two</code> and you will see that the <code>__name__</code> variable is set to <code>__main__</code>:</p><pre><code>File two __name__ is set to: __main__
File two executed when ran directly
import file_two
print("File one __name__ is set to: {}" .format(__name__))
def function_one():
print("Function one is executed")
def function_two():
print("Function two is executed")
if __name__ == "__main__":
print("File one executed when ran directly")
else:
print("File one executed when imported")
</code></pre><figcaption>file_one.py</figcaption></figure><p><code>file_two</code>:</p><pre><code class="language-python"># Python module to import
print("File two __name__ is set to: {}" .format(__name__))
def function_three():
print("Function three is executed")
if __name__ == "__main__":
print("File two executed when ran directly")
else:
print("File two executed when imported")
</code></pre><p>Now the functions are loaded but not run. </p><p>To run one of these functions modify the <code>if __name__ == "__main__"</code> part of <code>file_one</code> to look like this:</p><pre><code class="language-python">if __name__ == "__main__":
print("File one executed when ran directly")
function_two()
else:
print("File one executed when imported")
</code></pre><p>When running <code>file_one</code> you should see should be like this:</p><pre><code>File two __name__ is set to: file_two
File two executed when imported
File one __name__ is set to: __main__
File one executed when ran directly
Function two is executed
</code></pre><p>Also, you can run functions from imported files. To do that, modify the <code>if __name__ == “__main__”</code> part of <code>file_one</code> to look like this:</p><pre><code class="language-python">if __name__ == "__main__":
print("File one executed when ran directly")
function_two()
file_two.function_three()
else:
print("File one executed when imported")
</code></pre><p>And you can expect a result like this:</p><pre><code>File two __name__ is set to: file_two
File two executed when imported
File one __name__ is set to: __main__
File one executed when ran directly
Function two is executed
Function three is executed
print("File two __name__ is set to: {}" .format(__name__))
def function_three():
print("Function three is executed")
def function_four():
print("Function four is executed")
if __name__ == "__main__":
print("File two executed when ran directly")
else:
print("File two executed when imported")
from file_two import function_three
print("File one __name__ is set to: {}" .format(__name__))
def function_one():
print("Function one is executed")
def function_two():
print("Function two is executed")
if __name__ == "__main__":
print("File one executed when ran directly")
function_two()
function_three()
else:
print("File one executed when imported")</code></pre><figcaption>file_one.py</figcaption></figure><h2 id="conclusion">Conclusion</h2><p>There is a really nice use case for the <code>__name__</code> variable, whether you want a file that can be run as the main program or imported by other modules. We can use an <code>if __name__ == "__main__"</code> block to allow or prevent parts of code from being run when the modules are imported.</p><p>When the Python interpreter reads a file, the <code>__name__</code> variable is set as <code>__main__</code> if the module being run, or as the module's name if it is imported. Reading the file executes all top level code, but not functions and classes (since they will only get imported).</p><p>Bra gjort! (That means "Well done" in Swedish!)</p><p>Check out more articles like this on my <a href="/news/author/goran/">freeCodeCamp profile</a>, <a href="https://medium.com/@goranaviani">Medium profile</a>, and other fun stuff I build on my <a href="https://github.com/GoranAviani">GitHub page</a>.</p>
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
