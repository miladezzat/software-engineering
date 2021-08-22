---
card: "https://cdn-media-1.freecodecamp.org/images/0*tJq8RS_Uv3R9s56E"
tags: [Git]
description: "I made a mistake in my commit, how do I fix it ?"
author: "Milad E. Fahmy"
title: "How to become a Git expert"
created: "2021-08-16T11:36:49+02:00"
modified: "2021-08-16T11:36:49+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-git tag-coding tag-technology tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to become a Git expert</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*tJq8RS_Uv3R9s56E 300w,
https://cdn-media-1.freecodecamp.org/images/0*tJq8RS_Uv3R9s56E 600w,
https://cdn-media-1.freecodecamp.org/images/0*tJq8RS_Uv3R9s56E 1000w,
https://cdn-media-1.freecodecamp.org/images/0*tJq8RS_Uv3R9s56E 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*tJq8RS_Uv3R9s56E" alt="How to become a Git expert">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
git rebase --continue</code></pre><h4 id="step-3"><strong>Step 3</strong></h4><ol><li>Once Fcommit1 is added, Git will try to add Fcommit2.</li><li>Again, if there is no conflict Fcommit2 is added after Fcommit1 and the rebase is successful.</li><li>If there is a conflict, Git will notify you, and you will have to resolve it manually. Use the same commands mentioned in Step 2 after resolving conflicts</li><li>After the entire rebase is done, you will notice that the Feature branch has Rcommit1, Rcommit2, Rcommit3 , Fcommit1, and Fcommit2.</li></ol><h4 id="points-to-note">Points to note</h4><ol><li>Both Rebase and Merge are useful in Git. One is not better than the other.</li><li>In the case of a merge you will have a merge commit. In the case of a rebase there is no extra commit like a merge commit.</li><li>One best practise is to use the commands at different points. Use rebase when you are updating your local code repository with the latest code from the remote repository. Use merge when you are dealing with pull requests to merge the Feature branch back with the Release or Master branch.</li><li>Using Rebase alters the commit history ( it makes it neater) . But that being said, altering the commit history has it’s risks. So ensure you never use rebase on a code that is there in the remote repository. Always use rebase only to alter the commit history of your local repo code.</li><li>If rebase is done to a remote repository it can create a lot of confusion since other developers will not recognise the new history.</li><li>Also if rebase is done on the remote repository, it can create issues when other developers try to pull the latest code from remote repository. So I repeat again, always use rebase only for the local repository ?</li></ol><h3 id="congrats">Congrats ?</h3><p>You are now a Git expert ?</p><p>In this post you have learnt about:</p><ul><li>amending commits</li><li>rebase</li></ul><p>Both of these are very useful concepts. Go explore the world of Git to learn even more.</p><h3 id="about-the-author">About the author</h3><p>I love technology and follow the advancements in the field. I also like helping others with my technology knowledge.</p><p>Feel free to connect with me on my LinkedIn account <a href="https://www.linkedin.com/in/aditya1811/" rel="noopener">https://www.linkedin.com/in/aditya1811/</a></p><p>You can also follow me on twitter <a href="https://twitter.com/adityasridhar18" rel="noopener">https://twitter.com/adityasridhar18</a></p><p>My Website: <a href="https://adityasridhar.com/" rel="noopener">https://adityasridhar.com/</a></p><h3 id="other-posts-by-me">Other Posts by Me</h3><p><a href="https://adityasridhar.com/posts/how-you-can-go-wrong-with-git" rel="noopener">Best Practises while using Git</a></p><p><a href="https://medium.freecodecamp.org/what-is-git-and-how-to-use-it-c341b049ae61" rel="noopener">An introduction to Git</a></p><p><a href="https://medium.freecodecamp.org/how-to-use-git-efficiently-54320a236369" rel="noopener">How to use Git efficiently</a></p>
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
