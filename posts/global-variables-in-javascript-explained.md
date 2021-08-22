---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9d77740569d1a4ca37e7.jpg"
tags: [JavaScript]
description: Global variables are declared outside of a function for acces
author: "Milad E. Fahmy"
title: "Global Variables in JavaScript Explained"
created: "2021-08-15T19:31:07+02:00"
modified: "2021-08-15T19:31:07+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">Global Variables in JavaScript Explained</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d77740569d1a4ca37e7.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d77740569d1a4ca37e7.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d77740569d1a4ca37e7.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d77740569d1a4ca37e7.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d77740569d1a4ca37e7.jpg" alt="Global Variables in JavaScript Explained">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>Global variables are declared outside of a function for accessibility throughout the program, while local variables are stored within a function using <code>var</code> for use only within that function’s <a href="https://developer.mozilla.org/en-US/docs/Glossary/Scope">scope</a>. If you declare a variable without using <code>var</code>, even if it’s inside a function, it will still be seen as global:</p><pre><code class="language-javascript">var x = 5; // global
function someThing(y) {
var z = x + y;
console.log(z);
}
function someThing(y) {
x = 5; // still global!
var z = x + y;
console.log(z);
}
function someThing(y) {
var x = 5; // local
var z = x + y;
console.log(z);
}</code></pre>
<p>A global variable is also an object of the current scope, such as the browser window:</p><pre><code class="language-javascript">var dog = “Fluffy”;
console.log(dog); // Fluffy;
var dog = “Fluffy”;
console.log(window.dog); // Fluffy</code></pre>
<p>It’s a best practice to minimize global variables. Since the variable can be accessed anywhere in the program, they can cause strange behavior.</p>
<p>References:</p>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var">var -Javascript|MDN</a></li>
<li><a href="https://github.com/getify/You-Dont-Know-JS/tree/master/scope%20%26%20closures">You Don’t Know JavaScript: Scopes &amp; Closures</a></li>
</ul>
<h2 id="what-s-the-difference-between-a-global-var-and-a-window-variable-in-javascript"><strong><strong><a href="https://stackoverflow.com/questions/6349232/whats-the-difference-between-a-global-var-and-a-window-variable-in-javascript">What’s the difference between a global var and a window.variable in javascript?</a></strong></strong></h2>
<p>The scope of JavaScript variables are either global or local. Global variables are declared OUTSIDE the function and its value is accessible/changeable throughout the program.</p>
<p>You should ALWAYS use <strong><strong>var</strong></strong> to declare your variables (to make locally) else it will install GLOBALLY</p>
<p>Take care with the global variables because they are risky. Most of the time you should use closures to declare your variables. Example:</p><pre><code class="language-javascript">(function(){
var myVar = true;
})();</code></pre>
<h2 id="more-information-"><strong>More Information:</strong></h2>
<ul>
<li><a href="/news/the-visual-guide-to-javascript-variable-definitions-scope-2717ad9f0169/">Visual guide to JavaScript variable definitions and scope</a></li>
<li><a href="/news/a-basic-introduction-to-javascript-variable-definitions-and-hoisting-93aa38e742eb/">Intro to JavaScript variable definitions and hoisting</a></li>
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
