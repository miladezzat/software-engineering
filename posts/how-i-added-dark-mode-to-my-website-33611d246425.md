---
card: "https://cdn-media-1.freecodecamp.org/images/0*izsJBvK2z3sNZvkh.png"
tags: [JavaScript]
description: I recently redesigned my website. Here are 2 pictures of how
author: "Milad E. Fahmy"
title: "How I added Dark Mode to my website"
created: "2021-08-15T19:37:31+02:00"
modified: "2021-08-15T19:37:31+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-dark-mode tag-css tag-tech tag-ux ">
<header class="post-full-header">
<h1 class="post-full-title">How I added Dark Mode to my website</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*izsJBvK2z3sNZvkh.png 300w,
https://cdn-media-1.freecodecamp.org/images/0*izsJBvK2z3sNZvkh.png 600w,
https://cdn-media-1.freecodecamp.org/images/0*izsJBvK2z3sNZvkh.png 1000w,
https://cdn-media-1.freecodecamp.org/images/0*izsJBvK2z3sNZvkh.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*izsJBvK2z3sNZvkh.png" alt="How I added Dark Mode to my website">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I recently redesigned <a href="https://flaviocopes.com" rel="noopener">my website</a>. Here are 2 pictures of how it <em>looked</em>, for reference:</p>
<p>I designed this website almost 1 year ago, and did many changes along the way, just as we do with any website.</p>
<p>Eventually I grew tired of the design: title is too big, too much space lost instead of showing the content right away, and so on.</p>
<p>I sat down yesterday evening and started re-imagining the website, and I finished the redesign this morning:</p>
<p>Much better! Content, the most important thing, is more prominent.</p>
<p>I used a monospaced font (Inconsolata) because as a programming blog it’s a nice one, despite the reduced readability and increased page size due to the font use, because I <em>want</em> that font on my site. I like it better, and since my site is a big part of my day to day activity, I wanted it to be what I want.</p>
<p>I just missed one thing: <strong>dark mode</strong>. As I was in the process of redesigning, I had the dark mode option in mind.</p>
<p>How did I do it? First, I added the Moon Emoji ? in the sidebar, as a way to let people change the mode from light to dark.</p>
<p>Then, I added a JavaScript snippet that runs when it’s clicked. I just added it to the <code>onclick</code> event handler inline in the HTML, without going fancier:</p><pre><code>&lt;p&gt;  &lt;a href="#" onclick="localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark') === 'dark' ? 'light' : 'dark'); localStorage.getItem('mode') === 'dark' ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')" title="Dark/light&lt;/p&gt;</code></pre>
<p>This is the JavaScript that runs in the onclick:</p><pre><code>localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark') === 'dark' ? 'light' : 'dark'); localStorage.getItem('mode') === 'dark' ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')</code></pre>
<p>It’s a bit convoluted, but basically I check if the <code>mode</code> property in the <a href="https://flaviocopes.com/web-storage-api/" rel="noopener">local storage</a> is ‘dark’ (and defaults to dark if it’s not set yet, using the <code>||</code> operator), and I set the opposite of that in the local storage.</p>
<p>Then I assign the <code>dark</code> class to the <code>body</code> HTML element, so we can use CSS to style the page in dark mode.</p>
<p>Another script runs as soon as the DOM loads, and checks if the mode is dark. If so, it adds the <code>dark</code> class to the <code>body</code> HTML element:</p><pre><code>document.addEventListener('DOMContentLoaded', (event) =&gt; {  ((localStorage.getItem('mode') || 'dark') === 'dark') ? document.querySelector('body').classList.add('dark') : document.querySelector('body').classList.remove('dark')})</code></pre>
<p>Now if people change modes, their choice will be remembered next time they load the page.</p>
<p>Then I added a lot of CSS instructions to the CSS, all prefixed with <code>body.dark</code>. Like these:</p><pre><code>body.dark {  background-color: rgb(30,34,39);  color: #fff;}body.dark code[class*=language-],body.dark table tbody&gt;tr:nth-child(odd)&gt;td,body.dark table tbody&gt;tr:nth-child(odd)&gt;th {  background: #282c34}</code></pre>
<p>Now things should already be working! Here is my site in dark mode:</p>
<p>I added the <code>dark</code> class to the <code>body</code> element by default, to make dark mode the default:</p><pre><code>&lt;body class="dark"&gt; ... &amp;lt;/body&gt;</code></pre>
<p>Why? First, I liked it better. Then, I made a poll on Twitter and people liked it better.</p>
<p>But also for a technical reason, a very simple one actually. I don’t store the user choice server-side, so I have no way to know the mode until the local storage is available.</p>
<p>I could do that if the site was generated server-side, but it’s a static site, so I always serve the same page to everyone that requests it. Even if I got a cookie, I have no place to process it (on the flip side this means my pages load faster).</p>
<p>So when someone navigates to another page on my site, or loads the page for the first time on a second visit, I don’t want to show a bright page while I determine the mode. Maybe the visitor is coding in the middle of the night in a dark room.</p>
<p>I’d rather do that in light mode: show a dark page for a couple milliseconds and then turn it white again.</p>
<p>The <em>Media Queries Level 5</em> specification, still in work in progress, contains a new <code><a href="https://drafts.csswg.org/mediaqueries-5/#prefers-color-scheme" rel="noopener">prefers-color-scheme</a></code> media feature. <a href="https://developer.apple.com/safari/technology-preview/" rel="noopener">Safari Technology Preview</a> on macOS already supports it and we can use it to tell if the user is browsing the page in dark or light mode:</p><pre><code>@media (prefers-color-scheme: dark) {  body {    background-color: black;    color: white;  }}@media (prefers-color-scheme: light) {  body {    background-color: white;    color: black;  }}</code></pre>
<p>Hopefully this is going to be stable in Safari soon, and in the future Chrome and Firefox will support it too.</p>
<p><em>Originally published at <a href="https://flaviocopes.com/dark-mode/" rel="noopener">flaviocopes.com</a>.</em></p>
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
