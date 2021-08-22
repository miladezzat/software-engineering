---
card: "https://cdn-media-1.freecodecamp.org/images/1*x8FsCF_x1ZiNhJzGoTyM8A.jpeg"
tags: [JavaScript]
description: "by Anurag Majumdar"
author: "Milad E. Fahmy"
title: "How to write simple modern JavaScript apps with Webpack and progressive web techniques"
created: "2021-08-16T11:32:27+02:00"
modified: "2021-08-16T11:32:27+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-progressive-web-app tag-technology tag-programming tag-software-engineering ">
<header class="post-full-header">
<h1 class="post-full-title">How to write simple modern JavaScript apps with Webpack and progressive web techniques</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*x8FsCF_x1ZiNhJzGoTyM8A.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*x8FsCF_x1ZiNhJzGoTyM8A.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*x8FsCF_x1ZiNhJzGoTyM8A.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*x8FsCF_x1ZiNhJzGoTyM8A.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*x8FsCF_x1ZiNhJzGoTyM8A.jpeg" alt="How to write simple modern JavaScript apps with Webpack and progressive web techniques">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="utf-8" /&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
&lt;meta http-equiv="X-UA-Compatible" content="ie=edge" /&gt;
&lt;!-- Critical Styles --&gt;
&lt;style&gt;
html {
box-sizing: border-box;
}
*,
*:after,
*:before {
box-sizing: inherit;
}
body {
margin: 0;
padding: 0;
font: 18px 'Oxygen', Helvetica;
background: #ececec;
}
header {
height: 60px;
background: #512DA8;
color: #fff;
display: flex;
align-items: center;
padding: 0 40px;
box-shadow: 1px 2px 6px 0px #777;
}
h1 {
margin: 0;
}
.banner {
text-decoration: none;
color: #fff;
cursor: pointer;
}
main {
display: flex;
justify-content: center;
height: calc(100vh - 140px);
padding: 20px 40px;
overflow-y: auto;
}
button {
background: #512DA8;
border: 2px solid #512DA8;
cursor: pointer;
box-shadow: 1px 1px 3px 0px #777;
color: #fff;
padding: 10px 15px;
border-radius: 20px;
}
.button {
display: flex;
justify-content: center;
}
button:hover {
box-shadow: none;
}
footer {
height: 40px;
background: #2d3850;
color: #fff;
display: flex;
align-items: center;
padding: 40px;
}
&lt;/style&gt;
&lt;title&gt;Vanilla Todos PWA&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;body&gt;
&lt;!-- Main Application Section --&gt;
&lt;header&gt;
&lt;h3&gt;&lt;a class="banner"&gt; Vanilla Todos PWA &lt;/a&gt;&lt;/h3&gt;
&lt;/header&gt;
&lt;main id="app"&gt;&lt;/main&gt;
&lt;footer&gt;
&lt;span&gt;&amp;copy; 2019 Anurag Majumdar - Vanilla Todos SPA&lt;/span&gt;
&lt;/footer&gt;
&lt;!-- Critical Scripts --&gt;
&lt;script async src="&lt;%= htmlWebpackPlugin.files.chunks.main.entry %&gt;"&gt;&lt;/script&gt;
&lt;noscript&gt;
This site uses JavaScript. Please enable JavaScript in your browser.
&lt;/noscript&gt;
&lt;/body&gt;
&lt;/body&gt;
var dynamicCacheName = 'todo-dynamic-v3';
self.addEventListener('install', function (event) {
self.skipWaiting();
event.waitUntil(
caches.open(staticAssetsCacheName).then(function (cache) {
cache.addAll([
'/',
"chunks/todo.d41d8cd98f00b204e980.js","index.html","main.d41d8cd98f00b204e980.js"
]
);
}).catch((error) =&gt; {
console.log('Error caching static assets:', error);
})
);
});
self.addEventListener('activate', function (event) {
if (self.clients &amp;&amp; clients.claim) {
clients.claim();
}
event.waitUntil(
caches.keys().then(function (cacheNames) {
return Promise.all(
cacheNames.filter(function (cacheName) {
return (cacheName.startsWith('todo-')) &amp;&amp; cacheName !== staticAssetsCacheName;
})
.map(function (cacheName) {
return caches.delete(cacheName);
})
).catch((error) =&gt; {
console.log('Some error occurred while removing existing cache:', error);
});
}).catch((error) =&gt; {
console.log('Some error occurred while removing existing cache:', error);
}));
});
self.addEventListener('fetch', (event) =&gt; {
event.respondWith(
caches.match(event.request).then((response) =&gt; {
return response || fetch(event.request)
.then((fetchResponse) =&gt; {
return cacheDynamicRequestData(dynamicCacheName, event.request.url, fetchResponse.clone());
}).catch((error) =&gt; {
console.log(error);
});
}).catch((error) =&gt; {
console.log(error);
})
);
});
function cacheDynamicRequestData(dynamicCacheName, url, fetchResponse) {
return caches.open(dynamicCacheName)
.then((cache) =&gt; {
cache.put(url, fetchResponse.clone());
return fetchResponse;
}).catch((error) =&gt; {
console.log(error);
});
"presets": ["@babel/preset-env"],
"plugins": ["@babel/plugin-syntax-dynamic-import"]
entry: {
// Mention Entry File
},
output: {
// Mention Output Filenames
},
module: {
rules: [
{
test: /\.js$/,
exclude: /node_modules/,
use: {
loader: 'babel-loader'
}
}
]
},
plugins: [
// Plugins
]
entry: {
// Mention Entry File
},
output: {
// Mention Output Filenames
},
module: {
rules: [
{
test: /\.js$/,
exclude: /node_modules/,
use: {
loader: 'babel-loader'
}
},
{
test: /\.scss$/,
use: [
'style-loader',
MiniCssExtractPlugin.loader,
'css-loader',
'sass-loader'
]
}
]
},
plugins: [
new MiniCssExtractPlugin({
filename: '[name].css'
}),
]
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
module.exports = (env, argv) =&gt; ({
entry: {
main: './src/main.js'
},
devtool: argv.mode === 'production' ? false : 'source-map',
output: {
path: path.resolve(__dirname, 'dist'),
chunkFilename:
argv.mode === 'production'
? 'chunks/[name].[chunkhash].js'
: 'chunks/[name].js',
filename:
argv.mode === 'production' ? '[name].[chunkhash].js' : '[name].js'
},
module: {
rules: [
{
test: /\.js$/,
exclude: /node_modules/,
use: {
loader: 'babel-loader'
}
},
{
test: /\.scss$/,
use: [
'style-loader',
MiniCssExtractPlugin.loader,
'css-loader',
'sass-loader'
]
}
]
},
plugins: [
new CleanWebpackPlugin('dist', {}),
new MiniCssExtractPlugin({
filename:
argv.mode === 'production'
? '[name].[contenthash].css'
: '[name].css'
}),
new HtmlWebpackPlugin({
inject: false,
hash: true,
template: './index.html',
filename: 'index.html'
}),
new WebpackMd5Hash(),
new CopyWebpackPlugin([
// {
//     from: './src/assets',
//     to: './assets'
// },
// {
//     from: 'manifest.json',
//     to: 'manifest.json'
// }
]),
new CompressionPlugin({
algorithm: 'gzip'
})
],
devServer: {
contentBase: 'dist',
watchContentBase: true,
port: 1000
}
const fs = require('fs');
const dest = 'dist/sw.js';
const staticAssetsCacheName = 'todo-assets-v1';
const dynamicCacheName = 'todo-dynamic-v1';
let staticAssetsCacheFiles = glob
.sync('dist/**/*')
.map((path) =&gt; {
return path.slice(5);
})
.filter((file) =&gt; {
if (/\.gz$/.test(file)) return false;
if (/sw\.js$/.test(file)) return false;
if (!/\.+/.test(file)) return false;
return true;
});
const stringFileCachesArray = JSON.stringify(staticAssetsCacheFiles);
const serviceWorkerScript = `var staticAssetsCacheName = '${staticAssetsCacheName}';
var dynamicCacheName = '${dynamicCacheName}';
self.addEventListener('install', function (event) {
self.skipWaiting();
event.waitUntil(
caches.open(staticAssetsCacheName).then(function (cache) {
cache.addAll([
'/',
${stringFileCachesArray.slice(1, stringFileCachesArray.length - 1)}
]
);
}).catch((error) =&gt; {
console.log('Error caching static assets:', error);
})
);
});
self.addEventListener('activate', function (event) {
if (self.clients &amp;&amp; clients.claim) {
clients.claim();
}
event.waitUntil(
caches.keys().then(function (cacheNames) {
return Promise.all(
cacheNames.filter(function (cacheName) {
return (cacheName.startsWith('todo-')) &amp;&amp; cacheName !== staticAssetsCacheName;
})
.map(function (cacheName) {
return caches.delete(cacheName);
})
).catch((error) =&gt; {
console.log('Some error occurred while removing existing cache:', error);
});
}).catch((error) =&gt; {
console.log('Some error occurred while removing existing cache:', error);
}));
});
self.addEventListener('fetch', (event) =&gt; {
event.respondWith(
caches.match(event.request).then((response) =&gt; {
return response || fetch(event.request)
.then((fetchResponse) =&gt; {
return cacheDynamicRequestData(dynamicCacheName, event.request.url, fetchResponse.clone());
}).catch((error) =&gt; {
console.log(error);
});
}).catch((error) =&gt; {
console.log(error);
})
);
});
function cacheDynamicRequestData(dynamicCacheName, url, fetchResponse) {
return caches.open(dynamicCacheName)
.then((cache) =&gt; {
cache.put(url, fetchResponse.clone());
return fetchResponse;
}).catch((error) =&gt; {
console.log(error);
});
}
`;
fs.writeFile(dest, serviceWorkerScript, function(error) {
if (error) return;
console.log('Service Worker Write success');
"name": "vanilla-todos-pwa",
"version": "1.0.0",
"description": "A simple todo application using ES6 and Webpack",
"main": "src/main.js",
"scripts": {
"build": "webpack --mode production &amp;&amp; node build-sw",
"serve": "webpack-dev-server --mode=development --hot"
},
"keywords": [],
"author": "Anurag Majumdar",
"license": "MIT",
"devDependencies": {
"@babel/core": "^7.2.2",
"@babel/plugin-syntax-dynamic-import": "^7.2.0",
"@babel/preset-env": "^7.2.3",
"autoprefixer": "^9.4.5",
"babel-core": "^6.26.3",
"babel-loader": "^8.0.4",
"babel-preset-env": "^1.7.0",
"clean-webpack-plugin": "^1.0.0",
"compression-webpack-plugin": "^2.0.0",
"copy-webpack-plugin": "^4.6.0",
"css-loader": "^2.1.0",
"html-webpack-plugin": "^3.2.0",
"mini-css-extract-plugin": "^0.5.0",
"node-sass": "^4.11.0",
"sass-loader": "^7.1.0",
"style-loader": "^0.23.1",
"terser": "^3.14.1",
"webpack": "^4.28.4",
"webpack-cli": "^3.2.1",
"webpack-dev-server": "^3.1.14",
"webpack-md5-hash": "0.0.6"
}
import { AppModel } from './app.model';
export const AppComponent = {
// App Component code here...
};</code></pre><figcaption>import &amp; export statements in action</figcaption></figure><h4 id="object-literal-syntax-or-es6-class-syntax">Object Literal Syntax Or ES6 Class Syntax</h4><p>Building components is a very important part of our application. We can choose to go with the latest web standards like Web Components too, but to keep things simple we can go ahead and use object literal syntax or ES6 class syntax.</p><p>The only thing with class syntax is that we need to instantiate it and then export it. So to keep things even simpler, I went ahead with object literal syntax for component architecture.</p><pre><code class="language-jsx">import { appTemplate } from './app.template';
import { AppModel } from './app.model';
export const AppComponent = {
init() {
this.appElement = document.querySelector('#app');
this.initEvents();
this.render();
},
initEvents() {
this.appElement.addEventListener('click', event =&gt; {
if (event.target.className === 'btn-todo') {
import( /* webpackChunkName: "todo" */ './todo/todo.module')
.then(lazyModule =&gt; {
lazyModule.TodoModule.init();
})
.catch(error =&gt; 'An error occurred while loading Module');
}
});
document.querySelector('.banner').addEventListener('click', event =&gt; {
event.preventDefault();
this.render();
});
},
render() {
this.appElement.innerHTML = appTemplate(AppModel);
}
};</code></pre><p><strong>Lines 4–32: </strong>We export an object called <strong>AppComponent </strong>which is immediately available for use in other parts of our application.</p><p>You can go ahead and use ES6 class syntax or standard Web Components too and achieve a more declarative way of writing code here. For simplicity’s sake, I chose to write the demo application in a more imperative approach.</p><h4 id="dynamic-imports">Dynamic Imports</h4><p>Remember I talked about missing out on the “L” of the <strong>PRPL </strong>pattern? Dynamic import is the way to go ahead and lazy load our components or modules. Since we used the <strong>App Shell</strong> and <strong>PRPL </strong>together to cache the shell and other route assets, dynamic imports import the lazy component or module from the cache instead of the network.</p><p>Note that if we only used <strong>App Shell </strong>architecture, the remaining assets of the application i.e., the contents of <strong>chunks </strong>folder, would not have been cached.</p><p><strong>Lines 15–19: </strong>Refer to App Component code; this is the place where dynamic imports shine. If we click on a button having the class <strong>btn-todo,</strong> then only this <strong>TodoModule</strong> gets loaded. By the way, <strong>TodoModule </strong>is just another JavaScript file which consists of a set of object components.</p><h4 id="es6-arrow-functions-es6-template-literals">ES6 Arrow Functions &amp; ES6 Template Literals</h4><p>Arrow functions should be used especially where we want to make sure of the <strong>this </strong>keyword inside the function, which should refer to the surrounding context where the arrow function is declared. Apart from that, these functions really help in creating neat shorthand syntax.</p><pre><code class="language-jsx">export const appTemplate = model =&gt; `
&lt;section class="app"&gt;
&lt;h3&gt; ${model.title} &lt;/h3&gt;
&lt;section class="button"&gt;
&lt;button class="btn-todo"&gt; Todo Module &lt;/button&gt;
&lt;/section&gt;
&lt;/section&gt;
{
id: 1,
src: '',
alt: '',
designation: '',
period: '',
description: ''
},
{
id: 2,
src: '',
alt: '',
designation: '',
period: '',
description: ''
},
//...
];
&lt;section class="work__image"&gt;
&lt;img class="work__image-content" type="image/svg+xml" src="${
&lt;/section&gt;
&lt;section class="work__content"&gt;
&lt;section class="work__content-text"&gt;
&lt;/section&gt;
&lt;/section&gt;
&lt;/section&gt;
`;
export const workTemplate = (model) =&gt; `
&lt;section class="work__section"&gt;
&lt;section class="work-text"&gt;
&lt;header class="header-text"&gt;
&lt;span class="work-text__header"&gt; Work &lt;/span&gt;
&lt;/header&gt;
&lt;section class="work-text__content content-text"&gt;
&lt;p class="work-text__content-para"&gt;
This area signifies work experience
&lt;/p&gt;
&lt;/section&gt;
&lt;/section&gt;
&lt;/section&gt;
&lt;/section&gt;
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
