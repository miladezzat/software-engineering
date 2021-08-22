---
card: "https://cdn-media-1.freecodecamp.org/images/1*0n0NX3rgHf2bzldy1uvmiQ.jpeg"
tags: [JavaScript]
description: by Santhosh Reddy
author: "Milad E. Fahmy"
title: "How to work with unpublished Node dependencies"
created: "2021-08-15T19:37:57+02:00"
modified: "2021-08-15T19:37:57+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-npm tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to work with unpublished Node dependencies</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*0n0NX3rgHf2bzldy1uvmiQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*0n0NX3rgHf2bzldy1uvmiQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*0n0NX3rgHf2bzldy1uvmiQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*0n0NX3rgHf2bzldy1uvmiQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*0n0NX3rgHf2bzldy1uvmiQ.jpeg" alt="How to work with unpublished Node dependencies">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Santhosh Reddy</p>
<h1 id="how-to-work-with-unpublished-node-dependencies">How to work with unpublished Node dependencies</h1>
<figcaption>Photo by <a href="https://unsplash.com/photos/PDxYfXVlK2M?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">JJ Ying</a> on <a href="https://unsplash.com/search/photos/link?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>If you are a Node.js developer, you have definitely ended up in a situation where you want to use an unfinished feature from another Node dependency.</p>
<p>Let’s elaborate on this a bit. For example, your entire project is broken logically into 4 npm modules. One module, which is the main one, depends on the other 3 modules. With this setup, you might have to change the code in sub-modules and check if it works well with your main Node module.</p>
<p>The simplest way is to publish the modules to npm. Use the new versions in your main node module. Well, the downside with this approach is if you have made a mistake in your submodules, you have to re-publish and use them accordingly. But, things don’t stop there. You will have to repeat this until your main node module is stable. A headache. Right? I know.</p>
<p>So, how do we get around this problem?</p>
<h4 id="using-npm-link">Using npm link</h4>
<p>With this approach, you can work with any Node dependencies if they are checked out at some location in your local machine. All you have to do is run the below command in the root folder of the package, which is a dependency for your main node module.</p>
<p>So what does this do? If you have worked on Node-based projects, you know there is a <strong>node_modules</strong> folder which has your installed dependencies. Similarly, there is a global folder for the dependencies. The above command creates a symbolic link for the package in which this command is run. You have to run this command again in the package where you want to use the dependency code with the name in <code>package.json</code>.</p>
<p>With this, any changes you make to your dependency Node module can be used directly without having to re-install. The above 2 steps can be made short with the below command.</p><pre><code>npm link &lt;relative-path-to-the-dependency&gt;</code></pre>
<h4 id="getting-the-source-from-github">Getting the source from github</h4>
<p>Now, let’s discuss another use case where you are not the one working on your dependency, but a colleague of yours. And they don’t want to publish the code until they make sure the feature is complete to some extent.</p>
<p>But you need this person’s code to test any early stage integration issues. I am assuming you both use the Git version control system for managing your code. You can get the changes your colleague has pushed to git with the link to the repository code as below in your file.</p>
<p>package.json</p><pre><code>'package-name': git@github.com:&lt;repository-name&gt;.git#&lt;branch-name&gt;</code></pre>
<p>Once you’ve placed the above path in <code>package.json</code> file, you need to run a clean <code>npm install</code> to get the latest code from git.</p>
<p>Hope you enjoyed the article. If you liked it, please do clap and share with others.</p>
<p>Comment down below if you’ve another way of working with Node dependencies.</p>
<p><em>Originally published at <a href="http://humbleposts.com/working-with-unpublished-node-dependencies" rel="noopener">humbleposts.com</a>.</em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
