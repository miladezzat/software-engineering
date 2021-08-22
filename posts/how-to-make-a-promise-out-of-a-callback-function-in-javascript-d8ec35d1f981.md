---
card: "https://cdn-media-1.freecodecamp.org/images/1*7EYmjkeLQs8QXSLr_6iTMg.jpeg"
tags: [JavaScript]
description: "by Adham El Banhawy"
author: "Milad E. Fahmy"
title: "How to make a Promise out of a Callback function in JavaScript"
created: "2021-08-16T10:12:26+02:00"
modified: "2021-08-16T10:12:26+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-promises tag-web-development tag-backend tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to make a Promise out of a Callback function in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*7EYmjkeLQs8QXSLr_6iTMg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*7EYmjkeLQs8QXSLr_6iTMg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*7EYmjkeLQs8QXSLr_6iTMg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*7EYmjkeLQs8QXSLr_6iTMg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*7EYmjkeLQs8QXSLr_6iTMg.jpeg" alt="How to make a Promise out of a Callback function in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
if(error) throw new Error("Error while fetching fetching data");
MongoClient.connect(mongoUrl, function(error, client) {
if(error) throw new Error("MongoDB connection error");
console.log("Connected successfully to server");
const db = client.db("dbName");
// Do some application logic
client.close();
});
});</code></pre><p>Okay…so where’s the problem? Well, for one thing, the readability of the code suffers from this technique.</p><p>It may seem OK at first when the codebase is small. But this doesn’t scale well, especially if you go more layers deeper into the nested callbacks.</p><p>You will end up with a lot of closing brackets and curly braces that will confuse you and other developers no matter how neatly formatted your code is. There is a website called <a href="http://callbackhell.com/" rel="noopener">callbackhell</a> that addresses this specific issue.</p><p>I hear some of you, including my naïve past self, telling me wrap it in an <code>async</code><strong> </strong>function then <code>await </code>the callback function. This just doesn’t work.</p><p>If there is any code block after the the function that uses callbacks, that code block will execute and <strong>will NOT</strong> <strong>wait</strong> for the callback.</p><p>Here’s that mistake that I did before:</p><pre><code class="language-js">var request = require('request');
// WRONG
async function(){
let joke;
let url = "https://api.chucknorris.io/jokes/random"
await request.get(url, function(error, response, data) {
if(error) throw new Error("Error while fetching fetching data");
let content = JSON.parse(data);
joke = content.value;
});
console.log(joke); // undefined
};
// Wrong
async function(){
let joke;
let url = "https://api.chucknorris.io/jokes/random"
request.get(url, await function(error, response, data) {
if(error) throw new Error("Error while fetching fetching data");
let content = JSON.parse(data);
joke = content.value;
});
console.log(joke); // undefined
};</code></pre><p>Some more experienced devs might say “Just use a different library that uses promises to do the same thing, like <a href="https://www.npmjs.com/package/axios" rel="noopener">axios</a>,<em> </em>or just use <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" rel="noopener">fetch</a>”<em>. </em>Sure I can in that scenario, but that’s just running away from the problem.</p><p>Besides, this is just an example. Sometimes you can be locked into using a library that doesn’t support promises with no alternatives. Like using software development kits (SDKs) to communicate with platforms like Amazon Web Services (AWS), Twitter, or Facebook.</p><p>Sometimes, even using a callback to do a very simple call with a quick I/O or CRUD operation is fine, and no other logic depends on its results. But you might be constrained by the runtime environment like in a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-introduction-function.html" rel="noopener">Lambda function</a> which would kill all process once the main thread finishes, regardless of any asynchronous calls that did not complete.</p><h3 id="solution-1-easy-use-node-s-util-module">Solution 1 (easy): Use Node’s “util” module</h3><p>The solution is surprisingly simple. Even if you’re a little uncomfortable with the idea of promises in JavaScript, you will love how you can solve this issue using them.</p><p>As pointed out by Erop and Robin in the comments, Nodejs version 8 and above now support turning callback functions into promises using the built-in <strong>util</strong> module.</p><pre><code class="language-js">const request = require('request');
const util = require('util');
const url = "https://api.chucknorris.io/jokes/random";
// Use the util to promisify the request method
const getChuckNorrisFact = util.promisify(request);
// Use the new method to call the API in a modern then/catch pattern
getChuckNorrisFact(url).then(data =&gt; {
let content = JSON.parse(data.body);
console.log('Joke: ', content.value);
}).catch(err =&gt; console.log('error: ', err))</code></pre><p>The above code solves the problem neatly using the <a href="https://nodejs.org/docs/latest-v8.x/api/util.html#util_util_promisify_original" rel="noopener"><strong>util.promisify</strong></a><strong> </strong>method available from nodejs core library.</p><p>All you have to do is use the callback function as an argument to util.promisify, and store it an a variable. In my case, that’s <em>getChuckNorrisFact</em>.<br>Then you use that variable as a function that you can use like a promise with the <strong>.then()</strong> and the <strong>.catch()</strong> methods.</p><h3 id="solution-2-involved-turn-the-callback-into-a-promise">Solution 2 (involved): Turn the Callback into a Promise</h3><p>Sometimes, using the request and util libraries is just not possible, whether it’s because of a legacy environment/code base or doing the requests from the client-side browser, you have to wrap a promise around your callback function.</p><p>Let’s take the Chuck Norris example above, and turn that into a promise.</p><pre><code class="language-js">var request = require('request');
let url = "https://api.chucknorris.io/jokes/random";
// A function that returns a promise to resolve into the data //fetched from the API or an error
let getChuckNorrisFact = (url) =&gt; {
return new Promise(
(resolve, reject) =&gt; {
request.get(url, function(error, response, data){
if (error) reject(error);
let content = JSON.parse(data);
let fact = content.value;
resolve(fact);
})
}
);
};
getChuckNorrisFact(url).then(
fact =&gt; console.log(fact) // actually outputs a string
).catch(
error =&gt; console.(error)
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
