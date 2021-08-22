---
card: "https://cdn-media-1.freecodecamp.org/images/1*uceu9f-p_A2H2-2xD-6MiQ.jpeg"
tags: [React]
description: "How does your front-end application scale? How do you make su"
author: "Milad E. Fahmy"
title: "Scaling your Redux App with ducks"
created: "2021-08-16T10:25:39+02:00"
modified: "2021-08-16T10:25:39+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-redux tag-javascript tag-programming tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">Scaling your Redux App with ducks</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*uceu9f-p_A2H2-2xD-6MiQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*uceu9f-p_A2H2-2xD-6MiQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*uceu9f-p_A2H2-2xD-6MiQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*uceu9f-p_A2H2-2xD-6MiQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*uceu9f-p_A2H2-2xD-6MiQ.jpeg" alt="Scaling your Redux App with ducks">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
├── actions.js
├── index.js
├── operations.js
├── reducers.js
├── selectors.js
├── tests.js
├── types.js
├── utils.js</code></pre><p>A duck folder MUST:</p><ul><li>contain the entire logic for handling only ONE concept in your app, ex: <em>product</em>, <em>cart</em>, <em>session</em>, etc.</li><li>have an <code>index.js</code> file that exports according to the original duck rules.</li><li>keep code with similar purpose in the same file, such as <em>reducers</em>, <em>selectors</em>, and <em>actions</em></li><li>contain the <em>tests</em> related to the duck.</li></ul><p>For this example, we haven’t used any abstraction built on top of redux. When building software, it’s important to start with the least amount of abstractions. This way, you make sure that the cost of your abstractions doesn’t outweigh the benefits.</p><p>If you need to convince yourself that abstractions can be bad, watch this <a href="https://www.youtube.com/watch?v=mVVNJKv9esE" rel="noopener">awesome talk by Cheng Lou</a>.</p><p>Let’s see what goes into each file.</p><h4 id="types">Types</h4><p>The <em>types </em>file contains the names of the actions that you are dispatching in your application. As a good practice, you should try to scope the names based on the feature they belong to. This helps when debugging more complex applications.</p><pre><code class="language-javascript">const QUACK = "app/duck/QUACK";
const SWIM = "app/duck/SWIM";
export default {
QUACK,
SWIM
};</code></pre><h4 id="actions">Actions</h4><p>This file contains all the action creator functions.</p><pre><code class="language-javascript">import types from "./types";
const quack = ( ) =&gt; ( {
type: types.QUACK
} );
const swim = ( distance ) =&gt; ( {
type: types.SWIM,
payload: {
distance
}
} );
export default {
swim,
quack
};</code></pre><p>Notice how all the actions are represented by functions, even if they are not parametrized. A consistent approach is more than needed in a large codebase.</p><h4 id="operations">Operations</h4><p>To represent chained operations you need a redux <em>middleware</em> to enhance the dispatch function. Some popular examples are: <a href="https://github.com/gaearon/redux-thunk" rel="noopener">redux-thunk</a>, <a href="https://github.com/redux-saga/redux-saga" rel="noopener">redux-saga</a> or <a href="https://github.com/redux-observable/redux-observable" rel="noopener">redux-observable</a>.</p><p>In our case, we use <em>redux-thunk</em>. We want to separate the thunks from the action creators, even with the cost of writing extra code. So we define an operation as a wrapper over actions.</p><p>If the operation only dispatches a single action — doesn’t actually use redux-thunk — we forward the action creator function. If the operation uses a thunk, it can dispatch many actions and chain them with promises.</p><pre><code class="language-javascript">import actions from "./actions";
// This is a link to an action defined in actions.js.
const simpleQuack = actions.quack;
// This is a thunk which dispatches multiple actions from actions.js
const complexQuack = ( distance ) =&gt; ( dispatch ) =&gt; {
dispatch( actions.quack( ) ).then( ( ) =&gt; {
dispatch( actions.swim( distance ) );
dispatch( /* any action */ );
} );
}
export default {
simpleQuack,
complexQuack
};</code></pre><p>Call them operations, thunks, sagas, epics, it’s your choice. Just find a naming convention and stick with it.</p><p>At the end, when we discuss the <em>index</em>, we’ll see that the operations are part of the public interface of the duck. Actions are encapsulated, operations are exposed.</p><h4 id="reducers">Reducers</h4><p>If a feature has more facets, you should definitely use multiple reducers to handle different parts of the state shape. Additionally, don’t be afraid to use <em>combineReducers</em> as much as needed. This gives you a lot of flexibility when working with a complex state shape.</p><pre><code class="language-javascript">import { combineReducers } from "redux";
import types from "./types";
/* State Shape
{
quacking: bool,
distance: number
}
*/
const quackReducer = ( state = false, action ) =&gt; {
switch( action.type ) {
case types.QUACK: return true;
/* ... */
default: return state;
}
}
const distanceReducer = ( state = 0, action ) =&gt; {
switch( action.type ) {
case types.SWIM: return state + action.payload.distance;
/* ... */
default: return state;
}
}
const reducer = combineReducers( {
quacking: quackReducer,
distance: distanceReducer
} );
export default reducer;</code></pre><p>In a large scale application, your state tree will be at least 3 level deep. Reducer functions should be as small as possible and handle only simple data constructs. The <em>combineReducers</em> utility function is all you need to build a flexible and maintainable state shape.</p><p>Check out the <a href="https://github.com/FortechRomania/react-redux-complete-example" rel="noopener">complete example project</a> and look how <em>combineReducers</em> is used. Once in the <em>reducers.js</em> files and then in the <em>store.js</em> file, where we put together the entire state tree.</p><h4 id="selectors">Selectors</h4><p>Together with the operations, the selectors are part of the public interface of a duck. The split between operations and selectors resembles the <a href="https://martinfowler.com/bliki/CQRS.html" rel="noopener">CQRS pattern</a>.</p><p>Selector functions take a slice of the application state and return some data based on that. They never introduce any changes to the application state.</p><pre><code class="language-javascript">function checkIfDuckIsInRange( duck ) {
return duck.distance &gt; 1000;
}
export default {
checkIfDuckIsInRange
};</code></pre><h4 id="index">Index</h4><p>This file specifies what gets exported from the duck folder. It will:</p><ul><li>export as default the reducer function of the duck.</li><li>export as named exports the selectors and the operations.</li><li>export the types if they are needed in other ducks.</li></ul><pre><code class="language-javascript">import reducer from "./reducers";
export { default as duckSelectors } from "./selectors";
export { default as duckOperations } from "./operations";
export { default as duckTypes } from "./types";
export default reducer;</code></pre><h4 id="tests">Tests</h4><p>A benefit of using Redux and the ducks structure is that you can write your tests next to the code you are testing.</p><p>Testing your Redux code is fairly straight-forward:</p><pre><code class="language-javascript">import expect from "expect.js";
import reducer from "./reducers";
import actions from "./actions";
describe( "duck reducer", function( ) {
describe( "quack", function( ) {
const quack = actions.quack( );
const initialState = false;
const result = reducer( initialState, quack );
it( "should quack", function( ) {
expect( result ).to.be( true ) ;
} );
} );
} );</code></pre><p>Inside this file you can write tests for reducers, operations, selectors, etc.</p><p>I could write a whole different article about the benefits of testing your code, there are so many of them. Just do it!</p><h3 id="so-there-it-is">So there it is</h3><p>The nice part about re-ducks is that you get to use the same pattern for all your redux code.</p><p>The feature-based split for the redux code is much more flexible and scalable as your application codebase grows. And the function-based split for views works when you build small components that are shared across the application.</p><p>You can check out a full react-redux-example codebase <a href="https://github.com/FortechRomania/react-redux-complete-example" rel="noopener">here</a>. Just keep in mind that the repo is still under active development.</p><p>How do you structure your redux apps? I’m looking forward to hearing some feedback on this approach I’ve presented.</p><p>If you found this article useful, click on the green heart below and I will know my efforts are not in vain.</p>
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
