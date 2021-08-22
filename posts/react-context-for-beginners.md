---
card: "/images/default.jpg"
tags: [React]
description: "React context is an essential tool for every React developer "
author: "Milad E. Fahmy"
title: "React Context for Beginners – The Complete Guide (2021)"
created: "2021-08-16T10:03:23+02:00"
modified: "2021-08-16T10:03:23+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-react-context tag-javascript tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">React Context for Beginners – The Complete Guide (2021)</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/07/react-context-for-beginners.png 300w,
/news/content/images/size/w600/2021/07/react-context-for-beginners.png 600w,
/news/content/images/size/w1000/2021/07/react-context-for-beginners.png 1000w,
/news/content/images/size/w2000/2021/07/react-context-for-beginners.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/07/react-context-for-beginners.png" alt="React Context for Beginners – The Complete Guide (2021)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>React context is an essential tool for every React developer to know. I lets you easily share state in your applications.</p><p>In this comprehensive guide, we will cover what React context is, how to use it, when and when not to use context, and lots more.</p><p>Even if you've never worked with React context before, you're in the right place. You will learn everything you need to know with simple, step-by-step examples.</p><p>Let's get started!</p><blockquote>Want the ultimate guide to learn React from front to back? Check out <a href="https://reactbootcamp.com"><strong>The React Bootcamp</strong></a>.</blockquote><h2 id="table-of-contents">Table of Contents</h2><ul><li><a href="#what-is-react-context">What is React context?</a></li><li><a href="#when-should-you-use-react-context">When should you use React context?</a></li><li><a href="#what-problems-does-react-context-solve">What problems does React context solve?</a></li><li><a href="#how-do-i-use-react-context">How do I use React context?</a></li><li><a href="#what-is-the-usecontext-hook">What is the useContext hook?</a></li><li><a href="#you-may-not-need-context">You may not need context</a></li><li><a href="#does-react-context-replace-redux">Does React context replace Redux?</a></li><li><a href="#react-context-caveats">React context caveats</a></li></ul><h2 id="what-is-react-context">What is React context?</h2><p>React context allows us to pass down and use (consume) data in whatever component we need in our React app without using props.</p><p><em>In other words, React context allows us to share data (state) across our components more easily.</em></p><h2 id="when-should-you-use-react-context">When should you use React context?</h2><p>React context is great when you are passing data that can be used in any component in your application.</p><p><strong>These types of data include:</strong></p><ul><li>Theme data (like dark or light mode)</li><li>User data (the currently authenticated user)</li><li>Location-specific data (like user language or locale)</li></ul><p>Data should be placed on React context that does not need to be updated often.<em> </em></p><p>Why? Because context was not made as an entire state management system. It was made to make consuming data easier.</p><p><em>You can think of React context as the equivalent of global variables for our React components.</em></p><h2 id="what-problems-does-react-context-solve">What problems does React context solve?</h2><p>React context helps us avoid the problem of props drilling.</p><p><strong>Props drilling</strong> is a term to describe when you pass props down multiple levels to a nested component, through components that don't need it.</p><p>Here is an example of props drilling. In this application, we have access to theme data that we want to pass as a prop to all of our app's components. </p><p>As you can see, however, the direct children of <code>App</code>, such as <code>Header</code>, also have to pass the theme data down using props.</p><pre><code class="language-js">export default function App({ theme }) {
return (
&lt;&gt;
&lt;Header theme={theme} /&gt;
&lt;Main theme={theme} /&gt;
&lt;Sidebar theme={theme} /&gt;
&lt;Footer theme={theme} /&gt;
&lt;/&gt;
);
}
function Header({ theme }) {
return (
&lt;&gt;
&lt;User theme={theme} /&gt;
&lt;Login theme={theme} /&gt;
&lt;Menu theme={theme} /&gt;
&lt;/&gt;
);
}</code></pre><p><em>What is the issue with this example?</em></p><p>The issue is that we are drilling the <code>theme</code> prop through multiple components that don't immediately need it.</p><p>The <code>Header</code> component doesn't need <code>theme</code> other than to pass it down to its child component. In other words, it would be better for <code>User</code> , <code>Login</code> and <code>Menu</code> to consume the <code>theme</code> data directly.</p><p>This is the benefit of React context – we can bypass using props entirely and therefore avoid the issue of props drilling.</p><h2 id="how-do-i-use-react-context">How do I use React context?</h2><p>Context is an API that is built into React, starting from React version 16.</p><p>This means that we can create and use context directly by importing React in any React project.</p><p><strong>There are four steps to using React context:</strong></p><ol><li>Create context using the <code>createContext</code> method.</li><li>Take your created context and wrap the context provider around your component tree.</li><li>Put any value you like on your context provider using the <code>value</code> prop.</li><li>Read that value within any component by using the context consumer.</li></ol><p><em>Does all this sound confusing?</em> It's simpler than you think.</p><p>Let's take a look at a very basic example. In our <code>App</code>, let's pass down our own name using Context and read it in a nested component: <code>User</code>.</p><pre><code class="language-js">import React from 'react';
export const UserContext = React.createContext();
export default function App() {
return (
&lt;UserContext.Provider value="Reed"&gt;
&lt;User /&gt;
&lt;/UserContext.Provider&gt;
)
}
function User() {
return (
&lt;UserContext.Consumer&gt;
{value =&gt; &lt;h1&gt;{value}&lt;/h1&gt;}
{/* prints: Reed */}
&lt;/UserContext.Consumer&gt;
)
}</code></pre><p>Let's break down what we are doing, step-by-step:</p><ol><li>Above our <code>App</code> component, we are creating context with <code>React.createContext()</code> and putting the result in a variable, <code>UserContext</code>. In almost every case, you will want to export it as we are doing here because your component will be in another file. Note that we can pass an initial value to our <code>value</code> prop when we call <code>React.createContext()</code>.</li><li>In our <code>App</code> component, we are using <code>UserContext</code>. Specifically <code>UserContext.Provider</code>. The created context is an object with two properties: <code>Provider</code> and <code>Consumer</code>, both of which are components. To pass our value down to every component in our App, we wrap our Provider component around it (in this case, <code>User</code>).</li><li>On <code>UserContext.Provider</code>, we put the value that we want to pass down our entire component tree. We set that equal to the <code>value</code> prop to do so. In this case, it is our name (here, Reed).</li><li>In <code>User</code>, or wherever we want to consume (or use) what was provided on our context, we use the consumer component: <code>UserContext.Consumer</code>. To use our passed down value, we use what is called the <strong>render props pattern</strong>. It is just a function that the consumer component gives us as a prop. And in the return of that function, we can return and use <code>value</code>.</li></ol><h2 id="what-is-the-usecontext-hook">What is the useContext hook?</h2><p>Looking at the example above, the render props pattern for consuming context may look a bit strange to you.</p><p>Another way of consuming context became available in React 16.8 with the arrival of React hooks. We can now consume context with the <strong>useContext hook</strong>.</p><p>Instead of using render props, we can pass the entire context object to <code>React.useContext()</code> to consume context at the top of our component. </p><p>Here is the example above using the useContext hook:</p><pre><code class="language-js">import React from 'react';
export const UserContext = React.createContext();
export default function App() {
return (
&lt;UserContext.Provider value="Reed"&gt;
&lt;User /&gt;
&lt;/UserContext.Provider&gt;
)
}
function User() {
const value = React.useContext(UserContext);
return &lt;h1&gt;{value}&lt;/h1&gt;;
}</code></pre><p><em>The benefit of the useContext hook is that it makes our components more concise and allows us to create our own custom hooks.</em></p><p>You can either use the consumer component directly or the useContext hook, depending on which pattern you prefer.</p><h2 id="you-may-not-need-context">You may not need context</h2><p>The mistake many developers make is reaching for context when once they have to pass props down several levels to a component.</p><p>Here is an application with a nested <code>Avatar</code> component that requires two props <code>username</code> and <code>avatarSrc</code> from the <code>App</code> component.</p><pre><code class="language-js">export default function App({ user }) {
const { username, avatarSrc } = user;
return (
&lt;main&gt;
&lt;Navbar username={username} avatarSrc={avatarSrc} /&gt;
&lt;/main&gt;
);
}
function Navbar({ username, avatarSrc }) {
return (
&lt;nav&gt;
&lt;Avatar username={username} avatarSrc={avatarSrc} /&gt;
&lt;/nav&gt;
);
}
function Avatar({ username, avatarSrc }) {
return &lt;img src={avatarSrc} alt={username} /&gt;;
}
</code></pre><p>If possible, we want to avoid passing multiple props through components that don't need it.</p><p><em>What can we do?</em></p><p>Instead of immediately resorting to context because we are prop drilling, we should better compose our components.</p><p>Since only the top most component, <code>App</code>, needs to know about the <code>Avatar</code> component, we can create it directly within <code>App</code>.</p><p>This allows us to pass down a single prop, <code>avatar</code>, instead of two.</p><pre><code class="language-js">export default function App({ user }) {
const { username, avatarSrc } = user;
const avatar = &lt;img src={avatarSrc} alt={username} /&gt;;
return (
&lt;main&gt;
&lt;Navbar avatar={avatar} /&gt;
&lt;/main&gt;
);
}
function Navbar({ avatar }) {
return &lt;nav&gt;{avatar}&lt;/nav&gt;;
<p><strong><a href="http://bit.ly/join-react-bootcamp">The React Bootcamp</a></strong> takes everything you should know about learning React and bundles it into one comprehensive package, including videos, cheatsheets, plus special bonuses.</p>
<p>Gain the insider information <strong>100s of developers</strong> have already used to become a React pro, find their dream job, and take control of their future:</p>
<p><a href="http://bit.ly/join-react-bootcamp"><img src="https://reedbarger.nyc3.digitaloceanspaces.com/react-bootcamp-banner.png" alt="The React Bootcamp"></a><br>
<em>Click here to be notified when it opens</em></p>
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
