---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9dba740569d1a4ca3953.jpg"
tags: [Python]
description: "Python comes with several built-in modules, but the Python co"
author: "Milad E. Fahmy"
title: "How to Use pip install in Python"
created: "2021-08-16T15:37:33+02:00"
modified: "2021-08-16T15:37:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">How to Use pip install in Python</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9dba740569d1a4ca3953.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9dba740569d1a4ca3953.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9dba740569d1a4ca3953.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9dba740569d1a4ca3953.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9dba740569d1a4ca3953.jpg" alt="How to Use pip install in Python">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>Python comes with several built-in modules, but the Python community has more to offer. It’s the modules that makes python so powerful!</p><p>Third party modules add so much more functionality to Python. So it's time to learn how to install these modules so that we can use those in our programs.</p><p>The simplest way is to use <code>pip</code></p><pre><code class="language-text">pip install &lt;module_name&gt;</code></pre><p>If you have used <code>npm</code>, then you can think of it as <em>npm</em> of Python.</p><p>Side note: The difference is that with npm, <code>npm install</code> by default installs packages locally to a project, whereas <code>pip install</code> by default installs globally. </p><p>To install modules locally, you need to create and activate what is called a <a href="http://docs.python-guide.org/en/latest/dev/virtualenvs/">virtual environment</a>, so <code>pip install</code> installs to the folder where that virtual environment is located, instead of globally (which may require administrator privileges).</p><p>Last time, in <a><code>import-statements</code></a> wiki we used <code>requests</code> module as an example. As it is a third party module we have to install it separately after installing python.</p><p>Installing it would be as simple as <code>pip install requests</code> . You can even pass various arguments along with it. The one that you’ll come across more often is <code>--upgrade</code>. You can upgrade a python module by :</p><pre><code class="language-text">pip install &lt;module_name&gt; --upgrade</code></pre><p>For example, to upgrade the requests module to its latest version would be as simple as <code>pip install requests --upgrade</code>.</p><p>Before using <code>pip</code>, you will need to install it (it’s quite simple). You can install it from <a href="https://bootstrap.pypa.io/get-pip.py" rel="nofollow">here</a></p><p>Just click on the link. And save the file as<code>get-pip.py</code> <em>Please don’t forget the <code>.py</code> extension.</em> And run it.</p><p>An alternative to using pip would be to try <a href="https://bootstrap.pypa.io/ez_setup.py" rel="nofollow"><code>easy_install</code></a>.</p><p>Using <code>easy_install</code> is also simple. The syntax is:</p><pre><code class="language-text">easy_install &lt;module_name&gt;</code></pre><p>However, <code>pip</code> is more popular than using <code>easy_install</code>.</p><p><strong><strong>Note:</strong></strong> On some systems where both Python 2 &amp; Python 3 are installed, <code>pip</code> and <code>pip3</code> will do different things. <code>pip</code> installs the Python 2 version of the package, and <code>pip3</code> will install the Python 3 version of the package. </p><p>For more information on the difference between Python 2 &amp; 3, see <a href="https://guide.freecodecamp.org/python/python-2-vs-python-3">this</a> guide. You can check the <code>pip</code> version by doing <code>pip --version</code> and/or <code>pip3 --version</code>:</p><pre><code class="language-text">pip3 --version
pip 18.0 from /usr/local/lib/python3.5/dist-packages/pip (python 3.5)</code></pre><p>We can also create a txt file containing a list of modules which should be installed using pip. For example, we could create the file <code>requirements.txt</code> and its content:</p><pre><code class="language-text">Kivy-Garden==0.1.4
macholib==1.5.1
idna==2.6
geoip2nation==0.1.2
docutils&gt;=0.14
Cython</code></pre><p>In this file we could also set a version for the installation. After this, by invoking pip with:</p><pre><code class="language-text"> pip install -r &lt;FILE CONTAINING MODULES&gt;
OR IN OUR CASE
pip install -r requirements.txt
</code></pre><p>it should install all the modules listed on the file.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
