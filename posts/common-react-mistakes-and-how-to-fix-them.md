---
card: "/images/default.jpg"
tags: [React]
description: Let's go over the most common mistakes you might be making in
author: "Milad E. Fahmy"
title: "4 Common React Mistakes You Might Be Making – And How to Fix Them"
created: "2021-08-15T19:23:41+02:00"
modified: "2021-08-15T19:23:41+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-clean-code tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">4 Common React Mistakes You Might Be Making – And How to Fix Them</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/06/fix-react-code-cover-image.png 300w,
/news/content/images/size/w600/2021/06/fix-react-code-cover-image.png 600w,
/news/content/images/size/w1000/2021/06/fix-react-code-cover-image.png 1000w,
/news/content/images/size/w2000/2021/06/fix-react-code-cover-image.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/06/fix-react-code-cover-image.png" alt="4 Common React Mistakes You Might Be Making – And How to Fix Them">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Let's go over the most common mistakes you might be making in your React code right now, plus how to fix them.</p>
<p>If you want to create amazing React applications, it's essential to avoid many common errors along the way.</p>
<p>In this article, we'll not only cover how to fix your mistakes quickly, but also give you some awesome design patterns to make your code better and more reliable going forward.</p>
<blockquote>Want to become a professional React developer in record time? Check out <a href="https://bit.ly/the-react-bootcamp"><strong>The React Bootcamp</strong></a>.</blockquote>
<h2 id="1-don-t-pass-state-variables-to-setstate-in-react">1. Don't pass state variables to setState in React</h2>
<p>In the code below, we have a todo application that displays an array of todos (in <code>TodoList</code>). </p>
<p>We can add new todos in the <code>AddTodo</code> component, which updates the <code>todos</code> array in App.</p>
<p>What's the problem with the props that we have passed to <code>AddTodo</code>?</p><pre><code class="language-js">export default function App() {
const [todos, setTodos] = React.useState([]);
return (
&lt;div&gt;
&lt;h1&gt;Todo List&lt;/h1&gt;
&lt;TodoList todos={todos} /&gt;
&lt;AddTodo setTodos={setTodos} todos={todos} /&gt;
&lt;/div&gt;
);
}
function AddTodo({ setTodos, todos }) {
function handleAddTodo(event) {
event.preventDefault();
const text = event.target.elements.addTodo.value;
const todo = {
id: 4,
text,
done: false
};
const newTodos = todos.concat(todo);
setTodos(newTodos);
}
return (
&lt;form onSubmit={handleAddTodo}&gt;
&lt;input name="addTodo" placeholder="Add todo" /&gt;
&lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
);
}</code></pre>
<p>We are adding the new todo to the <code>todos</code> array and then setting state as we should. This will update the displayed todos in the <code>TodoList</code> component.</p>
<p>However, since the new state is based off of the previous state, we do not need to pass down the todos array.</p>
<p>Instead, we can access the previous todos state by writing a function within the setState function. Whatever we return from this function will be set as the new state.</p>
<p>In other words, we only need to pass down the <code>setTodos</code> function to properly update state:</p><pre><code class="language-js">export default function App() {
const [todos, setTodos] = React.useState([]);
return (
&lt;div&gt;
&lt;h1&gt;Todo List&lt;/h1&gt;
&lt;TodoList todos={todos} /&gt;
&lt;AddTodo setTodos={setTodos} /&gt;
&lt;/div&gt;
);
}
function AddTodo({ setTodos }) {
function handleAddTodo(event) {
event.preventDefault();
const text = event.target.elements.addTodo.value;
const todo = {
id: 4,
text,
done: false
};
setTodos(prevTodos =&gt; prevTodos.concat(todo));
}
return (
&lt;form onSubmit={handleAddTodo}&gt;
&lt;input name="addTodo" placeholder="Add todo" /&gt;
&lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
);
}</code></pre>
<h2 id="2-make-your-react-components-single-responsibility">2. Make your React components single responsibility</h2>
<p>In the application below, we're fetching a number of the users from an API within our app component, putting that user data in a state, and then displaying it within our user interface. </p>
<p>What is the problem with the <code>App</code> component?</p><pre><code class="language-js">export default function App() {
const [users, setUsers] = React.useState([]);
React.useEffect(() =&gt; {
fetch("https://jsonplaceholder.typicode.com/users")
.then((res) =&gt; res.json())
.then((data) =&gt; {
setUsers(data);
});
}, []);
return (
&lt;&gt;
&lt;h1&gt;Users&lt;/h1&gt;
{users.map((user) =&gt; (
&lt;div key={user.id}&gt;
&lt;div&gt;{user.name}&lt;/div&gt;
&lt;/div&gt;
))}
&lt;/&gt;
);
}</code></pre>
<p>In our component, we're doing multiple things.</p>
<p>We are not only doing remote data fetching from a server, but we are also managing state as well as displaying that state with JSX.</p>
<p>We are making our component do multiple things. Instead, your components should do only one thing and do that thing well. </p>
<p>This is one key design principle from the acronym SOLID, which lays out five rules for writing more reliable software. </p>
<p>The S in SOLID stands for the "single-responsibility principle", an essential one to use when writing React components.</p>
<p>We can divide our <code>App</code> component into separate components and hooks that each have their own responsibility. First, we will be extracting the remote data fetching to a custom React hook. </p>
<p>This hook, which we'll call useUserData, will take care of fetching the data and putting it in local state.</p><pre><code class="language-js">function useUserData() {
const [users, setUsers] = React.useState([]);
React.useEffect(() =&gt; {
fetch("https://jsonplaceholder.typicode.com/users")
.then((res) =&gt; res.json())
.then((json) =&gt; {
setUsers(json);
});
}, []);
return users;
}</code></pre>
<p>After that, we will call the hook within <code>App</code> to access our <code>users</code> array.</p>
<p>However, instead of displaying user data directly within our return statement in <code>App</code>, we will create a separate <code>User</code> component which will contain all of the JSX necessary to display each element in that array, plus any related styles (if we have any).</p><pre><code class="language-js">function User({ user }) {
const styles = {
container: {
margin: '0 auto',
textAlign: 'center'
}
};
return (
&lt;div style={styles.container}&gt;
&lt;div&gt;{user.name}&lt;/div&gt;
&lt;/div&gt;
);
}
export default function App() {
const users = useUserData();
return (
&lt;&gt;
&lt;h1&gt;Users&lt;/h1&gt;
{users.map((user) =&gt; (
&lt;User key={user.id} user={user} /&gt;
))}
&lt;/&gt;
);
}</code></pre>
<p>After this refactoring, our components now have a clear, individual task to perform, which makes our app much easier to understand and extend.</p>
<h2 id="3-make-your-side-effects-single-responsibility">3. Make your side effects single responsibility</h2>
<p>In our <code>App</code> component below, we are fetching both user and post data.</p>
<p>When the location – the URL – of our app changes, we fetch both the user and post data.</p><pre><code class="language-js">export default function App() {
const location = useLocation();
function getAuthUser() {
// fetches authenticated user
}
function getPostData() {
// fetches post data
}
React.useEffect(() =&gt; {
getAuthUser();
getPostData();
}, [location.pathname]);
return (
&lt;main&gt;
&lt;Navbar /&gt;
&lt;Post /&gt;
&lt;/main&gt;
);
}</code></pre>
<p>We display a new post if the URL changes, but do we need to fetch that every time the location changes? </p>
<p>We don't.</p>
<p>In much of your React code, you may be tempted to stuff all of your side effects within a single use effect function. But doing so violates the single responsibility principle we just mentioned. </p>
<p>This can result in problems such as performing side effects when we don't need to. Remember to keep your side effects to a single responsibility as well. </p>
<p>In order to fix our code, all we need to do is call <code>getAuthUser</code> within a separate use effect hook. This ensures it is not called whenever the location pathname changes, but only once when our app component mounts.</p><pre><code class="language-js">export default function App() {
const location = useLocation();
React.useEffect(() =&gt; {
getAuthUser();
}, []);
React.useEffect(() =&gt; {
getPostData();
}, [location.pathname]);
return (
&lt;main&gt;
&lt;Navbar /&gt;
&lt;Post /&gt;
&lt;/main&gt;
);
}</code></pre>
<h2 id="4-use-ternaries-instead-of-in-jsx">4. Use ternaries instead of <code>&amp;&amp;</code> in JSX</h2>
<p>Let's say we are displaying a list of posts in a dedicated component, <code>PostList</code>.</p>
<p>It makes sense to check whether we have posts before we iterate over them. </p>
<p>Since our <code>posts</code> list is an array, we can use the <code>.length</code> property to check and see if it is a truthy value (greater than 0). If so, we can map over that array with our JSX. </p>
<p>We can express all this with the and <code>&amp;&amp;</code> operator:</p><pre><code class="language-js">export default function PostList({ posts }) {
return (
&lt;div&gt;
&lt;ul&gt;
{posts.length &amp;&amp;
posts.map((post) =&gt; &lt;PostItem key={post.id} post={post} /&gt;)}
&lt;/ul&gt;
&lt;/div&gt;
);
}
</code></pre>
<p>However, you might be surprised with what we see, if we were to execute such code. If our array is empty, we don't see nothing – we see the number 0! </p>
<p>What? Why is this?! </p>
<p>This is a JavaScript-related problem, because the length of our array is 0. Because 0 is a falsy value, the <code>&amp;&amp;</code> operator doesn't look at the right hand side of the expression. It just returns the left hand side – 0. </p>
<p>What is the best way to fix this and to prevent such errors in the future? </p>
<p>In many cases we shouldn't use the and operator, but instead use a ternary to explicitly define what will be displayed in the event that condition is not met. </p>
<p>If we were to write the following code with a ternary, we would include the value <code>null</code> in the else condition to ensure that nothing is displayed.</p><pre><code class="language-js">export default function PostList({ posts }) {
return (
&lt;div&gt;
&lt;ul&gt;
{posts.length
? posts.map((post) =&gt; &lt;PostItem key={post.id} post={post} /&gt;)
: null}
&lt;/ul&gt;
&lt;/div&gt;
);
}</code></pre>
<p>By using ternaries instead of <code>&amp;&amp;</code>, you can avoid many annoying bugs like this one.</p>
<p>Thanks for reading!</p>
<h2 id="the1waytolearnreactinrecordtime">The #1 Way to Learn React in Record Time</h2>
<p><strong><a href="http://bit.ly/join-react-bootcamp">The React Bootcamp</a></strong> takes everything you should know about learning React and bundles it into one comprehensive package, including videos, cheatsheets, plus special bonuses.</p>
<p>Gain the insider information <strong>100s</strong> of developers have already used to master React, find their dream jobs, and take control of their future:</p>
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
