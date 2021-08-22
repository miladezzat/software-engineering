---
card: "https://cdn-media-2.freecodecamp.org/w1280/5fd76c26e6787e098393e8a7.jpg"
tags: [HTML]
description: "A website is made up of of various pieces of information that"
author: "Milad E. Fahmy"
title: "HTML Link – How to Insert a Link to a Website with HREF Code"
created: "2021-08-15T22:48:56+02:00"
modified: "2021-08-15T22:48:56+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-html tag-website-design ">
<header class="post-full-header">
<h1 class="post-full-title">HTML Link – How to Insert a Link to a Website with HREF Code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5fd76c26e6787e098393e8a7.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5fd76c26e6787e098393e8a7.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5fd76c26e6787e098393e8a7.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5fd76c26e6787e098393e8a7.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5fd76c26e6787e098393e8a7.jpg" alt="HTML Link – How to Insert a Link to a Website with HREF Code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>You can also find information relating to that site on pages that are on different websites.</p>
<p>All these sections and pages are linked together in HTML using the <code>href</code> attribute.</p>
<p>In this article, we'll look at the term <em>Hyperlink</em>. Then we'll learn about the different ways you can create hyperlinks, what <code>href</code> does, and how to appropriately use the <code>href</code> attribute to link sections and pages.</p>
<h2 id="whatarehyperlinks">What are Hyperlinks?</h2>
<p>In HTML, there are various forms of links. In images, there is the <code>src</code> attribute to "link" the source of an image.</p>
<p>For stylesheets, there is the <code>link</code> tag with the <code>href</code> attribute to "link" the source of a stylesheet.</p>
<p>For anchor tags, there is the <code>href</code> attribute to "link" the referenced section or page. Anchor links are also called hyperlinks.</p>
<p>When a user follows a hyperlink, they are navigating to that page. Hyperlinks are elements that reference another document, such that when a user clicks on that element, they are directed to the new document.</p>
<h2 id="whentousehyperlinks">When to Use Hyperlinks</h2>
<p>As stated above, you may want to link various pages (within your website or externally) or sections on your website.</p>
<p>In this article, I'll highlight three ways of creating hyperlinks. These different ways are important to know because they determine the values of the <code>href</code> attribute.</p>
<p>Alright, let's look at those three different ways now.</p>
<h3 id="1whenyouwanttolinktosectionsofapage">1. When you want to link to sections of a page</h3>
<p>You might use this method, for example, when you're creating a page with a table of contents.</p>
<p>In this case, you may not want your readers to have to scroll down to the last section. It would be nice if they could just click on it in the table of contents and the browser would take them there directly.</p>
<p>This type of linking occurs in the same document, and just takes the reader to different sections. We'll learn how to create a hyperlink for this use case when we learn about the <code>href</code> attribute.</p>
<h3 id="2whenyouwanttolinktoanotherpagewithinawebsite">2. When you want to link to another page within a website</h3>
<p>On your site, you might have a home page, about page, services page, and other types of pages. This method helps users navigate from one page to another.</p>
<h3 id="3whenyouwanttolinktoexternalpages">3. When you want to link to external pages</h3>
<p>Sometimes, your website may not contain certain information and another website may have it. In such cases, you might want to reference the other website.</p>
<p>To do this, you would create an external hyperlink that navigates the user to the other website.</p>
<p>These are the three major ways of linking pages. Let's now see how the <code>href</code> attribute can help you enable them.</p>
<h2 id="howtousethehrefattribute">How to Use the <code>href</code> Attribute</h2>
<p>The <code>href</code> is an attribute used to reference another document. You can find it on <code>link</code> tags and <code>anchor</code> tags.</p>
<p>The <code>href</code> attribute is used on anchor tags (<code>a</code>) to create hyperlinks in websites. The value of the attribute contains the URL which the hyperlink points to. You can use it like this:</p>
<pre><code class="language-html">&lt;a href="URL"&gt;Hyperlink&lt;/a&gt;
</code></pre>
<p>However, the URL values can be different depending on what you're pointing to. For the three ways we looked at earlier, let's see how you can use <code>href</code>.</p>
<h3 id="1howtousehreftolinksectionswithinadocument">1. How to use <code>href</code> to link sections within a document</h3>
<p>In this case, the value will be the <code>id</code> of the element that starts the section. That means we will have something like this:</p>
<pre><code class="language-html">&lt;a href="#second-section"&gt;Go to second section&lt;/a&gt;
&lt;!--
Some stuffs here
--&gt;
&lt;section id="second-section"&gt;
&lt;h2&gt;Second section&lt;/h2&gt;
&lt;/section&gt;
</code></pre>
<p>When the "Go to second section" hyperlink is clicked, the browser scrolls down to the section with the associated <code>id</code>. Also the URL in the URL bar of the browser changes.</p>
<p>For example, if the previous URL was <code>mywebsite.com</code>, the new URL will be <code>mywebsite.com#second-option</code>.</p>
<h3 id="2howtousehreftolinkpageswithinawebsite">2. How to use <code>href</code> to link pages within a website</h3>
<p>To use <code>href</code> this way, you need to understand what Relative URLs and Absolute URLs are.</p>
<p>Relative URLs are short URLs that point to a document on the same website. It's more like, from where you are, how do you get to this other place on the same website?</p>
<p>This is in contrast to Absolute URLs. For these, you aren't concerned with where you currently are – you provide the full details to get to another place like you were starting from the beginning.</p>
<p>For navigations between pages that live on a website, you can use any of these URLs, but Relative URLs are commonly used.</p>
<p>Say you're on the home page, and you want to reference the about page. Here's how to use the <code>href</code> attribute to do that:</p>
<pre><code class="language-html">&lt;a href='/about' &gt;About page&lt;/a&gt;
</code></pre>
<p>From the homepage (say <code>mywebsite.com</code>), the above link will navigate to <code>mywebsite.com/about</code>.</p>
<p>There's something worth noting about the slash (<code>/</code>) before the link. The <code>/</code> tells the browser to append the link to the root of the site (which is the domain). So the root is <code>mywebsite.com</code> and the link is appended like so: <code>mywebsite.com/about</code>.</p>
<p>If the slash was absent (<code>&lt;a href='about'&gt;</code>), the browser would replace the current path with <code>/about</code>.</p>
<p>For example, if we were currently on <code>mywebsite.com/projects/generator</code>, and we had the following links:</p>
<pre><code class="language-html">&lt;a href='about'&gt;About 1&lt;/a&gt;
&lt;a href='/about'&gt;About 2&lt;/a&gt;
</code></pre>
<p>"About 1" would navigate to <code>mywebsite.com/projects/about</code> (replacing the current path <code>/generator</code>) and "About 2" would navigate to <code>mywebsite.com/about</code></p>
<h3 id="3howtousehreftolinktopagesonanotherwebsite">3. How to use <code>href</code> to link to pages on another website</h3>
<p>Since it's on a different website, there's no way we can use Relative URLs. For this, we need to specify the absolute source of the document we are referencing.</p>
<p>For example, say we're on <code>mywebsite.com</code>, and we want to reference <code>google.com</code>, this is how we'd do it with <code>href</code>:</p>
<pre><code class="language-html">&lt;a href='https://google.com'&gt;Google&lt;a&gt;
</code></pre>
<p>If we had only written <code>google.com</code>, the browser would treat it as a page within a website, thereby appending it to <code>mywebsite.com</code>.</p>
<h2 id="conclusion">Conclusion</h2>
<p>In this article, we've seen how the <code>href</code> attribute allows us to create different types of links. These various links show the different ways that documents/pages can be referenced within a website.</p>
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
