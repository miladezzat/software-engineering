---
card: "https://cdn-media-1.freecodecamp.org/images/1*0ern_Rqaw5d5tTuYRs78IQ.jpeg"
tags: [Redux]
description: "by Luca Matteis"
author: "Milad E. Fahmy"
title: "Test-Driven Development with React and Redux, using Redux TDD"
created: "2021-08-16T10:21:33+02:00"
modified: "2021-08-16T10:21:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-redux tag-react tag-testing tag-functional-programming tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">Test-Driven Development with React and Redux, using Redux TDD</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*0ern_Rqaw5d5tTuYRs78IQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*0ern_Rqaw5d5tTuYRs78IQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*0ern_Rqaw5d5tTuYRs78IQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*0ern_Rqaw5d5tTuYRs78IQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*0ern_Rqaw5d5tTuYRs78IQ.jpeg" alt="Test-Driven Development with React and Redux, using Redux TDD">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
it('should test the arrows going in and out of the VIEW', () =&gt; {
// input to the view
wrapper = shallow(&lt;Counter counter={1} /&gt;);
expect(wrapper.contains(&lt;span&gt;1&lt;/span&gt;)).toBeTruthy();
// output of the view
wrapper = shallow(&lt;Counter onClick={incrementAction} /&gt;);
wrapper.find(button).simulate('click');
expect(incrementAction).toHaveBeenCalled();
})
// reducers.test.js
it('should test the arrows going in and out of the REDUCER', () =&gt; {
// input to the reducer
const newState = reducer({ count: 0 }, incrementAction())
// output of the reducer
expect(newState).toEqual({ count: 1 });
})
// actions.test.js
it('should test the arrows going in and out of the ACTION', () =&gt; {
expect(incrementAction()).toMatchObject({ type: 'INCREMENT' });
&lt;Counter
onIncrement={incrementActionMock}
onReset={resetActionMock}
count={state.count} /&gt;
))
.simulate(wrapper =&gt; wrapper.find('button').simulate('click')).action(incrementActionMock).toMatchAction({ type: 'INCREMENT' })      .reducer(reducer).toMatchState({ count: 10 })      .view().contains(&lt;span&gt;10&lt;/span&gt;)
.simulate(wrapper =&gt; wrapper.find('button').simulate('click')).action(resetActionMock).toMatchAction({ type: 'RESET' })      .reducer(reducer).toMatchState({ count: 0 })
.view().contains(&lt;span&gt;0&lt;/span&gt;)</code></pre><p>There’s a lot of dot-chaining in this code, but there’s a reason for that. Since Redux’s data-flow is unidirectional, testing its behavior fits perfectly with a pipeline model. Which means chaining.</p><p>Each operator of the pipeline is in fact a simple unit-test.</p><p>The insight is that each output of a Redux unidirectional data-flow step should feed into the next step. This allows a more TDD-friendly development.</p><h4 id="let-s-look-at-each-step">Let’s look at each step</h4><p>1. Initialize the flow with a state and a view<br>Other operators in the pipeline need this make assertions about current state and view:</p><pre><code class="language-jsx">ReduxTdd({ count: 9 }, state =&gt; shallow(
&lt;Counter
onIncrement={incrementActionMock}
onReset={resetActionMock}
count={state.count} /&gt;
&lt;Counter
onClick={incrementAsyncAction}
counter={state.count} /&gt;
))
.simulate(wrapper =&gt; wrapper.find(button).simulate('click'))
.action(incrementAsyncAction).toMatchAction({ type: 'INCREMENT_ASYNC' })
.epic(handleIncrementAsyncEpic, { getJSON: () =&gt;
Observable.of({ foo: 'bar' })
})
// now since we mocked the epic,
// we can continue normal action-&gt;reducer-&gt;view testing
.action(incrementSuccessAction).toMatchAction(
{ type: 'INCREMENT_SUCCESS' }
)
.reducer(reducer).toMatchState({ count: 10 })
.view().contains(&lt;span&gt;10&lt;/span&gt;)
.epic(handleIncrementAsyncEpic, { getJSON: () =&gt;
// let's throw this time
Observable.throw({ error: true })
})
// since the epic threw an error,
// we expect it to call the incrementFailureAction function
.action(incrementFailureAction).toMatchAction(
{ type: 'INCREMENT_FAILURE' }
)
// it will not increase it to 11
.reducer(reducer).toMatchState({ count: 10 })
.view().contains(&lt;span&gt;10&lt;/span&gt;)</code></pre><p>In the above example the important part of the pipeline is the <code>.epic()</code> operator.</p><p>We are testing that:<br>The epic <code>handleIncrementAsyncEpic</code> will be executed with an observable emitting an action. This is returned by the earlier <code>.action</code> operator (<code>{ type: 'INCREMENT_ASYNC' }</code>) and the mocked <code>getJSON</code> observable. We will force the observable to emit a successful response.</p><p>This is plugged into the Redux flow. We’re literally visualizing each part of the Redux data-flow diagram using code.</p><p>The epic will execute immediately and the resulting action <code>{ type: 'INCREMENT_SUCCESS' }</code> will be passed to the next operator in the flow.</p><h4 id="redux-thunk">Redux-thunk</h4><p>Thunks can also be plugged in the pipeline. But they are harder to test because they’re not pure functions:</p><pre><code class="language-js">.thunk(incrementAsyncThunk, () =&gt;
Promise.resolve({ type: 'INCREMENT_SUCCESS' })
)
.toMatchActions([
{ type: 'INCREMENT_ASYNC' }, { type: 'INCREMENT_SUCCESS' }
&lt;GithubTrending
projects={state.projects}
loading={state.loading}
onRefresh={refreshAction} /&gt;
))</code></pre><p>Let’s immediately test if our view looks OK. We’re extending the chaining from the above example:</p><pre><code class="language-js">.view()
.contains(&lt;div class="loading" /&gt;, false) // shouldn't show loading
.contains(&lt;div class="projects"&gt;No projects&lt;/div&gt;)
.contains(&lt;button class="refresh"&gt;refresh&lt;/button&gt;)</code></pre><p>Before implementing the component, we can simulate a <code>refresh</code> and check that the correct action is called:</p><pre><code class="language-js">.simulate(wrapper =&gt; wrapper.find('.refresh').simulate('click'))
.action(refreshAction).toMatchAction({ type: 'REFRESH' })</code></pre><p>Then we make sure that our state is changed correctly. In this step we are passing the earlier action to <code>githubReducer</code>. We should expect it to set the <code>loading</code> attribute to <code>true</code>:</p><pre><code class="language-js">.reducer(githubReducer).toMatchState({ loading: true })</code></pre><p>At this point we’re in the state where the projects are being loaded from the server so our <code>.view</code> should look something like this:</p><pre><code class="language-js">.view().contains(&lt;div class="loading" /&gt;)</code></pre><p>Again, we haven’t written a single piece of implementation code yet.</p><p>Let’s continue the flow by going in the state where we’ve received data from the server and display the response. Here the <code>.epic</code> will call <code>handleRefreshEpic</code> with the earliest executed <code>.action</code> in the pipeline — in this case <code>refreshAction</code>. As its output to the next operator, we’re forcing its <code>getJSON</code> dependency to output a response. In case an epic emits multiple actions, we can call <code>action-&gt;reducer</code> multiple times to handle them.</p><pre><code class="language-js">.epic(handleRefreshEpic, { getJSON: () =&gt;
Observable.of([
{ name: 'redux-tdd' }, { name: 'redux-cycles' }
])
})
.action(refreshDoneAction).toMatchAction({
type: 'REFRESH_DONE',
payload: [{ name: 'redux-tdd' }, { name: 'redux-cycles' }],
})
.reducer(githubReducer).toMatchState({
loading: false,
projects: [{ name: 'redux-tdd' }, { name: 'redux-cycles' }]
})</code></pre><p>I’m being verbose to show what’s going on. You’d obviously want to put the mocked response in a variable and pass that along the tests.</p><p>Next, let’s make sure the <code>.view</code> looks as intended after the earlier changes of state:</p><pre><code class="language-js">.view()
.contains(&lt;div class="loading" /&gt;, false) // shouldn't show loading
.contains(&lt;div class="projects"&gt;
&lt;div&gt;redux-tdd&lt;/div&gt;
&lt;div&gt;redux-cycles&lt;/div&gt;
&lt;/div&gt;)</code></pre><p>And we’re done!</p><p>We can now start writing the actual implementation code to try to make each of our tests pass.</p><p>Let’s start by making the first test operator pass, hence the view:</p><pre><code class="language-jsx">function GithubTrending({ projects, loading, onRefresh }) {
return &lt;div&gt;
{ loading &amp;&amp; &lt;div class="loading" /&gt; }
&lt;div class="projects"&gt;
{ !projects.length &amp;&amp; 'No projects' }
{ projects.map(p =&gt; &lt;div&gt;{p.name}&lt;/div&gt;) }
&lt;/div&gt;
&lt;button class="refresh" onClick={onRefresh}&gt;refresh&lt;/button&gt;
&lt;/div&gt;
}</code></pre><p>Next let’s make our <code>.action</code>s pass:</p><pre><code class="language-js">function refreshAction() {
return { type: 'REFRESH' };
}
function refreshDoneAction(payload) {
return { type: 'REFRESH_DONE', payload };
}</code></pre><p>Next is our reducer:</p><pre><code class="language-js">const initialState = { projects: [], loading: false };
function githubReducer(state = initialState, action) {
switch (action.type) {
case 'REFRESH':
return { ...state, loading: true };
case 'REFRESH_DONE':
return { ...state, loading: false, projects: action.payload };
default:
return state;
}
}</code></pre><p>And our epic:</p><pre><code class="language-js">function handleRefreshEpic(action$, store, { getJSON }) {
return action$.ofType('REFRESH')
.mergeMap(() =&gt;
getJSON('http://foo.bar')
.map(response =&gt; refreshDoneAction(response))
);
shallow(
&lt;Counter
onIncrement={incrementAction}
counter={state.count} /&gt;
),
shallow(
&lt;Modal
show={state.show} /&gt;
)
]))</code></pre><p>We can simulate things just like before and we get the wrappers as an array.</p><p>We want to show the <code>&lt;Modal /&gt;</code> when the count state variable is odd:</p><pre><code class="language-js">.simulate(([ counterWrapper, modalWrapper ]) =&gt;
counterWrapper.props.onIncrement() // simulate a click
)
.action(incrementAction).toMatchAction({ type: 'INCREMENT' })
.reducer(myReducer).toMatchState({ count: 1, show: true })
.view().contains(([ counter, modal ]) =&gt;
counter.contains(&lt;span&gt;1&lt;/span) &amp;&amp;
modal.contains(&lt;div class="showModal" /&gt;)
action(incrementActionMock)({ type: 'INCREMENT' }),
reducer(reducer)({ count: 1 }),
view(&lt;div&gt;{1}&lt;/div&gt;)
)(ReduxTdd({ count: 0 }, state =&gt;
&lt;Counter
onIncrement={incrementActionMock}
count={state.count} /&gt;
))
run(myTest)</code></pre><p>The main advantage of this approach is that we are describing our test flows using <code><a href="https://lodash.com/docs/4.17.4#flow" rel="nofollow noopener">_.flow</a>,</code>rather than executing them. The <code>run</code> function call at the end is what’s actually going to execute our <code>expect()s</code>.</p><p>This declarative style can obviously be achieved with dot-chain syntax as well. But point-free function composition offers other benefits.</p><p>For instance it allows us to extend parts of the flow with our own implementations, instead of being tied to the <a href="https://medium.com/making-internets/why-using-chain-is-a-mistake-9bc1f80d51ba" rel="noopener">functions exposed by the library</a>:</p><pre><code class="language-js">const myIncrementAction = flow(
action(incrementAction),
action =&gt; { // transform action in some way }
flow(
action(increment),
reducer(githubReducer),
view(&lt;div&gt;1&lt;/div&gt;)
), // this branch has state { count: 1 }
flow(
action(decrement),
reducer(githubReducer),
view(&lt;div&gt;-1&lt;/div&gt;),
flow(
action(increment),
reducer(githubReducer),
view(&lt;div&gt;0&lt;/div&gt;),
)
)({ count: 0 }) // don't get state from earlier branch
)({ count: 0 })</code></pre><p>Again I’m being verbose. But we’re dealing with pure functions. For example, we can define a <code>simulateClick(increment)</code> to avoid some of the duplicate code.</p><p>I’d argue that having these kind of function trees describing your test flows, rather than a bunch of <code>it(‘should do this’)</code> blocks, is an interesting approach that should be studied more.</p><p>We can test states of our UIs that read more like specifications of what the user has done.</p><p>If a new combination comes to mind we can add it to the tree:</p><pre><code class="language-js">flow(
branch(
clickButton, shouldShowModal, clickCloseModal, shouldCloseModal
),
branch(
clickCloseModal,
nothingShouldHappen,
branch(clickButton, shouldShowModal)
clickButton,
shouldShowSpinner
)
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
