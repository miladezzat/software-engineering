---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9ddb740569d1a4ca3a03.jpg"
tags: [JavaScript]
description: JavaScript is single threaded, meaning that two bits of scrip
author: "Milad E. Fahmy"
title: "JavaScript Promises Explained"
created: "2021-08-15T19:31:19+02:00"
modified: "2021-08-15T19:31:19+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-promises tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Promises Explained</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ddb740569d1a4ca3a03.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ddb740569d1a4ca3a03.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ddb740569d1a4ca3a03.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ddb740569d1a4ca3a03.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ddb740569d1a4ca3a03.jpg" alt="JavaScript Promises Explained">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="what-is-a-promise-in-javascript"><strong>What is a promise in JavaScript?</strong></h2>
<p>JavaScript is single threaded, meaning that two bits of script cannot run at the same time; they have to run one after another. A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.</p><pre><code class="language-javascript">var promise = new Promise(function(resolve, reject) {
// do thing, then…
if (/* everything worked */) {
resolve("See, it worked!");
}
else {
reject(Error("It broke"));
}
});</code></pre>
<h2 id="a-promise-exists-in-one-of-these-states"><strong>A Promise exists in one of these states</strong></h2>
<ul>
<li>Pending: initial state, neither fulfilled nor rejected.</li>
<li>Fulfilled: operation completed successfully.</li>
<li>Rejected: operation failed.</li>
</ul>
<p>The Promise object works as proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action’s eventual success value or failure reason. </p>
<p>This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.</p>
<h2 id="using-then-promise-chaining-"><strong>Using ‘Then’ (Promise Chaining)</strong></h2>
<p>To take several asynchronous calls and synchronize them one after the other, you can use promise chaining. This allows using a value from the first promise in later subsequent callbacks.</p><pre><code class="language-javascript">Promise.resolve('some')
.then(function(string) { // &lt;-- This will happen after the above Promise resolves (returning the value 'some')
return new Promise(function(resolve, reject) {
setTimeout(function() {
string += 'thing';
resolve(string);
}, 1);
});
})
.then(function(string) { // &lt;-- This will happen after the above .then's new Promise resolves
console.log(string); // &lt;-- Logs 'something' to the console
});</code></pre>
<h2 id="promise-api"><strong>Promise API</strong></h2>
<p>There are 4 static methods in the Promise class:</p>
<ul>
<li>Promise.resolve</li>
<li>Promise.reject</li>
<li>Promise.all</li>
<li>Promise.race</li>
</ul>
<h2 id="promises-can-be-chained-together"><strong>Promises can be chained together</strong></h2>
<p>When writing Promises to solve a particular problem, you can chain them together to form logic.</p><pre><code class="language-javascript">var add = function(x, y) {
return new Promise((resolve,reject) =&gt; {
var sum = x + y;
if (sum) {
resolve(sum);
}
else {
reject(Error("Could not add the two values!"));
}
});
};
var subtract = function(x, y) {
return new Promise((resolve, reject) =&gt; {
var sum = x - y;
if (sum) {
resolve(sum);
}
else {
reject(Error("Could not subtract the two values!"));
}
});
};
// Starting promise chain
add(2,2)
.then((added) =&gt; {
// added = 4
return subtract(added, 3);
})
.then((subtracted) =&gt; {
// subtracted = 1
return add(subtracted, 5);
})
.then((added) =&gt; {
// added = 6
return added * 2;
})
.then((result) =&gt; {
// result = 12
console.log("My result is ", result);
})
.catch((err) =&gt; {
// If any part of the chain is rejected, print the error message.
console.log(err);
});</code></pre>
<p>This is useful for following a <em>Functional Programming</em> paradigm. By creating functions for manipulating data you can chain them together to assemble a final result. If at any point in the chain of functions a value is <em>rejected</em> the chain will skip to the nearest <code>catch()</code> handler.</p>
<p>For more information on Functional Programming: <a href="https://en.wikipedia.org/wiki/Functional_programming" rel="nofollow">Functional Programming</a></p>
<h2 id="function-generators"><strong>Function Generators</strong></h2>
<p>In recent releases, JavaScript has introduced more ways to natively handle Promises. One such way is the function generator. Function generators are “pausable” functions. When used with Promises, generators can make using a lot easier to read and appear “synchronous”.</p><pre><code class="language-javascript">const myFirstGenerator = function* () {
const one = yield 1;
const two = yield 2;
const three = yield 3;
return 'Finished!';
}
const gen = myFirstGenerator();</code></pre>
<p>Here’s our first generator, which you can see by the <code>function*</code> syntax. The <code>gen</code> variable we declared will not run <code>myFirstGenerator</code>, but instead will “this generator is ready to use”.</p><pre><code class="language-javascript">console.log(gen.next());
// Returns { value: 1, done: false }</code></pre>
<p>When we run <code>gen.next()</code> it will unpause the generator and carry on. Since this is the first time we have called <code>gen.next()</code> it will run <code>yield 1</code> and pause until we call <code>gen.next()</code> again. When <code>yield 1</code> is called, it will return to us the <code>value</code> that was yielded and whether or not the generator is <code>done</code>.</p><pre><code class="language-javascript">console.log(gen.next());
// Returns { value: 2, done: false }
console.log(gen.next());
// Returns { value: 3, done: false }
console.log(gen.next());
// Returns { value: 'Finished!', done: true }
console.log(gen.next());
// Will throw an error</code></pre>
<p>As we keep calling <code>gen.next()</code> it will keep going onto the next <code>yield</code> and pausing each time. Once there are no more <code>yield</code>’s left, it will proceed to run the rest of the generator, which in this case simply returns <code>'Finished!'</code>. If you call <code>gen.next()</code> again, it will throw an error as the generator is finished.</p>
<p>Now, imagine if each <code>yield</code> in this example was a <code>Promise</code>, the code itself would appear extremely synchronous.</p>
<h3 id="promise-all-iterable-is-very-usefull-for-multiple-request-to-different-source"><strong>Promise.all(iterable) is very usefull for multiple request to different source</strong></h3>
<p>The Promise.all(iterable) method returns a single Promise that resolves when all of the promises in the iterable argument have resolved or when the iterable argument contains no promises. It rejects with the reason of the first promise that rejects.</p><pre><code class="language-javascript">var promise1 = Promise.resolve(catSource);
var promise2 = Promise.resolve(dogSource);
var promise3 = Promise.resolve(cowSource);
Promise.all([promise1, promise2, promise3]).then(function(values) {
console.log(values);
});
// expected output: Array ["catData", "dogData", "cowData"]</code></pre>
<h2 id="more-info-on-promises-">More info on Promises:</h2>
<ul>
<li><a href="/news/how-javascript-promises-actually-work-from-the-inside-out-76698bb7210b/">How JavaScript promises actually work</a></li>
<li><a href="/news/how-to-implement-promises-in-javascript-1ce2680a7f51/">How to implement promises in JavaScript</a></li>
<li><a href="/news/how-javascript-promises-actually-work-from-the-inside-out-76698bb7210b/">How to use promises in JavaScript</a></li>
<li><a href="/news/how-to-write-a-javascript-promise-4ed8d44292b8/">How to write a JavsScript promise</a></li>
</ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
