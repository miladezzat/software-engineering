---
card: "https://cdn-media-1.freecodecamp.org/images/1*dhtbZon7OPebZuUO9-yyjw.jpeg"
tags: [JavaScript]
description: In this blog, I will try to make clear the fundamentals of th
author: "Milad E. Fahmy"
title: "How to handle event handling in JavaScript (examples and all)"
created: "2021-08-15T19:45:33+02:00"
modified: "2021-08-15T19:45:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-dom tag-tech tag-programming tag-tutorial ">
<header class="post-full-header">
<h1 class="post-full-title">How to handle event handling in JavaScript (examples and all)</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*dhtbZon7OPebZuUO9-yyjw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*dhtbZon7OPebZuUO9-yyjw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*dhtbZon7OPebZuUO9-yyjw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*dhtbZon7OPebZuUO9-yyjw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*dhtbZon7OPebZuUO9-yyjw.jpeg" alt="How to handle event handling in JavaScript (examples and all)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this blog, I will try to make clear the fundamentals of the event handling mechanism in JavaScript, without the help of any external library like Jquery/React/Vue.</p>
<p>I will be explaining the following topics in this article:</p>
<ol>
<li>The<strong> document</strong> and <strong>window</strong> objects, and adding <strong>Event Listeners </strong>to them.</li>
<li>The<strong> Event.preventDefault()</strong> method and it’s usage.</li>
<li>The<strong> Event.stopPropagation() </strong>method with an example.</li>
<li><strong>How to remove </strong>an event <strong>listener</strong> from an element.</li>
</ol>
<h3 id="document-and-window-objects-with-event-listeners"><strong>Document</strong> and <strong>window </strong>objects with <strong>Event Listeners</strong></h3>
<p>The Window object represents the tab. In case you are reading this blog on your corresponding browser, then your current tab represents the Window object.</p>
<p>The window object has access to such information as the toolbar, height and width of the window, prompts, and alerts. Let’s see how we can add an event listener (mousedown) to the window object and analyze some of its properties.</p>
<h4 id="how-to-add-the-listener-on-the-window-object"><strong>How to add the listener on the window object</strong></h4>
<p>The<strong> addEventListener</strong> method is the most preferred way to add an event listener to <strong>window</strong>, <strong>document</strong> or any other <strong>element</strong> in the DOM.</p>
<p>There is one more way called “on” property onclick, onmouseover, and so on. But is not as useful, as it does not allow us to add multiple event listeners on the same element. The other methods allow it.</p>
<p>An <strong>event</strong> object is passed as an argument (optional) to the handler which contains all the information related to the event (in our case, mousedown) on the window.</p>
<p>Open the developer tools (Inspect Element) on this page and copy paste the following code in the console panel and hit enter.</p><pre><code class="language-js">window.addEventListener("mousedown",function(event){
alert("window");
console.log(event);
});</code></pre>
<p>After that, you can go over to any section of the current tab and <strong>right click </strong>to see the console and the info related to this event, as shown below in the snapshot.</p>
<p><strong>Note</strong>: If you go to any other tab and right click, then this event will not get fired as it belongs to this tab (Window object) only.</p>
<h4 id="the-details-of-the-mousedown-event">The details of the mousedown event</h4>
<p>In the next few lines, I will explain some of the important captured property corresponding to the <strong>mousedown</strong> event we just performed.</p>
<p><strong>button</strong>: As this was the mousedown event, it will tell you the button you clicked. For the mouse, Left, middle, and right correspond to 0, 1, and 2 respectively. If you click the right button, you can see the value 2.</p>
<p><strong>clientX</strong> and <strong>clientY</strong>: Position relative to the upper left of the content area (Viewport). Just analyze the value of these properties with the place you clicked, and you can see how they’re related. Even if you scroll down the page, these properties remain the same. ScreenX and ScreenY reference from the top left of the screen (Monitor).</p>
<p><strong>altkey / ctrlkey</strong>: If you keep any of these keys pressed while performing your right click operation, then you can see these values are true. Otherwise, they’re false as in our case.</p>
<p><strong>target: </strong>It corresponds to the element you performed the action upon. Whatever element you might have clicked on, you can see the information corresponding to this property in the console</p>
<h4 id="what-is-a-document-object"><strong>What is a document object</strong>?</h4>
<p>The document consists of what is inside the inner window. The <strong>document</strong> <strong>object</strong> is the root of every node in the DOM. If you are loading an HTML page in the browser, then the document represents that entire page.</p>
<h3 id="the-event-preventdefault-method-and-its-usage"><strong>The Event.preventDefault()</strong> method and its usage</h3>
<p>Sometime we don’t want an HTML element to behave in the way it is supposed to behave in default. In such a case, we can use this method.</p>
<p><strong>Example</strong>: Clicking the anchor element will make the browser redirect to that page by default. Let’s try to avoid that.</p><pre><code class="language-html">&lt;html&gt;
&lt;body&gt;
&lt;a href="https://google.com/"&gt;Google&lt;/a&gt;
&lt;script&gt;
let link = document.querySelector("a"); // It is the method to access the first matched element
link.addEventListener("click", function(event) {
console.log("Redirecting Stopped");
event.preventDefault();
});
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>You can create an HTML file and check out this code.</p>
<h3 id="the-event-stoppropagation-method"><strong>The Event.stopPropagation() </strong>method</h3>
<p><strong>Events flow outwards.</strong> There are certain cases, such as when you have nested elements and you perform some event on a child and it ends up performing some action on the parent, too, that you want to avoid. In such cases, this method is a useful one.</p>
<p>It sounds bit confusing, but I hope the below example will make it clear to you.</p>
<p>Imagine you have a button inside a paragraph and you have attached a mousedown event to both of them. You want to achieve the following use cases:</p>
<ol>
<li>If you right click the button, then it should show that it has been clicked and does not propagate to the parent element (that is, the paragraph).</li>
<li>If you left click on the button, then it should propagate outwards normally and fire the paragraph event listener, too.</li>
</ol>
<p>Solution:</p><pre><code class="language-html">&lt;html&gt;
&lt;body&gt;
&lt;p id="demo"&gt; Hello Ho&lt;button id="button12"&gt; Button2 &lt;/button&gt; &lt;/p&gt;
&lt;script&gt;
// Event Listener on the Button and it's logic
document.getElementById("button12").addEventListener("mousedown", function(event) {
alert("button clicked");
if (event.button == 2) // Right Click
event.stopPropagation();
});
// Event Listener on the paragraph element with it's logic:
document.getElementById("demo").addEventListener("mousedown", function(event) {
alert("Paragraph clicked");
});
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<h3 id="removing-an-event-listener-from-an-element"><strong>Removing</strong> an <strong>event listener</strong> from an element</h3>
<p>In order to remove an event listener from an element, we need to call the <strong>removeEventListener</strong> method with the event name and the function name.</p>
<p><strong>Note</strong>: when anonymous functions are passed, they don’t have memory mapping. So we need to define those functions outside the callback and then reference them here in the removeEventListener callback.</p><pre><code class="language-js">Document.getElementbyId("id_name").removeEventListener("click",fn_name)</code></pre>
<p>If you have reached this point, you should have a decent understanding of how Event Listeners work in the JavaScript.</p>
<p>If, while working with your favorite library/Frameworks, you ever get stuck in the Events Handling part, then these basics should help you to resolve the issue.</p>
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
