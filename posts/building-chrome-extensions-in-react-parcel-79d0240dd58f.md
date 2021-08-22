---
card: "https://cdn-media-1.freecodecamp.org/images/1*GIwcjdd76nYEvw-0nnJHvQ.jpeg"
tags: [JavaScript]
description: "by Atakan Goktepe"
author: "Milad E. Fahmy"
title: "How to build Chrome extensions with React + Parcel"
created: "2021-08-16T11:45:40+02:00"
modified: "2021-08-16T11:45:40+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-programming tag-tech tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to build Chrome extensions with React + Parcel</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*GIwcjdd76nYEvw-0nnJHvQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*GIwcjdd76nYEvw-0nnJHvQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*GIwcjdd76nYEvw-0nnJHvQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*GIwcjdd76nYEvw-0nnJHvQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*GIwcjdd76nYEvw-0nnJHvQ.jpeg" alt="How to build Chrome extensions with React + Parcel">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
├── manifest.json
├── node_modules
├── .babelrc
├── package.json
└── src
├── build
│   └── main.js [We will use that build file as content script]
├── js [Where our development file is stored]
│   ├── components [We are storing components in this folder]
│   │   └── Header.js
│   ├── main.js [Our main file, that renders our app]
│   └── popup.js [Our javascript file for popup]
"manifest_version": 2,
"name": "Name of your chrome extension",
"description": "Description of your chrome extension.",
"version": "1.0",
"browser_action": {
"default_icon": "icon.png",
"default_popup": "src/popup.html"
},
"permissions": [
"activeTab",
"tabs"
],
"content_scripts": [
{
"matches": ["http://*/*", "https://*/*"],
"js": ["src/build/main.js"]
}
]
"name": "extension-name",
"version": "0.1.0",
"description": "Description",
"main": "src/js/main.js",
"scripts": {
"build": "parcel build src/js/main.js -d src/build/ -o main.js",
"watch": "parcel watch src/js/main.js -d src/build/ -o main.js"
},
"author": "Atakan Goktepe",
"dependencies": {
"babel-preset-env": "^1.6.1",
"babel-preset-react": "^6.24.1",
"parcel-bundler": "^1.6.2",
"react": "^16.2.0",
"react-dom": "^16.2.0"
}
&lt;!--
This page is shown when the extension button is clicked, because the
"browser_action" field in manifest.json contains the "default_popup" key with
value "popup.html".
--&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Getting Started Extension's Popup&lt;/title&gt;
&lt;style type="text/css"&gt;
body {
margin: 10px;
white-space: nowrap;
}
#container {
align-items: center;
display: flex;
justify-content: space-between;
}
.start {
border: 1px solid #000;
border-radius: 15px;
padding: 5px 15px;
cursor: pointer;
}
&lt;/style&gt;
&lt;script src="js/popup.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="container"&gt;
&lt;!--
Render react app in the visited website when the .start button is clicked.
--&gt;
&lt;button class="start"&gt;
Render App
&lt;/button&gt;
&lt;/div&gt;
&lt;/body&gt;
const $startButton = document.querySelector('.start');
$startButton.onclick = () =&gt; {
// Get active tab
chrome.tabs.query({
active: true,
currentWindow: true,
}, (tabs) =&gt; {
// Send message to script file
chrome.tabs.sendMessage(
tabs[0].id,
{ injectApp: true },
response =&gt; window.close()
);
});
};
import ReactDOM from 'react-dom';
class App extends React.Component {
render() {
return (
&lt;div&gt; Your App injected to DOM correctly! &lt;/div&gt;
)
}
}
// Message Listener function
chrome.runtime.onMessage.addListener((request, sender, response) =&gt; {
// If message is injectApp
if(request.injectApp) {
// Inject our app to DOM and send response
injectApp();
response({
startedExtension: true,
});
}
});
function injectApp() {
const newDiv = document.createElement("div");
newDiv.setAttribute("id", "chromeExtensionReactApp");
document.body.appendChild(newDiv);
ReactDOM.render(&lt;App /&gt;, newDiv);
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
