---
card: "https://cdn-media-1.freecodecamp.org/images/1*UPyVG04cujAGglMNgF1bTA.jpeg"
tags: [JavaScript]
description: "Functions are an integral part of programming. They help add "
author: "Milad E. Fahmy"
title: "How to use Memoize to cache JavaScript function results and speed up your code"
created: "2021-08-16T10:23:14+02:00"
modified: "2021-08-16T10:23:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-es6 tag-programming tag-web-development tag-software-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to use Memoize to cache JavaScript function results and speed up your code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*UPyVG04cujAGglMNgF1bTA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*UPyVG04cujAGglMNgF1bTA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*UPyVG04cujAGglMNgF1bTA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*UPyVG04cujAGglMNgF1bTA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*UPyVG04cujAGglMNgF1bTA.jpeg" alt="How to use Memoize to cache JavaScript function results and speed up your code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Functions are an integral part of programming. They help add <strong>modularity</strong> and <strong>reusability</strong> to our code.</p><p>It’s quite common to divide our program into chunks using functions which we can call later to perform some useful action.</p><p>Sometimes, a function can become expensive to call multiple times (say, a function to calculate the <a href="https://en.wikipedia.org/wiki/Factorial" rel="noopener">factorial</a> of a number). But there’s a way we can optimize such functions and make them execute much faster: <strong>caching</strong>.</p><p>For example, let’s say we have a <code>function</code> to return the factorial of a number:</p><pre><code class="language-js">function factorial(n) {
// Calculations: n * (n-1) * (n-2) * ... (2) * (1)
return factorial
}</code></pre><p>Great, now let’s find <code>factorial(50)</code>. The computer will perform calculations and return us the final answer, sweet!</p><p>When that’s done, let’s find <code>factorial(51)</code>. The computer again performs a number of calculations and gets us the result, but you might have noticed that we’re already repeating a number of steps that could have been avoided. An optimized way would be:</p><pre><code>factorial(51) = factorial(50) * 51</code></pre><p>But our <code>function</code> performs the calculations from scratch every time it’s called:</p><pre><code>factorial(51) = 51 * 50 * 49 * ... * 2 * 1</code></pre><p>Wouldn’t it be cool if somehow our <code>factorial</code> function could remember the values from its previous calculations and use them to speed up the execution?</p><p>In comes <strong>memoization</strong>, a way for our <code>function</code> to remember (cache) the results. Now that you’ve a basic understanding of what we’re trying to achieve, here’s a formal definition:</p><blockquote><a href="https://en.wikipedia.org/wiki/Memoization" rel="noopener"><strong>Memoization</strong></a> is an optimization technique used primarily to speed up computer programs by <strong>storing the results of expensive function calls</strong> and returning the cached result when the same inputs occur again</blockquote><p><strong>Memoizing</strong> in simple terms means <strong>memorizing</strong> or storing in memory. A memoized function is usually faster because if the function is called subsequently with the previous value(s), then instead of executing the function, we would be fetching the result from the cache.</p><p>Here’s what a simple memoized function might look like <em>(and here’s a <a href="https://codepen.io/divyanshu013/pen/xdQPvp?editors=0011" rel="noopener">CodePen</a> in case you want to interact with it)</em>:</p><pre><code class="language-js">// a simple function to add something
const add = (n) =&gt; (n + 10);
add(9);
// a simple memoized function to add something
const memoizedAdd = () =&gt; {
let cache = {};
return (n) =&gt; {
if (n in cache) {
console.log('Fetching from cache');
return cache[n];
}
else {
console.log('Calculating result');
let result = n + 10;
cache[n] = result;
return result;
}
}
}
// returned function from memoizedAdd
const newAdd = memoizedAdd();
console.log(newAdd(9)); // calculated
console.log(newAdd(9)); // cached</code></pre><h3 id="memoization-takeaways">Memoization takeaways</h3><p>Some takeaways from the above code are:</p><ul><li><code>memoizedAdd</code> returns a <code>function</code> which is invoked later. This is possible because in JavaScript, functions are first class objects which lets us use them as <a href="http://eloquentjavascript.net/05_higher_order.html#h_xxCc98lOBK" rel="noopener">higher order functions</a> and return another function.</li><li><code>cache</code> can remember its <em>values </em>since the returned function has a <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Closures" rel="noopener">closure</a> over it.</li><li>It’s essential that the memoized function is <a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976" rel="noopener">pure</a>. A pure function will return the same output for a particular input no mater how many times it’s called, which makes the <code>cache</code> work as expected.</li></ul><h3 id="writing-your-own-memoize-function">Writing your own <code>memoize</code> function</h3><p>The previous code works fine but what if we wanted to turn any function into a memoized function?</p><p>Here’s how to write your own memoize function (<a href="https://codepen.io/divyanshu013/pen/zwMPdK?editors=0011#code-area" rel="noopener">codepen</a>):</p><pre><code>// a simple pure function to get a value adding 10
const add = (n) =&gt; (n + 10);
console.log('Simple call', add(3));
// a simple memoize function that takes in a function
// and returns a memoized function
const memoize = (fn) =&gt; {
let cache = {};
return (...args) =&gt; {
let n = args[0];  // just taking one argument here
if (n in cache) {
console.log('Fetching from cache');
return cache[n];
}
else {
console.log('Calculating result');
let result = fn(n);
cache[n] = result;
return result;
}
}
}
// creating a memoized function for the 'add' pure function
const memoizedAdd = memoize(add);
console.log(memoizedAdd(3));  // calculated
console.log(memoizedAdd(3));  // cached
console.log(memoizedAdd(4));  // calculated
console.log(memoizedAdd(4));  // cached</code></pre><p>Now that’s great! This simple <code>memoize</code> function will wrap any simple <code>function</code> into a memoized equivalent. The code works fine for simple functions and it can be easily tweaked to handle any number of <code>arguments</code> as per your needs. Another alternative is to make use of some de-facto libraries such as:</p><ul><li><a href="https://lodash.com/docs/4.17.4#memoize" rel="noopener">Lodash</a>’s <code>_.memoize(func, [resolver])</code></li><li>ES7 <code>@memoize</code> <a href="https://babeljs.io/docs/plugins/transform-decorators/" rel="noopener">decorators</a> from <a href="https://github.com/developit/decko#memoize" rel="noopener">decko</a></li></ul><h3 id="memoizing-recursive-functions">Memoizing recursive functions</h3><p>If you try passing in a recursive function to the <code>memoize</code> function above or <code>_.memoize</code> from Lodash, the results won’t be as expected since the recursive function on its subsequent calls will end up calling itself instead of the memoized function thereby making no use of the <code>cache</code>.</p><p>Just make sure that your recursive function is calling the memoized function. Here’s how you can tweak a textbook <a href="https://en.wikipedia.org/wiki/Factorial" rel="noopener">factorial</a> example (<a href="https://codepen.io/divyanshu013/pen/JNevOm" rel="noopener">codepen</a>):</p><pre><code>// same memoize function from before
const memoize = (fn) =&gt; {
let cache = {};
return (...args) =&gt; {
let n = args[0];
if (n in cache) {
console.log('Fetching from cache', n);
return cache[n];
}
else {
console.log('Calculating result', n);
let result = fn(n);
cache[n] = result;
return result;
}
}
}
const factorial = memoize(
(x) =&gt; {
if (x === 0) {
return 1;
}
else {
return x * factorial(x - 1);
}
}
);
console.log(factorial(5)); // calculated
console.log(factorial(6)); // calculated for 6 and cached for 5</code></pre><p>A few points to note from this code:</p><ul><li>The <code>factorial</code> function is recursively calling a memoized version of itself.</li><li>The memoized function is caching the values of previous factorials which significantly improves calculations since they can be reused <code>factorial(6) = 6 * factorial(5)</code></li></ul><h3 id="is-memoization-same-as-caching">Is memoization same as caching?</h3><p>Yes, kind of. Memoization is actually a specific type of caching. While caching can refer in general to any storing technique (like <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching" rel="noopener">HTTP caching</a>) for future use, memoizing specifically involves <em>caching</em> the return values of a <code>function</code>.</p><h3 id="when-to-memoize-your-functions">When to memoize your functions</h3><p>Although it might look like memoization can be used with all functions, it actually has limited use cases:</p><ul><li>In order to memoize a function, it should be pure so that return values are the same for same inputs every time</li><li>Memoizing is a trade-off between added space and added speed and thus only significant for functions having a limited input range so that cached values can be made use of more frequently</li><li>It might look like you should memoize your API calls however it isn’t necessary because the browser automatically caches them for you. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching" rel="noopener">HTTP caching</a> for more detail</li><li>The best use case I found for memoized functions is <strong>for heavy computational functions </strong>which can significantly improve performance (factorial and fibonacci are not really good real world examples)</li><li>If you’re into React/Redux you can check out <a href="https://github.com/reactjs/reselect#creating-a-memoized-selector" rel="noopener">reselect</a> which uses a <em>memoized selector</em> to ensure that calculations only happen when a change happens in a related part of the state tree.</li></ul><h4 id="further-reading">Further reading</h4><p>The following links can be useful if you would like to know more about some of the topics from this article in more detail:</p><ul><li><a href="http://eloquentjavascript.net/05_higher_order.html#h_xxCc98lOBK" rel="noopener">Higher order functions</a> in JavaScript</li><li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Closures" rel="noopener">Closures</a> in JavaScript</li><li><a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976" rel="noopener">Pure functions</a></li><li>Lodash’s <code>_.memoize</code> <a href="https://lodash.com/docs/4.17.4#memoize" rel="noopener">docs</a> and <a href="https://github.com/lodash/lodash/blob/4.17.4/lodash.js#L10554-L10572" rel="noopener">source code</a></li><li>More memoization examples <a href="https://www.sitepoint.com/implementing-memoization-in-javascript/" rel="noopener">here</a> and <a href="http://inlehmansterms.net/2015/03/01/javascript-memoization/" rel="noopener">here</a></li><li><a href="https://github.com/reactjs/reselect" rel="noopener">reactjs/reselect</a></li></ul><p>I hope this article was useful for you, and you’ve gained a better understanding of memoization in JavaScript :)</p><hr><p>You may follow me on <a href="https://twitter.com/divyanshu013">twitter</a> for latest updates. I've also started posting more recent posts on my personal <a href="https://divyanshu013.dev/">blog</a>.</p>
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
