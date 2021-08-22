---
card: "https://cdn-media-1.freecodecamp.org/images/1*OxDtmLW8xodYnzAeLKXMqA.jpeg"
tags: [Redux]
description: "This article is about how to think in Redux. We’ll try to und"
author: "Milad E. Fahmy"
title: "The best way to architect your Redux app"
created: "2021-08-16T11:40:28+02:00"
modified: "2021-08-16T11:40:28+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-redux tag-react tag-technology tag-programming tag-tech tag-reactjs tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">The best way to architect your Redux app</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*OxDtmLW8xodYnzAeLKXMqA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*OxDtmLW8xodYnzAeLKXMqA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*OxDtmLW8xodYnzAeLKXMqA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*OxDtmLW8xodYnzAeLKXMqA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*OxDtmLW8xodYnzAeLKXMqA.jpeg" alt="The best way to architect your Redux app">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
const rootReducer = combineReducer({
header: headerReducer,
login: loginReducer,
footer: footerReducer,
common: commonReducer,
product: productReducer,
catalog: catalogReducer,
payment: paymentReducer
const headerReducer = combineReducer({
menu: menuReducer,
search: searchReducer,
location: locationReducer
});</code></pre><p>Our reducer is a replica of what we designed earlier in our state tree. This is the power of visualisation.</p><p>Notice how a reducer contains more reducers. We don’t need to create one huge reducer. It can be easily broken into smaller reducers, as each holds its individual identities and has its own specific operations. This helps us create separation of logic, which is very important for maintaining large apps.</p><p>Now let’s understand how a typical reducer file should be set up, for example searchReducer.</p><pre><code class="language-javascript">// Search Reducer
const initialState = {  payload: [],  isLoading: false,  error: {}};
export function searchReducer( state=initialState, action ) {
switch(action.type) {
case FETCH_SEARCH_DATA:
return {
...state,
isLoading: true
};
case FETCH_SEARCH_SUCCESS:
return {
...state,
payload: action.payload,
isLoading: false
};
case FETCH_SEARCH_FAILURE:
return {
...state,
error: action.error,
isLoading: false
};
case RESET_SEARCH_DATA:
return { ...state, ...initialState }
default:return state;
}
}</code></pre><p>This reducer pattern defines the changes possible in its search state when the search API is called.</p><pre><code class="language-javascript">FETCH_SEARCH_DATA, FETCH_SEARCH_SUCCESS, FETCH_SEARCH_FAILURE, RESET_SEARCH_DATA</code></pre><p>All the above are possible constants that define what possible <strong>actions</strong> can be performed.</p><blockquote><em>Note: It is important to maintain a RESET_SEARCH_DATA action, in case we need to reset data during the unmounting of a component.</em></blockquote><h3 id="step-3-implement-actions">Step 3: Implement Actions</h3><p>Every action that has API calls usually goes through three stages in an app.</p><ol><li>Loading state -&gt; FETCH_SEARCH_DATA</li><li>Success -&gt; FETCH_SEARCH_SUCCESS</li><li>Failure -&gt; FETCH_SEARCH_FAILURE</li></ol><p>Maintaining these action types helps us check the data flow when an API is called in our app.</p><p>Let’s dive into the code to understand what a typical action will look like.</p><pre><code class="language-javascript">export function fetchSearchData(args) {
return async (dispatch) =&gt; {
// Initiate loading state
dispatch({
type: FETCH_SEARCH_DATA
});
try {
// Call the API
const result = await fetchSearchData(
args.pageCount,
args.itemsPerPage
);
// Update payload in reducer on success
dispatch({
type: FETCH_SEARCH_SUCCESS,
payload: result,
currentPage: args.pageCount
});
} catch (err) {
// Update error in reducer on failure
dispatch({
type: FETCH_SEARCH_FAILURE,
error: err
});
}
};
import { connect } from 'react-redux';;
import fetchSearchData from './action/fetchSearchData';
import SearchData from './SearchData';
const Search = (props) =&gt; (
&lt;SearchData
search={props.search}
fetchSearchData={props.fetchSearchData}
/&gt;
);
const mapStateToProps = (state) =&gt; ({
search: state.header.search.payload
});
const mapDispatchToProps = {  fetchSearchData};
export default connect(mapStateToProps, mapDispatchToProps)(Search)</code></pre><p>As you can see, the presentation component is very simple and easy to understand.</p><h3 id="conclusion">Conclusion</h3><p>I would like to mention some of the biggest benefits that I found using Redux:</p><ol><li>It certainly reduces code smell.</li><li>Abstraction of code is easier to achieve.</li><li>Redux also introduces us to other principles like immutability, functional programming, and many others.</li><li>It allows you to visualise each and every action and track them with “time traveling.”</li></ol><p>I hope this article helps you get a clearer picture of why Redux is truly awesome, and how we can utilise the power of visualisation to make maintainable applications.</p><p><em>Follow me on<strong> <a href="https://twitter.com/daslusan" rel="noopener">twitter</a></strong> to get more updates regarding new articles and to stay updated in latest frontend developments. Also share this article on twitter to help others know about it. Sharing is caring<strong> ^_^.</strong></em></p><h3 id="some-helpful-resources">Some helpful resources</h3><ol><li><a href="https://redux.js.org/" rel="noopener">https://redux.js.org/</a></li><li><a href="https://github.com/reduxjs/redux/blob/master/examples" rel="noopener">https://github.com/reduxjs/redux/blob/master/examples</a></li><li><a href="https://medium.com/@rajaraodv/a-guide-for-building-a-react-redux-crud-app-7fe0b8943d0f#.c4yhhvk0d" rel="noopener">https://medium.com/@rajaraodv/a-guide-for-building-a-react-redux-crud-app-7fe0b8943d0f#.c4yhhvk0d</a></li></ol><h3 id="my-previous-articles">My previous articles</h3><ol><li><a href="https://medium.freecodecamp.org/how-to-use-redux-persist-when-migrating-your-states-a5dee16b5ead" rel="noopener">https://medium.freecodecamp.org/how-to-use-redux-persist-when-migrating-your-states-a5dee16b5ead</a></li><li><a href="https://codeburst.io/redux-observable-to-the-rescue-b27f07406cf2" rel="noopener">https://codeburst.io/redux-observable-to-the-rescue-b27f07406cf2</a></li><li><a href="https://codeburst.io/building-webapp-for-the-future-68d69054cbbd" rel="noopener">https://codeburst.io/building-webapp-for-the-future-68d69054cbbd</a></li><li><a href="https://codeburst.io/cors-story-of-requesting-twice-85219da7172d" rel="noopener">https://codeburst.io/cors-story-of-requesting-twice-85219da7172d</a></li></ol>
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
