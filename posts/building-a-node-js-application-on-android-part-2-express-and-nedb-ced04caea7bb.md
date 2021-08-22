---
card: "https://cdn-media-1.freecodecamp.org/images/1*gpCGhSHig8ZaHUOxjDJO8g.jpeg"
tags: [API]
description: by Aurélien Giraud
author: "Milad E. Fahmy"
title: "Building a Node.js application on Android"
created: "2021-08-15T19:55:38+02:00"
modified: "2021-08-15T19:55:38+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-api tag-nodejs tag-programming tag-learning-to-code tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">Building a Node.js application on Android</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*gpCGhSHig8ZaHUOxjDJO8g.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*gpCGhSHig8ZaHUOxjDJO8g.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*gpCGhSHig8ZaHUOxjDJO8g.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*gpCGhSHig8ZaHUOxjDJO8g.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*gpCGhSHig8ZaHUOxjDJO8g.jpeg" alt="Building a Node.js application on Android">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Aurélien Giraud</p>
<h1 id="building-a-node-js-application-on-android">Building a Node.js application on Android</h1>
<h4 id="part-2-express-and-nedb">Part 2: Express and NeDB</h4>
<p>In <a href="https://medium.freecodecamp.com/building-a-node-js-application-on-android-part-1-termux-vim-and-node-js-dfa90c28958f#.6oc2qvfwl" rel="noopener">Part 1</a> we saw how to use Termux, a Terminal emulator and Linux environment for Android. We also edited files with Vim and saw how to run Node. We are now going to build a small node application with the Express framework and use NeDB for the database.</p>
<h3 id="the-story-and-who-could-benefit-from-it">The story, and who could benefit from it</h3>
<p>When I found out I could build a full Node.js application with a Mongo-like database on my Android tablet, I got really excited. So I decided to give it a try, and share about my experience.</p>
<p>It turns out that once Termux is running on Android and Node is installed, the fact that we are on Android instead of Linux doesn’t make much of a difference. In fact, all the Termux specific setup was done in Part 1 and you are welcome to code along on your preferred device/computer/cloud IDE…</p>
<p>This also means that, apart from the fact that we substitute Mongo for NeDB, this article is like the usual introduction to building a RESTful API and is mainly for people who are rather new to Node, Express and Mongo/NeDB.</p>
<h3 id="what-we-are-going-to-do">What we are going to do</h3>
<figcaption>A basic recurrent goals tracker</figcaption>
</figure>
<p>In order to demonstrate how to get started with the Express web framework and an NeDB database, let’s look at a basic goal tracker that I’ve been building for myself. At the current stage, it looks as shown in the picture above.</p>
<p>Users can:</p>
<ul>
<li>submit a new goal</li>
<li>delete a goal</li>
<li>record a success for a goal</li>
<li>record a failure for a goal</li>
</ul>
<p>Well, actually we’re only going to implement the first two features in this post, and in case you’re curious about the two remaining ones, I will provide at the end a link to the code of the full implementation.</p>
<p>So without the need for recording successes and failures, our code will look a bit simpler:</p>
<p>Here are the steps we are going to go through:</p>
<ol>
<li>Set up the server with <strong>Express.</strong></li>
<li>Describe a few <strong>user stories.</strong></li>
<li>Set up <strong>NeDB</strong>.</li>
<li>Build a <strong>RESTful API</strong>.</li>
</ol>
<h3 id="pre-requisites">Pre-requisites</h3>
<p>We are going to start where we left off in Part 1. Thus, the only requirement is that node be installed.</p>
<h3 id="1-setting-up-the-server-with-express">1. Setting up the server with Express</h3>
<p><a href="http://expressjs.com/" rel="noopener">Express</a> is a web framework for Node that helps build Node applications. If you have trouble figuring out what Express brings to Node, I recommend you check out Evan Hahn’s article <a href="http://evanhahn.com/understanding-express/" rel="noopener">Understanding Express</a>.</p>
<p>Let’s start a new project:</p><pre><code>$ mkdir goals-tracker &amp;&amp; cd goals-tracker$ npm init$ touch server.js</code></pre>
<p>and install Express:</p><pre><code>npm install express --save</code></pre>
<p>We are going to use Express to define the routes<em>,</em> that is to define the application end points (URIs) and set up how the application responds to client requests.</p>
<p>Open <em>server.js</em> and copy-paste/write:</p>
<p>With that in place, you can start the app:</p><pre><code>$ node server.js</code></pre>
<p>This should print to the console the number of the port on which the server is listening. If you visit <a href="http://localhost:8080" rel="noopener"><strong>http://localhost:8080</strong></a> in the browser (assuming that 8080 is the number that got printed to the console) you should see on the page: <em>Our first route is working. :)</em></p>
<h4 id="some-explanations">Some explanations</h4>
<p>The <strong>‘/’ </strong>in <strong>app.get( … )</strong> defines the route where we want to attach some behavior from the server. Using ‘/’ refers to the base URI, in our case: <a href="http://localhost:8080/goals" rel="noopener">http://localhost:8080</a>. Note that we would get the same result in the browser window if we used <strong>app.get(‘/goals’, …)</strong> instead and visited <a href="http://localhost:8080/goals" rel="noopener">http://localhost:8080/goals</a>.</p>
<p>The second argument in <strong>app.get( … ) </strong>is a <a href="http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/" rel="noopener">callback </a>function that enables us to define what the server should do when the route given as the first argument is visited. In this function:</p>
<ul>
<li><strong>req</strong> stands for the <strong>request: </strong>this is the information that the server receives from a client (for example this might come from someone using the front-end part of the website/app).</li>
<li><strong>res </strong>stands for <strong>response:</strong> this is the information that the server sends back to the user. This can be a webpage or some other data like an image, some JSON or some XML.</li>
</ul>
<h4 id="nodemon">Nodemon</h4>
<p>In the next parts of this tutorial we are going to make multiple changes to the file <em>server.js</em>. In order to avoid restarting the server manually each time to see the result, we can install <a href="http://nodemon.io/" rel="noopener"><strong>nodemon</strong></a>.</p>
<p>Nodemon is a utility that will monitor for changes in your code and automatically restart the server. We are going to install it as a development only dependency using the tag <em>save-dev:</em></p><pre><code>npm install nodemon --save-dev</code></pre>
<p>Now you can restart the server with the <em>nodemon</em> command instead of <em>node</em>:</p><pre><code>nodemon server.js</code></pre>
<h3 id="2-the-user-stories">2. The user stories</h3>
<p>Before we move on to the part about NeDB, let’s pause for a moment to think about the business logic. In order to see what we need to implement, we start by defining a few user stories.</p>
<p>A <a href="https://en.wikipedia.org/wiki/User_story" rel="noopener">user story</a> is a very high-level definition of a requirement. User stories are useful for discussing the product in non-technical terms with a client, for estimating how much time and effort the implementation of a feature will take, for guiding the overall development of an application, and for doing <a href="https://en.wikipedia.org/wiki/Test-driven_development" rel="noopener">Test Driven Development</a>.</p>
<p>Here are the 4 user stories we’re going to use:</p>
<ol>
<li>As a user, I can save a new goal with its date of creation.</li>
<li>As a user, I can access all the goals that have been saved.</li>
<li>As a user, I can access the whole information about a goal.</li>
<li>As a user, I can delete a goal.</li>
</ol>
<p>In our case, the stories map one-to-one to the 4 CRUD operations that we are going to talk about in Part 4.</p>
<h3 id="3-using-nedb">3. Using NeDB</h3>
<p>The fact that <a href="https://github.com/louischatriot/nedb#inserting-documents" rel="noopener">NeDB</a> is easy to install, well documented and uses the MongoDB’s API makes it perfect for getting started with developing Node.js applications on Android. There even is <a href="https://github.com/louischatriot/nedb-to-mongodb" rel="noopener">a tool</a> to help you switch to MongoDB later on if need be (I haven’t tried it yet, though).</p>
<p>So let us add NeDB to the project:</p><pre><code>$ npm install nedb --save</code></pre>
<p>and add to <em>server.js </em>a few lines to setup the database and make sure we can save to it:</p>
<p>A <strong>Datastore </strong>refers to what would be called a collection in Mongo. We could create multiple datastores if we needed several collections. As demonstrated in NeDB’s documentation, each collection would be saved in a separate file. Here we have chosen to store the goals collection in a file named <em>goals.db.</em></p>
<h4 id="checking-if-it-worked">Checking if it worked</h4>
<p>If the server was started earlier with <em>nodemon</em>, it should have updated after the changes in <em>server.js</em> got saved. This means that <em>db.insert(…)</em> should have run and the goal should have been logged to the console:</p><pre><code>$ nodemon server.js[nodemon] 1.9.1[nodemon] to restart at any time, enter `rs`[nodemon] watching: *.*[nodemon] starting `node server.js`Listening on port 8080[nodemon] restarting due to changes...[nodemon] starting `node server.js`Listening on port 8080{ description: 'Do 10 minutes meditation every day', successes: [], failures: [], _id: 'ScfixKjsOqz9xBo5', createdAt: Fri Mar 18 2016 22:10:58 GMT+0000 (UTC), updatedAt: Fri Mar 18 2016 22:10:58 GMT+0000 (UTC) }</code></pre>
<p>A new file called <em>goals.db</em> should also have been created.</p><pre><code>$ ls goals.db  node_modules/  package.json  server.js</code></pre>
<p>And it should contain the goal that just got saved.</p><pre><code>$ less goals.db{"description":"Do 10 minutes meditation every day","_id":"ScfixKjsOqz9xBo5","createdAt":{"$$date":1458339058282},"updatedAt":{"$$date":1458339058282}}</code></pre>
<p>Note that the fields <strong><em>_id</em></strong>, <strong><em>createdAt</em></strong> and <strong><em>updatedAt</em></strong> have been filled in automatically by NeDB because we set up the Datastore with the option <strong><em>timestampData</em> </strong>set to<em> true.</em></p>
<h3 id="4-building-a-restful-api">4. Building a RESTful API</h3>
<p>Next, let’s build a RESTful API for the application. In a nutshell, this means that we want to use <strong>HTTP verbs</strong> and URIs in order to allow the client to perform <a href="http://en.wikipedia.org/wiki/Create,_read,_update_and_delete" rel="noopener"><strong>CRUD</strong></a> operations (Create, Read, Update and Delete). These operations are also usually going to send back data to the client.</p>
<p>In CRUD terms we can :</p>
<ul>
<li><strong>Create</strong> data with <strong>POST</strong>,</li>
<li><strong>Read</strong> data with <strong>GET</strong>,</li>
<li><strong>Update</strong> data with <a href="http://williamdurand.fr/2014/02/14/please-do-not-patch-like-an-idiot/" rel="noopener"><strong>PUT</strong> or <strong>PATCH</strong></a>,</li>
<li><strong>Delete</strong> data with <strong>DELETE</strong>.</li>
</ul>
<p>The HTTP verbs that we are going to use in this post are POST, GET and DELETE.</p>
<h4 id="our-api">Our API</h4>
<p>Here is a table showing the routes that we are going to set up, how they will be accessed (i.e. with which HTTP Verb) and what each one makes possible:</p>
<p>If you want to learn more about RESTful APIs, you could check out <a href="https://scotch.io/bar-talk/designing-a-restful-web-api" rel="noopener"><em>Designing a RESTful Web API</em></a> by Mathias Hansen or <a href="http://www.restapitutorial.com/lessons/httpmethods.html" rel="noopener"><em>Using HTTP Methods for RESTful Services</em></a>.</p>
<h4 id="testing-the-api">Testing the API</h4>
<p>We are going to test the API manually in the terminal using <a href="https://github.com/curl/curl" rel="noopener">curl</a>. If you are not on Android and would rather like to use a GUI to test the API, you could use <a href="https://www.getpostman.com/" rel="noopener">POSTMAN</a>.</p>
<p>Let see a first example of how to use curl. Make sure the server is running, open another terminal (in Termux swipe to the right from the left border and click on <em>new session</em>) and type:</p><pre><code>$ curl -X GET "http://localhost:8080"</code></pre>
<p>This should print to the console what we got in the browser window earlier on, that is: <em>Our first route is working. :)</em></p>
<p>We will now add code to <em>server.js</em> bits by bits. In case you would rather like to see the ‘big’ picture first you can head over to <a href="https://gist.github.com/aurerua/6679d82cc9939247ffa7" rel="noopener">the final server.js file</a>.</p>
<h4 id="body-parser">Body-parser</h4>
<p>To handle the requests that the server receives, we are going to install <a href="https://github.com/expressjs/body-parser" rel="noopener">body-parser</a>. It processes the incoming requests and makes it easier for us to access the relevant parts.</p><pre><code>npm install body-parser --save</code></pre>
<p>Add the body-parser setup code to the top of <em>server.js</em> (e.g. right after the setup of the port number):</p>
<h4 id="getting-all-the-goals">Getting all the goals</h4>
<p>If the server receives a <strong>GET</strong> request at <strong><em>/goals</em></strong>, the callback will be executed and the database will be queried with <strong><em>db.find({})</em></strong>. Here the object passed to <em>find()</em> is empty. This means that no constraint is set to what we are looking for and all objects in the database should be returned.</p>
<p>Notice also that no callback has been specified to <em>find()</em>. Thus a Cursor object is returned, which can first be modified with <strong>sort</strong>, <strong>skip</strong> or <strong>limit </strong>before we use <strong><em>exec(callback)</em></strong> to finish the query. Here we are using <strong>sort</strong> to return the goals with the most recently updated ones at the top (i.e. the ones with the ‘greater’ date of last update).</p>
<p>If everything went well, the result of the query (in our case an array of goals) is sent back to the client formatted as JSON. In case something went wrong and an error is produced, the error message is sent back to the client instead.</p>
<p>Let us test if it works:</p><pre><code>$ curl -X GET "http://localhost:8080/goals/"</code></pre>
<p>This should print to the console an array containing the goal we saved to the database earlier on.</p>
<h4 id="creating-a-goal">Creating a goal</h4>
<p><strong><em>req.body</em></strong> contains key-value pairs of data that was submitted in the request body. By default, it is undefined and it gets populated by the <a href="https://www.npmjs.org/package/body-parser" rel="noopener"><em>body-parser</em></a> middleware. In our case the request should contain a key-value pair whose key is named ‘<em>description’</em> and whose value is thus retrieved by using <strong><em>req.body.description</em></strong>.</p>
<p>So first, the goal we want to insert into the database is built from the request using <em>req.body.description</em>. Then it can be inserted into the database and if there was no error the response is sent back to the server as JSON.</p>
<p>Now let us try to POST a new goal using curl:</p><pre><code>$ curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "description=Read about functional programming every day" "http://localhost:8080/goals/"</code></pre>
<p>This should print the JSON representation of the goal that has been sent back to the client.</p>
<p>We post the data as <em>x-www-form-urlencoded</em>. This sends the data as query strings that are parsed by the <em>body-parser</em>.</p>
<h4 id="getting-a-goal-using-its-id">Getting a goal using its id</h4>
<p><strong><em>req.params</em></strong> is an object containing properties mapped to the route “parameters”. Here it enables us to access the value of the goal’s id, which is supposed to come after <em>/goals/</em> in the URL in the request. For this to work, we have to use a colon in the URI in front of the property that we want to access with <em>req.params</em>.</p>
<p>Apart from the fact that we are using <em>findOne(…)</em> instead of <em>find(…)</em>, nothing new here. So let’s test it. For this, you might check what got printed to the console after we saved a new goal using POST and use its <em>“_id”</em> value. Here is my command with the id I got:</p><pre><code>$ curl -X GET "http://localhost:8080/goals/JJtcFVQnoAxW7KXc"</code></pre>
<p>This should print to the console the goal with the given id.</p>
<h4 id="deleting-a-goal-using-its-id">Deleting a goal using its id</h4>
<p>We use <em>remove(…)</em> to delete a goal from the database. If the deletion is successful, the response is sent with the HTTP status code 200 (<a href="http://www.restapitutorial.com/lessons/httpmethods.html" rel="noopener">200 means that the deletion was successful</a>).</p>
<h3 id="wrapping-it-up">Wrapping it up</h3>
<p>We have set up a server with Express and NeDB, and built a REST API. What we are still missing is a front-end and a bit of wiring.</p>
<p>This next step could take us down many different roads: Would we opt for a template engine and if yes which one? Bootstrap or a similar framework? Angular, React, Aurelia? The list just goes on and on.</p>
<p>In case you would like to have a look at a minimal implementation of a front-end — and maybe play around with it in your browser — you can see the code of a possible solution I have been implementing using <a href="http://handlebarsjs.com/" rel="noopener">Handlebars</a>, <a href="https://www.getmdl.io/" rel="noopener">Material Design Lite</a> and the <a href="https://developers.google.com/web/updates/2015/03/introduction-to-fetch" rel="noopener">fetch API</a> by visiting <a href="https://github.com/aurerua/goals-tracker.git" rel="noopener">its repo on GitHub</a> or by cloning it:</p><pre><code>$ git clone --branch rest-and-view https://github.com/aurerua/goals-tracker.git --depth 1</code></pre>
<h4 id="going-further">Going further</h4>
<p>The back-end that we have built still raises the question: how should the code be split into different files and folders for better modularity and maintainability?</p>
<p>In case you’re curious, I have also been writing <a href="https://github.com/aurerua/goals-tracker-mvc.git" rel="noopener">another version of the app</a> that uses a Model-View-Controller folder structure. Feel free to have a look:</p><pre><code>$ git clone https://github.com/aurerua/goals-tracker-mvc.git</code></pre>
<p>And if you have any question or feedback, do not hesitate to contact me!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
