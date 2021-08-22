---
card: "https://cdn-media-1.freecodecamp.org/images/1*-rQU7AOJC3p-ZbiEQnYYlw.jpeg"
tags: [JavaScript]
description: Sass is a very popular CSS pre-processor. The intent of this
author: "Milad E. Fahmy"
title: "How to compile Sass files in Visual Studio and Webpack"
created: "2021-08-15T19:42:13+02:00"
modified: "2021-08-15T19:42:13+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-visual-studio tag-webpack tag-sass tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to compile Sass files in Visual Studio and Webpack</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*-rQU7AOJC3p-ZbiEQnYYlw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*-rQU7AOJC3p-ZbiEQnYYlw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*-rQU7AOJC3p-ZbiEQnYYlw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*-rQU7AOJC3p-ZbiEQnYYlw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*-rQU7AOJC3p-ZbiEQnYYlw.jpeg" alt="How to compile Sass files in Visual Studio and Webpack">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Sass is a very popular CSS pre-processor. The intent of this tutorial is to show you how to compile Sass files within Visual Studio using Webpack. Our discussion will include minification and autoprefixing for production.</p>
<figcaption>Visual Studio meets Sass</figcaption>
</figure>
<p>Sure, there are some plug-ins in the Visual Studio Marketplace, and it can be nice to just install a plug-in and forget about configuration. But what happens if the plug-in is not supported anymore and stops working with newer Visual Studio versions? Well, too bad. This is the case with one of the most popular compiler plug-ins on the market.</p>
<p>By configuring the compilation yourself, you will have total control over the output. Also, vendor prefixes will be added automatically to your CSS rules. How cool is that?</p>
<h4 id="prerequisites">Prerequisites</h4>
<p>You will need to have Node installed, and you can grab it <a href="https://nodejs.org/en/" rel="noopener">here</a>. That’s it really. You’ll also need npm, but it will also be installed with Node.</p>
<h3 id="creating-the-project">Creating the Project</h3>
<p><strong>Note:</strong> We will be creating a .NET Core MVC app, but the same principles apply to any ASP.NET MVC app. You would just need to modify the Webpack configuration a little bit to output the CSS file to the <code>Content</code> directory.</p>
<p>Open Visual Studio and create a new <strong>ASP.NET Core Web Application</strong>, then select <strong>Web Application (Model-View-Controller)</strong>. I’m naming my project <em>netcore-sass-webpack</em>.</p>
<figcaption>Creating the project</figcaption>
</figure>
<p>Create a <code>Styles</code> folder within the root of the project. Inside it, create a Sass file and name it <code>site.scss</code>. Open this new Sass file and copy the following:</p><pre><code class="language-css">/* Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification\
for details on configuring this project to bundle and minify static web assets. */
body {
padding-top: 50px;
padding-bottom: 20px;
background: #D69655 url('../wwwroot/images/pattern.png') repeat;
}
/* Wrapping element */
/* Set some basic padding to keep content from hitting the edges */
.body-content {
padding-left: 15px;
padding-right: 15px;
}
/* Carousel */
.carousel-caption p {
font-size: 20px;
line-height: 1.4;
}
/* Make .svg files in the carousel display properly in older browsers */
.carousel-inner .item img[src$=".svg"] {
width: 100%;
}
/* QR code generator */
#qrCode {
margin: 15px;
}
/* Hide/rearrange for smaller screens */
@media screen and (max-width: 767px) {
/* Hide captions */
.carousel-caption {
display: none;
}
}</code></pre>
<p>You will notice that this is the same CSS provided by Visual Studio when we created the project, with the exception of the <code>background</code> rule in the <code>body</code> tag. Now delete the provided CSS located under <code>wwwroot/css</code> (both files: <code>site.css</code> and <code>site.min.css</code>). Don’t worry, we will auto-generate these with Webpack.</p>
<p>Now, download <a href="https://github.com/esausilva/netcore-sass-webpack/tree/master/netcore-sass-webpack/wwwroot/images" rel="noopener">pattern.png</a> and place it under <code>wwwroot/images</code>.</p>
<p>Create an empty JavaScript file under the root of the application and name it <code>webpack.config.js</code>. We will take care of this later. You should end up with the following project structure:</p>
<figcaption>Project Structure</figcaption>
</figure>
<p><strong>Note:</strong> You don’t need to do the following two steps for every project, just once (unless you un-install and re-install Visual Studio).</p>
<p>You will need to provide Visual Studio with the Node installation path. Go back to your project and select <strong>Tools -&gt; Optio</strong>ns on the left pa<strong>ne Projects and Solutions -&gt; Web Package Mana</strong>gement and add the path to Node installation at the top of the l<code>ist ( C:\Program Files\</code>node<code>js or C:\Program Files (x86)\</code>nodejs, depending if you installed the x64 or x86 version).</p>
<figcaption>Node path</figcaption>
</figure>
<p>Finally download <a href="https://marketplace.visualstudio.com/items?itemName=MadsKristensen.NPMTaskRunner" rel="noopener">NPM Task Runner</a> and install it — but you will need to close Visual Studio first.</p>
<h3 id="webpack-and-npm-dependencies">Webpack and NPM Dependencies</h3>
<p>Open <strong>Command Prompt</strong> and navigate to the root of the project and install the needed dependencies:</p><pre><code>cd netcore-sass-webpack\netcore-sass-webpack
npm init -y
npm i -D webpack webpack-cli node-sass postcss-loader postcss-preset-env sass-loader css-loader cssnano mini-css-extract-plugin cross-env file-loader</code></pre>
<p>The first <code>npm</code> command initializes your <code>package.json</code> and the second installs your dependencies.</p>
<ul>
<li><strong>webpack, webpack-cli</strong> — Module bundler</li>
<li><strong>node-sass</strong> — Bindings for Node to LibSass; provides support for Sass</li>
<li><strong>postcss-loader, postcss-preset-env</strong> — PostCSS loader for Webpack to process autoprefixing and minification</li>
<li><strong>sass-loader, css-loader</strong> — Webpack needs specific loaders to support Sass and CSS</li>
<li><strong>cssnano</strong> — CSS minifier</li>
<li><strong>mini-css-extract-plugin</strong> — Extracts the CSS to a separate file</li>
<li><strong>cross-env</strong> — Provides support to Windows users for environment variables. We will use NODE_ENVenvironment variable</li>
<li><strong>file-loader</strong> — Provides support for files (images) in our CSS rules</li>
</ul>
<p>At this point you can re-open the project in Visual Studio. After the project finishes loading, open <code>package.json</code> and add the following scripts:</p><pre><code class="language-js">"scripts": {
"dev": "webpack --watch",
"build": "cross-env NODE_ENV=production webpack"
},</code></pre>
<ul>
<li><strong>dev</strong> — We will bind this script whenever the project opens, and Webpack will continually watch for changes to the source Sass files, compile them, and output the separate CSS file</li>
<li><strong>build</strong> — We will bind this script before each project build and will produce the production CSS file, including minification and autoprefixing</li>
</ul>
<p><strong>Note:</strong> The NPM scripts will run automatically using the <strong>Task Runner</strong> window. More on that later.</p>
<p>It is time to work on our Webpack configuration. Open <code>webpack.config.js</code> and copy the following:</p><pre><code class="language-js">const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssPresetEnv = require("postcss-preset-env");
// We are getting 'process.env.NODE_ENV' from the NPM scripts
// Remember the 'dev' script?
const devMode = process.env.NODE_ENV !== "production";
module.exports = {
// Tells Webpack which built-in optimizations to use
// If you leave this out, Webpack will default to 'production'
mode: devMode ? "development" : "production",
// Webpack needs to know where to start the bundling process,
// so we define the Sass file under './Styles' directory
entry: ["./Styles/site.scss"],
// This is where we define the path where Webpack will place
// a bundled JS file. Webpack needs to produce this file,
// but for our purposes you can ignore it
output: {
path: path.resolve(__dirname, "wwwroot"),
// Specify the base path for all the styles within your
// application. This is relative to the output path, so in
// our case it will be './wwwroot/css'
publicPath: "/css",
// The name of the output bundle. Path is also relative
// to the output path, so './wwwroot/js'
filename: "js/sass.js"
},
module: {
// Array of rules that tells Webpack how the modules (output)
// will be created
rules: [
{
// Look for Sass files and process them according to the
// rules specified in the different loaders
test: /\.(sa|sc)ss$/,
// Use the following loaders from right-to-left, so it will
// use sass-loader first and ending with MiniCssExtractPlugin
use: [
{
// Extracts the CSS into a separate file and uses the
// defined configurations in the 'plugins' section
loader: MiniCssExtractPlugin.loader
},
{
// Interprets CSS
loader: "css-loader",
options: {
importLoaders: 2
}
},
{
// Use PostCSS to minify and autoprefix with vendor rules
// for older browser compatibility
loader: "postcss-loader",
options: {
ident: "postcss",
// We instruct PostCSS to autoprefix and minimize our
// CSS when in production mode, otherwise don't do
// anything.
plugins: devMode
? () =&gt; []
: () =&gt; [
postcssPresetEnv({
// Compile our CSS code to support browsers
// that are used in more than 1% of the
// global market browser share. You can modify
// the target browsers according to your needs
// by using supported queries.
// https://github.com/browserslist/browserslist#queries
browsers: ["&gt;1%"]
}),
require("cssnano")()
]
}
},
{
// Adds support for Sass files, if using Less, then
// use the less-loader
loader: "sass-loader"
}
]
},
{
// Adds support to load images in your CSS rules. It looks for
// .png, .jpg, .jpeg and .gif
test: /\.(png|jpe?g|gif)$/,
use: [
{
loader: "file-loader",
options: {
// The image will be named with the original name and
// extension
name: "[name].[ext]",
// Indicates where the images are stored and will use
// this path when generating the CSS files.
// Example, in site.scss I have
// url('../wwwroot/images/pattern.png') and when generating
// the CSS file, file-loader will output as
// url(../images/pattern.png), which is relative
// to '/css/site.css'
publicPath: "../images",
// When this option is 'true', the loader will emit the
// image to output.path
emitFile: false
}
}
]
}
]
},
plugins: [
// Configuration options for MiniCssExtractPlugin. Here I'm only
// indicating what the CSS output file name should be and
// the location
new MiniCssExtractPlugin({
filename: devMode ? "css/site.css" : "css/site.min.css"
})
]
};</code></pre>
<p>Refer to the comments in the code to understand the configuration. (More readable file <a href="https://github.com/esausilva/netcore-sass-webpack/blob/master/netcore-sass-webpack/webpack.config.js" rel="noopener">here</a>.)</p>
<p>Now we need to create some bindings in <strong>Task Runner Explorer</strong>. Navigate to <strong>View -&gt; Other Windows -&gt; Task Runner Exp</strong>lorer. The window will show at the bottom and you will see the scripts you created in <code>package.json</code> listed there <strong>under </strong>Custom. You will also see some tasks <strong>under De</strong>faults, but you can just ignore them.</p>
<p>We need two bindings:</p>
<ul>
<li>Right click <strong>build -&gt; Bindings -&gt; Before</strong> Build — Visual Studio will run this task before each build. Remember this npm script runs Webpack for production and will optimize the CSS file.</li>
<li>Right click <strong>dev -&gt; Bindings -&gt; Projec</strong>t Open — Visual Studio will run this task when you open the project. Remember this npm script runs Webpack in watch mode and<em> will</em> watch for any changes in your Sass files and output the processed CSS file.</li>
</ul>
<p><strong>Task Runner Explorer</strong> should look like this:</p>
<figcaption>Task Runner Explorer</figcaption>
</figure>
<p><strong>Note:</strong> For some reason, Visual Studio sometimes will fail to start the <strong>dev</strong> task upon opening the project. If that happens, just open the Task Explorer and run the task manually.</p>
<p>You can get the full code from the <a href="https://github.com/esausilva/netcore-sass-webpack" rel="noopener">GitHub repository</a>.</p>
<h3 id="final-thoughts">Final Thoughts</h3>
<p>And that’s all there is too it. Since you already have Visual Studio open, none of the tasks are running. Go ahead and <em>right click</em> the <strong>dev</strong> task and select run. You will see the task loading and when it finishes you will see that a <code>site.css</code> file was created under<code> wwwroot/css</code> directory. Open <code>site.scss</code>, make a change and save it. Now open <code>site.css</code>, you will see your change reflected there. Cool!!</p>
<p>Run your project by pressing <strong>Ctrl + F5</strong>, you will see a <code>site.min.css</code> file created under <code>wwwroot/css</code> directory. This file was created when Task Runner <em>ran</em> the <code>build</code> script before it built the project.</p>
<p>The final site should look like this:</p>
<figcaption>Final site</figcaption>
</figure>
<p>I know, I know, the background is very cheesey…but I needed an image to show the Webpack <code>file-loader</code> in action.</p>
<p>With this configuration, you can even add support to transpile modern JavaScript (ES6+) to ES5. Look into these: <code>@babel/core</code>, <code>babel-loader</code>, <code>@babel/preset-env</code>.</p>
<p>Thank you for reading, and I hope you enjoyed it. If you have any questions, suggestions, or corrections let me know in the comments below. Don’t forget to give this article a share, and you can follow me on <a href="https://twitter.com/_esausilva" rel="noopener">Twitter</a>, <a href="https://github.com/esausilva/" rel="noopener">GitHub</a>, <a href="https://medium.com/@_esausilva" rel="noopener">Medium</a>, <a href="https://www.linkedin.com/in/esausilva/" rel="noopener">LinkedIn</a>.</p>
<p>You can also visit my personal <a href="https://esausilva.com" rel="noopener">blogging site</a>.</p>
<hr>
<p><strong><u>Update 8/25/19:</u></strong> I have been building a prayer web app called "<strong>My Quiet Time - A Prayer Journal</strong>". If you would like to stay in the loop please sign up through the following link: <a href="http://b.link/mqt" rel="noopener noreferrer">http://b.link/mqt</a> &nbsp;</p>
<p>The app will be released before the end of the year, I have big plans for this app. To see some mockup screenshots follow the following link: <a href="http://pc.cd/Lpy7">http://pc.cd/Lpy7</a></p>
<p>My DMs on <a href="https://twitter.com/_esausilva" rel="noopener">Twitter</a> are open if you have any questions regarding the app ?</p>
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
