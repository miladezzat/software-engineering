---
card: "/images/default.jpg"
tags: [Nextjs]
description: I wrote this tutorial to help you quickly learn Next.js and g
author: "Milad E. Fahmy"
title: "The Next.js Handbook"
created: "2021-08-15T19:32:07+02:00"
modified: "2021-08-15T19:32:07+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nextjs tag-reactjs tag-frontend tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">The Next.js Handbook</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/11/Group-1.png 300w,
/news/content/images/size/w600/2019/11/Group-1.png 600w,
/news/content/images/size/w1000/2019/11/Group-1.png 1000w,
/news/content/images/size/w2000/2019/11/Group-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/11/Group-1.png" alt="The Next.js Handbook">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I wrote this tutorial to help you quickly learn Next.js and get familiar with how it works.</p>
<p>It's ideal for you if you have zero to little knowledge of Next.js, you have used React in the past, and you are looking forward diving more into the React ecosystem, in particular server-side rendering.</p>
<p>I find Next.js an awesome tool to create Web Applications, and at the end of this post I hope you'll be as excited about it as I am. And I hope it will help you learn Next.js!</p>
<p><a href="https://flaviocopes.com/page/nextjs-handbook/">Note: you can download a PDF / ePub / Mobi version of this tutorial so you can read it offline</a>!</p>
<h2 id="index">Index</h2>
<ol>
<li><a href="#introduction">Introduction</a></li>
<li><a href="#the-main-features-provided-by-next-js">The main features provided by Next.js</a></li>
<li><a href="#next-js-vs-gatsby-vs-create-react-app">Next.js vs Gatsby vs <code>create-react-app</code></a></li>
<li><a>How to install Next.js</a></li>
<li><a href="#view-source-to-confirm-ssr-is-working">View source to confirm SSR is working</a></li>
<li><a href="#the-app-bundles">The app bundles</a></li>
<li><a href="#what-s-that-icon-on-the-bottom-right">What's that icon in the bottom right?</a></li>
<li><a href="#install-the-react-developer-tools">Install the React DevTools</a></li>
<li><a href="#other-debugging-techniques-you-can-use">Other debugging techniques you can use</a></li>
<li><a href="#adding-a-second-page-to-the-site">Adding a second page to the site</a></li>
<li><a href="#linking-the-two-pages">Linking the two pages</a></li>
<li><a href="#dynamic-content-with-the-router">Dynamic content with the router</a></li>
<li><a href="#prefetching-1">Prefetching</a></li>
<li><a href="#using-the-router-to-detect-the-active-link">Using the router to detect the active link</a></li>
<li><a href="#using-next-router">Using <code>next/router</code></a></li>
<li><a href="#feed-data-to-the-components-using-getinitialprops">Feed data to the components using <code>getInitialProps()</code></a></li>
<li><a href="#css">CSS</a></li>
<li><a href="#populating-the-head-tag-with-custom-tags">Populating the head tag with custom tags</a></li>
<li><a href="#adding-a-wrapper-component">Adding a wrapper component</a></li>
<li><a href="#api-routes">API routes</a></li>
<li><a href="#run-code-only-on-the-server-side-or-client-side">Run code on the server side, or on the client side</a></li>
<li><a href="#deploying-the-production-version">Deploying the production version</a></li>
<li><a href="#deploying-on-now">Deploying on Now</a></li>
<li><a href="#analyzing-the-app-bundles">Analyzing the app bundles</a></li>
<li><a href="#lazy-loading-modules">Lazy loading modules</a></li>
<li><a href="#where-to-go-from-here">Where to go from here</a></li>
</ol>
<h2 id="introduction">Introduction</h2>
<p>Working on a modern JavaScript application powered by React is awesome until you realize that there are a couple problems related to rendering all the content on the client-side.</p>
<p>First, the page takes longer to become visible to the user, because before the content loads, all the JavaScript must load, and your application needs to run to determine what to show on the page.</p>
<p>Second, if you are building a publicly available website, you have a content SEO issue. Search engines are getting better at running and indexing JavaScript apps, but it's much better if we can send them content instead of letting them figure it out.</p>
<p>The solution to both of those problems is <strong>server rendering</strong>, also called <strong>static pre-rendering</strong>.</p>
<p><a href="https://nextjs.org">Next.js</a> is one React framework to do all of this in a very simple way, but it's not limited to this. It's advertised by its creators as a <strong>zero-configuration, single-command toolchain for React apps</strong>.</p>
<p>It provides a common structure that allows you to easily build a frontend React application, and transparently handles server-side rendering for you.</p>
<h2 id="the-main-features-provided-by-next-js">The main features provided by Next.js</h2>
<p>Here is a non-exhaustive list of the main Next.js features:</p>
<h3 id="hot-code-reloading">Hot Code Reloading</h3>
<p>Next.js reloads the page when it detects any change saved to disk.</p>
<h3 id="automatic-routing">Automatic Routing</h3>
<p>Any URL is mapped to the filesystem, to files put in the <code>pages</code> folder, and you don't need any configuration (you have customization options of course).</p>
<h3 id="single-file-components">Single File Components</h3>
<p>Using <code>styled-jsx</code>, completely integrated as built by the same team, it's trivial to add styles scoped to the component.</p>
<h3 id="server-rendering">Server Rendering</h3>
<p>You can render React components on the server side, before sending the HTML to the client.</p>
<h3 id="ecosystem-compatibility">Ecosystem Compatibility</h3>
<p>Next.js plays well with the rest of the JavaScript, Node, and React ecosystem.</p>
<h3 id="automatic-code-splitting">Automatic Code Splitting</h3>
<p>Pages are rendered with just the libraries and JavaScript that they need, no more. Instead of generating one single JavaScript file containing all the app code, the app is broken up automatically by Next.js in several different resources.</p>
<p>Loading a page only loads the JavaScript necessary for that particular page.</p>
<p>Next.js does that by analyzing the resources imported.</p>
<p>If only one of your pages imports the Axios library, for example, that specific page will include the library in its bundle.</p>
<p>This ensures your first page load is as fast as it can be, and only future page loads (if they will ever be triggered) will send the JavaScript needed to the client.</p>
<p>There is one notable exception. Frequently used imports are moved into the main JavaScript bundle if they are used in at least half of the site pages.</p>
<h3 id="prefetching">Prefetching</h3>
<p>The <code>Link</code> component, used to link together different pages, supports a <code>prefetch</code> prop which automatically prefetches page resources (including code missing due to code splitting) in the background.</p>
<h3 id="dynamic-components">Dynamic Components</h3>
<p>You can import JavaScript modules and React Components dynamically.</p>
<h3 id="static-exports">Static Exports</h3>
<p>Using the <code>next export</code> command, Next.js allows you to export a fully static site from your app.</p>
<h3 id="typescript-support">TypeScript Support</h3>
<p>Next.js is written in TypeScript and as such comes with an excellent TypeScript support.</p>
<h2 id="next-js-vs-gatsby-vs-create-react-app">Next.js vs Gatsby vs <code>create-react-app</code></h2>
<p>Next.js, <a href="https://flaviocopes.com/gatsby/">Gatsby</a>, and <a href="https://flaviocopes.com/react-create-react-app/"><code>create-react-app</code></a> are amazing tools we can use to power our applications.</p>
<p>Let's first say what they have in common. They all have React under the hood, powering the entire development experience. They also abstract <a href="https://flaviocopes.com/webpack/">webpack</a> and all those low level things that we used to configure manually in the good old days.</p>
<p><code>create-react-app</code> does not help you generate a server-side-rendered app easily. Anything that comes with it (SEO, speed...) is only provided by tools like Next.js and Gatsby.</p>
<p><strong>When is Next.js better than Gatsby?</strong></p>
<p>They can both help with <strong>server-side rendering</strong>, but in 2 different ways.</p>
<p>The end result using Gatsby is a static site generator, without a server. You build the site, and then you deploy the result of the build process statically on Netlify or another static hosting site.</p>
<p>Next.js provides a backend that can server side render a response to request, allowing you to create a dynamic website, which means you will deploy it on a platform that can run Node.js.</p>
<p>Next.js <em>can</em> generate a static site too, but I would not say it's its main use case.</p>
<p>If my goal was to build a static site, I'd have a hard time choosing and perhaps Gatsby has a better ecosystem of plugins, including many for blogging in particular.</p>
<p>Gatsby is also heavily based on <a href="https://flaviocopes.com/graphql/">GraphQL</a>, something you might really like or dislike depending on your opinions and needs.</p>
<h2 id="how-to-install-next-js">How to install Next.js?</h2>
<p>To install Next.js, you need to have Node.js installed.</p>
<p>Make sure that you have the latest version of Node. Check with running <code>node -v</code> in your terminal, and compare it to the latest LTS version listed on <a href="https://nodejs.org/">https://nodejs.org/</a>.</p>
<p>After you install Node.js, you will have the <code>npm</code> command available into your command line.</p>
<p>If you have any trouble at this stage, I recommend the following tutorials I wrote for you:</p>
<ul>
<li><a href="https://flaviocopes.com/node-installation/">How to install Node.js</a></li>
<li><a href="https://flaviocopes.com/how-to-update-node/">How to update Node.js</a></li>
<li><a href="https://flaviocopes.com/npm/">An introduction to the npm package manager</a></li>
<li><a href="https://flaviocopes.com/shells/">Unix Shells Tutorial</a></li>
<li><a href="https://flaviocopes.com/macos-terminal/">How to use the macOS terminal</a></li>
<li><a href="https://flaviocopes.com/bash/">The Bash Shell</a></li>
</ul>
<p>Now that you have Node, updated to the latest version, and <code>npm</code>, we're set!</p>
<p>We can choose 2 routes now: using <code>create-next-app</code> or the classic approach which involves installing and setting up a Next app manually.</p>
<h3 id="using-create-next-app">Using create-next-app</h3>
<p>If you're familiar with <a href="https://flaviocopes.com/react-create-react-app/"><code>create-react-app</code></a>, <code>create-next-app</code> is the same thing - except it creates a Next app instead of a React app, as the name implies.</p>
<p>I assume you have already installed Node.js, which, from version 5.2 (2+ years ago at the time of writing), comes with the <a href="https://flaviocopes.com/npx/"><code>npx</code> command</a> bundled. This handy tool lets us download and execute a JavaScript command, and we'll use it like this:</p><pre><code class="language-bash">npx create-next-app
</code></pre>
<p>The command asks the application name (and creates a new folder for you with that name), then downloads all the packages it needs (<code>react</code>, <code>react-dom</code>, <code>next</code>), sets the <code>package.json</code> to:</p>
<p>and you can immediately run the sample app by running <code>npm run dev</code>:</p>
<p>And here's the result on <a href="http://localhost:3000">http://localhost:3000</a>:</p>
<p>This is the recommended way to start a Next.js application, as it gives you structure and sample code to play with. There's more than just that default sample application; you can use any of the examples stored at <a href="https://github.com/zeit/next.js/tree/canary/examples">https://github.com/zeit/next.js/tree/canary/examples</a> using the <code>--example</code> option. For example try:</p><pre><code class="language-bash">npx create-next-app --example blog-starter
</code></pre>
<p>Which gives you an immediately usable blog instance with syntax highlighting too:</p>
<h3 id="manually-create-a-next-js-app">Manually create a Next.js app</h3>
<p>You can avoid <code>create-next-app</code> if you feel like creating a Next app from scratch. Here's how: create an empty folder anywhere you like, for example in your home folder, and go into it:</p><pre><code class="language-sh">mkdir nextjs
cd nextjs
</code></pre>
<p>and create your first Next project directory:</p><pre><code class="language-sh">mkdir firstproject
cd firstproject
</code></pre>
<p>Now use the <code>npm</code> command to initialize it as a Node project:</p><pre><code class="language-sh">npm init -y
</code></pre>
<p>The <code>-y</code> option tells <code>npm</code> to use the default settings for a project, populating a sample <code>package.json</code> file.</p>
<p>Now install Next and React:</p><pre><code class="language-sh">npm install next react react-dom
</code></pre>
<p>Your project folder should now have 2 files:</p>
<ul>
<li><code>package.json</code> (<a href="https://flaviocopes.com/package-json/">see my tutorial on it</a>)</li>
<li><code>package-lock.json</code> (<a href="https://flaviocopes.com/package-lock-json/">see my tutorial on package-lock</a>)</li>
</ul>
<p>and the <code>node_modules</code> folder.</p>
<p>Open the project folder using your favorite editor. My favorite editor is <a href="https://flaviocopes.com/vscode/">VS Code</a>. If you have that installed, you can run <code>code .</code> in your terminal to open the current folder in the editor (if the command does not work for you, see <a href="https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line">this</a>)</p>
<p>Open <code>package.json</code>, which now has this content:</p><pre><code class="language-json">{
"name": "firstproject",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" &amp;&amp; exit 1"
},
"keywords": [],
"author": "",
"license": "ISC",
"dependencies":  {
"next": "^9.1.2",
"react": "^16.11.0",
"react-dom": "^16.11.0"
}
}
</code></pre>
<p>and replace the <code>scripts</code> section with:</p><pre><code class="language-json">"scripts": {
"dev": "next",
"build": "next build",
"start": "next start"
}
</code></pre>
<p>to add the Next.js build commands, which we're going to use soon.</p>
<p>Tip: use <code>"dev": "next -p 3001",</code> to change the port and run, in this example, on port 3001.</p>
<p>Now create a <code>pages</code> folder, and add an <code>index.js</code> file.</p>
<p>In this file, let's create our first React component.</p>
<p>We're going to use it as the default export:</p><pre><code class="language-js">const Index = () =&gt; (
&lt;div&gt;
&lt;h1&gt;Home page&lt;/h1&gt;
&lt;/div&gt;
)
export default Index
</code></pre>
<p>Now using the terminal, run <code>npm run dev</code> to start the Next development server.</p>
<p>This will make the app available on port 3000, on localhost.</p>
<p>Open <a href="http://localhost:3000">http://localhost:3000</a> in your browser to see it.</p>
<h2 id="view-source-to-confirm-ssr-is-working">View source to confirm SSR is working</h2>
<p>Let's now check the application is working as we expect it to work. It's a Next.js app, so it should be <strong>server side rendered</strong>.</p>
<p>It's one of the main selling points of Next.js: if we create a site using Next.js, the site pages are rendered on the server, which delivers HTML to the browser.</p>
<p>This has 3 major benefits:</p>
<ul>
<li>The client does not need to instantiate React to render, which makes the site faster to your users.</li>
<li>Search engines will index the pages without needing to run the client-side JavaScript. Something Google started doing, but openly admitted to be a slower process (and you should help Google as much as possible, if you want to rank well).</li>
<li>You can have social media meta tags, useful to add preview images, customize title and description for any of your pages shared on Facebook, Twitter and so on.</li>
</ul>
<p>Let's view the source of the app.<br>Using Chrome you can right-click anywhere in the page, and press <strong>View Page Source</strong>.</p>
<p>If you view the source of the page, you'll see the <code>&lt;div&gt;&lt;h1&gt;Home page&lt;/h1&gt;&lt;/div&gt;</code> snippet in the HTML <code>body</code>, along with a bunch of JavaScript files - the app bundles.</p>
<p>We don't need to set up anything, SSR (server-side rendering) is already working for us.</p>
<p>The React app will be launched on the client, and will be the one powering interactions like clicking a link, using client-side rendering. But reloading a page will re-load it from the server. And using Next.js there should be no difference in the result inside the browser - a server-rendered page should look exactly like a client-rendered page.</p>
<h2 id="the-app-bundles">The app bundles</h2>
<p>When we viewed the page source, we saw a bunch of JavaScript files being loaded:</p>
<p>Let's start by putting the code in an <a href="https://htmlformatter.com/">HTML formatter</a> to get it formatted better, so we humans can get a better chance at understanding it:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charSet="utf-8" /&gt;
&lt;meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" /&gt;
&lt;meta name="next-head-count" content="2" /&gt;
&lt;link rel="preload" href="/_next/static/development/pages/index.js?ts=1572863116051" as="script" /&gt;
&lt;link rel="preload" href="/_next/static/development/pages/_app.js?ts=1572863116051" as="script" /&gt;
&lt;link rel="preload" href="/_next/static/runtime/webpack.js?ts=1572863116051" as="script" /&gt;
&lt;link rel="preload" href="/_next/static/runtime/main.js?ts=1572863116051" as="script" /&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="__next"&gt;
&lt;div&gt;
&lt;h1&gt;Home page&lt;/h1&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;script src="/_next/static/development/dll/dll_01ec57fc9b90d43b98a8.js?ts=1572863116051"&gt;&lt;/script&gt;
&lt;script id="__NEXT_DATA__" type="application/json"&gt;{"dataManager":"[]","props":{"pageProps":{}},"page":"/","query":{},"buildId":"development","nextExport":true,"autoExport":true}&lt;/script&gt;
&lt;script async="" data-next-page="/" src="/_next/static/development/pages/index.js?ts=1572863116051"&gt;&lt;/script&gt;
&lt;script async="" data-next-page="/_app" src="/_next/static/development/pages/_app.js?ts=1572863116051"&gt;&lt;/script&gt;
&lt;script src="/_next/static/runtime/webpack.js?ts=1572863116051" async=""&gt;&lt;/script&gt;
&lt;script src="/_next/static/runtime/main.js?ts=1572863116051" async=""&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<p>We have 4 JavaScript files being declared to be preloaded in the <code>head</code>, using <code>rel="preload" as="script"</code>:</p>
<ul>
<li><code>/_next/static/development/pages/index.js</code> (96 LOC)</li>
<li><code>/_next/static/development/pages/_app.js</code> (5900 LOC)</li>
<li><code>/_next/static/runtime/webpack.js</code> (939 LOC)</li>
<li><code>/_next/static/runtime/main.js</code> (12k LOC)</li>
</ul>
<p>This tells the browser to start loading those files as soon as possible, before the normal rendering flow starts. Without those, scripts would be loaded with an additional delay, and this improves the page loading performance.</p>
<p>Then those 4 files are loaded at the end of the <code>body</code>, along with <code>/_next/static/development/dll/dll_01ec57fc9b90d43b98a8.js</code> (31k LOC), and a JSON snippet that sets some defaults for the page data:</p><pre><code class="language-html">&lt;script id="__NEXT_DATA__" type="application/json"&gt;
{
"dataManager": "[]",
"props": {
"pageProps":  {}
},
"page": "/",
"query": {},
"buildId": "development",
"nextExport": true,
"autoExport": true
}
&lt;/script&gt;
</code></pre>
<p>The 4 bundle files loaded are already implementing one feature called code splitting. The <code>index.js</code> file provides the code needed for the <code>index</code> component, which serves the <code>/</code> route, and if we had more pages we'd have more bundles for each page, which will then only be loaded if needed - to provide a more performant load time for the page.</p>
<h2 id="what-s-that-icon-on-the-bottom-right">What's that icon on the bottom right?</h2>
<p>Did you see that little icon at the bottom right of the page, which looks like a lightning?</p>
<p>If you hover it, it's going to say "Prerendered Page":</p>
<p>This icon, which is <em>only visible in development mode</em> of course, tells you the page qualifies for automatic static optimization, which basically means that it does not depend on data that needs to be fetched at invokation time, and it can be prerendered and built as a static HTML file at build time (when we run <code>npm run build</code>).</p>
<p>Next can determine this by the absence of the <code>getInitialProps()</code> method attached to the page component.</p>
<p>When this is the case, our page can be even faster because it will be served statically as an HTML file rather than going through the Node.js server that generates the HTML output.</p>
<p>Another useful icon that might appear next to it, or instead of it on non-prerendered pages, is a little animated triangle:</p>
<p>This is a compilation indicator, and appears when you save a page and Next.js is compiling the application before hot code reloading kicks in to reload the code in the application automatically.</p>
<p>It's a really nice way to immediately determine if the app has already been compiled and you can test a part of it you're working on.</p>
<h2 id="install-the-react-developer-tools">Install the React Developer Tools</h2>
<p>Next.js is based on React, so one very useful tool we absolutely need to install (if you haven't already) is the React Developer Tools.</p>
<p>Available for both <a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en">Chrome</a> and <a href="https://addons.mozilla.org/en-US/firefox/addon/react-devtools/">Firefox</a>, the React Developer Tools are an essential instrument you can use to inspect a React application.</p>
<p>Now, the React Developer Tools are not specific to Next.js but I want to introduce them because you might not be 100% familiar with all the tools React provides. It's best to go a little into debugging tooling than assuming you already know them.</p>
<p>They provide an inspector that reveals the React components tree that builds your page, and for each component you can go and check the props, the state, hooks, and lots more.</p>
<p>Once you have installed the React Developer Tools, you can open the regular browser devtools (in Chrome, it's right-click in the page, then click <code>Inspect</code>) and you'll find 2 new panels: <strong>Components</strong> and <strong>Profiler</strong>.</p>
<p>If you move the mouse over the components, you'll see that in the page, the browser will select the parts that are rendered by that component.</p>
<p>If you select any component in the tree, the right panel will show you a reference to <strong>the parent component</strong>, and the props passed to it:</p>
<p>You can easily navigate by clicking around the component names.</p>
<p>You can click the eye icon in the Developer Tools toolbar &nbsp; to inspect the DOM element, and also if you use the first icon, the one with the mouse icon (which conveniently sits under the similar regular DevTools icon), you can hover an element in the browser UI to directly select the React component that renders it.</p>
<p>You can use the <code>bug</code> icon to log a component data to the console.</p>
<p>This is pretty awesome because once you have the data printed there, you can right-click any element and press "Store as a global variable". For example here I did it with the <code>url</code> prop, and I was able to inspect it in the console using the temporary variable assigned to it, <code>temp1</code>:</p>
<p>Using <strong>Source Maps</strong>, which are loaded by Next.js automatically in development mode, from the Components panel we can click the <code>&lt;&gt;</code> code and the DevTools will switch to the Source panel, showing us the component source code:</p>
<p>The <strong>Profiler</strong> tab is even more awesome, if possible. It allows us to <strong>record an interaction</strong> in the app, and see what happens. I cannot show an example yet, because it needs at least 2 components to create an interaction, and we have just one now. I'll talk about this later.</p>
<p>I showed all screenshots using Chrome, but the React Developer Tools works in the same way in Firefox:</p>
<h2 id="other-debugging-techniques-you-can-use">Other debugging techniques you can use</h2>
<p>In addition to the React Developer Tools, which are essential to building a Next.js application, I want to emphasize 2 ways to debug Next.js apps.</p>
<p>The first is obviously <code>console.log()</code> and all the <a href="https://flaviocopes.com/console-api/">other Console API</a> tools. The way Next apps work will make a log statement work in the browser console OR in the terminal where you started Next using <code>npm run dev</code>.</p>
<p>In particular, if the page loads from the server, when you point the URL to it, or you hit the refresh button / cmd/ctrl-R, any console logging happens in the terminal.</p>
<p>Subsequent page transitions that happen by clicking the mouse will make all console logging happen inside the browser.</p>
<p>Just remember if you are surprised by missing logging.</p>
<p>Another tool that is essential is the <code>debugger</code> statement. Adding this statement to a component will pause the browser rendering the page:</p>
<p>Really awesome because now you can use the browser debugger to inspect values and run your app one line at a time.</p>
<p>You can also use the VS Code debugger to debug server-side code. I mention this technique and <a href="https://github.com/Microsoft/vscode-recipes/tree/master/Next-js">this tutorial</a> to set this up.</p>
<h2 id="adding-a-second-page-to-the-site">Adding a second page to the site</h2>
<p>Now that we have a good grasp of the tools we can use to help us develop Next.js apps, let's continue from where we left our first app:</p>
<p>I want to add a second page to this website, a blog. It's going to be served into <code>/blog</code>, and for the time being it will just contain a simple static page, just like our first <code>index.js</code> component:</p>
<p>After saving the new file, the <code>npm run dev</code> process already running is already capable of rendering the page, without the need to restart it.</p>
<p>When we hit the URL <a href="http://localhost:3000/blog">http://localhost:3000/blog</a> we have the new page:</p>
<p>and here's what the terminal told us:</p>
<p>Now the fact that the URL is <code>/blog</code> depends on just the filename, and its position under the <code>pages</code> folder.</p>
<p>You can create a <code>pages/hey/ho</code> page, and that page will show up on the URL <a href="http://localhost:3000/hey/ho">http://localhost:3000/hey/ho</a>.</p>
<p>What does not matter, for the URL purposes, is the component name inside the file.</p>
<p>Try going and viewing the source of the page, when loaded from the server it will list <code>/_next/static/development/pages/blog.js</code> as one of the bundles loaded, and not <code>/_next/static/development/pages/index.js</code> like in the home page. This is because thanks to automatic code splitting we don't need the bundle that serves the home page. Just the bundle that serves the blog page.</p>
<p>We can also just export an anonymous function from <code>blog.js</code>:</p><pre><code class="language-js">export default () =&gt; (
&lt;div&gt;
&lt;h1&gt;Blog&lt;/h1&gt;
&lt;/div&gt;
)
</code></pre>
<p>or if you prefer the non-arrow function syntax:</p><pre><code class="language-js">export default function() {
return (
&lt;div&gt;
&lt;h1&gt;Blog&lt;/h1&gt;
&lt;/div&gt;
)
}
</code></pre>
<h2 id="linking-the-two-pages">Linking the two pages</h2>
<p>Now that we have 2 pages, defined by <code>index.js</code> and <code>blog.js</code>, we can introduce links.</p>
<p>Normal HTML links within pages are done using the <code>a</code> tag:</p><pre><code class="language-html">&lt;a href="/blog"&gt;Blog&lt;/a&gt;
</code></pre>
<p>We can't do do that in Next.js.</p>
<p>Why? We technically <em>can</em>, of course, because this is the Web and <em>on the Web things never break</em> (that's why we can still use the <code>&lt;marquee&gt;</code> tag. But one of the main benefits of using Next is that once a page is loaded, transitions to other page are very fast thanks to client-side rendering.</p>
<p>If you use a plain <code>a</code> link:</p><pre><code class="language-js">const Index = () =&gt; (
&lt;div&gt;
&lt;h1&gt;Home page&lt;/h1&gt;
&lt;a href='/blog'&gt;Blog&lt;/a&gt;
&lt;/div&gt;
)
export default Index
</code></pre>
<p>Now open the <strong>DevTools</strong>, and the <strong>Network panel</strong> in particular. The first time we load <code>http://localhost:3000/</code> we get all the page bundles loaded:</p>
<p>Now if you click the "Preserve log" button (to avoid clearing the Network panel), and click the "Blog" link, this is what happens:</p>
<p>We got all that JavaScript from the server, again! But.. we don't need all that JavaScript if we already got it. We'd just need the <code>blog.js</code> page bundle, the only one that's new to the page.</p>
<p>To fix this problem, we use a component provided by Next, called Link.</p>
<p>We import it:</p><pre><code class="language-js">import Link from 'next/link'
</code></pre>
<p>and then we use it to wrap our link, like this:</p><pre><code class="language-js">import Link from 'next/link'
const Index = () =&gt; (
&lt;div&gt;
&lt;h1&gt;Home page&lt;/h1&gt;
&lt;Link href='/blog'&gt;
&lt;a&gt;Blog&lt;/a&gt;
&lt;/Link&gt;
&lt;/div&gt;
)
export default Index
</code></pre>
<p>Now if you retry the thing we did previously, you'll be able to see that only the <code>blog.js</code> bundle is loaded when we move to the blog page:</p>
<p>and the page loaded so faster than before, the browser usual spinner on the tab didn't even appear. Yet the URL changed, as you can see. This is working seamlessly with the browser <a href="https://flaviocopes.com/history-api/">History API</a>.</p>
<p>This is client-side rendering in action.</p>
<p>What if you now press the back button? Nothing is being loaded, because the browser still has the old <code>index.js</code> bundle in place, ready to load the <code>/index</code> route. It's all automatic!</p>
<h2 id="dynamic-content-with-the-router">Dynamic content with the router</h2>
<p>In the previous chapter we saw how to link the home to the blog page.</p>
<p>A blog is a great use case for Next.js, one we'll continue to explore in this chapter by adding <strong>blog posts</strong>.</p>
<p>Blog posts have a dynamic URL. For example a post titled "Hello World" might have the URL <code>/blog/hello-world</code>. A post titled "My second post" might have the URL <code>/blog/my-second-post</code>.</p>
<p>This content is dynamic, and might be taken from a database, markdown files or more.</p>
<p>Next.js can serve dynamic content based on a <strong>dynamic URL</strong>.</p>
<p>We create a dynamic URL by creating a dynamic page with the <code>[]</code> syntax.</p>
<p>How? We add a <code>pages/blog/[id].js</code> file. This file will handle all the dynamic URLs under the <code>/blog/</code> route, like the ones we mentioned above: <code>/blog/hello-world</code>, <code>/blog/my-second-post</code> and more.</p>
<p>In the file name, <code>[id]</code> inside the square brackets means that anything that's dynamic will be put inside the <code>id</code> parameter of the <strong>query property</strong> of the <strong>router</strong>.</p>
<p>Ok, that's a bit too many things at once.</p>
<p>What's the <strong>router</strong>?</p>
<p>The router is a library provided by Next.js.</p>
<p>We import it from <code>next/router</code>:</p><pre><code class="language-js">import { useRouter } from 'next/router'
</code></pre>
<p>and once we have <code>useRouter</code>, we instantiate the router object using:</p><pre><code class="language-js">const router = useRouter()
</code></pre>
<p>Once we have this router object, we can extract information from it.</p>
<p>In particular we can get the dynamic part of the URL in the <code>[id].js</code> file by accessing <code>router.query.id</code>.</p>
<p>The dynamic part can also just be a portion of the URL, like <code>post-[id].js</code>.</p>
<p>So let's go on and apply all those things in practice.</p>
<p>Create the file <code>pages/blog/[id].js</code>:</p><pre><code class="language-js">import { useRouter } from 'next/router'
export default () =&gt; {
const router = useRouter()
return (
&lt;&gt;
&lt;h1&gt;Blog post&lt;/h1&gt;
&lt;p&gt;Post id: {router.query.id}&lt;/p&gt;
&lt;/&gt;
)
}
</code></pre>
<p>Now if you go to the <code>http://localhost:3000/blog/test</code> router, you should see this:</p>
<p>We can use this <code>id</code> parameter to gather the post from a list of posts. From a database, for example. To keep things simple we'll add a <code>posts.json</code> file in the project root folder:</p><pre><code class="language-js">{
"test": {
"title": "test post",
"content": "Hey some post content"
},
"second": {
"title": "second post",
"content": "Hey this is the second post content"
}
}
</code></pre>
<p>Now we can import it and lookup the post from the <code>id</code> key:</p><pre><code class="language-js">import { useRouter } from 'next/router'
import posts from '../../posts.json'
export default () =&gt; {
const router = useRouter()
const post = posts[router.query.id]
return (
&lt;&gt;
&lt;h1&gt;{post.title}&lt;/h1&gt;
&lt;p&gt;{post.content}&lt;/p&gt;
&lt;/&gt;
)
}
</code></pre>
<p>Reloading the page should show us this result:</p>
<p>But it's not! Instead, we get an error in the console, and an error in the browser, too:</p>
<p>Why? Because.. during rendering, when the component is initialized, the data is not there yet. We'll see how to provide the data to the component with getInitialProps in the next lesson.</p>
<p>For now, add a little <code>if (!post) return &lt;p&gt;&lt;/p&gt;</code> check before returning the JSX:</p><pre><code class="language-js">import { useRouter } from 'next/router'
import posts from '../../posts.json'
export default () =&gt; {
const router = useRouter()
const post = posts[router.query.id]
if (!post) return &lt;p&gt;&lt;/p&gt;
return (
&lt;&gt;
&lt;h1&gt;{post.title}&lt;/h1&gt;
&lt;p&gt;{post.content}&lt;/p&gt;
&lt;/&gt;
)
}
</code></pre>
<p>Now things should work. Initially the component is rendered without the dynamic <code>router.query.id</code> information. After rendering, Next.js triggers an update with the query value and the page displays the correct information.</p>
<p>And if you view source, there is that empty <code>&lt;p&gt;</code> tag in the HTML:</p>
<p>We'll soon fix this issue that fails to implement SSR and this harms both loading times for our users, SEO and social sharing as we already discussed.</p>
<p>We can complete the blog example by listing those posts in <code>pages/blog.js</code>:</p><pre><code class="language-js">import posts from '../posts.json'
const Blog = () =&gt; (
&lt;div&gt;
&lt;h1&gt;Blog&lt;/h1&gt;
&lt;ul&gt;
{Object.entries(posts).map((value, index) =&gt; {
return &lt;li key={index}&gt;{value[1].title}&lt;/li&gt;
})}
&lt;/ul&gt;
&lt;/div&gt;
)
export default Blog
</code></pre>
<p>And we can link them to the individual post pages, by importing <code>Link</code> from <code>next/link</code> and using it inside the posts loop:</p><pre><code class="language-js">import Link from 'next/link'
import posts from '../posts.json'
const Blog = () =&gt; (
&lt;div&gt;
&lt;h1&gt;Blog&lt;/h1&gt;
&lt;ul&gt;
{Object.entries(posts).map((value, index) =&gt; {
return (
&lt;li key={index}&gt;
&lt;Link href='/blog/[id]' as={'/blog/' + value[0]}&gt;
&lt;a&gt;{value[1].title}&lt;/a&gt;
&lt;/Link&gt;
&lt;/li&gt;
)
})}
&lt;/ul&gt;
&lt;/div&gt;
)
export default Blog
</code></pre>
<h2 id="prefetching-1">Prefetching</h2>
<p>I mentioned previously how the <code>Link</code> Next.js component can be used to create links between 2 pages, and when you use it, Next.js <strong>transparently handles frontend routing</strong> for us, so when a user clicks a link, frontend takes care of showing the new page without triggering a new client/server request and response cycle, as it normally happens with web pages.</p>
<p>There's another thing that Next.js does for you when you use <code>Link</code>.</p>
<p>As soon as an element wrapped within <code>&lt;Link&gt;</code> appears in the viewport (which means it's visible to the website user), Next.js prefetches the URL it points to, as long as it's a local link (on your website), making the application super fast to the viewer.</p>
<p>This behavior is only being triggered in <strong>production mode</strong> (we'll talk about this in-depth later), which means you have to stop the application if you are running it with <code>npm run dev</code>, compile your production bundle with <code>npm run build</code> and run it with &nbsp;<code>npm run start</code> instead.</p>
<p>Using the Network inspector in the DevTools you'll notice that any links above the fold, at page load, start the prefetching as soon as the <code>load</code> event has been fired on your page (triggered when the page is fully loaded, and happens after the <code>DOMContentLoaded</code> event).</p>
<p>Any other <code>Link</code> tag not in the viewport will be prefetched when the user scrolls and it</p>
<p>Prefetching is automatic on high speed connections (Wifi and 3g+ connections, unless the browser sends the <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Save-Data"><code>Save-Data</code> HTTP Header</a>.</p>
<p>You can opt out from prefetching individual <code>Link</code> instances by setting the <code>prefetch</code> prop to <code>false</code>:</p><pre><code class="language-jsx">&lt;Link href="/a-link" prefetch={false}&gt;
&lt;a&gt;A link&lt;/a&gt;
&lt;/Link&gt;
</code></pre>
<h2 id="using-the-router-to-detect-the-active-link">Using the router to detect the active link</h2>
<p>One very important feature when working with links is determining what is the current URL, and in particular assigning a class to the active link, so we can style it differently from the other ones.</p>
<p>This is especially useful in your site header, for example.</p>
<p>The Next.js default <code>Link</code> component offered in <code>next/link</code> does not do this automatically for us.</p>
<p>We can create a Link component ourselves, and we store it in a file <code>Link.js</code> in the Components folder, and import that instead of the default <code>next/link</code>.</p>
<p>In this component, we'll first import React from <code>react</code>, Link from <code>next/link</code> and the <code>useRouter</code> hook from <code>next/router</code>.</p>
<p>Inside the component we determine if the current path name matches the <code>href</code> prop of the component, and if so we append the <code>selected</code> class to the children.</p>
<p>We finally return this children with the updated class, using <code>React.cloneElement()</code>:</p><pre><code class="language-js">import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
export default ({ href, children }) =&gt; {
const router = useRouter()
let className = children.props.className || ''
if (router.pathname === href) {
className = `${className} selected`
}
return &lt;Link href={href}&gt;{React.cloneElement(children, { className })}&lt;/Link&gt;
}
</code></pre>
<h2 id="using-next-router">Using <code>next/router</code></h2>
<p>We already saw how to use the Link component to declaratively handle routing in Next.js apps.</p>
<p>It's really handy to manage routing in JSX, but sometimes you need to trigger a routing change programmatically.</p>
<p>In this case, you can access the Next.js Router directly, provided in the <code>next/router</code> package, and call its <code>push()</code> method.</p>
<p>Here's an example of accessing the router:</p><pre><code class="language-js">import { useRouter } from 'next/router'
export default () =&gt; {
const router = useRouter()
//...
}
</code></pre>
<p>Once we get the router object by invoking <code>useRouter()</code>, we can use its methods.</p>
<p>This is the client side router, so methods should only be used in frontend facing code. The easiest way to ensure this is to wrap calls in the <code>useEffect()</code> React hook, or inside <code>componentDidMount()</code> in React stateful components.</p>
<p>The ones you'll likely use the most are <code>push()</code> and <code>prefetch()</code>.</p>
<p><code>push()</code> allows us to programmatically trigger a URL change, in the frontend:</p><pre><code class="language-js">router.push('/login')
</code></pre>
<p><code>prefetch()</code> allows us to programmatically prefetch a URL, useful when we don't have a <code>Link</code> tag which automatically handles prefetching for us:</p><pre><code class="language-js">router.prefetch('/login')
</code></pre>
<p>Full example:</p><pre><code class="language-js">import { useRouter } from 'next/router'
export default () =&gt; {
const router = useRouter()
useEffect(() =&gt; {
router.prefetch('/login')
})
}
</code></pre>
<p>You can also use the router to listen for <a href="https://nextjs.org/docs#router-events">route change events</a>.</p>
<h2 id="feed-data-to-the-components-using-getinitialprops">Feed data to the components using getInitialProps</h2>
<p>In the previous chapter we had an issue with dynamically generating the post page, because the component required some data up front, and when we tried to get the data from the JSON file:</p><pre><code class="language-js">import { useRouter } from 'next/router'
import posts from '../../posts.json'
export default () =&gt; {
const router = useRouter()
const post = posts[router.query.id]
return (
&lt;&gt;
&lt;h1&gt;{post.title}&lt;/h1&gt;
&lt;p&gt;{post.content}&lt;/p&gt;
&lt;/&gt;
)
}
</code></pre>
<p>we got this error:</p>
<p>How do we solve this? And how do we make SSR work for dynamic routes?</p>
<p>We must provide the component with props, using a special function called <code>getInitialProps()</code> which is attached to the component.</p>
<p>To do so, first we name the component:</p><pre><code class="language-js">const Post = () =&gt; {
//...
}
export default Post
</code></pre>
<p>then we add the function to it:</p><pre><code class="language-js">const Post = () =&gt; {
//...
}
Post.getInitialProps = () =&gt; {
//...
}
export default Post
</code></pre>
<p>This function gets an object as its argument, which contains several properties. In particular, the thing we are interested into now is that we get the <code>query</code> object, the one we used previously to get the post id.</p>
<p>So we can get it using the <em>object destructuring</em> syntax:</p><pre><code class="language-js">Post.getInitialProps = ({ query }) =&gt; {
//...
}
</code></pre>
<p>Now we can return the post from this function:</p><pre><code class="language-js">Post.getInitialProps = ({ query }) =&gt; {
return {
post: posts[query.id]
}
}
</code></pre>
<p>And we can also remove the import of <code>useRouter</code>, and we get the post from the <code>props</code> property passed to the <code>Post</code> component:</p><pre><code class="language-js">import posts from '../../posts.json'
const Post = props =&gt; {
return (
&lt;div&gt;
&lt;h1&gt;{props.post.title}&lt;/h1&gt;
&lt;p&gt;{props.post.content}&lt;/p&gt;
&lt;/div&gt;
)
}
Post.getInitialProps = ({ query }) =&gt; {
return {
post: posts[query.id]
}
}
export default Post
</code></pre>
<p>Now there will be no error, and SSR will be working as expected, as you can see checking view source:</p>
<p>The <code>getInitialProps</code> function will be executed on the server side, but also on the client side, when we navigate to a new page using the <code>Link</code> component as we did.</p>
<p>It's important to note that <code>getInitialProps</code> gets, in the context object it receives, in addition to the <code>query</code> object these other properties:</p>
<ul>
<li><code>pathname</code>: the <code>path</code> section of URL</li>
<li><code>asPath</code> - String of the actual path (including the query) shows in the browser</li>
</ul>
<p>which in the case of calling <code>http://localhost:3000/blog/test</code> will respectively result to:</p>
<ul>
<li><code>/blog/[id]</code></li>
<li><code>/blog/test</code></li>
</ul>
<p>And in the case of server side rendering, it will also receive:</p>
<ul>
<li><code>req</code>: the HTTP request object</li>
<li><code>res</code>: the HTTP response object</li>
<li><code>err</code>: an error object</li>
</ul>
<p><code>req</code> and <code>res</code> will be familiar to you if you've done any Node.js coding.</p>
<h2 id="css">CSS</h2>
<p>How do we style React components in Next.js?</p>
<p>We have a lot of freedom, because we can use whatever library we prefer.</p>
<p>But Next.js comes with <a href="https://github.com/zeit/styled-jsx"><code>styled-jsx</code></a> built-in, because that's a library built by the same people working on Next.js.</p>
<p>And it's a pretty cool library that provides us scoped CSS, which is great for maintainability because the CSS is only affecting the component it's applied to.</p>
<p>I think this is a great approach at writing CSS, without the need to apply additional libraries or preprocessors that add complexity.</p>
<p>To add CSS to a React component in Next.js we insert it inside a snippet in the JSX, which start with</p><pre><code class="language-js">&lt;style jsx&gt;{`
</code></pre>
<p>and ends with</p><pre><code class="language-js">`}&lt;/style&gt;
</code></pre>
<p>Inside this weird blocks we write plain CSS, as we'd do in a <code>.css</code> file:</p><pre><code class="language-js">&lt;style jsx&gt;{`
h1 {
font-size: 3rem;
}
`}&lt;/style&gt;
</code></pre>
<p>You write it inside the JSX, like this:</p><pre><code class="language-js">const Index = () =&gt; (
&lt;div&gt;
&lt;h1&gt;Home page&lt;/h1&gt;
&lt;style jsx&gt;{`
h1 {
font-size: 3rem;
}
`}&lt;/style&gt;
&lt;/div&gt;
)
export default Index
</code></pre>
<p>Inside the block we can use interpolation to dynamically change the values. For example here we assume a <code>size</code> prop is being passed by the parent component, and we use it in the <code>styled-jsx</code> block:</p><pre><code class="language-js">const Index = props =&gt; (
&lt;div&gt;
&lt;h1&gt;Home page&lt;/h1&gt;
&lt;style jsx&gt;{`
h1 {
font-size: ${props.size}rem;
}
`}&lt;/style&gt;
&lt;/div&gt;
)
</code></pre>
<p>If you want to apply some CSS globally, not scoped to a component, you add the <code>global</code> keyword to the <code>style</code> tag:</p><pre><code class="language-jsx">&lt;style jsx global&gt;{`
body {
margin: 0;
}
`}&lt;/style&gt;
</code></pre>
<p>If you want to import an external CSS file in a Next.js component, you have to first install <code>@zeit/next-css</code>:</p><pre><code class="language-bash">npm install @zeit/next-css
</code></pre>
<p>and then create a configuration file in the root of the project, called <code>next.config.js</code>, with this content:</p><pre><code class="language-js">const withCSS = require('@zeit/next-css')
module.exports = withCSS()
</code></pre>
<p>After restarting the Next app, you can now import CSS like you normally do with JavaScript libraries or components:</p><pre><code class="language-js">import '../style.css'
</code></pre>
<p>You can also import a SASS file directly, using the <a href="https://github.com/zeit/next-plugins/tree/master/packages/next-sass"><code>@zeit/next-sass</code></a> library instead.</p>
<h2 id="populating-the-head-tag-with-custom-tags">Populating the head tag with custom tags</h2>
<p>From any Next.js page component, you can add information to the page header.</p>
<p>This is handy when:</p>
<ul>
<li>you want to customize the page title</li>
<li>you want to change a meta tag</li>
</ul>
<p>How can you do so?</p>
<p>Inside every component you can import the <code>Head</code> component from <code>next/head</code> and include it in your component JSX output:</p><pre><code class="language-js">import Head from 'next/head'
const House = props =&gt; (
&lt;div&gt;
&lt;Head&gt;
&lt;title&gt;The page title&lt;/title&gt;
&lt;/Head&gt;
{/* the rest of the JSX */}
&lt;/div&gt;
)
export default House
</code></pre>
<p>You can add any HTML tag you'd like to appear in the <code>&lt;head&gt;</code> section of the page.</p>
<p>When mounting the component, Next.js will make sure the tags inside <code>Head</code> are added to the heading of the page. Same when unmounting the component, Next.js will take care of removing those tags.</p>
<h2 id="adding-a-wrapper-component">Adding a wrapper component</h2>
<p>All the pages on your site look more or less the same. There's a chrome window, a common base layer, and you just want to change what's inside.</p>
<p>There's a nav bar, a sidebar, and then the actual content.</p>
<p>How do you build such system in Next.js?</p>
<p>There are 2 ways. One is using a <a href="https://flaviocopes.com/react-higher-order-components/">Higher Order Component</a>, by creating a <code>components/Layout.js</code> component:</p><pre><code class="language-js">export default Page =&gt; {
return () =&gt; (
&lt;div&gt;
&lt;nav&gt;
&lt;ul&gt;....&lt;/ul&gt;
&lt;/hav&gt;
&lt;main&gt;
&lt;Page /&gt;
&lt;/main&gt;
&lt;/div&gt;
)
}
</code></pre>
<p>In there we can import separate components for heading and/or sidebar, and we can also add all the CSS we need.</p>
<p>And you use it in every page like this:</p><pre><code class="language-js">import withLayout from '../components/Layout.js'
const Page = () =&gt; &lt;p&gt;Here's a page!&lt;/p&gt;
export default withLayout(Page)
</code></pre>
<p>But I found this works only for simple cases, where you don't need to call <code>getInitialProps()</code> on a page.</p>
<p>Why?</p>
<p>Because <code>getInitialProps()</code> gets only called on the page component. But if we export the Higher Order Component withLayout() from a page, <code>Page.getInitialProps()</code> is not called. <code>withLayout.getInitialProps()</code> would.</p>
<p>To avoid unnecessarily complicating our codebase, the alternative approach is to use props:</p><pre><code class="language-js">export default props =&gt; (
&lt;div&gt;
&lt;nav&gt;
&lt;ul&gt;....&lt;/ul&gt;
&lt;/hav&gt;
&lt;main&gt;
{props.content}
&lt;/main&gt;
&lt;/div&gt;
)
</code></pre>
<p>and in our pages now we use it like this:</p><pre><code class="language-js">import Layout from '../components/Layout.js'
const Page = () =&gt; (
&lt;Layout content={(
&lt;p&gt;Here's a page!&lt;/p&gt;
)} /&gt;
)
</code></pre>
<p>This approach lets us use <code>getInitialProps()</code> from within our page component, with the only downside of having to write the component JSX inside the <code>content</code> prop:</p><pre><code class="language-js">import Layout from '../components/Layout.js'
const Page = () =&gt; (
&lt;Layout content={(
&lt;p&gt;Here's a page!&lt;/p&gt;
)} /&gt;
)
Page.getInitialProps = ({ query }) =&gt; {
//...
}
</code></pre>
<h2 id="api-routes">API Routes</h2>
<p>In addition to creating <strong>page routes</strong>, which means pages are served to the browser as Web pages, Next.js can create <strong>API routes</strong>.</p>
<p>This is a very interesting feature because it means that Next.js can be used to create a frontend for data that is stored and retrieved by Next.js itself, transferring JSON via fetch requests.</p>
<p>API routes live under the <code>/pages/api/</code> folder and are mapped to the <code>/api</code> endpoint.</p>
<p>This feature is <em>very</em> useful when creating applications.</p>
<p>In those routes, we write Node.js code (rather than React code). It's a paradigm shift, you move from the frontend to the backend, but very seamlessly.</p>
<p>Say you have a <code>/pages/api/comments.js</code> file, whose goal is to return the comments of a blog post as JSON.</p>
<p>Say you have a list of comments stored in a <code>comments.json</code> file:</p><pre><code class="language-json">[
{
"comment": "First"
},
{
"comment": "Nice post"
}
]
</code></pre>
<p>Here's a sample code, which returns to the client the list of comments:</p><pre><code class="language-js">import comments from './comments.json'
export default (req, res) =&gt; {
res.status(200).json(comments)
}
</code></pre>
<p>It will listen on the <code>/api/comments</code> URL for GET requests, and you can try calling it using your browser:</p>
<p>API routes can also use <strong>dynamic routing</strong> like pages, use the <code>[]</code> syntax to create a dynamic API route, like <code>/pages/api/comments/[id].js</code> which will retrieve the comments specific to a post id.</p>
<p>Inside the <code>[id].js</code> you can retrieve the <code>id</code> value by looking it up inside the <code>req.query</code> object:</p><pre><code class="language-js">import comments from '../comments.json'
export default (req, res) =&gt; {
res.status(200).json({ post: req.query.id, comments })
}
</code></pre>
<p>Heres you can see the above code in action:</p>
<p>In dynamic pages, you'd need to import <code>useRouter</code> from <code>next/router</code>, then get the router object using <code>const router = useRouter()</code>, and then we'd be able to get the <code>id</code> value using <code>router.query.id</code>.</p>
<p>In the server-side it's all easier, as the query is attached to the request object.</p>
<p>If you do a POST request, all works in the same way - it all goes through that default export.</p>
<p>To separate POST from GET and other HTTP methods (PUT, DELETE), lookup the <code>req.method</code> value:</p><pre><code class="language-js">export default (req, res) =&gt; {
switch (req.method) {
case 'GET':
//...
break
case 'POST':
//...
break
default:
res.status(405).end() //Method Not Allowed
break
}
}
</code></pre>
<p>In addition to <code>req.query</code> and <code>req.method</code> we already saw, we have access to cookies by referencing <code>req.cookies</code>, the request body in <code>req.body</code>.</p>
<p>Under the hoods, this is all powered by <a href="https://github.com/zeit/micro">Micro</a>, a library that powers asynchronous HTTP microservices, made by the same team that built Next.js.</p>
<p>You can make use of any Micro middleware in our API routes to add more functionality.</p>
<h2 id="run-code-only-on-the-server-side-or-client-side">Run code only on the server side or client side</h2>
<p>In your page components, you can execute code only in the server-side or on the client-side, by checking the <code>window</code> property.</p>
<p>This property is only existing inside the browser, so you can check</p><pre><code class="language-js">if (typeof window === 'undefined') {
}
</code></pre>
<p>and add the server-side code in that block.</p>
<p>Similarly, you can execute client-side code only by checking</p><pre><code class="language-js">if (typeof window !== 'undefined') {
}
</code></pre>
<p>JS Tip: We use the <code>typeof</code> operator here because we can't detect a value to be undefined in other ways. We can't do <code>if (window === undefined)</code> because we'd get a "window is not defined" runtime error</p>
<p>Next.js, as a build-time optimization, also removes the code that uses those checks from bundles. A client-side bundle will not include the content wrapped into a <code>if (typeof window === 'undefined') {}</code> block.</p>
<h2 id="deploying-the-production-version">Deploying the production version</h2>
<p>Deploying an app is always left last in tutorials.</p>
<p>Here I want to introduce it early, just because it's so easy to deploy a Next.js app that we can dive into it now, and then move on to other more complex topics later on.</p>
<p>Remember in the "How to install Next.js" chapter I told you to add those 3 lines to the <code>package.json</code> <code>script</code> section:</p><pre><code class="language-json">"scripts": {
"dev": "next",
"build": "next build",
"start": "next start"
}
</code></pre>
<p>We used <code>npm run dev</code> up to now, to call the <code>next</code> command installed locally in <code>node_modules/next/dist/bin/next</code>. This started the development server, which provided us <strong>source maps</strong> and <strong>hot code reloading</strong>, two very useful features while debugging.</p>
<p>The same command can be invoked to build the website passing the <code>build</code> flag, by running <code>npm run build</code>. Then, the same command can be used to start the production app passing the <code>start</code> flag, by running <code>npm run start</code>.</p>
<p>Those 2 commands are the ones we must invoke to successfully deploy the production version of our site locally. The production version is highly optimized and does not come with source maps and other things like hot code reloading that would not be beneficial to our end users.</p>
<p>So, let's create a production deploy of our app. Build it using:</p><pre><code class="language-bash">npm run build
</code></pre>
<p>The output of the command tells us that some routes (<code>/</code> and <code>/blog</code> are now prerendered as static HTML, while <code>/blog/[id]</code> will be served by the Node.js backend.</p>
<p>Then you can run <code>npm run start</code> to start the production server locally:</p><pre><code class="language-bash">npm run start
</code></pre>
<p>Visiting <a href="http://localhost:3000">http://localhost:3000</a> will show us the production version of the app, locally.</p>
<h2 id="deploying-on-now">Deploying on Now</h2>
<p>In the previous chapter we deployed the Next.js application locally.</p>
<p>How do we deploy it to a real web server, so other people can access it?</p>
<p>One of the most simple ways to deploy a Next application is through the <strong>Now</strong> platform created by <a href="https://zeit.co">Zeit</a>, &nbsp;the same company that created the Open Source project Next.js. You can use Now to deploy Node.js apps, Static Websites, and much more.</p>
<p>Now makes the deployment and distribution step of an app very, very simple and fast, and in addition to Node.js apps, they also support deploying Go, PHP, Python and other languages.</p>
<p>You can think of it as the "cloud", as you don't really know where your app will be deployed, but you know that you will have a URL where you can reach it.</p>
<p>Now is free to start using, with generous free plan that currently includes 100GB of hosting, 1000 <a href="/serverless/">serverless</a> functions invocations per day, 1000 builds per month, 100GB of bandwidth per month, and one <a href="/cdn/">CDN</a> location. The <a href="https://zeit.co/pricing">pricing page</a> helps get an idea of the costs if you need more.</p>
<p>The best way to start using Now is by using the official Now CLI:</p><pre><code class="language-bash">npm install -g now
</code></pre>
<p>Once the command is available, run</p><pre><code class="language-bash">now login
</code></pre>
<p>and the app will ask you for your email.</p>
<p>If you haven't registered already, create an account on <a href="https://zeit.co/signup">https://zeit.co/signup</a> before continuing, then add your email to the CLI client.</p>
<p>Once this is done, from the Next.js project root folder run</p><pre><code class="language-bash">now
</code></pre>
<p>and the app will be instantly deployed to the Now cloud, and you'll be given the unique app URL:</p>
<p>Once you run the <code>now</code> program, the app is deployed to a random URL under the <code>now.sh</code> domain.</p>
<p>We can see 3 different URLs in the output given in the image:</p>
<ul>
<li><a href="https://firstproject-2pv7khwwr.now.sh">https://firstproject-2pv7khwwr.now.sh</a></li>
<li><a href="https://firstproject-sepia-ten.now.sh">https://firstproject-sepia-ten.now.sh</a></li>
<li><a href="https://firstproject.flaviocopes.now.sh">https://firstproject.flaviocopes.now.sh</a></li>
</ul>
<p>Why so many?</p>
<p>The first is the URL identifying the deploy. Every time we deploy the app, this URL will change.</p>
<p>You can test immediately by changing something in the project code, and running <code>now</code> again:</p>
<p>The other 2 URLs will not change. The first is a random one, the second is your project name (which defaults to the current project folder, your account name and then <code>now.sh</code>.</p>
<p>If you visit the URL, you will see the app deployed to production.</p>
<p>You can configure Now to serve the site to your own custom domain or subdomain, but I will not dive into that right now.</p>
<p>The <code>now.sh</code> subdomain is enough for our testing purposes.</p>
<h2 id="analyzing-the-app-bundles">Analyzing the app bundles</h2>
<p>Next provides us a way to analyze the code bundles that are generated.</p>
<p>Open the package.json file of the app and in the scripts section add those 3 new commands:</p><pre><code class="language-json">"analyze": "cross-env ANALYZE=true next build",
"analyze:server": "cross-env BUNDLE_ANALYZE=server next build",
"analyze:browser": "cross-env BUNDLE_ANALYZE=browser next build"
</code></pre>
<p>Like this:</p><pre><code class="language-json">{
"name": "firstproject",
"version": "1.0.0",
"description": "",
"main": "index.js",
"scripts": {
"dev": "next",
"build": "next build",
"start": "next start",
"analyze": "cross-env ANALYZE=true next build",
"analyze:server": "cross-env BUNDLE_ANALYZE=server next build",
"analyze:browser": "cross-env BUNDLE_ANALYZE=browser next build"
},
"keywords": [],
"author": "",
"license": "ISC",
"dependencies": {
"next": "^9.1.2",
"react": "^16.11.0",
"react-dom": "^16.11.0"
}
}
</code></pre>
<p>then install those 2 packages:</p><pre><code class="language-bash">npm install --dev cross-env @next/bundle-analyzer
</code></pre>
<p>Create a <code>next.config.js</code> file in the project root, with this content:</p><pre><code class="language-js">const withBundleAnalyzer = require('@next/bundle-analyzer')({
enabled: process.env.ANALYZE === 'true'
})
module.exports = withBundleAnalyzer({})
</code></pre>
<p>Now run the command</p><pre><code class="language-bash">npm run analyze
</code></pre>
<p>This should open 2 pages in the browser. One for the client bundles, and one for the server bundles:</p>
<p>This is incredibly useful. You can inspect what's taking the most space in the bundles, and you can also use the sidebar to exclude bundles, for an easier visualization of the smaller ones:</p>
<h2 id="lazy-loading-modules">Lazy loading modules</h2>
<p>Being able to visually analyze a bundle is great because we can optimize our application very easily.</p>
<p>Say we need to load the Moment library in our blog posts. Run:</p><pre><code class="language-bash">npm install moment
</code></pre>
<p>to include it in the project.</p>
<p>Now let's simulate the fact we need it on two different routes: <code>/blog</code> and <code>/blog/[id]</code>.</p>
<p>We import it in <code>pages/blog/[id].js</code>:</p><pre><code class="language-jsx">import moment from 'moment'
...
const Post = props =&gt; {
return (
&lt;div&gt;
&lt;h1&gt;{props.post.title}&lt;/h1&gt;
&lt;p&gt;Published on {moment().format('dddd D MMMM YYYY')}&lt;/p&gt;
&lt;p&gt;{props.post.content}&lt;/p&gt;
&lt;/div&gt;
)
}
</code></pre>
<p>I'm just adding today's date, as an example.</p>
<p>This will include Moment.js in the blog post page bundle, as you can see by running <code>npm run analyze</code>:</p>
<p>See that we now have a red entry in <code>/blog/[id]</code>, the route that we added Moment.js to!</p>
<p>It went from ~1kB to 350kB, quite a big deal. And this is because the Moment.js library itself is 349kB.</p>
<p>The client bundles visualization now shows us that the bigger bundle is the page one, which before was very little. And 99% of its code is Moment.js.</p>
<p>Every time we load a blog post we are going to have all this code transferred to the client. Which is not ideal.</p>
<p>One fix would be to look for a library with a smaller size, as Moment.js is not known for being lightweight (especially out of the box with all the locales included), but let's assume for the sake of the example that we must use it.</p>
<p>What we can do instead is separating all the Moment code in a <strong>separate bundle</strong>.</p>
<p>How? Instead of importing Moment at the component level, we perform an async import inside <code>getInitialProps</code>, and we calculate the value to send to the component.<br>Remember that we can't return complex objects inside the <code>getInitialProps()</code> returned object, so we calculate the date inside it:</p><pre><code class="language-js">import posts from '../../posts.json'
const Post = props =&gt; {
return (
&lt;div&gt;
&lt;h1&gt;{props.post.title}&lt;/h1&gt;
&lt;p&gt;Published on {props.date}&lt;/p&gt;
&lt;p&gt;{props.post.content}&lt;/p&gt;
&lt;/div&gt;
)
}
Post.getInitialProps = async ({ query }) =&gt; {
const moment = (await import('moment')).default()
return {
date: moment.format('dddd D MMMM YYYY'),
post: posts[query.id]
}
}
export default Post
</code></pre>
<p>See that special call to <code>.default()</code> after <code>await import</code>? It's needed to reference the default export in a dynamic import (see <a href="https://v8.dev/features/dynamic-import">https://v8.dev/features/dynamic-import</a>)</p>
<p>Now if we run <code>npm run analyze</code> again, we can see this:</p>
<p>Our <code>/blog/[id]</code> bundle is again very small, as Moment has been moved to its own bundle file, loaded separately by the browser.</p>
<h2 id="where-to-go-from-here">Where to go from here</h2>
<p>There is a lot more to know about Next.js. I didn't talk about managing user sessions with login, serverless, managing databases, and so on.</p>
<p>The goal of this Handbook is not to teach you everything, but instead it aims to introduce you, gradually, to all the power of Next.js.</p>
<p>The next step I recommend is to take a good read at the <a href="https://nextjs.org/docs">Next.js official documentation</a> to find out more about all the features and functionality I didn't talk about, and take a look at all the additional functionalities introduced by <a href="https://github.com/zeit/next-plugins">Next.js plugins</a>, some of which are pretty amazing.</p>
<p>You can reach me on Twitter <a href="https://twitter.com/flaviocopes">@flaviocopes</a>.</p>
<p>Also check out my website, <a href="https://flaviocopes.com/">flaviocopes.com</a>.</p>
<p><a href="https://flaviocopes.com/page/nextjs-handbook/">Note: you can download a PDF / ePub / Mobi version of this tutorial so you can read it offline</a>!</p>
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
