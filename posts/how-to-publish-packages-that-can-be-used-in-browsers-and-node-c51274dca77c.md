---
card: "https://cdn-media-1.freecodecamp.org/images/1*bpaO04etYhqF8-OFxen63w.png"
tags: [JavaScript]
description: When you create a package for others to use, you have to cons
author: "Milad E. Fahmy"
title: "How to publish packages that can be used in browsers and Node"
created: "2021-08-15T19:34:17+02:00"
modified: "2021-08-15T19:34:17+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-npm tag-tech tag-nodejs tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to publish packages that can be used in browsers and Node</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*bpaO04etYhqF8-OFxen63w.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*bpaO04etYhqF8-OFxen63w.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*bpaO04etYhqF8-OFxen63w.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*bpaO04etYhqF8-OFxen63w.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*bpaO04etYhqF8-OFxen63w.png" alt="How to publish packages that can be used in browsers and Node">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>When you create a package for others to use, you have to consider where your user will use your package. Will they use it in a browser-based environment (or frontend JavaScript)? Will they use it in Node (or backend JavaScript)? Or both?</p>
<p>If you want to create a package that’s usable in both browsers and Node, this article is here to help.</p>
<p>You’ll learn:</p>
<p>1. How to write packages for use in browsers</p>
<p>2. How to write packages for use in Node</p>
<p>3. How to publish your packages for use in both browsers and Node</p>
<h3 id="writing-a-package-for-use-in-browsers"><strong>Writing a package for use in browsers</strong></h3>
<p>If you want to include a library in frontend JavaScript, you have to link the library first with a <code>script</code> tag. You can use the library anytime after you link it.</p><pre><code>&lt;!-- This is html --&gt;</code></pre><pre><code>&lt;script src="link-to-jquery.js"&gt;&lt;/script&gt;</code></pre><pre><code>&lt;script&gt;  // You can use jQuery anytime after you link to it  console.log(jQuery)&lt;/script&gt;</code></pre>
<p>This works because JavaScript in browsers shares one global scope. It doesn’t matter how many JavaScript files you link to. They behave as if they’re one big JavaScript file.</p>
<p>With this information, we can begin writing a library for use in the frontend world.</p>
<p>Let’s say you want to create a library called <code>peachBlossom</code>. <code>peachBlossom</code> has a <code>bloom</code> function. You write this <code>bloom</code> function in a separate JavaScript file, <code>peach-blossom.js</code>.</p><pre><code>// This is js</code></pre><pre><code>// peach-blossom.jsfunction bloom () {  console.log('Bloom!')}</code></pre>
<p>You can include <code>peachBlossom</code> in your frontend JavaScript by linking to the <code>peach-blossom.js</code> file. Once you do this, you can use <code>bloom</code> anywhere.</p><pre><code>&lt;!-- This is html --&gt;</code></pre><pre><code>&lt;script src="peach-blossom.js"&gt;&lt;/script&gt;&lt;script src="main.js"&gt;&lt;/script&gt;</code></pre><pre><code>// This is js</code></pre><pre><code>// main.jsbloom() // Bloom!</code></pre>
<p>Libraries usually have more than one piece of code. We don’t want to pollute the global scope with little variables. What we can do is wrap the functions we want to expose in an immediately-invoked function expression (IIFE).</p>
<p>This means:</p>
<p>1. We create a function and run it immediately<br>2. We return the library from within the function so we can use the library later.</p>
<p>In code, it looks somewhat like this:</p><pre><code>// This is js</code></pre><pre><code>// peach-blossom.js const peachBlossom = (function () {  // Write as much code as you want here</code></pre><pre><code>// Return what others can use  return {    bloom: function () {      console.log('Bloom!')    }  }})()</code></pre>
<p>You can then use <code>bloom</code> anywhere by writing <code>peachBlossom.bloom</code>.</p><pre><code>// This is js</code></pre><pre><code>// main.jspeachBlossom.bloom() // Bloom!</code></pre>
<p>This is the basics of writing a frontend library.</p>
<p>Now, let’s talk about writing a library for Node.</p>
<h3 id="writing-a-package-for-node"><strong>Writing a package for Node</strong></h3>
<p>Adding a library to Node is different from adding a library to browsers. This is because Node doesn’t have HTML files and <code>&lt;scri</code>pt&gt; tags.</p>
<p>Let’s make sure you know how to run Node before we begin writing a library for Node.</p>
<h4 id="running-node">Running Node</h4>
<p>First, you need to make sure you have Node installed on your computer. You can install Node from <a href="https://nodejs.org/en/" rel="noopener">Node’s website</a> if you don’t have it installed already.</p>
<p>Once you have Node installed, you’ll want to create a folder to store your Node project. In this case, let’s call it “node-project”.</p>
<p>The command to create a folder is this:</p><pre><code># This is bash</code></pre><pre><code>mkdir node-project</code></pre>
<p>Then, you need to navigate to the <code>node-project</code> directory. You can do it with <code>cd</code>:</p><pre><code># This is bashcd node-project</code></pre>
<p>If you’re having problems with the command line, you can use <a href="https://zellwk.com/blog/fear-of-command-line/" rel="noopener">this guide</a> to help you out.</p>
<p>Next, we want to create a file. This will be a JavaScript file. (We will run Node on this file). Let’s call it <code>index.js</code>.</p><pre><code># This is bash</code></pre><pre><code>touch index.js</code></pre>
<p>In <code>index.js</code>, we’re going to write a <code>console.log</code> statement. This is for us to know if we run the file.</p><pre><code>// This is js</code></pre><pre><code>// index.jsconsole.log('Running index.js!')</code></pre>
<p>Finally, you can use <code>node</code> to run <code>index.js</code>. Here’s the command:</p><pre><code># This is bash</code></pre><pre><code>node index.js</code></pre>
<p>Once you run <code>index.js</code>, you should see the <code>console.log</code> in the terminal. That’s how we know the file has run.</p>
<h4 id="adding-libraries-to-node">Adding libraries to Node</h4>
<p>To add libraries to Node, you have to use the <code>require</code> statement. Once you add a library, you can use the library anywhere in the same JavaScript file.</p>
<p>Here’s an example:</p><pre><code>// This is js</code></pre><pre><code>const fs = require('fs')console.log(fs)</code></pre>
<p>When you use <code>require</code>, Node looks for the library you specified in three places:</p>
<p>First, it checks whether the library is built into Node. In this example, <code>fs</code> is built directly into Node. You can use <code>fs</code> anytime if you use Node.</p>
<p>Second, it checks whether the library exists in the <code>node_modules</code> folder. These are user-installed libraries. You can add a library to the <code>node_modules</code> folder by running <code>npm install</code>.</p>
<p>Here’s an example where we install <code>express</code>, then require express in Node:</p><pre><code># This is bash</code></pre><pre><code># Run this in the command linenpm install express</code></pre><pre><code>// This is js </code></pre><pre><code>// Index.js const express = require('express')console.log(express)</code></pre>
<p>Third, if you add <code>./</code> to <code>require</code>, Node will look for a file located in the current directory. This is where we can begin writing the <code>peach-blossom</code> library.</p>
<h4 id="writing-your-first-library-for-node">Writing your first library for Node</h4>
<p>Let’s start by creating a <code>peach-blossom.js</code> file. This file should be in the same directory as <code>index.js</code>.</p><pre><code>// This is js</code></pre><pre><code>touch peach-blossom.js</code></pre>
<p>We can add <code>peach-blossom.js</code> to <code>index.js</code> by using <code>require</code>. Here’s what it looks like:</p><pre><code>// This is js </code></pre><pre><code>const peachBlossom = require('./peach-blossom')</code></pre>
<p>In Node, there’s no concept of a shared global scope. Each file has its own scope. So, if you write <code>peach-blossom.js</code> as if it’s used for frontend JavaScript, you won’t be able to use it. You’ll get an error.</p><pre><code>// This is js</code></pre><pre><code>// peach-blossom.js const peachBlossom = (function () { // Write as much code as you want here</code></pre><pre><code>// Return what others can use return { bloom: function () { console.log(‘Bloom!’) } }})()</code></pre><pre><code>// This is js</code></pre><pre><code>// index.js const peachBlossom = require(‘./peach-blossom’)</code></pre>
<p>To pass variables from one file to another in Node, you have to write <code>module.exports</code>. Variables passed to <code>module.exports</code> can be retrieved from another file.</p>
<p>This means we must write <code>module.exports</code> in <code>peach-blossom.js</code>.</p><pre><code>// This is js </code></pre><pre><code>// Write as much code as you want here const peachBlossom = { bloom () { console.log(‘Bloom!’) }}</code></pre><pre><code>// Exports peachBlossom for use in other filesmodule.exports = peachBlossom</code></pre>
<p>Once we have exported <code>peachBlossom</code>, we can use it in other files:</p><pre><code>// This is js</code></pre><pre><code>// index.js const peachBlossom = require('./peach-blossom')peachBlossom.bloom() // Bloom!```</code></pre>
<p>This format of passing variables around in Node with <code>require</code> and <code>module.exports</code> is called <strong>CommonJS</strong>.</p>
<h4 id="publishing-your-library-as-an-npm-package">Publishing your library as an npm package</h4>
<p>In short, to make your module work in Node, you have to export a variable with <code>module.exports</code>. Other people can then <code>require</code> this module in their code.</p>
<p>At this point, you can move <code>peach-blossom</code> into a separate project folder and publish it as an npm package. You can use <a href="https://zellwk.com/blog/publish-to-npm/" rel="noopener">this guide</a> to find out more about publishing the process.</p>
<h3 id="writing-modules-that-are-usable-in-both-frontend-and-backend-javascript">Writing modules that are usable in both frontend and backend JavaScript</h3>
<p>Let’s take a moment to reconcile what we know.</p>
<p>To write a library for the frontend, we need to declare it as a variable. As much as possible, we want to expose one variable only.</p><pre><code>// This is js</code></pre><pre><code>const peachBlossom = (function () {  // Write as much code as you want here</code></pre><pre><code>// Return what others can use  return {    bloom: function () {      console.log('Bloom!')    }  }})()</code></pre>
<p>To write a library for the Node, we need to export the variable with <code>module.exports</code>. Here, we only expose one variable.</p><pre><code>// This is js// Write as much code as you want here const peachBlossom = {  bloom () {    console.log('Bloom!')  }}</code></pre><pre><code>// Exports peachBlossom for use in other filesmodule.exports = peachBlossom</code></pre>
<p>But these are two completely different formats! How can we write a library once and use it in both contexts?</p>
<p>Enter UMD.</p>
<h4 id="umd">UMD</h4>
<p><a href="https://github.com/umdjs/umd" rel="noopener">UMD (Universal Module Definition</a>) is a block of code we can use to wrap around our library. This block of code makes it possible to use a library both on the frontend and in Node.</p>
<p>It kinda looks like this:</p><pre><code>// This is js</code></pre><pre><code>(function (root, factory) {    if (typeof define === 'function' &amp;&amp; define.amd) {        // AMD. Register as an anonymous module.        define(['b'], factory);    } else if (typeof module === 'object' &amp;&amp; module.exports) {        // Node.        module.exports = factory(require('b'));    } else {        // Browser globals (root is window)        root.returnExports = factory(root.b);    }}(typeof self !== 'undefined' ? self : this, function (b) {    // Use b in some fashion.</code></pre><pre><code>// Just return a value to define the module export.    // This example returns an object, but the module    // can return a function as the exported value.    return {};}));</code></pre>
<p>Whoa! This is confusing! Hold up!</p>
<p>In practice, we don’t have to know how to UMD-ify our code by ourselves. Many tools, like Webpack and Parcel, gives us the ability to UMD-ify our code through them.</p>
<p>Here are some examples (and their relevant setup instructions):</p>
<p>1. <a href="https://github.com/eduardolundgren/gulp-umd" rel="noopener">Gulp-umd</a><br>2. <a href="https://webpack.js.org/guides/author-libraries/" rel="noopener">Webpack</a><br>3. <a href="https://parceljs.org/cli.html#expose-modules-as-umd" rel="noopener">Parcel</a><br>4. <a href="https://rollupjs.org/guide/en" rel="noopener">Rollup</a></p>
<p>This, means you have to set up these tools if you want to write packages that can be used for both Frontend JavaScript and in Node. Yes, it complicates the authoring process, but there’s nothing much we can do about it at this point.</p>
<h3 id="wrapping-up">Wrapping up</h3>
<p>If you want your library to work both on Frontend JavaScript and in Node, you need to wrap your module with UMD (Universal Module Definition).</p>
<p>If you want to UMD-ify your code, you need to use a build tool when you author your package. This makes the authoring process more complicated. But the tradeoff can be worth it for providing users with an option to use your library anywhere.</p>
<p>This article was originally posted on <a href="https://zellwk.com/blog/publishing-npm-packages-that-can-be-used-in-browsers-and-node" rel="noopener"><em>my blog</em></a>.<br>Sign up for my<a href="https://zellwk.com/" rel="noopener"> newsletter</a> if you want more articles to help you become a better frontend developer.</p>
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
