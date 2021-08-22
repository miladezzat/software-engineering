---
card: "/images/default.jpg"
tags: [CSS Grid]
description: "Today we re going to learn CSS Grid properties so that you ca"
author: "Milad E. Fahmy"
title: "Complete CSS Grid Tutorial with Cheat Sheet 🎖️"
created: "2021-08-16T10:03:39+02:00"
modified: "2021-08-16T10:03:39+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-css-grid tag-web-design tag-web-development tag-css ">
<header class="post-full-header">
<h1 class="post-full-title">Complete CSS Grid Tutorial with Cheat Sheet 🎖️</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/06/FCC.png 300w,
/news/content/images/size/w600/2021/06/FCC.png 600w,
/news/content/images/size/w1000/2021/06/FCC.png 1000w,
/news/content/images/size/w2000/2021/06/FCC.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/06/FCC.png" alt="Complete CSS Grid Tutorial with Cheat Sheet 🎖️">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<li><a href="#css-grid-architecture">CSS Grid Architecture</a></li>
<li><a href="#css-grid-chart">CSS Grid Chart</a></li>
<li><a href="#css-grid-parent-properties">Grid Parent Properties</a>
<ul>
<li><a href="#the-grid-template-columns-property">grid-template-columns</a></li>
<li><a href="#the-grid-template-rows-property">grid-template-rows</a></li>
<li><a href="#the-grid-template-areas-property">grid-template-areas</a></li>
<li><a href="#the-column-gap-property">How to create column and row gaps in Grid</a></li>
<li><a href="#the-justify-items-property">How to justify items and align items with Grid</a></li>
<li><a href="#the-justify-content-property">How to justify content and align-content with Grid</a></li>
</ul>
</li>
<li><a href="#css-grid-child-properties">Child Properties in CSS Grid</a>
<ul>
<li><a href="#the-grid-column-start-end-properties">grid-column : start/end</a></li>
<li><a href="#the-grid-row-start-end-properties">grid-row : start/end</a></li>
<li><a href="#the-grid-area-property">grid-area</a></li>
<li><a href="#the-justify-self-property">justify-self || align-self</a></li>
</ul>
</li>
<li><a href="#shorthand-for-css-grid-properties">Shorthand for Grid</a></li>
<li><a href="#conclusion">Conclusion</a></li>
</ul>
&lt;div class="box-1"&gt; A &lt;/div&gt;
&lt;div class="box-2"&gt; B &lt;/div&gt;
&lt;div class="box-3"&gt; C &lt;/div&gt;
&lt;/div&gt;
</code></pre><h2 id="css">CSS</h2><h3 id="step-1">Step 1</h3><p>Let's clear out our default browser styles. Follow me 👇</p><pre><code class="language-css">*{
margin: 0px;
padding: 0px;
box-sizing: border-box;
}
</code></pre><h3 id="step-2">Step 2</h3><p>Inside the body selector, do these adjustments:</p><pre><code class="language-css">body {
font-family: sans-serif;
font-size: 40px;
width: 100%;
min-height: 100vh;
}
</code></pre><h3 id="step-3">Step 3</h3><p>Now, let's style our boxes by selecting all of them together -&gt;</p><pre><code class="language-css">[class^="box-"] {
background-color: skyblue;
/* To place the letter at the center */
display: grid;
place-items: center;
}
</code></pre><p><strong>Note:</strong> Don't worry, we'll discuss those grid properties in detail later.</p><h3 id="step-4">Step 4</h3><p>Now, place some gaps between our boxes like this 👇</p><pre><code class="language-css">.container {
display: grid;
gap: 20px;
}
display: grid;
gap: 20px;
/*  Change the values     👇 to experiment */
grid-template-columns: 200px auto 100px;
}
display: grid;
gap: 20px;
height: 100vh;
/* Change the values  👇 to experiment */
grid-template-rows: 200px auto 100px;
}
display: grid;
gap: 20px;
height: 100vh;
grid-template-areas:
"A A A A   A A A A   A A A A"
"B B B B   B B B B   B B C C"
"B B B B   B B B B   B B C C";
}
</code></pre><h3 id="implement-the-blueprint">Implement the blueprint</h3><p>Target all our child <code>.box-*</code> classes and set the values like this -&gt;</p><pre><code class="language-css">.box-1{
grid-area: A;
}
.box-2{
grid-area: B;
}
.box-3{
grid-area: C;
}
display: grid;
height: 100vh;
grid-template-columns: 100px 100px 100px;
//Change values👇 to experiment
column-gap:  50px;
}
display: grid;
height: 100vh;
grid-template-rows: 100px 100px 100px;
// Change   👇  values to experiment
row-gap:  50px;
}
&lt;!--Other boxes - A, B, C are here--&gt;
&lt;div class="box-4"&gt; D &lt;/div&gt;
&lt;/div&gt;
</code></pre><p>and in the CSS -&gt;</p><pre><code class="language-css">.container {
display: grid;
gap: 50px;
height: 100vh;
// each box is 200px by 200px
grid-template-rows: 200px 200px;
grid-template-columns: 200px 200px;
//  Change values 👇  to experiment
justify-items : end;
}
display: grid;
gap: 50px;
height: 100vh;
// each box is 200px by 200px
grid-template-rows: 200px 200px;
grid-template-columns: 200px 200px;
//  Change values 👇  to experiment
align-items: center;
}
display: grid;
gap: 50px;
height: 100vh;
// each box is 200px by 200px
grid-template-rows: 200px 200px;
grid-template-columns: 200px 200px;
//  Change  values  👇  to experiment
justify-content: center;
}
display: grid;
gap: 50px;
height: 100vh;
// each box is 200px by 200px
grid-template-rows: 200px 200px;
grid-template-columns: 200px 200px;
//  Change  values 👇  to experiment
align-content : center;
}
&lt;div class="box-1"&gt; A &lt;/div&gt;
&lt;div class="box-2"&gt; B &lt;/div&gt;
&lt;div class="box-3"&gt; C &lt;/div&gt;
&lt;div class="box-4"&gt; D &lt;/div&gt;
&lt;/div&gt;
</code></pre><p>We're gonna utilize the <code>repeat()</code> function. It repeats our code a certain number of times. Here's an example 👇</p><pre><code class="language-css">grid-template-columns : repeat(5,1fr);
</code></pre><p>This ☝️ is the equivalent to writing this:👇</p><pre><code class="language-css">grid-template-columns : 1fr 1fr 1fr 1fr 1fr ;
</code></pre><p>This ☝️ code is dividing our screen width into 5 equal parts.</p><p>We're set, let's start!</p><h2 id="the-grid-column-start-end-properties">The grid-column: start/end properties</h2><p>You use these two properties to join multiple <strong>COLUMNS</strong> together. It is a shorthand of 2 properties:</p><ul><li><strong>grid-column-start</strong></li><li><strong>grid-column-end</strong></li></ul><p>Write this code in your CSS:</p><pre><code class="language-css">.container {
display: grid;
gap: 20px;
height: 100vh;
grid-template-columns: repeat(12, 1fr);
grid-template-rows: repeat(12, 1fr);
}
.box-2{}
.box-3{}
.box-4{}
grid-column-end : 2;
/* The shorthand -&gt; */
grid-column : 1 / 2
</code></pre><p>We can write this ☝️ in the span unit as well, like this 👇</p><pre><code class="language-css">grid-column : span 1;
</code></pre><p>Let's assign the empty 8 fractions to <code>.box-1</code> like this 👇</p><pre><code class="language-css">.box-1{
grid-column : 1/10
}
grid-column : span 9;
}
grid-row : 1/11;
}
</code></pre><p>The calculation looks like this -&gt; <code>.box-1</code> holds 1 box, and you add 9 more boxes, plus a mandatory 1 at the last position to indicate the end which gives you 9+1+1=11.</p><p>Here's the alternative 👇 using the span keyword:</p><pre><code class="language-css">.box-1{
grid-row : span 10;
}
display: grid;
gap: 20px;
height: 100vh;
grid-template-areas:
"A A A A   A A A A   A A A A"
"B B B B   B B B B   B B C C"
"B B B B   B B B B   B B C C";
}
grid-area: A;
}
.box-2{
grid-area: B;
}
.box-3{
grid-area: C;
}
display: grid;
gap :25px;
height: 100vh;
/* // each box has equal size */
grid-template-rows: 1fr 1fr;
grid-template-columns: 1fr 1fr;
}
</code></pre><p><strong>Remember!</strong> This only works on the child classes. So, target any <code>.box-*</code> class. I'll target the first box:</p><pre><code class="language-css">.box-1 {
/*  Change values 👇  to experiment */
justify-self : start;
}
display: grid;
gap :25px;
height: 100vh;
/* // each box has equal size */
grid-template-rows: 1fr 1fr;
grid-template-columns: 1fr 1fr;
}
</code></pre><p><strong>Remember!</strong> This only works on the child classes. So, target any <code>.box-*</code> class. I'll target the 1st box:</p><pre><code class="language-css">.box-1 {
/*  Change values 👇  to experiment */
align-self : start;
}
justify-content : end;
/* The shorthand */
place-content : center / end ;
justify-items : center;
/* The shorthand */
place-items : end / center ;
justify-self : end ;
/* The shorthand */
place-self : start / end ;
grid-template-columns : 200px 200px;
/* The shorthand */
grid-template : 100px 100px / 200px 200px;
column-gap : 30px ;
/* The shorthand */
gap : 20px  30px;
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
