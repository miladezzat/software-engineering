---
card: "/images/default.jpg"
tags: [Pwa]
description: "Progressive web apps are a way to bring that native app feeli"
author: "Milad E. Fahmy"
title: "How to build a PWA from scratch with HTML, CSS, and JavaScript"
created: "2021-08-15T22:49:41+02:00"
modified: "2021-08-15T22:49:41+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-pwa tag-javascript tag-html tag-css ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a PWA from scratch with HTML, CSS, and JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/01/Group-1.png 300w,
/news/content/images/size/w600/2020/01/Group-1.png 600w,
/news/content/images/size/w1000/2020/01/Group-1.png 1000w,
/news/content/images/size/w2000/2020/01/Group-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/01/Group-1.png" alt="How to build a PWA from scratch with HTML, CSS, and JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Progressive web apps are a way to bring that native app feeling to a traditional web app. With PWAs we can enhance our website with mobile app features which increase usability and offer a great user experience.</p><p>In this article, we are going to build a PWA from scratch with HTML, CSS, and JavaScript. Here are the topics we'll cover:</p><ul><li><a href="#what-is-a-progressive-web-app">What is a Progressive Web App ?</a></li><li><a href="#markup">Markup</a></li><li><a href="#styling">Styling</a></li><li><a href="#show-data-with-javascript">Show data with JavaScript</a></li><li><a href="#web-app-manifest">Web App Manifest</a></li><li><a href="#what-is-a-service-worker">What is a Service Worker?</a></li><li><a href="#cache-the-assets">Cache the assets</a></li><li><a href="#fetch-the-assets">Fetch the assets</a></li><li><a href="#register-the-service-worker">Register the Service Worker</a></li><li><a href="#final-thoughts">Final thoughts</a></li><li><a href="#next-steps">Next steps</a></li></ul><p>So, let's get started with an important question: What the heck is a PWA?</p><h2 id="what-is-a-progressive-web-app">What is a Progressive Web App ?</h2><p>A Progressive Web App is a web app that delivers an app-like experience to users by using modern web capabilities. In the end, it's just your regular website that runs in a browser with some enhancements. It gives you the ability:</p><ul><li>To install it on a mobile home screen</li><li>To access it when offline</li><li>To access the camera</li><li>To get push notifications</li><li>To do background synchronization</li></ul><p>And so much more.</p><p>However, to be able to transform our traditional web app to a PWA, we have to adjust it a little bit by adding a web app manifest file and a service worker.</p><p>Don't worry about these new terms – we'll cover them below.</p><p>First, we have to build our traditional web app. So let's start with the markup.</p><h2 id="markup">Markup</h2><p>The HTML file is relatively simple. We wrap everything in the <code>main</code> tag.</p><ul><li>In <code>index.html</code></li></ul><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8" /&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
&lt;meta http-equiv="X-UA-Compatible" content="ie=edge" /&gt;
&lt;link rel="stylesheet" href="css/style.css" /&gt;
&lt;title&gt;Dev'Coffee PWA&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;main&gt;
&lt;nav&gt;
&lt;h1&gt;Dev'Coffee&lt;/h1&gt;
&lt;ul&gt;
&lt;li&gt;Home&lt;/li&gt;
&lt;li&gt;About&lt;/li&gt;
&lt;li&gt;Blog&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;
&lt;div class="container"&gt;&lt;/div&gt;
&lt;/main&gt;
&lt;script src="js/app.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
body {
background: #fdfdfd;
font-family: "Nunito", sans-serif;
font-size: 1rem;
}
main {
max-width: 900px;
margin: auto;
padding: 0.5rem;
text-align: center;
}
nav {
display: flex;
justify-content: space-between;
align-items: center;
}
ul {
list-style: none;
display: flex;
}
li {
margin-right: 1rem;
}
h1 {
color: #e74c3c;
margin-bottom: 0.5rem;
}
</code></pre><p>Then, we limit the <code>main</code> element's maximum width to <code>900px</code> to make it look good on a large screen.</p><p>For the navbar, I want the logo to be at the left and the links at the right. So for the <code>nav</code> tag, after making it a flex container, we use <code>justify-content: space-between;</code> to align them.</p><ul><li>In <code>css/style.css</code></li></ul><pre><code class="language-css">.container {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
grid-gap: 1rem;
justify-content: center;
align-items: center;
margin: auto;
padding: 1rem 0;
}
display: flex;
align-items: center;
flex-direction: column;
width: 15rem auto;
height: 15rem;
background: #fff;
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
border-radius: 10px;
margin: auto;
overflow: hidden;
}
width: 100%;
height: 10rem;
object-fit: cover;
}
color: #222;
font-weight: 700;
text-transform: capitalize;
font-size: 1.1rem;
margin-top: 0.5rem;
}
text-decoration: none;
background: #db4938;
color: #fff;
padding: 0.3rem 1rem;
border-radius: 20px;
}
const coffees = [
{ name: "Perspiciatis", image: "images/coffee1.jpg" },
{ name: "Voluptatem", image: "images/coffee2.jpg" },
{ name: "Explicabo", image: "images/coffee3.jpg" },
{ name: "Rchitecto", image: "images/coffee4.jpg" },
{ name: " Beatae", image: "images/coffee5.jpg" },
{ name: " Vitae", image: "images/coffee6.jpg" },
{ name: "Inventore", image: "images/coffee7.jpg" },
{ name: "Veritatis", image: "images/coffee8.jpg" },
{ name: "Accusantium", image: "images/coffee9.jpg" },
]
let output = ""
coffees.forEach(
({ name, image }) =&gt;
(output += `
&lt;/div&gt;
`)
)
container.innerHTML = output
}
document.addEventListener("DOMContentLoaded", showCoffees)
"name": "Dev'Coffee",
"short_name": "DevCoffee",
"start_url": "index.html",
"display": "standalone",
"background_color": "#fdfdfd",
"theme_color": "#db4938",
"orientation": "portrait-primary",
"icons": [
{
"src": "/images/icons/icon-72x72.png",
"type": "image/png", "sizes": "72x72"
},
{
"src": "/images/icons/icon-96x96.png",
"type": "image/png", "sizes": "96x96"
},
{
"src": "/images/icons/icon-128x128.png",
"type": "image/png","sizes": "128x128"
},
{
"src": "/images/icons/icon-144x144.png",
"type": "image/png", "sizes": "144x144"
},
{
"src": "/images/icons/icon-152x152.png",
"type": "image/png", "sizes": "152x152"
},
{
"src": "/images/icons/icon-192x192.png",
"type": "image/png", "sizes": "192x192"
},
{
"src": "/images/icons/icon-384x384.png",
"type": "image/png", "sizes": "384x384"
},
{
"src": "/images/icons/icon-512x512.png",
"type": "image/png", "sizes": "512x512"
}
]
}
</code></pre><p>In the end, it's just a JSON file with some mandatory and optional properties.</p><p>name: When the browser launches the splash screen, it will be the name displayed on the screen.</p><p>short_name: It will be the name displayed underneath your app shortcut on the home screen.</p><p>start_url: It will be the page shown to the user when your app is open.</p><p>display: It tells the browser how to display the app. There are several modes like <code>minimal-ui</code>, <code>fullscreen</code>, <code>browser</code> etc. Here, we use the <code>standalone</code> mode to hide everything related to the browser.</p><p>background_color: When the browser launches the splash screen, it will be the background of the screen.</p><p>theme_color: It will be the background color of the status bar when we open the app.</p><p>orientation: It tells the browser the orientation to have when displaying the app.</p><p>icons: When the browser launches the splash screen, it will be the icon displayed on the screen. Here, I used all sizes to fit any device's preferred icon. But you can just use one or two. It's up to you.</p><p>Now that we have a web app manifest, let's add it to the HTML file.</p><ul><li>In <code>index.html</code> (head tag)</li></ul><pre><code class="language-html">&lt;link rel="manifest" href="manifest.json" /&gt;
&lt;!-- ios support --&gt;
&lt;link rel="apple-touch-icon" href="images/icons/icon-72x72.png" /&gt;
&lt;link rel="apple-touch-icon" href="images/icons/icon-96x96.png" /&gt;
&lt;link rel="apple-touch-icon" href="images/icons/icon-128x128.png" /&gt;
&lt;link rel="apple-touch-icon" href="images/icons/icon-144x144.png" /&gt;
&lt;link rel="apple-touch-icon" href="images/icons/icon-152x152.png" /&gt;
&lt;link rel="apple-touch-icon" href="images/icons/icon-192x192.png" /&gt;
&lt;link rel="apple-touch-icon" href="images/icons/icon-384x384.png" /&gt;
&lt;link rel="apple-touch-icon" href="images/icons/icon-512x512.png" /&gt;
&lt;meta name="apple-mobile-web-app-status-bar" content="#db4938" /&gt;
&lt;meta name="theme-color" content="#db4938" /&gt;
const assets = [
"/",
"/index.html",
"/css/style.css",
"/js/app.js",
"/images/coffee1.jpg",
"/images/coffee2.jpg",
"/images/coffee3.jpg",
"/images/coffee4.jpg",
"/images/coffee5.jpg",
"/images/coffee6.jpg",
"/images/coffee7.jpg",
"/images/coffee8.jpg",
"/images/coffee9.jpg",
]
self.addEventListener("install", installEvent =&gt; {
installEvent.waitUntil(
caches.open(staticDevCoffee).then(cache =&gt; {
cache.addAll(assets)
})
)
})
fetchEvent.respondWith(
caches.match(fetchEvent.request).then(res =&gt; {
return res || fetch(fetchEvent.request)
})
)
})
window.addEventListener("load", function() {
navigator.serviceWorker
.register("/serviceWorker.js")
.then(res =&gt; console.log("service worker registered"))
.catch(err =&gt; console.log("service worker not registered", err))
})
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
