---
card: "https://cdn-media-1.freecodecamp.org/images/1*r36t-T5doFq1XGYIGHlwNA.png"
tags: [JavaScript]
description: by Nitish Phanse
author: "Milad E. Fahmy"
title: "Why you should use code splitting with higher order components"
created: "2021-08-15T19:48:44+02:00"
modified: "2021-08-15T19:48:44+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-performance tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Why you should use code splitting with higher order components</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*r36t-T5doFq1XGYIGHlwNA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*r36t-T5doFq1XGYIGHlwNA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*r36t-T5doFq1XGYIGHlwNA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*r36t-T5doFq1XGYIGHlwNA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*r36t-T5doFq1XGYIGHlwNA.png" alt="Why you should use code splitting with higher order components">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Nitish Phanse</p>
<h1 id="why-you-should-use-code-splitting-with-higher-order-components">Why you should use code splitting with higher order components</h1>
<p><a href="https://webpack.js.org/guides/code-splitting/" rel="noopener">Code splitting</a> can offer some respite when it comes to loading massive client apps. We’re in an era where a user’s attention span is probably close to 10 seconds per page, and you’re definitely not going to get a conversion if 6 seconds are spent fetching and parsing your JavaScript.</p>
<p>Webpack 3 offers brilliant support for dynamic imports. This allows you to load only the useful chunks to the client. Higher order components coupled with dynamic imports can split your JavaScript bundle into multiple tiny chunks. Recently, the React team added a sleek page on code splitting in their <a href="https://reactjs.org/docs/code-splitting.html#code-splitting" rel="noopener">documentation</a>.</p>
<p><strong>Higher order components</strong> are functions which accept a component as an argument and return another component.</p>
<p>Yes. That was the simplest definition I could think off, nothing fancy. Code splitting of your bundle has to be handled slightly differently when done on server side apps as compared to pure client apps.</p>
<p>I have divided this article into <strong>two</strong> <strong>parts. </strong>The first part explains code splitting in pure client apps. The second part explains code splitting on server rendered apps. Both methods use higher order components.</p>
<h3 id="pure-client-apps">Pure Client Apps</h3>
<p>These are apps which have a stripped down <code>index.html</code>. They’re usually used for authenticated routes (which need not utilize SEO benefits). They are built completely on the client side.</p>
<p>Typically, any <code>App.js</code> will look like the one below:</p>
<p>For tiny apps, the above structure does work. But if we have 20 routes on our webpage, then we’re creating a bit of a monster. So we dynamically import only those routes needed once the user navigates to that page.</p>
<p>This should split up your code based on the routes. <strong>asyncComponent</strong> is a function which loads a component chunk asynchronously. The <strong>LoadingComponent</strong> is a placeholder which we can display while the request is being completed.</p>
<figcaption>Webpack splits your bundle into chunks</figcaption>
</figure>
<p>Whenever you call your <strong>ReactDOM</strong>.<strong>render</strong> method, the appropriate chunk will get loaded. This way you load only the routes needed on the page that the user is viewing. When navigating to a route, the appropriate bundle will get called for.</p>
<h3 id="server-rendered-apps">Server Rendered Apps</h3>
<p>This section is definitely more interesting than the former. Server rendered apps create a markup string of the page in view and serve it to the client. Then we call the <strong>hydrate</strong> method. It first makes a diff check to see whether our server DOM tree is the same as the one made on the client. If its not the same, React will throw a warning saying there was a mismatch in your tree shape.</p>
<p>If we follow the above method for server rendered apps, we will definitely get the error mentioned. Why?? <strong>Take a step back for a minute, and see what’s happening.</strong></p>
<p>The first request to the page returns the app string. But when the hydrate method kicks in, it tries to fetch the bundle for the page requested. Due to the async nature of the fetch, it loads the <strong>LoaderComponent</strong> for a brief moment of time. When the component is fetched, it re-renders the page. This gives a jittery / jagged effect to our UI and spits out the dreaded mismatch in DOM warning.</p>
<p><strong>So we need a better approach to solve this problem.</strong></p>
<ol>
<li>Split our code on the server side too</li>
<li>Preload our components on the server side</li>
<li>Call the hydrate method only after the current bundle in context has been fetched.</li>
</ol>
<p><a href="https://github.com/thejameskyle/react-loadable" rel="noopener"><strong>React loadable</strong></a> is a pretty cool higher order component. It does all the above mentioned and is pretty simple to implement.</p>
<p>In your <strong>server.js:</strong></p>
<p>I am keeping the code to a minimum for the sake of simplicity.</p>
<p>Now let’s pick the bundle on the server side. We will use ReactLoadable’s Capture method, which will create a map of bundles needed for a that chunk.</p><pre><code>const modules = [];</code></pre><pre><code>function fetchModuleName(moduleName: string) {  return modules.push(moduleName);}</code></pre><pre><code>const markup = ReactDOMServer.renderToString(  &lt;Loadable.Capture report={fetchModuleName}&gt;    &lt;StaticRouter location={request.url} context={context}&gt;      &lt;App /&gt;    &lt;/StaticRouter&gt;  &lt;/Loadable.Capture&gt;);</code></pre>
<p>Once that is done, let’s use <strong>ReactLoadable</strong>’s Webpack plugin to create chunks of the code. It maintains a stats file which will later be used by the server file to map which bundles to serve to the client.</p><pre><code>const ReactLoadablePlugin = require(‘reactloadable/webpack’).ReactLoadablePlugin;</code></pre><pre><code>In webpack config</code></pre><pre><code>plugins : [  //Other plugins,</code></pre><pre><code>  new ReactLoadablePlugin({    filename: ‘./dist/build/react-loadable.json’,  })]</code></pre>
<p>So our routes are split. We need to call the <strong>hydrate </strong>method only after the bundles have been fetched from the server, so let’s tackle that. We will use ReactLoadables’s <strong>preloadReady</strong> method.</p><pre><code>window.main = () =&gt; {  Loadable.preloadReady().then(() =&gt; {    hydrate(      &lt;BrowserRouter&gt;        &lt;ScrollHandler&gt;          &lt;App /&gt;        &lt;/ScrollHandler&gt;      &lt;/BrowserRouter&gt;,    document.getElementById(‘root’)    );  });};</code></pre>
<p>We’ve attached a <strong>main </strong>function to the window object which will then get called in our server marked up file.</p>
<p>There are just a few steps left. We now need to tell our server file which appropriate bundle to fetch. After that is done, call the main function so that the client side app can take over.</p>
<p>So our final markup file will be like this:</p>
<p>A few things one can optimize on:</p>
<ol>
<li>Precache bundles for most frequently visited routes. For example, from the home page if the user is likely to navigate to the login or products page, you can use<strong> Loadable.preload()</strong> in the componentDidMount of the Home Page. A service worker can be handy here.</li>
<li>If you don’t want to block the main thread, use a web worker. Use the <strong>window.postMessage </strong>API<strong> </strong>and fetch bundles in the background.</li>
<li>React Loadable can be used to chunk bundles in any apt way you please.</li>
<li>To decide which chunks to pre-cache, read some data off your analytics library, mix panel / GA to see where users navigate from the home page.</li>
</ol>
<p>Feedback is always welcome!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
