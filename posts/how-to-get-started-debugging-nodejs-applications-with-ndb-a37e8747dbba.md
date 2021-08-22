---
card: "https://cdn-media-1.freecodecamp.org/images/1*vd_jfkBVYHNek4GsfTShkQ.jpeg"
tags: [JavaScript]
description: NodeJs was released almost 9 years ago. The default debugging
author: "Milad E. Fahmy"
title: "How to get started debugging NodeJS applications with ndb"
created: "2021-08-15T19:38:23+02:00"
modified: "2021-08-15T19:38:23+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-debugging tag-software-development tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to get started debugging NodeJS applications with ndb</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*vd_jfkBVYHNek4GsfTShkQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*vd_jfkBVYHNek4GsfTShkQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*vd_jfkBVYHNek4GsfTShkQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*vd_jfkBVYHNek4GsfTShkQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*vd_jfkBVYHNek4GsfTShkQ.jpeg" alt="How to get started debugging NodeJS applications with ndb">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>NodeJs was released almost 9 years ago. The default debugging process of NodeJs (read Node.js) is quite clumsy. You are likely already aware of the need to add <code>--inspect</code> to the node script with node inspector. It is also dependent on Chrome. Then you have to look at the proper web socket connection which is hard, and debug using Chrome’s node debugger. To be honest, it is a pain in the neck.</p>
<p><strong>Finally, Google chromelabs has released ndb</strong>, which they say is “An improved debugging experience for Node.js, enabled by Chrome DevTools”. Ndb is a boon when debugging a Nodejs app.</p>
<p>I am going to show a step by step process of how to debug a nodejs application with <a href="https://github.com/GoogleChromeLabs/ndb" rel="noopener">ndb</a>. Below you can see ndb in action. So now let’s roll up our sleeves and get started:</p>
<h3 id="prerequisites">Prerequisites</h3>
<p>Below are some prerequisites before you get started:</p>
<ol>
<li>You have nodejs installed on your system (a no-brainer but still worth a mention)</li>
<li>You have general knowledge of running node scripts and working with nodejs apps.</li>
<li>You have prior debugging experience with nodejs or any other language.</li>
</ol>
<p>For debugging nodejs applications, in place of just another script I will use a full nodejs express application. It is an open source application I used for a demo on testing nodejs applications.</p>
<h3 id="debugging-nodejs-express-application-as-a-demo">Debugging nodejs express application as a demo</h3>
<p>I am using my open source <a href="https://github.com/geshan/currency-api" rel="noopener">currency API</a> for this step-by-step guide to debugging a nodejs application. It is built using the ExpressJS framework. You can also check out the running app hosted on <a href="https://currency-api-nodejs.now.sh/api/convert/USD/AUD/2019-01-01" rel="noopener">Zeit Now</a> to see the USD to AUD rate of 2019–01–10 as an example.</p>
<p>The idea of the application is simple. If the conversion rate is available in the database, it will fetch it from the database. If not, it will fetch it from another API and send it back to the user, also saving the rate in the database at the same time (async) for later use.</p>
<p>You can clone the application from github and run <code>npm install</code> to get it ready for debugging. This is a very simple application with most of the logic in <code>exchangeRates.js</code> <a href="https://github.com/geshan/currency-api/blob/master/src/exchangeRates.js" rel="noopener">file</a>. It has mocha <a href="https://github.com/geshan/currency-api/blob/master/test/exchnageRatesTest.js" rel="noopener">tests</a> too as it was a demo for testing a nodejs application.</p>
<h3 id="1-getting-started-install-ndb">1. Getting started, install ndb</h3>
<p>Installing ndb is very easy. All you need to do to get started debugging your nodejs application is to install <a href="https://github.com/GoogleChromeLabs/ndb#installation" rel="noopener">ndb</a>. I would suggest that you install it globally with:</p><pre><code># with npm
npm install -g ndb
# with yarn
yarn global add ndb</code></pre>
<p>You can also install and use it locally per app if you want. One thing I had to fix was to get the latest version of Chrome, as I saw some permission issues.</p>
<h3 id="2-run-the-app-with-ndb-not-node-or-nodemon-">2. Run the app with ndb (not node or nodemon)</h3>
<p>For debugging nodejs applications with ndb, you can directly run the nodejs app script with ndb rather than node. For example, if you were used to doing <code>node index.js</code> or <code>nodemon index.js</code> in development. To debug your app you can run:</p><pre><code>ndb index.js</code></pre>
<p>Notice that you don’t need to put any <code>-- inspect</code> so the experience is a lot smoother.</p>
<p><em>You don’t need to remember a different port or go to chrome devtools and open up a different inspector window to debug. Such a relief!</em></p>
<p>ndb opens up a screen like below when you do <code>ndb .</code> or <code>ndb index.js</code>:</p>
<p>Please add a breakpoint on line 46. As you have run the application with ndb it will run in debug mode and stop at the breakpoint like below when you hit <code>http://localhost:8080/api/convert/USD/AUD/2019-01-01</code> on the browser. I have set the breakpoint on exchangeRates.js like 46 in the screenshot below:</p>
<p>ndb allows you to run any script for debugging. For example, I can run <code>ndb npm start</code> and it will use the nodemon run. This means I can debug the application while changing the code which is great.</p>
<p><em>As an example it can be run with <code>ndb npm start</code> to debug this nodejs express application.</em></p>
<p>You can also debug your test with a command like <code>ndb npm test</code>.</p>
<h3 id="3-let-s-debug-some-code">3. Let’s debug some code</h3>
<p>As the debugger is working I can place more break points or run through the code at my speed and convenience.</p>
<p><em>The essential shortcuts are <code>F10</code> to step over function call and <code>F11</code> to step into a function.</em></p>
<p>The usual debugging workflow I assume you are familiar with. Below I have advanced to line 52:</p>
<h3 id="more-debugging-things">More debugging things</h3>
<p>As with any other debugger, with ndb you can:</p>
<ol>
<li>Add watches</li>
<li>Check the call stack trace</li>
<li>Check the process</li>
</ol>
<p><em>The console tab is also helpful if you want to some quick nodejs code in the context.</em></p>
<p>Read more about what you can do with ndb in the official <a href="https://github.com/GoogleChromeLabs/ndb#what-can-i-do" rel="noopener">readme</a>. Below is a screenshot of the useful console:</p>
<h3 id="conclusion-tl-dr-">Conclusion (TL;DR)</h3>
<p>Debugging any nodejs application with ndb is a better developer experience. To debug the currency API nodejs express app with ndb, you run the following commands, given you have node &gt; 8 installed:</p>
<ol>
<li>npm install -g ndb</li>
<li>git clone <a href="https://geshan.com.np/cdn-cgi/l/email-protection" rel="noopener">[email protected]</a>:geshan/currency-api.git</li>
<li>cd currency-api</li>
<li>npm install</li>
<li>ndb npm start</li>
<li>After the ndb debugger opens up, add a breakpoint at line 46 of src/exchangeRates.js</li>
<li>Then open <code>http://localhost:8080/api/convert/USD/AUD/2019-01-01</code> in the browser</li>
<li>Now as the app should pause at the breakpoint, enjoy! and continue debugging.</li>
</ol>
<p>If it works for this app, you can debug any of your nodejs application with this approach.</p>
<p><em>Welcome to the new way of debugging nodejs applications that is browser independent and a lot smoother than the default experience. Step up your debugging nodejs application game.</em></p>
<p>I hope this post has helped you debug your nodejs application better. If you have any other things to share about debugging nodejs apps or better usage of ndb please comment below!</p>
<p>Thanks for reading!</p>
<p>You can read more of my blog posts <a href="https://geshan.com.np/blog/2019/01/getting-started-with-debugging-nodejs-applications-with-ndb/" rel="noopener">geshan.com.np</a>.</p>
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
