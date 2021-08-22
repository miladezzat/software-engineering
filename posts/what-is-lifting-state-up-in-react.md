---
card: "/images/default.jpg"
tags: [React]
description: "Here is a simple and practical example what it means to lift"
author: "Milad E. Fahmy"
title: "What Is Lifting State Up in React?"
created: "2021-08-15T19:26:25+02:00"
modified: "2021-08-15T19:26:25+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">What Is "Lifting State Up" in React?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/05/what-is-lifting-state-up-in-react.png 300w,
/news/content/images/size/w600/2021/05/what-is-lifting-state-up-in-react.png 600w,
/news/content/images/size/w1000/2021/05/what-is-lifting-state-up-in-react.png 1000w,
/news/content/images/size/w2000/2021/05/what-is-lifting-state-up-in-react.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/05/what-is-lifting-state-up-in-react.png" alt="What Is &quot;Lifting State Up&quot; in React?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Here is a simple and practical example what it means to "lift state up" in React, and how it can help you build your applications.</p>
<p>Lifting state up is a common pattern that is essential for React developers to know. It helps you avoid more complex (and often unnecessary) patterns for managing your state.</p>
<p>How does it do that? Let's see how through a simple example.</p>
<blockquote>Want to build amazing React apps using best practices from front to back? Check out the <a href="https://reactbootcamp.com"><strong>React Bootcamp</strong></a>.</blockquote>
<h2 id="breaking-down-our-todo-app">Breaking down our Todo App</h2>
<p>Let's start with a basic todo application, which consists of three components: <code>TodoCount</code>, <code>TodoList</code>, and <code>AddTodo</code>. </p>
<p>All of these components, as their name suggests, are going to need to share some common state. </p>
<p>If you look at <code>TodoCount</code>, this is where you're going to display, up at the top of your app, how many total to dues you have in your application. </p>
<p><code>TodoList</code> is going to be where you show all of your todos. It has some initial state with these three items ("item 1", "item 2", "item 3") which you'll display within an unordered list. </p>
<p>And finally, you have <code>AddTodo</code>. This consists of a form, where you want to be able to add a new item to this list. Right now you're just logging the todo that you type into the input to the console:</p><pre><code class="language-js">// src/App.js
import React from "react";
export default function App() {
return (
&lt;&gt;
&lt;TodoCount /&gt;
&lt;TodoList /&gt;
&lt;AddTodo /&gt;
&lt;/&gt;
);
}
function TodoCount() {
return &lt;div&gt;Total Todos: &lt;/div&gt;;
}
function TodoList() {
const [todos, setTodos] = React.useState(["item 1", "item 2", "item 3"]);
return (
&lt;ul&gt;
{todos.map((todo) =&gt; (
&lt;li key={todo}&gt;{todo}&lt;/li&gt;
))}
&lt;/ul&gt;
);
}
function AddTodo() {
function handleSubmit(event) {
event.preventDefault();
const todo = event.target.elements.todo.value;
console.log(todo);
}
return (
&lt;form onSubmit={handleSubmit}&gt;
&lt;input type="text" id="todo" /&gt;
&lt;button type="submit"&gt;Add Todo&lt;/button&gt;
&lt;/form&gt;
);
}</code></pre>
<h2 id="why-should-you-care-about-lifting-state-up">Why should you care about lifting state up?</h2>
<p>How can you use the concept of lifting state up to help finish your application?</p>
<p>These components need to share some state, some todo state. You need to share that todo state order to display the number of todos as well as to update your todo list.</p>
<p>This is where the concept of lifting state up comes in. </p>
<blockquote>We lift up state to a common ancestor of components that need it, so that they can all share in the state. This allows us to more easily share state among all of these components that need rely upon it. </blockquote>
<p>What common ancestor should you lift up your state to so all of the components can read from and update that state? The <code>App</code> component.</p>
<p>Here's what your app should now look like:</p><pre><code class="language-js">// src/App.js
import React from "react";
export default function App() {
const [todos, setTodos] = React.useState(["item 1", "item 2", "item 3"]);
return (
&lt;&gt;
&lt;TodoCount /&gt;
&lt;TodoList /&gt;
&lt;AddTodo /&gt;
&lt;/&gt;
);
}
function TodoCount() {
return &lt;div&gt;Total Todos: &lt;/div&gt;;
}
function TodoList() {
return (
&lt;ul&gt;
{todos.map((todo) =&gt; (
&lt;li key={todo}&gt;{todo}&lt;/li&gt;
))}
&lt;/ul&gt;
);
}
function AddTodo() {
function handleSubmit(event) {
event.preventDefault();
const todo = event.target.elements.todo.value;
console.log(todo);
}
return (
&lt;form onSubmit={handleSubmit}&gt;
&lt;input type="text" id="todo" /&gt;
&lt;button type="submit"&gt;Add Todo&lt;/button&gt;
&lt;/form&gt;
);
}</code></pre>
<h2 id="yow-to-pass-state-down">Yow to Pass State Down</h2>
<p>However, there's a small problem. </p>
<p><code>TodoList</code> doesn't have access to the <code>todos</code> state variable, so you need to pass that down from <code>App</code>:</p>
<p>You can do that with components in React using props. </p>
<p>On <code>TodoList</code>, let's add a prop named <code>todos</code>. You can destructure <code>todos</code> from the props object. This allows you to see your todo items once again.</p>
<p>Now what about displaying the total number of todos within the <code>TodoCount</code> component? </p>
<p>This is another instance in which you can pass down the data as a prop, since <code>TodoCount</code> relies upon that state. Once again, we'll provide the same prop, <code>todos</code>, destructure it from the props object and display the total number of todos using <code>todos.length</code>:</p><pre><code class="language-js">import React from "react";
export default function App() {
const [todos, setTodos] = React.useState(["item 1", "item 2", "item 3"]);
return (
&lt;&gt;
&lt;TodoCount todos={todos} /&gt;
&lt;TodoList todos={todos} /&gt;
&lt;AddTodo /&gt;
&lt;/&gt;
);
}
function TodoCount({ todos }) {
return &lt;div&gt;Total Todos: {todos.length}&lt;/div&gt;;
}
function TodoList({ todos }) {
return (
&lt;ul&gt;
{todos.map((todo) =&gt; (
&lt;li key={todo}&gt;{todo}&lt;/li&gt;
))}
&lt;/ul&gt;
);
}</code></pre>
<h2 id="how-to-pass-callbacks-down">How to Pass Callbacks Down</h2>
<p>Now the last step is to be able to add a new todo. </p>
<p>This is where your setter function, <code>setTodos</code>, comes in. To update your todo state, you don't need to pass down both values, the variable and the setter function – all you need to do is pass down <code>setTodos</code>. </p>
<p>You'll pass it down to <code>addTodo</code> as a prop of the same name (setTodos) and destructure it from props. </p>
<p>As you can see, you're using your form on submit to get access to the input's value – whatever was typed into it, which you're putting within a local variable named <code>todo</code>.</p>
<p>Instead of needing to pass down the current todos array, you can just use an inner function to get the previous todo's value. This allows you to get previous todos and just return what you want the new state to be. </p>
<p>This new state will be an array, in which you will spread all of the previous todos and add your new todo as the last element in that array:</p><pre><code class="language-js">import React from "react";
export default function App() {
const [todos, setTodos] = React.useState(["item 1", "item 2", "item 3"]);
return (
&lt;&gt;
&lt;TodoCount todos={todos} /&gt;
&lt;TodoList todos={todos} /&gt;
&lt;AddTodo setTodos={setTodos} /&gt;
&lt;/&gt;
);
}
function AddTodo({ setTodos }) {
function handleSubmit(event) {
event.preventDefault();
const todo = event.target.elements.todo.value;
setTodos(prevTodos =&gt; [...prevTodos, todo]);
}
return (
&lt;form onSubmit={handleSubmit}&gt;
&lt;input type="text" id="todo" /&gt;
&lt;button type="submit"&gt;Add Todo&lt;/button&gt;
&lt;/form&gt;
);
}</code></pre>
<blockquote>Not only by lifting state up and passing its state variable down to the components that need to read from it can we use this pattern – we can also use it for callbacks to be able to update state.</blockquote>
<p>Once you add a new item to your todo list, it's immediately added to state. Then you see your <code>TodoList</code> component re-render to display that new item, as well as <code>TodoCount</code> to show the total number of todos which is now 4:</p>
<h2 id="conclusion">Conclusion</h2>
<p>Lifting state up is an important pattern for React developers because sometimes we have state that's located within a particular component that also needs to be shared with sibling components. </p>
<p>Instead of using an entire state management library like Redux or React Context, we can just lift the state up to the closest common ancestor and pass both the state variables the state values down as well as any callbacks to update that state. </p>
<h2 id="readyforthenextstepjointhereactbootcamp">Ready for the next step? Join The React Bootcamp</h2>
<p><strong><a href="http://bit.ly/join-react-bootcamp">The React Bootcamp</a></strong> takes everything you should know about learning React and bundles it into one comprehensive package, including videos, cheatsheets, plus special bonuses.</p>
<p>Gain the insider information hundreds of developers have already used to master React, find their dream jobs, and take control of their future:</p>
<p><a href="http://bit.ly/join-react-bootcamp"><img src="https://reedbarger.nyc3.digitaloceanspaces.com/react-bootcamp-banner.png" alt="The React Bootcamp"></a><br>
<em>Click here to be notified when it opens</em>
</p>
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
