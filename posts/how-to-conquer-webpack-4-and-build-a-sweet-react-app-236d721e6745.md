---
card: "https://cdn-media-1.freecodecamp.org/images/1*VuWmde9oMOIIIHjaRj1vDA.jpeg"
tags: [JavaScript]
description: In this article, I’ll go through how to set up a React applic
author: "Milad E. Fahmy"
title: "How to conquer Webpack 4 and build a sweet React app"
created: "2021-08-15T19:46:04+02:00"
modified: "2021-08-15T19:46:04+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-tech tag-front-end-development tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to conquer Webpack 4 and build a sweet React app</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*VuWmde9oMOIIIHjaRj1vDA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*VuWmde9oMOIIIHjaRj1vDA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*VuWmde9oMOIIIHjaRj1vDA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*VuWmde9oMOIIIHjaRj1vDA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*VuWmde9oMOIIIHjaRj1vDA.jpeg" alt="How to conquer Webpack 4 and build a sweet React app">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<blockquote>This article has been outdated with the new release for babel, kindly check the updated article “<a href="/news/how-to-combine-webpack-4-and-babel-7-to-create-a-fantastic-react-app-845797e036ff/">How to combine Webpack 4 and Babel 7 to create a fantastic React app</a>”, last updated October 13th, 2018</blockquote>
<p>In this article, I’ll go through how to set up a React application using Webpack 4. By the end of this tutorial, you’ll know on how to hot reload your application every time you press <code><strong>ctrl + s</strong></code><strong><em> </em></strong>in your editor of choice.</p>
<p>I use <a href="https://code.visualstudio.com/" rel="noopener">Visual Studio Code</a> (VS Code), and I love it. It is light weight, flexible, and the best part is it’s free. I love free. If you haven’t tried it out, give it a try.</p>
<h3 id="our-goal">Our Goal</h3>
<p>Our goal for this tutorial is to create a <a href="https://reactjs.org/" rel="noopener">React </a>app, with some cool features like async/await. I won’t be using <a href="https://reacttraining.com/react-router/web" rel="noopener">react-router version 4</a> in this tutorial, because I mainly want to focus on how to play with Webpack.</p>
<p>So by the end of this article, you will be good at:</p>
<ul>
<li>Setting up a development environment, with hot reloading using <a href="https://github.com/webpack/webpack-dev-server" rel="noopener">webpack-dev-server</a></li>
<li>Adding SCSS and HTML support in your code with webpack</li>
<li>Adding support for features like try/catch, async/await and rest operator</li>
<li>Creating a production build — optimized and ready for deployment</li>
<li>Setting up different environments in your code like stage, demo and production</li>
</ul>
<p>Guys I am telling you that if Webpack seems a bit hard, after this that won’t be the case anymore.</p>
<h3 id="development-environment">Development Environment</h3>
<h4 id="make-the-folder">Make the Folder</h4>
<p>Make a folder called <code>tutorial </code>in your directory.</p>
<h4 id="create-package-json">Create package.json</h4>
<p>Open up your terminal, and go into the <code>tutorial</code> folder.</p>
<p>Type:</p><pre><code>npm init -y</code></pre>
<p>This will create a <code><strong>package.json</strong></code><strong> </strong>file in your <code>tutorial</code> folder.</p>
<p>The file will look something like this:</p>
<figcaption>This is what your package.json file will look like initially. I am using VS Code for the purpose of this tutorial</figcaption>
</figure>
<h4 id="create-the-index-js-file">Create the index.js file</h4>
<p>I’ll create a folder called <code><strong>src </strong></code>in my <code><strong>tutorial </strong></code>folder.</p>
<p>In the <code><strong>src</strong></code> folder, I’ll create a file called <code><strong>index.js</strong></code>.</p>
<figcaption>and yeah, i’ll use star trek quotes a lot during this tutorial because IT’S AWESOME :D</figcaption>
</figure>
<h4 id="bundle-the-code">Bundle the code</h4>
<p>I know this isn’t much, but bear with me. Things will get interesting pretty soon.</p>
<p>Now in order to bundle our code, we need to set up some configurations so that Webpack can know where to bundle the code from. For that we need to install some dependencies.</p>
<p>So let’s start by typing:</p><pre><code>npm i --save-dev webpack webpack-cli webpack-dev-server @babel/core @babel/preset-env @babel/preset-react @babel/preset-stage-2 babel-loader@^8.0.0-beta</code></pre>
<p>WOW! I know that was a lot of dependencies. Let’s recap why we needed these in the first place.</p>
<p><a href="http://webpack.js.org" rel="noopener">webpack</a>: We need Webpack to bundle our code.</p>
<p><a href="https://github.com/webpack/webpack-cli" rel="noopener">webpack-cli</a>: We will be using some CLI features for Webpack to make our life easier while writing some scripts.</p>
<p><a href="https://github.com/webpack/webpack-dev-server" rel="noopener">webpack-dev-server</a>: I will create a server using the webpack-dev-server package. This is only meant to be used in the development environment, and not for production. This means while developing and working on my code, I don’t need a separate server like Node.js.</p>
<p><a href="https://github.com/babel/babel/tree/master/packages/babel-preset-env" rel="noopener">@babel/preset-env</a>: This package behaves exactly the same as @babel/preset-latest (or @babel/preset-es2015, @babel/preset-es2016, and @babel/preset-es2017 together). Cool right?</p>
<p><a href="https://github.com/babel/babel/tree/master/packages/babel-preset-react" rel="noopener">@babel/preset-react</a>:<strong> </strong>The name of the package sounds clear — this will add support for react while we bundle our code.</p>
<p><a href="https://babeljs.io/docs/plugins/preset-stage-2/" rel="noopener">@babel/preset-stage-2</a>:<strong> </strong>This will add stage-2 feature of the <a href="https://github.com/tc39" rel="noopener">Ecma TC39</a> proposal. You can read more about it <a href="https://babeljs.io/docs/plugins/preset-stage-2/" rel="noopener">here</a>.</p>
<p><a href="https://github.com/babel/babel-loader" rel="noopener">@babel/loader</a>: This is a dependency of Webpack. It allows transpiling Babel using Webpack.</p>
<p><a href="https://github.com/babel/babel/tree/master/packages/babel-core" rel="noopener">@babel/core</a><strong>: </strong>This is a dependency for the @babel/loader itself.</p>
<p>So now you know a little bit about what we installed and why.</p>
<p>Your <code>package.json</code> file should be looking something like this:</p>
<figcaption>This is what your package.json file should be looking like right now.</figcaption>
</figure>
<h4 id="create-a-babel-file">Create a Babel file</h4>
<p>We also need to add a new file called <code>.babelrc</code><strong> , </strong>so let’s create it as well.</p>
<p>In your main folder directory, create a file <code>.babelrc</code> and the following code snippet. This will help Webpack when bundling your code and converting those Sassy codes that we will write.</p>
<h4 id="set-up-webpack-4">Set up Webpack 4</h4>
<p>Okay so the boring part has been done. Let’s move onto the main part of this tutorial: setting up Webpack 4.</p>
<p>To quote from Star Trek:</p>
<blockquote>He tasks me. He <a href="http://www.youtube.com/watch?v=s0gk3AXEKUE" rel="noopener"><em>tasks</em></a> me; and I shall have him. I’ll chase him ’round the moons of Nibia and ’round the Antares maelstrom and ’round Perdition’s <em>flames</em> before I give him up.</blockquote>
<p>So let’s create a new folder called <code><strong>config</strong></code> and inside that folder let’s create a file called <code><strong>webpack.base.config.js</strong></code>.</p>
<p>The reason I call this file <code>.base</code> is because this contains all the common features we will use in our development and different production environments. Changes in this one file will reflect in all environments. Again if this doesn’t make sense now, guys, bear with me for a couple more minutes. It will start making sense.</p>
<p>Without further waiting, in your <code>config/webpack.base.config.js</code> file write these lines of code:</p>
<p>The <code>module.rules</code><strong> </strong>define the set of rules that Webpack will apply to certain file extensions.</p>
<p>In our <code>rules</code> array, we define a <code>test</code><strong> </strong>that tells Webpack what extension to use. Here I am telling Webpack to apply a certain rule to only <code>.js</code><strong> </strong>based files.</p>
<p>Next comes <code>exclude</code>. While bundling, I don’t want Webpack to transpile everything. This will become very slow, especially when I include my node_modules<strong> </strong>folder as well.</p>
<p>So I will exclude it using the <code>exclude</code><strong> </strong>property in the rule set. The last one, which is the most important one, is the <code>use.loader</code><strong> </strong>property. Here I give it the value of <code>babel-loader</code>. What babel-loader does is use our defined presets that we defined in our <code><strong>.babelrc</strong></code><strong> </strong>file to transpile all files with a <code>.js</code><strong> </strong>extension.</p>
<p><strong>So far so good, yeah? We are more then halfway there…</strong></p>
<figcaption>Even Professor Snape Applauds You. Awesome work guys, we are almost there.</figcaption>
</figure>
<p>Also one more thing: Webpack 4 sets the <code><strong>src</strong> </code>folder as the default entry point and the <code><strong>dist</strong></code> folder as the default output point of your bundled result. Cool, right?</p>
<p>Go into your <code><strong>tutorial</strong></code> folder and run this script. This will bundle all your code and run that code in the browser:</p><pre><code>Adeel@Frodo MINGW64 ~/Desktop/article/tutorial$ node_modules/.bin/webpack-dev-server --mode development --config config/webpack.base.config.js --open --hot --history-api-fallback</code></pre>
<p>The basis for this script is that it will combine all of our code in the <code><strong>src </strong></code>directory and run it on the browser at this address:</p><pre><code>http://localhost:8080/</code></pre>
<figcaption>Hmm! That’s different. This gives an error: Cannot GET /</figcaption>
</figure>
<h4 id="html">HTML</h4>
<p>So when we ran the script it compiled and opened up the browser. Now it had the code that we wrote in our <code><strong>index.js</strong></code><strong> </strong>file, but it didn’t have an .html file in which it could run it.</p>
<p>We need to add an html-webpack-plugin inside our <code><strong>webpack.base.config.js</strong></code> file, and an <code><strong>index.html</strong></code> file in our <code><strong>src</strong></code> directory.</p>
<p>First install the dependency for transpiling HTML with Webpack:</p><pre><code>npm i --save-dev html-webpack-plugin</code></pre>
<p>Your <code><strong>package.json</strong></code> file should look like this:</p>
<p>Now let’s add an HTML file in our <code><strong>src</strong></code> directory and name it <code><strong>index.html</strong></code>:</p>
<p>Our project directory should look like this now:</p>
<figcaption>Our project directory, should look something like this</figcaption>
</figure>
<p>While we are at it, let’s add that <code>html-webpack-plugin</code><strong> </strong>in our <code><strong>webpack.base.config.js</strong></code> file.</p>
<p>So we added something new to our webpack config file — did you notice? I am just messing with you. I know you did.</p>
<figcaption>Good job guys, we’re almost done.</figcaption>
</figure>
<p>Now what does this plugin do? Well, it’s very simple. Plugins, put simply, add abilities to your Webpack. You can read more about them <a href="https://webpack.js.org/plugins/" rel="noopener">here</a>.</p>
<p>Now I have added just this one plugin called <a href="https://webpack.js.org/plugins/html-webpack-plugin/" rel="noopener">html-webpack-plugin</a>.<strong> </strong>The purpose of this plugin is very simple: it creates HTML files to serve your bundle file(s).</p>
<p>Ok so let’s run that script again (fingers crossed). “I hope no errors this time,” said every developer once.</p><pre><code>Adeel@Frodo MINGW64 ~/Desktop/article/tutorial$ node_modules/.bin/webpack-dev-server --mode development --config config/webpack.base.config.js --open --hot --history-api-fallback</code></pre>
<p>This will compile and open up your browser in the available default port. Mine is:</p><pre><code>http://localhost:8080/</code></pre>
<figcaption>I simply clicked<strong> ctrl + shift + i </strong>this opened up the inspect element in my chrome browser</figcaption>
</figure>
<p><strong>Blue part:</strong> The blue part is simply where I put in my meta tags and defined a title for the app.</p>
<p><strong>Yellow part:</strong> The yellow part highlighted is the hard coded part that we wrote in our <code><strong>index.html</strong></code> file. This is where our future React app will reside.</p>
<p><strong>Red Part:</strong> The part where I underlined in red is the most interesting part. We never wrote this in our index.html file, so where did it come from?</p>
<p>Webpack is very smart. It took that file in your <code><strong>index.js </strong></code>, bundled it all up nicely, and added it up all neatly in the file called <code><strong>main.js</strong></code> . Then it injected it in our <code><strong>index.html</strong></code> file. Super Cool!</p>
<h4 id="add-react">Add React</h4>
<p>Let’s add React and get the party going. For that, we need to install some dependencies.</p>
<p>Let’s start with:</p><pre><code>npm i react react-dom --save</code></pre>
<p>Now go in your <code><strong>index.js </strong></code>file and write:</p>
<p>Let’s run that script again:</p><pre><code>Adeel@Frodo MINGW64 ~/Desktop/article/tutorial$ node_modules/.bin/webpack-dev-server --mode development --config config/webpack.base.config.js --open --hot --history-api-fallback</code></pre>
<p>This will compile and open up your browser in the default port. Mine is:</p><pre><code>http://localhost:8080/</code></pre>
<p>Wow, did you see what opened in your browser? Yes! You did! Your first Webpack configured React app.</p>
<p>Now there is still loads of stuff to do. But man oh man. Good job!</p>
<figcaption>This is our react app, running Yayyyy! :)</figcaption>
</figure>
<p>Now here is the fun part. Go in your <code><strong>index.js</strong></code> file and change the title to anything of your choice. Hit <code><strong>ctrl + s</strong></code> and check your browser. It automatically updated your content.</p>
<p>Cool, right?</p>
<h4 id="let-s-recap">Let’s Recap</h4>
<p>We have added a development environment. We added hot module reloading. We added support for <strong>.js</strong> files with React code. In the next part, we’ll add SCSS support in our Webpack.</p>
<h4 id="scss">SCSS</h4>
<p>For SCSS support, we need to add some more dependencies in our <code><strong>package.json file</strong>.</code></p>
<p>Install the following packages:</p><pre><code>npm i --save-dev style-loader css-loader sass-loader node-sass extract-text-webpack-plugin@^4.0.0-beta.0</code></pre>
<p><a href="https://github.com/webpack-contrib/sass-loader" rel="noopener">sass-loader</a>:<strong> </strong>This plugin will help us compile SCSS to CSS.</p>
<p><a href="https://github.com/sass/node-sass" rel="noopener">node-sass</a>:<strong> </strong>The sass-loader required node-sass as a peer dependency.</p>
<p><a href="https://github.com/webpack-contrib/css-loader" rel="noopener">css-loader</a>: The CSS loader interprets <code>@import</code> and <code>url()</code> like <code>import/require()</code> and will resolve them.</p>
<p><a href="https://github.com/webpack-contrib/style-loader" rel="noopener">style-loader</a>: Adds CSS to the DOM by injecting style tag.</p>
<p><a href="https://webpack.js.org/plugins/extract-text-webpack-plugin/" rel="noopener">extract-text-webpack-plugin</a>: It moves all the required <code><strong>.css</strong></code> modules into a separate CSS file.</p>
<p>So your styles are no longer in-lined into the JavaScript bundle, but are in a separate CSS file (<code><strong>styles.css</strong></code>). If your total stylesheet volume is big, it will be faster because the CSS bundle is loaded in parallel to the JavaScript bundle.</p>
<p>Now that our dependencies have been installed, let’s make some changes to our Webpack config file.</p>
<p>Let’s understand what we did here first. In our <code>module.rules</code> we have added a new rule. What that rule does is apply some bundling to all <code><strong>.scss</strong></code> files. I hope that made sense. Inside our <code>use</code><strong> , </strong>we tell it extract some information.</p>
<p>Let’s get a bit deeper, and I’ll try to make it as simple as I can.</p><pre><code class="language-javascript">{ fallback: "style-loader", use: "css-loader!sass-loader" }</code></pre>
<p>Try reading this piece of code from bottom-to-top.</p>
<p>Get all SASS code — .scss — using <code>sass-loader</code><strong> </strong>and then convert it into CSS code using <code>css-loader. </code>Then take all that CSS code and inject it into our DOM with the &lt;style&gt; tag by <code>using style-</code>loader.</p>
<p>Now this entire object is surrounded by:</p><pre><code>use: ExtractTextPlugin.extract({ ... })</code></pre>
<p>This <code>ExtractTextPlugin.extract({ })</code><strong> </strong>will take all of our CSS code that was suppose to be injected in our DOM and combine all of the CSS code and bundle it in a single file called <code><strong>style.css</strong></code>.</p>
<p>The huge benefit of this approach is that if our total style sheet volume is big while loading it up from the browser, it will load it in parallel with our JavaScript code. This will make our site download faster.</p>
<p>In the second part, we had to add a new entry in our <code>plugins</code> array which was:</p><pre><code>new ExtractTextPlugin('style.css')</code></pre>
<p>This basically tells the plugin to combine all our CSS code and put it in a file called <code><strong>style.css</strong></code>.</p>
<p>Let’s create a new file called <code><strong>styles.scss</strong></code> in our root folder and play with some styling.</p>
<p>Now in your <code><strong>index.js</strong></code> file add the <code><strong>styles.scss</strong></code>.<strong> </strong>Webpack allows you to import CSS in JavaScript. It’s awesome, I know.</p>
<p>In your code, simply add this line:</p><pre><code>import './styles.scss';</code></pre>
<p>Now run this script again, and check your browser:</p><pre><code>Adeel@Frodo MINGW64 ~/Desktop/article/tutorial$ node_modules/.bin/webpack-dev-server --mode development --config config/webpack.base.config.js --open --hot --history-api-fallback</code></pre>
<p>This is the last time we write it manually. Coming up we’ll make a script. And yeah, I remember — I still haven’t explained what this script does. I will. I promise.</p>
<p>Anyways, check your browser…ok cool.</p>
<figcaption>Our React app with some .scss code. We are rocking it guys,</figcaption>
</figure>
<h4 id="make-the-script">Make the Script</h4>
<p>Let’s write some script, and make our lives a bit easier. The reason I kept on asking you to write that script again and again is so that you would actually memorize it and not just copy and paste it off the internet.</p>
<p>Let’s jump into our <code><strong>package.json</strong></code> file.</p>
<p>In your <code>scripts</code><strong> </strong>section, add the following code:</p>
<p>Now in your terminal, type:</p><pre><code>Adeel@Frodo MINGW64 ~/Desktop/article/tutorial$ npm run start:dev</code></pre>
<p><strong>Note</strong>: in the script we no longer have to write this:</p><pre><code>node_modules/.bin/webpack</code></pre>
<p>More details about in the webpack-dev-server usage docs <a href="https://github.com/webpack/webpack-dev-server#usage" rel="noopener"><strong>here</strong></a><strong>.</strong></p>
<p>The script for <code>start:dev</code><strong> </strong>looks something like this now:</p><pre><code>webpack-dev-server --mode development --config config/webpack.base.config.js --open --hot --history-api-fallback</code></pre>
<p>Let’s break down what this script does:</p>
<p><code>webpack-dev-server --mode development</code></p>
<p>The flag <code>--mode development</code> sets the build that’s the most optimized for development purposes. It has fast incremental compilation for the development cycle and useful error messages at runtime.</p>
<p>You can read more about modes in this amazing article: <a href="https://medium.com/webpack/webpack-4-mode-and-optimization-5423a6bc597a" rel="noopener">Webpack 4: Mode and Optimization</a>.</p>
<p>The flag <code>--config config/webpack.base.config.js</code> tells Webpack where all our configuration is placed for our Webpack bundling.</p>
<p>The flag <code>--open</code> tells the <code>webpack-dev-server</code> to open up the browser.</p>
<p>The flag <code>--hot</code> tells the <code>webpack-dev-server</code> to enable Webpack’s hot module replacement feature. This updates the browser every time you hit <code><strong>ctrl + s</strong></code></p>
<p>The flag <code>— -history-api-fallback</code> tells <code>webpack-dev-server</code> to fallback to <code><strong>index.html</strong></code> in the event that a requested resource cannot be found. You can read more about <a href="https://github.com/webpack/webpack-dev-server/tree/master/examples/cli/history-api-fallback" rel="noopener">history-api-fallback</a> here.</p>
<h3 id="production-environment">Production Environment</h3>
<p>Now that we are done with our development environment, let’s get our hands dirty and get our code ready for production.</p>
<p>Let’s create a new file <code><strong>webpack.opt.config.js</strong></code>. This file will contain all our production optimizations that we will need.</p>
<p>The plan is to do something like merge our <code><strong>webpack.base.config.js</strong></code> file with the <code><strong>webpack.opt.config.js</strong></code> file to create a production configuration for our single page application.</p>
<p>So let’s begin. In your <code><strong>config</strong></code> directory create a new file called <code><strong>webpack.opt.config.js</strong></code>. <code>opt</code> is short for optimization. If someone can came up with a cooler name, let me know.</p>
<p>We need to install some dependencies to help with our optimizations:</p><pre><code>$ npm i --save-dev optimize-css-assets-webpack-plugin uglifyjs-webpack-plugin</code></pre>
<p>Although the <code>--mode production</code> comes up with some pretty cool optimizations itself. You can read more about it <a href="https://webpack.js.org/concepts/mode/#mode-production" rel="noopener">here</a>. But I’d still like to add a couple more.</p>
<p>The code is as follows:</p>
<p>Let’s recap what we did here. I added to new modules in dev-dependency.</p>
<p><a href="https://github.com/webpack-contrib/uglifyjs-webpack-plugin" rel="noopener">uglifyjs-webpack-plugin</a>: As the name sounds, this will uglify and minimize all our code to reduce the bundle size.</p>
<p><a href="https://github.com/NMFR/optimize-css-assets-webpack-plugin" rel="noopener">optimize-css-assets-webpack-plugin</a>: This plugin will minimize and optimize your CSS code.</p>
<p><strong>So far so good everybody — we are almost done.</strong></p>
<figcaption>Just a little bit more, and you have reached the finish line.</figcaption>
</figure>
<p>Remember when I talked about a way where we wouldn’t have to repeat our code again and again? One for development, the other for production…and don’t even get me started on managing those environments stage, demo and live! Well that ends today. No more code repetitions.</p>
<p>I introduce to you our savior, the white knight <a href="https://github.com/survivejs/webpack-merge" rel="noopener">Webpack Merge</a>. This plugin is amazing, as the name sounds.</p>
<p>What this will do is combine our configuration for <code><strong>.base</strong></code> and <code><strong>.opt</strong></code> files in a smart way. It provides a <code>merge</code> function that concatenates arrays and merges objects to create a new object.</p>
<p>So without further ado, let’s install this amazing plugin as well:</p><pre><code>$ npm i --save-dev webpack-merge</code></pre>
<p>Let’s create our final <code><strong>webpack.prod.config.js</strong></code> file:</p>
<p>We pass a parameter to our function called <code>productionConfiguration</code> and used <code>env</code> . This is how we pass information in Webpack through our CLI (I’ll explain how we do that in a minute).</p>
<p>I am passing something called <code>NODE_ENV</code> . It’s the value in which I will tell my webpack that what environment I will be running — such as demo, test, live or whatever.</p>
<p>Next, whatever I get in my <code>env.NODE_ENV</code> I set in my <code>process.env.NODE_ENV</code> using the Webpack builtin plugin called <code>DefinePlugin</code> . We just need to make sure that whatever value we pass is always stringified.</p>
<p>Then, in the last line, we do this:</p><pre><code>module.exports = merge.smart(baseConfig, optimizationConfig, productionConfiguration);</code></pre>
<p>What is happening here is we use <code>webpack-merge's</code> method called <code>smart</code> to smartly merge all three of our configurations. That way we don’t repeat the same code everywhere. This is coolest feature.</p>
<p>I remember a time before I found this plugin. It was a lot of mess doing the same thing in all of my Webpack configuration files. Now it’s just a breeze.</p>
<p>Anyways, moving forward, since now our Webpack configurations are finally done. Let’s make our production ready build script in our <code><strong>package.json</strong></code> file.</p>
<p>In your scripts section, add the following lines:</p>
<p>I’ll start with the <code>prestart:prod</code> command:</p><pre><code>"prestart:prod": "webpack --mode production --config config/webpack.prod.config.js --env.NODE_ENV=production --progress",</code></pre>
<p>We’ll break this command down.</p>
<p><code>webpack --mode production</code> . As we discussed earlier, when discussing <code>development mode</code> , production mode will run some really cool optimization processes on our bundled file(s) to make the size smaller.</p>
<p>Next flag is <code>--config config/webpack.prod.config.js</code>. This tells Webpack where our production configuration lies in the directory.</p>
<p>The <code>env</code> flag specifies the environment variable that we pass through our <code><strong>webpack-cli</strong></code>. It goes like this: <code>--env.NOVE_ENV=production</code> passes an object in our <code><strong>webpack.prod.config.js</strong></code><strong> </strong>with the key <code>NODE_ENV</code> which has the value called <code>production</code> .</p>
<p>You can pass as many environment variables as you want, like <code>--env.X=foo --env.Y=bar</code> . Then in your configuration you would get these values the same way you accesses <code>NODE_ENV</code> value.</p>
<p>The last flag is <code>--progess</code> . It simply tells the progress/status of the bundle, like what percentage the bundle has completed while making the bundled files in your <code><strong>dist</strong></code><strong> </strong>folder.</p>
<h4 id="a-quick-reminder">A quick reminder</h4>
<p>Webpack 4 by default sets the <code><strong>src</strong> </code>folder as the default entry point and the <code><strong>dist</strong></code> folder as the default output point of your bundled result. Cool, right? I know I am repeating this — I told you earlier — but that’s why I said reminder.</p>
<h4 id="back-to-our-tutorial">Back to our Tutorial</h4>
<p>We discussed <code>prestart:prod</code> script, now we will talk about the final script called <code>start:prod</code>.</p>
<p>With npm, any time you want to run scripts one after the other, you sequence them with <code>preCOMMAND</code> <code>COMMAND</code> <code>postCOMMAND.</code></p>
<p>Like we did here:</p><pre><code>$ prestart:prod</code></pre><pre><code>$ start:prod</code></pre>
<p>So we will always run the script <code>npm run start:prod</code> before executing the script called <code>npm run prestart:prod.</code></p>
<p>Let’s discuss <code>start:prod.</code></p><pre><code>$ node server =&gt; {This is equivalent to} =&amp;gt; $ node server/index.js</code></pre>
<p>Let’s create a folder called <code><strong>server</strong></code>. Inside the folder, create a file called <code><strong>index.js</strong></code>. But before we do that, we need to add one last dependency.</p>
<p>This is going to be Express, our back-end Node.js framework:</p><pre><code>npm i --save express</code></pre>
<p>Let’s discuss this code before we proceed further.</p>
<p>We instantiate our app with <code>express()</code> and then set up a static public folder called <code><strong>dist</strong></code><strong>.</strong> This is the same folder created by Webpack when we run our production command.</p>
<p>We include our <code><strong>routes</strong></code> file — we will create that in a second — and set the <code><strong>routes</strong></code> file to the <code>/</code> directory.</p>
<p>Next we set up a port. If none is provided to set via the node CLI, we use port <code>3000</code>. After that, we create an HTTP server and listen on that server via the port. At the very last, we console to our terminal that we are running the server on that certain port.</p>
<p>Let’s create our last file called <code><strong>routes/index.js</strong>:</code></p>
<p>Here we check that whatever the user comes on, the path redirects the user to the <code><strong>dist/index.html</strong></code> where our React application lives.</p>
<p>And that’s it. We are done.</p>
<p>Now go in your terminal and type:</p><pre><code>npm run start:prod</code></pre>
<p>This will take a moment. It will show you the progress while it transpiles. After that, it consoles a message that it is <code>listening to port 3000</code> if none is provided.</p>
<p>Now go to your browser <code>http:localhost:3000/</code> and your application is alive.</p>
<figcaption>Congrats!</figcaption>
</figure>
<p>See the code on <a href="https://github.com/adeelibr/react-starter" rel="noopener">GitHub</a>.</p>
<p>A shout out to my good friend <a href="https://twitter.com/ehmadabbasi" rel="noopener">Ahmed Abbasi</a> for helping me proof read this article.</p>
<p>You can follow me on <a href="http://twitter.com/adeelibr" rel="noopener">Twitter</a>, I would love to talk and hear you guys out.</p>
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
