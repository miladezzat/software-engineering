---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9c72740569d1a4ca3245.jpg"
tags: [AJAX]
description: AJAX stands for Asynchronous JavaScript And XML. It is not a
author: "Milad E. Fahmy"
title: "AJAX Tutorial: What AJAX Is and How to Use it"
created: "2021-08-15T19:30:36+02:00"
modified: "2021-08-15T19:30:36+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-ajax tag-javascript tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">AJAX Tutorial: What AJAX Is and How to Use it</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c72740569d1a4ca3245.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c72740569d1a4ca3245.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c72740569d1a4ca3245.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c72740569d1a4ca3245.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c72740569d1a4ca3245.jpg" alt="AJAX Tutorial: What AJAX Is and How to Use it">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="what-is-ajax"><strong>What is AJAX?</strong></h2>
<p><strong><strong>AJAX</strong></strong> stands for <strong><strong>Asynchronous JavaScript And XML</strong></strong>. It is not a programming language. It is a technology for developing better, faster and interactive Web Applications using HTML, CSS, JavaScript and XML.</p>
<ol>
<li>HTML : Hypertext Markup Language (HTML) is used for defining the structure of a Web Application.</li>
<li>CSS : Cascading Style Sheet (CSS) is used to provide look and style to a Web Application.</li>
<li>JavaScript : JavaScript is used for making a Web Application interactive, interesting and user friendly.</li>
<li>XML : Extensible Markup Language (XML) is a format to store and transport data from the Web Server.</li>
</ol>
<h3 id="what-s-the-meaning-of-asynchronous-in-ajax">What's the meaning of Asynchronous in AJAX?</h3>
<p>Asynchronous means that the the Web Application could send and receive data from the Web Server without refreshing the page. This background process of sending and receiving data from the server along with updating different sections of a web page defines Asynchronous property/feature of AJAX.</p>
<h2 id="how-ajax-works">How AJAX works</h2>
<p>AJAX makes use of a browser built-in <strong><strong>XMLHttpRequest object</strong></strong> to request data from a Web Server and <strong><strong>HTML DOM</strong></strong> to display or use the data.</p>
<p><strong><strong>XMLHttpRequest Object</strong></strong> : It is an API in the form an object whose methods help in transfer of data between a web browser and a web server.</p>
<p><strong><strong>HTML DOM</strong></strong> : When a web page is loaded, the browser creates a Document Object Model of the page.</p>
<p><strong><strong>Create a XMLHttpRequest Object :</strong></strong></p><pre><code class="language-javascript">var xhttp = new XMLHttpRequest();</code></pre>
<p><strong><strong>Properties of XMLHttpRequest object :</strong></strong></p>
<p><code>readystate</code> is a property of the XMLHttpRequest Object which holds the status of the XMLHttpRequest.</p>
<ul>
<li>0: request not initialized</li>
<li>1: server connection established</li>
<li>2: request received</li>
<li>3: processing request</li>
<li>4: request finished and response is ready</li>
</ul>
<p>```onreadystatechange``` is a property of the XMLHttpRequest Object which defines a function to be called when the readyState property changes.<br>```status``` is a property of the XMLHttpRequest Object which returns the status-number of a request</p>
<ul>
<li>200: "OK"</li>
<li>403: "Forbidden"</li>
<li>404: "Not Found"</li>
</ul>
<p><strong><strong>XMLHttpRequest Object Methods :</strong></strong> To send a request to a Web Server, we use the open() and send() methods of the XMLHttpRequest object.</p><pre><code class="language-javascript">xhttp.open("GET", "content.txt", true);
xhttp.send();</code></pre>
<p><strong><strong>Create a function changeContent() using JavaScript :</strong></strong></p><pre><code class="language-javascript">function changeContent() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 &amp;&amp; this.status == 200) {
document.getElementById("foo").innerHTML = this.responseText;
}
};
xhttp.open("GET", "content.txt", true);
xhttp.send();
}</code></pre>
<p><strong><strong>AJAX example to change content of a web page :</strong></strong></p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;
&lt;div id="foo"&gt;
&lt;h2&gt;The XMLHttpRequest Object&lt;/h2&gt;
&lt;button type="button" onclick="changeContent()"&gt;Change Content&lt;/button&gt;
&lt;/div&gt;
&lt;script&gt;
function changeContent() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 &amp;&amp; this.status == 200) {
document.getElementById("foo").innerHTML =
this.responseText;
}
};
xhttp.open("GET", "content.txt", true);
xhttp.send();
}
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>The file <code>content.txt</code> should be present in the root directory of the Web Application.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
