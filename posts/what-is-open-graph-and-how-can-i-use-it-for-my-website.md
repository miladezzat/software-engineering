---
card: "/images/default.jpg"
tags: [Web Development]
description: "It can take a lot of time to build content and maintain a web"
author: "Milad E. Fahmy"
title: "What is Open Graph and how can I use it for my website?"
created: "2021-08-16T10:05:23+02:00"
modified: "2021-08-16T10:05:23+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-tech tag-html tag-social-media tag-content-marketing tag-digital-marketing tag-marketing tag-open-graph ">
<header class="post-full-header">
<h1 class="post-full-title">What is Open Graph and how can I use it for my website?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/03/open-graph.jpg 300w,
/news/content/images/size/w600/2020/03/open-graph.jpg 600w,
/news/content/images/size/w1000/2020/03/open-graph.jpg 1000w,
/news/content/images/size/w2000/2020/03/open-graph.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/03/open-graph.jpg" alt="What is Open Graph and how can I use it for my website?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
</code></pre><p>So if I were to create a set four basic open graph tags for my website, <a href="https://colbyfayock.com">colbyfayock.com</a>, it might look like:</p><pre><code class="language-html">&lt;meta property="og:title" content="Colby Fayock - A UX Designer &amp;amp; Front-end Developer Blog" /&gt;
&lt;meta property="og:type" content="website" /&gt;
&lt;meta property="og:url" content="https://www.colbyfayock.com" /&gt;
</code></pre><h2 id="website-open-graph-type">Website open graph type</h2><p>The open graph protocol has a few variations of the “type” of website it supports. This includes types like website, article, or video.</p><p>When setting up your open graph tags, you’ll want to have an idea of which type will make more sense for your website. If your page is focused on a single video, it probably makes sense to use the type “video”. If it’s a general website with no specific vertical, you would probably just want to use the type “website”.</p><p>Similar to the others, this is unique for each page. So if your homepage is "website,” you could always have another page of type “video”.</p><p>So if I were to create an open graph type for my website, it might look like the following on my homepage:</p><pre><code class="language-html">&lt;!-- colbyfayock.com --&gt;
&lt;meta property=“og:type” content=“profile” /&gt;
</code></pre><p>When navigating to a blog post, it would look like:</p><pre><code class="language-html">&lt;!-- https://www.colbyfayock.com/2020/03/anyone-can-map-inspiration-and-an-introduction-to-the-world-of-mapping/ --&gt;
&lt;meta property=“og:type” content=“article” /&gt;
</code></pre><p>You can find the most common open graph website types on the open graph webpage: <a href="https://ogp.me/#types">https://ogp.me/#types</a></p><h2 id="some-other-open-graph-tags-that-are-worth-adding">Some other open graph tags that are worth adding</h2><p>Though you’ll generally be okay with the basics, here are a few more that would be worth adding:</p><ul><li><code>og:description</code>: A description of your page. Similarly to <code>og:title</code>, this may be the same as your website’s <code>&lt;meta type=“description”&gt;</code> tag, unless you’d like to present it differently.</li><li><code>og:locale</code>: If you want to localize your tags, it would probably make sense to include locale. The format is <code>language_TERRITORY</code>, where the default is <code>en_US</code>.</li><li><code>og:site_name</code>: The name of the overall website your content is on. If you're on a blog post page, you might have a <code>title</code> using that blog post’s title, where the <code>site_name</code> would be the name of your blog.</li><li><code>og:video</code>: Have a video that supports your content? Here’s a chance to include it. Add a link to your video using this tag.</li></ul><p>These tags will be added in the same pattern as before:</p><pre><code class="language-html">&lt;meta property=“[NAME]” content=“[VALUE]” /&gt;
&lt;meta property=“og:title” content=“Anyone Can Map! Inspiration and an introduction to the world of mapping - Colby Fayock" /&gt;
&lt;meta property="og:description" content="Chef Gusteau was a visionary who created food experiences for the world to enjoy. How can we take his lessons and apply them to the world of…" /&gt;
&lt;meta property="og:url" content="https://www.colbyfayock.com/2020/03/anyone-can-map-inspiration-and-an-introduction-to-the-world-of-mapping/" /&gt;
&lt;meta property="og:type" content="article" /&gt;
&lt;meta property="article:publisher" content="https://www.colbyfayock.com" /&gt;
&lt;meta property="article:section" content="Coding" /&gt;
&lt;meta property="article:tag" content="Coding" /&gt;
&lt;meta property="og:image:width" content="1280" /&gt;
&lt;meta property="og:image:height" content="640" /&gt;
&lt;meta property="twitter:site" content="@colbyfayock" /&gt;
<p style="margin: 0;">
<a href="https://twitter.com/colbyfayock" style="display: block;">
</a>
</p>
<ul style="display:flex;justify-content:center;list-style:none;padding:0;margin: .5em 0 0;font-size: .8em;">
<li style="margin: 0 .6em;padding: 0;">
<a href="https://twitter.com/colbyfayock" style="text-decoration: none;">? Follow Me On Twitter</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://youtube.com/colbyfayock" style="text-decoration: none;">?️ Subscribe To My Youtube</a>
</li>
<li style="margin: 0 .6em;padding: 0;">
<a href="https://www.colbyfayock.com/newsletter/" style="text-decoration: none;">✉️ Sign Up For My Newsletter</a>
</li>
</ul>
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
