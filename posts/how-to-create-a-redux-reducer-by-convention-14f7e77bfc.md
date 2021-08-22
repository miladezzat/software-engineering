---
card: "https://cdn-media-1.freecodecamp.org/images/1*xGMl8gP0E8ssx_mweswYQA.jpeg"
tags: [Redux]
description: "Discover Functional JavaScript was named one of the best new "
author: "Milad E. Fahmy"
title: "How to create a Redux reducer by convention"
created: "2021-08-16T11:32:43+02:00"
modified: "2021-08-16T11:32:43+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-redux tag-javascript tag-functional-programming tag-technology tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">How to create a Redux reducer by convention</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*xGMl8gP0E8ssx_mweswYQA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*xGMl8gP0E8ssx_mweswYQA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*xGMl8gP0E8ssx_mweswYQA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*xGMl8gP0E8ssx_mweswYQA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*xGMl8gP0E8ssx_mweswYQA.jpeg" alt="How to create a Redux reducer by convention">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE" rel="nofollow noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener nofollow noopener nofollow noopener"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the <a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781" rel="noopener nofollow nofollow noopener"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><p>Redux is a very popular state management library. It simplifies the original Flux architecture by combining all stores and the dispatcher in a single store object.</p><p>Redux promotes the use of functional programming for managing state. It introduces the reducer function concept.</p><h3 id="data-flow">Data flow</h3><p>Let’s look at the data flow inside the Redux store.</p><p>An action is a plain object that contains all information necessary to do that action.</p><p>An action creator is a function that creates an action object.</p><h3 id="reducer">Reducer</h3><p>A reducer is a pure function that takes state and action as parameters and returns the new state.</p><p>There may be many reducers managing parts of the root state. We can combine them together with <code>combineReducers()</code> utility function and create the root reducer.</p><p>Here is how the <code>todos</code> reducer may look like:</p><pre><code>import matchesProperty from "lodash/matchesProperty";
function todos(todos = [], action) {
switch (action.type) {
case "add_todo":
const id = getMaxId(todos) + 1;
const newTodo = { ...action.todo, id };
return todos.concat([newTodo]);
case "remove_todo":
const index = todos.findIndex(matchesProperty("id",
action.todo.id));
return [...todos.slice(0, index), ...todos.slice(index + 1)];
case "reset_todos":
return action.todos;
default:
return state;
}
}
export default todos;</code></pre><p>The <code>state</code> in this case is the list of to-dos. We can apply to its actions like <code>add_todo</code>, <code>remove_todo</code>, <code>reset_todos</code>.</p><h3 id="reducer-by-convention">Reducer by convention</h3><p>I would like to get rid of the <code>switch</code> statement in the reducer. Functions should be small and do one thing.</p><p>Let’s split the reducer into small pure functions with names matching the action types. I will call these setter functions. Each of them takes state and action as parameters and returns the new state.</p><pre><code>function remove_todo(todos, action) {
const index = todos.findIndex(matchesProperty("id",
action.todo.id));
return [...todos.slice(0, index), ...todos.slice(index + 1)];
}
function reset_todos(todos, action) {
return action.todos;
}
function add_todo(todos, action) {
const id = getMaxId(todos) + 1;
const newTodo = { ...action.todo, id};
return todos.concat([newTodo]);
}</code></pre><h4 id="redux-actions">redux-actions</h4><p>I would like to combine all these small functions together to create the original reducer function. We can use the <code>handleActions()</code> utility function from <a href="https://redux-actions.js.org/" rel="noopener">redux-actions</a> for this.</p><pre><code>import { handleActions } from "redux-actions";
const reducer = handleActions(
{ remove_todo, reset_todos, add_todo },
[]
);
export default reducer;</code></pre><p>The setter functions will run by convention. When an action with type <code>remove_todo</code> comes in, the <code>remove_todo()</code> setter function will be executed.</p><p><a href="https://codesandbox.io/s/26m5xrxry" rel="noopener">Here is the sample code on codesandbox</a>.</p><p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE&amp;source=post_page---------------------------"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the<strong><strong> </strong></strong><a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781&amp;source=post_page---------------------------"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><p><strong><strong>For more on applying functional programming techniques in React take a look at</strong></strong> <a href="https://read.amazon.com/kp/embed?asin=B07S1NLFTS&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_Pko5CbA30383Y" rel="noopener nofollow"><strong><strong>Functional React</strong></strong></a><strong><strong>.</strong></strong></p><p>Learn <strong><strong>functional React</strong></strong>, in a project-based way, with <a href="https://read.amazon.com/kp/embed?asin=B0846NRJYR&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_o.hlEbDD02JB2" rel="noopener nofollow"><strong><strong>Functional Architecture with React and Redux</strong></strong></a><strong><strong>.</strong></strong></p><p><a href="https://twitter.com/cristi_salcescu" rel="noopener nofollow nofollow noopener nofollow noopener nofollow noopener">Follow on Twitter</a></p>
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
