---
card: "/images/default.jpg"
tags: [JavaScript]
description: Since the announcement of React Hooks, hundreds, if not thous
author: "Milad E. Fahmy"
title: "How to manage state in a React app with just Context and Hooks"
created: "2021-08-15T19:32:49+02:00"
modified: "2021-08-15T19:32:49+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-react-hooks tag-redux tag-react-router ">
<header class="post-full-header">
<h1 class="post-full-title">How to manage state in a React app with just Context and&nbsp;Hooks</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/09/home-page-2.png 300w,
/news/content/images/size/w600/2019/09/home-page-2.png 600w,
/news/content/images/size/w1000/2019/09/home-page-2.png 1000w,
/news/content/images/size/w2000/2019/09/home-page-2.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/09/home-page-2.png" alt="How to manage state in a React app with just Context and&nbsp;Hooks">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Since the announcement of React Hooks, hundreds, if not thousands of articles, libraries, and video courses about them have been released. If you look carefully into the sea of resources, you'll find an article I wrote a while back that involved building a sample application using Hooks. You can find that article <a href="https://freecodecamp.org/news/how-to-build-a-movie-search-app-using-react-hooks-24eb72ddfaf7/">here</a>.</p>
<p>Based on that article, a lot (two actually) of people asked questions related to how State can be managed in a React application using just Context and Hooks, which led to me doing a little research on the subject.</p>
<p>So for this article, we will be working with a pattern for managing state using two very important Hooks, useContext and useReducer, to build a simple music gallery app. The application will have only two views: one for login and the other to list the songs in that gallery.</p>
<p>The main reason for the login page is to show how we can share the Auth state across the application, which is a common use case for applications that use a library like Redux.</p>
<p>By the time we are done we should have an application that looks like the images below:</p>
<figcaption>Login Page</figcaption>
</figure>
<figcaption>Home Page (I used the “hooked” name again, smart right?)</figcaption>
</figure>
<p>For the backend server, I set up a simple Express application and hosted it on Heroku. It has two main endpoints:</p>
<ul>
<li><code>/login</code> — For authentication. On successful login, it returns a JWT token and user details.</li>
<li><code>/songs</code> — Returns a list of songs.</li>
</ul>
<p>In case you want to add extra functionality, the repository for the backend application can be found <a href="https://github.com/samie820/hooks-state-management-backend" rel="noopener">here</a>.</p>
<h3 id="recap">RECAP</h3>
<p>Before we go into building the application, let’s look at some of the hooks we will be using:</p>
<ul>
<li><code>useState</code> — This hook allows us to use state in function components (the equivalent to <code>this.state</code> and <code>this.setState</code> in class components)</li>
<li><code>useContext</code> — This hook takes in a context object and returns whatever is passed in as a value prop in <code>MyContext.Provider</code> . If you do not know about context, it's a way of passing state from a parent component to any other component within the tree (no matter how deep) without having to pass it through other components that do not require it (a problem aptly named prop drilling). You can read more about context <a href="https://reactjs.org/docs/context.html" rel="noopener">here</a>.</li>
<li><code>useReducer</code> — This is an alternative to <code>useState</code> and it can be used for complex state logic. This is my favorite hook because it works just like the Redux library. It accepts a reducer of type:</li>
</ul><pre><code class="language-javascript">(state, action) =&gt; newState</code></pre>
<p>And also an initial state object before returning the new state.</p>
<h3 id="getting-started">GETTING STARTED</h3>
<p>To get started, we are going to use the <a href="https://github.com/facebook/create-react-app">create-react-app</a> library to bootstrap the project. But before that, below are some of the requirements needed to follow along:</p>
<ul>
<li>Node (≥ 6)</li>
<li>A text editor</li>
</ul>
<p>In your terminal, enter the command:</p><pre><code class="language-bash">npx create-react-app hooked</code></pre>
<p>If you do not have <code>npx</code> available you can install create-react-app globally on your system:</p><pre><code class="language-javascript">npm install -g create-react-app
create-react-app hooked</code></pre>
<p>You will create five components by the end of this article:</p>
<ul>
<li>Header.js — This component will contain the header of the application (obviously), and also display a logout button that contains the user’s first name. The button will only show if the user is authenticated.</li>
<li>App.js — This is the top-level component where we will create the authentication context (I will talk about this later). This component will also conditionally render either the Login component if the user isn’t logged in or the Home component if the user is authenticated.</li>
<li>Home.js — This component will fetch a list of songs from the server and render it on the page.</li>
<li>Login.js — This component will contain the login form for the user. It will also be responsible for making a POST request to the login endpoint and updating the authentication context with the response from the server.</li>
<li>Card.js — This is a presentational component (UI) that renders the details of a song passed into it.</li>
</ul>
<p>Now let's create empty components that we will later add logic to. In the <code>src</code> folder, create a folder and name it <code>components</code> then create four these four files, namely, <code>Header.js</code>, <code>Home.js</code>, <code>Login.js</code>, and <code>Card.js</code>:</p>
<h4 id="header-js"><br>Header.js</h4><pre><code class="language-javascript">import React from "react";
export const Header = () =&gt; {
return (
&lt;nav id="navigation"&gt;
&lt;h1 href="#" className="logo"&gt;
HOOKED
&lt;/h1&gt;
&lt;/nav&gt;
);
};
export default Header;</code></pre>
<p><a href="Home.js"><strong>Home.js</strong></a></p><pre><code class="language-javascript">import React from "react";
export const Home = () =&gt; {
return (
&lt;div className="home"&gt;
&lt;/div&gt;
);
};
export default Home;</code></pre>
<h4 id="login-js">Login.js</h4><pre><code class="language-javascript">import React from "react";
import logo from "../logo.svg";
import { AuthContext } from "../App";
export const Login = () =&gt; {
return (
&lt;div className="login-container"&gt;
&lt;div className="container"&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
);
};
export default Login;</code></pre>
<p>And the <code>App.js</code> file should look like this:</p><pre><code class="language-javascript">import React from "react";
import "./App.css";
function App() {
return (
&lt;div className="App"&gt;&lt;/div&gt;
);
}
export default App;</code></pre>
<p>In the <code>App.js</code> file, we will create the Auth context that will pass the auth state from this component to any other component that requires it. Create an authentication context like this below:</p><pre><code class="language-javascript">import React from "react";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
export const AuthContext = React.createContext(); // added this
function App() {
return (
&lt;AuthContext.Provider&gt;
&lt;div className="App"&gt;&lt;/div&gt;
&lt;/AuthContext.Provider&gt;
);
}
export default App;</code></pre>
<p>Then we add the <code>useReducer</code> hook to handle our authentication state, and conditionally render either the <strong>Login</strong> component or the <strong>Home</strong> component.</p>
<p>Remember that the <code>useReducer</code> hook takes two parameters, a reducer (which is simply a function that takes in state and action as parameters and returns a new state based on an action) and an initial state which will be passed into the reducer. Let's then add the hook into our <code>App</code> component as shown below:</p><pre><code class="language-javascript">import React from "react";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
export const AuthContext = React.createContext();
const initialState = {
isAuthenticated: false,
user: null,
token: null,
};
const reducer = (state, action) =&gt; {
switch (action.type) {
case "LOGIN":
localStorage.setItem("user", JSON.stringify(action.payload.user));
localStorage.setItem("token", JSON.stringify(action.payload.token));
return {
...state,
isAuthenticated: true,
user: action.payload.user,
token: action.payload.token
};
case "LOGOUT":
localStorage.clear();
return {
...state,
isAuthenticated: false,
user: null
};
default:
return state;
}
};
function App() {
const [state, dispatch] = React.useReducer(reducer, initialState);
return (
&lt;AuthContext.Provider
value={{
state,
dispatch
}}
&gt;
&lt;Header /&gt;
&lt;div className="App"&gt;{!state.isAuthenticated ? &lt;Login /&gt; : &lt;Home /&gt;}&lt;/div&gt;
&lt;/AuthContext.Provider&gt;
);
}
export default App;</code></pre>
<p>There is a lot going on in the snippet above, but let me explain each part:</p><pre><code class="language-javascript">const initialState = {
isAuthenticated: false,
user: null,
token: null,
};</code></pre>
<p>The above snippet is our initial state object that will be used in our reducer. The values in this object depend mainly on your use case. In our case we need to check if a user is authenticated, contains the <code>user</code> data, and if a <code>token</code> was sent back from the server after login.</p><pre><code class="language-javascript">const reducer = (state, action) =&gt; {
switch (action.type) {
case "LOGIN":
localStorage.setItem("user", JSON.stringify(action.payload.user));
localStorage.setItem("token", JSON.stringify(action.payload.token));
return {
...state,
isAuthenticated: true,
user: action.payload.user,
token: action.payload.token
};
case "LOGOUT":
localStorage.clear();
return {
...state,
isAuthenticated: false,
user: null,
token: null,
};
default:
return state;
}
};</code></pre>
<p>The reducer function contains a case-switch statement that, based on certain actions, returns a new state. The actions in the reducer are:</p>
<ul>
<li><code>LOGIN</code> — When this type of action is dispatched, it will also be dispatched with a payload (containing <code>user</code> and <code>token</code> ). It saves the user and token to localStorage and then returns a new state, setting <code>isAuthenticated</code> to <code>true</code>, and also sets the <code>user</code> and <code>token</code> keys to their respective values based on the action’s payload.</li>
<li><code>LOGOUT</code> — When this action is dispatched, we clear localStorage of all data and set <code>user</code> and <code>token</code> to <code>null</code> .</li>
</ul>
<p>If no action is dispatched, it returns the initial state.</p><pre><code class="language-javascript">const [state, dispatch] = React.useReducer(reducer, initialState);</code></pre>
<p>The <code>useReducer</code> hook &nbsp;returns two parameters, <code>state</code> and <code>dispatch</code> . <code>state</code> contains the state that is used in the component and it is updated based on the actions dispatched. <code>Dispatch</code> is a function that is used in the application to call/dispatch actions that transform or change the state.</p><pre><code class="language-javascript">&lt;AuthContext.Provider
value={{
state,
dispatch
}}
&gt;
&lt;Header /&gt;
&lt;div className="App"&gt;{!state.isAuthenticated ? &lt;Login /&gt; : &lt;Home /&gt;}&lt;/div&gt;
&lt;/AuthContext.Provider&gt;</code></pre>
<p>Here in the <code>Context.Provider</code> component, we are passing an object into the <code>value</code> prop. The object contains the <code>state</code> and the <code>dispatch</code> function so that it can be used by any other component that requires that context. Then we conditionally render the components–if the user is authenticated we render the <code>Home</code> component, else we render the <code>Login</code> component.</p>
<h4 id="login-component">Login Component</h4>
<p>In the login component, let us add the necessary elements for the form as shown below:</p><pre><code class="language-javascript">import React from "react";
export const Login = () =&gt; {
return (
&lt;div className="login-container"&gt;
&lt;div className="container"&gt;
&lt;form&gt;
&lt;h1&gt;Login&lt;/h1&gt;
&lt;label htmlFor="email"&gt;
Email Address
&lt;input
type="text"
name="email"
id="email"
/&gt;
&lt;/label&gt;
&lt;label htmlFor="password"&gt;
Password
&lt;input
type="password"
name="password"
id="password"
/&gt;
&lt;/label&gt;
&lt;button&gt;
"Login"
&lt;/button&gt;
&lt;/form&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
);
};
export default Login;</code></pre>
<p>In the above code, we added the JSX that displays the form, next we will be adding the <code>useState</code> hook to handle the form state. Once we add the hook, our code should look like this:</p><pre><code class="language-javascript">import React from "react";
export const Login = () =&gt; {
const initialState = {
email: "",
password: "",
isSubmitting: false,
errorMessage: null
};
const [data, setData] = React.useState(initialState);
const handleInputChange = event =&gt; {
setData({
...data,
[event.target.name]: event.target.value
});
};
return (
&lt;div className="login-container"&gt;
&lt;div className="container"&gt;
&lt;form&gt;
&lt;h1&gt;Login&lt;/h1&gt;
&lt;label htmlFor="email"&gt;
Email Address
&lt;input
type="text"
value={data.email}
onChange={handleInputChange}
name="email"
id="email"
/&gt;
&lt;/label&gt;
&lt;label htmlFor="password"&gt;
Password
&lt;input
type="password"
value={data.password}
onChange={handleInputChange}
name="password"
id="password"
/&gt;
&lt;/label&gt;
{data.errorMessage &amp;&amp; (
&lt;span className="form-error"&gt;{data.errorMessage}&lt;/span&gt;
)}
&lt;button disabled={data.isSubmitting}&gt;
{data.isSubmitting ? (
"Loading..."
) : (
"Login"
)}
&lt;/button&gt;
&lt;/form&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
);
};
export default Login;</code></pre>
<p>In the code above, we passed in an <code>initialState</code> object into the <code>useState</code>hook. In the object we handle the email state, the password state, a state that is used to check if the form is being sent to the server and also an <code>errorMessage</code> value that handles errors from the server.</p>
<p>Next, we will add a function that handles the form submission to the backend API. In that function, we will use the <code>fetch</code> API to send the payload to the server. If the response is successful, we will dispatch a <code>LOGIN</code> action and also pass the response from the server as a payload in the dispatched action. If there is an error from the server (if the login credentials are not valid), we call <code>setData</code> and pass the <code>errorMessage</code> from the server which will be displayed on the form. In order to call dispatch, we need to import the <code>AuthContext</code> from the <code>App</code> component into our <code>Login</code> component and then use the <code>dispatch</code> function in the app. Your final <code>Login</code> component should look like below:</p><pre><code class="language-javascript">import React from "react";
import { AuthContext } from "../App";
export const Login = () =&gt; {
const { dispatch } = React.useContext(AuthContext);
const initialState = {
email: "",
password: "",
isSubmitting: false,
errorMessage: null
};
const [data, setData] = React.useState(initialState);
const handleInputChange = event =&gt; {
setData({
...data,
[event.target.name]: event.target.value
});
};
const handleFormSubmit = event =&gt; {
event.preventDefault();
setData({
...data,
isSubmitting: true,
errorMessage: null
});
fetch("https://hookedbe.herokuapp.com/api/login", {
method: "post",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
username: data.email,
password: data.password
})
})
.then(res =&gt; {
if (res.ok) {
return res.json();
}
throw res;
})
.then(resJson =&gt; {
dispatch({
type: "LOGIN",
payload: resJson
})
})
.catch(error =&gt; {
setData({
...data,
isSubmitting: false,
errorMessage: error.message || error.statusText
});
});
};
return (
&lt;div className="login-container"&gt;
&lt;div className="container"&gt;
&lt;form onSubmit={handleFormSubmit}&gt;
&lt;h1&gt;Login&lt;/h1&gt;
&lt;label htmlFor="email"&gt;
Email Address
&lt;input
type="text"
value={data.email}
onChange={handleInputChange}
name="email"
id="email"
/&gt;
&lt;/label&gt;
&lt;label htmlFor="password"&gt;
Password
&lt;input
type="password"
value={data.password}
onChange={handleInputChange}
name="password"
id="password"
/&gt;
&lt;/label&gt;
{data.errorMessage &amp;&amp; (
&lt;span className="form-error"&gt;{data.errorMessage}&lt;/span&gt;
)}
&lt;button disabled={data.isSubmitting}&gt;
{data.isSubmitting ? (
"Loading..."
) : (
"Login"
)}
&lt;/button&gt;
&lt;/form&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
);
};
export default Login;</code></pre>
<h4 id="home-component">Home Component</h4>
<p>The <code>Home</code> component will handle fetching the songs from the server and displaying them. Since the API endpoint requires that we send the authentication token, we will need to find a way to get it from the <code>App</code> component where it was stored.</p>
<p>Let’s build the markup for this component. We want to fetch the songs and map through the list of returned songs and then render a <code>Card</code> component for each song. The <code>Card</code> component is a simple functional component that is passed some <code>props</code> to render. Create a <code>Card.js</code> file in the <code>components</code> folder, and in that file add the following code below:</p><pre><code class="language-javascript">import React from "react";
export const Card = ({ song }) =&gt; {
return (
&lt;img
src={song.albumArt}
alt=""
/&gt;
&lt;div className="content"&gt;
&lt;h2&gt;{song.name}&lt;/h2&gt;
&lt;span&gt;BY: {song.artist}&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
);
};
export default Card;</code></pre>
<p>Because it does not handle any custom logic but rather renders the props passed into it, we call it a <strong>Presentational Component.</strong></p>
<p>Back in our <code>Home</code> component, when handling network requests in most applications, we try to visualize three main states. First, when the request is processing (by using a loader of some sort), then when the request is successful (by rendering the payload or showing a success notification), and finally, when the request fails (by showing an error notification). In order to make a request when the component is mounted and also handling these three states, we will make use of the <code>useEffect</code> and <code>useReducer</code> hooks.</p>
<p>For our <code>useReducer</code> hook, we will first create an object to hold the initial state for our reducer, the initial state object will look like the snippet below:</p><pre><code class="language-javascript">const initialState = {
songs: [],
isFetching: false,
hasError: false,
};</code></pre>
<p><code>songs</code> will hold the list of songs retrieved from the server and it is initially empty. <code>isFetching</code> is used to represent the loading state and is initially set to <code>false</code>. <code>hasError</code> is used to represent the error state and is also initially set to <code>false</code>.</p>
<p>We can now create the reducer for this component, it will look like the snippet below:</p><pre><code class="language-javascript">const reducer = (state, action) =&gt; {
switch (action.type) {
case "FETCH_SONGS_REQUEST":
return {
...state,
isFetching: true,
hasError: false
};
case "FETCH_SONGS_SUCCESS":
return {
...state,
isFetching: false,
songs: action.payload
};
case "FETCH_SONGS_FAILURE":
return {
...state,
hasError: true,
isFetching: false
};
default:
return state;
}
};</code></pre>
<p>Let’s break it down. If we dispatch a <code>FETCH_SONGS_REQUEST</code> action in our app, we return a new state with the value of <code>isFetching</code> set to <code>true</code> . If we dispatch a <code>FETCH_SONGS_SUCCESS</code> action in our app, we return a new state with the value of <code>isFetching</code> set to <code>false</code>, and then <code>songs</code> set to the payload sent back from the server. Finally, if we dispatch a <code>FETCH_SONGS_FAILURE</code> action in our app, we return a new state with the value of <code>isFetching</code> set to <code>false</code> and <code>hasError</code> set to <code>false</code> .</p>
<p>Now that we have the useReducer hook, our <code>Home</code> component should look like this:</p><pre><code class="language-javascript">import React from "react";
import { AuthContext } from "../App";
import Card from "./Card";
const initialState = {
songs: [],
isFetching: false,
hasError: false,
};
const reducer = (state, action) =&gt; {
switch (action.type) {
case "FETCH_SONGS_REQUEST":
return {
...state,
isFetching: true,
hasError: false
};
case "FETCH_SONGS_SUCCESS":
return {
...state,
isFetching: false,
songs: action.payload
};
case "FETCH_SONGS_FAILURE":
return {
...state,
hasError: true,
isFetching: false
};
default:
return state;
}
};
export const Home = () =&gt; {
const [state, dispatch] = React.useReducer(reducer, initialState);
return (
&lt;div className="home"&gt;
{state.isFetching ? (
&lt;span className="loader"&gt;LOADING...&lt;/span&gt;
) : state.hasError ? (
&lt;span className="error"&gt;AN ERROR HAS OCCURED&lt;/span&gt;
) : (
&lt;&gt;
{state.songs.length &gt; 0 &amp;&amp;
state.songs.map(song =&gt; (
&lt;Card key={song.id.toString()} song={song} /&gt;
))}
&lt;/&gt;
)}
&lt;/div&gt;
);
};
export default Home;</code></pre>
<p>To quickly run through what is going on, inside the <code>Home</code> function we add the <code>useReducer</code> hook and pass in the <code>reducer</code> and <code>initialState</code> which in turn returns two variables, namely, <code>state</code> and <code>dispatch</code> .</p>
<p>Then in our render function, we conditionally render a <code>span</code> with a “loading…” text if <code>state.isFetching = true</code>, or we render a <code>span</code> with an error message if <code>state.hasError = true</code>. Otherwise we loop through the list of songs and render each one as a <code>Card</code> component, passing in the necessary <code>props</code> .</p>
<p>To tie everything up, we will add the <code>useEffect</code> function that will handle the network calls and dispatch the necessary <code>ACTION</code> based on the server response. Adding the hook should make our <code>Home</code> component look like the snippet below:</p><pre><code class="language-javascript">import React from "react";
import { AuthContext } from "../App";
import Card from "./Card";
const initialState = {
songs: [],
isFetching: false,
hasError: false,
};
const reducer = (state, action) =&gt; {
switch (action.type) {
case "FETCH_SONGS_REQUEST":
return {
...state,
isFetching: true,
hasError: false
};
case "FETCH_SONGS_SUCCESS":
return {
...state,
isFetching: false,
songs: action.payload
};
case "FETCH_SONGS_FAILURE":
return {
...state,
hasError: true,
isFetching: false
};
default:
return state;
}
};
export const Home = () =&gt; {
const { state: authState } = React.useContext(AuthContext);
const [state, dispatch] = React.useReducer(reducer, initialState);
React.useEffect(() =&gt; {
dispatch({
type: "FETCH_SONGS_REQUEST"
});
fetch("https://hookedbe.herokuapp.com/api/songs", {
headers: {
Authorization: `Bearer ${authState.token}`
}
})
.then(res =&gt; {
if (res.ok) {
return res.json();
} else {
throw res;
}
})
.then(resJson =&gt; {
console.log(resJson);
dispatch({
type: "FETCH_SONGS_SUCCESS",
payload: resJson
});
})
.catch(error =&gt; {
console.log(error);
dispatch({
type: "FETCH_SONGS_FAILURE"
});
});
}, [authState.token]);
return (
&lt;React.Fragment&gt;
&lt;div className="home"&gt;
{state.isFetching ? (
&lt;span className="loader"&gt;LOADING...&lt;/span&gt;
) : state.hasError ? (
&lt;span className="error"&gt;AN ERROR HAS OCCURED&lt;/span&gt;
) : (
&lt;&gt;
{state.songs.length &gt; 0 &amp;&amp;
state.songs.map(song =&gt; (
&lt;Card key={song.id.toString()} song={song} /&gt;
))}
&lt;/&gt;
)}
&lt;/div&gt;
&lt;/React.Fragment&gt;
);
};
export default Home;</code></pre>
<p>If you notice, in the code above, we used another hook, the <code>useContext</code> hook. The reason is, in order to fetch songs from the server we have to also pass the token that was given to us on the login page. But since that was another component, we stored the token in the <code>AuthContext</code> and we use the <code>useContext</code> hook to get that context value and use it in our own component.</p>
<p>Inside the <code>useEffect</code> function, we initially dispatch the <code>FETCH_SONGS_REQUEST</code> so that the loading span shows, then we make the network request using the <code>fetch</code> API and passing the token we got from the <code>AuthContext</code> as a header. If the response is successful, we dispatch the <code>FETCH_SONGS_SUCCESS</code> action and pass the list of songs gotten from the server as payload in the action. If there is an error from the server, we dispatch <code>FETCH_SONGS_FAILURE</code> action so that the error span is displayed on the screen.</p>
<p>The last thing to note in our <code>useEffect</code> hook is that we pass the token in the dependency array of the hook (read more about <code>useEffect</code> <a href="https://reactjs.org/docs/hooks-effect.html" rel="noopener">here</a>). This means that our hook will only be called when that token changes, which can only happen if the token expires and we need to fetch a new one or we log in as a new user. So for this user, the hook will be called only once.</p>
<p>OK, we are done with the logic. All that’s left is the CSS. Since going into the details of the styling of the app is beyond the scope of this article, you can copy the CSS snippet below and paste it in the <code>App.css</code> file:</p><pre><code class="language-javascript">/******  LOGIN PAGE  ******/
.login-container{
display: flex;
align-items: center;
background-image: url("./assets/carry-on-colour.svg");
height: calc(100vh - 70px);
background-repeat: no-repeat;
background-position: right;
padding-left: 5%;
padding-right: 5%;
margin-top: 70px;
}
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
height: 70%;
width: 45%;
}
/* On mouse-over, add a deeper shadow */
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.login-container .container {
padding-left: 7%;
padding-right: 7%;
height: 100%;
}
.login-container .container h1{
font-size: 2.5rem;
}
.login-container .container form{
display: flex;
height: 80%;
flex-direction: column;
justify-content: space-around;
align-self: center;
}
input[type="text"], input[type="password"]{
padding-left: 1px;
padding-right: 1px;
height: 40px;
border-radius: 5px;
border: .5px solid rgb(143, 143, 143);
font-size: 15px;
}
label{
display: flex;
flex-direction: column;
}
.login-container button{
height: 40px;
font-weight: bold;
font-size: 15px;
background-color: #F42B4B;
color: rgb(255, 255, 255);
}
.login-container button:hover{
background-color: rgb(151, 25, 46);
cursor: pointer;
}
.login-container button:focus{
outline: none !important;
}
.spinner {
animation: spinner infinite .9s linear;
height: 90%;
}
.spinner:focus{
border:none;
}
@keyframes spinner {
from {
transform: rotate(0deg);
}
to {
transform: rotate(360deg);
}
}
.form-error{
color: #F42B4B;
text-align: center;
}
@media screen and (max-width: 700px){
.login-container{
justify-content: center;
background-image: none;
}
width: 80%;
align-self: center;
}
}
@media screen and (max-width: 350px){
width: 100%;
}
}
/******  LOGIN PAGE  ******/
/******  HEADER  ******/
#navigation{
width: 100%;
position: fixed;
z-index: 10;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
background-color: #F42B4B;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
height: 70px;
top: 0;
padding-right: 5px;
padding-left: 5px;
}
#navigation h1{
color: white;
}
#navigation button{
background-color: transparent;
border: none;
align-self: center;
}
#navigation button:hover{
cursor: pointer;
}
#navigation button:focus{
outline: none !important;
}
/******  HEADER  ******/
/******  HOME PAGE  ******/
.home {
margin-top: 100px;
margin-left: 2%;
margin-right: 2%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
}
.home .loader{
align-self: center;
width: 100%;
text-align: center;
}
.home .error{
width: 100%;
align-self: center;
color: #F42B4B;
font-size: 30px;
font-weight: bold;
text-align: center;
}
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
height: 400px;
width: 30%;
position: relative;
margin-bottom: 2%;
}
/* On mouse-over, add a deeper shadow */
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
width: 100%;
height: 100%;
}
.home .content{
bottom: 0;
z-index: 9;
position: absolute;
background-color: rgba(255, 255, 255, 0.7);
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
height: 35%;
padding-bottom: 5px;
transition: 0.5s;
}
.home .content:hover{
background-color: rgba(255, 255, 255, 1);
height: 50%;
cursor: pointer;
}
.content&gt;h2{
text-align: center;
font-size: 2rem;
}
@media screen and (max-width: 780px){
.home{
justify-content: space-around;
}
width: 45%;
}
}
@media screen and (max-width: 500px){
width: 90%;
}
}
@media screen and (min-width: 1400px){
.home {
margin: auto;
width: 1400px;
}
.toggle-button{
margin-bottom: 10px;
}
}
/******  HOME PAGE  ******/</code></pre>
<p>This article was a bit long, but I hope it does cover a common use case with using hooks to manage state in our application.</p>
<p>You can access the GitHub repo by clicking this <a href="https://github.com/samie820/hooks-state-management" rel="noopener">link</a>. Note that the repo has some added features like creating a new song.</p>
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
