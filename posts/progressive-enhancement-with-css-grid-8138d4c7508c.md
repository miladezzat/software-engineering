---
card: "https://cdn-media-1.freecodecamp.org/images/1*W_qmeZuel90pFUHZ89TfZQ.png"
tags: [CSS]
description: "CSS Grid (Grid) has been out for some time now, with full sup"
author: "Milad E. Fahmy"
title: "Progressive Enhancement with CSS Grid"
created: "2021-08-16T11:39:14+02:00"
modified: "2021-08-16T11:39:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-technology tag-software-development tag-design tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Progressive Enhancement with CSS Grid</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*W_qmeZuel90pFUHZ89TfZQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*W_qmeZuel90pFUHZ89TfZQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*W_qmeZuel90pFUHZ89TfZQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*W_qmeZuel90pFUHZ89TfZQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*W_qmeZuel90pFUHZ89TfZQ.png" alt="Progressive Enhancement with CSS Grid">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;html&gt;
&lt;head&gt;
&lt;link rel="stylesheet" type="text/css" href="main.css" /&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="page-container"&gt;
&lt;div id="content-wrap"&gt;
&lt;!-- all other page content --&gt;
&lt;/div&gt;
&lt;footer id="footer"&gt;&lt;/footer&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>There are two main parts to adding Grid:</p><ul><li>adding the needed new grid properties</li><li>overriding any properties no longer needed.</li></ul><p><code>main.css</code>:</p><pre><code class="language-css">#page-container {
position: relative;
min-height: 100vh;
}
#content-wrap {
padding-bottom: 2.5rem;    /* Footer height */
}
#footer {
position: absolute;
bottom: 0;
width: 100%;
height: 2.5rem;      /* Footer height */
}</code></pre><p><code>main.css</code> can be extended to <strong>add</strong>:</p><pre><code class="language-css">@supports (display: grid) {
#page-container {
position: static;               // override
display: grid;                  // new
grid-template-rows: 1fr auto;   // new
grid-template-columns: 100%;    // new
}
#content-wrap {
padding-bottom: 0;              // override
}
#footer {
position: static;               // override
height: auto;                   // override
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
