---
card: "https://cdn-media-1.freecodecamp.org/images/1*UNln2JsoPZEVzgGPJhs98w.jpeg"
tags: [React]
description: "Updated: With React 16.8, React Hooks are available in a stab"
author: "Milad E. Fahmy"
title: "React hooks: a new way of working with React state"
created: "2021-08-15T19:40:33+02:00"
modified: "2021-08-15T19:40:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-front-end-development tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">React hooks: a new way of working with React state</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*UNln2JsoPZEVzgGPJhs98w.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*UNln2JsoPZEVzgGPJhs98w.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*UNln2JsoPZEVzgGPJhs98w.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*UNln2JsoPZEVzgGPJhs98w.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*UNln2JsoPZEVzgGPJhs98w.jpeg" alt="React hooks: a new way of working with React state">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><strong>Updated: With React 16.8, <a href="https://reactjs.org/docs/hooks-intro.html" rel="noopener">React Hooks</a> are available in a stable release!</strong></p>
<p>Outdated: Hooks are still an experimental proposal. They’re currently in React v16.7.0-alpha</p>
<p><strong>TL;DR </strong><br>In this article we will attempt to understand what are <a href="https://reactjs.org/docs/hooks-intro.html" rel="noopener">React Hooks</a> and how to use them for our good. We will implement different examples and see the differences (gains) Hooks bring to us. If you want to skip the reading, <a href="https://mihailgaberov.github.io/react-hooks/" rel="noopener">here</a> you can find shorter version in a few slides. And <a href="https://github.com/mihailgaberov/react-hooks" rel="noopener">here</a> ? you may get the examples and try them yourself.</p>
<h3 id="what-are-react-hooks">What are <em>React Hooks</em>?</h3>
<blockquote>Simple functions for hooking into the React state and lifecycle features from function components.</blockquote>
<p>What this means is that hooks allow us to easily manipulate our function component’s state without needing to convert them into class components. This saves us from having to deal with all the boilerplate code involved.</p>
<p>Hooks don’t work inside classes — they let you use React without classes. And also, by using them, we can totally avoid using lifecycle methods, such as <em>componentDidMount</em>, <em>componentDidUpdate</em>, etc. Instead, we will use built-in hooks like <em>useEffect</em>, <em>useMutationEffect</em> or <em>useLayoutEffect</em>. We will see how in a moment.</p>
<p>Hooks are JavaScript functions, but they impose two additional <a href="https://reactjs.org/docs/hooks-rules.html" rel="noopener">rules</a>:</p>
<p>❗️ Only call Hooks <strong>at the top level</strong>. Don’t call Hooks inside loops, conditions, or nested functions.</p>
<p>❗️ Only call Hooks <strong>from React function components</strong>. Don’t call Hooks from regular JavaScript functions. There is just one other valid place to call Hooks — your own custom Hooks. We’ll see them later in this article.</p>
<h3 id="why-are-they-good-thing">Why are they <em>good thing?</em></h3>
<p>? R<strong>eusing logic</strong><br>Up until now, if we wanted to reuse some logic in React, we had two options: h<a href="https://tylermcginnis.com/react-higher-order-components/" rel="noopener">igher-order components </a>or r<a href="https://www.robinwieruch.de/react-render-props-pattern/" rel="noopener">ender props.</a> With React Hooks we have an alternative, that comes with a much easier to understand (in my personal opinion!) syntax and logic flow.</p>
<p>? G<strong>iant components</strong><br>By avoiding the boilerplate code we need to write when using classes or by removing the need for multiple nesting levels (which could come when using render props), React Hooks solve the issue of having giants components (that are really hard to maintain and debug).</p>
<p>? C<strong>onfusing classes</strong><br>Again, allowing us NOT to use classes or class components in our applications makes the developers’s (especially beginner’s) life easier. This is because we don’t have to use the ‘this’ keyword and we don’t need to have the understanding of how bindings and scopes work in React (and JavaScript).</p>
<p>This is NOT to say that we (the developers) don’t have to learn these concepts — on the contrary we must be aware of them. But in this case, when using React hooks, our worries are one fewer ?.</p>
<blockquote><strong><em>So, after pointing out what issues the hooks solve, when would we use them?</em></strong></blockquote>
<blockquote><em>If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component. We’re going to do that in the next examples.</em></blockquote>
<h3 id="how-to-use-react-hooks">How to use <em>React Hooks</em>?</h3>
<p>React Hooks come to us as <a href="https://reactjs.org/docs/hooks-overview.html" rel="noopener">built-in ones</a> and <a href="https://reactjs.org/docs/hooks-custom.html" rel="noopener">custom ones</a>. The later are the ones we can use for sharing logic across multiple React components.</p>
<p>As we’ve already learned, hooks are simple JavaScript functions, which means we will be writing just that, but in the context of React <em>function</em> components. Previously these components were called <em>stateless</em>, a term that is not valid anymore, as <em>hooks</em> give us a way to use the state in such components ?.</p>
<blockquote><em>An important thing to remember is that we can use both built-in and custom hooks multiple times in our components. We just have to follow the <a href="https://reactjs.org/docs/hooks-rules.html" rel="noopener">rules of hooks</a>.</em></blockquote>
<p>The following examples try to illustrate that.</p>
<h4 id="basic-built-in-hooks">Basic built-in hooks</h4>
<ul>
<li><a href="https://github.com/mihailgaberov/react-hooks/blob/master/src/components/Counter/CounterHooked.js" rel="noopener">useState</a> hook — returns a stateful value and a function to update it.</li>
<li><a href="https://reactjs.org/docs/hooks-effect.html" rel="noopener">useEffect</a> hook — accepts a function that contains imperative, possibly effectful code (for example fetching data or subscribing to a service). This hook could return a function that is being executed every time before the effect runs and when the component is unmounted — to clean up from the last run.</li>
<li><a href="https://github.com/mihailgaberov/react-hooks/blob/master/src/components/Counter/CounterHooked.js" rel="noopener">useContext</a> hook — accepts a <a href="https://reactjs.org/docs/context.html" rel="noopener">context</a> object and returns the current <a href="https://github.com/mihailgaberov/react-hooks/blob/master/src/ColorContext.js" rel="noopener">context</a> value, as given by the nearest context provider for the given context.</li>
</ul>
<h4 id="custom-hooks">Custom hooks</h4>
<p><strong>A custom Hook is a JavaScript function whose name starts with “<code>use</code>” and that may call other Hooks.</strong> For example, <a href="https://github.com/mihailgaberov/react-hooks/blob/master/src/useFriendName.jshttps://github.com/mihailgaberov/react-hooks/blob/master/src/useFriendName.js" rel="noopener">useFriendName</a> below is our first custom Hook:</p><pre><code class="language-js">export default function useFriendName(friendName) {
const [isPresent, setIsPresent] = useState(false);
useEffect(() =&gt; {
const data = MockedApi.fetchData();
data.then((res) =&gt; {
res.forEach((e) =&gt; {
if (e.name === friendName) {
setIsPresent(true);
}
});
});
});
return isPresent;
}</code></pre>
<p>Building your own custom hooks lets you extract component logic into reusable functions. This could be your application’s shared functionality that you can import everywhere you need it. And also, we must not forget, that our custom hooks are the other allowed (<a href="https://reactjs.org/docs/hooks-rules.html#only-call-hooks-from-react-functions" rel="noopener">see the rules</a>) places to call built-in hooks.</p>
<h3 id="conclusion">Conclusion</h3>
<p>React Hooks are not really a new feature that popped out just now. They are another (better ❓) way of doing React components that need to have <em>state </em>and/or<em> lifecycle </em>methods. Actually, they use the same internal logic that is being used currently by the class components. To use them or not — this is the question to which the future will give the best answer.</p>
<blockquote><em>My personal opinion? That this is going to be the future of any React development that involves state and lifecycle usage.</em></blockquote>
<p>Let’s see how the community will react to the proposal ? and hopefully we will see them polished and fully functioning in the next React releases. ?</p>
<p>? Thanks for reading! ?</p>
<h3 id="references">References</h3>
<p>Here you may find the links to the resources I found useful when writing this article:</p>
<ul>
<li><a href="https://github.com/mihailgaberov/react-hooks" rel="noopener">https://github.com/mihailgaberov/react-hooks</a>/ — link to GitHub repo with the examples and presentation.</li>
<li><a href="https://mihailgaberov.github.io/react-hooks/#0" rel="noopener">https://mihailgaberov.github.io/react-hooks/</a> — link to presentation slides.</li>
<li><a href="https://reactjs.org/docs/hooks-intro.html" rel="noopener">https://reactjs.org/docs/hooks-intro.html</a> — official ReactJS blog.</li>
<li><a href="https://youtu.be/dpw9EHDh2bM" rel="noopener">https://youtu.be/dpw9EHDh2bM</a> — Introduction to Hooks, React Conf 2018</li>
<li><a href="https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889" rel="noopener">https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889</a> — An explanatory article by Dan Abramov.</li>
<li><a href="https://daveceddia.com/useeffect-hook-examples/" rel="noopener">https://daveceddia.com/useeffect-hook-examples/</a> — A very useful article explaining different use cases of useEffect hook.</li>
<li><a href="https://ppxnl191zx.codesandbox.io/" rel="noopener">https://ppxnl191zx.codesandbox.io/</a> — An example of a React animation library experimenting with Hooks.</li>
<li><a href="https://dev.to/oieduardorabelo/react-hooks-how-to-create-and-update-contextprovider-1f68" rel="noopener">https://dev.to/oieduardorabelo/react-hooks-how-to-create-and-update-contextprovider-1f68</a> — A nice and short article showing how to create and update context provider with React Hooks.</li>
</ul>
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
