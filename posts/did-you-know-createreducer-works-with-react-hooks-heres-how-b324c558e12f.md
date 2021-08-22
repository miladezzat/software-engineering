---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca782740569d1a4ca77b1.jpg"
tags: [React]
description: "At the time of this writing, Hooks are in alpha. Their API ca"
author: "Milad E. Fahmy"
title: "Did you know — createReducer Works with React Hooks. Here’s how."
created: "2021-08-16T11:34:48+02:00"
modified: "2021-08-16T11:34:48+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-tech tag-technology tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Did you know — createReducer Works with React Hooks. Here’s how.</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca782740569d1a4ca77b1.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca782740569d1a4ca77b1.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca782740569d1a4ca77b1.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca782740569d1a4ca77b1.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca782740569d1a4ca77b1.jpg" alt="Did you know — createReducer Works with React Hooks. Here’s how.">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>At the time of this writing, <strong>Hooks are in alpha. Their API can change at any time.</strong></p>
<p>I recommend you experiment, have fun, and use Hooks in your side projects, but not in production code until they’re stable.</p>
<h3 id="sourcecodeanddemo">Source Code and Demo</h3>
<p>Here are the <a href="https://github.com/yazeedb/react-createReducer-demo/">GitHub</a> and <a href="https://codesandbox.io/s/github/yazeedb/react-createReducer-demo/tree/master/">Codesandbox</a> links.</p>
<h3 id="usereducer">useReducer</h3>
<p>The <a href="https://reactjs.org/docs/hooks-reference.html#usereducer">React docs</a> have a counter app example demonstrating the <code>useReducer</code> Hook.</p>
<p>For demo purposes, I styled it just a bit.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*pe5b5CE-WaFteXtmzHIyHQ.gif" alt=""></p>
<h4 id="thecomponentcode">The component code</h4>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*vwqAHCV11OFG8lrjjz_05g.png" alt=""></p>
<p>The JSX is simple: it displays the current <code>count</code> with 3 buttons.</p>
<p>The <code>Counter</code> component calls <code>useReducer</code> with a reducer and initial state, which gives back an array with the current <code>state</code> and a <code>dispatch</code> function.</p>
<p>Clicking any of the buttons calls <code>dispatch</code> with an action object.</p>
<h4 id="theinitialstate">The initial state</h4>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*CzA8Zc-Y2f4ATTQRV03w2w.png" alt=""></p>
<h4 id="thereducercode">The reducer code</h4>
<p>The reducer decides how state should change based on the existing state and action object it receives.</p>
<p>If you’ve worked with Redux, you know this setup.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*WDNzQEnj2IqfDxhtmdSgpw.png" alt=""></p>
<p>We see it supports three actions: <code>reset</code>, <code>increment</code>, and <code>decrement</code>.</p>
<p><code>reset</code>: Sets the <code>count</code> to 0.</p>
<p><code>increment</code>: Increases <code>count</code> by 1.</p>
<p><code>decrement</code>: Decreases <code>count</code> by 1.</p>
<p>Any other action results in the reducer returning its given <code>state</code>.</p>
<h3 id="createreducer">createReducer</h3>
<p>You may also know about <code>createReducer</code>.</p>
<pre><code class="language-js">function createReducer(initialState, handlers) {
return function reducer(state = initialState, action) {
if (handlers.hasOwnProperty(action.type)) {
return handlers[action.type](state, action);
} else {
return state;
}
};
}
</code></pre>
<p>It’s a helper function <a href="https://redux.js.org/recipes/reducingboilerplate">from the Redux docs</a> that lets you describe reducers as mappings from action types to handlers.</p>
<h4 id="nomoreswitchcases">No more switch cases</h4>
<p>Instead of <code>switch</code> cases, we can use functions for every action type.</p>
<p>An added bonus is that if the given action doesn’t match, <code>createReducer</code> takes care of the <code>default</code> case by returning <code>state</code>.</p>
<h4 id="workswithusereducer">Works with useReducer</h4>
<p>Since <code>useReducer</code>'s based on the same principles, they’re perfectly compatible!</p>
<p>I’ll create a new project file, <code>createReducer.js</code>.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*F6Mc6LYYEioMih5krutO2g.png" alt=""></p>
<p>And export the helper function from it:</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*VQY7hwr2irQeUtC2v546-g.png" alt=""></p>
<p>Then use it like so:</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*l2XXR2nNj-RHeU5TK8GnqA.png" alt=""></p>
<h4 id="cleanerreducers">Cleaner reducers</h4>
<p>This, in my opinion, is much nicer.</p>
<p>Just give it the initial state, and an object mapping action types to their corresponding functions.</p>
<p>You can access <code>state</code> and <code>action</code> in each of those functions, so you have all the info you need!</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*pe5b5CE-WaFteXtmzHIyHQ.gif" alt=""></p>
<p>The functionality hasn’t changed at all.</p>
<h3 id="stilljustareducer">Still Just a Reducer</h3>
<p>This works because <code>useReducer</code> doesn’t care <em>how</em> you create a reducer.</p>
<p>Whether it’s <code>switch</code>, <code>if/else</code>, or <code>createReducer</code>, <em>just make sure your end result is a reducer</em>.</p>
<p>I hope you enjoyed this brief piece!</p>
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
