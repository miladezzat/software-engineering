---
card: "/images/default.jpg"
tags: [JavaScript]
description: An event refers to an action or occurrence that happens in th
author: "Milad E. Fahmy"
title: "Browser Events Explained in Plain English"
created: "2021-08-15T19:27:46+02:00"
modified: "2021-08-15T19:27:46+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-events tag-beginners-guide ">
<header class="post-full-header">
<h1 class="post-full-title">Browser Events Explained in Plain English</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/12/events.jpg 300w,
/news/content/images/size/w600/2020/12/events.jpg 600w,
/news/content/images/size/w1000/2020/12/events.jpg 1000w,
/news/content/images/size/w2000/2020/12/events.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/12/events.jpg" alt="Browser Events Explained in Plain English">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h2 id="what-are-browser-events">What are browser events?</h2>
<p>An <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events">event</a> refers to an action or occurrence that happens in the system you are programming. The system then notifies you about the event so that you can respond to it in some way if necessary. </p>
<p>In this article, I will focus on events in the context of web browsers. Essentially, an event is an indicator which shows that a certain action has taken place so that you can make an appropriate response. </p>
<p>To illustrate what I am talking about, let's imagine that you are standing at a pedestrian crossing waiting for traffic lights to change so that you can safely cross the road. The event is the change in traffic light which makes you subsequently take an action – which, in this case, is crossing the road. </p>
<p>Similarly in web development, we can take an action whenever an event we have interest in takes place.</p>
<p>Some of the common events you might have come across in web development include:</p>
<ol>
<li>Mouse events</li>
</ol>
<ul>
<li><code>click</code></li>
<li><code>dblclick</code></li>
<li><code>mousemove</code></li>
<li><code>mouseover</code></li>
<li><code>mousewheel</code></li>
<li><code>mouseout</code></li>
<li><code>contextmenu</code></li>
<li><code>mousedown</code></li>
<li><code>mouseup</code></li>
</ul>
<p>2. Touch events</p>
<ul>
<li><code>touchstart</code></li>
<li><code>touchmove</code></li>
<li><code>touchend</code></li>
<li><code>touchcancel</code></li>
</ul>
<p>3. Keyboard events</p>
<ul>
<li><code>keydown</code></li>
<li><code>keypress</code></li>
<li><code>keyup</code></li>
</ul>
<p>4. Form events</p>
<ul>
<li><code>focus</code></li>
<li><code>blur</code></li>
<li><code>change</code></li>
<li><code>submit</code></li>
</ul>
<p>5. Window events</p>
<ul>
<li><code>scroll</code></li>
<li><code>resize</code></li>
<li><code>hashchange</code></li>
<li><code>load</code></li>
<li><code>unload</code></li>
</ul>
<p>For a complete list of events and the different categories they fall into, you can check out the <a href="https://developer.mozilla.org/en-US/docs/Web/Events">MDN documentation</a>. Some of the events listed are standard events in official specifications, while others are events used internally by specific browsers.</p>
<h2 id="what-are-event-handlers">What are event handlers?</h2>
<p>As mentioned above, we monitor events so that whenever we receive a notification that the event has occurred, the program can take the appropriate action. </p>
<p>This action is often taken in functions called <strong>event handlers</strong> which are also referred to as <strong>event listeners</strong>. If an event occurs and the event handler is invoked, we say an event has been registered. This is illustrated in the code below. </p>
<p>If the button with <code>id</code> <code>btn</code> is clicked, the event handler is invoked and an alert with the text "Button has been clicked" is displayed. The <code>onclick</code> property has been assigned to a function which is the event handler. This is one of three ways of adding an event handler to a DOM element.</p><pre><code class="language-js">const button = document.getElementById("btn");
button.onclick = function(){
alert("Button has been clicked");
}
</code></pre>
<p>It is worth pointing out that <strong>event handlers</strong> are mostly declared as functions, but they can also be objects.</p>
<h2 id="how-to-assign-event-handlers">How to assign event handlers</h2>
<p>There are multiple ways of attaching event handlers to HTML elements. We'll discuss these methods, along with their pros and cons, below.</p>
<h3 id="assign-an-event-handler-with-an-html-attribute">Assign an event handler with an HTML attribute</h3>
<p>This is the easiest way of attaching an event handler to HTML elements, though it is the least recommended. It involves using an inline HTML event attribute named <code>on&lt;event&gt;</code> whose value is the event handler. For example <code>onclick</code>, <code>onchange</code>, <code>onsubmit</code> and so on. </p>
<p>Take note that it is not uncommon to find HTML event attributes named <code>onClick</code>, <code>onChange</code> or <code>onSubmit</code> because HTML attributes are not case sensitive. Essentially it is syntactically correct to use <code>onclick</code>, <code>onClick</code> or <code>ONCLICK</code>. But it's common practice to leave it in lowercase.</p><pre><code class="language-html">&lt;button onclick = "alert('Hello world!')"&gt; Click Me &lt;/button&gt;
&lt;button onclick = "(() =&gt; alert('Hello World!'))()"&gt; Click Me Too &lt;/button&gt;
&lt;button onclick = "(function(){alert('Hello World!')})()"&gt; And Me &lt;/button&gt;
</code></pre>
<p>In the above example, JavaScript code has been literally assigned to the HTML event attribute. </p>
<p>Take note of the Immediately Invoked Function Expression (IIFE) format in the last two <code>button</code> elements. Though this appears easy and straightforward, assigning an inline HTML event attribute is inefficient and difficult to maintain. </p>
<p>Assume you have over 20 such buttons in your markup. It would be repetitive to write the same JavaScript code for each button. It is always better to write JavaScript in its own file so that you can easily use the same code for multiple HTML files. </p>
<p>Besides, you cannot have multiple lines of JavaScript code inline. Inline JavaScript code is considered an anti-pattern due to the aforementioned reasons. So try to avoid it unless you are trying out something quick.</p>
<h3 id="declare-an-event-handler-in-a-script-tag">Declare an event handler in a <code>script</code> tag</h3>
<p>Instead of doing the above, you can also declare the event handler in a <code>script</code> tag and invoke it inline as shown below.</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en-US"&gt;
&lt;head&gt;
&lt;meta charset="utf-8" /&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1" /&gt;
&lt;link rel="stylesheet" href="./index.css" type="text/css" /&gt;
&lt;script&gt;
function onClickHandler(){
alert("Hello world!");
}
&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div class="wrapper"&gt;
&lt;button onclick = "onClickHandler()"&gt; Click me &lt;/button&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<p>Notice, though, that simply assigning the function name as a value of the HTML event attribute like <code>onclick = "onClickHandler"</code> will not work. You need to invoke it as shown above, enclosing the invocation in quotes just like the value of any HTML attribute.</p>
<h3 id="assign-an-event-handler-using-the-dom-property">Assign an event handler using the DOM property</h3>
<p>Instead of using inline HTML event attribute illustrated above, you can also assign the event handler as the value of an event property on the DOM element. This is only possible inside a <code>script</code> tag or in a JavaScript file. </p>
<p>One limitation of this approach is that you cannot have multiple event handlers for the same event. If you have multiple handlers for the same event, as illustrated below, only the last one will be applied. The others will be overwritten.</p><pre><code class="language-js">const button = document.getElementById("btn");
button.onclick = function(){
alert("Button has been clicked");
}
// Only this is applied
button.onclick = function(){
console.log("Button has been clicked");
}
</code></pre>
<p>If you want to remove the event listener from the <code>onclick</code> event, you can simply re-assign <code>button.onclick</code> to <code>null</code>.</p><pre><code class="language-js">button.onclick = null
</code></pre>
<h3 id="how-to-improve-the-dom-method-of-adding-event-listeners">How to improve the DOM method of adding event listeners</h3>
<p>The above method of adding event listeners is preferable to using inline JavaScript. Still, it has a limitation of restricting an element to have only one event handler for each event. </p>
<p>For example you cannot apply multiple event handlers for a click event on an element. </p>
<p>To remedy this limitation, <code>addEventListener</code> and <code>removeEventListener</code> were introduced. This enables you to add multiple event handlers for the same event on the same element.</p><pre><code class="language-js">const button = document.getElementById('btn');
button.addEventListener('click', () =&gt; {
alert('Hello World');
})
button.addEventListener('click', () =&gt; {
console.log('Hello World');
})
</code></pre>
<p>In the code above, an element with <code>id</code> <code>btn</code> is selected and then monitored for a <code>click</code> event by attaching two event handlers. The first event handler will be invoked and an alert message of <code>Hello World</code> pops up. Subsequently <code>Hello World</code> will also be logged in the console.</p>
<p>As you might have noticed from the above examples, the function signature of <code>element.addEventListener</code> is:</p><pre><code class="language-js">element.addEventListener(event, eventHandler, [optional parameter])
</code></pre>
<h4 id="parameters-to-the-addeventlistener-method">Parameters to the <code>addEventListener</code> method</h4>
<ol>
<li><strong>event</strong></li>
</ol>
<p>The first parameter, <code>event</code> (which is a required parameter) is a string that specifies the name of the event. For example <code>"click"</code>, <code>"mouseover"</code>, <code>"mouseout"</code> and so on.</p>
<p>2. <strong> &nbsp;eventHandler</strong></p>
<p>The second parameter, which like the first is also required, is a function which is invoked when the event occurs. An event object is passed as its first parameter. The event object depends on the type of event. For example, a <code>MouseEvent</code> object is passed for a click event.</p>
<p>3. &nbsp; <strong>Optional parameter</strong></p>
<p>The third parameter, which is an optional parameter, is an object with the properties:</p>
<ul>
<li><code>once</code>: Its value is a boolean. If <code>true</code>, the listener is removed after it triggers.</li>
<li><code>capture</code>: Its value is also a boolean. It sets the phase where it should handle the event, which is either in the bubbling or capturing phase. The default value is <code>false</code> , therefore the event is captured in the bubbling phase. You can read more about it <a href="https://javascript.info/bubbling-and-capturing">here</a>. &nbsp;For historical reasons, options can also be <code>true</code> or <code>false</code>.</li>
<li><code>passive</code>: Its value is also a boolean. If it is <code>true</code>, then the handler will not call <code>preventDefault()</code>. <code>preventDefault()</code> is a method of the event object.</li>
</ul>
<p>Similarly if you want to stop monitoring the <code>click</code> event, you can use &nbsp;<code>element.removeEventListener</code>. But this only works if the event listener has been registered using <code>element.addEventListener</code>. The function signature is similar to that of <code>element.addEventListener</code>.</p><pre><code class="language-js">element.removeEventListener(event, eventHandler, [options])
</code></pre>
<p>For us to use <code>element.removeEventListener</code> to remove an <code>event</code>, the function passed as second argument to <code>element.addEventListener</code> must be a named function when adding the event listener. This ensures that the same function can be passed to <code>element.removeEventListener</code> if we want to remove it. </p>
<p>It is also worth mentioning here that, if you passed the optional arguments to the event handler, then you must also pass the same optional arguments to the <code>removeEventListener</code>.</p><pre><code class="language-js">const button = document.getElementById('btn');
button.removeEventListener('click', clickHandler)
</code></pre>
<h2 id="what-are-event-objects">What are event objects?</h2>
<p>An event handler has a parameter called <strong>event object</strong> which holds additional information about the event. </p>
<p>The information stored in the <strong>event object</strong> depends on the type of event. For example, the <strong>event object</strong> passed to a <code>click</code> event handler has a property called <code>target</code> which references the element from which the click event originated. </p>
<p>In the example below, if you click the element with <code>id</code> <code>btn</code>, <code>event.target</code> will reference it. All click event handlers are passed an <strong>event object</strong> with the <code>target</code> property. As already pointed out, different events have <strong>event object</strong> parameters which store different information.</p><pre><code class="language-js">const button = document.getElementById("btn");
button.addEventListener("click", event =&gt; {
console.log(event.target);
})
</code></pre>
<h2 id="the-value-of-this">The value of <code>this</code></h2>
<p>In an <code>event</code> handler, the value of <code>this</code> is the element on which the event handler is registered. Take note that the element on which the event handler is registered may not necessarily be the same as the element on which the event occurred. </p>
<p>For example in the code below, the event handler is registered on the wrapper. Normally, the value of <code>this</code> is the same as <code>event.currentTarget</code>. If you click the <code>button</code>, the value of <code>this</code> inside <code>onClickHandler</code> is the <code>div</code> not the <code>button</code> because it is the <code>div</code> on which the event handler is registered though the click originated from the button. </p>
<p>This is called <code>event propagation</code>. It is a very important concept which you can read about <a href="https://www.sitepoint.com/event-bubbling-javascript/">here</a> if you are interested.</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en-US"&gt;
&lt;head&gt;
&lt;meta charset="utf-8" /&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1" /&gt;
&lt;link rel="stylesheet" href="./index.css" type="text/css" /&gt;
&lt;script&gt;
function onClickHandler(){
console.log(this)
alert("Hello world!");
}
const wrapper = document.querySelector(".wrapper");
wrapper.addEventListener("click", onClickHandler);
&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div class="wrapper"&gt;
&lt;button&gt; Click me &lt;/button&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<h2 id="conclusion">Conclusion</h2>
<p>In this article we looked at:</p>
<ul>
<li>Browser events and what they are</li>
<li>Different ways of adding event handlers to DOM elements</li>
<li>Event object parameters to event handlers</li>
<li>The value of <code>this</code> in an event handler</li>
</ul>
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
