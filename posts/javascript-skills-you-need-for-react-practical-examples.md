---
card: "/images/default.jpg"
tags: [React]
description: One of the most important things to understand about React is
author: "Milad E. Fahmy"
title: "The JavaScript Skills You Need For React (+ Practical Examples)"
created: "2021-08-15T19:27:37+02:00"
modified: "2021-08-15T19:27:37+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">The JavaScript Skills You Need For React (+ Practical Examples)</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/01/7-js-skills-for-react.png 300w,
/news/content/images/size/w600/2021/01/7-js-skills-for-react.png 600w,
/news/content/images/size/w1000/2021/01/7-js-skills-for-react.png 1000w,
/news/content/images/size/w2000/2021/01/7-js-skills-for-react.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/01/7-js-skills-for-react.png" alt="The JavaScript Skills You Need For React (+ Practical Examples)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>One of the most important things to understand about React is that <em>it is fundamentally</em> <em>JavaScript</em>. This means that the better you are at JavaScript, the more successful you will be with React.</p>
<p><strong>Let's break down the 7 essential concepts that you should know about JavaScript to master React.</strong></p>
<p>And when I say these concepts are essential, I mean that they are used in every single application that a React developer makes, with little to no exceptions.</p>
<p>Learning these concepts is one of the most valuable things you can do to accelerate your ability to make React projects and become a skilled React developer, so let's get started.</p>
<h2 id="want-your-own-copy-of-this-guide">Want your own copy of this guide?</h2>
<p><a href="http://bit.ly/7-js-skills-for-react"><strong>Download the cheatsheet in PDF format here</strong></a><strong> </strong>(it takes 5 seconds).</p>
<h2 id="1-function-declarations-and-arrow-functions">1. Function Declarations and Arrow Functions </h2>
<p>The basis of any React application is the <strong>component</strong>. In React, components are defined with both JavaScript functions and classes. </p>
<p>But unlike JavaScript functions, React components return JSX elements that are used to structure our application interface.</p><pre><code class="language-js">// JavaScript function: returns any valid JavaScript type
function javascriptFunction() {
return "Hello world";
}
// React function component: returns JSX
function ReactComponent(props) {
return &lt;h1&gt;{props.content}&lt;/h1&gt;
}</code></pre>
<p>Note the different casing between the names of JavaScript functions and React function components. JavaScript functions are named in camel casing, while React function components are written with pascal casing (in which all words are capitalized).</p>
<p>There are two different ways to write a function in JavaScript: the traditional way, using the <code>function</code> keyword, called a <strong>function declaration</strong>, and as an <strong>arrow function</strong>, which was introduced in ES6.</p>
<p>Both function declarations and arrow functions can be used to write function components in React. </p>
<p>The primary benefit of arrow functions is their succinctness. We can use several shorthands in order to write our functions to remove unnecessary boilerplate, such that we can even write it all on a single line.</p><pre><code class="language-js">// Function declaration syntax
function MyComponent(props) {
return &lt;div&gt;{props.content}&lt;/div&gt;;
}
// Arrow function syntax
const MyComponent = (props) =&gt; {
return &lt;div&gt;{props.content}&lt;/div&gt;;
}
// Arrow function syntax (shorthand)
const MyComponent = props =&gt; &lt;div&gt;{props.content}&lt;/div&gt;;
/*
In the last example we are using several shorthands that arrow functions allow:
1. No parentheses around a single parameter
2. Implicit return (as compared to using the "return" keyword)
3. No curly braces for function body
*/</code></pre>
<p>One small benefit of using function declarations over arrow functions is that you don't have to worry about problems with <strong>hoisting</strong>. </p>
<p>Due to the JavaScript behavior of hoisting, you can use multiple function components made with function declarations in a single file in whichever order you like. </p>
<p>Function components made with arrow functions, however, cannot be ordered whichever way you like. Because JavaScript variables are hoisted, arrow function components must be declared before they are used:</p><pre><code class="language-js">function App() {
return (
&lt;&gt;
{/* Valid! FunctionDeclaration is hoisted */}
&lt;FunctionDeclaration /&gt;
{/* Invalid! ArrowFunction is NOT hoisted. Therefore, it must be declared before it is used */}
&lt;ArrowFunction /&gt;
&lt;/&gt;
}
function FunctionDeclaration() {
return &lt;div&gt;Hello React!&lt;/div&gt;;
}
function ArrowFunction() {
return &lt;div&gt;Hello React, again!&lt;/div&gt;;
}  </code></pre>
<p>Another small difference in using the function declaration syntax is that you can immediately export a component from a file using <code>export default</code> or <code>export</code> before the function is declared. You can only use the <code>export</code> keyword before arrow functions (default exports must be placed on a line below the component). </p><pre><code class="language-js">// Function declaration syntax can be immediately exported with export default or export
export default function App() {
return &lt;div&gt;Hello React&lt;/div&gt;;
}
// Arrow function syntax must use export only
export const App = () =&gt; {
return &lt;div&gt;Hello React&lt;/div&gt;;
}</code></pre>
<h2 id="2-template-literals">2. Template Literals </h2>
<p>JavaScript has a clumsy history of working with strings, particularly if you want to <strong>concatenate</strong> or connect multiple strings together. Before the arrival of ES6, to add strings together you needed to use the <code>+</code> operator to add each string segment to one another.</p>
<p>With the addition of ES6, we were given a newer form of string called a <strong>template literal</strong>, which consists of two back ticks <code>``</code> instead of single or double quotes. </p>
<p>Instead of having to use the <code>+</code> operator, we can connect strings by putting a JavaScript expression (such as a variable) within a special <code>${}</code> syntax:</p><pre><code class="language-js">/*
Concatenating strings prior to ES6.
Notice the awkward space after the word Hello?
*/
function sayHello(text) {
return 'Hello ' + text + '!';
}
sayHello('React'); // Hello React!
/*
Concatenating strings using template literals.
See how much more readable and predictable this code is?
*/
function sayHelloAgain(text) {
return `Hello again, ${text}!`;
}
sayHelloAgain('React'); // Hello again, React!</code></pre>
<p>What's powerful about template literals is their ability to use any JavaScript expression (that is, anything in JavaScript that resolves to a value) within the <code>${}</code> syntax. </p>
<p>We can even include conditional logic using the ternary operator, which is perfect for conditionally adding or removing a class or style rule to a given JSX element:</p><pre><code class="language-js">/* Go to react.new and paste this code in to see it work! */
import React from "react";
function App() {
const [isRedColor, setRedColor] = React.useState(false);
const toggleColor = () =&gt; setRedColor((prev) =&gt; !prev);
return (
&lt;button
onClick={toggleColor}
style={{
background: isRedColor ? "red" : "black",
color: 'white'
}}
&gt;
Button is {isRedColor ? "red" : "not red"}
&lt;/button&gt;
);
}
export default App;</code></pre>
<p>In short, template literals are great for React whenever we need to dynamically create strings. For example, when we use string values that can change in our head or body elements in our site:</p><pre><code class="language-js">import React from 'react';
import Head from './Head';
function Layout(props) {
// Shows site name (i.e. Reed Barger) at end of page title
const title = `${props.title} | Reed Barger`;
return (
&lt;&gt;
&lt;Head&gt;
&lt;title&gt;{title}&lt;/title&gt;
&lt;/Head&gt;
&lt;main&gt;
{props.children}
&lt;/main&gt;
&lt;/&gt;
);
}
</code></pre>
<h2 id="3-short-conditionals-ternary-operator">3. Short Conditionals: &amp;&amp;, ||, Ternary Operator</h2>
<p>Considering that React is just JavaScript, it is very easy to conditionally show (or hide) JSX elements using simple if statements and sometimes switch statements.</p><pre><code class="language-js">import React from "react";
function App() {
const isLoggedIn = true;
if (isLoggedIn) {
// Shows: Welcome back!
return &lt;div&gt;Welcome back!&lt;/div&gt;;
}
return &lt;div&gt;Who are you?&lt;/div&gt;;
}
export default App;</code></pre>
<p>With the help of some essential JavaScript operators, we cut down on repetition and make our code more concise. </p>
<p>We can transform the if statement above into the following, using the <strong>ternary operator. </strong>The ternary operator functions exactly the same as an if-statement, but it is shorter, it is an expression (not a statement), and can be inserted within JSX:</p><pre><code class="language-js">import React from "react";
function App() {
const isLoggedIn = true;
// Shows: Welcome back!
return isLoggedIn ? &lt;div&gt;Welcome back!&lt;/div&gt; : &lt;div&gt;Who are you?&lt;/div&gt;
}
export default App;</code></pre>
<p>Ternary operators can also be used inside curly braces (again, since it is an expression):</p><pre><code class="language-js">import React from "react";
function App() {
const isLoggedIn = true;
// Shows: Welcome back!
return &lt;div&gt;{isLoggedIn ? "Welcome back!" : "Who are you?"&lt;/div&gt;;
}
export default App;</code></pre>
<p>If we were to change the example above and only wanted to show text if the user was logged in (if <code>isLoggedIn</code> is true), this would be a great use case for the <code>&amp;&amp;</code> (and) operator. </p>
<p>If the first value (<strong>operand</strong>) in the conditional is true, the <code>&amp;&amp;</code> operator displays the second operand. Otherwise it returns the first operand. And since it is <strong>falsy</strong> (is a value automatically converted to the boolean <code>false</code> by JavaScript), it is not rendered by JSX:</p><pre><code class="language-js">import React from "react";
function App() {
const isLoggedIn = true;
// If true: Welcome back!, if false: nothing
return &lt;div&gt;{isLoggedIn &amp;&amp; "Welcome back!"}&lt;/div&gt;;
}
export default App;</code></pre>
<p>Let's say that we want the reverse of what we're doing now: to only say "Who are you?" if <code>isLoggedIn</code> is false. If it's true, we won't show anything.</p>
<p>For this logic, we can use the <code>||</code> (or) operator. It essentially works opposite to the <code>&amp;&amp;</code> operator. If the first operand is true, the first (falsy) operand is returned. If the first operand is false, the second operand is returned.</p><pre><code class="language-js">import React from "react";
function App() {
const isLoggedIn = true;
// If true: nothing, if false: Who are you?
return &lt;div&gt;{isLoggedIn || "Who are you?"}&lt;/div&gt;;
}
export default App;</code></pre>
<h2 id="4-three-array-methods-map-filter-reduce-">4. Three Array Methods: .map(), .filter(), .reduce()</h2>
<p>Inserting primitive values into JSX elements is easy – just use curly braces. </p>
<p>We can insert any valid expressions, including variables that contain primitive values (strings, numbers, booleans, and so on) as well as object properties that contain primitive values. </p><pre><code class="language-js">import React from "react";
function App() {
const name = "Reed";
const bio = {
age: 28,
isEnglishSpeaker: true
};
return (
&lt;&gt;
&lt;h1&gt;{name}&lt;/h1&gt;
&lt;h2&gt;I am {bio.age} years old&lt;/h2&gt;
&lt;p&gt;Speaks English: {bio.isEnglishSpeaker}&lt;/p&gt;
&lt;/&gt;
);
}
export default App;</code></pre>
<p>What if we have an array and we want to iterate over that array to show each array element within an individual JSX element? </p>
<p>For this, we can use the <code><strong>.map()</strong></code> method. It allows us to transform each element in our array in the way we specify with the inner function. </p>
<p>Note that it is especially concise when used in combination with an arrow function.</p><pre><code class="language-js">/* Note that this isn't exactly the same as the normal JavaScript .map() method, but is very similar. */
import React from "react";
function App() {
const programmers = ["Reed", "John", "Jane"];
return (
&lt;ul&gt;
{programmers.map(programmer =&gt; &lt;li&gt;{programmer}&lt;/li&gt;)}
&lt;/ul&gt;
);
}
export default App;</code></pre>
<p>There are other flavors of the .map() method that perform related tasks and are important to know because they can be chained in combination with one another. </p>
<p>Why? Because <code>.map()</code>, like many array methods, returns a shallow copy of the array that it has iterated over. This enables its returned array to be passed onto the next method in the chain.</p>
<p><code><strong>.filter()</strong></code>, as its name indicates, allows us to filter certain elements out of our array. For example, if we wanted to remove all names of programmers that started with "J", we could do so with <code>.filter()</code>:</p><pre><code class="language-js">import React from "react";
function App() {
const programmers = ["Reed", "John", "Jane"];
return (
&lt;ul&gt;
{/* Returns 'Reed' */}
{programmers
.filter(programmer =&gt; !programmer.startsWith("J"))
.map(programmer =&gt; &lt;li&gt;{programmer}&lt;/li&gt;)}
&lt;/ul&gt;
);
}
export default App;</code></pre>
<p>It's important to understand that both <code>.map()</code> and <code>.filter()</code> are just different variations of the <code><strong>.reduce()</strong></code> array method, which is capable of transforming array values into virtually any data type, even non-array values.</p>
<p>Here's <code>.reduce()</code> performing the same operation as our <code>.filter()</code> method above:</p><pre><code class="language-js">import React from "react";
function App() {
const programmers = ["Reed", "John", "Jane"];
return (
&lt;ul&gt;
{/* Returns 'Reed' */}
{programmers
.reduce((acc, programmer) =&gt; {
if (!programmer.startsWith("J")) {
return acc.concat(programmer);
} else {
return acc;
}
}, [])
.map((programmer) =&gt; (
&lt;li&gt;{programmer}&lt;/li&gt;
))}
&lt;/ul&gt;
);
}
export default App;</code></pre>
<h2 id="5-object-tricks-property-shorthand-destructuring-spread-operator">5. Object Tricks: Property Shorthand, Destructuring, Spread Operator</h2>
<p>Like arrays, objects are a data structure that you need to be comfortable with when using React. </p>
<p>Since objects exist for the sake of organized key-value storage, unlike arrays, you're going to need to be very comfortable accessing and manipulating object properties.</p>
<p>To add properties to an object as you create it, you name the property and its corresponding value. One very simple shorthand to remember is that if the property name is the same as the value, you only have to list the property name.</p>
<p>This is the <strong>object property shorthand</strong>:</p><pre><code class="language-js">const name = "Reed";
const user = {
// instead of name: name, we can use...
name
};
console.log(user.name); // Reed</code></pre>
<p>The standard way to access properties from an object is using the dot notation. An even more convenient approach, however, is <strong>object destructuring</strong>. It allows us to extract properties as individual variables of the same name from a given object. </p>
<p>It looks somewhat like you're writing an object in reverse, which is what makes the process intuitive. It's much nicer to use than having to use the object name multiple times to access each time you want to grab a value from it.</p><pre><code class="language-js">const user = {
name: "Reed",
age: 28,
isEnglishSpeaker: true
};
// Dot property access
const name = user.name;
const age = user.age;
// Object destructuring
const { age, name, isEnglishSpeaker: knowsEnglish } = user;
// Use ':' to rename a value as you destructure it
console.log(knowsEnglish); // true</code></pre>
<p>Now if you want to create objects from existing ones, you could list properties one-by-one, but that can get very repetitive. </p>
<p>Instead of copying properties manually, you can spread all of an object's properties into another object (as you create it) using the object spread operator:</p><pre><code class="language-js">const user = {
name: "Reed",
age: 28,
isEnglishSpeaker: true
};
const firstUser = {
name: user.name,
age: user.age,
isEnglishSpeaker: user.isEnglishSpeaker
};
// Copy all of user's properties into secondUser
const secondUser = {
...user
};</code></pre>
<p>What is great about the object spread is that you can spread in as many objects into a new one as you like, and you can order them like properties. But be aware that properties that come later with the same name will overwrite previous properties:</p><pre><code class="language-js">const user = {
name: "Reed",
age: 28
};
const moreUserInfo = {
age: 70,
country: "USA"
};
// Copy all of user's properties into secondUser
const secondUser = {
...user,
...moreUserInfo,
computer: "MacBook Pro"
};
console.log(secondUser);
// { name: "Reed", age: 70, country: "USA", computer: "Macbook Pro" }</code></pre>
<h2 id="6-promises-async-await-syntax">6: Promises + Async/Await Syntax</h2>
<p>Virtually every React application consists of <strong>asynchronous code </strong>–<strong> </strong>code that takes an indefinite amount of time to be executed. Particularly if you need to get or change data from an external API using browser features like the <strong>Fetch API</strong> or the third-party library <strong>axios</strong>. </p>
<p>Promises are used to resolve asynchronous code to make it resolve like normal, synchronous code, which we can read from top to bottom. </p>
<p>Promises traditionally use callbacks to resolve our asynchronous code. We use the <code>.then()</code> callback to resolve successfully resolved promises, while we use the <code>.catch()</code> callback to resolve promises that respond with an error.</p>
<p>Here is a real example of using React to fetch data from my GitHub API using the Fetch API to show my profile image. The data is resolved using promises:</p><pre><code class="language-js">/* Go to react.new and paste this code in to see it work! */
import React from 'react';
const App = () =&gt; {
const [avatar, setAvatar] = React.useState('');
React.useEffect(() =&gt; {
/*
The first .then() lets us get JSON data from the response.
The second .then() gets the url to my avatar and puts it in state.
*/
fetch('https://api.github.com/users/reedbarger')
.then(response =&gt; response.json())
.then(data =&gt; setAvatar(data.avatar_url))
.catch(error =&gt; console.error("Error fetching data: ", error);
}, []);
return (
&lt;img src={avatar} alt="Reed Barger" /&gt;
);
};
export default App;</code></pre>
<p>Instead of always needing to use callbacks to resolve our data from a promise, we can use a cleaned syntax that looks identical to synchronous code, called the <strong>async/await syntax</strong>.</p>
<p>The async and await keywords are only used with functions (normal JavaScript functions, not React function components). </p>
<p>To use them, we need to make sure our asynchronous code is in a function prepended with the keyword <code>async</code>. Any promise's value can then be resolved by placing the keyword <code>await</code> before it.</p><pre><code class="language-js">/* Go to react.new and paste this code in to see it work! */
import React from "react";
const App = () =&gt; {
const [avatar, setAvatar] = React.useState("");
React.useEffect(() =&gt; {
/*
Note that because the function passed to useEffect cannot be async, we must create a separate function for our promise to be resolved in (fetchAvatar)
*/
async function fetchAvatar() {
const response = await fetch("https://api.github.com/users/reedbarger");
const data = await response.json();
setAvatar(data.avatar_url);
}
fetchAvatar();
}, []);
return &lt;img src={avatar} alt="Reed Barger" /&gt;;
};
export default App;
</code></pre>
<p>We use the <code>.catch()</code> callback to handle errors within traditional promises, but how do you catch errors with async/await? </p>
<p>We still use <code>.catch()</code> and when we hit an error, such as when we have a response from our API that is in the 200 or 300 status range:</p><pre><code class="language-js">/* Go to react.new and paste this code in to see it work! */
import React from "react";
const App = () =&gt; {
const [avatar, setAvatar] = React.useState("");
React.useEffect(() =&gt; {
async function fetchAvatar() {
/* Using an invalid user to create a 404 (not found) error */
const response = await fetch("https://api.github.com/users/reedbarge");
if (!response.ok) {
const message = `An error has occured: ${response.status}`;
/* In development, you'll see this error message displayed on your screen */
throw new Error(message);
}
const data = await response.json();
setAvatar(data.avatar_url);
}
fetchAvatar();
}, []);
return &lt;img src={avatar} alt="Reed Barger" /&gt;;
};
export default App;
</code></pre>
<h2 id="7-es-modules-import-export-syntax">7. ES Modules + Import / Export syntax</h2>
<p>ES6 gave us the ability to easily share code between our own JavaScript files as well as third-party libraries using <strong>ES modules</strong>.</p>
<p>Also, when we leverage tools like Webpack, we can import assets like images and svgs, as well as CSS files and use them as dynamic values in our code.</p><pre><code class="language-js">/* We're bringing into our file a library (React), a png image, and CSS styles */
import React from 'react';
import logo from '../img/site-logo.png';
import '../styles/app.css';
function App() {
return (
&lt;div&gt;
Welcome!
&lt;img src={logo} alt="Site logo" /&gt;
&lt;/div&gt;
);
}
export default App;</code></pre>
<p>The idea behind ES modules is to be able to split up our JavaScript code into different files, to make it modular or reusable across our app.</p>
<p>As far as JavaScript code goes, we can import and export variables and functions. There are two ways of importing and exporting, as <strong>named imports/exports</strong> and as <strong>default imports/exports.</strong></p>
<p>There can only be one thing we make a default import or export per file and we can make as many things named imports/export as we like. For example:</p><pre><code class="language-js">// constants.js
export const name = "Reed";
export const age = 28;
export default function getName() {
return name;
}
// app.js
// Notice that named exports are imported between curly braces
import getName, { name, age } from '../constants.js';
console.log(name, age, getName());</code></pre>
<p>We can also write all of the exports at the end of the file instead of next to each variable or function:</p><pre><code class="language-js">// constants.js
const name = "Reed";
const age = 28;
function getName() {
return name;
}
export { name, age };
export default getName;
// app.js
import getName, { name, age } from '../constants.js';
console.log(name, age, getName());</code></pre>
<p>You can also alias or rename what you are importing using the <code>as</code> keyword for named imports. The benefit of default exports is that they can be named to whatever you like.</p><pre><code class="language-js">// constants.js
const name = "Reed";
const age = 28;
function getName() {
return name;
}
export { name, age };
export default getName;
// app.js
import getMyName, { name as myName, age as myAge } from '../constants.js';
console.log(myName, myAge, getMyName());</code></pre>
<h3 id="inthetimeittakestowatchyourfavoritetvshowyoucanstarta100000yearcareerwithreact">In the time it takes to watch your favorite TV show, you can start a $100,000 / year career with React.</h3>
<p>In this premium React training course, you can unlock the knowledge, skills, and confidence that deliver life-changing results in real dollars.</p>
<p>Gain the insider information hundreds of developers have already used to master React, find their dream jobs, and take control of their future:</p>
<p><a href="http://bit.ly/join-react-bootcamp"><img src="https://reedbarger.nyc3.digitaloceanspaces.com/react-bootcamp-banner.png" alt="The React Bootcamp"></a><br>
<em>Click here to be notified when the course opens</em>
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
