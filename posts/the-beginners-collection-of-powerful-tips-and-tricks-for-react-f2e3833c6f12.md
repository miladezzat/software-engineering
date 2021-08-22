---
card: "https://cdn-media-1.freecodecamp.org/images/1*s9b85nv7ZKzqxCkg6ps0QA.jpeg"
tags: [Technology]
description: "As you can tell from the title of this article, it’s aimed at"
author: "Milad E. Fahmy"
title: "The beginner’s collection of powerful tips and tricks for React"
created: "2021-08-16T11:38:22+02:00"
modified: "2021-08-16T11:38:22+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-technology tag-javascript tag-web-development tag-programming tag-react ">
<header class="post-full-header">
<h1 class="post-full-title">The beginner’s collection of powerful tips and tricks for React</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*s9b85nv7ZKzqxCkg6ps0QA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*s9b85nv7ZKzqxCkg6ps0QA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*s9b85nv7ZKzqxCkg6ps0QA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*s9b85nv7ZKzqxCkg6ps0QA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*s9b85nv7ZKzqxCkg6ps0QA.jpeg" alt="The beginner’s collection of powerful tips and tricks for React">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<blockquote>This is part of my “React for beginners” series on introducing React, its core features and best practices to follow. More articles are coming!</blockquote><blockquote><a href="/news/p/2994c09b-d550-4eb6-b281-a83e553240c7/">&lt;&lt; Start over</a> | <a href="/news/how-to-bring-reactivity-into-react-with-states-exclude-redux-solution-4827d293dfc4/">&lt; Previous</a></blockquote><p>As you can tell from the title of this article, it’s aimed at beginners.</p><p>Actually, I started to learn React a few months ago. Reading the React documentation, open source projects, and Medium articles has helped me a lot.</p><p>Without a doubt, I’m not an expert in React. And so I read a lot about this topic. Also, building a small projects has helped me get to know React better. Along the way, I’ve adopted some best practices — and I want to share with you here. So let’s get started.</p><h3 id="name-your-components">Name your components</h3><p>To figure which component has a bug, it’s important to always give your component a name.</p><p>Even more so when you begin to use React Router or third party libraries.</p><pre><code class="language-js">// Avoid thoses notations
export default () =&gt; {};
export default class extends React.Component {};</code></pre><p>There is a debate about whether to use a default or named import. Note that a <strong>default import</strong> doesn’t ensure that the component’s name is consistent in the project. Besides, <a href="https://en.wikipedia.org/wiki/Tree_shaking" rel="noopener">tree-shaking</a> will be less effective.</p><h4 id="no-matter-how-you-expose-your-component-name-it">No matter how you expose your component, name it</h4><p>You need to define the class name or the variable name (for functional components) that’s hosting the component.</p><p>React will actually <a href="https://reactjs.org/docs/react-component.html#displayname" rel="noopener">infer the component name</a> from it in error messages.</p><pre><code class="language-js">export const Component = () =&gt; &lt;h1&gt;I'm a component&lt;/h1&gt;;
export default Component;
// Define user custom component name
Component.displayName = 'My Component';</code></pre><p>Here’s my last piece of advice about imports (taken from <a href="https://medium.freecodecamp.org/the-most-important-eslint-rule-for-redux-applications-c10f6aeff61d" rel="noopener">here</a>): If you use ESLint, you should consider setting the following two rules:</p><pre><code class="language-js">"rules": {
// Check named import exists
"import/named": 2,
// Set to "on" in airbnb preset
"import/prefer-default-export": "off"
}</code></pre><h3 id="prefer-functional-components">Prefer functional components</h3><p>If you have many components whose purpose is only to display data, take advantage of the many ways to <a href="https://reactjs.org/docs/components-and-props.html#functional-and-class-components" rel="noopener">define a React component</a>:</p><pre><code class="language-js">class Watch extends React.Component {
render () {
return &lt;div&gt;{this.props.hours}:{this.props.minutes}&lt;/div&gt;
}
}
// Equivalent functional component
const Watch = (props) =&gt;
&lt;div&gt;{props.hours}:{props.minutes}&lt;/div&gt;;</code></pre><p>Both snippets define the same <code>Watch</code> component. Yet, the second is way shorter and even drops <code>this</code> to access the props in the JSX template.</p><h3 id="replace-divs-with-fragments">Replace divs with fragments</h3><p>Every component must expose a unique root element as a template. To adhere to this rule, the common fix is to wrap the template in a <code>div</code>.</p><p>React 16 brings us a new feature called <a href="https://reactjs.org/docs/fragments.html" rel="noopener"><em>Fragments</em></a>. Now you can replace those useless <code>div</code>s with <code>React.Fragment</code>s<em>.</em></p><p>The output template will be the fragment content without any wrapper.</p><pre><code class="language-js">const Login = () =&gt;
&lt;div&gt;&lt;input name="login"/&gt;&lt;input name="password"/&gt;&lt;/div&gt;;
const Login = () =&gt;
&lt;React.Fragment&gt;&lt;input name="login"/&gt;&lt;input name="password"/&gt;&lt;/React.Fragment&gt;;
const Login = () =&gt; // Short-hand syntax
&lt;&gt;&lt;input name="login"/&gt;&lt;input name="password"/&gt;&lt;/&gt;;</code></pre><h3 id="be-careful-while-setting-state">Be careful while setting state</h3><p>As soon as your React app is dynamic, you have to deal with components’ states.</p><p>Using states seems pretty straightforward. Initialize the state content in the <code>constructor</code> and then call <code>setState</code> to update the state<em>.</em></p><p>For some reason, you may need to use the current <strong>state </strong>or <strong>props </strong>values when calling <code>setState</code> to set the next state’s value.</p><pre><code class="language-js">// Very bad pratice: do not use this.state and this.props in setState !
this.setState({ answered: !this.state.answered, answer });
// With quite big states: the tempatation becomes bigger
// Here keep the current state and add answer property
this.setState({ ...this.state, answer });</code></pre><p>The issue is that React doesn’t ensure <code>this.state</code> and <code>this.props</code> have the value you’re expecting. <code>setState</code> is asynchronous, because state updates are batch to optimize DOM manipulations (see the details in the <a href="https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous" rel="noopener">React docs</a> and this <a href="https://github.com/facebook/react/issues/11527#issuecomment-360199710" rel="noopener">issue</a>).</p><pre><code class="language-js">// Note the () notation around the object which makes the JS engine
// evaluate as an expression and not as the arrow function block
this.setState((prevState, props)
=&gt; ({ ...prevState, answer }));</code></pre><p>To prevent corrupted states, you must use <code>setState</code> with the function parameter. It provides proper state and props values.</p><h3 id="binding-component-functions">Binding component functions</h3><p>There are many ways to bind an element’s events to its component, and some are not recommended.</p><p>The first and legitimate solution appears in the <a href="https://reactjs.org/docs/handling-events.html" rel="noopener">React documentation</a>:</p><pre><code class="language-js">class DatePicker extends React.Component {
handleDateSelected({target}){
// Do stuff
}
render() {
return &lt;input type="date" onChange={this.handleDateSelected}/&gt;
}
}</code></pre><p>It might disappoint you when you find out that it doesn’t work.</p><p>The reason is that when using JSX, <code>this</code> value is not bound to the component instance. Here are three alternatives to make it work:</p><pre><code class="language-js">// #1: use an arrow function
&lt;input type="date" onChange={(event) =&gt; this.handleDateSelected(event)}/&gt;
// OR #2: bind this to the function in component constructor
constructor () {
this.handleDateSelected = this.handleDateSelected.bind(this);
}
// OR #3: declare the function as a class field (arrow function syntax)
handleDateSelected = ({target}) =&gt; {
// Do stuff
}</code></pre><p>Using an arrow function in JSX as in the first example seems appealing at first. But don’t do it. In reality, your arrow function will be <a href="https://reactjs.org/docs/handling-events.html" rel="noopener">created again upon each component rendering</a> and it’ll hurt performance.</p><p>Also, be careful about the last solution. It uses class fields syntax which is only a <a href="https://github.com/tc39/proposal-class-fields" rel="noopener">proposal for ECMAScript</a>.</p><p>This means that you have to use <a href="https://babeljs.io/docs/plugins/transform-class-properties" rel="noopener">Babel</a> to <a href="https://en.wikipedia.org/wiki/Source-to-source_compiler" rel="noopener">transpile</a> the code. If the syntax is not finally adopted, your code will break.</p><h3 id="adopt-container-pattern-even-with-redux-">Adopt container pattern (even with Redux)</h3><p>Last but not the least, the container design pattern. This allows you to follow the <a href="https://en.wikipedia.org/wiki/Separation_of_concerns" rel="noopener">separation of concerns</a> principle in the React component.</p><pre><code class="language-js">export class DatePicker extends React.Component {
state = { currentDate: null };
handleDateSelected = ({target}) =&gt;
this.setState({ currentDate: target.value });
render = () =&gt;
&lt;input type="date" onChange={this.handleDateSelected}/&gt;
}</code></pre><p>A single component handles template rendering and user actions in the same place. Let’s use two components instead:</p><pre><code class="language-js">const DatePicker = (props) =&gt;
&lt;input type="date" onChange={props.handleDateSelected}/&gt;
export class DatePickerController extends React.Component {
// ... No changes except render function ...
render = () =&gt;
&lt;DatePicker handleDateSelected={this.handleDateSelected}/&gt;;
}</code></pre><p>Here is the trick. <code>DatePickerContainer</code> handles user interactions and API calls if necessary. Then it renders a <code>DatePicker</code> and supplies props.</p><p>Thanks to this pattern, the container component replaces the presentational component. This functional component becomes useless without props.</p><pre><code class="language-js">export const DatePickerContainer =
const UserDetails = props =&gt;
&lt;section&gt;
&lt;h1&gt;User details&lt;/h1&gt;
&lt;CustomInput value={props.fullName}/&gt; // &lt;= No need fullName but pass it down
&lt;/section&gt;;
const inputStyle = {
height: '30px',
width: '200px',
fontSize: '19px',
border: 'none',
borderBottom: '1px solid black'
};
const CustomInput = props =&gt; // v Finally use fullName value from Page component
&lt;input style={inputStyle} type="text" defaultValue={props.value}/&gt;;</code></pre><p>The React community has named this issue <strong>prop drilling</strong>.</p><p><code>Page</code> is the main component that loads the user details. It is necessary to pass this data through <code>UserDetails</code> to take it to <code>CustomInput</code>.</p><p>In this example, the prop only passes through one component which doesn’t need it. But it can be far more if you have reusable components. For example, the Facebook codebase contains a few thousand reusable components!</p><p>Don’t worry, I’m going to teach you three ways to fix it. The two first methods appear in the <a href="https://reactjs.org/docs/context.html#before-you-use-context" rel="noopener">Context API documentation</a> : <strong>children prop</strong> and <strong>render prop</strong>.</p><pre><code class="language-js">// #1: Use children prop
const UserDetailsWithChildren = props =&gt;
&lt;section&gt;
&lt;h1&gt;User details (with children)&lt;/h1&gt;
{props.children /* &lt;= use children */}
&lt;/section&gt;;
// #2: Render prop pattern
const UserDetailsWithRenderProp = props =&gt;
&lt;section&gt;
&lt;h1&gt;User details (with render prop)&lt;/h1&gt;
{props.renderFullName() /* &lt;= use passed render function */}
&lt;/section&gt;;
const Page = () =&gt;
&lt;React.Fragment&gt;
{/* #1: Children prop */}
&lt;UserDetailsWithChildren&gt;
&lt;CustomInput value="John Doe"/&gt; {/* Defines props.children */}
&lt;/UserDetailsWithChildren&gt;
{/* #2: Render prop pattern */}
{/* Remember: passing arrow functions is a bad pratice, make it a method of Page class instead */}
&lt;UserDetailsWithRenderProp renderFullName={() =&gt; &lt;CustomInput value="John Doe"/&gt;}/&gt;
&lt;/React.Fragment&gt;;</code></pre><p>These solutions are pretty similar. I prefer using children, because it works well within the render method. Note that you can also extend those patterns by providing deeper nested components.</p><pre><code class="language-html">const Page = () =&gt;
&lt;PageContent&gt;
&lt;RightSection&gt;
&lt;BoxContent&gt;
&lt;UserDetailsWithChildren&gt;
&lt;CustomInput value="John Doe"/&gt;
&lt;/UserDetailsWithChildren&gt;
&lt;/BoxContent&gt;
&lt;/RightSection&gt;
&lt;/PageContent&gt;</code></pre><p>The third example uses the experimental context API.</p><pre><code class="language-js">const UserFullNameContext = React.createContext('userFullName');
const Page = () =&gt;
&lt;UserFullNameContext.Provider value="John Doe"&gt; {/* Fill context with value */}
&lt;UserDetailsWithContext/&gt;
&lt;/UserFullNameContext.Provider&gt;;
const UserDetailsWithContext = () =&gt; // No props to provide
&lt;section&gt;
&lt;h1&gt;User details (with context)&lt;/h1&gt;
&lt;UserFullNameContext.Consumer&gt; {/* Get context value */}
{ fullName =&gt; &lt;CustomInput value={fullName}/&gt; }
&lt;/UserFullNameContext.Consumer&gt;
&lt;/section&gt;;</code></pre><p>I don’t recommend this method, because it’s using an experimental feature. (And this is why the API recently <a href="https://reactjs.org/blog/2018/03/29/react-v-16-3.html" rel="noopener">changed on a minor version</a>.) Also, it forces you to create a global variable to store the context, and your component gets an unclear new dependency (the context can contain anything).</p><h4 id="that-s-it-">That’s it!</h4><p>Thanks for reading. I hope you learned some interesting tips about React!</p><p><strong>If you found this article useful, please click on the </strong>? <strong>button a few times to make others find the article and to show your support! </strong>?</p><p><strong>Don’t forget to follow me to get notified of my upcoming articles </strong>?</p><blockquote>This is part of my “React for beginners” series on introducing React, its core features and best practices to follow.</blockquote><blockquote><a href="/news/p/2994c09b-d550-4eb6-b281-a83e553240c7/">&lt;&lt; Start over</a> | <a href="/news/how-to-bring-reactivity-into-react-with-states-exclude-redux-solution-4827d293dfc4/">&lt; Previous</a></blockquote><h3 id="check-out-my-other-articles">Check out my <a href="/news/author/jbardon/">Other</a> Articles</h3><h4 id="-javascript">➥ JavaScript</h4><ul><li><a href="https://medium.freecodecamp.org/how-to-improve-your-javascript-skills-by-writing-your-own-web-development-framework-eed2226f190" rel="noopener">How to Improve Your JavaScript Skills by Writing Your Own Web Development Framework</a> ?</li><li><a href="https://medium.freecodecamp.org/common-mistakes-to-avoid-while-working-with-vue-js-10e0b130925b" rel="noopener">Common Mistakes to Avoid While Working with Vue.js</a></li></ul><h4 id="-tips-tricks">➥ Tips &amp; tricks</h4><ul><li><a href="https://medium.com/dailyjs/stop-painful-javascript-debug-and-embrace-intellij-with-source-map-6fe68eda8555" rel="noopener">Stop Painful JavaScript Debug and Embrace Intellij with Source Map</a></li><li><a href="https://medium.com/dailyjs/how-to-reduce-enormous-javascript-bundle-without-efforts-59fe37dd4acd" rel="noopener">How To Reduce Enormous JavaScript Bundles Without Effort</a></li></ul>
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
