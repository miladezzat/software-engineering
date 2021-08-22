---
card: "https://cdn-media-1.freecodecamp.org/images/1*B9uqLg7-TM2-bAIwa7Zxuw.png"
tags: [JavaScript]
description: "Ever since we started creating courses on Scrimba, our users "
author: "Milad E. Fahmy"
title: "Learn React with this massive 48-part course created by a top technology school"
created: "2021-08-16T10:09:52+02:00"
modified: "2021-08-16T10:09:52+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-front-end-development tag-web-development tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Learn React with this massive 48-part course created by a top technology school</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*B9uqLg7-TM2-bAIwa7Zxuw.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*B9uqLg7-TM2-bAIwa7Zxuw.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*B9uqLg7-TM2-bAIwa7Zxuw.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*B9uqLg7-TM2-bAIwa7Zxuw.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*B9uqLg7-TM2-bAIwa7Zxuw.png" alt="Learn React with this massive 48-part course created by a top technology school">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
import ReactDOM from "react-dom"
ReactDOM.render(&lt;h1&gt;Hello world!&lt;/h1&gt;, document.getElementById("root"))
</code></pre><p>Bob also quickly covers a few gotchas, like correct React imports and that JSX doesn’t like when you’re trying to render two adjacent elements.</p><pre><code class="language-jsx">// Hm, not sure which element I should render here...
ReactDOM.render(
&lt;h1&gt;Hello world!&lt;/h1&gt;
&lt;p&gt;I'm a paragraph&lt;/p&gt;,
document.getElementById("root"))
// This is much better!
ReactDOM.render(
&lt;div&gt;
&lt;h1&gt;Hello world!&lt;/h1&gt;
&lt;p&gt;I'm a paragraph&lt;/p&gt;
&lt;/div&gt;,
document.getElementById("root"))
import ReactDOM from "react-dom"
function MyApp() {
return (
&lt;ul&gt;
&lt;li&gt;1&lt;/li&gt;
&lt;li&gt;2&lt;/li&gt;
&lt;li&gt;3&lt;/li&gt;
&lt;/ul&gt;
)}
ReactDOM.render(
&lt;MyApp /&gt;,
document.getElementById("root")
)
import React from "react"
function MyInfo() {
return (
// component code
)
}
export default MyInfo
</code></pre><p>We can then just place our component into <code>components</code> folder and import <code>&lt;MyInfo /&gt;</code> to <code>index.js</code></p><pre><code class="language-jsx">// index.js
import React from "react"
import ReactDOM from "react-dom"
import MyInfo from "./components/MyInfo"
ReactDOM.render(
&lt;MyInfo /&gt;,
document.getElementById("root")
)
</code></pre><h3 id="part-9-parent-child-components">Part 9. Parent/Child Components</h3><p>In this screencast, Bob talks about Parent and Child components. Regular applications are far more complex than just one component rendered to the DOM. Instead, we usually have a complex hierarchy of components.</p><p>We start with writing our Functional Component <code>&lt;App /&gt;</code> which is going to be at the top of the component hierarchy</p><pre><code class="language-jsx">// index.js
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
ReactDOM.render(&lt;App /&gt;, document.getElementById("root"))
</code></pre><p>And in the <code>App.js</code> itself:</p><pre><code class="language-jsx">// App.js
import React from "react"
function App() {
return (
&lt;div&gt;
&lt;nav&gt;
&lt;h1&gt;Hello a third time!&lt;/h1&gt;
&lt;ul&gt;
&lt;li&gt;Thing 1&lt;/li&gt;
&lt;li&gt;Thing 2&lt;/li&gt;
&lt;li&gt;Thing 3&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;
&lt;main&gt;
&lt;p&gt;This is where most of my content will go...&lt;/p&gt;
&lt;/main&gt;
&lt;/div&gt;
)
}
export default App
import MainContent from "./MainContent"
import Footer from "./Footer"
function App() {
return (
&lt;div&gt;
&lt;Header /&gt;
&lt;MainContent /&gt;
&lt;Footer /&gt;
&lt;/div&gt;
)
}
export default App
return (
&lt;header className="navbar"&gt;This is the header&lt;/header&gt;
)
}
</code></pre><p>A lot of places will tell you that we need to write <code>className</code> because <code>class</code> is a reserved word in JS, but the truth is that under the hood, JSX is using vanilla JS DOM API.</p><pre><code class="language-jsx">document.getElementById("something").className += "new-class-name"
import React from 'react'
// but there is no way to avoid them here
for (let i = 0; i &lt; 10; i++) {}
// Bob prefers regular functions
function App() {
return (
&lt;h1&gt;Hello world!&lt;/h1&gt;
)
}
// Although you can write ES6 arrow functions if you wish
const App = () =&gt; &lt;h1&gt;Hello world!&lt;/h1&gt;
</code></pre><h3 id="part-14-jsx-to-javascript-and-back">Part 14. JSX to JavaScript and Back</h3><p>Before we move any further, we should really look into how JSX and JS play together. We see how inside our JS functions we return something that looks like HTML, but is JSX.</p><p>Now, what if we wanted to use a variable? We can do it using <code>{}</code>:</p><pre><code class="language-jsx">function App() {
const firstName = "Bob"
const lastName = "Ziroll"
return (
&lt;h1&gt;Hello {\`${firstName} ${lastName}\`}!&lt;/h1&gt;
)
}
</code></pre><p><code>{}</code> is a way to use plain JS in JSX. In plain language it would look like <code>&lt;h1&gt;This is JSX {now we're writing JS} and we're back to JSX&lt;/h1&gt;</code></p><h3 id="part-15-inline-styles-with-the-style-property">Part 15. Inline Styles with the Style Property</h3><p>One very quick trick to apply styles in React is to use inline styles.</p><pre><code class="language-jsx">&lt;h1 style={{color: "#FF8C00"}}&gt;Hello World!&lt;/h1&gt;
</code></pre><p>Notice how we use to sets of curly braces<code>{{}}</code>. This is because React expects styles to be passed as an object, but then we also need to tell JSX that we’re using JS objects.</p><p>There is a gotcha though.</p><pre><code class="language-jsx">// This is going to error
&lt;h1 style={{background-color: "#FF8C00"}}&gt;Hello World!&lt;/h1&gt;
// This is what we need to do, because JS doesn't like dashes in the
// middle of our property names
&lt;h1 style={{backgroundColor: "#FF8C00"}}&gt;Hello World!&lt;/h1&gt;
</code></pre><h3 id="part-16-todo-app-phase-2-">Part 16. Todo App — Phase 2.</h3><p>In this screencast, we’re going to pick up where we’ve left off with the Todo list. To start with, Bob asks us to create <code>&lt;TodoItem /&gt;</code> component by extracting the following code into it.</p><pre><code class="language-jsx">&lt;input type="checkbox" /&gt;
&lt;p&gt;Placeholder text here&lt;/p&gt;
</code></pre><p>And now we can add some styling and have a nice-looking todo list. Soon we are going to learn how to customize the text inside the <code>&lt;p&gt;</code> tag, but before that, we need to learn about props.</p><h3 id="part-17-props-part-1-understanding-the-concept">Part 17. Props Part 1 — Understanding the Concept</h3><p>Let’s look at some plain HTML and think what is actually wrong with the elements.</p><pre><code class="language-jsx">&lt;a&gt;This is a link&lt;/a&gt;
&lt;input /&gt;
&lt;img /&gt;
</code></pre><p>None of them actually do anything important. We really need to add these attributes to our elements.</p><pre><code class="language-jsx">&lt;a href="https://google.com"&gt;This is a link&lt;/a&gt;
&lt;input placeholder="First Name" name="firstName" type="text"/&gt;
&lt;img src="https://goo.gl/dKwBew"/&gt;
...
&lt;ContactCard
name="Mr. Whiskerson"
imgUrl="http://placekitten.com/300/200"
phone="(212) 555-1234"
email="mr.whiskaz@catnap.meow"
/&gt;
...
// instead of
&lt;img src="http://placekitten.com/300/200"/&gt;
&lt;h3&gt;Mr. Whiskerson&lt;/h3&gt;
&lt;p&gt;Phone: (212) 555-1234&lt;/p&gt;
&lt;p&gt;Email: mr.whiskaz@catnap.meow&lt;/p&gt;
&lt;/div&gt;
</code></pre><p>Let’s create <code>ContactCard</code> and use <code>props</code> to dynamically show data.</p><pre><code class="language-jsx">import React from "react"
function ContactCard(props) {
return (
&lt;img src={props.imgUrl}/&gt;
&lt;h3&gt;{props.name}&lt;/h3&gt;
&lt;p&gt;Phone: {props.phone}&lt;/p&gt;
&lt;p&gt;Email: {props.email}&lt;/p&gt;
&lt;/div&gt;
)
}
export default ContactCard
const jokeComponents = jokesData.map(joke =&gt; &lt;Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} /&gt;)
return (
&lt;div&gt;
{jokeComponents}
&lt;/div&gt;
)
}
</code></pre><p>Let’s just quickly break apart a few things here.</p><p>Very often our data would come from an API, so to imitate it we’re using <code>jokesData</code> to pretend that it has all the data we need.</p><pre><code class="language-jsx">const jokesData = [
{
id: 1,
punchLine: "It’s hard to explain puns to kleptomaniacs because they always take things literally."
},
{
id: 2,
question: "What's the best thing about Switzerland?",
punchLine: "I don't know, but the flag is a big plus!"
},
...
]
render() {
return (
&lt;div&gt;
&lt;h1&gt;Code goes here&lt;/h1&gt;
&lt;/div&gt;
)
}
}
super()
this.state = {
answer: "Yes"
}
}
console.log("I was clicked")
}
</code></pre><p>You might already be familiar with how it’s done in regular HTML:</p><pre><code class="language-jsx">&lt;button onclick="handleClick()"&gt;Click me&lt;/button&gt;
</code></pre><p>React is very similar.</p><pre><code class="language-jsx">&lt;button onClick={handleClick}&gt;Click me&lt;/button&gt;
this.setState({ count: 1 })
}
</code></pre><p>and pass it to our <code>&lt;button&gt;</code>.</p><pre><code class="language-jsx">&lt;button onClick={this.handleClick}&gt;Change!&lt;/button&gt;
</code></pre><p>If we run this, we will get <code>Uncaught TypeError: Cannot read property ‘setState’ of undefined</code>. This is a very common error, and one of the ways to make our handler work is to bind it.</p><pre><code class="language-jsx">constructor() {
super()
this.state = {
count: 0
}
this.handleClick = this.handleClick.bind(this)
}
</code></pre><p>Now we want our <code>handleClick()</code> method to be dynamic and actually add 1 to whatever our current state is. Luckily, React provides us with <code>prevState</code> so we can compare states.</p><pre><code class="language-jsx">handleClick() {
this.setState(prevState =&gt; {
return {
count: prevState.count + 1
}
})
}
</code></pre><h3 id="part-33-todo-app-phase-6">Part 33. Todo App — Phase 6</h3><p>In this part we are going to make it so when we click the checkbox, it’s going to change our state and tick/untick the checkbox when required. Bob warns us that it’s a tricky part of the app and sounds deceptively simple. As a challenge let’s try to implement it ourselves first, but no need to worry if something doesn’t quite work — <a href="https://scrimba.com/p/p7P5Hd/cgDqBHP?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=glearnreact_launch_article">Bob’s got our back with a walkthrough</a>.</p><h3 id="part-34-lifecycle-methods-part-1">Part 34. Lifecycle Methods Part 1</h3><p>One of the nice things about React is how we essentially write vanilla JS and React takes care of a lot of thing behind the scenes. There are a number of these “behind the scenes” events that happen to a component. It’s more like a set of milestones in a life of a component, so they are called <strong><em>lifecycle methods</em></strong>. Bob is going to cover the most popular and important ones in this and the following chapters.</p><p>The first one you already know is <code>render()</code>. Its job is to determine what gets rendered to the screen and React calls <code>render()</code> when something changes like <code>state</code> or <code>props</code>.</p><p>The next one is <code>componentDidMount()</code> which is essentially like ‘component is born’. This method is called when the component lands on a screen. This is a good time to make API calls.</p><p>A third very interesting method is <code>shouldComponentUpdate()</code>. Sometimes React would update a component even if nothing seemed to change. This might become very expensive in some cases and this method gives us, the developers, a chance to optimise our application.</p><p>And last method in this chapter is <code>componentWillUnmount()</code> and is a place to clean up right before your component disappears from the user’s screen. You can remove event listeners or cancel API calls.</p><h3 id="part-35-lifecycle-methods-part-2">Part 35. Lifecycle Methods Part 2</h3><p>In this chapter <a href="https://scrimba.com/p/p7P5Hd/cEkyPH2?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=glearnreact_launch_article">Bob very quickly covers</a> some of the deprecated lifecycle methods, which you might see in some legacy React applications and he also covers some really rare methods, like <code>getDerivedStateFromProps()</code> and <code>getSnapshotBeforeUpdate()</code>. But we won’t be covering them in great depth as they are not essential to this course.</p><h3 id="part-36-conditional-rendering">Part 36. Conditional Rendering</h3><p>Sometimes you want to display some data or render some JSX only at a certain condition. That’s when we use conditional rendering.</p><p>One of the strengths of React is that by using vanilla JS we can preserve its flexibility to write our own code. The downside to this is when you’re learning React, there might be too many different ways of doing the same thing. Conditional rendering is one of them. Bob will show us a few ways to do it, but rest assured, there are as many ways as React developers.</p><p>Let’s create a <code>&lt;Conditional /&gt;</code> component that renders “Loading…” when a page is loading. We can use it in our app in <code>render</code> method.</p><pre><code class="language-jsx">render() {
return (
&lt;div&gt;
&lt;Conditional isLoading={this.state.isLoading}/&gt;
&lt;/div&gt;
)
}
fetch("https://swapi.co/api/people/1")
.then(response =&gt; response.json())
.then(data =&gt; console.log(data))
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
