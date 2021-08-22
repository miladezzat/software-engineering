---
card: "https://cdn-media-1.freecodecamp.org/images/0*q57QiIkbThi9Mqvl"
tags: [JavaScript]
description: "We learnt about what is a Progressive Web App (PWA) in part 1"
author: "Milad E. Fahmy"
title: "Progressive Web Apps 102: Building a Progressive Web App from scratch"
created: "2021-08-16T11:37:22+02:00"
modified: "2021-08-16T11:37:22+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-progressive-web-app tag-technology tag-programming tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">Progressive Web Apps 102: Building a Progressive Web App from scratch</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*q57QiIkbThi9Mqvl 300w,
https://cdn-media-1.freecodecamp.org/images/0*q57QiIkbThi9Mqvl 600w,
https://cdn-media-1.freecodecamp.org/images/0*q57QiIkbThi9Mqvl 1000w,
https://cdn-media-1.freecodecamp.org/images/0*q57QiIkbThi9Mqvl 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*q57QiIkbThi9Mqvl" alt="Progressive Web Apps 102: Building a Progressive Web App from scratch">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;title&gt;All the memes!&lt;/title&gt;
&lt;link rel="stylesheet" href="/styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;header&gt;
&lt;h1 class="center"&gt;Top trending memes today&lt;/h1&gt;
&lt;/header&gt;
&lt;main&gt;
&lt;div class="container"&gt;&lt;/div&gt;
&lt;/main&gt;
&lt;script src="app.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>As you can see, it is a simple <code>index.html</code> that only prints out the text <code>Top trending memes today</code>. Nothing fancy.</p><p>Next, let’s add an ability to fetch trending memes from <code>giphy.com</code>. Here is what the fetch function looks like:</p><pre><code class="language-js">async function fetchTrending() {
const res = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&amp;limit=25`);
const json = await res.json();
main.innerHTML = json.data.map(createMeme).join('\n');
}</code></pre><h3 id="let-s-make-it-progressive">Let’s make it progressive</h3><h4 id="step-1-manifest-file">Step 1: Manifest file</h4><p>As you may recall from part 1, the manifest file is a <code>json</code> file. It has meta information about the app like icon name, background color, the name of the app, etc. Here is a <code>manifest.json</code> file with these parameters:</p><pre><code class="language-json">{
"name": "Meme",
"short_name": "Meme",
"icons": [{
"src": "images/icons/icon-128x128.png",
"sizes": "128x128",
"type": "image/png"
}, {
"src": "images/icons/icon-144x144.png",
"sizes": "144x144",
"type": "image/png"
}, {
"src": "images/icons/icon-152x152.png",
"sizes": "152x152",
"type": "image/png"
}, {
"src": "images/icons/icon-192x192.png",
"sizes": "192x192",
"type": "image/png"
}, {
"src": "images/icons/icon-256x256.png",
"sizes": "256x256",
"type": "image/png"
}],
"start_url": "/index.html",
"display": "standalone",
"background_color": "#3E4EB8",
"theme_color": "#2F3BA2"
'./',
'./styles.css',
'./app.js'
];
self.addEventListener('install', async event =&gt; {
const cache = await caches.open('static-meme');
cache.addAll(staticAssets);
});
self.addEventListener('fetch', event =&gt; {
const {request} = event;
const url = new URL(request.url);
if(url.origin === location.origin) {
event.respondWith(cacheData(request));
} else {
event.respondWith(networkFirst(request));
}
});
async function cacheData(request) {
const cachedResponse = await caches.match(request);
return cachedResponse || fetch(request);
}
async function networkFirst(request) {
const cache = await caches.open('dynamic-meme');
try {
const response = await fetch(request);
cache.put(request, response.clone());
return response;
} catch (error){
return await cache.match(request);
}
}</code></pre><p>Let’s break this down. A service worker will help us cache data and fetch resources. If we have data in our cache, we return the data from cache or else fetch it from the network. For your own app, think of what functionality you will need to provide for offline access. Then, cache resources accordingly. For my case, I want to show previously cached images when the network is down.</p><p>We will need to add this to our index.html. To add it, we will register the service worker by leveraging the browser’s navigator library:</p><pre><code class="language-js">window.addEventListener('load', async e =&gt; {
await fetchTrending();
if ('serviceWorker' in navigator) {
try {
navigator.serviceWorker.register('serviceWorker.js');
console.log('SW registered');
} catch (error) {
console.log('SW failed');
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
