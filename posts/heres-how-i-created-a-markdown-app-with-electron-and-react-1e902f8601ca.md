---
card: "https://cdn-media-1.freecodecamp.org/images/1*AUYsysbayWGQXG23G0L-3g.png"
tags: [React]
description: "by Tzahi Vidas"
author: "Milad E. Fahmy"
title: "Here’s how I created a markdown app with Electron and React"
created: "2021-08-16T10:19:43+02:00"
modified: "2021-08-16T10:19:43+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-tech tag-web-development tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Here’s how I created a markdown app with Electron and React</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*AUYsysbayWGQXG23G0L-3g.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*AUYsysbayWGQXG23G0L-3g.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*AUYsysbayWGQXG23G0L-3g.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*AUYsysbayWGQXG23G0L-3g.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*AUYsysbayWGQXG23G0L-3g.png" alt="Here’s how I created a markdown app with Electron and React">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
npm -v
yarn — version</code></pre><p>When I was writing this article, these were the versions on my machine:</p><pre><code>node = v8.4.0
npm = 5.3.0
yarn = 1.0.1</code></pre><h4 id="creat-a-react-app-with-create-react-app">Creat a React app with create-react-app</h4><p>To install <strong>create-react-app</strong> as a global package, type the following command:</p><pre><code>npm install -g create-react-app</code></pre><p>To create a new React app and <code>cd</code> in it:</p><pre><code>create-react-app mook
cd mook</code></pre><p>This is what our project looks like now. I’ve excluded the <code><strong>node_modules</strong></code> folder from view so that you can get a clear view of the project.</p><pre><code>tree -I “node_modules”
.
├── README.md
├── package.json
├── public
│ ├── favicon.ico
│ ├── index.html
│ └── manifest.json
├── src
│ ├── App.css
│ ├── App.js
│ ├── App.test.js
│ ├── index.css
│ ├── index.js
│ ├── logo.svg
│ └── registerServiceWorker.js
└── yarn.lock
“name”: “mook”,
“version”: “0.1.0”,
“main”: “public/main.js”,
“private”: true,
“dependencies”: {
“react”: “¹⁵.6.1”,
“react-dom”: “¹⁵.6.1”,
“react-scripts”: “1.0.13”
},
“scripts”: {
“start”: “react-scripts start”,
“build”: “react-scripts build”,
“test”: “react-scripts test — env=jsdom”,
“eject”: “react-scripts eject”,
“electron-start”: “electron .”
},
“devDependencies”: {
“electron”: “¹.7.6”
}
}</code></pre><p>Next, we’ll add some of <a href="https://github.com/electron/electron/blob/master/docs/api/app.md" rel="noopener">Electron’s events</a> to control the application’s life cycle. We will implement the following events:</p><ul><li><a href="https://github.com/electron/electron/blob/master/docs/api/app.md#event-ready" rel="noopener"><strong>ready</strong></a><strong>: </strong>Runs when Electron has finished initializing. In the code, this will run <code><strong>createWindow</strong></code><strong>,</strong> which creates a browser window with React’s local URL, <code><strong>http://localhost:3000</strong></code>, and sets the about panel and the <code><strong>mainWindow</strong></code> to <code>null</code> on <code>close</code>.</li><li><a href="https://github.com/electron/electron/blob/master/docs/api/app.md#event-activate-macos" rel="noopener"><strong>activate</strong></a><strong>:</strong> Runs when the application is activated. We’ll want to call the <code><strong>createWindow</strong></code> function to create a new window.</li><li><a href="https://github.com/electron/electron/blob/master/docs/api/app.md#event-window-all-closed" rel="noopener"><strong>window-all-closed</strong></a><strong>: </strong>Emitted when all windows have been closed. This will close the app on all platforms, except Mac, which will only close the window but will explicitly require the user to quit the program.</li></ul><p>Add the following code to <code><strong>public/main.js</strong></code>:</p><pre><code class="language-js">const electron = require(‘electron’);
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;
function createWindow() {
mainWindow = new BrowserWindow({width: 900, height: 680});
mainWindow.loadURL(‘http://localhost:3000');
app.setAboutPanelOptions({
applicationName: “Mook”,
applicationVersion: “0.0.1”,
})
mainWindow.on(‘closed’, () =&gt; mainWindow = null);
}
app.on(‘ready’, createWindow);
app.on(‘window-all-closed’, () =&gt; {
if (process.platform !== ‘darwin’) {
app.quit();
}
});
app.on(‘activate’, () =&gt; {
if (mainWindow === null) {
createWindow();
}
“appId”: “com.mook”,
“files”: [
“build/**/*”,
“node_modules/**/*”
],
“directories”: {
“buildResources”: “assets”
}
}</code></pre><p>We also need to add the <code><strong>homepage</strong></code> property to allow the packaged Electron app to find the JavaScript and CSS files:</p><pre><code>“homepage”: “./”</code></pre><p>At this point, your <code><strong>package.json</strong></code> file should look like this:</p><pre><code class="language-json">{
“name”: “mook”,
“version”: “0.1.0”,
“main”: “public/main.js”,
“homepage”: “./”,
“private”: true,
“scripts”: {
“start”: “react-scripts start”,
“build”: “react-scripts build”,
“test”: “react-scripts test — env=jsdom”,
“eject”: “react-scripts eject”,
“electron-start”: “electron .”,
“electron-dev”: “concurrently \”BROWSER=none yarn start\” \”wait-on http://localhost:3000 &amp;&amp; electron .\””,
“electron-pack”: “build — em.main=build/main.js”,
“preelectron-pack”: “yarn build”
},
“dependencies”: {
“react”: “¹⁵.6.1”,
“react-dom”: “¹⁵.6.1”,
“react-scripts”: “1.0.13”,
“electron-is-dev”: “⁰.3.0”
},
“devDependencies”: {
“concurrently”: “³.5.0”,
“electron”: “¹.7.6”,
“electron-builder”: “¹⁹.27.7”,
“wait-on”: “².0.2”
},
“build”: {
“appId”: “com.mook”,
“files”: [
“build/**/*”,
“node_modules/**/*”
],
“directories”: {
“buildResources”: “assets”
}
}
}</code></pre><p>The last step will be to update <code><strong>public/main.js</strong></code>. Until now, we’ve only supported the development version of the app. In production we won’t be able to use <code><strong>localhost:3000</strong></code>, instead we will serve the <code><strong>index.html</strong></code> file from the <code><strong>build</strong></code> folder.</p><p>First, we need to install <a href="https://github.com/sindresorhus/electron-is-dev" rel="noopener">electron-is-dev</a>, which will help us determine if Electron is running in development.</p><p>To install the <strong>electron-is-dev</strong> package:</p><pre><code>yarn add electron-is-dev</code></pre><p>To update <code><strong>public/main.js</strong></code> to use <a href="https://github.com/sindresorhus/electron-is-dev" rel="noopener">electron-is-dev:</a></p><ul><li>To add the package to the code:</li></ul><pre><code class="language-js">const isDev = require(‘electron-is-dev’);
const path = require(‘path’);</code></pre><ul><li>To change the <code><strong>mainWindow.loadURL</strong></code> functionality in the <code><strong>createWindow</strong></code> function:</li></ul><pre><code class="language-js">mainWindow.loadURL(isDev ? ‘http://localhost:3000' : `file://${path.join(__dirname, ‘../build/index.html’)}`);</code></pre><p>This code checks if we are in development mode, and if we are, it will use <code><strong>localhost:3000</strong></code>. Otherwise it will serve<code><strong>/build/index.html</strong></code><strong>.</strong></p><p>Your <code><strong>public/main.js</strong></code> file should now look like this:</p><pre><code>const electron = require(‘electron’);
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const isDev = require(‘electron-is-dev’);
const path = require(‘path’);
let mainWindow;
function createWindow() {
mainWindow = new BrowserWindow({width: 900, height: 680});
mainWindow.loadURL(isDev ? ‘http://localhost:3000' : `file://${path.join(__dirname, ‘../build/index.html’)}`);
app.setAboutPanelOptions({
applicationName: “Mook”,
applicationVersion: “0.0.1”,
})
mainWindow.on(‘closed’, () =&gt; mainWindow = null);
}
app.on(‘ready’, createWindow);
app.on(‘window-all-closed’, () =&gt; {
if (process.platform !== ‘darwin’) {
app.quit();
}
});
app.on(‘activate’, () =&gt; {
if (mainWindow === null) {
createWindow();
}
return (
&lt;div className=”App”&gt;
&lt;SplitPane split=”vertical” defaultSize=”50%”&gt;
&lt;div className=”editor-pane”&gt;
&lt;/div&gt;
&lt;div className=”view-pane”&gt;
&lt;/div&gt;
&lt;/SplitPane&gt;
&lt;/div&gt;
);
}</code></pre><p>We also need to add some CSS.</p><p>To add the following code to <code><strong>src/App.css</strong></code>:</p><pre><code class="language-css">.Resizer {
background: #000;
opacity: 0.4;
z-index: 1;
-moz-box-sizing: border-box;
-webkit-box-sizing: border-box;
box-sizing: border-box;
-moz-background-clip: padding;
-webkit-background-clip: padding;
background-clip: padding-box;
}
.Resizer:hover {
-webkit-transition: all 2s ease;
transition: all 2s ease;
}
.Resizer.horizontal {
height: 11px;
margin: -5px 0;
border-top: 5px solid rgba(255, 255, 255, 0);
border-bottom: 5px solid rgba(255, 255, 255, 0);
cursor: row-resize;
width: 100%;
}
.Resizer.horizontal:hover {
border-top: 5px solid rgba(0, 0, 0, 0.5);
border-bottom: 5px solid rgba(0, 0, 0, 0.5);
}
.Resizer.vertical {
width: 11px;
margin: 0 -5px;
border-left: 5px solid rgba(255, 255, 255, 0);
border-right: 5px solid rgba(255, 255, 255, 0);
cursor: col-resize;
}
.Resizer.vertical:hover {
border-left: 5px solid rgba(0, 0, 0, 0.5);
border-right: 5px solid rgba(0, 0, 0, 0.5);
}
.Resizer.disabled {
cursor: not-allowed;
}
.Resizer.disabled:hover {
border-color: transparent;
}
class Editor extends Component {
}
export default Editor;</code></pre><p>This class will basically wrap the <strong>react-codemirror</strong> package that is a React component for CodeMirror.</p><p>Next, we will import <code><strong>@skidding/react-codemirror</strong></code> and some CSS files that we want to use for the CodeMirror component, syntax highlighting, and markdown mode.</p><p>We will also add a <code>render</code> function that will return the CodeMirror element and add a <code><strong>constructor</strong></code> to the <code><strong>Editor</strong></code> class. This <strong>constructor</strong> allows us to initialize the CodeMirror with a value from the main file.</p><p>We’ll set the <code>CodeMirror</code> component to <code><strong>markdown</strong></code> mode and the theme to <code><strong>monokai</strong></code>:</p><pre><code class="language-jsx">import React, { Component } from ‘react’;
import CodeMirror from ‘@skidding/react-codemirror’;
require(‘codemirror/lib/codemirror.css’);
require(‘codemirror/mode/javascript/javascript’);
require(‘codemirror/mode/python/python’);
require(‘codemirror/mode/xml/xml’);
require(‘codemirror/mode/markdown/markdown’);
require(‘codemirror/theme/monokai.css’);
class Editor extends Component {
constructor(props) {
super(props);
}
render() {
var options = {
mode: ‘markdown’,
theme: ‘monokai’,
}
return (
&lt;CodeMirror value={this.props.value}
options={options} height=”100%”/&gt;
);
}
}
export default Editor;</code></pre><p>In the <code><strong>src/App.js</strong></code> file, we will import <code><strong>editor.js</strong></code> (add to the beginning of the file):</p><pre><code class="language-js">import Editor from ‘./editor.js’;</code></pre><p>In the <code><strong>App</strong></code><em> </em>class, let’s add a constructor with an initial value for our editor:</p><pre><code class="language-jsx">constructor(props) {
super();
this.state = {
markdownSrc: “# Hello World”,
}
}</code></pre><p>In the <code><strong>render</strong></code> function of the <code><strong>App</strong></code> class, add the <code><strong>Editor</strong></code> component and set the value to <code><strong>markdownSrc</strong></code>:</p><pre><code class="language-jsx">render() {
return (
&lt;div className=”App”&gt;
&lt;SplitPane split=”vertical” defaultSize=”50%”&gt;
&lt;div className=”editor-pane”&gt;
&lt;Editor className=”editor” value={this.state.markdownSrc}/&gt;
&lt;/div&gt;
&lt;div className=”view-pane”&gt;
&lt;/div&gt;
&lt;/SplitPane&gt;
&lt;/div&gt;
);
}</code></pre><p>The <code><strong>src/App.js</strong></code> file should look like this:</p><pre><code class="language-jsx">import React, { Component } from ‘react’;
import logo from ‘./logo.svg’;
import SplitPane from ‘react-split-pane’;
import Editor from ‘./editor.js’;
import ‘./App.css’;
class App extends Component {
constructor(props) {
super();
this.state = {
markdownSrc: “# Hello World”,
}
}
render() {
return (
&lt;div className=”App”&gt;
&lt;SplitPane split=”vertical” defaultSize=”50%”&gt;
&lt;div className=”editor-pane”&gt;
&lt;Editor className=”editor” value={this.state.markdownSrc}/&gt;
&lt;/div&gt;
&lt;div className=”view-pane”&gt;
&lt;/div&gt;
&lt;/SplitPane&gt;
&lt;/div&gt;
);
}
}
export default App;</code></pre><p>Update the CSS file <code><strong>src/App.css</strong></code> with the following changes:</p><ol><li>In the <code><strong><em>.</em>App</strong> </code>section (at the top of the file), remove<code> text-align: center<em>;</em></code> so that the text is not aligned to the center.</li><li>Add the following CSS code, so that it will stretch the editor to full height and add a little padding to the right side of the text:</li></ol><pre><code class="language-css">.editor-pane {
height: 100%;
}
.CodeMirror {
height: 100%;
padding-top: 20px;
padding-left: 20px;
}
.ReactCodeMirror {
height: 100%;
&lt;ReactMarkdown className=”result” source={this.state.markdownSrc} /&gt;
super();
this.state = {
markdownSrc: “# Hello World”
}
this.onMarkdownChange = this.onMarkdownChange.bind(this);
}
onMarkdownChange(md) {
this.setState({
markdownSrc: md
});
}</code></pre><p>In the <code>render</code> function, add the following to the <code>Editor</code> element:</p><pre><code class="language-jsx">&lt;Editor className=”editor” value={this.state.markdownSrc} onChange={this.onMarkdownChange}/&gt;</code></pre><p>In the <code><strong>src/editor.js</strong></code> file, bind the <code>onChange</code> function of <strong>CodeMirror</strong> to the <code>onChange</code> of the parent:</p><pre><code class="language-jsx">constructor(props) {
super(props);
this.updateCode = this.updateCode.bind(this);
}
updateCode(e) {
this.props.onChange(e);
}</code></pre><p>In the <code><strong>render</strong></code> function, add the following to the <code><strong>CodeMirror</strong></code> element:</p><pre><code class="language-jsx">&lt;CodeMirror
value={this.props.value}
onChange={this.updateCode}
options={options}
height=”100%”
/&gt;</code></pre><p>The <code><strong>src/App.js</strong></code> file should look like:</p><pre><code class="language-jsx">import React, { Component } from ‘react’;
import logo from ‘./logo.svg’;
import SplitPane from ‘react-split-pane’;
import Editor from ‘./editor.js’;
import ReactMarkdown from ‘react-markdown’;
import ‘./App.css’;
class App extends Component {
constructor(props) {
super();
this.state = {
markdownSrc: “# Hello World”
}
this.onMarkdownChange = this.onMarkdownChange.bind(this);
}
onMarkdownChange(md) {
this.setState({
markdownSrc: md
});
}
render() {
return (
&lt;div className=”App”&gt;
&lt;SplitPane split=”vertical” defaultSize=”50%”&gt;
&lt;div className=”editor-pane”&gt;
&lt;Editor className=”editor” value={this.state.markdownSrc} onChange={this.onMarkdownChange}/&gt;
&lt;/div&gt;
&lt;div className=”view-pane”&gt;
&lt;ReactMarkdown className=”result” source={this.state.markdownSrc} /&gt;
&lt;/div&gt;
&lt;/SplitPane&gt;
&lt;/div&gt;
);
}
}
export default App;</code></pre><p>The <code><strong>src/editor.js</strong></code> file now looks like this:</p><pre><code class="language-jsx">import React, { Component } from ‘react’;
import CodeMirror from ‘@skidding/react-codemirror’;
require(‘codemirror/lib/codemirror.css’);
require(‘codemirror/mode/javascript/javascript’);
require(‘codemirror/mode/python/python’);
require(‘codemirror/mode/xml/xml’);
require(‘codemirror/mode/markdown/markdown’);
require(‘codemirror/theme/monokai.css’);
class Editor extends Component {
constructor(props) {
super(props);
this.updateCode = this.updateCode.bind(this);
}
updateCode(e) {
this.props.onChange(e);
}
render() {
var options = {
mode: ‘markdown’,
theme: ‘monokai’,
}
return (
&lt;CodeMirror value={this.props.value} onChange={this.updateCode} options={options} height=”100%”/&gt;
);
}
}
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
