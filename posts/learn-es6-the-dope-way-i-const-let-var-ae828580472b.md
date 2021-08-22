---
card: "https://cdn-media-1.freecodecamp.org/images/1*RuxaPPPrL6K09eF4pFhISw.jpeg"
tags: [ES6]
description: "by Mariya Diminsky"
author: "Milad E. Fahmy"
title: "Learn ES6 The Dope Way Part I: const, let & var"
created: "2021-08-16T10:29:40+02:00"
modified: "2021-08-16T10:29:40+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-es6 tag-javascript tag-programming tag-web-development tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Learn ES6 The Dope Way Part I: const, let &amp; var</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*RuxaPPPrL6K09eF4pFhISw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*RuxaPPPrL6K09eF4pFhISw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*RuxaPPPrL6K09eF4pFhISw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*RuxaPPPrL6K09eF4pFhISw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*RuxaPPPrL6K09eF4pFhISw.jpeg" alt="Learn ES6 The Dope Way Part I: const, let &amp; var">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
const express = require(‘express’);
const app = express();
// sometimes uppercase.
const DONT_CHANGE_ME_MAN = “I ain’t changing for no one, man.”
// change attempt #1
const DONT_CHANGE_ME_MAN = “I told I ain’t changing for no one.”
// change attempt #2
var DONT_CHANGE_ME_MAN = “Still not changing, bro.”
// change attempt #3
DONT_CHANGE_ME_MAN = “Haha, nice try, still not happening.”
// same error for all 3 attempts, const value stays the same:
Uncaught TypeError: Identifier ‘const DONT_CHANGE_ME_MAN’ has already been declared.
// DONT_CHANGE_ME_MAN still results in “I ain’t changing for no one, man.”</code></pre><p>Does that make sense?</p><blockquote>Think of const, like the constant sea — <em>never-ending, never-changing…</em><br><br>…except in Safari.</blockquote><h4 id="let">let</h4><p>Students and experienced programmers coming from a Ruby or Python background will love <em>let,</em> as it enforces block scoping!</p><p>As you migrate over to ES6 country, you may notice yourself adjusting to a new <em>let</em> metamorphosis taking over your coding style, and find yourself less likely to using <em>var</em> anymore. With <em>let</em> it’s so much more clear now where your values are coming from without worrying about them being hoisted!</p><p>Benefits:</p><ul><li>Block-Scoping, your variable’s values are exactly as they should be in that current scope and they are not hoisted as with <em>var</em>.</li><li>Super useful if you don’t want your values to be overwritten, like in a for loop.</li></ul><p>Beware:</p><ul><li>You may not always want to use <em>let</em>. For example in situations where variables aren’t as easily block scoped, <em>var</em> may be more convenient.</li></ul><p>Examples:</p><pre><code class="language-js">// When using var what do we get?
var bunny = "eat carrot";
if(bunny) {
var bunny = "eat twig";
console.log(bunny) //  "eat twig"
}
console.log(bunny)// "eat twig"
// When using let what do we get?
let bunny = "eat carrot";
if(bunny) {
let bunny = "eat twig";
console.log(bunny) // "eat twig"
}
console.log(bunny)// "eat carrot"</code></pre><p>Do you see the difference? It’s all about scope. With <em>var</em>, it has access to it’s parent/outer scope and thus can change the value inside the if statement. Unlike <em>let</em> which is block-scoped and can only be altered within the current scope it’s in.</p><p><em>let</em> is super straight-forward. It’s like a person who speaks straight to your face and tells you exactly what they need right then and there while <em>var</em> does this as well but may occasionally reply with unexpected answers — due to hoisting and access to outer scope variables. Depending on the situation either one may be in your favor.</p><p>Another great example on the benefits of <em>let</em>:</p><p>Say you want to create a game board of 30 divs and each one has their own value. If you were to do this with <em>var</em>, the <em>i</em> index would be overwritten for every iteration — every single div would have the value of 30! Yikes!</p><p>On the other hand, with <em>let</em>, every div has its own value, as its own div scope is maintained for each iteration! See the difference:</p><pre><code class="language-js">// with var. See example live: https://jsfiddle.net/maasha/gsewf5av/
for(var i= 0; i&lt;30; i++){
var div = document.createElement('div');
div.onclick = function() {
alert("you clicked on a box " + i);
};
document.getElementsByTagName('section')[0].appendChild(div);
}
// with let. See example live: https://jsfiddle.net/maasha/xwrq8d5j/
for(let i=0; i&lt;30; i++) {
var div=document.createElement(‘div’);
div.onclick = function() {
alert("you clicked on a box " + i);
};
document.getElementsByTagName('section')[0].appendChild(div);
}</code></pre><p>Congrats! You’ve made it through <strong>Learn ES6 The Dope Way</strong> Part I and now you know the main differences between const, let and var! Woohoo! You rockstar, you :)</p><p>Keep your knowledge updated by liking and following as more <strong>Learn ES6 The Dope Way</strong> is coming soon to Medium!</p><p><strong><a href="/news/learn-es6-the-dope-way-i-const-let-var-ae828580472b/">Part I: const, let &amp; var</a></strong></p><p><strong><a href="/news/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881/">Part II: (Arrow) =&gt; functions and ‘this’ keyword</a></strong></p><p><strong><a href="/news/learn-es6-the-dope-way-part-iii-template-literals-spread-operators-generators-592765337294/">Part III: Template Literals, Spread Operators &amp; Generators!</a></strong></p><p><strong><a href="/news/learn-es6-the-dope-way-part-iv-default-parameters-destructuring-assignment-a-new-es6-method-44393190b8c9/">Part IV: Default Parameters, Destructuring Assignment, and a new ES6 method!</a></strong></p><p><strong><a href="/news/learn-es6-the-dope-way-part-v-classes-browser-compatibility-transpiling-es6-code-47f62267661/">Part V: Classes, Transpiling ES6 Code &amp; More Resources!</a></strong></p><p>You can also find me on github ❤ <a href="https://github.com/Mashadim" rel="noopener">https://github.com/Mashadim</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
