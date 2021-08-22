---
card: "https://cdn-media-1.freecodecamp.org/images/1*hwW04YcPNKdDmkmDaoaXDw.jpeg"
tags: [React]
description: The React team introduced React Hooks to the world at React C
author: "Milad E. Fahmy"
title: "Let’s get hooked: a quick introduction to React Hooks"
created: "2021-08-15T19:35:29+02:00"
modified: "2021-08-15T19:35:29+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-front-end-development tag-hooks tag-tech tag-react-hooks ">
<header class="post-full-header">
<h1 class="post-full-title">Let’s get hooked: a quick introduction to React Hooks</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*hwW04YcPNKdDmkmDaoaXDw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*hwW04YcPNKdDmkmDaoaXDw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*hwW04YcPNKdDmkmDaoaXDw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*hwW04YcPNKdDmkmDaoaXDw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*hwW04YcPNKdDmkmDaoaXDw.jpeg" alt="Let’s get hooked: a quick introduction to React Hooks">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h4 id="getting-started-with-react-hooks">Getting Started with React Hooks</h4>
<p>The React team introduced React Hooks to the world at React Conf in late October 2018. In early February 2019, they finally came in React v16.8.0. While I, like most others probably, won’t be able to use them in production for a while (until we decide to update React), I have been experimenting with them on the side.</p>
<p>I was actually so excited about it, I will be giving an intro talk about it at a local meetup. Additionally, I’ll be giving a talk about Hooks (and other upcoming React features) at WeRockITConf in Huntsville in May! (EDIT: I have now given these talks and you can find the presentations and the associated resources on <a href="https://lekhasurasani.com/speaking">my website</a>!) But for now, here’s how to get started with React Hooks!</p>
<h1 id="what-are-hooks-anyway">What are Hooks anyway?</h1>
<p>React Hooks let you use state, and other React features without having to define a JavaScript class. It’s like being able to take advantage of the cleanliness and simplicity of a Pure Component <em><em>and</em></em> state and component lifecycle methods. This is because Hooks are just regular JavaScript functions! This lends itself to cleaner and less clunky code. A side by side comparison of what the code looks like with and without Hooks for a simple counting component:</p><pre><code class="language-js">import './App.css';
import React, { useState } from 'react';
const HooksExample = () =&gt; {
const [counter, setCount] = useState(0);
return (
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
The button is pressed: { counter } times.
&lt;button
onClick={() =&gt; setCount(counter + 1)}
style={{ padding: '1em 2em', margin: 10 }}
&gt;
Click me!
&lt;/button&gt;
&lt;/header&gt;
&lt;/div&gt;
)
}
export default HooksExample;</code></pre>
<p>NoHooks.js:</p><pre><code class="language-js">import './App.css';
import React, { Component } from 'react';
export class NoHooks extends Component {
constructor(props) {
super(props;
this.state = {
counter: 0
}
}
render() {
const { counter } = this.state;
return (
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
The button is pressed: { counter } times.
&lt;button
onClick={() =&gt; this.setState({ counter: counter + 1 }) }
style={{ padding: '1em 2em', margin: 10 }}
&gt;
Click me!
&lt;/button&gt;
&lt;/header&gt;
&lt;/div&gt;
)
}
}
export default NoHooks;</code></pre>
<p>Not only is the code a lot smaller — the saved space certainly adds up for larger components — it’s also a lot more <em><em>readable</em></em>, which is a huge advantage of Hooks. For beginners who are just getting started with React, it’s easier for them to read the first block of code and easily see exactly what’s happening. With the second block, we have some extraneous elements, and it’s enough to make you stop and wonder what it’s for.</p>
<p>Another great thing about hooks is that you can create your own! This means that a lot of the stateful logic we used to have to re-write from component to component, we can now abstract out to a custom hook — and <em><em>reuse it</em></em>.</p>
<p>The one example where this is particularly life-changing (for me) that comes to mind is use with forms. With all of the stateful logic of forms, it’s hard to reduce the size of the component. But now, with hooks, complex forms can become much simpler without the use of other form libraries.</p>
<p>But before we get to that, let’s take a look at the hook at hand — useState.</p>
<h1 id="usestate">useState</h1>
<p>useState, as the name describes, is a hook that allows you to use state in your function. We define it as follows:</p>
<p>const [ someState, updateState ] = useState(initialState)</p>
<p>Let’s break this down:</p>
<ul>
<li><strong><strong>someState:</strong></strong> lets you access the current state variable, <em><em>someState</em></em></li>
<li><strong><strong>updateState: </strong></strong>function that allows you to update the state — whatever you pass into it becomes the new <em><em>someState</em></em></li>
<li><strong><strong>initialState: </strong></strong>what you want <em><em>someState</em></em> to be upon initial render</li>
</ul>
<p>(If you’re unfamiliar with array destructuring syntax, stop here and read <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Basic_variable_assignment">this</a>.)</p>
<p>Now that we understand the basic format of useState and how to call and use it, let’s go back to the example from before.</p>
<p>In this example<strong><strong>, counter</strong></strong> is the state variable, <strong><strong>setCount</strong></strong> is the updater function, and <strong><strong>0</strong></strong> is the initial state. We use <strong><strong>setCount(counter + 1)</strong></strong> to increment the count when the button is pressed, making <strong><strong>counter + 1</strong></strong> the new value of <strong><strong>counter</strong></strong>. Alternatively, if we wanted to use the previous state to update the current state, we could pass in the old state to setCount:</p>
<p><code>setCount(prevCount =&gt; prevCount + 1)</code></p>
<p>This is a simple example that isn’t reflective of what we’d normally use in an actual application. But let’s take a look at something we’re more likely to use — a simple sign-in form for email and password:</p><pre><code class="language-js">import './App.css';
import React, { useState } from 'react';
const LoginForm = () =&gt; {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
return (
const { handleSubmit } = this.props;
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
&lt;form onSubmit={handleSubmit}&gt;
&lt;input value={ email } onChange={(e) =&gt; setEmail(e.target.value) } /&gt;
&lt;input value={ password } onChange={(e) =&gt; setPassword(e.target.value) } /&gt;
&lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
&lt;/header&gt;
&lt;/div&gt;
)
}
export default LoginForm;</code></pre>
<p>We have two separate state fields and state updaters. This allows us to create really simple forms without creating a whole JavaScript class.</p>
<p>If we wanted to simplify this further, we could create an object as the state. However, useState replaces the whole state instead of updating the object (as setState would), so we can replicate the usual behavior of setState as shown below:</p><pre><code class="language-js">import './App.css';
import React, { useState } from 'react';
const LoginForm = () =&gt; {
const [login, setLogin] = useState({ email: '', password: '' });
return (
const { handleSubmit } = this.props;
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
&lt;form onSubmit={handleSubmit}&gt;
&lt;input value={ login.email } onChange={(e) =&gt; setLogin(prevState =&gt; { ...prevState, email: e.target.value }) } /&gt;
&lt;input value={ login.password } onChange={(e) =&gt; setLogin(prevState =&gt; { ...prevState, password: e.target.value }) } /&gt;
&lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
&lt;/header&gt;
&lt;/div&gt;
)
}
export default LoginForm;</code></pre>
<p>If you have state objects more complex than this, you would either want to break them out into separate states as in the first Login example, or use useReducer (we’ll get to that soon!).</p>
<p>So we’ve got state in hooks. What about component lifecycle methods?</p>
<h1 id="useeffect">useEffect</h1>
<p>useEffect is another hook that handles componentDidUpdate, componentDidMount, and componentWillUnmount all in one call. If you need to fetch data, for example, you could useEffect to do so, as seen below.</p><pre><code class="language-js">import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
const HooksExample = () =&gt; {
const [data, setData] = useState();
useEffect(() =&gt; {
const fetchGithubData = async (name) =&gt; {
const result = await axios(`https://api.github.com/users/${name}/events`)
setData(result.data)
}
fetchGithubData('lsurasani')
}, [data])
return (
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
{data &amp;&amp; (
data.map(item =&gt; &lt;p&gt;{item.repo.name}&lt;/p&gt;)
)}
&lt;/header&gt;
&lt;/div&gt;
)
}
export default HooksExample;</code></pre>
<p>Taking a look at useEffect we see:</p>
<ul>
<li>First argument: A function. Inside of it, we fetch our data using an async function and then set <strong><strong>data </strong></strong>when we get results.</li>
<li>Second argument: An array containing <strong><strong>data</strong></strong>. This defines when the component updates. As I mentioned before, useEffect runs when componentDidMount, componentWillUnmount, <em><em>and</em></em>componentDidUpdate would normally run. Inside the first argument, we’ve set some state, which would traditionally cause componentDidUpdate to run. As a result, useEffect would run again if we did not have this array. Now, useEffect will run on componentDidMount, componentWillUnmount, and if <strong><strong>data</strong></strong> was updated, componentDidUpdate. This argument can be empty— you can choose to pass in an empty array. In this case, only componentDidMount and componentWillUnmount will ever fire. But, you do have to specify this argument if you set some state inside of it.</li>
</ul>
<h1 id="usereducer">useReducer</h1>
<p>For those of you who use Redux, useReducer will probably be familiar. useReducer takes in two arguments — a <strong><strong>reducer</strong></strong> and an <strong><strong>initial state</strong></strong>. A reducer is a function that you can define that takes in the current state and an “action”. The action has a type, and the reducer uses a switch statement to determine which block to execute based on the type. When it finds the correct block, it returns the state but with the modifications you define depending on the type. We can pass this reducer into useReducer, and then use this hook like this:</p>
<p><code>const [ state, dispatch ] = useReducer(reducer, initialState)</code></p>
<p>You use dispatch to say what action types you want to execute, like this:</p>
<p><code>dispatch({ type: name})</code></p>
<p>useReducer is normally used when you have to manage complex states — such as the signup form below.</p><pre><code class="language-js">import React, { useReducer } from 'react';
const reducer = (state, action) =&gt; {
switch (action.type) {
case 'firstName': {
return { ...state, firstName: action.value };
}
case 'lastName': {
return { ...state, lastName: action.value };
}
case 'email': {
return { ...state, email: action.value };
}
case 'password': {
return { ...state, password: action.value };
}
case 'confirmPassword': {
return { ...state, confirmPassword: action.value };
}
default: {
return state;
}
}
};
function SignupForm() {
const initialState = {
firstName: '',
lastName: '',
email: '',
password: '',
confirmPassword: '',
}
const [formElements, dispatch] = useReducer(reducer, initialState);
return (
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
&lt;div&gt;
&lt;input placeholder="First Name" value={ formElements.firstName} onChange={(e) =&gt; dispatch({ type: firstName, value: e.target.value }) } /&gt;
&lt;input placeholder="Last Name" value={ formElements.lastName} onChange={(e) =&gt; dispatch({ type: lastName, value: e.target.value }) } /&gt;
&lt;input placeholder="Email" value={ formElements.email} onChange={(e) =&gt; dispatch({ type: email, value: e.target.value }) } /&gt;
&lt;input placeholder="Password" value={ formElements.password} onChange={(e) =&gt; dispatch({ type: password, value: e.target.value }) } /&gt;
&lt;input placeholder="Confirm Password" value={ formElements.confirmPassword} onChange={(e) =&gt; dispatch({ type: confirmPassword, value: e.target.value }) } /&gt;
&lt;/div&gt;
&lt;/header&gt;
&lt;/div&gt;
);
}
export default SignupForm;
</code></pre>
<p>This hook has a lot of additional applications, including allowing us to specify a few reducers throughout our application and then reusing them for each of our components, changing based on what happens in those components. On a high level, this is similar to Redux’s functionality — so we may be able to avoid using Redux for relatively simpler applications.</p>
<h1 id="custom-hooks">Custom Hooks</h1>
<p>So we’ve covered 3 basic hooks — let’s look at how to make our own. Remember the example I mentioned earlier with the login form? Here it is again as a reminder:</p><pre><code class="language-js">import './App.css';
import React, { useState } from 'react';
const LoginForm = () =&gt; {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
return (
const { handleSubmit } = this.props;
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
&lt;form onSubmit={handleSubmit}&gt;
&lt;input value={ email } onChange={(e) =&gt; setEmail(e.target.value) } /&gt;
&lt;input value={ password } onChange={(e) =&gt; setPassword(e.target.value) } /&gt;
&lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
&lt;/header&gt;
&lt;/div&gt;
)
}
export default LoginForm;</code></pre>
<p>We useState for both and define a state variable and an updater function for both of the fields. What if we could simplify this further? Here’s a custom hook for handling any kind of input value changes (note: the convention for naming a custom hooks is: use&lt;function description&gt;).</p><pre><code class="language-js">import { useState } from 'react';
export const useInputValue = (initial) =&gt; {
const [value, setValue] = useState(initial)
return { value, onChange: e =&gt; setValue(e.target.value) }
}</code></pre>
<p>We use useState to handle the changes as we did in the previous example, but this time we return the value and an onChange function to update that value. So, the login form can now look like this:</p><pre><code class="language-js">import React from 'react';
import { useInputValue } from './Custom'
const Form = () =&gt; {
const email = useInputValue('')
const password = useInputValue('')
return (
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
&lt;div&gt;
&lt;input type="text" placeholder="Email" {...email} /&gt;
&lt;/div&gt;
&lt;div&gt;
&lt;input type="password" placeholder="Password" {...password} /&gt;
&lt;/div&gt;
&lt;/header&gt;
&lt;/div&gt;
);
}
export default Form;</code></pre>
<p>We initialize useInputValue with an empty string for both of our fields, and set the result to the name of the field. We can put this back in the input element so the input element renders the value and onChange functions dynamically.</p>
<p>Now, we’ve made this form even simpler — and our custom hook can be reused wherever we need a form input element!</p>
<p>I think that this is one of the most useful things about hooks — the ability to make your own and allow for this previously stateful logic that was locked inside each component to be taken out and reused, allowing for each component to become simpler.</p>
<p>So we’ve gone over: useState, useEffect, useReducer, and finally, custom hooks. There’s a few basic things that we haven’t gone over just yet — namely, the two general rules to follow with Hooks:</p>
<ol>
<li><strong><strong>Only call Hooks at the <em><em>top level </em></em></strong></strong><em><em>— </em></em>Not in loops, nested functions, conditions, etc. This ensures that hooks are always called in the same order after each render. This is important because React relies on the order that Hooks are called to determine which state corresponds to a useState call (if you are using multiple). If one of your hooks is hidden in a loop, nested function, or a conditional, the order can change from render to render, messing up which state corresponds to which useState.</li>
<li><strong><strong>Only call Hooks from React functions or custom hooks </strong></strong>— In other words, don’t call Hooks from JavaScript functions.</li>
</ol>
<p>Hopefully this clears up how and when to use hooks for you! Some additional resources you can take a look at:</p>
<ul>
<li><a href="https://reactjs.org/docs/hooks-intro.html">The React docs</a></li>
<li><a href="https://github.com/rehooks/awesome-react-hooks">Collection of Hooks resources</a></li>
</ul>
<p>If you have any questions/comments, please feel free to ask below!</p>
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
