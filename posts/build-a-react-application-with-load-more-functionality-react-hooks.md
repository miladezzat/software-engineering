---
card: "/images/default.jpg"
tags: [React]
description: In this article, we will build a React application using clas
author: "Milad E. Fahmy"
title: "How to Build a React Application with Load More Functionality using React Hooks"
created: "2021-08-15T19:26:30+02:00"
modified: "2021-08-15T19:26:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-react-hooks ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build a React Application with Load More Functionality using React Hooks</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/04/random_user.jpg 300w,
/news/content/images/size/w600/2021/04/random_user.jpg 600w,
/news/content/images/size/w1000/2021/04/random_user.jpg 1000w,
/news/content/images/size/w2000/2021/04/random_user.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/04/random_user.jpg" alt="How to Build a React Application with Load More Functionality using React Hooks">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this article, we will build a React application using class components. Then we'll convert it to functional components using React Hooks in a step-by-step way.</p>
<p>By building this app, you will learn:</p>
<ul>
<li>How to make API calls</li>
<li>How to implement load more functionality</li>
<li>How to debug application issues</li>
<li>How to use async/await</li>
<li>How to update the component when something changes</li>
<li>How to fix the infinite loop issue in the useEffect hook</li>
<li>How to refactor class-based components into functional components with Hooks</li>
</ul>
<p>and much more.</p>
<p>So let’s get started.</p>
<blockquote>Want to learn Redux from the absolute beginning and build a food ordering app from scratch? Check out my <a href="https://master-redux.yogeshchavan.dev/">Mastering Redux</a> course.</blockquote>
<h2 id="initial-project-setup">Initial Project Setup</h2>
<p>Create a new project using <code>create-react-app</code>:</p><pre><code>npx create-react-app class-to-hooks-refactoring</code></pre>
<p>Once the project is created, delete all files from the <code>src</code> folder and create the <code>index.js</code> file and the <code>styles.css</code> file inside the <code>src</code> folder. Also, create a <code>components</code> folders inside the <code>src</code> folder.</p>
<p>Install the <code>axios</code> library by executing the following command from the project folder:</p><pre><code>yarn add axios@0.21.1
</code></pre>
<p>Open the <code>styles.css</code> file and add the contents from <a href="https://github.com/myogeshchavan97/class-to-hooks-refactoring/blob/master/src/styles.css">this GitHub repo</a> to it.</p>
<h2 id="how-to-create-the-initial-pages">How to Create the Initial Pages</h2>
<p>Create a new file called <code>Header.js</code> inside the <code>components</code> folder with the following content:</p><pre><code class="language-jsx">import React from "react";
const Header = () =&gt; {
return &lt;h1 className="header"&gt;Random Users&lt;/h1&gt;;
};
export default Header;
</code></pre>
<p>Create a new file called <code>App.js</code> inside the <code>src</code> folder with the following content:</p><pre><code class="language-jsx">import React from 'react';
import Header from './components/Header';
export default class App extends React.Component {
render() {
return (
&lt;div className="main-section"&gt;
&lt;Header /&gt;
&lt;h2&gt;App Component&lt;/h2&gt;
&lt;/div&gt;
);
}
}
</code></pre>
<p>Now, open the <code>index.js</code> file and add the following content to it:</p><pre><code class="language-js">import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
ReactDOM.render(&lt;App /&gt;, document.getElementById('root'));
</code></pre>
<p>Now, start the application by running the <code>yarn start</code> command from the terminal.</p>
<p>You will see the following screen if you access the application at <a href="http://localhost:3000/">http://localhost:3000/</a>.</p>
<h2 id="how-to-make-an-api-call">How to Make an API Call</h2>
<p>We will be using the <a href="https://randomuser.me/">Random Users</a> API to get a list of random users.</p>
<p>So open your <code>App.js</code> file and add the <code>componentDidMount</code> method inside the component:</p><pre><code class="language-js">componentDidMount() {
axios
.get('https://randomuser.me/api/?page=0&amp;results=10')
.then((response) =&gt; {
console.log(response.data);
})
.catch((error) =&gt; console.log('error', error));
}
</code></pre>
<p>Also, import <code>axios</code> at the top of the file:</p><pre><code class="language-js">import axios from 'axios';
</code></pre>
<p>Your entire <code>App.js</code> file will look like this now:</p><pre><code class="language-js">import React from 'react';
import Header from './components/Header';
import axios from 'axios';
export default class App extends React.Component {
componentDidMount() {
axios
.get('https://randomuser.me/api/?page=0&amp;results=10')
.then((response) =&gt; {
console.log(response.data);
})
.catch((error) =&gt; console.log('error', error));
}
render() {
return (
&lt;div className="main-section"&gt;
&lt;Header /&gt;
&lt;h2&gt;App Component&lt;/h2&gt;
&lt;/div&gt;
);
}
}
</code></pre>
<p>Here, we're making an API call to get a list of 10 records initially to the URL <code>https://randomuser.me/api/?page=0&amp;results=10</code>.</p>
<p>Now, if you check the application, you will see the response from the API in the console.</p>
<p>Now, let's declare a state to store the result and flags related to the loading and error messages.</p>
<p>Replace the contents of <code>App.js</code> with the following code:</p><pre><code class="language-js">import React from 'react';
import Header from './components/Header';
import axios from 'axios';
export default class App extends React.Component {
state = {
users: [],
isLoading: false,
errorMsg: ''
};
componentDidMount() {
this.setState({ isLoading: true });
axios
.get('https://randomuser.me/api/?page=0&amp;results=10')
.then((response) =&gt; {
this.setState({ users: response.data.results, errorMsg: '' });
})
.catch((error) =&gt;
this.setState({
errorMsg: 'Error while loading data. Try again later.'
})
)
.finally(() =&gt; {
this.setState({ isLoading: false });
});
}
render() {
const { users, isLoading, errorMsg } = this.state;
console.log(users);
return (
&lt;div className="main-section"&gt;
&lt;Header /&gt;
{isLoading &amp;&amp; &lt;p className="loading"&gt;Loading...&lt;/p&gt;}
{errorMsg &amp;&amp; &lt;p className="errorMsg"&gt;{errorMsg}&lt;/p&gt;}
&lt;/div&gt;
);
}
}
</code></pre>
<p>Here, we've declared a state directly inside the class using <a href="https://javascript.plainenglish.io/how-to-write-clean-and-easy-to-understand-react-code-using-class-properties-syntax-5b375b0618d3?source=friends_link&amp;sk=c170992cab9025fddb7b34b8894ea993">class properties syntax</a> which is a common way to write state in class-based components.</p><pre><code class="language-js">state = {
users: [],
isLoading: false,
errorMsg: ''
};
</code></pre>
<p>Then, inside the <code>componentDidMount</code> method, we're first setting the <code>isLoading</code> state to <code>true</code> before making the API call.</p><pre><code class="language-js">this.setState({ isLoading: true });
</code></pre>
<p>Once we get the API response, we're storing the result in the <code>users</code> array which is declared in the state. We're also setting the <code>errorMsg</code> state to empty, so that if there are any previous errors they will be cleared out.</p><pre><code class="language-js">this.setState({ users: response.data.results, errorMsg: '' });
</code></pre>
<p>And in the <code>.catch</code> block, we're setting the <code>errorMsg</code> in case there is any error while making an API call.</p>
<p>Then, we're using the <code>.finally</code> block to set the <code>isLoading</code> state to <code>false</code>.</p><pre><code class="language-js">.finally(() =&gt; {
this.setState({ isLoading: false });
});
</code></pre>
<p>Using <code>finally</code> helps us avoid code duplication here because we don't need to set <code>isLoading</code> to <code>false</code> in <code>.then</code> and in the <code>.catch</code> block again. This is because the <code>finally</code> block will always be executed whether it's successful or not.</p>
<p>And in the render method, we're displaying either the error message or loading message along with the <code>users</code> array from the state in the console.</p>
<p>Now, if you check the application, you will see the <code>users</code> information in the console on success or an error message on the UI for API failure.</p>
<h2 id="how-to-display-the-users-information">How to Display the Users Information</h2>
<p>Now, let's display the <code>users</code> information on the screen.</p>
<p>Create a new file <code>User.js</code> inside the <code>components</code> folder with the following content:</p><pre><code class="language-js">import React from "react";
const User = ({ name, location, email, picture }) =&gt; {
return (
&lt;div className="random-user"&gt;
&lt;div className="user-image"&gt;
&lt;img src={picture.medium} alt={name.first} /&gt;
&lt;/div&gt;
&lt;div className="user-details"&gt;
&lt;div&gt;
&lt;strong&gt;Name:&lt;/strong&gt; {name.first} {name.last}
&lt;/div&gt;
&lt;div&gt;
&lt;strong&gt;Country:&lt;/strong&gt; {location.country}
&lt;/div&gt;
&lt;div&gt;
&lt;strong&gt;Email:&lt;/strong&gt; {email}
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
);
};
export default User;
</code></pre>
<p>Now, create a new file <code>UsersList.js</code> inside the <code>components</code> folder with the following content:</p><pre><code class="language-js">import React from 'react';
import User from './User';
const UsersList = ({ users }) =&gt; {
return (
&lt;div className="user-list"&gt;
{users &amp;&amp; users.map((user) =&gt; &lt;User key={user.login.uuid} {...user} /&gt;)}
&lt;/div&gt;
);
};
export default UsersList;
</code></pre>
<p>Now, open the <code>App.js</code> file and replace the <code>render</code> method with the following code:</p><pre><code class="language-js">render() {
const { users, isLoading, errorMsg } = this.state;
return (
&lt;div className="main-section"&gt;
&lt;Header /&gt;
{isLoading &amp;&amp; &lt;p className="loading"&gt;Loading...&lt;/p&gt;}
{errorMsg &amp;&amp; &lt;p className="errorMsg"&gt;{errorMsg}&lt;/p&gt;}
&lt;UsersList users={users} /&gt;
&lt;/div&gt;
);
}
</code></pre>
<p>Here, we're passing the <code>users</code> array as a prop to the <code>UsersList</code> component. Inside the <code>UsersList</code> component, we're looping over the array and sending the user information to the <code>User</code> component by spreading out all the properties of the individual <code>user</code> as <code>{...props}</code>. This finally displays the data on the screen.</p>
<p>Also, import the <code>UsersList</code> component at the top of the file:</p><pre><code class="language-js">import UsersList from './components/UsersList';
</code></pre>
<p>If you check the application now, you will see the following screen:</p>
<p>As you can see, on every page refresh, a new set of random users is displayed on the screen.</p>
<h2 id="how-to-add-the-load-more-functionality">How to Add the Load More Functionality</h2>
<p>Now, let's add the load more functionality which will let our app load the next set of 10 users on every load more click.</p>
<p>Change the <code>render</code> method of the <code>App.js</code> file to the following code:</p><pre><code class="language-js">render() {
const { users, isLoading, errorMsg } = this.state;
return (
&lt;div className="main-section"&gt;
&lt;Header /&gt;
&lt;UsersList users={users} /&gt;
{errorMsg &amp;&amp; &lt;p className="errorMsg"&gt;{errorMsg}&lt;/p&gt;}
&lt;div className="load-more"&gt;
&lt;button onClick={this.loadMore} className="btn-grad"&gt;
{isLoading ? 'Loading...' : 'Load More'}
&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
);
}
</code></pre>
<p>Here, we've added the <code>isLoading</code> check inside the button to display either the <code>Loading...</code> or <code>Load More</code> text on the button.</p>
<p>Add a new <code>page</code> property to the state and initialize it to <code>0</code>.</p><pre><code class="language-js">state = {
users: [],
page: 0,
isLoading: false,
errorMsg: ''
};
</code></pre>
<p>And add the <code>loadMore</code> handler function before the <code>render</code> method to increment the <code>page</code> state value by 1 on every button click.</p><pre><code class="language-js">loadMore = () =&gt; {
this.setState((prevState) =&gt; ({
page: prevState.page + 1
}));
};
</code></pre>
<p>Here, we're using the previous state to calculate the next state value of the page, so the above code is the same as the below code:</p><pre><code class="language-js">loadMore = () =&gt; {
this.setState((prevState) =&gt; {
return {
page: prevState.page + 1
};
});
};
</code></pre>
<p>We're just using ES6 shorthand syntax for returning an object from the function.</p>
<p>Now, inside the <code>componentDidMount</code> method, change the API URL from the below code:</p><pre><code class="language-js">'https://randomuser.me/api/?page=0&amp;results=10'
</code></pre>
<p>to this code:</p><pre><code class="language-js">`https://randomuser.me/api/?page=${page}&amp;results=10`
</code></pre>
<p>Here, we're using the ES6 template literal syntax to use the dynamic value of the <code>page</code> state to load the next set of users on every button click.</p>
<p>Destructure the <code>page</code> from state inside the <code>componentDidMount</code> method like this:</p><pre><code class="language-js">componentDidMount() {
const { page } = this.state;
....
}
</code></pre>
<blockquote>Want to explore all the ES6+ features in detail? Check out my <a href="https://modernjavascript.yogeshchavan.dev/">Mastering Modern JavaScript</a> book.</blockquote>
<p>Now, let's check the application's functionality.</p>
<p>As you can see, when we click on the <code>Load More</code> button, the <code>page</code> state is changing in the react dev tools but we're not getting the new list of users displayed on the screen.</p>
<p>This is because even though we're changing the <code>page</code> state, we're not making API call again to get the next set of users with the changed <code>page</code> value. So let's fix this.</p>
<p>Create a new <code>loadUsers</code> function above the <code>loadMore</code> function and move all the code from <code>componentDidMount</code> to inside the <code>loadUsers</code> function. Then call the <code>loadUsers</code> function from the <code>componentDidMount</code> method.</p>
<p>Also, add a <code>componentDidUpdate</code> method inside the <code>App</code> component like this:</p><pre><code class="language-js">componentDidUpdate(prevProps, prevState) {
if (prevState.page !== this.state.page) {
this.loadUsers();
}
}
</code></pre>
<p>As we're updating the value of the <code>page</code> state in the <code>loadMore</code> function once the state is updated, the <code>componentDidUpdate</code> method will be called. So we're checking if the previous state value of <code>page</code> is not equal to the current state value. Then we make the API call again by calling the <code>loadUsers</code> function.</p>
<blockquote>Check out my <a href="/news/what-is-state-in-react-explained-with-examples/">previous article</a> to learn more about why and when we need to use the <code>componentDidUpdate</code> method.</blockquote>
<p>Your complete <code>App.js</code> file will look like this now:</p><pre><code class="language-js">import React from 'react';
import Header from './components/Header';
import axios from 'axios';
import UsersList from './components/UsersList';
export default class App extends React.Component {
state = {
users: [],
page: 0,
isLoading: false,
errorMsg: ''
};
componentDidMount() {
this.loadUsers();
}
componentDidUpdate(prevProps, prevState) {
if (prevState.page !== this.state.page) {
this.loadUsers();
}
}
loadUsers = () =&gt; {
const { page } = this.state;
this.setState({ isLoading: true });
axios
.get(`https://randomuser.me/api/?page=${page}&amp;results=10`)
.then((response) =&gt; {
this.setState({ users: response.data.results, errorMsg: '' });
})
.catch((error) =&gt;
this.setState({
errorMsg: 'Error while loading data. Try again later.'
})
)
.finally(() =&gt; {
this.setState({ isLoading: false });
});
};
loadMore = () =&gt; {
this.setState((prevState) =&gt; ({
page: prevState.page + 1
}));
};
render() {
const { users, isLoading, errorMsg } = this.state;
return (
&lt;div className="main-section"&gt;
&lt;Header /&gt;
&lt;UsersList users={users} /&gt;
{errorMsg &amp;&amp; &lt;p className="errorMsg"&gt;{errorMsg}&lt;/p&gt;}
&lt;div className="load-more"&gt;
&lt;button onClick={this.loadMore} className="btn-grad"&gt;
{isLoading ? 'Loading...' : 'Load More'}
&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
);
}
}
</code></pre>
<p>Now, if you check the application again by running the <code>yarn start</code> command you will see the following screen:</p>
<p>As you can see, we're getting a new list of users displayed on every load more button click. But the issue is that we're only able to see 10 users at a time.</p>
<p>So let's make changes to add new users to the already displayed list of users.</p>
<p>For this, we need to change the way we're setting the <code>users</code> state.</p>
<p>Our current <code>setState</code> call inside the <code>loadUsers</code> function looks like this:</p><pre><code class="language-js">this.setState({ users: response.data.results, errorMsg: '' });
</code></pre>
<p>Here, we're always replacing the <code>users</code> array with the new set of users. So change the above <code>setState</code> call to the following code:</p><pre><code class="language-js">this.setState((prevState) =&gt; ({
users: [...prevState.users, ...response.data.results],
errorMsg: ''
}));
</code></pre>
<p>Here, we're using the updater syntax of <code>setState</code>. We're creating a new array by spreading out the already added <code>users</code> by using <code>...prevState.users</code>, and then we're adding a new set of <code>users</code> by using <code>...response.data.results</code>.</p>
<p>So this way we'll not lose the previous loaded <code>users</code> data and we'll also be able to append a new set of <code>users</code>.</p>
<p>Now, if you check the application again, you will see the correct behavior of data loading.</p>
<h2 id="how-to-improve-the-code-using-async-await">How to Improve the Code using Async/await</h2>
<p>If you check the <code>loadUsers</code> function, you will see that the code looks complex and difficult to read.</p><pre><code class="language-js">loadUsers = () =&gt; {
const { page } = this.state;
this.setState({ isLoading: true });
axios
.get(`https://randomuser.me/api/?page=${page}&amp;results=10`)
.then((response) =&gt; {
this.setState((prevState) =&gt; ({
users: [...prevState.users, ...response.data.results],
errorMsg: ''
}));
})
.catch((error) =&gt;
this.setState({
errorMsg: 'Error while loading data. Try again later.'
})
)
.finally(() =&gt; {
this.setState({ isLoading: false });
});
};
</code></pre>
<p>We can fix this using async/await syntax.</p>
<p>First, we need to mark the <code>loadUsers</code> function as async:</p><pre><code class="language-js">loadUsers = async () =&gt; {
</code></pre>
<p>Because we can use the <code>await</code> keyword only inside the function which is declared as <code>async</code>.</p>
<p>Now, replace the <code>loadUsers</code> function with the following code:</p><pre><code class="language-js">loadUsers = async () =&gt; {
try {
const { page } = this.state;
this.setState({ isLoading: true });
const response = await axios.get(
`https://randomuser.me/api/?page=${page}&amp;results=10`
);
this.setState((prevState) =&gt; ({
users: [...prevState.users, ...response.data.results],
errorMsg: ''
}));
} catch (error) {
this.setState({
errorMsg: 'Error while loading data. Try again later.'
});
} finally {
this.setState({ isLoading: false });
}
};
</code></pre>
<p>Here, we've used the <code>await</code> keyword before the <code>axios.get</code> call so the next line of code which is the <code>setState</code> call will not be executed until we get the response from the API.</p>
<p>If there is any error while getting the response from the API, the <code>catch</code> block will be executed. The <code>finally</code> block will set the <code>isLoading</code> state to <code>false</code>.</p>
<p>Your changed <code>App.js</code> file will look like this now:</p><pre><code class="language-js">import React from 'react';
import Header from './components/Header';
import axios from 'axios';
import UsersList from './components/UsersList';
export default class App extends React.Component {
state = {
users: [],
page: 0,
isLoading: false,
errorMsg: ''
};
componentDidMount() {
this.loadUsers();
}
componentDidUpdate(prevProps, prevState) {
if (prevState.page !== this.state.page) {
this.loadUsers();
}
}
loadUsers = async () =&gt; {
try {
const { page } = this.state;
this.setState({ isLoading: true });
const response = await axios.get(
`https://randomuser.me/api/?page=${page}&amp;results=10`
);
this.setState((prevState) =&gt; ({
users: [...prevState.users, ...response.data.results],
errorMsg: ''
}));
} catch (error) {
this.setState({
errorMsg: 'Error while loading data. Try again later.'
});
} finally {
this.setState({ isLoading: false });
}
};
loadMore = () =&gt; {
this.setState((prevState) =&gt; ({
page: prevState.page + 1
}));
};
render() {
const { users, isLoading, errorMsg } = this.state;
return (
&lt;div className="main-section"&gt;
&lt;Header /&gt;
&lt;UsersList users={users} /&gt;
{errorMsg &amp;&amp; &lt;p className="errorMsg"&gt;{errorMsg}&lt;/p&gt;}
&lt;div className="load-more"&gt;
&lt;button onClick={this.loadMore} className="btn-grad"&gt;
{isLoading ? 'Loading...' : 'Load More'}
&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
);
}
}
</code></pre>
<p>Now, the <code>loadUsers</code> function code looks much cleaner and easier to understand than it was before. And if you check the application, you will see that the application is also working correctly.</p>
<h2 id="how-to-refactor-class-component-code-to-functional-component-code">How to Refactor Class Component Code to Functional Component Code</h2>
<p>We're done building out the complete functionality of the app. So let's refactor the code to use functional components with React Hooks.</p>
<blockquote>If you're new to React Hooks, check out <a href="https://levelup.gitconnected.com/an-introduction-to-react-hooks-50281fd961fe?source=friends_link&amp;sk=89baff89ec8bc637e7c13b7554904e54">my article here</a> for an introduction to Hooks.</blockquote>
<p>Create a new file called <code>AppFunctional.js</code> inside the <code>src</code> folder with the following content:</p><pre><code class="language-js">import React from 'react';
const AppFunctional = () =&gt; {
return (
&lt;div&gt;
&lt;h2&gt;Functional Component&lt;/h2&gt;
&lt;/div&gt;
);
};
export default AppFunctional;
</code></pre>
<p>We've created a new file for the functional component so you will be able to compare both the code and keep it for your reference.</p>
<p>Now, open the <code>index.js</code> file and replace the contents of the file with the following code:</p><pre><code class="language-js">import React from 'react';
import ReactDOM from 'react-dom';
import AppFunctional from './AppFunctional';
import './styles.css';
ReactDOM.render(&lt;AppFunctional /&gt;, document.getElementById('root'));
</code></pre>
<p>Here, we've used the <code>AppFunctional</code> component inside the <code>render</code> method and we've also added the import for the same at the top of the file.</p>
<p>Now, if you restart your application using the <code>yarn start</code> command you will see the following screen:</p>
<p>So we're correctly displaying the <code>AppFunctional</code> component code on the screen.</p>
<p>Now, replace the contents of the<code>AppFunctional</code> component with the following code:</p><pre><code class="language-js">import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import UsersList from './components/UsersList';
const AppFunctional = () =&gt; {
const [users, setUsers] = useState([]);
const [page, setPage] = useState(0);
const [isLoading, setIsLoading] = useState(false);
const [errorMsg, setErrorMsg] = useState('');
useEffect(() =&gt; {
const loadUsers = async () =&gt; {
try {
setIsLoading(true);
const response = await axios.get(
`https://randomuser.me/api/?page=${page}&amp;results=10`
);
setUsers([...users, ...response.data.results]);
setErrorMsg('');
} catch (error) {
setErrorMsg('Error while loading data. Try again later.');
} finally {
setIsLoading(false);
}
};
loadUsers();
}, []);
const loadMore = () =&gt; {
setPage((page) =&gt; page + 1);
};
return (
&lt;div className="main-section"&gt;
&lt;Header /&gt;
&lt;UsersList users={users} /&gt;
{errorMsg &amp;&amp; &lt;p className="errorMsg"&gt;{errorMsg}&lt;/p&gt;}
&lt;div className="load-more"&gt;
&lt;button onClick={loadMore} className="btn-grad"&gt;
{isLoading ? 'Loading...' : 'Load More'}
&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
);
};
export default AppFunctional;
</code></pre>
<p>Here, we've initially declared the required states using the <code>useState</code> hook:</p><pre><code class="language-js">const [users, setUsers] = useState([]);
const [page, setPage] = useState(0);
const [isLoading, setIsLoading] = useState(false);
const [errorMsg, setErrorMsg] = useState('');
</code></pre>
<p>Then we've added a <code>useEffect</code> hook and passed an empty array <code>[]</code> as the second argument to it. This means that the code inside the <code>useEffect</code> hook will be executed only once when the component is mounted.</p><pre><code class="language-js">useEffect(() =&gt; {
// your code
}, []);
</code></pre>
<p>We've moved the entire <code>loadUsers</code> function inside the <code>useEffect</code> hook and then called it inside the hook like this:</p><pre><code class="language-js">useEffect(() =&gt; {
const loadUsers = async () =&gt; {
// your code
};
loadUsers();
}, []);
</code></pre>
<p>We've also removed all the references to <code>this.state</code> as functional components don't need <code>this</code> context.</p>
<p>Before making the API call, we're setting the <code>isLoading</code> state to <code>true</code> using <code>setIsLoading(true);</code>.</p>
<p>As we already have access to the <code>users</code> array inside the component, we're directly setting as a new array for the <code>setUsers</code> function like this:</p><pre><code class="language-js">setUsers([...users, ...response.data.results]);
</code></pre>
<blockquote>If you want to know why we can't use the <code>async</code> keyword directly for the <code>useEffect</code> hook function, check out <a href="https://javascript.plainenglish.io/handling-api-calls-using-async-await-in-useeffect-hook-990fb4ae423?source=friends_link&amp;sk=dd686f066a434c41a76c352e3ec69767">this article</a>.</blockquote>
<p>Then we've changed the <code>loadMore</code> function from the below code:</p><pre><code class="language-js">loadMore = () =&gt; {
this.setState((prevState) =&gt; ({
page: prevState.page + 1
}));
};
</code></pre>
<p>to this code:</p><pre><code class="language-js">const loadMore = () =&gt; {
setPage((page) =&gt; page + 1);
};
</code></pre>
<blockquote>Note that to declare a function in functional components you need to add <code>const</code> or <code>let</code> before the declaration. As the function is not going to change, it's recommended to use <code>const</code> such as <code>const loadMore = () =&gt; { }</code>.</blockquote>
<p>Then we've copied the <code>render</code> method content as it is inside the <code>AppFunctional</code> component for returning the JSX. We've also changed <code>onClick={this.loadMore}</code> to <code>onClick={loadMore}</code>.</p><pre><code class="language-jsx">return (
&lt;div className="main-section"&gt;
&lt;Header /&gt;
&lt;UsersList users={users} /&gt;
{errorMsg &amp;&amp; &lt;p className="errorMsg"&gt;{errorMsg}&lt;/p&gt;}
&lt;div className="load-more"&gt;
&lt;button onClick={loadMore} className="btn-grad"&gt;
{isLoading ? 'Loading...' : 'Load More'}
&lt;/button&gt;
&lt;/div&gt;
&lt;/div&gt;
);
</code></pre>
<p>Now, if you check the application, you will see the following screen:</p>
<p>As you can see, the users are correctly getting loaded, but the load more functionality does not work.</p>
<p>This is because we're only making the API call once when the component is mounted as we're passing the empty dependency array <code>[]</code> as the second argument to the <code>useEffect</code> hook.</p>
<p>To make the API call again when the <code>page</code> state changes, we need to add the <code>page</code> as a dependency for the <code>useEffect</code> hook like this:</p><pre><code class="language-js">useEffect(() =&gt; {
// execute the code to load users
}, [page]);
</code></pre>
<p>The above <code>useEffect</code> is the same as writing the below code:</p><pre><code class="language-js">componentDidUpdate(prevProps, prevState) {
if (prevState.page !== this.state.page) {
// execute the code to load users
}
}
</code></pre>
<p><code>useEffect</code> makes it really easy to write less code that is easy to understand.</p>
<p>So now with this change, the code inside the <code>useEffect</code> hook will be executed when the component mounts as well as when the <code>page</code> state is changed.</p>
<p>Now, if you check the application, you will see that the load more functionality is working again as expected.</p>
<p>But if you check the terminal/command prompt, you might see a warning as shown below (if you have <code>ESLint</code> installed on your machine):</p>
<p>These warnings help us avoid issues in our application that might occur later, so it's always good to fix them if possible.</p>
<p>As we're referencing the <code>users</code> state inside the <code>loadUsers</code> function, we need to include that also in the dependency array. So let's do that.</p>
<p>Include the <code>users</code> as a dependency along with the <code>page</code> like this:</p><pre><code class="language-js">useEffect(() =&gt; {
// your code
}, [page, users]);
</code></pre>
<p>Let's check the application functionality now.</p>
<p>As you can see, we're continuously getting a new set of users as we scroll the page and the application is going in an infinite loop.</p>
<p>This is because when the component is mounted, the code inside the <code>useEffect</code> hook will be executed to make an API call. Once we get the result, we're setting the <code>users</code> array. </p>
<p>As <code>users</code> is mentioned in the dependencies list, once the <code>users</code> array is changed, <code>useEffect</code> will run again and it will happen again and again creating an infinite loop.</p>
<p>So to fix this, we need to avoid referencing the external <code>users</code> array somehow. To do that, let's use the updater syntax of set state to set the <code>users</code> state.</p>
<p>Therefore, change the below code:</p><pre><code class="language-js">setUsers([...users, ...response.data.results]);
</code></pre>
<p>to this code:</p><pre><code class="language-js">setUsers((users) =&gt; [...users, ...response.data.results]);
</code></pre>
<p>Here, we're using the previous value of users to create a new <code>users</code> array.</p>
<p>Now, we can remove the <code>users</code> from the <code>useEffect</code> dependencies array as we're not referencing the external <code>users</code> variable.</p>
<p>Your changed <code>useEffect</code> hook will look like this now:</p><pre><code class="language-js">useEffect(() =&gt; {
const loadUsers = async () =&gt; {
try {
setIsLoading(true);
const response = await axios.get(
`https://randomuser.me/api/?page=${page}&amp;results=10`
);
setUsers((users) =&gt; [...users, ...response.data.results]);
setErrorMsg('');
} catch (error) {
setErrorMsg('Error while loading data. Try again later.');
} finally {
setIsLoading(false);
}
};
loadUsers();
}, [page]);
</code></pre>
<p>If you check the application now, you will see that the application is working as expected without any issues.</p>
<p>And we're also not getting any errors in the terminal now.</p>
<h3 id="thanks-for-reading-">Thanks for reading!</h3>
<p>You can find the complete source code for this application in <a href="https://github.com/myogeshchavan97/class-to-hooks-refactoring">this repository</a> and a live demo of the deployed application <a href="https://random-users-app.netlify.app/">here</a>.</p>
<p>Starting with ES6, there are many useful additions to JavaScript like:</p>
<ul>
<li>ES6 Destructuring</li>
<li>Import and Export Syntax</li>
<li>Arrow functions</li>
<li>Promises</li>
<li>Async/await</li>
<li>Optional chaining operator and a lot more.</li>
</ul>
<p><strong>You can learn everything about all the ES6+ features in detail in my <a href="https://modernjavascript.yogeshchavan.dev/">Mastering Modern JavaScript</a> book.</strong></p>
<blockquote>Check out free preview contents of the book <a href="/news/learn-modern-javascript/">here</a>.</blockquote>
<p>Also, you can check out my <strong>free</strong> <a href="https://yogeshchavan1.podia.com/react-router-introduction">Introduction to React Router</a> course to learn React Router from scratch.</p>
<p>Want to stay up to date with regular content regarding JavaScript, React, Node.js? <a href="https://www.linkedin.com/in/yogesh-chavan97/">Follow me on LinkedIn</a>.</p>
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
