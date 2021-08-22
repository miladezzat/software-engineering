---
card: "https://cdn-media-1.freecodecamp.org/images/1*QunMstJjXbPkRfFwRBVVkg.png"
tags: [React]
description: Elasticsearch is one of the most popular full-text search eng
author: "Milad E. Fahmy"
title: "Building a GitHub Repo Explorer with React and Elasticsearch"
created: "2021-08-15T19:49:03+02:00"
modified: "2021-08-15T19:49:03+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-elasticsearch tag-open-source tag-javascript tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Building a GitHub Repo Explorer with React and Elasticsearch</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*QunMstJjXbPkRfFwRBVVkg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*QunMstJjXbPkRfFwRBVVkg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*QunMstJjXbPkRfFwRBVVkg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*QunMstJjXbPkRfFwRBVVkg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*QunMstJjXbPkRfFwRBVVkg.png" alt="Building a GitHub Repo Explorer with React and Elasticsearch">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<figcaption>The <a href="https://appbaseio-apps.github.io/gitxplore-app/" rel="noopener" target="_blank" title="">GitXplore</a> app</figcaption>
</figure>
<p><a href="https://www.elastic.co/products/elasticsearch" rel="noopener">Elasticsearch</a> is one of the most popular <a href="https://en.wikipedia.org/wiki/Full-text_search" rel="noopener">full-text search</a> engines which allows you to search huge volumes of data quickly, while <a href="https://reactjs.org/" rel="noopener">React</a> is arguably <a href="http://stateofjs.com/2017/front-end/results/" rel="noopener">the best library</a> for building user interfaces. During the past few months I’ve been co-authoring an open-source library, <a href="https://github.com/appbaseio/reactivesearch" rel="noopener"><strong>ReactiveSearch</strong></a>, which provides React components for Elasticsearch and simplifies the process of building a search User Interface (UI).</p>
<p>This is the app which I’ll be building in this story:</p>
<figcaption>Check out the app on <a href="https://codesandbox.io/s/github/appbaseio-apps/gitxplore-app/tree/master/" rel="noopener" target="_blank" title="">CodeSandbox</a></figcaption>
</figure>
<h3 id="a-brief-idea-of-elasticsearch">A brief idea of Elasticsearch</h3>
<p>Elasticsearch is a <a href="https://en.wikipedia.org/wiki/NoSQL" rel="noopener">NoSQL</a> database which can search through large amounts of data in a short time. It performs a <a href="https://en.wikipedia.org/wiki/Full-text_search" rel="noopener">full-text search</a> on the data which is stored in the form of documents (like objects) by examining all the words in every document.</p>
<p>Here’s what the <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/getting-started.html" rel="noopener">Elasticsearch docs</a> say:</p>
<blockquote>Elasticsearch is a highly scalable open-source full-text search and analytics engine. It allows you to store, search, and analyze big volumes of data quickly and in near real time.</blockquote>
<p>Even if you’ve never used Elasticsearch before you should be able to follow along with this story and build your very own Elasticsearch powered search using React and ReactiveSearch. ?</p>
<h3 id="what-is-reactivesearch">What is ReactiveSearch?</h3>
<p><a href="https://github.com/appbaseio/reactivesearch" rel="noopener">ReactiveSearch</a> is a React UI components library for Elasticsearch. In order to search data in Elasticsearch, you need to write <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html" rel="noopener"><strong>queries</strong></a>. Then you will need to format and render the JSON data in your UI. ReactiveSearch simplifies the entire process since you don’t need to worry about writing these queries. This makes it easier to focus on creating the UI.</p>
<p>Here is an example that generates a search-box UI with category specific suggestions:</p><pre><code class="language-js">&lt;CategorySearch
componentId="repo"
dataField={["name", "name.raw"]}
categoryField="language.raw"
/&gt;</code></pre>
<figcaption>Component rendered from the above code</figcaption>
</figure>
<p>This would likely have taken us 100+ lines without the library, and knowledge of <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl.html" rel="noopener">Elasticsearch Query DSL</a> to construct the query.</p>
<p>In this post, I’ll use different components from the library to build the final UI.</p>
<p>You should try out <a href="https://appbaseio-apps.github.io/gitxplore-app/" rel="noopener">the final app</a> before we deep-dive. Here’s the <a href="https://codesandbox.io/s/github/appbaseio-apps/gitxplore-app/tree/master/" rel="noopener">CodeSandbox link</a> for the same.</p>
<h3 id="setting-things-up">Setting things up</h3>
<p>Before we start building the UI, we’ll need the dataset containing GitHub repositories in Elasticsearch. ReactiveSearch works with any Elasticsearch index and you can easily <a href="https://opensource.appbase.io/reactive-manual/getting-started/reactivebase.html" rel="noopener">use it with your own dataset</a>.</p>
<p>For brevity, you can use <a href="https://opensource.appbase.io/dejavu/live/#?input_state=XQAAAAJDAQAAAAAAAAA9iIqnY-B2BnTZGEQz6wkFsoFSyhi0TotY1ZI3dCbzpZ5wZmCa4HoWjWiBHcRO1KpPWzrR3-ungbYF_FBD7IY3vlhuTW9dQQFtt3qksr-wGqyFf_qxW2Z3widjMRY5xGpv9lCIh4b5Dyi-O2wVMmUzKADc-0pG1tyzQ558Y_SoViZ27V2qq-px_fIGV-GVRTcrO-LdiYhDhtFK4tYVTak07UxRRvGaqeK3GI2sU7O67YnSdDZNv8_5pnc3SPxlPV9t9YdkGW3YkckG3LAVp03TbrSWI7GdN0fMZCgwqWv0FP1iNWHQrUW2v8-B___Y4BHg" rel="noopener">my dataset</a> or clone it for yourself by following <a href="https://opensource.appbase.io/dejavu/live/#?input_state=XQAAAAJDAQAAAAAAAAA9iIqnY-B2BnTZGEQz6wkFsoFSyhi0TotY1ZI3dCbzpZ5wZmCa4HoWjWiBHcRO1KpPWzrR3-ungbYF_FBD7IY3vlhuTW9dQQFtt3qksr-wGqyFf_qxW2Z3widjMRY5xGpv9lCIh4b5Dyi-O2wVMmUzKADc-0pG1tyzQ558Y_SoViZ27V2qq-px_fIGV-GVRTcrO-LdiYhDhtFK4tYVTak07UxRRvGaqeK3GI2sU7O67YnSdDZNv8_5pnc3SPxlPV9t9YdkGW3YkckG3LAVp03TbrSWI7GdN0fMZCgwqWv0FP1iNWHQrUW2v8-B___Y4BHg" rel="noopener">this link</a> and clicking on <em>Clone this App</em> button. This will let you make a copy of the dataset as your own app.</p>
<figcaption>The GitHub repo <a href="https://opensource.appbase.io/dejavu/live/#?input_state=XQAAAAJDAQAAAAAAAAA9iIqnY-B2BnTZGEQz6wkFsoFSyhi0TotY1ZI3dCbzpZ5wZmCa4HoWjWiBHcRO1KpPWzrR3-ungbYF_FBD7IY3vlhuTW9dQQFtt3qksr-wGqyFf_qxW2Z3widjMRY5xGpv9lCIh4b5Dyi-O2wVMmUzKADc-0pG1tyzQ558Y_SoViZ27V2qq-px_fIGV-GVRTcrO-LdiYhDhtFK4tYVTak07UxRRvGaqeK3GI2sU7O67YnSdDZNv8_5pnc3SPxlPV9t9YdkGW3YkckG3LAVp03TbrSWI7GdN0fMZCgwqWv0FP1iNWHQrUW2v8-B___Y4BHg" rel="noopener" target="_blank" title="">dataset</a></figcaption>
</figure>
<p>After you enter an app name, the cloning process should start importing the 26K+ repos to your account.</p>
<p>All the repos are structured in the following format:</p><pre><code class="language-json">{
"name": "freeCodeCamp",
"owner": "freeCodeCamp",
"fullname": "freeCodeCamp~freeCodeCamp",
"description": "The https://freeCodeCamp.org open source codebase and curriculum. Learn to code and help nonprofits.",
"avatar": "https://avatars0.githubusercontent.com/u/9892522?v=4",
"url": "https://github.com/freeCodeCamp/freeCodeCamp",
"pushed": "2017-12-24T05:44:03Z",
"created": "2014-12-24T17:49:19Z",
"size": 31474,
"stars": 291526,
"forks": 13211,
"topics": [
"careers",
"certification",
"community",
"curriculum",
"d3",
"education",
"javascript",
"learn-to-code",
"math",
"nodejs",
"nonprofits",
"programming",
"react",
"teachers"
],
"language": "JavaScript",
"watchers": 8462
}</code></pre>
<ul>
<li>We will use <a href="https://github.com/facebookincubator/create-react-app." rel="noopener">create-react-app</a> to set up the project. You can install create-react-app by running the following command in your terminal:</li>
</ul><pre><code class="language-bash">npm install -g create-react-app</code></pre>
<ul>
<li>After it’s installed, you can create a new project by running:</li>
</ul><pre><code class="language-bash">create-react-app gitxplore</code></pre>
<ul>
<li>After the project is set up you can change into the project directory and install ReactiveSearch dependency:</li>
</ul><pre><code class="language-bash">cd gitxplore
npm install @appbaseio/reactivesearch</code></pre>
<ul>
<li>You may also add fontawesome CDN, which we’ll be using for some icons, by inserting the following lines in <code>/public/index.html</code> before the <code>&lt;/body&gt;</code> tag ends:</li>
</ul><pre><code class="language-html">&lt;script defer         src="https://use.fontawesome.com/releases/v5.0.2/js/all.js"&gt;&lt;/script&gt;</code></pre>
<h3 id="diving-into-the-code">Diving into the code</h3>
<p>I’ll follow a simple directory structure for the app. Here are the important files:</p><pre><code>src
├── App.css               // App styles
├── App.js                // App container
├── components
│   ├── Header.js         // Header component
│   ├── Results.js        // Results component
│   ├── SearchFilters.js  // Filters component
│   └── Topic.js          // rendered by Results
├── index.css             // styles
├── index.js              // ReactDOM render
└── theme.js              // colors and fonts
public
└── index.html</code></pre>
<p>Here’s the link to <a href="https://github.com/appbaseio-apps/gitxplore-app" rel="noopener">final repo</a> if you wish to reference anything at any point.</p>
<h4 id="1-adding-styles">1. Adding styles</h4>
<p>I’ve written responsive styles for the app which you can copy into your app. Just fire up your favorite text editor and copy the styles for <code>/src/index.css</code> from <a href="https://github.com/appbaseio-apps/gitxplore-app/blob/master/src/index.css" rel="noopener">here</a> and <code>/src/App.css</code> from <a href="https://github.com/appbaseio-apps/gitxplore-app/blob/master/src/App.css" rel="noopener">here</a> respectively.</p>
<p>Now, create a file <code>/src/theme.js</code> where we’ll add the colors and fonts for our app:</p>
typography: {
fontFamily: 'Raleway, Helvetica, sans-serif',
},
colors: {
primaryColor: '#008000',
titleColor: 'white'
},
secondaryColor: 'mediumseagreen',
};
export default theme;</code></pre>
<figcaption>Colors and Fonts for the app</figcaption>
</figure>
<h4 id="2-adding-the-first-reactivesearch-component">2. Adding the first ReactiveSearch component</h4>
<p>All the ReactiveSearch components are wrapped around a container component <a href="https://opensource.appbase.io/reactive-manual/getting-started/reactivebase.html" rel="noopener"><strong>ReactiveBase</strong></a> which provides data from Elasticsearch to the children ReactiveSearch components.</p>
<p>We’ll use this in <code>/src/App.js</code>:</p><pre><code class="language-js">import React, { Component } from 'react';
import { ReactiveBase } from '@appbaseio/reactivesearch';
import theme from './theme';
import './App.css';
class App extends Component {
render() {
return (
&lt;section className="container"&gt;
&lt;ReactiveBase
app="gitxplore-app"
credentials="4oaS4Srzi:f6966181-1eb4-443c-8e0e-b7f38e7bc316"
type="gitxplore-latest"
theme={theme}
&gt;
&lt;nav className="navbar"&gt;
&lt;div className="title"&gt;GitXplore&lt;/div&gt;
&lt;/nav&gt;
&lt;/ReactiveBase&gt;
&lt;/section&gt;
);
}
}
export default App;</code></pre>
<p>For the <code>app</code> and <code>credentials</code> prop you may use the ones I’ve provided here as it is. If you cloned the dataset in your own app earlier you can get them from the <a href="https://dashboard.appbase.io/credentials" rel="noopener">app’s credentials page</a>. If you’re already familiar with Elasticsearch you may instead pass a <code>url</code> prop referring to <a href="https://opensource.appbase.io/reactive-manual/getting-started/reactivebase.html#props" rel="noopener">your own Elasticsearch cluster URL</a>.</p>
<figcaption>Getting app’s credentials from appbase.io <a href="https://dashboard.appbase.io/credentials" rel="noopener" target="_blank" title="">dashboard</a>. Just copy the Read-only API key</figcaption>
</figure>
<figcaption>Alternative to above link: Copy the read credentials from <a href="https://dashboard.appbase.io/apps" rel="noopener" target="_blank" title="">apps dashboard</a></figcaption>
</figure>
<p>After adding this you would see a basic layout like this:</p>
<figcaption>After adding the first ReactiveSearch component</figcaption>
</figure>
<h4 id="3-adding-a-datasearch">3. Adding a DataSearch</h4>
<figcaption>DataSearch component</figcaption>
</figure>
<p>Next, I’ll be adding a <a href="https://opensource.appbase.io/reactive-manual/search-components/datasearch.html" rel="noopener">DataSearch</a> component to search through repositories. It creates a search UI component and lets us search across one or more fields easily. The updated <code>render</code> function in <code>/src/App.js</code> would look like this:</p><pre><code class="language-js">// importing DataSearch here
import { ReactiveBase, DataSearch } from '@appbaseio/reactivesearch';
...
&lt;ReactiveBase ... &gt;
// Adding the DataSearch here
&lt;div className="flex row-reverse app-container"&gt;
&lt;div className="results-container"&gt;
&lt;DataSearch
componentId="repo"
filterLabel="Search"
dataField={['name', 'description', 'name.raw', 'fullname', 'owner', 'topics']}
placeholder="Search Repos"
autosuggest={false}
iconPosition="left"
URLParams
className="data-search-container results-container"
innerClass={{
input: 'search-input',
}}
/&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/ReactiveBase&gt;
...</code></pre>
<p>The <code>DataSearch</code> component goes inside the <code>ReactiveBase</code> component and receives all the necessary data from it so we don’t have to write Elasticsearch queries ourselves. The surrounding <code>div</code>s add some <code>className</code> properties for styling. These just add a layout to the app. You can go through all the styles at <code>/src/App.css</code> which we created earlier. You might have noticed that we have passed some props to the <code>DataSearch</code> component.</p>
<p>Here’s how they work:</p>
<ul>
<li><code>componentId</code>: a unique string identifier which we’ll use later to connect two different ReactiveSearch components.</li>
<li><code>filterLabel</code>: a string value which will show up in the filters menu later.</li>
<li><code>dataField</code>: an array of strings containing Elasticsearch fields on which search has to performed on. You can check <a href="https://opensource.appbase.io/dejavu/live/#?input_state=XQAAAAJiAQAAAAAAAAA9iIqnY-B2BnTZGEQz6wkFsg1HFhlgIIPlpmP5RRZ-FWEcoSd0PjkMiILXm8GQxirVSZVrDiQlmtqn4TuMTBL2E1thSmnTeiFPBGQoqmavHhOSSrRxNeEjhNKDeff0pgxw5r5nv8t-un2YUoHpv1HKzI9aZA8KH8WAmQ6XktDDO-Hn95KeD_KPXp_E76PZ04Hl6H6MrevzUojYDnGynyNwjmI07lj0kXZeqltXcATyP8PMY7ncPHlUw1p1cnfe2JXyFgzRzZcNo7xtVJiEPCuLLKzxYehuirtvUcy6oC_KC15q9kmkWssXUCkBr7dAugoFbtjO5zUdpOFWdcz2wcD3AA3--k7h&amp;editable=false" rel="noopener">the dataset</a> and see that these fields also matches the column name. All fields specified here matches the structure of data, for example <code>name</code> refers to the name of repo, <code>description</code> refers to its description, but there is a field with a <code>.raw</code> added here, <code>name.raw</code> which is a <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/multi-fields.html" rel="noopener">multi-field</a> of the <code>name</code> field. Elasticsearch can index the same data in different ways for different purposes, which we can use to get better search results.</li>
<li><code>placeholder</code>: sets the placeholder value in the input box.</li>
<li><code>autosuggest</code>: setting a <code>false</code> value for the prop causes the results to update immediately in the results.</li>
<li><code>iconPosition</code>: sets the position of the ? icon.</li>
<li><code>URLParams</code>: is a <code>boolean</code> which tells the component to save the search term in the browser’s URL so we can share a URL to a specific search query. For example, check <a href="https://appbaseio-apps.github.io/gitxplore-app/?repo=%22react%22" rel="noopener">this link</a> to see all results related to “react”.</li>
<li><code>className</code>: adds a <code>class</code> for styling using CSS.</li>
<li><code>innerClass</code>: adds a <code>class</code> to different sections of a component for styling using CSS. Here, I’ve added a <code>class</code> to the <code>input</code> box for styling. A detailed description can be found in the <a href="https://opensource.appbase.io/reactive-manual/search-components/datasearch.html#props" rel="noopener">docs</a>.</li>
</ul>
<p>With this, our app should get a working search bar:</p>
<figcaption>Adding DataSearch component</figcaption>
</figure>
<h4 id="4-adding-the-results-view">4. Adding the Results view</h4>
<p>Next, we’ll be adding the <code>Results</code> component at <code>/src/components/Results.js</code> and importing it in <code>/src/App.js</code>.</p>
<p>Here’s how you can write the <code>Results</code> component:</p><pre><code class="language-js">import React from 'react';
import { SelectedFilters, ReactiveList } from '@appbaseio/reactivesearch';
const onResultStats = (results, time) =&gt; (
&lt;div className="flex justify-end"&gt;
{results} results found in {time}ms
&lt;/div&gt;
);
const onData = (data) =&gt; (
&lt;div className="result-item" key={data.fullname}&gt;
{data.owner}/{data.name}
&lt;/div&gt;
);
const Results = () =&gt; (
&lt;div className="result-list"&gt;
&lt;SelectedFilters className="m1" /&gt;
&lt;ReactiveList
componentId="results"
dataField="name"
onData={onData}
onResultStats={onResultStats}
react={{
and: ['repo'],
}}
pagination
innerClass={{
list: 'result-list-container',
pagination: 'result-list-pagination',
resultsInfo: 'result-list-info',
poweredBy: 'powered-by',
}}
size={6}
/&gt;
&lt;/div&gt;
);
export default Results;</code></pre>
<p>I’ve imported two new components from ReactiveSearch, <code>SelectedFilters</code> and <code>ReactiveList</code>. <a href="https://opensource.appbase.io/reactive-manual/base-components/selectedfilters.html" rel="noopener">SelectedFilters</a> will render the filters for our ReactiveSearch components at one place:</p>
<figcaption>SelectedFilters renders removable filters</figcaption>
</figure>
<p><a href="https://opensource.appbase.io/reactive-manual/result-components/reactivelist.html" rel="noopener">ReactiveList</a> renders the search results. Here’s how its props work:</p>
<ul>
<li><code>dataField</code>: orders the results using <code>name</code> field here.</li>
<li><code>onData</code>: accepts a function which returns a <a href="https://reactjs.org/docs/glossary.html#jsx" rel="noopener">JSX</a>. The function is passed each result individually. Here we’re generating a basic UI which we’ll modify later.</li>
<li><code>onResultStats</code>: similar to <code>onData</code> but for the result stats. The function is passed the number of <code>results</code> found and <code>time</code> taken.</li>
<li><code>react</code>: the <code><a href="https://opensource.appbase.io/reactive-manual/advanced/react.html" rel="noopener">react</a></code> prop tells the <code>ReactiveList</code> to listen to changes made by<code>CategorySearch</code> component, we’ve provided the <code>componentId</code> of the <code>CategorySearch</code> component here called <code>repo</code>. Later we’ll add more components here.</li>
<li><code>pagination</code>: a <code>boolean</code> which tells the ReactiveList to split the results into pages, each page containing the number of results specified in the <code>size</code> prop.</li>
</ul>
<p>Now we can <code>import</code> and use the <code>Results</code> component in <code>/src/App.js</code>. Just add it inside the <code>div</code> with <code>results-container</code> class.</p><pre><code class="language-js">...
import Results from './components/Results';
...
render() {
return(
...
&lt;div className="results-container"&gt;
&lt;DataSearch ... /&gt;
&lt;Results /&gt;
&lt;/div&gt;
...
)
}</code></pre>
<p>With this component, a basic version of our search UI should start coming together:</p>
<figcaption>Adding the Results component</figcaption>
</figure>
<h4 id="5-adding-a-header-component">5. Adding a Header component</h4>
<p>Lets create a <code>Header</code> component at <code>/src/components/Header.js</code> which we’ll use to render more search filters.</p>
<p>Here’s how to create a simple <code>Header</code> component:</p><pre><code class="language-js">import React, { Component } from 'react';
import SearchFilters from './SearchFilters';
class Header extends Component {
constructor(props) {
super(props);
this.state = {
visible: false,
};
}
toggleVisibility = () =&gt; {
const visible = !this.state.visible;
this.setState({
visible,
});
}
render() {
return (
&lt;nav className={`navbar ${this.state.visible ? 'active' : ''}`}&gt;
&lt;div className="title"&gt;GitXplore&lt;/div&gt;
&lt;div className="btn toggle-btn" onClick={this.toggleVisibility}&gt;Toggle Filters&lt;/div&gt;
&lt;SearchFilters {...this.props} visible={this.state.visible} /&gt;
&lt;/nav&gt;
);
}
}
export default Header;
</code></pre>
<p>I’ve moved the navigation code in <code>&lt;nav&gt;..&lt;/nav&gt;</code> from <code>/src/App.js</code> here. The Header component has a method which toggles visible in the state. We’re using this to add a class which would make it take up the entire screen size on mobile layout. I’ve also added a toggle button which calls the <code>toggleVisibility</code> method.</p>
<p>It also renders another component called <code>SearchFilters</code> and passes all the props from the parent <code>App</code> component. Let’s create this component to see things in action.</p>
<p>Create a new file <code>/src/components/SearchFilters.js</code>:</p><pre><code class="language-js">import React from 'react';
const SearchFilters = () =&gt; (
&lt;div&gt;
Search filters go here!
&lt;/div&gt;
);
export default SearchFilters;</code></pre>
<p>Next, I’ll update the <code>App</code> component to use the <code>Header</code> component that we created just now.</p>
<h4 id="6-updating-app-component-and-handling-topics-in-state">6. Updating App component and handling topics in state</h4>
<p>We’ll add a <code>state</code> variable in <code>App</code> component called <code>currentTopics</code> which would be an array of currently selected topics in the app.</p>
<p>We’ll then use the <code>currentTopics</code> and pass them to the <code>Header</code> and <code>Results</code> components:</p>
import { ReactiveBase, DataSearch } from '@appbaseio/reactivesearch';
import Header from './components/Header';
import Results from './components/Results';
import theme from './theme';
import './App.css';
class App extends Component {
constructor(props) {
super(props);
this.state = {
currentTopics: [],
};
}
setTopics = (currentTopics) =&gt; {
this.setState({
currentTopics: currentTopics || [],
});
}
toggleTopic = (topic) =&gt; {
const { currentTopics } = this.state;
const nextState = currentTopics.includes(topic)
? currentTopics.filter(item =&gt; item !== topic)
: currentTopics.concat(topic);
this.setState({
currentTopics: nextState,
});
}
render() {
return (
&lt;section className="container"&gt;
&lt;ReactiveBase
app="gitxplore-app"
credentials="4oaS4Srzi:f6966181-1eb4-443c-8e0e-b7f38e7bc316"
type="gitxplore-latest"
theme={theme}
&gt;
&lt;div className="flex row-reverse app-container"&gt;
&lt;Header currentTopics={this.state.currentTopics} setTopics={this.setTopics} /&gt;
&lt;div className="results-container"&gt;
&lt;DataSearch
componentId="repo"
filterLabel="Search"
dataField={['name', 'description', 'name.raw', 'fullname', 'owner', 'topics']}
placeholder="Search Repos"
iconPosition="left"
autosuggest={false}
URLParams
className="data-search-container results-container"
innerClass={{
input: 'search-input',
}}
/&gt;
&lt;Results currentTopics={this.state.currentTopics} toggleTopic={this.toggleTopic} /&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/ReactiveBase&gt;
&lt;/section&gt;
);
}
}
export default App;</code></pre>
<figcaption>Updating the App component</figcaption>
</figure>
<p>The <code>setTopics</code> method will set whichever topics are passed to it, which we’ll pass to the <code>Header</code> component. The <code>toggleTopic</code> method will remove a topic from the <code>state</code> in <code>currentTopics</code> if it’s already present and add the topic if it is not present.</p>
<p>We’ll pass the <code>toggleTopic</code> method to the <code>Results</code> component:</p>
<figcaption>Its starting to come together, cheers!</figcaption>
</figure>
<h4 id="7-adding-more-filters">7. Adding more filters</h4>
<p>Lets add more filters to the UI in <code>/src/components/SearchFilters.js</code>. I’ll be using three new components from ReactiveSearch here, <code>MultiDropdownList</code>, <code>SingleDropdownRange</code> and <code>RangeSlider</code>. The components are used in a similar fashion as we used the <code>DataSearch</code> component earlier.</p>
<p>Here’s the code:</p><pre><code class="language-js">import React from 'react';
import PropTypes from 'prop-types';
import {
MultiDropdownList,
SingleDropdownRange,
RangeSlider,
} from '@appbaseio/reactivesearch';
const SearchFilters = ({ currentTopics, setTopics, visible }) =&gt; (
&lt;div className={`flex column filters-container ${!visible ? 'hidden' : ''}`}&gt;
&lt;div className="child m10"&gt;
&lt;MultiDropdownList
componentId="language"
dataField="language.raw"
placeholder="Select languages"
title="Language"
filterLabel="Language"
/&gt;
&lt;/div&gt;
&lt;div className="child m10"&gt;
&lt;MultiDropdownList
componentId="topics"
dataField="topics.raw"
placeholder="Select topics"
title="Repo Topics"
filterLabel="Topics"
size={1000}
queryFormat="and"
defaultSelected={currentTopics}
onValueChange={setTopics}
/&gt;
&lt;/div&gt;
&lt;div className="child m10"&gt;
&lt;SingleDropdownRange
componentId="pushed"
dataField="pushed"
placeholder="Repo last active"
title="Last Active"
filterLabel="Last Active"
data={[
{ start: 'now-1M', end: 'now', label: 'Last 30 days' },
{ start: 'now-6M', end: 'now', label: 'Last 6 months' },
{ start: 'now-1y', end: 'now', label: 'Last year' },
]}
/&gt;
&lt;/div&gt;
&lt;div className="child m10"&gt;
&lt;SingleDropdownRange
componentId="created"
dataField="created"
placeholder="Repo created"
title="Created"
filterLabel="Created"
data={[
{
start: '2017-01-01T00:00:00Z',
end: '2017-12-31T23:59:59Z',
label: '2017',
},
{
start: '2016-01-01T00:00:00Z',
end: '2016-12-31T23:59:59Z',
label: '2016',
},
{
start: '2015-01-01T00:00:00Z',
end: '2015-12-31T23:59:59Z',
label: '2015',
},
{
start: '2014-01-01T00:00:00Z',
end: '2014-12-31T23:59:59Z',
label: '2014',
},
{
start: '2013-01-01T00:00:00Z',
end: '2013-12-31T23:59:59Z',
label: '2013',
},
{
start: '2012-01-01T00:00:00Z',
end: '2012-12-31T23:59:59Z',
label: '2012',
},
{
start: '2011-01-01T00:00:00Z',
end: '2011-12-31T23:59:59Z',
label: '2011',
},
{
start: '2010-01-01T00:00:00Z',
end: '2010-12-31T23:59:59Z',
label: '2010',
},
{
start: '2009-01-01T00:00:00Z',
end: '2009-12-31T23:59:59Z',
label: '2009',
},
{
start: '2008-01-01T00:00:00Z',
end: '2008-12-31T23:59:59Z',
label: '2008',
},
{
start: '2007-01-01T00:00:00Z',
end: '2007-12-31T23:59:59Z',
label: '2007',
},
]}
/&gt;
&lt;/div&gt;
&lt;div className="child m10"&gt;
&lt;RangeSlider
componentId="stars"
title="Repo Stars"
dataField="stars"
range={{ start: 0, end: 300000 }}
showHistogram={false}
rangeLabels={{
start: '0 Stars',
end: '300K Stars',
}}
innerClass={{
label: 'range-label',
}}
/&gt;
&lt;/div&gt;
&lt;div className="child m10"&gt;
&lt;RangeSlider
componentId="forks"
title="Repo Forks"
dataField="forks"
range={{ start: 0, end: 180500 }}
showHistogram={false}
rangeLabels={{
start: '0 Forks',
end: '180K Forks',
}}
innerClass={{
label: 'range-label',
}}
/&gt;
&lt;/div&gt;
&lt;/div&gt;
);
SearchFilters.propTypes = {
currentTopics: PropTypes.arrayOf(PropTypes.string),
setTopics: PropTypes.func,
visible: PropTypes.bool,
};
export default SearchFilters;
</code></pre>
<p>The <code>SearchFilters</code> component we’ve created above takes in three props from the <code>Header</code> component, <code>currentTopics</code>, <code>setTopics</code> and <code>visible</code>. The <code>visible</code> prop is just used to add a <code>className</code> for styling.</p>
<p>The first component we’ve used here is a <code><a href="https://opensource.appbase.io/reactive-manual/list-components/multidropdownlist.html" rel="noopener">MultiDropdownList</a></code> which renders a dropdown component to select multiple options. The first <code>MultiDropdownList</code> has a <code>dataField</code> of <code>language.raw</code>. It’ll populate itself with all the languages available in the repositories dataset.</p>
<figcaption>The language <a href="https://opensource.appbase.io/reactive-manual/list-components/multidropdownlist.html" rel="noopener" target="_blank" title="">MultiDropdownList</a></figcaption>
</figure>
<p>We’ve used another <code>MultiDropdownList</code> to render a list of topics:</p><pre><code class="language-js">&lt;MultiDropdownList
componentId="topics"
dataField="topics.raw"
placeholder="Select languages"
title="Repo Topics"
filterLabel="Topics"
size={1000}
queryFormat="and"
defaultSelected={currentTopics}
onValueChange={setTopics}
/&gt;</code></pre>
<p>Here’s how the props work here:</p>
<ul>
<li><code>componentId</code>: similar to the previous ReactiveSearch components, this is a unique identifier which we’ll later associate in the <code>Results</code> component that we created to get search results.</li>
<li><code>dataField</code>: maps the component to the <code>topics.raw</code> field in Elasticsearch.</li>
<li><code>placeholder</code>: sets the placeholder value when nothing is selected.</li>
<li><code>title</code>: adds a title for the component in the UI.</li>
<li><code>filterLabel</code>: sets the label of the components in the removable filters (the <code>SelectedFilters</code> which we used in the <code>Results</code> component).</li>
<li><code>size</code>: tells the component to render a maximum of <code>1000</code> items in the list.</li>
<li><code>queryFormat</code>: when set to <code>'and'</code> as we’ve used here, it gives results which matches all the selected tags (exactly like <a href="https://www.google.co.in/url?sa=t&amp;rct=j&amp;q=&amp;esrc=s&amp;source=web&amp;cd=2&amp;cad=rja&amp;uact=8&amp;ved=0ahUKEwjq2aSbmLLYAhUBP48KHW7QDVMQFghHMAE&amp;url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FIntersection_(set_theory)&amp;usg=AOvVaw3o-ni_Iic1U3sedPMsJMqV" rel="noopener">intersection</a>).</li>
<li><code>defaultSelected</code>: sets the selected items in the component. Here we’re passing <code>currentTopics</code> which we’ve stored in the <code>state</code> at <code>/src/App.js</code>.</li>
<li><code>onValueChange</code>: is a function that will be called by the component when we make a change in its value. Here we call the <code>setTopics</code> function which we received in the props. Therefore, whenever we select or deselect a value in the component it would update the <code>currentTopics</code> in the <code>state</code> of main <code>App</code> component.</li>
</ul>
<figcaption>The topics MultiDropdownList component</figcaption>
</figure>
<p>The next ReactiveSearch component we’ve used here is a <code><a href="https://opensource.appbase.io/reactive-manual/range-components/singledropdownrange.html" rel="noopener">SingleDropdownRange</a></code>. It uses a new prop called <code><a href="https://opensource.appbase.io/reactive-manual/range-components/singledropdownrange.html#props" rel="noopener">data</a></code>.</p>
<p>Here’s how it works:</p><pre><code class="language-js">&lt;SingleDropdownRange
...
data={[
{ start: 'now-1M', end: 'now', label: 'Last 30 days' },
{ start: 'now-6M', end: 'now', label: 'Last 6 months' },
{ start: 'now-1y', end: 'now', label: 'Last year' },
]}
/&gt;</code></pre>
<p>The <code>data</code> prop accepts an array of objects with <code>start</code> and <code>end</code> values and shows the specified <code>label</code> in the dropdown. It’s mapped to the <code>pushed</code> field in the dataset which is a <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/date.html" rel="noopener">date type in Elasticsearch</a>. One cool way to specify date range in Elasticsearch is using the <code>now</code> keyword. <code>now</code> refers to the current time, <code>now-1M</code> refers to one month before, <code>now-6M</code> to six month before and <code>now-1y</code> to a year before <code>now</code>.</p>
<figcaption>The pushed <a href="https://opensource.appbase.io/reactive-manual/range-components/singledropdownrange.html" rel="noopener" target="_blank" title="">SingleDropdownRange</a> component</figcaption>
</figure>
<p>I’ve used another <code>SingleDropdownRange</code> component for the <code>created</code> field in the dataset.</p>
<p>Here I’ve specified year ranges in datetime for different years:</p><pre><code class="language-js">&lt;SingleDropdownRange
...
data={[
{
start: '2017-01-01T00:00:00Z',
end: '2017-12-31T23:59:59Z',
label: '2017',
},
{
start: '2016-01-01T00:00:00Z',
end: '2016-12-31T23:59:59Z',
label: '2016',
},
...
]}
/&gt;</code></pre>
<figcaption>SingleDropdownRange component for the created field</figcaption>
</figure>
<p>The third component I’ve used is a <code><a href="https://opensource.appbase.io/reactive-manual/range-components/rangeslider.html" rel="noopener">RangeSlider</a></code> which renders a slider UI. I’ve used to <code>RangeSlider</code> components, one for the <code>stars</code> field and the other for <code>forks</code>.</p>
<p>Two main props that this component introduces are <code>range</code> and <code>rangeLabels</code>:</p><pre><code class="language-js">&lt;RangeSlider
...
showHistogram={false}
range={{ start: 0, end: 300000 }}
rangeLabels={{
start: '0 Stars',
end: '300K Stars',
}}
/&gt;</code></pre>
<ul>
<li><code>range</code>: prop specifies a range for the data with a <code>start</code> and <code>end</code> value.</li>
<li><code>rangeLabels</code>: prop takes the labels to show below the slider.</li>
<li><code>showHistogram</code>: is a <code>boolean</code> prop which shows a histogram with the distribution of data. Here I’ve set it to <code>false</code> since it’s not needed.</li>
</ul>
<figcaption><a href="https://opensource.appbase.io/reactive-manual/range-components/rangeslider.html" rel="noopener" target="_blank" title="">RangeSlider</a> components for the stars and forks fields</figcaption>
</figure>
<p>Now we just need to connect these filters to the <code>Results</code> component. We just have to update one line in the <code>ReactiveList</code> rendered by the <code>Results</code> component to include the <code>componentId</code>s of these components.</p>
<p>Update the <code>react</code> prop in the <code>ReactiveList</code> that we rendered in the <code>Results</code> component:</p><pre><code class="language-js">const Results = () =&gt; (
&lt;div className="result-list"&gt;
&lt;SelectedFilters className="m1" /&gt;
&lt;ReactiveList
... // updating the react prop here
react={{
and: ['language', 'topics', 'pushed', 'created', 'stars', 'forks', 'repo'],
}}
/&gt;
&lt;/div&gt;
);</code></pre>
<p>That should make your results update for all the filters ?</p>
<figcaption>After connecting the filters in the ReactiveList component</figcaption>
</figure>
<h4 id="8-updating-the-results-view">8. Updating the results view</h4>
<p>Up until now, we’ve been seeing only a basic version of the results. As the final piece of this app, lets add some flair to the results ✌️</p>
<p>We’ll be using another component inside our <code>Results</code> components to render different topics.</p>
<figcaption>Topics component to render these little guys</figcaption>
</figure>
<p>Here’s how you can create your own at <code>/src/components/Topic</code>. Feel free to add your own taste ?</p>
import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Topic extends Component {
handleClick = () =&gt; {
this.props.toggleTopic(this.props.children);
}
render() {
return (
&lt;div className={`topic ${this.props.active ? 'active' : ''}`} onClick={this.handleClick}&gt;
#{this.props.children}
&lt;/div&gt;
);
}
}
Topic.propTypes = {
children: PropTypes.string,
active: PropTypes.bool,
toggleTopic: PropTypes.func,
};
export default Topic;</code></pre>
<figcaption>Adding the Topic component</figcaption>
</figure>
<p>This component renders its <code>children</code> and adds a click handler to toggle the topics which updates the <code>currentTopics</code> inside the main <code>App</code> component’s state.</p>
<p>Next, we just need to update our <code>Results</code> component at <code>/src/components/Results.js</code>:</p>
import { SelectedFilters, ReactiveList } from '@appbaseio/reactivesearch';
import PropTypes from 'prop-types';
import Topic from './Topic';
const onResultStats = (results, time) =&gt; (
&lt;div className="flex justify-end"&gt;
{results} results found in {time}ms
&lt;/div&gt;
);
const onData = (data, currentTopics, toggleTopic) =&gt; (
&lt;div className="result-item" key={data.fullname}&gt;
&lt;img className="avatar" src={data.avatar} alt="User avatar" /&gt;
&lt;a className="link" href={data.url} target="_blank" rel="noopener noreferrer"&gt;
&lt;div className="flex wrap"&gt;
&lt;div&gt;{data.owner}/&lt;/div&gt;
&lt;div&gt;{data.name}&lt;/div&gt;
&lt;/div&gt;
&lt;/a&gt;
&lt;/div&gt;
&lt;div className="m10-0"&gt;{data.description}&lt;/div&gt;
&lt;div className="flex wrap justify-center"&gt;
{
data.topics.slice(0, 7)
.map(item =&gt; (
&lt;Topic
key={item}
active={currentTopics.includes(item)}
toggleTopic={toggleTopic}
&gt;
{item}
&lt;/Topic&gt;
))
}
&lt;/div&gt;
&lt;div className="flex"&gt;
&lt;/div&gt;
&lt;/div&gt;
);
const Results = ({ toggleTopic, currentTopics }) =&gt; (
&lt;div className="result-list"&gt;
&lt;SelectedFilters className="m1" /&gt;
&lt;ReactiveList
componentId="results"
dataField="name"
onData={data =&gt; onData(data, currentTopics, toggleTopic)}
onResultStats={onResultStats}
react={{
and: ['language', 'topics', 'pushed', 'created', 'stars', 'forks', 'repo'],
}}
pagination
innerClass={{
list: 'result-list-container',
pagination: 'result-list-pagination',
resultsInfo: 'result-list-info',
poweredBy: 'powered-by',
}}
size={6}
sortOptions={[
{
label: 'Best Match',
dataField: '_score',
sortBy: 'desc',
},
{
label: 'Most Stars',
dataField: 'stars',
sortBy: 'desc',
},
{
label: 'Fewest Stars',
dataField: 'stars',
sortBy: 'asc',
},
{
label: 'Most Forks',
dataField: 'forks',
sortBy: 'desc',
},
{
label: 'Fewest Forks',
dataField: 'forks',
sortBy: 'asc',
},
{
label: 'A to Z',
dataField: 'owner.raw',
sortBy: 'asc',
},
{
label: 'Z to A',
dataField: 'owner.raw',
sortBy: 'desc',
},
{
label: 'Recently Updated',
dataField: 'pushed',
sortBy: 'desc',
},
{
label: 'Least Recently Updated',
dataField: 'pushed',
sortBy: 'asc',
},
]}
/&gt;
&lt;/div&gt;
);
Results.propTypes = {
toggleTopic: PropTypes.func,
currentTopics: PropTypes.arrayOf(PropTypes.string),
};
export default Results;</code></pre>
<figcaption>Adding some flair to the Results ?</figcaption>
</figure>
<p>I’ve updated the <code>onData</code> function to render more detailed results. You’ll also notice a new <code>sortOptions</code> prop in the <code>ReactiveList</code>. This prop accepts an array of objects which renders a dropdown menu to select how you wish to sort the results. Each object contains a <code>label</code> to display as the list item, a <code>dataField</code> to sort the results on and a <code>sortBy</code> key which can either be <code>asc</code> (ascending) or <code>desc</code> (descending).</p>
<p>That’s it, your very own GitHub repository explorer should be live!</p>
<figcaption>GitXplore <a href="https://appbaseio-apps.github.io/gitxplore-app/" rel="noopener" target="_blank" title="">final app preview</a></figcaption>
</figure>
<h3 id="useful-links">Useful links</h3>
<ol>
<li>GitXplore app <a href="https://appbaseio-apps.github.io/gitxplore-app/" rel="noopener">demo</a>, <a href="https://codesandbox.io/s/github/appbaseio-apps/gitxplore-app/tree/master/" rel="noopener">CodeSandbox</a> and <a href="https://github.com/appbaseio-apps/gitxplore-app" rel="noopener">source code</a></li>
<li><a href="https://github.com/appbaseio/reactivesearch" rel="noopener">ReactiveSearch GitHub repo</a></li>
<li>ReactiveSearch <a href="https://opensource.appbase.io/reactive-manual/" rel="noopener">docs</a></li>
</ol>
<p>Hope you enjoyed this story. If you have any thoughts or suggestions, please let me know and do share your version of the app in comments!</p>
<hr>
<p>You may follow me on <a href="https://twitter.com/divyanshu013">twitter</a> for latest updates. I've also started posting more recent posts on my personal <a href="https://divyanshu013.dev/">blog</a>.</p>
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
