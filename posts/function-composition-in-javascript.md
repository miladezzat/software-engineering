---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9c7a740569d1a4ca3270.jpg"
tags: [JavaScript]
description: Function composition is the pointwise application of one func
author: "Milad E. Fahmy"
title: "Function Composition in JavaScript"
created: "2021-08-15T19:30:37+02:00"
modified: "2021-08-15T19:30:37+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">Function Composition in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c7a740569d1a4ca3270.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c7a740569d1a4ca3270.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c7a740569d1a4ca3270.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c7a740569d1a4ca3270.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c7a740569d1a4ca3270.jpg" alt="Function Composition in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>Function composition is the pointwise application of one function to the result of another. Developers do it in a manual manner every day when the nest functions:</p><pre><code class="language-javascript">compose = (fn1, fn2) =&gt; value =&gt; fn2(fn1(value))</code></pre>
<p>But this is hard to read. There is a better way using function composition. Instead of reading them from inside out:</p><pre><code class="language-javascript">add2AndSquare = (n) =&gt; square(add2(n))</code></pre>
<p>We can use a higher order function to chain them in an ordered way.</p><pre><code class="language-javascript">add2AndSquare = compose( add2, square)</code></pre>
<p>A simple implementation of compose would be:</p><pre><code class="language-javascript">compose = (f1, f2) =&gt; value =&gt; f2( f1(value) );</code></pre>
<p>To get even more flexibility we can use the reduceRight function:</p><pre><code class="language-javascript">compose = (...fns) =&gt; (initialVal) =&gt; fns.reduceRight((val, fn) =&gt; fn(val), initialVal);</code></pre>
<p>Reading compose from left to right allows a clear chaining of higher order functions. Real world examples are adding authentications, logging and context properties. It’s a technique that enables reusability on the highest level. Here are some examples how to use it:</p><pre><code class="language-javascript">// example
const add2        = (n) =&gt; n + 2;
const times2      = (n) =&gt; n * 2;
const times2add2  = compose(add2, times2);
const add6        = compose(add2, add2, add2);
times2add2(2);  // 6
add2tiems2(2);  // 8
add6(2);        // 8</code></pre>
<p>You might think this is advanced functional programming and it’s not relevant for frontend programming. But it’s also useful in Single Page Applications. For example you can add behavior to a React component by using higher order components:</p><pre><code class="language-javascript">function logProps(InputComponent) {
InputComponent.prototype.componentWillReceiveProps = function(nextProps) {
console.log('Current props: ', this.props);
console.log('Next props: ', nextProps);
};
return InputComponent;
}
// EnhancedComponent will log whenever props are received
const EnhancedComponent = logProps(InputComponent);</code></pre>
<p>In conclusion function composition enables reusability of functionality at a very high level. If the functions are structured well it enables developers to created new behavior based upon existing behavior.</p>
<p>It also increases readability of implementations. Instead of nesting functions you can clearly chain functions and create higher order functions with meaningful names.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
