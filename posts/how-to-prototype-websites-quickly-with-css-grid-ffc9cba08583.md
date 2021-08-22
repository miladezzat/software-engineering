---
card: "https://cdn-media-1.freecodecamp.org/images/1*F1NggJ-SsRSq306y3vCong.png"
tags: [CSS]
description: "The CSS Grid module is a fantastic tool for creating mockups "
author: "Milad E. Fahmy"
title: "CSS Grid tutorial: Learn to prototype websites quickly with CSS Grid"
created: "2021-08-16T10:20:04+02:00"
modified: "2021-08-16T10:20:04+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-web-development tag-design tag-ux tag-web-design ">
<header class="post-full-header">
<h1 class="post-full-title">CSS Grid tutorial: Learn to prototype websites quickly with CSS Grid</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*F1NggJ-SsRSq306y3vCong.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*F1NggJ-SsRSq306y3vCong.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*F1NggJ-SsRSq306y3vCong.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*F1NggJ-SsRSq306y3vCong.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*F1NggJ-SsRSq306y3vCong.png" alt="CSS Grid tutorial: Learn to prototype websites quickly with CSS Grid">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;div class="header"&gt;HEADER&lt;/div&gt;
&lt;div class="menu"&gt;MENU&lt;/div&gt;
&lt;div class="content"&gt;CONTENT&lt;/div&gt;
&lt;div class="footer"&gt;FOOTER&lt;/div&gt;
&lt;/div&gt;
</code></pre><h4 id="2-basic-setup-in-css">2. Basic setup in CSS</h4><p>Then we need to set up our grid and specify how many rows and columns we need. Here’s the first CSS for doing that:</p><pre><code class="language-css">.container {
display: grid;
grid-template-columns: repeat(12, 1fr);
grid-template-rows: 50px 350px 50px;
grid-gap: 5px;
}
</code></pre><p>I’m going to add more later, but I first want you to understand this.</p><p>Here’s what the above code says: create a grid with twelve columns, each being one fraction unit wide (1/12 of the total width). Create three rows, where the first will be 50px tall, the second 350px and the third one 50px. Finally, add a gap between the items in the grid.</p><h4 id="3-adding-grid-template-areas">3. Adding grid-template-areas</h4><p>The feature which will allow us to experiment with layout super easily is called <em>template areas.</em></p><p>To add it to the grid we’ll simply give the container a <code>grid-template-areas</code> property. The syntax might be a bit weird, as it’s unlike any other CSS syntax out there. Here it is:</p><pre><code class="language-css">.container {
display: grid;
grid-gap: 5px;
grid-template-columns: repeat(12, 1fr);
grid-template-rows: 50px 350px 50px;
grid-template-areas:
"h h h h h h h h h h h h"
"m m c c c c c c c c c c"
"f f f f f f f f f f f f";}
</code></pre><p>The logic behind the <code>grid-template-areas</code> property is that you create a visual representation of your grid in the code. As you can see, it has three rows and twelve columns, just like we’ve defined in <code>grid-template-columns</code> and <code>grid-template-rows</code>.</p><p>Each line represents a row and each of the characters (h, m, c, f) represent a grid cell.</p><p>Each of the four letters now forms a rectangular <code>grid-area</code>.</p><p>As you might have guessed, I’ve chosen the characters <code>h</code>, <code>m</code>, <code>c</code>, <code>f</code> because our grid consists of <code>header</code>, <code>menu</code>, <code>content</code> and <code>footer</code>. I could have called them whatever I wanted, of course, but it makes sense to use the first character of the items they’re describing.</p><h4 id="4-giving-areas-to-the-items">4. Giving areas to the items</h4><p>Now we need to connect these characters with our items in the grid. To do that we’ll use the <code>grid-area</code> property:</p><pre><code class="language-css">.header {
grid-area: h;
}
.menu {
grid-area: m;
}
.content {
grid-area: c;
}
.footer {
grid-area: f;
}
“h h h h h h h h h h h h”
"c c c c c c c c c c m m”
“f f f f f f f f f f f f”;
“. h h h h h h h h h h .”
"c c c c c c c c c c m m”
“. f f f f f f f f f f .”;
.container {
grid-template-areas:
"m m m m m m h h h h h h"
"c c c c c c c c c c c c"
"f f f f f f f f f f f f";}
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
