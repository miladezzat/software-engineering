---
card: "/images/default.jpg"
tags: [JavaScript]
description: If you’re familiar with programming, you already know what fu
author: "Milad E. Fahmy"
title: "JavaScript Callback Functions – What are Callbacks in JS and How to Use Them"
created: "2021-08-15T19:30:25+02:00"
modified: "2021-08-15T19:30:25+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-callbacks ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Callback Functions – What are Callbacks in JS and How to Use&nbsp;Them</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/03/caspar-camille-rubin-7SDoly3FV_0-unsplash.jpg 300w,
/news/content/images/size/w600/2020/03/caspar-camille-rubin-7SDoly3FV_0-unsplash.jpg 600w,
/news/content/images/size/w1000/2020/03/caspar-camille-rubin-7SDoly3FV_0-unsplash.jpg 1000w,
/news/content/images/size/w2000/2020/03/caspar-camille-rubin-7SDoly3FV_0-unsplash.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/03/caspar-camille-rubin-7SDoly3FV_0-unsplash.jpg" alt="JavaScript Callback Functions – What are Callbacks in JS and How to Use&nbsp;Them">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>If you’re familiar with programming, you already know what functions do and how to use them. But what is a callback function? Callback functions are an important part of JavaScript and once you understand how callbacks work, you’ll become much better in JavaScript.</p>
<p>So in this post, I would like to help you to understand what callback functions are and how to use them in JavaScript by going through some examples.</p>
<h2 id="what-is-a-callback-function">What is a Callback Function?</h2>
<p>In JavaScript, functions are objects. Can we pass objects to functions as parameters? Yes.</p>
<p>So, we can also pass functions as parameters to other functions and call them inside the outer functions. Sounds complicated? Let me show that in an example below:</p><pre><code class="language-javascript">function print(callback) {
callback();
}</code></pre>
<p>The print( ) function takes another function as a parameter and calls it inside. This is valid in JavaScript and we call it a “callback”. So a function that is passed to another function as a parameter is a callback function. But that’s not all.</p>
<p><strong>You can also watch the video version of callback functions below:</strong></p>
<h3 id="why-do-we-need-callback-functions">Why do we need Callback Functions?</h3>
<p>JavaScript runs code sequentially in top-down order. However, there are some cases that code runs (or must run) after something else happens and also not sequentially. This is called asynchronous programming.</p>
<p>Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed. It helps us develop asynchronous JavaScript code and keeps us safe from problems and errors.</p>
<p>In JavaScript, the way to create a callback function is to pass it as a parameter to another function, and then to call it back right after something has happened or some task is completed. Let’s see how…</p>
<h2 id="how-to-create-a-callback">How to create a Callback</h2>
<p>To understand what I’ve explained above, let me start with a simple example. We want to log a message to the console but it should be there after 3 seconds.</p><pre><code class="language-javascript">const message = function() {
console.log("This message is shown after 3 seconds");
}
setTimeout(message, 3000);</code></pre>
<p>There is a built-in method in JavaScript called “setTimeout”, which calls a function or evaluates an expression after a given period of time (in milliseconds). So here, the “message” function is being called after 3 seconds have passed. (1 second = 1000 milliseconds)</p>
<p>In other words, the message function is being called after something happened (after 3 seconds passed for this example), but not before. So the message function is an example of a callback function.</p>
<h3 id="what-is-an-anonymous-function">What is an Anonymous Function?</h3>
<p>Alternatively, we can define a function directly inside another function, instead of calling it. It will look like this:</p><pre><code class="language-javascript">setTimeout(function() {
console.log("This message is shown after 3 seconds");
}, 3000);</code></pre>
<p>As we can see, the callback function here has no name and a function definition without a name in JavaScript is called as an “anonymous function”. This does exactly the same task as the example above.</p>
<h3 id="callback-as-an-arrow-function">Callback as an Arrow Function</h3>
<p>If you prefer, you can also write the same callback function as an ES6 arrow function, which is a newer type of function in JavaScript:</p><pre><code class="language-javascript">setTimeout(() =&gt; {
console.log("This message is shown after 3 seconds");
}, 3000);</code></pre>
<h2 id="what-about-events">What about Events?</h2>
<p>JavaScript is an event-driven programming language. We also use callback functions for event declarations. For example, let’s say we want users to click on a button:</p><pre><code class="language-html">&lt;button id="callback-btn"&gt;Click here&lt;/button&gt;</code></pre>
<p>This time we will see a message on the console only when the user clicks on the button:</p><pre><code class="language-javascript">document.queryselector("#callback-btn")
.addEventListener("click", function() {
console.log("User has clicked on the button!");
});</code></pre>
<p>So here we select the button first with its id, and then we add an event listener with the addEventListener method. It takes 2 parameters. The first one is its type, “click”, and the second parameter is a callback function, which logs the message when the button is clicked.</p>
<p>As you can see, callback functions are also used for event declarations in JavaScript.</p>
<h2 id="wrap-up">Wrap up</h2>
<p>Callbacks are used often in JavaScript, and I hope this post helps you understand what they actually do and how to work with them easier. Next, you can learn about <a href="/news/javascript-es6-promises-for-beginners-resolve-reject-and-chaining-explained/">JavaScript Promises</a> which is a similar topic that I've explained in my new post.</p>
<p><strong>If you want to learn more about web development, feel free to </strong><a href="https://www.youtube.com/channel/UC1EgYPCvKCXFn8HlpoJwY3Q" rel="noopener"><strong>follow me on Youtube</strong></a><strong>!</strong></p>
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
