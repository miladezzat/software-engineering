---
card: "https://cdn-media-1.freecodecamp.org/images/1*XXsfkhk3zt2Y70p2FFeutQ.jpeg"
tags: [JavaScript]
description: What is your worst nightmare?
author: "Milad E. Fahmy"
title: "How to create a custom fetch API from XMLHttpRequest"
created: "2021-08-15T19:40:51+02:00"
modified: "2021-08-15T19:40:51+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-software-development tag-software-engineering tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to create a custom fetch API from XMLHttpRequest</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*XXsfkhk3zt2Y70p2FFeutQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*XXsfkhk3zt2Y70p2FFeutQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*XXsfkhk3zt2Y70p2FFeutQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*XXsfkhk3zt2Y70p2FFeutQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*XXsfkhk3zt2Y70p2FFeutQ.jpeg" alt="How to create a custom fetch API from XMLHttpRequest">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>What is your worst nightmare?</p>
<p>That sounded dark, but it’s not a rhetorical question. I really want to know because I am about to tell you mine. Along the way, we will learn some things like how the fetch API works and also how function constructors work.</p>
<p>Sorry I digress, back to my worst nightmare. If you had asked me that question last week it would be the below list in no particular order:</p>
<ul>
<li>Writing Pre-ES6 syntax</li>
<li>No fetch API</li>
<li>No Transpiler (Babel/Typescript)</li>
<li><a href="https://en.wikipedia.org/wiki/Robert_C._Martin" rel="noopener">Uncle Bob</a> said that I’m a disappointment (Kidding)</li>
</ul>
<p>If your list matches mine then I have to say that you are a very weird person. As luck would have it I was called to work on a project that brought to life my nightmare list (excluding the last one). I was to add a new feature to the application. It was a legacy codebase that used purely pre-es6 syntax and XMLHttpRequest (the horror) for its AJAX requests.</p>
<p>So in a bid to make the experience palatable, I decided to create a function that abstracts all the AJAX requests I would be making and expose APIs that mimics the new <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" rel="noopener">fetch API</a> (well not really). This is also after I watched the <a href="https://frontendmasters.com/courses/javascript-new-hard-parts/" rel="noopener">Javascript: The new hard parts</a> video on frontend masters where an amazing explanation of how the fetch API works under the hood was given. Let’s begin.</p>
<p>First, I had to look up how <a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest" rel="noopener">XMLHttpRequest</a> works. Then I started writing the function. My first iteration looked like this:</p><pre><code class="language-javascript">"use strict";
function fetch() {
var url = arguments.length &gt; 0 &amp;&amp; arguments[0] !== undefined ? arguments[0] : '';
var options = arguments.length &gt; 1 &amp;&amp; arguments[1] !== undefined ? arguments[1] : {};
var xhr = new XMLHttpRequest();
var onFufillment = [];
var onError = [];
var onCompletion = [];
var method = "GET" || options.method;
xhr.onreadystatechange = function () {
var _data = this;
if (this.readyState == 4 &amp;&amp; this.status == 200) {
// Action to be performed when the document is read;
onFufillment.forEach(function (callback) {
callback(_data);
});
onCompletion.forEach(function (callback) {
callback(_data);
});
} else if (this.readyState == 4 &amp;&amp; this.status !== 200) {
onError.forEach(function (callback) {
callback(_data);
});
onCompletion.forEach(function (callback) {
callback(_data);
});
}
};
xhr.open(method, url, true);
xhr.send();
return {
then: function then(fufillmentFunction) {
onFufillment.push(fufillmentFunction);
},
catch: function _catch(errorFunction) {
onError.push(errorFunction);
},
finally: function _finally(completionFunction) {
onCompletion.push(completionFunction);
}
};
}</code></pre>
<p>Let me work through what the function does:</p>
<ul>
<li>We are checking if the <code>url</code> argument is passed into the function. Defaulting to an empty string if nothing is passed</li>
<li>We are also doing the same thing for the <code>options</code> argument. Defaulting to an empty object if nothing is passed</li>
<li>Then we create a new instance of the XMLHttpRequest</li>
<li>We create 4 variables <code>onFufillment, onError, onCompletion and method</code></li>
<li><code>onFufillment</code> is an array that stores all the functions passed into the <code>then</code> method</li>
<li><code>onError</code> is an array that stores all the functions passed into the <code>catch</code> method</li>
<li><code>onCompletion</code> is an array that stores all the functions passed into the <code>finally</code> method</li>
<li><code>method</code> is used to store the HTTP method that will be used, it defaults to <code>GET</code></li>
<li>We then pass a function into the <code>onreadystatechange</code> method of <code>xhr</code> which will be called when the state of the request changes</li>
<li>In the function, we save <code>this</code> into a <code>_data</code> variable so that it can be passed into the forEach functions without losing its context (I know <code>this</code> is annoying)</li>
<li>We then check if the request is completed (<code>readyState == 4</code> ) and if the request is successful, then we loop through <code>onFufillment and onCompletion</code> arrays, calling each function and passing <code>_data</code> into it</li>
<li>If the request fails we do the same thing with the <code>onCompletion and onError</code> arrays</li>
<li>Then we send off the request with the passed in parameters</li>
<li>After that, we return an object containing three functions, then. <code>catch and finally</code> which have the same names as the fetch API.</li>
<li><code>catch</code> pushes the function that is passed as an argument into the <code>onError</code> array</li>
<li><code>then</code> does the same thing with the <code>onFufillment</code> array</li>
<li><code>finally</code> does the same with the <code>onCompletion</code> array</li>
</ul>
<p>The usage of this API will look like this:</p><pre><code class="language-javascript">var futureData = fetch('https://jsonplaceholder.typicode.com/todos/2');
futureData.then(function(data){
console.log(data)
})
futureData.finally(function(response){
console.log(response);
});
futureData.catch(function(error){
console.log(error);
})</code></pre>
<p>It works!!! But not nearly as the real fetch implementation. Can we do better than this? Of course, we can. We can still add more features to the function. We could make it chainable, that is, we can give it the ability to chain methods together.</p>
<p>On the second iteration, this is how it looks:</p><pre><code class="language-javascript">"use strict";
function fetch() {
var url = arguments.length &gt; 0 &amp;&amp; arguments[0] !== undefined ? arguments[0] : '';
var options = arguments.length &gt; 1 &amp;&amp; arguments[1] !== undefined ? arguments[1] : {};
var xhr = new XMLHttpRequest();
var onFufillment = [];
var onError = [];
var onCompletion = [];
var method = "GET" || options.method;
xhr.onreadystatechange = function () {
var _data = this;
if (this.readyState == 4 &amp;&amp; this.status == 200) {
// Action to be performed when the document is read;
onFufillment.forEach(function (callback) {
callback(_data);
});
onCompletion.forEach(function (callback) {
callback(_data);
});
} else if (this.readyState == 4 &amp;&amp; this.status !== 200) {
onError.forEach(function (callback) {
callback(_data);
});
onCompletion.forEach(function (callback) {
callback(_data);
});
}
};
xhr.open(method, url, true);
xhr.send();
return {
then: function then(fufillmentFunction) {
onFufillment.push(fufillmentFunction);
return this;
},
catch: function _catch(errorFunction) {
onError.push(errorFunction);
return this;
},
finally: function _finally(completionFunction) {
onCompletion.push(completionFunction);
return this;
}
};
}</code></pre>
<p>The usage of the API will look like this:</p><pre><code class="language-javascript">var futureData = fetch('https://jsonplaceholder.typicode.com/todos/2');
futureData.then(function(data){
console.log(data)
}).then(function(response){
console.log(response);
}).catch(function(error){
console.log(error);
});</code></pre>
<p>What did it do? The only difference in the second iteration was in the <code>then, catch and finally</code> where I just returned <code>this</code> which means each function returns itself basically enabling it to be chained (partially).</p>
<p>Better right? But can we do better than this? Of course, we can. The returned object can be put in the function's prototype so that we can save memory in a situation where the function is used multiple times.</p>
<p>This is how it looks on the third iteration:</p><pre><code class="language-javascript">"use strict";
function fetch() {
var fetchMethod = Object.create(fetch.prototype);
var url = arguments.length &gt; 0 &amp;&amp; arguments[0] !== undefined ? arguments[0] : '';
var options = arguments.length &gt; 1 &amp;&amp; arguments[1] !== undefined ? arguments[1] : {};
var xhr = new XMLHttpRequest();
fetchMethod.onFufillment = [];
fetchMethod.onError = [];
fetchMethod.onCompletion = [];
var method = "GET" || options.method;
xhr.onreadystatechange = function () {
var _data = this;
if (this.readyState == 4 &amp;&amp; this.status == 200) {
// Action to be performed when the document is read;
fetchMethod.onFufillment.forEach(function (callback) {
callback(_data);
});
fetchMethod.onCompletion.forEach(function (callback) {
callback(_data);
});
} else if (this.readyState == 4 &amp;&amp; this.status !== 200) {
fetchMethod.onError.forEach(function (callback) {
callback(_data);
});
fetchMethod.onCompletion.forEach(function (callback) {
callback(_data);
});
}
};
xhr.open(method, url, true);
xhr.send();
return fetchMethod;
};
fetch.prototype.then = function(fufillmentFunction) {
this.onFufillment.push(fufillmentFunction);
return this;
};
fetch.prototype.catch = function(errorFunction) {
this.onError.push(errorFunction);
return this;
};
fetch.prototype.finally = function(completionFunction) {
this.onCompletion.push(completionFunction);
return this;
};</code></pre>
<p>So this version basically moves the returned function into the fetch’s prototype. If you don’t understand the statement then I recommend checking out this article about <a href="https://dev.to/tylermcginnis/a-beginners-guide-to-javascripts-prototype-5kk" rel="noopener">Javascript’s prototype</a> (Thanks, Tyler McGinnis).</p>
<p>Is this an improvement? Yes!!! Can we do better? Of course, we can. We can use the <code>new</code> keyword to our advantage here and remove the explicit return statement.</p>
<p>The next iteration will look like this:</p><pre><code class="language-javascript">"use strict";
function Fetch() {
var url = arguments.length &gt; 0 &amp;&amp; arguments[0] !== undefined ? arguments[0] : '';
var options = arguments.length &gt; 1 &amp;&amp; arguments[1] !== undefined ? arguments[1] : {};
var xhr = new XMLHttpRequest();
this.onFufillment = [];
this.onError = [];
this.onCompletion = [];
var method = "GET" || options.method;
var internalFetchContext = this;
xhr.onreadystatechange = function () {
var _data = this;
if (this.readyState == 4 &amp;&amp; this.status == 200) {
// Action to be performed when the document is read;
internalFetchContext.onFufillment.forEach(function (callback) {
callback(_data);
});
internalFetchContext.onCompletion.forEach(function (callback) {
callback(_data);
});
} else if (this.readyState == 4 &amp;&amp; this.status !== 200) {
internalFetchContext.onError.forEach(function (callback) {
callback(_data);
});
internalFetchContext.onCompletion.forEach(function (callback) {
callback(_data);
});
}
};
xhr.open(method, url, true);
xhr.send();
};
Fetch.prototype.then = function(fufillmentFunction) {
this.onFufillment.push(fufillmentFunction);
return this;
};
Fetch.prototype.catch = function(errorFunction) {
this.onError.push(errorFunction);
return this;
};
Fetch.prototype.finally = function(completionFunction) {
this.onCompletion.push(completionFunction);
return this;
};</code></pre>
<p>Let me explain the changes:</p>
<ul>
<li>Changed the name of the function from fetch to Fetch, it’s just a convention when using the <code>new</code> keyword</li>
<li>Since I am using the <code>new</code> keyword I can then save the various arrays created to the <code>this</code> context.</li>
<li>Because the function passed into <code>onreadystatechange</code> has its own context I had to save the original <code>this</code> into its own variable to enable me to call it in the function (I know, <code>this</code> can be annoying)</li>
<li>Converted the prototype functions to the new function name.</li>
</ul>
<p>The usage will look like this:</p><pre><code class="language-javascript">var futureData = new
Fetch('https://jsonplaceholder.typicode.com/todos/1');
futureData.then(function(data){
console.log(data)
}).then(function(response){
console.log(response);
}).catch(function(error){
console.log(error);
})</code></pre>
<p>Voilà! That was really fun. But can we do better? Of course, we can.</p>
<p>But I will leave that to you. I would love to see your own implementation of the API in the comments below.</p>
<p>If you liked the article (and even if you didn’t), I would appreciate a clap (or 50) from you. Thank you.</p>
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
