---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9c56740569d1a4ca317c.jpg"
tags: [Nodejs]
description: "If you are new to the world of web development, you will spen"
author: "Milad E. Fahmy"
title: "How to deploy your app to the web using Express.js and Heroku"
created: "2021-08-15T22:49:34+02:00"
modified: "2021-08-15T22:49:34+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nodejs tag-node tag-express tag-express-js tag-javascript tag-heroku tag-git tag-web-applications tag-full-stack tag-deployment tag-html tag-learning tag-tutorial tag-npm featured ">
<header class="post-full-header">
<h1 class="post-full-title">How to deploy your app to the web using Express.js and Heroku</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c56740569d1a4ca317c.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c56740569d1a4ca317c.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c56740569d1a4ca317c.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c56740569d1a4ca317c.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c56740569d1a4ca317c.jpg" alt="How to deploy your app to the web using Express.js and Heroku">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>If you are new to the world of web development, you will spend a lot of time learning how to build static sites with HTML, CSS and JavaScript.</p><p>You might then start learning how to use popular frameworks such as <a href="https://reactjs.org/">React</a>, <a href="https://vuejs.org/">VueJS</a> or <a href="https://angular.io/">Angular</a>.</p><p>But after trying out a few new ideas and running some sites locally, you might wonder how to actually deploy your site or app. And as it turns out, it can sometimes be difficult to know where to start.</p><p>Personally, I find running an Express server hosted on Heroku one of the simplest ways to get going. This article will show you how to do this.</p><p><a href="https://www.heroku.com/">Heroku</a> is a cloud platform which supports a number of different programming languages and frameworks.</p><p>This is not a sponsored post - there are of course many other solutions available, such as:</p><ul><li><a href="https://www.digitalocean.com/">Digital Ocean</a></li><li><a href="https://aws.amazon.com/">Amazon Web Services</a></li><li><a href="https://azure.microsoft.com/en-gb/">Azure</a></li><li><a href="https://cloud.google.com/">Google Cloud Platform</a></li><li><a href="https://www.netlify.com/">Netlify</a></li><li><a href="https://zeit.co/">ZEIT Now</a></li></ul><p>Check them all out and see which suits your needs best.</p><p>Personally, I found Heroku the quickest and easiest to start using "out of the box". The free tier is somewhat limited in terms of resources. However, I can confidently recommend it for testing purposes.</p><p>This example will host a simple site using an Express server. Here are the high-level steps:</p><ol><li>Setting up with Heroku, Git, npm</li><li>Create an Express.js server</li><li>Create static files</li><li>Deploy to Heroku</li></ol><p>It should take about 25 minutes in total (or longer if you want to spend more time on the static files).</p><p>This article assumes you already know:</p><ul><li>Some HTML, CSS and JavaScript basics</li><li>Basic command line usage</li><li>Beginner-level Git for version control</li></ul><p>You can find all the code in <a href="https://github.com/pg0408/lorem-ipsum-demo">this repository</a>.</p><h3 id="setting-up">Setting up</h3><p>The first step in any project is to set up all the tools you know you'll need.</p><p>You'll need to have:</p><ul><li>Node and npm installed on your local machine (read how to do this <a href="https://nodejs.org/en/download/">here</a>)</li><li>Git installed (read <a href="https://www.atlassian.com/git/tutorials/install-git">this guide</a>)</li><li>The Heroku CLI installed (<a href="https://devcenter.heroku.com/articles/heroku-cli#download-and-install">here's how to do it</a>)</li></ul><p><strong>1. Create a new directory and initialise a Git repository</strong></p><p>From the command line, create a new project directory and move into it.</p><pre><code>$ mkdir lorem-ipsum-demo
$ cd lorem-ipsum-demo</code></pre><p>Now you are in the project folder, initialise a new Git repository.</p><p>⚠️This step is important because <a href="https://devcenter.heroku.com/articles/how-heroku-works#deploying-applications">Heroku relies on Git</a> for deploying code from your local machine to its cloud servers ⚠️</p><pre><code>$ git init</code></pre><p>As a final step, you can create a README.md file to edit at a later stage.</p><pre><code>$ echo "Edit me later" &gt; README.md</code></pre><p><strong>2. Login to the Heroku CLI and create a new project</strong></p><p>You can login to Heroku using the Heroku CLI (command line interface). You will need to have a free Heroku account to do this.</p><p>There are two options here. The default is for Heroku to let you login through the web browser. Adding the <code>-i</code> flag lets you login through the command line.</p><pre><code>$ heroku login -i</code></pre><p>Now, you can create a new Heroku project. I called mine <code>lorem-ipsum-demo</code>.</p><pre><code>$ heroku create lorem-ipsum-demo</code></pre><p>Naming your project:</p><ul><li>Heroku will generate a random name for your project if you don't specify one in the command.</li><li>The name will form part of the URL you can use to access your project, so choose one you like. </li><li>This also means that you need to choose a unique project name that no one else has used.</li><li>It is possible to rename your project later (so don't worry too much about getting the perfect name right now).</li></ul><p><strong>3. Initialise a new npm project and install Express.js</strong></p><p>Next, you can initialise a new npm project by creating a package.json file. Use the command below to do this.</p><p>⚠️This step is crucial. Heroku relies on you providing a package.json file to know this is a Node.js project when it builds your app ⚠️</p><pre><code>$ npm init -y</code></pre><p>Next, <a href="https://expressjs.com/en/starter/installing.html">install Express</a>. Express is a widely used server framework for NodeJS.</p><pre><code>$ npm install express --save</code></pre><p>Finally, you are ready to start coding!</p><h3 id="writing-a-simple-express-server">Writing a simple Express server</h3><p>The next step is to create a file called <code>app.js</code>, which runs an Express server locally.</p><pre><code>$ touch app.js</code></pre><p>This file will be the entry point for the app when it is ready. That means, the one command needed to launch the app will be:</p><pre><code>$ node app.js</code></pre><p>But first, you need to write some code in the file.</p><p><strong>4. Edit the contents of app.js</strong></p><p>Open <code>app.js</code> in your favourite editor. Write the code shown below and click save.</p><pre><code class="language-JavaScript">// create an express app
const express = require("express")
const app = express()
// use the express-static middleware
app.use(express.static("public"))
// define the first route
app.get("/", function (req, res) {
res.send("&lt;h1&gt;Hello World!&lt;/h1&gt;")
})
// start the server listening for requests
app.listen(process.env.PORT || 3000,
() =&gt; console.log("Server is running..."));</code></pre><p>The comments should help indicate what is happening. But let's quickly break the code down to understand it further:</p><ul><li>The first two lines simply require the Express module and create an instance of an Express app.</li><li>The next line requires the use of the <code>express.static</code> middleware. This lets you serve static files (such as HTML, CSS and JavaScript) from the directory you specify. In this case, the files will be served from a folder called <code>public</code>.</li><li>The next line uses <code>app.get()</code> to define a URL route. Any URL requests to the root URL will be responded to with a simple HTML message.</li><li>The final part starts the server. It either looks to see which port Heroku will use, or defaults to 3000 if you are running locally.</li></ul><p>⚠️The use of <code>process.env.PORT || 3000</code> in the last line is important for deploying your app successfully ⚠️</p><p>If you save <code>app.js</code> and start the server with:</p><pre><code>$ node app.js</code></pre><p>You can visit <a href="http://localhost:3000/">localhost:3000</a> in your browser and see for yourself the server is running.</p><h3 id="create-your-static-files">Create your static files </h3><p>The next step is to create your static files. These are the HTML, CSS and JavaScript files you will serve up whenever a user visits your project.</p><p>Remember in <code>app.js</code> you told the <code>express.static</code> middleware to serve static files from the <code>public</code> directory.</p><p>The first step is of course to create such a directory and the files it will contain.</p><pre><code>$ mkdir public
$ cd public
$ touch index.html styles.css script.js</code></pre><p><strong>5. Edit the HTML file</strong></p><p>Open <code>index.html</code> in your preferred text editor. This will be the basic structure of the page you will serve to your visitors.</p><p>The example below creates a simple landing page for a <a href="https://en.wikipedia.org/wiki/Lorem_ipsum">Lorem Ipsum</a> generator, but you can be as creative as you like here.</p><pre><code class="language-HTML">&lt;!DOCTYPE html&gt;
&lt;head&gt;
&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"&gt;&lt;/script&gt;
&lt;link href="https://fonts.googleapis.com/css?family=Alegreya|Source+Sans+Pro&amp;display=swap" rel="stylesheet"&gt;
&lt;link rel="stylesheet" type="text/css" href="styles.css"&gt;
&lt;/head&gt;
&lt;html&gt;
&lt;body&gt;
&lt;h1&gt;Lorem Ipsum generator&lt;/h1&gt;
&lt;p&gt;How many paragraphs do you want to generate?&lt;/p&gt;
&lt;input type="number" id="quantity" min="1" max="20" value="1"&gt;
&lt;button id="generate"&gt;Generate&lt;/button&gt;
&lt;button id="copy"&gt;Copy!&lt;/button&gt;
&lt;div id="lorem"&gt;
&lt;/div&gt;
&lt;script type="text/javascript" src="script.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p><strong>6. Edit the CSS file</strong></p><p>Next up is editing the CSS file <code>styles.css</code>. Make sure this is linked in your HTML file.</p><p>The CSS below is for the Lorem Ipsum example. But again, feel free to be as creative as you want.</p><pre><code class="language-CSS">h1 {
font-family: 'Alegreya' ;
}
body {
font-family: 'Source Sans Pro' ;
width: 50%;
margin-left: 25%;
text-align: justify;
line-height: 1.7;
font-size: 18px;
}
input {
font-size: 18px;
text-align: center;
}
button {
font-size: 18px;
color: #fff;
}
#generate {
background-color: #09f;
}
#copy {
background-color: #0c6;
}</code></pre><p><strong>7. Edit the JavaScript file</strong></p><p>Finally, you might want to edit the JavaScript file <code>script.js</code>. This will let you make your page more interactive.</p><p>The code below defines two basic functions for the Lorem Ipsum generator. Yes, I used <a href="https://jquery.com/">JQuery</a> - it's quick and easy to work with.</p><pre><code class="language-JavaScript">$("#generate").click(function(){
var lorem = $("#lorem");
lorem.html("");
var quantity = $("#quantity")[0].valueAsNumber;
var data = ["Lorem ipsum", "quia dolor sit", "amet", "consectetur"];
for(var i = 0; i &lt; quantity; i++){
lorem.append("&lt;p&gt;"+data[i]+"&lt;/p&gt;");
}
})
$("#copy").click(function() {
var range = document.createRange();
range.selectNode($("#lorem")[0]);
window.getSelection().removeAllRanges();
window.getSelection().addRange(range);
document.execCommand("copy");
window.getSelection().removeAllRanges();
}
)</code></pre><p>Note that here, the <code>data</code> list is truncated to make it easier to show. In the actual app, it is a much longer list of full paragraphs. You can see the entire file in the repo, or look <a href="http://www.thelatinlibrary.com/cicero/fin1.shtml">here for the original source</a>.</p><h3 id="deploying-your-app">Deploying your app</h3><p>After writing your static code and checking it all works as expected, you can get ready to deploy to Heroku.</p><p>However, there are a couple more things to do.</p><p><strong>8. Create a Procfile</strong></p><p>Heroku will need a Procfile to know how to run your app.</p><p>A Procfile is a "process file" which tells Heroku which command to run in order to manage a given process. In this case, the command will tell Heroku how to start your server listening on the web.</p><p>Use the command below to create the file.</p><p>⚠️This is an important step, because without a Procfile, Heroku cannot put your server online. ⚠️</p><pre><code>$ echo "web: node app.js" &gt; Procfile</code></pre><p>Notice that the Procfile has no file extension (e.g., ".txt", ".json"). </p><p>Also, see how the command <code>node app.js</code> is the same one used locally to run your server.</p><p><strong>9. Add and commit files to Git</strong></p><p>Remember you initiated a Git repository when setting up. Perhaps you have been adding and committing files as you have gone.</p><p>Before you deploy to Heroku, make sure to add all the relevant files and commit them.</p><pre><code>$ git add .
$ git commit -m "ready to deploy"</code></pre><p>The final step is to push to your Heroku master branch.</p><pre><code>$ git push heroku master</code></pre><p>You should see the command line print out a load of information as Heroku builds and deploys your app.</p><p>The line to look for is: <code>Verifying deploy... done.</code></p><p>This shows that your build was successful.</p><p>Now you can open the browser and visit your-project-name.herokuapp.com. Your app will be hosted on the web for all to visit!</p><h3 id="quick-recap">Quick recap</h3><p>Below are the steps to follow to deploy a simple Express app to Heroku:</p><ol><li>Create a new directory and initialise a Git repository</li><li>Login to the Heroku CLI and create a new project</li><li>Initialise a new npm project and install Express.js</li><li>Edit the contents of app.js</li><li>Edit the static HTML, CSS and JavaScript files</li><li>Create a Procfile</li><li>Add and commit to Git, then push to your Heroku master branch</li></ol><h3 id="things-to-check-if-your-app-is-not-working">Things to check if your app is not working</h3><p>Sometimes, despite best intentions, tutorials on the Internet don't work exactly as you expected.</p><p>The steps below should help debug some common errors you might encounter:</p><ul><li>Did you initialise a Git repo in your project folder? Check if you ran <code>git init</code> earlier. Heroku relies on Git to deploy code from your local machine.</li><li>Did you create a package.json file? Check if you ran <code>npm init -y</code> earlier. Heroku requires a package.json file to recognise this is a Node.js project.</li><li>Is the server running? Make sure your Procfile uses the correct file name to start the server. Check you have <code>web: node app.js</code> and not <code>web: node index.js</code>.</li><li>Does Heroku know which port to listen on? Check you used <code>app.listen(process.env.PORT || 3000)</code> in your app.js file.</li><li>Do your static files have any errors in them? Check them by running locally and seeing if there are any bugs.</li></ul><p>Thanks for reading - if you made it this far, you might want to <a href="http://lorem-ipsum-demo.herokuapp.com/">checkout the finished version</a> of the demo project.</p>
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
