---
card: "https://cdn-media-1.freecodecamp.org/images/1*FLAKTYk8B7EpCYlMqtAFkw.jpeg"
tags: [JavaScript]
description: "by Kurt"
author: "Milad E. Fahmy"
title: "How to write a jQuery like library in 71 lines of code — Learn about the DOM"
created: "2021-08-16T10:30:13+02:00"
modified: "2021-08-16T10:30:13+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development tag-programming tag-design tag-learning-to-code ">
<header class="post-full-header">
<h1 class="post-full-title">How to write a jQuery like library in 71 lines of code — Learn about the DOM</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*FLAKTYk8B7EpCYlMqtAFkw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*FLAKTYk8B7EpCYlMqtAFkw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*FLAKTYk8B7EpCYlMqtAFkw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*FLAKTYk8B7EpCYlMqtAFkw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*FLAKTYk8B7EpCYlMqtAFkw.jpeg" alt="How to write a jQuery like library in 71 lines of code — Learn about the DOM">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
this.selector = selector || null; //The selector being targeted
this.element = null; //The actual DOM element
};</code></pre><h4 id="now-we-can-start-adding-functionality-">Now we can start adding functionality.</h4><p>The jQuery methods we will replicate are the selector/creator<em> <strong>$() .on(), .off(), .val(), .append, .prepend() </strong>and <strong>.html()</strong></em></p><p>Lets dive into event binding first. This is by far the most complicated method we will create as well as the most useful. This is the glue in a two-way data binding model. (The model updates its subscribers when an event such as update is triggered, and the subscribers do likewise.)</p><p>We will be using a <a href="https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript" rel="noopener">Publish/Subscribe design pattern</a>.</p><p>When<strong> <em>.on(event, callback)</em></strong> is called we <strong><em>subscribe </em></strong>to the event and similarly when <strong><em>.off(event)</em></strong> is called we<strong> <em>unsubscribe</em></strong><em> </em>from the event.</p><p>The event handler will be its own object.</p><p>Let’s start by creating a base object and extending the prototype of <strong><em>domElement </em></strong>with it.</p><pre><code class="language-js">domElement.prototype.eventHandler = {
events: [] //Array of events &amp; callbacks the element is subscribed to.
}</code></pre><p>Great, now let’s create our subscriber method. We’ll call it <strong><em>bindEvent</em> </strong>since it is binding an event listener to our DOM element.</p><pre><code class="language-js">domElement.prototype.eventHandler = {
events: [], //Array of events the element is subscribed to.
bindEvent: function(event, callback, targetElement) {
//remove any duplicate event
this.unbindEvent(event,targetElement);
//bind event listener to DOM element
targetElement.addEventListener(event, callback, false);
this.events.push({
type: event,
event: callback,
target: targetElement
}); //push the new event into our events array.
}
}</code></pre><h4 id="that-s-it-lets-break-the-function-down-quickly">That’s it! Lets break the function down quickly</h4><ol><li>We remove any existing events on the element that have the the type that is being bound. This is purely a matter of personal preference. I prefer to keep singular event handlers, since they’re easier to manage and debug. Removing the line will allow multiple handlers of the same type. We will create the <strong><em>unbindEvent </em></strong>function a little later.</li><li>We bind the event to the DOM Element, making it live.</li><li>We push the event and all its info into the events array so the element can keep track of our listeners.</li></ol><p>Now, before we can remove an event, we will need a method to find and return it from the events array, if it exists. Lets create a quick method to find and return an event by its type, using the built in <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" rel="noopener"><strong><em>array filter</em></strong></a> method.</p><pre><code class="language-js">domElement.prototype.eventHandler = {
events: [], //Array of events the element is subscribed to.
bindEvent: function(event, callback, targetElement) {
//remove any duplicate event
this.unbindEvent(event,targetElement);
//bind event listener to DOM element
targetElement.addEventListener(event, callback, false);
this.events.push({
type: event,
event: callback,
target: targetElement
}); //push the new event into our events array.
},
findEvent: function(event) {
return this.events.filter(function(evt) {
return (evt.type === event); //if event type is a match return
}, event)[0];
}
}</code></pre><h4 id="now-we-can-add-our-unbindevent-method-">Now we can add our <strong><em>unbindEvent </em></strong>method.</h4><pre><code class="language-js">domElement.prototype.eventHandler = {
events: [], //Array of events the element is subscribed to.
bindEvent: function(event, callback, targetElement) {
//remove any duplicate event
this.unbindEvent(event,targetElement);
//bind event listener to DOM element
targetElement.addEventListener(event, callback, false);
this.events.push({
type: event,
event: callback,
target: targetElement
}); //push the new event into our events array.
},
findEvent: function(event) {
return this.events.filter(function(evt) {
return (evt.type === event); //if event type is a match return
}, event)[0];
},
unbindEvent: function(event, targetElement) {
//search events
var foundEvent = this.findEvent(event);
//remove event listener if found
if (foundEvent !== undefined) {
targetElement.removeEventListener(event, foundEvent.event, false);
}
//update the events array
this.events = this.events.filter(function(evt) {
return (evt.type !== event);
}, event);
}
See the Pen <a href='https://codepen.io/kurtr/pen/eJbEWb/'>domElement Events</a> by kurt rohlandt
(<a href='https://codepen.io/kurtr'>@kurtr</a>) on <a href='https://codepen.io'>CodePen</a>.
this.eventHandler.bindEvent(event, callback, this.element);
}
domElement.prototype.off = function(event) {
this.eventHandler.unbindEvent(event, this.element);
}</code></pre><p>See how that works? Now lets add in our other utility functions…</p><pre><code class="language-js">domElement.prototype.val = function(newVal) {
return (newVal !== undefined ? this.element.value = newVal : this.element.value);
};
domElement.prototype.append = function(html) {
this.element.innerHTML = this.element.innerHTML + html;
};
domElement.prototype.prepend = function(html) {
this.element.innerHTML = html + this.element.innerHTML;
};
domElement.prototype.html = function(html) {
if(html === undefined){
return this.element.innerHTML;
}
this.element.innerHTML = html;
};</code></pre><p>These are all pretty straight forward. The only one to pay attention to is<strong><em> .html().</em></strong> This method can be invoked in two ways if it is called with no argument it will return the <strong><em>innerHTML </em></strong>for the element but if it is called with an argument it sets the <strong><em>HTML </em></strong>for the element. This is commonly refereed to as a <strong><em>getter / setter </em></strong>function.</p><h3 id="initialization">Initialization</h3><h4 id="on-initialization-we-need-to-do-one-of-two-things-">On initialization we need to do one of two things…</h4><ol><li>If the selector starts with an open bracket ‘&lt;’ we wi<em>ll crea</em>te a new element.</li><li>Otherwise we will use the <strong><em>document.querySelector</em></strong> to select an <em>existing </em>element.</li></ol><p>For the purpose of simplicity, I am only doing the bare minimum in regards to validating the HTML in the case of creating an element and when selecting an element I am using <strong><em>document.querySelector</em></strong> meaning that it will only return a single element (the first match) regardless of the amount of matches.</p><p>This can be changed without too much effort to select all matching elements by using <strong><em>document.querySelectorAll</em></strong> and refactoring the methods to work with an element array.</p><pre><code class="language-js">domElement.prototype.init = function() {
switch(this.selector[0]){
case ‘&lt;’ :
//create element
var matches = this.selector.match(/&lt;([\w-]*)&gt;/);
if(matches === null || matches === undefined){
throw ‘Invalid Selector / Node’;
return false;
}
var nodeName = matches[0].replace(‘&lt;’,’’).replace(‘&gt;’,’’);
this.element = document.createElement(nodeName);
break;
default :
this.element = document.querySelector(this.selector);
}
};</code></pre><h4 id="lets-walk-through-the-above-code-">Lets walk through the above code.</h4><ol><li>We use a <strong><em>switch </em></strong>statement, and pass the first character of our selector as the argument.</li><li>If it begins with a bracket, we do a quick <strong><em>Regex </em></strong>match to find the text between the the open and close brackets. If this fails we throw an error that the selector is invalid.</li><li>If a match is made, we strip out the brackets and pass the text to <strong><em>document.createElement </em></strong>to create a new element.</li><li>Alternatively, we look for a match using <strong><em>document.querySelector </em></strong>this returns null if there is no match found.</li><li>Lastly, we set the element property on our <strong><em>domElement </em></strong>to the matched / created element.</li></ol><h3 id="using-to-reference-domelement">Using $ to reference <strong><em>domElement</em></strong></h3><h4 id="lastly-we-will-assign-the-symbol-to-initialize-a-new-domelement-">Lastly we will assign the <strong><em>$ </em></strong>symbol to initialize a new <strong><em>domElement</em></strong>.</h4><pre><code class="language-js">$ = function(selector){
var el = new domElement(selector); // new domElement
el.init(); // initialize the domElement
return el; //return the domELement
See the Pen <a href='https://codepen.io/kurtr/pen/wMRgJK/'>javascriptDom</a> by kurt rohlandt
(<a href='https://codepen.io/kurtr'>@kurtr</a>) on <a href='https://codepen.io'>CodePen</a>.
this.selector = selector || null;
this.element = null;
};
domElement.prototype.init = function() {
switch (this.selector[0]) {
case ‘&lt;’:
var matches = this.selector.match(/&lt;([\w-]*)&gt;/);
if (matches === null || matches === undefined) {
throw ‘Invalid Selector / Node’;
return false;
}
var nodeName = matches[0].replace(‘&lt;’, ‘’).replace(‘&gt;’, ‘’);
this.element = document.createElement(nodeName);
break;
default:
this.element = document.querySelector(this.selector);
}
};
domElement.prototype.on = function(event, callback) {
var evt = this.eventHandler.bindEvent(event, callback, this.element);
}
domElement.prototype.off = function(event) {
var evt = this.eventHandler.unbindEvent(event, this.element);
}
domElement.prototype.val = function(newVal) {
return (newVal !== undefined ? this.element.value = newVal : this.element.value);
};
domElement.prototype.append = function(html) {
this.element.innerHTML = this.element.innerHTML + html;
};
domElement.prototype.prepend = function(html) {
this.element.innerHTML = html + this.element.innerHTML;
};
domElement.prototype.html = function(html) {
if (html === undefined) {
return this.element.innerHTML;
}
this.element.innerHTML = html;
};
domElement.prototype.eventHandler = {
events: [],
bindEvent: function(event, callback, targetElement) {
this.unbindEvent(event, targetElement);
targetElement.addEventListener(event, callback, false);
this.events.push({
type: event,
event: callback,
target: targetElement
});
},
findEvent: function(event) {
return this.events.filter(function(evt) {
return (evt.type === event);
}, event)[0];
},
unbindEvent: function(event, targetElement) {
var foundEvent = this.findEvent(event);
if (foundEvent !== undefined) {
targetElement.removeEventListener(event, foundEvent.event, false);
}
this.events = this.events.filter(function(evt) {
return (evt.type !== event);
}, event);
}
};
$ = function(selector) {
var el = new domElement(selector);
el.init();
return el;
}</code></pre><p>If you enjoyed this post take a look at some other stuff I’ve written.</p><p><a href="https://medium.com/p/9df82cf215c5" rel="noopener"><strong>Preventative Programming — how fix to bugs before they happen</strong></a><br><a href="https://medium.com/p/9df82cf215c5" rel="noopener"><em>…and why Sherlock Holmes would have been a brilliant programmer</em></a></p><p><a href="https://medium.com/p/1ed8e734b04f" rel="noopener"><strong>5 Things to Remember When You’re Learning to Program</strong></a><br><a href="https://medium.com/p/1ed8e734b04f" rel="noopener"><em>Learning to program is challenging. Aside from choosing a language or setting up a development environment that you…</em></a></p><p><a href="https://medium.com/p/54a0533c4335" rel="noopener"><strong>How I Became a Programmer. And When I Started Calling Myself One</strong></a><br><a href="https://medium.com/p/54a0533c4335" rel="noopener"><em>I’ve wanted to start blogging about programming for months now and like so many others before me I set off full of…</em></a></p><p><a href="https://medium.com/p/ec6e1386084e" rel="noopener"><strong>Making it rain code — Matrix Style</strong></a><br><a href="https://medium.com/p/ec6e1386084e" rel="noopener"><em>An introduction to HTML 5 canvas animations</em></a></p><p><a href="https://medium.com/p/f5eedc557b3e" rel="noopener"><strong>Turning code to cash — How to make money as a Web Developer and live to tell the tale.</strong></a><br><a href="https://medium.com/p/f5eedc557b3e" rel="noopener"><em>So you just learnt to code. You’re eager and anyone who can’t code thinks you’re a genius, word gets out and all of a…</em>medium.com</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
