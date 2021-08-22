---
card: "/images/default.jpg"
tags: [JavaScript]
description: To understand what this truly means in JavaScript, let's take
author: "Milad E. Fahmy"
title: "What Does 'this' Mean in JavaScript? The this Keyword Explained with Examples"
created: "2021-08-15T19:26:09+02:00"
modified: "2021-08-15T19:26:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">What Does 'this' Mean in JavaScript? The this Keyword Explained with Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/06/0001-2550990419_20210608_114432_0000.png 300w,
/news/content/images/size/w600/2021/06/0001-2550990419_20210608_114432_0000.png 600w,
/news/content/images/size/w1000/2021/06/0001-2550990419_20210608_114432_0000.png 1000w,
/news/content/images/size/w2000/2021/06/0001-2550990419_20210608_114432_0000.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/06/0001-2550990419_20210608_114432_0000.png" alt="What Does 'this' Mean in JavaScript? The this Keyword Explained with Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>To understand what <code>this</code><em> </em>truly means in JavaScript, let's take a look at a very similar concept in the English Language: <strong>Polysemy.</strong></p>
<p>Let's consider the word "<strong>run</strong>". Run is a single word which could mean many different things depending on the <strong>context</strong>.</p>
<ul>
<li>“I will run home” – means to move quickly on foot</li>
<li>“She ran the 1500m” – means to run in a race</li>
<li>“He is running for president” – means vying for an official position</li>
<li>“The app is running” – means the software application is still open and active</li>
<li>“Go for a run” – means running as a form of exercise</li>
</ul>
<p><em>and the list goes on.</em></p>
<p>A similar scenario plays out when you use the <strong><code>this</code><em> </em></strong>keyword in your JavaScript code. When you do so, it automatically resolves to an object or scope depending on the context at which is was defined.</p>
<p>What are the possible contexts? And how can we use that information to deduce which object a <strong><code>this</code> call</strong> will resolve to?</p>
<h2 id="this-context"><code>this</code> Context</h2>
<p>When used in a function, the <code>this</code> keyword simply points to an object to which it is bound. It answers the question of <strong>where it should get some value or data from:</strong></p>
console.log(this.name + ' is calling');
}
</code></pre>
<figcaption>A function with a "this" reference</figcaption>
</figure>
<p>In the function above, the <code>this</code> keyword is referring to an object to which it is bound <strong>so it gets the "name" property from there</strong>.</p>
<p>But how do you know which object the function is bound to? How do you find out what <code>this</code> is referring to?</p>
<p>To do so, we need to take a detailed look at how functions are bound to objects.</p>
<h2 id="types-of-binding-in-javascript">Types of Binding in JavaScript</h2>
<p>There are generally four kinds of bindings:</p>
<ul>
<li>Default Binding</li>
<li>Implicit Binding</li>
<li>Explicit Binding</li>
<li>Constructor Call Binding</li>
</ul>
<h3 id="default-binding-in-javascript">Default Binding in JavaScript</h3>
<p>One of the first rules to remember is that if the function housing a <code>this</code><em> </em>reference is a <strong>standalone function</strong>, then that function is bound to the <strong>global object.</strong></p>
console.log(this.name + ' is calling');
}
const name = 'Kingsley';
alert(); // Kingsley is calling
</code></pre>
<figcaption>Standalone function</figcaption>
</figure>
<p>As you can see, <code>name()</code> is a standalone, unattached function, so it is bound to the <strong>global scope</strong>. As a result, the <code>this.name</code> reference resolves to the global variable <strong><code>const name = 'Kingsley'</code></strong>.</p>
<p>This rule, however, doesn't hold if <code>name()</code> were to be defined in strict mode:</p>
'use strict';
console.log(this.name + ' is calling');
}
const name = 'Kingsley';
alert(); // TypeError: `this` is `undefined`
</code></pre>
<figcaption>undefined in strict mode</figcaption>
</figure>
<p>When set in strict mode, the <code>this</code> reference is set to undefined.</p>
<h3 id="implicit-binding-in-javascript">Implicit Binding in JavaScript</h3>
<p>Another scenario to look out for is whether the function is attached to an object (its context) <strong>at the call site.</strong></p>
<p>According to the binding rule in JavaScript, a function can use an object as its context only if that object is bound to it at the call site. This form of binding is known as implicit binding.</p>
<p>Here is what I mean by that:</p><pre><code class="language-js">function alert() {
console.log(this.age + ' years old');
}
const myObj = {
age: 22,
alert: alert
}
myObj.alert() // 22 years old
</code></pre>
<p>Put simply, when you call a function using dot notation, <code>this</code> is implicitly bound to the object the function is being called from.</p>
<p>In this example, since <code>alert</code> is being called from <code>myObj</code>, the <code>this</code> keyword is bound to <code>myObj</code>. So when <code>alert</code> is called with <code>myObj.alert()</code>, <code>this.age</code> is 22, which is the <code>age</code> property of <code>myObj</code>.</p>
<p>Let's look at another example:</p><pre><code class="language-js">function alert() {
console.log(this.age + ' years old');
}
const myObj = {
age: 22,
alert: alert,
nestedObj: {
age: 26,
alert: alert
}
}
myObj.nestedObj.alert(); // 26 years old
</code></pre>
<p>Here, because <code>alert</code> is ultimately being called from <code>nestedObj</code>, <code>this</code> is implicitly bound to <code>nestedObj</code> instead of <code>myObj</code>.</p>
<p>An easy way to figure out which object <code>this</code> is implicitly bound to is to look at which object is to the left of the dot (<code>.</code>):</p><pre><code class="language-js">function alert() {
console.log(this.age + ' years old');
}
const myObj = {
age: 22,
alert: alert,
nestedObj: {
age: 26,
alert: alert
}
}
myObj.alert(); // `this` is bound to `myObj` -- 22 years old
myObj.nestedObj.alert(); // `this` is bound to `nestedObj` -- 26 years old</code></pre>
<h3 id="explicit-binding-in-javascript">Explicit binding in JavaScript</h3>
<p>We saw that implicit binding had to do with having a reference in that object.</p>
<p>But what if we want to <strong>force </strong>a function to use an object as its context without putting a property function reference on the object?</p>
<p>We have two utility methods to achieve this: <code>call()</code> and <code>apply()</code>.</p>
<p>Along with a couple other set of utility functions, these two utilities are available to all functions in JavaScript via the [[Prototype]] mechanism.</p>
<p>To explicitly bind a function call to a context, you simply have to invoke the <code>call()</code> on that function and pass in the context object as parameter:</p><pre><code class="language-js">function alert() {
console.log(this.age + ' years old');
}
const myObj = {
age: 22
}
alert.call(myObj); // 22 years old
</code></pre>
<p>Now here's the fun part. Even if you were to pass around that function multiple times to new variables (currying), every invocation will use the same context because it has been locked (explicitly bound) to that object. This is called <strong>hard binding</strong>.</p>
console.log(this.age);
}
const myObj = {
age: 22
};
const bar = function() {
alert.call(myObj);
};
bar(); // 22
setTimeout(bar, 100); // 22
// a hard-bound `bar` can no longer have its `this` context overridden
bar.call(window); // still 22
</code></pre>
<figcaption>Hard binding</figcaption>
</figure>
<p>Hard binding is a perfect way to lock a context into a function call and truly make that function into a method.</p>
<h3 id="constructor-call-binding-in-javascript">Constructor Call Binding in JavaScript</h3>
<p>The final and perhaps most interesting kind of binding is the new binding which also accentuates the unusual behavior of JavaScript in comparison to other class-based languages.</p>
<p>When a function is invoked with the <code>new</code><strong><em> </em></strong>keyword in front of it, otherwise known as a <strong>constructor call</strong>, the following things occur:</p>
<ol>
<li>A brand new object is created (or constructed)</li>
<li>The newly constructed object is [[Prototype]]-linked to the function that constructed it</li>
<li>The newly constructed object is set as the <code>this</code> binding for that function call.</li>
</ol>
<p>Let's see this in code to get a better understanding:</p><pre><code class="language-js">function giveAge(age) {
this.age = age;
}
const bar = new giveAge(22);
console.log(bar.age); // 22
</code></pre>
<p>By calling <code>giveAge(...)</code> with <code>new</code><em><strong> </strong></em>in front of it, we’ve constructed a new object and set that new object as the <code>this</code> for the call of <code>foo(...)</code>. So <code>new</code> is the final way that you can bind a function call’s <code>this</code> .</p>
<h2 id="wrapping-up">Wrapping Up</h2>
<p>In summary,</p>
<ul>
<li>The <code>this</code> keyword, when used in a function, binds that function to a context object</li>
<li>There are four kinds of bindings: <em>default binding, implicit binding, explicit binding and constructor call binding</em> (<em>new</em>)</li>
<li>Knowing these four rules will help you easily discern the context for a <code>this</code><strong><em> </em></strong>reference.</li>
</ul>
<figcaption>An Image Explaining the 'this' keyword</figcaption>
</figure>
<p></p>
<figcaption>An Image Explaining the 'this' keyword</figcaption>
</figure>
<p>If you liked or benefited from this article and would like to support me, you can buy me a coffee <a href="https://buymeacoffee.com/ubahthebuilder">here</a>.</p>
<p>You can also reach me on <a href="https://twitter.com/UbahTheBuilder">Twitter</a>. Be sure to check out my <a href="https://ubahthebuilder.tech">blog</a> for more JavaScript and programming related content.</p>
<p>Thanks and see you soon.</p>
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
