---
card: "/images/default.jpg"
tags: [Data Visualization]
description: This article is a step-by-step guide that'll show you how to
author: "Milad E. Fahmy"
title: "How to Create a Diverging Bar Chart with a JavaScript Charting Library"
created: "2021-08-15T19:27:08+02:00"
modified: "2021-08-15T19:27:08+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-data-visualization tag-data-analysis tag-javascript tag-charts ">
<header class="post-full-header">
<h1 class="post-full-title">How to Create a Diverging Bar Chart with a JavaScript Charting Library</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/02/diverging-bar-chart-javascript-1500.png 300w,
/news/content/images/size/w600/2021/02/diverging-bar-chart-javascript-1500.png 600w,
/news/content/images/size/w1000/2021/02/diverging-bar-chart-javascript-1500.png 1000w,
/news/content/images/size/w2000/2021/02/diverging-bar-chart-javascript-1500.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/02/diverging-bar-chart-javascript-1500.png" alt="How to Create a Diverging Bar Chart with a JavaScript Charting Library">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>This article is a step-by-step guide that'll show you how to build an interactive JavaScript range chart that visualizes 20 years of the LA Lakers’ performance with Kobe Bryant.</p>
<p>The year 2020 was pretty poignant for obvious reasons. But even before the pandemic, the year started on a sad note with the death of basketball legend <a href="https://en.wikipedia.org/wiki/Kobe_Bryant">Kobe Bryant</a>. He was a star NBA athlete who had played for 20 years with one and only one team — the Los Angeles Lakers. </p>
<p>Remembering Kobe one year after that horrible crash, I wondered how the Lakers had performed in his two-decade era. So, I visualized that in an interactive Diverging Bar Chart with the help of pure JavaScript. </p>
<p>Thinking that this project might be helpful for those new to web charting, I also logged the entire process and made a tutorial. Check it out!</p>
<h2 id="what-is-a-diverging-bar-chart">What Is a Diverging Bar Chart?</h2>
<p>First things first, I will give you a brief explanation about what diverging bar charts are and then we'll dive into the tutorial. &nbsp;</p>
<p>A diverging bar chart shows two or more measures that are plotted from a middle baseline, extending either to the right and left (horizontal range bars) or top and bottom (vertical range columns). </p>
<p>The key point of data visualization in such diverging charts is to facilitate the comparison of multiple categories by means of displaying them against a bifurcating midpoint.</p>
<p>In this tutorial, I use the diverging bar chart technique to showcase the wins and losses of the LA Lakers through the 20 years of Kobe Bryant’s career.</p>
<p>Here's a sneak peek at the final chart to get you ready for the start of the game! Follow along with me to learn how I create this beautiful range bar chart with JavaScript.</p>
<h2 id="how-to-build-a-javascript-diverging-bar-chart-in-4-basic-steps">How to Build a JavaScript Diverging Bar Chart in 4 Basic Steps</h2>
<p>There are <a href="https://en.wikipedia.org/wiki/Comparison_of_JavaScript_charting_libraries">multiple</a> JavaScript libraries out there providing pre-written JS code for commonly needed functions that can make the interactive data visualization process quite quick and straightforward. </p>
<p>I picked one called <a href="https://www.anychart.com">AnyChart</a> to create this diverging bar chart. This JS charting library appeared to support (particularly useful in this case) range charts out of the box and was also flexible enough to do what I wanted. </p>
<p>Also, it is quite easy to get started with AnyChart even for beginners because there are many ready-to-use examples and it has intensive <a href="https://docs.anychart.com">documentation</a>.</p>
<p>Of course, having good HTML and JavaScript skills gives you an edge when visualizing data on the web. But anyway, the best part about making use of good charting libraries is that they make it quite uncomplicated to create interactive charts even without much experience.</p>
<p>The entire process of creating literally any JS chart, including a diverging bar chart like this one, can be broken down into four fundamental steps:</p>
<ol>
<li>Create an HTML page.</li>
<li>Reference the necessary JS files.</li>
<li>Set the data.</li>
<li>Write the JS code for the chart.</li>
</ol>
<p>Let's go through each step in detail now.</p>
<h3 id="1-create-a-basic-html-page">1. Create a basic HTML page</h3>
<p>The first thing we need to do is create a basic HTML page. Let’s give it a title and create an HTML block element to hold the chart. To identify this <code>&lt;div&gt;</code> later in the code, we should also give it an id attribute (let it be “container”).</p><pre><code class="language-html">&lt;html&gt;
&lt;head&gt;
&lt;title&gt;JavaScript Diverging Bar Chart&lt;/title&gt;
&lt;style type="text/css"&gt;
html, body, #container {
width: 100%; height: 100%; margin: 0; padding: 0;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="container"&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>Note that it is possible to specify the width and height parameters inside the <code>&lt;style&gt;</code> block to modify the space that your chart will occupy. I have put 100% in both parameters so the chart fills the whole page.</p>
<h3 id="2-include-the-necessary-javascript-files">2. Include the necessary JavaScript files</h3>
<p>Next, we need to add the charting library scripts that will help create the data visualization. Since we are working with the AnyChart library here, let’s include the corresponding files from its <a href="https://www.anychart.com/download/cdn/">CDN</a>. (Keep in mind that you can always download the scripts if you want.)</p>
<p>For the diverging bar chart, we need the <a href="https://docs.anychart.com/Quick_Start/Modules#base">base module script</a> which is to be added to the <code>&lt;head&gt;</code> section of the HTML page.</p><pre><code class="language-js">&lt;html&gt;
&lt;head&gt;
&lt;title&gt;JavaScript Diverging Bar Chart&lt;/title&gt;
&lt;script src="https://cdn.anychart.com/releases/8.9.0/js/anychart-base.min.js" type="text/javascript"&gt;&lt;/script&gt;
&lt;style type="text/css"&gt;
html,
body,
#container {
width: 100%;
height: 100%;
margin: 0;
padding: 0;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="container"&gt;&lt;/div&gt;
&lt;script&gt;
// All the code for the JS diverging bar chart will come here
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<h3 id="3-add-the-data">3. Add the data</h3>
<p>I wanted to visualize the number of wins and losses of the LA Lakers team across all seasons from 1996 to 2016. So, I got the data from the <a href="https://www.nba.com/lakers/history/seasonbyseason/">NBA website</a> and created an array with the year, wins, and losses.</p>
<p>Since the amount of data is not huge, we can add it just like that:</p><pre><code>var winlossData = [
[65, 17, "2015-16"],
[61, 21, "2014-15"],
[55, 27, "2013-14"],
[37, 45, "2012-13"],
[25, 41, "2011-12"],
[25, 57, "2010-11"],
[25, 57, "2009-10"],
[17, 65, "2008-09"],
[25, 57, "2007-08"],
[40, 42, "2006-07"],
[37, 45, "2005-06"],
[48, 34, "2004-05"],
[26, 56, "2003-04"],
[32, 50, "2002-03"],
[24, 58, "2001-02"],
[26, 56, "2000-01"],
[15, 67, "1999-00"],
[19, 31, "1998-99"],
[21, 61, "1997-98"],
[26, 56, "1996-97"]
];</code></pre>
<p>Now that the stage is set, let’s start playing around by adding the JavaScript code that will create the interactive Diverging Bar Chart!</p>
<h3 id="4-write-the-javascript-code-for-your-chart">4. Write the JavaScript code for your chart</h3>
<p>Before anything else, we need to add a function enclosing all the JS code, which makes sure that the entire code inside of it will only execute once the page is loaded.</p><pre><code class="language-js">&lt;script&gt;
anychart.onDocumentReady(function() {
// The place for the JS diverging bar chart code
});
&lt;/script&gt;</code></pre>
<p>In general, a JS diverging bar chart is pretty simple to create and I will walk you through each action. So get ready to wiggle, block, and shoot!</p>
<p>Firstly, we create a bar chart and enter the data, all inside the enclosing <code>anychart.onDocumentReady()</code> function.</p><pre><code class="language-js">// create a bar chart
var chart = anychart.bar();
// data
var winlossData = [
[65, 17, "2015-16"],
[61, 21, "2014-15"],
[55, 27, "2013-14"],
[37, 45, "2012-13"],
[25, 41, "2011-12"],
[25, 57, "2010-11"],
[25, 57, "2009-10"],
[17, 65, "2008-09"],
[25, 57, "2007-08"],
[40, 42, "2006-07"],
[37, 45, "2005-06"],
[48, 34, "2004-05"],
[26, 56, "2003-04"],
[32, 50, "2002-03"],
[24, 58, "2001-02"],
[26, 56, "2000-01"],
[15, 67, "1999-00"],
[19, 31, "1998-99"],
[21, 61, "1997-98"],
[26, 56, "1996-97"]
];</code></pre>
<p>Next, we create a function that accepts two parameters — a column number and a name. The column number indicates the column in the dataset and the name indicates the series. In our case, we have two series — one for the number of wins and one for the number of losses. </p>
<p>Since we want a diverging bar chart, let’s take the center and plot the bars for wins to the right and bars for losses to the left. Then, we should prepare the dataset by adding all the required values through a 'for' loop.</p>
<p>Don’t worry if this sounds a bit complicated. It is just about making our data ready to be plotted, and when you look into the code below, you’ll likely see that it's all completely logical.</p>
<p>There are two more things we need to include in the function. We define a series with the rangeBar function and add a line to indicate the names of the series and a separator line between the left and right bars.</p><pre><code class="language-js">var createSeries = function (columnNumber, name) {
var data = [];
for (var i = 0; i &lt; winlossData.length; i++) {
var value = winlossData[i][columnNumber];
var center = 0;
if (name === "Wins") {
data.push({
x: winlossData[i][2],
low: center,
high: center + value,
value: value
});
} else {
data.push({
x: winlossData[i][2],
low: -center,
high: -center - value,
value: value
});
}
}
var series = chart.rangeBar(data);
series.name(name);
};
</code></pre>
<p>Now, we create the two series with the desired arguments using the function just defined.</p><pre><code class="language-js">createSeries(0, "Losses");
createSeries(1, "Wins");</code></pre>
<p>It’s halftime and the most complicated parts are over! Now we just have the setup of the chart.</p>
<p>Add the title to the diverging bar chart:</p><pre><code class="language-js">chart
.title()
.enabled(true)
.text("20 Years of LA Lakers Win-Loss Record with Kobe Bryant (1996-2016)");</code></pre>
<p>And enable the chart’s legend:</p><pre><code class="language-js">chart
.legend()
.enabled(true);</code></pre>
<p>To make the wins and losses for each year show up adjacent to each other, we should convert the multi-series bar chart into a stacked bar chart. Next, to emphasize divergence, let’s add a line marker at 0. Finally, we assign the container div and draw the chart:</p><pre><code class="language-js">// create a stacked bar chart from the multi-series bar chart
chart.yScale().stackMode("value");
// set a container id for the chart
chart.container("container");
// initiate chart drawing
chart.draw();
</code></pre>
<p>That’s the whistle and there you have it — a very basic, yet fully functional interactive diverging bar chart built with JavaScript!</p>
<p>Although Kobe may have been spectacular in the final games of his career in the NBA, we can see that the Lakers struggled during his last few years with more losses than wins. But the overall record is definitely many more triumphs than losses.</p>
<p><strong>Take a look at this initial version of the diverging bar chart with the full JS/CSS/HTML code <a href="https://codepen.io/shacheeswadia/pen/jOVrqLQ">on CodePen</a>.</strong></p><pre><code class="language-js">&lt;html&gt;
&lt;head&gt;
&lt;title&gt;JavaScript Diverging Bar Chart&lt;/title&gt;
&lt;script src="https://cdn.anychart.com/releases/8.9.0/js/anychart-base.min.js" type="text/javascript"&gt;&lt;/script&gt;
&lt;style type="text/css"&gt;
html,
body,
#container {
width: 100%;
height: 100%;
margin: 0;
padding: 0;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="container"&gt;&lt;/div&gt;
&lt;script&gt;
anychart.onDocumentReady(function () {
// create a bar chart
var chart = anychart.bar();
// data
var winlossData = [
[65, 17, "2015-16"],
[61, 21, "2014-15"],
[55, 27, "2013-14"],
[37, 45, "2012-13"],
[25, 41, "2011-12"],
[25, 57, "2010-11"],
[25, 57, "2009-10"],
[17, 65, "2008-09"],
[25, 57, "2007-08"],
[40, 42, "2006-07"],
[37, 45, "2005-06"],
[48, 34, "2004-05"],
[26, 56, "2003-04"],
[32, 50, "2002-03"],
[24, 58, "2001-02"],
[26, 56, "2000-01"],
[15, 67, "1999-00"],
[19, 31, "1998-99"],
[21, 61, "1997-98"],
[26, 56, "1996-97"]
];
// configure a function to create series
var createSeries = function (columnNumber, name) {
var data = [];
for (var i = 0; i &lt; winlossData.length; i++) {
var value = winlossData[i][columnNumber];
var center = 0;
if (name === "Wins") {
data.push({
x: winlossData[i][2],
low: center,
high: center + value,
value: value
});
} else {
data.push({
x: winlossData[i][2],
low: -center,
high: -center - value,
value: value
});
}
}
var series = chart.rangeBar(data);
series.name(name);
};
// create series
createSeries(0, "Losses");
createSeries(1, "Wins");
// set the chart title
chart
.title()
.enabled(true)
.text("20 Years of LA Lakers Win-Loss Record with Kobe Bryant (1996-2016)");
// enable the chart legend
chart
.legend()
.enabled(true);
// create a stacked bar chart from the multi-series bar chart
chart.yScale().stackMode("value");
// set a container id for the chart
chart.container("container");
// initiate chart drawing
chart.draw();
});
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<h2 id="how-to-customize-our-javascript-diverging-bar-chart">How to Customize Our JavaScript Diverging Bar Chart</h2>
<p>A slam dunk thing about interactive data visualization with JavaScript is the freedom we have to customize it so that our data tells better stories. I will show you how to push some quick changes to the basic JS-based diverging bar chart to make it more engaging and informative.</p>
<p>Now I'll throw a 3-pointer and customize the chart to improve some of its functionalities and aesthetics.</p>
<h3 id="1-basic-styling-and-axes-settings">1. Basic styling and axes settings</h3>
<p>To start with, let’s change some basic styling and settings for the X and Y axes to make things more readable. </p>
<p>Just remember that in AnyChart, a <a href="https://docs.anychart.com/Basic_Charts/Range_Bar_Chart">range bar chart</a> is the vertical version of a <a href="https://docs.anychart.com/Basic_Charts/Range_Column_Chart">range column chart</a>. Consequently, in our diverging bar chart, the horizontal axis is the Y-axis, and the vertical axis is called the X-axis.</p>
<p>So, let’s get rid of ticks, configure the axis title, and customize the labels on the vertical axis. We'll also set 80 as the maximum and remove the minus sign from the labels on the horizontal axis:</p><pre><code class="language-js">chart
.xAxis()
.ticks(false);
chart
.xAxis()
.title()
.enabled(true)
.text("Years")
.padding([0, 0, 10, 0]);
chart
.xAxis()
.labels()
.fontSize(11)
.fontColor("#474747")
.padding([0, 10, 0, 0]);
chart.yScale().maximum(80);
chart
.yAxis(0)
.labels()
.format(function () {
return Math.abs(this.value);
});
</code></pre>
<p>Next, to emphasize divergence, it would be great to add a white stroke between the two series and a line marker at 0.</p><pre><code class="language-js">// add the stroke by setting it in this line
series.name(name).stroke("3 #fff 1");
...
// create a line marker at 0
chart
.lineMarker()
.value(0)
.stroke("#CECECE");
</code></pre>
<p>Ah, doesn’t the chart look more polished and easier to read now?</p>
<p><strong>Check out the code for this version of the diverging bar chart <a href="https://codepen.io/shacheeswadia/pen/zYoEMEd">on CodePen</a>.</strong></p>
<p>Before we make more customizations, there is one small digression I want to make. I also thought of making the horizontal axis display the wins and losses for every season in percentages rather than absolute values. It’s pretty easy but the result did not offer any extra insights. </p>
<p>Also, the absolute values do represent when the Lakers played more or fewer games through the year. That’s ultimately why I decided to keep the absolute values. But you are welcome to check out the version with percentages <a href="https://codepen.io/shacheeswadia/pen/jOVrqKd">on CodePen</a>. </p>
<p>Well, let's move on from that missed shot and back into focus mode.</p>
<h3 id="2-tooltip-customization">2. Tooltip customization</h3>
<p>Next, I customized the tooltip to make it more informative and interesting.</p>
<p>Here, I also got the idea of showcasing the previously calculated percentage values (see the example from the digression just above) as an extra bit of information in the tooltip of our diverging bar chart.</p>
<p>So, the first step is to implement the calculation of percentage values:</p><pre><code class="language-js">// calculate percentages for the tooltip
var val = winlossData[i][columnNumber] * 100;
if (columnNumber == 0) {
var percentValue =
val / (winlossData[i][columnNumber] + winlossData[i][columnNumber + 1]);
} else {
var percentValue =
val / (winlossData[i][columnNumber] + winlossData[i][columnNumber - 1]);
}
percentValue = percentValue.toFixed(2);
</code></pre>
<p>The percentage calculation goes as part of the series configuration function — look at how it is included there:</p><pre><code class="language-js">// configure a function to create series
var createSeries = function (columnNumber, name) {
var data = [];
for (var i = 0; i &lt; winlossData.length; i++) {
// calculate percentages for the tooltip
var val = winlossData[i][columnNumber] * 100;
if (columnNumber == 0) {
var percentValue =
val / (winlossData[i][columnNumber] + winlossData[i][columnNumber + 1]);
} else {
var percentValue =
val / (winlossData[i][columnNumber] + winlossData[i][columnNumber - 1]);
}
percentValue = percentValue.toFixed(2);
var value = winlossData[i][columnNumber];
var center = 0;
if (name === "Wins") {
data.push({
x: winlossData[i][2],
low: center,
high: center + value,
value: value,
// add the calculated percentage value
percentValue: percentValue
});
} else {
data.push({
x: winlossData[i][2],
low: -center,
high: -center - value,
value: value,
// add the calculated percentage value
percentValue: percentValue
});
}
}
</code></pre>
<p>Then we have additional tooltip formatting to make it all look neat and beautiful:</p><pre><code class="language-js">// customize the tooltip
chart
.tooltip()
.useHtml(true)
.fontSize(12)
.titleFormat(function () {
return this.getData("x") + " " + this.seriesName;
})
.format(function () {
return (
"&lt;h6 style='font-size:12px; font-weight:400; margin: 0.25rem 0;'&gt;Total games: " +
"&lt;b&gt;" +
this.getData("value") +
"&lt;/b&gt;&lt;/h6&gt;" +
"&lt;h6 style='font-size:12px; font-weight:400; margin: 0.25rem 0;'&gt;Percentage games: " +
"&lt;b&gt;" +
this.getData("percentValue") +
" %&lt;/b&gt;&lt;/h6&gt;"
);
});
</code></pre>
<h3 id="3-color-palette-change">3. Color palette change</h3>
<p>Well, this last customization is definitely a dagger — the shot that is going to make the chart look completely awesome and win the game! It is simply changing the color palette to match the LA Lakers' jersey colors. So simple:</p><pre><code class="language-js">chart.palette(
anychart.palettes.distinctColors().items(["#FDB827", "#542583"])
);</code></pre>
<p>You see, at the very last second, I also turned off the selection mode by adding the corresponding command to this line:</p><pre><code class="language-js">series.name(name).stroke("3 #fff 1").selectionMode("none");</code></pre>
<p><strong>Okay! This final interactive JavaScript diverging range bar chart is available <a href="https://codepen.io/shacheeswadia/pen/NWbrpYj">on CodePen</a>.</strong></p>
<p>Just in case, the full code for the HTML page is right here:</p><pre><code class="language-js">&lt;html&gt;
&lt;head&gt;
&lt;title&gt;JavaScript Diverging Bar Chart&lt;/title&gt;
&lt;script src="https://cdn.anychart.com/releases/8.9.0/js/anychart-base.min.js" type="text/javascript"&gt;&lt;/script&gt;
&lt;style type="text/css"&gt;
html,
body,
#container {
width: 100%;
height: 100%;
margin: 0;
padding: 0;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="container"&gt;&lt;/div&gt;
&lt;script&gt;
anychart.onDocumentReady(function () {
// create a bar chart
var chart = anychart.bar();
// data
var winlossData = [
[65, 17, "2015-16"],
[61, 21, "2014-15"],
[55, 27, "2013-14"],
[37, 45, "2012-13"],
[25, 41, "2011-12"],
[25, 57, "2010-11"],
[25, 57, "2009-10"],
[17, 65, "2008-09"],
[25, 57, "2007-08"],
[40, 42, "2006-07"],
[37, 45, "2005-06"],
[48, 34, "2004-05"],
[26, 56, "2003-04"],
[32, 50, "2002-03"],
[24, 58, "2001-02"],
[26, 56, "2000-01"],
[15, 67, "1999-00"],
[19, 31, "1998-99"],
[21, 61, "1997-98"],
[26, 56, "1996-97"]
];
// configure a function to create series
var createSeries = function (columnNumber, name) {
var data = [];
for (var i = 0; i &lt; winlossData.length; i++) {
// calculate percentages for the tooltip
var val = winlossData[i][columnNumber] * 100;
if (columnNumber == 0) {
var percentValue =
val / (winlossData[i][columnNumber] + winlossData[i][columnNumber + 1]);
} else {
var percentValue =
val / (winlossData[i][columnNumber] + winlossData[i][columnNumber - 1]);
}
percentValue = percentValue.toFixed(2);
var value = winlossData[i][columnNumber];
var center = 0;
if (name === "Wins") {
data.push({
x: winlossData[i][2],
low: center,
high: center + value,
value: value,
// add the calculated percentage value
percentValue: percentValue
});
} else {
data.push({
x: winlossData[i][2],
low: -center,
high: -center - value,
value: value,
// add the calculated percentage value
percentValue: percentValue
});
}
}
var series = chart.rangeBar(data);
series.name(name).stroke("3 #fff 1").selectionMode("none");
};
// create series
createSeries(0, "Losses");
createSeries(1, "Wins");
// set the chart title
chart
.title()
.enabled(true)
.text("20 Years of LA Lakers Win-Loss Record with Kobe Bryant (1996-2016)");
// enable the chart legend
chart
.legend()
.enabled(true);
// create a stacked bar chart from the multi-series bar chart
chart.yScale().stackMode("value");
// customize the settings of the axes
chart
.xAxis()
.ticks(false);
chart
.xAxis()
.title()
.enabled(true)
.text("Years")
.padding([0, 0, 10, 0]);
chart
.xAxis()
.labels()
.fontSize(11)
.fontColor("#474747")
.padding([0, 10, 0, 0]);
chart.yScale().maximum(80);
chart
.yAxis(0)
.labels()
.format(function () {
return Math.abs(this.value);
});
// create a line marker at 0
chart
.lineMarker()
.value(0)
.stroke("#CECECE");
// customize the tooltip
chart
.tooltip()
.useHtml(true)
.fontSize(12)
.titleFormat(function () {
return this.getData("x") + " " + this.seriesName;
})
.format(function () {
return (
"&lt;h6 style='font-size:12px; font-weight:400; margin: 0.25rem 0;'&gt;Total games: " +
"&lt;b&gt;" +
this.getData("value") +
"&lt;/b&gt;&lt;/h6&gt;" +
"&lt;h6 style='font-size:12px; font-weight:400; margin: 0.25rem 0;'&gt;Percentage games: " +
"&lt;b&gt;" +
this.getData("percentValue") +
" %&lt;/b&gt;&lt;/h6&gt;"
);
});
// set a custom color palette
chart.palette(
anychart.palettes.distinctColors().items(["#FDB827", "#542583"])
);
// set a container id for the chart
chart.container("container");
// initiate chart drawing
chart.draw();
});
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<h2 id="conclusion">Conclusion</h2>
<p>In this tutorial, I have shown you how fast and easy it is to get a diverging bar chart up and running using JavaScript. We've also seen how a little bit of effort makes the graphic look really cool and lets you get more out of the underlying data. Please let me know if you have any questions.</p>
<p>If you are feeling motivated to work more with interactive JS-based data visualization, go ahead and play around with the diverging bar charts on CodePen (I added links throughout the tutorial), check out <a href="https://www.anychart.com/chartopedia/">other chart options</a>, or try <a href="https://en.wikipedia.org/wiki/Comparison_of_JavaScript_charting_libraries">other JavaScript libraries</a>.</p>
<p>Also, as we fondly look back at the statistics of the basketball legend’s team here, remember to do more sports and create more visualizations!</p>
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
