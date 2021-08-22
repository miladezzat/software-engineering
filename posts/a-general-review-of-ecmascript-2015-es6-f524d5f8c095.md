---
card: "https://cdn-media-1.freecodecamp.org/images/1*NSN1a2xVtV1exzcD8fpzhA.jpeg"
tags: [JavaScript]
description: "ES6 is the newer standardization/version of Javascript, which"
author: "Milad E. Fahmy"
title: "A general review of ECMAScript 2015 (ES6)"
created: "2021-08-16T11:38:20+02:00"
modified: "2021-08-16T11:38:20+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-es6 tag-technology tag-programming tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">A general review of ECMAScript 2015 (ES6)</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*NSN1a2xVtV1exzcD8fpzhA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*NSN1a2xVtV1exzcD8fpzhA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*NSN1a2xVtV1exzcD8fpzhA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*NSN1a2xVtV1exzcD8fpzhA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*NSN1a2xVtV1exzcD8fpzhA.jpeg" alt="A general review of ECMAScript 2015 (ES6)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>ES6 is the <strong>newer standardization/version of</strong> <strong>Javascript</strong>, which was released in 2015. It is important to learn ES6, because it has many new features that help developers write and understand JavaScript more easily. Modern Frameworks like Angular and React are being developed with ES6. Its syntax is also different than classic JavaScript.</p><p>So what’s new in ES6? Let’s have a look.</p><h3 id="1-let-const-keywords">1. let &amp; const keywords</h3><p>ES6 brings two new keywords for variable declarations: <code>let</code> and <code>const</code>.</p><p>We used to have only the <code>var</code> keyword in JavaScript to declare variables:</p><pre><code class="language-js">var name = 'Cem';</code></pre><p>In ES6, we use the <code>let</code> keyword instead.</p><h4 id="why-let-instead-of-var-">Why ‘let’ instead of ‘var’ ?</h4><p>Because the usage of <code>var</code><em> </em>causes <strong>scope</strong> problems. For example, let’s define a string with <code>var</code> globally and locally:</p><pre><code class="language-js">var word = 'I am global';
if(true) {
var word = 'I am local';
}
if(true) {
let word = 'I am local';
}
var number = 2;
console.log(number); // No errors here, 2 gets printed</code></pre><p>Let’s try again with <strong>let</strong>:</p><pre><code class="language-js">let number = 1;
let number = 2;
let newWay = `A word`;  // ES6 Way</code></pre><ul><li>Use the interpolation syntax: <strong>${ expression } </strong>to simplify string concatenation and to create dynamic variables</li></ul><p>Let’s define some variables and use the old and new methods to print them:</p><pre><code class="language-js">let name = 'Cem';
let age = 28;
return firstNum + secondNum;
charArray.push(...numberArray);
console.log(counter.length);
}
count(); // 0
count(10); // 1
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
