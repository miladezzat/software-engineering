---
card: "/images/default.jpg"
tags: [React]
description: One of the most important concepts for every React developer
author: "Milad E. Fahmy"
title: "What Every React Developer Should Know About State"
created: "2021-08-15T19:26:35+02:00"
modified: "2021-08-15T19:26:35+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-state-management tag-react-hooks ">
<header class="post-full-header">
<h1 class="post-full-title">What Every React Developer Should Know About State</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/04/5-things-every-react-developer-should-know-about-state.png 300w,
/news/content/images/size/w600/2021/04/5-things-every-react-developer-should-know-about-state.png 600w,
/news/content/images/size/w1000/2021/04/5-things-every-react-developer-should-know-about-state.png 1000w,
/news/content/images/size/w2000/2021/04/5-things-every-react-developer-should-know-about-state.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/04/5-things-every-react-developer-should-know-about-state.png" alt="What Every React Developer Should Know About State">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>One of the most important concepts for every React developer to understand is state – what it is, how to properly use it, and how to avoid common pitfalls as you build your applications. </p>
<p>Let's cover five of the most essential parts of state that you need to know. Each of these parts build upon each other to aid your overall understanding of a somewhat complex topic.</p>
<p>To make these abstract concepts as clear as possible, I've included many practical examples that you can run in Code Sandbox or any React project you have set up.</p>
<blockquote>Want to become a professional React developer in record time? Check out the <a href="https://reactbootcamp.com"><strong>React Bootcamp</strong></a>.</blockquote>
<h2 id="1-state-updates-with-usestate-are-not-merged">1. State updates with useState are not merged</h2>
<p>One challenge many React developers face when moving from class-based components to function components with React hooks is that state updates using objects are no longer automatically merged.</p>
<p>A great advantage of the useState hook is that we are able to call it as many times as we like to use as many state variables as we need. </p>
<p>In this example, we have a basic form with an email and password input. We are managing the email and password state as individual state variables:</p><pre><code class="language-js">import React from "react";
export default function App() {
const [email, setEmail] = React.useState("");
const [password, setPassword] = React.useState("");
return (
&lt;form&gt;
&lt;input
name="email"
type="email"
placeholder="Email"
onChange={(e) =&gt; setEmail(e.target.value)}
/&gt;
&lt;input
name="password"
type="password"
placeholder="Password"
onChange={(e) =&gt; setPassword(e.target.value)}
/&gt;
&lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
);
}</code></pre>
<p>Let's change our example to manage our form state within a single object. This allows us to call useState just once, where email and password are not managed by individual state variables but as properties of this one state variable called <code>state</code>. </p>
<p><em>How do we appropriately update state with the <code>setState</code> function when it is an object?</em></p>
<p>If we were to use a generic event handler that is connected to the <code>onChange</code> prop of each of our form's inputs, it would look something like this:</p><pre><code class="language-js">import React from "react";
export default function App() {
const [state, setState] = React.useState({
email: '',
password: ''
})
function handleInputChange(e) {
setState({
[e.target.name]: e.target.value
})
}
return (
&lt;form&gt;
&lt;input
name="email"
type="email"
onChange={handleInputChange}
/&gt;
&lt;input
name="password"
type="password"
onChange={handleInputChange}
/&gt;
&lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
);
}</code></pre>
<p>We're now updating each input's value in state according to the name of the input our user is currently typing in.</p>
<p>This pattern is commonly used to update state in class-based components, but this does not work with the useState hook. State updates with useState's <code>setState</code> function are not automatically merged. </p>
<p><em>What does that mean?</em> </p>
<p>It means that whenever we set state as our user types in, the previous state is not included in the new state. If we were to log our newly updated state as we type into our form, we see the following:</p>
<p>Since the previous state is not automatically merged into the new state object, we must manually merge our state object with its previous properties using the object spread operator:</p><pre><code class="language-js">import React from "react";
export default function App() {
const [state, setState] = React.useState({
email: '',
password: ''
})
function handleInputChange(e) {
setState({
// spread in previous state with object spread operator
...state,
[e.target.name]: e.target.value
})
}
return (
&lt;form&gt;
&lt;input
name="email"
type="email"
onChange={handleInputChange}
/&gt;
&lt;input
name="password"
type="password"
onChange={handleInputChange}
/&gt;
&lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
);
}</code></pre>
<p>For the useState hook, we have the flexibility to manage multiple primitive values or use an object with multiple properties.</p>
<p>If you useState with an object, however, remember to spread in the previous state when performing any updates to make sure it is updated correctly.</p>
<h2 id="2-state-hooks-trigger-a-re-render-useref-does-not">2. State hooks trigger a re-render, useRef does not</h2>
<p>React state has a very important relationship with rendering components.</p>
<p>Whenever we return JSX from a React component, when that component is used, it will be rendered and therefore displayed in our application. React takes care of this rendering process. </p>
<p>If our component uses any state, we must understand that it needs to be rendered again – that is, re-rendered – in response to any state update. </p>
<p><em>Why do components need to be re-rendered upon state updates?</em></p>
<p>Because if we did not re-render upon updating state, we would not be able to show new data. This is very simply expressed, whenever we are showing any state contained within a state variable within our JSX. </p>
<p>If it did not re-render whenever we make changes to that variable, the updates would not be shown. </p>
<p>This seems like a rather simple concept, but you need to understand that <strong>whenever we update state,</strong> <strong>it not only causes a re-render in the component that directly manages the state – it also causes a re-render in all child components</strong>. </p>
<p><em>Why does this matter?</em> Because in some cases, we may not want a child component to re-render in response to a parent component re-rendering. </p>
<p><em>What is one such example?</em> Let's say we have application where a user can type into an input whose value is managed through state. This app also has another component that displays a list of data. </p>
<p>Whenever the user types into the input, our state is updated, and this causes a needless re-render in that other child component. </p>
<p>The way that we can fix this is with the help of the <code>React.memo</code> function, which helps in preventing our component from being re-rendered when a parent component re-renders:</p><pre><code class="language-js">export default function App() {
const [skill, setSkill] = React.useState("");
const [skills, setSkills] = React.useState(["HTML", "CSS", "JavaScript"]);
function handleChangeInput(event) {
setSkill(event.target.value);
}
function handleAddSkill() {
setSkills(skills.concat(skill));
}
return (
&lt;&gt;
&lt;input onChange={handleChangeInput} /&gt;
&lt;button onClick={handleAddSkill}&gt;Add Skill&lt;/button&gt;
&lt;SkillList skills={skills} /&gt;
&lt;/&gt;
);
}
/* But the problem, if you run this code yourself, is that when we type into the input, because the parent component of SkillList (App) re-renders, due to the state being updated on every keystroke, the SkillList is rerendered constantly (as indicated by the console.log) */
/* However, once we wrap the SkillList component in React.memo (which is a higher-order function, meaning it accepts a function as an argument), it no longer re-renders unnecessarily when our parent component does. */
const SkillList = React.memo(({ skills }) =&gt; {
console.log("rerendering");
return (
&lt;ul&gt;
{skills.map((skill, i) =&gt; (
&lt;li key={i}&gt;{skill}&lt;/li&gt;
))}
&lt;/ul&gt;
);
});</code></pre>
<p>One other thing to note here is that there is technically a way to manage state without causing a re-render. We can do so with a hook that most people don't view as being a stateful React hook – <code>useRef</code>.</p>
<p>useRef can be used to store any value on its <code>.current</code> property. In other words, if we wanted to make a simple counter with useRef and update a count value that we stored on it, even if we update its value, it would not show the correct count after the initial render because doing so does not trigger a re-render:</p><pre><code class="language-js">import React from "react";
export default function App() {
const countRef = React.useRef(0);
function handleAddOne() {
countRef.current += 1;
}
return (
&lt;&gt;
&lt;h1&gt;Count: {countRef.current}&lt;/h1&gt;
{/* clicking this will not change display count */}
&lt;button onClick={handleAddOne}&gt;+ 1&lt;/button&gt;
&lt;/&gt;
);
}</code></pre>
<h2 id="3-state-updates-should-be-immutable">3. State updates should be immutable</h2>
<p>A very important part of state in React is that it must be updated and managed in the correct way. </p>
<p>When it comes to managing state with the useState hook, we must <em>only</em> use the dedicated setter function as provided as the second element in the array we get back from useState to update it. If we don't do so and attempt to update it manually, with the help of just plain JavaScript for example, our application will not work like we expect. </p>
<p>This point is very closely related to the previous point that we made: state, when updated <em>properly</em>, causes a re-render of our component. </p>
<p>What do you think will happen if we attempt to update state in our own way instead of the "React" way? </p>
<p>Again, React is what takes care of displaying and rendering our component properly when something changes. If we don't use React, then we can't expect our application to reflect any changes that we made to the state. </p>
<p>In other words, <strong>if we update state with plain JavaScript and not <code>setState</code>, it will not trigger a re-render and React will not display those (invalid) changes in state to our user. </strong></p>
<p>This is a simple, but crucial lesson to remember. </p>
<p>We must know how to update state using React and choose the appropriate state hook for our purposes. We might choose <code>useReducer</code>, <code>useState</code>, or a third-party state management library like Redux. </p>
<p>Regardless of our choice in state management, we must update state in the appropriate manner and not attempt to update or mutate it directly. </p>
<p>The other reason for this, aside from our React application not working properly, is that it violates a core principle of React. This is the concept of <strong>immutability</strong>. </p>
<p>State updates should always be immutable. This means we shouldn't make our own changes or mutate the data stored in our state variables. Doing so makes our state unpredictable and can cause unintended problems in our application that are hard to debug.</p><pre><code class="language-js">import React from 'react';
export default function App() {
const [count, setCount] = React.useState(0);
// Don't assign state to new (non-state) variables
const newCount = count;
// Don't directly mutate state
const countPlusOne = count + 1;
return (
&lt;&gt;
&lt;h1&gt;Count: {count}&lt;/h1&gt;
&lt;/&gt;
);
}</code></pre>
<p>In addition to not mutating state variables directly, make sure to never assign state variables to other (non-state) variables.</p>
<h2 id="4-state-updates-are-asynchronous-and-scheduled">4. State updates are asynchronous and scheduled</h2>
<p>A crucial lesson to know about state updates is that they are not performed immediately. </p>
<p>This can be seen if we take a look at the React documentation and see exactly what happens when we call the <code>setState</code> function. We use it to update the state variable associated with it, but we're also told:</p>
<blockquote>It accepts a new state value and enqueues a re-render of the component. </blockquote>
<p><em>What does this word "enqueues" mean? </em></p>
<p>In other words, it doesn't re-render the component immediately. It doesn't stop our code right at that line where we update state, but it takes place at some point in the future. This is for performance purposes and this gives us a better idea of what React is doing under the hood.</p>
<p>Based off of this information, we need to change our mental model when we attempt to update state: <strong>the <code>setState</code> function does not immediately update state, it merely schedules a state update for some time in the future. </strong>After which, React takes care of figuring out when that state update takes place. </p>
<p>Therefore, it's not so easy just to be able to look at our code and see exactly when the state update occurred or will occur. </p>
<p>This is important to compare to <code>useRef</code>, which we mentioned earlier as being able to hold on to the data within its current property. Any updates made with useRef are performed synchronously – we can look at our code and see exactly when a given update was performed in <code>useRef</code>, but not with useState.</p>
<h2 id="5-stale-state-can-happen-with-closures">5. Stale state can happen with closures</h2>
<p>Finally, an important problem that can occur with React state is the problem of stale state. </p>
<h3 id="what-is-stale-state-in-react">What is stale state in React? </h3>
<p>Stale state is a problem that occurs whenever we're trying to update state, often within a closure.</p>
<blockquote>A closure is a type of function in JavaScript, where we're using a variable from an outer scope. </blockquote>
<p>This problem of stale state is based around the fact that closure might not capture the most up-to-date state variable value. That's what we mean by stale – we mean that it is old and not the current value that we want. </p>
<p>This problem of stale state is closely related to the topic that we discussed that the previous topic of state updates being asynchronous. </p>
<p>In many cases, what is a problem about state updates being asynchronous is that we don't always get the correct previous value of our state, especially if we're trying to update state based off of that previous value. </p>
<p>We can express the problem of a stale closure within a simple counter application that updates the count after a second using the <code>setTimeout</code> function.</p>
<p>Because setTimeout creates a closure, we are accessing a stale value of our state variable, <code>count</code>, when we call <code>setCount</code>.</p><pre><code class="language-js">import React from 'react';
export default function App() {
const [count, setCount] = React.useState(0);
function delayAddOne() {
setTimeout(() =&gt; {
setCount(count + 1);
}, 1000);
}
return (
&lt;&gt;
&lt;h1&gt;Count: {count}&lt;/h1&gt;
&lt;button onClick={delayAddOne}&gt;+ 1&lt;/button&gt;
&lt;/&gt;
);
}</code></pre>
<p>The problem is apparent when we run our application. Despite clicking the button multiple times, it is still only incremented by one every second:</p>
<p>We can fix this problem of our stale state within our closure by using a more reliable method of updating state. The state updates are still going to be scheduled, but it will make it possible to reliably get the previous value of state. </p>
<p>We do this with the help of providing an inner function to the <code>setState</code> function. In the body of the function, we can get the previous state within the parameters of this function and then return what we want the next state to be. </p>
<p>In our case, it will be the previous count value incremented by one:</p><pre><code class="language-js">import React from 'react';
export default function App() {
const [count, setCount] = React.useState(0);
function delayAddOne() {
setTimeout(() =&gt; {
// stale state problem goes away using inner function
setCount(prevCount =&gt; prevCount + 1);
}, 1000);
}
return (
&lt;div&gt;
&lt;h1&gt;Count: {count}&lt;/h1&gt;
&lt;button onClick={delayAddOne}&gt;+ 1&lt;/button&gt;
&lt;/div&gt;
);
}</code></pre>
<blockquote>Another interesting thing to note if you take a look at the React documentation is that if nothing is returned from this function, then no re-render is going to take place whatsoever. </blockquote>
<p>Once we provide this inner function to <code>setState</code> to reliably get the previous state and return the new state from our function, our stale state problem due to our closure goes away.</p>
<h2 id="enjoythispostjointhereactbootcamp">Enjoy this post? Join The React Bootcamp</h2>
<p><strong><a href="http://bit.ly/join-react-bootcamp">The React Bootcamp</a></strong> takes everything you should know about learning React and bundles it into one comprehensive package, including videos, cheatsheets, plus special bonuses.</p>
<p>Gain the insider information hundreds of developers have already used to master React, find their dream jobs, and take control of their future:</p>
<p><a href="http://bit.ly/join-react-bootcamp"><img src="https://reedbarger.nyc3.digitaloceanspaces.com/react-bootcamp-banner.png" alt="The React Bootcamp"></a><br>
<em>Click here to be notified when it opens</em>
</p>
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
