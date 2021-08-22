---
card: "https://cdn-media-1.freecodecamp.org/images/0*uarF1UhF3lwjGaG6."
tags: [Tech]
description: "What if I told you that by the end of this article, you’d be "
author: "Milad E. Fahmy"
title: "How to code a satellite algorithm and cook paella from scratch"
created: "2021-08-16T14:42:53+02:00"
modified: "2021-08-16T14:42:53+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-tech tag-life-lessons tag-programming tag-javascript tag-self-improvement ">
<header class="post-full-header">
<h1 class="post-full-title">How to code a satellite algorithm and cook paella from scratch</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*uarF1UhF3lwjGaG6. 300w,
https://cdn-media-1.freecodecamp.org/images/0*uarF1UhF3lwjGaG6. 600w,
https://cdn-media-1.freecodecamp.org/images/0*uarF1UhF3lwjGaG6. 1000w,
https://cdn-media-1.freecodecamp.org/images/0*uarF1UhF3lwjGaG6. 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*uarF1UhF3lwjGaG6." alt="How to code a satellite algorithm and cook paella from scratch">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
var resultArr = [];
for (var teapot = 0; teapot &lt; arguments[0].length; teapot++) {
var GM = 398600.4418;
var earthRadius = 6367.4447;
var avgAlt = arguments[0][teapot]['avgAlt'];
var name = arguments[0][teapot]['name'];
var orbitalPeriod = 2 * Math.PI * (Math.sqrt(Math.pow((earthRadius + avgAlt), 3) / GM));
var result = {
name: name,
orbitalPeriod: Math.round(orbitalPeriod)
}
resultArr.push(result);
}
return resultArr;
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
