---
card: "https://cdn-media-1.freecodecamp.org/images/1*Ecd_MVlJQoZ3bNn-xclFiA.jpeg"
tags: [React]
description: Let’s have a closer look at the feature that allows you to bu
author: "Milad E. Fahmy"
title: "Demystifying server-side rendering in React"
created: "2021-08-15T19:47:20+02:00"
modified: "2021-08-15T19:47:20+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-tech tag-programming tag-ux ">
<header class="post-full-header">
<h1 class="post-full-title">Demystifying server-side rendering in React</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Ecd_MVlJQoZ3bNn-xclFiA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*Ecd_MVlJQoZ3bNn-xclFiA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*Ecd_MVlJQoZ3bNn-xclFiA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Ecd_MVlJQoZ3bNn-xclFiA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Ecd_MVlJQoZ3bNn-xclFiA.jpeg" alt="Demystifying server-side rendering in React">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Let’s have a closer look at the feature that allows you to build <strong>universal</strong> <strong>applications</strong> with <strong>React</strong>.</p>
<p>Server-Side Rendering — SSR from here on — is the ability of a <strong>front-end framework</strong> to render markup while running on a <strong>back-end system</strong>.</p>
<p>Applications that have the ability to render both on the server and on the client are called <strong>universal apps</strong>.</p>
<h3 id="why-bother">Why bother?</h3>
<p>In order to understand why SSR is needed, we need to understand the evolution of web applications in the past 10 years.</p>
<p>This is tightly coupled with the rise of the <a href="https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58" rel="noopener"><em>Single Page Application</em></a><em> — </em>SPA from here on<em>. </em>SPAs offer great advantages in speed and UX over traditional server-rendered apps.</p>
<p>But there is a catch. The initial server request is generally returning an <strong>empty</strong> <strong>HTML</strong> file with a bunch of CSS and JavaScript (JS) links. Then the external files need to be fetched in order to render relevant markup.</p>
<p>This means that the user will have to wait longer for the <strong>initial render</strong>. This also means that crawlers may interpret your page as empty.</p>
<p>So the idea is to render your app on the server initially, then to leverage the capabilities of SPAs on the client.</p>
<p><strong>SSR + SPA = Universal App*</strong></p>
<p>*You will find the term <em>isomorphic app</em> in some articles — it’s the same thing.</p>
<p>Now the user does not have to wait for your JS to load and gets a <strong>fully</strong> <strong>rendered</strong> <strong>HTML</strong> as soon as the initial request returns a response.</p>
<p>Imagine the huge improvement for users navigating on slow 3G networks. Rather than waiting for over 20s for the website to load, you get content on their screen almost instantly.</p>
<p>And now, all the requests that are made to your server return fully rendered HTML. Great news for your SEO department!</p>
<p><a href="https://en.wikipedia.org/wiki/Web_crawler" rel="noopener">Crawlers</a> will now see your website as any other static site on the web and will <strong>index</strong> all the content you render on the server.</p>
<p>So to recap, the two main benefits we get from SSR are:</p>
<ul>
<li>Faster times for the initial page render</li>
<li>Fully indexable HTML pages</li>
</ul>
<h2 id="understanding-ssr-one-step-at-a-time">Understanding SSR — one step at a time</h2>
<p>Let’s take an iterative approach to build our complete SSR example. We start with React’s API for server rendering and we’ll add something to the mix at each step.</p>
<p>You can follow <a href="https://github.com/alexnm/react-ssr" rel="noopener">this repository</a> and the tags defined there for each step.</p>
<h3 id="basic-setup">Basic Setup</h3>
<p>First things first. In order to use SSR, we need a server! We’ll use a simple <em>Express</em> app that will render our React app.</p><pre><code class="language-javascript">import express from "express";
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import Layout from "./components/Layout";
const app = express();
app.use( express.static( path.resolve( __dirname, "../dist" ) ) );
app.get( "/*", ( req, res ) =&gt; {
const jsx = ( &lt;Layout /&gt; );
const reactDom = renderToString( jsx );
res.writeHead( 200, { "Content-Type": "text/html" } );
res.end( htmlTemplate( reactDom ) );
} );
app.listen( 2048 );
function htmlTemplate( reactDom ) {
return `
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;title&gt;React SSR&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="app"&gt;${ reactDom }&lt;/div&gt;
&lt;script src="./app.bundle.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
`;
}</code></pre>
<p>We need to tell Express to serve our static files from our output folder — line 10.</p>
<p>We create a route that handles all non-static incoming requests. This route will respond with the rendered HTML.</p>
<p>We use <code>renderToString</code> — lines 13–14 — to convert our starting JSX into a <code>string</code> that we insert in the HTML template.</p>
<p>As a note, we’re using the same Babel plugins for the client code and for the server code. So <em>JSX</em> and <em>ES Modules</em> work inside <code>server.js</code>.</p>
<p>The corresponding method on the client is now <code>ReactDOM.hydrate</code> . This function will use the server-rendered React app and will attach event handlers.</p><pre><code class="language-javascript">import ReactDOM from "react-dom";
import Layout from "./components/Layout";
const app = document.getElementById( "app" );
ReactDOM.hydrate( &lt;Layout /&gt;, app );</code></pre>
<p>To see the full example, check out the <code>basic</code> tag in the <a href="https://github.com/alexnm/react-ssr/tree/basic" rel="noopener">repository</a>.</p>
<p>That’s it! You just created your first <strong>server-rendered</strong> React app!</p>
<h4 id="react-router">React Router</h4>
<p>We have to be honest here, the app doesn’t do much. So let’s add a few routes and see how we handle the server part.</p><pre><code class="language-javascript">import { Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
export default class Layout extends React.Component {
/* ... */
render() {
return (
&lt;div&gt;
&lt;h1&gt;{ this.state.title }&lt;/h1&gt;
&lt;div&gt;
&lt;Link to="/"&gt;Home&lt;/Link&gt;
&lt;Link to="/about"&gt;About&lt;/Link&gt;
&lt;Link to="/contact"&gt;Contact&lt;/Link&gt;
&lt;/div&gt;
&lt;Switch&gt;
&lt;Route path="/" exact component={ Home } /&gt;
&lt;Route path="/about" exact component={ About } /&gt;
&lt;Route path="/contact" exact component={ Contact } /&gt;
&lt;/Switch&gt;
&lt;/div&gt;
);
}
}</code></pre>
<p>The <code>Layout</code> component now renders multiple routes on the client.</p>
<p>We need to mimic the Router setup on the server. Below you can see the main changes that should be done.</p><pre><code class="language-javascript">/* ... */
import { StaticRouter } from "react-router-dom";
/* ... */
app.get( "/*", ( req, res ) =&gt; {
const context = { };
const jsx = (
&lt;StaticRouter context={ context } location={ req.url }&gt;
&lt;Layout /&gt;
&lt;/StaticRouter&gt;
);
const reactDom = renderToString( jsx );
res.writeHead( 200, { "Content-Type": "text/html" } );
res.end( htmlTemplate( reactDom ) );
} );
/* ... */</code></pre>
<p>On the server, we need to wrap our React application in the <code>StaticRouter</code> component and provide the <code>location</code>.</p>
<p>As a side note, the <code>context</code> is used for tracking potential redirects while rendering the React DOM. This needs to be handled with a <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Redirection_messages" rel="noopener">3XX response</a> from the server.</p>
<p>The full example can be seen on the <code>router</code> tag in the <a href="https://github.com/alexnm/react-ssr/releases/tag/router" rel="noopener">same repository</a>.</p>
<h4 id="redux">Redux</h4>
<p>Now that we have routing capabilities, let’s integrate <a href="https://redux.js.org/" rel="noopener">Redux</a>.</p>
<p>In the simple scenario, we need Redux to handle state management on the client. But what if we need to render parts of the DOM based on that state? It makes sense to initialize Redux on the server.</p>
<p>If your app is <strong>dispatching</strong> <strong>actions</strong> on the <strong>server</strong>, it needs to <strong>capture</strong> the state and send it over the wire together with the HTML. On the client, we feed that initial state into Redux.</p>
<p>Let’s have a look at the server first:</p><pre><code class="language-javascript">/* ... */
import { Provider as ReduxProvider } from "react-redux";
/* ... */
app.get( "/*", ( req, res ) =&gt; {
const context = { };
const store = createStore( );
store.dispatch( initializeSession( ) );
const jsx = (
&lt;ReduxProvider store={ store }&gt;
&lt;StaticRouter context={ context } location={ req.url }&gt;
&lt;Layout /&gt;
&lt;/StaticRouter&gt;
&lt;/ReduxProvider&gt;
);
const reactDom = renderToString( jsx );
const reduxState = store.getState( );
res.writeHead( 200, { "Content-Type": "text/html" } );
res.end( htmlTemplate( reactDom, reduxState ) );
} );
app.listen( 2048 );
function htmlTemplate( reactDom, reduxState ) {
return `
/* ... */
&lt;div id="app"&gt;${ reactDom }&lt;/div&gt;
&lt;script&gt;
window.REDUX_DATA = ${ JSON.stringify( reduxState ) }
&lt;/script&gt;
&lt;script src="./app.bundle.js"&gt;&lt;/script&gt;
/* ... */
`;
}</code></pre>
<p>It looks ugly, but we need to send the full JSON state together with our HTML.</p>
<p>Then we look at the client:</p><pre><code class="language-javascript">import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import Layout from "./components/Layout";
import createStore from "./store";
const store = createStore( window.REDUX_DATA );
const jsx = (
&lt;ReduxProvider store={ store }&gt;
&lt;Router&gt;
&lt;Layout /&gt;
&lt;/Router&gt;
&lt;/ReduxProvider&gt;
);
const app = document.getElementById( "app" );
ReactDOM.hydrate( jsx, app );</code></pre>
<p>Notice that we call <code>createStore</code> twice, first on the server, then on the client. However, on the client, we initialize the state with whatever state was saved on the server. This process is similar to the DOM hydration.</p>
<p>The full example can be seen on the <code>redux</code> tag in the <a href="https://github.com/alexnm/react-ssr/releases/tag/redux" rel="noopener">same repository</a>.</p>
<h4 id="fetch-data">Fetch Data</h4>
<p>The final piece of the puzzle is loading data. This is where it gets a bit trickier. Let’s say we have an API serving JSON data.</p>
<p>In our codebase, I fetch all the events from the 2018 Formula 1 season <a href="https://ergast.com/mrd/" rel="noopener">from a public API</a>. Let’s say we want to display all the events on the <strong>Home</strong> page.</p>
<p>We can call our API only from the client after the React app is mounted and everything is rendered. But this will have a bad impact on UX, potentially showing a spinner or a loader before the user sees relevant content.</p>
<p>We already have Redux, as a way of storing data on the server and sending it over to the client.</p>
<p>What if we make our API calls on the server, store the results in Redux, and then render the full HTML with the relevant data for the client?</p>
<p>But how can we know which calls need to be made?</p>
<p>First, we need a different way of declaring routes. So we switch to the so-called routes config file.</p><pre><code class="language-javascript">export default [
{
path: "/",
component: Home,
exact: true,
},
{
path: "/about",
component: About,
exact: true,
},
{
path: "/contact",
component: Contact,
exact: true,
},
{
path: "/secret",
component: Secret,
exact: true,
},
];</code></pre>
<p>And we statically declare the data requirements on each component.</p><pre><code class="language-javascript">/* ... */
import { fetchData } from "../store";
class Home extends React.Component {
/* ... */
render( ) {
const { circuits } = this.props;
return (
/* ... */
);
}
}
Home.serverFetch = fetchData; // static declaration of data requirements
/* ... */</code></pre>
<p>Keep in mind that <code>serverFetch</code> is made up, you can use whatever sounds better for you.</p>
<p>As a note here, <code>fetchData</code> is a <a href="https://github.com/gaearon/redux-thunk" rel="noopener">Redux thunk action</a>, returning a Promise when dispatched.</p>
<p>On the server, we can use a special function from <code>react-router</code>, called <code>matchRoute</code>.</p><pre><code class="language-javascript">/* ... */
import { StaticRouter, matchPath } from "react-router-dom";
import routes from "./routes";
/* ... */
app.get( "/*", ( req, res ) =&gt; {
/* ... */
const dataRequirements =
routes
.filter( route =&gt; matchPath( req.url, route ) ) // filter matching paths
.map( route =&gt; route.component ) // map to components
.filter( comp =&gt; comp.serverFetch ) // check if components have data requirement
.map( comp =&gt; store.dispatch( comp.serverFetch( ) ) ); // dispatch data requirement
Promise.all( dataRequirements ).then( ( ) =&gt; {
const jsx = (
&lt;ReduxProvider store={ store }&gt;
&lt;StaticRouter context={ context } location={ req.url }&gt;
&lt;Layout /&gt;
&lt;/StaticRouter&gt;
&lt;/ReduxProvider&gt;
);
const reactDom = renderToString( jsx );
const reduxState = store.getState( );
res.writeHead( 200, { "Content-Type": "text/html" } );
res.end( htmlTemplate( reactDom, reduxState ) );
} );
} );
/* ... */</code></pre>
<p>With this, we get a list of components that will be mounted when React is rendered to string on the current URL.</p>
<p>We gather the <em>data requirements</em> and we wait for all the API calls to return. Finally, we resume the server render, but with data already available in Redux.</p>
<p>The full example can be seen on the <code>fetch-data</code> tag in the <a href="https://github.com/alexnm/react-ssr/tree/fetch-data" rel="noopener">same repository</a>.</p>
<p>You probably notice that this comes with a performance penalty, because we’re delaying the render until the data is fetched.</p>
<p>This is where you start comparing metrics and do your best to understand which calls are essential and which aren’t. For example, fetching products for an e-commerce app might be crucial, but prices and sidebar filters can be lazy loaded.</p>
<h4 id="helmet">Helmet</h4>
<p>As a bonus, let’s look at SEO. While working with React, you may want to set different values in your <code>&lt;he</code>ad&gt; tag. For example, you may want to se<em>t the</em> t<em>itle, met</em>a <em>tags, key</em>words, and so on.</p>
<p>Keep in mind that the <code>&lt;he</code>ad&gt; tag is normally not part of your React app!</p>
<p><a href="https://github.com/nfl/react-helmet" rel="noopener">react-helmet</a> has you covered in this scenario. And it has great support for SSR.</p><pre><code class="language-javascript">import React from "react";
import Helmet from "react-helmet";
const Contact = () =&gt; (
&lt;div&gt;
&lt;h2&gt;This is the contact page&lt;/h2&gt;
&lt;Helmet&gt;
&lt;title&gt;Contact Page&lt;/title&gt;
&lt;meta name="description" content="This is a proof of concept for React SSR" /&gt;
&lt;/Helmet&gt;
&lt;/div&gt;
);
export default Contact;</code></pre>
<p>You just add your <code>head</code> data anywhere in your component tree. This gives you support for changing values outside the mounted React app on the client.</p>
<p>And now we add the support for SSR:</p><pre><code class="language-javascript">/* ... */
import Helmet from "react-helmet";
/* ... */
app.get( "/*", ( req, res ) =&gt; {
/* ... */
const jsx = (
&lt;ReduxProvider store={ store }&gt;
&lt;StaticRouter context={ context } location={ req.url }&gt;
&lt;Layout /&gt;
&lt;/StaticRouter&gt;
&lt;/ReduxProvider&gt;
);
const reactDom = renderToString( jsx );
const reduxState = store.getState( );
const helmetData = Helmet.renderStatic( );
res.writeHead( 200, { "Content-Type": "text/html" } );
res.end( htmlTemplate( reactDom, reduxState, helmetData ) );
} );
} );
app.listen( 2048 );
function htmlTemplate( reactDom, reduxState, helmetData ) {
return `
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
${ helmetData.title.toString( ) }
${ helmetData.meta.toString( ) }
&lt;title&gt;React SSR&lt;/title&gt;
&lt;/head&gt;
/* ... */
`;
}</code></pre>
<p>And now we have a fully functional React SSR example!</p>
<p>We started from a simple render of HTML in the context of an <em>Express</em> app. We gradually added routing, state management, and data fetching. Finally, we handled changes outside the scope of the React application.</p>
<p>The final codebase is on <code>master</code> on <a href="https://github.com/alexnm/react-ssr" rel="noopener">the same repository</a> that was mentioned before.</p>
<h4 id="conclusion">Conclusion</h4>
<p>As you’ve seen, SSR is not a big deal, but it can get complex. And it’s much easier to grasp if you build your needs step by step.</p>
<p>Is it worth adding SSR to your application? As always, it depends. It’s a must if your website is public and accessible to hundreds of thousands of users. But if you’re building a tool/dashboard-like application it might not be worth the effort.</p>
<p>However, leveraging the power of universal apps is a step forward for the front-end community.</p>
<p>Do you use a similar approach for SSR? Or you think I missed something? Drop me a message below or on <a href="https://twitter.com/alexnmoldovan" rel="noopener">Twitter</a>.</p>
<p>If you found this article useful, help me share it with the community!</p>
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
