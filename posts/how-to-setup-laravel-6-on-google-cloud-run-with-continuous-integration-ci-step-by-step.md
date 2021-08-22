---
card: "/images/default.jpg"
tags: [Web Development]
description: "Laravel has soared in popularity over the last few years. The"
author: "Milad E. Fahmy"
title: "How to run Laravel on Google Cloud Run with Continuous Integration - a step by step guide"
created: "2021-08-16T10:05:43+02:00"
modified: "2021-08-16T10:05:43+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-software-engineering tag-devops tag-php tag-laravel tag-google-cloud tag-google-cloud-run ">
<header class="post-full-header">
<h1 class="post-full-title">How to run Laravel on Google Cloud Run with Continuous Integration - a step by step guide</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/11/laravel6-on-gcr-f.jpg 300w,
/news/content/images/size/w600/2019/11/laravel6-on-gcr-f.jpg 600w,
/news/content/images/size/w1000/2019/11/laravel6-on-gcr-f.jpg 1000w,
/news/content/images/size/w2000/2019/11/laravel6-on-gcr-f.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/11/laravel6-on-gcr-f.jpg" alt="How to run Laravel on Google Cloud Run with Continuous Integration - a step by step guide">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Laravel has <a href="https://trends.google.com/trends/explore?date=2014-11-12%202019-11-12&amp;q=laravel,symfony">soared</a> in popularity over the last few years. The Laravel community even says that Laravel has made writing PHP more enjoyable instead of a pain. Laravel 6 has some interesting new <a href="https://laracasts.com/series/whats-new-in-laravel-6">features</a>. Getting a super scaleable working URL for your application takes hours if not days. Setting up something like Kubernetes is a huge task. This is where Google Cloud Run shines: you can get a working HTTPS URL for any of your containerized apps in minutes.</p><p><a href="https://cloud.google.com/run/">Google Cloud Run</a> is serverless and fully managed by Google. You get super scale, billing by the second, HTTPS URLs, and your own domain mapping. If you want to run stateless containers, Cloud Run is hands down the easiest way to do it. In this post, I will detail how to get your Laravel 6 app working on Google cloud run with Continuous Integration (CI).</p><h2 id="prerequisites">Prerequisites</h2><ul><li>You are familiar with PHP/Composer and aware of Laravel (if you’ve landed here you are, I suppose)</li><li>You know how to use Git from the CLI</li><li>Your code is hosted on GitHub for CI/CD and you are familiar with GitHub</li><li>Know a fair bit of Docker, maybe even multi-stage build</li><li>Have a working Google cloud account (they give you <a href="https://cloud.google.com/free/">$300 credit</a> free for 1 yr, no reasons not to have an account)</li></ul><h2 id="why-is-cloud-run-a-great-option-for-beginners"><strong>Why is Cloud Run a great option for beginners?</strong></h2><p>For two main reasons:</p><ol><li>Learn about the best practices and software like docker and CI/CD</li><li>Getting the basics going just involves clicking a button, selecting 2 things, waiting for 5 mins, and you get a working HTTPS URL. Can it be any easier than this? :)</li></ol><h2 id="steps-to-deploy"><strong>Steps to deploy</strong></h2><p>Below are the steps to set up and deploy Laravel 6 on Cloud Run:</p><h3 id="1-clone-laravel-or-new-laravel-project"><strong>1. Clone Laravel or new Laravel project</strong></h3><p>Start by cloning Laravel or using composer or the Laravel CLI as indicated in the official <a href="https://laravel.com/docs/5.8/installation">installation</a> guide. I am using composer to get the latest Laravel as below:</p><h4 id="command"><strong>Command</strong></h4><p>I ran the following command to get the latest Laravel:</p><pre><code class="language-bash">composer create-project --prefer-dist laravel/laravel laravel6-on-google-cloud-run
code . # I used VS code to change the readme
git add readme.md
git commit -m "Initial commit -- App Readme"
git remote add origin git@github.com:geshan/laravel6-on-google-cloud-run.git
git push -u origin master
git add .gitignore
git add .
git commit -m "Add the whole Laravel 6 app"
git push origin laravel6-full-app
git fetch
git pull --rebase origin master # as we added the workflow file from github interface
git checkout -b docker
</code></pre><p>Add a key to the <code>.env.example</code> file. Copy it from the <code>.env</code> file like below:</p><pre><code>APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:DJkdj8L5Di3rUkUOwmBFCrr5dsIYU/s7s+W52ClI4AA=
APP_DEBUG=true
APP_URL=http://localhost
</code></pre><p>As this is just a demo this is ok to do. For a real app always be careful with secrets. For production-ready apps do turn of the debugging and other dev related things.</p><p>Add the following <code>Dockerfile</code> on the project root:</p><pre><code>FROM composer:1.9.0 as build
WORKDIR /app
COPY . /app
RUN composer global require hirak/prestissimo &amp;&amp; composer install
FROM php:7.3-apache-stretch
RUN docker-php-ext-install pdo pdo_mysql
EXPOSE 8080
COPY --from=build /app /var/www/
COPY docker/000-default.conf /etc/apache2/sites-available/000-default.conf
COPY .env.example /var/www/.env
RUN chmod 777 -R /var/www/storage/ &amp;&amp; \
echo "Listen 8080" &gt;&gt; /etc/apache2/ports.conf &amp;&amp; \
chown -R www-data:www-data /var/www/ &amp;&amp; \
a2enmod rewrite
</code></pre><p>Then add the following file at <code>docker/000-default.conf</code></p><pre><code>&lt;VirtualHost *:8080&gt;
ServerAdmin webmaster@localhost
DocumentRoot /var/www/public/
&lt;Directory /var/www/&gt;
AllowOverride All
Require all granted
&lt;/Directory&gt;
ErrorLog ${APACHE_LOG_DIR}/error.log
CustomLog ${APACHE_LOG_DIR}/access.log combined
&lt;/VirtualHost&gt;
</code></pre><p>After that add the following <code>docker-compose.yml</code></p><pre><code>version: '3'
services:
app:
build:
context: ./
volumes:
- .:/var/www
ports:
- "8080:8080"
environment:
- APP_ENV=local
</code></pre><p>It should give you something like below:</p><pre><code>On branch docker
Untracked files:
(use "git add &lt;file&gt;..." to include in what will be committed)
Dockerfile
docker-compose.yml
docker/
nothing added to commit but untracked files present (use "git add" to track)
</code></pre><p>Now run the following commands:</p><pre><code>git add .
git commit -m "Add docker and docker compose"
git push origin docker
git fetch
git pull --rebase origin master
git checkout -b cloud-run-button
</code></pre><p>Then add the following to your <code>readme.md</code> file:</p><pre><code>### Run on Google cloud run
[![Run on Google Cloud](https://storage.googleapis.com/cloudrun/button.svg)](https://console.cloud.google.com/cloudshell/editor?shellonly=true&amp;cloudshell_image=gcr.io/cloudrun/button&amp;cloudshell_git_repo=https://github.com/geshan/laravel6-on-google-cloud-run.git)
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
