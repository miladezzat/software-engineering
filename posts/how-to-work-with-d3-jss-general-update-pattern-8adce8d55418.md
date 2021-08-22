---
card: "https://cdn-media-1.freecodecamp.org/images/1*qyybxSDlom1vFlZ4LwppTg.jpeg"
tags: [JavaScript]
description: "It is common to remove the existing Scalable Vector Graphics "
author: "Milad E. Fahmy"
title: "How to work with D3.js’s general update pattern"
created: "2021-08-16T10:07:24+02:00"
modified: "2021-08-16T10:07:24+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-software-engineering tag-data-science tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to work with D3.js’s general update pattern</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*qyybxSDlom1vFlZ4LwppTg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*qyybxSDlom1vFlZ4LwppTg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*qyybxSDlom1vFlZ4LwppTg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*qyybxSDlom1vFlZ4LwppTg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*qyybxSDlom1vFlZ4LwppTg.jpeg" alt="How to work with D3.js’s general update pattern">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
.select('#volume-series')
.selectAll(.'vol')
.data(this.currentData, d =&gt; d['date']);</code></pre><p>The above line of code selects all elements with the class <code>vol</code> , followed by mapping the <code>this.currentData</code> array with the selection of DOM elements using the <code>data()</code> method.</p><p>The second optional argument of <code>data()</code> takes a data point as input and returns the <code>date</code> property as the selected key for each data point.</p><h4 id="enter-update-selection">Enter/Update selection</h4><p><code>.enter()</code> returns an enter selection which represents the elements that need to be added when the joined array is longer than the selection. This is followed by calling <code>.append()</code>, which creates or updates elements on the DOM. We can implement this in the following manner:</p><pre><code class="language-js">bars
.enter()
.append('rect')
.attr('class', 'vol')
.merge(bars)
.transition()
.duration(750)
.attr('x', d =&gt; this.xScale(d['date']))
.attr('y', d =&gt; yVolumeScale(d['volume']))
.attr('fill', (d, i) =&gt; {
if (i === 0) {
return '#03a678';
} else {
// green bar if price is rising during that period, and red when price is falling
return this.currentData[i - 1].close &gt; d.close
? '#c0392b'
: '#03a678';
}
})
.attr('width', 1)
enter =&gt; // enter.. ,
update =&gt; // update.. ,
exit =&gt; // exit..
)
// allows chained operations on the returned selections</code></pre><p>In the case of the volume series bars, the application of <code>selection.join</code> will result in the following changes on our code:</p><pre><code class="language-js">//select, followed by updating data join
const bars = d3
.select('#volume-series')
.selectAll('.vol')
.data(this.currentData, d =&gt; d['date']);
bars.join(
enter =&gt;
enter
.append('rect')
.attr('class', 'vol')
.attr('x', d =&gt; this.xScale(d['date']))
.attr('y', d =&gt; yVolumeScale(d['volume']))
.attr('fill', (d, i) =&gt; {
if (i === 0) {
return '#03a678';
} else {
return this.currentData[i - 1].close &gt; d.close
? '#c0392b'
: '#03a678';
}
})
.attr('width', 1)
.attr('height', d =&gt; this.height - yVolumeScale(d['volume'])),
update =&gt;
update
.transition()
.duration(750)
.attr('x', d =&gt; this.xScale(d['date']))
.attr('y', d =&gt; yVolumeScale(d['volume']))
.attr('fill', (d, i) =&gt; {
if (i === 0) {
return '#03a678';
} else {
return this.currentData[i - 1].close &gt; d.close
? '#c0392b'
: '#03a678';
}
})
.attr('width', 1)
.attr('height', d =&gt; this.height - yVolumeScale(d['volume']))
let sumSquaredDifference = 0;
return data.map((row, index, total) =&gt; {
const start = Math.max(0, index - numberOfPricePoints);
const end = index;
// divide the sum with subset.length to obtain moving average
const subset = total.slice(start, end + 1);
const sum = subset.reduce((a, b) =&gt; {
return a + b['close'];
}, 0);
const sumSquaredDifference = subset.reduce((a, b) =&gt; {
const average = sum / subset.length;
const dfferenceFromMean = b['close'] - average;
const squaredDifferenceFromMean = Math.pow(dfferenceFromMean, 2);
return a + squaredDifferenceFromMean;
}, 0);
const variance = sumSquaredDifference / subset.length;
return {
date: row['date'],
average: sum / subset.length,
standardDeviation: Math.sqrt(variance),
upperBand: sum / subset.length + Math.sqrt(variance) * 2,
lowerBand: sum / subset.length - Math.sqrt(variance) * 2
};
});
}
.
.
// calculates simple moving average, and standard deviation over 20 days
this.bollingerBandsData = this.calculateBollingerBands(validData, 19);</code></pre><p>A quick explanation of the calculation of the standard deviation, and Bollinger Band values on the above block of code is as follows:</p><p>For each iteration,</p><ol><li>Calculate the average of the close price.</li><li>Find the difference between the average value and close price for that data point.</li><li>Square the result of each difference.</li><li>Find the sum of squared differences.</li><li>Calculate the mean of the squared differences to get the variance</li><li>Get the square root of the variance to obtain the standard deviation for each data point.</li><li>Multiply the standard deviation by 2. Calculate the upper and lower band values by adding or subtracting the average with the multiplied value.</li></ol><p>With the data points defined, we can then make use of <code>selection.join</code> to render Bollinger Bands:</p><pre><code class="language-js">// code not shown: rendering of upper and lower bands
.
.
// bollinger bands area chart
const area = d3
.area()
.x(d =&gt; this.xScale(d['date']))
.y0(d =&gt; this.yScale(d['upperBand']))
.y1(d =&gt; this.yScale(d['lowerBand']));
const areaSelect = d3
.select('#chart')
.select('svg')
.select('g')
.selectAll('.band-area')
.data([this.bollingerBandsData]);
areaSelect.join(
enter =&gt;
enter
.append('path')
.style('fill', 'darkgrey')
.style('opacity', 0.2)
.style('pointer-events', 'none')
.attr('class', 'band-area')
.attr('clip-path', 'url(#clip)')
.attr('d', area),
update =&gt;
update
.transition()
.duration(750)
.attr('d', area)
const candlesticksLine = d3
.line()
.x(d =&gt; d['x'])
.y(d =&gt; d['y']);
const candlesticksSelection = d3
.select('#chart')
.select('g')
.selectAll('.candlesticks')
.data(this.currentData, d =&gt; d['volume']);
candlesticksSelection.join(enter =&gt; {
const candlesticksEnter = enter
.append('g')
.attr('class', 'candlesticks')
.append('g')
.attr('class', 'bars')
.classed('up-day', d =&gt; d['close'] &gt; d['open'])
.classed('down-day', d =&gt; d['close'] &lt;= d['open']);
</code></pre><p>On the enter function, each candlestick is rendered based on its individual properties.</p><p>First and foremost, each candlestick group element is assigned a class of <code>up-day</code> if the close price is higher than the open price, and <code>down-day</code> if the close price is lower than or equal to the open-price.</p><pre><code class="language-js">candlesticksEnter
.append('path')
.classed('high-low', true)
.attr('d', d =&gt; {
return candlesticksLine([
{ x: this.xScale(d['date']), y: this.yScale(d['high']) },
{ x: this.xScale(d['date']), y: this.yScale(d['low']) }
]);
});</code></pre><p>Next, we append the <code>path</code> element, which represents the highest and lowest price of that day, to the above selection.</p><pre><code class="language-js">  candlesticksEnter
.append('rect')
.attr('x', d =&gt; this.xScale(d.date) - bodyWidth / 2)
.attr('y', d =&gt; {
return d['close'] &gt; d['open']
? this.yScale(d.close)
: this.yScale(d.open);
})
.attr('width', bodyWidth)
.attr('height', d =&gt; {
return d['close'] &gt; d['open']
? this.yScale(d.open) - this.yScale(d.close)
: this.yScale(d.close) - this.yScale(d.open);
});
});</code></pre><p>This is followed by appending the <code>rect</code> element to the selection. The height of each <code>rect</code> element is directly proportionate to its day range, derived by subtracting the open price with the close price.</p><p>On our stylesheets, we will define the following CSS properties to our classes making the candlesticks red or green:</p><pre><code class="language-js">.bars.up-day path {
stroke: #03a678;
}
.bars.down-day path {
stroke: #c0392b;
}
.bars.up-day rect {
fill: #03a678;
}
.bars.down-day rect {
fill: #c0392b;
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
