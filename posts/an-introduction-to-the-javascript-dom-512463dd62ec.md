---
card: "https://cdn-media-1.freecodecamp.org/images/0*QqW2LsIY0wf5BeDv"
tags: [JavaScript]
description: "The Javascript DOM (Document Object Model) is an interface th"
author: "Milad E. Fahmy"
title: "An introduction to the JavaScript DOM"
created: "2021-08-16T11:31:13+02:00"
modified: "2021-08-16T11:31:13+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-document-object-model tag-web-development tag-programming tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">An introduction to the JavaScript DOM</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*QqW2LsIY0wf5BeDv 300w,
https://cdn-media-1.freecodecamp.org/images/0*QqW2LsIY0wf5BeDv 600w,
https://cdn-media-1.freecodecamp.org/images/0*QqW2LsIY0wf5BeDv 1000w,
https://cdn-media-1.freecodecamp.org/images/0*QqW2LsIY0wf5BeDv 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*QqW2LsIY0wf5BeDv" alt="An introduction to the JavaScript DOM">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
div.appendChild(newContent);
document.body.insertBefore(div, currentDiv);</code></pre><p>Here we create content using the createTextNode() method which takes a String as a parameter and then we insert our new div element before a div that already exists in our document.</p><h4 id="deleting-elements">Deleting elements</h4><pre><code class="language-js">var elem = document.querySelector('#header');
elem.parentNode.removeChild(elem);</code></pre><p>Here we get an element and delete it using the removeChild() method.</p><h4 id="replace-elements">Replace elements</h4><p>Now let’s take a look at how we can replace items.</p><pre><code class="language-js">var div = document.querySelector('#div');
var newDiv = document.createElement(‘div’);
newDiv.innerHTML = "Hello World2"
div.parentNode.replaceChild(newDiv, div);</code></pre><p>Here we replace an element using the <em>replaceChild() </em>method. The first argument is the new element and the second argument is the element which we want to replace.</p><h4 id="writing-directly-into-the-html-output-stream">Writing directly into the HTML output stream</h4><p>We can also write HTML expressions and JavaScript directly into the HTML output stream using the write() method.</p><pre><code class="language-js">document.write(“&lt;h1&gt;Hello World!&lt;/h1&gt;&lt;p&gt;This is a paragraph!&lt;/p&gt;”);</code></pre><p>We can also pass JavaScript expressions like a date object.</p><pre><code>document.write(Date());</code></pre><p>The write() method can also take multiple arguments that will be appended to the document in order of their occurrence.</p><h3 id="event-handlers">Event Handlers</h3><p>The HTML DOM also allows Javascript to react to HTML events. Here I’ve just listed some of the most important ones:</p><ul><li>mouse click</li><li>page load</li><li>mouse move</li><li>input field change</li></ul><h4 id="assign-events">Assign Events</h4><p>You can define events directly in your HTML code using attributes on your tags. Here is an example of an <em>onclick</em> event:</p><pre><code>&lt;h1 onclick=”this.innerHTML = ‘Hello!’”&gt;Click me!&lt;/h1&gt;</code></pre><p>In this example, the text of the &lt;h1/&gt; will change to “Hello!” when you click the button.</p><p>You can also call functions when an event is triggered as you can see in the next example.</p><pre><code>&lt;h1 onclick=”changeText(this)”&gt;Click me!&lt;/h1&gt;</code></pre><p>Here we call the <em>changeText()</em> method when the button is clicked and pass the element as an attribute.</p><p>We can also assign the same events in our Javascript code.</p><pre><code>document.getElementById(“btn”).onclick = changeText();</code></pre><h4 id="assign-events-listeners">Assign Events Listeners</h4><p>Now let’s look at how you can assign event listeners to your HTML elements.</p><pre><code>document.getElementById(“btn”)addEventListener('click', runEvent);</code></pre><p>Here we just assigned a clickevent that calls the runEvent method when our btn element is clicked.</p><p>You can also assign multiple events to a single element:</p><pre><code>document.getElementById(“btn”)addEventListener('mouseover', runEvent);</code></pre><h3 id="node-relationships">Node Relationships</h3><p>The nodes in the DOM Document have a hierarchical relationship to each other. This means that the nodes are structured like a tree. We use the terms parent, sibling and child to describe the relationship between nodes.</p><p>The top node is called the root and is the only node that has no parent. The root in a normal HTML document is the &lt;html/&gt; tag because it has no parent and is the top tag of the document.</p><h4 id="navigating-between-nodes">Navigating Between Nodes</h4><p>We can navigate between nodes using these properties:</p><ul><li>parentNode</li><li>childNodes</li><li>firstChild</li><li>lastChild</li><li>nextSibling</li></ul><p>Here is an example how you can get the parent element of an h1.</p><pre><code>var parent = document.getElementById(“heading”).parentNode</code></pre><h3 id="conclusion">Conclusion</h3><p>You made it all the way until the end! Hope that this article helped you understand the Javascript DOM and how to use it to manipulate elements on your website.</p><p>If you want to read more articles just like this one you can visit my <a href="https://gabrieltanner.org/">website</a> or start following my <a href="https://gabrieltanner.us20.list-manage.com/subscribe/post?u=9d67fc028348a0eb71318768e&amp;amp;id=6845ed3555">newsletter</a>.</p><p>If you have any questions or feedback, let me know in the comments down below.</p>
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
