---
card: "/images/default.jpg"
tags: [CSS]
description: "The theme for week #17 of the Weekly Coding Challenge is:"
author: "Milad E. Fahmy"
title: "How to create a pagination component"
created: "2021-08-15T22:50:19+02:00"
modified: "2021-08-15T22:50:19+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-html tag-weeklycodingchallenge tag-pagination ">
<header class="post-full-header">
<h1 class="post-full-title">How to create a pagination component</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/07/how-to-create-a-pagination.png 300w,
/news/content/images/size/w600/2019/07/how-to-create-a-pagination.png 600w,
/news/content/images/size/w1000/2019/07/how-to-create-a-pagination.png 1000w,
/news/content/images/size/w2000/2019/07/how-to-create-a-pagination.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/07/how-to-create-a-pagination.png" alt="How to create a pagination component">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;li&gt;
&lt;a href="#"&gt;&lt;i class="fas fa-chevron-left"&gt;&lt;/i&gt;&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="#"&gt;&lt;i class="fas fa-ellipsis-h"&gt;&lt;/i&gt;&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;&lt;a href="#"&gt;2&lt;/a&gt;&lt;/li&gt;
&lt;li class="active"&gt;&lt;a href="#"&gt;3&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#"&gt;4&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#"&gt;5&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;
&lt;a href="#"&gt;&lt;i class="fas fa-ellipsis-h"&gt;&lt;/i&gt;&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a href="#"&gt;&lt;i class="fas fa-chevron-right"&gt;&lt;/i&gt;&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;</code></pre><p>As you can see I also added an <code>.active</code> class to one of the <code>li</code>s - this is just to highlight the page we are on.</p><h2 id="the-css">The CSS</h2><p>I'm going to paste the CSS and we'll discuss the important pieces afterwards.</p><pre><code class="language-css">.pagination {
border: 2px solid #aaa;
border-radius: 4px;
display: flex;
list-style-type: none;
overflow: hidden;
padding: 0;
}
.pagination li {
background-color: #fff;
}
.pagination li:hover,
.pagination li.active {
background-color: #aaa;
}
.pagination li a {
color: #555;
display: block;
font-weight: bold;
padding: 10px 15px;
text-decoration: none;
}
.pagination li:hover a,
.pagination li.active a {
color: #fff;
}</code></pre><p>Things to note:</p><ol><li>The <code>ul</code> / <code>.pagination</code> it's a <strong>flex</strong> container - this is because it's much easier to position the <code>li</code>s within it by using flexbox (and who doesn't like flexbox? ?)</li><li>Because we have a little bit of a <code>border-radius</code> on the <code>ul</code> we need to add <code>overflow: hidden</code> because otherwise the <code>li</code>'s corner will be visible on top of the border of the <code>ul</code> (remove the overflow and you'll see what I mean)</li><li>We have the same styling on <code>li:hover</code> as on <code>li.active</code>, but you can differentiate between these to states if you want</li></ol><p>Other than that, I believe it's pretty straightforward, but if you have any questions please let me know. ?</p><h2 id="conclusion">Conclusion</h2><p>There are other variants of paginations out there on the web. Find one you like and convert it to code.</p><p>Make sure you share with me what you've built!</p><p>Happy Coding! ?</p>
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
