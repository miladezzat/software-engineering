---
card: "/images/default.jpg"
tags: [Web Development]
description: "Debounce functions in JavaScript are higher-order functions t"
author: "Milad E. Fahmy"
title: "Debounce Explained – How to Make Your JavaScript Wait For Your User To Finish Typing"
created: "2021-08-16T10:04:54+02:00"
modified: "2021-08-16T10:04:54+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">Debounce Explained – How to Make Your JavaScript Wait For Your User To Finish Typing</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/07/pexels-photo.jpg 300w,
/news/content/images/size/w600/2020/07/pexels-photo.jpg 600w,
/news/content/images/size/w1000/2020/07/pexels-photo.jpg 1000w,
/news/content/images/size/w2000/2020/07/pexels-photo.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/07/pexels-photo.jpg" alt="Debounce Explained – How to Make Your JavaScript Wait For Your User To Finish Typing">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Debounce functions in JavaScript are higher-order functions that limit the rate at which another function gets called.</p><blockquote>A higher-order function is a function that either takes a function as an argument or returns a function as part of its return statement. Our debounce function does both.</blockquote><p>The most common use case for a debounce is to pass it as an argument to an event listener attached to an HTML element. To get a better understanding of what this looks like, and why it is useful, let’s look at an example.</p><p>Say that you have a function named <code>myFunc</code> that gets called each time you type something into an input field. After going through the requirements for your project, you decide that you want to change the experience. </p><p>Instead, you want <code>myFunc</code> to execute when at least 2 seconds have passed since the last time you typed something in.</p><p>This is where a debounce can comes into play. Instead of passing <code>myFunc</code> to the event listener, you would pass in the debounce. The debounce itself would then take <code>myFunc</code> as an argument, along with the number 2000.</p><p>Now, whenever you click the button, <code>myFunc</code> will only execute if at least 2 seconds have elapsed before the last time <code>myFunc</code> was called.</p><h2 id="how-to-implement-a-debounce-function">How to implement a debounce function</h2><p>From start to finish, it only takes 7 lines of code to implement a debounce function. The rest of this section focuses on those 7 lines of code so that we can see how our debounce function works internally.</p><pre><code class="language-javascript">function debounce( callback, delay ) {
let timeout;
return function() {
clearTimeout( timeout );
timeout = setTimeout( callback, delay );
}
}</code></pre><p>Starting with line 1, we've declared a new function named <code>debounce</code>. This new function has two parameters, <code>callback</code> and <code>delay</code>.</p><pre><code class="language-javascript">function debounce( callback, delay ) {
}
</code></pre><p><code>callback</code> is any function that needs to limit the number of times it executes.</p><p><code>delay</code> is the time (in milliseconds) that needs to elapse before <code>callback</code> can execute again.</p><pre><code class="language-javascript">function debounce( callback, delay ) {
let timeout;
}</code></pre><p>On line 2, we’re declaring an uninitialized variable named <code>timeout</code>.<br>This new variable holds the <code>timeoutID</code> returned when we call <code>setTimeout</code> later on in our <code>debounce</code> function.</p><pre><code class="language-javascript">function debounce( callback, delay ) {
let timeout;
return function() {
}
}</code></pre><p>On line 3, we’re returning an anonymous function. This anonymous function will close over the <code>timeout</code> variable so that we can retain access to it even after the initial call to <code>debounce</code> has finished executing.</p><blockquote>A closure in JavaScript occurs whenever an inner function retains access to the lexical scope of its outer function, even though the outer function has finished executing. If you want to learn more about closures, you can read <a href="https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch7.md">Chapter 7 of “You Don’t Know JS”</a> by Kyle Simpson</blockquote><pre><code class="language-javascript">function debounce( callback, delay ) {
let timeout;
return function() {
clearTimeout( timeout );
}
}</code></pre><p>On line 4, we are calling the <code>clearTimeout</code> method of the <code>WindowOrWorkerGlobalScope</code> mixin. This will make sure that each time we call our <code>debounce</code> function, <code>timeout</code> is reset, and the counter can start again.</p><p>The <code>WindowOrWorkerGlobalScope</code> mixin of JavaScript gives us access to a few well-known methods, like <code>setTimeout</code>, <code>clearTimeout</code>, <code>setInterval</code>, <code>clearInterval</code>, and <code>fetch</code>. </p><p>You can learn more about it by <a href="/news/an-introduction-to-scope-in-javascript-cbd957022652/">reading this article</a>.</p><pre><code class="language-javascript">function debounce( callback, delay ) {
let timeout;
return function() {
clearTimeout( timeout );
timeout = setTimeout( callback, delay );
}
}</code></pre><p>On line 5, we have reached the end of our <code>debounce</code> function implementation.</p><p>That line of code does a few things. The first action is assigning a value to the <code>timeout</code> variable that we declared on line 2. The value is a <code>timeoutID</code> that gets returned when we call <code>setTimeout</code>. This will allow us to reference the timeout created by calling <code>setTimeout</code> so that we can reset it each time our <code>debounce</code> function is used.</p><p>The second action performed is calling <code>setTimeout</code>. This will create a timeout that will execute <code>callback</code> (the function argument passed to our <code>debounce</code> function) once <code>delay</code> (the number argument passed to our <code>debounce</code> function) has elapsed.</p><p>Since we are using a timeout, <code>callback</code> will only execute if we allow the timeout to reach 0. This is where the heart of our <code>debounce</code> function comes into play since we are resetting the timeout each time <code>debounce</code> is called. This is what allows us to limit the execution rate of <code>myFunc</code>.</p><p>Lines 5 and 6 contain only brackets, so we won’t go over them.</p><p>That’s it. That is how our <code>debounce</code> function works internally. Now let’s add on to our previous example from the beginning. We’re going to create an input field and attach an event listener with our <code>debounce</code> function as one of its arguments.</p><h2 id="real-world-example">Real World Example</h2><p>First, we need to create an input field.</p><pre><code class="language-html">&lt;label for="myInput"&gt;Type something in!&lt;/label&gt;
&lt;input id="myInput" type="text"&gt;</code></pre><p>Next, we need to create a function that we want to execute whenever we type something into our input field.</p><pre><code class="language-javascript">function helloWorld() {
console.log("Hello World!")
}</code></pre><p>Finally, we need to select the input field we created above and attach a <code>keyup</code> event listener to it.</p><pre><code class="language-javascript">const myInput = document.getElementById("myInput");
myInput.addEventListener(
"keyup",
debounce( helloWorld, 2000 )
);</code></pre><p>That concludes our real world example! Each time we type something into our input field, <code>helloWorld</code> will execute if at least 2 seconds have passed since the last time we typed something in.</p><blockquote>Special thanks to Reddit user <strong>stratoscope</strong> for helping to fix some of the initial code in this article. <a href="https://repl.it/@geary/JsDebounce#script.js">Here is a working demo</a> he created of this <code>debounce</code> function on Repl.it.</blockquote><h2 id="closing-notes">Closing Notes</h2><p>Debounce functions are simple, yet powerful, functions that can have a noticeable impact on most JavaScript applications.</p><p>While our example was fun and straightforward, many large organizations use debounce functions to increase the performance of their applications. </p><p>If you want to learn more about JavaScript, check out my website! I am working on some cool stuff at <a href="https://juanmvega.com">https://juanmvega.com</a>.</p>
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
