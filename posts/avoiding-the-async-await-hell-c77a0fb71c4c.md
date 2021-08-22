---
card: "https://cdn-media-1.freecodecamp.org/images/1*_3nDjjPTWn4ohLt96IcwCA.png"
tags: [JavaScript]
description: async/await freed us from callback hell, but people have star
author: "Milad E. Fahmy"
title: "How to escape async/await hell"
created: "2021-08-15T19:46:49+02:00"
modified: "2021-08-15T19:46:49+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-programming tag-learning tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">How to escape async/await hell</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*_3nDjjPTWn4ohLt96IcwCA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*_3nDjjPTWn4ohLt96IcwCA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*_3nDjjPTWn4ohLt96IcwCA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*_3nDjjPTWn4ohLt96IcwCA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*_3nDjjPTWn4ohLt96IcwCA.png" alt="How to escape async/await hell">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>async/await freed us from callback hell, but people have started abusing it — leading to the birth of async/await hell.</p>
<p>In this article, I will try to explain what async/await hell is, and I’ll also share some tips to escape it.</p>
<h3 id="what-is-async-await-hell">What is async/await hell</h3>
<p>While working with Asynchronous JavaScript, people often write multiple statements one after the other and slap an <strong>await</strong> before a function call. This causes performance issues, as many times one statement doesn’t depend on the previous one — but you still have to wait for the previous one to complete.</p>
<h3 id="an-example-of-async-await-hell">An example of async/await hell</h3>
<p>Consider if you wrote a script to order a pizza and a drink. The script might look like this:</p>
<p>On the surface it looks correct, and it does work. But this is not a good implementation, because it leaves concurrency out of the picture. Let’s understand what its doing so that we can nail down the issue.</p>
<h4 id="explanation">Explanation</h4>
<p>We have wrapped our code in an async <a href="https://developer.mozilla.org/en-US/docs/Glossary/IIFE" rel="noopener">IIFE</a>. The following occurs in this exact order:</p>
<ol>
<li>Get the list of pizzas.</li>
<li>Get the list of drinks.</li>
<li>Choose one pizza from the list.</li>
<li>Choose one drink from the list.</li>
<li>Add the chosen pizza to the cart.</li>
<li>Add the chosen drink to the cart.</li>
<li>Order the items in the cart.</li>
</ol>
<h4 id="so-what-s-wrong">So what’s wrong ?</h4>
<p>As I stressed earlier, all these statements execute one by one. There is no concurrency here. Think carefully: why are we waiting to get the list of pizzas before trying to get the list of drinks? We should just try to get both the lists together. However when we need to choose a pizza, we do need to have the list of pizzas beforehand. The same goes for the drinks.</p>
<p>So we can conclude that the pizza related work and drink related work can happen in parallel, but the individual steps involved in pizza related work need to happen sequentially (one by one).</p>
<h4 id="another-example-of-bad-implementation">Another example of bad implementation</h4>
<p>This JavaScript snippet will get the items in the cart and place a request to order them.</p><pre><code class="language-js">async function orderItems() {
const items = await getCartItems()    // async call
const noOfItems = items.length
for(var i = 0; i &lt; noOfItems; i++) {
await sendRequest(items[i])    // async call
}
}</code></pre>
<p>In this case, the for loop has to wait for the <code>sendRequest()</code> function to complete before continuing the next iteration. However, we don’t actually need to wait. We want to send all the requests as quickly as possible and then we can wait for all of them to complete.</p>
<p>I hope that now you are getting closer to understanding what is async/await hell and how severely it affects the performance of your program. Now I want to ask you a question.</p>
<h3 id="what-if-we-forget-the-await-keyword">What if we forget the await keyword ?</h3>
<p>If you forget to use <strong>await</strong> while calling an async function, the function starts executing. This means that await is not required for executing the function. The async function will return a promise, which you can use later.</p><pre><code class="language-js">(async () =&gt; {
const value = doSomeAsyncTask()
console.log(value) // an unresolved promise
})()</code></pre>
<p>Another consequence is that the compiler won’t know that you want to wait for the function to execute completely. Thus the compiler will exit the program without finishing the async task. So we do need the <strong>await</strong> keyword.</p><pre><code class="language-js">(async () =&gt; {
const promise = doSomeAsyncTask()
const value = await promise
console.log(value) // the actual value
})()</code></pre>
<p>One interesting property of promises is that you can get a promise in one line and wait for it to resolve in another. This is the key to escaping async/await hell.</p>
<p>As you can see, <code>doSomeAsyncTask()</code> is returning a promise. At this point <code>doSomeAsyncTask()</code> has started its execution. To get the resolved value of the promise, we use the await keyword and that will tell JavaScript to not execute the next line immediately, but instead wait for the promise to resolve and then execute the next line.</p>
<h3 id="how-to-get-out-of-async-await-hell">How to get out of async/await hell ?</h3>
<p>You should follow these steps to escape async/await hell.</p>
<h4 id="find-statements-which-depend-on-the-execution-of-other-statements">Find statements which depend on the execution of other statements</h4>
<p>In our first example, we were selecting a pizza and a drink. We concluded that, before choosing a pizza, we need to have the list of pizzas. And before adding the pizza to the cart, we’d need to choose a pizza. So we can say that these three steps depend on each other. We cannot do one thing until we have finished the previous thing.</p>
<p>But if we look at it more broadly, we find that selecting a pizza doesn’t depend on selecting a drink, so we can select them in parallel. That is one thing that machines can do better than we can.</p>
<p>Thus we have discovered some statements which depend on the execution of other statements and some which do not.</p>
<h4 id="group-dependent-statements-in-async-functions">Group-dependent statements in async functions</h4>
<p>As we saw, selecting pizza involves dependent statements like getting the list of pizzas, choosing one, and then adding the chosen pizza to the cart. We should group these statements in an async function. This way we get two async functions, <code>selectPizza()</code> and <code>selectDrink()</code> .</p>
<h4 id="execute-these-async-functions-concurrently">Execute these async functions concurrently</h4>
<p>We then take advantage of the event loop to run these async non blocking functions concurrently. Two common patterns of doing this is <strong>returning promises early</strong> and the <strong>Promise.all method</strong>.</p>
<h3 id="let-s-fix-the-examples">Let’s fix the examples</h3>
<p>Following the three steps, let’s apply them on our examples.</p><pre><code class="language-js">async function selectPizza() {
const pizzaData = await getPizzaData()    // async call
const chosenPizza = choosePizza()    // sync call
await addPizzaToCart(chosenPizza)    // async call
}
async function selectDrink() {
const drinkData = await getDrinkData()    // async call
const chosenDrink = chooseDrink()    // sync call
await addDrinkToCart(chosenDrink)    // async call
}
(async () =&gt; {
const pizzaPromise = selectPizza()
const drinkPromise = selectDrink()
await pizzaPromise
await drinkPromise
orderItems()    // async call
})()
// Although I prefer it this way
Promise.all([selectPizza(), selectDrink()]).then(orderItems)   // async call</code></pre>
<p>Now we have grouped the statements into two functions. Inside the function, each statement depends on the execution of the previous one. Then we concurrently execute both the functions <code>selectPizza()</code> and <code>selectDrink()</code> .</p>
<p>In the second example, we need to deal with an unknown number of promises. Dealing with this situation is super easy: we just create an array and push the promises in it. Then using <code>Promise.all()</code> we concurrently wait for all the promises to resolve.</p><pre><code class="language-js">async function orderItems() {
const items = await getCartItems()    // async call
const noOfItems = items.length
const promises = []
for(var i = 0; i &lt; noOfItems; i++) {
const orderPromise = sendRequest(items[i])    // async call
promises.push(orderPromise)    // sync call
}
await Promise.all(promises)    // async call
}
// Although I prefer it this way
async function orderItems() {
const items = await getCartItems()    // async call
const promises = items.map((item) =&gt; sendRequest(item))
await Promise.all(promises)    // async call
}</code></pre>
<p>I hope this article helped you see beyond the basics of async/await, and also helped you improve the performance of your application.</p>
<p>If you liked the article, please clap your heart out. Tip — You can clap 50 times!</p>
<p>Please also share on Fb and Twitter. If you’d like to get updates, follow me on <a href="https://twitter.com/dev__adi" rel="noopener">Twitter </a>and <a href="https://medium.com/@adityaa803/" rel="noopener">Medium</a> or subscribe to <a href="https://buttondown.email/itaditya" rel="noopener">my newsletter</a>! If anything is not clear or you want to point out something, please comment down below.</p>
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
