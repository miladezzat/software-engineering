---
card: "/images/default.jpg"
tags: [Lighthouse]
description: "CircleCI is a popular tool for orchestrating CI/CD pipelines."
author: "Milad E. Fahmy"
title: "How to use Lighthouse in CircleCI"
created: "2021-08-16T11:28:04+02:00"
modified: "2021-08-16T11:28:04+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-lighthouse tag-circleci tag-seo tag-website-performance tag-accessibility tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to use Lighthouse in CircleCI</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/01/nyc-building-in-midtown-east.jpg 300w,
/news/content/images/size/w600/2020/01/nyc-building-in-midtown-east.jpg 600w,
/news/content/images/size/w1000/2020/01/nyc-building-in-midtown-east.jpg 1000w,
/news/content/images/size/w2000/2020/01/nyc-building-in-midtown-east.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/01/nyc-building-in-midtown-east.jpg" alt="How to use Lighthouse in CircleCI">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
orbs:
lighthouse-check: foo-software/lighthouse-check@0.0.8
jobs:
test:
executor: lighthouse-check/default
steps:
- lighthouse-check/audit:
urls: https://www.foo.software,https://www.foo.software/contact
workflows:
test:
jobs:
- test
</code></pre>
+ prCommentUrl: https://api.github.com/repos/foo-software/lighthouse-check-orb/pulls/${CIRCLE_PULL_REQUEST##*/}/reviews
urls: https://www.foo.software,https://www.foo.software/contact
</code></pre>
+ awsBucket: $LIGHTHOUSE_CHECK_AWS_BUCKET
+ awsRegion: $LIGHTHOUSE_CHECK_AWS_REGION
+ awsSecretAccessKey: $LIGHTHOUSE_CHECK_AWS_SECRET_ACCESS_KEY
prCommentUrl: https://api.github.com/repos/foo-software/lighthouse-check-orb/pulls/${CIRCLE_PULL_REQUEST##*/}/reviews
</code></pre>
urls: https://www.foo.software,https://www.foo.software/contact
</code></pre>
version: 2.1
orbs:
lighthouse-check: foo-software/lighthouse-check@0.0.8
jobs:
test:
executor: lighthouse-check/default
steps:
- lighthouse-check/audit:
awsAccessKeyId: $LIGHTHOUSE_CHECK_AWS_ACCESS_KEY_ID
awsBucket: $LIGHTHOUSE_CHECK_AWS_BUCKET
awsRegion: $LIGHTHOUSE_CHECK_AWS_REGION
awsSecretAccessKey: $LIGHTHOUSE_CHECK_AWS_SECRET_ACCESS_KEY
prCommentAccessToken: $LIGHTHOUSE_CHECK_GITHUB_ACCESS_TOKEN
prCommentUrl: https://api.github.com/repos/foo-software/lighthouse-check-orb/pulls/${CIRCLE_PULL_REQUEST##*/}/reviews
slackWebhookUrl: $LIGHTHOUSE_CHECK_SLACK_WEBHOOK_URL
urls: https://www.foo.software,https://www.foo.software/contact
workflows:
test:
jobs:
- test
</code></pre>
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
