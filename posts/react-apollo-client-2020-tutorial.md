---
card: "/images/default.jpg"
tags: [React]
description: If you want to build apps with React and GraphQL, Apollo is t
author: "Milad E. Fahmy"
title: "The React + Apollo Tutorial for 2020 (Real-World Examples)"
created: "2021-08-15T19:29:04+02:00"
modified: "2021-08-15T19:29:04+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-apollo tag-apollo-client tag-graphql tag-2020 tag-javascript tag-cheatsheet tag-tutorial ">
<header class="post-full-header">
<h1 class="post-full-title">The React + Apollo Tutorial for 2020 (Real-World Examples)</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/07/React---Apollo-2020-Cheatsheet.png 300w,
/news/content/images/size/w600/2020/07/React---Apollo-2020-Cheatsheet.png 600w,
/news/content/images/size/w1000/2020/07/React---Apollo-2020-Cheatsheet.png 1000w,
/news/content/images/size/w2000/2020/07/React---Apollo-2020-Cheatsheet.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/07/React---Apollo-2020-Cheatsheet.png" alt="The React + Apollo Tutorial for 2020 (Real-World Examples)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>If you want to build apps with React and GraphQL, Apollo is the library you should use.</p>
<p>I've put together a comprehensive cheatsheet that goes through all of the core concepts in the Apollo library, showing you how to use it with React from front to back.</p>
<h3 id="wantyourowncopy">Want Your Own Copy? ?</h3>
<p>You can grab the PDF cheatsheet <strong><a href="https://reedbarger.com/resources/react-apollo-2020/">right here</a></strong> (it takes 5 seconds).</p>
<p>Here are some quick wins from grabbing the downloadable version:</p>
<ul>
<li>✓ Quick reference to review however and whenever</li>
<li>✓ Tons of useful code snippets based off of real-world projects</li>
<li>✓ Read this guide offline, wherever you like. On the train, at your desk, standing in line — anywhere.</li>
</ul>
<h3 id="prefervideolessons">Prefer Video Lessons? ?</h3>
<p>A great deal of this cheatsheet is based off of the app built in the React + GraphQL 2020 Crash Course.</p>
<p>If you want some more hands-on video lessons, plus see how to build apps with React, GraphQL and Apollo, you can watch the course <a href="https://bit.ly/2020-react-graphql">right here</a>.</p>
<blockquote>
<p>Note: This cheatsheet does assume familiarity with React and GraphQL. If you need a quick refresher on GraphQL and how to write it, a great resource is the <a href="https://graphql.org/learn/">official GraphQL website</a>.</p>
</blockquote>
<h2 id="tableofcontents">Table of Contents</h2>
<h3 id="gettingstarted">Getting Started</h3>
<ul>
<li><a href="#whatisapolloandwhydoweneedit">What is Apollo and why do we need it?</a></li>
<li><a href="#apolloclientbasicsetup">Apollo Client setup</a></li>
<li><a href="#creatinganewapolloclientbasicsetup">Creating a new Apollo Client</a></li>
<li><a href="#providingtheclienttoreactcomponents">Providing the client to React components</a></li>
<li><a href="#usingtheclientdirectly">Using the client directly</a></li>
<li><a href="#writinggraphqloperationsinjsfilesgql">Writing GraphQL in .js files with gql</a></li>
</ul>
<h3 id="coreapolloreacthooks">Core Apollo React Hooks</h3>
<ul>
<li><a href="#usequeryhook">useQuery Hook</a></li>
<li><a href="#uselazyqueryhook">useLazyQuery Hook</a></li>
<li><a href="#usemutationhook">useMutation Hook</a></li>
<li><a href="#usesubscriptionhook">useSubscription Hook</a></li>
</ul>
<h3 id="essentialrecipes">Essential Recipes</h3>
<ul>
<li><a href="#manuallysettingthefetchpolicy">Manually setting the fetch policy</a></li>
<li><a href="#updatingthecacheuponamutation">Updating the cache upon a mutation</a></li>
<li><a href="#refetchingquerieswithusequery">Refetching queries with useQuery</a></li>
<li><a href="#refetchingquerieswithusemutation">Refetching queries with useMutation</a></li>
<li><a href="#usingtheclientwithuseapolloclient">Accessing the client with useApolloClient</a></li>
</ul>
<h3 id="whatisapolloandwhydoweneedit">What is Apollo and why do we need it?</h3>
<p>Apollo is a library that brings together two incredibly useful technologies used to build web and mobile apps: React and GraphQL.</p>
<p>React was made for creating great user experiences with JavaScript. GraphQL is a very straightforward and declarative new language to more easily and efficiently fetch and change data, whether it is from a database or even from static files.</p>
<p>Apollo is the glue that binds these two tools together. Plus it makes working with React and GraphQL a lot easier by giving us a lot of custom React hooks and features that enable us to both write GraphQL operations and execute them with JavaScript code.</p>
<p>We'll cover these features in-depth throughout the course of this guide.</p>
<h3 id="apolloclientbasicsetup">Apollo Client basic setup</h3>
<p>If you are starting a project with a React template like Create React App, you will need to install the following as your base dependencies to get up and running with Apollo Client:</p>
<pre><code class="language-bash">// with npm:
npm i @apollo/react-hooks apollo-boost graphql
// with yarn:
yarn add @apollo/react-hooks apollo-boost graphql
</code></pre>
<p><code>@apollo/react-hooks</code> gives us React hooks that make performing our operations and working with Apollo client better</p>
<p><code>apollo-boost</code> helps us set up the client along with parse our GraphQL operations</p>
<p><code>graphql</code> also takes care of parsing the GraphQL operations (along with gql)</p>
<h3 id="apolloclientsubscriptionssetup">Apollo Client + subscriptions setup</h3>
<p>To use all manner of GraphQL operations (queries, mutations, and subscriptions), we need to install more specific dependencies as compared to just <code>apollo-boost</code>:</p>
<pre><code class="language-bash">// with npm:
npm i @apollo/react-hooks apollo-client graphql graphql-tag apollo-cache-inmemory apollo-link-ws
// with yarn:
yarn add @apollo/react-hooks apollo-client graphql graphql-tag apollo-cache-inmemory apollo-link-ws
</code></pre>
<p><code>apollo-client</code> gives us the client directly, instead of from <code>apollo-boost</code></p>
<p><code>graphql-tag</code> is integrated into <code>apollo-boost</code>, but not included in <code>apollo-client</code></p>
<p><code>apollo-cache-inmemory</code> is needed to setup our own cache (which <code>apollo-boost</code>, in comparison, does automatically)</p>
<p><code>apollo-link-ws</code> is needed for communicating over websockets, which subscriptions require</p>
<h3 id="creatinganewapolloclientbasicsetup">Creating a new Apollo Client (basic setup)</h3>
<p>The most straightforward setup for creating an Apollo client is by instantiating a new client and providing just the <code>uri</code> property, which will be your GraphQL endpoint:</p>
<pre><code class="language-jsx">import ApolloClient from "apollo-boost";
const client = new ApolloClient({
uri: "https://your-graphql-endpoint.com/api/graphql",
});
</code></pre>
<p><code>apollo-boost</code> was developed in order to make doing things like creating an Apollo Client as easy as possible. What it lacks for the time being, however, is support for GraphQL subscriptions over a websocket connection.</p>
<p>By default, it performs the operations over an http connection (as you can see through our provided uri above).</p>
<p>In short, use <code>apollo-boost</code> to create your client if you only need to execute queries and mutations in your app.</p>
<p>It setups an in-memory cache by default, which is helpful for storing our app data locally. We can read from and write to our cache to prevent having to execute our queries after our data is updated. We'll cover how to do that a bit later.</p>
<h3 id="creatinganewapolloclientsubscriptionssetup">Creating a new Apollo Client (+ subscriptions setup)</h3>
<p>Subscriptions are useful for more easily displaying the result of data changes (through mutations) in our app.</p>
<p>Generally speaking, we use subscriptions as an improved kind of query. Subscriptions use a websocket connection to 'subscribe' to updates and data, enabling new or updated data to be immediately displayed to our users without having to reexecute queries or update the cache.</p>
<pre><code class="language-jsx">import ApolloClient from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import { InMemoryCache } from "apollo-cache-inmemory";
const client = new ApolloClient({
link: new WebSocketLink({
uri: "wss://your-graphql-endpoint.com/v1/graphql",
options: {
reconnect: true,
connectionParams: {
headers: {
Authorization: "Bearer yourauthtoken",
},
},
},
}),
cache: new InMemoryCache(),
});
</code></pre>
<h3 id="providingtheclienttoreactcomponents">Providing the client to React components</h3>
<p>After creating a new client, passing it to all components is essential in order to be able to use it within our components to perform all of the available GraphQL operations.</p>
<p>The client is provided to the entire component tree using React Context, but instead of creating our own context, we import a special context provider from <code>@apollo/react-hooks</code> called <code>ApolloProvider</code> . We can see how it differs from the regular React Context due to it having a special prop, <code>client</code>, specifically made to accept the created client.</p>
<p>Note that all of this setup should be done in your index.js or App.js file (wherever your Routes declared) so that the Provider can be wrapped around all of your components.</p>
<pre><code class="language-jsx">import { ApolloProvider } from "@apollo/react-hooks";
const rootElement = document.getElementById("root");
ReactDOM.render(
&lt;React.StrictMode&gt;
&lt;ApolloProvider client={client}&gt;
&lt;BrowserRouter&gt;
&lt;Switch&gt;
&lt;Route exact path="/" component={App} /&gt;
&lt;Route exact path="/new" component={NewPost} /&gt;
&lt;Route exact path="/edit/:id" component={EditPost} /&gt;
&lt;/Switch&gt;
&lt;/BrowserRouter&gt;
&lt;/ApolloProvider&gt;
&lt;/React.StrictMode&gt;,
rootElement
);
</code></pre>
<h3 id="usingtheclientdirectly">Using the client directly</h3>
<p>The Apollo client is most important part of the library due to the fact that it is responsible for executing all of the GraphQL operations that we want to perform with React.</p>
<p>We can use the created client directly to perform any operation we like. It has methods corresponding to queries (<code>client.query()</code>), mutations (<code>client.mutate()</code>), and subscriptions (<code>client.subscribe()</code>).</p>
<p>Each method accepts an object and it's own corresponding properties:</p>
<pre><code class="language-jsx">// executing queries
client
.query({
query: GET_POSTS,
variables: { limit: 5 },
})
.then((response) =&gt; console.log(response.data))
.catch((err) =&gt; console.error(err));
// executing mutations
client
.mutate({
mutation: CREATE_POST,
variables: { title: "Hello", body: "World" },
})
.then((response) =&gt; console.log(response.data))
.catch((err) =&gt; console.error(err));
// executing subscriptions
client
.subscribe({
subscription: GET_POST,
variables: { id: "8883346c-6dc3-4753-95da-0cc0df750721" },
})
.then((response) =&gt; console.log(response.data))
.catch((err) =&gt; console.error(err));
</code></pre>
<p>Using the client directly can be a bit tricky, however, since in making a request, it returns a promise. To resolve each promise, we either need <code>.then()</code> and <code>.catch()</code> callbacks as above or to <code>await</code> each promise within a function declared with the <code>async</code> keyword.</p>
<h3 id="writinggraphqloperationsinjsfilesgql">Writing GraphQL operations in .js files (gql)</h3>
<p>Notice above that I didn't specify the contents of the variables <code>GET_POSTS</code>, <code>CREATE_POST</code>, and <code>GET_POST</code>.</p>
<p>They are the operations written in the GraphQL syntax which specify how to perform the query, mutation, and subscription respectively. They are what we would write in any GraphiQL console to get and change data.</p>
<p>The issue here, however, is that we can't write and execute GraphQL instructions in JavaScript (.js) files, like our React code has to live in.</p>
<p>To parse the GraphQL operations, we use a special function called a tagged template literal to allow us to express them as JavaScript strings. This function is named <code>gql</code>.</p>
<pre><code class="language-jsx">
// if using apollo-boost
import { gql } from "apollo-boost";
// else, you can use a dedicated package graphql-tag
import gql from "graphql-tag";
// query
const GET_POSTS = gql`
query GetPosts($limit: Int) {
posts(limit: $limit) {
id
body
title
createdAt
}
}
`;
// mutation
const CREATE_POST = gql`
mutation CreatePost($title: String!, $body: String!) {
insert_posts(objects: { title: $title, body: $body }) {
affected_rows
}
}
`;
// subscription
const GET_POST = gql`
subscription GetPost($id: uuid!) {
posts(where: { id: { _eq: $id } }) {
id
body
title
createdAt
}
}
`;
</code></pre>
<h3 id="usequeryhook">useQuery Hook</h3>
<p>The <code>useQuery</code> hook is arguably the most convenient way of performing a GraphQL query, considering that it doesn't return a promise that needs to be resolved.</p>
<p>It is called at the top of any function component (as all hooks should be) and receives as a first required argument—a query parsed with <code>gql</code>.</p>
<p>It is best used when you have queries that should be executed immediately, when a component is rendered, such as a list of data which the user would want to see immediately when the page loads.</p>
<p><code>useQuery</code> returns an object from which we can easily destructure the values that we need. Upon executing a query, there are three primary values will need to use within every component in which we fetch data. They are <code>loading</code>, <code>error</code>, and <code>data</code>.</p>
<pre><code class="language-jsx">const GET_POSTS = gql`
query GetPosts($limit: Int) {
posts(limit: $limit) {
id
body
title
createdAt
}
}
`;
function App() {
const { loading, error, data } = useQuery(GET_POSTS, {
variables: { limit: 5 },
});
if (loading) return &lt;div&gt;Loading...&lt;/div&gt;;
if (error) return &lt;div&gt;Error!&lt;/div&gt;;
return data.posts.map((post) =&gt; &lt;Post key={post.id} post={post} /&gt;);
}
</code></pre>
<p>Before we can display the data that we're fetching, we need to handle when we're loading (when <code>loading</code> is set to true) and we are attempting to fetch the data.</p>
<p>At that point, we display a div with the text 'Loading' or a loading spinner. We also need to handle the possibility that there is an error in fetching our query, such as if there's a network error or if we made a mistake in writing our query (syntax error).</p>
<p>Once we're done loading and there's no error, we can use our data in our component, usually to display to our users (as we are in the example above).</p>
<p>There are other values which we can destructure from the object that <code>useQuery</code> returns, but you'll need <code>loading</code>, <code>error</code>, and <code>data</code> in virtually every component where you execute <code>useQuery</code>. You can see a full list of all of the data we can get back from useQuery <a href="https://www.apollographql.com/docs/react/api/react-hooks/#result">here</a>.</p>
<h3 id="uselazyqueryhook">useLazyQuery Hook</h3>
<p>The <code>useLazyQuery</code> hook provides another way to perform a query, which is intended to be executed at some time after the component is rendered or in response to a given data change.</p>
<p><code>useLazyQuery</code> is very useful for things that happen at any unknown point of time, such as in response to a user's search operation.</p>
<pre><code class="language-jsx">function Search() {
const [query, setQuery] = React.useState("");
const [searchPosts, { data }] = useLazyQuery(SEARCH_POSTS, {
variables: { query: `%${query}%` },
});
const [results, setResults] = React.useState([]);
React.useEffect(() =&gt; {
if (!query) return;
// function for executing query doesn't return a promise
searchPosts();
if (data) {
setResults(data.posts);
}
}, [query, data, searchPosts]);
if (called &amp;&amp; loading) return &lt;div&gt;Loading...&lt;/div&gt;;
return results.map((result) =&gt; (
&lt;SearchResult key={result.id} result={result} /&gt;
));
}
</code></pre>
<p><code>useLazyQuery</code> differs from <code>useQuery</code>, first of all, in what's returned from the hook. It returns an array which we can destructure, instead of an object.</p>
<p>Since we want to perform this query sometime after the component is mounted, the first element that we can destructure is a function which you can call to perform that query when you choose. This query function is named <code>searchPosts</code> in the example above.</p>
<p>The second destructured value in the array is an object, which we can use object destructuring on and from which we can get all of the same<br>
properties as we did from <code>useQuery</code>, such as <code>loading</code>, <code>error</code>, and <code>data</code>.</p>
<p>We also get an important property named <code>called</code>,<br>
which tells us if we've actually called this function to perform our query.<br>
In that case, if <code>called</code> is true and <code>loading</code> is true, we want to<br>
return "Loading..." instead of our actual data, because are waiting for the data to be returned. This is how <code>useLazyQuery</code> handles fetching data in a synchronous way without any promises.</p>
<p>Note that we again pass any required variables for the query operation as a property, variables, to the second argument. However, if we need, we can pass those variables on an object provided to the query function itself.</p>
<h3 id="usemutationhook">useMutation Hook</h3>
<p>Now that we know how to execute lazy queries, we know exactly how to work with the <code>useMutation</code> hook.</p>
<p>Like the <code>useLazyQuery</code> hook, it returns an array which we can destructure into its two elements. In the first element, we get back a function, which in this case, we can call it to perform our mutation operation. For next element, we can again destructure an object which returns to us <code>loading</code>, <code>error</code> and <code>data</code>.</p>
<pre><code class="language-jsx">import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
const CREATE_POST = gql`
mutation CreatePost($title: String!, $body: String!) {
insert_posts(objects: { body: $body, title: $title }) {
affected_rows
}
}
`;
function NewPost() {
const [title, setTitle] = React.useState("");
const [body, setBody] = React.useState("");
const [createPost, { loading, error }] = useMutation(CREATE_POST);
function handleCreatePost(event) {
event.preventDefault();
// the mutate function also doesn't return a promise
createPost({ variables: { title, body } });
}
return (
&lt;div&gt;
&lt;h1&gt;New Post&lt;/h2&gt;
&lt;form onSubmit={handleCreatePost}&gt;
&lt;input onChange={(event) =&gt; setTitle(event.target.value)} /&gt;
&lt;textarea onChange={(event) =&gt; setBody(event.target.value)} /&gt;
&lt;button disabled={loading} type="submit"&gt;
Submit
&lt;/button&gt;
{error &amp;&amp; &lt;p&gt;{error.message}&lt;/p&gt;}
&lt;/form&gt;
&lt;/div&gt;
);
}
</code></pre>
<p>Unlike with queries, however, we don't use <code>loading</code> or <code>error</code> in order to conditionally render something. We generally use <code>loading</code> in such situations as when we're submitting a form to prevent it being submitted multiple times, to avoid executing the same mutation needlessly (as you can see in the example above).</p>
<p>We use <code>error</code> to display what goes wrong with our mutation to our users. If for example, some required values to our mutation are not provided, we can easily use that error data to conditionally render an error message within the page so the user can hopefully fix what's going wrong.</p>
<p>As compared to passing variables to the second argument of <code>useMutation</code>, we can access a couple of useful callbacks when certain things take place, such as when the mutation is completed and when there is an error. These callbacks are named <code>onCompleted</code> and <code>onError</code>.</p>
<p>The <code>onCompleted</code> callback gives us access to the returned mutation data and it's very helpful to do something when the mutation is done, such as going to a different page. The <code>onError</code> callback gives us the returned error when there is a problem with the mutation and gives us other patterns for handling our errors.</p>
<pre><code class="language-jsx">const [createPost, { loading, error }] = useMutation(CREATE_POST, {
onCompleted: (data) =&gt; console.log("Data from mutation", data),
onError: (error) =&gt; console.error("Error creating a post", error),
});
</code></pre>
<h3 id="usesubscriptionhook">useSubscription Hook</h3>
<p>The useSubscription hook works just like the useQuery hook.</p>
<p>useSubscription returns an object that we can destructure, that includes the same properties, loading, data, and error.</p>
<p>It executes our subscription immediately when the component is rendered. This means we need to handle loading and error states, and only afterwards display/use our data.</p>
<pre><code class="language-jsx">import { useSubscription } from "@apollo/react-hooks";
import gql from "graphql-tag";
const GET_POST = gql`
subscription GetPost($id: uuid!) {
posts(where: { id: { _eq: $id } }) {
id
body
title
createdAt
}
}
`;
// where id comes from route params -&gt; /post/:id
function PostPage({ id }) {
const { loading, error, data } = useSubscription(GET_POST, {
variables: { id },
// shouldResubscribe: true (default: false)
// onSubscriptionData: data =&gt; console.log('new data', data)
// fetchPolicy: 'network-only' (default: 'cache-first')
});
if (loading) return &lt;div&gt;Loading...&lt;/div&gt;;
if (error) return &lt;div&gt;Error!&lt;/div&gt;;
const post = data.posts[0];
return (
&lt;div&gt;
&lt;h1&gt;{post.title}&lt;/h1&gt;
&lt;p&gt;{post.body}&lt;/p&gt;
&lt;/div&gt;
);
}
</code></pre>
<p>Just like useQuery, useLazyQuery and useMutation, useSubscription accepts <code>variables</code> as a property provided on the second argument.</p>
<p>It also accepts, however, some useful properties such as <code>shouldResubscribe</code>. This is a boolean value, which will allow our subscription to automatically resubscribe, when our props change. This is useful for when we're passing variables to our you subscription hub props that we know will change.</p>
<p>Additionally, we have a callback function called <code>onSubscriptionData</code>, which enables us to call a function whenever the subscription hook receives new data. Finally, we can set the <code>fetchPolicy</code>, which defaults to 'cache-first'.</p>
<h3 id="manuallysettingthefetchpolicy">Manually Setting the Fetch Policy</h3>
<p>What can be very useful about Apollo is that it comes with its own cache, which it uses to manage the data that we query from our GraphQL endpoint.</p>
<p>Sometimes, however, we find that due to this cache, things aren't updated in the UI in the way that we want.</p>
<p>In many cases we don't, as in the example below, where we are editing a post on the edit page, and then after editing our post, we navigate to the home page to see it in a list of all posts, but we see the old data instead:</p>
<pre><code class="language-jsx">// route: /edit/:postId
function EditPost({ id }) {
const { loading, data } = useQuery(GET_POST, { variables: { id } });
const [title, setTitle] = React.useState(loading ? data?.posts[0].title : "");
const [body, setBody] = React.useState(loading ? data?.posts[0].body : "");
const [updatePost] = useMutation(UPDATE_POST, {
// after updating the post, we go to the home page
onCompleted: () =&gt; history.push("/"),
});
function handleUpdatePost(event) {
event.preventDefault();
updatePost({ variables: { title, body, id } });
}
return (
&lt;form onSubmit={handleUpdatePost}&gt;
&lt;input
onChange={(event) =&gt; setTitle(event.target.value)}
defaultValue={title}
/&gt;
&lt;input
onChange={(event) =&gt; setBody(event.target.value)}
defaultValue={body}
/&gt;
&lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
);
}
// route: / (homepage)
function App() {
const { loading, error, data } = useQuery(GET_POSTS, {
variables: { limit: 5 },
});
if (loading) return &lt;div&gt;Loading...&lt;/div&gt;;
if (error) return &lt;div&gt;Error!&lt;/div&gt;;
// updated post not displayed, still see old data
return data.posts.map((post) =&gt; &lt;Post key={post.id} post={post} /&gt;);
}
</code></pre>
<p>This not only due to the Apollo cache, but also the instructions for what data the query should fetch. We can changed how the query is fetched by using the <code>fetchPolicy</code> property.</p>
<p>By default, the <code>fetchPolicy</code> is set to 'cache-first'. It's going to try to look at the cache to get our data instead of getting it from the network.</p>
<p>An easy way to fix this problem of not seeing new data is to change the fetch policy. However, this approach is not ideal from a performance standpoint, because it requires making an additional request (using the cache directly does not, because it is local data).</p>
<p>There are many different options for the fetch policy listed below:</p>
<pre><code class="language-jsx">{
fetchPolicy: "cache-first"; // default
/*
cache-and-network
cache-first
cache-only
network-only
no-cache
standby
*/
}
</code></pre>
<p>I won't go into what each policy does exactly, but to solve our immediate problem, if you always want a query to get the latest data by requesting it from the network, we set <code>fetchPolicy</code> to 'network-first'.</p>
<pre><code class="language-jsx">const { loading, error, data } = useQuery(GET_POSTS, {
variables: { limit: 5 },
fetchPolicy: "network-first"
});
</code></pre>
<h3 id="updatingthecacheuponamutation">Updating the cache upon a mutation</h3>
<p>Instead of bypassing the cache by changing the fetch policy of <code>useQuery</code>, let's attempt to fix this problem by manually updating the cache.</p>
<p>When performing a mutation with <code>useMutation</code>. We have access to another callback, known as <code>update</code>.</p>
<p><code>update</code> gives us direct access to the cache as well as the data that is returned from a successful mutation. This enables us to read a given query from the cache, take that new data and write the new data to the query, which will then update what the user sees.</p>
<p>Working with the cache manually is a tricky process that a lot of people tend to avoid, but it's very helpful because it saves some time and resources by not having to perform the same request multiple times to update the cache manually.</p>
<pre><code class="language-jsx">function EditPost({ id }) {
const [updatePost] = useMutation(UPDATE_POST, {
update: (cache, data) =&gt; {
const { posts } = cache.readQuery(GET_POSTS);
const newPost = data.update_posts.returning;
const updatedPosts = posts.map((post) =&gt;
post.id === id ? newPost : post
);
cache.writeQuery({ query: GET_POSTS, data: { posts: updatedPosts } });
},
onCompleted: () =&gt; history.push("/"),
});
// ...
}
</code></pre>
<p>We first want to read the query and get the previous data from it. Then we need to take the new data. In this case, to find the post with a given id and replace it with <code>newPost</code> data, otherwise have it be the previous data, and then write that data back to the same query, making sure that it has the same data structure as before.</p>
<p>After all this, whenever we edit a post and are navigated back to the home page, we should see that new post data.</p>
<h3 id="refetchingquerieswithusequery">Refetching queries with useQuery</h3>
<p>Let's say we display a list of posts using a <code>GET_POSTS</code> query and are deleting one of them with a <code>DELETE_POST</code> mutation.</p>
<p>When a user deletes a post, what do we want to happen?</p>
<p>Naturally, we want it to be removed from the list, both the data and what is displayed to the users. When a mutation is performed, however, the query doesn't know that the data is changed.</p>
<p>There are a few ways of updating what we see, but one approach is to reexecute the query.</p>
<p>We can do so by grabbing the <code>refetch</code> function which we can destructure from the object returned by the <code>useQuery</code> hook and pass it down to the mutation to be executed when it is completed, using the <code>onCompleted</code> callback function:</p>
<pre><code class="language-jsx">function Posts() {
const { loading, data, refetch } = useQuery(GET_POSTS);
if (loading) return &lt;div&gt;Loading...&lt;/div&gt;;
return data.posts.map((post) =&gt; (
&lt;Post key={post.id} post={post} refetch={refetch} /&gt;
));
}
function Post({ post, refetch }) {
const [deletePost] = useMutation(DELETE_POST, {
onCompleted: () =&gt; refetch(),
});
function handleDeletePost(id) {
if (window.confirm("Are you sure you want to delete this post?")) {
deletePost({ variables: { id } });
}
}
return (
&lt;div&gt;
&lt;h1&gt;{post.title}&lt;/h1&gt;
&lt;p&gt;{post.body}&lt;/p&gt;
&lt;button onClick={() =&gt; handleDeletePost(post.id)}&gt;Delete&lt;/button&gt;
&lt;/div&gt;
);
}
</code></pre>
<h3 id="refetchingquerieswithusemutation">Refetching Queries with useMutation</h3>
<p>Note that we can also utilize the <code>useMutation</code> hook to reexecute our queries through an argument provided to the mutate function, called <code>refetchQueries</code>.</p>
<p>It accepts an array of queries that we want to refetch after a mutation is performed. Each queries is provided within an object, just like we would provide it to client.query(), and consists of a query property and a variables property.</p>
<p>Here is a minimal example to refetch our <code>GET_POSTS</code> query after a new post is created:</p>
<pre><code class="language-jsx">function NewPost() {
const [createPost] = useMutation(CREATE_POST, {
refetchQueries: [
{
query: GET_POSTS,
variables: { limit: 5 }
}
],
});
// ...
}
</code></pre>
<h3 id="usingtheclientwithuseapolloclient">Using the client with useApolloClient</h3>
<p>We can get access to the client across our components with the help of a special hook called use Apollo client. This execute the hook at the top of our function component and we get back the client itself.</p>
<pre><code class="language-jsx">function Logout() {
const client = useApolloClient();
// client is the same as what we created with new ApolloClient()
function handleLogout() {
// handle logging out user, then clear stored data
logoutUser();
client.resetStore().then(() =&gt; console.log("logged out!"));
/* Be aware that .resetStore() is async */
}
return &lt;button onClick={handleLogout}&gt;Logout&lt;/button&gt;;
}
</code></pre>
<p>And from there we can execute all the same queries, mutations, and subscriptions.</p>
<p>Note that there are a ton more features that come with methods that come with the client. Using the client, we can also write and read data to and from the cache that Apollo sets up (using <code>client.readData()</code> and <code>client.writeData()</code>).</p>
<p>Working with the Apollo cache deserves its own crash course in itself. A great benefit of working with Apollo is that we can also use it as a state management system to replace solutions like Redux for our global state. If you want to learn more about using Apollo to manage global app state you can <a href="https://www.apollographql.com/docs/react/data/local-state/">check out the following link</a>.</p>
<p>I attempted to make this cheatsheet as comprehensive as possible, though it still leaves out many Apollo features that are worth investigating.</p>
<p>If you want to more about Apollo, be sure to check out the <a href="https://www.apollographql.com/docs/react/">official Apollo documentation</a>.</p>
<h3 id="downloadthecheatsheet">Download the cheatsheet</h3>
<p>Want a quick reference of all of these concepts?</p>
<p><a href="https://reedbarger.com/resources/react-apollo-2020/"><img src="https://dev-to-uploads.s3.amazonaws.com/i/7herw99hu78t8gspo88d.png" alt="React and Apollo 2020 Cheatsheet"></a><em>Click to grab the complete PDF cheatsheet</em></p>
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
