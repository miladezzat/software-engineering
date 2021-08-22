---
card: "/images/default.jpg"
tags: [JavaScript]
description: Events are actions that happen when a user interacts with the
author: "Milad E. Fahmy"
title: "JavaScript Event Handlers – How to Handle Events in JS"
created: "2021-08-15T19:28:28+02:00"
modified: "2021-08-15T19:28:28+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-events ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Event Handlers – How to Handle Events in JS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/09/samuel-pereira-uf2nnANWa8Q-unsplash.jpg 300w,
/news/content/images/size/w600/2020/09/samuel-pereira-uf2nnANWa8Q-unsplash.jpg 600w,
/news/content/images/size/w1000/2020/09/samuel-pereira-uf2nnANWa8Q-unsplash.jpg 1000w,
/news/content/images/size/w2000/2020/09/samuel-pereira-uf2nnANWa8Q-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/09/samuel-pereira-uf2nnANWa8Q-unsplash.jpg" alt="JavaScript Event Handlers – How to Handle Events in JS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h2 id="whatareevents">What are events?</h2>
<p>Events are actions that happen when a user interacts with the page - like clicking an element, typing in a field, or loading a page.</p>
<p>The browser notifies the system that something has happened, and that it needs to be handled. It gets handled by registering a function, called an <code>event handler</code>, that listens for a particular type of event.</p>
<h2 id="whatdoesitmeantohandleanevent">What does it mean to "handle an event"?</h2>
<p>To put it in simple terms, consider this - let's assume you are interested in attending Web Development meetup events in your local community.</p>
<p>To do this, you sign-up for a local meetup called "Women Who Code" and subscribe to notifications. This way, anytime a new meetup is scheduled, you get alerted. That is event handling!</p>
<p>The "event" here is a new JS meetup. When a new meetup is posted, the website meetup.com catches this change, thereby "handling" this event. It then notifies you, thus taking an "action" on the event.</p>
<p>In a browser, events are handled similarly. The browser detects a change, and alerts a function (event handler) that is listening to a particular event. These functions then perform the actions as desired.</p>
<p>Let's look at an example of a <code>click</code> event handler:</p>
<pre><code>&lt;div class="buttons"&gt;
&lt;button&gt;Press 1&lt;/button&gt;
&lt;button&gt;Press 2&lt;/button&gt;
&lt;button&gt;Press 3&lt;/button&gt;
&lt;/div&gt;
const buttonContainer = document.querySelector('.buttons');
console.log('buttonContainer', buttonContainer);
buttonContainer.addEventListener('click', event =&gt; {
console.log(event.target.value)
})
</code></pre>
<h2 id="whatarethedifferenttypesofevents">What are the different types of events?</h2>
<p>An event can be triggered any time a user interacts with the page. These events could be a user scrolling through the page, clicking on an item, or loading a page.</p>
<p>Here are some common events - <code>onclick</code> <code>dblclick</code> <code>mousedown</code> <code>mouseup</code> <code>mousemove</code> <code>keydown</code> <code>keyup</code> <code>touchmove</code> <code>touchstart</code> <code>touchend</code> <code>onload</code> <code>onfocus</code> <code>onblur</code> <code>onerror </code> <code>onscroll</code></p>
<h2 id="differentphasesofeventscapturetargetbubble">Different phases of events - capture, target, bubble</h2>
<p>When an event moves through the DOM - whether bubbling up or trickling down - it is called event propagation. The event propagates through the DOM tree.</p>
<p>Events happen in two phases: the bubbling phase and the capturing phase.</p>
<p>In capture phase, also called the trickling phase, the event "trickles down" to the element that caused the event.</p>
<p>It starts from the root level element and handler, and then propagates down to the element. The capture phase is completed when the event reaches the <code>target</code>.</p>
<p>In the bubble phase, the event is "bubbled" up to the DOM tree. It is first captured and handled by the innermost handler (the one that is closest to the element on which the event occurred). It then bubbles up (or propagates up) to the higher levels of DOM tree, further up to its parents, and then finally to its root.</p>
<p>Her's a trick to help you remember this:</p>
<pre><code>trickle down, bubble up
</code></pre>
<p>Here's an infographic from <a href="https://www.quirksmode.org/js/events_order.html">quirksmode</a> that explains this very well:</p>
<pre><code>               / \
---------------| |-----------------
| element1 |  |  |
| -------- ||-----------     |
|                | element2 |  |  |  |
| -------------- |
| Event BUBBLING |
-----------------------------------
| |
---------------| |-----------------
| element1 |  |  |
| -------- ||-----------     |
|                 | element2  \ / |  |
| --------------- |
| Event CAPTURING |
-----------------------------------
</code></pre>
<p>One thing to note is that, whether you register an event handler in either phase, both phases ALWAYS happen. All events bubble by default.</p>
<p>You can register event handlers for either phase, bubbling or capturing, by using the function <code>addEventListener(type, listener, useCapture)</code>. If <code>useCapture</code> is set to <code>false</code>, the event handler is in the bubbling phase. Otherwise it's in the capture phase.</p>
<p>The order of the phases of the event depends on the browser.</p>
<p>To check which browser honors capture first, you can try the following code in JSfiddle:</p>
<pre><code class="language-html">&lt;div id="child-one"&gt;
&lt;h1&gt;
Child One
&lt;/h1&gt;
&lt;/div&gt;
</code></pre>
<pre><code class="language-javascript">const childOne = document.getElementById("child-one");
const childOneHandler = () =&gt; {
console.log('Captured on child one')
}
const childOneHandlerCatch = () =&gt; {
console.log('Captured on child one in capture phase')
}
childOne.addEventListener("click", childOneHandler);
childOne.addEventListener("click", childOneHandlerCatch, true);
</code></pre>
<p>In Firefox, Safari, and Chrome, the output is the following:<br>
<img src="https://github.com/shrutikapoor08/blogs/blob/master/JSByte/img/events_capture_order.png?raw=true" alt="Events in capture phase are fired first">
</p>
<h2 id="howtolistentoanevent">How to listen to an event</h2>
<p>There are two ways to listen to an event:</p>
<ol>
<li><code>addEventListener</code></li>
<li>inline events, such as <code>onclick</code></li>
</ol>
<pre><code>//addEventListener
document.getElementByTag('a').addEventListener('click', onClickHandler);
//inline using onclick
&lt;a href="#" onclick="onClickHandler"&gt;Click me&lt;/a&gt;
</code></pre>
<h2 id="whichisbetteraninlineeventoraddeventlistener">Which is better - an inline event or <code>addEventListener</code>?</h2>
<ol>
<li><code>addEventListener</code> gives you the ability to register unlimited event handlers.</li>
<li><code>removeEventListener</code> can also be used to remove event handlers</li>
<li>The <code>useCapture</code> flag can be used to indicate whether an event needs to be handled in the capture phase or bundled phase.</li>
</ol>
<h2 id="codeexamplesandliveaction">Code examples and live-action</h2>
<p>You can try out these events in JSFiddle to play around with them.</p>
<pre><code class="language-html">&lt;div id="wrapper-div"&gt;
&lt;div id="child-one"&gt;
&lt;h1&gt;
Child One
&lt;/h1&gt;
&lt;/div&gt;
&lt;div id="child-two" onclick="childTwoHandler"&gt;
&lt;h1&gt;
Child Two
&lt;/h1&gt;
&lt;/div&gt;
&lt;/div&gt;
</code></pre>
<pre><code class="language-javascript">const wrapperDiv = document.getElementById("wrapper-div");
const childOne = document.getElementById("child-one");
const childTwo = document.getElementById("child-two");
const childOneHandler = () =&gt; {
console.log('Captured on child one')
}
const childTwoHandler = () =&gt; {
console.log('Captured on child two')
}
const wrapperDivHandler = () =&gt; {
console.log('Captured on wrapper div')
}
const childOneHandlerCatch = () =&gt; {
console.log('Captured on child one in capture phase')
}
const childTwoHandlerCatch = () =&gt; {
console.log('Captured on child two in capture phase')
}
const wrapperDivHandlerCatch = () =&gt; {
console.log('Captured on wrapper div in capture phase')
}
childOne.addEventListener("click", childOneHandler);
childTwo.addEventListener("click", childTwoHandler);
wrapperDiv.addEventListener("click", wrapperDivHandler);
childOne.addEventListener("click", childOneHandlerCatch, true);
childTwo.addEventListener("click", childTwoHandlerCatch, true);
wrapperDiv.addEventListener("click", wrapperDivHandlerCatch, true);
</code></pre>
<h2 id="tldr">TL;DR</h2>
<p>Event phases are capture (DOM -&gt; target), bubble (target-&gt; DOM) and target.<br>
Events can be listened for by using <code>addEventListener</code> or inline methods such as <code>onclick</code>.</p>
<pre><code>    addEventListener can add multiple events, whereas with onclick this cannot be done.
onclick can be added as an HTML attribute, whereas an addEventListener can only be added within &lt;script&gt; elements.
addEventListener can take a third argument which can stop the event propagation.
</code></pre>
<h2 id="futherreading">Futher reading</h2>
<p><a href="https://www.quirksmode.org/js/events_order.html">https://www.quirksmode.org/js/events_order.html</a><br>
<a href="https://jsfiddle.net/r2bc6axg/">https://jsfiddle.net/r2bc6axg/</a><br>
<a href="https://stackoverflow.com/questions/6348494/addeventlistener-vs-onclick">https://stackoverflow.com/questions/6348494/addeventlistener-vs-onclick</a><br>
<a href="https://www.w3.org/wiki/HTML/Attributes/_Global#Event-handler_Attributes">https://www.w3.org/wiki/HTML/Attributes/_Global#Event-handler_Attributes</a>
</p>
<p>To keep up with more short tutorials like this, <a href="https://tinyletter.com/shrutikapoor">sign up for my newsletter</a> or <a href="https://twitter.com/shrutikapoor08">follow me on Twitter</a></p>
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
