---
card: "https://cdn-media-1.freecodecamp.org/images/1*XtnYegzS5oCV0xWGEgNaiQ.jpeg"
tags: [JavaScript]
description: "Back in the late 90’s — when I learned JavaScript — we were t"
author: "Milad E. Fahmy"
title: "Constant confusion: why I still use JavaScript function statements"
created: "2021-08-16T10:28:18+02:00"
modified: "2021-08-16T10:28:18+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-es6 tag-programming tag-web-development tag-software-development ">
<header class="post-full-header">
<h1 class="post-full-title">Constant confusion: why I still use JavaScript function statements</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*XtnYegzS5oCV0xWGEgNaiQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*XtnYegzS5oCV0xWGEgNaiQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*XtnYegzS5oCV0xWGEgNaiQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*XtnYegzS5oCV0xWGEgNaiQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*XtnYegzS5oCV0xWGEgNaiQ.jpeg" alt="Constant confusion: why I still use JavaScript function statements">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Back in the late 90’s — when I learned JavaScript — we were taught to write the “Hello World” function using a <strong>function statement</strong>. Like this…</p><pre><code class="language-js">function helloWorld() {
return ‘Hello World!’;
return ‘Hello World!’;
return statusPoints * 10;
const sayHelloTo = (name) =&gt; `Hello ${name}`;</code></pre><p>This is because, when the JavaScript engine reads the code, it will <strong>bind</strong> “sayHelloTo”, but it won’t <strong>initialize</strong> it.</p><p>All declarations in JavaScript are bound early, but they are initialized differently.</p><p>In other words, JavaScript <strong>binds</strong> the declaration of “sayHelloTo” — reads it first and creates a space in memory to <strong>hold its value </strong>— but it doesn’t <strong>set</strong> “sayHelloTo” to anything until it reaches it during <strong>execution</strong>.</p><p>The time between “sayHelloTo” being bound and “sayHelloTo” being initialized is called the <strong>temporal dead zone</strong> (TDZ).</p><p>If you’re using ES2015 directly in the browser (as opposed to transpiling down to ES5 with something like Babel), the following code actually throws an error too:</p><pre><code class="language-js">if(thing) {
console.log(thing);
}
const thing = 'awesome thing';</code></pre><p>The code above, written using “var” instead of “const”, would <strong>not</strong> throw an error because vars get initialized as <em>undefined</em> when they are bound, whereas consts are not initialized at all at bind time. But I digress…</p><p>Function statements do not suffer from this TDZ problem. The following is perfectly valid:</p><pre><code class="language-js">sayHelloTo(‘Bill’);
function sayHelloTo(name) {
return `Hello ${name}`;
createCart,
addItemToCart,
removeItemFromCart,
cartSubTotal,
cartTotal,
saveCart,
clearCart,
}
function createCart(customerId) {...}
function isValidCustomer(customerId) {...}
function addItemToCart(item, cart) {...}
function isValidCart(cart) {...}
function isValidItem(item) {...}
...</code></pre><p>With function expressions it would look something like…</p><pre><code class="language-js">...
const _isValidCustomer = (customerId) =&gt; ...
const _isValidCart = (cart) =&gt; ...
const _isValidItem = (item) =&gt; ...
const createCart = (customerId) =&gt; ...
const addItemToCart = (item, cart) =&gt; ...
...
export {
createCart,
addItemToCart,
removeItemFromCart,
cartSubTotal,
cartTotal,
saveCart,
clearCart,
}</code></pre><p>Imagine this as a larger module with many small internal functions. Which would you prefer?</p><p>There are those who will argue that using something before you’ve declared it is unnatural, and can have unintended consequences. There are even extremely smart people who have said such things.</p><p>It is definitely an opinion — not a fact — that one way is better than the other.</p><p>But if you ask me: <strong>Code is communication. Good code tells a story.</strong></p><p>I’ll let the compilers and the transpilers, the minifiers and the uglyfiers, deal with optimizing code for the machines.</p><p>I want to optimize my code for <strong>human understanding</strong>.</p><h3 id="what-about-those-arrow-functions-though">What about those arrow functions, though?</h3><p>Yes. Still sexy and still awesome.</p><p>I typically use arrow functions to pass a small function as a value to a higher order function. I use arrow functions with promises, with map, with filter, with reduce. They are the bees knees, my friends!</p><p>Some examples:</p><pre><code class="language-js">const goodSingers = singers.filter((singer) =&gt; singer.name !== 'Justin Bieber');
function tonyMontana() {
return getTheMoney()
.then((money) =&gt; money.getThePower())
.then((power) =&gt; power.getTheWomen());
}</code></pre><p>I used a few other new JavaScript features in this article. If you want to learn more about the latest JavaScript standard (ES2015) and all the cool features it has to offer, <strong>you should <a href="https://devmastery.com/signup/es6quickstart/index.html" rel="noopener">get my quick start guide for free</a>.</strong></p><p>My goal is always to help as many developers as possible, if you found this article useful, please hit the ❤ (recommend) button so that others will see it. Thanks!</p>
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
