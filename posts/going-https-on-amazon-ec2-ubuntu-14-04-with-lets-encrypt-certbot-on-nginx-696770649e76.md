---
card: "https://cdn-media-1.freecodecamp.org/images/1*Cd2NBjQD8Luwbu1Z23n5QQ.png"
tags: [Web Development]
description: "by Karan Thakkar"
author: "Milad E. Fahmy"
title: "Using the Let’s Encrypt Certbot to get HTTPS on your Amazon EC2 NGINX box"
created: "2021-08-16T10:29:21+02:00"
modified: "2021-08-16T10:29:21+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-programming tag-tech tag-startup tag-security ">
<header class="post-full-header">
<h1 class="post-full-title">Using the Let’s Encrypt Certbot to get HTTPS on your Amazon EC2 NGINX box</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Cd2NBjQD8Luwbu1Z23n5QQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*Cd2NBjQD8Luwbu1Z23n5QQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*Cd2NBjQD8Luwbu1Z23n5QQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Cd2NBjQD8Luwbu1Z23n5QQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Cd2NBjQD8Luwbu1Z23n5QQ.png" alt="Using the Let’s Encrypt Certbot to get HTTPS on your Amazon EC2 NGINX box">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
chmod a+x certbot-auto</code></pre><p>Run this command in your home directory:</p><pre><code>/home/ubtuntu</code></pre><h3 id="step-4">Step #4</h3><p>Stop any existing servers running on the port 80 and 443, since those are used by Certbot to verify your domain and generate certificates.</p><p>You can restart those servers once you have finished generating the certificates.</p><h3 id="step-5"><strong>Step #5</strong></h3><p>Run the following command to generate certificates for your domain:</p><pre><code>./certbot-auto certonly --standalone -d xyz.yourdomain.com</code></pre><p>You can generate certificates for multiple domains using this approach.</p><h3 id="step-6"><strong>Step #6</strong></h3><p>Change your NGINX configuration in <strong>/etc/nginx/nginx.conf </strong>to <a href="http://nginx.org/en/docs/http/configuring_https_servers.html" rel="noopener">enable SSL</a>:</p><pre><code>http {
##
# Logging Settings
##
access_log /var/log/nginx/access.log;
error_log /var/log/nginx/error.log;
server {
listen 80;
server_name xyz.yourdomain.com;
location / {
# Redirect any http requests to https
return 301 https://$server_name$request_uri;
}
}
server {
listen 443 ssl;
server_name xyz.yourdomain.com;
ssl_certificate /etc/letsencrypt/live/xyz.yourdomain.com/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/xyz.yourdomain.com/privkey.pem;
add_header Strict-Transport-Security “max-age=31536000”;
location / {
proxy_pass http://127.0.0.1:3000;
}
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
