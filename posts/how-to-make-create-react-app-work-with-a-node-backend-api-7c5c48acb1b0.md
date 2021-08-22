---
card: "https://cdn-media-1.freecodecamp.org/images/1*eo3-wlU7ny1XYqPk4i2Blw.jpeg"
tags: [JavaScript]
description: This is a very common question among newer React developers,
author: "Milad E. Fahmy"
title: "How To Make create-react-app work with a Node Back-end API"
created: "2021-08-15T19:49:25+02:00"
modified: "2021-08-15T19:49:25+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-expressjs tag-react tag-create-react-app ">
<header class="post-full-header">
<h1 class="post-full-title">How To Make create-react-app work with a Node Back-end API</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*eo3-wlU7ny1XYqPk4i2Blw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*eo3-wlU7ny1XYqPk4i2Blw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*eo3-wlU7ny1XYqPk4i2Blw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*eo3-wlU7ny1XYqPk4i2Blw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*eo3-wlU7ny1XYqPk4i2Blw.jpeg" alt="How To Make create-react-app work with a Node Back-end API">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>This is a very common question among newer React developers, and one question I had when I was starting out with React and Node.js. In this short example I will show you how to make <code>create-react-app</code> work with Node.js and Express Back-end.</p>
<h4 id="create-react-app">create-react-app</h4>
<p>Create a project using <code>create-react-app</code>.</p><pre><code class="language-bash">npx create-react-app example-create-react-app-express</code></pre>
<p>Create a <code>/client</code> directory under <code>example-create-react-app-express</code> directory and move all the React boilerplate code created by <code>create-react-app</code> to this new client directory.</p><pre><code class="language-bash">cd example-create-react-app-expressmkdir client</code></pre>
<h4 id="the-node-express-server">The Node Express Server</h4>
<p>Create a <code>package.json</code> file inside the root directory (<code>example-create-react-app-express</code>) and copy the following contents:</p><pre><code class="language-json">{
"name": "example-create-react-app-express",
"version": "1.0.0",
"scripts": {
"client": "cd client &amp;&amp; yarn start",
"server": "nodemon server.js",
"dev": "concurrently --kill-others-on-fail \"yarn server\" \"yarn client\""
},
"dependencies": {
"body-parser": "^1.18.3",
"express": "^4.16.4"
},
"devDependencies": {
"concurrently": "^4.0.1"
}
}</code></pre>
<p>Notice I am using <code>concurrently </code>to run the React app and Server at the same time. The <code>–kill-others-on-fail</code> flag will kill other processes if one exits with a non zero status code.</p>
<p>Install <code>nodemon </code>globally and the server dependencies:</p><pre><code class="language-bash">npm i nodemon -g
yarn</code></pre>
<p>Create a <code>server.js</code> file and copy the following contents:</p><pre><code class="language-js">const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/api/hello', (req, res) =&gt; {
res.send({ express: 'Hello From Express' });
});
app.post('/api/world', (req, res) =&gt; {
console.log(req.body);
res.send(
`I received your POST request. This is what you sent me: ${req.body.post}`,
);
});
app.listen(port, () =&gt; console.log(`Listening on port ${port}`));</code></pre>
<p>This is a simple Express server that will run on port 5000 and have two API routes: <code>GET</code> - <code>/api/hello</code>, and <code>POST</code> -<code>/api/world</code>.</p>
<p>At this point you can run the Express server with the following command (still inside the root directory):</p><pre><code class="language-bash">node server.js</code></pre>
<p>Now navigate to <code><a href="http://localhost:5000/api/hello" rel="noopener">http://localhost:5000/api/hello</a></code>, and you will get the following:</p>
<p>We will test the <code>POST</code> route once we build the React app.</p>
<h4 id="the-react-app">The React App</h4>
<p>Now switch over to the <code>client</code> directory where our React app lives.</p>
<p>Add the following line to the <code>package.json</code> file created by <code>create-react-app</code>.</p><pre><code class="language-json">"proxy": "http://localhost:5000/"</code></pre>
<p>The key to using an Express back-end server with a project created with <code>create-react-app</code> is to use a proxy. This tells the Web-pack development server to proxy our API requests to our API server, given that our Express server is running on <code>localhost:5000</code>.</p>
<p>Now modify <code>./client/src/App.js</code> to call our Express API Back-end, changes are in bold.</p><pre><code class="language-js">import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
state = {
response: '',
post: '',
responseToPost: '',
};
componentDidMount() {
this.callApi()
.then(res =&gt; this.setState({ response: res.express }))
.catch(err =&gt; console.log(err));
}
callApi = async () =&gt; {
const response = await fetch('/api/hello');
const body = await response.json();
if (response.status !== 200) throw Error(body.message);
return body;
};
handleSubmit = async e =&gt; {
e.preventDefault();
const response = await fetch('/api/world', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({ post: this.state.post }),
});
const body = await response.text();
this.setState({ responseToPost: body });
};
render() {
return (
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
&lt;img src={logo} className="App-logo" alt="logo" /&gt;
&lt;p&gt;
Edit &lt;code&gt;src/App.js&lt;/code&gt; and save to reload.
&lt;/p&gt;
&lt;a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
&gt;
Learn React
&lt;/a&gt;
&lt;/header&gt;
&lt;p&gt;{this.state.response}&lt;/p&gt;
&lt;form onSubmit={this.handleSubmit}&gt;
&lt;p&gt;
&lt;strong&gt;Post to Server:&lt;/strong&gt;
&lt;/p&gt;
&lt;input
type="text"
value={this.state.post}
onChange={e =&gt; this.setState({ post: e.target.value })}
/&gt;
&lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
&lt;p&gt;{this.state.responseToPost}&lt;/p&gt;
&lt;/div&gt;
);
}
}
export default App;</code></pre>
<p>We create <code>callApi</code> method to interact with our <code>GET</code> Express API route, then we call this method in <code>componentDidMount</code> and finally set the state to the API response, which will be <em>Hello From Express</em>.</p>
<p>Notice we didn’t use a fully qualified URL <code><a href="http://localhost:5000/api/hello" rel="noopener">http://localhost:5000/api/hello</a></code> to call our API, even though our React app runs on a different port (3000). This is because of the <code><strong>proxy</strong></code><strong> </strong>line we added to the <code>package.json</code> file earlier.</p>
<p>We have a form with a single input. When submitted calls <code>handleSubmit</code>, which in turn calls our <code>POST</code> Express API route then saves the response to state and displays a message to the user: <em>I received your POST request. This is what you sent me: [message from input]</em>.</p>
<p>Now open <code>./client/src/App.css</code> and modify <code>.App-header</code> class as follows (changes in bold)</p><pre><code class="language-js">.App-header {
...
min-height: 50%;
...
padding-bottom: 10px;
}</code></pre>
<h3 id="running-the-app">Running the App</h3>
<p><em>If you still have the server running, go ahead and stop it by pressing Ctrl+C in your terminal.</em></p>
<p>From the project root directory run the following:</p><pre><code class="language-bash">yarn dev</code></pre>
<p>This will launch the React app and run the server at the same time.</p>
<p>Now navigate to <code><a href="http://localhost:3000" rel="noopener">http://localhost:3000</a></code> and you will hit the React app displaying the message coming from our <code>GET</code> Express route. Nice ?!</p>
<figcaption>Displaying GET route</figcaption>
</figure>
<p>Now, type something in the input field and submit the form, you will see the response from the <code>POST</code> Express route displayed right below the input field.</p>
<figcaption>Calling POST route</figcaption>
</figure>
<p>Finally take a look at at your terminal, you will see the message we sent from the client, that is because we call <code>console.log</code> on the request body in the <code>POST</code> Express route.</p>
<figcaption>Node</figcaption>
</figure>
<h3 id="production-deployment-to-heroku">Production Deployment to Heroku</h3>
<p>Open <code>server.js</code> and replace with the following contents:</p><pre><code class="language-js">const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// API calls
app.get('/api/hello', (req, res) =&gt; {
res.send({ express: 'Hello From Express' });
});
app.post('/api/world', (req, res) =&gt; {
console.log(req.body);
res.send(
`I received your POST request. This is what you sent me: ${req.body.post}`,
);
});
if (process.env.NODE_ENV === 'production') {
// Serve any static files
app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
app.get('*', function(req, res) {
res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
}
app.listen(port, () =&gt; console.log(`Listening on port ${port}`));</code></pre>
<p>Open <code>./package.json</code> and add the following to the <code>scripts</code> entry</p><pre><code class="language-json">"start": "node server.js",
"heroku-postbuild": "cd client &amp;&amp; npm install &amp;&amp; npm install --only=dev --no-shrinkwrap &amp;&amp; npm run build"</code></pre>
<p>Heroku will run the <code>start</code> script by default and this will serve our app. Then we want to instruct Heroku to build our client app, we do so with <code>heroku-postbuild</code> script.</p>
<p>Now, head over to <a href="https://www.heroku.com/" rel="noopener">Heroku</a> and log in (or open an account if you don’t have one).</p>
<p>Create a new app and give it a name</p>
<figcaption>Create new app on Heroku</figcaption>
</figure>
<p>Click on the <strong><em>Deploy</em></strong> tab and follow the deploy instructions (which I think they are pretty self-explanatory, no point on replicating them here ?)</p>
<figcaption>Deploy an app to Heroku</figcaption>
</figure>
<p>And that is it, you can open your app by clicking on the <strong><em>Open app</em></strong> button at the top right corner within the Heroku dashboard for your app.</p>
<p>Visit the deployed app for this tutorial: <a href="https://cra-express.herokuapp.com/" rel="noopener">https://cra-express.herokuapp.com/</a></p>
<h4 id="other-deployment-options">Other Deployment Options</h4>
<p>I write about other deployments options here:</p>
<ul>
<li><a href="https://blog.bitsrc.io/react-production-deployment-part-1-netlify-703686631dd1" rel="noopener">Netlify</a></li>
<li><a href="https://blog.bitsrc.io/react-production-deployment-part-2-now-c81657c700b7" rel="noopener">Now</a></li>
<li><a href="https://blog.bitsrc.io/react-production-deployment-part-3-heroku-316319744885" rel="noopener">Heoku</a> (more in-depth explanation)</li>
</ul>
<h3 id="project-structure">Project Structure</h3>
<p>This will be the final project structure.</p>
<p>Get the full code on the <a href="https://github.com/esausilva/example-create-react-app-express" rel="noopener">GitHub repository</a>.</p>
<p>Thank you for reading and I hope you enjoyed it. Any question, suggestions let me know in the comments below!</p>
<p>You can follow me on <a href="https://twitter.com/_esausilva" rel="noopener">Twitter</a>, <a href="https://github.com/esausilva" rel="noopener">GitHub</a>, <a href="https://medium.com/@_esausilva/latest" rel="noopener">Medium</a>, <a href="https://www.linkedin.com/in/esausilva/" rel="noopener">LinkedIn</a> or all of them.</p>
<p>This post was originally posted on my personal <a href="https://esausilva.com/2017/11/14/how-to-use-create-react-app-with-a-node-express-backend-api/" rel="noopener">blog website</a>.</p>
<hr>
<p><strong><u>Update 8/25/19:</u></strong> I have been building a prayer web app called "<strong>My Quiet Time - A Prayer Journal</strong>". If you would like to stay in the loop please sign up through the following link: <a href="http://b.link/mqt" rel="noopener noreferrer">http://b.link/mqt</a> &nbsp;</p>
<p>The app will be released before the end of the year, I have big plans for this app. To see some mockup screenshots follow the following link: <a href="http://pc.cd/Lpy7">http://pc.cd/Lpy7</a></p>
<p>My DMs on <a href="https://twitter.com/_esausilva" rel="noopener">Twitter</a> are open if you have any questions regarding the app ?</p>
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
