---
card: "https://cdn-media-1.freecodecamp.org/images/1*Nm4AWKx-ezJBFLGShJCVAw.jpeg"
tags: [CSS]
description: "This post was originally published on Coder-Coder.com."
author: "Milad E. Fahmy"
title: "4 reasons your z-index isn’t working (and how to fix it) — Coder Coder"
created: "2021-08-16T10:06:33+02:00"
modified: "2021-08-16T10:06:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-web-development tag-coding tag-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">4 reasons your z-index isn’t working (and how to fix it) — Coder Coder</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Nm4AWKx-ezJBFLGShJCVAw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*Nm4AWKx-ezJBFLGShJCVAw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*Nm4AWKx-ezJBFLGShJCVAw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Nm4AWKx-ezJBFLGShJCVAw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Nm4AWKx-ezJBFLGShJCVAw.jpeg" alt="4 reasons your z-index isn’t working (and how to fix it) — Coder Coder">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;div class="content__block"&gt; Meow meow meow... &lt;/div&gt;
&lt;div class="cat-bottom"&gt;&lt;/div&gt;</code></pre><p>In this layout, we ideally want the white block of text to be on top of both cats.</p><p>To try to achieve this, we’ve added some negative margins to the CSS for both cat images, so that they overlap the white block a bit:</p><pre><code class="language-css">.cat-top {
margin-bottom: -110px;
}
.cat-bottom {
float: right;
margin-top: -120px;
See the Pen <a href='https://codepen.io/thecodercoder/pen/XQEyeX/'>Z-index: #1: set position, #2: natural stacking order, #3: CSS properties</a> by Jessica
(<a href='https://codepen.io/thecodercoder'>@thecodercoder</a>) on <a href='https://codepen.io'>CodePen</a>.
float: right;
margin-top: -120px;
transform: rotate(180deg);
position: relative;
z-index: 2;
}
.cat-top, .cat-bottom {
position: relative; z-index: 1;
See the Pen <a href='https://codepen.io/thecodercoder/pen/qwYdZw/'>Z-index: #4 different stacking contexts</a> by Jessica
(<a href='https://codepen.io/thecodercoder'>@thecodercoder</a>) on <a href='https://codepen.io'>CodePen</a>.
position: relative;
z-index: 1;
}
.modal {
position: fixed;
z-index: 100;
}
.side-tab {
position: fixed;
z-index: 5;
}</code></pre><p>All the elements have their position set, and the side tab has a <code>z-index</code> of 5, which positions it on top of the content element, which is at <code>z-index: 1</code>.</p><p>Then, the modal has <code>z-index: 100</code> which <em>should</em> put it on top of the side tab at <code>z-index: 5</code>. But instead, the modal overlay is underneath the side tab.</p><p>Why is this happening?</p><p>Previously, we addressed some factors that go into the stacking context, such as if the element has its position set, as well as its order in the markup.</p><p><strong>But yet another aspect of stacking context is that a child element is limited to the stacking context of its parent.</strong></p><p>Let’s take a closer look at the three elements in question.</p><p>Here’s the markup we have:</p><pre><code class="language-css">&lt;section class="content"&gt;
&lt;div class="modal"&gt;&lt;/div&gt;
&lt;/section&gt;
&lt;div class="side-tab"&gt;&lt;/div&gt;</code></pre><p>Looking at the markup, we can see that the content and side tab elements are siblings. That is, they exist at the same level in the markup (this is different from z-index level). And the modal is a child element of the content element.</p><p>Because the modal is inside the content element, its <code>z-index</code> of 100 only has an effect inside its parent, the content element. For example, if there were other child elements that were siblings to the modal, their <code>z-index</code> values would put them on top of or underneath each other.</p><p>But the <code>z-index</code> value of those child elements doesn't mean anything outside the parent, because the parent content element has its <code>z-index</code> set to 1.</p><p>So its children, including the modal, can’t break out of that <code>z-index</code> level.</p><p>(You can remember it with this slightly depressing metaphor: a child can be limited by its parents, and can’t break free of them.)</p><p>There are a couple of solutions to this problem:</p><h3 id="solution-move-the-modal-outside-of-the-content-parent-and-into-the-main-stacking-context-of-the-page-">Solution: Move the modal outside of the content parent, and into the main stacking context of the page.</h3><p>The corrected markup would then look like this:</p><pre><code class="language-css">&lt;section class="content"&gt;&lt;/section&gt;
&lt;div class="modal"&gt;&lt;/div&gt;
&lt;div class="side-tab"&gt;&lt;/div&gt;</code></pre><p>Now, the modal element is a sibling element to the two others. This puts all three elements in the same stacking context as them, so each of their z-index levels will now affect one another.</p><p>In this new stacking context, the elements will display in the following order, from top to bottom:</p><ul><li>modal (<code>z-index: 100</code>)</li><li>side tab (<code>z-index: 5</code>)</li><li>content (<code>z-index: 1</code>)</li></ul><h3 id="alternative-solution-remove-positioning-from-the-content-so-it-won-t-limit-the-modal-s-z-index-">Alternative Solution: Remove positioning from the content, so it won’t limit the modal’s z-index.</h3><p>If you don’t want to or can’t change the markup, you can fix this problem by removing the <code>position</code> setting from the content element:</p><pre><code class="language-css">.content {
// No position set
}
.modal {
position: absolute;
z-index: 100;
}
.side-tab {
position: absolute;
z-index: 5;
}</code></pre><p>Since the content element is now unpositioned, it will no longer limit the modal’s <code>z-index</code> value. So the open modal will be positioned on top of the side tab element, due to its higher <code>z-index</code> of 100.</p><p>While this does work, I personally would go for the first solution.</p><p>Because if for some reason in the future you have to position the content element, it will again limit the modal’s order in the stacking context.</p><h3 id="in-summary">In Summary<br></h3><p>I hope that you’ve found this tutorial helpful! To sum up, most issues with z-index can be solved by following these two guidelines:</p><ol><li>Check that the elements have their position set and z-index numbers in the correct order.</li><li>Make sure that you don’t have parent elements limiting the <code>z-index</code> level of their children.</li></ol><h4 id="want-more">Want more?</h4><p>I'm creating a course in responsive design! <a href="https://coder-coder.com/responsive-design-beginners/">Sign up here</a> to get emailed when it's published.</p><p>I write web development tutorials on my blog c<a href="https://coder-coder.com" rel="noopener">oder-coder.com</a>, post mini-tips on <a href="https://www.instagram.com/thecodercoder/" rel="noopener">Instagram</a> and coding tutorials on <a href="https://www.youtube.com/c/codercodertv">YouTube</a>.</p>
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
