---
card: "/images/default.jpg"
tags: [React]
description: In this article, we'll see some of the common mistakes that R
author: "Milad E. Fahmy"
title: "Common Mistakes React Developers Make – And How to Fix Them"
created: "2021-08-15T19:26:27+02:00"
modified: "2021-08-15T19:26:27+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">Common Mistakes React Developers Make – And How to Fix Them</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/05/common_mistakes.jpg 300w,
/news/content/images/size/w600/2021/05/common_mistakes.jpg 600w,
/news/content/images/size/w1000/2021/05/common_mistakes.jpg 1000w,
/news/content/images/size/w2000/2021/05/common_mistakes.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/05/common_mistakes.jpg" alt="Common Mistakes React Developers Make – And How to Fix Them">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this article, we'll see some of the common mistakes that React developers make, and how you can avoid them.</p>
<p>So let's get started.</p>
<h2 id="don-t-forget-that-every-route-change-mounts-and-unmounts-a-component">Don't Forget that Every Route Change Mounts and Unmounts a Component</h2>
<p>Whenever you're using routing in a React application, you declare routes inside the <code>Switch</code> component. This means that only one component with the matching route is displayed at a time.</p>
<p>Therefore, whenever you go from one route to another, the previously displayed component is unmounted and the component with the new matching route is mounted.</p>
<p>If you need to persist some data across a route change, you need to declare it in the component which encapsulates the routes. It could be the <code>App</code> component in the following Code Sandbox, or some other way of persisting data like using <a href="https://javascript.plainenglish.io/everything-you-need-to-know-about-html5-local-storage-and-session-storage-479c63415c0a?source=friends_link&amp;sk=f429aa5008683a3b0359db43f976efb3">local storage or session storage</a></p>
<p>As you can see in the above Code Sandbox, whenever we change the route by clicking on the links, the corresponding <code>console.log</code> gets displayed on the console. This indicates that the previous component is unmounted and a new component is mounted.</p>
<h2 id="don-t-use-the-wrong-setstate-syntax">Don't Use the Wrong setState Syntax</h2>
<p>Whenever you declare some state inside a class-based component, it's always an object like this:</p><pre><code class="language-js">this.state = {
counter: 0
}
</code></pre>
<p>So whenever you use the updater form of the setState syntax to update the state, it looks like this:</p><pre><code class="language-js">this.setState((prevState) =&gt; {
return {
counter: prevState.counter + 1
};
});
</code></pre>
<p>Since state is an object, <code>prevState</code> is also an object – so you access the <code>counter</code> using <code>prevState.counter</code>.</p>
<p>But when you're using functional components with React Hooks, the state can be an object or a non-object value as shown below:</p><pre><code class="language-js">const [counter, setCounter] = useState(0);
</code></pre>
<p>Here, the value of <code>counter</code> is not an object but it's a number. So to update the state using updater syntax, you'll write the code like this:</p><pre><code class="language-js">setCounter((prevCounter) =&gt; prevCounter + 1);
</code></pre>
<p>Here, the <code>prevCounter</code> is a number. So you don't use <code>prevCounter.counter</code> – just <code>prevCounter</code>. Or you can simplify it as shown below:</p><pre><code class="language-js">setCounter((counter) =&gt; counter + 1);
</code></pre>
<blockquote>Check out <a href="/news/what-is-state-in-react-explained-with-examples/">my article here</a> for a complete introduction to React state.</blockquote>
<h2 id="don-t-call-hooks-from-class-components">Don't Call Hooks from Class Components</h2>
<p>Starting with version 16.8.0, React introduced Hooks. They allow you to write better React code and make use of state and component life cycle methods inside functional components.</p>
<blockquote>Check out <a href="https://levelup.gitconnected.com/an-introduction-to-react-hooks-50281fd961fe?source=friends_link&amp;sk=89baff89ec8bc637e7c13b7554904e54">my article here</a> for an introduction to React hooks.</blockquote>
<p>To make coding easier, React provides many hooks like:</p>
<ul>
<li>The <code>useParams</code> hook to access URL parameters when using React Routing</li>
<li>The <code>useHistory</code> hook to get access to history API inside any component</li>
<li>The <code>useRef</code> hook to get access to the DOM element</li>
</ul>
<p>and many other hooks.</p>
<p>But all of these hooks (which usually start with the <code>use</code> keyword) work only inside functional components.</p>
<p>If you have a class-based component then you can't use these hooks. You need to refactor your code to convert it to functional components. If you don't, you might get an error like the one in the below screenshot:</p>
<h2 id="don-t-forget-to-add-a-key-prop-when-using-the-array-map-method">Don't Forget to Add a Key Prop When Using the Array <code>map</code> Method</h2>
<p>Take a look at <a href="https://codesandbox.io/s/quirky-shockley-bjd6z?file=/src/index.js">this Code Sandbox Demo</a>.</p>
<p>Here, to display a list of items, you can use the following code:</p><pre><code class="language-js">const Items = ({ items }) =&gt; (
&lt;ol&gt;
{items.map((item) =&gt; (
&lt;Item item={item} /&gt;
))}
&lt;/ol&gt;
);
</code></pre>
<p>In React, you'll usually use the array <code>map</code> method to display a list of items stored in an array.</p>
<p>But as soon as you add an item to the list in the above Code Sandbox, you will see a missing key warning displayed in the console.</p>
<p>This is because every time you're using the array <code>map</code> method to loop over the items, you need to provide a unique <code>key</code> prop. React uses this to identify which elements on the screen need to be re-rendered, so adding the <code>key</code> prop helps you avoids unnecessary re-rendering in your app.</p>
<p>Here's an updated <a href="https://codesandbox.io/s/boring-greider-olko7?file=/src/index.js">Code Sandbox Demo</a> with the added <code>key</code> prop.</p>
<p>Here, I've provided a unique <code>key</code> prop to each element we're looping over like this:</p><pre><code class="language-js">&lt;Item item={item} key={index} /&gt;
</code></pre>
<p>Now if you try to add some items, you won't get any warnings in the console.</p>
<blockquote>Note: In the above code, as the elements not re-ordered or removed, using <code>index</code> as <code>key</code> works fine. But if you're removing or changing the displayed elements' order, then you need to provide a unique key instead of using <code>index</code>.</blockquote>
<h2 id="don-t-use-inline-functions-the-wrong-way">Don't Use Inline Functions the Wrong Way</h2>
<p>Take a look at <a href="https://codesandbox.io/s/stupefied-breeze-66nyr?file=/src/index.js">this Code Sandbox Demo</a>.</p>
<p>Here, I've added some items to the state:</p><pre><code class="language-js">const [items, setItems] = useState(["one", "two"]);
</code></pre>
<p>and we're looping over them to display on the screen:</p><pre><code class="language-jsx">{items.map((item, index) =&gt; (
&lt;li key={index}&gt;
{item} &lt;button onClick={handleRemoveItem(item)}&gt;Remove&lt;/button&gt;
&lt;/li&gt;
))}
</code></pre>
<p>If you check the application, you will see that no items are displayed on the screen. Adding new items also doesn't work as you can see below:</p>
<p>This is because of the <code>onClick</code> &nbsp;handler for the button:</p><pre><code class="language-jsx">&lt;button onClick={handleRemoveItem(item)}&gt;Remove&lt;/button&gt;
</code></pre>
<p>Here, we're calling the <code>handleRemoveItem</code> method when the user clicks on the button – but the way we're calling the method is wrong.</p>
<p>So if you don't need to pass any parameters, you use the following syntax:</p><pre><code class="language-jsx">&lt;button onClick={handleRemoveItem}&gt;Remove&lt;/button&gt;
</code></pre>
<p>But later if you decide to pass some parameter to the function, you need to call the handler inside the inline function like this:</p><pre><code class="language-jsx">&lt;button onClick={() =&gt; handleRemoveItem(item)}&gt;Remove&lt;/button&gt;
</code></pre>
<p>Most React developers forget to add an inline function and then it takes hours of debugging to understand why something does not work.</p>
<p>Here's an updated working <a href="https://codesandbox.io/s/polished-moon-02iug?file=/src/index.js">Code Sandbox Demo</a>.</p>
<h3 id="thanks-for-reading-"><strong>Thanks for reading!</strong></h3>
<p>Starting with ES6, there are many useful additions to JavaScript like:</p>
<ul>
<li>ES6 Destructuring</li>
<li>Import and Export Syntax</li>
<li>Arrow functions</li>
<li>Promises</li>
<li>Async/await</li>
<li>Optional chaining operator and a lot more.</li>
</ul>
<p><strong><strong>You can learn everything about all the ES6+ features in detail in my <a href="https://modernjavascript.yogeshchavan.dev/">Mastering Modern JavaScript</a> book.</strong></strong></p>
<blockquote>Check out free preview contents of the book <a href="/news/learn-modern-javascript/">here</a>.</blockquote>
<p>Also, you can check out my <strong><strong>free</strong></strong> <a href="https://yogeshchavan1.podia.com/react-router-introduction">Introduction to React Router</a> course to learn React Router from scratch.</p>
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
