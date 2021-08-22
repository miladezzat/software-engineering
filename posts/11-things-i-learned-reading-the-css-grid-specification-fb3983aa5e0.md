---
card: "https://cdn-media-1.freecodecamp.org/images/1*_bY8jlwMIB_Mr1XJ_aJ9Ug.png"
tags: [Web Development]
description: "June 11, 2017, I decided to read the CSS Grid spec."
author: "Milad E. Fahmy"
title: "11 Things I Learned Reading the CSS Grid Specification"
created: "2021-08-16T11:48:07+02:00"
modified: "2021-08-16T11:48:07+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-web-development tag-technology tag-programming tag-css-grid tag-grid-layout ">
<header class="post-full-header">
<h1 class="post-full-title">11 Things I Learned Reading the CSS Grid Specification</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*_bY8jlwMIB_Mr1XJ_aJ9Ug.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*_bY8jlwMIB_Mr1XJ_aJ9Ug.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*_bY8jlwMIB_Mr1XJ_aJ9Ug.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*_bY8jlwMIB_Mr1XJ_aJ9Ug.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*_bY8jlwMIB_Mr1XJ_aJ9Ug.png" alt="11 Things I Learned Reading the CSS Grid Specification">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
grid-template-columns: 1fr</code></pre><p>And finally, you are likely to place the grid items with whatever technique suits you.</p><p>Since there are lots of ways to place grid items, I’ll skip the required code for brevity.</p><p>So, here’s the problem.</p><p>Under the hood, you must assume that the size of the grid rows and columns are first computed before the items are placed. Right?</p><p>Well, it appears that the truth is the complete opposite.</p><p>How weird.</p><p>The following is from the spec:</p><blockquote><em>2.3. Sizing the Grid</em><br><br><strong><em>Once the grid items have been placed</em></strong><em>, the sizes of the grid tracks (rows and columns) are calculated, accounting for the sizes of their contents and/or available space as specified in the grid definition.</em></blockquote><p>Note the progression.</p><ol><li>The grid items are placed.</li><li>The sizes of the grid tracks are calculated</li></ol><p>You’re likely to have questions around this. So, I’ll try to resolve those concerns of yours.</p><p>Firstly, note that every grid item is assigned a <code>grid-area</code> . The grid items are then sized within this area. So, how exactly are the grid items placed without already calculating the size of the tracks?</p><p>If you take a look at the <a href="https://www.w3.org/TR/css-grid-1/#placement" rel="noopener">Placing Grid items</a> section of the spec, you’ll find a clue.</p><p>A lot is taken into consideration when sizing grids, and that largely includes the size of the grid items.</p><p>Sizing grids may be based on the following:</p><ul><li>A fixed sizing function (<code><a href="https://www.w3.org/TR/css3-values/#length-value" rel="noopener">length</a></code> or resolveable <code><a href="https://www.w3.org/TR/css3-values/#percentage-value" rel="noopener">percentage</a></code>).</li><li>An intrinsic sizing function (<code><a href="https://www.w3.org/TR/css-grid-1/#valdef-grid-template-columns-min-content">min-content</a></code>, <code><a href="https://www.w3.org/TR/css-grid-1/#valdef-grid-template-columns-max-content" rel="noopener">max-content</a></code>, <code><a href="https://www.w3.org/TR/css-grid-1/#valdef-grid-template-columns-auto" rel="noopener">auto</a></code>, <code><a href="https://www.w3.org/TR/css-grid-1/#valdef-grid-template-columns-fit-content" rel="noopener">fit-content()</a></code>), or</li><li>A flexible sizing function (<code><a href="https://www.w3.org/TR/css-grid-1/#typedef-flex" rel="noopener">flex</a></code>).</li></ul><p>What I believe happens under the hood is, the grid items are placed.</p><p>That is, the containing block for the item is determined, the sizing function for the item is then determined. This in turn influences the size of the grid tracks.</p><p>You see?</p><p>Not what you initially thought.</p><h3 id="4-by-default-grid-items-are-stretched-to-fit-their-grid-area-except-in-certain-cases">4. By default, grid items are stretched to fit their grid area — except in certain cases</h3><p>Without your intervention, grid items will always stretch to fit their grid area.</p><p>So, if you had a declaration like so:</p><pre><code class="language-css">grid-template-areas: 'header header header'
'sidebar main  main'
'sidebar footer footer'</code></pre><p>And you had <code>divs</code> assigned to the specific grid areas, like so:</p><pre><code class="language-css">.div1 {
grid-area: header
}
.div2 {
grid-area: sidebar
}
.div3 {
grid-area: main
}
.div4 {
grid-area: footer
</figure><p>As pointed out by <a href="undefined" rel="noopener">Rachel Andrew</a>, the <a href="https://www.w3.org/TR/css-grid-1/#grid-item-sizing" rel="noopener">spec</a> goes on to say this behavior is different for grid items with an <code>intrinsic aspect ratio</code>.</p><p>Don’t let the big words scare you. It ain’t no demogorgon.</p><p>An image is by default an <code>inline-block</code> element, but they also have specific dimensions. They have dimensions naturally associated with them. An image could be <code>400px</code> by <code>600px</code> wide, or any given dimensions at all.</p><p>But, regular block elements such as <code>divs</code> , have no intrinsic dimensions. That is, they do not have dimensions that naturally belong to them.</p><p>So, while grid items with NO intrinsic dimensions will stretch to fit their grid area, this is not true for grid items having an intrinsic dimension e.g images.</p><h3 id="5-do-you-really-know-what-a-grid-item-is">5. Do you really know what a Grid Item is?</h3><p>Consider the code block below:</p><pre><code class="language-html">&lt;div style="display: grid"&gt;
&lt;div&gt;block&lt;/div&gt;
&lt;div&gt;float&lt;/div&gt;
I am a random Text
&lt;span&gt;
item 4
&lt;/span&gt;
&lt;div&gt;block&lt;/div&gt;
&lt;div&gt;float&lt;/div&gt;
&lt;!-- the text below is a grid item --&gt;
I am a random Text
&lt;span&gt;
item 4
&lt;/span&gt;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}</code></pre><p>What’s the difference?</p><p><code>auto-fill</code> will create tracks even if there's no grid item to fill it up. <code>auto-fit</code> will not do this. It will deflate empty tracks to zero.</p><p>That's all.</p><h3 id="8-in-the-grid-template-areas-definition-the-number-of-words-in-a-string-must-be-equal-">8. In the grid-template-areas definition, the number of words in a string MUST be equal.</h3><p>You remember the weird looking <code>grid-template-areas</code> values that look like a map?</p><p>Well, it appears it can mess things up real quick.</p><p>In a <code>grid-template-areas</code> declaration, all strings must have the same number of columns, or else the declaration is invalid.</p><p>For example:</p><pre><code class="language-css">/* this is valid */
grid-template-areas: "header header header sidebar"
"main   main   main   sidebar"
"main   main   main   sidebar"
/* this is WRONG */
grid-template-areas: "header header header sidebar"
"main   main   main   sidebar"
"main   main   main   sidebar"
"main   main   main   sidebar"</code></pre><p>In the code block above, you have 4 columns and 3 rows.</p><p>What if you also did this:</p><pre><code class="language-css">grid-template-columns: repeat(5, 1fr)
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
