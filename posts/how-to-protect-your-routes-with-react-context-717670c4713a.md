---
card: "https://cdn-media-1.freecodecamp.org/images/1*wmwNRYeBumNlEKriJxLHjg.jpeg"
tags: [JavaScript]
description: by paul christophe
author: "Milad E. Fahmy"
title: "How to protect your routes with React Context"
created: "2021-08-15T19:46:26+02:00"
modified: "2021-08-15T19:46:26+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-front-end-development tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to protect your routes with React Context</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*wmwNRYeBumNlEKriJxLHjg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*wmwNRYeBumNlEKriJxLHjg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*wmwNRYeBumNlEKriJxLHjg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*wmwNRYeBumNlEKriJxLHjg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*wmwNRYeBumNlEKriJxLHjg.jpeg" alt="How to protect your routes with React Context">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by paul christophe</p>
<h1 id="how-to-protect-your-routes-with-react-context">How to protect your routes with React Context</h1>
<figcaption>Photo by <a href="https://unsplash.com/photos/PpwqEpJ9UaQ?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Antonina Bukowska</a> on <a href="https://unsplash.com/search/photos/lock?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>Among the changes in <a href="https://reactjs.org/blog/2018/03/29/react-v-16-3.html" rel="noopener">React 16.3</a> is a new stable version of the <strong>Context API</strong>. We’re going to take a look at how it works by building a <strong>protected route component</strong>.</p>
<h4 id="what-is-context">What is Context?</h4>
<p>Context is about encapsulating state. It allows us to pass data from a parent provider component to any subscribed component down the tree. Without state management we often have to “drill” props through every component along the way.</p>
<h4 id="isn-t-that-what-redux-is-for">Isn’t that what Redux is for?</h4>
<p><strong>Yes</strong>, Context operates similarly to how components can connect to Redux’s global state. However, a native element like Context will often be a better solution for small to medium apps that don’t need the complex overhead of Redux.</p>
<h4 id="basic-concepts">Basic Concepts</h4>
<p>There are three elements to Context:</p>
<ul>
<li><code>createContext</code> — Calling this returns a pair of components, <code>Provider</code> and <code>Consumer</code>.</li>
<li><code>Provider</code> — a Component that allows for one or more <code>Consumers</code> to subscribe to changes.</li>
<li><code>Consumer</code> —a Component subscribed to a Provider</li>
</ul>
<h3 id="let-s-start-building">Let’s Start Building</h3>
<p>We’re going to build an app with <strong>two</strong> routes. One is <strong>a landing page</strong> with global access. The other is <strong>a dashboard page</strong> with restricted access for logged in users. You can find the <a href="https://codesandbox.io/s/p71pr7jn50" rel="noopener">final version here</a>.</p>
<blockquote><em>Try it out: go to /dashboard while logged out. Log in and navigate freely between routes. From the dashboard, log out and it’ll kick you out to the landing page.</em></blockquote>
<h4 id="context-header">Context Header</h4>
<p>To demonstrate Context’s basic functionality, let’s start by building a header component that lets us log in and out. First, create our context in a new file.</p><pre><code>/* AuthContext.js */</code></pre><pre><code>import React from 'react';</code></pre><pre><code>const AuthContext = React.createContext();</code></pre>
<p>Export a component <code>AuthProvider</code> to define our state (whether the user is logged in) and pass its state to the <code>value</code> prop on the <code>Provider</code>. We’ll simply expose <code>AuthConsumer</code> with a meaningful name.</p><pre><code>/* AuthContext.js */</code></pre><pre><code>...</code></pre><pre><code>class AuthProvider extends React.Component {  state = { isAuth: false }</code></pre><pre><code>  render() {    return (      &lt;AuthContext.Provider        value={{ isAuth: this.state.isAuth }}      &gt;        {this.props.children}      &lt;/AuthContext.Provider&gt;    )  }}</code></pre><pre><code>const AuthConsumer = AuthContext.Consumer</code></pre><pre><code>export { AuthProvider, AuthConsumer }</code></pre>
<p>In index.js, wrap our app in <code>AuthProvider</code>.</p><pre><code>/* index.js */import React from 'react';import { render } from 'react-dom';import { AuthProvider } from './AuthContext';import Header from './Header';</code></pre><pre><code>const App = () =&gt; (  &lt;;div&gt;    &lt;AuthProvider&gt;      &lt;Header /&gt;    &lt;/AuthProvider&gt;  &lt;/div&gt;);</code></pre><pre><code>render(&lt;App /&gt;, document.getElementById('root'));</code></pre>
<p>Now create our <code>Header</code> and import our <code>AuthConsumer</code> (I’m leaving styling out for clarity).</p><pre><code>/* Header.js */import React from 'react'import { AuthConsumer } from './AuthContext'import { Link } from 'react-router-dom'</code></pre><pre><code>export default () =&gt; (  &lt;header&gt;    &lt;AuthConsumer&gt;    &lt;/AuthConsumer&gt;  &lt;/header&gt;)</code></pre>
<p>Context Consumers must have a <strong>function as their direct child.</strong> This will be passed the value from our <code>Provider</code>.</p><pre><code>/* Header.js */...export default () =&gt; (  &lt;header&gt;    &lt;AuthConsumer&gt;</code></pre><pre><code>      {({ isAuth }) =&gt; (        &lt;div&gt;          &lt;h3&gt;            &lt;Link to="/"&gt;              HOME            &amp;lt;/Link&gt;          &lt;/h3&gt;</code></pre><pre><code>          {isAuth ? (            &lt;ul&gt;              &lt;Link to="/dashboard"&gt;                Dashboard              &lt;/Link&gt;              &lt;button&gt;                logout              &lt;/button&gt;            &lt;/ul&gt;          ) : (            &lt;button&gt;login&lt;/button&gt;          )}        &lt;/div&gt;      )}</code></pre><pre><code>    &lt;/AuthConsumer&gt;  &lt;/header&gt;)</code></pre>
<p>Because <code>isAuth</code> is set to false, only the login button will be visible. Try changing the value to <code>true</code> (it’ll switch to the logout button).</p>
<p>Ok, let’s try switching <code>isAuth</code> in code. We’ll pass a login and logout function from our <code>Provider</code>.</p><pre><code>/* AuthContext.js */...class AuthProvider extends React.Component {  state = { isAuth: false }</code></pre><pre><code>  constructor() {    super()    this.login = this.login.bind(this)    this.logout = this.logout.bind(this)  }</code></pre><pre><code>  login() {    // setting timeout to mimic an async login    setTimeout(() =&gt; this.setState({ isAuth: true }), 1000)  }</code></pre><pre><code>  logout() {    this.setState({ isAuth: false })  }</code></pre><pre><code>  render() {    return (      &lt;AuthContext.Provider        value={{          isAuth: this.state.isAuth,          login: this.login,          logout: this.logout        }}      &gt;        {this.props.children}      &lt;/AuthContext.Provider&gt;    )  }}</code></pre>
<p>These functions will allow us to toggle our auth state in <code>Header</code>.</p><pre><code>/* Header.js */...export default () =&gt; (  &lt;header&gt;    &lt;AuthConsumer&gt;      {({ isAuth, login, logout }) =&gt; (        &lt;div&gt;          &lt;h3&gt;            &lt;Link to="/"&gt;              HOME            &lt;/Link&gt;          &lt;/h3&gt;</code></pre><pre><code>          {isAuth ? (            &lt;ul&gt;              &lt;Link to="/dashboard"&gt;                Dashboard              &lt;/Link&gt;              &lt;button onClick={logout}&gt;                logout              &lt;/button&gt;            &lt;/ul&gt;          ) : (            &lt;button onClick={login}&gt;login&lt;/button&gt;          )}        &lt;/div&gt;      )}    &lt;/AuthConsumer&gt;  &lt;/header&gt;)</code></pre>
<h3 id="protected-route-with-context">Protected Route With Context</h3>
<p>Now that we have covered the basics, let’s extend what we’ve learned to create a protected route component.</p>
<p>First make <code>Landing</code> and <code>Dashboard</code> page components. Our dashboard will only be visible when the user is logged in. Both pages will be as simple, as below:</p><pre><code>/* Dashboard.js */import React from 'react'</code></pre><pre><code>const Dashboard = () =&gt; &lt;h2&gt;User Dashboard&lt;/h2&gt;</code></pre><pre><code>export default Dashboard</code></pre>
<p>Now let’s route to these pages.</p><pre><code>/* index.js */import React from 'react';import { render } from 'react-dom';import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';import { AuthProvider } from './AuthContext';import Landing from './Landing';import Dashboard from './Dashboard';import Header from './Header';</code></pre><pre><code>const App = () =&gt; (  &lt;;div&gt;    &lt;Router&gt;      &lt;AuthProvider&gt;;        &lt;Header /&gt;        &lt;Switch&gt;          &lt;Route path="/dashboard" component={Dashboard} /&gt;          &lt;Route path="/" component={Landing} /&gt;        &amp;lt;/Switch&gt;      &lt;/AuthProvider&gt;    &lt;/Router&gt;  &lt;/div&gt;);</code></pre><pre><code>render(&lt;App /&gt;, document.getElementById('root'));</code></pre>
<p>In this current state you can navigate to both <code>/</code> and <code>/dashboard</code>. We’ll make a special route component that checks if a user is logged in called <code>ProtectedRoute</code>. The set up is similar to our <code>Header</code> component.</p><pre><code>/* ProtectedRoute.js */import React from 'react';import { Route, Redirect } from 'react-router-dom';import { AuthConsumer } from './AuthContext';</code></pre><pre><code>const ProtectedRoute = () =&gt; (  &lt;AuthConsumer&gt;    {({ isAuth }) =&gt; (</code></pre><pre><code>    )}  &lt;/AuthConsumer&amp;gt;);</code></pre><pre><code>export default ProtectedRoute;</code></pre>
<p>The private route will function just like a regular <code>react-router</code> route, so we’ll expose the component and any other props passed to it.</p><pre><code>const ProtectedRoute = ({ component: Component, ...rest }) =&gt; (</code></pre>
<p>Now the interesting part: we’ll use the <code>isAuth</code> variable to determine if it should redirect or render the protected route’s component.</p><pre><code>const ProtectedRoute = ({ component: Component, ...rest }) =&gt; (  &lt;AuthConsumer&gt;    {({ isAuth }) =&gt; (      &lt;Route        render={          props =&gt;            isAuth             ? &lt;Component {...props} /&gt;             : &lt;Redirect to="/" /&gt;        }        {...rest}      /&gt;    )}  &lt;/AuthConsumer&gt;)</code></pre>
<p>In our <code>index</code> file let’s import <code>ProtectedRoute</code> and use it on our dashboard route.</p><pre><code>/* index.js */...</code></pre><pre><code>  &lt;ProtectedRoute path="/dashboard" component={Dashboard} /&gt;</code></pre>
<p>Awesome, now we have protected routes! Try pointing the browser to <code>/dashboard</code> and watch it kick you back to the landing page.</p>
<p>Again, here’s the link for the <a href="https://codesandbox.io/s/p71pr7jn50" rel="noopener">working demo</a>. Read more about Context from <a href="https://reactjs.org/docs/context.html" rel="noopener">React’s Official Docs</a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
