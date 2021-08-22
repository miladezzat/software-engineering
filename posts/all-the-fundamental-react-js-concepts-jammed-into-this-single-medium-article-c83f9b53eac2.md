---
card: "https://cdn-media-1.freecodecamp.org/images/1*qUlxDdY3T-rDtJ4LhLGkEg.png"
tags: [JavaScript]
description: "This article is not going to cover what React is or why you s"
author: "Milad E. Fahmy"
title: "All the fundamental React.js concepts, jammed into this one article"
created: "2021-08-16T11:49:55+02:00"
modified: "2021-08-16T11:49:55+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-web-development tag-programming tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">All the fundamental React.js concepts, jammed into this one article</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*qUlxDdY3T-rDtJ4LhLGkEg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*qUlxDdY3T-rDtJ4LhLGkEg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*qUlxDdY3T-rDtJ4LhLGkEg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*qUlxDdY3T-rDtJ4LhLGkEg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*qUlxDdY3T-rDtJ4LhLGkEg.png" alt="All the fundamental React.js concepts, jammed into this one article">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<blockquote><strong>Update:</strong> This article is now part of my book “React.js Beyond The Basics”.</blockquote><blockquote>Read the updated version of this content and more about React at <a href="https://jscomplete.com/g/react-fundamentals" rel="noopener"><strong><em>jscomplete.com/react-beyond-basics</em></strong></a><em>.</em></blockquote><p>This article is not going to cover what React is or <a href="https://medium.freecodecamp.org/yes-react-is-taking-over-front-end-development-the-question-is-why-40837af8ab76" rel="noopener">why you should learn it</a>. Instead, this is a practical introduction to the fundamentals of React.js for those who are already familiar with JavaScript and know the basics of the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model" rel="noopener">DOM API</a>.</p><p>All code examples below are labeled for reference. They are purely intended to provide examples of concepts. Most of them can be written in a much better way.</p><h3 id="fundamental-1-react-is-all-about-components">Fundamental #1: React is all about components</h3><p>React is designed around the concept of reusable components. You define small components and you put them together to form bigger components.</p><p>All components small or big are reusable, even across different projects.</p><p>A React component — in its simplest form — is a plain-old JavaScript function:</p><pre><code class="language-js">// Example 1
// https://jscomplete.com/repl?j=Sy3QAdKHW
function Button (props) {
// Returns a DOM element here. For example:
return &lt;button type="submit"&gt;{props.label}&lt;/button&gt;;
}
// To render the Button component to the browser
ReactDOM.render(&lt;Button label="Save" /&gt;, mountNode)</code></pre><p>The curly braces used for the button label are explained below. Don’t worry about them now. <code>ReactDOM</code> will also be explained later, but if you want to test this example and all upcoming code examples, the above <code>render</code> function is what you need.</p><p>The second argument to <code>ReactDOM.render</code> is the destination DOM element which React is going to take over and control. In the <a href="https://jscomplete.com/react/" rel="noopener">jsComplete React Playground</a>, you can just use the special variable <code>mountNode</code>.</p><p><a href="https://jscomplete.com/react/" rel="noopener"><strong>JavaScript REPL and Playground for React.js</strong></a><br><a href="https://jscomplete.com/react/" rel="noopener"><em>Test modern JavaScript and React.js code in the browser without any configurations</em>jscomplete.com/react</a></p><p>Note the following about Example 1:</p><ul><li>The component name starts with a capital letter. This is required since we will be dealing with a mix of HTML elements and React elements. Lowercase names are reserved for HTML elements. In fact, go ahead and try to name the React component just “button” and see how ReactDOM will ignore the function and renders a regular empty HTML button.</li><li>Every component receives a list of attributes, just like HTML elements. In React, this list is called <strong>props</strong>. With a function component, you can name it anything though.</li><li>We weirdly wrote what looks like HTML in the returned output of the <code>Button</code> function component above. This is neither JavaScript nor HTML, and it’s not even React.js. But, it’s so popular that it became the default in React applications. It’s called <a href="https://facebook.github.io/jsx/" rel="noopener"><em>JSX</em></a> and it’s a JavaScript extension. JSX is also a <strong>compromise</strong>! Go ahead and try and return any other HTML element inside the function above and see how they are all supported (for example, return a text input element).</li></ul><h3 id="fundamental-2-what-the-flux-is-jsx">Fundamental #2: What the flux is JSX?</h3><p>Example 1 above can be written in pure React.js without JSX as follows:</p><pre><code class="language-js">// Example 2 -  React component without JSX
// https://jscomplete.com/repl?j=HyiEwoYB-
function Button (props) {
return React.createElement(
"button",
{ type: "submit" },
props.label
);
}
// To use Button, you would do something like
ReactDOM.render(
React.createElement(Button, { label: "Save" }),
mountNode
);</code></pre><p>The <code>createElement</code> function is the main function in the React top-level API. It’s 1 of a total of 8 things in that level that you need to learn. That’s how small the React API is.</p><p>Much like the DOM itself having a <code>document.createElement</code> function to create an element specified by a tag name, React’s <code>createElement</code> function is a higher-level function that can do what <code>document.createElement</code> does, but it can also be used to create an element to represent a React component. We did the latter when we used the <code>Button</code> component in Example 2 above.</p><p>Unlike <code>document.createElement</code>, React’s <code>createElement</code> accepts a dynamic number of arguments after the second one to represent the <strong>children</strong> of the created element. So <code>createElement</code> actually creates a <strong>tree</strong><em>.</em></p><p>Here’s an example of that:</p><pre><code class="language-js">// Example 3 -  React’s createElement API
// https://jscomplete.com/repl?j=r1GNoiFBb
const InputForm = React.createElement(
"form",
{ target: "_blank", action: "https://google.com/search" },
React.createElement("div", null, "Enter input and click Search"),
React.createElement("input", { name: "q", className: "input" }),
React.createElement(Button, { label: "Search" })
);
// InputForm uses the Button component, so we need that too:
function Button (props) {
return React.createElement(
"button",
{ type: "submit" },
props.label
);
}
// Then we can use InputForm directly with .render
ReactDOM.render(InputForm, mountNode);</code></pre><p>Note a few things about the example above:</p><ul><li><code>InputForm</code> is not a React component; it’s just a React <strong>element</strong>. This is why we used it directly in the <code>ReactDOM.render</code> call and not with <code>&lt;InputForm</code> /&gt;.</li><li>The <code>React.createElement</code> function accepted multiple arguments after the first two. Its list of arguments starting from the 3rd one comprises the list of children for the created element.</li><li>We were able to nest <code>React.createElement</code> calls because it’s all JavaScript.</li><li>The second argument to <code>React.createElement</code> can be null or an empty object when no attributes or props are needed for the element.</li><li>We can mix HTML element with React elements.</li><li>React’s API tries to be as close to the DOM API as possible, that’s why we use <code>className</code> instead of <code>class</code> for the input element. Secretly, we all wish the React’s API would become part of the DOM API itself. Because, you know, it’s much much better.</li></ul><p>The code above is what the browser understands when you include the React library. The browser does not deal with any JSX business. However, we humans like to see and work with HTML instead of these <code>createElement</code> calls (imagine building a website with just <code>document.createElement</code>, which you can!). This is why the JSX compromise exists. Instead of writing the form above with <code>React.createElement</code> calls, we can write it with a syntax very similar to HTML:</p><pre><code class="language-js">// Example 4 - JSX (compare with Example 3)
// https://jscomplete.com/repl?j=SJWy3otHW
const InputForm =
&lt;form target="_blank" action="https://google.com/search"&gt;
&lt;div&gt;Enter input and click Search&lt;/div&gt;
&lt;input name="q" className="input" /&gt;
&lt;Button label="Search" /&gt;
&lt;/form&gt;;
// InputForm "still" uses the Button component, so we need that too.
// Either JSX or normal form would do
function Button (props) {
// Returns a DOM element here. For example:
return &lt;button type="submit"&gt;{props.label}&lt;/button&gt;;
}
// Then we can use InputForm directly with .render
ReactDOM.render(InputForm, mountNode);</code></pre><p>Note a few things about the above:</p><ul><li>It’s not HTML. For example, we’re still doing <code>className</code> instead of <code>class</code>.</li><li>We’re still considering what looks like HTML above as JavaScript. See how I added a semicolon at the end.</li></ul><p>What we wrote above (Example 4) is JSX. Yet, what we took to the browser is the compiled version of it (Example 3). To make that happen, we need to use a pre-processor to convert the JSX version into the <code>React.createElement</code> version.</p><p>That is JSX. It’s a compromise that allows us to write our React components in a syntax similar to HTML, which is a pretty good deal.</p><blockquote>The word “Flux” in the header above was chosen to rhyme, but it’s also the name of a very popular <a href="https://facebook.github.io/flux/" rel="noopener">application architecture</a> popularized by Facebook. The most famous implementation of which is Redux. Flux fits the React reactive pattern perfectly.</blockquote><p>JSX, by the way, can be used on its own. It’s not a React-only thing.</p><h3 id="fundamental-3-you-can-use-javascript-expressions-anywhere-in-jsx">Fundamental #3: You can use JavaScript expressions anywhere in JSX</h3><p>Inside a JSX section, you can use any JavaScript expression within a pair of curly braces.</p><pre><code class="language-js">// To use it:ReactDOM.render(&lt;RandomValue /&gt;, mountNode);// Example 5 -  Using JavaScript expressions in JSX
// https://jscomplete.com/repl?j=SkNN3oYSW
const RandomValue = () =&gt;
&lt;div&gt;
{ Math.floor(Math.random() * 100) }
&lt;/div&gt;;
// To use it:
ReactDOM.render(&lt;RandomValue /&gt;, mountNode);</code></pre><p>Any JavaScript expression can go inside those curly braces. This is equivalent to the <code>${}</code> interpolation syntax in JavaScript <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals" rel="noopener">template literals</a>.</p><p>This is the only constraint inside JSX: only expressions. So, for example, you can’t use a regular <code>if</code> statement, but a ternary expression is ok.</p><p>JavaScript variables are also expressions, so when the component receives a list of props (the <code>RandomValue</code> component didn’t, <code>props</code> are optional), you can use these props inside curly braces. We did this in the <code>Button</code> component above (Example 1).</p><p>JavaScript objects are also expressions. Sometimes we use a JavaScript object inside curly braces, which makes it look like double curly braces, but it’s really just an object inside curly braces. One use case of that is to pass a CSS style object to the special <code>style</code> attribute in React:</p><pre><code class="language-js">// Example 6 - An object passed to the special React style prop
// https://jscomplete.com/repl?j=S1Kw2sFHb
const ErrorDisplay = ({message}) =&gt;
&lt;div style={ { color: 'red', backgroundColor: 'yellow' } }&gt;
{message}
&lt;/div&gt;;
// Use it:
ReactDOM.render(
&lt;ErrorDisplay
message="These aren't the droids you're looking for"
/&gt;,
mountNode
);</code></pre><p>Note how I <strong>destructured</strong> only the message out of the props argument. Also note how the <code>style</code> attribute above is a special one (again, it’s not HTML, it’s closer to the DOM API). We use an object as the value of the <code>style</code> attribute. That object defines the styles as if we’re doing so with JavaScript (because we are).</p><p>You can even use a React element inside JSX, because that too is an expression. Remember, a React element is essentially a function call:</p><pre><code class="language-js">// Example 7 - Using a React element within {}
// https://jscomplete.com/repl?j=SkTLpjYr-
const MaybeError = ({errorMessage}) =&gt;
&lt;div&gt;
{errorMessage &amp;&amp; &lt;ErrorDisplay message={errorMessage} /&gt;}
&lt;/div&gt;;
// The MaybeError component uses the ErrorDisplay component:
const ErrorDisplay = ({message}) =&gt;
&lt;div style={ { color: 'red', backgroundColor: 'yellow' } }&gt;
{message}
&lt;/div&gt;;
// Now we can use the MaybeError component:
ReactDOM.render(
&lt;MaybeError
errorMessage={Math.random() &gt; 0.5 ? 'Not good' : ''}
/&gt;,
mountNode
);</code></pre><p>The <code>MaybeError</code> component above would only display the <code>ErrorDisplay</code> component if there is an <code>errorMessage</code> string passed to it and an empty <code>div</code>. React considers <code>{true}</code>, <code>{false}</code>, <code>{undefined}</code>, and <code>{null}</code> to be valid element children, which do not render anything.</p><p>You can also use all of JavaScript functional methods on collections (<code>map</code>, <code>reduce</code>, <code>filter</code>, <code>concat</code>, and so on) inside JSX. Again, because they return expressions:</p><pre><code class="language-js">// Example 8 - Using an array map inside {}
// https://jscomplete.com/repl?j=SJ29aiYH-
const Doubler = ({value=[1, 2, 3]}) =&gt;
&lt;div&gt;
{value.map(e =&gt; e * 2)}
&lt;/div&gt;;
// Use it
ReactDOM.render(&lt;Doubler /&gt;, mountNode);</code></pre><p>Note how I gave the <code>value</code> prop a default value above, because it’s all just Javascript. Note also that I outputted an array expression inside the <code>div</code>. React is okay with that; It will place every doubled value in a text node.</p><h3 id="fundamental-4-you-can-write-react-components-with-javascript-classes">Fundamental #4: You can write React components with JavaScript classes</h3><p>Simple function components are great for simple needs, but sometimes we need more. React supports creating components through the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes" rel="noopener">JavaScript class syntax</a> as well. Here’s the <code>Button</code> component (in Example 1) written with the class syntax:</p><pre><code class="language-js">// Example 9 - Creating components using JavaScript classes
// https://jscomplete.com/repl?j=ryjk0iKHb
class Button extends React.Component {
render() {
return &lt;button&gt;{this.props.label}&lt;/button&gt;;
}
}
// Use it (same syntax)
ReactDOM.render(&lt;Button label="Save" /&gt;, mountNode);</code></pre><p>The class syntax is simple. Define a class that extends <code>React.Component</code> (another top-level React API thing that you need to learn). The class defines a single instance function <code>render()</code>, and that render function returns the virtual DOM element. Every time we use the <code>Button</code> class-based component above (for example, by doing <code>&lt;Button ...</code> /&gt;), React will instantiate an object from this class-based component and use that object to render a DOM element in the DOM tree.</p><p>This is the reason why we used <code>this.props.label</code> inside the JSX in the rendered output above. Because every element rendered through a class component gets a special <strong>instance</strong> property called <code>props</code> that holds all values passed to that element when it was created.</p><p>Since we have an instance associated with a single use of the component, we can customize that instance as we wish. We can, for example, customize it after it gets constructed by using the regular JavaScript <code>constructor</code> function:</p><pre><code class="language-js">// Example 10 -  Customizing a component instance
// https://jscomplete.com/repl?j=rko7RsKS-
class Button extends React.Component {
constructor(props) {
super(props);
this.id = Date.now();
}
render() {
return &lt;button id={this.id}&gt;{this.props.label}&lt;/button&gt;;
}
}
// Use it
ReactDOM.render(&lt;Button label="Save" /&gt;, mountNode);</code></pre><p>We can also define class functions and use them anywhere we wish, including inside the returned JSX output:</p><pre><code class="language-js">// Example 11 — Using class properties
// https://jscomplete.com/repl?j=H1YDCoFSb
class Button extends React.Component {
clickCounter = 0;
handleClick = () =&gt; {
console.log(`Clicked: ${++this.clickCounter}`);
};
render() {
return (
&lt;button id={this.id} onClick={this.handleClick}&gt;
{this.props.label}
&lt;/button&gt;
);
}
}
// Use it
ReactDOM.render(&lt;Button label="Save" /&gt;, mountNode);</code></pre><p>Note a few things about Example 11 above:</p><ul><li>The <code>handleClick</code> function is written using the new proposed <a href="https://github.com/tc39/proposal-class-fields" rel="noopener">class-field syntax</a> in JavaScript. This is still at stage-2, but for many reasons it’s the best option to access the component mounted instance (thanks to arrow functions). But, you need to use a compiler like Babel configured to understand stage-2 (or the class-field syntax) to get the code above to work. The jsComplete REPL has that pre-configured.</li><li>We’ve also defined the <code>clickCounter</code> instance variables using the same class-field syntax. This allows us to skip using a class constructor call altogether.</li><li>When we specified the <code>handleClick</code> function as the value of the special <code>onClick</code> React attribute, we did not call it. We passed in the <strong>reference</strong> to the <code>handleClick</code> function. Calling the function on that level is one of the most common mistakes when working with React.</li></ul><pre><code class="language-js">// Wrong:
onClick={this.handleClick()}
// Right:
onClick={this.handleClick}</code></pre><h3 id="fundamental-5-events-in-react-two-important-differences">Fundamental #5: Events in React: Two Important Differences</h3><p>When handling events inside React elements, there are two very important differences from the way we do so with the DOM API:</p><ul><li>All React elements attributes (events included) are named using <strong>camelCase</strong>, rather than <strong>lowercase</strong>. It’s <code>onClick</code>, not <code>onclick</code>.</li><li>We pass an actual JavaScript function reference as the event handler, rather than a string. It’s <code>onClick={<strong>handleClick</strong>}</code>, not <code>onClick="<strong>handleClick"</strong></code>.</li></ul><p>React wraps the DOM event object with an object of its own to optimize the performance of events handling. But inside an event handler, we can still access all methods available on the DOM event object. React passes that wrapped event object to every handle call. For example, to prevent a form from the default submission action, you can do:</p><pre><code class="language-js">// Example 12 - Working with wrapped events
// https://jscomplete.com/repl?j=HkIhRoKBb
class Form extends React.Component {
handleSubmit = (event) =&gt; {
event.preventDefault();
console.log('Form submitted');
};
render() {
return (
&lt;form onSubmit={this.handleSubmit}&gt;
&lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
);
}
}
// Use it
ReactDOM.render(&lt;Form /&gt;, mountNode);</code></pre><h3 id="fundamental-6-every-react-component-has-a-story">Fundamental #6: Every React component has a story</h3><p>The following applies to the class component only (those that extend <code>React.Component</code>). Function components have a slightly different story.</p><ol><li>First, we define a template for React to create elements from the component.</li><li>Then, we instruct React to use it somewhere. For example, inside a <code>render</code> call of another component, or with <code>ReactDOM.render</code>.</li><li>Then, React instantiates an element and gives it a set of <strong>props</strong> that we can access with <code>this.props</code>. Those props are exactly what we passed in step 2 above.</li><li>Since it’s all JavaScript, the <code>constructor</code> method will be called (if defined). This is the first of what we call: <strong>component lifecycle methods</strong><em>.</em></li><li>React then computes the output of the render method (the virtual DOM node).</li><li>Since this is the first time React is rendering the element, React will communicate with the browser (on our behalf, using the DOM API) to display the element there. This process is commonly known as <strong>mounting</strong>.</li><li>React then invokes another lifecycle method, called <code>componentDidMount</code>. We can use this method to, for example, do something on the DOM that we now know exists in the browser. Prior to this lifecycle method, the DOM we work with was all virtual.</li><li>Some components stories end here. Other components get unmounted from the browser DOM for various reasons. Right before the latter happens, React invokes another lifecycle method, <code>componentWillUnmount</code>.</li><li>The <strong>state</strong> of any mounted element might change. The parent of that element might re-render. In either case, the mounted element might receive a different set of props. React magic happens here and we actually start <strong>needing</strong> React at this point! Prior to this point, we did not need React at all, honestly.</li></ol><p>The story of this component continues, but before it does, we need to understand this <strong>state</strong> thing that I speak of.</p><h3 id="fundamental-7-react-components-can-have-a-private-state">Fundamental #7: React components can have a private state</h3><p>The following is also only applicable to class components. Did I mention that some people call presentational-only components <strong>dumb</strong>?</p><p>The <code>state</code> property is a special one in any React class component. React monitors every component state for changes. But for React to do so efficiently, we have to change the state field through another React API thing that we need to learn, <code>this.setState</code>:</p><pre><code class="language-js">// Example 13 -  the setState API
// https://jscomplete.com/repl?j=H1fek2KH-
class CounterButton extends React.Component {
state = {
clickCounter: 0,
currentTimestamp: new Date(),
};
handleClick = () =&gt; {
this.setState((prevState) =&gt; {
return { clickCounter: prevState.clickCounter + 1 };
});
};
componentDidMount() {
setInterval(() =&gt; {
this.setState({ currentTimestamp: new Date() })
}, 1000);
}
render() {
return (
&lt;div&gt;
&lt;button onClick={this.handleClick}&gt;Click&lt;/button&gt;
&lt;p&gt;Clicked: {this.state.clickCounter}&lt;/p&gt;
&lt;p&gt;Time: {this.state.currentTimestamp.toLocaleString()}&lt;/p&gt;
&lt;/div&gt;
);
}
}
// Use it
</figure><h3 id="fundamental-8-react-will-react">Fundamental #8: React will react</h3><p>React gets its name from the fact that it <strong>reacts</strong> to state changes (although not reactively, but on a schedule). There was a joke that React should have been named <strong>Schedule</strong>!</p><p>However, what we witness with the naked eye when the state of any component gets updated is that React reacts to that update and automatically reflects the update in the browser DOM (if needed).</p><p>Think of the render function’s input as both:</p><ul><li>The props that get passed by the parent</li><li>The internal private state that can be updated anytime</li></ul><p>When the input of the render function changes, its output might change.</p><p>React keeps a record of the history of renders and when it sees that one render is different than the previous one, it’ll compute the difference between them and efficiently translate it into actual DOM operations that get executed in the DOM.</p><h3 id="fundamental-9-react-is-your-agent">Fundamental #9: React is your agent</h3><p>You can think of React as the agent we hired to communicate with the browser. Take the current timestamp display above as an example. Instead of us manually going to the browser and invoking DOM API operations to find and update the <code>p#timestamp</code> element every second, we just changed a property on the state of the component and React did its job of communicating with the browser on our behalf. I believe this is the true reason why React is popular. We hate talking to Mr. Browser (and the so many dialects of the DOM language that it speaks) and React volunteered to do all the talking for us, for free.</p><h3 id="fundamental-10-every-react-component-has-a-story-part-2-">Fundamental #10: Every React component has a story (part 2)</h3><p>Now that we know about the state of a component and how when that state changes some magic happens, let’s learn the last few concepts about that process.</p><ol><li>A component might need to re-render when its state gets updated or when its parent decides to change the props that it passed to the component</li><li>If the latter happens, React invokes another lifecycle method, <code>componentWillReceiveProps</code>.</li><li>If either the state object or the passed-in props are changed, React has an important decision to do. Should the component be updated in the DOM? This is why it invokes another important lifecycle method here, <code>shouldComponentUpdate</code>. This method is an actual question, so if you need to customize or optimize the render process on your own, you have to answer that question by returning <strong>either</strong> true or false.</li><li>If there is no custom <code>shouldComponentUpdate</code> specified, React defaults to a very smart thing that’s actually good enough in most situations.</li><li>First, React invokes another lifecycle method at this point, <code>componentWillUpdate</code>. React will then compute the new rendered output and compare it with the last rendered output.</li><li>If the rendered output is exactly the same, React does nothing (no need to talk to Mr. Browser).</li><li>If there is a difference, React takes that difference to the browser, as we’ve seen before.</li><li>In any case, since an update process happened anyway (even if the output was exactly the same), React invokes the final lifecycle method, <code>componentDidUpdate</code>.</li></ol><p>Lifecycle methods are actually escape hatches. If you’re not doing anything special, you can create full applications without them. They’re very handy for analyzing what is going on in the application and for further optimizing the performance of React updates.</p><p>That’s it. Believe it or not, with what you learned above (or parts of it, really), you can start creating some interesting React applications. If you’re hungry for more, check out my <a href="http://amzn.to/2peYJZj" rel="noopener">Learn React.js by Building Games</a> book!</p><p>Thanks to the many readers who reviewed and improved this article, Łukasz Szewczak, Tim Broyles, Kyle Holden, Robert Axelse, Bruce Lane, Irvin Waldman, and Amie Wilt.</p><p>Learning React or Node? Checkout my books:</p><ul><li><a href="http://amzn.to/2peYJZj" rel="noopener">Learn React.js by Building Games</a></li><li><a href="http://amzn.to/2FYfYru" rel="noopener">Node.js Beyond the Basics</a></li></ul>
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
