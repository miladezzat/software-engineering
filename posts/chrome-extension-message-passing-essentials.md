---
card: "/images/default.jpg"
tags: [Chrome Extension]
description: In the world of web development, Chrome extensions are a pret
author: "Milad E. Fahmy"
title: "Chrome Extension Tutorial: How to Pass Messages from a Page's Context"
created: "2021-08-15T19:27:09+02:00"
modified: "2021-08-15T19:27:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-chrome-extension tag-chrome tag-messaging tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">Chrome Extension Tutorial: How to Pass Messages from a Page's Context</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/02/DDF5E684-AEF5-45E6-9421-E5D4360E9A85-1.jpg 300w,
/news/content/images/size/w600/2021/02/DDF5E684-AEF5-45E6-9421-E5D4360E9A85-1.jpg 600w,
/news/content/images/size/w1000/2021/02/DDF5E684-AEF5-45E6-9421-E5D4360E9A85-1.jpg 1000w,
/news/content/images/size/w2000/2021/02/DDF5E684-AEF5-45E6-9421-E5D4360E9A85-1.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/02/DDF5E684-AEF5-45E6-9421-E5D4360E9A85-1.jpg" alt="Chrome Extension Tutorial: How to Pass Messages from a Page's Context">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In the world of web development, Chrome extensions are a pretty handy set of tools to have around. </p>
<p>Whether you use them to add headers to simple requests or to scrape important data from the DOM, extensions help provide extra functionality that makes life easier.</p>
<p>I started playing around with developing a Chrome extension for a use-case I had in mind at work. It was then that I stumbled upon the way we pass around certain data from a web page to an extension. And the lack of a simplified guide made me write this article. </p>
<p>We do have the <a href="https://developer.chrome.com/docs/extensions/reference/">Chrome API documentation</a>, and it is indeed very thorough. But I consider myself to be more of a visual learner, and being able to visualize how we pass messages between the extension scripts helped simplify the overall development.</p>
<blockquote><strong>Note:</strong> This article makes use of Manifest V2 instead of V3. The major difference between the two is the usage of service workers in V3 instead of background pages and related actions. </blockquote>
<h2 id="message-passing-interaction-between-scripts">Message Passing: Interaction Between Scripts</h2>
<p>An extension, as the name suggests, is like a layer on top of the existing webpage you're trying to access. The browser acts as the container.</p>
<p>It mainly comprises the following scripts:</p>
<ul>
<li><strong>Popup Script </strong>- Local JavaScript file for the extension DOM</li>
<li><strong>Background Script </strong>- Provides persistence and handles background events</li>
<li><strong>Content Script</strong> - Scripts that run in isolation in the context of the web page</li>
<li><strong>Injected Script</strong> - Scripts that are programmatically injected into the web page </li>
</ul>
<p>Normally, if you have to merely deal with the DOM content, then the way the extension is developed is relatively straightforward. </p>
<p>The raw HTML is already available to the content script and all you need to do is pass it to the popup script. </p>
<p>However, if you need to access the page's variables and functions, the process gets a little tricky.</p>
<p>The variables and functions available in the page context, say in the <code>window</code> object, are not accessible to the content scripts since they tend to run in a special JavaScript environment. They have access to only the DOM of the page but not the variables and functions. </p>
<p>To access a page's variables and functions, we inject scripts by appending them to the DOM. This makes the browser assume that it is run in the context of the web page. This in turn provides the injected script access to the local variables and functions.</p>
<p>Since Chrome extensions are event-driven because of their architecture, once the injected scripts have access to the page's variables and functions, they can pass it to the content script. </p>
<p>The content script then passes the these objects to the background page. </p>
<p>And finally, the popup script is able to call onto the background page using the Extension API and pass it to the Extension DOM. </p>
<figcaption>Message Passing Overview</figcaption>
</figure>
<p>Now, we will build a simple Performance Watcher extension that reads the performance data from the global window object of a page and maps the essential metrics for the user to see. Let's get into the code then.</p>
<h2 id="enough-talk-show-me-the-code">Enough Talk, Show Me The Code</h2>
<p>You can find the complete code repository for the project <a href="https://github.com/tejazz/article-snippets/tree/master/chrome-extn-message-passing">here</a>. Let's quickly run through the primary files and the important functionalities they offer.</p>
<h3 id="the-manifest-file">The Manifest File</h3>
<p>Every Chrome Extension needs a <code>manifest</code> file. It is basically a JSON-formatted file that provides a set of metadata so the browser can recognize the permissions that need to be granted and the likely operational reach of the extension. </p>
<p>Here is the manifest used for our application.</p>
<figcaption>manifest.json: metadata for your extension</figcaption>
</figure>
<p>Some of the important properties we need to focus on are the following:</p>
<ul>
<li> <code>background</code> - Takes an array of scripts that would be run in the background page. </li>
<li><code>content-scripts</code> - Includes an array of content scripts we wish to run as part of the web page's context. </li>
<li> <code>web_accessible_resources</code> - An array of packaged resources expected to be used in a web page's context. For example, an image we intend to embed in a page or a custom script we want to inject.</li>
<li><code>permissions</code> - Allows your extension to gain access to certain Chrome APIs like <a href="https://developer.chrome.com/docs/extensions/reference/tabs/#type-Tab">tabs</a> in this case. </li>
</ul>
<h3 id="the-content-script">The Content Script</h3>
<p>Content Scripts have easy access to the DOM of the web page. We make use of the content script to append our custom script – <code>inject-script.js</code> – into the DOM.</p>
<figcaption>content-script.js: inject custom script into the DOM</figcaption>
</figure>
<p>The content script also simultaneously continues to listen for any message being sent upstream from the custom script. </p>
<p>As soon as we get a message from the injected script, we run a quick check on the data received and verify whether our extension is installed. Once done, we simply use Chrome's <a href="https://developer.chrome.com/docs/extensions/reference/runtime/">Runtime API</a> to send the data received forward to the background page. </p>
<figcaption>content-script.js: send the required data to the background page</figcaption>
</figure>
<h3 id="the-injected-script">The Injected Script</h3>
<p>The custom script can access global variables and functions like the <code>window</code> object. We map only the properties we require. </p>
<figcaption>inject-script.js: procure required object from the page's JS context</figcaption>
</figure>
<p>The message from the custom script is communicated safely to the content script using the <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage">window.postMessage</a></code> function. In this case, a <code>setInterval</code> function is used to dynamically update the properties we are observing.</p>
<figcaption>inject-script.js: send the gathered data to the content-script</figcaption>
</figure>
<h3 id="the-background-script">The Background Script</h3>
<p>The background script listens for any message transmitted by the content script using the Runtime API. The <code>window</code> object of the background page is then updated with the <code>tab.id</code> acting as the identifier. </p>
<figcaption>background.js: listen for incoming message from the content-script</figcaption>
</figure>
<h3 id="the-popup-script">The Popup Script</h3>
<p>The popup script is where we finally read the data we had procured from our custom script. It is also the place where we code any necessary JavaScript operations.</p>
<p>The background page is retrieved using the <code>getBackgroundPage</code> method of the Extension API. The active tab's id is queried using the <code>tabs.query</code> method of the Tabs API in order to correctly extract the relevant data.</p>
<figcaption>popup.js: reading the global object stored in the background page context</figcaption>
</figure>
<p>In this way, we are able to finally receive and map the data we need – <code>performance</code> in our case – efficiently in our extension.</p>
<p>The UI styling and other cosmetic code are available in the repository, for further reference.</p>
<h2 id="final-thoughts">Final Thoughts</h2>
<p>Message passing is an essential concept when it comes to developing a Chrome extension. This is just one of the multiple ways in which you can communicate between scripts. </p>
<p>I spent a few hours in order to figure out how it would work for my use case. Hopefully, this simple walkthrough and the visual representation saves you some time. </p>
<p>I would suggest playing around with the code for a bit. If you have any questions, feel free to reach out to me on <code><a href="https://www.linkedin.com/in/tarique-ejaz/">LinkedIn</a></code>.</p>
<p>In the meantime, keep coding.</p>
<p></p>
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
