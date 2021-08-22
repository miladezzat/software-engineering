---
card: "https://cdn-media-1.freecodecamp.org/images/1*_qUFovbRz-UBf4GAEwgnlw.jpeg"
tags: [AWS]
description: "It took me the better part of a month to figure out how to se"
author: "Milad E. Fahmy"
title: "How to deploy a Node.js app to the AWS Elastic Beanstalk"
created: "2021-08-16T10:17:10+02:00"
modified: "2021-08-16T10:17:10+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-aws tag-tech tag-programming tag-nodejs tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to deploy a Node.js app to the AWS Elastic Beanstalk</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*_qUFovbRz-UBf4GAEwgnlw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*_qUFovbRz-UBf4GAEwgnlw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*_qUFovbRz-UBf4GAEwgnlw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*_qUFovbRz-UBf4GAEwgnlw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*_qUFovbRz-UBf4GAEwgnlw.jpeg" alt="How to deploy a Node.js app to the AWS Elastic Beanstalk">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
-- 01_yourconfig.config
- .elasticbeanstalk
-- config.yml</code></pre><p>The config files are written in YAML, as mentioned earlier. To give you an idea of what they should look like, here are a few samples:</p><p>Environment variables file:</p><pre><code># 01_envar.config
option_settings:
aws:elasticbeanstalk:application:environment:
PORT: 8081
NODE_ENV: production</code></pre><p>A file for configuring Node.js:<br>You don’t <strong>really</strong> have to specify the <code>NodeVersion</code> because it will give you the latest one it can on the EC2 instances. But it’s here just in case.</p><pre><code># 02_nodecommand.config
option_settings:
aws:elasticbeanstalk:container:nodejs:
NodeCommand: "npm run start"
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
