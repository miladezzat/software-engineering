---
card: "https://cdn-media-1.freecodecamp.org/images/1*3WTslHrSuJfqlj3qZRRFPQ.png"
tags: [JavaScript]
description: "This tutorial will give you a basic understanding of React by"
author: "Milad E. Fahmy"
title: "Learn React in 5 minutes - A React.js tutorial for beginners"
created: "2021-08-16T10:14:38+02:00"
modified: "2021-08-16T10:14:38+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-tech tag-programming tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">Learn React in 5 minutes - A React.js tutorial for beginners</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*3WTslHrSuJfqlj3qZRRFPQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*3WTslHrSuJfqlj3qZRRFPQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*3WTslHrSuJfqlj3qZRRFPQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*3WTslHrSuJfqlj3qZRRFPQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*3WTslHrSuJfqlj3qZRRFPQ.png" alt="Learn React in 5 minutes - A React.js tutorial for beginners">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>This tutorial will give you a basic understanding of React by building a <strong>very</strong> &nbsp;simple application. I’ll leave out <strong>everything</strong> which I don’t think is core.</p><p>And then if it sparks your interest, and you want to learn more, you can check out our <a href="https://scrimba.com/g/glearnreact?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=glearnreact_5_minute_article">free React course</a> on Scrimba.</p><p>But as for now, let's focus on the basics!</p><h3 id="the-setup">The setup</h3><p>When getting started with React, you should use the simplest setup possible: an HTML file which imports the <code>React</code> and the <code>ReactDOM</code> libraries using script tags.</p><p>It looks like this:</p><pre><code class="language-html">&lt;html&gt;
&lt;head&gt;
&lt;script src="https://unpkg.com/react@16/umd/react.development.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="root"&gt;&lt;/div&gt;
&lt;script type="text/babel"&gt;
/*
ADD REACT CODE HERE
*/
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><p>We’ve also imported Babel, as React uses something called JSX to write markup. We’ll need to transform the JSX into plain JavaScript, so that the browser can understand it.</p><p>There are more two things I want you to notice:</p><ol><li>The <code>&lt;div&gt;</code> with the id of <code>#root</code>. This is the entry point for our app. This is where our entire app will live.</li><li>The <code>&lt;script type="text/babel"&gt;</code> tag in the body. This is where we’ll write our React code.</li></ol><p>If you want to experiment with the code, check out <a href="https://scrimba.com/c/cmGe8Cp?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=glearnreact_5_minute_article">this Scrimba playground.</a></p><h3 id="components">Components</h3><p>Everything in React is a component, and these usually take the form of JavaScript classes. You create a component by extending upon the <code>React-Component</code> class. Let’s create a component called <code>Hello</code>:</p><pre><code class="language-jsx">class Hello extends React.Component {
render() {
return &lt;h1&gt;Hello world!&lt;/h1&gt;;
}
}
</code></pre><p>You then define the methods for the component. In our example, we only have one method, and it’s called <code>render()</code>.</p><p>Inside <code>render()</code> you’ll return a description of what you want React to draw on the page. In the case above, we simply want it to display an <code>h1</code> tag with the text <em>Hello world!</em> inside it.</p><p>To get our tiny application to render on the screen, we also have to use <code>ReactDOM.render()</code>:</p><pre><code class="language-jsx">ReactDOM.render(
&lt;Hello /&gt;,
document.getElementById("root")
);
&lt;Hello message="my friend" /&gt;,
document.getElementById("root")
);
</code></pre><p>This prop is called <code>message</code> and has the value “my friend”. We can access this prop inside the Hello component by referencing <code>this.props.message</code>, like this:</p><pre><code class="language-jsx">class Hello extends React.Component {
render() {
return &lt;h1&gt;Hello {this.props.message}!&lt;/h1&gt;;
}
}
constructor(){
super();
this.state = {
message: "my friend (from state)!"
};
}
render() {
return &lt;h1&gt;Hello {this.state.message}!&lt;/h1&gt;;
}
}
</code></pre><p>Before we set the state, we have to call <code>super()</code> in the constructor. This is because <code>this</code> is uninitialized before <code>super()</code> has been called.</p><h4 id="changing-the-state">Changing the state</h4><p>To modify the state, simply call <strong>this.setState(),</strong> passing in the new state object as the argument. We’ll do this inside a method which we’ll call <code>updateMessage</code>.</p><pre><code class="language-jsx">class Hello extends React.Component {
constructor(){
super();
this.state = {
message: "my friend (from state)!"
};
this.updateMessage = this.updateMessage.bind(this);
}
updateMessage() {
this.setState({
message: "my friend (from changed state)!"
});
}
render() {
return &lt;h1&gt;Hello {this.state.message}!&lt;/h1&gt;;
}
}
</code></pre><p>Note: To make this work, we also had to bind the <code>this</code> keyword to the <code>updateMessage</code> method. Otherwise we couldn’t have accessed <code>this</code> in the method.</p><h3 id="event-handlers">Event Handlers</h3><p>The next step is to create a button to click on, so that we can trigger the <code>updateMessage()</code> method.</p><p>So let’s add a button to the <code>render()</code> method:</p><pre><code class="language-jsx">render() {
return (
&lt;div&gt;
&lt;h1&gt;Hello {this.state.message}!&lt;/h1&gt;
&lt;button onClick={this.updateMessage}&gt;Click me!&lt;/button&gt;
&lt;/div&gt;
)
}
</code></pre><p>Here, we’re hooking an event listener onto the button, listening for the <strong>onClick</strong> event. When this is triggered, we call the <strong>updateMessage</strong> method.</p><p>Here’s the entire component:</p><pre><code class="language-jsx">class Hello extends React.Component {
constructor(){
super();
this.state = {
message: "my friend (from state)!"
};
this.updateMessage = this.updateMessage.bind(this);
}
updateMessage() {
this.setState({
message: "my friend (from changed state)!"
});
}
render() {
return (
&lt;div&gt;
&lt;h1&gt;Hello {this.state.message}!&lt;/h1&gt;
&lt;button onClick={this.updateMessage}/&gt;Click me!&lt;/button&gt;
&lt;/div&gt;
)
}
}
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
