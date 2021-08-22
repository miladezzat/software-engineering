---
card: "https://cdn-media-1.freecodecamp.org/images/1*9nkJt3S1Fe_KMkDtpIhgXw.png"
tags: [Web Development]
description: "by Elena-Cristina Conacel"
author: "Milad E. Fahmy"
title: "Learn the Bootstrap 4 Grid System in 10 Minutes"
created: "2021-08-16T10:09:55+02:00"
modified: "2021-08-16T10:09:55+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-bootstrap tag-css tag-tech tag-front-end-development ">
<header class="post-full-header">
<h1 class="post-full-title">Learn the Bootstrap 4 Grid System in 10 Minutes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*9nkJt3S1Fe_KMkDtpIhgXw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*9nkJt3S1Fe_KMkDtpIhgXw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*9nkJt3S1Fe_KMkDtpIhgXw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*9nkJt3S1Fe_KMkDtpIhgXw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*9nkJt3S1Fe_KMkDtpIhgXw.png" alt="Learn the Bootstrap 4 Grid System in 10 Minutes">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
&lt;div class="container"&gt;
...
&lt;/div&gt;
Hello! I am in a simple container.
&lt;/div&gt;
&lt;div class="container-fluid"&gt;
Hello! I am in a full-width container.
&lt;/div&gt;</code></pre><p>You can view the CodePen <a href="https://codepen.io/cristinaconacel/pen/XBLVre" rel="noopener">here</a>.</p><p>To see the differences between the two types of containers, you can open the pen in your console and switch between screen sizes.</p><h3 id="bootstrap-4-rows">Bootstrap 4 Rows</h3><p>Bootstrap 4 rows are horizontal slices of the screen. They are used only as wrappers for columns. To use them, you need the <code>.row</code> class.</p><pre><code class="language-html">&lt;div class="row"&gt;
...
&lt;div class="row"&gt;
&lt;div class="col"&gt;
...
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
&lt;div class="col"&gt;
...
&lt;/div&gt;
&lt;div class="col"&gt;
...
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
&lt;div class="col"&gt;
...
&lt;/div&gt;
&lt;div class="col"&gt;
...
&lt;/div&gt;
&lt;div class="col"&gt;
...
&lt;/div&gt;
&lt;div class="col"&gt;
...
&lt;/div&gt;
&lt;div class="col"&gt;
...
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="col-6"&gt;
...
&lt;/div&gt;
&lt;div class="col-6"&gt;
...
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
&lt;div class="col-5"&gt;
...
&lt;/div&gt;
&lt;div class="col-7"&gt;
...
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
&lt;div class="col-3"&gt;
...
&lt;/div&gt;
&lt;div class="col-4"&gt;
...
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
&lt;div class="col-6"&gt;
...
&lt;/div&gt;
&lt;div class="col-7"&gt;
...
&lt;/div&gt;
&lt;div class="col-lg"&gt;
...
&lt;/div&gt;
&lt;div class="col-lg"&gt;
...
&lt;/div&gt;
&lt;/div&gt;</code></pre><p>You can see the code live on <a href="https://codepen.io/cristinaconacel/pen/OBoqqz" rel="noopener">CodePen</a>.<em> </em>If you open the Codepen in another window and see the page at different resolutions, you will see the columns change their positioning.</p><p>If you wanted for the 2 columns to go on the same line starting with larger mobile phones you would use <code>.col-sm</code>, for tablets <code>.col-md</code> and for extra large screens <code>.col-xl</code>.</p><h3 id="setting-sizes-and-breakpoints-for-columns"><strong>Setting Sizes and Breakpoints for Columns</strong></h3><p>You can combine the sizes and breakpoints and use a single class with the format <code>.col-[breakpoint]-[size]</code>.</p><p>For example, if you want three columns of different sizes to align on a row starting with the laptop resolution you need to do this:</p><pre><code class="language-html">&lt;div class="row"&gt;
&lt;div class="col-lg-4"&gt;
...
&lt;/div&gt;
&lt;div class="col-lg-3"&gt;
...
&lt;/div&gt;
&lt;div class="col-lg-5"&gt;
...
&lt;/div&gt;
&lt;div class="col-sm-6 col-lg-3"&gt;
...
&lt;/div&gt;
&lt;div class="col-sm-6 col-lg-3"&gt;
...
&lt;/div&gt;
&lt;div class="col-sm-6 col-lg-3"&gt;
...
&lt;/div&gt;
&lt;div class="col-sm-6 col-lg-3"&gt;
...
&lt;/div&gt;
&lt;div class="col-md-4 offset-md-4"&gt;
...
&lt;/div&gt;
&lt;div class="col-md-4"&gt;
...
&lt;/div&gt;
&lt;div class="col-md-4"&gt;
...
&lt;/div&gt;
&lt;div class="col-md-4 offset-md-4"&gt;
...
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
&lt;div class="col-md-4 offset-md-2"&gt;
...
&lt;/div&gt;
&lt;div class="col-md-4 offset-md-2"&gt;
...
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="row"&gt;
&lt;div class="col-md-6 offset-md-3"&gt;
...
&lt;/div&gt;
&lt;div class="col-md-8"&gt;
...
&lt;div class="row"&gt;
&lt;div class="col-md-5"&gt;
...
&lt;/div&gt;
&lt;div class="col-md-7"&gt;
...
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div class="col-md-4"&gt;
...
&lt;/div&gt;
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
