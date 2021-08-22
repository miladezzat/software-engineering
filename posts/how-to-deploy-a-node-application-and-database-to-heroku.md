---
card: "/images/default.jpg"
tags: [JavaScript]
description: Heroku is a cloud-based, fully-managed platform as a service
author: "Milad E. Fahmy"
title: "How to deploy a Node Application and Database to Heroku"
created: "2021-08-15T19:32:41+02:00"
modified: "2021-08-15T19:32:41+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-heroku tag-deployment tag-github tag-git tag-terminal tag-100daysofcode ">
<header class="post-full-header">
<h1 class="post-full-title">How to deploy a Node Application and Database to Heroku</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/09/banner.png 300w,
/news/content/images/size/w600/2019/09/banner.png 600w,
/news/content/images/size/w1000/2019/09/banner.png 1000w,
/news/content/images/size/w2000/2019/09/banner.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/09/banner.png" alt="How to deploy a Node Application and Database to Heroku">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Heroku is a cloud-based, fully-managed platform as a service (PaaS) for building, running, and managing apps. The platform is flexible and designed with DX support for you and your team’s preferred development style and to help you stay focused and productive.</p>
<p>Developers, teams, and businesses of all sizes use Heroku to deploy, manage, and scale apps. Whether you're building a simple prototype or a business-critical product, Heroku's fully-managed platform gives you the simplest path to delivering apps quickly.</p>
<p>With features like Heroku Runtime, Heroku Postgres (SQL), Heroku Redis, Add-ons, Data Clips, App metrics, Smart containers, Enterprise-grade support, GitHub Integration and lots more, Heroku gives developers the freedom to focus on their core product without the distraction of maintaining servers, hardware, or infrastructure.</p>
<hr>
<p>One of Heroku's core feature is deploying, managing, and scaling apps with your favorite languages [Node, Ruby, Python, Java, PHP, Go, and more].<br>In this article, I'll show you how to take an existing Node.js app and deploy it to Heroku – everything from creating your Heroku account to adding a database to your deployed application.</p>
<h2 id="prerequisites">Prerequisites</h2>
<p>In my previous article, I wrote about "<a href="https://bolajiayodeji.com/building-a-slackbot-with-nodejs-and-slackbotsjs-cjz8gh7zg000exfs1tq2z5zzu">Building a SlackBot with Node.js and SlackBots.js</a>" and I promised to write a follow-up article to show how to host the SlackBot on either Heroku, Zeit or Netlify and publish it to the Slack Apps store. Well, this is the follow-up article but without the "Publishing to Slack Apps" part. We'll cover that in another article.</p>
<p>I assume you have/ know the following already:</p>
<ul>
<li>Read my <a href="https://bolajiayodeji.hashnode.dev/building-a-slackbot-with-nodejs-and-slackbotsjs-cjz8gh7zg000exfs1tq2z5zzu">previous article</a></li>
<li>Built the <a href="https://github.com/BolajiAyodeji/inspireNuggetsSlackBot">inspireNuggets SlackBot</a></li>
<li>Git, Node, and npm installed</li>
<li>A free <a href="https://signup.heroku.com/">Heroku account</a></li>
<li><a href="https://devcenter.heroku.com/articles/heroku-cli">Heroku CLI</a> installed</li>
</ul>
<h2 id="bonus">Bonus</h2>
<p>If you don't have npm, Node, and Heroku CLI installed or a Heroku account already, here's a quick bonus [ Yes, you're welcome :) ].</p>
<h3 id="installing-npm-and-node">Installing npm and Node</h3>
<ul>
<li><a href="https://nodejs.org">Node.js</a> is a JavaScript runtime built on <a href="https://v8.dev/">Chrome's V8 JavaScript engine</a>.</li>
<li><a href="https://www.npmjs.com/">npm</a> is the package manager for Node.js. An open-source project created to help JavaScript developers easily share packaged modules of code.</li>
</ul>
<p>You can simply download Node.js <a href="https://nodejs.org/en/">here</a>. Don't worry, npm comes with Node.js, so doing this installs both ✨</p>
<h3 id="creating-a-free-heroku-account">Creating a free Heroku account</h3>
<p>Kindly head <a href="https://signup.heroku.com/">here</a> and fill the Signup form. It's pretty simple.</p>
<h3 id="installing-heroku-cli">Installing Heroku CLI</h3>
<p>The Heroku Command Line Interface (CLI) makes it easy to create and manage your Heroku apps directly from the terminal. It’s an essential part of using Heroku. [ Well, you can decide to use the GitHub integration feature and Heroku Dashboard but yes you should learn how to use the CLI ]<br>Heroku CLI requires Git, the popular version control system. If you don’t already have Git installed, I wrote <a href="https://www.bolajiayodeji.com/setting-up-git-first-time/">this article</a> to help you.</p>
<h4 id="heroku-cli-for-mac-os">Heroku CLI for Mac OS</h4><pre><code>brew tap heroku/brew &amp;&amp; brew install heroku
</code></pre>
<p>or <a href="https://devcenter.heroku.com/articles/heroku-cli">download the installer</a>.</p>
<h4 id="heroku-cli-for-ubuntu">Heroku CLI for Ubuntu</h4><pre><code>sudo snap install --classic heroku
</code></pre>
<h4 id="heroku-cli-for-windows">Heroku CLI for Windows</h4>
<p>Download the installer for <a href="https://cli-assets.heroku.com/heroku-x64.exe">64-Bit</a> or <a href="https://cli-assets.heroku.com/heroku-x86.exe">32-Bit</a>.</p>
<h4 id="other-installation-methods">Other installation methods</h4>
<p>Please read <a href="https://devcenter.heroku.com/articles/heroku-cli#other-installation-methods">this</a>.</p>
<h4 id="getting-started-with-heroku-cli">Getting started with Heroku CLI</h4>
<ul>
<li>Verify your installation</li>
</ul><pre><code>heroku --version
</code></pre>
<p>heroku/7.30.1 linux-x64 node-v11.14.0</p>
<ul>
<li>Login to your Heroku account</li>
</ul>
<p>There are two ways to do this:</p>
<ul>
<li><strong>Web based auth</strong></li>
</ul><pre><code>heroku login
</code></pre>
<p>Follow the instructions and login via your web browser then return to your terminal.</p>
<ul>
<li><strong>CLI auth</strong></li>
</ul>
<p>This is a safer option as it saves your email address and an API token to <code>~/.netrc</code> for future use.</p><pre><code>heroku login -i
</code></pre>
<hr>
<h3 id="deploying-your-node-js-app">Deploying your Node.js App</h3>
<p>I presume you've built the SlackBot already. If you haven't, please clone the <a href="https://github.com/BolajiAyodeji/inspireNuggetsSlackBot">finished project</a>.</p>
<p>The project is a simple Slackbot that displays random inspiring techie quotes and jokes for developers/designers.</p><pre><code class="language-bash">git clone https://github.com/BolajiAyodeji/inspireNuggetsSlackBot.git &amp;&amp; cd inspireNuggetsSlackBot
</code></pre>
<p>Now let's deploy our app to Heroku ??. I'll show you two ways to do this:</p>
<h4 id="deploy-via-the-heroku-git">Deploy via the Heroku Git</h4>
<p>This is done via the Heroku CLI.</p>
<h5 id="-checklist"><strong>☑️ Checklist</strong></h5>
<ul>
<li>Specify the version of Node.js that will be used to run your application on Heroku in your <code>package.json</code> file.</li>
</ul><pre><code>"engines": {
"node": "10.16.0"
},
</code></pre>
<ul>
<li>Specify your start script.<br>Simply create a <code>Procfile</code> (without any file extension) and add</li>
</ul><pre><code>web: node index.js
</code></pre>
<p>Heroku first looks for this Procfile. If none is found, Heroku will attempt to start a default web process via the start script in your <code>package.json</code>.</p>
<ul>
<li>Start your app locally using the heroku local command to be sure everything works fine</li>
</ul><pre><code>heroku local web
</code></pre>
<p>Your app should now be running on <a href="http://localhost:5000">http://localhost:5000</a>.</p>
<ul>
<li>Don't forget to <code>.gitignore</code></li>
</ul><pre><code>/node_modules
.DS_Store
/*.env
</code></pre>
<h5 id="let-s-deploy"><strong>? Let's Deploy</strong></h5>
<p>How this works is, you have the project working on local already and you've pushed to GitHub already.</p>
<ul>
<li>Run <code>heroku create</code></li>
</ul>
<p>Basically, this command creates a new Heroku app for you with some randomly generated domain and adds Heroku to your local Git repository.</p>
<ul>
<li>Now run <code>git push heroku master</code></li>
</ul>
<p>This is the magic command, it pushes your app to Heroku, installs it there, and launches it on your allocated domain.</p>
<p>In the example above, it's <a href="https://lit-cove-58897.herokuapp.com/">https://lit-cove-58897.herokuapp.com/</a></p>
<p>You can always make changes to your app settings and domains in your <a href="https://dashboard.heroku.com/">Heroku Dashboard</a></p>
<ul>
<li>Now visit your app in your browser</li>
</ul><pre><code>heroku open
</code></pre>
<ul>
<li>You can also view information about your running app using one of the logging commands. This is very useful in debugging errors.</li>
</ul><pre><code>heroku logs --tail
</code></pre>
<h4 id="deploy-via-github-integration">Deploy via GitHub integration</h4>
<p>You can configure GitHub integration in the Deploy tab of apps in the <a href="https://dashboard.heroku.com">Heroku Dashboard</a>.</p>
<h5 id="-checklist-1"><strong>☑️ Checklist</strong></h5>
<ul>
<li>All previous checklists apply here – ensure you have the app deployed to GitHub already</li>
</ul>
<h5 id="let-s-deploy-1"><strong>? Let's Deploy</strong></h5>
<p>How this method works is that you push your entire project to GitHub and integrate it to Heroku. Every time you push, it deploys from GitHub to Heroku. Pretty cool right?</p>
<ul>
<li>Login to your Heroku Dashboard and create a new app</li>
</ul>
<ul>
<li>Select your app name and region</li>
</ul>
<p>Now your app has successfully been created</p>
<ul>
<li>Click the deploy tab and scroll to the <strong>Deployment method</strong> section</li>
</ul>
<ul>
<li>Click the <strong>Connect to GitHub</strong> button</li>
</ul>
<ul>
<li>Now you have the <strong>Connect to GitHub section</strong>, search for the repository and deploy.</li>
</ul>
<ul>
<li>Now your app was deployed successfully</li>
</ul>
<h4 id="automatic-deploys">Automatic deploys</h4>
<p>Now your app is deployed but you'll have to keep deploying manually. You need to enable automatic deploys for a GitHub branch, so Heroku builds and deploys all pushes to that branch.</p>
<ul>
<li>Scroll to the <strong>Automatic Deploys</strong> section</li>
</ul>
<p>Select the branch you want to deploy. Ideally, this should be the <code>master</code> branch but change this according to your preference.</p>
<p>Now every push to <code>master</code> (or the branch you chose) will deploy a new version of this app.</p>
<h4 id="node-js-buildpack">Node.js Buildpack</h4>
<p>In Heroku, Buildpacks are scripts that are run when your app is deployed. They are used to install dependencies for your app and configure your environment.</p>
<p>After deploying your app, ensure you add a Node.js buildpack to your project.</p>
<ul>
<li>Go to <strong>Settings</strong> and scroll to the <strong>Buildpack section</strong></li>
</ul>
<ul>
<li>Click the <strong>Add Buildpack</strong> button and select Node.js in the Popup modal.</li>
</ul>
<ul>
<li>Now the new buildpack configuration will be used when this app is next deployed. Make some changes to your app and push to GitHub – it will automatically deploy.</li>
</ul>
<h3 id="adding-a-database-to-your-deployed-app-">Adding a Database to your deployed App'</h3>
<p>The Heroku add-on marketplace has a large number of data stores, from Redis and MongoDB providers, to Postgres and MySQL.</p>
<p>Heroku provides three managed data services to all customers in the form of Add-ons:</p>
<ul>
<li><a href="https://elements.heroku.com/addons/heroku-postgresql">Heroku Postgres</a></li>
<li><a href="https://elements.heroku.com/addons/heroku-redis">Heroku Redis</a></li>
<li><a href="https://elements.heroku.com/addons/cloudkarafka">Apache Kafka on Heroku</a></li>
</ul>
<p>Writing about this three will make this article too long. It's pretty simple and I'll add some links to the Heroku Docs.</p>
<ul>
<li><a href="https://devcenter.heroku.com/categories/postgres-basics">Heroku Postgresql Docs</a></li>
<li><a href="https://devcenter.heroku.com/articles/heroku-redis">Heroku Redis Docs</a></li>
<li><a href="https://devcenter.heroku.com/articles/kafka-on-heroku">Apache Kafka on Heroku Docs</a></li>
</ul>
<hr>
<h2 id="conclusion">Conclusion</h2>
<p>Every Heroku account is allocated a pool of free dyno hours. Heroku (free) dynos are great for hosting apps and personal projects. The downside, however, is that your app will fall asleep if it doesn't receive any web traffic within 30-minutes :(.</p>
<p>You can use external tools to ping your server periodically so it never falls asleep.</p>
<p>Here are some to consider:</p>
<ul>
<li><a href="https://www.npmjs.com/package/pingmydyno">Pingmydyno</a></li>
<li><a href="https://www.npmjs.com/package/heroku-self-ping">Heroku self ping</a></li>
<li><a href="http://wakemydyno.com/">Wakemydyno</a></li>
<li><a href="https://kaffeine.herokuapp.com/">Kaffeine</a></li>
</ul>
<hr>
<blockquote>Heroku is meticulously designed to help developers be as productive as possible. The platform removes frustrating obstacles and mundane tasks, so you can stay free of distraction in your development flow. Wherever you are on the learning path, Heroku helps you love app development even more. - Heroku</blockquote>
<p>The Heroku experience provides services, tools, workflows, and polyglot support—all designed to enhance developer productivity. There is more to using Heroku and I hope you explore more and build amazing stuff with Heroku.</p>
<p>If you're a student, Kindly register for the <a href="https://education.github.com/pack">GitHub Student Developer Pack</a> to get One free <a href="https://www.heroku.com/pricing">Hobby Dyno</a> for up to two years.</p>
<p>The pack give students free access to the best developer tools in one place so you can learn by doing.</p>
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
