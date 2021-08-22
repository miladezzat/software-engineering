---
card: "https://cdn-media-1.freecodecamp.org/images/1*Gpo6knTSfsz0E9qjtCmBEQ.jpeg"
tags: [JavaScript]
description: Happy holidays developers ? Recently, I published Matterhorn
author: "Milad E. Fahmy"
title: "Announcing Matterhorn ? a Node.js API Server Boilerplate"
created: "2021-08-15T19:38:39+02:00"
modified: "2021-08-15T19:38:39+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-typescript tag-nodejs tag-tech tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">Announcing Matterhorn ? a Node.js API Server Boilerplate</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Gpo6knTSfsz0E9qjtCmBEQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*Gpo6knTSfsz0E9qjtCmBEQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*Gpo6knTSfsz0E9qjtCmBEQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Gpo6knTSfsz0E9qjtCmBEQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Gpo6knTSfsz0E9qjtCmBEQ.jpeg" alt="Announcing Matterhorn ? a Node.js API Server Boilerplate">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Happy holidays developers ? Recently, I published M<a href="https://github.com/Ethan-Arrowood/matterhorn" rel="noopener">atterhorn ?, </a>an API boilerplate project built with Node.js and TypeScript. The API server uses Fastify, a fast and low overhead web framework. The project comes with a configured type system (TypeScript), test runner (Jest), linter (TSLint), and even a CI pipeline (Azure DevOps).</p>
<p>This article will give a brief overview of the project and insights into certain design decisions.</p>
<p><a href="https://github.com/Ethan-Arrowood/matterhorn" rel="noopener"><strong>Ethan-Arrowood/matterhorn</strong></a><br><a href="https://github.com/Ethan-Arrowood/matterhorn" rel="noopener"><em>An API boilerplate project built on Node.js and TypeScript ? - Ethan-Arrowood/matterhorng</em>ithub.com</a></p>
<h3 id="overview">Overview</h3>
<blockquote>? Psst! This overview section is very similar to the project docs on G<a href="https://github.com/Ethan-Arrowood/matterhorn#matterhorn-" rel="noopener">itHub</a></blockquote>
<p>Get started quickly by following these steps:</p>
<ol>
<li>? Fork the repository</li>
<li>?‍♀️ Clone it to your computer</li>
<li>?‍♀️ Run n<code>pm run install &amp;&amp; npm run dev</code></li>
<li>? Edit any of the files in s<code>rc/</code></li>
<li>? Watch as the app magically rebuilds and relaunches itself</li>
</ol>
<p>✨ That’s it for the basic user guide. Now let’s dive into some of the commands available to you by default. All of the commands below can be run with <code>npm run &lt;scri</code>pt&gt; . This project makes use of npm mo<code>dul</code>es op<code>n and </code>rimraf to enable platform agnostic npm scripts.</p>
<ul>
<li><code>build</code> — build the TypeScript files and output to <code>lib/</code></li>
<li><code>build:watch</code> — automatically rebuild files if changes are detected in <code>src/</code></li>
<li><code>clean</code> — recursively delete the <code>lib/</code> and <code>coverage/</code> directories</li>
<li><code>clean:build</code> — recursively delete the <code>lib/</code> directory</li>
<li><code>clean:coverage</code> — recursively delete the <code>coverage/</code> directory</li>
<li><code>coverage</code> — run the test suite and generate code coverage reports</li>
<li><code>coverage:open</code> — run <code>npm run coverage</code> then open the results in a browser</li>
<li><code>dev</code> — concurrently run <code>build:watch</code> and <code>start:watch</code></li>
<li><code>lint</code> — run the linter configured by TSLint on the <code>src/</code> directory</li>
<li><code>start</code> — run the app from <code>lib/</code>. Make sure to use <code>npm run build</code> first!</li>
<li><code>start:watch</code> — relaunch the server if new changes are detected in <code>lib/</code></li>
<li><code>test</code> — run unit tests defined in the <code>tests/</code> directory</li>
<li><code>test:ci</code> — run unit tests and generate necessary files for CI integration</li>
</ul>
<h4 id="command-line-arguments-environment-variables">Command Line Arguments &amp; Environment Variables</h4>
<p>Matterhorn implements example usage of both command line arguments and environment variables. It uses <code>yargs-parser</code> to manage command line arguments. Command line arguments are passed in through the start command: <code>node lib/index.js &lt;command line argumen</code>ts&gt;.</p>
<p>The<code>--log</code> argument has been enabled as an example. Running <code>npm run start</code> starts up the project without any command line arguments. This command is intended to be used in production, so logging is disabled by default (i.e. we don’t pass the <code>—-log</code> argument).</p>
<p>If you are using this command to test your code locally and want to see the logging output, then run <code>npm run start —- -—log</code>. This passes the command line argument through npm and into the aliased command.</p>
<p>Environment variables work in a similar way to command line arguments. They can be set in multiple ways depending on the terminal and operating system you are using. In a bash terminal you can specify environment variables as you use any of the above mentioned scripts by prepending the assignment to the command.</p>
<p>For example, this project has the <code>PORT </code>environment variable enabled. In a bash terminal run <code>PORT=8080 npm run start</code> to run the API on port 8080.</p>
<h3 id="design-decisions">Design Decisions</h3>
<p>I built this project because I found myself constantly copying and pasting config files for new Node.js projects. I love what the <code>create-react-app</code> team has accomplished and envision Matterhorn developing into a similar kind of tool. Down the road, I look forward to developing a complete CLI to help developers get up and running with Node.js and TypeScript even quicker.</p>
<p>Matterhorn is an opinionated project. The build and linting systems are configured to my preferences, but are very easy to change. For example, in <code>tslint.json</code> I defined the <code>"semicolon"</code> rule as <code>false</code> — to enforce semicolon usage throughout the app, change this to <code>true</code> .</p>
<p>Additionally, this project contains an <code>azure-pipelines.yml</code> file. This defines the CI (continuous integration) pipeline on Azure DevOps, a robust tool offered by Microsoft to enable teams to plan smarter, collaborate better, and ship faster with a set of modern dev services. This was another opinionated decision due to my experience with the tool. There are many other great CI options such as Travis CI or Circle CI that I hope to support in the future.</p>
<h3 id="hope-you-enjoy-">Hope you enjoy!</h3>
<p>Thank you for taking the time to read this article and checking out Matterhorn ?. The project is open sourced, and I encourage developers of any skill level to come contribute. Check it out on G<a href="https://github.com/Ethan-Arrowood/matterhorn" rel="noopener">itHub </a>and if you want to hear about future updates as well as other things I develop follow me on T<a href="https://twitter.com/ArrowoodTech" rel="noopener">witter.</a></p>
<p>Best wishes ? ~ Ethan Arrowood</p>
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
