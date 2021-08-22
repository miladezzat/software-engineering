---
card: "https://cdn-media-1.freecodecamp.org/images/1*zISOb74W7PriWKX0y7biKg.jpeg"
tags: [JavaScript]
description: "Here’s a common scenario in React: You’re mapping over an arr"
author: "Milad E. Fahmy"
title: "React Pattern: Extract Child Components to Avoid Binding"
created: "2021-08-16T10:23:09+02:00"
modified: "2021-08-16T10:23:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-react-native tag-web-development tag-web-design ">
<header class="post-full-header">
<h1 class="post-full-title">React Pattern: Extract Child Components to Avoid Binding</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*zISOb74W7PriWKX0y7biKg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*zISOb74W7PriWKX0y7biKg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*zISOb74W7PriWKX0y7biKg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*zISOb74W7PriWKX0y7biKg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*zISOb74W7PriWKX0y7biKg.jpeg" alt="React Pattern: Extract Child Components to Avoid Binding">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Here’s a common scenario in React: You’re mapping over an array, and you need each item to call a click handler and pass some relevant data.</p><p>Here’s an example. I’m iterating over a list of users and passing the userId to delete to the deleteUser function on line 31.</p><pre><code class="language-js">import React from 'react';
class App extends React.Component {
constructor() {
this.state = {
users: [
{ id: 1, name: 'Cory' },
{ id: 2, name: 'Meg' }
]
};
}
deleteUser = id =&gt; {
this.setState(prevState =&gt; {
return { users: prevState.users.filter( user =&gt; user.id !== id)}
})
}
render() {
return (
&lt;div&gt;
&lt;h1&gt;Users&lt;/h1&gt;
&lt;ul&gt;
{
this.state.users.map( user =&gt; {
return (
&lt;li key={user.id}&gt;
&lt;input
type="button"
value="Delete"
onClick={() =&gt; this.deleteUser(user.id)}
/&gt;
{user.name}
&lt;/li&gt;
)
})
}
&lt;/ul&gt;
&lt;/div&gt;
);
}
}
export default App;</code></pre><p>Here’s a <a href="https://codesandbox.io/s/0OP2Yq87" rel="noopener">working example on Codesandbox</a>. (which is awesome ?)</p><h3 id="so-what-s-the-problem">So What’s the Problem?</h3><p>I’m using an arrow function in the click handler. This means <strong>every time render runs, a new function is allocated</strong>. In many cases, this isn’t a big deal. But if you have child components, they’ll re-render even when data hasn’t changed because each render allocates a new function.</p><p><strong>Bottom line</strong>: Avoid declaring arrow functions or binding in render for optimal performance. My team uses <a href="https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md" rel="noopener">this ESLint rule</a> to help alert us to this issue.</p><h3 id="what-s-the-solution">What’s the Solution?</h3><p>So how do you avoid binding and arrow functions in render? One option is to extract a child component. Here, I’ve extracted the list item to UserListItem.js:</p><pre><code class="language-js">import React from 'react';
import PropTypes from 'prop-types';
class UserListItem extends React.Component {
onDeleteClick = () =&gt; {
// No bind needed since we can compose
// the relevant data for this item here
this.props.onClick(this.props.user.id);
}
// No arrow func in render! ?
render() {
return (
&lt;li&gt;
&lt;input
type="button"
value="Delete"
onClick={this.onDeleteClick}
/&gt;
{this.props.user.name}
&lt;/li&gt;
);
}
}
UserListItem.propTypes = {
user: PropTypes.object.isRequired,
onClick: PropTypes.func.isRequired
};
export default UserListItem;</code></pre><p>Then, the parent component’s render gets simpler, and no longer needs to contain an arrow function. It passes the relevant context for each list item down via props in the new “renderUserListItem” function.</p><pre><code class="language-js">import React from 'react';
import { render } from 'react-dom';
import UserListItem from './UserListItem';
class App extends React.Component {
constructor(props) {
super(props);
this.state = {
users: [{ id: 1, name: 'Cory' }, { id: 2, name: 'Sherry' }],
};
}
deleteUser = id =&gt; {
this.setState(prevState =&gt; {
return { users: prevState.users.filter(user =&gt; user.id !== id) };
});
};
renderUserListItem = user =&gt;
&lt;UserListItem key={user.id} user={user} onClick={this.deleteUser} /&gt;;
render() {
return (
&lt;div&gt;
&lt;h1&gt;Users&lt;/h1&gt;
&lt;ul&gt;
{this.state.users.map(this.renderUserListItem)}
&lt;/ul&gt;
&lt;/div&gt;
);
}
}
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
