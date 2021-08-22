---
card: "/images/default.jpg"
tags: [React]
description: "Microinteractions guide a user through your application. They"
author: "Milad E. Fahmy"
title: "How to build animated microinteractions in React"
created: "2021-08-16T10:25:12+02:00"
modified: "2021-08-16T10:25:12+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-animation tag-javascript tag-web-development tag-design ">
<header class="post-full-header">
<h1 class="post-full-title">How to build animated microinteractions in React</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/07/WcvtLCXbGR92P6AIGR-GuGg9UXccQi9Oha57.gif 300w,
/news/content/images/size/w600/2019/07/WcvtLCXbGR92P6AIGR-GuGg9UXccQi9Oha57.gif 600w,
/news/content/images/size/w1000/2019/07/WcvtLCXbGR92P6AIGR-GuGg9UXccQi9Oha57.gif 1000w,
/news/content/images/size/w2000/2019/07/WcvtLCXbGR92P6AIGR-GuGg9UXccQi9Oha57.gif 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/07/WcvtLCXbGR92P6AIGR-GuGg9UXccQi9Oha57.gif" alt="How to build animated microinteractions in React">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
cd search-box-animation
npm install --save material-ui react-tap-event-plugin</code></pre><h4 id="the-component-a-simple-search-box">The Component: a Simple Search Box</h4><p>I’ll create a simple search box. It will comprise two elements: a search icon button and a text box. I’ll create a stateless functional component for the search box. (Stateless functional components are functions that render React components and do not maintain state, i.e. use <code>setState</code>. You can learn more in this <a href="https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.673o1dbcj" rel="noopener">tutorial</a> or my previous <a href="https://hackernoon.com/code-reuse-using-higher-order-hoc-and-stateless-functional-components-in-react-and-react-native-6eeb503c665#c825" rel="noopener">post</a>.)</p><p><code>SearchBox.js</code></p><pre><code class="language-javascript">import React from 'react';
import {TextField, IconButton} from 'material-ui'
import SearchIcon from 'material-ui/svg-icons/action/search';
const SearchBox = ({isOpen, onClick}) =&gt; {
const baseStyles = {
open: {
width: 300,
},
closed: {
width: 0,
},
smallIcon: {
width: 30,
height: 30
},
icon: {
width: 40,
height: 40,
padding: 5,
top: 10
},
frame: {
border: 'solid 1px black',
borderRadius: 5
}
};
const textStyle = isOpen ? baseStyles.open : baseStyles.closed;
const divStyle = Object.assign({}, textStyle, baseStyles.frame);
divStyle.width += baseStyles.icon.width + 5;
return (
&lt;div style={divStyle}&gt;
&lt;IconButton iconStyle={baseStyles.smallIcon} style={baseStyles.icon} onClick={() =&gt; onClick()}&gt;
&lt;SearchIcon /&gt;
&lt;/IconButton&gt;
&lt;TextField name='search' style={textStyle}/&gt;
&lt;/div&gt;
);
};
export  default SearchBox;
const makeExpanding = (Target) =&gt; {
return class extends Component {
constructor(props) {
super(props);
this.state = {isOpen: false};
}
onClick = () =&gt; {
this.setState({isOpen: !this.state.isOpen});
};
render() {
return (
&lt;Target {...this.props}
isOpen={this.state.isOpen}
onClick={this.onClick}
/&gt;
);
}
}
};
export default makeExpanding;</code></pre><p>Update <code>App.js</code> as follows:</p><pre><code class="language-javascript">import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// (Make material-ui happy)
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import SearchBox from './SearchBox'
import makeExpanding from './expanding-animation';
const ExpandingSearchBox = makeExpanding(SearchBox);
class App extends Component {
render() {
//https://css-tricks.com/quick-css-trick-how-to-center-an-object-exactly-in-the-center/
const style = {
position: 'fixed',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
};
return (
&lt;MuiThemeProvider&gt;
&lt;div style={style}&gt;
&lt;ExpandingSearchBox/&gt;
&lt;/div&gt;
&lt;/MuiThemeProvider&gt;
);
}
}
export default App;
</code></pre><p>If you run <code>npm start</code>, you’ll have a search icon that you can click to open and close the text box.</p><p>It works, but the opening and closing is jarring. An animation can smooth the effect.</p><h3 id="animations">Animations</h3><p>There are three general approaches to animations.</p><ol><li>CSS transitions</li><li>CSS animations</li><li>rapid and repeated rendering of an element to simulate motion (manual key framing)</li></ol><p><a href="http://www.w3schools.com/css/css3_transitions.asp" rel="noopener">CSS transitions</a> change a property value (like width) over some time duration. The change doesn’t have to be linear; you can specify functions for changing the values.</p><p><a href="http://www.w3schools.com/css/css3_animations.asp" rel="noopener">CSS animations</a> change the style for an element (like size, color, and position). Each incremental style is a keyframe. You create a keyframe series to achieve a desired effect.</p><p>Both CSS tactics repeatedly render elements to simulate motion. You can do the calculations yourself, i.e. option (3). Several Javascript animation frameworks use this approach, managing the calculations. (I’ll use react-motion in a later example.)</p><p>I will use all these techniques in the examples below, but I’ll start with CSS transitions.</p><h4 id="expanding-the-search-box">Expanding the Search Box</h4><p>The expanding text box animation needs one CSS property: <code>transition</code></p><p>Change <code>expanding-animation.js</code> as follows,</p><pre><code class="language-javascript">import React, {Component} from 'react';
const animationStyle = {
transition: 'width 0.75s cubic-bezier(0.000, 0.795, 0.000, 1.000)'
};
const makeExpanding = (Target) =&gt; {
return class extends Component {
constructor(props) {
super(props);
this.state = {isOpen: false};
}
onClick = () =&gt; {
this.setState({isOpen: !this.state.isOpen});
};
render() {
return (
&lt;Target {...this.props}
isOpen={this.state.isOpen}
onClick={this.onClick}
additionalStyles={{text: animationStyle, frame: animationStyle}}/&gt;
);
}
}
};
export default makeExpanding;</code></pre><p>Looking at the change in line 21, <code>additionalStyles</code>, <code>SearchBox</code> will merge this style with it’s existing styles in line 29 and 31 below. (I’ll return to the transition CSS property in line 2 in a moment.)</p><p>Update <code>SearchBox.js</code></p><pre><code class="language-javascript">import React from 'react';
import {TextField, IconButton} from 'material-ui'
import SearchIcon from 'material-ui/svg-icons/action/search';
const SearchBox = ({isOpen, onClick, additionalStyles}) =&gt; {
const baseStyles = {
open: {
width: 300,
},
closed: {
width: 0,
},
smallIcon: {
width: 30,
height: 30
},
icon: {
width: 40,
height: 40,
padding: 5,
top: 10
},
frame: {
border: 'solid 1px black',
borderRadius: 5
}
};
let textStyle = isOpen ? baseStyles.open : baseStyles.closed;
textStyle = Object.assign(textStyle, additionalStyles ? additionalStyles.text : {});
const divStyle = Object.assign({}, textStyle, baseStyles.frame, additionalStyles ? additionalStyles.frame : {});
divStyle.width += baseStyles.icon.width + 5;
return (
&lt;div style={divStyle}&gt;
&lt;IconButton iconStyle={baseStyles.smallIcon} style={baseStyles.icon} onClick={() =&gt; onClick()}&gt;
&lt;SearchIcon /&gt;
&lt;/IconButton&gt;
&lt;TextField name='search' style={textStyle}/&gt;
&lt;/div&gt;
);
};
export  default SearchBox;
import React, {Component} from 'react';
const animationStyle = {
transform: 'translateY(-150px)',
transition: 'transform 1s ease'
};
const makeMoveUp = (Target) =&gt; {
return class extends Component {
constructor(props) {
super(props);
this.state = {moveTop: false};
}
onClick = () =&gt; {
this.setState({moveTop: !this.state.moveTop});
};
render() {
return (
&lt;Target isOpen={true}
onClick={this.onClick}
additionalStyles={{text: {}, frame: this.state.moveTop ? animationStyle : {}}}/&gt;
);
}
}
};
export default makeMoveUp;
view rawmove-up-animation.js hosted with ❤ by GitHub</code></pre><p>This is like the <code>makeExpanding</code> HOC function, except does a translation (move up). Also, the animation style applies only to the outer frame (<code>div</code>).</p><p>Update <code>App.js</code>,</p><pre><code class="language-javascript">
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// (Make material-ui happy)
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import SearchBox from './SearchBox'
import makeMoveUp from './move-up-animation';
const MoveUpSearchBox = makeMoveUp(SearchBox);
class App extends Component {
render() {
//https://css-tricks.com/quick-css-trick-how-to-center-an-object-exactly-in-the-center/
const style = {
position: 'fixed',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
};
return (
&lt;MuiThemeProvider&gt;
&lt;div style={style}&gt;
&lt;MoveUpSearchBox/&gt;
&lt;/div&gt;
&lt;/MuiThemeProvider&gt;
);
}
}
export default App;
import React, {Component} from 'react';
import {Motion, spring, presets} from 'react-motion'
const makeSpringUp = (Target) =&gt; {
return class extends Component {
constructor(props) {
super(props);
this.state = {moveTop: false};
}
onClick = () =&gt; {
this.setState({moveTop: !this.state.moveTop});
};
render() {
const style = {
translateY: this.state.moveTop ? spring(-150, presets.wobbly) : spring(0)
};
return (
&lt;Motion style={style}&gt;
{({translateY}) =&gt; (
&lt;Target isOpen={true}
onClick={this.onClick}
additionalStyles={{
text: {},
frame: {
transform: `translateY(${translateY}px)`
}
}}/&gt;
)}
&lt;/Motion&gt;
);
}
}
};
export default makeSpringUp;
import {headShake} from 'react-animations';
import {StyleSheet, css} from 'aphrodite';
const styles = StyleSheet.create({
headShake: {
animationName: headShake,
animationDuration: '1s'
}
});
const makeValidationErrorAnimation = (Target) =&gt; {
return class extends Component {
constructor(props) {
super(props);
this.state = {shouldShake: false};
}
onClick = () =&gt; {
this.setState({shouldShake: true}, () =&gt; {
const self = this;
setTimeout(() =&gt; self.setState({shouldShake: false}), 1000);
});
};
render() {
return (
&lt;Target isOpen={true}
onClick={this.onClick}
additionalStyles={{text: {}, frame: {}}}
frameClass={this.state.shouldShake ? css(styles.headShake) : ''}/&gt;
);
}
}
};
export default makeValidationErrorAnimation;
import {TextField, IconButton} from 'material-ui'
import SearchIcon from 'material-ui/svg-icons/action/search';
const baseStyles = {
open: {
width: 300,
},
closed: {
width: 0,
},
smallIcon: {
width: 30,
height: 30
},
icon: {
width: 40,
height: 40,
padding: 5,
top: 10
},
frame: {
border: 'solid 1px black',
borderRadius: 5
}
};
const SearchBox = ({isOpen, query, onClick, onSubmit, onQueryUpdate, additionalStyles, frameClass}) =&gt; {
const handleKeyDown = (event) =&gt; {
const ENTER_KEY = 13;
if (event.keyCode === ENTER_KEY) {
event.preventDefault();
onSubmit();
}
};
let textStyle = isOpen ? baseStyles.open : baseStyles.closed;
textStyle = Object.assign(textStyle, additionalStyles ? additionalStyles.text : {});
const divStyle = Object.assign({}, textStyle, baseStyles.frame, additionalStyles ? additionalStyles.frame : {});
divStyle.width += baseStyles.icon.width + 5;
return (
&lt;div style={divStyle} className={frameClass ? frameClass : ''}&gt;
&lt;IconButton iconStyle={baseStyles.smallIcon} style={baseStyles.icon} onClick={() =&gt; onClick()}&gt;
&lt;SearchIcon /&gt;
&lt;/IconButton&gt;
&lt;TextField name='search'
style={textStyle}
value={query}
onKeyDown={handleKeyDown}
onChange={(event, value) =&gt; onQueryUpdate(value)}/&gt;
&lt;/div&gt;
);
};
export  default SearchBox;
</code></pre><p><code>SearchBox</code> is now a <a href="https://facebook.github.io/react/docs/forms.html" rel="noopener">controlled component</a> (fancy term for using React to manage the text box’s input value). It also provides a callback, <code>onSubmit</code>, for submitting the search query (when a user presses the <em>Enter</em> key).</p><p>You also need to change <code>shake-animation.js</code>. Clicking the search icon should not cause the shake. Instead, I want another component to determine when to ‘shake’. This separates the validation logic from code that controls the animation.</p><p><code>startShake</code> is a flag to reset the animation. But this is an implementation detail. It should be encapsulated, as internal state, in the <code>makeShakeAnimation</code> HOC.</p><pre><code class="language-javascript">import React, {Component} from 'react';
import {headShake} from 'react-animations';
import {StyleSheet, css} from 'aphrodite';
const styles = StyleSheet.create({
headShake: {
animationName: headShake,
animationDuration: '1s'
}
});
const makeShakeAnimation = (Target) =&gt; {
return class extends Component {
constructor(props) {
super(props);
this.state = {startShake: props.shouldShake};
}
componentWillReceiveProps(nextProps) {
this.setState({startShake: nextProps.shouldShake}, () =&gt; {
const self = this;
setTimeout(() =&gt; self.setState({startShake: false}), 1000);
});
//https://css-tricks.com/restart-css-animation/ for discussion on restart
}
render() {
return (
&lt;Target {...this.props}
frameClass={this.state.startShake ? css(styles.headShake) : ''}/&gt;
);
}
}
};
export default makeShakeAnimation;</code></pre><p><code>startShake</code> is dependent on <code>shouldShake</code>. I can use <a href="https://facebook.github.io/react/docs/react-component.html#componentwillreceiveprops" rel="noopener">componentWillReceiveProps</a> to respond to prop changes. (It’s parent, the validation component, provides these props.) So I moved the previous <code>onClick</code> logic to <code>componentWillReceiveProps</code>.</p><p>The change in line 27, <code>{...this.props}</code>, passes all props to the wrapped component, <code>Target</code>. (I need to similarly change the <code>render</code> method in <code>expanding-animation.js</code>. The details are <a href="https://github.com/csepulv/search-box-animation/blob/master/src/expanding-animation.js" rel="noopener">here</a>.)</p><p>I can now add a component that will control when to shake.</p><p>Create <code>search-box-controller.js</code></p><pre><code class="language-javascript">import React, {Component} from 'react';
import makeExpanding from './expanding-animation';
import makeShakingAnimation from './shake-animation';
const makeAnimatedValidationSearchBox = (Target) =&gt; {
const WrappedComponent = makeShakingAnimation(makeExpanding(Target));
return class extends Component {
constructor(props) {
super(props);
this.state = {query: '', hasError: false};
}
onQueryUpdate = (value) =&gt; {
this.setState({query: value, hasError:false});
};
onSubmit = () =&gt; {
this.setState({hasError: true});
};
render() {
return (
&lt;WrappedComponent
onQueryUpdate={this.onQueryUpdate}
query={this.state.query}
onSubmit={this.onSubmit}
shouldShake={this.state.hasError}
/&gt;
);
}
}
};
export default makeAnimatedValidationSearchBox;</code></pre><p>This is another HOC. It does not have visual elements, but it controls the logical behavior of the wrapped component. (<a href="undefined" rel="noopener">Dan Abramov</a> has a good <a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.2660qau6m" rel="noopener">post</a> explaining such separation.) In this case, all queries as erroneous, but in a real application, I’d validate queries and connect to APIs.</p><p>Lastly, I want to highlight that <code>makeAnimatedValidationSearchBox</code> is an HOC that chains two other HOCs.</p><pre><code>const WrappedComponent =makeShakingAnimation(makeExpanding(Target));</code></pre><p>Another small update to<code>App.js</code></p><pre><code class="language-javascript">import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// (Make material-ui happy)
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import SearchBox from './SearchBox'
import makeAnimatedValidationSearchBox from './search-box-controller';
const AnimatedSearchBox = makeAnimatedValidationSearchBox(SearchBox);
class App extends Component {
render() {
//https://css-tricks.com/quick-css-trick-how-to-center-an-object-exactly-in-the-center/
const style = {
position: 'fixed',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
};
return (
&lt;MuiThemeProvider&gt;
&lt;div style={style}&gt;
&lt;AnimatedSearchBox/&gt;
&lt;/div&gt;
&lt;/MuiThemeProvider&gt;
);
}
}
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
