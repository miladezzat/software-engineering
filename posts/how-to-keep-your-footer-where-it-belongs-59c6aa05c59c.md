---
card: "https://cdn-media-1.freecodecamp.org/images/1*gUfDwoSlbdxjXv10Pxnxtw.png"
tags: [CSS]
description: "This post is also available in Korean."
author: "Milad E. Fahmy"
title: "How to keep your footer where it belongs ?"
created: "2021-08-16T11:41:01+02:00"
modified: "2021-08-16T11:41:01+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css tag-technology tag-web-development tag-html tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to keep your footer where it belongs ?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*gUfDwoSlbdxjXv10Pxnxtw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*gUfDwoSlbdxjXv10Pxnxtw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*gUfDwoSlbdxjXv10Pxnxtw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*gUfDwoSlbdxjXv10Pxnxtw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*gUfDwoSlbdxjXv10Pxnxtw.png" alt="How to keep your footer where it belongs ?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;html&gt;
&lt;head&gt;
&lt;link rel="stylesheet" type="text/css" href="main.css" /&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="page-container"&gt;
&lt;div id="content-wrap"&gt;
&lt;!-- all other page content --&gt;
&lt;/div&gt;
&lt;footer id="footer"&gt;&lt;/footer&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><p><code>main.css</code>:</p><pre><code class="language-css">#page-container {
position: relative;
min-height: 100vh;
}
#content-wrap {
padding-bottom: 2.5rem;    /* Footer height */
}
#footer {
position: absolute;
bottom: 0;
width: 100%;
height: 2.5rem;      /* Footer height */
}</code></pre><p>So what is this doing?</p><ul><li>The <code>page-container</code> goes around everything on the page, and sets its minimum height to 100% of the viewport height (<code>vh</code>). As it is <code>relative</code>, its child elements can be set with <code>absolute</code> position based on it later.</li><li>The <code>content-wrap</code> has a bottom padding that is the height of the footer, ensuring that exactly enough space is left for the footer inside the container they are both in. A wrapping <code>div</code> is used here that would contain all other page content.</li><li>The <code>footer</code> is set to <code>absolute</code>, sticking to the <code>bottom: 0</code> of the <code>page-container</code> it is within. This is important, as it is not <code>absolute</code> to the viewport, but will move down if the <code>page-container</code> is taller than the viewport. As stated, its height, arbitrarily set to <code>2.5rem</code> here, is used in the <code>content-wrap</code> above it.</li></ul><p>And there you have it. Your footer now stays where you would expect!</p><h4 id="final-touches">Final touches</h4><p>Of course, this is CSS, so it wouldn’t be complete without some <a href="https://nicolas-hoizey.com/2015/02/viewport-height-is-taller-than-the-visible-part-of-the-document-in-some-mobile-browsers.html" rel="noopener">mobile-specific UX considerations</a>, and <a href="https://matthewjamestaylor.com/blog/keeping-footers-at-the-bottom-of-the-page" rel="noopener">an alternative approach</a> using <code>min-height: 100%</code> rather than <code>100vh</code>. But this has its own <a href="https://stackoverflow.com/questions/6654958/make-body-have-100-of-the-browser-height/38908284#38908284" rel="noopener">drawbacks</a>.<br><br>Flexbox (with flex-grow) or Grid can also be used, and are both very powerful.</p><p>Which method you choose is entirely up to you, and the specifics of your design. Hopefully, the above example and links help you save some time in making your decision and implementing it.</p><p>Thanks for reading. Here are a couple of other things I’ve written recently:</p><ul><li><a href="https://medium.freecodecamp.org/amazon-ecs-terms-and-architecture-807d8c4960fd" rel="noopener">A beginner’s guide to Amazon’s Elastic Container Service</a></li><li><a href="https://medium.com/@dfrase/testing-react-with-jest-and-enzyme-20505fec4675" rel="noopener">Testing React with Jest and Enzyme</a></li></ul>
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
