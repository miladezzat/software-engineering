---
card: "https://cdn-media-1.freecodecamp.org/images/1*0nvsQXICkyKVMAq4hbYRPg.jpeg"
tags: [JavaScript]
description: by Chris Chuck
author: "Milad E. Fahmy"
title: "How to take off with WebAssembly for Go in React"
created: "2021-08-15T19:41:16+02:00"
modified: "2021-08-15T19:41:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-go tag-react tag-nodejs tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to take off with WebAssembly for Go in React</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*0nvsQXICkyKVMAq4hbYRPg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*0nvsQXICkyKVMAq4hbYRPg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*0nvsQXICkyKVMAq4hbYRPg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*0nvsQXICkyKVMAq4hbYRPg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*0nvsQXICkyKVMAq4hbYRPg.jpeg" alt="How to take off with WebAssembly for Go in React">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Chris Chuck</p>
<h1 id="how-to-take-off-with-webassembly-for-go-in-react">How to take off with WebAssembly for Go in React</h1>
<p>With Go version 1.11, we now get an experimental version of <a href="https://webassembly.org/" rel="noopener">WebAssembly</a>. If you don’t know what WebAssembly is, don’t fret. In short, WebAssembly aims to bring high performance, assembly-like code into the browser. This allows developers to put more computationally intensive tasks into the browser, be it for a <a href="https://webassembly.org/demo/Tanks/" rel="noopener">game</a> or making some super cool <a href="https://demos.alanmacleod.eu/wasm-render/pub/" rel="noopener">animations</a>.</p>
<p>So with that, I’m going to show you how to add Go-based WebAssembly to a React app! This guide assumes you have some familiarity with Webpack, Babel, and React. If you’re new to these technologies, I highly recommend you checkout <a href="https://medium.freecodecamp.org/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75" rel="noopener">this tutorial</a>.</p>
<p>This tutorial will show you how to create a basic React app that utilizes WebAssembly for Go. In the near future, I’ll show you how to build a tic-tac-toe game in which the computer is 100% unbeatable and we’ll use WebAssembly to power the minimax algorithm (don’t worry, it sounds harder than it is!) ?</p>
<p>The code for this part (and future parts) will be on Github <a href="https://floooh.github.io/oryol/asmjs/InfiniteSpheres.html" rel="noopener">here</a>.</p>
<h4 id="prerequisites-and-initial-setup">Prerequisites and Initial Setup</h4>
<p>Make sure you have Go 1.11 (minimum) and Node.js installed.</p>
<p>I am using Chrome version 69 and all current versions of Edge, Firefox, and Safari have WebAssembly <a href="https://caniuse.com/#feat=wasm" rel="noopener">support</a>. However, results from this tutorial may vary based on version/browser.</p>
<p>Jumping right into it, create a folder and <code>cd</code> into it.</p>
<p>Inside that folder create a <code>client</code> and a <code>server</code> folder.</p>
<h4 id="the-react-app">The React App</h4>
<p>Let’s start with building the React App. It’s nothing more than a regular client side rendered app with a few extra bits added in!</p>
<p>First <code>cd</code> into the <code>client</code> folder and run <code>npm init -y</code> to initialize your <code>package.json</code>.</p>
<p>After that, run the following:</p><pre><code>npm install --save react react-dom &amp;&amp; npm install --save-dev @babel/core @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators @babel/plugin-syntax-dynamic-import @babel/polyfill @babel/preset-env @babel/preset-react add-asset-html-webpack-plugin babel-loader html-webpack-plugin webpack webpack-cli webpack-dev-server</code></pre>
<p>Once you do that, change the <code>scripts</code> portion of your <code>package.json</code> to the following:</p><pre><code>"scripts": {  "dev": "webpack-dev-server --mode development",  "build": "webpack --mode production"},</code></pre>
<p>Next, in the client folder, create two files, a <code>.babelrc</code> and a <code>webpack.config.js</code>.</p>
<p>In the <code>.babelrc</code> paste the following:</p><pre><code>{  "presets": [ ["@babel/preset-env", { "modules": false } ],  "@babel/preset-react"],  "plugins": [    "@babel/plugin-proposal-class-properties",    ["@babel/plugin-proposal-decorators", { "legacy": true }],    "@babel/plugin-syntax-dynamic-import"  ]}</code></pre>
<p>And in the <code>webpack.config.js</code> paste the following:</p>
<p>Note the <code>AddAssetHtmlPlugin</code> which we are using to inject the <code>wasm_exec.js</code> file and <code>init_go.js</code> file into our app via a script tag. These must be in the order they are shown so that the <code>wasm_exec.js</code> file runs before <code>init_go.js</code> file. The <code>wasm_exec.js</code> simply sets up Go’s runtime on the browser and the <code>init_go.js</code> file gives us a global, workable Go object instance. But more on these files later.</p>
<p>Now create a <code>src</code> folder and add an <code>index.js</code> file, <code>index.html</code> file, <code>init_go.js</code> file, <code>wasm_exec.js</code> file, and a <code>components</code> folder with an <code>app.js</code> file in it. Your directory should look like so:</p>
<p>From here, add this to your <code>index.html</code>:</p>
<p>In the <code>index.js</code> add this:</p>
<p>And in your <code>components/app.js</code> file add the following:</p>
<p>Now we have an extremely basic React app!</p>
<h4 id="webassembly-on-the-client"><strong>WebAssembly on the Client</strong></h4>
<p>In the <code>wasm_exec.js</code> file, paste the code from <a href="https://github.com/golang/go/blob/master/misc/wasm/wasm_exec.js" rel="noopener">here</a> (omitted for brevity).</p>
<p>Like we said before, this just instantiates the basic runtime for Go in the client. It provides a global <code>Go</code> constructor that we’ll be using later.</p>
<p>Next we need to actually do something with that <code>Go</code> object. So in your <code>init_go.js</code> file, add the following:</p>
<p>All this does is create a new <code>go</code> object from the <code>Go</code> constructor we made earlier and bind it to global state.</p>
<p>Go ahead and run <code>npm run dev</code> and the navigate to <code>localhost:8080</code> in the browser and you should see “Hello!” on your webpage. Not very interesting right? But what you don’t see is that we’ve injected our global <code>go</code> object!</p>
<p>Now change your <code>components/app.js</code> file to the following:</p>
<p>What did we change? Let’s start with the simple stuff. First we added an <code>isLoading</code> attribute to state. This is so we know that WebAssembly is still loading. In the <code>render</code> function, we use the <code>isLoading</code> attribute from state to conditionally render a <code>div</code> that says “Loading” or a <code>button</code>.</p>
<p>You may be asking yourself, “That button has an <code>onClick</code> with a function <code>sayHi</code>, but I don’t see a <code>sayHi</code> function anywhere.” This is where WebAssembly comes in. When we write our Go code, we’ll be defining that function and binding it to global state there. This is why we must wait for WebAssembly to load before we can render our button. But we’ll fill in these blanks later.</p>
<p>Looking at the <code>componentDidMount</code> function, you can see we’re calling <code>WebAssembly.instantiateStreaming</code> which is the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming" rel="noopener">optimal way of loading WebAssembly code</a>. It takes a promise that returns a <code>wasm</code> file and an <code>importObject</code> as its parameters. It returns a compiled WebAssembly module. That promise is a fetch request to our API (we’ll build it next!) and that endpoint just returns a <code>wasm</code> file. After we get the module, we use <code>go</code> to run it and then we set <code>isLoading</code> to <code>false</code>.</p>
<p>But of course, since we have nothing on <code>localhost:3000</code> this will break.</p>
<h3 id="the-server">The Server</h3>
<p>Now we need to setup the server to serve our <code>wasm</code> file. First, open up a new terminal and <code>cd</code> into the <code>server</code> folder you made earlier and run <code>npm init -y</code> to initialize your <code>package.json</code>.</p>
<p>Next, let’s install some packages. Run the following:</p><pre><code>npm install --save compression cors express &amp;&amp; npm install --save-dev nodemon</code></pre>
<p>Change the <code>scripts</code> portion of your <code>package.json</code> to this:</p><pre><code>"scripts": {  "dev": "nodemon index.js"},</code></pre>
<p>Now in the <code>server</code> directory, create an <code>index.js</code> file and a <code>go</code> folder. In that <code>go</code> folder, create a <code>main.go</code> file.</p>
<p>Your folder should look like this:</p>
<p>In the <code>index.js</code> paste the following:</p>
<p>This is just a simple express server which serves up a <code>wasm</code> file from the <code>go</code> folder. Let’s make that now!</p>
<h4 id="webassembly-on-the-server"><strong>WebAssembly on the Server</strong></h4>
<p>In your <code>main.go</code> file add this (big thanks to TutoiralEdge for his <a href="https://tutorialedge.net/golang/go-webassembly-tutorial/" rel="noopener">tutorial</a>):</p>
<p>Let’s break this down. First we need to import <code>fmt</code> for basic printing and <code>syscall/js</code> so we can use all of Go’s new <a href="https://tip.golang.org/pkg/syscall/js/?GOOS=js&amp;GOARCH=wasm" rel="noopener">JavaScript goodies</a>. Next we’ll create our <code>sayHi</code> function with parameters <code>args []js.Value</code> even though we’re not going to pass in any arguments. All this function does is print “Hi!”</p>
<p>In the <code>registerCallbacks</code> function, we bind our function to global state in our browser. Now when we call <code>js.Global().Set</code> function we’re going to first name our global variable “sayHi” and then pair it with our <code>sayHi</code> function from above by wrapping it in the <code>js.NewCallback</code> function.</p>
<p>Lastly, in our <code>main</code> function, we’re opening up a channel and running <code>registerCallbacks</code>. The channel simply stalls our Go code so it doesn’t finish executing.</p>
<p>Now all that’s left is compiling this Go code into WebAssembly.</p>
<p><code>cd</code> into the <code>go</code> folder and run the following:</p><pre><code>GOOS=js GOARCH=wasm go build -o main.wasm</code></pre>
<p>Notice that our <code>GOOS</code> is set to <code>js</code> and our <code>GOARCH</code> is set to <code>wasm</code>. This means that our target operating system is <code>js</code> and the compilation architecture is <code>wasm</code>.</p>
<p>Your folder structure should be this now:</p>
<p>As you can see, now we have a <code>main.wasm</code> file we can serve.</p>
<p><code>cd</code> back into the <code>server</code> folder and run <code>npm run dev</code>.</p>
<p>Your server should now be running on <code>localhost:3000</code>. Go back to <code>localhost:8080</code> (assuming you still have the client running) in your browser and refresh it. After it loads, open up the console and click the button. It should print “Hi!” in the console.</p>
<figcaption>It works!</figcaption>
</figure>
<p>As you probably saw, it’ll say “Loading” for quite some time before our button appears. This is the <a href="https://medium.com/@mbebenita/webassembly-is-30x-faster-than-javascript-c71ea54d2f96" rel="noopener">overhead</a> we incur from using WebAssembly. However, after this initial load, we can bask in low level, high performance glory.</p>
<p>To kill the client and server, just press <code>ctrl + c</code> in your terminals.</p>
<h3 id="conclusion">Conclusion</h3>
<p>Thank you for reading and I hope you enjoyed learning about WebAssembly with me. While this is an extremely basic implementation of WebAssembly in React, in the next part of this series, we’ll be making an AI agent that’s unbeatable at tic-tac-toe. So stay tuned if you’re interested in that!</p>
<p>If you have any comments or questions feel free to leave them below.</p>
<p><em>Thanks again for reading! Please share, drop a </em>? (<em>or two), and happy coding.</em></p>
<p>Add me on <a href="https://www.linkedin.com/in/the-chris-chuck/" rel="noopener">LinkedIn</a>!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
