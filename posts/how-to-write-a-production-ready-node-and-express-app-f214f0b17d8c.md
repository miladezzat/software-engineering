---
card: "https://cdn-media-1.freecodecamp.org/images/1*-1tLk1cFdmcEQfNhQ7LIUg.jpeg"
tags: [Nodejs]
description: When I started building Node & Express applications, I didn’t
author: "Milad E. Fahmy"
title: "How to write a production-ready Node and Express app"
created: "2021-08-15T19:41:12+02:00"
modified: "2021-08-15T19:41:12+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nodejs tag-expressjs tag-javascript tag-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to write a production-ready Node and Express app</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*-1tLk1cFdmcEQfNhQ7LIUg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*-1tLk1cFdmcEQfNhQ7LIUg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*-1tLk1cFdmcEQfNhQ7LIUg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*-1tLk1cFdmcEQfNhQ7LIUg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*-1tLk1cFdmcEQfNhQ7LIUg.jpeg" alt="How  to write a production-ready Node and Express app">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h3 id="project-structuring">Project Structuring</h3>
<p>When I started building Node &amp; Express applications, I didn’t know how important it was to structure your application. Express doesn’t come with strict rules or guidelines for maintaining the project structure.</p>
<p>You are free to use any structure you want. When your codebase grows you end up having long <code>route</code> handlers. This makes your code hard to understand and it contains potential bugs.</p>
<p>If you’re working for a startup, most of the time you won’t have time to refractor your project or modularize it. You can end up with an endless loop of bug fixing and patching.</p>
<p>Over time, while working with both small teams and large teams, I realized what kind of structure can grow with your project and still be easy to maintain.</p>
<h4 id="model-view-controller">Model View Controller</h4>
<p>The <a href="https://en.wikipedia.org/wiki/Model–view–controller" rel="noopener">MVC</a> pattern helps in rapid and parallel development. For example, one developer can work on the view, while another one can work on creating the business logic in the controller.</p>
<p>Let’s take a look at an example of a simple user CRUD application.</p><pre><code>project/
controllers/
users.js
util/
plugin.js
middlewares/
auth.js
models/
user.js
routes/
user.js
router.js
public/
js/
css/
img/
views/
users/
index.jade
tests/
users/
create-user-test.js
update-user-test.js
get-user-test.js
.gitignore
app.js
package.json</code></pre>
<ul>
<li><strong>controllers: </strong>Define your app route handlers and business logic</li>
<li><strong>util: </strong>Writes utility/helper functions here which can be used by any controllers. For example, you can write a function like <code>mergeTwoArrays(arr1, arr2)</code>.</li>
<li><strong>middlewares: </strong>You can write middlewares to interpret all incoming requests before moving to the route handler. For example, <br> <code>router.post('/login', auth, controller.login)</code> where <code>auth</code> is a middleware function defined in <code>middlewares/auth.js</code>.</li>
<li><strong>models:</strong> also a kind of middleware between your controller and the database. You can define a schema and do some validation before writing to the database. For example, you can use an ORM like <a href="https://mongoosejs.com/" rel="noopener">Mongoose</a> which comes with great features and methods to use in the schema itself</li>
<li><strong>routes: </strong>Define your app routes, with HTTP methods. For example, you can define everything related to the user.</li>
</ul><pre><code class="language-js">router.post('/users/create', controller.create)
router.put('/users/:userId', controller.update)
router.get('/users', controller.getAll)</code></pre>
<ul>
<li><strong>public: </strong>Store static images in<code>/img</code>, custom JavaScript files, and CSS <code>/css</code></li>
<li><strong>views: </strong>Contains templates to be rendered by the server.</li>
<li><strong>tests: </strong>Here you can write all the unit tests or acceptance tests for the API server.</li>
<li><strong>app.js: </strong>Acts as the main file of the project where you initialize the app and other elements of the project.</li>
<li><strong>package.json: </strong>Takes care of the dependencies, the scripts to run with the <code>npm</code> command, and the version of your project.</li>
</ul>
<h3 id="exceptions-and-error-handling"><strong>Exceptions and Error Handling</strong></h3>
<p>This is one of the most important aspects to think about when creating any project with any language. Let’s see how to handle errors and exceptions gracefully in an Express app.</p>
<h4 id="using-promises"><strong>Using promises</strong></h4>
<p>One of the advantages of using promises over callbacks is they can handle implicit or explicit exceptions/errors in asynchronous code blocks as well as for synchronous code defined in <code>.then()</code>, a promise callback</p>
<p>Just add <code>.catch(next)</code> at the end of the promise chain. For example:</p><pre><code class="language-js">router.post('/create', (req, res, next) =&gt; {
User.create(req.body)    // function to store user data in db
.then(result =&gt; {
// do something with result
return result
})
.then(user =&gt; res.json(user))
.catch(next)
})</code></pre>
<h4 id="using-try-catch"><strong>Using try-catch</strong></h4>
<p>Try-catch is a traditional way of catching exceptions in asynchronous code.</p>
<p>Let’s take a look at an example with a possibility of getting an exception:</p><pre><code class="language-js">router.get('/search', (req, res) =&gt; {
setImmediate(() =&gt; {
const jsonStr = req.query.params
try {
const jsonObj = JSON.parse(jsonStr)
res.send('Success')
} catch (e) {
res.status(400).send('Invalid JSON string')
}
})
})</code></pre>
<h4 id="avoid-using-synchronous-code"><strong>Avoid using synchronous code</strong></h4>
<p>Synchronous code also known as blocking code, because it blocks the execution until they are executed.</p>
<p>So avoid using synchronous functions or methods that might take milliseconds or microseconds. For a high traffic website it will compound and may lead to high latency or response time of the API requests.</p>
<p>Don’t use them in production especially :)</p>
<p>Many Node.js modules come with both <code>.sync</code> and <code>.async</code> methods, so use async in production.</p>
<p>But, if you still want to use a synchronous API use <code>--trace-sync-io</code> command-line flag. It will print a warning and a stack trace whenever your application uses a synchronous API.</p>
<p>For more on the fundamentals of error handling, see:</p>
<ul>
<li><a href="https://www.joyent.com/developers/node/design/errors" rel="noopener">Error Handling in Node.js</a></li>
<li><a href="https://strongloop.com/strongblog/robust-node-applications-error-handling/" rel="noopener">Building Robust Node Applications: Error Handling</a> (StrongLoop blog)</li>
</ul>
<blockquote><em>What you should <strong>not</strong> do is to listen for the <code>uncaughtException</code> event, emitted when an exception bubbles all the way back to the event loop. Using it is generally <a href="https://nodejs.org/api/process.html#process_event_uncaughtexception" rel="noopener">not preferred</a>.</em></blockquote>
<h3 id="logging-properly"><strong>Logging properly</strong></h3>
<p>Logging is essential for debugging and app activity. It is used mainly for development purposes. We use <code>console.log</code> and <code>console.error</code> but these are <a href="https://nodejs.org/api/console.html#console_console_1" rel="noopener">synchronous functions</a>.</p>
<h4 id="for-debugging-purposes"><strong>For Debugging purposes</strong></h4>
<p>You can use a module like <a href="https://www.npmjs.com/package/debug" rel="noopener">debug</a>. This module enables you to use the DEBUG environment variable to control what debug messages are sent to <code>console.err()</code>, if any.</p>
<h4 id="for-app-activity"><strong>For app activity</strong></h4>
<p>One way is to write them to the database.</p>
<p>Check out <a href="https://medium.freecodecamp.org/how-to-log-a-node-js-api-in-an-express-js-app-with-mongoose-plugins-efe32717b59" rel="noopener">How I used mongoose plugins to do auditing of my application </a>.</p>
<p>Another way is to write to a file <strong>OR</strong> use a logging library like <a href="https://www.npmjs.com/package/winston" rel="noopener">Winston</a> or <a href="https://www.npmjs.com/package/bunyan" rel="noopener">Bunyan</a>. For a detailed comparison of these two libraries, see the StrongLoop blog post <a href="https://strongloop.com/strongblog/compare-node-js-logging-winston-bunyan/" rel="noopener">Comparing Winston and Bunyan Node.js Logging</a>.</p>
<h3 id="require-mess">require(“./../../../../../../”) mess</h3>
<p>There are different workarounds for this problem.</p>
<p>If you find any module getting popular and if it has logical independence from the application, you can convert it to private npm module and use it like any other module in package.json.</p>
<p>OR</p><pre><code class="language-js">const path  = require('path');
const HOMEDIR  = path.join(__dirname,'..','..');</code></pre>
<p>where <code>__dirname </code>is the built-in variable that names the directory that contains the current file, and <code>..</code> ,<code>..</code>is the requisite number of steps up the directory tree to reach the root of the project.</p>
<p>From there it is simply:</p><pre><code class="language-js">const foo = require(path.join(HOMEDIR,'lib','foo'));
const bar = require(path.join(HOMEDIR,'lib','foo','bar'));</code></pre>
<p>to load an arbitrary file within the project.</p>
<p>Let me know in the comment below if you have better ideas :)</p>
<h3 id="set-node_env-to-production-">Set NODE_ENV to “production”</h3>
<p>The <strong>NODE_ENV</strong> environment variable specifies the environment in which an application is running (usually, development or production). One of the simplest things you can do to improve performance is to set <code><strong>NODE_ENV</strong></code>to “production.”</p>
<p>Setting <strong>NODE_ENV</strong> to “<strong>production</strong>” makes Express:</p>
<ul>
<li>Cache view templates.</li>
<li>Cache CSS files generated from CSS extensions.</li>
<li>Generate less verbose error messages.</li>
</ul>
<p><a href="http://apmblog.dynatrace.com/2015/07/22/the-drastic-effects-of-omitting-node_env-in-your-express-js-applications/" rel="noopener">Tests indicate</a> that just doing this can improve app performance by a factor of three!</p>
<h3 id="using-process-manager"><strong>Using Process Manager</strong></h3>
<p>For production, you should not simply use <code>node app.j</code> — if your app crashes, it will be offline until you restart it.</p>
<p>The most popular process managers for Node are:</p>
<ul>
<li><a href="http://strong-pm.io/" rel="noopener">StrongLoop Process Manager</a></li>
<li><a href="https://github.com/Unitech/pm2" rel="noopener">PM2</a></li>
<li><a href="https://www.npmjs.com/package/forever" rel="noopener">Forever</a></li>
</ul>
<p>I personally use <strong>PM2.</strong></p>
<p>For a feature-by-feature comparison of the three process managers, see <a href="http://strong-pm.io/compare/" rel="noopener">http://strong-pm.io/compare/</a>. For a more detailed introduction to all three, see <a href="https://expressjs.com/en/advanced/pm.html" rel="noopener">Process managers for Express apps</a>.</p>
<h3 id="run-your-app-in-a-cluster">Run your app in a cluster</h3>
<p>In a multi-core system, you can increase the performance of a Node app by many times by launching a cluster of processes.</p>
<p>A cluster runs multiple instances of the app, ideally one instance on each CPU core. This distributes the load and tasks among the instances.</p>
<h4 id="using-node-s-cluster-module">Using Node’s cluster module</h4>
<p>Clustering is made possible with Node’s <a href="https://nodejs.org/dist/latest-v4.x/docs/api/cluster.html" rel="noopener">cluster module</a>. This enables a master process to spawn worker processes. It distributes incoming connections among the workers.</p>
<p>However, rather than using this module directly, it’s far better to use one of the many tools out there that do it for you automatically. For example <a href="https://www.npmjs.com/package/node-pm" rel="noopener">node-pm</a> or <a href="https://www.npmjs.com/package/cluster-service" rel="noopener">cluster-service</a>.</p>
<h4 id="using-pm2">Using PM2</h4>
<p>For pm2 you can use cluster directly through a command. For example,</p><pre><code class="language-js"># Start 4 worker processes
pm2 start app.js -i 4
# Auto-detect number of available CPUs and start that many worker processes
pm2 start app.js -i max </code></pre>
<p>If you encounter any problems, feel free to <em>get in <a href="https://101node.io" rel="noopener">touch</a> or comment below.</em><br>I would be happy to help :)</p>
<p></p>
<p><em>Don’t hesitate to clap if you considered this a worthwhile read!</em></p>
<p>References: <a href="https://expressjs.com/en/advanced/best-practice-performance.html">https://expressjs.com/en/advanced/best-practice-performance.html</a></p>
<p><em>Originally published at <a href="https://101node.io/blog/how-to-write-production-ready-node-express-app/" rel="noopener">101node.io</a> on September 30, 2018.</em></p>
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
