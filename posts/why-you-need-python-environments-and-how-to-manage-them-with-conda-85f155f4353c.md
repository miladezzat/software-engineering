---
card: "https://cdn-media-1.freecodecamp.org/images/1*KhP3BJNqy4MC8GPfUz4r-Q.jpeg"
tags: [Python]
description: "I have over two decades of professional experience as a devel"
author: "Milad E. Fahmy"
title: "Why You Need Python Environments and How to Manage Them with Conda"
created: "2021-08-16T15:41:46+02:00"
modified: "2021-08-16T15:41:46+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-programming tag-coding tag-tech tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Why You Need Python Environments and How to Manage Them with Conda</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*KhP3BJNqy4MC8GPfUz4r-Q.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*KhP3BJNqy4MC8GPfUz4r-Q.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*KhP3BJNqy4MC8GPfUz4r-Q.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*KhP3BJNqy4MC8GPfUz4r-Q.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*KhP3BJNqy4MC8GPfUz4r-Q.jpeg" alt="Why You Need Python Environments and How to Manage Them with Conda">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
platform : win-64
conda version : 4.3.33
conda is private : False
conda-env version : 4.3.33
conda-build version : not installed
python version : 3.6.3.final.0
requests version : 2.18.4
root environment : D:\Miniconda  (writable)
default environment : D:\Miniconda\envs\tensorflow-cpu
envs directories : D:\Miniconda\envs
C:\Users\sg\AppData\Local\conda\conda\envs
C:\Users\sg\.conda\envs
package cache : D:\Miniconda\pkgs
C:\Users\sg\AppData\Local\conda\conda\pkgs
channel URLs : https://repo.continuum.io/pkgs/main/win-64
https://repo.continuum.io/pkgs/main/noarch
https://repo.continuum.io/pkgs/free/win-64
https://repo.continuum.io/pkgs/free/noarch
https://repo.continuum.io/pkgs/r/win-64
https://repo.continuum.io/pkgs/r/noarch
https://repo.continuum.io/pkgs/pro/win-64
https://repo.continuum.io/pkgs/pro/noarch
config file : C:\Users\sg\.condarc
netrc file : None
offline mode : False
user-agent : conda/4.3.33 requests/2.18.4 CPython/3.6.3 Windows/10 Windows/10.0.15063
--add channels 'rdonnelly'
#
asn1crypto          0.22.0           py36h8e79faa_1
bleach              1.5.0                     &lt;pip&gt;
ca-certificates     2017.08.26           h94faf87_0
...
wheel               0.29.0           py36h6ce6cde_1
win_inet_pton       1.0.1            py36he67d7fd_1
wincertstore        0.2              py36h7fe50ca_0
yaml                0.1.7            vc14hb31d195_1  [vc14]</code></pre><p>To <strong>search </strong>for all the <strong>available versions of a certain package</strong>, you can use the <code>search</code> command. For instance, to list out all the versions of the <code>seaborn</code> package (it is a tool for data visualization), run:</p><pre><code>conda search -f seaborn</code></pre><p>Similarly to the <code>conda list</code>command, this one results in a list of the matching package names, versions, and channels:</p><pre><code class="language-bash">Fetching package metadata .................
seaborn     0.7.1                    py27_0  conda-forge
0.7.1                    py34_0  conda-forge
0.7.1                    py35_0  conda-forge
...
0.8.1            py27hab56d54_0  defaults
0.8.1            py35hc73483e_0  defaults
0.8.1            py36h9b69545_0  defaults</code></pre><p>To<strong> install</strong> a package (for instance<code>seaborn</code>) that is <strong>inside a channel that is on your channel list</strong>, run this command (if you don’t specify which version you want, it’ll automatically install the latest available version from the highest priority channel):</p><pre><code class="language-bash">conda install seaborn</code></pre><p>You can also <strong>specify the package’s version</strong>:</p><pre><code class="language-bash">conda install seaborn=0.7.0</code></pre><p>To install a package (for example <code>yaml</code><em>— </em>that is, btw. a YAML parser and emitter) from a channel (for instance a channel named <code>conda-forge</code>), that is <strong>inside a channel that is not on your channel list</strong>, run:</p><pre><code class="language-bash">conda install -c conda-forge yaml</code></pre><p>To<strong> update all the installed packages </strong>(it only affects the active environment), use this command:</p><pre><code class="language-bash">conda update</code></pre><p>To <strong>update one specific package</strong>,<strong> </strong>for example<strong> </strong>the <code>seaborn</code> package, run:</p><pre><code class="language-bash">conda update seaborn</code></pre><p>To <strong>remove</strong> the <code>seaborn</code> package, run:</p><pre><code class="language-bash">conda remove seaborn</code></pre><p>There is one more aspect of managing packages that I’d like to cover in this article. If you don’t want to deal with compatibility issues (breaking changes) caused by a new version of one of the packages you use, you can<strong> prevent that package from updating. </strong>As I mentioned above, if you run the <code>conda update</code> command, all of your installed packages are going to be updated, so basically it is about creating an “exception list”. So how can you do this?</p><h4 id="prevent-packages-from-updating-pinning-">Prevent packages from updating (pinning)</h4><p>Create a file named <code>pinned</code> in the environment’s <code>conda-meta</code>directory. Add the list of the packages that you don’t want to be updated to the file. So for example, to force the <code>seaborn</code> package to the 0.7.x branch and lock the <code>yaml</code><em> </em>package<em> </em>to the 0.1.7 version, add the following lines to the file named <code>pinned</code>:</p><pre><code class="language-bash">seaborn 0.7.*
yaml ==0.1.7</code></pre><h4 id="changing-an-environment-s-python-version">Changing an environment’s Python version</h4><p>And how can you <strong>change the Python version of an environment</strong>?</p><p><strong>Python is also a package</strong>. Why is that relevant for you? Because you’re going to use the same command for replacing the currently installed version of Python with another version that you use when you replace any other package with another version of that same package.</p><p>First, you should list out the available Python versions:</p><pre><code class="language-bash">conda search -f python</code></pre><p>Example result (the list contains the available versions and channels):</p><pre><code class="language-bash">Fetching package metadata .................
python   2.7.12     0  conda-forge
2.7.12     1  conda-forge
2.7.12     2  conda-forge
...
3.6.3h3b118a2_4  defaults
3.6.4      h6538335_0  defaults
3.6.4      h6538335_1  defaults</code></pre><p>To <strong>replace the current Python version</strong> with, for example, 3.4.2, run:</p><pre><code class="language-bash">conda install python=3.4.2</code></pre><p>To<strong> update the Python version</strong> to the latest version of its branch (for instance updating the 3.4.2 to the 3.4.5 from the 3.4 branch), run:</p><pre><code class="language-bash">conda update python</code></pre><h4 id="adding-pip-packages">Adding PIP packages</h4><p>Towards the beginning of this article, I recommended using Conda as your package and environment manager (and not PIP). And as I mentioned above,<strong> PIP packages are also installable into Conda environments</strong>.</p><p>Therefore, if a package is unavailable through the Conda channels, you can try to install it from the <a href="https://pypi.python.org/pypi" rel="noopener">PyPI package index</a>. You can do this by using the<strong> </strong><code>pip</code><strong> command</strong> (this command is made available by the Conda installer by default, so you can apply it in any active environment). For instance if you want to install the <code>lightgbm</code> package (it is a gradient boosting framework), run:</p><pre><code class="language-bash">pip install lightgbm</code></pre><h3 id="summary">Summary</h3><p>So let’s wrap this up. I know that it seems quite complicated — and it is, in fact, complicated. However, <strong>utilizing environments will save you a lot of trouble</strong>.</p><p>In this article, I’ve summarized how you can:</p><ul><li>choose an appropriate <strong>Conda installer</strong> for yourself</li><li>create <strong>additional environments </strong>(next to the root environment)</li><li><strong>add or replace packages </strong>(and I also explain how <strong>channels</strong> work)</li><li>manage your <strong>Python version(s)</strong></li></ul><p>There are many more aspects in the area of Python environment management,<strong> so please let me know what aspects you find most challenging.</strong> Also let me know if you have some good practices that I don’t mention here. I’m curious about your workflow, so please feel free to share in the response section below if you have any <strong>suggestions</strong>!</p><h3 id="recommended-articles">Recommended Articles</h3><p>If you’re interested in this topic, I encourage you to check out these articles as well. Thanks for these great resources <a href="undefined" rel="noopener">Michael Galarnyk</a>, <a href="undefined" rel="noopener">Dries Cronje</a>, <a href="undefined" rel="noopener">Ryan Abernathey</a>, <a href="undefined" rel="noopener">Sanyam Bhutani</a>, <a href="undefined" rel="noopener">Jason Brownlee</a> and <a href="https://github.com/jakevdp" rel="noopener">Jake Vanderplas</a>.</p><p><a href="https://towardsdatascience.com/environment-management-with-conda-python-2-3-b9961a8a5097" rel="noopener"><strong>Python Environment Management with Conda (Python 2 + 3, Using Multiple Versions of Python)</strong></a><br><a href="https://towardsdatascience.com/environment-management-with-conda-python-2-3-b9961a8a5097" rel="noopener"><em>Why do you need virtual environments? Say you have multiple projects and they all rely on a library (Pandas, Numpy…</em>towardsdatascience.com</a></p><p><a href="https://becominghuman.ai/how-to-setup-your-windows-10-machine-for-machine-learning-using-ubuntu-bash-shell-b32f01bd31ab" rel="noopener"><strong>Setup your Windows 10 machine for Machine Learning</strong></a><br><a href="https://becominghuman.ai/how-to-setup-your-windows-10-machine-for-machine-learning-using-ubuntu-bash-shell-b32f01bd31ab" rel="noopener"><em>How to setup your Windows 10 machine for Machine Learning using Ubuntu Bash shell and Conda</em>becominghuman.ai</a></p><p><a href="https://medium.com/@rabernat/custom-conda-environments-for-data-science-on-hpc-clusters-32d58c63aa95" rel="noopener"><strong>Custom Conda Environments for Data Science on HPC Clusters</strong></a><br><a href="https://medium.com/@rabernat/custom-conda-environments-for-data-science-on-hpc-clusters-32d58c63aa95" rel="noopener"><em>A problem that lot of scientists have to deal with is how to run our python code on an HPC cluster (e.g. an xsede…</em>medium.com</a></p><p><a href="https://medium.com/ai-saturdays/basic-tutorials-part-3-4962731e808e" rel="noopener"><strong>Basic Tutorials Part 3</strong></a><br><a href="https://medium.com/ai-saturdays/basic-tutorials-part-3-4962731e808e" rel="noopener"><em>Conda</em>medium.com</a></p><p><a href="https://machinelearningmastery.com/setup-python-environment-machine-learning-deep-learning-anaconda/" rel="noopener"><strong>How to Setup a Python Environment for Machine Learning and Deep Learning with Anaconda - Machine…</strong></a><br><a href="https://machinelearningmastery.com/setup-python-environment-machine-learning-deep-learning-anaconda/" rel="noopener"><em>It can be difficult to install a Python machine learning environment on some platforms. Python itself must be installed…</em>machinelearningmastery.com</a></p><p><a href="http://jakevdp.github.io/blog/2016/08/25/conda-myths-and-misconceptions/" rel="noopener"><strong>Conda: Myths and Misconceptions</strong></a><br><a href="http://jakevdp.github.io/blog/2016/08/25/conda-myths-and-misconceptions/" rel="noopener"><em>I've spent much of the last decade using Python for my research, teaching Python tools to other scientists and…</em>jakevdp.github.</a></p><h3 id="using-docker">Using Docker</h3><p>A little <strong>side note </strong>based on one of my reader’s question (thanks for bringing this up <a href="undefined" rel="noopener">Vikram Durai</a>!):</p><p>If your application</p><ul><li><strong>uses a server </strong>(for example a database server with preloaded data), AND</li><li>you want to <strong>distribute </strong>this server and its data together with your application and its Python environment to others (for instance to a fellow developer or to a client),</li></ul><p>you can<strong> “containerize”</strong> the whole thing<strong> with Docker</strong>.</p><p>In this case, all these components will be<strong> encapsulated in a Docker container</strong>:</p><ul><li>The <strong>application itself</strong>,</li><li>The<strong> Conda environment </strong>that can run your application (so a compatible Python version and packages),</li><li>The<strong> local server or service</strong> (for example: a database server and a web server) required to run the application</li></ul><p>You can read more about how Anaconda and Docker work together in this article by <a href="https://www.anaconda.com/people/kristopher-overholt" rel="noopener">Kristopher Overholt</a>:</p><p><a href="https://www.anaconda.com/blog/developer-blog/anaconda-and-docker-better-together-reproducible-data-science/" rel="noopener"><strong>Anaconda and Docker - Better Together for Reproducible Data Science</strong></a><br><a href="https://www.anaconda.com/blog/developer-blog/anaconda-and-docker-better-together-reproducible-data-science/" rel="noopener"><em>Anaconda integrates with many different providers and platforms to give you access to the data science libraries you…</em>www.anaconda.com</a></p><p>Some more articles about Docker containers (by <a href="undefined" rel="noopener">Preethi Kasireddy</a> and <a href="undefined" rel="noopener">Alexander Ryabtsev</a>):</p><p><a href="/news/a-beginner-friendly-introduction-to-containers-vms-and-docker-79a9e3e119b/"><strong>A Beginner-Friendly Introduction to Containers, VMs and Docker</strong><br><em>If you’re a programmer or techie, chances are you’ve at least heard of Docker: a helpful tool for packing, shipping…</em></a></p><p><a href="https://djangostars.com/blog/what-is-docker-and-how-to-use-it-with-python/" rel="noopener"><strong>What is Docker and How to Use it With Python (Tutorial)</strong></a><br><a href="https://djangostars.com/blog/what-is-docker-and-how-to-use-it-with-python/" rel="noopener"><em>This is an introductory tutorial on Docker containers. By the end of this article you will get the idea on how to use…</em>djangostars.com</a></p><p>R<strong>espond ?</strong> — please let me know in the response section if you have any suggestions or questions!</p><p>Thanks for reading! ?</p><p>And thanks to my wife <a href="undefined" rel="noopener">Krisztina Szerovay</a>, who helped me make this article more comprehensible and created the illustrations. If you’re interested in UX design (if you are a developer, you should be :) ), check out her UX Knowledge Base Sketches here:</p><p><a href="https://uxknowledgebase.com" rel="noopener"><strong>UX Knowledge Base Sketch</strong></a><br><a href="https://uxknowledgebase.com" rel="noopener"><em>The UX Knowledges Base Sketch collection is for UX designers and anyone interested in UX design or in sketching.</em>uxknowledgebase.com</a></p>
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
