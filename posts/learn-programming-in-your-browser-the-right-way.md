---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9a61740569d1a4ca2547.jpg"
tags: [Vscode]
description: GitHub Codespaces enable you to experiment with complex softw
author: "Milad E. Fahmy"
title: "GitHub Codespaces – How to Code Right in Your Browser with Your Own Cloud Dev Environment"
created: "2021-08-15T19:29:20+02:00"
modified: "2021-08-15T19:29:20+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-vscode tag-github tag-codespaces tag-rust tag-webassembly tag-node-js tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">GitHub Codespaces – How to Code Right in Your Browser with Your Own Cloud Dev Environment</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9a61740569d1a4ca2547.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a61740569d1a4ca2547.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a61740569d1a4ca2547.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a61740569d1a4ca2547.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9a61740569d1a4ca2547.jpg" alt="GitHub Codespaces – How to Code Right in Your Browser with Your Own Cloud Dev Environment">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>GitHub Codespaces enable you to experiment with complex software development stacks right from the web browser. No software to install or configure. No stress. No mess.</p>
<figcaption>A gif showing the setup process of a GitHub Codespace</figcaption>
</figure>
<p>In the recent GitHub Satellite online conference, one of the most exciting product announcements was GitHub Codespaces. The idea is to have a code button on every repository. </p>
<p>When you click on it, it launches a fully featured VSCode IDE with all the necessarily software dependencies, including operating system level libraries, to build and run the project. This VSCode IDE runs entirely in your browser, and will not install any software or change any configuration to mess up your computer. </p>
<p>Sounds too good to be true? Well, watch the Github Satellite keynote segment about Codespaces yourself!</p>
<figcaption>A clip from the keynote: https://youtube.com/watch?v=L618Pp0n7us</figcaption>
</figure>
<p>A key benefit of Github Codespaces is how quickly you can on-board new developers to a project. A new developer can get set up in minutes, instead of days, and immediately start contributing to the project. It is a great learning tool for new languages, frameworks, and software tools.</p>
<p>Under the hood, it starts a Docker container on a remote server, installs the entire software stack required by the project, and runs tasks like compiling and debugging in the remote Docker. </p>
<p>The web browser acts as a front end UI for the Docker instance. This approach requires no software install on the developer’s machine. But the trade-off is that all software installation from the operation system all the way to the final application happens on the server. </p>
<p>GitHub must start a fresh server for each Codespaces instance. That requires a lot of data center resources. In fact, the <a href="https://github.com/features/codespaces/">GitHub Codespaces web page</a> has a waiting list as of today (June 2020). <br><br></p>
<p>Personally, I cannot wait for GitHub Codespaces to become available. But a time machine does exist. You can experience all the features in GitHub Codespaces today, for free.</p>
<h2 id="vs-codespaces">VS Codespaces</h2>
<p>The software behind GitHub Codespaces is actually based on a Microsoft VSCode product called <a href="https://online.visualstudio.com/">VS Codespaces</a>. VS Codespaces is available today to all Microsoft Azure users. And yes, it allows you to open GitHub repositories in VSCode IDE directly from a browser window. </p>
<p>In this tutorial, I will show you how to use Codespaces in your own development work today.</p>
<p>To make Codespaces available in your GitHub repositories, you just need to add the following HTML button anywhere on your web pages. </p>
<p>When an Azure user clicks on the button, it asks the user to log into VS Codespaces and walks the user through opening the repository in the online IDE. You can see how it works in the examples in the next section.</p>
&lt;a href="https://online.visualstudio.com/environments/new?name=My%20Project&amp;repo=username/reponame"&gt;
&lt;img src="https://img.shields.io/endpoint?style=social&amp;url=https%3A%2F%2Faka.ms%2Fvso-badge"&gt;
&lt;/a&gt;
&lt;/p&gt;</code></pre>
<figcaption>HTML example for adding a VS Codespaces launch button for your GitHub repo</figcaption>
</figure>
<blockquote>VS Codespaces runs entirely in your browser and costs around $1 per work day. It is cheaper than a cup of coffee in the office.</blockquote>
<h2 id="examples">Examples</h2>
<p>Now, let's look into several examples of how you might learn new programming skills using VS Codespaces.</p>
<p>Rust is one of the fastest growing programming languages today. It is voted as the most beloved programming language by Stackoverflow users four years in a row. </p>
<p>But to experiment with Rust requires a complex toolchain of compiler, linker, package manager, tool manager and so on. </p>
<p>VS Codespaces provides an easy way to <a href="https://www.secondstate.io/articles/how-to-learn-rust-without-installing-any-software/">learn Rust</a>. Just click on the VS Codespaces button in <a href="https://github.com/second-state/learn-rust-with-github-actions">this repository</a> and you now have a working Rust project to experiment with! </p>
<figcaption><a href="https://github.com/second-state/learn-rust-with-github-actions">https://github.com/second-state/learn-rust-with-github-actions</a></figcaption>
</figure>
<p>As a system language, Rust is well positioned to build high performance server side applications. The most promising stack is to compile and run Rust functions in a WebAssembly container, and then access those high performance functions from an existing web application framework, such as Node.js. </p>
<p>However, as you can already see, this “best practice” setup requires a complex stack of software. </p>
<p>Clicking on the VS Codespaces button in <a href="https://github.com/second-state/ssvm-nodejs-starter">this repository</a> gives you a fully functional Node.js project that uses <a href="https://www.secondstate.io/articles/getting-started-with-rust-function/">Rust functions in WebAssembly</a> as modules. You can immediately start to modify the Rust and JavaScript code and run the Node.js application from inside the web browser IDE.</p>
<figcaption><a href="https://github.com/second-state/ssvm-nodejs-starter">https://github.com/second-state/ssvm-nodejs-starter</a></figcaption>
</figure>
<p><a href="https://www.secondstate.io/articles/why-webassembly-server/">Server-side Rust and WebAssembly</a> sound cool. But do we actually have a more complete example that demonstrate the power and performance of Rust beyond a simple hello world? </p>
<p><a href="https://github.com/second-state/rust-wasm-ai-demo">This repository</a> is such an example. Open it in VS Codespaces and you will have a project for a <a href="https://www.secondstate.io/articles/artificial-intelligence/">Rust + JavaScript app that utilizes Tensorflow to perform image recognition</a>. Since the app runs inside Node.js, it provides a template for AI-as-a-Service web applications. </p>
<figcaption><a href="https://github.com/second-state/rust-wasm-ai-demo">https://github.com/second-state/rust-wasm-ai-demo</a></figcaption>
</figure>
<p>What if you want to stay on the bleeding edge and use Rust-based web runtime Deno instead of the C-based Node.js? Well, there is a VS Codespaces <a href="https://github.com/anthonychu/azure-functions-deno-worker">template for running Deno as an Azure Function</a> too!</p>
<h2 id="how-it-works">How it works</h2>
<p>If you look closely, each VS Codespaces-enabled repository has a <code>.devcontainer</code> folder. Inside that folder, the <code>Dockerfile</code> specifies how to build the Docker container for the development environment. </p>
<p>For example, the Node.js Docker container is based on Ubuntu Linux with Node.js and selected NPM packages pre-installed. <a href="https://github.com/second-state/ssvm-nodejs-starter/tree/master/.devcontainer">Check out an example here</a>.</p>
<p>The <code>devcontainer.json</code> file specifies the configuration for the VSCode IDE on the remote Docker. For example, it configures the VSCode extensions to install, the terminal and debugger commands to use, and the host ports to forward to for testing and debugging.</p>
<p>Microsoft provides <a href="https://github.com/microsoft/vscode-dev-containers">quite a few <code>.devcontainer</code> templates</a> for you to modify and use. They cover most of the common software development stacks today.</p>
<p>You could further customize the user’s VSCode experience by providing launch and tasks definitions in the <code>.vscode</code> folder. <a href="https://github.com/second-state/ssvm-nodejs-starter/tree/master/.vscode">Check them out</a>!</p>
<h2 id="conclusion">Conclusion</h2>
<p>With VS Codespaces, and GitHub Codespaces when it launches, the barriers and friction for software development are further reduced. You can get started with complex software stacks without leaving your web browser. <a href="https://www.secondstate.io/articles/getting-started-rust-nodejs-vscode/">Try it today</a>!</p>
<p>Finally, watch the full length GitHub Satellite presentation on GitHub Codespaces.</p>
<figcaption>A preview of GitHub Codespaces</figcaption>
</figure>
<p><a href="https://webassemblytoday.substack.com/">Subscribe to my newsletter</a> and stay in touch. </p>
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
