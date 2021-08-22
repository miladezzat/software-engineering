---
card: "https://cdn-media-1.freecodecamp.org/images/1*mKtppOPghvXQKu0jte2B_g.jpeg"
tags: [JavaScript]
description: "React v16.7.0-alpha introduced Hooks, and I’m excited."
author: "Milad E. Fahmy"
title: "How to Build a Todo List with React Hooks"
created: "2021-08-16T11:35:34+02:00"
modified: "2021-08-16T11:35:34+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-tech tag-technology tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build a Todo List with React Hooks</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*mKtppOPghvXQKu0jte2B_g.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*mKtppOPghvXQKu0jte2B_g.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*mKtppOPghvXQKu0jte2B_g.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*mKtppOPghvXQKu0jte2B_g.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*mKtppOPghvXQKu0jte2B_g.jpeg" alt="How to Build a Todo List with React Hooks">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h3 id="whatarehooks">What Are Hooks?</h3>
<p>They’re functions that give you React features like state and lifecycle hooks without ES6 classes.</p>
<p>Some benefits are</p>
<ul>
<li>Isolating stateful logic, making it easier to test.</li>
<li>Sharing stateful logic without render props or higher-order components.</li>
<li>Separating your app’s concerns based on logic, not lifecycle hooks.</li>
<li>Avoiding ES6 classes, because they’re quirky, <em>not actually classes,</em> and trip up even experienced JavaScript developers.</li>
</ul>
<p>For more detail see <a href="https://reactjs.org/docs/hooks-intro.html">React’s official Hooks intro</a>.</p>
<h4 id="adopthooksgradually">Adopt Hooks Gradually</h4>
<p>At the time of writing, Hooks were in alpha, and their API could have changed any time.</p>
<p>React 16.8.0 was the first stable release to support Hooks, and there are more tutorials and example code every day. However, since there are no plans to remove classes from React and Hooks will work with existing code, the React team recommends avoiding "big rewrites". Instead, they suggest practicing Hooks in non-critical components first, then using them in place of classes going forward.</p>
<h3 id="letsbuildatodolist">Let’s Build a Todo List</h3>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*zRNbgEedt8wchJNrZ1NuHg.gif" alt=""></p>
<p>Todo lists are the most overused example for a good reason — they’re fantastic practice. I recommend this for any language or library you want to try out.</p>
<p>Ours will only do a few things</p>
<ul>
<li>Display todos in a nice Material Design fashion</li>
<li>Allow adding todos via input</li>
<li>Delete todos</li>
</ul>
<h3 id="setup">Setup</h3>
<p>Here are the <a href="https://github.com/yazeedb/react-hooks-todo">GitHub</a> and <a href="https://codesandbox.io/s/github/yazeedb/react-hooks-todo">CodeSandbox</a> links.</p>
<pre><code>git clone https://github.com/yazeedb/react-hooks-todo
cd react-hooks-todo
npm install
</code></pre>
<p>The <code>master</code> branch has the finished project, so checkout the <code>start</code> branch if you wish to follow along.</p>
<p><code>git checkout start</code></p>
<p>And run the project.</p>
<p><code>npm start</code></p>
<p>The app should be running on <code>localhost:3000</code>, and here’s our initial UI.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*ohwA9I861XXghIFAL2Kpcw.png" alt=""></p>
<p>It’s already set up with <a href="http://material-ui.com/">material-ui</a> to give our page a professional look. Let’s start adding some functionality!</p>
<h3 id="thetodoformcomponent">The TodoForm Component</h3>
<p>Add a new file, <code>src/TodoForm.js</code>. Here’s the starting code.</p>
<pre><code class="language-jsx">import React from 'react';
import TextField from '@material-ui/core/TextField';
const TodoForm = ({ saveTodo }) =&gt; {
return (
&lt;form&gt;
&lt;TextField variant="outlined" placeholder="Add todo" margin="normal" /&gt;
&lt;/form&gt;
);
};
export default TodoForm;
</code></pre>
<p>Given the name, we know its job is to add todos to our state. Speaking of which, <strong>here’s our first hook</strong>.</p>
<h3 id="usestate">useState</h3>
<p>Check this code out</p>
<pre><code class="language-js">import { useState } from 'react';
const [value, setValue] = useState('');
</code></pre>
<p><code>useState</code> is just a function that takes initial state and returns an array. Go ahead and <code>console.log</code> it.</p>
<p>The array’s first index is your state’s current value, and the second index is an updater function.</p>
<p>So we appropriately named them <code>value</code> and <code>setValue</code> using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">ES6 destructuring assignment</a>.</p>
<h3 id="usestatewithforms">useState with Forms</h3>
<p>Our form should track the input’s value and call <code>saveTodo</code> upon submit. <code>useState</code> can help us with that!</p>
<p>Update <code>TodoForm.js</code>, the new code’s in <strong>bold</strong>.</p>
<pre><code class="language-jsx">import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
const TodoForm = ({ saveTodo }) =&gt; {
const [value, setValue] = useState('');
return (
&lt;form
onSubmit={(event) =&gt; {
event.preventDefault();
saveTodo(value);
}}
&gt;
&lt;TextField
variant="outlined"
placeholder="Add todo"
margin="normal"
onChange={(event) =&gt; {
setValue(event.target.value);
}}
value={value}
/&gt;
&lt;/form&gt;
);
};
export default TodoForm;
</code></pre>
<p>Back in <code>index.js</code>, import and use this component.</p>
<pre><code class="language-jsx">// ...
import TodoForm from './TodoForm';
// ...
const App = () =&gt; {
return (
&lt;div className="App"&gt;
&lt;Typography component="h1" variant="h2"&gt;
Todos
&lt;/Typography&gt;
&lt;TodoForm saveTodo={console.warn} /&gt;
&lt;/div&gt;
);
};
</code></pre>
<p>Now your value’s logged on submit (press enter).</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*R3Bf_6tAIC9nGyBSoW48Tg.png" alt=""></p>
<h3 id="usestatewithtodos">useState With Todos</h3>
<p>We also need state for our todos. Import <code>useState</code> in <code>index.js</code>. Our initial state should be an empty array.</p>
<pre><code class="language-jsx">import React, { useState } from 'react';
// ...
const App = () =&gt; {
const [todos, setTodos] = useState([]);
// ...
};
</code></pre>
<h3 id="todolistcomponent">TodoList Component</h3>
<p>Create a new file called <code>src/TodoList.js</code>.</p>
<p>Edit: Thank you <a href="https://medium.com/@takahirohata">Takahiro Hata</a> for helping me move <code>onClick</code> to the correct spot!</p>
<pre><code class="language-jsx">import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
const TodoList = ({ todos, deleteTodo }) =&gt; (
&lt;List&gt;
{todos.map((todo, index) =&gt; (
&lt;ListItem key={index.toString()} dense button&gt;
&lt;Checkbox tabIndex={-1} disableRipple /&gt;
&lt;ListItemText primary={todo} /&gt;
&lt;ListItemSecondaryAction&gt;
&lt;IconButton
aria-label="Delete"
onClick={() =&gt; {
deleteTodo(index);
}}
&gt;
&lt;DeleteIcon /&gt;
&lt;/IconButton&gt;
&lt;/ListItemSecondaryAction&gt;
&lt;/ListItem&gt;
))}
&lt;/List&gt;
);
export default TodoList;
</code></pre>
<p>It takes two props</p>
<ul>
<li><code>todos</code>: The array of todos. We <code>map</code> over each one and create a list item.</li>
<li><code>deleteTodo</code>: Clicking a todo’s <code>IconButton</code> fires this function. It passes the <code>index</code>, which will uniquely identify a todo in our list.</li>
</ul>
<p>Import this component in your <code>index.js</code>.</p>
<pre><code class="language-jsx">import TodoList from './TodoList';
import './styles.css';
const App = () =&gt; {
//...
};
</code></pre>
<p>And use it in your <code>App</code> function like so</p>
<pre><code class="language-jsx">&lt;TodoForm saveTodo={console.warn} /&gt;
&lt;TodoList todos={todos} /&gt;
</code></pre>
<h3 id="addingtodos">Adding Todos</h3>
<p>Still in <code>index.js</code>, let’s edit our <code>TodoForm</code>’s prop, <code>saveTodo</code>.</p>
<pre><code class="language-jsx">&lt;TodoForm
saveTodo={(todoText) =&gt; {
const trimmedText = todoText.trim();
if (trimmedText.length &gt; 0) {
setTodos([...todos, trimmedText]);
}
}}
/&gt;
</code></pre>
<p>Simply merge the existing todos with our new one, extra whitespace cut out.</p>
<p>We can add todos now!</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*3fiAjGTZh6umusulyIqbkg.gif" alt=""></p>
<h3 id="clearingtheinput">Clearing the Input</h3>
<p>Notice the input isn’t clearing after adding a new todo. That’s a bad user experience!</p>
<p>We can fix it with a small code change in <code>TodoForm.js</code>.</p>
<pre><code class="language-jsx">&lt;form
onSubmit={(event) =&gt; {
event.preventDefault();
saveTodo(value);
setValue('');
}}
/&gt;
</code></pre>
<p>Once a todo’s saved, set the form state to an empty string.</p>
<p>It’s looking good now!</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*N9EeEN3ZG12VubC10OT-9A.gif" alt=""></p>
<h3 id="deletingtodos">Deleting Todos</h3>
<p><code>TodoList</code> provides each todo’s <code>index</code>, as it’s a guaranteed way to find the one we want to delete.</p>
<p><code>TodoList.js</code></p>
<pre><code class="language-jsx">&lt;IconButton
aria-label="Delete"
onClick={() =&gt; {
deleteTodo(index);
}}
&gt;
&lt;DeleteIcon /&gt;
&lt;/IconButton&gt;
</code></pre>
<p>We’ll take advantage of that in <code>index.js</code>.</p>
<pre><code class="language-jsx">&lt;TodoList
todos={todos}
deleteTodo={(todoIndex) =&gt; {
const newTodos = todos.filter((_, index) =&gt; index !== todoIndex);
setTodos(newTodos);
}}
/&gt;
</code></pre>
<p>Whatever todos don’t match the provided <code>index</code> are kept and stored in state using <code>setTodos</code>.</p>
<p>Delete functionality is complete!</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*i7WsUbuF0pI2HS0b6ddZ8Q.gif" alt=""></p>
<h3 id="abstractingtodosusestate">Abstracting Todos useState</h3>
<p>I mentioned that Hooks are great for separating state and component logic. Here’s what that may look like in our todo app.</p>
<p>Create a new file called <code>src/useTodoState.js</code>.</p>
<pre><code class="language-js">import { useState } from 'react';
export default (initialValue) =&gt; {
const [todos, setTodos] = useState(initialValue);
return {
todos,
addTodo: (todoText) =&gt; {
setTodos([...todos, todoText]);
},
deleteTodo: (todoIndex) =&gt; {
const newTodos = todos.filter((_, index) =&gt; index !== todoIndex);
setTodos(newTodos);
}
};
};
</code></pre>
<p>It’s our same code from <code>index.js</code>, but separated! Our state management’s no longer tightly coupled to the component.</p>
<p>Now just import it.</p>
<pre><code class="language-jsx">import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodoState from './useTodoState';
import './styles.css';
const App = () =&gt; {
const { todos, addTodo, deleteTodo } = useTodoState([]);
return (
&lt;div className="App"&gt;
&lt;Typography component="h1" variant="h2"&gt;
Todos
&lt;/Typography&gt;
&lt;TodoForm
saveTodo={(todoText) =&gt; {
const trimmedText = todoText.trim();
if (trimmedText.length &gt; 0) {
addTodo(trimmedText);
}
}}
/&gt;
&lt;TodoList todos={todos} deleteTodo={deleteTodo} /&gt;
&lt;/div&gt;
);
};
const rootElement = document.getElementById('root');
ReactDOM.render(&lt;App /&gt;, rootElement);
</code></pre>
<p>And everything still works like normal.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*i7WsUbuF0pI2HS0b6ddZ8Q.gif" alt=""></p>
<h3 id="abstractingforminputusestate">Abstracting Form Input useState</h3>
<p>We can do the same with our form!</p>
<p>Create a new file, <code>src/useInputState.js</code>.</p>
<pre><code class="language-js">import { useState } from 'react';
export default (initialValue) =&gt; {
const [value, setValue] = useState(initialValue);
return {
value,
onChange: (event) =&gt; {
setValue(event.target.value);
},
reset: () =&gt; setValue('')
};
};
</code></pre>
<p>And now <code>TodoForm.js</code> should look like this.</p>
<pre><code class="language-jsx">import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';
const TodoForm = ({ saveTodo }) =&gt; {
const { value, reset, onChange } = useInputState('');
return (
&lt;form
onSubmit={(event) =&gt; {
event.preventDefault();
saveTodo(value);
reset();
}}
&gt;
&lt;TextField
variant="outlined"
placeholder="Add todo"
margin="normal"
onChange={onChange}
value={value}
/&gt;
&lt;/form&gt;
);
};
export default TodoForm;
</code></pre>
<p>And we’re all done! Hope you enjoyed, until next time!</p>
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
