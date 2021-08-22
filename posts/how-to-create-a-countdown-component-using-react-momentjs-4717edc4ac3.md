---
card: "https://cdn-media-1.freecodecamp.org/images/0*uxd3eEv1EyIUdvNi.png"
tags: [React]
description: "Recently I had to create a Countdown for one of my other proj"
author: "Milad E. Fahmy"
title: "How to create a Countdown component using React & MomentJS"
created: "2021-08-16T11:29:19+02:00"
modified: "2021-08-16T11:29:19+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-technology tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to create a Countdown component using React &amp; MomentJS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*uxd3eEv1EyIUdvNi.png 300w,
https://cdn-media-1.freecodecamp.org/images/0*uxd3eEv1EyIUdvNi.png 600w,
https://cdn-media-1.freecodecamp.org/images/0*uxd3eEv1EyIUdvNi.png 1000w,
https://cdn-media-1.freecodecamp.org/images/0*uxd3eEv1EyIUdvNi.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*uxd3eEv1EyIUdvNi.png" alt="How to create a Countdown component using React &amp; MomentJS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
const then = moment(timeTillDate, timeFormat);
const now = moment();
const countdown = moment(then - now);</code></pre><p><strong>Note</strong>: the <code>timeTillDate</code>, <code>timeFormat</code> values will be provided inside the React component. For now we're using them as examples.</p><p>From the <code>countdown</code> object we can get all the values that we want to display in our component - <code>days</code>, <code>hours</code>, <code>minutes</code> and <code>seconds</code> left until we reach the <code>then</code> time.</p><pre><code class="language-javascript">import moment from 'moment';
const then = moment(timeTillDate, timeFormat);
const now = moment();
const countdown = moment(then - now);
const days = countdown.format('D');
const hours = countdown.format('HH');
const minutes = countdown.format('mm');
const seconds = countdown.format('ss');</code></pre><p>Later we’ll add this code in a JS <code>interval</code> that would be called every second, but before that let's set up the react component for it.</p><h3 id="the-countdown-component">The Countdown Component</h3><p>For this we’re going to create a <em>class</em> based component, as we need access to the <code>state</code> of the component because we'll save these 4 values (<code>days</code>, <code>hours</code>, <code>minutes</code>, <code>seconds</code>) in it. By default these values are <code>undefined</code>.</p><pre><code class="language-javascript">import React from 'react';
class Countdown extends React.Component {
state = {
days: undefined,
hours: undefined,
minutes: undefined,
seconds: undefined
};
render() {
const { days, hours, minutes, seconds } = this.state;
return (
&lt;div&gt;
&lt;h1&gt;Countdown&lt;/h1&gt;
&lt;div className="countdown-wrapper"&gt;
&lt;div className="countdown-item"&gt;
{days}
&lt;span&gt;days&lt;/span&gt;
&lt;/div&gt;
&lt;div className="countdown-item"&gt;
{hours}
&lt;span&gt;hours&lt;/span&gt;
&lt;/div&gt;
&lt;div className="countdown-item"&gt;
{minutes}
&lt;span&gt;minutes&lt;/span&gt;
&lt;/div&gt;
&lt;div className="countdown-item"&gt;
{seconds}
&lt;span&gt;seconds&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
);
}
}</code></pre><p>Next, let’s create the <code>interval</code> that runs every second and saves the values in the <code>state</code> of the component. We'll do this <code>interval</code> inside the <code>componentDidMount</code> lifecycle method. We are going to <code>clear</code> the interval in the <code>componentWillUnmount</code> lifecycle method, as we don't want to keep it running after the component is removed from the DOM.</p><pre><code class="language-javascript">import React from 'react';
import moment from 'moment';
class Countdown extends React.Component {
state = {
days: undefined,
hours: undefined,
minutes: undefined,
seconds: undefined
};
componentDidMount() {
this.interval = setInterval(() =&gt; {
const { timeTillDate, timeFormat } = this.props;
const then = moment(timeTillDate, timeFormat);
const now = moment();
const countdown = moment(then - now);
const days = countdown.format('D');
const hours = countdown.format('HH');
const minutes = countdown.format('mm');
const seconds = countdown.format('ss');
this.setState({ days, hours, minutes, seconds });
}, 1000);
}
componentWillUnmount() {
if (this.interval) {
clearInterval(this.interval);
}
}
render() {
const { days, hours, minutes, seconds } = this.state;
return (
&lt;div&gt;
&lt;h1&gt;Countdown&lt;/h1&gt;
&lt;div className="countdown-wrapper"&gt;
&lt;div className="countdown-item"&gt;
{days}
&lt;span&gt;days&lt;/span&gt;
&lt;/div&gt;
&lt;div className="countdown-item"&gt;
{hours}
&lt;span&gt;hours&lt;/span&gt;
&lt;/div&gt;
&lt;div className="countdown-item"&gt;
{minutes}
&lt;span&gt;minutes&lt;/span&gt;
&lt;/div&gt;
&lt;div className="countdown-item"&gt;
{seconds}
&lt;span&gt;seconds&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
);
}
}</code></pre><h3 id="the-css">The CSS</h3><p>We have the countdown functionality all up and running now, so let’s style it a little bit:</p><pre><code class="language-javascript">@import url('https://fonts.googleapis.com/css?family=Lato');
* {
box-sizing: border-box;
}
body {
font-family: 'Lato', sans-serif;
}
h1 {
letter-spacing: 2px;
text-align: center;
text-transform: uppercase;
}
.countdown-wrapper {
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
}
.countdown-item {
color: #111;
font-size: 40px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
line-height: 30px;
margin: 10px;
padding-top: 10px;
position: relative;
width: 100px;
height: 100px;
}
.countdown-item span {
color: #333;
font-size: 12px;
font-weight: 600;
text-transform: uppercase;
}</code></pre><p>Nothing fancy in the CSS; we’re using <code>flexbox</code> to position the items within the wrapper.</p><p>Lastly, let’s create the <code>SVG</code> arc that will be surrounding each item in our countdown.</p><h3 id="the-svgcircle-component">The SVGCircle Component</h3><p>Before we do that, there are a couple of functions that we need in order to create the customizable <code>SVG</code> arc. I found these on <a href="https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle" rel="noopener">StackOverflow</a>. For more information you should go there and read the detailed explanation of the functions.</p><pre><code class="language-javascript">function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
return {
x: centerX + radius * Math.cos(angleInRadians),
y: centerY + radius * Math.sin(angleInRadians)
};
}
function describeArc(x, y, radius, startAngle, endAngle) {
var start = polarToCartesian(x, y, radius, endAngle);
var end = polarToCartesian(x, y, radius, startAngle);
var largeArcFlag = endAngle - startAngle &lt;= 180 ? '0' : '1';
var d = [
'M',
start.x,
start.y,
'A',
radius,
radius,
0,
largeArcFlag,
0,
end.x,
end.y
].join(' ');
return d;
}</code></pre><p>Basically the above function calculates how the arc should be drawn by providing a set of values as: the start and ending points, the radius and the angles.</p><p>Back to our React Component: we’re going to create the <code>svg</code> and we'll have a <code>path</code> tag within it which will draw the arc (the <code>d</code> prop) by giving it a <code>radius</code> property. The other 4 values within the <code>describeArc</code> function are fixed, as we don't want to modify it and we are customizing it to look good for our example.</p><pre><code class="language-javascript">const SVGCircle = ({ radius }) =&gt; (
&lt;svg className="countdown-svg"&gt;
&lt;path
fill="none"
stroke="#333"
stroke-width="4"
d={describeArc(50, 50, 48, 0, radius)}
/&gt;
&lt;/svg&gt;
);</code></pre><p>And we also need a little bit of CSS to position it inside the <code>.countdown-item</code> (See where this component goes in the final result section):</p><pre><code class="language-css">.countdown-svg {
position: absolute;
top: 0;
left: 0;
width: 100px;
height: 100px;
}</code></pre><p>Before adding this component inside the <code>Countdown</code> component, we need to convert the values that we have (<code>days</code>, <code>hours</code>, <code>minutes</code> and <code>seconds</code>) to their corresponding radius values.</p><p>For this we’ll need another simple function that will map a number within a range (in our case the date values) to another range of numbers (in our case, the radius). This function is also from <a href="https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers" rel="noopener">StackOverflow</a>:</p><pre><code class="language-javascript">function mapNumber(number, in_min, in_max, out_min, out_max) {
return (
((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
);
}</code></pre><h3 id="the-final-result">The final result</h3><p>Finally, let’s add the new <code>SVGCircle</code> component inside each of the <code>.countdown-item</code>s and put everything together:</p><pre><code class="language-js">import React from 'react';
import moment from 'moment';
class Countdown extends React.Component {
state = {
days: undefined,
hours: undefined,
minutes: undefined,
seconds: undefined
};
componentDidMount() {
this.interval = setInterval(() =&gt; {
const { timeTillDate, timeFormat } = this.props;
const then = moment(timeTillDate, timeFormat);
const now = moment();
const countdown = moment(then - now);
const days = countdown.format('D');
const hours = countdown.format('HH');
const minutes = countdown.format('mm');
const seconds = countdown.format('ss');
this.setState({ days, hours, minutes, seconds });
}, 1000);
}
componentWillUnmount() {
if (this.interval) {
clearInterval(this.interval);
}
}
render() {
const { days, hours, minutes, seconds } = this.state;
// Mapping the date values to radius values
const daysRadius = mapNumber(days, 30, 0, 0, 360);
const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);
if (!seconds) {
return null;
}
return (
&lt;div&gt;
&lt;h1&gt;Countdown&lt;/h1&gt;
&lt;div className="countdown-wrapper"&gt;
{days &amp;&amp; (
&lt;div className="countdown-item"&gt;
&lt;SVGCircle radius={daysRadius} /&gt;
{days}
&lt;span&gt;days&lt;/span&gt;
&lt;/div&gt;
)}
{hours &amp;&amp; (
&lt;div className="countdown-item"&gt;
&lt;SVGCircle radius={hoursRadius} /&gt;
{hours}
&lt;span&gt;hours&lt;/span&gt;
&lt;/div&gt;
)}
{minutes &amp;&amp; (
&lt;div className="countdown-item"&gt;
&lt;SVGCircle radius={minutesRadius} /&gt;
{minutes}
&lt;span&gt;minutes&lt;/span&gt;
&lt;/div&gt;
)}
{seconds &amp;&amp; (
&lt;div className="countdown-item"&gt;
&lt;SVGCircle radius={secondsRadius} /&gt;
{seconds}
&lt;span&gt;seconds&lt;/span&gt;
&lt;/div&gt;
)}
&lt;/div&gt;
&lt;/div&gt;
);
}
}
const SVGCircle = ({ radius }) =&gt; (
&lt;svg className="countdown-svg"&gt;
&lt;path
fill="none"
stroke="#333"
stroke-width="4"
d={describeArc(50, 50, 48, 0, radius)}
/&gt;
&lt;/svg&gt;
);
// From StackOverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
return {
x: centerX + radius * Math.cos(angleInRadians),
y: centerY + radius * Math.sin(angleInRadians)
};
}
function describeArc(x, y, radius, startAngle, endAngle) {
var start = polarToCartesian(x, y, radius, endAngle);
var end = polarToCartesian(x, y, radius, startAngle);
var largeArcFlag = endAngle - startAngle &lt;= 180 ? '0' : '1';
var d = [
'M',
start.x,
start.y,
'A',
radius,
radius,
0,
largeArcFlag,
0,
end.x,
end.y
].join(' ');
return d;
}
// From StackOverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
return (
((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
);
}</code></pre><p>All you have to do now to use the <code>Countdown</code> component is to pass it the two props (<code>timeTillDate</code> and <code>timeFormat</code>) and you're golden ?:</p><pre><code class="language-javascript">&lt;Countdown
timeTillDate="05 26 2019, 6:00 am"
timeFormat="MM DD YYYY, h:mm a"
/&gt;</code></pre><h3 id="conclusion">Conclusion</h3><p>It was a fun little project with React, wasn’t it? ?</p><p>When I built this I learned a little bit more about how to work with the <code>momentjs</code> library and also with <code>svg</code>s to draw an arc.</p><p>Let me know if you have any questions regarding this tutorial.</p><p>Happy Coding! ?</p><p><em>Originally posted on <a href="https://www.florin-pop.com/blog/2019/05/countdown-built-with-react/" rel="noopener">www.florin-pop.com</a></em></p>
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
