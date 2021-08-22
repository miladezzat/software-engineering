---
card: "https://cdn-media-1.freecodecamp.org/images/0*H9-QqXnBR8Rr6MhF"
tags: [JavaScript]
description: by Yazan Aabed
author: "Milad E. Fahmy"
title: "See How Easily You Can Upgrade To Webpack"
created: "2021-08-15T19:46:38+02:00"
modified: "2021-08-15T19:46:38+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-front-end-development tag-programming tag-development tag-learning ">
<header class="post-full-header">
<h1 class="post-full-title">See How Easily You Can Upgrade To Webpack</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*H9-QqXnBR8Rr6MhF 300w,
https://cdn-media-1.freecodecamp.org/images/0*H9-QqXnBR8Rr6MhF 600w,
https://cdn-media-1.freecodecamp.org/images/0*H9-QqXnBR8Rr6MhF 1000w,
https://cdn-media-1.freecodecamp.org/images/0*H9-QqXnBR8Rr6MhF 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*H9-QqXnBR8Rr6MhF" alt="See How Easily You Can Upgrade To Webpack">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Yazan Aabed</p>
<h1 id="see-how-easily-you-can-upgrade-to-webpack">See How Easily You Can Upgrade To Webpack</h1>
<p><em>I’ve written this article to narrate the adventure that happened to me when upgrading an AngularJS project from Grunt to Webpack.</em></p>
<figcaption>Photo by <a href="https://unsplash.com/@tfrants?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Tyler Franta</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>You can follow me on <a href="https://twitter.com/YazanAabed" rel="noopener">twitter</a> or check my latest articles on <a href="https://www.yaabed.com/" rel="noopener">my site yaabed.com</a>. Also, I have my publication at <a href="https://medium.com/yazanaabed" rel="noopener">medium blog.yaabed.com</a>.</p>
<p>The main problem that existed was about 500 items thrown on the window object. This allows you to access them any place you need. It also makes the window the navigation tool for modules and components. The project becomes more coupled, and you don’t know who is using them.</p>
<p>Files are structured using the module architecture but without using <code>angular.module.</code> Files are divided into folder by name like HomePage. The HomePage folder contains its controller, style, and view.</p>
<p>The first thing that came to mind was refactoring the whole app to use webpack, modules, babel, and es6. After researching, it is possible to do this without any refactoring of the codebase. But, there are many problems to solve before I start adding webpack to the project.</p>
<h3 id="problems-to-consider-before-starting-to-work"><strong>Problems to consider before starting to work</strong></h3>
<ul>
<li>How to solve the window object problem, because webpack shows files as a tree of files talking to each other.</li>
<li>How to make fewer changes to the project without merging issues.</li>
<li>How to split between development and production for the webpack.</li>
<li>How to remove bower dependencies, because webpack mainly resolves modules from npm.</li>
<li>How upgrades to webpack solve the big size of JavaScript files.</li>
</ul>
<figcaption><a href="https://www.pexels.com/photo/technology-computer-desktop-source-code-113850/" rel="noopener" target="_blank" title="">https://www.pexels.com/photo/technology-computer-desktop-source-code-113850/</a></figcaption>
</figure>
<h3 id="start-to-break-things-into-steps">Start to break things into steps</h3>
<h4 id="upgrade-the-node-version-from-0-10-to-the-latest-version-available">Upgrade the node version from 0.10 to the latest version available</h4>
<p>Before I started moving to using webpack, I needed to upgrade the Node version that webpack v3 works with. But, Grunt is using deprecated things — so when I updated the Node version, nothing worked! So I started to fix the errors one by one to make sure upgrading was possible.</p>
<p>First, an error accrued on old <code>grunt-sass</code> &amp; <code>node-sass</code>. It’s not supported anymore for this version of Node. To fix this, I upgraded <code>grunt-sass</code> from ‘0.18.1’ to ‘2.0.0’, then upgraded <code>node-sass</code> to be ‘4.7.2’.</p>
<p>Secondly, trying to upgrade grunt from ‘0.4.5’ to ‘1.0.0’ didn’t work, because the grunt plugins need grunt@0.4.5 as peer dependency. So I stuck with 0.4.5 version.</p>
<h4 id="fixing-errors-shown-on-express-node-server">Fixing errors shown on express node server</h4>
<p>I had to fix errors with express Node server, because the bodyParser constructor is deprecated and needs to changed. I changed from</p>
<p>to</p>
<h4 id="remove-deprecated-things">Remove deprecated things</h4>
<ul>
<li>Debug attribute from <code>grunt-express</code> because it is deprecated on the node-inspector new version.</li>
<li>Remove the bower-install task from the project.</li>
</ul>
<h4 id="start-adding-webpack">Start adding webpack</h4>
<p>I added webpack to the project using <code>npm install webpack--save-dev</code>. Then I added the `webpack.config.json` file.</p>
<p>When I started this step, I got stuck because the project structure has no entry point. The whole project depends on one source which is the window. Webpack needs an entry point to start with and an output point to end with.</p>
<p>To solve this, I created an entry point. I set all the needed files on it and named it the same name on GruntJS config to concatenate it as the old Build did. But this was going to take a long time, because about 550 items were included in index.html.</p>
<p>To solve this problem, I used a RegExp <code>/”(.*?)"/ig</code> and replaced the values by <code>require(src)</code>to get the sources from the src attribute and convert it to <code>require(src).</code> I pasted it to the <code>entry.js</code> on the same order as the old index.html.</p>
<p>After this, the result was a significant JS file containing all scripts. But nothing worked! After investigating what was happening, it seemed that webpack was working by default as modules. If there are exports or export default on the same file, nothing will be exported to the outside even if you include it using require js.</p>
<p>Before searching for a way to solve this, I start adding module.exports to all files needing to be exported — before clearly understanding how webpack works! After two days of working, I found that there is something called loaders which solve the problem.</p>
<p>By adding this to <code>webpack.config.js</code>, all the files were now available as the old behavior!</p>
<p>And everything was now working.</p>
<h4 id="next-step">Next step</h4>
<p>After I made the project works with Grunt, I needed to make sure both webpack and Grunt worked together. So I made tests to make sure I didn’t miss anything.</p>
<p>To make this happen, I create a new file called <code>inject-HTML.files.json.</code> This file contains all source files to use with <code>usemenPrepare</code> on Grunt and webpack to create the entries as multiple items as arrays taken from the inject-HTML files JSON.</p>
<figcaption>I love this image, write code and drink some coffee :) <a href="https://www.pexels.com/photo/high-angle-view-of-coffee-cup-on-table-317385/" rel="noopener" target="_blank" title="">https://www.pexels.com/photo/high-angle-view-of-coffee-cup-on-table-317385/</a></figcaption>
</figure>
<h4 id="update-the-old-grunt-config-file">Update the old Grunt config file</h4>
<h4 id="add-files-to-concat">Add files to concat</h4>
<h4 id="check-if-webpack-builds-then-remove-the-js-from-configurations">Check if Webpack builds, then remove the JS from configurations</h4>
<h4 id="add-new-npm-script">Add new npm script</h4>
<h4 id="webpack-config-js-file">Webpack.config.js file</h4>
<h4 id="webpack-prod-js-file">Webpack.prod.js file</h4>
<h3 id="motivations">Motivations</h3>
<h4 id="maintainability-and-code-quality">Maintainability and Code Quality</h4>
<ul>
<li>Solve the problem with creating files, as the project is growing fast.</li>
<li>Solve the problem that there are too many things attached to the window without reason.</li>
<li>Make the codebase easier to understand.</li>
</ul>
<h4 id="development-efficiency">Development Efficiency</h4>
<ul>
<li>Bower is now deprecated.</li>
<li>Can’t use any things on npm packages, because the build process does not provide this.</li>
</ul>
<h4 id="performance">Performance</h4>
<ul>
<li>Files sizes are growing bigger every day, so need to introduce a solution to split the code.</li>
<li>Being able to split files and defer loading until needed saves unnecessary transfer and parsing.</li>
</ul>
<h4 id="code-splitting">Code splitting</h4>
<ul>
<li>After use, webpack Code splitting will be easier to use.</li>
<li>Split new features into modules-based.</li>
</ul>
<p>Finally, using the npm packages is a game changer. The goal was to make the codebase easy for other developers. Also, we proved that it’s possible to upgrade your system wisely even if your code base is terrible.</p>
<p>Rewriting the whole app is a disaster, because you are potentially wasting years of hard work. Instead, try to make your codebase more readable, maintainable, and modular. When the old code needs refactoring, you can do it step by step.</p>
<p>Don’t get stuck with your old codebase and say you can’t do anything to it. Try to make changes by yourself — live with new things, new updates, and new technologies that will make you happy.</p>
<p>This is my first time writing for people! If you liked this article, please share it with other people around you.</p>
<p><strong><em>I am writing at <a href="https://medium.com/yazanaabed" rel="noopener">blog.yaabed.com</a>. If you enjoyed this article please make sure to share it with other people. And don’t forget to hit the follow button for more articles like this, also <a href="https://twitter.com/YazanAabed" rel="noopener">follow me on twitter</a>.</em></strong></p>
<blockquote>Hi my name is <a href="https://www.yaabed.com/" rel="noopener">Yazan Aabed</a>. Grown up in Palestine. My major was in computer science. I am a Frontend Engineer &amp; JavaScript lover ??‍?. Mostly working with Frontend frameworks like (AngularJs, ReactJS). You can call me #Geek ?. Also, I Like to share my knowledge with other people and learn from them ???. You can find me on GitHub,<a href="https://github.com/YazanAabeed" rel="noopener"> Mediu</a>m,<a href="https://medium.com/@yazanaabed" rel="noopener"> Twitt</a>er<a href="https://twitter.com/YazanAabed" rel="noopener">.</a></blockquote>
<p><a href="https://webpack.academy/" rel="noopener"><strong>webpack learning academy</strong></a><br><a href="https://webpack.academy/" rel="noopener"><em>webpack learning academy exists to provide curated, high-quality learning content, devoted to the webpack open source…</em>webpack.academy</a><a href="https://medium.com/appifycanada/migrate-to-webpack-from-grunt-bower-legacy-build-system-344526f47873" rel="noopener"><strong>From Grunt and Bower to Webpack, Babel and Yarn — Migrating a legacy front-end build system</strong></a><br><a href="https://medium.com/appifycanada/migrate-to-webpack-from-grunt-bower-legacy-build-system-344526f47873" rel="noopener"><em>The build system that I had inherited for the International Cancer Genome Consortium’s Data Portal was fairly modern…</em>medium.com</a><a href="https://medium.com/eventmobi/how-to-incrementally-switch-to-webpack-203a1b431f7a" rel="noopener"><strong>How to Incrementally Switch to webpack</strong></a><br><a href="https://medium.com/eventmobi/how-to-incrementally-switch-to-webpack-203a1b431f7a" rel="noopener"><em>This is the second of a two-part series on why and how we switched our JavaScript bundling system from an ad hoc system…</em>medium.com</a><a href="https://medium.com/eventmobi/why-we-switched-to-webpack-69b7396f3ec5" rel="noopener"><strong>Why We Switched to webpack</strong></a><br><a href="https://medium.com/eventmobi/why-we-switched-to-webpack-69b7396f3ec5" rel="noopener"><em>This is the first of a two-part series on why and how we switched our JavaScript bundling system from an ad hoc system…</em>medium.com</a><a href="https://advancedweb.hu/2016/02/02/the-first-steps-from-grunt-to-webpack/" rel="noopener"><strong>The first steps from Grunt to Webpack</strong></a><br><a href="https://advancedweb.hu/2016/02/02/the-first-steps-from-grunt-to-webpack/" rel="noopener"><em>Getting started with Webpack after using Grunt</em>advancedweb.hu</a><a href="https://blog.serverdensity.com/the-journey-to-webpack/" rel="noopener"><strong>The Journey to Webpack - Server Density Blog</strong></a><br><a href="https://blog.serverdensity.com/the-journey-to-webpack/" rel="noopener"><em>By Kerry Gallagher, of Server Density. Published on the 6th January, 2016. For the past couple of years we built the…</em>blog.serverdensity.com</a></p>
<blockquote><a href="https://www.reddit.com/r/javascript/comments/42z1xl/discussion_how_did_we_go_from_grunt_to_gulp_to/?ref_source=embed&amp;ref=share">[discussion] How did we go from Grunt to Gulp to Webpack?</a> from &nbsp; &nbsp; &nbsp; <a href="https://www.reddit.com/r/javascript/">javascript</a></blockquote>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
