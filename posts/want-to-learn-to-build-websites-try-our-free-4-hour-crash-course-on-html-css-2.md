---
card: "/images/default.jpg"
tags: [HTML]
description: "I m excited to share this four hour course on HTML and CSS wi"
author: "Milad E. Fahmy"
title: "Want to learn to build websites? Try our free HTML & CSS crash course"
created: "2021-08-16T10:06:10+02:00"
modified: "2021-08-16T10:06:10+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-html tag-css tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">Want to learn to build websites? Try our free HTML &amp;&nbsp;CSS crash course</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/07/Want_to_learn_to_build_websites__Try_our_free_HTML__-CSS_crash_course.jpg 300w,
/news/content/images/size/w600/2019/07/Want_to_learn_to_build_websites__Try_our_free_HTML__-CSS_crash_course.jpg 600w,
/news/content/images/size/w1000/2019/07/Want_to_learn_to_build_websites__Try_our_free_HTML__-CSS_crash_course.jpg 1000w,
/news/content/images/size/w2000/2019/07/Want_to_learn_to_build_websites__Try_our_free_HTML__-CSS_crash_course.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/07/Want_to_learn_to_build_websites__Try_our_free_HTML__-CSS_crash_course.jpg" alt="Want to learn to build websites? Try our free HTML &amp;&nbsp;CSS crash course">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;My first website&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;My very first webpage&lt;/h1&gt;
&lt;h2&gt;Websites are built with HTML&lt;/h2&gt;
&lt;p&gt;HTML is a markup language that tells the browser what everything is&lt;/p&gt;
&lt;h2&gt;They also use CSS&lt;/h2&gt;
&lt;p&gt;I can't wait to start learning CSS!&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><h1 id="5-strong-and-emphasis">5. <code>strong</code> and <code>emphasis</code></h1><p>We can use <code>&lt;em&gt;</code> to add <em>emphasis</em> to our text and <code>&lt;strong&gt;</code> to add <strong>importance</strong>.</p><h1 id="6-file-naming-and-organization">6. File naming and organization</h1><p>In this part, Kevin teaches us some good practices around file naming and gives good advice on how to organise our files.</p><h1 id="7-anchors-and-attributes">7. Anchors and Attributes</h1><p>We can use anchor <code>&lt;a&gt;</code> element to link to a different location on the same page or to another page. To tell <code>&lt;a&gt;</code> where to link, we use <code>attributes</code>, and for anchors, it's <code>href</code>.</p><pre><code class="language-html">&lt;a href="https://scrimba.com"&gt;Link to Scrimba&lt;/a&gt;
</code></pre><h1 id="8-intro-to-css">8. Intro to CSS</h1><p>Kevin introduces us to CSS syntax and the notion of properties and values in CSS. How using <code>property: value</code> syntax we can style our webpages and introduces <em>inline</em> styling to make individual elements look good on the page.</p><h1 id="9-css-basics">9. CSS Basics</h1><p>In this video, we're going to learn about font size, colours, background colours and text alignment. Kevin will introduce us to four different ways of specifying colours in CSS, using keywords, <code>hex</code>, <code>rgb</code> and <code>hsl</code> values.</p><h1 id="10-practice-time-">10. Practice time!</h1><p>Ok, time for some individual practice. Kevin sets us a task to create a page about ourselves and sets us some HTML/CSS challenges along the way.</p><pre><code class="language-html">&lt;!--
HTML
- h1 (the title of the page)
- An introductory paragraph
- Two h2s, each followed by a few paragraphs
- Inside the paragraphs, use strong and emphasis tags
- If you are feeling adventurous add a second page and link to it
CSS
- Change the color of the h1
- Change the text alignment of the h1
- Change the color of the h2s
- Change the font-size of the paragraphs
- If you added a link, change the color of it
--&gt;
</code></pre><h1 id="11-recap-up-until-this-point">11. Recap up until this point</h1><p>In this cast, we quickly go over everything we've learned about HTML and CSS up until this point. Repetition is the mother of learning!</p><h1 id="12-lists">12. Lists</h1><p>Now, Kevin shows us how to create lists in HTML using <code>&lt;ol&gt;</code> for ordered lists and <code>&lt;ul&gt;</code> for unordered lists.</p><pre><code class="language-html">&lt;ol&gt;
&lt;li&gt;List item one&lt;/li&gt;
&lt;li&gt;a second list item&lt;/li&gt;
&lt;/ol&gt;
&lt;ul&gt;
&lt;li&gt;bullet point&lt;/li&gt;
&lt;li&gt;another bullet&lt;/li&gt;
&lt;/ul&gt;
src="images/dog-in-blanket.jpg"
alt="a dog wrapped in a blanket sitting on the road"
/&gt;
</code></pre><h1 id="14-practice-time-">14. Practice time!</h1><p>Alright, time for our second practice screencast. Kevin sets us a challenge to convert some markdown files to HTML/CSS webpage. No worries if you're not sure what <code>markdown</code> is because in this practice session Kevin will walk us through the completion of the task.</p><h1 id="15-internal-css">15. Internal CSS</h1><p>In this chapter, Kevin introduces internal CSS, an alternative to writing inline CSS.</p><p>Internal CSS is written in the same file as HTML, but within a separate <code>&lt;style&gt;</code> tag</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;All about Earth and Mars&lt;/title&gt;
&lt;style&gt;
h1 {
font-size: 60px;
}
p {
font-size: 24px;
color: steelblue;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Earth and Mars&lt;/h1&gt;
&lt;p&gt;Earth and Mars are two planets within our solar system.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><h1 id="17-classes-and-ids">17. Classes and IDs</h1><p>In this screencast, Kevin focuses on three types of selectors in CSS and when you might want to use which.</p><pre><code class="language-css">/* Element selector  */
a {
color: darksalmon;
}
/* Class selector  */
.intro {
font-size: 24px;
}
/* ID selector  */
#earth-title {
color: lightgreen;
}
</code></pre><h1 id="18-comments-in-html-and-css">18. Comments in HTML and CSS</h1><p>We can add comments in HTML:</p><pre><code class="language-html">&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Comments!&lt;/title&gt;
&lt;link rel="stylesheet" href="css/style.css" /&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Comments!&lt;/h1&gt;
&lt;!-- My comment goes here --&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><p>And in CSS:</p><pre><code class="language-css">/* TODO: change the color of the text to white */
body {
background: #333;
color: white;
}
/* Some more comments */
h1 {
color: red;
}
</code></pre><h1 id="19-the-only-tags-you-need-to-know-for-now-">19. The only tags you need to know (for now)</h1><p>In this part of the course, Kevin reminds us that we don't need to know everything at this point and at this stage we really need to know only the following tags:</p><pre><code class="language-txt">h1 -&gt; h6
p
strong and em
a
ul, ol, li
img
</code></pre><p>And it would be good if we can tell the difference between the following tags:</p><pre><code class="language-txt">header
main
section
footer
nav
div
</code></pre><h1 id="20-intro-to-the-box-model">20. Intro to the box model</h1><p>It's now time to discover the <em>box model</em>.<br>Most elements are block elements, which means they are 100% width of their parent and have a height of 0.</p><p>This is a brilliant cast, where Kevin not just simply and succinctly explains how the box model works, but also saves us from the common pitfalls that even experienced developers fall into from time to time.</p><h1 id="21-margin-and-padding">21. Margin and Padding</h1><p>Up next are margins and paddings.<br>Margins are used to control the position of an element <strong>relative to those around it</strong>, while padding is used to control the positioning of content <strong>inside</strong> our element.<br>Kevin does a great job explaining many different ways padding and margins can be set in CSS.</p><pre><code class="language-css">/*  */
padding-top: 20px;
padding-right: 30px;
padding-bottom: 40px;
padding-left: 50px;
/* Shorthand version would be */
padding: 20px 30px 40px 50px;
margin-top: 500px;
margin-left: 100px;
margin-right: 100px;
margin-bottom: 10px;
/* Shorthand version would be */
margin: 500px 100px 10px;
</code></pre><h1 id="22-borders">22. Borders</h1><p>The last piece in the box model - borders. Borders are added around your elements. And they can be set in a similar way to margins and padding.</p><pre><code class="language-css">border-color: yellow;
border-width: 20px;
border-style: solid;
/* Shorthand version would be */
border: solid yellow 20px;
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
