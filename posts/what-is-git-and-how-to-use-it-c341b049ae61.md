---
card: "https://cdn-media-1.freecodecamp.org/images/0*LU7AdfUTUviVY8DP"
tags: [Git]
description: "Git is an Open Source Distributed Version Control System. Now"
author: "Milad E. Fahmy"
title: "An introduction to Git: what it is, and how to use it"
created: "2021-08-16T11:39:01+02:00"
modified: "2021-08-16T11:39:01+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-git tag-github tag-programming tag-productivity tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">An introduction to Git: what it is, and how to use it</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*LU7AdfUTUviVY8DP 300w,
https://cdn-media-1.freecodecamp.org/images/0*LU7AdfUTUviVY8DP 600w,
https://cdn-media-1.freecodecamp.org/images/0*LU7AdfUTUviVY8DP 1000w,
https://cdn-media-1.freecodecamp.org/images/0*LU7AdfUTUviVY8DP 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*LU7AdfUTUviVY8DP" alt="An introduction to Git: what it is, and how to use it">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Git is an <strong>Open Source Distributed Version Control System</strong>. Now that’s a lot of words to define Git.</p><p>Let me break it down and explain the wording:</p><ul><li><strong>Control System:</strong> This basically means that Git is a content tracker. So Git can be used to store content — it is mostly used to store code due to the other features it provides.</li><li><strong>Version Control System</strong>: The code which is stored in Git keeps changing as more code is added. Also, many developers can add code in parallel. So Version Control System helps in handling this by maintaining a history of what changes have happened. Also, Git provides features like branches and merges, which I will be covering later.</li><li><strong>Distributed Version Control System</strong>: Git has a remote repository which is stored in a server and a local repository which is stored in the computer of each developer. This means that the code is not just stored in a central server, but the full copy of the code is present in all the developers’ computers. Git is a Distributed Version Control System since the code is present in every developer’s computer. I will explain the concept of remote and local repositories later in this article.</li></ul><h3 id="why-a-version-control-system-like-git-is-needed">Why a Version Control System like Git is needed</h3><p>Real life projects generally have multiple developers working in parallel. So a version control system like Git is needed to ensure there are no code conflicts between the developers.</p><p>Additionally, the requirements in such projects change often. So a version control system allows developers to revert and go back to an older version of the code.</p><p>Finally, sometimes several projects which are being run in parallel involve the same codebase. In such a case, the concept of branching in Git is very important.</p><h3 id="let-s-get-started-on-using-git-now">Let’s get started on using Git now</h3><p>Rather than mentioning all the concepts at once, I will explain the concepts of Git through an example so that it is easier to follow.</p><h4 id="download-git">Download git</h4><p>This link has details on how to install Git in multiple operating systems:<br><a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" rel="noopener">https://git-scm.com/book/en/v2/Getting-Started-Installing-Git</a></p><p>Verify if Git is installed by using the following command in the command prompt:</p><pre><code class="language-bash">git --version</code></pre><h4 id="create-your-local-git-repository">Create your local Git repository</h4><p>In your computer, create a folder for your project. Let’s call the project folder <code>simple-git-demo</code>.</p><p>Go into your project folder and add a local Git repository to the project using the following commands:</p><pre><code class="language-bash">cd simple-git-demo
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
