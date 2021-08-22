---
card: "/images/default.jpg"
tags: [JavaScript]
description: Promises are important building blocks for asynchronous opera
author: "Milad E. Fahmy"
title: "JavaScript Promise Tutorial – How to Resolve or Reject Promises in JS"
created: "2021-08-15T19:27:50+02:00"
modified: "2021-08-15T19:27:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-promises ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Promise Tutorial – How to Resolve or Reject Promises in JS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/11/cover-1.png 300w,
/news/content/images/size/w600/2020/11/cover-1.png 600w,
/news/content/images/size/w1000/2020/11/cover-1.png 1000w,
/news/content/images/size/w2000/2020/11/cover-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/11/cover-1.png" alt="JavaScript Promise Tutorial – How to Resolve or Reject Promises in JS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><code>Promise</code>s are important building blocks for asynchronous operations in JavaScript. You may think that promises are not so easy to understand, learn, and work with. And trust me, you are not alone! </p>
<p>Promises are challenging for many web developers, even after spending years working with them.</p>
<p>In this article, I want to try to change that perception while sharing what I've learned about JavaScript Promises over the last few years. Hope you find it useful.</p>
<h1 id="what-is-a-promise-in-javascript">What is a Promise in JavaScript?</h1>
<p>A <code>Promise</code> is a special JavaScript object. It produces a value after an <code>asynchronous</code> (aka, async) operation completes successfully, or an error if it does not complete successfully due to time out, network error, and so on. </p>
<p>Successful call completions are indicated by the <code>resolve</code> function call, and errors are indicated by the <code>reject</code> function call.</p>
<p>You can create a promise using the promise constructor like this:</p><pre><code class="language-js">let promise = new Promise(function(resolve, reject) {
// Make an asynchronous call and either resolve or reject
});</code></pre>
<p>In most cases, a promise may be used for an asynchronous operation. However, technically, you can resolve/reject on both synchronous and asynchronous operations.</p>
<h1 id="hang-on-don-t-we-have-callback-functions-for-async-operations">Hang on, don't we have <code>callback</code> functions for async operations?</h1>
<p>Oh, yes! That's right. We have <code>callback</code> functions in JavaScript. But, a callback is not a special thing in JavaScript. It is a regular function that produces results after an <code>asynchronous</code> call completes (with success/error).</p>
<p>The word 'asynchronous' means that something happens in the future, not right now. Usually, callbacks are only used when doing things like network calls, or uploading/downloading things, talking to databases, and so on.</p>
<p>While <code>callbacks</code> are helpful, there is a huge downside to them as well. At times, we may have one callback inside another callback that's in yet another callback and so on. I'm serious! Let's understand this "callback hell" with an example.</p>
<h2 id="how-to-avoid-callback-hell-pizzahub-example">How to Avoid Callback Hell – PizzaHub Example</h2>
<p>Let's order a Veg Margherita pizza 🍕 from the PizzaHub. When we place the order, PizzaHub automatically detects our location, finds a nearby pizza restaurant, and finds if the pizza we are asking for is available. </p>
<p>If it's available, it detects what kind of beverages we get for free along with the pizza, and finally, it places the order. </p>
<p>If the order is placed successfully, we get a message with a confirmation.</p>
<p>So how do we code this using callback functions? I came up with something like this:</p><pre><code class="language-js">function orderPizza(type, name) {
// Query the pizzahub for a store
query(`/api/pizzahub/`, function(result, error){
if (!error) {
let shopId = result.shopId;
// Get the store and query pizzas
query(`/api/pizzahub/pizza/${shopid}`, function(result, error){
if (!error) {
let pizzas = result.pizzas;
// Find if my pizza is availavle
let myPizza = pizzas.find((pizza) =&gt; {
return (pizza.type===type &amp;&amp; pizza.name===name);
});
// Check for the free beverages
query(`/api/pizzahub/beverages/${myPizza.id}`, function(result, error){
if (!error) {
let beverage = result.id;
// Prepare an order
query(`/api/order`, {'type': type, 'name': name, 'beverage': beverage}, function(result, error){
if (!error) {
console.log(`Your order of ${type} ${name} with ${beverage} has been placed`);
} else {
console.log(`Bad luck, No Pizza for you today!`);
}
});
}
})
}
});
}
});
}
// Call the orderPizza method
orderPizza('veg', 'margherita');</code></pre>
<p>Let's have a close look at the <code>orderPizza</code> function in the above code. </p>
<p>It calls an API to get your nearby pizza shop's id. After that, it gets the list of pizzas available in that restaurant. It checks if the pizza we are asking for is found and makes another API call to find the beverages for that pizza. Finally the order API places the order.</p>
<p>Here we use a callback for each of the API calls. This leads us to use another callback inside the previous, and so on. </p>
<p>This means we get into something we call (very expressively) <code>Callback Hell</code>. And who wants that? It also forms a code pyramid which is not only confusing but also error-prone.</p>
<figcaption>Demonstration of callback hell and pyramid</figcaption>
</figure>
<p>There are a few ways to come out of (or not get into) <code>callback hell</code>. The most common one is by using a <code>Promise</code> or <code>async</code> function. However, to understand <code>async</code> functions well, you need to have a fair understanding of <code>Promise</code>s first. </p>
<p>So let's get started and dive into promises.</p>
<h1 id="understanding-promise-states">Understanding Promise States</h1>
<p>Just to review, a promise can be created with the constructor syntax, like this:</p><pre><code class="language-js">let promise = new Promise(function(resolve, reject) {
// Code to execute
});</code></pre>
<p>The constructor function takes a function as an argument. This function is called the <code>executor function</code>.</p><pre><code class="language-js">// Executor function passed to the
// Promise constructor as an argument
function(resolve, reject) {
// Your logic goes here...
}</code></pre>
<p>The executor function takes two arguments, <code>resolve</code> and <code>reject</code>. These are the callbacks provided by the JavaScript language. Your logic goes inside the executor function that runs automatically when a <code>new Promise</code> is created.</p>
<p>For the promise to be effective, the executor function should call either of the callback functions, <code>resolve</code> or <code>reject</code>. We will learn more about this in detail in a while.</p>
<p>The <code>new Promise()</code> constructor returns a <code>promise</code> object. As the executor function needs to handle async operations, the returned promise object should be capable of informing when the execution has been started, completed (resolved) or retuned with error (rejected). </p>
<p>A <code>promise</code> object has the following internal properties:</p>
<ol>
<li><code>state</code> – This property can have the following values:</li>
</ol>
<ul>
<li><code>pending</code>: Initially when the executor function starts the execution.</li>
<li><code>fulfilled</code>: When the promise is resolved.</li>
<li><code>rejected</code>: When the promise is rejected.</li>
</ul>
<figcaption>Promise states</figcaption>
</figure>
<p>2. &nbsp;<code>result</code> – This property can have the following values:</p>
<ul>
<li><code>undefined</code>: Initially when the <code>state</code> value is <code>pending</code>.</li>
<li><code>value</code>: When <code>resolve(value)</code> is called.</li>
<li><code>error</code>: When <code>reject(error)</code> is called.</li>
</ul>
<p>These internal properties are code-inaccessible but they are inspectable. This means that we will be able to inspect the <code>state</code> and <code>result</code> property values using the debugger tool, but we will not be able to access them directly using the program.</p>
<figcaption>Able to inspect the internal properties of a promise</figcaption>
</figure>
<p>A promise's state can be <code>pending</code>, <code>fulfilled</code> or <code>rejected</code>. A promise that is either resolved or rejected is called <code>settled</code>.</p>
<figcaption>A settled promise is either fulfilled or rejected</figcaption>
</figure>
<h3 id="how-promises-are-resolved-and-rejected">How promises are resolved and rejected</h3>
<p>Here is an example of a promise that will be resolved (<code>fulfilled</code> state) with the value <code>I am done</code> immediately.</p><pre><code class="language-js">let promise = new Promise(function(resolve, reject) {
resolve("I am done");
});</code></pre>
<p> The promise below will be rejected (<code>rejected</code> state) with the error message <code>Something is not right!</code>.</p><pre><code class="language-js">let promise = new Promise(function(resolve, reject) {
reject(new Error('Something is not right!'));
});</code></pre>
<p>An important point to note:</p>
<blockquote>A Promise executor should call only one <code>resolve</code> or one <code>reject</code>. Once one state is changed (pending =&gt; fulfilled or pending =&gt; rejected), that's all. Any further calls to <code>resolve</code> or <code>reject</code> will be ignored.</blockquote><pre><code class="language-js">let promise = new Promise(function(resolve, reject) {
resolve("I am surely going to get resolved!");
reject(new Error('Will this be ignored?')); // ignored
resolve("Ignored?"); // ignored
});</code></pre>
<p>In the example above, only the first one to resolve will be called and the rest will be ignored.</p>
<h1 id="how-to-handle-a-promise-once-you-ve-created-it">How to handle a Promise once you've created it</h1>
<p>A <code>Promise</code> uses an executor function to complete a task (mostly asynchronously). A consumer function (that uses an outcome of the promise) should get notified when the executor function is done with either resolving (success) or rejecting (error).</p>
<p>The handler methods, <code>.then()</code>, <code>.catch()</code> and <code>.finally()</code>, help to create the link between the executor and the consumer functions so that they can be in sync when a promise <code>resolve</code>s or <code>reject</code>s.</p>
<figcaption>The executor and consumer functions</figcaption>
</figure>
<h2 id="how-to-use-the-then-promise-handler">How to Use the <code>.then()</code> Promise Handler</h2>
<p>The <code>.then()</code> method should be called on the promise object to handle a result (resolve) or an error (reject). </p>
<p>It accepts two functions as parameters. Usually, the <code>.then()</code> method should be called from the consumer function where you would like to know the outcome of a promise's execution.</p><pre><code class="language-js">promise.then(
(result) =&gt; {
console.log(result);
},
(error) =&gt; {
console.log(error);
}
);</code></pre>
<p>If you are interested only in successful outcomes, you can just pass one argument to it, like this:</p><pre><code class="language-js">promise.then(
(result) =&gt; {
console.log(result);
}
);</code></pre>
<p>If you are interested only in the error outcome, you can pass <code>null</code> for the first argument, like this:</p><pre><code class="language-js">promise.then(
null,
(error) =&gt; {
console.log(error)
}
);</code></pre>
<p>However, you can handle errors in a better way using the <code>.catch()</code> method that we will see in a minute.</p>
<p>Let's look at a couple of examples of handling results and errors using the <code>.then</code> and <code>.catch</code> handlers. We will make this learning a bit more fun with a few real asynchronous requests. We will use the <a href="https://pokeapi.co/">PokeAPI</a> to get information about Pokémon and resolve/reject them using Promises.</p>
<p>First, let us create a generic function that accepts a PokeAPI URL as argument and returns a Promise. If the API call is successful, a resolved promise is returned. A rejected promise is returned for any kind of errors. </p>
<p>We will be using this function in several examples from now on to get a promise and work on it.</p>
let promise = new Promise(function (resolve, reject) {
let req = new XMLHttpRequest();
req.open("GET", URL);
req.onload = function () {
if (req.status == 200) {
resolve(req.response);
} else {
reject("There is an Error!");
}
};
req.send();
});
return promise;
}</code></pre>
<figcaption>Utility method to get a Promise</figcaption>
</figure>
<p>Example 1: Get 50 Pokémon's information:</p><pre><code class="language-js">const ALL_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon?limit=50';
// We have discussed this function already!
let promise = getPromise(ALL_POKEMONS_URL);
const consumer = () =&gt; {
promise.then(
(result) =&gt; {
console.log({result}); // Log the result of 50 Pokemons
},
(error) =&gt; {
// As the URL is a valid one, this will not be called.
console.log('We have encountered an Error!'); // Log an error
});
}
consumer();</code></pre>
<p>Example 2: Let's try an invalid URL</p><pre><code class="language-js">const POKEMONS_BAD_URL = 'https://pokeapi.co/api/v2/pokemon-bad/';
// This will reject as the URL is 404
let promise = getPromise(POKEMONS_BAD_URL);
const consumer = () =&gt; {
promise.then(
(result) =&gt; {
// The promise didn't resolve. Hence, it will
// not be executed.
console.log({result});
},
(error) =&gt; {
// A rejected prmise will execute this
console.log('We have encountered an Error!'); // Log an error
}
);
}
consumer();</code></pre>
<h2 id="how-to-use-the-catch-promise-handler">How to Use the <code>.catch()</code> Promise Handler</h2>
<p>You can use this handler method to handle errors (rejections) from promises. The syntax of passing <code>null</code> as the first argument to the <code>.then()</code> is not a great way to handle errors. So we have <code>.catch()</code> to do the same job with some neat syntax:</p><pre><code class="language-js">// This will reject as the URL is 404
let promise = getPromise(POKEMONS_BAD_URL);
const consumer = () =&gt; {
promise.catch(error =&gt; console.log(error));
}
consumer();</code></pre>
<p>If we throw an Error like <code>new Error("Something wrong!")</code> &nbsp;instead of calling the <code>reject</code> from the promise executor and handlers, it will still be treated as a rejection. It means that this will be caught by the <code>.catch</code> handler method. </p>
<p>This is the same for any <em>synchronous</em> exceptions that happen in the promise executor and handler functions.</p>
<p>Here is an example where it will be treated like a reject and the <code>.catch</code> handler method will be called:</p><pre><code class="language-js">new Promise((resolve, reject) =&gt; {
throw new Error("Something is wrong!");// No reject call
}).catch((error) =&gt; console.log(error)); </code></pre>
<h2 id="how-to-use-the-finally-promise-handler">How to Use the <code>.finally()</code> Promise Handler</h2>
<p>The <code>.finally()</code> handler performs cleanups like stopping a loader, closing a live connection, and so on. The <code>finally()</code> method will be called irrespective of whether a promise <code>resolve</code>s or <code>reject</code>s. It passes through the result or error to the next handler which can call a .then() or .catch() again.</p>
<p>Here is an example that'll help you understand all three methods together:</p><pre><code class="language-js">let loading = true;
loading &amp;&amp; console.log('Loading...');
// Gatting Promise
promise = getPromise(ALL_POKEMONS_URL);
promise.finally(() =&gt; {
loading = false;
console.log(`Promise Settled and loading is ${loading}`);
}).then((result) =&gt; {
console.log({result});
}).catch((error) =&gt; {
console.log(error)
});</code></pre>
<p>To explain a bit further:</p>
<ul>
<li>The <code>.finally()</code> method makes loading <code>false</code>.</li>
<li>If the promise resolves, the <code>.then()</code> method will be called. If the promise rejects with an error, the <code>.catch()</code> method will be called. The <code>.finally()</code> will be called irrespective of the resolve or reject.</li>
</ul>
<h1 id="what-is-the-promise-chain">What is the Promise Chain?</h1>
<p>The &nbsp;<code>promise.then()</code> call always returns a promise. This promise will have the <code>state</code> as <code>pending</code> and <code>result</code> as <code>undefined</code>. It allows us to call the next <code>.then</code> method on the new promise.</p>
<p>When the first <code>.then</code> method returns a value, the next <code>.then</code> method can receive that. The second one can now pass to the third <code>.then()</code> and so on. This forms a chain of <code>.then</code> methods to pass the promises down. This phenomenon is called the <code>Promise Chain</code>.</p>
<figcaption>Promise Chain</figcaption>
</figure>
<p>Here is an example:</p><pre><code class="language-js">let promise = getPromise(ALL_POKEMONS_URL);
promise.then(result =&gt; {
let onePokemon = JSON.parse(result).results[0].url;
return onePokemon;
}).then(onePokemonURL =&gt; {
console.log(onePokemonURL);
}).catch(error =&gt; {
console.log('In the catch', error);
});</code></pre>
<p>Here we first get a promise resolved and then extract the URL to reach the first Pokémon. We then return that value and it will be passed as a promise to the next .then() handler function. Hence the output,</p><pre><code class="language-shell">https://pokeapi.co/api/v2/pokemon/1/</code></pre>
<p>The <code>.then</code> method can return either:</p>
<ul>
<li>A value (we have seen this already)</li>
<li>A brand new promise.</li>
</ul>
<p>It can also throw an error.</p>
<p>Here is an example where we have created a promise chain with the <code>.then</code> methods which returns results and a new promise:</p><pre><code class="language-js">// Promise Chain with multiple then and catch
let promise = getPromise(ALL_POKEMONS_URL);
promise.then(result =&gt; {
let onePokemon = JSON.parse(result).results[0].url;
return onePokemon;
}).then(onePokemonURL =&gt; {
console.log(onePokemonURL);
return getPromise(onePokemonURL);
}).then(pokemon =&gt; {
console.log(JSON.parse(pokemon));
}).catch(error =&gt; {
console.log('In the catch', error);
});</code></pre>
<p>In the first <code>.then</code> call we extract the URL and return it as a value. This URL will be passed to the second <code>.then</code> call where we are returning a new promise taking that URL as an argument. </p>
<p>This promise will be resolved and passed down to the chain where we get the information about the Pokémon. Here is the output:</p>
<figcaption>Output of the promise chain call</figcaption>
</figure>
<p>In case there is an error or a promise rejection, the .catch method in the chain will be called.</p>
<p>A point to note: Calling <code>.then</code> multiple times doesn't form a Promise chain. You may end up doing something like this only to introduce a bug in the code:</p><pre><code class="language-js">let promise = getPromise(ALL_POKEMONS_URL);
promise.then(result =&gt; {
let onePokemon = JSON.parse(result).results[0].url;
return onePokemon;
});
promise.then(onePokemonURL =&gt; {
console.log(onePokemonURL);
return getPromise(onePokemonURL);
});
promise.then(pokemon =&gt; {
console.log(JSON.parse(pokemon));
});
</code></pre>
<p>We call the <code>.then</code> method three times on the same promise, but we don't pass the promise down. This is different than the promise chain. In the above example, the output will be an error.</p>
<h1 id="how-to-handle-multiple-promises">How to Handle Multiple Promises</h1>
<p>Apart from the handler methods (.then, .catch, and .finally), there are six static methods available in the Promise API. The first four methods accept an array of promises and run them in parallel.</p>
<ol>
<li>Promise.all</li>
<li>Promise.any</li>
<li>Promise.allSettled</li>
<li>Promise.race</li>
<li>Promise.resolve</li>
<li>Promise.reject</li>
</ol>
<p>Let's go through each one.</p>
<h2 id="the-promise-all-method">The Promise.all() method</h2>
<p><code>Promise.all([promises])</code> accepts a collection (for example, an array) of promises as an argument and executes them in parallel. </p>
<p>This method waits for all the promises to resolve and returns the array of promise results. If any of the promises reject or execute to fail due to an error, all other promise results will be ignored.</p>
<p>Let's create three promises to get information about three Pokémons.</p><pre><code class="language-js">const BULBASAUR_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
const RATICATE_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/raticate';
const KAKUNA_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna';
let promise_1 = getPromise(BULBASAUR_POKEMONS_URL);
let promise_2 = getPromise(RATICATE_POKEMONS_URL);
let promise_3 = getPromise(KAKUNA_POKEMONS_URL);</code></pre>
<p>Use the Promise.all() method by passing an array of promises. </p><pre><code class="language-js">Promise.all([promise_1, promise_2, promise_3]).then(result =&gt; {
console.log({result});
}).catch(error =&gt; {
console.log('An Error Occured');
});</code></pre>
<p>Output:</p>
<p>As you see in the output, the result of all the promises is returned. The time to execute all the promises is equal to the max time the promise takes to run.</p>
<h2 id="the-promise-any-method">The Promise.any() method</h2>
<p><code>Promise.any([promises])</code> - Similar to the <code>all()</code> method, <code>.any()</code> also accepts an array of promises to execute them in parallel. This method doesn't wait for all the promises to resolve. It is done when any one of the promises is settled.</p><pre><code class="language-javascript"> Promise.any([promise_1, promise_2, promise_3]).then(result =&gt; {
console.log(JSON.parse(result));
}).catch(error =&gt; {
console.log('An Error Occured');
});</code></pre>
<p>The output would be the result of any of the resolved promises:</p>
<h2 id="the-promise-allsettled-method">The Promise.allSettled() method</h2>
<p><code>romise.allSettled([promises])</code> - This method waits for all promises to settle(resolve/reject) and returns their results as an array of objects. The results will contain a state (fulfilled/rejected) and value, if fulfilled. In case of rejected status, it will return a reason for the error.</p>
<p>Here is an example of all fulfilled promises:</p><pre><code class="language-js">Promise.allSettled([promise_1, promise_2, promise_3]).then(result =&gt; {
console.log({result});
}).catch(error =&gt; {
console.log('There is an Error!');
});</code></pre>
<p>Output:</p>
<p>If any of the promises rejects, say, the promise_1,</p><pre><code class="language-javascript">let promise_1 = getPromise(POKEMONS_BAD_URL);</code></pre>
<h2 id="the-promise-race-method">The Promise.race() method</h2>
<p><code>Promise.race([promises])</code> – It waits for the first (quickest) promise to settle, and returns the result/error accordingly.</p><pre><code class="language-js">Promise.race([promise_1, promise_2, promise_3]).then(result =&gt; {
console.log(JSON.parse(result));
}).catch(error =&gt; {
console.log('An Error Occured');
});</code></pre>
<p>Output the fastest promise that got resolved:</p>
<h2 id="the-promise-resolve-reject-methods">The Promise.resolve/reject methods</h2>
<p><code>Promise.resolve(value)</code> – It resolves a promise with the value passed to it. It is the same as the following:</p><pre><code class="language-js">let promise = new Promise(resolve =&gt; resolve(value));</code></pre>
<p><code>Promise.reject(error)</code> – It rejects a promise with the error passed to it. It is the same as the following:</p><pre><code class="language-js">let promise = new Promise((resolve, reject) =&gt; reject(error));</code></pre>
<h1 id="can-we-rewrite-the-pizzahub-example-with-promises">Can we rewrite the PizzaHub example with Promises?</h1>
<p>Sure, let's do it. Let us assume that the <code>query</code> method will return a promise. Here is an example query() method. In real life, this method may talk to a database and return results. In this case, it is very much hard-coded but serves the same purpose.</p><pre><code class="language-js">function query(endpoint) {
if (endpoint === `/api/pizzahub/`) {
return new Promise((resolve, reject) =&gt; {
resolve({'shopId': '123'});
})
} else if (endpoint.indexOf('/api/pizzahub/pizza/') &gt;=0) {
return new Promise((resolve, reject) =&gt; {
resolve({pizzas: [{'type': 'veg', 'name': 'margherita', 'id': '123'}]});
})
} else if (endpoint.indexOf('/api/pizzahub/beverages') &gt;=0) {
return new Promise((resolve, reject) =&gt; {
resolve({id: '10', 'type': 'veg', 'name': 'margherita', 'beverage': 'coke'});
})
} else if (endpoint === `/api/order`) {
return new Promise((resolve, reject) =&gt; {
resolve({'type': 'veg', 'name': 'margherita', 'beverage': 'coke'});
})
}
}</code></pre>
<p>Next is the refactoring of our <code>callback hell</code>. To do that, first, we will create a few logical functions:</p><pre><code class="language-js">// Returns a shop id
let getShopId = result =&gt; result.shopId;
// Returns a promise with pizza list for a shop
let getPizzaList = shopId =&gt; {
const url = `/api/pizzahub/pizza/${shopId}`;
return query(url);
}
// Returns a promise with pizza that matches the customer request
let getMyPizza = (result, type, name) =&gt; {
let pizzas = result.pizzas;
let myPizza = pizzas.find((pizza) =&gt; {
return (pizza.type===type &amp;&amp; pizza.name===name);
});
const url = `/api/pizzahub/beverages/${myPizza.id}`;
return query(url);
}
// Returns a promise after Placing the order
let performOrder = result =&gt; {
let beverage = result.id;
return query(`/api/order`, {'type': result.type, 'name': result.name, 'beverage': result.beverage});
}
// Confirm the order
let confirmOrder = result =&gt; {
console.log(`Your order of ${result.type} ${result.name} with ${result.beverage} has been placed!`);
}</code></pre>
<p>Use these functions to create the required promises. This is where you should compare with the <code>callback hell</code> example. This is so nice and elegant.</p><pre><code class="language-js">function orderPizza(type, name) {
query(`/api/pizzahub/`)
.then(result =&gt; getShopId(result))
.then(shopId =&gt; getPizzaList(shopId))
.then(result =&gt; getMyPizza(result, type, name))
.then(result =&gt; performOrder(result))
.then(result =&gt; confirmOrder(result))
.catch(function(error){
console.log(`Bad luck, No Pizza for you today!`);
})
}</code></pre>
<p>Finally, call the orderPizza() method by passing the pizza type and name, like this:</p><pre><code class="language-js">orderPizza('veg', 'margherita');
</code></pre>
<h1 id="what-s-next-from-here">What's next from here?</h1>
<p>If you are here and have read through most of the lines above, congratulations! You should now have a better grip of JavaScript Promises. All the examples used in this article are in this <a href="https://github.com/atapas/js-promise-example">GitHub repository</a>. </p>
<p>Next, you should learn about the <code>async</code> function in JavaScript which simplifies things further. The concept of JavaScript promises is best learned by writing small examples and building on top of them. </p>
<p>Irrespective of the framework or library (Angular, React, Vue, and so on) we use, async operations are unavoidable. This means that we have to understand promises to make things work better. </p>
<p>Also, I'm sure you will find the usage of the <code>fetch</code> method much easier now:</p><pre><code class="language-js">fetch('/api/user.json')
.then(function(response) {
return response.json();
})
.then(function(json) {
console.log(json); // {"name": "tapas", "blog": "freeCodeCamp"}
});</code></pre>
<ul>
<li>The <code>fetch</code> method returns a promise. So we can call the <code>.then</code> handler method on it.</li>
<li>The rest is about the promise chain which we learned in this article.</li>
</ul>
<h1 id="before-we-end-">Before we end...</h1>
<p>Thank you for reading this far! Let's connect. You can @ me on <a href="https://twitter.com/tapasadhikary">Twitter (@tapasadhikary)</a> with comments.</p>
<p>You may also like these other articles:</p>
<ul>
<li><a href="https://blog.greenroots.info/javascript-undefined-and-null-lets-talk-about-it-one-last-time-ckh64kmz807v848s15kdkg3dd">JavaScript undefined and null: Let's talk about it one last time!</a></li>
<li><a href="https://blog.greenroots.info/javascript-equality-comparison-with-and-objectis-ckdpt2ryk01vel9s186ft8cwl">JavaScript: Equality comparison with ==, === and Object.is</a></li>
<li><a href="/news/javascript-this-keyword-binding-rules/">The JavaScript `this` Keyword + 5 Key Binding Rules Explained for JS Beginners</a></li>
<li><a href="/news/javascript-typeof-how-to-check-the-type-of-a-variable-or-object-in-js/">JavaScript TypeOf – How to Check the Type of a Variable or Object in JS</a></li>
</ul>
<p>That's all for now. See you again with my next article soon. Until then, please take good care of yourself.</p>
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
