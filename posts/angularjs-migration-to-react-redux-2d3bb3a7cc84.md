---
card: "https://cdn-media-1.freecodecamp.org/images/1*BHCxD-xbmOPDcEMiTXsPxw.jpeg"
tags: [JavaScript]
description: by Panagiotis Vrs
author: "Milad E. Fahmy"
title: "From AngularJS to React & Redux — how to migrate your web app"
created: "2021-08-15T19:51:44+02:00"
modified: "2021-08-15T19:51:44+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-angularjs tag-react tag-redux tag-es6 ">
<header class="post-full-header">
<h1 class="post-full-title">From AngularJS to React &amp; Redux — how to migrate your web app</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*BHCxD-xbmOPDcEMiTXsPxw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*BHCxD-xbmOPDcEMiTXsPxw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*BHCxD-xbmOPDcEMiTXsPxw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*BHCxD-xbmOPDcEMiTXsPxw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*BHCxD-xbmOPDcEMiTXsPxw.jpeg" alt="From AngularJS to React &amp; Redux — how to migrate your web app">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Panagiotis Vrs</p>
<h1 id="from-angularjs-to-react-redux-how-to-migrate-your-web-app">From AngularJS to React &amp; Redux — how to migrate your web app</h1>
<p>Some days ago I wanted to start implementing something I had in mind for the past 4 months: Migrating an AngularJS project to React with Redux state management.</p>
<p>I did some research around the topic. And although there were some articles around Angular-to-React migration, I got lost. Also I couldn't find how you can have Redux over the project only for React.</p>
<p>There are hundreds of projects out there that will have to decide in the next years to move to another framework as AngularJS and its libraries will have less and less support from the community.</p>
<p>I though that this can be easier so that’s why i did it and kept some notes so I can share my findings.</p>
<p>Starting with AngularJS migration to React is not an easy task. And what happens if you want to start using Redux for state management as well? Well this doesn’t have to be a nightmare!</p>
<p>My project had already been switched to ES6 with Webpack, so that was one thing that helped a lot. So I suggest before making such a migration, to start using Webpack and module dependencies ASAP.</p>
<h3 id="my-needs">My needs</h3>
<p>I wanted to start moving that project from AngularJS to React so I could start using all the new features modern web has to offer regarding speed, splitting the code to smaller components and of course testing.</p>
<p>I’m not going to lie — I wasn’t testing enough or really at all in this project. Two months before this migration, I started implementing some testing principles around the project so I could keep in track in some tasks. The bottom line — it was amazingly difficult to set up testing and coverage, and in the end it it took some time to run the tasks.</p>
<h3 id="start-shaping-it-up">Start shaping it up</h3>
<p>The first thing that I did was to install all the necessary dependencies like react, react-dom, and react-redux. You can see also the versions I am using below.</p>
<p>The coolest plugin of all was react2angular, which I used to translate all the React components into Angular components.</p>
<p>Then for development we need to install babel dependencies to have all the cool ES6 features. Keep in mind that I already had Babel, and I was only pasting this in to see versions and to keep aligned.</p>
"dependencies": {
"ng-redux": "^3.4.0-beta.1",
"prop-types": "^15.5.10",
"react": "^15.5.4",
"react-dom": "^15.5.4",
"react-redux": "^5.0.5",
"react2angular": "^1.1.3",
"redux": "^3.6.0",
"redux-devtools": "^3.4.0",
"redux-thunk": "^2.2.0",
},
"devDependencies": {
"babel-core": "^6.24.1",
"babel-loader": "^6.4.1",
"babel-preset-es2015": "^6.24.1",
"babel-preset-react": "^6.24.1",
"babel-preset-stage-2": "^6.24.1",
"webpack": "^2.2.0",
"webpack-dev-server": "^2.2.0",
}
}</code></pre>
<figcaption>packages-sample.json</figcaption>
</figure>
<p>All done? Nice!</p>
<h3 id="project-structure">Project Structure</h3>
<p>This is what I wanted to do having this structure for the whole project. I saw it on a complete MERN project on Github because I used it on a small project to see how it will turn out its very simple and efficient. Splitting for each page (container component) and each page to have their components. You can also have a folder outside name components as well to keep all the global components there. Refer here if the code examples makes no sense ;)</p>
<p>Also you can see how the MERN project handles the server side rendering when the migration is done (another great feature you can use from React!) in order to make it done.</p>
<p>I don’t have the index etc files in this structure its just focusing on the react components.</p>
│   ├── common - is not a module of the app. This holds utils for the react app.
│   │   └── utils
│   ├── ratings
│   │   ├── components
│   │   │   ├── RatingItem
│   │   │   │   ├── RatingItem.js
│   │   │   │   └── RatingItem.less
│   │   │   ├── RatingList
│   │   │   │   ├── RatingList.js
│   │   │   │   └── RatingList.less
│   │   │   ├── RatingsPage.js
│   │   │   ├── RatingsReducer.js
│   │   │   └── RatingsActions.js
├── config - all config files for development and production
└── locales - locale files</code></pre>
<figcaption>Code Directory Structure</figcaption>
</figure>
<h3 id="create-your-first-component">Create your first component</h3>
<p>Making your first component is relatively easy. I expect that you already familiar with react so I will just jump in the code. You can split your code to as many components you seem fits your needs. An example of a component is like the below. This is how I regularly switched small (Presentational) components of maybe a ul with data or each item of a ul.</p>
import PropTypes from "prop-types";
function RatingsItem(props) {
return (
&lt;div&gt;
{props.rating.text}
&lt;/div&gt;
);
}
RatingsItem.propTypes = {
rating: PropTypes.shape({
id: PropTypes.string.isRequired,
text: PropTypes.bool.isRequired,
reported: PropTypes.bool.isRequired,
}),
};
export default RatingsItem;</code></pre>
<figcaption>RatingsItem.js</figcaption>
</figure>
<p>This small components can now be imported to our project. When you define your module in the AngularJS app you can import the component and with react2angular dependency change it to AngularJS directive/component.</p><pre><code class="language-js">.component("ratingsItem", react2angular(RatingsItem))</code></pre>
<p>Now on the .html if you use &lt;ratings-item&gt;&lt;/ratings-item&gt; the component will load. Congrats this is your first react component to Angular !</p>
<p>Hope you didn’t got lost. Are you with me? … good. Remember!</p>
<blockquote>This is my first writing so … be gentle with your judgement !</blockquote>
<p>Next step is that you want to change the whole module to react. This is going to be a container component in our react app. I split those in to pages. Before we proceed to that though we need to start using redux actions and reducers. This will help us in the next step when we will combine reducers with redux!</p>
<p>So in order to implement some redux for our container components first you will need to define your reducer and action for this Rating component. You can see the <a href="https://gist.github.com/panvourtsis/05a6b1118b348c792f64fb18c2e4a534" rel="noopener">app structure</a> above to see the naming and position of those in my project.</p>
<p>We will not explain actions and reducers in this topic as I keep as a fact that you are already familiar with Redux actions and reducers</p>
<p>My reducer looks like this.</p>
const initialState = { list: [] };
const RatingsReducer = (state = initialState, action) =&gt; {
switch (action.type) {
case ADD_RATINGS :
return {
...state,
list: action.ratings,
};
default:
return state;
}
};
/* Selectors */
// Get all ratings
export const getRatings = state =&gt; state.Ratings.list;
// Export Reducer
export default RatingsReducer;</code></pre>
<figcaption>RatingsReducer.js</figcaption>
</figure>
<p>The Actions looks like this.</p>
export const ADD_RATINGS = "ADD_RATINGS";
export function addRatings(ratings) {
return {
type: ADD_RATINGS,
ratings,
};
}
export function fetchRatings() {
return (dispatch) =&gt; {
return callApi("ratings").then(ratings =&gt; {
dispatch(addRatings(ratings));
});
};
}</code></pre>
<figcaption>RatingsActions.js</figcaption>
</figure>
<p>Simple! Doing two things just for the sake of testing that is working. you cna use your own.</p>
<p>So this is going to be my ratings page. This is how my page is looking. you can also pass a “hi there” inside the div so you can be sure you have something without data. Again just for testing.</p>
import React, { Component } from "react";
import PropTypes from "prop-types";
// Import Components
import RatingList from "./components/RatingList/RatingList";
// Import Actions
import { fetchRatings } from "./RatingsActions";
// import Reducer
import { getRatings } from "./RatingsReducer";
class RatingsPage extends Component {
debugger;
render() {
return (
&lt;div&gt;
&lt;RatingList ratings={this.props.ratings} /&gt;
&lt;/div&gt;
);
}
}
// Retrieve data from store as props
const mapStateToProps = (state) =&gt; {
return {
ratings: getRatings(state)
}
};
const mapDispatchToProps = (dispatch) =&gt; {
return {
dispatch,
fetchRatings: dispatch(fetchRatings()),
};
}
RatingsPage.propTypes = {
ratings: PropTypes.arrayOf(PropTypes.object),
dispatch: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(RatingsPage);</code></pre>
<figcaption>RatingsPage.js</figcaption>
</figure>
<p>Now we will need to use ng-redux in order to create a store and pass that store down to our components. What we have to do is to combine all of our application reducers like we do in react so I created a separate file for that in order to use that in the future when i’ll remove AngularJS. I am calling this “Reducers” and it looks like this.</p>
<p>What it actually does is you define here all your application reducers in order to combine them and in the next step we “feed” those reducers to the redux for the state. You will see I only have Ratings for now but you can (and must) fill any new component along the way in here.</p>
import Ratings from "./ratings/RatingsReducer";
// Combine all reducers into one root reducer
export const RootReducer = combineReducers({
Ratings
});</code></pre>
<figcaption>Reducers.js</figcaption>
</figure>
<p>Now we need to import the redux. In our main file when we define the whole application we import combined reduces, ngRedux, redux thunk and pass it as module dependency.</p><pre><code class="language-js">import ngRedux from "ng-redux";
import thunk from "redux-thunk";
import {RootReducer} from "./Reducers";
angular
.module(
"funkmartini",
[
...,
ngRedux,
.....
]
)
.config(configApp)
.run(runApp);</code></pre>
<p>In your app configuration I am passing the $ngReduxProvider and I am creating my store. I am also passing the redux devtools if you want to put it in your project, if not just remove from the createStoreWith function.</p><pre><code class="language-js">$ngReduxProvider.createStoreWith(RootReducer, [thunk], [$window.__REDUX_DEVTOOLS_EXTENSION__()]);</code></pre>
<p>You are all set now. Using the $ngRedux in your controllers you can now get the store of your application !</p>
<h3 id="sum-up-till-now">Sum up till now</h3>
<p>So we have made a small component. Then we refactored the whole module of Angular and created a container component to replace it. Now we wanted to pass some data and use redux and thats why we created the redux store to have an initial state and use or reducers define in the file to update it.</p>
<h3 id="pass-that-store-to-components-">Pass that store to components !!</h3>
<p>Because I was using the $stateProvider in Angular and I had something like the below. What I did is stop using an import of the template html page and I used directly the page of the react that i defined as a component before in AngularJS like we did previously. So I took this.</p><pre><code class="language-js">function ratingsConfig($stateProvider) {
$stateProvider
.state("ratings", {
url: "/ratings",
views: {
"main@settings": {
templateUrl: ratingsTemplate,
controller: "RatingsController"
}
}
});
}</code></pre>
<p>and change it to this.</p><pre><code class="language-js">function ratingsConfig($stateProvider) {
$stateProvider
.state("ratings", {
url: "/ratings",
views: {
"main@settings": {
template: `
&lt;Ratings-Page store="store"&gt;&lt;/Ratings-Page&gt;
`,
controller: "RatingsController"
}
}
});
}</code></pre>
<p>As you can see I am passing a store variable in the RatingsPage props. You imagine it right I am only using the RatingsController to get and pass that store. So the controller should look like this</p><pre><code class="language-js">function ratingsController($scope, $ngRedux) {
$scope.store = $ngRedux;
}</code></pre>
<p>This way redux can identify that the store in the props its actually the store that needs in the connect() function.</p>
<h3 id="conclusion">Conclusion</h3>
<p>Migrating AngularJS to React/redux is difficult and can take time but doesn’t have to be a nightmare. Once you’ve done with some basic configuration around the project it can be easily extended and slowly become a React project. Having to work as close to plain Javascript as possible is really great. Although it can take some time migrating I think in the long run its worth it. Suggestions that I skipped in this article is that you can start using some linting along the way (jslint, eslint — airbnb) as well and don’t forget to test the new components!</p>
<p>Have fun and let me know how it goes!</p>
<h3 id="resources">Resources</h3>
<p><a href="https://tech.small-improvements.com/2017/01/25/how-to-migrate-an-angularjs-1-app-to-react/" rel="noopener"><strong>Our journey migrating 100k lines of code from AngularJS to React (Chapter 1)</strong></a><br><a href="https://tech.small-improvements.com/2017/01/25/how-to-migrate-an-angularjs-1-app-to-react/" rel="noopener"><em>This post summaries our strategy, patterns and lessons learned from migrating from AngularJS to React/ Redux.</em></a><br><a href="https://tech.small-improvements.com/2017/01/25/how-to-migrate-an-angularjs-1-app-to-react/" rel="noopener">tech.small-improvements.com</a></p>
<p><a href="http://redux.js.org/docs/recipes/MigratingToRedux.html" rel="noopener"><strong>Migrating to Redux · Redux</strong></a><br><a href="http://redux.js.org/docs/recipes/MigratingToRedux.html" rel="noopener"><em>Create a function called createFluxStore(reducer) that creates a Flux store compatible with your existing app from a…</em></a><br><a href="http://redux.js.org/docs/recipes/MigratingToRedux.html" rel="noopener">redux.js.org</a></p>
<p><a href="https://github.com/Hashnode/mern-starter" rel="noopener"><strong>Hashnode/mern-starter</strong></a><br><a href="https://github.com/Hashnode/mern-starter" rel="noopener"><em>mern-starter - Boilerplate for getting started with MERN stack</em></a><br><a href="https://github.com/Hashnode/mern-starter" rel="noopener">github.com</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
