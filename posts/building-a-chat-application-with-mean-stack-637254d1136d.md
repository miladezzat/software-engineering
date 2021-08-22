---
card: "https://cdn-media-1.freecodecamp.org/images/1*q9WivDkg8ALSxw1jG1y1Jw.jpeg"
tags: [Nodejs]
description: by Sudheesh Shetty
author: "Milad E. Fahmy"
title: "How to build your own real-time chat app"
created: "2021-08-15T19:54:01+02:00"
modified: "2021-08-15T19:54:01+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nodejs tag-javascript tag-programming tag-tech tag-startup ">
<header class="post-full-header">
<h1 class="post-full-title">How to build your own real-time chat app</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*q9WivDkg8ALSxw1jG1y1Jw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*q9WivDkg8ALSxw1jG1y1Jw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*q9WivDkg8ALSxw1jG1y1Jw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*q9WivDkg8ALSxw1jG1y1Jw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*q9WivDkg8ALSxw1jG1y1Jw.jpeg" alt="How to build your own real-time chat app">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Sudheesh Shetty</p>
<h1 id="how-to-build-your-own-real-time-chat-app">How to build your own real-time chat app</h1>
<p>Messaging apps are surging in popularity. The past few years have brought apps like WhatsApp, Telegram, Signal, and Line.</p>
<p>People seem to prefer chat-based applications because they allow for real-time interaction. They also add a personal touch to the experience.</p>
<p>I recently attended a workshop conducted by the Free Software Movement Karnataka in Bangalore where I mentored a group of college students.</p>
<p>During the interactions, I observed certain things:</p>
<ol>
<li>Despite encouraging students to interact with the mentor, communication was always one-sided.</li>
<li>Students often felt too shy to ask questions during the sessions.</li>
<li>They were more comfortable asking questions and getting feedback in one-on-one conversations.</li>
</ol>
<p>So we had to find a solution to break the ice between mentors and students. A local chat application came handy in this situation. People love to be anonymous, which gives them more power to express themselves and ask anytime anywhere. This is the same mantra used by most of the popular forums on the internet, such as Reddit and 4chan. These are just a few giant examples of semi-anonymous apps.</p>
<p>So I started thinking about this idea. I came up with some of the basic requirements and features.</p>
<ol>
<li>Users register by giving a handle, which is unique to every user (a dummy name). Only the handle will be revealed to other users. So people are free to choose any handle and hence they stay anonymous.</li>
<li>A member can see other members who are online. They have an option to go public, which broadcast the message to all online members in the chat.</li>
<li>For private messages, the sender should first send a request to the other member. Other members upon accepting the request can have private chat with them.</li>
</ol>
<h3 id="technology-tools-used"><strong>Technology, Tools used</strong></h3>
<ol>
<li>MEAN Stack(Mongo, Express, Angular, Node).</li>
<li>Sockets to enable one-on-one communication in real time</li>
<li>AJAX for sign-up and login</li>
</ol>
<h3 id="so-how-do-you-create-a-simple-chat-application"><strong>So how do you create a simple chat application?</strong></h3>
<p>In this tutorial, I’m going to help you create your own chat application. You can later integrate as a widget into any project! This tutorial won’t concentrate on the complete development of a chat application. But it will help you build one.</p>
<p><strong>Pre-requisite : </strong>You need to know some basic knowledge of MEAN Stack, as we are making use of it to build one.</p>
<p>First, create a directory structure something like this.</p>
<figcaption><strong>Directory structure of the project</strong></figcaption>
</figure>
<p>Install <a href="https://nodejs.org/en/download/package-manager/" rel="noopener">Node.js</a> and <a href="https://docs.mongodb.com/manual/administration/install-community/" rel="noopener">MongoDB</a>.</p>
<p>We’ll be making use of AngularJS 1 for this tutorial. Download the AngularJS library from <a href="https://angularjs.org/" rel="noopener">here</a> and copy it to the lib folder in Client directory.</p>
<p>If you like to beautify the application you can download any CSS libraries and copy them to lib as well.</p>
<h3 id="building-the-server"><strong>Building the Server</strong></h3>
<p><strong>Step 1 </strong>— Start the project :</p>
<p>Go to Server directory and run this command:</p><pre><code>npm init</code></pre>
<p>This will start a new project. Provide all the details required. The <em>package.json</em> will be created and will look something like this.</p><pre><code class="language-json">{
"name": "chat",
"version": "1.0.0",
"description": "Chat application",
"main": "server.js",
"scripts": {
"test": "echo \"Error: no test specified\" &amp;&amp; exit 1"
},
"author": "Your name",
"license": "ISC"
}</code></pre>
<p><strong>Step 2</strong> — Install the dependencies.</p>
<ul>
<li><strong>socket.io</strong> — is a <em>javascript</em> library for real-time web applications. It enables real-time, bi-directional communication between web clients and servers.</li>
<li><strong>express</strong> — is a <em>Node.js</em> web application framework. It provides the set of features to develop the web and mobile applications. One can respond to HTTP request using different middlewares and also render HTML pages.</li>
</ul><pre><code>npm install --save socket.io
npm install --save express</code></pre>
<p>This will install required dependencies and add those to <em>package.json. </em>An extra field will be added to <em>package.json</em> which will look like this:</p><pre><code class="language-json">"dependencies": {
"express": "^4.14.0",
"socket.io": "^1.4.8"
}</code></pre>
<p><strong>Step 3 — </strong>Creating the Server</p>
<p>Create a server which serves at port 3000 and will send the html when called.</p>
<p>Initialize a new socket connection by passing HTTP object.</p>
<p>Event <em>connection</em> will be listening for incoming sockets.</p>
<p>Each socket emits <em>disconnect</em> event which will be called whenever a client disconnects.</p>
<ul>
<li><strong>socket.on</strong> waits for the event. Whenever that event is triggered the callback function is called.</li>
<li><strong>io.emit</strong> is used to emit the message to all sockets connected to it.</li>
</ul>
<p>The syntax is:</p><pre><code class="language-js">socket.on('event', function(msg){})
io.emit('event', 'message')</code></pre>
<p>Create a server with name <em>server.js. </em>It should:</p>
<ul>
<li>print a message to the console upon a user connecting</li>
<li>listen for <em>chat message</em> events and broadcast the received message to all sockets connected.</li>
<li>Whenever a user <em>disconnects,</em> it should print the message to the console.</li>
</ul>
<p>The server will look something like this:</p><pre><code class="language-js">var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/', function(req, res){
res.sendfile('index.html');
});
io.on('connection', function(socket){
console.log('user connected');
socket.on('chat message', function(msg){
io.emit('chat message', msg);
});
socket.on('disconnect', function(){
console.log('user disconnected');
});
});
http.listen(3000, function(){
console.log('listening on *:3000');
});</code></pre>
<h3 id="building-the-client"><strong>Building the Client</strong></h3>
<p>Create the index.html in the client directory, style.css in the css directory and app.js in js directory in the client.</p>
<p><strong><em>index.html:</em></strong></p>
<p>Let us write a simple HTML which can take our message and also display it.</p>
<p>Include <em>socket.io-client</em> and <em>angular.js</em> in your HTML script.</p><pre><code class="language-html">&lt;script src="/path/to/angular.js"&gt;&lt;/script&gt;
&lt;script src="/socket.io/socket.io.js"&gt;&lt;/script&gt;</code></pre>
<p><strong>socket.io</strong> serves the client for us. It defaults to connect to the host that serves the page. Final HTML looks something like this:</p><pre><code class="language-html">&lt;!doctype html&gt;
&lt;html ng-app="myApp"&gt;
&lt;head&gt;
&lt;title&gt;Socket.IO chat&lt;/title&gt;
&lt;link rel="stylesheet" href="/css/style.css"&gt;
&lt;script src="/lib/angular/angular.js"&gt;&lt;/script&gt;
&lt;script src="/socket.io/socket.io.js"&gt;&lt;/script&gt;
&lt;script src="http://code.jquery.com/jquery-1.11.1.js"&gt;
&lt;/script&gt;
&lt;script src="/js/app.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body ng-controller="mainController"&gt;
&lt;ul id="messages"&gt;&lt;/ul&gt;
&lt;div&gt;
&lt;input id="m" ng-model="message" autocomplete="off" /&gt;
&lt;button ng-click="send()"&gt;Send&lt;/button&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<p><strong><em>css/style.css:</em></strong></p>
<p>Give it some styling so that it looks like a chatbox. You can make use of any libraries.</p><pre><code class="language-css">* { margin: 0; padding: 0; box-sizing: border-box; }
body { font: 13px Helvetica, Arial; }
div { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
div input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
div button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
#messages { list-style-type: none; margin: 0; padding: 0; }
#messages li { padding: 5px 10px; }
#messages li:nth-child(odd) { background: #eee; }</code></pre>
<p><strong><em>js/app.js:</em></strong></p>
<p>Create an angular.js app and initialize a socket connection.</p>
<ul>
<li><strong>socket.on</strong> listens for a particular event. It calls a callback function whenever that event is called.</li>
<li><strong>socket.emit</strong> is used to emit the message to the particular event.</li>
</ul>
<p>Basic syntax of both are:</p><pre><code class="language-js">socket.on(‘event name’, function(msg){});
socket.emit('event name', message);</code></pre>
<p>So whenever the message is typed and the button is clicked, call the function to send the message.</p>
<p>Whenever the socket receives a message, display it.</p>
<p>The JavaScript will look something like this:</p><pre><code class="language-js">var app=angular.module('myApp',[]);
app.controller('mainController',['$scope',function($scope){
var socket = io.connect();
$scope.send = function(){
socket.emit('chat message', $scope.message);
$scope.message="";
}
socket.on('chat message', function(msg){
var li=document.createElement("li");
li.appendChild(document.createTextNode(msg));
document.getElementById("messages").appendChild(li);
});
}]);</code></pre>
<h3 id="running-the-application"><strong>Running the application</strong></h3>
<p>Go to server directory where our server is present. Run the server using the following command:</p><pre><code>node server.js</code></pre>
<p>The server starts running on port 3000. Go to the browser and type the following url:</p><pre><code>http://localhost:3000</code></pre>
<h3 id="how-to-improve-the-same-application"><strong>How to improve the same application</strong></h3>
<p>You can design a database to save user details and messages. It would be good if the design was scalable so that you could add more features later.</p>
<p>You need to install Mongoose or a MongoDB module to make use of a Mongo database:</p><pre><code>npm install --save mongoose</code></pre>
<p>or:</p><pre><code>npm install --save mongodb</code></pre>
<p>Here’s the documentation to use <a href="http://mongoosejs.com/docs/index.html" rel="noopener">mongoose</a> and the <a href="https://docs.mongodb.com/getting-started/node/client/" rel="noopener">mongodb</a> module.</p>
<p>Here’s what my schema design looks like:</p><pre><code class="language-json">{
“_id” : ObjectId(“5809171b71e640556be904ef”),
“name” : “Sudheesh Shetty”,
“handle” : “sudheesh”,
“password” : “556624370”,
“phone” : “8888888888”,
“email” : “sudheeshshetty@gmail.com”,
“friends” : [
{
“name” : “abc”,
“status” : “Friend”
},
{
“name” : “xyz”,
“status” : “Friend”
}
],
“__v” : 0
}</code></pre>
<p>Here, the status of each member can be:</p>
<ul>
<li>Friend: Stating that the member is a friend.</li>
<li>Pending: If the member has not yet accepted.</li>
<li>Blocked: If the member has blocked the other member.</li>
</ul>
<p>Suppose the member has rejected a chat request. The sender can then send a chat request again. A user can also save the messages by creating an extra collection. Each document will have the message, sender, receiver, and time.</p>
<p>So design your database according to your specific needs and how you want to handle messages.</p>
<p>2. Create REST APIs to serve the client. For example, an endpoint that sends a home page, from which users can make other requests.</p>
<p>Few of my API endpoints are:</p><pre><code class="language-js">app.post(‘/register’,function(req,res){})
app.post(‘/login’,function(req,res){})
app.post(‘/friend_request’,function(req,res){})
app.post(‘/friend_request/confirmed’,function(req,res){})</code></pre>
<p>3. Think of some cool additional features and implement them.</p>
<p>I have created a chat application of my own:</p>
<p><a href="https://github.com/sudheeshshetty/Chat" rel="noopener"><strong>sudheeshshetty/Chat</strong></a><br><a href="https://github.com/sudheeshshetty/Chat" rel="noopener"><em>Contribute to Chat development by creating an account on GitHub.</em>github.com</a></p>
<p>Here’s a quick glance at my chat application:</p>
<figcaption>Login screen</figcaption>
</figure>
<figcaption>How it looks after login.</figcaption>
</figure>
<p>Please do look at it, and give it a star at the top right if you like it. There are many ways I could improve this application. If you have any suggestions, send them to me at sudheeshshetty@gmail.com.</p>
<p>You can follow me here on click the green heart if you found this helpful so that more people will see this. You can also <a href="https://github.com/sudheeshshetty" rel="noopener">follow me on GitHub</a> and <a href="https://twitter.com/sudheeshshetty" rel="noopener">twitter</a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
