---
card: "https://cdn-media-1.freecodecamp.org/images/1*N8GoVaCrqVPJWv4H15RdCw.jpeg"
tags: [JavaScript]
description: "Did you use some JavaScript to make your web app dynamic? Tha"
author: "Milad E. Fahmy"
title: "You Might Not Know JS: Insights From the JavaScript Bible"
created: "2021-08-16T11:34:52+02:00"
modified: "2021-08-16T11:34:52+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development tag-programming tag-tech tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">You Might Not Know JS: Insights From the JavaScript Bible</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*N8GoVaCrqVPJWv4H15RdCw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*N8GoVaCrqVPJWv4H15RdCw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*N8GoVaCrqVPJWv4H15RdCw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*N8GoVaCrqVPJWv4H15RdCw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*N8GoVaCrqVPJWv4H15RdCw.jpeg" alt="You Might Not Know JS: Insights From the JavaScript Bible">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
// I’ll use emebeded code so you can copy/paste and try yourself!
let map = {};
let x = { id: 1 },
y = { id: 2 };
map[x] = 'foo';
map[y] = 'bar';
console.log(map[x], map[y]); // 'bar', 'bar'</code></pre><p>From here, examples are a bit lengthy. I’ll use gists so you can copy/paste and try yourself!</p><p>In reality, this map got only one value under the <code>[object Object]</code> key. First, its value is <code>'foo'</code> and then it becomes <code>'bar'</code>.</p><p>To avoid this issue, use the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map" rel="noopener">Map object</a> introduced in ES6. Yet be careful, the lookup operation to get a value from a key is using a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#Strict_equality_using" rel="noopener">strict equality</a>.</p><pre><code class="language-js">var map = new Map();
map.set(x, 'foo');
map.set(y, 'bar');
console.log(map.get(x), map.get(y)); // 'foo', 'bar'
// undefined, undefined
console.log(map.get({ id: 1 }, map.get({ id: 2 });</code></pre><p>This detail only matters for complex variables such as objects. Because two objects with the same content won’t match with strict equality. You must use the exact variable you put as a key to retrieve your value from the map.</p><h3 id="lesson-6-what-s-this">LESSON #6 — What’s this?</h3><p>The <code>this</code> keyword is used in languages built with classes. Usually, <code>this</code> (and its sibling <code>self</code>) refer to the current instance of the class being used. Its meaning doesn’t change a lot in <a href="https://en.wikipedia.org/wiki/Object-oriented_programming" rel="noopener">OOP</a>. But, JavaScript didn’t have classes prior to ES6 (although it still had the <code>this</code> keyword).</p><p>The value of <code>this</code> in JavaScript is different according to the context. To determine its value, you must first inspect the <strong>call-site </strong>of the function where you’re using it.</p><pre><code class="language-js">function foo () {
console.log( this.a );
}
// #1: Default binding
var a = 'bar';
// [call-site: global]
foo(); // 'bar' or undefined (strict mode)</code></pre><p>It seems strange when you compare this behaviour with the OOP standards. This first rule isn’t that important because most JavaScript codes uses <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode" rel="noopener">strict mode</a>. Also, thank’s to ES6, developers will tend to use <code>let</code> and <code>const</code> instead of the legacy <code>var</code>.</p><p>This is the first rule which is applied by default to bind a value to <code>this</code>. There are 4 rules in total. Here are the remaining 3 rules:</p><pre><code class="language-js">// It’s not easy to understand, copy this code and do some tests!
// #2: Implicit binding
const o2 = { a: 'o2', foo };
const o1 = { a: 'o1', o2 };
o1.o2.foo(); // [call-site: o2] 'o2'
// #3: Explicit binding
const o = { a: 'bar' };
foo.call(o); // [call-site: o] 'bar'
const hardFoo = foo.bind(o); // [call-site: o]
hardFoo(); // [call-site: o] 'bar'
// #4: New binding
function foo() {
this.a = 'bar';
}
let result = new foo(); // [call-site: new]
console.log(result.a); // 'bar'</code></pre><p>The last <strong>new binding rule</strong> is the first rule JavaScript tries to use. If this rule doesn’t apply, it’ll fall back to the other rules: <strong>explicit binding</strong>, <strong>implicit binding</strong> and eventually <strong>default binding</strong>.</p><p>The most important thing to remember:</p><blockquote>this changes with the function call-site, rules for binding get priorities</blockquote><p>Besides those rules, there are still some edge-cases. It becomes a bit tricky when some rules are skipped depending on the call-site or <code>this</code> value.</p><pre><code class="language-js">// 1- Call-site issue
const o = { a: 'bar', foo };
callback(o.foo); // undefined
function callback(func){
func(); // [call-site: callback]
}
// 2- Default binding isn't lexical binding
var a = 'foo';
function bar(func){
var a = 'bar'; // Doesn't override global 'a' value for this
func();
}
bar(foo); // 'foo'
// 3- this is null or undefined
var a = 'foo';
foo.call(null); // 'foo' because given 'this' is null</code></pre><p>That’s it about <code>this</code> binding. I agree it’s not easy to understand at first glance but after a while it’ll sink in. You must put the effort in to learn how it works and practice a lot.</p><p>To be honest, it’s a sum up from the entire <a href="https://github.com/getify/You-Dont-Know-JS/tree/master/this%20%26%20object%20prototypes" rel="noopener">third book of the series</a>. Don’t hesitate to begin with this book and read some chapters. <a href="/news/you-might-not-know-js-insights-from-the-javascript-bible-2ee9518302aa/undefined" rel="noopener">Kyle</a> Simpson gives far more examples and very detailed explanations.</p><h3 id="lesson-7-promises-pattern">LESSON #7— Promises pattern</h3><p>Before ES6, the common way to handle asynchronous programming was using callbacks. You call a function which can’t provide a result immediately, so you provide a function it’ll call once it finishes.</p><p>Promises are related to callbacks, but they’re going to replace callbacks. The concept of promises isn’t easy to grasp, so take your time to understand the example and try them!</p><h4 id="from-callbacks-to-promises">From callbacks to promises</h4><p>First, let’s talk about callbacks. Did you realize that using them introduces an <a href="https://en.wikipedia.org/wiki/Inversion_of_control" rel="noopener">inversion of control</a> (IoC) into the program execution? The function you’re calling gets the control over your script execution.</p><pre><code class="language-js">// Please call 'eatPizza' once you've finished your work
orderPizza(eatPizza);
function orderPizza(callback) {
// You don't know what's going on here!
callback(); // &lt;- Hope it's this
}
function eatPizza() {
console.log('Miam');
}</code></pre><p>You’ll eat your pizza, once it’s delivered and the order completed. The process behind <code>orderPizza</code> isn’t visible to us, but it’s the same for library’s functions. It may call <code>eatPizza</code> multiple times, none at all or even wait for a long time.</p><p>With promises, you can reverse the callbacks’ IoC. The function won’t ask for a callback but instead, give you a promise. Then, you can subscribe so you’ll get notice after the promise resolves (either with fulfillment or rejection).</p><pre><code class="language-js">let promise = orderPizza(); // &lt;- No callback
// Subscribes to the promise
promise.then(eatPizza);     // Fulfilled promise
promise.catch(stillHungry); // Rejected promise
function orderPizza() {
return Promise.resolve(); // &lt;- returns the promise
}</code></pre><p>Callback-based functions often ask for two callbacks (success and failure) or pass a parameter to the only callback and let you look for errors.</p><p>With promises, those two callbacks change into <code>then</code> and <code>catch</code>. It matches success and failure but promise terms are different. A <strong>fulfilled promise is a success</strong> (with <code>then</code>) and a <strong>rejected promise is a failure</strong> (with <code>catch</code>).</p><p>Depending on the API, or the library you use for promises, the <code>catch</code> may not be available. Instead, <code>then</code> takes two functions as arguments, and it’s the same pattern as for callback-based functions.</p><p>In the example, <code>orderPizza</code> returns a fulfilled promise. Usually, this kind of asynchronous function returns a pending promise (<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" rel="noopener">documentation</a>). But, in most cases, you won’t need the promise constructor because <code>Promise.resolve</code> and <code>Promise.reject</code> are enough.</p><p>A promise is nothing more than an object with a state property. The function you’re calling changes this state from <strong>pending </strong>to <strong>fulfilled </strong>or <strong>rejected</strong> once it completes its work.</p><pre><code class="language-js">// Function executed even if there are no then or catch
let promise = Promise.resolve('Pizza');
// Add callbacks later, called depending on the promise status
promise.then(youEatOneSlice);
promise.then(yourFriendEatOneSlice);
promise.then(result =&gt; console.log(result)); // 'Pizza'
// Promise is an object (with at least a then function: it's a thenable object)
const cookPromise = cookPizza();
const packPromise = cookPromise.then(function(pizza) {
return pack(pizza); // Returns a promise stored in packPromise
});
const deliverPromise = packPromise.then(function (packedPizza) { // value from pack(pizza)
return deliver(packedPizza);
});
deliverPromise.then(function (deliveredPizza) {
return eat(deliveredPizza);
});
/* For you to practice */
// - An example for cookPizza, pack, deliver and eat implementation
//   Each function append something to the previous step string
function pack(pizza) {
return Promise.resolve(pizza + ' pack');
}
// - Retrieve the result of eat and display the final string
//   Should be something like: 'pizza pack deliver eat'
function load() {
return Promise.all([foo(), bar()])
.then(console.log);
}
load();
// ES7 syntax
async function load() {
let a = await foo();
// Gets here once 'foo' is resolved and then call 'bar'
let b = await bar();
console.log(a, b);
}
load();</code></pre><p>Flag the <code>load</code> which calls the asynchronous functions <code>foo</code> and <code>bar</code> with the <code>async</code> keyword. And put <code>await</code> before the asynchronous calls. You’ll be able to use the <code>load</code> as before, with a classic <code>load()</code>.</p><p>This syntax is appealing, isn’t it? No more callback and promise hell with infinite indentation. But wait, you should consider how generators work to avoid performances issues.</p><p>In the above example, <code>bar</code> is only executed once <code>foo</code> promise resolves. Their execution isn’t parallelised. You’ll get the exact same result by writing something like <code>foo.then(bar)</code>.</p><p>Here is how to fix it:</p><pre><code class="language-js">async function load() {
let fooPromise = foo();
let barPromise = bar();
// foo and bar are executed before Promise.all
let results = await Promise.all([fooPromise, barPromise]);
console.log(results);
}
load();</code></pre><p>Make use of the <code>Promise.all</code>. Actually, <code>await</code> means you want to execute your function step by step. First, from the beginning to the first <code>await</code>. Once the promise from the first <code>await</code> resolves, it’ll resume the function up to the next <code>await</code> keyword. Or to the end of the function if there aren’t more.</p><p>In this example, <code>foo</code> and <code>bar</code> execute during the first step. The <code>load</code> function takes a break on <code>Promise.all</code>. At this point <code>foo</code> and <code>bar</code> already began their work.</p><p>This was a quick introduction to promises with some notes about the traps you don’t want to fall into. This sums up of the<a href="https://github.com/getify/You-Dont-Know-JS/tree/master/async%20%26%20performance" rel="noopener"> fifth book of the series</a> which describes in depth asynchronous patterns and promises.</p><p>You can also look at <a href="https://medium.com/@pyrolistical/how-to-get-out-of-promise-hell-8c20e0ab0513" rel="noopener">this article</a> by <a href="/news/you-might-not-know-js-insights-from-the-javascript-bible-2ee9518302aa/undefined" rel="noopener">Ronald Chen</a>. He gathers a lot of promise anti-patterns. This article will help you to escape the so-called promise hell.</p><h3 id="wrapping-up">Wrapping up</h3><p>These were the most important lessons I learned by reading <a href="https://github.com/getify/You-Dont-Know-JS" rel="noopener">You Don’t Know JS</a>. This book series has way more lessons and details to teach you about how JavaScript works.</p><p>Just a heads up: for me, it was sometimes hard to follow when the author quotes the ECMAScript spec and lengthy examples. The books are long for sure, but also very complete. By the way, I almost give up but finally, I keep reading to the end and I can tell you — it was worth it.</p><p>This isn’t some kind of advertising for <a href="/news/you-might-not-know-js-insights-from-the-javascript-bible-2ee9518302aa/undefined" rel="noopener">Kyle</a>. I just like this series and consider it a reference. Also, it’s free to read and contribute to the series through the <a href="https://github.com/getify/You-Dont-Know-JS" rel="noopener">GitHub repository</a>.</p><p><strong>If you found this article useful, please click on the </strong>? <strong>button a few times to make others find the article and show your support! </strong>?</p><p><strong>Don’t forget to follow me to get notified of my upcoming articles </strong>?</p><h3 id="check-out-my-other-articles">Check out my <a href="/news/author/jbardon/">Other</a> Articles</h3><h4 id="-javascript">➥ JavaScript</h4><ul><li><a href="https://medium.freecodecamp.org/a-quick-guide-to-learn-react-and-how-its-virtual-dom-works-c869d788cd44" rel="noopener">React for beginners series</a></li><li><a href="https://medium.freecodecamp.org/how-to-improve-your-javascript-skills-by-writing-your-own-web-development-framework-eed2226f190" rel="noopener">How to Improve Your JavaScript Skills by Writing Your Own Web Development Framework</a></li><li><a href="https://medium.freecodecamp.org/common-mistakes-to-avoid-while-working-with-vue-js-10e0b130925b" rel="noopener">Common Mistakes to Avoid While Working with Vue.js</a></li></ul><h4 id="-tips-tricks">➥ Tips &amp; tricks</h4><ul><li><a href="https://medium.freecodecamp.org/how-to-master-intellij-to-boost-your-productivity-44b9da20c556" rel="noopener">How to Master IntelliJ to Boost Your Productivity</a></li><li><a href="https://medium.com/dailyjs/stop-painful-javascript-debug-and-embrace-intellij-with-source-map-6fe68eda8555" rel="noopener">Stop Painful JavaScript Debug and Embrace Intellij with Source Map</a></li><li><a href="https://medium.com/dailyjs/how-to-reduce-enormous-javascript-bundle-without-efforts-59fe37dd4acd" rel="noopener">How To Reduce Enormous JavaScript Bundles Without Effort</a></li></ul>
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
