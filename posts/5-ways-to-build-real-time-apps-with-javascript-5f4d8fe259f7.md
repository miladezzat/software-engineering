---
card: "https://cdn-media-1.freecodecamp.org/images/1*9ldkwChSUEeQGlbVzcJSVg.png"
tags: [JavaScript]
description: "There was a point in time where we didn’t expect too much fro"
author: "Milad E. Fahmy"
title: "5 ways to build real-time apps with JavaScript"
created: "2021-08-16T10:08:04+02:00"
modified: "2021-08-16T10:08:04+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-programming tag-web-development tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">5 ways to build real-time apps with JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*9ldkwChSUEeQGlbVzcJSVg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*9ldkwChSUEeQGlbVzcJSVg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*9ldkwChSUEeQGlbVzcJSVg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*9ldkwChSUEeQGlbVzcJSVg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*9ldkwChSUEeQGlbVzcJSVg.png" alt="5 ways to build real-time apps with JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
setTimeout(function(){
$.ajax({ url: "server", success: function(data){
//Update your dashboard gauge
salesGauge.setValue(data.value);
//Setup the next poll recursively
poll();
}, dataType: "json"});
}, 30000);
using System.Web;
using Microsoft.AspNet.SignalR;
namespace SignalRChat
{
public class ChatHub : Hub
{
public void Send(string name, string message)
{
// Call the broadcastMessage method to update clients.
Clients.All.broadcastMessage(name, message);
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
