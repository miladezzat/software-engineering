---
card: "https://cdn-media-1.freecodecamp.org/images/1*l5jZdAa3_ZeDSoxHzmIagw.png"
tags: [JavaScript]
description: "by Sohaib Nehal"
author: "Milad E. Fahmy"
title: "Learn D3.js in 5 minutes"
created: "2021-08-16T10:14:44+02:00"
modified: "2021-08-16T10:14:44+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development tag-web-design tag-front-end-development tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Learn D3.js in 5 minutes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*l5jZdAa3_ZeDSoxHzmIagw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*l5jZdAa3_ZeDSoxHzmIagw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*l5jZdAa3_ZeDSoxHzmIagw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*l5jZdAa3_ZeDSoxHzmIagw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*l5jZdAa3_ZeDSoxHzmIagw.png" alt="Learn D3.js in 5 minutes">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
&lt;head&gt;
&lt;title&gt;Learn D3 in 5 minutes&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h3&gt;Today is a beautiful day!!&lt;/h3&gt;
&lt;script src='https://d3js.org/d3.v4.min.js'&gt;&lt;/script&gt;
&lt;script&gt;
d3.select('h3').style('color', 'darkblue');
d3.select('h3').style('font-size', '24px');
&lt;/script&gt;
&lt;/body&gt;
var fruits = ['apple', 'mango', 'banana', 'orange'];
d3.select('ul')
.selectAll('li')
.data(fruits)
.enter()
.append('li')
.text(function(d) { return d; });
var svg = d3.select('svg');
//Create rectangle element inside SVG
svg.append('rect')
.attr('x', 50)
.attr('y', 50)
.attr('width', 200)
.attr('height', 100)
var barHeight = 20;
var bar = d3.select('svg')
.selectAll('rect')
.data(data)
.enter()
.append('rect')
.attr('width', function(d) {  return d; })
.attr('height', barHeight - 1)
.attr('transform', function(d, i) {
return "translate(0," + i * barHeight + ")";
.on('click', function () {
d3.select('body')
.append('h3')
.text('Today is a beautiful day!!');
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
