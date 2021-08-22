---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9ebe740569d1a4ca3ed0.jpg"
tags: [HTML5]
description: "Semantic HTML elements are those that clearly describe their "
author: "Milad E. Fahmy"
title: "Semantic HTML5 Elements Explained"
created: "2021-08-15T22:50:08+02:00"
modified: "2021-08-15T22:50:08+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-html5 tag-html ">
<header class="post-full-header">
<h1 class="post-full-title">Semantic HTML5 Elements Explained</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ebe740569d1a4ca3ed0.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ebe740569d1a4ca3ed0.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ebe740569d1a4ca3ed0.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9ebe740569d1a4ca3ed0.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9ebe740569d1a4ca3ed0.jpg" alt="Semantic HTML5 Elements Explained">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
&lt;section&gt;
&lt;article&gt;
&lt;figure&gt;
&lt;img&gt;
&lt;figcaption&gt;&lt;/figcaption&gt;
&lt;/figure&gt;
&lt;/article&gt;
&lt;/section&gt;
&lt;footer&gt;&lt;/footer&gt;</code></pre><p>Whilst this second block of code uses non-semantic elements:</p><pre><code class="language-text">&lt;div id="header"&gt;&lt;/div&gt;
&lt;div class="section"&gt;
&lt;div class="article"&gt;
&lt;div class="figure"&gt;
&lt;img&gt;
&lt;div class="figcaption"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div id="footer"&gt;&lt;/div&gt;</code></pre><p>First, it is much <strong><strong>easier to read</strong></strong>. This is probably the first thing you will notice when looking at the first block of code using semantic elements. This is a small example, but as a programmer you can be reading through hundreds or thousands of lines of code. The easier it is to read and understand that code, the easier it makes your job.</p><p>It has <strong><strong>greater accessibility</strong></strong>. You are not the only one that finds semantic elements easier to understand. Search engines and assistive technologies (like screen readers for users with a sight impairment) are also able to better understand the context and content of your website, meaning a better experience for your users.</p><p>Overall, semantic elements also lead to more <strong><strong>consistent code</strong></strong>. When creating a header using non-semantic elements, different programmers might write this as <code>&lt;div class="header"&gt;</code>, <code>&lt;div id="header"&gt;</code>, <code>&lt;div class="head"&gt;</code>, or simply <code>&lt;div&gt;</code>. There are so many ways that you can create a header element, and they all depend on the personal preference of the programmer. By creating a standard semantic element, it makes it easier for everyone.</p><p>Since October 2014, HTML4 got upgraded to HTML5, along with some new “semantic” elements. To this day, some of us might still be confused as to why so many different elements that doesn’t seem to show any major changes.</p><h4 id="section-and-article"><strong><code>&lt;section&gt;</code> and <code>&lt;article&gt;</code></strong></h4><p>“What’s the difference?”, you may ask. Both these elements are used for sectioning a content, and yes, they can definitely be used interchangeably. It’s a matter of in which situation. HTML4 offered only one type of container element, which is <code>&lt;div&gt;</code>. While this is still used in HTML5, HTML5 provided us with <code>&lt;section&gt;</code> and <code>&lt;article&gt;</code> in a way to replace <code>&lt;div&gt;</code>.</p><p>The <code>&lt;section&gt;</code> and <code>&lt;article&gt;</code> elements are conceptually similar and interchangeable. To decide which of these you should choose, take note of the following:</p><ol><li>An article is intended to be independently distributable or reusable.</li><li>A section is a thematic grouping of content.</li></ol><pre><code class="language-html">&lt;section&gt;
&lt;p&gt;Top Stories&lt;/p&gt;
&lt;section&gt;
&lt;p&gt;News&lt;/p&gt;
&lt;article&gt;Story 1&lt;/article&gt;
&lt;article&gt;Story 2&lt;/article&gt;
&lt;article&gt;Story 3&lt;/article&gt;
&lt;/section&gt;
&lt;section&gt;
&lt;p&gt;Sport&lt;/p&gt;
&lt;article&gt;Story 1&lt;/article&gt;
&lt;article&gt;Story 2&lt;/article&gt;
&lt;article&gt;Story 3&lt;/article&gt;
&lt;/section&gt;
&lt;/section&gt;</code></pre><h4 id="header-and-hgroup"><strong><code>&lt;header&gt;</code> and <code>&lt;hgroup&gt;</code></strong></h4><p>The <code>&lt;header&gt;</code> element is generally found at the top of a document, a section, or an article and usually contains the main heading and some navigation and search tools.</p><pre><code class="language-html">&lt;header&gt;
&lt;h1&gt;Company A&lt;/h1&gt;
&lt;ul&gt;
&lt;li&gt;&lt;a href="/home"&gt;Home&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="/about"&gt;About&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="/contact"&gt;Contact us&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;form target="/search"&gt;
&lt;input name="q" type="search" /&gt;
&lt;input type="submit" /&gt;
&lt;/form&gt;
&lt;/header&gt;</code></pre><p>The <code>&lt;hgroup&gt;</code> element should be used where you want a main heading with one or more subheadings.</p><pre><code class="language-html">&lt;hgroup&gt;
&lt;h1&gt;Heading 1&lt;/h1&gt;
&lt;h2&gt;Subheading 1&lt;/h2&gt;
&lt;h2&gt;Subheading 2&lt;/h2&gt;
&lt;/hgroup&gt;</code></pre><p>REMEMBER, that the <code>&lt;header&gt;</code> element can contain any content, but the <code>&lt;hgroup&gt;</code> element can only contain other headers, that is <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> and including <code>&lt;hgroup&gt;</code>.</p><h4 id="aside"><strong><code>&lt;aside&gt;</code></strong></h4><p>The <code>&lt;aside&gt;</code> element is intended for content that is not part of the flow of the text in which it appears, however still related in some way. This of <code>&lt;aside&gt;</code> as a sidebar to your main content.</p><pre><code class="language-html">&lt;aside&gt;
&lt;p&gt;This is a sidebar, for example a terminology definition or a short background to a historical figure.&lt;/p&gt;
&lt;/aside&gt;</code></pre><p>Before HTML5, our menus were created with <code>&lt;ul&gt;</code>’s and <code>&lt;li&gt;</code>’s. Now, together with these, we can separate our menu items with a <code>&lt;nav&gt;</code>, for navigation between your pages. You can have any number of <code>&lt;nav&gt;</code> elements on a page, for example, its common to have global navigation across the top (in the <code>&lt;header&gt;</code>) and local navigation in a sidebar (in an <code>&lt;aside&gt;</code> element).</p><pre><code class="language-html">&lt;nav&gt;
&lt;ul&gt;
&lt;li&gt;&lt;a href="/home"&gt;Home&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="/about"&gt;About&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="/contact"&gt;Contact us&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;</code></pre><h4 id="footer"><strong><code>&lt;footer&gt;</code></strong></h4><p>If there is a <code>&lt;header&gt;</code> there must be a <code>&lt;footer&gt;</code>. A <code>&lt;footer&gt;</code> is generally found at the bottom of a document, a section, or an article. Just like the <code>&lt;header&gt;</code> the content is generally metainformation, such as author details, legal information, and/or links to related information. It is also valid to include <code>&lt;section&gt;</code> elements within a footer.</p><pre><code class="language-html">&lt;footer&gt;&amp;copy;Company A&lt;/footer&gt;</code></pre><h4 id="small"><strong><code>&lt;small&gt;</code></strong></h4><p>The <code>&lt;small&gt;</code> element often appears within a <code>&lt;footer&gt;</code> or <code>&lt;aside&gt;</code> element which would usually contain copyright information or legal disclaimers, and other such fine print. However, this is not intended to make the text smaller. It is just describing its content, not prescribing presentation.</p><pre><code class="language-html">&lt;footer&gt;&lt;small&gt;&amp;copy;Company A&lt;/small&gt; Date&lt;/footer&gt;</code></pre><h4 id="time"><strong><code>&lt;time&gt;</code></strong></h4><p>The <code>&lt;time&gt;</code> element allows an unambiguous ISO 8601 date to be attached to a human-readable version of that date.</p><pre><code class="language-html">&lt;time datetime="2017-10-31T11:21:00+02:00"&gt;Tuesday, 31 October 2017&lt;/time&gt;</code></pre><p>Why bother with <code>&lt;time&gt;</code>? While humans can read time that can disambiguate through context in the normal way, the computers can read the ISO 8601 date and see the date, time, and the time zone.</p><h4 id="figure-and-figcaption"><strong><code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code></strong></h4><p><code>&lt;figure&gt;</code> is for wrapping your image content around it, and <code>&lt;figcaption&gt;</code> is to caption your image.</p><pre><code class="language-html">&lt;figure&gt;
&lt;img src="https://en.wikipedia.org/wiki/File:Shadow_of_Mordor_cover_art.jpg" alt="Shadow of Mordor" /&gt;
&lt;figcaption&gt;Cover art for Middle-earth: Shadow of Mordor&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre><h3 id="learn-more-about-the-new-html5-elements-"><strong>Learn more about the new HTML5 elements:</strong></h3><ul><li><a href="https://www.w3schools.com/html/html5_semantic_elements.asp">w3schools</a> provides simple and clear descriptions of many of the news elements and how/where they should be used.</li><li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">MDN</a> also provides a great reference for all HTML elements and goes deeper into each.</li></ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
