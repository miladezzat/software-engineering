---
card: "https://cdn-media-1.freecodecamp.org/images/1*pTg8YVc-Hdps3vGURqJGDQ.jpeg"
tags: [JavaScript]
description: "JavaScript is the official language of all modern web browser"
author: "Milad E. Fahmy"
title: "3 JavaScript questions to watch out for during coding interviews"
created: "2021-08-16T10:26:03+02:00"
modified: "2021-08-16T10:26:03+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-web-development tag-software-development tag-learning-to-code ">
<header class="post-full-header">
<h1 class="post-full-title">3 JavaScript questions to watch out for during coding interviews</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*pTg8YVc-Hdps3vGURqJGDQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*pTg8YVc-Hdps3vGURqJGDQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*pTg8YVc-Hdps3vGURqJGDQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*pTg8YVc-Hdps3vGURqJGDQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*pTg8YVc-Hdps3vGURqJGDQ.jpeg" alt="3 JavaScript questions to watch out for during coding interviews">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>JavaScript is the official language of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" rel="noopener">all modern web browsers</a>. As such, JavaScript questions come up in all sorts of developer interviews.</p><p>This article isn’t about the newest JavaScript libraries, common development practices, or any of the new <a href="https://hackernoon.com/es6-features-you-need-to-know-now-b525e2b0755e#.seo0weyr4" rel="noopener">ES6 functions</a>. Rather, it’s about 3 things that usually come up in interviews when discussing JavaScript. I myself have been asked these questions, and my friends have told me they’ve been asked them, too.</p><p>Of course these aren’t the only 3 things you should study before a JavaScript interview — there are a <a href="http://jstherightway.org/#getting-started" rel="noopener">multitude</a> of <a href="https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95#.7fty5p61c" rel="noopener">ways</a> you <a href="http://www.thatjsdude.com/interview/js2.html" rel="noopener">can</a> better prepare for an upcoming interview — but below are 3 questions an interviewer may ask to judge how well you know and understand the JavaScript language and the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction" rel="noopener">DOM</a>.</p><p>So let’s get started! Note that we’re going to use vanilla JavaScript in the examples below, since your interviewer will usually want to see how well you understand JavaScript and the DOM without the help of libraries like jQuery.</p><h3 id="question-1-event-delegation">Question #1: Event delegation</h3><p>When building an application, sometimes you’ll need to attach event listeners to buttons, text, or images on the page in order to perform some action when the user interacts with the element.</p><p>If we take a simple todo list as an example, the interviewer may tell you that they want an action to occur when a user clicks one of the list items. And they want you to implement this functionality in JavaScript assuming the following HTML code:</p><pre><code class="language-html">&lt;ul id="todo-app"&gt;
&lt;li class="item"&gt;Walk the dog&lt;/li&gt;
&lt;li class="item"&gt;Pay bills&lt;/li&gt;
&lt;li class="item"&gt;Make dinner&lt;/li&gt;
&lt;li class="item"&gt;Code for one hour&lt;/li&gt;
&lt;/ul&gt;</code></pre><p>You may want to do something like the following to attach event listeners to the elements:</p><pre><code class="language-js">document.addEventListener('DOMContentLoaded', function() {
let app = document.getElementById('todo-app');
let items = app.getElementsByClassName('item');
// attach event listener to each item
for (let item of items) {
item.addEventListener('click', function() {
alert('you clicked on item: ' + item.innerHTML);
});
}
});</code></pre><p>While this does technically work, the problem is that you’re attaching an event listener to every single item individually. This is fine for 4 elements, but what if someone adds 10,000 items (they may have a lot of things to do) to their todo list? Then your function will create 10,000 separate event listeners and attach each of them to the DOM. This isn’t very <a href="https://www.kirupa.com/html5/handling_events_for_many_elements.htm" rel="noopener">efficient</a>.</p><p>In an interview it would be best to first ask the interviewer what the maximum number of elements the user can enter is. If it can never be more than 10, for example, then the above code would work fine. But if there’s no limit to the number of items the user can enter, then you’d want to use a more efficient solution.</p><p>If your application could end up with hundreds of event listeners, the more efficient solution would be to actually attach <strong>one</strong> event listener to the whole container, and then be able to access each item when it’s actually clicked. This is called <a href="https://davidwalsh.name/event-delegate" rel="noopener">event delegation</a>, and it’s much more efficient than attaching separate event handlers.</p><p>Here’s the code for event delegation:</p><pre><code class="language-js">document.addEventListener('DOMContentLoaded', function() {
let app = document.getElementById('todo-app');
// attach event listener to whole container
app.addEventListener('click', function(e) {
if (e.target &amp;&amp; e.target.nodeName === 'LI') {
let item = e.target;
alert('you clicked on item: ' + item.innerHTML);
}
});
});</code></pre><h3 id="question-2-using-a-closure-within-a-loop">Question #2: Using a closure within a loop</h3><p>Closures are sometimes brought up in an interview so that the interviewer can gauge how familiar you are with the language, and whether you know when to implement a closure.</p><p>A closure is basically when an <a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36#.44xk49tyt" rel="noopener">inner function has access</a> to variables outside of its scope. Closures can be used for things like <a href="https://medium.com/written-in-code/practical-uses-for-closures-c65640ae7304#.70gp35hbn" rel="noopener">implementing privacy</a> and creating <a href="https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e#.1817w0lmb" rel="noopener">function factories</a>. A common interview question regarding the use of closures is something like this:</p><p><em>Write a function that will loop through a list of integers and print the index of each element after a 3 second delay.</em></p><p>A common (incorrect) implementation I’ve seen for this problem looks something like this:</p><pre><code class="language-js">const arr = [10, 12, 15, 21];
for (var i = 0; i &lt; arr.length; i++) {
setTimeout(function() {
console.log('The index of this number is: ' + i);
}, 3000);
}</code></pre><p>If you run this you’ll see that you actually get the <strong>4</strong> printed out every time instead of the expected <strong>0, 1, 2, 3 </strong>after a 3 second delay.</p><p>To correctly identify why this is happening it would be useful to have an understanding of why this happens in JavaScript, which is exactly what the interviewer is trying to test.</p><p>The reason for this is because the <code>setTimeout</code> function creates a function (the closure) that has access to its outer scope, which is the loop that contains the index <code>i</code>. After 3 seconds go by, the function is executed and it prints out the value of <code>i</code>, which at the end of the loop is at 4 because it cycles through 0, 1, 2, 3, 4 and the loop finally stops at 4.</p><p>There are actually <a href="http://stackoverflow.com/questions/3572480/please-explain-the-use-of-javascript-closures-in-loops" rel="noopener">a few ways</a> of <a href="https://coderbyte.com/algorithm/3-common-javascript-closure-questions" rel="noopener">correctly writing</a> the function for this problem. Here are two of them:</p><pre><code class="language-js">const arr = [10, 12, 15, 21];
for (var i = 0; i &lt; arr.length; i++) {
// pass in the variable i so that each function
// has access to the correct index
setTimeout(function(i_local) {
return function() {
console.log('The index of this number is: ' + i_local);
}
}(i), 3000);
}</code></pre><pre><code class="language-js">const arr = [10, 12, 15, 21];
for (let i = 0; i &lt; arr.length; i++) {
// using the ES6 let syntax, it creates a new binding
// every single time the function is called
// read more here: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads
setTimeout(function() {
console.log('The index of this number is: ' + i);
}, 3000);
}</code></pre><h3 id="question-3-debouncing">Question #3: Debouncing</h3><p>There are some browser events that can fire many times within a short timespan very quickly, such as resizing a window or scrolling down a page. If you attach an event listener to the window scroll event for example, and the user continuously scrolls down the page very quickly, your event may fire thousands of times within the span of 3 seconds. This can cause some serious performance issues.</p><p>If you’re discussing building an application in an interview, and events like scrolling, window resizing, or key pressing come up, make sure to mention debouncing and/or throttling as a way to improve page speed and performance. A real example taken from this <a href="https://css-tricks.com/debouncing-throttling-explained-examples/" rel="noopener">guest post on css-tricks</a>:</p><blockquote>In 2011, an issue popped up on the Twitter website: when you were scrolling down your Twitter feed, it became slow and unresponsive. John Resig published <a href="http://ejohn.org/blog/learning-from-twitter" rel="noopener">a blog post about the problem</a> where it was explained how bad of an idea it is to directly attach expensive functions to the <code>scroll</code> event.</blockquote><p>Debouncing is one way to solve this issue by limiting the time that needs to pass by until a function is called again. A correct implementation of debouncing would therefore <em>group</em> several function calls into one and execute it only once after some time has elapsed. Here’s an implementation in plain JavaScript that makes use of topics such as <a href="https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/" rel="noopener">scope</a>, closures, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this" rel="noopener">this</a>, and <a href="http://www.w3schools.com/jsref/met_win_settimeout.asp" rel="noopener">timing events</a>:</p><pre><code class="language-js">// debounce function that will wrap our event
function debounce(fn, delay) {
// maintain a timer
let timer = null;
// closure function that has access to timer
return function() {
// get the scope and parameters of the function
// via 'this' and 'arguments'
let context = this;
let args = arguments;
// if event is called, clear the timer and start over
clearTimeout(timer);
timer = setTimeout(function() {
fn.apply(context, args);
}, delay);
}
}</code></pre><p>This function — when wrapped around an event — will execute only after a certain amount of time has elapsed.</p><p>You would use this function like so:</p><pre><code class="language-js">// function to be called when user scrolls
function foo() {
console.log('You are scrolling!');
}
// wrap our function in a debounce to fire once 2 seconds have gone by
let elem = document.getElementById('container');
elem.addEventListener('scroll', debounce(foo, 2000));</code></pre><p>Throttling is another technique that’s is similar to debouncing, except that instead of waiting for some time to pass by before calling a function, throttling just spreads the function calls across a longer time interval. So if an event occurs 10 times within 100 milliseconds, throttling could spread out each of the function calls to be executed once every 2 seconds instead of all firing within 100 milliseconds.</p><p>For more information on debouncing and throttling, the following articles and tutorials may be helpful:</p><ul><li><a href="https://medium.com/@_jh3y/throttling-and-debouncing-in-javascript-b01cad5c8edf#.ly8uqz8v4" rel="noopener">Throttling and Debouncing in JavaScript</a></li><li><a href="https://css-tricks.com/the-difference-between-throttling-and-debouncing/" rel="noopener">The Difference Between Throttling and Debouncing</a></li><li><a href="https://css-tricks.com/debouncing-throttling-explained-examples/" rel="noopener">Examples of Throttling and Debouncing</a></li><li><a href="https://remysharp.com/2010/07/21/throttling-function-calls" rel="noopener">Remy Sharp’s blog post on Throttling function calls</a></li></ul><p>If you enjoyed reading this article, then you may like reading the JavaScript tutorials and solving some of the JavaScript coding challenges that I host on <a href="https://www.coderbyte.com" rel="noopener">Coderbyte</a>. I’d love to hear what you think!</p>
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
