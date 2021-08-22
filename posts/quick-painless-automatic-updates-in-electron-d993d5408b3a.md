---
card: "https://cdn-media-1.freecodecamp.org/images/1*afd_KNE6oIHoqycO5GlDXA.jpeg"
tags: [JavaScript]
description: by Andrea Zanin
author: "Milad E. Fahmy"
title: "Quick, painless, automatic updates in Electron"
created: "2021-08-15T19:50:11+02:00"
modified: "2021-08-15T19:50:11+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-development tag-front-end-development tag-software-development ">
<header class="post-full-header">
<h1 class="post-full-title">Quick, painless, automatic updates in Electron</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*afd_KNE6oIHoqycO5GlDXA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*afd_KNE6oIHoqycO5GlDXA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*afd_KNE6oIHoqycO5GlDXA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*afd_KNE6oIHoqycO5GlDXA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*afd_KNE6oIHoqycO5GlDXA.jpeg" alt="Quick, painless, automatic updates in Electron">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Andrea Zanin</p>
<h1 id="quick-and-painless-automatic-updates-in-electron">Quick and painless automatic updates in Electron</h1>
<p>Let’s face it: most users won’t go back to your site and download the updates for your brand new Electron app. Instead, you should put in place some kind of automatic update system.</p>
<p>Unfortunately, the online documentation for this is neither very easy to find nor follow. Here, I will guide you through a quick process to setup an auto-updater, using GitHub as a host.</p>
<h3 id="setting-up-the-repository">Setting up the repository</h3>
<p>To publish on your behalf, electron-builder needs a GitHub access token. If you don’t know what these are or how to create one, check out GitHub’s <a href="https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/" rel="noopener">quick guide</a>.</p>
<p>Electron-builder needs a token with access to the repo scope. Create one as described in the link, and copy it somewhere safe (you will only be shown the token once!).</p>
<h3 id="setting-up-the-library">Setting up the library</h3>
<p>We are going to use <a href="https://github.com/electron-userland/electron-builder" rel="noopener">electron-builder</a> to package our app, so let’s start by installing it:</p><pre><code>npm install electron-builder --save-dev</code></pre>
<p>Let’s also install <a href="https://github.com/electron-userland/electron-builder/tree/master/packages/electron-updater" rel="noopener">electron-updater</a> to handle the automatic updates:</p><pre><code>npm install electron-updater --save</code></pre>
<p>Then, we need to configure our build. In the <code>package.json</code> add this snippet:</p>
<p>Let’s analyze this bit by bit:</p>
<ul>
<li>The <code>repository</code> link is pretty self explanatory — just remember to replace it with yours!</li>
<li>The <code>build</code> script will build your app locally, without publishing.</li>
<li>The <code>ship</code> script will build and publish your app.</li>
</ul>
<p><strong>Note for React developers</strong>: electron-builder and create-react-app have some conflicts by default. I created a generator that sets up an electron+react+electron-builder app with zero configuration needed. You can find it <a href="https://www.npmjs.com/package/generator-react-electron" rel="noopener">here</a>.</p>
<p>Now create a file called<code>electron-builder.yml</code> with the following content:</p>
<ul>
<li>The <code>appId</code> is the name of your application in the Operating System register. You can choose it freely.</li>
<li>The <code>provider</code> is the platform that will store your application’s installer.</li>
<li>The <code>token</code> is the GitHub access token. Substitute it with the one you created earlier.</li>
</ul>
<p>Remember to add this file to the <code>.gitignore</code> so that you don’t share your token with the whole world! ;)</p>
<h3 id="handling-the-update-logic">Handling the update logic</h3>
<p>Now we need to configure the update logic in our Electron app. Integrate this in your entry file (usually <code>index.js</code> or <code>electron.js</code>). If you are creating a brand new app, then you can simply copy-paste the code below:</p>
<p>IPC modules are the standard way to send messages between processes in Electron. You can learn more about them <a href="https://github.com/electron/electron/blob/master/docs/api/ipc-main.md" rel="noopener">here</a>.</p>
<p>The code is pretty self-explanatory and handles the Electron side of the update. Now we have to notify the user.</p>
<p>Here is an example of a HTML page. It displays a button whose caption is either “no updates ready” or “new version ready!”. When the button is clicked, a method is called which tells Electron to quit and install the new updates.</p>
<h3 id="and-finally-ship">And finally, ship</h3>
<p>When you are ready to publish, edit the <code>version</code> field in the <code>package.json</code>and run the following command:</p><pre><code>npm run ship</code></pre>
<p>Go to your repository’s GitHub page and click ‘releases’ (it’s on the same line as ‘commits’<em> </em>and ‘branch’). There, you will find a draft release. Click ‘edit’<em> </em>and then ‘publish release’.</p>
<p>Don’t panic if the button shows “no updates ready” when you start the app. This will only change after it has finished downloading the new version.</p>
<p>If you want to use a functioning project to learn more and get started, you can clone <a href="https://github.com/ZaninAndrea/electron-autoupdate-example" rel="noopener">this example repository</a>.</p>
<p>If you found this article helpful, be sure to clap ?.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
