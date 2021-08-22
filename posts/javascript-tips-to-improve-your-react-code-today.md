---
card: "/images/default.jpg"
tags: [JavaScript]
description: Let's look at five JavaScript tips you can use today to insta
author: "Milad E. Fahmy"
title: "5 JavaScript Tips to Improve Your React Code"
created: "2021-08-15T19:23:38+02:00"
modified: "2021-08-15T19:23:38+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">5 JavaScript Tips to Improve Your React Code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/07/5-javascript-tips-to-improve-your-react-code.png 300w,
/news/content/images/size/w600/2021/07/5-javascript-tips-to-improve-your-react-code.png 600w,
/news/content/images/size/w1000/2021/07/5-javascript-tips-to-improve-your-react-code.png 1000w,
/news/content/images/size/w2000/2021/07/5-javascript-tips-to-improve-your-react-code.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/07/5-javascript-tips-to-improve-your-react-code.png" alt="5 JavaScript Tips to Improve Your React Code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Let's look at five JavaScript tips you can use today to instantly improve your React applications. </p>
<p>Because React is a JavaScript library, any improvements that we make in our JavaScript skills will directly improve the applications that we build with React.</p>
<p>For this reason, I've put together a number of tips to show you how to use the latest JavaScript features to make your React code even better.</p>
<blockquote>Want to become a professional React developer in record time? Check out <a href="https://bit.ly/the-react-bootcamp"><strong>The React Bootcamp</strong></a>.</blockquote>
<h2 id="how-to-use-the-optional-chaining-operator-in-javascript">How to Use the Optional Chaining Operator in JavaScript</h2>
<p>In JavaScript, we need to first make sure that an object exists before we can access a property from it. </p>
<p>If the object has a value of <code>undefined</code> or <code>null</code>, it will result in a type error. </p>
<p>In our example here, we have a React application where users can edit posts they have made. </p>
<p>Only if <code>isPostAuthor</code> is true – meaning the authenticated user has the same id as the id of the author of the post – will we show the <code>EditButton</code> component.</p><pre><code class="language-js">export default function EditButton({ post }) {
const user = useAuthUser();
const isPostAuthor = post.author.userId !== user &amp;&amp; user.userId;
return isPostAuthor ? &lt;EditButton /&gt; : null;
}</code></pre>
<p>The problem with this code is that our <code>user</code> value might have a value of <code>undefined</code>. This is why we must use the <code>&amp;&amp;</code> operator to make sure <code>user</code> is an object before we attempt to get the <code>userId</code> property. </p>
<p>If we were to access an object within an object, we would have to include another <code>&amp;&amp;</code> conditional. This can cause our code to become tedious and hard to understand.</p>
<p>Fortunately, a new JavaScript feature that allows us to check and see if an object exists before accessing a property without using the end conditional is the <strong>optional chaining operator.</strong></p>
<p>To make sure an object exists before attempting to access a property off of it, just put a question mark immediately afterwards:</p><pre><code class="language-js">export default function EditButton({ post }) {
const user = useAuthUser();
const isPostAuthor = post.author.userId !== user?.userId;
return isPostAuthor ? &lt;EditButton /&gt; : null;
}</code></pre>
<p>This will prevent any type errors and allows us to write much cleaner conditional logic.</p>
<h2 id="how-to-use-implicit-return-with-parentheses-in-javascript">How to Use Implicit Return with Parentheses in JavaScript</h2>
<p>In React applications, we can write components with either the function declaration syntax using the <code>function</code> keyword or we can use an arrow function, which must be set to a variable. </p>
<p>It's important to note that components which use the <code>function</code> keyword must use the <code>return</code> keyword before returning any JSX.</p><pre><code class="language-js">export default function App() {
return (
&lt;Layout&gt;
&lt;Routes /&gt;
&lt;/Layout&gt;
);
}</code></pre>
<p>We can return multiple lines of JavaScript code from a function with an implicit return (without using the <code>return</code> keyword), by wrapping the returned code in a set of parentheses.</p>
<p>For components made with arrow functions, we do not have to include the <code>return</code> keyword – we can just return our JSX with a set of parentheses.</p><pre><code class="language-js">const App = () =&gt; (
&lt;Layout&gt;
&lt;Routes /&gt;
&lt;/Layout&gt;
);
export default App;</code></pre>
<p>Additionally, whenever you are iterating over a list of elements with the React <code>.map()</code> function, you can also skip the return keyword and return your JSX just with a set of parentheses in the body of your inner function.</p><pre><code class="language-js">function PostList() {
const posts = usePostData();
return posts.map(post =&gt; (
&lt;PostListItem key={post.id} post={post} /&gt;
))
}</code></pre>
<h2 id="how-to-use-the-nullish-coalescing-operator-in-javascript">How to Use the Nullish Coalescing Operator in JavaScript</h2>
<p>In JavaScript, if a certain value is falsy (like <code>null</code>, <code>undefined,</code> <code>0</code>, <code>''</code>, <code>NaN</code>), we can use the or (<code>||</code>) conditional to provide a fallback value. </p>
<p>For example, if we have a product page component and we want to display a given product's price, you can use a <code>||</code> conditional to either show the price or show the text "Product is unavailable". </p><pre><code class="language-js">export default function ProductPage({ product }) {
return (
&lt;&gt;
&lt;ProductDetails /&gt;
&lt;span&gt;{product.price || "Product is unavailable"} // if price is 0, we will see "Product is unavailable"
&lt;/&gt;
);
}</code></pre>
<p>However, there's a small error with our existing code. </p>
<p>If the price has the value of <code>0</code>, which is falsy, instead of showing the price itself, we're going to show the text "Product is unavailable" – which is not what we want. </p>
<p>We need a more precise operator to only return the right hand side of our expression if the left hand side is <code>null</code> or <code>undefined</code> instead of any falsy value. </p>
<p>This is available now in the <strong>nullish coalescing operator</strong>. It will return its right hand operand when its left hand operand is <code>null</code> or <code>undefined</code>. Otherwise it will return its left hand side operand:</p><pre><code>null ?? 'fallback';
// "fallback"
0 ?? 42;
// 0</code></pre>
<p>The way to fix our code that we have above is simply to replace the or conditional with the nullish coalescing operator to show the correct price of <code>0</code>.</p><pre><code class="language-js">export default function ProductPage({ product }) {
return (
&lt;&gt;
&lt;ProductDetails /&gt;
&lt;span&gt;{product.price ?? "Product is unavailable"}
&lt;/&gt;
);
}</code></pre>
<h2 id="how-to-use-the-object-spread-operator-for-updating-state-in-javascript">How to Use the Object Spread Operator for Updating State in JavaScript</h2>
<p>When it comes to using state in React, we have a couple options: we can create many state variables with the <code>useState</code> hook for individual primitive values or manage multiple values within one state variable using an object. </p>
<p>In the example below, we have a signup page where we are keeping track of current users' username, email, and password. </p>
<p>When they submit the signup form, we validate the form contents they typed in and handle signing up the user. </p><pre><code class="language-js">import React from 'react'
export default function SignUpPage() {
const [state, setState] = React.useState({ username: '', email: '', password: '' });
function handleSubmit(event) {
event.preventDefault();
validateForm(state);
signUpUser(state)
}
function handleChange(event) {
const {name, value} = event.target;
setState({ ...state, [name]: value });
}
return (
&lt;form onSubmit={handleSubmit}&gt;
&lt;input name="username" onChange={handleChange} /&gt;
&lt;input name="email" onChange={handleChange} /&gt;
&lt;input name="password" onChange={handleChange} /&gt;
&lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
);
}</code></pre>
<p>Note additionally that when using the <code>useState</code> hook, you must spread in all of the previous state in order to update an individual key value pair. </p>
<p>Whenever a user types into an input and the change event takes place, the <code>handleChange</code> function is called. </p>
<p>Then we not only update a certain input's value according to its <code>name</code> attribute, but we also spread in all of the current state values of username, email, and password. We spread all of these values as individual properties in the new object we are setting in state with the <code>...</code> – the object spread operator.</p>
<h2 id="how-to-use-ternaries-to-conditionally-apply-classes-props-in-javascript">How to Use Ternaries to Conditionally Apply Classes / Props in JavaScript</h2>
<p>Ternaries are an essential operator to use when writing conditionals within React components. </p>
<p>We often use ternaries within our JSX because they are expressions and resolve to one or another value that can be displayed. This allows them to often be used to either show or hide components and elements.</p>
<p>It's worth noting, however, that we can use ternaries when it comes to any value within our JSX. </p>
<p>That means, instead of using third-party libraries like <code>classnames</code> to conditionally add or remove classes to our React elements, we can do so with an inline ternary and a JavaScript template literal. </p>
<p>You can see in the example here that if our user has selected dark mode, we're applying a class <code>body-dark</code>. Otherwise we apply the class <code>body-light</code> to give our application the appropriate styles to everything within our <code>Routes</code> component. </p><pre><code class="language-js">export default function App() {
const { isDarkMode } = useDarkMode();
return (
&lt;main className={`body ${isDarkMode ? "body-dark" : "body-light"}`}&gt;
&lt;Routes /&gt;
&lt;/main&gt;
);
}</code></pre>
<p>It's worth noting that this conditional logic can be applied to any prop as well, not just classnames or inline styles. </p>
<p>We have another example here in which our application is detecting whether the user's on a mobile device or not with a special hook. If so, we pass down a specific height value through the prop <code>height</code> to our <code>Layout</code> component.</p><pre><code class="language-js">export default function App() {
const { isMobile } = useDeviceDetect();
return (
&lt;Layout height={isMobile ? '100vh' : '80vh'}&gt;
&lt;Routes /&gt;
&lt;/Layout&gt;
);
}</code></pre>
<h2 id="wantevenmorejointhereactbootcamp">Want Even More? Join The React Bootcamp</h2>
<p><strong><a href="http://bit.ly/join-react-bootcamp">The React Bootcamp</a></strong> takes everything you should know about learning React and bundles it into one comprehensive package, including videos, cheatsheets, plus special bonuses.</p>
<p>Gain the insider information <strong>100s of developers</strong> have already used to become a React pro, find their dream job, and take control of their future:</p>
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
