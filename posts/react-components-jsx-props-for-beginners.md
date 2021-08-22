---
card: "/images/default.jpg"
tags: [React]
description: React is one of the most popular JavaScript libraries for bui
author: "Milad E. Fahmy"
title: "React Functional Components, Props, and JSX – React.js Tutorial for Beginners"
created: "2021-08-15T19:28:06+02:00"
modified: "2021-08-15T19:28:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-jsx tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">React Functional Components, Props, and JSX – React.js Tutorial for Beginners</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/11/Copy-of-Add-a-heading.png 300w,
/news/content/images/size/w600/2020/11/Copy-of-Add-a-heading.png 600w,
/news/content/images/size/w1000/2020/11/Copy-of-Add-a-heading.png 1000w,
/news/content/images/size/w2000/2020/11/Copy-of-Add-a-heading.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/11/Copy-of-Add-a-heading.png" alt="React Functional Components, Props, and JSX – React.js Tutorial for Beginners">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>React is one of the most popular JavaScript libraries for building user interfaces. </p>
<p>If you want to become a front-end developer or find a web development job, you would probably benefit from learning React in-depth.</p>
<p>In this post, you're going to learn some of the basics of React like creating a component, the JSX syntax, and Props. If you have no or little experience with React, this post is for you.</p>
<p>For starters, <a href="/news/install-react-with-create-react-app/">here's how you can install React</a>.</p>
<h2 id="what-is-jsx">What is JSX?</h2>
<p>The first thing you'll realize after installing your first React project is that a JavaScript function returns some HTML code:</p><pre><code class="language-jsx">function App() {
return (
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
&lt;img src={logo} className="App-logo" alt="logo" /&gt;
&lt;p&gt;
Edit &lt;code&gt;src/App.js&lt;/code&gt; and save to reload.
&lt;/p&gt;
&lt;/header&gt;
&lt;/div&gt;
);
}</code></pre>
<p>This is a special and valid syntax extension for React which is called JSX (JavaScript XML). Normally in frontend-related projects, we keep HTML, CSS, and JavaScript code in separate files. However in React, this works a bit differently.</p>
<p>In React projects, we don't create separate HTML files, because JSX allows us to write HTML and JavaScript combined together in the same file, like in the example above. You can, however, separate your CSS in another file.</p>
<p>In the beginning, JSX might seem a little bit weird. But don't worry, you'll get used to it. </p>
<p>JSX is very practical, because we can also execute any JavaScript code (logic, functions, variables, and so on) inside the HTML directly by using curly braces {&nbsp;}, like this:</p><pre><code class="language-jsx">function App() {
const text = 'Hello World';
return (
&lt;div className="App"&gt;
&lt;p&gt; {text} &lt;/p&gt;
&lt;/div&gt;
);
}</code></pre>
<p>Also, you can assign HTML tags to JavaScript variables:</p><pre><code class="language-jsx">const message = &lt;h1&gt;React is cool!&lt;/h1&gt;;</code></pre>
<p>Or you can return HTML inside JavaScript logic (such as if-else cases):</p><pre><code class="language-jsx">render() {
if(true) {
return &lt;p&gt;YES&lt;/p&gt;;
} else {
return &lt;p&gt;NO&lt;/p&gt;;
}
}</code></pre>
<p>I won't go into further details of JSX, but make sure that you consider the following rules while writing JSX:</p>
<ul>
<li>HTML and component tags must always be closed &lt; /&gt;</li>
<li>Some attributes like <strong>“class”</strong> become <strong>“className” </strong>(because class refers to JavaScript classes), <strong>“tabindex” </strong>becomes <strong>“tabIndex” </strong>and should be written camelCase</li>
<li>We can’t return more than one HTML element at once, so make sure to wrap them inside a parent tag:</li>
</ul><pre><code class="language-jsx">return (
&lt;div&gt;
&lt;p&gt;Hello&lt;/p&gt;
&lt;p&gt;World&lt;/p&gt;
&lt;/div&gt;
);</code></pre>
<ul>
<li>or as an alternative, you can wrap them with empty tags:</li>
</ul><pre><code class="language-jsx">return (
&lt;&gt;
&lt;p&gt;Hello&lt;/p&gt;
&lt;p&gt;World&lt;/p&gt;
&lt;/&gt;
);</code></pre>
<p>You can also watch my React for Beginners tutorial for more info:</p>
<h2 id="what-are-functional-class-components">What are Functional &amp; Class Components?</h2>
<p>After getting used to the JSX syntax, the next thing to understand is the component-based structure of React. </p>
<p>If you revisit the example code at the top of this post, you'll see that the JSX code is being returned by a function. But the App( ) function is not an ordinary function – it is actually a component. So what is a component?</p>
<h3 id="what-is-a-component">What is a Component?</h3>
<p>A component is an independent, reusable code block which divides the UI into smaller pieces. For example, if we were building the UI of Twitter with React:</p>
<figcaption>The components of Twitter's News Feed</figcaption>
</figure>
<p>Rather than building the whole UI under one single file, we can and we should divide all the sections (marked with red) into smaller independent pieces. In other words, these are components.</p>
<p>React has two types of components: functional<strong> </strong>and class. Let's look at each now in more detail.</p>
<h3 id="functional-components">Functional Components</h3>
<p>The first and recommended component type in React is functional components. A functional component is basically a JavaScript/ES6 function that returns a React element (JSX). According to React's official docs, the function below is a valid functional component:</p><pre><code class="language-jsx">function Welcome(props) {
return &lt;h1&gt;Hello, {props.name}&lt;/h1&gt;;
}</code></pre>
<p>Alternatively, you can also create a functional component with the arrow function definition:</p><pre><code class="language-jsx">const Welcome = (props) =&gt; {
return &lt;h1&gt;Hello, {props.name}&lt;/h1&gt;;
}</code></pre>
<blockquote>This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. — <a href="https://reactjs.org/"><strong>reactjs.org</strong></a></blockquote>
<p>To be able to use a component later, you need to first export it so you can import it somewhere else:</p><pre><code class="language-jsx">function Welcome(props) {
return &lt;h1&gt;Hello, {props.name}&lt;/h1&gt;;
}
export default Welcome;</code></pre>
<p>After importing it, you can call the component like in this example:</p><pre><code class="language-jsx">import Welcome from './Welcome';
function App() {
return (
&lt;div className="App"&gt;
&lt;Welcome /&gt;
&lt;/div&gt;
);
}</code></pre>
<p> So a Functional Component in React:</p>
<ul>
<li>is a JavaScript/ES6 function</li>
<li>must return a React element (JSX)</li>
<li>always starts with a capital letter (naming convention)</li>
<li>takes props as a parameter if necessary</li>
</ul>
<h3 id="what-are-class-components">What are Class Components?</h3>
<p>The second type of component is the class component. Class components are ES6 classes that return JSX. Below, you see our same Welcome function, this time as a class component:</p><pre><code class="language-jsx">class Welcome extends React.Component {
render() {
return &lt;h1&gt;Hello, {this.props.name}&lt;/h1&gt;;
}
}</code></pre>
<p>Different from functional components, class components must have an additional render( ) method for returning JSX.</p>
<h3 id="why-use-class-components">Why Use Class Components?</h3>
<p>We used to use class components because of "state". In the older versions of React (version &lt; 16.8), it was not possible to use state inside functional components.</p>
<p>Therefore, we needed functional components for rendering UI only, whereas we'd use class components for data management and some additional operations (like life-cycle methods). </p>
<p>This has changed with the introduction of React Hooks, and now we can also use states in functional components as well. (I will be covering state and hooks in my following posts, so don't mind them for now).</p>
<p>A Class Component:</p>
<ul>
<li>is an ES6 class, will be a component once it ‘extends’ a React component.</li>
<li>takes Props (in the constructor) if needed</li>
<li>must have a render( )<strong> </strong>method for returning JSX</li>
</ul>
<h2 id="what-are-props-in-react">What are Props in React?</h2>
<p>Another important concept of components is how they communicate. React has a special object called a prop (stands for property) which we use to transport data from one component to another.</p>
<p>But be careful – props only transport data in a one-way flow (only from parent to child components). It is not possible with props to pass data from child to parent, or to components at the same level.</p>
<p>Let's revisit the App( ) function above to see how to pass data with props. </p>
<p>First, we need to define a prop on the Welcome Component and assign a value to it:</p><pre><code class="language-jsx">import Welcome from './Welcome';
function App() {
return (
&lt;div className="App"&gt;
&lt;Welcome name="John"/&gt;
&lt;Welcome name="Mary"/&gt;
&lt;Welcome name="Alex"/&gt;
&lt;/div&gt;
);
}</code></pre>
<p>Props are custom values and they also make components more dynamic. Since the Welcome component is the child here, we need to define props on its parent (App), so we can pass the values and get the result simply by accessing the prop "name":</p><pre><code class="language-jsx">function Welcome(props) {
return &lt;h1&gt;Hello, {props.name}&lt;/h1&gt;;
}</code></pre>
<h3 id="react-props-are-really-useful">React Props Are Really Useful</h3>
<p>So React developers use props to pass data and they're useful for this job. But what about managing data? Props are used for passing data, not for manipulating it. I'm going to cover managing data with React in my future posts here on freeCodeCamp.</p>
<p>In the meantime, if you want to learn more about React &amp; Web development, feel free to <a href="https://www.youtube.com/channel/UC1EgYPCvKCXFn8HlpoJwY3Q" rel="noopener">subscribe to my YouTube channel</a>.</p>
<p>Thank you for reading!</p>
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
