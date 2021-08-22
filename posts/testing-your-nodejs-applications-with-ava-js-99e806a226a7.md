---
card: "https://cdn-media-1.freecodecamp.org/images/1*d8Lk-1QmDqhF0UeFH0FhXQ.png"
tags: [JavaScript]
description: by Nitish Phanse
author: "Milad E. Fahmy"
title: "How you can test your Node.js applications with Ava.js"
created: "2021-08-15T19:49:57+02:00"
modified: "2021-08-15T19:49:57+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-testing tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How you can test your Node.js applications with Ava.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*d8Lk-1QmDqhF0UeFH0FhXQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*d8Lk-1QmDqhF0UeFH0FhXQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*d8Lk-1QmDqhF0UeFH0FhXQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*d8Lk-1QmDqhF0UeFH0FhXQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*d8Lk-1QmDqhF0UeFH0FhXQ.png" alt="How you can test your Node.js applications with Ava.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Nitish Phanse</p>
<h1 id="how-you-can-test-your-node-js-applications-with-ava-js">How you can test your Node.js applications with Ava.js</h1>
<p>Why would you want to write test cases for your applications, anyway? Well, it’s a question a number of developers try to dodge, purely because it takes effort and time, and because manual testing is so much more satisfying. Click… click… fill out a form…Click… Presto. My app works, my APIs are good, all is hunky dory.</p>
<p>Fast forward to almost 30 pull requests a day being merged into your master branch. Now how do you feel about testing 30 features manually or refactoring a block of code and unknowingly breaking someone else’s code?</p>
<p>At this point you’d normally say, “I wish I’d written a few test cases to start with.” So take some inspiration from Facebook: they shared a pretty cool article <a href="https://code.facebook.com/posts/1716776591680069/react-16-a-look-inside-an-api-compatible-rewrite-of-our-frontend-ui-library/" rel="noopener">here</a>, explaining how the team developed React 16 with test driven development.</p>
<p>Node applications by themselves are pretty easy to build. There’s a lot of community support involved, and you’ll usually get what you need by asking around. Node apps can be a great proxy server to a number of API servers, thereby making their endpoint testing more crucial.</p>
<p>In this article I’ve covered <strong>how to setup and write basic unit test cases with coverage reports for Node.js applications<em>.</em></strong><em> </em>So let’s jump in.</p>
<h3 id="hello-ava">Hello Ava</h3>
<p><a href="https://github.com/avajs/ava" rel="noopener">Ava</a> is a JavaScript test runner. It utilizes the async I/O nature of Node and runs concurrent tests, thereby vastly decreasing your test times.</p>
<h4 id="let-s-get-started">Let’s get started</h4>
<p>In your working directory, create a <code>package.json</code> file and add the following packages:</p><pre><code>yarn add ava babel-register</code></pre>
<p>Create a <strong>tests</strong> folder. It’s helpful to keep your tests in one place. You can keep test modules/controllers there, too.</p>
<p>Your updated <code>package.json</code> should now look like this:</p><pre><code>{  "name": "ava-test",  "version": "1.0.0",  "description": "",  "main": "index.js",  "scripts": {    "start" : "node server.js",    "test": "node_modules/.bin/ava tests/**/*.test.js --verbose",    "test:watch": "node_modules/.bin/ava --verbose --watch"  },  "dependencies": {    "ava": "^0.23.0",    "babel-register": "^6.26.0"  },  "ava": {    "require": [      "babel-register"    ]  }}</code></pre>
<p>The <code>babel-register</code> transpiles ES6 code at runtime in case some machines are running on an old Node version which doesn’t support ES6. The <code>verbose</code> flag will give us some neat output depending on whether our tests fail or pass. This flag is pretty useful while debugging your tests, but if you write hundreds of test cases, you may want to turn it off.</p>
<p>In your <code>tests/index.test.js</code>, you can add your first test case:</p>
<p>The handy thing about Ava is that it allows you to run async tests, via async await functions. The syntax is also fairly straightforward. The plan method allows us to explicitly mention the number of assertions we’d like to have per test.</p>
<p>Running <code>yarn test</code> from you console gives you the following output:</p>
<p>In case one of our tests fails, we’d get:</p>
<p>That’s the beauty of <code>verbose</code> mode. It gives you the a clean error stack and none of the stack trace junk. In case you run into a runtime error, you’ll see some nice syntax highlighting, too.</p>
<p>You can really exploit the Ava API and use its powerful assertion tool to write flexible test cases.</p>
<h3 id="setting-up-your-node-server">Setting up your Node server</h3>
<p>Until now, we’ve only talked about a basic setup for writing tests — and let’s be frank, it’s pretty straight forward. So in this section, I’ll explain how a simple Node server can be spun off and its endpoints tested with Ava.</p><pre><code>yarn add express body-parser </code></pre>
<p>In your working directory, create an <code>app.js</code> and add the following snippet:</p>
<p>The reason I’ve exported the app module is so that it can be used with the mock API server that Ava will need to run your tests.</p>
<p>Make a new file <code>server.js</code> and import the app module to start the server.</p>
<p>Running npm start should start your server, and navigating to the http://localhost/status end point should give you a 200OK response.</p>
<p><strong>Great, so our server is working.</strong></p>
<p>A quick glance of the code shows that we’ve created 3 endpoints: a status endpoint, a greet endpoint, and a register endpoint. There is some validation on the register end point, which throws a 400(Bad request) in case post body params are missing. The above validation method is pretty naïve, but it serves our purpose of endpoint testing — so I’m going to stick with it.</p>
<blockquote><em>Pro tip : You can always assign error handling to a middleware and use next to invoke the error handler.</em></blockquote>
<p>Let’s write some more tests around the endpoint. I will use the <a href="https://github.com/visionmedia/supertest" rel="noopener"><strong>supertest</strong></a><strong> </strong>module. It’s very similar to <a href="https://github.com/visionmedia/superagent" rel="noopener">superagent</a>: it uses the same APIs, and has a similar syntax. So, win-win.</p>
<p>We have imported the previously exported <code>app</code> module and passed it into supertest. Supertest creates a proxy server, which will then hit all the endpoint URLs mentioned in the test. You can use the <code><strong>deepEqual</strong></code> method to test the entire object or the <code><strong>is</strong></code> method to manually test each field.</p>
<p>Running the yarn test will yield the following:</p>
<p>Great. We’ve written four tests and they all pass as expected. But what about code coverage?</p>
<h3 id="hello-nyc"><strong>Hello nyc</strong></h3>
<p>For creating those lovely coverage reports, we’ll use <a href="https://github.com/istanbuljs/nyc" rel="noopener">nyc</a> which is Istanbul.js’ command line interface. It’s very easy to use and has a lot of configurable options. For the sake of simplicity, we’ll use a very simple configuration.</p><pre><code>yarn add nyc --save</code></pre>
<p>The <strong>nyc</strong> command wraps nicely over your test command and will create a coverage folder (this should be in your gitignore) in your working directory.</p>
<p>Update your <code>package.json</code> as shown below:</p><pre><code>{  "name": "ava-test",  "version": "1.0.0",  "description": "",  "main": "index.js",  "scripts": {    "test": "node_modules/.bin/ava tests/**/*.test.js --verbose",    "test:watch": "node_modules/.bin/ava --verbose --watch",    "cover": "node_modules/.bin/nyc yarn test",  },  ... other dependencies   "nyc": {    "reporter": [      "lcov",      "text",      "html"    ]  }}</code></pre>
<p>The types of reporter you want can be configured in the nyc section of your <code>package.json</code> file.</p>
<p>Let’s run yarn cover:</p>
<p>Okay so we don’t have 100% coverage yet. Let’s fix that. First you’d want to go into the coverage folder of your working directory and see which part of your code hasn’t been covered.</p>
<p>Clearly we missed a spot. Let’s add our final test case in the <code>tests/index.tests.js</code> file, which will cover the entire <code>app.js</code> file.</p><pre><code>test('Create a new user', async t =&gt; {  let username = 'some-hase'  const password = 'some-hase'  const response = await request(app)    .post('/register')    .send({username, password});</code></pre><pre><code>t.is(response.status, 200);    t.is(response.body.message, `new user created`);});</code></pre>
<p>And now….</p>
<p>Presto.</p>
<blockquote><strong><em>Pro tip: </em></strong><em>If you want to add a threshold for test cases you can add a script in your package.json file.</em></blockquote><pre><code>"check-coverage": "node_modules/.bin/nyc check-coverage --lines 100 --functions 100 --branches 100 --statements 100"</code></pre>
<p>This command can be run as part of your travis / gitlab pipeline build systems.</p>
<h3 id="conclusion"><strong>Conclusion</strong></h3>
<p>We’ve covered a basic setup with Ava for unit test cases of your Node APIs. The documentation is really extensive and can be referred to in case of doubt.</p>
<p>PS: Hope you like the article, correct me if I am wrong anywhere. Always welcome a discussion.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
