---
card: "/images/default.jpg"
tags: [Nodejs]
description: In this article, you will learn how to write your own promisi
author: "Milad E. Fahmy"
title: "How to Write Your Own Promisify Function from Scratch"
created: "2021-08-15T19:31:38+02:00"
modified: "2021-08-15T19:31:38+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nodejs tag-promises tag-javascript tag-callbacks tag-interview-questions ">
<header class="post-full-header">
<h1 class="post-full-title">How to Write Your Own Promisify Function from&nbsp;Scratch</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/12/write.jpg 300w,
/news/content/images/size/w600/2019/12/write.jpg 600w,
/news/content/images/size/w1000/2019/12/write.jpg 1000w,
/news/content/images/size/w2000/2019/12/write.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/12/write.jpg" alt="How to Write Your Own Promisify Function from&nbsp;Scratch">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h3 id="introduction">Introduction</h3>
<p>In this article, you will learn how to write your own promisify function from scratch.</p>
<p>Promisification helps in dealing with callback-based APIs while keeping code consistent with promises.</p>
<p>We could just wrap any function with <code>new Promise()</code> and not worry about it at all. But doing that when we have many functions would be redundant.</p>
<p>If you understand promises and callbacks, then learning how to write promisify functions should be easy. So let's get started.</p>
<h3 id="but-have-you-ever-wondered-how-promisify-works">But have you ever wondered how promisify works? </h3>
<blockquote>The important thing is not to stop questioning. Curiosity has its own reason for existence.<br><br>— Albert Einstein</blockquote>
<p>Promises were introduced in the <a href="http://www.ecma-international.org/ecma-262/6.0/" rel="noopener">ECMA-262 Standard, 6th Edition</a> (ES6) that was published in June 2015.</p>
<p>It was quite an improvement over callbacks, as we all know how unreadable "callback hell" can be :)</p>
<p>As a Node.js developer, you should know <a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261">what a promise is</a> and <a href="https://101node.io/blog/how-promises-actually-work-inside-out/" rel="noopener">how it works internally</a>, which will also help you in JS interviews. Feel free to review them quickly before reading on.</p>
<h3 id="why-do-we-need-to-convert-callbacks-to-promises">Why do we need to convert callbacks to promises?</h3>
<ol>
<li>With callbacks, if you want to do something sequentially you will have to specify an <code>err</code> argument in each callback, which is redundant. In promises or async-await, you can just add a <code>.catch</code> method or block which will catch any errors that occurred in the promise chain</li>
<li>With callbacks, you have no control over when it's called, under what context, or how many times it's being called, which can lead to memory leaks.</li>
<li>Using promises, we control these factors (especially error handling) so the code is more readable and maintainable.</li>
</ol>
<h2 id="how-to-make-callback-based-functions-return-a-promise">How to make callback-based functions return a promise</h2>
<p>There are two ways to do it:</p>
<ol>
<li>Wrap the function in another function which returns a promise. It then resolves or rejects based on callback arguments.</li>
<li>Promisification — We create a util/helper function <code>promisify</code> which will transform all error first callback-based APIs.</li>
</ol>
<p>Example: there’s a callback-based API which provides the sum of two numbers. We want to promisify it so it returns a <code>thenable</code> promise.</p><pre><code class="language-js">const getSumAsync = (num1, num2, callback) =&gt; {
if (!num1 || !num2) {
return callback(new Error("Missing arguments"), null);
}
return callback(null, num1 + num2);
}
getSumAsync(1, 1, (err, result) =&gt; {
if (err){
doSomethingWithError(err)
}else {
console.log(result) // 2
}
})</code></pre>
<h3 id="wrap-into-a-promise">Wrap into a promise</h3>
<p>As you can see, <code>getSumPromise</code> delegates all the work to the original function <code>getSumAsync</code>, providing its own callback that translates to promise <code>resolve/reject</code>.</p>
<h3 id="promisify">Promisify</h3>
<p>When we need to promisify many functions we can create a helper function <code>promisify</code>.</p>
<h3 id="what-is-promisification">What is Promisification?</h3>
<p>Promisification means transformation. It’s a conversion of a function that accepts a callback into a function returning a promise.</p>
<p>Using Node.js's <code>util.promisify()</code>:</p><pre><code>const { promisify } = require('util')
const getSumPromise = promisify(getSumAsync) // step 1
getSumPromise(1, 1) // step 2
.then(result =&gt; {
console.log(result)
})
.catch(err =&gt;{
doSomethingWithError(err);
})</code></pre>
<p>So it looks like a magic function which is transforming <code>getSumAsync</code> into <code>getSumPromise</code> which has <code>.then</code> and <code>.catch</code> methods</p>
<h3 id="let-s-write-our-own-promisify-function-">Let’s write our own promisify function:</h3>
<p>If you look at <strong><strong>step 1 </strong></strong>in the above code, the <code>promisify</code> function accepts a function as an argument, so the first thing we have to do write a function that can do the same:</p><pre><code>const getSumPromise = myPromisify(getSumAsync)
const myPromisify = (fn) =&gt; {}</code></pre>
<p>After that, <code>getSumPromise(1, 1)</code> is a function call. This means that our promisify should return another function which can be called with the same arguments of the original function:</p><pre><code>const myPromisify = (fn) =&gt; {
return (...args) =&gt; {
}
}</code></pre>
<p>In the above code you can see we are <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax" rel="noreferrer noopener">spreading</a> arguments because we don’t know how many arguments the original function has. <code>args</code> will be an array containing all the arguments.</p>
<p>When you call <code>getSumPromise(1, 1)</code> you’re actually calling <code>(...args)=&gt; {}</code>. In the implementation above it returns a promise. That’s why you’re able to use <code>getSumPromise(1, 1).then(..).catch(..)</code>.</p>
<p>I hope you’ve gotten the hint that the wrapper function <code>(...args) =&gt; {}</code> should return a promise.</p>
<h3 id="return-a-promise">Return a promise</h3><pre><code>const myPromisify = (fn) =&gt; {
return (...args) =&gt; {
return new Promise((resolve, reject) =&gt; {
})
}
}</code></pre>
<p>Now the tricky part is how to decide when to <code>resolve or reject</code> a promise.<br>Actually, that will be decided by the original <code>getSumAsync</code> function implementation – it will call the original callback function and we just need to define it. Then based on <code>err</code> and <code>result</code> we will <code>reject</code> or &nbsp;<code>resolve</code> the promise.</p><pre><code>const myPromisify = (fn) =&gt; {
return (...args) =&gt; {
return new Promise((resolve, reject) =&gt; {
function customCallback(err, result) {
if (err) {
reject(err)
}else {
resolve(result);
}
}
})
}
}</code></pre>
<p>Our <code>args[]</code> only consists of arguments passed by <code>getSumPromise(1, 1)</code> except the callback function. So you need to add <code>customCallback(err, result)</code> to the <code>args[]</code>which the original function <code>getSumAsync</code> will call accordingly as we are tracking the result in <code>customCallback</code>.</p>
<h3 id="push-customcallback-to-args-">Push customCallback to args[]</h3><pre><code>const myPromisify = (fn) =&gt; {
return (...args) =&gt; {
return new Promise((resolve, reject) =&gt; {
function customCallback(err, result) {
if (err) {
reject(err)
}else {
resolve(result);
}
}
args.push(customCallback)
fn.call(this, ...args)
})
}
}</code></pre>
<p>As you can see, we have added <code>fn.call(this, args)</code>, which will call the original function under the same context with the arguments <code>getSumAsync(1, 1, customCallback)</code>. Then our promisify function should be able to <code>resolve/reject</code> accordingly.</p>
<p>The above implementation will work when the original function expects a callback with two arguments, <code>(err, result)</code>. That’s what we encounter most often. Then our custom callback is in exactly the right format and <code>promisify</code> works great for such a case.</p>
<p><strong><strong>But what if the original </strong></strong><code><strong><strong>fn</strong></strong></code><strong><strong> expects a callback with more arguments</strong> like<strong> </strong></strong><code><strong><strong>callback(err, result1, result2, ...)</strong></strong></code><strong><strong>?</strong></strong></p>
<p>In order to make it compatible with that, we need to modify our <code>myPromisify</code> function which will be an advanced version.</p><pre><code>const myPromisify = (fn) =&gt; {
return (...args) =&gt; {
return new Promise((resolve, reject) =&gt; {
function customCallback(err, ...results) {
if (err) {
return reject(err)
}
return resolve(results.length === 1 ? results[0] : results)
}
args.push(customCallback)
fn.call(this, ...args)
})
}
}</code></pre>
<p>Example:</p><pre><code>const getSumAsync = (num1, num2, callback) =&gt; {
if (!num1 || !num2) {
return callback(new Error("Missing dependencies"), null);
}
const sum = num1 + num2;
const message = `Sum is ${sum}`
return callback(null, sum, message);
}
const getSumPromise = myPromisify(getSumAsync)
getSumPromise(2, 3).then(arrayOfResults) // [6, 'Sum is 6']</code></pre>
<p>That’s all! Thank you for making it this far!</p>
<p>I hope you’re able to grasp the concept. Try to re-read it again. It’s a bit of code to wrap your head around, but not too complex. Let me know if it was helpful ?</p>
<p>Don’t forget to share it with your friends who are starting with Node.js or need to level up their Node.js skills.</p>
<p>References:</p>
<p><a href="https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original">https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original</a></p>
<p><a href="https://github.com/digitaldesignlabs/es6-promisify">https://github.com/digitaldesignlabs/es6-promisify</a></p>
<p><em>You can read other articles like this at <a href="https://101node.io/blog/write-your-own-promisify-function-from-scratch/">101node.io</a>.</em></p>
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
