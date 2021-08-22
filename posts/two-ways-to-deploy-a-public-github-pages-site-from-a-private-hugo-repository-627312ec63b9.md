---
card: "https://cdn-media-1.freecodecamp.org/images/0*PIWDprt12aR7QsJ8.jpg"
tags: [Coding]
description: "Tools like Travis CI and Netlify offer some pretty nifty feat"
author: "Milad E. Fahmy"
title: "Two ways to deploy a public GitHub Pages site from a private Hugo repository"
created: "2021-08-16T11:29:35+02:00"
modified: "2021-08-16T11:29:35+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-coding tag-programming tag-technology tag-tech tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">Two ways to deploy a public GitHub Pages site from a private Hugo repository</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*PIWDprt12aR7QsJ8.jpg 300w,
https://cdn-media-1.freecodecamp.org/images/0*PIWDprt12aR7QsJ8.jpg 600w,
https://cdn-media-1.freecodecamp.org/images/0*PIWDprt12aR7QsJ8.jpg 1000w,
https://cdn-media-1.freecodecamp.org/images/0*PIWDprt12aR7QsJ8.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*PIWDprt12aR7QsJ8.jpg" alt="Two ways to deploy a public GitHub Pages site from a private Hugo repository">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
depth: false
env:
global:
- HUGO_VERSION="0.54.0"
matrix:
- YOUR_ENCRYPTED_VARIABLE
install:
- wget -q https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz
- tar xf hugo_${HUGO_VERSION}_Linux-64bit.tar.gz
- mv hugo ~/bin/
script:
- hugo --gc --minify
deploy:
provider: pages
skip-cleanup: true
github-token: $GITHUB_TOKEN
keep-history: true
local-dir: public
repo: gh-username/gh-username.github.io
target-branch: master
verbose: true
on:
branch: master</code></pre><p>This script downloads and installs Hugo, builds the site with the garbage collection and minify <a href="https://gohugo.io/commands/hugo/#synopsis" rel="noopener">flags</a>, then deploys the <code>public/</code> directory to the specified <code>repo</code> - in this example, your public GitHub Pages repository. You can read about each of the <code>deploy</code> configuration options <a href="https://docs.travis-ci.com/user/deployment/pages/#further-configuration" rel="noopener">here</a>.</p><p>To <a href="https://docs.travis-ci.com/user/environment-variables#defining-encrypted-variables-in-travisyml" rel="noopener">add the GitHub personal access token as an encrypted variable</a>, you don’t need to manually edit your <code>.travis.yml</code>. The <code>travis</code> gem commands below will encrypt and add the variable for you when you run them in your repository directory.</p><p>First, install <code>travis</code> with <code>sudo gem install travis</code>.</p><p>Then <a href="https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line" rel="noopener">generate your GitHub personal access token</a>, copy it (it only shows up once!) and run the commands below in your repository root, substituting your token for the kisses:</p><pre><code>travis login --pro --github-token xxxxxxxxxxxxxxxxxxxxxxxxxxx
travis encrypt GITHUB_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxx --add env.matrix</code></pre><p>Your encrypted token magically appears in the file. Once you’ve committed <code>.travis.yml</code> to your private Hugo repository, Travis CI will run the script and if the build succeeds, will deploy your site to your public GitHub Pages repo. Magic!</p><p>Travis will always run a build each time you push to your private repository. If you don’t want to trigger this behavior with a particular commit, <a href="https://docs.travis-ci.com/user/customizing-the-build/#skipping-a-build" rel="noopener">add the <code>skip</code> command to your commit message</a>.</p><p><em>Yo that’s cool but I like Netlify.</em></p><p>Okay fine.</p><h3 id="deploying-to-a-separate-repository-with-netlify-and-make">Deploying to a separate repository with Netlify and Make</h3><p>We can get Netlify to do our bidding by using a Makefile, which we’ll run with Netlify’s build command.</p><p>Here’s what our <code>Makefile</code> looks like:</p><pre><code>SHELL:=/bin/bash
BASEDIR=$(CURDIR)
OUTPUTDIR=public
.PHONY: all
all: clean get_repository build deploy
.PHONY: clean
clean:
@echo "Removing public directory"
rm -rf $(BASEDIR)/$(OUTPUTDIR)
.PHONY: get_repository
get_repository:
@echo "Getting public repository"
git clone https://github.com/gh-username/gh-username.github.io.git public
.PHONY: build
build:
@echo "Generating site"
hugo --gc --minify
.PHONY: deploy
deploy:
@echo "Preparing commit"
@cd $(OUTPUTDIR) \
&amp;&amp; git config user.email "you@youremail.com" \
&amp;&amp; git config user.name "Your Name" \
&amp;&amp; git add . \
&amp;&amp; git status \
&amp;&amp; git commit -m "Deploy via Makefile" \
&amp;&amp; git push -f -q https://$(GITHUB_TOKEN)@github.com/gh-username/gh-username.github.io.git master
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
