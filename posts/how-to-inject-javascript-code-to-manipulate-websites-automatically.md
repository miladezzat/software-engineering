---
card: "/images/default.jpg"
tags: [JavaScript]
description: As developers and users of the internet, we often come across
author: "Milad E. Fahmy"
title: "How to Inject JavaScript Code to Manipulate Websites Automatically"
created: "2021-08-15T19:30:06+02:00"
modified: "2021-08-15T19:30:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Inject JavaScript Code to Manipulate Websites Automatically</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/04/Untitled-1.jpg 300w,
/news/content/images/size/w600/2020/04/Untitled-1.jpg 600w,
/news/content/images/size/w1000/2020/04/Untitled-1.jpg 1000w,
/news/content/images/size/w2000/2020/04/Untitled-1.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/04/Untitled-1.jpg" alt="How to Inject JavaScript Code to Manipulate Websites Automatically">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>As developers and users of the internet, we often come across websites that display many pop-ups, from subscription requests to paywalls, advertisements to notifications, and so on.</p>
<p>Many times, we use those websites daily for all kinds of things, and seeing those pop-ups over and over gets old! </p>
<p>Developers can get around these by going to the console and finding selectors to manipulate the website's <a href="https://en.wikipedia.org/wiki/Document_Object_Model">document object model</a> (DOM) by adding or modifying CSS or JavaScript.</p>
<p>But now, thanks to Google Chrome and its extension store, anyone can inject code into any website automatically. We'll go through to the process step by step in this small guide.</p>
<h3 id="1-installing-the-extension-to-inject-the-code">1. Installing the Extension to Inject the Code</h3>
<p>The following only applies if you use <a href="https://google.com/chrome" rel="noopener">Google Chrome</a>. Install the extension <a href="https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija?hl=en" rel="noopener">custom JavaScript for websites</a>. This small extension allows you to run JavaScript on any website automatically, and it saves the code for future visits in your web browser.</p>
<p>First, visit the website with annoying pop-ups that you use often. For this tutorial, I am using The Washington Post’s website:</p>
<figcaption>Screenshot showing The Washington Post’s website with an article mentioning Andrew Yang, also Chrome’s developer tools.</figcaption>
</figure>
<h3 id="2-locating-dom-elements-and-creating-the-injection-code">2. Locating DOM Elements and Creating the Injection Code</h3>
<p>Open your Chrome developer tools by pressing F12, then identify the element with the pop-up. </p>
<p>In this example, the <code>iframe</code> element with ID <code>wallIframe</code> contains the pop-up with some fading background in the back.</p>
<p>Now, we’ll be using a small JavaScript snippet to add custom CSS and check if we can hide the pop-up. </p><pre><code class="language-javascript">/* DOM Manipulation
* If you want to update / add single style in DOM Element style attribute you can use this function:
* inject javascript after page reloads.
*/
function setCssStyle(el, style, value) {
var result = el.style.cssText.match(new RegExp("(?:[;\\s]|^)(" +
style.replace("-", "\\-") + "\\s*:(.*?)(;|$))")),
idx;
if (result) {
idx = result.index + result[0].indexOf(result[1]);
el.style.cssText = el.style.cssText.substring(0, idx) +
style + ": " + value + ";" +
el.style.cssText.substring(idx + result[1].length);
} else {
el.style.cssText += " " + style + ": " + value + ";";
}
}
var element = document.getElementById("wallIframe");
setCssStyle(element, "display","none !important");</code></pre>
<p>As you can see, in the code above we are highlighting the element <code>wallIframe</code> and hiding it by adding inline CSS.</p>
<h3 id="3-testing-the-injection-code">3. Testing the Injection Code</h3>
<p>Test your code in the Chrome developers’ console to make sure that it works.</p>
<figcaption>Screenshot showing The Washington Post’s website with an article mentioning Andrew Yang, also Chrome’s developer tools.</figcaption>
</figure>
<p>As you can see above, the code works. </p>
<p>Now it's time to add it to the extension, <a href="https://chrome.google.com/webstore/detail/custom-javascript-for-web/poakhlngfciodnhlhhgnaaelnpjljija?hl=en" rel="noopener">custom JavaScript for websites</a>, and test if the code will work on future visits. To add it, left-click on the extension icon on your address bar and add the custom snippet, then click save.</p>
<p>The page will immediately reload to try and test your added code.</p>
<figcaption>Screenshot showing The Washington Post’s website with an article mentioning Andrew Yang, also Chrome’s developer tools.</figcaption>
</figure>
<h2 id="4-the-injection-code-didn-t-work-what-now">4. The Injection Code Didn't Work, What Now?</h2>
<p>After testing it, the iframe didn’t disappear as it did when we tested it in the console. One of the reasons could be that the iframe loads after X seconds of the page loading. </p>
<p>We could dig in the network log to see if that’s the case. But for time-saving measures, we are going to try adding a timeout function to our original snippet to see if that helps.</p><pre><code class="language-javascript">setTimeout(
function() {
function setCssStyle(el, style, value) {
var result = el.style.cssText.match(new RegExp("(?:[;\\s]|^)(" +
style.replace("-", "\\-") + "\\s*:(.*?)(;|$))")),
idx;
if (result) {
idx = result.index + result[0].indexOf(result[1]);
el.style.cssText = el.style.cssText.substring(0, idx) +
style + ": " + value + ";" +
el.style.cssText.substring(idx + result[1].length);
} else {
el.style.cssText += " " + style + ": " + value + ";";
}
}
var element = document.getElementById("wallIframe");
setCssStyle(element, "display", "none !important");
}, 10000);</code></pre>
<p>Now the code waits 10 seconds before it executes, and <em>voilà </em>it works perfectly<em>.</em></p>
<p>You can also add an event listener to wait for the page to load completely.</p>
<h3 id="5-final-thoughts">5. Final Thoughts</h3>
<p>For instance:</p><pre><code class="language-javascript">document.addEventListener("DOMContentLoaded", function() {
// Your function goes here
}</code></pre>
<p>But, if we add the pop-up code after X seconds, the function above won’t work, so better stick to the timeout function.</p>
<p>You can also use the extension to add many other cool snippets, such as to block ads, block pop-ups, increase the standard font of the website, increase responsiveness, update its appearance, and so on. Once the JavaScript snippets are added, they will always run on future visits to those websites. &nbsp;</p>
<blockquote><em>A special thanks to Abbey Rennemeyer from freeCodeCamp for editorial feedback in preparation of this article.</em></blockquote>
<p><strong>DISCLAIMER:</strong> The views expressed in this article are those of the author(s) and do not represent the views of Carnegie Mellon University, nor other companies (directly or indirectly) associated with the author(s). These writings are not intended to be final products, yet rather a reflection of current thinking, along with being a catalyst for discussion and improvement.</p>
<p>You can find me on: <a href="https://www.robertoiriondo.com/" rel="noopener nofollow">My personal website</a>, <a href="https://medium.com/@robiriondo" rel="noopener">Medium</a>, <a href="https://www.instagram.com/robiriondo/hl=en">Instagram</a>, <a href="https://twitter.com/robiriondo?lang=en">Twitter</a>, <a href="https://www.facebook.com/robiriondo/">Facebook</a>, <a href="https://www.linkedin.com/in/robiriondo" rel="noopener nofollow">LinkedIn</a> or through my <a href="https://www.daibuilds.com/seo-services/">SEO company</a>.</p>
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
