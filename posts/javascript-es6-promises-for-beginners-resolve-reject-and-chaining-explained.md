---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9a73740569d1a4ca25b0.jpg"
tags: [JavaScript]
description: Promises are one of the ways we can deal with asynchronous op
author: "Milad E. Fahmy"
title: "JavaScript Promise Tutorial: Resolve, Reject, and Chaining in JS and ES6"
created: "2021-08-15T19:29:25+02:00"
modified: "2021-08-15T19:29:25+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-promises ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Promise Tutorial: Resolve, Reject, and Chaining in JS and ES6</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9a73740569d1a4ca25b0.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a73740569d1a4ca25b0.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a73740569d1a4ca25b0.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a73740569d1a4ca25b0.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9a73740569d1a4ca25b0.jpg" alt="JavaScript Promise Tutorial: Resolve, Reject, and Chaining in JS and ES6">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Promises are one of the ways we can deal with asynchronous operations in JavaScript. Many people struggle with understanding how Promises work, so in this post I will try to explain them as simply as I can.</p>
<p>Promises are a broad topic so I can't go into every detail in this article. But you'll find an overall introduction to what Promises are, explanations of terms like resolve, reject, and chaining, and a code example for creating and using Promises.</p>
<p><strong>Prerequisite: </strong>To understand this article better, check out my other post about <a href="/news/javascript-callback-functions-what-are-callbacks-in-js-and-how-to-use-them/">JavaScript Callbacks</a>.</p>
<h2 id="what-is-a-promise">What is a Promise?</h2>
<p>A promise in JavaScript is similar to a promise in real life. When we make a promise in real life, it is a guarantee that we are going to do something in the future. Because promises can only be made for the future.</p>
<p>A promise has 2 possible outcomes: it will either be kept when the time comes, or it won’t. </p>
<p>This is also the same for promises in JavaScript. When we define a promise in JavaScript, it will be resolved when the time comes, or it will get rejected.</p>
<h3 id="promises-in-javascript">Promises in JavaScript</h3>
<p>First of all, a Promise is an object. There are 3 states of the Promise object:</p>
<ul>
<li><strong>Pending:</strong> Initial State, before the Promise succeeds or fails</li>
<li><strong>Resolved:</strong> Completed Promise</li>
<li><strong>Rejected:</strong> Failed Promise</li>
</ul>
<figcaption><strong>Representation of the process of Promises</strong></figcaption>
</figure>
<p>For example, when we request data from the server by using a Promise, it will be in pending mode until we receive our data.</p>
<p>If we achieve to get the information from the server, the Promise will be resolved successfully. But if we don’t get the information, then the Promise will be in the rejected state.</p>
<p>Additionally, if there are multiple requests, then after the first Promise is resolved (or rejected), a new process will start to which we can attach it directly by a method called chaining.</p>
<p>If you prefer, you can also watch the video version below:</p>
<h3 id="what-is-the-difference-between-callbacks-and-promises">What is the difference between Callbacks and Promises?</h3>
<p>The main difference between Callback Functions and Promises is that we attach a callback to a Promise rather than passing it. So we still use callback functions with Promises, but in a different way (chaining). </p>
<p>This is one of the greatest advantages of using Promises, but why?</p>
<h3 id="what-is-chaining">What is Chaining?</h3>
<p>Callback functions have been used alone for asynchronous operations in JavaScript for many years. But in some cases, using Promises can be a better option.</p>
<p>If there are multiple async operations to be done and if we try to use good-old Callbacks for them, we’ll find ourselves quickly inside a situation called <a href="http://callbackhell.com/">Callback hell</a>:</p><pre><code class="language-javascript">firstRequest(function(response) {
secondRequest(response, function(nextResponse) {
thirdRequest(nextResponse, function(finalResponse) {
console.log('Final response: ' + finalResponse);
}, failureCallback);
}, failureCallback);
}, failureCallback);</code></pre>
<p>However if we handle the same operation with Promises, since we can attach Callbacks rather than passing them, this time the same code above looks much cleaner and easier to read:</p><pre><code class="language-javascript">firstRequest()
.then(function(response) {
return secondRequest(response);
}).then(function(nextResponse) {
return thirdRequest(nextResponse);
}).then(function(finalResponse) {
console.log('Final response: ' + finalResponse);
}).catch(failureCallback);</code></pre>
<p>The code just above shows how multiple callbacks can be chained one after another. Chaining is one of the best features of Promises.</p>
<h3 id="creating-and-using-a-promise-step-by-step">Creating and Using A Promise Step by Step</h3>
<p>Firstly, we use a constructor to create a Promise object:</p><pre><code class="language-javascript">const myPromise = new Promise();</code></pre>
<p>It takes two parameters, one for success (resolve) and one for fail (reject):</p><pre><code class="language-javascript">const myPromise = new Promise((resolve, reject) =&gt; {
// condition
});</code></pre>
<p>Finally, there will be a condition. If the condition is met, the Promise will be resolved, otherwise it will be rejected:</p><pre><code class="language-javascript">const myPromise = new Promise((resolve, reject) =&gt; {
let condition;
if(condition is met) {
resolve('Promise is resolved successfully.');
} else {
reject('Promise is rejected');
}
});</code></pre>
<p>So we have created our first Promise. Now let's use it.</p>
<h3 id="then-for-resolved-promises-">then( ) for resolved Promises:</h3>
<p>If you revisit the picture at the beginning of this post, you'll see that there are 2 cases: One for resolved promises and one for rejected. If the Promise gets resolved (success case), then something will happen next (depends on what we do with the successful Promise).</p><pre><code class="language-javascript">myPromise.then();</code></pre>
<p>The then( ) method is called after the Promise is resolved. Then we can decide what to do with the resolved Promise. </p>
<p>For example, let’s log the message to the console that we got from the Promise:</p><pre><code class="language-javascript">myPromise.then((message) =&gt; {
console.log(message);
});</code></pre>
<h3 id="catch-for-rejected-promises-">catch( ) for rejected Promises:</h3>
<p>However, the then( ) method is only for resolved Promises. What if the Promise fails? Then, we need to use the catch( ) method.</p>
<p>Likewise we attach the then( ) method. We can also directly attach the catch( ) method right after then( ):</p><pre><code class="language-javascript">myPromise.then((message) =&gt; {
console.log(message);
}).catch((message) =&gt; {
console.log(message);
});</code></pre>
<p>So if the promise gets rejected, it will jump to the catch( ) method and this time we will see a different message on the console.</p>
<h2 id="wrap-up">Wrap Up</h2>
<p>So this is how we create a Promise in JavaScript and use it for resolved and rejected cases. Promises are a broader topic, and there are many more things to learn about them. So understanding how they work takes time. </p>
<p>This post is just an introduction to Promises, and I hope you found it helpful for getting an idea about what JavaScript Promises are and how to use them. </p>
<p>If you want to learn more about Web Development, feel free to visit my <a href="https://www.youtube.com/channel/UC1EgYPCvKCXFn8HlpoJwY3Q?view_as=subscriber">Youtube Channel</a> for more.</p>
<p>Thank you for reading!</p>
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
