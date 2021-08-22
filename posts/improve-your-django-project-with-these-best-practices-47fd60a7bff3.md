---
card: "https://cdn-media-1.freecodecamp.org/images/0*G-4pTI8lP3Q7qqan.png"
tags: [Tech]
description: "by Ofir Chakon"
author: "Milad E. Fahmy"
title: "Improve your Django project with these best practices"
created: "2021-08-16T15:42:24+02:00"
modified: "2021-08-16T15:42:24+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-tech tag-python tag-web-development tag-programming tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Improve your Django project with these best practices</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*G-4pTI8lP3Q7qqan.png 300w,
https://cdn-media-1.freecodecamp.org/images/0*G-4pTI8lP3Q7qqan.png 600w,
https://cdn-media-1.freecodecamp.org/images/0*G-4pTI8lP3Q7qqan.png 1000w,
https://cdn-media-1.freecodecamp.org/images/0*G-4pTI8lP3Q7qqan.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*G-4pTI8lP3Q7qqan.png" alt="Improve your Django project with these best practices">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
$ apt-get install python-pip python-dev build-essential
$ export LC_ALL="en_US.UTF-8" # might be necessary in case you get an error from the next line
$ pip install --upgrade pip
$ pip install --upgrade virtualenv
$ mkdir ~/.virtualenvs
$ pip install virtualenvwrapper
$ export WORKON_HOME=~/.virtualenvs
$ nano ~/.bashrc</code></pre><p>Add this line to the end of the file:</p><pre><code>. /usr/local/bin/virtualenvwrapper.sh</code></pre><p>Then execute:</p><pre><code class="language-bash">$ . .bashrc</code></pre><p>After installing, create a new virtual environment for your project by typing:</p><pre><code class="language-bash">$ mkvirtualenv project_name</code></pre><p>While you’re in the context of your virtual environment, you’ll notice that a prefix is added to the terminal, like:</p><pre><code class="language-bash">(project_name) ofir@playground:~$</code></pre><p>In order to deactivate (exit) the virtual environment and get back to the main Python context of your local machine, use:</p><pre><code class="language-bash">$ deactivate</code></pre><p>In order to activate (start) the virtual environment context, use:</p><pre><code class="language-bash">$ workon project_name</code></pre><p>To list the virtual environments existing in your local machine, use:</p><pre><code class="language-bash">$ lsvirtualenv</code></pre><p>Holding your project dependencies (packages) in a virtual environment on your machine allows you to keep them in an isolated environment. You only use them for a single (or multiple) projects. When creating a new virtual environment, you’re starting a fresh environment with no packages installed in it. Then you can use, for example:</p><pre><code class="language-bash">(project_name) $ pip install Django</code></pre><p>for installing Django in your virtual environment, or:</p><pre><code class="language-bash">(project_name) $ pip install Django==1.11</code></pre><p>for installing version 1.11 of Django accessible only from within the environment.</p><p>Neither your main Python interpreter nor the other virtual environments on your machine will be able to access the new Django package you’ve just installed.</p><p>In order to use the runserver command using your virtual environment, while in the context of the virtual environment, use:</p><pre><code class="language-bash">(project_name) $ cd /path/to/django/project
Django==1.11.2
h5py==2.7.0
matplotlib==2.0.2
numpy==1.13.0
Pillow==4.1.1
psycopg2==2.7.1
pyparsing==2.2.0
python-dateutil==2.6.0
pytz==2017.2
six==1.10.0
xmltodict==0.11.0</code></pre><p>Keeping your <code>requirements.txt</code> file up to date is essential for collaborating properly with other developers. It’s also important for keeping your production environment properly configured. This file, when included in your code repository, enables you to update all the packages installed in your virtual environment by executing a single line in the terminal. Then you can get new developers up and running in no time.</p><p>In order to generate a new <code>requirements.txt</code> or to update an existing one, use from within your virtual environment:</p><pre><code class="language-bash">(project_name) $ pip freeze &gt; requirements.txt</code></pre><p>For your convenience, make sure to execute this command in a folder that is being tracked by your Git repository. This allows other instances of the code to have access to the <code>requirements.txt</code> file as well.</p><p>If a new developer joins the team, or if you want to configure a new environment using the same packages listed in the <code>requirements.txt</code> file, execute in the virtual environment context:</p><pre><code class="language-bash">(project_name) $ cd /path/to/requirements/file
DEBUG
DATABASES # for different developers on the same team</code></pre><p>Let me introduce you to an extended approach for configuring your <code>settings.py</code> file. It allows you to maintain different versions and use the one you want at any given time and in any environment.</p><p>First, navigate to your <code>settings.py</code> file path:</p><pre><code class="language-bash">(project_name) $ cd /path/to/settings/file</code></pre><p>Then create a new module called settings (module is a folder containing an <code>__init__.py</code> file):</p><pre><code class="language-bash">(project_name) $ mkdir settings</code></pre><p>Now, rename your <code>settings.py</code> file to base.py and place it inside the new module you created:</p><pre><code class="language-bash">(project_name) $ mv settings.py settings/base.py</code></pre><p>For this example, I assume that you want to configure one settings file for your development environment and one for your production environment. Different developers on the same team can use the exact same approach for defining different settings files.</p><p>For your development environment create:</p><pre><code class="language-bash">(project_name) $ nano settings/development.py</code></pre><p>Then type:</p><pre><code class="language-py">from .base import *
DEBUG = True</code></pre><p>and save the file by hitting <code>Ctrl + O</code>, Enter and then <code>Ctrl + X</code>.</p><p>For your production environment create:</p><pre><code class="language-bash">(project_name) $ nano settings/production.py</code></pre><p>and type:</p><pre><code class="language-py">from .base import *
DEBUG = False
ALLOWED_HOSTS = [‘app.project_name.com’, ]</code></pre><p>Now, whenever you want to add or update the settings of a specific environment, you can easily do it in its own settings file.</p><p>You might be wondering — how does Django know which settings file to load on each environment? That’s what the <code>__init__.py</code> file is used for. When Django looks for the <code>settings.py</code> it used to load when running the server, for example, it now finds a settings module rather than a <code>settings.py</code> file. But as long as it’s a module containing an <code>__init__.py</code> file, as far as Django is concerned, it’s the exact same thing. Django will load the <code>__init__.py</code> file and execute whatever is written in it.</p><p>Therefore, we need to define which settings file we want to load inside the <code>__init__.py</code> file by executing:</p><pre><code class="language-bash">(project_name) $ settings/__init__.py</code></pre><p>and then, for a production environment, for example, by typing:</p><pre><code class="language-py">from .production import *</code></pre><p>This way, Django will load all the base.py and production.py settings every time it starts. Magic?</p><p>Now, the only configuration left is to keep the <code>__init__.py</code> in your <code>.gitignore</code> file so it will not be included in pushes and pulls. Once you set up a new environment, don’t forget to create a new <code>__init__.py</code> file inside the settings module. Then import the settings file required exactly like we did before.</p><p>In this article we’ve covered three best practices for better setting up your Django project:</p><ul><li>Working inside a virtual environment</li><li>Keeping the <code>requirements.txt</code> file up to date and using it continuously in your work flow</li><li>Setting up a better project settings array</li></ul><p>Have you followed these best practices in your last project? Do you have any insights to share? Comments are highly appreciated.</p><p>Did you find this useful? If so, please give me some claps so more people see the article.</p><p>This is part 1 in the series about best practices for Django development. Follow me to get an immediate update once the next parts are available.</p><p>Find more great tips for technological entrepreneurs at <a href="https://codingstartups.com/choose-cloud-computing-technology-startup/" rel="noopener">CodingStartups</a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
