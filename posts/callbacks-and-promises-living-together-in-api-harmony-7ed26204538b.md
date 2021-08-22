---
card: "https://cdn-media-1.freecodecamp.org/images/1*Xc0Degaa5ZyZGmnVAI5_eQ.png"
tags: [JavaScript]
description: "In this article, we ll learn how to update a callback-based A"
author: "Milad E. Fahmy"
title: "Callbacks and Promises Living Together in API Harmony"
created: "2021-08-15T23:49:17+02:00"
modified: "2021-08-15T23:49:17+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-api tag-coding tag-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Callbacks and Promises Living Together in API Harmony</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Xc0Degaa5ZyZGmnVAI5_eQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*Xc0Degaa5ZyZGmnVAI5_eQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*Xc0Degaa5ZyZGmnVAI5_eQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Xc0Degaa5ZyZGmnVAI5_eQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Xc0Degaa5ZyZGmnVAI5_eQ.png" alt="Callbacks and Promises Living Together in API Harmony">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this article, we'll learn how to update a callback-based API to support Promises as well.</p><p>First, what is an API, or application programming interface? It's sometimes referred to as a <em>module</em>. It is a collection of methods and variables developers can utilize in their own application.</p><p>Watch the accompanying Real Coding episode <a href="https://youtu.be/6DphXwRbPlo" rel="noopener">here</a>.</p><h3 id="callback-functions">Callback Functions</h3><p>Many JavaScript API’s and modules provide a final parameter in their methods for something called a callback method. Most of the time you’ll see this defined as <code>done</code>, <code>next</code>, <code>callback</code>, or <code>cb</code> (abbreviation for callback). Callback functions are incredibly useful because they enable other developers get more out of your function such as error handling and asynchronous requests. </p><p>For example, an API method may produce a variety of errors and these errors, if not properly handled, can bring down an entire application. An API utilizing callback methods <strong>should </strong>be returning all <code>Error</code> objects as the first parameter in the callback. It is assumed that the first parameter in a callback function is always an error instance.</p><p>The function below is a simple example. Its purpose is to double the parameter <code>x</code> and return it via the specified <code>callback</code> function. <code>error</code> starts as <code>null</code>. If any of the conditional checks fail, an <code>Error</code> instance is assigned to <code>error</code> . Then if <code>error</code> exists (it is not null or undefined), then we do not double <code>x</code> and we set the variable <code>double</code> as <code>null</code>; otherwise, <code>x</code> is doubled and assigned to the <code>double</code> variable. After everything is done the function <code>doublePositiveOnly</code> will return the callback method with the first parameter referencing the <code>error</code> variable and the second parameter referencing the <code>double</code> variable.</p><pre><code class="language-js">function doublePositiveOnly(x, callback) {
let error
if ( !x )
error = new Error('x must be defined')
if ( typeof x !== 'number' )
error = new Error('x must be a number')
if ( x &lt; 0 )
error = new Error('x must be positive')
const double = error ? null : x * 2
return callback(error, double)
}</code></pre><p>How would you use this function?</p><pre><code class="language-js">doublePositiveOnly(16, function (err, result) {
if (err) console.error(err.message)
console.log(result)
})</code></pre><h3 id="promise-functions">Promise Functions</h3><p>Promise functions in production are easy to recognize as they utilize <code>.then </code>and <code>.catch</code> methods to return information back to the user. Nearly all callback functions can be replaced by promises, so lets rebuild our <code>doublePositiveOnly</code> method using promises.</p><pre><code class="language-js">function doublePositiveOnly( x ) {
return new Promise(function (resolve, reject) {
let error
if ( !x )
error = new Error('x must be defined')
if ( typeof x !== 'number' )
error = new Error('x must be a number')
if ( x &lt; 0 )
error = new Error('x must be positive')
error ? reject(error) : resolve(x * 2)
})
}</code></pre><p>The above function serves the exact same purpose of the callback implementation. However, this version no longer takes a callback method as a parameter. Instead it either <code>rejects</code> an error or <code>resolves</code> the result. You can use this method like so:</p><pre><code class="language-js">doublePositiveOnly(16).then(function (result) {
// do cool stuff with the result
console.log(result)
}).catch(function (err) {
// oh no an error! Handle it however you please
console.error(err.message)
})</code></pre><p>The readability of a Promise function is much clearer than a callback function as you can easily handle the result as well as any potential errors. There is a lot more to Promises functions I did not cover here, and I encourage you to <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises" rel="noopener">learn</a> as much as you can about them.</p><h3 id="callbacks-and-promises-together">Callbacks and Promises Together</h3><p>We have callbacks and we have promises. They are interchangeable and both satisfy similar needs. Now consider the scenario where we have an API that only supports callback methods. This API is downloaded 1000x times and is now running in production on countless applications. But now the maintainer wants to support Promises as well. Can they do this while also maintaining callback support? <strong>YES!</strong></p><p>Lets look at the callback implementation of <code>doublePositiveOnly</code> once again, but now also with promise support:</p><pre><code class="language-js">function doublePositiveOnly(x, callback) {
const func = this.doublePositiveOnly
if ( callback === undefined ) {
return new Promise(function (resolve, reject) {
func(x, function (err, result) {
err ? reject(err) : resolve(result)
})
})
}
let error
if ( !x )
error = new Error('x must be defined')
if ( typeof x !== 'number' )
error = new Error('x must be a number')
if ( x &lt; 0 )
error = new Error('x must be positive')
const double = error ? null : x * 2
return callback(error, double)
}</code></pre><p>And just like that the <code>doublePositiveOnly</code> method now supports promises as well. It works because first it stores the reference to the function in the <code>func</code> variable. Next, it checks if a callback was passed to the function. If not it returns a promise that passes down the <code>x</code> parameter to another <code>doublePositiveOnly</code> call, and it includes a callback function. This callback function either <code>rejects</code> or <code>resolves</code> the promise just like the promise-only implementation did.</p><p>What is great about this solution is you can use just about anywhere and you don’t have to edit any parts of the original function! You can see it in action in a module I recently contributed to called <a href="https://github.com/fastify/fastify-jwt/" rel="noopener">fastify-jwt</a>. Both the <code><a href="https://github.com/fastify/fastify-jwt/blob/master/jwt.js#L108-L114" rel="noopener">requestVerify</a></code><a href="https://github.com/fastify/fastify-jwt/blob/master/jwt.js#L108-L114" rel="noopener"> </a>and <code><a href="https://github.com/fastify/fastify-jwt/blob/master/jwt.js#L79-L85" rel="noopener">replySign</a></code> methods support both callbacks and promises.</p><p>If you have any questions please reach out!</p><p>You can follow me on <a href="https://github.com/Ethan-Arrowood" rel="noopener">Github</a> and <a href="https://twitter.com/ArrowoodTech" rel="noopener">Twitter</a> or check out my <a href="https://ethanarrowood.com" rel="noopener">website</a>.</p><p>Keep up the good work.</p><p>~Ethan Arrowood</p>
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
