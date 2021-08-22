---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9eb6740569d1a4ca3ea5.jpg"
tags: [JavaScript]
description: A falsy value is something which evaluates to FALSE, for inst
author: "Milad E. Fahmy"
title: "Falsy Values in JavaScript"
created: "2021-08-15T19:31:51+02:00"
modified: "2021-08-15T19:31:51+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">Falsy Values in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9eb6740569d1a4ca3ea5.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9eb6740569d1a4ca3ea5.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9eb6740569d1a4ca3ea5.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9eb6740569d1a4ca3ea5.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9eb6740569d1a4ca3ea5.jpg" alt="Falsy Values in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<h2 id="description"><strong>Description</strong></h2>
<p>A falsy value is something which evaluates to FALSE, for instance when checking a variable. There are only six falsey values in JavaScript: <code>undefined</code>, <code>null</code>, <code>NaN</code>, <code>0</code>, <code>""</code> (empty string), and <code>false</code> of course.</p>
<h2 id="checking-for-falsy-values-on-variables"><strong>Checking for falsy values on variables</strong></h2>
<p>It is possible to check for a falsy value in a variable with a simple conditional:</p><pre><code class="language-javascript">if (!variable) {
// When the variable has a falsy value the condition is true.
}</code></pre>
<h2 id="general-examples"><strong>General Examples</strong></h2><pre><code class="language-javascript">var string = ""; // &lt;-- falsy
var filledString = "some string in here"; // &lt;-- truthy
var zero = 0; // &lt;-- falsy
var numberGreaterThanZero // &lt;-- truthy
var emptyArray = []; // &lt;-- truthy, we'll explore more about this next
var emptyObject = {}; // &lt;-- truthy</code></pre>
<h2 id="fun-with-arrays"><strong>Fun With Arrays</strong></h2><pre><code class="language-javascript">if ([] == false) // &lt;-- truthy, will run code in if-block
if ([]) // &lt;-- truthy, will also run code in if-block
if ([] == true) // &lt;-- falsy, will NOT run code in if-block
if (![]) // &lt;-- falsy, will also NOT run code in if-block</code></pre>
<h2 id="caveat"><strong>Caveat</strong></h2>
<p>Be aware of the data type when evaluating a value in a Boolean context. If the data type of the value is meant to be a <em>number</em>, the truthy/falsy evalution can result in an unexpected outcome:</p><pre><code class="language-javascript">const match = { teamA: 0, teamB: 1 }
if (match.teamA)
// The following won't run due to the falsy evaluation
console.log('Team A: ' + match.teamA);
}</code></pre>
<p>An alternative to the use case above is to evaluate the value using <code>typeof</code>:</p><pre><code class="language-javascript">const match = { teamA: 0, teamB: 1 }
if (typeof match.teamA === 'number')
console.log('Team A: ' + match.teamA);
}</code></pre>
<h2 id="more-information"><strong>More Information</strong></h2>
<ul>
<li><a><strong><strong>truthy</strong></strong></a> | <a href="http://james.padolsey.com/javascript/truthy-falsey/" rel="nofollow">Blog Post - Truthy &amp; Falsey</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy">Falsy | Glossary | MDN</a></li>
<li><a href="https://www.sitepoint.com/javascript-truthy-falsy/">Truthy and Falsy: When All is Not Equal in JavaScript</a></li>
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
