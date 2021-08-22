---
card: "/images/default.jpg"
tags: [React]
description: Many features were added to JavaScript in ES6. And these chan
author: "Milad E. Fahmy"
title: "How to Write Better React Components"
created: "2021-08-15T19:27:30+02:00"
modified: "2021-08-15T19:27:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Write Better React Components</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/01/modern_way-1.jpeg 300w,
/news/content/images/size/w600/2021/01/modern_way-1.jpeg 600w,
/news/content/images/size/w1000/2021/01/modern_way-1.jpeg 1000w,
/news/content/images/size/w2000/2021/01/modern_way-1.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/01/modern_way-1.jpeg" alt="How to Write Better React Components">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Many features were added to JavaScript in ES6. And these changes help developers write code that is short and easy to understand and maintain.</p>
<p>When you use <a href="https://github.com/facebook/create-react-app">create-react-app</a> to create a React App, you already have support for these changes. This is because it uses Babel.js to convert the ES6+ code to ES5 code which all browsers understand.</p>
<p>In this article, we'll explore various ways we can write shorter, simpler and easier to understand React code. So let's get started.</p>
<p>Take a look at the below Code Sandbox demo:</p>
<p>Here, we have two input text boxes that take input from users, and two buttons that calculate the addition and subtraction of the numbers provided as input.</p>
<h2 id="avoid-manually-binding-event-handlers">Avoid manually binding event handlers</h2>
<p>As you know in React, when we attach any <code>onClick</code> or <code>onChange</code> or any other event handler like this:</p><pre><code class="language-js">&lt;input
...
onChange={this.onFirstInputChange}
/&gt;
</code></pre>
<p>then, the handler function (onFirstInputChange) does not retain the binding of <code>this</code>.</p>
<p>This is not an issue with React, but that's how JavaScript event handlers work.</p>
<p>So we have to use the <code>.bind</code> method to correctly bind <code>this</code> like this:</p><pre><code class="language-js">constructor(props) {
// some code
this.onFirstInputChange = this.onFirstInputChange.bind(this);
this.onSecondInputChange = this.onSecondInputChange.bind(this);
this.handleAdd = this.handleAdd.bind(this);
this.handleSubtract = this.handleSubtract.bind(this);
}
</code></pre>
<p>The above lines of code will maintain <code>this</code>'s binding of the class correctly inside the handler functions.</p>
<p>But adding a new binding code for every new event handler is tedious. Luckily we can fix it using the class properties syntax.</p>
<p>Using class properties allows us to define properties directly inside the class.</p>
<p>Create-react-app internally uses the <code>@babel/babel-plugin-transform-class-properties</code> plugin for Babel version &gt;= 7 and <code>babel/plugin-proposal-class-properties</code> plugin for Babel version &lt;7 &nbsp;so you don't have to manually configure it.</p>
<p>To use it, we need to convert the event handler functions to arrow function syntax.</p><pre><code class="language-js">onFirstInputChange(event) {
const value = event.target.value;
this.setState({
number1: value
});
}
</code></pre>
<p>The above code can be written as follows:</p><pre><code class="language-js">onFirstInputChange = (event) =&gt; {
const value = event.target.value;
this.setState({
number1: value
});
}
</code></pre>
<p>In a similar way, we can convert the other three functions:</p><pre><code class="language-js">onSecondInputChange = (event) =&gt; {
// your code
}
handleAdd = (event) =&gt; {
// your code
}
handleSubtract = (event) =&gt; {
// your code
}
</code></pre>
<p>Also, there is no need to bind the event handlers in the constructor. So we can remove that code. Now the constructor will look like this:</p><pre><code class="language-js">constructor(props) {
super(props);
this.state = {
number1: "",
number2: "",
result: "",
errorMsg: ""
};
}
</code></pre>
<p>We can simplify it even further. The class properties syntax allows us to declare any variable directly inside the class so we can completely remove the constructor and declare the state as a part of the class, as shown below:</p><pre><code class="language-js">export default class App extends React.Component {
state = {
number1: "",
number2: "",
result: "",
errorMsg: ""
};
render() { }
}
</code></pre>
<p>Here's a Code Sandbox demo: <a href="https://codesandbox.io/s/trusting-dust-ukvx2">https://codesandbox.io/s/trusting-dust-ukvx2</a></p>
<p>If you check out the above Code Sandbox demo, you will see that the functionality is still working as before.</p>
<p>But using class properties makes the code much simpler and easy to understand.</p>
<p>Nowadays, you will find React code written like this.</p>
<h2 id="use-a-single-event-handler-method">Use a single event handler method</h2>
<p>If you inspect the above code, you will see that for each input field we have a separate event handler function, <code>onFirstInputChange</code> and <code>onSecondInputChange</code>.</p>
<p>If the number of input fields increases, the number of event handler functions also increases, which is not good. </p>
<p>For example, if you're creating a registration page, then there will be many input fields. So creating a separate handler function for each input field is not feasible.</p>
<p>Let's change that.</p>
<p>To create a single event handler that will handle all input fields, we need to give a unique name to each input field that matches exactly with the corresponding state variable names.</p>
<p>We already have this setup. The names <code>number1</code> and <code>number2</code> which we've given to the input fields are also defined in the state. So let's change the handler method of both of the input fields to <code>onInputChange</code> like this:</p><pre><code class="language-js">&lt;input
type="text"
name="number1"
placeholder="Enter a number"
onChange={this.onInputChange}
/&gt;
&lt;input
type="text"
name="number2"
placeholder="Enter a number"
onChange={this.onInputChange}
/&gt;
</code></pre>
<p>and add a new <code>onInputChange</code> event handler like this:</p><pre><code class="language-js">onInputChange = (event) =&gt; {
const name = event.target.name;
const value = event.target.value;
this.setState({
[name]: value
});
};
</code></pre>
<p>Here, while setting the state, we're setting the dynamic state name with the dynamic value. So when we're changing the <code>number1</code> input field value, <code>event.target.name</code> will be <code>number1</code> and <code>event.target.value</code> will be the user-entered value.</p>
<p>And when we're changing the <code>number2</code> input field value, <code>event.target.name</code> will be <code>number2</code> and <code>event.taget.value</code> will be the user-entered value.</p>
<p>So here we're using the ES6 dynamic key syntax to update the corresponding value of the state.</p>
<p>Now you can delete the <code>onFirstInputChange</code> and <code>onSecondInputChange</code> event handler methods. We no longer need them.</p>
<p>Here's a Code Sandbox demo: <a href="https://codesandbox.io/s/withered-feather-8gsyc">https://codesandbox.io/s/withered-feather-8gsyc</a></p>
<h2 id="use-a-single-calculation-method">Use a single calculation method</h2>
<p>Now, let's refactor the <code>handleAdd</code> and <code>handleSubtract</code> methods.</p>
<p>We're using two separate methods that have almost the same code which creates code duplication. We can fix this by creating a single method and passing a parameter to the function identifying the addition or subtraction operation.</p><pre><code class="language-js">// change the below code:
&lt;button type="button" className="btn" onClick={this.handleAdd}&gt;
Add
&lt;/button&gt;
&lt;button type="button" className="btn" onClick={this.handleSubtract}&gt;
Subtract
&lt;/button&gt;
// to this code:
&lt;button type="button" className="btn" onClick={() =&gt; this.handleOperation('add')}&gt;
Add
&lt;/button&gt;
&lt;button type="button" className="btn" onClick={() =&gt; this.handleOperation('subtract')}&gt;
Subtract
&lt;/button&gt;
</code></pre>
<p>Here, we've added a new inline method for the <code>onClick</code> handler where we're manually calling a new <code>handleOperation</code> method by passing the operation name.</p>
<p>Now, add a new <code>handleOperation</code> method like this:</p><pre><code class="language-js">handleOperation = (operation) =&gt; {
const number1 = parseInt(this.state.number1, 10);
const number2 = parseInt(this.state.number2, 10);
let result;
if (operation === "add") {
result = number1 + number2;
} else if (operation === "subtract") {
result = number1 - number2;
}
if (isNaN(result)) {
this.setState({
errorMsg: "Please enter valid numbers."
});
} else {
this.setState({
errorMsg: "",
result: result
});
}
};
</code></pre>
<p>and remove the previously added <code>handleAdd</code> and <code>handleSubtract</code> methods.</p>
<p>Here's a Code Sandbox demo: <a href="https://codesandbox.io/s/hardcore-brattain-zv09d">https://codesandbox.io/s/hardcore-brattain-zv09d</a></p>
<h2 id="use-es6-destructuring-syntax">Use ES6 destructuring syntax</h2>
<p>Inside the <code>onInputChange</code> method, we have code like this:</p><pre><code class="language-js">const name = event.target.name;
const value = event.target.value;
</code></pre>
<p>We can use ES6 destructuring syntax to simplify it like this:</p><pre><code class="language-js">const { name, value } = event.target;
</code></pre>
<p>Here, we're extracting the <code>name</code> and <code>value</code> properties from the <code>event.target</code> object and creating local <code>name</code> and <code>value</code> variables to store those values.</p>
<p>Now, inside the <code>handleOperation</code> method, instead of referring to state every time we use &nbsp;<code>this.state.number1</code> and <code>this.state.number2</code>, we can separate out those variables beforehand.</p><pre><code class="language-js">// change the below code:
const number1 = parseInt(this.state.number1, 10);
const number2 = parseInt(this.state.number2, 10);
// to this code:
let { number1, number2 } = this.state;
number1 = parseInt(number1, 10);
number2 = parseInt(number2, 10);
</code></pre>
<p>Here's a Code Sandbox demo: <a href="https://codesandbox.io/s/exciting-austin-ldncl">https://codesandbox.io/s/exciting-austin-ldncl</a></p>
<h2 id="use-enhanced-object-literal-syntax">Use enhanced object literal syntax</h2>
<p>If you check the <code>setState</code> function call inside the <code>handleOperation</code> function, it looks like this:</p><pre><code class="language-js">this.setState({
errorMsg: "",
result: result
});
</code></pre>
<p>We can use the enhanced object literal syntax to simplify this code.</p>
<p>If the property name exactly matches with the variable name like <code>result: result</code> then we can skip mentioning the part after the colon. So the above <code>setState</code> function call can be simplified like this:</p><pre><code class="language-js">this.setState({
errorMsg: "",
result
});
</code></pre>
<p>Here's a Code Sandbox demo: <a href="https://codesandbox.io/s/affectionate-johnson-j50ks">https://codesandbox.io/s/affectionate-johnson-j50ks</a></p>
<h2 id="convert-class-components-to-react-hooks">Convert class components to React Hooks</h2>
<p>Starting with React version 16.8.0, React has added a way to use state and lifecycle methods inside the functional components using React Hooks.</p>
<p>Using React Hooks allows us to write a code that is a lot shorter and easy to maintain and understand. So let's convert the above code to use React Hooks syntax.</p>
<p>If you're new to React Hooks, check out my <a href="https://levelup.gitconnected.com/an-introduction-to-react-hooks-50281fd961fe?source=friends_link&amp;sk=89baff89ec8bc637e7c13b7554904e54">introduction to react hooks</a> article.</p>
<p>Let's first declare an App component as a functional component:</p><pre><code class="language-js">const App = () =&gt; {
};
export default App;
</code></pre>
<p>To declare the state we need to use the <code>useState</code> hook, so import it at the top of the file. Then create 3 <code>useState</code> calls, one for storing the numbers together as an object. We can update them together using a single handler function and two other <code>useState</code> calls for storing the result and error message.</p><pre><code class="language-js">import React, { useState } from "react";
const App = () =&gt; {
const [state, setState] = useState({
number1: "",
number2: ""
});
const [result, setResult] = useState("");
const [errorMsg, setErrorMsg] = useState("");
};
export default App;
</code></pre>
<p>Change the <code>onInputChange</code> handler method to this:</p><pre><code class="language-js">const onInputChange = () =&gt; {
const { name, value } = event.target;
setState((prevState) =&gt; {
return {
...prevState,
[name]: value
};
});
};
</code></pre>
<p>Here, we're using the updater syntax for setting the state because, when working with React Hooks, the state is not merged automatically when updating an object.</p>
<p>So we're first spreading out all the properties of the state and then adding the new state value.</p>
<p>Change the <code>handleOperation</code> method to this:</p><pre><code class="language-js">const handleOperation = (operation) =&gt; {
let { number1, number2 } = state;
number1 = parseInt(number1, 10);
number2 = parseInt(number2, 10);
let result;
if (operation === "add") {
result = number1 + number2;
} else if (operation === "subtract") {
result = number1 - number2;
}
if (isNaN(result)) {
setErrorMsg("Please enter valid numbers.");
} else {
setErrorMsg("");
setResult(result);
}
};
</code></pre>
<p>Now, return the same JSX returned from the render method of the class component but remove all the references of <code>this</code> and <code>this.state</code> from the JSX.</p>
<p>Here's a Code Sandbox demo: <a href="https://codesandbox.io/s/musing-breeze-ec7px?file=/src/App.js">https://codesandbox.io/s/musing-breeze-ec7px?file=/src/App.js</a></p>
<h2 id="implicitly-return-objects">Implicitly return objects</h2>
<p>Now, we have optimized our code to use modern ES6 features and avoided code duplications. There is one more thing we can do is to simplify the <code>setState</code> function call.</p>
<p>If you check the current <code>setState</code> function call inside the <code>onInputChange</code> handler, it looks like this:</p><pre><code class="language-js">setState((prevState) =&gt; {
return {
...prevState,
[name]: value
};
});
</code></pre>
<p>In an arrow function, if we have code like this:</p><pre><code class="language-js">const add = (a, b) =&gt; {
return a + b;
}
</code></pre>
<p>Then we can simplify it as shown below:</p><pre><code class="language-js">const add = (a, b) =&gt; a + b;
</code></pre>
<p>This works because If there is a single statement in the arrow function body, then we can skip the curly brackets and the return keyword. This is known as an implicit return.</p>
<p>So if we're returning an object from arrow function like this:</p><pre><code class="language-js">const getUser = () =&gt; {
return {
name: 'David,
age: 35
}
}
</code></pre>
<p>Then we <strong>can't</strong> simplify it like this:</p><pre><code class="language-js">const getUser = () =&gt; {
name: 'David,
age: 35
}
</code></pre>
<p>This is because opening curly brackets indicates the beginning of the function, so the above code is invalid. To make it work we can wrap the object in round brackets like this:</p><pre><code class="language-js">const getUser = () =&gt; ({
name: 'David,
age: 35
})
</code></pre>
<p>The above code is the same as the below code:</p><pre><code class="language-js">const getUser = () =&gt; {
return {
name: 'David,
age: 35
}
}
</code></pre>
<p>So we can use the same technique to simplify our <code>setState</code> function call.</p><pre><code class="language-js">setState((prevState) =&gt; {
return {
...prevState,
[name]: value
};
});
// the above code can be simplified as:
setState((prevState) =&gt; ({
...prevState,
[name]: value
}));
</code></pre>
<p>Here's a Code Sandbox demo: <a href="https://codesandbox.io/s/sharp-dream-l90gf?file=/src/App.js">https://codesandbox.io/s/sharp-dream-l90gf?file=/src/App.js</a></p>
<p>This technique of wrapping code in round brackets is used a lot in React:</p>
<ul>
<li>To define a functional component:</li>
</ul><pre><code class="language-js">const User = () =&gt; (
&lt;div&gt;
&lt;h1&gt;Welcome, User&lt;/h1&gt;
&lt;p&gt;You're logged in successfully.&lt;/p&gt;
&lt;/div&gt;
);
</code></pre>
<ul>
<li>Inside mapStateToProps function in react-redux:</li>
</ul><pre><code class="language-js">const mapStateToProps = (state, props) =&gt; ({
users: state.users,
details: state.details
});
</code></pre>
<ul>
<li>Redux action creator functions:</li>
</ul><pre><code class="language-js">const addUser = (user) =&gt; ({
type: 'ADD_USER',
user
});
</code></pre>
<p>and many other places.</p>
<h2 id="an-extra-tip-to-help-you-write-better-react-components">An Extra Tip to Help You Write Better React Components</h2>
<p>If we have a component like this:</p><pre><code class="language-js">const User = (props) =&gt; (
&lt;div&gt;
&lt;h1&gt;Welcome, User&lt;/h1&gt;
&lt;p&gt;You're logged in successfully.&lt;/p&gt;
&lt;/div&gt;
);
</code></pre>
<p>and later want to log the props to the console just for testing or debugging, then instead of converting the code to the below code:</p><pre><code class="language-js">const User = (props) =&gt; {
console.log(props);
return (
&lt;div&gt;
&lt;h1&gt;Welcome, User&lt;/h1&gt;
&lt;p&gt;You're logged in successfully.&lt;/p&gt;
&lt;/div&gt;
);
}
</code></pre>
<p>you can use the logical OR operator (<code>||</code>) like this:</p><pre><code class="language-js">const User = (props) =&gt; console.log(props) || (
&lt;div&gt;
&lt;h1&gt;Welcome, User&lt;/h1&gt;
&lt;p&gt;You're logged in successfully.&lt;/p&gt;
&lt;/div&gt;
);
</code></pre>
<p>How does it work?</p>
<p>The <code>console.log</code> function just prints the value passed to it, but it does not return anything – so it will be evaluated as undefined <code>||</code> (...).</p>
<p>And because the <code>||</code> operator returns the first truthy value, the code after <code>||</code> will also be executed.</p>
<h3 id="thanks-for-reading-">Thanks for reading!</h3>
<p>You can learn all about ES6+ features in detail in my <a href="https://modernjavascript.yogeshchavan.dev/">Mastering Modern JavaScript</a> book.</p>
<p>Also you can check out my free <a href="https://yogeshchavan.podia.com/react-router-introduction">Introduction to React Router</a> course.</p>
<p><strong><strong>Subscribe to my <a href="https://yogeshchavan.dev/">weekly newsletter</a> to join 1000+ other subscribers to get amazing tips, tricks, articles and discount deals directly in your inbox.</strong></strong></p>
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
