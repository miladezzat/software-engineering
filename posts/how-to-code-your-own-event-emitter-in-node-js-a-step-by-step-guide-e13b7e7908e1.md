---
card: "https://cdn-media-1.freecodecamp.org/images/0*R0F_SNqsLvxWG99J"
tags: [Nodejs]
description: by Rajesh Pillai
author: "Milad E. Fahmy"
title: "How to code your own event emitter in Node.js: a step-by-step guide"
created: "2021-08-15T19:37:12+02:00"
modified: "2021-08-15T19:37:12+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nodejs tag-javascript tag-tech tag-programming tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">How to code your own event emitter in Node.js: a step-by-step guide</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*R0F_SNqsLvxWG99J 300w,
https://cdn-media-1.freecodecamp.org/images/0*R0F_SNqsLvxWG99J 600w,
https://cdn-media-1.freecodecamp.org/images/0*R0F_SNqsLvxWG99J 1000w,
https://cdn-media-1.freecodecamp.org/images/0*R0F_SNqsLvxWG99J 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*R0F_SNqsLvxWG99J" alt="How to code your own event emitter in Node.js: a step-by-step guide">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Rajesh Pillai</p>
<h1 id="how-to-code-your-own-event-emitter-in-node-js-a-step-by-step-guide">How to code your own event emitter in Node.js: a step-by-step guide</h1>
<h4 id="understand-node-internals-by-coding-small-packages-modules">Understand Node internals by coding small packages/modules</h4>
<figcaption>Mastering the Node.JS Internals</figcaption>
</figure>
<p>If you are new to Node.js there are many tutorials here on Medium and elsewhere. You can check out my article <a href="https://codeburst.io/all-about-core-nodejs-part-1-b9f4b0a83278" rel="noopener">All About Core Node.JS</a>, for example.</p>
<p>But without further ado, let's get to the topic under discussion: “Event Emitters”. Event Emitters play a very important role in the Node.js ecosystem.</p>
<p>The EventEmitter is a module that facilitates communication/interaction between objects in Node. EventEmitter is at the core of Node asynchronous event-driven architecture. Many of Node’s built-in modules inherit from EventEmitter including prominent frameworks like Express.js.</p>
<p>The concept is quite simple: emitter objects emit named events that cause previously registered listeners to be called. So, an emitter object basically has two main features:</p>
<ul>
<li>Emitting name events.</li>
<li>Registering and unregistering listener functions.</li>
</ul>
<p>It’s kind of like a pub/sub or observer design pattern (though not exactly).</p>
<h4 id="what-we-will-be-building-in-this-tutorial">What we will be building in this tutorial</h4>
<ul>
<li>EventEmitter class</li>
<li>on / addEventListener method</li>
<li>off / removeEventListener method</li>
<li>once method</li>
<li>emit method</li>
<li>rawListeners method</li>
<li>listenerCount method</li>
</ul>
<p>The above basic features are sufficient to implement a full system using the eventing model.</p>
<p>Before we get into the coding, let’s take a look at how we will be using the EventEmitter class. Please note that our code will mimic the exact API of the Node.js ‘events’ module.</p>
<p>In fact, if you replace our EventEmitter with Node.js’s built-in ‘events’ module you will get the same result.</p>
<h4 id="example-1-create-an-event-emitter-instance-and-register-a-couple-of-callbacks">Example 1 — Create an event emitter instance and register a couple of callbacks</h4><pre><code class="language-js">const myEmitter = new EventEmitter();
function c1() {
console.log('an event occurred!');
}
function c2() {
console.log('yet another event occurred!');
}
myEmitter.on('eventOne', c1); // Register for eventOne
myEmitter.on('eventOne', c2); // Register for eventOne</code></pre>
<p>When the event ‘eventOne’ is emitted, both the above callbacks should be invoked.</p><pre><code>myEmitter.emit('eventOne');</code></pre>
<p>The output in the console will be as follows:</p><pre><code>an event occurred!
yet another event occurred!</code></pre>
<h4 id="example-2-registering-for-the-event-to-be-fired-only-one-time-using-once-">Example 2— Registering for the event to be fired only one time using once.</h4><pre><code>myEmitter.once('eventOnce', () =&gt; console.log('eventOnce once fired'));  </code></pre>
<p>Emitting the event ‘eventOnce’:</p><pre><code class="language-js">myEmitter.emit('eventOne');</code></pre>
<p>The following output should appear in the console:</p><pre><code>eventOnce once fired</code></pre>
<p>Emitting events registered with once again will have no impact.</p><pre><code class="language-js">myEmitter.emit('eventOne');</code></pre>
<p>Since the event was only emitted once, the above statement will have no impact.</p>
<h4 id="example-3-registering-for-the-event-with-callback-parameters">Example 3— Registering for the event with callback parameters</h4><pre><code class="language-js">myEmitter.on('status', (code, msg)=&gt; console.log(`Got ${code} and ${msg}`));</code></pre>
<p>Emitting the event with parameters:</p><pre><code class="language-js">myEmitter.emit('status', 200, 'ok');</code></pre>
<p>The output in the console will be as below:</p><pre><code>Got 200 and ok</code></pre>
<p>NOTE: You can emit events multiple times (except the ones registered with the once method).</p>
<h4 id="example-4-unregistering-events">Example 4— Unregistering events</h4><pre><code class="language-js">myEmitter.off('eventOne', c1);</code></pre>
<p>Now if you emit the event as follows, nothing will happen and it will be a noop:</p><pre><code class="language-js">myEmitter.emit('eventOne');  // noop</code></pre>
<h4 id="example-5-getting-listener-count">Example 5— Getting Listener count</h4><pre><code class="language-js">console.log(myEmitter.listenerCount('eventOne'));</code></pre>
<p>NOTE: If the event has been unregistered using off or removeListener method, then the count will be 0.</p>
<h4 id="example-6-getting-raw-listeners">Example 6— Getting Raw Listeners</h4><pre><code class="language-js">console.log(myEmitter.rawListeners('eventOne'));</code></pre>
<h4 id="example-7-async-example-demo">Example 7— Async Example demo</h4><pre><code class="language-js">// Example 2-&gt;Adapted and thanks to Sameer Buna
class WithTime extends EventEmitter {
execute(asyncFunc, ...args) {
this.emit('begin');
console.time('execute');
this.on('data', (data)=&gt; console.log('got data ', data));
asyncFunc(...args, (err, data) =&gt; {
if (err) {
return this.emit('error', err);
}
this.emit('data', data);
console.timeEnd('execute');
this.emit('end');
});
}
}</code></pre>
<p>Using the withTime event emitter:</p><pre><code class="language-js">const withTime = new WithTime();
withTime.on('begin', () =&gt; console.log('About to execute'));
withTime.on('end', () =&gt; console.log('Done with execute'));
const readFile = (url, cb) =&gt; {
fetch(url)
.then((resp) =&gt; resp.json()) // Transform the data into json
.then(function(data) {
cb(null, data);
});
}
withTime.execute(readFile, 'https://jsonplaceholder.typicode.com/posts/1');</code></pre>
<p>Check the output in the console. The list of posts will be displayed along with other logs.</p>
<h4 id="the-observer-pattern-for-our-event-emitter">The Observer Pattern for Our Event Emitter</h4>
<h4 id="visual-diagram-1-methods-in-our-eventemitter-">Visual Diagram 1 (Methods in our EventEmitter)</h4>
<p>Since we now understand the usage API, let’s get to coding the module.</p>
<h4 id="the-complete-boilerplate-code-for-the-eventemitter-class">The complete boilerplate code for the EventEmitter class</h4>
<p>We will be filling in the details incrementally in the next couple sections.</p><pre><code class="language-js">class EventEmitter {
listeners = {};  // key-value pair
addListener(eventName, fn) {}
on(eventName, fn) {}
removeListener(eventName, fn) {}
off(eventName, fn) {}
once(eventName, fn) {}
emit(eventName, ...args) { }
listenerCount(eventName) {}
rawListeners(eventName) {}
}</code></pre>
<p>We begin by creating the template for the EventEmitter class along with a hash to store the listeners. The listeners will be stored as a key-value pair. The value could be an array (since for the same event we allow multiple listeners to be registered).</p>
<h4 id="1-the-addlistener-method">1. The addListener() method</h4>
<p>Let us now implement the addListener method. It takes in an event name and a callback function to be executed.</p><pre><code class="language-js">  addListener(event, fn) {
this.listeners[event] = this.listeners[event] || [];
this.listeners[event].push(fn);
return this;
}</code></pre>
<h4 id="a-little-explanation-">A little explanation:</h4>
<p>The addListener event checks if the event is already registered. If yes, returns the array, otherwise empty array.</p><pre><code class="language-js">this.listeners[event] // will return array of events or undefined (first time registration)</code></pre>
<p>For example…</p>
<p>Let’s understand this with a usage example. Let’s create a new eventEmitter and register a ‘test-event’. This is the first time the ‘test-event’ is being registered.</p><pre><code class="language-js">const eventEmitter = new EventEmitter();
eventEmitter.addListener('test-event',
()=&gt; { console.log ("test one") }
);</code></pre>
<p>Inside addListener () method:</p><pre><code class="language-js">this.listeners[event] =&gt;  this.listeners['test-event']
=&gt; undefined || []
=&gt; []</code></pre>
<p>The result will be:</p><pre><code class="language-js">this.listeners['test-event'] = [];  // empty array</code></pre>
<p>and then the ‘fn’ will be pushed to this array as shown below:</p><pre><code class="language-js">this.listeners['test-event'].push(fn);</code></pre>
<p>I hope this makes the ‘addListener’ method very clear to decipher and understand.</p>
<p><strong>A note: Multiple callbacks can be registered against that same event.</strong></p>
<h4 id="2-the-on-method">2. The on method</h4>
<p>This is just an alias to the ‘addListener’ method. We will be using the ‘on’ method more than the ‘addListener’ method for the sake of convenience.</p><pre><code class="language-js">on(event, fn) {
return this.addListener(event, fn);
}</code></pre>
<h4 id="3-the-removelistener-event-fn-method">3. The removeListener(event, fn) method</h4>
<p>The removeListener method takes an eventName and the callback as the parameters. It removes said listener from the event array.</p>
<p>NOTE: If the event has multiple listeners then other listeners will not be impacted.</p>
<p>First, let’s take a look at the full code for removeListener.</p><pre><code class="language-js">removeListener (event, fn) {
let lis = this.listeners[event];
if (!lis) return this;
for(let i = lis.length; i &gt; 0; i--) {
if (lis[i] === fn) {
lis.splice(i,1);
break;
}
}
return this;
}</code></pre>
<p>Here’s the removeListener method explained step-by-step:</p>
<ul>
<li>Grab the array of listeners by ‘event’</li>
<li>If none found return ‘this’ for chaining.</li>
<li>If found, loop through all listeners. If the current listener matches with the ‘fn’ parameter use the splice method of the array to remove it. Break from the loop.</li>
<li>Return ‘this’ to continue chaining.</li>
</ul>
<h4 id="4-the-off-event-fn-method">4. The off(event, fn) method</h4>
<p>This is just an alias to the ‘removeListener’ method. We will be using the ‘on’ method more than the ‘addListener’ method for sake of convenience.</p><pre><code class="language-js">  off(event, fn) {
return this.removeListener(event, fn);
}</code></pre>
<h4 id="5-the-once-eventname-fn-method">5. The once(eventName, fn) method</h4>
<p>Adds a <strong>one-time</strong> <code>listener</code> function for the event named <code>eventName</code>. The next time <code>eventName</code> is triggered, this listener is removed and then invoked.</p>
<p>Use for setup/init kind of events.</p>
<p>Let’s take a peek at the code.</p><pre><code class="language-js">once(eventName, fn) {
this.listeners[event] = this.listeners[eventName] || [];
const onceWrapper = () =&gt; {
fn();
this.off(eventName, onceWrapper);
}
this.listeners[eventName].push(onceWrapper);
return this;
}</code></pre>
<p>Here’s the <strong>once</strong> method explained step-by-step:</p>
<ul>
<li>Get the event array object. Empty array if the first time.</li>
<li>Create a wrapper function called onceWrapper which will invoke the fn when the event is emitted and also removes the listener.</li>
<li>Add the wrapped function to the array.</li>
<li>Return ‘this’ for chaining.</li>
</ul>
<h4 id="6-the-emit-eventname-args-method">6. The emit (eventName, ..args) method</h4>
<p>Synchronously calls each of the listeners registered for the event named <code>eventName</code>, in the order they were registered, passing the supplied arguments to each.</p>
<p>Returns <code>true</code> if the event had listeners, <code>false</code> otherwise.</p><pre><code class="language-js">emit(eventName, ...args) {
let fns = this.listeners[eventName];
if (!fns) return false;
fns.forEach((f) =&gt; {
f(...args);
});
return true;
}</code></pre>
<p>Here’s the <strong>emit</strong> method explained step-by-step:</p>
<ul>
<li>Get the functions for said eventName parameter</li>
<li>If no listeners, return false</li>
<li>For all function listeners, invoke the function with the arguments</li>
<li>Return true when done</li>
</ul>
<h4 id="7-the-listenercount-eventname-method">7. The listenerCount (eventName) method</h4>
<p>Returns the number of listeners listening to the event named <code>eventName</code>.</p>
<p>Here’s the source code:</p><pre><code class="language-js">listenerCount(eventName) {
let fns = this.listeners[eventName] || [];
return fns.length;
}</code></pre>
<p>Here’s the listenerCount method explained step-by-step:</p>
<ul>
<li>Get the functions/listeners under consideration or an empty array if none.</li>
<li>Return the length.</li>
</ul>
<h4 id="8-the-rawlisteners-eventname-method">8. The rawListeners(eventName) method</h4>
<p>Returns a copy of the array of listeners for the event named <code>eventName</code>, including any wrappers (such as those created by <code>.once()</code>). The once wrappers in this implementation will not be available if the event has been emitted once.</p><pre><code class="language-js">rawListeners(event) {
return this.listeners[event];
}</code></pre>
<p>The full source code for reference:</p><pre><code class="language-js">class EventEmitter {
listeners = {}
addListener(eventName, fn) {
this.listeners[eventName] = this.listeners[eventName] || [];
this.listeners[eventName].push(fn);
return this;
}
on(eventName, fn) {
return this.addListener(eventName, fn);
}
once(eventName, fn) {
this.listeners[eventName] = this.listeners[eventName] || [];
const onceWrapper = () =&gt; {
fn();
this.off(eventName, onceWrapper);
}
this.listeners[eventName].push(onceWrapper);
return this;
}
off(eventName, fn) {
return this.removeListener(eventName, fn);
}
removeListener (eventName, fn) {
let lis = this.listeners[eventName];
if (!lis) return this;
for(let i = lis.length; i &gt; 0; i--) {
if (lis[i] === fn) {
lis.splice(i,1);
break;
}
}
return this;
}
emit(eventName, ...args) {
let fns = this.listeners[eventName];
if (!fns) return false;
fns.forEach((f) =&gt; {
f(...args);
});
return true;
}
listenerCount(eventName) {
let fns = this.listeners[eventName] || [];
return fns.length;
}
rawListeners(eventName) {
return this.listeners[eventName];
}
}</code></pre>
<p>The complete code is available here:</p>
<p><a href="https://jsbin.com/gibofab/edit?js,console,output" rel="noopener">https://jsbin.com/gibofab/edit?js,console,output</a></p>
<p>As an exercise feel free to implement other events’ APIs from the documentation <a href="https://nodejs.org/api/events.html" rel="noopener">https://nodejs.org/api/events.html</a>.</p>
<p>If you liked this article and want to see more of similar articles, feel free to give a couple of claps :)</p>
<p><strong>NOTE</strong>: The code is optimized for readability and not for performance. Maybe as an exercise, you can optimize the code and share it in the comment section. Haven’t tested fully for edge cases and some validations may be off as this was a quick writeup.</p>
<p>This article is part of the upcoming video course “Node.JS Master Class — Build Your Own ExpressJS-Like MVC Framework from scratch”.</p>
<p>The title of the course is not yet finalized.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
