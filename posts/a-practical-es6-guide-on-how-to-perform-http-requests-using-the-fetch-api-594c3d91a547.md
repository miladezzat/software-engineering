---
card: "https://cdn-media-1.freecodecamp.org/images/0*Kj2i4zLF-jKOsiLb.jpg"
tags: [JavaScript]
description: In this guide, I’ll show you how to use the Fetch API (ES6+)
author: "Milad E. Fahmy"
title: "A practical ES6 guide on how to perform HTTP requests using the Fetch API"
created: "2021-08-15T19:41:21+02:00"
modified: "2021-08-15T19:41:21+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-es6 tag-tech tag-programming tag-api ">
<header class="post-full-header">
<h1 class="post-full-title">A practical ES6 guide on how to perform HTTP requests using the Fetch API</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*Kj2i4zLF-jKOsiLb.jpg 300w,
https://cdn-media-1.freecodecamp.org/images/0*Kj2i4zLF-jKOsiLb.jpg 600w,
https://cdn-media-1.freecodecamp.org/images/0*Kj2i4zLF-jKOsiLb.jpg 1000w,
https://cdn-media-1.freecodecamp.org/images/0*Kj2i4zLF-jKOsiLb.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*Kj2i4zLF-jKOsiLb.jpg" alt="A practical ES6 guide on how to perform HTTP requests using the Fetch API">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this guide, I’ll show you how to use the Fetch API (ES6+) to perform HTTP requests to an <a href="https://jsonplaceholder.typicode.com/" rel="noopener">REST API</a> with some practical examples you’ll most likely encounter.</p>
<p>Want to quickly see the HTTP examples? Go to section 5. The first part describes the asynchronous part of JavaScript when working with HTTP requests.</p>
<blockquote><strong>Note</strong>: All examples are written in ES6 with <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions" rel="noopener">arrow functions</a>.</blockquote>
<p>A common pattern in today’s current web/mobile applications is to request or show some sort of data from the server (such as users, posts, comments, subscriptions, payments and so forth) and then manipulate it by using CRUD (create, read, update or delete) operations.</p>
<p>To further manipulate a resource, we often use <a href="https://medium.freecodecamp.org/7-javascript-methods-that-will-boost-your-skills-in-less-than-8-minutes-4cc4c3dca03f" rel="noopener">these JS methods</a> (recommended) such as <code>.map()</code>, <code>.filter()</code> and <code>.reduce()</code>.</p>
<blockquote>If you want to become a better web developer, start your own business, teach others, or improve your development skills, I’ll be posting weekly tips and tricks on the latest web development languages.</blockquote>
<h3 id="here-s-what-we-ll-address">Here’s what we’ll address</h3>
<ol>
<li>Dealing with JS’s asynchronous HTTP requests</li>
<li>What is AJAX?</li>
<li>Why Fetch API?</li>
<li>A quick intro to Fetch API</li>
<li>Fetch API - CRUD examples ← the good stuff!</li>
</ol>
<h3 id="1-dealing-with-js-s-asynchronous-http-requests">1. Dealing with JS’s asynchronous HTTP requests</h3>
<p>One of the most challenging parts with understanding how JavaScript (JS) works is understanding how to deal with asynchronous requests, which requires and understanding in how promises and callbacks work.</p>
<p>In most programming languages, we are wired to think that operations happen in order (sequentially). The first line must be executed before we can move on to the next line. It make sense because that is how we humans operate and complete daily tasks.</p>
<p>But with JS, we have multiple operations that are running in the background/foreground, and we cannot have a web app that freezes every time it waits for a user event.</p>
<blockquote>Describing JavaScript as asynchronous is perhaps misleading. It’s more accurate to say that JavaScript is synchronous and single-threaded with various callback mechanisms. <a href="https://stackoverflow.com/questions/2035645/when-is-javascript-synchronous" rel="noopener">Read more</a>.</blockquote>
<p>Nevertheless, sometimes things must happen in order, otherwise it will cause chaos and unexpected results. For that reason, we may use promises and callbacks to structure it. An example could be validating user credentials before proceeding to the next operation.</p>
<h3 id="2-what-is-ajax">2. What is AJAX</h3>
<p>AJAX stands for Asynchronous JavaScript and XML, and it allows web pages to be updated asynchronously by exchanging data with a web server while the app is running. In short, it essentially means that you can update parts of a web page without reloading the whole page (the URL stays the same).</p>
<blockquote>AJAX is a misleading name. AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or JSON text.<br> — w3shools.com</blockquote>
<h4 id="ajax-all-the-way">AJAX all the way?</h4>
<p>I’ve seen that many developers tend to get really excited about having everything in a single page application (SPA), and this leads to lots of asynchronous pain! But luckily, we have libraries such as Angular, VueJS and React that makes this process a whole lot easier and practical.</p>
<p>Overall, it’s important to have a balance between what should reload the whole page or parts of the page.</p>
<p>And in most cases, a page reload works fine in terms of how powerful browsers have become. Back in the days, a page reload would take seconds (depending on the location of the server and browser capabilities). But today’s browsers are extremely fast so deciding whether to perform AJAX or page reload is not that of a big difference.</p>
<p>My personal experience is that it’s a lot easier and faster to create a search engine with a simple search button than doing it without a button. And in most cases, the customer doesn’t care if it is a SPA or an extra page-reload. Of course, don’t get me wrong, I do love SPAs, but we need to consider a couple of trade-offs, if we deal with limited budget and lack of resources then maybe a quick solution is better approach.</p>
<p>In the end, it really depends on the use case, but personally I feel that SPAs require more development time and a bit of headache than a simple page reload.</p>
<h3 id="3-why-fetch-api">3. Why Fetch API?</h3>
<p>This allows us to perform declarative HTTP requests to a server. For each request, it creates a <code>Promise</code> which must be resolved in order to define the content type and access the data.</p>
<p>Now the benefit of Fetch API is that it is fully supported by the JS ecosystem, and is also a part of the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API" rel="noopener">MDN Mozilla docs</a>. And last but not least, it works out of the box on most browsers (except IE). In the long-term, I’m guessing it will become the standard way of calling web APIs.</p>
<blockquote>Note! I’m well aware other HTTP approaches such as using Observable with RXJS, and how it focuses on memory-management/leak in terms of subscribe/unsubscribe and so forth. And maybe that will become the new standard way of doing HTTP requests, who knows?<br><br>Anyway, in this article I’m only focusing on Fetch API, but may in the future write an article about Observable and RXJS.</blockquote>
<h3 id="4-a-quick-intro-to-fetch-api">4. A quick intro to Fetch API</h3>
<p>The <code>fetch()</code> method returns a <code>Promise</code> that resolves the <code>Response</code> from the <code>Request</code> to show the status (successful or not). If you ever get this message <code>promise {}</code> in your console log screen, don’t panic — it basically means that the <code>Promise</code> works, but is waiting to be resolved. So in order to resolve it we need the <code>.then()</code> handler (callback) to access the content.</p>
<p>So in short, we first define the path (<strong>Fetch</strong>), secondly request data from the server (<strong>Request</strong>), thirdly define the content type (<strong>Body</strong>) and last but not least, we access the data (<strong>Response</strong>).</p>
<p>If you struggle to understand this concept, don’t worry. You’ll get a better overview through the examples shown below.</p><pre><code>The path we'll be using for our examples
https://jsonplaceholder.typicode.com/users // returns JSON</code></pre>
<h3 id="5-fetch-api-http-examples">5. Fetch API - HTTP examples</h3>
<p>If we want to access the data, we need two <code>.then()</code> handlers (callback). But if we want to manipulate the resource, we need only one <code>.then()</code> handler. However, we can use the second one to make sure the value has been sent.</p>
<p>Basic Fetch API template:</p>
<blockquote>Note! The example above is just for illustrative purposes. The code will not work if you execute it.</blockquote>
<h4 id="fetch-api-examples">Fetch API examples</h4>
<ol>
<li>Showing a user</li>
<li>Showing a list of users</li>
<li>Creating a new user</li>
<li>Deleting a user</li>
<li>Updating a user</li>
</ol>
<blockquote><strong>Note! </strong>The resource will not be really created on the server, but will return a fake result to mimic a real server.</blockquote>
<h4 id="1-showing-a-user">1. Showing a user</h4>
<p>As previously mentioned, the process of showing a single user consists of two <code>.then()</code> handlers (callback), the first one to define the object, and the second one to access the data.</p>
<blockquote>Notice just by reading the query string <code>/users/2</code> we are able to understand/predict what the API does. For more information on how to write high-quality REST API, check out these <a href="https://hackernoon.com/restful-api-designing-guidelines-the-best-practices-60e1d954e7c9" rel="noopener">guidelines</a> tip written by <a href="undefined" rel="noopener">Mahesh Haldar</a>.</blockquote>
<h4 id="example"><strong>Example</strong></h4>
<h4 id="2-showing-a-list-of-users">2. Showing a list of users</h4>
<p>The example is almost identical to the previous example except that the query string is <code>/users</code>, and not <code>/users/2</code>.</p>
<h4 id="example-1">Example</h4>
<h4 id="3-creating-a-new-user">3. Creating a new user</h4>
<p>This one looks a bit different from the previous example. If you are not familiar with the HTTP protocol, it simply provides us with a couple of sweet methods such as <code>POST</code>, <code>GET</code>,<code>DELETE</code>, <code>UPDATE</code>, <code>PATCH</code> and <code>PUT</code>. These methods are verbs that simply describe the type of action to be executed, and are mostly used to manipulate the resource/data on the server.</p>
<p>Anyway, in order to create a new user with Fetch API, we’ll need to use the HTTP verb <code>POST</code>. But first, we need to define it somewhere. Luckily, there is an optional argument <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch" rel="noopener">Init</a></code> we can pass along with the URL for defining custom settings such as method type, body, credentials, headers and so forth.</p>
<blockquote>Note: The <code>fetch()</code> method's parameters are identical to those of the <code><a href="https://developer.mozilla.org/en-US/docs/Web/API/Request/Request" rel="noopener">Request()</a></code> constructor.</blockquote>
<h4 id="example-2">Example</h4>
<h4 id="4-deleting-a-user"><strong>4. Deleting a user</strong></h4>
<p>In order to delete the user, we first need to target the user with <code>/users/1</code>, and then we define the method type which is <code>DELETE</code>.</p>
<h4 id="example-3">Example</h4>
<h4 id="5-updating-a-user">5. Updating a user</h4>
<p>The HTTP verb <code>PUT</code> is used to manipulate the target resource, and if you want to do partial changes, you’ll need to use <code>PATCH</code>. For more information on what these HTTP verbs do, <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods" rel="noopener">check this out</a>.</p>
<h4 id="example-4">Example</h4>
<h3 id="conclusion">Conclusion</h3>
<p>Now you have a basic understanding of how to retrieve or manipulate a resource from the server using JavaScript’s Fetch API, as well as how to deal with promises. You can use this article as a guide for how to structure your API requests for CRUD operations.</p>
<p>Personally, I feel that the Fetch API is declarative and you can easily understand what is happening without any technical coding experience.</p>
<blockquote>All examples are shown in promised-base request where we chain the request using <code><em>.then</em></code> callback. This is a standard approach which many devs are familiar with, however, if you want to use <code><em>async/await</em></code> check this <a href="https://dev.to/johnpaulada/synchronous-fetch-with-asyncawait" rel="noopener">article out</a>. The concept is the same, except <code>async/await</code> is easier to read and write.</blockquote>
<p>Here are a few articles I’ve written about the web-ecosystem along with personal programming tips and tricks.</p>
<ul>
<li><a href="/news/a-comparison-between-angular-and-react-and-their-core-languages-9de52f485a76/">A comparison between Angular and React</a></li>
<li><a href="/news/a-chaotic-mind-leads-to-chaotic-code-e7d6962777c0">A chaotic mind leads to chaotic code</a></li>
<li><a href="https://codeburst.io/developers-that-constantly-want-to-learn-new-things-heres-a-tip-7a16e42302e4" rel="noopener">Developers that constantly want to learn new things</a></li>
<li><a href="/news/how-to-use-es6-modules-and-why-theyre-important-a9b20b480773">A practical guide to ES6 modules</a></li>
<li><a href="/news/learn-these-core-javascript-concepts-in-just-a-few-minutes-f7a16f42c1b0/?gi=6274e9c4d599">Learn these core Web Concepts</a></li>
<li><a href="/news/7-javascript-methods-that-will-boost-your-skills-in-less-than-8-minutes-4cc4c3dca03f/">Boost your skills with these important JavaScript methods</a></li>
<li><a href="https://codeburst.io/learn-how-to-create-custom-bash-commands-in-less-than-4-minutes-6d4ceadd9590" rel="noopener">Program faster by creating custom bash commands</a></li>
</ul>
<p>You can find me on Medium where I publish on a weekly basis. Or you can follow me on <a href="http://twitter.com/dleroari" rel="noopener">Twitter</a>, where I post relevant web development tips and tricks along with personal stories.</p>
<p><em>P.S. If you enjoyed this article and want more like these, please clap ❤ and share with friends that may need it, it’s good karma.</em></p>
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
