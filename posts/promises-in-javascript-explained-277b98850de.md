---
card: "https://cdn-media-1.freecodecamp.org/images/1*IXaKMoKxyvrZs1prvukJvw.jpeg"
tags: [JavaScript]
description: "One of the most important questions I faced in interviews was"
author: "Milad E. Fahmy"
title: "How JavaScript promises actually work from the inside out"
created: "2021-08-16T10:18:15+02:00"
modified: "2021-08-16T10:18:15+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-web-development tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How JavaScript promises actually work from the inside out</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*IXaKMoKxyvrZs1prvukJvw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*IXaKMoKxyvrZs1prvukJvw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*IXaKMoKxyvrZs1prvukJvw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*IXaKMoKxyvrZs1prvukJvw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*IXaKMoKxyvrZs1prvukJvw.jpeg" alt="How JavaScript promises actually work from the inside out">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>One of the most important questions I faced in interviews was how promises are implemented. Since async/await is becoming more popular, you need to understand promises.</p><h3 id="what-is-a-promise">What is a Promise?</h3><p>A promise is an object which represents the result of an asynchronous operation which is either resolved or rejected (with a reason).</p><p>There are 3 states</p><ul><li><strong>Fulfilled:</strong> <code>onFulfilled()</code> will be called (e.g., <code>resolve()</code> was called)</li><li><strong>Rejected:</strong> <code>onRejected()</code> will be called (e.g., <code>reject()</code> was called)</li><li><strong>Pending:</strong> not yet fulfilled or rejected</li></ul><p>So let’s see how’s it is implemented:</p><p><a href="https://github.com/then/promise/blob/master/src/core.js" rel="noopener">https://github.com/then/promise/blob/master/src/core.js</a></p><p>According to the definition at <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Parameters" rel="noopener">Mozilla</a>: It takes an <em>executor</em> function as an argument.</p><pre><code class="language-js">function noop() {}
function Promise(executor) {
if (typeof this !== 'object') {
throw new TypeError('Promises must be constructed via new');
}
if (typeof executor !== 'function') {
throw new TypeError('Promise constructor\'s argument is not a function');
}
this._deferredState = 0;
this._state = 0;
this._value = null;
this._deferreds = null;
if (executor === noop) return;
doResolve(executor, this);
}</code></pre><p>Looks like a simple function with some properties initialized to <code>0</code> or <code>null</code>. Here are a few things to notice:</p><p><code><strong>this._state</strong></code><strong> </strong>property can have three possible values as described above:</p><pre><code>0 - pending
1 - fulfilled with _value
2 - rejected with _value
3 - adopted the state of another promise, _value</code></pre><p>Its value is<code>0</code> (<strong><em>pending)</em></strong> when you create a new <strong><em>promise.</em></strong></p><p>Later <code>doResolve(executor, this)</code> is invoked with <code>executor and promise</code> object.</p><p>Let’s move on to the definition of <code>doResolve</code> and see how it’s implemented.</p><pre><code class="language-js">/**
* Take a potentially misbehaving resolver function and make sure
* onFulfilled and onRejected are only called once.
*
* Makes no guarantees about asynchrony.
*/
function doResolve(fn, promise) {
var done = false;
var resolveCallback = function(value) {
if (done) return;
done = true;
resolve(promise, value);
};
var rejectCallback = function(reason) {
if (done) return;
done = true;
reject(promise, reason);
};
var res = tryCallTwo(fn, resolveCallback, rejectCallback);
if (!done &amp;&amp; res === IS_ERROR) {
done = true;
reject(promise, LAST_ERROR);
}
}</code></pre><p>Here it is again calling <code>tryCallTwo</code> function with executor and 2 callbacks. The callbacks are again calling <code>resolve</code> and <code>reject</code></p><p>The <code>done</code> variable is used here to make sure the promise is resolved or rejected only once, so if you try to reject or resolve a promise more than once then it will return because <code>done = true</code>.</p><pre><code class="language-js">function tryCallTwo(fn, a, b) {
try {
fn(a, b);
} catch (ex) {
LAST_ERROR = ex;
return IS_ERROR;
}
}</code></pre><p>This function indirectly calls the main <code>executor</code> callback with 2 arguments. These arguments contain logic on how <code>resolve</code> or <code>reject</code> should be called. You can check<em> resolveCallback </em>and<em> rejectCallback </em>in <code>doResolve</code> function above<em>.</em></p><p>If there is an error during execution it will store the error in <code>LAST_ERROR</code> and return the error.</p><p>Before we jump to the <code>resolve</code> function definition, let’s check out the <code>.then</code> function first:</p><pre><code class="language-js">Promise.prototype.then = function(onFulfilled, onRejected) {
if (this.constructor !== Promise) {
return safeThen(this, onFulfilled, onRejected);
}
var res = new Promise(noop);
handle(this, new Handler(onFulfilled, onRejected, res));
return res;
};
function Handler(onFulfilled, onRejected, promise) {
this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled  : null;
this.onRejected = typeof onRejected === "function" ? onRejected :  null;
this.promise = promise;
}</code></pre><p>So in the above function, then is creating new <code>promise</code> and assigning it as a property to a new function called <code>Handler</code>. The <code>Handler</code> function has arguments <em>onFulfilled </em>and<em> onRejected. </em>Later it will use this promise to resolve or reject with value/reason.</p><p>As you can see, the <code>.then</code> function is calling again another function:</p><pre><code class="language-js">handle(this, new Handler(onFulfilled, onRejected, res));</code></pre><h4 id="implementation-">Implementation:</h4><pre><code class="language-js">function handle(self, deferred) {
while (self._state === 3) {
self = self._value;
}
if (Promise._onHandle) {
Promise._onHandle(self);
}
if (self._state === 0) {
if (self._deferredState === 0) {
self._deferredState = 1;
self._deferreds = deferred;
return;
}
if (self._deferredState === 1) {
self._deferredState = 2;
self._deferreds = [self._deferreds, deferred];
return;
}
self._deferreds.push(deferred);
return;
}
handleResolved(self, deferred);
}</code></pre><ul><li>There is a while loop which will keep assigning the resolved promise object to the current promise which is also a promise for <code>_state === 3</code></li><li>If <code>_state = 0(pending)</code> and promise state has been deferred until another nested promise is resolved, its callback is stored in <code>self._deferreds</code></li></ul><pre><code class="language-js">function handleResolved(self, deferred) {
asap(function() { // asap is external lib used to execute cb immediately
var cb = self._state === 1 ? deferred.onFulfilled :     deferred.onRejected;
if (cb === null) {
if (self._state === 1) {
resolve(deferred.promise, self._value);
} else {
reject(deferred.promise, self._value);
}
return;
}
var ret = tryCallOne(cb, self._value);
if (ret === IS_ERROR) {
reject(deferred.promise, LAST_ERROR);
} else {
resolve(deferred.promise, ret);
}
});
}</code></pre><p>What's happening:</p><ul><li>If the state is 1<code>(fulfilled)</code> then call the <em>resolve</em> else <em>reject</em></li><li>If <code>onFulfilled</code> or <code>onRejected</code> is <code>null</code> or if we used an empty <code>.then()</code> <em>resolved </em>or<em> reject </em>will be called respectively</li><li>If <code>cb</code> is not empty then it is calling another function <code>tryCallOne(cb, self._value)</code></li></ul><pre><code class="language-js">function tryCallOne(fn, a) {
try {
return fn(a);
} catch (ex) {
LAST_ERROR = ex;
return IS_ERROR;
}
} a) {</code></pre><p><code><strong>tryCallOne</strong></code><strong> : </strong>This function only calls the callback that is passed into the argument <code>self._value</code>. If there is no error it will resolve the promise, otherwise it will reject it.</p><p>Every promise must supply a <code>.then()</code> method with the following signature:</p><pre><code class="language-js">promise.then(
onFulfilled?: Function,
onRejected?: Function
) =&gt; Promise</code></pre><ul><li>Both <code>onFulfilled()</code> and <code>onRejected()</code> are optional.</li><li>If the arguments supplied are not functions, they must be ignored.</li><li><code>onFulfilled()</code> will be called after the promise is fulfilled, with the promise’s value as the first argument.</li><li><code>onRejected()</code> will be called after the promise is rejected, with the reason for rejection as the first argument.</li><li>Neither <code>onFulfilled()</code> nor <code>onRejected()</code> may be called more than once.</li><li><code>.then()</code> may be called many times on the same promise. In other words, a promise can be used to aggregate callbacks.</li><li><code>.then()</code> must return a new promise.</li></ul><h3 id="promise-chaining">Promise Chaining</h3><p><code>.then</code> should return a promise. That's why we can create a chain of promises like this:</p><pre><code class="language-js">Promise
.then(() =&gt;
Promise.then(() =&gt;
Promise.then(result =&gt; result)
)).catch(err)</code></pre><h4 id="resolving-a-promise">Resolving a promise</h4><p>Let’s see the <code>resolve</code> function definition that we left earlier before moving on to <code>.then()</code>:</p><pre><code class="language-js">function resolve(self, newValue) {
// Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
if (newValue === self) {
return reject(
self,
new TypeError("A promise cannot be resolved with itself.")
);
}
if (
newValue &amp;&amp;
(typeof newValue === "object" || typeof newValue === "function")
) {
var then = getThen(newValue);
if (then === IS_ERROR) {
return reject(self, LAST_ERROR);
}
if (then === self.then &amp;&amp; newValue instanceof Promise) {
self._state = 3;
self._value = newValue;
finale(self);
return;
} else if (typeof then === "function") {
doResolve(then.bind(newValue), self);
return;
}
}
self._state = 1;
self._value = newValue;
finale(self);
}</code></pre><ul><li>We check if the result is a promise or not. If it’s a function, then call that function with value using <code>doResolve()</code>.</li><li>If the result is a promise then it will be pushed to the <code>deferreds</code> array. You can find this logic in the <code>finale</code> function.</li></ul><h4 id="rejecting-a-promise-">Rejecting a promise:</h4><pre><code class="language-js">Promise.prototype['catch'] = function (onRejected) {
return this.then(null, onRejected);
setTimeout(() =&gt; {
resolve("Time is out");
}, 3000)
})
.then(console.log.bind(null, 'Promise is fulfilled'))
.catch(console.error.bind(null, 'Something bad happened: '))</code></pre><ol><li>Promise <code>constructor</code> is called and an instance is created with <code>new Promise</code></li><li><code>executor</code> function is passed to <code>doResolve(executor, this)</code> and callback where we have defined <code>setTimeout</code> will be called by <code>tryCallTwo(executor, resolveCallback, rejectCallback)</code>so it will take 3 seconds to finish</li><li>We are calling <code>.then()</code> over the promise instance so before our <code>timeout</code> is completed or any async <code>api</code> returns, <code>Promise.prototype.then</code> will be called as <code>.then(cb, null)</code></li><li><code>.then</code> creates a new <code>promise</code> and passes it as an argument to <code>new Handler(onFulfilled, onRejected, promise)</code></li><li><code>handle</code> function is called with the original <code>promise</code> instance and the <code>handler</code> instance we created in point 4.</li><li>Inside the <code>handle</code> function, current <code>self._state = 0</code> and <code>self._deferredState = 0</code> so <code>self_deferredState</code> will become <code>1</code> and <code>handler</code> instance will be assigned to <code>self.deferreds</code> after that control will return from there</li><li>After <code>.then()</code> we are calling <code>.catch()</code> which will internally call <code>.then(null, errorCallback)</code> — again the same steps are repeated from <strong>point 4 to point 6 and skip point 7 </strong>since we called <code>.catch</code> once</li><li>Current <code>promise</code> state is <strong>pending </strong>and it will wait until it is resolved or rejected. So in this example, after 3 seconds, <code>setTimeout</code> callback is called and we are resolving this explicitly which will call <code>resolve(value)</code>.</li><li><code>resolveCallback</code> will be called with value <code>Time is out</code> :) and it will call the main <code>resolve</code> function which will check if <code>value !== null &amp;&amp; value == 'object' &amp;&amp; value === 'function'</code></li><li>It will fail in our case since we passed <code>string</code> and <code>self._state</code> will become <code>1</code> with <code>self._value = 'Time is out'</code> and later <code>finale(self)</code> is called.</li><li><code>finale</code> will call <code>handle(self, self.deferreds)</code> once because <code>self._deferredState = 1</code>, and for the chain of promises, it will call <code>handle()</code> for each <code>deferred</code> function.</li><li>In the <code>handle</code> function, since <code>promise</code> is resolved already, it will call <code>handleResolved(self, deferred)</code></li><li><code>handleResolved</code> function will check if <code>_state === 1</code> and assign <code>cb = deferred.onFulfilled</code> which is our <code>then</code> callback. Later <code>tryCallOne(cb, self._value)</code> will call that callback and we get the final result. While doing this if any error occurred then <code>promise</code> will be rejected.</li></ol><h4 id="when-a-promise-is-rejected">When a promise is rejected</h4><p>In this case, all the steps will remain the same — but in <strong>point 8</strong> we call <code>reject(reason)</code>. This will indirectly call <code>rejectCallback</code> defined in <code>doResolve() </code>and <code>self._state</code> will become <code>2</code>. In the <code>finale</code> function <code>cb</code> will be equal to <code>deferred.onRejected</code> which will be called later by <code>tryCallOne</code>. That’s how the <code>.catch</code> callback will be called.</p><p>That's all for now! I hope you enjoyed the article and it helps in your next JavaScript interview.</p><p>If you encounter any problem feel free to <a href="https://twitter.com/thatshailesh" rel="noopener"><em>get in touch</em></a><em> or comment below. </em>I would be happy to help ?</p><p><em>Don’t hesitate to clap if you considered this a worthwhile read!</em></p><p><em>Originally published at <a href="https://101node.io/blog/how-promises-actually-work-inside-out" rel="noopener">101node.io</a> on February 05, 2019.</em></p>
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
