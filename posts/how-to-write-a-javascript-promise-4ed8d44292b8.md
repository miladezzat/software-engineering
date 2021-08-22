---
card: "https://cdn-media-1.freecodecamp.org/images/1*RR8oubeQOm63YN90Uth0CA.jpeg"
tags: [Coding]
description: "A JavaScript promise is an object that represents the complet"
author: "Milad E. Fahmy"
title: "How to Write a JavaScript Promise"
created: "2021-08-15T23:45:38+02:00"
modified: "2021-08-15T23:45:38+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-coding tag-programming tag-javascript tag-tech tag-promises ">
<header class="post-full-header">
<h1 class="post-full-title">How to Write a JavaScript Promise</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*RR8oubeQOm63YN90Uth0CA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*RR8oubeQOm63YN90Uth0CA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*RR8oubeQOm63YN90Uth0CA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*RR8oubeQOm63YN90Uth0CA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*RR8oubeQOm63YN90Uth0CA.jpeg" alt="How to Write a JavaScript Promise">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h3 id="what-is-a-promise">What is a promise?</h3><p>A JavaScript promise is an object that represents the completion or failure of an asynchronous task and its resulting value.¹</p><p>The end.</p><p>I’m kidding of course. So, what does that definition even mean?</p><p>First of all, many things in JavaScript are objects. You can create an object a few different ways. The most common way is with object literal syntax:</p><pre><code class="language-js">const myCar = {
color: 'blue',
type: 'sedan',
doors: '4',
};</code></pre><p>You could also create a <code>class</code> and instantiate it with the <code>new</code> keyword.</p><pre><code class="language-js">class Car {
constructor(color, type, doors) {
this.color = color;
this.type = type;
this.doors = doors
}
}
resolve(10);
if(somethingSuccesfulHappened) {
const successObject = {
msg: 'Success',
data,//...some data we got back
}
resolve(successObject);
} else {
const errorObject = {
msg: 'An error occured',
error, //...some error we got back
}
reject(errorObject);
}
});</code></pre><p>Or, as we saw earlier, we don’t have to pass anything:</p><pre><code class="language-js">return new Promise((resolve, reject) =&gt; {
if(somethingSuccesfulHappend) {
resolve()
} else {
reject();
}
});</code></pre><h4 id="what-about-the-asynchronous-part-of-the-definition">What about the “asynchronous” part of the definition?</h4><p>JavaScript is single threaded. This means it can only run one thing at a time. If you can imagine a road, you can think of JavaScript as a single lane highway. Certain code (asynchronous code) can slide over to the shoulder to allow other code to pass it. When that asynchronous code is done, it returns to the roadway.</p><blockquote>As a side note, we can return a promise from <em>any</em> function. It doesn’t have to be asynchronous. That being said, promises are normally returned in cases where the function they return from is asynchronous. For example, an API that has methods for saving data to a server would be a great candidate to return a promise!</blockquote><p><strong>The takeaway:</strong></p><p>Promises give us a way to wait for our asynchronous code to complete, capture some values from it, and pass those values on to other parts of our program.</p><p><em>I have an article here that dives deeper into these concepts: <a href="/news/thrown-for-a-loop-understanding-for-loops-and-timeouts-in-javascript-558d8255d8a4/">Thrown For a Loop: Understanding Loops and Timeouts in JavaScript.</a></em></p><h3 id="how-do-we-use-a-promise">How do we use a promise?</h3><p>Using a promise is also called <em>consuming</em> a promise. In our example above, our function returns a promise object. This allows us to use method chaining with our function.</p><p>Here is an example of method chaining I bet you’ve seen:</p><pre><code class="language-js">const a = 'Some awesome string';
const b = a.toUpperCase().replace('ST', '').toLowerCase();
console.log(b); // some awesome ring</code></pre><p>Now, recall our (pretend) promise:</p><pre><code class="language-js">const somethingWasSuccesful = true;
function someAsynFunction() {
return new Promise((resolve, reject){
if (somethingWasSuccesful) {
resolve();
} else {
reject()
}
});
}</code></pre><p>And, consuming our promise by using method chaining:</p><pre><code class="language-js">someAsyncFunction
.then(runAFunctionIfItResolved(withTheResolvedValue))
//...Once we get back the thing from the database...
if(err) {
doSomethingWithTheError(error)
}   else {
doSomethingWithResults(results);
}
.then(doSomethingElse) // and if you wouldn't mind
console.log(results); // undefined</code></pre><h4 id="the-temperature-is-undefined-what-happened">The temperature is undefined. What happened?</h4><p>The function will take a certain amount of time to run. The variable is not set until the delay is over. So while we run the function, <code>setTimeout</code> is asynchronous. The part of the code in <code>setTimeout</code> moves out of the main thread into a waiting area.</p><p><em>I have an article here that dives deeper into this process: <a href="/news/thrown-for-a-loop-understanding-for-loops-and-timeouts-in-javascript-558d8255d8a4/">Thrown For a Loop: Understanding Loops and Timeouts in JavaScript.</a></em></p><p>Since the part of our function that sets the variable <code>result</code> moves into a holding area until it is done, our parser is free to move onto the next line. In our case, it’s our <code>console.log()</code>. At this point, <code>result</code> is still undefined since our <code>setTimeout</code> is not over.</p><p>So what else could we try? We could run <code>getTemperature()</code> and then wait 11 seconds (since our max delay is ten seconds) and <em>then</em> console.log the results.</p><pre><code class="language-js">getTemperature();
setTimeout(() =&gt; {
console.log(result);
}, 11000);
.then(result =&gt; console.log(result))
.catch(error =&gt; console.log(error));
// Reject: Too Cold | Delay: 7880 | Temperature: 43 deg</code></pre><p><code>.then</code> will get called when our promise resolves and will return whatever information we pass into <code>resolve</code>.</p><p><code>.catch</code> will get called when our promise rejects and will return whatever information we pass into <code>reject</code>.</p><p>Most likely, you’ll consume promises more than you will create them. In either case, they help make our code more elegant, readable, and efficient.</p><h3 id="summary">Summary</h3><ol><li>Promises are objects that contain information about the completion of some asynchronous code and any resulting values we want to pass in.</li><li>To return a promise we use <code>return new Promise((resolve, reject)=&gt; {})</code></li><li>To consume a promise we use <code>.then</code> to get the information from a promise that has resolved, and <code>.catch</code> to get the information from a promise that has rejected.</li><li>You’ll probably use (consume) promises more than you’ll write.</li></ol><h4 id="references">References</h4><p>1.) <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" rel="noopener"><em>https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise</em></a></p>
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
