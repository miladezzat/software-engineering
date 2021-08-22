---
card: "https://cdn-media-1.freecodecamp.org/images/1*8ErnbNtq1QtnahH2VSCohQ.jpeg"
tags: [JavaScript]
description: "React is the most popular Front End Library in use today. But"
author: "Milad E. Fahmy"
title: "Everything you need to know to get started in React"
created: "2021-08-16T11:40:59+02:00"
modified: "2021-08-16T11:40:59+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-front-end-development tag-technology tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Everything you need to know to get started in React</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*8ErnbNtq1QtnahH2VSCohQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*8ErnbNtq1QtnahH2VSCohQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*8ErnbNtq1QtnahH2VSCohQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*8ErnbNtq1QtnahH2VSCohQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*8ErnbNtq1QtnahH2VSCohQ.jpeg" alt="Everything you need to know to get started in React">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<blockquote>“The hardest thing about getting started, is getting started” - Guy Kawasaki</blockquote><p>React is the most popular Front End Library in use today. But getting started on React can be hard at times. There is Component Hierarchy, states, props and functional programming involved. This article tries to solve this problem, by giving you a nice and easy way of getting started in React. So without wasting any time, let’s jump in.</p><h3 id="environment">Environment</h3><p>We will use a simple HTML file in this article. Just make sure to include the following script tags in the head section of your HTML file.</p><pre><code class="language-html">&lt;script src="https://unpkg.com/react@16/umd/react.development.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"&gt;&lt;/script&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.js"&gt;&lt;/script&gt;</code></pre><p>So our working file should look like this.</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;My React App&lt;/title&gt;
&lt;script src="https://unpkg.com/react@16/umd/react.development.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"&gt;&lt;/script&gt;
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="root"&gt;&lt;/div&gt;
&lt;script type="text/babel" &gt;
//React code should go here
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
render(){
return &lt;h3&gt;Hello React World.&lt;/h3&gt;
}
}
ReactDOM.render(
&lt;App /&gt;,
document.getElementById('root')
);</code></pre><p>Our App component is an ES6 class which extends the Component class of React. It has a single method for now called <code>render</code>, which returns an <strong>h3</strong> element returning the text ‘Hello React World’. The browser will only render elements returned by the <code>render()</code> method.</p><h4 id="but-wait-a-minute-is-that-render-method-necessary"><strong>But wait a minute, is that render method necessary?</strong></h4><p>Yes, a class component must include a render method. All the other methods are optional.</p><p><code>ReactDOM.render()</code> is rendering the App component in a div element with the id ‘root’. It takes the component as the first parameter and parent div as the second parameter.</p><h4 id="javascript-syntax-extension-jsx-">JavaScript Syntax Extension (JSX)</h4><p>The h3 element we declared in the App component is not HTML, it’s JavaScript Syntax Extension (JSX). JSX is a syntax extension in JavaScript. It enables us to write HTML like JavaScript Objects(JSX) in JavaScript.</p><pre><code class="language-js">class App extends React.Component{
render(){
const element = &lt;h3&gt;Hello React World&lt;/h3&gt;;
return &lt;div&gt;{element}&lt;/div&gt;;
}
}</code></pre><p>JSX gives us the power of JavaScript while writing HTML. Those curly braces <code>{}</code> in the example above tell the React compiler that <strong>element</strong> is a JavaScript variable. Let’s see another more practical example.</p><pre><code class="language-js">render() {
const users = [‘Abdul Moiz’,’Linda Lee’,’John Frank’];
const listItems = users.map(user =&gt; &lt;li&gt;{user}&lt;/li&gt;);
return &lt;ul&gt;{listItems}&lt;/ul&gt;;
}</code></pre><p>In the example above, we have a list of users in an array that we’ve mapped on the list and made an array of <code>li</code> elements. We’ll use this in our <code>ul</code><em> </em>element later.</p><p>JSX is the recommended way and the industry de facto standard to declare your UI in React.</p><h3 id="props">Props</h3><p>Props are the properties passed by the parent component to child components.</p><p>It is a common pattern in React to abstract away the common UI logic in child components. In those cases, it is common for the parent component to pass some data as properties in child components.</p><pre><code class="language-js">class App extends React.Component {
render() {
return &lt;Greet greeting="Hello" /&gt;;
}
}
class Greet extends React.Component{
render(){
return &lt;h3&gt;{this.props.greeting} World&lt;/h3&gt;;
}
}</code></pre><p>In the example above, we have passed a greeting prop to the Greet component and used it in our App component. We can access all the props from the <em>this.props </em>object of our class. In this case, we are accessing <em>greeting</em> as <em>this.props.greeting</em>.</p><h4 id="ok-but-what-type-of-data-can-i-pass-in-props"><strong>OK, but what type of data can I pass in props?</strong></h4><p>Pretty much every default data structure in JavaScript: string literals, numbers, array, objects, and even functions. Yes we can pass functions, but we won’t be getting into that right now.</p><h3 id="state">State</h3><p>State, like props, also holds data, but some different types of data.</p><p>Props hold the data sent by the parent component. State holds the private, dynamic data of the component. State holds the data which changes between multiple renderings of the component.</p><blockquote>Props get passed to the component (like function parameters), whereas state is managed within the component (like variables declared within a function) - React Docs</blockquote><p>Complex? Don’t worry, it will all make sense in a moment.</p><pre><code class="language-js">class App extends React.Component {
constructor(){
super();
this.state = {name :"Abdul Moiz"};
}
changeName(){
this.setState({name : "John Doe"});
}
render(){
return (
&lt;div&gt;
&lt;h3&gt;Hello {this.state.name}&lt;/h3&gt;
&lt;button type='button' onClick=this.changeName.bind(this)}&gt;
Change
&lt;/button&gt;
&lt;/div&gt;
);
}
}</code></pre><p>As we can see, we have to initialize the state in a constructor and then we can use it in the render method. Like props, we are accessing state with the ‘this.state’ object. And on the click event of our <em>Change </em>button, we are changing the value of name in state to ‘John Doe’.</p><h4 id="setstate-"><strong>setState()</strong></h4><p>We are using the <em>setState()</em> method to change our state. <em>setState()</em> is available by default in React Component and is the only way to change state. We are passing an object as the parameter to <em>setState()</em>. React will look at the passed object and will change only the provided keys of the state with the provided values.</p><p><strong>But wait a minute, if <em>setState()</em> is the only way to change the state, does this mean that I cannot change the state straight away?</strong></p><p>Yes, we cannot change the state straight away like this:</p><pre><code>this.state.name = “John Doe”;</code></pre><p>Because when we call <em>setState()</em>, it tells React that data has been changed and we need to re-render the component with the updated data. Updating the state straight away will have no effect on UI.</p><h3 id="event-handlers">Event Handlers</h3><p>Event handlers in React are not very different from event handlers in the DOM. But they have some small yet important differences.</p><p>In the DOM, event handlers are lowercase, but in React, event handlers are camelCase. Secondly, in the DOM, event handlers take value as a string, but in React, event handlers take function reference as value.</p><p>The following is an example of how we handle an event in the DOM:</p><pre><code>&lt;button type=”submit” onclick=”doSomething()”&gt;&lt;/button&gt;</code></pre><p>And here’s how it’s done in React:</p><pre><code>&lt;button type=”submit” onClick=doSomething&gt;&lt;/button&gt;</code></pre><p>If you notice, in the DOM, we’re handling the click event using the <code>onclick</code> (lowercase) DOM property. While in React, we are using the <code>onClick</code> (camelCase) event handler from React. Also, we are passing a string value <code>doSomething()</code> in the DOM. But in React, we are passing the reference of the function <code>doSomething</code> as the value.</p><p>If you want to read about the full list of events provided by React (as usual, there are tons of them), consider reading <a href="https://reactjs.org/docs/events.html#supported-events" rel="noopener">this article</a> from the official docs.</p><p>Tired? Me too, but we are almost there — keep up the learning!</p><h3 id="life-cycle-methods-life-cycle-hooks-">Life Cycle Methods (Life Cycle Hooks)</h3><p>React gives us some special methods called Life Cycle Hooks. These life cycle hooks run at particular times in a the life cycle of a component. Luckily, we can put our own functionality in those life cycle hooks, by overriding them in our component. Let’s look at some of the commonly used life cycle hooks.</p><h4 id="componentdidmount-">componentDidMount()</h4><p>Mounting is the time when the component gets rendered for the first time in the browser. <code>componentDidMount()</code> runs after the component gets mounted. It is a good place to fetch any data or initiate anything.</p><h4 id="componentdidupdate-">componentDidUpdate()</h4><p>As its name suggests, <code>componentDidUpdate()</code> runs after the component gets updated. It is the place to handle data changes. Maybe you want to handle some network requests, or perform calculations based on the changed data. <code>componentDidUpdate()</code> is the place to do all of that.</p><p>Let’s see that in action:</p><pre><code class="language-js">class App extends React.Component {
constructor(){
super();
this.state = {
person : {name : "" , city : ""}
};
}
componentDidMount(){
//make any ajax request
this.setState({
person : {name : "Abdul Moiz",city : "Karachi"}
});
}
componentDidUpdate(){
//because I could'nt come up with a simpler example of //componentDidUpdate
console.log('component has been updated',this.state);
}
render(){
return (
&lt;div&gt;
&lt;p&gt;Name : {this.state.person.name}&lt;/p&gt;
&lt;p&gt;City : {this.state.person.city}&lt;/p&gt;
&lt;/div&gt;
);
}
}</code></pre><p>Our initial state has two properties, name and city, and both have an empty string as value. In <code>componentDidMount()</code><em> </em>we set the state and change name to ‘Abdul Moiz’ and city to ‘Karachi’. Because we changed the state, the component updated as a result of executing <code>componentDidUpdate()</code>.</p><h3 id="conclusion">Conclusion</h3><p>React is here to stay. Learning React can be difficult, but you will love it once you surpass the initial learning curve. This article was meant to make that learning process a little bit easier for you.</p><p>And don’t forget to follow me on <a href="http://twitter.com/@aamoizansari" rel="noopener">Twitter</a>.</p><h4 id="resources">Resources</h4><ul><li><a href="https://reactjs.org/docs/faq-state.html" rel="noopener">https://reactjs.org/docs</a></li><li><a href="http://lucybain.com/blog/2016/react-state-vs-pros/" rel="noopener">http://lucybain.com/blog</a></li><li><a href="https://thinkster.io" rel="noopener">https://thinkster.io</a></li></ul>
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
