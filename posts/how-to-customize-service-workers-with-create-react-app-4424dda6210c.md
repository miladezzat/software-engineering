---
card: "https://cdn-media-1.freecodecamp.org/images/1*8ZTUXbW0X2a2ck85dNxQtA.jpeg"
tags: [JavaScript]
description: This is a follow up to my previous post about building a PWA
author: "Milad E. Fahmy"
title: "How to customize service workers with create-react-app"
created: "2021-08-15T19:42:25+02:00"
modified: "2021-08-15T19:42:25+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-tech tag-programming tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">How to customize service workers with create-react-app</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*8ZTUXbW0X2a2ck85dNxQtA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*8ZTUXbW0X2a2ck85dNxQtA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*8ZTUXbW0X2a2ck85dNxQtA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*8ZTUXbW0X2a2ck85dNxQtA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*8ZTUXbW0X2a2ck85dNxQtA.jpeg" alt="How to customize service workers with create-react-app">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>This is a follow up to my <a href="https://medium.freecodecamp.org/how-to-build-a-pwa-with-create-react-app-and-custom-service-workers-376bd1fdc6d3" rel="noopener">previous post</a> about building a PWA with create-react-app (CRA). In the linked post, I discussed how we could go about building a custom Service Worker (SW) while staying within the create-react-app shell.</p>
<p>If you followed along with the post (and hopefully got it working), you’d have noticed one critical flaw. It is still extremely hard to develop a SW in a dev environment. Essentially, you’d have to modify your SW code, run a build process, test it out, iron out any bugs, refresh and repeat. Speaking from experience, it is an exhausting process.</p>
<p>Let’s go ahead and figure out how to solve that problem.</p>
<h3 id="working-in-dev-mode"><strong>Working In Dev Mode</strong></h3>
<p>Okay, so how do we get a SW running in dev mode, so we can quickly write some bad code, and figure out what works and what doesn’t?</p>
<p>First, let’s figure out why it doesn’t work in dev mode. Create a fresh CRA project, and open up the <code>registerServiceWorker.js</code> under the <code>src</code> directory.</p>
<p>In the above gist, I only have the relevant piece of code. You will notice a conditional check <code>process.env.NODE_ENV === 'production'</code>. This is checking to see if you are running a production build. If you aren’t running a production build, the SW will be replaced by a no-op file.</p>
<p>The reasoning behind this decision is provided in this <a href="https://github.com/facebook/create-react-app/issues/2396" rel="noopener">GitHub issue</a>.</p>
<p>First, try and run <code>yarn start</code> on your app and check for a SW file in the toolbar window. If you click on the <code>service-worker.js</code> link in the toolbar, you will be shown the following file:</p>
<p>Fortunately, there is a simple fix for this. It’s an easy two-step process.</p>
<p>First, inside of the <code>registerServiceWorker.js</code> file, look for the <code>window.addEventListener('load')</code> function call. The first line is a declaration for <code>swUrl</code> which says:</p><pre><code>const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;</code></pre>
<p>Rename the <code>service-worker</code> part of it with anything else. I’m going to name mine <code>service-worker-custom.js</code>.</p>
<p>Second, create a file inside of your public directory with the <strong>exact same name </strong>as the custom name you just came up with. So, I would create a file called <code>service-worker-custom.js</code> inside of the public directory.</p>
<p>Now, inside of the <code>service-worker-custom.js</code> , place a simple log statement. Something like: <code>console.log('My custom service worker')</code>.</p>
<p>Now, run your app again with <code>yarn start</code> and you should see the log statement pop up in your browser console. You might need to unregister a previous service worker if you ever ran yarn start prior to this.</p>
<p>So, there you have it. A custom service worker that you can run safely inside of dev mode.</p>
<p><strong>Note: It is unwise to test a service worker in a dev env outside of private browsing mode in your browser. Also, always make sure Update On Reload is checked inside your dev tools window when testing in dev mode.</strong></p>
<h3 id="combining-dev-and-prod"><strong>Combining Dev and Prod</strong></h3>
<p>Now, we’ve figured out how to test a SW in dev mode. However, we also need to find a way to inject our custom code into the SW generated by CRA in a production build.</p>
<p>If you keep everything as is with the configurations we’ve made so far and run a build process and check the build in your browser, you will notice that the SW file generated is the custom one we created. This is a problem, because we want to be able to combine the goodness of what CRA has to offer us with our own code.</p>
<p>We can do this with the<code>sw-precache</code> library. I introduced this library in my <a href="https://medium.freecodecamp.org/how-to-build-a-pwa-with-create-react-app-and-custom-service-workers-376bd1fdc6d3" rel="noopener">previous post</a>. Here is the <a href="https://github.com/GoogleChromeLabs/sw-precache" rel="noopener">GitHub link</a> to the <code>sw-precache</code> library.</p>
<p>Install the library with <code>yarn add sw-precache</code> . Once you’ve done that, create a <code>sw-precache-config.js</code> file in your root directory. Here is my file:</p>
<p>I’ve introduced most of this file in the <a href="https://medium.freecodecamp.org/how-to-build-a-pwa-with-create-react-app-and-custom-service-workers-376bd1fdc6d3" rel="noopener">previous post</a>. The only new bit is the <code>importScripts</code> option. This is fairly self-explanatory, it simply imports the file specified by the path, and we are trying to import our custom SW file.</p>
<p>You will notice that the path of the file lacks the <code>./public</code> prefix, despite the file being present in our <code>public</code> directory. I’ll explain this in a bit.</p>
<p>Now, update your <code>package.json</code> file with a modification to the <code>build</code> command. Make your <code>build</code> command the following:</p>
<p><code>react-scripts build &amp;&amp; sw-precache --config=sw-precache-config.js</code></p>
<p>Now, let’s go back to the file path we provided to the importScripts option. If you notice, the <code>sw-precache</code> is essentially running as a post build process. Now, if you just run a build process, and open up the build directory that is created, you will notice your custom service worker file in the build folder. When we provide a path to the <code>importScripts</code> option, we are providing it relative to the build directory!</p>
<p>Once, you’ve done all of that, go ahead and run the build version of your app, and you will notice that the log statement pops up once again in your browser console.</p>
<p>Well, there you have it! You can now inject some custom SW code into the default SW generated by CRA!</p>
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
