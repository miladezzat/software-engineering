---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca86e740569d1a4ca7de8.jpg"
tags: [Git]
description: "“It’s a version control system.”"
author: "Milad E. Fahmy"
title: "How not to be afraid of GIT anymore"
created: "2021-08-16T11:35:46+02:00"
modified: "2021-08-16T11:35:46+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-git tag-tech tag-technology tag-programming tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">How not to be afraid of GIT anymore</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca86e740569d1a4ca7de8.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca86e740569d1a4ca7de8.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca86e740569d1a4ca7de8.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca86e740569d1a4ca7de8.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca86e740569d1a4ca7de8.jpg" alt="How not to be afraid of GIT anymore">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
.git/
├── HEAD
├── config
├── description
├── hooks
│   ├── applypatch-msg.sample
│   ├── commit-msg.sample
│   ├── post-update.sample
│   ├── pre-applypatch.sample
│   ├── pre-commit.sample
│   ├── pre-push.sample
│   ├── pre-rebase.sample
│   ├── pre-receive.sample
│   ├── prepare-commit-msg.sample
│   └── update.sample
├── info
│   └── exclude
├── objects
│   ├── info
│   └── pack
└── refs
├── heads
└── tags
8 directories, 14 files</code></pre><p>This is how Git controls and manages your entire project. We will go into all the important bits, one by one.</p><p>Git consists of 3 parts: the object store, the index and the working directory.</p><h4 id="the-object-store">The Object Store</h4><p>This is how Git stores everything internally. For every file in your project that you <code>add</code>, Git generates a hash for the file and stores the file under that hash. For example, if I now create a <code>helloworld</code> file and do <code>git add helloworld</code> (which is telling Git to add the file called <code>helloworld</code> to the git object store), I get something like this:</p><pre><code>$ tree .git/
.git/
├── HEAD
├── config
├── description
├── hooks
│   ├── applypatch-msg.sample
│   ├── commit-msg.sample
│   ├── post-update.sample
│   ├── pre-applypatch.sample
│   ├── pre-commit.sample
│   ├── pre-push.sample
│   ├── pre-rebase.sample
│   ├── pre-receive.sample
│   ├── prepare-commit-msg.sample
│   └── update.sample
├── index
├── info
│   └── exclude
├── objects
│   ├── a0
│   │   └── 423896973644771497bdc03eb99d5281615b51
│   ├── info
│   └── pack
└── refs
├── heads
└── tags
9 directories, 16 files</code></pre><p>A new object has been generated! For those interested in going under the hood, Git internally uses the <a href="https://git-scm.com/docs/git-hash-object" rel="noopener">hash-object</a> command like so:</p><pre><code>$ git hash-object helloworld
a0423896973644771497bdc03eb99d5281615b51</code></pre><p>Yes, it’s the same hash we see under the objects folder. Why the subdirectory with the first two characters of the hash? <strong>It makes searching faster.</strong></p><p>Then, Git creates an object with the name as the above hash, compresses our given file and stores it there. Hence, you can also actually see the contents of the object!</p><pre><code>$ git cat-file a0423896973644771497bdc03eb99d5281615b51 -p
hello world!</code></pre><p>This is all under the hood. You’d never use <a href="https://git-scm.com/docs/git-cat-file" rel="noopener">cat-file</a> in day to day adds. You’ll simply <code>add</code>, and let Git handle the rest.</p><p>That’s our first Git command, done and dusted.</p><p><code><strong>git add</strong></code><strong> creates a hash, compresses the file and adds the compressed object to the object store.</strong></p><h4 id="the-working-directory">The working directory</h4><p>As the name suggests, this is where you work. All files you create and edit are in the working directory. I created a new file, <code>byeworld</code> and ran <code>git status</code>:</p><pre><code>$ git status
On branch master
No commits yet
Changes to be committed:
(use "git rm --cached &lt;file&gt;..." to unstage)
new file:   helloworld
Untracked files:
(use "git add &lt;file&gt;..." to include in what will be committed)
byeworld</code></pre><p>Untracked files are files in the working directory we haven’t asked git to manage.</p><p>Had there been nothing we had done in the working directory, we’d get the following message:</p><pre><code>$ git status
On branch master
nothing to commit, working tree clean</code></pre><p>which I’m pretty sure you understand now. Ignore the branch and commit for now. The key is, the working tree(directory) is clean.</p><h4 id="the-index">The Index</h4><p>This is the core of Git. Also known as the staging area. The index stores the mapping of files to the objects in the object store. This is where the <code>commits</code> come in. The best way to see this is to test it out!</p><p>Let us commit our addition of the file <code>helloworld</code></p><pre><code>$ git commit -m "Add helloworld"
[master (root-commit) a39b9fd] Add helloworld
1 file changed, 1 insertion(+)
create mode 100644 helloworld</code></pre><p>Back to our tree:</p><pre><code>$ tree .git/
.git/
├── COMMIT_EDITMSG
├── HEAD
├── config
├── description
├── hooks
│   ├── applypatch-msg.sample
│   ├── commit-msg.sample
│   ├── post-update.sample
│   ├── pre-applypatch.sample
│   ├── pre-commit.sample
│   ├── pre-push.sample
│   ├── pre-rebase.sample
│   ├── pre-receive.sample
│   ├── prepare-commit-msg.sample
│   └── update.sample
├── index
├── info
│   └── exclude
├── logs
│   ├── HEAD
│   └── refs
│ └── heads
│     └── master
├── objects
│   ├── a0
│   │   └── 423896973644771497bdc03eb99d5281615b51
│   ├── a3
│   │   └── 9b9fdd624c35eee08a36077f411e009da68c2f
│   ├── fb
│   │   └── 26ca0289762a454db2ef783c322fedfc566d38
│   ├── info
│   └── pack
└── refs
├── heads
│   └── master
└── tags
14 directories, 22 files</code></pre><p>Ah, interesting! We have 2 new objects in our object store, and some stuff we don’t understand yet in the logs and refs. Going back to our friend <code>cat-file</code>:</p><pre><code>$ git cat-file a39b9fdd624c35eee08a36077f411e009da68c2f -p
tree fb26ca0289762a454db2ef783c322fedfc566d38
author = &lt;=&gt; 1537700068 +0100
committer = &lt;=&gt; 1537700068 +0100
Add helloworld
$ git cat-file fb26ca0289762a454db2ef783c322fedfc566d38 -p
100644 blob a0423896973644771497bdc03eb99d5281615b51 helloworld</code></pre><p>As you can guess, the first object is the commit metadata: who did what and why, with a tree. The second object, is the actual tree. If you understand unix file system, you’ll know exactly what this is.</p><p>The <code>tree</code> in Git corresponds to the Git file system. Everything is either a tree (directory) or a blob (file) and with each commit, Git stores the tree information as well, to tell itself: this is how the working directory should look at this point. Note that the tree points to a specific object of each file it contains (the hash).</p><p>It’s time to talk about <strong>branches</strong>! Our first commit added some other stuff to <code>.git/</code> as well. Our interest is now in <code>.git/refs/heads/master</code>:</p><pre><code>$ cat .git/refs/heads/master
a39b9fdd624c35eee08a36077f411e009da68c2f</code></pre><p>Here’s what you need to know about branches:</p><blockquote>A branch in Git is a lightweight movable pointer to one of these commits. The default branch name in Git is master.</blockquote><p>Eh, what? I like to think of branches as a fork in your code. You want to make some changes, but you don’t want to break things. You decide to have a stronger demarcation than the commit log, and that’s where branches come in. <code>master</code> is the default branch, also used as the de-facto production branch. Hence, the creation of the above file. As you can guess by the contents of the file, it points to our first commit. Hence, it’s a pointer to a commit.</p><p>Let’s explore this further. Say, I create a new branch:</p><pre><code>$ git branch the-ending
$ git branch
* master
the-ending</code></pre><p>There we have it, a new branch! As you can guess, a new entry must have been added to <code>.git/refs/heads/</code> and since there is no extra commit, it should point to our first commit as well, just like <code>master</code>.</p><pre><code>$ cat .git/refs/heads/the-ending a39b9fdd624c35eee08a36077f411e009da68c2f</code></pre><p>Yup, exactly! Now, remember <code>byeworld</code>? That file was still untracked, so no matter what branch you shift to, that file would always be there. Say, I want to switch to this branch now, so I’ll <code>checkout</code> the branch, like a <a href="https://www.urbandictionary.com/define.php?term=smokeshow" rel="noopener">smokeshow.</a></p><pre><code>$ git checkout the-ending
Switched to branch 'the-ending'
$ git branch
master
* the-ending</code></pre><p>Now, under the hood, Git would change all contents of the working directory to match the content pointed by the branch commit. For now, since this is exactly the same as master, it looks the same.</p><p>I <code>add</code> and <code>commit</code> the <code>byeworld</code> file.</p><p>What do you expect to change in the <code>objects</code> folder?</p><p>What do you expect to change in the <code>refs/heads</code> folder?</p><p>Think about this before moving forward.</p><pre><code>$ tree .git/
.git/
├── COMMIT_EDITMSG
├── HEAD
├── config
├── description
├── hooks
│   ├── applypatch-msg.sample
│   ├── commit-msg.sample
│   ├── post-update.sample
│   ├── pre-applypatch.sample
│   ├── pre-commit.sample
│   ├── pre-push.sample
│   ├── pre-rebase.sample
│   ├── pre-receive.sample
│   ├── prepare-commit-msg.sample
│   └── update.sample
├── index
├── info
│   └── exclude
├── logs
│   ├── HEAD
│   └── refs
│ └── heads
│     ├── master
│     └── the-ending
├── objects
│   ├── 0b
│   │   └── 17be9dbc34c5a5fbb0b94d57680968efd035ca
│   ├── a0
│   │   └── 423896973644771497bdc03eb99d5281615b51
│   ├── a3
│   │   └── 9b9fdd624c35eee08a36077f411e009da68c2f
│   ├── b3
│   │   └── 00387d818adbbd6e7cc14945fdf4c895de6376
│   ├── d1
│   │   └── 8affe001488123b496ceb34d8b13b120ab4cb6
│   ├── fb
│   │   └── 26ca0289762a454db2ef783c322fedfc566d38
│   ├── info
│   └── pack
└── refs
├── heads
│   ├── master
│   └── the-ending
└── tags
17 directories, 27 files</code></pre><p>3 new objects — 1 for add, 2 for commit! Makes sense? What do you think the objects contain?</p><ul><li>Commit metadata</li><li><code>add</code> object contents</li><li>Tree description</li></ul><p>The last part of the picture is: how does this commit metadata work with the previous commit metadata(s). Well, <code>cat-file</code>!</p><pre><code>$ git cat-file 0b17be9dbc34c5a5fbb0b94d57680968efd035ca -p
100644 blob d18affe001488123b496ceb34d8b13b120ab4cb6 byeworld
100644 blob a0423896973644771497bdc03eb99d5281615b51 helloworld
$ git cat-file b300387d818adbbd6e7cc14945fdf4c895de6376 -p
tree 0b17be9dbc34c5a5fbb0b94d57680968efd035ca
parent a39b9fdd624c35eee08a36077f411e009da68c2f
author = &lt;=&gt; 1537770989 +0100
committer = &lt;=&gt; 1537770989 +0100
add byeworld
$ git cat-file d18affe001488123b496ceb34d8b13b120ab4cb6 -p
Bye world!
$ cat .git/refs/heads/the-ending
b300387d818adbbd6e7cc14945fdf4c895de6376</code></pre><p>Do you see it in bold? The parent pointer! And it’s exactly how you thought about it — a linked list, linking the commits together!</p><p>And do you see the branch implementation? It points to a commit, the latest one we did after checking out! Of course, the master should still be pointing to the helloworld commit, right?</p><pre><code>$ cat .git/refs/heads/master a39b9fdd624c35eee08a36077f411e009da68c2f</code></pre><p>Alright, we have been through a lot, let’s summarise it up to here.</p><h3 id="tl-dr">TL;DR</h3><p>Git works with objects — compressed versions of files you’re asking Git to track.</p><p>Each object has an ID (a hash generated by Git based on contents of the file).</p><p>Every time you <code>add</code> a file, Git adds a new object to the object store. <strong>This is exactly why you can’t deal with very large files in Git</strong> — it stores the entire file each time you <code>add</code> changes, not the diff (contrary to popular belief).</p><p>Every commit creates 2 objects:</p><ol><li><strong>The tree</strong>: An ID for the tree, which acts exactly like a unix directory: it points to other trees (directories) or blobs(files): This builds up the entire directory structure based on the objects present at that time. Blobs are represented by the current objects created by <code>add</code>.</li><li><strong>The commit metadata</strong>: An ID for the commit, who made the commit, a tree that represents the commit, commit message and parent commit. Forms a linked list structure linking commits together.</li></ol><p>Branches are pointers to commit metadata objects, all stored in <code>.git/refs/heads</code></p><p>That’s all for the understanding behind the scenes! <a href="https://medium.freecodecamp.org/now-that-youre-not-afraid-of-git-anymore-here-s-how-to-leverage-what-you-know-11e710c7f37b" rel="noopener">In the next part</a>, we’ll go through some of the Git actions that give people nightmares:</p><p><code>reset, merge, pull, push, fetch</code> and how they modify the internal structure in <code>.git/</code>.</p><p>Other stories in this series:</p><ul><li><a href="https://medium.freecodecamp.org/how-not-to-be-afraid-of-vim-anymore-ec0b7264b0ae" rel="noopener">How not to be afraid of Vim anymore</a></li><li><a href="https://medium.freecodecamp.org/how-not-to-be-afraid-of-python-anymore-b37b58871795" rel="noopener">How not to be afraid of Python anymore</a></li></ul><p>Enjoyed this? <a href="http://neilkakkar.com/subscribe/" rel="noopener">Don’t miss a post again — subscribe to my mailing list!</a></p>
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
