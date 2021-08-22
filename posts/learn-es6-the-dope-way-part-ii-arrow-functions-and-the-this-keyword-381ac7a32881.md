---
card: "https://cdn-media-1.freecodecamp.org/images/1*qb02fqNhhC5mRIdzLA83Hg.png"
tags: [JavaScript]
description: "by Mariya Diminsky"
author: "Milad E. Fahmy"
title: "Learn ES6 The Dope Way Part II: Arrow functions and the ‘this’ keyword"
created: "2021-08-16T10:29:30+02:00"
modified: "2021-08-16T10:29:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-es6 tag-education tag-web-development tag-tutorial ">
<header class="post-full-header">
<h1 class="post-full-title">Learn ES6 The Dope Way Part II: Arrow functions and the ‘this’ keyword</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*qb02fqNhhC5mRIdzLA83Hg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*qb02fqNhhC5mRIdzLA83Hg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*qb02fqNhhC5mRIdzLA83Hg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*qb02fqNhhC5mRIdzLA83Hg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*qb02fqNhhC5mRIdzLA83Hg.png" alt="Learn ES6 The Dope Way Part II: Arrow functions and the ‘this’ keyword">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
var bunny = {
name: 'Usagi',
showName: function() {
alert(this.name);
}
};
bunny.showName(); // Usagi</code></pre><p>Correct! It would refer to the object. We’ll get to why later on.</p><p>Now what about if the ‘<em>this</em>’ keyword were inside of method’s function?</p><pre><code class="language-js">// Test it here: https://jsfiddle.net/maasha/z65c1znn/
var bunny = {
name: 'Usagi',
tasks: ['transform', 'eat cake', 'blow kisses'],
showTasks: function() {
this.tasks.forEach(function(task) {
alert(this.name + " wants to " + task);
});
}
};
bunny.showTasks();
// [object Window] wants to transform
// [object Window] wants to eat cake
// [object Window] wants to blow kisses
// please note, in jsfiddle the [object Window] is named 'result' within inner functions of methods.
</code></pre><p>What did you get? Wait, what happened to our bunny…?</p><p>Ah, did you think ‘<em>this</em>’ refers to the method’s inner function?</p><p>Perhaps the object itself?</p><p>You are wise to think so, yet it is not so. Allow me to teach you what the coding elders had once taught me:</p><p>Coding Elder<strong>:</strong> “<em>Ah yes,</em> t<em>he code is strong with this one.</em> <em>It is indeed practical to think that the ‘this’ keyword binds to the function but the truth is, ‘this’ has now fallen out of scope…It now belongs to…”, </em>he pauses as if experiencing inner turmoil<em>, “the window object.</em>”</p><p>That’s right. That’s exactly how it happened.</p><p>Why does ‘<em>this</em>’ bind to the window object? <strong>Because ‘<em>this</em>’, always references the owner of the function it is in, for this case — since it is now out of scope — the window/global object.</strong></p><p>When it is inside of an object’s method — the function’s owner is the object. Thus the ‘<em>this</em>’ keyword is bound to the object. Yet when it is inside of a function, either stand alone or within another method, it will always refer to the window/global object.</p><pre><code class="language-js">// Test it here: https://jsfiddle.net/maasha/g278gjtn/
var standAloneFunc = function(){
alert(this);
}
standAloneFunc(); // [object Window]</code></pre><p>But why…?</p><p>This is known as a JavaScript quirk, meaning something that just happens within JavaScript that isn’t exactly straightforward and it doesn’t work the way you would think. This was also regarded by developers as a poor design choice, which they are now remedying with ES6's arrow functions.</p><p>Before we continue, it’s important to be aware of two clever ways programmers solve the ‘<em>this</em>’ problem within ES5 code, especially since you will continue to run into ES5 for awhile (not every browser has fully migrated to ES6 yet):</p><p><strong>#1</strong> Create a variable outside of the method’s inner function. Now the ‘forEach’ method gains access to ‘<em>this</em>’ and thus the object’s properties and their values. This is because ‘<em>this</em>’ is being stored in a variable while it is still within the scope of the object’s direct method ‘showTasks’.</p><pre><code class="language-js">// Test it here: https://jsfiddle.net/maasha/3mu5r6vg/
var bunny = {
name: 'Usagi',
tasks: ['transform', 'eat cake', 'blow kisses'],
showTasks: function() {
var _this = this;
this.tasks.forEach(function(task) {
alert(_this.name + " wants to " + task);
});
}
};
bunny.showTasks();
// Usagi wants to transform
// Usagi wants to eat cake
// Usagi wants to blow kisses</code></pre><p><strong>#2</strong> Use bind to attach the ‘<em>this</em>’ keyword that refers to the method to the method’s inner function.</p><pre><code class="language-js">// Test it here: https://jsfiddle.net/maasha/u8ybgwd5/
var bunny = {
name: 'Usagi',
tasks: ['transform', 'eat cake', 'blow kisses'],
showTasks: function() {
this.tasks.forEach(function(task) {
alert(this.name + " wants to " + task);
}.bind(this));
}
};
bunny.showTasks();
// Usagi wants to transform
// Usagi wants to eat cake
// Usagi wants to blow kisses</code></pre><p>And now introducing…Arrow functions! Dealing with ‘<em>this</em>’ issue has never been easier and more straightforward! The simple ES6 solution:</p><pre><code class="language-js">// Test it here: https://jsfiddle.net/maasha/che8m4c1/
var bunny = {
name: 'Usagi',
tasks: ['transform', 'eat cake', 'blow kisses'],
showTasks() {
this.tasks.forEach((task) =&gt; {
alert(this.name + " wants to " + task);
});
}
};
bunny.showTasks();
// Usagi wants to transform
// Usagi wants to eat cake
// Usagi wants to blow kisses</code></pre><p>While in ES5 ‘<em>this</em>’ referred to the parent of the function, in ES6, arrow functions use lexical scoping — ‘<em>this</em>’ refers to it’s current surrounding scope and no further. Thus the inner function knew to bind to the inner function only, and not to the object’s method or the object itself.</p><h4 id="how-to-migrate-functions-from-es5-to-es6-">How to migrate functions from ES5 to ES6.</h4><pre><code class="language-js">// Before
let bunny = function(name) {
console.log("Usagi");
}
// After
let bunny = (name) =&gt; console.log("Usagi")
// Step 1: Remove the word ‘function’.
let bunny = (name) {
console.log("Usagi");
}
// Step 2: If your code is less than a line, remove brackets and place on one line.
let bunny = (name) console.log("Usagi");
// Step 3. Add the hash rocket.
let bunny = (name) =&gt; console.log("Usagi");</code></pre><p>You did it! Great job! Simple enough right? Here are a few more examples utilizing the fat — er skinny arrow, to get your eyes accustomed:</p><pre><code class="language-js">// #1 ES6: if passing one argument you don't need to include parenthesis around parameter.
var kitty = name =&gt; name;
// same as ES5:
var kitty = function(name) {
return name;
};
// #2 ES6: no parameters example.
var add = () =&gt; 3 + 2;
// same as ES5:
var add = function() {
return 3 + 2;
};
// #3 ES6: if function consists of more than one line or is an object, include braces.
var objLiteral = age =&gt; ({ name: "Usagi", age: age });
// same as ES5:
var objLiteral = function(age) {
return {
name: "Usagi",
age: age
};
};
// #4 ES6: promises and callbacks.
asyncfn1().then(() =&gt; asyncfn2()).then(() =&gt; asyncfn3()).then(() =&gt; done());
// same as ES5:
asyncfn1().then(function() {
asyncfn2();
}).then(function() {
asyncfn3();
}).done(function() {
done();
});</code></pre><h4 id="important-quirks-to-be-aware-of-when-using-arrow-functions">Important quirks to be aware of when using Arrow functions</h4><p>If you use the ‘new’ keyword with =&gt; functions it will throw an error. Arrow functions can’t be used as a constructor — normal functions support the ‘new’ via the property prototype and internal method [[Construct]]. Arrow functions don’t use neither, thus the new (() =&gt; {}) throws an error.</p><p>Further quirks to consider:</p><pre><code class="language-js">// Line breaks are not allowed and will throw a syntax error
let func1 = (x, y)
=&gt; {
return x + y;
}; // SyntaxError
// But line breaks inside of a parameter definition is ok
let func6 = (
x,
y
) =&gt; {
return x + y;
}; // Works!
// If an expression is the body of an arrow function, you don’t need braces:
asyncFunc.then(x =&gt; console.log(x));
// However, statements have to be put in braces:
asyncFunc.catch(x =&gt; { throw x });
// Arrow functions are always anonymous which means you can’t just declare them as in ES5:
function squirrelLife() {
// play with squirrels, burrow for food, etc.
}
// Must be inside of a variable or object property to work properly:
let squirrelLife = () =&gt; {
// play with squirrels, burrow for food, etc.
// another super squirrel action.
}</code></pre><p>Congrats! You’ve made it through <strong>Learn ES6 The Dope Way</strong> Part II and now you have a basis for arrow function knowledge, the lexical benefits it gives to ‘<em>this</em>’ and also snagged yourself some JavaScript quirk skills! :)</p><p>Keep your wisdom updated by liking and following as more <strong>Learn ES6 The Dope Way</strong> is coming soon to Medium!</p><p><strong><a href="/news/learn-es6-the-dope-way-i-const-let-var-ae828580472b/">Part I: const, let &amp; var</a></strong></p><p><strong><a href="/news/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881/">Part II: (Arrow) =&gt; functions and ‘this’ keyword</a></strong></p><p><strong><a href="/news/learn-es6-the-dope-way-part-iii-template-literals-spread-operators-generators-592765337294/">Part III: Template Literals, Spread Operators &amp; Generators!</a></strong></p><p><strong><a href="/news/learn-es6-the-dope-way-part-iv-default-parameters-destructuring-assignment-a-new-es6-method-44393190b8c9/">Part IV: Default Parameters, Destructuring Assignment, and a new ES6 method!</a></strong></p><p><strong><a href="/news/learn-es6-the-dope-way-part-v-classes-browser-compatibility-transpiling-es6-code-47f62267661/">Part V: Classes, Transpiling ES6 Code &amp; More Resources!</a></strong></p><p>You can also find me on github ❤ <a href="https://github.com/Mashadim" rel="noopener">https://github.com/Mashadim</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
