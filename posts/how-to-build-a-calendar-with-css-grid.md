---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca16b740569d1a4ca4e77.jpg"
tags: [CSS Grid]
description: "Building a calendar with CSS Grid is actually quite easy. I w"
author: "Milad E. Fahmy"
title: "How to build a calendar with CSS Grid"
created: "2021-08-16T11:28:52+02:00"
modified: "2021-08-16T11:28:52+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css-grid tag-design tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a calendar with CSS Grid</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca16b740569d1a4ca4e77.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca16b740569d1a4ca4e77.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca16b740569d1a4ca4e77.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca16b740569d1a4ca4e77.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca16b740569d1a4ca4e77.jpg" alt="How to build a calendar with CSS Grid">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Here's what you'll create by the end of this article:</p>
<figure><img src="https://zellwk.com/images/2019/calendar-css-grid/calendar-fixed.png" alt="A calendar built with CSS Grid"></figure>
<h1 id="creatingthehtml">Creating the HTML</h1>
<p>You can tell from the image that the calendar contains three parts:</p>
<ol>
<li>The month indicator</li>
<li>The weekday/weekend indicator</li>
<li>The dates themselves</li>
</ol>
<figure><img src="https://zellwk.com/images/2019/calendar-css-grid/structure.png" alt="Structure of the calendar"></figure>
<p>The best way to structure the HTML is to go with what feels right. We'll create the HTML according to these three sections:</p>
<pre><code class="language-html">&lt;div class="calendar"&gt;
&lt;div class="month-indicator"&gt;...&lt;/div&gt;
&lt;div class="day-of-week"&gt;...&lt;/div&gt;
&lt;div class="date-grid"&gt;...&lt;/div&gt;
&lt;/div&gt;
</code></pre>
<p>You should also be able to see we need seven columns for the grid.</p>
<figure><img src="https://zellwk.com/images/2019/calendar-css-grid/seven-columns.png" alt="Seven columns required for the grid"></figure>
<p>We'll focus the conversation on <code>.day-of-week</code> and <code>.date-grid</code> since we're only talking about grid.</p>
<h2 id="structuringthegrid">Structuring the grid</h2>
<p>There are two ways to create the CSS Grid.</p>
<p>The first way is to merge elements within <code>.day-of-week</code> and <code>.date-grid</code> into one selector. If we do this, we can set the selector in <code>display: grid</code>. Here's what the HTML would have looked like if we did this:</p>
<pre><code class="language-html">&lt;div class="grid"&gt;
&lt;!-- Day of week --&gt;
&lt;div&gt;Su&lt;/div&gt;
&lt;div&gt;Mo&lt;/div&gt;
&lt;div&gt;Tu&lt;/div&gt;
&lt;div&gt;We&lt;/div&gt;
&lt;div&gt;Th&lt;/div&gt;
&lt;div&gt;Fr&lt;/div&gt;
&lt;div&gt;Sa&lt;/div&gt;
&lt;!-- Dates --&gt;
&lt;button&gt;&lt;time datetime="2019-02-01"&gt;1&lt;/time&gt;&lt;/button&gt;
&lt;button&gt;&lt;time datetime="2019-02-02"&gt;2&lt;/time&gt;&lt;/button&gt;
&lt;button&gt;&lt;time datetime="2019-02-03"&gt;3&lt;/time&gt;&lt;/button&gt;
&lt;!-- ... --&gt;
&lt;button&gt;&lt;time datetime="2019-02-28"&gt;28&lt;/time&gt;&lt;/button&gt;
&lt;/div&gt;
</code></pre>
<p>I discourage this method because the HTML loses its structural meaning. I prefer keeping <code>.day-of-week</code> and <code>date-grid</code> as separate elements if possible. This makes it easy for me to read/understand the code I've written.</p>
<p>Here's the HTML structure i chose to go with:</p>
<pre><code class="language-html">&lt;div class="day-of-week"&gt;
&lt;div&gt;Su&lt;/div&gt;
&lt;div&gt;Mo&lt;/div&gt;
&lt;div&gt;Tu&lt;/div&gt;
&lt;div&gt;We&lt;/div&gt;
&lt;div&gt;Th&lt;/div&gt;
&lt;div&gt;Fr&lt;/div&gt;
&lt;div&gt;Sa&lt;/div&gt;
&lt;/div&gt;
&lt;div class="date-grid"&gt;
&lt;button&gt;&lt;time datetime="2019-02-01"&gt;1&lt;/time&gt;&lt;/button&gt;
&lt;button&gt;&lt;time datetime="2019-02-02"&gt;2&lt;/time&gt;&lt;/button&gt;
&lt;button&gt;&lt;time datetime="2019-02-03"&gt;3&lt;/time&gt;&lt;/button&gt;
&lt;!-- ... --&gt;
&lt;button&gt;&lt;time datetime="2019-02-28"&gt;28&lt;/time&gt;&lt;/button&gt;
&lt;/div&gt;
</code></pre>
<p>The best way to create a CSS Grid with the structure I proposed is to use subgrid. Unfortunately, most browsers don't support subgrid yet. In the meantime, the best way is to create two separate grids—one for <code>.day-of-week</code> and one for <code>.date-grid</code>.</p>
<p>Both <code>.day-of-week</code> and <code>.date-grid</code> can use the same seven-column grid.</p>
<pre><code class="language-css">/* The grid */
.day-of-week,
.date-grid {
display: grid;
grid-template-columns: repeat(7, 1fr);
}
</code></pre>
<figure><img src="https://zellwk.com/images/2019/calendar-css-grid/calendar-grid.png" alt="1 Feb 2019 begins on a Friday"></figure>
<h2 id="pushingthedates">Pushing the dates</h2>
<p>February 2019 begins on a Friday. If we want the calendar to be correct, we need to make sure:</p>
<ol>
<li>1 Feb 2019 falls on Friday</li>
<li>2 Feb 2019 falls on Saturday</li>
<li>3 Feb 2019 falls on Sunday</li>
<li>And so on...</li>
</ol>
<p>With CSS Grid, this part is easy.</p>
<p>CSS Grid has placement algorithm that kinda follows the following rules (if you didn't set <code>grid-auto-flow</code> to <code>dense</code>):</p>
<ol>
<li>Place items that has explicit <code>grid-column</code> or <code>grid-row</code> first</li>
<li>Fill in the rest according to the last-placed item</li>
</ol>
<p>What this means is:</p>
<ol>
<li>If the first item falls on column 6</li>
<li>The second item will be placed in column 7.</li>
<li>The third item will be placed on the next row, in column 1 (because there are only seven columns).</li>
<li>The fourth item will be placed in column 2,</li>
<li>And so on...</li>
</ol>
<p>So, if we position 1 February on the sixth column (friday), the rest of the dates will be placed correctly.</p>
<p>Simple as that!</p>
<pre><code class="language-css">/* Positioning the first day on a Friday */
.date-grid button:first-child {
grid-column: 6;
}
</code></pre>
<figure><img src="https://zellwk.com/images/2019/calendar-css-grid/calendar-fixed.png" alt="1 Feb 2019 begins on a Friday"></figure>
<p>Here's a codepen for you to play with:</p>
<p class="codepen" data-height="581" data-theme-id="7929" data-default-tab="result" data-user="zellwk" data-slug-hash="xNpKwp" style="height: 581px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Building a Calendar with CSS Grid">
<span>See the Pen <a href="https://codepen.io/zellwk/pen/xNpKwp/">
Building a Calendar with CSS Grid</a> by Zell Liew (<a href="https://codepen.io/zellwk">@zellwk</a>)
on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<h2 id="wanttolearnmore">Want to learn more?</h2>
<p>This article contains one fraction of a component (a datepicker) from Learn JavaScript. There's so much more I want to show you. (But they're mostly JavaScript related topics).</p>
<p>For example, in Learn JavaScript, I show you how to:</p>
<ol>
<li>Build a calendar for any month (and any year)</li>
<li>Add a previous/next button to switch between months</li>
<li>Click on each date to display a date</li>
</ol>
<p>Here's what it looks like:</p>
<figure><img src="https://zellwk.com/images/2019/calendar-css-grid/datepicker.gif" alt="Example of the datepicker in action"></figure>
<hr>
<p>Thanks for reading. This article was originally posted on <a href="https://zellwk.com/blog/calendar-with-css-grid">my blog</a>. Sign up for <a href="https://zellwk.com">my newsletter</a> if you want more articles to help you become a better frontend developer.</p>
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
