---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9cb5740569d1a4ca33be.jpg"
tags: [JavaScript]
description: As a developer you will often want to debug code. You might h
author: "Milad E. Fahmy"
title: "How to Debug JavaScript with your Browser's Devtools"
created: "2021-08-15T19:30:48+02:00"
modified: "2021-08-15T19:30:48+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-debugging tag-browsers tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">How to Debug JavaScript with your Browser's Devtools</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9cb5740569d1a4ca33be.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9cb5740569d1a4ca33be.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9cb5740569d1a4ca33be.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9cb5740569d1a4ca33be.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9cb5740569d1a4ca33be.jpg" alt="How to Debug JavaScript with your Browser's Devtools">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>As a developer you will often want to debug code. You might have already used <code>console.log</code> in some of the challenges, which is the simplest way to debug.</p>
<p>In this article we will tell you some of the coolest tricks, to debug using the native debug-tools of the browsers.</p>
<h2 id="a-brief-insight-into-the-freecodecamp-code-editor-"><strong>A brief insight into the FreeCodeCamp Code Editor:</strong></h2>
<p>Before jumping into debugging lets leak out some secret facts about that <em>awesome code checking engine</em> at FCC.</p>
<p>We use a customized <a href="http://codemirror.net/mode/javascript/index.html" rel="nofollow">CodeMirror</a>, as the code editor. A <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval" rel="nofollow"><code>eval()</code> function</a> is used to evaluate the JavaScript code represented as a string from the editor. When <code>eval()</code> is called, browsers will natively execute your code. We will learn more why this secret is important in later sections of this article.</p>
<h2 id="now-moving-on-to-the-tricks-"><strong>Now moving on to the tricks:</strong></h2>
<h2 id="google-chrome-devtools"><strong>Google Chrome DevTools</strong></h2>
<p>Google Chrome is one of the most popular browsers with a built-in JavaScript engine called <a href="https://developers.google.com/v8/" rel="nofollow">V8</a>, and offers a great toolset for developers called <a href="https://developer.chrome.com/devtools" rel="nofollow">Chrome DevTools</a>. Visiting their <a href="https://developer.chrome.com/devtools/docs/javascript-debugging" rel="nofollow">Complete JavaScript debugging guide</a> is highly recommended.</p>
<h3 id="1-basics-of-devtools"><strong>1 : Basics of DevTools</strong></h3>
<h4 id="launching-the-chrome-devtools"><strong>Launching the Chrome DevTools</strong></h4>
<p>Hit <code>F12</code></p>
<p>. Alternatively you can press</p>
<p><code>Ctrl</code> + <code>Shift</code> + <code>I</code></p>
<p>on Windows and Linux or</p>
<p><code>Cmd</code> + <code>Shift</code> + <code>I</code></p>
<p>on Mac, or If you just love your mouse go to <code>Menu &gt; More Tools &gt; Developer Tools</code>.</p>
<h4 id="getting-to-know-the-sources-and-the-console-tabs-"><strong>Getting to know the <code>Sources</code> and the <code>console</code> tabs.</strong></h4>
<p>These two tabs are the perhaps going to be your best friends while debugging. The <code>Sources</code> tab can be used to visualize all the scripts that’s on the webpage you are visiting. This tab has sections for the code window, file tree, call stack &amp; watch windows, etc.</p>
<p>The <code>console</code> tab is where all of the log output goes. Additionally you can use the console tab’s prompt to execute JavaScript code. Its kind of synonymous to the command prompt on Windows, or terminal on Linux.</p>
<p><em>Tip : Toggle the console anytime in the DevTools using <code>Esc</code> key.</em></p>
<h3 id="2-common-shortcuts-and-features"><strong>2 : Common Shortcuts and features</strong></h3>
<p>While you can visit the <a href="https://developers.google.com/web/tools/chrome-devtools/iterate/inspect-styles/shortcuts" rel="nofollow">complete list of shortcuts</a>, below are a few that are most used:</p>
<p>Feature Windows, Linux Mac<br>Search for a keyword, regex is supported. <code>Ctrl</code>+<code>F``Cmd</code>+<code>F</code><br>Search and Open a file <code>Ctrl</code>+<code>P``Cmd</code>+<code>P</code><br>Jump to line <code>Ctrl</code>+<code>G</code>+<code>:line_no``Cmd</code>+<code>G</code>+<code>:line_no</code><br>Add a breakpoint <code>Ctrl</code>+<code>B</code>, or click on the line no.<code>Cmd</code>+<code>B</code>, or click on the line no.<br>Pause / resume script execution <code>F8</code> <code>F8</code><br>Step over next function call <code>F10</code> <code>F10</code><br>Step into next function call <code>F11</code> <code>F11</code></p>
<h3 id="3-using-a-source-map-for-our-code"><strong>3 : Using a Source Map for our Code</strong></h3>
<p>One of the coolest feature that you will love is <a href="https://developer.chrome.com/devtools/docs/javascript-debugging#breakpoints-dynamic-javascript" rel="nofollow">debugging Dynamic Script</a>, on the fly, via <a href="https://developer.chrome.com/devtools/docs/javascript-debugging#source-maps" rel="nofollow">Source Maps</a>.</p>
<p>Every script can be visualized in the Source tab of the DevTools. The source tab has all the JavaScript source files. But the code from the code editor is executed via <code>eval()</code>in a container simply called a virtual machine(VM) within the browser process.</p>
<p>As you might have guessed by now is that our code is actually a script that doesn’t have a file name. So we don’t see that in the Source tab.</p>
<p><strong><strong><em>Here comes the hack!</em></strong></strong></p>
<p>We must leverage <code>Source Maps</code> to assign a name to the JavaScript from our editor. Its pretty simple:</p>
<p>Lets say we are on the <a href="https://www.freecodecamp.com/challenges/factorialize-a-number" rel="nofollow">Factorialize</a> challenge, and our code looks like this:</p><pre><code class="language-text">function factorialize(num) {
if(num &lt;= 1){
...
}
factorialize(5);</code></pre>
<p>All we need to do is add <code>//# sourceURL=factorialize.js</code> to the top of the code, i.e the first line:</p><pre><code class="language-text">//# sourceURL=factorialize.js
function factorialize(num) {
if(num &lt;= 1){
...</code></pre>
<p><strong><strong><em>And Eureka that’s it!</em></strong></strong></p>
<p>Now open up the DevTools and search for the file name. Add break points, Debug away and enjoy!</p>
<h2 id="more-info-on-debugging-">More info on debugging:</h2>
<ul>
<li><a href="/news/the-beginner-bug-squashing-guide/">Beginner's guide to bug squashing</a></li>
<li><a href="/news/debugging-javascript-for-beginners-5d4ac15dd1cd/">Debugging tips and tricks for beginners</a></li>
<li><a href="/news/how-to-go-beyond-console-log-and-get-the-most-out-of-your-browsers-debugging-console-e185256a1115/">How to get the most out of your browser's debugging console</a></li>
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
