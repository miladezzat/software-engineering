---
card: "/images/default.jpg"
tags: [React]
description: React is one of the most popular JavaScript frameworks ever c
author: "Milad E. Fahmy"
title: "React for Beginners – A React.js Handbook for Front End Developers"
created: "2021-08-15T19:28:02+02:00"
modified: "2021-08-15T19:28:02+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-beginners-guide tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">React for Beginners – A React.js Handbook for Front End Developers</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/11/book-2.jpg 300w,
/news/content/images/size/w600/2020/11/book-2.jpg 600w,
/news/content/images/size/w1000/2020/11/book-2.jpg 1000w,
/news/content/images/size/w2000/2020/11/book-2.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/11/book-2.jpg" alt="React for Beginners – A React.js Handbook for Front End Developers">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>React is one of the most popular JavaScript frameworks ever created, and I believe that it's one of the best tools out there.</p>
<p>The goal of this handbook is to provide a starter guide to learning React.</p>
<p>At the end of the book, you'll have a basic understanding of:</p>
<ul>
<li>What React is and why it's so popular</li>
<li>How to install React</li>
<li>React Components</li>
<li>React State</li>
<li>React Props</li>
<li>Handling user events in React</li>
<li>Lifecycle events in a React component</li>
</ul>
<p>These topics will be the base upon which you will build in other more advanced React tutorials.</p>
<p>This book is especially written for JavaScript programmers who are new to React. So let's get started.</p>
<h2 id="whatisreact">What is React?</h2>
<p>React is a JavaScript library that aims to simplify the development of visual interfaces.</p>
<p>Developed at Facebook and released to the world in 2013, it drives some of the most widely used apps, powering Facebook and Instagram among countless other applications.</p>
<p>Its primary goal is to make it easy to reason about an interface and its state at any point in time. It does this by dividing the UI into a collection of components.</p>
<p>You might experience some initial difficulties when learning React. But once it "clicks", I guarantee it's going to be one of the best experiences you ever have. React makes many things easier, and its ecosystem is filled with great libraries and tools.</p>
<p>React in itself has a very small API, and you basically need to understand 4 concepts to get started:</p>
<ul>
<li>Components</li>
<li>JSX</li>
<li>State</li>
<li>Props</li>
</ul>
<p>We'll explore all of these in this book, and we'll leave the more advanced concepts to other tutorials. I will give you some pointers in the last section about how to move forward.</p>
<p>And you can <a href="https://flaviocopes.com/page/react-handbook/">download this handbook in PDF / ePub / Mobi format for free</a>.</p>
<h2 id="summaryofthehandbook">Summary of the handbook</h2>
<ul>
<li><a href="#howmuchjavascriptyouneedtoknowtousereact">How much JavaScript you need to know to use React</a></li>
<li><a href="#whyshouldyoulearnreact">Why should you learn React?</a></li>
<li><a href="#howtoinstallreact">How to install React</a></li>
<li><a href="#reactcomponents">React Components</a></li>
<li><a href="#introductiontojsx">Introduction to JSX</a></li>
<li><a href="#usingjsxtocomposeaui">Using JSX to compose a UI</a></li>
<li><a href="#thedifferencebetweenjsxandhtml">The difference between JSX and HTML</a></li>
<li><a href="#embeddingjavascriptinjsx">Embedding JavaScript in JSX</a></li>
<li><a href="#managingstateinreact">Managing state in React</a></li>
<li><a href="#componentpropsinreact">Component Props in React</a></li>
<li><a href="#dataflowinareactapplication">Data flow in a React application</a></li>
<li><a href="#handlingusereventsinreact">Handling user events in React</a></li>
<li><a href="#lifecycleeventsinareactcomponent">Lifecycle events in a React component</a></li>
<li><a href="#wheretogofromhere">Where to go from here</a></li>
</ul>
<h2 id="howmuchjavascriptyouneedtoknowtousereact">How much JavaScript you need to know to use React</h2>
<p>Before jumping straight into React, you should have a good understanding of some core JavaScript concepts.</p>
<p>You don't have to be a JavaScript expert, but I think you need a good overview of:</p>
<ul>
<li><a href="https://flaviocopes.com/javascript-variables/">Variables</a></li>
<li><a href="https://flaviocopes.com/javascript-arrow-functions/">Arrow functions</a></li>
<li><a href="https://flaviocopes.com/javascript-rest-spread/">Work with objects and arrays using Rest and Spread</a></li>
<li><a href="https://flaviocopes.com/javascript-destructuring/">Object and array destructuring</a></li>
<li><a href="https://flaviocopes.com/javascript-template-literals/">Template literals</a></li>
<li><a href="https://flaviocopes.com/javascript-callbacks/">Callbacks</a></li>
<li><a href="https://flaviocopes.com/es-modules/">ES Modules</a></li>
</ul>
<p>If those concepts sound unfamiliar, I've provided you with some links to find out more about those subjects.</p>
<h2 id="whyshouldyoulearnreact">Why should you learn React?</h2>
<p>I highly recommend that any Web developer has at least a basic understanding of React.</p>
<p>That's because of a few reasons.</p>
<ol>
<li>React is very popular. As a developer, it's quite likely that you're going to work on a React project in the future. Perhaps an existing project, or maybe your team will want you to work on a brand new app based on React.</li>
<li>A lot of tooling today is built using React at the core. Popular frameworks and tools like Next.js, Gatsby, and many others use React under the hood.</li>
<li>As a frontend engineer, React is probably going to come up in a job interview.</li>
</ol>
<p>Those are all good reasons, but one of the main reasons I want you to learn React is that it's great.</p>
<p>It promotes several good development practices, including code reusability and component-driven development. It is fast, it is lightweight, and the way it makes you think about the data flow in your application perfectly suits a lot of common scenarios.</p>
<h2 id="howtoinstallreact">How to install React</h2>
<p>There are a few different ways to install React.</p>
<p>To start with, I highly recommend one approach, and that's using the officially recommended tool called <code>create-react-app</code>.</p>
<p><code>create-react-app</code> is a command line application, aimed at getting you up to speed with React in no time.</p>
<p>You start by using <code>npx</code>, which is an easy way to download and execute Node.js commands without installing them.</p>
<blockquote>
<p>See my npx guide here: <a href="https://flaviocopes.com/npx/">https://flaviocopes.com/npx/</a></p>
</blockquote>
<p><code>npx</code> comes with <code>npm</code> (since version 5.2). If you don't have npm installed already, do it now from <a href="https://nodejs.org">https://nodejs.org</a> (npm is installed with Node).</p>
<p>If you are unsure which version of npm you have, run <code>npm -v</code> to check if you need to update.</p>
<blockquote>
<p>Tip: check out my OSX terminal tutorial at <a href="https://flaviocopes.com/macos-terminal/">https://flaviocopes.com/macos-terminal/</a> if you're unfamiliar with using the terminal. It applies to Mac and Linux.</p>
</blockquote>
<p>When you run <code>npx create-react-app &lt;app-name&gt;</code>, <code>npx</code> is going to <em>download</em> the most recent <code>create-react-app</code> release, run it, and then remove it from your system.</p>
<p>This is great because you will never have an outdated version on your system, and every time you run it, you're getting the latest and greatest code available.</p>
<p>Let's start then:</p>
<pre><code class="language-sh">npx create-react-app todolist
</code></pre>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/11/cra-start.png" alt="cra-start"></p>
<p>This is when it finished running:</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/11/create-react-app-finished.png" alt="create-react-app-finished"></p>
<p><code>create-react-app</code> created a file structure in the folder you told it to (<code>todolist</code> in this case), and initialized a <a href="https://flaviocopes.com/git/">Git</a> repository.</p>
<p>It also added a few commands in the <code>package.json</code> file:</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/11/cra-packagejson.png" alt="cra-packagejson"></p>
<p>So you can immediately start the app by going into the newly created application folder and running <code>npm start</code>.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/11/cra-running.png" alt="cra-running"></p>
<p>By default this command launches the app on your local port 3000, and it opens your browser showing you the welcome screen:</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/11/cra-browser.png" alt="cra-browser"></p>
<p>Now you're ready to work on this application!</p>
<h2 id="reactcomponents">React Components</h2>
<p>In the last section you saw how to create your first React application.</p>
<p>This application comes with a series of files that do various things, mostly related to configuration, but there's one file that stands out: <code>App.js</code>.</p>
<p><code>App.js</code> is the <strong>first React Component</strong> you meet.</p>
<p>Its code is this:</p>
<pre><code class="language-js">import React from 'react'
import logo from './logo.svg'
import './App.css'
function App() {
return (
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
&lt;img src={logo} className="App-logo" alt="logo" /&gt;
&lt;p&gt;
Edit &lt;code&gt;src/App.js&lt;/code&gt; and save to reload.
&lt;/p&gt;
&lt;a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
&gt;
Learn React
&lt;/a&gt;
&lt;/header&gt;
&lt;/div&gt;
)
}
export default App
</code></pre>
<p>An application built using React, or one of the other popular frontend frameworks like Vue and Svelte for example, is built using dozens of components.</p>
<p>But let's start by analyzing this first component. I'm going to simplify this component code like this:</p>
<pre><code class="language-js">import React from 'react'
import logo from './logo.svg'
import './App.css'
function App() {
return /* something */
}
export default App
</code></pre>
<p>You can see a few things here. We <em>import</em> some things, and we <em>export</em> a function called <code>App</code>.</p>
<p>The things we import in this case are a JavaScript library (the <code>react</code> npm package), an SVG image, and a CSS file.</p>
<blockquote>
<p><code>create-react-app</code> is set up in a way that allows us to import images and CSS to use in our JavaScript, but this is not something you need to care about now. What you need to care about is the concept of a <strong>component</strong></p>
</blockquote>
<p><code>App</code> is a function that, in the original example, returns something that at first sight looks quite strange.</p>
<p>It looks like <strong>HTML</strong> but it has some JavaScript embedded into it.</p>
<p>That is <strong>JSX</strong>, a special language we use to build a component's output. We'll talk more about JSX in the next section.</p>
<p>In addition to defining some JSX to return, a component has several other characteristics.</p>
<p>A component can have its own <strong>state</strong>, which means it encapsulates some variables that other components can't access unless this component exposes this state to the rest of the application.</p>
<p>A component can also receive data from other components. In this case we're talking about <strong>props</strong>.</p>
<p>Don't worry, we're going to look in detail at all those terms (JSX, State and Props) soon.</p>
<h2 id="introductiontojsx">Introduction to JSX</h2>
<p>We can't talk about React without first explaining JSX.</p>
<p>In the last section you met your first React component, the <code>App</code> component defined in the default application built by <code>create-react-app</code>.</p>
<p>Its code was this:</p>
<pre><code class="language-js">import React from 'react'
import logo from './logo.svg'
import './App.css'
function App() {
return (
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
&lt;img src={logo} className="App-logo" alt="logo" /&gt;
&lt;p&gt;
Edit &lt;code&gt;src/App.js&lt;/code&gt; and save to reload.
&lt;/p&gt;
&lt;a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
&gt;
Learn React
&lt;/a&gt;
&lt;/header&gt;
&lt;/div&gt;
)
}
export default App
</code></pre>
<p>We previously ignored everything that was inside the <code>return</code> statement, but in this section we're going to talk about it.</p>
<p>We call JSX everything wrapped inside the parentheses returned by the component:</p>
<pre><code class="language-jsx">&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
&lt;img src={logo} className="App-logo" alt="logo" /&gt;
&lt;p&gt;
Edit &lt;code&gt;src/App.js&lt;/code&gt; and save to reload.
&lt;/p&gt;
&lt;a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
&gt;
Learn React
&lt;/a&gt;
&lt;/header&gt;
&lt;/div&gt;
</code></pre>
<p>This <em>looks</em> like HTML, but it's not really HTML. It's a little different.</p>
<p>And it's a bit strange to have this code inside a JavaScript file. This does not look like JavaScript at all!</p>
<p>Under the hood, React will process the JSX and it will transform it into JavaScript that the browser will be able to interpret.</p>
<p>So we're writing JSX, but in the end there's a translation step that makes it digestible to a JavaScript interpreter.</p>
<p>React gives us this interface for one reason: <strong>it's easier to build UI interfaces using JSX</strong>.</p>
<p>Once you get more familiar with it, of course.</p>
<p>In the next section we'll talk about how JSX lets you easily compose a UI, then we'll look at the differences with "normal HTML" that you need to know.</p>
<h2 id="usingjsxtocomposeaui">Using JSX to compose a UI</h2>
<p>As introduced in the last section, one of the main benefits of JSX is that it makes it very easy to build a UI.</p>
<p>In particular, in a React component you can import other React components, and you can embed them and display them.</p>
<p>A React component is usually created in its own file, because that's how we can easily reuse it (by importing it) in other components.</p>
<p>But a React component can also be created in the same file of another component, if you plan to only use it in that component. There's no "rule" here, you can do what feels best to you.</p>
<p>I generally use separate files when the number of lines in a file grows too much.</p>
<p>To keep things simple let's create a component in the same <code>App.js</code> file.</p>
<p>We're going to create a <code>WelcomeMessage</code> component:</p>
<pre><code class="language-js">function WelcomeMessage() {
return &lt;p&gt;Welcome!&lt;/p&gt;
}
</code></pre>
<p>See? It's a simple function that returns a line of JSX that represents a <code>p</code> HTML element.</p>
<p>We're going to add it to the <code>App.js</code> file.</p>
<p>Now inside the <code>App</code> component JSX we can add <code>&lt;WelcomeMessage /&gt;</code> to show this component in the user interface:</p>
<pre><code class="language-js">import React from 'react'
import logo from './logo.svg'
import './App.css'
function WelcomeMessage() {
return &lt;p&gt;Welcome!&lt;/p&gt;
}
function App() {
return (
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
&lt;img src={logo} className="App-logo" alt="logo" /&gt;
&lt;p&gt;
Edit &lt;code&gt;src/App.js&lt;/code&gt; and save to reload.
&lt;/p&gt;
&lt;WelcomeMessage /&gt;
&lt;a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
&gt;
Learn React
&lt;/a&gt;
&lt;/header&gt;
&lt;/div&gt;
)
}
export default App
</code></pre>
<p>And here's the result. Can you see the "Welcome!" message in the screen?</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/11/new-component.png" alt="new-component"></p>
<p>We say that <code>WelcomeMessage</code> is a <strong>child component</strong> of App, and <code>App</code> is its parent componnet.</p>
<p>We're adding the <code>&lt;WelcomeMessage /&gt;</code> component as if it was part of the HTML language.</p>
<p>That's the beauty of React components and JSX: we can compose an application interface and use it like we're writing HTML.</p>
<p>With some differences, as we'll see in the next section.</p>
<h2 id="thedifferencebetweenjsxandhtml">The difference between JSX and HTML</h2>
<p>JSX kind of looks like HTML, but it's not.</p>
<p>In this section I want to introduce you to some of the most important things you need to keep in mind when using JSX.</p>
<p>One of the differences might be quite obvious if you looked at the <code>App</code> component JSX: there's a strange attribute called <code>className</code>.</p>
<p>In HTML we use the <code>class</code> attribute. It's probably the most widely used attribute, for various reasons. One of those reasons is CSS. The <code>class</code> attribute allows us to style HTML elements easily, and CSS frameworks like Tailwind put this attribute to the center of the CSS user interface design process.</p>
<p>But there's a problem. We are writing this UI code in a JavaScript file, and <code>class</code> in the JavaScript programming language is a reserved word. This means we can't use this reserved word as we want. It serves a specific purpose (defining JavaScript classes) and the React creators had to choose a different name for it.</p>
<p>That's how we ended up with <code>className</code> instead of <code>class</code>.</p>
<p>You need to remember this especially when you're copy/pasting some existing HTML.</p>
<p>React will try its best to make sure things don't break, but it will raise a lot of warnings in the Developer Tools:</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/11/className.png" alt="className"></p>
<p>This is not the only HTML feature that suffers from this problem, but it's the most common one.</p>
<p>Another big difference between JSX and HTML is that HTML is very <em>relaxed</em>, we can say. Even if you have an error in the syntax, or you close the wrong tag, or you have a mismatch, the browser will try its best to interpret the HTML without breaking.</p>
<p>It's one of the core features of the Web. It is very forgiving.</p>
<p>JSX is not forgiving. If you forget to close a tag, you will have a clear error message:</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2020/11/jsx-error.png" alt="jsx-error"></p>
<blockquote>
<p>React usually gives very good and informative error messages that point you in the right direction to fix the problem.</p>
</blockquote>
<p>Another big difference between JSX and HTML is that in JSX we can embed JavaScript.</p>
<p>Let's talk about this in the next section.</p>
<h2 id="embeddingjavascriptinjsx">Embedding JavaScript in JSX</h2>
<p>One of the best features of React is that we can easily embed JavaScript into JSX.</p>
<p>Other frontend frameworks, for example Angular and Vue, have their own specific ways to print JavaScript values in the template, or perform things like loops.</p>
<p>React doesn't add new things. Instead, it lets us use JavaScript in the JSX, by using curly brackets.</p>
<p>The first example of this that I will show you comes directly from the <code>App</code> component we've studied so far.</p>
<p>We import the <code>logo</code> SVG file using</p>
<pre><code class="language-js">import logo from './logo.svg'
</code></pre>
<p>and then in the JSX we assign this SVG file to the <code>src</code> attribute of an <code>img</code> tag:</p>
<pre><code class="language-js">&lt;img src={logo} className="App-logo" alt="logo" /&gt;
</code></pre>
<p>Let's do another example. Suppose the <code>App</code> component has a variable called <code>message</code>:</p>
<pre><code class="language-js">function App() {
const message = 'Hello!'
//...
}
</code></pre>
<p>We can print this value in the JSX by adding <code>{message}</code> anywhere in the JSX.</p>
<p>Inside the curly brackets <code>{ }</code> we can add any JavaScript statement, but <em>just one</em> statement for every curly bracket block.</p>
<p>And the statement must return something.</p>
<p>For example this is a common statement you will find in JSX. We have a ternary operator where we define a condition (<code>message === 'Hello!'</code>), and we print one value if the condition is true, or another value (the content of <code>message</code> in this case) if the condition is false:</p>
<pre><code class="language-js">{
message === 'Hello!' ? 'The message was "Hello!"' : message
}
</code></pre>
<h2 id="managingstateinreact">Managing state in React</h2>
<p>Every React component can have its own <strong>state</strong>.</p>
<p>What do we mean by <em>state</em>? The state is the <strong>set of data that is managed by the component</strong>.</p>
<p>Think about a form, for example. Each individual input element of the form is responsible for managing its state: what is written inside it.</p>
<p>A button is responsible for knowing if it's being clicked, or not. If it's on focus.</p>
<p>A link is responsible for knowing if the mouse is hovering over it.</p>
<p>In React, or in any other components-based framework/library, all our applications are based on and make heavy use of components' state.</p>
<p>We manage state using the <code>useState</code> utility provided by React. It's technically a <strong>hook</strong> (you don't need to know the details of hooks right now, but that's what it is).</p>
<p>You import <code>useState</code> from React in this way:</p>
<pre><code class="language-js">import React, { useState } from 'react'
</code></pre>
<p>Calling <code>useState()</code>, you will get back a new state variable, and a function that we can call to alter its value.</p>
<p><code>useState()</code> accepts the initial value of the state item and returns an array containing the state variable, and the function you call to alter the state.</p>
<p>Example:</p>
<pre><code class="language-js">const [count, setCount] = useState(0)
</code></pre>
<p>This is important. We can't just alter the value of a state variable directly. We must call its modifier function. Otherwise the React component will not update its UI to reflect the changes of the data.</p>
<p>Calling the modifier is the way we can tell React that the component state has changed.</p>
<p>The syntax is a bit weird, right? Since <code>useState()</code> returns an array we use array destructuring to access each individual item, like this: <code>const [count, setCount] = useState(0)</code></p>
<p>Here's a practical example:</p>
<pre><code class="language-js">import { useState } from 'react'
const Counter = () =&gt; {
const [count, setCount] = useState(0)
return (
&lt;div&gt;
&lt;p&gt;You clicked {count} times&lt;/p&gt;
&lt;button onClick={() =&gt; setCount(count + 1)}&gt;Click me&lt;/button&gt;
&lt;/div&gt;
)
}
ReactDOM.render(&lt;Counter /&gt;, document.getElementById('app'))
</code></pre>
<p>You can add as many <code>useState()</code> calls as you want, to create as many state variables as you want:</p>
<pre><code class="language-js">const [count, setCount] = useState(0)
const [anotherCounter, setAnotherCounter] = useState(0)
</code></pre>
<h2 id="componentpropsinreact">Component Props in React</h2>
<p>We call <code>props</code> the initial values passed to a component.</p>
<p>We previously created a <code>WelcomeMessage</code> component</p>
<pre><code class="language-js">function WelcomeMessage() {
return &lt;p&gt;Welcome!&lt;/p&gt;
}
</code></pre>
<p>and we used it like this:</p>
<pre><code class="language-js">&lt;WelcomeMessage /&gt;
</code></pre>
<p>This component does not have any initial value. It does not have props.</p>
<p>Props can be passed as attributes to the component in the JSX:</p>
<pre><code class="language-js">&lt;WelcomeMessage myprop={'somevalue'} /&gt;
</code></pre>
<p>and inside the component we receive the props as arguments:</p>
<pre><code class="language-js">function WelcomeMessage(props) {
return &lt;p&gt;Welcome!&lt;/p&gt;
}
</code></pre>
<p>It's common to use object destructuring to get the props by name:</p>
<pre><code class="language-js">function WelcomeMessage({ myprop }) {
return &lt;p&gt;Welcome!&lt;/p&gt;
}
</code></pre>
<p>Now that we have the prop, we can use it inside the component. For example we can print its value in the JSX:</p>
<pre><code class="language-js">function WelcomeMessage({ myprop }) {
return &lt;p&gt;{myprop}&lt;/p&gt;
}
</code></pre>
<p>Curly brackets here have various meanings. In the case of the function argument, curly brackets are used as part of the object destructuring syntax.</p>
<p>Then we use them to define the function code block, and finally in the JSX to print the JavaScript value.</p>
<p>Passing props to components is a great way to pass values around in your application.</p>
<p>A component either holds data (has state) or receives data through its props.</p>
<p>We can also send functions as props, so a child component can call a function in the parent component.</p>
<p>A special prop is called <code>children</code>. That contains the value of anything that is passed between the opening and closing tags of the component, for example:</p>
<pre><code class="language-html">&lt;WelcomeMessage&gt; Here is some message &lt;/WelcomeMessage&gt;
</code></pre>
<p>In this case, inside <code>WelcomeMessage</code> we could access the value <code>Here is some message</code> by using the <code>children</code> prop:</p>
<pre><code class="language-js">function WelcomeMessage({ children }) {
return &lt;p&gt;{children}&lt;/p&gt;
}
</code></pre>
<h2 id="dataflowinareactapplication">Data flow in a React application</h2>
<p>In a React application, data typically flows from a parent component to a child component, using props as we saw in the previous section:</p>
<pre><code class="language-js">&lt;WelcomeMessage myprop={'somevalue'} /&gt;
</code></pre>
<p>If you pass a function to the child component, you can however change the state of the parent component from a child component:</p>
<pre><code class="language-js">const [count, setCount] = useState(0)
&lt;Counter setCount={setCount} /&gt;
</code></pre>
<p>Inside the Counter component we can now grab the <code>setCount</code> prop and call it to update the <code>count</code> state in the parent component, when something happens:</p>
<pre><code class="language-js">function Counter({ setCount }) {
//...
setCount(1)
//...
}
</code></pre>
<p>You need to know that there are more advanced ways to manage data, which include the Context API and libraries like Redux. But those introduce more complexity, and 90% of the times using those 2 ways I just explained are the perfect solution.</p>
<h2 id="handlingusereventsinreact">Handling user events in React</h2>
<p>React provides an easy way to manage events fired from DOM events like clicks, form events, and more.</p>
<p>Let's talk about click events, which are pretty simple to digest.</p>
<p>You can use the <code>onClick</code> attribute on any JSX element:</p>
<pre><code class="language-js">&lt;button
onClick={(event) =&gt; {
/* handle the event */
}}
&gt;
Click here
&lt;/button&gt;
</code></pre>
<p>When the element is clicked, the function passed to the <code>onClick</code> attribute is fired.</p>
<p>You can define this function outside of the JSX:</p>
<pre><code class="language-js">const handleClickEvent = (event) =&gt; {
/* handle the event */
}
function App() {
return &lt;button onClick={handleClickEvent}&gt;Click here&lt;/button&gt;
}
</code></pre>
<p>When the <code>click</code> event is fired on the button, React calls the event handler function.</p>
<p>React supports a vast amount of types of events, like <code>onKeyUp</code>, <code>onFocus</code>,<code>onChange</code>, <code>onMouseDown</code>, <code>onSubmit</code> and many more.</p>
<h2 id="lifecycleeventsinareactcomponent">Lifecycle events in a React component</h2>
<p>So far we've seen how to manage state with the <code>useState</code> hook.</p>
<p>There's another hook I want to introduce in this book: <code>useEffect</code>.</p>
<p>The <code>useEffect</code> hook allows components to have access to the lifecycle events of a component.</p>
<p>When you call the hook, you pass it a function. The function will be run by React when the component is first rendered, and on every subsequent re-render/update.</p>
<p>React first updates the DOM, then calls any function passed to <code>useEffect()</code>.</p>
<p>All without blocking the UI rendering, even on blocking code.</p>
<p>Here is an example:</p>
<pre><code class="language-js">const { useEffect, useState } = React
const CounterWithNameAndSideEffect = () =&gt; {
const [count, setCount] = useState(0)
useEffect(() =&gt; {
console.log(`You clicked ${count} times`)
})
return (
&lt;div&gt;
&lt;p&gt;You clicked {count} times&lt;/p&gt;
&lt;button onClick={() =&gt; setCount(count + 1)}&gt;Click me&lt;/button&gt;
&lt;/div&gt;
)
}
</code></pre>
<p>Since the useEffect() function is run on every subsequent re-render/update of the component, we can tell React to skip it, for performance purposes. We do this by adding a second parameter which is an array that contains a list of state variables to watch for.</p>
<p>React will only re-run the side effect if one of the items in this array changes.</p>
<pre><code class="language-js">useEffect(() =&gt; {
console.log(`Hi ${name} you clicked ${count} times`)
}, [name, count])
</code></pre>
<p>Similarly, you can tell React to only execute the side effect once (at mount time), by passing an empty array:</p>
<pre><code class="language-js">useEffect(() =&gt; {
console.log(`Component mounted`)
}, [])
</code></pre>
<p>You migth find yourself using this option a lot.</p>
<p>useEffect() is great for adding logs, accessing 3rd party APIs, and much more.</p>
<h2 id="wheretogofromhere">Where to go from here</h2>
<p>Mastering the topics explained in this article is a great step towards your goal of learning React.</p>
<p>I want to give you some pointers now, because it's easy to get lost in the sea of tutorials and courses about React.</p>
<p>What should you learn next?</p>
<p>Learn more theory about the <a href="https://flaviocopes.com/react-virtual-dom/">Virtual DOM</a>, <a href="https://flaviocopes.com/react-declarative/">writing declarative code</a>, <a href="https://flaviocopes.com/react-unidirectional-data-flow/">unidirectional data flow</a>, <a href="https://flaviocopes.com/react-immutability/">immutability</a>, <a href="https://flaviocopes.com/react-composition/">composition</a>.</p>
<p>Start building some simple React applications. For example <a href="https://flaviocopes.com/react-example-counter/">build a simple counter</a> or a <a href="https://flaviocopes.com/react-example-githubusers/">interact with a public API</a>.</p>
<p>Learn how to perform <a href="https://flaviocopes.com/react-conditional-rendering/">conditional rendering</a>, how to perform <a href="https://flaviocopes.com/react-how-to-loop/">loops in JSX</a>, how to use the <a href="https://flaviocopes.com/react-developer-tools/">React Developer Tools</a>.</p>
<p>Learn how to apply CSS in a React application, with <a href="https://flaviocopes.com/react-css/">plain CSS</a> or <a href="https://flaviocopes.com/styled-components/">Styled Components</a>.</p>
<p>Learn how to manage state using the <a href="https://flaviocopes.com/react-context-api/">Context API</a>, useContext and <a href="https://flaviocopes.com/redux/">Redux</a>.</p>
<p>Learn how to interact with <a href="https://flaviocopes.com/react-forms/">forms</a>.</p>
<p>Learn how to use <a href="https://flaviocopes.com/react-router/">React Router</a>.</p>
<p>Learn <a href="https://flaviocopes.com/react-testing-components/">how to test React applications</a>.</p>
<p>Learn an application framework built on top of React, like <a href="https://flaviocopes.com/gatsby/">Gatsby</a> or <a href="https://flaviocopes.com/nextjs/">Next.js</a>.</p>
<p>Most of all, make sure you practice by building sample applications to apply everything you've learned.</p>
<h2 id="conclusion">Conclusion</h2>
<p>Thanks a lot for reading this handbook.</p>
<p>I hope it will inspire you to learn more about React and everything you can do with it!</p>
<p>Remember that you can <a href="https://flaviocopes.com/page/react-handbook/">download this handbook in PDF / ePub / Mobi format for free</a> if you want.</p>
<p>I publish programming tutorials every day on my website <a href="https://flaviocopes.com">flaviocopes.com</a> if you want to check out more great content like this.</p>
<p>You can reach me on Twitter <a href="https://twitter.com/flaviocopes">@flaviocopes</a>.</p>
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
