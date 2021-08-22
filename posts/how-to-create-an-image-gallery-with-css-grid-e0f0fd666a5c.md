---
card: "https://cdn-media-1.freecodecamp.org/images/1*2H0HPHmFNs2t78Zog8kd9w.png"
tags: [Design]
description: "Image galleries made by websites like Unsplash, Pinterest Etc"
author: "Milad E. Fahmy"
title: "How to create an image gallery with CSS Grid"
created: "2021-08-16T11:34:19+02:00"
modified: "2021-08-16T11:34:19+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-design tag-technology tag-programming tag-css tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to create an image gallery with CSS Grid</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*2H0HPHmFNs2t78Zog8kd9w.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*2H0HPHmFNs2t78Zog8kd9w.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*2H0HPHmFNs2t78Zog8kd9w.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*2H0HPHmFNs2t78Zog8kd9w.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*2H0HPHmFNs2t78Zog8kd9w.png" alt="How to create an image gallery with CSS Grid">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>Image <strong>galleries</strong> made by websites like <a href="https://unsplash.com/" rel="noopener">Unsplash</a>, <a href="https://www.pinterest.com/" rel="noopener">Pinterest</a> Etc, are made by techniques like <strong>positioning</strong> or <strong>translating</strong> the image item which is a very cumbersome task to do. You can achieve the same functionality very quickly using <strong>CSS Grids.</strong></p><blockquote><strong>For example:</strong> Above is a gallery of images with images of <strong>varying width</strong> and <strong>height</strong> which is a perfect use case for CSS grids.</blockquote><h4 id="let-s-get-started-"><strong>Let’s get started!</strong></h4><h3 id="the-underlying-grid">The Underlying Grid</h3><p>Now, let’s create an <strong>8x8 grid</strong>. We can create a grid of other sizes also but that depends on the type of gallery you want. In our case, an <strong>8x8 grid</strong> will be ideal.</p><ul><li>A grid container is defined by setting an element’s <strong>display</strong> property to the <strong>grid</strong>. So, the <strong>div</strong>, with the <strong>class grid</strong> is going to be our <strong>grid</strong> <strong>container.</strong></li><li>We use the <strong>grid-template-columns</strong> property to set the <strong>column tracks</strong> and <strong>grid-template-rows</strong> to set the <strong>row tracks. </strong>We declare these properties on the grid container. In our example, we will we be making an 8x8 grid container.</li><li><strong>grid-gap:</strong> It defines the size of the <strong>gap between rows</strong> <strong>and</strong> <strong>columns</strong> in a grid layout. The value for grid gap can be any CSS length unit. In our example, I have given the value of <strong>15px</strong> to make our <strong>grid look</strong> <strong>better</strong>.</li></ul><p><strong>HTML:</strong></p><pre><code class="language-html">&lt;div class="gallery"&gt;&lt;/div&gt;</code></pre><p><strong>CSS:</strong></p><pre><code class="language-css">.gallery {
display: grid;
grid-template-columns: repeat(8, 1fr);
grid-template-rows: repeat(8, 5vw);
grid-gap: 15px;
&lt;figure class=”gallery__item gallery__item--1"&gt;
&lt;img src="img/image-1.jpg" class="gallery__img" alt="Image 1"&gt;
&lt;/figure&gt;
&lt;figure class="gallery__item gallery__item--2"&gt;
&lt;img src="img/image-2.jpg" class="gallery__img" alt="Image 2"&gt;
&lt;/figure&gt;
&lt;figure class="gallery__item gallery__item--3"&gt;
&lt;img src="img/image-3.jpg" class="gallery__img" alt="Image 3"&gt;
&lt;/figure&gt;
&lt;figure class="gallery__item gallery__item--4"&gt;
&lt;img src="img/image-4.jpg" class="gallery__img" alt="Image 4"&gt;
&lt;/figure&gt;
&lt;figure class="gallery__item gallery__item--5"&gt;
&lt;img src="img/image-5.jpg" class="gallery__img" alt="Image 5"&gt;
&lt;/figure&gt;
&lt;figure class="gallery__item gallery__item--6"&gt;
&lt;img src="img/image-6.jpg" class="gallery__img" alt="Image 6"&gt;
&lt;/figure&gt;
&lt;/div&gt;</code></pre><h3 id="styling-images">Styling Images</h3><pre><code class="language-css">.gallery__img {
width: 100%;
height: 100%;
object-fit: cover;
grid-column-start: 1;
grid-column-end: 3;
grid-row-start: 1;
grid-row-end: 3;
grid-column-start: 3;
grid-column-end: 5;
grid-row-start: 1;
grid-row-end: 3;
grid-column-start: 5;
grid-column-end: 9;
grid-row-start: 1;
grid-row-end: 6;
grid-column-start: 1;
grid-column-end: 5;
grid-row-start: 3;
grid-row-end: 6;
grid-column-start: 1;
grid-column-end: 5;
grid-row-start: 6;
grid-row-end: 9;
grid-column-start: 5;
grid-column-end: 9;
grid-row-start: 6;
grid-row-end: 9;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;meta http-equiv="X-UA-Compatible" content="ie=edge"&gt;
&lt;link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i|Nunito:300,300i" rel="stylesheet"&gt;
&lt;link rel="stylesheet" href="css/style.css"&gt;
&lt;link rel="shortcut icon" type="image/png" href="img/favicon.png"&gt;
&lt;title&gt;CSS Grids Gallery&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div class="container"&gt;
&lt;div class="gallery"&gt;
&lt;figure class="gallery__item gallery__item--1"&gt;
&lt;img src="img/image-1.jpg" alt="Gallery image 1" class="gallery__img"&gt;
&lt;/figure&gt;
&lt;figure class="gallery__item gallery__item--2"&gt;
&lt;img src="img/image-2.jpg" alt="Gallery image 2" class="gallery__img"&gt;
&lt;/figure&gt;
&lt;figure class="gallery__item gallery__item--3"&gt;
&lt;img src="img/image-3.jpg" alt="Gallery image 3" class="gallery__img"&gt;
&lt;/figure&gt;
&lt;figure class="gallery__item gallery__item--4"&gt;
&lt;img src="img/image-4.jpg" alt="Gallery image 4" class="gallery__img"&gt;
&lt;/figure&gt;
&lt;figure class="gallery__item gallery__item--5"&gt;
&lt;img src="img/image-5.jpg" alt="Gallery image 5" class="gallery__img"&gt;
&lt;/figure&gt;
&lt;figure class="gallery__item gallery__item--6"&gt;
&lt;img src="img/image-6.jpg" alt="Gallery image 6" class="gallery__img"&gt;
&lt;/figure&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>And the CSS:</p><pre><code class="language-css">*,
*::after,
*::before {
margin: 0;
padding: 0;
box-sizing: inherit;
}
html {
box-sizing: border-box;
font-size: 62.5%;
}
body {
font-family: "Nunito", sans-serif;
color: #333;
font-weight: 300;
line-height: 1.6;
}
.container {
width: 60%;
margin: 2rem auto;
}
.gallery {
display: grid;
grid-template-columns: repeat(8, 1fr);
grid-template-rows: repeat(8, 5vw);
grid-gap: 1.5rem;
}
.gallery__img {
width: 100%;
height: 100%;
object-fit: cover;
display: block;
}
.gallery__item--1 {
grid-column-start: 1;
grid-column-end: 3;
grid-row-start: 1;
grid-row-end: 3;
/** Alternative Syntax **/
/* grid-column: 1 / span 2;  */
/* grid-row: 1 / span 2; */
}
.gallery__item--2 {
grid-column-start: 3;
grid-column-end: 5;
grid-row-start: 1;
grid-row-end: 3;
/** Alternative Syntax **/
/* grid-column: 3 / span 2;  */
/* grid-row: 1 / span 2; */
}
.gallery__item--3 {
grid-column-start: 5;
grid-column-end: 9;
grid-row-start: 1;
grid-row-end: 6;
/** Alternative Syntax **/
/* grid-column: 5 / span 4;
grid-row: 1 / span 5; */
}
.gallery__item--4 {
grid-column-start: 1;
grid-column-end: 5;
grid-row-start: 3;
grid-row-end: 6;
/** Alternative Syntax **/
/* grid-column: 1 / span 4;  */
/* grid-row: 3 / span 3; */
}
.gallery__item--5 {
grid-column-start: 1;
grid-column-end: 5;
grid-row-start: 6;
grid-row-end: 9;
/** Alternative Syntax **/
/* grid-column: 1 / span 4; */
/* grid-row: 6 / span 3; */
}
.gallery__item--6 {
grid-column-start: 5;
grid-column-end: 9;
grid-row-start: 6;
grid-row-end: 9;
/** Alternative Syntax **/
/* grid-column: 5 / span 4; */
/* grid-row: 6 / span 3; */
}</code></pre><p>You can try adding your own CSS to make this gallery look the way you want it to look. You can also create more complex image galleries very easily.</p><p>You can learn more about the CSS Grids in the link given below</p><p><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" rel="noopener"><strong>A Complete Guide to Grid | CSS-Tricks</strong></a><br><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" rel="noopener"><em>CSS Grid Layout is the most powerful layout system available in CSS. It is a 2-dimensional system, meaning it can…</em>css-tricks.com</a></p><p>I hope you’ve found this post informative and helpful. I would love to hear your feedback!</p><p><strong>Thank you for reading!</strong></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
