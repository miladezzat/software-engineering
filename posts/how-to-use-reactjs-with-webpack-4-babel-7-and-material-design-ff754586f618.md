---
card: "https://cdn-media-1.freecodecamp.org/images/1*3XcVWZvLKvLukdJ2zbDDpQ.jpeg"
tags: [JavaScript]
description: by Nazare Emanuel Ioan
author: "Milad E. Fahmy"
title: "How to use ReactJS with Webpack 4, Babel 7, and Material Design"
created: "2021-08-15T19:41:09+02:00"
modified: "2021-08-15T19:41:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-webpack tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to use ReactJS with Webpack 4, Babel 7, and Material Design</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*3XcVWZvLKvLukdJ2zbDDpQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*3XcVWZvLKvLukdJ2zbDDpQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*3XcVWZvLKvLukdJ2zbDDpQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*3XcVWZvLKvLukdJ2zbDDpQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*3XcVWZvLKvLukdJ2zbDDpQ.jpeg" alt="How to use ReactJS with Webpack 4, Babel 7, and Material Design">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Nazare Emanuel Ioan</p>
<h1 id="how-to-use-reactjs-with-webpack-4-babel-7-and-material-design">How to use ReactJS with Webpack 4, Babel 7, and Material Design</h1>
<p>For the past year and some, I have been working with React at <a href="https://www.creative-tim.com/" rel="noopener">Creative Tim</a>. I have been using <a href="https://github.com/facebook/create-react-app" rel="noopener">create-react-app</a> for developing some nice products. There have been a lot of clients asking how can someone migrate our product templates on Webpack.</p>
<p>So after a number of requests, we created this little tutorial about how to start using <a href="https://reactjs.org/tutorial/tutorial.html" rel="noopener">React</a> with <a href="https://webpack.js.org/concepts/" rel="noopener">Webpack 4</a> and <a href="https://babeljs.io/docs/en" rel="noopener">Babel 7</a>. At the end of the tutorial, I am going to show you guys how to add <a href="https://www.creative-tim.com/product/material-dashboard-react" rel="noopener">Material Dashboard React</a> on top of the newly created app.</p>
<p>Before we get started please make sure you have the latest versions of <a href="https://www.npmjs.com/get-npm" rel="noopener">npm</a> and <a href="https://nodejs.org/en/" rel="noopener">Nodejs</a> installed globally on your machine. At the time of writing this post, the latest versions were 6.4.1 for npm and 8.12.0 (lts) for Nodejs on my machine.</p>
<h3 id="creating-a-new-project-folder-with-package-json">Creating a new project folder with package.json</h3>
<p>First things first, let’s create a <strong>new folder</strong> for our new <strong>app</strong> and enter it:</p><pre><code>mkdir react-webpack-babel-tutorialcd react-webpack-babel-tutorial</code></pre>
<p>Now that we have created <strong>the folder</strong> in which we are going to develop the <strong>app</strong>, we need to add a <strong>package.json</strong> file to it. We can do this two ways and you should choose one of them:</p>
<ol>
<li>just create the <strong>package.json</strong> file without any other configuration:</li>
</ol><pre><code>npm init -y</code></pre>
<p>As you can see, the <strong>package.json</strong> file has been created with some very basic information in it.</p>
<figcaption><strong>npm init -y</strong> output</figcaption>
</figure>
<p>2. create the <strong>package.json</strong> file with some extra config settings</p><pre><code>npm init</code></pre>
<p>I’ve added some stuff to our newly created <strong>package.json</strong> file, such as some nice <strong>keywords</strong>, <strong>a repo</strong> and so on…</p>
<figcaption><strong>npm init </strong>output</figcaption>
</figure>
<p>After this, let’s add an <strong>index.html</strong> and <strong>index.js</strong> files to our new project folder, inside an <strong>src</strong> folder.</p>
<ol>
<li>Linux/MacOS commands</li>
</ol><pre><code>mkdir srctouch src/index.htmltouch src/index.js</code></pre>
<p>2. Windows commands</p><pre><code>mkdir srcecho "" &gt; src\index.htmlecho "" &gt; src\index.js</code></pre>
<p>After this, let’s add the following template inside the <strong>index.html.</strong></p><pre><code>&lt;!DOCTYPE html&gt;&lt;html lang="en"&gt;  &lt;head&gt;    &lt;meta charset="utf-8"&gt;    &lt;meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"&gt;    &lt;meta name="theme-color" content="#000000"&gt;    &lt;title&gt;React Tutorial&lt;/title&gt;  &lt;/head&gt;  &lt;body&gt;    &lt;noscript&gt;      You need to enable JavaScript to run this app.    &lt;/noscript&gt;    &lt;div id="root"&gt;&lt;/div&gt;    &lt;!--      This HTML file is a template.      If you open it directly in the browser, you will see an empty page.      You can add webfonts, meta tags, or analytics to this file.      The build step will place the bundled scripts into the &lt;body&gt; tag.    --&gt;  &lt;/body&gt;&lt;/html&gt;</code></pre>
<p>Let’s add something inside the <strong>index.js</strong> just for the sake of some showcase that we are going to see a bit further down.</p><pre><code>(function () {  console.log("hey mister");}());</code></pre>
<p>And this is what we’ve got so far:</p>
<figcaption>folder project structure</figcaption>
</figure>
<h3 id="adding-webpack-to-the-project">Adding Webpack to the project</h3>
<p>Let’s start adding all the <strong>Webpack</strong> packages that we are going to need. We are going to install them as <strong>devDependencies</strong> since they will be only used in development mode.</p><pre><code>npm install --save-dev webpack webpack-cli webpack-dev-server</code></pre>
<ul>
<li><a href="https://www.npmjs.com/package/webpack" rel="noopener"><strong>webpack</strong></a><br>- used to configure our new app<br>- at the time of this post, the version was <strong><em>4.19.0</em></strong></li>
<li><a href="https://www.npmjs.com/package/webpack-cli" rel="noopener"><strong>webpack-cli</strong></a><br>- used so that we can use Webpack in the command line<br>- at the time of this post, the version was <strong><em>3.1.0</em></strong></li>
<li><a href="https://www.npmjs.com/package/webpack-dev-server" rel="noopener"><strong>webpack-dev-server</strong></a><br>- used so that when we make a change to a file inside our new app, we won’t need to refresh the page. It refreshes the browser page automatically every time we change a file in our app<br>- as its name says, it’s a server that is working non-stop<br>- at the time of this post, the version was <strong><em>3.1.8</em></strong></li>
</ul>
<figcaption><strong>npm install — save-dev webpack webpack-cli webpack-dev-server</strong> output</figcaption>
</figure>
<p>If we take a look inside the <strong>package.json</strong> file, we are going to see that these three packages were added to this file like so:</p><pre><code>"devDependencies": {  "webpack": "^4.19.0",  "webpack-cli": "^3.1.0",  "webpack-dev-server": "^3.1.8"}</code></pre>
<p>I’m going to go ahead and delete the <strong><em>^</em></strong> (caret) from each version. This is because I can’t tell whether the next version of these plugins is still going to work with what I am building. I think this is something that should be common sense. When creating a new app, use the available versions and then, maybe make some updates to newer versions. You might not know what a new version will break in your app.</p>
<p>As you will see, the installation of these plugins made some changes to our project folder. It added <strong>node_modules</strong> folder and <strong>package-lock.json</strong> to it.</p>
<figcaption>project folder after installing <strong>webpack</strong></figcaption>
</figure>
<p>Now, we need to add a new file to our project, the config file for <strong>Webpack</strong> called <strong>webpack.config.js</strong>:</p>
<ol>
<li>Linux/MacOS command</li>
</ol><pre><code>touch webpack.config.js</code></pre>
<p>2. Windows command</p><pre><code>echo "" &gt; webpack.config.js</code></pre>
<p>Or you can simply manually create the new file if you do not want to use the command line.</p>
<p>Before we go ahead and start messing with the <strong>Webpack config</strong> file, let’s first install some stuff that we are going to need in our app.</p>
<p>First, we are going to work with some paths inside the Webpack config file. Let’s install <strong>path</strong> in our project as a <strong>devDependency.</strong></p><pre><code>npm install --save-dev path</code></pre>
<p>Also, since we don’t want to manually inject the <strong>index.js</strong> file inside the HTML one, we are going to need a plugin called <strong>html-webpack-plugin. This plugin</strong> will inject the <strong>index.js</strong> inside the HTML file without any manual operation.</p><pre><code>npm install --save-dev html-webpack-plugin</code></pre>
<p>Once again, I am going to edit my <strong>package.json</strong> file and delete all the <strong>^</strong> (caret) occurrences from it.</p>
<p>One more edit that we are going to make to our <strong>package.json</strong> is to add some new scripts inside the <strong>scripts</strong> object, after the <strong>test</strong> script (See the second example below).</p><pre><code>"webpack": "webpack","start": "webpack-dev-server --open"</code></pre>
<p>This is what your <strong>package.json</strong> should look like at this point:</p><pre><code>{  "name": "react-webpack-babel-tutorial",  "version": "1.0.0",  "description": "This is a Tutorial to showcase the usage of React with Webpack and Babel",  "main": "index.js",  "scripts": {    "test": "echo \"Error: no test specified\" &amp;&amp; exit 1",    "webpack": "webpack",    "start": "webpack-dev-server --open"  },  "repository": {    "type": "git",    "url": "git+https://github.com/creativetimofficial/react-webpack-babel-tutorial.git"  },  "keywords": [    "react",    "webpack",    "babel",    "creative-tim",    "material-design"  ],  "author": "Creative Tim &amp;lt;hello@creative-tim.com&gt; (https://www.creative-tim.com/)",  "license": "MIT",  "bugs": {    "url": "https://github.com/creativetimofficial/react-webpack-babel-tutorial/issues"  },  "homepage": "https://github.com/creativetimofficial/react-webpack-babel-tutorial#readme",  "devDependencies": {    "html-webpack-plugin": "3.2.0",    "path": "0.12.7",    "webpack": "4.19.0",    "webpack-cli": "3.1.0",    "webpack-dev-server": "3.1.8"  }}</code></pre>
<p>Let’s go ahead and run these commands one by one and see what happens.</p><pre><code>npm run webpack</code></pre>
<p><strong>Webpack</strong> will automatically take the <strong>src/index.js</strong> file, compile it, and output it inside <strong>dist/main.js</strong> and will minify that code. This is because we haven’t yet configured the <strong>Webpack config</strong> file. Also, since we haven’t configured the file, we are going to have some warnings in our console.</p>
<figcaption><strong>npm run webpack</strong> output</figcaption>
</figure>
<p>If we run the other command</p><pre><code>npm start</code></pre>
<p><strong>webpack-dev-server</strong> will automatically start a server and open the default browser with this server. But once again, since we do not have our <strong>webpack.config.js</strong> file configured, the output will not be the expected one.</p>
<figcaption>npm start output</figcaption>
</figure>
<p>If you want to stop the server, just press at the same time the <strong>CTRL</strong> + <strong>C</strong> keys while in the command line.</p>
<p>Let’s add the following template inside our <strong>Webpack config</strong> file:</p><pre><code>const path = require('path');const HtmlWebpackPlugin = require('html-webpack-plugin');module.exports = {  entry: path.join(__dirname,'src','index.js'),  output: {    path: path.join(__dirname,'build'),    filename: 'index.bundle.js'  },  mode: process.env.NODE_ENV || 'development',  resolve: {    modules: [path.resolve(__dirname, 'src'), 'node_modules']  },  devServer: {    contentBase: path.join(__dirname,'src')  },  plugins: [    new HtmlWebpackPlugin({      template: path.join(__dirname,'src','index.html')    })  ]};</code></pre>
<ul>
<li><strong>entry</strong> and <strong>output</strong><br> — these are used to tell our server what has to be compiled and from where (<em>entry: path.join(__dirname,’src’,’index.js’),</em>). It also tells where to put the outputted compiled version (<em>output</em> — the folder and the filename)</li>
<li><strong>mode</strong><br> — this is the mode of our output. We are setting it to ‘<em>development</em>’. If in the scripts we specify the <strong>NODE_ENV </strong>variable, it will take that one instead. See the below example on how to use <strong>NODE_ENV </strong><em>(note that the below changes will not be made inside the <strong>package.json</strong> file in this tutorial, it is just an example for you to see how it works)</em></li>
</ul><pre><code>"webpack": "NODE_ENV=production webpack",</code></pre>
<ul>
<li><strong>resolve</strong><br> — this is used so that we can import anything from <strong>src</strong> folder in relative paths instead of absolute ones. It is the same for the <strong>node_modules.</strong> We can import anything from node_modules directly without absolute paths</li>
<li><strong>devServer</strong><br> — this tells the <strong>webpack-dev-server</strong> what files are needed to be served. Everything from our <strong>src</strong> folder needs to be served (outputted) in the browser</li>
<li><strong>plugins</strong><br> — here we set what plugins we need in our app. As of this moment we only need the <strong>html-webpack-plugin</strong> which tells the server that the <strong>index.bundle.js</strong> should be injected (or added if you will) to our <strong>index.html</strong> file</li>
</ul>
<p>If we now run the earlier commands we will see some differences.</p><pre><code>npm run webpack</code></pre>
<figcaption><strong>npm run webpack</strong> output with <strong>webpack.config.js</strong></figcaption>
</figure>
<p>We’ve changed where the output should be (from <strong>dist</strong> folder to <strong>build</strong> folder). By changing the <strong>mode</strong> of <strong>Webpack</strong>, now the code has a different look. It is not <strong>minified</strong> as the last time with no <strong>config</strong>.</p><pre><code>npm start</code></pre>
<figcaption><strong>npm start</strong> output with <strong>webpack.config.js</strong></figcaption>
</figure>
<p>The <strong>webpack-dev-server</strong> took everything from the <strong>src</strong> folder and outputted it to our browser.</p>
<p>We are on the right path, but we’ve only added Webpack to our project. Where are React and Babel? Well, that is what we are going to do next.</p>
<h3 id="react-babel-and-some-nice-loaders-for-styles">React, Babel and some nice loaders for styles</h3>
<p>Add <strong>React</strong> and <strong>ReactDOM</strong> to our project as <strong>normal dependencies</strong>.</p><pre><code>npm install --save react react-dom</code></pre>
<p>At this moment in our development, if we were to add <strong>React</strong> code inside our JS file, <strong>Webpack</strong> will give us an error. It doesn’t know how to compile <strong>React</strong> inside the <strong>bundle.js</strong> file.</p>
<p>Let’s modify the <strong>index.js</strong> file as follows:</p><pre><code>import React from "react";import ReactDOM from "react-dom";let HelloWorld = () =&gt; {  return &lt;h1&gt;Hello there World!&lt;/h1&gt;}ReactDOM.render(  &lt;HelloWorld/&gt;,  document.getElementById("root"));</code></pre>
<p>And after that let’s start the server again.</p><pre><code>npm start</code></pre>
<p>And this is the error:</p>
<figcaption><strong>webpack</strong> error for not having appropriate <strong>loaders</strong> for <strong>react</strong></figcaption>
</figure>
<p>So this is where <strong>Babel</strong> comes to our aid. <strong>Babel</strong> will tell <strong>Webpack</strong> how to compile our <strong>React</strong> code.</p>
<p>Let’s go ahead and add a bunch of Babel packages to our app as <strong>devDependencies</strong>.</p><pre><code>npm install --save-dev @babel/core @babel/node @babel/preset-env @babel/preset-react babel-loader</code></pre>
<ul>
<li><strong>@babel/core</strong><br> — this is used to compile <strong>ES6</strong> and above into <strong>ES5</strong></li>
<li><strong>@babel/node</strong><br> — this is used so that we can <strong>import</strong> our plugins and packages inside the <strong>webpack.config.js</strong> rather than <strong>require</strong> them (it’s just something that I like, and maybe you’ll like it too)</li>
<li><strong>@babel/preset-env</strong><br> — this will determinate which transformations or plugins to use and polyfills (i.e it provides modern functionality on older browsers that do not natively support it) based on the browser matrix you want to support</li>
<li><strong>@babel/preset-react</strong><br> — this is going to compile the <strong>React</strong> code into <strong>ES5</strong> code</li>
<li><strong>babel-loader</strong><br> — this is a <strong>Webpack</strong> helper that transforms your <strong>JavaScript</strong> dependencies with <strong>Babel</strong> (i.e. will transform the <strong>import</strong> statements into <strong>require</strong> ones)</li>
</ul>
<p>Since you are probably going to need to add some styles to your project (I know that I need them), we are going to add a loader that will let us <strong>import</strong> and use <strong>CSS</strong> files and <strong>SCSS</strong> files.</p><pre><code>npm install --save-dev style-loader css-loader sass-loader node-sass</code></pre>
<ul>
<li><strong>style-loader</strong><br> — this will add to the <strong>DOM</strong> the styles (will inject a <strong>&lt;sty</strong>le&gt; tag insid<strong>e th</strong>e HTML file)</li>
<li><strong>css-loader</strong><br> — will let us import <strong>CSS</strong> files into our project</li>
<li><strong>sass-loader</strong><br> — will let us import <strong>SCSS</strong> files into our project</li>
<li><strong>node-sass</strong><br> — will compile the <strong>SCSS</strong> files into normal <strong>CSS</strong> files</li>
</ul>
<p>We are going to create a new <strong>SCSS</strong> file and add it to our folders.</p>
<ol>
<li>Linux/MacOS command</li>
</ol><pre><code>touch src/index.scss</code></pre>
<p>2. Windows command</p><pre><code>echo "" &gt; src/index.scss</code></pre>
<p>And also add some nice styles to it.</p><pre><code>body {  div#root{    background-color: #222;    color: #8EE4AF;  }}</code></pre>
<p>And change our <strong>index.js</strong> by adding an import for the <strong>SCSS</strong> file.</p><pre><code>import React from "react";import ReactDOM from "react-dom";</code></pre><pre><code>// this line is new// we now have some nice styles on our react appimport "index.scss";</code></pre><pre><code>let HelloWorld = () =&gt; {  return &lt;h1&gt;Hello there World!&lt;/h1&gt;}</code></pre><pre><code>ReactDOM.render(  &lt;HelloWorld/&gt;,  document.getElementById("root"));</code></pre>
<p>Don’t forget to delete the carets (^) from <strong>package.json</strong>.</p>
<p>This is how your <strong>package.json</strong> should look like:</p><pre><code>{  "name": "react-webpack-babel-tutorial",  "version": "1.0.0",  "description": "This is a Tutorial to showcase the usage of React with Webpack and Babel",  "main": "index.js",  "scripts": {    "test": "echo \"Error: no test specified\" &amp;&amp; exit 1",    "webpack": "webpack",    "start": "webpack-dev-server --open"  },  "repository": {    "type": "git",    "url": "git+https://github.com/creativetimofficial/react-webpack-babel-tutorial.git"  },  "keywords": [    "react",    "webpack",    "babel",    "creative-tim",    "material-design"  ],  "author": "Creative Tim &amp;lt;hello@creative-tim.com&gt; (https://www.creative-tim.com/)",  "license": "MIT",  "bugs": {    "url": "https://github.com/creativetimofficial/react-webpack-babel-tutorial/issues"  },  "homepage": "https://github.com/creativetimofficial/react-webpack-babel-tutorial#readme",  "devDependencies": {    "@babel/core": "7.0.1",    "@babel/node": "7.0.0",    "@babel/preset-env": "7.0.0",    "@babel/preset-react": "7.0.0",    "babel-loader": "8.0.2",    "css-loader": "1.0.0",    "html-webpack-plugin": "3.2.0",    "node-sass": "4.9.3",    "path": "0.12.7",    "sass-loader": "7.1.0",    "style-loader": "0.23.0",    "webpack": "4.19.0",    "webpack-cli": "3.1.0",    "webpack-dev-server": "3.1.8"  },  "dependencies": {    "react": "16.5.1",    "react-dom": "16.5.1"  }}</code></pre>
<p>If we run any of the above commands again, the error will still persist. We haven’t yet told <strong>Webpack</strong> that it should use <strong>Babel</strong> and the style loaders to compile our <strong>React</strong> and <strong>SCSS</strong> code.</p>
<p>Next thing to do is add a configuration file for <strong>Babel</strong>. For this we need to create a file named <strong>.babelrc</strong> in which we will configure <strong>Babel</strong>.</p>
<p>I’ve heard that you can add the configuration for <strong>Babel</strong> directly in the <strong>webpack.config.js</strong> file. For this, you can take a look at the <a href="https://github.com/babel/babel-loader" rel="noopener">official babel-loader docs</a>. As far as I am concerned, I think it’s best to have the <strong>Babel</strong> config in its own file. That way you do not overcrowd your <strong>Webpack</strong> config.</p>
<p>So, let’s run in the command line the following:</p>
<ol>
<li>Linux/MacOS command</li>
</ol><pre><code>touch .babelrc</code></pre>
<p>2. Windows command</p><pre><code>echo "" &gt; .babelrc</code></pre>
<p>And add the following code inside <strong>.babelrc</strong> so that <strong>babel-loader</strong> will know what to use to compile the code:</p><pre><code>{  "presets": [    "@babel/env",    "@babel/react"  ]}</code></pre>
<p>After these steps, we will need to add something to our project so we can import all sorts of files such as images. We will also need to add a plugin that will let us work with classes and much more. Let us add class properties in our classes. Basically, it will let us work with <a href="https://en.wikipedia.org/wiki/Object-oriented_programming" rel="noopener">Object Oriented Programming</a> — nice.</p><pre><code>npm install --save-dev file-loader @babel/plugin-proposal-class-properties</code></pre>
<p>Now that we have done this, we need to make some changes inside <strong>webpack.config.js</strong> so that <strong>Webpack</strong> will now use <strong>Babel</strong>. We’ll also configure <strong>Webpack</strong> to listen for <strong>style</strong> files and we are going to change the <strong>require</strong> statements to <strong>import</strong> ones.</p>
<p>So this being said, let’s change our <strong>webpack.config.js</strong> to the following (I’ve also added some comments, maybe they will help you):</p><pre><code>// old// const path = require('path');// const HtmlWebpackPlugin = require('html-webpack-plugin');// newimport path from 'path';import HtmlWebpackPlugin from 'html-webpack-plugin';module.exports = {  entry: path.join(__dirname,'src','index.js'),  output: {    path: path.join(__dirname,'build'),    filename: 'index.bundle.js'  },  mode: process.env.NODE_ENV || 'development',  resolve: {    modules: [path.resolve(__dirname, 'src'), 'node_modules']  },  devServer: {    contentBase: path.join(__dirname,'src')  },  module: {    rules: [      {        // this is so that we can compile any React,        // ES6 and above into normal ES5 syntax        test: /\.(js|jsx)$/,        // we do not want anything from node_modules to be compiled        exclude: /node_modules/,        use: ['babel-loader']      },      {        test: /\.(css|scss)$/,        use: [          "style-loader", // creates style nodes from JS strings          "css-loader", // translates CSS into CommonJS          "sass-loader" // compiles Sass to CSS, using Node Sass by default        ]      },      {        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,        loaders: ['file-loader']      }    ]  },  plugins: [    new HtmlWebpackPlugin({      template: path.join(__dirname,'src','index.html')    })  ]};</code></pre>
<p>There’s one more change we need to do to the <strong>package.json</strong> file. We need to tell our scripts that inside the config files of <strong>Webpack</strong>, we use <strong>import</strong> instead of <strong>require</strong> statements. Else it will give us an error that it doesn’t know what <strong>import</strong> stands for.</p><pre><code>{  "name": "react-webpack-babel-tutorial",  "version": "1.0.0",  "description": "This is a Tutorial to showcase the usage of React with Webpack and Babel",  "main": "index.js",  "scripts": {    "test": "echo \"Error: no test specified\" &amp;&amp; exit 1",    "webpack": "babel-node ./node_modules/webpack/bin/webpack",    "start": "babel-node ./node_modules/webpack-dev-server/bin/webpack-dev-server --open"  },  "repository": {    "type": "git",    "url": "git+https://github.com/creativetimofficial/react-webpack-babel-tutorial.git"  },  "keywords": [    "react",    "webpack",    "babel",    "creative-tim",    "material-design"  ],  "author": "Creative Tim &lt;hello@creative-tim.com&gt; (https://www.creative-tim.com/)",  "license": "MIT",  "bugs": {    "url": "https://github.com/creativetimofficial/react-webpack-babel-tutorial/issues"  },  "homepage": "https://github.com/creativetimofficial/react-webpack-babel-tutorial#readme",  "devDependencies": {    "@babel/core": "7.0.1",    "@babel/node": "7.0.0",    "@babel/plugin-proposal-class-properties": "7.0.0",    "@babel/preset-env": "7.0.0",    "@babel/preset-react": "7.0.0",    "babel-loader": "8.0.2",    "css-loader": "1.0.0",    "file-loader": "2.0.0",    "html-webpack-plugin": "3.2.0",    "node-sass": "4.9.3",    "path": "0.12.7",    "sass-loader": "7.1.0",    "style-loader": "0.23.0",    "webpack": "4.19.0",    "webpack-cli": "3.1.0",    "webpack-dev-server": "3.1.8"  },  "dependencies": {    "react": "16.5.1",    "react-dom": "16.5.1"  }}</code></pre>
<p>Another thing that we will have to still add is the <strong>@babel/plugin-proposal-class-properties </strong>to the <strong>.babelrc</strong> file. Babel will know how to deal with class properties.</p><pre><code>{  "presets": [    "@babel/env",    "@babel/react"  ],  "plugins": [    "@babel/plugin-proposal-class-properties"  ]}</code></pre>
<p>Now we are done. We can run either one of the above commands and it should not give us any errors. Let’s see them in action.</p><pre><code>npm run webpack</code></pre>
<figcaption><strong>npm run webpack</strong> with no errors</figcaption>
</figure>
<p>And now let’s see the main script of our app.</p><pre><code>npm start</code></pre>
<figcaption><strong>npm start</strong> output</figcaption>
</figure>
<h3 id="add-material-design-to-our-new-react-with-webpack-and-babel-project">Add Material Design to our new React with Webpack and Babel project</h3>
<p>As I’ve told you at the beginning of this post, we are not going to create from scratch styles for Material Design. That would require a lot of work. We don’t have time for that.</p>
<p>Instead, we are going to add a nice product that implements <a href="https://material.io/design/" rel="noopener">Google’s Material Design</a> with some minor touches from the <a href="https://www.creative-tim.com/presentation" rel="noopener">Creative Tim staff</a>. We are going to add <a href="https://www.creative-tim.com/product/material-dashboard-react" rel="noopener">Material Dashboard React</a> to it.</p>
<p>First things first, you need to get the product. Here are a few ways of getting the product:</p>
<ul>
<li>Clone the repo inside another folder:</li>
</ul><pre><code>git clone https://github.com/creativetimofficial/material-dashboard-react.git</code></pre>
<ul>
<li><a href="https://github.com/creativetimofficial/material-dashboard-react/archive/master.zip" rel="noopener">Download from Github</a></li>
<li><a href="https://www.creative-tim.com/product/material-dashboard-react" rel="noopener">Download from Creative Tim</a></li>
</ul>
<p>Ok, so now we have both projects — Material Dashboard React and our newly created one with <strong>Webpack</strong> and <strong>Babel — </strong>with <strong>React</strong>.</p>
<figcaption><strong>material-dashboard-react</strong> and <strong>react-webpack-babel-tutorial</strong></figcaption>
</figure>
<p>Now, we can’t simply copy the src folder from <strong>Material Dashboard React</strong> into our new project. That will give us a lot of errors. Such as errors for missing dependencies, module not found, you get the point, a lot of errors.</p>
<p>So, I suggest that we start with adding the dependencies from <strong>Material Dashboard React</strong>’s <strong>package.json</strong> to our <strong>package.json</strong>. We do not need all the dependencies from <strong>Material Dashboard React’s </strong>packages, since we have built our own server using <strong>Webpack.</strong> We have added other style loaders beyond what the product has.</p>
<p>So this being said, we need the following:</p><pre><code>npm install --save @material-ui/core@3.1.0 @material-ui/icons@3.0.1 @types/googlemaps@3.30.11 @types/markerclustererplus@2.1.33 chartist@0.10.1 classnames@2.2.6 perfect-scrollbar@1.4.0 react-chartist@0.13.1 react-google-maps@9.4.5 react-router-dom@4.3.1 react-swipeable-views@0.12.15</code></pre>
<p>We are not going through all of them. They can be found on <a href="https://www.npmjs.com/" rel="noopener">npmjs.com</a> with all the details and their own documentation.</p>
<p>Once again, we go inside the <strong>package.json</strong> file and delete the carets (^) from the packages that we just installed.</p>
<p>Ok, we are almost done. We are going to copy all the contents of the <strong>src</strong> folder from <strong>Material Dashboard React</strong> inside our project’s <strong>src</strong> folder and override the <strong>index.js</strong> file. But keep it in the <strong>index.html</strong> file.</p>
<figcaption>Folder structure before and after adding the Material Dashboard React <strong>src</strong> folder</figcaption>
</figure>
<p>Now we need to add some styles and fonts cdns inside our <strong>index.html</strong>.</p><pre><code>&lt;!DOCTYPE html&gt;&lt;html lang="en"&gt;  &lt;head&gt;    &lt;meta charset="utf-8"&gt;    &lt;meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"&gt;    &lt;meta name="theme-color" content="#000000"&gt;    &lt;link rel="stylesheet" href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css"&gt;    &lt;script src="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"&gt;&lt;/script&gt;    &lt;link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"&gt;    &lt;link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"&gt;    &lt;title&gt;React Tutorial&lt;/title&gt;  &lt;/head&gt;  &lt;body&gt;    &lt;noscript&gt;      You need to enable JavaScript to run this app.    &lt;/noscript&gt;    &lt;div id="root"&gt;&lt;/div&gt;    &lt;!--      This HTML file is a template.      If you open it directly in the browser, you will see an empty page.      You can add webfonts, meta tags, or analytics to this file.      The build step will place the bundled scripts into the &lt;body&gt; tag.    --&gt;  &lt;/body&gt;&lt;/html&gt;</code></pre>
<p>And we are almost there. We still have a small problem. When we refresh the page, we have an error <strong>Cannot GET /dashboard<em>. </em></strong>If we navigate to another page we will get, for example, <strong>Cannot GET /user</strong> and so on. So basically, our routes do not work. We need to make some changes inside either <strong>src/index.js</strong> or inside our <strong>webpack.config.js</strong>.</p>
<p>I will choose the first option since it is pretty straightforward and easy to understand.</p>
<p>We navigate inside the new index.js and we change the history type. We put <strong>createHashHistory() </strong>instead of <strong>createBrowserHistory()</strong>.</p>
<p>This will allow us to refresh the page without any other errors. Now we are done.</p><pre><code>import React from "react";import ReactDOM from "react-dom";import { createHashHistory } from "history";import { Router, Route, Switch } from "react-router-dom";import "assets/css/material-dashboard-react.css?v=1.5.0";import indexRoutes from "routes/index.jsx";const hist = createHashHistory();ReactDOM.render(  &lt;Router history={hist}&gt;    &lt;Switch&gt;      {indexRoutes.map((prop, key) =&gt; {        return &lt;Route path={prop.path} component={prop.component} key={key} /&gt;;      })}    &lt;/Switch&gt;  &lt;/Router&gt;,  document.getElementById("root"));</code></pre>
<p>I really hope you’ve liked this tutorial and I am very keen on hearing your thoughts about it. Just give this thread a comment and I’ll be more than happy to reply.</p>
<p>Special thanks should also go to <a href="https://pinglinh.com/" rel="noopener">Linh Nguyen My</a> for her <a href="https://medium.freecodecamp.org/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75" rel="noopener">tutorial</a> which has given me some much needed understanding on <strong>Webpack</strong>.</p>
<p>Useful links:</p>
<ul>
<li>Get the code for this tutorial from <a href="https://github.com/creativetimofficial/react-webpack-babel-md-tutorial" rel="noopener">Github</a></li>
<li>Read more about ReactJS on <a href="https://reactjs.org/" rel="noopener">their official website</a></li>
<li>Read more about <a href="https://webpack.js.org/" rel="noopener">Webpack here</a></li>
<li>Read more about Babel on <a href="https://babeljs.io/" rel="noopener">this link here</a></li>
<li>Read more about <a href="https://material.io/" rel="noopener">Material Design</a></li>
<li>Check out our platform to see <a href="https://www.creative-tim.com/" rel="noopener">what we are doing</a> and <a href="https://www.creative-tim.com/presentation" rel="noopener">who we are</a></li>
<li>Get Material Dashboard React from <a href="https://www.creative-tim.com/product/material-dashboard-react" rel="noopener">www.creative-tim.com</a> or from <a href="https://github.com/creativetimofficial/material-dashboard-react" rel="noopener">Github</a></li>
<li>Read more about <a href="https://material-ui.com/" rel="noopener">Material-UI</a>, the core of Material Dashboard React</li>
</ul>
<p>Find me on:</p>
<ul>
<li>Email: <a href="mailto:manu@creative-tim.com" rel="noopener">manu@creative-tim.com</a></li>
<li>Facebook: <a href="https://www.facebook.com/NazareEmanuel" rel="noopener">https://www.facebook.com/NazareEmanuel</a></li>
<li>Instagram: <a href="https://www.instagram.com/manu.nazare/" rel="noopener">https://www.instagram.com/manu.nazare/</a></li>
</ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
