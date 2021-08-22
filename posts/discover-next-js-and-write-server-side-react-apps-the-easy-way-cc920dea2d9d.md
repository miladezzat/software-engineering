---
card: "https://cdn-media-1.freecodecamp.org/images/0*PoTjNPCEp_E0AIrM.png"
tags: [React]
description: Working on a modern JavaScript application powered by React i
author: "Milad E. Fahmy"
title: "Discover Next.js and write server-side React apps the easy way"
created: "2021-08-15T19:46:59+02:00"
modified: "2021-08-15T19:46:59+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-javascript tag-tech tag-programming tag-tutorial ">
<header class="post-full-header">
<h1 class="post-full-title">Discover Next.js and write server-side React apps the easy way</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*PoTjNPCEp_E0AIrM.png 300w,
https://cdn-media-1.freecodecamp.org/images/0*PoTjNPCEp_E0AIrM.png 600w,
https://cdn-media-1.freecodecamp.org/images/0*PoTjNPCEp_E0AIrM.png 1000w,
https://cdn-media-1.freecodecamp.org/images/0*PoTjNPCEp_E0AIrM.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*PoTjNPCEp_E0AIrM.png" alt="Discover Next.js and write server-side React apps the easy way">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<blockquote>Interested in learning JavaScript? Get my ebook at <a href="https://jshandbook.com/" rel="noopener">jshandbook.com</a></blockquote>
<h3 id="introduction">Introduction</h3>
<p>Working on a modern JavaScript application powered by <a href="https://flaviocopes.com/react/" rel="noopener">React</a> is awesome until you realize that there are a couple problems related to rendering all the content on the client-side.</p>
<p>First, the page takes longer to the become visible to the user. This is because before the content loads, all the JavaScript must load, and your application needs to run to determine what to show on the page.</p>
<p>Second, if you are building a publicly available website, you have a content SEO issue. Search engines are getting better at running and indexing JavaScript apps, but it’s much better if we can send them content instead of letting them figure it out.</p>
<p>The solution to both of those problems is <strong>server rendering</strong>, also called <strong>static pre-rendering</strong>.</p>
<p>Next.js is one React framework that allows us to do all of this in a very simple way, but it’s not limited to this. It’s advertised by its creators as a <strong>zero-configuration, single-command toolchain for React apps</strong>.</p>
<p>It provides a common structure that allows you to easily build a frontend React application, and it transparently handles server-side rendering for you.</p>
<h3 id="main-features">Main features</h3>
<p>Here is a non-exhaustive list of the main Next.js features:</p>
<ul>
<li><strong>Hot Code Reloading</strong>: Next.js reloads the page when it detects any change saved to disk.</li>
<li><strong>Automatic Routing</strong>: any URL is mapped to the filesystem (to files put in the <code>pages</code> folder), and you don’t need any configuration (you have customization options, of course).</li>
<li><strong>Single File Components</strong>: using <a href="https://github.com/zeit/styled-jsx" rel="noopener">styled-jsx</a>, completely integrated as built by the same team, it’s easy to add styles scoped to the component.</li>
<li><strong>Server Rendering</strong>: you can (optionally) render React components on the server side before sending the HTML to the client.</li>
<li><strong>Ecosystem Compatibility</strong>: Next.js plays well with the rest of the JavaScript, Node, and React ecosystem.</li>
<li><strong>Automatic Code Splitting</strong>: pages are rendered with just the libraries and JavaScript that they need, not more.</li>
<li><strong>Prefetching</strong>: the <code>Link</code> component, used to link together different pages, supports a <code>prefetch</code> prop which automatically prefetches page resources (including code missing due to code splitting) in the background.</li>
<li><strong>Dynamic Components</strong>: you can import JavaScript modules and React Components dynamically <a href="https://github.com/zeit/next.js#dynamic-import" rel="noopener">here</a>.</li>
<li><strong>Static Exports</strong>: using the <code>next export</code> command, Next.js allows you to export a fully static site from your app.</li>
</ul>
<h3 id="installation">Installation</h3>
<p>Next.js supports all the major platforms: Linux, macOS, Windows.</p>
<p>A Next.js project is started easily with <a href="https://flaviocopes.com/npm/" rel="noopener">npm</a>:</p><pre><code>npm install --save next react react-dom</code></pre>
<p>or with <a href="https://flaviocopes.com/yarn/" rel="noopener">Yarn</a>:</p><pre><code>yarn add next react react-dom</code></pre>
<h3 id="getting-started">Getting started</h3>
<p>Create a <code>package.json</code> file with this content:</p><pre><code>{  "scripts": {    "dev": "next"  }}</code></pre>
<p>If you run this command now:</p><pre><code>npm run dev</code></pre>
<p>the script will raise an error complaining about not finding the <code>pages</code> folder. This is the only thing that Next.js requires to run.</p>
<p>Create an empty <code>pages</code> folder, and run the command again. Then Next.js will start up a server on <code>localhost:3000</code>.</p>
<p>If you go to that URL now, you’ll be greeted by a friendly 404 page, with a nice clean design.</p>
<p>Next.js handles other error types as well, like the 500 errors, for example.</p>
<h3 id="create-a-page">Create a page</h3>
<p>In the <code>pages</code> folder, create an <code>index.js</code> file with a simple React functional component:</p><pre><code>export default () =&gt; (  &lt;div&gt;    &lt;p&gt;Hello World!&lt;/p&gt;  &lt;/div&gt;)</code></pre>
<p>If you visit <code>localhost:3000</code>, this component will automatically be rendered.</p>
<p>Why is this so simple?</p>
<p>Next.js uses a declarative pages structure, which is based on the filesystem structure.</p>
<p>Simply put, pages are inside a <code>pages</code> folder, and the page URL is determined by the page file name. The filesystem is the pages API.</p>
<p>Open the page source, <code>View -&gt; Developer -&gt; View </code>Source with Chrome.</p>
<p>As you can see, the HTML generated by the component is sent directly in the page source. It’s not rendered in the client-side, but instead it’s server-rendered.</p>
<p>The Next.js team wanted to create a developer experience for server-rendered pages similar to the one you get when creating a basic PHP project (where you simply drop PHP files and you call them, and they show up as pages). Internally, of course, it’s all very different, but the apparent ease of use is clear.</p>
<h3 id="add-a-second-page">Add a second page</h3>
<p>Let’s create another page, in <code>pages/contact.js</code></p><pre><code>export default () =&gt; (  &lt;div&gt;    &lt;p&gt;      &lt;a href="my@email.com"&gt;Contact us!&lt;/a&gt;    &lt;/p&gt;  &lt;/div&gt;)</code></pre>
<p>If you point your browser to <code>localhost:3000/contact</code> this page will be rendered. As you can see, this page is slo server-rendered.</p>
<h3 id="hot-reloading">Hot reloading</h3>
<p>Note how you did not have to restart the <code>npm</code> process to load the second page. Next.js does this for you under the hood.</p>
<h3 id="client-rendering">Client rendering</h3>
<p>Server rendering is very convenient in your first page load for all the reasons we saw above. But when it comes to navigating inside the website, client-side rendering is key to speeding up the page load and improving the user experience.</p>
<p>Next.js provides a <code>Link</code> component you can use to build links. Try linking the two pages above.</p>
<p>Change <code>index.js</code> to this code:</p><pre><code>import Link from 'next/link'</code></pre><pre><code>export default () =&gt; (  &lt;div&gt;    &lt;p&gt;Hello World!&lt;/p&gt;    &lt;Link href="/contact"&gt;      &lt;a&gt;Contact me!&lt;/a&gt;    &lt;/Link&gt;  &lt;/div&gt;)</code></pre>
<p>Now go back to the browser and try this link. As you can see, the Contact page loads immediately, without a page refresh.</p>
<p>This is client-side navigation working correctly, with complete support for the <strong>History API.</strong> This means your user’s back button won’t break.</p>
<p>If you now <code>cmd-click</code> the link, the same Contact page will open in a new tab, now server-rendered.</p>
<h3 id="dynamic-pages">Dynamic pages</h3>
<p>A good use case for Next.js is a blog. It’s something that all developers know how it works, and it’s a good fit for a simple example of how to handle dynamic pages.</p>
<p>A dynamic page is a page that has no fixed content, but instead displays some data based on some parameters.</p>
<p>Change <code>index.js</code> to:</p><pre><code>import Link from 'next/link'</code></pre><pre><code>const Post = (props) =&gt; (  &lt;li&gt;    &lt;Link href={`/post?title=${props.title}`}&gt;      &lt;a&gt;{props.title}&lt;/a&gt;    &lt;/Link&gt;  &lt;/li&gt;)</code></pre><pre><code>export default () =&gt; (  &lt;div&gt;    &lt;h2&gt;My blog&lt;/h2&gt;    &lt;ul&gt;      &lt;li&gt;        &lt;Post title="Yet another post" /&gt;        &lt;Post title="Second post" /&gt;        &lt;Post title="Hello, world!" /&gt;      &lt;/li&gt;    &lt;/ul&gt;  &lt;/div&gt;)</code></pre>
<p>This will create a series of posts and will fill the title query parameter to the post title:</p>
<p>Now create a <code>post.js</code> file in the <code>pages</code> folder, and add:</p><pre><code>export default (props) =&gt; (  &lt;h1&gt;{props.url.query.title}&lt;/h1&gt;)</code></pre>
<p>Now clicking a single post will render the post title in a <code>h1</code> tag:</p>
<p>You can use clean URLs without query parameters. The Next.js Link component helps us by accepting an <code>as</code> attribute, which you can use to pass a slug:</p><pre><code>import Link from 'next/link'</code></pre><pre><code>const Post = (props) =&gt; (  &lt;li&gt;    &lt;Link as={`/${props.slug}`} href={`/post?title=${props.title}`}&gt;      &lt;a&gt;{props.title}&lt;/a&gt;    &lt;/Link&gt;  &lt;/li&gt;)</code></pre><pre><code>export default () =&gt; (  &lt;div&gt;    &lt;h2&gt;My blog&lt;/h2&gt;    &lt;ul&gt;      &lt;li&gt;        &lt;Post slug="yet-another-post" title="Yet another post" /&gt;        &lt;Post slug="second-post" title="Second post" /&gt;        &lt;Post slug="hello-world" title="Hello, world!" /&gt;      &lt;/li&gt;    &lt;/ul&gt;  &lt;/div&gt;)</code></pre>
<h3 id="css-in-js">CSS-in-JS</h3>
<p>Next.js by default provides support for <a href="https://github.com/zeit/styled-jsx" rel="noopener">styled-jsx</a>, which is a CSS-in-JS solution provided by the same development team. But you can use whatever library you prefer, like <a href="https://flaviocopes.com/styled-components/" rel="noopener">Styled Components</a>.</p>
<h3 id="exporting-a-static-site">Exporting a static site</h3>
<p>A Next.js application can easily be exported as a static site. This can then be deployed on one of the super fast static site hosts, like <a href="https://flaviocopes.com/netlify/" rel="noopener">Netlify</a> or <a href="https://flaviocopes.com/firebase-hosting/" rel="noopener">Firebase Hosting</a>, without the need to set up a Node environment.</p>
<p>The process requires you to declare the URLs that compose the site, but it’s <a href="https://github.com/zeit/next.js/#static-html-export" rel="noopener">a straightforward process</a>.</p>
<h3 id="deploying">Deploying</h3>
<p>It’s easy to create a production-ready copy of the application without source maps or other development tooling that are not needed in the final build.</p>
<p>At the beginning of this tutorial you created a <code>package.json</code> file with this content:</p><pre><code>{  "scripts": {    "dev": "next"  }}</code></pre>
<p>which was the way to start up a development server using <code>npm run dev</code>.</p>
<p>Now just add the following content to <code>package.json</code> instead:</p><pre><code>{  "scripts": {    "dev": "next",    "build": "next build",    "start": "next start"  }}</code></pre>
<p>and prepare your app by running <code>npm run build</code> and <code>npm run start</code>.</p>
<h3 id="now">Now</h3>
<p>The company behind Next.js provides an awesome hosting service for Node.js applications, called <a href="https://zeit.co/now" rel="noopener"><strong>Now</strong></a>.</p>
<p>Of course they integrate both their products so you can deploy Next.js apps seamlessly, <a href="https://zeit.co/download" rel="noopener">once you have Now installed</a>, by running the <code>now</code> command in the application folder.</p>
<p>Behind the scenes, Now sets up a server for you, and you don’t need to worry about anything — just wait for your application URL to be ready.</p>
<h3 id="zones">Zones</h3>
<p>You can set up multiple Next.js instances to listen to different URLs. Yet the application to an outside user will simply look like it’s being powered by a single server: <a href="https://github.com/zeit/next.js/#multi-zones" rel="noopener">https://github.com/zeit/next.js/#multi-zones</a></p>
<h3 id="plugins">Plugins</h3>
<p>Next.js has a list of plugins <a href="https://github.com/zeit/next-plugins" rel="noopener">here</a>.</p>
<h3 id="read-more-on-next-js">Read more on Next.js</h3>
<p>I can’t possibly describe every feature of this great framework, and the main place to read more about Next.js is <a href="https://github.com/zeit/next.js/blob/canary/readme.md" rel="noopener">the project readme on GitHub</a>.</p>
<blockquote>Interested in learning JavaScript? Get my ebook at <a href="https://jshandbook.com/" rel="noopener">jshandbook.com</a></blockquote>
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
