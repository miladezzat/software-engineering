---
card: "https://cdn-media-1.freecodecamp.org/images/1*5CEuIhC7lvb5jxiTr0sihg.jpeg"
tags: [JavaScript]
description: "For the past three weeks, I have been trying to create a Reac"
author: "Milad E. Fahmy"
title: "How to Create a React app from scratch using Webpack 4"
created: "2021-08-16T11:46:18+02:00"
modified: "2021-08-16T11:46:18+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-technology tag-web-development tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create a React app from scratch using Webpack 4</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*5CEuIhC7lvb5jxiTr0sihg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*5CEuIhC7lvb5jxiTr0sihg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*5CEuIhC7lvb5jxiTr0sihg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*5CEuIhC7lvb5jxiTr0sihg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*5CEuIhC7lvb5jxiTr0sihg.jpeg" alt="How to Create a React app from scratch using Webpack 4">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>For the past three weeks, I have been trying to create a React app from scratch to understand the set-up with Webpack. My aim was to set up a simple configuration which can then be grown upon. It’s been a struggle to understand Webpack. But thanks to this <a href="https://www.valentinog.com/blog/webpack-4-tutorial/" rel="noopener">tutorial</a> by <a href="https://twitter.com/gagliardi_vale" rel="noopener">Valentino Gagliardi,</a> I’m much enlightened.</p><p>What I’m planning to do is to make a search functionality with some fake JSON data (or real). In this blog post, I will go through the set up of my project. In the next one, I am planning to show how to set up testing. I would also like to add a server to this using Node.js, but not sure if the scope of my project would need that.</p><p><em>(<strong>Note</strong>: I have provided my Webpack setup at the end of this blog post)</em></p><p>Without further ado, let’s get on with the set up!</p><p>Make a <strong>new project</strong> and <strong>cd</strong> into it:</p><pre><code>mkdir react_searchcd react_search</code></pre><p>Create a <strong>package.json</strong> file:</p><pre><code>npm init</code></pre><p>If you want to skip all the questions, add the -y flag:</p><pre><code>npm init -y</code></pre><p>We need to install <strong>webpack</strong> as a dev dependency and <strong>webpack-cli </strong>so that you can use webpack in the command line:</p><pre><code>npm i webpack webpack-cli -D</code></pre><ul><li>i: install</li><li>-D: — save-dev</li></ul><p>Create a <strong>src folder </strong>with <strong>index.js</strong> and place the following code as an example:</p><pre><code>console.log("hello");</code></pre><p>Now add the following scripts to your package.json (in bold):</p><pre><code>{
"name": "react_search",
"version": "1.0.0",
"description": "Search app using React",
"main": "index.js",
"scripts": {
"start": "webpack --mode development",
"build": "webpack --mode production"
},  "keywords": [],
"author": "",
"license": "ISC",
"devDependencies": {
"webpack": "^4.0.1",
"webpack-cli": "^2.0.10"
}
module: {
rules: [
{
test: /\.js$/,
exclude: /node_modules/,
use: {
loader: "babel-loader"
}
}
]
}
};</code></pre><p>We then need to make a separate file called <strong>.babelrc</strong> to provide the options for babel-loader. You can include it in the webpack.config.js file, but I have seen that most projects have this separated. This results in clearer readability, and it can be used by other tools unrelated to webpack. When you state that you’re using babel-loader in your webpack config, it will look for .babelrc file if there is one.</p><pre><code class="language-js">{
"presets": ["env", "react"]
}</code></pre><p>Next, change your <strong>index.js</strong> file to render a component:</p><pre><code class="language-js">import React from "react";
import ReactDOM from "react-dom";
const Index = () =&gt; {
return &lt;div&gt;Hello React!&lt;/div&gt;;
};
ReactDOM.render(&lt;Index /&gt;, document.getElementById("index"));</code></pre><p>We will also need to create an <strong>index.html</strong> file in the <strong>src</strong> folder where we can add our section element with id <code>index</code>. This is where we render our main react component:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;meta http-equiv="X-UA-Compatible" content="ie=edge"&gt;
&lt;title&gt;React and Webpack4&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;section id="index"&gt;&lt;/section&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>Now we need to install <strong>html-webpack-plugin</strong> and use this in our webpack config file. This plugin generates an HTML file with &lt;script&gt; injected, writes th<strong>is to dist/index</strong>.html, and minifies the file.</p><p>Install <strong>html-webpack-plugin</strong> as a dev dependency:</p><pre><code>npm i html-webpack-plugin -D</code></pre><p>Update the webpack config like so:</p><pre><code class="language-js">const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
template: "./src/index.html",
filename: "./index.html"
});
module.exports = {
module: {
rules: [
{
test: /\.js$/,
exclude: /node_modules/,
use: {
loader: "babel-loader"
}
}
]
},
plugins: [htmlPlugin]
};</code></pre><p>You can also input the plugin like this:</p><pre><code>plugins: [
new HtmlWebPackPlugin({
template: "./src/index.html",
filename: "./index.html"
});
"name": "react_search",
"version": "1.0.0",
"description": "Search app using React",
"main": "index.js",
"scripts": {
"start": "webpack-dev-server --mode development --open",    "build": "webpack --mode production"
},
"keywords": [],
"author": "",
"license": "ISC",
"dependencies": {
"react": "^16.2.0",
"react-dom": "^16.2.0"
"devDependencies": {
"babel-core": "^6.26.0",
"babel-loader": "^7.1.4",
"babel-preset-env": "^1.6.1",
"babel-preset-react": "^6.24.1",
"html-webpack-plugin": "^3.0.6",
"webpack": "^4.1.1",
"webpack-cli": "^2.0.10",
"webpack-dev-server": "^3.1.0"
}
}</code></pre><p>If you now run <code>npm run start</code> you should see <strong>localhost:8080</strong> open up in your default browser — that’s what the <code>—-open</code> flag is for. Now everytime you make changes, it will refresh the page.</p><p>You can also add a <code>--hot</code> flag to your npm start script which will allow you to only reload the component that you’ve changed instead of doing a full page reload. This is <a href="https://webpack.js.org/concepts/hot-module-replacement/#src/components/Sidebar/Sidebar.jsx" rel="noopener">Hot Module Replacement</a>.</p><h3 id="setting-up-css">Setting up CSS</h3><p>The last part involves setting up our CSS. As we will be importing CSS files into our React components, we need <strong>css-loader</strong> module to resolve them. Once that’s resolved, we also need a <strong>style-loader</strong> to inject this into our DOM — adding a &lt;style&gt; tag into the &lt;head&gt; element of our HTML.</p><p>Go ahead and install both of these modules as a dev dependency:</p><pre><code>npm i css-loader style-loader -D</code></pre><p>We then need to update our webpack.config.js file like so:</p><pre><code class="language-js">const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebPackPlugin({
template: "./src/index.html",
filename: "./index.html"
});
module.exports = {
module: {
rules: [
{
test: /\.js$/,
exclude: /node_modules/,
use: {
loader: "babel-loader"
}
},
{
test: /\.css$/,
use: ["style-loader", "css-loader"]
}
]
},
plugins: [htmlWebpackPlugin]
};</code></pre><p>Note that the order of adding these loaders is important. First, we need to resolve the CSS files before adding them to the DOM with the style-loader. By default, webpack uses the loaders from the right (last element in the array) to the left (first element in the array).</p><h4 id="making-css-modular">Making CSS modular</h4><p>We can also make CSS modular using webpack. This means class name will be scoped locally and specific to only the component in question.</p><p>To do this, we can provide some options to css-loader:</p><pre><code class="language-js">const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebPackPlugin({
template: "./src/index.html",
filename: "./index.html"
});
module.exports = {
module: {
rules: [
{
test: /\.js$/,
exclude: /node_modules/,
use: {
loader: "babel-loader"
}
},
{
test: /\.css$/,
use: [
{
loader: "style-loader"
},
{
loader: "css-loader",
options: {
modules: true,
importLoaders: 1,
localIdentName: "[name]_[local]_[hash:base64]",
sourceMap: true,
minimize: true
}
}
]
}
]
},
plugins: [htmlWebpackPlugin]
};</code></pre><p>As we need to give options, each loader is now an object with a key-value pair. To enable CSS modules, we need to set <strong>module</strong> option for css-loader to be <strong>true</strong>. The <strong>importLoaders</strong> option configures how many loaders before css-loader should be applied. For example, sass-loader would have to come before css-loader.</p><p>The <strong>localIdentName</strong> allows you to configure the generated identification.</p><ul><li><strong>[name]</strong> will take the name of your component</li><li><strong>[local]</strong> is the name of your class/id</li><li><strong>[hash:base64]</strong> is the randomly generated hash which will be unique in every component’s CSS</li></ul><p>To make this a bit more visual, I’ll give you an example. Say I have a component named <code>Form</code> and I have a button with a CSS class <code>primaryButton</code>. I also have another component called <code>Search</code> and a button in it with a CSS class <code>primaryButton</code>. However, both of these classes have different CSS:</p><pre><code class="language-css">Form button.primaryButton {
background-color: green;
}
Search button.primaryButton {
background-color: blue;
return &lt;div className={style.
nameOfYourCSSClass}&gt;
Hello Search Component :)
&lt;/div&gt;
}</code></pre><p>You don’t have to call it style but what I found is that most people have given it this name in their projects.</p><h4 id="my-webpack-boilerplate">My Webpack boilerplate</h4><p>For anyone who wants a quick clone of this Webpack setup, I have this on my <a href="https://github.com/pinglinh/simple_webpack_boilerplate" rel="noopener">GitHub</a>. I’ve also included a more succinct guide in the README.</p><h4 id="entry-and-output-points">Entry and output points</h4><p>Webpack 4 by default has a default entry point of <strong>index.js</strong> in your <strong>src</strong> folder. If you would like to point to a different file, you can do so by specifying an entry point in your webpack config file:</p><p>e.g.</p><pre><code class="language-js">module.exports = {
entry: "./src/app.js",  module: {
...
}
}</code></pre><p>You can also specify output file like so:</p><pre><code class="language-js">const path = require('path')
module.exports = {
entry: "./src/app.js",
output: {
path: path.resolve(‘dist’),
filename: ‘bundled.js’
},
module: {
...
}
}</code></pre><p>Thanks to <a href="undefined" rel="noopener">Gudu Kassa</a> for pointing this out!</p><p><em>If you have found this helpful please share it on social media :)</em></p><p><a href="http://www.pinglinh.com" rel="noopener">www.pinglinh.com</a></p><p>Follow me on <a href="http://twitter.com/pinglinh" rel="noopener">Twitter</a> | Check out my <a href="http://linkedin.com/in/lnguyenmy/" rel="noopener">LinkedIn</a> | See my <a href="http://github.com/pinglinh" rel="noopener">GitHub</a></p>
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
