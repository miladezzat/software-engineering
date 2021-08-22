---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9d53740569d1a4ca3726.jpg"
tags: [JavaScript]
description: JavaScript is a prototype-based language, therefore understan
author: "Milad E. Fahmy"
title: "JavaScript Prototype Explained with Examples"
created: "2021-08-15T19:31:04+02:00"
modified: "2021-08-15T19:31:04+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-prototype tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Prototype Explained with Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d53740569d1a4ca3726.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d53740569d1a4ca3726.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d53740569d1a4ca3726.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d53740569d1a4ca3726.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d53740569d1a4ca3726.jpg" alt="JavaScript Prototype Explained with Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="prototypes"><strong>Prototypes</strong></h2>
<p>JavaScript is a prototype-based language, therefore understanding the prototype object is one of the most important concepts which JavaScript practitioners need to know. This article will give you a short overview of the Prototype object through various examples. Before reading this article, you will need to have a basic understanding of the <a href="https://guide.freecodecamp.org/src/pages/javascript/this-reference/index.md"><code>this</code> reference in JavaScript</a>.</p>
<h3 id="prototype-object"><strong>Prototype object</strong></h3>
<p>For the sake of clarity, let’s examine the following example:</p><pre><code class="language-javascript">function Point2D(x, y) {
this.x = x;
this.y = y;
}</code></pre>
<p>As <code>Point2D</code> function is declared, a default property named <code>prototype</code> will be created for it (note that, in JavaScript, a function is also an object). The <code>prototype</code> property is an object which contains a <code>constructor</code> property and its value is <code>Point2D</code> function: <code>Point2D.prototype.constructor = Point2D</code>. And when you call <code>Point2D</code> with <code>new</code> keyword, <em>newly created objects will inherit all properties from</em> <code>Point2D.prototype</code>. To check that, you can add a method named <code>move</code> into <code>Point2D.prototype</code> as follows:</p><pre><code class="language-javascript">Point2D.prototype.move = function(dx, dy) {
this.x += dx;
this.y += dy;
}
var p1 = new Point2D(1, 2);
p1.move(3, 4);
console.log(p1.x); // 4
console.log(p1.y); // 6</code></pre>
<p>The <code>Point2D.prototype</code> is called <strong><strong>prototype object</strong></strong> or <strong><strong>prototype</strong></strong> of <code>p1</code> object and for any other object created with <code>new Point2D(...)</code> syntax. You can add more properties to <code>Point2D.prototype</code> object as you like. The common pattern is declare methods to <code>Point2D.prototype</code> and other properties will be declared in constructor function.</p>
<p>Built-in objects in JavaScript are constructed in a similar manner. For example:</p>
<ul>
<li>Prototype of objects created with <code>new Object()</code> or <code>{}</code> syntax is <code>Object.prototype</code>.</li>
<li>Prototype of arrays created with <code>new Array()</code> or <code>[]</code> syntax is <code>Array.prototype</code>.</li>
<li>And so on with other built-in objects such as <code>Date</code> and <code>RegExp</code>.</li>
</ul>
<p><code>Object.prototype</code> is inherited by all objects and it has no prototype (its prototype is <code>null</code>).</p>
<h3 id="prototype-chain"><strong>Prototype chain</strong></h3>
<p>The prototype chain mechanism is simple: When you access a property <code>p</code> on object <code>obj</code>, the JavaScript engine will search this property inside <code>obj</code> object. If the engine fails to search, it continues searching in the prototype of <code>obj</code> object and so on until reaching <code>Object.prototype</code>. If after the search has finished, and nothing has been found the result will be <code>undefined</code>. For example:</p><pre><code class="language-javascript">var obj1 = {
a: 1,
b: 2
};
var obj2 = Object.create(obj1);
obj2.a = 2;
console.log(obj2.a); // 2
console.log(obj2.b); // 2
console.log(obj2.c); // undefined</code></pre>
<p>In above snippet, the statement <code>var obj2 = Object.create(obj1)</code> will create <code>obj2</code> object with prototype <code>obj1</code> object. In other words, <code>obj1</code> becomes the prototype of <code>obj2</code> instead of <code>Object.prototype</code> by default. As you can see, <code>b</code> is not a property of <code>obj2</code>, you can still access it via the prototype chain. For <code>c</code> property, however, you get <code>undefined</code> value because it can’t be found in <code>obj1</code> and <code>Object.prototype</code>.</p>
<h3 id="classes"><strong>Classes</strong></h3>
<p>In ES2016, we now get to use the <code>Class</code> keyword as well as the methods mentioned above to manipulate <code>prototype</code>. The JavaScript <code>Class</code> appeals to developers from OOP backgrounds, but it’s essentially doing the same thing as above.</p><pre><code class="language-javascript">class Rectangle {
constructor(height, width) {
this.height = height
this.width = width
}
get area() {
return this.calcArea()
}
calcArea() {
return this.height * this.width
}
}
const square = new Rectangle(10, 10)
console.log(square.area) // 100</code></pre>
<p>This is basically the same as:</p><pre><code class="language-javascript">function Rectangle(height, width) {
this.height = height
this.width = width
}
Rectangle.prototype.calcArea = function calcArea() {
return this.height * this.width
}</code></pre>
<p>The <code>getter</code> and <code>setter</code> methods in classes bind an Object property to a function that will be called when that property is looked up. It’s just syntactic sugar to help make it easier to <em>look up</em> or <em>set</em> properties.</p>
<h2 id="more-info-on-js-prototypes-">More info on JS Prototypes:</h2>
<ul>
<li><a href="/news/all-you-need-to-know-to-understand-javascripts-prototype-a2bff2d28f03/">All you need to know to understand JavaScript's prototype</a></li>
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
