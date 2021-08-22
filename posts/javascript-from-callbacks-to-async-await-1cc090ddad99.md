---
card: "https://cdn-media-1.freecodecamp.org/images/1*_GgmGZJnFec994dvCDpbWQ.jpeg"
tags: [JavaScript]
description: "JavaScript is synchronous. This means that it will execute yo"
author: "Milad E. Fahmy"
title: "JavaScript — from callbacks to async/await"
created: "2021-08-16T10:22:03+02:00"
modified: "2021-08-16T10:22:03+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-web-development tag-programming tag-learning-to-code ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript — from callbacks to async/await</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*_GgmGZJnFec994dvCDpbWQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*_GgmGZJnFec994dvCDpbWQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*_GgmGZJnFec994dvCDpbWQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*_GgmGZJnFec994dvCDpbWQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*_GgmGZJnFec994dvCDpbWQ.jpeg" alt="JavaScript — from callbacks to async/await">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>JavaScript is synchronous. This means that it will execute your code block by order after <a href="https://scotch.io/tutorials/understanding-hoisting-in-javascript" rel="noopener">hoisting</a>. Before the code executes, <code>var</code> and <code>function</code> declarations are “hoisted” to the top of their scope.</p><p>This is an example of a synchronous code:</p><pre><code class="language-js">console.log('1')
console.log('2')
console.log('3')</code></pre><p>This code will reliably log “1 2 3".</p><p>Asynchronous requests will wait for a timer to finish or a request to respond while the rest of the code continues to execute. Then when the time is right a <a href="https://developer.mozilla.org/en-US/docs/Glossary/Callback_function" rel="noopener">callback </a>will spring these asynchronous requests into action.</p><p>This is an example of an asynchronous code:</p><pre><code class="language-js">console.log('1')
setTimeout(function afterTwoSeconds() {
console.log('2')
}, 2000)
function request(url) {
const xhr = new XMLHttpRequest();
xhr.timeout = 2000;
xhr.onreadystatechange = function(e) {
if (xhr.readyState === 4) {
if (xhr.status === 200) {
// Code here for the server answer when successful
} else {
// Code here for the server answer when not successful
}
}
}
xhr.ontimeout = function () {
// Well, it took to long do some code here to handle that
}
xhr.open('get', url, true)
xhr.send();
}</code></pre><p>Remember that in these examples the important part is not what the end result of the code is. Instead your goal should be to understand the differences of the approaches and how you can leverage them for your development.</p><h3 id="callback"><strong>Callback</strong></h3><p>You can save a reference of a function in a variable when using JavaScript. Then you can use them as arguments of another function to execute later. This is our “callback”.</p><p>One example would be:</p><pre><code class="language-js">// Execute the function "doThis" with another function as parameter, in this case "andThenThis". doThis will execute whatever code it has and when it finishes it should have "andThenThis" being executed.
doThis(andThenThis)
// Inside of "doThis" it's referenced as "callback" which is just a variable that is holding the reference to this function
function andThenThis() {
console.log('and then this')
}
// You can name it whatever you want, "callback" is common approach
function doThis(callback) {
console.log('this first')
// the '()' is when you are telling your code to execute the function reference else it will just log the reference
callback()
}</code></pre><p>Using the <code>callback</code> to solve our problem allows us to do something like this to the <code>request</code> function we defined earlier:</p><pre><code class="language-js">function request(url, callback) {
const xhr = new XMLHttpRequest();
xhr.timeout = 2000;
xhr.onreadystatechange = function(e) {
if (xhr.readyState === 4) {
if (xhr.status === 200) {
callback(null, xhr.response)
} else {
callback(xhr.status, null)
}
}
}
xhr.ontimeout = function () {
console.log('Timeout')
}
xhr.open('get', url, true)
xhr.send();
}</code></pre><p>Our function for the request will now accept a <code>callback</code> so that when a <code>request</code> is made it will be called in case of error and in case of success.</p><pre><code class="language-js">const userGet = `https://api.github.com/search/users?page=1&amp;q=daspinola&amp;type=Users`
request(userGet, function handleUsersList(error, users) {
if (error) throw error
const list = JSON.parse(users).items
list.forEach(function(user) {
request(user.repos_url, function handleReposList(err, repos) {
if (err) throw err
// Handle the repositories list here
})
})
})</code></pre><p>Breaking this down:</p><ul><li>We make a request to get a user’s repositories</li><li>After the request is complete we use callback <code>handleUsersList</code></li><li>If there is no error then we parse our server response into an object using <code>JSON.parse</code></li><li>Then we iterate our user list since it can have more than one<br>For each user we request their repositories list.<br>We will use the url that returned per user in our first response<br>We call <code>repos_url</code>as the url for our next requests or from the first response</li><li>When the request has completed the callback, we will call <br>This will handle either its error or the response with the list of repositories for that user</li></ul><p><strong>Note</strong>: Sending the error first as parameter is a common practice especially when using Node.js.</p><p>A more “complete” and readable approach would be to have some error handling. We would keep the callback separate from the request execution.</p><p>Something like this:</p><pre><code class="language-js">try {
request(userGet, handleUsersList)
} catch (e) {
console.error('Request boom! ', e)
}
function handleUsersList(error, users) {
if (error) throw error
const list = JSON.parse(users).items
list.forEach(function(user) {
request(user.repos_url, handleReposList)
})
}
function handleReposList(err, repos) {
if (err) throw err
// Handle the repositories list here
console.log('My very few repos', repos)
// code here
if (codeIsFine) {
resolve('fine')
} else {
reject('error')
}
})
myPromise
.then(function whenOk(response) {
console.log(response)
return response
})
.catch(function notOk(err) {
console.error(err)
})</code></pre><p>Let us decompose it:</p><ul><li>A promise is initialized with a <code>function</code> that has <code>resolve</code> and <code>reject</code> statements</li><li>Make your async code inside the <code>Promise</code> function<br><code>resolve</code> when everything happens as desired<br>Otherwise <code>reject</code></li><li>When a <code>resolve</code> is found the<code> .then</code> method will execute for that <code>Promise</code><br>When a <code>reject </code>is found the <code>.catch </code>will be triggered</li></ul><p>Things to bear in mind:</p><ul><li><code>resolve</code> and <code>reject</code> only accept one parameter<br><code>resolve(‘yey’, ‘works’)</code> will only send ‘yey’ to the <code>.then</code> callback function</li><li>If you chain multiple <code>.then</code><br>Add a <code>return</code> if you want the next <code>.then</code> value not to be <code>undefined</code></li><li>When a <code>reject</code> is caught with <code>.catch</code> if you have a <code>.then</code> chained to it<br>It will still execute that <code>.then</code><br>You can see the <code>.then</code> as an “always executes” and you can check an example in this <a href="https://medium.com/@daspinola/you-are-completely-right-when-the-article-was-written-i-believe-my-thoughts-were-of-a-scenario-75a4c6944356" rel="noopener">comment</a></li><li>With a chain on <code>.then</code> if an error happens on the first one<br>It will skip subsequent <code>.then</code> until it finds a <code>.catch</code></li><li>A promise has three states<br><strong>pending</strong></li><li>When waiting for a <code>resolve</code> or <code>reject</code> to happen<br><strong>resolved </strong><br><strong>rejected</strong></li><li>Once it’s in a <code>resolved</code> or <code>rejected</code> state<br>It cannot be changed</li></ul><p><strong>Note</strong>: You can create promises without the function at the moment of declarations. The way that I’m showing it is only a common way of doing it.</p><p>“Theory, theory, theory…I’m confused” you may say.</p><p>Let’s use our request example with a promise to try to clear things up:</p><pre><code class="language-js">function request(url) {
return new Promise(function (resolve, reject) {
const xhr = new XMLHttpRequest();
xhr.timeout = 2000;
xhr.onreadystatechange = function(e) {
if (xhr.readyState === 4) {
if (xhr.status === 200) {
resolve(xhr.response)
} else {
reject(xhr.status)
}
}
}
xhr.ontimeout = function () {
reject('timeout')
}
xhr.open('get', url, true)
xhr.send();
})
const myPromise = request(userGet)
console.log('will be pending when logged', myPromise)
myPromise
.then(function handleUsersList(users) {
console.log('when resolve is found it comes here with the response, in this case users ', users)
const list = JSON.parse(users).items
return Promise.all(list.map(function(user) {
return request(user.repos_url)
}))
})
.then(function handleReposList(repos) {
console.log('All users repos in an array', repos)
})
.catch(function handleErrors(error) {
console.log('when a reject is executed it will come here ignoring the then statement ', error)
})</code></pre><p>This is how we solve racing and some of the error handling problems. The code is still a bit convoluted. But its a way to show you that this approach can also create readability problems.</p><p>A quick fix would be to separate the callbacks like so:</p><pre><code class="language-js">const userGet = `https://api.github.com/search/users?page=1&amp;q=daspinola&amp;type=Users`
const userRequest = request(userGet)
// Just by reading this part out loud you have a good idea of what the code does
userRequest
.then(handleUsersList)
.then(repoRequest)
.then(handleReposList)
.catch(handleErrors)
function handleUsersList(users) {
return JSON.parse(users).items
}
function repoRequest(users) {
return Promise.all(users.map(function(user) {
return request(user.repos_url)
}))
}
function handleReposList(repos) {
console.log('All users repos in an array', repos)
}
function handleErrors(error) {
console.error('Something went wrong ', error)
}</code></pre><p>By looking at what <code>userRequest</code> is waiting in order with the <code>.then</code> you can get a sense of what we expect of this code block. Everything is more or less separated by responsibility.</p><p>This is “scratching the surface” of what Promises are. To have a great insight on how they work I cannot recommend enough this <a href="https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html" rel="noopener">article</a>.</p><h3 id="generators"><strong>Generators</strong></h3><p>Another approach is to use the generators. This is a bit more advance so if you are starting out feel free to jump to the next topic.</p><p>One use for generators is that they allow you to have async code looking like sync.</p><p>They are represented by a <code>*</code> in a function and look something like:</p><pre><code class="language-js">function* foo() {
yield 1
const args = yield 2
console.log(args)
}
var fooIterator = foo()
console.log(fooIterator.next().value) // will log 1
console.log(fooIterator.next().value) // will log 2
fooIterator.next('aParam') // will log the console.log inside the generator 'aParam'</code></pre><p>Instead of returning with a <code>return</code>, generators have a <code>yield</code> statement. It stops the function execution until a <code>.next</code> is made for that function iteration. It is similar to <code>.then</code> promise that only executes when resolved comes back.</p><p>Our request function would look like this:</p><pre><code class="language-js">function request(url) {
return function(callback) {
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(e) {
if (xhr.readyState === 4) {
if (xhr.status === 200) {
callback(null, xhr.response)
} else {
callback(xhr.status, null)
}
}
}
xhr.ontimeout = function () {
console.log('timeout')
}
xhr.open('get', url, true)
xhr.send()
}
}</code></pre><p>We want to have the <code>url</code> as an argument. But instead of executing the request out of the gate we want it only when we have a callback to handle the response.</p><p>Our <code>generator</code> would be something like:</p><pre><code class="language-js">function* list() {
const userGet = `https://api.github.com/search/users?page=1&amp;q=daspinola&amp;type=Users`
const users = yield request(userGet)
yield
for (let i = 0; i&lt;=users.length; i++) {
yield request(users[i].repos_url)
}
}</code></pre><p>It will:</p><ul><li>Wait until the first <code>request </code>is prepared</li><li>Return a <code>function</code> reference expecting a <code>callback</code> for the first <code>request</code><br>Our <code>request</code> function accepts a <code>url</code><br>and returns a <code>function</code> that expects a <code>callback</code></li><li>Expect a <code>users</code> to be sent in the next <code>.next</code></li><li>Iterate over <code>users</code></li><li>Wait for a <code>.next</code> for each of the <code>users</code></li><li>Return their respective callback function</li></ul><p>So an execution of this would be:</p><pre><code class="language-js">try {
const iterator = list()
iterator.next().value(function handleUsersList(err, users) {
if (err) throw err
const list = JSON.parse(users).items
// send the list of users for the iterator
iterator.next(list)
list.forEach(function(user) {
iterator.next().value(function userRepos(error, repos) {
if (error) throw repos
// Handle each individual user repo here
console.log(user, JSON.parse(repos))
})
})
})
} catch (e) {
console.error(e)
}</code></pre><p>We could separate the callback functions like we did previously. You get the deal by now, a takeaway is that we now can handle each individual user repository list individually.</p><p>I have mixed felling about generators. On one hand I can get a grasp of what is expected of the code by looking at the generator.</p><p>But its execution ends up having similar problems to the callback hell.</p><p>Like <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function" rel="noopener">async/await</a>, a compiler is recommended. This is because it isn’t supported in older browser versions.</p><p>Also it isn’t that common in my experience. So it may generate confusing in codebases maintained by various developers.</p><p>An awesome insight of how generators work can be found in this <a href="https://codeburst.io/generators-in-javascript-1a7f9f884439" rel="noopener">article.</a> And here is another great <a href="http://chrisbuttery.com/articles/synchronous-asynchronous-javascript-with-es6-generators/" rel="noopener">resource</a>.</p><h3 id="async-await"><strong>Async/Await</strong></h3><p>This method seems like a mix of generators with promises. You just have to tell your code what functions are to be <code>async</code>. And what part of the code will have to <code>await</code> for that <code>promise</code> to finish.</p><pre><code class="language-js">sumTwentyAfterTwoSeconds(10)
.then(result =&gt; console.log('after 2 seconds', result))
async function sumTwentyAfterTwoSeconds(value) {
const remainder = afterTwoSeconds(20)
return value + await remainder
}
function afterTwoSeconds(value) {
return new Promise(resolve =&gt; {
setTimeout(() =&gt; { resolve(value) }, 2000);
});
}</code></pre><p>In this scenario:</p><ul><li>We have <code>sumTwentyAfterTwoSeconds</code> as being an async function</li><li>We tell our code to wait for the <code>resolve</code> or <code>reject</code> for our promise function <code>afterTwoSeconds</code></li><li>It will only end up in the <code>.then</code> when the <code>await</code> operations finish<br>In this case there is only one</li></ul><p>Applying this to our <code>request</code> we leave it as a <code>promise</code> as seen earlier:</p><pre><code class="language-js">function request(url) {
return new Promise(function(resolve, reject) {
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(e) {
if (xhr.readyState === 4) {
if (xhr.status === 200) {
resolve(xhr.response)
} else {
reject(xhr.status)
}
}
}
xhr.ontimeout = function () {
reject('timeout')
}
xhr.open('get', url, true)
xhr.send()
})
}</code></pre><p>We create our <code>async</code> function with the needed awaits like so:</p><pre><code class="language-js">async function list() {
const userGet = `https://api.github.com/search/users?page=1&amp;q=daspinola&amp;type=Users`
const users = await request(userGet)
const usersList = JSON.parse(users).items
usersList.forEach(async function (user) {
const repos = await request(user.repos_url)
handleRepoList(user, repos)
})
}
function handleRepoList(user, repos) {
const userRepos = JSON.parse(repos)
// Handle each individual user repo here
console.log(user, userRepos)
}</code></pre><p>So now we have an async <code>list</code> function that will handle the requests. Another async is needed in the <code>forEach</code> so that we have the list of<code> repos</code> for each user to manipulate.</p><p>We call it as:</p><pre><code class="language-js">list()
.catch(e =&gt; console.error(e))</code></pre><p>This and the promises approach are my favorites since the code is easy to read and change. You can read about async/await more in depth <a href="https://davidwalsh.name/async-await" rel="noopener">here</a>.</p><p>A downside of using async/await is that it isn’t supported in the front-end by older browsers or in the back-end. You have to use the Node 8.</p><p>You can use a compiler like <a href="https://babeljs.io/" rel="noopener">babel</a> to help solve that.</p><h3 id="-solution-"><strong>“Solution”</strong></h3><p>You can see the <a href="https://codepen.io/daspinola/pen/EvOEKB" rel="noopener">end code</a> accomplishing our initial goal using async/await in this snippet.</p><p>A good thing to do is to try it yourself in the various forms referenced in this article.</p><h3 id="conclusion"><strong>Conclusion</strong></h3><p>Depending on the scenario you might find yourself using:</p><ul><li>async/await</li><li>callbacks</li><li>mix</li></ul><p>It’s up to you what fits your purposes. And what lets you maintain the code so that it is understandable to others and your future self.</p><p><strong>Note:</strong> Any of the approaches become slightly less verbose when using the alternatives for requests like <code>$.ajax</code> and <code>fetch</code>.</p><p>Let me know what you would do different and different ways you found to make each approach more readable.</p><p>This is Article 11 of 30. It is part of a project for publishing an article at least once a week, from idle thoughts to tutorials. Leave a comment, follow me on <a href="undefined" rel="noopener">Diogo Spínola</a> and then go back to your brilliant project!</p>
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
