---
card: "https://cdn-media-2.freecodecamp.org/w1280/60262bb70a2838549dcc42b6.jpg"
tags: [React]
description: In this tutorial, we will build a mini Hacker News clone in R
author: "Milad E. Fahmy"
title: "How to Build a Hacker News Clone Using React"
created: "2021-08-15T19:27:14+02:00"
modified: "2021-08-15T19:27:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build a Hacker News Clone Using React</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/60262bb70a2838549dcc42b6.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/60262bb70a2838549dcc42b6.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/60262bb70a2838549dcc42b6.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/60262bb70a2838549dcc42b6.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/60262bb70a2838549dcc42b6.jpg" alt="How to Build a Hacker News Clone Using React">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this tutorial, we will build a mini <a href="https://news.ycombinator.com/">Hacker News</a> clone in React.</p>
<p>We will be using React Hooks syntax for building this application. So if you're new to React Hooks, check out my <a href="https://levelup.gitconnected.com/an-introduction-to-react-hooks-50281fd961fe?source=friends_link&amp;sk=89baff89ec8bc637e7c13b7554904e54">Introduction to React Hooks</a> article to learn the basics of Hooks.</p>
<p>So let's get started.</p>
<h2 id="introduction-to-the-api">Introduction to the API</h2>
<p>We will be using the Hackernews API from <a href="https://github.com/HackerNews/API">this url</a>.</p>
<p>API to get top stories, use this URL: <a href="https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty">https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty</a></p>
<p>API to get new stories, use this URL: <a href="https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty">https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty</a></p>
<p>API to get best stories, use this URL: <a href="https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty">https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty</a></p>
<p>Each of the above stories API returns only an array of IDs representing a story.</p>
<p>So to get the details of that particular story, we need to make another API call.</p>
<p>API to get story details, use this URL: <a href="https://hacker-news.firebaseio.com/v0/item/story_id.json?print=pretty">https://hacker-news.firebaseio.com/v0/item/story_id.json?print=pretty</a></p>
<p>For example: <a href="https://hacker-news.firebaseio.com/v0/item/26061935.json?print=pretty">https://hacker-news.firebaseio.com/v0/item/26061935.json?print=pretty</a></p>
<h2 id="how-to-set-up-the-project">How to Set Up the Project </h2>
<p>Create a new project using <code>create-react-app</code>:</p><pre><code class="language-js">npx create-react-app hackernews-clone-react-app
</code></pre>
<p>Once the project is created, delete all files from the <code>src</code> folder and create <code>index.js</code> and <code>styles.scss</code> files inside the <code>src</code> folder. Also, create <code>components</code>, <code>hooks</code>, <code>router</code>, <code>utils</code> folders inside the <code>src</code> folder.</p>
<p>Install the required dependencies like this:</p><pre><code class="language-js">yarn add axios@0.21.0 bootstrap@4.6.0 node-sass@4.14.1 react-bootstrap@1.4.0 react-router-dom@5.2.0
</code></pre>
<p>Open <code>styles.scss</code> and add the contents from <a href="https://github.com/myogeshchavan97/hackernews-clone-react-app/blob/master/src/styles.scss">here</a> inside it.</p>
<p>We'll use SCSS syntax to write CSS. So if you're new to SCSS, check out <a href="https://medium.com/better-programming/an-introduction-to-sass-scss-fdbda159b40?source=friends_link&amp;sk=c0846e19ddb4f53919a6abaf29032d10">my article here</a> for an introduction to it.</p>
<h2 id="how-to-create-the-initial-pages">How to Create the Initial Pages</h2>
<p>Create a new file <code>Header.js</code> inside the <code>components</code> folder with the following content:</p><pre><code class="language-jsx">import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () =&gt; {
return (
&lt;React.Fragment&gt;
&lt;h1&gt;Hacker News Clone&lt;/h1&gt;
&lt;div className="nav-link"&gt;
&lt;NavLink to="/top" activeClassName="active"&gt;
Top Stories
&lt;/NavLink&gt;
&lt;NavLink to="/new" activeClassName="active"&gt;
Latest Stories
&lt;/NavLink&gt;
&lt;NavLink to="/best" activeClassName="active"&gt;
Best Stories
&lt;/NavLink&gt;
&lt;/div&gt;
&lt;/React.Fragment&gt;
);
};
export default Header;
</code></pre>
<p>In this file, we have added a navigation menu to see the different types of stories. Each link has added a class of <code>active</code>. So when we click on that link it will be highlighted, indicating which route we are on.</p>
<p>Create a new file <code>HomePage.js</code> inside the <code>components</code> folder with the following content:</p><pre><code class="language-jsx">import React from 'react';
const HomePage = () =&gt; {
return &lt;React.Fragment&gt;Home Page&lt;/React.Fragment&gt;;
};
export default HomePage;
</code></pre>
<p>Create a new file <code>PageNotFound.js</code> inside the <code>components</code> folder with the following content:</p><pre><code class="language-jsx">import React from 'react';
import { Link } from 'react-router-dom';
const PageNotFound = () =&gt; {
return (
&lt;p&gt;
Page Not found. Go to &lt;Link to="/"&gt;Home&lt;/Link&gt;
&lt;/p&gt;
);
};
export default PageNotFound;
</code></pre>
<p>Create a new file <code>AppRouter.js</code> inside the <code>router</code> folder with the following content:</p><pre><code class="language-jsx">import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import PageNotFound from '../components/PageNotFound';
const AppRouter = () =&gt; {
return (
&lt;BrowserRouter&gt;
&lt;div className="container"&gt;
&lt;Header /&gt;
&lt;Switch&gt;
&lt;Route path="/" component={HomePage} exact={true} /&gt;
&lt;Route component={PageNotFound} /&gt;
&lt;/Switch&gt;
&lt;/div&gt;
&lt;/BrowserRouter&gt;
);
};
export default AppRouter;
</code></pre>
<p>In this file, initially, we have added two routes for the routing – one for the home page and the other for invalid routes.</p>
<p>If you're new to React Router, check out my free <a href="https://yogeshchavan1.podia.com/react-router-introduction">Introduction to React Router</a> course.</p>
<p>Now, open the <code>src/index.js</code> file and add the following contents inside it:</p><pre><code class="language-jsx">import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
ReactDOM.render(&lt;AppRouter /&gt;, document.getElementById('root'));
</code></pre>
<p>Now, start the application by running the <code>yarn start</code> command and you will see the following screen:</p>
<h2 id="api-integration">API Integration</h2>
<p>Now, inside the <code>utils</code> folder create a new file called <code>constants.js</code> with the following content:</p><pre><code class="language-js">export const BASE_API_URL = 'https://hacker-news.firebaseio.com/v0';
</code></pre>
<p>Create another file with the name <code>apis.js</code> inside the <code>utils</code> folder with the following content:</p><pre><code class="language-jsx">import axios from 'axios';
import { BASE_API_URL } from './constants';
const getStory = async (id) =&gt; {
try {
const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
return story;
} catch (error) {
console.log('Error while getting a story.');
}
};
export const getStories = async (type) =&gt; {
try {
const { data: storyIds } = await axios.get(
`${BASE_API_URL}/${type}stories.json`
);
const stories = await Promise.all(storyIds.slice(0, 30).map(getStory));
return stories;
} catch (error) {
console.log('Error while getting list of stories.');
}
};
</code></pre>
<p>In this file, for the <code>getStories</code> function we pass the type of story we want (<code>top</code>, <code>new</code> or <code>best</code>). Then we make an API call to the respective <code>.json</code> URL provided at the start of this article.</p>
<p>Note that we have declared the function as <code>async</code> so we can use the <code>await</code> keyword to call the API and wait for the response to come.</p><pre><code class="language-js">const { data: storyIds } = await axios.get(
`${BASE_API_URL}/${type}stories.json`
);
</code></pre>
<p>As the <code>axios</code> library always returns the result in the <code>.data</code> property of the response, we take out that property and rename it to <code>storyIds</code> because the API returns an array of story IDs.</p>
<p>Here, we use the ES6 destructuring syntax for renaming the <code>data</code> property to <code>storyIds</code>. This makes it easy to understand what <code>storyIds</code> contains rather than naming it <code>data</code>.</p>
<p>Note that the above code is the same as the below code:</p><pre><code class="language-js">const response = await axios.get(
`${BASE_API_URL}/${type}stories.json`
);
const storyIds = response.data;
</code></pre>
<p>Since we get an array of story IDs back, instead of making separate API calls for each <code>id</code> and then waiting for the previous one to finish, we use the <code>Promise.all</code> method to make API calls simultaneously for all the story ids.</p><pre><code class="language-js">const stories = await Promise.all(
storyIds.slice(0, 30).map((storyId) =&gt; getStory(storyId))
);
</code></pre>
<p>Here, we use the Array slice method to take only the first 30 story ids so the data will load faster.</p>
<p>Then we use the Array map method to call the <code>getStory</code> function to make an API call to the individual story item by passing the <code>storyId</code> to it.</p>
<p>As in the map function, we just take the storyId and pass it to the <code>getStory</code> function. We can simplify it to the following code:</p><pre><code class="language-js">const stories = await Promise.all(storyIds.slice(0, 30).map(getStory));
</code></pre>
<p>So the <code>storyId</code> will be automatically passed to the <code>getStory</code> function.</p>
<p>Inside the <code>getStory</code> function, we use ES6 template literal syntax to create a dynamic URL based on the passed id for making an API call.</p>
<p>And once we have the stories available, we return that back from the <code>getStories</code> function.</p>
<h2 id="how-to-create-the-data-fetcher">How to Create the Data Fetcher</h2>
<p>Create a new file <code>dataFetcher.js</code> inside the <code>hooks</code> folder with the following content:</p><pre><code class="language-jsx">import { useState, useEffect } from 'react';
import { getStories } from '../utils/apis';
const useDataFetcher = (type) =&gt; {
const [stories, setStories] = useState([]);
const [isLoading, setIsLoading] = useState(false);
useEffect(() =&gt; {
setIsLoading(true);
getStories(type)
.then((stories) =&gt; {
setStories(stories);
setIsLoading(false);
})
.catch(() =&gt; {
setIsLoading(false);
});
}, [type]);
return { isLoading, stories };
};
export default useDataFetcher;
</code></pre>
<p>In this file, we have declared a custom hook <code>useDataFetcher</code> that takes the type of story as a parameter and calls the <code>getStories</code> function defined in the <code>apis.js</code> file inside the <code>useEffect</code> hook.</p>
<p>We have added two state variables here using the <code>useState</code> hook, namely <code>stories</code> and <code>isLoading</code>. Before making the API call, we set the <code>isLoading</code> state to <code>true</code>. Once we get the complete response, we set it to <code>false</code>.</p>
<p>We also set the <code>isLoading</code> state to <code>false</code> inside the catch block so if there is an error, the loader will be hidden.</p>
<p>Once the response is received, we set the <code>stories</code> array with the response from the API and we return the <code>isLoading</code> and <code>stories</code> from the hook in an object. This means that any component using this hook will be able to get the updated value of these state values.</p>
<p>Also, note that we have added <code>type</code> as a dependency to the <code>useEffect</code> hook as a second parameter inside the array. So whenever we click on the navigation menu (for <code>top</code>, <code>latest</code> or <code>best</code> stories), the type will change and this <code>useEffect</code> hook will run again to make an API call to get the stories related to that type.</p>
<p>If you remember, inside the <code>apis.js</code> file the <code>getStories</code> function is declared as <code>async</code> so it will always return a promise. Therefore, we have added the <code>.then</code> handler to the <code>getStories</code> function to get the actual data from the response inside the <code>useEffect</code> hook inside the <code>dataFetcher.js</code> file like this:</p><pre><code class="language-js">getStories(type)
.then((stories) =&gt; {
...
</code></pre>
<h2 id="how-to-display-data-in-the-ui">How to Display Data in the UI</h2>
<p>Now, create a new file called <code>ShowStories.js</code> inside the <code>components</code> folder with the following content:</p><pre><code class="language-jsx">import React from 'react';
import Story from './Story';
import useDataFetcher from '../hooks/dataFetcher';
const ShowStories = (props) =&gt; {
const { type } = props.match.params;
const { isLoading, stories } = useDataFetcher(type);
return (
&lt;React.Fragment&gt;
{isLoading ? (
&lt;p className="loading"&gt;Loading...&lt;/p&gt;
) : (
&lt;React.Fragment&gt;
{stories.map(({ data: story }) =&gt; (
&lt;Story key={story.id} story={story} /&gt;
))}
&lt;/React.Fragment&gt;
)}
&lt;/React.Fragment&gt;
);
};
export default ShowStories;
</code></pre>
<p>In this file, we use the <code>useDataFetcher</code> custom hook inside the component. Based on the <code>isLoading</code> flag, we either display the <code>Loading</code> message or the list of stories by using the Array map method for each individual story.</p>
<p>Create a new file <code>Story.js</code> inside the <code>components</code> folder with the following content:</p><pre><code class="language-jsx">import React from 'react';
const Link = ({ url, title }) =&gt; (
&lt;a href={url} target="_blank" rel="noreferrer"&gt;
{title}
&lt;/a&gt;
);
const Story = ({ story: { id, by, title, kids, time, url } }) =&gt; {
return (
&lt;div className="story"&gt;
&lt;div className="story-title"&gt;
&lt;Link url={url} title={title} /&gt;
&lt;/div&gt;
&lt;div className="story-info"&gt;
&lt;span&gt;
by{' '}
&lt;Link url={`https://news.ycombinator.com/user?id=${by}`} title={by} /&gt;
&lt;/span&gt;
|&lt;span&gt;
{new Date(time * 1000).toLocaleDateString('en-US', {
hour: 'numeric',
minute: 'numeric'
})}
&lt;/span&gt;|
&lt;span&gt;
&lt;Link
url={`https://news.ycombinator.com/item?id=${id}`}
title={`${kids &amp;&amp; kids.length &gt; 0 ? kids.length : 0} comments`}
/&gt;
&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
);
};
export default Story;
</code></pre>
<p>In this file, we display the individual story. </p>
<p>For defining the <code>Link</code> component, we use the ES6 arrow function shorthand syntax of implicit return.</p>
<p>So the below code:</p><pre><code class="language-jsx">const Link = ({ url, title }) =&gt; (
&lt;a href={url} target="_blank" rel="noreferrer"&gt;
{title}
&lt;/a&gt;
);</code></pre>
<p>is the same as this code:</p><pre><code class="language-jsx">const Link = ({ url, title }) =&gt; {
return (
&lt;a href={url} target="_blank" rel="noreferrer"&gt;
{title}
&lt;/a&gt;
);
}</code></pre>
<p>In an arrow function, if there is a single line statement then we can skip the curly brackets and return keyword.</p>
<p>So the below code:</p><pre><code class="language-js">const add = (a,b) =&gt; a + b;</code></pre>
<p>is the same as this code:</p><pre><code class="language-js">const add = (a,b) =&gt; {
return a + b;
}</code></pre>
<p>But to make the JSX look neat and like a single line statement, we add the extra round brackets while defining the <code>Link</code> component.</p>
<p>Next, for the <code>Story</code> component, we have defined it like this:</p><pre><code class="language-jsx">const Story = ({ story: { id, by, title, kids, time, url } }) =&gt; {
// some code
}</code></pre>
<p>Here, we use ES6 destructuring syntax to get the properties of the story object which was passed from the <code>ShowStories</code> component.</p>
<p>So the above code is the same as the below code:</p><pre><code class="language-jsx">const Story = (props) =&gt; {
const { id, by, title, kids, time, url } = props.story;
// some code
}</code></pre>
<p>which is the same as the below code:</p><pre><code class="language-jsx">const Story = ({ story }) =&gt; {
const { id, by, title, kids, time, url } = story;
// some code
}</code></pre>
<p>In the API response, we get the time of the story in seconds. So in the <code>Story</code> component, we multiply it by 1000 to convert it to milliseconds so we can display the correct date in proper format using JavaScript's <code>toLocaleDateString</code> method:</p><pre><code class="language-js">{new Date(time * 1000).toLocaleDateString('en-US', {
hour: 'numeric',
minute: 'numeric'
})}</code></pre>
<p>Now, open the <code>AppRouter.js</code> file and add another Route for the <code>ShowStories</code> component before the <code>PageNotFound</code> Route.</p><pre><code class="language-jsx">&lt;Switch&gt;
&lt;Route path="/" component={HomePage} exact={true} /&gt;
&lt;Route path="/:type" component={ShowStories} /&gt;
&lt;Route component={PageNotFound} /&gt;
&lt;/Switch&gt;
</code></pre>
<p>Also, add an import for the <code>ShowStories</code> component at the top:</p><pre><code class="language-js">import ShowStories from '../components/ShowStories';
</code></pre>
<p>Now, restart the app by running the <code>yarn start</code> command and verify the application.</p>
<p>As you can see, the application is loading the top, latest, and best stories from the HackerNews API correctly.</p>
<h2 id="how-to-handle-dynamic-redirection">How to Handle Dynamic Redirection</h2>
<p>If you remember, we added the <code>HomePage</code> component so we can display something when the application loads. But now we actually don't need the <code>HomePage</code> component, because we can show the top stories page when the application loads.</p>
<p>So open the <code>AppRouter.js</code> file and change the first two routes from the below code:</p><pre><code class="language-jsx">&lt;Route path="/" component={HomePage} exact={true} /&gt;
&lt;Route path="/:type" component={ShowStories} /&gt;
</code></pre>
<p>to this code:</p><pre><code class="language-jsx">&lt;Route path="/" render={() =&gt; &lt;Redirect to="/top" /&gt;} exact={true} /&gt;
&lt;Route
path="/:type"
render={({ match }) =&gt; {
const { type } = match.params;
if (!['top', 'new', 'best'].includes(type)) {
return &lt;Redirect to="/" /&gt;;
}
return &lt;ShowStories type={type} /&gt;;
}}
/&gt;
</code></pre>
<p>In the first Route, when we load the application by visiting <code>http://localhost:3000/</code>, we redirect the user to the <code>/top</code> route.</p><pre><code class="language-jsx">&lt;Route path="/" render={() =&gt; &lt;Redirect to="/top" /&gt;} exact={true} /&gt;
</code></pre>
<p>Here, we use the render props pattern. So instead of providing a component, we use a prop with the name <code>render</code> where we can write the component code directly inside the function.</p>
<p>To know why we use <code>render</code> instead of <code>component</code> prop and what problem it solves, check out my free <a href="https://yogeshchavan1.podia.com/react-router-introduction">Introduction to React Router</a> course.</p>
<p>Next, we have added a <code>/:type</code> route:</p><pre><code class="language-jsx">&lt;Route
path="/:type"
render={({ match }) =&gt; {
const { type } = match.params;
if (!['top', 'new', 'best'].includes(type)) {
return &lt;Redirect to="/" /&gt;;
}
return &lt;ShowStories type={type} /&gt;;
}}
/&gt;
</code></pre>
<p>Here, if the route matches with <code>/top</code> or <code>/new</code> or <code>/best</code> then we're showing the user the <code>ShowStories</code> component. If the user enters some invalid value for a route like <code>/something</code>, we will redirect the user again to the <code>/top</code> route which will render the <code>ShowStories</code> component with <code>top</code> stories..</p>
<p>We use the ES7 Array <code>includes</code> method in the above code inside the if condition.</p>
<p>By default, the React router passes some props to each component mentioned in the <code>&lt;Route /&gt;</code>. One of them is <code>match</code> so <code>props.match.params</code> will contain the actual passed value for the <code>type</code>.</p>
<p>Therefore, when we access <code>http://localhost:3000/top</code>, <code>props.match.params</code> will contain the value <code>top</code>. When we access <code>http://localhost:3000/new</code>, <code>props.match.params</code> will contain the value <code>new</code> and so on.</p>
<p>For the render prop function, we use destructuring to get the <code>match</code> property of the props object by using the following syntax:</p><pre><code class="language-jsx">render={({ match }) =&gt; {
}
</code></pre>
<p>which is the same as:</p><pre><code class="language-jsx">render={(props) =&gt; {
const { match } = props;
}
</code></pre>
<p>Also, don't forget to import the <code>Redirect</code> component from the <code>react-router-dom</code> package at the top of the <code>AppRouter.js</code> file.</p><pre><code class="language-jsx">import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
</code></pre>
<p>Now, open the <code>ShowStories.js</code> file and change the below code:</p><pre><code class="language-jsx">const ShowStories = (props) =&gt; {
const { type } = props.match.params;
const { isLoading, stories } = useDataFetcher(type);
</code></pre>
<p>to this code:</p><pre><code class="language-jsx">const ShowStories = ({ type }) =&gt; {
const { isLoading, stories } = useDataFetcher(type ? type : 'top');
</code></pre>
<p>Here, we're passing the <code>type</code> prop passed from the <code>AppRouter</code> component to the <code>useDataFetcher</code> custom hook. This will render the correct type of data, based on the <code>type</code> passed.</p>
<h2 id="how-to-add-a-loading-overlay">How to Add a Loading Overlay</h2>
<p>Now, we have added redirection code to automatically redirect to the <code>/top</code> route on application load. The invalid route also redirects to the <code>/top</code> route.</p>
<p>But when the data is loading, we show a simple loading message. While the data is loading, the user can click on another link to make additional requests to the server, which is not good.</p>
<p>So let's add the loading message with an overlay to the screen so the user will not be able to click anywhere while the data is loading.</p>
<p>Create a new file <code>Loader.js</code> inside the <code>components</code> folder with the following content:</p><pre><code class="language-jsx">import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
const Loader = (props) =&gt; {
const [node] = useState(document.createElement('div'));
const loader = document.querySelector('#loader');
useEffect(() =&gt; {
loader.appendChild(node).classList.add('message');
}, [loader, node]);
useEffect(() =&gt; {
if (props.show) {
loader.classList.remove('hide');
document.body.classList.add('loader-open');
} else {
loader.classList.add('hide');
document.body.classList.remove('loader-open');
}
}, [loader, props.show]);
return ReactDOM.createPortal(props.children, node);
};
export default Loader;
</code></pre>
<p>Now open <code>public/index.html</code> file and alongside the div with id <code>root</code> add another div with id <code>loader</code>, like this:</p><pre><code class="language-js">&lt;div id="root"&gt;&lt;/div&gt;
&lt;div id="loader"&gt;&lt;/div&gt;
</code></pre>
<p>The <code>ReactDOM.createPortal</code> method which we have used in <code>Loader.js</code> will insert the loader inside the div with id <code>loader</code> so it will be outside our <code>React</code> application DOM hierarchy. This means that we can use it to provide an overlay for our entire application. This is the primary reason for using the <code>React Portal</code> for creating a loader.</p>
<p>So even if we include the <code>Loader</code> component in the <code>ShowStories.js</code> file, it will be rendered outside all the divs (but inside the div with id <code>loader</code>).</p>
<p>In the <code>Loader.js</code> file, we have first created a div where we will add a loader message</p><pre><code class="language-js">const [node] = useState(document.createElement('div'));
</code></pre>
<p>Then, we add the <code>message</code> class to that div and finally add that div to the loader div added in <code>index.html</code>:</p><pre><code class="language-js">document.querySelector('#loader').appendChild(node).classList.add('message');
</code></pre>
<p>and based on the <code>show</code> prop passed from the <code>ShowStories</code> component, we will add or remove the <code>hide</code> class. Then finally we will render the <code>Loader</code> component using this:</p><pre><code class="language-js">ReactDOM.createPortal(props.children, node);
</code></pre>
<p>Then we're adding or removing the <code>loader-open</code> class from the body tag of the page which will disable or enable the scrolling of the page:</p><pre><code class="language-js">document.body.classList.add('loader-open');
document.body.classList.remove('loader-open');
</code></pre>
<p>The data we pass in between the opening and closing <code>Loader</code> tag inside the <code>ShowStories</code> component will be available inside <code>props.children</code>. So we can display a simple loading message or we can include an image to be shown as a loader.</p>
<p>Now, let’s use this component.</p>
<p>Open <code>ShowStories.js</code> file and replace its contents with the following content:</p><pre><code class="language-jsx">import React from 'react';
import Story from './Story';
import useDataFetcher from '../hooks/dataFetcher';
import Loader from './Loader';
const ShowStories = (props) =&gt; {
const { type } = props.match.params;
const { isLoading, stories } = useDataFetcher(type);
return (
&lt;React.Fragment&gt;
&lt;Loader show={isLoading}&gt;Loading...&lt;/Loader&gt;
&lt;React.Fragment&gt;
{stories.map(({ data: story }) =&gt; (
&lt;Story key={story.id} story={story} /&gt;
))}
&lt;/React.Fragment&gt;
&lt;/React.Fragment&gt;
);
};
export default ShowStories;
</code></pre>
<p>Here, we use the Loader component by passing the show prop to it.</p><pre><code class="language-jsx">&lt;Loader show={isLoading}&gt;Loading...&lt;/Loader&gt;
</code></pre>
<p>Now, if you check the application, you will see the loading overlay:</p>
<p>So now the user cannot click on any link while the data is loading, which is a nice improvement.</p>
<p>For each story, we're showing the author and the total comments as hyperlinks. Clicking on them takes us to the Hackernews website to show the respective details as you can see in the below gif.</p>
<h2 id="closing-points">Closing points</h2>
<p>We're done building out the functionality of the App.</p>
<p>You can find the complete GitHub source code <a href="https://github.com/myogeshchavan97/hackernews-clone-react-app">here</a>, and a live demo <a href="https://hackernews-clone-react-app.netlify.app/">here</a>.</p>
<p>To take your skills further, you can improve the application by adding extra functionalities like:</p>
<ul>
<li>Add pagination functionality to load the next 30 records for each page</li>
<li>Create a separate page in the application for displaying the comments using the <a href="https://github.com/HackerNews/API">Hacker News API</a>. When clicked on, the comments count the link instead of redirecting the user to the Hackernews website</li>
</ul>
<h3 id="thanks-for-reading-">Thanks for reading!</h3>
<p>Want to build more amazing projects? Check them out <a href="https://github.com/myogeshchavan97#choose-pinned-repositories">here</a>.</p>
<p>Also, you can check out my free <a href="https://yogeshchavan1.podia.com/react-router-introduction">Introduction to React Router</a> course to learn React Router from scratch.</p>
<p>Want to learn all ES6+ features in detail including let and const, promises, various promise methods, array and object destructuring, arrow functions, async/await, import and export and a whole lot more? </p>
<p>Check out my <a href="https://yogeshchavan1.podia.com/mastering-modern-javascript?coupon=LA1HR55">Mastering Modern JavaScript</a> book. This book covers all the pre-requisites for learning React and helps you to become better at JavaScript and React.</p>
<p><strong>Don't forget to subscribe to my <a href="https://yogeshchavan.dev">weekly newsletter</a> to get amazing tips, tricks, articles and discount deals directly in your inbox.</strong></p>
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
