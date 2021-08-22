---
card: "https://cdn-media-1.freecodecamp.org/images/1*BH8-NzQcUrhzko9JUIGYGg.png"
tags: [Continuous Integration]
description: "Continuous Integration (CI) is the process of automating the "
author: "Milad E. Fahmy"
title: "How to set up continuous integration with Circle CI, EmberJS, and GitHub"
created: "2021-08-16T11:31:19+02:00"
modified: "2021-08-16T11:31:19+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-continuous-integration tag-devops tag-software-development tag-technology tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to set up continuous integration with Circle CI, EmberJS, and GitHub</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*BH8-NzQcUrhzko9JUIGYGg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*BH8-NzQcUrhzko9JUIGYGg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*BH8-NzQcUrhzko9JUIGYGg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*BH8-NzQcUrhzko9JUIGYGg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*BH8-NzQcUrhzko9JUIGYGg.png" alt="How to set up continuous integration with Circle CI, EmberJS, and GitHub">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
cd ~/desktop/
# create a new project
ember new ci-ember-demo
# cd into the directory
cd ci-ember-demo
# run the server
# alternatively
# check that it's been set, should display the updated origin
git remote -v</code></pre><p>Time to push our code to Github:</p><pre><code># add all changes
git add .
# create a commit with a message
git commit -m "[INIT] Project"
# push changes to the repo's master branch
[![CircleCI](https://circleci.com/gh/username/ci-ember-demo.svg?style=svg)](https://circleci.com/gh/username/ci-ember-demo)
...</code></pre><h4 id="add-the-ci-configuration">Add the CI configuration</h4><p>In the root of <strong>ember-ci-demo</strong> create a folder named <code>.circleci</code> and create a file called <code>config.yml</code>. This is where all of our configuration settings will go. Add the following:</p><pre><code>version: 2
jobs:
build:
docker:
- image: circleci/node:7.10-browsers
environment:
CHROME_BIN: "/usr/bin/google-chrome"
steps:
- checkout
- run: npm install
- run: npm test</code></pre><p>Let’s stop and take a look at what’s happening here.</p><pre><code># set the version of CircleCI to use.
# we'll use the latest version.
version: 2</code></pre><p>Next, we’ll set up jobs to run when the CI is triggered.</p><pre><code>jobs:
# tell CI to create a virtual node environment with Docker
# specify the virtual image to use
# the -browsers suffix tells it to have browsers pre-installed
build:
docker:
- image: circleci/node:7.10-browsers
# use Google Chrome to run our tests
environment:
CHROME_BIN: "/usr/bin/google-chrome"</code></pre><p>Finally, let’s tell it what to do once the environment is setup:</p><pre><code>steps:
- checkout
# install the required npm packages
- run: npm install
# run the test suite
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
