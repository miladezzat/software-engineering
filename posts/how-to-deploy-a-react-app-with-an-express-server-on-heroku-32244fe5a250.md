---
card: "https://cdn-media-1.freecodecamp.org/images/1*j8DELPVuI_w8045sxmHQsA.png"
tags: [JavaScript]
description: by Ashish Nandan Singh
author: "Milad E. Fahmy"
title: "How to deploy a React app with an Express server on Heroku"
created: "2021-08-15T19:39:14+02:00"
modified: "2021-08-15T19:39:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-reactjs tag-expressjs tag-heroku tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to deploy a React app with an Express server on Heroku</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*j8DELPVuI_w8045sxmHQsA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*j8DELPVuI_w8045sxmHQsA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*j8DELPVuI_w8045sxmHQsA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*j8DELPVuI_w8045sxmHQsA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*j8DELPVuI_w8045sxmHQsA.png" alt="How to deploy a React app with an Express server on Heroku">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Ashish Nandan Singh</p>
<h1 id="how-to-deploy-a-react-app-with-an-express-server-on-heroku">How to deploy a React app with an Express server on Heroku</h1>
<p>Hello, world! Recently I had to deploy a website to Heroku for one of the pieces of freelance work I was doing. I think this process may be somewhat difficult, and a detailed tutorial or article on how to do this should help. So this one is going to be very simple and hopefully very short.</p>
<p>We will start by creating an Express app, which will act as our server. Once the server is done, we will create a simple create-react-app application, connect the server with the frontend and, finally, deploy the whole thing to a hosting platform such as Heroku.</p>
<p>Before we go any further, I want you to understand that in the world of web development almost everything is up to one’s preference. Some of you may disagree on certain things, you may continue the way you want to do things, and that’s totally fine. Up to the point when we’re breaking the application I consider everything to be fine.</p>
<p>Let’s get started.</p>
<h3 id="create-a-node-express-app">Create a Node/Express app</h3>
<p>Start by creating a folder for the overall project. This folder will contain the client side application — our React app in this case. Navigate to the directory in your terminal and type the commands below.</p><pre><code>$ touch server.js$ npm init</code></pre>
<p>The last command from the above snippet will take you through some of the steps and will initialise your project with a <code>package.json</code> file. If you are totally new to this, you can consider this file to be a ledger where you keep the record of all the dependencies you’ll be using across the build process of your application.</p>
<p>Moving on, now that we have the <code>package.json</code> file ready, we can start by adding our dependency for the project.</p>
<p>Adding Express:</p><pre><code>$ npm i -g express --save</code></pre>
<p>This will add Express as a dependency to your package.json. Now that we have this, all we need is one more dependency and that is for hot reloading of the app whenever we make some change to the code:</p><pre><code>$ npm i -g nodemon --save --dev</code></pre>
<p>This will add nodemon to the app. If you would like to read more about nodemon, you can check <a href="https://nodemon.io/" rel="noopener">this</a> link for more information.</p>
<p>Now that we have these added, we are all set to create our most basic server in Express. Let’s see how that’s done.</p><pre><code>const express = require('express');const app = express();const port = process.env.PORT || 5000;</code></pre><pre><code>//Route setupapp.get('/', (req, res) =&gt; {    res.send('root route');</code></pre><pre><code>})</code></pre><pre><code>//Start serverapp.listen(port, (req, res) =&gt; {</code></pre><pre><code>console.log(`server listening on port: ${port}`)</code></pre><pre><code> });</code></pre>
<p>That’s it. Just navigate to the terminal, make sure you are in the root directory of the project, and type:</p><pre><code>$ nodemon &lt;name-of-the-file&gt; (index.js/server.js)</code></pre>
<p>In our case since we named it <code>server.js</code> it would be <code>nodemon server.js</code><em> . </em>This will start the server on port 5000 of your computer locally. If you go visit the browser and open <a href="https://localhost:5000/" rel="noopener">https://localhost:5000/</a> you will see the text “root route”, which means the server has started. In case you face any issues, feel free to add them in the comments below.</p>
<p>Now that the server is set up and is working, let’s proceed towards getting the React app setup.</p>
<h3 id="react-app">React app</h3><pre><code>$ npm i -g create-react-app$ create-react-app &lt;name-of-the-app&gt;</code></pre>
<p>For the purpose of this tutorial we will name the app “client,” so our command will look like this <code>create-react-app client</code><em>.</em></p>
<p>Once this is done, the setup will take some time and will create a nice little folder inside your main application with the name “client”.</p>
<p>We will not make any major changes in the overall React application for now — that is outside the scope of this tutorial.</p>
<p>Now the challenge is that we need to call and connect with our server running on the localhost. To do that we need to make an API call.</p>
<h4 id="adding-a-proxy">Adding a proxy</h4>
<p>React gives us the ability to do so by adding a proxy value to our <code>package.json</code> file. Navigate to the <code>package.json</code> file in your directory and add the piece of code below.</p><pre><code>"proxy": "http://localhost:5000",</code></pre>
<p>In our case, the server is running at port 5000, hence the 5000 in the proxy value. The value may vary if you are using a different port altogether.</p>
<p>Now we need to call the Express-defined endpoints, or API endpoints, from our React components. What that really means is that now we can simply call “api/users/all” from our client side, which will then proxy our request and it will look like this “https://localhost:5000/api/users/all". This saves us from making a cross origin request, which most of the modern browsers do not allow for security reasons.</p>
<p>Next we will make some changes to the <code>src/app.js</code> file.</p><pre><code>import React, { Component } from 'react';import './App.css';import Navbar from './Components/Layout/Navbar';import { BrowserRouter as Router, Route } from 'react-router-dom';import Footer from './Components/Layout/Footer';import Home from './Components/Layout/Home';import Social from './Components/social/Social';</code></pre><pre><code>class App extends Component {  constructor(props) {    super(props);    this.state = {}    this.connecToServer = this.connecToServer.bind(this);  }</code></pre><pre><code>  connecToServer() {    fetch('/');  }</code></pre><pre><code>  componentDidMount() {    this.connecToServer();  }</code></pre><pre><code>  render() {    return (      &lt;Router&gt;      &lt;div className="container"&gt;         &lt;Navbar /&gt;         &lt;Route exact path="/" component={Home} /&gt;         &lt;Route exact path="/social" component={Social} /&gt;         &lt;Footer /&gt;      &lt;/div&gt;      &lt;/Router&gt;    );  }}</code></pre><pre><code>export default App;</code></pre>
<p>What we did was to create a constructor, and bind the value of this in our function which will make the fetch API call. Then we call the function as soon as the component is mounted. Next we have the render function which has the overall markup for the app. So that was the last change we will do in React or our frontend application.</p>
<p>Your <code>package.json</code> file should look like the code snippet below.</p><pre><code>{  "name": "project-name",  "version": "0.1.0",  "private": true,  "dependencies": {    "react": "^16.6.3",    "react-dom": "^16.6.3",    "react-scripts": "2.1.1",    "react-router-dom": "^4.3.1"  },</code></pre><pre><code>  "scripts": {    "start": "react-scripts start",    "build": "react-scripts build",    "test": "react-scripts test",    "eject": "react-scripts eject"  },</code></pre><pre><code>  "eslintConfig": {    "extends": "react-app"  },</code></pre><pre><code>  "proxy": "http://localhost:5000",</code></pre><pre><code>  "browserslist": [    "&gt;0.2%",    "not dead",    "not ie &lt;= 11",    "not op_mini all"  ]}</code></pre>
<p>Now let’s pause for a minute and think about what we need to do next…. any thoughts?</p>
<p>Some of you are right by thinking we need to make sure our React files are being served by our Express server. Let’s make some modifications to the <code>server.js</code> file to make sure that the React files get served by the Express server.</p>
<h4 id="server-file-change">Server file change</h4><pre><code>const express = require('express');const app = express();const path = require('path');const port = process.env.PORT || 5000;</code></pre><pre><code>//Static file declarationapp.use(express.static(path.join(__dirname, 'client/build')));</code></pre><pre><code>//production modeif(process.env.NODE_ENV === 'production') {  app.use(express.static(path.join(__dirname, 'client/build')));  //  app.get('*', (req, res) =&gt; {    res.sendfile(path.join(__dirname = 'client/build/index.html'));  })}</code></pre><pre><code>//build modeapp.get('*', (req, res) =&gt; {  res.sendFile(path.join(__dirname+'/client/public/index.html'));})</code></pre><pre><code>//start serverapp.listen(port, (req, res) =&gt; {  console.log( `server listening on port: ${port}`);})</code></pre>
<p>In the above code snippet, first you need to use the inbuilt path module in node and declare the static folder you would like to use in this Express server.</p>
<p>Then you check if the process <strong>is production</strong>, which it will be once the app is deployed to Heroku. Under this condition you would like to serve the <code>index.html</code> file from the build folder <strong>and not</strong> the public folder.</p>
<p>If it’s <strong>not the production mode,</strong> and you are testing some feature and your server is running on the localhost, you would like the <code>index.html</code> from the public folder to be served.</p>
<p>Now we need to make sure that first we start our Express server and then go about starting our React server. Now there are a lot of ways to do this, and for the simplicity of this tutorial we will be using a module called <code>concurrently</code><em> </em>to run both the servers with one command.</p>
<p>Make sure you are in the root directory, and then run the command below from your terminal.</p><pre><code>npm i concurrently --save</code></pre>
<p>After doing this, let’s make some changes to the scripts we have in our Express server <code>package.json</code> files.</p><pre><code>"scripts": {    "client-install": "npm install --prefix client",    "start": "node index.js",    "server": "nodemon index.js",    "client": "npm start --prefix client",    "dev": "concurrently \"npm run server\" \"npm run client\"",</code></pre><pre><code>}</code></pre>
<ul>
<li><code>npm run client-install</code> will install all the dependencies for the React application</li>
<li><code>npm start</code> will start the server and not reload after detecting any change</li>
<li><code>npm run server</code> will start the server, listen for any changes in the code, and hot reload the page on browser to reflect the change.</li>
<li><code>npm run client</code> will run the React application without starting the server</li>
<li><code>npm run dev</code> will concurrently run the server and then run the client on your browser</li>
</ul>
<h3 id="heroku-setup">Heroku setup</h3>
<p>Make sure you have an account on Heroku. If you don’t, you can make one using your GitHub credentials very quickly.</p>
<p>Next we will install the Heroku CLI , which will help us deploy the application right from our terminal. <a href="https://devcenter.heroku.com/articles/heroku-cli" rel="noopener">Click here</a> to get install instructions on both macOS and Windows.</p><pre><code>$ heroku login</code></pre>
<p>Enter the login credentials for Herkou and then:</p><pre><code>$ heroku create</code></pre>
<p>This will create an application for you. If you visit the Heroku dashboard now, it will have the application there.</p>
<p>Now we need to make sure we have a build folder in our project before we push the project to the Heroku repository. Add the script below into your <code>package.json</code> file.</p><pre><code>"scripts": {    "client-install": "npm install --prefix client",</code></pre><pre><code>    "start": "node server.js",</code></pre><pre><code>    "server": "nodemon server.js",</code></pre><pre><code>    "client": "npm start --prefix client",</code></pre><pre><code>    "dev": "concurrently \"npm run server\" \"npm run client\"",</code></pre><pre><code>    "heroku-postbuild":      "NPM_CONFIG_PRODUCTION=false npm install --prefix client        &amp;&amp; npm run build --prefix client"  },</code></pre>
<p>After doing this, save the file and push the entire project repository to your Heroku application branch.</p><pre><code>//add remote</code></pre><pre><code>$ heroku git:remote -a application-name</code></pre><pre><code>$ git add .</code></pre><pre><code>$ git commit -am 'prepare to deploy'</code></pre><pre><code>$ git push heroku master</code></pre>
<p>And that should be it.</p>
<p>Once this is all done, you will get a URL for your live hosted project. Share and showcase what you can build using these technologies.</p>
<p>If you have any questions or comments feel free to add your comment or connect directly.</p>
<p>Github: <a href="https://github.com/ashishcodes4" rel="noopener">https://github.com/ashishcodes4</a></p>
<p>Twitter: <a href="https://twitter.com/ashishnandansin" rel="noopener">https://twitter.com/ashishnandansin</a></p>
<p>LinkedIn: <a href="https://www.linkedin.com/in/ashish-nandan-singh-490987130/" rel="noopener">https://www.linkedin.com/in/ashish-nandan-singh-490987130/</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
