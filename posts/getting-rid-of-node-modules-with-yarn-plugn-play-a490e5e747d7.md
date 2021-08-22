---
card: "https://cdn-media-1.freecodecamp.org/images/1*qYAlY8Iq5S4knk93upSneA.jpeg"
tags: [Yarn]
description: by Alcides Queiroz
author: "Milad E. Fahmy"
title: "Getting rid of node_modules with Yarn Plug’n’Play"
created: "2021-08-15T19:37:15+02:00"
modified: "2021-08-15T19:37:15+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-yarn tag-nodejs tag-javascript tag-tech tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">Getting rid of node_modules with Yarn Plug’n’Play</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*qYAlY8Iq5S4knk93upSneA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*qYAlY8Iq5S4knk93upSneA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*qYAlY8Iq5S4knk93upSneA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*qYAlY8Iq5S4knk93upSneA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*qYAlY8Iq5S4knk93upSneA.jpeg" alt="Getting rid of node_modules with Yarn Plug’n’Play">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Alcides Queiroz</p>
<h1 id="how-to-get-rid-of-node_modules-with-yarn-plug-n-play">How to get rid of node_modules with Yarn Plug’n’Play</h1>
<h4 id="reduce-your-install-time-up-to-70-ask-me-how-">Reduce your install time up to 70%. Ask me how! ?</h4>
<p>Anyone who knows me can confirm that I’m a long-standing lover of JavaScript and its entire <em>ecosystem</em>. As a Front-end engineer, Node-based package managers have been a crucial part of my toolset since 2013.</p>
<p>First, I used Bower, which was primarily focused on the front-end world. Then, in 2015, I sadly (ok, <em>not really</em>) realized that Bower was dying and NPM, the default package manager for Node, was the way to go for the front-end too. It was strange for me, at first, to use NPM for other things than Node modules, but I got used to the idea and migrated seamlessly.</p>
<p>Finally, just one year later, Facebook gave us Yarn, a modern and blazing fast alternative to NPM. I loved it at first sight! <strong>But some things were still problematic…</strong></p>
<h3 id="inherited-problems-in-yarn">Inherited problems in Yarn</h3>
<p>Besides the speed, Yarn brought a number of advantages when compared to the NPM version at the time, such as lock files, offline mode, network resilience, checksums and others. Nevertheless, Yarn borrowed some known problems from NPM:</p>
<h4 id="node_modules-here-there-everywhere">node_modules here, there, everywhere</h4>
<p>For each project on your machine that uses NPM or Yarn, a <code>node_modules</code> folder is created. It doesn't matter if 10 projects use the exact same version of a given module, it will be copied over and over into each <code>node_modules</code> folder of these projects.</p>
<h4 id="generating-a-new-node_modules-folder-takes-a-really-long-time">Generating a new node_modules folder takes a really long time</h4>
<p>Even taking a great leap forward in terms of installation speed, Yarn was constrained by node_modules limitations. Just creating the node_modules folder takes up to 70% of the time needed to run <code>yarn install</code> (with a warm cache). <strong>It's a huge amount of files to be created on every installation.</strong> So, don't blame it on Yarn.</p>
<h4 id="dependencies-not-added-to-package-json">Dependencies not added to package.json</h4>
<p>Here’s a scenario for you: Your app works perfectly in development, but crashes in production. After hours of investigation, you finally realize that you forgot to add a dependency to your <code>package.json</code>. <strong>Yes, it can happen.</strong></p>
<h4 id="slow-module-resolution-at-runtime">Slow module resolution at runtime</h4>
<p>The boot time of your app is heavily impacted by the way Node resolves dependencies. It wastes time querying the file system to discover where a given dependency will be resolved from.</p>
<h3 id="yarn-plug-n-play-to-the-rescue-">Yarn Plug’n’Play to the rescue!</h3>
<p>All of the above problems were addressed by the Yarn team with the release of the Plug’n’Play feature last September.</p>
<p>When you enable PnP, instead of copying every needed file from the cache to the <code>node_modules</code> folder, here's what Yarn does:</p>
<ol>
<li>It creates a single file with static resolution tables. These tables will contain a bunch of important info, such as: packages available in the dependency tree, how they relate between themselves and their location on the disk.</li>
<li>A special resolver is used in order to help Node discovering where each dependency has been installed (under the Yarn cache folder). It solely relies on the resolution tables which were created previously. As these tables contain information about the entire dependency tree, the node_modules resolution process won’t need to make a lot of <code>stat</code> and <code>readdir</code> calls at runtime anymore, significantly reducing your app boot time. And as Yarn knows all of your dependencies, it will complain if you try to import a module that's not present in your <code>package.json</code>:</li>
</ol>
<h3 id="using-yarn-plug-n-play">Using Yarn Plug’n’Play</h3>
<p>Converting a project to make use of PnP is easy as 1–2–3. You just need to add a <code>installConfig</code> section to your <code>package.json</code>, with a <code>pnp</code> key set to <code>true</code>, like this one:</p><pre><code>{    "installConfig": {     "pnp": true   }}</code></pre>
<blockquote><strong>Note:</strong> You need Yarn v1.12+ in order to use Plug’n’Play.</blockquote>
<p>After that, just run <code>yarn install</code> and everything inside your <code>node_modules</code> folder will be deleted. From now on, every dependency will be resolved directly from Yarn's hot cache.</p>
<figcaption>“yarn install” clears your node_modules folder when PnP is enable</figcaption>
</figure>
<h4 id="using-pnp-in-a-new-react-project-with-create-react-app">Using PnP in a new React project with create-react-app</h4>
<p>If you use create-react-app 2+, the good news is that it works great with Yarn Plug’n’Play! Just append the <code>--use-pnp</code> option to the <code>create-react-app</code> command and you're good to go:</p><pre><code>npx create-react-app your-app-name --use-pnp</code></pre>
<h4 id="possible-issues">Possible issues</h4>
<p>As nothing is perfect in the world, PnP may incur new issues when used in projects relying on a custom install logic. If you need more info about these potential new issues, <a href="https://github.com/yarnpkg/rfcs/files/2378943/Plugnplay.pdf" rel="noopener">you can find a detailed explanation in this paper</a>.</p>
<h3 id="conclusion">Conclusion</h3>
<p>Plug’n’Play solves some really annoying problems in Yarn. Besides, it dramatically improves dependency caching on CIs, saving installation time and allowing our builds to get right to the point: <strong>running the tests!</strong></p>
<p>And that’s it! Have fun with Yarn PnP.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
