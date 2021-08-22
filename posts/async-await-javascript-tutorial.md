---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c987e740569d1a4ca1a5b.jpg"
tags: [JavaScript]
description: "When does an asynchronous function finish? And why is this su"
author: "Milad E. Fahmy"
title: "Async Await JavaScript Tutorial – How to Wait for a Function to Finish in JS"
created: "2021-08-16T10:04:34+02:00"
modified: "2021-08-16T10:04:34+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-asynchronous tag-asyncawait tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">Async Await JavaScript Tutorial – How to Wait for a Function to Finish in JS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c987e740569d1a4ca1a5b.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c987e740569d1a4ca1a5b.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c987e740569d1a4ca1a5b.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c987e740569d1a4ca1a5b.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c987e740569d1a4ca1a5b.jpg" alt="Async Await JavaScript Tutorial – How to Wait for a Function to Finish in JS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>When does an asynchronous function finish? And why is this such a hard question to answer? </p><p>Well it turns out that understanding asynchronous functions requires a great deal of knowledge about how JavaScript works fundamentally.</p><p>Let's go explore this concept, and learn a lot about JavaScript in the process.</p><p>Are you ready? Let's go.</p><h2 id="what-is-asynchronous-code">What is asynchronous code?</h2><p>By design, JavaScript is a synchronous programming language. This means that when code is executed, JavaScript starts at the top of the file and runs through code line by line, until it is done. </p><p>The result of this design decision is that only one thing can happen at any one time. </p><p>You can think of this as if you were juggling six small balls. While you are juggling, your hands are occupied and can't handle anything else. </p><p>It's the same with JavaScript: once the code is running, it has its hands full with that code. We call this this kind of synchronous code <em>blocking</em>. Because it's effectively blocking other code from running.</p><p>Let's circle back to the juggling example. What would happen if you wanted to add another ball? Instead of six balls, you wanted to juggle seven balls. That's might be a problem.</p><p>You don't want to stop juggling, because it's just so much fun. But you can't go and get another ball either, because that would mean you'd have to stop. </p><p>The solution? Delegate the work to a friend or family member. They aren't juggling, so they can go and get the ball for you, then toss it into your juggling at a time when your hand is free and you are ready to add another ball mid-juggle. </p><p>This is what asynchronous code is. JavaScript is delegating the work to something else, then going about it's own business. Then when it's ready, it will receive the results back from the work. </p><h2 id="who-is-doing-the-other-work">Who is doing the other work?</h2><p>Alright, so we know that JavaScript is synchronous and lazy. It doesn't want to do all of the work itself, so it farms it out to something else. </p><p>But who is this mysterious entity that works for JavaScript? And how does it get hired to work for JavaScript?</p><p>Well, let's take a look at an example of asynchronous code.</p><pre><code class="language-Javascript">const logName = () =&gt; {
console.log("Han")
}
setTimeout(logName, 0)
console.log("Hi there")</code></pre><p>Running this code results in the following output in the console:</p><pre><code class="language-Javascript">// in console
Hi there
fetch("https://someapi/data").then(response =&gt; response.json())
.then(data =&gt; console.log(data))
console.log("What soup?")</code></pre><p>What will the order be here?</p><ol><li>Firstly, setTimeout is delegated to the browser, which does the work and puts the resulting function in the macrotask queue.</li><li>Secondly fetch is delegated to the browser, which takes the work. It retrieves the data from the endpoint and puts the resulting functions in the microtask queue.</li><li>Javascript logs out "What soup"?</li><li>The event loop checks whether or not JavaScript is ready to receive the results from the queued work.</li><li>When the console.log is done, JavaScript is ready. The event loop picks queued functions from the microtask queue, which has a higher priority, and gives them back to JavaScript to execute.</li><li>After the microtask queue is empty, the setTimeout callback is taken out of the macrotask queue and given back to JavaScript to execute.</li></ol><pre><code>In console:
// What soup?
// the data from the api
// hello</code></pre><h2 id="promises">Promises</h2><p>Now you should have a good deal of knowledge about how asynchronous code is handled by JavaScript and the browser environment. So let's talk about promises.</p><p>A promise is a JavaScript construct that represents a future unknown value. Conceptually, a promise is just JavaScript promising to return <em>a value</em>. It could be the result from an API call, or it could be an error object from a failed network request. You're guaranteed to get something. </p><pre><code>const promise = new Promise((resolve, reject) =&gt; {
// Make a network request
if (response.status === 200) {
resolve(response.body)
} else {
const error = { ... }
reject(error)
}
})
promise.then(res =&gt; {
console.log(res)
}).catch(err =&gt; {
console.log(err)
})</code></pre><p>A promise can have the following states: </p><ul><li>fulfilled - action successfully completed</li><li>rejected - action failed</li><li>pending - neither action has been completed </li><li>settled - has been fulfilled or rejected</li></ul><p>A promise receives a resolve and a reject function that can be called to trigger one of these states.</p><p>One of the big selling points of promises is that we can chain functions that we want to happen on success (resolve) or failure (reject): </p><ul><li>To register a function to run on success we use .then</li><li>To register a function to run on failure we use .catch</li></ul><pre><code class="language-javascript">// Fetch returns a promise
fetch("https://swapi.dev/api/people/1")
.then((res) =&gt; console.log("This function is run when the request succeeds", res)
.catch(err =&gt; console.log("This function is run when the request fails", err)
// Chaining multiple functions
fetch("https://swapi.dev/api/people/1")
.then((res) =&gt; doSomethingWithResult(res))
.then((finalResult) =&gt; console.log(finalResult))
.catch((err =&gt; doSomethingWithErr(err))</code></pre><p>Perfect. Now let's take a closer look at what this looks like under the hood, using fetch as an example:</p><pre><code class="language-javascript">const fetch = (url, options) =&gt; {
// simplified
return new Promise((resolve, reject) =&gt; {
const xhr = new XMLHttpRequest()
// ... make request
xhr.onload = () =&gt; {
const options = {
status: xhr.status,
statusText: xhr.statusText
...
}
resolve(new Response(xhr.response, options))
}
xhr.onerror = () =&gt; {
reject(new TypeError("Request failed"))
}
}
fetch("https://swapi.dev/api/people/1")
// Register handleResponse to run when promise resolves
.then(handleResponse)
.catch(handleError)
// conceptually, the promise looks like this now:
// { status: "pending", onsuccess: [handleResponse], onfailure: [handleError] }
const handleResponse = (response) =&gt; {
// handleResponse will automatically receive the response, ¨
// because the promise resolves with a value and automatically injects into the function
console.log(response)
}
const handleError = (response) =&gt; {
// handleError will automatically receive the error, ¨
// because the promise resolves with a value and automatically injects into the function
console.log(response)
}
// the promise will either resolve or reject causing it to run all of the registered functions in the respective arrays
// injecting the value. Let's inspect the happy path:
// 1. XHR event listener fires
// 2. If the request was successfull, the onload event listener triggers
// 3. The onload fires the resolve(VALUE) function with given value
// 4. Resolve triggers and schedules the functions registered with .then
</code></pre><p>So we can use promises to do asynchronous work, and to be sure that we can handle any result from those promises. That is the value proposition. If you want to know more about promises you can read more about them <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">here</a> and <a href="https://web.dev/promises/">here</a>.</p><p>When we use promises, we chain our functions onto the promise to handle the different scenarios.</p><p>This works, but we still need to handle our logic inside callbacks (nested functions) once we get our results back. What if we could use promises but write synchronous looking code? It turns out we can.</p><h2 id="async-await">Async/Await</h2><p>Async/Await is a way of writing promises that allows us to write <em>asynchronous code in a synchronous way. </em>Let's have a look.</p><pre><code>const getData = async () =&gt; {
const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
const data = await response.json()
console.log(data)
}
getData()</code></pre><p>Nothing has changed under the hood here. We are still using promises to fetch data, but now it looks synchronous, and we no longer have .then and .catch blocks. </p><p>Async / Await is actually just syntactic sugar providing a way to create code that is easier to reason about, without changing the underlying dynamic. </p><p>Let's take a look at how it works.</p><p>Async/Await lets us use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator">generators</a> to <em>pause</em> the execution of a function. When we are using async / await we are not blocking because the function is yielding the control back over to the main program. </p><p>Then when the promise resolves we are using the generator to yield control back to the asynchronous function with the value from the resolved promise.<a href="https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch4.md"> </a></p><p><a href="https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch4.md">You can read more here for a great overview</a> of generators and asynchronous code.</p><p>In effect, we can now write asynchronous code that looks like synchronous code. Which means that it is easier to reason about, and we can use synchronous tools for error handling such as try / catch:</p><pre><code class="language-javascript">const getData = async () =&gt; {
try {
const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
const data = await response.json()
console.log(data)
} catch (err) {
console.log(err)
}
}
getData()</code></pre><p>Alright. So how do we use it? In order to use async / await we need to prepend the function with async. This does not make it an asynchronous function, it merely allows us to use await inside of it. </p><p>Failing to provide the async keyword will result in a syntax error when trying to use await inside a regular function.</p><pre><code class="language-javascript">const getData = async () =&gt; {
console.log("We can use await in this function")
}</code></pre><p>Because of this, we can not use async / await on top level code. But async and await are still just syntactic sugar over promises. So we can handle top level cases with promise chaining: </p><pre><code>async function getData() {
let response = await fetch('http://apiurl.com');
}
// getData is a promise
getData().then(res =&gt; console.log(res)).catch(err =&gt; console.log(err); </code></pre><p>This exposes another interesting fact about async / await. When defining a function as async, <em>it will always return a promise.</em></p><p>Using async / await can seem like magic at first. But like any magic, it's just sufficiently advanced technology that has evolved over the years. Hopefully now you have a solid grasp of the fundamentals, and can use async / await with confidence.</p><h1 id="conclusion">Conclusion</h1><p>If you made it here, congrats. You just added a key piece of knowledge about JavaScript and how it works with its environments to your toolbox. </p><p>This is definitely a confusing subject, and the lines are not always clear. But now you hopefully have a grasp on how JavaScript works with asynchronous code in the browser, and a stronger grasp over both promises and async / await. </p><p>If you enjoyed this article, you might also enjoy my <a href="https://www.youtube.com/channel/UCZTeUahnA2GMoo_YpTBFo9A?view_as=subscriber">youtube channel</a>. I currently have a <a href="https://www.youtube.com/watch?v=kmvg9C8hVa0&amp;list=PL_kr51suci7XVVw4SJLZ0QQBAsL2K8Opy">web fundamentals series </a>going where I go through <a href="https://www.youtube.com/watch?v=0ykAOzJb-U8&amp;t=19s">HTTP</a>, <a href="https://www.youtube.com/watch?v=R5uwuG1wPR8">building web servers from scratch</a> and more. </p><p>There's also a series going on <a href="https://www.youtube.com/playlist?list=PL_kr51suci7WkVde-b09G4XHEWQrmzcpJ">building an entire app with React</a>, if that is your jam. And I plan to add much more content here in the future going in depth on JavaScript topics.</p><p>And if you want to say hi or chat about web development, you could always reach out to me on twitter at @foseberg. Thanks for reading!</p>
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
