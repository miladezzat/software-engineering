---
card: "/images/default.jpg"
tags: [React]
description: A React frontend connected to a Node backend is a rock-solid
author: "Milad E. Fahmy"
title: "How to Create a React App with a Node Backend: The Complete Guide"
created: "2021-08-15T19:27:20+02:00"
modified: "2021-08-15T19:27:20+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-node-js tag-javascript tag-full-stack ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create a React App with a Node Backend: The Complete Guide</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/02/how-to-build-a-react-app-with-a-node-backend-alt.png 300w,
/news/content/images/size/w600/2021/02/how-to-build-a-react-app-with-a-node-backend-alt.png 600w,
/news/content/images/size/w1000/2021/02/how-to-build-a-react-app-with-a-node-backend-alt.png 1000w,
/news/content/images/size/w2000/2021/02/how-to-build-a-react-app-with-a-node-backend-alt.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/02/how-to-build-a-react-app-with-a-node-backend-alt.png" alt="How to Create a React App with a Node Backend: The Complete Guide">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>A React frontend connected to a Node backend is a rock-solid combination for any application you want to build. </p>
<p>This guide is designed to help you create full-stack projects with React as easily as possible.</p>
<p>Let's see how to set up an entire project using React and Node from scratch and deploy it to the web.</p>
<blockquote>Want to build and deploy React and Node apps of your own? <a href="http://bit.ly/12-react-projects">Check out my course series</a> that shows you how to build your own full-stack React projects, like this one.</blockquote>
<h2 id="tools-you-will-need">Tools You Will Need</h2>
<ol>
<li>Make sure Node and NPM are installed on your computer. You can download both at <a href="https://nodejs.org">nodejs.org</a> (NPM is included in your Node installation)</li>
<li>Use a code editor of your choice. I am using and would personally recommend using VSCode. You can download VSCode at <a href="https://code.visualstudio.com">code.visualstudio.com</a>.</li>
<li>Make sure you have Git installed on your computer. This is necessary for deploying our application with Heroku. You can get it at <a href="https://git-scm.com">git-scm.com</a></li>
<li>An account at <a href="https://heroku.com">heroku.com</a>. We will use Heroku to publish our app to the web entirely for free.</li>
</ol>
<h2 id="step-1-create-your-node-express-backend">Step 1: Create your Node (Express) backend</h2>
<p>First create a folder for your project, called <code>react-node-app</code> (for example). </p>
<p>Then, drag that folder into your code editor.</p>
<p>To create our Node project, run the following command in your terminal:</p><pre><code class="language-bash">npm init -y</code></pre>
<p>This will create a package.json file which will allow us to keep track of all our app scripts and manage any dependencies our Node app needs.</p>
<p>Our server code will live in a folder of the same name: <code>server</code>. Let's create that folder.</p>
<p>In it, we'll place a single file, out of which we'll run our server: <code>index.js</code>.</p>
<p>We'll use Express to create a simple web server for us which runs on port 3001 if no value is given for the environment variable <code>PORT</code> (Heroku will set this value when we deploy our app).</p><pre><code class="language-js">// server/index.js
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
app.listen(PORT, () =&gt; {
console.log(`Server listening on ${PORT}`);
});</code></pre>
<p>Then in our terminal, we will install Express as a dependency to use it:</p><pre><code class="language-bash">npm i express</code></pre>
<p>After that, we will create a script in package.json that will start our web server when we run it with <code>npm start</code>:</p><pre><code class="language-json">// server/package.json
...
"scripts": {
"start": "node server/index.js"
},
...</code></pre>
<p>Finally, we can run our app using this script by running npm start in our terminal and we should see that it is running on port 3001:</p><pre><code class="language-bash">npm start
&gt; node server/index.js
Server listening on 3001</code></pre>
<p><img src="https://reedbarger.nyc3.digitaloceanspaces.com/how-to-create-a-react-app-with-a-node-backend/clip-1.gif" alt="Clip 1"></p>
<h2 id="step-2-create-an-api-endpoint">Step 2: Create an API Endpoint</h2>
<p>We want to use our Node and Express server as an API, so that it can give our React app data, change that data, or do some other operation only a server can do.</p>
<p>In our case, we will simply send our React app a message that says "Hello from server!" in a JSON object.</p>
<p>The code below creates an endpoint for the route <code>/api</code>.</p>
<p>If our React app makes a GET request to that route, we respond (using <code>res</code>, which stands for response) with our JSON data:</p><pre><code class="language-js">// server/index.js
...
app.get("/api", (req, res) =&gt; {
res.json({ message: "Hello from server!" });
});
app.listen(PORT, () =&gt; {
console.log(`Server listening on ${PORT}`);
});</code></pre>
<p><em>Note: Make sure to place this above the <code>app.listen</code> function.</em></p>
<p>Since we've made changes to our Node code, we need to restart our server.</p>
<p>To do that, end your start script in the terminal by pressing Command/Ctrl + C. Then restart it by running <code>npm start</code> again.</p>
<p>And to test this, we can simply visit <code>http://localhost:3001/api</code> in our browser and see our message:</p>
<p><img src="https://reedbarger.nyc3.digitaloceanspaces.com/how-to-create-a-react-app-with-a-node-backend/clip-2.gif" alt="Clip 2"></p>
<h2 id="step-3-create-your-react-frontend">Step 3: Create your React frontend</h2>
<p>After creating our backend, let's move to the frontend. </p>
<p>Open another terminal tab and use create-react-app to create a new React project with the name <code>client</code>:</p><pre><code class="language-bash">npx create-react-app client</code></pre>
<p>After that, we will have a React app with all of its dependencies installed.</p>
<p>The only change we have to make is to add a property called <code>proxy</code> to our package.json file. </p>
<p>This will allow us to make requests to our Node server without having to provide the origin it is running on (http://localhost:3001) every time we make a network request to it:</p><pre><code class="language-bash">// client/package.json
...
"proxy": "http://localhost:3001",
...</code></pre>
<p>Then we can start up our React app by running its start script, which is the same as our Node server. First make sure to <code>cd</code> into the newly-created client folder.</p>
<p>After that, will start up on <code>localhost:3000</code>:</p><pre><code class="language-bash">cd client
npm start
Compiled successfully!
You can now view client in the browser.
Local:            http://localhost:3000</code></pre>
<p><img src="https://reedbarger.nyc3.digitaloceanspaces.com/how-to-create-a-react-app-with-a-node-backend/clip-3.gif" alt="Clip 3"></p>
<h2 id="step-4-make-http-requests-from-react-to-node">Step 4: Make HTTP Requests from React to Node</h2>
<p>Now that we have a working React app, we want to use it to interact with our API.</p>
<p>Let's see how to fetch data from the <code>/api</code> endpoint that we created earlier.</p>
<p>To do so, we can head to the <code>App.js</code> component in our <code>src</code> folder and make an HTTP request using useEffect.</p>
<p>We will make a simple GET request using the Fetch API to our backend and then have our data returned as JSON.</p>
<p>Once we have the data returned to us, we will get the message property (to grab our greeting that we sent from the server) and then put it in a state variable called <code>data</code>.</p>
<p>This will allow us to display that message in our page if we have it. We are using a conditional in our JSX to say that if our data is not there yet, show the text "Loading...".</p><pre><code class="language-js">// client/src/App.js
import React from "react";
import logo from "./logo.svg";
import "./App.css";
function App() {
const [data, setData] = React.useState(null);
React.useEffect(() =&gt; {
fetch("/api")
.then((res) =&gt; res.json())
.then((data) =&gt; setData(data.message));
}, []);
return (
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
&lt;img src={logo} className="App-logo" alt="logo" /&gt;
&lt;p&gt;{!data ? "Loading..." : data}&lt;/p&gt;
&lt;/header&gt;
&lt;/div&gt;
);
}
export default App;</code></pre>
<p><img src="https://reedbarger.nyc3.digitaloceanspaces.com/how-to-create-a-react-app-with-a-node-backend/clip-4.gif" alt="Clip 5"></p>
<h2 id="step-5-deploy-your-app-to-the-web-with-heroku">Step 5: Deploy your app to the web with Heroku</h2>
<p>Finally, let's deploy our application to the web. </p>
<p>First, within our client folder, make sure to remove the Git repo that is automatically initialized by create-react-app. </p>
<p>This is essential to deploy our app, because we are going to set up a Git repo in the root folder of our project (<code>react-node-app</code>), not in <code>client</code>:</p><pre><code class="language-bash">cd client
rm -rf .git</code></pre>
<p>When we deploy, both our Node backend and React frontend are going to be served on the same domain (i.e. mycoolapp.herokuapp.com).</p>
<p>We see how our requests are being handled by our Node API, so we need to write some code that will display our React app when it is requested by our user (for example, when we go to the home page of our app).</p>
<p>We can do this back in <code>server/index.js</code> by adding the following code:</p><pre><code class="language-js">// server/index.js
const path = require('path');
const express = require('express');
...
// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
// Handle GET requests to /api route
app.get("/api", (req, res) =&gt; {
res.json({ message: "Hello from server!" });
});
// All other GET requests not handled before will return our React app
app.get('*', (req, res) =&gt; {
res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});</code></pre>
<p>This code will first allow Node to access our built React project using the <code>express.static</code> function for static files.</p>
<p>And if a GET request comes in that is not handled by our <code>/api</code> route, our server will respond with our React app.</p>
<p><strong>This code allows our React and Node app to be deployed together on the same domain.</strong></p>
<p>Then we can tell our Node App how to do that by adding a <code>build</code> script to our server package.json file that builds our React app for production:</p><pre><code class="language-json">// server/package.json
...
"scripts": {
"start": "node server/index.js",
"build": "cd client &amp;&amp; npm install &amp;&amp; npm run build"
},
...</code></pre>
<p>I would also recommend providing a field called "engines", where you want to specific the Node version you are using to build your project. This will be used for deployment.</p>
<p>You can get your Node version by running <code>node -v</code> and you can put the result in "engines" (i.e. 14.15.4):</p><pre><code class="language-json">// server/package.json
"engines": {
"node": "your-node-version"
}</code></pre>
<p>After this, we're ready to deploy using Heroku, so make sure you have an account at <a href="https://heroku.com">Heroku.com</a>.</p>
<p>Once you are signed in and are looking at your dashboard, you'll select New &gt; Create New App and provide a unique app name.</p>
<p>After that, you'll want to install the Heroku CLI on your computer so you can deploy your app whenever you make any changes using Git. We can install the CLI by running:</p><pre><code class="language-bash">sudo npm i -g heroku</code></pre>
<p>Once that's installed, you will log in to Heroku through the CLI using the <code>heroku login</code> command:</p><pre><code class="language-bash">heroku login
Press any key to login to Heroku</code></pre>
<p>Once you have logged in, just need to follow the deployment instructions for our created app in the "Deploy" tab.</p>
<p>The following four commands will initialize a new Git repo for our project, add our files to it, commit them, and add a Git remote for Heroku.</p><pre><code>git init
heroku git:remote -a insert-your-app-name-here
git add .
git commit -am "Deploy app to Heroku"</code></pre>
<p>Then the very last step is to publish our app by pushing the Heroku Git remote we just added using:</p><pre><code class="language-bash">git push heroku master</code></pre>
<p>Congratulations! Our full-stack React and Node app is live! 🎉</p>
<p><img src="https://reedbarger.nyc3.digitaloceanspaces.com/how-to-create-a-react-app-with-a-node-backend/clip-5.gif" alt="Clip 5"></p>
<p>When you want to make changes to your app going forward (and deploy them), you just have to use Git to add your files, commit them and then push to our Heroku remote:</p><pre><code class="language-bash">git add .
git commit -m "my commit message"
git push heroku master</code></pre>
<h2 id="want-to-build-real-world-apps-like-youtube-instagram-and-twitter-with-react-here-s-how-">Want to build real-world apps like YouTube, Instagram, and Twitter with React? Here's how.</h2>
<p>At the end of every month, I will be releasing an exclusive course, showing you exactly how to build a complete app clone with React from start to finish. </p>
<p>Want to be notified when the next course drops? <strong><a href="http://bit.ly/12-react-projects">Join the waitlist here</a>.</strong></p>
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
