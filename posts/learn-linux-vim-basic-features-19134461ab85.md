---
card: "https://cdn-media-1.freecodecamp.org/images/1*w9dLy2njrrkNUQVugpF-6g.jpeg"
tags: [Vim]
description: "by Amit Kulkarni"
author: "Milad E. Fahmy"
title: "Why I love Vim: It’s the lesser-known features that make it so amazing"
created: "2021-08-16T11:48:38+02:00"
modified: "2021-08-16T11:48:38+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-vim tag-linux tag-programming tag-productivity tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Why I love Vim: It’s the lesser-known features that make it so amazing</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*w9dLy2njrrkNUQVugpF-6g.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*w9dLy2njrrkNUQVugpF-6g.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*w9dLy2njrrkNUQVugpF-6g.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*w9dLy2njrrkNUQVugpF-6g.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*w9dLy2njrrkNUQVugpF-6g.jpeg" alt="Why I love Vim: It’s the lesser-known features that make it so amazing">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
void decrypt_text(char *text, int bytes)
void process_text(char *text, int bytes)
void another_important_function(int bytes, double precision)</code></pre><p>Oops! You forgot to put a semicolon at the end of each line and also you just realized that all these functions return an integer error code instead of void.</p><p>The steps you need to perform for making change in one line are:</p><ul><li>Place the cursor at the beginning of the word <code>void</code></li><li>Press <code>cw</code> in normal mode to delete the word <code>void</code> and type <code>int</code></li><li>Press <code>Esc</code> , move to the end of line using <code>Shift+a</code> to insert <code>;</code></li><li>Press <code>Esc</code> and press <code>^</code> to return to the beginning of the edited line</li></ul><p>Resulting in:</p><pre><code class="language-c">int encrypt_text(char *text, int bytes);
void decrypt_text(char *text, int bytes)
void process_text(char *text, int bytes)
void another_important_function(int bytes, double precision)</code></pre><p>You can just record this sequence of steps and replay it on all 4 lines.</p><p>All you have to do is, before you start the sequence, start recording the macro in any alphabet (let’s say <code>a</code>) by pressing <code>qa</code> in normal mode. Now your steps are being recorded in <code>a</code> . Once you are done with all your steps, just press <code>q</code> in normal mode. This will end the recording. To replay these steps, just keep the cursor at the same place where it was placed during macro. Press <code>@a</code> and we’re done! BOOM! Vim will repeat the same steps for you on that line! To repeat it on multiple lines, you can also use <code>@@</code> after using <code>@a</code> command once</p><h4 id="i-know-vim-is-nowhere-close-to-an-ide-and-i-may-be-having-some-unreasonable-hopes-but-just-a-quick-question-remote-editing-of-files-possible-with-vim">I know Vim is nowhere close to an IDE and I may be having some unreasonable hopes but just a quick question: Remote editing of files possible with Vim?</h4><p>If you think of it considering the available resources:<br>[1] Vim<br>[2] openssh-client (Comes installed with most Linux flavors)</p><p>You are in luck my friend! Yes, Vim supports remote editing of files ?<br>Vim just utilizes the secure connection established by scp (secure copy) provided by openssh-client. There are times when you are working with files on multiple remote machines and it’s a waste of time to log into a machine just to edit one single file! You can relax in your current machine if you just know your remote machine credentials and path.</p><pre><code class="language-bash">vim scp://remoteuser@remote_IP_or_hostname/relative/path/of/file</code></pre><p>For example: I need to edit a file on 10.0.18.12 stored in <code>/home/dev-john/project/src/main.c</code> and I have login credentials for <code>dev-john</code>, I can access the <code>main.c</code> using:</p><pre><code>$ vim scp://dev-john@10.0.18.12/project/src/main.c</code></pre><p>I can use the relative path because, I can start looking for the file from the home directory of <code>dev-john</code></p><p>TIP: If you access a remote machine frequently, you can create an ssh config file to create a shortcut for the connection. Create a file <code>~/.ssh/config</code> with</p><pre><code class="language-bash">Host remote-dev-machine
Hostname 10.0.18.12
User dev-john
mark line  col file/text
P     53    4 ~/project/src/large-file.c
A     11    0 ~/project/README.md</code></pre><p>NOTE: If you are not interested in the cursor position and just want to be there at the beginning of you bookmarked line, use <code>'P</code> instead of <code>`P</code> (Use a single quote instead of back tick to be positioned at the beginning of the line)</p><h4 id="i-ve-heard-that-vim-supports-window-splitting-along-with-tabs-i-understand-tabs-are-great-and-you-get-to-work-with-multiple-open-files-at-once-but-what-about-splitting-why-would-i-want-that">I’ve heard that Vim supports window splitting along with tabs! I understand tabs are great and you get to work with multiple open files at once. But, what about splitting? Why would I want that?</h4><p>Scenarios:</p><ul><li>You may want to edit a file by looking at another file simultaneously (May be you are defining a C function by looking at it’s declaration in a header file)</li><li>You may want to edit some portion of a file by looking at the top/bottom portion of the same file simultaneously</li><li>Your work may require you to edit a file by looking at different portions of different files simultaneously</li></ul><p>Vim supports splitting of screen both horizontally and vertically. Even better, you can even browse file system to open a file when you split your screen.</p><p>Here are the available options:</p><pre><code>:split filename  - split window horizontally and load filename
:vsplit file     - vertical split and open file
ctrl-w up arrow  - move cursor up a window
ctrl-w ctrl-w    - move cursor to another window (cycle)
ctrl-w _   - maximize current window vertically
ctrl-w |   - maximize current window horizontally
ctrl-w =   - make all equal size
:sview file- same as split, but readonly
CTRL-W [N] +	Increase current window height by N (default 1)
CTRL-W [N] &lt;	Decrease current window width by N (default 1)
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
