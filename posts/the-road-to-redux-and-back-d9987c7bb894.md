---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9cb401740569d1a4cacccc.jpg"
tags: [React]
description: "I’ve done some prototype work to demonstrate the benefits of "
author: "Milad E. Fahmy"
title: "The road to Redux and back"
created: "2021-08-16T11:50:16+02:00"
modified: "2021-08-16T11:50:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-redux tag-javascript tag-web-development tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">The road to Redux and back</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9cb401740569d1a4cacccc.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9cb401740569d1a4cacccc.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9cb401740569d1a4cacccc.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9cb401740569d1a4cacccc.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9cb401740569d1a4cacccc.jpg" alt="The road to Redux and back">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
return &lt;h1&gt;Hello, {props.name}&lt;/h1&gt;;
}
function App() {
return (
&lt;div&gt;
&lt;Welcome name="Sara" /&gt;
&lt;Welcome name="Cahal" /&gt;
&lt;Welcome name="Edite" /&gt;
&lt;/div&gt;
);
}</code></pre><p>The <strong><strong>Welcome </strong></strong>component takes a set of properties or props. It uses the prop called <strong><strong>name </strong></strong>to display a personalized welcome message. The containing component is an anonymous &lt;div&gt;. It passes names to the <strong><strong>Welcome </strong></strong>component for three people.</p><p>That’s all well and good. But what happens when you want to display not just (first) name, but last name, address, email, and phone number in the <strong><strong>Welcome </strong></strong>component?</p><pre><code class="language-js">function Welcome(props) {
return &lt;div&gt;
&lt;h1&gt;Hello, {props.first_name} {props.last_name}&lt;/h1&gt;
&lt;ul&gt;
&lt;li&gt; email: {props.email} &lt;/li&gt;
&lt;li&gt; phone: {props.phone} &lt;/li&gt;
&lt;li&gt; address: /* mercifully omitted */ &lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;;
}
function App() {
return (
&lt;div&gt;
&lt;Welcome first_name="Sara" last_name="Smith" email="...", phone="...", address={/*address object*/}/&gt;
&lt;Welcome first_name="Cahal" last_name="Murthi" email="...", phone="...", address={/*address object*/}/&gt;
&lt;Welcome first_name="Edite" last_name="Franco" email="...", phone="...", address={/*address object*/}/&gt;
&lt;/div&gt;
);
}</code></pre><p>Explicitly passing props is noisy. What’s more, if the Welcome component is a composite of several other components, each with their own set of needed properties, you have to pass those to the Welcome component, too.</p><p>Props are not only data, but methods as well. Props are <strong>immutable </strong>by convention.</p><p>If any child wants to change a property, it should be done via a passed-in set method from some container that holds state. The child calls the state set method, updates the state and generates new prop values. Then each child is notified of the property changes. The child that’s doing the state mutation doesn’t know which container holds the state, but doesn’t need to. It calls the set method it is given from some anonymous parent container.</p><p>Here’s another example from the React docs:</p><pre><code class="language-js">class Toggle extends React.Component {
constructor(props) {
super(props);
this.state = {isToggleOn: true};
// This binding is necessary to make `this` work in the callback
this.handleClick = this.handleClick.bind(this);
}
handleClick() {
this.setState(prevState =&gt; ({
isToggleOn: !prevState.isToggleOn
}));
}
render() {
return (
&lt;button onClick={this.handleClick}&gt;
{this.state.isToggleOn ? 'ON' : 'OFF'}
&lt;/button&gt;
);
}
}
ReactDOM.render(
&lt;Toggle /&gt;,
document.getElementById('root')
);</code></pre><p>Although in this case the button has direct access to the state, the common case is that state is passed as properties to child Button presentational component, with an additional set method to change isToggleOn in this component’s state.</p><pre><code class="language-js">handleClick() {
this.setState(prevState =&gt; ({
isToggleOn: !prevState.isToggleOn
}));
}
render() =&gt; &lt;Button
onclick=handleClick.bind(this)
isToggleOn=this.state.isToggleOn /&gt;;
ReactDOM.render(
&lt;Toggle /&gt;,
document.getElementById('root')
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import RootReducer from './app/reducers'
import App from './app/app'
const store = createStore(RootReducer)
ReactDOM.render(
&lt;Provider store={store}&gt;
&lt;App /&gt;
&lt;/Provider&gt;,
document.getElementById('root')
)</code></pre><p>The other two parts are a little more involved: Actions and Reducers. An event such as a keystroke or database query result creates an Action. The Action is then dispatched to be handled by some Resolver, based on the Action type. If you read <a href="https://medium.freecodecamp.org/follow-the-rules-with-seneca-b3cf3d08fe5d" rel="noopener">my previous series</a> on Seneca microservices, you will notice how Redux Actions are similar to Seneca patterns, and Reducers are similar to Seneca Actions.</p><p>Reducers, once triggered, will modify Redux State according to data in the Action message. So a component can kickoff an Action which might invoke a database query or file fetch or whatever, the results of which are attached to the Action as payload and then dispatched to the cloud of Reducers, one of which will (hopefully) pick up where the Action left off and modify part of the State so that components listening to parts of it have the opportunity to be re-rendered.</p><p>There is no passing of props from containers to children, but props are still involved.</p><pre><code class="language-js">import { connect } from 'react-redux'
import { setVisibility } from '../actions'
import Popup from '../components/Popup'
const mapStateToProps = (state, ownProps) =&gt; {
return {
active: ownProps.toggle === state.visibilityToggle
}
}
const mapDispatchToProps = (dispatch, ownProps) =&gt; {
return {
onClick: () =&gt; {
dispatch(setVisibility(ownProps.toggle))
}
}
}
const Toggle = connect(
mapStateToProps,
mapDispatchToProps
)(Popup)
export default Toggle</code></pre><p>In the above, a Popup component is tied to State via property mappings using Redux API methods mapDispatchToProps and mapStateToProps. This code would most likely be included in a container of the Popup component. More on that later.</p><p>The traditional way this is organized is that you have Actions in an<strong> /actions </strong>folder. Usually an index.js is in that folder which imports all the actions so that they can be imported in one line in the dependents that need them. Reducers are in a <strong>/reducers</strong> folder. Components are in a <strong>/components</strong> folder or split between “presentational” <strong>/components </strong>and <strong>/containers. </strong>And the app will be in the root folder.</p><h4 id="all-this-wiring-though">All this wiring, though</h4><p>So you wind up with action files with constants that identify the Actions in the file, and Reducers that use those constants to receive and handle Action types. Every component dealing with state is wired to fire those actions, along with properties that are affected by state change.</p><p>That’s all very well and good, until you start building components and things don’t work right and you wonder stuff like:</p><ul><li>Did I remember to define the action?</li><li>Did I remember to export the action?</li><li>Did I define the reducer?</li><li>Did I include the action constant in my component?</li><li>Did I import it into my reducer?</li><li>Did I make a typo?</li><li>What was the name of that file that had that thing that I forgot now?</li></ul><p>Yeesh! You wind up doing a lot of grepping through your code, assuming you can remember what it is you’re grepping for. One solution to the problem <a href="https://medium.com/@TuckerConnelly/simplifying-redux-architecture-cd50426c941a" rel="noopener">is to make Actions and Reducers co-local</a>. They are codependent, so defining both in a common file makes sense.</p><h3 id="solution-2-back-to-react-with-es6">Solution 2: Back to React with ES6</h3><p>As I started to get a handle on Redux, I noticed others using some techniques that, had I thought of them at the time, would have made dealing with vanilla React a lot easier. So, with Redux being no less low-code than React alone (remember, I’m just working on a simple prototype), I dump Redux.</p><h4 id="spread-and-rest">Spread and rest</h4><p>In <a href="https://medium.com/@jefflowery/carrying-water-4dee1ddb7eae" rel="noopener">Carrying Water,</a> I mention the difference between active and passive carrying of data-in-transit. The former is bad, but the latter is acceptable, because it avoids tight coupling. Data is merely passed-through to the intended recipient. It’s the difference between the Post Office opening a package and re-packaging everything in it in their own packages, versus just sending the one package on its way.</p><p><a href="https://zhenyong.github.io/react/docs/transferring-props.html" rel="noopener">By using the object spread operator</a>, it is possible to pass properties along to children without explicit reference to the properties themselves. While this still “carries water” from container to subcomponents, it does so in an implicit way. All the container knows is it has props to send down. If it has state, it sends those down, too.</p><p>It should be mentioned, though, that the spread operator for objects is not yet an official part of ECMAScript. The Babel transpiler supports it, if it is configured to do so.</p><pre><code class="language-js">{
"presets": [
"latest",
"react"
],
"plugins": ["transform-object-rest-spread", "syntax-object-rest-spread"]
}</code></pre><h4 id="picking-off-properties">Picking off properties</h4><p>One concern is that of passing too much information down to child components. One way to avoid that is for higher-up containers and components to “pick off” the properties they are interested in, and only pass down the rest. This can be done through object destructuring:</p><pre><code class="language-js">var { checked, ...other } = props;</code></pre><p>Here, the prop checked is pulled from the other props, and then other is passed down (without the checked prop [example from <a href="https://zhenyong.github.io/react/docs/transferring-props.html" rel="noopener">the link</a> above]):</p><pre><code class="language-js">function FancyCheckbox(props) {
var { checked, ...other } = props;
var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
// `other` contains { onClick: console.log } but not the checked property
return (
&lt;div {...other} className={fancyClass} /&gt;
);
}</code></pre><h3 id="react-or-redux">React or Redux?</h3><p>When building a prototype to demonstrate some concept or feature, simpler is better. React is conceptually easier to deal with. Redux has a lot going on under the hood, and it has been noted how fine-grained the actions can become. Need to show a spinner? Fire off an action!).</p><p>Tooling surrounding Redux <a href="http://dev.apollodata.com/react/redux.html" rel="noopener">is improving</a>, and <a href="https://github.com/anshulsahni/simplify-redux" rel="noopener">will simplify</a> the overhead of maintaining actions, reducers, mapStateToProps, and matchDispatchToProps, by using <a href="https://github.com/nstraub/simple-react-redux" rel="noopener">more declarative</a> stitching together of the pieces and using implicit rules for mundane wiring.</p>
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
