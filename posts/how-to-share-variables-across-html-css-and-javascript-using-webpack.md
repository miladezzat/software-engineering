---
card: "/images/default.jpg"
tags: [Webpack]
description: Earlier this week, I read an article explaining how CSS-in-JS
author: "Milad E. Fahmy"
title: "How to share variables across HTML, CSS, and JavaScript using Webpack"
created: "2021-08-15T19:31:42+02:00"
modified: "2021-08-15T19:31:42+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-webpack tag-tutorial tag-javascript tag-react ">
<header class="post-full-header">
<h1 class="post-full-title">How to share variables across HTML, CSS, and JavaScript using Webpack</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/12/4kzz7px14mtv34rcfp73.png 300w,
/news/content/images/size/w600/2019/12/4kzz7px14mtv34rcfp73.png 600w,
/news/content/images/size/w1000/2019/12/4kzz7px14mtv34rcfp73.png 1000w,
/news/content/images/size/w2000/2019/12/4kzz7px14mtv34rcfp73.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/12/4kzz7px14mtv34rcfp73.png" alt="How to share variables across HTML, CSS, and JavaScript using Webpack">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Earlier this week, I read <a href="https://calendar.perfplanet.com/2019/the-unseen-performance-costs-of-css-in-js-in-react-apps/">an article</a> explaining how CSS-in-JS slows down the rendering of some React apps and how static CSS is faster. But CSS-in-JS is very popular because, among other features, you can style dynamically using JavaScript variables.</p>
<p>In this tutorial, I will show you how to recreate this perk in any of your web projects thanks to Webpack (and I assume you know how to use it). To start, we want Webpack to bundle our source files into a static <code>dist/</code> folder .</p>
<p>You can check out the <a href="https://glitch.com/~shared-variables-webpack">source code here</a>.</p>
<h2 id="1-set-up-our-app">1. Set up our app</h2>
<h3 id="the-boring-part">The boring part</h3>
<p>Create a folder for this tutorial, open your terminal, and init a project:</p><pre><code>npm init -y
</code></pre>
<p>First things first, if it’s not already done, install <a href="https://nodejs.org/en/">node.js</a> and <a href="https://webpack.js.org/">Webpack</a>:</p><pre><code>npm install webpack webpack-cli --save-dev
</code></pre>
<p>Let’s create a script in our <code>package.json</code> that tells Webpack to use our config file:</p><pre><code class="language-json">  "scripts": {
"build": "webpack --config webpack.config.js"
}
</code></pre>
<p>At the root of your folder, create a <code>globals.js</code> file, where our shared variables will be stored:</p><pre><code class="language-javascript">module.exports = {
myTitle: 'Hello freeCodeCamp!',
myColor: '#42ff87',
};
</code></pre>
<p>The Webpack config file looks like this (<code>webpack.config.js</code>). Create it at the root of your folder:</p><pre><code class="language-javascript">module.exports = {
entry: __dirname + '/app/index.js',
output: {
path: __dirname + '/dist',
filename: 'index_bundle.js'
},
};
</code></pre>
<p>Our source code will be located in an <code>app</code> folder. Create it like this:</p><pre><code>mkdir app &amp;&amp; cd app
</code></pre>
<p>You’ll need <code>index.html</code> and <code>index.js</code> files at this point. Create those files in the <code>app</code> folder:</p><pre><code>touch index.html index.js
</code></pre>
<p>Perfect! You’re all set. ?</p>
<p>Your folder should look like this:</p><pre><code>|-- node_modules/
|-- package.json
|-- webpack.config.js
|-- globals.js
|-- app/
|-- index.html
|-- index.js
</code></pre>
<h2 id="2-render-our-html-files-with-the-html-webpack-plugin">2. Render our HTML files with the <code>html-webpack-plugin</code></h2>
<p>This <code>app/index.html</code> is empty. Let’s add some markup in it and then add a custom variable:</p><pre><code class="language-html">&lt;html lang="en"&gt;
&lt;head&gt;
&lt;title&gt;Webpack shared variables!&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;&lt;%= myTitle %&gt;&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<p>As you can see, we are trying to print a variable in our HTML... which is impossible! To make it work we’ll use the <a href="https://github.com/jantimon/html-webpack-plugin">html-webpack-plugin</a> that gives us the ability to use <a href="https://ejs.co/">EJS</a> syntax and <strong>inject data into it</strong>.</p>
<p>The plugin will generate a valid HTML file. In the meantime, you should rename your <code>app/index.html</code> file to <code>app/index.ejs</code>.</p><pre><code>npm install --save-dev html-webpack-plugin
</code></pre>
<p>Let’s go back to our configuration file. <code>html-webpack-plugin</code> has an interesting <code>templateParameters</code> option that allows us to pass an object as parameter. Enable the plugin as follows in <code>webpack.config.js</code>:</p><pre><code class="language-javascript">const HtmlWebpackPlugin = require('html-webpack-plugin');
const globals = require('./globals.js')
module.exports = {
// ... previous config, entry, output...
plugins: [
new HtmlWebpackPlugin({
template: 'app/index.ejs',
templateParameters: globals,
})
]
};
</code></pre>
<p>Run <code>npm run build</code> and <em>ta-daaaaa</em> « &lt;%= myTitle %&gt; » became « Hello freeCodeCamp » ! The work is done by Webpack during the compilation when it runs the <code>html-webpack-plugin</code>.</p>
<p>See? This was pretty simple with the right tool: HTML ✅</p>
<h2 id="3-use-our-variables-in-javascript">3. &nbsp;Use our variables in JavaScript</h2>
<p>Phew, so many lines just to print a variable! ?With Webpack, things often get complicated. Well, this one is very simple: in JavaScript just import your file. In your <code>app/index.js</code>:</p><pre><code class="language-javascript">import globals from '../globals.js'
document.write(
'&lt;pre&gt;' +
JSON.stringify(globals, null, 2) +
'&lt;/pre&gt;'
);
</code></pre>
<p>This will print our globals object on the page. Now let’s move on to the CSS.</p>
<h2 id="4-use-shared-variables-in-our-css">4. Use shared variables in our CSS</h2>
<p>Here is our final boss ?</p>
<p>Okay guys you got me… I lied. We can’t use our globals directly in CSS – we must use a pre-processor. In this example, we will use <a href="https://sass-lang.com/">SASS</a>.</p>
<p>On the Webpack side, a plugin will not be enough. We must use a <a href="https://webpack.js.org/loaders/">loader</a> to convert SASS into CSS. In this case we need the <a href="https://github.com/webpack-contrib/sass-loader">sass-loader</a> package, so install it according to the docs:</p><pre><code>npm install sass-loader node-sass css-loader style-loader --save-dev
</code></pre>
<p>Back to coding. Now that we have SASS, create your style sheet file, <code>app/style.scss</code>:</p><pre><code class="language-scss">h1 {
color: $myColor;
}
</code></pre>
<p>Our SASS is set up – now how can we inject data into it? The <code>sass-loader</code> package has a <a href="https://github.com/webpack-contrib/sass-loader#prependdata">prependData</a> option! But it takes a string as a parameter, which means that your data should look like this: <code>"$myColor: red; myTitle: '...'";</code>.</p>
<p>We have to automate that and convert a JavaScript object into a string. I didn’t find a package on <code>npm</code> that satisfied me, so I wrote <a href="https://gist.github.com/adrienZ/0257e37bf4788b903ba76fa82dac1ed1">my own converter</a>. Download the file and add it to your project (in my example it's <code>utils/jsToScss.js</code>).</p>
<p>Your final <code>webpack.config.js</code> should look like this:</p><pre><code class="language-javascript">const globals = require("./globals.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const jsToScss = require("./utils/jsToScss.js");
module.exports = {
entry: __dirname + "/app/index.js",
output: {
path: __dirname + "/dist",
filename: "index_bundle.js"
},
plugins: [
new HtmlWebpackPlugin({
template: "app/index.ejs",
templateParameters: globals
})
],
module: {
rules: [
{
test: /\.s[ac]ss$/i,
use: [
// Creates `style` nodes from JS strings
"style-loader",
// Translates CSS into CommonJS
"css-loader",
// Compiles Sass to CSS
{
loader: "sass-loader",
options: {
prependData: jsToScss(globals)
}
}
]
}
]
}
};
</code></pre>
<p>Here is what you should see:</p>
<figcaption><a href="https://glitch.com/edit/#!/shared-variables-webpack?path=webpack.config.js">https://glitch.com/edit/#!/shared-variables-webpack?path=webpack.config.js</a></figcaption>
</figure>
<p>If you are still reading this tutorial, thanks for your attention. I hope it helps you! Webpack is a very powerful tool you should dig more into ?</p>
<p>NB: In your <code>dist/</code> folder you can see there isn't any CSS generated. That's because I use the <code>style-loader</code> to keep this demo simple. To generate the CSS file, take a look at the <a href="https://webpack.js.org/plugins/mini-css-extract-plugin/">mini-css-extract-plugin</a>.</p>
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
