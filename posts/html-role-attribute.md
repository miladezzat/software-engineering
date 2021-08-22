---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9de7740569d1a4ca3a4b.jpg"
tags: [HTML]
description: "The role attribute describes the role of an element in progra"
author: "Milad E. Fahmy"
title: "HTML Role Attribute Explained"
created: "2021-08-15T22:49:55+02:00"
modified: "2021-08-15T22:49:55+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-html ">
<header class="post-full-header">
<h1 class="post-full-title">HTML Role Attribute Explained</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9de7740569d1a4ca3a4b.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9de7740569d1a4ca3a4b.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9de7740569d1a4ca3a4b.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9de7740569d1a4ca3a4b.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9de7740569d1a4ca3a4b.jpg" alt="HTML Role Attribute Explained">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>The <code>role</code> attribute describes the role of an element in programs that can make use of it, such as screen readers or magnifiers.</p><p>Usage Example:</p><pre><code class="language-html">&lt;a href="#" role="button"&gt;Button Link&lt;/a&gt;</code></pre><p>Screen Readers will read this element as “button” instead of “link”.</p><p>There are four categories of roles:</p><ul><li>Abstract Roles</li><li>Widget Roles</li><li>Document Structure Roles</li><li>Landmark Roles</li></ul><h2 id="more-info-about-html-attributes-">More info about HTML attributes:</h2><p><a href="https://guide.freecodecamp.org/html/attributes/script-src-attribute/">&lt;script src&gt; attribute</a></p><p><a href="https://guide.freecodecamp.org/html/attributes/a-href-attribute/">&lt;a href&gt; attribute</a></p><p><a href="https://guide.freecodecamp.org/html/attributes/a-target-attribute/">&lt;a target&gt; attribute</a></p><p><a href="https://guide.freecodecamp.org/html/attributes/body-background-attribute/">&lt;body background&gt; attribute</a></p><p><a href="https://guide.freecodecamp.org/html/attributes/p-align-attribute/">&lt;p align&gt; attribute</a></p><p><a href="https://guide.freecodecamp.org/html/attributes/img-src-attribute/">&lt;img src&gt; attribute</a></p><p><a href="https://guide.freecodecamp.org/html/attributes/font-color-attribute/">&lt;font&gt; attribute</a></p><h2 id="more-info-about-html-attributes">More info about HTML attributes</h2><p>HTML elements can have attributes, which contain additional information about the element.</p><p>HTML attributes generally come in name-value pairs, and always go in the opening tag of an element. The attribute name says what type of information you’re providing about the element, and the attribute value is the actual information.</p><p>For example, an anchor (<code>&lt;a&gt;</code>) element in an HTML document creates links to other pages, or other parts of the page. You use the <code>href</code> attribute in the opening <code>&lt;a&gt;</code> tag to tell the browser where the link sends a user.</p><p>Here’s an example of a link that sends users to freeCodeCamp’s home page:</p><pre><code class="language-html">&lt;a href="www.freecodecamp.org"&gt;Click here to go to freeCodeCamp!&lt;/a&gt;</code></pre><p>Notice that the attribute name (<code>href</code>) and value (“www.freeCodeCamp.org”) are separated with an equals sign, and quotes surround the value.</p><p>There are many different HTML attributes, but most of them only work on certain HTML elements. For example, the <code>href</code> attribute won’t work if it’s placed in an opening <code>&lt;h1&gt;</code> tag.</p><p>In the example above, the value supplied to the <code>href</code> attribute could be any valid link. However, some attributes only have a set of valid options you can use, or values need to be in a specific format. The <code>lang</code> attribute tells the browser the default language of the contents in an HTML element. The values for the <code>lang</code> attribute should use standard language or country codes, such as <code>en</code> for English, or <code>it</code> for Italian.</p><h2 id="boolean-attributes"><strong>Boolean Attributes</strong></h2><p>Some HTML attributes don’t need a value because they only have one option. These are called Boolean attributes. The presence of the attribute in a tag will apply it to that HTML element. However, it’s okay to write out the attribute name and set it equal to the one option of the value. In this case, the value is usually the same as the attribute name.</p><p>For example, the <code>&lt;input&gt;</code> element in a form can have a <code>required</code> attribute. This requires users to fill out that item before they can submit the form.</p><p>Here are examples that do the same thing:</p><pre><code class="language-html">&lt;input type="text" required &gt;
&lt;input type="text" required="required" &gt;</code></pre>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
