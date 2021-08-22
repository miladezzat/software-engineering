---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9ecf740569d1a4ca3f4d.jpg"
tags: [JavaScript]
description: JavaScript Location.reload() method provides means to reload
author: "Milad E. Fahmy"
title: "Location Reload Method: How to Reload a Page in JavaScript"
created: "2021-08-15T19:31:54+02:00"
modified: "2021-08-15T19:31:54+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">Location Reload Method: How to Reload a Page in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ecf740569d1a4ca3f4d.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ecf740569d1a4ca3f4d.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ecf740569d1a4ca3f4d.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ecf740569d1a4ca3f4d.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ecf740569d1a4ca3f4d.jpg" alt="Location Reload Method: How to Reload a Page in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>JavaScript <code>Location.reload()</code> method provides means to reload the page at current URL.</p>
<p>The syntax is the following:</p>
<p><code>object.reload(forcedReload);</code>, where <code>forceReload</code> is an optional parameter.</p>
<p>To simply reload the page, you can input <code>window.location</code> as object.</p>
<p>Optional parameters <code>force reload</code> is a boolean value, which if set to:</p>
<p><code>True</code> reloads the page from the server (e.g. does not store the data cached by the browser):</p><pre><code class="language-text">window.location.reload(true);</code></pre>
<p><code>False</code> reloads the page using the version of the page cached by the browser.</p><pre><code class="language-text">window.location.reload(false);</code></pre>
<p><code>False</code> is the default parameter, so if left blank, <code>object.reload()</code> reloads the page using the broswer’s cached data, i.e. is identical to using the method as <code>object.reload(false)</code>.</p>
<p>To create the effect of browser-provided “Refresh”-option, you may want to create HTML-button and do either of the following:</p>
<ul>
<li>attach <code>Location.reload()</code> to the HTML button-markup, like this:</li>
</ul><pre><code class="language-text">&lt;input type="button" value="Refresh Button" onClick="window.location.reload()"&gt; </code></pre>
<ul>
<li>assign on-click event to the button with the function that uses the method, where the button looks similar to</li>
</ul><pre><code class="language-text">&lt;button type="button" onClick="reloadThePage()"&gt;Refresh!&lt;/button&gt;</code></pre><pre><code class="language-text">&lt;script&gt;
function reloadThePage(){
window.location.reload();
}
&lt;/script&gt;</code></pre>
<h3 id="example-"><strong>Example:</strong></h3><pre><code class="language-javascript">// Reload the current resources from the server
window.location.reload(true);
// Reload the current resources from the browser's cache
window.location.reload();</code></pre>
<p>This will reload the page at the current URL from the server.</p>
<h4 id="more-information-"><strong>More Information:</strong></h4>
<ul>
<li><a href="https://developer.mozilla.org/docs/Web/API/Location/reload">MDN</a></li>
</ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
