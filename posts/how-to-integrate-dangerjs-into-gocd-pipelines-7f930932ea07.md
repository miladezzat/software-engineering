---
card: "https://cdn-media-1.freecodecamp.org/images/1*rOWdHY7akUNLQOGIh5VtoQ.png"
tags: [JavaScript]
description: "by Leonardo Lima"
author: "Milad E. Fahmy"
title: "How to integrate DangerJS into GoCD pipelines"
created: "2021-08-16T10:07:06+02:00"
modified: "2021-08-16T10:07:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-dangerjs tag-continuous-integration tag-web-development tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to integrate DangerJS into GoCD pipelines</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*rOWdHY7akUNLQOGIh5VtoQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*rOWdHY7akUNLQOGIh5VtoQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*rOWdHY7akUNLQOGIh5VtoQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*rOWdHY7akUNLQOGIh5VtoQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*rOWdHY7akUNLQOGIh5VtoQ.png" alt="How to integrate DangerJS into GoCD pipelines">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
echo '— — START DANGER JS VERIFICATION —'
echo Testing against commits on PR: ${GO_SCM_PIPELINE_PR_URL}
DANGER_TEST_PR=${GO_SCM_PIPELINE_PR_ID} npx yarn danger ci
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
