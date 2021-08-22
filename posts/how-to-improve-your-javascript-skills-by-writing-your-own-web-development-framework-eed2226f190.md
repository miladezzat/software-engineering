---
card: "https://cdn-media-1.freecodecamp.org/images/1*KR8iGkB0dfLoeHz9kq5t4g.jpeg"
tags: [Tech]
description: "Have you ever asked yourself how a framework works?"
author: "Milad E. Fahmy"
title: "How to Improve Your JavaScript Skills by Writing Your Own Web Development Framework"
created: "2021-08-16T11:41:45+02:00"
modified: "2021-08-16T11:41:45+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-tech tag-programming tag-web-development tag-javascript tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to Improve Your JavaScript Skills by Writing Your Own Web Development Framework</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*KR8iGkB0dfLoeHz9kq5t4g.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*KR8iGkB0dfLoeHz9kq5t4g.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*KR8iGkB0dfLoeHz9kq5t4g.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*KR8iGkB0dfLoeHz9kq5t4g.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*KR8iGkB0dfLoeHz9kq5t4g.jpeg" alt="How to Improve Your JavaScript Skills by Writing Your Own Web Development Framework">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Have you ever asked yourself how a framework works?</p><p>When I discovered <a href="https://angularjs.org/" rel="noopener">AngularJS</a> after learning <a href="https://jquery.com/" rel="noopener">jQuery</a> many years ago, AngularJS seemed like dark magic to me.</p><p>Then Vue.js came out, and upon analyzing how it works under the hood, I was encouraged to try writing my own <a href="https://en.wikipedia.org/wiki/Data_binding" rel="noopener">two-way binding system</a>.</p><p>In this article, I’ll show you how to write a modern JavaScript framework with custom HTML element attributes, reactivity, and double-binding.</p><h3 id="how-does-reactivity-work">How does reactivity work?</h3><p>It would be good to start with an understanding of how reactivity works. The good news is that this is simple. Actually, when you declare a new component in Vue.js, the framework will <a href="https://vuejs.org/v2/guide/reactivity.html#How-Changes-Are-Tracked" rel="noopener">proxify each property</a> (getters and setters) using the <a href="https://en.wikipedia.org/wiki/Proxy_pattern" rel="noopener">proxy design pattern</a>.</p><p>Thus it will be able to detect property value changes both from code and user inputs.</p><h3 id="what-the-proxy-design-pattern-looks-like">What the proxy design pattern looks like</h3><p>The idea behind the proxy pattern is simply to overload access to an object. An analogy in real life could be the access to your bank account.</p><p>For example, you can’t directly access your bank account balance and change the value according to your needs. It is necessary for you to ask someone that has this permission, in this case, your bank.</p><pre><code class="language-js">var account = {
balance: 5000
}
// A bank acts like a proxy between your bank account and you
var bank = new Proxy(account, {
get: function (target, prop) {
return 9000000;
}
});
console.log(account.balance); // 5,000 (your real balance)
console.log(bank.balance);    // 9,000,000 (the bank is lying)
console.log(bank.currency);   // 9,000,000 (the bank is doing anything)</code></pre><p>In the example above, when using the <code>bank</code> object to access the <code>account</code> balance, the getter function is overloaded, and it always returns <code>9,000,000</code> instead of the property value, even if the property doesn’t exist.</p><pre><code class="language-js">// Overload setter default function
var bank = new Proxy(account, {
set: function (target, prop, value) {
// Always set property value to 0
return Reflect.set(target, prop, 0);
}
});
account.balance = 5800;
console.log(account.balance); // 5,800
bank.balance = 5400;
console.log(account.balance); // 0 (the bank is doing anything)</code></pre><p>By overloading the <code>set</code> function, it’s possible to manipulate its behavior. You can change the value to set, update another property instead, or even not do anything at all.</p><h3 id="reactivity-example">Reactivity example</h3><p>Now that you’re confident about how the proxy design pattern works, let’s begin writting our JavaScript framework.</p><p>To keep it simple, we’ll mimic the AngularJS syntax to do it. Declaring a controller and binding template elements to controller properties is quite straightforward.</p><pre><code class="language-js">&lt;div ng-controller="InputController"&gt;
&lt;!-- "Hello World!" --&gt;
&lt;input ng-bind="message"/&gt;
&lt;input ng-bind="message"/&gt;
&lt;/div&gt;
&lt;script type="javascript"&gt;
function InputController () {
this.message = 'Hello World!';
}
angular.controller('InputController', InputController);
&lt;/script&gt;</code></pre><p>First, define a controller with properties. Then use this controller in a template. Finally, use the <code>ng-bind</code> attribute to enable double-binding with the element value.</p><h3 id="parse-template-and-instantiate-the-controller">Parse template and instantiate the controller</h3><p>To have properties to bind, we need to get a place (aka controller) to declare those properties. Thus, it is necessary to define a controller and introduce it to our framework.</p><p>During the controller declaration, the framework will look for elements that have <code>ng-controller</code> attributes.</p><p>If it fits with one of the declared controllers, it will create a new instance of this controller. This controller instance is only responsible for this particular piece of template.</p><pre><code class="language-js">var controllers = {};
var addController = function (name, constructor) {
// Store controller constructor
controllers[name] = {
factory: constructor,
instances: []
};
// Look for elements using the controller
var element = document.querySelector('[ng-controller=' + name + ']');
if (!element){
return; // No element uses this controller
}
// Create a new instance and save it
var ctrl = new controllers[name].factory;
controllers[name].instances.push(ctrl);
// Look for bindings.....
};
// Note: element is the dom element using the controller
Array.prototype.slice.call(element.querySelectorAll('[ng-bind]'))
.map(function (element) {
var boundValue = element.getAttribute('ng-bind');
if(!bindings[boundValue]) {
bindings[boundValue] = {
boundValue: boundValue,
elements: []
}
}
bindings[boundValue].elements.push(element);
var proxy = new Proxy(ctrl, {
set: function (target, prop, value) {
var bind = bindings[prop];
if(bind) {
// Update each DOM element bound to the property
bind.elements.forEach(function (element) {
element.value = value;
element.setAttribute('value', value);
});
}
return Reflect.set(target, prop, value);
}
});</code></pre><p>Whenever a bound property is set, the proxy will check all elements bound to this property. Then it will update them with the new value.</p><p>In this example, we support only <strong>input </strong>elements binding, because only the <code>value</code> attribute is set.</p><h4 id="react-to-element-events">React to element events</h4><p>The last thing to do is reacting to user interactions. DOM elements trigger events when they detect a value change.</p><p>Listen to those events and update the bound property with the new value from the event. All other elements bound to the same property will update automatically thanks to the proxy.</p><pre><code class="language-js">Object.keys(bindings).forEach(function (boundValue) {
var bind = bindings[boundValue];
// Listen elements event and update proxy property
bind.elements.forEach(function (element) {
element.addEventListener('input', function (event) {
proxy[bind.boundValue] = event.target.value; // Also triggers the proxy setter
});
})
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
