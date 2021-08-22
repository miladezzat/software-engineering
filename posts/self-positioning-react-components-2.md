---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca22d740569d1a4ca5305.jpg"
tags: [React]
description: While React has ways to break the hatch and directly manipula
author: "Milad E. Fahmy"
title: "Self Positioning React Components"
created: "2021-08-15T19:33:43+02:00"
modified: "2021-08-15T19:33:43+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">Self Positioning React Components</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca22d740569d1a4ca5305.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca22d740569d1a4ca5305.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca22d740569d1a4ca5305.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca22d740569d1a4ca5305.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca22d740569d1a4ca5305.jpg" alt="Self Positioning React Components">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>While React has ways to break the hatch and directly manipulate the DOM there are very few reasons to do this. We shouldn’t directly manipulate the DOM unless we have a really good reason to. When we need to we should use the <code>ref</code> property. Only as a last resort should we manipulate the DOM directly as well as change state during a render.</p>
<h3 id="the-problem">The Problem</h3>
<p>The grid snaps at 1024px from a fixed to a fluid grid. We wanted our tutorial tips to be 20px away from their parent element and there wasn’t a way to do this with just css. If the tip was positioned correctly in the fixed grid it would be off when the grid snapped to a fluid view.</p>
<p>The tutorial metadata is applied directly in inline styles of the component which has the highest css specificity. This meant that media queries couldn’t solve this problem because media queries would be overridden by css with higher specificity.</p>
<h3 id="the-solution">The Solution</h3>
<p>The solution needed to be a single set of metadata and a component that knew where it was so it could change its positioning on the fly. Here’s a video of the final component styles changing.</p>
<p>and the component moving with the viewport resize.</p>
<h3 id="element-getclientrects-">Element.getClientRects()</h3>
<p>First things first, we need to know where the parent element is on the page before we can do anything with it. The <code>.getClientRects()</code> <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect" rel="noopener">method</a> does just that. If you query an element on the DOM and call <code>.getClientRects()</code> it’ll return an object of values with the position, height and width of that element in relation to the viewport of the browser. Give it a try on your end.</p>
<figcaption>querying an element on NYTimes.com</figcaption>
</figure>
<h3 id="using-a-stateful-component-to-store-positioning">Using a Stateful Component to store positioning</h3>
<p>We need the component to know where it is at all times. Thinking about that requirement we need a <code>class</code> component that can hold its own state, not a stateless functional component. This is because the user can shrink or expand their viewport past or less than the 1024px threshold which changes our grid to fluid or fixed position. The component needs to be aware of viewport size so it can hold on to its dynamically generated positioning any time the screen size changes.</p>
<h3 id="getters-and-setters">Getters and Setters</h3>
<p>The component has two core functions around dynamic positioning. Setting styles dynamically in relation to where the parent element is on the screen and getting those set styles to render the position of the tip. We’ve named these function methods <code>getStyles</code> and <code>setStyles</code>.</p><pre><code class="language-javascript">/**
* Method for tutorial tip to dynamically set position based on state.
*
* @return {object} with tutorialTip dynamic position style values
*/
, getStyles: function () {
var self = this
, styles = {
top      : self.state.top    || 'auto'
, bottom   : self.state.bottom || 'auto'
// (We'll talk about this positioning later)
, left     : self.state.left   || -9999
, right    : self.state.right  || 'auto'
}
;
// Hide tutorial tip during transitions to prevent flickering. (We'll talk about this later)
if (!this.state.display) {
styles.display = 'none';
}
return styles;
}
view raw</code></pre><pre><code class="language-javascript">/**
* Queries the DOM and dynamically generates values to update state. These values are passed to getStyles
* to update positioning.
*
* @return {void} function mutates state.
*/
, setStyles: function () {
var {step} = this.props
, meta = tutorialMeta[step]
// (We'll talk about this later)
, el = document.querySelector('.step' + step)
// Get queried DOM element's values (top, right, left, width, etc.)
, bounds = el &amp;&amp; el.getBoundingClientRect()
;
if (bounds) {
switch (meta.position) {
case 'right':
this.setState({
top: Math.floor(bounds.top - meta.offsetTop)
, left: Math.floor((bounds.right) + meta.offsetLeft)
, display: true
});
break;
case 'left':
this.setState({
top: Math.floor(bounds.top - meta.offsetTop)
, left: Math.floor((bounds.left) + meta.offsetLeft)
, display: true
});
break;
case 'bottom':
this.setState({
top: Math.floor(bounds.top - meta.offsetTop)
, left: Math.floor((bounds.right - bounds.width) + meta.offsetLeft)
, display: true
});
break;
case 'bottom-left':
this.setState({
top: Math.floor(bounds.top - meta.offsetTop)
, left: Math.floor((bounds.right - bounds.width) + meta.offsetLeft)
, display: true
});
break;
default:
break;
}
}
}</code></pre>
<p>In this particular use cases we load in <code>tutorialMeta</code> JSON data for each tutorial tip and <code>setState</code> accordingly for each tip positioning type. <strong><strong>Note:</strong></strong> This isn’t a requirement for a self positioning component itself. Just information for the tutorial. Examples are instruction text and offset positioning so the tip is 20px away from it’s parent element and centered.</p>
<p>Now, it’s time to take this functionality and hook it into React’s lifecycle methods so the component know’s when to update its own positioning.</p>
<h3 id="connecting-to-react-s-life-cycle-methods">Connecting to React’s Life Cycle Methods</h3>
<p>Let’s hook up our getters and setters so our component knows when to fire them and update its props and state.</p>
<p>Initialization and Destruction:</p><pre><code class="language-javascript">componentDidMount: function () {
window.addEventListener('resize', this.setStyles);
this.setStyles();
}
, componentWillUnmount: function () {
window.removeEventListener('resize', this.setStyles);
}</code></pre>
<p>On component load we need to <code>setStyles</code> since we currently don’t have any styles to get! Remember, the component is going to call <code>.getClientRect()</code>which is going to dynamically set positioning values. Additionally, we don’t want to query the DOM every time we resize the viewport.</p><pre><code class="language-javascript">  , shouldComponentUpdate: function (nextProps, nextState) {
//  We use use lodash at work for convenice methods like isEqual
return !_.isEqual(nextProps, this.props) || !_.isEqual(nextState, this.state);
}
, componentWillReceiveProps: function (nextProps) {
if (nextProps.step !== this.props.step) {
// Step has changed, hide the tutorial box
this.replaceState({
display: false
});
}
}</code></pre>
<p>We check if our props or state has changed. <code>shouldComponentUpdate</code>'s default is to return true if any state changed per React’s <a href="https://facebook.github.io/react/docs/react-component.html#shouldcomponentupdate" rel="noopener">docs</a>. Since we’re also getting data from our container component as props we also need to check for props updates. <strong><strong>Note:</strong></strong> There is global dispatch and data for the entire tutorial like <code>nextStep</code> and <code>currentStep</code> this isn’t a requirement for every use case, just the one that we we’re solving for.</p>
<p>Next up <code>componentWillRecieveProps</code> is fired before a mounted component receives new props (<a href="https://facebook.github.io/react/docs/react-component.html#componentwillreceiveprops" rel="noopener">docs</a>). Using <code>replaceState</code> rather than <code>setState</code> blows away state and sets the component to not show. This is also for a very specific and deliberate for our use case, the flickering problem.</p>
<h3 id="there-was-a-flickering-problem">There was a flickering problem</h3>
<p>The dreaded flicker! It was ever so subtle, but it made our team twitch. There was a flash on initial load and when transitioning the tutorial tip it would hangout just one render step before where it was supposed to be.</p>
<p><strong><strong>The Flash Flicker:</strong></strong> That’s where the <code>-9999</code> position came in. If there’s no positioning to give our component just make sure it’s off the page entirely.</p>
<p><strong><strong>The Hanging Flicker:</strong></strong> Every time we get new props the component sets our display to false removing the component from the DOM entirely during transitions. If you look in <code>componentWillRecieveProps</code> , <code>setStyles</code> and <code>getStyles</code> you’ll see reference to how the component is removed and added with <code>display</code> set to false or true.</p>
<h3 id="the-render">The Render</h3>
<p>This is the function that’s going to get our dynamically generated styles which is called in the styles <code>props</code>. <strong><strong>Note:</strong></strong> <code>_.getClassNameFromObject</code> is our own custom function that’ll create a string which we can add to a component class styles. We’re not going to dig into this function because it’s out of scope of the post. But, if you’re interested please leave a comment on the bottom of the post and I’ll try and answer your questions.</p><pre><code class="language-javascript">, render: function () {
let {step} = this.props;
var props = this.props
, meta = tutorialMeta[step]
, parentClass = _.getClassNameFromObject({
'tutorial-wrap': true
})
, childClass = _.getClassNameFromObject({
'tutorial-tip': true
, 'top'     : _.isEqual(_.get(meta, 'position'), 'top')
, 'right'   : _.isEqual(_.get(meta, 'position'), 'right')
, 'bottom'  : _.isEqual(_.get(meta, 'position'), 'bottom')
, 'left'    : _.isEqual(_.get(meta, 'position'), 'left')
, 'bottom-left':  _.isEqual(_.get(meta, 'position'), 'bottom-left')
})
, text = props.error ? meta.error : meta.text
, btnCls = _.getClassNameFromObject({
'btn btn-special btn--short next': meta.nextButton
, 'hidden': !meta.nextButton
})
;
if (!props.visible) return null;
return (
&lt;div className={parentClass}&gt;
&lt;div className={childClass} style={this.getStyles()}&gt;
&lt;div&gt;
&lt;div className="step-info"&gt;
&lt;span&gt;&lt;span className="step"&gt;&lt;i className="fa fa-question-circle" aria-hidden="true"&gt;&lt;/i&gt;
&amp;nbsp; Step {props.step + 1}&lt;/span&gt; of {tutorialMeta.length}&lt;/span&gt;
&lt;/div&gt;
&lt;div className="step-text"&gt;
&lt;span dangerouslySetInnerHTML={{__html: text}}&gt;&lt;/span&gt;
&lt;/div&gt;
&lt;div className="end-tutorial"&gt;
&lt;a className="clickable" onClick={props.onTutorialFinish}&gt;End tutorial&lt;/a&gt;
&lt;button className={btnCls} onClick={props.onTutorialNext}&gt;Next&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
);
}</code></pre>
<p>Here’s a diagram of our component lifecycle, getters, setters and render methods.</p>
<h3 id="the-entire-component">The Entire Component</h3><pre><code class="language-javascript">var React  = require('react')
, _      = require('lodash')
, tutorialMeta = require('./tutorialMeta.json').tutorial
;
/**
* Tutorial Component
* @class TutorialTip
* @param {props} object that holds global data to render component.
* @param {element} element to put tutorial tip around.
*
* @return {element} with tutorialTip
*/
module.exports = React.createClass({
getInitialState: function () {
return {display: true};
}
, componentDidMount: function () {
window.addEventListener('resize', this.setStyles);
this.setStyles();
}
, componentWillUnmount: function () {
window.removeEventListener('resize', this.setStyles);
}
, shouldComponentUpdate: function (nextProps, nextState) {
return !_.isEqual(nextProps, this.props) || !_.isEqual(nextState, this.state);
}
, componentWillReceiveProps: function (nextProps) {
if (nextProps.step !== this.props.step) {
// Step has changed, hide the tutorial box
this.replaceState({
display: false
});
}
}
/**
* Method for tutorial tip to dynamically set position based on state.
*
* @return {object} with tutorialTip dynamic position style values
*/
, getStyles: function () {
var self = this
, styles = {
top      : self.state.top    || 'auto'
, bottom   : self.state.bottom || 'auto'
, left     : self.state.left   || -9999
, right    : self.state.right  || 'auto'
}
;
// Hide tutorial tip during transitions to prevent flickering.
if (!this.state.display) {
styles.display = 'none';
}
return styles;
}
, componentDidUpdate: function () {
this.setStyles();
}
/**
* Queries the DOM and dynamically generates values to update state. These values are passed to getStyles
* to update positioning.
*
* @return {void} function mutates state.
*/
, setStyles: function () {
var {step} = this.props
, meta = tutorialMeta[step]
, el = document.querySelector('.step' + step)
// Get queried DOM element's values (top, right, left, width, etc.)
, bounds = el &amp;&amp; el.getBoundingClientRect()
;
if (bounds) {
switch (meta.position) {
case 'right':
this.setState({
top: Math.floor(bounds.top - meta.offsetTop)
, left: Math.floor((bounds.right) + meta.offsetLeft)
, display: true
});
break;
case 'left':
this.setState({
top: Math.floor(bounds.top - meta.offsetTop)
, left: Math.floor((bounds.left) + meta.offsetLeft)
, display: true
});
break;
case 'bottom':
this.setState({
top: Math.floor(bounds.top - meta.offsetTop)
, left: Math.floor((bounds.right - bounds.width) + meta.offsetLeft)
, display: true
});
break;
case 'bottom-left':
this.setState({
top: Math.floor(bounds.top - meta.offsetTop)
, left: Math.floor((bounds.right - bounds.width) + meta.offsetLeft)
, display: true
});
break;
default:
break;
}
}
}
, render: function () {
let {step} = this.props;
var props = this.props
, meta = tutorialMeta[step]
, parentClass = _.getClassNameFromObject({
'tutorial-wrap': true
})
, childClass = _.getClassNameFromObject({
'tutorial-tip': true
, 'top'     : _.isEqual(_.get(meta, 'position'), 'top')
, 'right'   : _.isEqual(_.get(meta, 'position'), 'right')
, 'bottom'  : _.isEqual(_.get(meta, 'position'), 'bottom')
, 'left'    : _.isEqual(_.get(meta, 'position'), 'left')
, 'bottom-left':  _.isEqual(_.get(meta, 'position'), 'bottom-left')
})
, text = props.error ? meta.error : meta.text
, btnCls = _.getClassNameFromObject({
'btn btn-special btn--short next': meta.nextButton
, 'hidden': !meta.nextButton
})
;
if (!props.visible) return null;
return (
&lt;div className={parentClass}&gt;
&lt;div className={childClass} style={this.getStyles()}&gt;
&lt;div&gt;
&lt;div className="step-info"&gt;
&lt;span&gt;&lt;span className="step"&gt;&lt;i className="fa fa-question-circle" aria-hidden="true"&gt;&lt;/i&gt;
&amp;nbsp; Step {props.step + 1}&lt;/span&gt; of {tutorialMeta.length}&lt;/span&gt;
&lt;/div&gt;
&lt;div className="step-text"&gt;
&lt;span dangerouslySetInnerHTML={{__html: text}}&gt;&lt;/span&gt;
&lt;/div&gt;
&lt;div className="end-tutorial"&gt;
&lt;a className="clickable" onClick={props.onTutorialFinish}&gt;End tutorial&lt;/a&gt;
&lt;button className={btnCls} onClick={props.onTutorialNext}&gt;Next&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
);
}
});</code></pre>
<h3 id="but-wait-there-s-more-">But wait there’s more!</h3>
<p>We also came up with an interesting solution to avoid adding components all over our application. This is useful if you need to add a series of components to your application like a tutorial.</p>
<p>In <code>setStyles</code> we query the DOM for a specific step rather than include the component multiple times. The container component renders the component once, then on each step change we look for a different step class to render the tutorial component.</p>
<h3 id="that-s-all-folks">That’s all folks</h3>
<p>Hopefully this helps anyone how might need this type of dynamic positioning functionality in their React application.</p>
<p>A big thanks to <a href="https://medium.com/@rundexter">Dexter</a> engineering specifically <a href="https://medium.com/@ilkovich">Daniel Ilkovich</a> and <a href="https://medium.com/@octopi">David Hu</a>for letting me share this code and all of their help and support while building the user tutorial feature on our <a href="http://rundexter.com/" rel="noopener">site</a>.</p>
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
