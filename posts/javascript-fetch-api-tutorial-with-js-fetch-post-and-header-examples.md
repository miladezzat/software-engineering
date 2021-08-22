---
card: "/images/default.jpg"
tags: [JavaScript]
description: If you are writing a web application, chances are you will ha
author: "Milad E. Fahmy"
title: "JavaScript Fetch API Tutorial with JS Fetch Post and Header Examples"
created: "2021-08-15T19:28:44+02:00"
modified: "2021-08-15T19:28:44+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-rest-api ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Fetch API Tutorial with JS Fetch Post and Header Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/08/wall-2.jpeg 300w,
/news/content/images/size/w600/2020/08/wall-2.jpeg 600w,
/news/content/images/size/w1000/2020/08/wall-2.jpeg 1000w,
/news/content/images/size/w2000/2020/08/wall-2.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/08/wall-2.jpeg" alt="JavaScript Fetch API Tutorial with JS Fetch Post and Header Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>If you are writing a web application, chances are you will have to work with external data. This can be your own database, third party APIs, and so on.</p>
<p>When <a href="https://en.wikipedia.org/wiki/Ajax_%28programming%29" rel="noopener">AJAX</a> first appeared in 1999, it showed us a better way to build web applications. AJAX was a milestone in web development and is the core concept behind many modern technologies like React.</p>
<p>Before AJAX, you had to re-render an entire web page even for minor updates. But AJAX gave us a way to fetch content from the backend and update selected user interface elements. This helped developers improve user experience and build larger, complicated web platforms.</p>
<h2 id="crash-course-on-rest-apis">Crash Course on REST APIs</h2>
<p>We are now in the age of <a href="https://restfulapi.net/" rel="noopener">RESTful APIs</a>. Simply put, a REST API lets you push and pull data from a datastore. This might either be your database or a third party’s server like the <a href="https://developer.twitter.com/en/docs/twitter-api" rel="noopener">Twitter API</a>.</p>
<p>There are a few different types of REST APIs. Let’s look at the ones you will use in most cases.</p>
<ul>
<li><strong>GET</strong> — Get data from the API. For example, get a twitter user based on their username.</li>
<li><strong>POST</strong> — Push data to the API. For example, create a new user record with name, age, and email address.</li>
<li><strong>PUT</strong> — Update an existing record with new data. For example, update a user’s email address.</li>
<li><strong>DELETE</strong> — Remove a record. For example, delete a user from the database.</li>
</ul>
<p>There are three elements in every REST API. The request, response, and headers.</p>
<p><strong>Request</strong> — This is the data you send to the API, like an order id to fetch the order details.</p>
<figcaption>Sample Request</figcaption>
</figure>
<p><strong>Response</strong> — Any data you get back from the server after a successful / failed request.</p>
<figcaption>Sample Response</figcaption>
</figure>
<p><strong>Headers</strong> — Additional metadata passed to the API to help the server understand what type of request it is dealing with, for example “content-type”.</p>
<figcaption>Sample Headers</figcaption>
</figure>
<p>The real advantage of using a REST API is that you can build a single API layer for multiple applications to work with. </p>
<p>If you have a database that you want to manage using a web, mobile, and desktop application, all you need is a single REST API Layer.</p>
<p>Now that you know how REST APIs work, let's look at how we can consume them.</p>
<h2 id="xmlhttprequest">XMLHttpRequest</h2>
<p>Before <a href="https://www.w3schools.com/js/js_json_intro.asp" rel="noopener">JSON</a> took over the world, the primary format of data exchange was XML. XMLHttpRequest() is a JavaScript function that made it possible to fetch data from APIs that returned XML data. </p>
<p>XMLHttpRequest gave us the option to fetch XML data from the backend without reloading the entire page.</p>
<p>This function has grown from its initial days of being XML only. Now it supports other data formats like JSON and plaintext.</p>
<p>Let's write a simple XMLHttpRequest call to the GitHub API to fetch my profile.</p><pre><code class="language-javascript">// function to handle success
function success() {
var data = JSON.parse(this.responseText); //parse the string to JSON
console.log(data);
}
// function to handle error
function error(err) {
console.log('Request Failed', err); //error details will be in the "err" object
}
var xhr = new XMLHttpRequest(); //invoke a new instance of the XMLHttpRequest
xhr.onload = success; // call success function if request is successful
xhr.onerror = error;  // call error function if request failed
xhr.open('GET', 'https://api.github.com/users/manishmshiva'); // open a GET request
xhr.send(); // send the request to the server.</code></pre>
<p>The above code will send a GET request to <a href="https://api.github.com/users/manishmshiva" rel="noopener">https://api.github.com/users/manishmshiva</a> to fetch my GitHub info in JSON. If the response was successful, it will print the following JSON to the console:</p>
<p>If the request failed, it will print this error message to the console:</p>
<h2 id="fetch-api">Fetch API</h2>
<p>The Fetch API is a simpler, easy-to-use version of XMLHttpRequest to consume resources asynchronously. Fetch lets you work with REST APIs with additional options like caching data, reading streaming responses, and more.</p>
<p>The major difference is that Fetch works with promises, not callbacks. JavaScript developers have been moving away from callbacks after the introduction of promises.</p>
<p>For a complex application, you might easily get into a habit of writing callbacks leading to <a href="http://callbackhell.com/" rel="noopener">callback hell</a>. </p>
<p>With promises, it is easy to write and handle asynchronous requests. If you are new to promises, <a href="https://javascript.info/promise-basics" rel="noopener">you can learn how they work here</a>.</p>
<p>Here is how the function we wrote earlier would look like if you used fetch() instead of XMLHttpRequest:</p><pre><code class="language-javascript">// GET Request.
fetch('https://api.github.com/users/manishmshiva')
// Handle success
.then(response =&gt; response.json())  // convert to json
.then(json =&gt; console.log(json))    //print data to console
.catch(err =&gt; console.log('Request Failed', err)); // Catch errors</code></pre>
<p>The first parameter of the Fetch function should always be the URL. Fetch then takes a second JSON object with options like method, headers, request body, and so on.</p>
<p>There is an important difference between the response object in XMLHttpRequest and Fetch. </p>
<p>XMLHttpRequest returns the data as a response while the response object from Fetch contains information about the response object itself. This includes headers, status code, etc. We call the “res.json()” function to get the data we need from the response object.</p>
<p>Another important difference is that the Fetch API will not throw an error if the request returns a 400 or 500 status code. It will still be marked as a successful response and passed to the ‘then’ function.</p>
<p>Fetch only throws an error if the request itself is interrupted. To handle 400 and 500 responses, you can write custom logic using ‘response.status’. The ‘status’ property will give you the status code of the returned response.</p>
<p>Great. Now that you understand how the Fetch API works, let's look at a couple more examples like passing data and working with headers.</p>
<h2 id="working-with-headers">Working with Headers</h2>
<p>You can pass headers using the “headers” property. You can also use the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Headers" rel="noopener">headers constructor</a> to better structure your code. But passing a JSON object to the “headers” property should work for most cases.</p><pre><code class="language-javascript">fetch('https://api.github.com/users/manishmshiva', {
method: "GET",
headers: {"Content-type": "application/json;charset=UTF-8"}
})
.then(response =&gt; response.json())
.then(json =&gt; console.log(json));
.catch(err =&gt; console.log(err));</code></pre>
<h2 id="passing-data-to-a-post-request">Passing Data to a POST Request</h2>
<p>For a POST request, you can use the “body” property to pass a JSON string as input. Do note that the request body should be a JSON string while the headers should be a JSON object.</p><pre><code class="language-javascript">// data to be sent to the POST request
let _data = {
title: "foo",
body: "bar",
userId:1
}
fetch('https://jsonplaceholder.typicode.com/posts', {
method: "POST",
body: JSON.stringify(_data),
headers: {"Content-type": "application/json; charset=UTF-8"}
})
.then(response =&gt; response.json())
.then(json =&gt; console.log(json));
.catch(err =&gt; console.log(err));</code></pre>
<p>The Fetch API is still in active development. We can expect better features in the near future. </p>
<p>However, most browsers support the use of Fetch in your applications. The chart below should help you figure out which browsers support it on the web and mobile apps.</p>
<p>I hope this article helped you understand how to work with the Fetch API. Be sure to try out Fetch for your next web application.</p>
<hr>
<p><em>I regularly write about Machine Learning, Cyber Security, and DevOps. You can signup for my </em><a href="https://www.manishmshiva.com/" rel="noopener nofollow noopener"><em>weekly newsletter</em></a><em> here.</em></p>
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
