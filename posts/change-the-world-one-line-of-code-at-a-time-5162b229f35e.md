---
card: "https://cdn-media-1.freecodecamp.org/images/1*cHz2cUq8zLjjSsB_e9vexw.jpeg"
tags: [JavaScript]
description: "People like to look at changing the world as a big task. I be"
author: "Milad E. Fahmy"
title: "Change the world, one line of code at a time"
created: "2021-08-16T14:38:50+02:00"
modified: "2021-08-16T14:38:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-life-lessons tag-inspiration tag-tech tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">Change the world, one line of code at a time</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*cHz2cUq8zLjjSsB_e9vexw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*cHz2cUq8zLjjSsB_e9vexw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*cHz2cUq8zLjjSsB_e9vexw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*cHz2cUq8zLjjSsB_e9vexw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*cHz2cUq8zLjjSsB_e9vexw.jpeg" alt="Change the world, one line of code at a time">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>People like to look at changing the world as a big task. I believe changing the world can be done in little steps.</p><p>The key is identifying a problem and taking a little step.</p><p>My journey began on Friday, <strong>September 7th, 2018</strong>. That was the day I decided to build a React plugin for the freeCodeCamp Test Suite. I noticed a problem and I took action.</p><p>There is a <a href="https://www.npmjs.com/package/react-fcctest" rel="noopener">working version</a> up for installation on the Node Package Manager registry. This is a milestone for me, as the project is my first Open Source contribution.</p><p>I used certain key technologies to build the project, like Webpack, React, NPM, and Node.js. I had a lot of fun building it, and I learned a lot, too.</p><p>I tried several times (for a whole day actually) before I could even succeed in making the plugin work.</p><p>After making it work, implementation in a React app was a challenge. Although I was faced with technical difficulties, in the end, the plugin worked.</p><h3 id="the-process">The process</h3><p>The idea behind the project was simple. All I wanted to do was find a simple way to add the freeCodeCamp Test Suite to React apps.</p><p>My first plan was to build it with Create-React-App.</p><p>I felt that since I could use it to build React applications, I could use it to build a plugin. I was wrong.</p><p>Create-React-App was too heavy for what I needed to build.</p><p>I discovered that to make the plugin easy to export, I would need some extra configuration.</p><p>I went online and googled a couple of times, and came across Webpack and react-helmet. What I came across was both amazing and confusing, at first.</p><p>Still, I knew they were what I needed. I continued searching some more.</p><p>Before Webpack, I had tried exporting and publishing the plugin as a module with no extra configuration. It did not work. Newbie mistake, I know.</p><p>This was a big challenge that I had to overcome.</p><p>Thankfully, we learn as we grow!</p><p>While I was developing the plugin, there were constant power cuts. In Nigeria, the power situation is not very settled.</p><p>I had to work until my laptop powered out, then think deeply about what to do when power returned.</p><p>All of this happened on the second day (Saturday).</p><h3 id="the-magic-the-beauty">The magic, the beauty</h3><p>Using Webpack, I began building the plugin.</p><p>I placed the core code in an index.js file. Here is the code below:</p><pre><code class="language-js">import React from 'react';
import { Helmet } from 'react-helmet';
import './styles.css';
const ReactFCCtest = () =&gt; {
return (
&lt;div&gt;
&lt;Helmet&gt;
&lt;script type="text/javascript"
src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js" &gt;
&lt;/script&gt;
&lt;/Helmet&gt;
&lt;h5&gt;react-fcctest running&lt;/h5&gt;
&lt;/div&gt;
);
};
export default ReactFCCtest;</code></pre><p>The code above was all I needed to add the script to the head tag of any React app I desired.</p><p>I came across an <a href="https://medium.com/dailyjs/building-a-react-component-with-webpack-publish-to-npm-deploy-to-github-guide-6927f60b3220" rel="noopener">article on Medium</a> which was a great help to me.</p><p>It helped me understand how to use Webpack to create a node module that I could successfully publish to the Node Package Manager registry.</p><p>I followed the instructions in that article. After making some changes, I built the following <strong>webpack.config.js</strong> file:</p><pre><code class="language-js">const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
template: path.join(__dirname, "demo/src/index.html"),
filename: "./index.html"
});
module.exports = {
entry: path.join(__dirname, "demo/src/index.js"),
output: {
path: path.join(__dirname, "demo/dist"),
filename: "bundle.js"
},
module: {
rules: [
{
test: /\.(js|jsx)$/,
use: "babel-loader",
exclude: /node_modules/
},
{
test: /\.css$/,
use: ["style-loader", "css-loader"]
}
]
},
plugins: [htmlWebpackPlugin],
resolve: {
extensions: [".js", ".jsx"]
},
devServer: {
port: 3001
}
import ReactFCCtest from 'react-fcctest';
class App extends Component {
render() {
return (
&lt;div&gt;
&lt;ReactFCCtest /&gt;
&lt;/div&gt;
);
}
};
export default App;</code></pre><p>That is all there is to it!</p><h4 id="final-notes">Final notes</h4><p>My 2018 so far has been amazing.</p><p>I am now the Developer Student Club Lead for my university, in a program powered by <strong>Google Developers </strong>in Sub-Saharan Africa.</p><p>I am aiming for greatness, in outer space — perhaps I might just land on a moon. <a href="https://twitter.com/Usheninte" rel="noopener">Follow me</a> on my journey.</p>
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
