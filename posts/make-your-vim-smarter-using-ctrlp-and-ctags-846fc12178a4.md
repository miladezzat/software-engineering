---
card: "https://cdn-media-1.freecodecamp.org/images/1*-DMqWWZ_btpEiyNgKpc8NQ.gif"
tags: [JavaScript]
description: by _haochuan
author: "Milad E. Fahmy"
title: "Make Your Vim Smarter Using Ctrlp and Ctags"
created: "2021-08-15T19:49:05+02:00"
modified: "2021-08-15T19:49:05+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-vim tag-software-engineering tag-ctrlp tag-ctags ">
<header class="post-full-header">
<h1 class="post-full-title">Make Your Vim Smarter Using Ctrlp and Ctags</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*-DMqWWZ_btpEiyNgKpc8NQ.gif 300w,
https://cdn-media-1.freecodecamp.org/images/1*-DMqWWZ_btpEiyNgKpc8NQ.gif 600w,
https://cdn-media-1.freecodecamp.org/images/1*-DMqWWZ_btpEiyNgKpc8NQ.gif 1000w,
https://cdn-media-1.freecodecamp.org/images/1*-DMqWWZ_btpEiyNgKpc8NQ.gif 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*-DMqWWZ_btpEiyNgKpc8NQ.gif" alt="Make Your Vim Smarter Using Ctrlp and Ctags">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by _haochuan</p>
<h1 id="make-your-vim-smarter-using-ctrlp-and-ctags">Make Your Vim Smarter Using Ctrlp and Ctags</h1>
<p>I absolutely love Vim, and I use Vim for all my coding and writing from year to year. Although more are more people, especially for those are working with JavaScript, prefer modern code editors such as Sublime Text or VSCode, I’d rather spend a little time trying to make my toy more intelligent.</p>
<h3 id="ctrlp"><a href="https://github.com/ctrlpvim/ctrlp.vim" rel="noopener">CtrlP</a></h3>
<p>If you are a Sublime Text, Atom, or VSCode guy, you must use <code>ctrl + p</code> thousands of times to improve productivity. Well, don’t be jealous if you are a Vim guy because this fancy Vim plugin CtrlP will give you all you need.<br>Check this <a href="http://ctrlpvim.github.io/ctrlp.vim/" rel="noopener">official doc</a> for installation and setup.</p>
<h3 id="ctags"><a href="http://ctags.sourceforge.net/" rel="noopener">Ctags</a></h3>
<p>Ctags is a tool that will sift through your code, indexing methods, classes, variables, and other identifiers, storing the index in a tags file. The tags file contains a single tag per line. Depending on command line arguments and the language ctags is run against, a lot of information can be obtained from this index.</p>
<p>Ctags currently supports <a href="http://ctags.sourceforge.net/languages.html" rel="noopener">41 programming languages</a>, and it’s relatively easy to add definitions for more.</p>
<p>Ctags makes it much easier to navigate a larger project, particularly if the code you’re working with is unfamiliar. If you’re unsure of what a method does or how it’s supposed to be called, you can jump straight to its definition. If you’re in the downward spiral of a 500+ line Perl script and want to know where a variable was defined three hours ago, you can jump right back to it. And afterward, you can jump right back to where you were working.</p>
<p>You can install Ctags using Homebrew in OSX:</p><pre><code>brew install ctags</code></pre>
<p>Please note that OS X comes with a Ctags executable, but it’s not exuberant-Ctags and is missing most of the useful features. If you see an error like <code>Invalid Parameter</code> when you run <code>ctags</code>, it means that the system is not using the one you installed with Homebrew. To solve this:</p><pre><code>$ alias ctags="`brew --prefix`/bin/ctags"</code></pre>
<p>When you’re sitting in the directory you want to index, just run:</p><pre><code>ctags -R.</code></pre>
<p>Ctags will walk through the directory recursively, tagging all source files it encounters. For very large projects, this might take a while, but normally it’s pretty fast.</p>
<p>You may also need some extra config for Ctags, below is the <code>~/.ctags</code> I'm using:</p><pre><code>--langmap=javascript:.js.es6.es.jsx--javascript-kinds=-c-f-m-p-v</code></pre><pre><code>--regex-javascript=/^[ \t]*(var|let|const)[ \t]+([A-Za-z0-9_$]+)[ \t]*=[ \t]*\[/\2/A,Array,Arrays/</code></pre><pre><code>--regex-javascript=/^[ \t]*(var|let|const)[ \t]+([A-Z][A-Za-z0-9_$]+)[ \t]*=[ \t]*function/\2/C,Class,Classes/--regex-javascript=/^[ \t]*class[ \t]+([A-Za-z0-9_$]+)/\1/C,Class,Classes/</code></pre><pre><code>--regex-javascript=/^[ \t]*export[ \t]?({[ \t]*)*([A-Za-z0-9_\*]*[ \t]as[ \t])([A-Za-z0-9_]+)/\3/E,Export,Exports/--regex-javascript=/^[ \t]*export[ \t]?({[ \t]*)*([A-Za-z0-9_\*]*[ \t]as[ \t])*([A-Za-z0-9_]+),[ \t]*([A-Za-z0-9_\*]*[ \t]as[ \t])([A-Za-z0-9_]+)/\5/E,export,Exports/--regex-javascript=/^[ \t]*export[ \t]?({[ \t]*)*([A-Za-z0-9_\*]*[ \t]as[ \t])*([A-Za-z0-9_]+),[ \t]*([A-Za-z0-9_\*]*[ \t]as[ \t])*([A-Za-z0-9_]+),[ \t]*([A-Za-z0-9_\*]*[ \t]as[ \t])([A-Za-z0-9_]+)/\7/E,Export,Exports/--regex-javascript=/^[ \t]*export[ \t]?(var|let|const)[ \t]+([A_Za-z0-9_$]+)/\2/E,Export,Exports/--regex-javascript=/^[ \t]*export[ \t]?(var|let|const)[ \t]+([A_Za-z0-9_$]+)[ \t]*[^,]+,[ \t]*([A_Za-z0-9_$]+)/\3/E,Export,Exports/--regex-javascript=/^[ \t]*export[ \t]?(var|let|const)[ \t]+([A_Za-z0-9_$]+)[ \t]*[^,]+,[ \t]*([A_Za-z0-9_$]+)[ \t]*[^,]+,[ \t]*([A_Za-z0-9_$]+)/\4/E,Export,Exports/</code></pre><pre><code>--regex-javascript=/^[ \t]*function[ \t]*([A-Za-z0-9_$]+)[ \t\(]/\1/F,Function,Functions/--regex-javascript=/^[ \t]*[\(]function[ \t]*([A-Za-z0-9_$]+)[ \t\(]/\1/F,Function,Functions/--regex-javascript=/^[ \t]*(var|let|const)[ \t]+([a-z][A-Za-z0-9_$]+)[ \t]*=[ \t]*function[^\*][^\*]/\2/F,Function,Functions/--regex-javascript=/^[ \t]*(var|let|const)[ \t]+([a-z][A-Za-z0-9_$]+)[ \t]*=[ \t]*\([^\*]/\2/F,Function,Functions/</code></pre><pre><code>--regex-javascript=/^[ \t]*function[ \t]*\*[ \t]*([A-Za-z0-9_$]+)/\1/G,Generator,Generators/--regex-javascript=/^[ \t]*(var|let|const)[ \t]+([a-z][A-Za-z0-9_$]+)[ \t]*=[ \t]*function([ \t]*\*)/\2/G,Generator,Genrators/--regex-javascript=/^[ \t]*(\*[ \t])([A-Za-z0-9_$]+)[ \t]*\(.*\)[ \t]*{/\2/G,Generator,Generators/</code></pre><pre><code>--regex-javascript=/^[ \t]*import[ \t]?({[ \t]*)*([A-Za-z0-9_\*]*[ \t]as[ \t])([A-Za-z0-9_]+)/\3/I,Import,Imports/--regex-javascript=/^[ \t]*import[ \t]?({[ \t]*)*([A-Za-z0-9_\*]*[ \t]as[ \t])*([A-Za-z0-9_]+),[ \t]*([A-Za-z0-9_\*]*[ \t]as[ \t])([A-Za-z0-9_]+)/\5/I,Import,Imports/--regex-javascript=/^[ \t]*import[ \t]?({[ \t]*)*([A-Za-z0-9_\*]*[ \t]as[ \t])*([A-Za-z0-9_]+),[ \t]*([A-Za-z0-9_\*]*[ \t]as[ \t])*([A-Za-z0-9_]+),[ \t]*([A-Za-z0-9_\*]*[ \t]as[ \t])([A-Za-z0-9_]+)/\7/I,Import,Imports/</code></pre><pre><code>--regex-javascript=/^[ \t]*this\.([A-Za-z0-9_$]+)[ \t]*=.*{$/\1/M,Method,Methods/--regex-javascript=/^[ \t]*([A-Za-z0-9_$]+)[ \t]*[:=][ \t]*[\(]*function[ \t]*\(/\1/M,Method,Methods/--regex-javascript=/^[ \t]*static[ \t]+([A-Za-z0-9_$]+)[ \t]*\(/\1/M,Method,Methods/--regex-javascript=/^[ \t]*([A-Za-z0-9_$]+)\(.*\)[ \t]*{/\1/M,Method,Methods/</code></pre><pre><code>--regex-javascript=/^[ \t]*(this\.)*([A-Za-z0-9_$]+)[ \t]*[:=].*[,;]*[^{]$/\2/P,Property,Properties/</code></pre><pre><code>--regex-javascript=/^[ \t]*(var|let|const)[ \t]+([A-Za-z0-9_$]+)[ \t]*=[ \t]*{/\2/O,Object,Objects/</code></pre><pre><code>--regex-javascript=/\/\/[ \t]*(FIXME|TODO|BUG|NOBUG|\?\?\?|\!\!\!|HACK|XXX)[ \t]*\:*(.*)/\1/T,Tag,Tags/</code></pre><pre><code>--regex-javascript=/^[ \t]*(var|let|const)[ \t]+([A-Za-z0-9_$]+)[ \t]*=[ \t]*[^\[{]*;$/\2/V,Variable,Variables/</code></pre><pre><code>--exclude=min--exclude=vendor--exclude=\*.min.\*--exclude=\*.map--exclude=\*.swp--exclude=\*.bak--exclude=tags--exclude=node_modules--exclude=bower_components--exclude=test--exclude=__test__--exclude=build--exclude=dist--exclude=*.bundle.*</code></pre>
<p>Here is how it looks like going to function definition:</p>
<p>Also you can use Ctrlp to search for tags instead of files. To do this, first you need to map a shortcut in your <code>.vimrc</code>:</p><pre><code>nnoremap &lt;leader&gt;. :CtrlPTag&lt;cr&gt;</code></pre>
<p>Here is how it works:</p>
<p>Hope it helps :)</p>
<p>I write code for audio and web, and play guitar on YouTube. If you want to see more stuff from me or know more about me, you can always find me in:</p>
<p>Website:<br><a href="https://haochuan.io/" rel="noopener">https://haochuan.io/</a></p>
<p>GitHub:<br><a href="https://github.com/haochuan" rel="noopener">https://github.com/haochuan</a></p>
<p>Medium:<br><a href="https://medium.com/@haochuan" rel="noopener">https://medium.com/@haochuan</a></p>
<p>YouTube: <a href="https://www.youtube.com/channel/UCNESazgvF_NtDAOJrJMNw0g" rel="noopener">https://www.youtube.com/channel/UCNESazgvF_NtDAOJrJMNw0g</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
