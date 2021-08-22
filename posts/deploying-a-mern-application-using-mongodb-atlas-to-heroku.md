---
card: "/images/default.jpg"
tags: [JavaScript]
description: In this article, we'll be building and deploying an applicati
author: "Milad E. Fahmy"
title: "How to Deploy a MERN Application to Heroku Using MongoDB Atlas"
created: "2021-08-15T19:30:23+02:00"
modified: "2021-08-15T19:30:23+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-prototype tag-mongodb tag-express tag-react tag-nodejs ">
<header class="post-full-header">
<h1 class="post-full-title">How to Deploy a MERN Application to Heroku Using MongoDB Atlas</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/03/1_qgxaya.png 300w,
/news/content/images/size/w600/2020/03/1_qgxaya.png 600w,
/news/content/images/size/w1000/2020/03/1_qgxaya.png 1000w,
/news/content/images/size/w2000/2020/03/1_qgxaya.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/03/1_qgxaya.png" alt="How to Deploy a MERN Application to Heroku Using MongoDB Atlas">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h2 id="introduction-to-mern">Introduction to MERN</h2>
<p>In this article, we'll be building and deploying an application built with the MERN stack to Heroku.</p>
<p>MERN, which stands for MongoDB, Express, React, and Node.js, is a popular tech stack used in building web applications. It involves frontend work (with React), backend work (with Express and NodeJS) and a database (with MongoDB).</p>
<p><a href="https://www.heroku.com/">Heroku</a>, on the other hand, is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.</p>
<p>For the database, we'll be using MongoDB Atlas, which is a global cloud database service for modern applications. This is more secure than the MongoDB installed locally on our server and it also gives us room for more resources on our servers.</p>
<p>For the frontend we'll build a simple React app which makes POST requests to an API to add a user, and can also make GET requests to get all users.</p>
<p><em>You can skip to any step with the table of contents listed below.</em></p>
<h2 id="table-of-contents">Table of contents</h2>
<ul>
<li><a href="#introduction-to-mern">Introduction to MERN</a></li>
<li><a href="#let-s-start-building">Let's Start Building</a></li>
<li><a href="#building-the-react-app">Building the React App</a></li>
<li><a href="#creating-the-backend">Creating the Backend</a></li>
<li><a href="#connect-the-mongodb-atlas-database">Connect the MongoDB Atlas Database</a></li>
<li><a href="#calling-apis-on-the-frontend">Calling APIs on the Frontend</a></li>
<li><a href="#deploying-to-heroku">Deploying to Heroku</a></li>
<li><a href="#create-a-heroku-app">Create a Heroku app</a></li>
<li><a href="#configure-package-json">Configure package.json</a></li>
<li><a href="#wrap-up">Wrap up</a></li>
</ul>
<h2 id="let-s-start-building">Let's Start Building</h2>
<h3 id="building-the-react-app">Building the React App</h3>
<p><strong>Note:</strong> Before we begin with our project, <code>node</code> must be installed on your computer. <code>node</code> also provides us with <code>npm</code>, which is used for installing packages.</p>
<h4 id="install-create-react-app">Install <code>create-react-app</code></h4>
<p><code>create-react-app</code> is used to create a starter React app.</p>
<p>If you do not have <code>create-react-app</code> installed, type the following in the command line:</p><pre><code class="language-shell">npm i create-react-app -g
</code></pre>
<p>The <code>-g</code> flag installs the package globally.</p>
<h4 id="create-the-project-directory">Create the project directory</h4><pre><code class="language-shell">create-react-app my-project
cd my-project
</code></pre>
<p>The above creates a directory 'my-project', and installs dependencies which will be used in the React starter app. After it's finished installing, the second command changes to the project directory.</p>
<h4 id="start-the-app-and-make-necessary-edits">Start the app and make necessary edits</h4><pre><code class="language-shell">npm start
</code></pre>
<p>The command above starts the React application, which gives you a URL where you preview the project. You can then make necessary edits like changing images or text.</p>
<h4 id="install-axios">Install axios</h4><pre><code class="language-shell">npm i axios --save
</code></pre>
<p><code>axios</code> is a JavaScript library used to make HTTP requests easier. It'll be used to send requests from the frontend (React) to the APIs provided by the backend.</p>
<h3 id="creating-the-backend">Creating the Backend</h3>
<p>The backend manages the APIs, handles requests, and also connects to the database.</p>
<h4 id="install-the-backend-packages">Install the backend packages</h4><pre><code class="language-shell">npm i express cors mongoose body-parser --save
</code></pre>
<ol>
<li><code>express</code>: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web applications" - Express <a href="http://expressjs.com/">Documentation</a></li>
<li><code>cors</code>: "CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options" - <a href="https://www.npmjs.com/package/cors">cors Documentation</a></li>
<li><code>mongoose</code>: "Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks" - <a href="https://www.npmjs.com/package/mongoose">Mongoose Documentation</a></li>
<li><code>body-parser</code>: "Node.js body parsing middleware." - <a href="https://www.npmjs.com/package/mongoose">body-parser Documentation</a></li>
</ol>
<h4 id="create-the-backend-folder">Create the backend folder</h4><pre><code class="language-shell">mkdir backend
cd backend
</code></pre>
<h4 id="configure-the-backend">Configure the backend</h4>
<h5 id="create-an-entry-point-server-js">Create an entry point <code>server.js</code></h5>
<p>First, create a <code>server.js</code> file, which will be the entry point to the backend.</p><pre><code class="language-shell">touch server.js
</code></pre>
<p>In <code>server.js</code>, type the following:</p><pre><code class="language-js">const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const app = express();
require('./database');
-----
app.use(bodyParser.json());
app.use(cors());
-----
// API
const users = require('/api/users');
app.use('/api/users', users);
-----
app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) =&gt; {
res.sendFile(path.join(__dirname, '../build'))
})
-----
const port = process.env.PORT || 5000;
app.listen(port, () =&gt; {
console.log(`Server started on port ${port}`);
});
</code></pre>
<p><code>express.static</code> delivers static files which are the ones built when <code>npm run build</code> is run on a React project. Remember, the built file is in the build folder.</p>
<p>From our configuration, any request sent to <code>/api/users</code> will be sent to <code>users</code> API which we're about to configure.</p>
<h5 id="configure-the-users-api">Configure the <code>users</code> API</h5><pre><code class="language-shell">mkdir api
touch api/users.js
</code></pre>
<p>In <code>api/users.js</code>, add the following:</p><pre><code class="language-js">const express = require('express');
const router = express.Router()
-----
const User = require('../models/User');
-----
router.get('/', (req, res) =&gt; {
User.find()
.then(users =&gt; res.json(users))
.catch(err =&gt; console.log(err))
})
-----
router.post('/', (req, res) =&gt; {
const { name, email } = req.body;
const newUser = new User({
name: name, email: email
})
newUser.save()
.then(() =&gt; res.json({
message: "Created account successfully"
}))
.catch(err =&gt; res.status(400).json({
"error": err,
"message": "Error creating account"
}))
})
module.exports = router
</code></pre>
<p>In the code above, we create a GET and POST request handler which fetches all users and posts users. Fetching and adding a user to the database is aided by the <code>User</code> model we'll create.</p>
<h5 id="create-user-model">Create <code>User</code> model</h5><pre><code class="language-shell">mkdir models
touch models/user.js
</code></pre>
<p>In <code>models/user.js</code>, add the following:</p><pre><code class="language-js">const mongoose = require('mongoose');
const Schema = mongoose.Schema;
-----
const userSchema = new Schema({
name: {
type: String,
required: true
},
email: {
type: String,
required: true
}
})
module.exports = mongoose.model("User", userSchema, "users")
</code></pre>
<p>In the code above, a schema is created for the user which contains the fields of the user. At the end of the file, the model ("User") is exported with the schema and the collection ("users").</p>
<h5 id="connect-the-mongodb-atlas-database">Connect the MongoDB Atlas Database</h5>
<p>According to <a href="https://www.mongodb.com/cloud/atlas">the docs</a>, "MongoDB Atlas is the global cloud database service for modern applications."</p>
<p>First we need to register on Mongo cloud. Go through <a href="https://docs.atlas.mongodb.com/getting-started/">this documentation</a> to create an Atlas account and create your cluster.</p>
<p>One thing worth noting is <strong>whitelisting your connection IP address</strong>. If you ignore this step, you won't have access to the cluster, so pay attention to that step.</p>
<p>The cluster is a small server which will manage our collections (similar to tables in SQL databases). To connect your backend to the cluster, create a file <code>database.js</code>, which as you can see is required in <code>server.js</code>. Then enter the following:</p><pre><code class="language-js">const mongoose = require('mongoose');
const connection = "mongodb+srv://username:&lt;password&gt;@&lt;cluster&gt;/&lt;database&gt;?retryWrites=true&amp;w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
.then(() =&gt; console.log("Database Connected Successfully"))
.catch(err =&gt; console.log(err));
</code></pre>
<p>In the <code>connection</code> variable, enter your <code>username</code> (for MongoDB cloud), your <code>password</code> (cluster password), your <code>cluster</code> (address for your cluster) and the <code>database</code> (name of your database). All these can be easily discovered if you followed the documentation.</p>
<h2 id="calling-apis-on-the-frontend">Calling APIs on the Frontend</h2>
<p>All APIs will be available on <code>localhost:5000</code> locally, just as we set up in <code>server.js</code>. When deployed to Heroku, the server will use the port provided by the server (<code>process.env.PORT</code>).</p>
<p>To make things easier, React allows us to specify a proxy which requests will be sent to.</p>
<p>Open <code>package.json</code> and just before the last curly brace, add the following:</p><pre><code class="language-json">"proxy": "http://localhost:5000"
</code></pre>
<p>This way we can directly send requests to <code>api/users</code>. And when our site is deployed and built, the default port of our application will be used with the same API.</p>
<p>Open <code>App.js</code> for React and add the following:</p><pre><code class="language-js">import React, {useState, useEffect} from 'react'
import axios from 'axios';
-----
const App = function () {
const [users, setUsers] = useState(null);
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
useEffect(() =&gt; {
axios
.get("/api/users")
.then((users) =&gt; setUsers(users))
.catch((err) =&gt; console.log(err));
}, []);
function submitForm() {
if (username === "") {
alert("Please fill the username field");
return;
}
if (email === "") {
alert("Please fill the email field");
return;
}
axios
.post("/api/users", {
username: username,
email: email,
})
.then(function () {
alert("Account created successfully");
window.location.reload();
})
.catch(function () {
alert("Could not creat account. Please try again");
});
}
return (
&lt;&gt;
&lt;h1&gt;My Project&lt;/h1&gt;
{users === null ? (
&lt;p&gt;Loading...&lt;/p&gt;
) : users.length === 0 ? (
&lt;p&gt;No user available&lt;/p&gt;
) : (
&lt;&gt;
&lt;h2&gt;Available Users&lt;/h2&gt;
&lt;ol&gt;
{users.map((user, index) =&gt; (
&lt;li key={index}&gt;
Name: {user.name} - Email: {user.email}
&lt;/li&gt;
))}
&lt;/ol&gt;
&lt;/&gt;
)}
&lt;form onSubmit={submitForm}&gt;
&lt;input
onChange={(e) =&gt; setUsername(e.target.value)}
type="text"
placeholder="Enter your username"
/&gt;
&lt;input
onChange={(e) =&gt; setEmail(e.target.value)}
type="text"
placeholder="Enter your email address"
/&gt;
&lt;input type="submit" /&gt;
&lt;/form&gt;
&lt;/&gt;
);
};
export default App
</code></pre>
<p>The <code>useState</code> and <code>useEffect</code> hooks are used to handle state and <code>sideEffects</code>. What is basically happening is that the first state of users is <code>null</code> and 'Loading...' is showed in the browser. </p>
<p>In <code>useEffect</code>, <code>[]</code> is used to specify that at the <code>componentDidMount</code> stage (when the component is mounted), make an Axios request to the API which is running on <code>localhost:5000</code>. If it gets the result and there is no user, 'No user available' is displayed. Otherwise a numbered list of the users is displayed.</p>
<p>If you want to learn more about <code>useState</code> and <code>useEffect</code>, check out this article - <a href="https://blog.soshace.com/what-the-heck-is-react-hooks/">What the heck is React Hooks?</a></p>
<p>With the form available, a POST request can be made to post a new user. The state of the inputs are controlled and sent to the API at <code>localhost:5000</code> on submission. Afterwards, the page is refreshed and the new user is displayed.</p>
<h2 id="deploying-to-heroku">Deploying to Heroku</h2>
<p>To deploy your application to Heroku, you must have a Heroku account. </p>
<p>Go to <a href="https://www.heroku.com/">their page</a> to create an account. Then go through <a>their documention</a> on how to create a Heroku app. Also check out <a href="https://devcenter.heroku.com/articles/heroku-cli">the documentation</a> on Heroku CLI.</p>
<h3 id="create-a-heroku-app">Create a Heroku App</h3>
<p>First, login to Heroku:</p><pre><code class="language-shell">heroku login
</code></pre>
<p>This will redirect you to a URL in the browser where you can log in. Once you're finished you can continue in the terminal.</p>
<p>In the same React project directory, run the following:</p><pre><code class="language-shell">heroku create
</code></pre>
<p>This will create a Heroku application and also give you the URL to access the application.</p>
<h3 id="configure-package-json">Configure package.json</h3>
<p>Heroku uses your package.json file to know which scripts to run and which dependencies to install for your project to run successfully.</p>
<p>In your <code>package.json</code> file, add the following:</p><pre><code class="language-json">{
...
"scripts": {
...
"start": "node backend/server.js",
"heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install npm &amp;&amp; run build"
},
...
"engines": {
"node": "10.16.0"
}
}
</code></pre>
<p>Heroku runs a post build, which as you can see installs your dependencies and runs a build of your React project. Then it starts your project with the <code>start</code> script which basically starts your server. After that, your project should work fine.</p>
<p><code>engines</code> specifies the versions of engines like <code>node</code> and <code>npm</code> to install.</p>
<h4 id="push-to-heroku">Push to Heroku</h4><pre><code class="language-shell">git push heroku master
</code></pre>
<p>This pushes your code to Heroku. Remember to include unnecessary files in <code>.gitignore</code>.</p>
<p>After few seconds your site will be ready. If there are any errors, you can check your terminal or go to your dashboard in the browser to view the build logs.</p>
<p>Now you can preview your site at the URL Heroku sent when you ran <code>heroku create</code>.</p>
<p>That's all there is to it. Glad you read this far.</p>
<h2 id="wrap-up">Wrap Up</h2>
<p>Of course there is more to MERN stack applications.</p>
<p>This article did not go as deep as authentications, login, sessions, and all that. It just covered how to deploy MERN stack applications to Heroku and work with MongoDB Atlas.</p>
<p>You can find other articles like this on my blog - <a href="https://dillionmegida.com">dillionmegida.com</a></p>
<p>Thanks for reading.</p>
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
