---
card: "https://cdn-media-2.freecodecamp.org/w1280/602cb40c0a2838549dcc6af3.jpg"
tags: [cookies]
description: "Have you ever wondered how you can sign in to a website once "
author: "Milad E. Fahmy"
title: "Everything You Need to Know About Cookies for Web Development"
created: "2021-08-16T10:04:08+02:00"
modified: "2021-08-16T10:04:08+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-cookies tag-web-development tag-web ">
<header class="post-full-header">
<h1 class="post-full-title">Everything You Need to Know About Cookies for Web Development</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/602cb40c0a2838549dcc6af3.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/602cb40c0a2838549dcc6af3.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/602cb40c0a2838549dcc6af3.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/602cb40c0a2838549dcc6af3.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/602cb40c0a2838549dcc6af3.jpg" alt="Everything You Need to Know About Cookies for Web Development">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<thead>
<tr>
<th></th>
<th>Cookies</th>
<th>Local Storage</th>
<th>Session Storage</th>
</tr>
</thead>
<tbody>
<tr>
<td>Capacity</td>
<td>4KB</td>
<td>10MB</td>
<td>5MB</td>
</tr>
<tr>
<td>Accessible from</td>
<td>Any window</td>
<td>Any window</td>
<td>Same tab</td>
</tr>
<tr>
<td>Expires</td>
<td>Manually set</td>
<td>Never</td>
<td>On tab close</td>
</tr>
<tr>
<td>Storage location</td>
<td>Browser and server</td>
<td>Browser only</td>
<td>Browser only</td>
</tr>
<tr>
<td>Sent with requests</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>
<p>Based on: <a href="https://www.youtube.com/watch?v=AwicscsvGLg">cookies vs localStorage vs sessionStorage - Beau teaches JavaScript</a> (YouTube)</p>
</code></pre><p>You could also use <code>max-age</code> and pass it a negative value:</p><pre><code class="language-js">document.cookie = 'dark_mode=true; max-age=-60'; // 1 minute earlier
</code></pre><p>There are a few values you can set for <code>SameSite</code>: </p><ul><li><code>Lax</code>: Cookies are not sent for embedded content (images, iframes, etc.) but are sent when you click on a link or send a request to the origin the cookie is set for. For example, if you're on <code>testing.com</code> and you click on a link to go to <code>test.com/about</code>, your browser will send your cookie for <code>test.com</code> with that request</li><li><code>Strict</code>: Cookies are only sent when you click on a link or send a request from the origin the cookie is set for. For example, your <code>test.com</code> cookie will only be sent while you're in and around <code>test.com</code>, and not coming from other sites like <code>testing.com</code></li><li><code>None</code>: Cookies will be sent with every request, regardless of context. If you set <code>SameSite</code> to <code>None</code>, you must also add the <code>Secure</code> attribute. It's better to avoid this value if possible</li></ul><p>Major browsers handle <code>SameSite</code> a bit differently. For example, if <code>SameSite</code> isn't set on a cookie, Google Chrome sets it to <code>Lax</code> by default.</p><h2 id="alternatives-to-cookies">Alternatives to cookies</h2><p>You might be wondering, if there are so many potential security flaws with cookies, why are we still using them? Surely there must be a better alternative.</p><p>These days, you can use either <code>sessionStorage</code> or <code>localStorage</code> to store information that originally used cookies. And for stateful sessions, there's token-based authentication with things like JWT (JSON Web Tokens).</p><p>While it may seem like you have to choose between cookie-based or token-based authentication, it's possible to use both. For example, you might want use cookie-based authentication when someone signs in through the browser, and token-based authentication when someone signs in through a phone app.</p><p>To muddy the waters a bit more, authentication-as-a-service providers like Auth0 allow you to do both types of authentication.</p><p>If you'd like to learn more about web tokens and token-based authentication, check out some of our articles <a href="/news/search/?query=web%20tokens">here</a>.</p><h2 id="when-you-give-a-developer-a-cookie">When you give a developer a cookie</h2><p>That's it! That should be just about everything you need to know to get started with using cookies, and what to watch out for along the way.</p><p>Did you find this useful? How do you use cookies? Let me know over on <a href="https://twitter.com/kriskoishigawa">Twitter</a>.</p>
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
