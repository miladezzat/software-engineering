---
card: "https://cdn-media-1.freecodecamp.org/images/1*3AzH-G1JpbL4UhzH5TXS5w.png"
tags: [JavaScript]
description: "by Vali Shah"
author: "Milad E. Fahmy"
title: "A quick overview of JavaScript symbols"
created: "2021-08-16T11:36:33+02:00"
modified: "2021-08-16T11:36:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-es6 tag-tech tag-programming tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">A quick overview of JavaScript symbols</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*3AzH-G1JpbL4UhzH5TXS5w.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*3AzH-G1JpbL4UhzH5TXS5w.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*3AzH-G1JpbL4UhzH5TXS5w.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*3AzH-G1JpbL4UhzH5TXS5w.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*3AzH-G1JpbL4UhzH5TXS5w.png" alt="A quick overview of JavaScript symbols">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
Symbol(description)</code></pre><p>Every symbol returned by <code>Symbol()</code> is unique, so every symbol has its own identity:</p><pre><code class="language-js">&gt; Symbol() === Symbol()
false</code></pre><p>You can see that symbols are primitive if you apply the <code>typeof</code> operator to one of them — it will return a new symbol-specific result:</p><pre><code class="language-js">&gt; typeof symbol
'symbol'</code></pre><h4 id="use-case-symbols-as-keys-of-non-public-properties"><strong>Use Case: Symbols as keys of non-public properties</strong></h4><p>Whenever there are inheritance hierarchies in JavaScript, you have two kinds of properties (e.g. created via classes, a purely prototypal approach):</p><ul><li><strong>Public </strong>properties are seen by clients of the code</li><li><strong>Private</strong> properties are used internally within the pieces that make up the inheritance hierarchy (e.g. classes, objects).</li></ul><p>For usability's sake, public properties usually have string keys. But for private properties with string keys, accidental name clashes can become a problem. Therefore, symbols are a good choice.</p><p>For example, in the following code, symbols are used for private properties <code>_counter</code> and <code>_action</code>:</p><pre><code class="language-js">const _counter = Symbol('counter');
const _action  = Symbol('action');
class Countdown {
constructor(counter, action) {
this[_counter] = counter;
this[_action] = action;
}
dec() {
let counter = this[_counter];
if (counter &lt; 1) return;
counter--;
this[_counter] = counter;
if (counter === 0) {
this[_action]();
}
}
}</code></pre><p>Note that symbols only protect you from name clashes, not from unauthorized access. You can find out all an object’s property keys — including symbols — via the following:</p><pre><code class="language-js">const obj = {
[Symbol('my_key')]  : 1,
enum         : 2,
nonEnum      : 3
};
Object.defineProperty(obj, 'nonEnum', { enumerable: false }); // Making 'nonEnum' as not enumerable.
// Ignores symbol-valued property keys:
&gt; Object.getOwnPropertyNames(obj)
['enum', 'nonEnum']
// Ignores string-valued property keys:
&gt; Object.getOwnPropertySymbols(obj)
[Symbol(my_key)]
// Considers all kinds of keys:
&gt; Reflect.ownKeys(obj)
[Symbol(my_key),'enum', 'nonEnum']
// Only considers enumerable property keys that are strings:
&gt; Object.keys(obj)
['enum']</code></pre><h4 id="do-we-really-need-symbols">Do we really need symbols?</h4><p>Use symbols when your requirement is one of these:</p><ul><li><strong>Enum: </strong>To allow you to define constants with semantic names and unique values.</li></ul><pre><code class="language-js">const directions = {
UP   : Symbol( ‘UP’ ),
DOWN : Symbol( ‘DOWN’ ),
LEFT : Symbol( ‘LEFT’ ),
RIGHT: Symbol( ‘RIGHT’ )
};</code></pre><ul><li><strong>Name Clashes:</strong> when you wanted to prevent collisions with keys in objects</li><li><strong>Privacy:</strong> when you don’t want your object properties to be enumerable</li><li><strong>Protocols: </strong>To define how an object can be iterated. <br> Imagine, for instance, a library like <code>dragula</code> defining a protocol through <code>Symbol.for(dragula.moves)</code> . You can add a method on that <code>Symbol</code> to any DOM element. If a DOM element follows the protocol, then <code>dragula</code> could call the <code>el[Symbol.for('dragula.moves')]()</code> user-defined method to assert whether the element can be moved.</li><li><strong>Well-known Symbols: </strong>In addition to user-defined symbols, JavaScript has some built-in symbols. These represent internal language behaviors which were not exposed to developers in &lt; ES5. More information <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#Well-known_symbols" rel="noopener nofollow"><strong><strong>here</strong></strong></a><strong><strong>.</strong></strong></li></ul><h4 id="conclusion"><strong>Conclusion</strong></h4><p><code>Symbols</code> in JavaScript can provide access level uniqueness to objects. It's worthwhile for all developer to have a basic understanding of them and their various use-cases.</p><p><code>code = <strong>co</strong>ffee + <strong>de</strong>veloper</code></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
