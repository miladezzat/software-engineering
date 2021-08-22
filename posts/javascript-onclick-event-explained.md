---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9eb2740569d1a4ca3e93.jpg"
tags: [JavaScript]
description: The onclick event in JavaScript lets you as a programmer exec
author: "Milad E. Fahmy"
title: "JavaScript Onclick Event Explained"
created: "2021-08-15T19:31:50+02:00"
modified: "2021-08-15T19:31:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Onclick Event Explained</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9eb2740569d1a4ca3e93.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9eb2740569d1a4ca3e93.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9eb2740569d1a4ca3e93.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9eb2740569d1a4ca3e93.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9eb2740569d1a4ca3e93.jpg" alt="JavaScript Onclick Event Explained">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>The <code>onclick</code> event in JavaScript lets you as a programmer execute a function when an element is clicked.</p>
<h2 id="button-onclick-example">Button Onclick Example</h2><pre><code class="language-javascript">&lt;button onclick="myFunction()"&gt;Click me&lt;/button&gt;
&lt;script&gt;
function myFunction() {
alert('Button was clicked!');
}
&lt;/script&gt;</code></pre>
<p>In the simple example above, when a user clicks on the button they will see an alert in their browser showing <code>Button was clicked!</code>.</p>
<h2 id="adding-onclick-dynamically">Adding onclick dynamically</h2>
<p>The <code>onclick</code> event can also be programmatically added to any element using the following code in the following example:</p><pre><code class="language-javascript">&lt;p id="foo"&gt;click on this element.&lt;/p&gt;
&lt;script&gt;
var p = document.getElementById("foo"); // Find the paragraph element in the page
p.onclick = showAlert; // Add onclick function to element
function showAlert(event) {
alert("onclick Event triggered!");
}
&lt;/script&gt;</code></pre>
<h3 id="note"><strong>Note</strong></h3>
<p>It’s important to note that using onclick we can add just one listener function. If you want to add more, just use addEventListener(), which is the preferred way for adding events listener.</p>
<p>In the above example, when a user clicks on the <code>paragraph</code> element in the <code>html</code>, they will see an alert showing <code>onclick Event triggered</code>.</p>
<h2 id="preventing-default-action">Preventing default action</h2>
<p>However if we attach <code>onclick</code> to links (HTML’s <code>a</code> tag) we might want prevent default action to occur:</p><pre><code class="language-javascript">&lt;a href="https://guide.freecodecamp.org" onclick="myAlert()"&gt;Guides&lt;/a&gt;
&lt;script&gt;
function myAlert(event) {
event.preventDefault();
alert("Link was clicked but page was not open");
}
&lt;/script&gt;</code></pre>
<p>In the above example we prevented default behavior of <code>a</code> element (opening link) using <code>event.preventDefault()</code> inside our <code>onclick</code> callback function.</p>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick" rel="nofollow">MDN</a></p>
<h3 id="other-resources">Other Resources</h3>
<p><a href="https://api.jquery.com/on/" rel="nofollow">jQuery .on() Event Handler Attachment</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
