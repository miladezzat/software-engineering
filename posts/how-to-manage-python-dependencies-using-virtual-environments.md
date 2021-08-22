---
card: "/images/default.jpg"
tags: [Python]
description: "When we start building a Python project that goes beyond simp"
author: "Milad E. Fahmy"
title: "How to Manage Python Dependencies using Virtual Environments"
created: "2021-08-16T15:34:38+02:00"
modified: "2021-08-16T15:34:38+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-virtualenv ">
<header class="post-full-header">
<h1 class="post-full-title">How to Manage Python Dependencies using Virtual Environments</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/03/0_T4VpXQchm1Vr05bL.jpg 300w,
/news/content/images/size/w600/2021/03/0_T4VpXQchm1Vr05bL.jpg 600w,
/news/content/images/size/w1000/2021/03/0_T4VpXQchm1Vr05bL.jpg 1000w,
/news/content/images/size/w2000/2021/03/0_T4VpXQchm1Vr05bL.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/03/0_T4VpXQchm1Vr05bL.jpg" alt="How to Manage Python Dependencies using Virtual Environments">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>When we start building a Python project that goes beyond simple scripts, we tend to start using third-party dependencies. </p><p>When working on a larger project, we need to think about managing these dependencies in an efficient manner. And when installing dependencies, we always want to be inside virtual environments. It helps keep things nice and clean. It also helps avoid messing up our Python environment.</p><h1 id="why-do-we-need-python-virtual-environments">Why do we need Python Virtual Environments?</h1><p>We can use Pip to install packages to our Python project. And it is common to have multiple packages installed in a single Python project. This can lead to some issues regarding the versions of the packages installed and their dependencies.</p><p>When we use <code>pip install &lt;package name&gt;</code> in a project, we are installing the package and its dependencies in the global Python namespace. And this will install the package for the specific Python version that we have configured Python for. </p><p>We can find out where this directory is by using</p><pre><code class="language-shell">python3.7 -c "import sys; print('\n'.join(sys.path))"
/usr/lib/python27.zip
/usr/lib/python2.7
/usr/lib/python2.7/lib-dynload
/usr/lib/python2.7/site-packages</code></pre><p>And if we install the same package using <code>pip3 install &lt;package name&gt;</code>, it will be installed in a separate directory with the Python 3 version. We can overcome this by using the following command:</p><pre><code class="language-shell"> python2.7 -m pip install &lt;package name&gt;</code></pre><p>This still does not solve our problem of packages being installed system-wide, which can lead to the following problems:</p><ul><li>Different projects having different versions of the same package will conflict with one another</li><li>A project’s dependencies can conflict with system-level dependencies which can break the system altogether</li><li>Multi-user projects is not a possibility</li><li>Testing code against different Python and library versions is a challenging task</li></ul><p>To avoid those problems, Python developers use Virtual Environments. These virtual environments make use of isolated contexts (directories) for installing packages and dependencies.</p><h1 id="how-to-create-a-virtual-environment">How to Create a Virtual Environment</h1><p>We need a tool to make use of Python virtual environments. The tool we use to make them is known as <a href="https://docs.python.org/3/library/venv.html" rel="noopener nofollow">venv</a>. It is built into the standard Python library for Python 3.3+.</p><p>If we were using Python 2, we would have had to install it manually. This is one of the few packages that we do want to install globally.</p><pre><code class="language-shell">python2 -m pip install virtualenv</code></pre><p>Note: We will talk more about venv in this post and Python 3 since there are a few differences between it and virtualenv. The commands are a bit different and the tools work differently under the hood.</p><p>We will start by making a new directory wherein we want to work with our project.</p><pre><code class="language-shell">mkdir my-python-project &amp;&amp; cd my-python-project</code></pre><p>Then we will create a new virtual environment:</p><pre><code class="language-shell">python3 -m venv virtualenv
# creates a virtual environment called virtualenv, the name can be anything we want</code></pre><p>This will create a directory called virtualenv in the directory that we just created. The directory will contain a bin folder, a lib folder, an include folder, and an environment configuration file. </p><p>All these files ensure that all Python code gets executed within the context of the current environment. This helps us achieve isolation from global environments and avoids the problems we discussed earlier.</p><p>In order to start using this environment, we need to activate it. Doing so will also change our command prompt to the current context.</p><pre><code class="language-shell">$ source env/bin/activate
(virtualenv) $</code></pre><p>The prompt is also an indicator that the virtual environment is active and Python code executes under that environment.</p><p>Inside our environment, system-wide packages are not accessible and any packages installed inside the environment are not available outside.</p><p>Only <code>pip</code> and <code>setuptools</code> are installed by default in a virtual environment.</p><p>After activating an environment, the path variable gets modified to achieve the concept of virtual environments.</p><p>When we are done and want to switch to the global environment, we can exit using the deactivate command:</p><pre><code class="language-shell">(virtualenv) $ deactivate
$</code></pre><h1 id="how-to-manage-dependencies-across-environments">How to Manage Dependencies Across Environments</h1><p>Now that we have our virtual environments setup, we do not want to keep sharing the packages that can be installed using pip. We want to exclude our virtual environment folder, and be able to reproduce our work on a different system. </p><p>We can do this by making use of a requirements file in the root directory of our project.</p><p>Let us assume that we installed Flask in our virtual environment. After that, if we run <code>pip freeze</code>, it will list the packages that we have installed and their version numbers.</p><pre><code class="language-shell">(virtualenv) $ pip freeze
Flask==1.1.2</code></pre><p>We can write this to a requirements.txt file to upload to Git, or share with other people in any other form.</p><pre><code class="language-shell">(virtualenv) $ pip freeze &gt; requirements.txt</code></pre><p>This command can be used to update the file too.</p><p>And then, whenever someone wants to run our project on their computer, all they need to do is:</p><pre><code class="language-shell">$ cd copied-project/
$ python3 -m venv virtualenv/
$ python3 -m pip install -r requirements.txt</code></pre><p>And everything will work as it was on our system. </p><h2 id="wrapping-up">Wrapping Up</h2><p>Now we can manage Python virtual environments and thus manage dependencies and packages as needed. If you have any questions regarding this, feel free to get in touch.</p><p><em>You can find other articles of mine<em> at </em></em><a href="https://www.wisdomgeek.com/development/web-development/python/managing-python-dependencies-using-virtual-environments/" rel="noopener nofollow"><em><em>https://www.wisdomgeek.com</em></em></a><em>.</em></p>
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
