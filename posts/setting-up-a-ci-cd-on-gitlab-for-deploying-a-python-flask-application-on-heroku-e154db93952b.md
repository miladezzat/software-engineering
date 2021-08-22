---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9cb550740569d1a4cad5db.jpg"
tags: [Web Development]
description: "Recently I came across a challenge to deploy a Python Flask w"
author: "Milad E. Fahmy"
title: "Setting up CI/CD on GitLab for deploying Python Flask application on Heroku"
created: "2021-08-16T15:42:40+02:00"
modified: "2021-08-16T15:42:40+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-python tag-flask tag-heroku tag-gitlab ">
<header class="post-full-header">
<h1 class="post-full-title">Setting up CI/CD on GitLab for deploying Python Flask application on Heroku</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9cb550740569d1a4cad5db.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9cb550740569d1a4cad5db.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9cb550740569d1a4cad5db.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9cb550740569d1a4cad5db.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9cb550740569d1a4cad5db.jpg" alt="Setting up CI/CD on GitLab for deploying Python Flask application on Heroku">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
script:
— apt-get update -qy
— apt-get install -y python-dev python-pip
— pip install -r requirements.txt
— export MONGOHQ_URL=$MONGO_URL
production:
type: deploy
script:
— apt-get update -qy
— apt-get install -y ruby-dev
— gem install dpl
— dpl — provider=heroku — app=task-mgmt-app — api-key=$HEROKU_SECRET_KEY
only:
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
