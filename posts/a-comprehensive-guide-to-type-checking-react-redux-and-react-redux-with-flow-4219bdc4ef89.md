---
card: "https://cdn-media-1.freecodecamp.org/images/1*VeM-5lsAtrrJ4jXH96h5kg.png"
tags: [Redux]
description: by Fabian Terh
author: "Milad E. Fahmy"
title: "A comprehensive guide to type checking React, Redux, and React-Redux with Flow"
created: "2021-08-15T19:44:39+02:00"
modified: "2021-08-15T19:44:39+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-redux tag-javascript tag-react tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">A comprehensive guide to type checking React, Redux, and React-Redux with Flow</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*VeM-5lsAtrrJ4jXH96h5kg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*VeM-5lsAtrrJ4jXH96h5kg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*VeM-5lsAtrrJ4jXH96h5kg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*VeM-5lsAtrrJ4jXH96h5kg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*VeM-5lsAtrrJ4jXH96h5kg.png" alt="A comprehensive guide to type checking React, Redux, and React-Redux with Flow">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Fabian Terh</p>
<h1 id="a-comprehensive-guide-to-type-checking-react-redux-and-react-redux-with-flow">A comprehensive guide to type checking React, Redux, and React-Redux with Flow</h1>
<p>This article is divided into 4 sections:</p>
<ol>
<li>Type checking Redux actions, action creators, and reducers</li>
<li>Installing Flow library definitions</li>
<li>Type checking application state</li>
<li>Type checking Redux store and dispatch</li>
</ol>
<p>While there are a bunch of guides on the first section which are immensely helpful, I found only a paucity of articles on 3 and 4. After a long session of Google searches, diving into source code, and trial and error, I decided to put together what I’ve learned and write this tutorial as a one-stop guide to type checking your React + Redux + React-Redux application with Flow.</p>
<h3 id="1-type-checking-redux-actions-action-creators-and-reducers">1. Type checking Redux actions, action creators, and reducers</h3>
<h4 id="actions">Actions</h4>
<p>Redux actions are essentially vanilla Javascript objects with a mandatory <code>type</code> property:</p><pre><code>// This is an action{  type: 'INCREASE_COUNTER',  increment: 1}</code></pre>
<p>Following best practices, you may want to define and use <a href="https://redux.js.org/basics/actions" rel="noopener">action type constants</a> instead. If so, the above snippet would probably look something like this:</p><pre><code>const INCREASE_COUNTER = 'INCREASE_COUNTER';</code></pre><pre><code>// This is an action{  type: INCREASE_COUNTER,  increment: 1}</code></pre>
<p>Type checking is easy (we’re dealing with regular JavaScript here):</p><pre><code>type $action = {  type: 'INCREASE_COUNTER',  increment: number};</code></pre>
<p>Note that you cannot substitute the <a href="https://flow.org/en/docs/types/literals/" rel="noopener">literal string type</a> with the constant <code>INCREASE_COUNTER</code>. This is a <a href="https://flow.org/try/#0PTACDMBsHsHcCh6QKYBcAEAjAhgJ3QLzoDkOuxA3EmuuNNAFxZ6ElmVA" rel="noopener">limitation</a> of Flow itself.</p>
<h4 id="action-creators">Action creators</h4>
<p>Since action creators are just functions that return actions, we’re still dealing with regular Javascript. This is how a type checked action creator can look like:</p><pre><code>function increaseCounter(by: number): $action {  return {    type: INCREASE_COUNTER, // it's okay to use the constant here    increment: by  };}</code></pre>
<h4 id="reducers">Reducers</h4>
<p>Reducers are functions that <em>handle actions</em>. They receive a state and an action, and return the new state. At this juncture, it’s important to think about how your state will look like (state shape). In this very simple example, the state shape comprises of only a single key <code>counter</code> which takes on a <code>number</code> type value:</p><pre><code>// State shape{  counter: &lt;number&gt;}</code></pre>
<p>And so your reducer could look like this:</p><pre><code>const initialState = { counter: 0 };</code></pre><pre><code>function counter(state = initialState, action) {  switch (action.type) {    case INCREASE_COUNTER:      return Object.assign({}, state, {        counter: action.increment + state.counter      });        default:      return state;  }};</code></pre>
<p><em>Note: In this particular example, </em><code>Object.assign({}, state, { ... })</code> <em>is redundant because the store consists only of 1 key/value pair. I could just as easily return the last argument to the function. However, I included the full implementation for correctness.</em></p>
<p>Typing the state and reducer is simple enough. Here is the typed<em> </em>version of the above snippet:</p><pre><code>type $state = {  +counter: number};</code></pre><pre><code>const initialState: $state = { counter: 0 };</code></pre><pre><code>function counter(  state: $state = initialState,  action: $action): $state {    switch (action.type) {    case INCREASE_COUNTER:      return Object.assign({}, state, {        counter: action.increment + state.counter      });        default:      return state;  }};</code></pre>
<h3 id="installing-flow-library-definitions">Installing Flow library definitions</h3>
<p>Flow <a href="https://flow.org/en/docs/libdefs/" rel="noopener">library definitions</a> (or libdefs) provide type definitions for third-party modules. In this case, we are using React, Redux, and React-Redux. Instead of typing these modules and their functions manually, you can install their type definitions using <code>flow-typed</code>:</p><pre><code>npm install -g flow-typed</code></pre><pre><code>// Automatically download and install all relevant libdefsflow-typed install</code></pre><pre><code>// Orflow-typed install &lt;package&gt;@&lt;version&gt; // e.g. redux@4.0.0</code></pre>
<p>Library definitions are installed to the <code>flow-typed</code> folder, which lets Flow work out of the box without any further configuration (<a href="https://github.com/flowtype/flow-typed/wiki/Importing-And-Using-Type-Definitions" rel="noopener">details</a>).</p>
<h3 id="type-checking-application-state">Type checking application state</h3>
<p>Previously, we have already typed the state like this:</p><pre><code>type $state = {  +counter: number};</code></pre>
<p>While this works for a simple example like the one above, it breaks down once your state becomes significantly larger. You would have to manually edit <code>type $state</code> every time you introduce a new reducer or modify an existing one. You also wouldn’t want to keep all your reducers in the same file. What you want to do instead is to refactor your reducers into separate modules, and use Redux’s <code>combineReducers</code> function.</p>
<p>Since the focus of this article is on <em>type checking</em> a React/Redux/React-Redux application, and not on building one, I’m going to assume you are familiar with the <code>combineReducers</code> function. If not, head over to <a href="https://redux.js.org/basics/reducers" rel="noopener">Redux’s tutorial</a> to learn all about it.</p>
<p>Suppose we introduce a new action/reducer pair in a separate module:</p><pre><code>// playSong.js</code></pre><pre><code>export const PLAY_SONG = 'PLAY_SONG';</code></pre><pre><code>// Typing the actionexport type $playSongAction = {  type: 'PLAY_SONG',  song: ?string};</code></pre><pre><code>// Typing the action creatorexport function playSong(song: ?string): $playSongAction {  return {    type: PLAY_SONG,    song: song  };};</code></pre><pre><code>// Typing arg1 and the return value of the reducer [*1]export type $song = ?string;</code></pre><pre><code>// Typing the state [*1]export type $songState = {  +song: $song};</code></pre><pre><code>// [*1][*2]const initialValue: $song = null;</code></pre><pre><code>// Typing the reducer [*1][*3]function song(  state: $song = initialValue,  action: $playSongAction): $song {    switch (action.type) {    case PLAY_SONG:      return action.song;        default:      return state;  }};</code></pre>
<p>[*1]: If we’re using the <code>combineReducers</code> function, it’s important to note that <strong>your reducer should no longer be returning the state, but rather the <em>value to the key in the state</em></strong>. In this regard, I think <a href="https://redux.js.org/basics/reducers" rel="noopener">Redux’s tutorial</a> is a bit lacking in clarity, as it does not state this explicitly, although it is clear from the example code snippets.</p>
<p>[*2]: Reducers are not allowed to return <code>undefined</code>, so we have to settle for <code>null</code>.</p>
<p>[*3]: Since the reducer is no longer receiving and returning a state in the form of <code>{ song: string }</code>, but rather the <em>value</em> to the <code>song</code> key in the state object, we need to change the types of its first argument and return value from <code>$songState</code> to <code>$song</code>.</p>
<p>We modify and refactor <code>increaseCounter</code> as well:</p><pre><code>// increaseCounter.js</code></pre><pre><code>export const INCREASE_COUNTER = 'INCREASE_COUNTER';</code></pre><pre><code>export type $increaseCounterAction = {  type: 'INCREASE_COUNTER',  increment: number};</code></pre><pre><code>export function increaseCounter(by: number): $action {  return {    type: INCREASE_COUNTER,    increment: by  };};</code></pre><pre><code>export type $counter = number;</code></pre><pre><code>export type $counterState = {  +counter: $counter};</code></pre><pre><code>const initialValue: $counter = 0;</code></pre><pre><code>function counter(  state: $counter = initialValue,  action: $increaseCounterAction): $counter {    switch (action.type) {    case INCREASE_COUNTER:      return action.increment + state;        default:      return state;  }};</code></pre>
<p>Now we have 2 action/reducer pairs.</p>
<p>We can create a new <code>State</code> type to store the type of our application state:</p><pre><code>export type State = $songState &amp; $counterState;</code></pre>
<p>This is a Flow <a href="https://flow.org/en/docs/types/intersections/" rel="noopener">intersection type</a>, and is equivalent to:</p><pre><code>export type State = {  song: $song,  counter: $counter};</code></pre>
<p>If you don’t want to create <code>$songState</code> and <code>$counterState</code> only for use in intersection-typing the application state <code>State</code>, that’s perfectly fine too — go with the second implementation.</p>
<h3 id="type-checking-redux-store-and-dispatch">Type checking Redux store and dispatch</h3>
<p>I found that Flow was reporting errors in my containers (in the context of the <a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0" rel="noopener">container/component paradigm</a>).</p><pre><code>Could not decide which case to select. Since case 3 [1] may work but if it doesn't case 6 [2] looks promising too. To fix add a type annotation to dispatch [3].</code></pre>
<p>This was with regard to my <code>mapDispatchToProps</code> function. Cases 3 and 6 are as follows:</p><pre><code>// flow-typed/npm/react-redux_v5.x.x.js</code></pre><pre><code>// Case 3declare export function connect&lt;  Com: ComponentType&lt;*&gt;,  A,  S: Object,  DP: Object,  SP: Object,  RSP: Object,  RDP: Object,  CP: $Diff&lt;$Diff&lt;ElementConfig&lt;Com&gt;;, RSP&gt;, RDP&gt;  &gt;(  mapStateToProps: MapStateToProps&lt;S, SP, RSP&gt;,  mapDispatchToProps: MapDispatchToProps&lt;A, DP, RDP&gt;): (component: Com) =&gt; ComponentType&lt;CP &amp; SP &amp; DP&gt;;</code></pre><pre><code>// Case 6declare export function connect&lt;  Com: ComponentType&lt;*&gt;,  S: Object,  SP: Object,  RSP: Object,  MDP: Object,  CP: $Diff&lt;ElementConfig&lt;Com&gt;, RSP&gt;  &gt;(  mapStateToProps: MapStateToProps&lt;S, SP, RSP&gt;,  mapDispatchToPRops: MDP): (component: Com) =&gt; ComponentType&lt;$Diff&lt;CP, MDP&gt; &amp; SP&gt;;</code></pre>
<p><strong>I don’t know why this error occurs.</strong> But as the error hints, typing <code>dispatch</code> fixes it. And if we’re typing <code>dispatch</code>, we might as well type <code>store</code> too.</p>
<p>I couldn’t find much documentation on this aspect of typing a Redux/React-Redux application. I learned by diving into the libdefs and looking at the <a href="https://github.com/reduxjs/redux/tree/master/examples/todos-flow/src" rel="noopener">source code for other projects</a> (albeit a demonstration project). If you have any insights, please let me know so I can update this post (with proper attribution, of course).</p>
<p>In the meantime, I’ve found that this works:</p><pre><code>import type {  Store as ReduxStore,  Dispatch as ReduxDispatch} from 'redux';</code></pre><pre><code>// import any other variables and types you may need,// depending on how you organized your file structure.</code></pre><pre><code>// Reproduced from earlier onexport type State = {  song: $song,  counter: $counter};</code></pre><pre><code>export type Action =   | $playSongAction  | $increaseCounterAction</code></pre><pre><code>export type Store = ReduxStore&lt;State, Action&gt;;</code></pre><pre><code>export type Dispatch = ReduxDispatch&lt;Action&gt;;</code></pre>
<p>Heading into your container modules, you can then proceed to type <code>mapDispatchToProps</code> as follows: <code>const mapDispatchToProps = (dispatch: Dispatch) =&gt; { ...</code> };</p>
<h3 id="wrapping-up">Wrapping up</h3>
<p>This has been a pretty long post, and I hope you found it useful. I wrote it partly because of a dearth of resources regarding the later sections of this article (and partly to organize my thoughts and consolidate what I’ve learned).</p>
<p>I can’t guarantee that the guidance in this article follows best practices, or is conceptually sound, or even 100% correct. If you spot any errors or issues, please let me know!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
