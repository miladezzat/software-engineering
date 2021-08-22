---
card: "https://cdn-media-1.freecodecamp.org/images/1*tZ9F-CYdCHLmK9Xsvg0FgA.jpeg"
tags: [JavaScript]
description: "The thing I love most about programming is the aha! moment wh"
author: "Milad E. Fahmy"
title: "Implementing Promises In JavaScript"
created: "2021-08-15T23:47:44+02:00"
modified: "2021-08-15T23:47:44+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-promises tag-tech tag-programming tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">Implementing Promises In JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*tZ9F-CYdCHLmK9Xsvg0FgA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*tZ9F-CYdCHLmK9Xsvg0FgA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*tZ9F-CYdCHLmK9Xsvg0FgA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*tZ9F-CYdCHLmK9Xsvg0FgA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*tZ9F-CYdCHLmK9Xsvg0FgA.jpeg" alt="Implementing Promises In JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>The thing I love most about programming is the <em>aha!</em> moment when you start to fully understand a concept. Even though it might take a long time and no small amount of effort to get there, it sure is worth it.</p><p>I think that the most effective way to assess (and help improve) our degree of comprehension of a given subject is to try and apply the knowledge to the real world. Not only does this let us identify and ultimately address our weaknesses, but it can also shed some light on the way things work. A simple <em>trial and</em> <em>error </em>approach often reveals those details that had remained elusive previously.</p><p>With that in mind, I believe that learning how to implement <strong>promises</strong> was one of the most important moments in my programming journey — it has given me invaluable insight into how asynchronous code works and has made me a better programmer overall.</p><p>I hope that this article will help you come to grips with implementing promises in JavaScript as well.</p><p>We shall focus on how to implement the promise core according to <a href="https://promisesaplus.com/" rel="noopener">the Promises/A+ specification</a> with a few methods of <a href="http://bluebirdjs.com/docs/api-reference.html" rel="noopener">the Bluebird API</a>. We are also going to be using <a href="https://en.wikipedia.org/wiki/Test-driven_development" rel="noopener">the TDD approach</a> with <a href="https://jestjs.io/" rel="noopener">Jest</a>.</p><p><a href="https://www.typescriptlang.org/" rel="noopener">TypeScript</a> is going to come in handy, too.</p><p>Given that we are going to be working on the skills of implementation here, I am going to assume you have some basic understanding of what promises are and and a vague sense of how they work. If you don’t, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises" rel="noopener">here</a> is a great place to start.</p><p>Now that we have that out of the way, go ahead and clone the <a href="https://github.com/maciejcieslar/promiseq" rel="noopener">repository</a> and let’s get started.</p><h3 id="the-core-of-a-promise">The core of a promise</h3><p>As you know, a promise is an object with the following properties:</p><h4 id="then">Then</h4><p>A method that attaches a handler to our promise. It returns a new promise with the value from the previous one mapped by one of the handler’s methods.</p><h4 id="handlers">Handlers</h4><p>An array of handlers attached by <strong>then</strong>. A handler is an object containing two methods <strong>onSuccess</strong> and <strong>onFail</strong>, both of which are passed as arguments to <strong>then</strong>(<strong>onSuccess</strong>, <strong>onFail</strong>)<em>.</em></p><pre><code class="language-typescript">type HandlerOnSuccess&lt;T, U = any&gt; = (value: T) =&gt; U | Thenable&lt;U&gt;;
type HandlerOnFail&lt;U = any&gt; = (reason: any) =&gt; U | Thenable&lt;U&gt;;
interface Handler&lt;T, U&gt; {
onSuccess: HandlerOnSuccess&lt;T, U&gt;;
onFail: HandlerOnFail&lt;U&gt;;
}</code></pre><h4 id="state">State</h4><p>A promise can be in one of three states: <strong>resolved,</strong><em> </em><strong>rejected,</strong><em> </em>or<em> </em><strong>pending</strong>.</p><p><strong>Resolved</strong> means that either everything went smoothly and we received our value, or we caught and handled the error.</p><p><strong>Rejected</strong> means that either we rejected the promise, or an error was thrown and we didn’t catch it.</p><p><strong>Pending</strong> means that neither the <strong>resolve</strong> nor the <strong>reject</strong> method has been called yet and we are still waiting for the value.</p><p>The term “the promise is settled” means that the promise is either resolved or rejected.</p><h4 id="value">Value</h4><p>A value that we have either resolved or rejected.</p><p>Once the value is set, there is no way of changing it.</p><h3 id="testing">Testing</h3><p>According to the TDD approach, we want to write our tests before the actual code comes along, so let’s do just that.</p><p>Here are the tests for our core:</p><pre><code class="language-typescript">describe('PQ &lt;constructor&gt;', () =&gt; {
test('resolves like a promise', () =&gt; {
return new PQ&lt;number&gt;((resolve) =&gt; {
setTimeout(() =&gt; {
resolve(1);
}, 30);
}).then((val) =&gt; {
expect(val).toBe(1);
});
});
test('is always asynchronous', () =&gt; {
const p = new PQ((resolve) =&gt; resolve(5));
expect((p as any).value).not.toBe(5);
});
test('resolves with the expected value', () =&gt; {
return new PQ&lt;number&gt;((resolve) =&gt; resolve(30)).then((val) =&gt; {
expect(val).toBe(30);
});
});
test('resolves a thenable before calling then', () =&gt; {
return new PQ&lt;number&gt;((resolve) =&gt;
resolve(new PQ((resolve) =&gt; resolve(30))),
).then((val) =&gt; expect(val).toBe(30));
});
test('catches errors (reject)', () =&gt; {
const error = new Error('Hello there');
return new PQ((resolve, reject) =&gt; {
return reject(error);
}).catch((err: Error) =&gt; {
expect(err).toBe(error);
});
});
test('catches errors (throw)', () =&gt; {
const error = new Error('General Kenobi!');
return new PQ(() =&gt; {
throw error;
}).catch((err) =&gt; {
expect(err).toBe(error);
});
});
test('is not mutable - then returns a new promise', () =&gt; {
const start = new PQ&lt;number&gt;((resolve) =&gt; resolve(20));
return PQ.all([
start
.then((val) =&gt; {
expect(val).toBe(20);
return 30;
})
.then((val) =&gt; expect(val).toBe(30)),
start.then((val) =&gt; expect(val).toBe(20)),
]);
});
private state: States = States.PENDING;
private handlers: Handler&lt;T, any&gt;[] = [];
private value: T | any;
public static errors = errors;
public constructor(callback: (resolve: Resolve&lt;T&gt;, reject: Reject) =&gt; void) {
try {
callback(this.resolve, this.reject);
} catch (e) {
this.reject(e);
}
}
}</code></pre><p>Our constructor takes a <strong>callback</strong> as a parameter.</p><p>We call this callback with <strong>this.resolve</strong> and <strong>this.reject</strong> as arguments.</p><p>Note that normally we would have bound <strong>this.resolve</strong> and <strong>this.reject</strong> to <strong>this</strong>, but here we have used the class arrow method instead.</p><h4 id="setresult">setResult</h4><p>Now we have to set the result. Please remember that we must handle the result correctly, which means that, should it return a promise, we must resolve it first.</p><pre><code class="language-typescript">class PQ&lt;T&gt; {
// ...
private setResult = (value: T | any, state: States) =&gt; {
const set = () =&gt; {
if (this.state !== States.PENDING) {
return null;
}
if (isThenable(value)) {
return (value as Thenable&lt;T&gt;).then(this.resolve, this.reject);
}
this.value = value;
this.state = state;
return this.executeHandlers();
};
setTimeout(set, 0);
};
}</code></pre><p>First, we check if the state is not <strong>pending</strong> — if it is, then the promise is already settled and we can’t assign any new value to it.</p><p>Then we need to check if a value is a <strong>thenable</strong>. To put it simply, a <strong>thenable</strong> is an object with <strong>then</strong> as a method.</p><p>By convention, a <strong>thenable</strong> should behave like a promise. So in order to get the result, we will call <strong>then</strong> and pass as arguments <strong>this.resolve</strong> and <strong>this.reject</strong>.</p><p>Once the <strong>thenable</strong> settles, it will call one of our methods and give us the expected non-promise value.</p><p>So now we have to check if an object is a <strong>thenable</strong>.</p><pre><code class="language-typescript">describe('isThenable', () =&gt; {
test('detects objects with a then method', () =&gt; {
expect(isThenable({ then: () =&gt; null })).toBe(true);
expect(isThenable(null)).toBe(false);
expect(isThenable({})).toBe(false);
});
});</code></pre><pre><code class="language-typescript">const isFunction = (func: any) =&gt; typeof func === 'function';
const isObject = (supposedObject: any) =&gt;
typeof supposedObject === 'object' &amp;&amp;
supposedObject !== null &amp;&amp;
!Array.isArray(supposedObject);
const isThenable = (obj: any) =&gt; isObject(obj) &amp;&amp; isFunction(obj.then);</code></pre><p>It is important to realize that our promise will never be synchronous, even if the code inside the <strong>callback</strong> is.</p><p>We are going to delay the execution until the next iteration of the event loop by using <strong>setTimeout</strong>.</p><p>Now the only thing left to do is to set our value and status and then execute the registered handlers.</p><h4 id="executehandlers">executeHandlers</h4><pre><code class="language-typescript">class PQ&lt;T&gt; {
// ...
private executeHandlers = () =&gt; {
if (this.state === States.PENDING) {
return null;
}
this.handlers.forEach((handler) =&gt; {
if (this.state === States.REJECTED) {
return handler.onFail(this.value);
}
return handler.onSuccess(this.value);
});
this.handlers = [];
};
}</code></pre><p>Again, make sure the state is not <strong>pending</strong>.</p><p>The state of the promise dictates which function we are going to use.</p><p>If it’s <strong>resolved</strong>, we should execute <strong>onSuccess</strong>, otherwise — <strong>onFail</strong>.</p><p>Let’s now clear our array of handlers just to be safe and not to execute anything accidentally in the future. A handler can be attached and executed later anyways.</p><p>And that’s what we must discuss next: a way to attach our handler.</p><h4 id="attachhandler">attachHandler</h4><pre><code class="language-typescript">class PQ&lt;T&gt; {
// ...
private attachHandler = (handler: Handler&lt;T, any&gt;) =&gt; {
this.handlers = [...this.handlers, handler];
this.executeHandlers();
};
}</code></pre><p>It really is as simple as it seems. We just add a handler to our handlers array and execute it. That’s it.</p><p>Now, to put it all together we need to implement the <strong>then</strong> method.</p><h4 id="then-1">then</h4><pre><code class="language-typescript">class PQ&lt;T&gt; {
// ...
public then&lt;U&gt;(
onSuccess?: HandlerOnSuccess&lt;T, U&gt;,
onFail?: HandlerOnFail&lt;U&gt;,
) {
return new PQ&lt;U | T&gt;((resolve, reject) =&gt; {
return this.attachHandler({
onSuccess: (result) =&gt; {
if (!onSuccess) {
return resolve(result);
}
try {
return resolve(onSuccess(result));
} catch (e) {
return reject(e);
}
},
onFail: (reason) =&gt; {
if (!onFail) {
return reject(reason);
}
try {
return resolve(onFail(reason));
} catch (e) {
return reject(e);
}
},
});
});
}
}</code></pre><p>In <strong>then,</strong> we return a promise, and in the <strong>callback</strong> we attach a handler that is then used to wait for the current promise to be settled.</p><p>When that happens, either handler’s <strong>onSuccess</strong> or <strong>onFail</strong> will be executed and we will proceed accordingly.</p><p>One thing to remember here is that neither of the handlers passed to <strong>then</strong> is required. It is important, however, that we don’t try to execute something that might be <strong>undefined</strong>.</p><p>Also, in <strong>onFail</strong> when the handler is passed, we actually resolve the returned promise, because the error has been handled.</p><h4 id="catch">catch</h4><p><strong>Catch</strong> is actually just an abstraction over the <strong>then</strong> method.</p><pre><code class="language-typescript">class PQ&lt;T&gt; {
// ...
public catch&lt;U&gt;(onFail: HandlerOnFail&lt;U&gt;) {
return this.then&lt;U&gt;(identity, onFail);
}
}</code></pre><p>That’s it.</p><h4 id="finally"><strong><em>Finally</em></strong></h4><p><strong>Finally</strong> is also just an abstraction over doing <strong>then</strong>(<strong>finallyCb</strong>, <strong>finallyCb</strong>), because it doesn’t really care about the result of the promise.</p><p>Actually, it also preserves the result of the previous promise and returns it. So whatever is being returned by the <strong>finallyCb</strong> doesn’t really matter.</p><pre><code class="language-typescript">describe('PQ.prototype.finally', () =&gt; {
test('it is called regardless of the promise state', () =&gt; {
let counter = 0;
return PQ.resolve(15)
.finally(() =&gt; {
counter += 1;
})
.then(() =&gt; {
return PQ.reject(15);
})
.then(() =&gt; {
// wont be called
counter = 1000;
})
.finally(() =&gt; {
counter += 1;
})
.catch((reason) =&gt; {
expect(reason).toBe(15);
expect(counter).toBe(2);
});
});
});</code></pre><pre><code class="language-typescript">class PQ&lt;T&gt; {
// ...
public finally&lt;U&gt;(cb: Finally&lt;U&gt;) {
return new PQ&lt;U&gt;((resolve, reject) =&gt; {
let val: U | any;
let isRejected: boolean;
return this.then(
(value) =&gt; {
isRejected = false;
val = value;
return cb();
},
(reason) =&gt; {
isRejected = true;
val = reason;
return cb();
},
).then(() =&gt; {
if (isRejected) {
return reject(val);
}
return resolve(val);
});
});
}
}</code></pre><h4 id="tostring">toString</h4><pre><code class="language-typescript">describe('PQ.prototype.toString', () =&gt; {
test('returns [object PQ]', () =&gt; {
expect(new PQ&lt;undefined&gt;((resolve) =&gt; resolve()).toString()).toBe(
'[object PQ]',
);
});
});</code></pre><pre><code class="language-typescript">class PQ&lt;T&gt; {
// ...
public toString() {
return `[object PQ]`;
}
}</code></pre><p>It will just return a string <code>[object PQ]</code>.</p><p>Having implemented the core of our promises, we can now implement some of the previously mentioned Bluebird methods, which will make operating on promises easier for us.</p><h3 id="additional-methods">Additional methods</h3><h4 id="promise-resolve">Promise.resolve</h4><p><a href="http://bluebirdjs.com/docs/api/promise.resolve.html" rel="noopener">How it should work.</a></p><pre><code class="language-typescript">describe('PQ.resolve', () =&gt; {
test('resolves a value', () =&gt; {
return PQ.resolve(5).then((value) =&gt; {
expect(value).toBe(5);
});
});
});</code></pre><pre><code class="language-typescript">class PQ&lt;T&gt; {
// ...
public static resolve&lt;U = any&gt;(value?: U | Thenable&lt;U&gt;) {
return new PQ&lt;U&gt;((resolve) =&gt; {
return resolve(value);
});
}
}</code></pre><h4 id="promise-reject">Promise.reject</h4><p><a href="http://bluebirdjs.com/docs/api/promise.reject.html" rel="noopener">How it should work.</a></p><pre><code class="language-typescript">describe('PQ.reject', () =&gt; {
test('rejects a value', () =&gt; {
return PQ.reject(5).catch((value) =&gt; {
expect(value).toBe(5);
});
});
});</code></pre><pre><code class="language-typescript">class PQ&lt;T&gt; {
// ...
public static reject&lt;U&gt;(reason?: any) {
return new PQ&lt;U&gt;((resolve, reject) =&gt; {
return reject(reason);
});
}
}</code></pre><h4 id="promise-all">Promise.all</h4><p><a href="http://bluebirdjs.com/docs/api/promise.all.html" rel="noopener">How it should work.</a></p><pre><code class="language-typescript">describe('PQ.all', () =&gt; {
test('resolves a collection of promises', () =&gt; {
return PQ.all([PQ.resolve(1), PQ.resolve(2), 3]).then((collection) =&gt; {
expect(collection).toEqual([1, 2, 3]);
});
});
test('rejects if one item rejects', () =&gt; {
return PQ.all([PQ.resolve(1), PQ.reject(2)]).catch((reason) =&gt; {
expect(reason).toBe(2);
});
});
});</code></pre><pre><code class="language-typescript">class PQ&lt;T&gt; {
// ...
public static all&lt;U = any&gt;(collection: (U | Thenable&lt;U&gt;)[]) {
return new PQ&lt;U[]&gt;((resolve, reject) =&gt; {
if (!Array.isArray(collection)) {
return reject(new TypeError('An array must be provided.'));
}
let counter = collection.length;
const resolvedCollection: U[] = [];
const tryResolve = (value: U, index: number) =&gt; {
counter -= 1;
resolvedCollection[index] = value;
if (counter !== 0) {
return null;
}
return resolve(resolvedCollection);
};
return collection.forEach((item, index) =&gt; {
return PQ.resolve(item)
.then((value) =&gt; {
return tryResolve(value, index);
})
.catch(reject);
});
});
}
}</code></pre><p>I believe the implementation is pretty straightforward.</p><p>Starting at <strong>collection.length,</strong> we count down with each <strong>tryResolve</strong> until we get to 0, which means that every item of the collection has been resolved. We then resolve the newly created collection.</p><h4 id="promise-any">Promise.any</h4><p><a href="http://bluebirdjs.com/docs/api/promise.any.html" rel="noopener">How it should work.</a></p><pre><code class="language-typescript">describe('PQ.any', () =&gt; {
test('resolves the first value', () =&gt; {
return PQ.any&lt;number&gt;([
PQ.resolve(1),
new PQ((resolve) =&gt; setTimeout(resolve, 15)),
]).then((val) =&gt; expect(val).toBe(1));
});
test('rejects if the first value rejects', () =&gt; {
return PQ.any([
new PQ((resolve) =&gt; setTimeout(resolve, 15)),
PQ.reject(1),
]).catch((reason) =&gt; {
expect(reason).toBe(1);
});
});
});</code></pre><pre><code class="language-typescript">class PQ&lt;T&gt; {
// ...
public static any&lt;U = any&gt;(collection: (U | Thenable&lt;U&gt;)[]) {
return new PQ&lt;U&gt;((resolve, reject) =&gt; {
return collection.forEach((item) =&gt; {
return PQ.resolve(item)
.then(resolve)
.catch(reject);
});
});
}
}</code></pre><p>We simply wait for the first value to resolve and return it in a promise.</p><h4 id="promise-props">Promise.props</h4><p><a href="http://bluebirdjs.com/docs/api/promise.props.html" rel="noopener">How it should work.</a></p><pre><code class="language-typescript">describe('PQ.props', () =&gt; {
test('resolves object correctly', () =&gt; {
return PQ.props&lt;{ test: number; test2: number }&gt;({
test: PQ.resolve(1),
test2: PQ.resolve(2),
}).then((obj) =&gt; {
return expect(obj).toEqual({ test: 1, test2: 2 });
});
});
test('rejects non objects', () =&gt; {
return PQ.props([]).catch((reason) =&gt; {
expect(reason).toBeInstanceOf(TypeError);
});
});
});</code></pre><pre><code class="language-typescript">class PQ&lt;T&gt; {
// ...
public static props&lt;U = any&gt;(obj: object) {
return new PQ&lt;U&gt;((resolve, reject) =&gt; {
if (!isObject(obj)) {
return reject(new TypeError('An object must be provided.'));
}
const resolvedObject = {};
const keys = Object.keys(obj);
const resolvedValues = PQ.all&lt;string&gt;(keys.map((key) =&gt; obj[key]));
return resolvedValues
.then((collection) =&gt; {
return collection.map((value, index) =&gt; {
resolvedObject[keys[index]] = value;
});
})
.then(() =&gt; resolve(resolvedObject as U))
.catch(reject);
});
}
}</code></pre><p>We iterate over keys of the passed object, resolving every value. We then assign the values to the new object and resolve a promise with it.</p><h4 id="promise-prototype-spread">Promise.prototype.spread</h4><p><a href="http://bluebirdjs.com/docs/api/spread.html" rel="noopener">How it should work.</a></p><pre><code class="language-typescript">describe('PQ.protoype.spread', () =&gt; {
test('spreads arguments', () =&gt; {
return PQ.all&lt;number&gt;([1, 2, 3]).spread((...args) =&gt; {
expect(args).toEqual([1, 2, 3]);
return 5;
});
});
test('accepts normal value (non collection)', () =&gt; {
return PQ.resolve(1).spread((one) =&gt; {
expect(one).toBe(1);
});
});
});</code></pre><pre><code class="language-typescript">class PQ&lt;T&gt; {
// ...
public spread&lt;U&gt;(handler: (...args: any[]) =&gt; U) {
return this.then&lt;U&gt;((collection) =&gt; {
if (Array.isArray(collection)) {
return handler(...collection);
}
return handler(collection);
});
}
}</code></pre><h4 id="promise-delay">Promise.delay</h4><p><a href="http://bluebirdjs.com/docs/api/delay.html" rel="noopener">How it should work.</a></p><pre><code class="language-typescript">describe('PQ.delay', () =&gt; {
test('waits for the given amount of miliseconds before resolving', () =&gt; {
return new PQ&lt;string&gt;((resolve) =&gt; {
setTimeout(() =&gt; {
resolve('timeout');
}, 50);
return PQ.delay(40).then(() =&gt; resolve('delay'));
}).then((val) =&gt; {
expect(val).toBe('delay');
});
});
test('waits for the given amount of miliseconds before resolving 2', () =&gt; {
return new PQ&lt;string&gt;((resolve) =&gt; {
setTimeout(() =&gt; {
resolve('timeout');
}, 50);
return PQ.delay(60).then(() =&gt; resolve('delay'));
}).then((val) =&gt; {
expect(val).toBe('timeout');
});
});
});</code></pre><pre><code class="language-typescript">class PQ&lt;T&gt; {
// ...
public static delay(timeInMs: number) {
return new PQ((resolve) =&gt; {
return setTimeout(resolve, timeInMs);
});
}
}</code></pre><p>By using <strong>setTimeout,</strong> we simply delay the execution of the <strong>resolve</strong> function by the given number of milliseconds.</p><h4 id="promise-prototype-timeout">Promise.prototype.timeout</h4><p><a href="http://bluebirdjs.com/docs/api/timeout.html" rel="noopener">How it should work.</a></p><pre><code class="language-typescript">describe('PQ.prototype.timeout', () =&gt; {
test('rejects after given timeout', () =&gt; {
return new PQ&lt;number&gt;((resolve) =&gt; {
setTimeout(resolve, 50);
})
.timeout(40)
.catch((reason) =&gt; {
expect(reason).toBeInstanceOf(PQ.errors.TimeoutError);
});
});
test('resolves before given timeout', () =&gt; {
return new PQ&lt;number&gt;((resolve) =&gt; {
setTimeout(() =&gt; resolve(500), 500);
})
.timeout(600)
.then((value) =&gt; {
expect(value).toBe(500);
});
});
});</code></pre><pre><code class="language-typescript">class PQ&lt;T&gt; {
// ...
public timeout(timeInMs: number) {
return new PQ&lt;T&gt;((resolve, reject) =&gt; {
const timeoutCb = () =&gt; {
return reject(new PQ.errors.TimeoutError());
};
setTimeout(timeoutCb, timeInMs);
return this.then(resolve);
});
}
}</code></pre><p>This one is a bit tricky.</p><p>If the <strong>setTimeout</strong> executes faster than <strong>then</strong> in our promise, it will reject the promise with our special error.</p><h4 id="promise-promisify">Promise.promisify</h4><p><a href="http://bluebirdjs.com/docs/api/promise.promisify.html" rel="noopener">How it should work.</a></p><pre><code class="language-typescript">describe('PQ.promisify', () =&gt; {
test('works', () =&gt; {
const getName = (firstName, lastName, callback) =&gt; {
return callback(null, `${firstName} ${lastName}`);
};
const fn = PQ.promisify&lt;string&gt;(getName);
const firstName = 'Maciej';
const lastName = 'Cieslar';
return fn(firstName, lastName).then((value) =&gt; {
return expect(value).toBe(`${firstName} ${lastName}`);
});
});
});</code></pre><pre><code class="language-typescript">class PQ&lt;T&gt; {
// ...
public static promisify&lt;U = any&gt;(
fn: (...args: any[]) =&gt; void,
context = null,
) {
return (...args: any[]) =&gt; {
return new PQ&lt;U&gt;((resolve, reject) =&gt; {
return fn.apply(context, [
...args,
(err: any, result: U) =&gt; {
if (err) {
return reject(err);
}
return resolve(result);
},
]);
});
};
}
}</code></pre><p>We apply to the function all the passed arguments, plus — as the last one — we give the error-first <strong>callback</strong>.</p><h4 id="promise-promisifyall">Promise.promisifyAll</h4><p><a href="http://bluebirdjs.com/docs/api/promise.promisifyall.html" rel="noopener">How it should work.</a></p><pre><code class="language-typescript">describe('PQ.promisifyAll', () =&gt; {
test('promisifies a object', () =&gt; {
const person = {
name: 'Maciej Cieslar',
getName(callback) {
return callback(null, this.name);
},
};
const promisifiedPerson = PQ.promisifyAll&lt;{
getNameAsync: () =&gt; PQ&lt;string&gt;;
}&gt;(person);
return promisifiedPerson.getNameAsync().then((name) =&gt; {
expect(name).toBe('Maciej Cieslar');
});
});
});</code></pre><pre><code class="language-typescript">class PQ&lt;T&gt; {
// ...
public static promisifyAll&lt;U&gt;(obj: any): U {
return Object.keys(obj).reduce((result, key) =&gt; {
let prop = obj[key];
if (isFunction(prop)) {
prop = PQ.promisify(prop, obj);
}
result[`${key}Async`] = prop;
return result;
}, {}) as U;
}
}</code></pre><p>We iterate over the keys of the object and <strong>promisify</strong> its methods and add to each name of the method word <strong>Async</strong>.</p><h3 id="wrapping-up">Wrapping up</h3><p>Presented here were but a few amongst all of the Bluebird API methods, so I strongly encourage you to explore, play around with, and try implementing the rest of them.</p><p>It might seem hard at first but don’t get discouraged — it would be worthless if it were it easy.</p><p>Thank you very much for reading! I hope you found this article informative and that it helped you get a grasp of the concept of promises, and that from now on you will feel more comfortable using them or simply writing asynchronous code.</p><p>If you have any questions or comments, feel free to put them in the comment section below or send me a <a href="https://www.mcieslar.com/contact" rel="noopener">message</a>.</p><p>Check out my <a href="https://www.maciejcieslar.com/about/" rel="noopener">social media</a>!</p><p><a href="http://eepurl.com/dAKhxb" rel="noopener">Join my newsletter</a>!</p><p><em>Originally published at <a href="https://www.mcieslar.com/implementing-promises-in-javascript" rel="noopener">www.mcieslar.com</a> on August 4, 2018.</em></p>
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
