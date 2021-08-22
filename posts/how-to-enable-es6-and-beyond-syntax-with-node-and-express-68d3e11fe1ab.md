---
card: "https://cdn-media-1.freecodecamp.org/images/1*VAo90seDRpFYq7utRkPEJg.png"
tags: [JavaScript]
description: Have you ever tried to write front-end apps using ES6 syntax,
author: "Milad E. Fahmy"
title: "How to enable ES6 (and beyond) syntax with Node and Express"
created: "2021-08-15T19:31:11+02:00"
modified: "2021-08-15T19:31:11+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-tech tag-programming tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">How to enable ES6 (and beyond) syntax with Node and Express</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*VAo90seDRpFYq7utRkPEJg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*VAo90seDRpFYq7utRkPEJg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*VAo90seDRpFYq7utRkPEJg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*VAo90seDRpFYq7utRkPEJg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*VAo90seDRpFYq7utRkPEJg.png" alt="How to enable ES6 (and beyond) syntax with Node and Express">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Have you ever tried to write front-end apps using ES6 syntax, but then &nbsp;when you decided to learn back-end development with Node.js and Express, &nbsp;you realized that you can’t use stuff like <code>import from</code> and &nbsp;<code>export default</code>? &nbsp;If so, you came to the right place! This is step by step guide on how &nbsp;to configure your dev and prod environments, setup scripts, and as a &nbsp;bonus we’ll learn how to add tests!</p>
<h3 id="table-of-contents-summary-of-topics">Table of Contents / Summary of topics</h3>
<ul>
<li><a href="#how-does-it-work-a-high-level-view-of-what-we-need">How does it work?</a></li>
<li><a href="#prerequisites">Prerequisites</a></li>
<li><a href="#installing-express">Installing express</a></li>
<li><a href="#setting-up-scripts">Setting up scripts</a></li>
<li><a href="#bonus-add-tests-">Bonus</a></li>
<li><a href="#tl-dr">TL;DR</a></li>
</ul>
<h3 id="how-does-it-work-a-high-level-view-of-what-we-need">How does it work? A high level view of what we need</h3>
<p>To enable a front-end development-like experience while developing back-end apps, here’s a high level view of the processes happening to your project.</p>
<h4 id="code-transpiler-from-es6-to-es5">Code Transpiler from ES6+ to ES5</h4>
<p>We need a package that translates ES6 and above syntax to ES5 code. ES5 code is the JS syntax style that is readable to node.js, such as <code>module.exports</code> or <code>var module = require('module')</code> . Note that in today’s time, almost 99% of ES6+ syntax can be used in Node.js. This is where the package called <a href="https://babeljs.io/" rel="noopener"><em>babel</em></a> shines.</p>
<p>Babel takes a js file, converts the code in it, and outputs into a new file.</p>
<h4 id="script-that-removes-files">Script that removes files</h4>
<p>Whenever we change something in our code, we feed it to the transpiler, and it outputs a fresh copy every-time. That’s why we need a script that removes files before the fresh transpiled copy enters. And for that, there’s an existing package called <a href="https://www.npmjs.com/package/rimraf" rel="noopener">rimraf</a>. Rimraf deletes files. We’ll demonstrate that later.</p>
<h4 id="watcher-of-file-changes">Watcher of file changes</h4>
<p>When coding in Node.js, automatic restart of our server doesn’t come out of the box just like when doing a project made on-top of create-react-app or vue-cli. That’s why we’ll install a package called <a href="https://www.npmjs.com/package/nodemon" rel="noopener">nodemon,</a> that executes something whenever we change a file in our code. We can leverage nodemon to restart our server every-time a file is changed.</p>
<p>So that’s the high-level view of how it works under the hood. With that, let’s start on how should we setup or project.</p>
<h3 id="prerequisites">Prerequisites</h3>
<p>Before we begin, we need some things setup first.</p>
<ol>
<li>Make sure you have Node.js and npm installed. I recommend installing their latest LTS or current stable version. You can install it via <a href="https://nodejs.org/en/download/" rel="noopener">Node.js Source</a> or <a href="https://github.com/creationix/nvm" rel="noopener">NVM</a> (Node Version Manager)</li>
<li>Basic knowledge of terminal commands. Most of the commands are in the tutorial anyway so you don’t have to worry about them.</li>
<li>Make sure you have your terminal open and your favorite text editor installed.</li>
</ol>
<p>That’s it, we’re good to go!</p>
<h3 id="installing-express">Installing Express</h3>
<p>Using the Express generator, we will create a new project with generated code, move some files, and convert some code to ES6 syntax. We need to convert it at this early stage because we need a way to verify if our ES6 code works.</p>
<h4 id="project-setup">Project Setup</h4>
<p>Run this command in your terminal. You can name <code>your-project-name</code> with the name you like. <code>--no-view</code> flag means that we won’t be using any templating engine such as handlebars, ejs, or pug, for our skeleton Express app.</p>
<p><code>npx express-generator your-project-name --no-view</code></p>
<p>After creating your app, you need to go to your app directory. For Windows Powershell and Linux terminals, use:</p>
<p><code>cd your-project-name</code></p>
<p>Next, open the text editor you like. For me, I just use VSCode so I just have my terminal and text editor open at the same time. But you can use any text editor you want.</p>
<h4 id="installing-packages-and-moving-and-deleting-files">Installing Packages and Moving and Deleting Files</h4>
<p>After we have the generated project ready, we need to <code>install</code> the dependencies and move some folders. Run this command to install Express and other packages.</p>
<p>npm install</p>
<p>While you’re waiting for the dependencies to install, follow these steps.</p>
<ul>
<li>create a <code>server/</code> folder</li>
<li>Put <code>bin/</code> , <code>app.js</code> , and <code>routes/</code> inside the <code>server/</code> folder.</li>
<li>Rename <code>www</code>, found in <code>bin</code> to <code><a href="http://www.js" rel="noopener">www.js</a></code></li>
<li>Leave <code>public/</code> folder at your project root.</li>
</ul>
<p>Your file structure will look like this:</p>
<figcaption>This is how our file structure looks like. `public/` folder is at the root, and all the `.js` files are inside `server/` folder.</figcaption>
</figure>
<p>Now, because we modified the file structure, our start server script won’t work. But we’ll fix it along the way.</p>
<h4 id="converting-to-es6-code">Converting to ES6 code</h4>
<p>Converting the generated code to ES6 is a little bit tedious, so I’ll just post the code here and feel free to copy and paste it.</p>
<p>Code for <code>bin/www.js</code>:</p>
<p>Now, because we modified the file structure, our start server script won’t work. Here’s what we’ll do to fix it. On your package.json file, rename start script to <code>server</code>found in a JSON Object called <code>"scripts"</code></p><pre><code class="language-JSON">// package.json
{
"name": "your-project-name",
// ....other details
"scripts": {
"server": "node ./server/bin/www"
}
}</code></pre>
<p>You’ll see that we changed the file path from <code>./bin/www</code>to <code>./server/bin/www</code> because we moved files to <code>server/</code>. We’ll use start script later on.</p>
<p>Try it! Try running the server by typing <code>npm run server</code> on your terminal, and go to <code>localhost:3000</code> on your browser.</p>
<h4 id="converting-the-top-level-code-to-use-es6-imports">Converting the top level code to use ES6 imports</h4>
<p>Converting the generated code to ES6 is a little bit tedious, so I’ll just post the code here and feel free to copy and paste it.</p>
<p>Code for <code>bin/www.js</code>:</p><pre><code class="language-JSON">// bin/www.js
/**
* Module dependencies.
*/
import app from '../app';
import debugLib from 'debug';
import http from 'http';
const debug = debugLib('your-project-name:server');
// ..generated code below.</code></pre>
<p>Almost all of our modifications are only at the top and bottom of the files. We are leaving other generated code as is.</p>
<p>Code for <code>routes/index.js </code>and <code>routes/users.js</code>:</p><pre><code class="language-JSON">// routes/index.js and users.js
import express from 'express';
var router = express.Router();
// ..stuff below
export default router;</code></pre>
<p>Code for <code>app.js</code>:</p><pre><code class="language-JSON">// app.js
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
import usersRouter from './routes/users';
var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
export default app;</code></pre>
<p>In <code>app.js</code> , because we left <code>public/</code> at the project root , we need to change the Express static path one folder up. Notice that the path <code>'public'</code> became <code>'../public'</code> .</p>
<p><code>app.use(express.static(path.join(__dirname, '../public')));</code></p>
<p>Okay we’re done with converting the code! Let’s setup our scripts now.</p>
<h3 id="setting-up-scripts">Setting up Scripts</h3>
<p>In setting up scripts, each script performs a different role. And we reuse each npm script. And for our development and production environments, they have a different configuration. (Almost identical, you’ll see later) That’s why we need to compose our scripts so we can use them without repeatedly typing the same stuff all over again.</p>
<h4 id="install-npm-run-all-">Install `npm-run-all`</h4>
<p>Since some terminal commands won’t work on windows cmd, we need to install a package called <code>npm-run-all</code> so this script will work for any environment. Run this command in your terminal project root.</p>
<p><code>npm install --save npm-run-all</code></p>
<h4 id="install-babel-nodemon-and-rimraf">Install babel, nodemon, and rimraf</h4>
<p>Babel is modern JavaScript transpiler. A transpiler means your modern JavaScript code will be transformed to an older format that Node.js can understand. Run this command in your terminal project root. We will be using the latest version of babel (Babel 7+).</p>
<p>Note that Nodemon is our file watcher and Rimraf is our file remover packages.</p>
<p><code>npm install --save <a href="http://twitter.com/babel/core" rel="noopener">@babel/core</a> <a href="http://twitter.com/babel/cli" rel="noopener">@babel/cli</a> <a href="http://twitter.com/babel/preset-env" rel="noopener">@babel/preset-env</a> nodemon rimraf</code></p>
<h4 id="adding-transpile-script">Adding transpile script</h4>
<p>Before babel starts converting code, we need to tell it which parts of the code to translate. Note that there are a lots of configuration available, because babel can convert a lot of JS Syntaxes for every different kinds of purpose. Luckily we don’t need to think about that because there’s an available default for that. We are using default config called as preset-env (the one we installed earlier) in our package.json file to tell Babel in which format we are transpiling the code.</p>
<p>Inside your <code>package.json</code> file, create a <code>"babel"</code> object and put this setting.</p><pre><code>// package.json
{
// .. contents above
"babel": {
"presets": ["@babel/preset-env"]
},
}</code></pre>
<p>After this setup we are now ready to test if babel really converts code. Add a script named transpile in your <code>package.json</code>:</p><pre><code>// package.json
"scripts": {
"start": "node ./server/bin/www",
"transpile": "babel ./server --out-dir dist-server",
}</code></pre>
<p>Now what happened here? First we need to run the cli command <code>babel</code> , specify the files to convert, in this case, the files in <code>server/</code> and put the transpiled contents in a different folder called <code>dist-server</code> in our project root.</p>
<p>You can test it by running this command</p>
<p><code>npm run transpile</code></p>
<p>You’ll see a new folder pop up.</p>
<figcaption>New folder popped up called dist-server because of the script we ran.</figcaption>
</figure>
<p>Yay it worked! ✅ As you can see, there’s a folder that has the same folder structure as our server folder but with converted code inside. Pretty cool right? Next step is to run try if our server is running!</p>
<h4 id="clean-script">Clean script</h4>
<p>To have a fresh copy every-time we transpile code into new files, we need a script that removes old files. Add this script to your package.json</p><pre><code>"scripts": {
"server": "node ./dist-server/bin/www",
"transpile": "babel ./server --out-dir dist-server",
"clean": "rimraf dist-server"
}</code></pre>
<p>This npm script that we made means it removes the folder <code>dist-server/</code></p>
<p>Now to combine transpile and clean, add a script called <code>build</code> , which combines the two processes.</p><pre><code>// scripts
"build": "npm-run-all clean transpile"</code></pre>
<h4 id="running-dev-script">Running dev script</h4>
<p>Now we have a build script, we need to run our dev server. We’ll add a script called <code>dev</code> in our package.json. This takes care of setting our Node Environment to “development”, removing old transpiled code, and replacing it with a new one.</p><pre><code>"scripts": {
"build": "npm-run-all clean transpile"
"server": "node ./dist-server/bin/www",
"dev": "NODE_ENV=development npm-run-all build server",
"transpile": "babel ./server --out-dir dist-server",
"clean": "rimraf dist-server"
}</code></pre>
<p>Note here that we’ve changed again the file we are running on our server script. We’re running the file-path with the transpiled code, found in <code>dist-server/</code>.</p>
<h4 id="adding-prod-scripts">Adding prod scripts</h4>
<p>If we have a dev script that sets the Node Environment to development, we have a <code>prod</code> script that sets it to “production.” We use this configuration when we are deploying. (Heroku, AWS, DigitalOcean, etc..) We’re now adding again our start script and prod script in our package.json again.</p><pre><code>"scripts": {
"start": "npm run prod"
"build": "npm-run-all clean transpile"
"server": "node ./dist-server/bin/www",
"dev": "NODE_ENV=development npm-run-all build server",
"prod": "NODE_ENV=production npm-run-all build server",
"transpile": "babel ./server --out-dir dist-server",
"clean": "rimraf dist-server"
}</code></pre>
<p>We set <code>start</code> script default to prod because start script is being used always by deployment platforms like AWS or Heroku to start a server.</p>
<p>Try either by running <code>npm start</code> or <code>npm run prod</code> .</p><pre><code>// package.json
...
"nodemonConfig": {
"exec": "npm run dev",
"watch": ["server/*", "public/*"],
"ignore": ["**/__tests__/**", "*.test.js", "*.spec.js"]
},
"scripts": {
// ... other scripts
"watch:dev": "nodemon"
}</code></pre>
<h4 id="how-about-auto-restarting-the-server-whenever-a-file-change">How about auto-restarting the server whenever a file change?</h4>
<p>One final script, in order to complete our development setup. We need to add a file watcher script that runs a command whenever a change is made in a file. Add a JSON Object named “nodemonConfig” in your package.json. This is where we store what we tell the watcher what to do when a file changes.</p>
<p>Also, add a script called <code>watch:dev</code> in your package.json</p><pre><code>// package.json
...
"nodemonConfig": {
"exec": "npm run dev",
"watch": ["server/*", "public/*"],
"ignore": ["**/__tests__/**", "*.test.js", "*.spec.js"]
},
"scripts": {
// ... other scripts
"watch:dev": "nodemon"
}</code></pre>
<p>Nodemon config contains settings related to</p>
<ul>
<li>Which command to run whenever a file changes, in our case <code>npm run dev</code></li>
<li>What folders and files to watch</li>
<li>And which files to ignore</li>
</ul>
<p>More about configuration of nodemon <a href="https://github.com/remy/nodemon#config-files" rel="noopener">here</a>.</p>
<p>Now that we have our file watcher, you can now just run <code>npm run watch:dev</code> , code, and save your file. and whenever you go to <code>localhost:3000</code> , you’ll see the changes. Try it out!</p>
<h3 id="bonus-add-tests-">Bonus: Add tests!</h3>
<p>To add tests in our project, simply install <a href="https://www.npmjs.com/package/jest" rel="noopener">Jest</a> from npm, add a few config, and add a script called <code>test</code> in our package.json</p>
<p><code>npm i -D jest</code></p>
<p>Add an object called “jest”, and a test script in your package.json</p><pre><code>// package.json
...
"jest": {
"testEnvironment": "node"
},
"scripts": {
// ..other scripts
"test": "jest"
}</code></pre>
<p>Try it out, make a file sample.test.js, write any tests, and run the script!</p>
<p><code>npm run test</code></p>
<figcaption>Sample Screenshot of running npm run test.</figcaption>
</figure>
<h3 id="tl-dr">TL;DR</h3>
<p>Here are the simplified steps for how to enable ES6 in Node.js. I’ll also include the repo so you can copy and inspect the whole code.</p>
<ul>
<li>Make a new project using <code>express your-project-name</code> terminal command.</li>
<li>Move the <code>bin/</code>, <code>routes/ </code>and <code>app</code> into a new folder called <code>src/</code> , and convert the code into ES6. Also don’t forget to rename <code>bin/www</code> to <code><a href="http://www.js" rel="noopener">www.js</a></code></li>
<li>Install all the dependencies and devDependencies</li>
</ul><pre><code>npm i npm-run-all @babel/cli @babel/core @babel/preset-env nodemon rimraf --save
npm i -D jest</code></pre>
<ul>
<li>Add these scripts to your package.json</li>
</ul><pre><code class="language-js">"scripts": {
"start": "npm run prod",
"build": "npm-run-all clean transpile",
"server": "node ./dist-server/bin/www",
"dev": "NODE_ENV=development npm-run-all build server",
"prod": "NODE_ENV=production npm-run-all build server",
"transpile": "babel ./server --out-dir dist-server",
"clean": "rimraf dist-server",
"watch:dev": "nodemon",
"test": "jest"
}</code></pre>
<ul>
<li>Put configurations for babel, nodemon, and jest in your package.json</li>
</ul><pre><code class="language-js">"nodemonConfig": {
"exec": "npm run dev",
"watch": [ "server/*", "public/*" ],
"ignore": [ "**/__tests__/**", "*.test.js", "*.spec.js" ]
},
"babel": {
"presets": [ "@babel/preset-env" ]
},
"jest": {
"testEnvironment": "node"
},</code></pre>
<ul>
<li>Test your scripts by running <code>npm run your-script-here</code></li>
<li>You’ll see the<a href="https://github.com/jcunanan05/express-es6-sample/tree/master" rel="noopener"> complete repo at my github</a></li>
</ul>
<h3 id="notes-and-disclaimers">Notes and disclaimers</h3>
<p>Note that this setup may not be proved ideal for all situations, specially for big projects. (like 1k files of code). Transpiling step and deleting might slow down your development environment. Plus, ES Modules, is almost coming to node. But, nevertheless, this is a good eductational material to understand how transipiling runs under the hood like when we are developing front-end apps :)</p>
<h3 id="conclusion">Conclusion</h3>
<p>All right! I hope you learned a lot. Thank you for reading this far.</p>
<p>Happy Coding!</p>
<p><a href="https://github.com/jcunanan05/express-es6-sample/tree/master" rel="noopener">Check the full repo here.</a></p>
<p>This article is published in freeCodecamp news.</p>
<p><a href="https://twitter.com/devJonathanC_">? Twitter</a> - <a href="https://www.freecodecamp.org/jcunanan05">? freeCodeCamp </a>- &nbsp;<a href="https://jonathancunanan.com">? Portfolio</a> - <a href="https://github.com/jcunanan05">⚛️ Github</a></p>
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
