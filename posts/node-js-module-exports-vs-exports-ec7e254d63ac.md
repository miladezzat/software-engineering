---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9cb7b4740569d1a4cae663.jpg"
tags: [JavaScript]
description: "by lazlojuly"
author: "Milad E. Fahmy"
title: "Node.js module.exports vs. exports"
created: "2021-08-16T10:27:59+02:00"
modified: "2021-08-16T10:27:59+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-web-development tag-programming tag-software-development ">
<header class="post-full-header">
<h1 class="post-full-title">Node.js module.exports vs. exports</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9cb7b4740569d1a4cae663.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9cb7b4740569d1a4cae663.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9cb7b4740569d1a4cae663.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9cb7b4740569d1a4cae663.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9cb7b4740569d1a4cae663.jpg" alt="Node.js module.exports vs. exports">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by lazlojuly</p><h4 id="what-are-they-how-to-use-them-and-how-not-to-use-them">What are they, how to use them and how not to use them</h4><p>(Note that this article was written after the Node.js 6.1.0 release)</p><h4 id="tl-dr"><strong>TL;DR</strong></h4><ul><li>Think of module.exports as the variable that gets returned from require(). It is an empty object by default, and it is fine to change to anything.</li><li>Exports? Well, “exports” itself is never returned!<strong> </strong>It is just a reference to module.exports; a convenience variable to help module authors write less code. Working with its properties is safe and recommended.</li></ul><pre><code>exports.method = function() {…} </code></pre><pre><code>vs.</code></pre><pre><code>module.exports.method = function() {…}</code></pre><h3 id="a-simple-module-example">A simple module example</h3><p>First, we need an example codebase. Let’s start with a simple calculator:</p><p>Usage:</p><h3 id="the-module-wrapper">The module wrapper</h3><p>Node.js <strong>internally wraps</strong> all require()-ed modules in a function wrapper:</p><h3 id="the-module-object">The module object</h3><p>Variable “<strong>module</strong>” is an object representing the current module. It <strong>is</strong> <strong>local to each module</strong> and it is also private (only accessible from module code):</p><h3 id="module-exports">Module.exports</h3><ul><li><strong>It is the object reference that gets returned from the require() calls.</strong></li><li>It is automatically created by Node.js.</li><li>It is just a reference to a plain JavaScript object.</li><li>It is also empty by default (our code attaches an “add()” method to it)</li></ul><p>There are two ways we can use module.exports:</p><ol><li><strong>Attaching public methods</strong> to it (like we did in the calculator example).</li><li><strong>Replacing</strong> <strong>it</strong> with our custom object or function.</li></ol><p>Why replace it? When replacing, we can return any arbitrary instance of some other class. Here is an example written in ES2015:</p><p>Above, “calculator-base” exports a class.<br>Let’s extend “Calculator” class and export an instance this time:</p><p>Usage:</p><h3 id="exports-alias">Exports alias</h3><ul><li><strong>“exports” is just a convenience variable so module authors can write less code</strong></li><li>Working with its properties is safe and recommended. <br>(eg.: exports.add = function…)</li><li><strong>Exports </strong>is NOT returned by require() (module.exports is!)</li></ul><p>Here are some good and some bad examples:</p><p><strong>Note:</strong> It is common practice to replace module.exports with custom functions or objects. If we do that but still would like to keep using the “exports” shorthand; then “exports” must be re-pointed to our new custom object (also done in code above at line 12):</p><pre><code>exports = module.exports = {}</code></pre><pre><code>exports.method = function() {...}</code></pre><h3 id="conclusion">Conclusion</h3><p>A variable named <strong>exports</strong> that is not being entirely exported is confusing, especially for newcomers to Node.js. Even the official documentation has a slightly strange take on it too:</p><blockquote>As a guideline, if the relationship between exports and module.exports seems like magic to you, ignore exports and only use module.exports.</blockquote><p>My take is that code is not magic. Developers should always seek deeper understanding of the platforms and languages they use. By doing so; programmers gain valuable confidence and knowledge which in turn positively impacts code quality, system architecture and productivity.</p><p>Thank you for reading my post. Feedback and thoughts are always welcome in the comments section.</p><p><a href="https://twitter.com/lazlojuly" rel="noopener">lazlojuly</a></p><h4 id="related-articles-">Related Articles:</h4><ul><li><a href="https://medium.com/@lazlojuly/are-node-js-modules-singletons-764ae97519af" rel="noopener">Are Node.js modules singletons?</a></li></ul><h4 id="sources-">Sources:</h4><ul><li><a href="https://nodejs.org/api/modules.html" rel="noopener">Node.js Documentation on Modules</a></li></ul><p><strong>Checkout my new blog series on unit unit testing:</strong></p><p><a href="https://medium.com/@lazlojuly/how-to-get-started-with-unit-testing-part-1-7f490bbf560a" rel="noopener"><strong>How to get started with Unit Testing? Part #1</strong></a><br><a href="https://medium.com/@lazlojuly/how-to-get-started-with-unit-testing-part-1-7f490bbf560a" rel="noopener"><em>I guess many of us can relate to a situation depicted above.</em></a><br><a href="https://medium.com/@lazlojuly/how-to-get-started-with-unit-testing-part-1-7f490bbf560a" rel="noopener"><em>A place where, unit testing is considered as a chore.</em>medium.com</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
