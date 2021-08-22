---
card: "https://cdn-media-1.freecodecamp.org/images/1*tLIXa6jWWjxfB-6AYjm2Hg.jpeg"
tags: [JavaScript]
description: "Read Functional Architecture with React and Redux and learn h"
author: "Milad E. Fahmy"
title: "Removing JavaScript’s “this” keyword makes it a better language. Here’s why."
created: "2021-08-16T11:33:51+02:00"
modified: "2021-08-16T11:33:51+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-technology tag-web-development tag-programming tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">Removing JavaScript’s “this” keyword makes it a better language. Here’s why.</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*tLIXa6jWWjxfB-6AYjm2Hg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*tLIXa6jWWjxfB-6AYjm2Hg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*tLIXa6jWWjxfB-6AYjm2Hg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*tLIXa6jWWjxfB-6AYjm2Hg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*tLIXa6jWWjxfB-6AYjm2Hg.jpeg" alt="Removing JavaScript’s “this” keyword makes it a better language. Here’s why.">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Read <a href="https://read.amazon.com/kp/embed?asin=B0846NRJYR&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_o.hlEbDD02JB2" rel="noopener nofollow"><strong><strong>Functional Architecture with React and Redux</strong></strong></a> and learn how to build apps in function style.</p><p><code>this</code> is of course the source of much confusion in JavaScript. The reason being that <code>this</code> depends on how the function was invoked, not where the function was defined.</p><p>JavaScript without <code>this</code> looks like a better functional programming language.</p><h3 id="this-losing-context">this losing context</h3><p>Methods are functions that are stored in objects. In order for a function to know on which object to work, <code>this</code> is used. <code>this</code> represents the function’s context.</p><p><code>this</code> loses context in many situations. It loses context inside nested functions, it loses context in callbacks.</p><p>Let’s take the case of a timer object. The timer objects waits for the previous call to finish before making a new call. It implements the recursive setTimeout pattern. <a href="https://jsfiddle.net/cristi_salcescu/h3pbc42u/" rel="noopener">In the next example</a>, in nested functions and callbacks, <code>this</code> loses context:</p><pre><code class="language-js">class Timer {
constructor(callback, interval){
this.callback = callback;
this.interval = interval;
this.timerId = 0;
}
executeAndStartTimer(){
this.callback().then(function startNewTimer(){
this.timerId =
setTimeout(this.executeAndStartTimer, this.interval);
});
}
start(){
if(this.timerId === 0){
this.executeAndStartTimer();
}
}
stop(){
if(this.timerId !== 0){
clearTimeout(this.timerId);
this.timerId = 0;
}
}
}
const timer = new Timer(getTodos, 2000);
timer.start();
function getTodos(){
console.log("call");
return fetch("https://jsonplaceholder.typicode.com/todos");
}</code></pre><p><code>this</code> loses context when the method is used as an event handler. Let’s take the case of a React component that builds a search query. In both methods, used as event handlers, <code>this</code> loses context:</p><pre><code class="language-js">class SearchForm extends React.Component {
handleChange(event) {
const newQuery = Object.freeze({ text: event.target.value });
this.setState(newQuery);
}
search() {
const newQuery = Object.freeze({ text: this.state.text });
if (this.props.onSearch) this.props.onSearch(newQuery);
}
render() {
return (
&lt;form&gt;
&lt;input onChange={this.handleChange} value={this.state.text} /&gt;
&lt;button onClick={this.search} type="button"&gt;Search&lt;/button&gt;
&lt;/form&gt;
);
}
}</code></pre><p>There are many solutions for these issues : the <code>bind()</code> method, the that/self pattern, the arrow function.</p><p>For more on how to fix <code>this</code> related issue issues, take a look at <a href="https://medium.freecodecamp.org/what-to-do-when-this-loses-context-f09664af076f" rel="noopener">What to do when “this” loses context</a>.</p><h3 id="this-has-no-encapsulation">this has no encapsulation</h3><p><code>this</code> creates security problems. All members declared on <code>this</code> are public.</p><pre><code class="language-js">class Timer {
constructor(callback, interval){
this.timerId = "secret";
}
}
const timer = new Timer();
timer.timerId; //secret</code></pre><h3 id="no-this-no-custom-prototypes">No this, no custom prototypes</h3><p>What if, instead of trying to fix <code>this</code> losing context and security problems, we get rid of it all together?</p><p>Removing <code>this</code> has a set of implications.</p><p>No <code>this</code> basically means no<code> class</code>, no function constructor, no <code>new</code>, no <code>Object.create()</code>.</p><p>Removing <code>this</code> means no custom prototypes in general.</p><h3 id="a-better-language">A Better Language</h3><p>JavaScript is both a functional programming language and a prototype-based language. If we get rid of <code>this</code>, we are left with JavaScript as a functional programming language. That is even better.</p><p>At the same time, without <code>this</code>, JavaScript offers a new, unique way, of doing Object Oriented Programming without classes and inheritance.</p><h3 id="object-oriented-programming-without-this">Object Oriented Programming without this</h3><p>The questions is how to build objects without <code>this</code>.</p><p>There will be two kind of objects:</p><ul><li>pure data objects</li><li>behavior objects</li></ul><h4 id="pure-data-objects">Pure Data Objects</h4><p>Pure data objects contain only data and have no behavior.</p><p>Any computed field will be fill-in at creation.</p><p>Pure data objects should be immutable. We need to <code>Object.freeze()</code> them at creation .</p><h4 id="behavior-objects">Behavior Objects</h4><p>Behavior objects will be collections of closures sharing the same private state.</p><p><a href="https://jsfiddle.net/cristi_salcescu/8z7mLkca/" rel="noopener">Let’s create</a> the Timer object in a <code>this</code>-less approach.</p><pre><code class="language-js">function Timer(callback, interval){
let timerId;
function executeAndStartTimer(){
callback().then(function makeNewCall(){
timerId = setTimeout(executeAndStartTimer, interval);
});
}
function stop(){
if(timerId){
clearTimeout(timerId);
timerId = 0;
}
}
function start(){
if(!timerId){
executeAndStartTimer();
}
}
return Object.freeze({
start,
stop
});
}
const timer = Timer(getTodos, 2000);
timer.start();</code></pre><p>The <code>timer</code> object has two public methods: <code>start</code> and <code>stop</code>. Everything else is private. There are no <code>this</code> losing context problems as there is no <code>this</code>.</p><p>For more on why to favor a <code>this</code>-less approach when building behavior objects take a look at <a href="https://medium.freecodecamp.org/class-vs-factory-function-exploring-the-way-forward-73258b6a8d15" rel="noopener">Class vs Factory function: exploring the way forward</a>.</p><h4 id="memory">Memory</h4><p>The prototype system is better at memory conservation. All methods are created only once in the prototype object and shared by all instances.</p><p>The memory cost of building behavior objects using closures is noticeable when creating thousands of the same object. In an application we have a few behavior objects. If we take for example a store behavior object, there will be only one instance of it in the application, so there’s no extra memory cost when using closures to built it.</p><p>In an application there may be hundreds or thousand of pure data objects. The pure data objects don’t use closures, so no memory cost.</p><h3 id="components-without-this">Components without this</h3><p><code>this</code> may be required by many components’ frameworks, like React or Vue for example.</p><p>In React, we can create stateless functional components, without <code>this</code>, as pure functions.</p><pre><code class="language-js">function ListItem({ todo }){
return (
&lt;li&gt;
&lt;div&gt;{ todo.title}&lt;/div&gt;
&lt;div&gt;{ todo.userName }&lt;/div&gt;
&lt;/li&gt;
);
}</code></pre><p>We can also create stateful components without <code>this</code> with <a href="https://reactjs.org/docs/hooks-overview.html" rel="noopener">React Hooks</a>. <a href="https://codesandbox.io/s/31v5w58wo1" rel="noopener">Take a look at the next example</a>:</p><pre><code class="language-js">import React, { useState } from "react";
function SearchForm({ onSearch }) {
const [query, setQuery] = useState({ text: "" });
function handleChange(event) {
const newQuery = Object.freeze({ text: event.target.value });
setQuery(newQuery);
}
function search() {
const newQuery = Object.freeze({ text: query.text });
if (onSearch) onSearch(newQuery);
}
return (
&lt;form&gt;
&lt;input type="text" onChange={handleChange} /&gt;
&lt;button onClick={search} type="button"&gt;Search&lt;/button&gt;
&lt;/form&gt;
);
};</code></pre><h3 id="removing-arguments">Removing arguments</h3><p>If we get rid of <code>this</code>, we should also get rid of <code>arguments</code> as they have the same dynamic binding behavior.</p><p>Getting rid of <code>arguments</code> is pretty simple. We just use the new rest parameter syntax. This time the rest parameter is an array object:</p><pre><code class="language-js">function addNumber(total, value){
return total + value;
}
function sum(...args){
return args.reduce(addNumber, 0);
}
sum(1,2,3); //6</code></pre><h3 id="conclusion">Conclusion</h3><p>The best way to avoid <code>this</code> related problems is to not use <code>this</code> at all.</p><p>JavaScript without <code>this</code> can be a better functional programming language.</p><p>We can build encapsulated objects, without using <code>this</code>, as collections of closures.</p><p>With React Hooks we can create <code>this</code>-less stateful components.</p><p>That being said, <code>this</code> can’t be removed from JavaScript without breaking all existing applications. However, something can be done. We can write our own code without <code>this</code> and let it be used in libraries.</p><p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE&amp;source=post_page---------------------------"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the<strong><strong> </strong></strong><a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781&amp;source=post_page---------------------------"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><p><strong><strong>For more on applying functional programming techniques in React take a look at</strong></strong> <strong><strong><a href="https://www.amazon.com/dp/B088FZQ1XN">Functional React</a>.</strong></strong></p><p>Learn <strong><strong>functional React</strong></strong>, in a project-based way, with <a href="https://read.amazon.com/kp/embed?asin=B0846NRJYR&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_o.hlEbDD02JB2" rel="noopener nofollow"><strong><strong>Functional Architecture with React and Redux</strong></strong></a><strong><strong>.</strong></strong></p><p><a href="https://twitter.com/cristi_salcescu" rel="noopener nofollow nofollow noopener nofollow noopener nofollow noopener">Follow on Twitter</a></p>
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
