---
card: "https://cdn-media-1.freecodecamp.org/images/1*ofMfrqFMfpaTH_RMvI_RQA.jpeg"
tags: [JavaScript]
description: "by Victor Ofoegbu"
author: "Milad E. Fahmy"
title: "Getting off the ground with Express.js"
created: "2021-08-16T10:17:23+02:00"
modified: "2021-08-16T10:17:23+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development tag-tech tag-nodejs tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Getting off the ground with Express.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*ofMfrqFMfpaTH_RMvI_RQA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*ofMfrqFMfpaTH_RMvI_RQA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*ofMfrqFMfpaTH_RMvI_RQA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*ofMfrqFMfpaTH_RMvI_RQA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*ofMfrqFMfpaTH_RMvI_RQA.jpeg" alt="Getting off the ground with Express.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
app = express();
app.get('/',(request,response)=&gt;{
response.send(‘Hello world’);
});
//Binding the server to a port(3000)
app.listen(3000,()=&gt;console.log(‘express server started at port 300’));</code></pre><p>const express = require('express'), &nbsp; &nbsp; &nbsp;app = express();app.get('/',(request,response)=&gt;{ &nbsp;response.send(‘Hello world’);});//Binding the server to a port(3000)app.listen(3000,()=&gt;console.log(‘express server started at port 300’));</p><p>4) Go back to the terminal, still in the same folder, and hit <code>node server.js</code>. Head to your browser and visit <a href="http://localhost:3000" rel="noopener">localhost</a>.</p><p>We’re requiring our Express module. If you were quite observant, you must have noticed we didn’t need the <code>http</code> module like we do in pure Node.js apps. That’s because Express requires it, so we don’t need to do that again.</p><p>When we <code>require ('express’)</code>, what gets exported to us is a function, so we can basically call it directly and assign it to the <code>app</code> variable. At this point, nothing’s gonna work till we actually handle the request. This is called <code>routing</code> and it means giving the client what they are asking for.</p><p>Express gives us some basic verbs to do HTTP operations (such as GET, POST, PUT and DELETE). In our example here, we do an <code>app.get()</code> method which handles get requests to the server. It takes two arguments: the <code>path </code>of the request and a callback to handle the request.</p><p>If you didn’t get this, I’ll explain more.</p><p>A <strong>path</strong> is an address to a resource on a computer. <strong>A callback is a function passed to another function as an argument that is called when certain conditions happen.</strong></p><p>You might remember this:</p><pre><code>$('p').click(function(){
console.log('You clicked me')
});</code></pre><p>Here, we add a callback to fire when p is clicked. See? It’s easy.</p><p>On the last line of <code>server.js</code>, we listen at port 3000 and console.log when we start the server.</p><p>I bet you can’t write apps with that. Let’s get meaty.</p><h3 id="routing-in-express">Routing in Express</h3><p>Routing means assigning functions to respond to users’ requests. Express routers are basically middleware (meaning they have access to the <code>request</code> and <code>response</code> objects and do some heavy lifting for us).</p><p>Routing in Express follows this basic format:</p><pre><code>app.VERB(‘path’, callback…);</code></pre><p><strong>Where <code>VERB</code> is any of the <code>GET</code>, <code>POST</code>, <code>PUT</code>, and <code>DELETE</code> verbs.</strong></p><p>We can add as many callbacks as we desire. See an example here:</p><pre><code class="language-js">const express = require('express'),
app = express();
function sayHello(request,response,next){
console.log(‘I must be called’);
next();
}
app.get('/', sayHello, (request, response)=&gt;{
response.send('sayHello');
});
app.listen(3000,()=&gt;console.log('Express server started at port 3000'));</code></pre><p>Head to your terminal or command prompt and hit <code>node server.js</code>. You’ll see that the <code>sayHello</code> function fires before the response is sent to the browser.</p><p>The <code>sayHello </code>function takes three arguments (<code>request</code>, <code>response</code>, and <code>next</code>).</p><p>The <code>next()</code>function, when called, moves control to the next middleware or route.</p><h4 id="the-request-and-response-objects">The request and response objects</h4><p>The <code>request</code> object contains information about the incoming request. Here are the most useful properties and methods:</p><p>The <code><strong>request.params</strong> </code>variable stores an object of named GET request parameters. For example, clear your <code>server.js </code>file and paste this inside:</p><pre><code class="language-js">const express = require('express'),
app = express();
app.get('/:name/:age', (request, response)=&gt;{
response.send(request.params);
});
app.listen(3000,()=&gt;console.log(‘Express server started at port 3000’));</code></pre><p>Run this with <code>node server.js</code>, then head to your browser and run: <code><a href="https://localhost:3000/john/5" rel="noopener">https://localhost:3000/john/5</a></code></p><p>In the code above, we’re getting variables from the URL and sending them to the browser. The point is that the <code>request.params </code>is an object holding all those GET parameters. Notice the colon before the parameters. They differentiate route parameters from normal routes paths.</p><p>The <code><strong>request.body</strong></code> property stores POST form parameters.</p><p>The <code><strong>request.query</strong></code> property is used to extract the GET form data. Here’s an example of that:</p><p>1) Create another folder called <code>express-query</code>, and then create two files: <code>server.js</code>and <code>form.html</code>. Paste this into <code>server.js</code> :</p><pre><code class="language-js">const express = require('express'),
app = express();
//route serves both the form page and processes form data
app.get('/', (request, response)=&gt;{
console.log(request.query);
response.sendFile(__dirname +'/form.html');
});
app.listen(3000,()=&gt;console.log('Express server started at port 3000'));</code></pre><p>2) Copy this to the <code>form.html</code> file:</p><pre><code class="language-js">&lt;!--action specifies that form be handled on the same page--&gt;
&lt;form action='/' method='GET'&gt;
&lt;input type='text' name='name'/&gt;
&lt;input type='email' name='email'/&gt;
&lt;input type='submit'/&gt;
&lt;/form&gt;</code></pre><p>Run the code with <code>node server.js</code>, hit <code><a href="http://localhost:3000" rel="noopener">localhost:3000</a></code>, and fill and submit the form in your browser. After submitting the form, the data you filled out gets logged to the console.</p><p><code><strong>request.headers </strong></code>hold key/pair values of the request received by the server. Servers and clients make use of headers to communicate their compatibility and constraints.</p><p><code><strong>request.accepts([‘json’,’html’])</strong></code>holds an array of data formats and returns the format the browser prefers to collect data in. We’ll also see this when dealing with Ajax forms.</p><p><code><strong>request.url</strong></code><strong> </strong>stores data about the URL of the request.</p><p><code><strong>request.ip: </strong></code>holds the IP (Internet protocol) address of the browser requesting for information.</p><p>The <code>response</code> object also ships with some convenient methods to get useful information about the outgoing request.</p><p><code><strong>response.send(message)</strong></code><strong> </strong>sends its argument to the browser.</p><p><code><strong>response.json()</strong></code><strong> </strong>sends its argument as data to the browser in JSON format.</p><p><code><strong>response.cookie(name,value,duration)</strong></code><strong> </strong>provides an interface to set cookies on browsers. We’ll talk about cookies too.</p><p><code><strong>response.redirect([redirect status], url)</strong></code> redirects the browser to the specified URL with the optional status.</p><p><code><strong>response.render(‘file’,{routeData: routedata})</strong></code> renders a view to the browser and takes an object containing data the router might need. You’ll understand it better when we see views.</p><p><code><strong>response.set(name,value)</strong></code><strong> </strong>sets header values. But you don’t want to do that, as it gets in the way of the browser’s job.</p><p><code><strong>response.status(status)</strong></code>sets the status of a particular response (404, 200, 401 and so forth).</p><p>You don’t have to memorize all these. As we use them, you’ll subconsciously master them.</p><h3 id="express-router">Express Router</h3><p>With Express Router, we can break our application into fragments that can have their own instances of express to work with. We can them bring them together in a very clean and modular way.</p><p>Let’s take for example. These four random URLs:</p><p>localhost:3000/users/john</p><p>localhost:3000/users/mark</p><p>localhost:3000/posts/newpost</p><p>localhost:3000/api</p><p>Our normal approach of doing this with Express would be:</p><pre><code class="language-js">const express = require('express'),
app = express();
//Different routes
app.get('/users/john',(request,response)=&gt;{
response.send(`John’s page`);
});
app.get('/users/mark',(request,response)=&gt;{
response.send(`John’s page`);
});
app.get('/posts/newpost',(request,response)=&gt;{
response.send(`This is a new post`);
});
app.get('/api',(request,response)=&gt;{
response.send(‘Api endpoint’);
});
app.listen(3000,()=&gt;console.log(‘Server started at port 3000’));</code></pre><p>There’s nothing wrong with this pattern at this point. But it has potential for errors. When our routes are basically just five, there isn’t much of a problem. But when things grow and lots of functionality is required, putting all that code in our <code>server.js </code>isn’t something we want to do.</p><h4 id="we-should-let-router-do-this-for-us"><strong>We should let Router do this for us</strong></h4><p>Create a folder called <code>react-router</code> in the root of our project, create a file inside it, and call it <code>basic_router.js</code>. Copy this right in:</p><pre><code class="language-js">const express = require('express'),
router = express.Router();
//making use of normal routes
router.get('/john',(request,response)=&gt;{
response.send('Home of user');
});
router.get('/mark',(request,response)=&gt;{
response.send('Home of user');
});
//exporting thee router to other modules
module.exports = router;</code></pre><p>We’re basically creating another instance of Express. This time, we’re calling the <code>Router()</code> function of Express. It’s possible to directly call <code>express()</code> as a function (as in our <code><strong>server.js</strong></code>) and call <code>express.Router()</code> also. This is because Express is exported as a function, and in JavaScript, functions are objects too.</p><p>We add routes to it as a normal Express app. But we don’t bind it to any port. The <code>router</code> object contains all the routes we’ve defined, so we export only that object so other parts of our program can make use of it too.</p><p>We create our main <code>server.js</code>, and add it as a middleware. Yes middlewares make work easier, remember?</p><pre><code class="language-js">const express = require('express'),
app = express();
//requiring the basic_router.js
app.use('/users',require('.react-router/basic_router'));
//routes
app.get('/posts/newpost',(request,response)=&gt;{
response.send('new post');
});
app.get('/api',(request,response)=&gt;{
response.send('API route');
});
app.listen(3000,()=&gt;console.log('Express server started at port 3000'));</code></pre><p>Now run this. Navigate to <code>localhost:3000/user/john</code> and <code>localhost:3000/user/mark</code>. See? things are quite easy to group at this point.</p><p>We can do this for every other route. Create another file for our APIs. We’ll call it <code>api_route.js</code>. Copy this right in:</p><pre><code class="language-js">const express = require('express'),
router = express.Router();
router.get('/',(request,response)=&gt;{
response.send('Home of user');
});
//some other endpoints to submit data
module.exports = router;</code></pre><p>Now, go back to our <code><strong>server.js</strong></code> and change the code to this:</p><pre><code class="language-js">const express = require('express'),
app = express();
app.use('/users',require('./basic_router'));
app.use('/api',require('./api_route'));
app.get('/posts/newpost',(request,response)=&gt;{
response.send('new post');
});
hbs = require('express-handlebars').create({defaultLayout:'main.hbs'}),
app = express();
app.engine('hbs', hbs.engine);
app.set('view engine','hbs');</code></pre><p>So let’s do a basic rendering with Handlebars:</p><ol><li>Create a folder called <code>express-handlebars</code>, create a <code>views</code> folder, and inside the <code>views </code>folder create another folder called <code>layouts</code>.</li></ol><p>2) Create a <code>server.js</code> file and paste this inside:</p><pre><code class="language-js">const express = require('express'),
hbs = require('express-handlebars').create({defaultLayout:'main.hbs'}),
app = express();
//setting our app engine to handlebars
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.get('/',(request,response)=&gt;{
response.render('home',{title: 'Home'});
});
app.get('/about',(request,response)=&gt;{
response.render(‘about’,{title: ‘About’});
});
app.listen(3000,()=&gt;console.log('Express server started at port 3000'));</code></pre><p>3) Inside the <code>layouts</code> folder, create a file <code>main.hbs</code>. Paste this inside:</p><pre><code>&lt;!-- The main.hbs file will act as a default template for every view on the site --&gt;
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset='UTF-8'&gt;
&lt;!-- The title variable will be replaced with the title of every page --&gt;
&lt;title&gt;{{title}}&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;!-- Content of other pages will replace the body variable --&gt;
{{{body}}}
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>4) Next, we’re going to create the separate views. Inside of the <code>views</code> folder, create two files — <code>home.hbs</code>and <code>about.hbs</code>. Paste the following inside <code>home.hbs</code> :</p><pre><code>//home.hbs
&lt;!-- This is the Home view and will render into the main.hbs layout --&gt;
&lt;div&gt;
Hello, I’m the Home page and you’re welcome
&lt;/div&gt;</code></pre><p>and in our <code>about.hbs</code> :</p><pre><code>//about.hbs
&lt;!-- This is the About view and will also render into the main.hbs layout --&gt;
&lt;div&gt;
Hello, I’m the about page, what do you want to know about
&lt;/div&gt;</code></pre><p>Do a <code>node server.js</code> in your terminal and hit <code><a href="http://localhost:3000" rel="noopener">http://localhost:3000</a></code> on your browser.</p><p>What’s happening up here?</p><p>We first require <code>express-handlebars</code>and create a <code>defaultLayout</code>, assigning it to <code>main.hbs</code>. This means that all our views will render into the <code>main.hbs</code> layout.</p><p>Take a look at the <code>server.js</code>. Just a few things changed right? Let’s start with these two lines:</p><pre><code class="language-js">app.engine('hbs', hbs.engine);
app.set(‘view engine’,’hbs’);</code></pre><p>The first line sets the app engine to <code>hbs.engine </code>and the second line sets the view engine property to handlebars. Quite straightforward right?</p><p>The routes in our <code>server.js</code> are also a little different. Here’s the culprit:</p><pre><code class="language-js">response.render('home',{title: 'Home'});</code></pre><p>While <code>.send()</code>sends plain text to the browser, <code>render()</code> looks for the first parameter in the <code>views </code>folder and renders it to the browser. Most of the time, we might want to pass dynamic content to the view too. We give the render method an object as the second parameter. The object contains keys and values of data to be passed inside the view.</p><p>Take this line in our <code>main.hbs</code> file in our layout folder.</p><pre><code>//main.hbs
&lt;title&gt;{{title}}&lt;/title&gt;</code></pre><p>The <code>{{title}}</code> is replaced with whatever is passed with the view. In our case, the <code>{title: 'Home'}</code>. We can pass as many values as we want to the view. Just add it as a property of the object.</p><p>When we do a <code>response.render()</code>, Express knows where to get the files we ask for. Let’s look into the <code>about.hbs</code>.</p><pre><code>&lt;!-- This is the About view and will render into the main.handlebars layout --&gt;
&lt;div&gt;
Hello, I’m the about page, what do you want to know about
&lt;/div&gt;</code></pre><p>The content of this file replaces the body variable in our <code>layout.handlebars</code>:</p><pre><code>{{{body}}}</code></pre><p>If you’re asking why we’re using two braces for {{title}} and three for the {{{body}}} , you’re on the right track.</p><p>When we use two braces, we spit out everything, even the HTML tags (unescaped). Here’s what I mean.</p><p>If the content we want to send to the browser is <code>&lt;b&gt;Hello wor</code>ld&lt;/b&gt;, with two braces, Express will r<code>ender it as &lt;b&amp;g</code>t;Hello world&lt;/b&gt;. If we make use of three braces, Express will understand that we want a bol<strong>d text and </strong>render it as Hello world (bolded).</p><p>This is basically how template engines work in Express. <a href="http://handlebarsjs.com/" rel="noopener">Handlebars</a> provides a one page documentation. I consider it a good place to start.</p><h3 id="rendering-static-content-in-express">Rendering static content in express</h3><p>Have you ever thought of where we’ll store our CSS, JavaScript files, and images? Well, Express provides a middleware to make the server know where to find static content.</p><p>Here’s how to make use of it:</p><pre><code class="language-js">app.use(express.static(__dirname +'public'));</code></pre><p>Put this at the top of your <code>server.js</code>, right after the require statements. <code>__dirname </code>holds the path where the program is being run from.</p><p>If you didn’t get that, try this.</p><p>Delete everything on your <code>server.js</code>, and put this inside:</p><p><code>console.log(__dirname);</code></p><p>Head to your command line, and run <code>node server.js</code>. It shows you the path to the file node that is running.</p><p>Where we store our static content is up to us. We might want to name it <code>assets</code>or whatever, but you have to make sure you append it to the <code>dirname</code> like so:</p><pre><code class="language-js">express.static(__dirname + ‘static_folder_name’).</code></pre><h3 id="express-middleware">Express Middleware</h3><p>Middleware are functions that encapsulate functionality. They perform operations on HTTP requests and give us a high-level interface to customize them. Most middleware take three arguments: <strong>request</strong>, <strong>response</strong> objects, and a <strong>next</strong> function. In error handling middleware, there’s an additional parameter: the <strong>err</strong> object, which can tell us about the error and let us pass it to other middleware.</p><p>We add middleware to our server by using <code><strong>app.use(name_of_middleware)</strong></code>. It’s also important to note that middleware are used in the same order they were added. I’ll show you an example later if you don’t understand.</p><p>With this definition, we can also see route functions like <code>app.get()</code>, <code>app.post()</code> and so on, as middleware, except that they are applied to particular HTTP verb requests. You might also find it interesting to know that there’s an <code>app.all()</code>route that is applied to all HTTP requests not considering if they were a GET, POST, or other request.</p><pre><code class="language-js">//This middleware will be called for every request. GET or POST
app.all((request,response)=&gt;{
console.log('Hello world');
})</code></pre><p>Route handlers take two parameters, the path to match and the middleware to execute.</p><pre><code class="language-js">app.get('/',(request,,response)=&gt;{
response.send(‘Hello world’);
});</code></pre><p>If the path is left out, the middleware applies to every GET request.</p><pre><code class="language-js">//Every GET request will call this middleware
app.get((request,response)=&gt;{
response.send(‘Hello world’);
});</code></pre><p>In our example above, once we send a <code>GET</code>request, our server responds to the browser by sending a <code>‘Hello world’</code> message and then terminates until there’s another request.</p><p>But we might want more than one middleware to be called. There’s a way to do this. Remember our <code>next </code>function? We could make use of it to push control to another middleware.</p><p>Let’s see how this works. Copy and paste this code into our <code>server.js:</code></p><pre><code class="language-js">const express = require('express'),
app = express();
//setting the port
app.set(‘port’, process.env.PORT || 3000);
//first middleware
app.use((request,respone,next)=&gt;{
console.log(`processing for data for ${request.url}`);
next();
});
//second middleware
app.use((request,response,next)=&gt;{
console.log(`The response.send will terminate the request`);
response.send(`Hello world`);
});
//third middleware
app.use((request,respone,next)=&gt;{
console.log(`I’ll never get called`);
});
app.listen(3000,()=&gt;console.log('Express server started at port 3000'));</code></pre><p>From the terminal, hit <code>node server.js</code> and take a look at the terminal. Head to your browser and open up <code>localhost:3000</code>. Look at your console again, and you’ll see something similar.</p><pre><code>Express server started at port 3000
processing for data for /
The response.send will terminate the request</code></pre><p>Our first middleware executes every time a request is received. It writes something to the console and calls the <code>next()</code>function. Calling the <code>next()</code> function tells Express to not terminate the <code>request</code> object but sends control to the <strong>next </strong>middleware. Anytime we write a middleware without calling the <code>next</code> function, Express terminates the <code>request</code>object.</p><p>In the second middleware, we pass the <code>next()</code> function as an argument but we never call it. This terminates the <code>request</code> object and the third middleware never gets called. Note that if we never sent anything to the browser in the second middleware, the client will eventually timeout.</p><p>Here are some useful middleware in Express.js:</p><ul><li><a href="https://github.com/expressjs/morgan" rel="noopener">Morgan</a> — log each request</li><li><a href="https://github.com/expressjs/cors" rel="noopener">CORS</a> — enables Cross Origin Request Sharing</li><li><a href="https://github.com/expressjs/body-parser" rel="noopener">body-parser</a> — a middleware to parse the <code>request.body</code> in Express apps</li><li><a href="https://github.com/expressjs/multer" rel="noopener">Multer</a> — Node.js middleware for handling <code>multipart/form-data</code></li><li><a href="https://github.com/expressjs/session" rel="noopener">session</a> — simple session middleware for Express.js</li><li><a href="https://github.com/expressjs/errorhandler" rel="noopener">errorhandler</a> — development-only error handler middleware</li><li><a href="https://github.com/expressjs/serve-favicon" rel="noopener">serve-favicon</a> — favicon serving middleware</li><li><a href="https://github.com/expressjs/csurf" rel="noopener">csurf</a> — Node.js CSRF protection middleware</li><li><a href="http://www.passportjs.org/" rel="noopener">Passport</a> — Simple, unobtrusive authentication</li><li><a href="https://github.com/mamsoudi/merror" rel="noopener">Merror</a> — A RESTful-friendly Express Middleware for HTTP error handling and error responses</li><li><a href="https://github.com/thomas4019/expressa" rel="noopener">Expressa</a> — express middleware for easily making REST APIs</li></ul><h3 id="handling-form-data-in-express">Handling form data in Express</h3><p>The web’s main function is communication. Express provides us with tools to understand what clients request and how to respond properly.</p><p>Express basically has two places to store client data. The <strong>request.querystring(for GET request)</strong> and the <strong>request.body (for POST requests)</strong>. On the client side, it’s ideal to use the POST method for form submission because most browsers place limits on the length of the <code>querystring</code> and additional data is lost. If you don’t know what a query string is, it’s the part after your URL that contains data and does not fit properly into your routing path system. In case you don’t quite understand what a query string is, here’s an example:</p><pre><code>facebook.com/users?name=Victor&amp;age=100&amp;occupation=whatever</code></pre><p>From the point where the question mark begins is called the query string. It passes data to the server but exposes it in the URL.</p><p>It’s also good practice to keep the query string as clean as possible. Sending large data with GET requests makes the query string messy.</p><p>Let’s see a demo. We’ll take some data from our client via GET and send it back to them.</p><p>Create a folder, call it <code>form-data</code> , and create two files inside: <code>server.js</code> and <code>form.html</code>. Paste this into the <code>server.js</code> file and <code>form.html</code> files respectively:</p><pre><code class="language-js">//server.js file
const express = require('express'),
app = express();
//setting the port
app.set('port', process.env.PORT || 3000);
//
app.get('/',(request,response)=&gt;{
response.sendFile(__dirname +'/form.html');
});
app.get('/process',(request,response)=&gt;{
console.log(request.query);
response.send(`${request.query.name} said ${request.query.message}`);
});
app.listen(3000,()=&gt;{
console.log('Express server started at port 3000');
});</code></pre><pre><code class="language-html">//form.html
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset='UTF-8'&gt;
&lt;title&gt;Form page&lt;/title&gt;
&lt;style&gt;
*{
margin:0;
padding:0;
box-sizing: border-box;
font-size: 20px;
}
input{
margin:20px;
padding:10px;
}
input[type=”text”],
textarea {
width:200px;
margin:20px;
padding:5px;
height:30px;
display: block;
}
textarea{
resize:none;
height:60px;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form action='/process' method='GET'&gt;
&lt;input type='text' name='name' placeholder='name'/&gt;
&lt;textarea name='message' placeholder='message'&gt;&lt;/textarea&gt;
&lt;input type='submit'/&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>Run <code>node server.js</code>, head to <code>localhost:3000</code>, fill the form and submit it.</p><p>Here’s what the result would look like.</p><p>In our <code>server.js</code> file here, we have to two GET routes. One for <code>localhost:3000</code> and <code>localhost:3000/process</code>.</p><pre><code class="language-js">app.get(‘/’,(request,response)=&gt;{
response.sendFile(__dirname + ‘/form.html’);
});</code></pre><p>And</p><pre><code class="language-js">app.get(‘/process’,(request,response)=&gt;{
response.send(`${request.query.name} said ${request.query.message}`);
});</code></pre><p>Head to your your console. You’ll see an object. This proves that our <code>request.query</code> is an object that contains all queries and their values.</p><pre><code class="language-js">{
name: 'victor',
message: 'Hello world'
}</code></pre><p>If you take a look at our form in the <code>form.html</code>page, you’ll notice our form has <code>action</code> and <code>method</code>attributes. The <code>action</code>attribute specifies the page or route that should handle the form’s data (‘process’ in this case). When the form gets submitted, it sends a GET request to the <code>process</code>route with the content of our form as <code>querystring</code>data.</p><p>Our <code>server.js</code> file also handles the request for the process path and sends data passed from our <code>form.html</code> to the browser and console.</p><p>Let’s see how we would handle this with the POST method. It’s time to clear our <code>server.js</code>file. Copy and paste this code into <code>server.js</code>:</p><pre><code class="language-js">//server.js
const express = require('express'),
app = express(),
//You must require the body-parser middleware to access request.body in express
bodyParser = require('body-parser');
//configuring bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//setting our port
app.set('port', process.env.PORT || 3000);
//Get route for localhost:3000
app.get('/',(request,response)=&gt;{
response.sendFile(__dirname +'/form.html');
});
//POST route for form handling
app.post('/',(request,response)=&gt;{
console.log(request.body);
response.send(`${request.body.name} said ${request.body.message}`);
});
app.listen(3000,()=&gt;{
console.log('Express server started at port 3000');
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset='UTF-8'&gt;
&lt;title&gt;Form page&lt;/title&gt;
&lt;style&gt;
*{
margin:0;
padding:0;
box-sizing: border-box;
font-size: 20px;
}
input{
margin:20px;
padding:10px;
}
input[type='text'],
textarea {
width:200px;
margin:20px;
padding:5px;
height:30px;
display: block;
}
textarea{
resize:none;
height:60px;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form action='/' method='POST'&gt;
&lt;input type='text' name='name' placeholder='name'/&gt;
&lt;textarea name='message' placeholder='message'&gt;&lt;/textarea&gt;
&lt;input type='submit'/&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><figcaption>Using the POST method</figcaption></figure><p>If you look closely, the first different thing we’re doing is requiring and using <code>body-parser</code>. Body-parser is a middleware that makes POST data available in our <code>request.body</code>. Bear in mind that the <code>request.body </code>won’t work without the body-parser middleware.</p><p>You might also notice we have both GET and POST route handlers. The GET middleware shows the form and the POST middleware processes it. It’s possible for both of them to use one route path because they have different methods.</p><p>We couldn’t do this for our first example because our form method was GET. Obviously, you can’t have two GET requests for the same route and have both of them send data to the browser. That’s why our first example processed the form on the <code>/process</code> path.</p><h3 id="handling-ajax-forms">Handling AJAX forms</h3><p>Handling Ajax forms with Express is quite straightforward. Express provides us with a <code>request.xhr</code>property to tell us if a request is sent via AJAX. We can couple that with the <code>request.accepts()</code>method we talked about earlier. It helps us determine what format the browser wants the data in. If the client will like JSON, well, we’ll just give it JSON.</p><p>Let’s modify our <code>form.html</code> to use AJAX and our <code>server.js</code> to accept AJAX and send JSON.</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset='UTF-8'&gt;
&lt;title&gt;Form page&lt;/title&gt;
&lt;script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js'&gt;&lt;/script&gt;
&lt;style&gt;
*{
margin:0;
padding:0;
box-sizing: border-box;
font-size: 20px;
}
input{
margin:20px;
padding:10px;
}
input[type=”text”],
textarea {
width:200px;
margin:20px;
padding:5px;
height:30px;
display: block;
}
textarea{
resize:none;
height:60px;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div&gt;&lt;/div&gt;
&lt;form action='/' method='POST'&gt;
&lt;input type='text' name='name' placeholder='name'/&gt;
&lt;textarea name='message' placeholder='message'&gt;&lt;/textarea&gt;
&lt;input type='submit'/&gt;
&lt;/form&gt;
&lt;script&gt;
$('form').on('submit',makeRequest);
function makeRequest(e){
e.preventDefault();
$.ajax({
url:'/',
type : 'POST',
success: function(data){
if(data.message){
$('div').html(data.message);
} else {
$('div').html('Sorry, an error occured');
}
},
error: function(){
$('div').html('Sorry, an error occurred');
}
});
}
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><pre><code class="language-js">//server.js
const express = require('express'),
app = express(),
bodyParser = require('body-parser');
//configuring the body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//setting our app port
app.set('port', process.env.PORT || 3000);
//Route for  get requests.
app.get('/',(request,response)=&gt;{
response.sendFile(__dirname +'/form.html');
});
//Route to handle POST form requests.
app.post('/',(request,response)=&gt;{
//we check if the request is an AJAX one and if accepts JSON
if(request.xhr || request.accepts('json, html')==='json'){
response.send({message:'Just wanted to tell you. It worked'});
} else {
//Do something else by reloading the page.
}
});
app.listen(3000,()=&gt;{
console.log('Express server started at port 3000');
});</code></pre><h4 id="here-s-how-this-works"><strong>Here’s how this works</strong></h4><p>Not much changes here — we just added a way to vet if the request was made with AJAX.</p><p>So here’s what we’re doing. We made the request an AJAX one with the POST method. We linked to jQuery CDN. In the script tag, we attach an event handler for the submit event. When we do this, we prevent the default behavior of reloading the page.</p><p>We then use the jQuery <code>$.ajax()</code> method to make an AJAX request. The server responds with an object with a <code>message</code>property, which we then append to the empty div.</p><p>If you aren’t familiar with AJAX, I once wrote some articles on AJAX. Check them out: <a href="https://codeburst.io/a-gentle-introduction-to-ajax-1e88e3db4e79" rel="noopener">A gentle introduction to AJAX</a> and <a href="https://codeburst.io/easier-asynchronous-requests-with-jquery-80507b502e62" rel="noopener">Easier asynchronous requests with jQuery.</a></p><h3 id="databases-in-node-js-apps">Databases in Node.js apps</h3><p>MongoDB and CouchDB are some database systems that are suitable for Node.js applications. This doesn’t completely rule out the possibility of using other databases. We’ll look at MongoDB, but you can choose any one you like.</p><p>Documents replace rows in a relational database like MySQL. In MongoDB and other document-based databases, data is stored and retrieved in an object format. This means we can have deeply nested structures.</p><p>If you consider objects in JavaScript, there’s no way to validate that the value of an object property is a particular type. Here’s what I mean:</p><p><code>const obj = { text : 1234}</code></p><p>There’s no way to make sure the value of <code>text</code>is a string.</p><p>Fortunately, there’s Mongoose. Mongoose allows you define schemas that strongly validate data and ensure they match objects or documents in a MongoDB. Mongoose is an Object Document Mapper (ODM).</p><p><a href="https://code.tutsplus.com/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527" rel="noopener">An introduction to Mongoose</a> is a nice place to start exploring and working with Mongoose.</p><h3 id="sessions-and-cookies-in-express">Sessions and Cookies in Express</h3><p>HTTP is stateless. Meaning any request or response sent by the browser or server respectively maintains no information (state) about the previous or future requests and responses. Every single request has all it takes to evoke a new server response.</p><p>But there has to be a way for servers to remember clients as they browse through the site so they don’t have to enter passwords on every page.</p><p>The web has been innovative enough to make use of cookies and sessions. Cookies are basically small files stored on the client’s machine. When clients send requests, the server uses it to identify them. More like a passport, the server then knows it’s them and applies all their preferences.</p><p>So the idea would be to store files on the client’s machine. While this is not a bad idea, we want to make sure we don’t abuse the user’s storage by storing huge amounts of data. On the other side of things, we understand that if we want to make things harder to guess and more secure, we make it longer and more complex. How can we achieve these two concurrently?</p><p>People came up with sessions. So the idea of sessions is that instead of storing all the information on the client’s cookie, the server stores an identifier in the cookie (a small string). When the client sends requests, the server takes that unique string and matches it to the user’s data on the server. This way, we get to store any amount of data and still remember users.</p><p>To make use of cookies in Express, we need to require the <code>cookie-parser</code> middleware. Remember our middleware?</p><p>I’m not in the best position to explain this in depth. But someone did it better here: <a href="https://glebbahmutov.com/blog/express-sessions/" rel="noopener">Express sessions</a>.</p><h3 id="security-in-express-apps">Security in Express apps</h3><p>The web is not secured by default. Packets are the way data is sent over the web. These packets are unencrypted by default. When we think about web security, the first place to start is to secure those packets.</p><p><strong>HTTPS</strong>: That’s no new word! Like you might have guessed, the difference between HTTP and HTTPS is the S (Security). HTTPS encrypts packets traveling through the web so people don’t do malicious things with it.</p><h4 id="so-how-do-i-go-about-getting-https">So how do I go about getting HTTPS?</h4><p>Chill, let’s take it slow. To get HTTPS, you need to approach a Certificate Authority (CA). HTTPS is based on the server having a public key certificate, sometimes called an SSL. CAs assign certificates to qualified servers. You have to also understand that CAs make root certificates that get installed when you install your browser. So browsers can easily communicate with servers with certificates too.</p><p><strong>Good news</strong>: Anybody can make their own certificates.</p><p><strong>Bad news</strong>: The browsers can’t recognize those certificates because they weren’t installed as root certificates.</p><p><strong>Impossible</strong>: You can’t configure all the browsers in the world during installation to recognize your certificate.</p><p>I can tell what you’re thinking now. You’re thinking that you can create your own certificate for testing and development and get one in production. Well, that’s smart and possible.</p><p>The browser will give you warnings, but you are aware of the problem so it won’t be much of an issue. Here’s a <a href="https://deliciousbrains.com/https-locally-without-browser-privacy-errors/" rel="noopener">post</a> that walks you through creating your own certificate.</p><p><a href="https://deliciousbrains.com/https-locally-without-browser-privacy-errors/" rel="noopener"><strong>How to Set Up HTTPS Locally Without Getting Annoying Browser Privacy Errors</strong></a><br><a href="https://deliciousbrains.com/https-locally-without-browser-privacy-errors/" rel="noopener"><em>Setting up HTTPS locally can be tricky business. Even if you do manage to wrestle self-signed certificates into…</em></a><br><a href="https://deliciousbrains.com/https-locally-without-browser-privacy-errors/" rel="noopener">deliciousbrains.com</a></p><p>Enough talking. Let’s assume you now have the SSL certificate. Here’s how to make it work with your Express app.</p><h4 id="enabling-https-in-your-node-app">Enabling HTTPS in your Node app</h4><p>We need to make use of the <code>https</code> module for HTTPS. After obtaining our credentials from a Certificate Authority, we’ll include it as an argument to the <code><strong>createServer()</strong></code><strong> </strong>method.</p><pre><code class="language-js">//server.js
const express = require('express'),
https = require('https'),
http = require('http'),
fs = require('fs'),
app = express();
//credentials obtained from a Certificate Authority
var options = {
key: fs.readFileSync('/path/to/key.pem'),
cert: fs.readFileSync('/path/to/cert.pem')
};
//Binding the app on different ports so the app can be assessed bt HTTP and HTTPS
http.createServer(app).listen(80);
https.createServer(options, app).listen(443);</code></pre><p>Notice we’re requiring <code>http</code>and <code>https.</code> This is because we want to respond to both. In our program, we’re making use of the <code>fs</code> module (file-system).</p><p>We basically provide the path to where our SSL key and certificate is stored. A module or something. Observe that we’re making use of the <code><strong>readFileSync</strong></code><strong> </strong>method instead of the <code><strong>readFile</strong></code>. If you understand Node.js architecture, you’ll infer that we want to read the file synchronously before running any other lines of code.</p><p>Running this code asynchronously might lead to situations where aspects of our code that require the content of the file don’t get them on time.</p><p>The last two lines bind the HTTP and HTTPS to two different ports and take different arguments. Why are we doing this?</p><p>At most times, we want our server to still listen to requests with HTTP and maybe redirect them to HTTPS.</p><p><strong>Note</strong>: the default port for HTTPS is 443.</p><p>To do this basic redirect, we’ll install and require a module <code>express-force-ssl</code> at the top of our program like so:</p><pre><code>npm install express-force-ssl</code></pre><p>And configure like so:</p><pre><code class="language-js">const express_force_ssl = require('express-force-ssl');
app.use(express_force_ssl);</code></pre><p>Now, our server can take care of both HTTP and HTTPS requests effectively.</p><h4 id="cross-site-request-forgery-csrf-">Cross-Site Request Forgery (CSRF)</h4><p>This is the other big thing you’d want to protect yourself from. It happens when requests come to your server but not directly from your user. For example, you have an active session on Facebook.com and you have another tab open. Malicious scripts can run on the other site and make requests to Facebook’s server.</p><p>A way to handle this is to ensure that requests come only from your website. That’s quite easy. We assign an ID to users and attach it to forms, so when they submit, we can match up the ID and deny access if it doesn’t match.</p><p>Luckily, there’s a middleware that handles this — <code>csurf</code>middleware. Here’s how to use it:</p><pre><code>npm install csurf</code></pre><p>To use it in our program:</p><pre><code class="language-js">const express = require('express'),
body_parser = require('body-parser'),
hbs = require('express-handlebars').create({defaultLayout: 'main',extname:'hbs'});
session = require('express-session'),
csurf = require('csurf'),
app = express();
//setting the app port
app.set('port', process.env.PORT || 3000);
//configuring the app for handlebars
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
//setting up a session csrf
app.use(session({
name: 'My session csrf',
secret: 'My super session secret',
cookie: {
maxAge: null,
httpOnly: true,
secure: true
}
})
);
app.use(csurf());
//configuring the body parser middleware
app.use(body_parser.urlencoded());
//Route to login
app.get('/login', (request,response)=&gt;{
console.log(request.csrfToken());
response.render('login',{
csrfToken : request.csrfToken(),
title: 'Login'
});
});
app.listen(3000,()=&gt;console.log('Express app started at port 3000'));</code></pre><pre><code class="language-html">&lt;b&gt;Here's the generated csrf token&lt;/b&gt; ({{csrfToken}})&lt;br&gt;&lt;br&gt;
&lt;form method='POST' action='/process'&gt;
&lt;!-- We pass the _csrf token as a hidden input --&gt;
&lt;input type='hidden' name='_csrf' csurf={{csrfToken}}/&gt;
&lt;input type='text' name='name'/&gt;
&lt;input type='submit'/&gt;
&lt;/form&gt;</code></pre><p>Run <code>node server.js</code> , head to your browser <code>localhost:3000</code>, fill the form and submit. Also check in your command line and see the token logged.</p><p>What we’re doing is generating and passing the <code>csrfToken</code> to our login view.</p><p><strong>Note: </strong>The <code>csurf</code> module requires <code>express-session</code> module to work. We configure our session CSRF and pass it to the view via the <code>response.render()</code> method.</p><p>Our view can now append it to the form or any other sensitive request.</p><p>So what happens when the browser doesn’t get the CSRF token from the browser forms? It spits an error. Make sure you have an error handling route in your Express application, or else your application might misbehave.</p><h4 id="authentication">Authentication</h4><p>One step to reduce authentication problems is to let people sign up and sign in with third-party apps (Facebook, Twitter, Google,+ and so on). A whole lot of people have these accounts, and you can also have access to some of their data like emails and usernames. Modules like <code>passport.js</code> provide a very elegant interface to handle such authentications.</p><p>Here’s the <a href="http://www.passportjs.org/docs/" rel="noopener">official passport.js documentation</a>. I think it’s a nice place to start.</p><p>Another step to reduce authentication problems is to always encrypt all passwords and decrypt them back when showing them to the users.</p><p>One more thing. I see this on a lot of websites. They set crazy criteria for users’ password on the site. I understand that they’re trying to make passwords more secure, but think about it. Whose job is it? The developer or the user?</p><p>The user should be least bothered about security issues. When criteria like these are set on passwords, users have no other option than to use passwords they’ll never remember. I know the web is getting better and we’ll figure out a way to make authentication better.</p><p>Till then I think we can end this here.</p><p>This is a lot of information. But you need more than this to build scalable web applications. Here are some insightful books for learning more about Express.</p><p>If this was useful, you should follow me on <a href="https://twitter.com/vick_OnRails" rel="noopener">Twitter</a> for more useful stuff.</p><ol><li><a href="https://www.amazon.com/Express-Action-Writing-building-applications/dp/1617292427" rel="noopener">Express in action</a> by <a href="/news/getting-off-the-ground-with-expressjs-89ada7ef4e59/undefined" rel="noopener">Evan Hahn</a>.</li><li><a href="https://www.amazon.com/Getting-MEAN-Mongo-Express-Angular/dp/1617294756" rel="noopener">Getting MEAN with Express, Mongo, Angular and Node</a> by <a href="/news/getting-off-the-ground-with-expressjs-89ada7ef4e59/undefined" rel="noopener">Simon Holmes</a>.</li></ol>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
