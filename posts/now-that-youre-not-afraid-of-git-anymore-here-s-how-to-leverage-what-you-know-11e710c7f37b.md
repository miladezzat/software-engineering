---
card: "https://cdn-media-1.freecodecamp.org/images/1*8rQSJ7R76i_N0r-LjULBZw.jpeg"
tags: [Git]
description: "The first part of this series looked at the inner workings of"
author: "Milad E. Fahmy"
title: "Now that you’re not afraid of GIT anymore, here’s how to leverage what you know"
created: "2021-08-16T11:35:09+02:00"
modified: "2021-08-16T11:35:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-git tag-technology tag-tech tag-programming tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">Now that you’re not afraid of GIT anymore, here’s how to leverage what you know</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*8rQSJ7R76i_N0r-LjULBZw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*8rQSJ7R76i_N0r-LjULBZw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*8rQSJ7R76i_N0r-LjULBZw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*8rQSJ7R76i_N0r-LjULBZw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*8rQSJ7R76i_N0r-LjULBZw.jpeg" alt="Now that you’re not afraid of GIT anymore, here’s how to leverage what you know">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><a href="https://medium.freecodecamp.org/how-not-to-be-afraid-of-git-anymore-fe1da7415286" rel="noopener">The first part of this series looked at the inner workings of GIT</a> and showed you how not to be afraid of working with Git.</p><p>Now that we understand how Git works, let’s get into the meaty stuff: how to leverage what we know in our projects.</p><h3 id="merge">Merge</h3><p>Merge <em>merges</em> your code.</p><p>Remember how we were following good Git practices, having branches for various features we were working on, and not everything on <code>master</code>? There will come a time when you are done with that feature, and will want to include that in your <code>master</code>. This is where <code>merge</code> comes in. You want to <strong>merge</strong> your branch into master.</p><p>There are 2 kinds of merges:</p><h4 id="fast-forward-merge">Fast forward merge</h4><p>Coming back to our example from last time:</p><p>This is as simple as moving the label for <code>master</code> to <code>the-ending</code>. Git has no doubt about exactly what needs to be done — since our “tree” had one single linked list of nodes.</p><pre><code>$ git branch
master
* the-ending
$ git checkout master
Switched to branch 'master'
$ git merge the-ending
Updating a39b9fd..b300387
Fast-forward
byeworld | 1 +
1 file changed, 1 insertion(+)
Switched to a new branch 'the-middle'</code></pre><p>In continuing our style, let’s learn via an example. I modify <code>helloworld</code> on branch <code>the-middle</code>.</p><pre><code>$ git diff
diff --git a/helloworld b/helloworld
index a042389..e702052 100644
--- a/helloworld
+++ b/helloworld
@@ -1 +1,3 @@
hello world!
+
+Middle World</code></pre><p>Add and commit on <code>the-middle</code>.</p><p>Then, I switch to <code>master</code> and modify <code>helloworld</code> on master. I add the following:</p><pre><code>$ git diff --cached
diff --git a/helloworld b/helloworld
index a042389..ac7a733 100644
--- a/helloworld
+++ b/helloworld
@@ -1 +1,3 @@
hello world!
+
+Master World</code></pre><p>Do you see why I had to do <code>git diff --cached</code> here? If not, ask me below!</p><p>Now, it’s time to merge!</p><pre><code>$ git merge the-middle
Auto-merging helloworld
CONFLICT (content): Merge conflict in helloworld
Automatic merge failed; fix conflicts and then commit the result.</code></pre><p>When a <code>merge</code> fails, here’s what git does: It modifies the file with the merge to show you exactly what it can’t decide about.</p><pre><code>$ cat helloworld hello world!</code></pre><pre><code>$ cat helloworld
hello world!
&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
Master World
=======
Middle World
&gt;&gt;&gt;&gt;&gt;&gt;&gt; the-middle</code></pre><p>Does this make sense? The <code>&lt;&lt;&lt;&lt;&lt; HEAD</code> part is ours (the base branch) and the <code>&gt;&gt;&gt;&gt;&gt; the-middle part</code> is <code>theirs</code> (the branch merging into the base branch).</p><p>You can simply edit the file to remove the extra stuff added by git, and choose what should go into <code>helloworld</code> finally. There are some tools and editor integrations to make this easier, but I think knowing how it works underneath the hood gives you more confidence when you don’t have your favourite editor lying around.</p><pre><code>$ git status
On branch master
You have unmerged paths.
(fix conflicts and run "git commit")
(use "git merge --abort" to abort the merge)
Unmerged paths:
(use "git add &lt;file&gt;..." to mark resolution)
both modified:   helloworld</code></pre><p>I decided to keep both bits.</p><pre><code>$ cat helloworld
hello world!
Master World
Middle World</code></pre><p>And there you have it:</p><pre><code>$ git add helloworld
$ git commit -m "resolve merge conflict"
[master c747e68] resolve merge conflict</code></pre><h3 id="remotes">Remotes</h3><p>Since one power of version source control is to save your code in case of disasters — remotes are here to help. A remote is an externally-hosted copy of your git repository. To be more accurate, a remote is an external repository (not necessarily of the same code you have). By external, it could be in a different folder on your system or in the cloud.</p><h4 id="clone">Clone</h4><p>Clone <em>clones</em> the repository from remote into your current working directory. This is simply creating a copy of the <code>.git/</code> folder, which gives us the entire history and the files needed to populate the working directory.</p><pre><code>git clone &lt;repository-url&gt;</code></pre><p>If you haven’t cloned, you probably don’t have a remote. You can create a remote like this:</p><pre><code>git remote add &lt;name&gt; &lt;url&gt;</code></pre><h3 id="push-and-pull">Push and Pull</h3><p>Push and Pull are actions applied on the <code>remote</code>.</p><p>Push <em>pushes</em> your changes to the remote. So, we are sending the <code>Index</code> and corresponding <code>Objects</code> from the object-store!</p><pre><code>git push &lt;name of remote&gt; &lt;name of branch&gt;</code></pre><p>Pull <em>pulls</em> the code from the remote. Exactly as before, we are copying the <code>Index</code> and corresponding <code>Objects</code> from the object-store!</p><pre><code>git pull origin master</code></pre><p><code>origin</code> is the default name of the remote. And since <code>master</code> is the default branch, you can see how the command devolves into the simple name we find everywhere: <code>git pull origin master</code>. Now you know better.</p><h3 id="reset">Reset</h3><p>Reset <em>resets</em> your codebase to a previous version. Reset comes with 3 flags:</p><p><code>--soft</code>, <code>--hard</code> and <code>--mixed</code>.</p><p>The beauty of <code>reset</code>, is being able to change history. Say you make a mistake with a <code>commit</code>, and now your <code>git log</code> is all messed up with commits like:</p><p><code>Bugfix</code></p><p><code>Final BugFix</code></p><p><code>Final Final BugFix</code></p><p><code>God why isn't this working last try bug fix</code></p><p>If you want to keep your <code>master</code> history clean, you want to clean up this commit log.</p><p>If you’re sending in a Pull Request where there’s no squashing, they’d expect a clean commit history too!</p><p>That’s where <code>reset</code> comes in: You could <code>reset</code> all your commits and convert them into one single commit: <code>got sh*t done!</code></p><p>(Please don’t use this as your commit message — follow the best practices!)</p><p>Coming back to our example, here’s what I’ve done.</p><pre><code>$ git log
commit 959781ec78c970d4797c5e938ec154de44d0151b (HEAD -&gt; master)
Author: Neil Kakkar
Date:   Mon Nov 5 07:32:55 2018 +0000
God why isn't this working last final BugFix
commit affa90c0db78999d22c326fdbd6c1d5057228822
Author: Neil Kakkar
Date:   Mon Nov 5 07:32:19 2018 +0000
Final Final BugFix
commit 2e9570cffc0a8206132d75c402d68351eda450bd
Author: Neil Kakkar
Date:   Mon Nov 5 07:31:49 2018 +0000
Final BugFix
commit 4560fc0ec6305d0b7bcfb4be1901438fd126d6d1
Author: Neil Kakkar
Date:   Mon Nov 5 07:31:21 2018 +0000
BugFix
commit c747e6891af419119fd817dc69a2e122084aedae
Merge: 3d01508 fb8b2fc
Author: Neil Kakkar
Date:   Tue Oct 23 07:44:09 2018 +0100
resolve merge conflict</code></pre><p>Now that the bug is fixed, I want to clean up my history before I push to <code>master</code>. This would work well too — when, say, I realise later on that I introduced another bug and need to revert to the previous version. In this case, <code>c747e689</code> doesn’t have the best commit message to understand this.</p><pre><code>$ git reset c747e6891af419119fd817dc69a2e122084aedae
$ git log
commit c747e6891af419119fd817dc69a2e122084aedae (HEAD -&gt; master)
Merge: 3d01508 fb8b2fc
Author: Neil Kakkar
Date:   Tue Oct 23 07:44:09 2018 +0100
resolve merge conflict</code></pre><p>There, all sorted?</p><pre><code>$ git status
On branch master
Untracked files:
(use "git add &lt;file&gt;..." to include in what will be committed)
clean.txt
nothing added to commit but untracked files present (use "git add" to track)</code></pre><p><code>clean.txt</code> is the file I had committed for the bug fix. Now, all I have to do is:</p><pre><code>$ git add clean.txt
$ git commit -m "fix bug: Unable to clean folder"
[master d8487ca] fix bug: Unable to clean folder
1 file changed, 4 insertions(+)
create mode 100644 clean.txt
$ git log
commit d8487ca8b9acfa9666bdf2c6b7fa27b3971bd957 (HEAD -&gt; master)
Author: Neil Kakkar
Date:   Mon Nov 5 07:41:41 2018 +0000
fix bug: Unable to clean folder
commit c747e6891af419119fd817dc69a2e122084aedae
Merge: 3d01508 fb8b2fc
Author: Neil Kakkar
Date:   Tue Oct 23 07:44:09 2018 +0100
resolve merge conflict</code></pre><p>There, done and dusted. Can you guess now, using the clues from the <code>log</code>, the <code>reset</code> command syntax and your tech-sense to figure out how it works behind the scenes?</p><p><code>Reset</code> cuts off the commit-tree at the specified commit. All labels for that branch — if ahead — are moved back to the specified commit. Do the existing files stay in the object store though? You know how to check that now, Ace.</p><p>The files are also removed from the staging area. Now this might be a problem if you have lots of untracked/modified files which you don’t want to add.</p><p>How do you do that?</p><p>Can you pick up the clue I left in the beginning of this section?</p><p>Behaviour flags!</p><p><code>--soft</code> keeps all files staged.</p><pre><code>$ git reset --soft c747e6891af419119fd817dc69a2e122084aedae
$ git status
On branch master
Changes to be committed:
(use "git reset HEAD &lt;file&gt;..." to unstage)
new file:   clean.txt</code></pre><p><code>--mixed</code> is the default: Removes all files from staging area too.</p><p><code>--hard</code> is hard-core. Deletes files from the object store — and directory as well. Use with extreme caution. There goes my bug fix*. Gone.</p><pre><code>$ git reset --hard c747e6891af419119fd817dc69a2e122084aedae
HEAD is now at c747e68 resolve merge conflict
$ git status
On branch master
nothing to commit, working tree clean</code></pre><p>*Well, not completely. Git is amazing. Have you heard of meta-meta data? A redundancy log of what happened in the repository? Yes, of course git keeps it!</p><pre><code>$ git reflog
c747e68 (HEAD -&gt; master) HEAD@{0}: reset: moving to c747e6891af419119fd817dc69a2e122084aedae
efc6d21 HEAD@{1}: commit: soft reset
c747e68 (HEAD -&gt; master) HEAD@{2}: reset: moving to c747e6891af419119fd817dc69a2e122084aedae
d8487ca HEAD@{3}: commit: fix bug: Unable to clean folder
c747e68 (HEAD -&gt; master) HEAD@{4}: reset: moving to c747e6891af419119fd817dc69a2e122084aedae
959781e HEAD@{5}: commit: God why isn't this working last final BugFix
affa90c HEAD@{6}: commit: Final Final BugFix
2e9570c HEAD@{7}: commit: Final BugFix
4560fc0 HEAD@{8}: commit: BugFix
c747e68 (HEAD -&gt; master) HEAD@{9}: commit (merge): resolve merge conflict
3d01508 HEAD@{10}: commit: add Master World
b300387 (the-ending) HEAD@{11}: checkout: moving from the-middle to master
fb8b2fc (the-middle) HEAD@{12}: commit: add Middle World
b300387 (the-ending) HEAD@{13}: checkout: moving from master to the-middle
b300387 (the-ending) HEAD@{14}: checkout: moving from the-middle to master
b300387 (the-ending) HEAD@{15}: checkout: moving from master to the-middle
b300387 (the-ending) HEAD@{16}: merge the-ending: Fast-forward
a39b9fd HEAD@{17}: checkout: moving from the-ending to master
b300387 (the-ending) HEAD@{18}: checkout: moving from master to the-ending
a39b9fd HEAD@{19}: checkout: moving from the-ending to master
b300387 (the-ending) HEAD@{20}: commit: add byeworld
a39b9fd HEAD@{21}: checkout: moving from master to the-ending
a39b9fd HEAD@{22}: commit (initial): Add helloworld</code></pre><p>This is everything from the beginning of the example in the previous article. Does this mean I can recover things if I made an awful mistake?</p><pre><code>$ git checkout d8487ca
Note: checking out 'd8487ca'.
You are in 'detached HEAD' state. You can look around, make experimental
state without impacting any branches by performing another checkout.
If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -b with the checkout command again. Example:
git checkout -b &lt;new-branch-name&gt;
HEAD is now at d8487ca... fix bug: Unable to clean folder
$ ls
byeworld clean.txt  helloworld</code></pre><p>There you have it.</p><p>Congratulations, you’re a Git Ninja — Apprentice now.</p><p>Is there something more you’d like to know about? Something that confused you about Git? Let me know below! I’ll try explaining it the way I learnt it!</p><p>Enjoyed this? <a href="http://neilkakkar.com/subscribe/" rel="noopener">Don’t miss a post again — subscribe to my mailing list!</a></p>
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
