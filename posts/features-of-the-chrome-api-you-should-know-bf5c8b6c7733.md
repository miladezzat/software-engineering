---
card: "https://cdn-media-1.freecodecamp.org/images/0*Got1zk0gpNuHC0V1"
tags: [JavaScript]
description: "So you think you know your way around building a Chrome exten"
author: "Milad E. Fahmy"
title: "Features of the Chrome API you should know"
created: "2021-08-15T23:46:11+02:00"
modified: "2021-08-15T23:46:11+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-chrome tag-development tag-coding tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Features of the Chrome API you should know</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*Got1zk0gpNuHC0V1 300w,
https://cdn-media-1.freecodecamp.org/images/0*Got1zk0gpNuHC0V1 600w,
https://cdn-media-1.freecodecamp.org/images/0*Got1zk0gpNuHC0V1 1000w,
https://cdn-media-1.freecodecamp.org/images/0*Got1zk0gpNuHC0V1 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*Got1zk0gpNuHC0V1" alt="Features of the Chrome API you should know">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>So you think you know your way around building a Chrome extension? Well, that’s all fine and dandy, but have you heard about context menus? Messaging between scripts? Adding a badge to your extension’s icon? If all this sounds fascinating, you’re in luck. We’ll go over some cool features the Chrome API grants us.</p><p>If you are interested in reading about how to build a Chrome extension, you can read my previous article <a href="https://medium.freecodecamp.org/how-to-implement-a-chrome-extension-3802d63b5376" rel="noopener">here</a>. If you want to know how to publish one, you can read all about it <a href="https://medium.freecodecamp.org/chrome-extension-how-to-publish-dd8400a3d53" rel="noopener">here</a></p><h3 id="context-menu"><a href="https://developer.chrome.com/extensions/contextMenus" rel="noopener">Context Menu</a></h3><p>To put it simply, the context menu is the menu that appears when you right-click anywhere inside the browser. You can add your Chrome extension to that menu with a few simple steps:</p><ol><li>Add<strong> context-menus</strong> to the <strong>permissions</strong> key in the manifest</li><li>Add a 16x16 icon (as it will be used in the context menu)</li><li>Add the following code to your background script:</li></ol><h3 id="storage"><a href="https://developer.chrome.com/extensions/storage" rel="noopener">Storage</a></h3><p>Similar to <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API#localStorage" rel="noopener">localStorage</a>, the Chrome API allows saving data as objects, which persists even when the browser is closed and reopened. Here are the necessary steps to allow storage usage in your extension:</p><ol><li>Add<strong> storage </strong>to the <strong>permissions</strong> key in the manifest</li><li>To put data in the storage, you use:</li></ol><p>3. To pull data from the storage you use:</p><blockquote>⚠️ Do NOT put sensitive user data in the storage since it is not encrypted</blockquote><h3 id="messaging"><a href="https://developer.chrome.com/extensions/messaging#simple" rel="noopener">Messaging</a></h3><p>Chrome has another nifty feature which lets you pass messages along between scripts. For example, in your extension, you have your popup.js file that deals with things related to the popup window and you have a background script. If you wanted to have those two scripts communicate with each other you could use the following methods:</p><p><strong>SendMessage</strong></p><p><strong>Listen In On Incoming Messages</strong></p><h3 id="badges">Badges</h3><p>You know them, you love them, and you can add them to the icon of your extension. Make sure to be aware that due to its small size, the text you want to display is limited to <strong><em>four characters</em></strong>.</p><p>To set the background color of the badge you use:</p><p>To set the text of the badge you use:</p><p>In both methods, the callback is an optional parameter you can use after the method finishes its action.</p><p>Have other Chrome APIs you want to know about? Want to ask something? Feel free to reach out.</p><p><em>If you liked this article, clap away so that others can enjoy it as well! ?</em></p>
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
