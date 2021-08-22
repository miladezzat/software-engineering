---
card: "https://cdn-media-1.freecodecamp.org/images/1*CU4VcsMlDhlRLrCEkjNUvw.jpeg"
tags: [JavaScript]
description: I previously wrote an article called “How to conquer Webpack
author: "Milad E. Fahmy"
title: "How to combine Webpack 4 and Babel 7 to create a fantastic React app"
created: "2021-08-15T19:41:06+02:00"
modified: "2021-08-15T19:41:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-webpack tag-babel tag-react tag-nodejs ">
<header class="post-full-header">
<h1 class="post-full-title">How to combine Webpack 4 and Babel 7 to create a fantastic React app</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*CU4VcsMlDhlRLrCEkjNUvw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*CU4VcsMlDhlRLrCEkjNUvw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*CU4VcsMlDhlRLrCEkjNUvw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*CU4VcsMlDhlRLrCEkjNUvw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*CU4VcsMlDhlRLrCEkjNUvw.jpeg" alt="How to combine Webpack 4 and Babel 7 to create a fantastic React app">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<figcaption>Photo by <a href="https://unsplash.com/@visualsbydanny?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">daniel odame</a> / <a href="https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Unsplash</a></figcaption>
</figure>
<p>I previously wrote an article called <strong>“<a href="https://medium.freecodecamp.org/how-to-conquer-webpack-4-and-build-a-sweet-react-app-236d721e6745" rel="noopener">How to conquer Webpack 4 and build a sweet React app</a>.”</strong> Soon after I wrote the article, babel swooped in with a major breaking change and many of the packages got deprecated. So I decided to write a new tutorial.</p>
<p>I will focus on setting up <strong>webpack </strong>with r<strong>eact </strong>which will have <strong>.scss </strong>support along with <strong>code splitting</strong></p>
<p>The purpose for writing this again is simple: I want everyone to feel comfortable. Because setting up webpack can be really daunting. Especially for new developers out there. Follow along, and what seemed difficult and maybe scary will seem like a piece of cake.</p>
<p>Before we start, here is the <a href="https://github.com/adeelibr/react-starter-kit" rel="noopener"><strong>source code</strong></a>. I know this has loads of things in it. I plan to use the same code base to talk about webpack, react, SCSS, hot module replacement, testing with jest and enzyme, linting code, and adding a code formatter like prettier in other articles to come, so I will continuously keep on updating this code base. I will not bloat this code base — I promise.</p>
<p>Note: If you feel like making a PR for the <a href="https://github.com/adeelibr/react-starter-kit" rel="noopener">repository</a>, you are more than welcome :) So let’s get started.</p>
<p>For simplicity sake, this article is only going to focus on;</p>
<ul>
<li>Setting up Webpack 4 with Babel 7 for React</li>
<li>Support for .SCSS</li>
<li>Code Splitting</li>
<li>Development environment with HMR (Hot Module Replacement)</li>
<li>Production configuration</li>
<li>Dividing your Webpack configuration into chunks</li>
<li>Handling staging, demo, production, test and other environments in code</li>
<li>Generating a visualizer in production build to check which chunk of code took how much size and what are the dependencies of the chunks. Super useful.</li>
</ul>
<h3 id="prerequisite">Prerequisite</h3>
<p>You need to have node installed in order to use npm (node package manager).</p>
<p>First things first, create a folder called <code>app</code> then open up your terminal and go into that <code>app</code> folder and type:</p><pre><code>npm init -y</code></pre>
<p>This will create a <code>package.json</code> file for you.</p>
<p>Second create a folder called <code>src</code> in your <code>app</code> folder. Inside <code>app/src</code> create a file called <code>index.js</code> and write the following code.</p>
console.log('So through out this tutorial, you will see a lot of Star Trek quotes');
console.log('Starting now');
console.log("Compassion: that’s the one thing no machine ever had. Maybe it’s the one thing that keeps men ahead of them. -Dr McCoy");
</code></pre>
<p>You can write anything above of course. I chose Star Trek.</p>
<figcaption><em>Change is the essential process of all existence. — Spock</em></figcaption>
</figure>
<p>Next we need to install a couple of dependencies. You can just copy the <code>dependencies</code> &amp; <code>devDependencies</code> from the <code>package.json</code> below into your own and do an <code><strong>npm install</strong></code><strong>:</strong></p>
"name": "react-boiler-plate",
"version": "1.0.0",
"description": "A react boiler plate",
"main": "src/index.js",
"author": "Adeel Imran",
"license": "MIT",
"scripts": {
"start": "a script will come here"
},
"dependencies": {
"react": "^16.5.2",
"react-dom": "^16.5.2"
},
"devDependencies": {
"@babel/core": "^7.0.0",
"@babel/plugin-proposal-class-properties": "^7.0.0",
"@babel/plugin-proposal-export-namespace-from": "^7.0.0",
"@babel/plugin-proposal-throw-expressions": "^7.0.0",
"@babel/plugin-syntax-dynamic-import": "^7.0.0",
"@babel/polyfill": "^7.0.0-beta.51",
"@babel/preset-env": "^7.0.0-beta.51",
"@babel/preset-react": "^7.0.0-beta.51",
"babel-loader": "^8.0.0-beta.0",
"copy-webpack-plugin": "^4.5.1",
"css-loader": "^0.28.11",
"html-webpack-plugin": "^3.2.0",
"mini-css-extract-plugin": "^0.4.3",
"node-sass": "^4.8.3",
"optimize-css-assets-webpack-plugin": "^4.0.0",
"sass-loader": "^7.0.3",
"style-loader": "^0.21.0",
"uglifyjs-webpack-plugin": "^1.2.5",
"webpack": "^4.12.0",
"webpack-cli": "^3.0.8",
"webpack-dev-server": "^3.1.4",
"webpack-merge": "^4.1.3",
"webpack-visualizer-plugin": "^0.1.11"
}
}
</code></pre>
<p>Yes I know, I know! That’s a lot to create a hello world react app. But wait, this is all you will need. Even if you want to create a enterprise level app. (Maybe one or two more things depending on your requirements, but this is the backbone for it.)</p>
<p>So let’s talk about each and everyone of them before we dive deep into the code.</p>
<p><a href="http://webpack.js.org" rel="noopener">webpack</a>: We need Webpack to bundle our code.</p>
<p><a href="https://github.com/webpack/webpack-cli" rel="noopener">webpack-cli</a>: We will be using some CLI features of Webpack to make our lives easier while writing some scripts.</p>
<p><a href="https://github.com/webpack/webpack-dev-server" rel="noopener">webpack-dev-server</a>: I will create a server using the webpack-dev-server package. This is only meant to be used in the development environment, and not for production. This means while developing and working on my code, I don’t need a separate server like NodeJS to setup manually.</p>
<p><a href="https://github.com/survivejs/webpack-merge" rel="noopener">webpack-merge</a>: To divide our configuration into chunks, more on this later</p>
<p><a href="https://github.com/chrisbateman/webpack-visualizer#readme" rel="noopener">webpack-visualizer-plugin</a>: To see a visual representation of each of our bundle size — how much space they are taking and what are their dependencies.</p>
<p><a href="https://github.com/webpack-contrib/style-loader" rel="noopener">style-loader</a>: This adds CSS to the DOM by injecting a <code>&lt;script</code> /&gt; tag in the header</p>
<p><a href="https://github.com/webpack-contrib/sass-loader" rel="noopener">sass-loader</a>: For SCSS support</p>
<p><a href="https://github.com/sass/node-sass" rel="noopener">node-sass</a>: A dependency for sass-loader</p>
<p><a href="https://github.com/webpack-contrib/css-loader" rel="noopener">css-loader</a>: To convert our .scss files into .css</p>
<p><a href="https://github.com/webpack-contrib/mini-css-extract-plugin" rel="noopener">mini-css-extract-plugin</a>: This plugin extracts CSS into separate files. It creates a CSS file per JS file which contains CSS.</p>
<p><a href="https://github.com/webpack-contrib/uglifyjs-webpack-plugin" rel="noopener">uglifyjs-webpack-plugin</a>: To minify JavaScript code for production</p>
<p><a href="https://github.com/NMFR/optimize-css-assets-webpack-plugin" rel="noopener">optimize-css-assets-webpack-plugin</a> To minify CSS code for production</p>
<p><a href="https://github.com/jantimon/html-webpack-plugin" rel="noopener">html-webpack-plugin</a>: This does more then generate an HTML file, it supports on demand .css and .js files automatically added to your HTML files on demand</p>
<p><a href="https://webpack.js.org/plugins/copy-webpack-plugin/" rel="noopener">copy-webpack-plugin</a>: Copies files/folders to your build folder.</p>
<p><a href="https://github.com/babel/babel-loader" rel="noopener">babel-loader</a>: This is the loader that helps webpack compile .js files</p>
<p><a href="https://github.com/babel/babel/tree/master/packages/babel-core" rel="noopener">@babel/core</a>: Babel core compiler, this is a dependency that lets you use babel-loader</p>
<p><a href="https://www.npmjs.com/package/@babel/preset-react" rel="noopener">@babel/preset-react</a> Babel preset for React code</p>
<p><a href="https://github.com/babel/babel/tree/master/packages/babel-preset-env" rel="noopener">@babel/preset-env</a>: Babel preset that allows you to use the latest JavaScript</p>
<p><a href="https://babeljs.io/docs/en/next/babel-polyfill.html" rel="noopener">@babel/pollyfill</a>: Babel includes a <a href="https://en.wikipedia.org/wiki/Polyfill_(programming)" rel="noopener">polyfill</a> that includes a custom <a href="https://github.com/facebook/regenerator/blob/master/packages/regenerator-runtime/runtime.js" rel="noopener">regenerator runtime</a> and <a href="https://github.com/zloirock/core-js" rel="noopener">core-js</a>. This will emulate a full ES2015+ environment. This means support for <code>async/await</code> type of cool syntax sugar.</p>
<blockquote><em>Up till now this is pretty much what I wrote in <a href="https://medium.freecodecamp.org/how-to-conquer-webpack-4-and-build-a-sweet-react-app-236d721e6745" rel="noopener"><strong>How to conquer Webpack 4 and build a sweet React app</strong></a><strong>.</strong></em></blockquote>
<p><strong>So what changed?</strong></p>
<p>Well! Babel introduced a breaking change (for the greater good, believe me) which you can read more here: <a href="https://babeljs.io/blog/2018/07/27/removing-babels-stage-presets" rel="noopener"><strong>Removing Babel’s Stage Preset</strong></a><strong>.</strong> What this meant was that before if you included babel-preset-stage-2 let’s say, it would include all proposals related to stage-2, which would bloat your code. But you just might need one specific feature of stage-2.</p>
<p>So in order to combat this, babel deprecated all those preset plugins and shipped individual features. You now have to set those up manually. <strong>Cool right?</strong> So let’s talk a bit about those individual packages and what they do.</p>
<p><a href="https://babeljs.io/docs/en/next/babel-plugin-proposal-class-properties.html" rel="noopener">@babel/plugin-proposal-class-properties</a>: Coverts your <code>class</code> syntax into a <code>function</code> for browsers that don’t support <code>class</code> syntax</p>
<p><a href="https://babeljs.io/docs/en/next/babel-plugin-proposal-export-namespace-from.html" rel="noopener">@babel/plugin-proposal-export-namespace-from</a> Supports syntax like <code>import * as ns from '../path/to/module';</code></p>
<p><a href="https://github.com/tc39/proposal-throw-expressions" rel="noopener">@babel/plugin-proposal-throw-expressions</a> New syntax to throw exceptions from within an expression context. <strong>I love this feature :D</strong></p>
<p><a href="https://babeljs.io/docs/en/next/babel-plugin-syntax-dynamic-import.html" rel="noopener">@babel/plugin-syntax-dynamic-import</a> This is what helps with code splitting. Webpack ships with code splitting by default (Since webpack 1). But when you want to code split in webpack while you are using <strong>babel, </strong>then you need to use this plugin.</p>
<p>Note: for this tutorial you won’t need<code>@babel/plugin-proposal-export-namsespace-from</code> &amp; <code>@babel/plugin-proposal-throw-expressions</code></p>
<blockquote><em>Also here is a list of all babel plugins. I mean all of them. Check out the list <a href="https://babeljs.io/docs/en/plugins" rel="noopener"><strong>here</strong></a><strong>.</strong></em></blockquote>
<p>And now that you know why we need what we need — nothing extra — you’ll feel more confident implementing the webpack configuration.</p>
<p>Let’s start by adding a <code>.babelrc</code> file in the root of out <code>app</code> folder:</p>
"presets": [
"@babel/preset-env",
"@babel/preset-react"
],
"plugins": [
"@babel/plugin-syntax-dynamic-import",
"@babel/plugin-proposal-class-properties",
"@babel/plugin-proposal-export-namespace-from",
"@babel/plugin-proposal-throw-expressions"
]
}
</code></pre>
<p>We have 2 main presets <code>preset-env</code> &amp; <code>preset-react</code> . The rest are our plugins to add “<strong>wings</strong>” to our code.</p>
<p>And to quote Captain Kirk from Star Trek (because why not):</p>
<blockquote><em>Perhaps man wasn’t meant for paradise. Maybe he was meant to claw, to scratch all the way. Captain Kirk</em></blockquote>
<p>In his defense, Captain Kirk was up against the likes of General Change, Khan, The Borg and so many dangerous foes. All we are up against is the beautiful <strong>Webpack</strong> and <strong>Babel</strong>. So perhaps we developers are meant for paradise.</p>
<p>So let’s set our webpack up.</p>
<p>Create a <code>config</code> folder in your <code>app</code> . If you feel lost you can at any time refer to the GitHub r<a href="https://github.com/adeelibr/react-starter-kit/tree/master/config" rel="noopener">epository</a> for this. Now inside our <code>config </code>folder let’s create a file called <code>webpack.base.config.js</code> The reason I call this <code>base</code> is because it is going to be used for our development and for production. <em>Because why write the same thing twice? </em>Again if this isn’t making much sense, just bear with me a few more minutes.</p>
<p>In your <code>config/webpack.base.config.js</code> write this:<br></p>
module: {
rules: [
{
test: /\.js$/,
exclude: /node_modules/,
use: {
loader: 'babel-loader'
}
},
]
}
}
</code></pre>
<p>Once you have it in place, run this command in your root <code>app</code> directory. (I’ll tell you what this command does a bit later with the code we wrote above, I promise.)</p><pre><code>$ node_modules/.bin/webpack-dev-server --mode development --config config/webpack.base.config.js --open --hot --history-api-fallback</code></pre>
<p>Once you run this command, you will see this screen:</p>
<figcaption>Oh! A Fancy Error!</figcaption>
</figure>
<p>So what happened here? Well when we ran the webpack command, it did find our <code>index.js</code> file that we wrote earlier in <code>app/src/index.js</code> — but it didn’t have a <code>.html</code> to run it in. So let’s create an <code>index.html</code> file in our <code>app/src</code> folder:</p>
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /&gt;
&lt;base href="/"&gt;
&lt;title&gt;Tutorial&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="app"&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<p>Let’s update our <code>webpack.base.config.js</code> as well:</p>
module.exports = {
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
new HtmlWebpackPlugin({
template: './src/index.html',
filename: './index.html'
})
]
}
</code></pre>
<p>Let’s run that command again now:</p><pre><code>$ node_modules/.bin/webpack-dev-server --mode development --config config/webpack.base.config.js --open --hot --history-api-fallback</code></pre>
<p>Your browser will open up. If you are using Google Chrome, press <code>ctrl+shift+j</code> and your browser console will open up. You will see something like this:</p>
<figcaption>Hey look at that, this is what I wrote in my console! You should see something like this at your end as well.</figcaption>
</figure>
<p>So let’s talk what happened here. Our <code>webpack.base.config.js</code> has two main things: modules and plugins. A module can have multiple rules, and each rule is applied to certain file type. The certain file type that we want to apply that rule to is in <code>test</code> of that rule:</p>
{
test: /\.js$/,
exclude: /node_modules/,
use: {
loader: 'babel-loader'
}
},
]
</code></pre>
<p>Here by saying <code>test: /\.js$./,</code> we are telling webpack to apply this rule only for <code>.js</code> files. The other thing is <code>exclude</code> which also takes in a regex expression of what not not to include. This is where we tell it not to compile <code>node_modules</code> because this will compile all of it, and there are loads of dependencies installed. Check the <code>node_modules</code> yourself. The last part is <code>use</code>.</p>
<p>Now webpack knows where to apply the rule using <code>test</code> and where not to apply the rule using <code>exclude</code> — but what is the rule exactly? That is where <code>use</code> comes into play: here we specify <code>loader: 'babel-loader'</code>. Now what <code>babel-loader</code> does is that it looks for <code>.babelrc</code> file that we wrote earlier. And all the presets &amp; plugins we wrote there. It takes all of them and applies those to our <code>.js</code> files.</p>
<p>Which brings us to the next question: how does <strong>Webpack 4 </strong>find those files? Well Webpack 4 ships with loads of default stuff already set up for you. Two of those are <code>entry</code> and <code>output</code> .</p>
<p><code>entry</code> point by default is the <code>src</code> directory that we wrote in our <code>app</code> folder.</p>
<p><code>output</code> point is where all the compiled bundled code is generated, which is going to be <code>dist</code> folder in out <code>app</code> folder. (You won’t see that now, because we haven’t compiled our code yet for production.)</p>
<p>Next we’ll talk about <code>html-webpack-plugin</code> The purpose of this plugin is simple as the name suggests. It creates HTML files to serve all of your bundled files. (All of it — .js, .css, .scss, .img etc)</p>
<figcaption>If you have followed along up till yet. You guys are great</figcaption>
</figure>
<p>Let’s talk about when we run the following:</p><pre><code>$ node_modules/.bin/webpack-dev-server --mode development --config config/webpack.base.config.js --open --hot --history-api-fallback</code></pre>
<p>This command will open up port <code><a href="http://localhost:8080" rel="noopener">http://localhost:8080</a></code> or another port if <code>8080</code> is taken. (I’ll talk more about what this command does later — for now let’s move on).</p>
<p>The <em>index.html</em> that is generated looks like this:</p>
<figcaption>I simply clicked<strong> ctrl + shift + i </strong>this opened up the inspect element in my chrome browser</figcaption>
</figure>
<p><strong>Blue part:</strong> The blue part is simply where I put in my meta tags and defined a title for the app.</p>
<p><strong>Yellow part:</strong> The yellow part highlighted is the hard coded part that we wrote in our <code><strong>index.html</strong></code> file. This is where our future React app will reside.</p>
<p><strong>Red Part:</strong> The part I underlined in red is the most interesting part. We never wrote this in our index.html file, so where did it come from?</p>
<p>Webpack is very smart. It took that file in your <code><strong>index.js </strong></code>, bundled it all up nicely, and added it up all neatly in the file called <code><strong>main.js</strong></code> . Then it injected it in our <code><strong>index.html</strong></code> file. Super Cool!</p>
<blockquote><em>We are almost 60% <strong>done! </strong>Believe me the hard part is over…</em></blockquote>
<h3 id="let-s-add-react">Let’s Add React</h3>
<p>The cool thing is, all our dependencies are already installed. And everything is already configured. So in your <code>app/src/index.js</code> remove all the code and replace it with this:</p>
import ReactDOM from 'react-dom';
const App = () =&gt; {
return (
&lt;div&gt;
&lt;p&gt;
We are a most promising species, Mr. Spock, as predators go. Did you know that? I frequently
have my doubts. I dont. Not any more. And maybe in a thousand years or so, we will be able
to prove it.
&lt;/p&gt;
&lt;p&gt;- Captain Kirk&lt;/p&gt;
&lt;/div&gt;
);
};
ReactDOM.render(&lt;App /&gt;, document.getElementById('app'));
</code></pre>
<p>Now if your terminal is still running the <code>webpack-dev-server</code> script, just check the browser out. If not, here is the script. I don’t want you to scroll all the way up again.</p><pre><code>$ node_modules/.bin/webpack-dev-server --mode development --config config/webpack.base.config.js --open --hot --history-api-fallback</code></pre>
<p>This is what you will see:</p>
<figcaption>This is our React application live.</figcaption>
</figure>
<p>Now make sure you don’t close the terminal, and go in your <code>app/src/index.js</code> and make some changes to your <code>&lt;App</code> /&gt; component. Try changing the sentence in the paragraph. Once changed, go back to your browser and the content is already there updated. How cool is that? :D</p>
<blockquote><em>This sums up 70% of our tutorial — only 30% more to go. You are doing great.</em></blockquote>
<h3 id="let-s-add-scss-support"><strong>Let’s Add SCSS Support</strong></h3>
<p>Let’s start by updating our <code>config/webpack.base.config.js</code> by adding another rule for <code>.scss</code> files</p>
module.exports = {
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
'css-loader',
'sass-loader'
]
},
]
},
plugins: [
new HtmlWebpackPlugin({
template: './src/index.html',
filename: './index.html'
}),
]
}
</code></pre>
<p>So the <code>use</code> I use here takes an array instead of an object like what I did for the <code>.js</code> files. This is because we need to apply a set of rules here:</p><pre><code>use: [ 'style-loader','css-loader','sass-loader' ]</code></pre>
<p>So let’s read the <code>use</code> array from <code>right to left</code> — this is <strong>important.</strong> What we are telling Webpack is to take any <code>.scss</code> files it finds and parse it for its own understanding using the <strong>sass-loader. </strong>Once it has converted it into sass, we then ask Webpack to convert the sass into CSS. For that we apply <strong>css-loader</strong>.</p>
<p>As of this point we have converted the .scss into .css. But there is no way for us to add the converted files into our <code>.html</code>. For this we use the last loader called <strong>style-loader</strong> which takes all the converted .css and injects it into our <code>index.html</code> file.</p>
<p>So let’s add some <code>.scss</code> to test this out. In your <code>src/</code> folder add a file called <code>myStyles.scss</code> Mine looks like the one below:</p>
background-color: skyblue;
color: black;
}
.app {
width: 450px;
margin: 0 auto;
padding-top: 50px;
}
</code></pre>
<p>And my <code>src/index.js</code> file looks like this:</p>
import ReactDOM from 'react-dom';
import './myStyles.scss';;
const App = () =&gt; {
return (
&lt;div className="app"&gt;
&lt;p&gt;
We are a most promising species, Mr. Spock, as predators go. Did you know that? I frequently
have my doubts. I dont. Not any more. And maybe in a thousand years or so, we will be able
to prove it.
&lt;/p&gt;
&lt;p&gt;- Captain Kirk&lt;/p&gt;
&lt;/div&gt;
);
};
ReactDOM.render(&lt;App /&gt;, document.getElementById('app'));
</code></pre>
<p>Restart your <code>webpack-dev-server</code> by running this command again:</p><pre><code>$ node_modules/.bin/webpack-dev-server --mode development --config config/webpack.base.config.js --open --hot --history-api-fallback</code></pre>
<blockquote><em>This was the last time I’ll make you manually write that script up. After this we will move this command into our <code>scripts</code> section in our <code>package.json</code>.</em></blockquote>
<p>Your browser will open up, this is what it looks like now:</p>
<figcaption>Nice! huh.</figcaption>
</figure>
<p>Now in your <code>myStyles.scss</code> file, try making some changes. Like make the <code>font-size: white;</code> come back to your browser. It reflects those changes. You don’t have to restart your server again — just for the <code>.scss</code> to compile.</p>
<p>With this, most of our development configuration is done. Our React application is live, and has hot module replacement for <code>.js</code> files as well as <code>.scss</code> files</p>
<p>So before we move further, let’s add the <code>webpack-dev-server</code> script in our <code>package.json</code>. In your <code><strong>scripts</strong></code><strong> </strong>section, add the following code:</p>
"start": "webpack-dev-server --mode development --config config/webpack.base.config.js --open --hot --history-api-fallback --env.PLATFORM=local --env.VERSION=stag",
"prebuild": "webpack --mode production --config config/webpack.prod.config.js --env.PLATFORM=production --env.VERSION=stag --progress",
"build": "node server",
},
</code></pre>
<p>For now I’ll talk about the <code>start</code> command. I’ll talk about the <code>prebuild</code> and <code>build</code> scripts later in the production configuration section.</p>
<p>So what does this command do: <code>npm run start</code></p><pre><code>"start": "webpack-dev-server --mode development --config config/webpack.base.config.js --open --hot --history-api-fallback"</code></pre>
<p>Let’s break this down. When we run <code>npm run start</code> we’re telling it to run a package called <code>webpack-dev-server</code>. Then we pass it some configurations.</p>
<ul>
<li><code>webpack-dev-server</code> serves a webpack app and updates the browser on changes.</li>
<li><code>--mode development</code> tells <code>webpack</code> to compile the code in development mode. This is basically to make the compilation time faster.</li>
<li><code>--config config/webpack.base.config.js</code> So by default if you have <code>webpack.config.js</code> file in your root <code>app</code> folder, you don’t have to supply the <code>--config</code> flag to it. But since I want to explicitly add all my webpack related configurations in the <code>config</code> folder, I pass in <code>--config</code> option that tells webpack where to look for the configuration</li>
<li><code>--open</code> command opens the browser, when webpack is done with its compilation.</li>
<li><code>--hot</code> flag tells webpack to actively watch for code changes in the <code>src</code> folder. If any changes happen, it reloads the browser.</li>
<li><code>--history-api-fallback</code> This option enables <a href="https://github.com/bripkens/connect-history-api-fallback" rel="noopener">History API Fallback</a> support in <code>webpack-dev-server</code>, effectively asking the server to fallback to <code>index.html </code>in the event that a requested resource cannot be found.</li>
<li><code>--env.PLATFORM</code> &amp; <code>--env.VERSION</code> are custom flags that I pass in my configuration (more on this later).</li>
</ul>
<p>Now that we are done, let move onto our <strong>production </strong>configurations.</p>
<p>But before we do that, let’s talk about <code>webpack-merge</code>. Now this is a real winner. It takes in one configuration and another one and merges them both together to give us one. The way it works is you need to wrap your configuration with <code>merge</code> like the one below. Let’s start off by making our <code>webpack.base.config.js</code> file into a <code>webpack-merge</code> usable chunk:</p>
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = env =&gt; {
const { PLATFORM, VERSION } = env;
return merge([
{
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
'css-loader',
'sass-loader'
]
}
]
},
plugins: [
new HtmlWebpackPlugin({
template: './src/index.html',
filename: './index.html'
}),
new webpack.DefinePlugin({
'process.env.VERSION': JSON.stringify(env.VERSION),
'process.env.PLATFORM': JSON.stringify(env.PLATFORM)
}),
],
}
])
};
</code></pre>
<p>Previously where we where exporting an <code>object</code>, now we are exporting a <code>function</code> which returns <code>merge</code> and takes in the configuration.</p>
<p>Let’s break this down as to what this is doing.The first thing we talk about is this:</p><pre><code>module.exports = function(env) {}</code></pre>
<p>The new flags added in our <code>start</code> command<code> — env.PLATFORM=local — env.VERSION=stag</code> are passed to our webpack configurations, which we can access with the <code>env</code> param in <code>module.exports = function (env) {}</code>. So what can we do with this?</p>
<ul>
<li>We can set up a conditional statement in our webpack configuration, that if a certain condition is met, then do this or that (more on this later). Basically we will change our configuration on compile time to cater to whichever environment is being run — production or development.</li>
<li>The other thing that we can do here is pass them in our code as well. So what do I mean by pass in our code? One new plugin I added for this is called <code><strong>new webpack.DefinePlugin</strong></code><strong>.</strong> (Also that is why I had to include webpack at the top of <code>webpack.base.config.js</code>.) What this does is: “<em>The <code>DefinePlugin</code> allows you to create global constants which can be configured at compile time.</em>” You can read more about this <a href="https://webpack.js.org/plugins/define-plugin/" rel="noopener"><strong>here</strong></a><strong>.</strong></li>
</ul>
<p>Next we return a configuration inside the function like this:</p>
// our webpack configuration here
});
</code></pre>
<p>Well not much has changed here. All we did was wrap our configuration in <code>merge</code>. This gives us the ability to <code>merge</code> this entire configuration into the other one that we will create.</p>
<p>One thing added is a new plugin called <code>DefinePlugin</code> which I already talked about.</p>
<blockquote><em>If you are a nerd like me and want to dig deeper into <code>webpack-merge</code> I suggest you dive in <a href="https://github.com/survivejs/webpack-merge" rel="noopener"><strong>here</strong></a><strong> — </strong>this was developed by the cool folks at <code><a href="https://survivejs.com/" rel="noopener"><strong>SurviveJS</strong></a></code><strong>.</strong></em></blockquote>
<p>Before moving to the <code>production</code> settings, let’s check if our base configurations are working.</p>
<p>In your <code>src/index.js</code> file add this somewhere:</p><pre><code>console.log('process.env.VERSION', process.env.VERSION);</code></pre><pre><code>console.log('process.env.PLATFORM', process.env.PLATFORM);</code></pre><pre><code>console.log('process.env.NODE_ENV', process.env.NODE_ENV);</code></pre>
<p>In your terminal run <code>npm run start</code>. Wait for your browser to load up. Open up your terminal.</p>
<figcaption>Click <strong>ctrl+shift+j </strong>to open up the console in your browser</figcaption>
</figure>
<p>The first two you see in the console is the result of us passing the <code>--env</code> flags from our script to our webpack configuration and setting it with DefinePlugin. The third one is with the <code>--mode</code> flag that we pass in our script. If mode is development or production, then that is set up in our <code>process.env.NODE_ENV</code> flag.</p>
<p>Now that that’s cleared up, let’s move on.</p>
<p>In your <code>config</code> folder, create a new file called <code>webpack.prod.config.js</code> and add the following code into it as shown below:</p>
// Plugins
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var Visualizer = require('webpack-visualizer-plugin');
var baseConfig = require('./webpack.base.config');
const prodConfiguration = env =&gt; {
return merge([
{
optimization: {
runtimeChunk: 'single',
splitChunks: {
cacheGroups: {
vendor: {
test: /[\\/]node_modules[\\/]/,
name: 'vendors',
chunks: 'all'
}
}
},
minimizer: [new UglifyJsPlugin()],
},
plugins: [
new OptimizeCssAssetsPlugin(),
new Visualizer({ filename: './statistics.html' })
],
},
]);
}
module.exports = env =&gt; {
return merge(baseConfig(env), prodConfiguration(env));
}
</code></pre>
<p>Let’s start from the bottom with <code>module.exports = env =&gt;</code> {}</p>
<p>We merge two configurations: one is our <code>baseConfig</code> and the other is <code>prodConfiguration</code> . The <code>--env</code> flags we pass in our scripts are passed on as an object in the <code>env =&gt;</code> {} params in our function. We then pass them onto both t<code>he baseCon</code>fig<code> &amp; prodCon</code>fig.</p>
<blockquote>So what is <code>prodConfig</code> ?</blockquote>
<p>It is basically a list of the optimizations we want to perform when our code goes up for production.</p>
<p>The <code>optimization.minimizer</code> takes in a <code>new UglifyJsPlugin</code>. What this does is uglify and minify our .js files.</p>
<p>The <code>optimization.splitChunks</code> actually takes all of your common code and creates a <code>vendor.bundle.js</code> file. It is not going to make one now. But as our code base grows, we have multiple routes, and there are different modules being used like <code>date-fns</code> <code>moment</code> <code>lodash</code> <code>material-ui</code> etc. It will take all the common code from entire app and make a common file called <code>vendor.bundle.js</code> . This way, the repeated code isn’t used again &amp; again. (I am against this approach, but for educational purposes I described it here.)</p>
<p>Going forward I’ll comment the <code>optimization.splitChunks</code> but, it will exist there in the code repository if you want to use it. You just have to uncomment this section. I prefer to split my code based on routes. Having common code chunked out into a separate module means that your entire common code is going to be loaded first. This can be huge, and as a result the user’s first time interaction will take longer (because now all of these dependencies are being loaded, which might not need to be in the respective page that the user is seeing/viewing).</p>
<p>Next up, we have a couple of plugins. One of them happens to be <code>new OptimizeCssAssetsPlugin()</code>. All it does is take all of our generated <code>.css</code> and minify/optimize it. This doesn’t work right now, because we are using <code>style-loader</code> and style loader directly injects the generated <code>.css</code> into the DOM.</p>
<p>First, we need tell webpack to extract all the generated <code>.css</code> into a separate file, and then the optimizations added by this plugin are applied. (We’ll do this a bit later.)</p>
<p>The other plugin added here is called <code>new Visualizer({ filename: ‘./statistics.html’ })</code> .This plugin is awesome: it generates a <code>statistics.html</code> file in the <code>dist/</code> folder for you. Open the file, and you’ll see a graphic like the one below.</p>
<figcaption>Image taken from <a href="https://github.com/chrisbateman/webpack-visualizer" rel="noopener" target="_blank" title="">https://github.com/chrisbateman/webpack-visualizer</a></figcaption>
</figure>
<p>Right now we only have a single module called <code>main.js</code>. But with time, as we add more modules, and have code splitting added to it. More modules will start showing up here and we can actually see what modules take what size. This can be really useful when you are trying to reduce the size of your application.</p>
<p>Coming back to <code>OptimizeCssAssetsPlugin()</code> . In order to optimize the .css generated, we need to move this into a separate module. For that I am going to use <code>mini-css-extract-plugin</code> This will require us to make changes in both of our webpack files, the <code>.base</code> and <code>.prod</code> files.</p>
const webpack = require('webpack');
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = env =&gt; {
const { PLATFORM, VERSION } = env;
return merge([
{
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
PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
'css-loader',
'sass-loader'
]
}
]
},
plugins: [
new HtmlWebpackPlugin({
template: './src/index.html',
filename: './index.html'
}),
new webpack.DefinePlugin({
'process.env.VERSION': JSON.stringify(env.VERSION),
'process.env.PLATFORM': JSON.stringify(env.PLATFORM)
}),
],
}
])
};</code></pre>
<figcaption>webpack.base.config.js</figcaption>
</figure>
/* eslint-disable */
const merge = require('webpack-merge');
// Plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
// Configs
const baseConfig = require('./webpack.base.config');
const prodConfiguration = env =&gt; {
return merge([
{
optimization: {
// runtimeChunk: 'single',
// splitChunks: {
//   cacheGroups: {
//     vendor: {
//       test: /[\\/]node_modules[\\/]/,
//       name: 'vendors',
//       chunks: 'all'
//     }
//   }
// },
minimizer: [new UglifyJsPlugin()],
},
plugins: [
new MiniCssExtractPlugin(),
new OptimizeCssAssetsPlugin(),
new Visualizer({ filename: './statistics.html' })
],
},
]);
}
module.exports = env =&gt; {
return merge(baseConfig(env), prodConfiguration(env));
}</code></pre>
<figcaption>webpack.prod.config.js</figcaption>
</figure>
<p>Let’s talk about the changes I made in <code>webpack.base.config.js</code> .Only one module was added called <code>const MiniCssExtractPlugin = require(“mini-css-extract-plugin”);</code>. Then in our <code>.scss</code> rules we checked if the <code>PLATFORM</code> flag passed has the value <code>production</code>. If so, we add <code>MiniCssExtractPlugin.loader</code>, and otherwise we add the <code>style-loader</code>.</p>
<p><code>style-loader</code> is used to actively watch and change our compiled <code>.css</code> in development mode, while <code>MiniCssExtractPlugin.loader</code> is used when we need to extract that generated CSS into a separate module. This is only for production.</p>
<p>In the other file <code>webpack.prod.config.js</code> we have these two plugins added:</p><pre><code class="language-javascript">new MiniCssExtractPlugin(),
new OptimizeCssAssetsPlugin(),</code></pre>
<p>The first will extract this into a separate module called <code>main.css</code> and the other will minify/uglify the generated CSS.</p>
<p>Having done this, we are almost 90% done. If you have stayed this far, kudos to you.</p>
<figcaption>Awesome!</figcaption>
</figure>
<p>Before we proceed further, here is what Captain Kirk has to say</p>
<blockquote><em>You know the greatest danger facing us is ourselves, and irrational fear of the unknown. There is no such thing as the unknown. Only things temporarily hidden, temporarily not understood.</em></blockquote>
<blockquote>- James T. Kirk, The Corbomite Maneuver</blockquote>
<p>Let’s add more functionality, to our code. Now there are two ways to add files in your code. One is by using another loader called <code>file-loader</code> which will help you add files of any type into your .js files like we did with .scss files.</p>
<p>I want to talk about another approach here, because I think assets like fonts, images and others should be loaded in parallel rather than in your .js files. This helps provide a better experience for the user. So for that propose we will load our images statically.</p>
<p>For this we will use a plugin called <code>copy-webpack-plugin</code>. The best thing about all this is you already have this installed. In your <code>webpack.base.config.js</code> add another plugin, like the below:</p>
module.exports = env =&gt; {
return merge([
{
module: {},
plugins: [
new CopyWebpackPlugin([ { from: 'src/static' } ]), // Add this in the plugins section
],
}
])
};</code></pre>
<figcaption>If at any moment you feel lost, go have a look at the <a href="https://github.com/adeelibr/react-starter-kit" rel="noopener"><strong>source code here</strong></a></figcaption>
</figure>
<p>The <code>copy-webpack-plugin</code> takes in an argument called <code>from</code>. This tells the plugin where to locate the static files and then copy them in the <code>dist</code> folder. Here I am telling it to look for a folder called <code>src/static</code> and copy all of its content in the <code>dist/</code> folder.</p>
<p>Once you have added this and set it up, all you have to do is, in your <code>app/src</code> folder, create a new folder called <code>static</code> . In this folder, create another folder called <code>images</code> so your folder will have a directory like this: <code>app/src/static/images</code></p>
<p>I am going to put an image here called <code>header.jpg</code>, but you can call it whatever you like. This is the image I am using: <a href="https://unsplash.com/photos/Idi6I490p7I" rel="noopener">https://unsplash.com/photos/Idi6I490p7I</a> (Photo by <a href="https://unsplash.com/photos/Idi6I490p7I?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener">Felix Mittermeier</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener">Unsplash</a>).</p>
<p>Now in order for this to work, you need to run the <code>npm run prebuild</code> command (I’ll talk more about <code>npm run prebuild</code> &amp; <code>npm run build</code> later when we set up our NodeJS server with ExpressJS) because we need our <code>static</code> files to be copied. The <code>npm run start</code> command won’t copy this to the <code>dist/</code> folder because it doesn’t compile code to the <code>dist/</code> folder.</p>
<p>Once you have run the <code>npm run prebuild</code> command this is what you will see:</p>
<figcaption>As you can see we have a images folder and inside that folder we have <code>header.jpg</code> file</figcaption>
</figure>
<p>So how can we access this file in our code?</p>
<p>I am going to make some changes in my <code>index.js</code> file along with <code>myStyles.scss</code> .You can follow along as well — we’re just adding an <code>&lt;img</code> /&gt; along with<code> some</code> .scss</p>
import ReactDOM from 'react-dom';
import './myStyles.scss';
const App = () =&gt; {
return (
&lt;div className="app"&gt;
&lt;img alt="header" src="/dist/images/header.jpg" className="app-header" /&gt;
&lt;p&gt;
We are a most promising species, Mr. Spock, as predators go. Did you know that? I frequently
have my doubts. I dont. Not any more. And maybe in a thousand years or so, we will be able
to prove it.
&lt;/p&gt;
&lt;p&gt;- Captain Kirk&lt;/p&gt;
&lt;/div&gt;
);
};
ReactDOM.render(&lt;App /&gt;, document.getElementById('app'));</code></pre>
<figcaption>index.js</figcaption>
</figure>
background-color: skyblue;
color: black;
}
.app {
width: 450px;
margin: 0 auto;
padding-top: 50px;
&amp; .app-header {
height: 250px;
width: inherit;
object-fit: cover;
}
}</code></pre>
<figcaption>myStyles.scss</figcaption>
</figure>
<p>The only thing to note here is in the <code>index.js</code> file where I add an image:</p><pre><code class="language-html">&lt;img
alt="header"
src="/dist/images/header.jpg"
className="app-header"
/&gt;</code></pre>
<p>The main thing is the path we give in the <code>src</code>.</p>
<p>Once you have added this, let’s check how this looks in the browser. Go and run <code>npm run start</code> command.</p>
<figcaption>Hey! Look Ma! I added an image. With this added, our webpack configuration is done.</figcaption>
</figure>
<h4 id="let-s-recap-what-we-have-accomplished-so-far">Let’s recap what we have accomplished so far</h4>
<ul>
<li>Setting up Webpack 4 with Babel 7 for React</li>
<li>Support for .SCSS</li>
<li>Development environment with HMR [For both .js &amp; .scss]</li>
<li>Production configuration</li>
<li>Dividing your Webpack configuration into chunks</li>
<li>Generating a visualizer in production build to check which chunk of code is how big and what are the dependencies of the chunks. Super useful.</li>
<li>Support for static files</li>
</ul>
<h4 id="things-we-still-need-to-accomplish">Things We Still Need To Accomplish</h4>
<ul>
<li>Add support for <code>async/await</code> in our code</li>
<li>Create a NodeJS server using ExpressJS for our production build</li>
<li>Code Splitting</li>
</ul>
<p>Let’s start with <code>async/await</code> first. For this purpose I am going to make a smart <code>&lt;App</code> /&gt; component. Inside this component I am going to call an API that gets me information about Captain Kirk, because he is awesome. So in our <code>index.js</code> add the following code:</p>
import ReactDOM from 'react-dom';
import './myStyles.scss';
class App extends React.Component {
state = {
CaptainKirkBio: {},
};
componentDidMount() {
this.onGetKirkBio();
}
onGetKirkBio = async () =&gt; {
try {
const URL = 'http://stapi.co/api/v1/rest/character/search';
const result = await fetch(URL, {
method: 'POST',
headers: {
'Content-Type': 'application/x-www-form-urlencoded',
},
body: {
title: 'James T. Kirk',
name: 'James T. Kirk',
},
});
const resultJSON = await result.json();
const character = resultJSON.characters[0];
this.setState({ CaptainKirkBio: character });
} catch (error) {
console.log('error', error);
}
};
render() {
const { CaptainKirkBio } = this.state;
return (
&lt;div className="app"&gt;
&lt;img alt="header" src="/dist/images/header.jpg" className="app-header" /&gt;
&lt;p&gt;
We are a most promising species, Mr. Spock, as predators go. Did you know that? I
frequently have my doubts. I dont. Not any more. And maybe in a thousand years or so, we
will be able to prove it.
&lt;/p&gt;
&lt;p&gt;- Captain Kirk&lt;/p&gt;
&lt;section&gt;
{Object.values(CaptainKirkBio).length === 0 ? (
&lt;p&gt;Loading User Information&lt;/p&gt;
) : (
&lt;p style={{ wordBreak: 'break-all' }}&gt;{JSON.stringify(CaptainKirkBio)}&lt;/p&gt;
)}
&lt;/section&gt;
&lt;/div&gt;
);
}
}
ReactDOM.render(&lt;App /&gt;, document.getElementById('app'));</code></pre>
<figcaption>index.js - Credits to <a href="http://stapi.co/" rel="noopener">http://stapi.co/</a> for giving the Star Trek API ❤</figcaption>
</figure>
<p>All I am doing here is calling an API using <code>try/catch</code> <code>async/await</code> and getting information about Captain Kirk. Simple right? This should work. Let’s fire this up in the browser.</p>
<p>Run the command:</p><pre><code>npm run start</code></pre>
<figcaption>Our app crashed here! Wonder why?</figcaption>
</figure>
<p>If you hit <code>ctrl+shift+j</code> your console will open up, and you will see an error there called <code><strong>regeneratorRuntime</strong></code><strong> . </strong>So what is this error and how do we get rid of it?</p>
<p>This error gets thrown when the browser doesn’t support <code>async/await</code> or <code>generators</code> for that matter.</p>
<blockquote>But <strong>Adeel</strong>! That’s the only reason we are using babel right?</blockquote>
<p>Yes! Here’s what <a href="https://twitter.com/left_pad" rel="noopener"><strong>Henry Zhu</strong></a>, the awesome dude behind babel, has to say about this:</p>
<blockquote>If you are using generators/async and the environment doesn’t support it natively we compile using regenerator which <strong>uses</strong> a runtime. So you’ll have to include regeneratorRuntime either yourself or use babel-polyfill.</blockquote>
<blockquote>Reference taken from an <a href="https://github.com/babel/babel-preset-env/issues/92#issuecomment-266869180" rel="noopener"><strong>issue</strong></a>.</blockquote>
<p>Now you know why this exists, so let’s solve it. We need to make some changes to our <code>webpack.base.config.js</code>:</p><pre><code class="language-javascript">const path = require('path');
const webpack = require('webpack');
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const APP_DIR = path.resolve(__dirname, '../src'); // &lt;===== new stuff added here
module.exports = env =&gt; {
const { PLATFORM, VERSION } = env;
return merge([
{
entry: ['@babel/polyfill', APP_DIR], // &lt;===== new stuff added here
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
PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
'css-loader',
'sass-loader'
]
}
]
},
plugins: [
new HtmlWebpackPlugin({
template: './src/index.html',
filename: './index.html'
}),
new webpack.DefinePlugin({
'process.env.VERSION': JSON.stringify(env.VERSION),
'process.env.PLATFORM': JSON.stringify(env.PLATFORM)
}),
new CopyWebpackPlugin([ { from: 'src/static' } ]),
],
}
])
};</code></pre>
<p>Check <code>line no.8</code> and <code>line no.14</code> in the snippet added above.</p>
<p>By default Webpack 4 takes in entry point of <code>src/</code>. But if we want to have multiple entry points, we can customize the <code>entry</code> point as well. In my entry point I am just telling it two things:</p><pre><code>entry: ['@babel/polyfill', APP_DIR],</code></pre>
<ul>
<li><code>@babel/polyfill</code> Babel plugin that includes a <a href="https://en.wikipedia.org/wiki/Polyfill_(programming)" rel="noopener">polyfill</a> that includes a custom <a href="https://github.com/facebook/regenerator/blob/master/packages/regenerator-runtime/runtime.js" rel="noopener">regenerator runtime</a> and <a href="https://github.com/zloirock/core-js" rel="noopener">core-js</a>.</li>
<li><code>APP_DIR</code> the path to our <code>src/</code> folder which I wrote on <code>line no.8</code> <code>const APP_DIR = path.resolve(__dirname, ‘../src’);</code> All this line is doing is pointing to the path of <code>src/</code> folder in our <code>app/</code> folder.</li>
</ul>
<p>So the <code>entry</code> just takes in “points” as to what to compile.</p>
<p>Now that this is cleared up, let’s run the <code>npm run start</code> command again.</p>
<figcaption>Our async/await method is working. Great :D</figcaption>
</figure>
<p>So far so good!</p>
<h4 id="now-that-everything-is-set-up-let-s-create-a-nodejs-server-using-expressjs-">Now that everything is set up, let’s create a NodeJS server using ExpressJS.</h4>
<figcaption>In the immortal words of <strong>Khan Noonien Singh</strong></figcaption>
</figure>
<p>The first thing we have to install is Express, so in your terminal write this:</p><pre><code>npm install express --save </code></pre>
<p>Or if you use <strong>yarn </strong>(like I do):</p><pre><code>yarn add express</code></pre>
<p>Next in the root <code>app</code> folder create a new folder called <code>server</code>. Inside the folder create a <code>index.js</code> file like the one shown below:</p>
const path = require('path');
const http = require('http');
const app = express();
// Point static path to dist
app.use('/', express.static(path.join(__dirname, '..', 'dist')));
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));
const routes = require('./routes');
app.use('/', routes);
/** Get port from environment and store in Express. */
const port = process.env.PORT || '3000';
app.set('port', port);
/** Create HTTP server. */
const server = http.createServer(app);
/** Listen on provided port, on all network interfaces. */
server.listen(port, () =&gt; console.log(`Server Running on port ${port}`));</code></pre>
<figcaption>index.js</figcaption>
</figure>
<p>Let’s discuss this code before we proceed further.</p>
<p>We instantiate our app with <code>express()</code> and then set up a static public folder called <code><strong>dist</strong></code><strong>.</strong> This is the same folder created by Webpack when we run our production command.</p>
<p>We include our <code><strong>routes</strong></code> file — we will create that in a second — and set the <code><strong>routes</strong></code> file to the <code>/</code> directory.</p>
<p>Next we set up a port. If none is provided via the node CLI, we use port <code>3000</code>. After that, we create an HTTP server and listen on that server via the port. At the very last, we console to our terminal that we are running the server on that certain port.</p>
<p>Let’s create our last file called <code><strong>routes/index.js</strong>:</code></p><pre><code class="language-javascript">const path = require('path');
const router = require('express').Router();
router.get('*', (req, res) =&gt; {
const route = path.join(__dirname, '..', '..', 'dist', 'index.html');
res.sendFile(route);
});
module.exports = router;</code></pre>
<p>Here we check that whatever the user comes on, the path redirects the user to the <code><strong>dist/index.html</strong></code> where our React application lives.</p>
<p>And that’s it. We are done.</p>
<p>Now go in your terminal and type:</p><pre><code>npm run build</code></pre>
<p>This will take a moment. It will show you the progress while it compiles. After that, it consoles a message that it is <code>listening to port 3000</code> if no port is provided.</p>
<p>Now go to your browser <code>http:localhost:3000/</code> and your application is alive.</p>
<p>Since we are at it, let’s talk in detail about what <code>npm run prebuild</code> and <code>npm run build</code> do.</p>
<p>Basically if we write the word <code>pre</code> for a script, in this case <code>prebuild</code>, every time we run our command <code>npm run build</code> it will first execute <code>npm run prebuild</code> and then run the script <code>npm run build</code> .</p>
<p>All <code>npm run build</code> does is run <code>node server/index.js</code> (You don’t have to write /index.js) in the command. NodeJS is smart enough to know it needs to run the <code>index.js</code> inside the <code>server</code> folder.</p>
<p>This sums up our NodeJS application setup as well.</p>
<p>One last topic to go. I’ll give a very brief overview on code splitting, and how you can achieve it.</p>
<h3 id="code-splitting">Code Splitting</h3>
<p>At the start of this tutorial, we added <code>@babel/plugin-syntax-dynamic-import</code> This gives us the ability to lazily load our code inside our application.</p>
<p>Inside my <code>src/</code> folder, I am going to create a component called <code>Foo.js</code> which looks something like this.</p>
export default () =&gt; (
&lt;div&gt;
&lt;p&gt;I am Foo! Pleasure to meet you.&lt;/p&gt;
&lt;/div&gt;
);</code></pre>
<figcaption>Foo.js</figcaption>
</figure>
<p>Nothing special about Foo here.</p>
<p>The special thing starts when we include this component in our <code>src/index.js</code> file.</p>
<p>You might be thinking something like this:</p><pre><code class="language-jsx">import Foo from './Foo';
class App extends React.Component {
state = {};
render() {
return (
&lt;div&gt;
&lt;p&gt;I am App&lt;/p&gt;
&lt;Foo /&gt;
&lt;/div&gt;
)
}
}</code></pre>
<p>Well no, for a dynamic import we have to do this:</p>
import ReactDOM from 'react-dom';
import './myStyles.scss';
class App extends React.Component {
state = {
CaptainKirkBio: {},
Foo: null, // Foo is out component
};
componentDidMount() {
this.onGetKirkBio();
import(/* webpackChunkName: 'Foo' */ './Foo').then(Foo =&gt; {
this.setState({ Foo: Foo.default });
});
}
onGetKirkBio = async () =&gt; {
try {
const result = await fetch('http://stapi.co/api/v1/rest/character/search', {
method: 'POST',
headers: {
'Content-Type': 'application/x-www-form-urlencoded',
},
body: {
title: 'James T. Kirk',
name: 'James T. Kirk',
},
});
const resultJSON = await result.json();
const character = resultJSON.characters[0];
this.setState({ CaptainKirkBio: character });
} catch (error) {
console.log('error', error);
}
};
render() {
const { CaptainKirkBio, Foo } = this.state;
return (
&lt;div className="app"&gt;
&lt;img alt="header" src="/dist/images/header.jpg" className="app-header" /&gt;
&lt;p&gt;
We are a most promising species, Mr. Spock, as predators go. Did you know that? I
frequently have my doubts. I dont. Not any more. And maybe in a thousand years or so will
be able to prove it.
&lt;/p&gt;
&lt;p&gt;- Captain Kirk&lt;/p&gt;
&lt;section&gt;
{Object.values(CaptainKirkBio).length === 0 ? (
&lt;p&gt;Loading User Information&lt;/p&gt;
) : (
&lt;p style={{ wordBreak: 'break-all' }}&gt;{JSON.stringify(CaptainKirkBio)}&lt;/p&gt;
)}
&lt;/section&gt;
{Foo ? &lt;Foo /&gt; : &lt;p&gt;Foo is loading&lt;/p&gt;}
&lt;/div&gt;
);
}
}
ReactDOM.render(&lt;App /&gt;, document.getElementById('app'));</code></pre>
<figcaption>index.js</figcaption>
</figure>
<p>Things to note here are in <code>line 9</code> <code>line 14, 15, 16</code> <code>line 40</code> <code>line 57</code>:</p>
<ul>
<li><code>Line 9</code>: We Set <code>Foo</code> as <code>null</code></li>
<li><code>Line 14, 15, 16</code> : As soon as our component mounts, we import our <code>&lt;Foo</code> /&gt; component</li>
</ul>
<p>Let’s talk more about this:</p><pre><code class="language-javascript">import(/* webpackChunkName: 'Foo' */ './Foo').then(Foo =&gt; {
this.setState({Foo: Foo.default });
})</code></pre>
<p>Let’s break this down even more.</p>
<p><code>import(/* webpackChunkName: ‘Foo’ */ ‘./Foo’)</code> : This has 2 parts to it, we set a chunk name called <code>Foo</code> in <code>/* webpackChunkName: ‘Foo’ */</code>. You can call this whatever you want. What this does is when your application loads the <code>./Foo</code> file, it will get loaded by the name of <code>Foo</code> as defined in <code>/* webpackChunkName: ‘Foo’ */</code></p>
<figcaption><code>/* webpackChunkName: ‘Foo’ */ Try changing Foo to something else in the /* */</code> comment</figcaption>
</figure>
<p>This feature is called magic comments in webpack, because it’s lets you name the file when you load it in your code.</p>
<p>The other part of <code>import(/* webpackChunkName: ‘Foo’ */ ‘./Foo’)</code> is the <code>‘./Foo’</code> at the very end of the statement. This is the path from where we include our file.</p>
<p>This returns us a promise <code>.then(Foo =&gt; </code>{}). Since our export <code>of &lt;</code>Foo /<code>&gt; was expor</code>t default when we set our <code>sta</code>te of Foo we s<code>et it to this.setState({Foo: Foo.de</code>fault }); in order to assign the Foo component to the state variable Foo.</p>
<p><code>line 57</code> : This is where we display our <code>&lt;Foo</code> /&gt; component. Unless it is not loaded i.e, it is null, we show a loading message. And once we hav<code>e the &amp;</code>lt;Foo /&gt; component we show it.</p>
<p>And that, my friends, is code splitting.</p>
<p>I really do hope this was helpful for you. If it was please do let me know so that I can write more stuff like this. You can always reach me out on <a href="https://twitter.com/adeelibr" rel="noopener"><strong>Twitter</strong></a><strong> </strong>and again if you followed along till the end, I am really proud of you guys. YOU GUYS ARE ROCKING IT!</p>
<hr>
<p>This article was originally published in Freecodecamp publication previously on Medium. <a href="https://medium.com/free-code-camp/how-to-combine-webpack-4-and-babel-7-to-create-a-fantastic-react-app-845797e036ff">Read here</a></p>
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
