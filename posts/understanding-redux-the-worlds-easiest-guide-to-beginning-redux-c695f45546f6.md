---
card: "https://cdn-media-1.freecodecamp.org/images/1*8cpJBanzu5koQqzkBirvsQ.png"
tags: [Technology]
description: "This is a comprehensive (but simplified) guide for absolute R"
author: "Milad E. Fahmy"
title: "Understanding Redux: The World’s Easiest Guide to Beginning Redux"
created: "2021-08-16T11:43:26+02:00"
modified: "2021-08-16T11:43:26+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-technology tag-react tag-redux tag-programming tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">Understanding Redux: The World’s Easiest Guide to Beginning Redux</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*8cpJBanzu5koQqzkBirvsQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*8cpJBanzu5koQqzkBirvsQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*8cpJBanzu5koQqzkBirvsQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*8cpJBanzu5koQqzkBirvsQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*8cpJBanzu5koQqzkBirvsQ.png" alt="Understanding Redux: The World’s Easiest Guide to Beginning Redux">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
type: "WITHDRAW_MONEY",
amount: "$10,000"
import HelloWorld from "./HelloWorld";
class App extends Component {
state = {
tech : "React"
}
render() {
return &lt;HelloWorld tech={this.state.tech}/&gt;
}
}
export default App;</code></pre><p>Have a good look at the <code>state</code> object.</p><p>There’s just one field, <code>tech</code>, in the <code>state</code> object and it is passed down as <code>prop</code> into the <code>HelloWorld</code> component as shown below:</p><pre><code>&lt;HelloWorld tech={this.state.tech}/&gt;</code></pre><p>Don’t worry about the implementation of the <code>HelloWorld</code> component — yet. It just takes in a <code>tech</code> prop and applies some fancy CSS. That’s all.</p><p>Since this is focused mainly on Redux, I’ll skip the details of the styling.</p><p>So, here’s the challenge.</p><p>How do we refactor our <code>App</code> to use <code>Redux</code> ?</p><p>How do we take away the state object and have it entirely managed by Redux? Remember that Redux is the <strong>state manager </strong>for your app.</p><p>Let’s begin to answer these questions in the next section.</p><h3 id="revisiting-your-knowledge-of-redux">Revisiting your Knowledge of Redux</h3><p>Remember the quote from the official docs ?</p><blockquote>Redux is a predictable state container for JavaScript apps.</blockquote><p>One key phrase in the above sentence is <strong>state container</strong>.</p><p>Technically, you want the <code>state</code> of your application to be managed by Redux.</p><p>This is what makes Redux a <strong>state container</strong><em>.</em></p><p>Your React component state still exists. Redux doesn’t take it away.</p><p>However, Redux will efficiently manage your <strong>overall</strong> application state. Like a bank vault, it’s got a <code>store</code> to do that.</p><p>For the simple <code>&lt;App/&gt;</code> component we’ve got here, the state object is simple.</p><p>Here it is:</p><pre><code>{
tech: "React"
}</code></pre><p>We need to take this out of the <code>&lt;App /&gt;</code> component state, and have it managed by Redux.</p><p>From my earlier explanation, you should remember the analogy between the Bank Vault and the Redux Store. The Bank Vault keeps money, the Redux <code>store</code> keeps the application state object.</p><p>So, what is the first step to refactoring the <code>&lt;App /&gt;</code> component to use Redux?</p><p>Yeah, you got that right.</p><p>Remove the component state from within <code>&lt;App /&gt;</code>.</p><p>The Redux <code>store</code> will be responsible for managing the App’s <code>state</code>. With that being said, we need to remove the current state object from <code>App/&gt;.</code></p><pre><code class="language-js">import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
class App extends Component {
// the state object has been removed.
render() {
return &lt;HelloWorld tech={this.state.tech}/&gt;
}
}
export default App;</code></pre><p>The solution above is incomplete, but right now, <code>&lt;App/&gt;</code> has no state.</p><p>Please install Redux by running <code>yarn add redux</code> from the command line interface (CLI). We need the <code>redux</code> package to do anything right.</p><h3 id="creating-a-redux-store">Creating a Redux Store</h3><p>If the <code>&lt;App /&gt;</code> won’t manage it’s state, then we have to create a Redux Store to manage our application state.</p><p>For a Bank Vault, a couple mechanical engineers were probably hired to create a secure money-keeping facility.</p><p>To create a manageable state-keeping facility for our application, we don’t need mechanical engineers. We’ll do so programmatically using some of the APIs Redux avails to us.</p><p>Here’s what the code to create a Redux <code>store</code> looks like:</p><pre><code class="language-js">import { createStore } from "redux"; //an import from the redux library
let sum = arr.reduce((x,y) =&gt; x + y)
console.log(sum)  //15</code></pre><p>Under the hood, the function passed into <code>arr.reduce</code> is called a <code>reducer</code>.</p><p>In this example, the reducer takes in two values, an <code>accumulator</code> and a <code>currentValue</code> , where <code>x</code> is the <code>accumulator</code> and <code>y</code> is the <code>currentValue.</code></p><p>In the same manner, the Redux Reducer is just a function. A function that takes in <strong>two</strong> parameters. The first being the <code>STATE</code> of the app, and the other the <code>ACTION</code> .</p><p>Oh my gosh! But where does the <code>STATE</code> and <code>ACTION</code> passed into the <code>REDUCER</code> come from?</p><p>When I was learning Redux, I asked myself this question a few times.</p><p>First, take a look at the <code>Array.reduce()</code> example again:</p><pre><code class="language-js">let arr = [1,2,3,4,5]
let sum = arr.reduce((x,y) =&gt; x + y)
console.log(sum)  //15</code></pre><p>The <code>Array.reduce</code> method is responsible for passing in the needed arguments, <code>x</code> and <code>y</code> into the function argument, the <code>reducer</code> . So, the arguments didn’t come out of thin air.</p><p>The same may be said for Redux.</p><p>The Redux reducer is also passed into a certain method. Guess what is it?</p><p>Here you go!</p><pre><code class="language-js">createStore(reducer)</code></pre><p>The <code>createStore</code> factory function. There’s a little more involved in the process as you’ll soon see.</p><p>Like <code>Array.reduce()</code>, <code>createStore()</code> is responsible for passing the arguments into the reducer.</p><p>If you aren’t scared of technical stuff, here’s the stripped down version of the implementation of <code>createStore</code> within the Redux source code.</p><pre><code class="language-js">function createStore(reducer) {
var state;
var listeners = []
function getState() {
return state
}
function subscribe(listener) {
listeners.push(listener)
return unsubscribe() {
var index = listeners.indexOf(listener)
listeners.splice(index, 1)
}
}
function dispatch(action) {
state = reducer(state, action)
listeners.forEach(listener =&gt; listener())
}
dispatch({})
return { dispatch, subscribe, getState }
}</code></pre><p>Don’t beat yourself up if you don’t get the code above. What I really want to point out is within the <code>dispatch</code> function.</p><p>Notice how the <code>reducer</code> is called with <code>state</code> and <code>action</code></p><p>With all that being said, the most minimal code for creating a Redux <code>store</code> is this:</p><pre><code class="language-js">import { createStore } from "redux";
const store = createStore(reducer);   //this has been updated to include the created reducer.</code></pre><h3 id="getting-back-to-the-refactoring-process">Getting back to the Refactoring Process</h3><p>Let’s get back to refactoring the “Hello World” React application to use Redux.</p><p>If I lost you at any point in the previous section, please read the section just one more time and I’m sure it’ll sink in. Better still, you can <a href="https://twitter.com/OhansEmmanuel" rel="noopener">ask me</a> a question.</p><p>Okay so here’s all the code we have at this point:</p><pre><code class="language-js">import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import { createStore } from "redux";
const store = createStore(reducer);
class App extends Component {
render() {
return &lt;HelloWorld tech={this.state.tech}/&gt;
}
}
export default App;</code></pre><p>Makes sense?</p><p>You may have noticed a problem with this code. See Line 4.</p><p>The <code>reducer</code> function passed into <code>createStore</code> doesn’t exist yet.</p><p>Now we need to write one. The reducer is just a function, remember?</p><p>Create a new directory called <code><strong>reducers</strong></code> and create an <code><strong>index.js</strong></code> file in there. Essentially, our reducer function will be in the path <code><strong>src/reducers/index.js</strong></code> .</p><p>First export a simple function in this file:</p><pre><code class="language-js">export default () =&gt; {
}</code></pre><p>Remember, that the <code>reducer</code> takes in two arguments — as established earlier. Right now, we’ll concern ourselves with the first argument, <code>STATE</code></p><p>Put that into the function, and we have this:</p><pre><code class="language-js">export default (state) =&gt; {
}</code></pre><p>Not bad.</p><p>A reducer always returns something. In the initial <code>Array.reduce()</code>reducer example, we returned the <strong>sum</strong> of the accumulator and current value.</p><p>For a Redux <code>reducer</code>, you always return the <code>new state </code>of your application.</p><p>Let me explain.</p><p>After you walk into the bank and make a successful withdrawal, the current amount of money held in the bank’s vault for you is no longer the same. Now, if you withdrew $200, you are now short $200. Your account balance is down $200.</p><p>Again, the Cashier and Vault remain in sync on how much you now have.</p><p>Just like the Cashier, this is exactly how the <code>reducer</code> works.</p><p>Like the Cashier, the <code>reducer</code> always returns the <code>new state</code> of your application. Just in case something has changed. We don’t want to issue the same bank balance even though a withdrawal action was performed.</p><p>We’ll get to the internals of how to change/update the state later on. For now, blind trust will have to suffice.</p><p>Now, back to the problem at hand.</p><p>Since we aren’t concerned about changing/updating the state at this point, we will keep <code>new state</code>being returned as the same <code>state</code> passed in.</p><p>Here’s the representation of this within the <code>reducer</code>:</p><pre><code class="language-js">export default (state) =&gt; {
return state
const store = createStore(reducer, initialState);</code></pre><p>Note how <code>initialState</code> is just an object, and it is exactly what we had as the default state in the React App before we began refactoring.</p><p>Now, here’s all the code we have at this point — with the <code>reducer</code> also imported into <code>App.</code></p><p><code><strong>App.js</strong></code></p><pre><code class="language-js">import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import reducer from "./reducers";
import { createStore } from "redux";
const initialState = { tech: "React " };
const store = createStore(reducer, initialState);
class App extends Component {
render() {
return &lt;HelloWorld tech={this.state.tech}/&gt;
}
}
export default App;</code></pre><p><code><strong>reducers/index.js</strong></code></p><pre><code class="language-js">export default state  =&gt; {
return state
}</code></pre><p>If you’re coding along and try to run the app now, you’ll get an error. Why?</p><p>Have a look at the <code>tech</code> prop passed into <code>&lt;HelloWorld /&gt;</code>. It still reads, <code>this.state.tech</code>.</p><p>There’s no longer a state object attached to <code>&lt;App /&gt;</code>, so that will be <code>undefined</code>.</p><p>Let’s fix that.</p><p>The solution is quite simple. Since the <code>store</code> now manages the state of our application, this means the application <code>STATE</code>object must be retrieved from the <code>store</code>. But how?</p><p>Whenever you create a store with <code>createStore()</code>, the created store has three exposed methods.</p><p>One of these is <code>getState()</code>.</p><p>At any point in time, calling the <code>getState</code> method on the created <code>store</code> will return the current state of your application.</p><p>In our case, <code>store.getState()</code> will return the object <code>{ tech: "React"}</code> since this is the <code>INITIAL STATE</code> we passed into the <code>createStore()</code> method when we created the <code>STORE</code>.</p><p>You see how all this comes together now?</p><p>Hence the <code>tech</code> prop will be passed into <code>&lt;HelloWorld /&gt;</code> as shown below:</p><p><code><strong>App.js</strong></code></p><pre><code class="language-js">import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import { createStore } from "redux";
const initialState = { tech: "React " };
const store = createStore(reducer, initialState);
class App extends Component {
render() {
return &lt;HelloWorld tech={store.getState().tech}/&gt;
}
return state
}</code></pre><p>And that is it! You just learned the Redux basics and successfully refactored a simple React app to use Redux.</p><p>The React application now has its state managed by Redux. Whatever needs to be gotten from the <code>state</code> object will be grabbed from the <code>store</code> as shown above.</p><p>Hopefully, you understood this whole refactoring process.</p><p>For a quicker overview, have a look at this <a href="https://github.com/ohansemmanuel/hello-redux/compare/solution?expand=1" rel="noopener">Github diff</a>.</p><p>With the “Hello World” project, we have taken a good look at some essential Redux concepts. Even though it’s such a tiny project, it provides a decent foundation to build upon!</p><h3 id="possible-gotcha">Possible Gotcha</h3><p>In the just concluded <strong>Hello World</strong> example, a possible solution you may have come up with for grabbing the <code>state</code> from the <code>store</code> may look like this:</p><pre><code class="language-js">class App extends Component {
state = store.getState();
render() {
return &lt;HelloWorld tech={this.state.tech} /&gt;;
}
}</code></pre><p>What do you think? Will this work?</p><p>Just as a reminder, the following two ways are correct ways to initialize a React component’s state.</p><p>(a)</p><pre><code class="language-js">class App extends Component {
constructor(props) {
super(props);
this.state = {}
}
}</code></pre><p>(b)</p><pre><code class="language-js">class App extends Component {
state = {}
type: "withdraw_money"
}</code></pre><p>That’s all, really.</p><p>A Redux action is described as a plain object.</p><p>Please have a look at the action above.</p><p>Do you think only the <code>type</code> field accurately describes your supposed action to make a withdrawal at a bank?</p><p>Hmmm. I don’t think so. How about the amount of money you want to withdraw?</p><p>Many times your action will need some extra data for a complete description. Consider the action below. I argue that this makes for a more well-described action.</p><pre><code class="language-js">{
type: "withdraw_money",
amount: "$4000"
}</code></pre><p>Now, there’s sufficient information describing the action. For the sake of the example, ignore every other detail the action may include, such as your bank account number.</p><p>Other than the <code>type</code> field, the structure of your Redux Action is really up to you.</p><p>However, a common approach is to have a <code>type</code> field and <code>payload</code> field as shown below:</p><pre><code class="language-js">{
type: " ",
payload: {}
}</code></pre><p>The <code>type</code> field describes the action, and all other required data/information that describes the action is put in the <code>payload</code> object.</p><p>For example:</p><pre><code class="language-js">{
type: "withdraw_money",
payload: {
amount: "$4000"
}
}</code></pre><p>So, yeah! That’s what an action is.</p><h3 id="handling-responses-to-actions-in-the-reducer">Handling Responses to Actions in the Reducer</h3><p>Now that you successfully understand what an action is, it is important to see how they become useful in a practical sense.</p><p>Earlier, I did say that a reducer takes in <strong>two</strong> arguments. One <code>state</code>, the other <code>action</code>.</p><p>Here’s what a simple Reducer looks like:</p><pre><code class="language-js">function reducer(state, action) {
//return new state
}</code></pre><p>The <code>action</code> is passed in as the second parameter to the Reducer. But we’ve done nothing with it within the function itself.</p><p>To handle the actions passed into the reducer, you typically write a <code>switch</code> statement within your reducer, like this:</p><pre><code class="language-js">function reducer (state, action) {
switch (action.type) {
case "withdraw_money":
//do something
break;
case "deposit-money":
//do something
break;
default:
return state;
}
}</code></pre><p>Some people seem not to like the <code>switch</code> statement, but it’s basically an <code>if/else</code> for possible values on a single field.</p><p>The code above will <code>switch</code> over the action <code>type</code> and do something based on the type of action passed in. Technically, the <em>do something</em> bit is required to return a new state.</p><p>Let me explain further.</p><p>Assume that you had two hypothetical buttons, button #1 and button #2, on a certain webpage, and your state object looked something like this:</p><pre><code class="language-js">{
isOpen: true,
isClicked: false,
}</code></pre><p>When button #1 is clicked, you want to toggle the <code>isOpen</code> field. In the context of a React app, the solution is simple. As soon as the button is clicked, you would do this:</p><pre><code class="language-js">this.setState({isOpen: !this.state.isOpen})</code></pre><p>Also, let’s assume that when #2 is clicked, you want to update the <code>isClicked</code> field. Again, the solution is simple, and along the lines of this:</p><pre><code class="language-js">this.setState({isClicked: !this.state.isClicked})</code></pre><p>Good.</p><p>With a Redux app, you can’t use <code>setState()</code> to update the state object managed by Redux.</p><p>You have to dispatch an action first.</p><p>Let’s assume the actions are as below:</p><p><strong>#1 :</strong></p><pre><code class="language-js">{
type: "is_open"
}</code></pre><p><strong>#2 :</strong></p><pre><code class="language-js">{
type: "is_clicked"
}</code></pre><p>In a Redux app, every action flows through the reducer.</p><p>All of them. So, in this example, both action #1 and action #2 will pass through the same reducer.</p><p>In this case, how does the reducer differentiate each of them?</p><p>Yeah, you guessed right.</p><p>By switching over the <code>action.type</code> , we can handle both actions without hassle.</p><p>Here is what I mean:</p><pre><code class="language-js">function reducer (state, action) {
switch (action.type) {
case "is_open":
return;  //return new state
case "is_clicked":
return; //return new state
default:
return state;
}
type: "SET_TECHNOLOGY",
text: "React"
}</code></pre><p>For the React-Redux button:</p><pre><code class="language-js">{
type: "SET_TECHNOLOGY",
text: "React-redux"
}</code></pre><p>And finally:</p><pre><code class="language-js">{
type: "SET_TECHNOLOGY",
text: "Elm"
}</code></pre><p>Easy, right?</p><p>Note that the three actions have the same <code>type</code> field. This is because the three buttons all do the same thing. If they were customers in a bank, then they’d all be depositing money, but different amounts of money. The <code>type</code> of action will then be <code>DEPOSIT_MONEY</code> but with different <code>amount</code> fields.</p><p>Also, you’ll notice that the action type is all written in capital letters. That was intentional. It’s not compulsory, but it’s a pretty popular style in the Redux community.</p><p>Hopefully you now understand how I came up with the actions.</p><h4 id="introducing-action-creators">Introducing Action Creators</h4><p>Take a look at the actions we created above. You’ll notice that we are repeating a few things.</p><p>For one, they all have the same <code>type</code> field. If we had to dispatch these actions in multiple places, we’d have to duplicate them all over the place. That’s not so good. Especially because it’s a good idea idea to keep your code DRY.</p><p>Can we do something about this?</p><p>Sure!</p><p>Welcome, Action Creators.</p><p>Redux has all these fancy names, eh? Reducers, Actions, and now, Action Creators :)</p><p>Let me explain what those are.</p><p>Action Creators are simply functions that help you create actions. That’s all. They are functions that return action objects.</p><p>In our particular example, we could create a function that will take in a <code>text</code> parameter and return an action, like this:</p><pre><code class="language-js">export function setTechnology (text) {
return {
type: "SET_TECHNOLOGY",
tech: text
}
import reducer from "../reducers";
const initialState = { tech: "React " };
export const store = createStore(reducer, initialState);</code></pre><p>This is just like we had before. The only difference is that the store is now created in its own <code>index.js</code> file, like having separate cubicles/offices for the different Redux actors.</p><p>Now, if we need the store anywhere within our app, we can safely import the store, as in <code>import store from "./store";</code></p><p>With that being said, the <code>App.js</code> file for this particular example is slightly different from the former.</p><p><code><strong>App.js</strong></code></p><pre><code class="language-js">import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup";
import { store } from "./store";
class App extends Component {
render() {
return [
&lt;HelloWorld key={1} tech={store.getState().tech} /&gt;,
&lt;ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} /&gt;
];
}
}
const ButtonGroup = ({ technologies }) =&gt; (
&lt;div&gt;
{technologies.map((tech, i) =&gt; (
&lt;button
data-tech={tech}
key={`btn-${i}`}
className="hello-btn"
&gt;
{tech}
&lt;/button&gt;
))}
&lt;/div&gt;
);
export default ButtonGroup;</code></pre><p><code>ButtonGroup</code> is a stateless component that takes in an array of technologies, denoted by <code>technologies.</code></p><p>It loops over this array using <code>map</code> and renders a <code>&lt;button&gt;&lt;/button</code> for each of the tech in the array.</p><p>In this example, the buttons array passed in is <code>["React", "Elm", "React-redux"]</code></p><p>The buttons generated have a few attributes. There’s the obvious <code>className</code> for styling purposes. There’s <code>key</code> to prevent the pesky React warning about rendering multiple items without a key prop. Gosh, that error haunts me every time :(</p><p>Lastly, there’s a <code>data-tech</code> attribute on each <code>button</code> too. This is called a <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes" rel="noopener">data attribute</a>. It is a way to store some extra information that doesn’t have any visual representation. It makes it slightly easier to grab certain values off of an element.</p><p>A completely rendered button will look like this:</p><pre><code class="language-js">&lt;button
data-tech="React"
key="btn-1"
{technologies.map((tech, i) =&gt; (
&lt;button
data-tech={tech}
key={`btn-${i}`}
className="hello-btn"
onClick={dispatchBtnAction}
&gt;
{tech}
&lt;/button&gt;
))}
&lt;/div&gt;</code></pre><p>Good. Let’s write the <code>dispatchBtnAction</code> now.</p><p>Don’t forget that the sole aim of this handler is to dispatch an action when a click has happened.</p><p>For example, if you click the React button, dispatch the action:</p><pre><code class="language-js">{
type: "SET_TECHNOLOGY",
tech: "React"
}</code></pre><p>If you click the React-Redux button, dispatch this action:</p><pre><code class="language-js">{
type: "SET_TECHNOLOGY",
tech: "React-redux"
}</code></pre><p>So, here’s the <code>dispatchBtnAction</code> function.</p><pre><code class="language-js">function dispatchBtnAction(e) {
const tech = e.target.dataset.tech;
store.dispatch(setTechnology(tech));
}</code></pre><p>Hmmm. Does the code above make sense to you?</p><p><code>e.target.dataset.tech</code> will get the data attribute set on the button, <code>data-tech</code> . Hence, <code>tech</code> will hold the value of the text.</p><p><code>store.dispatch()</code> is how you dispatch an action in Redux, and <code>setTechnology()</code> is the action creator we wrote earlier!</p><pre><code class="language-js">function setTechnology (text) {
return {
type: "SET_TECHNOLOGY",
text: text
}
console.log(action);
return state;
export const store = createStore(reducer, initialState);</code></pre><p>When a user clicks any of the buttons, thus passing an action to the reducer, the new state we expect the reducer to return should have the action text in there!</p><p>Here’s what I mean.</p><p>Current state is <code>{ tech: "React"}</code></p><p>Given a new action of type <code>SET_TECHNOLOGY</code>, and text, <code>React-Redux</code> :</p><pre><code class="language-js">{
type: "SET_TECHNOLOGY",
text: "React-Redux"
}</code></pre><p>What do you expect the new state to be?</p><p>Yeah, <code>{tech: "React-Redux"}</code></p><p>The only reason we dispatched an action is because we want a new application state!</p><p>Like I mentioned earlier, the common way to handle different action types within a reducer is to use the JavaScript <code>switch</code> statement as shown below:</p><pre><code class="language-js">export default (state, action) =&gt; {
switch (action.type) {
case "SET_TECHNOLOGY":
//do something.
default:
return state;
}
switch (action.type) {
case "SET_TECHNOLOGY":
return {
...state,
tech: action.text
};
default:
return state;
}
switch (action.type) {
case "SET_TECHNOLOGY":
state.tech = action.text;
return state;
default:
return state;
}
};</code></pre><p>This is exactly why the reducer I’ve written returned this:</p><pre><code class="language-js">return {
...state,
tech: action.text
};</code></pre><p>Instead of mutating (or changing) the state received from the reducer, I am returning a <strong>new</strong> object. This object has all the properties of the previous state object. Thanks to the ES6 spread operator, <code>...state</code>. However, the <code>tech</code> field is updated to what comes in from the action, <code>action.text.</code></p><p>Also, every Reducer you write should be a pure function with no side-effects — No API calls or updating a value outside the scope of the function.</p><p>Got that?</p><p>Hopefully, yes.</p><p>Now, the Cashier isn’t ignoring our actions. They’re in fact giving us cash now!</p><p>After doing this, click the buttons. Does it work now?</p><p>Gosh it still this doesn’t work. The text doesn’t update.</p><p>What in the world is wrong this time?</p><h3 id="subscribing-to-store-updates">Subscribing to Store Updates</h3><p>When you visit the bank, let the Cashier know your intended <code>WITHDRAWAL</code> action, and successfully receive your money — so what’s next?</p><p>Most likely, you will receive an alert via email/text or some other mobile notification saying you have performed a transaction, and your new account balance is so and so.</p><p>If you don’t receive mobile notifications, you’ll definitely receive some sort of “personal receipt” to show that a successful transaction was carried out on your account.</p><p>Okay, note the flow. An action was initiated, you received your money, you got an alert for a successful transaction.</p><p>We seem to be having a problem with our Redux code.</p><p>An action has been successfully initiated, we’ve received money (state), but hey, where’s the alert for a successful state update?</p><p>We’ve got none.</p><p>Well, there’s a solution. Where I come from, you subscribe to receive transaction notifications from the bank either by email/text.</p><p>The same is true for Redux. If you want the updates, you’ve got to subscribe to them.</p><p>But how?</p><p>The Redux store, whatever store you create has a <code>subscribe</code> method called like this: <code>store.subscribe().</code></p><p>A well-named function, if you ask me!</p><p>The argument passed into <code>store.subscribe()</code> is a function, and it will be invoked whenever there’s a state update.</p><p>For what it’s worth, please remember that the <strong>argument</strong> passed into <code>store.subscribe()</code> should be a <strong>function</strong>. Okay?</p><p>Now let’s take advantage of this.</p><p>Think about it. After the state is updated, what do we want or expect? We expect a re-render, right?</p><p>So, state has been updated. Redux, please, re-render the app with the new state values.</p><p>Let’s have a look at where the app is being rendered in <code>index.js</code></p><p>Here’s what we’ve got.</p><pre><code class="language-js">ReactDOM.render(&lt;App /&gt;, document.getElementById("root")</code></pre><p>This is the line that renders the entire application. It takes the <code>App/&gt;</code> component and renders it in the DOM. The <code>root</code> ID to be specific.</p><p>First, let’s abstract this into a function.</p><p>See this:</p><pre><code class="language-js">const render = function() {
ReactDOM.render(&lt;App /&gt;, document.getElementById("root")
}</code></pre><p>Since this is now within a function, we have to invoke the function to <code>render</code> the app.</p><pre><code class="language-js">const render = function() {
ReactDOM.render(&lt;App /&gt;, document.getElementById("root")
}
render()</code></pre><p>Now, the <code>&lt;App /&gt;</code> will be rendered just like before.</p><p>Using some ES6 goodies, the function can be made simpler.</p><pre><code class="language-js">const render = () =&gt; ReactDOM.render(&lt;App /&gt;, document.getElementById("root"));
render();</code></pre><p>Having the rendering of the <code>&lt;App/&gt;</code> wrapped within a function means we can now subscribe to updates to the store like this:</p><pre><code class="language-js">store.subscribe(render);</code></pre><p>Where <code>render</code> is the entire render logic for the <code>&lt;App /&gt;</code> — the one we just refactored.</p><p>You understand what’s happening here, right?</p><p>Any time there’s a successful update to the store, the <code>&lt;App/&gt;</code> will now be re-rendered with the new state values.</p><p>For clarity, here’s the <code>&lt;App/&gt;</code> component:</p><pre><code class="language-js">class App extends Component {
render() {
return [
&lt;HelloWorld key={1} tech={store.getState().tech} /&gt;,
&lt;ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} /&gt;
];
}
name: "Ohans Emmanuel",
balance: 1559.30
days: 11,
hours: 31,
minutes: 27,
seconds: 11,
activeSession: "minutes"
return (
&lt;div className="App"&gt;
&lt;Sidebar /&gt;
&lt;Main /&gt;
&lt;/div&gt;
);
};</code></pre><p>I suppose you’re familiar with the structure of a <code>create-react-app</code> project. There’s the entry point of the app, <code>index.js</code> which renders an <code>App</code> component.</p><p>Before moving on to building the Sidebar and Main components, first some CSS house-keeping. Make sure that the DOM node where the app is rendered, <code>#root</code> , takes up the entire height of the viewport.</p><p><code><strong>index.css</strong></code></p><pre><code class="language-css">#root {
height: 100vh;
}</code></pre><p>While you’re at it, you should also remove any unwanted spacing from <code>body</code>:</p><pre><code class="language-css">body {
margin: 0;
padding: 0;
font-family:  sans-serif;
}</code></pre><p>Good!</p><p>The layout of the app will be structured using <strong>Flexbox</strong>.</p><p>Get the Flexbox juice running by making <code>.App</code> a <code>flex-container</code> and making sure it takes up 100%<em> </em>of the available height.</p><p><code><strong>App.css</strong></code></p><pre><code class="language-css">.App {
height: 100%;
display: flex;
color: rgba(189, 189, 192, 1);
}</code></pre><p>Now, we can comfortably get to building the <code>Sidebar</code> and <code>Main</code> components.</p><p>Let’s keep it simple for now.</p><p><code><strong>Sidebar.js</strong></code></p><pre><code class="language-css">import React from "react";
import "./Sidebar.css";
const Sidebar = () =&gt; {
return &lt;aside className="Sidebar"&gt;Sidebar&lt;/aside&gt;;
};
export default Sidebar;</code></pre><p>All that is rendered is the text<em> </em><code>Sidebar</code> within an <code>&lt;aside&gt;</code> element. Also, note that a corresponding stylesheet, <code>Sidebar.css</code> , has been imported too.</p><p>Within <code>Sidebar.css</code> we need to restrict the width of the Sidebar, plus a few other simple styles.</p><p><code><strong>Sidebar.css</strong></code></p><pre><code class="language-css">.Sidebar {
width: 80px;
background-color: rgba(32, 32, 35, 1);
height: 100%;
border-right: 1px solid rgba(189, 189, 192, 0.1);
transition: width 0.3s;
}
/* not small devices  */
@media (min-width: 576px) {
.Sidebar {
width: 320px;
}
}</code></pre><p>Taking a mobile-first approach, the <code>width</code> of the Sidebar will be <code>80px</code> and <code>320px</code> on larger devices.</p><p>Okay, now on to the <code>Main</code> component.</p><p>Like before, we’ll keep this simple.</p><p>Simply render a simple text within a <code>&lt;main&gt;</code> element.</p><p>While developing apps, you want to be sure to build progressively. In other words, build in bits, and make sure that the app works.</p><p>Below’s the <code>&lt;Main&gt;</code> component:</p><pre><code class="language-css">import React from "react";
import "./Main.css";
const Main = () =&gt; {
return &lt;main className="Main"&gt;Main Stuff&lt;/main&gt;;
};
export default Main;</code></pre><p>Again, a corresponding stylesheet, <code>Main.css</code> , has been imported.</p><p>With the rendered elements of both <code>&lt;Main /&gt;</code> and <code>&lt;Sidebar /&gt;</code>, there exist the CSS class names, <code>.Main</code> and <code>.Sidebar</code> .</p><p>Since the components are both rendered within <code>&lt;App /&gt;</code> , the <code>.Sidebar</code>and <code>.Main</code> classes are children of the parent class, <code>.App</code>.</p><p>Remember that <code>.App</code> is a flex-container. Consequently, <code>.Main</code> can be made to fill the remaining space in the viewport like this:</p><pre><code class="language-css">.Main {
flex: 1 1 0;
}</code></pre><p>Now, here’s the full code:</p><pre><code class="language-css">.Main {
flex: 1 1 0;
background-color: rgba(25, 25, 27, 1);
height: 100%;
user: [
{
contact1: 'Alex',
messages: [
'msg1',
'msg2',
'msg3'
]
},
{
contact2: 'john',
messages: [
'msg1',
'msg2',
'msg3'
]
}
]</code></pre><p>Within the <code>state</code> object above is a <code>user</code> field represented by a giant array. Since the user has a number of contacts, those are represented by objects within the array. Oh, since there could be many different messages, these are stored in an array, too.</p><p>At first glance, this may look like a decent solution.</p><p>But is it?</p><p>If you were to receive data from some back-end, the structure may look just like this!</p><p>Good, right?</p><p>No mate. Not so good.</p><p>This is a pretty good representation of data. It seems like it shows the relationship between each entity, but in terms of the state of your front-end application, this is a bad idea. Bad is a strong word. Let’s just say, there’s a better way to do this.</p><p>Here’s how I see it.</p><p>If you had to manage a football team, a good plan would be to pick out the best scorers in the team, and put them in the front to get you goals.</p><p>You can argue that good players can score from wherever — yes. I bet they’ll be more effective when they are well positioned in front of the opposition’s goal post.</p><p>The same goes for the state object.</p><p>Pick out the front runners within the state object, and place them in “front”.</p><p>When I say “front runners”, I mean the fields of the state object you’ll be performing more CRUD actions on. The parts of the state you’ll be Creating, Reading, Updating and Deleting more often than others. The parts of the state that are core to the application.</p><p>This is not an iron-clad rule, but it is a good metric to go by.</p><p>Looking at the current state object and the needs of our application, we can pick out the “front runners” together.</p><p>For one, we’ll be reading the “Messages” field quite often — for each user’s contact. There’s also the need to edit and delete a user’s message.</p><p>Now, that’s a front runner right there.</p><p>The same goes for “Contacts” too.</p><p>Now, let’s place them “in front.”</p><p>Here’s how.</p><p>Instead of having the “Messages” and “Contacts” fields nested, pick them out, and make them primary keys within the state object. Like this:</p><pre><code class="language-js">const state = {
user: [],
messages: [
'msg1',
'msg2'
],
contacts: ['Contact1', 'Contact2']
}</code></pre><p>This is still an incomplete representation, but we have greatly improved the representation of the app’s state object.</p><p>Now let’s keep going.</p><p>Remember that a user can message any of their contacts. Right now, the <code>messages</code> and <code>contact</code> field within the state object are independent.</p><p>After making these fields primary keys within the state object, there’s nothing that shows the relationship between a certain message and the associated contact. They are independent, and that’s not good because we need to know what list of messages belongs to whom. Without knowing that, how do we render the correct messages when a contact is clicked?</p><p>No way. We can’t.</p><p>Here’s one way to handle this:</p><pre><code class="language-js">const state = {
user: [],
messages: [
{
messageTo: 'contact1',
text: "Hello"
},
{
messageTo: 'contact2',
text: "Hey!"
}
],
contacts: ['Contact1', 'Contact2']
}</code></pre><p>So, all I’ve done is make the <code>messages</code> field an array of message objects. objects with a <code>messageTo</code> key. This key shows which contact a particular message belongs to.</p><p>We are getting close. Just a bit of refactoring, and we are done.</p><p>Instead of just an array, a user may be better described by an object — a <code>user </code>object.</p><pre><code class="language-js">user:  {
name,
email,
profile_pic,
status:,
user_id
{
name,
email,
profile_pic,
status,
user_id
},
{
name,
email,
profile_pic,
status,
user_id_2
}
]</code></pre><p>Okay. So far so good.</p><p>The <code>contacts</code> field is now represented by a huge array of <code>user</code> objects.</p><p>However, instead of using an array, we can have the <code>contacts</code> represented by an object, too. Here’s what I mean.</p><p>Instead of wrapping all the user contacts in a giant array, they could also be put in an object.</p><p>See below:</p><pre><code class="language-js">contacts: {
user_id: {
name,
email,
profile_pic,
status,
user_id
},
user_id_2: {
name,
email,
profile_pic,
status,
user_id_2
}
}</code></pre><p>Since objects must have a key value pair, the unique IDs of the contacts are used as keys to their respective user objects.</p><p>Makes sense?</p><p>There’s some advantages to using <a href="https://youtu.be/aJxcVidE0I0" rel="noopener">objects over arrays</a>. There’s also downsides.</p><p>In this application, I’ll mostly be using objects to describe the fields within the state object.</p><p>If you’re not used to this approach, <a href="https://youtu.be/aJxcVidE0I0" rel="noopener">this lovely video</a> explains some of the advantages to it.</p><p>Like I said earlier, there are a few disadvantages to this approach, but I’ll show you how to get over them.</p><p>We have resolved how the <code>contacts</code> field will be designed within the application state object. Now, let’s move unto the <code>messages</code> field.</p><p>We currently have the <code>messages</code> as an array with message objects.</p><pre><code class="language-js">messages: [
{
messageTo: 'contact1',
text: "Hello"
},
{
messageTo: 'contact2',
text: "Hey!"
}
]</code></pre><p>We will now define a more appropriate shape for the message objects. A message object will be represented by the message object below:</p><pre><code class="language-js">{
text,
is_user_msg
text: "Hello there. U good?",
is_user_msg: false
}</code></pre><p>Now, representing the <code>messages</code> field within the state with an object, we should have something like this:</p><pre><code class="language-js">messages: {
user_id: {
text,
is_user_msg
},
user_id_2: {
text,
is_user_msg
}
}</code></pre><p>Notice how I’m also using an object instead of an array again. Also, we’re going to map each message to the unique key, <code>user_id</code> of the contact.</p><p>This is because a user can have different conversations with different contacts, and it is important to show this representation within the state object. For example, when a contact is clicked, we need to know which was clicked!</p><p>How do we do this? Yes, with their <code>user_id</code>.</p><p>The representation above is incomplete but we’ve made a whole lot of progress! The <code>messages</code> field we’ve represented here assumes that each contact (represented by their unique user id) has only one message.</p><p>But, that’s not always the case. A user can have many messages sent back and forth within a conversation.</p><p>So how do we do this?</p><p>The easiest way is to have an array of messages, but instead, I’ll represent this with objects:</p><pre><code class="language-js">messages: {
user_id: {
0: {
text,
is_user_msg
},
1: {
text,
is_user_msg
}
},
user_id_2: {
0: {
text,
is_user_msg
}
}
}</code></pre><p>Now, we are taking into consideration whatever amount of messages are sent within a conversation. One message, two messages, or more, they are now represented in the <code>messages</code> representation above.</p><p>You may be wondering why I have used numbers, <code>0</code>, <code>1</code> and so on to create a mapping for each contact message.</p><p>I’ll explain that next.</p><p>For what it’s worth, the process of removing nested entities from your state object and designing it like we’ve done here is called “Normalizing the State Object”<em>. </em>I don’t want you confused in case you see that somewhere else.</p><h3 id="the-major-problem-with-using-objects-over-arrays">The Major Problem with Using Objects Over Arrays</h3><p>I love the idea of using objects over arrays — for most use cases. There are some caveats to be aware of, though.</p><h4 id="caveat-1-it-s-a-lot-easier-to-iterate-over-arrays-in-your-view-logic"><strong>Caveat #1</strong> : It’s a lot easier to iterate over Arrays in your view logic</h4><p>A common situation you’ll find yourself in is the need to render a list of components.</p><p>For example, to render a list of users given a <code>users</code> prop, your logic would look something like this:</p><pre><code class="language-js">const users = this.props.users;
users.map(user =&gt; {
return &lt;User /&gt;
})</code></pre><p>However, if <code>users</code> were stored in the state as an object, when retrieved and passed on as <code>props</code>, <code>users</code> will remain an object. You can’t use <code>map</code> on objects — and it’s a lot harder to iterate over them.</p><p>So, how do we resolve this?</p><h4 id="solution-1a-"><strong>Solution #1a</strong>:</h4><p>Use <code>Lodash</code> for iterating over objects.</p><p>For the uninitiated, <code>Lodash</code> is a robust JavaScript utility library. Even for iterating over arrays, many would argue that you still use <code>Lodash</code> as it helps deal with falsey values.</p><p>The syntax for using <code>Lodash</code> for iterating over objects isn’t hard to grasp. It looks like this:</p><pre><code class="language-js">//import the library
import _ from "lodash"
//use it
_.map(users, (user) =&gt; {
return &lt;User /&gt;
})</code></pre><p>You call the <code>map</code> method on the <code>Lodash</code> object, <code>_.map()</code>. You pass in the object to be iterated over, and then pass in a callback function like you would with the default JavaScript <code>map</code> function.</p><h4 id="solution-1b-"><strong>Solution #1b:</strong></h4><p>Consider the usual way you’d map over an array to create a rendered list of users:</p><pre><code class="language-js">const users = this.props.users;
users.map(user =&gt; {
return &lt;User /&gt;
})</code></pre><p>Now, assume that <code>users</code> was an object. This means we can’t <code>map</code> over it. What if we could easily convert <code>users</code> to an array without much hassle?</p><p><code>Lodash</code> to the rescue again.</p><p>Here’s what that would look like:</p><pre><code class="language-js">const users = this.props.users; //this is an object.
_.values(users).map(user =&gt; {
return &lt;User /&gt;
})</code></pre><p>You see that?</p><p><code>_.values()</code> will convert the object to an array. This makes <code>map</code> possible!</p><p>Here’s how that works.</p><p>If you had a <code>users</code> object like this:</p><pre><code class="language-js">{
user_id_1: {user_1_object},
user_id_2 {user_2_object},
user_id_3: {user_3_object},
user_id_4: {user_4_object},
}</code></pre><p><code>_.values(users)</code> will convert that to this:</p><pre><code class="language-js">[
{user_1_object},
{user_2_object},
{user_3_object},
{user_4_object},
]</code></pre><p>Yes! An array with the object values. Exactly what you need to iterate over. Problem solved.</p><p>There’s one more caveat. It’s perhaps a bigger one.</p><h4 id="caveat-2-preservation-of-order"><strong>Caveat #2</strong> : Preservation of Order</h4><p>This is perhaps the number one reason people use arrays. Arrays preserve the order of their values.</p><p>You have to see an example to understand this.</p><pre><code class="language-js">const numbers = [0,3,1,6,89,5,7,9]</code></pre><p>Whatever you do, fetching the value of <code>numbers</code> will always return the same array, with the order of the inputs unaltered.</p><p>How about an object?</p><pre><code class="language-js">const numbers = {
0: "Zero",
3: "Three",
1: "One",
6: "Six",
89: "Eighty-nine",
5: "Five",
7: "Seven",
9: "Nine"
0: "Zero",
3: "Three",
1: "One",
6: "Six",
89: "Eighty-nine",
5: "Five",
7: "Seven",
9: "Nine"
const store = createStore(someReducer, initialState);
export default store;</code></pre><p>The Redux <code>createStore</code> needs to be aware of the reducer (remember the store and reducer relationship I explained earlier).</p><p>Now, edit the second line to look like this:</p><pre><code class="language-js">const store = createStore(reducer, {contacts});</code></pre><p>Now, import the <code>reducer</code> , and <code>contacts</code> from the static data:</p><pre><code class="language-js">import reducer from "../reducers";
import { contacts } from "../static-data";</code></pre><p>Since we actually haven’t created any <code>reducers</code> directory, please do so now. Also create an <code>index.js</code> file with this <code>reducers</code> directory.</p><p>Now, create the reducer.</p><p><code><strong>reducers/index.js</strong></code></p><pre><code class="language-js">export default (state, action) =&gt; {
return state;
};</code></pre><p>A reducer is just a function that takes in <code>state</code> and <code>action</code>, and returns a new <code>state</code>.</p><p>If I lost you in the creation of the store, <code>const store = createStore(reducer, {contacts});</code> you should remember that the second argument in <code>createStore</code> is the initial state of the app.</p><p>I have set this to the object <code>{contacts}</code>.</p><p>This is an ES6 syntax, similar to this: <code>{contacts: contacts}</code> with a <code>contacts</code> key and a value of <code>contacts</code> from <code>static-data</code>.</p><p>There’s no way to know that what we’ve done is right. Let’s attempt to fix that.</p><p>In <code>Index.js</code> , here’s what you should have now:</p><p><code><strong>Index.js</strong></code></p><pre><code class="language-js">import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
ReactDOM.render(&lt;App /&gt;, document.getElementById("root"));
registerServiceWorker();</code></pre><p>Like we did with the first example, refactor the <code>ReactDOM.render</code> call to sit inside a <code>render</code> function.</p><pre><code class="language-js">const render = () =&gt; {
return ReactDOM.render(&lt;App /&gt;, document.getElementById("root"));
};</code></pre><p>Then involve the render function to have the App render correctly.</p><pre><code class="language-js">render()</code></pre><p>Now, import the <code>store</code> you created earlier …</p><pre><code class="language-js">import store from "./store";</code></pre><p>And make sure any time the store is updated, the <code>render</code> function is invoked.</p><pre><code class="language-js">store.subscribe(render);</code></pre><p>Good!</p><p>Now, let’s take advantage of this setup.</p><p>Each time the store updates and invokes <code>render</code> , let’s log the <code>state</code> from the store.</p><p>Here’s how:</p><pre><code class="language-js">const render = () =&gt; {
fancyLog();
return ReactDOM.render(&lt;App /&gt;, document.getElementById("root"));
};</code></pre><p>Just call a new function, <code>fancyLog()</code> , that you’ll soon write.</p><p>Here’s the <code>fancyLog</code> function:</p><pre><code class="language-js">function fancyLog() {
console.log("%c Rendered with ? ??", "background: purple; color: #FFF");
console.log(store.getState());
}</code></pre><p>Hmmm. What have I done?</p><p><code>console.log(store.getState())</code> is the bit you’re familiar with. This will log the state retrieved from the store.</p><p>The first line, <code>console.log("%c Rendered with ? ??", "background: purple; color: #fff");</code> will log the text, “Rendered with …”, plus some emoji, and some CSS style to make it distinguishable. The <code>%c</code> written before the “Rendered with …” text makes it possible to use the CSS styling.</p><p>Enough talking. Here’s the complete code:</p><p><code><code><strong>index.js</strong></code></code></p><pre><code class="language-js">import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store";
const render = () =&gt; {
fancyLog();
return ReactDOM.render(&lt;App /&gt;, document.getElementById("root"));
};
render();
store.subscribe(render);
registerServiceWorker();
function fancyLog() {
console.log("%c Rendered with ? ??", "background: purple; color: #fff");
console.log(store.getState());
const { contacts } = store.getState();
return (
&lt;div className="App"&gt;
&lt;Sidebar contacts={contacts} /&gt;
&lt;Main /&gt;
&lt;/div&gt;
);
import User from "./User";
import "./Sidebar.css";
const Sidebar = ({ contacts }) =&gt; {
return (
&lt;aside className="Sidebar"&gt;
{contacts.map(contact =&gt; &lt;User user={contact} key={contact.user_id} /&gt;)}
&lt;/aside&gt;
);
};
export default Sidebar;</code></pre><p>In the code block above, we map over the contacts prop and render a <code>User</code>component for each <code>contact</code>.</p><p>To prevent the React warning key, the contact’s <code>user_id</code> is used as a key. Also, each contact is passed in as a <code>user</code> prop to the <code>User</code> component.</p><h3 id="building-the-user-component">Building the User Component</h3><p>We are rendering a <code>User</code> component within the <code>Sidebar</code> , but this component doesn’t exist yet.</p><p>Please create a <code>User.js</code> and <code>User.css</code> file within the root directory.</p><p>Done that?</p><p>Now, here’s the content of the <code>User.js</code> file:</p><p><code><strong><strong>User.js</strong></strong></code></p><pre><code class="language-js">import React from "react";
import "./User.css";
const User = ({ user }) =&gt; {
const { name, profile_pic, status } = user;
return (
&lt;div className="User"&gt;
&lt;img src={profile_pic} alt={name} className="User__pic" /&gt;
&lt;div className="User__details"&gt;
&lt;p className="User__details-name"&gt;{name}&lt;/p&gt;
&lt;p className="User__details-status"&gt;{status}&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
);
};
...
overflow-y: scroll;
}</code></pre><p>Also, the font is ugly. Let’s change that.</p><p><code><strong><strong>Index.css</strong></strong></code></p><pre><code class="language-css">@import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,700");
body {
...
font-weight: 400;
font-family: "Nunito Sans", sans-serif;
}</code></pre><p>Finally, handle the overall display of the <code>User</code> component.</p><p><code><strong><strong>User.css</strong></strong></code></p><pre><code class="language-css">.User {
display: flex;
align-items: flex-start;
padding: 1rem;
}
.User:hover {
background: rgba(0, 0, 0, 0.2);
cursor: pointer;
}
.User__pic {
width: 50px;
border-radius: 50%;
}
.User__details {
display: none;
}
/* not small devices  */
@media (min-width: 576px) {
.User__details {
display: block;
padding: 0 0 0 1rem;
}
.User__details-name {
margin: 0;
color: rgba(255, 255, 255, 0.8);
font-size: 1rem;
}
import Main from "../components/Main";</code></pre><p>As opposed to the former:</p><pre><code class="language-js">import Sidebar from "./Sidebar";
import Main from "./Main";</code></pre><p>Got that?</p><p>Here are some tips to solve the challenge yourself:</p><ol><li>Check the <code>Sidebar.js</code> import statement for the <code>User</code> component.</li><li>Check <code>Index.js</code> import statement for the <code>App</code> component.</li><li>Check <code>App.js</code> import statement for the <code>store</code></li></ol><p>Once that is done, you’ll have Skypey working as expected!</p><h3 id="refactoring-to-set-initial-state-from-the-reducer">Refactoring to Set Initial State from the Reducer</h3><p>Firstly, please have a look at the creation of the <code>store</code> in <em>store/index.js</em>. In particular, consider this line of code:</p><pre><code class="language-js">const store = createStore(reducer, { contacts });</code></pre><p>The initial state object is passed directly into <code>createStore</code>. Remember that the store is created with the signature, <code>createStore(reducer, initialState)</code>. In this case, the initial state has been set to the object, <code>{contacts: contacts}</code></p><p>Even though this approach works, this is typically used for<em> server side </em>rendering (don’t bother if you don’t know what this means). For now, understand that this approach of setting an initial state in <code>createStore</code> is more used in the real world for server side rendering.</p><p>Right now, remove the initial state in the <code>createStore</code> method.</p><p>We’ll have the initial state of the application set solely by the reducer.</p><p>Trust me, you’ll get the hang of this.</p><p>Here’s what the <code>store/index.js</code> file will look like once you remove the initial state from <code>createStore</code>.</p><pre><code class="language-js">import { createStore } from "redux";
import reducer from "../reducers";
const store = createStore(reducer);
export default store;</code></pre><p>And here’s the current content of the <code>reducer/index.js</code> file:</p><pre><code class="language-js">export default (state, action) =&gt; {
return state;
};</code></pre><p>Please change that to this:</p><pre><code class="language-js">import { contacts } from "../static-data";
export default (state = { contacts }, action) =&gt; {
return state;
};</code></pre><p>So, what’s happening here?</p><p>Using ES6 default parameters, we have set the state parameter to an initial value of <code>{contacts}</code>.</p><p>This is essentially the same as <code>{contacts: contacts}</code>.</p><p>Hence, the <code>return state</code> statement within the reducer will return this value, <code>{contacts: contacts}</code> as the initial state of the application.</p><p>At this point, the app now works — just like before. The only difference here is that the initial state of the application is now managed by the Reducer.</p><p>Let’s keep refactoring.</p><h3 id="reducer-composition">Reducer Composition</h3><p>In all the apps we’ve create so far, we have used just one reducer to manage the entire state of the applications.</p><p>What’s the implication of this?</p><p>It is like having just one Cashier in the entire bank hall. How scalable is that?</p><p>Even if the Cashier can do all the work effectively, it may be more manageable — and perhaps a better customer experience — to have more than one Cashier in the bank hall.</p><p>Someone’s got to attend to everybody, and it’s a lot of work for just one person!</p><p>The same goes with your Redux applications.</p><p>It is common to have multiple reducers in your application as opposed to one reducer handling all the operations of the state. These reducers are then combined into one.</p><p>For example, there could be 5 or 10 Cashiers in the bank hall, but all of them combined all serve one purpose. That’s how this works as well.</p><p>Consider the state object of the Hello World app we built earlier.</p><pre><code class="language-js">{
tech: "React"
return state
export default (state = contacts, action) =&gt; {
return state;
};</code></pre><p>Rename this file to <code>contacts.js</code>.</p><p>This will become the contacts reducer.</p><p>Create a <code>user.js</code> file within the <code>reducers</code> directory.</p><p>This will be the user reducer.</p><p>Here’s the content:</p><pre><code class="language-js">import { generateUser } from "../static-data";
export default function user(state = generateUser(), action) {
return state;
}</code></pre><p>Again, I have created a <code>generateUser</code> function to generate some static user information.</p><p>Using ES6 default parameters, the initial state is set to the result of invoking this function. Therefore <code>return state</code> will now return a user object.</p><p>Right now, we have two different reducers. Let’s combine them for the greater good :)</p><ul><li>Create an <code>index.js</code> file within the reducers directory</li></ul><p>Firstly, import the two reducers, <code>user</code> and <code>contacts</code>:</p><pre><code class="language-js">import user from "./user";
import contacts from "./contacts";</code></pre><p>To combine these reducers, we need the helper function <code>combineReducers</code>from <code>redux</code></p><p>Import it like this:</p><pre><code class="language-js">import { combineReducers } from "redux";</code></pre><p>Now, <code>index.js</code> will export the combination of both reducers like this:</p><pre><code class="language-js">export default combineReducers({
user,
contacts,
});</code></pre><p>Notice that the <code>combineReducers</code> function takes in an object. An object whose shape is exactly like the state object of the application.</p><p>The code block is the same as this:</p><pre><code class="language-js">export default combineReducers({
user: user,
contacts: contacts
user: "me",
messages: "hello",
contacts: ["no one", "khalid"],
activeUserId: 1234
}</code></pre><p>Now, assume that instead of having the values of the keys hardcoded, we wanted it to be represented by function calls. That may look like this:</p><pre><code class="language-js">const state = {
user:  getUser(),
messages: getMsg(),
contacts: getContacts(),
activeUserId: getID()
}</code></pre><p>This assumes that <code>getUser()</code> will also return the previous value, <code>“me”</code>. The same goes for the other replaced functions.</p><p>Still following?</p><p>Now, let’s rename these functions.</p><pre><code class="language-js">const state = {
user:  user(),
messages: messages(),
contacts: contacts(),
activeUserId: activeUserId()
}</code></pre><p>Now, the functions have names identical to their corresponding object keys. Instead of <code>getUser()</code>, we now have <code>user()</code>.</p><p>Let’s get imaginative.</p><p>Imagine that there existed a certain utility function imported from some library. Let’s call this function, <code>killerFunction</code>.</p><p>Now, <code>killerFunction</code> makes it possible to do this:</p><pre><code class="language-js">const state = killerFunction({
user: user,
messages: messages,
contacts: contacts,
activeUserId: activeUserId
})</code></pre><p>What has changed?</p><p>Instead of invoking each of the functions, you just write the function names. <code>killerFunction</code> will take care of invoking the functions.</p><p>Now using ES6, we can simplify the code further:</p><pre><code class="language-js">const state = killerFunction({
user,
messages,
contacts,
activeUserId
})</code></pre><p>This is the same as the previous code block. Assuming the functions are in scope, and have the same name (identifier) as the object key.</p><p>Got that?</p><p>Now, this is kind of how <code>combineReducer</code> from <code>Redux</code> works.</p><p>The values of every key in your state object will be gotten from the <code>reducer</code>. Do not forget that a reducer is just a function.</p><p>Just like <code>killerFunction</code>, <code>combineReducers</code> is capable of making sure the values are gotten from invoking the passed functions.</p><p>All the key and values put together will then result in the state object of the application.</p><p>That is it!</p><p>An important point to always remember is that when using <code>combineReducers</code>, the value returned from each reducer is not the state of the application.</p><p>It is only the <code>value</code> of the particular key they represent in the state object!</p><p>For example, the <code>user</code> reducer returns the value for the <code>user</code> key in the state. Likewise, the <code>messages</code> reducer returns the value for the <code>messages</code> key in the state.</p><p>Now, here’s the complete content of <code>reducers/index.js</code>:</p><pre><code class="language-js">import { combineReducers } from "redux";
import user from "./user";
import contacts from "./contacts";
export default combineReducers({
user,
contacts
import "./Main.css";
const Main = () =&gt; {
return &lt;main className="Main"&gt;Main Stuff&lt;/main&gt;;
};
export default Main;</code></pre><p>It just returns the text, <code>Main Stuff</code>.</p><p>The <code>&lt;Main /&gt;</code> component is responsible for displaying the <code>&lt;Empty /&gt;</code>component when no user is active. As soon as a user is clicked, <code>&lt;Main /&gt;</code>renders the conversations of the clicked user. This could be represented by a component, <code>&lt;ChatWindow /&gt;</code>.</p><p>For this render toggle to work and for <code>&lt;Main /&gt;</code> to render either <code>&lt;Empty /&gt;</code> or <code>&lt;ChatWindow /&gt;</code>, we need to keep track of certain <code>activeUserId</code>.</p><p>For example, by default <code>activeUserId</code> will be null, then <code>&lt;Empty /&gt;</code> will be shown.</p><p>However, as soon as a user is clicked, the <code>activeUserId</code> becomes the <code>user_id</code>of the clicked contact. Now, <code>&lt;Main /&gt;</code> will render the <code>&lt;ChatWindow /&gt;</code>component.</p><p>Cool, huh?</p><p>For this to work, we will keep a new field in the state object, <code>activeUserId</code></p><p>By now, you should know the drill already. To add a new field to the state object, we’ll have this set up in the reducers.</p><p>Create a new file, <code>activeUserId.js</code> in the <code>reducers</code> folder.</p><p>And here’s the content of the file:</p><p><code><strong><strong>reducers/activeUserId.js</strong></strong></code></p><pre><code class="language-js">export default function activeUserId(state = null, action) {
return state;
}</code></pre><p>By default, it returns <code>null</code>.</p><p>Now, hook this newly created reducer to the <code>combineReducer</code> method call like this:</p><pre><code class="language-js">...
import activeUserId from "./activeUserId";
export default combineReducers({
user,
contacts,
activeUserId
import "./Main.css";
const Main = () =&gt; {
return &lt;main className="Main"&gt;Main Stuff&lt;/main&gt;;
};
export default Main;</code></pre><p><strong><strong>now:</strong></strong></p><pre><code class="language-js">import React from "react";
import "./Main.css";
import Empty from "../components/Empty";
import ChatWindow from "../components/ChatWindow";
const Main = ({ user, activeUserId }) =&gt; {
const renderMainContent = () =&gt; {
if (!activeUserId) {
return &lt;Empty user={user} activeUserId={activeUserId} /&gt;;
} else {
return &lt;ChatWindow activeUserId={activeUserId} /&gt;;
}
};
return &lt;main className="Main"&gt;{renderMainContent()}&lt;/main&gt;;
};
export default Main;</code></pre><p>What has changed isn’t difficult to grasp. <code>user</code> and <code>activeUserId</code> are received as props. The return statement within the component has the function <code>renderMainContent</code> invoked.</p><p>All <code>renderMainContent</code> does is check if <code>activeUserId</code> doesn’t exist. If it doesn’t, it renders the empty screen. If it does exist, then the <code>ChatWIndow</code> is rendered.</p><p>Great!</p><p>We don’t have the <code>Empty</code> and <code>ChatWindow</code> components built out yet.</p><p>Forgive me, I’m going to paste in a lot of code at once.</p><p>Edit the <code>Empty.js</code> file to contain this:</p><pre><code class="language-js">import React from "react";
import "./Empty.css";
const Empty = ({ user }) =&gt; {
const { name, profile_pic, status } = user;
const first_name = name.split(" ")[0];
return (
&lt;div className="Empty"&gt;
&lt;h1 className="Empty__name"&gt;Welcome, {first_name} &lt;/h1&gt;
&lt;img src={profile_pic} alt={name} className="Empty__img" /&gt;
&lt;p className="Empty__status"&gt;
&lt;b&gt;Status:&lt;/b&gt; {status}
&lt;/p&gt;
&lt;button className="Empty__btn"&gt;Start a conversation&lt;/button&gt;
&lt;p className="Empty__info"&gt;
Search for someone to start chatting with or go to Contacts to see who
is available
&lt;/p&gt;
&lt;/div&gt;
);
};
export default Empty;</code></pre><p>Oops. What’s all that code???</p><p>Take a step back, it’s not as complex as it seems.</p><p>The <code>&lt;Empty /&gt;</code> component takes in a <code>user</code> prop. This user prop is an object that has the following shape:</p><pre><code class="language-js">{
name,
email,
profile_pic,
status,
user_id:
}</code></pre><p>Using the ES6 destructuring syntax, grab the <code>name</code>, <code>profile_pic</code> and <code>status</code>from the user object:</p><pre><code class="language-js">const { name, profile_pic, status } = user;</code></pre><p>For most users, the <code>name</code> contains two words such as <code>Ohans Emmanuel</code>. Grab the first word and assign it to the variable <code>first_name</code> like this:</p><pre><code class="language-js">const first_name = name.split(" ")[0];</code></pre><p>The return statement just spits out a chunk of markup.</p><p>You’ll see the result of this very soon.</p><p>Before we go ahead, let’s not forget to create a <code>ChatWindow</code> component within the <code>containers</code> directory.</p><p><code>ChatWindow</code> will be responsible for displaying the conversations for an active user contact, and it’s going to do a lot of direct talking to Redux!</p><p>In <code>ChatWIndow.js</code> write the following:</p><pre><code class="language-js">import React from "react";
const ChatWindow = ({ activeUserId }) =&gt; {
return (
&lt;div className="ChatWindow"&gt;Conversation for user id: {activeUserId}&lt;/div&gt;
);
};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
}
.Empty__name {
color: #fff;
}
.Empty__status,
.Empty__info {
padding: 1rem;
}
.Empty__status {
color: rgba(255, 255, 255, 0.9);
border-bottom: 1px solid rgba(255, 255, 255, 0.7);
}
.Empty__img {
border-radius: 50%;
margin: 2rem 0;
}
.Empty__btn {
padding: 1rem;
margin: 1rem 0;
font-weight: bold;
font-size: 1.2rem;
border-radius: 30px;
outline: 0;
}
.Empty__btn:hover {
background: rgba(255, 255, 255, 0.7);
cursor: pointer;
type: "SET_ACTION_ID",
payload: user_id
}</code></pre><p>The type or name of the action will be called <code>SET_ACTION_ID</code>.</p><p>In case you were wondering, it is pretty common to use the snake case with capital letters in action types such as <code>SET_ACTION_ID</code> and not <code>setactionid</code> or <code>set-action-id</code>.</p><p>Also, the action payload will be the <code>user_id</code> of the user to be set as active.</p><p>Let’s now dispatch actions upon user interaction.</p><p>Since this is the first time we’re dispatching actions in this application, create a new <code>actions</code> directory. While at it, also create a <code>constants</code> folder.</p><p>In the <code>constants</code> folder, create a new file, <code>action-types.js</code>.</p><p>This file has the sole responsibility of keeping the action type constants. I’ll explain why this is important, shortly.</p><p>Write the following in <code>action-types.js</code>.</p><p><code><strong><strong>constants/action-types.js</strong></strong></code></p><pre><code class="language-js">export const SET_ACTIVE_USER_ID = "SET_ACTIVE_USER_ID";</code></pre><p>So, why is this important?</p><p>To understand this, we need to investigate where action types are used in a Redux application.</p><p>In most Redux applications, they will show up in two places.</p><p>1. The Reducer</p><p>When you do <code>switch</code> over the action type in your reducers:</p><pre><code class="language-js">switch(action.type)  {
case "WITHDRAW_MONEY":
doSomething();
break;
}</code></pre><p>2. The Action creator</p><p>Within the action creator, you also write code that resembles this:</p><pre><code class="language-js">export const seWithdrawAmount = amount =&gt; ({
type: "WITHDRAW_MONEY,
payload: amount
})</code></pre><p>Now, have a look at the reducer and action creator logic above. What is common to both?</p><p>The <code>”WITHDRAW_MONEY”</code> string!</p><p>As your application grows and you have lots of these strings flying around the place, you (or someone else) may someday make the mistake of writing <code>”WITDDRAW_MONEY”</code> or <code>”WITHDRAW_MONY”</code> instead of <code>”WITHDRAW_MONEY_”</code></p><p>The point I’m trying to make is that using raw strings like this makes it easier to have a typo. From experience, bugs that come from typos are super annoying. You may end up searching for so long, only to see the problem was caused by a very small miss on your end.</p><p>Prevent yourself from having to deal with this hassle.</p><p>A good way to do that is to store the strings as constants in a separate file. This way, instead of writing the raw strings in multiple places, you just import the string from the declared constant.</p><p>You declare the constants in one place, but can use them in as many places as possible. No typos!</p><p>This is exactly why we have created the <code>constants/action-types.js</code> file.</p><p>Now, let’s create the action creator.</p><p><code><strong><strong>action/index.js</strong></strong></code></p><pre><code class="language-js">import { SET_ACTIVE_USER_ID} from "../constants/action-types";
export const setActiveUserId = id =&gt; ({
type: SET_ACTIVE_USER_ID,
payload: id
});</code></pre><p>As you can see, I have imported the action type string from the constants folder. Just like I explained earlier.</p><p>Again, the action creator is just a function. I have called this function <code>setActiveUserId</code>. It’ll take in an <code>id</code> of a user and return the action (that is, the object) with the type and payload rightly set.</p><p>With that in place, what’s left is dispatching this action when a user clicks a user, and doing something with the dispatched action within our reducers.</p><p>Let’s keep moving.</p><p>Take a look at the <code>User.js</code> component.</p><p>The first line of the <code>return</code> statement is a <code>div</code> with the class name, <code>User</code>:</p><pre><code class="language-js">&lt;div className="User"&gt;</code></pre><p>This is the right place to set up the click handler. As soon as this <code>div</code> is clicked, we will dispatch the action we just created.</p><p>So, here’s the change:</p><pre><code class="language-js">&lt;div className="User" onClick={handleUserClick.bind(null, user)}&gt;</code></pre><p>And the <code>handleUserClick</code> function is right here:</p><pre><code class="language-js">function handleUserClick({ user_id }) {
store.dispatch(setActiveUserId(user_id));
}</code></pre><p>Where <code>setActiveUserId</code> has been imported from where? The action creator!</p><pre><code class="language-js">import { setActiveUserId } from "../actions";</code></pre><p>Now, below’s all the <code>User.js</code> code you should have at this point:</p><p><code><strong><strong>containers/User.js</strong></strong></code></p><pre><code class="language-js">import React from "react";
import "./User.css";
import store from "../store";
import { setActiveUserId } from "../actions";
const User = ({ user }) =&gt; {
const { name, profile_pic, status } = user;
return (
&lt;div className="User" onClick={handleUserClick.bind(null, user)}&gt;
&lt;img src={profile_pic} alt={name} className="User__pic" /&gt;
&lt;div className="User__details"&gt;
&lt;p className="User__details-name"&gt;{name}&lt;/p&gt;
&lt;p className="User__details-status"&gt;{status}&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
);
};
function handleUserClick({ user_id }) {
store.dispatch(setActiveUserId(user_id));
}
export default User;</code></pre><p>To dispatch the action, I also had to import the <code>store</code> and called the method, <code>store.dispatch()</code>.</p><p>Also note that I have used the ES6 destructuring syntax to grab the <code>user_id</code>from the <code>user</code> argument in <code>handleUserClick</code>.</p><p>If you’re coding along, as I recommend, click any of the user contacts and inspect the logs. You can add a console log to the <code>handleUserClick</code> like this:</p><pre><code class="language-js">function handleUserClick({ user_id }) {
console.log(user_id);
store.dispatch(setActiveUserId(user_id));
}</code></pre><p>You’ll find the logged user id of the user contact.</p><p>As you may have already noticed, the action is being dispatched, but nothing is changing on the screen. The <code>activeUserId</code> isn’t set in the state object. This is because right now, the reducers know nothing about the dispatched action.</p><p>Let’s fix this, but don’t forget to remove the <code>console.log(user_id)</code> after inspecting the logs.</p><p>Have a look at the <code>activeUserId</code> reducer:</p><pre><code class="language-js">export default function activeUserId(state = null, action) {
return state;
}</code></pre><p><strong><strong>reducer/activeUserId.js</strong></strong></p><pre><code class="language-js">import { SET_ACTIVE_USER_ID } from "../constants/action-types";
export default function activeUserId(state = null, action) {
switch (action.type) {
case SET_ACTIVE_USER_ID:
return action.payload;
default:
return state;
}
const ChatWindow = ({ activeUserId }) =&gt; {
return (
&lt;div className="ChatWindow"&gt;Conversation for user id: {activeUserId}&lt;/div&gt;
);
};
export default ChatWindow;</code></pre><p>Not very helpful.</p><p>Update the code to this:</p><pre><code class="language-js">import React from "react";
import store from "../store";
import Header from "../components/Header";
const ChatWindow = ({ activeUserId }) =&gt; {
const state = store.getState();
const activeUser = state.contacts[activeUserId];
return (
&lt;div className="ChatWindow"&gt;
&lt;Header user={activeUser} /&gt;
&lt;/div&gt;
);
};
import "./Header.css";
function Header({ user }) {
const { name, status } = user;
return (
&lt;header className="Header"&gt;
&lt;h1 className="Header__name"&gt;{name}&lt;/h1&gt;
&lt;p className="Header__status"&gt;{status}&lt;/p&gt;
&lt;/header&gt;
);
}
export default Header;</code></pre><p>It’s a stateless functional component that renders a <code>header</code> element and <code>h1</code>and <code>p</code> tags to hold the <em>name</em> and <em>status</em> of the active user.</p><p>Remember that the active user is the clicked user from the sidebar.</p><p>The styles for the <code>&lt;Header /&gt;</code> component are equally simple. Here they are:</p><pre><code class="language-css">.Header {
padding: 1rem 2rem;
border-bottom: 1px solid rgba(189, 189, 192, 0.2);
}
.Header__name {
color: #fff;
export default function messages(state = getMessages(10), action) {
return state;
}</code></pre><p>To generate random messages, I have imported the <code>getMessages</code> function from <code>static-data</code></p><p>This function takes an amount, represented by a number. The <code>getMessages</code>function will then generate that amount of messages for each user contact.</p><p>For example, <code>getMessages(10)</code> will generate 10 messages per user contact.</p><p>Now, include the reducer in the <code>combineReducers</code> function call in <code>reducers/index.js</code></p><p><code><strong><strong>reducers/index.js</strong></strong></code></p><pre><code class="language-js">import messages from "./messages";
export default combineReducers({
user,
messages,
contacts,
activeUserId
import Chats from "../components/Chats";
...
return (
&lt;div className="ChatWindow"&gt;
&lt;Header user={activeUser} /&gt;
&lt;Chats /&gt;
&lt;/div&gt;
);</code></pre><p>The <code>&lt;Chats/&gt;</code> component will take the list of messages from the state object, map over these, and then render them beautifully.</p><p>Remember that the messages passed into <code>Chats</code> are specifically the messages for the active user!</p><p>Whereas <code>state.messages</code> holds all the messages for every user contact, <code>state.messages[activeUserId]</code> will fetch the messages for the active user.</p><p>This is why every conversation is mapped to the user id of the user — for easy retrieval as we have done.</p><p>Grab the active user’s messages and pass them as props in <code>Chats</code>.</p><p><code><strong><strong>containers/ChatWindow.js</strong></strong></code></p><pre><code class="language-js">...
import Chats from "../components/Chats";
...
const activeMsgs = state.messages[activeUserId];
return (
&lt;div className="ChatWindow"&gt;
&lt;Header user={activeUser} /&gt;
&lt;Chats messages={activeMsgs} /&gt;
&lt;/div&gt;
import _ from "lodash";
import Chats from "../components/Chats";
...
const activeMsgs = state.messages[activeUserId];
return (
&lt;div className="ChatWindow"&gt;
&lt;Header user={activeUser} /&gt;
&lt;Chats messages={_.values(activeMsgs)} /&gt;
&lt;/div&gt;
);</code></pre><p>Now, instead of passing <code>activeMsgs</code>, we pass in <code>_.values(activeMsgs)</code>.</p><p>There’s one more important step before we view the results.</p><p>The component <code>Chats</code> has not been created.</p><p>In <code>Chats.js</code>, write the following. I’ll explain afterwards.</p><p><code><strong><strong>containers/Chat.js</strong></strong></code></p><pre><code class="language-js">import React, { Component } from "react";
import "./Chats.css";
const Chat = ({ message }) =&gt; {
const { text, is_user_msg } = message;
return (
&lt;span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}&gt;{text}&lt;/span&gt;
);
};
class Chats extends Component {
render() {
return (
&lt;div className="Chats"&gt;
{this.props.messages.map(message =&gt; (
&lt;Chat message={message} key={message.number} /&gt;
))}
&lt;/div&gt;
);
}
}
export default Chats;</code></pre><p>It isn’t too much to comprehend, but I’ll explain what’s going on.</p><p>Firstly, have a look at the the <code>Chats</code> component. You’ll notice that I have used a class-based component here. You’ll see why later on.</p><p>In the render function, we <code>map</code> over the <code>messages</code> props and for each <code>message</code> , we return a <code>Chat</code> component.</p><p>The <code>Chat</code> component is super simple:</p><pre><code class="language-js">const Chat = ({ message }) =&gt; {
const { text, is_user_msg } = message;
return (
&lt;span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}&gt;{text}&lt;/span&gt;
);
};</code></pre><p>For each message that’s passed in, the <code>text</code> content of the message and the <code>is_user_msg</code> flag are both grabbed using the ES6 destructuring syntax, <code>const { text, is_user_msg } = message;</code></p><p>The return statement is more interesting.</p><p>A simple <code>span</code> tag is rendered.</p><p>Strip out some of the <code>JSX</code> magic, and here’s the simple form of what is rendered:</p><pre><code class="language-js">&lt;span&gt; {text} &lt;/span&gt;</code></pre><p>The text content of the message is wrapped in a <code>span</code> element. Simple.</p><p>However, we need to differentiate between the application user’s message, and the contact’s message.</p><p>Don’t forget that a conversation happens with at least two people sending messages back and forth.</p><p>If the message being rendered is the user’s message, we want the rendered markup to be this:</p><pre><code>&lt;span className="Chat  is-user-msg"&gt; {text} &amp;lt;/span&gt;</code></pre><p>And if not, we want this:</p><pre><code class="language-js">&lt;span className="Chat  is-user-msg"&gt; {text} &lt;/span&gt;</code></pre><p>Note that what’s changed is the <code>is-user-msg</code> class being toggled.</p><p>This way we can specifically style the user’s message using the css selector shown below:</p><pre><code class="language-js">.Chat.is-user-msg {
display: flex;
flex-direction: column;
height: 100vh;
flex: 1 1 0;
display: flex;
flex-direction: column;
align-items: flex-start;
width: 85%;
margin: 0 auto;
overflow-y: scroll;
}
.Chat {
margin: 1rem 0;
color: #fff;
padding: 1rem;
background: linear-gradient(90deg, #1986d8, #7b9cc2);
max-width: 90%;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
}
.Chat.is-user-msg {
margin-left: auto;
background: #2b2c33;
border-top-right-radius: 0;
border-bottom-right-radius: 0;
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
}
@media (min-width: 576px) {
.Chat {
max-width: 60%;
}
background: #2b2c33;
}</code></pre><p>I believe you can make sense of everything else.</p><p>So far so good!</p><p>I’m really excited about how far we’ve come. One last step, and the chat window is completely built!</p><p>Let’s build the Message Input component.</p><p>We’ve had to build more difficult components. This one won’t be difficult to build.</p><p>However, there’s one point to consider.</p><p>The Input component will be a controlled component. Therefore we will be storing the input value in the application state object.</p><p>For this, we’ll need a new field called <code>typing</code> in the state object.</p><p>Let’s get that in there.</p><p>For our considerations, whenever a user types, we will dispatch a <code>SET_TYPING_VALUE</code> action type.</p><p>Be sure add this constant in the <code><strong><strong>constants/action-types.js</strong></strong></code> file:</p><pre><code class="language-js">export const SET_TYPING_VALUE = "SET_TYPING_VALUE";</code></pre><p>Also, the shape of the dispatched action will look like this:</p><pre><code class="language-js">{
type: SET_TYPING_VALUE,
payload: "input value"
}</code></pre><p>Where the <code>payload</code> of the action is the value typed in the input. Let’s create an action creator to handle the creation of this action:</p><p><code><strong><strong>actions/index.js</strong></strong></code></p><pre><code class="language-js">import {
SET_ACTIVE_USER_ID,
SET_TYPING_VALUE
} from "../constants/action-types";
…
export const setTypingValue = value =&gt; ({
type: SET_TYPING_VALUE,
payload: value
})</code></pre><p>Now, let’s create a new <code>typing</code> reducer, one that will take this created action into consideration.</p><p><code><strong><strong>reducers/typing.js</strong></strong></code></p><pre><code class="language-js">import { SET_TYPING_VALUE } from "../constants/action-types";
export default function typing(state = "", action) {
switch (action.type) {
case SET_TYPING_VALUE:
return action.payload;
default:
return state;
}
import typing from "./typing";
export default combineReducers({
user,
messages,
typing,
contacts,
activeUserId
});</code></pre><p>Be sure to inspect the logs and confirm that a <code>typing</code> field is indeed attached to the state object.</p><p>Okay. Let’s now create the actual <code>MessageInput</code> component. Since this component will talk directly to the Redux store for setting and getting its typing value, it should be created in the <code>containers</code> directory.</p><p>While at it, also create a <code>MessageInput.css</code> file as well.</p><p><code><strong><strong>containers/MessageInput</strong></strong></code></p><pre><code class="language-js">import React from "react";
import store from "../store";
import { setTypingValue } from "../actions";
import "./MessageInput.css";
const MessageInput = ({ value }) =&gt; {
const handleChange = e =&gt; {
store.dispatch(setTypingValue(e.target.value));
};
return (
&lt;form className="Message"&gt;
&lt;input
className="Message__input"
onChange={handleChange}
value={value}
placeholder="write a message"
/&gt;
&lt;/form&gt;
);
};
export default MessageInput;</code></pre><p>Nothing magical happening up there.</p><p>Whenever the user types into the input box, the <code>onChange</code> event is fired. This is turn fires the <code>handleChange</code> function. <code>handleChange</code> in turn dispatches the <code>setTypingValue</code> action we created earlier. This time, passing the required payload, <code>e.target.value</code>.</p><p>We’ve created the component, but to show up in the chat window we need to include it in the return statement of <code>ChatWindow.js</code>:</p><pre><code class="language-js">...
import MessageInput from "./MessageInput";
const { typing } = state;
return (
&lt;div className="ChatWindow"&gt;
&lt;Header user={activeUser} /&gt;
&lt;Chats messages={_.values(activeMsgs)} /&gt;
&lt;MessageInput value={typing} /&gt;
&lt;/div&gt;
);</code></pre><p>And now, we’ve got this working!</p><p>Uh, but it is really ugly :(</p><p>Let’s make it beautiful.</p><p><code><strong><strong>containers/MessageInput.css</strong></strong></code></p><pre><code class="language-css">.Message {
width: 80%;
margin: 1rem auto;
}
.Message__input {
width: 100%;
padding: 1rem;
background: rgba(0, 0, 0, 0.8);
color: #fff;
border: 0;
border-radius: 10px;
font-size: 1rem;
outline: 0;
&lt;form className="Message" onSubmit={handleSubmit}&gt;
...
&lt;/form&gt;
...</code></pre><p>Think about it for a minute. To update the list of messages in the conversation…we need to dispatch an action!</p><p>This action needs to take the <code>value</code> in the input box, and add it to the messages of the active user.</p><p>Okay, so this looks like a good shape for the action:</p><pre><code class="language-js">{
type: "SEND_MESSAGE",
payload: {
message,
userId
}
}</code></pre><p>Got that?</p><p>Now, let’s write the <code>handleSubmit</code> function:</p><pre><code class="language-js">//first retrieve the current state object
const state = store.getState();
const handleSubmit = e =&gt; {
e.preventDefault();
const { typing, activeUserId } = state;
store.dispatch(sendMessage(typing, activeUserId));
};</code></pre><p>Here’s what is going on within the <code>handleSubmit</code> function:</p><p>With <code>e.preventDefault()</code>, I think you already know what that does. The <code>typing</code> value and <code>activeUserId</code> are fetched from the <code>state</code> since they’ll both be used to create the dispatched action.</p><p>And finally, the action is dispatched with <code>store.dispatch(sendMessage(typing, activeUserId))</code>.</p><p>Oops, but with an action creator, <code>sendMessage</code>.</p><p>In <code><strong><strong>actions/index.js</strong></strong></code>, create the <code>sendMessage</code> action creator:</p><pre><code class="language-js">import {
...
SEND_MESSAGE
} from "../constants/action-types";
export const sendMessage = (message, userId) =&gt; ({
type: SEND_MESSAGE,
payload: {
message,
userId
}
})</code></pre><p>That also means the <code>SEND_MESSAGE</code> action type constant needs to be created in <code><strong><strong>constants/action-types.js</strong></strong></code>.</p><pre><code class="language-js">export const SEND_MESSAGE = "SEND_MESSAGE";</code></pre><p>Before testing the code, you should not forget to update the action creator imports in <code><strong><strong>MessageInput.js</strong></strong> </code>to include <code>sendMessage</code>.</p><pre><code class="language-js">import { setTypingValue, sendMessage } from "../actions";</code></pre><p>So try it out. Does the code work?</p><p>Uh, no it doesn’t.</p><p>The form is submitted, the page doesn’t reload due to the form submission, the action is dispatched, but still no updates.</p><p>We’ve done nothing wrong, except that the action type hasn’t been catered for in any of the reducers.</p><p>The reducers know nothing about this newly created action of type, <code>SEND_MESSAGE</code>.</p><p>Let’s fix that next.</p><h3 id="updating-the-message-state">Updating the Message State</h3><p>Here’s a list of all the reducers we’ve got at this point:</p><pre><code>activeUserId.js
contacts.js
messages.js
typing.js
user.js</code></pre><p>Which of these do you think should be concerned with updating the messages in a user conversation?</p><p>Yes, the <code>messages</code> reducer.</p><p>Here’s the current content of the <code>messages</code> reducer:</p><pre><code class="language-js">import { getMessages } from "../static-data";
export default function messages(state = getMessages(10), action) {
return state;
}</code></pre><p>Not so much going on in there.</p><p>Import the <code>SEND_MESSAGE</code> action type, and let’s begin to handle that in this <code>messages</code> reducer.</p><pre><code class="language-js">import { getMessages } from "../static-data";
import { SEND_MESSAGE } from "../constants/action-types";
export default function messages(state = getMessages(10), action) {
switch (action.type) {
case SEND_MESSAGE:
return "";
default:
return state;
}
number: 10,
text: "the text typed",
is_user_msg: true
}</code></pre><p><code>is_user_msg</code> will always be true for these messages. They come from the user!</p><p>Now, let’s represent this with some code.</p><p>I’m going to explain this well, because the code may look complex at first.</p><p>Anyway, here is the representation within the <code>switch</code> block of the <code>messages</code>reducer:</p><pre><code class="language-js">switch (action.type) {
case SEND_MESSAGE:
const { message, userId } = action.payload;
const allUserMsgs = state[userId];
const number = +_.keys(allUserMsgs).pop() + 1;
return {
...state,
[userId]: {
...allUserMsgs,
[number]: {
number,
text: message,
is_user_msg: true
}
}
};
default:
return state;
}</code></pre><p>Let’s go over this line by line.</p><p>Just after the <code>case SEND_MESSAGE:</code>, we keep a reference to the <code>message</code> and <code>userId</code> passed in from the action.</p><pre><code class="language-js">const {message, userId } = action.payload</code></pre><p>To go on, it’s also important to grab the active user’s messages. That is done on the next line with:</p><pre><code class="language-js">const allUserMsgs = state[userId];</code></pre><p>As you may already know, <code>state</code> here isn’t the overall state object of the application. No. It is the state managed by the reducer for the <code>messages</code> field.</p><p>Since every contact’s message is mapped with their user ID, the code above gets the messages for the specific user ID passed in from the action.</p><p>Now, every message has a <code>number</code>. This acts like a unique ID of some sorts. For incoming messages to have a unique ID, <code>_.keys(allUserMsgs)</code> will return an array of all the keys of the user’s messages.</p><p>Okay let me explain.</p><p><code>_.keys</code> is like <code>Object.keys()</code>. The only difference here is that I’m using the helper from <code>Lodash</code>. You can use <code>Object.keys()</code> if you want.</p><p>Also, <code>allUserMsgs</code> is an object that contains all of the user’s messages. It will look something like this:</p><pre><code class="language-js">{
0: {
number: 0,
text: "first message"
is_user_msg: false
},
1: {
number: 0,
text: "first message"
is_user_msg: false
}
}</code></pre><p>This will continue until the 10th message!</p><p>When we do <code>_.keys(allUserMsgs)</code> or <code>Object.keys(allUserMsgs)</code>, this will return an array of all the keys. Something like this:</p><pre><code class="language-js">[ 0, 1, 2, 3, 4, 5]</code></pre><p>The <code>Array.pop()</code> function is used to retrieve the last item in the array. This is the largest number already existing for the contact’s messages. Kind of like the last contact’s message ID.</p><p>Once that is retrieved, we add <code>+ 1</code> to it. Making sure that the new message gets <code>+ 1</code> of the highest number of the available messages.</p><p>Here’s all the code responsible for that again:</p><pre><code class="language-js">const number = +_.keys(allUserMsgs).pop() + 1;</code></pre><p>If you’re wondering why there’s a <code>+</code> before the <code>_.keys(allUserMsgs).pop() + 1</code>, this is to make sure that the result is converted to a Number instead of a String.</p><p>That is it!</p><p>On to the meat of the code block:</p><pre><code class="language-js">return {
...state,
[userId]: {
...allUserMsgs,
[number]: {
number,
text: message,
is_user_msg: true
}
}
};</code></pre><p>Take a look closely, and I’m sure you’ll make sense out of it.</p><p><code>...state</code> will make sure we don’t mess with the previous messages in the application.</p><p>Because we are using Object notations, we can easily grab the message with the particular user ID with <code>[userID]</code></p><p>Within the object, we make sure that all of the user’s messages are untouched: <code>...allUserMsgs</code></p><p>Finally, we add the new message object with the previously computed number!</p><pre><code class="language-js">[number]: {
number,
text: message,
is_user_msg: true
return "";</code></pre><p>Which brings all the code to this:</p><p><code><strong><strong>reducer/typing.js</strong></strong></code></p><pre><code class="language-js">import { SET_TYPING_VALUE, SEND_MESSAGE } from "../constants/action-types";
export default function typing(state = "", action) {
switch (action.type) {
case SET_TYPING_VALUE:
return action.payload;
case SEND_MESSAGE:
return "";
default:
return state;
}
super(props);
this.chatsRef = React.createRef();
}</code></pre><p>If you’re not familiar with <code>React.createRef()</code>, it is perfectly normal. This is because React 16 introduced a <a href="https://reactjs.org/docs/refs-and-the-dom.html" rel="nofollow noopener">new way to create Refs</a>.</p><p>We keep a reference to this <code>Ref</code> via <code>this.chatsRef</code>.</p><p>In the DOM rendered, we then update the ref like this:</p><pre><code class="language-js">&lt;div className="Chats" ref={this.chatsRef}&gt;</code></pre><p>We now have a reference to the <code>div</code> that holds all the chat conversations.</p><p>Let’s make sure this is always scrolled to the bottom when updated.</p><p>Say hello to the lifecycle methods!</p><pre><code class="language-js">componentDidMount() {
this.scrollToBottom();
}
componentDidUpdate() {
this.scrollToBottom();
}</code></pre><p>So, as soon as the component mounts, we invoke a <code>scrollToBottom</code> function. We do the same whenever the app updates, too!</p><p>Now, here’s the <code>scrollToBottom</code> function:</p><pre><code class="language-js">scrollToBottom = () =&gt; {
this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
};</code></pre><p>All we are doing is updating the <code>scrollTop</code> property to match the <code>scrollHeight</code></p><p>Not so difficult. The <code>this.chatsRef.current</code> refers to the DOM node in question.</p><p>Here’s all the code for <code>Chats.js</code> at this point.</p><pre><code class="language-js">...
class Chats extends Component {
constructor(props) {
super(props);
this.chatsRef = React.createRef();
}
componentDidMount() {
this.scrollToBottom();
}
componentDidUpdate() {
this.scrollToBottom();
}
scrollToBottom = () =&gt; {
this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
};
render() {
return (
&lt;div className="Chats" ref={this.chatsRef}&gt;
{this.props.messages.map(message =&gt; (
&lt;Chat message={message} key={message.number} /&gt;
))}
&lt;/div&gt;
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
