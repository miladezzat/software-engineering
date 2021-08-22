---
card: "https://cdn-media-1.freecodecamp.org/images/1*CMxI-q0DAMtcF-VGs10G0Q.jpeg"
tags: [React]
description: "Note: This article deals with utilizing Apollo’s brand new Qu"
author: "Milad E. Fahmy"
title: "How to use Apollo’s brand new Query components to manage local state"
created: "2021-08-16T11:43:18+02:00"
modified: "2021-08-16T11:43:18+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-apollo tag-javascript tag-technology tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to use Apollo’s brand new Query components to manage local state</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*CMxI-q0DAMtcF-VGs10G0Q.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*CMxI-q0DAMtcF-VGs10G0Q.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*CMxI-q0DAMtcF-VGs10G0Q.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*CMxI-q0DAMtcF-VGs10G0Q.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*CMxI-q0DAMtcF-VGs10G0Q.jpeg" alt="How to use Apollo’s brand new Query components to manage local state">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Note: This article deals with utilizing Apollo’s brand new Query and Mutation components, instead of the HOCs. For those that have read the original article <a href="https://itnext.io/managing-local-state-with-apollo-client-3be522258645" rel="noopener">here</a>, be aware that the two articles are very similar.</p><h3 id="introduction">Introduction</h3><p>One of Web Development’s biggest strengths — and weaknesses — is its approach to modularity. A key programming mantra is to choose something (a function, a package) to do a single job and to do it well. The downside to this approach is that a single project can involve juggling dozens of separate technologies and concepts, each focusing on something specific.</p><p>So choosing Apollo Client to handle my local state as well as my remote data seems like a no brainer. Why deal with Redux’s boilerplate and idioms when I’ve already got Apollo/GraphQL set up to get data from my backend?</p><p>While this article is going to deal with setting up Apollo to handle local state, it’s not going to be an introduction to the tech. (This legit <a href="https://www.howtographql.com/" rel="noopener">howtographql</a> tutorial is a good start for that).</p><p>Note: The finished repo can be found <a href="https://github.com/andrico1234/apollo-local-state-starter" rel="noopener">here</a>. You can pore through the code if you get stuck or feel confused.</p><h3 id="getting-set-up">Getting set up</h3><p>We’ll start by cloning the corresponding repo from <a href="https://github.com/andrico1234/apollo-state-blog-repo" rel="noopener">here</a>. This repo contains a simple react website, with a sidebar, header, and a body. It’s pretty static in nature, no dynamic content (…yet). By the end of this tutorial, we’ll have Apollo managing the state of the website. Clicking an item in the sidebar will change the state of the website, which in turn updates the header to display the new data.</p><p>If you check <code>package.json</code> you’ll see that we’ve only got the basics, plus some additional packages pertaining to our parcel setup.</p><p>After cloning the repo, run your standard commands in your command line interface.</p><pre><code>&gt; yarn
&gt; yarn dev</code></pre><p>To install all of your packages and to whip up a local server, go to localhost:1234 and you’ll hopefully see the demo website in all of its glory. It’s static right now, so clicking around won’t do a thing.</p><p>What we want to do first and foremost is to get Apollo in our project, so install these packages. <code>apollo-client</code> lets us configure our instance of Apollo, and <code>react-apollo</code> is the driver that allows us to integrate it into our React application. Due to an issue with parcel (I think) we’ll also need to install <code>graphql</code>.</p><pre><code>&gt; yarn add apollo-client react-apollo graphql</code></pre><p>Create a new directory <code>src/apollo</code>, crack open an <code>index.js</code> file, and add the following:</p><pre><code class="language-js">import ApolloClient from ‘apollo-client’;
export const client = new ApolloClient({});</code></pre><p>This initializes our Apollo Client, which we will then use to wrap our React application by adding the following inside of our <code>src/index.js</code> file.</p><pre><code class="language-js">import { ApolloProvider } from ‘react-apollo’;
import { client } from ‘./apollo’;
const WrappedApp = (
&lt;ApolloProvider client={client} &gt;
&lt;App /&gt;
&lt;/ApolloProvider&gt;
);
ReactDOM.render(WrappedApp, document.getElementById(‘root’));
// Don’t be a sap. Wrap your app.</code></pre><p>We now have Apollo ready to use in our app. Everything builds when we restart our dev server, but we get an error when we try and access it in the browser. The console will tell us that we need to specify the link and cache properties for our Apollo client, so let’s do that.</p><pre><code>&gt; yarn add apollo-link apollo-cache-inmemory apollo-link-state</code></pre><p>The previous line adds the new Apollo dependencies to our application while the following code resolves the console errors we were getting. So go back to <code>apollo/index.js</code> and update it so the file looks like this:</p><pre><code class="language-js">import ApolloClient from ‘apollo-client’;
import { InMemoryCache } from ‘apollo-cache-inmemory’;
import { ApolloLink } from ‘apollo-link’;
import { withClientState } from ‘apollo-link-state’;
const cache = new InMemoryCache();
const stateLink = withClientState({
cache
});
export const client = new ApolloClient({
cache,
link: ApolloLink.from([
stateLink,
]),
})</code></pre><p>Let’s create an instance of our cache. The cache is Apollo’s normalized data store that stores the results of the query in a flattened data structure. We will read from the cache when we make our GraphQL query, and we’ll write to the cache when we make our mutation resolver.</p><p>You can see we’ve also added <code>link</code> to our client object. The <code>ApolloLink.from()</code>method lets us modularly configure how our queries are sent over HTTP. We can use this to handle errors and authorization, and to provide access to our backend. We’re not going to be doing any of this in the tutorial, but we will set up our client state here. So we create <code>const stateLink</code> above and pass in our cache. We’ll add our default state and resolvers here later.</p><p>Going back to the browser, you’ll see our lovely static site displaying in all of its magnificence. Let’s add some default state to our project and fire off our first query.</p><p>Inside of the Apollo directory, create a new directory called <code>defaults</code> and add an <code>index.js</code> inside of it. The file will contain the following:</p><pre><code class="language-js">export default {
apolloClientDemo: {
__typename: ‘ApolloClientDemo’,
currentPageName: ‘Apollo Demo’,
}
}</code></pre><p>We create an object which acts as the default state of our site. apolloClientDemo is the name of the data structure we want to access when we make our queries. The <code>__typename</code> is the mandatory identifier that our cache uses, and the currentPageName is the specific item of data that our header will use to — you guessed it — display the current page name.</p><p>We’ll need to add this to our <code>apollo/index.js</code> file:</p><pre><code class="language-js">import defaults from ‘./defaults’;
const stateLink = withClientState({
cache,
defaults,
});</code></pre><p>Let’s clear this up a little bit. <code>import</code> and <code>default</code> are both keywords associated with importing modules, but coincidentally the name of the object we’re exporting from <code>./defaults</code> is also called <code>defaults</code> (so don’t be thinking that I’m using <code>import/export</code> wrong). Treat this import line as if it was just any regular ol’ named import.</p><p>With that out of the way, let’s go make a query!</p><h3 id="how-to-make-a-query">How to make a query</h3><p>Add the following package to your project:</p><pre><code>&gt; yarn add graphql-tag</code></pre><p>and create a new directory <code>src/graphql</code>. In there, create two new files: <code>index.js</code> and <code>getPageName.js</code>. The GraphQL directory will house all the queries and mutations. We’ll create our query in <code>getPageName.js</code> by writing the following:</p><pre><code class="language-js">import gql from ‘graphql-tag’;
export const getPageNameQuery = gql`
query {
apolloClientDemo @client {
currentPageName
}
}
`;
export const getPageNameOptions = ({
props: ({ data: { apolloClientDemo } }) =&gt; ({
apolloClientDemo
})
});</code></pre><p>So we’re exporting two variables, the query and the options. If you’ve used GraphQL before, then the query will look familiar. We’re querying against the apolloClientDemo data structure, retrieving back nothing more than the currentPageName. You’ll notice that we’ve added the <code>@client</code> directive to our query. This tells Apollo to query our local state instead of sending the request to the backend.</p><p>Below you’ll see that we’re exporting some options. This is simply defining how we want the data to look when we map the results to the props. We’re destructuring the GraphQL response and sending it to our view so it looks like this:</p><pre><code class="language-js">props: {
currentPageName: ‘Apollo Demo’,
}
// and not this
props: {
data: {
apolloClientDemo: {
currentPageName: ‘Apollo Demo’,
}
}
}</code></pre><p>Go to the <code>graphql/index.js</code> file and export the query as follows:</p><pre><code class="language-js">export { getPageNameQuery, getPageNameOptions } from ‘./getPageName’;
</code></pre><p>Again, while this isn’t completely necessary for a small demo/project, this file is handy should your application grow larger. Having your queries exported from a single centralized location keeps everything organized and scalable.</p><p>Add to your Header.js:</p><pre><code class="language-js">import React from 'react';
import { Query } from 'react-apollo';
import { getPageNameQuery } from '../graphql';
const Header = () =&gt; (
&lt;Query query={getPageNameQuery}&gt;
{({ loading, error, data }) =&gt; {
if (error) return &lt;h1&gt;Error...&lt;/h1&gt;;
if (loading || !data) return &lt;h1&gt;Loading...&lt;/h1&gt;;
return &lt;h1&gt;{data.apolloClientDemo.currentPageName}&lt;/h1&gt;
}}
&lt;/Query&gt;
);
export const updatePageName = gql`
mutation updatePageName($name: String!) {
updatePageName(name: $name) @client {
currentPageName
}
}
`;</code></pre><p>and export it just like we did with the query.</p><pre><code class="language-js">export { updatePageNameMutation } from ‘./updatePageName’;
</code></pre><p>You’ll notice a few differences regarding the mutation. First off we’ve changed the keyword from query to mutation. This lets GraphQL know the type of action we’re performing. We’re also defining the name of the query and adding types to the variables we’re passing in. Inside here we’re specifying the name of the resolver we’ll be using to carry out the changes. We’re also passing through the variable and adding the <code>@client</code> directive.</p><p>Unlike the query, we can’t just add the mutation to our view and expect anything to happen. We’ll have to go back to our Apollo directory and add our resolvers. So go ahead and create a new directory <code>apollo/resolvers</code>, and files <code>index.js</code> and <code>updatePageName.js</code>. Inside of <code>updatePageName.js</code>add the following:</p><pre><code class="language-js">import gql from ‘graphql-tag’;
export default (_, { name }, { cache }) =&gt; {
const query = gql`
query GetPageName {
apolloClientDemo @client {
currentPageName
}
}
`;
const previousState = cache.readQuery({ query });
const data = {
apolloClientDemo: {
…previousState.apolloClientDemo,
currentPageName: name,
},
};
cache.writeQuery({
query,
data,
});
return null;
};</code></pre><p>There are a lot of interesting things going on in this file. Fortunately, it’s all very logical and doesn’t add many new concepts to what we’ve seen before.</p><p>So by default, when a resolver gets called, Apollo passes in all of the variables and the cache. The first argument is a simple ‘_’ because we don’t need to use it. The second argument is the variables object, and the final argument is the cache.</p><p>Before we can make changes to the Apollo store, we’ll need to retrieve it. So we make a simple request to get the current content from the store and assign it to previousState. Inside of the data variable, we create a new object with the new information we want to add to the store, which we then write to. You can see that we’ve spread the previous state inside of this object. This is so that only the data we explicitly want to change gets updated. Everything else remains as it is. This prevents Apollo from needlessly updating components whose data hasn’t changed.</p><p>Note: while this isn’t completely necessary for this example, it’s super useful when queries and mutations handle larger amounts of data, so I’ve kept it in for the sake of scalability.</p><p>Meanwhile in the <code>resolvers/index.js</code> file…</p><pre><code class="language-js">import updatePageName from ‘updatePageName’;
export default {
Mutation: {
updatePageName,
}
};</code></pre><p>This is the shape of object that Apollo expects when we pass in our resolvers in to stateLink back in <code>apollo/index.js</code>:</p><pre><code class="language-js">import resolvers from ‘./resolvers’;
const stateLink from = withClientState({
cache,
defaults,
resolvers,
});</code></pre><p>All that’s left to do is add the mutation to our sidebar component.</p><pre><code class="language-js">// previous imports
import { Mutation } from ‘react-apollo’;
import { updatePageNameMutation } from ‘../graphql’;
class Sidebar extends React.Component {
render() {
return (
&lt;Mutation mutation={updatePageNameMutation}&gt;
{updatePageName =&gt; (
// outer div elements
&lt;li className=“sidebar-item” onClick={() =&gt; updatePageName({ variables: { name: ‘React’} })}&gt;React&lt;/li&gt;
// other list items and outer div elements
)}
&lt;/Mutation&gt;
);
}
}
export default Sidebar;</code></pre><p>Like our resolver file, there’s a lot going on in this file — but it’s new. We import our <code>Mutation</code> component from <code>react-apollo</code>, wrap it around our component, and pass the <code>updatePageNameMutation</code> inside of the <code>mutation</code> prop.</p><p>The component now has access to the <code>updatePageName</code> method which fires the mutation whenever it’s called. We do this by adding the method as a handler to the <code>&lt;</code>li&gt;’s onClick property. The method expects to receive on object containing the variables as a parameter, so pass in the name you want to update the header to. If everything works, you should be able to run your dev server and click the sidebar items, which should then change our header.</p><h3 id="wrapping-up">Wrapping up</h3><p>Hooray! Hopefully everything worked out. If you got stuck, then check out the repo <a href="https://github.com/andrico1234/apollo-local-state-starter" rel="noopener">here</a>. It contains all of the finished code. If you’re thinking of using local state management in your next React app, then you can fork this repo and continue from there. If you’re interested in having this article/topic spoken about at a meetup or conference, then send a message my way!</p><p>There’s a lot more I wanted to cover in this tutorial, such as async resolvers (think Redux thunk), type checking/creating a schema, and a mutation update. So who knows… maybe I’ll drop another article sometime soon.</p><p>I really hope that this tutorial was useful for you. I’d like to shout out <a href="https://www.youtube.com/watch?v=2RvRcnD8wHY" rel="noopener">Sara Vieira’s youtube tutorial too</a>, as it helped me get my head around Apollo Client. If I haven’t done my job well enough by leaving you scratching your head, then follow the link. And finally, feel free to hit me up on social media, I’m a big music and tech fan so talk geek to me.</p><h4 id="thanks-for-reading-">Thanks for reading!</h4><p>If you’re interested in hosting me at a conference, meetup or as a speaking guest for any engagement then you can DM me on <a href="https://twitter.com/andricokaroulla?lang=en" rel="noopener">twitter</a>!</p><h4 id="you-can-check-out-my-other-articles-below-">You can check out my other articles below:</h4><p><a href="https://medium.com/@andricokaroulla/updated-for-apollo-v2-1-managing-local-state-with-apollo-d1882f2fbb7" rel="noopener"><em>How to use Apollo’s brand new Query components to manage local state</em></a></p><p><a href="http://Add a touch of Suspense to your web app with React.lazy()" rel="noopener"><em>Add a touch of Suspense to your web app with React.lazy()</em></a></p><p><a href="https://codeburst.io/no-need-to-wait-for-the-holidays-start-decorating-now-67b9dabd60d7" rel="noopener"><em>No need to wait for the holidays, start Decorating now</em></a></p><p><a href="https://itnext.io/managing-local-state-with-apollo-client-3be522258645" rel="noopener"><em>Managing local state with Apollo and Higher Order Components</em></a></p><p><a href="https://medium.com/@andricokaroulla/the-react-conference-drinking-game-7a996bfbef3" rel="noopener"><em>The React Conference drinking game</em></a></p><p><a href="https://codeburst.io/develop-and-deploy-your-own-react-monorepo-app-in-under-2-hours-using-lerna-travis-and-now-2b140d647238" rel="noopener"><em>Develop and Deploy your own React monorepo app in under 2 hours, using Lerna, Travis and Now</em></a></p>
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
