---
card: "https://cdn-media-1.freecodecamp.org/images/1*kdZr8L9pUOgosVNWqMSmlQ.png"
tags: [JavaScript]
description: "by Saurabh Misra"
author: "Milad E. Fahmy"
title: "This is why we need to bind event handlers in Class Components in React"
created: "2021-08-16T11:44:35+02:00"
modified: "2021-08-16T11:44:35+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-tech tag-programming tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">This is why we need to bind event handlers in Class Components in React</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*kdZr8L9pUOgosVNWqMSmlQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*kdZr8L9pUOgosVNWqMSmlQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*kdZr8L9pUOgosVNWqMSmlQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*kdZr8L9pUOgosVNWqMSmlQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*kdZr8L9pUOgosVNWqMSmlQ.png" alt="This is why we need to bind event handlers in Class Components in React">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
constructor( props ){
super( props );
this.handleClick = this.handleClick.bind(this);
}
handleClick(event){
// your event handling logic
}
render(){
return (
&lt;button type="button"
onClick={this.handleClick}&gt;
Click Me
&lt;/button&gt;
);
}
}
ReactDOM.render(
&lt;Foo /&gt;,
document.getElementById("app")
);</code></pre><p>In this article, we are going to find out why we need to do this.</p><p>I would recommend reading about <code>.bind()</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind" rel="noopener">here</a> if you do not already know what it does.</p><h3 id="blame-javascript-not-react"><strong>Blame JavaScript, Not React</strong></h3><p>Well, laying blame sounds a bit harsh. This is not something we need to do because of the way React works or because of JSX. This is because of the way the <code>this</code> binding works in JavaScript.</p><p>Let’s see what happens if we do not bind the event handler method with its component instance:</p><pre><code class="language-jsx">class Foo extends React.Component{
constructor( props ){
super( props );
}
handleClick(event){
console.log(this); // 'this' is undefined
}
render(){
return (
&lt;button type="button" onClick={this.handleClick}&gt;
Click Me
&lt;/button&gt;
);
}
}
ReactDOM.render(
&lt;Foo /&gt;,
document.getElementById("app")
);</code></pre><p>If you run this code, click on the “Click Me” button and check your console. You will see <code>undefined</code> printed to the console as the value of <code>this</code> from inside the event handler method. The <code>handleClick()</code> method seems to have <strong>lost</strong> its context (component instance) or <code>this</code> value.</p><h3 id="how-this-binding-works-in-javascript"><strong>How ‘this’ binding works in JavaScript</strong></h3><p>As I mentioned, this happens because of the way <code>this</code> binding works in JavaScript. I won’t go into a lot of detail in this post, but <a href="/news/the-complete-guide-to-this-in-javascript/">here</a> is a great resource to understand how the <code>this</code> binding works in JavaScript.</p><p>But relevant to our discussion here, the value of <code>this</code> inside a function depends upon how that function is invoked.</p><h4 id="default-binding"><strong>Default Binding</strong></h4><pre><code class="language-js">function display(){
console.log(this); // 'this' will point to the global object
}
display(); </code></pre><p>This is a plain function call. The value of <code>this</code> inside the <code>display()</code> method in this case is the window — or the global — object in non-strict mode. In strict mode, the <code>this</code> value is <code>undefined</code>.</p><h4 id="implicit-binding"><strong>Implicit binding</strong></h4><pre><code class="language-js">var obj = {
name: 'Saurabh',
display: function(){
console.log(this.name); // 'this' points to obj
}
};
obj.display(); // Saurabh </code></pre><p>When we call a function in this manner — preceded by a context object — the <code>this</code> value inside <code>display()</code> is set to <code>obj</code>.</p><p>But when we assign this function reference to some other variable and invoke the function using this new function reference, we get a different value of <code>this</code> inside <code>display()</code> .</p><pre><code class="language-js">var name = "uh oh! global";
var outerDisplay = obj.display;
outerDisplay(); // uh oh! global</code></pre><p>In the above example, when we call <code>outerDisplay()</code>, we don’t specify a context object. It is a plain function call without an owner object. In this case, the value of <code>this</code> inside <code>display()</code> falls back to <strong>default binding</strong><em>. </em>It points to the global object or <code>undefined</code> if the function being invoked uses strict mode.</p><p>This is especially applicable while passing such functions as callbacks to another custom function, a third-party library function, or a built-in JavaScript function like <code>setTimeout</code> .</p><p>Consider the <code>setTimeout</code> dummy definition as shown below, and then invoke it.</p><pre><code class="language-js">// A dummy implementation of setTimeout
function setTimeout(callback, delay){
//wait for 'delay' milliseconds
callback();
}
setTimeout( obj.display, 1000 );</code></pre><p>We can figure out that when we call <code>setTimeout</code>, JavaScript internally assigns <code>obj.display</code> to its argument <code>callback</code> .</p><pre><code class="language-js">callback = obj.display;</code></pre><p>This assignment operation, as we have seen before, causes the <code>display()</code> function to lose its context. When this callback is eventually invoked inside <code>setTimeout</code>, the <code>this</code> value inside <code>display()</code> falls back to <strong>default binding</strong>.</p><pre><code class="language-js">var name = "uh oh! global";
setTimeout( obj.display, 1000 );
// uh oh! global</code></pre><h4 id="explicit-hard-binding"><strong>Explicit Hard Binding</strong></h4><p>To avoid this, we can <strong>explicitly hard bind</strong> the <code>this</code> value to a function by using the <code>bind()</code> method.</p><pre><code class="language-js">var name = "uh oh! global";
obj.display = obj.display.bind(obj);
var outerDisplay = obj.display;
outerDisplay();
// Saurabh</code></pre><p>Now, when we call <code>outerDisplay()</code>, the value of <code>this</code> points to <code>obj</code> inside <code>display()</code> .</p><p>Even if we pass <code>obj.display</code> as a callback, the <code>this</code> value inside <code>display()</code> will correctly point to <code>obj</code> .</p><h3 id="recreating-the-scenario-using-only-javascript"><strong>Recreating the scenario using only JavaScript</strong></h3><p>In the beginning of this article, we saw this in our React component called <code>Foo</code> . If we did not bind the event handler with <code>this</code> , its value inside the event handler was set as <code>undefined</code>.</p><p>As I mentioned and explained, this is because of the way <code>this</code> binding works in JavaScript and not related to how React works. So let’s remove the React-specific code and construct a similar pure JavaScript example to simulate this behavior.</p><pre><code class="language-jsx">class Foo {
constructor(name){
this.name = name
}
display(){
console.log(this.name);
}
}
var foo = new Foo('Saurabh');
foo.display(); // Saurabh
// The assignment operation below simulates loss of context
// similar to passing the handler as a callback in the actual
// React Component
var display = foo.display;
display(); // TypeError: this is undefined</code></pre><p>We are not simulating actual events and handlers, but instead we are using synonymous code. As we observed in the React Component example, the <code>this</code> value was <code>undefined</code> as the context was lost after passing the handler as a callback — synonymous with an assignment operation. This is what we observe here in this non-React JavaScript snippet as well.</p><p>“Wait a minute! Shouldn’t the <code>this</code> value point to the global object, since we are running this in non-strict mode according to the rules of default binding?” you might ask.</p><p><strong>No.</strong> This is why:</p><blockquote>The bodies of <em>class declarations</em> and <em>class expressions</em> are executed in <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode" rel="noopener">strict mode</a>, that is the constructor, static and prototype methods. Getter and setter functions are executed in strict mode.</blockquote><p>You can read the full article <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes" rel="noopener">here</a>.</p><p>So, to prevent the error, we need to bind the <code>this</code> value like this:</p><pre><code class="language-jsx">class Foo {
constructor(name){
this.name = name
this.display = this.display.bind(this);
}
display(){
console.log(this.name);
}
}
var foo = new Foo('Saurabh');
foo.display(); // Saurabh
var display = foo.display;
display(); // Saurabh</code></pre><p>We don’t need to do this in the constructor, and we can do this somewhere else as well. Consider this:</p><pre><code class="language-jsx">class Foo {
constructor(name){
this.name = name;
}
display(){
console.log(this.name);
}
}
var foo = new Foo('Saurabh');
foo.display = foo.display.bind(foo);
foo.display(); // Saurabh
var display = foo.display;
display(); // Saurabh</code></pre><p>But the constructor is the most optimal and efficient place to code our event handler bind statements, considering that this is where all the initialization takes place.</p><h4 id="why-don-t-we-need-to-bind-this-for-arrow-functions"><strong>Why don’t we need to bind ‘<code>this’</code> for Arrow functions?</strong></h4><p>We have two more ways we can define event handlers inside a React component.</p><ul><li><a href="https://babeljs.io/docs/plugins/transform-class-properties/" rel="noopener"><strong>Public Class Fields Syntax(Experimental)</strong></a></li></ul><pre><code class="language-jsx">class Foo extends React.Component{
handleClick = () =&gt; {
console.log(this);
}
render(){
return (
&lt;button type="button" onClick={this.handleClick}&gt;
Click Me
&lt;/button&gt;
);
}
}
ReactDOM.render(
&lt;Foo /&gt;,
document.getElementById("app")
);</code></pre><ul><li><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions" rel="noopener"><strong>Arrow function in the callback</strong></a></li></ul><pre><code class="language-jsx">class Foo extends React.Component{
handleClick(event){
console.log(this);
}
render(){
return (
&lt;button type="button" onClick={(e) =&gt; this.handleClick(e)}&gt;
Click Me
&lt;/button&gt;
);
}
}
ReactDOM.render(
&lt;Foo /&gt;,
document.getElementById("app")
);</code></pre><p>Both of these use the arrow functions introduced in ES6. When using these alternatives, our event handler is already automatically bound to the component instance, and we do not need to bind it in the constructor.</p><p>The reason is that in the case of arrow functions, <code>this</code> is bound <strong>lexically</strong>. This means that it uses the context of the enclosing function — or global — scope as its <code>this</code> value.</p><p>In the case of the public class fields syntax example, the arrow function is enclosed inside the <code>Foo</code> class — or constructor function — so the context is the component instance, which is what we want.</p><p>In the case of the arrow function as callback example, the arrow function is enclosed inside the <code>render()</code> method, which is invoked by React in the context of the component instance. This is why the arrow function will also capture this same context, and the <code>this</code> value inside it will properly point to the component instance.</p><p>For more details regarding lexical <code>this</code> binding, check out <a href="https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch2.md#lexical-this" rel="noopener">this excellent resource</a>.</p><h3 id="to-make-a-long-story-short"><strong>To make a long story short</strong></h3><p>In Class Components in React, when we pass the event handler function reference as a callback like this</p><pre><code class="language-jsx">&lt;button type="button" onClick={this.handleClick}&gt;Click Me&lt;/button&gt;</code></pre><p>the event handler method loses its <strong>implicitly bound</strong> context. When the event occurs and the handler is invoked, the <code>this</code> value falls back to <strong>default binding</strong> and is set to <code>undefined</code> , as class declarations and prototype methods run in strict mode.</p><p>When we bind the <code>this</code> of the event handler to the component instance in the constructor, we can pass it as a callback without worrying about it losing its context.</p><p>Arrow functions are exempt from this behavior because they use<strong> lexical</strong> <code>this</code> <strong>binding </strong>which automatically binds them to the scope they are defined in.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
