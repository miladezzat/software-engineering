---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9beb740569d1a4ca2ec5.jpg"
tags: [Webpack]
description: Webpack is a powerful bundler and dependency manager used by
author: "Milad E. Fahmy"
title: "How to Create a Production-Ready Webpack 4 Config From Scratch"
created: "2021-08-15T19:30:18+02:00"
modified: "2021-08-15T19:30:18+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-webpack tag-javascript tag-developer-tools tag-dependency-management tag-bundler tag-software-engineering tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create a Production-Ready Webpack 4 Config From Scratch</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9beb740569d1a4ca2ec5.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9beb740569d1a4ca2ec5.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9beb740569d1a4ca2ec5.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9beb740569d1a4ca2ec5.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9beb740569d1a4ca2ec5.jpg" alt="How to Create a Production-Ready Webpack 4 Config From Scratch">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><a href="https://webpack.js.org/">Webpack</a> is a powerful bundler and dependency manager used by many enterprise-level companies as tooling for their front-end code.</p>
<p>Typically, webpack is configured when a project is first set up, and small tweaks are then made to the config files as needed from time to time. Because of this, many developers don’t have a lot of experience working with webpack.</p>
<p>In this hands-on tutorial, we’ll go through the basics of setting up your very own production-ready webpack config using webpack 4. We’ll discuss output management, asset management, dev and prod configs, Babel, minification, cache busting, and more.</p>
<figcaption>Webpack bundles your code</figcaption>
</figure>
<p>Let's get started!</p>
<h2 id="demo-app">Demo App</h2>
<p>For the purposes of this demo, we'll be setting up a webpack config from scratch using webpack 4. Our app will just use vanilla JavaScript so that we don't get bogged down with any framework-specific details. The actual app code will be pretty small so that we can focus more on webpack.</p>
<p>If you'd like to follow along, all of the code in this article can be found in GitHub. The <a href="https://github.com/thawkin3/webpack-training-1/tree/demo/start">starting point is found here</a>, and the <a href="https://github.com/thawkin3/webpack-training-1">finished result is found here</a>.</p>
<h2 id="starting-point">Starting Point</h2>
<p>To begin, we'll start out with just a few files in our project directory. The directory structure looks like this:</p><pre><code>webpack-demo
|_ src
|_ index.js
|_ .gitignore
|_ index.html
|_ package.json
|_ README.md
|_ yarn.lock</code></pre>
<p>The <code>index.html</code> file is nice and simple, just a page header and a <code>script</code> tag:</p><pre><code class="language-HTML">&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Webpack Training 1&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Webpack Training 1&lt;/h1&gt;
&lt;script src="./src/index.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>The <code>script</code> tag references our <code>./src/index.js</code> file, which has just a few lines of JavaScript in it that outputs the text, "Hello from webpack!":</p><pre><code class="language-JavaScript">const p = document.createElement('p')
p.textContent = 'Hello from webpack!'
document.body.append(p)
</code></pre>
<p>If you drag the <code>index.html</code> file into your browser, you should be able to view our simple web page:</p>
<figcaption>Demo app output 1 - hello from webpack</figcaption>
</figure>
<hr>
<h2 id="install-dependencies">Install Dependencies</h2>
<p>I've included <code>webpack</code> and <code>webpack-cli</code> as <code>devDependencies</code> in the <code>package.json</code> file.</p>
<p>To install those, run:</p><pre><code class="language-Bash">yarn install</code></pre>
<h2 id="webpack-test-run">Webpack Test Run</h2>
<p>Webpack 4 is set up as a "zero config" tool, meaning that you can run it out of the box without doing any initial configuration. Now, for any real project you <em>will</em> need to do some configuration, but it's nice that you can at least do a quick sanity check to ensure that webpack is able to run without having to go through a bunch of initial configuration steps.</p>
<p>So, let's check it out. Run:</p><pre><code class="language-Bash">yarn webpack</code></pre>
<p>You should now see a <code>dist</code> directory created in your project directory. And inside it you should see a <code>main.js</code> file, which is our minified code.</p>
<p>Great! Webpack appears to be working.</p>
<h2 id="reference-the-output-code">Reference the Output Code</h2>
<p>OK, now that we have JavaScript code in our <code>dist</code> directory, let's have our <code>index.html</code> file reference that. Instead of the <code>script</code> tag looking like this:</p><pre><code class="language-HTML">&lt;script src="./src/index.js"&gt;&lt;/script&gt;</code></pre>
<p>Let's change it to this:</p><pre><code class="language-HTML">&lt;script src="./dist/main.js"&gt;&lt;/script&gt;</code></pre>
<p>Now, refresh the page in your browser, and you should still see the exact same output, only this time the "Hello from webpack!" text is being generated by the <code>./dist/main.js</code> file now.</p>
<figcaption>Demo app output 2 - no changes</figcaption>
</figure>
<h2 id="create-a-webpack-config-file">Create a Webpack Config File</h2>
<p>Now that we have webpack installed and have gone through a quick sanity check exercise, let's create an actual webpack config file. Create a file called <code>webpack.config.js</code> and place the following code inside it:</p><pre><code class="language-JavaScript">const path = require('path')
module.exports = {
entry: './src/index.js',
output: {
filename: 'main.js',
path: path.resolve(__dirname, 'dist')
}
}</code></pre>
<p>The <code>entry</code> property tells webpack where our source code is located. It is the "entry point" for our app.</p>
<p>The <code>output</code> property tells webpack what to call the output file and which directory to place it in.</p>
<p>Simple enough, right?</p>
<p>Now let's create an npm script in our <code>package.json</code> file:</p><pre><code class="language-JSON">"scripts": {
"build": "webpack --config=webpack.config.js"
}</code></pre>
<p>Now we can run our build process with the command <code>yarn build</code>. Go ahead and run that command to verify you have things set up properly. You could even delete your <code>dist</code> directory prior to running the <code>yarn build</code> command to verify that the directory is being generated.</p>
<h2 id="change-the-output-file-name">Change the Output File Name</h2>
<p>Now, just for fun, let's change the output file name. To do this, we'll open up our <code>webpack.config.js</code> file and change the <code>output</code> property from this:</p><pre><code class="language-JavaScript">output: {
filename: 'main.js',
path: path.resolve(__dirname, 'dist')
}</code></pre>
<p>To this:</p><pre><code class="language-JavaScript">output: {
filename: 'tacos.js',
path: path.resolve(__dirname, 'dist')
}</code></pre>
<p>Now run <code>yarn build</code> again to generate the output. You should see a <code>tacos.js</code> file in your <code>dist</code> directory now.</p>
<p>But wait! We also see the old <code>main.js</code> file in our <code>dist</code> directory too! Wouldn't it be nice if webpack could delete the old unneeded output each time we do a new build?</p>
<p>There's got to be a plugin for that.</p>
<h2 id="webpack-plugins">Webpack Plugins</h2>
<figcaption>Photo by <a href="https://unsplash.com/@feelfarbig?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Feelfarbig Magazine</a> / <a href="https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Unsplash</a></figcaption>
</figure>
<p>Webpack has a rich ecosystem of modules called "<a href="https://webpack.js.org/concepts/#plugins">plugins</a>", which are libraries that can modify and enhance the webpack build process. We'll explore a handful of helpful plugins as we continue to improve our webpack config throughout the rest of this article.</p>
<h2 id="cleanwebpackplugin">CleanWebpackPlugin</h2>
<figcaption>Photo by <a href="https://unsplash.com/@honest?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">The Honest Company</a> / <a href="https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Unsplash</a></figcaption>
</figure>
<p>OK, back to our problem. It'd be nice if we could clean up the <code>dist</code> directory before each new build. There's a plugin for that!</p>
<p>We can use the <a href="https://github.com/johnagan/clean-webpack-plugin">CleanWebpackPlugin</a> to help us here. First, we need to install it in our project:</p><pre><code class="language-Bash">yarn add --dev clean-webpack-plugin</code></pre>
<p>To use it, we'll simply <code>require</code> the plugin in our <code>webpack.config.js</code> file and then include it in the <code>plugins</code> array in our config setup:</p><pre><code class="language-JavaScript">const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
entry: './src/index.js',
output: {
filename: 'main.js',
path: path.resolve(__dirname, 'dist')
},
plugins: [
new CleanWebpackPlugin()
]
}</code></pre>
<p>Now run <code>yarn build</code> again, and you should see only a single output file in your <code>dist</code> directory. Problem solved!</p>
<h2 id="htmlwebpackplugin">HTMLWebpackPlugin</h2>
<figcaption>Photo by <a href="https://unsplash.com/@rxspawn?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Florian Olivo</a> / <a href="https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Unsplash</a></figcaption>
</figure>
<p>One other thing that's a little annoying with our setup is that any time we change the <code>output</code> file name in our <code>webpack.config.js</code> file, we also have to change that file name we reference in our <code>script</code> tag in our <code>index.html</code> file. Wouldn't it be nice if webpack could manage that for us?</p>
<p>There's a plugin for that! We can use the <a href="https://webpack.js.org/plugins/html-webpack-plugin/">HTMLWebpackPlugin</a> to help us manage our HTML file. Let's install it in our project now:</p><pre><code class="language-Bash">yarn add --dev html-webpack-plugin</code></pre>
<p>Now let's move our <code>index.html</code> file inside our <code>src</code> directory so that it's a sibling to the <code>index.js</code> file.</p><pre><code>webpack-demo
|_ src
|_ index.html
|_ index.js
|_ .gitignore
|_ package.json
|_ README.md
|_ yarn.lock</code></pre>
<p>We can also delete the <code>script</code> tag in our <code>index.html</code> file since we'll have webpack handle inserting the appropriate <code>script</code> tag for us. Delete that line so that your <code>index.html</code> file looks like this:</p><pre><code class="language-HTML">&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Webpack Training 1&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Webpack Training 1&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>Now let's <code>require</code> this plugin in our <code>webpack.config.js</code> file and then include it in the <code>plugins</code> array in our config setup, just like we did for the first plugin:</p><pre><code class="language-JavaScript">const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
entry: './src/index.js',
output: {
filename: 'main.js',
path: path.resolve(__dirname, 'dist')
},
plugins: [
new CleanWebpackPlugin(),
new HtmlWebpackPlugin({
filename: 'index.html',
inject: true,
template: path.resolve(__dirname, 'src', 'index.html'),
}),
]
}</code></pre>
<p>In those options for the <code>HtmlWebpackPlugin</code>, we specify the <code>filename</code> for what we'd like the output file to be called.</p>
<p>We specify for <code>inject</code> that we would like our JavaScript file to be injected into the <code>body</code> tag by setting the value to <code>true</code>.</p>
<p>And finally, for the <code>template</code> we supply the location of our <code>index.html</code> file in the <code>src</code> directory.</p>
<h2 id="sanity-check">Sanity Check</h2>
<figcaption>Photo by <a href="https://unsplash.com/@glenncarstenspeters?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Glenn Carstens-Peters</a> / <a href="https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Unsplash</a></figcaption>
</figure>
<p>OK, let's make sure everything is still working properly. Run <code>yarn build</code>, and verify that you see two files in your <code>dist</code> directory: <code>index.html</code> and <code>main.js</code>.</p>
<p>If you look closely in your <code>index.html</code> file, you'll see the <code>main.js</code> file referenced.</p>
<p>Now, open the <code>./dist/index.html</code> file in your browser to verify that your page loads correctly. If you followed these steps correctly, your page should still be working:</p>
<figcaption>Demo app output 3 - no changes</figcaption>
</figure>
<h2 id="create-a-development-server">Create a Development Server</h2>
<figcaption>Photo by <a href="https://unsplash.com/@tvick?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Taylor Vick</a> / <a href="https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Unsplash</a></figcaption>
</figure>
<p>We've made some good improvements so far using the <code>CleanWebpackPlugin</code> and the <code>HtmlWebpackPlugin</code>. As we've made these changes, we've had to manually run the <code>yarn build</code> command each time to see new changes in our app. We've also just been viewing the file in our browser rather than viewing the content served from a server running locally. Let's improve our process by creating a development server.</p>
<p>To do this, we'll use <code>webpack-dev-server</code>. First, we'll need to install it:</p><pre><code class="language-Bash">yarn add --dev webpack-dev-server</code></pre>
<p>Now, let's split up our single <code>webpack.config.js</code> file into two separate config files, one for production and one for development. We'll call the file for production <code>webpack.config.prod.js</code> and the file for development <code>webpack.config.dev.js</code>.</p>
<h2 id="development-webpack-config">Development Webpack Config</h2>
<p>Here's our development config file:</p><pre><code class="language-JavaScript">const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
mode: 'development',
devtool: 'inline-source-map',
devServer: {
contentBase: './dist',
},
entry: './src/index.js',
output: {
filename: 'main.js',
path: path.resolve(__dirname, 'dist')
},
plugins: [
new CleanWebpackPlugin(),
new HtmlWebpackPlugin({
filename: 'index.html',
inject: true,
template: path.resolve(__dirname, 'src', 'index.html'),
}),
]
}</code></pre>
<p>Note that we've specified the <code>mode</code> as <code>development</code> now, and we've specified that we would like an <code>inline-source-map</code> for our JavaScript files, meaning that a source map is included at the end of each JavaScript file. For our dev server, we've specified that our content will be found in the <code>dist</code> directory.</p>
<p>All the rest of the development config has stayed the same.</p>
<h2 id="production-webpack-config">Production Webpack Config</h2>
<p>Now, here's our production config file:</p><pre><code class="language-JavaScript">const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
mode: 'production',
devtool: 'source-map',
entry: './src/index.js',
output: {
filename: 'main.js',
path: path.resolve(__dirname, 'dist')
},
plugins: [
new CleanWebpackPlugin(),
new HtmlWebpackPlugin({
filename: 'index.html',
inject: true,
template: path.resolve(__dirname, 'src', 'index.html'),
}),
]
}</code></pre>
<p>This file also looks very similar to our original config file. Here we've specified that the <code>mode</code> is <code>production</code> and that we would like the <code>source-map</code> option for source maps, which provides separate source map files for minified code.</p>
<h2 id="production-and-development-npm-scripts">Production and Development NPM Scripts</h2>
<p>Finally, let's add a few more npm scripts in our <code>package.json</code> file so that we can work with our development and production webpack configs:</p><pre><code class="language-JSON">"scripts": {
"build": "webpack --config=webpack.config.prod.js",
"build-dev": "webpack --config=webpack.config.dev.js",
"start": "webpack-dev-server --config=webpack.config.dev.js --open"
}</code></pre>
<p>Now, let's try out each of these scripts.</p>
<p>Run <code>yarn build</code> to see the production build output. You should see that the <code>main.js</code> file in your <code>dist</code> directory is minified and that it has an accompanying <code>main.js.map</code> source map file.</p>
<p>Now run <code>yarn build-dev</code> to see the development build output. You should see the <code>main.js</code> file in your <code>dist</code> directory, but now note that it is <strong>not</strong> minified.</p>
<p>Lastly, run <code>yarn start</code> to start up the development server. This will open up the app on <code>http://localhost:8080/</code>. No more having to view the files directly by just pulling them into your browser! We now have a real live development server!</p>
<p>The output you see should still look the same as it always has:</p>
<figcaption>Demo app output 4 - no changes</figcaption>
</figure>
<h2 id="making-changes-during-development">Making Changes During Development</h2>
<p>Now that we have a working dev server, let's experiment with making some simple changes to our <code>./src/index.js</code> file. Instead of outputting "Hello from webpack!", let's change it to say "Hello from dev server!".</p>
<p>Save the file, and then see the page on your dev server automatically reload and update for you! That'll be a nice boost to your developer productivity.</p>
<figcaption>Demo app output 5 - hello from dev server</figcaption>
</figure>
<h2 id="don-t-repeat-yourself-dry-">Don't Repeat Yourself (DRY)</h2>
<figcaption>Photo by <a href="https://unsplash.com/@tobey_j?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Tobias Jelskov</a> / <a href="https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Unsplash</a></figcaption>
</figure>
<p>Now that we have two separate webpack config files, one for development and one for production, you may have noticed that we have a lot of duplicated code between the two files.</p>
<p>Every developer out there has had the DRY principle drilled into their heads since day one: Don't repeat yourself. If you find yourself writing the same code in multiple places, it may be a good idea to turn that into shared code that can be written in one place and then used in multiple places. That way when you need to make changes, you only need to implement those changes in one place.</p>
<p>So, how can we clean up the duplication in our webpack config files? There's a plugin for that!</p>
<h2 id="webpackmerge">WebpackMerge</h2>
<figcaption>Merge</figcaption>
</figure>
<p>We can use the <a href="https://github.com/survivejs/webpack-merge">webpack-merge</a> plugin to manage shared code that multiple config files rely on. To do this, we'll first install the package:</p><pre><code class="language-Bash">yarn add --dev webpack-merge</code></pre>
<p>Now we'll create a third webpack config file called <code>webpack.config.common.js</code>. This is where we'll keep our shared code. Right now, our development and production config files share the same entry point, output, and plugins. All that differs between the two files are the mode, source map, and dev server.</p>
<p>So, the contents of our <code>webpack.config.common.js</code> file will be:</p><pre><code class="language-JavaScript">const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
entry: './src/index.js',
output: {
filename: 'main.js',
path: path.resolve(__dirname, 'dist')
},
plugins: [
new CleanWebpackPlugin(),
new HtmlWebpackPlugin({
filename: 'index.html',
inject: true,
template: path.resolve(__dirname, 'src', 'index.html'),
}),
]
}</code></pre>
<p>And now, we can merge this shared config object into our development config like this:</p><pre><code class="language-JavaScript">const merge = require('webpack-merge')
const commonConfig = require('./webpack.config.common')
module.exports = merge(commonConfig, {
mode: 'development',
devtool: 'inline-source-map',
devServer: {
contentBase: './dist',
},
})</code></pre>
<p>And we can merge the shared config object into our production config like this:</p><pre><code class="language-JavaScript">const merge = require('webpack-merge')
const commonConfig = require('./webpack.config.common')
module.exports = merge(commonConfig, {
mode: 'production',
devtool: 'source-map',
})</code></pre>
<p>Look how much shorter and cleaner those two files look! Beautiful!</p>
<h2 id="styling-our-app">Styling Our App</h2>
<figcaption>Photo by <a href="https://unsplash.com/@madebyvadim?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Vadim Sherbakov</a> / <a href="https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Unsplash</a></figcaption>
</figure>
<p>Things are looking pretty good with our webpack configs so far. We have a working dev server and we've split out our code into development, production, and shared configuration files.</p>
<p>Let's start working on our actual app code now. The plain black and white page is a little boring to look at. Let's style it up!</p>
<p>In our <code>src</code> directory, let's create an <code>index.css</code> file and place the following lines of CSS inside it:</p><pre><code class="language-CSS">body {
background: deeppink;
color: white;
}</code></pre>
<p>Then, in our <code>./src/index.js</code> file, let's import that CSS file:</p><pre><code class="language-JavaScript">import './index.css'</code></pre>
<p>Now, run <code>yarn start</code> to get our development server running again.</p>
<p>Oh no! We get an error!</p><pre><code>ERROR in ./src/index.css 1:5
Module parse failed: Unexpected token (1:5)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
&gt; body {
|   background: deeppink;
|   color: white;
@ ./src/index.js 1:0-20</code></pre>
<p>What are these "loaders" it speaks of?</p>
<h2 id="webpack-loaders">Webpack Loaders</h2>
<figcaption>Photo by <a href="https://unsplash.com/@kevin_butz?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Kevin Butz</a> / <a href="https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Unsplash</a></figcaption>
</figure>
<p>Earlier, we discussed webpack plugins, which let you extend the webpack build process. There is also an ecosystem of webpack "<a href="https://webpack.js.org/loaders/">loaders</a>", which help webpack know how to understand and load different file types. Out of the box, webpack understands how to handle our JavaScript files, but it doesn't know what to do with CSS files yet. Let's fix that.</p>
<h2 id="styleloader-and-cssloader">StyleLoader and CSSLoader</h2>
<p>There are two loaders in particular that will be helpful for us here: <a href="https://webpack.js.org/loaders/style-loader/">style-loader</a> and <a href="https://webpack.js.org/loaders/css-loader/">css-loader</a>. Let's get those included in our project and then discuss how they work.</p>
<p>To start, as always, we'll need to install those two dependencies:</p><pre><code class="language-Bash">yarn add --dev style-loader css-loader</code></pre>
<p>Then we can add them to our <code>webpack.config.common.js</code> file in the module rules section down at the bottom:</p><pre><code class="language-JavaScript">const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
entry: './src/index.js',
output: {
filename: 'main.js',
path: path.resolve(__dirname, 'dist')
},
plugins: [
new CleanWebpackPlugin(),
new HtmlWebpackPlugin({
filename: 'index.html',
inject: true,
template: path.resolve(__dirname, 'src', 'index.html'),
}),
],
module: {
rules: [
{
test: /\.css$/,
use: ['style-loader', 'css-loader']
}
]
}
}</code></pre>
<p>This section sets up rules for webpack so it knows what to do with each file it encounters. The <code>test</code> property is a regular expression that webpack checks against the file name. In this case, we want to handle files with a <code>.css</code> extension.</p>
<p>Then, the <code>use</code> property tells webpack what loader or loaders to use to handle files matching the criteria. Note that the order here matters!</p>
<p>Webpack loaders are read from right to left. So first the <code>css-loader</code> will be applied, and then the <code>style-loader</code> will be applied.</p>
<p>Now, what do these loaders actually do for us?</p>
<p><code>css-loader</code> interprets and resolves imported CSS files that you reference in your JavaScript. So in this case, <code>css-loader</code> helps make this line work:</p><pre><code class="language-JavaScript">import './index.css'</code></pre>
<p>Next, <code>style-loader</code> injects the CSS into the DOM. By default, <code>style-loader</code> takes the CSS it encounters and adds it to the DOM inside a <code>style</code> tag.</p>
<p>Let's restart our dev server by killing the current process (if you still have it running) and then starting it again with <code>yarn start</code>. Now, in the web browser, you should see this on <code>https://localhost:8080/</code>:</p>
<figcaption>Demo app output 6 - adds pink and white colors</figcaption>
</figure>
<p>Oooh, so colorful!</p>
<h2 id="a-note-on-other-webpack-loaders">A Note on Other Webpack Loaders</h2>
<p>We won't cover loaders for other file types in this article, but be aware that there's a loader for everything imaginable! You can use <a href="https://webpack.js.org/loaders/file-loader/">file-loader</a> or <a href="https://webpack.js.org/loaders/url-loader/">url-loader</a> for loading images and other assets. You can use <a href="https://webpack.js.org/loaders/sass-loader/">sass-loader</a> to handle converting Sass/SCSS files to CSS before piping that output to <code>css-loader</code> and <code>style-loader</code>. Webpack can handle Less files too with <a href="https://webpack.js.org/loaders/less-loader/">less-loader</a> if that's your preference.</p>
<p>The moral of the story is: For any given file type, there's a loader that can handle it.</p>
<h2 id="babelloader">BabelLoader</h2>
<p>Ok, back to our demo app. We've written just a few lines of JavaScript so far. It'd be nice if we could write our JavaScript using new features that aren't well-supported in every browser yet. <a href="https://babeljs.io/">Babel</a> is a JavaScript compiler that can turn ES6+ code into ES5 code. </p>
<p>And (you guessed it), there's a loader for that: <a href="https://babeljs.io/setup#installation">babel-loader</a>.</p>
<p>To set up <code>babel-loader</code>, we'll follow the instructions on their installation guide linked above.</p>
<p>First, we'll install our dependencies:</p><pre><code class="language-Bash">yarn add --dev babel-loader @babel/core</code></pre>
<p>Next, we'll add a new rule to our module rules array in our <code>webpack.config.common.js</code> file:</p><pre><code class="language-JavaScript">const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
entry: './src/index.js',
output: {
filename: 'main.js',
path: path.resolve(__dirname, 'dist')
},
plugins: [
new CleanWebpackPlugin(),
new HtmlWebpackPlugin({
filename: 'index.html',
inject: true,
template: path.resolve(__dirname, 'src', 'index.html'),
}),
],
module: {
rules: [
{
test: /\.css$/,
use: ['style-loader', 'css-loader']
},
{
test: /\.(js|jsx)$/,
exclude: /[\\/]node_modules[\\/]/,
use: {
loader: 'babel-loader',
},
},
]
}
}</code></pre>
<p>This will tell webpack that when it encounters <code>.js</code> or <code>.jsx</code> files to use Babel to transform the code. We use the <code>exclude</code> property to make sure Babel doesn't try to transform JavaScript files in our <code>node_modules</code> directory. Those are third-party dependencies that should already have been taken care of by their creators.</p>
<p>Next, we'll add one more dependency for a Babel preset:</p><pre><code class="language-Bash">yarn add --dev @babel/preset-env</code></pre>
<p>And then we'll create a <code>.babelrc</code> file where we can do other Babel configuration as needed. We'll keep our file pretty simple and just specify the Babel preset that we want to use:</p><pre><code class="language-JSON">{
"presets": ["@babel/preset-env"]
}</code></pre>
<p>And finally, let's write some ES6 code in our <code>./src/index.js</code> file:</p><pre><code class="language-JavaScript">import './index.css'
const p = document.createElement('p')
p.textContent = 'Hello from webpack!'
document.body.appendChild(p)
const p2 = document.createElement('p')
const numbers1 = [1, 2, 3, 4, 5, 6]
const numbers2 = [7, 8, 9, 10]
const numbers3 = [...numbers1, ...numbers2]
p2.textContent = numbers3.join(' ')
document.body.appendChild(p2)</code></pre>
<p>This is a really trivial example, but we're using the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax">spread operator</a> here to concatenate two arrays.</p>
<p>Now, if we kill our running process and run <code>yarn start</code> again, we should see this in the browser:</p>
<figcaption>Demo app output 7 - adds numbers</figcaption>
</figure>
<p>Great! Everything is working nicely.</p>
<h2 id="temporarily-missing-styles">Temporarily Missing Styles</h2>
<p>If you disable the cache in your browser and reload the page for our demo app, you may notice a slight blip in which the page appears with just the un-styled HTML, and then the page background turns pink and the text turns white as the styles are applied.</p>
<p>This behavior results from how <code>style-loader</code> works. As mentioned above, <code>style-loader</code> takes CSS and places it in a <code>style</code> tag in your HTML. Because of that, there's a brief period of time in which the <code>style</code> tag hasn't been appended yet!</p>
<p>Now, this is OK for a development environment, but we definitely wouldn't want this kind of behavior occurring in production. Let's fix that.</p>
<h2 id="minicssextractplugin">MiniCssExtractPlugin</h2>
<p>Rather than injecting CSS into our HTML as <code>style</code> tags, we can use the <a href="https://webpack.js.org/plugins/mini-css-extract-plugin/">MiniCssExtractPlugin</a> to generate separate CSS files for us. We'll use this in our production config while still just using <code>style-loader</code> in our development config.</p>
<p>First, let's install the dependency in our project:</p><pre><code class="language-Bash">yarn add --dev mini-css-extract-plugin</code></pre>
<p>Now in our <code>webpack.config.common.js</code> file let's remove the CSS rule since we'll be handling this differently in development and production. We're left with this in our shared config:</p><pre><code class="language-JavaScript">const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
entry: './src/index.js',
output: {
filename: 'main.js',
path: path.resolve(__dirname, 'dist')
},
plugins: [
new CleanWebpackPlugin(),
new HtmlWebpackPlugin({
filename: 'index.html',
inject: true,
template: path.resolve(__dirname, 'src', 'index.html'),
}),
],
module: {
rules: [
{
test: /\.(js|jsx)$/,
exclude: /[\\/]node_modules[\\/]/,
use: {
loader: 'babel-loader',
},
},
]
}
}</code></pre>
<p>Now, in our <code>webpack.config.dev.js</code> file, let's add back in <code>style-loader</code> and <code>css-loader</code> that we just removed from our shared config:</p><pre><code class="language-JavaScript">const merge = require('webpack-merge')
const commonConfig = require('./webpack.config.common')
module.exports = merge(commonConfig, {
mode: 'development',
devtool: 'inline-source-map',
devServer: {
contentBase: './dist',
},
module: {
rules: [
{
test: /\.css$/,
use: ['style-loader', 'css-loader']
},
]
}
})</code></pre>
<p>And finally, in our <code>webpack.config.prod.js</code> file, let's add in our new <code>mini-css-extract-plugin</code>:</p><pre><code>const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonConfig = require('./webpack.config.common')
module.exports = merge(commonConfig, {
mode: 'production',
devtool: 'source-map',
module: {
rules: [
{
test: /\.css$/,
use: [
MiniCssExtractPlugin.loader,
'css-loader',
],
},
],
},
plugins: [
new MiniCssExtractPlugin({
filename: '[name].[contenthash].css',
}),
]
})</code></pre>
<p>This one is a little different because it actually is both a plugin <em>and</em> a loader, so it goes in the module rules and in the plugins sections.</p>
<p>Also note that we use the square brackets in our file name to dynamically set the <code>name</code> to the original source file's name and also include the <code>contenthash</code>, which is a hash (an alphanumeric string) that represents the file's contents.</p>
<p>Now if you run <code>yarn build</code> this time to generate the production build, you should get some output in your terminal that looks like this:</p>
<figcaption>Webpack production build output</figcaption>
</figure>
<p>Note that it actually generates a CSS file now, and the content hash is included in the file name.</p>
<p>Alright, problem solved! No more blip when the page loads in production since we have the styles included as a <code>link</code> tag to an actual CSS file.</p>
<h2 id="cache-busting">Cache Busting</h2>
<p>Since we've included the content hash in the generated CSS file, now is a good time to talk about cache busting. Why, you ask, would we want the content hash included in our file names? To help the browser understand when a file has changed!</p>
<p>Your browser tries to be helpful by caching files it has seen before. For example, if you've visited a website, and your browser had to download assets like JavaScript, CSS, or image files, your browser may cache those files so that it doesn't have to request them from the server again.</p>
<p>This means that if you visit the site again, your browser can use the cached files instead of requesting them again, so you get a faster page load time and a better experience.</p>
<p>So, what's the problem here? Imagine if we had a file called <code>main.js</code> used in our app. Then, a user visits your app and their browser caches the <code>main.js</code> file. </p>
<p>Now, at some later point in time, you've released new code for your app. The contents of the <code>main.js</code> file have changed. But, when this same user visits your app again, the browser sees that it needs a <code>main.js</code> file, notes that it has a cached <code>main.js</code> file, and just uses the cached version. The user doesn't get your new code!</p>
<p>To solve this problem, a common practice is to include the content hash in each file's name. As discussed earlier, the content hash is a string representation of the file's contents. If the file's contents don't change, the content hash doesn't change. But, if the file's contents <em>do</em> change, then the content hash <em>also </em>changes.</p>
<p>Because the file name will now change when the code changes, the browser will download the new file since it won't have that specific file name in its cache.</p>
<h2 id="including-the-content-hash">Including the Content Hash</h2>
<p>To include the content hash in our JavaScript file names, we'll modify just one line of code in our <code>webpack.config.common.js</code> file. This line:</p><pre><code class="language-JavaScript">filename: 'main.js'</code></pre>
<p>Will change to this line:</p><pre><code class="language-JavaScript">filename: '[name].[contenthash].js'</code></pre>
<p>So that the entire file looks like this:</p><pre><code class="language-JavaScript">const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
entry: './src/index.js',
output: {
filename: '[name].[contenthash].js', // this line is the only difference
path: path.resolve(__dirname, 'dist')
},
plugins: [
new CleanWebpackPlugin(),
new HtmlWebpackPlugin({
filename: 'index.html',
inject: true,
template: path.resolve(__dirname, 'src', 'index.html'),
}),
],
module: {
rules: [
{
test: /\.(js|jsx)$/,
exclude: /[\\/]node_modules[\\/]/,
use: {
loader: 'babel-loader',
},
},
]
}
}</code></pre>
<p>Now if you run <code>yarn build</code>, you'll see that both your JavaScript and your CSS have content hashes included:</p>
<figcaption>Webpack production build output with content hashes included</figcaption>
</figure>
<p>If you run <code>yarn build</code> again and compare your new output to your old output, you'll notice that the content hashes are exactly the same both times.</p>
<p>But, if you edit your <code>./src/index.js</code> file in any way and then run <code>yarn build</code> again, you'll get a new content hash because the content has changed! Try it!</p>
<h2 id="minifying-css">Minifying CSS</h2>
<p>Last but not least, we may want to minify our CSS. We're already minifying our JavaScript for the production build, but we're not minifying our CSS yet. Let's do that.</p>
<p>We can minimize our CSS by using the <a href="https://github.com/NMFR/optimize-css-assets-webpack-plugin">optimize-css-assets-webpack-plugin</a>. Let's install that dependency now:</p><pre><code class="language-Bash">yarn add --dev optimize-css-assets-webpack-plugin</code></pre>
<p>Now we can add that to an optimization section of our <code>webpack.config.prod.js</code> file:</p><pre><code class="language-JavaScript">const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const commonConfig = require('./webpack.config.common')
module.exports = merge(commonConfig, {
mode: 'production',
devtool: 'source-map',
module: {
rules: [
{
test: /\.css$/,
use: [
MiniCssExtractPlugin.loader,
'css-loader',
],
},
],
},
plugins: [
new MiniCssExtractPlugin({
filename: '[name].[contenthash].css',
}),
],
optimization: {
minimizer: [
new OptimizeCssAssetsPlugin({
cssProcessorOptions: {
map: {
inline: false,
annotation: true,
},
},
}),
],
},
})</code></pre>
<p>Now if we run <code>yarn build</code> and then check out the contents of our <code>dist</code> directory, we can see that the resulting CSS is minified. Nice!</p><pre><code class="language-CSS">body{background:#ff1493;color:#fff}
/*# sourceMappingURL=main.66e0d6aeae6f3c6fb895.css.map */</code></pre>
<p>But wait! If we look at our resulting JavaScript file, it's not minified! Hmmm. It <em>was</em> minified before, so what happened here?</p>
<p>The issue is that we're now manually configuring the optimization minimizer section of our webpack config. When that section isn't in the webpack config file, webpack defaults to using its own minimizer preferences, which includes minifying JavaScript when the <code>mode</code> is set to <code>production</code>.</p>
<p>Since we're now overriding those defaults by adding in our preferences for minifying CSS assets, we'll need to also explicitly include instructions for how we want webpack to minify JavaScript assets.</p>
<h2 id="terserwebpackplugin">TerserWebpackPlugin</h2>
<p>We can minify our JavaScript files using the <a href="https://webpack.js.org/plugins/terser-webpack-plugin/">TerserWebpackPlugin</a>. Let's start by installing that dependency:</p><pre><code class="language-Bash">yarn add --dev terser-webpack-plugin</code></pre>
<p>Then, in our <code>webpack.config.prod.js</code> file, let's add the <code>terser-webpack-plugin</code> to our optimization minimizer settings at the bottom of the file:</p><pre><code class="language-JavaScript">const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const commonConfig = require('./webpack.config.common')
module.exports = merge(commonConfig, {
mode: 'production',
devtool: 'source-map',
module: {
rules: [
{
test: /\.css$/,
use: [
MiniCssExtractPlugin.loader,
'css-loader',
],
},
],
},
plugins: [
new MiniCssExtractPlugin({
filename: '[name].[contenthash].css',
}),
],
optimization: {
minimizer: [
new OptimizeCssAssetsPlugin({
cssProcessorOptions: {
map: {
inline: false,
annotation: true,
},
},
}),
new TerserPlugin({
// Use multi-process parallel running to improve the build speed
// Default number of concurrent runs: os.cpus().length - 1
parallel: true,
// Enable file caching
cache: true,
sourceMap: true,
}),
],
},
})</code></pre>
<p>Now if we run <code>yarn build</code> and look at the output in the <code>dist</code> directory, we should see that both our CSS files and our JavaScript files are minified. There we go!</p>
<h2 id="wrapping-up">Wrapping Up</h2>
<p>If you've followed along this far, I commend you!</p>
<figcaption>Photo by <a href="https://unsplash.com/@katya?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Katya Austin</a> / <a href="https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Unsplash</a></figcaption>
</figure>
<p>Let's review what we've learned so far:</p>
<ul>
<li>Webpack is a build tool for asset bundling and dependency management.</li>
<li>Webpack can be configured by a config file.</li>
<li>Plugins modify and extend the webpack build process.</li>
<li>Loaders instruct webpack how to handle different file types.</li>
<li>The <code>clean-webpack-plugin</code> can be used to remove old build artifacts from the <code>dist</code> directory.</li>
<li>The <code>html-webpack-plugin</code> helps manage the HTML file, including injecting JavaScript into the file via <code>script</code> tags.</li>
<li><code>webpack-dev-server</code> creates a dev server to make local development easier.</li>
<li>It's helpful to have separate webpack configs for development and production. You can share and merge config files using the <code>webpack-merge</code> plugin.</li>
<li>We can handle styling our app by including loaders like <code>css-loader</code>, <code>style-loader</code>, <code>sass-loader</code>, <code>less-loader</code>, and the <code>mini-css-extract-plugin</code> (which functions as both a plugin and a loader).</li>
<li>We can include new JavaScript syntax and features by using Babel and <code>babel-loader</code>.</li>
<li>We can include content hashes in our file names to help with cache busting and managing new versions of our released code.</li>
<li> We can minify our CSS with the <code>optimize-css-assets-webpack-plugin</code>.</li>
<li>We can minify our JavaScript with the <code>terser-webpack-plugin</code>.</li>
</ul>
<h2 id="what-s-next">What's Next?</h2>
<figcaption>Photo by <a href="https://unsplash.com/@tomparkes?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Tom Parkes</a> / <a href="https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Unsplash</a></figcaption>
</figure>
<p>Throughout this article, we've created a pretty respectable webpack config. All of these techniques we've discussed are industry standards and are common to use in enterprise-level projects.</p>
<p>But there's still more! Other advanced webpack topics include <a href="https://webpack.js.org/guides/code-splitting/">code splitting</a>, <a href="https://webpack.js.org/guides/lazy-loading/">lazy loading</a>, <a href="https://webpack.js.org/guides/tree-shaking/">tree shaking</a>, and more!</p>
<p>If you're interested in exploring webpack more on your own, I'd highly recommend reading through the official <a href="https://webpack.js.org/guides/">webpack guides</a>.</p>
<p>Again, all of the code we've gone through in this tutorial can be found in GitHub. The <a href="https://github.com/thawkin3/webpack-training-1/tree/demo/start">starting point is found here</a>, and the <a href="https://github.com/thawkin3/webpack-training-1">finished result is found here</a>.</p>
<p>Thanks for reading, and happy coding!</p>
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
