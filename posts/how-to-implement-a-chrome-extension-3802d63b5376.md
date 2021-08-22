---
card: "/images/default.jpg"
tags: [JavaScript]
description: "We all like surfing the web. And we all like things to be at "
author: "Milad E. Fahmy"
title: "How to implement a Chrome Extension"
created: "2021-08-16T10:10:16+02:00"
modified: "2021-08-16T10:10:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development tag-tech tag-programming tag-chrome-extension ">
<header class="post-full-header">
<h1 class="post-full-title">How to implement a Chrome Extension</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/07/1_IrKrGVmSj1DVh6kIsfqYyA.jpeg 300w,
/news/content/images/size/w600/2019/07/1_IrKrGVmSj1DVh6kIsfqYyA.jpeg 600w,
/news/content/images/size/w1000/2019/07/1_IrKrGVmSj1DVh6kIsfqYyA.jpeg 1000w,
/news/content/images/size/w2000/2019/07/1_IrKrGVmSj1DVh6kIsfqYyA.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/07/1_IrKrGVmSj1DVh6kIsfqYyA.jpeg" alt="How to implement a Chrome Extension">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>We all like surfing the web. And we all like things to be at the touch of our fingertips. Why not create something that caters to these two absolute truths?</p><p>In this article, I’ll explain the building blocks of a Chrome extension. Afterwards, you’ll just have to think of a good idea as an excuse to make one.</p><h3 id="why-chrome">Why Chrome?</h3><p>Chrome is by far the most popular web browser. <a href="https://en.wikipedia.org/wiki/Usage_share_of_web_browsers" rel="noopener">Some estimations are as high as<strong> 59%</strong></a>. So, if you want to reach as many people as you can, developing a Chrome extension is the best way to do it.</p><p>⚠️ To be able to publish a Chrome extension, you need to have a developer account which entails a <a href="https://developer.chrome.com/webstore/publish" rel="noopener">$5 one-time signup fee</a>.</p><p>Each Chrome extension should have these components: the <strong>manifest file</strong>, <strong>popup.html</strong> and <strong>popup.js</strong> and a<strong> background</strong> script. Lets take a look at them.</p><h3 id="what-makes-up-a-chrome-extension">What makes up a Chrome extension?</h3><h4 id="the-manifest-file">The Manifest File</h4><p>What is a manifest file? It is a text file in JSON (<a href="https://en.wikipedia.org/wiki/JSON" rel="noopener">JavaScript Object Notation</a>) format that contains certain details about the extension you will be developing.</p><p>Google uses this file to acquire details about your extension when you will publish it. There are <strong>required</strong>, <strong>recommended </strong>and <strong>optional </strong>fields.</p><h4 id="required">Required</h4><pre><code class="language-js">{
"manifest_version": 2,
"name": "My Chrome Extension",
"version": "1.0",
"default_locale": "en"
}</code></pre><ul><li><code>manifest_version</code> - Version of the manifest file format. As of Chrome 18, version 1 is deprecated</li><li><code>name</code> - Can be up to 45 characters. Used to display your extension’s name in the following places: Install dialog, Extension management UI, Chrome Web Store</li><li><code>version</code> - Version of your Chrome Extension. Can be up to four digits separated by dots (e.g., 1.0.0.0)</li><li><code>default_locale</code> - This folder resides inside the <code>_locals</code> folder and it contains the default string literals. The <code>_locals</code> folder is used for internationalization (allowing your extension to support multiple languages). It is a required field if a <code>_locals</code> folder exists, otherwise, it should not be present</li></ul><p>If you want to support multiple languages, read more <a href="https://developer.chrome.com/extensions/i18n" rel="noopener">here</a>.</p><h4 id="recommended">Recommended</h4><pre><code class="language-js">  "description": "A plain text description",
"author": "Your Name Here",
"short_name": "shortName",
"icons": {
"128":"icon128.png",
"48":"icon48.png",
"16":"icon16.png"
},</code></pre><ul><li><code>description</code> - You can use up to 132 characters to describe the extension</li><li><code>short_name</code> - Limited to 12 characters, it is used in cases where there is not enough space to display the full name of the extension (App Launcher and New Tab Page)</li><li><code>icons</code> - The icons that represent the extension. <strong>Always include a 128X128 icon</strong> because it is used by the Chrome Web Store and during the installation of your extension</li></ul><p>Optional fields are case specific, so we won’t go into them in this article.</p><p>After covering the data needed for the manifest file, we can now move on to where we will actually be writing code for our extension, <strong>Popup and Background</strong>.</p><h4 id="popup-and-background">Popup and Background</h4><p>The popup refers to the main page users see when using your extension. It consists of two files: <strong>Popup.html</strong> and a JavaScript file, <strong>Popup.js</strong>.</p><p>Popup.html is the layout file for how your extension will look like. Depending on what your extension will do, the markup of this file will change.</p><p>A background script is the only one that can interact with events that occur and use the Chrome API. To use background scripts you need to add the following to your manifest.json file:</p><pre><code class="language-js">{
"manifest_version": 2,
"name": "My Chrome Extension",
"version": "1.0",
"background":{
"scripts": ["yourScript.js"],
"persistent": false
}
&lt;head&gt;
&lt;title&gt;Chrome Extension Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Hello From Extension&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><h3 id="putting-it-all-together">Putting It All Together</h3><h4 id="override-new-tab">Override New Tab</h4><pre><code class="language-js">//In manifest.json
{
"name": "ChromeExampleNewTab",
"version": "1.0",
"manifest_version": 2,
"chrome_url_overrides": {
"newtab": "popup.html"
},
"browser_action": {},
"permissions":[
"tabs"
],
"background":{
"scripts": ["background.js"],
"persistent": false
}
}
//In background.js
chrome.browserAction.onClicked.addListener(function(tab) {
chrome.tabs.create({'url': chrome.extension.getURL('popup.html')}, function(tab) {
// Tab opened.
});
});</code></pre><h4 id="open-in-the-current-tab">Open In The Current Tab</h4><pre><code class="language-js">//In manifest.js
{
"name": "ChromeExample",
"version": "1.0",
"manifest_version": 2,
"browser_action": {
"default_popup": "popup.html"
}
}</code></pre><p>Notice how we have overridden the <code>browser_action</code> key in both examples.</p><p>We have to do this, since we don’t want the browser to open a new tab in the regular fashion.</p><p>Also, since if we want to open a new tab with our extension, we must add a permissions key to the manifest and specify the tabs value. This lets the browser know we need the user’s permission to overwrite the default behavior of opening a new tab.</p><p>There is a whole lot more to Chrome extensions (messaging, context menus and storage to name a few). I have hopefully given you some insight into Chrome extensions. Maybe just enough to intrigue you to make one of your own!</p><p>And while you are at it, check one I have made <a href="https://chrome.google.com/webstore/detail/gifted/jmhifaldhcbhfdgdbneekdaloednddco" rel="noopener">here</a>.</p>
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
