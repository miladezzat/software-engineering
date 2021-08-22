---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9e63740569d1a4ca3cda.jpg"
tags: [HTML]
description: "The HTML document type declaration, also known as DOCTYPE, is"
author: "Milad E. Fahmy"
title: "What is the DOCTYPE Declaration in HTML?"
created: "2021-08-15T22:50:05+02:00"
modified: "2021-08-15T22:50:05+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-html ">
<header class="post-full-header">
<h1 class="post-full-title">What is the DOCTYPE Declaration in HTML?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e63740569d1a4ca3cda.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e63740569d1a4ca3cda.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e63740569d1a4ca3cda.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e63740569d1a4ca3cda.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e63740569d1a4ca3cda.jpg" alt="What is the DOCTYPE Declaration in HTML?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>The HTML document type declaration, also known as <code>DOCTYPE</code>, is the first line of code required in every HTML or XHTML document. The <code>DOCTYPE</code> declaration is an instruction to the web browser about what version of HTML the page is written in. This ensures that the web page is parsed the same way by different web browsers.</p><p>In HTML 4.01, the <code>DOCTYPE</code> declaration refers to a document type definition (DTD). A DTD defines the structure and the legal elements of an XML document. Because HTML 4.01 was based on the Standard Generalised Markup Language (SGML), referring to a DTD in the <code>DOCTYPE</code> declaration was necessary.</p><p>Additionally, doctypes for HTML 4.01 required the declaration of either <code>strict</code>, <code>transitional</code>, or <code>frameset</code> DTD, each with a different use case as outlined below.</p><ul><li><strong><strong>Strict DTD</strong></strong>: Used for web pages that <em>exclude</em> attributes and elements that W3C expects to phase out as CSS support grows</li><li><strong><strong>Transitional DTD</strong></strong>: Used for web pages that <em>include</em> attributes and elements that W3C expects to phase out as CSS support grows</li><li><strong><strong>Frameset DTD</strong></strong>: Used for web pages with frames</li></ul><p>In contrast, the declaration of HTML5 <code>DOCTYPE</code> is much simpler: it no longer requires a reference to DTDs as it is no longer based on SGML. See the examples below for a comparison between HTML 4.01 and HTML5 <code>DOCTYPE</code>s.</p><h3 id="examples"><strong>Examples</strong></h3><p>Doctype syntax for HTML5 and beyond:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;</code></pre><p>Doctype syntax for strict HTML 4.01:</p><pre><code class="language-html">&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt;</code></pre><p>Doctype syntax for transitional HTML 4.01:</p><pre><code class="language-html">&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"&gt;</code></pre><p>Doctype syntax for frameset HTML 4.01:</p><pre><code class="language-html">&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd"&gt;</code></pre><h2 id="history"><strong>History</strong></h2><p>During the formative years of HTML, web standards were not agreed upon yet. Browser vendors would build new features in whatever way they wanted. There was little concern for competing browsers. </p><p>The result was that web developers had to choose a browser to develop their sites for. This meant that sites would not render well in unsupported browsers. This situation could not continue.</p><p>The W3C (World Wide Web Consortium) wrote a set of web standards to handle this situation. All browser vendors and web developers should adhere to these standards. This would ensure that websites would render well across browsers. </p><p>The changes required by the standards were quite different from some existing practices. Adhering to them would break existing non standards compliant websites.</p><p>To handle this problem, vendors began programming rendering modes in to their browsers. Web developers would need to add a doctype declaration to the top of an HTML document. The doctype declaration would tell the browser which rendering mode to use for that document. </p><p>Three separate rendering modes were generally available across browsers. </p><ul><li><strong><strong>Full standards mode</strong></strong> renders pages according to the W3C web standards.</li><li><strong><strong>Quirks mode</strong></strong> renders pages in a non standards compliant way. </li><li><strong><strong>Almost standards mode</strong></strong> is close to full standards mode, but features support for a small number of quirks.</li></ul><p>In the modern age of HTML5, web standards are fully implemented in all major browsers. Web sites are generally developed in a standards compliant way. Because of this the HTML5 doctype declaration only exists to tell the browser to render the document in full standards mode.</p><h2 id="usage"><strong>Usage</strong></h2><p>The Doctype Declaration must be the very first line of code in an HTML document, aside from comments, which can go before it if needed. For modern HTML5 documents the doctype declaration should be as follows:</p><p><code>&lt;!DOCTYPE html&gt;</code></p><h4 id="more-information-"><strong>More Information:</strong></h4><p>While no longer in general use, there are several other doctype declaration types from previous versions of HTML. There are also specific versions for XML documents. To read more about these, and to see code examples for each, take a look at the <a href="https://en.wikipedia.org/wiki/Document_type_declaration">Wikipedia article</a>.</p><p><a href="https://www.w3.org/QA/Tips/Doctype">A note from the W3</a></p><p><a href="https://developer.mozilla.org/en-US/docs/Glossary/Doctype">MDN Glossary entry</a></p><p><a href="https://www.w3schools.com/tags/tag_doctype.asp">W3Schools</a></p><p><a href="https://developer.mozilla.org/en-US/docs/Quirks_Mode_and_Standards_Mode">A quick explanation of “Quirks Mode” and “Standards Mode”</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
