---
card: "/images/default.jpg"
tags: [React]
description: State is the most complex thing in React, and it's something
author: "Milad E. Fahmy"
title: "How State Works in React – Explained with Code Examples"
created: "2021-08-15T19:26:45+02:00"
modified: "2021-08-15T19:26:45+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How State Works in React – Explained with Code Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/04/state.jpg 300w,
/news/content/images/size/w600/2021/04/state.jpg 600w,
/news/content/images/size/w1000/2021/04/state.jpg 1000w,
/news/content/images/size/w2000/2021/04/state.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/04/state.jpg" alt="How State Works in React – Explained with Code Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>State is the most complex thing in React, and it's something both beginners and experienced developers struggle to understand. So in this article, we'll explore all the basics of state in React.</p>
<p>Before understanding state, let's first understand some fundamentals so it's easy to wrap your head around state later.</p>
<h2 id="how-to-render-data-in-the-ui-in-react">How to Render Data in the UI in React</h2>
<p>To render anything on the screen, we use the <code>ReactDOM.render</code> method in React.</p>
<p>It has the following syntax:</p><pre><code class="language-js">ReactDOM.render(element, container[, callback])
</code></pre>
<ul>
<li><code>element</code> can be any HTML element, JSX or a component that returns JSX</li>
<li><code>container</code> is the element on the UI inside which we want to render the data</li>
<li><code>callback</code> is the optional function we can pass which gets called once something is rendered or re-rendered on the screen</li>
</ul>
<p>Take a look at the below code:</p><pre><code class="language-jsx">import React from "react";
import ReactDOM from "react-dom";
const rootElement = document.getElementById("root");
ReactDOM.render(&lt;h1&gt;Welcome to React!&lt;/h1&gt;, rootElement);
</code></pre>
<p>Here's a <a href="https://codesandbox.io/s/focused-shockley-oh4tn?file=/src/index.js">Code Sandbox Demo</a>.</p>
<p>Here, we're just rendering a single h1 element to the screen.</p>
<p>To render multiple elements we can do it as shown below:</p><pre><code class="language-jsx">import React from "react";
import ReactDOM from "react-dom";
const rootElement = document.getElementById("root");
ReactDOM.render(
&lt;div&gt;
&lt;h1&gt;Welcome to React!&lt;/h1&gt;
&lt;p&gt;React is awesome.&lt;/p&gt;
&lt;/div&gt;,
rootElement
);
</code></pre>
<p>Here's a <a href="https://codesandbox.io/s/white-hooks-dgru0?file=/src/index.js">Code Sandbox Demo</a>.</p>
<p>We can also take out the JSX and put it in a variable which is the preferred way of rendering content if it gets larger, like this:</p><pre><code class="language-jsx">import React from "react";
import ReactDOM from "react-dom";
const rootElement = document.getElementById("root");
const content = (
&lt;div&gt;
&lt;h1&gt;Welcome to React!&lt;/h1&gt;
&lt;p&gt;React is awesome.&lt;/p&gt;
&lt;/div&gt;
);
ReactDOM.render(content, rootElement);
</code></pre>
<p>Here's a <a href="https://codesandbox.io/s/trusting-night-5g825?file=/src/index.js">Code Sandbox Demo</a>.</p>
<p>Here, we've also added an extra pair of round brackets to align the JSX properly and to make it a single JSX expression.</p>
<p>If you want to understand JSX in detail and its various important features, check out <a href="/news/jsx-in-react-introduction/">my article here</a>.</p>
<p>Now, let's display a button and some text on the screen:</p><pre><code class="language-jsx">import React from "react";
import ReactDOM from "react-dom";
const rootElement = document.getElementById("root");
let counter = 0;
const handleClick = () =&gt; {
counter++;
console.log("counter", counter);
};
const content = (
&lt;div&gt;
&lt;button onClick={handleClick}&gt;Increment counter&lt;/button&gt;
&lt;div&gt;Counter value is {counter}&lt;/div&gt;
&lt;/div&gt;
);
ReactDOM.render(content, rootElement);
</code></pre>
<p>Here's a <a href="https://codesandbox.io/s/quizzical-cohen-x55p8?file=/src/index.js">Code Sandbox Demo</a>.</p>
<p>As you can see, when we click on the button, the <code>counter</code> value is incremented as you can see in the console. But on the UI it's not getting updated.</p>
<p>This is because we're rendering the <code>content</code> JSX only once using the <code>ReactDOM.render</code> method when the page is loaded. And we're not calling it again – so even though the value of <code>counter</code> is updating, it's not getting displayed on the UI. So let's fix this.</p><pre><code class="language-jsx">import React from "react";
import ReactDOM from "react-dom";
const rootElement = document.getElementById("root");
let counter = 0;
const handleClick = () =&gt; {
counter++;
console.log("counter", counter);
renderContent();
};
const renderContent = () =&gt; {
const content = (
&lt;div&gt;
&lt;button onClick={handleClick}&gt;Increment counter&lt;/button&gt;
&lt;div&gt;Counter value is {counter}&lt;/div&gt;
&lt;/div&gt;
);
ReactDOM.render(content, rootElement);
};
renderContent();
</code></pre>
<p>Here's a <a href="https://codesandbox.io/s/adoring-noether-8gsgu?file=/src/index.js">Code Sandbox Demo</a>.</p>
<p>Here, we've moved the <code>content</code> JSX and &nbsp;<code>ReactDOM.render</code> method call inside a <code>renderContent</code> function. Then once it's defined, we're calling the function so it will render the content on the UI on page load.</p>
<p>Note that we've also added the <code>renderContent</code> function call inside the <code>handleClick</code> function. So every time we click on the button, the <code>renderContent</code> function will be called and we'll see the updated counter on the UI.</p>
<p>As can you see, it's working as expected and the <code>counter</code> value is correctly getting displayed on the UI.</p>
<p>You might think that it's costly to re-render the entire DOM again on every button click – but it's not. This is because React uses a Virtual DOM algorithm where it checks what has been changed on the UI and only re-renders the elements which were changed. So the entire DOM is not re-rendered again.</p>
<p>Here's a <a href="https://8gsgu.csb.app/">Preview link</a> for the Code Sandbox to try it yourself.</p>
<p>As you can see in the HTML structure, only the <code>counter</code> value is re-rendered as it's the only thing flashing in the HTML structure. This is the reason React is so fast and the virtual DOM makes React more useful.</p>
<p>But still, it's not feasible to call the <code>renderContent</code> function every time we want to update the UI. So React added the concept of State.</p>
<h2 id="introduction-to-state-in-react">Introduction to State in React</h2>
<p>State allows us to manage changing data in an application. It's defined as an object where we define key-value pairs specifying various data we want to track in the application.</p>
<p>In React, all the code we write is defined inside a component.</p>
<p>There are mainly two ways of creating a component in React:</p>
<ul>
<li>class-based component</li>
<li>functional component</li>
</ul>
<blockquote>We'll start with class-based components now. Later in this article, we will see a functional component way of creating components.</blockquote>
<p>You should know how to work with class-based components as well as functional components, including hooks. </p>
<p>Instead of directly learning functional components with React hooks, you should first understand class-based components so it's easy to clear the basics.</p>
<p>You can create a component by using an ES6 class keyword and by extending the <code>Component</code> class provided by React like this:</p><pre><code class="language-jsx">import React from "react";
import ReactDOM from "react-dom";
class Counter extends React.Component {
constructor(props) {
super(props);
this.state = {
counter: 0
};
this.handleClick = this.handleClick.bind(this);
}
handleClick() {
this.state.counter = this.state.counter + 1;
console.log("counter", this.state.counter);
}
render() {
const { counter } = this.state;
return (
&lt;div&gt;
&lt;button onClick={this.handleClick}&gt;Increment counter&lt;/button&gt;
&lt;div&gt;Counter value is {counter}&lt;/div&gt;
&lt;/div&gt;
);
}
}
const rootElement = document.getElementById("root");
ReactDOM.render(&lt;Counter /&gt;, rootElement);
</code></pre>
<blockquote>Note that the name of the component starts with a capital letter (<code>Counter</code>).</blockquote>
<p>Here's a <a href="https://codesandbox.io/s/nostalgic-burnell-57fhd?file=/src/index.js">Code Sandbox Demo</a>.</p>
<p>Let's explore what we're doing here.</p>
<ul>
<li>Inside the constructor function, we're first calling <code>super</code> by passing <code>props</code> to it. Then we've defined the state as an object with <code>counter</code> as a property of the object.</li>
<li>We're also binding <code>this</code>'s context to the <code>handleClick</code> function so inside the <code>handleClick</code> function we get the correct context for <code>this</code>.</li>
<li>Then inside the <code>handleClick</code> function, we're updating the <code>counter</code> and logging it to the console.</li>
<li>And inside the <code>render</code> method, we're returning the JSX that we want to render on the UI.</li>
</ul>
<p>The <code>counter</code> is correctly getting updated as you can see in the console – but it's not getting updated on the UI.</p>
<p>This is because we're directly updating the state inside the <code>handleClick</code> function as:</p><pre><code class="language-js">this.state.counter = this.state.counter + 1</code></pre>
<p>So React does not re-render the component (and <strong>it's also a bad practice to directly update state</strong>).</p>
<blockquote>Never ever directly update/mutate state in React, as it's a bad practice and it will cause issues in your application. Also, your component will not be re-rendered on state change if you make a direct state change.</blockquote>
<h2 id="syntax-of-setstate">Syntax of setState</h2>
<p>To make the state change, React gives us a <code>setState</code> function that allows us to update the value of the state.</p>
<p>The <code>setState</code> function has the following syntax:</p><pre><code>setState(updater, [callback])
</code></pre>
<ul>
<li><code>updater</code> can either be a function or an object</li>
<li><code>callback</code> is an optional function that gets executed once the state is successfully updated</li>
</ul>
<blockquote>Calling <code>setState</code> automatically re-renders the entire component and all its child components. We don't need to manually re-render as seen previously using the <code>renderContent</code> function.</blockquote>
<h2 id="how-to-use-a-function-to-update-state-in-react">How to Use a Function to Update State in React</h2>
<p>Let's modify the <a href="https://codesandbox.io/s/nostalgic-burnell-57fhd?file=/src/index.js">above Code Sandbox</a> to use the <code>setState</code> function for updating the state.</p>
<p>Here's an updated <a href="https://codesandbox.io/s/withered-dust-p3emg?file=/src/index.js">Code Sandbox Demo</a>.</p>
<p>If you check the updated <code>handleClick</code> function, it looks like this:</p><pre><code class="language-js">handleClick() {
this.setState((prevState) =&gt; {
return {
counter: prevState.counter + 1
};
});
console.log("counter", this.state.counter);
}
</code></pre>
<p>Here, we're passing a function as a first argument to the <code>setState</code> function and we're returning a new state object with <code>counter</code> incremented by 1 based on the previous value of <code>counter</code>.</p>
<p>We're using the arrow function in the above code, but using a normal function will also work.</p>
<p>If you notice, we're correctly getting the updated value of the <code>counter</code> on the UI. But in the console, we're getting the previous <code>counter</code> value even though we've added console.log after the <code>this.setState</code> call.</p>
<blockquote>This is because the <code>setState</code> function is asynchronous in nature.</blockquote>
<p>This means that even though we called <code>setState</code> to increment the <code>counter</code> value by 1, it does not happen immediately. This is because when we call the <code>setState</code> function, the entire component gets re-rendered – so React needs to check what all needs to be changed using the Virtual DOM algorithm and then perform various checks for an efficient update of the UI.</p>
<p>This is the reason you may not get the updated value for <code>counter</code> immediately after the call to <code>setState</code>.</p>
<blockquote>This is a very important thing to keep in mind in React, as you will encounter difficult to debug issues if you don't write your code keeping in mind that <code>setState</code> is asynchronous in React.</blockquote>
<p>If you want to get the updated value of the state immediately after the <code>setState</code> call, you can pass a function as the second argument to the <code>setState</code> call which will be executed once the state is updated.</p>
<p>Here's a <a href="https://codesandbox.io/s/jolly-dawn-65wis?file=/src/index.js">Code Sandbox Demo</a> with that change.</p>
<p>As you can see, we're getting the correct value of <code>counter</code> in the console as soon as it's updated on the UI.</p>
<p>In the above demo, the <code>handleClick</code> function looks like this:</p><pre><code class="language-js">handleClick() {
this.setState(
(prevState) =&gt; {
return {
counter: prevState.counter + 1
};
},
() =&gt; console.log("counter", this.state.counter)
);
}
</code></pre>
<p>So here, for the <code>setState</code> function call, we're passing two arguments. The first is a function that returns a new state and the second is a callback function that will be called once the state is updated. We're just logging the updated counter value to the console in the callback function.</p>
<blockquote>Even though React provides a callback function to get the updated state value immediately, it's recommended that you use it only for quick testing or logging.</blockquote>
<p>Instead, React recommends that you use the <code>componentDidUpdate</code> method, which is a React life cycle method that looks like this:</p><pre><code class="language-js">componentDidUpdate(prevProps, prevState) {
if (prevState.counter !== this.state.counter) {
// do something
console.log("counter", this.state.counter);
}
}
</code></pre>
<p>Here's a <a href="https://codesandbox.io/s/youthful-pine-txb1o?file=/src/index.js">Code Sandbox Demo</a>.</p>
<p>You can find more information about why to use the <code>componentDidUpdate</code> instead of <code>setState</code> callback <a href="https://stackoverflow.com/questions/56501409/what-is-the-advantage-of-using-componentdidupdate-over-the-setstate-callback#answer-56502614">here</a>.</p>
<h2 id="how-to-simplify-state-and-method-declaration">How to Simplify State and Method Declaration</h2>
<p>If you see the constructor code in the above Code Sandbox demos, you will see that it looks like this:</p><pre><code class="language-js">constructor(props) {
super(props);
this.state = {
counter: 0
};
this.handleClick = this.handleClick.bind(this);
}
</code></pre>
<p>To use the <code>this</code> keyword inside the <code>handleClick</code> event handler, we have to bind it in the constructor like this:</p><pre><code class="language-js">this.handleClick = this.handleClick.bind(this);
</code></pre>
<p>Also, to declare the state, we have to create a constructor, add a <code>super</code> call inside it, and then we can declare the state.</p>
<p>This is not just cumbersome but also makes the code unnecessarily complicated.</p>
<p>As the number of event handlers increases, the number of <code>.bind</code> calls also increases. We can avoid doing this using the class properties syntax.</p>
<p>Here's an updated <a href="https://codesandbox.io/s/sad-bassi-7fxnl?file=/src/index.js">Code Sandbox Demo</a> with the class properties syntax.</p>
<p>Here, we've moved the state directly inside the class like this:</p><pre><code class="language-js">state = {
counter: 0
};
</code></pre>
<p>and the <code>handlerClick</code> event handler is changed to arrow function syntax like this:</p><pre><code class="language-js">handleClick = () =&gt; {
this.setState((prevState) =&gt; {
return {
counter: prevState.counter + 1
};
});
};
</code></pre>
<p>As arrow functions do not have their own <code>this</code> context, it will take the context as the class so there is no need to use the <code>.bind</code> method.</p>
<p>This makes the code a lot simpler and easier to understand as we don't need to keep binding every event handler.</p>
<blockquote><a href="https://github.com/facebook/create-react-app">create-react-app</a> already has in-built support for it and you can start using this syntax right now.</blockquote>
<p>We'll be using this syntax from now onwards, as it is the more popular and preferred way to write React components.</p>
<p>If you want to learn more about this class properties syntax, check out <a href="https://javascript.plainenglish.io/how-to-write-clean-and-easy-to-understand-react-code-using-class-properties-syntax-5b375b0618d3?source=friends_link&amp;sk=c170992cab9025fddb7b34b8894ea993">my article here</a>.</p>
<h2 id="how-to-use-es6-shorthand-syntax">How to Use ES6 Shorthand Syntax</h2>
<p>If you check the <code>setState</code> function call in the above code sandbox, it looks like this:</p><pre><code class="language-js">this.setState((prevState) =&gt; {
return {
counter: prevState.counter + 1
};
});
</code></pre>
<p>It's a lot of code. Just for returning an object from a function, we're using 5 lines of code.</p>
<p>We can simplify it to a single line as below:</p><pre><code class="language-js">this.setState((prevState) =&gt; ({ counter: prevState.counter + 1 }));
</code></pre>
<p>Here, we've wrapped the object in round brackets to make it implicitly return. This works because if we have a single statement in an arrow function we can skip the return keyword and curly brackets like this:</p><pre><code class="language-js">const add = (a, b) =&gt; {
return a + b;
}
// the above code is the same as below code:
const add = (a, b) =&gt; a + b;
</code></pre>
<p>But as the opening curly bracket is considered the start of the function body, we need to wrap the object inside round brackets to make it work properly.</p>
<p>Here's an updated <a href="https://codesandbox.io/s/zen-galois-pew17?file=/src/index.js">Code Sandbox Demo</a> with this change.</p>
<h2 id="how-to-use-an-object-as-a-state-updater-in-react">How to Use an Object as a State Updater in React</h2>
<p>In the above code, we've used a function as the first argument for <code>setState</code> but we can also pass an object as an argument.</p>
<p>Here's a <a href="https://codesandbox.io/s/zealous-nobel-yvvmw?file=/src/index.js">Code Sandbox Demo</a>.</p>
<p>The component code looks like this:</p><pre><code class="language-js">class User extends React.Component {
state = {
name: "Mike"
};
handleChange = (event) =&gt; {
const value = event.target.value;
this.setState({ name: value });
};
render() {
const { name } = this.state;
return (
&lt;div&gt;
&lt;input
type="text"
onChange={this.handleChange}
placeholder="Enter your name"
value={name}
/&gt;
&lt;div&gt;Hello, {name}&lt;/div&gt;
&lt;/div&gt;
);
}
}
</code></pre>
<p>Here, we've added an input textbox where the user types their name and it's displayed below the textbox as the user types into the textbox.</p>
<p>In the state, we've initialized the name property to <code>Mike</code> and we've added an <code>onChange</code> handler to the input textbox like this:</p><pre><code class="language-js">state = {
name: "Mike"
};
...
&lt;input
type="text"
onChange={this.handleChange}
placeholder="Enter your name"
value={name}
/&gt;
</code></pre>
<p>So when we type anything in the textbox, we're updating the state with the value typed by passing an object to the <code>setState</code> function.</p><pre><code class="language-js">handleChange = (event) =&gt; {
const value = event.target.value;
this.setState({ name: value });
}
</code></pre>
<blockquote>But which form of <code>setState</code> should we use – what's preferred? We have to decide whether to pass an object or a function as a first argument to the <code>setState</code> function.</blockquote>
<p><strong>The answer is:</strong> pass an object if you don't need the <code>prevState</code> parameter to find the next state value. Otherwise pass the function as the first argument to <code>setState</code>.</p>
<p>But you need to be aware of one issue with passing an object as an argument.</p>
<p>Take a look at <a href="https://codesandbox.io/s/eloquent-panini-u2ooe?file=/src/index.js">this Code Sandbox Demo</a>.</p>
<p>In the above demo, the <code>handleClick</code> method looks like this:</p><pre><code class="language-js">handleClick = () =&gt; {
const { counter } = this.state;
this.setState({
counter: counter + 1
});
}
</code></pre>
<p>We're taking the current value of the <code>counter</code> and incrementing it by 1. It works fine, as you can see below:</p>
<p>Now, take a look at <a href="https://codesandbox.io/s/busy-johnson-oqvfn?file=/src/index.js">this Code Sandbox Demo</a> which is a modified version of the previous Code Sandbox demo.</p>
<p>Our <code>handleClick</code> method looks like this now:</p><pre><code class="language-js">handleClick = () =&gt; {
this.setState({
counter: 5
});
const { counter } = this.state;
this.setState({
counter: counter + 1
});
}
</code></pre>
<p>Here, we're first setting the <code>counter</code> value to 5 and then incrementing it by 1. So the expected value of <code>counter</code> is 6. Let's see if that's the case.</p>
<p>As you can see, when we click the button the first time, we expected the <code>counter</code> value to become 5 – but it becomes 1, and on every subsequent click it's incremented by 1.</p>
<p>This is because, as we have seen previously, the <code>setState</code> function is asynchronous in nature. When we call <code>setState</code>, the value of the <code>counter</code> does not become 5 immediately, so on the next line we're getting the <code>counter</code> value of 0 to which we've initialized the state in the beginning.</p>
<p>So it becomes 1 when we call <code>setState</code> again to increment the <code>counter</code> by 1, and it keeps on incrementing by 1 only.</p>
<p>To fix this issue, we need to use the updater syntax of <code>setState</code> where we pass a function as the first argument.</p>
<p>Here's a <a href="https://codesandbox.io/s/strange-silence-qhykz?file=/src/index.js">Code Sandbox Demo</a>.</p>
<p>In the above demo, the <code>handleClick</code> method looks like this now:</p><pre><code class="language-js">handleClick = () =&gt; {
this.setState({
counter: 5
});
this.setState((prevState) =&gt; {
return {
counter: prevState.counter + 1
};
});
this.setState((prevState) =&gt; {
return {
counter: prevState.counter + 1
};
});
}
</code></pre>
<p>As you can see, when we first click on the button, the value of <code>counter</code> becomes 7. This is as expected, because first we set it to 5 and then incremented it by 1 twice so it becomes 7. And it remains at 7 even if we click the button multiple times, because on every click we're re-setting it to 5 and incrementing twice.</p>
<p>This is because inside the <code>handleClick</code> we're calling <code>setState</code> to set the <code>counter</code> value to 5 by passing an object as the first argument to the <code>setState</code> function. After that, we've called two <code>setState</code> calls where we're using the function as the first argument.</p>
<p>So how does this work correctly?</p>
<p>When React sees a <code>setState</code> call, it schedules an update to make a change to the state because it's asynchronous. But before it completes the state change, React sees that there is another <code>setState</code> call. </p>
<p>Because of this, React will not re-render immediately with a new <code>counter</code> value. Instead it merges all the <code>setState</code> calls and updates the <code>counter</code> based on the previous value of <code>counter</code> as we've used the <code>prevState.counter</code> to calculate the <code>counter</code> value.</p>
<p>And once all the <code>setState</code> calls are completed successfully, only then does React re-render the component. So even if there are three <code>setState</code> calls, React will re-render the component only once, which you can confirm by adding a <code>console.log</code> statement inside the <code>render</code> method.</p>
<blockquote>So the point to remember is that you should be careful when using an object as the first argument to a <code>setState</code> call, as it might result in an unpredictable outcome. Use the function as the first argument to get the correct result based on the previous result.</blockquote>
<p>You might not call <code>setState</code> again and again as we've done in the above demo, but you might call it inside another function as shown below:</p><pre><code class="language-js">state = {
isLoggedIn: false
};
...
doSomethingElse = () =&gt; {
const { isLoggedIn } = this.state;
if(isLoggedIn) {
// do something different
}
};
handleClick = () =&gt; {
// some code
this.setState({ isLoggedIn: true);
doSomethingElse();
}
</code></pre>
<p>In the above code, we've defined an <code>isLoggedIn</code> state and we have two functions <code>handleClick</code> and <code>doSomethingElse</code>. Inside the <code>handleClick</code> function, we're updating the <code>isLoggedIn</code> state value to <code>true</code> and immediately we're calling the <code>doSomethingElse</code> function on the next line.</p>
<p>So inside <code>doSomethingElse</code> you might think that you're going to get the <code>isLoggedIn</code> state as <code>true</code> and the code inside the if condition will be executed. But it will not be executed because <code>setState</code> is asynchronous and the state might not be updated immediately.</p>
<p>That's why React added lifecycle methods like <code>componendDidUpdate</code> to do something when state or props are updated.</p>
<blockquote>Keep an eye out to check if you're using the same <code>state</code> variable again in the next line or next function to do some operation to avoid these undesired results.</blockquote>
<h2 id="how-to-merge-setstate-calls-in-react">How to Merge setState Calls in React</h2>
<p>Take a look at <a href="https://codesandbox.io/s/bold-cache-zcj4u?file=/src/index.js">this CodeSandbox Demo</a>.</p>
<p>Here, we have <code>username</code> and <code>counter</code> properties declared in the state like this:</p><pre><code class="language-js">state = {
counter: 0,
username: ""
};
</code></pre>
<p>and <code>handleOnClick</code> and <code>handleOnChange</code> event handlers declared like this:</p><pre><code class="language-js">handleOnClick = () =&gt; {
this.setState((prevState) =&gt; ({
counter: prevState.counter + 1
}));
};
handleOnChange = (event) =&gt; {
this.setState({
username: event.target.value
});
};
</code></pre>
<p>Check the <code>setState</code> calls in the above functions. You can see that inside the <code>handleOnClick</code> function, we're only setting the state for <code>counter</code>, and inside the <code>handleOnChange</code> function we're only setting the state for <code>username</code>.</p>
<p>So we don't need to set the state for both of the state variables at the same time like this:</p><pre><code class="language-js">this.setState((prevState) =&gt; ({
counter: prevState.counter + 1,
username: "somevalue"
}));
</code></pre>
<p>We can update only the one which we want to update. React will manually merge the other state properties so we don't need to worry about manually merging them ourselves.</p>
<p>As you can see, we're successfully changing the <code>counter</code> and <code>username</code> independently of each other.</p>
<h2 id="how-to-use-state-in-functional-components-in-react">How to Use State in Functional Components in React</h2>
<p>Up until now, we've seen how to use state in class-based components. Let's now see how to use it in functional components.</p>
<p>Functional components are similar to class components, except that they do not have state and lifecycle methods. This is why you may have heard them called stateless functional components.</p>
<p>These components only accept props and return some JSX.</p>
<p>Functional components make code shorter and easier to understand and test.</p>
<p>They're also a little faster to execute, as they don't have lifecycle methods. They also don't have the extra data brought by the <code>React.Component</code> class which we extend in class based components.</p>
<p>Take a look at <a href="https://codesandbox.io/s/sleepy-pascal-8ugh3?file=/src/index.js">this Code Sandbox Demo</a>.</p>
<p>Here, we're loading a list of 20 random users from the <a href="https://randomuser.me/">random user generator API</a>, when the component is loaded inside the <code>componentDidMount</code> method like this:</p><pre><code class="language-js">componentDidMount() {
axios
.get("https://randomuser.me/api/?page=0&amp;results=20")
.then((response) =&gt; this.setState({ users: response.data.results }))
.catch((error) =&gt; console.log(error));
}
</code></pre>
<p>And once we've gotten those users, we're setting it to the <code>users</code> state and displaying it on the UI.</p><pre><code class="language-jsx">{users.map((user) =&gt; (
&lt;User key={user.login.uuid} name={user.name} email={user.email} /&gt;
))}
</code></pre>
<p>Here, we're passing all the data that we need to display to the <code>User</code> component.</p>
<p>The <code>User</code> component looks like this:</p><pre><code class="language-jsx">const User = (props) =&gt; {
const { name, email } = props;
const { first, last } = name;
return (
&lt;div&gt;
&lt;p&gt;
Name: {first} {last}
&lt;/p&gt;
&lt;p&gt;Email: {email} &lt;/p&gt;
&lt;hr /&gt;
&lt;/div&gt;
);
};
</code></pre>
<p><strong>This <code>User</code> component is a functional component.</strong></p>
<p>A functional component is a function that starts with a capital letter and returns JSX.</p>
<p>Always remember to start your component name with a capital letter like <code>User</code> whether it's a class-based component or a functional component. That's how React differentiates it from normal HTML elements when we use them like <code>&lt;User /&gt;</code>.</p>
<p>If we use <code>&lt;user /&gt;</code>, React will check for the HTML element with the name <code>user</code>. Since there is no such HTML element, you'll not get the desired output.</p>
<p>In the above <code>User</code> functional component, we get the props passed to the component inside the <code>props</code> parameter of the function.</p>
<p>So instead of using <code>this.props</code> as in class components, we're using just <code>props</code>.</p>
<p>We never use the <code>this</code> keyword in functional components, so it avoids the various issues associated with <code>this</code> binding.</p>
<p>Therefore, functional components are preferred over class components.</p>
<p>Once we have <code>props</code>, we're using the object destructuring syntax to get the values out of it and display on the UI.</p>
<h2 id="how-to-use-state-in-react-hooks">How to Use State in React Hooks</h2>
<p>Starting with version 16.8.0, React introduced hooks. And they've completely changed the way we write code in React. Using React Hooks we can use state and lifecycle methods inside functional components.</p>
<blockquote>React hooks are functional components with added state and lifecycle methods.</blockquote>
<p>So now, there is very little to no difference between class-based components and functional components.</p>
<p>Both of them can have state and life cycle methods.</p>
<p>But React hooks are now preferred for writing React components because they make the code shorter and easier to understand.</p>
<p>You will rarely find React components written using class components nowadays.</p>
<p>To declare state using React Hooks, we need to use the <code>useState</code> hook.</p>
<p>The <code>useState</code> hook accepts a parameter which is the initial value of the state.</p>
<p>In class-based components, state is always an object. But when using <code>useState</code>, you can provide any value as the initial value like a number, string, boolean, object, array, null, and so on.</p>
<p>The <code>useState</code> hook returns an array whose first value is the current value of the state. The second value is the function which we will use to update the state similar to the <code>setState</code> method.</p>
<p>Let’s take an example of a class based component which uses state. We will convert it into a functional component using hooks.</p><pre><code class="language-jsx">import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
state = {
counter: 0
};
handleOnClick = () =&gt; {
this.setState(prevState =&gt; ({
counter: prevState.counter + 1
}));
};
render() {
return (
&lt;div&gt;
&lt;p&gt;Counter value is: {this.state.counter} &lt;/p&gt;
&lt;button onClick={this.handleOnClick}&gt;Increment&lt;/button&gt;
&lt;/div&gt;
);
}
}
ReactDOM.render(&lt;App /&gt;, document.getElementById('root'));
</code></pre>
<p>Here's a <a href="https://codesandbox.io/s/delicate-thunder-xdpri?file=/src/index.js">Code Sandbox Demo</a> which is written using class components.</p>
<p>Let’s convert the above code to use hooks.</p><pre><code class="language-jsx">import React, { useState } from "react";
import ReactDOM from "react-dom";
const App = () =&gt; {
const [counter, setCounter] = useState(0);
return (
&lt;div&gt;
&lt;div&gt;
&lt;p&gt;Counter value is: {counter} &lt;/p&gt;
&lt;button onClick={() =&gt; setCounter(counter + 1)}&gt;Increment&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
);
};
ReactDOM.render(&lt;App /&gt;, document.getElementById("root"));
</code></pre>
<p>Here's a <a href="https://codesandbox.io/s/elegant-heyrovsky-3qco5?file=/src/index.js">Code Sandbox Demo</a> which is written using React hooks.</p>
<p>As you can see, using React hooks makes the code a lot shorter and easier to understand.</p>
<p>Let’s understand the above code.</p>
<ul>
<li>To use the <code>useState</code> hook, we need to import it as we have done it in the first line.</li>
<li>Inside the App component, we are calling <code>useState</code> by passing <code>0</code> as the initial value and using destructuring syntax. We stored the array values returned by <code>useState</code> into <code>counter</code> and <code>setCounter</code> variables.</li>
<li>It's a common convention to prefix the function name used to update the state with the <code>set</code> keyword as in <code>setCounter</code>.</li>
<li>When we click the increment button, we are defining an inline function and calling the <code>setCounter</code> function by passing the updated counter value.</li>
<li>Note that as we already have the counter value, we have used that to increment the counter using <code>setCounter(counter + 1)</code></li>
<li>Since there is a single statement in the inline on click handler, there is no need to move the code into a separate function. Though you can do that if the code inside the handler becomes complex.</li>
</ul>
<p>If you want to learn more details about <code>useState</code> and other React hooks (along with examples), then check out my <a href="https://levelup.gitconnected.com/an-introduction-to-react-hooks-50281fd961fe?source=friends_link&amp;sk=89baff89ec8bc637e7c13b7554904e54">Introduction to React Hooks</a> article.</p>
<h3 id="thanks-for-reading-">Thanks for reading!</h3>
<p>Want to learn all ES6+ features in detail including let and const, promises, various promise methods, array and object destructuring, arrow functions, async/await, import and export and a whole lot more from scratch?</p>
<p><strong>Check out my <a href="https://modernjavascript.yogeshchavan.dev/">Mastering Modern JavaScript</a> book. This book covers all the pre-requisites for learning React and helps you to become better at JavaScript and React.</strong></p>
<blockquote>Check out free preview contents of the book <a href="/news/learn-modern-javascript/">here</a>.</blockquote>
<p>Also, you can check out my <strong>free</strong> <a href="https://yogeshchavan.podia.com/react-router-introduction">Introduction to React Router</a> course to learn React Router from scratch.</p>
<p>Want to stay up to date with regular content regarding JavaScript, React, Node.js? <a href="https://www.linkedin.com/in/yogesh-chavan97/">Follow me on LinkedIn</a>.</p>
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
