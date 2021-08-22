---
card: "https://cdn-media-1.freecodecamp.org/images/1*bHG9n86BQWgllXfDw0uXhw.jpeg"
tags: [Webpack]
description: "Imagine you are on the call list for a freelance agency in a "
author: "Milad E. Fahmy"
title: "Make multipage HTML development suck less with Pug"
created: "2021-08-16T11:41:17+02:00"
modified: "2021-08-16T11:41:17+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-webpack tag-front-end-development tag-javascript tag-html tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Make multipage HTML development suck less with Pug</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*bHG9n86BQWgllXfDw0uXhw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*bHG9n86BQWgllXfDw0uXhw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*bHG9n86BQWgllXfDw0uXhw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*bHG9n86BQWgllXfDw0uXhw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*bHG9n86BQWgllXfDw0uXhw.jpeg" alt="Make multipage HTML development suck less with Pug">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
oldHTML/
dist/
images/
css/
webpack.config</code></pre><p>I like to put all the original HTML into a separate folder that I can’t accidentally delete. Webpack is a bit kinder than say, Gulp, which I’ve had delete an entire folder before ?. This structure is good enough to get us started.</p><h1 id="step-2-rev-up-the-npm-engine">Step 2. Rev up the npm engine</h1><p>Aside: I recently reverted back to <code>npm</code> from <code>yarn</code> for a few reasons. One of which was that it stopped working and I had little patience to make it work again. Interesting article <a href="https://mixmax.com/blog/to-yarn-and-back-again-npm">here</a>, if you want to read more.</p><p><strong><strong>Anyways, init that npm.</strong></strong></p><pre><code>npm init -y</code></pre><p>Note: (the <strong><strong>-y</strong></strong> is if you don’t want to answer any of its questions)</p><h2 id="install-development-dependencies-"><strong>Install development dependencies.</strong></h2><p>Don’t worry, I’ll explain each one as we go.</p><pre><code>npm install -D webpack webpack-cli pug-html-loader html-webpack-plugin html-loader</code></pre><h2 id="add-some-scripts-to-the-package-json"><strong>Add some scripts to the package.json</strong></h2><p>By default, package.json has one script, but we need to add a few.</p><pre><code>"dev": "webpack --watch --mode development",
"prod": "webpack --mode production"</code></pre><p>These are the two that I like to include. The first will run Webpack in development mode (note: the --mode flag is new to Webpack 4) and watch for file changes. The second is when we want to run Webpack in production, this usually minifies stuff.</p><p>It should look something like this:</p><pre><code>"name": "pugTut",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"test":
"dev": "webpack --watch --mode development",
"prod": "webpack --mode production"
},
.....more code</code></pre><h2 id="create-a-couple-starter-files-to-test-our-webpack-config"><strong>Create a couple starter files to test our Webpack config</strong></h2><p>Webpack needs an entry point, so let’s make one. Create an<strong><strong> app.js</strong></strong> in the <strong><strong>src/ </strong></strong>folder. It can be blank. Doesn’t matter. It also needs an initial pug file to compile. Create a <strong><strong>index.pug</strong></strong> file in the <strong><strong>src/</strong></strong> folder, as well.</p><h2 id="create-and-setup-webpack-config-js-in-root-directory"><strong>Create and setup webpack.config.js in root directory</strong></h2><p>Alright, if you haven’t used Webpack before, I’m going to walk through each part individually to give you (and hopefully me) an idea of wtf is going on in this config file.</p><p>First, let’s declare our dependencies.</p><pre><code>// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');</code></pre><p><strong><strong>path</strong></strong> is a native Node dependency, so you shouldn’t have to worry about that being required in your package.json.</p><p><strong><strong>Webpack</strong></strong> is, well Webpack…</p><p><strong><strong>HtmlWebpackPlugin</strong></strong> is how we extract HTML. I’m not an expert on how Webpack works. From what I understand, since it is designed to consume JavaScript, we have to have loaders in our config file to pull out things like HTML and CSS. <strong><strong>HtmlWebpackPlugin</strong></strong> is how we do something useful with the HTML that gets extracted from the loaders.</p><p>Cool? Next step…</p><pre><code>const pug = {
test: /\.pug$/,
use: ['html-loader?attrs=false', 'pug-html-loader']
};</code></pre><p>This method is used by <a href="https://wesbos.com/">Wes Bos</a> and I really like it, so I use it. We have to define rules on how to handle certain file types, for example .pug or .css. Putting it into a variable makes it more legible, in my opinion. Anyways, we setup a test case with a regexp, then define the loaders we want to use. For whatever reason, the loaders are listed in reverse order of what you’d think. I’m sure there is an explanation but I couldn’t find it.</p><p>Confused? What that means is, if we want to use pug to compile to HTML, we write it in the order above: our <strong><strong>html loader</strong></strong> -&gt; <strong><strong>pug loader</strong></strong>. However, in reality when the code runs, it runs the <strong><strong>pug loader</strong></strong> first…then the <strong><strong>HTML loader</strong></strong>. Yep.</p><p>Note: Don’t worry about <code>?attrs=false</code> for right now, I’ll explain it a bit later.</p><p>Cool? Next step…</p><pre><code>const config = {
entry: './src/app.js',
output: {
path: path.resolve(__dirname, 'dist'),
filename: '[name].bundle.js'
},
module: {
rules: [pug]
},
plugins: [
new HtmlWebpackPlugin({
filename: 'index.html',
template: 'src/index.pug',
inject: false
})
]
};
module.exports = config;</code></pre><p>Holy Crap. That’s a lot of stuff. Let’s break it down.</p><p><strong><strong>entry</strong></strong> is simply the entry point for our JS file.</p><p><strong><strong>output</strong></strong> defines where we want our JS file to go. This is not where our HTML files will go. As mentioned above, <strong><strong>path</strong></strong> is a node module. <strong><strong>__dirname</strong></strong> is a variable we can get from Node. The filename is what we want to call our JS file. The <code>[name]</code> is a substitution. In this case, it uses the file name of the entry file. You can also use <code>[hash]</code> if you want a unique identifier.</p><p><strong><strong>module</strong></strong> defines the different modules. For the purpose of this tutorial, there is only one module with one set of rules. <strong><strong>rules</strong></strong> defines the rules we will use for that module. We throw the <strong><strong>pug</strong></strong> variable we made earlier into there. So nice, so clean.</p><p>Finally, plugins is where we get to add any third party stuff. In our case, we are using <strong><strong>HtmlWebpackPlugin</strong></strong> to do something with our pug files.</p><p><strong><strong>filename</strong></strong> is what we want our HTML file to be called. <strong><strong>template</strong></strong> is the pug file that are compiling. <strong><strong>inject</strong></strong> is: “inject all assets into the given template.” I have it set to false because…well, honestly I don’t remember.</p><p>One of the crappiest things about <strong><strong>HtmlWebpackPlugin</strong></strong> is that you have to create an entry for <strong><strong>EVERY</strong></strong> HTML file. I tried to figure a way around it, but found no simple solutions.</p><pre><code class="language-js">// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pug = {
test: /\.pug$/,
use: ['html-loader?attrs=false', 'pug-html-loader']
};
const config = {
entry: './src/app.js',
output: {
path: path.resolve(__dirname, 'dist'),
filename: '[name].bundle.js'
},
module: {
rules: [pug]
},
plugins: [
new HtmlWebpackPlugin({
filename: 'index.html',
template: 'src/index.pug',
inject: false
})
]
};
- index.pug
- layout.pug</code></pre><h1 id="step-4-setup-layout-file">Step 4. Setup layout file</h1><p>The layout file is basically the main template for your whole site. It will have hold all the global stuff, for example head, header and footer.</p><pre><code>//- layout.pug
doctype html
html
head
title I'm a title
body
block header
block content
block footer
script(src="somescript.js")</code></pre><p>I guess something to explain is that pug is all based on indentation, similar to YAML. It is glorious, because that means no more closing tags! However, this can throw some, especially those with crappy indentation to begin with. So just make sure to start slow and make sure everything is indented correctly and you’ll be fine.</p><p>Looking at our layout.pug file, you’ll see some familiar HTML tags mixed with unfamiliar ones. I highly suggest downloading syntax highlighting for pug in your editor of choice. If you’re using VSCode, it should come with it by default. Thanks Microsoft.</p><p>I think it’s pretty easy to figure out, but let’s take a look at the meat of the document to make sure we know what’s going on.</p><pre><code>head
title I'm a title
body
block header
block content
block footer
script(src="somescript.js")</code></pre><p><strong><strong>head</strong></strong>, <strong><strong>body</strong></strong>, <strong><strong>title</strong></strong> and <strong><strong>script</strong></strong> are normal tags, but what the hell is <strong><strong>block</strong></strong>? <strong><strong>block</strong></strong> is how we define dynamic content. Basically, this is telling pug that some content is going to go in here. Hopefully it’ll make more sense when we create our individual page files.</p><h1 id="step-5-create-more-partials">Step 5. Create more partials</h1><p>Let’s make use of that index.pug file.</p><pre><code>//- index.pug
extends layout
block content
p Woah.</code></pre><p>Looking at our index file, it seems awfully small for a whole HTML page. That’s because of that little <strong><strong>extends</strong></strong> fella. extends tells pug that you want to use another pug file as the template, in our case <strong><strong>layout. </strong></strong>Then below that <strong><strong>block conten</strong></strong>t is in reference to what we put in our <strong><strong>layout.pug</strong></strong> file.</p><p>If you have your Webpack still running in the background, it should recompile and you’ll get a fresh new <strong><strong>index.html</strong></strong> in your <strong><strong>dist/</strong></strong> folder. If not, run Webpack again.</p><h1 id="step-6-grab-all-the-old-html">Step 6. Grab all the old HTML</h1><p>Those starter files are fine and dandy, but we need to make some real progress. We need to start grabbing that HTML and using it! Luckily, pug will recognize regular old HTML tags, so you can literally copy all the HTML content you want and just paste it in there.</p><p>It might look something like this:</p><pre><code>extends layout
block content
&lt;h1&gt;blerb&lt;/h1&gt;
&lt;p&gt;Woah.&lt;/p&gt;</code></pre><p><strong><strong>Alright, it’s not really that simple.</strong></strong></p><p>Like I mentioned, pug is based on indentation. To make life easier on yourself, I suggest removing all indentation from the HTML file before pasting into the pug file. It will mostly work, but you’ll probably have to finagle it a bit. Lucky for us, <strong><strong>pug-html-loader </strong></strong>will tell us what’s wrong with it when it tries to compile. There are some examples of common problems in the next Step.</p><h1 id="step-7-start-optimizing">Step 7. Start optimizing</h1><p>I’m not gonna lie, when you first throw in HTML, Webpack is not gonna like it. Here are a few things to look out for:</p><h2 id="images"><strong>Images</strong></h2><ol><li>Make sure the links to the images are good. For whatever reason, it often fails if the src = “images/” instead of src= “/images/”</li></ol><p>2. I promised earlier to get back to what <code>?attrs=false</code> was, well, here we are!</p><p>This is the blurb from the <a href="https://www.npmjs.com/package/html-loader">html-loader</a> site explaining what that does.</p><blockquote>To completely disable tag-attribute processing (for instance, if you’re handling image loading on the client side) you can pass in <code>attrs=false</code>.</blockquote><pre><code>html-loader?attrs=false
</code></pre><h2 id="javascript"><strong>Javascript</strong></h2><p>pug doesn’t play nice with JS in script tags. If you are pasting in regular opening and closing JS script tags, it may work okay. However, if you want to make use of the pug script tag, just make sure to add a period on the end, like this:</p><h1 id="step-8-make-more-pages-and-start-converting-to-pug-tags">Step 8. Make more pages and start converting to pug tags</h1><p>Clearly it’s useless if you are only doing the index page. For whatever you’re doing, just create a new file for each page you want. Also, make sure to make new <strong><strong>HtmlWebpackPlugin</strong></strong> entries in the <strong><strong>plugins</strong></strong> section in Webpack.</p><p>It’ll end up looking like this:</p><pre><code class="language-js">//webpack.config.js
...previous code...
plugins: [
new HtmlWebpackPlugin({
filename: 'index.html',
template: 'src/index.pug',
inject: false
}),
new HtmlWebpackPlugin({
filename: 'contact.html',
template: 'src/contact.pug',
inject: false
})
]
...more code...</code></pre><p>You don’t have to convert everything to pug format immediately. In fact, if you have a huge site with a crap ton of HTML, then you can do it as you go, but it does make it easier.</p><h2 id="includes-function includes() { [native code] }1"><strong>Includes</strong></h2><p>This wouldn’t be a very good tutorial if we didn’t talk about includes. Remember those blocks in the layout file? Well, if you don’t want the layout file to be giant, you can create separate files that will be pulled in at compile time. For instance, if you want to make a single file that holds all the header info. Breaking it up this way also helps substantially with indentation.</p><p>Create a new file “header” in a new folder “includes”:</p><pre><code>src/
-- includes/
header.pug</code></pre><p>In that file, put whatever you want to be in the header.</p><pre><code>//- header.pug
header
h1 I'm a header</code></pre><p>Now go back to layout.pug and include it.</p><pre><code>//- layout.pug
doctype html
html
head
title I'm a title
body
block header
include includes/header
block content
block footer
script(src="somescript.js")</code></pre><h1 id="step-7-want-to-get-fancy">Step 7. Want to get Fancy?</h1><p>There’s a ton more stuff you can do with pug and webpack. However, I think we’ve reached the end of the basics. Still, check out <a href="https://pugjs.org/language/mixins.html">mixins</a>. Those things are amazing.</p><h1 id="wrapping-up">Wrapping Up</h1><p>I highly suggest bringing in HTML slowly, otherwise you’ll end up debugging 1,000 errors at once.</p>
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
