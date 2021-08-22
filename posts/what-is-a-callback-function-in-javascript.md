---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9eb0740569d1a4ca3e8d.jpg"
tags: [JavaScript]
description: This article gives a brief introduction to the concept and us
author: "Milad E. Fahmy"
title: "What is a Callback Function in JavaScript?"
created: "2021-08-15T19:31:49+02:00"
modified: "2021-08-15T19:31:49+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-callbacks ">
<header class="post-full-header">
<h1 class="post-full-title">What is a Callback Function in JavaScript?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9eb0740569d1a4ca3e8d.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9eb0740569d1a4ca3e8d.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9eb0740569d1a4ca3e8d.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9eb0740569d1a4ca3e8d.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9eb0740569d1a4ca3e8d.jpg" alt="What is a Callback Function in JavaScript?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>This article gives a brief introduction to the concept and usage of callback functions in the JavaScript programming language.</p>
<h2 id="functions-are-objects"><strong>Functions are Objects</strong></h2>
<p>The first thing we need to know is that in Javascript, functions are first-class objects. As such, we can work with them in the same way we work with other objects, like assigning them to variables and passing them as arguments into other functions. This is important, because it’s the latter technique that allows us to extend functionality in our applications.</p>
<h2 id="callback-functions"><strong>Callback Functions</strong></h2>
<p>A <strong><strong>callback function</strong></strong> is a function that is passed <em>as an argument</em> to another function, to be “called back” at a later time. A function that accepts other functions as arguments is called a <strong><strong>higher-order function</strong></strong>, which contains the logic for <em>when</em> the callback function gets executed. It’s the combination of these two that allow us to extend our functionality.</p>
<p>To illustrate callbacks, let’s start with a simple example:</p><pre><code class="language-javascript">function createQuote(quote, callback){
var myQuote = "Like I always say, " + quote;
callback(myQuote); // 2
}
function logQuote(quote){
console.log(quote);
}
createQuote("eat your vegetables!", logQuote); // 1
// Result in console:
// Like I always say, eat your vegetables!</code></pre>
<p>In the above example, <code>createQuote</code> is the higher-order function, which accepts two arguments, the second one being the callback. The <code>logQuote</code> function is being used to pass in as our callback function. When we execute the <code>createQuote</code> function <em>(1)</em>, notice that we are <em>not appending</em> parentheses to <code>logQuote</code> when we pass it in as an argument. This is because we do not want to execute our callback function right away, we simply want to pass the function definition along to the higher-order function so that it can be executed later.</p>
<p>Also, we need to ensure that if the callback function we pass in expects arguments, that we supply those arguments when executing the callback <em>(2)</em>. In the above example, that would be the <code>callback(myQuote);</code> statement, since we know that <code>logQuote</code> expects a quote to be passed in.</p>
<p>Additionally, we can pass in anonymous functions as callbacks. The below call to <code>createQuote</code> would have the same result as the above example:</p><pre><code class="language-javascript">createQuote("eat your vegetables!", function(quote){
console.log(quote);
});</code></pre>
<p>Incidentally, you don’t <em>have</em> to use the word “callback” as the name of your argument, Javascript just needs to know that it’s the correct argument name. Based on the above example, the below function will behave in exactly the same manner.</p><pre><code class="language-javascript">function createQuote(quote, functionToCall) {
var myQuote = "Like I always say, " + quote;
functionToCall(myQuote);
}</code></pre>
<h2 id="why-use-callback-functions"><strong>Why use Callback functions?</strong></h2>
<p>Most of the time we are creating programs and applications that operate in a <strong><strong>synchronous</strong></strong> manner. In other words, some of our operations are started only after the preceding ones have completed. Often when we request data from other sources, such as an external API, we don’t always know <em>when</em> our data will be served back. In these instances we want to wait for the response, but we don’t always want our entire application grinding to a halt while our data is being fetched. These situations are where callback functions come in handy.</p>
<p>Let’s take a look at an example that simulates a request to a server:</p><pre><code class="language-javascript">function serverRequest(query, callback){
setTimeout(function(){
var response = query + "full!";
callback(response);
},5000);
}
function getResults(results){
console.log("Response from the server: " + results);
}
serverRequest("The glass is half ", getResults);
// Result in console after 5 second delay:
// Response from the server: The glass is half full!</code></pre>
<p>In the above example, we make a mock request to a server. After 5 seconds elapse the response is modified and then our callback function <code>getResults</code> gets executed. To see this in action, you can copy/paste the above code into your browser’s developer tool and execute it.</p>
<p>Also, if you are already familiar with <code>setTimeout</code>, then you’ve been using callback functions all along. The anonymous function argument passed into the above example’s <code>setTimeout</code> function call is also a callback! So the example’s original callback is actually executed by another callback. Be careful not to nest too many callbacks if you can help it, as this can lead to something called “callback hell”! As the name implies, it isn’t a joy to deal with.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
