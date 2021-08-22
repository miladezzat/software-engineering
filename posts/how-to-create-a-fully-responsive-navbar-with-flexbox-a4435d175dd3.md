---
card: "https://cdn-media-1.freecodecamp.org/images/1*CZikqoB4iZIIrV_rAW_qdg.gif"
tags: [CSS]
description: "In this article, I’ll explain how to create a navbar which ad"
author: "Milad E. Fahmy"
title: "Flexbox tutorial: Learn to code a responsive navbar with CSS Flexbox"
created: "2021-08-16T10:17:49+02:00"
modified: "2021-08-16T10:17:49+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-tech tag-programming tag-web-development tag-design ">
<header class="post-full-header">
<h1 class="post-full-title">Flexbox tutorial: Learn to code a responsive navbar with CSS Flexbox</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*CZikqoB4iZIIrV_rAW_qdg.gif 300w,
https://cdn-media-1.freecodecamp.org/images/1*CZikqoB4iZIIrV_rAW_qdg.gif 600w,
https://cdn-media-1.freecodecamp.org/images/1*CZikqoB4iZIIrV_rAW_qdg.gif 1000w,
https://cdn-media-1.freecodecamp.org/images/1*CZikqoB4iZIIrV_rAW_qdg.gif 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*CZikqoB4iZIIrV_rAW_qdg.gif" alt="Flexbox tutorial: Learn to code a responsive navbar with CSS Flexbox">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this article, I’ll explain how to create a navbar which adapts to various screen sizes using Flexbox along with media queries.</p><p>This tutorial can also be found as an interactive screencast <a href="https://scrimba.com/g/gflexbox?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=gflexbox_tutorial_article">in my free Flexbox course at Scrimba</a>.</p><p>To read more about the course, check out <a href="https://medium.freecodecamp.org/i-just-launched-a-free-full-length-flexbox-course-where-you-can-build-projects-interactively-1860e3d3c4af">this</a> article.</p><h4 id="the-setup">The setup</h4><p>Let’s begin with the markup for a very simple navbar:</p><pre><code class="language-html">&lt;nav&gt;
&lt;ul class="container"&gt;
&lt;li&gt;Home&lt;/li&gt;
&lt;li&gt;Profile&lt;/li&gt;
&lt;li class="search"&gt;
&lt;input type="text" class="search-input" placeholder="Search"&gt;
&lt;/li&gt;
&lt;li&gt;Logout&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;
</code></pre><p>The <code>&lt;ul&gt;</code> element is our flex container and the <code>&lt;li&gt;</code> elements are our flex items. To turn it into a Flexbox layout we’ll do:</p><pre><code class="language-css">.container {
display: flex;
}
flex: 1;
}
flex: 1;
}
.container {
flex-wrap: wrap;
}
.container &gt; li {
flex-basis: 50%;
}
}
.container &gt; li {
flex-basis: 100%;
}
.search {
order: 1;
}
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
