---
card: "https://cdn-media-1.freecodecamp.org/images/1*xHyQy7jPsssJTQaWcrgc3A.jpeg"
tags: [React]
description: by Simone Busoli
author: "Milad E. Fahmy"
title: "The easiest way to set up server-side rendering with React and axios"
created: "2021-08-15T19:36:59+02:00"
modified: "2021-08-15T19:36:59+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-axios tag-javascript tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">The easiest way to set up server-side rendering with React and axios</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*xHyQy7jPsssJTQaWcrgc3A.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*xHyQy7jPsssJTQaWcrgc3A.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*xHyQy7jPsssJTQaWcrgc3A.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*xHyQy7jPsssJTQaWcrgc3A.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*xHyQy7jPsssJTQaWcrgc3A.jpeg" alt="The easiest way to set up server-side rendering with React and axios">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Simone Busoli</p>
<h1 id="the-easiest-way-to-set-up-server-side-rendering-with-react-and-axios">The easiest way to set up server-side rendering with React and axios</h1>
<figcaption>Image Credit: <a href="https://pixabay.com/en/duck-duck-head-mallard-wild-duck-3340537/" rel="noopener" target="_blank" title="">https://pixabay.com/en/duck-duck-head-mallard-wild-duck-3340537/</a></figcaption>
</figure>
<p>Server-side rendering (SSR) is a double-edged sword. It’s terribly important for certain applications that require SEO support and meeting certain performance requirements, but it’s nasty to implement properly.</p>
<p>Some of the major difficulties revolve around user authentication and data pre-loading, especially because there are no established patterns around these.</p>
<p>When building a SPA, often you would use JWT for user authentication, sent via HTTP headers to the server. For data loading instead, you may use React component hooks like <code>componentWillMount</code>. But none of these work when rendering your component tree on the server.</p>
<h4 id="the-idea">? The idea</h4>
<p>You may have heard that not so long ago React introduced support for a new feature called <a href="https://reactjs.org/blog/2019/02/06/react-v16.8.0.html" rel="noopener">hooks</a>. This is particularly interesting because hooks are executed whenever the component renders, which opens up a scenario that wasn’t possible until now.</p>
<p>If hooks are executed when the component which uses them is rendered, it means that they’re executed both when rendering on the client and on the server. As a consequence of this, if a hook does an HTTP request and the library we use for doing that works both on the client and on the server, it means that we get HTTP requests on the client and on the server for free! ?</p>
<p><a href="https://github.com/axios/axios" rel="noopener">axios</a> is one such library, besides being my favorite one.</p>
<h4 id="-the-implementation">⚙️ The implementation</h4>
<p>It turns out that the idea has a reasonably straightforward implementation.</p>
<p>Let’s assume that you have already implemented Server Side Rendering in your React application.</p>
<blockquote>If you haven’t done so already, there are plenty of tutorials and examples out there. My favorite is found in the Redux <a href="https://redux.js.org/recipes/server-rendering" rel="noopener">documentation</a>.</blockquote>
<p>Let’s assume we now create a hook called <code>useAxios</code>. In its simplest form, it would look something like this:</p>
<p>If you’ve used hooks this shouldn’t look too complicated.</p>
<p>We’re using a <code>React.useState</code> hook to keep the value of the axios response, and a <code>React.useEffect </code>hook to trigger the axios request.</p>
<p>Using this hook would be as simple as this:</p>
<p>If you think this is cool, wait until you figure out - like I did - that this approach makes it super easy to implement data loading during Server Side Rendering.</p>
<p>If you think about it, what’s the complexity involved in pre-loading data on the server?</p>
<p>All that is involved is:</p>
<ul>
<li>triggering HTTP requests</li>
<li>waiting for responses</li>
<li>sending the data to the client along with the generated markup</li>
<li>make the client load the data so that it won’t execute those HTTP requests again, but simply bind the data to the components that need it</li>
</ul>
<p>Now, even though the concept is simple, it requires a bit of coding, hence why I built a library which encapsulated all this logic. It’s basically an extension to the simple implementation seen above, but rather than a dozen lines of code it’s ~100. Considering the features it provides and that using it is still pretty much a one-liner, I find it very exciting!</p>
<h4 id="building-axios-hooks">? Building axios-hooks</h4>
<p>You can check out the code already. The library is called <a href="https://github.com/simoneb/axios-hooks/" rel="noopener">axios-hooks</a> and you can install it with:</p>
<p><code>npm install axios-hooks</code></p>
<p>You will find several examples in the documentation, with accompanying <code>codesandbox.io</code> demos to get you started quickly. The usage is very simple but what I’m more interested in explaining is how it works, especially because it’s something that can be applied to many other hooks.</p>
<p>Using it on the client is already useful, because it takes away the pain of using React lifecycle hooks and component state. That’s unless you use a higher-order state management library, in which case you’re probably solving this problem in a different way altogether.</p>
<p>The biggest benefit, though, is combining it with Server Side Rendering. Here’s how it works:</p>
<ol>
<li>The server renders the component tree, i.e. via the <code>renderToString</code> function of the <code>react-dom/server</code> package</li>
<li><code>useAxios</code> hooks are triggered and HTTP requests started</li>
<li><code>axios-hooks</code> keeps a list of all the requests and caches the responses as they come back</li>
<li>The server code awaits for those requests to complete and extracts a serializable representation of them, which can be rendered along with the markup generated by rendering the component tree. This is sent back to the client</li>
<li>The client, before hydrating the component tree, fills the <code>axios-hooks</code> cache with the data returned by the server</li>
<li>The client hydrates the component tree and <code>useAxios</code> hooks are triggered again. Because the data is already there, no actual HTTP request is made on the client</li>
</ol>
<p>The concept is astonishingly simple, as is the implementation.</p>
<p>Checkout ? a<code><a href="https://github.com/simoneb/axios-hooks/" rel="noopener">xios-hooks </a></code>today and post your feedback!</p>
<h4 id="credits">Credits</h4>
<p>Credits for the original idea of leveraging React hooks in Server Side Rendering scenarios go to the cool guys at <a href="https://www.nearform.com" rel="noopener">NearForm</a>, who built the awesome <code><a href="https://github.com/nearform/graphql-hooks" rel="noopener">graphql-hooks</a></code> library.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
