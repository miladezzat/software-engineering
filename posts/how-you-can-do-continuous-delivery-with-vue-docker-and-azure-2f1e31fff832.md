---
card: "https://cdn-media-1.freecodecamp.org/images/1*6HS029y9bDY2lcUlub7ZRw.png"
tags: [Docker]
description: "A few weeks ago at ng-conf, I announced the launch of vscodec"
author: "Milad E. Fahmy"
title: "How you can do continuous delivery with Vue, Docker, and Azure"
created: "2021-08-16T11:43:56+02:00"
modified: "2021-08-16T11:43:56+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-docker tag-programming tag-technology tag-javascript tag-tutorial ">
<header class="post-full-header">
<h1 class="post-full-title">How you can do continuous delivery with Vue, Docker, and Azure</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*6HS029y9bDY2lcUlub7ZRw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*6HS029y9bDY2lcUlub7ZRw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*6HS029y9bDY2lcUlub7ZRw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*6HS029y9bDY2lcUlub7ZRw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*6HS029y9bDY2lcUlub7ZRw.png" alt="How you can do continuous delivery with Vue, Docker, and Azure">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
</figure><p>OK, let’s begin at the beginning. The first thing we need to do is look at the application to see how it runs. And how it runs is “In a Docker, y’all.”</p><h3 id="running-vue-on-docker">Running Vue on Docker</h3><p>vscodecandothat.com is entirely front-end driven. It’s all HTML, JavaScript, and CSS in your browser. That being the case, all we want to do is serve up the <code>index.html</code> page from the <em>dist</em> folder. We use an nginx web server.</p><p>When you are just serving up static assets, the Dockerfile is very simple…</p><pre><code>FROM nginx
WORKDIR /app
# Copy in the static build assets
COPY dist/ /app/
# Copy in the nginx config file
COPY misc/nginx.conf /etc/nginx/nginx.conf
# All files are in, start the web server
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
