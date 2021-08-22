---
card: "https://cdn-media-1.freecodecamp.org/images/1*Nozl2qd0SV8Uya2CEkF_mg.jpeg"
tags: [JavaScript]
description: "Most of Node’s objects — like HTTP requests, responses, and s"
author: "Milad E. Fahmy"
title: "Understanding Node.js Event-Driven Architecture"
created: "2021-08-16T10:24:06+02:00"
modified: "2021-08-16T10:24:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-programming tag-software-development tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">Understanding Node.js Event-Driven Architecture</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Nozl2qd0SV8Uya2CEkF_mg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*Nozl2qd0SV8Uya2CEkF_mg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*Nozl2qd0SV8Uya2CEkF_mg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Nozl2qd0SV8Uya2CEkF_mg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Nozl2qd0SV8Uya2CEkF_mg.jpeg" alt="Understanding Node.js Event-Driven Architecture">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
if (typeof fileName !== 'string') {
return cb(new TypeError('argument should be string')); // Sync
}
fs.stat(fileName, (err, stats) =&gt; {
if (err) { return cb(err); } // Async
cb(null, stats.size); // Async
});
}</code></pre><p>Note that this is a bad practice that leads to unexpected errors. Design host functions to consume callback either always synchronously or always asynchronously.</p><p>Let’s explore a simple example of a typical asynchronous Node function that’s written with a callback style:</p><pre><code class="language-js">const readFileAsArray = function(file, cb) {
fs.readFile(file, function(err, data) {
if (err) {
return cb(err);
}
const lines = data.toString().trim().split('\n');
cb(null, lines);
});
};</code></pre><p><code>readFileAsArray</code> takes a file path and a callback function. It reads the file content, splits it into an array of lines, and calls the callback function with that array.</p><p>Here’s an example use for it. Assuming that we have the file <code>numbers.txt</code> in the same directory with content like this:</p><pre><code>10
11
12
13
14
15</code></pre><p>If we have a task to count the odd numbers in that file, we can use <code>readFileAsArray</code> to simplify the code:</p><pre><code class="language-js">readFileAsArray('./numbers.txt', (err, lines) =&gt; {
if (err) throw err;
const numbers = lines.map(Number);
const oddNumbers = numbers.filter(n =&gt; n%2 === 1);
console.log('Odd numbers count:', oddNumbers.length);
});</code></pre><p>The code reads the numbers content into an array of strings, parses them as numbers, and counts the odd ones.</p><p>Node’s callback style is used purely here. The callback has an error-first argument <code>err</code> that’s nullable and we pass the callback as the last argument for the host function. You should always do that in your functions because users will probably assume that. Make the host function receive the callback as its last argument and make the callback expect an error object as its first argument.</p><h4 id="the-modern-javascript-alternative-to-callbacks">The modern JavaScript alternative to Callbacks</h4><p>In modern JavaScript, we have promise objects. Promises can be an alternative to callbacks for asynchronous APIs. Instead of passing a callback as an argument and handling the error in the same place, a promise object allows us to handle success and error cases separately and it also allows us to chain multiple asynchronous calls instead of nesting them.</p><p>If the <code>readFileAsArray</code> function supports promises, we can use it as follows:</p><pre><code class="language-js">readFileAsArray('./numbers.txt')
.then(lines =&gt; {
const numbers = lines.map(Number);
const oddNumbers = numbers.filter(n =&gt; n%2 === 1);
console.log('Odd numbers count:', oddNumbers.length);
})
.catch(console.error);</code></pre><p>Instead of passing in a callback function, we called a <code>.then</code> function on the return value of the host function. This <code>.then</code> function usually gives us access to the same lines array that we get in the callback version, and we can do our processing on it as before. To handle errors, we add a <code>.catch</code> call on the result and that gives us access to an error when it happens.</p><p>Making the host function support a promise interface is easier in modern JavaScript thanks to the new Promise object. Here’s the <code>readFileAsArray</code> function modified to support a promise interface in addition to the callback interface it already supports:</p><pre><code class="language-js">const readFileAsArray = function(file, cb = () =&gt; {}) {
return new Promise((resolve, reject) =&gt; {
fs.readFile(file, function(err, data) {
if (err) {
reject(err);
return cb(err);
}
const lines = data.toString().trim().split('\n');
resolve(lines);
cb(null, lines);
});
});
};</code></pre><p>So we make the function return a Promise object, which wraps the <code>fs.readFile</code> async call. The promise object exposes two arguments, a <code>resolve</code> function and a <code>reject</code> function.</p><p>Whenever we want to invoke the callback with an error we use the promise <code>reject</code> function as well, and whenever we want to invoke the callback with data we use the promise <code>resolve</code> function as well.</p><p>The only other thing we needed to do in this case is to have a default value for this callback argument in case the code is being used with the promise interface. We can use a simple, default empty function in the argument for that case: <code>() =&gt;</code> {}.</p><h4 id="consuming-promises-with-async-await">Consuming promises with async/await</h4><p>Adding a promise interface makes your code a lot easier to work with when there is a need to loop over an async function. With callbacks, things become messy.</p><p>Promises improve that a little bit, and function generators improve on that a little bit more. This said, a more recent alternative to working with async code is to use the <code>async</code> function, which allows us to treat async code as if it was synchronous, making it a lot more readable overall.</p><p>Here’s how we can consume the <code>readFileAsArray</code> function with async/await:</p><pre><code>async function countOdd () {
try {
const lines = await readFileAsArray('./numbers');
const numbers = lines.map(Number);
const oddCount = numbers.filter(n =&gt; n%2 === 1).length;
console.log('Odd numbers count:', oddCount);
} catch(err) {
console.error(err);
}
}
countOdd();</code></pre><p>We first create an async function, which is just a normal function with the word <code>async</code> before it. Inside the async function, we call the <code>readFileAsArray</code> function as if it returns the lines variable, and to make that work, we use the keyword <code>await</code>. After that, we continue the code as if the <code>readFileAsArray</code> call was synchronous.</p><p>To get things to run, we execute the async function. This is very simple and more readable. To work with errors, we need to wrap the async call in a <code>try</code>/<code>catch</code> statement.</p><p>With this async/await feature, we did not have to use any special API (like .then and .catch). We just labeled functions differently and used pure JavaScript for the code.</p><p>We can use the async/await feature with any function that supports a promise interface. However, we can’t use it with callback-style async functions (like setTimeout for example).</p><h3 id="the-eventemitter-module">The EventEmitter Module</h3><p>The EventEmitter is a module that facilitates communication between objects in Node. EventEmitter is at the core of Node asynchronous event-driven architecture. Many of Node’s built-in modules inherit from EventEmitter.</p><p>The concept is simple: emitter objects emit named events that cause previously registered listeners to be called. So, an emitter object basically has two main features:</p><ul><li>Emitting name events.</li><li>Registering and unregistering listener functions.</li></ul><p>To work with the EventEmitter, we just create a class that extends EventEmitter.</p><pre><code>class MyEmitter extends EventEmitter {}</code></pre><p>Emitter objects are what we instantiate from the EventEmitter-based classes:</p><pre><code>const myEmitter = new MyEmitter();</code></pre><p>At any point in the lifecycle of those emitter objects, we can use the emit function to emit any named event we want.</p><pre><code>myEmitter.emit('something-happened');</code></pre><p>Emitting an event is the signal that some condition has occurred. This condition is usually about a state change in the emitting object.</p><p>We can add listener functions using the <code>on</code> method, and those listener functions will be executed every time the emitter object emits their associated name event.</p><h4 id="events-asynchrony">Events !== Asynchrony</h4><p>Let’s take a look at an example:</p><pre><code class="language-js">const EventEmitter = require('events');
class WithLog extends EventEmitter {
execute(taskFunc) {
console.log('Before executing');
this.emit('begin');
taskFunc();
this.emit('end');
console.log('After executing');
}
}
const withLog = new WithLog();
withLog.on('begin', () =&gt; console.log('About to execute'));
withLog.on('end', () =&gt; console.log('Done with execute'));
withLog.execute(() =&gt; console.log('*** Executing task ***'));</code></pre><p>Class <code>WithLog</code> is an event emitter. It defines one instance function <code>execute</code>. This <code>execute</code> function receives one argument, a task function, and wraps its execution with log statements. It fires events before and after the execution.</p><p>To see the sequence of what will happen here, we register listeners on both named events and finally execute a sample task to trigger things.</p><p>Here’s the output of that:</p><pre><code class="language-js">Before executing
About to execute
*** Executing task ***
Done with execute
After executing</code></pre><p>What I want you to notice about the output above is that it all happens synchronously. There is nothing asynchronous about this code.</p><ul><li>We get the “Before executing” line first.</li><li>The <code>begin</code> named event then causes the “About to execute” line.</li><li>The actual execution line then outputs the “*** Executing task ***” line.</li><li>The <code>end</code> named event then causes the “Done with execute” line</li><li>We get the “After executing” line last.</li></ul><p>Just like plain-old callbacks, do not assume that events mean synchronous or asynchronous code.</p><p>This is important, because if we pass an asynchronous <code>taskFunc</code> to <code>execute</code>, the events emitted will no longer be accurate.</p><p>We can simulate the case with a <code>setImmediate</code> call:</p><pre><code class="language-js">// ...
withLog.execute(() =&gt; {
setImmediate(() =&gt; {
console.log('*** Executing task ***')
});
});</code></pre><p>Now the output would be:</p><pre><code>Before executing
About to execute
Done with execute
After executing
*** Executing task ***</code></pre><p>This is wrong. The lines after the async call, which were caused the “Done with execute” and “After executing” calls, are not accurate any more.</p><p>To emit an event after an asynchronous function is done, we’ll need to combine callbacks (or promises) with this event-based communication. The example below demonstrates that.</p><p>One benefit of using events instead of regular callbacks is that we can react to the same signal multiple times by defining multiple listeners. To accomplish the same with callbacks, we have to write more logic inside the single available callback. Events are a great way for applications to allow multiple external plugins to build functionality on top of the application’s core. You can think of them as hook points to allow for customizing the story around a state change.</p><h4 id="asynchronous-events">Asynchronous Events</h4><p>Let’s convert the synchronous sample example into something asynchronous and a little bit more useful.</p><pre><code class="language-js">const fs = require('fs');
const EventEmitter = require('events');
class WithTime extends EventEmitter {
execute(asyncFunc, ...args) {
this.emit('begin');
console.time('execute');
asyncFunc(...args, (err, data) =&gt; {
if (err) {
return this.emit('error', err);
}
this.emit('data', data);
console.timeEnd('execute');
this.emit('end');
});
}
}
const withTime = new WithTime();
withTime.on('begin', () =&gt; console.log('About to execute'));
withTime.on('end', () =&gt; console.log('Done with execute'));
withTime.execute(fs.readFile, __filename);</code></pre><p>The <code>WithTime</code> class executes an <code>asyncFunc</code> and reports the time that’s taken by that <code>asyncFunc</code> using <code>console.time</code> and <code>console.timeEnd</code> calls. It emits the right sequence of events before and after the execution. And also emits error/data events to work with the usual signals of asynchronous calls.</p><p>We test a <code>withTime</code> emitter by passing it an <code>fs.readFile</code> call, which is an asynchronous function. Instead of handling file data with a callback, we can now listen to the data event.</p><p>When we execute this code , we get the right sequence of events, as expected, and we get a reported time for the execution, which is helpful:</p><pre><code>About to execute
execute: 4.507ms
Done with execute</code></pre><p>Note how we needed to combine a callback with an event emitter to accomplish that. If the <code>asynFunc</code> supported promises as well, we could use the async/await feature to do the same:</p><pre><code class="language-js">class WithTime extends EventEmitter {
async execute(asyncFunc, ...args) {
this.emit('begin');
try {
console.time('execute');
const data = await asyncFunc(...args);
this.emit('data', data);
console.timeEnd('execute');
this.emit('end');
} catch(err) {
this.emit('error', err);
}
}
}</code></pre><p>I don’t know about you, but this is much more readable to me than the callback-based code or any .then/.catch lines. The async/await feature brings us as close as possible to the JavaScript language itself, which I think is a big win.</p><h4 id="events-arguments-and-errors">Events Arguments and Errors</h4><p>In the previous example, there were two events that were emitted with extra arguments.</p><p>The error event is emitted with an error object.</p><pre><code>this.emit('error', err);</code></pre><p>The data event is emitted with a data object.</p><pre><code>this.emit('data', data);</code></pre><p>We can use as many arguments as we need after the named event, and all these arguments will be available inside the listener functions we register for these named events.</p><p>For example, to work with the data event, the listener function that we register will get access to the data argument that was passed to the emitted event and that data object is exactly what the <code>asyncFunc</code> exposes.</p><pre><code class="language-js">withTime.on('data', (data) =&gt; {
// do something with data
});</code></pre><p>The <code>error</code> event is usually a special one. In our callback-based example, if we don’t handle the error event with a listener, the node process will actually exit.</p><p>To demonstrate that, make another call to the execute method with a bad argument:</p><pre><code class="language-js">class WithTime extends EventEmitter {
execute(asyncFunc, ...args) {
console.time('execute');
asyncFunc(...args, (err, data) =&gt; {
if (err) {
return this.emit('error', err); // Not Handled
}
console.timeEnd('execute');
});
}
}
const withTime = new WithTime();
withTime.execute(fs.readFile, ''); // BAD CALL
withTime.execute(fs.readFile, __filename);</code></pre><p>The first execute call above will trigger an error. The node process is going to crash and exit:</p><pre><code class="language-js">events.js:163
throw er; // Unhandled 'error' event
^
Error: ENOENT: no such file or directory, open ''</code></pre><p>The second execute call will be affected by this crash and will potentially not get executed at all.</p><p>If we register a listener for the special <code>error</code> event, the behavior of the node process will change. For example:</p><pre><code class="language-js">withTime.on('error', (err) =&gt; {
// do something with err, for example log it somewhere
console.log(err)
});</code></pre><p>If we do the above, the error from the first execute call will be reported but the node process will not crash and exit. The other execute call will finish normally:</p><pre><code>{ Error: ENOENT: no such file or directory, open '' errno: -2, code: 'ENOENT', syscall: 'open', path: '' }
execute: 4.276ms</code></pre><p>Note that Node currently behaves differently with promise-based functions and just outputs a warning, but that will eventually change:</p><pre><code>UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): Error: ENOENT: no such file or directory, open ''
DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.</code></pre><p>The other way to handle exceptions from emitted errors is to register a listener for the global <code>uncaughtException</code> process event. However, catching errors globally with that event is a bad idea.</p><p>The standard advice about <code>uncaughtException</code> is to avoid using it, but if you must do (say to report what happened or do cleanups), you should just let the process exit anyway:</p><pre><code class="language-js">process.on('uncaughtException', (err) =&gt; {
// something went unhandled.
// Do any cleanup and exit anyway!
console.error(err); // don't do just that.
// FORCE exit the process too.
process.exit(1);
});</code></pre><p>However, imagine that multiple error events happen at the exact same time. This means the <code>uncaughtException</code> listener above will be triggered multiple times, which might be a problem for some cleanup code. An example of this is when multiple calls are made to a database shutdown action.</p><p>The <code>EventEmitter</code> module exposes a <code>once</code> method. This method signals to invoke the listener just once, not every time it happens. So, this is a practical use case to use with the uncaughtException because with the first uncaught exception we’ll start doing the cleanup and we know that we’re going to exit the process anyway.</p><h4 id="order-of-listeners">Order of Listeners</h4><p>If we register multiple listeners for the same event, the invocation of those listeners will be in order. The first listener that we register is the first listener that gets invoked.</p><pre><code class="language-js">// प्रथम
withTime.on('data', (data) =&gt; {
console.log(`Length: ${data.length}`);
});
// दूसरा
withTime.on('data', (data) =&gt; {
console.log(`Characters: ${data.toString().length}`);
});
withTime.execute(fs.readFile, __filename);</code></pre><p>The above code will cause the “Length” line to be logged before the “Characters” line, because that’s the order in which we defined those listeners.</p><p>If you need to define a new listener, but have that listener invoked first, you can use the <code>prependListener</code> method:</p><pre><code>// प्रथम
withTime.on('data', (data) =&gt; {
console.log(`Length: ${data.length}`);
});
// दूसरा
withTime.prependListener('data', (data) =&gt; {
console.log(`Characters: ${data.toString().length}`);
});
withTime.execute(fs.readFile, __filename);</code></pre><p>The above will cause the “Characters” line to be logged first.</p><p>And finally, if you need to remove a listener, you can use the <code>removeListener</code> method.</p><p>That’s all I have for this topic. Thanks for reading! Until next time!</p><p>Learning React or Node? Checkout my books:</p><ul><li><a href="http://amzn.to/2peYJZj" rel="noopener">Learn React.js by Building Games</a></li><li><a href="http://amzn.to/2FYfYru" rel="noopener">Node.js Beyond the Basics</a></li></ul>
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
