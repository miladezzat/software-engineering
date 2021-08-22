---
card: "/images/default.jpg"
tags: [Web Security]
description: Forget the post for a minute, let's begin with what this titl
author: "Milad E. Fahmy"
title: "Slow Loris attack using JavaScript on a PHP Server [and its prevention!]"
created: "2021-08-15T19:32:38+02:00"
modified: "2021-08-15T19:32:38+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-security tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">Slow Loris attack using JavaScript on a PHP Server [and its prevention!]</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/10/websec.jpg 300w,
/news/content/images/size/w600/2019/10/websec.jpg 600w,
/news/content/images/size/w1000/2019/10/websec.jpg 1000w,
/news/content/images/size/w2000/2019/10/websec.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/10/websec.jpg" alt="Slow Loris attack using JavaScript on a PHP Server [and its prevention!]">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Forget the post for a minute, let's begin with what this title is about! This is a web security-based article which will get into the basics about how HTTP works. We'll also look at a simple attack which exploits the way the HTTP protocol works.</p>
<h2 id="what-is-http">What is HTTP?</h2>
<p><strong>HTTP, </strong>HyperText Transfer Protocol, is the protocol used by the web for communication. Your device, when you use a browser, uses this particular protocol to send requests to remote servers to request data from them. </p>
<p>It's basically like you saying to your mom, "Hey mom, I need to eat the item in the fridge present at shelf 2, could you give it to me?"</p>
<p>And your mom says, "Sure, here you go", and sends you that item. Now, HTTP is the way you were able to communicate this information to your mom, more like the language you used for communication.</p>
<h2 id="how-http-works">How HTTP Works</h2>
<p>Here's a TL;DR video if you're a video person. Otherwise, proceed with the article:</p>
<p>HTTP (Layer 7) is built on the top of TCP protocol (Layer 4). We can use <code>nc</code> (netcat) utility to open a raw TCP socket to any website running on HTTP (usually port 80). See the following example on how we connect to HTTP port 80 for google.com using netcat:</p>
<p>See the data we sent:</p><pre><code class="language-shell">GET / HTTP/1.1
Host: google.com
X-header-1: somemoredata
X-header-2: somemoredata
&lt;empty line&gt;</code></pre>
<p>Ignore the extra <code>X-header-*</code> headers, they're just random headers you can send with your request. The important header to include in HTTP/1.1 spec is the <code>Host</code> header.</p>
<p>And the response we got:</p><pre><code class="language-shell">HTTP/1.1 301 Moved Permanently
Location: http://www.google.com/
Content-Type: text/html; charset=UTF-8
Date: Tue, 01 Oct 2019 23:24:13 GMT
Expires: Thu, 31 Oct 2019 23:24:13 GMT
Cache-Control: public, max-age=2592000
Server: gws
Content-Length: 219
X-XSS-Protection: 0
X-Frame-Options: SAMEORIGIN
Accept-Ranges: none
Via: HTTP/1.1 forward.http.proxy:3128
Connection: keep-alive
&lt;HTML&gt;&lt;HEAD&gt;&lt;meta http-equiv="content-type" content="text/html;charset=utf-8"&gt;
&lt;TITLE&gt;301 Moved&lt;/TITLE&gt;&lt;/HEAD&gt;&lt;BODY&gt;
&lt;H1&gt;301 Moved&lt;/H1&gt;
The document has moved
&lt;A HREF="http://www.google.com/"&gt;here&lt;/A&gt;.
&lt;/BODY&gt;&lt;/HTML&gt;</code></pre>
<p>Thus, HTTP is a plaintext protocol consisting of the request information sent by the client and the response as shown above.</p>
<h2 id="slow-loris-attack">Slow Loris Attack</h2>
<p>A Slow Loris attack exploits the fact that I could make an HTTP request very very slowly. In other words, I can initiate an HTTP request to the server and keep sending data to the server very slowly in order to keep that connection alive. And at the same time, it never ends that connection and opens multiple such connections to exhaust the connection pool of the server.</p>
<p><strong>Disclaimer</strong> - Penetration testing any online/offline service not owned by you without prior written permission is <strong>illegal</strong> and I'm not responsible for any damage caused. <strong>Use this content for educational purposes only.</strong></p>
<h2 id="slow-loris-demonstration-">Slow Loris Demonstration:</h2>
<p>This means, I could keep on sending additional data to the server in the form of headers. Now, I'll start a simple PHP development server on my machine:</p>
<p>And I use a simple Node script to perform what we discussed above on my local server:</p>
<p>You can find the Node script used <a href="https://gist.github.com/mehulmpt/49eee6cc0e84d6770b904336d0ad7f3e">here</a>.</p>
<p>After some time, you'll see that our PHP server actually crashes!</p>
<p>This is because there are way too many open connections and PHP cannot handle any more open connections (due to memory/hardware limits).</p>
<p>Now, of course this works flawlessly on a local development server. But if you're able to find a server which does not implement protections against slow loris attacks, it is a big problem for them.</p>
<h2 id="protections-against-a-slow-loris-attack">Protections against a Slow Loris attack</h2>
<p></p>
<ul>
<li>Use solutions like Cloudflare in front of your servers to prevent DoS/DDoS<br>Quoting from Cloudflare's site:</li>
</ul>
<blockquote>Cloudflare <strong>buffers incoming requests</strong> before starting to send anything to the origin server. As a result, “low and slow” attack traffic like Slowloris attacks never reach the intended target. Learn more about how Cloudflare's DDoS protection stops slowloris attacks.</blockquote>
<ul>
<li>Rate limit number of simultaneous connections open by a particular IP address to a small number. This could be achieved using simple frontend reverse proxy servers like nginx using their leaky bucket algorithm implementation. How that works, is something for another day!</li>
<li>Increasing the server capacity - Now this might mitigate small attacks, but honestly attacker can and would scale/amplify the original attack quite easily due to the less bandwidth required to carry out such an attack.</li>
</ul>
<h2 id="conclusion">Conclusion</h2>
<p>A lot of servers (nginx/apache2 new versions) come with slow loris attack protections by default. But for a lot of internal services, servers might be vulnerable to this simple attack. </p>
<p>You might want to check your services and implement the fixes. Web security is an exciting area, and I plan to do a web series on it on <a href="https://www.youtube.com/codedamn">codedamn</a>. You can connect with me on <a href="https://twitter.com/mehulmpt">twitter</a> for updates too. Till then, be safe!</p>
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
