---
card: "https://cdn-media-1.freecodecamp.org/images/1*Sk54-oKGwIS_3BRk1S4N7A.png"
tags: [JavaScript]
description: "by rajaraodv"
author: "Milad E. Fahmy"
title: "Jazz Up Your “ZSH” Terminal In Seven Steps — A Visual Guide"
created: "2021-08-16T10:16:17+02:00"
modified: "2021-08-16T10:16:17+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-web-development tag-tech tag-design ">
<header class="post-full-header">
<h1 class="post-full-title">Jazz Up Your “ZSH” Terminal In Seven Steps — A Visual Guide</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Sk54-oKGwIS_3BRk1S4N7A.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*Sk54-oKGwIS_3BRk1S4N7A.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*Sk54-oKGwIS_3BRk1S4N7A.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Sk54-oKGwIS_3BRk1S4N7A.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Sk54-oKGwIS_3BRk1S4N7A.png" alt="Jazz Up Your “ZSH” Terminal In Seven Steps — A Visual Guide">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
zsh //should return zsh</code></pre><p><strong>Option 2— Install Homebrew and Install latest ZSH via Homebrew</strong></p><p>This option is pretty common among users, because some of the plugins only work with the latest ZSH.</p><p>Homebrew, simply said, is a command line installer for all sorts of software. Let’s install that first.</p><ol><li>Install Homebrew by running the following command.</li></ol><pre><code class="language-bash">ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</code></pre><p>2. If you get Command Line Tools for Xcode error, it means you haven’t installed the CLI tools for Xcode.<em> If you don’t get the error, you can skip this step, because you already have it installed.</em></p><p>XCode Developer CLI tools are used by various apps that manipulate core OSX features. So make sure to install the Xcode CLI tools by running the following command.</p><p><code>$ xcode-select —-install</code></p><blockquote>Note: The above command opens up Mac’s installer and installs the XCode Developer CLI tools. If it doesn’t work, try <code><em>xcode-select -r</em></code> to reset.</blockquote><p>3. Install ZSH via Homebrew</p><p>Run the following command to install ZSH. It gets installed at <code>/usr/local/bin/zsh</code> PS: Mac’s default ZSH is at <code>/bin/zsh</code></p><pre><code class="language-bash">brew install zsh</code></pre><p>4. Use the Homebrew version of ZSH</p><p>Run the following command. You will be prompted to enter Mac’s password.</p><pre><code class="language-bash">chsh -s /usr/local/bin/zsh</code></pre><p><strong>5. Logout and log back in.</strong></p><p>6. Test if we are using ZSH and the correct ZSH</p><pre><code class="language-bash">$ echo $0
zsh   //correct
$ which zsh
$ cd fonts
$ ./install.sh</code></pre><p><strong>2. Change the Theme to “agnoster”</strong></p><pre><code class="language-bash">$ open ~/.zshrc
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
