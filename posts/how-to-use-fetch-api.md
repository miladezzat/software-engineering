---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9a08740569d1a4ca231d.jpg"
tags: [JavaScript]
description: I will be sharing bite sized learnings about JavaScript regul
author: "Milad E. Fahmy"
title: "How to Use Fetch to Make AJAX Calls in JavaScript"
created: "2021-08-15T19:29:07+02:00"
modified: "2021-08-15T19:29:07+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-beginner tag-front-end-development tag-100daysofcode ">
<header class="post-full-header">
<h1 class="post-full-title">How to Use Fetch to Make AJAX Calls in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9a08740569d1a4ca231d.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a08740569d1a4ca231d.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a08740569d1a4ca231d.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a08740569d1a4ca231d.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9a08740569d1a4ca231d.jpg" alt="How to Use Fetch to Make AJAX Calls in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I will be sharing bite sized learnings about JavaScript regularly in this series. We'll cover JS fundamentals, browsers, DOM, system design, domain architecture and frameworks.</p>
<p>Fetch is an interface for making an AJAX request in JavaScript. It is implemented widely by modern browsers and is used to call an API.</p>
<pre><code class="language-javascript">const promise = fetch(url, [options])
</code></pre>
<p>Calling fetch returns a promise, with a Response object. The promise is rejected if there is a network error, and it's resolved if there is no problem connecting to the server and the server responded a status code. This status code could be 200s, 400s or 500s.</p>
<p>A sample FETCH request -</p>
<pre><code class="language-javascript">
fetch(url)
.then(response =&gt; response.json())
.catch(err =&gt; console.log(err))
</code></pre>
<p>The request is sent as a GET by default. To send a POST / PATCH / DELETE / PUT you can use the method property as part of <code>options</code> parameter. Some other possible values <code>options</code> can take -</p>
<ul>
<li><code>method</code>: such as GET, POST, PATCH</li>
<li><code>headers</code>: Headers object</li>
<li><code>mode</code>: such as <code>cors</code>, <code>no-cors</code>, <code>same-origin</code></li>
<li><code>cache</code>: cache mode for request</li>
<li><code>credentials</code></li>
<li><code>body</code></li>
</ul>
<p><a href="'https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch'">Check out the full list of available options here</a></p>
<p>Example usage:<br>
This example demonstrates the usage of fetch to call an API and to get a list of git repositories.</p>
<pre><code class="language-javascript">const url = 'https://api.github.com/users/shrutikapoor08/repos';
fetch(url)
.then(response =&gt; response.json())
.then(repos =&gt; {
const reposList = repos.map(repo =&gt; repo.name);
console.log(reposList);
})
.catch(err =&gt; console.log(err))
</code></pre>
<p>To send a POST request, here's how the method parameter can be used with async / await syntax.</p>
<pre><code class="language-javascript">const params = {
id: 123
}
const response = await fetch('url', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(params)
});
const data = await response.json();
</code></pre>
<hr>
<h3 id="interestedinmorejsbytessignupforthenewsletter">Interested in more JSBytes? <a href="https://tinyletter.com/shrutikapoor"> Sign up for the newsletter</a></h3>
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
