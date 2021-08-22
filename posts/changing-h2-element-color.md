---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9aa8740569d1a4ca26ea.jpg"
tags: [CSS]
description: "In coding there are often many different solutions to a given"
author: "Milad E. Fahmy"
title: "Changing H2 Element Color"
created: "2021-08-15T22:49:19+02:00"
modified: "2021-08-15T22:49:19+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-html tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">Changing H2 Element Color</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9aa8740569d1a4ca26ea.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9aa8740569d1a4ca26ea.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9aa8740569d1a4ca26ea.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9aa8740569d1a4ca26ea.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9aa8740569d1a4ca26ea.jpg" alt="Changing H2 Element Color">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>In coding there are often many different solutions to a given problem. This is especially true when it comes to styling an HTML element.</p><p>One of the easiest things to change is the color of text. But sometimes it seems like nothing you try is working:</p><pre><code class="language-html">&lt;style&gt;
h2 .red-text {
color: red;
}
&lt;/style&gt;
&lt;h2 class="red-text" color=red;&gt;CatPhotoApp&lt;/h2&gt;</code></pre><p>So how can you change the color of the H2 element to red?</p><h3 id="option-1-inline-css">Option #1: Inline CSS</h3><p>One way would be to use inline CSS to style the element directly.</p><p>Like with the other methods, formatting is important. Take a look again at the code above:</p><pre><code class="language-html">&lt;h2 class="red-text" color=red;&gt;CatPhotoApp&lt;/h2&gt;</code></pre><p>To use inline styling, make sure to use the <code>style</code> attribute, and to wrap the properties and values in double quotes ("):</p><pre><code class="language-html">&lt;h2 class="red-text" style="color: red;"&gt;CatPhotoApp&lt;/h2&gt;</code></pre><h3 id="option-2-use-css-selectors">Option #2: Use CSS selectors</h3><p>Rather than using inline styling, you could separate your HTML, or the structure and content of the page, from the styling, or CSS.</p><p>First, get rid of the inline CSS:</p><pre><code class="language-html">&lt;style&gt;
h2 .red-text {
color: red;
}
&lt;/style&gt;
&lt;h2 class="red-text"&gt;CatPhotoApp&lt;/h2&gt;</code></pre><p>But you need to be careful about the CSS selector you use. Take a look at the <code>&lt;style&gt;</code> element:</p><pre><code class="language-css">h2 .red-text {
color: red;
}</code></pre><p>When there's a space, the selector <code>h2 .red-text</code> is telling the browser to target the element with the class <code>red-text</code> that's child of <code>h2</code>. However, the H2 element doesn't have a child – you're trying to style the H2 element itself.</p><p>To fix this, remove the space:</p><pre><code class="language-css">h2.red-text {
color: red;
}</code></pre><p>Or just target the <code>red-text</code> class directly:</p><pre><code class="language-css">.red-text {
color: red;
}</code></pre>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
