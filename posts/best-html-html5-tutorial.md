---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9f0a740569d1a4ca4084.jpg"
tags: [HTML]
description: "HyperText Markup Language (HTML) is a markup language used to"
author: "Milad E. Fahmy"
title: "The Best HTML and HTML5 Tutorials"
created: "2021-08-15T22:50:09+02:00"
modified: "2021-08-15T22:50:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-html tag-html5 tag-tutorial ">
<header class="post-full-header">
<h1 class="post-full-title">The Best HTML and HTML5 Tutorials</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9f0a740569d1a4ca4084.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9f0a740569d1a4ca4084.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9f0a740569d1a4ca4084.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9f0a740569d1a4ca4084.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9f0a740569d1a4ca4084.jpg" alt="The Best HTML and HTML5 Tutorials">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>HyperText Markup Language (HTML) is a markup language used to construct online documents and is the foundation of most websites today. A markup language like HTML allows us to</p><ul><li>create links to other documents, </li><li>structure the content in our document, and </li><li>ascribe context and meaning to the content of our document.</li></ul><p>An HTML document has two aspects to it. It contains structured information (Markup), and text-links (HyperText) to other documents. We structure our pages using <a href="https://guide.freecodecamp.org/html#">HTML elements</a>. They are constructs of the language providing <a href="https://guide.freecodecamp.org/html#">structure</a> and <a href="https://guide.freecodecamp.org/html#">meaning</a> in our document for the browser and the element links to other documents across the internet.</p><p>The internet was originally created to store and present static (unchanging) documents. The aspects of HTML discussed above were seen perfectly in these documents which lacked all design and styling. They presented structured information that contained links to other documents.</p><p>HTML5 is the latest version, or specification, of HTML. The World Wide Web Consortium (W3C) is the organization responsible for developing standards for the World Wide Web, including those for HTML. As web pages and web applications grow more complex, W3C updates HTML’s standards.</p><p>HTML5 introduces a host of semantic elements. Though we discussed how HTML helped to provided meaning to our document, it wasn’t until HTML5s’ introduction of <a href="https://guide.freecodecamp.org/html#">semantic elements</a> that its potential was realized.</p><h2 id="a-simple-example-of-html-document"><strong>A simple example of HTML Document</strong></h2><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Page Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;My First Heading&lt;/h1&gt;
&lt;p&gt;My first paragraph.&lt;/p&gt;
&lt;/body&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Title of the Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;!-- Content --&gt;
&lt;/body&gt;
&lt;html&gt;
&lt;head&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;p&gt;I'm a paragraph&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><h2 id="the-head-element"><strong>The HEAD Element</strong></h2><p>This is the container for processing information and metadata for an HTML document.</p><pre><code class="language-html">&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;/head&gt;</code></pre><h2 id="the-body-element"><strong>The BODY Element</strong></h2><p>This is a container for the displayable content of an HTML document.</p><pre><code class="language-html">&lt;body&gt;...&lt;/body&gt;</code></pre><h2 id="the-p-element"><strong>The P Element</strong></h2><p>Creates a paragraph, perhaps the most common block level element.</p><pre><code class="language-html">&lt;p&gt;...&lt;/p&gt;</code></pre><h2 id="the-a-link-element"><strong>The A(Link) Element</strong></h2><p>Creates a hyperlink to direct visitors to another page or resource.</p><pre><code class="language-html">&lt;a href="#"&gt;...&lt;/a&gt;</code></pre><h1 id="images-in-html">Images in HTML</h1><p>You can define images by using the <code>&lt;img&gt;</code> tag. It does not have a closing tag since it can contain only attributes. To insert an image you define the source and an alternative text which is displayed when the image can not be rendered.</p><p><code>src</code> - This attribute provides the url to the image present either on your P.C./Laptop or to be included from some other website. Remember the link provided should not be broken otherwise the image will not be produced on your webpage.</p><p><code>alt</code> - This attribute is used to overcome the problem of broken image or incapability of your browser to produce image on webpage. This attribute, as the name suggests, provides an “Alternative” to an image which is some ‘TEXT’ describing the image.</p><h2 id="example"><strong>Example</strong></h2><pre><code class="language-html">&lt;img src="URL of the Image" alt="Descriptive Title" /&gt;</code></pre><h3 id="to-define-height-and-width-of-an-image-you-can-use-the-height-and-width-attribute-"><strong>To define height and width of an image you can use the height and width attribute:</strong></h3><pre><code class="language-html">&lt;img src="URL of the Image" alt="Descriptive Title" height="100" width="150"/&gt;</code></pre><h3 id="you-can-also-define-border-thickness-0-means-no-border-"><strong>You can also define border thickness (0 means no border):</strong></h3><pre><code class="language-html">&lt;img src="URL of the Image" alt="Descriptive Title" border="2"/&gt;</code></pre><h3 id="align-an-image-"><strong>Align an image:</strong></h3><pre><code class="language-html">&lt;img src="URL of the Image" alt="Descriptive Title" align="left"/&gt;</code></pre><h3 id="you-are-also-able-to-use-styles-within-a-style-attribute-"><strong>You are also able to use styles within a style attribute:</strong></h3><pre><code class="language-html">&lt;img src="URL of the Image" alt="Descriptive Title" style="width: 100px; height: 150px;"/&gt;</code></pre><h1 id="how-to-use-links-in-html">How to use links in HTML</h1><p>In HTML you can use the <code>&lt;a&gt;</code> tag to create a link. For example you can write <code>&lt;a href="https://www.freecodecamp.org/"&gt;freeCodeCamp&lt;/a&gt;</code> to create a link to freeCodeCamp’s website.</p><p>Links are found in nearly all web pages. Links allow users to click their way from page to page.</p><p>HTML links are hyperlinks. You can click on a link and jump to another document.</p><p>When you move the mouse over a link, the mouse arrow will turn into a little hand.</p><p>Note: A link does not have to be text. It can be an image or any other HTML element.</p><p>In HTML, links are defined with the <a>tag:</a></p><pre><code class="language-html">&lt;a href="url"&gt;link text&lt;/a&gt;</code></pre><p>Example</p><pre><code class="language-html">&lt;a href="https://www.freecodecamp.org/"&gt;Visit our site for tutorials&lt;/a&gt;</code></pre><p><a>The href attribute specifies the destination address (</a><a href="https://www.freecodecamp.org/">https://www.freecodecamp.org</a>) of the link.</p><p>The link text is the visible part (Visit our site for tutorials).</p><p>Clicking on the link text will send you to the specified address.</p><h1 id="how-to-use-lists-in-html">How to Use Lists in HTML</h1><p>Lists are used to specify a set of consecutive items or related information in a well formed and semantic way, such as a list of ingredients or a list of procedural steps. </p><p>HTML markup has three different types of lists - <strong><strong>ordered</strong></strong>, <strong><strong>unord</strong>e<strong>red</strong></strong> and <strong><strong>description</strong></strong> lists.</p><h3 id="ordered-lists"><strong>Ordered Lists</strong></h3><p>An ordered list is used to group a set of related items, in a specific order. This list is created with <code>&lt;ol&gt;</code> tag. Each list item is surrounded with <code>&lt;li&gt;</code> tag.</p><h5 id="code"><strong>Code</strong></h5><pre><code class="language-html">&lt;ol&gt;
&lt;li&gt;Mix ingredients&lt;/li&gt;
&lt;li&gt;Bake in oven for an hour&lt;/li&gt;
&lt;li&gt;Allow to stand for ten minutes&lt;/li&gt;
&lt;/ol&gt;</code></pre><h5 id="example-1"><strong>Example</strong></h5><ol><li>Mix ingredients</li><li>Bake in oven for an hour</li><li>Allow to stand for ten minutes</li></ol><h3 id="unordered-lists"><strong>Unordered Lists</strong></h3><p>An unordered list is used to group a set of related items, in no particular order. This list is created with <code>&lt;ul&gt;</code>tag. Each list item is surrounded with <code>&lt;li&gt;</code> tag.</p><h5 id="code-1"><strong>Code</strong></h5><pre><code class="language-html">&lt;ul&gt;
&lt;li&gt;Chocolate Cake&lt;/li&gt;
&lt;li&gt;Black Forest Cake&lt;/li&gt;
&lt;li&gt;Pineapple Cake&lt;/li&gt;
&lt;/ul&gt;</code></pre><h4 id="example-2"><strong>Example</strong></h4><ul><li>Chocolate Cake</li><li>Black Forest Cake</li><li>Pineapple Cake</li></ul><h3 id="description-lists"><strong>Description Lists</strong></h3><p>A description list is used to specify a list of terms and their descriptions. This list is created with <code>&lt;dl&gt;</code> tag. Each list item is surrounded with <code>&lt;dd&gt;</code> tag.</p><h5 id="code-2"><strong>Code</strong></h5><pre><code class="language-html">&lt;dl&gt;
&lt;dt&gt;Bread&lt;/dt&gt;
&lt;dd&gt;A baked food made of flour.&lt;/dd&gt;
&lt;dt&gt;Coffee&lt;/dt&gt;
&lt;dd&gt;A drink made from roasted coffee beans.&lt;/dd&gt;
&lt;/dl&gt;</code></pre><h5 id="output"><strong>Output</strong></h5><p><strong>Bread </strong>A baked food made of flour. <strong>Coffee </strong>A drink made from roasted coffee beans.</p><h4 id="styling-list"><strong>Styling List</strong></h4><p>You can also control the style of the list. You can use <code>list-style</code> property of lists. Your list can be bullets, squares, in Roman numerals, or can be images if you want.</p><p><code>list-style</code> property is shorthand for <code>list-style-type</code>, <code>list-style-position</code>, <code>list-style-image</code>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
