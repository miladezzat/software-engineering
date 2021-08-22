---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9c5d740569d1a4ca31bc.jpg"
tags: [React]
description: By Rohit Kumar
author: "Milad E. Fahmy"
title: "How to implement server-side rendering in your React app in three simple steps"
created: "2021-08-15T19:30:34+02:00"
modified: "2021-08-15T19:30:34+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-nodejs tag-javascript tag-es6 tag-progressive-web-app ">
<header class="post-full-header">
<h1 class="post-full-title">How to implement server-side rendering in your React app in three simple steps</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c5d740569d1a4ca31bc.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c5d740569d1a4ca31bc.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c5d740569d1a4ca31bc.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9c5d740569d1a4ca31bc.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9c5d740569d1a4ca31bc.jpg" alt="How to implement server-side rendering in your React app in three simple steps">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>By Rohit Kumar</p>
<p>In this tutorial, we’ll use server-side rendering to deliver an HTML response when a user or crawler hits a page URL. We’ll handle the latter requests on the client side.</p>
<p>Why do we need it?</p>
<p>Let me guide you to the answer.</p>
<h2 id="what-s-the-difference-between-client-side-rendering-and-server-side-rendering">What’s the difference between client-side rendering and server-side rendering?</h2>
<p>In<strong> Client-side rendering, </strong>your browser downloads a minimal HTML page. It renders the JavaScript and fills the content into it.</p>
<p><strong>Server-side rendering, </strong>on the other hand, renders the React components on the server. The output is HTML content.</p>
<p>You can combine these two to create an isomorphic app.</p>
<h2 id="cons-of-rendering-react-on-the-server">Cons of Rendering React on the Server</h2>
<ul>
<li>SSR can improve performance if your application is small. But it can also degrade performance if it is heavy.</li>
<li>It increases response time (and it can be worse if the server is busy).</li>
<li>It increases response size, which means the page takes longer to load.</li>
<li>It increases the complexity of the application.</li>
</ul>
<h2 id="when-should-you-use-server-side-rendering">When should you use Server Side Rendering?</h2>
<p>Despite these consequences of SSR, there are some situations in which you can and should use it.</p>
<h3 id="1-seo">1. SEO</h3>
<p>Every website wants to appear in searches. Correct me if I’m wrong.</p>
<p>Unfortunately, Search engine crawlers do not yet understand/render JavaScript.</p>
<p>This means they see a blank page, no matter how helpful your site is.</p>
<p>Many folks say that Google’s crawler <a href="https://www.searchenginejournal.com/googles-search-crawlers-natively-render-javascript-based-pages/226313/" rel="noopener">now renders JavaScript</a>.</p>
<p>To test this, I deployed the app on Heroku. Here is what I saw on the Google Search Console:</p>
<figcaption>Google’s crawler does not render React</figcaption>
</figure>
<p>A blank page.</p>
<p>This was the biggest reason I explored server-side rendering. Especially when it is a <a href="https://yoast.com/what-is-cornerstone-content/" rel="noopener">cornerstone page</a> such as a landing page, blog, and so on.</p>
<p>To verify if Google renders your site, visit:</p>
<p>Search Console Dashboard &gt; Crawl &gt; Fetch as Google. Enter the page URL or leave it empty for the homepage.</p>
<p>Select FETCH AND RENDER. Once complete, click to see the result.</p>
<h3 id="2-improve-performance">2. Improve performance</h3>
<p>In SSR, the application performance depends on the server’s resources and user’s network speed. This makes it very useful for content-heavy sites.</p>
<p><em>For Example</em>, say that you have a medium-price mobile phone with slow internet speed. You try to access a site that downloads 4MB of data before you can see anything.</p>
<p>Would you be able to see anything on your screen within 2–4 seconds?</p>
<p>Would you visit that site again?</p>
<p>I don’t think you would.</p>
<p>Another major improvement is in <a href="https://developers.google.com/web/tools/lighthouse/audits/time-to-interactive" rel="noopener">First User Interaction Time</a>. This is the difference in time from when a user hits the URL to when they see content.</p>
<p>Here’s the comparison. I tested it on a development Mac.</p>
<h4 id="react-rendered-on-server">React Rendered on Server</h4>
<figcaption>SSR performance report (Chrome)</figcaption>
</figure>
<p>The first interaction time is 300ms. Hydrate finishes at 400ms. The load event exits at 500ms approximately. You can see this by checking out the image above.</p>
<h4 id="react-rendered-on-client-s-browser">React Rendered on Client’s Browser</h4>
<figcaption>Client side performance report (Chrome)</figcaption>
</figure>
<p>The first interaction time is 400ms. The load event exits at 470ms.</p>
<p>The result speaks for itself. There’s a 100ms difference in the First User Interaction Time for such a small app.</p>
<h3 id="how-does-it-work-4-simple-steps-">How does it Work? — (4 Simple Steps)</h3>
<ul>
<li>Create a fresh Redux Store on every request.</li>
<li>Optionally dispatch some actions.</li>
<li>Get the state out of the Store and perform SSR.</li>
<li>Send the state obtained in the previous step along with the response.</li>
</ul>
<p>We will use the state passed in the response for creating the initial state on client-side.</p>
<p>Before you get started, <a href="https://github.com/Rohitkrops/ssr" rel="noopener">clone/download the complete example from Github</a> and use it for reference.</p>
<h3 id="getting-started-by-setting-up-our-app">Getting Started by Setting up our App</h3>
<p>First, open your favourite editor and shell. Create a new folder for your application. Let’s start.</p><pre><code class="language-bash">npm init --yes</code></pre>
<p>Fill in the details. After <code>package.json</code> is created, copy the dependencies and scripts below into it.</p>
<p>Install all dependencies by running:</p><pre><code class="language-bash">npm install</code></pre>
<p>You need to configure Babel and webpack for our build script to work.</p>
<p>Babel transforms ESM and react into Node and browser-understood code.</p>
<p>Create a new file <code>.babelrc</code> and put the line below in it.</p><pre><code class="language-js">{
"presets": ["@babel/env", "@babel/react"]
}
</code></pre>
<p>webpack bundles our app and its dependencies into a single file. Create another file <code>webpack.config.js </code>with the following code in it:</p><pre><code class="language-js">const path = require('path');module.exports = {
entry: {
client: './src/client.js',
bundle: './src/bundle.js'
},
output: {
path: path.resolve(__dirname, 'assets'),
filename: "[name].js"
},
module: {
rules: [
{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
]
}
}</code></pre>
<p>The build process output’s two files:</p>
<ol>
<li><code>assets/bundle.js</code> — pure client side app.</li>
<li><code>assets/client.js</code> — client side companion for SSR.</li>
</ol>
<p>The <code>src/ </code>folder contains the source code. The Babel compiled files go into <code>views/</code>. <code>views</code> directory will be created automatically if not present.</p>
<h3 id="why-do-we-need-to-compile-source-files">Why do we need to compile source files?</h3>
<p>The reason is the syntax <a href="http://jsmodules.io/cjs.html" rel="noopener">difference between ESM &amp; CommonJS</a>. While writing React and Redux, we heavily use import and export in all files.</p>
<p>Unfortunately, they don’t work in Node. Here comes Babel to rescue. The script below tells Babel to compile all files in the <code>src</code> directory and put the result in <code>views.</code></p><pre><code class="language-json">"babel": "babel src -d views",</code></pre>
<p>Now, Node can run them.</p>
<h3 id="copy-precoded-static-files">Copy Precoded &amp; Static files</h3>
<p>If you have already cloned the repository, copy from it. Otherwise d<a href="https://www.dropbox.com/s/2iijlivmlye6pqp/ssr-static.zip?dl=0" rel="noopener">ownload ssr-static.zip file from Dropbox</a>. Extract it and keep these three folders inside your app directory. Here’s what they contain.</p>
<ol>
<li>React <code>App</code> and components resides in <code>src/components</code>.</li>
<li>Redux files in <code>src/redux/</code>.</li>
<li><code>assets/ &amp; media/</code>: Contain static files such as <code>style.css</code> and images.</li>
</ol>
<h3 id="server-side">Server Side</h3>
<p>Create two new files named <code>server.js</code> and <code>template.js</code> inside the <code>src/</code> folder.</p>
<h3 id="1-src-server-js">1. src/server.js</h3>
<p>Magic happens here. This is the code you’ve been searching for.</p><pre><code class="language-jsx">import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import App from './components/app';
module.exports = function render(initialState) {
// Model the initial state
const store = configureStore(initialState);
let content = renderToString(&lt;Provider store={store} &gt;&lt;App /&gt;&lt;/Provider&gt;);
const preloadedState = store.getState();
return {
content,
preloadedState
};
};</code></pre>
<p>Instead of rendering our app, we need to wrap it into a function and export it. The function accepts the initial state of the application.</p>
<p>Here’s how it works.</p>
<ol>
<li>Pass <code>initialState</code> to <code>configureStore()</code>. <code>configureStore()</code>returns a new Store instance. Hold it inside the <code>store</code> variable.</li>
<li>Call <code>renderToString()</code> method, providing our App as input. It renders our app on the server and returns the HTML produced. Now, the variable <code>content</code> stores the HTML.</li>
<li>Get the state out of Redux Store by calling <code>getState()</code> on <code>store</code>. Keep it in a variable <code>preloadedState</code>.</li>
<li>Return the <code>content</code> and <code>preloadedState</code>. We will pass these to our template to get the final HTML page.</li>
</ol>
<h4 id="2-src-template-js"><code>2. src/template.js</code></h4>
<p><code>template.js</code> exports a function. It takes <code>title</code>, <code>state</code> and <code>content</code> as input. It injects them into the template and returns the final HTML document.</p>
<p>To pass along the state, the template attaches <code>state</code> to <code>window.__STATE__</code> inside a <code>&lt;scri</code>pt&gt; tag.</p>
<p>Now you can read <code>state</code> on the client side by accessing <code>window.__STATE__</code>.</p>
<p>We also include the SSR companion <code>assets/client.js</code> client-side application in another script tag.</p>
<p>If you request the pure client version, it only puts <code>assets/bundle.js</code> inside the script tag.</p>
<h3 id="the-client-side">The Client Side</h3>
<p>The client side is pretty straightforward.</p>
<h3 id="1-src-bundle-js">1. src/bundle.js</h3>
<p>This is how you write the React and Redux <code>Provider</code> wrap. It is our pure client-side app. No tricks here.</p><pre><code class="language-jsx">import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import App from './components/app';
const store = configureStore();
render(
&lt;Provider store={store} &gt; &lt;App /&gt; &lt;/Provider&gt;,
document.querySelector('#app')
);</code></pre>
<h3 id="2-src-client-js">2. src/client.js</h3>
<p>Looks familiar? Yeah, there is nothing special except <code>window.__STATE__.</code> All we need to do is grab the initial state from <code>window.__STATE__</code> and pass it to our <code>configureStore()</code> function as the initial state.</p>
<p>Let’s take a look at our new client file:</p><pre><code class="language-jsx">import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import App from './components/app';
const state = window.__STATE__;
delete window.__STATE__;
const store = configureStore(state);
hydrate(
&lt;Provider store={store} &gt; &lt;App /&gt; &lt;/Provider&gt;,
document.querySelector('#app')
);</code></pre>
<p>Let’s review the changes:</p>
<ol>
<li>Replace <code>render()</code> with <code>hydrate()</code>. <code><a href="https://reactjs.org/docs/react-dom.html#hydrate" rel="noopener">hydrate()</a></code> is the same as <code>render()</code> but is used to hydrate elements rendered by <code><a href="https://reactjs.org/docs/react-dom-server.html" rel="noopener">ReactDOMServer</a></code>. It ensures that the content is the same on the server and the client.</li>
<li>Read the state from the global window object <code>window.__STATE__</code>. Store it in a variable and delete the <code>window.__STATE__</code>.</li>
<li>Create a fresh store with <code>state</code> as initialState.</li>
</ol>
<p>All done here.</p>
<h2 id="putting-it-all-together">Putting it all together</h2>
<h3 id="index-js">Index.js</h3>
<p>This is the entry point of our application. It handles requests and templating.</p>
<p>It also declares an <code>initialState</code> variable. I have modelled it with data in the <code>assets/data.json </code>file. We will pass it to our <code>ssr()</code> function.</p>
<p><em>Note: While referencing a file that is inside <code>src/</code> from a file outside <code>src/</code> , use normal <code>require()</code> and replace <code>src/</code> by <code>views/</code>. You know the reason (Babel compile).</em></p>
<p>Routing</p>
<ol>
<li><code>/</code>: By default server-rendered homepage.</li>
<li><code>/client</code>: Pure client-side rendering example.</li>
<li><code>/exit</code>: Server stop button. Only available in development.</li>
</ol>
<h4 id="build-run">Build &amp; Run</h4>
<p>It’s time to build and run our application. We can do this with a single line of code.</p><pre><code class="language-bash">npm run build &amp;&amp; npm run start</code></pre>
<p>Now, the application is running at <a href="http://localhost:3000/" rel="noopener">http://localhost:3000</a>.</p>
<h3 id="ready-to-become-a-react-pro">Ready to become a React Pro?</h3>
<p>I am starting a new series from next Monday to get your React skills blazing, immediately.</p>
<figcaption>subscription link below ? </figcaption>
</figure>
<h3 id="thank-you-for-reading-this-">Thank you for reading this.</h3>
<p>If you like it and find it useful, follow me on <a href="http://twitter.com/rohitkrops" rel="noopener">Twitter</a> &amp; <a href="http://bit.ly/2zVj1fX" rel="noopener">Webflow</a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
