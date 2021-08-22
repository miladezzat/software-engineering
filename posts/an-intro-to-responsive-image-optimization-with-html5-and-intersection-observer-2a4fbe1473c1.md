---
card: "https://cdn-media-1.freecodecamp.org/images/1*VjKU4KyUs4A7oaRA-3j0Dg.jpeg"
tags: [Web Development]
author: "Milad E. Fahmy"
title: "An intro to responsive image optimization with HTML5 and Intersection Observer"
created: "2021-08-16T11:43:38+02:00"
modified: "2021-08-16T11:43:38+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-html5 tag-technology tag-productivity tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">An intro to responsive image optimization with HTML5 and Intersection Observer</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*VjKU4KyUs4A7oaRA-3j0Dg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*VjKU4KyUs4A7oaRA-3j0Dg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*VjKU4KyUs4A7oaRA-3j0Dg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*VjKU4KyUs4A7oaRA-3j0Dg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*VjKU4KyUs4A7oaRA-3j0Dg.jpeg" alt="An intro to responsive image optimization with HTML5 and Intersection Observer">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
the-death-star-480w.jpg 1.5x,
the-death-star-640w.jpg 2x"
src="the-death-star-640w.jpg"
alt="The Death Star"&gt;</code></pre><p>The browser, in this case, will choose the image best suited to its resolution. But, the assumption is that the image should be displayed in full screen (100vw). That’s usually not an awful assumption to make.</p><p>The <code>sizes</code> attribute is used to avoid this problem and, therefore, to help the browser choose the most optimized image for that case. You can use sizes to match your CSS layout exactly and tell the browser exactly how big that image is going to be on every screen size, matching how your breakpoints work in your design.</p><p>That can get a little complicated, and honestly it might be a little dangerous. You’re putting CSS stuff in markup and you know how that goes. It can be automated or injected server-side. Even in this case the syntax is really very simple:</p><pre><code class="language-html">&lt;img srcset="the-death-star-320w.jpg,
the-death-star-480w.jpg 1.5x,
the-death-star-640w.jpg 2x"
src="the-death-star-640w.jpg"
sizes="(min-width: 800px) 50vw, 100vw"
alt="The Death Star"&gt;</code></pre><h3 id="the-picture-element">The picture element</h3><p>There are different formats for optimizing images for the web, such as <code>webp</code>and <code>jpg2000</code>. But not all browsers are able to support them — Internet Explorer, for example. This should not preclude us from using the most optimized format for most modern browsers.</p><p>The picture element is a great way to provide alternative sources for image files, so the browser can choose depending on device capabilities. The syntax is very similar to the &lt;video&gt; element and allows you to use the attributes that I first showed you for the &lt;img&gt; element.</p><pre><code class="language-html">&lt;picture&gt;
&lt;source type="image/webp" srcset="the-death-star.webp"&gt;
&lt;source media=”(min-width: 320px)” srcset=”the-death-star-mn.jpg”&gt;
&lt;source media=”(min-width: 465px)” srcset=”the-death-star-sm.jpg”&gt;
&lt;source media=”(min-width: 650px)”
srcset=”the-death-star-md.jpg,
the-death-star-lg.jpg 1.5x”
sizes="(min-width: 800px) 50vw, 100vw"
&gt;
&lt;img src=”the-death-star.jpg” alt=”Flowers” style=”width:auto;”&gt;
src="placeholder-image.jpg"
data-src="image-to-lazy-load-1x.jpg"
data-srcset="image-to-lazy-load-2x.jpg 2x,
image-to-lazy-load-1x.jpg 1x" alt="I'm an image!"
&gt;</code></pre><p>The three relevant pieces of this markup are: the <code>class</code> attribute, and the <code>data-src</code> and <code>data-srcset</code> attributes. The last two are placeholder attributes containing the URL for the image we'll load, once the element is in the viewport.</p><pre><code class="language-js">document.addEventListener("DOMContentLoaded", () =&gt; {
var lazyImages =[].slice.call(
document.querySelectorAll("img.lazy")
)
if ("IntersectionObserver" in window) {
let lazyImageObserver =
new IntersectionObserver((entries, observer) =&gt; {
entries.forEach(function(entry) {
if (entry.isIntersecting) {
let lazyImage = entry.target;
lazyImage.src = lazyImage.dataset.src;
lazyImage.srcset = lazyImage.dataset.srcset;
lazyImage.classList.remove("lazy");
lazyImageObserver.unobserve(lazyImage);
}
});
});
lazyImages.forEach(function(lazyImage) {
lazyImageObserver.observe(lazyImage);
});
} else {
// Possibly fall back to a more compatible method here
}
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
