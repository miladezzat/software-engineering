---
card: "https://cdn-media-2.freecodecamp.org/w1280/606ba4e1d5756f080ba94d0c.jpg"
tags: [Python]
description: "MacOS comes with Python pre-installed. But it s Python Versio"
author: "Milad E. Fahmy"
title: "How to Install Python 3 on Mac – Brew Install Update Tutorial"
created: "2021-08-16T15:34:30+02:00"
modified: "2021-08-16T15:34:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-python tag-mac ">
<header class="post-full-header">
<h1 class="post-full-title">How to Install Python 3 on Mac – Brew Install Update Tutorial</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/606ba4e1d5756f080ba94d0c.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/606ba4e1d5756f080ba94d0c.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/606ba4e1d5756f080ba94d0c.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/606ba4e1d5756f080ba94d0c.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/606ba4e1d5756f080ba94d0c.jpg" alt="How to Install Python 3 on Mac – Brew Install Update Tutorial">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
</code></pre><blockquote>Directories in <code>PATH</code> are searched from left to right, so a matching executable in a directory at the beginning of the list takes precedence over another one at the end. In this example, the <code>/usr/local/bin</code> directory will be searched first, then <code>/usr/bin</code>, then <code>/bin</code>.</blockquote><p>And here is their explanation of what a Shim is. I'm quoting them at length again because I really can't explain this better myself.</p><blockquote>pyenv works by inserting a directory of <em>shims</em> at the front of your <code>PATH</code>:</blockquote><pre><code>$(pyenv root)/shims:/usr/local/bin:/usr/bin:/bin
</code></pre><blockquote>Through a process called <em>rehashing</em>, pyenv maintains shims in that directory to match every Python command across every installed version of Python—<code>python</code>, <code>pip</code>, and so on.</blockquote><blockquote>Shims are lightweight executables that simply pass your command along to pyenv.</blockquote><p>Here's how to update your <code>.bash_profile</code> in Bash (which is installed in MacOS by default):</p><pre><code>echo 'export PYENV_ROOT="$HOME/.pyenv"' &gt;&gt; ~/.bash_profile
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' &gt;&gt; ~/.bash_profile</code></pre><p>Or if you've installed ZSH (or OhMyZSH) like I have, you'll want to edit the <code>.zshrc</code> file instead:</p><pre><code>echo 'export PYENV_ROOT="$HOME/.pyenv"' &gt;&gt; ~/.zshrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' &gt;&gt; ~/.zshrc</code></pre><p>Then you want to add PyEnv Init to your terminal. Run this command if you're using Bash (again, this is the default with MacOS):</p><pre><code>echo -e 'if command -v pyenv 1&gt;/dev/null 2&gt;&amp;1; then\n  eval "$(pyenv init -)"\nfi' &gt;&gt; ~/.bash_profile
</code></pre><p>Or run this command if you're using ZSH:</p><pre><code>echo -e 'if command -v pyenv 1&gt;/dev/null 2&gt;&amp;1; then\n  eval "$(pyenv init -)"\nfi' &gt;&gt; ~/.zshrc
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
