---
card: "https://cdn-media-1.freecodecamp.org/images/1*gSXpULAAseIwyvF6rs_t5Q.jpeg"
tags: [Accessibility]
description: "When I was entering the front end developer ranks, no one tal"
author: "Milad E. Fahmy"
title: "How to get started with website accessibility"
created: "2021-08-16T11:38:50+02:00"
modified: "2021-08-16T11:38:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-accessibility tag-technology tag-web-development tag-front-end-development tag-design ">
<header class="post-full-header">
<h1 class="post-full-title">How to get started with website accessibility</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*gSXpULAAseIwyvF6rs_t5Q.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*gSXpULAAseIwyvF6rs_t5Q.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*gSXpULAAseIwyvF6rs_t5Q.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*gSXpULAAseIwyvF6rs_t5Q.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*gSXpULAAseIwyvF6rs_t5Q.jpeg" alt="How to get started with website accessibility">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;input aria-labelledby="sample-id another-id" value="" /&gt;
&lt;p id="another id"&gt;That defines this input.&lt;/p&gt;</code></pre><p>A screen reader will read the input as “Some text that defines this input”.</p><p>The cool thing about this is that it concatenates the text of all the IDs you pass in. (<code>aria-label</code> does not have this same functionality). There are few examples of <a href="https://www.w3.org/WAI/GL/wiki/Using_aria-labelledby_to_concatenate_a_label_from_several_text_nodes#Examples" rel="noopener">why you might want to concatenate labels</a> on the w3 site.</p><h4 id="aria-expanded"><code>aria-expanded</code></h4><p>The <code><a href="https://benrobertson.io/accessibility/javascript-accessibility#3-manage-aria-states" rel="noopener">aria-expanded</a></code><a href="https://benrobertson.io/accessibility/javascript-accessibility#3-manage-aria-states" rel="noopener"> attribute</a> tells whether an element is open or closed. You might use this on a hamburger button that controls your main navigation. When the screen reader user focuses on the button with an <code>aria-expanded</code> value of false, the screen reader will say something like “Main Menu, collapsed button” and they will know they can open the menu.</p><h4 id="aria-describedby"><code>aria-describedby</code></h4><p>The <code>aria-describedby</code> attribute points to an element that describes the current element. If you want to add some error text to an input, you might use this.</p><p>Here is an example:</p><pre><code class="language-html">&lt;label for="example-input"&gt;Email&lt;/label&gt;
&lt;input type="email" id="example-input" aria-describedby="email-error" /&gt;
&lt;div id="email-error"&gt;
&lt;p&gt;The email address is in an invalid format.&lt;/p&gt;
&lt;/div&gt;</code></pre><p>In this example, on form submit, the text “The email address is in an invalid format.” is added dynamically to the div. When the input is focused, this message will be read aloud to screen readers.</p><h4 id="aria-live"><code>aria-live</code></h4><p><code>aria-live</code> lets the computer know that an area of the page will be updated later. This is really handy with AJAX stuff. It can have a value of polite, assertive, or off.</p><p>With these attributes, you are giving the browser extra context so it can have a better idea of what functionality a certain element may have, and more context to users of screen readers and other assistive technologies.</p><h3 id="summary-of-the-principles">Summary of the principles</h3><p>That wraps up my four simple principles.</p><p>Just to recap:</p><p>Principle 1 is that web design is more than graphic design.</p><p>Principle 2 is be as semantic as possible.</p><p>Principle 3 is that websites should look good naked.</p><p>Principle 4 is talk to your computer, use ARIA.</p><p>By minding these principles, you will be able to avoid a good chunk of the mistakes that are made by using non-semantic code concerned only with appearances.</p><p>And, if you want to see how to start putting these into practice, I’m launching a free email course: <a href="https://benrobertson.io/courses/common-accessibility-mistakes/" rel="noopener"><em>9 Common Website Accessibility Mistakes and How to Fix Them</em></a>. Get access to the course by signing up <a href="https://benrobertson.io/courses/common-accessibility-mistakes/" rel="noopener">here</a>!</p><p><a href="https://benrobertson.io/courses/common-accessibility-mistakes/" rel="noopener"><strong>Common Accessibility Mistakes and How to Avoid Them</strong></a><br><a href="https://benrobertson.io/courses/common-accessibility-mistakes/" rel="noopener"><em>A free introduction to web accessibility course for web developers. Click here to sign up!</em>benrobertson.io</a></p><p><em>Originally published at <a href="https://benrobertson.io/accessibility/principles-getting-started-website-accessibility" rel="noopener">benrobertson.io</a>.</em></p>
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
