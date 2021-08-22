---
card: "https://cdn-media-1.freecodecamp.org/images/0*dpm3hLvU_dmwP-8U"
tags: [Docker]
description: by João Henrique
author: "Milad E. Fahmy"
title: "How to create a full stack React/Express/MongoDB app using Docker"
created: "2021-08-15T19:41:04+02:00"
modified: "2021-08-15T19:41:04+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-docker tag-javascript tag-react tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to create a full stack React/Express/MongoDB app using Docker</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*dpm3hLvU_dmwP-8U 300w,
https://cdn-media-1.freecodecamp.org/images/0*dpm3hLvU_dmwP-8U 600w,
https://cdn-media-1.freecodecamp.org/images/0*dpm3hLvU_dmwP-8U 1000w,
https://cdn-media-1.freecodecamp.org/images/0*dpm3hLvU_dmwP-8U 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*dpm3hLvU_dmwP-8U" alt="How to create a full stack React/Express/MongoDB app using Docker">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by João Henrique</p>
<h1 id="how-to-create-a-full-stack-react-express-mongodb-app-using-docker">How to create a full stack React/Express/MongoDB app using Docker</h1>
<figcaption>“assorted-color filed intermodal containers” by <a href="https://unsplash.com/@frankiefoto?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">frank mckenna</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p><strong>In this tutorial, I will guide you through the process of containerizing a <a href="https://reactjs.org/" rel="noopener">React</a> FrontEnd, a <a href="https://nodejs.org/en/" rel="noopener">Node</a>/<a href="http://expressjs.com/" rel="noopener">Express</a> API, and a <a href="https://www.mongodb.com/what-is-mongodb" rel="noopener">MongoDB</a> database using <a href="https://www.docker.com/" rel="noopener">Docker</a> containers in a very simple way.</strong></p>
<blockquote>I won’t go into much detail about how to work with any of the technologies. Instead, I will leave links, in case you want to learn more about any of them.</blockquote>
<blockquote>The objective is to give you a practical guide of how to containerize this simple Full-Stack App, to be used as a starting point, for you to build your own apps.</blockquote>
<h4 id="why-should-you-care-about-docker">Why should you care about <a href="https://www.docker.com/" rel="noopener">Docker</a>?</h4>
<p>Docker is simply one of the most important technologies at the moment. It lets you run apps inside containers that are mostly isolated from “everything”.</p>
<p>Each container is like an individual virtual machine stripped out of everything that is not needed to run your app. This makes containers very light, fast and secure.</p>
<p>Containers are also meant to be disposable. If one goes rogue, you can kill it and make another just like it with no effort thanks to the <a href="https://docs.docker.com/engine/reference/commandline/images/" rel="noopener">container images system.</a></p>
<p>Another thing that makes <a href="https://www.docker.com/" rel="noopener">Docker</a> great is that the app inside containers will run the same in every system (Windows, Mac, or Linux). This is awesome if you are developing in your machine and then you want to deploy it to some cloud provider like <a href="https://cloud.google.com/kubernetes-engine/docs/" rel="noopener">GCP</a> or <a href="https://aws.amazon.com/pt/" rel="noopener">AWS</a>.</p>
<h4 id="getting-ready-">Getting ready!</h4>
<ol>
<li>Make sure you have <a href="https://nodejs.org/en/" rel="noopener">Node</a> and <a href="https://www.docker.com/get-started" rel="noopener">Docker</a> running on your machine.</li>
<li>I will use the React/Express app we have built in the previous tutorial called <a href="https://medium.com/@jrshenrique/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c" rel="noopener"><strong>Create a React FrontEnd, a Node/Express BackEnd and connect them together</strong></a><strong>. </strong>You can follow that tutorial first or you can <a href="https://help.github.com/articles/cloning-a-repository/" rel="noopener">clone</a> this <a href="https://github.com/Joao-Henrique/React_Express_App_Medium_Tutorial" rel="noopener"><strong>GitHub repository</strong></a> with the boilerplate if you’re not interested in the process of creating <a href="https://reactjs.org/" rel="noopener">React</a> and <a href="http://expressjs.com/" rel="noopener">Express</a> apps.</li>
<li>If you opt for using the repo, don't forget to <strong>npm install</strong> inside the <strong>Client</strong> and <strong>API</strong> folders to install all needed dependencies.</li>
<li>And… that’s about it. You’re all set to start containerizing stuff :)</li>
</ol>
<h4 id="dockerfile">Dockerfile</h4>
<p>According to documentation:</p>
<blockquote><em>a <a href="https://docs.docker.com/engine/reference/builder/#usage" rel="noopener">Dockerfile</a> is a text document that contains all the commands a user could call on the command line to assemble an image. <a href="https://www.docker.com/get-started" rel="noopener">Docker</a> can build images automatically by reading the instructions from a <a href="https://docs.docker.com/engine/reference/builder/#usage" rel="noopener">Dockerfile</a>.</em></blockquote>
<h4 id="docker-containers-everywhere-">Docker containers everywhere!</h4>
<p>Containerizing your app with <a href="https://www.docker.com/get-started" rel="noopener">Docker</a> is as simple as creating a <a href="https://docs.docker.com/engine/reference/builder/#usage" rel="noopener">Dockerfile</a> for each of your apps to first build an image, and then running each image to get your containers live.</p>
<h4 id="containerize-your-client">Containerize your Client</h4>
<p>To build our Client image you will be needing a <a href="https://docs.docker.com/engine/reference/builder/#usage" rel="noopener">Dockerfile</a>. Let’s create one:</p>
<ol>
<li>Open the <a href="https://medium.com/@jrshenrique/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c" rel="noopener">React/Express App</a> in your favorite code editor (I’m using <a href="https://code.visualstudio.com/" rel="noopener">VS Code</a>).</li>
<li>Navigate to the <strong>Client</strong> folder.</li>
<li>Create a new file named <strong>Dockerfile</strong>.</li>
<li>Place this code inside it:</li>
</ol><pre><code># Use a lighter version of Node as a parent imageFROM mhart/alpine-node:8.11.4</code></pre><pre><code># Set the working directory to /clientWORKDIR /client</code></pre><pre><code># copy package.json into the container at /clientCOPY package*.json /client/</code></pre><pre><code># install dependenciesRUN npm install</code></pre><pre><code># Copy the current directory contents into the container at /clientCOPY . /client/</code></pre><pre><code># Make port 3000 available to the world outside this containerEXPOSE 3000</code></pre><pre><code># Run the app when the container launchesCMD ["npm", "start"]</code></pre>
<p>This will instruct docker to build an image (using these configurations) for our Client. You can read all about <a href="https://docs.docker.com/engine/reference/builder/#usage" rel="noopener">Dokerfile here</a>.</p>
<h4 id="containerize-your-api">Containerize your API</h4>
<p>To build our API image you will be needing another <a href="https://docs.docker.com/engine/reference/builder/#usage" rel="noopener">Dockerfile</a>. Let’s create it:</p>
<ol>
<li>Navigate to the <strong>API</strong> folder.</li>
<li>Create a new file named <strong>Dockerfile</strong>.</li>
<li>Place this code inside it:</li>
</ol><pre><code># Use a lighter version of Node as a parent imageFROM mhart/alpine-node:8.11.4</code></pre><pre><code># Set the working directory to /apiWORKDIR /api</code></pre><pre><code># copy package.json into the container at /apiCOPY package*.json /api/</code></pre><pre><code># install dependenciesRUN npm install</code></pre><pre><code># Copy the current directory contents into the container at /apiCOPY . /api/</code></pre><pre><code># Make port 80 available to the world outside this containerEXPOSE 80</code></pre><pre><code># Run the app when the container launchesCMD ["npm", "start"]</code></pre>
<p>This will instruct docker to build an image (using these configurations) for our API. You can read all about <a href="https://docs.docker.com/engine/reference/builder/#usage" rel="noopener">Dokerfile here</a>.</p>
<h4 id="docker-compose">Docker-Compose</h4>
<p>You could run each individual container using the Dokerfiles. In our case we have 3 containers to manage, so we will use docker-compose instead. Compose is a tool for defining and running multi-container Docker applications.</p>
<p>Let me show you how simple it is to use it:</p>
<ol>
<li>Open the <a href="https://medium.com/@jrshenrique/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c" rel="noopener">React/Express App</a> in your code editor.</li>
<li>On your App main folder, create a new file and name it <a href="https://docs.docker.com/compose/overview/" rel="noopener"><strong>docker-compose.yml</strong></a><strong>.</strong></li>
<li>Write this code in the <a href="https://docs.docker.com/compose/overview/" rel="noopener"><strong>docker-compose.yml</strong></a> file:</li>
</ol><pre><code>version: "2"</code></pre><pre><code>services:    client:        image: webapp-client        restart: always        ports:            - "3000:3000"        volumes:            - ./client:/client            - /client/node_modules        links:            - api        networks:            webappnetwork</code></pre><pre><code>    api:        image: webapp-api        restart: always        ports:            - "9000:9000"        volumes:            - ./api:/api            - /api/node_modules        depends_on:            - mongodb        networks:            webappnetwork</code></pre>
<p>What sorcery is that?</p>
<p>You should read all about <a href="https://docs.docker.com/compose/overview/" rel="noopener"><strong>docker-compose</strong> here</a>.</p>
<p>Basically, I’m telling Docker that I want to build a container called <strong>client</strong>, using the image <strong>webapp-client </strong>(which is the image we defined on our Client Dockerfile)<strong> </strong>that will be listening on port 3000. Then, I’m telling it that I want to build a container called <strong>api</strong> using the image <strong>webapp-api</strong> (which is the image we defined on our API Dockerfile) that will be listening on port 9000.</p>
<blockquote>Keep in mind that there are many ways of writing a <a href="https://docs.docker.com/compose/overview/" rel="noopener"><strong>docker-compose.yml</strong></a> file. You should explore the documentation and use what better suits your needs.</blockquote>
<h4 id="add-a-mongodb-database">Add a <a href="https://www.mongodb.com/what-is-mongodb" rel="noopener">MongoDB</a> database</h4>
<p>To add a <a href="https://www.mongodb.com/what-is-mongodb" rel="noopener">MongoDB</a> database is as simple as adding these lines of code to your <a href="https://docs.docker.com/compose/overview/" rel="noopener"><strong>docker-compose.yml</strong></a> file:</p><pre><code>    mongodb:        image: mongo        restart: always        container_name: mongodb        volumes:            - ./data-node:/data/db        ports:            - 27017:27017        command: mongod --noauth --smallfiles        networks:            - webappnetwork</code></pre>
<p>This will create a container using the <a href="https://hub.docker.com/_/mongo/" rel="noopener">official MongoDB image</a>.</p>
<h4 id="create-a-shared-network-for-your-containers">Create a shared network for your containers</h4>
<p>To create a shared network for your container just add the following code to your <strong>docker-compose.yml</strong> file:</p><pre><code>networks:    webappnetwork:        driver: bridge</code></pre>
<p>Notice that you already defined each container of your app to use this network.</p>
<p>In the end, your <a href="https://docs.docker.com/compose/overview/" rel="noopener"><strong>docker-compose.yml</strong></a> file should be something like this:</p>
<figcaption>docker-compose.yml</figcaption>
</figure>
<p>In the <strong>docker-compose.yml</strong> file, the indentation matters. Be aware of that.</p>
<h4 id="get-your-containers-running">Get your containers running</h4>
<ol>
<li>Now that you have a <a href="https://docs.docker.com/compose/overview/" rel="noopener"><strong>docker-compose.yml</strong></a><strong> </strong>file, let’s build your images. Go to the terminal and on your App’s main directory run:</li>
</ol><pre><code>docker-compose build</code></pre>
<p>2. Now, to make Docker spin up the containers, just run:</p><pre><code>docker-compose up</code></pre>
<p>And… just like magic, you now have your Client, your API, and your Database, all running in separated containers with only one command. How cool is that?</p>
<h4 id="connect-your-api-to-mongodb">Connect your API to MongoDB</h4>
<ol>
<li>First, let’s install <a href="https://mongoosejs.com/" rel="noopener">Mongoose</a> to help us with the connection to <a href="https://www.mongodb.com/what-is-mongodb" rel="noopener">MongoDB</a>. On your terminal type:</li>
</ol><pre><code>npm install mongoose</code></pre>
<ol>
<li>Now create a file called <strong>testDB.js</strong> on your API routes folder and insert this code:</li>
</ol><pre><code>const express = require("express");const router = express.Router();const mongoose = require("mongoose");</code></pre><pre><code>// Variable to be sent to Frontend with Database statuslet databaseConnection = "Waiting for Database response...";</code></pre><pre><code>router.get("/", function(req, res, next) {    res.send(databaseConnection);});</code></pre><pre><code>// Connecting to MongoDBmongoose.connect("mongodb://mongodb:27017/test");</code></pre><pre><code>// If there is a connection error send an error messagemongoose.connection.on("error", error =&gt; {    console.log("Database connection error:", error);    databaseConnection = "Error connecting to Database";});</code></pre><pre><code>// If connected to MongoDB send a success messagemongoose.connection.once("open", () =&gt; {    console.log("Connected to Database!");    databaseConnection = "Connected to Database";});</code></pre><pre><code>module.exports = router;</code></pre>
<p>Ok, let’s see what this code is doing. First, I import Express, ExpressRouter, and <a href="https://mongoosejs.com/" rel="noopener">Mongoose</a> to be used on our /testDB route. Then I create a variable that will be sent as a response telling what happened with the request. Then I connect to the database using Mongoose.connect(). Then I check if the connection is working or not, and change the variable (I’ve created earlier) accordingly. Finally, I use module.exports to export this route so that I’m able to use it on app.js file.</p>
<p>2. Now you have to “tell” <a href="http://expressjs.com/" rel="noopener">Express</a> to use that route you’ve just created. On your API folder, open the <strong>app.js</strong> file and insert this two lines of code:</p><pre><code>var testDBRouter = require("./routes/testDB");app.use("/testDB", testDBRouter);</code></pre>
<p>This will “tell” <a href="http://expressjs.com/" rel="noopener">Express</a> that every time there is a request to the endpoint <strong>/testDB</strong>, it should use the instructions on the file <strong>testDB.js</strong>.</p>
<p>3. Now let’s test if everything is working properly. Go to your terminal and press <strong><em>control + C</em></strong> to bring your containers down. Then run <strong><em>docker-compose up</em></strong> to bring them back up again. After everything is up and running, if you navigate to <a href="http://localhost:9000/testDB" rel="noopener">http://localhost:9000/testDB</a> you should see the message <strong><em>Connected to Database.</em></strong></p>
<p>In the end, your <strong>app.js</strong> file should look like this:</p>
<figcaption>api/app.js</figcaption>
</figure>
<p>Yep… it means the API is now connected to the database. But your FrontEnd doesn’t know yet. Let’s work on that now.</p>
<h4 id="make-a-request-from-react-to-the-database"><strong>Make a request from <a href="https://reactjs.org/" rel="noopener">React</a> to the Database</strong></h4>
<p>To check if the React app can reach the Database let’s make a simple request to the endpoint you defined on the previous step.</p>
<ol>
<li>Go to your <strong>Client</strong> folder and open the <strong>App.js</strong> file.</li>
<li>Now insert this code below the <strong>callAPI()</strong> method:</li>
</ol><pre><code>callDB() {    fetch("http://localhost:9000/testDB")        .then(res =&gt; res.text())        .then(res =&gt;; this.setState({ dbResponse: res }))        .catch(err =&gt; err);}</code></pre>
<p>This method will fetch the endpoint you defined earlier on the API and retrieve the response. Then it will store the response in the state of the component<strong>.</strong></p>
<p>4. Add a variable to the state of the component to store the response:</p><pre><code>dbResponse: ""</code></pre>
<p>3. Inside the lifecycle method <strong>componentDidMount(), </strong>insert this code to execute the method you’ve just created when the component mounts:</p><pre><code>this.callDB();</code></pre>
<p>4. Finally, add another <strong>&lt;</strong>;p&gt; tag after the one you already have to display the response from the Database:</p><pre><code>&lt;p className="App-intro"&gt;;{this.state.dbResponse}&lt;/p&gt;</code></pre>
<p>In the end, your App.js file should end up like this:</p>
<figcaption>client/App.js</figcaption>
</figure>
<h4 id="finally-let-s-see-if-everything-is-working">Finally, let’s see if everything is working</h4>
<p>On your browser, go to <a href="http://localhost:3000/" rel="noopener">http://localhost:3000/</a> and if everything is working properly, you should see these three messages :</p>
<ol>
<li>Welcome to React</li>
<li>API is working properly</li>
<li>Connected to Database</li>
</ol>
<p>Something like this:</p>
<figcaption><a href="http://localhost:3000/" rel="noopener" target="_blank" title="">http://localhost:3000/</a></figcaption>
</figure>
<h4 id="congratulations-"><strong>Congratulations!!!</strong></h4>
<p>You now have a full stack app with a React FrontEnd, a Node/Express API and a MongoDB database. All running inside individual Docker containers that are orchestrated with a simple docker-compose file.</p>
<p>This app can be used as a boilerplate to build your more robust app.</p>
<p>You can find all the code I wrote <a href="https://github.com/Joao-Henrique/docker_tutorial" rel="noopener">in the project repository</a>.</p>
<blockquote>Be Strong and Code On!!!</blockquote>
<p>…and don’t forget to be awesome today ;)</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
