---
card: "/images/default.jpg"
tags: [Ubuntu]
description: "I recently got myself a “new” laptop – a Lenovo x270 (yay)! A"
author: "Milad E. Fahmy"
title: "How to Set Up a Python Virtual Environment on Ubuntu 20.04"
created: "2021-08-16T15:36:18+02:00"
modified: "2021-08-16T15:36:18+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-ubuntu tag-programming tag-python tag-virtualenv tag-integrated-development-environment ">
<header class="post-full-header">
<h1 class="post-full-title">How to Set Up a Python Virtual Environment on Ubuntu&nbsp;20.04</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/06/prateek-katyal-6jYnKXVxOjc-unsplash.jpg 300w,
/news/content/images/size/w600/2020/06/prateek-katyal-6jYnKXVxOjc-unsplash.jpg 600w,
/news/content/images/size/w1000/2020/06/prateek-katyal-6jYnKXVxOjc-unsplash.jpg 1000w,
/news/content/images/size/w2000/2020/06/prateek-katyal-6jYnKXVxOjc-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/06/prateek-katyal-6jYnKXVxOjc-unsplash.jpg" alt="How to Set Up a Python Virtual Environment on Ubuntu&nbsp;20.04">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I recently got myself a “new” laptop – a Lenovo x270 (yay)! And once again I needed to set up a Python virtual environment. So of course I Googled for a solution, just to find my <a href="/news/virtualenv-with-virtualenvwrapper-on-ubuntu-18-04/">previously written article on the same topic</a>!</p><p>So in this article, I'll update the instructions based on my newly acquired knowledge.</p><p>And let me tell you, it’s easier than before because we are going to do only two things:</p><ul><li>Install virtualenvwrapper</li><li>Edit the .bashrc file</li></ul><h2 id="prerequisites">Prerequisites</h2><p>In this article I will show you how to set up virtualenvwrapper with pip3 (pip for Python 3). We are not going to use Python 2 because <a href="https://www.python.org/doc/sunset-python-2/">it's no longer supported</a>.</p><p>To complete this tutorial, you will need a computer with Ubuntu 20.04 installed and an internet connection. Also, some knowledge of the terminal and Vim editor would be useful.</p><h2 id="setting-up-a-virtual-environment">Setting up a Virtual Environment</h2><p>Now open your terminal in the home directory by right clicking and choosing the option “Open in Terminal”. You can also press the CTRL, ALT, and T keys on your keyboard at the same time to open the Terminal application automatically.</p><p>You first need to create a special directory that will hold all of your virtual environments. So go ahead and create a new hidden directory called virtualenv:</p><pre><code class="language-bash">mkdir .virtualenv</code></pre><h2 id="pip3">pip3</h2><p>Now you should install pip for Python3:</p><pre><code class="language-bash">sudo apt install python3-pip</code></pre><p>Confirm the pip3 installation:</p><pre><code class="language-bash">pip3 -V</code></pre><h2 id="virtualenvwrapper">virtualenvwrapper</h2><p>virtualenvwrapper is a set of extensions for virtualenv. It provides commands like mkvirtualenv, lssitepackages, and especially workon for switching between different virtualenv environments.</p><p>Install virtualenvwrapper via pip3:</p><pre><code class="language-bash">pip3 install virtualenvwrapper</code></pre><h2 id="bashrc-file">bashrc file</h2><p>We are going to modify your .bashrc file by adding a row that will adjust every new virtual environment to use Python 3. We will point virtual environments to the directory we created above (.virtualenv) and we will also point to the locations of the virtualenv and virtualenvwrapper.</p><p>Now open the .bashrc file using the Vim editor:</p><pre><code class="language-bash">vim .bashrc</code></pre><p>If you still haven’t used Vim before or you don’t have it installed on your computer, you should install it now. It is one of the most widely used Linux editors and for good reason.</p><pre><code class="language-bash">sudo apt install vim</code></pre><p>After you've installed Vim open the .bashrc file by typing in the <code>vim .bashrc</code><strong> </strong>command in your terminal. Navigate to the bottom of the .bashrc file, press the letter <strong><em>i</em> </strong>to enter insert mode in Vim, and add these rows:</p><pre><code class="language-bash">#Virtualenvwrapper settings:
export WORKON_HOME=$HOME/.virtualenvs
VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3
. /usr/local/bin/virtualenvwrapper.sh
</code></pre><p>After you are done, press the <em><strong>esc</strong> </em>key, then type <strong>:<em>wq</em></strong> and press enter. This command will save the file and exit Vim.</p><p>Now you need to reload the bashrc script. There are two ways to do it – close and reopen your terminal, or execute this command in the terminal:</p><pre><code class="language-bash">source ~/.bashrc</code></pre><p>To create a virtual environment in Python3 and activate it immediately use this command in your terminal:</p><pre><code class="language-bash">mkvirtualenv name_of_your_env</code></pre><p>To deactivate the environment use the deactivate command.</p><p>To list all available virtual environments use the command <em>workon </em>or <em>lsvirtualenv </em>(lsvirtualenv will show the same result as workon but in a fancier way) in your terminal:</p><pre><code class="language-bash">workon</code></pre><pre><code class="language-bash">lsvirtualenv</code></pre><p>To activate one specific environment use workon + name of your environment:</p><pre><code class="language-bash">workon name_of_your_env</code></pre><p>There are several useful command you might need to use someday:</p><p><em>Rmvirtualenv</em> will remove a specific virtual environment located in your .virtualenv directory.</p><pre><code class="language-bash">rmvirtualenv name_of_your_env</code></pre><p><em>Cpvirtualenv</em> will copy the existing virtual environment to a new virtual environment and activate it.</p><pre><code class="language-bash">cpvirtualenv old_virtual_env new_virtual_env</code></pre><p>Well done! You have now created your first isolated Python 3 environment.</p><p>Thank you for reading! </p><p>Check out more articles like this on my <a href="/news/author/goran/">freeCodeCamp profile</a>, <a href="https://medium.com/@goranaviani">Medium profile</a>, and other fun stuff I build on my <a href="https://github.com/GoranAviani">GitHub page</a>.</p>
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
