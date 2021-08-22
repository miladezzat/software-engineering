---
card: "/images/default.jpg"
tags: [React]
description: React is an open-source JavaScript library that helps you bui
author: "Milad E. Fahmy"
title: "React Tutorial – Learn React and JavaScript Programming Basics with Example Code"
created: "2021-08-15T19:27:07+02:00"
modified: "2021-08-15T19:27:07+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-beginners-guide tag-components ">
<header class="post-full-header">
<h1 class="post-full-title">React Tutorial – Learn React and JavaScript Programming Basics with Example Code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/02/freeCodeCamp-Cover-2.png 300w,
/news/content/images/size/w600/2021/02/freeCodeCamp-Cover-2.png 600w,
/news/content/images/size/w1000/2021/02/freeCodeCamp-Cover-2.png 1000w,
/news/content/images/size/w2000/2021/02/freeCodeCamp-Cover-2.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/02/freeCodeCamp-Cover-2.png" alt="React Tutorial – Learn React and JavaScript Programming Basics with Example Code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>React is an open-source JavaScript library that helps you build user interfaces. It's a component-based, declarative, "learn once and write anywhere" tool. </p>
<p>With 164K+ GitHub stars, 30K+ forks, and close to ~10 million weekly downloads, React is undoubtedly a great user interface library to learn and use.</p>
<p>If you are a developer getting started with React or thinking of using it in your side-projects or enterprises, this article is for you. If you started learning React a while ago but you're finding it hard to grasp the basics, give this article a read.</p>
<h1 id="tl-dr">TL;DR</h1>
<p>This article is lengthy but should be a fun read if you want to learn React or if you're working with it already. It answers these questions:</p>
<ul>
<li>How does modern JavaScript knowledge make you an efficient React developer?</li>
<li>What kind of changes do you need in your mindset when you design and develop a React application?</li>
<li>What are the ecosystems you need to be aware of and why?</li>
</ul>
<p>Just chill, grab your favorite beverage, and enjoy the article. </p>
<h1 id="why-i-wrote-this-article">Why I Wrote this Article</h1>
<p>At the beginning, when I was learning React, I made the mistake of not focusing on a few essential fundamentals. As my knowledge grew more substantial, I started learning those concepts and found myself more comfortable with React. </p>
<p>Many of my mentees discussed the challenges they faced when dealing with React which also centered around these fundamentals. So this motivated me to write this article and share what I've learned.</p>
<h1 id="modern-javascript-concepts-you-ll-need-to-know-for-react">Modern JavaScript Concepts You'll Need to Know for React</h1>
<figcaption>Flexibility with Modern JavaScript</figcaption>
</figure>
<p>The standardized name of JavaScript is ECMAScript. ECMAScript 2015 (which is also the 6th edition, and why it's called ES6) brought lots of cool features and new syntax to the JavaScript language. </p>
<p>React, and many other modern user interface frameworks and libraries, work well with ES6. It is essential to know its modern syntax and new features to make coding much easier.</p>
<blockquote> This doesn't mean you can not write a React application with ES5. <a href="https://reactjs.org/docs/react-without-es6.html">You can</a> if you have to, but you'll kind of be doing things the hard way.</blockquote>
<p>Here are a few concepts you need to learn well.</p>
<h2 id="1-how-to-use-let-and-const-in-javascript">1. How to Use Let and Const in JavaScript</h2>
<p>Until ES5, the only way to declare a variable was to use the <code>var</code> keyword. ES6 introduced two more ways to declare variables, using the <code>let</code> and <code>const</code> keywords. Using these modern keywords gives us more predictability and fewer chances of introducing bugs in the code.</p>
<h3 id="the-var-keyword">The <code>var</code> Keyword</h3>
<p>A variable declared with <code>var</code> is function scoped. This means we will get a <code>ReferenceError</code> when we try to access the variable outside of the function.</p><pre><code class="language-js">var x = 10;
function someFunc(){
var y = 10;
console.log('inside someFunc', x, y);
}</code></pre>
<p>Now, if you call <code>someFunc()</code>, it will log the following in the browser console:</p><pre><code class="language-shell">inside someFunc 10 10</code></pre>
<p>But try accessing the variable y outside of <code>sumFunc()</code> and you will get the following error:</p><pre><code class="language-shell">Uncaught ReferenceError: y is not defined
</code></pre>
<h3 id="the-let-keyword">The <code>let</code> keyword</h3>
<p><code>let</code> is block scoped. This is the main difference between <code>let</code> and <code>var</code>. Take this function where we loop using a <code>for</code> loop and access the variable <code>i</code> inside and outside of the loop.</p><pre><code class="language-js">function letsLoop() {
for (var i=0; i&lt;5; i++) {
console.log('i inside the loop: ', i);
}
console.log('i outside of loop', i);
}
</code></pre>
<p>When you call the function <code>letsLoop()</code>, the output will be this:</p><pre><code class="language-shell">i inside the loop:  0
i inside the loop:  1
i inside the loop:  2
i inside the loop:  3
i inside the loop:  4
i outside of loop 5</code></pre>
<p>Now, let's change the keyword <code>var</code> to <code>let</code> while declaring and assigning the variable <code>i</code>.</p><pre><code class="language-js">function letsLoop() {
for (let i=0; i&lt;5; i++) {
console.log('i inside the loop: ', i);
}
console.log('i outside of loop', i);
}</code></pre>
<p>If you execute the <code>letsLoop()</code> function now, you will get a <code>ReferenceError</code> while accessing the variable <code>i</code> outside of the <code>for</code> loop. It is because the visibility and accessibility (or scope) of the variable <code>i</code> is limited to the <code>for</code> block.</p><pre><code class="language-shell">i inside the loop:  0
i inside the loop:  1
i inside the loop:  2
i inside the loop:  3
i inside the loop:  4
Uncaught ReferenceError: i is not defined
at letsLoop (&lt;anonymous&gt;:6:35)
at &lt;anonymous&gt;:1:1</code></pre>
<h3 id="the-const-keyword">The <code>const</code> Keyword</h3>
<p><code>const</code> is almost the same as <code>let</code>. The only difference is that once you have assigned a value to a variable defined with the <code>const</code> keyword, you can not reassign a new value to it.</p><pre><code class="language-js">const name = 'freeCodeCamp';
name = 'My freeCodeCamp'; // Uncaught TypeError: Assignment to constant variable.</code></pre>
<p>This applies to all types of variables we can create in JavaScript. You need to be careful when it comes to a complex data structure like <code>object</code>. When an object is declared and assigned value with <code>const</code>, you can still change the value of its properties. But you can not reassign the variable another object. Please have a look:</p><pre><code class="language-js">const publication = {
'name': 'freeCodeCamp'
}
publication.name= 'My freeCodeCamp'; // Allowed
publication = {}; // Uncaught TypeError: Assignment to constant variable.</code></pre>
<p>And now to compare the three keywords:</p>
<table>
<thead>
<tr>
<th></th>
<th style="text-align:center">var</th>
<th style="text-align:right">let</th>
<th style="text-align:right">const</th>
</tr>
</thead>
<tbody>
<tr>
<td>Scope</td>
<td style="text-align:center">function</td>
<td style="text-align:right">block</td>
<td style="text-align:right">block</td>
</tr>
<tr>
<td>Reassigning a new value</td>
<td style="text-align:center">Allowed</td>
<td style="text-align:right">Allowed</td>
<td style="text-align:right">Not Allowed</td>
</tr>
<tr>
<td>When accessed before declaring</td>
<td style="text-align:center">undefined</td>
<td style="text-align:right">ReferenceError</td>
<td style="text-align:right">ReferenceError</td>
</tr>
</tbody>
</table>
<p>Here are some rules for using var, let, and const:</p>
<ul>
<li>Don't use <code>var</code> anymore. Use <code>let</code> or <code>const</code>.</li>
<li>Use <code>const</code> more often. Use <code>let</code> when you need to reassign another value to a variable.</li>
</ul>
<p>In a React app, you will see code using <code>let</code> and <code>const</code> very often. A React component is usually declared using <code>const</code>. Have a look at the example below. </p>
<p>The variable <code>DifficultyLevels</code> is declared using <code>const</code> and is assigned a function as a value. This function defines a React component. It makes sense to use <code>const</code> here, as it will not be reassigned with another value. </p>
<p>Now, notice the usages of the variable <code>level</code> inside the <code>useEffect</code>. We need to reassign the values of it based on a condition. So it makes sense to use the <code>let</code> keyword there. But, you won't see any <code>var</code> anywhere!</p><pre><code class="language-js">const DifficultyLevels = () =&gt; {
const userDataLS = getFromLS(LS_KEY_USER_DATA);
const [userData, setUserData] = useState(userDataLS || {
'fullName': '',
'age': '',
'email': '',
'gender': 'F',
'difficultyLevel': BEGINNER
});
//... other code
useEffect(() =&gt; {
let level = 'beginner';
if (userData.age &gt;=10 &amp;&amp; userData.age &lt;= 13) {
level = 'intermediate';
} else if (userData.age &gt; 13) {
level = 'advanced';
}
setUserData({
...userData,
'difficultyLevel': level
});
}, [userData.age]);
//... other code
return(
&lt;&gt;
{/*...other code */}
&lt;span&gt; { userData.level } &lt;/span&gt;
{/*...other code */}
&lt;/&gt;
)
}</code></pre>
<h2 id="2-how-to-use-template-literals-in-javascript">2. How to Use Template Literals in JavaScript</h2>
<p>Gone are the days when we used to concatenate strings like this:</p><pre><code class="language-js">var name = 'Tapas';
var publication = 'freeCodeCamp';
var greeting = 'Hello'; // Or Hola
// It produces output like, "Hello Tapas, welcome to freeCodeCamp."
var message = greeting + ' ' + name + ', welcome to ' + publication + '.';</code></pre>
<p>The above way of handling string concatenation and dynamic values into it is too much work, it's hard to read, and it's error-prone. How about we get the same output by writing code naturally without worrying about <code>+</code>, spaces, and so on?</p>
<p>With ES6, we have <code>template literals,</code> which are string literals that allow embedding expressions. We use backticks (` `) instead single or double-quotes in template literals. We can define the dynamic values (or expressions) as placeholders using the dollar sign ($) and curly braces (like <code>${expression}</code>).</p>
<p>Let's write the above example using template literals.</p><pre><code class="language-js">// We are expecting the values to change dynamically, hence `let`
let name = 'Tapas';
let publication = 'freeCodeCamp';
let greeting = 'Hello'; // Or Hola
// A much better way of wrting like natural language sentence
let message = `${greeting} ${name}, welcome to ${publication}.`;</code></pre>
<p>So do we use it in our React code? Yes, why not? You may want to use the above greeting message in your React component and render it in a UI element. <a href="https://blog.greenroots.info/what-exactly-is-javascript-tagged-template-literal-ckg6hyekf000n8bs1hz9udvzc">Here is an article</a> to help you learn about template literals in detail. </p>
<p>Do you use <a href="https://styled-components.com/">styled-components</a> in your React project? In that case, you are using template literals already!</p>
<h2 id="3-how-to-import-and-export-modules-in-javascript">3. How to Import and Export Modules in JavaScript</h2>
<p>To code efficiently in React, you need to <code>think in React</code>. One of the primary ways you need to think is to break the UI into a suitable Component Hierarchy. </p>
<p>We will learn more about what this means below. But at a high level, every component in React can be a JavaScript module. You have to export that module to import it elsewhere in the code for better component composition. This is why it is essential to get a good grip on module concepts and import/export functionalities.</p>
<p>Here is a simple example of how we can export a React component and import it into another component.</p><pre><code class="language-js">
// under-construction.js under the directory src/components/utility
import React from "react";
const UnderConstruction = () =&gt; {
return(
&lt;div className="column"&gt;
&lt;p style={{marginTop:"10px"}}&gt;
If you are seeing this, I am probably working on it!
Please give it a few days to get constructed.
&lt;/p&gt;
&lt;/div&gt;
)
};
export default UnderConstruction;</code></pre>
<p>In another component:</p><pre><code class="language-js">import UnderConstruction from './components/utility/under-construction'</code></pre>
<p>Please <a href="https://blog.greenroots.info/javascript-modules-and-how-to-effectively-work-with-export-import-cka7t5z6s01irx9s16st6j51j">read this article</a> to familiarize yourself with JavaScript modules and the import/export keywords.</p>
<h2 id="4-how-to-use-arrow-functions-in-javascript">4. How to Use Arrow Functions in JavaScript</h2>
<p>Just a heads up – you can write React code without JavaScript arrow functions.</p>
<p>That's right. Then, why are we talking about them? An arrow function is useful in many ways:</p>
<ul>
<li>It makes function writing much easier. You mostly type fewer characters when using arrow functions than with standard functions.</li>
</ul><pre><code class="language-js">const double = (num) =&gt; {return num * 2;};</code></pre>
<ul>
<li>Unlike standard functions, an arrow function doesn't redefine the value of <code>this</code> within its definition. This behavior makes it an easy choice for developers to use arrow functions as callbacks. Who wants more bugs because of <code>this</code>?</li>
</ul>
<p>Here is <a href="/news/arrow-function-javascript-tutorial-how-to-declare-a-js-function-with-the-new-es6-syntax/">an excellent article</a> to get you started with the arrow functions and their usages.</p>
<h2 id="5-how-destructuring-works-in-javascript">5. How Destructuring Works in JavaScript</h2>
<p>Destructuring is the JavaScript syntax for extracting values from an object property and assigning them to a variable. Destructuring is also possible for JavaScript Arrays. </p>
<p>Once you learn destructuring well, it will help make things very simple.</p>
<p>You can use destructuring in loops, like this:</p><pre><code class="language-js">for(let { name, age } of users) {
console.log(`${name} is ${age} years old!`);
}</code></pre>
<p>With a function's return value:</p><pre><code class="language-js">const getUser = () =&gt; {
return{
'name': 'Alex',
'address': '15th Park Avenue',
'age': 43
}
}
const { name, age } = getUser();
console.log(name, age); // Alex 43</code></pre>
<p>In a function parameter:</p><pre><code class="language-js">function logDetails({name, age}) {
console.log(`${name} is ${age} year(s) old!`)
}</code></pre>
<p>Here is an example of Array destructuring:</p><pre><code class="language-js">let emojis = ['🔥', '⏲️', '🏆', '🍉'];
let [fire, clock, , watermelon] = emojis;
console.log(fire, clock, watermelon); // 🔥 ⏲️ 🍉
</code></pre>
<p>Of course, we could have done, emojis[0], emojis[1], so on. But, that's too much to write and assign to variables one by one.</p>
<p>In a React app, you will see heavy usage of both object and array destructuring. An experienced React developer who may review your code would expect to see these implementations as well. </p>
<p><a href="/news/javascript-object-destructuring-spread-operator-rest-parameter/">Here is an in-depth article</a> that covers object destructuring. You need to know about Array destructuring as well.</p>
<h2 id="6-how-the-spread-operator-and-rest-parameter-work-in-javascript">6. How the Spread Operator and Rest Parameter Work in JavaScript</h2>
<p>The Spread Syntax (also known as the Spread Operator) is another excellent feature of ES6. As the name indicates, it takes an iterable (like an array) and expands (spreads) it into individual elements.</p>
<p>We can also expand objects using the spread syntax and copy its <code>enumerable</code> properties to a new object.</p>
<p>Spread syntax helps us <code>clone</code> an object and array with the most straightforward syntax using the three dots <code>...</code>, like this:</p><pre><code class="language-js">const clone_some_object = {...some_object}</code></pre>
<p>This is extremely useful in React when you're setting back a state variable with a new instance of an object and array to help re-render the component.</p>
<p>The <code>Rest</code> parameter is kind of opposite to the <code>spread</code> syntax. While spread syntax helps expand or spread elements and properties, the rest parameter helps collect them together.</p>
<p><a href="/news/javascript-object-destructuring-spread-operator-rest-parameter/">Check out the last half of this article</a> to know more about the Spread Operator and Rest parameter.</p>
<h2 id="7-how-to-use-classes-in-javascript">7. How to Use Classes in JavaScript</h2>
<p>ES6's <code>class</code> is another great inclusion that helps you write Object Oriented Programming in JavaScript. </p><pre><code class="language-js">class Employee {
constructor(name) {
this.name = name;
}
greeting() {
return `Hello, ${this.name}`;
}
}
let emp = new Employee("Tapas");
emp.greeting(); // "Hello, Tapas"</code></pre>
<p>We can also create a class by extending it from an existing class. In React, we can create components in two ways:</p>
<ul>
<li>Using Class</li>
<li>Using Function.</li>
</ul>
<p>Here is an example of how we can create a React component using an ES6 class:</p><pre><code class="language-js">class Greeting extends React.Component {
render() {
return &lt;span&gt;Hello World!&lt;/span&gt;;
}
}</code></pre>
<p><a href="https://www.youtube.com/watch?v=2ZphE5HcQPQ">You can watch this video</a> on the freeCodeCamp YouTube channel to learn more about ES6 classes.</p>
<p>Apart from these, knowing about the <code>for-of</code> loop, <code>async-await</code>, <code>ternary operator</code>, and so on would be very helpful.</p>
<h1 id="component-architecture">Component Architecture</h1>
<figcaption>Component Architecture - Many is better than One.</figcaption>
</figure>
<p>Welcome to the second section of the article. Let's talk about <code>Components</code>. If we are talking about React, we have to talk about components.</p>
<p>A single source code file consists of all the functionalities of an app. But it creates some of the problems you want to avoid as a developer. Here are a few I have faced (and there could be many more):</p>
<ul>
<li>More than one developer working on the app may increase collaboration problems like merge conflicts, independently working, and so on.</li>
<li>Code reusability decreases, and repetition increases.</li>
<li>The team ends up working in a single-threaded model, and the end delivery becomes slow.</li>
<li>Testing your app as a Unit is no longer possible. You always touch the entire application as you modify the single file.</li>
<li>Your designer will not like it.</li>
</ul>
<p>When you are working with React, you'll be breaking your app into as many small units as possible, called Components. Each of the components should ideally only do one thing.</p>
<p>So how do we put this into practice? Let's learn how with an example.</p>
<h2 id="how-to-visualize-a-react-app-as-a-bunch-of-components">How to Visualize a React App as a Bunch of Components</h2>
<p>Let's assume we are building a web app using React that lists down each students' results by their grades. Our designer has come up with a mockup, as shown below. What we see is the following:</p>
<ul>
<li>A top navigation with a logo and the app's name.</li>
<li>A clear break up of results by grades.</li>
<li>It shows the result of the top three students of each grade.</li>
<li>There is a <code>view all</code> option to see all the results for a grade.</li>
<li>We can search for the result of any student by searching the student's name.</li>
</ul>
<figcaption>An Imaginary Web application: e-results</figcaption>
</figure>
<p>Now we need to start thinking about Components. This means how to break this app into logical units that take care of a single responsibility. </p>
<p>There's not necessarily just one answer. That's fine, but we need to make sure we do a better job of creating components. </p>
<p>Here is how we can do it:</p>
<ul>
<li>A root component called <code>App</code>.</li>
<li>A <code>Nav</code> component for the top navigation.</li>
<li>A <code>Results</code> component that is the whole page except the <code>Nav</code>.</li>
<li>A <code>Search</code> component.</li>
<li>A <code>Scores</code> component that may include all the scores.</li>
<li>A <code>Score</code> component that contains a heading, score table, and the view all linked.</li>
<li>A <code>ScoreHeading</code> component that contains a heading like, <code>Grade 1</code>.</li>
<li>A <code>ScoreList</code> component that contains the score table.</li>
</ul>
<p>The image below shows them by marking them with different colors.</p>
<figcaption>Thinking in Components</figcaption>
</figure>
<p>Great, we have all the components now. So, we need to start thinking about component composition. What does this mean? </p>
<p>These components are indeed isolated units that are each supposed to do a single thing. However, most of the components in a React application will be tied to each other by data. </p>
<p>We also need to add components to each other so that these units eventually build the entire app.</p>
<p>From the image below, you can understand how these components can be composed.</p>
<ul>
<li>The <code>App</code> component is a root level component that has two other components, <code>Nav</code> and <code>Results</code>.</li>
<li>The <code>Nav</code> component has a logo and a heading.</li>
<li>The <code>Results</code> component has a <code>Search</code> component and a <code>Scores</code> component.</li>
<li>A <code>Scores</code> component can have many <code>Score</code> components.</li>
<li>Each of the <code>Score</code> components has a <code>ScoreHeading</code> and <code>ScoreList</code> component.</li>
</ul>
<p>Does the image below make sense to you?</p>
<figcaption>The Component Tree</figcaption>
</figure>
<p>Here is another way to visualize it:</p>
<figcaption>The Component Hierarchy</figcaption>
</figure>
<p>Each of these components manage and use data using two important concepts, which are <code>props</code>, and <code>state</code>.</p>
<h2 id="props-vs-state-in-react">Props vs State in React</h2>
<p>In React, <code>props</code> and <code>state</code> are the basic ways you can manage data inside and among components.</p>
<ul>
<li><code>Props</code>: are the variables passed by a parent component to its children. Using the props component, we can pass the required data to its children down in the hierarchy.</li>
<li><code>State</code>: On the other side, <code>state</code> is the variable that a component manages within itself. In many cases, a component's state variable can be initialized by the data passed to it using props.</li>
</ul>
<h1 id="the-npm-ecosystem">The NPM Ecosystem</h1>
<figcaption>NPM Ecosystem - Build, Test, and Publish</figcaption>
</figure>
<p>Here we are at the last section of the article. This section will explain why knowing about the NPM ecosystem makes you more comfortable with React.</p>
<h2 id="what-is-npm">What is NPM?</h2>
<p><code>NPM</code>is the package manager for the <code>Node.js</code> platform. It consists of modules that Node can find and it helps Node manage dependency conflicts intelligently. Most commonly, it is used to publish, discover, install, and develop programs.</p>
<p>You can find more information on <code>NPM</code> <a href="https://docs.npmjs.com/cli/npm">here</a>.</p>
<h2 id="why-do-i-need-to-know-about-npm">Why do I need to know about NPM?</h2>
<p>React by itself is a tiny library that lets you create components and build complete web apps. However, you will often need to use something that React may not offer out-of-the-box.</p>
<p>For example, for extensive state management, you may want to use <code>Redux</code>. You may want to opt for an external library that helps with it, and that library is available in the form of an <code>NPM</code> package you can download and install. </p>
<p>Similarly, npm packages exist for various utilities, chart libraries, string externalization, routing – you name it, and there's likely a package for it.</p>
<h2 id="the-open-source-mindset">The <code>Open-Source</code> Mindset</h2>
<p>What if you are unable to find a specific functionality you are looking for as an existing npm module? Yes, it can happen. Also, it may be available as an exiting npm package, but it does not fit your needs as is. What do you do then?</p>
<p>There are two straightforward ways to handle this situation:</p>
<ul>
<li>You build that functionality as a component, test it, and publish it as an open-source npm package.</li>
<li>You contribute to an existing open-source npm package and make it better.</li>
</ul>
<p>It's quite natural to have an open-source mindset as a React developer. Proactively seek out opportunities to either create something new or contribute to something that already exists. It is a great feeling when your work is used and appreciated by someone the same way you use someone else's.</p>
<p>I have created an <a href="https://github.com/atapas/react-package-publisher">open-source project</a> to help to publish npm packages quickly using a script. Please feel free to have a look, fork, and contribute. You may find it useful.</p>
<h1 id="before-we-end-">Before We End...</h1>
<p>I hope you've found this article insightful, and that it helps you start using these concepts more effectively. Let's connect. You will find me active on <a href="https://twitter.com/tapasadhikary">Twitter (@tapasadhikary)</a>. Please feel free to give a follow.</p>
<p>You may also like these articles:</p>
<ul>
<li><a href="/news/learn-something-new-every-day-as-a-software-developer/">How to Learn Something New Every Day as a Software Developer</a></li>
<li><a href="https://blog.greenroots.info/how-to-create-react-form-with-a-single-change-event-handler-ckizqh0yq00x7zks16wd1cxu1">How to create React form with a single change event handler?</a></li>
<li><a href="https://blog.greenroots.info/16-side-project-github-repositories-you-may-find-useful-ckk50hic406quhls1dui2d6sd">16 side project GitHub repositories you may find useful</a></li>
<li><a href="https://blog.greenroots.info/understanding-dynamic-imports-lazy-and-suspense-using-react-hooks-ckdfssktb01czpts12krebs1h">Understanding Dynamic imports, Lazy and Suspense using React Hooks</a></li>
</ul>
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
