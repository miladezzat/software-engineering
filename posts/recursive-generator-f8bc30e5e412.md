---
card: "https://cdn-media-1.freecodecamp.org/images/1*pfeC96_K9bAt1CSAfKC-IA.jpeg"
tags: [JavaScript]
description: A short while back I wrote a post touching upon combinatorics
author: "Milad E. Fahmy"
title: "Recursive generators and how to not chew up all your memory using them"
created: "2021-08-15T19:53:12+02:00"
modified: "2021-08-15T19:53:12+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-es6 tag-algorithms tag-programming tag-computer-science ">
<header class="post-full-header">
<h1 class="post-full-title">Recursive generators and how to not chew up all your memory using them</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*pfeC96_K9bAt1CSAfKC-IA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*pfeC96_K9bAt1CSAfKC-IA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*pfeC96_K9bAt1CSAfKC-IA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*pfeC96_K9bAt1CSAfKC-IA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*pfeC96_K9bAt1CSAfKC-IA.jpeg" alt="Recursive generators and how to not chew up all your memory using them">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>A short while back <a href="https://medium.com/@jefflowery/combinatorics-handle-with-care-ed808b48e5dd#.2nv74yf0c" rel="noopener">I wrote a pos</a>t touching upon combinatorics. Part of the code of that article used a <a href="https://gist.github.com/JeffML/0cee0d09d32347ea95e0f9cb4f851cd8" rel="noopener">Combinator </a>object, which generated combinations of choices and stored them in an array.</p>
<p>The problem with combinatorial operations is that the number of combinations <a href="https://en.wikipedia.org/wiki/Combinatorial_explosion" rel="noopener">can grow explosively fast</a> with every additional choice added — greater than exponentially fast, in some cases.</p>
<p>If I have three items and allow 0, 1, 2, or 3 of those to be chosen, I get 8 unique choices if I <strong>disregard order, allow no repeats and include the null set</strong>. Double that to six items and you wind up with 64 choices (8*8). Double that again (12 items), there are 4096 choices (64*64). In this case, with the restrictions noted above, the number of combinations is 2 to the power of n choices, so it grows merely(!) exponentially.</p>
<p>For a large number of items, storing every combination in an array could lead to memory exhaustion. Instead of having the Combinator return an array only after all combinations have been generated, how about if it returned each combo one-by-one, as needed? Since the Combinator is <em>generating </em>combinations, can it be converted to a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*" rel="noopener">generator</a>?</p>
<h3 id="original-combinator-js">Original Combinator.js</h3>
<p>In the original code, every combination created by calling <strong>combine()</strong> is stored in a <strong>combinations </strong>array:</p><pre><code class="language-js">var Combinator = function (opts) {
var combinations = [];
function combine(current, remainder) {
if (remainder.length === 0) {
if (current.length &gt;= (opts.min || 0) &amp;&amp;
current.length &lt;= (opts.max || current.length))
combinations.push(current);
} else {
combine(current.concat(remainder[0]), remainder.slice(1, remainder.length));
combine(current, remainder.slice(1, remainder.length));
}
return this;
}
return {
combinations: combinations,
combine: combine
}
}
module.exports = Combinator;</code></pre>
<p>The algorithm is embellished a bit with the addition of min/max options — these limit the number of combinations that contain at least <strong>min</strong>, and at most <strong>max</strong>, elements. I can be used like so:</p><pre><code class="language-js">var menu = {
threeItems: {
min: 0,
max: 3,
values: [1, 2, 3]
}
}
var threeCombos = new Combinator({
min: menu.threeItems.min,
max: menu.threeItems.max
})
.combine([], menu.threeItems.values)
.combinations;</code></pre>
<p>The <strong>menu.threeItems.values</strong> property has (surprise!) three values. The <strong>min </strong>and <strong>max </strong>properties determine the set of combinations to be generated. In this case, we ask for sets from 0 length (the null set) to full length (the entire values set). Remember that we’re not interested in order, nor do we allow duplicates. Let see it in action:</p><pre><code class="language-js">console.log('threeCombos.length =', threeCombos.length, threeCombos);
-- output --
threeCombos.length = 8 [ [ 1, 2, 3 ], [ 1, 2 ], [ 1, 3 ], [ 1 ], [ 2, 3 ], [ 2 ], [ 3 ], [] ]</code></pre>
<p>Now, instead of using an array to store all combinations, let’s convert this bit of JavaScript to use the new ES6 generator functionality. A generator is a stateful function that yields values one-by-one, in an iterative fashion.</p>
<h3 id="naive-attempt">Naive attempt</h3>
<p>A generator function is declared using <strong>function* </strong>instead of <strong>function. </strong>The <strong>yield </strong>operator is called within the generator function to return single values back to the caller. The generator remembers the state of the previous call, so subsequent <strong>yield</strong>s<strong> </strong>will return the next logical value. The caller uses the <strong>next()</strong> method to get each subsequent value from the generator function. No arrays required!</p>
<p>I can be pretty lazy at times, so I took the tl;dr approach to the JavaScript <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*" rel="noopener">documentation</a> on generators and just winged it. The first attempt was:</p><pre><code class="language-js">var CombinatorGenerator = function (opts) {
function* combine(current, remainder) {
if (remainder.length === 0) {
if (current.length &gt;= (opts.min || 0) &amp;&amp;
current.length &lt;= (opts.max || current.length)) {
yield(current);
}
} else {
combine(current.concat(remainder[0]), remainder.slice(1, remainder.length))
combine(current, remainder.slice(1, remainder.length))
}
}
return {
combine: combine
}
}</code></pre>
<p>This makes sense, right? Instead of pushing a set of choices to an array, I just yield a value. In the client code, I keep calling next() until the generator tells me it’s done.</p><pre><code class="language-js">var menu = require('./menu');
var Combinator = require('./Combinator-generator-naive');
function run() {
var threeCombos = new Combinator({
min: menu.threeItems.min,
max: menu.threeItems.max
})
.combine([], menu.threeItems.values);
for (;;) {
var it = threeCombos.next();
if (it.done) {
console.log("done!")
break;
}
console.log("choice", it.value);
}
}
run();</code></pre>
<p>Alas, my hopes were dashed. The output is:</p><pre><code>PS C:\Users\Jeff\workspace\Generator&gt; node .\test-generated.js
done!</code></pre>
<p>Alright, so obviously the new Combinator is returning before the first yield does, so we’re “done!” before we’re actually done.</p>
<h3 id="intuitive-attempt">Intuitive attempt</h3>
<p>Still loathe to read documentation, I next try to intuit the bug fix. So what happens if I just yield from the internal <strong>combine </strong>calls — logical, no? Instead of:</p><pre><code class="language-js">} else {
combine(current.concat(remainder[0]), remainder.slice(1, remainder.length))
combine(current, remainder.slice(1, remainder.length))
}</code></pre>
<p>I try yielding from the recursive calls:</p><pre><code class="language-js">} else {
yield combine(current.concat(remainder[0]), remainder.slice(1, remainder.length)).next()
yield combine(current, remainder.slice(1, remainder.length)).next()
}</code></pre>
<p>Truly, this will work. So let’s run it:</p><pre><code class="language-bash">PS C:\Users\Jeff\workspace\Generator&gt; node .\generated.js
choice { value: { value: { value: [Object], done: false }, done: false },
done: false }
choice { value: { value: { value: [Object], done: false }, done: false },
done: false }
done!</code></pre>
<p>Hmmm…that’s no good — what gets returned are the recursive generators’ state, but not the actual values from the <strong>yield </strong>operations.</p>
<h3 id="thoughtful-attempt">Thoughtful attempt</h3>
<p>Okay, time to buckle down. A little googling on “recursive generator” turns up a reference to Python’s <strong>yield from. </strong>That syntax delegates the yield calls to another generator. Is there an equivalent in JavaScript?</p>
<p>Yes! — and it’s the <strong>yield* </strong>syntax. This is actually in the document link about <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*" rel="noopener">generators</a>; had I read it, I possibly would have figured this out sooner (laziness, like crime, doesn’t [always] pay). The correct syntax is:</p><pre><code class="language-js">} else {
yield* combine(current.concat(remainder[0]), remainder.slice(1, remainder.length))
yield* combine(current, remainder.slice(1, remainder.length))
}</code></pre>
<p>And now, when I call the <strong>combine </strong>method, I see:</p><pre><code>node .\generated.js
choice [ 1, 2, 3 ]
choice [ 1, 2 ]
choice [ 1, 3 ]
choice [ 1 ]
choice [ 2, 3 ]
choice [ 2 ]
choice [ 3 ]
choice []
done!</code></pre>
<p>Good! I’m getting back all the combinations, one-by-one. Success!</p>
<p>Full code used in this post can be found <a href="https://github.com/JeffML/Generator" rel="noopener">here</a>. Happy generating!</p>
<p><strong><em>Update 2/26/2017</em></strong></p>
<p>After reading <a href="https://medium.com/javascript-scene/7-surprising-things-i-learned-writing-a-fibonacci-generator-4886a5c87710#.qy4p75tvg" rel="noopener">this article</a> by the indefatigable Eric Elliott, I began to think I had traded one type of resource exhaustion (memory) for another (stack). However, I’ve run the Combinator with an input array of length 30 and it ran to completion: that’s 2³⁰ combinations generated (over a billion). Note that the algorithm</p>
<ol>
<li>is not using tail recursion (or maybe it’s ‘split-tail’ recursion?); and</li>
<li><strong>yield *</strong>, according to Eric’s article, should not be optimized as a tail recursive call in any case</li>
</ol>
<p>Yet, it works. Proof can be found by running generated30.js in the git repository for this post.</p>
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
