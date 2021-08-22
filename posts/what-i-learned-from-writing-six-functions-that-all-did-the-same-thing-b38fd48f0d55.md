---
card: "https://cdn-media-1.freecodecamp.org/images/1*BM1TcQvHNMc09jc4GxG-7w.jpeg"
tags: [JavaScript]
description: "A couple weeks ago, a camper started an unofficial algorithm "
author: "Milad E. Fahmy"
title: "What I learned from writing six functions that all did the same thing"
created: "2021-08-16T14:45:38+02:00"
modified: "2021-08-16T14:45:38+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-tech tag-life-lessons tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">What I learned from writing six functions that all did the same thing</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*BM1TcQvHNMc09jc4GxG-7w.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*BM1TcQvHNMc09jc4GxG-7w.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*BM1TcQvHNMc09jc4GxG-7w.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*BM1TcQvHNMc09jc4GxG-7w.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*BM1TcQvHNMc09jc4GxG-7w.jpeg" alt="What I learned from writing six functions that all did the same thing">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>A couple weeks ago, a camper started an unofficial algorithm competition on <a href="http://forum.freecodecamp.com/t/javascript-algorithm-challenge-october-9-through-16/44096?u=jacksonbates" rel="noopener">Free Code Camp’s Forum</a>.</p><p>The challenge seemed simple enough: return the sum of all multiples of 3 or 5 that are below a number N, where N is an input parameter to the function.</p><p>But instead of just finding any solution, <a href="undefined" rel="noopener">P1xt</a>’s competition required you to focus on efficiency. It encouraged you to write your own tests, and to benchmark the performance of your solutions.</p><p>This is a breakdown of every function I tried and tested, including my tests and benchmark scripts. At the end, I’ll show the function that blew all of my own out of the water, and taught me a valuable lesson.</p><h3 id="function-1-array-push-increment">Function #1: Array, push, increment</h3><pre><code class="language-javascript">function arrayPushAndIncrement(n) {
var array = [];
var result = 0;
for (var i = 1; i &lt; n; i ++) {
if (i % 3 == 0 || i % 5 == 0) {
array.push(i);
}
}
for (var num of array) {
result += num;
}
return result;
}
module.exports = arrayPushAndIncrement; // this is necessary for testing</code></pre><p>For problems like this, my brain defaults to: build an array, then do something to that array.</p><p>This function creates an array and pushes any numbers that meet our condition (divisible by 3 or 5) into it. It then loops through that array, adding all the values together.</p><h3 id="setting-up-testing">Setting up testing</h3><p>Here are the automated tests for this function, which use Mocha and Chai, running on NodeJS.</p><p>If you want more information about installing Mocha and Chai, I’ve written <a href="http://forum.freecodecamp.com/t/testing-your-own-code-using-mocha-and-chai-simple-example/44149?u=jacksonbates" rel="noopener">a detailed guide</a> on Free Code Camp’s forum.</p><p>I wrote a simple testing script using the values <a href="undefined" rel="noopener">P1xt</a> provided. Notice that in the script below, the function is included as a module:</p><pre><code class="language-js">// testMult.js
var should = require( 'chai' ).should();
var arrayPushAndIncrement = require( './arrayPushAndIncrement' );
describe('arrayPushAndIncrement', function() {
it('should return 23 when passed 10', function() {
arrayPushAndIncrement(10).should.equal(23);
})
it('should return 78 when passed 20', function() {
arrayPushAndIncrement(20).should.equal(78);
})
it('should return 2318 when passed 100', function() {
arrayPushAndIncrement(100).should.equal(2318);
})
it('should return 23331668 when passed 10000', function() {
arrayPushAndIncrement(10000).should.equal(23331668);
})
it('should return 486804150 when passed 45678', function() {
arrayPushAndIncrement(45678).should.equal(486804150);
})
var array = [];
for (var i = 1; i &lt; n; i ++) {
if (i % 3 == 0 || i % 5 == 0) {
array.push(i);
}
}
return array.reduce(function(prev, current) {
return prev + current;
});
}
module.exports = arrayPushAndReduce;</code></pre><p>So this function uses a similar approach to my previous one, but instead of using a <code>for</code> loop to construct the final sum, it uses the fancier <code>reduce</code> method.</p><h3 id="setting-up-performance-benchmark-testing">Setting up performance benchmark testing</h3><p>Now that we have two functions, we can compare their efficiency. Again, thanks to <a href="undefined" rel="noopener">P1xt</a> for providing this script in a previous forum thread.</p><pre><code class="language-javascript">// performance.js
var Benchmark = require( 'benchmark' );
var suite = new Benchmark.Suite;
var arrayPushAndIncrement = require( './arrayPushAndIncrement' );
var arrayPushAndReduce = require( './arrayPushAndReduce' );
// add tests
suite.add( 'arrayPushAndIncrement', function() {
arrayPushAndIncrement(45678)
})
.add( 'arrayPushAndReduce', function() {
arrayPushAndReduce(45678)
})
// add listeners
.on( 'cycle', function( event ) {
console.log( String( event.target ));
})
.on( 'complete', function() {
console.log( `Fastest is ${this.filter( 'fastest' ).map( 'name' )}`);
})
// run async
.run({ 'async': true });</code></pre><p>If you run this with <code>node performance.js</code> you’ll see the following terminal output:</p><pre><code class="language-bash">arrayPushAndIncrement x 270 ops/sec ±1.18% (81 runs sampled)
arrayPushAndReduce x 1,524 ops/sec ±0.79% (89 runs sampled)
Fastest is arrayPushAndReduce</code></pre><p>So using the <code>reduce</code> method gave us a function that was <strong>5 times faster</strong>!</p><p>If that isn’t encouraging enough to continue with more functions and testing, I don’t know what is!</p><h3 id="function-3-while-array-reduce">Function#3: While, Array, Reduce</h3><p>Now since I always reach for the trusty <code>for</code> loop, I figured I would test a <code>while</code> loop alternative:</p><pre><code class="language-javascript">function whileLoopArrayReduce(n) {
var array = [];
while (n &gt;= 1) {
n--;
if (n%3==0||n%5==0) {
array.push(n);
}
}
return array.reduce(function(prev, current) {
return prev + current;
});
}
module.exports = whileLoopArrayReduce;</code></pre><p>And the result? A tiny bit slower:</p><pre><code>whileLoopArrayReduce x 1,504 ops/sec ±0.65% (88 runs sampled)</code></pre><h3 id="function-4-while-sum-no-arrays">Function#4: While, sum, no arrays</h3><p>So, finding that the type of loop didn’t make a huge difference, I wondered what would happen if I used a method that avoided arrays altogether:</p><pre><code class="language-js">function whileSum(n) {
var sum = 0;
while (n &gt;= 1) {
n--;
if (n%3==0||n%5==0) {
sum += n;
}
}
return sum;
}
module.exports = whileSum;</code></pre><p>As soon as I started thinking down this track, it made me realize how wrong I was for <em>always</em> reaching for arrays first…</p><pre><code>whileSum x 7,311 ops/sec ±1.26% (91 runs sampled)</code></pre><p>Another massive improvement: nearly <strong>5 times faster</strong> again, and <strong>27 times faster</strong> than my original function!</p><h3 id="function-5-for-sum"><strong>Function#5: For, sum</strong></h3><p>Of course, we already know that a for loop should be a little faster:</p><pre><code class="language-js">function forSum(n) {
n = n-1;
var sum = 0;
for (n; n &gt;= 1 ;n--) {
(n%3==0||n%5==0) ? sum += n : null;
}
return sum;
}</code></pre><p>This uses the ternary operator to do the condition checking, but my testing showed that a non-ternary version of this is the same, performance-wise.</p><pre><code>forSum x 8,256 ops/sec ±0.24% (91 runs sampled)</code></pre><p>So, a little faster again.</p><p>My final function ended up being <strong>28 times faster</strong> than my original.</p><p>I felt like a champion.</p><p>I was over the moon.</p><p>I rested on my laurels.</p><h3 id="enter-maths">Enter Maths</h3><p>The week passed and the final solutions from everyone were posted, tested, and collated. The function that performed the fastest avoided loops altogether and used an algebraic formula to crunch the numbers:</p><pre><code class="language-javascript">function multSilgarth(N) {
var threes = Math.floor(--N / 3);
var fives = Math.floor(N / 5);
var fifteen = Math.floor(N / 15);
return (3 * threes * (threes + 1) + 5 * fives * (fives + 1) - 15 * fifteen * (fifteen + 1)) / 2;
}
module.exports = multSilgarth;</code></pre><p>Wait for it…</p><pre><code>arrayPushAndIncrement x 279 ops/sec ±0.80% (83 runs sampled)
forSum x 8,256 ops/sec ±0.24% (91 runs sampled)
maths x 79,998,859 ops/sec ±0.81% (88 runs sampled)
Fastest is maths</code></pre><h3 id="fastest-is-maths">Fastest is maths</h3><p>So the winning function was roughly <strong>9,690 times faster</strong> than my best effort, and <strong>275,858 times faster</strong> than my initial effort.</p><p>If you need me, I’ll be over at Khan Academy studying math.</p><p>Thanks to everyone that participated and shared their solutions in the spirit of helping other campers learn new methods.</p><p>If you’re curious, here is <a href="undefined" rel="noopener">P1xt</a>’s write up of the competition, and all of the testing and benchmark data:</p><p><a href="https://github.com/P1xt/algo-oct-17" rel="noopener"><strong>P1xt/algo-oct-17</strong></a><br><a href="https://github.com/P1xt/algo-oct-17" rel="noopener"><em>algo-oct-17 - JavaScript Algorithm Challenge - October 9 through 16</em>github.com</a></p>
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
