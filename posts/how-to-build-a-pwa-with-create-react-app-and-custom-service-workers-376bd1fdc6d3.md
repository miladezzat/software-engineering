---
card: "https://cdn-media-1.freecodecamp.org/images/1*ZFhS3HkqFBOeau1Amj4uBQ.jpeg"
tags: [JavaScript]
description: "Note: This is not a primer on create-react-app or what a serv"
author: "Milad E. Fahmy"
title: "How to build a PWA with Create-React-App and custom service workers"
created: "2021-08-16T11:39:15+02:00"
modified: "2021-08-16T11:39:15+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-webpack tag-progressive-web-app tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a PWA with Create-React-App and custom service workers</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*ZFhS3HkqFBOeau1Amj4uBQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*ZFhS3HkqFBOeau1Amj4uBQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*ZFhS3HkqFBOeau1Amj4uBQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*ZFhS3HkqFBOeau1Amj4uBQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*ZFhS3HkqFBOeau1Amj4uBQ.jpeg" alt="How to build a PWA with Create-React-App and custom service workers">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><strong>Note: This is not a primer on create-react-app or what a service worker is. This post assumes prior knowledge of both.</strong></p><p>So, I recently had the opportunity to work on a React project which involved publishing the resulting web application as a Progressive Web Application (PWA).</p><p>I realised what a struggle it is to get a PWA with custom routes configured inside of a Create React App (CRA) build. Hopefully this helps out someone stuck in a similar position.</p><h3 id="pwas-in-create-react-app"><strong>PWAs in Create-React-App</strong></h3><p>How exactly do we get a PWA running inside our CRA shell?</p><p>Now, the CRA shell bundles a service worker by default. You should have noticed that in a basic CRA shell, inside of the <code>index.js</code> file, there is a call to <code>registerServiceWorker</code>:</p><pre><code class="language-js">import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(&lt;App /&gt;, document.getElementById('root'));
registerServiceWorker();</code></pre><p>You can create a new CRA app and look inside the <code>registerServiceWorker</code> file.</p><p>It looks quite complex, but it is really just checking to see if the environment variables are set for a production build and if a <code>serviceWorker</code> is supported in the current browser.</p><p>If you run a build with the command <code>yarn build</code>, you can open up the build folder and check inside to see that a <code>service-worker.js</code> file has been generated. This is the default service worker file CRA generates for you.</p><p>The formatting of the file is inline ES5 JavaScript, which makes it a little hard to read. But you can dump it into any prettifier, and you should see a more legible file.</p><p>Looking into the above file should show you that it is simply creating a static cache with the following cache name: <code>sw-precache-v3-sw-precache-webpack-plugin-+(selg.registration ? self.registration.scope)</code>. It then caches all of your static files like <code>index.html</code> and your <code>js</code> and <code>css</code> files inside of that cache.</p><p>You should also see a <code>fetch</code> event listener in there that catches a fetch event and checks to see if the app is requesting one of the previously cached static assets.</p><p>Now comes the million dollar question: what if you want to configure a dynamic cache for a specific route? In essence, a cache that will update itself with data sent from the server when the user visits a specified route. Note that this means the data will not be available at build time, and therefore cannot be cached by the default service worker generated.</p><h3 id="limitations-of-default-pwas-in-cra"><strong>Limitations of default PWAs in CRA</strong></h3><p>Unfortunately, it’s not very easy to accomplish the above when using CRA. Unless you’re willing to <code>eject</code>, of course.</p><p>Take a look at these GitHub issues to see why the team at CRA won’t support customising the default service worker.</p><p><a href="https://github.com/facebook/create-react-app/issues/2237" rel="noopener"><strong>Custom ServiceWorker config · Issue #2237 · facebook/create-react-app</strong></a><br><a href="https://github.com/facebook/create-react-app/issues/2237" rel="noopener"><em>1.0.0 added Progressive Web App support, is it possible to support custom config in near future? I really don't want to…</em>github.com</a><a href="https://github.com/facebook/create-react-app/pull/2714" rel="noopener"><strong>Import scripts in Service Worker by piotr-cz · Pull Request #2714 · facebook/create-react-app</strong></a><br><a href="https://github.com/facebook/create-react-app/pull/2714" rel="noopener"><em>This PR adds an ability to use importScripts option of SWPrecacheWebpackPlugin. How-to: create a file called…</em>github.com</a></p><p>So, given that we can’t seem to customise the default service-worker, how do we work our way around it?</p><h3 id="understanding-how-cra-generates-a-service-worker"><strong>Understanding How CRA Generates A Service Worker</strong></h3><p>The first step to finding a work around for the build system is to actually understand how the build system works.</p><p>So, let’s start with the <a href="https://github.com/GoogleChromeLabs/sw-precache" rel="noopener">library</a> the build system uses to generate a service worker file.</p><p><code>sw-precache</code> is a library that allows you to generate a service worker file based on a template. The template file is written using underscore’s templating engine.</p><p><a href="https://github.com/GoogleChromeLabs/sw-precache/blob/master/service-worker.tmpl" rel="noopener">Here</a> is the link to the template file in the <code>sw-precache</code> source code.</p><p>Again, the template file looks complex, but it is quite straightforward once you manage to get your head around the templating language.</p><p>So, what happens when you run a build process in a CRA shell, in relation to generating a service worker, is:</p><ol><li>The <code>sw-precache</code> library is executed internally</li><li>An options object is provided to <code>sw-precache</code> to allow generation of the service worker file from the template</li><li>The service worker file is generated in the <code>build</code> folder with the name <code>service-worker.js</code></li></ol><h3 id="overriding-the-default-service-worker"><strong>Overriding The Default Service Worker</strong></h3><p>Now, how do we override the above process to allow our own custom service worker file to be generated?</p><p>The answer is based on Jeff Posnick’s (a maintainer of <code>sw-precache</code>) <a href="https://stackoverflow.com/questions/47636757/add-more-service-worker-functionality-with-create-react-app?rq=1" rel="noopener">stackoverflow answer</a>.</p><p>First, we need to run the<code>sw-precache</code> CLI after the normal build process.</p><p>Install the <code>sw-precache</code> library by running the following command: <code>npm install --save-dev sw-precache</code></p><p>Now, the <code>sw-precache</code> library runs on a config file, which is provided via an option on the CLI. This is the command: <code>sw-precache --config=sw-precache-config.js</code> , where <code>sw-precache-config.js</code> is the name of the config file.</p><p>Here is a sample config file.</p><pre><code>module.exports = {
staticFileGlobs: [
'build/static/css/**.css',
'build/static/js/**.js'
],
swFilePath: './build/service-worker.js',
templateFilePath: './service-worker.tmpl',
stripPrefix: 'build/',
handleFetch: false,
runtimeCaching: [{
urlPattern: /this\\.is\\.a\\.regex/,
handler: 'networkFirst'
}]
}</code></pre><p><strong>Note: </strong>It is important that you specify the swFilePath as <code>./build/service-worker.js</code> This is so that the service worker generated as a result of your custom build process overwrites the one created by CRA (they both share the same name, in this instance). Otherwise, you will end up with two service worker files in your build directory!</p><p>There is extensive documentation on the object properties and what valid values can be assigned to them on the <a href="https://github.com/GoogleChromeLabs/sw-precache" rel="noopener">GitHub page</a> for <code>sw-precache</code>.</p><p>Of special interest is the runtimeCaching option, because this is a very extensible solution to allow you to define custom rules for your service worker to respond to dynamic content.</p><p>The templateFilePath is an option for when you want the CLI to pick up your custom service worker template file. But you’re almost always going to be using the template file provided by the library itself.</p><p>Finally, we need to provide the script to signal to the CRA build system that we want our custom service worker to be generated. Go ahead and install the <code>sw-precache</code> library.</p><p>Next, update the package.json build script, with the following:</p><p><code>build: react-scripts build &amp;&amp; sw-precache --config=sw-precache-config.js</code></p><p>Once you run the build process with <code>npm run build</code>, you can open up the build folder and see your generated service worker.</p><p>Run the build process with and without the custom service worker and notice the differences between the two.</p><h3 id="conclusion"><strong>Conclusion</strong></h3><p>While this may seem like a very verbose approach to something as simple as customising a service worker, this approach has the benefit of keeping you firmly within the create-react-app shell.</p><p>There are other approaches to generating a custom service worker (using a combination of <a href="https://github.com/timarney/react-app-rewired" rel="noopener">react-app-rewire</a> and <a href="https://github.com/GoogleChrome/workbox" rel="noopener">workbox</a>). I’ll try and get that approach up in a post as well.</p>
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
