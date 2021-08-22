---
card: "https://cdn-media-1.freecodecamp.org/images/1*LmBD9OaRAJPnBYBoZwyZMw.jpeg"
tags: [Git]
description: "As developers, we know Git very well, as it is a very importa"
author: "Milad E. Fahmy"
title: "An intro to Git Aliases: a faster way of working with Git"
created: "2021-08-16T11:34:04+02:00"
modified: "2021-08-16T11:34:04+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-git tag-programming tag-software-development tag-technology tag-linux ">
<header class="post-full-header">
<h1 class="post-full-title">An intro to Git Aliases: a faster way of working with Git</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*LmBD9OaRAJPnBYBoZwyZMw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*LmBD9OaRAJPnBYBoZwyZMw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*LmBD9OaRAJPnBYBoZwyZMw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*LmBD9OaRAJPnBYBoZwyZMw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*LmBD9OaRAJPnBYBoZwyZMw.jpeg" alt="An intro to Git Aliases: a faster way of working with Git">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
command1
command2
.......
commandn
}</code></pre><p><em>Now let’s try this. This function will create a directory in the current path and then immediately move into that directory. We know the below commands already to make it happen:</em></p><p><em><code>mkdir &lt;directory_name&gt;</code></em><br><em><code>cd &lt;directory_name&gt;</code></em></p><p><em>We can compress those two commands by creating a simple function in <strong><em>bash_profile</em></strong> like below:</em></p><p><em><code>function mdm() {</code></em><br><em><code> &nbsp; mkdir -p $1 &nbsp; #here $1 is the first parameter to the function.</code></em><br><em><code> &nbsp; cd $1</code></em><br><em><code>}</code></em></p><p><em>Now reload the <strong><em>bash_profile</em></strong> source once and run the following:</em></p><p><em><code>mdm test</code></em></p><p><em>It will create a directory named <strong>test</strong> in the current path and move to that directory. Cool!!?</em></p><h4 id="advanced-git-aliases"><em>Advanced Git Aliases</em></h4><p><em>To push the code in the remote branch, we need to make a commit with some message. Only then we can push to a branch. So basically this is a combination of two commands (commit and push). But we want to try the same with a single one-line command by writing a shell function for this. ?</em></p><p><em>We can easily do this by writing a simple shell function. Open <strong><em>bash_profile</em></strong> and write the following the function:</em></p><p><em><code>function gcp() {</code></em><br><em><code> &nbsp; &nbsp; &nbsp;git commit -am "$1" &amp;&amp; git push </code></em><br><em><code>}</code></em></p><p><em>Reload the <strong><em>bash_profile</em></strong> once and use the command like below:</em></p><p><em><code>gcp "initial commit"</code></em></p><p><em>Cool!! From now we can use this <strong>gcp</strong> command to commit and push in one shot.?</em></p><p><em>In a development or feature branch, all the team members push their changes almost every day. So sometimes it is very difficult to find a particular commit among all the commits.</em></p><p><em>To easily handle this type of situation, we can write a function which will search the commit logs for a particular message and return the commit.</em></p><p><em>To do this, we will write a function like below:</em></p><p><em><code>function gfc() {</code></em><br><em><code> &nbsp; &nbsp; &nbsp; &nbsp; git log --all --grep="$1"</code></em><br><em><code>}</code></em></p><p><em>Occasionally if we want to search for a commit by the commit message, then we can do it by using <code>gfc</code>:</em></p><p><em><code>gfc "&lt;commit message&gt;"</code></em></p><h4 id="conclusion-"><em>Conclusion:</em></h4><p><em>So we have learned how to use shortcuts for git commands.</em></p><p><em>May these aliases and functions save you from writing those long git commands and make your life easy and smooth. You can add your own aliases, functions and make modifications to them — no one’s permission is required except <strong><em>bash</em></strong>.???</em></p><p><em><strong><em>??? Cheers!!! Thank you for reading!! ???</em></strong></em></p>
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
