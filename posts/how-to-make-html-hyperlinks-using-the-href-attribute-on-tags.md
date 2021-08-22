---
card: "/images/default.jpg"
tags: [HTML]
description: "A website is a collection of web pages. And these pages need "
author: "Milad E. Fahmy"
title: "How to Make HTML Hyperlinks Using the HREF Attribute on Tags"
created: "2021-08-15T22:49:28+02:00"
modified: "2021-08-15T22:49:28+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-html ">
<header class="post-full-header">
<h1 class="post-full-title">How to Make HTML Hyperlinks Using the HREF Attribute on Tags</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/04/coverfcc.png 300w,
/news/content/images/size/w600/2020/04/coverfcc.png 600w,
/news/content/images/size/w1000/2020/04/coverfcc.png 1000w,
/news/content/images/size/w2000/2020/04/coverfcc.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/04/coverfcc.png" alt="How to Make HTML Hyperlinks Using the HREF Attribute on Tags">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>A website is a collection of web pages. And these pages need to be linked or connected by something. And to do so, we need to use a tag provided by HTML: the <code>a</code> tag. </p><p>This tag defines a hyperlink, which is used to link from one page to another. And the most important attribute of the <code>a</code> element is the <code>href</code> attribute, which indicates the link's destination.</p><p>In this guide, I will show you how to make HTML hyperlinks using the <code>href</code> attribute on the <code>a</code> tag.</p><ul><li><a href="#what-is-a-link">What is a link?</a></li><li><a href="#how-to-create-internal-links">How to create internal links</a></li><li><a href="#browse-to-pages-on-the-same-level">Browse to pages on the same level</a></li><li><a href="#browse-to-pages-located-on-another-folder">Browse to pages located on another folder</a></li><li><a href="#browse-from-a-page-located-in-a-folder-to-the-root">Browse from a page located in a folder to the root</a></li><li><a href="#how-to-create-external-links">How to create external links</a></li><li><a href="#how-to-create-anchor-links">How to create anchor links</a></li><li><a href="#navigate-on-the-same-page">Navigate on the same page</a></li><li><a href="#navigate-on-another-page">Navigate on another page</a></li><li><a href="#conclusion">Conclusion</a></li></ul><h2 id="what-is-a-link">What is a link?</h2><p>A link is clickable text that allows you to browse from one page to another, or to a different part of the same page. </p><p>In web development, there are several ways to create links, but the most common is by using the <code>a</code> tag and the <code>href</code> attribute. This last is where we specify the destination address of the link.</p><p>The <code>a</code> tag helps us create three main kinds of links: an internal link, an external link, and an anchor link. That said, we can now dive into how to create an internal link in the next section.</p><h2 id="how-to-create-internal-links">How to create internal links</h2><p>When it comes to building a website, it makes sense to have a connection between pages. And as long as these links allow us to navigate from page A to page B, it's called an internal link (since it's always in the same domain name or on the same website). So, an internal link is a link that allows navigating to another page on a website.</p><p>Now, considering our folder is structured as follows:</p><pre><code>├── folder1
|  └── page2.html
├── page1.html
├── index.html
</code></pre><p>Here we have three use cases, and for each, we will create an example.</p><h3 id="browse-to-pages-on-the-same-level">Browse to pages on the same level</h3><ul><li><code>index.html</code></li></ul><pre><code class="language-html">&lt;a href="page1.html"&gt;Browse to Page 1&lt;/a&gt;
</code></pre><p>As you can see, the page <code>page1.html</code> is on the same level, therefore the path of the <code>href</code> attribute is just the name of the page.</p><h3 id="browse-to-pages-located-in-another-folder">Browse to pages located in another folder</h3><ul><li><code>page1.html</code></li></ul><pre><code class="language-html">&lt;a href="./folder1/page2.html"&gt;Browse to Page 2&lt;/a&gt;
</code></pre><p>Here, we have a different use case since the page we want to visit is now not on the same level. And to be able to navigate to that page, we should specify the complete path of the file including the folder.</p><p>Great! Let's now dive into the last use case.</p><h3 id="browse-from-a-page-located-in-a-folder-to-the-root">Browse from a page located in a folder to the root</h3><ul><li><code>page2.html</code></li></ul><pre><code class="language-html">&lt;a href="../index.html"&gt;Browse to the Home Page&lt;/a&gt;
</code></pre><p>Now, here to navigate to the <code>index.html</code> page, we should first go one level up before being able to browse to that page.</p><p>We have now covered internal links, so let's move on and introduce how to navigate to external links.</p><h2 id="how-to-create-external-links">How to create external links</h2><p>It's always useful to have the ability to navigate to external websites as well.</p><pre><code class="language-html">&lt;a href="https://www.google.com/"&gt;Browse to Google&lt;/a&gt;
</code></pre><p>As you can see here, to navigate to Google, we have to specify its URL to the <code>href</code> attribute.</p><p>External and internal links are used to navigate from page A to page B. However, sometimes we want to stay on the same page and navigate to a specific part. And to do so, we have to use something called anchor link, let's dive into it in the next section.</p><h2 id="how-to-create-anchor-links">How to create anchor links</h2><p>An anchor link is a bit more specific: it allows us to navigate from point A to point B while remaining on the same page. It can also be used to go to a part on another page.</p><h3 id="navigate-on-the-same-page">Navigate on the same page</h3><pre><code class="language-html">&lt;a href="#about"&gt;Go to the anchor&lt;/a&gt;
&lt;h1 id="about"&gt;&lt;/h1&gt;
</code></pre><p>Compared to the others, this one is a bit different. Indeed it is, but it still works the same way.</p><p>Here, instead of a page link, we have a reference to an element. When we click on the link, it will look for an element with the same name without the hashtag (<code>about</code>). If it finds that id, it browses to that part.</p><h3 id="navigate-on-another-page">Navigate on another page</h3><pre><code class="language-html">&lt;a href="page1.html#about"&gt;Go to the anchor&lt;/a&gt;
</code></pre><p>This is pretty the same as the previous example, except that we have to define the page in which we want to browse and add the anchor to it.</p><h2 id="conclusion">Conclusion</h2><p>The <code>href</code> is the most important attribute of the <code>a</code> tag. It allows us to navigate between pages or just a specific part of a page. Hopefully, this guide will help you build a website with plenty of links.</p><p>Thanks for reading.</p><p><em>Feel free to reach out to me!</em></p><p><a href="https://twitter.com/ibrahima92_">TWITTER</a> &nbsp; <a href="https://www.ibrahima-ndaw.com/">BLOG</a> &nbsp;<a href="https://ibrahima-ndaw.us5.list-manage.com/subscribe?u=8dedf5d07c7326802dd81a866&amp;id=5d7bcd5b75">NEWSLETTER</a> &nbsp;<a href="https://github.com/ibrahima92">GITHUB</a> &nbsp;<a href="https://www.linkedin.com/in/ibrahima-ndaw/">LINKEDIN</a> &nbsp;<a href="https://codepen.io/ibrahima92">CODEPEN</a> &nbsp;<a href="https://dev.to/ibrahima92">DEV</a></p><p>Photo by <a href="https://unsplash.com/@jjying?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">JJ Ying</a> on <a href="https://unsplash.com/s/photos/link?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></p>
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
