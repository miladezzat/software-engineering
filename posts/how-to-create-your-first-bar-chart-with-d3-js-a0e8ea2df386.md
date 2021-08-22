---
card: "https://cdn-media-1.freecodecamp.org/images/1*4gyftwYFlIenlKtILaiqbw.png"
tags: [Data Visualization]
description: "D3.js is the most popular JavaScript library for creating vis"
author: "Milad E. Fahmy"
title: "Learn to create a bar chart with D3 - A tutorial for beginners"
created: "2021-08-15T23:48:25+02:00"
modified: "2021-08-15T23:48:25+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-data-visualization tag-data-science tag-coding tag-javascript tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Learn to create a bar chart with D3 - A tutorial for beginners</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*4gyftwYFlIenlKtILaiqbw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*4gyftwYFlIenlKtILaiqbw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*4gyftwYFlIenlKtILaiqbw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*4gyftwYFlIenlKtILaiqbw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*4gyftwYFlIenlKtILaiqbw.png" alt="Learn to create a bar chart with D3 - A tutorial for beginners">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
&lt;head&gt;
&lt;link rel="stylesheet" href="index.css"&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;svg&gt;&lt;/svg&gt;
&lt;script src="https://d3js.org/d3.v4.min.js"&gt;&lt;/script&gt;
&lt;script&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><p>We’ll write our D3 code in the script tag. Secondly, we’ve added an <code>&lt;svg&gt;</code> element to the DOM. If you want to play around with the code as you read this tutorial, check out <a href="https://scrimba.com/c/cyKgGCL?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=gd3js_bar_chart_article">this Scrimba playground</a>, which contains the final version of the code.</p><p>The first thing we’re going to do is select this element, and style it a little bit.</p><pre><code class="language-js">var svgWidth = 500;
var svgHeight = 300;
var svg = d3.select('svg')
.attr("width", svgWidth)
.attr("height", svgHeight)
.attr("class", "bar-chart");
</code></pre><p>We’re giving it a width and height, plus a <code>.bar-chart</code> class. In our CSS, we’ve styled the class like this:</p><pre><code class="language-css">.bar-chart {
background-color: #C7D9D9;
}
var barPadding = 5;
var barWidth = (svgWidth / dataset.length);
var barChart = svg.selectAll("rect")
.data(dataset)
.enter()
.append("rect")
.attr("y", function(d) {
return svgHeight - d
})
.attr("height", function(d) {
return d;
})
.attr("width", barWidth - barPadding)
.attr("transform", function (d, i) {
var translate = [barWidth * i, 0];
return "translate("+ translate +")";
});
</code></pre><h4 id="selectall-">selectAll()</h4><p>The first thing we do might seem a bit weird, we’re doing <code>.selectAll("rect")</code>, however, we haven’t yet created any <code>&lt;rect&gt;</code> elements yet. So this method returns an empty selection (an empty array). However, we’re going to create <code>&lt;rect&gt;</code> elements soon using <code>enter().append()</code>.</p><p>This might seem a bit confusing. But explaining how <code>selectAll()</code> works in combination with <code>enter().append()</code> is outside of the scope of this tutorial. If you want to understand it properly, read <a href="http://knowledgestockpile.blogspot.no/2012/01/understanding-selectall-data-enter.html">this article</a> very carefully.</p><h4 id="data-">data()</h4><p>We then chain the <code>data()</code> method and pass in our dataset. The data will end up dictating the height of each bar.</p><h4 id="enter-">enter()</h4><p>The next step is to chain the <code>enter()</code> method. The <code>enter()</code> looks both at the dataset you passed into <code>data()</code> &nbsp;<strong>and</strong> at the selection we did with <code>selectAll('rect')</code>, and then it tries to look for “matches.” So it creates a mapping between your data and the DOM.</p><p>But remember, the <code>selectAll('rect')</code> method returned an <strong>empty</strong> selection, as there are no <code>&lt;rect&gt;</code> elements in the DOM yet. However, the dataset has nine items. So there are no “matches.”</p><p>The <code>enter()</code> method then allows you to create a new <code>&lt;rect&gt;</code> element in the DOM for each item in the dataset which doesn’t yet have a corresponding <code>&lt;rect&gt;</code> element.</p><h4 id="append-">append()</h4><p>On the next line, we append a <code>&lt;rect&gt;</code> element for each of the items. As this method follows after <code>enter()</code>, it will actually be executed nine times, one for each data point that lacks a corresponding <code>&lt;rect&gt;</code> in the DOM.</p><h4 id="attr-">attr()</h4><p>The next step is to decide the shape of each of the rectangles (our bars). We need to give it four attributes: <strong>height, width, x-position</strong> and <strong>y-position</strong>. We’ll use the <code>attr()</code> method for all of these.</p><p>Let’s start with the y-position:</p><pre><code class="language-js">.attr("y", function(d) {
return svgHeight - d
})
</code></pre><p>The first parameter dictates which attribute we want to add: in this case, the y-coordinate of the bar. In the second, we get access to a callback function in which we’re going to return the value we want our attribute to have.</p><p>Here, we get access to the data point at this step of the iteration process (remember, this method is invoked once per item in the <code>dataset</code> array). The data point is stored in the <code>d</code> argument. We’ll then subtract the given data point, <code>d</code>, from the height of our SVG container.</p><p>X and y-coordinates are always calculated starting from the top left corner. So when we subtract the height of the container with the <code>d</code> value, we get the y-coordinate for the top of the bar.</p><p>To make the bar stretch from this point and down to the bottom of the SVG container, we’ll need to give it a height equivalent to the value of the data point:</p><pre><code class="language-js">.attr("height", function(d) {
return d;
})
</code></pre><p>The next step is to give it a width:</p><p>.attr("width", barWidth - barPadding)</p><p>Here, we’re simply passing in a simple expression as opposed to the callback function, as we don’t need access to the data point. We’re simply taking a basis in the <code>barWidth</code> variable which we created further up, which is the total width of the container divided by the number of bars. In order to get a small gap between each of the bars, we’ll also subtract padding, which we’ve defined as 5.</p><p>The final step is to set the x-coordinates. This expression is a bit more complex:</p><pre><code class="language-js">.attr("transform", function (d, i) {
var xCoordinate = barWidth * i;
return "translate("+ xCoordinate +")";
});
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
