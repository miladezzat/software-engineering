---
card: "https://cdn-media-1.freecodecamp.org/images/1*2tyNWs0uYC0q-gwyWj8BTw.jpeg"
tags: [Web Development]
description: "Have you ever seen an “Add to Home Screen” banner, like above"
author: "Milad E. Fahmy"
title: "Progressive Web Apps 101: the What, Why and How"
created: "2021-08-16T10:12:30+02:00"
modified: "2021-08-16T10:12:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-react tag-progressive-web-app tag-javascript tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Progressive Web Apps 101: the What, Why and How</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*2tyNWs0uYC0q-gwyWj8BTw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*2tyNWs0uYC0q-gwyWj8BTw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*2tyNWs0uYC0q-gwyWj8BTw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*2tyNWs0uYC0q-gwyWj8BTw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*2tyNWs0uYC0q-gwyWj8BTw.jpeg" alt="Progressive Web Apps 101: the What, Why and How">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
//caching for offline viewing
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
