---
card: "/images/default.jpg"
tags: [Programming]
description: 90% convention, 10% library.
author: "Milad E. Fahmy"
title: "How to Implement Redux in 24 Lines of JavaScript"
created: "2021-08-15T19:32:25+02:00"
modified: "2021-08-15T19:32:25+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-redux tag-functional-programming tag-javascript tag-flux ">
<header class="post-full-header">
<h1 class="post-full-title">How to Implement Redux in 24 Lines of JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/10/cover-image-2.png 300w,
/news/content/images/size/w600/2019/10/cover-image-2.png 600w,
/news/content/images/size/w1000/2019/10/cover-image-2.png 1000w,
/news/content/images/size/w2000/2019/10/cover-image-2.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/10/cover-image-2.png" alt="How to Implement Redux in 24 Lines of JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>90% convention, 10% library.</p>
<p>Redux is among the most important JavaScript libraries ever created. Inspired by prior art like <a href="https://facebook.github.io/flux/">Flux</a> and <a href="https://elm-lang.org">Elm</a>, Redux put JavaScript functional programming on the map by introducing a scalable architecture of three simple points.</p>
<p>If you're new to Redux, consider reading <a href="https://redux.js.org/introduction/three-principles">the official docs</a> first.</p>
<h2 id="reduxismostlyconvention">Redux Is Mostly Convention</h2>
<p>Consider this simple counter application that uses the Redux architecture. If you'd like to jump ahead check out <a href="https://github.com/yazeedb/implement-redux-counter-app">the Github repo</a> for it.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/10/redux-counter-app-demo.gif" alt="redux-counter-app-demo"></p>
<h3 id="statelivesinasingletree">State lives in a single tree</h3>
<p>The application's state looks like this.</p>
<pre><code class="language-js">const initialState = { count: 0 };
</code></pre>
<h3 id="actionsdeclarestatechanges">Actions declare state changes</h3>
<p>By Redux convention, <strong>I do not</strong> directly modify (mutate) the state.</p>
<pre><code class="language-js">// DON'T do this in a Redux app
state.count = 1;
</code></pre>
<p>Instead I create all the actions the user may leverage in the application.</p>
<pre><code class="language-js">const actions = {
increment: { type: 'INCREMENT' },
decrement: { type: 'DECREMENT' }
};
</code></pre>
<h3 id="reducerinterpretsactionandupdatesstate">Reducer interprets action and updates state</h3>
<p>The last architectural piece calls for a reducer, a pure function that returns a new copy of your state based on the previous state and action.</p>
<ul>
<li>If <code>increment</code> is fired, increment <code>state.count</code>.</li>
<li>If <code>decrement</code> is fired, decrement <code>state.count</code>.</li>
</ul>
<pre><code class="language-js">const countReducer = (state = initialState, action) =&gt; {
switch (action.type) {
case actions.increment.type:
return {
count: state.count + 1
};
case actions.decrement.type:
return {
count: state.count - 1
};
default:
return state;
}
};
</code></pre>
<h3 id="noreduxsofar">No Redux so far</h3>
<p>Did you notice that we haven't touched the Redux library yet? We've just created some objects and a function. This is what I mean by "mostly convention", 90% of Redux doesn't require Redux!</p>
<h2 id="letsimplementredux">Let's implement Redux</h2>
<p>To put this architecture to use, we must plug it into a store. We'll implement just one function–<code>createStore</code>.</p>
<p>It's used like this.</p>
<pre><code class="language-js">import { createStore } from 'redux'
const store = createStore(countReducer);
store.subscribe(() =&gt; {
console.log(store.getState());
});
store.dispatch(actions.increment);
// logs { count: 1 }
store.dispatch(actions.increment);
// logs { count: 2 }
store.dispatch(actions.decrement);
// logs { count: 1 }
</code></pre>
<p>And here's our initial boilerplate. We'll need a list of listeners and the initial state supplied by the reducer.</p>
<pre><code class="language-js">const createStore = (yourReducer) =&gt; {
let listeners = [];
let currentState = yourReducer(undefined, {});
}
</code></pre>
<p>Whenever someone subscribes to our store, they get added to the <code>listeners</code> array. The is important because every time someone dispatches an action, all the <code>listeners</code> must be notified in a loop.</p>
<p>Calling <code>yourReducer</code> with <code>undefined</code> and an empty object returns the <code>initialState</code> we installed up above. This gives us a proper value to return when we call <code>store.getState()</code>. Speaking of which, let's create that method.</p>
<h3 id="storegetstate">store.getState()</h3>
<p>This is a function that returns the latest state from the store. We'll need this to update our UI every time the user clicks a button.</p>
<pre><code class="language-js">const createStore = (yourReducer) =&gt; {
let listeners = [];
let currentState = yourReducer(undefined, {});
return {
getState: () =&gt; currentState
};
}
</code></pre>
<h3 id="storedispatchaction">store.dispatch(action)</h3>
<p>This is a function that takes an <code>action</code> as a parameter. It feeds that <code>action</code> and the <code>currentState</code> to <code>yourReducer</code> to get a <em>new</em> state. Then <code>dispatch</code> notifies everyone subscribed to the <code>store</code>.</p>
<pre><code class="language-js">const createStore = (yourReducer) =&gt; {
let listeners = [];
let currentState = yourReducer(undefined, {});
return {
getState: () =&gt; currentState,
dispatch: (action) =&gt; {
currentState = yourReducer(currentState, action);
listeners.forEach((listener) =&gt; {
listener();
});
}
};
};
</code></pre>
<h3 id="storesubscribelistener">store.subscribe(listener)</h3>
<p>This is a function that lets you be notified when the store receives an action It's good to use <code>store.getState()</code> in here to get your latest state and update your UI.</p>
<pre><code class="language-js">const createStore = (yourReducer) =&gt; {
let listeners = [];
let currentState = yourReducer(undefined, {});
return {
getState: () =&gt; currentState,
dispatch: (action) =&gt; {
currentState = yourReducer(currentState, action);
listeners.forEach((listener) =&gt; {
listener();
});
},
subscribe: (newListener) =&gt; {
listeners.push(newListener);
const unsubscribe = () =&gt; {
listeners = listeners.filter((l) =&gt; l !== newListener);
};
return unsubscribe;
}
};
};
</code></pre>
<p><code>subscribe</code> returns a function called <code>unsubscribe</code> that you can call when you're no longer interested in listening to the store's updates.</p>
<h2 id="alltogethernow">All Together Now</h2>
<p>Let's hook this up to our buttons and view the final source code.</p>
<pre><code class="language-js">// simplified createStore function
const createStore = (yourReducer) =&gt; {
let listeners = [];
let currentState = yourReducer(undefined, {});
return {
getState: () =&gt; currentState,
dispatch: (action) =&gt; {
currentState = yourReducer(currentState, action);
listeners.forEach((listener) =&gt; {
listener();
});
},
subscribe: (newListener) =&gt; {
listeners.push(newListener);
const unsubscribe = () =&gt; {
listeners = listeners.filter((l) =&gt; l !== newListener);
};
return unsubscribe;
}
};
};
// Redux architecture pieces
const initialState = { count: 0 };
const actions = {
increment: { type: 'INCREMENT' },
decrement: { type: 'DECREMENT' }
};
const countReducer = (state = initialState, action) =&gt; {
switch (action.type) {
case actions.increment.type:
return {
count: state.count + 1
};
case actions.decrement.type:
return {
count: state.count - 1
};
default:
return state;
}
};
const store = createStore(countReducer);
// DOM elements
const incrementButton = document.querySelector('.increment');
const decrementButton = document.querySelector('.decrement');
// Wire click events to actions
incrementButton.addEventListener('click', () =&gt; {
store.dispatch(actions.increment);
});
decrementButton.addEventListener('click', () =&gt; {
store.dispatch(actions.decrement);
});
// Initialize UI display
const counterDisplay = document.querySelector('h1');
counterDisplay.innerHTML = parseInt(initialState.count);
// Update UI when an action fires
store.subscribe(() =&gt; {
const state = store.getState();
counterDisplay.innerHTML = parseInt(state.count);
});
</code></pre>
<p>And once again here's our final UI.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/10/redux-counter-app-demo.gif" alt="redux-counter-app-demo"></p>
<p>If you're interested in the HTML/CSS I used, here's <a href="https://github.com/yazeedb/implement-redux-counter-app">the GitHub repo</a> again!</p>
<h2 id="wantfreecoaching">Want Free Coaching?</h2>
<p>If you'd like to schedule a free call to discuss Front-End development questions regarding code, interviews, career, or anything else <a href="https://twitter.com/yazeedBee">follow me on Twitter and DM me</a>.</p>
<p>After that if you enjoy our first meeting, we can discuss an ongoing coaching to help you reach your Front-End development goals!</p>
<h2 id="wearyourcontributions">Wear Your Contributions</h2>
<p>If you're coding every day, especially if you're committing to GitHub, wouldn't it be cool to wear that contribution map for all to see?</p>
<p><a href="https://gitmerch.com/">Gitmerch.com</a> lets you print a t-shirt of your GitHub contribution map! Use the code, <strong>Yazeed</strong>, at checkout for a discount.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/11/git-merch-screenshot-1-1.png" alt="git-merch-screenshot-1-1"></p>
<p><img src="https://www.freecodecamp.org/news/content/images/2019/11/git-merch-screenshot-2-1.png" alt="git-merch-screenshot-2-1"></p>
<h2 id="thanksforreading">Thanks for reading</h2>
<p>For more content like this, check out <a href="https://yazeedb.com">https://yazeedb.com!</a></p>
<p>Until next time!</p>
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
