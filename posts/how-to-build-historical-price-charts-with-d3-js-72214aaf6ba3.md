---
card: "https://cdn-media-1.freecodecamp.org/images/1*4xr6-FwevPj7MIL756bDwA.png"
tags: [JavaScript]
description: "It is a challenge to communicate data and display these visua"
author: "Milad E. Fahmy"
title: "How to build historical price charts with D3.js"
created: "2021-08-16T10:08:30+02:00"
modified: "2021-08-16T10:08:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-data-visualization tag-web-development tag-fintech tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to build historical price charts with D3.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*4xr6-FwevPj7MIL756bDwA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*4xr6-FwevPj7MIL756bDwA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*4xr6-FwevPj7MIL756bDwA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*4xr6-FwevPj7MIL756bDwA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*4xr6-FwevPj7MIL756bDwA.png" alt="How to build historical price charts with D3.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h4 id="a-step-by-step-approach-towards-visualizing-financial-datasets">A step by step approach towards visualizing financial datasets</h4><p>It is a challenge to communicate data and display these visualizations on multiple devices and platforms.</p><blockquote>“Data is just like crude. It’s valuable, but if unrefined it cannot really be used.” - <a href="https://ana.blogs.com/maestros/2006/11/data_is_the_new.html" rel="noopener">Michael Palmer</a></blockquote><p>D3 (Data-Driven Documents) solves this age-old dilemma. It provides developers and analysts the ability to build customized visualizations for the Web with complete freedom. D3.js allows us to bind data to the DOM (Document Object Model). Then apply data-driven transformations to create refined visualizations of data.</p><p>In this tutorial, we will understand how we can make the D3.js library work for us.</p><h4 id="getting-started">Getting started</h4><p>We will be building a chart that illustrates the movement of a financial instrument over a period of time. This visualization resembles the price charts provided by <a href="https://finance.yahoo.com" rel="noopener">Yahoo Finance</a>. We will break down the various components required to render an interactive price chart that tracks a particular <a href="https://sg.finance.yahoo.com/quote/VIG/chart?p=VIG" rel="noopener">stock</a>.</p><p>Required components:</p><ol><li>Loading and parsing of data</li><li>SVG element</li><li>X and Y axes</li><li>Close price line chart</li><li>Simple moving average curve chart with some calculations</li><li>Volume series bar chart</li><li>Mouseover crosshair and legend</li></ol><h4 id="loading-and-parsing-of-data">Loading and Parsing of Data</h4><pre><code class="language-js">const loadData = d3.json('sample-data.json').then(data =&gt; {
const chartResultsData = data['chart']['result'][0];
const quoteData = chartResultsData['indicators']['quote'][0];
return chartResultsData['timestamp'].map((time, index) =&gt; ({
date: new Date(time * 1000),
high: quoteData['high'][index],
low: quoteData['low'][index],
open: quoteData['open'][index],
close: quoteData['close'][index],
volume: quoteData['volume'][index]
}));
});</code></pre><p>First, we will use the <a href="https://github.com/d3/d3-fetch" rel="noopener">fetch</a> module to load our sample data. D3-fetch also supports other formats such as TSV and CSV files. The data will then be further processed to return an array of objects. Each object contains the trade timestamp, high price, low price, open price, close price, and trade volume.</p><pre><code class="language-css">body {
background: #00151c;
}
#chart {
background: #0e3040;
color: #67809f;
}</code></pre><p>Add the above base CSS properties to personalize the style of your chart for maximum visual appeal.</p><h4 id="appending-the-svg-element">Appending the SVG Element</h4><pre><code class="language-js">const initialiseChart = data =&gt; {
const margin = { top: 50, right: 50, bottom: 50, left: 50 };
const width = window.innerWidth - margin.left - margin.right;
const height = window.innerHeight - margin.top - margin.bottom;
// add SVG to the page
const svg = d3
.select('#chart')
.append('svg')
.attr('width', width + margin['left'] + margin['right'])
.attr('height', height + margin['top'] + margin['bottom'])
.call(responsivefy)
.append('g')
.attr('transform', `translate(${margin['left']},  ${margin['top']})`);</code></pre><p>Subsequently, we can use the <code>append()</code> method to append the SVG element to the <code>&lt;d</code>iv&gt; element with th<code>e id,</code> chart. Next, we us<code>e the </code>attr() method to assign the width and height of the SVG element. We then cal<code>l the responsi</code>vefy() method (originally writt<a href="https://brendansudol.com/writing/responsive-d3" rel="noopener">en by Brendan</a> Sudol). This allows the SVG element to have responsive capabilities by listening to window resize events.</p><p>Remember to append the SVG group element to the above SVG element before translating it using the values from the <code>margin</code> constant.</p><h4 id="rendering-the-x-and-y-axes">Rendering the X and Y Axes</h4><p>Before rendering the axes component, we will need to define our domain and range, which will then be used to create our scales for the axes</p><pre><code class="language-js">// find data range
const xMin = d3.min(data, d =&gt; {
return d['date'];
});
const xMax = d3.max(data, d =&gt; {
return d['date'];
});
const yMin = d3.min(data, d =&gt; {
return d['close'];
});
const yMax = d3.max(data, d =&gt; {
return d['close'];
});
// scales for the charts
const xScale = d3
.scaleTime()
.domain([xMin, xMax])
.range([0, width]);
const yScale = d3
.scaleLinear()
.domain([yMin - 5, yMax])
.range([height, 0]);</code></pre><p>The x and y axes for the close price line chart consist of the trade date and close price respectively. Therefore, we have to define the minimum and maximum x and y values, using <code>d3.max()</code> and <code>d3.min()</code>. We can then make use of<a href="https://github.com/d3/d3-scale" rel="noopener"> D3-scale</a>’s <code>scaleTime()</code> and <code>scaleLinear()</code> to create the time scale on the x-axis and the linear scale on the y-axis respectively. The range of the scales is defined by the width and height of our SVG element.</p><pre><code class="language-js">// create the axes component
svg
.append('g')
.attr('id', 'xAxis')
.attr('transform', `translate(0, ${height})`)
.call(d3.axisBottom(xScale));
svg
.append('g')
.attr('id', 'yAxis')
.attr('transform', `translate(${width}, 0)`)
.call(d3.axisRight(yScale));</code></pre><p>After this step, we need to append the first <code>g</code> element to the SVG element, which calls the <code>d3.axisBottom()</code> method, taking in <code>xScale</code> as the parameter to generate the x-axis. The x-axis is then translated to the bottom of the chart area. Similarly, the y-axis is generated by appending the <code>g</code> element, calling d3.axisRight() with <code>yScale</code> as the parameter, before translating the y-axis to the right of the chart area.</p><h4 id="rendering-the-close-price-line-chart">Rendering the Close Price Line Chart</h4><pre><code>// generates close price line chart when called
const line = d3
.line()
.x(d =&gt; {
return xScale(d['date']);
})
.y(d =&gt; {
return yScale(d['close']);
});
// Append the path and bind data
svg
.append('path')
.data([data])
.style('fill', 'none')
.attr('id', 'priceChart')
.attr('stroke', 'steelblue')
.attr('stroke-width', '1.5')
return data.map((row, index, total) =&gt; {
const start = Math.max(0, index - numberOfPricePoints);
const end = index;
const subset = total.slice(start, end + 1);
const sum = subset.reduce((a, b) =&gt; {
return a + b['close'];
}, 0);
return {
date: row['date'],
average: sum / subset.length
};
});
};</code></pre><p>We define our helper function, <code>movingAverage</code> to calculate the simple moving average. This function accepts two parameters, namely the dataset, and the number of price points, or periods. It then returns an array of objects, with each object containing the date and average for each data point.</p><pre><code class="language-js">// calculates simple moving average over 50 days
const movingAverageData = movingAverage(data, 49);
// generates moving average curve when called
const movingAverageLine = d3
.line()
.x(d =&gt; {
return xScale(d['date']);
})
.y(d =&gt; {
return yScale(d['average']);
})
.curve(d3.curveBasis);
svg
.append('path')
.data([movingAverageData])
.style('fill', 'none')
.attr('id', 'movingAverageLine')
.attr('stroke', '#FF8900')
const volData = data.filter(d =&gt; d['volume'] !== null &amp;&amp; d['volume']   !== 0);
const yMinVolume = d3.min(volData, d =&gt; {
return Math.min(d['volume']);
});
const yMaxVolume = d3.max(volData, d =&gt; {
return Math.max(d['volume']);
});
const yVolumeScale = d3
.scaleLinear()
.domain([yMinVolume, yMaxVolume])
.range([height, 0]);</code></pre><p>The x and y axes for the volume series bar chart consist of the trade date and volume respectively. Thus, we will need to redefine the minimum and maximum y values and make use of <code>scaleLinear()</code>on the y-axis. The range of these scales are defined by the width and height of our SVG element. We will be reusing <code>xScale</code> since the x-axis of the bar chart corresponds similarly to the trade date.</p><pre><code class="language-js">svg
.selectAll()
.data(volData)
.enter()
.append('rect')
.attr('x', d =&gt; {
return xScale(d['date']);
})
.attr('y', d =&gt; {
return yVolumeScale(d['volume']);
})
.attr('fill', (d, i) =&gt; {
if (i === 0) {
return '#03a678';
} else {
return volData[i - 1].close &gt; d.close ? '#c0392b' : '#03a678';
}
})
.attr('width', 1)
.attr('height', d =&gt; {
return height - yVolumeScale(d['volume']);
});</code></pre><p>This section relies on your understanding of how the<code>selectAll()</code> method works with the <code>enter()</code> and <code>append()</code> methods. You may wish to read <a href="https://bost.ocks.org/mike/join/" rel="noopener">this</a> (written by <a href="https://bost.ocks.org/mike/" rel="noopener">Mike Bostock</a> himself) if you are unfamiliar with those methods. This may be important as those methods are used as part of the <a href="https://bost.ocks.org/mike/join/" rel="noopener">enter-update-exit</a> pattern, which I may cover in a subsequent tutorial.</p><p>To render the bars, we will first use <code>.selectAll()</code> to return an empty selection, or an empty array. Next, we pass <code>volData</code> to define the height of each bar. The <code>enter()</code> method compares the <code>volData</code> dataset with the selection from <code>selectAll()</code>, which is currently empty. Currently, the DOM does not contain any <code>&lt;re</code>ct&gt; element. Thus<code>, the ap</code>pend() method accepts an arg<code>ument </code>‘rect’, which creates <code>a new </code>&lt;rect&gt; element in the DOM for every singl<code>e objec</code>t in volData.</p><p>Here is a breakdown of the attributes of the bars. We will be using the following attributes: <code>x</code>, <code>y</code>, <code>fill</code>, <code>width</code>, and <code>height</code>.</p><pre><code>.attr('x', d =&gt; {
return xScale(d['date']);
})
.attr('y', d =&gt; {
return yVolumeScale(d['volume']);
})</code></pre><p>The first <code>attr()</code> method defines the x-coordinate. It accepts an anonymous function which returns the date. Similarly, the second <code>attr()</code> method defines the y-coordinate. It accepts an anonymous function which returns the volume. These will define the position of each bar.</p><pre><code>.attr('width', 1)
.attr('height', d =&gt; {
return height - yVolumeScale(d['volume']);
});</code></pre><p>We assign a width of 1 pixel to each bar. To make the bar stretch from the top (defined by <code>y</code>)to the x-axis, simply deduct the height with the <code>y</code> value.</p><pre><code>.attr('fill', (d, i) =&gt; {
if (i === 0) {
return '#03a678';
} else {
return volData[i - 1].close &gt; d.close ? '#c0392b' : '#03a678';
}
const focus = svg
.append('g')
.attr('class', 'focus')
.style('display', 'none');
focus.append('circle').attr('r', 4.5);
focus.append('line').classed('x', true);
focus.append('line').classed('y', true);
svg
.append('rect')
.attr('class', 'overlay')
.attr('width', width)
.attr('height', height)
.on('mouseover', () =&gt; focus.style('display', null))
.on('mouseout', () =&gt; focus.style('display', 'none'))
.on('mousemove', generateCrosshair);
d3.select('.overlay').style('fill', 'none');
d3.select('.overlay').style('pointer-events', 'all');
d3.selectAll('.focus line').style('fill', 'none');
d3.selectAll('.focus line').style('stroke', '#67809f');
d3.selectAll('.focus line').style('stroke-width', '1.5px');
d3.selectAll('.focus line').style('stroke-dasharray', '3 3');</code></pre><p>The crosshair consists of a translucent circle with drop lines consisting of dashes. The above code block provides the styling of the individual elements. Upon mouseover, it will generate the crosshair based on the function below.</p><pre><code class="language-js">const bisectDate = d3.bisector(d =&gt; d.date).left;
function generateCrosshair() {
//returns corresponding value from the domain
const correspondingDate = xScale.invert(d3.mouse(this)[0]);
//gets insertion point
const i = bisectDate(data, correspondingDate, 1);
const d0 = data[i - 1];
const d1 = data[i];
const currentPoint = correspondingDate - d0['date'] &gt; d1['date'] - correspondingDate ? d1 : d0;
focus.attr('transform',`translate(${xScale(currentPoint['date'])},     ${yScale(currentPoint['close'])})`);
focus
.select('line.x')
.attr('x1', 0)
.attr('x2', width - xScale(currentPoint['date']))
.attr('y1', 0)
.attr('y2', 0);
focus
.select('line.y')
.attr('x1', 0)
.attr('x2', 0)
.attr('y1', 0)
.attr('y2', height - yScale(currentPoint['close']));
updateLegends(currentPoint);
}</code></pre><p>We can then make use of the <a href="https://github.com/d3/d3-array#bisect" rel="noopener">d3.bisector()</a> method to locate the insertion point, which will highlight the closest data point on the close price line graph. After determining the <code>currentPoint</code>, the drop lines will be updated. The <code>updateLegends()</code> method uses the <code>currentPoint</code> as the parameter.</p><pre><code>const updateLegends = currentData =&gt; {  d3.selectAll('.lineLegend').remove();</code></pre><pre><code>const updateLegends = currentData =&gt; {
d3.selectAll('.lineLegend').remove();
const legendKeys = Object.keys(data[0]);
const lineLegend = svg
.selectAll('.lineLegend')
.data(legendKeys)
.enter()
.append('g')
.attr('class', 'lineLegend')
.attr('transform', (d, i) =&gt; {
return `translate(0, ${i * 20})`;
});
lineLegend
.append('text')
.text(d =&gt; {
if (d === 'date') {
return `${d}: ${currentData[d].toLocaleDateString()}`;
} else if ( d === 'high' || d === 'low' || d === 'open' || d === 'close') {
return `${d}: ${currentData[d].toFixed(2)}`;
} else {
return `${d}: ${currentData[d]}`;
}
})
.style('fill', 'white')
.attr('transform', 'translate(15,9)');
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
