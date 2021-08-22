---
card: "/images/default.jpg"
tags: [JavaScript]
description: There’s a special syntax you can use in JavaScript that makes
author: "Milad E. Fahmy"
title: "How to Use Async/Await to Write Better JavaScript Code"
created: "2021-08-15T19:23:41+02:00"
modified: "2021-08-15T19:23:41+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-asyncawait ">
<header class="post-full-header">
<h1 class="post-full-title">How to Use Async/Await to Write Better JavaScript Code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/06/Blue-and-White-Syringe-Corporate-Clean-Vaccine-Information-General-Health-Banner-1.png 300w,
/news/content/images/size/w600/2021/06/Blue-and-White-Syringe-Corporate-Clean-Vaccine-Information-General-Health-Banner-1.png 600w,
/news/content/images/size/w1000/2021/06/Blue-and-White-Syringe-Corporate-Clean-Vaccine-Information-General-Health-Banner-1.png 1000w,
/news/content/images/size/w2000/2021/06/Blue-and-White-Syringe-Corporate-Clean-Vaccine-Information-General-Health-Banner-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/06/Blue-and-White-Syringe-Corporate-Clean-Vaccine-Information-General-Health-Banner-1.png" alt="How to Use Async/Await to Write Better JavaScript Code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>There’s a special syntax you can use in JavaScript that makes working with promises easier. It's called “async/await", and it’s surprisingly straightforward to understand and use.</p>
<p>In this article, we'll discuss:</p>
<ol>
<li>What are asynchronus functions?</li>
<li>How promises work in JavaScript</li>
<li>Async/Await basics</li>
<li>How to use async/await with error handling</li>
<li>How an async function returns a promise</li>
<li>How to use <code>promise.all()</code></li>
</ol>
<p>So let's dive in.</p>
<h2 id="whatareasynchronusfunctions">What are asynchronus functions?</h2>
<p>The term asynchronus refers to a situation where two or more events don't happen at the same time. Or in simple terms, multiple related things can happen without waiting for the previous action to complete.</p>
<p>In JavaScript, <strong>asynchronus functions</strong> are really important because of the <strong>single threaded nature of JavaScript</strong>. With the help of asynchrnous functions, JavaScript's event loop can take care of other things when the function is requesting some other resource.</p>
<p>You'd use aysnchronous code, for example, in API's that fetch a file from the network, when you're accessing a database and returning data from it, when you're accessing a video stream from a web cam, or if you're broadcasting the display to a VR headset.</p>
<h2 id="howpromisesworkinjavascript">How Promises Work in JavaScript</h2>
<p>The <strong><code>Promise</code></strong> object in JavaScript represents an asynchronous operation (and its resulting value) that will eventually complete (or fail).</p>
<p>A <code>Promise</code> can be in one of these states:</p>
<ul>
<li><em>pending</em>: initial state, neither fulfilled nor rejected.</li>
<li><em>fulfilled</em>: meaning that the operation was completed successfully.</li>
<li><em>rejected</em>: meaning that the operation failed.</li>
</ul>
<p><img src="https://www.freecodecamp.org/news/content/images/2021/06/Promise-in-Javascript.jpg" alt="Promise-in-Javascript"></p>
<p>The function passed to a new promise is called the executor. It's arguments (<code>resolve</code> and <code>reject</code>) are called callbacks that JavaScript itself provides. When the executor gets the result, whether it's now or later it doesn’t matter – it should call one of these callbacks.</p>
<p>Here's an example of a <strong>Promise</strong>:</p>
<pre><code class="language-js">const myPromise = new Promise(function(resolve, reject) =&gt; {
setTimeout(() =&gt; {
resolve('foo');
}, 300);
});
</code></pre>
<p>And here are examples of a <strong>fulfilled vs a rejected</strong> promise:</p>
<pre><code class="language-js">// fulfilled promise
let  promise = new  Promise(function(resolve, reject) {
setTimeout(()  =&gt; resolve(new Error("done!")), 1000);
});
// resolve runs the first function in .then
promise.then(
result =&gt; alert(result), // shows "done!" after 1 second
error =&gt; alert(error) // doesn't run
);
</code></pre>
<pre><code class="language-js">// rejected promise
let promise =  new  Promise(function(resolve, reject)  {
setTimeout(()  =&gt; reject(new Error("Whoops!")), 1000);
});
// reject runs the second function in .then
promise.then(
result =&gt; alert(result), // doesn't run
error =&gt; alert(error) // shows "Error: Whoops!" after 1 second
);
</code></pre>
<h2 id="asyncawaitbasicsinjavascript">Async/Await Basics in JavaScript</h2>
<p>There are two parts to using <code>async/await</code> in your code.</p>
<p>First of all, we have the <code>async</code> keyword, which you put in front of a function declaration to turn it into an async function.</p>
<p>An async function is a function that knows to expect the possibility that you'll use the <code>await</code> keyword to invoke asynchronous code.</p>
<blockquote>
<p>The <code>async</code> keyword is added to functions to tell them to return a promise rather than directly returning the value.</p>
</blockquote>
<pre><code class="language-jsx">const loadData = async () =&gt; {
const url = "https://jsonplaceholder.typicode.com/todos/1";
const res = await fetch(url);
const data = await res.json();
console.log(data);
};
loadData();
</code></pre>
<pre><code class="language-jsx">// Console output
{
completed: false,
id: 1,
title: "delectus aut autem",
userId: 1
}
</code></pre>
<h2 id="howtouseasyncawaitwitherrorhandling">How to Use Async/Await with Error Handling</h2>
<p>We can handle errors using a try catch block like this:</p>
<pre><code class="language-jsx">const loadData = async () =&gt; {
try{
const url = "https://jsonplaceholder.typicode.com/todos/1";
const res = await fetch(url);
const data = await res.json();
console.log(data);
} catch(err) {
console.log(err)
}
};
loadData();
</code></pre>
<p>The above try-catch will only handle errors while fetching data such as the wrong syntax, wrong domain names, network errors, and so on.</p>
<p>When you want to handle an error message from the API response code, you can use <code>res.ok</code> (<code>res</code> is the varaiable to which response is stored). It will give you a Boolean with the value true if the response code is between 200 and 209.</p>
<pre><code class="language-jsx">const loadData = async () =&gt; {
try{
const url = "https://jsonplaceholder.typicode.com/todos/qwe1";
const res = await fetch(url);
if(res.ok){
const data = await res.json();
console.log(data);
} else {
console.log(res.status); // 404
}
} catch(err) {
console.log(err)
}
};
loadData();
// OUTPUT
// 404
</code></pre>
<h2 id="howanasyncfunctionreturnsapromise">How an Async Function Returns a Promise</h2>
<p>This is one of the traits of async functions — their return values are guaranteed to be converted to promises. To handle data returned from an <code>async</code> function we can use a <code>then</code> keyword to get the data.</p>
<pre><code class="language-jsx">const loadData = async () =&gt; {
try{
const url = "https://jsonplaceholder.typicode.com/todos/1";
const res = await fetch(url);
const data = await res.json();
return data
} catch(err) {
console.log(err)
}
};
const data = loadData().then(data =&gt; console.log(data));
</code></pre>
<p><strong>💡 PRO TIP :</strong><br>
if you want to use an <code>async-await</code> to handle the returned data you can use an IIFE, but it is only available in Node 14.8 or higher.</p>
<pre><code class="language-jsx">// use an async IIFE
(async () =&gt; {
const data = await loadData();
console.log(data);
})();
</code></pre>
<p><code>await</code> only works inside async functions within regular JavaScript code. But you can use it on its own with <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules">JavaScript modules</a>.</p>
<h2 id="howtousepromiseallinjavascript">How to Use Promise.all() in JavaScript</h2>
<p><code>Promise.all()</code> comes in handy when we want to call multiple API's.</p>
<p>Using a traditional <code>await</code> method, we have to wait for each request to complete before going on to the next request. This becomes a problem when each request takes some time to complete. This can easily add up and slow things down.</p>
<p>Using <code>Promise.all()</code>, we can call each of these API's in parallel. (This is a bit of an oversimplification – for more details checkout <a href="https://anotherdev.xyz/promise-all-runs-in-parallel/#:~:text=all%20doesn't%20guarantee%20you,are%20done%20with%20their%20job.">this</a> amazing article).</p>
<blockquote>
<p>Please be carefull when using <code>Promise.all</code>, though – if one of the await requests fails, it will fail altogether.</p>
</blockquote>
<pre><code class="language-js">const loadData = async () =&gt; {
try{
const url1 = "https://jsonplaceholder.typicode.com/todos/1";
const url2 = "https://jsonplaceholder.typicode.com/todos/2";
const url3 = "https://jsonplaceholder.typicode.com/todos/3";
const results = await Promise.all([
fetch(url1),
fetch(url2),
fetch(url3)
]);
const dataPromises = await results.map(result =&gt; result.json());
const finalData = Promise.all(dataPromises);
return finalData
} catch(err) {
console.log(err)
}
};
const data = loadData().then(data =&gt; console.log(data));
</code></pre>
<pre><code class="language-jsx">// Console output
[{
completed: false,
id: 1,
title: "delectus aut autem",
userId: 1
}, {
completed: false,
id: 2,
title: "quis ut nam facilis et officia qui",
userId: 1
}, {
completed: false,
id: 3,
title: "fugiat veniam minus",
userId: 1
}]
</code></pre>
<h2 id="conclusion">Conclusion</h2>
<p>In most situations we can use <code>async/await</code> with a <code>try catch</code> block to handle both results and errors.</p>
<p>At the moment, <code>await</code> won’t work in top-level code. This means that when we’re outside any <code>async</code> function, we’re syntactically unable to use <code>await</code>. In this case, it’s regular practice to add <code>.then/catch</code> to handle the final result or falling-through error.</p>
<blockquote>
<p>Top level <code>await</code> is available from Node.js <code>v14.8</code> onwards and in ES modules only. Read more here: <a href="https://www.stefanjudis.com/today-i-learned/top-level-await-is-available-in-node-js-modules/#top-level-%60await%60-is-available-%22unflagged%22-in-node.js-since-%60v14.8%60">Top-level await is available in Node.js modules | Stefan Judis Web Development</a></p>
</blockquote>
<h3 id="resourcesthathelpedme">Resources that helped me</h3>
<ul>
<li><a href="https://javascript.info/promise-basics">Promises (javascript.info)</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing">Introducing asynchronous JavaScript - Learn web development | MDN (mozilla.org)</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise - JavaScript | MDN (mozilla.org)</a></li>
</ul>
<h2 id="beforeweend">Before We End...</h2>
<p>👋 Do you want to code and learn along with me? You can find the same content here in my <a href="https://milindsoorya.site/">blog</a>. Just open up your favorite code editor and get started.</p>
<div class="kg-bookmark-content">
<div class="kg-bookmark-title">Milind Soorya</div>
<div class="kg-bookmark-description">I’m Milind. I’m a full-stack developer and blogger. On this site we explore the strategies and tools that help us to code better and cleaner.</div>
<div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="https://milindsoorya.site/favicon-32x32.png"></div>
</div>
</a></figure>
<p>Let's connect. You will find me active on <a href="https://twitter.com/milindsoorya">Twitter (@milindsoorya)</a>. Please feel free to give a follow.</p>
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
