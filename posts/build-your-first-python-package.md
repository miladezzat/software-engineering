---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c980f740569d1a4ca17ef.jpg"
tags: [Python]
description: "A few months ago, I decided to release Caer, a Computer Visio"
author: "Milad E. Fahmy"
title: "How to Build Your Very First Python Package"
created: "2021-08-16T15:35:16+02:00"
modified: "2021-08-16T15:35:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-package ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build Your Very First Python Package</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c980f740569d1a4ca17ef.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c980f740569d1a4ca17ef.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c980f740569d1a4ca17ef.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c980f740569d1a4ca17ef.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c980f740569d1a4ca17ef.jpg" alt="How to Build Your Very First Python Package">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>A few months ago, I decided to release <a href="http://github.com/jasmcaus/caer" rel="noopener">Caer</a>, a Computer Vision package available in Python. I found the process to be excruciatingly painful. You can probably guess why  — little (and confusing) documentation, lack of good tutorials, and so on.</p><p>So I decided to write this article in the hope that it'll help people who are struggling to do this. We’re going to build a very simple module and make it available to anyone around the world. </p><p>The contents of this module follow a very basic structure. There are, in total, four Python files, each of which has a single method within it. We’re going to keep this real simple for now.</p><pre><code>base-verysimplemodule  --&gt; Base
└── verysimplemodule   --&gt; Actual Module
├── extras
│   ├── multiply.py
│   ├── divide.py
├── add.py
├── subtract.py</code></pre><p>You will notice that I have a folder called <code>verysimplemodule</code> which, in turn, has two Python files <code>add.py</code> and <code>subtract.py</code>. There is also a folder called <code>extras</code> (which contains <code>multiply.py</code> and <code>divide.py</code>). This folder will form the basis of our Python module.</p><h3 id="bringing-out-the-__init__s">Bringing out the __init__s</h3><p>Something that you’ll always find in <em>every </em>Python package is an <code>__init__.py</code> file. This file will tell Python to treat directories as modules (or sub-modules). </p><p>Very simply, it will hold the names of all the methods in all the Python files that are in its immediate directory.</p><p>A typical <code>__init__.py</code> file has the following format:</p><pre><code class="language-Python">from file import method
# 'method' is a function that is present in a file called 'file.py'</code></pre><p>When building packages in Python, you are required to add an <code>__init__.py</code> file in every sub-directory in your package. These sub-directories are the <em>sub-modules </em>of your package.</p><p>For our case, we’ll add our __init__.py files to the ‘actual module’ directory <code>verysimplemodule</code>, like this:</p><pre><code class="language-Python">from add import add
from subtract import subtract</code></pre><p>and we’re going to do the same for the <code>extras</code> folder, like this:</p><pre><code class="language-Python">from multiply import multiply
from divide import divide</code></pre><p>Once that’s done, we’re pretty much halfway through the process!</p><h3 id="how-to-set-up-setup-py">How to set up setup.py</h3><p>Within the <code>base-verysimplemodule</code> folder (and in the same directory as our module <code>verysimplemodule</code> ), we need to add a <code>setup.py</code> file. This file is essential if you intend to <em>build </em>the actual module in question.</p><p>Note: Feel free to name the <code>setup.py</code> file as you wish. This file is not name-specific as our <code>__init__.py</code> file is. </p><p>Possible name choices are <code>setup_my_very_awesome_python_package.py</code> and <code>python_package_setup.py</code> , but it’s usually best practice to stick with <code>setup.py</code>.</p><p>The <code>setup.py</code> file will contain information about your package, specifically the <em>name </em>of the package, its <em>version, </em>platform-dependencies and a whole lot more. </p><p>For our purposes, we’re not going to require advanced meta information, so the following code should suit most packages you build:</p><pre><code class="language-Python">from setuptools import setup, find_packages
VERSION = '0.0.1'
DESCRIPTION = 'My first Python package'
LONG_DESCRIPTION = 'My first Python package with a slightly longer description'
# Setting up
setup(
# the name must match the folder name 'verysimplemodule'
name="verysimplemodule",
version=VERSION,
author="Jason Dsouza",
author_email="&lt;youremail@email.com&gt;",
description=DESCRIPTION,
long_description=LONG_DESCRIPTION,
packages=find_packages(),
install_requires=[], # add any additional packages that
# needs to be installed along with your package. Eg: 'caer'
keywords=['python', 'first package'],
classifiers= [
"Development Status :: 3 - Alpha",
"Intended Audience :: Education",
"Programming Language :: Python :: 2",
"Programming Language :: Python :: 3",
"Operating System :: MacOS :: MacOS X",
"Operating System :: Microsoft :: Windows",
]
)</code></pre><p>With that done, all we have to do next is run the following command in the same directory as <code>base-verysimplemodule</code>:</p><pre><code>python setup.py sdist bdist_wheel</code></pre><p>This will build all the necessary packages that Python will require. The <code>sdist</code> and <code>bdist_wheel</code> commands will create a source distribution and a wheel that you can later upload to PyPi.</p><h3 id="pypi-here-we-come-">PyPi — here we come!</h3><p><a href="https://pypi.org/" rel="noopener">PyPi</a> is the official Python repository where all Python packages are stored. You can think of it as the <em>Github for Python Packages. </em></p><p>To make your Python package available to people around the world, you’ll need to have an <a href="https://pypi.org/account/register/" rel="noopener">account with PyPi</a>.</p><p>With that done, we’re all set to upload our package on PyPi. Remember the source distribution and wheel that were built when we ran <code>python setup.py</code> ? Well, those are what will actually be uploaded to PyPi.</p><p>But before you do that, you need to install <code>twine</code> if you don’t already have it installed. It’s as simple as &nbsp;<code>pip install twine</code>.</p><h3 id="how-to-upload-your-package-to-pypi">How to upload your package to PyPi</h3><p>Assuming you have <code>twine</code> installed, go ahead and run:</p><pre><code>twine upload dist/*</code></pre><p>This command will upload the contents of the <code>dist</code> folder that was automatically generated when we ran <code>python setup.py</code>. You will get a prompt asking you for your PyPi username and password, so go ahead and type those in.</p><p>Now, if you’ve followed this tutorial to the T, you might get an error along the lines of <strong>repository already exists. </strong></p><p>This is usually because there is a name clash between the name of your package and a package that already exists. In other words, change the name of your package — somebody else has already taken that name.</p><p>And that’s it!</p><p>To proudly <code>pip</code> install your module, fire up a terminal and run:</p><pre><code>pip install &lt;package_name&gt;
# in our case, this is
pip install verysimplemodule</code></pre><p>Watch how Python neatly installs your package from the binaries that were generated earlier.</p><p>Open up a Python interactive shell and try importing your package:</p><pre><code class="language-Shell">&gt;&gt; import verysimplemodule as vsm
&gt;&gt; vsm.add(2,5)
7
&gt;&gt; vsm.subtract(5,4)
1</code></pre><p>To access the division and multiplication methods (remember that they were in a folder called <code>extras</code> ?), run:</p><pre><code class="language-shell">&gt;&gt; import verysimplemodule as vsm
&gt;&gt; vsm.extras.divide(4,2)
2
&gt;&gt; vsm.extras.multiple(5,3)
15</code></pre><p>It’s as simple as that.</p><p>Congratulations! You’ve just built your first Python package. Albeit very simple, your package is now available to be downloaded by anyone around the world (so long as they have Python, of course).</p><h2 id="what-s-next">What's next?</h2><h3 id="test-pypi">Test PyPi</h3><p>The package that we used in this tutorial was an extremely simple module — basic mathematical operations of addition, subtraction, multiplication and division. It doesn’t make sense to upload them directly to PyPi <em>especially </em>since you’re trying this out for the first time.</p><p>Lucky for us, there is <a href="http://test.pypi.org/" rel="noopener">Test PyPi</a>, a separate instance of PyPi where you can test out and experiment on your package (you will need to sign up for a separate account on the platform). </p><p>The process that you follow to upload to Test PyPi is pretty much the same with a few minor changes.</p><pre><code class="language-Shell"># The following command will upload the package to Test PyPi
# You will be asked to provide your Test PyPi credentials
twine upload --repository testpypi dist/*</code></pre><p>To download projects from Test PyPi:</p><pre><code class="language-Shell">pip install --index-url "https://test.pypi.org/simple/&lt;package_name&gt;"</code></pre><h3 id="advanced-meta-information">Advanced Meta Information</h3><p>The meta information we used in the <code>setup.py</code> file was very basic. You can add additional information such as multiple maintainers (if any), author email, license information and a whole host of other data. </p><p><a href="https://packaging.python.org/guides/distributing-packages-using-setuptools/" rel="noopener">This article</a> will prove particularly helpful if you intend to do so.</p><h3 id="look-at-other-repositories">Look at other repositories</h3><p>Looking at how other repositories have built their packages can prove to be super useful to you. </p><p>When building <a href="https://github.com/jasmcaus/caer" rel="noopener">Caer</a>, I would constantly look at how <a href="https://github.com/numpy/numpy" rel="noopener">Numpy</a> and <a href="https://github.com/deepmind/sonnet" rel="noopener">Sonnet</a> set up their packages. I would recommend taking a look at <a href="https://github.com/jasmcaus/caer" rel="noopener">Caer’s</a>, <a href="https://github.com/numpy/numpy" rel="noopener">Numpy’s</a>, and <a href="https://github.com/tensorflow/tensorflow" rel="noopener">Tensorflow’s</a> repositories if you plan on building slightly more advanced packages.</p>
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
