---
card: "https://cdn-media-1.freecodecamp.org/images/1*g371eUJhibe4hBdgycD8Cw.jpeg"
tags: [Nodejs]
description: "by Will Abramson"
author: "Milad E. Fahmy"
title: "Lessons learned from deploying my first full-stack web application"
created: "2021-08-16T10:15:34+02:00"
modified: "2021-08-16T10:15:34+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nodejs tag-web-development tag-learning tag-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Lessons learned from deploying my first full-stack web application</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*g371eUJhibe4hBdgycD8Cw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*g371eUJhibe4hBdgycD8Cw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*g371eUJhibe4hBdgycD8Cw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*g371eUJhibe4hBdgycD8Cw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*g371eUJhibe4hBdgycD8Cw.jpeg" alt="Lessons learned from deploying my first full-stack web application">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
uri: ‘http://0.0.0.0:5000/graphql',
});</code></pre><p>Mine looked like this, which clearly was not going to be correct for my production server.</p><p>Annoyingly this made my application seem like it worked when I first navigated to it on my local machine, as my local server was running and able to return the required information.</p><p>To fix this, you can simply change the URI defined, but that means having to change it back every time you do further development, which is <strong>not</strong> the best approach (I know because I did it).</p><p>A more sophisticated solution is to include both URIs and use environment variables to select the appropriate one.</p><pre><code class="language-js">const networkInterface = createNetworkInterface({
uri: process.env.NODE_ENV === 'production' ?
'http://thecommunitymind.com/graphql' :
'http://0.0.0.0:5000/graphql',
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
