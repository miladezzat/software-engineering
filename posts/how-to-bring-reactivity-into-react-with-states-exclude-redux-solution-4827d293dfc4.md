---
card: "https://cdn-media-1.freecodecamp.org/images/1*yVuEqJEkG2-r_gKzdLHl5g.jpeg"
tags: [Programming]
description: "If you know how to display a React component — that’s great. "
author: "Milad E. Fahmy"
title: "How to Bring Reactivity into React with States"
created: "2021-08-16T11:46:12+02:00"
modified: "2021-08-16T11:46:12+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-web-development tag-javascript tag-react tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to Bring Reactivity into React with States</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*yVuEqJEkG2-r_gKzdLHl5g.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*yVuEqJEkG2-r_gKzdLHl5g.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*yVuEqJEkG2-r_gKzdLHl5g.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*yVuEqJEkG2-r_gKzdLHl5g.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*yVuEqJEkG2-r_gKzdLHl5g.jpeg" alt="How to Bring Reactivity into React with States">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<blockquote>This is part of my “React for beginners” series on introducing React, its core features and best practices to follow. More articles are coming!</blockquote><blockquote><a href="/news/p/2994c09b-d550-4eb6-b281-a83e553240c7/">&lt; Previous</a> | <a href="/news/the-beginners-collection-of-powerful-tips-and-tricks-for-react-f2e3833c6f12/">Next &gt;</a></blockquote><p>If you know <a href="https://medium.freecodecamp.org/a-quick-guide-to-learn-react-and-how-its-virtual-dom-works-c869d788cd44" rel="noopener">how to display a React component</a> — that’s great. Now, let’s give our components their own data.</p><p><strong>Disclaimer:</strong> This article focuses on React’s built-in state. Note that component state and Redux are not incompatible, as their purpose is different.</p><p>In my opinion, component state is specific to the component scope (for form completion). Besides, Redux state helps with sharing the same state among many components.</p><h3 id="do-i-need-a-state">Do I need a state?</h3><p>To learn states, let’s create a <code>Question</code> component. It will display a yes/no question and ask for an answer.</p><pre><code class="language-js">class Question extends React.Component {
constructor(props) { // Init props and state
super(props);
this.state = { answered: false };
this.answerQuestion = this.answerQuestion.bind(this);
}
answerQuestion({target}){ // State update (user answers to the question)
let answer = target.value === 'true' ? true : false;
this.setState({ answered: true, answer });
}
render() { // Component template in JSX
if(this.state.answered) {
return &lt;p&gt;You already answered this question ({this.state.answer ? 'yes' : 'no'})&lt;/p&gt;
}
return (
&lt;p&gt;
&lt;span&gt;{this.props.label}&lt;/span&gt;
&lt;label&gt;&lt;input type="radio" name="answer" value="true" onChange={this.answerQuestion}/&gt;Yes&lt;/label&gt;
&lt;label&gt;&lt;input type="radio" name="answer" value="false" onChange={this.answerQuestion}/&gt;No&lt;/label&gt;
&lt;/p&gt;
);
}
// Somewhere in constructor function
this.state = {
questions: [ 'Do you like bananas ?', 'Are you a developer ?' ]
};
// Somewhere in render function
this.state.questions.map(question =&gt; &lt;Question label={question}/&gt;)
}</code></pre><p>Components get props from other components. If those props change, then the component will update.</p><p>Actually, you already know how it works — but let’s take the example of a <code>Survey </code>containing some <code>Question</code>.</p><p>The <code>Survey</code> contains question labels in its state and gives it to <code>Question</code> as a property.</p><p>When the <code>Survey</code> updates its state (calls <code>setState</code>), the <code>render</code> function triggers. If so, it sends a request for <code>Question</code> rendering (details in <a href="https://reactjs.org/docs/optimizing-performance.html#avoid-reconciliation" rel="noopener">React doc</a>).</p><h3 id="adopt-container-pattern">Adopt container pattern</h3><p>Decoupling the view and the rest of the code has always been a big concern among developers. That’s why most of the design patterns used in frameworks extend from the MVC pattern.</p><p>If you use React with Redux, you already know the <strong>container </strong>pattern. Actually, it’s a built-in Redux feature through the connect function.</p><pre><code class="language-js">/*
Question and QuestionContainer are both regular React components
QuestionContainer renders a single Question component
and provides access to redux stuff through props
*/
const QuestionContainer =
connect(mapStateToProps, mapDispatchToProps)(Question);</code></pre><p>It’s time to split the <code>Question</code> component into two components.</p><p><code>Question</code> will be responsible for rendering props. This kind of component is called either functional, presentational, or a dumb component.</p><p><code>QuestionContainer</code> will deal with state management.</p><pre><code class="language-js">const Question = (props) =&gt;
&lt;p&gt;
&lt;span&gt;{props.label}&lt;/span&gt;
&lt;label&gt;&lt;input type="radio" name="answer" value="true" onChange={props.answerQuestion}/&gt;Yes&lt;/label&gt;
&lt;label&gt;&lt;input type="radio" name="answer" value="false" onChange={props.answerQuestion}/&gt;No&lt;/label&gt;
&lt;/p&gt;
class QuestionContainer extends React.Component {
constructor(props) {
super(props);
this.state = { answered: false };
this.answerQuestion = this.answerQuestion.bind(this);
}
answerQuestion({target}){
let answer = target.value === 'true' ? true : false;
this.setState({ answered: true, answer });
}
render() {
if(props.answered) {
return &lt;p&gt;You already answered this question (props.answer ? 'yes' : 'no'})&lt;/p&gt;
}
// Here is the trick
return &lt;Question label={this.props.label} answerQuestion={this.answerQuestion}/&gt;
}
}</code></pre><p>For comparison with the MVC design pattern, <code>Question</code> is a <strong>View </strong>and <code>QuestionContainer</code> is a <strong>Controller</strong>.</p><p>Other components which need <code>Question</code>will now use <code>QuestionContainer</code> instead of <code>Question</code>. This consideration is quite accepted in the community.</p><h3 id="be-careful-about-setstate-anti-pattern">Be careful about setState anti-pattern</h3><p>Using this <code>setState</code> is pretty straightforward.</p><p>Pass the next state as the first and only parameter. It will update current state properties with the new passed values.</p><pre><code class="language-js">// Very bad pratice: do not use this.state and this.props in setState !
this.setState({ answered: !this.state.answered, answer });
// With quite big states: the tempatation becomes bigger
// Here keep the current state and add answer property
this.setState({ ...this.state, answer });</code></pre><p>To sum up, don’t use <code>this.state</code>and <code>this.props</code>inside <code>setState</code> calls.</p><p>Those variables may not have the values you expect. React optimizes state changes. It squashes multiples changes into one for performance issues (before Virtual DOM optimizations).</p><pre><code class="language-js">// Note the () notation around the object which makes the JS engine
// evaluate as an expression and not as the arrow function block
this.setState((prevState, props)
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
