---
card: "https://cdn-media-1.freecodecamp.org/images/1*NluDivebM4nQi0OLMYuVHw.png"
tags: [JavaScript]
description: So you’ve been using create-react-app a.k.a CRA for a while n
author: "Milad E. Fahmy"
title: "How to set up & deploy your React app from scratch using Webpack and Babel"
created: "2021-08-15T19:37:04+02:00"
modified: "2021-08-15T19:37:04+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-tech tag-programming tag-apps-tag ">
<header class="post-full-header">
<h1 class="post-full-title">How to set up &amp; deploy your React app from scratch using Webpack and Babel</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*NluDivebM4nQi0OLMYuVHw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*NluDivebM4nQi0OLMYuVHw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*NluDivebM4nQi0OLMYuVHw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*NluDivebM4nQi0OLMYuVHw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*NluDivebM4nQi0OLMYuVHw.png" alt="How to set up &amp; deploy your React app from scratch using Webpack and Babel">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>So you’ve been using create-react-app a.k.a CRA for a while now. It’s great and you can get straight to coding. But when do you need to eject from create-react-app and start configuring your own React application? There will be a time when we have to let go of the safety check and start venturing out on our own.</p>
<p>This guide will cover the most simple React configuration that I’ve personally used for almost all of my React projects. By the end of this tutorial we will have our own personal boilerplate and learn some configurations from it.</p>
<h4 id="table-of-contents">Table of Contents</h4>
<ul>
<li>Why create your own configuration?</li>
<li>Configuring webpack 4</li>
<li>Configuring Babel 7</li>
<li>Adding Prettier</li>
<li>Adding source map for better error logs</li>
<li>Setting up ESLint</li>
<li>I found errors! What do I do?</li>
<li>Adding CSS LESS processor</li>
<li>Deploying React app to Netlify</li>
<li>Conclusion</li>
</ul>
<h3 id="why-create-your-own-configuration">Why create your own configuration?</h3>
<p>There are certain reasons that make creating your own React configuration make sense. You are likely good with React and you want to learn how to use tools like webpack and Babel on your own. These build tools are powerful, and if you have some extra time, it’s always good to learn about them.</p>
<p>Developers are naturally curious people, so if you feel you’d like to know how things work and which part does what, then let me help you with it.</p>
<p>Furthermore, hiding React configuration by create-react-app is meant for developers starting to learn React, as <a href="https://youtu.be/G39lKaONAlA?t=873" rel="noopener">configuration should not stand in the way of getting started</a>. But when things get serious, of course you need more tools to integrate in your project. Think about:</p>
<ul>
<li>Adding webpack loaders for less, sass</li>
<li>Doing server side rendering</li>
<li>Using new ES versions</li>
<li>Adding MobX and Redux</li>
<li>Making your own configuration just for learning sake</li>
</ul>
<p>If you look around the Internet, there are some hacks to get around CRA limitations like <a href="https://github.com/timarney/react-app-rewired" rel="noopener">create-react-app rewired</a>. But really, why not just learn React configuration on your own? I will help you get there. Step by step.</p>
<p>Now that you’re convinced to learn some configuration, let’s start by initializing a React project from scratch.</p>
<p>Open up the command line or Git bash and create a new directory</p><pre><code>mkdir react-config-tutorial &amp;&amp; cd react-config-tutorial</code></pre>
<p>Initialize NPM project by running:</p><pre><code>npm init -y</code></pre>
<p>Now install react</p><pre><code>npm install react react-dom</code></pre>
<p>Also, you can view the <a href="https://github.com/nsebhastian/my-react-boilerplate" rel="noopener">source code</a> on GitHub while reading this tutorial for explanations about the settings.</p>
<h3 id="configuring-webpack-4">Configuring webpack 4</h3>
<p>Our first stop will be the webpack. It’s a very popular and powerful tool for configuring not only React, but almost all front-end projects. The core function of webpack is that it takes a bunch of JavaScript files we write in our project and turns them into a single, minified file, so that it will be quick to serve. Starting from webpack 4, we aren’t required to write a configuration file at all to use it, but in this tutorial we will write one so that we can understand it better.</p>
<p>First, let’s do some installation</p><pre><code>npm install --save-dev webpack webpack-dev-server webpack-cli</code></pre>
<p>This will install:</p>
<ul>
<li><strong>webpack module</strong> — which include all core webpack functionality</li>
<li><strong>webpack-dev-server</strong> — this development server automatically rerun webpack when our file is changed</li>
<li><strong>webpack-cli</strong> — enable running webpack from the command line</li>
</ul>
<p>Let’s try to run webpack by adding the following script to <code>package.json</code></p><pre><code class="language-js">"scripts": {
"start": "webpack-dev-server --mode development",
},</code></pre>
<p>Now create an <code>index.html</code> file in your root project with the following content:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;My React Configuration Setup&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="root"&gt;&lt;/div&gt;
&lt;script src="./dist/bundle.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>Create a new directory named <code>src</code> and inside it, create a new <code>index.js</code> file</p><pre><code>mkdir src &amp;&amp; cd src &amp;&amp; touch index.js</code></pre>
<p>Then write a React component into the file:</p><pre><code class="language-js">import React from "react";
import ReactDOM from "react-dom";
class Welcome extends React.Component {
render() {
return &lt;h1&gt;Hello World from React boilerplate&lt;/h1&gt;;
}
}
ReactDOM.render(&lt;Welcome /&gt;, document.getElementById("root"));</code></pre>
<p>Run the webpack by using <code>npm run start</code> … And an error will be triggered.</p><pre><code>You may need an appropriate loader to handle this file type</code></pre>
<h3 id="configuring-babel-7">Configuring Babel 7</h3>
<p>The React component we wrote above used the <code>class</code> syntax, which is a feature of ES6. Webpack needs Babel to process ES6 into ES5 syntaxes in order for this class to work.</p>
<p>Let’s install Babel into our project</p><pre><code>npm install --save-dev @babel/core @babel/preset-env \@babel/preset-react babel-loader</code></pre>
<p>Why do we need these packages?</p>
<ul>
<li><strong>@babel/core</strong> is the main dependency that includes babel transform script.</li>
<li><strong>@babel/preset-env</strong> is the default Babel preset used to transform ES6+ into valid ES5 code. Optionally configures browser polyfills automatically.</li>
<li><strong>@babel/preset-react</strong> is used for transforming JSX and React class syntax into valid JavaScript code.</li>
<li><strong>babel-loader</strong> is a webpack loader that hooks Babel into webpack. We will run Babel from webpack with this package.</li>
</ul>
<p>To hook Babel into our webpack, we need to create a webpack configuration file. Let’s write a <code>webpack.config.js</code> file:</p><pre><code class="language-js">module.exports = {
entry: './src/index.js',
output: {
path: __dirname + '/dist',
publicPath: '/',
filename: 'bundle.js'
},
devServer: {
contentBase: './dist',
},
module: {
rules: [
{
test: /\.(js|jsx)$/,
exclude: /node_modules/,
use: ['babel-loader']
}
]
},
};</code></pre>
<p>This webpack config is basically saying that the <code>entry</code> point of our application is from index.js, so pull everything that’s needed by that file, then put the <code>output</code> of the bundling process into the <em>dist</em> directory, named <em>bundle.js</em>. Oh, if we’re running on <code>webpack-dev-server</code>, then tell the server to serve content from <code>contentBase</code> config, which is the same directory this config is in. For all .js or .jsx files, use <code>babel-loader</code> to transpile all of them.</p>
<p>In order to use Babel presets, create a new <code>.babelrc</code> file</p><pre><code>touch .babelrc</code></pre>
<p>Write the following content:</p><pre><code class="language-js">{
"presets": [
"@babel/preset-env",
"@babel/preset-react"
]
}</code></pre>
<p>Now run <code>npm run start</code> again. This time it will work.</p>
<h3 id="adding-prettier">Adding Prettier</h3>
<p>To further speed up development, let’s make our code formatter using Prettier. Install the dependency locally and use the — save-exact argument since Prettier introduces stylistic changes in patch releases.</p><pre><code>npm install --save-dev --save-exact prettier</code></pre>
<p>Now we need to write the <code>.prettierrc</code> configuration file:</p><pre><code class="language-js">{
"semi": true,
"singleQuote": true,
"trailingComma": "es5"
}</code></pre>
<p>The rules means that we want to add semicolon for the end of every statement, use a single quote whenever appropriate and put trailing commas for multi-line ES5 code like objects or arrays.</p>
<p>You can run Prettier from the command line with:</p><pre><code>npx prettier --write "src/**/*.js"</code></pre>
<p>Or add a new script to our <code>package.json</code> file:</p><pre><code class="language-js">"scripts": {
"test": "echo \"Error: no test specified\" &amp;&amp; exit 1",
"start": "webpack-dev-server --mode development",
"format": "prettier --write \"src/**/*.js\""
},</code></pre>
<p>Now we can run Prettier using <code>npm run format</code>.</p>
<p>Additionally, if you’re using VSCode for development, you can install the <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" rel="noopener">Prettier extension</a> and run it every time you save your changes by adding this setting:</p><pre><code>"editor.formatOnSave": true</code></pre>
<h3 id="adding-source-map-for-better-error-logs">Adding source map for better error logs</h3>
<p>Since webpack bundles the code, source maps are mandatory to get a reference to the original file that raised an error. For example, if you bundle three source files (<code>a.js</code>, <code>b.js</code>, and <code>c.js</code>) into one bundle (<code>bundler.js</code>) and one of the source files contains an error, the stack trace will simply point to <code>bundle.js</code>. This is problematic as you probably want to know exactly if it’s the a, b, or c file that is causing an error.</p>
<p>You can tell webpack to generate source maps using the devtool property of the configuration:</p><pre><code class="language-js">module.exports = {
devtool: 'inline-source-map',
// … the rest of the config
};</code></pre>
<p>Although it will cause a slower build, it has no effect on production. Sourcemaps are only downloaded <a href="https://stackoverflow.com/a/44316255" rel="noopener">if you open the browser DevTools</a>.</p>
<h3 id="setting-up-eslint">Setting up ESLint</h3>
<p>Linter is a program that checks our code for any error or warning that can cause bugs. JavaScript’s linter, ESLint, is a very flexible linting program that can be configured in many ways.</p>
<p>But before we get ahead, let’s install ESLint into our project:</p><pre><code>npm --save-dev install eslint eslint-loader babel-eslint eslint-config-react eslint-plugin-react</code></pre>
<ul>
<li><strong>eslint</strong> is the core dependency for all functionalities, while eslint-loader enables us to hook eslint into webpack. Now since React used ES6+ syntax, we will add <strong>babel-eslint</strong> — a parser that enables eslint to lint all valid ES6+ codes.</li>
<li><strong>eslint-config-react</strong> and <strong>eslint-plugin-react</strong> are both used to enable ESLint to use pre-made rules.</li>
</ul>
<p>Since we already have webpack, we only have to modify the config slightly:</p><pre><code class="language-js">module.exports = {
// modify the module
module: {
rules: [{
test: /\.(js|jsx)$/,
exclude: /node_modules/,
use: ['babel-loader', 'eslint-loader'] // include eslint-loader
}]
},
};</code></pre>
<p>Then create an eslint config file named <code>.eslintrc</code> with this content:</p><pre><code>{
"parser": "babel-eslint",
"extends": "react",
"env": {
"browser": true,
"node": true
},
"settings": {
"react": {
"version": "detect"
}
}
}</code></pre>
<p>The config is basically saying, <em>“Hey ESLint, please parse the code using <code>babel-eslint</code> before you check it, and when you’re checking it, please check if all the rules from our React rules config is passed. Take global variables from the environment of browser and node. Oh, and if it’s React code, take the version from the module itself. That way the user won’t have to specify the version manually.</em>”</p>
<p>Rather than specifying our own rules manually, we simply extend <code>react</code> rules which were made available by <code>eslint-config-react</code> and <code>eslint-plugin-react</code>.</p>
<h3 id="i-found-errors-what-do-i-do">I found errors! What do I do?</h3>
<p>Unfortunately the only way to really figure out how to fix ESLint errors is by looking at the documentation for <a href="https://eslint.org/docs/rules/" rel="noopener">rules</a>. There’s a quick way to fix ESLint errors by using <code>eslint--fix</code>, and it’s actually good for a quick fix. Let’s add a script on our <code>package.json</code> file:</p><pre><code class="language-js">"scripts": {
"test": "echo \"Error: no test specified\" &amp;&amp; exit 1",
"start": "webpack-dev-server --mode development",
"format": "prettier --write \"src/**/*.js\"",
"eslint-fix": “eslint --fix \"src/**/*.js\"", // the eslint script
"build": "webpack --mode production"
},</code></pre>
<p>Then run it with <code>npm run eslint-fix</code>. Don’t worry if you’re still fuzzy about ESLint for now. You will learn more about ESLint as you use it.</p>
<h3 id="adding-css-less-processor">Adding CSS LESS processor</h3>
<p>In order to add the LESS processor into our React application, we will require both less and loader packages from webpack:</p><pre><code>npm install --save-dev less less-loader css-loader style-loader</code></pre>
<p><code>less-loader</code> will compile our less file into css, while <code>css-loader</code> will resolve css syntax like <code>import</code> or <code>url()</code>. The <code>style-loader</code> will get our compiled css and load it up into <code>&lt;sty</code>le&gt; tag in our bundle. This is great for development because it lets us update our style on the fly, without needing to refresh the browser.</p>
<p>Now let’s add some css files to create a new style directory in <code>src/style</code></p><pre><code>cd src &amp;&amp; mkdir style &amp;&amp; touch header.less &amp;&amp; touch main.less</code></pre>
<p><code>header.less</code> content:</p><pre><code class="language-js">.header {
background-color: #3d3d;
}</code></pre>
<p><code>main.less</code> content:</p><pre><code class="language-css">@import "header.less";
@color: #f5adad;
body {
background-color: @color;
}</code></pre>
<p>Now import our <code>main.less</code> file from <code>index.js</code>:</p><pre><code>import "./style/main.less";</code></pre>
<p>Then update our webpack configuration <code>module</code> property:</p><pre><code class="language-js">module: {
rules: [{
test: /\.(js|jsx)$/,
exclude: /node_modules/,
use: ['babel-loader', 'eslint-loader']
},
{
test: /\.less$/,
use: [
'style-loader',
'css-loader',
'less-loader',
],
},
]
},</code></pre>
<p>Run the start script and we’re good to go!</p>
<h3 id="deploying-react-app-to-netlify">Deploying React app to Netlify</h3>
<p>All applications need to be deployed for the last step, and for React applications, deployment is very easy.</p>
<p>First, let’s change the build output and development <code>contentBase</code> from <code>dist</code> to <code>build</code> in our Webpack config.</p><pre><code class="language-js">module.exports = {
entry: './src/index.js',
output: {
path: path.resolve(__dirname, 'build'), // change this
publicPath: '/',
filename: 'bundle.js'
},
devServer: {
contentBase: "./build",
},
//…</code></pre>
<p>Now let’s install a new Webpack plugin named HtmlWebpackPlugin</p><pre><code>npm install html-webpack-plugin -D</code></pre>
<p>This plugin will generate <code>index.html</code> file in the same directory where our <code>bundle.js</code> is created by Webpack. In this case, the <code>build</code> directory.</p>
<p>Why do we need this plugin? Because Netlify requires a single directory to be made the root directory, so we can’t use <code>index.html</code> in our root directory using Netlify. You need to update your webpack config to look like this:</p><pre><code class="language-js">const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
entry: //…
output: {
//…
},
devServer: {
contentBase: "./build",
},
module: {
//…
},
plugins: [
new HtmlWebpackPlugin({
template: path.resolve('./index.html'),
}),
]
};</code></pre>
<p>And please remove the <code>script</code> tag from your <code>index.html</code>:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;&lt;html&gt;  &lt;head&gt;    &lt;title&gt;My React Configuration Setup&lt;/title&gt;  &lt;/head&gt;  &lt;body&gt;    &lt;div id="root"&gt;&lt;/div&gt;  &lt;/body&gt;&lt;/html&gt;&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;My React Configuration Setup&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="root"&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>Now you can test the config with <code>npm run build</code> command. Once it’s done, push your boilerplate into a GitHub repo. It’s time to deploy our application!</p>
<p>Now let’s register a <a href="https://netlify.com" rel="noopener">Netlify</a> account. If you haven’t heard of Netlify before, it’s an amazing static site hosting that provides all the tools you need to deploy a static site for free. What’s a static site? It’s a website created from a collection of static HTML pages, without any backend. Our React boilerplate as it is now counts as a static site, because we have no backend configured and its just HTML and JavaScript.</p>
<p>After sign up, select new site from Git and Choose GitHub as your Git provider:</p>
<p>You need to grant permissions for Netlify, and then select your React boilerplate repo.</p>
<p>Now you need to enter the build command and publishing directory. As you can see, this is why we need <em>HtmlWebpackPlugin</em>, because we need to serve everything from one directory only. Rather than manually updating our root <code>index.html</code> file for changes, we just generate it using the plugin.</p>
<p>Make sure you have the same command as the screenshot above, or your app might not run.</p>
<p>Once the deploys status turns to <code>published</code> (number 2 above), you can go to the random site name Netlify has assigned for your application (number 1).</p>
<p>Your React application is deployed. Awesome!</p>
<h3 id="conclusion">Conclusion</h3>
<p>You’ve just created your very own React project boilerplate and deploy it live to Netlify. Congratulations! Granted, I didn’t go very deep on webpack configurations, because this boilerplate is meant to be a generic starter. In some cases where we need advanced features like server side rendering, we need to tweak the configuration again.</p>
<p>But relax! You’ve come this far, which means you already understand what webpack, Babel, Prettier and ESLint do. Webpack has many powerful loaders that can help you with many cases you’ll frequently counter when building a web application.</p>
<p>Also, I’m currently writing a book to help software developers learn about React, so you might wanna <a href="https://sebhastian.com/react-distilled/" rel="noopener">check it out</a>!</p>
<p>You can read more of my React tutorials at <a href="https://sebhastian.com" rel="noopener">sebhastian.com</a>.</p>
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
