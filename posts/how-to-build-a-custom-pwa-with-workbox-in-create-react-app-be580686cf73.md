---
card: "https://cdn-media-1.freecodecamp.org/images/1*Sp2Kk29yH_3VsOeB4i1dpg.jpeg"
tags: [JavaScript]
description: "Note: This is the third in a series of posts about PWAs insid"
author: "Milad E. Fahmy"
title: "How to build a custom PWA with Workbox in create-react-app"
created: "2021-08-15T19:41:42+02:00"
modified: "2021-08-15T19:41:42+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-tech tag-programming tag-progressive-web-app ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a custom PWA with Workbox in create-react-app</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Sp2Kk29yH_3VsOeB4i1dpg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*Sp2Kk29yH_3VsOeB4i1dpg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*Sp2Kk29yH_3VsOeB4i1dpg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Sp2Kk29yH_3VsOeB4i1dpg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Sp2Kk29yH_3VsOeB4i1dpg.jpeg" alt="How to build a custom PWA with Workbox in create-react-app">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><strong>Note: </strong>This is the third in a series of posts about PWAs inside of React. For a quick primer, see the previous two posts <a href="https://medium.freecodecamp.org/how-to-build-a-pwa-with-create-react-app-and-custom-service-workers-376bd1fdc6d3" rel="noopener">here</a> and <a href="https://medium.freecodecamp.org/how-to-customize-service-workers-with-create-react-app-4424dda6210c" rel="noopener">here</a>.</p>
<p>In this follow up post, I’m going to take you through how to build a custom Progressive Web App (PWA) using <a href="https://developers.google.com/web/tools/workbox/" rel="noopener">Google’s Workbox library</a> without ejecting from the create-react-app (CRA) shell.</p>
<p>Workbox is a collection of libraries that make it easier to build offline functionality. Workbox is also considered the successor to the <code>sw-precache</code> library, which CRA uses to generate a default SW.</p>
<p>There has been some talk about CRA migrating from <code>sw-precache</code> to Workbox (reference <a href="https://github.com/facebook/create-react-app/issues/2340" rel="noopener">this issue</a> for details). Unfortunately, nothing seems to have come of it quite yet.</p>
<h3 id="goals"><strong>Goals</strong></h3>
<ol>
<li>Configure the CRA build to use <a href="https://github.com/timarney/react-app-rewired" rel="noopener">react-app-rewired</a>. (react-app-rewired is a library to configure the default CRA build without ejecting)</li>
<li>Use react-app-rewired to customize the build to use Workbox to generate a service worker</li>
<li>Build a very simple todo app</li>
<li>Implement offline functionality for the todo app using Workbox. <br>The offline functionality we will be targeting:<br>a) Cache retrieved assets so they can be served offline<br>b) Allow POSTing of data offline</li>
</ol>
<h3 id="introducing-workbox-into-cra"><strong>Introducing Workbox into CRA</strong></h3>
<p>First, create a fresh CRA repository with the following command:</p><pre><code>npx create-react-app react-app-rewire-workbox</code></pre>
<p>This should set up a new folder with the relevant name. Once you have this folder set up, cd into the folder and create a service worker file in the public folder. I’ll call mine <code>custom-service-worker.js</code>.</p>
<p>Once, you’ve done this, go ahead and remove the check for <code>NODE_ENV</code> being set to PRODUCTION inside of <code>registerServiceWorker.js</code></p>
<p>Finally, inside of the <code>custom-service-worker.js</code> file, paste the following code:</p>
<p>This code snippet is something I’ve picked up straight from the <a href="https://developers.google.com/web/tools/workbox/guides/get-started" rel="noopener">Workbox website</a>. You use the <code>importScripts</code> line to inject a global variable named <code>workbox</code> into your file. The script your are importing is served via a CDN. You then have a simple check to see if the variable was loaded correctly by the script or not.</p>
<p>So, we now have Workbox working for us in a dev environment. Next, let’s figure out how to implement <code>react-app-rewired</code> into CRA.</p>
<h3 id="implementing-react-app-rewired-in-cra"><strong>Implementing react-app-rewired In CRA</strong></h3>
<p>Add the <code>react-app-rewired</code> package to your project folder by using the following command:</p><pre><code>npm install --save-dev react-app-rewired</code></pre>
<p>Now, if you read <a href="https://github.com/timarney/react-app-rewired" rel="noopener">the docs</a>, they mention that you need to set up a <code>config-overrides.js</code> file in the root directory of your project. Let’s figure out what this does first.</p>
<p>I’ll set up a barebones file and explain to you what it means. There is a very detailed explanation of this in <a href="https://github.com/timarney/react-app-rewired#extended-configuration-options" rel="noopener">the docs</a>, if you wish to read that instead.</p>
<p>You can export an object from this file with three keys: webpack, jest, devServer. The respective functions allow you to configure the webpack production server configuration, the jest configuration, and finally the webpack development server configuration.</p>
<p>If you look at the <code>devServer</code> key in the <code>config-overrides.js</code> file, you will notice that we are logging <code>configFunction.toString()</code> instead of just <code>configFunction</code> . This is because if you try the latter, Node will just print <code>[Function]</code> to the console.</p>
<p>Open up your <code>package.json</code> file and replace the scripts command for start with <code>react-app-rewired start</code> .</p>
<h3 id="building-the-todo-app"><strong>Building The Todo App</strong></h3>
<p>So far, we have managed to introduce Workbox into our dev environment, and have also introduced <code>react-app-rewired</code> into our CRA shell. Let’s leave things as they are and build a sample todo app, and get it running in the dev environment.</p>
<p>The todo app is going to need a couple of moving pieces, just so we can actually make use of service workers.</p>
<p>It’s going to involve:</p>
<ol>
<li>A basic UI layer (I’m going to completely ignore styling for this.)</li>
<li>A <code>json-server</code> we can request data from</li>
</ol>
<p>I’m not going into too much detail about setting this up, because its all fairly straightforward. I’ll include a link to a git repo with a working version of this app at the end of this article, so you can have a look at that.</p>
<p>Here is the Todo component I have written.</p>
<p>The component makes a fetch request to a <code>json-server</code> I have set up, and gets a response consisting of an array of todos. The component then renders these todos. Like I said, extremely simple.</p>
<p>To set up the <code>json-server</code> run the following command:</p><pre><code>npm install --save json-server</code></pre>
<p>Create a file called <code>db.json</code> with the following structure</p>
<p>Finally, run the following command in the terminal:</p><pre><code>json-server --watch db.json --port 8000</code></pre>
<p>This runs a local server on port 8000, and watches the <code>db.json</code> file for any changes. In case anything changes, the server restarts itself. Its a very simple way to mock a server for testing your app.</p>
<p>Finally, update your <code>App.js</code> file to reflect your new Todo component, and remove the default JSX from that file.</p>
<p>Fire up the app (inside of an incognito window) and take a look at what it looks like now. You should see a list of todos and an input box below them with a button to submit. Like I said, very simple UI.</p>
<p>Once you’ve got all that set up, let’s figure out a way to make this stuff work offline using Workbox.</p>
<p><strong>Note: </strong>While testing service worker functionality in a dev environment, always make sure you do so within a new incognito window each time. It makes testing and debugging much less of a headache because your data is not stored across sessions.</p>
<h3 id="implementing-caching-with-workbox"><strong>Implementing Caching With Workbox</strong></h3>
<p>Now, if you go ahead and open up the Chrome toolbar, you should see something that looks like the following under the Application tab.</p>
<figcaption>Google Chrome Developer Toolbar</figcaption>
</figure>
<p>Check the offline checkbox and then try to reload your webpage. It will probably fail with an error saying there was no network connection detected. If you look at the network tab, you will see a bunch of failed network requests.</p>
<p>The most obvious one that will fail is the request to our <code>json-server</code> to fetch the list of todos. Let’s fix that one first. Open up the <code>custom-service-worker.js</code> file and add in the following code</p><pre><code>workbox.routing.registerRoute(  'http://localhost:8000/todos',  workbox.strategies.networkFirst())</code></pre>
<p>This is setting up a caching strategy of <code>networkFirst</code> for any requests made to the<code>http://localhost:8000/todos</code> endpoint. The image below gives you a clear explanation of what the <code>networkFirst</code> strategy implies. You always check the network first, and only in case of the network failing do you go to the cache to fetch the resource. This is a typical strategy you might use when querying an API that is likely to provide fresh data.</p>
<figcaption>Network First strategy</figcaption>
</figure>
<p>Now, the app is still not going to load because we are still missing two important pieces. Namely, we are still not caching</p>
<ol>
<li>The JS bundle that is being served by our local dev server.</li>
<li>The <code>index.html</code> file</li>
</ol>
<p>Add the following code to <code>custom-service-worker.js</code></p><pre><code>workbox.routing.registerRoute(</code></pre><pre><code>  /\.(?:js|css|html)$/,</code></pre><pre><code>  workbox.strategies.networkFirst(),</code></pre><pre><code>)</code></pre><pre><code>workbox.routing.registerRoute(</code></pre><pre><code>  ‘http://localhost:3000',</code></pre><pre><code>  workbox.strategies.networkFirst()</code></pre><pre><code>)</code></pre>
<p>If you notice, the first route in the above code snippet is a <code>RegEx</code> object. This is a clean and simple way to target multiple routes with the same strategy. However, if you are targeting a resource that doesn’t follow the same origin policy, make sure to specify the entire route.</p>
<p>This is, of course, not the ideal way to do things. Ideally, we want static assets like JS bundles, stylesheets and HTML files pre-cached as part of the Webpack build process. We will get to that, but its important to understand that there is no black magic going on. This is all just simple caching.</p>
<p>Go ahead and fire up the page again and open up your console. You should see a bunch of logs by Workbox about routing. Go into offline mode, and refresh the page. You should see everything load just like normal. If you open up the workbox logs in the console, you will see Workbox printing out whether the network request failed or succeeded, and workbox’s response to that failure (see screenshot below):</p>
<figcaption>Workbox log in Chrome Dev Tools Window</figcaption>
</figure>
<h3 id="implementing-deferred-posting-of-data-with-workbox"><strong>Implementing Deferred POSTing Of Data With Workbox</strong></h3>
<p>Alright, next up: how do we POST data back to the server without a network connection?</p>
<p>First, let’s set up a way to POST data back online, and make sure it works. Update your <code>addTodo</code> function inside of your Todo component so it looks like the following:</p>
<p>All we’ve done is added a callback handler to <code>setState</code> so we can be notified when the state has updated. At this point, we’ve made a POST request to the <code>json-server</code> to update <code>db.json</code> with the new todo.</p>
<p>Try submitting a new todo, open up <code>db.json</code> and you should see the new todo added to your array of objects.</p>
<p>Now, try doing the exact same thing offline, and you should get a network error for obvious reasons. You will probably get a log statement that says: Failed to fetch.</p>
<p>The backgroundSync API uses something called SyncManager under the hood. You can read about it in the MDN docs <a href="https://developer.mozilla.org/en-US/docs/Web/API/SyncManager" rel="noopener">here</a>. Unfortunately, as you can see, SyncManager is not on the standards track and Chrome is the only browser that has a fully implemented spec. What this means is that Chrome is the only browser where this is guaranteed to work reliably.</p>
<p>We need to add some code to <code>custom-service-worker.js</code> to get the backgroundSync stuff working for us. Add the following code to the file:</p>
<p>We are making use of a background sync plugin that Workbox provides us with. The first parameter you provide to the constructor is the name of the queue you want Workbox to create when storing failed requests. The second parameter is an options object, where we are defining the maximum amount of time to attempt to replay requests within.</p>
<p>Finally, we register a new route with the POST method, and set up the strategy we want to use for caching. This is very similar to what we have already done with the exception of defining the type of request being made, and also having a plugin defined for our strategy.</p>
<p>Now, try running through the same scenario of submitting a todo without any network connection and observe what happens in the log. You will get a log that looks like the following screenshot.</p>
<figcaption>Workbox adds the failed request to a queue</figcaption>
</figure>
<p>You can look at the request that has been added by looking for indexedDB under the application tab in the Chrome DevTools window. Open up the listed subdirectories under the indexedDB dropdown menu, and you should see the request stored, waiting to be replayed.</p>
<p>Switch off the offline option in the DevTools window, and you should see a new Workbox log popup almost immediately. It will look like the following:</p>
<figcaption>Workbox log detailing that the failed request has been replayed and submitted</figcaption>
</figure>
<p>The image above involves Workbox replaying the failed request the moment it receives a sync request, and giving you the confirmation that your request has been successful. If you look at <code>db.json</code> now, you will notice that the new todo has been added to the file.</p>
<p>Well, there we go. We have a way to replay failed requests through a service worker now.</p>
<p>What we need to do next is to integrate a Webpack plugin so Workbox can cache static assets as part of the build process. This will get rid of the need to explicitly have a route to cache static assets inside of our Service Worker file.</p>
<h3 id="precaching-static-assets"><strong>Precaching Static Assets</strong></h3>
<p>This is going to be the final step. In this section, we are going to make the changes to CRA’s build process to force it to generate the Service Worker file using Workbox instead of <code>sw-precache</code>.</p>
<p>First up, install the following packages: <code>workbox-webpack-plugin</code> and <code>path</code>.</p>
<p>Open up the <code>package.json</code> file and edit the build script to run with <code>react-app-rewired</code> instead of <code>react-scripts</code> the same way we did for the start script.</p>
<p>Finally, open up the <code>config-overrides.js</code> file and edit it to look like the following:</p>
<p>There’s a couple of things we’re doing in this file.</p>
<p>First, we check to see if it’s a production build. If it is, we create a Workbox config object and provide it with the path of our custom SW, and also the path of the output SW we want.</p>
<p>We also provide an option called <code>importWorkboxFrom</code> and set it to <code>disabled</code>.</p>
<p>This is an option specifying that we don’t want Workbox imported from anywhere, since we’re directly requesting it from a CDN in our SW script.</p>
<p>Finally, we have a function that is called <code>removeSWPrecachePlugin</code> . All this does is loop over the plugins listed in the Webpack config, find the correct one, and return the index so we can remove it.</p>
<p>Now, go ahead and run the build for the app, and open up the SW file generated in the build folder. In my case, this SW file has the name <code>custom-service-worker.js</code></p>
<p>You will notice a new <code>importScripts</code> call at the top of the file, which seems to be requesting a precache manifest file. This file is stored in the build folder, and if you open it up, you should see the list of all static assets being cached by Workbox.</p>
<h3 id="conclusion"><strong>Conclusion</strong></h3>
<p>So, we’ve accomplished the following goals:</p>
<ol>
<li>Configure the CRA build to use <a href="https://github.com/timarney/react-app-rewired" rel="noopener">react-app-rewired</a></li>
<li>Use react-app-rewired to customise the build to use Workbox to generate a Service Worker — We accomplished this using <code>workbox-webpack-plugin.</code> The build process will now automatically cache all static assets.</li>
<li>Build a very simple todo app</li>
<li>Implement offline functionality for the todo app using Workbox. <br>The offline functionality we will be targeting:<br>a) Cache retrieved assets so they can be served offline<br>b) Allow POSTing of data offline</li>
</ol>
<p>Here is the <a href="https://github.com/redixhumayun/react-app-rewired-workbox" rel="noopener">link</a> to the repo which has a working version of the app. You can clone that and have a play with it.</p>
<blockquote>Follow me on twitter <a href="https://twitter.com/zz_humayun" rel="noopener">here</a>. Follow me on GitHub <a href="https://github.com/redixhumayun" rel="noopener">here</a></blockquote>
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
