---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9dcb740569d1a4ca39af.jpg"
tags: [HTML]
description: "The Document method querySelector() returns the first element"
author: "Milad E. Fahmy"
title: "HTML DOM Methods"
created: "2021-08-15T22:49:53+02:00"
modified: "2021-08-15T22:49:53+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-html tag-dom tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">HTML DOM Methods</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9dcb740569d1a4ca39af.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9dcb740569d1a4ca39af.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9dcb740569d1a4ca39af.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9dcb740569d1a4ca39af.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9dcb740569d1a4ca39af.jpg" alt="HTML DOM Methods">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="queryselector-">querySelector()</h2><p>The Document method <code>querySelector()</code> returns the <code>first</code> element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.</p><h3 id="html-content-">HTML content:</h3><pre><code class="language-html">&lt;div id="id-example"&gt;&lt;/div&gt;
&lt;div class="class-example"&gt;&lt;/div&gt;
&lt;a&gt;element-example&lt;/a&gt; </code></pre><h3 id="javascript-content-">JavaScript content:</h3><pre><code class="language-javascript">document.querySelector("#id-example"); // Returns the element with id "id-example"
document.querySelector(".class-example"); // Returns the element with class "class-example"
document.querySelector("a"); // Returns the "a" element </code></pre><p>Note <code>querySelector()</code> returns the first matching element, to return all the matches, use the querySelectorAll() method instead.</p><pre><code class="language-html">&lt;div id="example"&gt;First&lt;/div&gt;
&lt;div id="example"&gt;Second&lt;/div&gt;</code></pre><pre><code class="language-javascript">document.querySelector("#example"); // Returns only the element containing 'First'</code></pre><h2 id="innerhtml"><strong>innerHTML </strong></h2><p>The <code>innerHTML</code> prop return the HTML content inside a selected element and also let you define a new HTML content.</p><h3 id="get-element-content">Get element content</h3><pre><code class="language-html">&lt;div id="demo"&gt;
&lt;p&gt;Demo&lt;/p&gt;
&lt;/div&gt;</code></pre><pre><code class="language-javascript">var element = document.getElementById("demo");
console.log(element.innerHTML) //logs &lt;p&gt;Demo&lt;/p&gt;</code></pre><h3 id="set-element-content">Set element content</h3><pre><code class="language-html">&lt;div id="demo"&gt;&lt;/div&gt;</code></pre><pre><code class="language-javascript">var element = document.getElementById("demo");
element.innerHTML = "&lt;div&gt;Demo&lt;/div&gt;";</code></pre><p>The HTML now will be like</p><pre><code class="language-html">&lt;div id="demo"&gt;
&lt;div&gt;Demo&lt;/div&gt;
&lt;/div&gt;</code></pre><h3 id="security-considerations">Security considerations</h3><p>The value that’s set to <code>innerHTML</code> should come from trusted sources, since Javascript will put anything inside that element and it will be run as plain HTML.</p><p>Example:</p><p>Setting a ”<code>&lt;script&gt;alert();&lt;/script&gt;</code>” value will cause the Javascript “alert()” function to be fired:</p><pre><code class="language-javascript">var element = document.getElementById("demo");
element.innerHTML = "&lt;script&gt;alert();&lt;/script&gt;";</code></pre><p>This type of attack is called <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">Cross Site Scripting, or XSS for short</a>.</p><p>This is one of the most common ways of committing an XSS attack. If you want to learn a little bit more and learn to defend against it, <a href="https://xss-game.appspot.com/">check out this resource</a>.</p><h2 id="getelementbyid-">getElementById()</h2><p>The <code>getElementById()</code> method returns the element that has the id attribute with the specified value. It takes one argument, which is a case-sensitive string of the id for the element you want.</p><p>This method is one of the most common methods in the HTML DOM, and is used almost every time you want to manipulate, or get info from, an element in your document. Here’s a simple example of the syntax:</p><p><strong><strong>HTML content:</strong></strong></p><pre><code class="language-html">&lt;div id="demo"&gt;&lt;/div&gt;</code></pre><p><strong><strong>JavaScript content:</strong></strong></p><pre><code class="language-javascript">document.getElementById("demo"); // Returns the element with id "demo"</code></pre><p>If you have more than one element with the same value of <code>id</code> (bad practice!), <code>getElementById</code> will return the first element found:</p><pre><code class="language-html">&lt;div id="demo"&gt;First&lt;/div&gt;
&lt;div id="demo"&gt;Second&lt;/div&gt;</code></pre><pre><code class="language-javascript">document.getElementById("demo"); // Returns the element with id "demo" containing 'First'</code></pre><h4 id="more-information-"><strong>More Information:</strong></h4><p><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById" rel="nofollow">document.getElementById()</a></p><h4 id="alternative-solutions-"><strong>Alternative solutions:</strong></h4><p>A commonly-used alternative to <code>document.getElementById</code> is using a jQuery selector which you read about more <a href="https://github.com/freeCodeCamp/guides/tree/master/src/pages/jquery">here</a>.</p><h2 id="more-info-about-the-html-dom">More info about the HTML DOM</h2><p>With the HTML DOM, JavaScript can access and change all the elements of an HTML document.</p><p>When a web page is loaded, the browser creates a <strong><strong>D</strong></strong>ocument <strong><strong>O</strong></strong>bject <strong><strong>M</strong></strong>odel of the page.</p><p>The HTML DOM model is constructed as a tree of Objects:</p><p>Each element in the DOM is also called a node.</p><pre><code class="language-html">&lt;html&gt;
&lt;head&gt;
&lt;title&gt; My title &lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;a href="#"&gt;My Link&lt;/a&gt;
&lt;h1&gt; My header &lt;/h1&gt;
&lt;/body&gt;
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
