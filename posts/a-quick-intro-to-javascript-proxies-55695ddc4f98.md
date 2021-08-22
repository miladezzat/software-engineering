---
card: "https://cdn-media-1.freecodecamp.org/images/1*angpGt6Kog97_mI5sbi7Hg.jpeg"
tags: [JavaScript]
description: "What is a JavaScript proxy? you might ask. It is one of the f"
author: "Milad E. Fahmy"
title: "A quick intro to JavaScript Proxies"
created: "2021-08-16T11:43:15+02:00"
modified: "2021-08-16T11:43:15+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-learning tag-technology tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">A quick intro to JavaScript Proxies</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*angpGt6Kog97_mI5sbi7Hg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*angpGt6Kog97_mI5sbi7Hg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*angpGt6Kog97_mI5sbi7Hg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*angpGt6Kog97_mI5sbi7Hg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*angpGt6Kog97_mI5sbi7Hg.jpeg" alt="A quick intro to JavaScript Proxies">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>What is a JavaScript proxy? you might ask. It is one of the features that shipped with ES6. Sadly, it seems not to be widely used.</p><p>According to the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy" rel="noopener">MDN Web Docs</a>:</p><blockquote>The <strong>Proxy</strong> object is used to define custom behavior for fundamental operations (e.g. property lookup, assignment, enumeration, function invocation, etc).</blockquote><p>In simple terms, proxies are <strong>getters</strong> and <strong>setters</strong> with lots of swag. A proxy object sits between an object and the outside world. They intercept calls to the attributes and methods of an object even if those attributes and methods don’t exist.</p><p>For us to understand how proxies work, we need to define three terms used by proxies:</p><ol><li><strong>handler</strong>: The placeholder object which contains traps (they’re the interceptors).</li><li><strong>traps</strong>: The methods that provide property access (they live inside the handler).</li><li><strong>target</strong>: The object which the proxy virtualizes.</li></ol><h4 id="syntax">Syntax</h4><pre><code class="language-js">let myProxy = new Proxy(target, handler);</code></pre><h3 id="why-proxies">Why proxies?</h3><p>Since proxies are similar to <strong>getters</strong> and <strong>setters</strong>, why should we use them? Let’s see why:</p><pre><code class="language-js">const staff = {
_name: "Jane Doe",
_age: 25,
get name() {
console.log(this._name);
},
get age() {
console.log(this._age);
},
set age(newAge) {
this._age = newAge;
console.log(this._age)
}
};
staff.name // =&gt; "Jane Doe"
staff.age // =&gt; 25
staff.age = 30
staff.age // =&gt; 30
staff.position // =&gt; undefined</code></pre><p>Let’s write the same code with proxies:</p><pre><code class="language-js">const staff = {
name: "Jane Doe",
age: 25
}
const handler = {
get: (target, name) =&gt; {
name in target ? console.log(target[name]) : console.log('404 not found');
},
set: (target, name, value) =&gt; {
target[name] = value;
}
}
const staffProxy = new Proxy(staff, handler);
staffProxy.name // =&gt; "Jane Doe"
staffProxy.age // =&gt; 25
staffProxy.age = 30
staffProxy.age // =&gt; 30
staffProxy.position // =&gt; '404 not found'</code></pre><p>In the above example using <strong>getters</strong> and <strong>setters</strong>, we have to define a <strong>getter</strong> and <strong>setter</strong> for each attribute in the <code>staff</code> object. When we try to access a non-existing property, we get <code>undefined</code>.</p><p>With proxies, we only need one <code>get</code> and <code>set</code> trap to manage interactions with every property in the <code>staff</code> object. Whenever we try to access a non-existing property, we get a custom error message.</p><p>There are many other use cases for proxies. Let’s explore some:</p><h3 id="validation-with-proxies">Validation with proxies</h3><p>With proxies, we can enforce value validations in JavaScript objects. Let’s say we have a <code>staff</code> schema and would like to perform some validations before a staff can be saved:</p><pre><code class="language-js">const validator = {
set: (target, key, value) =&gt; {
const allowedProperties = ['name', 'age', 'position'];
if (!allowedProperties.includes(key)) {
throw new Error(`${key} is not a valid property`)
}
if (key === 'age') {
if (typeof value !== 'number' || Number.isNaN(value) || value &lt;= 0) {
throw new TypeError('Age must be a positive number')
}
}
if (key === 'name' || key === 'position') {
if (typeof value !== 'string' || value.length &lt;= 0) {
throw new TypeError(`${key} must be a valid string`)
}
}
target[key] = value; // save the value
return true; // indicate success
}
}
const staff = new Proxy({}, validator);
staff.stats = "malicious code" //=&gt; Uncaught Error: stats is not a valid property
staff.age = 0 //=&gt; Uncaught TypeError: Age must be a positive number
staff.age = 10
staff.age //=&gt; 10
staff.name = '' //=&gt; Uncaught TypeError: name must be a valid string</code></pre><p>In the code snippet above, we declare a <code>validator</code> handler where we have an array of <code>allowedProperties</code>. In the <code>set</code> trap, we check if the key being set is part of our <code>allowedProperties</code>. If it’s not, we throw an error. We also check if the values being set are of certain data types before we save the value.</p><h3 id="revocable-proxies">Revocable proxies</h3><p>What if we wanted to revoke access to an object? Well, JavaScript proxies have a <code>Proxy.revocable()</code> method which creates a revocable proxy. This gives us the ability to revoke access to a proxy. Let’s see how it works:</p><pre><code class="language-js">const handler = {
get: (target, name) =&gt; {
name in target ? console.log(target[name]) : console.log('404 not found');
console.log(target)
},
set: (target, name, value) =&gt; {
target[name] = value;
}
}
const staff = {
name: "Jane Doe",
age: 25
}
let { proxy, revoke } = Proxy.revocable(staff, handler);
proxy.age // =&gt; 25
proxy.name // =&gt; "Jane Doe"
proxy.age = 30
proxy.age // =&gt; 30
revoke() // revoke access to the proxy
proxy.age // =&gt; Uncaught TypeError: Cannot perform 'get' on a proxy that has been revoked
proxy.age = 30 // =&gt; Uncaught TypeError: Cannot perform 'set' on a proxy that has been revoked</code></pre><p>In the example above, we are using destructuring to access the<code>proxy</code> and <code>revoke</code> properties of the object returned by <code>Proxy.revocable()</code>.</p><p>After we call the <code>revoke</code> function, any operation applied to <code>proxy</code> causes a <code>TypeError</code>. With this in our code, we can prevent users from taking certain actions on certain objects.</p><p>JavaScript proxies are a powerful way to create and manage interactions between objects. Other real world applications for Proxies include:</p><ul><li>Extending constructors</li><li>Manipulating DOM nodes</li><li>Value correction and an extra property</li><li>Tracing property accesses</li><li>Trapping function calls</li></ul><p>And the list goes on.</p><p>There’s more to proxies than we have covered here. You can check the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy" rel="noopener">Proxy MDN Docs</a> to find out all the available traps and how to use them.</p><p>I hope you found this tutorial useful. Please do and share so others can find this article. Hit me up on Twitter @d<a href="https://twitter.com/developia_" rel="noopener">evelopia_</a> with questions or for a chat.</p>
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
