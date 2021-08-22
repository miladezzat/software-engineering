---
card: "/images/default.jpg"
tags: [React]
description: JSX is one of the core concepts of React. So if you understan
author: "Milad E. Fahmy"
title: "JSX in React – Explained with Examples"
created: "2021-08-15T19:27:25+02:00"
modified: "2021-08-15T19:27:25+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-jsx ">
<header class="post-full-header">
<h1 class="post-full-title">JSX in React – Explained with Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/01/jsx.jpeg 300w,
/news/content/images/size/w600/2021/01/jsx.jpeg 600w,
/news/content/images/size/w1000/2021/01/jsx.jpeg 1000w,
/news/content/images/size/w2000/2021/01/jsx.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/01/jsx.jpeg" alt="JSX in React – Explained with Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>JSX is one of the core concepts of React. So if you understand it well, you'll be able to write better React code.</p>
<p>In this article, we'll explore:</p>
<ul>
<li>What is JSX in React and how to use it</li>
<li>How JSX is transformed to <code>React.createElement</code></li>
<li>What is a JSX expression and what we can write inside it</li>
<li>Common issues in JSX </li>
</ul>
<p>And much more. So let's get started.</p>
<h2 id="what-is-jsx">What is JSX?</h2>
<blockquote>JSX is a JavaScript Extension Syntax used in React to easily write HTML and JavaScript together.</blockquote>
<p>Take a look at the below code:</p><pre><code class="language-js">const jsx = &lt;h1&gt;This is JSX&lt;/h1&gt;</code></pre>
<p>This is simple JSX code in React. But the browser does not understand this JSX because it's not valid JavaScript code. This is because we're assigning an HTML tag to a variable that is not a string but just HTML code.</p>
<p>So to convert it to browser understandable JavaScript code, we use a tool like <a href="https://babeljs.io/">Babel</a> which is a JavaScript compiler/transpiler.</p>
<p>You can set up your own babel configuration using Webpack as I show in <a href="https://medium.com/javascript-in-plain-english/webpack-and-babel-setup-with-react-from-scratch-bef0fe2ae3e7?source=friends_link&amp;sk=880a6b9a35fb638eef19e5e99276428e">this article</a>. Or you can use <a href="https://github.com/facebook/create-react-app">create-react-app</a> which internally uses Babel for the JSX to JavaScript conversion.</p>
<p>We can use the above JSX in our React code like this:</p><pre><code class="language-js">class JSXDemo extends React.Component {
render() {
return &lt;h1&gt;This is JSX&lt;/h1&gt;;
}
}
ReactDOM.render(&lt;JSXDemo /&gt;, document.getElementById('root'));</code></pre>
<p>Here, we're returning the JSX from the <code>JSXDemo</code> component and rendering that on the screen using the <code>ReactDOM.render</code> method.</p>
<p>Here's a <a href="https://codesandbox.io/s/awesome-framework-7kr3d?file=/src/index.js">Code Sandbox Demo</a>.</p>
<p>When the Babel executes the above JSX, it converts it to the following code:</p><pre><code class="language-js">class JSXDemo extends React.Component {
render() {
return React.createElement("h1", null, "This is JSX");
}
}</code></pre>
<p>Here's a <a href="https://codesandbox.io/s/billowing-dust-b357d?file=/src/index.js">Code Sandbox Demo</a>.</p>
<p>As you can see in the above Code Sandbox, the code still correctly prints the contents to the screen using <code>React.createElement</code>.</p>
<p>This was the old way of writing code in React – but it's tedious to write the <code>React.createElement</code> every time, even for adding a simple div.</p>
<p>So React introduced the JSX way of writing code which makes code easy to write and understand.</p>
<blockquote>Knowing how to convert JSX to <code>React.createElement</code> is very important as a React developer (it's also a popular interview question).</blockquote>
<h2 id="what-is-the-react-createelement-function">What is the React.createElement Function?</h2>
<p>Every JSX is converted to the <code>React.createElement</code> function call that the browser understands.</p>
<p>The <code>React.createElement</code> has the following syntax:</p><pre><code class="language-js">React.createElement(type, [props], [...children])</code></pre>
<p>Let’s look at the parameters of the <code>createElement</code> function.</p>
<ul>
<li><strong><strong>type</strong></strong> can be an HTML tag like h1, div or it can be a React component</li>
<li><strong><strong>props</strong></strong> are the attributes you want the element to have</li>
<li><strong><strong>children</strong></strong> contain other HTML tags or can be a component</li>
</ul>
<p>The <code>React.createElement</code> call will also be converted to the object representation like this:</p><pre><code class="language-js">{
type: 'h1',
props: {
children: 'This is JSX'
}
}
</code></pre>
<p>You can see this object representation if you assign the JSX to some local variable and log it as shown below:</p><pre><code class="language-js">class JSXDemo extends React.Component {
render() {
const jsx = &lt;h1&gt;This is JSX&lt;/h1&gt;;
console.log(jsx);
return jsx;
}
}
ReactDOM.render(&lt;JSXDemo /&gt;, document.getElementById('root'));</code></pre>
<p>Here's a <a href="https://codesandbox.io/s/epic-spence-jcp5t?file=/src/index.js">Code Sandbox Demo</a>.</p>
<p>You will see the log printed as shown below:</p>
<p>Now, take a look at the below code:</p><pre><code class="language-js">class JSXDemo extends React.Component {
render() {
const jsx = &lt;h1 id="jsx"&gt;This is JSX&lt;/h1&gt;;
console.log(jsx);
return jsx;
}
}
ReactDOM.render(&lt;JSXDemo /&gt;, document.getElementById("root"));
</code></pre>
<p>Here, we've used the JSX like this:</p><pre><code class="language-js">&lt;h1 id="jsx"&gt;This is JSX&lt;/h1&gt;</code></pre>
<p>So React, will convert this JSX to the below code:</p><pre><code class="language-js">React.createElement("h1", { id: "jsx" }, "This is JSX");</code></pre>
<p>If there are any attributes added to the HTML tag as in our case, they will be passed as the second parameter for the <code>React.createElement</code> call. The object representation will look like this:</p><pre><code class="language-js">{
type: 'h1',
props: {
id: 'jsx',
children: 'This is JSX'
}
}</code></pre>
<p>Here's a <a href="https://codesandbox.io/s/infallible-lake-rz7vj?file=/src/index.js">Code Sandbox Demo</a>.</p>
<p>You will see the log printed as shown below:</p>
<p>Now, let's add some complexity to the JSX to see how it's converted to the <code>React.createElement</code> call.</p><pre><code class="language-js">class JSXDemo extends React.Component {
handleOnClick = () =&gt; {
console.log("clicked");
};
render() {
return (
&lt;button id="btn" onClick={this.handleOnClick}&gt;
Click Here
&lt;/button&gt;
);
}
}
ReactDOM.render(&lt;JSXDemo /&gt;, document.getElementById("root"));</code></pre>
<p>Here, we've added an <code>onClick</code> handler to the button.</p>
<p>For the above code, the <code>React.createElement</code> call will look like this:</p><pre><code class="language-js">React.createElement("button", {
id: "btn",
onClick: function() {}
}, "Click Here")</code></pre>
<p>Here's a <a href="https://codesandbox.io/s/new-dew-sc2rp?file=/src/index.js">Code Sandbox Demo</a>.</p>
<p>The object representation will look like this:</p>
<p>So from all the above examples, it's clear that JSX is converted to a <code>React.createElement</code> call and it's then converted to its object representation.</p>
<p>If you want to see the JSX to <code>React.createElement</code> conversion code, you can navigate to <a href="https://babel-repl-clone.now.sh/">this application</a> which I created in <a href="https://levelup.gitconnected.com/create-a-clone-of-babel-repl-site-to-convert-es6-react-code-to-es5-93cdc9ad98ea?source=friends_link&amp;sk=517cfac3dfc4b451610eb298f36a428c">this article</a>. There you can write JSX code on left and see the converted code on the right side as shown below:</p>
<h2 id="how-to-return-complex-jsx">How to Return Complex JSX</h2>
<p>Take a look at the below code:</p><pre><code class="language-js">import React from "react";
import ReactDOM from "react-dom";
const App = () =&gt; {
return (
&lt;p&gt;This is first JSX Element!&lt;/p&gt;
&lt;p&gt;This is another JSX Element&lt;/p&gt;
);
};
const rootElement = document.getElementById("root");
ReactDOM.render(&lt;App /&gt;, rootElement);
</code></pre>
<p>Here's a <a href="https://codesandbox.io/s/objective-thunder-3hqqz?file=/src/index.js">Code Sandbox demo</a>.</p>
<p>Here, we're returning two paragraphs from the App component. But if you run the code, you will get this error:</p>
<p>We're getting an error because React requires adjacent elements to be wrapped in a parent tag.</p>
<p>As we have seen, <code>&lt;p&gt;This is first JSX Element!&lt;/p&gt;</code> will be converted to <code>React.createElement("p", null, "This is first JSX Element!")</code> and <code>&lt;p&gt;This is another JSX Element&lt;/p&gt;</code> will be converted to <code>React.createElement("p", null, "This is another JSX Element")</code>.</p>
<p>The converted code will look like this now:</p><pre><code class="language-js">import React from "react";
import ReactDOM from "react-dom";
const App = () =&gt; {
return (
React.createElement("p", null, "This is first JSX Element!"); React.createElement("p", null, "This is another JSX Element");
);
};
const rootElement = document.getElementById("root");
ReactDOM.render(&lt;App /&gt;, rootElement);</code></pre>
<p>Here we are returning two things from the <code>App</code> component which will not work because there is no parent element to wrap both of them.</p>
<p>To make it work, the obvious solution is to wrap both of them in some parent element, most probably a <code>div</code> like this:</p><pre><code class="language-js">import React from "react";
import ReactDOM from "react-dom";
const App = () =&gt; {
return (
&lt;div&gt;
&lt;p&gt;This is first JSX Element!&lt;/p&gt;
&lt;p&gt;This is another JSX Element&lt;/p&gt;
&lt;/div&gt;
);
};
const rootElement = document.getElementById("root");
ReactDOM.render(&lt;App /&gt;, rootElement);
</code></pre>
<p>Here's a <a href="https://codesandbox.io/s/stoic-khorana-vnrt6?file=/src/index.js">Code Sandbox Demo</a>.</p>
<p>But there are also other ways of making it work.</p>
<p>First, you can try returning it as an array as shown below:</p><pre><code class="language-js">import React from "react";
import ReactDOM from "react-dom";
const App = () =&gt; {
return (
[&lt;p&gt;This is first JSX Element!&lt;/p&gt;,&lt;p&gt;This is another JSX Element&lt;/p&gt;]
);
};
const rootElement = document.getElementById("root");
ReactDOM.render(&lt;App /&gt;, rootElement);
</code></pre>
<p>Here's a <a href="https://codesandbox.io/s/crazy-banach-wy756?file=/src/index.js">Code Sandbox Demo</a>.</p>
<p>This will get the job done, but as you can see in the browser console, you will get a warning saying <code>Warning: Each child in a list should have a unique "key" prop.</code></p>
<blockquote>Because in React, every element in the array (when displayed using JSX) needs to have a unique key added to it.</blockquote>
<p>We can fix it by adding a unique key for the adjacent elements:</p><pre><code class="language-js">import React from "react";
import ReactDOM from "react-dom";
const App = () =&gt; {
return (
[&lt;p key="first"&gt;This is first JSX Element!&lt;/p&gt;,&lt;p key="second"&gt;This is another JSX Element&lt;/p&gt;]
);
};
const rootElement = document.getElementById("root");
ReactDOM.render(&lt;App /&gt;, rootElement);
</code></pre>
<p>Here's a <a href="https://codesandbox.io/s/relaxed-resonance-ljzzf?file=/src/index.js">Code Sandbox Demo</a>.</p>
<p>The other way to fix it is by using the <code>React.Fragment</code> component:</p><pre><code class="language-js">import React from "react";
import ReactDOM from "react-dom";
const App = () =&gt; {
return (
&lt;React.Fragment&gt;
&lt;p&gt;This is first JSX Element!&lt;/p&gt;
&lt;p&gt;This is another JSX Element&lt;/p&gt;
&lt;/React.Fragment&gt;
);
};
const rootElement = document.getElementById("root");
ReactDOM.render(&lt;App /&gt;, rootElement);
</code></pre>
<p>Here's a <a href="https://codesandbox.io/s/fervent-morse-gsvk8?file=/src/index.js">Code Sandbox Demo</a>.</p>
<p><code>React.Fragment</code> was added in React version 16.2 because we always have to wrap multiple adjacent elements in some tag (like div) inside every JSX returned by a component. But that adds unnecessary div tags.</p>
<p>This is fine most of the time but there are certain cases where it's not fine.</p>
<p>For example, if we're using Flexbox, then there is a special parent-child relationship in Flexbox's structure. And adding divs in the middle makes it hard to keep the desired layout.</p>
<p>So using <code>React.Fragment</code> fixes this issue.</p>
<blockquote><em>Fragments</em> let you group a list of children without adding extra nodes to the DOM.</blockquote>
<h2 id="how-to-add-comments-to-jsx-code">How to Add Comments to JSX Code</h2>
<p>If you have a line of code like this:</p><pre><code class="language-js">&lt;p&gt;This is some text&lt;/p&gt;</code></pre>
<p>and you want to add a comment for that code, then you have to wrap that code in JSX expresssion syntax inside the <code>/*</code> and <code>*/</code> comment symbols like this:</p><pre><code class="language-js">{/* &lt;p&gt;This is some text&lt;/p&gt; */}</code></pre>
<p><em>Tip:</em> Instead of manually typing the comment, you can use <code>Cmd + /</code> (Mac) or <code>Ctrl + /</code> shortcut keys to add or remove the comment.</p>
<h2 id="how-to-add-javascript-code-in-jsx">How to Add JavaScript Code in JSX</h2>
<p>Up to this point, we have only used HTML tags as a part of JSX. But JSX becomes more useful when we actually add JavaScript code inside it.</p>
<p>To add JavaScript code inside JSX, we need to write it in curly brackets like this:</p><pre><code class="language-js">const App = () =&gt; {
const number = 10;
return (
&lt;div&gt;
&lt;p&gt;Number: {number}&lt;/p&gt;
&lt;/div&gt;
);
};</code></pre>
<p>Here's a <a href="https://codesandbox.io/s/keen-leftpad-jygwo?file=/src/index.js">Code Sandbox Demo</a>.</p>
<blockquote>Inside the curly brackets we can only write an expression that evaluates to some value.</blockquote>
<p>So, often this syntax of using curly brackets is known as JSX Expression Syntax.</p>
<p>Following are the valid things you can have in a JSX Expression:</p>
<ul>
<li>A string like "hello" </li>
<li>A number like 10</li>
<li>An array like [1, 2, 4, 5]</li>
<li>An object property that will evaluate to some value</li>
<li>A function call that returns some value which may be JSX</li>
<li>A map method that always returns a new array</li>
<li>JSX itself</li>
</ul>
<p>Following are the invalid things and cannot be used in a JSX Expression:</p>
<ul>
<li>A for loop or while loop or any other loop</li>
<li>A variable declaration</li>
<li>A function declaration</li>
<li>An if condition</li>
<li>An object</li>
</ul>
<p>We can write arrays in JSX Expressions because <code>&lt;p&gt;{[1, 2, 3, 4]}&lt;/p&gt;</code> is finally converted to <code>&lt;p&gt;{1}{2}{3}{4}&lt;/p&gt;</code> when rendering (which can be rendered without any issue).</p>
<p>In the case of an object, it’s not clear how the object should be displayed. For example, should it be comma-separated key-value pairs or should it be displayed as JSON? So you will get an error if you try to display the object in a JSX expression. But we can use object properties instead.</p>
<blockquote>Also note that undefined, null, and boolean are not displayed on the UI when used inside JSX.</blockquote>
<p>So if you have a boolean value and you want to display it on the UI you need to wrap it in ES6 template literal syntax like this:</p><pre><code class="language-js">const App = () =&gt; {
const isAdmin = true;
return (
&lt;div&gt;
&lt;p&gt;isAdmin is {`${isAdmin}`} &lt;/p&gt;
&lt;/div&gt;
);
};</code></pre>
<p>Here's a <a href="https://codesandbox.io/s/ecstatic-shamir-7b5z6?file=/src/index.js">Code Sandbox Demo</a>.</p>
<h3 id="conditional-operators-in-jsx-expressions">Conditional Operators in JSX Expressions</h3>
<p>We can’t write <em>if conditions</em> in JSX expressions, which you might think of as an issue. But React allows us to write conditional operators, like ternary operators as well as the logical short circuit &amp;&amp; operator like this:</p><pre><code class="language-js">&lt;p&gt;{a &gt; b ? "Greater" : "Smaller"}&lt;/p&gt;
&lt;p&gt;{shouldShow &amp;&amp; "Shown"}&lt;/p&gt;</code></pre>
<p>Here's a <a href="https://codesandbox.io/s/condescending-wind-4rwtl">Code Sandbox Demo</a> describing various ways of writing JSX expressions.</p>
<h2 id="how-to-nest-jsx-expressions">How to Nest JSX Expressions</h2>
<p>You can even do nesting of JSX expressions like this:</p><pre><code class="language-js">const App = () =&gt; {
const number = 10;
return (
&lt;div&gt;
{number &gt; 0 ? (
&lt;p&gt;Number {number} is positive&lt;/p&gt;
) : (
&lt;p&gt;Number {number} is Negative&lt;/p&gt;
)}
&lt;/div&gt;
);
};</code></pre>
<p>Here's a <a href="https://codesandbox.io/s/frosty-dew-mj351?file=/src/index.js">Code Sandbox Demo</a>.</p>
<h2 id="how-to-add-a-class-in-jsx">How to Add a Class in JSX</h2>
<p>We can add attributes to the JSX elements, for example <code>id</code> and <code>class</code>, the same as in HTML.</p><pre><code class="language-js">import React from "react";
import ReactDOM from "react-dom";
const App = () =&gt; {
const id = "some-id";
return (
&lt;div&gt;
&lt;h1 id={id}&gt;This is a heading&lt;/h1&gt;
&lt;h2 className="active"&gt;This is another heading&lt;/h2&gt;
&lt;/div&gt;
);
};
const rootElement = document.getElementById("root");
ReactDOM.render(&lt;App /&gt;, rootElement);
</code></pre>
<p>Here's a <a href="https://codesandbox.io/s/great-chandrasekhar-i48t2">Code Sandbox Demo</a>.</p>
<p>Note that in React, we need to use <code>className</code> instead of <code>class</code>.</p>
<p>This is because if you use <code>class</code> instead of <code>className</code>, you will get a warning in the console as shown below:</p>
<p>Here's a <a href="https://codesandbox.io/s/happy-smoke-ecbtl?file=/src/index.js">Code Sandbox Demo</a>.</p>
<p>To understand why the warning is being shown, print the object representation of it and you will see the following:</p>
<p>Here's a <a href="https://codesandbox.io/s/epic-frost-e64ll?file=/src/index.js">Code Sandbox Demo</a>.</p>
<p>As you can see, the props object has the <code>class</code> property with a value <code>active</code>. But in JavaScript, <code>class</code> is a reserved keyword so accessing <code>props.class</code> will result in an error.</p>
<p>This is why React decided to use <code>className</code> instead of <code>class</code>.</p>
<p>This use of <code>className</code> instead of <code>class</code> is a frequently asked question in React interviews.</p>
<blockquote>Note that in React, all the attribute names are written in camelCase.</blockquote>
<p>You can find all the changed and unchanged attributes list <a href="https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes">here</a>.</p>
<h2 id="conclusion">Conclusion</h2>
<p>In this article, we have seen how to use JSX in React. Here are some major takeaways:</p>
<ul>
<li>Every JSX tag is converted to <code>React.createElement</code> call and its object representation.</li>
<li>JSX Expressions, which are written inside curly brackets, allow only things that evaluate to some value like string, number, array map method and so on.</li>
<li>In React, we have to use <code>className</code> instead of <code>class</code> for adding classes to the HTML element </li>
<li>All attribute names in React are written in camelCase.</li>
<li><code>undefined</code>, <code>null</code>, and <code>boolean</code> are not displayed on the UI when used inside JSX.</li>
</ul>
<h3 id="thanks-for-reading-">Thanks for reading!</h3>
<p>Check out my free <a href="https://yogeshchavan.podia.com/react-router-introduction">Introduction to React Router</a> course.</p>
<p>Also, check out my <a href="https://modernjavascript.yogeshchavan.dev/">Mastering Modern JavaScript</a> book to learn all the latest ES6+ features in detail to become better at JavaScript and React.</p>
<p><strong><strong><strong><strong>Subscribe to my <a href="https://yogeshchavan.dev/">weekly newsletter</a> to join 1000+ other subscribers to get amazing tips, tricks, articles and discount deals directly in your inbox.</strong></strong></strong></strong></p>
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
