---
card: "/images/default.jpg"
tags: [Git]
description: "Say you are a developer, and you use Git for one of your proj"
author: "Milad E. Fahmy"
title: "A Beginner’s Guide to Git — What is a Changelog and How to Generate it"
created: "2021-08-16T11:27:52+02:00"
modified: "2021-08-16T11:27:52+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-git tag-programming tag-technology tag-productivity tag-software-development ">
<header class="post-full-header">
<h1 class="post-full-title">A Beginner’s Guide to Git — What is a Changelog and How to Generate it</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/04/what-is-a-changelog-and-how-to-generate-it.png 300w,
/news/content/images/size/w600/2020/04/what-is-a-changelog-and-how-to-generate-it.png 600w,
/news/content/images/size/w1000/2020/04/what-is-a-changelog-and-how-to-generate-it.png 1000w,
/news/content/images/size/w2000/2020/04/what-is-a-changelog-and-how-to-generate-it.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/04/what-is-a-changelog-and-how-to-generate-it.png" alt="A Beginner’s Guide to Git — What is a Changelog and How to Generate it">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
// Output
commit f6986f8e52c1f889c8649ec75c5abac003102999 (HEAD -&gt; master, origin/master, origin/HEAD)
Author: Sam Katakouzinos &lt;sam.katakouzinos@gmail.com&gt;
Date:   Tue Mar 10 11:41:18 2020 +1100
docs(developers): commit message format typo
Any line of the commit message cannot be longer *than* 100 characters!
Closes #17006
commit ff963de73ab8913bce27a1e75ac01f53e8ece1d9
Author: Chives &lt;chivesrs@gmail.com&gt;
Date:   Thu Feb 6 19:05:57 2020 -0500
docs($aria): get the docs working for the service
Closes #16945
commit 2b28c540ad7ebf4a9c3a6f108a9cb5b673d3712d
Author: comet &lt;hjung524@gmail.com&gt;
Date:   Mon Jan 27 19:49:55 2020 -0600
docs(*): fix spelling errors
Closes #16942</code></pre><p>This command can take a few parameters. We are going to use them to change the output and get an improved one to generate our changelog.</p><p>By typing the following command, you will have an output with one commit per line.</p><pre><code>$ git log --oneline --decorate
// Output
f6986f8e5 (HEAD -&gt; master, origin/master, origin/HEAD) docs(developers): commit message format typo
ff963de73 docs($aria): get the docs working for the service
2b28c540a docs(*): fix spelling errors
68701efb9 chore(*): fix serving of URI-encoded files on code.angularjs.org
c8a6e8450 chore(package): fix scripts for latest Node 10.x on Windows
0cd592f49 docs(angular.errorHandlingConfig): fix typo (wether --&gt; whether)
a4daf1f76 docs(angular.copy): fix `getter`/`setter` formatting
be6a6d80e chore(*): update copyright year to 2020
36f17c926 docs: add mention to changelog
ff5f782b2 docs: add mention to changelog
27460db1d docs: release notes for 1.7.9
add78e620 fix(angular.merge): do not merge __proto__ property</code></pre><p>It’s better, but let’s see what we can do with the following one.</p><pre><code>$ git log --pretty=”%s”
// Output
docs(developers): commit message format typo
docs($aria): get the docs working for the service
docs(*): fix spelling errors
chore(*): fix serving of URI-encoded files on code.angularjs.org
chore(package): fix scripts for latest Node 10.x on Windows
docs(angular.errorHandlingConfig): fix typo (wether --&gt; whether)
docs(angular.copy): fix `getter`/`setter` formatting
chore(*): update copyright year to 2020
docs: add mention to changelog
docs: add mention to changelog
docs: release notes for 1.7.9
fix(angular.merge): do not merge __proto__ property</code></pre><p>With this one, you can print the list of commits with the style you want.</p><p>The “%s” corresponds to the commit title itself. You can modify the string to style your commit as you like.</p><p>In our case, we want to create a list.</p><pre><code>$ git log --pretty="- %s"
// Output
- docs(developers): commit message format typo
- docs($aria): get the docs working for the service
- docs(*): fix spelling errors
- chore(*): fix serving of URI-encoded files on code.angularjs.org
- chore(package): fix scripts for latest Node 10.x on Windows
- docs(angular.errorHandlingConfig): fix typo (wether --&gt; whether)
- docs(angular.copy): fix `getter`/`setter` formatting
- chore(*): update copyright year to 2020
- docs: add mention to changelog
- docs: add mention to changelog
- docs: release notes for 1.7.9
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
