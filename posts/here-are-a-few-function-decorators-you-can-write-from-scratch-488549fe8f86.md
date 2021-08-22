---
card: "https://cdn-media-1.freecodecamp.org/images/1*Qw0e4LC2Fri7dFkBY0N1cA.jpeg"
tags: [JavaScript]
description: "Discover Functional JavaScript was named one of the best new "
author: "Milad E. Fahmy"
title: "Here are a few function decorators you can write from scratch"
created: "2021-08-16T11:45:26+02:00"
modified: "2021-08-16T11:45:26+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-programming tag-technology tag-functional-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Here are a few function decorators you can write from scratch</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Qw0e4LC2Fri7dFkBY0N1cA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*Qw0e4LC2Fri7dFkBY0N1cA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*Qw0e4LC2Fri7dFkBY0N1cA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Qw0e4LC2Fri7dFkBY0N1cA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Qw0e4LC2Fri7dFkBY0N1cA.jpeg" alt="Here are a few function decorators you can write from scratch">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE" rel="nofollow noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener nofollow noopener nofollow noopener"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the <a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781" rel="noopener nofollow nofollow noopener"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><blockquote>A <strong>function decorator</strong> is a higher-order function that takes one function as an argument and returns another function, and the returned function is a variation of the argument function — <a href="https://leanpub.com/javascript-allonge/read#decorators" rel="noopener">Javascript Allongé</a></blockquote><p>Let’s write some common function decorators found in libraries like <a href="http://underscorejs.org/#functions" rel="noopener">underscore.js</a>, <a href="https://lodash.com/docs/4.17.5" rel="noopener">lodash.js</a> or <a href="http://ramdajs.com/docs/" rel="noopener">ramda.js</a>.</p><h3 id="once-">once()</h3><ul><li><a href="https://jsfiddle.net/cristi_salcescu/zpLeLp0v/" rel="noopener">once(fn)</a>: creates a version of the function that executes only once. It’s useful for an initialization function, where we want to make sure it runs only once, no matter how many times it is called from different places.</li></ul><pre><code>function once(fn){
let returnValue;
let canRun = true;
return function runOnce(){
if(canRun) {
returnValue = fn.apply(this, arguments);
canRun = false;
}
return returnValue;
}
}
var processonce = once(process);
processonce(); //process
processonce(); //</code></pre><p><code>once()</code> is a function that returns another function. The returned function <code>runOnce()</code> is a <a href="https://medium.freecodecamp.org/why-you-should-give-the-closure-function-another-chance-31253e44cfa0" rel="noopener">closure</a>. It’s also important to note how the original function was called — by passing in the current value of <code>this</code> and all the <code>arguments</code> : <code>fn.apply(this, arguments)</code> .</p><blockquote>If you want to understand closures better, take a look at <a href="https://medium.freecodecamp.org/why-you-should-give-the-closure-function-another-chance-31253e44cfa0" rel="noopener">Why you should give the Closure function another chance</a>.</blockquote><h3 id="after-">after()</h3><ul><li><a href="https://jsfiddle.net/cristi_salcescu/4evuoxe6/" rel="noopener">after(count, fn)</a>: creates a version of the function that executes only after a number of calls. It’s useful, for example, when we want to make sure the function runs only after all the asynchronous tasks have finished.</li></ul><pre><code>function after(count, fn){
let runCount = 0;
return function runAfter(){
runCount = runCount + 1;
if (runCount &gt;= count) {
return fn.apply(this, arguments);
}
}
}
function logResult() { console.log("calls have finished"); }
let logResultAfter2Calls = after(2, logResult);
setTimeout(function logFirstCall() {
console.log("1st call has finished");
logResultAfter2Calls();
}, 3000);
setTimeout(function logSecondCall() {
console.log("2nd call has finished");
logResultAfter2Calls();
}, 4000);</code></pre><p>Note how I’m using <code>after()</code> to build a new function <code>logResultAfter2Calls()</code> that will execute the original code of <code>logResult()</code> only after the second call.</p><h3 id="throttle-">throttle()</h3><ul><li><a href="https://jsfiddle.net/cristi_salcescu/5tdv0eq6/" rel="noopener">throttle(fn, wait)</a>: creates a version of the function that, when invoked repeatedly, will call the original function once per every <code>wait</code> milliseconds. It’s useful for limiting events that occur faster.</li></ul><pre><code>function throttle(fn, interval) {
let lastTime;
return function throttled() {
let timeSinceLastExecution = Date.now() - lastTime;
if(!lastTime || (timeSinceLastExecution &gt;= interval)) {
fn.apply(this, arguments);
lastTime = Date.now();
}
};
}
let throttledProcess = throttle(process, 1000);
$(window).mousemove(throttledProcess);</code></pre><p>In this example, moving the mouse will generate a lot of <code>mousemove</code> events, but the call of the original function <code>process()</code> will just happen once per second.</p><p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE&amp;source=post_page---------------------------"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the<strong><strong> </strong></strong><a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781&amp;source=post_page---------------------------"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><p><strong><strong>For more on applying functional programming techniques in React take a look at</strong></strong> <a href="https://read.amazon.com/kp/embed?asin=B07S1NLFTS&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_Pko5CbA30383Y" rel="noopener nofollow"><strong><strong>Functional React</strong></strong></a><strong><strong>.</strong></strong></p><p>Learn <strong><strong>functional React</strong></strong>, in a project-based way, with <a href="https://read.amazon.com/kp/embed?asin=B0846NRJYR&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_o.hlEbDD02JB2" rel="noopener nofollow"><strong><strong>Functional Architecture with React and Redux</strong></strong></a><strong><strong>.</strong></strong></p>
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
