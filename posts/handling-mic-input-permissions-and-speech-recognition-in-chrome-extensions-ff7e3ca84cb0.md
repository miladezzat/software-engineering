---
card: "https://cdn-media-1.freecodecamp.org/images/1*kCWG1pjJyxUfKwblYn1gKA.jpeg"
tags: [JavaScript]
description: by Palash Taneja
author: "Milad E. Fahmy"
title: "How to handle mic input permissions and speech recognition in Chrome extensions"
created: "2021-08-15T19:42:50+02:00"
modified: "2021-08-15T19:42:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tutorial tag-chrome tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to handle mic input permissions and speech recognition in Chrome extensions</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*kCWG1pjJyxUfKwblYn1gKA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*kCWG1pjJyxUfKwblYn1gKA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*kCWG1pjJyxUfKwblYn1gKA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*kCWG1pjJyxUfKwblYn1gKA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*kCWG1pjJyxUfKwblYn1gKA.jpeg" alt="How to handle mic input permissions and speech recognition in Chrome extensions">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Palash Taneja</p>
<h1 id="how-to-handle-mic-input-permissions-and-speech-recognition-in-chrome-extensions">How to handle mic input permissions and speech recognition in Chrome extensions</h1>
<p>This tutorial assumes that you have a basic understanding of Chrome extensions and the associated configuration files. If not, then you can refer to <a href="https://medium.freecodecamp.org/how-to-create-a-chrome-extension-part-1-ad2a3a77541" rel="noopener">this article</a> which sets up the files for this tutorial.</p>
<p>Setting up microphone recording permissions in a Chrome extension is a gray area. There is no officially documented way to do it, and developers are forced to use a “hack” to get mic permissions for their Chrome extension.</p>
<p>In this short article, we use the <code>options.html</code> page to get microphone permissions and use the popular <code><a href="https://github.com/TalAter/annyang" rel="noopener">annyang.js</a></code><a href="https://github.com/TalAter/annyang" rel="noopener"> library</a> for detecting speech from the user.</p>
<h3 id="1-creating-a-permissions-trigger-script-and-page">1. Creating a permissions trigger script and page</h3>
<p>To get around Chrome’s restrictions, we use a web page from our extension like <code>options.html</code> and<code>popup.html</code> to get mic permissions for the entire extension.</p>
<p>First, we need to create a JavaScript file to get mic permissions on a web page. I created a minimal file that requests permission to use the mic from chrome.</p><pre><code class="language-js">$(document).ready(function(){
navigator.mediaDevices.getUserMedia({audio: true})
});</code></pre>
<p>If you’re not a fan of using JQuery, then you can embed this JS code at the end of the HTML page file that you intend to use as a permission trigger.</p>
<p>For our extension, TalkToMe, we used <code>options.html</code> as our permission trigger page.</p>
<h3 id="2-opening-the-trigger-page-automagically">2. Opening the trigger page automagically</h3>
<p>The mic permission popup will only be opened if the trigger page was opened in the current browser session. Having the user manually open it everytime is bad UX. We created a background script to get around this.</p><pre><code class="language-js">setTimeout(() =&gt; {
navigator.mediaDevices.getUserMedia({ audio: true })
.catch(function() {
chrome.tabs.create({
url: chrome.extension.getURL("options.html"),
selected: true
})
});
}, 100);</code></pre>
<p>It tries to access the mic every 100 ms, and opens the permission-trigger page if the request is denied by Chrome.</p>
<p>For the script to work, you need to add it to your <code>manifest.json</code> with other background scripts.</p><pre><code class="language-js">...
"background": {
"scripts": [
..
"js/auto-trigger.js", // add the script here
..
],
"persistent": false
},
...</code></pre>
<h3 id="3-hooking-up-annyang-for-speech-recognition">3. Hooking up Annyang for speech recognition</h3>
<p>Annyang provides a versatile library for speech recognition, and it is 100% free to use.</p>
<p>It works on a command-based structure, in that it calls functions based on the user’s speech. This feature made it a perfect fit for TalkToMe.</p>
<p>You can add the <code>annyang.js</code> code to a background script and start using it. Here I am showing you the Hello World example from the docs.</p><pre><code class="language-js">if (annyang) {
// Let's define a command.
var commands = {
'hello': function() { alert('Hello world!'); }
};
// Add our commands to annyang
annyang.addCommands(commands);
// Start listening.
annyang.start();
}</code></pre>
<p>And ta-da, just like that you have replicated our hours of searching StackOverflow for adding mic permissions to your chrome extension.</p>
<p>If this tutorial helped you, we’d really ❤️ if you could give your thoughts on our extension <a href="https://chrome.google.com/webstore/detail/talktome/nefaaifpggpfdjlfhfbcgfcjimlgpocc" rel="noopener">TalkToMe</a>, even if you may not be a visually impaired user.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
