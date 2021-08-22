---
card: "https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_RA4XguCJLF-m4a7bwrC5FQ.jpeg"
tags: [JavaScript]
description: By Carl-Johan Kihl
author: "Milad E. Fahmy"
title: "These NPM tricks will make you a pro"
created: "2021-08-15T19:35:27+02:00"
modified: "2021-08-15T19:35:27+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-npm tag-nodejs tag-tech tag-front-end-development ">
<header class="post-full-header">
<h1 class="post-full-title">These NPM tricks will make you a pro</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_RA4XguCJLF-m4a7bwrC5FQ.jpeg 300w,
https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_RA4XguCJLF-m4a7bwrC5FQ.jpeg 600w,
https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_RA4XguCJLF-m4a7bwrC5FQ.jpeg 1000w,
https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_RA4XguCJLF-m4a7bwrC5FQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://s3.amazonaws.com/cdn-media-1.freecodecamp.org/ghost/2019/05/1_RA4XguCJLF-m4a7bwrC5FQ.jpeg" alt="These NPM tricks will make you a pro">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>By Carl-Johan Kihl</p>
<p>After using NPM for almost 8 years, I’ve learned things along the way that I wish I knew when I started. Let’s call them tricks, things that drastically improved my way of working with NPM. Today I want to share my top 10 tricks with you.</p>
<h3 id="1-save-time-use-shortcuts">1. Save time. ⏲ Use Shortcuts</h3>
<p>This is one of the most useful but not so well-documented features. A shortcut for a command might seem like a trivial thing, but the truth is that you will write <strong><strong>30–60%</strong></strong> less code. You’ll save time you can spend on something meaningful, like drinking an extra cup of coffee ☕️ ?</p>
<p>Instead of <code>npm <strong><strong>install</strong></strong> &lt;package&gt;</code><br>write <code>npm <strong><strong>i</strong></strong> &lt;package&gt;</code>.</p>
<p>Instead of <code>npm <strong><strong>install</strong></strong> <strong><strong>--save</strong></strong> &lt;package&gt;</code> <br>write <code>npm <strong><strong>i -S</strong></strong> &lt;package&gt;</code>.</p>
<p>Instead of <code>npm <strong><strong>install</strong></strong> <strong><strong>--save-dev</strong></strong> &lt;package&gt;</code> <br>write <code>npm <strong><strong>i -D</strong></strong> &lt;package&gt;</code>.</p>
<p>Instead of <code>npm <strong><strong>install</strong></strong> <strong><strong>--global</strong></strong> &lt;package&gt;</code> <br>write <code>npm <strong><strong>i -G</strong></strong> &lt;package&gt;</code>.</p>
<p>? Bonus shortcut! Wanna impress your colleagues? ? Here it comes…</p>
<p>Instead of <code>npm <strong><strong>test</strong></strong></code><br>write <code>npm <strong><strong>t</strong></strong></code>.</p>
<h3 id="2-install-multiple-packages-in-one-command">2. Install multiple packages in one command</h3>
<p>Why write multiple lines when you can write one? ? If you know your packages by heart, the fastest option is to install them all in a one-liner, but be careful! One misspelled package and the whole command will fail. If you’re unsure about the names just install them one by one.</p><pre><code>npm i -S react redux react-redux </code></pre>
<h3 id="3-install-packages-from-different-sources">3. Install packages from different sources</h3>
<p>By default, when running <code>npm-install</code>, NPM will install the latest version from the <em>npm-registry </em>(<a href="https://registry.npmjs.org/" rel="noopener">https://registry.npmjs.org</a>)</p>
<p>But there’s more! NPM can install packages from other sources as well, like an URL or a tarball file.</p>
<p>When making your own packages or pull-requests for existing packages, this feature is powerful. For example, if you have your own fork of <a href="https://redux.js.org/" rel="noopener">Redux</a>, you can install your package directly from your fork. <em>(Change </em><code><em>username</em></code><em> to your username on GitHub.)</em></p><pre><code>npm i </code></pre>
<p>Even better, if you’re using a GitHub repository, you can use this shortcut:</p>
<p><code>npm i <strong><strong>username/redux</strong></strong></code></p>
<p>There’s more! You can also install a package from a specific branch. Useful while testing a future release. Just add <code>#</code> together with the branch name at the end.</p><pre><code>npm i username/redux#</code></pre>
<p>? Bonus shortcut! Are you not using GitHub? No worries, there are shortcuts for <strong><strong>BitBucket</strong></strong> and <strong><strong>GitLab</strong></strong> as well:</p><pre><code>npm i bitbucket:username/myrepositorynpm i gitlab:username/myrepository</code></pre>
<h3 id="4-linking-packages">4. Linking Packages</h3>
<p>Sometimes you want to work on a project and develop its packages at the same time. Committing and pushing your package to a remote repository for every change you want to try out is tiresome! ? Instead, you can use a feature called <em>package linking</em>.</p>
<p><em>Package linking</em> works by creating a symlink in your node_modules folder that points to the local repository of your package. In this way, you can edit packages locally and the changes will be instantly available in the project using it.</p>
<p>The easiest way to understand <em>package linking</em> is to try it out!<br>Let’s say we have a project called <code>myproject</code> and a package called <code>mypackage</code>. We want <code>mypackage</code> to be a dependency of <code>myproject</code>.</p>
<figcaption>One project and one&nbsp;package.</figcaption>
</figure>
<p>Go to the folder <code>mypackage</code> and write</p><pre><code>npm link</code></pre>
<p>Nice! Now, go to the folder <code>myproject</code> and write</p>
<p><code>npm link mypackage</code></p>
<p>Done! Take a closer look at the folder structure</p>
<p>As you can see, <code>myproject/node_modules/mypackage</code> is now a symlink to the folder <code>mypackage</code>! Now you can continue to develop <code>mypackage</code> and all changes you make will be instantly available in <code>myproject</code>.</p>
<h3 id="5-the-npx-command">5. The npx command</h3>
<p>There are many scripting tools on NPM out there that you probably will use but will not be a part of your runtime bundle. Grunt, gulp, react-create-app, react-native-cli and mocha are just a few.</p>
<p>Before NPM 5.x you had to install these tools either as global packages or as devDependencies. This was time-consuming, not only to install but to maintain all your tools for multiple projects. Also, most of the tools you will only use once or twice.</p>
<p>Here, the binary NPX comes to the rescue and saves a lot of work for us! For example, to start a new react-project you can simply write:</p>
<p><code>npx create-react-app my-new-project</code></p>
<p>The latest version of <a href="https://github.com/facebook/create-react-app" rel="noopener">create-react-app</a> will be downloaded and executed immediately. No more installing and maintaining tools as global packages.</p>
<h3 id="6-monitor-and-clean-your-project">6. Monitor and clean your project</h3>
<p>It’s important to understand what’s happening under the hood when installing packages in order to solve issues and to make the dependency tree and the final bundle size as small as possible.</p>
<p>First of all, we need a good overview of the dependency tree and which package versions have actually been installed. Use the command <code>npm list</code>. Add the flag <code>--depth=0</code> to list only top-level packages and add <code>-g</code> to list your global packages.</p>
<p><code>npm listnpm list --depth=0 -g</code></p>
<p>NPM is good at maintaining itself and flattening the dependency tree on the fly, but it’s always a good habit to <strong><strong>dedupe</strong></strong> your project before publishing. It might remove a few packages for you.</p>
<p><code>npm dedupe</code></p>
<p>It’s also a great idea to get a good overview of your outdated and missing packages. It’s hard not to love this view for its well-organized columns and the Christmas-vibe color scheme ??</p>
<p><code>npm outdated</code></p>
<figcaption>The outdated list is really beautiful!</figcaption>
</figure>
<p>If you get a lot of red rows, you need to run <code>npm update</code> to update your packages to the latest possible version according to your package.json, which is as well stated in the <strong><strong>wanted</strong></strong> column</p>
<p><code>npm update</code></p>
<p>Great! Now, if you run <code>npm oudated</code> again, all the red rows should be gone.</p>
<p>If you are using the caret <code>^</code> in front of your versions in package.json, the major versions will not be updated (hence the yellow rows). This is good, cause there might be breaking changes updating to a new major version.</p>
<p>If you still want to update everything to the latest version, you can use the tool <code>npm-update-all</code>. It’s as easy as running this command in your project folder.</p>
<p><code>npx npm-update-all</code></p>
<p>Cool! Now you got the latest version of all your dependencies. Your package.json is updated as well. ⚠️ Be aware of breaking changes ⚠️</p>
<figcaption>As you can see, npm-update-all will update all your packages to the latest&nbsp;version.</figcaption>
</figure>
<h3 id="7-go-to-the-home-page-for-a-package">7. Go to the home page for a package</h3>
<p>Need to check the documentation for a package? Why bother switching over to the browser and start googling when everything you need is the terminal? ?</p>
<p>Open the repository for a package in the browser</p>
<p><code>npm repo &lt;package&gt;</code></p>
<p>Open the home page</p>
<p><code>npm home &lt;package&gt;</code></p>
<p>Open the documentation</p>
<p><code>npm docs &lt;package&gt;</code></p>
<h3 id="8-use-npm-scripts">8. Use NPM scripts</h3>
<p>I love npm-scripts! Instead of using task-runners like Gulp and Grunt for automating repetitive tasks you can, in most cases use npm-scripts instead for several reasons:</p>
<p>➕ Fewer dev-dependencies or global dependencies to maintain.<br>➕ No new tools for contributors and team members to learn<br>➕ Less code and configuration.</p>
<p>First of all, you have predefined scripts like <code>start, install, test, prepublish</code>that have special meanings in NPM. You can read about how they can be used in my <a href="https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c" rel="noopener">previous tutorial</a> where we build an npm-package from scratch.</p>
<p>You can also create your own custom scripts. Here is an example of a script that will format your code in the <code>src</code> folder with <a href="https://eslint.org/" rel="noopener">ESLint</a>:</p>
<p>package.json:</p><pre><code>"scripts":{"test": "jest","format": "eslint src --fix"}</code></pre>
<p>Now you can run <code>npm run format</code> and <a href="https://eslint.org/" rel="noopener">ESLint</a> will do its job.</p>
<p>You can do a lot of things with npm-scripts like running shell-commands and chaining scripts after each other. Check out <a href="https://docs.npmjs.com/misc/scripts" rel="noopener">npm-scripts</a> for a deeper understanding of this powerful feature.</p>
<h3 id="9-running-npm-scripts-in-vscode">9. Running NPM Scripts in vsCode</h3>
<p>Sometimes I have <strong><strong>30</strong></strong> npm-scripts in my package.json (No kidding). ? Luckily, if you are using <a href="https://code.visualstudio.com/" rel="noopener">Visual Studio Code</a>, you can list all your npm-scripts in the explorer and run your scripts with a click of a button! Be sure this setting is enabled:</p>
<p><code>npm.enableScriptExplorer: true</code></p>
<figcaption>Run your scripts with a click of a button! VSCode supports listing scripts from multiple packages at the same&nbsp;time.</figcaption>
</figure>
<h3 id="10-set-your-default-values">10. Set your default values</h3>
<p>When creating a new project, you will run <code>npm init</code> and you will be asked questions about your project. To save time you’ll probably write run <code>npm init -y</code> to fill in the package.json with default values.</p>
<p>But what exactly are your default values? ? I like to set some of these myself to save time further on! ?</p>
<p>npm config set init.author.name "Carl-Johan (C-J) Kihl"<br>npm config set init.author.email "carljohan.kihl@mail.com"</p>
<h3 id="summary">Summary</h3>
<p>Those was my tips for NPM for now! If you have more tips and tricks that you want to share please add a comment below! ?</p>
<p>? Bonus shortcut!<br>Imagine it’s Friday night and you’re about to finalize a new project, but you’re way too tired to write <code>npm dedupe</code> . ?</p>
<p>No worries! Save three letters by writing:</p>
<p><code>npm <strong><strong>ddp</strong></strong></code></p>
<p>Thank you for reading.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
