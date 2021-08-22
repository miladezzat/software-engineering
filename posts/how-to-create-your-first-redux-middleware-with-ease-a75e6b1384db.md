---
card: "https://cdn-media-1.freecodecamp.org/images/0*G6zSXWOpLVBgghzy."
tags: [Redux]
description: by Gabriele Cimato
author: "Milad E. Fahmy"
title: "How to create your first Redux middleware with ease"
created: "2021-08-15T19:47:45+02:00"
modified: "2021-08-15T19:47:45+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-redux tag-tech tag-javascript tag-react tag-open-source ">
<header class="post-full-header">
<h1 class="post-full-title">How to create your first Redux middleware with ease</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*G6zSXWOpLVBgghzy. 300w,
https://cdn-media-1.freecodecamp.org/images/0*G6zSXWOpLVBgghzy. 600w,
https://cdn-media-1.freecodecamp.org/images/0*G6zSXWOpLVBgghzy. 1000w,
https://cdn-media-1.freecodecamp.org/images/0*G6zSXWOpLVBgghzy. 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*G6zSXWOpLVBgghzy." alt="How to create your first Redux middleware with ease">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Gabriele Cimato</p>
<h1 id="how-to-create-your-first-redux-middleware-with-ease">How to create your first Redux middleware with ease</h1>
<figcaption>Photo by <a href="https://unsplash.com/@jeshoots?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">JESHOOTS.COM</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>Almost every real-word React app makes extensive use of async requests. If you manage your app state with Redux, there are several ways to handle async actions.</p>
<p>You may have heard of <code>redux-thunk</code>or <code>redux-saga</code>, the most popular solutions to handling async actions in Redux. Such approaches come in handy when you need to track the status of a request in your state.</p>
<p>A pattern that I have seen quite often that leverages <code>thunks</code> is the following:</p><pre><code class="language-js">import {
FETCH_DATA_ERROR,
FETCH_DATA_PENDING,
FETCH_DATA_SUCCESS,
} from 'constants/actionTypes';
function fetchMyDataError(error) {
return {
type: FETCH_DATA_ERROR,
payload: error,
};
}
function fetchDataPending() {
return { type: FETCH_DATA_PENDING };
}
function fetchMyDataSuccess(response) {
return {
type: FETCH_DATA_SUCCESS.
payload: response,
};
}
function fetchData() {
return (dispatch) =&gt; {
dispatch(fetchDataPending());
fetch('https://my-api.com/my-data')
.then(res =&gt; res.json())
.then(data =&gt; dispatch(fetchMyDataSuccess(data)))
.catch(err =&gt; dispatch(fetchMyDataError(err)));
};
}</code></pre>
<p>As you can see, we wrote a good amount of code. This example can be simplified and handled with one function only. Either way, it will soon feel very repetitive and tedious, especially if you need to track the lifespan of every async request in your app. Such verbosity doesn’t help with the boilerplate necessary for an app that uses Redux.</p>
<p>When a pattern or a code block gets used over and over again, it’s a good practice to extract it in a function. This will abstract the logic of it, and only requires the least amount of data to “function.” That’s when I started playing with the idea of writing my own middleware. <code><a href="https://github.com/Gabri3l/redux-slim-async" rel="noopener">redux-slim-async</a></code> helps me skip boilerplate code and provide great control with a tiny API. Let’s see now the previous example with the new middleware:</p><pre><code class="language-js">import {
FETCH_DATA_PENDING,
FETCH_DATA_SUCCESS,
FETCH_DATA_ERROR,
} from 'constants/actionTypes';
function fetchData() {
return {
types: [
FETCH_DATA_PENDING,
FETCH_DATA_SUCCESS,
FETCH_DATA_ERROR,
],
callAPI: fetch(‘https://my-api.com/my-data')
.then(res =&gt; res.json()),
}
}</code></pre>
<p>All those awkward functions are gone and our <code>fetchData</code> is now minimal — pretty neat! ?</p>
<p>Now let’s go ahead and build a smaller version of such middleware. It will help us understand the inner workings of it and hey, you’ll be able to build your own next!</p>
<h3 id="creating-a-middleware">Creating a middleware</h3>
<p>Let me show you the code for this small middleware right away. You’ll see that it’s not as overwhelming as you might think.</p><pre><code class="language-js">function createSlimAsyncMiddleware({ dispatch, getState }) {
return next =&gt; action =&gt; {
const {
types,
callAPI,
shouldCallAPI = () =&gt; true,
} = action;
if (!actionIsValid(action)) next(action);
if (!shouldCallAPI(getState())) {
return Promise.resolve(getState());
}
const [pendingType, successType, errorType] = types;
dispatch({ type: pendingType });
return callAPI()
.then(response =&gt; {
dispatch({
type: successType,
payload: response,
});
return Promise.resolve(getState());
})
.catch(error =&gt; {
dispatch({
type: errorType,
payload: error,
});
return Promise.reject(error);
});
};
}</code></pre>
<p>Wait a second…that’s it? Absolutely!</p>
<p>Let’s go one line at a time. This middleware is a function that returns a function, that returns a function that returns a <code>Promise</code>. As funky as it sounds, you’ll find that it’s much simpler than it seems.</p>
<p>Our middleware function receives an object with two fields: <code>dispatch </code>and <code>getState</code>. These are <a href="http://2ality.com/2011/11/keyword-parameters.html" rel="noopener">named parameters</a> provided by Redux.</p>
<ul>
<li><code>dispatch</code>: as the name suggests, this is what we use to dispatch an action. It’ll give us the power of handling actions inside the middleware</li>
<li><code>getState</code>: this is a function that returns the current state at a given time. This can be useful if we want to return the updated state after an action has been dispatched</li>
</ul>
<p>On the <strong>first line</strong> we have a function with one object argument with fields <code>dispatch </code>and <code>getState</code>.</p>
<p>On the <strong>second line</strong> we return a function that takes an argument called <code>next</code>. Such a function returns a function that takes an <code>action </code>and does something. More on that later. But what is <code>next </code>for ? Why are we expected to return a function that returns a function that does something?</p>
<p>What Redux does under the hood is <a href="https://github.com/reactjs/redux/blob/master/src/compose.js" rel="noopener">compose</a> the middlewares so that each one has a reference to…the <code>next </code>one! The name helps a lot to make it intuitive. We are wrapping the official Redux <code>dispatch</code> function with our middleware. This builds a pipeline that an action has to go through.</p>
<p>Remember that you don’t HAVE TO call <code>next(action)</code>, but you need to do so if you don’t want to block the dispatching process (we’ll see a specific case in our middleware).</p>
<figcaption>A flow chart that explores the middleware pipeline in a simplified way</figcaption>
</figure>
<p>In our case, it’s useful because we don’t want to intercept every action, only the ones that are valid for our middleware. For simplicity, I added a check called <code>actionIsValid</code>. This function takes an <code>action </code>as an argument and returns a boolean. The returned boolean represents the validity of this action for our middleware.</p>
<p><code>actionisValid </code>is a good place to check for errors and <code>throw </code>them if necessary. If it’s not valid, then I will use our reference to the <code>next </code>middleware and pass the action to it. Otherwise we can finally use the action and “do something” (the flowchart above represents a simplified version of this logic).</p>
<p>The rest of the middleware is pretty intuitive. We check the validity of the action to determine if our async request should proceed or not.</p>
<p><code>shouldCallAPI</code> is a parameter of our middleware API. Given the state, it returns a boolean that determines if our request should execute or not. The middleware provides a default value for it (a function that returns <code>true </code>). If we don’t need to make the API call, then we return <code>Promise.resolve</code>. This way we can use <code>.then</code> or <code>async/await</code> on any asynchronous action that goes through our middleware.</p><pre><code class="language-js">const [pendingType, successType, errorType] = types;</code></pre>
<p>The next step is to determine the action <code>type</code> field passed in as a parameter. We use array <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Array_destructuring" rel="noopener">destructuring</a> to disassemble our <code>types </code>array parameter.</p><pre><code class="language-js">dispatch({ type: pendingType });</code></pre>
<p>Now we can finally use the <code>dispatch </code>method. This dispatches a Redux action like you would normally do. Such action represents the “pending” state of our async request.</p><pre><code class="language-js">return callAPI()
.then(response =&gt; {
dispatch({
type: successType,
payload: response,
});
return Promise.resolve(getState());
})
.catch(error =&gt; {
dispatch({
type: errorType,
payload: error,
});
return Promise.reject(error);
});</code></pre>
<p>We finally have our last <code>return</code> statement. Here we make the API call and, based on how the <code>Promise</code> resolves, we dispatch and return different values.</p>
<ul>
<li><strong>Success</strong>: given the response from the API, we dispatch a success action. The payload is the response of the request. Right after that, we return a <code>Promise</code> that resolves with the up-to-date state of our app. This allows us to use <code>.then(updatedState =&gt; …do somethi</code>ng)</li>
<li><strong>Error: </strong>if the <code>Promise</code> rejects then we dispatch an error action. In this case the payload is the error itself.</li>
</ul>
<p>That’s it! As shown before, we can then create actions and use them as follows:</p><pre><code>// Our Action
function fetchData() {
return {
types: [
FETCH_DATA_PENDING,
FETCH_DATA_SUCCESS,
FETCH_DATA_ERROR,
],
shouldCallAPI: state =&gt; state.dataArr.length === 0,
callAPI: () =&gt;
fetch('https://my-api.com/my-data').then(res =&gt; res.json()),
}
}
// Inside the component
class MyComponent extends Component {
componentDidMoun() {
this.props.fetchData()
.then(state =&gt; {
console.log('updated state after async action:', state);
})
.catch(err =&gt; {
console.log('an error occured');
});
}
// Rest of the component omitted...
}</code></pre>
<p>In this simple case we fetch data only if our data array is empty. Then we log the updated state after the request or an error message if the <code>Promise</code> rejects..</p>
<h3 id="conclusion">Conclusion</h3>
<p>Creating Redux middlewares is intuitive. You have access to the store dispatcher and the <code>getState </code>function. Use them to access the latest state of your app or dispatch actions.</p>
<p>Some implementation details were omitted here for simplicity. If you want to dig a little deeper, feel free to explore the <code>redux-slim-async</code> middleware <a href="https://github.com/Gabri3l/redux-slim-async" rel="noopener">here</a>.</p>
<p>Give it a ⭐️ if you like it! I built this middleware and currently use it in production to avoid a lot of boilerplate. Feel free to give it a try and provide feedback anytime. Here is another valuable resource to explore middlewares even more, the <a href="https://redux.js.org/advanced/middleware" rel="noopener">redux docs</a>!</p>
<p>You can also follow me on twitter <a href="https://twitter.com/SuperG4bry" rel="noopener">@SuperGabry</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
