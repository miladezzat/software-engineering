---
card: "https://cdn-media-1.freecodecamp.org/images/1*YxApEKMTlenh-lDQ-uWvJw.jpeg"
tags: [JavaScript]
description: So the React Conference just happened and as always something
author: "Milad E. Fahmy"
title: "Hooked on hooks: how to use React’s useReducer()"
created: "2021-08-15T19:40:11+02:00"
modified: "2021-08-15T19:40:11+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-front-end-development tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Hooked on hooks: how to use React’s useReducer()</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*YxApEKMTlenh-lDQ-uWvJw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*YxApEKMTlenh-lDQ-uWvJw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*YxApEKMTlenh-lDQ-uWvJw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*YxApEKMTlenh-lDQ-uWvJw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*YxApEKMTlenh-lDQ-uWvJw.jpeg" alt="Hooked on hooks: how to use React’s useReducer()">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<figcaption>Photo by <a href="https://unsplash.com/@sebastian_unrau?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Sebastian Unrau</a> / <a href="https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Unsplash</a></figcaption>
</figure>
<p>So the React Conference just happened and as always something new happened. <em>Hooks happened! </em>The React team talked about suspense, lazy loading, concurrent rendering, and <strong><em>hooks </em></strong>:D.</p>
<p>Now I’ll talk about my favorite hook <code>useReducer</code> and how you use it.</p>
const initialState = {
loading: false,
count: 0,
};
const reducer = (state, action) =&gt; {
switch (action.type) {
case 'increment': {
return { ...state, count: state.count + 1, loading: false };
}
case 'decrement': {
return { ...state, count: state.count - 1, loading: false };
}
case 'loading': {
return { ...state, loading: true };
}
default: {
return state;
}
}
};
const delay = (time = 1500) =&gt; {
return new Promise(resolve =&gt; {
setTimeout(() =&gt; {
resolve(true);
}, time);
});
};
function PokemonInfo() {
const [{ count, loading }, dispatch] = useReducer(reducer, initialState);
const onHandleIncrement = async () =&gt; {
dispatch({ type: 'loading' });
await delay(500);
dispatch({ type: 'increment' });
};
const onHandleDecrement = async () =&gt; {
dispatch({ type: 'loading' });
await delay(500);
dispatch({ type: 'decrement' });
};
return (
&lt;div&gt;
&lt;p&gt;Count {loading ? 'loading..' : count}&lt;/p&gt;
&lt;button type="button" onClick={onHandleIncrement}&gt;
+
&lt;/button&gt;
&lt;button type="button" onClick={onHandleDecrement}&gt;
-
&lt;/button&gt;
&lt;/div&gt;
);
}
export default PokemonInfo;</code></pre>
<figcaption><a href="https://gist.github.com/adeelibr/c12942dd4dcd7d2f5557449a0098b91d#file-usereducerexample-js">useReducerExample.js</a></figcaption>
</figure>
<p>In my <code>PokemonInfo</code> component, I have:</p><pre><code>const [{ count, loading }, dispatch] = useReducer(reducer, initialState);</code></pre>
<p>Which is equivalent to:</p><pre><code>const [state, dispatch] = useReducer(reducer, initialState);
const { count, loading } = state;</code></pre>
<p>So what is <code>const [state, dispatch] = useReducer(param1, param2)</code> Let’s first talk about <strong>array destructuing</strong><em> </em>which is happening below<em>.</em></p><pre><code>const [state, dispatch] = useReducer(initialState);</code></pre>
<p>Here’s an example of array destructing:</p><pre><code>let myHeroes = ['Ant man', 'Batman']; // Mixing DC &amp; Marvel :D
let [marvelHero, dcHero] = myHeroes; // destructuring array
/**
* myHeroes[0] == marvelHero =&gt; is 'Ant man'
* myHeroes[1] == dcHero =&gt; is 'Batman'
*/</code></pre>
<p>So the method <code>useReducer</code> has two items in its array <code>state</code> and <code>dispatch</code>. Also the <code>useReducer</code> takes in two parameters: one is <code>reducer </code>the other is <code>initial-state</code>.</p>
<p>In the <code>useReducer</code> param <code>reducer</code>, I pass in:</p><pre><code>const reducer = (state, action) =&gt; {
switch (action.type) {
case 'increment': {
return { ...state, count: state.count + 1, loading: false };
}
case 'decrement': {
return { ...state, count: state.count - 1, loading: false };
}
case 'loading': {
return { ...state, loading: true };
}
default: {
return state;
}
}
};</code></pre>
<p>What this does is it takes in two arguments. One is the current state of the reducer and the other is the action. The <code>action.type</code> decides how it will update the reducer and return a new state to us.</p>
<p>So if the <code>action.type === increment</code></p><pre><code>case 'increment': {
return { ...state, count: state.count + 1, loading: false };
}</code></pre>
<p>…it will return the state, which will have its count updated to <strong><em>+1 </em></strong>and loading set to <strong>false</strong><em>. </em>Also where it says <code>state.count + 1</code> here the <code>state</code> is actually the previous state.</p>
<p>In <code>useReducer</code> param <code>initialState</code> I pass in:</p><pre><code>const initialState = {
loading: false,
count: 0
};</code></pre>
<p>So if this is the initial state, the <code>useReducer</code> method returns two items from its array, <code>state</code> and <code>dispatch</code>. The <code>state</code> method is an object which has two keys <code>count &amp; loading</code> that I destructure in my destructured array.</p>
<p>So I destructure an array, and inside the array, I destructure an object on the first index of the array like below.</p><pre><code>const [{ count, loading }, dispatch] = useReducer(reducer, initialState);</code></pre>
<p>Also I have a method called <code>delay</code></p><pre><code>// return true after 1500ms in time argument is passed to.
const delay = (time = 1500) =&gt; {
return new Promise(resolve =&gt; {
setTimeout(() =&gt; {
resolve(true);
}, time);
});
};</code></pre>
<p>Now in my render method when I click the <code>+</code> button</p><pre><code>&lt;button type="button" onClick={onHandleIncrement}&gt;+&lt;/button&gt;</code></pre>
<p>the <code>onHandleIncrement</code> function is executed, which does the following:</p><pre><code>const onHandleIncrement = async () =&gt; {
dispatch({ type: 'loading' });
await delay(500);
dispatch({ type: 'increment' });
};</code></pre>
<p>It initially sets <code>loading</code> to true, adds a delay of <code>500ms</code> and then increments the counter. Now I know this is not a real world case example, but it explains the point as to how a reducer works.</p>
<p>Last thing:</p><pre><code>&lt;p&gt;Count {loading ? 'loading..' : count}&lt;/p&gt;</code></pre>
<p>If <code>loading</code> is true, I show <code>Count loading..</code> else I show <code>Count {value}</code>.</p>
<p>This is how it looks in the UI:</p>
<figcaption>Count example using useReducer hook</figcaption>
</figure>
<p>I tried replicating <a href="https://twitter.com/dan_abramov" rel="noopener">Dan Abramov’s</a> code that he showcased at the React Conference 2018. Here is the link to the <a href="https://github.com/adeelibr/react-hooks-demo" rel="noopener"><strong>code repository</strong></a><strong>. </strong>Enjoy. :)</p>
<blockquote>Kindly do note that hooks are in an alpha version of React, and are in no way advised to be used in production. But there is a strong possibility that they will become a huge part of the eco-system in the future. So you should start playing around with react hooks now.</blockquote>
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
