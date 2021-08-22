---
card: "https://cdn-media-1.freecodecamp.org/images/1*TnsFDs-DEye722CrQXjv8w.png"
tags: [Git]
description: "by Shahzan"
author: "Milad E. Fahmy"
title: "Git for Absolute Beginners"
created: "2021-08-16T10:06:23+02:00"
modified: "2021-08-16T10:06:23+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-git tag-programming tag-web-development tag-version-control tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Git for Absolute Beginners</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*TnsFDs-DEye722CrQXjv8w.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*TnsFDs-DEye722CrQXjv8w.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*TnsFDs-DEye722CrQXjv8w.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*TnsFDs-DEye722CrQXjv8w.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*TnsFDs-DEye722CrQXjv8w.png" alt="Git for Absolute Beginners">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
On branch master
No commits yet
Untracked files:
(use “git add &lt;file&gt;…” to include in what will be committed)
HelloWorld.html
Notes.txt
README.md
nothing added to commit but untracked files present (use “git add” to track)</code></pre><p>Looking at the output of the <strong>git status</strong> command, it indicates that none of the files are currently being tracked by Git.</p><p>Let’s go ahead and add these files so that they get tracked by Git.</p><p>The command for adding these files is as shown below:</p><pre><code class="language-bash">$ git add HelloWorld.html Notes.txt</code></pre><p>Now, let’s execute the git status command and check its output.</p><pre><code class="language-bash">$ git status
On branch master
No commits yet
Changes to be committed:
(use “git rm — cached &lt;file&gt;…” to unstage)
new file: HelloWorld.html
new file: Notes.txt
Untracked files:
(use “git add &lt;file&gt;…” to include in what will be committed)
README.md</code></pre><p>As we can see, we have the <code>HelloWorld.txt</code> and the <code>Notes.txt</code> files present within the staging area that are waiting to be committed.</p><p>The <code>README.md</code> file isn’t being tracked at all, as we didn’t include this file within the git add command which we executed earlier.</p><p>When we executed the git add command, Git staged all the files which were specified as part of the input to this command.</p><p>Until we commit these files, Git won’t start tracking these files.</p><h4 id="committing-staged-files">Committing Staged Files</h4><p>Let’s commit these staged files by typing the command shown below.</p><pre><code class="language-bash">$ git commit -m ‘Initial Commit’</code></pre><p>git commit is the command which is used to commit any staged files, -m is used to specify the comments for this commit operation.</p><p>If we would like to view all the commit operations that have been performed, we can do it by typing the git log command, as shown below.</p><pre><code class="language-bash">$ git log
commit 8525b32ffcb92c731f5d04de7fe285a2d0ebe901 (HEAD -&gt; master)
Author: shahzan &lt;sxxxxxxn@gmail.com&gt;
Date: Sun Apr 28 01:12:20 2019 +0100
Initial Commit</code></pre><p>Whenever any change is done to a file which is being tracked by Git, we need to re-stage those files and re-commit them again. Until those files are not re-staged and re-committed, they will be tracked by Git.</p><p>I have done some minor changes to the Notes.txt file, let’s see what Git has got to say about these changes by executing the git status command.</p><pre><code class="language-bash">$ git status
On branch master
Changes not staged for commit:
(use “git add &lt;file&gt;…” to update what will be committed)
modified: Notes.txt
Untracked files:
(use “git add &lt;file&gt;…” to include in what will be committed)
README.md
no changes added to commit (use “git add” and/or “git commit -a”)</code></pre><p>Looking at the above output block, it is clear that the file <code>Notes.txt</code> has been modified and the changes are not staged for commit.</p><p>We make use of the same git add command to re-stage the file.</p><pre><code class="language-bash">$ git add Notes.txt
Shahzan@BlackBox MINGW64 /d/Medium Post Pics/Git/Source Code (master)
$ git status
On branch master
Changes to be committed:
(use “git reset HEAD &lt;file&gt;…” to unstage)
modified: Notes.txt
Untracked files:
(use “git add &lt;file&gt;…” to include in what will be committed)
README.md</code></pre><p>As you can notice from the above output block, the file has been staged and is waiting to be committed.</p><p>Again, we make use of the same git commit command to re-commit the staged file.</p><pre><code class="language-bash">$ git commit -m ‘Notes.txt file updated’
[master 184fcad] Notes.txt file updated
1 file changed, 3 insertions(+), 1 deletion(-)</code></pre><p>Let’s execute the git log command and see if the commit has been successful.</p><pre><code class="language-bash">$ git log
commit 184fcad4185296103cd9dba0da83520399a11383 (HEAD -&gt; master)
Author: shahzans &lt;shuaib.shahzan@gmail.com&gt;
Date: Sun Apr 28 01:15:38 2019 +0100
Notes.txt file updated
commit 8525b32ffcb92c731f5d04de7fe285a2d0ebe901
Author: shahzans &lt;shuaib.shahzan@gmail.com&gt;
Date: Sun Apr 28 01:12:20 2019 +0100
Initial Commit</code></pre><p>As you may notice in the above output block, both the commit operations are being displayed.</p><h4 id="ignoring-files">Ignoring Files</h4><p>Within the repository, there may be files that hold sensitive data or log data, which we don’t want to be tracked by Git under any circumstances.</p><p>.gitignore is the file within which we can specify all the files we don’t want Git to keep track of.</p><pre><code class="language-bash">$ touch .gitignore</code></pre><p>The syntax to create this file is as shown above.</p><p>Let’s say that I do not want Git to track any file ending with the .md extension.</p><p>Before adding *.md to the .gitignore file, have a look at the output of the git status command as shown in the output block below.</p><pre><code class="language-bash">$ git status
On branch master
Untracked files:
(use “git add &lt;file&gt;…” to include in what will be committed)
.gitignore
README.md
nothing added to commit but untracked files present (use “git add” to track)</code></pre><p>As you may notice, we have <code>.gitignore</code> and <code>README.md</code> being shown as untracked files.</p><p>After adding *.md to the .gitignore file, the git status is as shown in the output block below.</p><p>As you may notice, we now just have .gitignore being shown as an untracked file.</p><pre><code class="language-bash">$ git status
On branch master
Untracked files:
(use “git add &lt;file&gt;…” to include in what will be committed)
.gitignore
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
