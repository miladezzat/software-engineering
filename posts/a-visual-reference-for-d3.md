---
card: "/images/default.jpg"
tags: [JavaScript]
description: I’ve been using D3 quite a bit recently to build an analytics
author: "Milad E. Fahmy"
title: "A Visual Reference For D3"
created: "2021-08-15T19:33:30+02:00"
modified: "2021-08-15T19:33:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-d3 tag-data-visualization ">
<header class="post-full-header">
<h1 class="post-full-title">A Visual Reference For D3</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/06/D3-article-image.jpg 300w,
/news/content/images/size/w600/2019/06/D3-article-image.jpg 600w,
/news/content/images/size/w1000/2019/06/D3-article-image.jpg 1000w,
/news/content/images/size/w2000/2019/06/D3-article-image.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/06/D3-article-image.jpg" alt="A Visual Reference For D3">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I’ve been using D3 quite a bit recently to build an analytics dashboard. The main reason I went with D3 was because I got tired of dealing with the limitations of the various charting libraries and trying to understand their documentation.</p>
<p>I found myself in a situation where I was spending more time trying to figure out whether the library I was using could do what I wanted rather than actually trying to figure out how to do what I wanted.</p>
<p>With D3, there is almost never a case of whether you can do something. It’s always about how you can do something.</p>
<p>Granted, getting to grips with D3’s API is a mammoth challenge but it’s worth the hassle.</p>
<p>In this article, I’m going to try to give you a visual representation of my understanding of D3 after working with it for a while now.</p>
<figcaption>Main Ideas Behind&nbsp;D3</figcaption>
</figure>
<h3 id="the-ups-and-downs-of-d3">The Ups And Downs Of D3</h3>
<p>The thing I love about D3 is that its built on top of the smallest primitives, and you have access to all of those primitives.</p>
<p>If you were to use a typical charting library for React, you’d probably do something like this</p><pre><code class="language-javascript">import { BarChart } from 'generic-charting-library'
export default class Chart() {
render() {
return (
&lt;BarChart data={data} /
)
}
}</code></pre>
<p>The above is perfectly fine for most use cases. However, the moment you want to do anything slightly more complicated like interacting with the bar chart in unique ways (think beyond just displaying a tool tip), my personal experience has been that it turns into a war with the documentation of the library.</p>
<p>First, you have to figure out if it is even possible to do this with the library, and then you have to figure out how to do it.</p>
<p>The first part, in my experience, is the hard bit. It is quite frustrating to look for something that you’re not sure exists. However, with D3, that isn’t the case. Pretty much anything you want to do can be done with D3. It is simply a matter of figuring out how to do it.</p>
<p>The downside of course is that D3’s API and documentation is so vast and expansive, that you end up having disparate pieces of knowledge of how things work. This is also a consequence of how I chose to learn D3, that is by building something with it. When you choose to build something with a technology, you only look up the pieces relevant to what you’re currently building.</p>
<p>Say, for instance, you wanted to build a bar chart. Well, you’re probably to going look up something like how to define and place axes on a web page. Then, you’ll probably look up how to define the actual bars of the chart themselves. These are well defined problems and have straightforward solutions.</p>
<p>I took pretty much the same route and ended up in a frustrating place where I could get things to work but I couldn’t quite understand how it was all coming together.</p>
<p>I’m going to explain my thought process of how I put together all the different pieces.</p>
<h3 id="the-big-picture">The Big Picture</h3>
<p>The following image is that of a simplistic bar chart (something we’ll try to recreate for this post)</p>
<figcaption>Typical Bar&nbsp;Chart</figcaption>
</figure>
<p>Now, here’s the same bar chart with the different components being marked out. By components, I mean the different things we will need to worry about when creating the bar chart using D3.</p>
<figcaption>Labelled Bar&nbsp;Chart</figcaption>
</figure>
<ol>
<li>The X-axis</li>
<li>The Y-axis</li>
<li>The title</li>
<li>The bars (I’m counting all of them as one)</li>
<li>The spacing between the ticks on the X axis</li>
<li>The actual chart area itself</li>
<li>The spacing between the ticks on the Y axis</li>
</ol>
<p>We’ll explore everything except the spacing between ticks in detail. The spacing between ticks will take care of itself when figure out how to construct the axes.</p>
<h3 id="the-small-things-that-make-up-the-big-picture">The Small Things That Make Up The Big Picture</h3>
<p>Before we can even start with composing the small pieces that make up the big picture, we need to understand the one element that is a part of every component in the chart above: the SVG element.</p>
<h3 id="the-svg-element">The SVG Element</h3>
<p>A D3 chart is primarily composed of SVG elements. In the bar chart above, the x-axis, the y-axis, each individual bar are all instances of SVG elements.</p>
<p>I recommend reading <a href="https://developer.mozilla.org/en-US/docs/Web/SVG" rel="nofollow noopener">this page</a> to get a better understanding of what an SVG is. SVG’s are essentially how you describe 2D graphics on a web page.</p>
<p>The most basic example of an SVG element is the circle element.</p>
<p>See the Pen <a href="https://codepen.io/redixhumayun/pen/qGMxzO/"> &nbsp;qGMxzO</a> by Zaid Humayun (<a href="https://codepen.io/redixhumayun">@redixhumayun</a>) &nbsp; on <a href="https://codepen.io">CodePen</a>.</p>
<p>Take a look at the codepen above and you should see the definition for the circle SVG inside the HTML file.</p>
<p>I’d advise going through the SVG documentation on MDN (linked above), and familiarizing yourself with it. D3 makes extensive use of SVG’s.</p>
<h4 id="the-g-in-svg">The G in SVG</h4>
<p>There is a specific kind of SVG element called a G element. Similar to the way we defined the circle element above, we define this with</p><pre><code>&lt;svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"&gt;
&lt;!-- Using g to inherit presentation attributes --&gt;
&lt;g fill="white" stroke="green" stroke-width="5"&gt;
&lt;circle cx="40" cy="40" r="25" /&gt;
&lt;circle cx="60" cy="60" r="25" /&gt; &lt;/g&gt;
&lt;/svg&gt;</code></pre>
<p>Think of a <code>g</code> element as similar to a <code>div</code> element that is used as a container in HTML. They are both used to group certain elements.</p>
<p>Read the MDN documentation for <code>g</code> <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g" rel="nofollow noopener">here</a></p>
<p>If you want to understand why people make use of the <code>g</code> element, read <a href="http://tutorials.jenkov.com/svg/g-element.html" rel="nofollow noopener">this</a></p>
<h3 id="the-data-we-need">The Data We Need</h3>
<p>Before we continue any further, let’s quickly create the data we’ll be using. Here is a sample JSON file we can use to create a bar chart.</p><pre><code>[
{
"key": "A",
"value": 20
},
{
"key": "B",
"value": 40
},
{
"key": "C",
"value": 80
},
{
"key": "D",
"value": 55
},
{
"key": "E",
"value": 70
}
]</code></pre>
<h3 id="the-chart-area">The Chart Area</h3>
<p>Let’s start off with creating a simple chart area first. The way to create a chart area is to set up a basic SVG element and then assign a viewBox attribute to it.</p>
<p>Just ignore what the viewBox attribute is for now. It isn’t relevant to the discussion of this post.</p><pre><code>&lt;svg class="chart" viewBox="0 0 800 600"&gt;</code></pre>
<p>You won’t see anything on the screen yet because the chart is transparent at this point. If you use the browser inspector, however, you will see the SVG element.</p>
<p>We’ll also define some dimensions for our chart area like the height, width and margins.</p><pre><code>const height = 600
const width = 800
const margin = { top: 15, right: 30, bottom: 15, left: 30 }</code></pre>
<p>Now that we’ve defined the dimensions we need to actually create the area for our chart in the DOM. To do that, we need to use something called <code>d3.select</code></p>
<p>Think of this as exactly the same as the set of <code>document.getElementBy[X]</code>commands the DOM offers natively.</p>
<p>When you use something like <code>d3.select('.chart')</code>, you are asking D3 to select an element with a class named chart.</p>
<p>Note that we’re saving the selection inside of a variable. This will be important later.</p>
<p>When you select something with <code>d3.select</code>, D3 allows you to use method chaining to alter attributes like width and height, like I've done here.</p><pre><code>const chart = d3.select(".chart")
.attr("width", width)
.attr("height", height)</code></pre>
<p>What we’ll end up with is something like the following image</p>
<figcaption>Chart Display With&nbsp;Margins</figcaption>
</figure>
<p>Don’t worry about the margins for now. We’ll take care of that later.</p>
<h3 id="defining-the-axes">Defining The Axes</h3>
<p>Now, we start with the meaty part of D3: creating and placing our axes.</p>
<p>Before we can start, we need to understand something fundamental about the way D3 axes work: they are essentially a mapping from one set of values to another set of values.</p>
<p>The two sets of values are called domain and range. D3’s mapping works from the domain onto the range.</p>
<p>I have defined two really simple number lines to illustrate the domain and range. The range is the exact same as the domain with double the number of markings.</p>
<p>In this example its really easy to see how the domain can be mapped to the range. You just need to multiply the value by 2 since the range has double the number of ticks and has the same starting tick value of 0.</p>
<p>I’ve drawn two dashed lines to show the following mappings</p><pre><code>2 -&gt; 4
5.5 -&gt; 11</code></pre>
<p>Now, D3 is not limited only to having real numbers (or even just numbers) to define scales. You can even use characters to define your scales.</p>
<h4 id="the-y-scale">The Y Scale</h4>
<p>We’ll start with the Y scale.</p>
<p>D3 has different kinds of scales but the one we’ll be using is called the linear scale.</p>
<p>To define the scale we need two things: the domain and the range.</p>
<p>We’ll use a simple, stupid rule to define our domain. We’ll assume that the minimum value we can have for one of our categories is 0 and the max value is 100. No negative numbers. The domain then becomes <code>[0, 100]</code></p><pre><code>const y = d3.scaleLinear()
.domain([0, 100])
.range([height - margin.bottom, margin.top])</code></pre>
<p>One thing we need to examine here is the range. It took me a little while to understand why the range seems to be in “reverse”. My initial thought was that the range should be <code>[margin.top, height - margin.bottom]</code>. But, we want our Y axis for the chart to start at the bottom and moves vertically upwards.</p>
<p>We’ll consider the following two scenarios in a subsequent diagram to examine this.</p><pre><code>1. .range([height - margin.bottom, margin.top])
2. .range([margin.top, height - margin.bottom])</code></pre>
<p>The important difference between the two scenarios is that in the first scenario we are treating the value of height as our ‘zero’ value. In the second scenario, we are treating the <code>margin.top</code> value as our 'zero' value.</p>
<blockquote><em>One thing to remember before we proceed further: the point of origin of every SVG coordinate system is at the top left corner.</em></blockquote>
<p>Interpreted another way, the bottom of the Y-axis is our ‘zero’ value in the first scenario and the top of the Y-axis is our ‘zero’ value in the second scenario.</p>
<figcaption>The Two Scenarios Represented Visually</figcaption>
</figure>
<p>In the image above, scenario 1 is on the left and scenario 2 is on the right. You can see the direction of movement for the domain in each image.</p>
<p>In scenario 1, the domain grows upwards from the bottom, which is what we want. In scenario 2, the domain grows downwards from the top, which is what we don’t want.</p>
<p>I appreciate that I might have made things more confusing for those of you who managed to grab the above intuitively but this is something that took me a while to figure out. If you understand intuitively, don’t worry about the above. If you still don’t get it, you will by the end of this post.</p>
<h4 id="the-x-scale">The X Scale</h4>
<p>The X scale is a little easier to figure out. We need the X scale to grow from left to right keeping in mind the width of our chart area and also the margins on the left and right.</p>
<p>The domain on this scale is a little more confusing though because we aren’t dealing with numbers anymore. We are dealing with the letters of our categories instead.</p>
<p>To figure out how to construct this scale, we first need to understand something called the ordinal scale. The quickest way to understand the ordinal scale is to consider the differences between the linear and ordinal scales.</p>
<figcaption>The Linear And Ordinal&nbsp;Scale</figcaption>
</figure>
<p>In the image above, you can see a poor drawing of the two scales. The important difference to note is that the linear scale is a <strong><strong>continuous</strong></strong> scale and the ordinal scale is a <strong><strong>discrete</strong></strong> scale.</p>
<p>In the example of the linear scale, if you were to provide a value of 5.5, it would be mapped to the midway point between 5 and 6. However, if you were to provide a value of a letter somewhere between C and D (which doesn’t exist), D3 would have no idea how to map it. As far as D3 is concerned, there is no way to map that value because you have stated that all those values are discrete. That is, there are no connecting values in between.</p>
<p>Now, let’s construct the X axis.</p><pre><code>function getKeys(array) {
return array.map(arrObj = {
return arrObj.category;
});
}
const keys = getKeys(data)
const x = d3.scaleOrdinal()
.domain([...keys])
.range([margin.left, width - margin.right])</code></pre>
<p>If you’re wondering about the function in there and the variable keys, that is to extract all the categories present in our data and provide it to the domain function as an array.</p>
<p>I could just as easily have written <code>.domain(['A', 'B', 'C', 'D', 'E'])</code> but then I would have had to manually update that every time my data changed.</p>
<p>The range, as I have already mentioned, needs to grow from left to right. So, we leave out the margin on the left, move the length of the width and leave out the margin on the right.</p>
<h4 id="creating-the-actual-axes">Creating The Actual Axes</h4>
<p>Now, we have the chart area and the scales defined, we need to set up the axes themselves. Here is how we do that.</p><pre><code>const xAxis = d3.axisBottom(x)</code></pre>
<p>Here, we are creating a <strong><strong>function</strong></strong> called xAxis which uses the <code>d3.axisBottom</code>function with our x scale provided as a parameter.</p>
<p>To actually display the X-axis on our chart, we need to do the following</p><pre><code>chart.append('g')
.attr('transform', `translate(0, ${height})`)
.call(xAxis)</code></pre>
<p>Two things to examine here.</p>
<p>We’re appending a <code>g</code> element to our chart. We discussed the <code>g</code> element in an earlier section. We then apply a transform to our <code>g</code> element. This transform is something that comes up in D3 all the time.</p>
<p>SVG’s have what are called transform functions. There are multiple kinds of transform functions, but the one we care about here is <code>translate</code>. <code>Translate</code>accepts two parameters an <code>x</code> and <code>y</code> co-ordinate. This signifies how many units of pixels to move the <code>g</code> element either in the X or the Y direction.</p>
<p>You can read more about transforms <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform" rel="nofollow noopener">here</a>.</p>
<p>The two parameters we provide to the <code>translate</code> function are 0 and <code>height</code>. Remember that the point of origin of our SVG chart is at the top left corner. Since, we already know this is a horizontal axis that begins at the point of origin, we need to move it vertically down by <code>height</code> number of units.</p>
<p>If you didn’t provide the transform attribute, the X-axis would be situated at the top of your chart.</p>
<p>The last part of the method chain is a <code>call</code> function where the xAxis is provided as a parameter. This is probably the most confusing aspect so far because of the poor choice of terminology.</p>
<p>We’ll examine just these two lines first.</p><pre><code>.append('g')
.attr('transform', `translate(0, ${height})`)</code></pre>
<p>What you need to understand is that when you do something like <code>chart.append('g')</code>, this appends a <code>g</code> element onto the chart element, selects the <code>g</code> element and then returns it. You can test this by doing the following</p><pre><code>const test = chart.append('g')
.attr('transform', `translate(0, ${height})`)
.call(xAxis)console.log(test)</code></pre>
<p>When the result of the log shows up, you’ll see a <code>g</code> element under a <code>Selection</code> object. This is actually what enables us to do method chaining on the <code>append</code> method. Since it returns the <code>g</code> element, we can transform as part of the same method chain.</p>
<p>Let’s go to the last line now</p><pre><code>.call(xAxis)</code></pre>
<p>Here’s what D3’s documentation says about <code>call</code></p>
<blockquote><em><em>Invokes the specified function exactly once, passing in this selection along with any optional arguments. Returns this selection.</em></em></blockquote>
<p>So, we know we utilize call as a function and we have to pass it a function as a parameter. We know this because the documentation says, it invokes the specific function exactly once. Now, the other thing to realize is that xAxis is also a function. You can verify this again by logging xAxis.</p>
<p>But, if xAxis is also a function then that needs a parameter passed to it as well. Read the documentation for <code>call</code> again and you'll notice it says "passes in this selection...". This means that the xAxis function is being <strong><strong>implicitly</strong></strong> called with the <code>g</code> selection returned from calling <code>chart.append('g')</code></p>
<p>Having to explain how <code>call</code> works is precisely why I don't like it. There's too much implicitly happening that just seems like black magic.</p>
<p>If you’re still confused about how <code>call</code> works hopefully the following graphic clears it up for you.</p>
<figcaption>How Call&nbsp;Works</figcaption>
</figure>
<p>Creating the Y axis now that we know how the X axis works is far simpler. We use the same principles but swap out <code>axisBottom</code> for <code>axisLeft</code> and change the translate function slightly.</p><pre><code>const yAxis = d3.axisLeft(y);
chart
.append("g")
.attr("transform", `translate(${margin.left}, ${margin.bottom})`)
.call(yAxis);</code></pre>
<p>You’ll notice that the <code>transform</code> attribute has a <code>translate</code> function where the <code>y</code> attribute is set to <code>margin.bottom</code>. If you go back to the range we set for the y scale, you'll notice we set it to <code>height - margin.bottom</code>.</p>
<p>When we call D3’s <code>axisBottom</code> function, D3 will place this at <code>height - margin.bottom</code>, but the bottom of the chart is actually at <code>height</code>, so we add the <code>margin.bottom</code> offset.</p>
<h3 id="placing-the-bars">Placing The Bars</h3>
<p>This is the most visually important part of the chart because this is where the user actually gets to see the data.</p>
<p>First, let me just show you the code that will create the bars for us and then step through it.</p><pre><code>chart.selectAll('rect')
.data(data)
.join('rect')
.attr('x', d =&gt; x(d.category))
.attr('y', d =&gt; y(d.value))
.attr('width', x.bandwidth())
.attr('height', height - y(d.value))
.style('fill', 'steelblue')</code></pre>
<p>The first two lines are straightforward. <code>selectAll</code> works the same as <code>select</code>except it returns all possible selections of a specific elemenet.</p>
<p>Calling <code>.data</code> allows you to define the data you want to associate with the DOM elements.</p>
<p>Now, the <code>.join</code> is where the crux of D3 comes in. This is what makes D3 unbelievably powerful to create visualizations with.</p>
<p>If you want to read what Mike Bostock (the creator of D3) has to say on data joins, you can find that <a href="https://bost.ocks.org/mike/join/" rel="nofollow noopener">here</a>.</p>
<p>What follows is my attempt at explaining what the <code>.join</code> function does in the context of a bar chart.</p>
<p>So, if you go back and look at the data we defined earlier in this post, you’ll notice that it is an array. The reason is because this is the data structure D3 expects.</p>
<p>The <code>.join</code> function then takes every element of the array and <strong><strong>constructs a corresponding DOM element with this data point attached</strong></strong>.</p>
<p><em>Note: The </em><code><em>.join</em></code><em> function used to earlier be separate functions called </em><code><em>.enter</em></code><em>and </em><code><em>.append</em></code><em>. However this syntax is a lot cleaner. </em><a href="https://github.com/d3/d3-selection/issues/194" rel="nofollow noopener"><em>Here</em></a><em> is the GitHub issue where Mike Bostock first suggested it.</em></p>
<figcaption>How&nbsp;.join() works&nbsp;visually</figcaption>
</figure>
<p><em>Note: In the graphic above, it should read </em><code><em>.join('rect')</em></code><em> not </em><code><em>.join('bar')</em></code></p>
<p>The graphic above illustrates what is going on when you do a data join. If you take an array of 5 elements and perform a <code>.join('rect')</code> on it, what D3 will do is create a rect SVG element for each of those elements.</p>
<p>Another thing D3 will do is associate each data point from your array to its respective <code>rect</code> element.</p><pre><code>const data = [1, 2, 3, 4, 5]
const selection = d3.selectAll('rect')
.data(data)
.join('rect)
selection.each(function(d, i) {
console.log(d)
})
//1, 2, 3, 4, 5</code></pre>
<p>The above code snippet shows you how to do the logging of each individual data point to satisfy your own curiosity.</p>
<p>You could, of course, replace the <code>rect</code> above with any other SVG element and you would have the same result.</p>
<p>Great, now we know how to create our bars but we still need to figure out how to place them. Before continuing, I recommend you read <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect" rel="nofollow noopener">this MDN article</a>about rects.</p>
<p>One thing that tripped me up a lot about working with D3 intially was trying to figure out how the SVG coordinate system works.</p>
<p><em>If you want a deeper understanding of how SVG coordinate systems work, check out </em><a href="https://www.sarasoueidan.com/blog/svg-coordinate-systems/" rel="nofollow noopener"><em>this</em></a><em> article</em></p>
<p>The graphic above shows you how different measurements would impact the placement of a rect in the SVG coordinate space.</p>
<p>A rect SVG element has four main attributes we’ll be concerned with: x, y, width and height.</p>
<p>You can see how each of them relate to the SVG coordinate space in the image.</p>
<p>Let’s translate the above into code.</p><pre><code>chart
.selectAll("rect")
.data(data)
.join("rect")
.attr("x", d =&gt; return x(d.category))
.attr("y", d =&gt; return y(d.value))
.attr("width", x.bandwidth())
.attr("height", d =&gt; height - y(d.value))
.style("fill", "steelblue");</code></pre>
<p>Let’s step through the bits of the code after the <code>.join</code> call.</p>
<p>When we set the <code>x</code> and <code>y</code> attributes, we make a call to the respective scales we defined earlier. Remember when we defined the scales, we said that each of them would be functions that could be called with a value to map it from the domain to the range. That's precisely what we're doing here.</p>
<p>Now, to understand the width attribute, we first need to go back to the <code>ordinalScale</code> we defined. D3 has a function associated with each scale called the <code>bandwidth</code> function. This returns the width of each band defined. D3 internally does this by dividing the range equally among each element of the domain.</p>
<p>So, we provided an array of 5 characters as the domain of the x axis and we set the range to <code>[margin.left, width - margin.right]</code>, where <code>width = 800</code>and <code>margin = { left: 60, right: 60 }</code></p>
<p>So, we have</p><pre><code>(800 - 60 - 60) / 5 = 136
All units are in pixels.</code></pre>
<p>Now, the height attribute is another thing that tripped me up for a long time because I couldn’t quite figure out why we were doing <code>height - y(d.value)</code>to represent the height of the rect. Surely, it should have just been <code>y(d.value)</code>?</p>
<p>This is answered again by remembering that the SVG coordinate has its point of origin in the top left corner and the +ve Y-axis goes downwards.</p>
<figcaption>Measurements For A Bar in SVG Coordinate System</figcaption>
</figure>
<p>In the graphic above, I’ve presented my understanding of how the height of the bar is calculated. Again, if the calculation for the height of the bar makes intuitive sense for you, feel free to skip this.</p>
<p>The main thing to notice in the visual is that there is a difference between the axes of the SVG coordinate system and the axes of our chart. The Y axis for the SVG coordinate system is positive downwards but the Y axis for our chart is positive upwards.</p>
<p>This is the reason I’ve drawn two separate sets of axes for both X and Y. Technically, the two Y axes should be superimposed on top of one another but that would make it hard to visually see it. But, you can assume that they are overlayed on top of each other.</p>
<p>When we call the y scale function with <code>y(d.value)</code>, we get a value that <em>counts down</em> the +ve Y-axis of the SVG coordinate system starting from the top. The height is shown on the side which is the entire length of the Y axis and then what remains is <code>height - y(d.value)</code>, which is the height we are assigning to the bar.</p>
<h3 id="adding-titles-and-labels">Adding Titles And Labels</h3>
<p>Now, we get to the easy bit. It’s only easy because of everything we’ve covered so far!</p>
<p>Similar to how we’ve appended <code>rects</code> to our SVG so far, we can also append <code>text</code> as an SVG element like below:</p><pre><code>chart.append('text')
.attr('x', width / 2)
.attr('y', margin.top)
.style('font-size', 32px)
.style('text-anchor', 'middle')
.text('Distribution Among Categories')</code></pre>
<p>The text SVG element also has an <code>x</code> and <code>y</code> attribute that work very similarly to how the <code>x</code> and <code>y</code> attributes of the <code>rect</code> work.</p>
<p>You can set different style attributes to the text element and you set the text itself using the <code>.text</code> attribute.</p>
<p>Now, let’s place the Y-axis label</p><pre><code>chart
.append("text")
.attr("transform", "rotate(-90)")
.attr("x", -height / 2)
.attr("y", margin.left / 4)
.text("Values")</code></pre>
<p>Okay, this one is a little confusing, so let’s step through it.</p>
<p>First, we apply a <code>transform</code> to the element and set that value to <code>rotate(-90)</code>. What this does is rotate the <em>SVG coordinate system itself</em> by -90 degrees.</p>
<p><em>Note: Everything that follows is my attempt to reverse engineer how the rotate function works. If I turn out to be wrong, please excuse me.</em></p>
<figcaption>Axis Rotation</figcaption>
</figure>
<p>The graphic above shows what happens to the coordinate system on applying <code>rotate(-90)</code>. Now, you're probably even more confused because a negative rotation typically means a clockwise rotation. Yet, it looks like I've rotated anti-clockwise here.</p>
<p>Well, remember that a typical coordinate system has the Y-axis pointing positively upwards. We have it pointing positively downwards. Therefore, our rotations are reversed.</p>
<p>Now, our new X axis points in the opposite direction of the old Y axis and our new Y axis points in the direction of the old X axis.</p>
<p>Now, in the context of this new information, looking at the values of the <code>x</code>and <code>y</code> attributes makes more sense. Since our new X points opposite to the direction of the old Y, we set a negative value to the <code>x</code> attribute.</p>
<h3 id="conclusion">Conclusion</h3>
<p>Okay, that was quite the post. I wasn’t envisioning it becoming quite so massive but we did cover a lot in detail. I hope you enjoyed going through this post and more than anything, I hope you have a better grasp of how D3 works. This is a truly wonderful library that provides you with a set of very powerful tools.</p>
<p>I’ve created a <a href="https://codesandbox.io/s/blazing-pine-9vjw1" rel="nofollow noopener">Code Sanbox here</a> with a working version of the code from this post. Feel free to fork it and play around with it!</p>
<hr>
<p><em>If you want to follow me, you can do so on </em><a href="https://github.com/" rel="nofollow noopener"><em>GitHub</em></a><em> or </em><a href="https://twitter.com/zz_humayun" rel="nofollow noopener"><em>Twitter</em></a><em>. If you have any questions, please don’t hesitate to ask.</em></p>
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
