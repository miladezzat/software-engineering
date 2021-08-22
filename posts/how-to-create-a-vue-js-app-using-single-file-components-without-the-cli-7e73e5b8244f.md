---
card: "https://cdn-media-1.freecodecamp.org/images/1*L2343t5yIriMN69KY6jWEw.jpeg"
tags: [JavaScript]
description: "An understanding of Vue’s single-file components (SFCs) and N"
author: "Milad E. Fahmy"
title: "How to create a Vue.js app using Single-File Components, without the CLI."
created: "2021-08-16T11:34:57+02:00"
modified: "2021-08-16T11:34:57+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-vuejs tag-webpack tag-single-page-applications tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to create a Vue.js app using Single-File Components, without the CLI.</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*L2343t5yIriMN69KY6jWEw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*L2343t5yIriMN69KY6jWEw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*L2343t5yIriMN69KY6jWEw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*L2343t5yIriMN69KY6jWEw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*L2343t5yIriMN69KY6jWEw.jpeg" alt="How to create a Vue.js app using Single-File Components, without the CLI.">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;div id="app"&gt;
{{ message }}
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
data() {
return {
message: 'Hello World',
};
},
};
&lt;/script&gt;
&lt;style&gt;
#app {
font-size: 18px;
font-family: 'Roboto', sans-serif;
color: blue;
}
&lt;head&gt;
&lt;title&gt;Vue Hello World&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="app"&gt;&lt;/div&gt;
&lt;/body&gt;
import App from './App.vue';
new Vue({
el: '#app',
render: h =&gt; h(App),
presets: ['@babel/preset-env'],
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
entry: './src/main.js',
module: {
rules: [
{ test: /\.js$/, use: 'babel-loader' },
{ test: /\.vue$/, use: 'vue-loader' },
{ test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
]
},
plugins: [
new HtmlWebpackPlugin({
template: './src/index.html',
}),
new VueLoaderPlugin(),
]
{
"name": "hello-world",
"version": "1.0.0",
"description": "",
"main": "main.js",
"scripts": {
"serve": "webpack-dev-server --mode development"
},
"author": "",
"license": "ISC",
"devDependencies": {
"@babel/core": "^7.1.6",
"@babel/preset-env": "^7.1.6",
"babel-loader": "^8.0.4",
"css-loader": "^1.0.1",
"html-webpack-plugin": "^3.2.0",
"rimraf": "^2.6.2",
"vue": "^2.5.17",
"vue-loader": "^15.4.2",
"vue-style-loader": "^4.1.2",
"vue-template-compiler": "^2.5.17",
"webpack": "^4.26.0",
"webpack-cli": "^3.1.2",
"webpack-dev-server": "^3.1.10"
},
"dependencies": {}
&lt;div id="app"&gt;
&lt;input
v-model="message"
type="text"&gt;
&lt;h2 class="message"&gt;{{ message }}&lt;/h2&gt;
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
data() {
return {
message: 'Hello world!',
};
},
};
&lt;/script&gt;
&lt;style&gt;
.message {
font-size: 18px;
font-family: 'Roboto', sans-serif;
color: blue;
}
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
module.exports = {
entry: './src/main.js',
module: {
rules: [
{ test: /\.js$/, use: 'babel-loader' },
{ test: /\.vue$/, use: 'vue-loader' },
{ test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
]
},
devServer: {
open: true,
hot: true,
},
plugins: [
new HtmlWebpackPlugin({
template: './src/index.html',
}),
new VueLoaderPlugin(),
new webpack.HotModuleReplacementPlugin(),
]
"name": "hello-world",
"version": "1.0.0",
"description": "",
"main": "main.js",
"scripts": {
"clean": "rimraf dist",
"build": "npm run clean &amp;&amp; webpack --mode production",
"serve": "webpack-dev-server --mode development"
},
"author": "",
"license": "ISC",
"devDependencies": {
"@babel/core": "^7.1.6",
"@babel/preset-env": "^7.1.6",
"babel-loader": "^8.0.4",
"css-loader": "^1.0.1",
"html-webpack-plugin": "^3.2.0",
"rimraf": "^2.6.2",
"vue": "^2.5.17",
"vue-loader": "^15.4.2",
"vue-style-loader": "^4.1.2",
"vue-template-compiler": "^2.5.17",
"webpack": "^4.26.0",
"webpack-cli": "^3.1.2",
"webpack-dev-server": "^3.1.10"
},
"dependencies": {}
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
