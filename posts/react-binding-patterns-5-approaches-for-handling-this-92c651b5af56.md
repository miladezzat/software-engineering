---
card: "https://cdn-media-1.freecodecamp.org/images/1*Brf51FVp5subpavq4ax8ow.jpeg"
tags: [React]
description: "JavaScript’s this keyword behavior has confused developers fo"
author: "Milad E. Fahmy"
title: "React Binding Patterns: 5 Approaches for Handling  this "
created: "2021-08-16T10:28:15+02:00"
modified: "2021-08-16T10:28:15+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-reactjs tag-react-native tag-javascript tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">React Binding Patterns: 5 Approaches for Handling `this`</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Brf51FVp5subpavq4ax8ow.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*Brf51FVp5subpavq4ax8ow.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*Brf51FVp5subpavq4ax8ow.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Brf51FVp5subpavq4ax8ow.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Brf51FVp5subpavq4ax8ow.jpeg" alt="React Binding Patterns: 5 Approaches for Handling `this`">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>JavaScript’s <strong>this </strong>keyword behavior has confused developers for ages.</p><p>There are at least five ways to handle the <strong>this </strong>context in React. Let’s consider the merits of each approach.</p><h4 id="1-use-react-createclass">1. Use React.createClass</h4><p>If you use <a href="https://facebook.github.io/react/docs/top-level-api.html#react.createclass" rel="noopener">React.createClass</a>, <a href="https://facebook.github.io/react/docs/tutorial.html#events" rel="noopener">React autobinds all functions to <strong>this</strong></a>. So the <strong>this </strong>keyword is bound to your component’s instance automatically:</p><pre><code>// This magically works with React.createClass// because `this` is bound for you.onChange={this.handleChange}</code></pre><p>However, with the advent of ES6 classes, this non-standard approach to creating classes isn’t the future of React. In fact, <a href="https://facebook.github.io/react/blog/#other-use-cases" rel="noopener">createClass is likely to be extracted from React core in a future release</a>.</p><h4 id="2-bind-in-render">2. Bind in Render</h4><p>The rest of these approaches assume you’re declaring React components via ES6 classes. If you use an ES6 class, React no longer autobinds. One way to resolve this is to call bind in render:</p><pre><code>onChange={this.handleChange.bind(this)}</code></pre><p>This approach is terse and clear, however, there are performance implications since the function is reallocated on every render. This sounds like a big deal, but <strong>the performance implications of this approach are unlikely to be noticeable in most apps.</strong> So ruling this out at the start for performance reasons is a premature optimization. That said, <a href="https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f#.hv3l5i8vb" rel="noopener">here’s an example where the performance impact of this approach mattered</a>.</p><p>Bottom-line, if you’re experiencing performance issues, <a href="https://facebook.github.io/react/docs/reusable-components.html#no-autobinding" rel="noopener">avoid using bind or arrow functions in render</a>.</p><h4 id="3-use-arrow-function-in-render">3. Use Arrow Function in Render</h4><p>This approach is similar to #2. You can avoid changing the <strong>this</strong> context by using an arrow function in render:</p><pre><code>onChange={e =&amp;gt; this.handleChange(e)}</code></pre><p>This approach has the same potential performance impact as #2.</p><p>The alternative approaches below are worth considering because they offer superior performance for little extra cost.</p><h4 id="4-bind-in-constructor">4. Bind in Constructor</h4><p>One way to avoid binding in render is to bind in the constructor (the other approach is discussed in #5 below).</p><pre><code class="language-js">constructor(props) {
super(props);
this.handleChange = this.handleChange.bind(this);
}</code></pre><p>This is the approach <a href="https://facebook.github.io/react/docs/reusable-components.html#es6-classes" rel="noopener">currently recommended in the React docs</a> for “better performance in your application”. This is also the approach I use in “<a href="https://app.pluralsight.com/courses/react-redux-react-router-es6" rel="noopener">Building Applications with React and Redux in ES6</a>” on Pluralsight.</p><p>However, on most apps the performance implications of approach #2 and #3 won’t be noticeable, so the readability and maintenance advantages of approach #2 and #3 may outweigh performance concerns in many apps.</p><p>But if you’re willing to use stage-2 features, the final option below is likely your best bet.</p><h4 id="5-use-arrow-function-in-class-property">5. Use Arrow Function in Class Property</h4><p>This technique relies upon the <a href="https://github.com/jeffmo/es-class-public-fields" rel="noopener">proposed class property feature</a>. To use this approach, you must enable <a href="http://babeljs.io/docs/plugins/transform-class-properties" rel="noopener">transform-class-properties</a> or <a href="http://babeljs.io/docs/plugins/preset-stage-2/" rel="noopener">enable stage-2 in Babel</a>.</p><pre><code class="language-js">handleChange = () =&gt; {
// call this function from render
// and this.whatever in here works fine.
var HelloWorld = React.createClass({
getInitialState() {
return { message: 'Hi' };
},
logMessage() {
// this magically works because React.createClass autobinds.
console.log(this.state.message);
},
render() {
return (
&lt;input type="button" value="Log" onClick={this.logMessage} /&gt;
);
}
});
// Approach 2: Bind in Render
class HelloWorld extends React.Component {
constructor(props) {
super(props);
this.state = { message: 'Hi' };
}
logMessage() {
// This works because of the bind in render below.
console.log(this.state.message);
}
render() {
return (
&lt;input type="button" value="Log" onClick={this.logMessage.bind(this)} /&gt;
);
}
}
// Approach 3: Use Arrow Function in Render
class HelloWorld extends React.Component {
constructor(props) {
super(props);
this.state = { message: 'Hi' };
}
logMessage() {
// This works because of the arrow function in render below.
console.log(this.state.message);
}
render() {
return (
&lt;input type="button" value="Log" onClick={() =&gt; this.logMessage()} /&gt;
);
}
}
// Approach 4: Bind in Constructor
class HelloWorld extends React.Component {
constructor(props) {
super(props);
this.state = { message: 'Hi' };
this.logMessage = this.logMessage.bind(this);
}
logMessage() {
// This works because of the bind in the constructor above.
console.log(this.state.message);
}
render() {
return (
&lt;input type="button" value="Log" onClick={this.logMessage} /&gt;
);
}
}
// Approach 5: Arrow Function in Class Property
class HelloWorld extends React.Component {
// Note that state is a property,
// so no constructor is needed in this case.
state = {
message: 'Hi'
};
logMessage = () =&gt; {
// This works because arrow funcs adopt the this binding of the enclosing scope.
console.log(this.state.message);
};
render() {
return (
&lt;input type="button" value="Log" onClick={this.logMessage} /&gt;
);
}
</figure><p>Have other ways you handle this? Please chime in via the comments.</p><p>Huge thanks to <a href="https://twitter.com/dan_abramov" rel="noopener">@dan_abramov</a>, <a href="http://www.twitter.com/kentcdodds" rel="noopener">@kentcdodds</a>, and <a href="http://www.twitter.com/dmosher" rel="noopener">@dmosher</a> for their valuable input and review!</p><p><strong><em>Cory House</em></strong> is the author of “<a href="https://app.pluralsight.com/courses/react-redux-react-router-es6" rel="noopener">Building Applications with React and Redux in ES6</a>”, “<a href="https://www.pluralsight.com/courses/react-flux-building-applications" rel="noopener">Building Applications with React and Flux</a>”, “<a href="https://www.google.com/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=1&amp;cad=rja&amp;uact=8&amp;ved=0ahUKEwiK1pXx89nJAhUujoMKHeuWAEUQFggcMAA&amp;url=https%3A%2F%2Fwww.pluralsight.com%2Fcourses%2Fwriting-clean-code-humans&amp;usg=AFQjCNEBfkBoN-IgCn_1jFUqWDAUIxcmAw&amp;sig2=Ub9Wup4k4mrw_ffPgYu3tA" rel="noopener">Clean Code: Writing Code for Humans</a>” and multiple other courses on Pluralsight. He is a Software Architect at VinSolutions, Microsoft MVP, and <a href="http://www.bitnative.com/training/" rel="noopener">trains software developers internationally</a> on software practices like front-end development and clean coding.</p>
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
