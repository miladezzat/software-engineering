---
card: "https://cdn-media-1.freecodecamp.org/images/0*idcJObABQVEH2BVq"
tags: [Vim]
description: "If you’ve ever used Vim, you know how difficult it can get to"
author: "Milad E. Fahmy"
title: "How not to be afraid of Vim anymore"
created: "2021-08-16T11:34:29+02:00"
modified: "2021-08-16T11:34:29+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-vim tag-productivity tag-technology tag-tech tag-software-development ">
<header class="post-full-header">
<h1 class="post-full-title">How not to be afraid of Vim anymore</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*idcJObABQVEH2BVq 300w,
https://cdn-media-1.freecodecamp.org/images/0*idcJObABQVEH2BVq 600w,
https://cdn-media-1.freecodecamp.org/images/0*idcJObABQVEH2BVq 1000w,
https://cdn-media-1.freecodecamp.org/images/0*idcJObABQVEH2BVq 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*idcJObABQVEH2BVq" alt="How not to be afraid of Vim anymore">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h4 id="a-curation-of-the-most-popular-commands-and-how-to-use-them">A curation of the most popular commands and how to use them</h4><p>If you’ve ever used Vim, you know how difficult it can get to reach the same speed as in a “normal” GUI editor. But once you do, the payoff is exponential — you get much more efficient at writing code. Of course, this isn’t the main reason for this post.</p><p>The majority of the time goes — or should go — into designing a solution to your problem, not actually coding it; so optimizing the how-fast-you-code bit seems like the last thing to focus on. It’s not a leverage point.</p><p>This post took shape because of another reason: the non-existence of GUIs on SSH’ed machines. What are you going to do now? Any machine where you have access to the terminal and you want to edit a file — You have 2 options:</p><ol><li>Give up, try to close Vim</li><li>Master Vim</li></ol><p>Just making a copy of <code><a href="https://superuser.com/questions/246487/how-to-use-vimtutor" rel="noopener">vimtutor</a></code> wouldn’t help anyone. So here I’m using a different approach: I aggregated the best bits of vim that I use in everyday life as a software developer, along with mnemonics to remember the stuff by. This contains almost everything you need for regular editing and writing.</p><h3 id="the-basics">The basics</h3><p>Stick with me, this isn’t about the commands but the ideology behind them!</p><h4 id="modes">Modes</h4><p>Vim has 2 modes:</p><ul><li>Normal ( Command mode)</li><li>Insert ( Edit mode )</li></ul><p>When you open Vim, you start in normal mode. To enter back into normal mode at anytime, press the <code>ESC</code> key. Normal mode is where you can issue commands: the list of commands is endless!</p><p>There are a lot of ways to enter insert mode. The most intuitive one is to use the <code>i</code> command. <code>i</code> for insert. In normal mode, press <code>i</code> and you’ll enter insert mode. Now anything you type will show up in the editor. One of the biggest hurdles, sorted.</p><p>The mental model — to understand the idea: Since there is no GUI, there’s no concept of mouse clicks. There’s no menu to choose options from, there’s no right click. Hence, you need a way to get all this on the keyboard — your only input source.</p><p>Having two modes achieves this! You can think of the Normal ( Command) mode as the Menu bar and mouse on steroids, while the Insert mode is like the normal mode in GUI editors ( where what you type shows up on the screen ).</p><h4 id="words">Words</h4><p>To Vim, words mean almost the same as what they mean to us — A set of characters separated by whitespace or special characters. The command is <code>w</code>.</p><h4 id="command-anatomy">Command Anatomy</h4><p>Commands in Vim follow a set pattern. Knowing this would help put each command into a certain bucket of commands, thus building a better mental model for the same.</p><p>Commands look like this:</p><p>[action] &lt;number&gt; [motion]</p><p>The action is what you want to do,</p><p>The number is how many times you want to do that action,</p><p>The motion is the range of that action.</p><p>The motion is the scope. An example would make this clearer. Let us say, we want to delete the next 3 words, starting from the cursor. Here, the action is delete, the number is 3 and the motion is a word. The command action for delete is <code>d</code>.</p><p>Hence, we get the final command as: <code>d3w</code> — delete the next 3 words.</p><p>Omitting the number defaults to once.</p><p>Motions can be used without an action, which defaults to navigation. Hence, typing <code>w</code> in command mode would move the cursor forward one word.</p><p>We are well equipped now to start learning about the commands themselves (and a range of motions to use with them)</p><h3 id="useful-commands">Useful commands</h3><h4 id="how-to-close-vim">How to close Vim</h4><p>First things first, we don’t want to get stuck in Vim land without having an exit plan. Always have an exit strategy.</p><p><code>:q</code> to quit</p><p><code>:q!</code> to force quit</p><p><code>:wq</code> to save and quit</p><h4 id="command-actions">Command Actions</h4><p><code>d</code> : delete</p><p><code>i</code> : insert</p><p><code>p</code> : put / paste</p><p><code>y</code> : yank / copy</p><p><code>x</code> : cut</p><p><code>u</code> : <strong>undo</strong></p><p><code>di</code>: delete inside*, <code>yi</code> : yank inside*</p><p><code>v</code> : visual / selection</p><p><code>/</code> : search</p><p><code>%</code> : parentheses matching, developers rejoice!</p><p><code>:s</code> : substitute! In other words, find-replace on steroids</p><p>Since actions on the entire line are very frequent, the developers of vim created a new shorthand for them — omitting the need to add a motion. Repeat the action to apply on the entire line. For example:</p><p>To delete the current line: <code>dd</code></p><p>To copy the current line: <code>yy</code></p><p>Neat, ain’t it?</p><h4 id="command-motions">Command motions</h4><p>Motions go with actions as we have seen, and the available motions changes with the action. However, some motions are pretty uniform.</p><p><code>w</code> : beginning of next word (we’ve seen this before!)</p><p><code>e</code> : ending of current word</p><p><code>b</code> : beginning of previous word</p><p>Arrow keys / &lt;h,j,k,l&gt; : respective motions. h,j,k,l are a substitute to the arrow keys, and the source of speed in Vim: You don’t have to move your hands away from the typing part of the keyboard.</p><p><code>$</code> : end of line</p><p><code>0</code> : beginning of line</p><p><code>G</code> : end of file</p><p><code>nG</code> : jump to line number <code>n</code></p><p><code>)</code> : jump forward a sentence</p><p><code>}</code> : jump forward a paragraph</p><p>This helps visualise better:</p><pre><code>           ge      b          w                             e
&lt;-     &lt;-         ---&gt;                          ---&gt;
This is-a line, with special/separated/words (and some more). ~
&lt;----- &lt;-----         --------------------&gt;         -----&gt;
map &lt;C-t&gt;&lt;right&gt; :tabn&lt;cr&gt;</code></pre><p>Which means &lt;Ctrl-t&gt; followed b<code>y th</code>e le<code>ft or</code> right arrow key would let you switch between tabs.</p><p>How exactly did I come up with this mapping? <a href="http://vim.wikia.com/wiki/Mapping_keys_in_Vim_-_Tutorial_(Part_1)" rel="noopener">Check out this tutorial</a>.</p><p>Other stories in this series:</p><ul><li><a href="https://medium.freecodecamp.org/how-not-to-be-afraid-of-python-anymore-b37b58871795" rel="noopener">How not to be afraid of Python anymore</a></li><li><a href="https://medium.freecodecamp.org/how-not-to-be-afraid-of-git-anymore-fe1da7415286" rel="noopener">How not to be afraid of GIT anymore</a></li></ul><p>Enjoyed this? <a href="http://neilkakkar.com/subscribe/" rel="noopener">Don’t miss a post again — subscribe to my mailing list!</a></p>
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
