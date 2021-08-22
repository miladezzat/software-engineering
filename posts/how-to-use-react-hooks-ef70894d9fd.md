---
card: "https://cdn-media-1.freecodecamp.org/images/0*ayfiDWDbZ9rrvmd4"
tags: [React]
description: by Sergei Gannochenko
author: "Milad E. Fahmy"
title: "How to use React hooks"
created: "2021-08-15T19:38:46+02:00"
modified: "2021-08-15T19:38:46+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-frontend tag-tech tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">How to use React hooks</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*ayfiDWDbZ9rrvmd4 300w,
https://cdn-media-1.freecodecamp.org/images/0*ayfiDWDbZ9rrvmd4 600w,
https://cdn-media-1.freecodecamp.org/images/0*ayfiDWDbZ9rrvmd4 1000w,
https://cdn-media-1.freecodecamp.org/images/0*ayfiDWDbZ9rrvmd4 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*ayfiDWDbZ9rrvmd4" alt="How to use React hooks">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Sergei Gannochenko</p>
<h1 id="how-to-use-react-hooks">How to use React hooks</h1>
<figcaption>Photo by <a href="https://unsplash.com/@sapegin?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Artem Sapegin</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>React 16.7.0 is finally out. It has no hooks on-board, but sooner or later, React Hooks will be there. So today we will have a talk so we’re ready to use it right away when it is time ?</p>
<p>Sometimes when you write your pure function component, you realize that at some moment you need to have a sort of flag there, which indicates that a modal is open, counter increased or… whatever. And then your second thought is: “oh man, now I need to migrate to React.Component”. Well, with hooks — not anymo-o-ore!</p>
<p>I’ll assume you have Node of the following versions installed: 6.14.0, 8.10.0 or greater than 9.10. If not, you can always use the Node version manager to fix that. Keep in mind though, that we will have to install all global packages in case we switch the Node version.</p>
<p>This article requires that you have at least a basic knowledge of React, including the “<em>component</em>” and “<em>pure function</em>” concepts, “<em>state</em>” and “<em>component lifecycle</em>”. But even if you don’t, no worries, you will catch up during the process, it will be fun!</p>
<h4 id="step-1-the-boilerplate">Step 1: The Boilerplate</h4>
<p>Open your terminal, as we are going to use a super-famous code generator for React applications, called <em>create-react-app</em>:</p><pre><code>npm install create-react-app -gcreate-react-app react-hooks</code></pre>
<p>Now, we are able to see a folder called <code>./react-hooks</code>, so we go there and consider this to be a root of our application.</p>
<p>In order to actually enable hooks, we need to go to a list of versions of React at <a href="https://www.npmjs.com/package/react" rel="noopener">npmjs.com</a>. By the time this article was written, the latest version with hooks enabled was <a href="https://www.npmjs.com/package/react/v/16.7.0-alpha.2" rel="noopener">16.7.0-alpha.2</a>, so let’s install this. We also need to install a pair package called <em>react-dom</em> of exactly the same version.</p>
<p>So,</p><pre><code>npm install react@16.7.0-alpha.2 --savenpm install react-dom@16.7.0-alpha.2 axios --save</code></pre>
<p>Don’t forget to start the application:</p><pre><code>npm start</code></pre>
<h4 id="step-2-usestate-">Step 2: useState()</h4>
<p>Let’s find the <code>./src/App.js</code> file and re-write it like this:</p>
<p>And this is the first kind of hooks we can use: a state hook created with <em>useState(). </em>Basically, <em>useState()</em> accepts the initial value of some value and returns an array, where the first element is a variable with the initial value, and the second one is a function which allows us to change the variable. After we call <em>setCounter()</em>, the component gets re-rendered with an updated value of the counter.</p>
<p>The equivalent code without hooks would be:</p>
<p>But with hooks, the code is way cleaner, and it does not even rely on object-oriented programming and <em>this</em> statements, which sometimes can be really cryptic to use for non-experienced JavaScript developers.</p>
<p>The state could be a complex object, no problem:</p>
<p>But according to the philosophy of hooks, it is better to define two state values instead:</p>
<p>This makes your code really easy to understand.</p>
<h4 id="step-3-useeffect-">Step 3: useEffect()</h4>
<p>In the react world, a <em>side effect</em> is an action that is usually executed on the <em>componentDidMount(), componentDidUpdate()</em> and <em>componentWillUnmount()</em> lifecycle methods of <em>React.Component</em>. But what if we still would like to have a side effect, but with a pure function? Sure thing! Consider the code:</p>
<p>The function inside <em>useEffect()</em> is called on the first render and all consequent renders, which does not really make any difference between this and if we just put the code inside the component function directly.</p>
<p>But, wait. That is not all!</p>
<p>We could do some optimizations by telling <em>useEffect()</em> to run only when certain values have changed. Consider this:</p>
<p>So, <em>useEffect()</em> will memoize <em>[forBatman, forJoker]</em> value and will only re-run the effect if something changed in these arguments.</p>
<p>Let’s consider more use cases.</p>
<h4 id="case-a-execute-code-on-un-mount">Case A: execute code on un-mount</h4>
<p>What if we want to catch a moment when the component gets unmounted? All we have to do is to return a function like this:</p>
<p><em>“SubComponent unmounted</em>” will appear in the console as soon as you click the “<em>One for application</em>” button 5 times.</p>
<h4 id="case-b-run-only-on-mount-and-on-unmount">Case B: run only on mount and on unmount</h4>
<p>What we could also do is to force an effect to run only on-mount and on-unmount, by passing an empty array as a dependency:</p>
<p>It works because <em>[]</em> stays the same during all the time the component is there until it gets unmounted, no matter what.</p>
<h4 id="case-c-load-data-asynchronously-on-mount-and-on-update">Case C: load data asynchronously on mount and on update</h4>
<p>The last use-case I would like to demonstrate is how to do an asynchronous effect with some data load. Just to be clear, I don’t think that having logic for rendering data and logic for loading data in one place is actually a good idea. The main principle of single responsibility tells us there should be a pure dumb rendering logic and pure rich business logic, that is why I strongly encourage you to try <em>Redux</em> + <em>Saga</em>. But I guess this is a nice topic for some other time.</p>
<p>There are two important moments to notice:</p>
<ul>
<li>we can not use <em>useEffect(async () =&gt; </em>{}), asynchronous effects are not supported (yet), but we are still able to use promises there, and</li>
<li>we don’t want this code to run on every render, so we need to define a second argument for <em>useEffect()</em> in the right way. We always ask ourselves: “What needs to be changed in order to re-run the effect?”. The good answer is “<em>characterId”.</em></li>
</ul>
<h4 id="step-4-useref-usememo-">Step 4: useRef() &amp; useMemo()</h4>
<p>If we open the source code of <em>React</em>, we could see some other hooks available. Among them is <em>useRef()</em>. We could use it in combination with <em>useEffect()</em> to do some stuff. Consider the code:</p>
<p>What it does is just sets the value of an input field and then calls <em>focus()</em> as soon as the component is mounted.</p>
<p>Another nice one is <em>useMemo()</em>. It basically allows us to memoize some value during the process of rendering.</p>
<p>Why do so? Well in case we need to calculate something reasonably heavy (heavy when rendering, huh?), or make some remote call, but only when some certain values change, we might make use of <em>useMemo() </em>thingy<em>.</em> It is still not as powerful as traditional ways of memoization, as it can only be used when rendering, but still…</p>
<h4 id="step-5-under-the-hood">Step 5: Under the hood</h4>
<p>You may wonder, how does this functionality even work? I mean, components are just pure functions, how do variables preserve their scalar values between function calls? Well, for example, <em>useState()</em> returns an array, from which we use the first argument as a scalar. But this array can be memoized inside <em>React</em>, so next time the rendering engine is here, it already knows which values to put into those scalars.</p>
<h4 id="step-6-don-t-s">Step 6: Don't-s</h4>
<ul>
<li>First of all, hooks are still in alpha stage, the API may be changed in future, so use it in production on your own risk.</li>
<li>You can not use hooks outside a component function, it is simply how they work. But, you can make <a href="https://reactjs.org/docs/hooks-custom.html" rel="noopener">a composition of hooks</a>.</li>
<li>React relies on an <strong>amount</strong> and <strong>order</strong> of how hooks appear in the component function. So <strong>don’t even think</strong> of wrapping those calls with conditional logic of some sort. Instead, you may put your <em>if-s</em> inside a hook body.</li>
<li>At the present moment, hooks do not work for server-side rendering. I hope this to be fixed in the final release.</li>
</ul>
<h4 id="conclusion">Conclusion</h4>
<p>Even though hooks are not available officially, they are definitely going to make our life easier, and the code way cleaner. And it is always important to have understandable code, especially when working with React.</p>
<p>Thanks for reading! If the article was helpful for you, don’t hesitate to share it on social media! :)</p>
<h4 id="extras">Extras</h4>
<ul>
<li>here is <a href="https://github.com/awesome1888/poc_react-hooks" rel="noopener">the Proof-of-concept repository</a> made for the article</li>
<li>consider reading an <a href="https://reactjs.org/docs/hooks-reference.html" rel="noopener">official Hooks reference</a> by Facebook</li>
</ul>
<p>Happy Reacting!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
