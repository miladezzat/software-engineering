---
card: "https://cdn-media-1.freecodecamp.org/images/1*ixrHjysR8zRWlp9gBvroYQ.jpeg"
tags: [Programming]
description: "by Carmen Chung"
author: "Milad E. Fahmy"
title: "What I learned during my software engineering internship"
created: "2021-08-16T14:41:02+02:00"
modified: "2021-08-16T14:41:02+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-software-development tag-internships tag-life-lessons tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">What I learned during my software engineering internship</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*ixrHjysR8zRWlp9gBvroYQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*ixrHjysR8zRWlp9gBvroYQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*ixrHjysR8zRWlp9gBvroYQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*ixrHjysR8zRWlp9gBvroYQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*ixrHjysR8zRWlp9gBvroYQ.jpeg" alt="What I learned during my software engineering internship">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
%p
You have invited 1 friend to be part of Valiant Finance.
— if @invite_count &gt; 1
%p
You have invited
%strong #{@invite_count} friends
to be part of Valiant Finance!
- if (@invite_count % 3) == 0 || (@invite_count % 3) == 1
%p
Invite another
%strong #{3 — (@invite_count % 3)} friends
to receive $50!
— if (@invite_count % 3) == 2
%p
Invite another
%strong friend
to receive $50!</code></pre><p>When I showed Ritchie, he told us to look into <a href="https://apidock.com/rails/ActionView/Helpers/TextHelper/pluralize" rel="noopener">pluralize</a>.</p><p>Mind. <br>Blown.</p><p>This was how our code came out afterwards:</p><pre><code>%p You have invited #{@invite_count} #{“friend”.pluralize(@invite_count)} to be part of Valiant Finance.
%p
Invite another
%strong #{3 — (@invite_count % 3)} #{“friend”.pluralize(3 — (@invite_count % 3))}
to receive $50!
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
