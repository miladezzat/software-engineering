---
card: "/images/default.jpg"
tags: [Full Stack]
description: "Modern full-stack apps – like single-page apps or mobile apps"
author: "Milad E. Fahmy"
title: "Unified Architecture – A Simpler Way to Build Full-Stack Apps"
created: "2021-08-16T10:05:41+02:00"
modified: "2021-08-16T10:05:41+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-full-stack tag-web-development tag-architecture tag-javascript tag-nodejs ">
<header class="post-full-header">
<h1 class="post-full-title">Unified Architecture – A Simpler Way to Build Full-Stack Apps</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/12/unified-architecture-2.jpg 300w,
/news/content/images/size/w600/2019/12/unified-architecture-2.jpg 600w,
/news/content/images/size/w1000/2019/12/unified-architecture-2.jpg 1000w,
/news/content/images/size/w2000/2019/12/unified-architecture-2.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/12/unified-architecture-2.jpg" alt="Unified Architecture – A Simpler Way to Build Full-Stack Apps">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<ul>
<li>data access</li>
<li>backend model</li>
<li>API server</li>
<li>API client</li>
<li>frontend model</li>
<li>and user interface.</li>
</ul>
<p>By architecting in this way, you can achieve some characteristics of a well-designed application, such as <a href="https://en.wikipedia.org/wiki/Separation_of_concerns">separation of concerns</a> or <a href="https://en.wikipedia.org/wiki/Loose_coupling">loose coupling</a>.</p>
<p>But this does not come without drawbacks. It usually comes at the cost of other important characteristics, like simplicity, <a href="https://en.wikipedia.org/wiki/Cohesion_(computer_science)">cohesion</a>, and agility.</p>
<p>It seems we can't have it all. We have to compromise.</p>
<p>The problem is that developers usually build each layer as a completely different world on its own.</p>
<p>Even if you implement the layers with the same language, they cannot communicate with one another very easily.</p>
<p>You would need a lot of <a href="https://en.wikipedia.org/wiki/Glue_code">glue code</a> to connect them all, and the <a href="https://en.wikipedia.org/wiki/Domain_model">domain model</a> gets duplicated across the stack. As a result, your development agility suffers dramatically.</p>
<p>For example, adding a simple field to a model often requires modifying all the layers of the stack. This can feel a bit ridiculous.</p>
<p>Well, I've been thinking a lot about this problem recently. And I believe I've found a way out.</p>
<p>Here's the trick: for sure, the layers of an application must be "physically" separated. But they don't need to be "logically" separated.</p>
<h2 id="theunifiedarchitecture">The Unified Architecture</h2>
<p>
<img src="https://liaison-blog.s3.dualstack.us-west-2.amazonaws.com/images/traditional-vs-unified-architecture.svg" alt="Traditional vs unified architecture" style="width: 100%; margin-top: 1.5rem">
</p>
<p>In object-oriented programming, when we use inheritance, we get some classes that can be seen in two ways: physical and logical. What do I mean by that?</p>
<p>Let's imagine we have a class <code>B</code> that inherits from a class <code>A</code>. Then, <code>A</code> and <code>B</code> can be seen as two physical classes. But logically, they are not separated, and <code>B</code> can be seen as a logical class that composes the properties of <code>A</code> with its own properties.</p>
<p>For example, when we call a method in a class, we don't have to worry if the method is implemented in this class or a parent class. From the caller perspective, there is only one class to worry about. Parent and child are unified into a single logical class.</p>
<p>How about applying the same approach to the layers of an application? Wouldn't it be great if, for example, the frontend could somehow inherit from the backend?</p>
<p>Doing so, frontend and backend would be unified into a single logical layer. And that would remove all communication and sharing issues. Indeed, backend classes, attributes, and methods would be directly accessible from the frontend.</p>
<p>Of course, we don't usually want to expose the whole backend to the frontend. But the same goes for class inheritance, and there is an elegant solution that is called "private properties". Similarly, the backend could selectively expose some attributes and methods.</p>
<p>Being able to grasp all the layers of an application from one single unified world is not a small deal. It changes the game completely. It is like going from a 3D world to a 2D world. Everything gets a lot easier.</p>
<p><a href="https://liaison.dev/blog/articles/Do-We-Really-Need-to-Separate-the-Model-from-the-UI-9wogqr#composition-over-inheritance">Inheritance is not evil</a>. Yes, it can be misused, and in some languages, it can be pretty rigid. But when properly used, it is an invaluable mechanism in our toolbox.</p>
<p>We have a problem, though. As far as I know, there is no language allowing us to inherit classes across multiple execution environments. But we are programmers, aren't we? We can build everything we want, and we can extend the language to provide new capabilities.</p>
<p>But before we get to that, let's break down the stack to see how each layer can fit in a unified architecture.</p>
<h3 id="dataaccess">Data Access</h3>
<p>For a majority of applications, the database can be abstracted using some sort of ORM. So, from the developer perspective, there is no data access layer to worry about.</p>
<p>For more ambitious applications, we might have to optimize database schemas and requests. But we don't want to clutter the backend model with these concerns, and this is where an additional layer may be appropriate.</p>
<p>We build a data access layer to implement the optimization concerns, and this usually happens late in the development cycle, if it ever happens.</p>
<p>Anyway, if we need such a layer, we can build it later. With cross-layer inheritance, we can add a data access layer on top of the backend model layer with almost no changes to the existing code.</p>
<h3 id="backendmodel">Backend Model</h3>
<p>Typically, a backend model layer handles the following responsibilities:</p>
<ul>
<li>Shaping the domain model.</li>
<li>Implementing business logic.</li>
<li>Handling the authorization mechanisms.</li>
</ul>
<p>For most backends, it's fine to implement them all in a single layer. But, if we want to handle some concerns separately, for example, we want to separate the authorization from the business logic, we can implement them in two layers that inherit from each other.</p>
<h3 id="apilayers">API Layers</h3>
<p>To connect the frontend and the backend, we usually build a web API (REST, GraphQL, etc.), and that complicates everything.</p>
<p>The web API must be implemented on both sides: an API client in the frontend and an API server in the backend. That's two extra layers to worry about, and it usually leads to duplicate the whole domain model.</p>
<p>A web API is nothing more than glue code, and it is a pain in the ass to build. So, if we can avoid it, that's a massive improvement.</p>
<p>Fortunately, we can take advantage of cross-layer inheritance again. In a unified architecture, there is no web API to build. All we have to do is to inherit the frontend model from the backend model, and we are done.</p>
<p>However, there are still some good use cases for building a web API. That's when we need to expose a backend to some third-party developers, or when we need to integrate with some legacy systems.</p>
<p>But let's be honest, most applications don't have such a requirement. And when they do, it is easy to handle it afterward. We can simply implement the web API into a new layer that inherits from the backend model layer.</p>
<p>Further information on this topic can be found in <a href="https://liaison.dev/blog/articles/How-about-interoperability-oy3ugk">this article</a>.</p>
<h3 id="frontendmodel">Frontend Model</h3>
<p>Since the backend is the source of truth, it should implement all the business logic, and the frontend should not implement any. So, the frontend model is simply inherited from the backend model, with almost no additions.</p>
<h3 id="userinterface">User Interface</h3>
<p>We usually implement the frontend model and the UI in two separate layers. But as I showed in <a href="https://liaison.dev/blog/articles/Do-We-Really-Need-to-Separate-the-Model-from-the-UI-9wogqr">this article</a>, it is not mandatory.</p>
<p>When the frontend model is made of classes, it is possible to encapsulate the views as simple methods. Don't worry if you don't see what I mean right now, it will become clearer in the example later on.</p>
<p>Since the frontend model is basically empty (see above), it is fine to implement the UI directly into it, so there is no user interface layer <em>per se</em>.</p>
<p>Implementing the UI in a separate layer is still needed when we want to support multiple platforms (e.g., a web app and a mobile app). But, since it is just a matter of inheriting a layer, that can come later in the development roadmap.</p>
<h3 id="puttingeverythingtogether">Putting Everything Together</h3>
<p>The unified architecture allowed us to unify six physical layers into one single logical layer:</p>
<ul>
<li>In a minimal implementation, data access is encapsulated into the backend model, and the same goes for UI that is encapsulated into the frontend model.</li>
<li>The frontend model inherits from the backend model.</li>
<li>The API layers are not required anymore.</li>
</ul>
<p>Again, here's what the resulting implementation looks like:</p>
<p>
<img src="https://liaison-blog.s3.dualstack.us-west-2.amazonaws.com/images/traditional-vs-unified-architecture.svg" alt="Traditional vs unified architecture" style="width: 100%; margin-top: .5rem">
</p>
<p>That's pretty spectacular, don't you think?</p>
<h2 id="liaison">Liaison</h2>
<p>To implement a unified architecture, all we need is cross-layer inheritance, and I started building <a href="https://liaison.dev">Liaison</a> to achieve exactly that.</p>
<p>You can see Liaison as a framework if you wish, but I prefer to describe it as a language extension because all its features lie at the lowest possible level — the programming language level.</p>
<p>So, Liaison does not lock you into a predefined framework, and a whole universe can be created on top of it. You can read more on this topic in <a href="https://liaison.dev/blog/articles/Getting-the-Right-Level-of-Generalization-7xpk37">this article</a>.</p>
<p>Behind the scene, Liaison relies on an <a href="https://en.wikipedia.org/wiki/Remote_procedure_call">RPC</a> mechanism. So, superficially, it can be seen as something like <a href="https://en.wikipedia.org/wiki/Common_Object_Request_Broker_Architecture">CORBA</a>, <a href="https://en.wikipedia.org/wiki/Java_remote_method_invocation">Java RMI</a>, or <a href="https://en.wikipedia.org/wiki/Windows_Communication_Foundation">.NET CWF</a>.</p>
<p>But Liaison is radically different:</p>
<ul>
<li>It is not a <a href="https://en.wikipedia.org/wiki/Distributed_object">distributed object system</a>. Indeed, a Liaison backend is stateless, so there are no shared objects across layers.</li>
<li>It is implemented at the language-level (see above).</li>
<li>Its design is straightforward and it exposes a minimal API.</li>
<li>It doesn't involve any boilerplate code, generated code, configuration files, or artifacts.</li>
<li>It uses a simple but powerful serialization protocol (<a href="https://deepr.io">Deepr</a>) that enables unique features, such as chained invocation, automatic batching, or partial execution.</li>
</ul>
<p>Liaison starts its journey in JavaScript, but the problem it tackles is universal, and it could be ported to any object-oriented language without too much trouble.</p>
<h3 id="hellocounter">Hello Counter</h3>
<p>Let's illustrate how Liaison works by implementing the classic "Counter" example as a single-page application.</p>
<p>First, we need some shared code between the frontend and the backend:</p>
<pre><code class="language-js">// shared.js
import {Model, field} from '@liaison/liaison';
export class Counter extends Model {
// The shared class defines a field to keep track of the counter's value
@field('number') value = 0;
}
</code></pre>
<p>Then, let's build the backend to implement the business logic:</p>
<pre><code class="language-js">// backend.js
import {Layer, expose} from '@liaison/liaison';
import {Counter as BaseCounter} from './shared';
class Counter extends BaseCounter {
// We expose the `value` field to the frontend
@expose({get: true, set: true}) value;
// And we expose the `increment()` method as well
@expose({call: true}) increment() {
this.value++;
}
}
// We register the backend class into an exported layer
export const backendLayer = new Layer({Counter});
</code></pre>
<p>Finally, let's build the frontend:</p>
<pre><code class="language-js">// frontend.js
import {Layer} from '@liaison/liaison';
import {Counter as BaseCounter} from './shared';
import {backendLayer} from './backend';
class Counter extends BaseCounter {
// For now, the frontend class is just inheriting the shared class
}
// We register the frontend class into a layer that inherits from the backend layer
const frontendLayer = new Layer({Counter}, {parent: backendLayer});
// Lastly, we can instantiate a counter
const counter = new frontendLayer.Counter();
// And play with it
await counter.increment();
console.log(counter.value); // =&gt; 1
</code></pre>
<p>What's going on? By invoking <code>counter.increment()</code>, we got the counter's value incremented. Notice that the <code>increment()</code> method is neither implemented in the frontend class nor in the shared class. It only exists in the backend.</p>
<p>So, how is it possible that we could call it from the frontend? This is because the frontend class is registered in a layer that inherits from the backend layer. So, when a method is missing in the frontend class, and a method with the same name is exposed in the backend class, it is automatically invoked.</p>
<p>From the frontend point of view, the operation is transparent. It doesn't need to know that a method is invoked remotely. It just works.</p>
<p>The current state of an instance (i.e., <code>counter</code>'s attributes) is automatically transported back and forth. When a method is executed in the backend, the attributes that have been modified in the frontend are sent. And inversely, when some attributes change in the backend, they are reflected in the frontend.</p>
<blockquote>
<p>Note that in this simple example, the backend is not exactly remote. Both the frontend and the backend run in the same JavaScript runtime. To make the backend truly remote, we can easily expose it through HTTP. See an <a href="https://github.com/liaisonjs/liaison/tree/master/examples/counter-via-http/src">example here</a>.</p>
</blockquote>
<p>How about passing/returning values to/from a remotely invoked method? It is possible to pass/return anything that is serializable, including class instances. As long as a class is registered with the same name in both the frontend and the backend, its instances can be automatically transported.</p>
<p>How about overriding a method across the frontend and the backend? It is no different than with regular JavaScript – we can use <code>super</code>. For example, we can override the <code>increment()</code> method to run additional code in the context of the frontend:</p>
<pre><code class="language-js">// frontend.js
class Counter extends BaseCounter {
async increment() {
await super.increment(); // Backend's `increment()` method is invoked
console.log(this.value); // Additional code is executed in the frontend
}
}
</code></pre>
<p>Now, let's build a user interface with <a href="https://reactjs.org/">React</a> and the encapsulated approach shown earlier:</p>
<pre><code class="language-js">// frontend.js
import React from 'react';
import {view} from '@liaison/react-integration';
class Counter extends BaseCounter {
// We use the `@view()` decorator to observe the model and re-render the view when needed
@view() View() {
return (
&lt;div&gt;
{this.value} &lt;button onClick={() =&gt; this.increment()}&gt;+&lt;/button&gt;
&lt;/div&gt;
);
}
}
</code></pre>
<p>Finally, to display the counter, all we need is:</p>
<pre><code class="language-js">&lt;counter.View /&gt;
</code></pre>
<p>Voilà! We built a single-page application with two unified layers and an encapsulated UI.</p>
<h3 id="proofofconcept">Proof of Concept</h3>
<p>To experiment with the unified architecture, I built a <a href="https://github.com/liaisonjs/react-liaison-realworld-example-app">RealWorld example app</a> with Liaison.</p>
<p>I might be biased, but the outcome looks pretty amazing to me: simple implementation, high code cohesion, 100% <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself">DRY</a>, and no glue code.</p>
<p>In terms of the amount of code, my implementation is significantly lighter than any other one I have examined. Check out the <a href="https://github.com/liaisonjs/react-liaison-realworld-example-app/blob/master/docs/comparison.md">results here</a>.</p>
<p>Certainly, the RealWorld example is a small application, but since it covers the most important concepts that are common to all applications, I'm confident that a unified architecture can scale up to more ambitious applications.</p>
<h2 id="conclusion">Conclusion</h2>
<p>Separation of concerns, loose coupling, simplicity, cohesion, and agility.</p>
<p>It seems we get it all, finally.</p>
<p>If you are an experienced developer, I guess you feel a bit skeptical at this point, and this is totally fine. It is hard to leave behind years of established practices.</p>
<p>If object-oriented programming is not your cup of tea, you will not want to use Liaison, and this is totally fine as well.</p>
<p>But if you are into OOP, please keep a little window open in your mind, and the next time you have to build a full-stack application, try to see how it would fit in a unified architecture.</p>
<p><a href="https://liaison.dev/">Liaison</a> is still at an early stage, but I am actively working on it, and I expect to release the first beta version in early 2020.</p>
<p>If you are interested, please star the <a href="https://github.com/liaisonjs/liaison">repository</a> and stay updated by following the <a href="https://liaison.dev/blog">blog</a> or subscribing to the <a href="https://liaison.dev/#newsletter">newsletter</a>.</p>
<p><em>Discuss this article on <a href="https://changelog.com/news/how-to-simplify-fullstack-development-with-a-unified-architecture-XVOM">Changelog News</a></em>.</p>
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
