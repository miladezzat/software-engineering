---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca0d5740569d1a4ca4b14.jpg"
tags: [JavaScript]
description: This article goes through my personal journey of discovery an
author: "Milad E. Fahmy"
title: "Why Naked Promises Are Not Safe For Work - and What to Do Instead"
created: "2021-08-15T19:33:01+02:00"
modified: "2021-08-15T19:33:01+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-asynchronous-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Why Naked Promises Are Not Safe For Work - and What to Do Instead</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca0d5740569d1a4ca4b14.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca0d5740569d1a4ca4b14.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca0d5740569d1a4ca4b14.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca0d5740569d1a4ca4b14.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca0d5740569d1a4ca4b14.jpg" alt="Why Naked Promises Are Not Safe For Work - and What to Do Instead">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>This article goes through my personal journey of discovery and struggle adopting the conventional wisdom as it pertains to asynchronous work on the frontend. With any luck, you will come away with at least a deeper appreciation of 3 tricky cases to handle when crossing the synchronous to asynchronous boundary. And we'll possibly even conclude that you will never want to manually account for these edge cases yourself ever again.</p>
<p>My examples are in React, but I believe they are universal principles that have parallels in all frontend apps.</p>
<h2 id="whatisanakedpromiseanyway">What is a "Naked Promise" anyway?</h2>
<p>To do anything interesting in our app, we will probably use an asynchronous API at some point. In JavaScript, Promises have overtaken callbacks to be the asynchronous API of choice (especially as every platform has come to accept <code>async</code>/<code>await</code>). They have even become part of the "Web platform" - here's a typical example using the Promise-based <code>fetch</code> API in all modern browsers:</p>
<pre><code class="language-js">function App() {
const [msg, setMsg] = React.useState('click the button')
const handler = () =&gt;
fetch('https://myapi.com/')
.then((x) =&gt; x.json())
.then(({ msg }) =&gt; setMsg(msg))
return (
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
&lt;p&gt;message: {msg}&lt;/p&gt;
&lt;button onClick={handler}&gt; click meeee&lt;/button&gt;
&lt;/header&gt;
&lt;/div&gt;
)
}
</code></pre>
<p>Here our button's <code>handler</code> function returns a "naked" Promise - it isn't wrapped by anything, it is just invoked outright so it can do fetch data and set state. This is an extremely common pattern taught in all introductions. This is fine for demo apps, however in the real world users often run into many edge cases this pattern conveniently forgets to account for.</p>
<h2 id="promisesfailtheerrorstate">Promises Fail: The Error State</h2>
<p>Promises fail. It is too easy to only code for the "happy path" where your network is always working and your API always returns a successful result. Most devs are all too familiar with the uncaught exceptions that arise only in production that make your app seem like it didn't work or is stuck in some kind of loading state. There are <a href="https://github.com/xjamundx/eslint-plugin-promise/blob/HEAD/docs/rules/catch-or-return.md">ESlint rules to ensure you write <code>.catch</code></a> handlers on your promises.</p>
<p>This only helps for promises you chain with a <code>.then</code>, but doesn't help when passing a promise to a library you don't control, or when you just call the promise outright.</p>
<p>Either way, ultimately the responsibility for displaying the error state will fall on you, and will look something like this:</p>
<pre><code class="language-js">function App() {
const [msg, setMsg] = React.useState('click the button')
const [err, setErr] = React.useState(null)
const handler = () =&gt; {
setErr(null)
fetch('https://myapi.com/')
.then((x) =&gt; x.json())
.then(({ msg }) =&gt; setMsg(msg))
.catch((err) =&gt; setErr(err))
}
return (
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
&lt;p&gt;message: {msg}&lt;/p&gt;
{err &amp;&amp; &lt;pre&gt;{err}&lt;/pre&gt;}
&lt;button onClick={handler}&gt;click meeee&lt;/button&gt;
&lt;/header&gt;
&lt;/div&gt;
)
}
</code></pre>
<p>We now have two states to handle for every asynchronous operation in our app!</p>
<h2 id="promisesinprogresstheloadingstate">Promises in Progress: The Loading State</h2>
<p>When pinging your APIs on your local machine (<a href="https://alligator.io/nodejs/solve-cors-once-and-for-all-netlify-dev/">for example, with Netlify Dev</a>), it is pretty common to get rapid responses. However, this ignores the fact that API latency may be a good deal slower in real world, especially mobile, environments. When the button is clicked, the promise fires, however there is no visual feedback at all in the UI to tell the user that the click has been registered and the data is inflight. So users often click again, in case they misclicked, and generate yet more API requests. This is a terrible user experience and there is no reason for writing click handlers this way except that it is the default.</p>
<p>You can make your app more responsive (and less frustrating) by offering some form of loading state:</p>
<pre><code class="language-js">function App() {
const [msg, setMsg] = React.useState('click the button')
const [loading, setLoading] = React.useState(false)
const handler = () =&gt; {
setLoading(true)
fetch('https://myapi.com/')
.then((x) =&gt; x.json())
.then(({ msg }) =&gt; setMsg(msg))
.finally(() =&gt; setLoading(false))
}
return (
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
&lt;p&gt;message: {msg}&lt;/p&gt;
{loading &amp;&amp; &lt;pre&gt;loading...&lt;/pre&gt;}
&lt;button onClick={handler} disabled={loading}&gt;
click meeee
&lt;/button&gt;
&lt;/header&gt;
&lt;/div&gt;
)
}
</code></pre>
<p>We now have <strong>three</strong> states to handle for every asynchronous operation in our app: result, loading, and error state! Oy vey.</p>
<h2 id="promisesaredumbthecomponentsstate">Promises are dumb: The Component's State</h2>
<p>Once promises fire off, they cannot be canceled. This was a <a href="https://medium.com/@benlesh/promise-cancellation-is-dead-long-live-promise-cancellation-c6601f1f5082">controversial decision</a> at the time, and while platform specific workarounds like <a href="https://developers.google.com/web/updates/2017/09/abortable-fetch">abortable fetch</a> exist, it's clear we will never get cancelable promises in the language itself. This causes issues when we fire off promises and then no longer need them, for example when the component it is supposed to update has unmounted (because the user has navigated somewhere else).</p>
<p>In React, this causes a development-only error like:</p>
<pre><code class="language-bash">Warning: Can only update a mounted or mounting component. This usually means you called setState, replaceState, or forceUpdate on an unmounted component. This is a no-op.
# or
Warning: Can’t call setState (or forceUpdate) on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
</code></pre>
<p>You can avoid this memory leak by tracking the mount state of a component:</p>
<pre><code class="language-js">function App() {
const [msg, setMsg] = React.useState('click the button')
const isMounted = React.useRef(true)
const handler = () =&gt; {
setLoading(true)
fetch('https://myapi.com/')
.then((x) =&gt; x.json())
.then(({ msg }) =&gt; {
if (isMounted.current) {
setMsg(msg)
}
})
}
React.useEffect(() =&gt; {
return () =&gt; (isMounted.current = false)
})
return (
&lt;div className="App"&gt;
&lt;header className="App-header"&gt;
&lt;p&gt;message: {msg}&lt;/p&gt;
&lt;button onClick={handler}&gt;click meeee&lt;/button&gt;
&lt;/header&gt;
&lt;/div&gt;
)
}
</code></pre>
<p>We've used a Ref here, as <a href="https://medium.com/@pshrmn/react-hook-gotchas-e6ca52f49328">it is closer to the mental model of an instance variable</a>, but you won't notice too much of a difference if you <code>useState</code> instead.</p>
<p>Longtime React users will also remember that <a href="https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html">isMounted is an antipattern</a>, however tracking <code>_isMounted</code> as an instance variable is still recommended if you don't use cancellable promises. (Which is ALL. THE. TIME.)</p>
<p>For those keeping count, we're now at <strong>four</strong> states needing to be tracked for a single async operation in a component.</p>
<h2 id="solutionjustwrapit">Solution: Just Wrap It</h2>
<p>The problem should be pretty clear by now:</p>
<p>In a simple demo, "naked" promises work fine.</p>
<p>In a production situation, you're going to want to implement all these error handling, loading, and mounting tracker states. Again. And again. And again.</p>
<p>Sounds like a good place to use a library, doesn't it?</p>
<p>Fortunately, quite a few exist.</p>
<p><code>react-async</code>'s <code>useAsync</code> hook lets you pass a <code>promiseFn</code>, together with several handy <a href="https://www.npmjs.com/package/react-async#options">options</a> to add callbacks and other advanced usecases:</p>
<pre><code class="language-js">import { useAsync } from 'react-async'
const loadCustomer = async ({ customerId }, { signal }) =&gt; {
const res = await fetch(`/api/customers/${customerId}`, { signal })
if (!res.ok) throw new Error(res)
return res.json()
}
const MyComponent = () =&gt; {
const { data, error, isLoading } = useAsync({ promiseFn: loadCustomer, customerId: 1 })
if (isLoading) return 'Loading...'
if (error) return `Something went wrong: ${error.message}`
if (data)
return (
&lt;div&gt;
&lt;strong&gt;Loaded some data:&lt;/strong&gt;
&lt;pre&gt;{JSON.stringify(data, null, 2)}&lt;/pre&gt;
&lt;/div&gt;
)
return null
}
</code></pre>
<p>It also includes a handy <code>useFetch</code> hook you can use in place of the native <code>fetch</code> implementation.</p>
<p><code>react-use</code> also offers <a href="https://github.com/streamich/react-use/blob/master/docs/useAsync.md">a simple <code>useAsync</code> implementation</a>, where you just pass in a promise (aka <code>async</code> function):</p>
<pre><code class="language-js">import { useAsync } from 'react-use'
const Demo = ({ url }) =&gt; {
const state = useAsync(async () =&gt; {
const response = await fetch(url)
const result = await response.text()
return result
}, [url])
return (
&lt;div&gt;
{state.loading ? (
&lt;div&gt;Loading...&lt;/div&gt;
) : state.error ? (
&lt;div&gt;Error: {state.error.message}&lt;/div&gt;
) : (
&lt;div&gt;Value: {state.value}&lt;/div&gt;
)}
&lt;/div&gt;
)
}
</code></pre>
<p>Lastly, Daishi Kato's <a href="https://github.com/dai-shi/react-hooks-async"><code>react-hooks-async</code></a> also offers a very nice <code>abort</code> controller for any promises:</p>
<pre><code class="language-js">import React from 'react'
import { useFetch } from 'react-hooks-async'
const UserInfo = ({ id }) =&gt; {
const url = `https://reqres.in/api/users/${id}?delay=1`
const { pending, error, result, abort } = useFetch(url)
if (pending)
return (
&lt;div&gt;
Loading...&lt;button onClick={abort}&gt;Abort&lt;/button&gt;
&lt;/div&gt;
)
if (error)
return (
&lt;div&gt;
Error: {error.name} {error.message}
&lt;/div&gt;
)
if (!result) return &lt;div&gt;No result&lt;/div&gt;
return &lt;div&gt;First Name: {result.data.first_name}&lt;/div&gt;
}
const App = () =&gt; (
&lt;div&gt;
&lt;UserInfo id={'1'} /&gt;
&lt;UserInfo id={'2'} /&gt;
&lt;/div&gt;
)
</code></pre>
<p>You can also choose to <a href="https://medium.com/@benlesh/promise-cancellation-is-dead-long-live-promise-cancellation-c6601f1f5082">use Observables</a>, either by wrapping your Promise in one or just using them outright.</p>
<p>In any case, you can see the emergent pattern that <strong>you'll always want to wrap your promises</strong> to use them safely in a production environment. At a meta-level, what's going on here is JavaScript lets you call both synchronous and asynchronous code with the exact same API, which is an unfortunate design constraint. It means that we need wrappers to safely translate asynchronous execution to synchronous variables we care about, especially in an immediate-mode rendering paradigm like React. We have to choose to either write these ourselves every time, or adopt a library.</p>
<p>If you have any further comments and edge cases that I haven't thought of, please <a href="https://twitter.com/swyx">get in touch!</a></p>
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
