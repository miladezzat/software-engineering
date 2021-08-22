---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca0bd740569d1a4ca4a7f.jpg"
tags: [React]
description: With the release of React Hooks I have seen a lot of posts co
author: "Milad E. Fahmy"
title: "How to write a React component without using classes or hooks"
created: "2021-08-15T19:32:58+02:00"
modified: "2021-08-15T19:32:58+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to write a React component without using classes or hooks</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca0bd740569d1a4ca4a7f.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca0bd740569d1a4ca4a7f.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca0bd740569d1a4ca4a7f.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca0bd740569d1a4ca4a7f.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca0bd740569d1a4ca4a7f.jpg" alt="How to write a React component without using classes or hooks">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>With the release of React Hooks I have seen a lot of posts comparing class components to functional components. Functional components are nothing new in React, however it was not possible before version 16.8.0 to create a stateful component with access to lifecycle hooks using only a function. Or was it?</p>
<p>Call me a pedant (many people already do!) but when we talk about class components we are technically talking about components created by functions. In this post I would like to use React to demonstrate what is actually happening when we write a class in JavaScript.</p>
<h2 id="classesvsfunctions">Classes vs Functions</h2>
<p>First, I would like to very briefly show how what are commonly referred to as functional and class components relate to one another. Here's a simple component written as a class:</p>
<pre><code class="language-js">class Hello extends React.Component {
render() {
return &lt;p&gt;Hello!&lt;/p&gt;
}
}
</code></pre>
<p>And here it is written as a function:</p>
<pre><code class="language-js">function Hello() {
return &lt;p&gt;Hello!&lt;/p&gt;
}
</code></pre>
<p>Notice that the Functional component is just a render method. Because of this, these components were never able to hold their own state or perform any side effects at points during their lifecycle. Since React 16.8.0 it has been possible to create stateful functional components thanks to hooks, meaning that we can turn a component like this:</p>
<pre><code class="language-js">class Hello extends React.Component {
state = {
sayHello: false
}
componentDidMount = () =&gt; {
fetch('greet')
.then(response =&gt; response.json())
.then(data =&gt; this.setState({ sayHello: data.sayHello });
}
render = () =&gt; {
const { sayHello } = this.state;
const { name } = this.props;
return sayHello ? &lt;p&gt;{`Hello ${name}!`}&lt;/p&gt; : null;
}
}
</code></pre>
<p>Into a functional component like this:</p>
<pre><code class="language-js">function Hello({ name }) {
const [sayHello, setSayHello] = useState(false);
useEffect(() =&gt; {
fetch('greet')
.then(response =&gt; response.json())
.then(data =&gt; setSayHello(data.sayHello));
}, []);
return sayHello ? &lt;p&gt;{`Hello ${name}!`}&lt;/p&gt; : null;
}
</code></pre>
<p>The purpose of this article isn't to get into arguing that one is better than the other, as there are hundreds of posts on that topic already! The reason for showing the two components above is so that we can be clear about what React actually does with them.</p>
<p>In the case of the class component, React creates an instance of the class using the <code>new</code> keyword:</p>
<pre><code class="language-js">const instance = new Component(props);
</code></pre>
<p>This instance is an object. When we say a component is a class, what we actually mean is that it is an object. This new object component can have its own state and methods, some of which can be lifecycle methods (render, componentDidMount, etc.) which React will call at the appropriate points during the app's lifetime.</p>
<p>With a functional component, React just calls it like an ordinary function (because it is an ordinary function!) and it returns either HTML or more React components.</p>
<p>Methods with which to handle component state and trigger effects at points during the component's lifecycle now need to be imported if they are required. These work entirely based on the order in which they are called by each component which uses them, as they do not know which component has called them. This is why you can only call hooks at the top level of the component and they can't be called conditionally.</p>
<h2 id="theconstructorfunction">The Constructor Function</h2>
<p>JavaScript doesn't have classes. I know it looks like it has classes, we've just written two! But under the hood JavaScript is not a class-based language, it is prototype-based. Classes were added with the ECMAScript 2015 specification (also referred to as ES6) and are just a cleaner syntax for existing functionality.</p>
<p>Let's have a go at rewriting a React class component without using the class syntax. Here is the component which we are going to recreate:</p>
<pre><code class="language-js">class Counter extends React.Component {
constructor(props) {
super(props);
this.state = {
count: 0
}
this.handleClick = this.handleClick.bind(this);
}
handleClick() {
const { count } = this.state;
this.setState({ count: count + 1 });
}
render() {
const { count } = this.state;
return (
&lt;&gt;
&lt;button onClick={this.handleClick}&gt;+1&lt;/button&gt;
&lt;p&gt;{count}&lt;/p&gt;
&lt;/&gt;
);
}
}
</code></pre>
<p>This renders a button which increments a counter when clicked, it's a classic! The first thing we need to create is the constructor function, this will perform the same actions that the <code>constructor</code> method in our class performs apart from the call to <code>super</code> because that's a class-only thing.</p>
<pre><code class="language-js">function Counter(props) {
this.state = {
count: 0
}
this.handleClick = this.handleClick.bind(this);
}
</code></pre>
<p>This is the function which React will call with the <code>new</code> keyword. When a function is called with <code>new</code> it is treated as a constructor function; a new object is created, the <code>this</code> variable is pointed to it and the function is executed with the new object being used wherever <code>this</code> is mentioned.</p>
<p>Next, we need to find a home for the <code>render</code> and <code>handleClick</code> methods and for that we need to talk about the prototype chain.</p>
<h2 id="theprototypechain">The Prototype Chain</h2>
<p>JavaScript allows inheritance of properties and methods between objects through something known as the prototype chain.</p>
<p>Well, I say inheritence, but I actually mean delegation. Unlike in other languages with classes, where properties are copied from a class to its instances, JavaScript objects have an internal protoype link which points to another object. When you call a method or attempt to access a property on an object, JavaScript first checks for the property on the object itself. If it can't find it there then it checks the object's prototype (the link to the other object). If it still can't find it, then it checks the prototype's prototype and so on up the chain until it either finds it or runs out of prototypes to check.</p>
<p>Generally speaking, all objects in JavaScript have <code>Object</code> at the top of their prototype chain; this is how you have access to methods such as <code>toString</code> and <code>hasOwnProperty</code> on all objects. The chain ends when an object is reached with <code>null</code> as its prototype, this is normally at <code>Object</code>.</p>
<p>Let's try to make things clearer with an example.</p>
<pre><code class="language-js">const parentObject = { name: 'parent' };
const childObject = Object.create(parentObject, { name: { value: 'child' } });
console.log(childObject);
</code></pre>
<p>First we create <code>parentObject</code>. Because we've used the object literal syntax this object will be linked to <code>Object</code>. Next we use <code>Object.create</code> to create a new object using <code>parentObject</code> as its prototype.</p>
<p>Now, when we use <code>console.log</code> to print our <code>childObject</code> we should see:</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/08/childObject-1.jpg" alt="console output of childObject"></p>
<p>The object has two properties, there is the <code>name</code> property which we just set and the <code>__proto___</code> property. <code>__proto__</code> isn't an actual property like <code>name</code>, it is an accessor property to the internal prototype of the object. We can expand these to see our prototype chain:</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/08/childObject_expanded-1.jpg" alt="expanded output of childObject"></p>
<p>The first <code>__proto___</code> contains the contents of <code>parentObject</code> which has its own <code>__proto___</code> containing the contents of <code>Object</code>. These are all of the properties and methods that are available to <code>childObject</code>.</p>
<p>It can be quite confusing that the prototypes are found on a property called <code>__proto__</code>! It's important to realise that <code>__proto__</code> is only a reference to the linked object. If you use <code>Object.create</code> like we have above, the linked object can be anything you choose, if you use the <code>new</code> keyword to call a constructor function then this linking happens automatically to the constructor function's <code>prototype</code> property.</p>
<p>Ok, back to our component. Since React calls our function with the <code>new</code> keyword, we now know that to make the methods available in our component's prototype chain we just need to add them to the <code>prototype</code> property of the constructor function, like this:</p>
<pre><code class="language-js">Counter.prototype.render = function() {
const { count } = this.state;
return (
&lt;&gt;
&lt;button onClick={this.handleClick}&gt;+1&lt;/button&gt;
&lt;p&gt;{count}&lt;/p&gt;
&lt;/&gt;
);
},
Counter.prototype.handleClick = function () {
const { count } = this.state;
this.setState({ count: count + 1 });
}
</code></pre>
<h2 id="staticmethods">Static Methods</h2>
<p>This seems like a good time to mention static methods. Sometimes you might want to create a function which performs some action that pertains to the instances you are creating - but it doesn't really make sense for the function to be available on each object's <code>this</code>. When used with classes they are called Static Methods. I'm not sure if they have a name when not used with classes!</p>
<p>We haven't used any static methods in our example, but React does have a few static lifecycle methods and we did use one earlier with <code>Object.create</code>. It's easy to declare a static method on a class, you just need to prefix the method with the <code>static</code> keyword:</p>
<pre><code class="language-js">class Example {
static staticMethod() {
console.log('this is a static method');
}
}
</code></pre>
<p>And it's equally easy to add one to a constructor function:</p>
<pre><code class="language-js">function Example() {}
Example.staticMethod = function() {
console.log('this is a static method');
}
</code></pre>
<p>In both cases you call the function like this:</p>
<pre><code class="language-js">Example.staticMethod()
</code></pre>
<h2 id="extendingreactcomponent">Extending React.Component</h2>
<p>Our component is almost ready, there are just two problems left to fix. The first problem is that React needs to be able to work out whether our function is a constructor function or just a regular function. This is because it needs to know whether to call it with the <code>new</code> keyword or not.</p>
<p>Dan Abramov wrote a great blog post <a href="https://overreacted.io/how-does-react-tell-a-class-from-a-function/">about this</a>, but to cut a long story short, React looks for a property on the component called <code>isReactComponent</code>. We could get around this by adding <code>isReactComponent: {}</code> to <code>Counter.prototype</code> (I know, you would expect it to be a boolean but <code>isReactComponent</code>'s value is an empty object. You'll have to read his article if you want to know why!) but that would only be cheating the system and it wouldn't solve problem number two.</p>
<p>In the <code>handleClick</code> method we make a call to <code>this.setState</code>. This method is not on our component, it is "inherited" from <code>React.Component</code> along with <code>isReactComponent</code>. If you remember the <a href="#the-prototype-chain">prototype chain section</a> from earlier, we want our component instance to first inherit the methods on <code>Counter.prototype</code> and then the methods from <code>React.Component</code>. This means that we want to link the properties on <code>React.Component.prototype</code> to <code>Counter.prototype.__proto__</code>.</p>
<p>Fortunately there's a method on <code>Object</code> which can help us with this:</p>
<pre><code class="language-js">Object.setPrototypeOf(Counter.prototype, React.Component.prototype);
</code></pre>
<h2 id="itworks">It Works!</h2>
<p>That's everything we need to do to get this component working with React without using the class syntax. Here's the code for the component in one place if you would like to copy it and try it out for yourself:</p>
<pre><code class="language-js">function Counter(props) {
this.state = {
count: 0
};
this.handleClick = this.handleClick.bind(this);
}
Counter.prototype.render = function() {
const { count } = this.state;
return (
&lt;&gt;
&lt;button onClick={this.handleClick}&gt;+1&lt;/button&gt;
&lt;p&gt;{count}&lt;/p&gt;
&lt;/&gt;
);
}
Counter.prototype.handleClick = function() {
const { count } = this.state;
this.setState({ count: count + 1 });
}
Object.setPrototypeOf(Counter.prototype, React.Component.prototype);
</code></pre>
<p>As you can see, it's not as nice to look at as before. In addtion to making JavaScript more accessible to developers who are used to working with traditional class-based languages, the class syntax also makes the code a lot more readable.</p>
<p>I'm not suggesting that you should start writing your React components in this way (in fact, I would actively discourage it!). I only thought it would be an interesting exercise which would provide some insight into how JavaScript inheritence works.</p>
<hr>
<p>Although you don't need to understand this stuff to write React components, it certainly can't hurt. I expect there will be occassions when you are fixing a tricky bug where understanding how prototypal inheritence works will make all the difference.</p>
<p>I hope you have found this article interesting and/or enjoyable. You can find more posts that I have written on my blog at <a href="https://hellocode.dev">hellocode.dev</a>. Thank you.</p>
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
