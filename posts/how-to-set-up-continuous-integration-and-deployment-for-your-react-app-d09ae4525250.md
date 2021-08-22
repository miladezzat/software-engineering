---
card: "https://cdn-media-1.freecodecamp.org/images/1*PJiNN3izrhZXN6TNm0koMg.png"
tags: [JavaScript]
description: by Zac Kwan
author: "Milad E. Fahmy"
title: "How to set up continuous integration and deployment for your React app"
created: "2021-08-15T19:45:41+02:00"
modified: "2021-08-15T19:45:41+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-tech tag-continuous-integration tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to set up continuous integration and deployment for your React app</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*PJiNN3izrhZXN6TNm0koMg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*PJiNN3izrhZXN6TNm0koMg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*PJiNN3izrhZXN6TNm0koMg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*PJiNN3izrhZXN6TNm0koMg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*PJiNN3izrhZXN6TNm0koMg.png" alt="How to set up continuous integration and deployment for your React app">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Zac Kwan</p>
<h1 id="how-to-set-up-continuous-integration-and-deployment-for-your-react-app">How to set up continuous integration and deployment for your React app</h1>
<p>Setting up a <strong>React</strong> development environment can be confusing and daunting to newcomers. You might have heard developers talking about how different packages like <strong>babel</strong>, <strong>Webpack </strong>and so on, are needed as well (but this is debatable).</p>
<p>With React getting more popular, there are a few boilerplate projects that aim to help developers create a suitable React development environment. <a href="https://github.com/facebookincubator/create-react-app" rel="noopener"><strong>create-react-app</strong></a> is one of the most popular starter templates.</p>
<p>It aims to allow developers to create a react app with <strong>zero build configuration</strong>.</p>
<p>Developers no longer have to worry about how <code>webpack</code> should be setup, what should be configured with <code>babel</code> to use <code>es6</code>, or which <code>linter</code> and <code>test</code> package to use. Everything will just work out of the box. <strong>Yes, it is so easy!</strong></p>
<p>For developers who need to manage the underlying configuration, it has a <code>npm run eject</code> that allows them to mess with the configuration and do what they couldn’t do previously. The only thing to note is that once <code>eject</code> is run, it cannot be reversed.</p>
<h3 id="development-stack-for-react">Development Stack for React</h3>
<p>I wrote the following guide to help developers build a <strong>Continuous Integration and Continuous Deployment stack for their React app</strong>. We will be using <a href="https://circleci.com" rel="noopener"><strong>CircleCI</strong></a>, <a href="https://codeclimate.com" rel="noopener"><strong>CodeClimate</strong></a><strong>,</strong> and <a href="https://heroku.com" rel="noopener"><strong>Heroku</strong></a>. If you do not have an account at any of the services above, head over to sign up — they’re FREE!</p>
<p>At the end, we will have a React app in a <a href="https://github.com/Zaccc123/awesome-cicd-react" rel="noopener">Github Repo</a> that will automatically deploy any changes on <code><em>master</em></code> branch to <a href="https://heroku.com" rel="noopener"><strong>Heroku</strong></a> after all tests pass. <a href="https://awesome-cicd-react.herokuapp.com" rel="noopener">Here</a> is a sample of the deployed <strong>React</strong> website.</p>
<h4 id="let-s-start-"><strong>Let’s Start!</strong></h4>
<p>The first step is to follow the <a href="https://github.com/facebookincubator/create-react-app" rel="noopener"><strong>create-react-app</strong></a> guide to create a new React app. Do this:</p><pre><code>$ npm install -g create-react-app$ create-react-app my-react-app$ cd my-react-app/$ npm start</code></pre>
<p>Then the browser should automatically open a page at <a href="http://localhost:3000/](http://localhost:3000/)." rel="noopener">http://localhost:3000/</a>. If you see a <strong>Welcome to React</strong> page running, everything is good.</p>
<h4 id="circleci-setup"><strong>CircleCI Setup</strong></h4>
<p>Next, we need to add a little configuration to setup <a href="https://circleci.com" rel="noopener"><strong>CircleCI</strong></a> for our project. Create a <code>.circleci</code> folder and a <code>config.yml</code> in that directory and add the following:</p><pre><code>version: 2jobs:  build:    docker:      - image: circleci/node:8    steps:      - checkout      - restore_cache: # special step to restore the dependency cache          key: dependency-cache-{{ checksum "package.json" }}      - run:          name: Setup Dependencies          command: npm install      - run:          name: Setup Code Climate test-reporter          command: |            curl -L https://codeclimate.com/downloads/test-reporter/test-reporter-latest-linux-amd64 &gt; ./cc-test-reporter            chmod +x ./cc-test-reporter      - save_cache: # special step to save the dependency cache          key: dependency-cache-{{ checksum "package.json" }}          paths:            - ./node_modules      - run: # run tests          name: Run Test and Coverage          command: |            ./cc-test-reporter before-build            npm test -- --coverage            ./cc-test-reporter after-build --exit-code $?</code></pre>
<p>This setup is for <a href="https://circleci.com/docs/2.0/" rel="noopener">CircleCI 2.0</a>. They are sunsetting <a href="https://circleci.com/docs/1.0/" rel="noopener">Circle 1.0</a> on August 31, 2018.</p>
<p>The <code>build</code> step sets up a <code>node:8</code> with a Docker image. It requires <code>v6</code> or higher to work.</p>
<p>In <code>steps</code>, we first check out the project, restore from the cache if any, then install dependencies. We also install <code>cc-test-reporter</code>, a tool provided by CodeClimate to send a coverage report.</p>
<p>We then run the <code>test</code> between the <code>before-build </code>and <code>after-build </code>commands according to <a href="https://docs.codeclimate.com/docs/configuring-test-coverage" rel="noopener">CodeClimate docs.</a> This notifies CodeClimate of the pending report and when completed, it either sends the report or a failure status.</p>
<h4 id="setup-git"><strong>Setup Git</strong></h4>
<p>Create a repo in <a href="https://github.com" rel="noopener"><strong>Github</strong></a> and do the following:</p><pre><code>$ git init$ git remote add origin git@github.com:username/new-repo-here$ git add .$ git commit -m “first commit”$ git push -u origin master</code></pre>
<p>This will push the project that we’ve created into GitHub.</p>
<h4 id="build-and-test-the-project"><strong>Build and Test the Project</strong></h4>
<p>Head over to <a href="https://circleci.com" rel="noopener"><strong>CircleCI</strong></a>, sign in, and build the newly created project. At the end of the build, you should see a failure on the <code>Run Test and Coverage</code>.</p>
<h3 id="setup-codeclimate"><strong>Setup CodeClimate</strong></h3>
<p>The above failure is because we are not authorized to post a report to CodeClimate yet. So, now, head over to <a href="https://codeclimate.com" rel="noopener"><strong>CodeClimate</strong></a>, sign in and build the created GitHub project. We should get this at the end of the analysis:</p>
<figcaption>codeclimate analyse</figcaption>
</figure>
<p>In order to fix the CircleCI issue and use <code>Test Coverage</code> feedback, we will need the <code>Test Reporter ID</code>. This can be retrieved at the <code>Settings &gt; Test Cover</code>age tab. Copy t<code>he Test Reporter</code> ID without sharing it with anyone.</p>
<p>In <a href="https://circleci.com" rel="noopener"><strong>CircleCI</strong></a>, navigate to <code>Project &gt; Settings &gt; Environment va</code>riable an<code>d add CC_TEST_REPOR</code>TER_ID with the c<code>opied Test Repor</code>ter ID.</p>
<h3 id="heroku-deployment-setup"><strong>Heroku Deployment Setup</strong></h3>
<p>In order to deploy React on <a href="https://heroku.com" rel="noopener"><strong>Heroku</strong></a> , we will use a <a href="https://github.com/mars/create-react-app-buildpack" rel="noopener">buildpack</a>. Do the following:</p><pre><code>$ heroku create REPLACE_APP_NAME_HERE — buildpack https://github.com/mars/create-react-app-buildpack.git$ git push heroku master$ heroku open</code></pre>
<p>We pushed the latest <code>master</code> branch to <code>heroku</code> with <code>git push heroku master</code>. A webpage will be open at the end showing the <strong>Welcome to React</strong> page.</p>
<p>Next, we will have to navigate to the newly create app in <a href="https://dashboard.heroku.com/apps" rel="noopener"><strong>Heroku Dashboard</strong></a> to setup automated deployment. Do the following on the dashboard:</p>
<ul>
<li>Go to <strong>Deploy</strong> tab and <strong>Connect</strong> to the correct GitHub repo.</li>
<li><strong>Enable</strong> Automatic deployment and <strong>check</strong> <code>Wait for CI to pass before deploy</code>.</li>
</ul>
<figcaption>enable automatic deployment</figcaption>
</figure>
<h3 id="we-are-done-"><strong>We are done!</strong></h3>
<p>With a few steps, we have a fully automated continuous integration and deployment suite ready. Now with every commit that is pushed to <a href="https://github.com" rel="noopener"><strong>GitHub</strong></a>, it will send a trigger to <a href="https://circleci.com" rel="noopener"><strong>CircleCI</strong></a> and <a href="https://codeclimate.com" rel="noopener"><strong>CodeClimate</strong></a>. Once the test has passed, if it was on the master branch, it will also be automatically deployed to <a href="https://heroku.com" rel="noopener"><strong>Heroku</strong></a><strong>.</strong></p>
<p>View the sample repo <a href="https://github.com/Zaccc123/awesome-cicd-react" rel="noopener"><strong>here</strong></a> and the deployed website <a href="https://awesome-cicd-react.herokuapp.com" rel="noopener"><strong>here</strong></a>!</p>
<h3 id="conclusion">Conclusion</h3>
<p>This is an update of my previous <a href="https://medium.com/@Zaccc123/https-medium-com-zaccc123-continuous-integration-and-deployment-setup-for-react-app-7b5f4bd76cdd" rel="noopener">post</a> almost a year ago. The use of CircleCI has been updated to <code>2.0</code> , and we also use the updated <code>cc-test-reporter</code> by <code>CodeClimate</code>. If you are interested in the migration, you can look at the <a href="https://github.com/Zaccc123/awesome-cicd-react/pull/3" rel="noopener">pull request</a>.</p>
<h3 id="thanks-for-reading-if-you-like-it-please-hit">Thanks for reading! If you like it, please hit ???</h3>
<p>I enjoy reading and writing about tech and products especially related to boosting the productivity of developers. You can say hello to me on my <a href="https://twitter.com/Zaccc123" rel="noopener">Twitter</a> or my <a href="https://zackwan.app" rel="noopener">blog</a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
