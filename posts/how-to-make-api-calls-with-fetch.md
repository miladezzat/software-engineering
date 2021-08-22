---
card: "/images/default.jpg"
tags: [JavaScript]
description: Often times you might want your system to communicate with ot
author: "Milad E. Fahmy"
title: "Fetch API – How to Make a GET Request and POST Request in JavaScript"
created: "2021-08-15T19:26:13+02:00"
modified: "2021-08-15T19:26:13+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-api ">
<header class="post-full-header">
<h1 class="post-full-title">Fetch API – How to Make a GET Request and POST Request in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/05/Fetch-API.png 300w,
/news/content/images/size/w600/2021/05/Fetch-API.png 600w,
/news/content/images/size/w1000/2021/05/Fetch-API.png 1000w,
/news/content/images/size/w2000/2021/05/Fetch-API.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/05/Fetch-API.png" alt="Fetch API – How to Make a GET Request and POST Request in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Often times you might want your system to communicate with other web servers to get information.</p>
<p>For example, let's say a new user wants to sign up for an account on your website. And instead of having to manually fill out a form to send their information to your system, they want to use their information that's already in another service or platform (that is, <strong>3rd party authentication</strong>) to sign up. </p>
<p>In such a case, your system has to communicate with the third party's system to get that user's information. And it does that through an <strong>API</strong>.</p>
<blockquote>An API, or Application Programming Interface, is just a set of rules that guide how one software or system communicates with another.</blockquote>
<figcaption>My hand-drawn explanation of an API</figcaption>
</figure>
<p>If your application is a single-page application built with an asynchronous programming language like JavaScript, you have a helpful tool to carry out that function: <code>fetch()</code>.</p>
<h2 id="what-is-the-fetch-api">What is the Fetch API?</h2>
<p><code>fetch()</code> is a mechanism that lets you make simple AJAX (Asynchronous JavaScript and XML) calls with JavaScript.</p>
<p><strong>Asynchronous</strong> means that you can use fetch to make a call to an external API without halting the execution of other instructions. That way, other functions on the site will continue to run even when an API call has not been resolved.</p>
<p>When a response (data) is sent back from the API, the asynchronous tasks (fetch) resume. If it still sounds difficult, you can read my detailed introduction into <a href="https://ubahthebuilder.tech/introduction-to-asynchronous-programming-with-javascript">Asynchronous code here</a>.</p>
<p>It is important to note, though, that fetch is not part of the JavaScript spec, but the WWTAG. As a result, you will not be able to use it in a Node.js environment (unless you install a special module).</p>
<h2 id="how-to-use-fetch-in-javascript">How to Use <code>fetch()</code> in JavaScript</h2>
<p>When we talk about APIs, we also need to talk about <strong>endpoints</strong>. An endpoint is simply a unique URL you call to interact with another system.</p>
<p>Let's assume that we are making a request to an external API to get some data (like a blog post). For this, we'll use a simple<em> </em>GET request.</p>
<p>Simply call <code>fetch()</code> with the endpoint URL as the argument:</p>
<figcaption>Trying to fetch blog post from external API</figcaption>
</figure>
<p>The response body for this endpoint will be information about a blog post:</p><pre><code class="language-js">{
userId: 1,
id: 1,
title: 'A post by Kingsley',
body: 'Brilliant post on fetch...',
};</code></pre>
<p>Ultimately, you'll want to get the response body. But the response object contains quite a bit of information beyond the body, including the status code, headers, and more information.</p>
<blockquote>Note that the fetch API returns a promise. Because of this, you need to nest a then() method to handle the resolution. Learn more about promises <a href="https://ubahthebuilder.tech/introduction-to-asynchronous-programming-with-javascript">here</a>.</blockquote>
<p>The data returned from the API is not usually in a useable form. So you'll need to convert the data to a form which your JavaScript can operate with. Thankfully, you can use the <code>json()</code> method to do just that:</p>
.then(data =&gt; {
return data.json();
})
.then(post =&gt; {
console.log(post.title);
});</code></pre>
<figcaption>Retrieving blog post from API and extracting only the title property</figcaption>
</figure>
<p>As you can see in the above code, you can nest a subsequent <code>then()</code> method to parse the data (I pulled out just the title in our case)</p>
<p>In this example, we simply wanted to get a blog post from the API. But what if we wanted to post a story instead?</p>
<h2 id="how-to-make-a-post-request">How to Make a POST Request</h2>
<p>Once you move beyond GET requests, you'll need to set a few more options. So far, you have only supplied a single argument to <code>fetch()</code> — the URL endpoint.</p>
<p>For a post request, you'll need to pass an object of configuration options as a second argument. The optional object can take a lot of different parameters. In this case, include only the most necessary information.</p>
<p>Because you're sending a POST request, you'll need to declare that you're using the POST method.</p>
<p>You'll also need to pass some data to actually create the new blog post. Since you're sending JSON data, you'll need to set a header of <em>Content-Type</em> set to <em>application/json</em>. Finally, you'll need the body, which will be a single string of JSON data.</p><pre><code class="language-js">const update = {
title: 'A blog post by Kingsley',
body: 'Brilliant post on fetch API',
userId: 1,
};
const options = {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(update),
};</code></pre>
<p>And then, the API call:</p><pre><code class="language-js">fetch('https://jsonplaceholder.typicode.com/posts', options)
.then(data =&gt; {
if (!data.ok) {
throw Error(data.status);
}
return data.json();
}).then(update =&gt; {
console.log(update);
// {
//
title: 'A blog post by Kingsley',
//
body: 'Brilliant post on fetch API',
//
userId: 1,
//
id: 101
// };
}).catch(e =&gt; {
console.log(e);
});</code></pre>
<p>If your request is successful, you'll get a response body containing the blog post object along with a new ID. The response will vary depending on how the API is set up.</p>
<p>Finally, you should note that endpoints may change with time and API's may be restructured. So you should put all your fetch calls together for easier access.</p>
<h2 id="conclusion">Conclusion</h2>
<p>Here are some points to summarize this article:</p>
<ul>
<li>Computer systems like software communicate with each other and share information through a layer called an API.</li>
<li>An API contains the set of rules and protocols guiding how two or more systems interact. For example, Facebook's system may interact with Google's system to get information on a user though an API.</li>
<li>In front end JavaScript, you can make simple API calls with the <code>fetch()</code> utility.</li>
<li>To make a simple GET request with fetch, you just need to pass in the URL endpoint as an argument.</li>
<li>To make a POST request, you'll need to pass along certain other parameters including a configuration object.</li>
</ul>
<p>If you liked my article and want to offer your support, kindly visit my <a href="https://buymeacoffee.com/ubahthebuilder">Buy Me A Coffee page</a>.</p>
<p>Thank you and see you soon.</p>
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
