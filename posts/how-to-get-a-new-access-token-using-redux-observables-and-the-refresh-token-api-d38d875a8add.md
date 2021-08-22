---
card: "https://cdn-media-1.freecodecamp.org/images/1*0nvsQXICkyKVMAq4hbYRPg.jpeg"
tags: [API]
description: by Sachin Kumar
author: "Milad E. Fahmy"
title: "How to get a new access token using Redux observables and the refresh token API"
created: "2021-08-15T19:40:57+02:00"
modified: "2021-08-15T19:40:57+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-api tag-react tag-javascript tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to get a new access token using Redux observables and the refresh token API</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*0nvsQXICkyKVMAq4hbYRPg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*0nvsQXICkyKVMAq4hbYRPg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*0nvsQXICkyKVMAq4hbYRPg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*0nvsQXICkyKVMAq4hbYRPg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*0nvsQXICkyKVMAq4hbYRPg.jpeg" alt="How to get a new access token using Redux observables and the refresh token API">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Sachin Kumar</p>
<h1 id="how-to-get-a-new-access-token-using-redux-observables-and-the-refresh-token-api">How to get a new access token using Redux observables and the refresh token API</h1>
<figcaption>Photo by <a href="https://unsplash.com/photos/MEW1f-yu2KI?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">SpaceX</a> on <a href="https://unsplash.com/collections/827807/technic?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>This article is about how I handled a 401 status code on an API response. I will show you how to get a new access token using the refresh token with <a href="https://redux-observable.js.org/" rel="noopener"><strong>Redux Observable</strong></a><strong> </strong>in a <a href="https://reactjs.org/" rel="noopener">React</a> project.</p>
<p>However before we begin, we should understand some of the prerequisite concepts that will help up understand the solution better. This is a general architectural solution to a common problem, so you don’t need to know <a href="https://redux.js.org/" rel="noopener"><strong>Redux</strong></a> to read further. Let us begin!</p>
<h3 id="access-token"><strong>Access token</strong></h3>
<blockquote>Access Token is a credential that can be used by an application to access an API. When an access token expires, it throws <strong>401</strong> status code in error response.<br>The below flowchart shows, how an access token works with the server. — <a href="https://auth0.com/docs/tokens/access-token" rel="noopener">auth0.com</a></blockquote>
<figcaption>API receive access token from auth server.</figcaption>
</figure>
<p>This is how an auth service works when the user successfully logs in and retrieves an access token and refreshes the token on successful authentication.</p>
<h3 id="refresh-token"><strong>Refresh Token</strong></h3>
<blockquote>A Refresh Token is a special kind of token that can be used to obtain a renewed access token — that allows accessing a protected resource — at any time. You can request new access tokens until the refresh token is blacklisted. Refresh tokens must be stored securely by an application because they essentially allow a user to remain authenticated forever. — <a href="https://auth0.com/docs/tokens/access-token" rel="noopener">auth0.com</a></blockquote>
<p>We need to get a new access token using that refresh token, then again hit the same API with the new access token. We want to do this without the user knowing that their session has expired or the API throwing an error.</p>
<p>Let’s understand how the refresh token works with the server. We retrieve a new access token when the API throws a 401 status code.</p>
<figcaption>This is how a refresh token receives a new token using the access token</figcaption>
</figure>
<p>The refresh token API call receives a new access token from the auth server using the refresh token saved on the first authentication.</p>
<p>We can better understand this whole process via this simple flow chart.</p>
<h3 id="observables"><strong>Observables</strong></h3>
<p>You can think of an observable as an array whose items arrive asynchronously over time. <strong>Observables help you manage asynchronous data</strong>, such as data coming from a backend service.</p>
<p>In RxJS, this can become pretty complex when playing with observable streams. Don’t worry — we are going to simplify this with simple code chunks.</p>
<p>Let’s start with a simple API call in redux-observable. This is what a simple function for a fetch API looks like :</p>
<h3 id="solution">Solution</h3>
<p>Now we are armed with the basic concepts. Let us see how we can handle a 401 (invalid_token or session expired) status code on an API response. We’ll also see how we can get the new access token using the refresh token in Redux Observable.</p>
<p>We have to make two changes in the above function:</p>
<ol>
<li>Wrap our API call in Observables.defer(). We want to get ahold of that function to call again when the new valid access token is received.</li>
<li>When we get a 401 status in catch error. We need to make an API call to get the new access token. We use the refresh token stored in the first successful authentication.</li>
</ol>
<p>Let’s see the differences between the two functions:</p>
<ol>
<li>The catch function always gives the <strong>source</strong> of the parent stream. We can use that to start the stream again which failed due to an invalid access token.</li>
<li>Now start a new stream of events to listen for refresh token success events. We stop when the refresh token API fails (use takeUntil for this).</li>
<li>Now make sure you use the <strong>take</strong> operator to always get the first event of the stream. If you have multiple streams, your output stream can be compromised.</li>
<li>If the new access token has been received, then use mergeMap to merge the source of the previous stream. We merge it again to the parent stream, and it will call the get data function with the new access token.</li>
<li>Now you might be wondering how merge is working. So, merge independently invokes and will start its own stream to fetch the new access token using the refresh token (check out the next function). When the refresh token success appears, it will get to <strong>step 2 </strong>and so on.</li>
</ol>
<p>We can use this approach to handle more special cases for different status code as well like 500, 403.</p>
<p><strong>ProTip</strong>: make sure to check for infinite loop condition if the refresh token API gives a 401. You can maintain a counter on every refresh token call. If the number exceeds, stop the stream. Then do any error handling on it, for example showing a message that there was an error, and logout the user.</p>
<h3 id="conclusion">Conclusion</h3>
<p>We have implemented an invalid token handler using a refresh token API with Redux-observables in React. This approach can be used to handle other special API cases as well.</p>
<p><em>I hope you enjoyed the post, if you like it follow me on <a href="https://twitter.com/_i_am_sachin" rel="noopener">Twitter</a> and <a href="https://github.com/sachinKumarGautam" rel="noopener">Github</a> for more JavaScript tips and articles. ?</em></p>
<h3 id="some-helpful-resources">Some helpful resources</h3>
<ol>
<li><a href="https://redux-observable.js.org/" rel="noopener">https://redux-observable.js.org/</a></li>
<li><a href="https://rxjs-dev.firebaseapp.com/api" rel="noopener">https://rxjs-dev.firebaseapp.com/api</a></li>
<li><a href="https://rxjs-dev.firebaseapp.com/api/index/function/defer" rel="noopener">https://rxjs-dev.firebaseapp.com/api/index/function/defer</a></li>
<li><a href="https://rxjs-dev.firebaseapp.com/api/index/function/merge" rel="noopener">https://rxjs-dev.firebaseapp.com/api/index/function/merge</a></li>
</ol>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
