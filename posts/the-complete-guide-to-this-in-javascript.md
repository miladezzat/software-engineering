---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9dc9740569d1a4ca39a1.jpg"
tags: [JavaScript]
description: "In JavaScript, every function has a this reference automatica"
author: "Milad E. Fahmy"
title: "The Complete Guide to this in JavaScript"
created: "2021-08-16T10:05:38+02:00"
modified: "2021-08-16T10:05:38+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development tag-programming-languages tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">The Complete Guide to this in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9dc9740569d1a4ca39a1.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9dc9740569d1a4ca39a1.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9dc9740569d1a4ca39a1.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9dc9740569d1a4ca39a1.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9dc9740569d1a4ca39a1.jpg" alt="The Complete Guide to this in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>In JavaScript, every function has a <code>this</code> reference automatically created when you declare it. </p><p>JavaScript's <code>this</code> is quite similar to a <code>this</code> reference in other class-based languages such as Java or C# (JavaScript is a prototype-based language and no “class” concept): <em>It points to the which object is calling to the function</em> (this object sometimes called as <em>context</em>). In JavaScript, however, <em>the <code>this</code> reference inside functions can be bound to different objects depending on where the function is being called</em>. </p><p>Here are 5 basic rules for <code>this</code> binding in JavaScript:</p><h3 id="rule-1"><strong>Rule 1</strong></h3><p>When a function is called in the global scope, the <code>this</code> reference is by default bound to the <strong><strong>global object</strong></strong> (<code>window</code> in the browser, or <code>global</code> in Node.js). For example:</p><pre><code class="language-javascript">function foo() {
this.a = 2;
}
foo();
console.log(a); // 2</code></pre><p>Note: If you declare the <code>foo()</code> function above in strict mode, then you call this function in global scope, <code>this</code> will be <code>undefined</code> and assignment <code>this.a = 2</code> will throw <code>Uncaught TypeError</code> exception.</p><h3 id="rule-2"><strong>Rule 2</strong></h3><p>Let’s examine example below:</p><pre><code class="language-javascript">function foo() {
this.a = 2;
}
const obj = {
foo: foo
};
obj.foo();
console.log(obj.a); // 2</code></pre><p>Clearly, in the above snippet, the <code>foo()</code> function is being called with <em>context</em> is <code>obj</code> object and <code>this</code> reference now is bound to <code>obj</code>. So when a function is called with a context object, the <code>this</code> reference will be bound to this object.</p><h3 id="rule-3"><strong>Rule 3</strong></h3><p><code>.call</code>, <code>.apply</code> and <code>.bind</code> can all be used at the call site to explicitly bind <code>this</code>. Using <code>.bind(this)</code> is something you may see in quite a lot of React components.</p><pre><code class="language-javascript">const foo = function() {
console.log(this.bar)
}
foo.call({ bar: 1 }) // 1</code></pre><p>Here’s a quick example of how each one is used to bind <code>this</code>:</p><ul><li><code>.call()</code>: <code>fn.call(thisObj, fnParam1, fnParam2)</code></li><li><code>.apply()</code>: <code>fn.apply(thisObj, [fnParam1, fnParam2])</code></li><li><code>.bind()</code>: <code>const newFn = fn.bind(thisObj, fnParam1, fnParam2)</code></li></ul><h3 id="rule-4"><strong>Rule 4</strong></h3><pre><code class="language-javascript">function Point2D(x, y) {
this.x = x;
this.y = y;
}
const p1 = new Point2D(1, 2);
console.log(p1.x); // 1
console.log(p1.y); // 2</code></pre><p>The thing you must notice that is the <code>Point2D</code> function called with <code>new</code> keyword, and <code>this</code> reference is bound to <code>p1</code> object. So when a function is called with <code>new</code> keyword, it will create a new object and <code>this</code> reference will be bound to this object.</p><p>Note: As you call a function with <code>new</code> keyword, we also call it as <em>constructor function</em>.</p><h3 id="rule-5"><strong>Rule 5</strong></h3><p>JavaScript determines the value of <code>this</code> at runtime, based on the current context. So <code>this</code> can sometimes point to something other than what you expect.</p><p>Consider this example of a Cat class with a method called <code>makeSound()</code>, following the pattern in Rule 4 (above) with a constructor function and the <code>new</code> keyword.</p><pre><code class="language-javascript">const Cat = function(name, sound) {
this.name = name;
this.sound = sound;
this.makeSound = function() {
console.log( this.name + ' says: ' + this.sound );
};
}
const kitty = new Cat('Fat Daddy', 'Mrrooowww');
kitty.makeSound(); // Fat Daddy says: Mrrooowww</code></pre><p>Now let’s try to give the cat a way to <code>annoy()</code> people by repeating his sound 100 times, once every half second.</p><pre><code class="language-javascript">const Cat = function(name, sound) {
this.name = name;
this.sound = sound;
this.makeSound = function() {
console.log( this.name + ' says: ' + this.sound );
};
this.annoy = function() {
let count = 0, max = 100;
const t = setInterval(function() {
this.makeSound(); // &lt;-- this line fails with `this.makeSound is not a function`
count++;
if (count === max) {
clearTimeout(t);
}
}, 500);
};
}
const kitty = new Cat('Fat Daddy', 'Mrrooowww');
kitty.annoy();</code></pre><p>That doesn’t work because inside the <code>setInterval</code> callback we’ve created a new context with global scope, so <code>this</code> no longer points to our kitty instance. In a web browser, <code>this</code> will instead point to the Window object, which doesn’t have a <code>makeSound()</code> method.</p><p>A couple of ways to make it work:</p><ol><li>Before creating the new context, assign <code>this</code> to a local variable named <code>me</code>, or <code>self</code>, or whatever you want to call it, and use that variable inside the callback.</li></ol><pre><code class="language-javascript">const Cat = function(name, sound) {
this.name = name;
this.sound = sound;
this.makeSound = function() {
console.log( this.name + ' says: ' + this.sound );
};
this.annoy = function() {
let count = 0, max = 100;
const self = this;
const t = setInterval(function() {
self.makeSound();
count++;
if (count === max) {
clearTimeout(t);
}
}, 500);
};
}
const kitty = new Cat('Fat Daddy', 'Mrrooowww');
kitty.annoy();</code></pre><ol><li>With ES6 you can avoid assigning <code>this</code> to a local variable by using an arrow function, which binds <code>this</code> to the context of the surrounding code where it’s defined.</li></ol><pre><code class="language-javascript">const Cat = function(name, sound) {
this.name = name;
this.sound = sound;
this.makeSound = function() {
console.log( this.name + ' says: ' + this.sound );
};
this.annoy = function() {
let count = 0, max = 100;
const t = setInterval(() =&gt; {
this.makeSound();
count++;
if (count === max) {
clearTimeout(t);
}
}, 500);
};
}
const kitty = new Cat('Fat Daddy', 'Mrrooowww');
kitty.annoy();</code></pre>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
