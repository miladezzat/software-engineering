---
card: "/images/default.jpg"
tags: [JavaScript]
description: The JavaScript addEventListener() method allows you to set up
author: "Milad E. Fahmy"
title: "The addEventListener() Method – JavaScript Event Listener Example Code"
created: "2021-08-15T19:28:53+02:00"
modified: "2021-08-15T19:28:53+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">The addEventListener() Method – JavaScript Event Listener Example Code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/07/headway-F2KRf_QfCqw-unsplash.jpg 300w,
/news/content/images/size/w600/2020/07/headway-F2KRf_QfCqw-unsplash.jpg 600w,
/news/content/images/size/w1000/2020/07/headway-F2KRf_QfCqw-unsplash.jpg 1000w,
/news/content/images/size/w2000/2020/07/headway-F2KRf_QfCqw-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/07/headway-F2KRf_QfCqw-unsplash.jpg" alt="The addEventListener() Method – JavaScript Event Listener Example Code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>The JavaScript addEventListener() method allows you to set up functions to be called when a specified event happens, such as when a user clicks a button. This tutorial shows you how you can implement addEventListener() in your code.</p>
<h2 id="understandingeventsandeventhandlers">Understanding Events and Event Handlers</h2>
<p><strong>Events</strong> are actions that happen when the user or browser manipulates a page. They play an important role as they can cause elements of a web page to change dynamically.</p>
<p>For example, when the browser finishes loading a document, then a <code>load</code> event occurred. If a user clicks a button on a page, then a <code>click</code> event has happened.</p>
<p>Many events can happen once, multiple times, or never. You also may not know when an event will happen, especially if it is user generated. </p>
<p>In these scenarios, you need an <strong>event handler</strong> to detect when an event happens. This way, you can set up code to react to events as they happen on the fly.</p>
<p>JavaScript provides an event handler in the form of the <code>addEventListener()</code> method. This handler can be attached to a specific HTML element you wish to monitor events for, and the element can have more than one handler attached.</p>
<h2 id="addeventlistenersyntax">addEventListener() Syntax</h2>
<p>Here's the syntax:</p>
</code></pre>
<ul>
<li><strong>target</strong>: the HTML element you wish to add your event handler to. This element exists as part of the Document Object Model (DOM) and you may wish to learn about <a href="https://1000mileworld.com/dom-manipulation-using-javascript/#select">how to select a DOM element</a>.</li>
<li><strong>event</strong>: a string that specifies the name of the event. We already mentioned <code>load</code> and <code>click</code> events. For the curious, here's a full list of <a href="https://www.w3schools.com/jsref/dom_obj_event.asp">HTML DOM events</a>.</li>
<li><strong>function</strong>: specifies the function to run when the event is detected. This is the magic that can allow your web pages to change dynamically.</li>
<li><strong>useCapture</strong>: an optional Boolean value (true or false) that specifies whether the event should be executed in the <a href="https://javascript.info/bubbling-and-capturing">capturing or bubbling phase</a>. In the case of nested HTML elements (such as an <code>img</code> within a <code>div</code>) with attached event handlers, this value determines which event gets executed first. By default, it's set to false which means that the innermost HTML event handler is executed first (bubbling phase).</li>
</ul>
<h2>addEventListener() Code Example</h2>
<figcaption>Simple example demonstrating addEventListener()</figcaption>
</figure>
<p>This is a simple example I made which shows you <code>addEventListener()</code> in action.</p>
<p>When a user clicks the button, a message is displayed. Another button click hides the message. Here's the relevant JavaScript:</p>
let msg = document.querySelector('#message');
button.addEventListener('click', ()=&gt;{
msg.classList.toggle('reveal');
})
</code></pre>
<p>Going by the syntax shown previously for <code>addEventListener()</code>:</p>
<ul>
<li><strong>target</strong>: HTML element with <code>id='button'</code></li>
<li><strong>function</strong>: anonymous (arrow) function that sets up code necessary to reveal/hide the message</li>
<li><strong>useCapture</strong>: left to default value of <code>false</code></li>
</ul>
<p>My function is able to reveal/hide the message by adding/removing a CSS class called "reveal" which changes the message element's visibility.</p>
<p>Of course in your code, feel free to customize this function. You may also replace the anonymous function with a named function of your own.</p>
<h2 id="passingeventasaparameter">Passing Event as a Parameter</h2>
<p>Sometimes we may want to know more information about the event, such as what element was clicked. In this situation, we need to pass in an event parameter to our function. </p>
<p>This example shows how you may obtain the element's id:</p>
console.log(e.target.id)
})
</code></pre>
<p>Here the event parameter is a variable named <code>e</code> but it can be easily called anything else such as "event". This parameter is an object which contains various information about the event such as the target id.</p>
<p>You don't have to do anything special and JavaScript automatically knows what to do when you pass in a parameter this way to your function.</p>
<h2 id="removingeventhandlers">Removing Event Handlers</h2>
<p>If for some reason you no longer want an event handler to activate, here's how to remove it:</p>
</code></pre>
<p>The parameters are the same as <code>addEventListener()</code>.</p>
<h2 id="practicemakesperfect">Practice Makes Perfect</h2>
<p>The best way to get better with event handlers is to practice with your own code.</p>
<p>Here is an <a href="https://1000mileworld.com/Portfolio/Flex/flexPanels.html">example project</a> I did in which I used event handlers to change the color, size, and speed of bubbles flowing across the background of a web page (you will need to click on the central panel to reveal the controls).</p>
<p>Have fun and go make something awesome!</p>
<p>For more beginner-friendly web development knowledge, visit my blog at <a href="https://1000mileworld.com/">1000 Mile World</a> and follow me on <a href="https://twitter.com/1000mileworld">Twitter</a>.</p>
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
