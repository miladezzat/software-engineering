---
card: "https://cdn-media-1.freecodecamp.org/images/1*lwIEF0F3eDlMKR1hKZic7Q.jpeg"
tags: [JavaScript]
description: by Krutie Patel
author: "Milad E. Fahmy"
title: "Universal application code structure in Nuxt.js"
created: "2021-08-15T19:41:54+02:00"
modified: "2021-08-15T19:41:54+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-vuejs tag-vue tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Universal application code structure in Nuxt.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*lwIEF0F3eDlMKR1hKZic7Q.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*lwIEF0F3eDlMKR1hKZic7Q.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*lwIEF0F3eDlMKR1hKZic7Q.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*lwIEF0F3eDlMKR1hKZic7Q.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*lwIEF0F3eDlMKR1hKZic7Q.jpeg" alt="Universal application code structure in Nuxt.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Krutie Patel</p>
<h1 id="universal-application-code-structure-in-nuxt-js">Universal application code structure in Nuxt.js</h1>
<h4 id="a-brief-summary-of-source-code-structure-in-nuxt-js">A brief summary of source code structure in Nuxt.js</h4>
<p>Are you new to the Nuxt.js framework and totally overwhelmed by the number of folders it comes with? Are you also surprised that most of them are empty with just the readme file in them? Well, that’s where I was little over a year ago. Since then, I’ve always wanted to learn and document the magic that each folder brought into the Nuxt project.</p>
<p>And now, after implementing a few projects with this framework, I have documented my understanding of how these folders work together to bring the server-rendered Vue application to life.</p>
<p>The diagram above is based on <a href="https://ssr.vuejs.org/guide/structure.html#introducing-a-build-step" rel="noopener">Vue SSR guide</a>, and extended with Nuxt.js in mind. At a glance, you see different folders in <em>Your universal application code</em> section, and how the code is then, packaged by Nuxt and bundled by Webpack.</p>
<p>This article is neither tutorial nor complete guide to Nuxt SSR. It rather shows what goes into universal application.</p>
<p>Although you see modules, serverMiddleware, and plugins at the top of the diagram, let’s start with <em>Store</em> first.</p>
<h3 id="vuex-store-store-">Vuex Store (/store)</h3>
<p>Nuxt comes pre-packaged with Vuex, but it’s not activated unless you make a Vuex store in the <em>/store</em> directory and create the store.</p>
<p>This is very special directory for any data-driven project. This is where you can create a data-store, as well as define the <em>nuxtServerInit</em> action. This happens to be the very first lifecycle hook as well!</p><pre><code>const createStore = () =&gt; {  return new Vuex.Store({     ...  })}</code></pre>
<p>When the user initially accesses your application, this helps fill/update the store. It also maintains the state of your data throughout the application.</p>
<h3 id="route-middleware-middleware-">Route Middleware (/middleware)</h3>
<p>There are three different kinds of route middleware available in Nuxt. They are all defined in one central location — in the <em>/middleware</em> directory.</p>
<p>From here, you can use them in the following ways:</p>
<ul>
<li>Global middleware — (entry via Nuxt config and affects all routes)</li>
</ul><pre><code>// nuxt.config.js </code></pre><pre><code>export default {  router: {    middleware: 'authenticated'  },}</code></pre>
<ul>
<li>Layout middleware (entry via layouts and affects group of matching routes, i.e. certain pages only to be viewed/accessed by authenticated users)</li>
</ul><pre><code>// layouts/default.vue</code></pre><pre><code>export default {  middleware: 'authenticated-basic-plan-user'}</code></pre>
<ul>
<li>Page middleware (entry via page component and affects single route)</li>
</ul><pre><code>// pages/index.vue</code></pre><pre><code>export default {   middleware: 'subscribed'}</code></pre>
<p>The middleware above are dealt in this exact order — meaning, their priorities are non-negotiable. So you must think through and plan your application carefully to get the most use out of them.</p>
<h3 id="vue-components">Vue Components</h3>
<p>There are three directories where <em>.vue</em> files are created in a Nuxt project.</p>
<h4 id="1-page-components-pages-"><strong>1. Page components ? (/pages)</strong></h4>
<p>This is the most important directory of all that houses application views and routes. Vue.js components created here are directly converted into application routes.</p>
<p>The real power of page components lies in dynamic routes. You can use them to generate SEO friendly and data-oriented URLs. Dynamic routes are generated based on your directory structure under <em>/pages.</em></p>
<p>In addition, Nuxt adds three special methods on page components which aren’t available anywhere else. They are <em>validate()</em>, <em>asyncData()</em> &amp; <em>fetch()</em>.</p><pre><code>// pages/index.vue </code></pre><pre><code>export default {</code></pre><pre><code>  validate() {     // validates dynamic URL parameters     // verifies the availability of the data  },   asyncData() {     // sets component data  },</code></pre><pre><code>  fetch() {    // doesn't set component data, but     // fetches further contextual data  }</code></pre><pre><code>}</code></pre>
<h4 id="2-layout-components-layouts-"><strong>2. Layout components (/layouts)</strong></h4>
<p>Layout components power the structural aspects of your application. Common components found on all pages are created here (like main menu, secondary menu, header, footer, etc.). They’re located in the <em>/layouts</em> directory.</p>
<p>You can be as creative as you want here, after all they are Vue.js components. Don’t forget to add <em>&lt;nux</em>t/&gt; in the main content area of the layout.</p><pre><code>&lt;template&gt;  &amp;lt;div&gt;     &lt;nuxt/&gt;  &lt;/div&gt;&lt;/template&gt;</code></pre>
<p>Incorporate <em>route-middleware</em> and <em>store data-state</em> with the layout component to build perfect <em>who-sees-what</em> features for any number of user-types with varied scenarios. You can achieve a bit more than just with a custom user interface.</p>
<h4 id="3-vue-js-components-components-"><strong>3. Vue.js components (/components)</strong></h4>
<p>These are regular, but versatile Vue components. They are created under the <em>/components</em> directory. They are not supercharged with special methods like Page components.</p>
<p>But they allow you to structure and organize your business logic. They also hide heavy markup from <strong>page</strong> and <strong>layout</strong> components. This makes your codebase more manageable.</p>
<p>Now look closely — can you see the partial folder structure in this Nuxt lifecycle diagram?<br><strong>Hint:</strong> Store (nuxtServerInit), Route Middleware and Page components (validate, asyncData &amp; fetch methods)</p>
<h3 id="assets">Assets</h3>
<h4 id="webpacked-assets-assets-"><strong>Webpacked assets (/assets)</strong></h4>
<p>Assets such as JavaScript files, custom fonts, and CSS files are processed by Webpack using specific loaders (css-loader, file-loader, url-loader etc) depending upon file types. For example, if you write your CSS in <em>.scss</em> or <em>.less</em> format then Webpack will process these files using a specific loader and output compiled <em>.css</em> file that can be used by the browser.</p>
<p>You can even customize your <em>nuxt.config.js </em>to instruct Webpack to minify and optimize images in the assets folder as a part of your build process. After Webpack processes the files, it attaches hash-code — <em>for example, index.4258e3668a44556dd767.js</em> — to the processed items which helps in long-term caching of dynamic assets and cache-busting.</p>
<h4 id="static-assets-static-"><strong>Static assets (/static)</strong></h4>
<p>For the assets that will not change, you can safely put them in the <em>static</em> folder. Webpack ignores the static folder and will not process anything in there.</p>
<h3 id="modules-servermiddleware-and-plugins">Modules, serverMiddleware and plugins</h3>
<p>They are all defined (by their path) in Nuxt configuration. They are accessible globally within the Nuxt application.</p>
<h4 id="modules-modules-"><strong>Modules (/modules)</strong></h4>
<p>A fresh Nuxt application is pre-packaged with Vue, Vue Router, Vuex, Vue Server Rendered and Vue Meta by default.</p>
<p>But you may wonder, what about features like Sitemap, Google Analytics, Progressive Web Apps, or more? If you’re thinking of using modules, then yes, you are right, this is where the power of Nuxt modules come into play.</p>
<h4 id="servermiddleware-i-e-api-"><strong>serverMiddleware (i.e. /api)</strong></h4>
<p>serverMiddleware can be considered an extension point for your application. They are special because they have access to the underlying instance of the connect framework.</p>
<p>Since Nuxt uses <strong>connect</strong> to deliver the application, it allows custom functions to be hooked into the underlying request pipeline as middleware.</p>
<p>You can use serverMiddleware to:</p>
<ul>
<li>Create an API endpoint to connect to external applications.</li>
<li>Create an API endpoint to send email to users from your Nuxt application.</li>
<li>Access and modify the request in any way, even before it reaches Nuxt.</li>
</ul>
<p>Note that you don’t have any pre-populated empty folders for serverMiddleware and modules. You create them when needed.</p>
<h4 id="plugins-plugins-"><strong>Plugins (/plugins)</strong></h4>
<p>You can make your existing Vue mixins, filters, or directives work harder just by converting them into Nuxt plugins. You place them in the <em>/plugins</em> directory that comes with a fresh Nuxt installation.</p>
<p>But most of the time, you will end up adding external packages or Vue libraries as Nuxt plugins. You incorporate them in Nuxt by simply using <em>Vue.use()</em> syntax. Some of the staple plugins I always end up using in my Nuxt implementation are Vue Bootstrap, form validation, font-awesome icon-set and axios.</p>
<p>That’s not the end of plugins. You can write custom plugins and add them in the application root. They are available globally in your Nuxt application. This is my personal favorite way of adding custom GreenSock or Scroll-Magic transitions into the project, and using them in the Vue <em>(/components)</em> and Page <em>(/pages)</em> components.</p>
<h4 id="high-level-overview-of-modules-servermiddleware-and-plugins">High-level overview of modules, serverMiddleware and plugins</h4>
<h3 id="package-bundle-and-deliver">Package, bundle and deliver</h3>
<p>Once you have the desired features in place, you build your application using <em>npm run build. </em>Nuxt packages your application.</p>
<p>As shown in the diagram below, <em>index.js</em> is the main entry point, which imports <em>app.js</em>.</p>
<figcaption>Nuxt packages your code — Webpack bundles and delivers your code</figcaption>
</figure>
<p><em>App.js</em> defines the root Vue instance. If you look closely in <em>.nuxt/App.js</em>, it’s nothing but a Vue component.</p>
<p>Once this root Vue instance is defined, client entry (<em>client.js</em>) creates a new instance based on it and mounts it to the DOM element. End-users see a fresh instance of an app in their browsers. While server entry (<em>server.js</em>) creates a new app instance for each request.</p>
<p>And finally, Webpack bundles your app so that the code runs on both the client and server side. The server bundle renders the server side, and the client bundle hydrates static HTML markup in the browser. It turns it into a dynamic DOM that can react to client-side data changes.</p>
<p>Nuxt does this all out of the box for us, so you don’t have to write this setup manually. Lots of complexity goes into the last two steps — packaging and bundling. But Nuxt hides all of it from you. You can concentrate on the application code that eventually delivers the final application.</p>
<h3 id="conclusion">Conclusion</h3>
<p>I hope this higher level overview of the application code structure takes you one step further in your learning journey of the Nuxt framework.</p>
<p>This is one of many alternate perspectives to help you make sense of how everything fits together in a Nuxt application.</p>
<p>For me personally, this little exercise helps me:</p>
<ul>
<li>map out the requirements of the project against out-of-the-box Nuxt features</li>
<li>list relevant community modules &amp; plugins that are already available, and</li>
<li>pick out the remaining/complex bits that require custom development.</li>
</ul>
<h4 id="diagrams-links-with-high-res-versions-of-the-diagrams-used-above"><strong>Diagrams links with high-res versions of the diagrams used above</strong></h4>
<ol>
<li><a href="http://bit.ly/2xv6PDV" rel="noopener">Nuxt Js lifecycle hooks</a></li>
<li><a href="http://bit.ly/2sHNieo" rel="noopener">Understanding modules, serverMiddleware and plugins</a></li>
<li><a href="http://bit.ly/2MFl23s" rel="noopener">Universal application code in Nuxt.js</a></li>
</ol>
<p>Feel free to reach out with comments, feedback or even a suggestion for new diagram ideas you would like to see — in the comment section below.</p>
<figcaption><a href="https://www.pariksha.io/" rel="noopener" target="_blank" title="">https://www.pariksha.io/</a></figcaption>
</figure>
<p>If you’re new to Nuxt, then you may want to check out my earlier article on this topic “<a href="https://codeburst.io/why-nuxt-js-is-perfect-framework-for-your-landing-page-53e214649b88" rel="noopener">Why Nuxt Js is the perfect framework for your landing page?</a> That will give you deeper insight in the nitty-gritty of developing applications with Nuxt.</p>
<h3 id="are-you-nuxt-yet">Are you Nuxt yet?</h3>
<p>When <a href="https://twitter.com/_achopin" rel="noopener">@_achopin</a> asked at the <a href="https://twitter.com/vuejsamsterdam" rel="noopener">@vuejsamsterdam</a>, “Are you Nuxt?” I thought, hey… I am Nuxt.</p>
<p>And I created these <a href="https://www.etsy.com/au/shop/CrewShopDesigns" rel="noopener">Nuxt stickers</a> — professionally printed by Moo Printing and ready to be shipped if you’re interested. Alternatively, you can order them on <a href="https://www.redbubble.com/people/krutie?asc=u" rel="noopener">RedBubble</a> as well.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
