---
card: "/images/default.jpg"
tags: [React]
description: "I have put together a comprehensive visual cheatsheet to help"
author: "Milad E. Fahmy"
title: "The React Cheatsheet for 2021‬ (+ Real-World Examples)"
created: "2021-08-16T10:04:14+02:00"
modified: "2021-08-16T10:04:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">The React Cheatsheet for 2021‬ (+ Real-World Examples)</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/01/the-react-cheatsheet-for-2021-1.png 300w,
/news/content/images/size/w600/2021/01/the-react-cheatsheet-for-2021-1.png 600w,
/news/content/images/size/w1000/2021/01/the-react-cheatsheet-for-2021-1.png 1000w,
/news/content/images/size/w2000/2021/01/the-react-cheatsheet-for-2021-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/01/the-react-cheatsheet-for-2021-1.png" alt="The React Cheatsheet for 2021‬ (+ Real-World Examples)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I have put together a comprehensive visual cheatsheet to help you master all the major concepts and features of the React library in 2021.</p><p><strong>I created this cheatsheet to help you optimize your React learning in the shortest amount of time.</strong></p><p>It includes tons of practical examples to illustrate every feature of the library and how it works using patterns you can apply within your own projects.</p><p>Along with each code snippet, I have added many helpful comments. If you read these comments, you'll see what each line of code does, how different concepts relate to one another, and gain a more complete understanding of how React can be used.</p><p>Note that the keywords that are particularly useful for you to know as a React developer are highlighted in bold, so look out for those.</p><h3 id="want-your-own-copy-of-the-cheatsheet-">Want Your Own Copy of the Cheatsheet?‬</h3><p><a href="http://bit.ly/react-sheet-2021"><strong>Download the cheatsheet in PDF format here</strong></a> (it takes 5 seconds).</p><p>Here are some quick wins from grabbing the downloadable version:</p><ul><li>✓ Quick reference guide to review however and whenever</li><li>✓ Tons of copyable code snippets for easy reuse</li><li>✓ Read this massive guide wherever suits you best. On the train, at your desk, standing in line... anywhere.</li></ul><p>There's a ton of great stuff to cover, so let's get started.</p><blockquote>Want to run any of the code snippets below? Create a new React application to try out any of these examples using the (free) online tool CodeSandbox. You can do so instantly by visiting <a href="https://react.new">react.new</a>.</blockquote><h2 id="table-of-contents">Table of Contents</h2><h3 id="react-fundamentals">React Fundamentals</h3><ul><li><a href="#jsx-elements">JSX Elements</a></li><li><a href="#components-and-props">Components and Props</a></li><li><a href="#lists-and-keys">Lists and Keys</a></li><li><a href="#event-listeners-and-handling-events">Event Listeners and Handling Events</a></li></ul><h3 id="essential-react-hooks">Essential React Hooks</h3><ul><li><a href="#state-and-usestate">State and useState</a></li><li><a href="#side-effects-and-useeffect">Side Effects and useEffect</a></li><li><a href="#refs-and-useref">Refs and useRef</a></li></ul><h3 id="hooks-and-performance">Hooks and Performance</h3><ul><li><a href="#preventing-re-renders-and-react-memo">Preventing Re-renders and React.memo</a></li><li><a href="#callback-functions-and-usecallback">Callback functions and useCallback</a></li><li><a href="#memoization-and-usememo">Memoization and useMemo</a></li></ul><h3 id="advanced-react-hooks">Advanced React Hooks</h3><ul><li><a href="#context-and-usecontext">Context and useContext</a></li><li><a href="#reducers-and-usereducer">Reducers and useReducer</a></li><li><a href="#writing-custom-hooks">Writing custom hooks</a></li><li><a href="#rules-of-hooks">Rules of hooks</a></li></ul><h2 id="react-fundamentals-1">React Fundamentals</h2><h3 id="jsx-elements">JSX Elements</h3><p>React applications are structured using a syntax called <strong>JSX</strong>. This is the syntax of a basic <strong>JSX element</strong>.</p><pre><code class="language-js">/*
JSX allows us to write in a syntax almost identical to plain HTML.
As a result, JSX is a powerful tool to structure our applications.
JSX uses all valid HTML tags (i.e. div/span, h1-h6, form/input, img, etc).
*/
&lt;div&gt;Hello React!&lt;/div&gt;
/*
Note: this JSX would not be visible because it needs to be rendered by our application using ReactDOM.render()
*/</code></pre><p>JSX is the most common way to structure React applications, but it is not required for React.</p><pre><code class="language-js">/* JSX is a simpler way to use the function React.createElement()
In other words, the following two lines in React are the same: */
&lt;div&gt;Hello React!&lt;/div&gt;  // JSX syntax
React.createElement('div', null, 'Hello React!'); // createElement syntax</code></pre><p>JSX is not understood by the browser. It needs to be compiled to plain JavaScript, which the browser can understand.</p><p>The most commonly used compiler for JSX is called Babel.</p><pre><code class="language-js">/*
When our project is built to run in the browser, our JSX will be converted by Babel into simple React.createElement() function calls.
From this...
*/
const greeting = &lt;div&gt;Hello React!&lt;/div&gt;;
/* ...into this: */
"use strict";
const greeting = /*#__PURE__*/React.createElement("div", null, "Hello React!");</code></pre><p>JSX differs from HTML in several important ways:</p><pre><code class="language-js">/*
We can write JSX like plain HTML, but it's actually made using JavaScript functions.
Because JSX is JavaScript, not HTML, there are some differences:
1) Some JSX attributes are named differently than HTML attributes. Why? Because some attribute words are reserved words in JavaScript, such as 'class'. Instead of class, JSX uses 'className'.
Also, because JSX is JavaScript, attributes that consist of multiple words are written in camelcase:
*/
&lt;div id="header"&gt;
&lt;h1 className="title"&gt;Hello React!&lt;/h1&gt;
&lt;/div&gt;
/*
2) JSX elements that consist of only a single tag (i.e. input, img, br elements) must be closed with a trailing forward slash to be valid (/):
*/
&lt;input type="email" /&gt; // &lt;input type="email"&gt; is a syntax error
/*
3) JSX elements that consist of an opening and closing tag (i.e. div, span, button element), must have both or be closed with a trailing forward slash. Like 2), it is a syntax error to have an unterminated element.
*/
&lt;button&gt;Click me&lt;/button&gt; // &lt;button&gt; or &lt;/button&gt; is a syntax error
&lt;button /&gt; // empty, but also valid</code></pre><p>Inline styles can be added to JSX elements using the style attribute. And styles are updated within an object, not a set of double quotes, as with HTML.</p><p>Note that style property names must be also written in camelcase.</p><pre><code class="language-js">/*
Properties that accept pixel values (like width, height, padding, margin, etc), can use integers instead of strings.
For example: fontSize: 22. Instead of: fontSize: "22px"
*/
&lt;h1 style={{ color: 'blue', fontSize: 22, padding: '0.5em 1em' }}&gt;
Hello React!
&lt;/h1&gt;</code></pre><p>JSX elements are JavaScript expressions and can be used as such. JSX gives us the full power of JavaScript directly within our user interface.</p><pre><code class="language-js">/*
JSX elements are expressions (resolve to a value) and therefore can be assigned to plain JavaScript variables...
*/
const greeting = &lt;div&gt;Hello React!&lt;/div&gt;;
const isNewToReact = true;
// ... or can be displayed conditionally
function sayGreeting() {
if (isNewToReact) {
// ... or returned from functions, etc.
return greeting; // displays: Hello React!
} else {
return &lt;div&gt;Hi again, React&lt;/div&gt;;
}
}</code></pre><p>JSX allows us to insert (or embed) simple JavaScript expressions using the curly braces syntax:</p><pre><code class="language-js">const year = 2021;
/* We can insert primitive JS values (i.e. strings, numbers, booleans) in curly braces: {} */
const greeting = &lt;div&gt;Hello React in {year}&lt;/div&gt;;
/* We can also insert expressions that resolve to a primitive value: */
const goodbye = &lt;div&gt;Goodbye previous year: {year - 1}&lt;/div&gt;
/* Expressions can also be used for element attributes */
const className = 'title';
const title = &lt;h1 className={className}&gt;My title&lt;/h1&gt;
/* Note: trying to insert object values (i.e. objects, arrays, maps) in curly braces will result in an error */</code></pre><p>JSX allows us to nest elements within one another, like we would HTML.</p><pre><code class="language-js">/*
To write JSX on multiple lines, wrap in parentheses: ()
JSX expressions that span multiple lines are called multiline expressions
*/
const greeting = (
// div is the parent element
&lt;div&gt;
{/* h1 and p are child elements */}
&lt;h1&gt;Hello!&lt;/h1&gt;
&lt;p&gt;Welcome to React&lt;/p&gt;
&lt;/div&gt;
);
/* 'parents' and 'children' are how we describe JSX elements in relation
to one another, like we would talk about HTML elements */</code></pre><p>Comments in JSX are written as multiline JavaScript comments, written between curly braces, like this:</p><pre><code class="language-js">const greeting = (
&lt;div&gt;
{/* This is a single line comment */}
&lt;h1&gt;Hello!&lt;/div&gt;
&lt;p&gt;Welcome to React&lt;/p&gt;
{/* This is a
multiline
comment */}
&lt;/div&gt;
);</code></pre><p> All React apps require three things:</p><ol><li><code>ReactDOM.render()</code>: used to render (show) our app by mounting it onto an HTML element</li><li>A JSX element: called a "root node", because it is the root of our application. Meaning, rendering it will render all children within it</li><li>An HTML (DOM) element: Where the app is inserted within an HTML page. The element is usually a div with an id of "root", located in an index.html file.</li></ol><pre><code class="language-js">// Packages can be installed locally or brought in through a CDN link (added to head of HTML document)
import React from "react";
import ReactDOM from "react-dom";
// root node (usually a component) is most often called "App"
const App = &lt;h1&gt;Hello React!&lt;/h1&gt;;
// ReactDOM.render(root node, HTML element)
ReactDOM.render(App, document.getElementById("root"));</code></pre><h3 id="components-and-props">Components and Props</h3><p>JSX can be grouped together within individual functions called <strong>components</strong>.</p><p>There are two types of components in React: <strong>function components</strong> and <strong>class components</strong>.</p><p>Component names, for function or class components, are capitalized to distinguish them from plain JavaScript functions that do not return JSX:</p><pre><code class="language-js">import React from "react";
/*
Function component
Note the capitalized function name: 'Header', not 'header'
*/
function Header() {
return &lt;h1&gt;Hello React&lt;/h1&gt;;
}
// Function components which use an arrow function syntax are also valid
const Header = () =&gt; &lt;h1&gt;Hello React&lt;/h1&gt;;
/*
Class component
Class components have more boilerplate (note the 'extends' keyword and 'render' method)
*/
class Header extends React.Component {
render() {
return &lt;h1&gt;Hello React&lt;/h1&gt;;
}
}</code></pre><p>Components, despite being functions, are not called like ordinary JavaScript functions. They are executed by rendering them like we would JSX in our app.</p><pre><code class="language-js">// Do we call this function component like a normal function?
// No, to execute them and display the JSX they return...
const Header = () =&gt; &lt;h1&gt;Hello React&lt;/h1&gt;;
// ...we use them as 'custom' JSX elements
ReactDOM.render(&lt;Header /&gt;, document.getElementById("root"));
// renders: &lt;h1&gt;Hello React&lt;/h1&gt;</code></pre><p>The huge benefit of components is their ability to be reused across our apps, wherever we need them.</p><p>Since components leverage the power of JavaScript functions, we can logically pass data to them, like we would by passing it one or more arguments.</p><pre><code class="language-js">/*
The Header and Footer components can be reused in any page in our app.
Components remove the need to rewrite the same JSX multiple times.
*/
// IndexPage component, visible on '/' route of our app
function IndexPage() {
return (
&lt;div&gt;
&lt;Header /&gt;
&lt;Hero /&gt;
&lt;Footer /&gt;
&lt;/div&gt;
);
}
// AboutPage component, visible on the '/about' route
function AboutPage() {
return (
&lt;div&gt;
&lt;Header /&gt;
&lt;About /&gt;
&lt;Testimonials /&gt;
&lt;Footer /&gt;
&lt;/div&gt;
);
}</code></pre><p>Data passed to components in JavaScript are called <strong>props</strong>. Props look identical to attributes on plain JSX/HTML elements, but you can access their values within the component itself.</p><p>Props are available in parameters of the component to which they are passed. Props are always included as properties of an object.</p><pre><code class="language-js">/*
What if we want to pass custom data to our component from a parent component?
For example, to display the user's name in our app header.
*/
const username = "John";
/*
To do so, we add custom 'attributes' to our component called props.
We can add many of them as we like and we give them names that suit the data we pass in.
To pass the user's name to the header, we use a prop we appropriately called 'username'
*/
ReactDOM.render(
&lt;Header username={username} /&gt;,
document.getElementById("root")
);
// We called this prop 'username', but can use any valid identifier we would give, for example, a JavaScript variable
// props is the object that every component receives as an argument
function Header(props) {
// the props we make on the component (username)
// become properties on the props object
return &lt;h1&gt;Hello {props.username}&lt;/h1&gt;;
}</code></pre><p>Props must never be directly changed within the child component. </p><p>Another way to say this is that props should never be <strong>mutated</strong>, since props are a plain JavaScript object.</p><pre><code class="language-js">/*
Components should operate as 'pure' functions.
That is, for every input, we should be able to expect the same output.
This means we cannot mutate the props object, only read from it.
*/
// We cannot modify the props object :
function Header(props) {
props.username = "Doug";
return &lt;h1&gt;Hello {props.username}&lt;/h1&gt;;
}
/*
But what if we want to modify a prop value that is passed to our component?
That's where we would use state (see the useState section).
*/</code></pre><p>The <strong>children</strong> prop is useful if we want to pass elements / components as props to other components.</p><pre><code class="language-js">// Can we accept React elements (or components) as props?
// Yes, through a special property on the props object called 'children'
function Layout(props) {
return &lt;div className="container"&gt;{props.children}&lt;/div&gt;;
}
// The children prop is very useful for when you want the same
// component (such as a Layout component) to wrap all other components:
function IndexPage() {
return (
&lt;Layout&gt;
&lt;Header /&gt;
&lt;Hero /&gt;
&lt;Footer /&gt;
&lt;/Layout&gt;
);
}
// different page, but uses same Layout component (thanks to children prop)
function AboutPage() {
return (
&lt;Layout&gt;
&lt;About /&gt;
&lt;Footer /&gt;
&lt;/Layout&gt;
);
}</code></pre><p>Again, since components are JavaScript expressions, we can use them in combination with if-else statements and switch statements to conditionally show content, like this:</p><pre><code class="language-js">function Header() {
const isAuthenticated = checkAuth();
/* if user is authenticated, show the authenticated app, otherwise, the unauthenticated app */
if (isAuthenticated) {
return &lt;AuthenticatedApp /&gt;
} else {
/* alternatively, we can drop the else section and provide a simple return, and the conditional will operate in the same way */
return &lt;UnAuthenticatedApp /&gt;
}
}</code></pre><p>To use conditions within a component's returned JSX, you can use the ternary operator or short-circuiting (&amp;&amp; and || operators).</p><pre><code class="language-js">function Header() {
const isAuthenticated = checkAuth();
return (
&lt;nav&gt;
{/* if isAuth is true, show nothing. If false, show Logo  */}
{isAuthenticated || &lt;Logo /&gt;}
{/* if isAuth is true, show AuthenticatedApp. If false, show Login  */}
{isAuthenticated ? &lt;AuthenticatedApp /&gt; : &lt;LoginScreen /&gt;}
{/* if isAuth is true, show Footer. If false, show nothing */}
{isAuthenticated &amp;&amp; &lt;Footer /&gt;}
&lt;/nav&gt;
);
}</code></pre><p><strong>Fragments</strong> are special components for displaying multiple components without adding an extra element to the DOM. They're ideal for conditional logic that has multiple adjacent components or elements.</p><pre><code class="language-js">/*
We can improve the logic in the previous example.
If isAuthenticated is true, how do we display both the AuthenticatedApp and Footer components?
*/
function Header() {
const isAuthenticated = checkAuth();
return (
&lt;nav&gt;
&lt;Logo /&gt;
{/*
We can render both components with a fragment.
Fragments are very concise: &lt;&gt; &lt;/&gt;
*/}
{isAuthenticated ? (
&lt;&gt;
&lt;AuthenticatedApp /&gt;
&lt;Footer /&gt;
&lt;/&gt;
) : (
&lt;Login /&gt;
)}
&lt;/nav&gt;
);
}
/*
Note: An alternate syntax for fragments is React.Fragment:
&lt;React.Fragment&gt;
&lt;AuthenticatedApp /&gt;
&lt;Footer /&gt;
&lt;/React.Fragment&gt;
*/</code></pre><h3 id="lists-and-keys">Lists and Keys</h3><p>Use the <strong>.map()</strong> function to convert lists of data (arrays) into lists of elements.</p><pre><code class="language-js">const people = ["John", "Bob", "Fred"];
const peopleList = people.map(person =&gt; &lt;p&gt;{person}&lt;/p&gt;);
</code></pre><p><code>.map()</code> can be used for components as well as plain JSX elements.</p><pre><code class="language-js">function App() {
const people = ['John', 'Bob', 'Fred'];
// can interpolate returned list of elements in {}
return (
&lt;ul&gt;
{/* we're passing each array element as props to Person */}
{people.map(person =&gt; &lt;Person name={person} /&gt;}
&lt;/ul&gt;
);
}
function Person({ name }) {
// we access the 'name' prop directly using object destructuring
return &lt;p&gt;This person's name is: {name}&lt;/p&gt;;
}</code></pre><p>Each React element within a list of elements needs a special <strong>key prop</strong>. Keys are essential for React to be able to keep track of each element that is being iterated over with the <code>.map()</code> function.</p><p>React uses keys to performantly update individual elements when their data changes (instead of re-rendering the entire list).</p><p>Keys need to have unique values to be able to identify each of them according to their key value.</p><pre><code class="language-js">function App() {
const people = [
{ id: 'Ksy7py', name: 'John' },
{ id: '6eAdl9', name: 'Bob' },
{ id: '6eAdl9', name: 'Fred' },
];
return (
&lt;ul&gt;
{/* keys need to be primitive values, ideally a unique string, such as an id */}
{people.map(person =&gt;
&lt;Person key={person.id} name={person.name} /&gt;
)}
&lt;/ul&gt;
);
}
// If you don't have some ids with your set of data that are unique // and primitive values, use the second parameter of .map() to get each // elements index
function App() {
const people = ['John', 'Bob', 'Fred'];
return (
&lt;ul&gt;
{/* use array element index for key */}
{people.map((person, i) =&gt; &lt;Person key={i} name={person} /&gt;)}
&lt;/ul&gt;
);
}</code></pre><h3 id="event-listeners-and-handling-events">Event Listeners and Handling Events</h3><p>Listening for events on JSX elements versus HTML elements differs in a few important ways.</p><p>First, you cannot listen for events on React components – only on JSX elements. Adding a prop called <code>onClick</code>, for example, to a React component would just be another property added to the props object.</p><pre><code class="language-js">/*
The convention for most event handler functions is to prefix them with the word 'handle' and then the action they perform (i.e. handleToggleTheme)
*/
function handleToggleTheme() {
// code to toggle app theme
}
/* In HTML, onclick is all lowercase, plus the event handler includes a set of parentheses after being referenced */
&lt;button onclick="handleToggleTheme()"&gt;
Toggle Theme
&lt;/button&gt;
/*
In JSX, onClick is camelcase, like attributes / props.
We also pass a reference to the function with curly braces.
*/
&lt;button onClick={handleToggleTheme}&gt;
Toggle Theme
&lt;/button&gt;</code></pre><p>The most essential React events to know are <code>onClick</code>, <code>onChange</code>, and <code>onSubmit</code>.</p><ul><li><code>onClick</code> handles click events on JSX elements (namely on buttons)</li><li><code>onChange</code> handles keyboard events (namely a user typing into an input or textarea)</li><li><code>onSubmit</code> handles form submissions from the user</li></ul><pre><code class="language-js">function App() {
function handleInputChange(event) {
/* When passing the function to an event handler, like onChange we get access to data about the event (an object) */
const inputText = event.target.value; // text typed into the input
const inputName = event.target.name; // 'email' from name attribute
}
function handleClick(event) {
/* onClick doesn't usually need event data, but it receives event data as well that we can use */
console.log('clicked!');
const eventType = event.type; // "click"
const eventTarget = event.target; // &lt;button&gt;Submit&lt;/button&gt;
}
function handleSubmit(event) {
/*
When we hit the return button, the form will be submitted, as well as when a button with type="submit" is clicked.
We call event.preventDefault() to prevent the default form behavior from taking place, which is to send an HTTP request and reload the page.
*/
event.preventDefault();
const formElements = event.target.elements; // access all element within form
const inputValue = event.target.elements.emailAddress.value; // access the value of the input element with the id "emailAddress"
}
return (
&lt;form onSubmit={handleSubmit}&gt;
&lt;input id="emailAddress" type="email" name="email" onChange={handleInputChange} /&gt;
&lt;button onClick={handleClick}&gt;Submit&lt;/button&gt;
&lt;/form&gt;
);
}
</code></pre><h2 id="essential-react-hooks-1">Essential React Hooks</h2><h3 id="state-and-usestate">State and useState</h3><p>The <code>useState</code> hook gives us state in a function component. <strong>State</strong> allows us to access and update certain values in our components over time.</p><p>Local component state is managed by the React hook <code>useState</code> which gives us both a state variable and a function that allows us to update it.</p><p>When we call <code>useState</code> we can give our state a default value by providing it as the first argument when we call <code>useState</code>.</p><pre><code class="language-js">import React from 'react';
/*
How do you create a state variable?
Syntax: const [stateVariable] = React.useState(defaultValue);
*/
function App() {
const [language] = React.useState('JavaScript');
/*
We use array destructuring to declare state variable.
Like any variable, we declare we can name it what we like (in this case, 'language').
*/
return &lt;div&gt;I am learning {language}&lt;/div&gt;;
}</code></pre><p>Note: Any hook in this section is from the React core library and can be imported individually.</p><pre><code class="language-js">import React, { useState } from "react";
function App() {
const [language] = useState("javascript");
return &lt;div&gt;I am learning {language}&lt;/div&gt;;
}</code></pre><p><code>useState</code> also gives us a 'setter' function to update the state after it is created.</p><pre><code class="language-js">function App() {
/*
The setter function is always the second destructured value.
The naming convention for the setter function is to be prefixed with 'set'.
*/
const [language, setLanguage] = React.useState("javascript");
return (
&lt;div&gt;
&lt;button onClick={() =&gt; setLanguage("python")}&gt;
Learn Python
&lt;/button&gt;
{/*
Why use an inline arrow function here instead of immediately calling it like so: onClick={setterFn()}?
If so, setLanguage would be called immediately and not when the button was clicked by the user.
*/}
&lt;p&gt;I am now learning {language}&lt;/p&gt;
&lt;/div&gt;
);
}
/*
Note: whenever the setter function is called, the state updates,
and the App component re-renders to display the new state.
Whenever state is updated, the component will be re-rendered
*/</code></pre><p><code>useState</code> can be used once or multiple times within a single component. And it can accept primitive or object values to manage state.</p><pre><code class="language-js">function App() {
const [language, setLanguage] = React.useState("python");
const [yearsExperience, setYearsExperience] = React.useState(0);
return (
&lt;div&gt;
&lt;button onClick={() =&gt; setLanguage("javascript")}&gt;
Change language to JS
&lt;/button&gt;
&lt;input
type="number"
value={yearsExperience}
onChange={event =&gt; setYearsExperience(event.target.value)}
/&gt;
&lt;p&gt;I am now learning {language}&lt;/p&gt;
&lt;p&gt;I have {yearsExperience} years of experience&lt;/p&gt;
&lt;/div&gt;
);
}</code></pre><p>If the new state depends on the previous state, to guarantee the update is done reliably we can use a function within the setter function that gives us the correct previous state.</p><pre><code class="language-js">/* We have the option to organize state using whatever is the most appropriate data type, according to the data we're managing */
function App() {
const [developer, setDeveloper] = React.useState({
language: "",
yearsExperience: 0
});
function handleChangeYearsExperience(event) {
const years = event.target.value;
/* We must pass in the previous state object we had with the spread operator to spread out all of its properties */
setDeveloper({ ...developer, yearsExperience: years });
}
return (
&lt;div&gt;
{/* No need to get previous state here; we are replacing the entire object */}
&lt;button
onClick={() =&gt;
setDeveloper({
language: "javascript",
yearsExperience: 0
})
}
&gt;
Change language to JS
&lt;/button&gt;
{/* We can also pass a reference to the function */}
&lt;input
type="number"
value={developer.yearsExperience}
onChange={handleChangeYearsExperience}
/&gt;
&lt;p&gt;I am now learning {developer.language}&lt;/p&gt;
&lt;p&gt;I have {developer.yearsExperience} years of experience&lt;/p&gt;
&lt;/div&gt;
);
}</code></pre><p>If you are managing multiple primitive values, using <code>useState</code> multiple times is often better than using it once with an object. You don't have to worry about forgetting to combine the old state with the new state.</p><pre><code class="language-js">function App() {
const [developer, setDeveloper] = React.useState({
language: "",
yearsExperience: 0,
isEmployed: false
});
function handleToggleEmployment(event) {
/* We get the previous state variable's value in the parameters.
We can name 'prevState' however we like.
*/
setDeveloper(prevState =&gt; {
return { ...prevState, isEmployed: !prevState.isEmployed };
// It is essential to return the new state from this function
});
}
return (
&lt;button onClick={handleToggleEmployment}&gt;Toggle Employment Status&lt;/button&gt;
);
}
</code></pre><h3 id="side-effects-and-useeffect">Side effects and useEffect</h3><p><code>useEffect</code> lets us perform side effects in function components. So what are side effects?</p><p><strong>Side effects</strong> are where we need to reach into the outside world. For example, fetching data from an API or working with the DOM.</p><p>They are actions that can change our component state in an unpredictable fashion (that have cause 'side effects').</p><p><code>useEffect</code> accepts a callback function (called the 'effect' function), which will by default run every time there is a re-render.</p><p>It runs once our component mounts, which is the right time to perform a side effect in the component lifecycle.</p><pre><code class="language-js">/* What does our code do? Picks a color from the colors array and makes it the background color */
import React, { useState, useEffect } from 'react';
function App() {
const [colorIndex, setColorIndex] = useState(0);
const colors = ["blue", "green", "red", "orange"];
/*
We are performing a 'side effect' since we are working with an API.
We are working with the DOM, a browser API outside of React.
*/
useEffect(() =&gt; {
document.body.style.backgroundColor = colors[colorIndex];
});
/* Whenever state is updated, App re-renders and useEffect runs */
function handleChangeColor() {
/* This code may look complex, but all it does is go to the next color in the 'colors' array, and if it is on the last color, goes back to the beginning */
const nextIndex = colorIndex + 1 === colors.length ? 0 : colorIndex + 1;
setColorIndex(nextIndex);
}
return (
&lt;button onClick={handleChangeColor}&gt;
Change background color
&lt;/button&gt;
);
}</code></pre><p>To avoid executing the effect callback after each render, we provide a second argument, an empty array.</p><pre><code class="language-js">function App() {
...
/*
With an empty array, our button doesn't work no matter how many times we click it...
The background color is only set once, when the component first mounts.
*/
useEffect(() =&gt; {
document.body.style.backgroundColor = colors[colorIndex];
}, []);
/*
How do we not have the effect function run for every state update  but still have it work whenever the button is clicked?
*/
return (
&lt;button onClick={handleChangeIndex}&gt;
Change background color
&lt;/button&gt;
);
}</code></pre><p><code>useEffect</code> lets us conditionally perform effects with the dependencies array.</p><p>The <strong>dependencies array</strong> is the second argument and if any one of the values in the array changes, the effect function runs again.</p><pre><code class="language-js">function App() {
const [colorIndex, setColorIndex] = React.useState(0);
const colors = ["blue", "green", "red", "orange"];
/*
Let's add colorIndex to our dependencies array
When colorIndex changes, useEffect will execute the effect function again
*/
useEffect(() =&gt; {
document.body.style.backgroundColor = colors[colorIndex];
/*
When we use useEffect, we must think about what state values
we want our side effect to sync with
*/
}, [colorIndex]);
function handleChangeIndex() {
const next = colorIndex + 1 === colors.length ? 0 : colorIndex + 1;
setColorIndex(next);
}
return (
&lt;button onClick={handleChangeIndex}&gt;
Change background color
&lt;/button&gt;
);
}</code></pre><p><code>useEffect</code> lets us unsubscribe from certain effects by returning a function at the end.</p><pre><code class="language-js">function MouseTracker() {
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
React.useEffect(() =&gt; {
// .addEventListener() sets up an active listener...
window.addEventListener("mousemove", handleMouseMove);
/* ...So when we navigate away from this page, it needs to be
removed to stop listening. Otherwise, it will try to set
state in a component that doesn't exist (causing an error)
We unsubscribe any subscriptions / listeners w/ this 'cleanup function')
*/
return () =&gt; {
window.removeEventListener("mousemove", handleMouseMove);
};
}, []);
function handleMouseMove(event) {
setMousePosition({
x: event.pageX,
y: event.pageY
});
}
return (
&lt;div&gt;
&lt;h1&gt;The current mouse position is:&lt;/h1&gt;
&lt;p&gt;
X: {mousePosition.x}, Y: {mousePosition.y}
&lt;/p&gt;
&lt;/div&gt;
);
}</code></pre><p><code>useEffect</code> is the hook to use when you want to make an HTTP request (namely, a GET request when the component mounts).</p><p>Note that handling promises with the more concise async/await syntax requires creating a separate function. (Why? The effect callback function cannot be async.)</p><pre><code class="language-js">const endpoint = "https://api.github.com/users/reedbarger";
// Using .then() callback functions to resolve promise
function App() {
const [user, setUser] = React.useState(null);
React.useEffect(() =&gt; {
fetch(endpoint)
.then(response =&gt; response.json())
.then(data =&gt; setUser(data));
}, []);
}
// Using async / await syntax to resolve promise:
function App() {
const [user, setUser] = React.useState(null);
// cannot make useEffect callback function async
React.useEffect(() =&gt; {
getUser();
}, []);
// We must apply async keyword to a separate function
async function getUser() {
const response = await fetch(endpoint);
const data = await response.json();
setUser(data);
}
}
</code></pre><h3 id="refs-and-useref">Refs and useRef</h3><p><strong>Refs</strong> are a special attribute that are available on all React components. They allow us to create a reference to a given element / component when the component mounts.</p><p><code>useRef</code> allows us to easily use React refs. We call useRef (at the top of the component) and attach the returned value to the element's ref attribute to refer to it.</p><p>Once we create a reference, we use the current property to modify (mutate) the element's properties or can call any available methods on that element (like <code>.focus()</code> to focus an input).</p><pre><code class="language-js">function App() {
const [query, setQuery] = React.useState("react hooks");
/* We can pass useRef a default value.
We don't need it here, so we pass in null to reference an empty object
*/
const searchInput = useRef(null);
function handleClearSearch() {
/*
.current references the input element upon mount
useRef can store basically any value in its .current property
*/
searchInput.current.value = "";
searchInput.current.focus();
}
return (
&lt;form&gt;
&lt;input
type="text"
onChange={event =&gt; setQuery(event.target.value)}
ref={searchInput}
/&gt;
&lt;button type="submit"&gt;Search&lt;/button&gt;
&lt;button type="button" onClick={handleClearSearch}&gt;
Clear
&lt;/button&gt;
&lt;/form&gt;
);
}
</code></pre><h2 id="hooks-and-performance-1">Hooks and Performance</h2><h3 id="preventing-re-renders-and-react-memo">Preventing Re-renders and React.memo</h3><p><code>React.memo</code> is a function that allows us to optimize the way our components are rendered.</p><p>In particular, it performs a process called <strong>memoization </strong>that helps us prevent our components from re-rendering when they do not need to do so (see React.useMemo for more complete definition of memoization).</p><p><code>React.memo</code> helps most with preventing lists of components from being re-rendered when their parent components re-render.</p><pre><code class="language-js">/*
In the following application, we are keeping track of our programming skills. We can create new skills using an input, and they are added to the list (shown in the SkillList component). If we click on a skill, it is deleted.
*/
function App() {
const [skill, setSkill] = React.useState('')
const [skills, setSkills] = React.useState([
'HTML', 'CSS', 'JavaScript'
])
function handleChangeInput(event) {
setSkill(event.target.value);
}
function handleAddSkill() {
setSkills(skills.concat(skill))
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
console.log('rerendering');
return (
&lt;ul&gt;
{skills.map((skill, i) =&gt; &lt;li key={i}&gt;{skill}&lt;/li&gt;)}
&lt;/ul&gt;
)
})
export default App</code></pre><h3 id="callback-functions-and-usecallback">Callback functions and useCallback</h3><p><code>useCallback</code> is a hook that is used for improving our component performance. <strong>Callback functions</strong> are the name of functions that are "called back" within a parent component. </p><p>The most common usage is to have a parent component with a state variable, but you want to update that state from a child component. What do you do? You pass down a callback function to the child from the parent. That allows us to update state in the parent component.</p><p><code>useCallback</code> functions in a similar way as <code>React.memo</code>. It memoizes callback functions, so it is not recreated on every re-render. Using <code>useCallback</code> correctly can improve the performance of our app.</p><pre><code class="language-js">/* Let's keep the exact same App as above with React.memo, but add one small feature. Let's make it possible to delete a skill when we click on it. To do that, we need to filter the skills array according to the skill we click on. For that, we create the handleRemoveSkill function in App */
function App() {
const [skill, setSkill] = React.useState('')
const [skills, setSkills] = React.useState([
'HTML', 'CSS', 'JavaScript'
])
function handleChangeInput(event) {
setSkill(event.target.value);
}
function handleAddSkill() {
setSkills(skills.concat(skill))
}
function handleRemoveSkill(skill) {
setSkills(skills.filter(s =&gt; s !== skill))
}
/* Next, we pass handleRemoveSkill down as a prop, or since this is a function, as a callback function to be used within SkillList */
return (
&lt;&gt;
&lt;input onChange={handleChangeInput} /&gt;
&lt;button onClick={handleAddSkill}&gt;Add Skill&lt;/button&gt;
&lt;SkillList skills={skills} handleRemoveSkill={handleRemoveSkill} /&gt;
&lt;/&gt;
);
}
/* When we try typing in the input again, we see rerendering in the console every time we type. Our memoization from React.memo is broken!
What is happening is the handleRemoveSkill callback function is being recreated everytime App is rerendered, causing all children to be rerendered, too. We need to wrap handleRemoveSkill in useCallback and only have it be recreated when the skill value changes.
To fix our app, replace handleRemoveSkill with:
const handleRemoveSkill = React.useCallback((skill) =&gt; {
setSkills(skills.filter(s =&gt; s !== skill))
}, [skills])
Try it yourself!
*/
const SkillList = React.memo(({ skills, handleRemoveSkill }) =&gt; {
console.log('rerendering');
return (
&lt;ul&gt;
{skills.map(skill =&gt; &lt;li key={skill} onClick={() =&gt; handleRemoveSkill(skill)}&gt;{skill}&lt;/li&gt;)}
&lt;/ul&gt;
)
})
export default App</code></pre><h3 id="memoization-and-usememo">Memoization and useMemo</h3><p><code>useMemo</code> is very similar to <code>useCallback</code> and is for improving performance. But instead of being for callbacks, it is for storing the results of expensive calculations</p><p><code>useMemo</code> allows us to <strong>memoize</strong>, or remember the result of expensive calculations when they have already been made for certain inputs. </p><p>Memoization means that if a calculation has been done before with a given input, there's no need to do it again, because we already have the stored result of that operation.</p><p><code>useMemo</code> returns a value from the computation, which is then stored in a variable.</p><pre><code class="language-js">/* Building upon our skills app, let's add a feature to search through our available skills through an additional search input. We can add this in a component called SearchSkills (shown above our SkillList).
*/
function App() {
const [skill, setSkill] = React.useState('')
const [skills, setSkills] = React.useState([
'HTML', 'CSS', 'JavaScript', ...thousands more items
])
function handleChangeInput(event) {
setSkill(event.target.value);
}
function handleAddSkill() {
setSkills(skills.concat(skill))
}
const handleRemoveSkill = React.useCallback((skill) =&gt; {
setSkills(skills.filter(s =&gt; s !== skill))
}, [skills])
return (
&lt;&gt;
&lt;SearchSkills skills={skills} /&gt;
&lt;input onChange={handleChangeInput} /&gt;
&lt;button onClick={handleAddSkill}&gt;Add Skill&lt;/button&gt;
&lt;SkillList skills={skills} handleRemoveSkill={handleRemoveSkill} /&gt;
&lt;/&gt;
);
}
/* Let's imagine we have a list of thousands of skills that we want to search through. How do we performantly find and show the skills that match our search term as the user types into the input ? */
function SearchSkills() {
const [searchTerm, setSearchTerm] = React.useState('');
/* We use React.useMemo to memoize (remember) the returned value from our search operation and only run when it the searchTerm changes */
const searchResults = React.useMemo(() =&gt; {
return skills.filter((s) =&gt; s.includes(searchTerm);
}), [searchTerm]);
function handleSearchInput(event) {
setSearchTerm(event.target.value);
}
return (
&lt;&gt;
&lt;input onChange={handleSearchInput} /&gt;
&lt;ul&gt;
{searchResults.map((result, i) =&gt; &lt;li key={i}&gt;{result}&lt;/li&gt;
&lt;/ul&gt;
&lt;/&gt;
);
}
export default App</code></pre><h2 id="advanced-react-hooks-1">Advanced React Hooks</h2><h3 id="context-and-usecontext">Context and useContext</h3><p>In React, we want to avoid the following problem of creating multiple props to pass data down two or more levels from a parent component.</p><pre><code class="language-js">/*
React Context helps us avoid creating multiple duplicate props.
This pattern is also called props drilling.
*/
/* In this app, we want to pass the user data down to the Header component, but it first needs to go through a Main component which doesn't use it */
function App() {
const [user] = React.useState({ name: "Fred" });
return (
// First 'user' prop
&lt;Main user={user} /&gt;
);
}
const Main = ({ user }) =&gt; (
&lt;&gt;
{/* Second 'user' prop */}
&lt;Header user={user} /&gt;
&lt;div&gt;Main app content...&lt;/div&gt;
&lt;/&gt;
);
const Header = ({ user }) =&gt; &lt;header&gt;Welcome, {user.name}!&lt;/header&gt;;</code></pre><p>Context is helpful for passing props down multiple levels of child components from a parent component.</p><pre><code class="language-js">/*
Here is the previous example rewritten with Context.
First we create context, where we can pass in default values
We call this 'UserContext' because we're passing down user data
*/
const UserContext = React.createContext();
function App() {
const [user] = React.useState({ name: "Fred" });
return (
{/*
We wrap the parent component with the Provider property
We pass data down the component tree on the value prop
*/}
&lt;UserContext.Provider value={user}&gt;
&lt;Main /&gt;
&lt;/UserContext.Provider&gt;
);
}
const Main = () =&gt; (
&lt;&gt;
&lt;Header /&gt;
&lt;div&gt;Main app content&lt;/div&gt;
&lt;/&gt;
);
/*
We can't remove the two 'user' props. Instead, we can just use the Consumer property to consume the data where we need it
*/
const Header = () =&gt; (
{/* We use a pattern called render props to get access to the data */}
&lt;UserContext.Consumer&gt;
{user =&gt; &lt;header&gt;Welcome, {user.name}!&lt;/header&gt;}
&lt;/UserContext.Consumer&gt;
);</code></pre><p>The <code>useContext</code> hook allows us to consume context in any function component that is a child of the Provider, instead of using the render props pattern.</p><pre><code class="language-js">function Header() {
/* We pass in the entire context object to consume it and we can remove the Consumer tags */
const user = React.useContext(UserContext);
return &lt;header&gt;Welcome, {user.name}!&lt;/header&gt;;
};
</code></pre><h3 id="reducers-and-usereducer">Reducers and useReducer</h3><p>Reducers are simple, predictable (pure) functions that take a previous state object and an action object and return a new state object.</p><pre><code class="language-js">/* This reducer manages user state in our app: */
function userReducer(state, action) {
/* Reducers often use a switch statement to update state in one way or another based on the action's type property */
switch (action.type) {
/* If action.type has the string 'LOGIN' on it, we get data from the payload object on action */
case "LOGIN":
return {
username: action.payload.username,
email: action.payload.email
isAuth: true
};
case "SIGNOUT":
return {
username: "",
email: "",
isAuth: false
};
default:
/* If no case matches the action received, return the previous state */
return state;
}
}</code></pre><p>Reducers are a powerful pattern for managing state that is used in the popular state management library Redux (commonly used with React).</p><p>Reducers can be used in React with the <code>useReducer</code> hook in order to manage state across our app, as compared to useState (which is for local component state).</p><p><code>useReducer</code> can be paired with <code>useContext</code> to manage data and pass it around components easily.</p><p>Thus <code>useReducer</code> + <code>useContext</code> can be an entire state management system for our apps.</p><pre><code class="language-js">const initialState = { username: "", isAuth: false };
function reducer(state, action) {
switch (action.type) {
case "LOGIN":
return { username: action.payload.username, isAuth: true };
case "SIGNOUT":
// could also spread in initialState here
return { username: "", isAuth: false };
default:
return state;
}
}
function App() {
// useReducer requires a reducer function to use and an initialState
const [state, dispatch] = useReducer(reducer, initialState);
// we get the current result of the reducer on 'state'
// we use dispatch to 'dispatch' actions, to run our reducer
// with the data it needs (the action object)
function handleLogin() {
dispatch({ type: "LOGIN", payload: { username: "Ted" } });
}
function handleSignout() {
dispatch({ type: "SIGNOUT" });
}
return (
&lt;&gt;
Current user: {state.username}, isAuthenticated: {state.isAuth}
&lt;button onClick={handleLogin}&gt;Login&lt;/button&gt;
&lt;button onClick={handleSignout}&gt;Signout&lt;/button&gt;
&lt;/&gt;
);
}</code></pre><h3 id="writing-custom-hooks">Writing custom hooks</h3><p>Hooks were created to easily reuse behavior between components, similar to how components were created to reuse structure across our application.</p><p>Hooks let us add custom functionality to our apps that suits our needs and can be combined with all the existing hooks that we've covered.</p><p>Hooks can also be included in third-party libraries for the sake of all React developers. There are many great React libraries that provide custom hooks such as <code>@apollo/client</code>, <code>react-query</code>, <code>swr</code> and more.</p><pre><code class="language-js">/* Here is a custom React hook called useWindowSize that I wrote in order to calculate the window size (width and height) of any component it is used in */
import React from "react";
export default function useWindowSize() {
const isSSR = typeof window !== "undefined";
const [windowSize, setWindowSize] = React.useState({
width: isSSR ? 1200 : window.innerWidth,
height: isSSR ? 800 : window.innerHeight,
});
function changeWindowSize() {
setWindowSize({ width: window.innerWidth, height: window.innerHeight });
}
React.useEffect(() =&gt; {
window.addEventListener("resize", changeWindowSize);
return () =&gt; {
window.removeEventListener("resize", changeWindowSize);
};
}, []);
return windowSize;
}
/* To use the hook, we just need to import it where we need, call it, and use the width wherever we want to hide or show certain elements, such as in a Header component. */
// components/Header.js
import React from "react";
import useWindowSize from "../utils/useWindowSize";
function Header() {
const { width } = useWindowSize();
return (
&lt;div&gt;
{/* visible only when window greater than 500px */}
{width &gt; 500 &amp;&amp; (
&lt;&gt;
Greater than 500px!
&lt;/&gt;
)}
{/* visible at any window size */}
&lt;p&gt;I'm always visible&lt;/p&gt;
&lt;/div&gt;
);
}</code></pre><h3 id="rules-of-hooks">Rules of hooks</h3><p>There are two essential rules of using React hooks that we cannot violate for them to work properly:</p><ul><li>Hooks can only be used within function components (not plain JavaScript functions or class components)</li><li>Hooks can only be called at the top of components (they cannot be in conditionals, loops, or nested functions)</li></ul><h2 id="conclusion"><strong>Conclusion</strong></h2><p>There are other worthwhile concepts you can learn, but if you commit to learning the concepts covered in this cheatsheet, you'll have a great grasp of the most important and powerful parts of the React library.</p><p><em>Want to keep this guide for future reference?</em></p><p><a href="http://bit.ly/react-sheet-2021"><strong>Download a complete PDF version of this cheatsheet here.</strong></a></p>
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
