---
card: "https://cdn-media-1.freecodecamp.org/images/1*eIQx-sLpotbpIrRnhPLPMA.png"
tags: [Tech]
description: "What if all your mobile devices were a single screen? This pr"
author: "Milad E. Fahmy"
title: "What if all your mobile devices formed a single screen?"
created: "2021-08-16T11:50:57+02:00"
modified: "2021-08-16T11:50:57+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-tech tag-javascript tag-design tag-startup tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">What if all your mobile devices formed a single screen?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*eIQx-sLpotbpIrRnhPLPMA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*eIQx-sLpotbpIrRnhPLPMA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*eIQx-sLpotbpIrRnhPLPMA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*eIQx-sLpotbpIrRnhPLPMA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*eIQx-sLpotbpIrRnhPLPMA.png" alt="What if all your mobile devices formed a single screen?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
const http = require('http').Server(app);
const io = require('socket.io')(http);
app.get('/', (req, res) =&gt; {
res.sendFile(__dirname + '/index.html');
});
io.on('connection', (socket) =&gt; {
console.log('a user connected');
});
&lt;script&gt;
var socket = io();
socket.emit('message', 'Hello');
io.on('connection', (socket) =&gt; {
socket.on('message', (msg) =&gt; {
console.log('message: ' + msg);
socket.emit('messageBack', { message: 'Hello to you!'});
});
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
