---
card: "/images/default.jpg"
tags: [React]
description: "There are many essential concepts and lessons that React deve"
author: "Milad E. Fahmy"
title: "5 Key React Lessons the Tutorials Don't Teach You"
created: "2021-08-15T19:26:37+02:00"
modified: "2021-08-15T19:26:37+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-react-hooks tag-state-management tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">5 Key React Lessons the Tutorials Don't Teach You</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/04/5-key-lessons-react-tutorials-dont-teach.png 300w,
/news/content/images/size/w600/2021/04/5-key-lessons-react-tutorials-dont-teach.png 600w,
/news/content/images/size/w1000/2021/04/5-key-lessons-react-tutorials-dont-teach.png 1000w,
/news/content/images/size/w2000/2021/04/5-key-lessons-react-tutorials-dont-teach.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/04/5-key-lessons-react-tutorials-dont-teach.png" alt="5 Key React Lessons the Tutorials Don't Teach You">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>There are many essential concepts and lessons that React developers need to know that simply aren't covered in most tutorials. </p>
<p>I have handpicked the topics I believe are some of the most important for you to know, but that few articles have dedicated the time to cover in detail.</p>
<p>Let's take a look at five key React lessons worth knowing which you might not find elsewhere.</p>
<blockquote>Want to learn all the skills you need to become a highly-paid React developer? Check out the <a href="https://reactbootcamp.com"><strong>React Bootcamp</strong></a>.</blockquote>
<h2 id="1-how-react-state-is-actually-updated">1. How React state is actually updated</h2>
<p>As a React developer, you know that state can be created and updated with the <code>useState</code> and <code>useReducer</code> hooks.</p>
<p>But what happens exactly when you update a component's state with either of these hooks? Is the state updated immediately or is it done at some later time?</p>
<p>Let's look at the following code, which is a very simple counter application. As you would expect, you can click on the button and our counter increases by 1.</p><pre><code class="language-js">import React from 'react';
export default function App() {
const [count, setCount] = React.useState(0)
function addOne() {
setCount(count + 1);
}
return (
&lt;div&gt;
&lt;h1&gt;Count: {count}&lt;/h1&gt; {/* 1 (as we expect) */}
&lt;button onClick={addOne}&gt;+ 1&lt;/button&gt;
&lt;/div&gt;
);
}</code></pre>
<p>But what if we attempt to add an additional line, which also updates our count by one – what do you think will happen? </p>
<p>When you click on the button, will our displayed count increase by one or two?</p><pre><code class="language-js">import React from 'react';
export default function App() {
const [count, setCount] = React.useState(0)
function addOne() {
setCount(count + 1);
setCount(count + 1);
}
return (
&lt;div&gt;
&lt;h1&gt;Count: {count}&lt;/h1&gt; {/* 1?! */}
&lt;button onClick={addOne}&gt;+ 1&lt;/button&gt;
&lt;/div&gt;
);
}</code></pre>
<p>If we run this code we see it's incremented only by one! Despite attempting to increment the count by one twice, with two separate state updates. </p>
<p><em>Why does our counter display 1, despite clearly incrementing state by 1 two times?</em></p>
<p>The reason for this is that React schedules a state update to be performed when we update state the first time. Because it is just scheduled and is not performed immediately (it is asynchronous and not synchronous), our <code>count</code> variable is not updated before we attempt to update it a second time. </p>
<p>In other words, because the state update is scheduled, not performed immediately, the second time we called <code>setCount</code>, <code>count</code> is still just <code>0</code>, not <code>1</code>. </p>
<p>The way that we can fix this to update state reliably, despite state updates being asynchronous, is to use the inner function that's available within the <code>useState</code> setter function. </p>
<p>This allows us to get the previous state and return the value that we want it to be in the body of the inner function. When we use this pattern, we see that it's incremented by two like we originally wanted:</p><pre><code class="language-js">import React from 'react';
export default function App() {
const [count, setCount] = React.useState(0)
function addOne() {
setCount(prevCount =&gt; prevCount + 1); // 1
setCount(prevCount =&gt; prevCount + 1); // 2
}
return (
&lt;div&gt;
&lt;h1&gt;Count: {count}&lt;/h1&gt;
&lt;button onClick={addOne}&gt;+ 1&lt;/button&gt;
&lt;/div&gt;
);
}</code></pre>
<h2 id="2-it-s-better-to-use-multiple-effects-instead-of-one">2. It's better to use multiple effects instead of one</h2>
<p>When performing a side effect, most React developers will <code>useEffect</code> just once and attempt to perform multiple side effects within the same effect function. </p>
<p>What does that look like? Below you can see where we are fetching both post and comment data in one useEffect hook to be put in their respective state variables:</p><pre><code class="language-js">import React from "react";
export default function App() {
const [posts, setPosts] = React.useState([]);
const [comments, setComments] = React.useState([]);
React.useEffect(() =&gt; {
// fetching post data
fetch("https://jsonplaceholder.typicode.com/posts")
.then((res) =&gt; res.json())
.then((data) =&gt; setPosts(data));
// fetching comments data
fetch("https://jsonplaceholder.typicode.com/comments")
.then((res) =&gt; res.json())
.then((data) =&gt; setComments(data));
}, []);
return (
&lt;div&gt;
&lt;PostsList posts={posts} /&gt;
&lt;CommentsList comments={comments} /&gt;
&lt;/div&gt;
);
}</code></pre>
<p>Instead of attempting to cram all of your side effects into a single effect hook, just as you can use the state hook more than once, you can use several effects. </p>
<p>Doing so allows us to separate our different actions into different effects for a better separation of concerns. </p>
<p>A better separation of concerns is a major benefit that React hooks provide as compared to using lifecycle methods within class components. </p>
<p>In methods like <code>componentDidMount</code>, for example, it was necessary to include any action that we want to be performed after our component mounted. You could not break up your side effects into multiple methods – each lifecycle method in classes can be used once and only once. </p>
<p>The major benefit of React hooks is that we are able to break up our code based upon what it's doing. Not only can we separate actions that we are performing after rendering into multiple effects, but we can also co-locate our state:</p><pre><code class="language-js">import React from "react";
export default function App() {
const [posts, setPosts] = React.useState([]);
React.useEffect(() =&gt; {
fetch("https://jsonplaceholder.typicode.com/posts")
.then((res) =&gt; res.json())
.then((data) =&gt; setPosts(data));
}, []);
const [comments, setComments] = React.useState([]);
React.useEffect(() =&gt; {
fetch("https://jsonplaceholder.typicode.com/comments")
.then((res) =&gt; res.json())
.then((data) =&gt; setComments(data));
}, []);
return (
&lt;div&gt;
&lt;PostsList posts={posts} /&gt;
&lt;CommentsList comments={comments} /&gt;
&lt;/div&gt;
);
}</code></pre>
<p>This means we can put the state hook with the effect hook that it is related to. This helps to organize our code much better and better understand what it's doing at a glance.</p>
<h2 id="3-don-t-optimize-functions-that-update-state-usestate-usereducer-">3. Don't optimize functions that update state (useState, useReducer)</h2>
<p>A common task whenever we pass down a callback function from a parent component to a child component is to prevent it from being recreated, unless its arguments have changed. </p>
<p>We can perform this optimization with the help of the <code>useCallback</code> hook. </p>
<p>useCallback was created specifically for callback functions that are passed to child components to make sure that they are not recreated needlessly, which incurs a performance hit on our components whenever there is a re-render. </p>
<p>This is because whenever our parent component re-renders, it will cause all child components to re-render as well. This is what causes our callback functions to be recreated on every re-render. </p>
<p>However, if we are using a setter function to update state that we've created with the useState or useReducer hooks, we do not need to wrap that with useCallback. </p>
<p>In other words, there is no need to do this:</p><pre><code class="language-js">import React from "react";
export default function App() {
const [text, setText] = React.useState("")
// Don't wrap setText in useCallback (it won't change as is)
const handleSetText = React.useCallback((event) =&gt; {
setText(event.target.value);
}, [])
return (
&lt;form&gt;
&lt;Input text={text} handleSetText={handleSetText} /&gt;
&lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
);
}
function Input({ text, handleSetText }) {
return(
&lt;input type="text" value={text} onChange={handleSetText}  /&gt;
)
}</code></pre>
<p> The reason comes directly from the React documentation:</p>
<blockquote>React guarantees that setState function identity is stable and won't change on re-renders. This is why it's safe to omit from the useEffect or useCallback dependency list. </blockquote>
<p>Therefore, not only do we not need to optimize it unnecessarily with useCallback, but we also do not need to include it as a dependency within useEffect because it will not change.</p>
<p>This is important to note because in many cases, it can cut down the code that we need to use. And most importantly, it is an unproductive attempt to optimize your code as it can incur performance problems of its own. </p>
<h2 id="4-the-useref-hook-can-preserve-state-across-renders">4. The useRef hook can preserve state across renders</h2>
<p>As React developers, it's very helpful sometimes to be able to reference a given React element with the help of a ref. &nbsp;We create refs in React with the help of the <code>useRef</code> hook. </p>
<p>It's important to note, however, that <code>useRef</code> isn't just helpful for referencing to a certain DOM element. The React documentation says so itself: </p>
<blockquote>The ref object that's created by useRef is a generic container with a current property that's mutable and can hold any value. </blockquote>
<p>There are certain benefits to be able to store and update values with <code>useRef</code>. It allows us to store a value that will not be in memory that will not be erased across re-renders. </p>
<p>If we wanted to keep track of a value across renders with the help of a simple variable, it would be reinitialized each time the component renders. However, if you use a ref, the value stored in it will remain constant across renders of your component. </p>
<p><em>What is a use case for leveraging useRef in this way? </em></p>
<p>This could be helpful in the event that we wanted to perform a given side effect on the initial render only, for example:</p><pre><code class="language-js">import React from "react";
export default function App() {
const [count, setCount] = React.useState(0);
const ref = React.useRef({ hasRendered: false });
React.useEffect(() =&gt; {
if (!ref.current.hasRendered) {
ref.current.hasRendered = true;
console.log("perform action only once!");
}
}, []);
return (
&lt;div&gt;
&lt;button onClick={() =&gt; setCount(count + 1)}&gt;Count: {count}&lt;/button&gt;
&lt;/div&gt;
);
}</code></pre>
<p>Try running this code yourself.</p>
<p>As you will see, no matter how many times the button is clicked, state is updated, and a re-render takes place, the action we want to perform (see <code>console.log</code>) is only performed once.</p>
<h2 id="5-how-to-prevent-your-react-app-from-crashing">5. How to prevent your React app from crashing</h2>
<p>One of the most important lessons for React developers to know, especially if they haven't pushed a React application to the web, is what to do with uncaught errors. </p>
<p>In the example below, we are attempting to display a Header component in our app, but are performing an action that results in an error. Namely, attempting to get a property from a null value:</p><pre><code class="language-js">import React from "react";
export default function App() {
return (
&lt;&gt;
&lt;Header /&gt;
&lt;/&gt;
);
}
function Header() {
const user = null;
return &lt;h1&gt;Hello {user.name}&lt;/h1&gt;; // error!
}</code></pre>
<p>If we push this code to production, we will see a blank screen exactly like this:</p>
<p><em>Why do we see nothing?</em> </p>
<p>Again, we can find the answer for this within the React documentation: </p>
<blockquote>As of React 16, errors that were not caught by any error boundary will result in unmounting of the whole React component tree. </blockquote>
<p>While in development, you see a big red error message with a stack trace that tells you where the error can be found. When your application is live, however, you're just going to see a blank screen. </p>
<p>This is not the desired behavior that you want for your application. </p>
<p>But there is a way to fix it, or at least show your users something that tells them that an error took place if the application accidentally crashes. You can wrap your component tree in what's called an error boundary. </p>
<p>Error boundaries are components that allow us to catch errors and show users a fallback message that tells them that something wrong occurred. That might include instructions on how to dismiss the error (like reloading the page). </p>
<p>We can use an error boundary with the help of the package <code>react-error-boundary</code>. We can wrap it around the component we believe is error-prone. It can also be wrapped around our entire app component tree:</p><pre><code class="language-js">import React from "react";
import { ErrorBoundary } from "react-error-boundary";
export default function App() {
return (
&lt;ErrorBoundary FallbackComponent={ErrorFallback}&gt;
&lt;Header /&gt;
&lt;/ErrorBoundary&gt;
);
}
function Header() {
const user = null;
return &lt;h1&gt;Hello {user.name}&lt;/h1&gt;;
}
function ErrorFallback({ error }) {
return (
&lt;div role="alert"&gt;
&lt;p&gt;Oops, there was an error:&lt;/p&gt;
&lt;p style={{ color: "red" }}&gt;{error.message}&lt;/p&gt;
&lt;/div&gt;
);
}</code></pre>
<p>You can also display the error message however you like and style it just like you would any normal component. </p>
<p>The result that we get when an error does occur is much better:</p>
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
