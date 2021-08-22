---
card: "https://cdn-media-1.freecodecamp.org/images/1*JL-AhMbl0HlP4Jr3YyaxbA.jpeg"
tags: [React]
description: by Valerii Tereshchenko
author: "Milad E. Fahmy"
title: "How to load data in React with redux-thunk, redux-saga, suspense & hooks"
created: "2021-08-15T19:37:44+02:00"
modified: "2021-08-15T19:37:44+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-redux tag-javascript tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to load data in React with redux-thunk, redux-saga, suspense &amp; hooks</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*JL-AhMbl0HlP4Jr3YyaxbA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*JL-AhMbl0HlP4Jr3YyaxbA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*JL-AhMbl0HlP4Jr3YyaxbA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*JL-AhMbl0HlP4Jr3YyaxbA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*JL-AhMbl0HlP4Jr3YyaxbA.jpeg" alt="How to load data in React with redux-thunk, redux-saga, suspense &amp; hooks">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Valerii Tereshchenko</p>
<h1 id="how-to-load-data-in-react-with-redux-thunk-redux-saga-suspense-hooks">How to load data in React with redux-thunk, redux-saga, suspense &amp; hooks</h1>
<h3 id="introduction">Introduction</h3>
<p><a href="https://reactjs.org/" rel="noopener">React</a> is a JavaScript library for building user interfaces. Very often using React means using React with <a href="https://redux.js.org/" rel="noopener">Redux</a>. <a href="https://redux.js.org/" rel="noopener">Redux</a> is another JavaScript library for managing global state. Sadly, even with these two libraries there is no one clear way how to handle asynchronous calls to the API (backend) or any other side effects.</p>
<p>In this article I’m trying to compare different approaches to solving this problem. Let’s define the problem first.</p>
<p><strong><em>Component X is one of the many components of the web site (or mobile, or desktop application, it’s also possible). X queries and shows some data loaded from the API. X can be page or just part of the page. Important thing that X is a separate component which should be loosely coupled with the rest of the system (as much as possible). X should show loading indicator while data is retrieving and error if call fails.</em></strong></p>
<p>This article assumes that you already have some experience with creating React/Redux applications.</p>
<p>This article is going to show 4 ways of solving this problem and <strong>compare pros and cons</strong> of each one. <strong>It isn’t a detailed manual on how to use thunk, saga, suspence or hooks</strong>.</p>
<p>Code of these examples is available on <a href="https://github.com/ValeraT1982/react-data-load" rel="noopener">GitHub</a>.</p>
<h3 id="initial-setup">Initial setup</h3>
<h4 id="mock-server">Mock Server</h4>
<p>For testing purposes we are going to use <a href="https://github.com/typicode/json-server" rel="noopener">json-server</a>. It’s an amazing project that allows you to build fake REST APIs very fast. For our example, it looks like this.</p><pre><code class="language-js">const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();
server.use((req, res, next) =&gt; {
setTimeout(() =&gt; next(), 2000);
});
server.use(middleware);
server.use(router);
server.listen(4000, () =&gt; {
console.log(`JSON Server is running...`);
});</code></pre>
<p>Our db.json file contains test data in json format.</p><pre><code class="language-json">{
"users": [
{
"id": 1,
"firstName": "John",
"lastName": "Doe",
"active": true,
"posts": 10,
"messages": 50
},
...
{
"id": 8,
"firstName": "Clay",
"lastName": "Chung",
"active": true,
"posts": 8,
"messages": 5
}
]
}</code></pre>
<p>After starting the server, a call to the <a href="http://localhost:4000/users" rel="noopener"><em>http://localhost:4000/users</em></a> returns the list of the users with an imitation of delay — about 2s.</p>
<h3 id="project-and-api-call">Project and API call</h3>
<p>Now we are ready to start coding. I assume that you already have a React project created using <a href="https://github.com/facebook/create-react-app" rel="noopener">create-react-app</a> with Redux configured and ready to use.</p>
<p>If you have any difficulties with it you can check out <a href="https://facebook.github.io/create-react-app/" rel="noopener">this</a> and <a href="https://medium.com/backticks-tildes/setting-up-a-redux-project-with-create-react-app-e363ab2329b8" rel="noopener">this</a>.</p>
<p>The next step is to create a function to call the API (<em>api.js</em>):</p><pre><code class="language-json">const API_BASE_ADDRESS = 'http://localhost:4000';
export default class Api {
static getUsers() {
const uri = API_BASE_ADDRESS + "/users";
return fetch(uri, {
method: 'GET'
});
}
}</code></pre>
<h3 id="redux-thunk">Redux-thunk</h3>
<p><a href="https://github.com/reduxjs/redux-thunk" rel="noopener">Redux-thunk</a> is a recommended middleware for basic Redux side effects logic, such as simple async logic (like a request to the API). Redux-thunk itself doesn’t do a lot. It’s just <a href="https://github.com/reduxjs/redux-thunk/blob/master/src/index.js" rel="noopener">14!!! lines</a> <a href="https://github.com/reduxjs/redux-thunk/blob/master/src/index.js" rel="noopener">of</a> <a href="https://github.com/reduxjs/redux-thunk/blob/master/src/index.js" rel="noopener">the</a> <a href="https://github.com/reduxjs/redux-thunk/blob/master/src/index.js" rel="noopener">code</a>. It just adds some “syntax sugar” and nothing more.</p>
<p>The flowchart below helps to understand what we are going to do.</p>
<p>Every time an action is performed, the reducer changes state accordingly. The component maps state to properties and uses these properties in the <strong><em>render() </em></strong>method to figure out what the user should see: a loading indicator, data or error message.</p>
<p>To make it work we need to do 5 things.</p>
<h4 id="1-install-thunk">1. Install thunk</h4><pre><code>npm install redux-thunk</code></pre>
<h4 id="2-add-thunk-middleware-when-configuring-store-configurestore-js-">2. Add thunk middleware when configuring store (configureStore.js)</h4><pre><code class="language-js">import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './appReducers';
export function configureStore(initialState) {
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));
return store;
}</code></pre>
<p>In lines 12–13 we also configure <a href="https://github.com/zalmoxisus/redux-devtools-extension" rel="noopener">redux</a> <a href="https://github.com/zalmoxisus/redux-devtools-extension" rel="noopener">devtools</a>. A bit later it will help to show one of the problems with this solution.</p>
<h4 id="3-create-actions-redux-thunk-actions-js-">3. Create actions (redux-thunk/actions.js)</h4><pre><code class="language-js">import Api from "../api"
export const LOAD_USERS_LOADING = 'REDUX_THUNK_LOAD_USERS_LOADING';
export const LOAD_USERS_SUCCESS = 'REDUX_THUNK_LOAD_USERS_SUCCESS';
export const LOAD_USERS_ERROR = 'REDUX_THUNK_LOAD_USERS_ERROR';
export const loadUsers = () =&gt; dispatch =&gt; {
dispatch({ type: LOAD_USERS_LOADING });
Api.getUsers()
.then(response =&gt; response.json())
.then(
data =&gt; dispatch({ type: LOAD_USERS_SUCCESS, data }),
error =&gt; dispatch({ type: LOAD_USERS_ERROR, error: error.message || 'Unexpected Error!!!' })
)
};</code></pre>
<p>It’s also recommended to have your action creators separated (it adds some additional coding), but for this simple case I think it’s acceptable to create actions “on the fly”.</p>
<h4 id="4-create-reducer-redux-thunk-reducer-js-">4. Create reducer (redux-thunk/reducer.js)</h4><pre><code class="language-js">import {LOAD_USERS_ERROR, LOAD_USERS_LOADING, LOAD_USERS_SUCCESS} from "./actions";
const initialState = {
data: [],
loading: false,
error: ''
};
export default function reduxThunkReducer(state = initialState, action) {
switch (action.type) {
case LOAD_USERS_LOADING: {
return {
...state,
loading: true,
error:''
};
}
case LOAD_USERS_SUCCESS: {
return {
...state,
data: action.data,
loading: false
}
}
case LOAD_USERS_ERROR: {
return {
...state,
loading: false,
error: action.error
};
}
default: {
return state;
}
}
}</code></pre>
<h4 id="5-create-component-connected-to-redux-redux-thunk-userswithreduxthunk-js-">5. Create component connected to redux (redux-thunk/UsersWithReduxThunk.js)</h4><pre><code class="language-js">import * as React from 'react';
import { connect } from 'react-redux';
import {loadUsers} from "./actions";
class UsersWithReduxThunk extends React.Component {
componentDidMount() {
this.props.loadUsers();
};
render() {
if (this.props.loading) {
return &lt;div&gt;Loading&lt;/div&gt;
}
if (this.props.error) {
return &lt;div style={{ color: 'red' }}&gt;ERROR: {this.props.error}&lt;/div&gt;
}
return (
&lt;table&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;First Name&lt;/th&gt;
&lt;th&gt;Last Name&lt;/th&gt;
&lt;th&gt;Active?&lt;/th&gt;
&lt;th&gt;Posts&lt;/th&gt;
&lt;th&gt;Messages&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
{this.props.data.map(u =&gt;
&lt;tr key={u.id}&gt;
&lt;td&gt;{u.firstName}&lt;/td&gt;
&lt;td&gt;{u.lastName}&lt;/td&gt;
&lt;td&gt;{u.active ? 'Yes' : 'No'}&lt;/td&gt;
&lt;td&gt;{u.posts}&lt;/td&gt;
&lt;td&gt;{u.messages}&lt;/td&gt;
&lt;/tr&gt;
)}
&lt;/tbody&gt;
&lt;/table&gt;
);
}
}
const mapStateToProps = state =&gt; ({
data: state.reduxThunk.data,
loading: state.reduxThunk.loading,
error: state.reduxThunk.error,
});
const mapDispatchToProps = {
loadUsers
};
export default connect(
mapStateToProps,
mapDispatchToProps
)(UsersWithReduxThunk);</code></pre>
<p>I tried to make the component as simple as possible. I understand that it looks awful :)</p>
<p>Loading indicator</p>
<p>Data</p>
<p>Error</p>
<p><strong>There you have it: 3 files, 109 line of code (13(actions) + 36(reducer) + 60(component)).</strong></p>
<h4 id="pros-">Pros:</h4>
<ul>
<li>“Recommended” approach for react/redux applications.</li>
<li>No additional dependencies. Almost, thunk is tiny :)</li>
<li>No need to learn new things.</li>
</ul>
<h4 id="cons-">Cons:</h4>
<ul>
<li>A lot of code in different places</li>
<li>After navigation to another page, old data is still in the global state (see picture below). This data is outdated and useless information that consumes memory.</li>
<li>In case of complex scenarios (multiple conditional calls in one action, etc.) code isn’t very readable</li>
</ul>
<h3 id="redux-saga">Redux-saga</h3>
<p><a href="https://github.com/redux-saga/redux-saga" rel="noopener">Redux-saga</a> is a redux middleware library designed to make handling side effects easy and readable. It leverages ES6 Generators which allows us to write asynchronous code that looks synchronous. Also, this solution is easy to test.</p>
<p>From a high level perspective, this solution works the same as thunk. The flowchart from the thunk example is still applicable.</p>
<p>To make it work we need to do 6 things.</p>
<h4 id="1-install-saga">1. Install saga</h4><pre><code>npm install redux-saga</code></pre>
<h4 id="2-add-saga-middleware-and-add-all-sagas-configurestore-js-">2. Add saga middleware and add all sagas (configureStore.js)</h4><pre><code class="language-js">import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './appReducers';
import usersSaga from "../redux-saga/sagas";
const sagaMiddleware = createSagaMiddleware();
export function configureStore(initialState) {
const middleware = [sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));
sagaMiddleware.run(usersSaga);
return store;
}</code></pre>
<p>Sagas from line 4 will be added in step 4.</p>
<h4 id="3-create-action-redux-saga-actions-js-">3. Create action (redux-saga/actions.js)</h4><pre><code class="language-js">export const LOAD_USERS_LOADING = 'REDUX_SAGA_LOAD_USERS_LOADING';
export const LOAD_USERS_SUCCESS = 'REDUX_SAGA_LOAD_USERS_SUCCESS';
export const LOAD_USERS_ERROR = 'REDUX_SAGA_LOAD_USERS_ERROR';
export const loadUsers = () =&gt; dispatch =&gt; {
dispatch({ type: LOAD_USERS_LOADING });
};</code></pre>
<h4 id="4-create-sagas-redux-saga-sagas-js-">4. Create sagas (redux-saga/sagas.js)</h4><pre><code class="language-js">import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import {loadUsersSuccess, LOAD_USERS_ERROR, LOAD_USERS_LOADING, LOAD_USERS_SUCCESS} from "./actions";
import Api from '../api'
async function fetchAsync(func) {
const response = await func();
if (response.ok) {
return await response.json();
}
throw new Error("Unexpected error!!!");
}
function* fetchUser() {
try {
const users = yield fetchAsync(Api.getUsers);
yield put({type: LOAD_USERS_SUCCESS, data: users});
} catch (e) {
yield put({type: LOAD_USERS_ERROR, error: e.message});
}
}
export function* usersSaga() {
// Allows concurrent fetches of users
yield takeEvery(LOAD_USERS_LOADING, fetchUser);
// Does not allow concurrent fetches of users
// yield takeLatest(LOAD_USERS_LOADING, fetchUser);
}
export default usersSaga;</code></pre>
<p>Saga has quite a steep learning curve, so if you’ve never used it and have never read anything about this framework it could be difficult to understand what’s going on here. Briefly, in the <strong><em>userSaga</em></strong> function we configure saga to listen to the <strong>LOAD_USERS_LOADING </strong>action and trigger the <strong><em>fetchUsers</em> </strong>function. The <strong><em>fetchUsers</em> </strong>function calls the API. If the call succeeds, then the <strong>LOAD_USER_SUCCESS </strong>action is dispatched, otherwise the <strong>LOAD_USER_ERROR </strong>action is dispatched.</p>
<h4 id="5-create-reducer-redux-saga-reducer-js-">5. Create reducer (redux-saga/reducer.js)</h4><pre><code class="language-js">import {LOAD_USERS_ERROR, LOAD_USERS_LOADING, LOAD_USERS_SUCCESS} from "./actions";
const initialState = {
data: [],
loading: false,
error: ''
};
export default function reduxSagaReducer(state = initialState, action) {
switch (action.type) {
case LOAD_USERS_LOADING: {
return {
...state,
loading: true,
error:''
};
}
case LOAD_USERS_SUCCESS: {
return {
...state,
data: action.data,
loading: false
}
}
case LOAD_USERS_ERROR: {
return {
...state,
loading: false,
error: action.error
};
}
default: {
return state;
}
}
}</code></pre>
<p>The reducer here is absolutely the same as in the thunk example.</p>
<h3 id="6-create-component-connected-to-redux-redux-saga-userswithreduxsaga-js-">6. Create component connected to redux (redux-saga/UsersWithReduxSaga.js)</h3><pre><code class="language-js">import * as React from 'react';
import {connect} from 'react-redux';
import {loadUsers} from "./actions";
class UsersWithReduxSaga extends React.Component {
componentDidMount() {
this.props.loadUsers();
};
render() {
if (this.props.loading) {
return &lt;div&gt;Loading&lt;/div&gt;
}
if (this.props.error) {
return &lt;div style={{color: 'red'}}&gt;ERROR: {this.props.error}&lt;/div&gt;
}
return (
&lt;table&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;First Name&lt;/th&gt;
&lt;th&gt;Last Name&lt;/th&gt;
&lt;th&gt;Active?&lt;/th&gt;
&lt;th&gt;Posts&lt;/th&gt;
&lt;th&gt;Messages&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
{this.props.data.map(u =&gt;
&lt;tr key={u.id}&gt;
&lt;td&gt;{u.firstName}&lt;/td&gt;
&lt;td&gt;{u.lastName}&lt;/td&gt;
&lt;td&gt;{u.active ? 'Yes' : 'No'}&lt;/td&gt;
&lt;td&gt;{u.posts}&lt;/td&gt;
&lt;td&gt;{u.messages}&lt;/td&gt;
&lt;/tr&gt;
)}
&lt;/tbody&gt;
&lt;/table&gt;
);
}
}
const mapStateToProps = state =&gt; ({
data: state.reduxSaga.data,
loading: state.reduxSaga.loading,
error: state.reduxSaga.error,
});
const mapDispatchToProps = {
loadUsers
};
export default connect(
mapStateToProps,
mapDispatchToProps
)(UsersWithReduxSaga);</code></pre>
<p>The component is also almost the same here as in the thunk example.</p>
<p><strong>So here we have 4 files, 136 line of code (7(actions) + 36(reducer) + sagas(33) + 60(component)).</strong></p>
<h4 id="pros--1">Pros:</h4>
<ul>
<li>More readable code (async/await)</li>
<li>Good for handling complex scenarios (multiple conditional calls in one action, action can have multiple listeners, canceling actions, etc.)</li>
<li>Easy to unit test</li>
</ul>
<h4 id="cons--1">Cons:</h4>
<ul>
<li>A lot of code in different places</li>
<li>After navigation to another page, old data is still in the global state. This data is outdated and useless information that consumes memory.</li>
<li>Additional dependency</li>
<li>A lot of concepts to learn</li>
</ul>
<h3 id="suspense">Suspense</h3>
<p>Suspense is a new feature in React 16.6.0. It allows us to defer rendering part of the component until some condition is met (for example data from the API loaded).</p>
<p>To make it work we need to do 4 things (it’s definitely getting better :) ).</p>
<h4 id="1-create-cache-suspense-cache-js-">1. Create cache (suspense/cache.js)</h4>
<p>For the cache, we are going to use a <a href="https://www.npmjs.com/package/simple-cache-provider" rel="noopener">simple-cache-provider</a> which is a basic cache provider for react applications.</p><pre><code class="language-js">import {createCache} from 'simple-cache-provider';
export let cache;
function initCache() {
cache = createCache(initCache);
}
initCache();</code></pre>
<h4 id="2-create-error-boundary-suspense-errorboundary-js-">2. Create Error Boundary (suspense/ErrorBoundary.js)</h4>
<p>This is an Error Boundary to catch errors thrown by Suspense.</p><pre><code class="language-js">import React from 'react';
export class ErrorBoundary extends React.Component {
state = {};
componentDidCatch(error) {
this.setState({ error: error.message || "Unexpected error" });
}
render() {
if (this.state.error) {
return &lt;div style={{ color: 'red' }}&gt;ERROR: {this.state.error || 'Unexpected Error'}&lt;/div&gt;;
}
return this.props.children;
}
}
export default ErrorBoundary;</code></pre>
<h4 id="3-create-users-table-suspense-userstable-js-">3. Create Users Table (suspense/UsersTable.js)</h4>
<p>For this example, we need to create an additional component which loads and shows data. Here we are creating a resource to get data from the API.</p><pre><code class="language-js">import * as React from 'react';
import {createResource} from "simple-cache-provider";
import {cache} from "./cache";
import Api from "../api";
let UsersResource = createResource(async () =&gt; {
const response = await Api.getUsers();
const json = await response.json();
return json;
});
class UsersTable extends React.Component {
render() {
let users = UsersResource.read(cache);
return (
&lt;table&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;First Name&lt;/th&gt;
&lt;th&gt;Last Name&lt;/th&gt;
&lt;th&gt;Active?&lt;/th&gt;
&lt;th&gt;Posts&lt;/th&gt;
&lt;th&gt;Messages&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
{users.map(u =&gt;
&lt;tr key={u.id}&gt;
&lt;td&gt;{u.firstName}&lt;/td&gt;
&lt;td&gt;{u.lastName}&lt;/td&gt;
&lt;td&gt;{u.active ? 'Yes' : 'No'}&lt;/td&gt;
&lt;td&gt;{u.posts}&lt;/td&gt;
&lt;td&gt;{u.messages}&lt;/td&gt;
&lt;/tr&gt;
)}
&lt;/tbody&gt;
&lt;/table&gt;
);
}
}
export default UsersTable;</code></pre>
<h4 id="4-create-component-suspense-userswithsuspense-js-">4. Create component (suspense/UsersWithSuspense.js)</h4><pre><code class="language-js">import * as React from 'react';
import UsersTable from "./UsersTable";
import ErrorBoundary from "./ErrorBoundary";
class UsersWithSuspense extends React.Component {
render() {
return (
&lt;ErrorBoundary&gt;
&lt;React.Suspense fallback={&lt;div&gt;Loading&lt;/div&gt;}&gt;
&lt;UsersTable/&gt;
&lt;/React.Suspense&gt;
&lt;/ErrorBoundary&gt;
);
}
}
export default UsersWithSuspense;</code></pre>
<p><strong>4 files, 106 line of code (9(cache) + 19(ErrorBoundary) + UsersTable(33) + 45(component)).</strong></p>
<p><strong>3 files, 87 line of code (9(cache) + UsersTable(33) + 45(component)) if we assume that ErrorBoundary is a reusable component.</strong></p>
<h4 id="pros--2">Pros:</h4>
<ul>
<li>No redux needed. This approach can be used without redux. Component is fully independent.</li>
<li>No additional dependencies (<a href="https://www.npmjs.com/package/simple-cache-provider" rel="noopener">simple-cache-provider</a> is part of React)</li>
<li>Delay of showing Loading indicator by setting dellayMs property</li>
<li>Fewer lines of code than in previous examples</li>
</ul>
<h4 id="cons--2">Cons:</h4>
<ul>
<li>Cache is needed even when we don’t really need caching.</li>
<li>Some new concepts need to be learned (which are part of React).</li>
</ul>
<h3 id="hooks">Hooks</h3>
<p>At the time of writing this article, hooks have not officially been released yet and available only in the “next” version. Hooks are indisputably one of the most revolutionary upcoming features which can change a lot in the React world very soon. More details about hooks can be found <a href="https://reactjs.org/docs/hooks-intro.html" rel="noopener">here</a> and <a href="https://reactjs.org/docs/hooks-overview.html" rel="noopener">here</a>.</p>
<p>To make it work for our example we need to do <strong>one(!)</strong> thing:</p>
<h4 id="1-create-and-use-hooks-hooks-userswithhooks-js-">1. Create and use hooks (hooks/UsersWithHooks.js)</h4>
<p>Here we are creating 3 hooks (functions) to “hook into” React state.</p><pre><code class="language-js">import React, {useState, useEffect} from 'react';
import Api from "../api";
function UsersWithHooks() {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState('');
useEffect(() =&gt; {
async function fetchData() {
try {
const response = await Api.getUsers();
const json = await response.json();
setData(json);
} catch (e) {
setError(e.message || 'Unexpected error');
}
setLoading(false);
}
fetchData();
}, []);
if (loading) {
return &lt;div&gt;Loading&lt;/div&gt;
}
if (error) {
return &lt;div style={{color: 'red'}}&gt;ERROR: {error}&lt;/div&gt;
}
return (
&lt;table&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;First Name&lt;/th&gt;
&lt;th&gt;Last Name&lt;/th&gt;
&lt;th&gt;Active?&lt;/th&gt;
&lt;th&gt;Posts&lt;/th&gt;
&lt;th&gt;Messages&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
{data.map(u =&gt;
&lt;tr key={u.id}&gt;
&lt;td&gt;{u.firstName}&lt;/td&gt;
&lt;td&gt;{u.lastName}&lt;/td&gt;
&lt;td&gt;{u.active ? 'Yes' : 'No'}&lt;/td&gt;
&lt;td&gt;{u.posts}&lt;/td&gt;
&lt;td&gt;{u.messages}&lt;/td&gt;
&lt;/tr&gt;
)}
&lt;/tbody&gt;
&lt;/table&gt;
);
}
export default UsersWithHooks;</code></pre>
<p><strong>And that’s it — just 1 file, 56 line of code!!!</strong></p>
<h4 id="pros--3">Pros:</h4>
<ul>
<li>No redux needed. This approach can be used without redux. Component is fully independent.</li>
<li>No additional dependencies</li>
<li>About 2 times less code than in other solutions</li>
</ul>
<h4 id="cons--3">Cons:</h4>
<ul>
<li>At first look, the code looks weird and difficult to read and understand. It will take some time to get used to hooks.</li>
<li>Some new concepts need to be learned (which are part of React)</li>
<li>Not officially released yet</li>
</ul>
<h3 id="conclusion">Conclusion</h3>
<p>Let’s organize these metrics as a table first.</p>
<ul>
<li>Redux is still a good option to manage global state (if you have it)</li>
<li>Each option has pros and cons. Which approach is better depends on the project: its complexity, use cases, team knowledge, when the project is going to production, etc.</li>
<li>Saga can help with complex use cases</li>
<li>Suspense and Hooks are both worth considering (or at least learning) especially for new projects</li>
</ul>
<p>That’s it — enjoy and happy coding!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
