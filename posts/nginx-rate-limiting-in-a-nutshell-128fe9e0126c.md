---
card: "https://cdn-media-1.freecodecamp.org/images/1*c5HqrBfCv8ZdNsOZUJHEUw.jpeg"
tags: [Nginx]
description: "by Sébastien Portebois"
author: "Milad E. Fahmy"
title: "NGINX rate-limiting in a nutshell"
created: "2021-08-16T10:24:46+02:00"
modified: "2021-08-16T10:24:46+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nginx tag-devops tag-web-development tag-programming tag-software-development ">
<header class="post-full-header">
<h1 class="post-full-title">NGINX rate-limiting in a nutshell</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*c5HqrBfCv8ZdNsOZUJHEUw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*c5HqrBfCv8ZdNsOZUJHEUw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*c5HqrBfCv8ZdNsOZUJHEUw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*c5HqrBfCv8ZdNsOZUJHEUw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*c5HqrBfCv8ZdNsOZUJHEUw.jpeg" alt="NGINX rate-limiting in a nutshell">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
server {
listen 80;
location /by-uri/burst0 {
limit_req zone=by_uri;
try_files $uri /index.html;
}
location /by-uri/burst5 {
limit_req zone=by_uri burst=5;
try_files $uri /index.html;
}
location /by-uri/burst5_nodelay {
limit_req zone=by_uri burst=5 nodelay;
try_files $uri /index.html;
}
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
