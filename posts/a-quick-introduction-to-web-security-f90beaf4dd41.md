---
card: "https://cdn-media-1.freecodecamp.org/images/1*xw9gprMTI6h3U3NkKV0vUg.jpeg"
tags: [Web Development]
description: "There are many reasons to learn about web security, such as:"
author: "Milad E. Fahmy"
title: "A quick introduction to web security"
created: "2021-08-16T10:11:52+02:00"
modified: "2021-08-16T10:11:52+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-tech tag-programming tag-software-engineering tag-security ">
<header class="post-full-header">
<h1 class="post-full-title">A quick introduction to web security</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*xw9gprMTI6h3U3NkKV0vUg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*xw9gprMTI6h3U3NkKV0vUg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*xw9gprMTI6h3U3NkKV0vUg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*xw9gprMTI6h3U3NkKV0vUg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*xw9gprMTI6h3U3NkKV0vUg.jpeg" alt="A quick introduction to web security">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h4 id="a-web-developer-s-primer-on-cors-csp-hsts-and-all-the-web-security-acronyms-">A web developer’s primer on CORS, CSP, HSTS, and all the web security acronyms!</h4><p>There are many reasons to learn about web security, such as:</p><ul><li>You’re a concerned user who is worried about your personal data being leaked</li><li>You’re a concerned web developer who wants to make their web apps more secure</li><li>You’re a web developer applying to jobs, and you want to be ready if your interviewers ask you questions about web security</li></ul><p>and so on.</p><p>Well this post will explain some common web security acronyms in a way that is easy to understand but still accurate.</p><p>Before we do that, let’s make sure we understand a couple of core concepts of security.</p><h3 id="two-core-concepts-of-security">Two Core Concepts of Security</h3><h4 id="no-one-is-ever-100-safe-"><strong>No one is ever 100% safe.</strong></h4><p>There is no notion of being 100% protected from being hacked. If anyone ever tells you that, they are wrong.</p><h4 id="one-layer-of-protection-is-not-enough-"><strong>One layer of protection is not enough.</strong></h4><p>You can’t just say…</p><blockquote>Oh, because I have CSP implemented, I am safe. I can cross off cross-site scripting from my vulnerabilities list because that can’t happen now.</blockquote><p>Maybe that is a given to some, but it is easy to find yourself thinking in this manner. I think one reason that programmers can easily find themselves thinking this way is because so much of coding is black and white, 0 or 1, true or false. Security is not so simple.</p><p>We’ll start off with one that everyone runs into fairly early on in their web development journey. And then you look on StackOverflow and find a bunch of answers telling you how to bypass it.</p><h3 id="cross-origin-resource-sharing-cors-">Cross-Origin Resource Sharing (CORS)</h3><p>Have you ever gotten an error that looked something like this?</p><pre><code>No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access.</code></pre><p>You are certainly not alone. And then you Google it, and someone tells you to get this extension that will make all your problems go away!</p><blockquote>Great, right?</blockquote><p><strong>CORS is there to protect you, not hurt you!</strong></p><p>In order to explain how CORS helps you, let’s first talk about cookies, specifically <strong>authentication cookies</strong>. Authentication cookies are used to tell a server that you are logged in, and they are automatically sent with any request you make to that server.</p><p>Let’s say you’re logged in to Facebook, and they use authentication cookies. You click on <code>bit.ly/r43nugi</code> which redirects you to <code>superevilwebsite.rocks</code>. A script within <code>superevilwebsite.rocks</code> makes a client-side request to <code>facebook.com</code> which sends your authentication cookie!</p><p>In a no-CORS world, they could make changes to your account without you even knowing. Until, of course, they post <code>bit.ly/r43nugi</code> on your timeline, and all of your friends click on it, and then they post <code>bit.ly/r43nugi</code> on all of your friends’ timelines and then the cycle continues in an evil breadth-first scheme that conquers all of Facebook’s users, and the world is consumed by <code>superevilwebsite.rocks</code>. ?</p><p>In a CORS world, however, Facebook would only allow requests with an origin of <code>facebook.com</code> to edit data on their server. In other words, they would limit cross-origin resource sharing. You might then ask…</p><blockquote>Well can superevilwebsite.rocks just change the origin header on their request, so that it looks like it is coming from facebook.com?</blockquote><p>They can try, but it won’t work because the browser will just ignore it and use the real origin.</p><blockquote>Ok, but what if superevilwebsite.rocks made the request server-side?</blockquote><p>In this case, they could bypass CORS, but they will not win because they won’t be able to send your authentication cookie along for the ride. The script would need to execute on the client side to get access to your client side cookies.</p><h3 id="content-security-policy-csp-">Content Security Policy (CSP)</h3><p>To understand CSP, we first need to talk about one of the most common vulnerabilities on the web: XSS, which stands for cross-site scripting (yay — another acronym).</p><p>XSS is when some evil person injects JavaScript into your client-side code. You might think…</p><blockquote>What are they going to do? Change a color from red to blue?</blockquote><p>Let’s assume that someone has successfully injected JavaScript into client-side code of a website you are visiting.</p><p>What could they do that would be malicious?</p><ul><li>They could make HTTP requests to another site pretending to be you.</li><li>They could add an anchor tag that sends you to a website that looks identical to the one you are on with some slightly different, malicious characteristics.</li><li>They could add a script tag with inline JavaScript.</li><li>They could add a script tag that fetches a remote JavaScript file somewhere.</li><li>They could add an iframe that covers the page and looks like part of the website prompting you to insert your password.</li></ul><p>The possibilities are endless.</p><p>CSP tries to prevent this from happening by limiting:</p><ul><li>what can be opened in an iframe</li><li>what stylesheets can be loaded</li><li>where requests can be made, etc.</li></ul><p>So how does it work?</p><p>When you click on a link or type a website URL in the address bar of your browser, your browser makes a GET request. It eventually makes its way to a server which serves up HTML along with some HTTP headers. If you’re curious about what headers you receive, open up the Network tab in your console, and visit some websites.</p><p>You might see a response header that looks like this:</p><pre><code>content-security-policy: default-src * data: blob:;script-src *.facebook.com *.fbcdn.net *.facebook.net *.google-analytics.com *.virtualearth.net *.google.com 127.0.0.1:* *.spotilocal.com:* 'unsafe-inline' 'unsafe-eval' *.atlassolutions.com blob: data: 'self';style-src data: blob: 'unsafe-inline' *;connect-src *.facebook.com facebook.com *.fbcdn.net *.facebook.net *.spotilocal.com:* wss://*.facebook.com:* https://fb.scanandcleanlocal.com:* *.atlassolutions.com attachment.fbsbx.com ws://localhost:* blob: *.cdninstagram.com 'self' chrome-extension://boadgeojelhgndaghljhdicfkmllpafd chrome-extension://dliochdbjfkdbacpmhlcpmleaejidimm;</code></pre><p>That is the content security policy of <code>facebook.com</code>. Let’s reformat it to make it easier to read:</p><pre><code>content-security-policy:
default-src * data: blob:;
script-src *.facebook.com *.fbcdn.net *.facebook.net *.google-analytics.com *.virtualearth.net *.google.com 127.0.0.1:* *.spotilocal.com:* 'unsafe-inline' 'unsafe-eval' *.atlassolutions.com blob: data: 'self';
style-src data: blob: 'unsafe-inline' *;
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
