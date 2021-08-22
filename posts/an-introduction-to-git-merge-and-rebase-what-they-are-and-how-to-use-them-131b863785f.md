---
card: "https://cdn-media-1.freecodecamp.org/images/1*9LlKBmfWia1Uou0ubjWkzg.jpeg"
tags: [Git]
description: by Vali Shah
author: "Milad E. Fahmy"
title: "An introduction to Git merge and rebase: what they are, and how to use them"
created: "2021-08-15T19:40:22+02:00"
modified: "2021-08-15T19:40:22+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-git tag-programming tag-javascript tag-software-development tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">An introduction to Git merge and rebase: what they are, and how to use them</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*9LlKBmfWia1Uou0ubjWkzg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*9LlKBmfWia1Uou0ubjWkzg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*9LlKBmfWia1Uou0ubjWkzg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*9LlKBmfWia1Uou0ubjWkzg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*9LlKBmfWia1Uou0ubjWkzg.jpeg" alt="An introduction to Git merge and rebase: what they are, and how to use them">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Vali Shah</p>
<h1 id="an-introduction-to-git-merge-and-git-rebase-what-they-do-and-when-to-use-them">An Introduction to Git Merge and Git Rebase: What They Do and When to Use Them</h1>
<p>As a Developer, many of us have to choose between Merge and Rebase. With all the references we get from the internet, everyone believes “Don’t use Rebase, it could cause serious problems.” Here I will explain what merge and rebase are, why you should (and shouldn’t) use them, and how to do so.</p>
<p>Git Merge and Git Rebase serve the same purpose. They are designed to integrate changes from multiple branches into one. Although the final goal is the same, those two methods achieve it in different ways, and it's helpful to know the difference as you become a <a href="https://www.microverse.org" rel="noopener">better software developer.</a></p>
<p>This question has split the Git community. Some believe you should always rebase and others that you should always merge. Each side has some convincing benefits.</p>
<h3 id="git-merge">Git Merge</h3>
<p>Merging is a common practice for developers using version control systems. Whether branches are created for testing, bug fixes, or other reasons, merging commits changes to another location. To be more specific, merging takes the contents of a source branch and integrates them with a target branch. In this process, only the target branch is changed. The source branch history remains the same.</p>
<figcaption>Merge Master -&gt; Feature branch</figcaption>
</figure>
<h4 id="pros"><strong>Pros</strong></h4>
<ul>
<li>Simple and familiar</li>
<li>Preserves complete history and chronological order</li>
<li>Maintains the context of the branch</li>
</ul>
<h4 id="cons"><strong>Cons</strong></h4>
<ul>
<li>Commit history can become polluted by lots of merge commits</li>
<li>Debugging using <code>git bisect</code> can become harder</li>
</ul>
<h4 id="how-to-do-it"><strong>How to do it</strong></h4>
<p>Merge the master branch into the feature branch using the <code>checkout</code> and <code>merge</code> commands.</p><pre><code class="language-bash">$ git checkout feature
$ git merge master
(or)
$ git merge master feature</code></pre>
<p>This will create a new “<strong>Merge commit</strong>” in the feature branch that holds the history of both branches.</p>
<h3 id="git-rebase">Git Rebase</h3>
<p>Rebase is another way to integrate changes from one branch to another. Rebase compresses all the changes into a single “patch.” Then it integrates the patch onto the target branch.</p>
<p>Unlike merging, rebasing flattens the history because it transfers the completed work from one branch to another. In the process, unwanted history is eliminated.</p>
<blockquote><em>Rebases are how changes should pass from the top of the hierarchy downwards, and merges are how they flow back upwards</em></blockquote>
<figcaption>Rebase feature branch into master</figcaption>
</figure>
<h4 id="pros-1"><strong>Pros</strong></h4>
<ul>
<li>Streamlines a potentially complex history</li>
<li>Manipulating a single commit is easy (e.g. reverting them)</li>
<li>Avoids merge commit “noise” in busy repos with busy branches</li>
<li>Cleans intermediate commits by making them a single commit, which can be helpful for DevOps teams</li>
</ul>
<h4 id="cons-1"><strong>Cons</strong></h4>
<ul>
<li>Squashing the feature down to a handful of commits can hide the context</li>
<li>Rebasing public repositories can be dangerous when working as a team</li>
<li>It’s more work: Using rebase to keep your feature branch updated always</li>
<li>Rebasing with remote branches requires you to <em>force push. </em>The biggest problem people face is they force push but haven’t set git push default. This results in updates to all branches having the same name, both locally and remotely, and that is <strong>dreadful </strong>to deal with.</li>
</ul>
<blockquote><em>If you rebase incorrectly and unintentionally rewrite the history, it can lead to serious issues, so make sure you know what you are doing!</em></blockquote>
<h4 id="how-to-do-it-1"><strong>How to do it</strong></h4>
<p>Rebase the feature branch onto the master branch using the following commands.</p><pre><code>$ git checkout feature
$ git rebase master</code></pre>
<p>This moves the entire feature branch on top of the master branch. It does this by re-writing the project history by creating brand new commits for each commit in the original (feature) branch.</p>
<h4 id="interactive-rebasing"><strong>Interactive Rebasing</strong></h4>
<p>This allows altering the commits as they are moved to the new branch. This is more powerful than automated rebase, as it offers complete control over the branch’s commit history. Typically this is used to clean up a messy history before merging a feature branch into master.</p><pre><code>$ git checkout feature
$ git rebase -i master</code></pre>
<p>This will open the editor by listing all the commits that are about to be moved.</p><pre><code class="language-bash">pick 22d6d7c Commit message#1
pick 44e8a9b Commit message#2
pick 79f1d2h Commit message#3</code></pre>
<p>This defines exactly what the branch will look like after the rebase is performed. By re-ordering the entities, you can make the history look like whatever you want. For example, you can use commands like <code>fixup</code>, <code>squash</code>, <code>edit</code> etc, in place of <code>pick</code>.</p>
<h3 id="which-one-to-use">Which one to use</h3>
<p>So what’s best? What do the experts recommend?</p>
<p>It’s hard to generalize and decide on one or the other, since every team is different. But we have to start somewhere.</p>
<p>Teams need to consider several questions when setting their Git rebase vs. merge policies. Because as it turns out, one workflow strategy is not better than the other. It is dependent on your team.</p>
<p>Consider the level of rebasing and Git competence across your organization. Determine the degree to which you value the simplicity of rebasing as compared to the traceability and history of merging.</p>
<p>Finally, decisions on merging and rebasing should be considered in the context of a clear branching strategy (<strong>Refer</strong> <a href="https://medium.freecodecamp.org/adopt-a-git-branching-strategy-ac729ff4f838" rel="noopener"><strong>this article</strong></a> to understand more about branching strategy). A successful branching strategy is designed around the organization of your teams.</p>
<h3 id="what-do-i-recommend">What do I recommend?</h3>
<p>As the team grows, it will become hard to manage or trace development changes with an <strong>always merge policy. </strong>To have a clean and understandable commit history, using <strong>Rebase </strong>is reasonable and effective.</p>
<p>By considering the following circumstances and guidelines, you can get best out of <strong>Rebase:</strong></p>
<ul>
<li><strong>You’re developing locally: </strong>If you have not shared your work with anyone else. At this point, you should prefer rebasing over merging to keep your history tidy. If you’ve got your personal fork of the repository and that is not shared with other developers, you’re safe to rebase even after you’ve pushed to your branch.</li>
<li><strong>Your code is ready for review:</strong> You created a pull request. Others are reviewing your work and are potentially fetching it into their fork for local review. At this point, you should not rebase your work. You should create ‘rework’ commits and update your feature branch. This helps with traceability in the pull request and prevents the accidental history breakage.</li>
<li><strong>The review is done and ready to be integrated into the target branch.</strong> Congratulations! You’re about to delete your feature branch. Given that other developers won’t be fetch-merging in these changes from this point on, this is your chance to sanitize your history. At this point, you can rewrite history and fold the original commits and those pesky ‘pr rework’ and ‘merge’ commits into a small set of focused commits. Creating an explicit merge for these commits is optional, but has value. It records when the feature graduated to master.</li>
</ul>
<h3 id="conclusion">Conclusion</h3>
<p>I hope this explanation has given some insights on <strong>Git merge </strong>and <strong>Git rebase. </strong>Merge vs rebase strategy is always debatable. But perhaps this article will help dispel your doubts and allow you to adopt an approach that works for your team.</p>
<p>I’m looking forward to writing on <strong>Git workflows</strong> and concepts of <strong>Git</strong>. Do comment on the topics that you want me to write about next. Cheers!</p>
<p><code><strong>code</strong> = <strong>co</strong>ffee + <strong>de</strong>veloper</code></p>
<p><a href="https://www.microverse.org/" rel="noopener">coding school for software developers</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
