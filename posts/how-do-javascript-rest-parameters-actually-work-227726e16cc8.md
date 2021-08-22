---
card: "https://cdn-media-1.freecodecamp.org/images/1*10krG9dLp-2JAyOo1TNVPQ.jpeg"
tags: [JavaScript]
description: "My last article covered spread syntax and Object.assign in de"
author: "Milad E. Fahmy"
title: "How JavaScript rest parameters actually work"
created: "2021-08-16T11:48:01+02:00"
modified: "2021-08-16T11:48:01+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-es6 tag-programming tag-technology tag-startup ">
<header class="post-full-header">
<h1 class="post-full-title">How JavaScript rest parameters actually work</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*10krG9dLp-2JAyOo1TNVPQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*10krG9dLp-2JAyOo1TNVPQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*10krG9dLp-2JAyOo1TNVPQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*10krG9dLp-2JAyOo1TNVPQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*10krG9dLp-2JAyOo1TNVPQ.jpeg" alt="How JavaScript rest parameters actually work">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Let’s begin at the trusty <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters">MDN Docs</a>:</p>
<blockquote>
<p>The <strong>rest parameter</strong> syntax allows us to represent an indefinite number of arguments as an array.</p>
</blockquote>
<p>That last part, “as an array”, is interesting, because before ES6 arrow functions, we used the <code>arguments</code> <strong>object</strong>. It was array-<em>like</em>, but not actually an array.</p>
<p>Example:</p>
<pre><code class="language-js">function returnArgs() {
return arguments;
}
</code></pre>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*Xuhn5NvMtl3Mev2FqL-oug.png" alt=""></p>
<p>We see <code>arguments</code> has indices, so it’s loop-able:</p>
<pre><code class="language-js">function loopThruArgs() {
let i = 0;
for (i; i &lt; arguments.length; i++) {
console.log(arguments[i]);
}
}
</code></pre>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*jU_wgPi5ILJrOQ7F0J8sUA.png" alt=""></p>
<p>But it’s not an array.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*KNeT3_DX6pQE3TWkjzJiMg.png" alt=""></p>
<p>Let’s contrast that with a function using <strong>rest</strong> parameters:</p>
<pre><code class="language-js">es6Params = (...params) =&gt; {
console.log('Array?', Array.isArray(params));
return params;
};
</code></pre>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*cPEtXM-jUWC3oDsCHU2keg.png" alt=""></p>
<p>It’s <em>just an array</em>, meaning we can use any of the <code>Array</code> methods on it!</p>
<p>Let’s write a function that <strong>doubles</strong> and <strong>sums</strong> every parameter you give it.</p>
<pre><code class="language-js">double = (x) =&gt; x * 2;
sum = (x, y) =&gt; x + y;
doubleAndSum = (...numbers) =&gt; numbers.map(double).reduce(sum, 0);
</code></pre>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*Hdk9NP-ZGteTef7v5RPBEg.png" alt=""></p>
<p>And you can name as many parameters as you want in your function before using <strong>rest</strong>.</p>
<pre><code class="language-js">someFunction = (a, b, c, ...others) =&gt; {
console.log(a, b, c, others);
};
</code></pre>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*NZVvRUAyRffRtcckUIPdLA.png" alt=""></p>
<p>But it has to be the last one specified, since it captures the <em>rest</em> of your arguments. ?</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*xjYSLt00rbmHdUtBYWUPMg.png" alt=""></p>
<p>I think we know what’s happening under the hood, but let’s be thorough. Check out <a href="https://babeljs.io/repl">babeljs.io/repl</a>, where you can write ES6+ code and have it transpiled into ES5 in real-time.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*qYBa9yW0izOhXaTfP8IBKw.png" alt=""></p>
<p>That’s a neat little function, let’s expand it and add comments.</p>
<pre><code class="language-js">someFunction = function someFunction() {
var _len = arguments.length;
// create an array same length
// as the arguments object
var args = Array(_len);
var i = 0;
// iterate through arguments
for (i; i &lt; _len; i++) {
// assign them to
// the new array
args[i] = arguments[i];
}
// and return it
return args;
};
</code></pre>
<p>Since Babel wrote an old-school function for us, it can access the <code>arguments</code> object! <code>arguments</code> has indices and a <code>.length</code> property, which is all we need to create a perfect clone of it.</p>
<p>This is why we can use Array methods like <code>map</code>, <code>filter</code>, <code>reduce</code> on <strong>rest</strong> parameters, because it creates an Array clone of <code>arguments</code>.</p>
<p>Have fun <em>rest</em>-ing!</p>
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
