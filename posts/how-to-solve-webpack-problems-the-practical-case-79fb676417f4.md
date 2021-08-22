---
card: "https://cdn-media-1.freecodecamp.org/images/1*foxbYY6DryL2han-19rLEA.jpeg"
tags: [JavaScript]
description: by Margarita Obraztsova
author: "Milad E. Fahmy"
title: "How I solved and debugged my Webpack issue through trial, error, and a little outside help."
created: "2021-08-15T19:46:07+02:00"
modified: "2021-08-15T19:46:07+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-webpack tag-react tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How I solved and debugged my Webpack issue through trial, error, and a little outside help.</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*foxbYY6DryL2han-19rLEA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*foxbYY6DryL2han-19rLEA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*foxbYY6DryL2han-19rLEA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*foxbYY6DryL2han-19rLEA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*foxbYY6DryL2han-19rLEA.jpeg" alt="How I solved and debugged my Webpack issue through trial, error, and a little outside help.">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Margarita Obraztsova</p>
<h1 id="how-i-solved-and-debugged-my-webpack-issue-through-trial-error-and-a-little-outside-help-">How I solved and debugged my Webpack issue through trial, error, and a little outside help.</h1>
<figcaption>See the original at: <a href="https://www.instagram.com/p/BdCxrMcn-k5/?taken-by=riittagirl" rel="noopener" target="_blank" title="">https://www.instagram.com/p/BdCxrMcn-k5/?taken-by=riittagirl</a></figcaption>
</figure>
<p>I would say that this was quite a journey. I knew that Webpack was not easy to configure: there are many parts with many options, there’s npm hell, and they change with new releases. No wonder it can easily become <strong>a troublesome task to debug when something does not go as you expected </strong>(that is, not as it is in the docs).</p>
<h3 id="trying-to-debug">Trying to debug</h3>
<p>My debugging journey started with the following setup:</p>
<p><em>webpack.config.js</em></p><pre><code>// webpack v4.6.0</code></pre><pre><code>const path = require('path');const HtmlWebpackPlugin = require('html-webpack-plugin');const WebpackMd5Hash = require('webpack-md5-hash');const CleanWebpackPlugin = require('clean-webpack-plugin');const webpack = require('webpack');</code></pre><pre><code>module.exports = {  entry: { main: './src/index.js' },  output: {    path: path.resolve(__dirname, 'dist'),    filename: '[name].[chunkhash].js'  },  devServer: {    contentBase: './dist',    hot: true,    open: true  },  module: {    rules: [      {         test: /\.js$/,        exclude: /node_modules/,        use: [          { loader: 'babel-loader' },          {            loader: 'eslint-loader',            options: {               formatter: require('eslint/lib/formatters/stylish')             }           }         ]       }     ]  },  plugins: [    new CleanWebpackPlugin('dist', {}),    new HtmlWebpackPlugin({      inject: false,      hash: true,      template: './src/index.html',      filename: 'index.html'    }),    new WebpackMd5Hash()  ]</code></pre><pre><code>};</code></pre>
<p><em>package.json</em></p><pre><code>{  "name": "post",  "version": "1.0.0",  "description": "",  "main": "index.js",  "scripts": {    "build": "webpack --mode production",    "dev": "webpack-dev-server"   },  "author": "",  "license": "ISC",  "devDependencies": {    "babel-cli": "^6.26.0",    "babel-core": "^6.26.0",    "babel-loader": "^7.1.4",    "babel-preset-env": "^1.6.1",    "babel-preset-react": "^6.24.1",    "babel-runtime": "^6.26.0",    "clean-webpack-plugin": "^0.1.19",    "eslint": "^4.19.1",    "eslint-config-prettier": "^2.9.0",    "eslint-loader": "^2.0.0",    "eslint-plugin-prettier": "^2.6.0",    "eslint-plugin-react": "^7.7.0",    "html-webpack-plugin": "^3.2.0",    "prettier": "^1.12.1",    "react": "^16.3.2",    "react-dom": "^16.3.2",    "webpack": "^4.6.0",    "webpack-cli": "^2.0.13",    "webpack-dev-server": "^3.1.3",    "webpack-md5-hash": "0.0.6"  }}</code></pre>
<p><em>.babelrc</em></p><pre><code>{  "presets": ["env", "react"]}</code></pre>
<p><em>.eslintrc.js</em></p><pre><code>module.exports = {  env: {    browser: true,    commonjs: true,    es6: true  },  extends: [    'eslint:recommended',    'plugin:react/recommended',    'prettier',    'plugin:prettier/recommended'  ],  parserOptions: {    ecmaFeatures: {      experimentalObjectRestSpread: true,      jsx: true    },    sourceType: 'module'  },  plugins: ['react', 'prettier'],  rules: {    indent: ['error', 2],    'linebreak-style': ['error', 'unix'],    quotes: ['warn', 'single'],    semi: ['error', 'always'],    'no-unused-vars': [      'warn',      { vars: 'all', args: 'none', ignoreRestSiblings: false }    ],    'prettier/prettier': 'error'   }};</code></pre>
<p><em>prettier.config.js</em></p><pre><code>// .prettierrc.js</code></pre><pre><code>module.exports = {  printWidth: 80,  tabWidth: 2,  semi: true,  singleQuote: true,  bracketSpacing: true};</code></pre>
<p>And in the <em>src/</em> folder:</p>
<p><em>index.html</em></p><pre><code>&lt;html&gt; &lt;head&gt;&lt;/head&gt; &lt;body&gt;    &lt;div id="app"&gt;&lt;/div&gt;    &lt;script src="&lt;%= htmlWebpackPlugin.files.chunks.main.entry %&gt;"&gt;&lt;/script&gt; &lt;/body&gt;&lt;/html&gt;</code></pre>
<p><em>index.js</em></p><pre><code>import React from 'react';import { render } from 'react-dom';import Hello from './Hello';</code></pre><pre><code>class App extends React.Component {  render() {    return (      &lt;div&gt;        &lt;Hello hello={'Hello, world! And the people of the world!'} /&gt;     &lt;/div&gt;    );  }}render(&lt;App /&gt;, document.getElementById('app'));</code></pre>
<p><em>Hello.js</em></p><pre><code>import React from 'react';import PropTypes from 'prop-types';</code></pre><pre><code>class Hello extends React.Component {  render() {    return &lt;div&gt;{this.props.hello}&lt;/div&gt;;  }}</code></pre><pre><code>Hello.propTypes = {  hello: PropTypes.string};</code></pre><pre><code>export default Hello;</code></pre>
<p>This was the overall project structure:</p>
<h3 id="so-what-was-the-problem">So, what was the problem?</h3>
<p>As you can see, I set up the environment, the ESLinting, and so on. I created everything so that I could start coding and add my new components to my shiny new component library.</p>
<p>But what if I got an error? Let’s go screw something up.</p>
<p><strong>If we try to backtrace the origin of the error from our Google Chrome browser console, this will be very difficult for us. </strong>We would stumble upon something like this:</p>
<p>The source maps are not configured!</p>
<p>I want it to point to a file <strong>Hello.js</strong> and not to a bundled file, kinda like this guy did <a href="http://erikaybar.name/webpack-source-maps-in-chrome/" rel="noopener">here</a>.</p>
<h3 id="this-is-probably-a-tiny-thingy">This is probably a tiny thingy</h3>
<p>Or so I thought. So I tried to set up the source maps as <a href="https://webpack.js.org/guides/development/#using-webpack-dev-server" rel="noopener">described in the docs</a> by adding <a href="https://webpack.js.org/configuration/devtool/" rel="noopener"><strong>devtool</strong></a>.</p>
<blockquote>When webpack bundles your source code, it can become difficult to track down errors and warnings to their original location. For example, if you bundle three source files (<code>a.js</code>, <code>b.js</code>, and <code>c.js</code>) into one bundle (<code>bundle.js</code>) and one of the source files contains an error, the stack trace will simply point to <code>bundle.js</code>. This isn't always helpful as you probably want to know exactly which source file the error came from.</blockquote>
<blockquote>In order to make it easier to track down errors and warnings, JavaScript offers <a href="http://blog.teamtreehouse.com/introduction-source-maps" rel="noopener">source maps</a>, which maps your compiled code back to your original source code. If an error originates from <code>b.js</code>, the source map will tell you exactly that. (<a href="https://webpack.js.org/guides/development/" rel="noopener">Source</a>)</blockquote>
<p>So I naively assumed this would work in my <em>webpack.config.js</em>:</p><pre><code>...</code></pre><pre><code>module.exports = {  entry: { main: './src/index.js' },  output: {    path: path.resolve(__dirname, 'dist'),    filename: '[name].[chunkhash].js'  },  devtool: 'inline-source-map',  devServer: {    contentBase: './dist',    hot: true,    open: true  },  ...</code></pre>
<p>and<em> package.json</em></p><pre><code>..."scripts": {  "build": "webpack --mode production",  "dev": "webpack-dev-server --mode development"}...</code></pre>
<p>You have to add a development flag when doing it, otherwise it won’t work as the docs say. Yet, even with the suggested value, the source map did not act as I wanted it to.</p>
<p>If you read <a href="https://survivejs.com/webpack/building/source-maps/#-sourcemapdevtoolplugin-and-evalsourcemapdevtoolplugin-" rel="noopener">this guide</a> from SurviveJS, which you should, you will see.</p>
<p>After I tried every option from it, I resorted to GitHub issue hunting.</p>
<h3 id="github-issue-hunting">GitHub issue hunting</h3>
<p>Trying all the suggestions in GitHub issues did not help me.</p>
<p>At some point I thought something was wrong with webpack-dev-server. And it turned out that the webpack-dev-server has been in maintenance mode for a few months already.</p>
<p>I discovered that after I stumbled upon <a href="https://github.com/webpack/webpack-dev-server/issues/1161" rel="noopener">this issue</a> where <strong>they recommend to use webpack-serve instead of webpack-dev-server.</strong></p>
<p>Honestly, that was the first time I had heard about an alternative called <strong>webpack-serve</strong>. The docs did not look promising, either. But I still decided to give it a shot.</p><pre><code>npm install webpack-serve --save-dev</code></pre>
<p>I created <em>serve.config.js</em></p><pre><code>const serve = require('webpack-serve');</code></pre><pre><code>const config = require('./webpack.config.js');</code></pre><pre><code>serve({ config });</code></pre>
<p>I replaced <strong>webpack-dev-server with webpack serve</strong> in my package.json.</p>
<p>But trying webpack-serve didn’t solve it either.</p>
<p>So at this point I felt like I had used<strong> every suggestion I could find on GitHub:</strong></p>
<ul>
<li><a href="https://stackoverflow.com/questions/48986641/webpack-4-sourcemaps" rel="noopener">Webpack 4 — Sourcemaps</a> : this issue suggests that <code>devtool: 'source-map'</code> should work out of the box, but this was not the case for me</li>
<li><a href="https://stackoverflow.com/questions/34185748/how-to-make-webpack-sourcemap-to-original-files" rel="noopener">how to make webpack sourcemap to original files</a> : adding <code>devtoolModuleFilenameTemplate: info =&gt;'file://' + path.resolve(info.absoluteResourcePath).replace(/\\/g, '</code>/') to my output config did not help much. But instead of client.js, it showed me index.js.</li>
<li><a href="https://github.com/webpack/webpack/issues/6400" rel="noopener">https://github.com/webpack/webpack/issues/6400</a> : this one is not an accurate description of my issue, so trying the methods here did not seem to help me</li>
<li>I tried to use <code>webpack.SourceMapDevToolPlugin</code> but it didn’t work with my setup, even when I deleted devtools or set them to false</li>
<li>I did not use the UglifyJS plugin here, so setting up options for it was not a solution</li>
<li>I know that webpack-dev-server is in maintenance now, so I tried webpack-serve, but it seemed like source maps do not work with it either</li>
<li>I tried the source-map-support package as well, but no luck there. I have a similar situation as seen <a href="https://github.com/webpack/webpack/issues/3165" rel="noopener">here</a>.</li>
</ul>
<h3 id="the-holy-stackoverflow">The Holy StackOverflow</h3>
<p>It took me forever to configure source maps, so I created an <a href="https://stackoverflow.com/questions/50105741/webpack-4-devtool-option-does-not-work-with-webpack-dev-server" rel="noopener">issue</a> on StackOverflow.</p>
<p>Debugging webpack config is usually a cumbersome task: the best way to go about it is to create a config from a scratch. If something from the documentation does not work as expected, it might be a good idea to try to find a similar issue on a branch, or create your own issue. I thought so, anyway.</p>
<p>The first guy who answered my issue was really trying to help. He shared his own working config. Even helped me by creating <a href="https://github.com/marharyta/webpack-fast-development/pull/1/files" rel="noopener">a pull request</a>.</p>
<p>The only problem here: <strong>why does his setup work</strong>? I mean, this is probably not magic, and there is some module incompatibility there. Sadly, I could not understand why my setup was not working:</p>
<p>The thing is that he did it with the best intentions by restructuring the project his way.</p>
<p>This meant that I would have some more setup in the project and would have to change quite a few things. That might have been ok if I was doing a test setup, but <strong>I decided to do the gradual changes to the files to see where it was breaking.</strong></p>
<h4 id="dissecting-the-issue">Dissecting the issue</h4>
<p>So let’s take a look at the differences between his Webpack and <em>package.json </em>and mine. Just for the record, I used a different repo in the question, so here is my <a href="https://github.com/marharyta/webpack-fast-development" rel="noopener">link to the repo</a> and my setup.</p><pre><code>// webpack v4.6.0</code></pre><pre><code>const path = require('path');const HtmlWebpackPlugin = require('html-webpack-plugin');const WebpackMd5Hash = require('webpack-md5-hash');const CleanWebpackPlugin = require('clean-webpack-plugin');const stylish = require('eslint/lib/formatters/stylish');const webpack = require('webpack');</code></pre><pre><code>module.exports = {  entry: { main: './src/index.js' },  output: {   devtoolModuleFilenameTemplate: info =&gt; 'file://' + path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),</code></pre><pre><code>   path: path.resolve(__dirname, 'dist'),   filename: '[name].[hash].js'  },  mode: 'development',  devtool: 'eval-cheap-module-source-map',  devServer: {    contentBase: './dist',    hot: true  },  module: {    rules: [      {        test: /\.js$/,        exclude: /node_modules/,        loader: 'babel-loader'      },      {        test: /\.js$/,        exclude: /node_modules/,        loader: 'eslint-loader',        options: {          formatter: stylish         }       }     ]   },   plugins: [    // new webpack.SourceMapDevToolPlugin({    //   filename: '[file].map',    //   moduleFilenameTemplate: undefined,    //   fallbackModuleFilenameTemplate: undefined,    //   append: null,    //   module: true,    //   columns: true,    //   lineToLine: false,    //   noSources: false,    //   namespace: ''    // }),    new CleanWebpackPlugin('dist', {}),    new HtmlWebpackPlugin({      inject: false,      hash: true,      template: './src/index.html',      filename: 'index.html'    }),    new WebpackMd5Hash(),    // new webpack.NamedModulesPlugin(),    new webpack.HotModuleReplacementPlugin()  ]</code></pre><pre><code>};</code></pre>
<p><em>package.json</em></p><pre><code>{</code></pre><pre><code>"name": "post","version": "1.0.0","description": "","main": "index.js","scripts": {  "storybook": "start-storybook -p 9001 -c .storybook",  "dev": "webpack-dev-server --mode development --open",  "build": "webpack --mode production"},"author": "","license": "ISC","devDependencies": {  "@storybook/addon-actions": "^3.4.3",  "@storybook/react": "v4.0.0-alpha.4",  "babel-cli": "^6.26.0",  "babel-core": "^6.26.0",  "babel-loader": "^7.1.4",  "babel-preset-env": "^1.6.1",  "babel-preset-react": "^6.24.1",  "babel-runtime": "^6.26.0",  "clean-webpack-plugin": "^0.1.19",  "eslint": "^4.19.1",  "eslint-config-prettier": "^2.9.0",  "eslint-loader": "^2.0.0",  "eslint-plugin-prettier": "^2.6.0",  "eslint-plugin-react": "^7.7.0",  "html-webpack-plugin": "^3.2.0",  "prettier": "^1.12.1",  "react": "^16.3.2",  "react-dom": "^16.3.2",  "webpack": "v4.6.0",  "webpack-cli": "^2.0.13",  "webpack-dev-server": "v3.1.3",  "webpack-md5-hash": "0.0.6",  "webpack-serve": "^0.3.1"},"dependencies": {  "source-map-support": "^0.5.5"}</code></pre><pre><code>}</code></pre>
<p>I left them intact on purpose so that you can see my debugging attempts. <strong>Everything worked except for source maps</strong>. Below, I will share what he changed in my config — but it is of course better to check the full pull request <a href="https://github.com/marharyta/webpack-fast-development/pull/1/files?diff=unified" rel="noopener">here</a>.</p><pre><code> // webpack v4.6.0 const path = require('path'); const HtmlWebpackPlugin = require('html-webpack-plugin'); // deleting this module from the config-const WebpackMd5Hash = require('webpack-md5-hash'); const CleanWebpackPlugin = require('clean-webpack-plugin'); const stylish = require('eslint/lib/formatters/stylish'); const webpack = require('webpack');  module.exports = {  // adding the mode setting here instead of a flag+  mode: 'development',   entry: { main: './src/index.js' },   output: {  // deleting the path and the template from the output-    devtoolModuleFilenameTemplate: info =&gt;-      'file://' + path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),-    path: path.resolve(__dirname, 'dist'),     filename: '[name].[hash].js'   },  // adding resolve option here+  resolve: {+    extensions: ['.js', '.jsx']+  },   //changing the devtool option   devtool: 'eval-cheap-module-source-map',  // changing the devServer settings   devServer: {-    contentBase: './dist',-    hot: true+    hot: true,+    open: true   },   module: {     rules: [    // putting my two checks into one (later he asked me in the chat to delete eslint option completely)       {-        test: /\.js$/,-        exclude: /node_modules/,-        loader: 'babel-loader'-      },-      {-        test: /\.js$/,+        test: /\.jsx?$/,         exclude: /node_modules/,-        loader: 'eslint-loader',-        options: {-          formatter: stylish-        }+        use: [+          { loader: 'babel-loader' },+          { loader: 'eslint-loader', options: { formatter: stylish } }+        ]       }     ]   },   plugins: [    //cleaned some options-    new CleanWebpackPlugin('dist', {}),+    new CleanWebpackPlugin('dist'),    //deleted some settings from the HTMLWebpackPlugin     new HtmlWebpackPlugin({-      inject: false,-      hash: true,-      template: './src/index.html',-      filename: 'index.html'+      template: './src/index.html'     }),  //completely removed the hashing plugin and added a hot module replacement one</code></pre><pre><code>-    new WebpackMd5Hash(),-    new webpack.NamedModulesPlugin(),+    new webpack.HotModuleReplacementPlugin()   ] };</code></pre>
<p><em>package.json</em></p><pre><code>"main": "index.js",   "scripts": {     "storybook": "start-storybook -p 9001 -c .storybook",  //added different flags for webpack-dev-server-    "dev": "webpack-dev-server --mode development --open",+    "dev": "webpack-dev-server --config ./webpack.config.js",     "build": "webpack --mode production"   },   "author": "",@@ -31,11 +31,6 @@     "react-dom": "^16.3.2",     "webpack": "v4.6.0",     "webpack-cli": "^2.0.13",-    "webpack-dev-server": "v3.1.3",-    "webpack-md5-hash": "0.0.6",-    "webpack-serve": "^0.3.1"-  },-  "dependencies": {//moved dev server to dependencies</code></pre><pre><code>-    "source-map-support": "^0.5.5"+    "webpack-dev-server": "v3.1.3"   } }</code></pre>
<p>As you can see, he deleted a bunch of modules and added mode inside of the config. And taking a look at the pull request, you can see that he also added some specific react-oriented HMR.</p>
<p>This helped the source maps work by sacrificing a lot of plugins, but there was no concrete explanation for why he did what he did. As a person who reads the docs, this was not very satisfying for me.</p>
<p>Later, I took my initial webpack.connfig.js and started to add the changes step by step too see when the source maps finally started to work.</p>
<p><strong>Change 1:</strong></p><pre><code>-    new CleanWebpackPlugin('dist', {}),+    new CleanWebpackPlugin('dist'),</code></pre>
<p><strong>Change 2:</strong></p>
<p>I added webpack-dev-server to dependencies, not devDependencies:</p><pre><code>...</code></pre><pre><code>},</code></pre><pre><code>"dependencies": {</code></pre><pre><code>  "webpack-dev-server": "^3.1.3"</code></pre><pre><code>}</code></pre><pre><code>}</code></pre><pre><code>...</code></pre>
<p><strong>Change 3:</strong></p>
<p>Next I removed some devServer settings:</p><pre><code>devServer: {-    contentBase: './dist',+    hot: true,+    open: true   },</code></pre>
<p><strong>Change 4:</strong></p>
<p>Let’s remove stylish:</p><pre><code>...</code></pre><pre><code>},</code></pre><pre><code>devtool: 'inline-source-map',  devServer: {    hot: true,    open: true  },</code></pre><pre><code>...</code></pre><pre><code>use: [  { loader: 'babel-loader' },  {    loader: 'eslint-loader'  }</code></pre><pre><code>]</code></pre><pre><code>....</code></pre>
<p><strong>Change 5:</strong></p>
<p>Let’s try to remove the WebpackMd5Hash hashing plugin now:</p><pre><code>...</code></pre><pre><code>module.exports = {mode: 'development',entry: { main: './src/index.js' },output: {  path: path.resolve(__dirname, 'dist'),  filename: '[name].js'  },devtool: 'inline-source-map',...</code></pre><pre><code>plugins: [  new CleanWebpackPlugin('dist'),  new HtmlWebpackPlugin({    inject: false,    hash: true,    template: './src/index.html',    filename: 'index.html'  })-    new WebpackMd5Hash(), ]</code></pre><pre><code>};</code></pre>
<p><strong>Change 6:</strong></p>
<p>Now let’s try to remove some settings from HtmlWebpackPlugin:</p><pre><code>...</code></pre><pre><code>plugins: [  new CleanWebpackPlugin('dist'),  new HtmlWebpackPlugin({    template: './src/index.html'  })]};</code></pre><pre><code>...</code></pre>
<p><strong>Change 7:</strong></p>
<p>As we can see in his code, he added some resolve options here. I personally do not understand why we need them here. And I couldn’t find the info in the docs, either.</p><pre><code>...</code></pre><pre><code>resolve: {  extensions: ['.js', '.jsx']},module: {</code></pre><pre><code>...</code></pre>
<p><strong>Change 8:</strong></p>
<p>Deleting output path:</p><pre><code>...</code></pre><pre><code>entry: { main: './src/index.js' },output: {  filename: '[name].js'},devtool: 'inline-source-map',</code></pre><pre><code>...</code></pre>
<p><strong>Change 9:</strong></p>
<p>Adding the hot module replacement plugin:</p><pre><code>...</code></pre><pre><code>const HtmlWebpackPlugin = require('html-webpack-plugin');const CleanWebpackPlugin = require('clean-webpack-plugin');const webpack = require('webpack');</code></pre><pre><code>...</code></pre><pre><code>plugins: [  new CleanWebpackPlugin('dist'),  new HtmlWebpackPlugin({    template: './src/index.html'  }),  new webpack.HotModuleReplacementPlugin()]};</code></pre><pre><code>...</code></pre>
<p><strong>Change 10:</strong></p>
<p>Adding — config to package.json:</p><pre><code>-    "dev": "webpack-dev-server --mode development --open",+    "dev": "webpack-dev-server --config ./webpack.config.js",</code></pre>
<p><strong>Let’s make something clear: at this point I had almost re-written the config.</strong></p>
<p>This is a massive issue, since we cannot just rewrite it every time something is not working!</p>
<h3 id="create-react-app-in-the-best-source-to-learn-about-webpack">Create-react-app in the best source to learn about webpack</h3>
<p>As a last resort, I went to check how create-react-app implements the source mapping. That was the right decision after all. This is the config of <a href="https://github.com/facebook/create-react-app/blob/next/packages/react-scripts/config/webpack.config.dev.js" rel="noopener">webpack dev version</a>.</p>
<p>If we check how <strong>devtool</strong> is implemented there, we will see:</p>
<blockquote>// You may want ‘eval’ instead if you prefer to see the compiled output in DevTools.</blockquote>
<blockquote>// See the discussion in <a href="https://github.com/facebook/create-react-app/issues/343." rel="noopener">https://github.com/facebook/create-react-app/issues/343.</a></blockquote>
<blockquote>devtool: ‘cheap-module-source-map’</blockquote>
<p>So this issue pointed me to another issue, found <a href="https://github.com/facebook/create-react-app/issues/343" rel="noopener">here</a>.</p><pre><code>// webpack v4</code></pre><pre><code>const path = require('path');const HtmlWebpackPlugin = require('html-webpack-plugin');const WebpackMd5Hash = require('webpack-md5-hash');const CleanWebpackPlugin = require('clean-webpack-plugin');</code></pre><pre><code>module.exports = {</code></pre><pre><code>mode: "development",entry: { main: './src/index.js' },output: {  path: path.resolve(__dirname, 'dist'),  filename: '[name].[hash].js'},devtool: 'cheap-module-source-map',devServer: {  contentBase: './dist',  hot: true,  open: true},module: {</code></pre>
<p>Changing the lines still did not work — yet! I learned that source map is a long-hanging issue.</p>
<h3 id="ask-from-the-right-people"><strong>Ask from the right people</strong></h3>
<p>Every open source project has maintainers. So, in this case, it was definitely the right move to ask the guys right away.</p>
<p>Although the trial and error method from Daniel did not really work out for me, I was pleasantly surprised by how mobile the maintainer team was.</p>
<p>So I created a repo with the setup you can see <a href="https://github.com/marharyta/webpack-4.6.0-test" rel="noopener">here</a>. Check out the second commit there.</p>
<p>To make it easier for you, here is my project webpack.js where I rolled back to my initial, cleaner setup:</p><pre><code>// webpack v4</code></pre><pre><code>const path = require('path');const HtmlWebpackPlugin = require('html-webpack-plugin');const WebpackMd5Hash = require('webpack-md5-hash');const CleanWebpackPlugin = require('clean-webpack-plugin');</code></pre><pre><code>module.exports = {  mode: 'development',  entry: { main: './src/index.js' },  output: {    path: path.resolve(__dirname, 'dist'),    filename: '[name].[hash].js'  },  devtool: 'inline-source-map',  devServer: {    contentBase: './dist',    hot: true,    open: true  },  module: {    rules: [      {        test: /\.js$/,        exclude: /node_modules/,        use: [          { loader: 'babel-loader' },          {            loader: 'eslint-loader',            options: {               formatter: require('eslint/lib/formatters/stylish')             }          }         ]        }      ]  },  plugins: [    new CleanWebpackPlugin('dist'),    new HtmlWebpackPlugin({      inject: false,      hash: true,      template: './src/index.html',      filename: 'index.html'    }),    new WebpackMd5Hash()  ]};</code></pre>
<p>After checking my code, the maintainer created an <a href="https://github.com/marharyta/webpack-4.6.0-test/issues/1" rel="noopener">issue</a>.</p>
<p>Let’s recap what he included there:</p>
<blockquote>Setting the <code>mode</code> option</blockquote>
<blockquote>First issue I’ve found is how the <code>mode</code> option was set. In the npm scripts the mode was set as:</blockquote>
<blockquote><strong>webpack --mode production</strong></blockquote>
<blockquote>The correct way would be:</blockquote>
<blockquote><strong>webpack --mode=production</strong></blockquote>
<blockquote>Final state of npm scripts looks like this to me:</blockquote>
<blockquote><strong>"scripts": {</strong><br><strong> "build": "webpack --mode=production",</strong><br><strong> "start": "webpack-dev-server --mode=development --hot"</strong><br><strong>}</strong></blockquote>
<blockquote>I also changed <code>dev</code> to <code>start</code> since it's more standard and expected from other developers as a command. You can actually do <code>npm start</code>, without the <code>run</code> command ?</blockquote><pre><code>...</code></pre><pre><code>"scripts": {  "build": "webpack --mode production",  "dev": "webpack-dev-server --mode=development --hot"},</code></pre><pre><code>...</code></pre>
<p>Next he suggested the following:</p>
<blockquote>devtool for source maps</blockquote>
<blockquote>I always recommend the <code>inline-source-map</code> option, it's the most straight forward and it's included in the bundle itself as a comment at the end of it.</blockquote>
<blockquote><strong>module.exports = {</strong><br><strong>+ devtool: 'inline-source-map',</strong><br><strong> // rest of your config</strong><br><strong>}</strong></blockquote>
<blockquote>I also recommend creating a separate object and populating this only on development:</blockquote>
<blockquote>command</blockquote>
<blockquote><strong>webpack-dev-server --mode=development NODE_ENV=development</strong></blockquote>
<blockquote>webpack.config.js</blockquote>
<blockquote><strong>const webpackConfig = {}</strong></blockquote>
<blockquote><strong>if (process.env.NODE_ENV === 'development') {</strong><br><strong> webpackConfig.devtool = 'inline-source-map'</strong><br><strong>}</strong></blockquote>
<blockquote>This way you make sure the bundle on production doesn’t get affected by this.</blockquote>
<p>Then he suggested to removing ESLint from loaders:</p>
<blockquote>Linting and developer experience</blockquote>
<blockquote><strong>Honestly, I would delete <code>eslint</code> as a loader, it's super spammy and it messes with the development flow. I prefer to add a precommit githook to check this.</strong></blockquote>
<blockquote>This is super easy by adding a script like this:</blockquote>
<blockquote><strong>"scripts": {</strong><br><strong>+ "lint": "eslint ./src/**/*.js"</strong><br><strong> "build": "webpack --mode=production",</strong><br><strong> "start": "webpack-dev-server --mode=development --hot"</strong><br><strong>}</strong></blockquote>
<blockquote>And then combining it with husky.</blockquote>
<p>and adding it to scripts:</p><pre><code>...</code></pre><pre><code>"scripts": {</code></pre><pre><code>"lint": "eslint ./src/**/*.js",</code></pre><pre><code>"build": "webpack --mode production",</code></pre><pre><code>"dev": "webpack-dev-server --mode=development --hot"</code></pre><pre><code>},</code></pre><pre><code>...</code></pre>
<p>I made a mistake in src/<em>Hello.js </em><strong>on purpose</strong><em> </em>to see how source maps worked this time.</p><pre><code>import React from 'react';import PropTypes from 'prop-types';</code></pre><pre><code>class Hello extends React.Component {  console.log(hello.world);  render() {    return &lt;div&gt;{this.props.hello}&lt;/div&gt;;  }}Hello.propTypes = {  hello: PropTypes.string};export default Hello;</code></pre>
<h3 id="how-i-fixed-the-issue">How I fixed the issue</h3>
<p>The issue was EsLint. But after specifying the modes correctly and removing the eslint-loader, source maps worked fine!</p>
<p>Following the example the maintainer gave me, I updated my Webpack to:</p><pre><code>// webpack v4</code></pre><pre><code>const path = require('path');const HtmlWebpackPlugin = require('html-webpack-plugin');const WebpackMd5Hash = require('webpack-md5-hash');const CleanWebpackPlugin = require('clean-webpack-plugin');module.exports = {  entry: { main: './src/index.js' },  output: {    path: path.resolve(__dirname, 'dist'),    filename: '[name].[hash].js'  },  devtool: 'inline-source-map',  devServer: {    contentBase: './dist',    hot: true,    open: true  },  module: {    rules: [     {      test: /\.js$/,      exclude: /node_modules/,      use: [{ loader: 'babel-loader' }]     }    ]  },  plugins: [    new CleanWebpackPlugin('dist'),    new HtmlWebpackPlugin({      inject: false,      hash: true,      template: './src/index.html',      filename: 'index.html'    }),    new WebpackMd5Hash()  ]};</code></pre>
<p>and my package JSON to:</p><pre><code>{</code></pre><pre><code>"name": "post","version": "1.0.0","description": "","main": "index.js","scripts": {  "build": "webpack --mode=production",  "start": "NODE_ENV=development webpack-dev-server --mode=development --hot"},"author": "","license": "ISC","devDependencies": {  "babel-cli": "^6.26.0",  "babel-core": "^6.26.0",  "babel-loader": "^7.1.4",  "babel-preset-env": "^1.6.1",  "babel-preset-react": "^6.24.1",  "babel-runtime": "^6.26.0",  "clean-webpack-plugin": "^0.1.19",  "eslint": "^4.19.1",  "eslint-config-prettier": "^2.9.0",  "eslint-loader": "^2.0.0",  "eslint-plugin-prettier": "^2.6.0",  "eslint-plugin-react": "^7.7.0",  "html-webpack-plugin": "^3.2.0",  "prettier": "^1.12.1",  "react": "^16.3.2",  "react-dom": "^16.3.2",  "webpack": "^4.6.0",  "webpack-cli": "^2.0.13",  "webpack-md5-hash": "0.0.6"},"dependencies": {  "webpack-dev-server": "^3.1.3"}</code></pre><pre><code>}</code></pre>
<p><strong>Finally source maps worked!</strong></p>
<h3 id="conclusions-"><strong>Conclusions:</strong></h3>
<p>Source maps has been the subject of multiple discussions and bugs since 2016, as you can see <a href="https://github.com/webpack/webpack/issues/3165" rel="noopener">here</a>.</p>
<p><strong>Webapack needs help with audit!</strong></p>
<p>After finding this bug, I submitted an <a href="https://github.com/webpack-contrib/eslint-loader/issues/227" rel="noopener">issue</a> to the ESLint loader package.</p>
<p>When it comes to checking source maps quality, we can use <a href="http://sokra.github.io/source-map-visualization/" rel="noopener">this tool</a>.</p>
<h3 id="what-can-you-do-if-you-have-a-webpack-issue">What can you do if you have a webpack issue?</h3>
<p>In case if you stumble upon an issue with Webpack, do not panic! Follow these steps:</p>
<ul>
<li>Search in the GitHub issues similar to yours.</li>
<li>Try to check boilerplates and see how the feature is implemented there, like create-react-app for instance.</li>
<li>Ask questions on StackOverflow — do not be scared! Make sure that you have run out of ways to solve your issue on your own, though.</li>
<li>Do not hesitate to tweet about it and ask maintainers directly.</li>
<li>Create issues once you find them. This will help the contributors a lot!</li>
</ul>
<p>In this article, I have provided you with my configuration file and the process I used to configure it step by step.</p>
<p>Note: since a lot of npm dependencies might change by the time you read this, the same config might not work for you! I kindly ask you to leave your errors in the comments below so that I can edit it later.</p>
<p><strong>Please, Subscribe and Clap for this article! Thanks!</strong></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
