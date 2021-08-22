---
card: "https://cdn-media-1.freecodecamp.org/images/1*1eutc7Qqi17u6Ll0E4wKoA.jpeg"
tags: [JavaScript]
description: Recently, I published an article on my new project, Matterhor
author: "Milad E. Fahmy"
title: "Matterhorn in Depth — Project Aspects Explained"
created: "2021-08-15T19:37:36+02:00"
modified: "2021-08-15T19:37:36+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-typescript tag-continuous-integration tag-testing ">
<header class="post-full-header">
<h1 class="post-full-title">Matterhorn in Depth — Project Aspects Explained</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*1eutc7Qqi17u6Ll0E4wKoA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*1eutc7Qqi17u6Ll0E4wKoA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*1eutc7Qqi17u6Ll0E4wKoA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*1eutc7Qqi17u6Ll0E4wKoA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*1eutc7Qqi17u6Ll0E4wKoA.jpeg" alt="Matterhorn in Depth — Project Aspects Explained">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Recently, I published an <a href="https://medium.freecodecamp.org/announcing-matterhorn-a-node-js-api-server-boilerplate-4994759f1bf6" rel="noopener">article</a> on my new project, <a href="https://github.com/Ethan-Arrowood/matterhorn" rel="noopener">Matterhorn ?,</a> a Node.js API server boilerplate. It provides a set of opinionated configuration files and some basic example code. These help developers get up and running faster with Node.js and TypeScript.</p>
<p>Matterhorn is inspired by projects like Create React App and Gatsby CLI. The project's goal is to eliminate the barrier of entry required to use programming tools such as type systems, testing and linting frameworks, and even basic continuous integration.</p>
<p>This blog post will review each of the core aspects in Matterhorn. I will discuss details and the opinionated decision behind the framework of choice.</p>
<h3 id="runtime-type-system">Runtime &amp; Type System</h3>
<p>The core of this project is built with Node.js, a JavaScript runtime built on <a href="https://developers.google.com/v8/" rel="noopener">Chrome’s V8 JavaScript engine</a>. It is recommended you use the latest stable version of Node.js to run this project. At the time of writing this post, it is <strong>11.7.0</strong>.</p>
<p>Node.js is driven by a non-blocking event loop which makes it a great choice for building scalable network applications. For more information on Node.js check out their <a href="https://nodejs.org/en/" rel="noopener">website</a>.</p>
<p>Many Node.js projects are written in JavaScript. However, TypeScript, a type system for JavaScript, has witnessed a spike in attention at the end of 2018. Many developers are interested in learning TypeScript in 2019. Its adoption in open source JavaScript projects is increasing. The original purpose for Matterhorn was to jump start developers interested in building backend Node.js applications with TypeScript. As such, Matterhorn itself is written in TypeScript.</p>
<p>As a type system, TypeScript is very comprehensive. While it may have a steep learning curve at first, the benefits from using it are paramount. It helps you, the developer, write cleaner, less buggy code. And once you’re familiar with the ecosystem and configuration process, you’ll be writing new features faster than you would with native JavaScript. Editors such as <a href="https://code.visualstudio.com/" rel="noopener">VSCode</a> have TypeScript enabled by default. It provides an extensive set of developer tooling to further improve the developer experience.</p>
<h3 id="api-framework">API Framework</h3>
<p>While it is possible to write an HTTP API using just Node.js, if a developer wants to achieve ecosystem maintainability, security, and scalability, they should use an API framework. When it comes to Node.js API frameworks, there are many to chose from such as Express, Koa, and Hapi. But there is one framework faster and more resilient than all the rest: <a href="https://www.fastify.io/" rel="noopener">Fastify</a>.</p>
<figcaption>Fastify logo from <a href="https://www.fastify.io" rel="noopener" target="_blank" title="">https://www.fastify.io</a></figcaption>
</figure>
<p>Fastify is a fast and low overhead web framework, for Node.js. It is inspired by Hapi and Express and operates on a plugin based architecture. It has a very healthy open source community, and over 90 public plugins from authentication to database bindings and everything in between. Additionally, Fastify maintains its own set of TypeScript bindings that are shipped with the module directly from NPM.</p>
<h3 id="test-runner-and-linter">Test Runner and Linter</h3>
<p>Backing up your code with unit tests is a standard in today’s programming ecosystem. Matterhorn comes with Jest, a popular JavaScript test runner. It is configured to work with TypeScript and even contains some examples for testing your Fastify API. Take note of Fastify’s <code>inject</code> method; it is very useful for testing your routes behavior.</p>
<p>In addition to running tests, Jest is also configured to output code coverage documents. While code coverage is not the most important metric to consider when writing unit tests, it is valuable and can assist you in verifying you’re at least covering as much of your code base as possible.</p>
<p>In the open source community, code linters are a popular choice for enforcing a certain style of programming. They negate the need for stylistic code reviews. They can help developers catch errors in their code before they run it.</p>
<p>Matterhorn is equipped with ESLint, a popular choice for JavaScript linting. The project was originally shipped with TSLint. However, this was swapped out in favor of ESLint because TypeScript <a href="https://github.com/Microsoft/TypeScript/issues/29288" rel="noopener">officially announced</a> plans to directly support the ESLint project. The linter is configured to suit the project maintainers opinions. It can easily be reconfigured for your own stylistic guidelines.</p>
<h3 id="continuous-integration">Continuous Integration</h3>
<p>The final aspect of Matterhorn is the inclusion of a fully configured continuous integration pipeline. For many developers, especially those learning or just tinkering, this feature may not have much use. However, for those trying to develop a complete application and want the stability of enterprise development, this CI is for them.</p>
<p>The pipeline is built on Azure DevOps (previously named Visual Studio Team Services). Azure DevOps is free for public repositories, and the pipeline utilities are extensive. It can be configured programmatically (<a href="https://github.com/Ethan-Arrowood/matterhorn/blob/master/azure-pipelines.yml" rel="noopener">Matterhorn</a>) or through a visual editor (in a browser). You can check out Matterhorn’s CI pipeline <a href="https://dev.azure.com/arrowoode/matterhorn/_build?definitionId=3" rel="noopener">here</a>. It automatically builds for pull request updates and any new commits on <em>master</em>.</p>
<h3 id="conclusion">Conclusion</h3>
<p>Thank you for taking the time to read about the various aspects of Matterhorn. A lot went into consideration when picking services and utility modules for this project. The project is open source, and there is plenty of room for improvement so if you’d like to contribute check it out below.</p>
<p><a href="https://github.com/Ethan-Arrowood/matterhorn" rel="noopener"><strong>Ethan-Arrowood/matterhorn</strong></a><br><a href="https://github.com/Ethan-Arrowood/matterhorn" rel="noopener"><em>An API boilerplate project built on Node.js and TypeScript ? - Ethan-Arrowood/matterhorng</em>ithub.com</a></p>
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
