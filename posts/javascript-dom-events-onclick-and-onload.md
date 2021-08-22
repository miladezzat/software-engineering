---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9dab740569d1a4ca38fa.jpg"
tags: [JavaScript]
description: In the early days of the internet, web pages were truly stati
author: "Milad E. Fahmy"
title: "JavaScript DOM Events: Onclick and Onload"
created: "2021-08-15T19:31:15+02:00"
modified: "2021-08-15T19:31:15+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-dom ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript DOM Events: Onclick and Onload</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9dab740569d1a4ca38fa.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9dab740569d1a4ca38fa.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9dab740569d1a4ca38fa.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9dab740569d1a4ca38fa.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9dab740569d1a4ca38fa.jpg" alt="JavaScript DOM Events: Onclick and Onload">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>In the early days of the internet, web pages were truly static – there were only text and images. Sure, sometimes that image was an animated gif, but it was still just an image.</p>
<p>With the advent of JavaScript, it became increasingly possible to create interactive pages that would respond to actions like clicking on a button or having a scroll animation.</p>
<p>There are a number of DOM (Document Object Model) events that you can listen for in JavaScript, but <code>onclick</code> and <code>onload</code> are among the most common.</p>
<h2 id="onclick-event"><strong>Onclick Event</strong></h2>
<p>The <code>onclick</code> event in JavaScript lets you execute a function when an element is clicked.</p>
<h3 id="example"><strong>Example</strong></h3><pre><code class="language-javascript">&lt;button onclick="myFunction()"&gt;Click me&lt;/button&gt;
&lt;script&gt;
function myFunction() {
alert('Button was clicked!');
}
&lt;/script&gt;</code></pre>
<p>In the simple example above, when a user clicks on the button they will see an alert in their browser showing <code>Button was clicked!</code>.</p>
<h3 id="adding-onclick-dynamically"><strong>Adding <code>onclick</code> dynamically</strong></h3>
<p>The example above works, but is generally considered bad practice. Instead, it's better to separate the content of the page (HTML) from the logic (JS). </p>
<p>To do this, the <code>onclick</code> event can be programmatically added to any element using the following code in the following example:</p><pre><code class="language-javascript">&lt;p id="foo"&gt;click on this element.&lt;/p&gt;
&lt;script&gt;
const p = document.getElementById("foo"); // Find the paragraph element in the page
p.onclick = showAlert; // Add onclick function to element
function showAlert(event) {
alert("onclick Event triggered!");
}
&lt;/script&gt;</code></pre>
<h3 id="note"><strong>Note</strong></h3>
<p>It’s important to note that using <code>onclick</code> we can add just one listener function. If you want to add more, just use <code>addEventListener()</code>, which is the preferred way for adding events.</p>
<p>In the above example, when a user clicks on the <code>paragraph</code> element in the <code>html</code>, they will see an alert showing <code>onclick Event triggered</code>.</p>
<h3 id="preventing-default-action"><strong>Preventing default action</strong></h3>
<p>However if we attach <code>onclick</code> to links (HTML’s <code>a</code> tag) we might want prevent default action to occur:</p><pre><code class="language-javascript">&lt;a id="bar" href="https://guide.freecodecamp.org"&gt;Guides&lt;/a&gt;
&lt;script&gt;
const link = document.getElementById("bar"); //  Find the link element
link.onclick = myAlert; // Add onclick function to element
function myAlert(event) {
event.preventDefault();
alert("Link was clicked but page was not open");
}
&lt;/script&gt;</code></pre>
<p>In the above example we prevented default behavior of <code>a</code> element (opening link) using <code>event.preventDefault()</code> inside our <code>onclick</code> callback function.</p>
<h2 id="onload-event"><strong>Onload Event</strong></h2>
<p>The <code>onload</code> event is used to execute a JavaScript function immediately after a page has been loaded.</p>
<h3 id="example-"><strong>Example:</strong></h3><pre><code class="language-javascript">const body = document.body;
body.onload = myFunction;
function myFunction() {
alert('Page finished loading');
}
</code></pre>
<p>Which can be shortened to:</p><pre><code class="language-js">document.body.onload = function() {
alert('Page finished loading');
}
</code></pre>
<p>In the above example, as soon as the web page has loaded, the <code>myFunction</code> function will be called, showing the <code>Page finished loading</code> alert to the user.</p>
<p>The <code>onload</code> event is usually attached to the <code>&lt;body&gt;</code> element. Then once the <code>&lt;body&gt;</code> of the page has loaded, which includes all images, and CSS and JS files, your script will run.</p>
<h4 id="more-information-"><strong>More Information:</strong></h4>
<p>These are only two of the many DOM events you can manipulate with JavaScript, but are among the mostly commonly used.</p>
<p>But sometimes you don't need to listen for DOM events at all, and want to use a time based event like a countdown. For a quick tutorial on timing events, check out <a href="/news/javascript-timing-events-settimeout-and-setinterval">this article</a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
