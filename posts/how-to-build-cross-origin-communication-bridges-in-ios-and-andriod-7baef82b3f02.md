---
card: "https://cdn-media-1.freecodecamp.org/images/1*aVKPXp6zfjMErb99NPZfKw.jpeg"
tags: [iOS]
description: "I was working on a certain project at work, in which I needed"
author: "Milad E. Fahmy"
title: "How to build cross-origin communication bridges in iOS and Android"
created: "2021-08-16T10:12:17+02:00"
modified: "2021-08-16T10:12:17+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-ios tag-javascript tag-android tag-web-development tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to build cross-origin communication bridges in iOS and Android</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*aVKPXp6zfjMErb99NPZfKw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*aVKPXp6zfjMErb99NPZfKw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*aVKPXp6zfjMErb99NPZfKw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*aVKPXp6zfjMErb99NPZfKw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*aVKPXp6zfjMErb99NPZfKw.jpeg" alt="How to build cross-origin communication bridges in iOS and Android">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I was working on a certain project at work, in which I needed to connect several varying components via messages. Each had its own logic and code language. This made me want to understand all the ways different platforms enable communication.</p><p>This article’s aim is to explain these cross-origin communication bridges and present simple, yet informative, examples to achieve them.</p><p>There will also be plenty of bridge puns ?</p><p>YOU WERE WARNED.</p><p>If you just want to get your hands dirty with the code, there are links to the GitHub repositories at the bottom of this article.</p><p>Typically, the JavaScript you write will run inside a browser. On <strong>iOS</strong>,<strong> </strong>it can either be a UIWebView or a WKWebView. On <strong>Android</strong>, a WebView.</p><p>Since iOS can be the more exasperating of the platforms, I’ll describe the communication bridge there first.</p><h3 id="london-bridge-is-falling-down-ios-">London Bridge is Falling Down (iOS)</h3><p>From iOS 8 onwards, Apple recommends using WKWebView instead of UIWebView, so the following will only address the bridge on a <strong>WKWebView</strong>.</p><p>For a UIWebView reference, please go <a href="https://stackoverflow.com/questions/5671742/send-a-notification-from-javascript-in-uiwebview-to-objectivec" rel="noopener">here</a>.</p><p>To send messages from the WKWebView to JavaScript, you use the method below:</p><pre><code class="language-android">
- (void)evaluateJavaScript:(NSString *)javaScriptString
completionHandler:(void (^)(id, NSError *error))completionHandler;</code></pre><p>To receive messages from JavaScript inside your WKWebView, you must do the following:</p><ol><li>Create an instance of <a href="https://developer.apple.com/documentation/webkit/wkwebview/1414979-configuration?language=objc" rel="noopener">WKWebViewConfiguration</a></li><li>Create an instance of <a href="https://developer.apple.com/documentation/webkit/wkusercontentcontroller?language=objc" rel="noopener">WKUserContentController</a></li><li>Add a script message handler to your configuration (this part bridges the gap). This action also registers your message handler on the window object under the following path: <strong>window.webkit.messageHandlers.MSG_HANDLER_NAME</strong></li><li>Make the class implement the message handler protocol by adding &lt;WKScriptMessageHandler&gt; at the top of the file</li><li>Implement <a href="https://developer.apple.com/documentation/webkit/wkscriptmessagehandler/1396222-usercontentcontroller?preferredLanguage=occ" rel="noopener">userContentController:didReceiveScriptMessage</a> (this method handles receiving the messages from JavaScript)</li></ol><h3 id="building-bridges">Building Bridges</h3><p>Let’s say we have the following HTML page set up:</p><pre><code class="language-html">&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Javascript-iOS Communication&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;script&gt;
window.webkit.messageHandlers.myOwnJSHandler.postMessage("Hello World!");
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>And in our native code we implement the steps described above:</p><pre><code class="language-android">#import &lt;UIKit/UIKit.h&gt;
#import &lt;WebKit/WebKit.h&gt;
// 4
@interface ViewController : UIViewController &lt;WKScriptMessageHandler&gt;
@property(nonatomic, strong) WKWebView *webview;
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
