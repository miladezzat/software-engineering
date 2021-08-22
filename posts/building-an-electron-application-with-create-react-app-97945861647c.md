---
card: "https://cdn-media-1.freecodecamp.org/images/1*PQwgjFvq8KcaNOyjZqC5ig.jpeg"
tags: [JavaScript]
description: I recently built an Electron app using create-react-app. I di
author: "Milad E. Fahmy"
title: "Building an Electron application with create-react-app"
created: "2021-08-15T19:53:31+02:00"
modified: "2021-08-15T19:53:31+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-electron tag-software-development tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Building an Electron application with create-react-app</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*PQwgjFvq8KcaNOyjZqC5ig.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*PQwgjFvq8KcaNOyjZqC5ig.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*PQwgjFvq8KcaNOyjZqC5ig.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*PQwgjFvq8KcaNOyjZqC5ig.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*PQwgjFvq8KcaNOyjZqC5ig.jpeg" alt="Building an Electron application with create-react-app">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h3 id="no-webpack-configuration-or-ejecting-necessary-">No webpack configuration or “ejecting” necessary.</h3>
<p>I recently built an <a href="http://electron.atom.io/" rel="noopener">Electron</a> app using <a href="https://github.com/facebookincubator/create-react-app" rel="noopener">create-react-app</a><em>. </em>I didn’t need to muck about with Webpack, or “eject” my app, either. I’ll walk you through how I accomplished this.</p>
<p>I was drawn to the idea of using <a href="https://github.com/facebookincubator/create-react-app" rel="noopener">create-react-app</a> because it hides the webpack configuration details. But my search for existing guides for using Electron and create-react-app together didn’t bear any fruit, so I just dove in and figured it out myself.</p>
<p>If you’re feeling impatient, you can dive right in and look at my code. Here’s the <a href="https://github.com/csepulv/electron-with-create-react-app" rel="noopener">GitHub repo</a> for my app.</p>
<p>Before we get started, let me tell you about Electron and React, and why create-react-app is such a great tool.</p>
<h3 id="electron-and-react">Electron and React</h3>
<p>React is Facebook’s JavaScript view framework.</p>
<p><a href="https://facebook.github.io/react/" rel="noopener"><strong><em>A JavaScript library for building user interfaces</em> - React</strong></a><br><a href="https://facebook.github.io/react/" rel="noopener">A JavaScript library for building user interfacesfacebook.github.io</a></p>
<p>And Electron is GitHub’s framework for building cross-platform desktop apps in JavaScript.</p>
<p><a href="http://electron.atom.io/" rel="noopener"><strong>Electron</strong></a><br><a href="http://electron.atom.io/" rel="noopener"><em>Build cross platform desktop apps with JavaScript, HTML, and CSS.</em>electron.atom.io</a></p>
<p>Most use <a href="https://webpack.github.io/" rel="noopener">webpack</a> for the configuration necessary for React development. webpack is a configuration and build tool that most of the React community has adopted over alternatives like <a href="http://gulpjs.com/" rel="noopener">Gulp</a> and <a href="http://gruntjs.com" rel="noopener">Grunt</a>.</p>
<p>The configuration overhead varies (more on this later), and there are many boilerplate and application generators available, but in July 2016 <a href="https://github.com/facebookincubator" rel="noopener">Facebook Incubator</a> released a tool,<em> </em><a href="https://github.com/facebookincubator/create-react-app" rel="noopener">create-react-app</a><em>.</em> It hides most of the configuration and lets the developer use simple commands, such as <code>npm start</code> and <code>npm run build</code> to run and build their apps.</p>
<h4 id="what-is-ejecting-and-why-do-you-want-to-avoid-it">What is ejecting, and why do you want to avoid it?</h4>
<p>create-react-app makes certain assumptions about a typical React setup. If these assumptions aren’t for you, there is an option to <a href="https://github.com/facebookincubator/create-react-app#converting-to-a-custom-setup" rel="noopener"><strong>eject</strong></a> an application (<code>npm run eject</code>). Ejecting an application copies all the encapsulated configuration of create-react-app to the your project, providing a boilerplate configuration that you can change as you wish.</p>
<p>But this is a <em>one way</em> trip. You can’t undo ejecting and go back. There have been 49 releases (as of this post) of create-react-app, each making improvements. But for an ejected application, you would have to either forgo these improvements or figure out how to apply them.</p>
<p>An ejected configuration is over 550 lines spanning 7 files (as of this post). I don’t understand it all (well, most of it, actually) and I don’t want to.</p>
<h4 id="goals">Goals</h4>
<p>My goals are simple:</p>
<ul>
<li>avoid ejecting the React app</li>
<li>minimize glue to get React and Electron working together</li>
<li>preserve the defaults, assumptions and conventions made by Electron and create-react-app/React. (This can make it easier to use other tools that assume/require such conventions.)</li>
</ul>
<h4 id="basic-recipe">Basic Recipe</h4>
<ol>
<li>run<code> create-react-app</code> to generate a basic React application</li>
<li>run <code>npm install --save-dev electron</code></li>
<li>add <code>main.js</code> from <code><a href="https://github.com/electron/electron-quick-start" rel="noopener">electron-quick-start</a></code> (we’ll rename it to <code>electron-starter.js</code>, for clarity)</li>
<li>modify call to <code>mainWindow.loadURL</code> (in <code>electron-starter.js</code>) to use <code>localhost:3000</code> (webpack-dev-server)</li>
<li>add a main entry to <code>package.json</code> for <code>electron-starter.js</code></li>
<li>add a run target to start Electron to <code>package.json</code></li>
<li><code>npm start</code> followed by <code>npm run electron</code></li>
</ol>
<p>Steps 1 and 2 are pretty straightforward. Here’s the code for steps 3 and 4:</p><pre><code class="language-javascript">const electron = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
function createWindow() {
// Create the browser window.
mainWindow = new BrowserWindow({width: 800, height: 600});
// and load the index.html of the app.
mainWindow.loadURL('http://localhost:3000');
// Open the DevTools.
mainWindow.webContents.openDevTools();
// Emitted when the window is closed.
mainWindow.on('closed', function () {
// Dereference the window object, usually you would store windows
// in an array if your app supports multi windows, this is the time
// when you should delete the corresponding element.
mainWindow = null
})
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);
// Quit when all windows are closed.
app.on('window-all-closed', function () {
// On OS X it is common for applications and their menu bar
// to stay active until the user quits explicitly with Cmd + Q
if (process.platform !== 'darwin') {
app.quit()
}
});
app.on('activate', function () {
// On OS X it's common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.
if (mainWindow === null) {
createWindow()
}
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.</code></pre>
<p>(<a href="https://gist.github.com/csepulv/d4a97eaf9438cb4f7f102a1b2d075b93#file-electron-starter-js" rel="noopener">Gist</a>)</p>
<p>And for steps 5 and 6:</p><pre><code class="language-javascript">{
"name": "electron-with-create-react-app",
"version": "0.1.0",
"private": true,
"devDependencies": {
"electron": "^1.4.14",
"react-scripts": "0.8.5"
},
"dependencies": {
"react": "^15.4.2",
"react-dom": "^15.4.2"
},
"main": "src/electron-starter.js",
"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test --env=jsdom",
"eject": "react-scripts eject",
"electron": "electron ."
}
}</code></pre>
<p>(<a href="https://gist.github.com/csepulv/d4a97eaf9438cb4f7f102a1b2d075b93#file-package-json" rel="noopener">Gist</a>)</p>
<p>When you run the npm commands in step 7, you should see this:</p>
<p>You can make live changes to the React code and you should see them reflected in the running Electron app.</p>
<p>This works okay for development, but has two shortcomings:</p>
<ul>
<li>production won’t use <code>webpack-dev-server</code>. It needs to use the static file from building the React project</li>
<li>(small) nuisance to run both npm commands</li>
</ul>
<h4 id="specifying-the-loadurl-in-production-and-dev">Specifying the loadURL in Production and Dev</h4>
<p>In development, an environment variable can specify the url for <code>mainWindow.loadURL</code> (in <code>electron-starter.js</code>). If the env var exists, we’ll use it; else we’ll use the production static HTML file.</p>
<p>We’ll add a npm run target (to <code>package.json</code>) as follows:</p><pre><code>"electron-dev": "ELECTRON_START_URL=http://localhost:3000 electron ."</code></pre>
<p>Update: Windows users will need to do the following: (thanks to <a href="http://twitter.com/bfarmilo" rel="noopener">@bfarmilo</a>)</p><pre><code>”electron-dev”: "set ELECTRON_START_URL=http://localhost:3000 &amp;&amp; electron .”</code></pre>
<p>In <code>electron-starter.js</code>, we’ll modify the <code>mainWindow.loadURL</code> call as follows:</p><pre><code class="language-javascript">const startUrl = process.env.ELECTRON_START_URL || url.format({
pathname: path.join(__dirname, '/../build/index.html'),
protocol: 'file:',
slashes: true
});
mainWindow.loadURL(startUrl);</code></pre>
<p>(<a href="https://gist.github.com/csepulv/d4a97eaf9438cb4f7f102a1b2d075b93#file-electron-starter-use-env-var-js" rel="noopener">Gist</a>)</p>
<p>There is a problem with this: <code>create-react-app</code> (by default) builds an <code>index.html</code> that uses absolute paths. This will fail when loading it in Electron. Thankfully, there is a config option to change this: set a <code>homepage</code> property in <code>package.json</code>. (Facebook documentation on the property is <a href="https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#building-for-relative-paths" rel="noopener">here</a>.)</p>
<p>So we can set this property to the current directory and <code>npm run build</code> will use it as a relative path.</p><pre><code>"homepage": "./",</code></pre>
<h4 id="using-foreman-to-manage-react-and-electron-processes">Using Foreman to Manage React and Electron Processes</h4>
<p>For convenience, I prefer to not</p>
<ol>
<li>launch/manage both React dev server and Electron processes (I’d rather deal with one)</li>
<li>wait for the React dev server to start and then launch Electron</li>
</ol>
<p><a href="https://github.com/strongloop/node-foreman" rel="noopener">Foremen</a> is a good process management tool. We can add it,</p><pre><code>npm install --save-dev foreman</code></pre>
<p>and add the following <code>Procfile</code></p><pre><code>react: npm startelectron: npm run electron</code></pre>
<p>(<a href="https://gist.github.com/csepulv/d4a97eaf9438cb4f7f102a1b2d075b93#file-procfile-initial-js" rel="noopener">Gist</a>)</p>
<p>That deals with (1). For (2), we can add a simple node script (<code>electron-wait-react.js</code>) that waits for the React dev server to start, then starts Electron.</p><pre><code class="language-javascript">const net = require('net');
const port = process.env.PORT ? (process.env.PORT - 100) : 3000;
process.env.ELECTRON_START_URL = `http://localhost:${port}`;
const client = new net.Socket();
let startedElectron = false;
const tryConnection = () =&gt; client.connect({port: port}, () =&gt; {
client.end();
if(!startedElectron) {
console.log('starting electron');
startedElectron = true;
const exec = require('child_process').exec;
exec('npm run electron');
}
}
);
tryConnection();
client.on('error', (error) =&gt; {
setTimeout(tryConnection, 1000);
});</code></pre>
<p>(<a href="https://gist.github.com/csepulv/d4a97eaf9438cb4f7f102a1b2d075b93#file-electron-wait-react-js" rel="noopener">Gist</a>)</p>
<blockquote>NOTE: Foreman will offset the port number by 100 for processes of different types. (See <a href="https://github.com/strongloop/node-foreman#advanced-usage" rel="noopener">here</a>.) So, <code>electron-wait-react.js</code> subtracts 100 to set the port number of the React dev server correctly.</blockquote>
<p>Now modify the <code>Procfile</code></p><pre><code>react: npm startelectron: node src/electron-wait-react</code></pre>
<p>(<a href="https://gist.github.com/csepulv/d4a97eaf9438cb4f7f102a1b2d075b93#file-profile-final-js" rel="noopener">Gist</a>)</p>
<p>Finally, we’ll change the run targets in <code>package.json</code> to replace <code>electron-dev</code> with:</p><pre><code>"dev" : "nf start"</code></pre>
<p>And now, we can execute:</p><pre><code>npm run dev</code></pre>
<blockquote>UPDATE (1/25/17) : I‘ve added the following section in response to some user comments (<a href="https://medium.com/@luke_schmuke/hey-there-a84bcaf41f17#.szbo7b33n" rel="noopener">here</a> and <a href="https://medium.com/@bfarmilo/hi-again-christian-f2601fb40e03#.5sj6cpnih" rel="noopener">here</a>). They need access to Electron from within the react app and a simple require or import throws an error. I note one solution below.</blockquote>
<h4 id="accessing-electron-from-the-react-app">Accessing Electron from the React App</h4>
<p>An Electron app has two main processes: the Electron host/wrapper and your app. In some cases, you’d like access to Electron from within your application. For example, you might want to access the local file system or use Electron’s <code><a href="http://electron.atom.io/docs/api/ipc-renderer/" rel="noopener">ipcRenderer</a></code>. But if you do the following, you’ll get an error</p><pre><code class="language-javascript">const electron = require('electron')
//or
import electron from 'electron';</code></pre>
<p>There is some discussion about this error in various GitHub and Stack Overflow issues, such as this <a href="https://github.com/electron/electron/issues/7300" rel="noopener">one</a>. Most solutions propose webpack config changes, but this would require ejecting the application.</p>
<p>However, there is a simple workaround/hack.</p><pre><code>const electron = window.require('electron');</code></pre><pre><code class="language-javascript">const electron = window.require('electron');
const fs = electron.remote.require('fs');
const ipcRenderer  = electron.ipcRenderer;</code></pre>
<h4 id="wrapping-up">Wrapping Up</h4>
<p>For convenience, here is a <a href="https://github.com/csepulv/electron-with-create-react-app" rel="noopener">GitHub repo</a> that has all the changes above, with tags for each step. But, there it isn’t much work to bootstrap an Electron application that uses create-react-app. (This post is much longer than the code and changes you would need to integrate the two.)</p>
<p>And if you are using create-react-app, you might want to check out my post, <a href="https://medium.com/justideas-io/debugging-tests-in-webstorm-and-create-react-app-b38f389ae7c8#.4qb90t1f1" rel="noopener">Debugging tests in WebStorm and create-react-app</a>.</p>
<p>Thanks for reading. You can check out more of my posts at <a href="https://justideas.io" rel="noopener">justideas.io</a></p>
<blockquote>UPDATE (2/2/17). A reader, <a href="https://github.com/vcarl" rel="noopener">Carl Vitullo</a>, suggested to use <code>npm start</code> instead of <code>npm run dev</code> and submitted a pull request with the changes, on GitHub. These tweaks are available in this <a href="https://github.com/csepulv/electron-with-create-react-app/tree/npm-start" rel="noopener">branch</a>.</blockquote>
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
