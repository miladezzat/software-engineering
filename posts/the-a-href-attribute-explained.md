---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9d6a740569d1a4ca37a6.jpg"
tags: [HTML]
description: "The <a href> attribute refers to a destination provided by a "
author: "Milad E. Fahmy"
title: "The HTML a href Attribute Explained with Examples"
created: "2021-08-15T22:49:49+02:00"
modified: "2021-08-15T22:49:49+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-html ">
<header class="post-full-header">
<h1 class="post-full-title">The HTML a href Attribute Explained with Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d6a740569d1a4ca37a6.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d6a740569d1a4ca37a6.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d6a740569d1a4ca37a6.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9d6a740569d1a4ca37a6.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9d6a740569d1a4ca37a6.jpg" alt="The HTML a href Attribute Explained with Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>The <code>&lt;a href&gt;</code> attribute refers to a destination provided by a link. The <code>a</code> (anchor) tag is dead without the <code>&lt;href&gt;</code> attribute. </p><h2 id="how-to-use-the-a-href-tag">How to use the &lt;a href&gt; tag</h2><p>Sometimes in your workflow, you don’t want a live link or you won’t know the link destination yet. In this case, it’s useful to set the <code>href</code> attribute to <code>"#"</code> to create a dead link. </p><p>The <code>href</code> attribute can be used to link to local files or files on the internet.</p><p>For instance:</p><pre><code class="language-html">&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Href Attribute Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Href Attribute Example&lt;/h1&gt;
&lt;p&gt;
&lt;a href="https://www.freecodecamp.org/contribute/"&gt;The freeCodeCamp Contribution Page&lt;/a&gt; shows you how and where you can contribute to freeCodeCamp's community and growth.
&lt;/p&gt;
&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p>The <code>&lt;a href&gt;</code> attribute is supported by all browsers.</p><h2 id="more-html-attributes-">More HTML attributes:</h2><p><code>hreflang</code> : Specifies the language of the linked resource. </p><p><code>target</code> : Specifies the context in which the linked resource will open. </p><p><code>title</code> : Defines the title of a link, which appears to the user as a tooltip.</p><h3 id="examples"><strong>Examples</strong></h3><pre><code class="language-html">&lt;a href="#"&gt;This is a dead link&lt;/a&gt;
&lt;a href="https://www.freecodecamp.org"&gt;This is a live link to freeCodeCamp&lt;/a&gt;
&lt;a href="https://html.com/attributes/a-href/"&gt;more with a href attribute&lt;/a&gt;</code></pre><h3 id="in-page-anchors"><strong>In-page anchors</strong></h3><p>It’s also possible to set an anchor to certain place of the page. To do this you should first place a tab at location on the page with tag <a>and necessary attribute “name” with any keyword description in it, like this:</a></p><pre><code class="language-html">&lt;a name="top"&gt;&lt;/a&gt;</code></pre><p><a>Any description between tags is not required. After that you can place a link leading to this anchor at any palce on same page. To do this you should use tag </a><a>with necessary attribute “href” with symbol # (sharp) and key-word description of the anchor, like this:</a></p><pre><code class="language-html">&lt;a href="#top"&gt;Go to Top&lt;/a&gt;</code></pre><h3 id="image-links"><strong><strong>Image Links</strong></strong></h3><p>The <code>&lt;a href="#"&gt;</code> may also be applied to images and other HTML elements.</p><h3 id="example"><strong><strong>Example</strong></strong></h3><pre><code class="language-html">&lt;a href="#"&gt;&lt;img itemprop="image" style="height: 90px;" src="http://www.chatbot.chat/assets/images/header-bg_y.jpg" alt="picture"&gt;  &lt;/a&gt;</code></pre><h3 id="some-more-examples-of-href"><strong>Some more examples of href</strong></h3><pre><code class="language-html">&lt;base href="https://www.freecodecamp.org/a-href/"&gt;This gives a base url for all further urls on the page&lt;/a&gt;
&lt;link href="style.css"&gt;This is a live link to an external stylesheet&lt;/a&gt;</code></pre><h2 id="what-else-can-you-do-with-a-href">What else can you do with &lt;a href&gt;? </h2><p>More customization! Let's see a specific use case:</p><p>A mailto link is a kind of hyperlink (<code>&lt;a href=""&gt;&lt;/a&gt;</code>) with special parameters that lets you specify additional recipients, a subject line, and/or a body text.</p><h3 id="the-basic-syntax-with-a-recipient-is-"><strong>The basic syntax with a recipient is:</strong></h3><pre><code class="language-html">&lt;a href="mailto:friend@something.com"&gt;Some text&lt;/a&gt;</code></pre><h3 id="adding-a-subject-to-that-mail-">Adding a subject to that mail:</h3><p>If you want to add a specific subject to that mail, be careful to add <code>%20</code> or <code>+</code> everywhere there’s a space in the subject line. An easy way to ensure that it is properly formatted is to use a <a href="https://meyerweb.com/eric/tools/dencoder/">URL Decoder / Encoder</a>.</p><h3 id="adding-body-text-">Adding body text:</h3><p>Similarly, you can add a specific message in the body portion of the email: Again, spaces have to be replaced by <code>%20</code> or <code>+</code>. After the subject paramater, any additional parameter must be preceded by <code>&amp;</code></p><p>Example: Say you want users to send an email to their friends about their progress at Free Code Camp:</p><p>Address: empty</p><p>Subject: Great news</p><p>Body: I am becoming a developer</p><p>Your html link now:</p><pre><code class="language-html">&lt;a href="mailto:?subject=Great%20news&amp;body=I%20am%20becoming%20a%20developer"&gt;Send mail!&lt;/a&gt;</code></pre><p>Here, we’ve left mailto empty (mailto:?). This will open the user’s email client and the user will add the recipient address themselves.</p><h3 id="adding-more-recipients-">Adding more recipients:</h3><p>In the same manner, you can add CC and bcc parameters. Seperate each address by a comma!</p><p>Additional parameters must be preceded by <code>&amp;</code>.</p><pre><code class="language-html">&lt;a href="mailto:firstfriend@something.com?subject=Great%20news&amp;cc=secondfriend@something.com,thirdfriend@something.com&amp;bcc=fourthfriend@something.com"&gt;Send mail!&lt;/a&gt;</code></pre><h4 id="more-information-"><strong>More Information:</strong></h4><p><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#E-mail_links">MDN - E-mail links</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
