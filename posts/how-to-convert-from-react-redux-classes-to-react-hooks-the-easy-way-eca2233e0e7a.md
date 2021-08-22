---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca26b740569d1a4ca5488.jpg"
tags: [React]
description: "Hello everyone! With the recent release of create-react-app v"
author: "Milad E. Fahmy"
title: "How to convert from React-Redux classes to React Hooks, the easy way"
created: "2021-08-16T11:29:20+02:00"
modified: "2021-08-16T11:29:20+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-tech tag-programming tag-productivity tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to convert from React-Redux classes to React Hooks, the easy way</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca26b740569d1a4ca5488.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca26b740569d1a4ca5488.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca26b740569d1a4ca5488.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca26b740569d1a4ca5488.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca26b740569d1a4ca5488.jpg" alt="How to convert from React-Redux classes to React Hooks, the easy way">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Hello everyone! With the recent release of create-react-app v3 and React hooks, I decided to write a tutorial on how to refactor a class component to a functional hooks component.</p><p>In this tutorial, I will share how I did it. I refer to this as the “easy way” since it doesn't require you to change your Redux code at all. The reducers and actions can be virtually left as is.</p><p>If you want a more basic intro to React Hooks integration check out my <a href="https://medium.freecodecamp.org/how-to-integrate-react-hooks-into-your-project-without-changing-your-redux-code-974e6f70f0b0" rel="noopener">previous tutorial</a>.</p><p>You can find the project code <a href="https://github.com/iqbal125/react_hooks_with_react_redux" rel="noopener">here</a>.</p><p>You can also follow me on twitter for more tutorials in the future: <a href="https://twitter.com/iqbal125sf">here </a></p><p> This project uses both Redux and React hooks which will allow you to see the code and differences side by side. Open up the <code>hooks_container1.js</code> file and <code>container1.js</code> files in your text editor to see the differences. I tried my best to match the React class and React hook line for line making it easier to see the differences. However, it didn’t work out perfectly since there are some major differences between React Hooks and React classes. I tried to keep the functionality of both components the same so it will be easier for you to pick out the differences in syntax.</p><h4 id="table-of-contents"><strong>Table of Contents</strong></h4><ol><li>TLDR version</li><li>useReducer and Context</li><li>When to use local or global state and useState and useReducer</li><li>How Context Works</li><li>Directory Structure</li><li>The Context Object</li><li>Reducers and Actions</li><li>Reading and Updating state in React Redux vs. React Hooks</li><li>Merging the old state in React Hooks</li><li>Reading and Updating state with useReducer and Redux Reducers</li><li>Reading state and Dispatching Actions</li><li>Context with useState</li><li>Context with useReducer</li></ol><h3 id="the-easy-way-tl-dr"><strong>The Easy Way — TL;DR</strong></h3><p><strong>Step 1: </strong>For your reducers, export both the initialState and the reducer. Do not <code>export default</code> the reducer.</p><p><strong>Step 2: </strong>Actions can be left as is from React-Redux</p><p><strong>Step 3:</strong> Import all your reducers and their initialState to the root App.js file. Import actions as normal.</p><p><strong>Step 4: </strong>Pass in each reducer and its initialState to a separate <code>useReducer() </code>hook in the App.js file.</p><p><strong>Step 5:</strong> Import the <code>React.createContext()</code> function to App.js after initializing it in its own file. Wrap all child components with <code>&lt;Context.Provider /&gt;</code></p><p><strong>Step 6:</strong> Next simply cut and paste the properties defined in your React-Redux <code>mapStateToProps()</code> and<code> mapDispatchToProps()</code> functions to the <code>value</code> prop of <code>&lt;Context.Provider /&gt;</code></p><p><strong>Step 7:</strong> Change the dispatch keyword in your properties from the <code>mapDispatchToProps()</code> function to the name of the dispatch actions function (2nd element in the array destructuring) in the <code>useReducer()</code> hook. Since each reducer will have its own useReducer hook, you will have to match the appropriate action dispatches with the right reducer.</p><p><strong>Step 8:</strong> Do the same thing for the <code>mapStateToProps()</code> function. Change the name of the property to match the useReducer hook. The state value for the <code>useReducer()</code> hook (1st element in the array destructuring) contains the entire initial state from the reducer. You will need to access each property of state with dot notation, and then pass it into a property in the “value” prop.</p><p><strong>Step 9:</strong> Finally to actually use the global Context state in a child component, you first import the original Context object to the child component. Then pass in the imported Context object to the <code>useContext()</code> hook. Save the result of the useContext hooks in a variable. Now you have access to all the properties that we defined in the <code>value</code> prop of the <code>&lt;Context.Provider /&gt;</code> in the root App.js file.</p><p>Accessing state values in a child component with context: <code>context.stateprop1</code></p><p>Dispatching actions in a child component with context: <code>() =&gt; context.action1()</code></p><p>Here is an example of a React Redux class container and a React Hooks functional component with similar functionality side by side.</p><pre><code class="language-javascript"> class Container1 extends Component {
constructor(props) {
super(props)
this.state = {
local_state_prop1: true,
local_state_prop2: 0,
cDM_value: ''
}
}
...
inc_local = () =&gt; {
this.setState({local_state_prop2: this.state.local_state_prop2 + 1})
}
dec_local = () =&gt; {
this.setState({local_state_prop2: this.state.local_state_prop2 - 1})
}
...
&lt;button onClick={() =&gt; this.inc_local()}&gt; INC Local State  &lt;/button&gt;
&lt;button onClick={() =&gt; this.dec_local()}&gt; DEC Local State  &lt;/button&gt;
&lt;br /&gt;
&lt;br /&gt;
{this.state.local_state_prop2}
&lt;br /&gt;
...
</code></pre><pre><code class="language-javascript">
const HooksContainer1 = () =&gt; {
const [value, setValue] = useState({local_state_prop1: true,
local_state_prop2: 0
})
...
const incrementValue_uS = () =&gt; {
setValue({...value, local_state_prop2: value.local_state_prop2 + 1} )
}
const decrementValue_uS = () =&gt; {
setValue({...value, local_state_prop2: value.local_state_prop2 - 1} )
}
...
&lt;button onClick={() =&gt; incrementValue_uS()}&gt; Add Local Value uS &lt;/button&gt;
&lt;button onClick={() =&gt; decrementValue_uS()}&gt; Dec Local Value uS&lt;/button&gt;
&lt;br /&gt;
&lt;p&gt;Local useState Value: {value.local_state_prop2}&lt;/p&gt;
&lt;br /&gt;
import React from 'react';
const Context = React.createContext()
export default Context;</code></pre><p>Also, notice we are not passing in any state to the Context object. You may see other tutorials that pass values to the <code>createContext()</code> function. This is pointless as we will override these values when we setup the <code>&lt;Context.Provider /&gt;</code> and pass in the state to the <code>value</code> prop.</p><h4 id="reducers-and-actions"><strong>Reducers and Actions</strong></h4><p>Now I will show a reducer for use with React Hooks and one for use with regular React Redux.</p><p>Reducer for use with React Hooks:</p><pre><code class="language-javascript">
import * as ACTION_TYPES from '../actions/action_types'
export const initialState = {
hooks_stateprop1: false,
}
export const Reducer1 = (state = initialState, action) =&gt; {
switch(action.type) {
case ACTION_TYPES.SUCCESS:
return {
...state,
hooks_stateprop1: true,
}
case ACTION_TYPES.FAILURE:
return {
...state,
hooks_stateprop1: false,
}
default:
throw new Error();
}
}</code></pre><p>Reducer for React Redux:</p><pre><code class="language-javascript">import * as ACTION_TYPES from '../actions/action_types'
const initialState = {
stateprop1: false
}
const Reducer1 = (state = initialState, action) =&gt; {
switch(action.type) {
case ACTION_TYPES.SUCCESS:
return {
...state,
stateprop1: true
}
case ACTION_TYPES.FAILURE:
return {
...state,
stateprop1: false
}
default:
return state
}
}
export default Reducer1;</code></pre><p>Notice in the React Hooks reducer we are exporting both the intialState and reducer. We are not using <code>export default</code> at the bottom. In the React Redux reducer we <code>export default</code> the reducer.</p><p>Next, we have our actions and action types:</p><pre><code class="language-javacript">export const SUCCESS = "SUCCESS"
export const FAILURE = "FAILURE"
...</code></pre><pre><code class="language-javascript">
import * as ACTION_TYPES from './action_types'
export const SUCCESS = {
type: ACTION_TYPES.SUCCESS
}
export const FAILURE = {
type: ACTION_TYPES.FAILURE
}
export const success = () =&gt; {
return {
type: ACTION_TYPES.SUCCESS
}
}
export const failure = () =&gt; {
return {
type: ACTION_TYPES.FAILURE
}
}
...</code></pre><p>Actions and action creators require no changes from React Redux.</p><h4 id="reading-and-updating-state-in-react-redux-vs-react-hooks"><strong>Reading and Updating state in React Redux vs React Hooks</strong></h4><p>With the preliminary information out of the way, we can now look at the <code>hooks_container1.js</code> and <code>container1.js</code> and see the differences between React Hooks and React Redux in the code.</p><p>Let’s start off and look at local state for each and see how you would implement a simple counter.</p><p><strong>React-Redux</strong></p><pre><code class="language-javascript">class Container1 extends Component {
constructor(props) {
super(props)
this.state = {
local_state_prop1: true,
local_state_prop2: 0,
cDM_value: ''
}
}
...
inc_local = () =&gt; {
this.setState({local_state_prop2: this.state.local_state_prop2 + 1})
}
dec_local = () =&gt; {
this.setState({local_state_prop2: this.state.local_state_prop2 - 1})
}
...
&lt;button onClick={() =&gt; this.inc_local()}&gt; INC Local State  &lt;/button&gt;
&lt;button onClick={() =&gt; this.dec_local()}&gt; DEC Local State  &lt;/button&gt;
&lt;br /&gt;
&lt;br /&gt;
{this.state.local_state_prop2}
&lt;br /&gt;
...
</code></pre><p><strong>React Hooks</strong></p><pre><code class="language-javascript">
const HooksContainer1 = () =&gt; {
const [value, setValue] = useState({local_state_prop1: true,
local_state_prop2: 0
})
...
const incrementValue_uS = () =&gt; {
setValue({...value, local_state_prop2: value.local_state_prop2 + 1} )
}
const decrementValue_uS = () =&gt; {
setValue({...value, local_state_prop2: value.local_state_prop2 - 1} )
}
...
&lt;button onClick={() =&gt; incrementValue_uS()}&gt; Add Local Value uS &lt;/button&gt;
&lt;button onClick={() =&gt; decrementValue_uS()}&gt; Dec Local Value uS&lt;/button&gt;
&lt;br /&gt;
&lt;p&gt;Local useState Value: {value.local_state_prop2}&lt;/p&gt;
&lt;br /&gt;
...</code></pre><p>The first thing to note is that we are going from using a class component in React Redux to a functional component in React Hooks. Hence why we don't have the “this” keyword anywhere in our React Hooks code. Since we are not in a class, we can reference the variable and function names directly.</p><p>In React Redux we initialize the state in the constructor and have a dedicated <code>setState()</code> function. Both “state” and “setState()” are reserved names.</p><p>This is not so in React hooks. In React Hooks we create our own “state” keyword and setState() function ourselves with the useState() Hook. In the example above, you can think of <code>value</code> as the equivalent to <code>this.state</code> in a class component. And similar to <code>this.state</code>, we use dot notation to access each individual property of state, so the syntax we will be:</p><pre><code> value.name_of_property</code></pre><p>When I first started learning Hooks, I used to confuse the <code>useState() </code>hook as the equivalent to <code>setState()</code> function in React Redux. This isn’t the case. The React Redux <code>setState()</code> function is equivalent to the second element in the array destructuring. Which in the example above is <code>setValue()</code>. This <code>setValue()</code> function is how we update our state with hooks. <code>useState()</code> is then just a way we initialize the ability to read and update the state in a functional component. This previously was only available to class components.</p><h4 id="merging-the-old-state-in-react-hooks"><strong>Merging the old state in React Hooks</strong></h4><p>Another important thing to notice in the React Hooks example is that I am using <code>…value </code>before updating the state in the increment and decrement functions. This is the spread operator, that passes in the entire flattened previous state to the setState() function.</p><p>I did not need to pass in the previous state in the React Redux example. When we update a state property in React Redux the new state property is automatically merged with the old state properties</p><p>This <strong>does not</strong> happen in React Hooks. When you update the state in React Hooks, a new state is created. You see in the React Hooks example we have 2 state properties:<code> local_state_prop1</code> and <code>local_state_prop2</code>. If we update the state with only <code>local_state_prop2</code> and not pass in <code>…value</code> then a new state will be created that has only <code>local_state_prop2</code>. Meaning our <code>local_state_prop1</code> will simply just be deleted.</p><p>So when converting state from React Redux to React Hooks, you will need to pass in the entire previous state with the spread operator when updating a single state property.</p><h4 id="reading-and-updating-state-with-usereducers-and-redux-reducers"><strong>Reading and Updating state with useReducers and Redux Reducers</strong></h4><p>We can now compare reading and updating state with useReducer and Reducers.</p><p>We are using the same reducer as in the above example. A reducer with <code>SUCCESS</code> and <code>FAILURE</code> action types that changes <code>stateprop1</code> from true to false and vice versa.</p><p>useReducer Hook</p><pre><code class="language-javascript">import * as Reducer1 from '../store/hooks_reducers/reducer1_hooks';
...
const HooksContainer1 = () =&gt; {
const [stateLocal1, dispatchLocal1] = useReducer(Reducer1.Reducer1,
Reducer1.initialState)
...
const action1 = () =&gt; {
//    dispatchLocal1({type: "SUCCESS"})
//  dispatchLocal1(ACTIONS.success())
dispatchLocal1(ACTIONS.SUCCESS)
}
const action2 = () =&gt; {
//   dispatchLocal1({type: "FAILURE"})
//   dispatchLocal1(ACTIONS.failure())
dispatchLocal1(ACTIONS.FAILURE)
}
...
&lt;button onClick={() =&gt; action1()}&gt;Dispatch Action 1  &lt;/button&gt;
&lt;button onClick={() =&gt; action2()}&gt;Dispatch Action 2 &lt;/button&gt;
&lt;br /&gt;
{stateLocal1.stateprop1
? &lt;p&gt; stateprop1 is true &lt;/p&gt;
: &lt;p&gt; stateprop1 is false &lt;/p&gt;
}
&lt;br /&gt;
...</code></pre><p>React Redux</p><pre><code class="language-javascript">...
function mapStateToProps(state) {
return {
stateprop1: state.reducer1.stateprop1,
}
}
function mapDispatchToProps(dispatch) {
return {
// action_creator1: () =&gt; dispatch(ACTIONS.success()),
// action_creator2: () =&gt; dispatch(ACTIONS.failure()),
// action_type1: () =&gt; dispatch({type: "SUCCESS"}),
// action_type2: () =&gt; dispatch({type: "FAILURE}),
action1: () =&gt; dispatch(ACTIONS.SUCCESS),
action2: () =&gt; dispatch(ACTIONS.FAILURE),
}
}
...
&lt;button onClick={() =&gt; this.props.action1()}&gt; Dispatch Action 1 &lt;/button&gt;
&lt;button onClick={() =&gt; this.props.action2()}&gt;Dispatch Action 2 &lt;/button&gt;
&lt;br /&gt;
{this.props.stateprop1
? &lt;p&gt; stateprop1 is true &lt;/p&gt;
: &lt;p&gt; stateprop1 is false &lt;/p&gt;
}
&lt;br /&gt;
...</code></pre><p>As mentioned in the intro, even though we are using <code>useReducer()</code> in the functional component, we are still only updating the local component state. I will show you how to mimic Redux functionality with Context and have a global state in the next section. It is important to keep in mind we are still only updating the local state here in our Hooks container even though we are using actions and reducers.</p><p>On the other hand, in our React Class component, we are updating the global state since we are using Redux.</p><p>So the first difference you will notice with useReducer is that we have to import our reducer and initial state and pass it into the useReducer hook, which is something we don't do with React Redux. In React Redux we just use the <code>connect()</code> function.</p><h4 id="reading-state-and-dispatching-actions"><strong>Reading state and Dispatching Actions</strong></h4><p>Next, to dispatch actions in React Hooks, we use an arrow function then dispatch our actions in the body of the function. You can dispatch actions directly in the <code>onClick()</code> event but having the dispatch in a function will make your code more readable.</p><p>In React Redux we set properties in the <code>mapDispatchToProps()</code> function, then each property is an arrow function that dispatches actions.</p><p>You will notice that we pass in actions and actions creators in the exact same way to the dispatch function in both React Hooks and React Redux. There is literally no difference which is why we didn't need to change our actions at all. I have included all the ways of dispatching actions as a comment.</p><p>The only difference between React Hooks and React Redux is that the “dispatch” function name is reserved in React Redux. In React Hooks we create our own “dispatch” function name through the useReducer hook.</p><p>To call the dispatch function in React Redux we use the syntax <code>this.props</code> then the name of the property in <code>mapDispatchToProps()</code> function. In React Hooks we just call the dispatch function name directly.</p><p>To read the state in React Redux we do <code>this.props</code> and then the name of the property in the <code>mapStateToProps()</code> function. The name of the property holds the value for a specific property in a specific reducer. In React Hooks we just do the name of the state value. This is the first element in the array destructuring in the useReducer hook call. Then the name of the property we defined in the intialState in the reducer.</p><h4 id="context-with-usestate"><strong>Context with useState</strong></h4><p>Now I will go over Context which is how we setup a global state. It is important to note that Context is not part of React Hooks. <code>useContext()</code> is a React Hook, but Context itself is not part of React Hooks. Context is simply a way to pass down props from a parent component to a deeply nested child component. See the “How Context Works” section at the beginning of this tutorial for a full explanation.</p><p>Also, I will not be making comparisons between React Redux and Context because Context does not have an opposite in React Redux. I will show you how to implement a global state with Context using both the <code>useReducer()</code> and <code>useState()</code> hook.</p><p>We will first start off with the using the <code>useState()</code> hook to setup a global state.</p><p>We will begin setting up our global state in the root App.js file. We will first import the Context object we setup in the <code>context.js </code>file. We will also need to import our Hooks functional component.</p><pre><code class="language-javascript">
import Context from '../utils/context';
import HooksContainer1 from './hooks/hooks_container1';
...
const App = () =&gt; {
const [valueGlobal_uS, setValueGlobal_uS] = useState(0)
const incrementValueGlobal_uS = () =&gt; {
setValueGlobal_uS(valueGlobal_uS + 1 )
}
const decrementValueGlobal_uS = () =&gt; {
setValueGlobal_uS(valueGlobal_uS - 1 )
}
...
&lt;div&gt;
&lt;Context.Provider
value={{
//global state with useState
valueGlobalState_uS: valueGlobal_uS,
addGlobalValue_uS: () =&gt; incrementValueGlobal_uS(),
decGlobalValue_uS: () =&gt; decrementValueGlobal_uS(),
}}&gt;
&lt;HooksContainer1 /&gt;
&lt;/Context.Provider&gt;
&lt;/div&gt;
...</code></pre><p>We can just set up a simple counter for now. Our <code>useState()</code> hook is setup as usual. In our JSX we are wrapping our <code>&lt;HooksContainer1 /&gt;</code> with the <code>&lt;Context.Provider /&gt;</code> element. This is what allows us to pass state from App.js to child components. We also have 3 properties supplied to our <code>value</code> prop. 1 to hold the state value and 2 properties to change the state. Notice that we don't use the <code>useContext()</code> hook in App.js. The <code>useContext()</code> hook will actually be used in child components to read and update the state.</p><p>You can essentially think of the <code>value</code> prop as both the <code>mapStateToProps()</code> and <code>mapDispatchToProps()</code> functions combined into one because of the <code>value</code> prop holds properties that allow you to read and update the state that can be called and accessed by the child component which is exactly what the <code>mapStateToProps()</code> and <code>mapDispatchToProps()</code> functions do.</p><p>Now let's look at how we would use this Context object in a child component.</p><pre><code class="language-javascript">
import Context from '../utils/context';
...
const HooksContainer1 = () =&gt; {
...
const context = useContext(Context)
&lt;p&gt;Global useState Value: {context.valueGlobalState_uS}&lt;/p&gt;
&lt;button onClick={() =&gt; context.addGlobalValue_uS()}&gt; Add Global Value uS &lt;/button&gt;
&lt;button onClick={() =&gt; context.decGlobalValue_uS()}&gt; Dec Global Value uS &lt;/button&gt;
...</code></pre><p>We first have to import our Context object at the top. This is the original Context object that we created with the <code>createContext()</code> function, not the <code>&lt;Context.Provider /&gt;</code> we just setup. Then we simply pass this Context object to the <code>useContext()</code> hook and save it in a variable. This context variable now has all the properties we just defined in the <code>value</code> prop of the <code>&lt;Context.Provider /&gt;</code>.</p><p>To access the properties of the <code>value</code> prop we can just use dot notation. For example, to access the state value here in our child component, we use the syntax <code>context.valueGlobalstate_uS</code>.</p><p>Note that <code>valueGlobalState</code> is the name of the <em>property </em>we defined in the App.js file in the value prop. <code>valueGlobalState</code> is the property that holds the value of the state which in App.js we defined as <code>valueGlobal_uS</code>. Similarly, to change the state we call the property name and not the name of the function we set in App.js.</p><p>I have intentionally kept the property and function names different so its easier to see how Context works in the child component.</p><p>This is it for using Context with useState. I will now demonstrate with useReducer.</p><h4 id="context-with-usereducer"><strong>Context with useReducer</strong></h4><p>Using Context with useReducer is essentially how we achieve Redux functionality.</p><p>In order to avoid confusion, I will setup a new reducer and actions for this.</p><pre><code class="language-javascript">
export const CONTEXT_INC = "CONTEXT_INC"
export const CONTEXT_DEC = "CONTEXT_DEC"</code></pre><pre><code class="language-javascript">export const CONTEXT_INC = {
type: ACTION_TYPES.CONTEXT_INC
}
export const CONTEXT_DEC = {
type: ACTION_TYPES.CONTEXT_DEC
}</code></pre><pre><code class="language-javascript">import * as ACTION_TYPES from '../actions/action_types'
export const initialState = {
context_prop1: 0,
}
export const ContextReducer = (state = initialState, action) =&gt; {
switch(action.type) {
case ACTION_TYPES.CONTEXT_INC:
return {
...state,
context_prop1: state.context_prop1 + 1
}
case ACTION_TYPES.CONTEXT_DEC:
return {
...state,
context_prop1: state.context_prop1 - 1
}
default:
throw new Error();
}
}</code></pre><p>So we have a simple reducer that functions as a counter. Now we can set up the useReducer hook in our App.js file and we will set this up in the exact same way that we set up useReducer in our Hooks container. We import the ContextReducer and its initial state and pass it into the useReducer Hook in App.js. Because we are now using Context we will not import our Context Reducer to the child components. The state will be changed here in our App.js file and will simply be passed down as props.</p><pre><code class="language-javascript">import * as ACTIONS from './store/actions/actions';
import * as ContextReducer from './store/reducers/context_reducer';
...
const App = () =&gt; {
...
const [contextState, contextDispatch] = useReducer(ContextReducer.ContextReducer,
ContextReducer.initialState)
const dispatchContextInc = () =&gt; {
contextDispatch(ACTIONS.CONTEXT_INC)
}
const dispatchContextDec = () =&gt; {
contextDispatch(ACTIONS.CONTEXT_DEC)
}
...
&lt;div&gt;
&lt;Context.Provider
value={{
//global state with useState
valueGlobalState_uS: valueGlobal_uS,
addGlobalValue_uS: () =&gt; incrementValueGlobal_uS(),
decGlobalValue_uS: () =&gt; decrementValueGlobal_uS(),
//global state with useReducer
valueGlobalState_uR: contextState,
addGlobalValue_uR: () =&gt; dispatchContextInc(),
decGlobalValue_uR: () =&gt; dispatchContextDec()
}}&gt;
&lt;HooksContainer1 /&gt;
&lt;/Context.Provider&gt;
&lt;/div&gt;
...</code></pre><p>We set up our properties in the <code>value</code> prop in the exact same way that we did when we used Context with the <code>useState()</code> hook. The actions are also dispatched in the exact same way as we’ve seen before.</p><p>Now for our child component:</p><pre><code class="language-javascript">...
const HooksContainer1 = () =&gt; {
const context = useContext(Context)
...
&lt;button onClick={() =&gt; context.addGlobalValue_uR()}&gt; Add Global Value uR &lt;/button&gt;
&lt;button onClick={() =&gt; context.decGlobalValue_uR()}&gt; Dec Global Value uR &lt;/button&gt;
&lt;p&gt;Global useReducer Value: {context.valueGlobalState_uR.context_prop1}&lt;/p&gt;</code></pre><p>As you can see, reading and updating state with <code>useReducer()</code> hook is very similar to the <code>useState()</code> example. We can even use the same context variable we used for <code>useState()</code>, we don't have to initialize another one. To update the state we simply call the property name we defined in the <code>value</code> prop of the provider. This updates the state in App.js. Because we are updating our state in App.js we don't have to import the ContextReducer here in our child component and pass it into the <code>useReducer()</code> hook.</p><p>Reading the state is a little bit different. Since <code>valueGlobalState_uR</code> contains our entire state, we have to specify a single property of state which in this case is <code>context_prop1</code>.</p><p>And this is it! After this you can read and update the state in any component in your app using this same pattern, allowing you to mimic Redux functionality essentially.</p><p>For a 100% Free Video version of this tutorial and more in-depth React Hooks content see my Udemy course or Youtube playlist:</p><p><a href="https://www.udemy.com/react-hooks-with-react-redux-migration" rel="noopener">https://www.udemy.com/react-hooks-with-react-redux-migration</a></p><p><a href="https://www.youtube.com/watch?v=l8ODM-KoDpA&amp;list=PLMc67XEAt-ywplHhDpoj5vakceZNr8S0B" rel="noopener">https://www.youtube.com/watch?v=l8ODM-KoDpA&amp;list=PLMc67XEAt-ywplHhDpoj5vakceZNr8S0B</a></p>
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
