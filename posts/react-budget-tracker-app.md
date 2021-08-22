---
card: "/images/default.jpg"
tags: [React]
description: "In this React Budget Tracker App tutorial we're going to:"
author: "Milad E. Fahmy"
title: "Build a React Budget Tracker App – Learn React & Context API with this Fun Project"
created: "2021-08-15T19:27:01+02:00"
modified: "2021-08-15T19:27:01+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-react-context tag-projects tag-javascript tag-app-development ">
<header class="post-full-header">
<h1 class="post-full-title">Build a React Budget Tracker App – Learn React &amp; Context API with this Fun Project</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/03/react-budget-app-1.png 300w,
/news/content/images/size/w600/2021/03/react-budget-app-1.png 600w,
/news/content/images/size/w1000/2021/03/react-budget-app-1.png 1000w,
/news/content/images/size/w2000/2021/03/react-budget-app-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/03/react-budget-app-1.png" alt="Build a React Budget Tracker App – Learn React &amp; Context API with this Fun Project">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this React Budget Tracker App tutorial we're going to:</p>
<ul>
<li>We’ll learn how break down a UI into React components</li>
<li>Learn how to work with state using the Context API</li>
<li>Learn about actions, reducers, and the dispatch function </li>
</ul>
<p>And I’ll give you some challenges which you can try at the end!</p>
<h2 id="this-is-what-we-ll-build-">This is what we'll build: </h2>
<p>The user can:</p>
<ul>
<li>Add expenses which have a name and a cost</li>
<li>Remove expenses</li>
<li>View how much of their budget is remaining</li>
<li>View how much they've spent so far </li>
<li>(Challenge) Edit budget </li>
<li>(Challenge) Search expenses</li>
</ul>
<h2 id="video-walkthrough">Video Walkthrough</h2>
<p><a href="https://youtu.be/aeYxBd1it7I">Heres a video walkthrough if you want to supplement your reading (on YouTube)</a></p>
<h2 id="source-code">Source Code</h2>
<p>Finally, in case you get lost while following along, <a href="https://github.com/chrisblakely01/react-budget-app">you can grab the finished code here (on GitHub)</a>.</p>
<p>Let's Go!</p>
<h2 id="how-to-setup-a-react-project">How to Setup a React Project</h2>
<p>The first thing we need to do is setup a React project. For this we'll use <code>create-react-app</code>. </p>
<p>Fire up a terminal and type:</p>
<p><code>npx create-react-app budget-tracker</code> </p>
<p>When that's finished doing its thing we're going to install Bootstrap. This will give us ready-made styles we can use instead of having to create our own in CSS. </p>
<p>In the same terminal, change to your working directory, and install Bootstrap:</p><pre><code>cd budget-tracker
npm i bootstrap			</code></pre>
<p>Next we're going to install a package that allows us to generate IDs. We'll be using IDs to identify each expense in the list, so this is important.</p>
<p>Run the following command in your project directory:</p><pre><code>npm i uuid
</code></pre>
<p>The last package we need to install gives us some icons to use, which saves us from having to create them ourselves.</p>
<p>Run the following command in your project directory:</p><pre><code>npm i react-icons
</code></pre>
<p>Now open up the project in VS Code (or whatever IDE you use). You should see some stuff appear in the project tree (this is our empty React project). </p>
<p>You can ignore most of this, as we'll be creating our own components. Open up App.js, delete everything, and add the following:</p><pre><code class="language-jsx">import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () =&gt; {
return &lt;p&gt;Hello React!&lt;/p&gt;;
};
export default App;
</code></pre>
<p>What this does:</p>
<ul>
<li>Imports the bootstrap CSS into our project</li>
<li>Creates a component that displays "Hello React!" with paragraph tags</li>
<li>Exports this component so other components can use it</li>
</ul>
<p>Next we'll fire up the app and make sure everything is working as it should. Open a terminal (either in VS Code or otherwise) and start the app by typing the following:</p><pre><code>npm start</code></pre>
<p>All being well, the app should start and open in a browser:</p>
<figcaption>The text "Hello React" should appear on the page. This means your app is working!</figcaption>
</figure>
<p>Success! Now we're ready to start building out our React components.</p>
<h2 id="how-to-put-the-ui-components-in-place">How to Put the UI Components in Place</h2>
<p>One approach to building apps is to start by putting the UI components in place with some dummy data. This usually helps with visualising what state objects are needed, and usually means less rework later on. </p>
<p>With that in mind we're going to put our UI components in place starting at the top and working down. </p>
<figcaption>We'll add a title, then add a new component for each of the "boxes" shown. We'll add some dummy data just to get things displaying correctly</figcaption>
</figure>
<h3 id="how-to-create-the-budget-component">How to Create the Budget Component</h3>
<p>Jump into the code, in the <strong>src</strong> folder, create a new folder called <strong>components. </strong>Within this, create a file called <strong>Budget.js. </strong>Your project structure should look like this:</p>
<p>Open up <strong>Budget.js</strong> and add the following:</p><pre><code class="language-jsx">import React from 'react';
const Budget = () =&gt; {
return (
&lt;div className='alert alert-secondary'&gt;
&lt;span&gt;Budget: £2000&lt;/span&gt;
&lt;/div&gt;
);
};
export default Budget;
</code></pre>
<p>What we're doing:</p>
<ul>
<li>Creating a new component called <strong>Budget</strong> (line 3)</li>
<li>Using the <strong>Bootstrap Alert</strong> classes to gives us a nice gray background (line 5)</li>
<li>Adding some text and hard coding a value (line 6)</li>
</ul>
<h3 id="how-to-create-the-remaining-component">How to Create the <code>Remaining</code> Component</h3>
<p>Next we'll create the <strong><code>Remaining</code></strong> component, which shows how much budget the user has left.</p>
<p>Create a new file under <strong>src/components </strong>called <strong>Remaining.js</strong>. Open it up and add the following:</p><pre><code class="language-jsx">import React from 'react';
const Remaining = () =&gt; {
return (
&lt;div className='alert alert-success'&gt;
&lt;span&gt;Remaining: £1000&lt;/span&gt;
&lt;/div&gt;
);
};
export default Remaining;
</code></pre>
<p>What we're doing:</p>
<ul>
<li>Creating a new component called <strong>Remaining</strong> (line 3)</li>
<li>Using the <strong>Bootstrap Alert</strong> classes to gives us a green background (line 5)</li>
<li>Adding some text and hard coding a value (line 6)</li>
<li>Adding Spent so Far</li>
</ul>
<p>Lastly, we'll create the <strong>Spent so Far </strong>component, which shows how much the user has spent so far.</p>
<p>Create a new file under <strong>src/components</strong> called <strong>ExpenseTotal.js</strong>. Open it up and add the following:</p><pre><code class="language-jsx">import React from 'react';
const ExpenseTotal = () =&gt; {
return (
&lt;div className='alert alert-primary'&gt;
&lt;span&gt;Spent so far: £1000&lt;/span&gt;
&lt;/div&gt;
);
};
export default ExpenseTotal;
</code></pre>
<p>What we're doing:</p>
<ul>
<li>Creating a new component called <strong>ExpenseTotal</strong> (line 3)</li>
<li>Using the <strong>Bootstrap Alert</strong> classes to gives us a blue background (line 5)</li>
<li>Adding some text and hard coding a value (line 6)</li>
</ul>
<h3 id="how-to-add-a-title-and-render-our-components">How to Add a Title and Render our Components </h3>
<p>At this point you might be thinking, "these components all look the same, what gives?!". This is true, although remember we're just adding some hard coded data for now. Later, each component will do different things to display the data dynamically.</p>
<p>Now we've created our components, we need to render them in <strong>App.js. </strong>Open App.js and add the following:</p><pre><code class="language-jsx">import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
const App = () =&gt; {
return (
&lt;div className='container'&gt;
&lt;h1 className='mt-3'&gt;My Budget Planner&lt;/h1&gt;
&lt;div className='row mt-3'&gt;
&lt;div className='col-sm'&gt;
&lt;Budget /&gt;
&lt;/div&gt;
&lt;div className='col-sm'&gt;
&lt;Remaining /&gt;
&lt;/div&gt;
&lt;div className='col-sm'&gt;
&lt;ExpenseTotal /&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
);
};
export default App;
</code></pre>
<p>What we're doing:</p>
<ul>
<li>Importing our different components (lines 3-5)</li>
<li>Adding a bootstrap container that helps us center our App on the page (line 9)</li>
<li>Adding a title (line 9)</li>
<li>Adding a Bootstrap row (line 10)</li>
<li>Adding a column within the row for each of our components so far (lines 12-20)</li>
</ul>
<p>Now if you run the app, you should see the title, and our components rendered on the page!</p>
<h3 id="how-to-create-the-expense-list-component">How to Create the Expense List Component</h3>
<figcaption>The expenses list shows the expenses the user has added so far, displaying the Name, cost, and a delete button for each</figcaption>
</figure>
<p>Next we'll build the <strong>ExpenseList</strong> component. This component will be in charge of taking a list of expenses, and rendering an <strong>ExpenseItem</strong> component for each item. </p>
<p>We'll add some dummy data, to make sure our UI looks good and things are working as intended. Later, this stuff will come from context.</p>
<p>Start by creating a new file under <strong>src/components </strong>called <strong>ExpenseList.js</strong>. Open up ExpenseList.js and add the following:</p><pre><code class="language-jsx">import React from 'react'
import ExpenseItem from './ExpenseItem';
const ExpenseList = () =&gt; {
const expenses = [
{ id: 12, name: 'shopping', cost: 40 },
{ id: 13, name: 'holiday', cost: 400 },
{ id: 14, name: 'car service', cost: 50 },
];
return (
&lt;ul className='list-group'&gt;
{expenses.map((expense) =&gt; (
&lt;ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} /&gt;
))}
&lt;/ul&gt;
)
}
export default ExpenseList
</code></pre>
<p>What we're doing:</p>
<ul>
<li>Adding a dummy list of expenses. For each expense we need an ID, a name, and a cost. Later, we'll take this list from context (line 4)</li>
<li>Creating a list (line 11)</li>
<li>Using the map function to iterate over the expenses and displaying an ExpenseItem component (we haven't created this yet! Line 12)</li>
<li>Passing the ID, name, and cost to the ExpenseItem component as props</li>
</ul>
<h3 id="how-to-create-the-expense-item-component">How to Create the Expense Item Component</h3>
<p>Now we've created a component to hold our list, we need a component to render each item. Create a new file in the <strong>src/components </strong>folder called <strong>ExpenseItem.js. </strong>Open it up and add the following:</p><pre><code class="language-jsx">import React from 'react';
import { TiDelete } from 'react-icons/ti';
const ExpenseItem = (props) =&gt; {
return (
&lt;li className='list-group-item d-flex justify-content-between align-items-center'&gt;
{props.name}
&lt;div&gt;
&lt;span className='badge badge-primary badge-pill mr-3'&gt;
£{props.cost}
&lt;/span&gt;
&lt;TiDelete size='1.5em'&gt;&lt;/TiDelete&gt;
&lt;/div&gt;
&lt;/li&gt;
);
};
export default ExpenseItem;
</code></pre>
<p>What we're doing:</p>
<ul>
<li>Creating a list item (line 6)</li>
<li>Rendering the name of the expense, which we get from props (line 7)</li>
<li>Rendering the cost of the expense, which we also get from props</li>
<li>We're displaying a DeleteIcon (line 12) which we get from react-icons package (line 2)</li>
</ul>
<h3 id="how-to-render-the-expenselist-component">How to Render the ExpenseList Component</h3>
<p>Now we've created our components, we just have to render ExpenseList in App.js. Open up App.js and update it with the following:</p><pre><code class="language-jsx">import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
const App = () =&gt; {
return (
&lt;div className='container'&gt;
&lt;h1 className='mt-3'&gt;My Budget Planner&lt;/h1&gt;
&lt;div className='row mt-3'&gt;
&lt;div className='col-sm'&gt;
&lt;Budget /&gt;
&lt;/div&gt;
&lt;div className='col-sm'&gt;
&lt;Remaining /&gt;
&lt;/div&gt;
&lt;div className='col-sm'&gt;
&lt;ExpenseTotal /&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;h3 className='mt-3'&gt;Expenses&lt;/h3&gt;
&lt;div className='row mt-3'&gt;
&lt;div className='col-sm'&gt;
&lt;ExpenseList /&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
);
};
export default App;
</code></pre>
<p>What's new:</p>
<ul>
<li>We imported our ExpenseList (line 6)</li>
<li>Added a new Bootstrap row (line 24)</li>
<li>Rendered our ExpenseList (line 26)</li>
</ul>
<p>Now if you save/run the App, you'll see the Expenses list has appeared!</p>
<h3 id="how-to-create-the-add-expense-form-component">How to create the "Add Expense" form component</h3>
<p>Our UI components are nearly complete! The last component we need is the "Add Expense" form component, which lets users add new expenses. We'll put the UI components for the form in place first, then come back later and add the fancy stuff.</p>
<p>Create a new file in <strong>src/components </strong>called <strong>AddExpenseForm.js</strong>. Fire this up and add the following:</p><pre><code class="language-jsx">import React from 'react';
const AddExpenseForm = () =&gt; {
return (
&lt;form&gt;
&lt;div className='row'&gt;
&lt;div className='col-sm'&gt;
&lt;label for='name'&gt;Name&lt;/label&gt;
&lt;input
required='required'
type='text'
className='form-control'
id='name'
&gt;&lt;/input&gt;
&lt;/div&gt;
&lt;div className='col-sm'&gt;
&lt;label for='cost'&gt;Cost&lt;/label&gt;
&lt;input
required='required'
type='text'
className='form-control'
id='cost'
&gt;&lt;/input&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;div className='row'&gt;
&lt;div className='col-sm'&gt;
&lt;button type='submit' className='btn btn-primary mt-3'&gt;
Save
&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/form&gt;
);
};
export default AddExpenseForm;
</code></pre>
<p>What we're doing:</p>
<ul>
<li>Adding our form tags (line 6)</li>
<li>Adding a label/input for our <strong>name </strong>field (line 9)</li>
<li>Adding a label/input for our <strong>cost </strong>field (line 18)</li>
<li>Adding a button to submit the form (line 30)</li>
</ul>
<h3 id="how-to-render-the-addexpenseform-component">How to Render the AddExpenseForm component</h3>
<p>Finally in App.js, we have to render our new component. Update App.js with the following:</p><pre><code>import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
const App = () =&gt; {
return (
&lt;div className='container'&gt;
&lt;h1 className='mt-3'&gt;My Budget Planner&lt;/h1&gt;
&lt;div className='row mt-3'&gt;
&lt;div className='col-sm'&gt;
&lt;Budget /&gt;
&lt;/div&gt;
&lt;div className='col-sm'&gt;
&lt;Remaining /&gt;
&lt;/div&gt;
&lt;div className='col-sm'&gt;
&lt;ExpenseTotal /&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;h3 className='mt-3'&gt;Expenses&lt;/h3&gt;
&lt;div className='row mt-3'&gt;
&lt;div className='col-sm'&gt;
&lt;ExpenseList /&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;h3 className='mt-3'&gt;Add Expense&lt;/h3&gt;
&lt;div className='row mt-3'&gt;
&lt;div className='col-sm'&gt;
&lt;AddExpenseForm /&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
);
};
export default App;
</code></pre>
<p>What's changed:</p>
<ul>
<li>Imported the AddExpenseForm (line 7)</li>
<li>Rendered the AddExpenseForm (line 33)</li>
</ul>
<h2 id="how-to-add-the-context-api">How to Add the Context API</h2>
<p>The Context API is what we'll use to store our global state. It's already part of the React library so no need to import/install anything else.</p>
<p>Start by creating a new folder in the <strong>src</strong> folder called <strong>context.</strong> Within this folder create a new file called <strong>AppContext.js.</strong></p>
<h3 id="how-to-create-the-initial-state">How to Create the Initial State</h3>
<p>The first thing our context needs to work is an initial state. This indicates the "shape" of our state (in other words, what properties and data we have) and can be used to initialise the app with data from an API call, for example.</p>
<p>For now we'll just add some initial values. In AppContext.js, add the following:</p><pre><code class="language-jsx">const initialState = {
budget: 2000,
expenses: [
{ id: 12, name: 'shopping', cost: 40 },
{ id: 13, name: 'holiday', cost: 400 },
{ id: 14, name: 'car service', cost: 50 },
],
};</code></pre>
<ul>
<li>We're adding an initial budget</li>
<li>We're adding a dummy list of expenses</li>
</ul>
<blockquote>NOTE: the intialState properties do not need to have values, they can be set to empty strings, empty arrays, and so on. We're adding data for visual purposes</blockquote>
<h3 id="how-to-create-the-appcontext">How to Create the AppContext</h3>
<p>Next we'll create the AppContext. This is the thing our components import and use to get the state. </p>
<p>Update AppContext.js with the following:</p><pre><code class="language-jsx">const initialState = {
budget: 2000,
expenses: [
{ id: 12, name: 'shopping', cost: 40 },
{ id: 13, name: 'holiday', cost: 400 },
{ id: 14, name: 'car service', cost: 50 },
],
};
export const AppContext = createContext();
</code></pre>
<p>All we've done is added a call to createContext at line (11) - thats our context object created! </p>
<h3 id="how-to-create-the-appprovider">How to Create the AppProvider </h3>
<p>The provider is a component that wraps the components which we want to pass the state to. We use it in conjunction with the useReducer hook to actually store the global state.</p>
<p>Update the AppContext.js file like so:</p><pre><code class="language-jsx">const initialState = {
budget: 2000,
expenses: [
{ id: 12, name: 'shopping', cost: 40 },
{ id: 13, name: 'holiday', cost: 400 },
{ id: 14, name: 'car service', cost: 50 },
],
};
export const AppContext = createContext();
export const AppProvider = (props) =&gt; {
const [state, dispatch] = useReducer(AppReducer, initialState);
return (
&lt;AppContext.Provider
value={{
budget: state.budget,
expenses: state.expenses,
dispatch,
}}
&gt;
{props.children}
&lt;/AppContext.Provider&gt;
);
};</code></pre>
<p>What we're doing:</p>
<ul>
<li>Creating our Provider component (line 12)</li>
<li>Setting up the useReducer hook which will hold our state, and allow us to update the state via dispatch (NOTE we haven't created the AppReducer yet! Line 13)</li>
<li>We're returning <strong>AppContext.Provider. </strong>This has a <strong>value</strong> prop which contains the data which we allow our components to see and have access to, as well as the dispatch function that lets us update the state by dispatching actions (line 16)</li>
</ul>
<h3 id="how-to-create-the-appreducer">How to Create the AppReducer </h3>
<p>Next we’ll create the AppReducer. The reducer is in charge of creating the new global state object, based on an action type and a payload. </p>
<p>Update AppContext.js with the following:</p><pre><code class="language-jsx">const AppReducer = (state, action) =&gt; {
switch (action.type) {
default:
return state;
}
};
const initialState = {
budget: 2000,
expenses: [
{ id: 12, name: 'shopping', cost: 40 },
{ id: 13, name: 'holiday', cost: 400 },
{ id: 14, name: 'car service', cost: 50 },
],
};
export const AppContext = createContext();
export const AppProvider = (props) =&gt; {
const [state, dispatch] = useReducer(AppReducer, initialState);
return (
&lt;AppContext.Provider
value={{
budget: state.budget,
expenses: state.expenses,
dispatch,
}}
&gt;
{props.children}
&lt;/AppContext.Provider&gt;
);
};
</code></pre>
<p>What we're doing:</p>
<ul>
<li>Creating a function which accepts the current state, and an action (line 1)</li>
<li>We use a switch based on the action.type to decide how to update the state (line 2)</li>
<li>For now since we’re just getting things set up we’re just going to return the default state, and add actions later as we need them (line 3)</li>
</ul>
<p>And thats it! Our global state is now set up and ready to go. </p>
<h2 id="how-to-link-appcontext-to-our-app">How to Link AppContext to our App</h2>
<p>The next step is to link our AppContext to our App component. We do this by wrapping the components which we want to pass the state to with the AppProvider.</p>
<p>Jump back into App.js and update the following:</p><pre><code class="language-jsx">import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import { AppProvider } from './context/AppContext';
const App = () =&gt; {
return (
&lt;AppProvider&gt;
&lt;div className='container'&gt;
&lt;h1 className='mt-3'&gt;My Budget Planner&lt;/h1&gt;
&lt;div className='row mt-3'&gt;
&lt;div className='col-sm'&gt;
&lt;Budget /&gt;
&lt;/div&gt;
&lt;div className='col-sm'&gt;
&lt;Remaining /&gt;
&lt;/div&gt;
&lt;div className='col-sm'&gt;
&lt;ExpenseTotal /&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;h3 className='mt-3'&gt;Expenses&lt;/h3&gt;
&lt;div className='row mt-3'&gt;
&lt;div className='col-sm'&gt;
&lt;ExpenseList /&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;h3 className='mt-3'&gt;Add Expense&lt;/h3&gt;
&lt;div className='row mt-3'&gt;
&lt;div className='col-sm'&gt;
&lt;AddExpenseForm /&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/AppProvider&gt;
);
};
export default App;
</code></pre>
<p>What's changed:</p>
<ul>
<li>Imported our <strong>AppProvider </strong>(line 8)</li>
<li>Nested our components in the AppProvider element (lines 12 / lines 39)</li>
</ul>
<p>Now that our components are nested within the AppProvider, they have access to <strong>value </strong>object that the AppProvider exposes. </p>
<h2 id="how-to-connect-our-components-to-appcontext">How to Connect our Components to AppContext</h2>
<h3 id="how-to-render-budget-from-context">How to Render Budget from Context</h3>
<p>Now we can start pulling global state values into our components. We'll start with the budget, so jump into <strong>Budget.js </strong>and add the following:</p><pre><code class="language-jsx">import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () =&gt; {
const { budget } = useContext(AppContext);
return (
&lt;div className='alert alert-secondary'&gt;
&lt;span&gt;Budget: £{budget}&lt;/span&gt;
&lt;/div&gt;
);
};
export default Budget;
</code></pre>
<p>What we're doing:</p>
<ul>
<li>We have to import <strong>AppContext</strong> from our Context (line 2)</li>
<li>We import the <strong>useContext</strong> hook, and pass our AppContext to it - &nbsp;this is how a component connects to the context in order to get values from global state</li>
<li>We use <strong>destructuring</strong> to get the <strong>budget</strong> from context (line 5)</li>
<li>We're rendering the budget in our JSX (line 9)</li>
</ul>
<p>Now if you change the budget in AppContext and reload your browser, you will see the budget updates on the UI. This means our component is successfully pulling data from our context. Success! </p>
<h3 id="how-to-render-expenses-from-context">How to Render Expenses from Context</h3>
<p>Now we can do something similar with the expense list. Open up <strong>ExpenseList.js </strong>and update it with the following:</p><pre><code class="language-jsx">import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';
const ExpenseList = () =&gt; {
const { expenses } = useContext(AppContext);
return (
&lt;ul className='list-group'&gt;
{expenses.map((expense) =&gt; (
&lt;ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} /&gt;
))}
&lt;/ul&gt;
);
};
export default ExpenseList;
</code></pre>
<p>What we're doing:</p>
<ul>
<li>Importing our AppContext and useContext hook like before </li>
<li>We've removed the dummy list of expenses</li>
<li>We've replaced the dummy list with the expenses list we store in context</li>
</ul>
<p>Since we've already done the work to render the list of expenses, we don't have to do anything else! Refresh the browser and you'll see the list now comes from context rather than the dummy list.</p>
<p>Remember we exported expenses as part of the value object in the provider. Any component wrapped in the provider can get access to this value object, and use destructuring to get the specific value it needs.</p>
<h3 id="how-to-add-a-new-expense-capturing-form-values">How to Add a New Expense - Capturing Form Values</h3>
<p>So far we've looked at how to get values from state, next we'll look at how we can dispatch actions and update the state.</p>
<p>Before we do that, we need to know the <strong>name</strong> and the <strong>cost</strong> of the new expense that the user has entered. Jump into AddExpenseForm.js and add the following:</p><pre><code class="language-jsx">import React, { useState } from 'react';
const AddExpenseForm = () =&gt; {
const [name, setName] = useState('');
const [cost, setCost] = useState('');
const onSubmit = (event) =&gt; {
};
return (
&lt;form onSubmit={onSubmit}&gt;
&lt;div className='row'&gt;
&lt;div className='col-sm'&gt;
&lt;label for='name'&gt;Name&lt;/label&gt;
&lt;input
required='required'
type='text'
className='form-control'
id='name'
value={name}
onChange={(event) =&gt; setName(event.target.value)}
&gt;&lt;/input&gt;
&lt;/div&gt;
&lt;div className='col-sm'&gt;
&lt;label for='cost'&gt;Cost&lt;/label&gt;
&lt;input
required='required'
type='text'
className='form-control'
id='cost'
value={cost}
onChange={(event) =&gt; setCost(event.target.value)}
&gt;&lt;/input&gt;
&lt;/div&gt;
&lt;div className='col-sm'&gt;
&lt;button type='submit' className='btn btn-primary mt-3'&gt;
Save
&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/form&gt;
);
};
export default AddExpenseForm;
</code></pre>
<p>What we're doing:</p>
<ul>
<li>Using React to control the <strong>input values</strong>. For each input field, we have a state object (lines 7 and 8)</li>
<li>When the user types into the inputs, the corresponding state values will update (lines 25 and 36)</li>
<li>When the user clicks the button, it will call an <strong>onSubmit</strong> function. This function doesn't do anything right now, but this is where we'll dispatch the action from</li>
</ul>
<p>Now we have the form values stored in state, we can dispatch an action to update the state.</p>
<h3 id="how-to-add-a-new-expense-dispatching-an-action">How to Add a New Expense - Dispatching an action </h3>
<p>Update the AddExpenseForm with the following:</p><pre><code class="language-jsx">import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
const AddExpenseForm = () =&gt; {
const { dispatch } = useContext(AppContext);
const [name, setName] = useState('');
const [cost, setCost] = useState('');
const onSubmit = (event) =&gt; {
event.preventDefault();
const expense = {
id: uuidv4(),
name: name,
cost: parseInt(cost),
};
dispatch({
type: 'ADD_EXPENSE',
payload: expense,
});
};
return (
&lt;form onSubmit={onSubmit}&gt;
&lt;div className='row'&gt;
&lt;div className='col-sm'&gt;
&lt;label for='name'&gt;Name&lt;/label&gt;
&lt;input
required='required'
type='text'
className='form-control'
id='name'
value={name}
onChange={(event) =&gt; setName(event.target.value)}
&gt;&lt;/input&gt;
&lt;/div&gt;
&lt;div className='col-sm'&gt;
&lt;label for='cost'&gt;Cost&lt;/label&gt;
&lt;input
required='required'
type='text'
className='form-control'
id='cost'
value={cost}
onChange={(event) =&gt; setCost(event.target.value)}
&gt;&lt;/input&gt;
&lt;/div&gt;
&lt;div className='col-sm'&gt;
&lt;button type='submit' className='btn btn-primary mt-3'&gt;
Save
&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/form&gt;
);
};
export default AddExpenseForm;
</code></pre>
<p>What we're doing:</p>
<ul>
<li>Importing AppContext and useContext as usual </li>
<li>Getting <strong>dispatch</strong> from our global state (line 6)</li>
<li>Creating an <strong>expense object,</strong> containing the name and the cost. This is what will get dispatched as the payload, and what we'll use to update the state. We're also using the uuid package we imported earlier to create an ID. This is used to identify a given expense (line 14).</li>
<li>We're dispatching an <strong>action</strong>, with a type and our payload. The type tells the reducer how to update the state, which we'll see in a minute (line 20)</li>
</ul>
<h3 id="how-to-add-a-new-expense-updating-the-reducer">How to Add a New Expense - Updating the reducer</h3>
<p>That's it from the component side. You'll notice if you run this in the browser, nothing happens. Thats because we haven't updated our reducer to handle the action and update the state. </p>
<p>Jump into <strong>AppContext.js</strong> and update the <strong>reducer</strong> function with the following:</p><pre><code class="language-jsx">const AppReducer = (state, action) =&gt; {
switch (action.type) {
case 'ADD_EXPENSE':
return {
...state,
expenses: [...state.expenses, action.payload],
};
default:
return state;
}
};</code></pre>
<p>What we're doing:</p>
<ul>
<li>We're checking the type of the action (which we get from the action variable) (line 2)</li>
<li>Adding a new case to the switch statement called "ADD_EXPENSE" (line 3)</li>
<li>Returning a new state object with the new expense taking from the payload (which we get from the action variable) (line 4)</li>
</ul>
<blockquote>When we return something from a case statement, the reducer automatically updates the state and re-renders the components, almost like magic.</blockquote>
<p>Now if you run the code, and add a new expense, you can see it gets added to the expense list!</p>
<h3 id="how-to-calculate-spent-so-far">How to Calculate <code>spent so far</code></h3>
<p>The next thing we'll look at is calculating how much the user has spent so far. To do this, we'll take a total of all the expenses the user has spent and display it on the UI.</p>
<p>Open up <strong>ExpenseTotal.js </strong> and update it with the following:</p><pre><code class="language-jsx">import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () =&gt; {
const { expenses } = useContext(AppContext);
const totalExpenses = expenses.reduce((total, item) =&gt; {
return (total += item.cost);
}, 0);
return (
&lt;div className='alert alert-primary'&gt;
&lt;span&gt;Spent so far: £{totalExpenses}&lt;/span&gt;
&lt;/div&gt;
);
};
export default ExpenseTotal;
</code></pre>
<p>What we're doing:</p>
<ul>
<li>importing our useContext and AppContext as usual </li>
<li>Taking the expenses from state (line 5)</li>
<li>Using the reduce function to get a total of all the costs and assigning this to a variable (line 7)</li>
<li>Displaying the variable in our JSX (line 13)</li>
</ul>
<p>Now whenever the user adds an expense, this causes the state to update, which will cause all components connected to the context to re-render and update themselves with new values.</p>
<p>Go ahead and try this out in the browser.</p>
<h3 id="how-to-calculate-remaining">How to Calculate <code>Remaining</code></h3>
<p>Now we'll look at calculating how much budget the user has left to spend. </p>
<p>To do this, we'll get the total costs of the expenses, and subtract it from the budget. If the user goes over budget, i.e the expenses are more than the budget, we want to display a red background (as opposed to a green background). Luckily Bootstrap gives us these nice things already.</p>
<p>Open up Remaining.js and update it with the following:</p><pre><code class="language-jsx">import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () =&gt; {
const { expenses, budget } = useContext(AppContext);
const totalExpenses = expenses.reduce((total, item) =&gt; {
return (total = total + item.cost);
}, 0);
const alertType = totalExpenses &gt; budget ? 'alert-danger' : 'alert-success';
return (
&lt;div className={`alert ${alertType}`}&gt;
&lt;span&gt;Remaining: £{budget - totalExpenses}&lt;/span&gt;
&lt;/div&gt;
);
};
export default Remaining;
</code></pre>
<p>What we're doing</p>
<ul>
<li>Importing expenses and budget from Context (line 5)</li>
<li>Getting the total cost of the expenses using the reduce function (line 7)</li>
<li>Creating a variable to store the CSS classname we want to display (depending on if the user has gone over the budget or not, line 11)</li>
<li>Using a template string to create our classes (line 14)</li>
<li>Rendering the remaining budget using a subtraction (line 15)</li>
</ul>
<p>Now if you run the code in the browser, and add a bunch of expenses until the total goes over 2000, you'll see the "Remaining" component background turns to red!</p>
<h3 id="how-to-remove-an-expense">How to Remove an Expense</h3>
<p>The last thing we'll look at before getting into the challenges is to remove an expense. </p>
<p>When the user clicks the little cross beside an expense, we want to dispatch an action to remove it from state. When this happens, our ExpenseList will re-render with the removed expense.</p>
<p>Jump into ExpenseItem.js and update it with the following:</p><pre><code class="language-jsx">import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
const ExpenseItem = (props) =&gt; {
const { dispatch } = useContext(AppContext);
const handleDeleteExpense = () =&gt; {
dispatch({
type: 'DELETE_EXPENSE',
payload: props.id,
});
};
return (
&lt;li className='list-group-item d-flex justify-content-between align-items-center'&gt;
{props.name}
&lt;div&gt;
&lt;span className='badge badge-primary badge-pill mr-3'&gt;
£{props.cost}
&lt;/span&gt;
&lt;TiDelete size='1.5em' onClick={handleDeleteExpense}&gt;&lt;/TiDelete&gt;
&lt;/div&gt;
&lt;/li&gt;
);
};
export default ExpenseItem;
</code></pre>
<p>What we're doing:</p>
<ul>
<li>Importing dispatch from Context, which allows us to dispatch a delete action (line 6)</li>
<li>Creating a function that gets called when the delete icon is clicked (line 8)</li>
<li>Dispatching an action. Our action contains the type (so the reducer knows how to update the state) and the payload. In this case we're passing the ID of this expense (which we get from props when we rendered the ExpenseList) (line 9)</li>
</ul>
<p>If you try this in the browser, you'll see that nothing happens. Even though we're dispatching an action, we haven't implemented the reducer logic for this action type, so it doesn't know how to update the state.</p>
<p>Jump into AppContext.js and update the reducer function with the following:</p><pre><code class="language-jsx">const AppReducer = (state, action) =&gt; {
switch (action.type) {
case 'ADD_EXPENSE':
return {
...state,
expenses: [...state.expenses, action.payload],
};
case 'DELETE_EXPENSE':
return {
...state,
expenses: state.expenses.filter(
(expense) =&gt; expense.id !== action.payload
),
};
default:
return state;
}
};</code></pre>
<p>All we're really doing here is adding a new case statement, to handle our <strong>DELETE_EXPENSE </strong>action. We're using the filter array method to remove the expense that has the ID which we received from the payload.</p>
<p>Now if you try this, you can remove an expense by clicking the delete icon. Notice how all the other components update as well. Nice!</p>
<h2 id="challenges-to-try">Challenges to Try </h2>
<p>Congrats on making it this far! Now its time for you to have a go at some challenges. Remember you can see how I've done it in the GitHub source code.</p>
<h3 id="allow-the-user-to-edit-the-budget">Allow the user to edit the budget</h3>
<p>You'll notice that so far we have been using a hard coded value for the budget. Your first task is to add functionality that allows the user to edit the budget. Some tips to get started:</p>
<ul>
<li>You will need to add a text input that allows the user to enter a value for their desired budget.</li>
<li>We store the budget in state, so you will need to dispatch an action with a new TYPE and a PAYLOAD that will update the state </li>
</ul>
<h3 id="allow-the-user-to-search-for-an-expense">Allow the user to search for an expense</h3>
<p>If the user has many expenses, it will be difficult to find the one they are looking for. Add a way for the user to search for the expense by name. Some tips to get started:</p>
<ul>
<li>You will need to add an input field which lets the user enter a value to search for. </li>
<li>You'll have to add something to the ExpenseList component that filters the list from context based on this search value. </li>
</ul>
<h3 id="thanks-for-reading-">Thanks for Reading!</h3>
<p><a href="https://reactbeginnerprojects.com"><img src="https://www.freecodecamp.org/news/content/images/size/w1000/2021/03/Screenshot-2021-03-10-at-08.33.56.png" alt=""></a></p>
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
