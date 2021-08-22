---
card: "https://cdn-media-1.freecodecamp.org/images/1*OEjZQSVvWnGgUF-dTrTS_w.jpeg"
tags: [JavaScript]
description: "by Cory House"
author: "Milad E. Fahmy"
title: "Handling State in React: Four Immutable Approaches to Consider"
created: "2021-08-16T10:23:29+02:00"
modified: "2021-08-16T10:23:29+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-react-native tag-web-development tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Handling State in React: Four Immutable Approaches to Consider</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*OEjZQSVvWnGgUF-dTrTS_w.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*OEjZQSVvWnGgUF-dTrTS_w.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*OEjZQSVvWnGgUF-dTrTS_w.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*OEjZQSVvWnGgUF-dTrTS_w.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*OEjZQSVvWnGgUF-dTrTS_w.jpeg" alt="Handling State in React: Four Immutable Approaches to Consider">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Cory House</p><p>Perhaps the most common point of confusion in React today: state.</p><p>Imagine you have a form for editing a user. It’s common to create a single change handler to handle changes to all form fields. It may look something like this:</p><pre><code class="language-js">updateState(event) {
const {name, value} = event.target;
let user = this.state.user; // this is a reference, not a copy...
user[name] = value; // so this mutates state ?
return this.setState({user});
}</code></pre><p>The concern is on line 4. Line 4 actually mutates state because the user variable is a <em>reference</em> to state. React state should be treated as immutable.</p><p>From the <a href="https://facebook.github.io/react/docs/react-component.html#state" rel="noopener">React docs</a>:</p><blockquote>Never mutate <code>this.state</code> directly, as calling <code>setState()</code> afterwards may replace the mutation you made. Treat <code>this.state</code> as if it were immutable.</blockquote><p>Why?</p><ol><li>setState batches work behind the scenes. This means a manual state mutation may be overridden when setState is processed.</li><li>If you declare a shouldComponentUpdate method, you can’t use a === equality check inside because<em> the object reference will not change</em>. So the approach above has a potential performance impact as well.</li></ol><p><strong>Bottom line</strong>: The example above often works okay, but to avoid edge cases, treat state as immutable.</p><p>Here are four ways to treat state as immutable:</p><h3 id="approach-1-object-assign">Approach #1: Object.assign</h3><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign" rel="noopener">Object.assign</a> creates a copy of an object. The first parameter is the target, then you specify one or more parameters for properties you’d like to tack on. So fixing the example above involves a simple change to line 3:</p><pre><code class="language-js">updateState(event) {
const {name, value} = event.target;
let user = Object.assign({}, this.state.user);
user[name] = value;
return this.setState({user});
}</code></pre><p>On line 3, I’m saying “Create a new empty object and add all the properties on this.state.user to it.” This creates a separate copy of the user object that’s stored in state. Now I’m safe to mutate the user object on line 4 — it’s a completely separate object from the object in state.</p><p>Be sure to polyfill Object.assign since it’s <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign" rel="noopener">unsupported in IE</a> and <a href="https://babeljs.io/docs/usage/polyfill/" rel="noopener">not transpiled by Babel</a>. Four options to consider:</p><ol><li><a href="https://www.npmjs.com/package/object-assign" rel="noopener">object-assign</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign" rel="noopener">The MDN docs</a></li><li><a href="https://babeljs.io/docs/usage/polyfill/" rel="noopener">Babel Polyfill</a></li><li><a href="https://polyfill.io/v2/docs/features/#Object_assign" rel="noopener">Polyfill.io</a></li></ol><h3 id="approach-2-object-spread">Approach #2: Object Spread</h3><p>Object spread is currently a <a href="https://github.com/tc39/proposal-object-rest-spread" rel="noopener">stage 3 feature</a>, and can be <a href="http://babeljs.io/docs/plugins/transform-object-rest-spread/#example" rel="noopener">transpiled by Babel</a>. This approach is more concise:</p><pre><code class="language-js">updateState(event) {
const {name, value} = event.target;
let user = {...this.state.user, [name]: value};
this.setState({user});
}</code></pre><p>On line 3 I’m saying “Use all the properties on this.state.user to create a new object, then set the property represented by [name] to a new value passed on event.target.value”. So this approach works similarly to the Object.assign approach, but has two benefits:</p><ol><li>No polyfill required, since Babel can transpile</li><li>More concise</li></ol><p>You can even use destructuring and inlining to make this a one-liner:</p><pre><code class="language-js">updateState({target}) {
this.setState({user: {...this.state.user, [target.name]: target.value}});
}</code></pre><p>I’m destructuring event in the method signature to get a reference to event.target. Then I’m declaring that state should be set to a copy of this.state.user with the relevant property set to a new value. I like how terse this is. This is currently my favorite approach to writing change handlers. ?</p><p>These two approaches above are the most common and straightforward ways to handle immutable state. Want more power? Check out the other two options below.</p><h3 id="approach-3-immutability-helper">Approach #3: Immutability Helper</h3><p><a href="https://github.com/kolodny/immutability-helper" rel="noopener">Immutability-helper</a> is a handy library for mutating a copy of data without changing the source. This library is suggested in <a href="https://facebook.github.io/react/docs/update.html" rel="noopener">React’s docs</a>.</p><pre><code class="language-js">// Import at the top:
import update from 'immutability-helper';
updateState({target}) {
let user = update(this.state.user, {$merge: {[target.name]: target.value}});
this.setState({user});
}</code></pre><p>On line 5, I’m calling merge, which is <a href="https://github.com/kolodny/immutability-helper#available-commands" rel="noopener">one of many commands</a> provided by immutability-helper. Much like Object.assign, I pass it the target object as the first parameter, then specify the property I’d like to merge in.</p><p>There’s much more to immutability helper than this. It uses a syntax inspired from MongoDB’s query language and offers a <a href="https://github.com/kolodny/immutability-helper#available-commands" rel="noopener">variety of powerful ways to work with immutable data</a>.</p><h3 id="approach-4-immutable-js">Approach #4: Immutable.js</h3><p>Want to programatically enforce immutability? Consider <a href="https://facebook.github.io/immutable-js/" rel="noopener">immutable.js</a>. This library provides immutable data structures.</p><p>Here’s an example, using an immutable map:</p><pre><code class="language-js">
// At top, import immutable
import { Map } from 'immutable';
// Later, in constructor...
this.state = {
// Create an immutable map in state using immutable.js
user: Map({ firstName: 'Cory', lastName: 'House'})
};
updateState({target}) {
// this line returns a new user object assuming an immutable map is stored in state.
let user = this.state.user.set(target.name, target.value);
this.setState({user});
</figure><h3 id="final-tip-consider-using-functional-setstate">Final Tip: Consider Using Functional setState</h3><p>One other wrinkle can bite you:</p><blockquote>setState() does not immediately mutate this.state but creates a pending state transition. Accessing this.state after calling this method can potentially return the existing value.</blockquote><p>Since setState calls are batched, code like this leads to a bug:</p><pre><code class="language-js">updateState({target}) {
this.setState({user: {...this.state.user, [target.name]: target.value}});
doSomething(this.state.user) // Uh oh, setState merely schedules a state change, so this.state.user may still have old value
}</code></pre><p>If you want to run code after a setState call has completed, use the callback form of setState:</p><pre><code class="language-js">updateState({target}) {
this.setState((prevState) =&gt; {
const updatedUser = {...prevState.user, [target.name]: target.value}; // use previous value in state to build new state...
return { user: updatedUser }; // And what I return here will be set as the new state
}, () =&gt; this.doSomething(this.state.user); // Now I can safely utilize the new state I've created to call other funcs...
);
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
