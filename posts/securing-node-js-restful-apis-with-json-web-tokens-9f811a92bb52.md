---
card: "https://cdn-media-1.freecodecamp.org/images/1*0ABaK4SrXGUnXgmXqMkZtA.png"
tags: [Nodejs]
description: "Have you ever wondered how authentication works? What’s behin"
author: "Milad E. Fahmy"
title: "Securing Node.js RESTful APIs with JSON Web Tokens"
created: "2021-08-16T10:22:00+02:00"
modified: "2021-08-16T10:22:00+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nodejs tag-web-development tag-javascript tag-startup tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Securing Node.js RESTful APIs with JSON Web Tokens</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*0ABaK4SrXGUnXgmXqMkZtA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*0ABaK4SrXGUnXgmXqMkZtA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*0ABaK4SrXGUnXgmXqMkZtA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*0ABaK4SrXGUnXgmXqMkZtA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*0ABaK4SrXGUnXgmXqMkZtA.png" alt="Securing Node.js RESTful APIs with JSON Web Tokens">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Have you ever wondered how authentication works? What’s behind all the complexity and abstractions. Actually, nothing special. It’s a way of encrypting a value, in turn creating a unique token that users use as an identifier. This token verifies your identity. It can authenticate who you are, and authorize various resources you have access to. If you by any chance don’t know any of these keywords, be patient, I’ll explain everything below.</p><p>This will be a step by step tutorial of how to add token based authentication to an existing REST API. The authentication strategy in question is JWT (JSON Web Token). If that doesn’t tell you much, it’s fine. It was just as strange for me when I first heard the term.</p><p>What does JWT actually mean in a down to earth point of view? Let’s break down what the official definition states:</p><blockquote>JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted.<br>- <a href="https://tools.ietf.org/html/rfc7519" rel="noopener"><strong>Internet Engineering Task Force (IETF)</strong></a></blockquote><p>That was a mouthful. Let’s translate that to English. A JWT is an encoded string of characters which is safe to send between two computers if they both have HTTPS. The token represents a value that is accessible only by the computer that has access to the secret key with which it was encrypted. Simple enough, right?</p><p>What does this look like in real life? Let’s say a user wants to sign in to their account. They send a request with the required credentials such as email and password to the server. The server checks to see if the credentials are valid. If they are, the server creates a token using the desired payload and a secret key. This string of characters that results from the encryption is called a token. Then the server sends it back to the client. The client, in turn, saves the token to use it in every other request the user will send. The practice of adding a token to the request headers is as way of authorizing the user to access resources. This is a practical example of how JWT works.</p><p>Okay, that’s enough talk! The rest of this tutorial will be coding, and I’d love if you would follow along and code alongside me, as we progress. Every snippet of code will be followed by an explanation. I believe the best way of understanding it correctly will be to code it yourself along the way.</p><p>Before I begin, there are some things you need to know about Node.js and some EcmaScript standards I’ll be using. I will not be using ES6, as it is not as beginner friendly as traditional JavaScript. But, I will expect you already know how to build a RESTful API with Node.js. If not, you can take a detour and <a href="https://hackernoon.com/restful-api-design-with-node-js-26ccf66eab09" rel="noopener">check this out</a> before proceeding.</p><p>Also, the <a href="https://github.com/adnanrahic/securing-restful-apis-with-jwt" rel="noopener">whole demo is on GitHub</a> if you wish to see it in its entirety.</p><h3 id="let-s-start-writing-some-code-shall-we">Let’s start writing some code, shall we?</h3><p>Well, not yet actually. We need to set up the environment first. The code will have to wait at least a couple more minutes. This part is boring so to get up and running quick we’ll clone the repository from the tutorial above. Open up a terminal window or command line prompt and run this command:</p><pre><code class="language-bash">git clone https://github.com/adnanrahic/nodejs-restful-api.git</code></pre><p>You’ll see a folder appear, open it up. Let’s take a look at the folder structure.</p><pre><code class="language-bash">&gt; user
- User.js
- UserController.js
- db.js
- server.js
- app.js
mongoose.connect('mongodb://wally:theflashisawesome@ds147072.mlab.com:47072/securing-rest-apis-with-jwt', { useMongoClient: true });</code></pre><p>Go ahead and spin up the server, back in your terminal window type <code>node server.js</code>. You should see <code>Express server listening on port 3000</code> get logged to the terminal.</p><h3 id="finally-some-code-">Finally, some code.</h3><p>Let’s start out by brainstorming about what we want to build. First of all we want to add user authentication. Meaning, implementing a system for registering and logging users in.</p><p>Secondly, we want to add authorization. The act of granting users the permission to access certain resources on our REST API.</p><p>Start out by adding a new file in the root directory of the project. Give it a name of <strong>config.js</strong><em>. </em>Here you’ll put configuration settings for the application. Everything we need at the moment is just to define a secret key for our JSON Web Token.</p><p><strong>Disclaimer</strong>: Have in mind, under no circumstances should you ever, (EVER!) have your secret key publicly visible like this. Always put all of your keys in environment variables! I’m only writing it like this for demo purposes.</p><pre><code class="language-js">// config.js
module.exports = {
'secret': 'supersecret'
};</code></pre><p>With this added you’re ready to start adding the authentication logic. Create a folder named <strong>auth</strong> and start out by adding a file named <strong>AuthController.js</strong>. This controller will be home for our authentication logic.</p><p>Add this piece of code to the top of the <strong>AuthController.js</strong><em>.</em></p><pre><code class="language-js">// AuthController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var User = require('../user/User');</code></pre><p>Now you’re ready to add the modules for using <a href="https://github.com/auth0/node-jsonwebtoken" rel="noopener">JSON Web Tokens</a> and <a href="https://github.com/dcodeIO/bcrypt.js" rel="noopener">encrypting passwords</a>. Paste this code into the <strong>AuthController.js</strong>:</p><pre><code class="language-js">var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');</code></pre><p>Open up a terminal window in your project folder and install the following modules:</p><pre><code class="language-bash">npm install jsonwebtoken --save
npm install bcryptjs --save</code></pre><p>That’s all the modules we need to implement our desired authentication. Now you’re ready to create a <code>/register</code> endpoint. Add this piece of code to your <strong>AuthController.js</strong>:</p><pre><code class="language-js">router.post('/register', function(req, res) {
var hashedPassword = bcrypt.hashSync(req.body.password, 8);
User.create({
name : req.body.name,
email : req.body.email,
password : hashedPassword
},
function (err, user) {
if (err) return res.status(500).send("There was a problem registering the user.")
// create a token
var token = jwt.sign({ id: user._id }, config.secret, {
expiresIn: 86400 // expires in 24 hours
});
res.status(200).send({ auth: true, token: token });
});
});</code></pre><p>Here we’re expecting the user to send us three values, a name, an email and a password. We’re immediately going to take the password and encrypt it with Bcrypt’s hashing method. Then take the hashed password, include name and email and create a new user. After the user has been successfully created, we’re at ease to create a token for that user.</p><p>The <code>jwt.sign()</code> method takes a payload and the secret key defined in <strong>config.js </strong>as parameters. It creates a unique string of characters representing the payload. In our case, the payload is an object containing only the id of the user. Let’s write a piece of code to get the user id based on the token we got back from the register endpoint.</p><pre><code class="language-js">router.get('/me', function(req, res) {
var token = req.headers['x-access-token'];
if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
jwt.verify(token, config.secret, function(err, decoded) {
if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
res.status(200).send(decoded);
});
});</code></pre><p>Here we’re expecting the token be sent along with the request in the headers. The default name for a token in the headers of an HTTP request is <code>x-access-token</code>. If there is no token provided with the request the server sends back an error. To be more precise, an <code>401 unauthorized</code> status with a response message of <em>‘</em><strong>No token provided</strong><em>’</em>. If the token exists, the <code>jwt.verify()</code> method will be called. This method decodes the token making it possible to view the original payload. We’ll handle errors if there are any and if there are not, send back the decoded value as the response.</p><p>Finally we need to add the route to the <strong>AuthController.js</strong> in our main <strong>app.js </strong>file. First export the router from <strong>AuthController.js</strong>:</p><pre><code class="language-js">// add this to the bottom of AuthController.js
module.exports = router;</code></pre><p>Then add a reference to the controller in the main app, right above where you exported the app.</p><pre><code class="language-js">// app.js
var AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);
res.status(200).send(decoded);
// to
User.findById(decoded.id, function (err, user) {
if (err) return res.status(500).send("There was a problem finding the user.");
if (!user) return res.status(404).send("No user found.");
res.status(200).send(user);
{ password: 0 }, // projection
function (err, user) {
if (err) return res.status(500).send("There was a problem finding the user.");
if (!user) return res.status(404).send("No user found.");
res.status(200).send(user);
User.findOne({ email: req.body.email }, function (err, user) {
if (err) return res.status(500).send('Error on the server.');
if (!user) return res.status(404).send('No user found.');
var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
var token = jwt.sign({ id: user._id }, config.secret, {
expiresIn: 86400 // expires in 24 hours
});
res.status(200).send({ auth: true, token: token });
});
router.get('/logout', function(req, res) {
res.status(200).send({ auth: false, token: null });
});</code></pre><p><strong>Disclaimer</strong>: The logout endpoint is not needed. The act of logging out can solely be done through the client side. A token is usually kept in a cookie or the browser’s localstorage. Logging out is as simple as destroying the token on the client. This <code>/logout</code> endpoint is created to logically depict what happens when you log out. The token gets set to <code>null</code>.</p><p>With this we’ve finished the <strong>authentication</strong> part of the tutorial. Want to move on to the authorization? I bet you do.</p><h3 id="do-you-have-permission-to-be-here">Do you have permission to be here?</h3><p>To comprehend the logic behind an authorization strategy we need to wrap our head around something called <strong>middleware</strong>. Its name is self explanatory, to some extent, isn’t it? Middleware is a piece of code, a function in Node.js, that acts as a bridge between some parts of your code.</p><p>When a request reaches an endpoint, the router has an option to pass the request on to the next middleware function in line. Emphasis on the word <strong>next</strong>! Because that’s exactly what the name of the function is! Let’s see an example. Comment out the line where you send back the user as a response. Add a <code>next(user)</code> right underneath.</p><pre><code class="language-js">router.get('/me', function(req, res, next) {
var token = req.headers['x-access-token'];
if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
jwt.verify(token, config.secret, function(err, decoded) {
if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
User.findById(decoded.id,
{ password: 0 }, // projection
function (err, user) {
if (err) return res.status(500).send("There was a problem finding the user.");
if (!user) return res.status(404).send("No user found.");
// res.status(200).send(user); Comment this out!
next(user); // add this line
});
});
});
// add the middleware function
router.use(function (user, req, res, next) {
res.status(200).send(user);
});</code></pre><blockquote><strong><em>Middleware</em></strong> functions are functions that have access to the <a href="https://expressjs.com/en/4x/api.html#req" rel="noopener">request object</a> (<code>req</code>), the <a href="https://expressjs.com/en/4x/api.html#res" rel="noopener">response object</a> (<code>res</code>), and the <code>next</code> function in the application’s request-response cycle. The <code>next</code> function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.<br>- <a href="https://expressjs.com/en/guide/using-middleware.html" rel="noopener">Using middleware</a>, expressjs.com</blockquote><p>Jump back to postman and check out what happens when you hit the <code>/api/auth/me</code> endpoint. Does it surprise you that the outcome is exactly the same? It should be!</p><p><strong>Disclaimer</strong>: Go ahead and delete this sample before we continue as it is only used for demonstrating the logic of using <code>next()</code>.</p><p>Let’s take this same logic and apply it to create a middleware function to check the validity of tokens. Create a new file in the <strong>auth </strong>folder and name it <strong>VerifyToken.js</strong>. Paste this snippet of code in there.</p><pre><code class="language-js">var jwt = require('jsonwebtoken');
var config = require('../config');
function verifyToken(req, res, next) {
var token = req.headers['x-access-token'];
if (!token)
return res.status(403).send({ auth: false, message: 'No token provided.' });
jwt.verify(token, config.secret, function(err, decoded) {
if (err)
return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
// if everything good, save to request for use in other routes
req.userId = decoded.id;
next();
});
}
module.exports = verifyToken;</code></pre><p>Let’s break it down. We’re going to use this function as a custom middleware to check if a token exists and whether it is valid. After validating it, we add the <code>decoded.id</code> value to the request (<code>req</code>) variable. We now have access to it in the next function in line in the request-response cycle. Calling <code>next()</code> will make sure flow will continue to the next function waiting in line. In the end, we export the function.</p><p>Now, open up the <strong>AuthController.js </strong>once again. Add a reference to <strong>VerifyToken.js</strong> at the top of the file and edit the <code>/me</code> endpoint. It should now look like this:</p><pre><code class="language-js">// AuthController.js
var VerifyToken = require('./VerifyToken');
// ...
router.get('/me', VerifyToken, function(req, res, next) {
User.findById(req.userId, { password: 0 }, function (err, user) {
if (err) return res.status(500).send("There was a problem finding the user.");
if (!user) return res.status(404).send("No user found.");
res.status(200).send(user);
});
});
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
