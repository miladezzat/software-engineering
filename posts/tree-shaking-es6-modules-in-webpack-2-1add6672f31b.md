---
card: "https://cdn-media-1.freecodecamp.org/images/1*oD1_oAmOuY4X0k5QdqaQow.jpeg"
tags: [JavaScript]
description: "by Jake Wiesler"
author: "Milad E. Fahmy"
title: "Tree-shaking ES6 Modules in webpack 2"
created: "2021-08-16T10:25:47+02:00"
modified: "2021-08-16T10:25:47+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-webpack tag-web-development tag-programming tag-react ">
<header class="post-full-header">
<h1 class="post-full-title">Tree-shaking ES6 Modules in webpack 2</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*oD1_oAmOuY4X0k5QdqaQow.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*oD1_oAmOuY4X0k5QdqaQow.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*oD1_oAmOuY4X0k5QdqaQow.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*oD1_oAmOuY4X0k5QdqaQow.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*oD1_oAmOuY4X0k5QdqaQow.jpeg" alt="Tree-shaking ES6 Modules in webpack 2">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
export const sayHello = name =&gt; `Hello ${name}!`;
export const sayBye = name =&gt; `Bye ${name}!`</code></pre><p>Only <code>sayHello</code> is imported into <code>index.js</code> file:</p><pre><code class="language-js">// index.js
import { sayHello } from './module';
sayHello('World');</code></pre><p><code>sayBye</code> is exported but <em>never</em> imported. Anywhere. Therefore, due to tree-shaking, it won't be included in your bundle:</p><pre><code class="language-js">// bundle.js
const sayHello = name =&gt; `Hello ${name}!`;
sayHello('World');</code></pre><p>Depending on the bundler used, the output file above may look different. It’s just a simplified version, but you get the idea.</p><p>Recently I read an article written by <a href="https://medium.com/@roman01la/dead-code-elimination-and-tree-shaking-in-javascript-build-systems-fb8512c86edf#.69aadkgrb" rel="noopener">Roman Liutikov</a>, and he made a great analogy in order to visualize the concept of tree-shaking:</p><blockquote><em>“If you wonder why it’s called tree-shaking: think of your application as a dependency graph, this is a tree, and each export is a branch. So if you shake the tree, the dead branches will fall.” — Roman Liutikov</em></blockquote><h3 id="tree-shaking-in-webpack-2">Tree-shaking in webpack 2</h3><p>Unfortunately for those of us using webpack, tree-shaking is “behind a switch,” if you will. Unlike Rollup, some configuration needs to be done before you can get the functionality you’re looking for. The “behind a switch” part might confuse some people. I’ll explain.</p><h4 id="step-1-project-setup">Step 1: Project setup</h4><p>I’m going to assume that you understand webpack basics and can find your way around a basic webpack configuration file.</p><p>Let’s start by creating a new directory:</p><pre><code class="language-bash">mkdir webpack-tree-shaking &amp;&amp; cd webpack-tree-shaking</code></pre><p>Once inside, let’s initialize a new <code>npm</code> project:</p><pre><code class="language-bash">npm init -y</code></pre><p>The <code>-y</code> option generates the <code>package.json</code> quickly without requiring you to answer a bunch of questions.</p><p>Next, let’s install a few project dependencies:</p><pre><code class="language-bash">npm i --save-dev webpack@beta html-webpack-plugin</code></pre><p>The command above will install the latest beta version of webpack 2 locally in your project as well as a useful plugin named <code>html-webpack-plugin</code>. The latter is not necessary for the goal of this walkthrough but will make things a bit quicker.</p><p><strong>Note</strong>: The command <code>npm i --save-dev webpack@beta</code> is still recommended by the webpack team at the time of writing. <code>webpack@beta</code> will eventually be phased out in favor of the <code>webpack</code> latest command. Check out the <em>How To Download?</em><strong> </strong>section of <a href="https://medium.com/webpack/webpack-2-2-the-final-release-76c3d43bf144#.soqt6oma5" rel="noopener">webpack’s latest release post</a> for more details.</p><p>Open up <code>package.json</code> and make sure they've been installed as <code>devDependencies</code>.</p><h4 id="step-2-create-js-files">Step 2: Create JS files</h4><p>In order to see tree-shaking in action you need to have some JavaScript to play around with. In your project’s root, create a <code>src</code> folder with 2 files inside:</p><pre><code class="language-bash">mkdir src &amp;&amp; cd src
touch index.js
touch module.js</code></pre><p><strong>Note:</strong> The <code>touch</code> command creates a new file through the terminal.</p><p>Copy the code below into the correct files:</p><pre><code class="language-js">// module.js
export const sayHello = name =&gt; `Hello ${name}!`;
export const sayBye = name =&gt; `Bye ${name}!`;</code></pre><pre><code class="language-js">// index.js
import { sayHello } from './module';
const element = document.createElement('h1');
element.innerHTML = sayHello('World');
document.body.appendChild(element);</code></pre><p>If you’ve gotten this far, your folder structure should look like this:</p><pre><code>/
| - node_modules/
| - src/
|    | - index.js
|    | - module.js
| - package.json</code></pre><h4 id="step-3-webpack-from-the-cli">Step 3: Webpack from the CLI</h4><p>Since you have no configuration file created for your project, the only way to get webpack to do any work at the moment is through the webpack CLI. Let’s perform a quick test.</p><p>In your terminal, run the following command in your project’s root:</p><pre><code class="language-bash">node_modules/.bin/webpack</code></pre><p>After running this command, you should see output like this:</p><pre><code class="language-bash">No configuration file found and no output filename configured via CLI option. A configuration file could be named 'webpack.config.js' in the current directory. Use --help to display the CLI options.</code></pre><p>The command doesn’t do anything, and the webpack CLI confirms this. You haven’t given webpack any information about what files you want to bundle up. You could provide this information via the command line <em>or</em> a configuration file. Let’s choose the former just to test that everything is working:</p><pre><code class="language-bash">node_modules/.bin/webpack src/index.js dist/bundle.js</code></pre><p>What you’ve done now is pass webpack an <code>entry</code> file and an <code>output</code> file via the CLI. This information tells webpack, "go to <code>src/index.js</code> and bundle up all the necessary code into <code>dist/bundle.js</code>". And it does just that. You'll notice that you now have a <code>dist</code> directory containing <code>bundle.js</code>.</p><p>Open it up and check it out. There’s some extra javascript in the bundle necessary for webpack to do its thing, but at the bottom of the file you should see your own code as well.</p><h4 id="step-4-create-a-webpack-configuration-file">Step 4: Create a webpack configuration file</h4><p>Webpack can handle a lot of things. I’ve spent a good chunk of my free time diving into this bundler and I still have barely scratched the surface. Once you’ve move passed trivial examples its best to leave the CLI behind and create a configuration file to handle the heavy lifting.</p><p>In your project’s root, create a <code>webpack.config.js</code> file:</p><pre><code class="language-bash">touch webpack.config.js</code></pre><p>This file can be as complicated as you make it. We’ll keep it light for the sake of this post:</p><pre><code class="language-js">// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
entry: './src/index.js',
output: {
filename: 'bundle.js',
path: 'dist'
},
plugins: [
new HtmlWebpackPlugin({ title: 'Tree-shaking' })
]
}</code></pre><p>This file provides webpack with the same information you gave to the CLI earlier. You’ve defined <code>index.js</code> as your <code>entry</code> file and <code>bundle.js</code> as your <code>output</code> file. You've also added your <code>html-webpack-plugin</code> which will generate an html file in your <code>dist</code> directory. Convenient.</p><p>Go ahead and test this to make sure it’s still working. Remove your <code>dist</code> directory, and in the command line type:</p><pre><code class="language-bash">webpack</code></pre><p>If everything went smoothly, you can open up <code>dist/index.html</code> and see "Hello World!".</p><p><strong>Note:</strong> The use of a configuration file gives us the convenience of typing <code>webpack</code> instead of <code>node_modules/.bin/webpack</code>. Small wins.</p><h4 id="step-5-babel">Step 5: Babel</h4><p>I mentioned earlier that webpack 2 brings native support for ES6 modules. This is all true, but it doesn’t change the fact that ES6 is not fully supported across all browsers. Because of this, you’re required to <em>transform</em> your ES6 code into readily acceptable JavaScript using a tool like <a href="http://babeljs.io/" rel="noopener">Babel</a>. In conjunction with webpack, Babel gives us the ability to write your “future JavaScript” without worrying about the implications of unsupported browsers.</p><p>Let’s go ahead and install Babel in your project:</p><pre><code class="language-bash">npm i --save-dev babel-core babel-loader babel-preset-es2015</code></pre><p>Take note of the <code>babel-preset-es2015</code> package. This little guy is the reason I sat down to write all of this up.</p><h4 id="step-6-babel-loader">Step 6: <code>babel-loader</code></h4><p>Webpack can be configured to transform specific files into modules via <a href="https://webpack.js.org/concepts/#loaders" rel="noopener">loaders</a>. Once they are transformed, they are added to a dependency graph. Webpack uses the graph to resolve dependencies and includes only what is needed into the final bundle. This is the basis for how webpack works.</p><p>You can now configure webpack to use <code>babel-loader</code> to transform all of your <code>.js</code> files:</p><pre><code class="language-js">// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
entry: './src/index.js',
output: { filename: 'bundle.js', path: 'dist' },
module: {
rules: [
{
test: /\.js$/,
exclude: /node_modules/,
loader: 'babel-loader',
options: {
presets: [
'es2015'
]
}
}
]
},
plugins: [
new HtmlWebpackPlugin({ title: 'Tree-shaking' })
]
};</code></pre><p>The <code>module</code> property provides a set of instructions for webpack. It says, "take any files ending in <code>.js</code> and transform them using <code>babel-loader</code>, but don't transform any files inside of <code>node_modules</code>!"</p><p>We’re also passing the <code>babel-preset-es2015</code> package as an option to <code>babel-loader</code>. This just tells <code>babel-loader</code> <em>how</em> to transform the JavaScript.</p><p>Run <code>webpack</code> again to make sure everything is good. Yes? Great! What we've done is bundled up your JavaScript files while compiling them down to JavaScript thats readily supported across browsers.</p><h3 id="the-underlying-problem">The underlying problem</h3><p>The package <code>babel-preset-es2015</code> contains another package named <code>babel-plugin-transform-es2015-modules-commonjs</code> that turns all of your ES6 modules into <code>CommonJS</code> modules. This isn't ideal, and here's why.</p><p>Javascript bundlers such as webpack and Rollup can only perform tree-shaking on modules that have a static structure. If a module is static, then the bundler can determine its structure at build time, safely removing code that isn’t being imported anywhere.</p><p><code>CommonJS</code> modules do not have a static structure. Because of this, webpack won’t be able to tree-shake unused code from the final bundle. Luckily, Babel has alleviated this issue by providing developers with an option that you can pass to your <code>presets</code> array along with <code>babel-preset-es2015</code>:</p><pre><code class="language-bash">options: { presets: [ [ 'es2015', { modules: false } ] ] }</code></pre><p>According to Babel’s <a href="https://github.com/babel/babel/tree/master/packages/babel-preset-es2015#options" rel="noopener">documentation</a>:</p><p><code><em>“modules</em></code><em> - Enable transformation of ES6 module syntax to another module type (Enabled by default to "commonjs"). Can be <code>false</code> to not transform modules, or one of <code>["amd", "umd", "systemjs", "commonjs"]</code>"</em>.</p><p>Slide that extra bit of code into your configuration and you’ll be cooking with peanut oil.</p><p>The final state of <code>webpack.config.js</code> looks like this:</p><pre><code class="language-js">// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
entry: './src/index.js',
output: { filename: 'bundle.js', path: 'dist' },
module: {
rules: [
{
test: /\.js$/,
exclude: /node_modules/,
loader: 'babel-loader',
options: {
presets: [
[ 'es2015', { modules: false } ]
]
}
}
]
},
plugins: [ new HtmlWebpackPlugin({ title: 'Tree-shaking' }) ]
};</code></pre><h3 id="the-grand-finale">The Grand Finale</h3><p>Run <code>webpack</code> again and pop open your <code>bundle.js</code> file. You won't notice any difference. Before you go crazy, know this! It's ok. We've been running webpack in development mode this whole time. Webpack knows that you have unused exports in your code. Even though it's included in the final bundle, <code>sayBye</code> will never make it to production.</p><p>If you still don’t believe me, run <code>webpack -p</code> in your terminal. The <code>-p</code> option stands for <em>production</em>. Webpack will perform a few extra performance optimizations, including minification, removing any unused code along the way.</p><p>Open up <code>bundle.js</code>. Since it's minified, go ahead and search for <code>Hello</code>. It <em>should</em> be there. Search for <code>Bye</code>. It <em>shouldn't</em>.</p><p>Voila! You now have a working implementation of tree-shaking in webpack 2!</p><p>For the curious, I’ve been slowly iterating over my own lightweight webpack configuration in a GitHub Repo:</p><p><a href="https://github.com/jake-wies/webpack-hotplate" rel="noopener"><strong>jake-wies/webpack-hotplate</strong></a><br><a href="https://github.com/jake-wies/webpack-hotplate" rel="noopener"><em>webpack-hotplate - A webpack boilerplate for personal projects</em></a><br><a href="https://github.com/jake-wies/webpack-hotplate" rel="noopener">github.com</a></p><p>It’s not meant to be overly verbose and bloated. It’s focused on being an approachable boilerplate with walkthroughs at every turn. If you’re interested, check it out!</p><p>If you have any questions, feel free to reach out on <a href="https://twitter.com/jakewies" rel="noopener">Twitter</a>!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
