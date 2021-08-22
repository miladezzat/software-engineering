---
card: "https://cdn-media-1.freecodecamp.org/images/1*aBjEUaDShrMB9RFqbl_saQ.jpeg"
tags: [Python]
description: "I recently visited a company where I had a nice talk with one"
author: "Milad E. Fahmy"
title: "How to document your Django project using the Sphinx tool"
created: "2021-08-16T15:41:05+02:00"
modified: "2021-08-16T15:41:05+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-documentation tag-django tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to document your Django project using the Sphinx tool</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*aBjEUaDShrMB9RFqbl_saQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*aBjEUaDShrMB9RFqbl_saQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*aBjEUaDShrMB9RFqbl_saQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*aBjEUaDShrMB9RFqbl_saQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*aBjEUaDShrMB9RFqbl_saQ.jpeg" alt="How to document your Django project using the Sphinx tool">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I recently visited a company where I had a nice talk with one of its employees. We talked about technology and programming. Then we touched the subject of project documentation. Specifically how React does it automatically but Django doesn’t. That made me think I should do some automatic documentation for my Django projects.</p><p>I couldn’t find any relevant documentation on how its done, so it took me a little longer than I originally planned. Not because it was hard, but because I found that the Sphinx official documentation and other resources to be outdated or obscure.</p><p>So today I have made a simple but comprehensive tutorial that explains how to make Django documentation using the Sphinx documentation tool in Ubuntu.</p><h4 id="install-sphinx"><strong>Install Sphinx</strong></h4><p>First you should enter the virtual environment for your Django project.</p><p>Installing Sphinx is quite straightforward using pip3 (pip for Python 3):</p><pre><code class="language-bash">pip3 install sphinx</code></pre><h4 id="create-a-documentation-directory">Create a documentation directory</h4><p>Once you’ve installed Sphinx, you will need to create the document root folder. This folder will hold your documentation and other files you will need (images, about pages, and so on…).</p><p>Create your document root folder in your project main folder and name it /docs.</p><p>To start Sphinx, run this command inside your /docs folder:</p><pre><code class="language-bash">sphinx-quickstart</code></pre><p>You’ll have a lot of options now. In most cases you can simply retype the default option, but there are some options you need to pay attention to.</p><p>This is how I answered:</p><pre><code>Welcome to the Sphinx 1.7.5 quickstart utility.
Please enter values for the following settings (just press Enter to
accept a default value, if one is given in brackets).
Selected root path: .
You have two options for placing the build directory for Sphinx output.
Either, you use a directory “_build” within the root path, or you separate
“source” and “build” directories within the root path.
&gt; Separate source and build directories (y/n) [n]: n
Inside the root directory, two more directories will be created; “_templates”
for custom HTML templates and “_static” for custom stylesheets and other static
files. You can enter another prefix (such as “.”) to replace the underscore.
&gt; Name prefix for templates and static dir [_]: _
The project name will occur in several places in the built documentation.
&gt; Project name: Your_project_name
&gt; Author name(s): Goran Aviani
&gt; Project release []: 1.0
If the documents are to be written in a language other than English,
you can select a language here by its language code. Sphinx will then
translate text that it generates into that language.
For a list of supported codes, see
http://sphinx-doc.org/config.html#confval-language.
&gt; Project language [en]: en
The file name suffix for source files. Commonly, this is either “.txt”
or “.rst”. Only files with this suffix are considered documents.
&gt; Source file suffix [.rst]: .rst
One document is special in that it is considered the top node of the
“contents tree”, that is, it is the root of the hierarchical structure
of the documents. Normally, this is “index”, but if your “index”
document is a custom template, you can also set this to another filename.
&gt; Name of your master document (without suffix) [index]: index
Sphinx can also add configuration for epub output:
&gt; Do you want to use the epub builder (y/n) [n]: n
Indicate which of the following Sphinx extensions should be enabled:
&gt; autodoc: automatically insert docstrings from modules (y/n) [n]: y
&gt; doctest: automatically test code snippets in doctest blocks (y/n) [n]: y
&gt; intersphinx: link between Sphinx documentation of different projects (y/n) [n]: n
&gt; todo: write “todo” entries that can be shown or hidden on build (y/n) [n]: y
&gt; coverage: checks for documentation coverage (y/n) [n]: y
&gt; imgmath: include math, rendered as PNG or SVG images (y/n) [n]: y
&gt; mathjax: include math, rendered in the browser by MathJax (y/n) [n]: n
&gt; ifconfig: conditional inclusion of content based on config values (y/n) [n]: n
&gt; viewcode: include links to the source code of documented Python objects (y/n) [n]: n
&gt; githubpages: create .nojekyll file to publish the document on GitHub pages (y/n) [n]: n
A Makefile and a Windows command file can be generated for you so that you
only have to run e.g. `make html’ instead of invoking sphinx-build
directly.
&gt; Create Makefile? (y/n) [y]: y
&gt; Create Windows command file? (y/n) [y]: y
Creating file ./conf.py.
Creating file ./index.rst.
Creating file ./Makefile.
Creating file ./make.bat.
Finished: An initial directory structure has been created.
You should now populate your master file ./index.rst and create other documentation
source files. Use the Makefile to build the docs, like so:
make builder
where “builder” is one of the supported builders, e.g. html, latex or linkcheck.</code></pre><h4 id="django-connection">Django connection</h4><p>In your project folder, find /docs/conf.py and inside it, somewhere near the top of the file, find “#import os”. Just below it, write this:</p><pre><code class="language-py">import os
import sys
import django
sys.path.insert(0, os.path.abspath('..'))
os.environ['DJANGO_SETTINGS_MODULE'] = 'Your_project_name.settings'
django.setup()</code></pre><p><strong>Now there are two ways you can proceed:</strong></p><ol><li>You can use <em>sphinx-apidoc</em><strong> </strong>to generate completely automatic documentation, or</li><li>You can build your own modules that will show in the documentation.</li></ol><p>In this tutorial I am going to show you how to do it both ways.</p><h4 id="1-sphinx-apidoc">1. Sphinx-apidoc</h4><p>This is the simpler method where you just need to navigate to your /docs folder and execute:</p><pre><code class="language-bash">sphinx-apidoc -o . ..</code></pre><p>Now you need to build your documentation by running the command:</p><pre><code class="language-bash">make html</code></pre><p>Navigate to <em>Your_project_folder/docs/_build/html </em>and open<em> index.html. </em>This is the index page of your documentation.</p><h4 id="2-building-your-own-modules">2. Building your own modules</h4><p>This is the slightly more complicated way, but will give you much more freedom in organizing your documentation.</p><p>Now you’ll want to make documentation about your views, modules etc. But first let me show you an easy example, just so you understand the logic of this part:</p><p>Go in your /docs folder and create a new folder named “/modules”. Inside it create a file named all-about-me.rst:</p><pre><code class="language-bash">mkdir modulesf
touch modules/all-about-me.rst</code></pre><p>Inside all-about-me.rst write something like this:</p><pre><code class="language-rest">############
All about me
############
I’m Goran Aviani, a Django developer.</code></pre><p>Now you’ve created something to show in your documentation, but still you don’t have an actual place to show it. Go back to the /docs folder and open index.rst and just bellow this code</p><pre><code class="language-rest">.. toctree::
:maxdepth: 2
:caption: Contents:</code></pre><p>Add this:</p><pre><code class="language-rest">modules/all-about-me.rst</code></pre><p>Make it so there is a blank line between the upper code and the added line:</p><pre><code class="language-rest">.. toctree::
:maxdepth: 2
:caption: Contents:
modules/all-about-me.rst</code></pre><p>Now you need to build your documentation. Change the location to the folder that contains the Makefile ( that is the /docs folder). Then run in the terminal:</p><pre><code class="language-bash">make html</code></pre><p>You will find your documentation in</p><blockquote>Your_project_folder/docs/_build/html and open index.html</blockquote><p>You can do the same for your Django views:</p><p>Inside the /modules folder, create the views.rst file.</p><pre><code class="language-bash">touch views.rst</code></pre><p>Inside the views.rst file write this:</p><pre><code class="language-rest">Views
======
.. automodule:: yourapp.views
:members:
:undoc-members:</code></pre><p>Inside index.rst, just under modules/all-about-me.rst, add this:</p><pre><code class="language-rest">modules/views.rst</code></pre><p>Now you again need to build your documentation by running “make html” inside your /docs folder:</p><pre><code class="language-bash">make html</code></pre><p>Get the idea? First you create the .rst file and then you put it inside index.rst so it can be displayed on index.html page.</p><p>You can make same thing for your models. Go in your /modules folder and create models.rst file.</p><pre><code class="language-bash">touch models.rst</code></pre><p>You can add something like this in your models.rst file:</p><pre><code class="language-rest">Models
=======
.. automodule:: yourapp.models
:members:
:undoc-members:</code></pre><p>Inside index.rst just under modules/views.rst paste:</p><pre><code class="language-rest">modules/models.rst</code></pre><p>Inside your /docs folder run:</p><pre><code class="language-bash">make html</code></pre><h4 id="documentation-test">Documentation test</h4><p>You can test your documentation by running this code inside your /docs folder:</p><pre><code class="language-bash">make linkcheck</code></pre><p>Voilà! You are done!</p><p>This is my first public tutorial, so give me a few claps if you like it :)</p><p>Thank you for reading! Check out more articles like this on my freeCodeCamp profile: <a href="/news/author/goran/">https://www.freecodecamp.org/news/author/goran/</a> and other fun stuff I build on my GitHub page:<a href="https://github.com/GoranAviani" rel="noopener"> https://github.com/GoranAviani</a></p>
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
