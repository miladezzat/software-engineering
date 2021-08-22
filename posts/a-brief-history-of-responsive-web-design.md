---
card: "https://cdn-media-2.freecodecamp.org/w1280/6034711fa675540a22921aad.jpg"
tags: [Responsive Design]
description: "These days, responsive web design is something we all take fo"
author: "Milad E. Fahmy"
title: "A Brief History of Responsive Web Design"
created: "2021-08-16T10:04:06+02:00"
modified: "2021-08-16T10:04:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-responsive-design tag-web-design tag-web-development tag-html tag-css ">
<header class="post-full-header">
<h1 class="post-full-title">A Brief History of Responsive Web Design</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/6034711fa675540a22921aad.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/6034711fa675540a22921aad.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/6034711fa675540a22921aad.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/6034711fa675540a22921aad.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/6034711fa675540a22921aad.jpg" alt="A Brief History of Responsive Web Design">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
.container {
width: 250px;
outline: solid;
text-align: center;
}
&lt;/style&gt;
&lt;body&gt;
&lt;div class="container"&gt;
&lt;img src="./images/kelly-sikkema-v9FQR4tbIq8-unsplash.jpg" /&gt;
&lt;p&gt;Example image&lt;/p&gt;
&lt;/div&gt;
&lt;/body&gt;
.container {
width: 250px;
outline: solid;
text-align: center;
}
.my-image {
max-width: 100%;
}
&lt;/style&gt;
&lt;body&gt;
&lt;div class="container"&gt;
&lt;img
class="my-image"
src="./images/kelly-sikkema-v9FQR4tbIq8-unsplash.jpg"
/&gt;
&lt;p&gt;Example image&lt;/p&gt;
&lt;/div&gt;
&lt;/body&gt;
.container {
width: 600px;
outline: solid;
text-align: center;
}
.my-image {
max-width: 100%;
}
&lt;/style&gt;
&lt;body&gt;
&lt;div class="container"&gt;
&lt;img
class="my-image"
src="./images/kelly-sikkema-v9FQR4tbIq8-unsplash.jpg"
/&gt;
&lt;p&gt;Example image&lt;/p&gt;
&lt;/div&gt;
&lt;/body&gt;
background-color: red;
}</code></pre><p>Even though they were a bit simpler back then, media queries allowed developers to implement breakpoints, which are still used in responsive web design today.</p><p>A breakpoint is just when a website changes layouts or other styles based on the device or browser window's width. For example, here's the full code for the snippet above:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8" /&gt;
&lt;meta http-equiv="X-UA-Compatible" content="IE=edge" /&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
&lt;/head&gt;
&lt;style&gt;
.container {
width: 250px;
outline: solid;
text-align: center;
}
.my-image {
max-width: 100%;
}
@media screen and (max-width: 500px) {
.container {
background-color: red;
}
}
&lt;/style&gt;
&lt;body&gt;
&lt;div class="container"&gt;
&lt;img
class="my-image"
src="./images/kelly-sikkema-v9FQR4tbIq8-unsplash.jpg"
/&gt;
&lt;p&gt;Example image&lt;/p&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
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
