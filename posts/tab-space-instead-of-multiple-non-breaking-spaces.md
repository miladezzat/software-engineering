---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9dbb740569d1a4ca3959.jpg"
tags: [HTML]
description: "There are a number of ways to insert spaces in HTML. The easi"
author: "Milad E. Fahmy"
title: "Why You Should Use Tab Space Instead of Multiple Non-Breaking Spaces (nbsp) in HTML"
created: "2021-08-15T22:49:52+02:00"
modified: "2021-08-15T22:49:52+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-html tag-html5 ">
<header class="post-full-header">
<h1 class="post-full-title">Why You Should Use Tab Space Instead of Multiple Non-Breaking Spaces (nbsp) in HTML</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9dbb740569d1a4ca3959.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9dbb740569d1a4ca3959.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9dbb740569d1a4ca3959.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9dbb740569d1a4ca3959.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9dbb740569d1a4ca3959.jpg" alt="Why You Should Use Tab Space Instead of Multiple Non-Breaking Spaces (nbsp) in HTML">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>There are a number of ways to insert spaces in HTML. The easiest way is by simply adding spaces or multiple <code>&amp;nbsp;</code> character entities before and after the target text. Of course, that isn't the DRYest method.</p><p>Instead, to keep your code easy to maintain and reduce repetition, you can use the <code>&lt;span&gt;</code> and <code>&lt;pre&gt;</code> elements, along with a bit of CSS:</p><h2 id="using-the-span-element"><strong>Using the <code>&lt;span&gt;</code> element</strong></h2><p>An example of how to use <code>&lt;span&gt;</code> to control the spacing between text can be seen below:</p><pre><code class="language-html">&lt;p&gt;Hello my name is &lt;span class="tab"&gt; James&lt;/p&gt;</code></pre><p>Note that <code>&lt;span&gt;</code> tags are self closing, meaning they do not need a <code>/&gt;</code>.</p><p>Then you can use an external or internal styling to give the class <code>tab</code> some properties. For example, the following code will work in an external stylesheet:</p><pre><code class="language-css">.tab {
padding-left: 2px;
}</code></pre><p>You can also give the <code>&lt;span&gt;</code> some inline-style properties, as shown below.</p><p>Alternatively, you can give <code>&lt;span&gt;</code> the same properties as inline styles as shown below:</p><pre><code class="language-html">&lt;p&gt;Hello my name is &lt;span style="padding-left: 2px;"&gt; James&lt;/p&gt;</code></pre><h2 id="using-the-pre-element">Using the <code>&lt;pre&gt;</code> element</h2><p>For an easy way to add a tab space, simply wrap your text in <code>&lt;pre&gt;</code> tags. For example:</p><p>The <code>&lt;pre&gt;</code> element simply represents <em>preformated </em>text. In other words, any spaces or tabs in the inner text will be rendered. For example:</p><pre><code class="language-html">&lt;pre&gt;
function greeting() {
console.log('Hello world!');
}
&lt;/pre&gt;</code></pre><p>Just keep in mind that any actual tab characters (not a bunch of spaces that look like tabs), that you use with this method might appear ridiculously wide. This is because the <code>tab-size</code> property for the <code>&lt;pre&gt;</code> element is set to 8 spaces by default.</p><p>You can change this with a bit of CSS:</p><pre><code class="language-css">pre {
tab-width: 2;
}</code></pre><h2 id="more-info-about-html-">More info about HTML:</h2><p>HyperText Markup Language (HTML) is a markup language used to construct online documents and is the foundation of most websites today. </p><p>A markup language like HTML allows us to</p><ul><li>create links to other documents, </li><li>structure the content in our document, and </li><li>ascribe context and meaning to the content of our document.</li></ul><p>An HTML document has two aspects to it. It contains structured information (Markup), and text-links (HyperText) to other documents. </p><p>We structure our pages using <a href="https://guide.freecodecamp.org/html#">HTML elements</a>. They are constructs of the language providing <a href="https://guide.freecodecamp.org/html#">structure</a> and <a href="https://guide.freecodecamp.org/html#">meaning</a> in our document for the browser and the element links to other documents across the internet.</p><p>The internet was originally created to store and present static (unchanging) documents. The aspects of HTML discussed above were seen perfectly in these documents which lacked all design and styling. They presented structured information that contained links to other documents.</p><p>HTML5 is the latest version, or specification, of HTML. The World Wide Web Consortium (W3C) is the organization that develops the standards for the World Wide Web, including those for HTML. As web pages and web apps grow more complex, W3C updates HTML’s standards.</p><p>HTML5 introduces a whole bunch of semantic elements. While HTML helps provide meaning to our document, it wasn’t until the introduction of <a href="https://guide.freecodecamp.org/html#">semantic elements</a> with HTML5 that its potential was fully known.</p><h2 id="a-simple-example-of-an-html-document"><strong>A simple example of an HTML Document</strong></h2><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Page Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;My First Heading&lt;/h1&gt;
&lt;p&gt;My first paragraph.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>!DOCTYPE html: Defines this document to be HTML5</p><p>html: The root element of an HTML page</p><p>head: The element contains meta information about the document</p><p>title: The element specifies a title for the document</p><p>body: The element contains the visible page content</p><p>h1: The element defines a large heading</p><p>p: The element defines a paragraph</p><h2 id="html-versions">HTML Versions</h2><p>Since the early days of the web, there have been many versions of HTML</p><ul><li>HTML1991</li><li>HTML 2.01995</li><li>HTML 3.21997</li><li>HTML 4.011999X</li><li>HTML2000</li><li>HTML52014</li></ul><h4 id="other-resources"><strong>Other Resources</strong></h4><ul><li><a href="https://guide.freecodecamp.org/html/elements">HTML Elements</a></li><li><a href="https://guide.freecodecamp.org/html/html5-semantic-elements">Semantic HTML</a></li><li><a href="https://guide.freecodecamp.org/html/attributes">HTML Attributes</a></li></ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
