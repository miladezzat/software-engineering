---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9e4f740569d1a4ca3c6e.jpg"
tags: [HTML]
description: "Sometimes you may want to use a button to link to another pag"
author: "Milad E. Fahmy"
title: "How to Create an HTML Button That Acts Like a Link"
created: "2021-08-15T22:50:03+02:00"
modified: "2021-08-15T22:50:03+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-html ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create an HTML Button That Acts Like a Link</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e4f740569d1a4ca3c6e.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e4f740569d1a4ca3c6e.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e4f740569d1a4ca3c6e.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9e4f740569d1a4ca3c6e.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9e4f740569d1a4ca3c6e.jpg" alt="How to Create an HTML Button That Acts Like a Link">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>Sometimes you may want to use a button to link to another page or website rather than to submit a form or something like that. This is fairly simple to do and can be achieved in several ways.</p><h2 id="how-to-create-an-html-button-using-the-button-tag-in-an-a-tag">How to Create an HTML Button Using the Button Tag in an A Tag</h2><p>One way is to simply wrap your <code>&lt;button&gt;</code> tag in an <code>&lt;a&gt;</code> tag:</p><pre><code class="language-html">&lt;a href='https://www.freecodecamp.org/'&gt;&lt;button&gt;Link To freeCodeCamp&lt;/button&gt;&lt;/a&gt;</code></pre><p>This transforms your entire button into a link.</p><h2 id="how-to-turn-a-link-into-a-button-with-css">How To Turn a Link Into a Button with CSS</h2><p>A second option is to create your link as you normally would with your <code>&lt;a&gt;</code> tag and then style it via CSS:</p><pre><code class="language-html">&lt;a href='https://www.freecodecamp.org/'&gt;Link To freeCodeCamp&lt;/a&gt;</code></pre><p>Once you’ve created your link, you can the use CSS to make it look like a button. For instance, you could add a border, a background color, some styles for when the user is hovering the link.</p><p>You can <a href="/news/a-quick-guide-to-styling-buttons-using-css-f64d4f96337f/">read more about styling links with CSS here</a>.</p><h2 id="how-to-put-a-button-inside-a-form-using-html">How to Put a Button inside a Form Using HTML</h2><p>Another way to add a button is to wrap an <code>input</code> inside <code>form</code> tags. Specify the desired target URL in the form action attribute.</p><pre><code class="language-html">&lt;form action="http://google.com"&gt;
&lt;input type="submit" value="Go to Google" /&gt;
&lt;/form&gt;</code></pre><p>I hope you've found tutorial helpful. Happy coding.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
