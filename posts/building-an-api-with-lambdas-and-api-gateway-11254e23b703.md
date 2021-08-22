---
card: "https://cdn-media-1.freecodecamp.org/images/1*VjGHQOLK4sJDqYvzTkx30g.png"
tags: [AWS Lambda]
description: "Do you want to access your database, control your system, or "
author: "Milad E. Fahmy"
title: "How to build an API with Lambdas and API Gateway"
created: "2021-08-16T11:40:29+02:00"
modified: "2021-08-16T11:40:29+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-aws-lambda tag-api tag-movies tag-technology tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to build an API with Lambdas and API Gateway</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*VjGHQOLK4sJDqYvzTkx30g.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*VjGHQOLK4sJDqYvzTkx30g.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*VjGHQOLK4sJDqYvzTkx30g.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*VjGHQOLK4sJDqYvzTkx30g.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*VjGHQOLK4sJDqYvzTkx30g.png" alt="How to build an API with Lambdas and API Gateway">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
console.log(event);
if (event.httpMethod === 'PUT'){
let response = putMovie(event)
return done(response);
} else if (event.httpMethod === 'GET'){
let response = getMovie(event);
return done(response);
}
};</code></pre><p>We’re going to start by writing the <code>getMovie</code>function. This function will start by getting the <code>genre</code>from the path parameters. This is where using path parameters can make this process easy.</p><pre><code class="language-js">const getMovie = event =&gt; {
let genre = event.pathParameters.genre;
return;
}</code></pre><p>With the genre that the user requested, we are going to get a recommended movie for them. I copied these from <a href="https://www.imdb.com/list/ls000441429/">25 Top Films From Each Genre</a> and added them to an object with the genre as the key. We can then get the film by getting the value of the genre requested.</p><pre><code class="language-js">const movies = {
action: 'Desperado (1995)',
fantasy: 'Inception (2010)',
...
horror: 'Black Swan (2010)'
}
const getMovie = event =&gt; {
let genre = event.pathParameters.genre;
return movies[genre];
}</code></pre><p>This means that the title of the movie is being passed into the <code>done</code><em> </em>function. This function is used, as API Gateway expects the data to come back in a very specific format. This function turns a string into that required format.</p><pre><code class="language-js">const done = response =&gt; {
return {
statusCode: '200',
body: JSON.stringify(response),
headers: {
'Content-Type': 'application/json',
'Access-Control-Allow-Methods': '*',
'Access-Control-Allow-Origin': '*'
}
}
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
