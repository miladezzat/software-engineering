---
card: "https://cdn-media-1.freecodecamp.org/images/1*i6ZBOiPaCeOTkUWhrb4TRw.jpeg"
tags: [JavaScript]
description: "It’s likely you already know how to write functions in both t"
author: "Milad E. Fahmy"
title: "When to use a function declaration vs. a function expression"
created: "2021-08-16T11:29:55+02:00"
modified: "2021-08-16T11:29:55+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-functional-programming tag-programming tag-web-development tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">When to use a function declaration vs. a function expression</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*i6ZBOiPaCeOTkUWhrb4TRw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*i6ZBOiPaCeOTkUWhrb4TRw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*i6ZBOiPaCeOTkUWhrb4TRw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*i6ZBOiPaCeOTkUWhrb4TRw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*i6ZBOiPaCeOTkUWhrb4TRw.jpeg" alt="When to use a function declaration vs. a function expression">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
// do stuff to an item
}
array.map(mapAction)</code></pre><pre><code>array.map(mapAction)</code></pre><p>The problem here is that <code>mapAction</code> will be available to your entire application — there’s no need for that. If that callback is a function expression, it will not be available outside of the function that uses it:</p><pre><code class="language-js">array.map(item =&gt; { //do stuff to an item })</code></pre><p>or</p><pre><code class="language-js">const mapAction = function(item) {
// do stuff to an item
}
array.map(mapAction)</code></pre><pre><code>array.map(mapAction)</code></pre><p>though <code>mapAction</code> will be available to code <em>below</em> its initialization.</p><h3 id="summary">Summary</h3><p>In short, use function declarations when you want to create a function on the global scope and make it available throughout your code. Use function expressions to limit where the function is available, keep your global scope light, and maintain clean syntax.</p><h3 id="references">References</h3><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function" rel="noopener">Function declaration</a>, MDN docs.</li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function" rel="noopener">Function expression</a>, MDN docs.</li><li><a href="https://developer.mozilla.org/en-US/docs/Glossary/Hoisting" rel="noopener">Hoisting</a>, MDN glossary.</li></ul><h3 id="the-tech-jargon-series">The Tech Jargon Series</h3><p>There are so many phrases that get thrown around at tech meetups and conferences, assuming that everyone is already down with the lingo. I’m often not down with the lingo. It’s common for developers to act astonished that I lack a piece of knowledge.</p><p>The truth is, I often just don’t know the right word for it. As humans, but especially developer humans, we love to dismiss those who don’t “talk the talk”, so this series is about getting a solid understanding of programming concepts that one “should know”.</p><p>This is the second article in the series. The first was <a href="https://medium.freecodecamp.org/higher-order-functions-what-they-are-and-a-react-example-1d2579faf101" rel="noopener">higher-order functions</a>. Look out for more as I go to meetups and conferences and pretend to know what my fellow techies are talking about, but then have to go home and Google it.</p>
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
