---
card: "https://cdn-media-1.freecodecamp.org/images/1*7F50Qc-ysFgy6tCjUyruTA.jpeg"
tags: [JavaScript]
description: "Note: you can get a PDF, ePub, or Mobi version of this handbo"
author: "Milad E. Fahmy"
title: "The definitive Node.js handbook"
created: "2021-08-15T19:42:16+02:00"
modified: "2021-08-15T19:42:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-tech tag-tutorial tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">The definitive Node.js handbook</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*7F50Qc-ysFgy6tCjUyruTA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*7F50Qc-ysFgy6tCjUyruTA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*7F50Qc-ysFgy6tCjUyruTA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*7F50Qc-ysFgy6tCjUyruTA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*7F50Qc-ysFgy6tCjUyruTA.jpeg" alt="The definitive Node.js handbook">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Note: you can get a <a href="https://flaviocopes.com/page/node-handbook/">PDF, ePub, or Mobi</a> version of this handbook for easier reference, or for reading on your Kindle or tablet.</p>
<h3 id="introduction-to-node-js">Introduction to Node.js</h3>
<p>This handbook is a getting started guide to Node.js, the server-side JavaScript runtime environment.</p>
<h4 id="overview">Overview</h4>
<p>Node.js is a <strong>runtime environment for JavaScript </strong>that runs on the <strong>server</strong>.</p>
<p>Node.js is open source, cross-platform, and since its introduction in 2009, it got hugely popular and now plays a significant role in the web development scene. If GitHub stars are one popularity indication factor, having 58000+ stars means being very popular.</p>
<p>Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. Node.js is able to leverage the work of the engineers that made (and will continue to make) the Chrome JavaScript runtime blazing fast, and this allows Node.js to benefit from the huge performance improvements and the Just-In-Time compilation that V8 performs. Thanks to this, JavaScript code running in Node.js can become very performant.</p>
<p>A Node.js app is run by a single process, without creating a new thread for every request. Node provides a set of asynchronous I/O primitives in its standard library that will prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making a blocking behavior an exception rather than the normal.</p>
<p>When Node.js needs to perform an I/O operation, like reading from the network, access a database or the filesystem, instead of blocking the thread Node.js will resume the operations when the response comes back, instead of wasting CPU cycles waiting.</p>
<p>This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing threads concurrency, which would be a major source of bugs.</p>
<p>Node.js has a unique advantage because millions of frontend developers that write JavaScript for the browser are now able to run the server-side code and frontend-side code without the need to learn a completely different language.</p>
<p>In Node.js the new ECMAScript standards can be used without problems, as you don’t have to wait for all your users to update their browsers — you are in charge of deciding which ECMAScript version to use by changing the Node.js version, and you can also enable specific experimental features by running Node with flags.</p>
<h4 id="it-has-a-huge-number-of-libraries">It has a huge number of libraries</h4>
<p>With its simple structure, the node package manager<strong> </strong>(<a href="https://flaviocopes.com/npm/" rel="noopener">npm</a>) helped the ecosystem of Node.js proliferate. Now the <a href="https://www.npmjs.com/" rel="noopener">npm registry</a> hosts almost 500,000 open source packages you can freely use.</p>
<h3 id="a-sample-node-js-application">A sample Node.js application</h3>
<p>The most common example Hello World of Node.js is a web server:</p><pre><code>const http = require('http')</code></pre><pre><code>const hostname = '127.0.0.1'const port = 3000</code></pre><pre><code>const server = http.createServer((req, res) =&gt; {  res.statusCode = 200  res.setHeader('Content-Type', 'text/plain')  res.end('Hello World\n')})</code></pre><pre><code>server.listen(port, hostname, () =&gt; {  console.log(`Server running at http://${hostname}:${port}/`)})</code></pre>
<p>To run this snippet, save it as a <code>server.js</code> file and run <code>node server.js</code> in your terminal.</p>
<p>This code first includes the Node.js <code>http</code> <a href="https://nodejs.org/api/http.html" rel="noopener">module</a>.</p>
<p>Node.js has an amazing <a href="https://nodejs.org/api/" rel="noopener">standard library</a>, including a first-class support for networking.</p>
<p>The <code>createServer()</code> method of <code>http</code> creates a new HTTP server and returns it.</p>
<p>The server is set to listen on the specified port and hostname. When the server is ready, the callback function is called, in this case informing us that the server is running.</p>
<p>Whenever a new request is received, the <code>request</code> <a href="https://nodejs.org/api/http.html#http_event_request" rel="noopener">event</a> is called, providing two objects: a request (an <code><a href="https://nodejs.org/api/http.html#http_class_http_incomingmessage" rel="noopener">http.IncomingMessage</a></code>object) and a response (an <code><a href="https://nodejs.org/api/http.html#http_class_http_serverresponse" rel="noopener">http.ServerResponse</a></code>object).</p>
<p>These 2 objects are essential to handle the HTTP call.</p>
<p>The first provides the request details. In this simple example, this is not used, but you could access the request headers and request data.</p>
<p>The second is used to return data to the caller.</p>
<p>In this case with:</p><pre><code>res.statusCode = 200</code></pre>
<p>We set the <code>statusCode</code> property to <code>200</code>, to indicate a successful response.</p>
<p>We set the Content-Type header:</p><pre><code>res.setHeader('Content-Type', 'text/plain')</code></pre>
<p>…and we end close the response, adding the content as an argument to <code>end()</code>:</p><pre><code>res.end('Hello World\n')</code></pre>
<h3 id="node-js-frameworks-and-tools">Node.js frameworks and tools</h3>
<p>Node.js is a low-level platform. To make things easier and more interesting for developers, thousands of libraries were built upon Node.js.</p>
<p>Many of those established over time as popular options. Here is a non-comprehensive list to the ones I consider very relevant and worth learning:</p>
<ul>
<li><a href="https://expressjs.com/" rel="noopener"><strong>Express</strong></a><br> One of the most simple yet powerful ways to create a web server. Its minimalist approach and unopinionated focus on the core features of a server is key to its success.</li>
<li><a href="https://flaviocopes.com/meteor/" rel="noopener"><strong>Meteor</strong></a><br>An incredibly powerful full-stack framework, empowering you with an isomorphic approach to building apps with JavaScript and sharing code on the client and the server. Once an off-the-shelf tool that provided everything, it now integrates with front-end libraries such as <a href="https://flaviocopes.com/react/" rel="noopener">React</a>, <a href="https://flaviocopes.com/vue-introduction/" rel="noopener">Vue</a> and <a href="https://angularjs.org/" rel="noopener">Angular</a>. Meteor can be used to create mobile apps as well.</li>
<li><a href="http://koajs.com/" rel="noopener"><strong>Koa</strong></a><br>Built by the same team behind Express, Koa aims to be even simpler and smaller, building on top of years of knowledge. The new project was born out of the need to create incompatible changes without disrupting the existing community.</li>
<li><a href="https://flaviocopes.com/nextjs/" rel="noopener"><strong>Next.js</strong></a><br>This is a framework to render server-side rendered <a href="https://reactjs.org/" rel="noopener">React</a> applications.</li>
<li><a href="https://github.com/zeit/micro" rel="noopener"><strong>Micro</strong></a><br>This is a very lightweight server to create asynchronous HTTP microservices.</li>
<li><a href="https://socket.io/" rel="noopener"><strong>Socket.io</strong></a><br>This is a real-time communication engine to build network applications.</li>
</ul>
<h3 id="a-brief-history-of-node-js">A brief history of Node.js</h3>
<h4 id="a-look-back-on-the-history-of-node-js-from-2009-to-today">A look back on the history of Node.js from 2009 to today</h4>
<p>Believe it or not, Node.js is just 9 years old.</p>
<p>In comparison, JavaScript is 23 years old and the web as we know it (after the introduction of Mosaic) is 25 years old.</p>
<p>9 years is such a little amount of time for a technology, but Node.js seems to have been around forever.</p>
<p>I’ve had the pleasure to work with Node.js since the early days when it was just 2 years old, and despite the little information available, you could already feel it was a huge thing.</p>
<p>In this section, I want to draw the big picture of Node.js in its history, to put things in perspective.</p>
<h4 id="a-little-bit-of-history">A little bit of history</h4>
<p>JavaScript is a programming language that was created at Netscape as a scripting tool to manipulate web pages inside their browser, <a href="https://en.wikipedia.org/wiki/Netscape_Navigator" rel="noopener">Netscape Navigator</a>.</p>
<p>Part of the business model of Netscape was to sell Web Servers, which included an environment called “Netscape LiveWire”, which could create dynamic pages using server-side JavaScript. So the idea of server-side JavaScript was not introduced by Node.js, it’s old just like JavaScript — but at the time it was not successful.</p>
<p>One key factor that led to the rise of Node.js was timing. A few years ago, JavaScript was starting to be considered a serious language, thanks for the “Web 2.0” applications that showed the world what a modern experience on the web could be like (think Google Maps or GMail).</p>
<p>The JavaScript engines performance bar raised considerably thanks to the browser competition battle, which is still going strong. Development teams behind each major browser work hard every day to give us better performance, which is a huge win for JavaScript as a platform. Chrome V8, the engine that Node.js uses under the hood, is one of those and in particular it’s the Chrome JavaScript engine.</p>
<p>But of course, Node.js is not popular just because of pure luck or timing. It introduced much innovative thinking on how to program in JavaScript on the server.</p>
<h4 id="2009">2009</h4>
<p>Node.js is born</p>
<p>The first form of <a href="https://flaviocopes.com/npm/" rel="noopener">npm</a> is created</p>
<h4 id="2010">2010</h4>
<p><a href="https://flaviocopes.com/express/" rel="noopener">Express</a> is born</p>
<p><a href="https://socket.io/" rel="noopener">Socket.io</a> is born</p>
<h4 id="2011">2011</h4>
<p>npm hits 1.0</p>
<p>Big companies start adopting Node: <a href="https://www.linkedin.com" rel="noopener">LinkedIn</a>, <a href="https://www.uber.com" rel="noopener">Uber</a></p>
<p><a href="https://hapijs.com/" rel="noopener">Hapi</a> is born</p>
<h4 id="2012">2012</h4>
<p>Adoption continues very rapidly</p>
<h4 id="2013">2013</h4>
<p>First big blogging platform using Node.js: <a href="https://ghost.org/" rel="noopener">Ghost</a></p>
<p><a href="https://koajs.com/" rel="noopener">Koa</a> is born</p>
<h4 id="2014">2014</h4>
<p>Big drama: <a href="https://iojs.org/" rel="noopener">IO.js</a> is a major fork of Node.js, with the goal of introducing ES6 support and move faster</p>
<h4 id="2015">2015</h4>
<p>The <a href="https://foundation.nodejs.org/" rel="noopener">Node.js Foundation</a> is born</p>
<p>IO.js is merged back into Node.js</p>
<p>npm introduces private modules</p>
<p><a href="https://nodejs.org/en/blog/release/v4.0.0/" rel="noopener">Node 4</a> (no 1, 2, 3 versions were previously released)</p>
<h4 id="2016">2016</h4>
<p>The <a href="https://blog.npmjs.org/post/141577284765/kik-left-pad-and-npm" rel="noopener">leftpad incident</a></p>
<p><a href="https://flaviocopes.com/yarn/" rel="noopener">Yarn</a> is born: Node 6</p>
<h4 id="2017">2017</h4>
<p>npm focuses more on security: Node 8</p>
<p><a href="https://nodejs.org/api/http2.html" rel="noopener">HTTP/2</a></p>
<p><a href="https://flaviocopes.com/v8/" rel="noopener">V8</a> introduces Node in its testing suite, officially making Node a target for the JavaScript engine, in addition to Chrome</p>
<p>3 billion npm downloads every week</p>
<h4 id="2018">2018</h4>
<p>Node 10</p>
<p><a href="https://flaviocopes.com/es-modules/" rel="noopener">ES modules</a>.</p>
<p><a href="https://nodejs.org/api/esm.html" rel="noopener">mjs</a> experimental support</p>
<h3 id="how-to-install-node-js">How to install Node.js</h3>
<h4 id="how-you-can-install-node-js-on-your-system-a-package-manager-the-official-website-installer-or-nvm">How you can install Node.js on your system: a package manager, the official website installer or nvm</h4>
<p>Node.js can be installed in different ways. This post highlights the most common and convenient ones.</p>
<p>Official packages for all the major platforms are available <a href="https://nodejs.org/en/download/" rel="noopener">here</a>.</p>
<p>One very convenient way to install Node.js is through a package manager. In this case, every operating system has its own.</p>
<p>On macOS, <a href="https://brew.sh/" rel="noopener">Homebrew</a> is the de-facto standard, and — once installed — allows to install Node.js very easily, by running this command in the CLI:</p><pre><code>brew install node</code></pre>
<p>Other package managers for Linux and Windows are listed <a href="https://nodejs.org/en/download/package-manager/" rel="noopener">here</a>.</p>
<p><a href="https://github.com/creationix/nvm/blob/master/README.md" rel="noopener">nvm</a> is a popular way to run Node.js. It allows you to easily switch the Node.js version, and install new versions to try and easily rollback if something breaks, for example.</p>
<p>It is also very useful to test your code with old Node.js versions.</p>
<p>My suggestion is to use the official installer if you are just starting out and you don’t use Homebrew already. Otherwise, Homebrew is my favorite solution.</p>
<h3 id="how-much-javascript-do-you-need-to-know-to-use-node-js">How much JavaScript do you need to know to use Node.js?</h3>
<p>If you are just starting out with JavaScript, how deeply do you need to know the language?</p>
<p>As a beginner, it’s hard to get to a point where you are confident enough in your programming abilities.</p>
<p>While learning to code, you might also be confused at where does JavaScript end, and where Node.js begins, and vice versa.</p>
<p>I would recommend you to have a good grasp of the main JavaScript concepts before diving into Node.js:</p>
<ul>
<li>Lexical Structure</li>
<li>Expressions</li>
<li>Types</li>
<li>Variables</li>
<li>Functions</li>
<li>this</li>
<li>Arrow Functions</li>
<li>Loops</li>
<li>Loops and Scope</li>
<li>Arrays</li>
<li>Template Literals</li>
<li>Semicolons</li>
<li>Strict Mode</li>
<li>ECMAScript 6, 2016, 2017</li>
</ul>
<p>With those concepts in mind, you are well on your road to become a proficient JavaScript developer, in both the browser and in Node.js.</p>
<p>The following concepts are also key to understand asynchronous programming, which is one fundamental part of Node.js:</p>
<ul>
<li>Asynchronous programming and callbacks</li>
<li>Timers</li>
<li>Promises</li>
<li>Async and Await</li>
<li>Closures</li>
<li>The Event Loop</li>
</ul>
<p>Luckily I wrote a free ebook that explains all those topics, and it’s called <a href="https://flaviocopes.com/javascript/" rel="noopener">JavaScript Fundamentals</a>. It’s the most compact resource you’ll find to learn all of this.</p>
<h3 id="differences-between-node-js-and-the-browser">Differences between Node.js and the Browser</h3>
<p>How writing JavaScript application in Node.js differs from programming for the Web inside the browser.</p>
<p>Both the browser and Node use JavaScript as their programming language.</p>
<p>Building apps that run in the browser is a completely different thing than building a Node.js application.</p>
<p>Despite the fact that it’s always JavaScript, there are some key differences that make the experience radically different.</p>
<p>A front-end developer that writes Node.js apps has a huge advantage — the language is still the same.</p>
<p>You have a huge opportunity because we know how hard it is to fully, deeply learn a programming language. By using the same language to perform all your work on the web — both on the client and on the server — you’re in a unique position of advantage.</p>
<p>What changes is the ecosystem.</p>
<p>In the browser, most of the time what you are doing is interacting with the DOM, or other Web Platform APIs like Cookies. Those do not exist in Node.js, of course. You don’t have the <code>document</code>, <code>window</code> and all the other objects that are provided by the browser.</p>
<p>And in the browser, we don’t have all the nice APIs that Node.js provides through its modules, like the file system access functionality.</p>
<p>Another big difference is that in Node.js you control the environment. Unless you are building an open source application that anyone can deploy anywhere, you know which version of Node.js you will run the application on. Compared to the browser environment, where you don’t get the luxury to choose what browser your visitors will use, this is very convenient.</p>
<p>This means that you can write all the modern ES6–7–8–9 JavaScript that your Node version supports.</p>
<p>Since JavaScript moves so fast, but browsers can be a bit slow and users a bit slow to upgrade — sometimes on the web, you are stuck using older JavaScript/ECMAScript releases.</p>
<p>You can use Babel to transform your code to be ES5-compatible before shipping it to the browser, but in Node.js, you won’t need that.</p>
<p>Another difference is that Node.js uses the <a href="https://flaviocopes.com/commonjs/" rel="noopener">CommonJS</a> module system, while in the browser we are starting to see the ES Modules standard being implemented.</p>
<p>In practice, this means that for the time being you use <code>require()</code> in Node.js and <code>import</code> in the browser.</p>
<h3 id="the-v8-javascript-engine">The V8 JavaScript Engine</h3>
<p>V8 is the name of the JavaScript engine that powers Google Chrome. It’s the thing that takes our JavaScript and executes it while browsing with Chrome.</p>
<p>V8 provides the runtime environment in which JavaScript executes. The DOM, and the other Web Platform APIs are provided by the browser.</p>
<p>The cool thing is that the JavaScript engine is independent by the browser in which it’s hosted. This key feature enabled the rise of Node.js. V8 was chosen for being the engine chosen by Node.js back in 2009, and as the popularity of Node.js exploded, V8 became the engine that now powers an incredible amount of server-side code written in JavaScript.</p>
<p>The Node.js ecosystem is huge and thanks to it V8 also powers desktop apps, with projects like <a href="https://electronjs.org/" rel="noopener">Electron</a>.</p>
<h4 id="other-js-engines">Other JS engines</h4>
<p>Other browsers have their own JavaScript engine:</p>
<ul>
<li>Firefox has <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey" rel="noopener">Spidermonkey</a></li>
<li>Safari has <a href="https://developer.apple.com/documentation/javascriptcore" rel="noopener">JavaScriptCore</a> (also called Nitro)</li>
<li>Edge has <a href="https://github.com/Microsoft/ChakraCore" rel="noopener">Chakra</a></li>
</ul>
<p>and many others exist as well.</p>
<p>All those engines implement the ECMA ES-262 standard, also called ECMAScript, the standard used by JavaScript.</p>
<h4 id="the-quest-for-performance">The quest for performance</h4>
<p>V8 is written in C++, and it’s continuously improved. It is portable and runs on Mac, Windows, Linux and several other systems.</p>
<p>In this V8 introduction, I will ignore the implementation details of V8. They can be found on more authoritative sites, including the <a href="https://developers.google.com/v8/" rel="noopener">V8 official site</a>, and they change over time, often radically.</p>
<p>V8 is always evolving, just like the other JavaScript engines around, to speed up the Web and the Node.js ecosystem.</p>
<p>On the web, there is a race for performance that’s been going on for years, and we (as users and developers) benefit a lot from this competition because we get faster and more optimized machines year after year.</p>
<h4 id="compilation">Compilation</h4>
<p>JavaScript is generally considered an interpreted language, but modern JavaScript engines no longer just interpret JavaScript, they compile it.</p>
<p>This happens since 2009 when the SpiderMonkey JavaScript compiler was added to Firefox 3.5, and everyone followed this idea.</p>
<p>JavScript is internally compiled by V8 with just-in-time (JIT) compilation to speed up the execution.</p>
<p>This might seem counter-intuitive,. But since the introduction of Google Maps in 2004, JavaScript has evolved from a language that was generally executing a few dozens of lines of code to complete applications with thousands to hundreds of thousands of lines running in the browser.</p>
<p>Our applications now can run for hours inside a browser, rather than being just a few form validation rules or simple scripts.</p>
<p>In this <strong>new world</strong>, compiling JavaScript makes perfect sense because while it might take a little bit more to have the JavaScript <strong>ready</strong>, once done it’s going to be much more performant that purely interpreted code.</p>
<h3 id="how-to-exit-from-a-node-js-program">How to exit from a Node.js program</h3>
<p>There are various ways to terminate a Node.js application.</p>
<p>When running a program in the console you can close it with <code>ctrl-C</code>, but what I want to discuss here is programmatically exiting.</p>
<p>Let’s start with the most drastic one, and see why you’re better off <strong>not</strong> using it.</p>
<p>The <code>process</code> core module is provides a handy method that allows you to programmatically exit from a Node.js program: <code>process.exit()</code>.</p>
<p>When Node.js runs this line, the process is immediately forced to terminate.</p>
<p>This means that any callback that’s pending, any network request still being sent, any file system access, or processes writing to <code>stdout</code> or <code>stderr</code> — all is going to be ungracefully terminated right away.</p>
<p>If this is fine for you, you can pass an integer that signals the operating system the exit code:</p><pre><code>process.exit(1)</code></pre>
<p>By default the exit code is <code>0</code>, which means success. Different exit codes have different meaning, which you might want to use in your own system to have the program communicate to other programs.</p>
<p>You can read more on exit codes <a href="https://nodejs.org/api/process.html#process_exit_codes" rel="noopener">here</a>.</p>
<p>You can also set the <code>process.exitCode</code> property:</p><pre><code>process.exitCode = 1</code></pre>
<p>and when the program will later end, Node.js will return that exit code.</p>
<p>A program will gracefully exit when all the processing is done.</p>
<p>Many times with Node.js we start servers, like this HTTP server:</p><pre><code>const express = require('express')const app = express()</code></pre><pre><code>app.get('/', (req, res) =&gt; {  res.send('Hi!')})</code></pre><pre><code>app.listen(3000, () =&gt; console.log('Server ready'))</code></pre>
<p>This program is never going to end. If you call <code>process.exit()</code>, any currently pending or running request is going to be aborted. This is <strong>not nice</strong>.</p>
<p>In this case you need to send the command a <code>SIGTERM</code> signal, and handle that with the process signal handler:</p>
<p><strong>Note:</strong> <code>process</code> does not require a <code>require</code>, it's automatically available.</p><pre><code>const express = require('express')</code></pre><pre><code>const app = express()</code></pre><pre><code>app.get('/', (req, res) =&gt; {  res.send('Hi!')})</code></pre><pre><code>app.listen(3000, () =&gt; console.log('Server ready'))</code></pre><pre><code>process.on('SIGTERM', () =&gt; {  app.close(() =&gt; {    console.log('Process terminated')  })})</code></pre>
<p>What are signals? Signals are a Portable Operating System Interface (POSIX) intercommunication system: a notification sent to a process in order to notify it of an event that occurred.</p>
<p><code>SIGKILL</code> is the signals that tells a process to immediately terminate, and would ideally act like <code>process.exit()</code>.</p>
<p><code>SIGTERM</code> is the signals that tells a process to gracefully terminate. It is the signal that's sent from process managers like <code>upstart</code> or <code>supervisord</code> and many others.</p>
<p>You can send this signal from inside the program, in another function:</p><pre><code>process.kill(process.pid, 'SIGTERM')</code></pre>
<p>Or from another Node.js running program, or any other app running in your system that knows the PID of the process you want to terminate.</p>
<h3 id="how-to-read-environment-variables-from-node-js">How to read environment variables from Node.js</h3>
<p>The <code>process</code> core module of Node provides the <code>env</code>property which hosts all the environment variables that were set at the moment the process was started.</p>
<p>Here is an example that accesses the <code>NODE_ENV</code> environment variable, which is set to <code>development</code> by default.</p><pre><code>process.env.NODE_ENV // "development"</code></pre>
<p>Setting it to <code>production</code> before the script runs will tell Node.js that this is a production environment.</p>
<p>In the same way you can access any custom environment variable you set.</p>
<h3 id="where-to-host-a-node-js-app">Where to host a Node.js app</h3>
<p>A Node.js application can be hosted in a lot of places, depending on your needs.</p>
<p>Here is a non-exhaustive list of the options you can explore when you want to deploy your app and make it publicly accessible.</p>
<p>I will list the options from simplest and constrained to more complex and powerful.</p>
<h4 id="simplest-option-ever-local-tunnel">Simplest option ever: local tunnel</h4>
<p>Even if you have a dynamic IP, or you’re under a NAT, you can deploy your app and serve the requests right from your computer using a local tunnel.</p>
<p>This option is suited for some quick testing, demo a product or sharing of an app with a very small group of people.</p>
<p>A very nice tool for this, available on all platforms, is <a href="https://ngrok.com/" rel="noopener">ngrok</a>.</p>
<p>Using it, you can just type <code>ngrok PORT</code> and the PORT you want is exposed to the internet. You will get a ngrok.io domain, but with a paid subscription you can get a custom URL as well as more security options (remember that you are opening your machine to the public Internet).</p>
<p>Another service you can use is <a href="https://github.com/localtunnel/localtunnel" rel="noopener">localtunnel</a>.</p>
<h4 id="zero-configuration-deployments">Zero configuration deployments</h4>
<h4 id="glitch">Glitch</h4>
<p><a href="https://glitch.com/" rel="noopener">Glitch</a> is a playground and a way to build your apps faster than ever, and see them live on their own glitch.com subdomain. You cannot currently have a a custom domain, and there are a few <a href="https://glitch.com/faq#restrictions" rel="noopener">restrictions</a> in place, but it’s really great to prototype. It looks fun (and this is a plus), and it’s not a dumbed down environment — you get all the power of Node.js, a CDN, secure storage for credentials, GitHub import/export and much more.</p>
<p>Provided by the company behind FogBugz and Trello (and co-creators of Stack Overflow).</p>
<p>I use it a lot for demo purposes.</p>
<h4 id="codepen">Codepen</h4>
<p><a href="https://codepen.io/" rel="noopener">Codepen</a> is an amazing platform and community. You can create a project with multiple files, and deploy it with a custom domain.</p>
<h4 id="serverless">Serverless</h4>
<p>A way to publish your apps, and have no server at all to manage, is Serverless. Serverless is a paradigm where you publish your apps as <strong>functions</strong>, and they respond on a network endpoint (also called FAAS — Functions As A Service).</p>
<p>To very popular solutions are:</p>
<ul>
<li><a href="https://serverless.com/framework/" rel="noopener">Serverless Framework</a></li>
<li><a href="https://stdlib.com/" rel="noopener">Standard Library</a></li>
</ul>
<p>They both provide an abstraction layer to publishing on AWS Lambda and other FAAS solutions based on Azure or the Google Cloud offering.</p>
<h4 id="paas">PAAS</h4>
<p>PAAS stands for Platform As A Service. These platforms take away a lot of things you should otherwise worry about when deploying your application.</p>
<h4 id="zeit-now">Zeit Now</h4>
<p><a href="https://zeit.co/now" rel="noopener">Zeit</a> is an interesting option. You just type <code>now</code> in your terminal, and it takes care of deploying your application. There is a free version with limitations, and the paid version is more powerful. You simply forget that there’s a server, you just deploy the app.</p>
<h4 id="nanobox">Nanobox</h4>
<p><a href="https://nanobox.io/" rel="noopener">Nanobox</a></p>
<h4 id="heroku">Heroku</h4>
<p><a href="https://www.heroku.com/" rel="noopener">Heroku</a> is an amazing platform.</p>
<p>This is a great article on <a href="https://devcenter.heroku.com/articles/getting-started-with-node" rel="noopener">getting started with Node.js on Heroku</a>.</p>
<h4 id="microsoft-azure">Microsoft Azure</h4>
<p><a href="https://azure.microsoft.com/en-us/" rel="noopener">Azure</a> is the Microsoft Cloud offering.</p>
<p>Check out how to <a href="https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-node" rel="noopener">create a Node.js web app in Azure</a>.</p>
<h4 id="google-cloud-platform">Google Cloud Platform</h4>
<p><a href="https://cloud.google.com/" rel="noopener">Google Cloud</a> is an amazing structure for your apps.</p>
<p>They have a good <a href="https://cloud.google.com/node/" rel="noopener">Node.js Documentation Section</a>.</p>
<h4 id="virtual-private-server">Virtual Private Server</h4>
<p>In this section you find the usual suspects, ordered from more user friendly to less user friendly:</p>
<ul>
<li><a href="https://www.digitalocean.com/" rel="noopener">Digital Ocean</a></li>
<li><a href="https://www.linode.com/" rel="noopener">Linode</a></li>
<li><a href="https://aws.amazon.com/" rel="noopener">Amazon Web Services</a>, in particular I mention Amazon Elastic Beanstalk as it abstracts away a little bit the complexity of AWS.</li>
</ul>
<p>Since they provide an empty Linux machine on which you can work, there is no specific tutorial for these.</p>
<p>There are lots more options in the VPS category, those are just the ones I used and I would recommend.</p>
<h4 id="bare-metal">Bare metal</h4>
<p>Another solution is to get a <a href="https://en.wikipedia.org/wiki/Bare-metal_server" rel="noopener">bare metal server</a>, install a Linux distribution, connect it to the internet (or rent one monthly, like you can do using the <a href="https://www.vultr.com/pricing/baremetal/" rel="noopener">Vultr Bare Metal</a> service)</p>
<h3 id="how-to-use-the-node-js-repl">How to use the Node.js REPL</h3>
<p>REPL stands for Read-Evaluate-Print-Loop, and it’s a great way to explore the Node.js features in a quick way.</p>
<p>The <code>node</code> command is the one we use to run our Node.js scripts:</p><pre><code>node script.js</code></pre>
<p>If we omit the filename, we use it in REPL mode:</p><pre><code>node</code></pre>
<p>If you try it now in your terminal, this is what happens:</p><pre><code>❯ node&amp;gt;</code></pre>
<p>the command stays in idle mode and waits for us to enter something.</p>
<p><strong>Tip</strong>: if you are unsure how to open your terminal, Google “How to open terminal on &lt;your operating system&gt;”.</p>
<p>The REPL is waiting for us to enter some JavaScript code.</p>
<p>Start simple and enter:</p><pre><code>&gt; console.log('test')testundefined&gt;</code></pre>
<p>The first value, <code>test</code>, is the output we told the console to print, then we get undefined which is the return value of running <code>console.log()</code>.</p>
<p>We can now enter a new line of JavaScript.</p>
<h4 id="use-the-tab-to-autocomplete">Use the tab to autocomplete</h4>
<p>The cool thing about the REPL is that it’s interactive.</p>
<p>As you write your code, if you press the <code>tab</code> key the REPL will try to autocomplete what you wrote to match a variable you already defined or a predefined one.</p>
<h4 id="exploring-javascript-objects">Exploring JavaScript objects</h4>
<p>Try entering the name of a JavaScript class, like <code>Number</code>, add a dot and press <code>tab</code>.</p>
<p>The REPL will print all the properties and methods you can access on that class:</p>
<h4 id="explore-global-objects">Explore global objects</h4>
<p>You can inspect the globals you have access to by typing <code>global.</code> and pressing <code>tab</code>:</p>
<h4 id="the-_-special-variable">The _ special variable</h4>
<p>If after some code you type <code>_</code>, that is going to print the result of the last operation.</p>
<h4 id="dot-commands">Dot commands</h4>
<p>The REPL has some special commands, all starting with a dot <code>.</code>. They are</p>
<ul>
<li><code>.help</code>: shows the dot commands help</li>
<li><code>.editor</code>: enables editor more, to write multiline JavaScript code with ease. Once you are in this mode, enter ctrl-D to run the code you wrote.</li>
<li><code>.break</code>: when inputting a multi-line expression, entering the .break command will abort further input. Same as pressing ctrl-C.</li>
<li><code>.clear</code>: resets the REPL context to an empty object and clears any multi-line expression currently being input.</li>
<li><code>.load</code>: loads a JavaScript file, relative to the current working directory</li>
<li><code>.save</code>: saves all you entered in the REPL session to a file (specify the filename)</li>
<li><code>.exit</code>: exists the repl (same as pressing ctrl-C two times)</li>
</ul>
<p>The REPL knows when you are typing a multi-line statement without the need to invoke <code>.editor</code>.</p>
<p>For example if you start typing an iteration like this:</p><pre><code>[1, 2, 3].forEach(num =&gt;; {</code></pre>
<p>and you press <code>enter</code>, the REPL will go to a new line that starts with 3 dots, indicating you can now continue to work on that block.</p><pre><code>... console.log(num)... })</code></pre>
<p>If you type <code>.break</code> at the end of a line, the multiline mode will stop and the statement will not be executed.</p>
<h3 id="node-js-accept-arguments-from-the-command-line">Node.js, accept arguments from the command line</h3>
<p>How to accept arguments in a Node.js program passed from the command line</p>
<p>You can pass any number of arguments when invoking a Node.js application using:</p><pre><code>node app.js</code></pre>
<p>Arguments can be standalone or have a key and a value.</p>
<p>For example:</p><pre><code>node app.js flavio</code></pre>
<p>or</p><pre><code>node app.js name=flavio</code></pre>
<p>This changes how you will retrieve this value in the Node.js code.</p>
<p>The way you retrieve it is using the <code>process</code> object built into Node.js.</p>
<p>It exposes an <code>argv</code> property, which is an array that contains all the command line invocation arguments.</p>
<p>The first argument is the full path of the <code>node</code> command.</p>
<p>The second element is the full path of the file being executed.</p>
<p>All the additional arguments are present from the third position going forward.</p>
<p>You can iterate over all the arguments (including the node path and the file path) using a loop:</p><pre><code>process.argv.forEach((val, index) =&gt; {  console.log(`${index}: ${val}`)})</code></pre>
<p>You can get only the additional arguments by creating a new array that excludes the first 2 params:</p><pre><code>const args = process.argv.slice(2)</code></pre>
<p>If you have one argument without an index name, like this:</p><pre><code>node app.js flavio</code></pre>
<p>you can access it using</p><pre><code>const args = process.argv.slice(2)args[0]</code></pre>
<p>In this case:</p><pre><code>node app.js name=flavio</code></pre>
<p><code>args[0]</code> is <code>name=flavio</code>, and you need to parse it. The best way to do so is by using the <code>minimist</code> <a href="https://www.npmjs.com/package/minimist" rel="noopener">library</a>, which helps dealing with arguments:</p><pre><code>const args = require('minimist')(process.argv.slice(2))args['name'] //flavio</code></pre>
<h3 id="output-to-the-command-line-using-node-js">Output to the command line using Node.js</h3>
<p>How to print to the command line console using Node.js, from the basic console.log to more complex scenarios</p>
<h4 id="basic-output-using-the-console-module">Basic output using the console module</h4>
<p>Node.js provides a <code>console</code> <a href="https://nodejs.org/api/console.html" rel="noopener">module</a> which provides tons of very useful ways to interact with the command line.</p>
<p>It is basically the same as the <code>console</code> object you find in the browser.</p>
<p>The most basic and most used method is <code>console.log()</code>, which prints the string you pass to it to the console.</p>
<p>If you pass an object, it will render it as a string.</p>
<p>You can pass multiple variables to <code>console.log</code>, for example:</p><pre><code>const x = 'x'const y = 'y'console.log(x, y)</code></pre>
<p>and Node.js will print both.</p>
<p>We can also format pretty phrases by passing variables and a format specifier.</p>
<p>For example:</p><pre><code>console.log('My %s has %d years', 'cat', 2)</code></pre>
<ul>
<li><code>%s</code> format a variable as a string</li>
<li><code>%d</code> or <code>%i</code> format a variable as an integer</li>
<li><code>%f</code> format a variable as a floating point number</li>
<li><code>%O</code> used to print an object representation</li>
</ul>
<p>Example:</p><pre><code>console.log('%O', Number)</code></pre>
<h4 id="clear-the-console">Clear the console</h4>
<p><code>console.clear()</code> clears the console (the behavior might depend on the console used)</p>
<h4 id="counting-elements">Counting elements</h4>
<p><code>console.count()</code> is a handy method.</p>
<p>Take this code:</p><pre><code>const x = 1const y = 2const z = 3console.count(  'The value of x is ' + x + ' and has been checked .. how many times?')console.count(  'The value of x is ' + x + ' and has been checked .. how many times?')console.count(  'The value of y is ' + y + ' and has been checked .. how many times?')</code></pre>
<p>What happens is that <code>count</code> will count the number of times a string is printed, and print the count next to it.</p>
<p>You can just count apples and oranges:</p><pre><code>const oranges = ['orange', 'orange']const apples = ['just one apple']oranges.forEach(fruit =&gt; {  console.count(fruit)})apples.forEach(fruit =&gt; {  console.count(fruit)})</code></pre>
<h4 id="print-the-stack-trace">Print the stack trace</h4>
<p>There might be cases where it’s useful to print the call stack trace of a function, maybe to answer the question: “How did you reach that part of the code?”</p>
<p>You can do so using <code>console.trace()</code>:</p><pre><code>const function2 = () =&gt; console.trace()const function1 = () =&gt; function2()function1()</code></pre>
<p>This will print the stack trace. This is what’s printed if I try this in the Node REPL:</p><pre><code>Trace    at function2 (repl:1:33)    at function1 (repl:1:25)    at repl:1:1    at ContextifyScript.Script.runInThisContext (vm.js:44:33)    at REPLServer.defaultEval (repl.js:239:29)    at bound (domain.js:301:14)    at REPLServer.runBound [as eval] (domain.js:314:12)    at REPLServer.onLine (repl.js:440:10)    at emitOne (events.js:120:20)    at REPLServer.emit (events.js:210:7)</code></pre>
<h4 id="calculate-the-time-spent">Calculate the time spent</h4>
<p>You can easily calculate how much time a function takes to run, using <code>time()</code> and <code>timeEnd()</code></p><pre><code>const doSomething = () =&gt; console.log('test')const measureDoingSomething = () =&gt; {  console.time('doSomething()')  //do something, and measure the time it takes  doSomething()  console.timeEnd('doSomething()')}measureDoingSomething()</code></pre>
<h4 id="stdout-and-stderr">stdout and stderr</h4>
<p>As we saw console.log is great for printing messages in the Console. This is what’s called the standard output, or <code>stdout</code>.</p>
<p><code>console.error</code> prints to the <code>stderr</code> stream.</p>
<p>It will not appear in the console, but it will appear in the error log.</p>
<h4 id="color-the-output">Color the output</h4>
<p>You can color the output of your text in the console by using escape sequences. An escape sequence is a set of characters that identifies a color.</p>
<p>Example:</p><pre><code>console.log('\x1b[33m%s\x1b[0m', 'hi!')</code></pre>
<p>You can try that in the Node REPL, and it will print <code>hi!</code> in yellow.</p>
<p>However, this is the low-level way to do this. The simplest way to go about coloring the console output is by using a library. <a href="https://github.com/chalk/chalk" rel="noopener">Chalk</a> is such a library, and in addition to coloring it also helps with other styling facilities, like making text bold, italic or underlined.</p>
<p>You install it with <code>npm install chalk</code>, then you can use it:</p><pre><code>const chalk = require('chalk')console.log(chalk.yellow('hi!'))</code></pre>
<p>Using <code>chalk.yellow</code> is much more convenient than trying to remember the escape codes, and the code is much more readable.</p>
<p>Check the project link I posted above for more usage examples.</p>
<h4 id="create-a-progress-bar">Create a progress bar</h4>
<p><a href="https://www.npmjs.com/package/progress" rel="noopener">Progress</a> is an awesome package to create a progress bar in the console. Install it using <code>npm install progress</code>.</p>
<p>This snippet creates a 10-step progress bar, and every 100 ms one step is completed. When the bar completes we clear the interval:</p><pre><code>const ProgressBar = require('progress')</code></pre><pre><code>const bar = new ProgressBar(':bar', { total: 10 })const timer = setInterval(() =&gt; {  bar.tick()  if (bar.complete) {    clearInterval(timer)  }}, 100)</code></pre>
<h3 id="accept-input-from-the-command-line-in-node-js">Accept input from the command line in Node.js</h3>
<p>How to make a Node.js CLI program interactive?</p>
<p>Node since version 7 provides the <code>readline</code> <a href="https://nodejs.org/api/readline.html" rel="noopener">module</a> to perform exactly this: get input from a readable stream such as the <code>process.stdin</code> stream, which during the execution of a Node program is the terminal input, one line at a time.</p><pre><code>const readline = require('readline').createInterface({  input: process.stdin,  output: process.stdout})</code></pre><pre><code>readline.question(`What's your name?`, (name) =&gt; {  console.log(`Hi ${name}!`)  readline.close()})</code></pre>
<p>This piece of code asks the username, and once the text is entered and the user presses enter, we send a greeting.</p>
<p>The <code>question()</code> method shows the first parameter (a question) and waits for the user input. It calls the callback function once enter is pressed.</p>
<p>In this callback function, we close the readline interface.</p>
<p><code>readline</code> offers several other methods, and I’ll let you check them out on the package documentation I linked above.</p>
<p>If you need to require a password, it’s best to now echo it back, but instead showing a <code>*</code>symbol.</p>
<p>The simplest way is to use the readline-sync <a href="https://www.npmjs.com/package/readline-sync" rel="noopener">package</a> which is very similar in terms of the API and handles this out of the box.</p>
<p>A more complete and abstract solution is provided by the <a href="https://github.com/SBoudrias/Inquirer.js" rel="noopener">Inquirer.js package</a>.</p>
<p>You can install it using <code>npm install inquirer</code>, and then you can replicate the above code like this:</p><pre><code>const inquirer = require('inquirer')</code></pre><pre><code>var questions = [{  type: 'input',  name: 'name',  message: "What's your name?",}]</code></pre><pre><code>inquirer.prompt(questions).then(answers =&gt; {  console.log(`Hi ${answers['name']}!`)})</code></pre>
<p>Inquirer.js lets you do many things like asking multiple choices, having radio buttons, confirmations, and more.</p>
<p>It’s worth knowing all the alternatives, especially the built-in ones provided by Node.js, but if you plan to take CLI input to the next level, Inquirer.js is an optimal choice.</p>
<h3 id="expose-functionality-from-a-node-js-file-using-exports">Expose functionality from a Node.js file using exports</h3>
<p>How to use the <code>module.exports</code> API to expose data to other files in your application, or to other applications as well</p>
<p>Node.js has a built-in module system.</p>
<p>A Node.js file can import functionality exposed by other Node.js files.</p>
<p>When you want to import something you use:</p><pre><code>const library = require('./library')</code></pre>
<p>to import the functionality exposed in the <code>library.js</code> file that resides in the current file folder.</p>
<p>In this file, functionality must be exposed before it can be imported by other files.</p>
<p>Any other object or variable defined in the file by default is private and not exposed to the outer world.</p>
<p>This is what the <code>module.exports</code> API offered by the <code>module</code> <a href="https://nodejs.org/api/modules.html" rel="noopener">system</a> allows us to do.</p>
<p>When you assign an object or a function as a new <code>exports</code> property, that is the thing that’s being exposed. As such, it can be imported in other parts of your app, or in other apps as well.</p>
<p>You can do so in 2 ways.</p>
<p>The first is to assign an object to <code>module.exports</code>, which is an object provided out of the box by the module system, and this will make your file export <strong>just that object</strong>:</p><pre><code>const car = {  brand: 'Ford',  model: 'Fiesta'}</code></pre><pre><code>module.exports = car</code></pre><pre><code>//..in the other file</code></pre><pre><code>const car = require('./car')</code></pre>
<p>The second way is to add the exported object as a property of <code>exports</code>. This way allows you to export <strong>multiple</strong> objects, functions or data:</p><pre><code>const car = {  brand: 'Ford',  model: 'Fiesta'}</code></pre><pre><code>exports.car = car</code></pre>
<p>or directly</p><pre><code>exports.car = {  brand: 'Ford',  model: 'Fiesta'}</code></pre>
<p>And in the other file, you’ll use it by referencing a property of your import:</p><pre><code>const items = require('./items')items.car</code></pre>
<p>or</p><pre><code>const car = require('./items').car</code></pre>
<p>What’s the difference between <code>module.exports</code> and <code>exports</code>?</p>
<p>The first exposes <strong>the object</strong> it points to. The latter exposes <strong>the properties</strong> of the object it points to.</p>
<h3 id="introduction-to-npm">Introduction to npm</h3>
<p><code>npm</code> means <strong>node package manager</strong>.</p>
<p>In January 2017 over 350,000 packages were reported as being listed in the npm registry, making it the biggest single language code repository on Earth, and you can be sure there is a package for (almost!) everything.</p>
<p>It started as a way to download and manage dependencies of Node.js packages, but it has since become a tool used also in front-end JavaScript.</p>
<p>There are many things that <code>npm</code> does.</p>
<h4 id="downloads">Downloads</h4>
<p><code>npm</code> manages downloads of dependencies of your project.</p>
<h4 id="installing-all-dependencies">Installing all dependencies</h4>
<p>If a project has a <code>packages.json</code> file, by running</p><pre><code>npm install</code></pre>
<p>it will install everything the project needs, in the <code>node_modules</code> folder, creating it if it’s not existing already.</p>
<h4 id="installing-a-single-package">Installing a single package</h4>
<p>You can also install a specific package by running</p><pre><code>npm install &lt;package-name&gt;</code></pre>
<p>Often you’ll see more flags added to this command:</p>
<ul>
<li><code>--save</code> installs and adds the entry to the <code>package.json</code> file <code>dependencies</code></li>
<li><code>--save-dev</code> installs and adds the entry to the <code>package.json</code> file <code>devDependencies</code></li>
</ul>
<p>The difference is mainly that <code>devDependencies</code> are usually development tools, like a testing library, while <code>dependencies</code> are bundled with the app in production.</p>
<h4 id="updating-packages">Updating packages</h4>
<p>Updating is also made easy, by running</p><pre><code>npm update</code></pre>
<p><code>npm</code> will check all packages for a newer version that satisfies your versioning constraints.</p>
<p>You can specify a single package to update as well:</p><pre><code>npm update &lt;package-name&gt;</code></pre>
<h4 id="versioning">Versioning</h4>
<p>In addition to plain downloads, <code>npm</code> also manages <strong>versioning</strong>, so you can specify any specific version of a package, or require a version higher or lower than what you need.</p>
<p>Many times you’ll find that a library is only compatible with a major release of another library.</p>
<p>Or a bug in the latest release of a lib, still unfixed, is causing an issue.</p>
<p>Specifying an explicit version of a library also helps to keep everyone on the same exact version of a package, so that the whole team runs the same version until the <code>package.json</code> file is updated.</p>
<p>In all those cases, versioning helps a lot, and <code>npm</code> follows the semantic versioning (semver) standard.</p>
<h4 id="running-tasks">Running Tasks</h4>
<p>The package.json file supports a format for specifying command line tasks that can be run by using</p><pre><code>npm &lt;task-name&gt;</code></pre>
<p>For example:</p><pre><code>{  "scripts": {    "start-dev": "node lib/server-development",    "start": "node lib/server-production"  }}</code></pre>
<p>It’s very common to use this feature to run Webpack:</p><pre><code>{  "scripts": {    "watch": "webpack --watch --progress --colors --config webpack.conf.js",    "dev": "webpack --progress --colors --config webpack.conf.js",    "prod": "NODE_ENV=production webpack -p --config webpack.conf.js",  }}</code></pre>
<p>So instead of typing those long commands, which are easy to forget or mistype, you can run</p><pre><code>$ npm watch$ npm dev$ npm prod</code></pre>
<h3 id="where-does-npm-install-the-packages">Where does npm install the packages?</h3>
<p>When you install a package using <code>npm</code> (or <a href="https://flaviocopes.com/yarn/" rel="noopener">yarn</a>), you can perform 2 types of installation:</p>
<ul>
<li>a local install</li>
<li>a global install</li>
</ul>
<p>By default, when you type an <code>npm install</code> command, like:</p><pre><code>npm install lodash</code></pre>
<p>the package is installed in the current file tree, under the <code>node_modules</code> subfolder.</p>
<p>As this happens, <code>npm</code> also adds the <code>lodash</code> entry in the <code>dependencies</code> property of the <code>package.json</code> file present in the current folder.</p>
<p>A global installation is performed using the <code>-g</code> flag:</p><pre><code>npm install -g lodash</code></pre>
<p>When this happens, npm won’t install the package under the local folder, but instead, it will use a global location.</p>
<p>Where, exactly?</p>
<p>The <code>npm root -g</code> command will tell you where that exact location is on your machine.</p>
<p>On macOS or Linux this location could be <code>/usr/local/lib/node_modules</code>. On Windows it could be <code>C:\Users\YOU\AppData\Roaming\npm\node_modules</code></p>
<p>If you use <code>nvm</code> to manage Node.js versions, however, that location would differ.</p>
<p>I for example use <code>nvm</code> and my packages location was shown as<code>/Users/flavio/.nvm/versions/node/v8.9.0/lib/node_modules</code>.</p>
<h3 id="how-to-use-or-execute-a-package-installed-using-npm">How to use or execute a package installed using npm</h3>
<h4 id="how-to-include-and-use-in-your-code-a-package-installed-in-your-node_modules-folder">How to include and use in your code a package installed in your node_modules folder</h4>
<p>When you install using <code>npm</code> a package into your <code>node_modules</code> folder, or also globally, how do you use it in your Node code?</p>
<p>Say you install <code>lodash</code>, the popular JavaScript utility library, using</p><pre><code>npm install lodash</code></pre>
<p>This is going to install the package in the local <code>node_modules</code> folder.</p>
<p>To use it in your code, you just need to import it into your program using <code>require</code>:</p><pre><code>const _ = require('lodash)</code></pre>
<p>What if your package is an executable?</p>
<p>In this case, it will put the executable file under the <code>node_modules/.bin/</code> folder.</p>
<p>One easy way to demonstrate this is <a href="https://www.npmjs.com/package/cowsay" rel="noopener">cowsay</a>.</p>
<p>The cowsay package provides a command line program that can be executed to make a cow say something (and other animals as well).</p>
<p>When you install the package using <code>npm install cowsay</code>, it will install itself and a few dependencies in the node_modules folder:</p>
<p>There is a hidden .bin folder, which contains symbolic links to the cowsay binaries.</p>
<p>How do you execute those?</p>
<p>You can of course type <code>./node_modules/.bin/cowsay</code> to run it, and it works, but <a href="https://flaviocopes.com/npx/" rel="noopener">npx</a>, included in the recent versions of npm (since 5.2), is a much better option. You just run:</p><pre><code>npx cowsay</code></pre>
<p>and npx will find the package location.</p>
<h3 id="the-package-json-guide">The package.json guide</h3>
<p>The package.json file is a key element in lots of app codebases based on the Node.js ecosystem.</p>
<p>If you work with JavaScript, or you’ve ever interacted with a JavaScript project, Node.js or a front-end project, you surely met the <code>package.json</code> file.</p>
<p>What’s that for? What should you know about it, and what are some of the cool things you can do with it?</p>
<p>The <code>package.json</code> file is kind of a manifest for your project. It can do a lot of things, completely unrelated. It’s a central repository of configuration for tools, for example. It’s also where <code><a href="https://flaviocopes.com/npm/" rel="noopener">npm</a></code>and <code><a href="https://flaviocopes.com/yarn/" rel="noopener">yarn</a></code>store the names and versions of the package it installed.</p>
<h4 id="the-file-structure">The file structure</h4>
<p>Here’s an example package.json file:</p><pre><code>{</code></pre><pre><code>}</code></pre>
<p>It’s empty! There are no fixed requirements of what should be in a <code>package.json</code> file, for an application. The only requirement is that it respects the JSON format, otherwise it cannot be read by programs that try to access its properties programmatically.</p>
<p>If you’re building a Node.js package that you want to distribute over <code>npm</code> things change radically, and you must have a set of properties that will help other people use it. We’ll see more about this later on.</p>
<p>This is another package.json:</p><pre><code>{  "name": "test-project"}</code></pre>
<p>It defines a <code>name</code> property, which tells the name of the app, or package, that’s contained in the same folder where this file lives.</p>
<p>Here’s a much more complex example, which I extracted this from a sample Vue.js application:</p><pre><code>{  "name": "test-project",  "version": "1.0.0",  "description": "A Vue.js project",  "main": "src/main.js",  "private": true,  "scripts": {    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",    "start": "npm run dev",    "unit": "jest --config test/unit/jest.conf.js --coverage",    "test": "npm run unit",    "lint": "eslint --ext .js,.vue src test/unit",    "build": "node build/build.js"  },  "dependencies": {    "vue": "^2.5.2"  },  "devDependencies": {    "autoprefixer": "^7.1.2",    "babel-core": "^6.22.1",    "babel-eslint": "^8.2.1",    "babel-helper-vue-jsx-merge-props": "^2.0.3",    "babel-jest": "^21.0.2",    "babel-loader": "^7.1.1",    "babel-plugin-dynamic-import-node": "^1.2.0",    "babel-plugin-syntax-jsx": "^6.18.0",    "babel-plugin-transform-es2015-modules-commonjs": "^6.26.0",    "babel-plugin-transform-runtime": "^6.22.0",    "babel-plugin-transform-vue-jsx": "^3.5.0",    "babel-preset-env": "^1.3.2",    "babel-preset-stage-2": "^6.22.0",    "chalk": "^2.0.1",    "copy-webpack-plugin": "^4.0.1",    "css-loader": "^0.28.0",    "eslint": "^4.15.0",    "eslint-config-airbnb-base": "^11.3.0",    "eslint-friendly-formatter": "^3.0.0",    "eslint-import-resolver-webpack": "^0.8.3",    "eslint-loader": "^1.7.1",    "eslint-plugin-import": "^2.7.0",    "eslint-plugin-vue": "^4.0.0",    "extract-text-webpack-plugin": "^3.0.0",    "file-loader": "^1.1.4",    "friendly-errors-webpack-plugin": "^1.6.1",    "html-webpack-plugin": "^2.30.1",    "jest": "^22.0.4",    "jest-serializer-vue": "^0.3.0",    "node-notifier": "^5.1.2",    "optimize-css-assets-webpack-plugin": "^3.2.0",    "ora": "^1.2.0",    "portfinder": "^1.0.13",    "postcss-import": "^11.0.0",    "postcss-loader": "^2.0.8",    "postcss-url": "^7.2.1",    "rimraf": "^2.6.0",    "semver": "^5.3.0",    "shelljs": "^0.7.6",    "uglifyjs-webpack-plugin": "^1.1.1",    "url-loader": "^0.5.8",    "vue-jest": "^1.0.2",    "vue-loader": "^13.3.0",    "vue-style-loader": "^3.0.1",    "vue-template-compiler": "^2.5.2",    "webpack": "^3.6.0",    "webpack-bundle-analyzer": "^2.9.0",    "webpack-dev-server": "^2.9.1",    "webpack-merge": "^4.1.0"  },  "engines": {    "node": "&gt;= 6.0.0",    "npm": "&gt;= 3.0.0"  },  "browserslist": [    "&gt; 1%",    "last 2 versions",    "not ie &amp;lt;= 8"  ]}</code></pre>
<p>there are<strong> lots</strong> of things going on here:</p>
<ul>
<li><code>name</code> sets the application/package name</li>
<li><code>version</code> indicates the current version</li>
<li><code>description</code> is a brief description of the app/package</li>
<li><code>main</code> set the entry point for the application</li>
<li><code>private</code> if set to <code>true</code> prevents the app/package to be accidentally published on <code>npm</code></li>
<li><code>scripts</code> defines a set of node scripts you can run</li>
<li><code>dependencies</code> sets a list of <code>npm</code> packages installed as dependencies</li>
<li><code>devDependencies</code> sets a list of <code>npm</code> packages installed as development dependencies</li>
<li><code>engines</code> sets which versions of Node this package/app works on</li>
<li><code>browserslist</code> is used to tell which browsers (and their versions) you want to support</li>
</ul>
<p>All those properties are used by either <code>npm</code> or other tools that we can use.</p>
<h4 id="properties-breakdown">Properties breakdown</h4>
<p>This section describes the properties you can use in detail. I refer to “package” but the same thing applies to local applications which you do not use as packages.</p>
<p>Most of those properties are only used on the npm <a href="https://www.npmjs.com/" rel="noopener">website</a>, other by scripts that interact with your code, like <code>npm</code> or others.</p>
<h4 id="name"><code>name</code></h4>
<p>Sets the package name.</p>
<p>Example:</p><pre><code>"name": "test-project"</code></pre>
<p>The name must be less than 214 characters, must not have spaces, it can only contain lowercase letters, hyphens (<code>-</code>) or underscores (<code>_</code>).</p>
<p>This is because when a package is published on <code>npm</code>, it gets its own URL based on this property.</p>
<p>If you published this package publicly on GitHub, a good value for this property is the GitHub repository name.</p>
<h4 id="author"><code>author</code></h4>
<p>Lists the package author name</p>
<p>Example:</p><pre><code>{  "author": "Flavio Copes &lt;flavio@flaviocopes.com&gt; (https://flaviocopes.com)"}</code></pre>
<p>Can also be used with this format:</p><pre><code>{  "author": {    "name": "Flavio Copes",    "email": "flavio@flaviocopes.com",    "url": "https://flaviocopes.com"  }}</code></pre>
<h4 id="contributors"><code>contributors</code></h4>
<p>As well as the author, the project can have one or more contributors. This property is an array that lists them.</p>
<p>Example:</p><pre><code>{  "contributors": [    "Flavio Copes &lt;flavio@flaviocopes.com&gt; (https://flaviocopes.com)"  ]}</code></pre>
<p>Can also be used with this format:</p><pre><code>{  "contributors": [    {      "name": "Flavio Copes",      "email": "flavio@flaviocopes.com",      "url": "https://flaviocopes.com"    }  ]}</code></pre>
<h4 id="bugs"><code>bugs</code></h4>
<p>Links to the package issue tracker, most likely a GitHub issues page</p>
<p>Example:</p><pre><code>{  "bugs": "https://github.com/flaviocopes/package/issues"}</code></pre>
<h4 id="homepage"><code>homepage</code></h4>
<p>Sets the package homepage</p>
<p>Example:</p><pre><code>{  "homepage": "https://flaviocopes.com/package"}</code></pre>
<h4 id="version"><code>version</code></h4>
<p>Indicates the current version of the package.</p>
<p>Example:</p><pre><code>"version": "1.0.0"</code></pre>
<p>This property follows the semantic versioning (semver) notation for versions, which means the version is always expressed with 3 numbers: <code>x.x.x</code>.</p>
<p>The first number is the major version, the second the minor version and the third is the patch version.</p>
<p>There is a meaning in these numbers: a release that only fixes bugs is a patch release, a release that introduces backward-compatible changes is a minor release, a major release can have breaking changes.</p>
<h4 id="license"><code>license</code></h4>
<p>Indicates the license of the package.</p>
<p>Example:</p><pre><code>"license": "MIT"</code></pre>
<h4 id="keywords"><code>keywords</code></h4>
<p>This property contains an array of keywords that associate with what your package does.</p>
<p>Example:</p><pre><code>"keywords": [  "email",  "machine learning",  "ai"]</code></pre>
<p>This helps people find your package when navigating similar packages, or when browsing the npm website.</p>
<h4 id="description"><code>description</code></h4>
<p>This property contains a brief description of the package.</p>
<p>Example:</p><pre><code>"description": "A package to work with strings"</code></pre>
<p>This is especially useful if you decide to publish your package to <code>npm</code> so that people can find out what the package is about.</p>
<h4 id="repository"><code>repository</code></h4>
<p>This property specifies where this package repository is located.</p>
<p>Example:</p><pre><code>"repository": "github:flaviocopes/testing",</code></pre>
<p>Notice the <code>github</code> prefix. There are other popular services baked in:</p><pre><code>"repository": "gitlab:flaviocopes/testing",</code></pre><pre><code>"repository": "bitbucket:flaviocopes/testing",</code></pre>
<p>You can explicitly set the version control system:</p><pre><code>"repository": {  "type": "git",  "url": "https://github.com/flaviocopes/testing.git"}</code></pre>
<p>You can use different version control systems:</p><pre><code>"repository": {  "type": "svn",  "url": "..."}</code></pre>
<h4 id="main"><code>main</code></h4>
<p>Sets the entry point for the package.</p>
<p>When you import this package in an application, that’s where the application will search for the module exports.</p>
<p>Example:</p><pre><code>"main": "src/main.js"</code></pre>
<h4 id="private"><code>private</code></h4>
<p>if set to <code>true</code> prevents the app/package to be accidentally published on <code>npm</code></p>
<p>Example:</p><pre><code>"private": true</code></pre>
<h4 id="scripts"><code>scripts</code></h4>
<p>Defines a set of node scripts you can run</p>
<p>Example:</p><pre><code>"scripts": {  "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",  "start": "npm run dev",  "unit": "jest --config test/unit/jest.conf.js --coverage",  "test": "npm run unit",  "lint": "eslint --ext .js,.vue src test/unit",  "build": "node build/build.js"}</code></pre>
<p>These scripts are command line applications. You can run them by calling <code>npm run XXXX</code> or <code>yarn XXXX</code>, where <code>XXXX</code> is the command name.</p>
<p>Example:<br><code>npm run dev</code></p>
<p>You can use any name you want for a command, and scripts can do literally anything you want.</p>
<h4 id="dependencies"><code>dependencies</code></h4>
<p>Sets a list of <code>npm</code> packages installed as dependencies.</p>
<p>When you install a package using npm or yarn:</p><pre><code>npm install &lt;PACKAGENAME&gt;yarn add &lt;PACKAGENAME&gt;</code></pre>
<p>that package is automatically inserted in this list.</p>
<p>Example:</p><pre><code>"dependencies": {  "vue": "^2.5.2"}</code></pre>
<h4 id="devdependencies"><code>devDependencies</code></h4>
<p>Sets a list of <code>npm</code> packages installed as development dependencies.</p>
<p>They differ from <code>dependencies</code> because they are meant to be installed only on a development machine, not needed to run the code in production.</p>
<p>When you install a package using <code>npm</code> or <code>yarn</code>:</p><pre><code>npm install --dev &lt;PACKAGENAME&gt;yarn add --dev &lt;PACKAGENAME&gt;</code></pre>
<p>that package is automatically inserted in this list.</p>
<p>Example:</p><pre><code>"devDependencies": {  "autoprefixer": "^7.1.2",  "babel-core": "^6.22.1"}</code></pre>
<h4 id="engines"><code>engines</code></h4>
<p>Sets which versions of Node.js and other commands this package/app works on.</p>
<p>Example:</p><pre><code>"engines": {  "node": "&gt;= 6.0.0",  "npm": "&gt;= 3.0.0",  "yarn": "^0.13.0"}</code></pre>
<h4 id="browserslist"><code>browserslist</code></h4>
<p>Is used to tell which browsers (and their versions) you want to support. It’s referenced by Babel, Autoprefixer, and other tools, to only add the polyfills and fallbacks needed to the browsers you target.</p>
<p>Example:</p><pre><code>"browserslist": [  "&gt; 1%",  "last 2 versions",  "not ie &lt;= 8"]</code></pre>
<p>This configuration means you want to support the last 2 major versions of all browsers with at least 1% of usage (from the <a href="https://caniuse.com/" rel="noopener">CanIUse.com</a> stats), except IE8 and lower (<a href="https://www.npmjs.com/package/browserslist" rel="noopener">see more</a> on browserslist).</p>
<h4 id="command-specific-properties">Command-specific properties</h4>
<p>The <code>package.json</code> file can also host command-specific configuration, for example for Babel, ESLint, and more.</p>
<p>Each has a specific property, like <code>eslintConfig</code>, <code>babel</code> and others. Those are command-specific, and you can find how to use those in the respective command/project documentation.</p>
<h4 id="package-versions">Package versions</h4>
<p>You have seen in the description above version numbers like these: <code>~3.0.0</code> or <code>^0.13.0</code>. What do they mean, and which other version specifiers can you use?</p>
<p>That symbol specifies which updates you package accepts, from that dependency.</p>
<p>Given that using semver (semantic versioning) all versions have 3 digits, the first being the major release, the second the minor release and the third is the patch release, you have these rules:</p>
<ul>
<li><code>~</code>: if you write <code>~0.13.0</code>, you want to only update patch releases: <code>0.13.1</code> is ok, but <code>0.14.0</code> is not.</li>
<li><code>^</code>: if you write <code>^0.13.0</code>, you want to update patch and minor releases: <code>0.13.1</code>, <code>0.14.0</code>and so on.</li>
<li><code>*</code>: if you write <code>*</code>, that means you accept all updates, including major version upgrades.</li>
<li><code>&amp;</code>gt;: you accept any version higher than the one you specify</li>
<li><code>&amp;g</code>t;=: you accept any version equal to or higher than the one you specify</li>
<li><code>&amp;l</code>t;=: you accept any version equal or lower to the one you specify</li>
<li><code>&amp;</code>lt;: you accept any version lower to the one you specify</li>
</ul>
<p>There are other rules, too:</p>
<ul>
<li>no symbol: you accept only that specific version you specify</li>
<li><code>latest</code>: you want to use the latest version available</li>
</ul>
<p>and you can combine most of the above in ranges, like this: <code>1.0.0 || &gt;=1.1.0 &lt;</code>;1.2.0, to either use 1.0.0 or one release from 1.1.0 up, but lower than 1.2.0.</p>
<h3 id="the-package-lock-json-file">The package-lock.json file</h3>
<p>The package-lock.json file is automatically generated when installing node packages.</p>
<p>In version 5, npm introduced the <code>package-lock.json</code> file.</p>
<p>What’s that? You probably know about the <code>package.json</code> file, which is much more common and has been around for much longer.</p>
<p>The goal of the file is to keep track of the exact version of every package that is installed so that a product is 100% reproducible in the same way even if packages are updated by their maintainers.</p>
<p>This solves a very specific problem that <code>package.json</code> left unsolved. In package.json you can set which versions you want to upgrade to (patch or minor), using the <strong>semver</strong> notation, for example:</p>
<ul>
<li>if you write <code>~0.13.0</code>, you want to only update patch releases: <code>0.13.1</code> is ok, but <code>0.14.0</code>is not.</li>
<li>if you write <code>^0.13.0</code>, you want to update patch and minor releases: <code>0.13.1</code>, <code>0.14.0</code>and so on.</li>
<li>if you write <code>0.13.0</code>, that is the exact version that will be used, always</li>
</ul>
<p>You don’t commit to Git your node_modules folder, which is generally huge, and when you try to replicate the project on another machine by using the <code>npm install</code> command, if you specified the <code>~</code> syntax and a patch release of a package has been released, that one is going to be installed. Same for <code>^</code> and minor releases.</p>
<p>If you specify exact versions, like <code>0.13.0</code> in the example, you are not affected by this problem.</p>
<p>It could be you, or another person trying to initialize the project on the other side of the world by running <code>npm install</code>.</p>
<p>So your original project and the newly initialized project are actually different. Even if a patch or minor release should not introduce breaking changes, we all know bugs can (and so, they will) slide in.</p>
<p>The <code>package-lock.json</code> sets your currently installed version of each package <strong>in stone</strong>, and <code>npm</code> will use those exact versions when running <code>npm install</code>.</p>
<p>This concept is not new, and other programming languages package managers (like Composer in PHP) use a similar system for years.</p>
<p>The <code>package-lock.json</code> file needs to be committed to your Git repository, so it can be fetched by other people, if the project is public or you have collaborators, or if you use Git as a source for deployments.</p>
<p>The dependencies versions will be updated in the <code>package-lock.json</code> file when you run <code>npm update</code>.</p>
<h4 id="an-example">An example</h4>
<p>This is an example structure of a <code>package-lock.json</code> file we get when we run <code>npm install cowsay</code> in an empty folder:</p><pre><code>{  "requires": true,  "lockfileVersion": 1,  "dependencies": {    "ansi-regex": {      "version": "3.0.0",      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-3.0.0.tgz",      "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg="    },    "cowsay": {      "version": "1.3.1",      "resolved": "https://registry.npmjs.org/cowsay/-/cowsay-1.3.1.tgz",      "integrity": "sha512-3PVFe6FePVtPj1HTeLin9v8WyLl+VmM1l1H/5P+BTTDkMAjufp+0F9eLjzRnOHzVAYeIYFF5po5NjRrgefnRMQ==",      "requires": {        "get-stdin": "^5.0.1",        "optimist": "~0.6.1",        "string-width": "~2.1.1",        "strip-eof": "^1.0.0"      }    },    "get-stdin": {      "version": "5.0.1",      "resolved": "https://registry.npmjs.org/get-stdin/-/get-stdin-5.0.1.tgz",      "integrity": "sha1-Ei4WFZHiH/TFJTAwVpPyDmOTo5g="    },    "is-fullwidth-code-point": {      "version": "2.0.0",      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",      "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8="    },    "minimist": {      "version": "0.0.10",      "resolved": "https://registry.npmjs.org/minimist/-/minimist-0.0.10.tgz",      "integrity": "sha1-3j+YVD2/lggr5IrRoMfNqDYwHc8="    },    "optimist": {      "version": "0.6.1",      "resolved": "https://registry.npmjs.org/optimist/-/optimist-0.6.1.tgz",      "integrity": "sha1-2j6nRob6IaGaERwybpDrFaAZZoY=",</code></pre><pre><code>      "requires": {        "minimist": "~0.0.1",        "wordwrap": "~0.0.2"      }    },    "string-width": {      "version": "2.1.1",      "resolved": "https://registry.npmjs.org/string-width/-/string-width-2.1.1.tgz",      "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",      "requires": {        "is-fullwidth-code-point": "^2.0.0",        "strip-ansi": "^4.0.0"      }    },    "strip-ansi": {      "version": "4.0.0",      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-4.0.0.tgz",      "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",      "requires": {        "ansi-regex": "^3.0.0"      }    },    "strip-eof": {      "version": "1.0.0",      "resolved": "https://registry.npmjs.org/strip-eof/-/strip-eof-1.0.0.tgz",      "integrity": "sha1-u0P/VZim6wXYm1n80SnJgzE2Br8="    },    "wordwrap": {      "version": "0.0.3",      "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-0.0.3.tgz",      "integrity": "sha1-o9XabNXAvAAI03I0u68b7WMFkQc="    }  }}</code></pre>
<p>We installed <code>cowsay</code>, which depends on:</p>
<ul>
<li><code>get-stdin</code></li>
<li><code>optimist</code></li>
<li><code>string-width</code></li>
<li><code>strip-eof</code></li>
</ul>
<p>In turn, those packages require other packages, as we can see from the <code>requires</code> property that some have:</p>
<ul>
<li><code>ansi-regex</code></li>
<li><code>is-fullwidth-code-point</code></li>
<li><code>minimist</code></li>
<li><code>wordwrap</code></li>
<li><code>strip-eof</code></li>
</ul>
<p>They are added in alphabetical order into the file, and each one has a <code>version</code> field, a <code>resolved</code> field that points to the package location, and an <code>integrity</code> string that we can use to verify the package.</p>
<h3 id="find-the-installed-version-of-an-npm-package">Find the installed version of an npm package</h3>
<p>To see the latest version of all the npm package installed, including their dependencies:</p><pre><code>npm list</code></pre>
<p>Example:</p><pre><code>❯ npm list/Users/flavio/dev/node/cowsay└─┬ cowsay@1.3.1  ├── get-stdin@5.0.1  ├─┬ optimist@0.6.1  │ ├── minimist@0.0.10  │ └── wordwrap@0.0.3  ├─┬ string-width@2.1.1  │ ├── is-fullwidth-code-point@2.0.0  │ └─┬ strip-ansi@4.0.0  │   └── ansi-regex@3.0.0  └── strip-eof@1.0.0</code></pre>
<p>You can also just open the <code>package-lock.json</code> file, but this involves some visual scanning.</p>
<p><code>npm list -g</code> is the same, but for globally installed packages.</p>
<p>To get only your top-level packages (basically, the ones you told npm to install and you listed in the <code>package.json</code>), run <code>npm list --depth=0</code>:</p><pre><code>❯ npm list --depth=0/Users/flavio/dev/node/cowsay└── cowsay@1.3.1</code></pre>
<p>You can get the version of a specific package by specifying the name:</p><pre><code>❯ npm list cowsay/Users/flavio/dev/node/cowsay└── cowsay@1.3.1</code></pre>
<p>This also works for dependencies of packages you installed:</p><pre><code>❯ npm list minimist/Users/flavio/dev/node/cowsay└─┬ cowsay@1.3.1  └─┬ optimist@0.6.1    └── minimist@0.0.10</code></pre>
<p>If you want to see what’s the latest available version of the package on the npm repository, run <code>npm view [package_name] version</code>:</p><pre><code>❯ npm view cowsay version</code></pre><pre><code>1.3.1</code></pre>
<h3 id="install-an-older-version-of-an-npm-package">Install an older version of an npm package</h3>
<p>Installing an older version of an npm package might be useful to solve a compatibility problem.</p>
<p>You can install an old version of an npm package using the <code>@</code> syntax:</p><pre><code>npm install &lt;package&gt;@&lt;;version&gt;</code></pre>
<p>Example:</p><pre><code>npm install cowsay</code></pre>
<p>installs version 1.3.1 (at the time of writing).</p>
<p>Install version 1.2.0 with:</p><pre><code>npm install cowsay@1.2.0</code></pre>
<p>The same can be done with global packages:</p><pre><code>npm install -g webpack@4.16.4</code></pre>
<p>You might also be interested in listing all the previous version of a package. You can do it with <code>npm view &lt;package&gt; ve</code>rsions:</p><pre><code>❯ npm view cowsay versions</code></pre><pre><code>[ '1.0.0',  '1.0.1',  '1.0.2',  '1.0.3',  '1.1.0',  '1.1.1',  '1.1.2',  '1.1.3',  '1.1.4',  '1.1.5',  '1.1.6',  '1.1.7',  '1.1.8',  '1.1.9',  '1.2.0',  '1.2.1',  '1.3.0',  '1.3.1' ]</code></pre>
<h3 id="update-all-the-node-dependencies-to-their-latest-version">Update all the Node dependencies to their latest version</h3>
<p>When you install a package using <code>npm install &lt;packagena</code>me&gt;, the latest available version of the package is downloaded and put i<code>n the node_m</code>odules folder, and a corresponding entry is added t<code>o the packag</code>e.jso<code>n and package-loc</code>k.json files that are present in your current folder.</p>
<p>npm calculates the dependencies and installs the latest available version of those as well.</p>
<p>Let’s say you install <code><a href="https://www.npmjs.com/package/cowsay" rel="noopener">cowsay</a></code>, a cool command line tool that lets you make a cow say <strong>things</strong>.</p>
<p>When you <code>npm install cowsay</code>, this entry is added to the <code>package.json</code> file:</p><pre><code>{  "dependencies": {    "cowsay": "^1.3.1"  }}</code></pre>
<p>and this is an extract of <code>package-lock.json</code>, where I removed the nested dependencies for clarity:</p><pre><code>{  "requires": true,  "lockfileVersion": 1,  "dependencies": {    "cowsay": {      "version": "1.3.1",      "resolved": "https://registry.npmjs.org/cowsay/-/cowsay-1.3.1.tgz",      "integrity": "sha512-3PVFe6FePVtPj1HTeLin9v8WyLl+VmM1l1H/5P+BTTDkMAjufp+0F9eLjzRnOHzVAYeIYFF5po5NjRrgefnRMQ==",      "requires": {        "get-stdin": "^5.0.1",        "optimist": "~0.6.1",        "string-width": "~2.1.1",        "strip-eof": "^1.0.0"      }    }  }}</code></pre>
<p>Now those 2 files tell us that we installed version <code>1.3.1</code> of cowsay, and our rule for updates is <code>^1.3.1</code>, which for the npm versioning rules (explained later on) means that npm can update to patch and minor releases: <code>0.13.1</code>, <code>0.14.0</code> and so on.</p>
<p>If there is a new minor or patch release and we type <code>npm update</code>, the installed version is updated, and the <code>package-lock.json</code> file diligently filled with the new version.</p>
<p><code>package.json</code> remains unchanged.</p>
<p>To discover new releases of the packages, you run <code>npm outdated</code>.</p>
<p>Here’s the list of a few outdated packages in one repository I didn’t update for quite a while:</p>
<p>Some of those updates are major releases. Running <code>npm update</code> won’t update the version of those. Major releases are never updated in this way because they (by definition) introduce breaking changes, and <code>npm</code> want to save you trouble.</p>
<p>To update to a new major version all the packages, install the <code>npm-check-updates</code> package globally:</p><pre><code>npm install -g npm-check-updates</code></pre>
<p>then run it:</p><pre><code>ncu -u</code></pre>
<p>This will upgrade all the version hints in the <code>package.json</code> file, to <code>dependencies</code> and <code>devDependencies</code>, so npm can install the new major version.</p>
<p>You are now ready to run the update:</p><pre><code>npm update</code></pre>
<p>If you just downloaded the project without the <code>node_modules</code> dependencies and you want to install the shiny new versions first, just run</p><pre><code>npm install</code></pre>
<h3 id="semantic-versioning-using-npm">Semantic Versioning using npm</h3>
<p>Semantic Versioning is a convention used to provide a meaning to versions.</p>
<p>If there’s one great thing in Node.js packages, is that all agreed on using Semantic Versioning for their version numbering.</p>
<p>The Semantic Versioning concept is simple: all versions have 3 digits: <code>x.y.z</code>.</p>
<ul>
<li>the first digit is the major version</li>
<li>the second digit is the minor version</li>
<li>the third digit is the patch version</li>
</ul>
<p>When you make a new release, you don’t just up a number as you please, but you have rules:</p>
<ul>
<li>you up the major version when you make incompatible API changes</li>
<li>you up the minor version when you add functionality in a backward-compatible manner</li>
<li>you up the patch version when you make backward-compatible bug fixes</li>
</ul>
<p>The convention is adopted all across programming languages, and it is very important that every <code>npm</code> package adheres to it, because the whole system depends on that.</p>
<p>Why is that so important?</p>
<p>Because <code>npm</code> set some rules we can use in the <code><a href="https://flaviocopes.com/package-json/" rel="noopener">package.json</a></code><a href="https://flaviocopes.com/package-json/" rel="noopener"> file</a>to choose which versions it can update our packages to, when we run <code>npm update</code>.</p>
<p>The rules use those symbols:</p>
<ul>
<li><code>^</code></li>
<li><code>~</code></li>
<li><code>&amp;</code>gt;</li>
<li><code>&amp;g</code>t;=</li>
<li><code>&amp;</code>lt;</li>
<li><code>&amp;l</code>t;=</li>
<li><code>=</code></li>
<li><code>-</code></li>
<li><code>||</code></li>
</ul>
<p>Let’s see those rules in detail:</p>
<ul>
<li><code>^</code>: if you write <code>^0.13.0</code> when running <code>npm update</code> it can update to patch and minor releases: <code>0.13.1</code>, <code>0.14.0</code> and so on.</li>
<li><code>~</code>: if you write <code>~0.13.0</code>, when running <code>npm update</code> it can update to patch releases: <code>0.13.1</code> is ok, but <code>0.14.0</code> is not.</li>
<li><code>&amp;</code>gt;: you accept any version higher than the one you specify</li>
<li><code>&amp;g</code>t;=: you accept any version equal to or higher than the one you specify</li>
<li><code>&amp;l</code>t;=: you accept any version equal or lower to the one you specify</li>
<li><code>&amp;</code>lt;: you accept any version lower to the one you specify</li>
<li><code>=</code>: you accept that exact version</li>
<li><code>-</code>: you accept a range of versions. Example: <code>2.1.0 - 2.6.2</code></li>
<li><code>||</code>: you combine sets. Example: <code>&lt; 2.1 || &amp;g</code>t; 2.6</li>
</ul>
<p>You can combine some of those notations, for example use <code>1.0.0 || &gt;=1.1.0 &lt;</code>;1.2.0 to either use 1.0.0 or one release from 1.1.0 up, but lower than 1.2.0.</p>
<p>There are other rules, too:</p>
<ul>
<li>no symbol: you accept only that specific version you specify (<code>1.2.1</code>)</li>
<li><code>latest</code>: you want to use the latest version available</li>
</ul>
<h3 id="uninstalling-npm-packages-locally-or-globally">Uninstalling npm packages locally or globally</h3>
<p>To uninstall a package you have previously installed <strong>locally</strong> (using <code>npm install &lt;package-na</code>me&gt; i<code>n the node_m</code>odules folder), run:</p><pre><code>npm uninstall &lt;package-name&gt;</code></pre>
<p>Using the <code>-S</code> flag, or <code>--save</code>, this operation will also remove the reference in the <code><a href="https://flaviocopes.com/package-json/" rel="noopener">package.json</a></code><a href="https://flaviocopes.com/package-json/" rel="noopener"> file</a>.</p>
<p>If the package was a development dependency, listed in the devDependencies of the <code>package.json</code> file, you must use the <code>-D</code> / <code>--save-dev</code> flag to remove it from the file:</p><pre><code>npm uninstall -S &lt;package-name&gt;npm uninstall -D &lt;package-name&gt;</code></pre>
<p>If the package is installed <strong>globally</strong>, you need to add the <code>-g</code> / <code>--global</code> flag:</p><pre><code>npm uninstall -g &lt;package-name&gt;</code></pre>
<p>Example:</p><pre><code>npm uninstall -g webpack</code></pre>
<p>and you can run this command from anywhere you want on your system because the folder where you currently are does not matter.</p>
<h3 id="npm-global-or-local-packages">npm global or local packages</h3>
<p>When is a package best installed globally? And why?</p>
<p>The main difference between local and global packages is this:</p>
<ul>
<li><strong>local packages</strong> are installed in the directory where you run <code>npm install &lt;package-na</code>me&gt;, and they are put i<code>n the node_m</code>odules folder under this directory</li>
<li><strong>global packages</strong> are all put in a single place in your system (exactly where depends on your setup), regardless of where you run <code>npm install -g &lt;package-na</code>me&gt;</li>
</ul>
<p>In your code, they are both required in the same way:</p><pre><code>require('package-name')</code></pre>
<p>So when should you install in one way or another?</p>
<p>In general, all packages should be installed<strong> locally</strong>.</p>
<p>This makes sure you can have dozens of applications in your computer, all running a different version of each package if needed.</p>
<p>Updating a global package would make all your projects use the new release, and as you can imagine this might cause nightmares in terms of maintenance, as some packages might break compatibility with further dependencies, and so on.</p>
<p>All projects have their own local version of a package, even if this might appear like a waste of resources, it’s minimal compared to the possible negative consequences.</p>
<p>A package should be installed <strong>globally</strong> when it provides an executable command that you run from the shell (CLI), and it’s reused across projects.</p>
<p>You can also install executable commands locally and run them using <a href="https://flaviocopes.com/npx/" rel="noopener">npx</a>, but some packages are just better installed globally.</p>
<p>Great examples of popular global packages which you might know are:</p>
<ul>
<li><code>npm</code></li>
<li><code>create-react-app</code></li>
<li><code>vue-cli</code></li>
<li><code>grunt-cli</code></li>
<li><code>mocha</code></li>
<li><code>react-native-cli</code></li>
<li><code>gatsby-cli</code></li>
<li><code>forever</code></li>
<li><code>nodemon</code></li>
</ul>
<p>You probably have some packages installed globally already on your system. You can see them by running:</p><pre><code>npm list -g --depth 0</code></pre>
<p>on your command line.</p>
<h3 id="npm-dependencies-and-devdependencies">npm dependencies and devDependencies</h3>
<p>When is a package a dependency, and when is it a development dependency?</p>
<p>When you install an npm package using <code>npm install &lt;package-na</code>me&gt;, you are installing it<strong> as a depe</strong>ndency.</p>
<p>The package is automatically listed in the package.json file, under the <code>dependencies</code> list (as of npm 5: before you had to manually specify <code>--save</code>).</p>
<p>When you add the <code>-D</code> flag, or <code>--save-dev</code>, you are installing it as a development dependency, which adds it to the <code>devDependencies</code> list.</p>
<p><strong>Development dependencies</strong> are intended as development-only packages, that are unneeded in production. For example testing packages, webpack or Babel.</p>
<p>When you go <strong>in production</strong>, if you type <code>npm install</code> and the folder contains a <code>package.json</code> file, they are installed, as npm assumes this is a development deploy.</p>
<p>You need to set the <code>--production</code> flag (<code>npm install --production</code>) to avoid installing those development dependencies.</p>
<h3 id="the-npx-node-package-runner">The npx Node Package Runner</h3>
<p><code>npx</code> is a very cool way to run the Node.js codes, and provides many useful features.</p>
<p>In this section, I want to introduce a very powerful command that’s been available in <strong>npm </strong>starting version 5.2, released in July 2017: <strong>npx</strong>.</p>
<p>If you don’t want to install npm, you can install npx as a <a href="https://www.npmjs.com/package/npx" rel="noopener">standalone package</a>.</p>
<p><code>npx</code> lets you run code built with Node.js and published through the npm registry.</p>
<h4 id="easily-run-local-commands">Easily run local commands</h4>
<p>Node.js developers used to publish most of the executable commands as global packages, in order for them to be in the path and executable immediately.</p>
<p>This was a pain because you could not really install different versions of the same command.</p>
<p>Running <code>npx commandname</code> automatically finds the correct reference of the command inside the <code>node_modules</code> folder of a project, without needing to know the exact path, and without requiring the package to be installed globally and in the user’s path.</p>
<h4 id="installation-less-command-execution">Installation-less command execution</h4>
<p>There is another great feature of <code>npm</code>, which is allowing to run commands without first installing them.</p>
<p>This is pretty useful, mostly because:</p>
<ol>
<li>you don’t need to install anything</li>
<li>you can run different versions of the same command, using the syntax <code>@version</code></li>
</ol>
<p>A typical demonstration of using <code>npx</code> is through the <code>cowsay</code> command. <code>cowsay</code> will print a cow saying what you wrote in the command. For example:</p>
<p><code>cowsay "Hello"</code> will print</p><pre><code>_______&lt; Hello &gt; -------        \   ^__^         \  (oo)\_______            (__)\       )\/\                ||----w |                ||     ||</code></pre>
<p>Now, this if you have the <code>cowsay</code> command globally installed from npm previously, otherwise you’ll get an error when you try to run the command.</p>
<p><code>npx</code> allows you to run that npm command without having it installed locally:</p><pre><code>npx cowsay "Hello"</code></pre>
<p>Now, this is a funny useless command. Other scenarios include:</p>
<ul>
<li>running the <code>vue</code> CLI tool to create new applications and run them: <code>npx vue create my-vue-app</code></li>
<li>creating a new React app using <code>create-react-app</code>: <code>npx create-react-app my-react-app</code></li>
</ul>
<p>and many more.</p>
<p>Once downloaded, the downloaded code will be wiped.</p>
<h4 id="run-some-code-using-a-different-node-js-version">Run some code using a different Node.js version</h4>
<p>Use the <code>@</code> to specify the version, and combine that with the <code>node</code> npm package:</p><pre><code>npx node@6 -v #v6.14.3npx node@8 -v #v8.11.3</code></pre>
<p>This helps to avoid tools like <code>nvm</code> or the other Node version management tools.</p>
<h4 id="run-arbitrary-code-snippets-directly-from-a-url">Run arbitrary code snippets directly from a URL</h4>
<p><code>npx</code> does not limit you to the packages published on the npm registry.</p>
<p>You can run code that sits in a <a href="https://flaviocopes.com/github/" rel="noopener">GitHub</a> gist, for example:</p><pre><code>npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32</code></pre>
<p>Of course, you need to be careful when running code that you do not control, as with great power comes great responsibility.</p>
<h3 id="the-event-loop">The Event Loop</h3>
<p>The Event Loop is one of the most important aspects to understand about JavaScript. This section explains the inner details of how JavaScript works with a single thread, and how it handles asynchronous functions.</p>
<p>I’ve programmed for years with JavaScript, yet I’ve never <strong>fully</strong> understood how things work under the hoods. It’s completely fine to not know this concept in detail. But as usual, it’s helpful to know how it works, and also you might just be a little curious at this point.</p>
<p>Your JavaScript code runs single threaded. There is just one thing happening at a time.</p>
<p>This is a limitation that’s actually very helpful, as it simplifies a lot of how you program without worrying about concurrency issues.</p>
<p>You just need to pay attention to how you write your code and avoid anything that could block the thread, like synchronous network calls or infinite <a href="https://flaviocopes.com/javascript-loops/" rel="noopener">loops</a>.</p>
<p>Generally, in most browsers there is an event loop for every browser tab, to make every process isolated and avoid a web page with infinite loops or heavy processing to block your entire browser.</p>
<p>The environment manages multiple concurrent event loops, to handle API calls for example. <a href="https://flaviocopes.com/web-workers/" rel="noopener">Web Workers</a> run in their own event loop as well.</p>
<p>You mainly need to be concerned that <strong>your code</strong> will run on a single event loop, and write code with this thing in mind to avoid blocking it.</p>
<h4 id="blocking-the-event-loop">Blocking the event loop</h4>
<p>Any JavaScript code that takes too long to return back control to the event loop will block the execution of any JavaScript code in the page — even block the UI thread — and the user cannot click around, scroll the page, and so on.</p>
<p>Almost all the I/O primitives in JavaScript are non-blocking. Network requests, Node.js file system operations, and so on. Being blocking is the exception, and this is why JavaScript is based so much on callbacks, and more recently on promises and async/await.</p>
<h4 id="the-call-stack">The call stack</h4>
<p>The call stack is a LIFO queue (Last In, First Out).</p>
<p>The event loop continuously checks the <strong>call stack</strong> to see if there’s any function that needs to run.</p>
<p>While doing so, it adds any function call it finds to the call stack and executes each one in order.</p>
<p>You know the error stack trace you might be familiar with, in the debugger or in the browser console?</p>
<p>The browser looks up the function names in the call stack to inform you which function originates the current call:</p>
<h4 id="a-simple-event-loop-explanation">A simple event loop explanation</h4>
<p>Let’s pick an example:</p><pre><code>const bar = () =&gt; console.log('bar')</code></pre><pre><code>const baz = () =&gt; console.log('baz')</code></pre><pre><code>const foo = () =&gt; {  console.log('foo')  bar()  baz()}</code></pre><pre><code>foo()</code></pre>
<p>This code prints:</p><pre><code>foobarbaz</code></pre>
<p>as expected.</p>
<p>When this code runs, first <code>foo()</code> is called. Inside <code>foo()</code> we first call <code>bar()</code>, then we call <code>baz()</code>.</p>
<p>At this point the call stack looks like this:</p>
<p>The event loop on every iteration looks if there’s something in the call stack, and executes it:</p>
<p>until the call stack is empty.</p>
<h4 id="queuing-function-execution">Queuing function execution</h4>
<p>The above example looks normal, there’s nothing special about it: JavaScript finds things to execute, runs them in order.</p>
<p>Let’s see how to defer a function until the stack is clear.</p>
<p>The use case of <code>setTimeout(() =&gt; {}),</code> 0) is to call a function, but execute it once every other function in the code has executed.</p>
<p>Take this example:</p><pre><code>const bar = () =&gt; console.log('bar')</code></pre><pre><code>const baz = () =&gt; console.log('baz')</code></pre><pre><code>const foo = () =&gt; {  console.log('foo')  setTimeout(bar, 0)  baz()}</code></pre><pre><code>foo()</code></pre>
<p>This code prints, maybe surprisingly:</p><pre><code>foobazbar</code></pre>
<p>When this code runs, first <code>foo()</code> is called. Inside <code>foo()</code> we first call <code>setTimeout</code>, passing <code>bar</code> as an argument, and we instruct it to run immediately as fast as it can, passing <code>0</code> as the timer. Then we call <code>baz()</code>.</p>
<p>At this point the call stack looks like this:</p>
<p>Here is the execution order for all the functions in our program:</p>
<p>Why is this happening?</p>
<h4 id="the-message-queue">The Message Queue</h4>
<p>When <code>setTimeout()</code> is called, the Browser or Node.js starts the timer. Once the timer expires, in this case immediately as we put <code>0</code> as the timeout, the callback function is put in the <strong>Message Queue</strong>.</p>
<p>The Message Queue is also where user-initiated events like click and keyboard events or fetch responses are queued before your code has the opportunity to react to them. Or also DOM events like <code>onLoad</code>.</p>
<p>The loop gives priority to the call stack. It first processes everything it finds in the call stack, and once there’s nothing in there, it goes to pick up things in the message queue.</p>
<p>We don’t have to wait for functions like <code>setTimeout</code>, fetch or other things to do their own work, because they are provided by the browser, and they live on their own threads. For example, if you set the <code>setTimeout</code> timeout to 2 seconds, you don’t have to wait 2 seconds - the wait happens elsewhere.</p>
<h4 id="es6-job-queue">ES6 Job Queue</h4>
<p>ECMAScript 2015 introduced the concept of the Job Queue, which is used by Promises (also introduced in ES6/ES2015). It’s a way to execute the result of an async function as soon as possible, rather than being put at the end of the call stack.</p>
<p>Promises that resolve before the current function ends will be executed right after the current function.</p>
<p>I find nice the analogy of a rollercoaster ride at an amusement park: the message queue puts you back in queue with after all the other people in the queue, while the job queue is the fastpass ticket that lets you take another ride right after you finished the previous one.</p>
<p>Example:</p><pre><code>const bar = () =&gt; console.log('bar')</code></pre><pre><code>const baz = () =&gt; console.log('baz')</code></pre><pre><code>const foo = () =&gt; {  console.log('foo')  setTimeout(bar, 0)  new Promise((resolve, reject) =&gt;    resolve('should be right after baz, before bar')  ).then(resolve =&gt; console.log(resolve))  baz()}</code></pre><pre><code>foo()</code></pre>
<p>This prints:</p><pre><code>foobazshould be right after foo, before barbar</code></pre>
<p>That’s a big difference between Promises (and <code>async/await</code>, which is built on promises) and plain old asynchronous functions through <code>setTimeout()</code> or other platform APIs.</p>
<h3 id="understanding-process-nexttick-">Understanding process.nextTick()</h3>
<p>As you try to understand the Node.js event loop, one important part of it is <code>process.nextTick()</code>. It interacts with the event loop in a special way.</p>
<p>Every time the event loop takes a full trip, we call it a tick.</p>
<p>When we pass a function to <code>process.nextTick()</code>, we instruct the engine to invoke this function at the end of the current operation, before the next event loop tick starts:</p><pre><code>process.nextTick(() =&gt; {  //do something})</code></pre>
<p>The event loop is busy processing the current function code.</p>
<p>When this operation ends, the JavaScript engine runs all the functions passed to <code>nextTick</code> calls during that operation.</p>
<p>It’s the way we can tell the JavaScript engine to process a function asynchronously (after the current function), but as soon as possible, not queue it.</p>
<p>Calling <code>setTimeout(() =&gt; {},</code> 0) will execute the function in the next tick, much later than when usi<code>ng nextTic</code>k().</p>
<p>Use <code>nextTick()</code> when you want to make sure that in the next event loop iteration that code is already executed.</p>
<h3 id="understanding-setimmediate-">Understanding setImmediate()</h3>
<p>When you want to execute some piece of code asynchronously, but as soon as possible, one option is to use the <code>setImmediate()</code> function provided by Node.js:</p><pre><code>setImmediate(() =&gt; {  //run something})</code></pre>
<p>Any function passed as the <code>setImmediate()</code> argument is a callback that’s executed in the next iteration of the event loop.</p>
<p>How is <code>setImmediate()</code> different from <code>setTimeout(() =&gt; {},</code> 0) (passing a 0ms timeout), and fr<code>om process.nextTic</code>k()?</p>
<p>A function passed to <code>process.nextTick()</code> is going to be executed on the current iteration of the event loop, after the current operation ends. This means it will always execute before <code>setTimeout()</code> and <code>setImmediate()</code>.</p>
<p>A <code>setTimeout()</code> callback with a 0ms delay is very similar to <code>setImmediate()</code>. The execution order will depend on various factors, but they will be both run in the next iteration of the event loop.</p>
<h3 id="timers">Timers</h3>
<p>When writing JavaScript code, you might want to delay the execution of a function. Learn how to use <code>setTimeout()</code>and <code>setInterval()</code> to schedule functions in the future.</p>
<h4 id="settimeout-"><code>setTimeout()</code></h4>
<p>When writing JavaScript code, you might want to delay the execution of a function. This is the job of <code>setTimeout</code>.</p>
<p>You can specify a callback function to execute later, and a value expressing how much later you want it to run, in milliseconds:</p><pre><code>setTimeout(() =&gt; {  // runs after 2 seconds}, 2000)</code></pre><pre><code>setTimeout(() =&gt; {  // runs after 50 milliseconds}, 50)</code></pre>
<p>This syntax defines a new function. You can call whatever other function you want in there, or you can pass an existing function name, and a set of parameters:</p><pre><code>const myFunction = (firstParam, secondParam) =&gt; {  // do something}</code></pre><pre><code>// runs after 2 secondssetTimeout(myFunction, 2000, firstParam, secondParam)</code></pre>
<p><code>setTimeout()</code> returns the timer id. This is generally not used, but you can store this id, and clear it if you want to delete this scheduled function execution:</p><pre><code>const id = setTimeout(() =&gt; {  // should run after 2 seconds}, 2000)</code></pre><pre><code>// I changed my mindclearTimeout(id)</code></pre>
<h4 id="zero-delay">Zero delay</h4>
<p>If you specify the timeout delay to <code>0</code>, the callback function will be executed as soon as possible, but after the current function execution:</p><pre><code>setTimeout(() =&gt; {  console.log('after ')}, 0)</code></pre><pre><code>console.log(' before ')</code></pre>
<p>will print <code>before after</code>.</p>
<p>This is especially useful to avoid blocking the CPU on intensive tasks and let other functions be executed while performing a heavy calculation, by queuing functions in the scheduler.</p>
<p>Some browsers (IE and Edge) implement a <code>setImmediate()</code> method that does this same exact functionality, but it’s not standard and <a href="https://caniuse.com/#feat=setimmediate" rel="noopener">unavailable on other browsers</a>. But it’s a standard function in Node.js.</p>
<h4 id="setinterval-"><code>setInterval()</code></h4>
<p><code>setInterval()</code> is a function similar to <code>setTimeout()</code> with a difference. Instead of running the callback function once, it will run it forever, at the specific time interval you specify (in milliseconds):</p><pre><code>setInterval(() =&gt; {  // runs every 2 seconds}, 2000)</code></pre>
<p>The function above runs every 2 seconds unless you tell it to stop, using <code>clearInterval</code>, passing it the interval id that <code>setInterval</code> returned:</p><pre><code>const id = setInterval(() =&gt; {  // runs every 2 seconds}, 2000)</code></pre><pre><code>clearInterval(id)</code></pre>
<p>It’s common to call <code>clearInterval</code> inside the <code>setInterval</code> callback function, to let it auto-determine if it should run again or stop. For example this code runs something unless <code>App.somethingIWait</code> has the value <code>arrived</code>:</p><pre><code>const interval = setInterval(function() {  if (App.somethingIWait === 'arrived') {    clearInterval(interval)</code></pre><pre><code>    // otherwise do things  }}, 100)</code></pre>
<h4 id="recursive-settimeout">Recursive setTimeout</h4>
<p><code>setInterval</code> starts a function every <code>n</code> milliseconds, without any consideration about when a function finished its execution.</p>
<p>If a function takes always the same amount of time, it’s all fine:</p>
<p>Maybe the function takes different execution times, depending on network conditions for example:</p>
<p>And maybe one long execution overlaps the next one:</p>
<p>To avoid this, you can schedule a recursive setTimeout to be called when the callback function finishes:</p><pre><code>const myFunction = () =&gt; {  // do something</code></pre><pre><code>  setTimeout(myFunction, 1000)}</code></pre><pre><code>setTimeout(  myFunction()}, 1000)</code></pre>
<p>to achieve this scenario:</p>
<p><code>setTimeout</code> and <code>setInterval</code> are also available in Node.js, through the <a href="https://nodejs.org/api/timers.html" rel="noopener">Timers module</a>.</p>
<p>Node.js also provides <code>setImmediate()</code>, which is equivalent to using <code>setTimeout(() =&gt; {},</code> 0), mostly used to work with the Node.js Event Loop.</p>
<h3 id="asynchronous-programming-and-callbacks">Asynchronous Programming and Callbacks</h3>
<p>JavaScript is synchronous by default, and is single threaded. This means that code cannot create new threads and run in parallel.</p>
<h4 id="asynchronicity-in-programming-languages">Asynchronicity in Programming Languages</h4>
<p>Computers are asynchronous by design.</p>
<p>Asynchronous means that things can happen independently of the main program flow.</p>
<p>In the current consumer computers, every program runs for a specific time slot, and then it stops its execution to let another program continue its execution. This thing runs in a cycle so fast that’s impossible to notice, and we think our computers run many programs simultaneously, but this is an illusion (except on multiprocessor machines).</p>
<p>Programs internally use <strong>interrupts</strong>, a signal that’s emitted to the processor to gain the attention of the system.</p>
<p>I won’t go into the internals of this, but just keep in mind that it’s normal for programs to be asynchronous, and halt their execution until they need attention, and the computer can execute other things in the meantime. When a program is waiting for a response from the network, it cannot halt the processor until the request finishes.</p>
<p>Normally, programming languages are synchronous, and some provide a way to manage asynchronicity, in the language or through libraries. C, Java, C#, PHP, Go, Ruby, Swift, Python, they are all synchronous by default. Some of them handle asynchronicity by using threads, spawning a new process.</p>
<h4 id="javascript">JavaScript</h4>
<p>JavaScript is <strong>synchronous</strong> by default and is single threaded. This means that code cannot create new threads and run in parallel.</p>
<p>Lines of code are executed in series, one after another.</p>
<p>For example:</p><pre><code>const a = 1const b = 2const c = a * bconsole.log(c)doSomething()</code></pre>
<p>But JavaScript was born inside the browser. Its main job, in the beginning, was to respond to user actions like <code>onClick</code>, <code>onMouseOver</code>, <code>onChange</code>, <code>onSubmit</code> and so on. How could it do this with a synchronous programming model?</p>
<p>The answer was in its environment. The <strong>browser</strong> provides a way to do it by providing a set of APIs that can handle this kind of functionality.</p>
<p>More recently, Node.js introduced a non-blocking I/O environment to extend this concept to file access, network calls and so on.</p>
<h4 id="callbacks">Callbacks</h4>
<p>You can’t know when a user is going to click a button, so what you do is <strong>define an event handler for the click event</strong>.</p>
<p>This event handler accepts a function, which will be called when the event is triggered:</p><pre><code>document.getElementById('button').addEventListener('click', () =&gt; {  //item clicked})</code></pre>
<p>This is the so-called <strong>callback</strong>.</p>
<p>A callback is a simple function that’s passed as a value to another function, and will only be executed when the event happens. We can do this because JavaScript has first-class functions, which can be assigned to variables and passed around to other functions (called <strong>higher-order functions</strong>)</p>
<p>It’s common to wrap all your client code in a <code>load</code> event listener on the <code>window</code> object, which runs the callback function only when the page is ready:</p><pre><code>window.addEventListener('load', () =&gt; {  //window loaded  //do what you want})</code></pre>
<p>Callbacks are used everywhere, not just in DOM events.</p>
<p>One common example is by using timers:</p><pre><code>setTimeout(() =&gt; {  // runs after 2 seconds}, 2000)</code></pre>
<p><a href="https://en.wikipedia.org/wiki/XMLHttpRequest" rel="noopener">XHR requests</a> also accept a callback, in this example by assigning a function to a property that will be called when a particular event occurs (in this case, the state of the request changes):</p><pre><code>const xhr = new XMLHttpRequest()xhr.onreadystatechange = () =&gt; {  if (xhr.readyState === 4) {    xhr.status === 200 ? console.log(xhr.responseText) : console.error('error')  }}xhr.open('GET', 'https://yoursite.com')xhr.send()</code></pre>
<h4 id="handling-errors-in-callbacks">Handling errors in callbacks</h4>
<p>How do you handle errors with callbacks? One very common strategy is to use what Node.js adopted: the first parameter in any callback function is the error object — error-first callbacks.</p>
<p>If there is no error, the object is <code>null</code>. If there is an error, it contains some description of the error and other information.</p><pre><code>fs.readFile('/file.json', (err, data) =&gt; {  if (err !== null) {    //handle error    console.log(err)    return  }</code></pre><pre><code>  //no errors, process data  console.log(data)})</code></pre>
<h4 id="the-problem-with-callbacks">The problem with callbacks</h4>
<p>Callbacks are great for simple cases!</p>
<p>However, every callback adds a level of nesting. When you have lots of callbacks, the code starts to be complicated very quickly:</p><pre><code>window.addEventListener('load', () =&gt; {  document.getElementById('button').addEventListener('click', () =&gt; {    setTimeout(() =&gt; {      items.forEach(item =&gt; {        //your code here      })    }, 2000)  })})</code></pre>
<p>This is just a simple 4-levels code, but I’ve seen much more levels of nesting and it’s not fun.</p>
<p>How do we solve this?</p>
<h4 id="alternatives-to-callbacks">Alternatives to callbacks</h4>
<p>Starting with ES6, JavaScript introduced several features that help us with asynchronous code that do not involve using callbacks:</p>
<ul>
<li>Promises (ES6)</li>
<li>Async/Await (ES8)</li>
</ul>
<h3 id="promises">Promises</h3>
<p>Promises are one way to deal with asynchronous code in JavaScript, without writing too many callbacks in your code.</p>
<h4 id="introduction-to-promises">Introduction to promises</h4>
<p>A promise is commonly defined as <strong>a proxy for a value that will eventually become available</strong>.</p>
<p>Although being around for years, they have been standardized and introduced in ES2015, and now they have been superseded in ES2017 by async functions.</p>
<p><strong>Async functions</strong> use the promises API as their building block, so understanding them is fundamental even if in newer code you’ll likely use async functions instead of promises.</p>
<h4 id="how-promises-work-in-brief">How promises work, in brief</h4>
<p>Once a promise has been called, it will start in <strong>pending state</strong>. This means that the caller function continues the execution, while it waits for the promise to do its own processing, and give the caller function some feedback.</p>
<p>At this point, the caller function waits for it to either return the promise in a <strong>resolved state</strong>, or in a <strong>rejected state</strong>, but as you know JavaScript is asynchronous — so the function continues its execution while the promise does it work.</p>
<h4 id="which-js-api-use-promises">Which JS API use promises?</h4>
<p>In addition to your own code and libraries code, promises are used by standard modern Web APIs such as:</p>
<ul>
<li><strong><em>the Battery API</em></strong></li>
<li>the <a href="https://flaviocopes.com/fetch-api/" rel="noopener">Fetch API</a></li>
<li><a href="https://flaviocopes.com/service-workers/" rel="noopener">Service Workers</a></li>
</ul>
<p>It’s unlikely that in modern JavaScript you’ll find yourself <strong>not</strong> using promises, so let’s start diving right into them.</p>
<h4 id="creating-a-promise">Creating a promise</h4>
<p>The Promise API exposes a Promise constructor, which you initialize using <code>new Promise()</code>:</p><pre><code>let done = true</code></pre><pre><code>const isItDoneYet = new Promise(  (resolve, reject) =&gt; {    if (done) {      const workDone = 'Here is the thing I built'      resolve(workDone)    } else {      const why = 'Still working on something else'      reject(why)    }  })</code></pre>
<p>As you can see the promise checks the <code>done</code> global constant, and if that’s true, we return a resolved promise, otherwise a rejected promise.</p>
<p>Using <code>resolve</code> and <code>reject</code> we can communicate back a value, in the above case we just return a string, but it could be an object as well.</p>
<h4 id="consuming-a-promise">Consuming a promise</h4>
<p>In the last section, we introduced how a promise is created.</p>
<p>Now let’s see how the promise can be <strong>consumed </strong>or used:</p><pre><code>const isItDoneYet = new Promise(  //...)</code></pre><pre><code>const checkIfItsDone = () =&gt; {  isItDoneYet    .then((ok) =&gt; {      console.log(ok)    })    .catch((err) =&gt; {      console.error(err)    })}</code></pre>
<p>Running <code>checkIfItsDone()</code> will execute the <code>isItDoneYet()</code> promise and will wait for it to resolve, using the <code>then</code> callback, and if there is an error, it will handle it in the <code>catch</code> callback.</p>
<h4 id="chaining-promises">Chaining promises</h4>
<p>A promise can be returned to another promise, creating a chain of promises.</p>
<p>A great example of chaining promises is given by the <a href="https://flaviocopes.com/fetch-api" rel="noopener">Fetch API</a>, a layer on top of the <code>XMLHttpRequest</code> API, which we can use to get a resource and queue a chain of promises to execute when the resource is fetched.</p>
<p>The Fetch API is a promise-based mechanism, and calling <code>fetch()</code> is equivalent to defining our own promise using <code>new Promise()</code>.</p>
<h4 id="example-of-chaining-promises">Example of chaining promises</h4><pre><code>const status = (response) =&gt; {  if (response.status &gt;= 200 &amp;&amp; response.status &lt; 300) {    return Promise.resolve(response)  }  return Promise.reject(new Error(response.statusText))}</code></pre><pre><code>const json = (response) =&gt; response.json()</code></pre><pre><code>fetch('/todos.json')  .then(status)  .then(json)  .then((data) =&gt; { console.log('Request succeeded with JSON response', data) })  .catch((error) =&gt; { console.log('Request failed', error) })</code></pre>
<p>In this example, we call <code>fetch()</code> to get a list of TODO items from the <code>todos.json</code> file found in the domain root, and we create a chain of promises.</p>
<p>Running <code>fetch()</code> returns a <a href="https://fetch.spec.whatwg.org/#concept-response" rel="noopener">response</a>, which has many properties, and within those we reference:</p>
<ul>
<li><code>status</code>, a numeric value representing the HTTP status code</li>
<li><code>statusText</code>, a status message, which is <code>OK</code> if the request succeeded</li>
</ul>
<p><code>response</code> also has a <code>json()</code> method, which returns a promise that will resolve with the content of the body processed and transformed into JSON.</p>
<p>So given those premises, this is what happens: the first promise in the chain is a function that we defined, called <code>status()</code>, that checks the response status and if it’s not a success response (between 200 and 299), it rejects the promise.</p>
<p>This operation will cause the promise chain to skip all the chained promises listed and will skip directly to the <code>catch()</code> statement at the bottom, logging the <code>Request failed</code> text along with the error message.</p>
<p>If that succeeds instead, it calls the json() function we defined. Since the previous promise, when successful, returned the <code>response</code> object, we get it as an input to the second promise.</p>
<p>In this case, we return the data JSON processed, so the third promise receives the JSON directly:</p><pre><code>.then((data) =&gt; {  console.log('Request succeeded with JSON response', data)})</code></pre>
<p>and we simply log it to the console.</p>
<h4 id="handling-errors">Handling errors</h4>
<p>In the example, in the previous section, we had a <code>catch</code> that was appended to the chain of promises.</p>
<p>When anything in the chain of promises fails and raises an error or rejects the promise, the control goes to the nearest <code>catch()</code> statement down the chain.</p><pre><code>new Promise((resolve, reject) =&gt; {  throw new Error('Error')})  .catch((err) =&gt; { console.error(err) })</code></pre><pre><code>// or</code></pre><pre><code>new Promise((resolve, reject) =&gt; {  reject('Error')})  .catch((err) =&gt; { console.error(err) })</code></pre>
<h4 id="cascading-errors">Cascading errors</h4>
<p>If inside the <code>catch()</code> you raise an error, you can append a second <code>catch()</code> to handle it, and so on.</p><pre><code>new Promise((resolve, reject) =&gt; {  throw new Error('Error')})  .catch((err) =&gt; { throw new Error('Error') })  .catch((err) =&gt; { console.error(err) }) </code></pre>
<h3 id="orchestrating-promises">Orchestrating promises</h3>
<h4 id="promise-all-"><code>Promise.all()</code></h4>
<p>If you need to synchronize different promises, <code>Promise.all()</code> helps you define a list of promises, and execute something when they are all resolved.</p>
<p>Example:</p><pre><code>const f1 = fetch('/something.json')const f2 = fetch('/something2.json')</code></pre><pre><code>Promise.all([f1, f2]).then((res) =&gt; {    console.log('Array of results', res)}).catch((err) =&gt; {  console.error(err)})</code></pre>
<p>The <a href="https://flaviocopes.com/ecmascript/#destructuring-assignments" rel="noopener">ES2015 destructuring assignment</a> syntax allows you to also do:</p><pre><code>Promise.all([f1, f2]).then(([res1, res2]) =&gt; {    console.log('Results', res1, res2)})</code></pre>
<p>You are not limited to using <code>fetch</code> of course, <strong>any promise is good to go</strong>.</p>
<h4 id="promise-race-"><code>Promise.race()</code></h4>
<p><code>Promise.race()</code> runs when the first of the promises you pass to it resolves, and it runs the attached callback just once, with the result of the first promise resolved.</p>
<p>Example:</p><pre><code>const first = new Promise((resolve, reject) =&gt; {    setTimeout(resolve, 500, 'first')})const second = new Promise((resolve, reject) =&gt; {    setTimeout(resolve, 100, 'second')})</code></pre><pre><code>Promise.race([first, second]).then((result) =&gt; {  console.log(result) // second})</code></pre>
<h4 id="common-error-uncaught-typeerror-undefined-is-not-a-promise">Common error, Uncaught TypeError: undefined is not a promise</h4>
<p>If you get the <code>Uncaught TypeError: undefined is not a promise</code> error in the console, make sure you use <code>new Promise()</code> instead of just <code>Promise()</code>.</p>
<h3 id="async-and-await">Async and Await</h3>
<p>Discover the modern approach to asynchronous functions in JavaScript.</p>
<p>JavaScript evolved in a very short time from callbacks to promises (ES2015), and since ES2017 asynchronous JavaScript is even simpler with the async/await syntax.</p>
<p>Async functions are a combination of promises and generators, and basically, they are a higher level abstraction over promises. Let me repeat: <code>async/await </code>is built on promises.</p>
<h4 id="why-were-async-await-introduced">Why were async/await introduced?</h4>
<p>They reduce the boilerplate around promises, and the “don’t break the chain” limitation of chaining promises.</p>
<p>When Promises were introduced in ES2015, they were meant to solve a problem with asynchronous code, and they did, but over the 2 years that separated ES2015 and ES2017, it was clear that promises could not be the final solution.</p>
<p>Promises were introduced to solve the famous callback hell problem, but they introduced complexity on their own, and syntax complexity.</p>
<p>They were good primitives around which a better syntax could be exposed to the developers, so when the time was right we got <strong>async functions</strong>.</p>
<p>They make the code look like it’s synchronous, but it’s asynchronous and non-blocking behind the scenes.</p>
<h4 id="how-it-works">How it works</h4>
<p>An <code>async</code> function returns a promise, like in this example:</p><pre><code>const doSomethingAsync = () =&gt; {    return new Promise((resolve) =&gt; {        setTimeout(() =&gt; resolve('I did something'), 3000)    })}</code></pre>
<p>When you want to call this function you prepend <code>await</code>, and the calling code will stop<strong> until the promise is resolved or rejected</strong>. One caveat: the client function must be defined as <code>async</code>.</p>
<p>Here’s an example:</p><pre><code>const doSomething = async () =&gt; {    console.log(await doSomethingAsync())}</code></pre>
<h4 id="a-quick-example">A quick example</h4>
<p>This is a simple example of <code>async/await</code> used to run a function asynchronously:</p><pre><code>const doSomethingAsync = () =&gt; {    return new Promise((resolve) =&gt; {        setTimeout(() =&gt; resolve('I did something'), 3000)    })}</code></pre><pre><code>const doSomething = async () =&gt; {    console.log(await doSomethingAsync())}</code></pre><pre><code>console.log('Before')doSomething()console.log('After')</code></pre>
<p>The above code will print the following to the browser console:</p><pre><code>BeforeAfterI did something //after 3s</code></pre>
<h4 id="promise-all-the-things">Promise all the things</h4>
<p>Prepending the <code>async</code> keyword to any function means that the function will return a promise.</p>
<p>Even if it’s not doing so explicitly, it will internally make it return a promise.</p>
<p>This is why this code is valid:</p><pre><code>const aFunction = async () =&gt; {  return 'test'}</code></pre><pre><code>aFunction().then(alert) // This will alert 'test'</code></pre>
<p>and it’s the same as:</p><pre><code>const aFunction = async () =&gt; {  return Promise.resolve('test')}</code></pre><pre><code>aFunction().then(alert) // This will alert 'test'</code></pre>
<h4 id="the-code-is-much-simpler-to-read">The code is much simpler to read</h4>
<p>As you can see in the example above, our code looks very simple. Compare it to code using plain promises, with chaining and callback functions.</p>
<p>And this is a very simple example, the major benefits will arise when the code is much more complex.</p>
<p>For example, here’s how you would get a JSON resource and parse it, using promises:</p><pre><code>const getFirstUserData = () =&gt; {  return fetch('/users.json') // get users list    .then(response =&gt; response.json()) // parse JSON    .then(users =&gt; users[0]) // pick first user    .then(user =&gt; fetch(`/users/${user.name}`)) // get user data    .then(userResponse =&gt; response.json()) // parse JSON}</code></pre><pre><code>getFirstUserData()</code></pre>
<p>And here is the same functionality provided using <code>await/async</code>:</p><pre><code>const getFirstUserData = async () =&gt; {  const response = await fetch('/users.json') // get users list  const users = await response.json() // parse JSON  const user = users[0] // pick first user  const userResponse = await fetch(`/users/${user.name}`) // get user data  const userData = await user.json() // parse JSON  return userData}</code></pre><pre><code>getFirstUserData()</code></pre>
<h4 id="multiple-async-functions-in-series">Multiple async functions in series</h4>
<p><code>async</code> functions can be chained very easily, and the syntax is much more readable than with plain promises:</p><pre><code>const promiseToDoSomething = () =&gt; {    return new Promise(resolve =&gt; {        setTimeout(() =&gt; resolve('I did something'), 10000)    })}</code></pre><pre><code>const watchOverSomeoneDoingSomething = async () =&gt; {    const something = await promiseToDoSomething()    return something + ' and I watched'}</code></pre><pre><code>const watchOverSomeoneWatchingSomeoneDoingSomething = async () =&gt; {    const something = await watchOverSomeoneDoingSomething()    return something + ' and I watched as well'}</code></pre><pre><code>watchOverSomeoneWatchingSomeoneDoingSomething().then((res) =&gt; {    console.log(res)})</code></pre>
<p>Will print:</p><pre><code>I did something and I watched and I watched as well</code></pre>
<h4 id="easier-debugging">Easier debugging</h4>
<p>Debugging promises is hard because the debugger will not step over asynchronous code.</p>
<p><code>async/await</code> makes this very easy because to the compiler it’s just like synchronous code.</p>
<h3 id="the-node-js-event-emitter">The Node.js Event Emitter</h3>
<p>You can work with custom events in Node.js.</p>
<p>If you worked with JavaScript in the browser, you know how much of the interaction of the user is handled through events: mouse clicks, keyboard button presses, reacting to mouse movements, and so on.</p>
<p>On the back-end side, Node.js offers us the option to build a similar system using the <code>events</code><a href="https://nodejs.org/api/events.html" rel="noopener">module</a>.</p>
<p>This module, in particular, offers the <code>EventEmitter</code> class, which we’ll use to handle our events.</p>
<p>You initialize that using:</p><pre><code>const eventEmitter = require('events').EventEmitter()</code></pre>
<p>This object exposes, among many others, the <code>on</code> and <code>emit</code> methods.</p>
<ul>
<li><code>emit</code> is used to trigger an event</li>
<li><code>on</code> is used to add a callback function that’s going to be executed when the event is triggered</li>
</ul>
<p>For example, let’s create a <code>start</code> event, and as a matter of providing a sample, we react to that by just logging to the console:</p><pre><code>eventEmitter.on('start', () =&gt; {  console.log('started')})</code></pre>
<p>When we run:</p><pre><code>eventEmitter.emit('start')</code></pre>
<p>The event handler function is triggered, and we get the console log.</p>
<p>You can pass arguments to the event handler by passing them as additional arguments to <code>emit()</code>:</p><pre><code>eventEmitter.on('start', (number) =&gt; {  console.log(`started ${number}`)})</code></pre><pre><code>eventEmitter.emit('start', 23)</code></pre>
<p>Multiple arguments:</p><pre><code>eventEmitter.on('start', (start, end) =&gt; {  console.log(`started from ${start} to ${end}`)})</code></pre><pre><code>eventEmitter.emit('start', 1, 100)</code></pre>
<p>The EventEmitter object also exposes several other methods to interact with events, like:</p>
<ul>
<li><code>once()</code>: add a one-time listener</li>
<li><code>removeListener()</code> / <code>off()</code>: remove an event listener from an event</li>
<li><code>removeAllListeners()</code>: remove all listeners for an event</li>
</ul>
<h3 id="how-http-requests-work">How HTTP requests work</h3>
<p>What happens when you type an URL in the browser, from start to finish?</p>
<p>This section describes how browsers perform page requests using the HTTP/1.1 protocol.</p>
<p>If you ever did an interview, you might have been asked: “What happens when you type something into the Google search box and press enter?”.</p>
<p>It’s one of the most popular questions you get asked. People just want to see if you can explain some rather basic concepts and if you have any clue how the internet actually works.</p>
<p>In this section, I’ll analyze what happens when you type an URL in the address bar of your browser and press enter.</p>
<p>It’s a very interesting topic to dissect in this handbook, as it touches many technologies I can dive into in separate articles.</p>
<p>This is tech that is very rarely changed, and powers one the most complex and wide ecosystems ever built by humans.</p>
<h3 id="the-http-protocol">The HTTP protocol</h3>
<p>I analyze URL requests only.</p>
<p>Modern browsers have the capability of knowing if the thing you wrote in the address bar is an actual URL or a search term, and they will use the default search engine if it’s not a valid URL.</p>
<p>I assume you type an actual URL.</p>
<p>When you enter the URL and press enter, the browser first builds the full URL.</p>
<p>If you just entered a domain, like <code>flaviocopes.com</code>, the browser by default will prepend <code>HTTP://</code> to it, defaulting to the HTTP protocol.</p>
<h4 id="things-relate-to-macos-linux">Things relate to macOS / Linux</h4>
<p>Just FYI. Windows might do some things slightly differently.</p>
<h4 id="dns-lookup-phase">DNS Lookup phase</h4>
<p>The browser starts the DNS lookup to get the server IP address.</p>
<p>The domain name is a handy shortcut for us humans, but the internet is organized in such a way that computers can look up the exact location of a server through its IP address, which is a set of numbers like <code>222.324.3.1</code> (IPv4).</p>
<p>First, it checks the DNS local cache, to see if the domain has already been resolved recently.</p>
<p><strong><em>Chrome has a handy DNS cache visualizer you can see at this URL: chrome://net-internals/#dns (copy and paste it in the Chrome browser address bar)</em></strong></p>
<p>If nothing is found there, the browser uses the DNS resolver, using the <code>gethostbyname</code> POSIX system call to retrieve the host information.</p>
<h4 id="gethostbyname">gethostbyname</h4>
<p><code>gethostbyname</code> first looks in the local hosts file, which on macOS or Linux is located in <code>/etc/hosts</code>, to see if the system provides the information locally.</p>
<p>If this does not give any information about the domain, the system makes a request to the DNS server.</p>
<p>The address of the DNS server is stored in the system preferences.</p>
<p>Those are 2 popular DNS servers:</p>
<ul>
<li><code>8.8.8.8</code>: the Google public DNS server</li>
<li><code>1.1.1.1</code>: the CloudFlare DNS server</li>
</ul>
<p>Most people use the DNS server provided by their internet provider.</p>
<p>The browser performs the DNS request using the UDP protocol.</p>
<p>TCP and UDP are two of the foundational protocols of computer networking. They sit at the same conceptual level, but TCP is connection-oriented, while UDP is a connectionless protocol, more lightweight, used to send messages with little overhead.</p>
<p>How the UDP request is performed is not in the scope of this handbook.</p>
<p>The DNS server might have the domain IP in the cache. It not, it will ask the <strong>root DNS server</strong>. That’s a system (composed of 13 actual servers, distributed across the planet) that drives the entire internet.</p>
<p>The DNS server does <strong>not</strong> know the address of each and every domain name on the planet.</p>
<p>What it knows is where the <strong>top-level DNS resolvers</strong> are.</p>
<p>A top-level domain is the domain extension: <code>.com</code>, <code>.it</code>, <code>.pizza</code> and so on.</p>
<p>Once the root DNS server receives the request, it forwards the request to that top-level domain (TLD) DNS server.</p>
<p>Say you are looking for <code>flaviocopes.com</code>. The root domain DNS server returns the IP of the .com TLD server.</p>
<p>Now our DNS resolver will cache the IP of that TLD server, so it does not have to ask the root DNS server again for it.</p>
<p>The TLD DNS server will have the IP addresses of the authoritative Name Servers for the domain we are looking for.</p>
<p>How? When you buy a domain, the domain registrar sends the appropriate TDL the name servers. When you update the name servers (for example, when you change the hosting provider), this information will be automatically updated by your domain registrar.</p>
<p>Those are the DNS servers of the hosting provider. They are usually more than 1, to serve as backup.</p>
<p>For example:</p>
<ul>
<li><code>ns1.dreamhost.com</code></li>
<li><code>ns2.dreamhost.com</code></li>
<li><code>ns3.dreamhost.com</code></li>
</ul>
<p>The DNS resolver starts with the first, and tries to ask the IP of the domain (with the subdomain, too) you are looking for.</p>
<p>That is the ultimate source of truth for the IP address.</p>
<p>Now that we have the IP address, we can go on in our journey.</p>
<h4 id="tcp-request-handshaking">TCP request handshaking</h4>
<p>With the server IP address available, now the browser can initiate a TCP connection to that.</p>
<p>A TCP connection requires a bit of handshaking before it can be fully initialized and you can start sending data.</p>
<p>Once the connection is established, we can send the request</p>
<h4 id="sending-the-request">Sending the request</h4>
<p>The request is a plain text document structured in a precise way determined by the communication protocol.</p>
<p>It’s composed of 3 parts:</p>
<ul>
<li>the request line</li>
<li>the request header</li>
<li>the request body</li>
</ul>
<h4 id="the-request-line">The request line</h4>
<p>The request line sets, on a single line:</p>
<ul>
<li>the HTTP method</li>
<li>the resource location</li>
<li>the protocol version</li>
</ul>
<p>Example:</p><pre><code>GET / HTTP/1.1</code></pre>
<h4 id="the-request-header">The request header</h4>
<p>The request header is a set of <code>field: value</code> pairs that set certain values.</p>
<p>There are 2 mandatory fields, one of which is <code>Host</code>, and the other is <code>Connection</code>, while all the other fields are optional:</p><pre><code>Host: flaviocopes.comConnection: close</code></pre>
<p><code>Host</code> indicates the domain name which we want to target, while <code>Connection</code> is always set to <code>close</code> unless the connection must be kept open.</p>
<p>Some of the most used header fields are:</p>
<ul>
<li><code>Origin</code></li>
<li><code>Accept</code></li>
<li><code>Accept-Encoding</code></li>
<li><code>Cookie</code></li>
<li><code>Cache-Control</code></li>
<li><code>Dnt</code></li>
</ul>
<p>but many more exist.</p>
<p>The header part is terminated by a blank line.</p>
<h4 id="the-request-body">The request body</h4>
<p>The request body is optional, not used in GET requests but very much used in POST requests and sometimes in other verbs too, and it can contain data in JSON format.</p>
<p>Since we’re now analyzing a GET request, the body is blank and we’ll not look more into it.</p>
<h4 id="the-response">The response</h4>
<p>Once the request is sent, the server processes it and sends back a response.</p>
<p>The response starts with the status code and the status message. If the request is successful and returns a 200, it will start with:</p><pre><code>200 OK</code></pre>
<p>The request might return a different status code and message, like one of these:</p><pre><code>404 Not Found403 Forbidden301 Moved Permanently500 Internal Server Error304 Not Modified401 Unauthorized</code></pre>
<p>The response then contains a list of HTTP headers and the response body (which, since we’re making the request in the browser, is going to be HTML).</p>
<h4 id="parse-the-html">Parse the HTML</h4>
<p>The browser now has received the HTML and starts to parse it, and will repeat the exact same process we did not for all the resources required by the page:</p>
<ul>
<li>CSS files</li>
<li>images</li>
<li>the favicon</li>
<li>JavaScript files</li>
<li>…</li>
</ul>
<p>How browsers render the page then is out of the scope, but it’s important to understand that the process I described is not just for the HTML pages, but for any item that’s served over HTTP.</p>
<h3 id="build-an-http-server-with-node-js">Build an HTTP Server with Node.js</h3>
<p>Here is the HTTP web server we used as the Node.js Hello World application in the introduction:</p><pre><code>const http = require('http')</code></pre><pre><code>const port = 3000</code></pre><pre><code>const server = http.createServer((req, res) =&gt; {  res.statusCode = 200  res.setHeader('Content-Type', 'text/plain')  res.end('Hello World\n')})</code></pre><pre><code>server.listen(port, () =&gt; {  console.log(`Server running at http://${hostname}:${port}/`)})</code></pre>
<p>Let’s analyze it briefly. We include the <code>http</code> <a href="https://nodejs.org/api/http.html" rel="noopener">module</a>.</p>
<p>We use the module to create an HTTP server.</p>
<p>The server is set to listen on the specified port, <code>3000</code>. When the server is ready, the <code>listen</code>callback function is called.</p>
<p>The callback function we pass is the one that’s going to be executed upon every request that comes in. Whenever a new request is received, the <code>request</code> <a href="https://nodejs.org/api/http.html#http_event_request" rel="noopener">event</a> is called, providing two objects: a request (an <code><a href="https://nodejs.org/api/http.html#http_class_http_incomingmessage" rel="noopener">http.IncomingMessage</a></code>object) and a response (an <code><a href="https://nodejs.org/api/http.html#http_class_http_serverresponse" rel="noopener">http.ServerResponse</a></code>object).</p>
<p><code>request</code> provides the request details. Through it, we access the request headers and request data.</p>
<p><code>response</code> is used to populate the data we’re going to return to the client.</p>
<p>In this case with:</p><pre><code>res.statusCode = 200</code></pre>
<p>We set the <code>statusCode</code> property to <code>200</code>, to indicate a successful response.</p>
<p>We also set the <code>Content-Type</code> header:</p><pre><code>res.setHeader('Content-Type', 'text/plain')</code></pre>
<p>and we end close the response, adding the content as an argument to <code>end()</code>:</p><pre><code>res.end('Hello World\n')</code></pre>
<h3 id="making-http-requests-with-node-js">Making HTTP requests with Node.js</h3>
<p>How to perform HTTP requests with Node.js using GET, POST, PUT and DELETE.</p>
<p>I use the term HTTP, but HTTPS is what should be used everywhere, therefore these examples use HTTPS instead of HTTP.</p>
<h4 id="perform-a-get-request">Perform a GET Request</h4><pre><code>const https = require('https')const options = {  hostname: 'flaviocopes.com',  port: 443,  path: '/todos',  method: 'GET'}</code></pre><pre><code>const req = https.request(options, (res) =&gt; {  console.log(`statusCode: ${res.statusCode}`)</code></pre><pre><code>  res.on('data', (d) =&gt; {    process.stdout.write(d)  })})</code></pre><pre><code>req.on('error', (error) =&gt; {  console.error(error)})</code></pre><pre><code>req.end()</code></pre>
<h4 id="perform-a-post-request">Perform a POST Request</h4><pre><code>const https = require('https')</code></pre><pre><code>const data = JSON.stringify({  todo: 'Buy the milk'})</code></pre><pre><code>const options = {  hostname: 'flaviocopes.com',  port: 443,  path: '/todos',  method: 'POST',  headers: {    'Content-Type': 'application/json',    'Content-Length': data.length  }}</code></pre><pre><code>const req = https.request(options, (res) =&gt; {  console.log(`statusCode: ${res.statusCode}`)</code></pre><pre><code>  res.on('data', (d) =&gt; {    process.stdout.write(d)  })})</code></pre><pre><code>req.on('error', (error) =&gt; {  console.error(error)})</code></pre><pre><code>req.write(data)req.end()</code></pre>
<h4 id="put-and-delete">PUT and DELETE</h4>
<p>PUT and DELETE requests use the same POST request format, and just change the <code>options.method</code> value.</p>
<h3 id="http-requests-in-node-js-using-axios">HTTP requests in Node.js using Axios</h3>
<p>Axios is a very popular JavaScript library you can use to perform HTTP requests, that works in both Browser and Node.js platforms.</p>
<p>It supports all modern browsers, including support for IE8 and higher.</p>
<p>It is promise-based, and this lets us write async/await code to perform <a href="https://flaviocopes.com/xhr/" rel="noopener">XHR</a> requests very easily.</p>
<p>Using Axios has quite a few advantages over the native Fetch API:</p>
<ul>
<li>supports older browsers (Fetch needs a polyfill)</li>
<li>has a way to abort a request</li>
<li>has a way to set a response timeout</li>
<li>has built-in CSRF protection</li>
<li>supports upload progress</li>
<li>performs automatic JSON data transformation</li>
<li>works in Node.js</li>
</ul>
<h4 id="installation">Installation</h4>
<p>Axios can be installed using npm:</p><pre><code>npm install axios</code></pre>
<p>or yarn:</p><pre><code>yarn add axios</code></pre>
<p>or simply include it in your page using unpkg.com:</p><pre><code>&lt;script src="https://unpkg.com/axios/dist/axios.min.js"&gt;&lt;;/script&gt;</code></pre>
<h4 id="the-axios-api">The Axios API</h4>
<p>You can start an HTTP request from the <code>axios</code> object:</p><pre><code>axios({  url: 'https://dog.ceo/api/breeds/list/all',  method: 'get',  data: {    foo: 'bar'  }})</code></pre>
<p>but for convenience, you will generally use:</p>
<ul>
<li><code>axios.get()</code></li>
<li><code>axios.post()</code></li>
</ul>
<p>(like in jQuery you would use <code>$.get()</code> and <code>$.post()</code> instead of <code>$.ajax()</code>)</p>
<p>Axios offers methods for all the HTTP verbs, which are less popular but still used:</p>
<ul>
<li><code>axios.delete()</code></li>
<li><code>axios.put()</code></li>
<li><code>axios.patch()</code></li>
<li><code>axios.options()</code></li>
</ul>
<ul>
<li><code>axios.head()</code></li>
</ul>
<h4 id="get-requests">GET requests</h4>
<p>One convenient way to use Axios is to use the modern (ES2017) <code>async/await</code> syntax.</p>
<p>This Node.js example queries the <a href="https://dog.ceo/" rel="noopener">Dog API</a> to retrieve a list of all the dog breeds, using <code>axios.get()</code>, and it counts them:</p><pre><code>const axios = require('axios')</code></pre><pre><code>const getBreeds = async () =&gt; {  try {    return await axios.get('https://dog.ceo/api/breeds/list/all')  } catch (error) {    console.error(error)  }}</code></pre><pre><code>const countBreeds = async () =&gt; {  const breeds = await getBreeds()</code></pre><pre><code>  if (breeds.data.message) {    console.log(`Got ${Object.entries(breeds.data.message).length} breeds`)  }}</code></pre><pre><code>countBreeds()</code></pre>
<p>If you don’t want to use <code>async/await</code> you can use the <a href="https://flaviocopes.com/javascript-promises/" rel="noopener">Promises</a> syntax:</p><pre><code>const axios = require('axios')</code></pre><pre><code>const getBreeds = () =&gt; {  try {    return axios.get('https://dog.ceo/api/breeds/list/all')  } catch (error) {    console.error(error)  }}</code></pre><pre><code>const countBreeds = async () =&gt; {  const breeds = getBreeds()    .then(response =&gt; {      if (response.data.message) {        console.log(          `Got ${Object.entries(response.data.message).length} breeds`        )      }    })    .catch(error =&gt; {      console.log(error)    })}</code></pre><pre><code>countBreeds()</code></pre>
<h4 id="add-parameters-to-get-requests">Add parameters to GET requests</h4>
<p>A GET response can contain parameters in the URL, like this: <code><a href="https://site.com/?foo=bar." rel="noopener">https://site.com/?foo=bar</a></code></p>
<p>With Axios you can perform this by simply using that URL:</p><pre><code>axios.get('https://site.com/?foo=bar')</code></pre>
<p>or you can use a <code>params</code> property in the options:</p><pre><code>axios.get('https://site.com/', {  params: {    foo: 'bar'  }})</code></pre>
<h4 id="post-requests">POST Requests</h4>
<p>Performing a POST request is just like doing a GET request, but instead of <code>axios.get</code>, you use <code>axios.post</code>:</p><pre><code>axios.post('https://site.com/')</code></pre>
<p>An object containing the POST parameters is the second argument:</p><pre><code>axios.post('https://site.com/', {  foo: 'bar'})</code></pre>
<h3 id="using-websockets-in-node-js">Using WebSockets in Node.js</h3>
<p>WebSockets are an alternative to HTTP communication in Web Applications.</p>
<p>They offer a long lived, bidirectional communication channel between client and server.</p>
<p>Once established, the channel is kept open, offering a very fast connection with low latency and overhead.</p>
<h3 id="browser-support-for-websockets">Browser support for WebSockets</h3>
<p>WebSockets are supported by all modern browsers.</p>
<h3 id="how-websockets-differ-from-http">How WebSockets differ from HTTP</h3>
<p>HTTP is a very different protocol, and has a different way of communicating.</p>
<p>HTTP is a request/response protocol: the server returns some data when the client requests it.</p>
<p>With WebSockets:</p>
<ul>
<li>the <strong>server can send a message to the client</strong> without the client explicitly requesting something</li>
<li>the client and the server can <strong>talk to each other simultaneously</strong></li>
<li>very little data overhead needs to be exchanged to send messages. This means a <strong>low latency communication</strong>.</li>
</ul>
<p>WebSockets are great for real-time and long-lived communications.</p>
<p>HTTP is great for occasional data exchange and interactions initiated by the client.</p>
<p>HTTP is much simpler to implement, while WebSockets require a bit more overhead.</p>
<h3 id="secured-websockets">Secured WebSockets</h3>
<p>Always use the secure, encrypted protocol for WebSockets, <code>wss://</code>.</p>
<p><code>ws://</code> refers to the unsafe WebSockets version (the <code>http://</code> of WebSockets), and should be avoided for obvious reasons.</p>
<h3 id="create-a-new-websockets-connection">Create a new WebSockets connection</h3><pre><code>const url = 'wss://myserver.com/something'const connection = new WebSocket(url)</code></pre>
<p><code>connection</code> is a <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSocket" rel="noopener">WebSocket</a> object.</p>
<p>When the connection is successfully established, the <code>open</code>event is fired.</p>
<p>Listen for it by assigning a callback function to the <code>onopen</code>property of the <code>connection</code> object:</p><pre><code>connection.onopen = () =&gt; {  //...}</code></pre>
<p>If there’s any error, the <code>onerror</code> function callback is fired:</p><pre><code>connection.onerror = error =&gt; {  console.log(`WebSocket error: ${error}`)}</code></pre>
<h3 id="sending-data-to-the-server-using-websockets">Sending data to the server using WebSockets</h3>
<p>Once the connection is open, you can send data to the server.</p>
<p>You can do so conveniently inside the <code>onopen</code> callback function:</p><pre><code>connection.onopen = () =&gt; {  connection.send('hey')}</code></pre>
<h3 id="receiving-data-from-the-server-using-websockets">Receiving data from the server using WebSockets</h3>
<p>Listen with a callback function on <code>onmessage</code>, which is called when the <code>message</code> event is received:</p><pre><code>connection.onmessage = e =&gt; {  console.log(e.data)}</code></pre>
<h3 id="implement-a-websockets-server-in-node-js">Implement a WebSockets server in Node.js</h3>
<p><a href="https://github.com/websockets/ws" rel="noopener">ws</a> is a popular WebSockets library for Node.js.</p>
<p>We’ll use it to build a WebSockets server. It can also be used to implement a client, and use WebSockets to communicate between two backend services.</p>
<p>Easily install it using:</p><pre><code>yarn inityarn add ws</code></pre>
<p>The code you need to write is very little:</p><pre><code>const WebSocket = require('ws')</code></pre><pre><code>const wss = new WebSocket.Server({ port: 8080 })</code></pre><pre><code>wss.on('connection', ws =&gt; {  ws.on('message', message =&gt; {    console.log(`Received message =&gt; ${message}`)  })  ws.send('ho!')})</code></pre>
<p>This code creates a new server on port 8080 (the default port for WebSockets), and adds a callback function when a connection is established, sending <code>ho!</code> to the client, and logging the messages it receives.</p>
<h3 id="see-a-live-example-on-glitch">See a live example on Glitch</h3>
<p><a href="https://glitch.com/edit/#!/flavio-websockets-server-example" rel="noopener">Here</a> is a live example of a WebSockets server.</p>
<p><a href="https://glitch.com/edit/#!/flavio-websockets-client-example" rel="noopener">Here</a> is a WebSockets client that interacts with the server.</p>
<h3 id="working-with-file-descriptors-in-node-js">Working with file descriptors in Node.js</h3>
<p>Before you’re able to interact with a file that sits in your file system, you must get a file descriptor.</p>
<p>A file descriptor is what’s returned by opening the file using the <code>open()</code> method offered by the <code>fs</code> module:</p><pre><code>const fs = require('fs')</code></pre><pre><code>fs.open('/Users/flavio/test.txt', 'r', (err, fd) =&gt; {  //fd is our file descriptor})</code></pre>
<p>Notice the <code>r</code> we used as the second parameter to the <code>fs.open()</code> call.</p>
<p>That flag means we open the file for reading.</p>
<p>Other flags you’ll commonly use are</p>
<ul>
<li><code>r+</code> open the file for reading and writing</li>
<li><code>w+</code> open the file for reading and writing, positioning the stream at the beginning of the file. The file is created if not existing</li>
<li><code>a</code> open the file for writing, positioning the stream at the end of the file. The file is created if not existing</li>
<li><code>a+</code> open the file for reading and writing, positioning the stream at the end of the file. The file is created if not existing</li>
</ul>
<p>You can also open the file by using the <code>fs.openSync</code> method, which instead of providing the file descriptor object in a callback, it returns it:</p><pre><code>const fs = require('fs')</code></pre><pre><code>try {  const fd = fs.openSync('/Users/flavio/test.txt', 'r')} catch (err) {  console.error(err)}</code></pre>
<p>Once you get the file descriptor, in whatever way you choose, you can perform all the operations that require it, like calling <code>fs.open()</code> and many other operations that interact with the file system.</p>
<h3 id="node-js-file-stats">Node.js file stats</h3>
<p>Every file comes with a set of details that we can inspect using Node.js.</p>
<p>In particular, using the <code>stat()</code> method provided by the <code>fs</code> module.</p>
<p>You call it passing a file path, and once Node.js gets the file details it will call the callback function you pass with 2 parameters: an error message, and the file stats:</p><pre><code>const fs = require('fs')fs.stat('/Users/flavio/test.txt', (err, stats) =&gt; {  if (err) {    console.error(err)    return  }  //we have access to the file stats in `stats`})</code></pre>
<p>Node.js provides also a sync method, which blocks the thread until the file stats are ready:</p><pre><code>const fs = require('fs')try {  const stats = fs.stat('/Users/flavio/test.txt')} catch (err) {  console.error(err)}</code></pre>
<p>The file information is included in the stats variable. What kind of information can we extract using the stats?</p>
<p>A lot, including:</p>
<ul>
<li>if the file is a directory or a file, using <code>stats.isFile()</code> and <code>stats.isDirectory()</code></li>
<li>if the file is a symbolic link using <code>stats.isSymbolicLink()</code></li>
<li>the file size in bytes using <code>stats.size</code>.</li>
</ul>
<p>There are other advanced methods, but the bulk of what you’ll use in your day-to-day programming is this:</p><pre><code>const fs = require('fs')fs.stat('/Users/flavio/test.txt', (err, stats) =&gt; {  if (err) {    console.error(err)    return  }</code></pre><pre><code>  stats.isFile() //true  stats.isDirectory() //false  stats.isSymbolicLink() //false  stats.size //1024000 //= 1MB})</code></pre>
<h3 id="node-js-file-paths">Node.js File Paths</h3>
<p>Every file in the system has a path.</p>
<p>On Linux and macOS, a path might look like:</p>
<p><code>/users/flavio/file.txt</code></p>
<p>While Windows computers are different, and have a structure such as:</p>
<p><code>C:\users\flavio\file.txt</code></p>
<p>You need to pay attention when using paths in your applications, as this difference must be taken into account.</p>
<p>You include this module in your files using:</p><pre><code>const path = require('path')</code></pre>
<p>and you can start using its methods.</p>
<h4 id="getting-information-out-of-a-path">Getting information out of a path</h4>
<p>Given a path, you can extract information out of it using those methods:</p>
<ul>
<li><code>dirname</code>: get the parent folder of a file</li>
<li><code>basename</code>: get the filename part</li>
<li><code>extname</code>: get the file extension</li>
</ul>
<p>Example:</p><pre><code>const notes = '/users/flavio/notes.txt'</code></pre><pre><code>path.dirname(notes) // /users/flaviopath.basename(notes) // notes.txtpath.extname(notes) // .txt</code></pre>
<p>You can get the file name without the extension by specifying a second argument to <code>basename</code>:</p><pre><code>path.basename(notes, path.extname(notes)) //notes</code></pre>
<h4 id="working-with-paths">Working with paths</h4>
<p>You can join two or more parts of a path by using <code>path.join()</code>:</p><pre><code>const name = 'flavio'path.join('/', 'users', name, 'notes.txt') //'/users/flavio/notes.txt'</code></pre>
<p>You can get the absolute path calculation of a relative path using <code>path.resolve()</code>:</p><pre><code>path.resolve('flavio.txt') //'/Users/flavio/flavio.txt' if run from my home folder</code></pre>
<p>In this case Node.js will simply append <code>/flavio.txt</code> to the current working directory. If you specify a second parameter folder, <code>resolve</code> will use the first as a base for the second:</p><pre><code>path.resolve('tmp', 'flavio.txt')// '/Users/flavio/tmp/flavio.txt' if run from my home folder</code></pre>
<p>If the first parameter starts with a slash, that means it’s an absolute path:</p><pre><code>path.resolve('/etc', 'flavio.txt')// '/etc/flavio.txt'</code></pre>
<p><code>path.normalize()</code> is another useful function, that will try and calculate the actual path, when it contains relative specifiers like <code>.</code> or <code>..</code>, or double slashes:</p><pre><code>path.normalize('/users/flavio/..//test.txt') // /users/test.txt</code></pre>
<p>But <code>resolve</code> and <code>normalize</code> will <strong>not</strong> check if the path exists. They just calculate a path based on the information they got.</p>
<h3 id="reading-files-with-node-js">Reading files with Node.js</h3>
<p>The simplest way to read a file in Node.js is to use the <code>fs.readFile()</code> method, passing it the file path and a callback function that will be called with the file data (and the error):</p><pre><code>const fs = require('fs')</code></pre><pre><code>fs.readFile('/Users/flavio/test.txt', (err, data) =&gt; {  if (err) {    console.error(err)    return  }  console.log(data)})</code></pre>
<p>Alternatively, you can use the synchronous version <code>fs.readFileSync()</code>:</p><pre><code>const fs = require('fs')</code></pre><pre><code>try {  const data = fs.readFileSync('/Users/flavio/test.txt')  console.log(data)} catch (err) {  console.error(err)}</code></pre>
<p>The default encoding is u<code>tf8</code>, but you can specify a custom encoding using a a second parameter.</p>
<p>Both <code>fs.readFile()</code> and <code>fs.readFileSync()</code> read the full content of the file in memory before returning the data.</p>
<p>This means that big files are going to have a major impact on your memory consumption and speed of execution of the program.</p>
<p>In this case, a better option is to read the file content using streams.</p>
<h3 id="writing-files-with-node-js">Writing files with Node.js</h3>
<p>The easiest way to write to files in Node.js is to use the <code>fs.writeFile()</code> API.</p>
<p>Example:</p><pre><code>const fs = require('fs')</code></pre><pre><code>const content = 'Some content!'</code></pre><pre><code>fs.writeFile('/Users/flavio/test.txt', content, (err) =&gt; {  if (err) {    console.error(err)    return  }  //file written successfully})</code></pre>
<p>Alternatively, you can use the synchronous version <code>fs.writeFileSync()</code>:</p><pre><code>const fs = require('fs')</code></pre><pre><code>const content = 'Some content!'</code></pre><pre><code>try {  const data = fs.writeFileSync('/Users/flavio/test.txt', content)  //file written successfully} catch (err) {  console.error(err)}</code></pre>
<p>By default, this API will <strong>replace the contents of the file</strong> if it does already exist.</p>
<p>You can modify the default by specifying a flag:</p><pre><code>fs.writeFile('/Users/flavio/test.txt', content, { flag: 'a+' }, (err) =&gt; {})</code></pre>
<p>The flags you’ll likely use are:</p>
<ul>
<li><code>r+</code> open the file for reading and writing</li>
<li><code>w+</code> open the file for reading and writing, positioning the stream at the beginning of the file. The file is created if not existing</li>
<li><code>a</code> open the file for writing, positioning the stream at the end of the file. The file is created if not existing</li>
<li><code>a+</code> open the file for reading and writing, positioning the stream at the end of the file. The file is created if not existing</li>
</ul>
<p>You can find more about <a href="https://nodejs.org/api/fs.html#fs_file_system_flags" rel="noopener">flags</a>.</p>
<h4 id="append-to-a-file">Append to a file</h4>
<p>A handy method to append content to the end of a file is <code>fs.appendFile()</code> (and its <code>fs.appendFileSync()</code> counterpart):</p><pre><code>const content = 'Some content!'</code></pre><pre><code>fs.appendFile('file.log', content, (err) =&gt; {  if (err) {    console.error(err)    return  }  //done!})</code></pre>
<h4 id="using-streams">Using streams</h4>
<p>All those methods write the full content to the file before returning the control back to your program (in the async version, this means executing the callback)</p>
<p>In this case, a better option is to write the file content using streams.</p>
<h3 id="working-with-folders-in-node-js">Working with folders in Node.js</h3>
<p>The Node.js <code>fs</code> core module provides many handy methods you can use to work with folders.</p>
<h4 id="check-if-a-folder-exists">Check if a folder exists</h4>
<p>Use <code>fs.access()</code> to check if the folder exists and Node.js can access it with its permissions.</p>
<h4 id="create-a-new-folder">Create a new folder</h4>
<p>Use <code>fs.mkdir()</code> or <code>fs.mkdirSync()</code> to create a new folder:</p><pre><code>const fs = require('fs')</code></pre><pre><code>const folderName = '/Users/flavio/test'</code></pre><pre><code>try {  if (!fs.existsSync(dir)){    fs.mkdirSync(dir)  }} catch (err) {  console.error(err)}</code></pre>
<h4 id="read-the-content-of-a-directory">Read the content of a directory</h4>
<p>Use <code>fs.readdir()</code> or <code>fs.readdirSync</code> to read the contents of a directory.</p>
<p>This piece of code reads the content of a folder, both files and subfolders, and returns their relative path:</p><pre><code>const fs = require('fs')const path = require('path')</code></pre><pre><code>const folderPath = '/Users/flavio'</code></pre><pre><code>fs.readdirSync(folderPath)</code></pre>
<p>You can get the full path:</p><pre><code>fs.readdirSync(folderPath).map(fileName =&gt; {  return path.join(folderPath, fileName)}</code></pre>
<p>You can also filter the results to only return the files, and exclude the folders:</p><pre><code>const isFile = fileName =&gt; {  return fs.lstatSync(fileName).isFile()}</code></pre><pre><code>fs.readdirSync(folderPath).map(fileName =&gt; {  return path.join(folderPath, fileName)).filter(isFile)}</code></pre>
<h4 id="rename-a-folder">Rename a folder</h4>
<p>Use <code>fs.rename()</code> or <code>fs.renameSync()</code> to rename folder.</p>
<p>The first parameter is the current path, the second the new path:</p><pre><code>const fs = require('fs')</code></pre><pre><code>fs.rename('/Users/flavio', '/Users/roger', (err) =&gt; {  if (err) {    console.error(err)    return  }  //done})</code></pre>
<p><code>fs.renameSync()</code> is the synchronous version:</p><pre><code>const fs = require('fs')</code></pre><pre><code>try {  fs.renameSync('/Users/flavio', '/Users/roger')} catch (err) {  console.error(err)}</code></pre>
<h4 id="remove-a-folder">Remove a folder</h4>
<p>Use <code>fs.rmdir()</code> or <code>fs.rmdirSync()</code> to remove a folder.</p>
<p>Removing a folder that has content can be more complicated than you need.</p>
<p>In this case I recommend installing the <code>fs-extra</code> module, which is very popular and well maintained, and it’s a drop-in replacement of the <code>fs</code> module, providing more features on top of it.</p>
<p>In this case the <code>remove()</code> method is what you want.</p>
<p>Install it using:</p>
<p><code>npm install fs-extra</code></p>
<p>and use it like this:</p><pre><code>const fs = require('fs-extra')</code></pre><pre><code>const folder = '/Users/flavio'</code></pre><pre><code>fs.remove(folder, err =&gt; {  console.error(err)})</code></pre>
<p>It can also be used with promises:</p><pre><code>fs.remove(folder).then(() =&gt; {  //done}).catch(err =&gt; {  console.error(err)})</code></pre>
<p>or with <code>async/await</code>:</p><pre><code>async function removeFolder(folder) {  try {    await fs.remove(folder)    //done  } catch (err) {    console.error(err)  }}</code></pre><pre><code>const folder = '/Users/flavio'removeFolder(folder)</code></pre>
<h3 id="the-node-js-fs-module">The Node.js fs module</h3>
<p>The <code>fs</code> module provides a lot of very useful functionality to access and interact with the file system.</p>
<p>There is no need to install it. Being part of the Node.js core, it can be used by simply requiring it:</p><pre><code>const fs = require('fs')</code></pre>
<p>Once you do so, you have access to all its methods, which include:</p>
<ul>
<li><code>fs.access()</code>: check if the file exists and Node can access it with its permissions</li>
<li><code>fs.appendFile()</code>: append data to a file. If the file does not exist, it’s created</li>
<li><code>fs.chmod()</code>: change the permissions of a file specified by the filename passed. Related: <code>fs.lchmod()</code>, <code>fs.fchmod()</code></li>
<li><code>fs.chown()</code>: change the owner and group of a file specified by the filename passed. Related: <code>fs.fchown()</code>, <code>fs.lchown()</code></li>
<li><code>fs.close()</code>: close a file descriptor</li>
<li><code>fs.copyFile()</code>: copies a file</li>
<li><code>fs.createReadStream()</code>: create a readable file stream</li>
<li><code>fs.createWriteStream()</code>: create a writable file stream</li>
<li><code>fs.link()</code>: create a new hard link to a file</li>
<li><code>fs.mkdir()</code>: create a new folder</li>
<li><code>fs.mkdtemp()</code>: create a temporary directory</li>
<li><code>fs.open()</code>: set the file mode</li>
<li><code>fs.readdir()</code>: read the contents of a directory</li>
<li><code>fs.readFile()</code>: read the content of a file. Related: <code>fs.read()</code></li>
<li><code>fs.readlink()</code>: read the value of a symbolic link</li>
<li><code>fs.realpath()</code>: resolve relative file path pointers (<code>.</code>, <code>..</code>) to the full path</li>
<li><code>fs.rename()</code>: rename a file or folder</li>
<li><code>fs.rmdir()</code>: remove a folder</li>
<li><code>fs.stat()</code>: returns the status of the file identified by the filename passed. Related: <code>fs.fstat()</code>, <code>fs.lstat()</code></li>
<li><code>fs.symlink()</code>: create a new symbolic link to a file</li>
<li><code>fs.truncate()</code>: truncate to the specified length the file identified by the filename passed. Related: <code>fs.ftruncate()</code></li>
<li><code>fs.unlink()</code>: remove a file or a symbolic link</li>
<li><code>fs.unwatchFile()</code>: stop watching for changes on a file</li>
<li><code>fs.utimes()</code>: change the timestamp of the file identified by the filename passed. Related: <code>fs.futimes()</code></li>
<li><code>fs.watchFile()</code>: start watching for changes on a file. Related: <code>fs.watch()</code></li>
<li><code>fs.writeFile()</code>: write data to a file. Related: <code>fs.write()</code></li>
</ul>
<p>One peculiar thing about the <code>fs</code> module is that all the methods are asynchronous by default, but they can also work synchronously by appending <code>Sync</code>.</p>
<p>For example:</p>
<ul>
<li><code>fs.rename()</code></li>
<li><code>fs.renameSync()</code></li>
<li><code>fs.write()</code></li>
<li><code>fs.writeSync()</code></li>
</ul>
<p>This makes a huge difference in your application flow.</p>
<p>Node 10 includes <a href="https://nodejs.org/api/fs.html#fs_fs_promises_api" rel="noopener">experimental support</a> for a promise based API.</p>
<p>For example let’s examine the <code>fs.rename()</code> method. The asynchronous API is used with a callback:</p><pre><code>const fs = require('fs')</code></pre><pre><code>fs.rename('before.json', 'after.json', (err) =&gt; {  if (err) {    return console.error(err)  }</code></pre><pre><code>  //done})</code></pre>
<p>A synchronous API can be used like this, with a <code>try/catch</code> block to handle errors:</p><pre><code>const fs = require('fs')</code></pre><pre><code>try {  fs.renameSync('before.json', 'after.json')  //done} catch (err) {  console.error(err)}</code></pre>
<p>The key difference here is that the execution of your script will block in the second example, until the file operation succeeded.</p>
<h3 id="the-node-js-path-module">The Node.js path module</h3>
<p>The <code>path</code> module provides a lot of very useful functionality to access and interact with the file system.</p>
<p>There is no need to install it. Being part of the Node.js core, it can be used by simply requiring it:</p><pre><code>const path = require('path')</code></pre>
<p>This module provides <code>path.sep</code> which provides the path segment separator (<code>\</code> on Windows, and <code>/</code> on Linux / macOS), and <code>path.delimiter</code> which provides the path delimiter (<code>;</code> on Windows, and <code>:</code> on Linux / macOS).</p>
<p>These are the <code>path</code> methods.</p>
<h4 id="path-basename-"><code>path.basename()</code></h4>
<p>Return the last portion of a path. A second parameter can filter out the file extension:</p><pre><code>require('path').basename('/test/something') //somethingrequire('path').basename('/test/something.txt') //something.txtrequire('path').basename('/test/something.txt', '.txt') //something</code></pre>
<h4 id="path-dirname-"><code>path.dirname()</code></h4>
<p>Return the directory part of a path:</p><pre><code>require('path').dirname('/test/something') // /testrequire('path').dirname('/test/something/file.txt') // /test/something</code></pre>
<h4 id="path-extname-"><code>path.extname()</code></h4>
<p>Return the extension part of a path:</p><pre><code>require('path').dirname('/test/something') // ''require('path').dirname('/test/something/file.txt') // '.txt'</code></pre>
<h4 id="path-isabsolute-"><code>path.isAbsolute()</code></h4>
<p>Returns true if it’s an absolute path:</p><pre><code>require('path').isAbsolute('/test/something') // truerequire('path').isAbsolute('./test/something') // false</code></pre>
<h4 id="path-join-"><code>path.join()</code></h4>
<p>Joins two or more parts of a path:</p><pre><code>const name = 'flavio'require('path').join('/', 'users', name, 'notes.txt') //'/users/flavio/notes.txt'</code></pre>
<h4 id="path-normalize-"><code>path.normalize()</code></h4>
<p>Tries to calculate the actual path when it contains relative specifiers like <code>.</code> or <code>..</code>, or double slashes:</p><pre><code>require('path').normalize('/users/flavio/..//test.txt') ///users/test.txt</code></pre>
<h4 id="path-parse-"><code>path.parse()</code></h4>
<p>Parses a path to an object with the segments that compose it:</p>
<ul>
<li><code>root</code>: the root</li>
<li><code>dir</code>: the folder path starting from the root</li>
<li><code>base</code>: the file name + extension</li>
<li><code>name</code>: the file name</li>
<li><code>ext</code>: the file extension</li>
</ul>
<p>Example:</p><pre><code>require('path').parse('/users/test.txt')</code></pre>
<p>results in:</p><pre><code>{  root: '/',  dir: '/users',  base: 'test.txt',  ext: '.txt',  name: 'test'}</code></pre>
<h4 id="path-relative-"><code>path.relative()</code></h4>
<p>Accepts 2 paths as arguments. Returns the the relative path from the first path to the second, based on the current working directory.</p>
<p>Example:</p><pre><code>require('path').relative('/Users/flavio', '/Users/flavio/test.txt') //'test.txt'require('path').relative('/Users/flavio', '/Users/flavio/something/test.txt') //'something/test.txt'</code></pre>
<h4 id="path-resolve-"><code>path.resolve()</code></h4>
<p>You can get the absolute path calculation of a relative path using <code>path.resolve()</code>:</p><pre><code>path.resolve('flavio.txt') //'/Users/flavio/flavio.txt' if run from my home folder</code></pre>
<p>By specifying a second parameter, <code>resolve</code> will use the first as a base for the second:</p><pre><code>path.resolve('tmp', 'flavio.txt')//'/Users/flavio/tmp/flavio.txt' if run from my home folder</code></pre>
<p>If the first parameter starts with a slash, that means it’s an absolute path:</p><pre><code>path.resolve('/etc', 'flavio.txt')//'/etc/flavio.txt'</code></pre>
<h3 id="the-node-js-os-module">The Node.js os module</h3>
<p>This module provides many functions that you can use to retrieve information from the underlying <strong>operating system</strong> and the computer the program runs on, and interact with it.</p><pre><code>const os = require('os')</code></pre>
<p>There are a few useful properties that tell us some key things related to handling files:</p>
<p><code>os.EOL</code> gives the line delimiter sequence. It's <code>\n</code> on Linux and macOS, and <code>\r\n</code> on Windows.</p>
<p>When I say Linux and macOS I mean POSIX platforms. For simplicity I exclude other less popular operating systems Node can run on.</p>
<p><code>os.constants.signals</code> tells us all the constants related to handling process signals, like SIGHUP, SIGKILL and so on.</p>
<p><code>os.constants.errno</code> sets the constants for error reporting, like EADDRINUSE, EOVERFLOW and more.</p>
<p>You can read them all <a href="https://nodejs.org/api/os.html#os_signal_constants" rel="noopener">here</a>.</p>
<p>Let’s now see the main methods that <code>os</code> provides:</p>
<ul>
<li><code>os.arch()</code></li>
<li><code>os.cpus()</code></li>
<li><code>os.endianness()</code></li>
<li><code>os.freemem()</code></li>
<li><code>os.homedir()</code></li>
<li><code>os.hostname()</code></li>
<li><code>os.loadavg()</code></li>
<li><code>os.networkInterfaces()</code></li>
<li><code>os.platform()</code></li>
<li><code>os.release()</code></li>
<li><code>os.tmpdir()</code></li>
<li><code>os.totalmem()</code></li>
<li><code>os.type()</code></li>
<li><code>os.uptime()</code></li>
<li><code>os.userInfo()</code></li>
</ul>
<h4 id="os-arch-"><code>os.arch()</code></h4>
<p>Return the string that identifies the underlying architecture, like <code>arm</code>, <code>x64</code>, <code>arm64</code>.</p>
<h4 id="os-cpus-"><code>os.cpus()</code></h4>
<p>Return information on the CPUs available on your system.</p>
<p>Example:</p><pre><code>[ { model: 'Intel(R) Core(TM)2 Duo CPU     P8600  @ 2.40GHz',    speed: 2400,    times:     { user: 281685380,       nice: 0,       sys: 187986530,       idle: 685833750,       irq: 0 } },  { model: 'Intel(R) Core(TM)2 Duo CPU     P8600  @ 2.40GHz',    speed: 2400,    times:     { user: 282348700,       nice: 0,       sys: 161800480,       idle: 703509470,       irq: 0 } } ]</code></pre>
<h4 id="os-endianness-"><code>os.endianness()</code></h4>
<p>Return <code>BE</code> or <code>LE</code> depending if Node.js was compiled with <a href="https://en.wikipedia.org/wiki/Endianness" rel="noopener">Big Endian or Little Endian</a>.</p>
<h4 id="os-freemem-"><code>os.freemem()</code></h4>
<p>Return the number of bytes that represent the free memory in the system.</p>
<h4 id="os-homedir-"><code>os.homedir()</code></h4>
<p>Return the path to the home directory of the current user.</p>
<p>Example:</p><pre><code>'/Users/flavio'</code></pre>
<h4 id="os-hostname-"><code>os.hostname()</code></h4>
<p>Return the hostname.</p>
<h4 id="os-loadavg-"><code>os.loadavg()</code></h4>
<p>Return the calculation made by the operating system on the load average.</p>
<p>It only returns a meaningful value on Linux and macOS.</p>
<p>Example:</p><pre><code>[ 3.68798828125, 4.00244140625, 11.1181640625 ]</code></pre>
<h4 id="os-networkinterfaces-"><code>os.networkInterfaces()</code></h4>
<p>Returns the details of the network interfaces available on your system.</p>
<p>Example:</p><pre><code>{ lo0:   [ { address: '127.0.0.1',       netmask: '255.0.0.0',       family: 'IPv4',       mac: 'fe:82:00:00:00:00',       internal: true },     { address: '::1',       netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',       family: 'IPv6',       mac: 'fe:82:00:00:00:00',       scopeid: 0,       internal: true },     { address: 'fe80::1',       netmask: 'ffff:ffff:ffff:ffff::',       family: 'IPv6',       mac: 'fe:82:00:00:00:00',       scopeid: 1,       internal: true } ],  en1:   [ { address: 'fe82::9b:8282:d7e6:496e',       netmask: 'ffff:ffff:ffff:ffff::',       family: 'IPv6',       mac: '06:00:00:02:0e:00',       scopeid: 5,       internal: false },     { address: '192.168.1.38',       netmask: '255.255.255.0',       family: 'IPv4',       mac: '06:00:00:02:0e:00',       internal: false } ],  utun0:   [ { address: 'fe80::2513:72bc:f405:61d0',       netmask: 'ffff:ffff:ffff:ffff::',       family: 'IPv6',       mac: 'fe:80:00:20:00:00',       scopeid: 8,       internal: false } ] }</code></pre>
<h4 id="os-platform-"><code>os.platform()</code></h4>
<p>Return the platform that Node.js was compiled for:</p>
<ul>
<li><code>darwin</code></li>
<li><code>freebsd</code></li>
<li><code>linux</code></li>
<li><code>openbsd</code></li>
<li><code>win32</code></li>
<li>…more</li>
</ul>
<h4 id="os-release-"><code>os.release()</code></h4>
<p>Returns a string that identifies the operating system release number.</p>
<h4 id="os-tmpdir-"><code>os.tmpdir()</code></h4>
<p>Returns the path to the assigned temp folder.</p>
<h4 id="os-totalmem-"><code>os.totalmem()</code></h4>
<p>Returns the number of bytes that represent the total memory available in the system.</p>
<h4 id="os-type-"><code>os.type()</code></h4>
<p>Identifies the operating system:</p>
<ul>
<li><code>Linux</code></li>
<li><code>Darwin</code> on macOS</li>
<li><code>Windows_NT</code> on Windows</li>
</ul>
<h4 id="os-uptime-"><code>os.uptime()</code></h4>
<p>Returns the number of seconds the computer has been running since it was last rebooted.</p>
<h3 id="the-node-js-events-module">The Node.js events module</h3>
<p>The <code>events</code> module provides us the <code>EventEmitter</code> class, which is key to working with events in Node.js.</p>
<p>I published a full <a href="https://flaviocopes.com/node-event-emitter/" rel="noopener">article</a> on that, so here I will just describe the API without further examples on how to use it.</p><pre><code>const EventEmitter = require('events')const door = new EventEmitter()</code></pre>
<p>The event listener eats its own dog food and uses these events:</p>
<ul>
<li><code>newListener</code> when a listener is added</li>
<li><code>removeListener</code> when a listener is removed</li>
</ul>
<p>Here’s a detailed description of the most useful methods:</p>
<ul>
<li><code>emitter.addListener()</code></li>
<li><code>emitter.emit()</code></li>
<li><code>emitter.eventNames()</code></li>
<li><code>emitter.getMaxListeners()</code></li>
<li><code>emitter.listenerCount()</code></li>
<li><code>emitter.listeners()</code></li>
<li><code>emitter.off()</code></li>
<li><code>emitter.on()</code></li>
<li><code>emitter.once()</code></li>
<li><code>emitter.prependListener()</code></li>
<li><code>emitter.prependOnceListener()</code></li>
<li><code>emitter.removeAllListeners()</code></li>
<li><code>emitter.removeListener()</code></li>
<li><code>emitter.setMaxListeners()</code></li>
</ul>
<h4 id="emitter-addlistener-"><code>emitter.addListener()</code></h4>
<p>Alias for <code>emitter.on()</code>.</p>
<h4 id="emitter-emit-"><code>emitter.emit()</code></h4>
<p>Emits an event. It synchronously calls every event listener in the order they were registered.</p>
<h4 id="emitter-eventnames-"><code>emitter.eventNames()</code></h4>
<p>Return an array of strings that represent the events registered on the current EventListener:</p><pre><code>door.eventNames()</code></pre>
<h4 id="emitter-getmaxlisteners-"><code>emitter.getMaxListeners()</code></h4>
<p>Get the maximum amount of listeners one can add to an EventListener object, which defaults to 10 but can be increased or lowered by using <code>setMaxListeners()</code>:</p><pre><code>door.getMaxListeners()</code></pre>
<h4 id="emitter-listenercount-"><code>emitter.listenerCount()</code></h4>
<p>Get the count of listeners of the event passed as parameter:</p><pre><code>door.listenerCount('open')</code></pre>
<h4 id="emitter-listeners-"><code>emitter.listeners()</code></h4>
<p>Gets an array of listeners of the event passed as parameter:</p><pre><code>door.listeners('open')</code></pre>
<h4 id="emitter-off-"><code>emitter.off()</code></h4>
<p>Alias for <code>emitter.removeListener()</code> added in Node 10.</p>
<h4 id="emitter-on-"><code>emitter.on()</code></h4>
<p>Adds a callback function that’s called when an event is emitted.</p>
<p>Usage:</p><pre><code>door.on('open', () =&gt; {  console.log('Door was opened')})</code></pre>
<h4 id="emitter-once-"><code>emitter.once()</code></h4>
<p>Adds a callback function that’s called when an event is emitted for the first time after registering this. This callback is only going to be called once, never again.</p><pre><code>const EventEmitter = require('events')const ee = new EventEmitter()</code></pre><pre><code>ee.once('my-event', () =&gt; {  //call callback function once})</code></pre>
<h4 id="emitter-prependlistener-"><code>emitter.prependListener()</code></h4>
<p>When you add a listener using <code>on</code> or <code>addListener</code>, it's added last in the queue of listeners, and called last. Using <code>prependListener</code> it's added, and called, before other listeners.</p>
<h4 id="emitter-prependoncelistener-"><code>emitter.prependOnceListener()</code></h4>
<p>When you add a listener using <code>once</code>, it's added last in the queue of listeners, and called last. Using <code>prependOnceListener</code> it's added, and called, before other listeners.</p>
<h4 id="emitter-removealllisteners-"><code>emitter.removeAllListeners()</code></h4>
<p>Removes all listeners of an event emitter object listening to a specific event:</p><pre><code>door.removeAllListeners('open')</code></pre>
<h4 id="emitter-removelistener-"><code>emitter.removeListener()</code></h4>
<p>Remove a specific listener. You can do this by saving the callback function to a variable, when added, so you can reference it later:</p><pre><code>const doSomething = () =&gt; {}door.on('open', doSomething)door.removeListener('open', doSomething)</code></pre>
<h4 id="emitter-setmaxlisteners-"><code>emitter.setMaxListeners()</code></h4>
<p>Sets the maximum amount of listeners one can add to an EventListener object, which defaults to 10 but can be increased or lowered:</p><pre><code>door.setMaxListeners(50)</code></pre>
<h3 id="the-node-js-http-module">The Node.js http module</h3>
<p>The <code>http</code> module of Node.js provides useful functions and classes to build an HTTP server. It is a key module to Node.js networking.</p>
<p>It can be included using:</p><pre><code>const http = require('http')</code></pre>
<p>The module provides some properties and methods, and some classes.</p>
<h4 id="properties">Properties</h4>
<h4 id="http-methods"><code>http.METHODS</code></h4>
<p>This property lists all the HTTP methods supported:</p><pre><code>&gt; require('http').METHODS[ 'ACL',  'BIND',  'CHECKOUT',  'CONNECT',  'COPY',  'DELETE',  'GET',  'HEAD',  'LINK',  'LOCK',  'M-SEARCH',  'MERGE',  'MKACTIVITY',  'MKCALENDAR',  'MKCOL',  'MOVE',  'NOTIFY',  'OPTIONS',  'PATCH',  'POST',  'PROPFIND',  'PROPPATCH',  'PURGE',  'PUT',  'REBIND',  'REPORT',  'SEARCH',  'SUBSCRIBE',  'TRACE',  'UNBIND',  'UNLINK',  'UNLOCK',  'UNSUBSCRIBE' ]</code></pre>
<h4 id="http-status_codes"><code>http.STATUS_CODES</code></h4>
<p>This property lists all the HTTP status codes and their description:</p><pre><code>&gt; require('http').STATUS_CODES{ '100': 'Continue',  '101': 'Switching Protocols',  '102': 'Processing',  '200': 'OK',  '201': 'Created',  '202': 'Accepted',  '203': 'Non-Authoritative Information',  '204': 'No Content',  '205': 'Reset Content',  '206': 'Partial Content',  '207': 'Multi-Status',  '208': 'Already Reported',  '226': 'IM Used',  '300': 'Multiple Choices',  '301': 'Moved Permanently',  '302': 'Found',  '303': 'See Other',  '304': 'Not Modified',  '305': 'Use Proxy',  '307': 'Temporary Redirect',  '308': 'Permanent Redirect',  '400': 'Bad Request',  '401': 'Unauthorized',  '402': 'Payment Required',  '403': 'Forbidden',  '404': 'Not Found',  '405': 'Method Not Allowed',  '406': 'Not Acceptable',  '407': 'Proxy Authentication Required',  '408': 'Request Timeout',  '409': 'Conflict',  '410': 'Gone',  '411': 'Length Required',  '412': 'Precondition Failed',  '413': 'Payload Too Large',  '414': 'URI Too Long',  '415': 'Unsupported Media Type',  '416': 'Range Not Satisfiable',  '417': 'Expectation Failed',  '418': 'I\'m a teapot',  '421': 'Misdirected Request',  '422': 'Unprocessable Entity',  '423': 'Locked',  '424': 'Failed Dependency',  '425': 'Unordered Collection',  '426': 'Upgrade Required',  '428': 'Precondition Required',  '429': 'Too Many Requests',  '431': 'Request Header Fields Too Large',  '451': 'Unavailable For Legal Reasons',  '500': 'Internal Server Error',  '501': 'Not Implemented',  '502': 'Bad Gateway',  '503': 'Service Unavailable',  '504': 'Gateway Timeout',  '505': 'HTTP Version Not Supported',  '506': 'Variant Also Negotiates',  '507': 'Insufficient Storage',  '508': 'Loop Detected',  '509': 'Bandwidth Limit Exceeded',  '510': 'Not Extended',  '511': 'Network Authentication Required' }</code></pre>
<h4 id="http-globalagent"><code>http.globalAgent</code></h4>
<p>Points to the global instance of the Agent object, which is an instance of the <code>http.Agent</code>class.</p>
<p>It’s used to manage connections persistence and reuse for HTTP clients, and it’s a key component of Node.js HTTP networking.</p>
<p>More in the <code>http.Agent</code> class description later on.</p>
<h4 id="methods">Methods</h4>
<h4 id="http-createserver-"><code>http.createServer()</code></h4>
<p>Return a new instance of the <code>http.Server</code> class.</p>
<p>Usage:</p><pre><code>const server = http.createServer((req, res) =&gt; {  //handle every single request with this callback})</code></pre>
<h4 id="http-request-"><code>http.request()</code></h4>
<p>Makes an HTTP request to a server, creating an instance of the <code>http.ClientRequest</code> class.</p>
<h4 id="http-get-"><code>http.get()</code></h4>
<p>Similar to <code>http.request()</code>, but automatically sets the HTTP method to GET, and calls <code>req.end()</code> automatically.</p>
<h4 id="classes">Classes</h4>
<p>The HTTP module provides 5 classes:</p>
<ul>
<li><code>http.Agent</code></li>
<li><code>http.ClientRequest</code></li>
<li><code>http.Server</code></li>
<li><code>http.ServerResponse</code></li>
<li><code>http.IncomingMessage</code></li>
</ul>
<h4 id="http-agent"><code>http.Agent</code></h4>
<p>Node creates a global instance of the <code>http.Agent</code> class to manage connections persistance and reuse for HTTP clients, a key component of Node HTTP networking.</p>
<p>This object makes sure that every request made to a server is queued and a single socket is reused.</p>
<p>It also maintains a pool of sockets. This is key for performance reasons.</p>
<h4 id="http-clientrequest"><code>http.ClientRequest</code></h4>
<p>An <code>http.ClientRequest</code> object is created when <code>http.request()</code> or <code>http.get()</code> is called.</p>
<p>When a response is received, the <code>response</code> event is called with the response, with an <code>http.IncomingMessage</code> instance as argument.</p>
<p>The returned data of a response can be read in 2 ways:</p>
<ul>
<li>you can call the <code>response.read()</code> method</li>
<li>in the <code>response</code> event handler you can setup an event listener for the <code>data</code> event, so you can listen for the data streamed into.</li>
</ul>
<h4 id="http-server"><code>http.Server</code></h4>
<p>This class is commonly instantiated and returned when creating a new server using <code>http.createServer()</code>.</p>
<p>Once you have a server object, you have access to its methods:</p>
<ul>
<li><code>close()</code> stops the server from accepting new connections</li>
<li><code>listen()</code> starts the HTTP server and listens for connections</li>
</ul>
<h4 id="http-serverresponse"><code>http.ServerResponse</code></h4>
<p>Created by an <code>http.Server</code> and passed as the second parameter to the <code>request</code> event it fires.</p>
<p>Commonly known and used in code as <code>res</code>:</p><pre><code>const server = http.createServer((req, res) =&gt; {  //res is an http.ServerResponse object})</code></pre>
<p>The method you’ll always call in the handler is <code>end()</code>, which closes the response, the message is complete and the server can send it to the client. It must be called on each response.</p>
<p>These methods are used to interact with HTTP headers:</p>
<ul>
<li><code>getHeaderNames()</code> get the list of the names of the HTTP headers already set</li>
<li><code>getHeaders()</code> get a copy of the HTTP headers already set</li>
<li><code>setHeader('headername', value)</code> sets an HTTP header value</li>
<li><code>getHeader('headername')</code> gets an HTTP header already set</li>
<li><code>removeHeader('headername')</code> removes an HTTP header already set</li>
<li><code>hasHeader('headername')</code> return true if the response has that header set</li>
<li><code>headersSent()</code> return true if the headers have already been sent to the client</li>
</ul>
<p>After processing the headers you can send them to the client by calling <code>response.writeHead()</code>, which accepts the statusCode as the first parameter, the optional status message, and the headers object.</p>
<p>To send data to the client in the response body, you use <code>write()</code>. It will send buffered data to the HTTP response stream.</p>
<p>If the headers were not sent yet using <code>response.writeHead()</code>, it will send the headers first, with the status code and message that’s set in the request, which you can edit by setting the <code>statusCode</code> and <code>statusMessage</code> properties values:</p><pre><code>response.statusCode = 500response.statusMessage = 'Internal Server Error'</code></pre>
<h4 id="http-incomingmessage"><code>http.IncomingMessage</code></h4>
<p>An <code>http.IncomingMessage</code> object is created by:</p>
<ul>
<li><code>http.Server</code> when listening to the <code>request</code> event</li>
<li><code>http.ClientRequest</code> when listening to the <code>response</code> event</li>
</ul>
<p>It can be used to access the response:</p>
<ul>
<li>status using its <code>statusCode</code> and <code>statusMessage</code> methods</li>
<li>headers using its <code>headers</code> method or <code>rawHeaders</code></li>
<li>HTTP method using its <code>method</code> method</li>
<li>HTTP version using the <code>httpVersion</code> method</li>
<li>URL using the <code>url</code> method</li>
<li>underlying socket using the <code>socket</code> method</li>
</ul>
<p>The data is accessed using streams, since <code>http.IncomingMessage</code> implements the Readable Stream interface.</p>
<h3 id="node-js-streams">Node.js Streams</h3>
<p>Streams are one of the fundamental concepts that power Node.js applications.</p>
<p>They are a way to handle reading/writing files, network communications, or any kind of end-to-end information exchange in an efficient way.</p>
<p>Streams are not a concept unique to Node.js. They were introduced in the Unix operating system decades ago, and programs can interact with each other passing streams through the pipe operator (<code>|</code>).</p>
<p>For example, in the traditional way, when you tell the program to read a file, the file is read into memory, from start to finish, and then you process it.</p>
<p>Using streams you read it piece by piece, processing its content without keeping it all in memory.</p>
<p>The Node.js <code>stream</code> <a href="https://nodejs.org/api/stream.html" rel="noopener">module</a> provides the foundation upon which all streaming APIs are build.</p>
<h4 id="why-streams">Why streams?</h4>
<p>Streams basically provide two major advantages using other data handling methods:</p>
<ul>
<li><strong>Memory efficiency</strong>: you don’t need to load large amounts of data in memory before you are able to process it</li>
<li><strong>Time efficiency</strong>: it takes way less time to start processing data as soon as you have it, rather than waiting till the whole data payload is available to start</li>
</ul>
<h4 id="an-example-of-a-stream">An example of a stream</h4>
<p>A typical example is the one of reading files from a disk.</p>
<p>Using the Node.js <code>fs</code> module you can read a file, and serve it over HTTP when a new connection is established to your <code>http</code> server:</p><pre><code>const http = require('http')const fs = require('fs')</code></pre><pre><code>const server = http.createServer(function (req, res) {  fs.readFile(__dirname + '/data.txt', (err, data) =&gt; {    res.end(data)  })})server.listen(3000)</code></pre>
<p><code>readFile()</code> reads the full contents of the file, and invokes the callback function when it’s done.</p>
<p><code>res.end(data)</code> in the callback will return the file contents to the HTTP client.</p>
<p>If the file is big, the operation will take quite a bit of time. Here is the same thing written using streams:</p><pre><code>const http = require('http')const fs = require('fs')</code></pre><pre><code>const server = http.createServer((req, res) =&gt; {  const stream = fs.createReadStream(__dirname + '/data.txt')  stream.pipe(res)})server.listen(3000)</code></pre>
<p>Instead of waiting until the file is fully read, we start streaming it to the HTTP client as soon as we have a chunk of data ready to be sent.</p>
<h4 id="pipe-">pipe()</h4>
<p>The above example uses the line <code>stream.pipe(res)</code>: the <code>pipe()</code> method is called on the file stream.</p>
<p>What does this code do? It takes the source, and pipes it into a destination.</p>
<p>You call it on the source stream, so in this case, the file stream is piped to the HTTP response.</p>
<p>The return value of the <code>pipe()</code> method is the destination stream, which is a very convenient thing that lets us chain multiple <code>pipe()</code> calls, like this:</p><pre><code>src.pipe(dest1).pipe(dest2)</code></pre>
<p>This construct is the same as doing:</p><pre><code>src.pipe(dest1)dest1.pipe(dest2)</code></pre>
<h4 id="streams-powered-node-js-apis">Streams-powered Node.js APIs</h4>
<p>Due to their advantages, many Node.js core modules provide native stream handling capabilities, most notably:</p>
<ul>
<li><code>process.stdin</code> returns a stream connected to stdin</li>
<li><code>process.stdout</code> returns a stream connected to stdout</li>
<li><code>process.stderr</code> returns a stream connected to stderr</li>
<li><code>fs.createReadStream()</code> creates a readable stream to a file</li>
<li><code>fs.createWriteStream()</code> creates a writable stream to a file</li>
<li><code>net.connect()</code> initiates a stream-based connection</li>
<li><code>http.request()</code> returns an instance of the http.ClientRequest class, which is a writable stream</li>
<li><code>zlib.createGzip()</code> compress data using gzip (a compression algorithm) into a stream</li>
<li><code>zlib.createGunzip()</code> decompress a gzip stream.</li>
<li><code>zlib.createDeflate()</code> compress data using deflate (a compression algorithm) into a stream</li>
<li><code>zlib.createInflate()</code> decompress a deflate stream</li>
</ul>
<h4 id="different-types-of-streams">Different types of streams</h4>
<p>There are four classes of streams:</p>
<ul>
<li><code>Readable</code>: a stream you can pipe from, but not pipe into (you can receive data, but not send data to it). When you push data into a readable stream, it is buffered, until a consumer starts to read the data.</li>
<li><code>Writable</code>: a stream you can pipe into, but not pipe from (you can send data, but not receive from it)</li>
<li><code>Duplex</code>: a stream you can both pipe into and pipe from, basically a combination of a Readable and Writable stream</li>
<li><code>Transform</code>: a Transform stream is similar to a Duplex, but the output is a transform of its input</li>
</ul>
<h4 id="how-to-create-a-readable-stream">How to create a readable stream</h4>
<p>We get the <code>Readable</code> stream from the <code>stream</code> module, and we initialize it:</p><pre><code>const Stream = require('stream')const readableStream = new Stream.Readable()</code></pre>
<p>Now that the stream is initialized, we can send data to it:</p><pre><code>readableStream.push('hi!')readableStream.push('ho!')</code></pre>
<h4 id="how-to-create-a-writable-stream">How to create a writable stream</h4>
<p>To create a writable stream we extend the base <code>Writable</code> object, and we implement its <code>_write()</code> method.</p>
<p>First create a stream object:</p><pre><code>const Stream = require('stream')const writableStream = new Stream.Writable()</code></pre>
<p>then implement <code>_write</code>:</p><pre><code>writableStream._write = (chunk, encoding, next) =&gt; {    console.log(chunk.toString())    next()}</code></pre>
<p>You can now pipe a readable stream in:</p><pre><code>process.stdin.pipe(writableStream)</code></pre>
<h4 id="how-to-get-data-from-a-readable-stream">How to get data from a readable stream</h4>
<p>How do we read data from a readable stream? Using a writable stream:</p><pre><code>const Stream = require('stream')</code></pre><pre><code>const readableStream = new Stream.Readable()const writableStream = new Stream.Writable()</code></pre><pre><code>writableStream._write = (chunk, encoding, next) =&gt; {    console.log(chunk.toString())    next()}</code></pre><pre><code>readableStream.pipe(writableStream)</code></pre><pre><code>readableStream.push('hi!')readableStream.push('ho!')</code></pre>
<p>You can also consume a readable stream directly, using the <code>readable</code> event:</p><pre><code>readableStream.on('readable', () =&gt; {  console.log(readableStream.read())})</code></pre>
<h4 id="how-to-send-data-to-a-writable-stream">How to send data to a writable stream</h4>
<p>Using the stream <code>write()</code> method:</p><pre><code>writableStream.write('hey!\n')</code></pre>
<h4 id="signaling-a-writable-stream-that-you-ended-writing">Signaling a writable stream that you ended writing</h4>
<p>Use the <code>end()</code> method:</p><pre><code>const Stream = require('stream')</code></pre><pre><code>const readableStream = new Stream.Readable()const writableStream = new Stream.Writable()</code></pre><pre><code>writableStream._write = (chunk, encoding, next) =&gt; {    console.log(chunk.toString())    next()}</code></pre><pre><code>readableStream.pipe(writableStream)</code></pre><pre><code>readableStream.push('hi!')readableStream.push('ho!')</code></pre><pre><code>writableStream.end()</code></pre>
<h3 id="the-basics-of-working-with-mysql-and-node-js">The basics of working with MySQL and Node.js</h3>
<p>MySQL is one of the most popular relational databases in the world.</p>
<p>The Node.js ecosystem has several different packages that allow you to interface with MySQL, store data, retrieve data, and so on.</p>
<p>We’ll use <code><a href="https://github.com/mysqljs/mysql" rel="noopener">mysqljs/mysql</a></code>, a package that has over 12,000 GitHub stars and has been around for years.</p>
<h4 id="installing-the-node-js-mysql-package">Installing the Node.js MySql package</h4>
<p>You install it using:</p><pre><code>npm install mysql</code></pre>
<h4 id="initializing-the-connection-to-the-database">Initializing the connection to the database</h4>
<p>You first include the package:</p><pre><code>const mysql = require('mysql')</code></pre>
<p>and you create a connection:</p><pre><code>const options = {  user: 'the_mysql_user_name',  password: 'the_mysql_user_password',  database: 'the_mysql_database_name'}const connection = mysql.createConnection(options)</code></pre>
<p>You initiate a new connection by calling:</p><pre><code>connection.connect(err =&gt; {  if (err) {    console.error('An error occurred while connecting to the DB')    throw err  }})</code></pre>
<h4 id="the-connection-options">The connection options</h4>
<p>In the above example, the <code>options</code> object contained 3 options:</p><pre><code>const options = {  user: 'the_mysql_user_name',  password: 'the_mysql_user_password',  database: 'the_mysql_database_name'}</code></pre>
<p>There are many more you can use, including:</p>
<ul>
<li><code>host</code>, the database hostname, defaults to <code>localhost</code></li>
<li><code>port</code>, the MySQL server port number, defaults to 3306</li>
<li><code>socketPath</code>, used to specify a unix socket instead of host and port</li>
<li><code>debug</code>, by default disabled, can be used for debugging</li>
<li><code>trace</code>, by default enabled, prints stack traces when errors occur</li>
<li><code>ssl</code>, used to setup an SSL connection to the server (out of the scope of this tutorial)</li>
</ul>
<h4 id="perform-a-select-query">Perform a SELECT query</h4>
<p>Now you are ready to perform an SQL query on the database. The query once executed will invoke a callback function which contains an eventual error, the results and the fields:</p><pre><code>connection.query('SELECT * FROM todos', (error, todos, fields) =&gt; {  if (error) {    console.error('An error occurred while executing the query')    throw error  }  console.log(todos)})</code></pre>
<p>You can pass in values which will be automatically escaped:</p><pre><code>const id = 223connection.query('SELECT * FROM todos WHERE id = ?', [id], (error, todos, fields) =&gt; {  if (error) {    console.error('An error occurred while executing the query')    throw error  }  console.log(todos)})</code></pre>
<p>To pass multiple values, just put more elements in the array you pass as the second parameter:</p><pre><code>const id = 223const author = 'Flavio'connection.query('SELECT * FROM todos WHERE id = ? AND author = ?', [id, author], (error, todos, fields) =&gt; {  if (error) {    console.error('An error occurred while executing the query')    throw error  }  console.log(todos)})</code></pre>
<h4 id="perform-an-insert-query">Perform an INSERT query</h4>
<p>You can pass an object:</p><pre><code>const todo = {  thing: 'Buy the milk'  author: 'Flavio'}connection.query('INSERT INTO todos SET ?', todo, (error, results, fields) =&gt; {  if (error) {    console.error('An error occurred while executing the query')    throw error  }})</code></pre>
<p>If the table has a primary key with <code>auto_increment</code>, the value of that will be returned in the <code>results.insertId</code>value:</p><pre><code>const todo = {  thing: 'Buy the milk'  author: 'Flavio'}connection.query('INSERT INTO todos SET ?', todo, (error, results, fields) =&gt; {  if (error) {    console.error('An error occurred while executing the query')    throw error  }}  const id = results.resultId  console.log(id))</code></pre>
<h4 id="close-the-connection">Close the connection</h4>
<p>When you need to terminate the connection to the database you can call the <code>end()</code> method:</p><pre><code>connection.end()</code></pre>
<p>This makes sure any pending query gets sent, and the connection is gracefully terminated.</p>
<h3 id="the-difference-between-development-and-production">The difference between development and production</h3>
<p>You can have different configurations for production and development environments.</p>
<p>Node.js assumes it’s always running in a development environment. You can signal Node.js that you are running in production by setting the <code>NODE_ENV=production</code>environment variable.</p>
<p>This is usually done by executing the command:</p><pre><code>export NODE_ENV=production</code></pre>
<p>in the shell, but it’s better to put it in your shell configuration file (like <code>.bash_profile</code> with the Bash shell) because otherwise the setting does not persist in case of a system restart.</p>
<p>You can also apply the environment variable by prepending it to your application initialization command:</p><pre><code>NODE_ENV=production node app.js</code></pre>
<p>This environment variable is a convention that is widely used in external libraries as well.</p>
<p>Setting the environment to <code>production</code> generally ensures that:</p>
<ul>
<li>logging is kept to a minimum, essential level</li>
<li>more caching levels take place to optimize performance</li>
</ul>
<p>For example <a href="https://pugjs.org/api/express.html" rel="noopener">Pug</a>, the templating library used by Express, compiles in debug mode if <code>NODE_ENV</code> is not set to <code>production</code>. Express views are compiled in every request in development mode, while in production they are cached. There are many more examples.</p>
<p>Express provides configuration hooks specific to the environment, which are automatically called based on the <code>NODE_ENV</code> variable value:</p><pre><code>app.configure('development', () =&gt; {  //...})app.configure('production', () =&gt; {  //...})app.configure('production', 'staging', () =&gt; {  //...})</code></pre>
<p>For example you can use this to set different error handlers for different modes:</p><pre><code>app.configure('development', () =&gt; {  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));})</code></pre><pre><code>app.configure('production', () =&gt; {  app.use(express.errorHandler())})</code></pre>
<h3 id="closing-words">Closing words</h3>
<p>I hope this introduction to Node.js will help you get started using it, or help you grasp some of its concepts. And hopefully now you’ll know enough to start building some great things!</p>
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
