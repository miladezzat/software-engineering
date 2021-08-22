---
card: "https://cdn-media-1.freecodecamp.org/images/0*BaUWxBjXYt4i5AvZ"
tags: [Nodejs]
description: by Ayo Isaiah
author: "Milad E. Fahmy"
title: "Learn Node.js by building a Timestamp Microservice app"
created: "2021-08-15T19:40:03+02:00"
modified: "2021-08-15T19:40:03+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nodejs tag-javascript tag-programming tag-tech tag-apps-tag ">
<header class="post-full-header">
<h1 class="post-full-title">Learn Node.js by building a Timestamp Microservice app</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*BaUWxBjXYt4i5AvZ 300w,
https://cdn-media-1.freecodecamp.org/images/0*BaUWxBjXYt4i5AvZ 600w,
https://cdn-media-1.freecodecamp.org/images/0*BaUWxBjXYt4i5AvZ 1000w,
https://cdn-media-1.freecodecamp.org/images/0*BaUWxBjXYt4i5AvZ 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*BaUWxBjXYt4i5AvZ" alt="Learn Node.js by building a Timestamp Microservice app">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Ayo Isaiah</p>
<h1 id="learn-node-js-by-building-a-timestamp-microservice-app">Learn Node.js by building a Timestamp Microservice app</h1>
<figcaption>Photo by <a href="https://unsplash.com/@devano23?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Devon Janse van Rensburg</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>One of the reasons why Node.js is such a great platform for building applications is the abundance of libraries that have been developed by the community for practically all the common use cases. This makes it really easy to go from idea to a production-ready application in a relatively short space of time.</p>
<p>That said, at least understanding Node.js’s standard libraries will always be beneficial to you, especially if you want to gain a deeper understanding of how Node.js works.</p>
<p>In this article, you’ll learn how to build a <a href="https://learn.freecodecamp.org/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice" rel="noopener">timestamp microservice</a> using a few built-in Node.js modules. Here’s a <a href="https://ayo-timestamp.herokuapp.com/" rel="noopener">live demo</a> of what we’ll be building. You can find the complete source code for this project in this <a href="https://github.com/ayoisaiah/timestamp-microservice" rel="noopener">GitHub repo</a>.</p>
<h3 id="prerequisites">Prerequisites</h3>
<p>You need to have previous experience with building JavaScript applications in the browser, but no prior experience with Node.js is required. Before you continue though, you need to have Node.js and <code>npm</code> installed.</p>
<p>You can visit the <a href="https://nodejs.org/en/download/" rel="noopener">Node.js website</a> to view installation instructions for your operating system. <a href="https://npmjs.com/" rel="noopener">npm</a> comes bundled with Node, so once you install Node, you’ll have access to the <code>npm</code> command too.</p>
<p>The versions I used while building this project are as follows:</p>
<ul>
<li>Node.js v10.9.0</li>
<li>npm v6.4.1</li>
</ul>
<p>You can view the version of Node and <code>npm</code> you have installed by running the following commands in your terminal:</p><pre><code>node -vnpm -v</code></pre>
<h3 id="user-stories">User stories</h3>
<p>Here are the user stories for this project:</p>
<ol>
<li>The API endpoint is <code>GET [project_url]/api/timestamp/:date_string?</code></li>
<li>A date string is valid if it can be successfully parsed by <code>new Date(date_string)</code>. Note that the unix timestamp needs to be an integer (not a string) specifying milliseconds. In our test we will use date strings compliant with ISO-8601 (e.g. “2016-11-20”) because this will ensure an UTC timestamp.</li>
<li>If the date string is empty, it should be equivalent to trigger <code>new Date()</code>, i.e. the service uses the current timestamp.</li>
<li>If the date string is valid, the API returns a JSON having the structure <code>{"unix": &lt;date.getTime()&gt;, "utc" : &lt;date.toUTCSt</code>ring()<code>&gt; } e.g. {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17</code>:31:29 GMT"}.</li>
<li>If the date string is invalid, the API returns a JSON having the structure <code>{"error" : "Invalid Date" }</code>.</li>
</ol>
<h3 id="getting-started">Getting started</h3>
<p>Open a new terminal instance on your computer, then create a new directory for this project in your filesystem, and change into it using the following commands:</p><pre><code>mkdir timestamp-microservicecd timestamp-microservice</code></pre>
<p>The first step when starting a new Node project is to initialize it with a <code>package.json</code> file. This file contains some information about a project including its name, description, author and all the packages that it depends on. Here’s the command that helps you create a <code>package.json</code> file for your project:</p><pre><code>npm init</code></pre>
<p>Running the above command opens up a prompt that allows you to input the information for specific parts of your project in the following order:</p>
<ol>
<li>The name of the project.</li>
<li>The project’s initial version.</li>
<li>The project description.</li>
<li>The project’s entry file.</li>
<li>The project’s test command.</li>
<li>The git repository for the project,</li>
<li>Keywords related to the project.</li>
<li>The project license.</li>
</ol>
<p>If you’re satisfied with the suggestion that the command provides next to each field (in brackets), just hit the Enter key to accept it and move on to the next field until the command exits. You can also use <code>npm init -y</code> to quickly populate a <code>package.json</code> file with all the default values.</p>
<p>The next step is to create an <code>index.js</code> file at the root of your project directory. This is where we will be writing the code for this project.</p><pre><code>touch index.js</code></pre>
<p>Finally, create a <code>views</code> folder at the root of your project directory. This folder will contain two HTML files: <code>index.html</code> and <code>404.html</code>.</p><pre><code>mkdir viewstouch views/index.html views/404.html</code></pre>
<p>Open up the project folder in your favourite text editor. We can now start building the application.</p>
<h3 id="create-an-http-web-server">Create an HTTP web server</h3>
<p>Open up <code>index.js</code> and type the following code into it:</p><pre><code>const http = require("http");</code></pre><pre><code>const requestHandler = (req, res) =&gt; {  console.log(req.url);  res.end('Hello world!');};</code></pre><pre><code>const server = http.createServer(requestHandler);</code></pre><pre><code>server.listen(process.env.PORT || 4100, err =&gt; {  if (err) throw err;</code></pre><pre><code>console.log(`Server running on PORT ${server.address().port}`);});</code></pre>
<p>The first line requires the <code>http</code> module that ships with Node and makes it accessible through the <code>http</code> variable. Then, we utilize the <code>createServer</code> method on the http module to create a new instance of an HTTP server which is then stored in the <code>server</code> variable.</p>
<p>Notice the <code>requestHandler</code> function created under the <code>http</code> variable. This function will be invoked on each incoming request to the web server. The <code>req</code> and <code>res</code> arguments are objects that represent the request from the client and server response respectively.</p>
<p>The <code>listen</code> method starts the server and makes it listen for incoming connections on the <code>PORT</code> environmental variable (available on the <code>process.env</code> object) or <code>4100</code> if there’s nothing there. The callback function passed to the <code>listen</code> method will execute when the server starts. If the provided port is already taken, or the server cannot start for any other reason, an error is thrown. Otherwise, the <code>console.log()</code> statement is printed in the terminal.</p>
<p>You can start the server by running <code>node index.js</code> in the terminal. Once your server is running, visit <a href="http://localhost:4100/" rel="noopener">http://localhost:4100</a> in your browser. You should see the words “Hello world!”.</p>
<h3 id="create-the-root-route">Create the root route</h3>
<p>Since the <code>http</code> module is very basic, it doesn’t provide us with a router. So we have to manually check for the URL to decide what to do for each route. We want to provide instructions on how to use the timestamp microservice once the root route is hit just like in the demo.</p>
<p>We can do this by modifying the <code>requestHandler</code> function like this:</p><pre><code>const requestHandler = (req, res) =&gt; {  if (req.url === "/") {    // Do something  }};</code></pre>
<p>A simple <code>if</code> statement can help us check if the incoming request url is exactly <code>/</code> and then we can put the logic for that route between the curly braces. In this case, we want to return some HTML explaining how the microservice works. Before you continue, copy and paste the following into the <code>views/index.html</code> file we created earlier and save the file.</p><pre><code>&lt;!DOCTYPE html&gt;&lt;html lang="en"&gt;&lt;head&gt;  &lt;meta charset="UTF-8"&gt;  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;  &lt;meta http-equiv="X-UA-Compatible" content="ie=edge"&gt;  &lt;title&gt;Timestamp Microservice&lt;/title&gt;  &lt;style&gt;    body {      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;      color: #333;        background-color: #f6f6f6;    }</code></pre><pre><code>.container {      width: 100%;      max-width: 800px;      margin-left: auto;      margin-right: auto;    }</code></pre><pre><code>li {      margin-bottom: 10px;    }</code></pre><pre><code>li, p {      font-size: 18px;    }</code></pre><pre><code>code {      font-size: 90%;    }</code></pre><pre><code>a {      color: #006fc6;    }  &lt;/style&gt;&lt;/head&gt;&lt;body&gt;  &lt;div class="container"&gt;    &lt;h1&gt;API Project: Timestamp Microservice&lt;/h1&gt;    &lt;h3&gt;User Stories:&lt;/h1&gt;    &lt;ol class="user-stories"&gt;      &lt;li&gt;The API endpoint is &lt;code&gt;GET [project_url]/api/timestamp/:date_string&lt;/code&gt;&lt;/li&gt;      &lt;li&gt;A date string is valid if can be successfully parsed by &lt;code&gt;new Date(date_string)&lt;/code&gt;.&lt;br&gt;        Note that the unix timestamp needs to be an &lt;strong&gt;integer&lt;/strong&gt; (not a string) specifying &lt;strong&gt;milliseconds&lt;/strong&gt;.&lt;br&gt;        In our test we will use date strings compliant with ISO-8601 (e.g. &lt;code&gt;"2016-11-20"&lt;/code&gt;) because this will ensure an UTC timestamp.&lt;/li&gt;      &lt;li&gt;If the date string is &lt;strong&gt;empty&lt;/strong&gt; it should be equivalent to trigger &lt;code&gt;new Date()&lt;/code&gt;, i.e. the service uses the current timestamp.&lt;/li&gt;      &lt;li&gt;If the date string is &lt;strong&gt;valid&lt;/strong&gt; the api returns a JSON having the structure&lt;br&gt;&lt;code&gt;{"unix": &lt;date.getTime()&gt;, "utc" : &lt;date.toUTCString()&gt; }&lt;/code&gt;&lt;br&gt;        e.g. &lt;code&gt;{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}&lt;/code&gt;&lt;/li&gt;      &lt;li&gt;If the date string is &lt;strong&gt;invalid&lt;/strong&gt; the api returns a JSON having the structure &lt;br&gt;        &lt;code&gt;{"error" : "Invalid Date" }&lt;/code&gt;.      &lt;/li&gt;    &lt;/ol&gt;</code></pre><pre><code>&lt;h3&gt;Example Usage:&lt;/h3&gt;    &lt;ul&gt;      &lt;li&gt;        &lt;a href="api/timestamp/2015-12-25"&gt;[project url]/api/timestamp/2015-12-25&lt;/a&gt;      &lt;/li&gt;      &lt;li&gt;        &lt;a href="api/timestamp/1450137600000"&gt;[project url]/api/timestamp/1450137600&lt;/a&gt;      &lt;/li&gt;    &lt;/ul&gt;</code></pre><pre><code>&lt;h3&gt;Example Output:&lt;/h3&gt;    &lt;p&gt;      &lt;code&gt;{"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}&lt;/code&gt;    &lt;/p&gt;  &lt;/div&gt;&lt;/body&gt;&lt;/html&gt;</code></pre>
<p>So how do we send an HTML response to the browser? We can use the built-in <code>fs</code> module to read the file, and then send the file’s contents to the browser using the <code>res</code> argument which represents the server’s response.</p>
<p>Require the <code>fs</code> module just below the <code>http</code> one as shown below:</p><pre><code>const http = require("http");const fs = require("fs");</code></pre>
<p>Then modify the <code>requestHandler</code> function to look like this:</p><pre><code>const requestHandler = (req, res) =&gt; {  if (req.url === "/") {    fs.readFile("views/index.html", "utf8", (err, html) =&gt; {      if (err) throw err;</code></pre><pre><code>res.writeHead(200, { "Content-Type": "text/html" });      res.end(html);    });  }};</code></pre>
<p>The <code>readFile()</code> method asynchronously reads the file provided in the first argument (<code>views/index.html</code>) using the provided encoding (<code>utf8</code>), and executes the provided callback function. If an error occurs while reading the file, an exception is thrown. Otherwise, the contents of the file becomes available in the second argument of the callback function (<code>html</code>) in this case.</p>
<p>Now, we can send the contents of the <code>html</code> to the browser. But we need to set the <a href="https://freshman.tech/http-status-codes/" rel="noopener">HTTP response code</a> as well as set a response header to tell the browser what the media type of the returned content actually is.</p>
<p>The <code>writeHead()</code> method on the server response object is used in this case. It accepts the status code as the first argument, and an object representing the response headers as the second. We’ve set the <code>Content-Type</code> header to <code>text/html</code> to ensures that the browser interprets the contents of our response as HTML.</p>
<p>Next, the <code>end()</code> method sends the contents of the <code>index.html</code> file to the browser in the response body and signals the end of the server response.</p>
<p>To try out the new additions to the code, you need to stop the server with Ctrl-C and start it again using <code>node server.js</code>, then refresh your browser. You should see the html from the <code>views/index.html</code> file on the page.</p>
<h3 id="set-up-nodemon-to-auto-restart-node-process">Set up Nodemon to auto restart Node process</h3>
<p>By default, you have to kill the server process and restart it whenever you make a change to your code, but there’s an easy way around that.</p>
<p>You need to install a tool called <a href="https://nodemon.io/" rel="noopener">Nodemon</a> which auto restarts the node process whenever your code changes. You can install this tool globally on your machine with <code>npm</code>:</p><pre><code>npm install -g nodemon</code></pre>
<p>Once Nodemon is installed, kill the server process and start it again with <code>nodemon index.js</code>. Now the web server will be auto restarted whenever you make a change in your code. Pretty neat huh?</p>
<p>The next step is to set up a route for the timestamp microservice. According to user story #1, this service should be available under <code>/api/timestamp/:date_string?</code> where <code>:date_string?</code> represents the date string that will be passed to the service.</p>
<p>Modify your <code>index.js</code> file so that it look likes this:</p><pre><code>// require statements</code></pre><pre><code>const getTimestamp = date =&gt; ({  unix: date.getTime(),  utc: date.toUTCString()});</code></pre><pre><code>const requestHandler = (req, res) =&gt; {  if (req.url === "/") {    fs.readFile("views/index.html", (err, html) =&gt; {      if (err) throw err;</code></pre><pre><code>res.writeHead(200, { "Content-Type": "text/html" });      res.end(html);    });  } else if (req.url.startsWith("/api/timestamp")) {    const dateString = req.url.split("/api/timestamp/")[1];    let timestamp;</code></pre><pre><code>if (dateString === undefined || dateString.trim() === "") {      timestamp = getTimestamp(new Date());    } else {      const date = !isNaN(dateString)        ? new Date(parseInt(dateString))        : new Date(dateString);</code></pre><pre><code>if (!isNaN(date.getTime())) {        timestamp = getTimestamp(date);      } else {        timestamp = {          error: "invalid date"        };      }    }</code></pre><pre><code>res.writeHead(200, { "Content-Type": "application/json" });    res.end(JSON.stringify(timestamp));  }};</code></pre><pre><code>// rest of the file</code></pre>
<p>I know that’s a lot of code to process so let me walk you through it bit by bit. We have an <code>else if</code> statement in <code>requestHandler</code> that checks if the request URL starts with <code>/api/timstamp</code>. If so, we <code>split</code> the request URL into two and grab the <code>dateString</code> part off the resulting array.</p>
<p>If <code>dateString</code> is <code>undefined</code> or an empty string, it means that no date string was provided in the request. User story #3 dictates that we treat that situation as if the current date was requested, and that’s what <code>getTimestamp(new Date())</code> does.</p>
<p>If a <code>dateString</code> does exist, we need to check if it’s a unix timestamp or an ISO-8601 date string (such as “2018-11-22”) so that we can decide whether to pass a number or a string to <code>new Date()</code>. Note that if you pass a unix timestamp as a string to <code>new Date()</code>, you will get an invalid result. That’s why this step is necessary.</p>
<p>Next, we check if the date object stored in the <code>date</code> variable is valid. If so, we get the timestamp object as before, otherwise we set the <code>timestamp</code> variable to the structure for invalid dates as specified in user story #5.</p>
<p>The final step is to send the contents of the <code>timestamp</code> variable to the browser. In this case, we set the <code>Content-Type</code> header to <code>application/json</code> so that the response body is correctly interpreted as JSON. We also make sure that we are sending a valid JSON value by calling <code>JSON.stringify(timestamp)</code> and passing the output to the <code>end</code> method.</p>
<p>Now, test the app by passing a valid date string or unix timestamp after <code>/api/timestamp/</code> or leave the date string out to get a JSON response for the current date. You can also try to pass an invalid date string to confirm that the service recognizes it as an invalid date.</p>
<h3 id="implement-a-404-page">Implement a 404 page</h3>
<p>We’ve completed all the user stories for this application, but there’s one final thing I’d like us to do. If the browser requests a url that is not <code>/</code> or starts with <code>/api/timestamp</code>, we should set up the server to send a 404 response to the browser.</p>
<p>First, populate the <code>views/404.html</code> file with the following code:</p><pre><code>&lt;!DOCTYPE html&gt;&lt;html lang="en"&gt;&lt;head&gt;  &lt;meta charset="UTF-8"&gt;  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;  &lt;meta http-equiv="X-UA-Compatible" content="ie=edge"&gt;  &lt;title&gt;404 Not found&lt;/title&gt;&lt;/head&gt;&lt;body&gt;  &lt;h1&gt;undefined is, unfortunately, not a function&lt;/h1&gt;  &lt;p&gt;You just 404'd. Maybe you should head back to the &lt;a href="/"&gt;homepage&lt;/a&gt;.&lt;/p&gt;&lt;script&gt;&lt;/script&gt;&lt;/body&gt;&lt;/html&gt;</code></pre>
<p>Next, modify the <code>requestHandler</code> function in <code>index.js</code> so that it looks like this:</p><pre><code>const requestHandler = (req, res) =&gt; {  if (req.url === "/") {    fs.readFile("views/index.html", (err, html) =&gt; {      if (err) throw err;</code></pre><pre><code>res.writeHead(200, { "Content-Type": "text/html" });      res.end(html);    });  } else if (req.url.startsWith("/api/timestamp")) {    const dateString = req.url.split("/api/timestamp/")[1];    let timestamp;</code></pre><pre><code>if (dateString === undefined || dateString.trim() === "") {      timestamp = getTimestamp(new Date());    } else {      const date = !isNaN(dateString)        ? new Date(parseInt(dateString))        : new Date(dateString);</code></pre><pre><code>if (!isNaN(date.getTime())) {        timestamp = getTimestamp(date);      } else {        timestamp = {          error: "invalid date"        };      }    }</code></pre><pre><code>res.writeHead(200, { "Content-Type": "application/json" });    res.end(JSON.stringify(timestamp));  } else {    fs.readFile("views/404.html", (err, html) =&gt; {      if (err) throw err;</code></pre><pre><code>res.writeHead(404, { "Content-Type": "text/html" });      res.end(html);    });  }};</code></pre>
<p>I’ve added a final <code>else</code> block at the end of the <code>requestHandler</code> function that reads the contents of the <code>views/404.html</code> file and sends it to the browser for any URL that does not match <code>/</code> or <code>/api/timestamp/:date_string?</code>.</p>
<p>Try it out. Enter a URL like <a href="http://localhost:4100/foo" rel="noopener">http://localhost:4100/foo</a> in your browser and confirm that it works!</p>
<h3 id="deploy-to-heroku">Deploy to Heroku</h3>
<p>What good is a timestamp microservice if no one can use it? Let’s share it with the world by deploying it to <a href="https://heroku.com/" rel="noopener">Heroku</a>.</p>
<p>The first step is to <a href="https://signup.heroku.com/" rel="noopener">sign up for a free Heroku account</a>. Once your account is activated, <a href="https://dashboard.heroku.com/new-app?org=personal-apps" rel="noopener">follow this link</a> to create a new app. Give it a unique name. I called mine “ayo-timestamp”.</p>
<p>Once your app is created, <a href="https://devcenter.heroku.com/articles/heroku-command-line" rel="noopener">follow the instructions here</a> to install the Heroku CLI on your machine. Then run the <code>heroku login</code> command in the terminal to login to your Heroku account.</p>
<p>Make sure you’ve initialised a git repository for your project. If not, run the <code>git init</code> command at the root of your project directory, then run the command below to set heroku as a remote for your git repo. Replace <code>&lt;app na</code>me&gt; with the name of your application.</p><pre><code>heroku git:remote -a &lt;app name&gt;</code></pre>
<p>Next, create a <code>Procfile</code> in the root of your project directory (<code>touch Procfile</code>) and paste in the following contents:</p><pre><code>web: node index.js</code></pre>
<p>Next, specify the version of Node you are running in your <code>package.json</code> file under the <code>engines</code> key. I specified version <code>10.9.0</code> since that’s the version I’m running on my computer. You should change that value to match the version of Node you have on your machine.</p><pre><code>{  "name": "timestamp-microservice",  "version": "1.0.0",  "description": "",  "main": "index.js",  "scripts": {    "test": "echo \"Error: no test specified\" &amp;&amp; exit 1"  },  "keywords": [],  "author": "Ayo Isaiah",  "license": "MIT",  "engines": {    "node": "10.9.0"  }}</code></pre>
<p>Finally, commit your code and push it to the Heroku remote using the following commands:</p><pre><code>git add .git commit -m "Initial commit"git push heroku master</code></pre>
<p>Once the deployment process is done, you can open <code>https://&lt;your-app-name&gt;.hero</code>ku.com to view and test your project.</p>
<h3 id="wrap-up">Wrap up</h3>
<p>We’ve successfully built a timestamp microservice using only built-in Node modules, and deployed it to Heroku. To be sure, using web frameworks like <a href="https://expressjs.com/" rel="noopener">Express</a> is easier and more practical for non-trivial applications, but you’d be a much better Node developer if you’re at least a little familiar with its standard library before checking out what the community has to offer.</p>
<p>I’ve got another tutorial that covers <a href="http://localhost:5000/learn-node/" rel="noopener">building a Node.js website</a> using the Express as the web server and <a href="https://pugjs.org/" rel="noopener">Pug</a> for templating. You can check it out if you want some more practice with building Node projects and <a href="http://localhost:5000/newsletter/" rel="noopener">subscribe to my newsletter</a> to get notified when I publish new tutorials.</p>
<p><em>Originally published at <a href="https://freshman.tech/microservice/" rel="noopener">freshman.tech</a> on November 22, 2018.</em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
