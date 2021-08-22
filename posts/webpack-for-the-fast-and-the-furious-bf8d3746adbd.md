---
card: "https://cdn-media-1.freecodecamp.org/images/1*SpCunp0GLPDMsjM8hsX0qA.jpeg"
tags: [JavaScript]
description: "This is a guide that is meant to help you ease your developme"
author: "Milad E. Fahmy"
title: "Webpack for The Fast and The Furious"
created: "2021-08-16T10:30:12+02:00"
modified: "2021-08-16T10:30:12+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-webpack tag-es6 tag-nodejs tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">Webpack for The Fast and The Furious</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*SpCunp0GLPDMsjM8hsX0qA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*SpCunp0GLPDMsjM8hsX0qA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*SpCunp0GLPDMsjM8hsX0qA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*SpCunp0GLPDMsjM8hsX0qA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*SpCunp0GLPDMsjM8hsX0qA.jpeg" alt="Webpack for The Fast and The Furious">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
* @Author Ashwin Hariharan
* @Details Webpack config file for adding new vendors, defining entry points and shimming modules.
*/
var webpack = require('webpack');
var path = require("path");
var lib_dir = __dirname + '/public/libs',
node_dir = __dirname + '/node_modules';
// bower_dir = __dirname + '/bower_components'
var config = {
resolve: {
alias: {
react: node_dir + '/react',
reactDom: lib_dir + '/react-dom',
jquery: lib_dir + '/jquery-1.11.2.min.js',
magnificPopup: lib_dir + '/jquery.magnific-popup.js' //JQuery Plugin
}
},
entry: {
app: ['./public/src/js/app-main'],
vendors: ['react','reactDom','jquery','magnificPopup']
},
output: {
path: path.join(__dirname, "public"),
filename: "dist/js/[name].bundle.js"
},
plugins: [
new webpack.ProvidePlugin({
jQuery: "jquery",
'window.jQuery': "jquery"
}),
new webpack.optimize.CommonsChunkPlugin('vendors', 'dist/js/vendors.js', Infinity),
],
module: {
noParse: [
new RegExp(lib_dir + '/react.js'),
new RegExp(lib_dir +'/jquery-1.11.2.min.js')
],
loaders: [
{
test: /\.js$/,
loader: 'babel',
query: {
presets: ['react', 'es2015']
}
},
]
}
};
module.exports = config;</code></pre><p>This config assumes that you have use some node modules and dist version of few libraries saved inside a <em>public/libs</em> folder. Now if you’ve read other tutorials, you understand what the configs in this file do, however I’m still gonna briefly explain what few things in this file are for —</p><ul><li><strong>Aliases / vendors</strong><br>Here is where you include all of your libraries/node modules/other vendors and map each of them to aliases. Then if you use a module in any part of your application logic, you can write this (in your <em>app-main.js </em>or any other JS file):</li></ul><pre><code class="language-js">var React = require(‘react’);
var ReactDom = require('reactDom');
var $ = require('jquery');
//Your application logic</code></pre><p>Or if you prefer AMD over CommonJS:</p><pre><code class="language-js">define(
[
‘react’,
’reactDom’,
’jquery’
],
function(React, ReactDom, $) {
//Your application logic
}
);</code></pre><p>Or in ES6 too:</p><pre><code class="language-js">import React from 'react';
import ReactDom from 'reactDom';
import $ from 'jquery';</code></pre><ul><li><strong>Defining your entry points</strong></li></ul><pre><code class="language-js">entry: {
}</code></pre><p>This block in your config allows Webpack to determine where your app begins execution, and it creates chunks out of it. Having multiple entry points in your application is always advantageous. In particular, you can add all your vendor files — like jQuery and ReactJS — into one chunk. This way, your vendor files will remain the same, even when you modify your source files.</p><p>So in the above config, there are two entry points. One for your app’s entry where your JS begins, and one for your vendors — each of them mapped to a variable name.</p><ul><li><strong>Your output directory and bundle file names</strong></li></ul><pre><code class="language-js">output: {
path: path.join(__dirname, “public”),
filename: “dist/js/[name].bundle.js”
{
test: /\.js$/,
loader: 'jsx-loader'
},
]</code></pre><p>However, if you write your code in JSX and ES6, then you’ll need to use the <em>babel-loader, </em>along with the babel plugin for React. So run <em>npm install babel-core babel-loader babel-preset-es2015 babel-preset-react</em> and then add this to your config instead of the above.</p><pre><code class="language-js">loaders: [
{
test: /\.js$/,
loader: ‘babel’,
query: {
presets: [‘react’, ‘es2015’]
},
include: path.join(__dirname, ‘public’)
}
]</code></pre><p>Likewise, you have loaders to compile TypeScript, CoffeeScript, etc.</p><h3 id="example"><strong>Example</strong></h3><ul><li>Your web-server file:</li></ul><pre><code class="language-js">var http = require("http");
var express = require("express");
var consolidate = require('consolidate');
var handlebars = require('handlebars');
var bodyParser = require('body-parser');
var routes = require('./routes');
var app = express();
//Set the folder-name from where you serve the html page.
app.set('views', 'views');
//For using handlebars as the template engine.
app.set('view engine', 'html');
app.engine('html', consolidate.handlebars);
//Set the folder from where you serve all static files like images, css, javascripts, libraries etc
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));
var portNumber = 8000;
http.createServer(app).listen(portNumber, function(){
console.log('Server listening at port '+ portNumber);
app.get('/', function(req, res){
console.log('request to / received');
res.render('index.html');
});
});</code></pre><ul><li>app-main.js from where our front-end logic begins:</li></ul><pre><code class="language-js">define(
[
‘react’,
’reactDom’,
’./components/home-page’
],
function(React, ReactDom, HomePage){
console.log(‘Loaded the Home Page’);
ReactDom.render(&lt;HomePage /&gt;, document.getElementById(‘componentContainer’));
}
);</code></pre><ul><li><em>home-page.js</em> is our parent React component which could contain something like this:</li></ul><pre><code class="language-js">define(['react', 'jquery', 'magnificPopup'], function(React, $) {
var HomePage = React.createClass({
getInitialState: function() {
return {
userName: 'ashwin'
}
},
componentDidMount: function() {
$('.test-popup-link').magnificPopup({
type: 'image'
// other options
});
},
render: function() {
return (
&lt;div id="homePage"&gt;
{this.state.userName}
&lt;a className="test-popup-link" href="path-to-image.jpg"&gt;Open popup&lt;/a&gt;
&lt;/div&gt;
);
}
});
return HomePage;
test: /\.jsx?$/,
loaders: [‘react-hot’],
include: path.join(__dirname, ‘public’)
}</code></pre><p>This tells Webpack to use React Hot Loader for your components. Make sure React Hot Loader comes before Babel in the loaders array. Also make sure you have <em>include: path.join(__dirname, ‘public’)</em> to avoid processing node_modules, or you may get an error like this:</p><p><em>Uncaught TypeError: Cannot read property ‘NODE_ENV’ of undefined</em></p><ul><li><strong>Step 2</strong>: Changes to your <em>index.html</em></li></ul><p>If your <em>index.html</em> has something like this:</p><pre><code class="language-html">&lt;script src="/dist/js/vendors.js"&gt;&lt;/script&gt;
&lt;script src="/dist/js/app.bundle.js"&gt;&lt;/script&gt;</code></pre><p>Change this to point to your webpack-dev-server proxy:</p><pre><code class="language-html">&lt;script src="http://localhost:8080/dist/js/vendors.js"&gt;&lt;/script&gt;
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
