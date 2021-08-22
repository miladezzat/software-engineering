---
card: "/images/default.jpg"
tags: [React]
description: "Hey everyone! In this article, I m going to show you what s n"
author: "Milad E. Fahmy"
title: "What s New in React 18 Alpha? Concurrency, Batching, the Transition API and More"
created: "2021-08-16T10:03:27+02:00"
modified: "2021-08-16T10:03:27+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">What's New in React 18 Alpha? Concurrency, Batching, the Transition API and More</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/07/SUSPENSE-BATCHING-TRANSITION.png 300w,
/news/content/images/size/w600/2021/07/SUSPENSE-BATCHING-TRANSITION.png 600w,
/news/content/images/size/w1000/2021/07/SUSPENSE-BATCHING-TRANSITION.png 1000w,
/news/content/images/size/w2000/2021/07/SUSPENSE-BATCHING-TRANSITION.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/07/SUSPENSE-BATCHING-TRANSITION.png" alt="What's New in React 18 Alpha? Concurrency, Batching, the Transition API and More">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
setInputValue(input)
// Update the searched value and search results
setSearchQuery(input);
</code></pre><p><code>setInputValue</code> is responsible for updating the input field, while <code>setSearchQuery</code> is responsible for performing search based on the present input value. Now, if these function calls happened synchronously every time the user started typing, either of 2 things would happen:</p><ol><li>Several search calls would be made, which would delay or slow down other network calls.</li><li>Or, more likely, the search operation would turn out to be very heavy and would lock up the screen on each keystroke.</li></ol><p>One way to solve this problem would've been using debounce, which would space out the network calls or search operations. But, the problem with debounce is that we have to play with and optimize the debounce timer quite frequently.</p><p>So in this case, we can wrap setSearchQuery in <code>startTransition</code>, allowing it to handle it as non-urgent and to be delayed as long as the user is typing.</p><pre><code class="language-jsx">import { startTransition } from 'react';
// Urgent: Show what was typed
setInputValue(input);
// Mark any state updates inside as transitions
startTransition(() =&gt; {
// Transition: Show the results
setSearchQuery(input);
});
</code></pre><p>Transitions let you keep most interactions snappy even if they lead to significant UI changes. They also let you avoid wasting time rendering content that's no longer relevant.</p><p>React also provides a new hook called <code>useTransition</code> , so you can show a loader while the transition is pending. This helps in indicating to the user that the app is processing their input and will display the results shortly.</p><pre><code class="language-jsx">import { useTransition } from'react';
const [isPending, startTransition] = useTransition();
const callback = () =&gt; {
// Urgent: Show what was typed
setInputValue(input);
// Mark any state updates inside as transitions
startTransition(() =&gt; {
// Transition: Show the results
setSearchQuery(input);
});
}
{isPending &amp;&amp; &lt;Spinner /&gt;}
</code></pre><p>As a rule of thumb, you can use the transition API wherever network calls or render-blocking processes are present.</p><p>You can read more about the API in this article, <a href="https://github.com/reactwg/react-18/discussions/41">An explanation of startTransition</a> by Ricky from the Core React team.</p><h3 id="demos-of-the-transition-api">Demos of the Transition API</h3><p>Use <code>useTransition</code> and Suspense in an app: <a href="https://codesandbox.io/s/sad-banach-tcnim?file=/src/App.js:664-676">https://codesandbox.io/s/sad-banach-tcnim?file=/src/App.js:664-676</a></p><p>Demo of <code>startTransition</code> with a complex rendering algorithm: <a href="https://react-fractals-git-react-18-swizec.vercel.app/">https://react-fractals-git-react-18-swizec.vercel.app/</a></p><h2 id="batching-in-react">Batching in React</h2><p>Next up is batching. Batching is something that the developer generally doesn't have to care about, but it's good to know what's happening behind the scenes. </p><p>Whenever you are using setState to change a variable inside any function, instead of making a render at each setState, React instead collects all setStates and then executes them together. This is known as batching.</p><pre><code class="language-jsx">function App() {
const [count, setCount] = useState(0);
const [flag, setFlag] = useState(false);
function handleClick() {
setCount(c =&gt; c + 1); // Does not re-render yet
setFlag(f =&gt; !f); // Does not re-render yet
// React will only re-render once at the end (that's batching!)
}
return (
&lt;div&gt;
&lt;button onClick={handleClick}&gt;Next&lt;/button&gt;
&lt;h1 style={{ color: flag ? "blue" : "black" }}&gt;{count}&lt;/h1&gt;
&lt;/div&gt;
);
}
</code></pre><p>This is great for performance because it avoids unnecessary re-renders. It also prevents your component from rendering “half-finished” states where only one state variable was updated, which may cause UI glitches and bugs within your code.</p><p>However, React didn't used to be consistent about when it performed batching. This was because React used to only batch updates <em>during</em> browser events (like a click), but here we’re updating the state <em>after</em> the event has already been handled (in a fetch callback):</p><pre><code class="language-jsx">function App() {
const [count, setCount] = useState(0);
const [flag, setFlag] = useState(false);
function handleClick() {
fetchSomething().then(() =&gt; {
// React 17 and earlier does NOT batch these because
// they run *after* the event in a callback, not *during* it
setCount(c =&gt; c + 1); // Causes a re-render
setFlag(f =&gt; !f); // Causes a re-render
});
}
return (
&lt;div&gt;
&lt;button onClick={handleClick}&gt;Next&lt;/button&gt;
&lt;h1 style={{ color: flag ? "blue" : "black" }}&gt;{count}&lt;/h1&gt;
&lt;/div&gt;
);
}
</code></pre><p>Starting in React 18 with <code>[createRoot](&lt;https://github.com/reactwg/react-18/discussions/5&gt;)</code>, all state updates will be automatically batched, no matter where they originate from. </p><p>This means that updates inside of timeouts, promises, native event handlers or any other event will batch the same way as updates inside of React events. This will result in less rendering work by React, and therefore better performance in applications.</p><p>You can read more about batching here in <a href="https://github.com/reactwg/react-18/discussions/21">An explanation of Batching</a> by Dan Abramov.</p><h3 id="demos-of-batching">Demos of batching</h3><p>Before React 18: <a href="https://codesandbox.io/s/hopeful-fire-ge4t2?file=/src/App.tsx">https://codesandbox.io/s/hopeful-fire-ge4t2?file=/src/App.tsx</a></p><p>After React 18: <a href="https://codesandbox.io/s/morning-sun-lgz88?file=/src/index.js">https://codesandbox.io/s/morning-sun-lgz88?file=/src/index.js</a></p><h2 id="the-suspense-api">The Suspense API</h2><p>React 18 includes a lot of changes to improve React performance in a <a href="/news/server-side-rendering-your-react-app-in-three-simple-steps-7a82b95db82e/">Server-Side Rendered</a> context. Server-side rendering is a way of rendering the JS data to HTML on the server to save computation on the frontend. This results in a faster initial page load in most cases.</p><p>React performs Server Side Rendering in 4 sequential steps:</p><ul><li>On the server, data is fetched for each component.</li><li>On the server, the entire app is rendered to HTML and sent to the client.</li><li>On the client, the JavaScript code for the entire app is fetched.</li><li>On the client, the JavaScript connects React to the server-generated HTML, which is known as Hydration.</li></ul><p>React 18 introduces the <code>Suspense</code> API, which allows you to break down your app into <strong>smaller independent units</strong>, which will go through these steps independently and won’t block the rest of the app. As a result, your app’s users will see the content sooner and be able to start interacting with it much faster.</p><h3 id="how-does-the-suspense-api-work">How does the Suspense API work?</h3><h4 id="streaming-html">Streaming HTML</h4><p>With today’s SSR, rendering HTML and hydration are “all or nothing”. The client has to fetch and hydrate all of the app at once. </p><p>But React 18 gives you a new possibility. You can wrap a part of the page with <code>&lt;Suspense&gt;</code>.</p><pre><code class="language-jsx">&lt;Suspense fallback={&lt;Spinner /&gt;}&gt;
{children}
&lt;/Suspense&gt;
</code></pre><p>By wrapping the component in <code>&lt;Suspense&gt;</code>, we tell React that it doesn’t need to wait for comments to start streaming the HTML for the rest of the page. Instead, React will send the placeholder (a spinner) instead.</p><p>When the data for the comments is ready on the server, React will send additional HTML into the same stream, as well as a minimal inline <code>&lt;script&gt;</code> tag to put that HTML in the “right place”.</p><h4 id="selective-hydration">Selective Hydration</h4><p>Before React 18, hydration couldn't start if the complete JavaScript code for the app hadn't loaded in. For larger apps, this process can take a while.</p><p>But in React 18, <code>&lt;Suspense&gt;</code> lets you hydrate the app before the child components have loaded in.</p><p>By wrapping components in <code>&lt;Suspense&gt;</code>, you can tell React that they shouldn’t block the rest of the page from streaming—and even hydration. This means that you no longer have to wait for all the code to load in order to start hydrating. React can hydrate parts as they’re being loaded.</p><p>These 2 features of <code>Suspense</code> and several other changes introduced in React 18 speed up initial page loads tremendously.</p><p>You can read more in this article <a href="https://github.com/reactwg/react-18/discussions/37">An explanation of Suspense SSR</a> and related changes by Dan Abramov</p><h3 id="demo-of-suspense">Demo of Suspense</h3><p> <a href="https://codesandbox.io/s/recursing-mclaren-1ireo?file=/src/index.js:458-466">https://codesandbox.io/s/recursing-mclaren-1ireo?file=/src/index.js:458-466</a></p><h2 id="summary">Summary</h2><p>So to summarize, the features that React 18 brings are:</p><ul><li>Concurrency control with the Transition API, </li><li>Automatic Batching of function calls and events to improve in-app performance, and </li><li>Much faster page loads for SSR with Suspense. </li></ul><p>Although not a very large departure from the previous version of React, all of these changes are making React a trend-setter for all the frameworks out there.</p><p>Thanks for reading this! You can check out my previous posts and tutorials on React here on freeCodeCamp. You can also follow me on Twitter <a href="https://twitter.com/thewritingdev">@thewritingdev</a>, where I post daily content on React and web development.</p>
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
