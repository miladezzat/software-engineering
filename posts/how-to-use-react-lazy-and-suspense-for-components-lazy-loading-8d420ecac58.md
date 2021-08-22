---
card: "https://cdn-media-1.freecodecamp.org/images/1*F8lEWMyFHCnZLxcUUofs-w.png"
tags: [JavaScript]
description: by Boris Sever
author: "Milad E. Fahmy"
title: "How to use React.lazy and Suspense for components lazy loading"
created: "2021-08-15T19:40:20+02:00"
modified: "2021-08-15T19:40:20+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-react tag-front-end-development tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to use React.lazy and Suspense for components lazy loading</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*F8lEWMyFHCnZLxcUUofs-w.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*F8lEWMyFHCnZLxcUUofs-w.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*F8lEWMyFHCnZLxcUUofs-w.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*F8lEWMyFHCnZLxcUUofs-w.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*F8lEWMyFHCnZLxcUUofs-w.png" alt="How to use React.lazy and Suspense for components  lazy loading">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Boris Sever</p>
<h1 id="how-to-use-react-lazy-and-suspense-for-components-lazy-loading">How to use React.lazy and Suspense for components lazy loading</h1>
<p>React 16.6 brought code-splitting to a new level. You can now load your components when it’s really needed without installing additional libraries.</p>
<h3 id="what-are-code-splitting-and-lazy-loading">What are code-splitting and lazy loading?</h3>
<p>Webpack defines code-splitting as:</p>
<blockquote>“technique of splitting your code into various bundles which can then be loaded on demand or in parallel”. [<a href="https://webpack.js.org/guides/code-splitting/" rel="noopener">Source</a>]</blockquote>
<p>Another way to say: “loading on demand or in parallel” is <strong>lazy-loading</strong>.<br>Opposite of lazy-loading is <strong>eager-loading</strong>. Here everything is loaded no matter if you use it or not.</p>
<h3 id="why-would-we-use-code-splitting-and-lazy-loading"><strong>Why would we use code-splitting and lazy loading?</strong></h3>
<p>Sometimes we have to introduce a big chunk of code to cover some functionality. This code can be importing 3rd party dependency or writing it on our own. This code then affects the main bundle’s size.</p>
<p>Downloading a few MBs is a piece of cake for today’s internet speed. We still have to think about the users with a slow internet connection or using mobile data.</p>
<h3 id="how-was-it-done-before-react-16-6">How was it done before React 16.6?</h3>
<p>Probably the most popular library for lazy loading of React components is <code><a href="https://github.com/jamiebuilds/react-loadable" rel="noopener">react-loadable</a>.</code></p>
<p>It’s important that reactjs.org still recommends <code><em>react-loadable</em></code> if your app is rendered on the server. [<a href="https://reactjs.org/docs/code-splitting.html#reactlazy" rel="noopener">Source</a>]</p>
<p><code>react-loadable</code> is actually pretty similar to the new approach by React. I will show this in the following demo.</p>
<h3 id="is-anything-needed-for-setup">Is anything needed for setup?</h3>
<p>Let's see what reactjs.org has to say about it:</p>
<blockquote>“If you’re using <a href="https://github.com/facebookincubator/create-react-app" rel="noopener">Create React App</a>, <a href="https://github.com/zeit/next.js/" rel="noopener">Next.js</a>, <a href="https://www.gatsbyjs.org/" rel="noopener">Gatsby</a>, or a similar tool, you will have a Webpack setup out of the box to bundle your app.</blockquote>
<blockquote>If you aren’t, you’ll need to setup bundling yourself. For example, see the <a href="https://webpack.js.org/guides/installation/" rel="noopener">Installation</a> and <a href="https://webpack.js.org/guides/getting-started/" rel="noopener">Getting Started</a> guides on the Webpack docs.“<br>- reactjs.org</blockquote>
<p>Ok, so <em>Webpack</em> is required, which handles dynamic imports of the bundles.</p>
<p>The following demo is generated using <code>Create React App.</code> And in that case, <em>Webpack</em> is already configured and we’re ready to go.</p>
<h3 id="demo">DEMO</h3>
<p>For this demo, we will use <code><a href="https://github.com/diegomura/react-pdf" rel="noopener">react-pdf</a></code>. <code>react-pdf</code> is an awesome library used for creating PDF files on the browser, mobile, and server. We could generate a PDF on the server, but if we would rather do it on the client side, it comes with a cost: bundle size.</p>
<figcaption>Importing cost</figcaption>
</figure>
<blockquote><em>I’m using <a href="https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost" rel="noopener">Import cost </a>extension for Visual Studio Code to see the sizes of the libraries used.</em></blockquote>
<p>Let's say our requirement is to generate a PDF file when a user clicks on the button.</p>
<p>Now, this is a simple form with only one use case. Try to imagine a huge web app where this is a fraction of possibilities. Maybe this functionality is not used very often by the users.</p>
<p>Let’s put ourselves into that situation. PDF generation isn’t used very often and it doesn’t make sense to load the whole code for every page request.</p>
<p>I’ll try to show how we can develop a solution with lazy loading and without it.</p>
<h3 id="eager-vs-lazy-loading-showcase">Eager VS lazy loading showcase</h3>
<p>For both cases, we will use one component which imports dependencies from <code>react-pdf</code> and renders a simple PDF document.</p>
<p>Nothing spectacular going on here. We import<code>PDFViewer</code>,<code> Document</code>, <code>Page</code>, <code>Text</code>, <code>View</code> from <code>react-pdf</code>. These are all used in <code>render</code> method of <code>PDFPreview</code> component.</p>
<p><code>PDFPreview</code> receives only one <code>prop</code> called <code>title</code>. As the name implies, it is used as a title in a newly generated PDF file.</p>
<p><em>pdfStyles.js</em> looks like this:</p>
<h3 id="eager-loading"><strong>Eager loading</strong></h3>
<p>Let’s first see how the parent component without lazy loading could look like:</p>
<p>which renders the following view in the browser:</p>
<p>Let's go through the code together:</p>
<p>On line 2 we import <code>PDFPreview</code> component.</p>
<p>On line 6 we initialize the state with default values. <code>name</code> is a field used as a title in the PDF file, while field <code>PDFPreview</code> is a boolean which shows or hides <code>PDFPreview</code>.</p>
<p>Now, let's jump to <code>render</code> method and check what will be rendered.</p>
<p>On line 19 and 25 we render an input and a button. When user types into the input, <code>name</code> in the state is changed.</p>
<p>Then when a user clicks on the “Generate PDF ”, <code>showPDFPreview</code> is set to <code>true</code>. The component re-renders and shows the<code>PDFPreview</code> component.</p>
<p>Even though we use <code>PDFPreview</code> only on user click, all code related to it is included in the app bundle:</p>
<blockquote><em>This is a development environment. In production, the sizes would be significantly smaller. Still, we’re not splitting the code optimally.</em></blockquote>
<h3 id="lazy-loading"><strong>Lazy loading</strong></h3>
<p>We’ve only made small changes and let's go through them.</p>
<p>Line 2 is replaced with:<br> <code>const LazyPDFDocument = React.lazy(() =&gt; import("./PDFPreview"</code>));</p>
<p>Let's see what the React docs say about React.lazy:</p>
<blockquote><code><em>React.lazy</em></code><em> takes a function that must call a dynamic <code>import()</code>. This must return a <code>Promise</code> which resolves to a module with a <code>default</code> export containing a React component. </em><br><em>- reactjs.org</em></blockquote>
<p>On line 27 we use <code>Suspense</code>, which must be a parent of a lazy-loaded component. When <code>showPDFPreview</code> is set to true, <code>LazyPDFDocument</code> is starting to load.</p>
<p>Until the child component is resolved, <code>Suspense</code> shows whatever is provided to <code>fallback</code> prop.</p>
<p>The end result looks like this:</p>
<p>We can see <em>0.chunk.js </em>weights significantly less than before and <em>4.chunk.js</em> and <em>3.chunk.js</em> are loaded on button press.</p>
<h3 id="conclusion">Conclusion</h3>
<p>Every time we are introducing a new dependency into our project, our responsibility is to evaluate its cost and check how it affects the main bundle.</p>
<p>Then we have to ask is this functionality going to be used rarely and can we load it on demand without sacrificing the user experience.</p>
<p>If the answer is yes, then <code>React.Lazy</code> and <code>Suspense</code> really help us with that task.</p>
<p>Thank you for reading! Please share it with anyone who might find it useful and leave feedback.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
