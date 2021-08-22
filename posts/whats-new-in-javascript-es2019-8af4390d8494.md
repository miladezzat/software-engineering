---
card: "https://cdn-media-1.freecodecamp.org/images/1*eK0RbuEJK9WzmA272g41Qg.png"
tags: [JavaScript]
description: "by Vali Shah"
author: "Milad E. Fahmy"
title: "What’s new in JavaScript ES2019"
created: "2021-08-15T23:45:40+02:00"
modified: "2021-08-15T23:45:40+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-programming tag-coding tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">What’s new in JavaScript ES2019</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*eK0RbuEJK9WzmA272g41Qg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*eK0RbuEJK9WzmA272g41Qg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*eK0RbuEJK9WzmA272g41Qg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*eK0RbuEJK9WzmA272g41Qg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*eK0RbuEJK9WzmA272g41Qg.png" alt="What’s new in JavaScript ES2019">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
// Considers default depth of 1
numbers.flat();
&gt; [1, 2, 3, 4, [5, 6]]
// With depth of 2
numbers.flat(2);
&gt; [1, 2, 3, 4, 5, 6]
// Executes two flat operations
numbers.flat().flat();
&gt; [1, 2, 3, 4, 5, 6]
// Flattens recursively until the array contains no nested arrays
numbers.flat(Infinity)
&gt; [1, 2, 3, 4, 5, 6]</code></pre><p><code>Array.prototype.flatMap()</code> maps each element using a mapping function and flattens the result into a new array. It’s identical to the map operation followed by a <code>flat</code> of <code>depth</code> <strong>1.</strong></p><p><strong>Syntax: </strong><code>Array.prototype.flatMap(callback)</code> <br><strong>callback: </strong><code>function</code> that produces an element of the new Array.</p><pre><code class="language-js">const numbers = [1, 2, 3];
numbers.map(x =&gt; [x * 2]);
&gt; [[2], [4], [6]]
numbers.flatMap(x =&gt; [x * 2]);
&gt; [2, 4, 6]</code></pre><h4 id="object-fromentries">Object.fromEntries</h4><p><code>Object.fromEntries</code> performs the reverse of <code>Object.entries</code> . It transforms a list of key-value pairs into an object.</p><p><strong>Syntax: </strong><code>Object.fromEntries(iterable)</code> <br><strong>iterable: </strong>An iterable like <code>Array</code> or <code>Map</code> or objects implementing the<strong> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol" rel="noopener">iterable protocol</a></strong></p><pre><code class="language-js">const records = [['name','Mathew'], ['age', 32]];
const obj = Object.fromEntries(records);
&gt; { name: 'Mathew', age: 32}
Object.entries(obj);
&gt; [['name','Mathew'], ['age', 32]];</code></pre><h4 id="string-prototype-trimstart-trimend-">String.prototype.{trimStart, trimEnd}</h4><p><code>trimStart()</code> removes whitespace from the beginning of a string and <code>trimEnd()</code> removes whitespace from the end of a string.</p><pre><code class="language-js">const greeting = ` Hello Javascript! `;
greeting.length;
&gt; 19
greeting = greeting.trimStart();
&gt; 'Hello Javascript! '
greeting.length;
&gt; 18
greeting = 'Hello World!   ';
greeting.length;
&gt; 15
greeting = greeting.trimEnd();
&gt; 'Hello World!'
greeting.length;
&gt; 12</code></pre><h4 id="optional-catch-binding">Optional Catch Binding</h4><p>Prior to the new specification, it was required to have an exception variable bind to a <code>catch</code> clause. ES2019 made it optional.</p><pre><code class="language-js">// Before
try {
...
} catch(error) {
...
}
// After
try {
...
} catch {
...
}</code></pre><p>This feature is useful when you want to completely ignore the error. <strong>Best practice is to consider handling an error.</strong></p><p>There are cases where you know the possible error that could trigger on operations. You can ignore the catch block handling.</p><h4 id="json-ecmascript">JSON ⊂ ECMAScript</h4><p>The line separator (U+2028) and paragraph separator (U+2029) symbols are now allowed in string literals. Previously, these were treated as line terminators and resulted in <code>SyntaxError</code> exceptions.</p><pre><code class="language-js">// Produces invalid string before ES2019
eval('"\u2028"');
// Valid in ES2019
eval('"\u2028"');</code></pre><h4 id="well-formed-json-stringify">Well-formed JSON.stringify</h4><p>Instead of unpaired surrogate code points resulting in single <strong>UTF-16 </strong>code units, ES10 represents them with JSON escape sequences.</p><pre><code class="language-js">JSON.stringify('\uD800');
&gt; '"�"'
JSON.stringify('\uD800');
&gt; '"\\ud800"'</code></pre><h4 id="function-prototype-tostring">Function.prototype.toString</h4><p><code>.toString()</code> now returns exact slices of source code text, including whitespaces and comments.</p><pre><code class="language-js">function /* a comment */ foo () {}
// Previously:
foo.toString();
&gt; 'function foo() {}'
^ no comment
^ no space
// Now:
foo.toString();
&gt; 'function /* comment */ foo () {}'</code></pre><h4 id="symbol-prototype-description">Symbol.prototype.description</h4><p>Read-only property that returns the optional description of a <code>Symbol</code> Object:</p><pre><code class="language-js">Symbol('desc').toString();
&gt; "Symbol(desc)"
Symbol('desc').description;
&gt; "desc"
Symbol('').description;
&gt; ""
Symbol().description;
&gt; undefined</code></pre><h3 id="conclusion">Conclusion</h3><p><strong>TC39 </strong>keeps all the upcoming specifications which are in stage &gt;1 of the proce<a href="https://github.com/tc39/proposals" rel="noopener">ss h</a>ere. As<a href="https://www.microverse.org/" rel="noopener"> a develo</a>per, It's important to keep tabs on what's happening around. There are many more exciting things coming up li<strong>ke static &amp; private methods and fields in classes, Legacy RegE</strong>x, etc. Find out all the new things which are in the proposal sta<a href="https://github.com/tc39/proposals" rel="noopener">ge h</a>ere.</p><p><code><strong>code</strong> = <strong>co</strong>ffee + <strong>de</strong>veloper</code></p><p>Here are a few more interesting topics:</p><ul><li><a href="https://medium.freecodecamp.org/how-did-i-miss-javascript-symbols-c1f1c0e1874a" rel="noopener"><strong>A quick overview of JavaScript Symbols</strong></a></li><li><a href="https://medium.freecodecamp.org/adopt-a-git-branching-strategy-ac729ff4f838" rel="noopener"><strong>How to adopt a git branching strategy</strong></a></li><li><a href="https://medium.freecodecamp.org/an-introduction-to-git-merge-and-rebase-what-they-are-and-how-to-use-them-131b863785f" rel="noopener"><strong>An Introduction to Git Merge and Git Rebase: What They Do and When to Use Them</strong></a></li></ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
