---
card: "https://cdn-media-1.freecodecamp.org/images/0*IlQX1QCLarsRIFl7"
tags: [Express]
description: by João Henrique
author: "Milad E. Fahmy"
title: "How to create a React frontend and a Node/Express backend and connect them"
created: "2021-08-15T19:42:14+02:00"
modified: "2021-08-15T19:42:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-express tag-react tag-javascript tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to create a React frontend and a Node/Express backend and connect them</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*IlQX1QCLarsRIFl7 300w,
https://cdn-media-1.freecodecamp.org/images/0*IlQX1QCLarsRIFl7 600w,
https://cdn-media-1.freecodecamp.org/images/0*IlQX1QCLarsRIFl7 1000w,
https://cdn-media-1.freecodecamp.org/images/0*IlQX1QCLarsRIFl7 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*IlQX1QCLarsRIFl7" alt="How to create a React frontend and a Node/Express backend and connect them">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by João Henrique</p>
<h1 id="how-to-create-a-react-frontend-and-a-node-express-backend-and-connect-them">How to create a React frontend and a Node/Express backend and connect them</h1>
<figcaption>“two square blue LED lights” by <a href="https://unsplash.com/@othentikisra?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">israel palacio</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>In this article, I’ll walk you through the process of creating a simple React app and connecting it to a simple Node/Express API that we will also be creating.</p>
<p>I won't go into much detail about how to work with any of the technologies I will mention in this tutorial but I will leave links, in case you want to learn more.</p>
<p>You can find all the code in <a href="https://github.com/Joao-Henrique/React_Express_App_Medium_Tutorial" rel="noopener"><strong>this repository</strong></a> I made for the tutorial.</p>
<p>The objective here is to give you a practical guide on how to set up and connect the <strong>front-end client</strong> and the<strong> back-end API</strong>.</p>
<p>Before we get our hands dirty, make sure you have <a href="https://nodejs.org/en/" rel="noopener">Node.js</a> running on your machine.</p>
<h4 id="create-the-main-project-directory">Create the Main Project directory</h4>
<p>In your terminal, navigate to a directory where you would like to save your project. Now create a new directory for your project and navigate into it:</p><pre><code class="language-bash">mkdir my_awesome_project
cd my_awesome_project</code></pre>
<h4 id="create-a-react-app">Create a <a href="https://reactjs.org/" rel="noopener">React</a> App</h4>
<p>This process is really straightforward.</p>
<p>I will be using Facebook’s <a href="https://github.com/facebook/create-react-app" rel="noopener">create-react-app</a> to… you guessed it, easily create a react app named <strong>client</strong>:</p><pre><code class="language-bash">npx create-react-app client
cd client
npm start</code></pre>
<p><em>Let’s see what I have done:</em></p>
<ol>
<li><em>Used npm’s <a href="https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b" rel="noopener">npx</a> to create a react app and named it client.</em></li>
<li><em>cd(change directory) into the client directory.</em></li>
<li><em>Started the app.</em></li>
</ol>
<p>In your browser, navigate to <a href="http://localhost:3000/" rel="noopener">http://localhost:3000/</a>.</p>
<p>If all is ok, you will see the react welcome page. Congratulations! That means you now have a basic <a href="https://reactjs.org/" rel="noopener"><strong>React</strong></a> application running on your local machine. Easy right?</p>
<p>To stop your react app, just press <code><strong>Ctrl + c</strong></code> in your terminal.</p>
<h4 id="create-an-express-app">Create an <a href="https://expressjs.com/" rel="noopener">Express</a> App</h4>
<p>Ok, this will be as straightforward as the previous example. Don’t forget to navigate to your project top folder.</p>
<p>I will be using the <a href="https://expressjs.com/en/starter/generator.html" rel="noopener">Express Application Generator</a> to quickly create an application skeleton and name it <strong>api:</strong></p><pre><code class="language-bash">npx express-generator api
cd api
npm install
npm start</code></pre>
<p><em>Let’s see what I have done:</em></p>
<ol>
<li><em>Used npm’s npx to install express-generator globally.</em></li>
<li><em>Used express-generator to create an express app and named it api.</em></li>
<li><em>cd into the API directory.</em></li>
<li>Installed all dependencies.</li>
<li>Started the app.</li>
</ol>
<p>In your browser, navigate to <a href="http://localhost:3000/" rel="noopener">http://localhost:3000/</a>.</p>
<p>If all is ok, you will see the express welcome page. Congratulations! That means you now have a basic <a href="https://expressjs.com/" rel="noopener"><strong>Express</strong></a> application running on your local machine. Easy right?</p>
<p>To stop your react app, just press <code><strong>Ctrl + c</strong></code> in your terminal.</p>
<h4 id="configuring-a-new-route-in-the-express-api">Configuring a new <a href="https://expressjs.com/en/guide/routing.html" rel="noopener">route</a> in the Express API</h4>
<p>Ok, let’s get our hands dirty. Time to open your favorite code editor <em>(I’m using <a href="https://code.visualstudio.com/" rel="noopener">VS Code</a>) </em>and navigate to your project folder.</p>
<p><em>If you named the <strong>react app as client</strong> and the <strong>express app as api</strong>, you will find two main folders: <strong>client</strong> and <strong>api.</strong></em></p>
<ol>
<li>Inside the <strong>API</strong> directory, go to <strong>bin/www</strong> and change the port number on line 15 from 3000 to 9000. We will be running both apps at the same time later on, so doing this will avoid issues. The result should be something like this:</li>
</ol>
<figcaption>my_awesome_project/api/bin/www</figcaption>
</figure>
<p>2. On <strong>api/routes</strong>, create a <strong>testAPI.js</strong> file and paste this code:</p><pre><code class="language-js">var express = require(“express”);
var router = express.Router();
router.get(“/”, function(req, res, next) {
res.send(“API is working properly”);
});
module.exports = router;</code></pre>
<p>3. On the <strong>api/app.js</strong> file, insert a new route on line 24:</p><pre><code class="language-js">app.use("/testAPI", testAPIRouter);</code></pre>
<p>4. Ok, you are “telling” express to use this route but, you still have to require it. Let’s do that on line 9:</p><pre><code class="language-js">var testAPIRouter = require("./routes/testAPI");</code></pre>
<p>The only changes are in line 9 and line 25. It should end up something like this:</p>
<figcaption>my_awesome_project/api/app.js</figcaption>
</figure>
<p>5. Congratulations! You have created a new <a href="https://expressjs.com/en/guide/routing.html" rel="noopener">route</a>.</p>
<p>If you start your API app (in your terminal, navigate to the API directory and “<strong>npm start”</strong>), and go to <a href="http://localhost:9000/testAPI" rel="noopener">http://localhost:9000/testAPI</a> in your browser, you will see the message: <strong><em>API is working properly.</em></strong></p>
<h4 id="connecting-the-react-client-to-the-express-api">Connecting the React Client to the Express API</h4>
<ol>
<li>On your code editor, let’s work in the <strong>client</strong> directory. Open <strong>app.js</strong> file located in <strong>my_awesome_project/client/app.js</strong>.</li>
<li>Here I will use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" rel="noopener"><strong>Fetch API</strong></a><strong> </strong>to retrieve data from the <strong>API. </strong>Just paste this code after the Class declaration and before the render method:</li>
</ol><pre><code class="language-jsx">constructor(props) {
super(props);
this.state = { apiResponse: "" };
}
callAPI() {
fetch("http://localhost:9000/testAPI")
.then(res =&gt; res.text())
.then(res =&gt; this.setState({ apiResponse: res }));
}
componentWillMount() {
this.callAPI();
}</code></pre>
<p>3. Inside the render method, you will find a <strong>&lt;</strong>;p&gt; tag. Let’s change it so that it render<strong>s the apiRes</strong>ponse:</p><pre><code class="language-jsx">&lt;p className="App-intro"&gt;;{this.state.apiResponse}&lt;/p&gt;</code></pre>
<p>At the end, this file should look something like this:</p>
<p>I know!!! This was a bit too much. Copy paste is your friend, but you have to understand what you are doing. Let’s see what I did here:</p>
<ol>
<li><em>On lines 6 to 9, we inserted a constructor, that initializes the default state.</em></li>
<li><em>On lines 11 to 16, we inserted the method <strong>callAPI() </strong>that will fetch the data from the API and store the response on <strong>this.state.apiResponse.</strong></em></li>
<li><em>On lines 18 to 20, we inserted a react lifecycle method called <strong>componentDidMount(), </strong>that will execute the <strong>callAPI()</strong> method after the component mounts.</em></li>
<li>Last, on line 29, I used the <strong>&lt;</strong>;p&gt; tag to display a paragraph on our client page, with the text that we retrieved from the API.</li>
</ol>
<h4 id="what-the-heck-cors">What the heck!! <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" rel="noopener">CORS</a> ?</h4>
<p>Oh yeah, baby! We are almost done. But if we start both our apps (client and API) and navigate to <a href="http://localhost:3000/" rel="noopener">http://localhost:3000/</a>, you still won't find the expected result displayed on the page. If you open chrome developer tools, you will find why. In the console, you will see this error:</p>
<blockquote>Failed to load <a href="http://localhost:9000/testAPI" rel="noopener">http://localhost:9000/testAPI</a>: No ‘Access-Control-Allow-Origin’ header is present on the requested resource. Origin ‘<a href="http://localhost:3000'" rel="noopener">http://localhost:3000'</a> is therefore not allowed access. If an opaque response serves your needs, set the request’s mode to ‘no-cors’ to fetch the resource with CORS disabled.</blockquote>
<p>This is simple to solve. We just have to add CORS to our API to allow cross-origin requests. Let’s do just that. You should <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" rel="noopener">check here</a> to find out more about <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" rel="noopener">CORS</a>.</p>
<ol>
<li>In your terminal navigate to the API directory and install the <strong>CORS</strong> package:</li>
</ol><pre><code class="language-bash">npm install --save cors</code></pre>
<p>2. On your code editor go to the API directory and open the <strong>my_awesome_project/api/app.js</strong> file.</p>
<p>3. On line 6 require <strong>CORS:</strong></p><pre><code class="language-js">var cors = require("cors");</code></pre>
<p>4. Now on line 18 “tell” express to use <strong>CORS</strong>:</p><pre><code class="language-js">app.use(cors());</code></pre>
<p>The API <strong>app.js</strong> file should end up something like this:</p>
<figcaption>my_awesome_project/api/app.js</figcaption>
</figure>
<h4 id="great-work-it-s-all-done-">Great Work. It’s all done!!</h4>
<p>Ok! We are all set!</p>
<p>Now start both your apps (client and API), in two different terminals, using the <strong>npm start</strong> command.</p>
<p>If you navigate to <a href="http://localhost:3000/" rel="noopener">http://localhost:3000/</a> in your browser you should find something like this:</p>
<p>Of course, this project as it is won’t do much, but is the start of a Full Stack Application. You can find all the code in <a href="https://github.com/Joao-Henrique/React_Express_App_Medium_Tutorial" rel="noopener"><strong>this repository</strong></a> that I’ve created for the tutorial.</p>
<p>Next, I will work on some complementary tutorials, like how to connect this to a MongoDB database and even, how to run it all inside Docker containers.</p>
<p>As a good friend of mine says:</p>
<blockquote>Be Strong and Code On!!!</blockquote>
<p>…and don't forget to be awesome today ;)</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
