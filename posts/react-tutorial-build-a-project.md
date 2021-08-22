---
card: "/images/default.jpg"
tags: [React]
description: Welcome to the complete React tutorial for 2021. This guide s
author: "Milad E. Fahmy"
title: "The Complete React Tutorial for 2021 – Learn Major React Concepts by Building a Project"
created: "2021-08-15T19:26:41+02:00"
modified: "2021-08-15T19:26:41+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-react-hooks tag-state-management tag-javascript tag-jsx ">
<header class="post-full-header">
<h1 class="post-full-title">The Complete React Tutorial for 2021 – Learn Major React Concepts by Building a Project</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/04/the-complete-react-tutorial-2021.png 300w,
/news/content/images/size/w600/2021/04/the-complete-react-tutorial-2021.png 600w,
/news/content/images/size/w1000/2021/04/the-complete-react-tutorial-2021.png 1000w,
/news/content/images/size/w2000/2021/04/the-complete-react-tutorial-2021.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/04/the-complete-react-tutorial-2021.png" alt="The Complete React Tutorial for 2021 – Learn Major React Concepts by Building a Project">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Welcome to the complete React tutorial for 2021. This guide should help you become effective with React as quickly as possible as you build a complete application along the way.</p>
<p>Compared to many tutorials you might have gone through before, this one is meant to be thoroughly practical from start to finish. </p>
<p>You will learn how to create an entire React application all within around 100 lines of code, which makes use of many of the core concepts of React: hooks, state management, forms, JSX elements, components, props, styling, and conditionals. </p>
<p>And best of all, you will learn all of these concepts while coding yourself, hands-on. Let's get started!</p>
<blockquote>Looking for the complete guide to becoming a hired React developer? Check out the <a href="https://reactbootcamp.com"><strong>React Bootcamp</strong></a>.</blockquote>
<h2 id="how-to-bootstrap-our-react-project">How to Bootstrap our React Project</h2>
<p>We're going to create our React application by going to the website <a href="https://react.new">react.new</a>. </p>
<p>What this will do is create a new code sandbox for us. We can use code sandbox to create and develop complete React applications without having to install anything on our computer. </p>
<p>Once you visit react.new, you will see your code editor and, on the right hand side, we see a live version of our application to which we can make changes:</p>
<blockquote>Quick tip: Make sure to hit command/ctrl S. Doing so will fork our sandbox and create a special URL that we can revisit in the future. </blockquote>
<p>Right now we're looking at our app component, which is the only component that's being displayed in our application. If we look at our file explorer on the left, we'll see app is being imported and rendered here within this index.js file. </p><pre><code class="language-js">// src/index.js
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
const rootElement = document.getElementById("root");
ReactDOM.render(
&lt;StrictMode&gt;
&lt;App /&gt;
&lt;/StrictMode&gt;,
rootElement
);</code></pre>
<p>What does all of this code do?</p>
<p>It simply "renders" or displays our app by injecting it into an index.html file, which is what we see on the right hand side of the page. </p>
<p>The code also finds and puts our app in the so-called root element (a div with the id of "root"). If you want see where that element is, you can find it within our public folder, specifically in the index.html file. </p>
<h2 id="how-to-use-jsx">How to Use JSX</h2>
<p>Now that we have a working React app, let's start building it and changing what we see.</p>
<p>Let's begin within our div by removing this h2 element, and within our h1, just calling our app "Todo List": </p>
<p>What we are working with here is called <strong>JSX</strong>. It looks very similar to HTML, but is in fact JavaScript. We use it to build the structure of our application, just as we would use HTML. </p>
<blockquote>We can use any standard HTML elements within JSX: divs, any heading element, paragraph, spans, buttons, and so on. </blockquote>
<p>It's important to note that there are some minor differences between JSX and HTML. </p>
<p>The attributes that we use on JSX are slightly different than in normal HTML elements. They are written in the camelcase style, which is a standard way of writing variables or properties in JavaScript. </p>
<p>For example, to apply a class on a JSX element, we use an attribute called <code>className</code>. For normal HTML, that would just be called <code>class</code>. </p><pre><code class="language-js">// src/App.js
import "./styles.css";
export default function App() {
return (
&lt;div className="App"&gt;
&lt;h1&gt;Todo List&lt;/h1&gt;
&lt;/div&gt;
);
}</code></pre>
<p>If we use <code>class</code> instead of <code>className</code> for JSX, we're going to get a warning saying class is an invalid DOM property:</p>
<h2 id="how-to-create-a-list-of-todo-elements">How to Create a List of Todo Elements</h2>
<p>Since we're making a todo application, let's create our todo list underneath our h1 header. </p>
<p>We could begin by making an unordered list with some list items as children elements. Each todo would be listed within an <code>li</code> element:</p><pre><code class="language-js">// src/App.js
import "./styles.css";
export default function App() {
return (
&lt;div className="App"&gt;
&lt;h1&gt;Todo List&lt;/h1&gt;
&lt;ul&gt;
&lt;li&gt;Todo Item&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
);
}</code></pre>
<p>We can do something better as React developers, however. Instead, let's make a dedicated component that is responsible for displaying our todos. </p>
<h2 id="how-to-create-new-react-components">How to Create New React Components</h2>
<p><strong>Components</strong> are the backbone of any React application. </p>
<p>We use components to separate different parts of our user interface. This makes them reusable wherever we need them across our app, it better organizes our code, and it makes it easier to understand our projects.</p>
<blockquote>Components fulfill an important concept in programming which is called "separation of concerns." This means it is preferable for each part of our component to have its own clearly defined role and responsibilities, separate from any other component.</blockquote>
<p>Just as we have an App component, we can create a component to be displayed within App. Since it is a list of todos, let's call it "TodoList":</p><pre><code class="language-js">// src/App.js
import "./styles.css";
export default function App() {
return (
&lt;div className="App"&gt;
&lt;h1&gt;Todo List&lt;/h1&gt;
&lt;TodoList /&gt; {/* component with single tag */}
&lt;/div&gt;
);
}</code></pre>
<h2 id="react-component-rules">React Component rules</h2>
<p>Every component must begin with a capital letter. And once a component is declared, it can be written and used very similarly to an HTML element. </p>
<p>A component can consist of just one tag or two tags. If it doesn't have anything between the two tags, which are called <strong>children</strong>, it should only have as one tag as the code above displays: <code>&lt;TodoList /&gt;</code>. </p>
<p>Additionally, if a component or element consists of just one tag, it must be self-closing. Meaning, it must end in a forward slash (like <code>&lt;TodoList /&gt;</code> and not <code>&lt;TodoList&gt;</code>).</p>
<p>We are attempting to display our TodoList component, but we haven't created it yet. To do that, we can create another function component like App, with the name TodoList. </p>
<p>At this point, we're going to get this error saying nothing was returned from render:</p>
<p>We need to return something, specifically some JSX. Every component we make must return JSX elements and components (which must also, ultimately, be composed of JSX). </p>
<p>In our case, we want to return our list of todos. Let's take our unordered list with all of our list items that we want to show. We don't really have any data just yet, so let's create some.</p>
<p>In particular, let's create a set of todo data, which we can include in an array. Let's add this to the App component:</p><pre><code class="language-js">// src/App.js
import "./styles.css";
export default function App() {
const todos = [
{ id: 1, text: "Wash dishes", done: false },
{ id: 2, text: "Do laundry", done: false },
{ id: 3, text: "Take shower", done: false }
];
return (
&lt;div&gt;
&lt;h1&gt;Todo List&lt;/h1&gt;
&lt;TodoList /&gt;
&lt;/div&gt;
);
}
function TodoList() {}</code></pre>
<h2 id="how-to-pass-data-to-components-with-props">How to Pass Data to Components with Props</h2>
<p>Now the question is – how do we pass all this data to and display it within our todo list?</p>
<p>With React components, we can do that with special properties that we add to the component called props. </p>
<p><strong>Props</strong> are custom attributes we can add to React components to pass data to our components. They are the React equivalent of arguments in JavaScript. </p>
<p>Since our data is called todos, let's name our prop the same: "todos". We use the equals operator to set a prop's value as well as a set of curly braces. This is because our todos array is a variable (a dynamic value):</p><pre><code class="language-js">// src/App.js
import "./styles.css";
export default function App() {
const todos = [
{ id: 1, text: "Wash dishes", done: false },
{ id: 2, text: "Do laundry", done: false },
{ id: 3, text: "Take shower", done: false }
];
return (
&lt;div&gt;
&lt;h1&gt;Todo List&lt;/h1&gt;
&lt;TodoList todos={todos} /&gt;
&lt;/div&gt;
);
}
function TodoList() {}</code></pre>
<blockquote>If we wanted to make it a string, for example, we would wrap it in a set of quotes. But since this is a dynamic value that can change, we want to always include it within curly braces.</blockquote>
<p>Within the TodoList component, where are our props going to be received to ultimately display our todos data? They're going to be received exactly where any function would receive their arguments. </p>
<p>We receive our prop data on an object which we usually call "props", but we can give it whatever name we like. </p>
<p>We can see that we're passing this data down by using <code>console.log(props)</code>. If we look at our console tab, we have this property on our props object called "todos". </p>
<p>It has an array of three items just like we would expect:</p><pre><code class="language-js">// src/App.js
import "./styles.css";
export default function App() {
const todos = [
{ id: 1, text: "Wash dishes", done: false },
{ id: 2, text: "Do laundry", done: false },
{ id: 3, text: "Take shower", done: false }
];
return (
&lt;div&gt;
&lt;h1&gt;Todo List&lt;/h1&gt;
&lt;TodoList todos={todos} /&gt;
&lt;/div&gt;
);
}
function TodoList(props) {
console.log(props) // {todos: Array(3)}
}</code></pre>
<h2 id="how-to-map-over-array-items-with-the-map-function">How to Map Over Array Items with the Map Function</h2>
<p>In order to display each of these list items, we can take the array that is on <code>props.todos</code>. </p>
<p>In particular, we can use a special function that React gives us on the todos array called <strong>map</strong>. </p>
<p>Since we want to display this within TodoList, we once again need to use a set of curly braces to display it within our JSX. Using <code>props.todo.map</code>, we will map over this array just like we would a normal JavaScript array. </p>
<blockquote>The React map function is slightly different than the normal JavaScript map function because it is made to return and render JSX elements. </blockquote>
<p><code>.map()</code> accepts an inner function and in that function, we can get access to each todo. Using an arrow function, we can return each todo within its own JSX. </p>
<p>Finally, we can immediately return that JSX by wrapping it in a set of parentheses:</p>
<p>Within our inner function, we get access to each todo's data. To display that data, we can take each todo which we know is an object. We can use a set of curly braces to output the dynamic value of whatever is on <code>todo.text</code>. </p>
<p>When we do that, we can see our three todos:</p>
<h2 id="what-are-react-keys-and-why-they-matter-">What are React Keys (and Why They Matter)?</h2>
<p>If we look at the console tab at the bottom we will see a warning, saying each child in the list should have a "unique key prop." </p>
<p>The reason for this is that React needs to keep track of the order of each of the items in our list. It does so with the help of a special React prop called a <strong>key</strong>. </p>
<blockquote>For a key, you generally want to use a unique identifier, a unique value that is only associated with one piece of data. In our case, to identify each todo's data we will use the unique number provided on <code>todo.id</code>.</blockquote>
<p>So why are keys important? It is important for React to figure out how it should appropriately update our user interface. If we were to update a todo's text or done value, the key is what tells React which todo item needs to be updated. </p>
<p>Once we add the key prop to the element or component that we're looping over, we no longer get that warning: </p>
<h2 id="how-to-get-individual-props-with-destructuring">How to Get Individual Props with Destructuring</h2>
<p>Note that one additional shorthand is that instead of referencing the entire object within the TodoList, we can reference the individual properties on that object to make our code a little bit shorter by using object destructuring. </p>
<blockquote>Object destructuring is not a React concept, but a standard JavaScript feature that makes accessing object properties easier by immediately declaring them as individual variables.</blockquote>
<p>As of right now, we only have one prop being passed down to TodoList, so let's destructure that one prop, <code>todos</code>, individually.</p>
<p>To do so, we add a set of curly braces within our functions parameters, and just grab the property that we need from the props object. This means that we can change <code>props.todos</code> to just <code>todos</code>:</p><pre><code class="language-js">// src/App.js
import "./styles.css";
export default function App() {
const todos = [
{ id: 1, text: "Wash dishes", done: false },
{ id: 2, text: "Do laundry", done: false },
{ id: 3, text: "Take shower", done: false }
];
return (
&lt;div&gt;
&lt;h1&gt;Todo List&lt;/h1&gt;
&lt;TodoList todos={todos} /&gt;
&lt;/div&gt;
);
}
// using object destructuring on the props object
function TodoList({ todos }) {
return (
&lt;ul&gt;
{todos.map((todo) =&gt; (
&lt;li key={todo.id}&gt;{todo.text}&lt;/li&gt;
))}
&lt;/ul&gt;
);
}</code></pre>
<h2 id="how-to-add-new-todo-list-items">How to Add New Todo List Items</h2>
<p>Now what about adding some new todos to our list? </p>
<p>Underneath our TodoList component, let's add a new component that's responsible for adding new todos. A logical name for this would be "AddTodo". </p>
<p>We can create this underneath our to do list component. Let's have AddTodo return a form element that contains a basic text input and a submit button.</p><pre><code class="language-js">// src/App.js
import "./styles.css";
export default function App() {
const todos = [
{ id: 1, text: "Wash dishes", done: false },
{ id: 2, text: "Do laundry", done: false },
{ id: 3, text: "Take shower", done: false }
];
return (
&lt;div&gt;
&lt;h1&gt;Todo List&lt;/h1&gt;
&lt;TodoList todos={todos} /&gt;
&lt;AddTodo /&gt;
&lt;/div&gt;
);
}
function TodoList({ todos }) {
return (
&lt;ul&gt;
{todos.map((todo) =&gt; (
&lt;li key={todo.id}&gt;{todo.text}&lt;/li&gt;
))}
&lt;/ul&gt;
);
}
function AddTodo() {
return (
&lt;form&gt;
&lt;input placeholder="Add todo" /&gt;
&lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
);
}</code></pre>
<blockquote>Note that any JSX element that consists of just one tag (such as our input) must end in a forward slash. If we do not include it, we're going to get a compiler error saying "unterminated JSX contents." </blockquote>
<p>Now the question is: how do we type into our input, submit our form, and have a new todo added to our todos array?</p>
<h2 id="how-to-handle-form-submissions-in-react">How to Handle Form Submissions in React</h2>
<p>To take care of submitting our form, we need to start working with events in React. </p>
<p>In our case, we want to use the "submit" event when our form is submitted by our user and for React to handle that form submission by adding a new todo. </p>
<p>React adds a special prop to the form element called <code>onSubmit</code>. onSubmit accepts a function within a set of curly braces. Let's create a new function, which we will call <code>handleAddTodo</code>. </p>
<blockquote>Note that most functions that handle events in React are prefixed with the word "handle". It's ultimately up to you how you want to name your functions, but this is a helpful convention.</blockquote>
<p>It's important to note that this function should be created within the component itself (AddTodo), not outside of it. When <code>handleAddTodo</code> is passed to the <code>onSubmit</code> prop, it will be called when our form is submitted:</p><pre><code class="language-js">// src/App.js
import "./styles.css";
// ...
function AddTodo() {
function handleAddTodo() {}
return (
&lt;form onSubmit={handleAddTodo}&gt;
&lt;input placeholder="Add todo" /&gt;
&lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
);
}</code></pre>
<h2 id="how-to-prevent-default-form-behavior">How to Prevent Default Form Behavior</h2>
<p>When we click the submit button or hit the return key, data from the submit event is passed automatically to our function that's connected to onSubmit. We receive that event data in the parameters of <code>handleAddTodo</code>.</p>
<p>The first thing that we want to do with this event is call a method on it called <code>.preventDefault()</code>. This method prevents the default action whenever we submit a form:</p><pre><code class="language-js">// src/App.js
import "./styles.css";
// ...
function AddTodo() {
function handleAddTodo(event) {
event.preventDefault();
}
return (
&lt;form onSubmit={handleAddTodo}&gt;
&lt;input placeholder="Add todo" /&gt;
&lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
);
}</code></pre>
<p>Whenever we submit a form, by default, the page is refreshed. We don't want that behavior with React – we want JavaScript to control whatever happens next. </p>
<p>After preventing a refresh, we want to get access to what was typed into the input to create a new todo with it. How do we do that? </p>
<h2 id="how-to-access-form-data-on-submit">How to Access Form Data on Submit</h2>
<p>The way that we get access to all of the elements within our form is with the help of the property <code>event.target.elements</code>. </p>
<p>First of all, this will give us the event target, which is the form itself. <code>elements</code> is a property that will give us all of the elements within that form, including our input and our submit button. </p>
<p>If we were to console.log <code>event.target.elements</code> right now, submit our form, and look at our console, we see just an object with a couple of properties, one called "0", and one called "1". </p>
<p>This isn't very helpful to us, although we do see that it is our input and our button:</p>
<p>Instead, we want to get what was typed into our input. </p>
<p>To do so, we can add either an "id" or a "name" attribute to our input. Let's add the name attribute with a value of "addTodo". When we hit submit again, this will give us a new property on the elements object also called <code>addTodo</code>. From that reference, we can very easily get what was typed into it. </p>
<p>This allows us to use <code>event.target.elements.addTodo.value</code> to get what was typed in whatever text was typed in. When we do so, when we type text into our input, and hit submit, we see it logged to the console:</p>
<p>Now that we have our text, we'll put it in a variable called "text". Using this, we want to create a new todo. </p>
<p>We know that each todo is an object and it has to consist of the properties id, text, and done. Let's create a variable <code>todo</code> and that will be equal to a new object where the id will be 4, the text will be equal to the text that we're getting from the elements object, and we can set done to false.</p>
<p>By default, new todos that are added are not going to be done:</p><pre><code class="language-js">// src/App.js
import "./styles.css";
//...
function AddTodo() {
function handleAddTodo(event) {
event.preventDefault();
const text = event.target.elements.addTodo.value;
const todo = {
id: 4,
text,
done: false
};
}
return (
&lt;form onSubmit={handleAddTodo}&gt;
&lt;input name="addTodo" placeholder="Add todo" /&gt;
&lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
);
}</code></pre>
<p>And finally, the big question is, how do we add this todo to our array, <code>todos</code>? </p>
<h2 id="introduction-to-state-in-react">Introduction to State in React </h2>
<p>This is where the concept of state comes in. </p>
<p>Right now we're dealing with static data – there is no real way to update this todos array. To be clear, there <em>is</em> a way to do it using JavaScript, but what we are not currently able to do is tell React, even if we were to update it, that it needs to <strong>re-render</strong> this list. </p>
<p>In other words, to perform an update to our data and then show us the updated data in our view. So while we could update the data, we also need React to show our users the updated data. </p>
<p><strong>State</strong> is required to fix our problem. </p>
<blockquote>State is a means of managing our application data and also allows React to update our UI (user interface) in response to data changes. </blockquote>
<h2 id="how-to-manage-state-in-react-with-the-usestate-hook">How to Manage State in React with the useState Hook</h2>
<p>We can manage state in React using the <code>useState</code> hook. To use the useState hook, the first thing that we need to do is import React up at the top, because useState comes from the core React library. </p>
<p>After that, we can simply call the useState hook up at the top of our app component. Once we call useState just like a normal function, we will pass in our entire array of todos as our initial data. Our application will break for a moment since we're no we're no longer showing our todos just yet. </p>
<p>useState returns an array with two elements:</p>
<ol>
<li>The initial value we called useState with (our array of todos) and this becomes our state variable</li>
<li>A special function that allows us to update what is stored in the state variable </li>
</ol>
<p>We can destructure the values that are returned from useState by adding a set of array brackets to immediately get the values that are returned from it. First the state and second, the function to update the state:</p>
<p>We'll call our state variable <code>todos</code> and the setter to manage our state <code>setTodos</code>. </p>
<p>All we have to do to update our state is to pass it, whatever we want the new state to be. This <code>setTodos</code> function is going to be passed down to our AddTodo component, so let's add that as a prop of the same name. We'll also destructure <code>setTodos</code> from our props object within AddTodo. </p>
<p>And finally, we can call <code>setTodos</code> at the bottom of <code>handleAddTodo</code>. What's great about this function is instead of having to pass down the todos array as well, this function can give us the previous state with the help of a function that we can receive inside of it:</p>
<p>This may seem strange at first, but within <code>setTodos</code> we get access to the previous todo data. If we write an arrow function or any function for that matter, we can simply provide what we want the new state to be. </p>
<blockquote>The benefit of being able to access the previous state variable's value directly within the setter function is that it prevents us from having to pass down the entire todos state variable as an additional prop to every component in which we want to update its value.</blockquote>
<p>If we wanted to empty our todos state, we could just return an empty array right here. If we were to submit our form, we would see that all of our todos were removed. </p>
<p>Once we submit our form, state is updated, and our app is re-rendered as a result. </p>
<h2 id="re-renders-in-react">Re-renders in React</h2>
<p>Note that any re-render within a parent component will cause any child components to re-render. That means whenever our todo data is updated, the TodoList component (a child of the App component) is updated with that new data. </p>
<p>If we go back to <code>handleAddTodo</code>, we can take our previous todos and use the <code>.concat()</code> method to add this new todo to our array in state. All we have to do is return this expression. </p>
<p>Let's add a new todo, such as "Balance Checkbook." Once we hit submit, we see that immediately added to our list:</p>
<p>Now there's one problem here: we aren't clearing out our input after our form is submitted. </p>
<p>This means if we wanted to add another todo we would have to manually clear it out. How do we take this input's value and clear it out?</p>
<h2 id="react-refs-and-useref">React refs and useRef</h2>
<p>To perform common actions such as clearing out an input's value or focusing our input we can use what's called a <strong>ref</strong>. </p>
<blockquote>A ref is a feature that React provides to reference to a given DOM element. </blockquote>
<p>In this case, we want a reference to this input element with the name of "addTodo." </p>
<p>Just like our state, we can work with refs by calling the appropriate React hook. To create a ref, we just need to call <code>React.useRef()</code> at the top of AddTodo. We don't have to pass it an initial value, but we can give it a default value if we needed to. </p>
<p>We will call this created ref <code>inputRef</code>. Using inputRef, we can create a reference to our input element which we can access wherever we like by using the built-in ref prop by setting <code>ref={inputRef}</code>:</p><pre><code class="language-js">// src/App.js
import React from "react";
import "./styles.css";
//...
function AddTodo({ setTodos }) {
const inputRef = React.useRef();
function handleAddTodo(event) {
event.preventDefault();
const text = event.target.elements.addTodo.value;
const todo = {
id: 4,
text,
done: false
};
setTodos((prevTodos) =&gt; {
return prevTodos.concat(todo);
});
}
return (
&lt;form onSubmit={handleAddTodo}&gt;
&lt;input name="addTodo" placeholder="Add todo" ref={inputRef} /&gt;
&lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
);
}</code></pre>
<p>What does this do? It allows us within <code>handleAddTodo</code> to use the property <code>inputRef.current</code>, which contains the input element itself. If we were to log <code>input.ref.current</code>, we would see our input element. </p>
<p>We have a direct reference to our input, which means we access any property that we like off of it. In our case, we want to take the value of the input on the value property. To clear the value from our input, we can just mutate inputRef directly by setting value to an empty string:</p>
<p>Whenever we hit submit, our input is cleared out without having to clear it out ourselves manually.</p>
<h2 id="essential-rules-of-react-hooks">Essential Rules of React Hooks</h2>
<p>Since useRef is another React hook, we're starting to see some common features among React hooks. They are often prefixed with the word "use". In fact, most all React hooks have this prefix to denote that they are hooks and should be used as such. </p>
<p>Additionally, React hooks are called up at the very top of function components. Hooks cannot be used within class components. And finally, hooks cannot be conditional (that is, used within an if statement).</p>
<p>But as you can see, there's nothing too special about React hooks. They operate very much like regular JavaScript functions. </p>
<h2 id="how-to-mark-todos-as-done-with-onclick">How to Mark Todos as Done with onClick</h2>
<p>After creating todos, we want to toggle them done – to strike through them if we've finished a given todo. How do we add this feature? </p>
<p>If we go back to our list item, within TodoList, we can see what that will look like by applying some inline styles. We saw how to add styles through classes. For styles that we want to apply inline to any given element, we cannot use the same syntax as we would with normal HTML. </p>
<p>If we tried to using the HTML syntax, we're going to get an error telling us "the style prop expects style properties within an object, not within a string":</p>
<p>To fix this, we will provide an object. We need to provide this object within another set of curly braces. Then, we will provide any property like we would in a normal JavaScript object to apply this strike through style. </p>
<p>For each of our list items, we can set the property <code>textDecoration</code> to "line-through":</p>
<p>We do not want every item to be struck through, we only want this to be applied if a given todo is done. How do we do that? </p>
<p>We can use a normal JavaScript conditional, in particular a ternary, to say that if a given todo's property done is true, then we want to apply the strike through value for text decoration, otherwise not. </p>
<p>If we change one of our todos array to have a done value of <code>true</code>, we see that that style rule is applied:</p><pre><code class="language-js">// src/App.js
//...
function TodoList({ todos }) {
return (
&lt;ul&gt;
{todos.map((todo) =&gt; (
&lt;li
style={{
textDecoration: todo.done ? "line-through" : ""
}}
key={todo.id}
&gt;
{todo.text}
&lt;/li&gt;
))}
&lt;/ul&gt;
);
}
//...</code></pre>
<p>How do we actually toggle that todo? </p>
<p>We might want our user to click or double click on our todo in order to strike through it. That means we want to see how to register and handle a new type of event – a click event. </p>
<p>To handle a click event with React we provide the <code>onClick</code> prop to a given element for which we want to register that event. In this case, it's the <code>li</code> element. </p>
<p>Once again, we need to connect it to a function to handle our click event. We're going to call this <code>handleToggleTodo</code> and create it within our TodoList component. In this case, our function that we use to handle the event doesn't have to receive any event data. This function will handle updating our todo's state. </p>
<p>We want <code>handleToggleTodo</code> to go through the <code>todos</code> array and see if the one that the user has clicked on exists in our array. If so, its done value can be toggled to the opposite boolean value. </p>
<p>To receive the appropriate todo data for the appropriate list item that is clicked on, we can call <code>handleToggleTodo</code> as an inline arrow function and pass the todo data as an argument: </p><pre><code class="language-js">// src/App.js
//...
function TodoList({ todos }) {
function handleToggleTodo(todo) {}
return (
&lt;ul&gt;
{todos.map((todo) =&gt; (
&lt;li
onClick={() =&gt; handleToggleTodo(todo)}
style={{
textDecoration: todo.done ? "line-through" : ""
}}
key={todo.id}
&gt;
{todo.text}
&lt;/li&gt;
))}
&lt;/ul&gt;
);
}
//...</code></pre>
<p>To update our todos state, we'll pass down <code>setTodos</code> to our TodoList component. We'll pass down <code>setTodos</code> as a prop to TodoList, and destructure it from the props object. </p>
<p>Once again, we can call <code>setTodos</code> and get access to the previous todos by including an inner function. First, what we can do is take our entire todos array and map over it with the <code>.map()</code> array function. </p>
<p>In the inner function passed to map, we will check that the todos id we're mapping over is equal to the todo that we've clicked on. If so, we return a new object with all of the previous todo's properties, but with <code>done</code> toggled to its opposite boolean value:</p><pre><code class="language-js">// src/App.js
//...
function TodoList({ todos, setTodos }) {
function handleToggleTodo(todo) {
// confused by this code? Here's what it says:
// if a todo's id is equal to the one we clicked on,
// just update that todo's done value to its opposite,
// otherwise, do nothing (return it)
const updatedTodos = todos.map((t) =&gt;
t.id === todo.id
? {
...t,
done: !t.done
}
: t
);
}
return (
&lt;ul&gt;
{todos.map((todo) =&gt; (
&lt;li
onDoubleClick={() =&gt; handleToggleTodo(todo)}
style={{
textDecoration: todo.done ? "line-through" : ""
}}
key={todo.id}
&gt;
{todo.text}
&lt;DeleteTodo todo={todo} setTodos={setTodos} /&gt;
&lt;/li&gt;
))}
&lt;/ul&gt;
);
}
//...</code></pre>
<p>Otherwise, if that todo that we're iterating over is not the one that we clicked on, we just want to return it (without changing it). This updated array is what we'll pass to <code>setTodos</code> to update our state. </p>
<p>If we click on a todo, we toggle it done. If we click on it again, it's toggled back to undone:</p>
<p>For this to work appropriately, to see that a past todo's id is equal to the todo that we're clicking on, we need to make sure that each todo's id is unique. </p>
<p>Instead of setting each new todo to have an id of 4, we can just use <code>Math.random()</code> to make a semi-random value and ensure there are no list items with the same id. </p>
<p>Finally, as an alternative to <code>onClick</code>, we can use another event prop, <code>onDoubleClick</code>, &nbsp;in the event that users accidentally click a given todo. Now if a user double clicks a list item, only then do we toggle it done. </p>
<h2 id="how-to-handle-deleting-todos">How to Handle Deleting Todos</h2>
<p>The final bit of functionality that we're looking for is to be able to delete a given todo. </p>
<p>We can add that functionality within TodoList by adding another nested component. Underneath our todo text, we'll add a new component: DeleteTodo. Let's declare this new component above where we declared AddTodo. </p>
<p>What will this component consist of? In it, we will return a span, which will function like a button for us. A user can click on this and delete a given todo. </p>
<blockquote>If you want a non-button element to operate like a button, we need to make its "role" property set to "button". </blockquote>
<p>To our span, let's add some style rules – we can give it a color of red, make it bold, and separate it from the todo text by setting <code>marginLeft: 10</code>. What's neat about the style object is that we don't have to say 10 pixels as a string – we can use the value 10 or include any integer that we like.</p>
<p>Here is the code for our DeleteTodo component so far:</p>
<p>To delete a todo, we want to be able to click on it and show a confirmation dialog. If the user confirms they want to delete it, only then is the todo removed. </p>
<p>Since we're mapping over each todo item, including DeleteTodo, we can pass down a prop called just <code>todo</code> with each todo's data on it. </p>
<p>In DeleteTodo, on our span element, we want to add an <code>onClick</code> to handle deleting our todo. To handle this, we will call a new function: <code>handleDeleteTodo</code>. </p>
<p>Using this function, we first want to show a confirmation dialog. We can do so by saying <code>window.confirm()</code> with the message, "Do you want to delete this"? <code>window.confirm</code> is going to return a value of true or false based on whether the user has confirmed the dialog or not. We'll put the result of this action in a variable called <code>confirmed</code>:</p><pre><code class="language-js">// src/App.js
// ...
function TodoList({ todos, setTodos }) {
// ...
return (
&lt;ul&gt;
{todos.map((todo) =&gt; (
&lt;li
onDoubleClick={() =&gt; handleToggleTodo(todo)}
style={{
textDecoration: todo.done ? "line-through" : ""
}}
key={todo.id}
&gt;
{todo.text}
{/* pass todo data down as a prop to DeleteTodo */}
&lt;DeleteTodo todo={todo} /&gt;
&lt;/li&gt;
))}
&lt;/ul&gt;
);
}
function DeleteTodo({ todo, setTodos }) {
function handleDeleteTodo() {
const confirmed = window.confirm("Do you want to delete this?");
if (confirmed) {
// take care of deleting the todo
}
}
return (
&lt;span
onClick={handleDeleteTodo}
role="button"
style={{
color: "red",
fontWeight: "bold",
marginLeft: 10,
cursor: "pointer"
}}
&gt;
x
&lt;/span&gt;
);
}
//...</code></pre>
<p>If <code>confirmed</code> is true, only then do we want to delete the todo.</p>
<p>To do that, we need to use <code>setTodos</code> once again. We'll pass it down one more level from TodoList to the DeleteTodo component and destructure it from the props object. </p>
<p>Then, within <code>handleDeleteTodo</code>, we can call it and use the inner function to get the previous todos. To remove the todo that a user has clicked on, we can filter through this array to make sure that we are removing the one that the user selected. </p>
<p>To do so, we make sure all the todos in our array do not have an id equal to the one we are attempting to delete:</p><pre><code class="language-js">// src/App.js
// ...
function DeleteTodo({ todo, setTodos }) {
function handleDeleteTodo() {
const confirmed = window.confirm("Do you want to delete this?");
if (confirmed) {
setTodos((prevTodos) =&gt; {
return prevTodos.filter((t) =&gt; t.id !== todo.id);
});
}
}
return (
&lt;span
onClick={handleDeleteTodo}
role="button"
style={{
color: "red",
fontWeight: "bold",
marginLeft: 10,
cursor: "pointer"
}}
&gt;
x
&lt;/span&gt;
);
}
// ...</code></pre>
<p>Now if we attempt to delete one of our todos, we see our confirmation dialog, we hit "ok", and immediately it's removed from our list. </p>
<p>If we delete all of our todos, we no longer see anything. If we want to tell our user there are no todos in the list when the array is empty, let's head up to our TodoList component. </p>
<p>If we have an empty todos array, we can add a conditional above our return and check if our array's length is equal to 0. If so, we will display a paragraph element with the text "No todos left":</p><pre><code class="language-js">// ...
function TodoList({ todos, setTodos }) {
function handleToggleTodo(todo) {
const updatedTodos = todos.map((t) =&gt;
t.id === todo.id
? {
...t,
done: !t.done
}
: t
);
setTodos(updatedTodos);
}
if (!todos.length) {
return &lt;p&gt;No todos left!&lt;/p&gt;;
}
return (
&lt;ul&gt;
{todos.map((todo) =&gt; (
&lt;li
onDoubleClick={() =&gt; handleToggleTodo(todo)}
style={{
textDecoration: todo.done ? "line-through" : ""
}}
key={todo.id}
&gt;
{todo.text}
&lt;DeleteTodo todo={todo} setTodos={setTodos} /&gt;
&lt;/li&gt;
))}
&lt;/ul&gt;
);
}
// ...</code></pre>
<h2 id="congratulations-">Congratulations! </h2>
<p>You now have a working todo app that has full CRUD functionality that can create, read, update, and delete todos.</p>
<p>You've been able to see how many of the major React concepts work firsthand and you're now in a great position to start building your own React applications.</p>
<p>If you would like to take a look at our final app code, you can see it <a href="https://codesandbox.io/s/late-firefly-ker6p">here</a>.</p>
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
