---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9d12740569d1a4ca35bd.jpg"
tags: [Python]
description: "Virtual environments can be described as isolated installatio"
author: "Milad E. Fahmy"
title: "Python Virtual Environments Explained with Examples"
created: "2021-08-16T15:37:21+02:00"
modified: "2021-08-16T15:37:21+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-virtualenv tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">Python Virtual Environments Explained with Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d12740569d1a4ca35bd.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d12740569d1a4ca35bd.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d12740569d1a4ca35bd.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d12740569d1a4ca35bd.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d12740569d1a4ca35bd.jpg" alt="Python Virtual Environments Explained with Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>Virtual environments can be described as isolated installation directories. This isolation allows you to localized the installation of your project’s dependencies, without forcing you to install them system-wide.</p><p>Imagine you have two applications, App1 and App2. Both use the package Pak, but require different versions. If you install Pak version 2.3 for App1, you would not be able to run App2 because it requires version 3.1. </p><p>This is where virtual environments come in handy.</p><p>Benefits:</p><ul><li>You can have multiple environments, with multiple sets of packages, without conflicts among them. This way, different projects’ requirements can be satisfied at the same time.</li><li>You can easily release your project with its own dependent modules.</li></ul><p>Here are two ways you can create Python virtual environments.</p><h2 id="virtualenv"><strong>Virtualenv</strong></h2><p><code><a href="https://virtualenv.pypa.io/en/stable/">virtualenv</a></code> is a tool used to create isolated Python environments. It creates a folder which contains all the necessary executables to use the packages that a Python project would need.</p><p>You can install it with <code>pip</code>:</p><pre><code class="language-text">pip install virtualenv</code></pre><p>Verify the installation with the following command:</p><pre><code class="language-text">virtualenv --version</code></pre><h3 id="create-an-environment"><strong>Create an Environment</strong></h3><p>To create a virtual environment use:</p><pre><code class="language-text">virtualenv --no-site-packages my-env</code></pre><p>This creates a folder in the current directory with the name of the environment (<code>my-env/</code>). This folder contains the directories for installing modules and Python executables.</p><p>You can also specify the Python version you want to work with. Just use the argument <code>--python=/path/to/python/version</code>. For instance, <code>python2.7</code>:</p><pre><code class="language-text">virtualenv --python=/usr/bin/python2.7 my-env</code></pre><h3 id="list-environments"><strong>List Environments</strong></h3><p>You can list the available environments with:</p><pre><code class="language-text">lsvirtualenv</code></pre><h3 id="activate-an-environment"><strong>Activate an Environment</strong></h3><p>Before you can start using the environment you need to activate it:</p><pre><code class="language-text">source my-env/bin/activate</code></pre><p>This ensures that only packages under <code>my-env/</code> are used.</p><p>You will notice that the name of the environment is shown on the left of the prompt. This way you can see which is the active environment.</p><h3 id="install-packages"><strong>Install Packages</strong></h3><p>You can install packages one by one, or by setting a <code>requirements.txt</code> file for your project.</p><pre><code class="language-text">pip install some-package
pip install -r requirements.txt</code></pre><p>If you want to create a <code>requirements.txt</code> file from the already installed packages, run the following command:</p><pre><code class="language-text">pip freeze &gt; requirements.txt</code></pre><p>The file will contain the list of all the packages installed in the current environment, and their respective versions. This will help you release your project with its own dependent modules.</p><h3 id="deactivate-an-environment"><strong>Deactivate an Environment</strong></h3><p>If you are done working with the virtual environment you can deactivate it with:</p><pre><code class="language-text">deactivate</code></pre><p>This puts you back to the system’s default Python interpreter with all its installed libraries.</p><h3 id="delete-an-environment"><strong>Delete an Environment</strong></h3><p>Simply delete the environment folder.</p><h2 id="conda"><strong>Conda</strong></h2><p><a href="https://conda.io/docs/index.html"><code>Conda</code></a> is a package, dependency and environment management for many languages, including Python.</p><p>To install Conda, follow these <a href="https://conda.io/docs/user-guide/install/index.html">instructions</a>.</p><h3 id="create-an-environment-1"><strong>Create an Environment</strong></h3><p>To create a virtual environment use:</p><pre><code class="language-text">conda create --name my-env</code></pre><p>Conda will create the corresponding folder inside the Conda installation directory.</p><p>You can also specify which version of Python you want to work with:</p><pre><code class="language-text">conda create --name my-env python=3.6</code></pre><h3 id="list-environments-1"><strong>List Environments</strong></h3><p>You can list all the available environments with:</p><pre><code class="language-text">conda info --envs</code></pre><h3 id="activate-an-environment-1"><strong>Activate an Environment</strong></h3><p>Before you can start using the environment you need to activate it:</p><pre><code class="language-text">source activate my-env</code></pre><h3 id="install-packages-1"><strong>Install Packages</strong></h3><p>The same as with <code>virtualenv</code>.</p><h3 id="deactivate-an-environment-1"><strong>Deactivate an Environment</strong></h3><p>If you are done working with the virtual environment you can deactivate it with:</p><pre><code class="language-text">source deactivate</code></pre><h3 id="remove-an-environment"><strong>Remove an Environment</strong></h3><p>If you want to remove an environment from Conda use:</p><pre><code class="language-text">conda remove --name my-env</code></pre>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
