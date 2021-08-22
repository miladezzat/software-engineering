---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9aa4740569d1a4ca26d3.jpg"
tags: [JavaScript]
description: Imagine the following scenario – you have a simple input and
author: "Milad E. Fahmy"
title: "Can't Pass an Input Value Into a JavaScript Variable"
created: "2021-08-15T19:29:35+02:00"
modified: "2021-08-15T19:29:35+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-variables tag-error tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">Can't Pass an Input Value Into a JavaScript Variable</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9aa4740569d1a4ca26d3.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9aa4740569d1a4ca26d3.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9aa4740569d1a4ca26d3.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9aa4740569d1a4ca26d3.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9aa4740569d1a4ca26d3.jpg" alt="Can't Pass an Input Value Into a JavaScript Variable">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>Imagine the following scenario – you have a simple input and a button. When a user types into the input and presses the button, the text from the input should be logged to the console.</p>
<p>Here's what you have so far:</p><pre><code class="language-html">&lt;input id="search" placeholder="Search for..."&gt;&lt;/input&gt;
&lt;button value='send' id="submit" onclick="myFunction()"&gt;Search&lt;/button&gt;
&lt;div id="alpha"&gt;&lt;/div&gt;</code></pre><pre><code class="language-js">function myFunction() {
const test = document.getElementById("search").value;
}
console.log(test);</code></pre>
<p>But when you load the page you see <code>Uncaught ReferenceError: test is not defined</code> in the console.</p>
<p>What's going on here, and why can't you access the <code>test</code> variable outside of <code>myFunction</code>?</p>
<h2 id="scope-in-javascript">Scope in JavaScript</h2>
<p>The reason you can't access <code>test</code> outside of <code>myFunction</code> is due to <a href="https://developer.mozilla.org/en-US/docs/Glossary/Scope">scope</a>. Another way to describe scope is context. </p>
<p>Because <code>test</code> was defined or created within <code>myFunction</code>, it's only available in the context or scope of <code>myFunction</code> itself. Trying to log <code>test</code> outside of <code>myFunction</code> will cause an error.</p>
<p>Another way to put it is that the <code>test</code> variable is function scoped, and can only be logged from within <code>myFunction</code>.</p>
<p>An easy way to fix this is to log <code>test</code> from within <code>myFunction</code>. Then whenever the button is pressed, the current value of the input will be logged to the console:</p><pre><code class="language-js">function myFunction() {
const test = document.getElementById("search").value;
console.log(test);
}</code></pre>
<p>You can read more about scope in JavaScript here: <a href="/news/an-introduction-to-scope-in-javascript-cbd957022652/">An introduction to scope in JavaScript</a></p>
<h2 id="how-to-access-a-variable-outside-a-function">How to access a variable outside a function</h2>
<p>While it's not possible to directly access a function scoped variable from outside the function it was defined in, there are some ways to use the value of <code>test</code> throughout the rest of the program.</p>
<h3 id="store-the-value-of-test-as-a-global-variable">Store the value of <code>test</code> as a global variable</h3>
<p>The global scope is the very top level of your program, outside of all other functions. Variables in the global scope are available throughout the rest of your program.</p>
<p>So an easy way to make <code>test</code> available everywhere is to save it as a global variable. For example:</p><pre><code class="language-js">let test = '';
function myFunction() {
test = document.getElementById("search").value;
}
function myOtherFunction() {
console.log(test);
}</code></pre>
<p>Then you'd be able to access the value of <code>test</code> when <code>myOtherFunction</code> is called. But this is assuming that the input already has some text in it, and that <code>myFunction</code>, which set's the value of <code>test</code>, is called before <code>myOtherFunction</code>.</p>
<p>That's where a solid understanding of asynchronous JavaScript comes in handy. Read more about it in this article: <a href="/news/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40/">The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await</a></p>
<h3 id="return-test-from-the-function">Return test from the function</h3>
<p>Another way you can access <code>test</code> from outside the original function it's defined in is to simply return it from that function. Then, when you call it from another function, you'll have access to <code>test</code>. </p>
<p>Then you can create another button to append the value of <code>test</code> to the page and attach <code>myOtherFunction</code> to that button.</p>
<p>For example:</p><pre><code class="language-html">&lt;input id="search" placeholder="Search for..."&gt;&lt;/input&gt;
&lt;button value='send' id="submit" onclick="myFunction()"&gt;Search&lt;/button&gt;
&lt;button value='append' id="append" onclick="myOtherFunction()"&gt;Append&lt;/button&gt;
&lt;div id="alpha"&gt;&lt;/div&gt;</code></pre><pre><code class="language-js">function myFunction() {
const test = document.getElementById("search").value;
return test;
}
function myOtherFunction() {
const myDiv = document.getElementById("alpha");
myDiv.innerText = myFunction();
}</code></pre>
<p>And here it is in action:</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
