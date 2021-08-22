---
card: "https://cdn-media-1.freecodecamp.org/images/1*ZeifRZJH1QudGiIiA6En4Q.png"
tags: [React]
description: "This post is intended for those with React and RxJS experienc"
author: "Milad E. Fahmy"
title: "How to build GitHub search functionality in React with RxJS 6 and Recompose"
created: "2021-08-16T11:39:23+02:00"
modified: "2021-08-16T11:39:23+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-tech tag-functional-programming tag-programming tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to build GitHub search functionality in React with RxJS 6 and Recompose</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*ZeifRZJH1QudGiIiA6En4Q.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*ZeifRZJH1QudGiIiA6En4Q.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*ZeifRZJH1QudGiIiA6En4Q.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*ZeifRZJH1QudGiIiA6En4Q.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*ZeifRZJH1QudGiIiA6En4Q.png" alt="How to build GitHub search functionality in React with RxJS 6 and Recompose">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Here’s what we’re building:</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*KeoXx3EaGVrHXaZzK_QBzA.gif" alt=""></p>
<p>No classes, lifecycle hooks, or <code>setState</code>.</p>
<h3 id="setup">Setup</h3>
<p>Everything’s on <a href="https://github.com/yazeedb/recompose-github-ui">my GitHub</a>.</p>
<pre><code>git clone https://github.com/yazeedb/recompose-github-ui
cd recompose-github-ui
yarn install
</code></pre>
<p>The <code>master</code> branch has the finished project, so checkout the <code>start</code> branch if you wish to follow along.</p>
<p><code>git checkout start</code></p>
<p>And run the project.</p>
<p><code>npm start</code></p>
<p>The app should be running on <code>localhost:3000</code>, and here’s our initial UI.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*_XoqdpqQdmYrXs3q6_063w.png" alt=""></p>
<p>Open the project in your favorite text editor and view <code>src/index.js</code>.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*iQy1zXOnGQIIb5noAzYvfw.png" alt=""></p>
<h3 id="recompose">Recompose</h3>
<p>If you haven’t seen it yet, <a href="https://github.com/acdlite/recompose/">Recompose</a> is a wonderful React utility belt for making components in a functional programming style. It has a ton of functions, and I’d have a hard time picking <a href="my-favorite-recompose-functions">my favorites</a>.</p>
<p>It’s Lodash/Ramda, but for React. I also love that they support observables. Quoting from <a href="https://github.com/acdlite/recompose/blob/master/docs/API.md#observable-utilities">the docs</a>:</p>
<blockquote>
<p>It turns out that much of the React Component API can be expressed in terms of observables</p>
</blockquote>
<p>We’ll be exercising that concept today! ?</p>
<h3 id="streamingourcomponent">Streaming Our Component</h3>
<p>Right now <code>App</code> is an ordinary React component. We can return it through an observable using Recompose’s <a href="https://github.com/acdlite/recompose/blob/master/docs/API.md#componentfromstream">componentFromStream</a> function.</p>
<p>This function initially renders <a href="https://github.com/acdlite/recompose/blob/master/src/packages/recompose/componentFromStream.js#L8">a null component</a>, and <em>re-renders</em> when our observable returns a new value.</p>
<h4 id="adashofconfig">A Dash of Config</h4>
<p>Recompose streams follow the <a href="https://github.com/tc39/proposal-observable">ECMAScript Observable Proposal</a>. It lays out how observables should work when they eventually ship to modern browsers.</p>
<p>Until they’re fully implemented, however, we rely on libraries like RxJS, xstream, most, Flyd, and so on.</p>
<p>Recompose doesn’t know which library we’re using, so it provides a <code>setObservableConfig</code> to convert ES Observables to/from whatever we need.</p>
<p>Create a new file in <code>src</code> called <code>observableConfig.js</code>.</p>
<p>And add this code to make Recompose compatible with RxJS 6:</p>
<pre><code class="language-js">import { from } from 'rxjs';
import { setObservableConfig } from 'recompose';
setObservableConfig({
fromESObservable: from
});
</code></pre>
<p>Import it into <code>index.js</code>:</p>
<pre><code class="language-js">import './observableConfig';
</code></pre>
<p>And we’re ready!</p>
<h4 id="recomposerxjs">Recompose + RxJS</h4>
<p>Import <code>componentFromStream</code>.</p>
<pre><code class="language-js">import React from 'react';
import ReactDOM from 'react-dom';
import { componentFromStream } from 'recompose';
import './styles.css';
import './observableConfig';
</code></pre>
<p>And begin redefining <code>App</code> with this code:</p>
<pre><code class="language-js">const App = componentFromStream((prop$) =&gt; {
// ...
});
</code></pre>
<p>Notice that <code>componentFromStream</code> takes a callback function expecting a <code>prop$</code> stream. The idea is that our <code>props</code> become an observable, and we map them to a React component.</p>
<p>And if you’ve used RxJS, you know the perfect operator to <em>map</em> values.</p>
<h4 id="map">Map</h4>
<p>As the name implies, you’re transforming <code>Observable(something)</code> into <code>Observable(somethingElse)</code>. In our case, <code>Observable(props)</code> into <code>Observable(component)</code>.</p>
<p>Import the <code>map</code> operator:</p>
<pre><code class="language-js">import { map } from 'rxjs/operators';
</code></pre>
<p>And redefine App:</p>
<pre><code class="language-js">const App = componentFromStream((prop$) =&gt; {
return prop$.pipe(
map(() =&gt; (
&lt;div&gt;
&lt;input placeholder="GitHub username" /&gt;
&lt;/div&gt;
))
);
});
</code></pre>
<p>Ever since RxJS 5, we use <code>pipe</code> instead of chaining operators.</p>
<p>Save and check your UI, same result!</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*Edm3g3VL9121uIgwkzRiSA.png" alt=""></p>
<h3 id="addinganeventhandler">Adding an Event Handler</h3>
<p>Now we’ll make our <code>input</code> a bit more reactive.</p>
<p>Import the <code>createEventHandler</code> from Recompose.</p>
<pre><code class="language-js">import { componentFromStream, createEventHandler } from 'recompose';
</code></pre>
<p>And use it like so:</p>
<pre><code class="language-jsx">const App = componentFromStream((prop$) =&gt; {
const { handler, stream } = createEventHandler();
return prop$.pipe(
map(() =&gt; (
&lt;div&gt;
&lt;input onChange={handler} placeholder="GitHub username" /&gt;{' '}
&lt;/div&gt;
))
);
});
</code></pre>
<p><code>createEventHandler</code> is an object with two interesting properties: <code>handler</code> and <code>stream</code>.</p>
<p><a href="https://github.com/acdlite/recompose/blob/master/src/packages/recompose/createEventHandler.js">Under the hood</a>, <code>handler</code> is an event emitter pushing values to <code>stream</code>, which is an observable broadcasting those values to its subscribers.</p>
<p>So we’ll combine the <code>stream</code> observable and the <code>prop$</code> observable to access the <code>input</code>'s current value.</p>
<p><code>combineLatest</code> is a good choice here.</p>
<h4 id="chickenandeggproblem">Chicken and Egg Problem</h4>
<p>To use <code>combineLatest</code>, though, both <code>stream</code> and <code>prop$</code> must emit. <code>stream</code> won’t emit until <code>prop$</code> emits, and vice versa.</p>
<p>We can fix that by giving <code>stream</code> an initial value.</p>
<p>Import RxJS’s <code>startWith</code> operator:</p>
<pre><code class="language-js">import { map, startWith } from 'rxjs/operators';
</code></pre>
<p>And create a new variable to capture the modified <code>stream</code>.</p>
<pre><code class="language-js">const { handler, stream } = createEventHandler();
const value$ = stream.pipe(
map((e) =&gt; e.target.value),
startWith('')
);
</code></pre>
<p>We know that <code>stream</code> will emit events from <code>input</code>'s onChange, so let’s immediately map each <code>event</code> to its text value.</p>
<p>On top of that, we’ll initialize <code>value$</code> as an empty string — an appropriate default for an empty <code>input</code>.</p>
<h4 id="combiningitall">Combining It All</h4>
<p>We’re ready to combine these two streams and import <code>combineLatest</code> as a creation method, <strong>not as an operator</strong>.</p>
<pre><code class="language-js">import { combineLatest } from 'rxjs';
</code></pre>
<p>You can also import the <code>tap</code> operator to inspect values as they come:</p>
<pre><code class="language-js">import { map, startWith, tap } from 'rxjs/operators';
</code></pre>
<p>And use it like so:</p>
<pre><code class="language-jsx">const App = componentFromStream((prop$) =&gt; {
const { handler, stream } = createEventHandler();
const value$ = stream.pipe(
map((e) =&gt; e.target.value),
startWith('')
);
return combineLatest(prop$, value$).pipe(
tap(console.warn),
map(() =&gt; (
&lt;div&gt;
&lt;input onChange={handler} placeholder="GitHub username" /&gt;
&lt;/div&gt;
))
);
});
</code></pre>
<p>Now as you type, <code>[props, value]</code> is logged.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*E1jAWy0UTDbWFfEh___Psg.png" alt=""></p>
<h3 id="usercomponent">User Component</h3>
<p>This component will be responsible for fetching/displaying the username we give it. It’ll receive the <code>value</code> from <code>App</code> and map it to an AJAX call.</p>
<h4 id="jsxcss">JSX/CSS</h4>
<p>Create a folder <code>src/User</code>, and put <a href="https://raw.githubusercontent.com/yazeedb/recompose-github-ui/master/src/User/User.css">this code</a> into <code>User.css</code>:</p>
<p>And <a href="https://raw.githubusercontent.com/yazeedb/recompose-github-ui/master/src/User/Component.js">this code</a> into <code>src/User/Component.js</code>:</p>
<p>The component just fills out a template with GitHub API’s standard JSON response.</p>
<h4 id="thecontainer">The Container</h4>
<p>Now that the “dumb” component’s out of the way, let’s do the “smart” component:</p>
<p>Here’s <code>src/User/index.js</code>:</p>
<pre><code class="language-jsx">import React from 'react';
import { componentFromStream } from 'recompose';
import { debounceTime, filter, map, pluck } from 'rxjs/operators';
import Component from './Component';
import './User.css';
const User = componentFromStream((prop$) =&gt; {
const getUser$ = prop$.pipe(
debounceTime(1000),
pluck('user'),
filter((user) =&gt; user &amp;&amp; user.length),
map((user) =&gt; &lt;h3&gt;{user}&lt;/h3&gt;)
);
return getUser$;
});
export default User;
</code></pre>
<p>We define <code>User</code> as a <code>componentFromStream</code>, which returns a <code>prop$</code> stream that maps to an <code>&lt;h3&gt;</code>.</p>
<h4 id="debouncetime">debounceTime</h4>
<p>Since <code>User</code> will receive its props through the keyboard, we don’t want to listen to every single emission.</p>
<p>When the user begins typing, <code>debounceTime(1000)</code> skips all emissions for 1 second. This pattern’s commonly employed in <a href="https://www.learnrxjs.io/operators/filtering/debouncetime.html">type-aheads</a>.</p>
<h4 id="pluck">pluck</h4>
<p>This component expects <code>prop.user</code> at some point. <code>pluck</code> grabs <code>user</code>, so we don’t need to destructure our <code>props</code> every time.</p>
<h4 id="filter">filter</h4>
<p>Ensures that <code>user</code> exists and isn’t an empty string.</p>
<h4 id="map">map</h4>
<p>For now, just put <code>user</code> inside an <code>&lt;h3&gt;</code> tag.</p>
<h4 id="hookingitup">Hooking It Up</h4>
<p>Back in <code>src/index.js</code>, import the <code>User</code> component:</p>
<pre name="aa45" id="aa45" class="graf graf--pre graf-after--p">import User from './User';</pre>
<p>And provide <code>value</code> as the <code>user</code> prop:</p>
<pre><code class="language-jsx">return combineLatest(prop$, value$).pipe(
tap(console.warn),
map(([props, value]) =&gt; (
&lt;div&gt;
&lt;input onChange={handler} placeholder="GitHub username" /&gt;
&lt;User user={value} /&gt;{' '}
&lt;/div&gt;
))
);
</code></pre>
<p>Now your value’s rendered to the screen after 1 second.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*ti-OF_cqiKmQx1iTZZJFrA.gif" alt=""></p>
<p>Good start, but we need to actually fetch the user.</p>
<h3 id="fetchingtheuser">Fetching the User</h3>
<p>GitHub’s User API is available <a href="https://api.github.com/users">here</a>. We can easily extract that into a helper function inside <code>User/index.js</code>:</p>
<pre><code class="language-js">const formatUrl = (user) =&gt; `https://api.github.com/users/${user}`;
</code></pre>
<p>Now we can add <code>map(formatUrl)</code> after <code>filter</code>:</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*bdCfDgYzFP9laQAg9Y1AKw.png" alt=""></p>
<p>You’ll notice the API endpoint is rendered to the screen after 1 second now:</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*5ZTeqmDCGjnwe-MIP0H83g.png" alt=""></p>
<p>But we need to make an API request! Here comes <code>switchMap</code> and <code>ajax</code>.</p>
<h4 id="switchmap">switchMap</h4>
<p>Also used in type-aheads, <code>switchMap</code>’s great for literally <strong>switching</strong> from one observable to another.</p>
<p>Let’s say the user enters a username, and we fetch it inside <code>switchMap</code>.</p>
<p>What happens if the user enters something new before the result comes back? Do we care about the previous API response?</p>
<p>Nope.</p>
<p><code>switchMap</code> will cancel that previous fetch and focus on the current one.</p>
<h4 id="ajax">ajax</h4>
<p>RxJS provides its own implementation of <code>ajax</code> that works great with <code>switchMap</code>!</p>
<h4 id="usingthem">Using Them</h4>
<p>Let’s import both. My code is looking like this:</p>
<pre><code class="language-js">import { ajax } from 'rxjs/ajax';
import { debounceTime, filter, map, pluck, switchMap } from 'rxjs/operators';
</code></pre>
<p>And use them like so:</p>
<pre><code class="language-js">const User = componentFromStream((prop$) =&gt; {
const getUser$ = prop$.pipe(
debounceTime(1000),
pluck('user'),
filter((user) =&gt; user &amp;&amp; user.length),
map(formatUrl),
switchMap((url) =&gt;
ajax(url).pipe(
pluck('response'),
map(Component)
)
)
);
return getUser$;
});
</code></pre>
<p><strong>Switch</strong> from our <code>input</code> stream to an <code>ajax</code> request stream. Once the request completes, grab its <code>response</code> and <code>map</code> to our <code>User</code> component.</p>
<p>We’ve got a result!</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*NIVF7Iq9bjqremAKS2VOYQ.gif" alt=""></p>
<h3 id="errorhandling">Error handling</h3>
<p>Try entering a username that doesn’t exist.</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*cvF0zqPlndM4VAjyGHgxsQ.png" alt=""></p>
<p>Even if you change it, our app’s broken. You must refresh to fetch more users.</p>
<p>That’s a bad user experience, right?</p>
<h4 id="catcherror">catchError</h4>
<p>With the <code>catchError</code> operator, we can render a reasonable response to the screen instead of silently breaking.</p>
<p>Import it:</p>
<pre><code class="language-js">import {
catchError,
debounceTime,
filter,
map,
pluck,
switchMap
} from 'rxjs/operators';
</code></pre>
<p>And stick it to the end of your <code>ajax</code> chain.</p>
<pre><code class="language-jsx">switchMap((url) =&gt;
ajax(url).pipe(
pluck('response'),
map(Component),
catchError(({ response }) =&gt; alert(response.message))
)
);
</code></pre>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*krBPGwW4tSv7FOxGaleZxQ.png" alt=""></p>
<p>At least we get some feedback, but we can do better.</p>
<h4 id="anerrorcomponent">An Error Component</h4>
<p>Create a new component, <code>src/Error/index.js</code>.</p>
<pre><code class="language-jsx">import React from 'react';
const Error = ({ response, status }) =&gt; (
&lt;div className="error"&gt;
&lt;h2&gt;Oops!&lt;/h2&gt;
&lt;b&gt;
{status}: {response.message}
&lt;/b&gt;
&lt;p&gt;Please try searching again.&lt;/p&gt;
&lt;/div&gt;
);
export default Error;
</code></pre>
<p>This will nicely display <code>response</code> and <code>status</code> from our AJAX call.</p>
<p>Let’s import it in <code>User/index.js</code>:</p>
<pre><code class="language-jsx">import Error from '../Error';
</code></pre>
<p>And <code>of</code> from RxJS:</p>
<pre><code class="language-jsx">import { of } from 'rxjs';
</code></pre>
<p>Remember, our <code>componentFromStream</code> callback must return an observable. We can achieve that with <code>of</code>.</p>
<p>Here’s the new code:</p>
<pre><code class="language-jsx">ajax(url).pipe(
pluck('response'),
map(Component),
catchError((error) =&gt; of(&lt;Error {...error} /&gt;))
);
</code></pre>
<p>Simply spread the <code>error</code> object as props on our component.</p>
<p>Now if we check our UI:</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*OA8An4fuwA5CK4-ogDRwYw.gif" alt=""></p>
<p>Much better!</p>
<h3 id="aloadingindicator">A Loading Indicator</h3>
<p>Normally, we’d now require some form of state management. How else does one build a loading indicator?</p>
<p>But before reaching for <code>setState</code>, let’s see if RxJS can help us out.</p>
<p>The <a href="https://github.com/acdlite/recompose/blob/master/docs/API.md#observable-utilities">Recompose docs</a> got me thinking in this direction:</p>
<blockquote>
<p>Instead of <code>setState()</code>, combine multiple streams together.</p>
</blockquote>
<p><strong>Edit</strong>: I initially used <code>BehaviorSubject</code>s, but <a href="https://medium.com/@milankinen">Matti Lankinen</a> responded with a brilliant way to simplify this code. Thank you Matti!</p>
<p>Import the <code>merge</code> operator.</p>
<pre><code class="language-jsx">import { merge, of } from 'rxjs';
</code></pre>
<p>When the request is made, we’ll merge our <code>ajax</code> with a Loading Component stream.</p>
<p>Inside <code>componentFromStream</code>:</p>
<pre><code class="language-jsx">const User = componentFromStream((prop$) =&gt; {
const loading$ = of(&lt;h3&gt;Loading...&lt;/h3&gt;);
// ...
});
</code></pre>
<p>A simple <code>h3</code> loading indicator turned into an observable! And use it like so:</p>
<pre><code class="language-jsx">const loading$ = of(&lt;h3&gt;Loading...&lt;/h3&gt;);
const getUser$ = prop$.pipe(
debounceTime(1000),
pluck('user'),
filter((user) =&gt; user &amp;&amp; user.length),
map(formatUrl),
switchMap((url) =&gt;
merge(
loading$,
ajax(url).pipe(
pluck('response'),
map(Component),
catchError((error) =&gt; of(&lt;Error {...error} /&gt;))
)
)
)
);
</code></pre>
<p>I love how concise this is. Upon entering <code>switchMap</code>, merge the <code>loading$</code> and <code>ajax</code> observables.</p>
<p>Since <code>loading$</code> is a static value, it’ll emit first. Once the asynchronous <code>ajax</code> finishes, however, <em>it’ll</em> emit and be displayed on the screen.</p>
<p>Before testing it out, we can import the <code>delay</code> operator so the transition doesn’t happen too fast.</p>
<pre><code class="language-js">import {
catchError,
debounceTime,
delay,
filter,
map,
pluck,
switchMap,
tap
} from 'rxjs/operators';
</code></pre>
<p>And use it just before <code>map(Component)</code>:</p>
<pre><code class="language-jsx">ajax(url).pipe(
pluck('response'),
delay(1500),
map(Component),
catchError((error) =&gt; of(&lt;Error {...error} /&gt;))
);
</code></pre>
<p>Our result?</p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/1*9ZPxZaVZt5d5TVKbPKGT9w.gif" alt=""></p>
<p>I’m wondering how far to take this pattern and in what direction. Please share your thoughts!</p>
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
