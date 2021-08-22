---
card: "https://cdn-media-1.freecodecamp.org/images/1*LLjrzVGPTIotAeil7DiXyA@2x.png"
tags: [JavaScript]
description: by Ondřej Polesný
author: "Milad E. Fahmy"
title: "How to generate a static website with Vue.js in no time"
created: "2021-08-15T19:39:15+02:00"
modified: "2021-08-15T19:39:15+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nuxtjs tag-vuejs tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to generate a static website with Vue.js in no time</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*LLjrzVGPTIotAeil7DiXyA@2x.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*LLjrzVGPTIotAeil7DiXyA@2x.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*LLjrzVGPTIotAeil7DiXyA@2x.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*LLjrzVGPTIotAeil7DiXyA@2x.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*LLjrzVGPTIotAeil7DiXyA@2x.png" alt="How to generate a static website with Vue.js in no time">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Ondřej Polesný</p>
<h1 id="how-to-generate-a-static-website-with-vue-js-in-no-time">How to generate a static website with Vue.js in no time</h1>
<p>You have decided to build a static site, but where do you start? How do you select the right tool for the job without previous experience? How can you ensure that you succeed the first time, while avoiding tools that won’t help you in the end?</p>
<p>In this article, you will learn how to adjust a Vue.js website to be automatically generated as a static site.</p>
<h3 id="introduction">Introduction</h3>
<p>I summarized the key differences between an API based website and static sites in my <a href="http://bit.ly/2QVSm9a" rel="noopener">previous article</a>. As a quick reminder, static sites are:</p>
<ul>
<li>Blazing fast</li>
<li>Secure (as they are just a set of static pages)</li>
<li>Regenerated every time editors update the content</li>
<li>Compatible with additional dynamic functionality</li>
</ul>
<h4 id="what-is-a-static-site-generator">What is a Static Site Generator?</h4>
<p>A static site generator is a tool that generates a static website from a website’s implementation and content.</p>
<p>Content can come from a headless content management system, through a REST API. The website implementation uses one of the JavaScript frameworks like Vue.js or React. The output of a static site generator is a set of static files that form the website.</p>
<h4 id="static-site-implementation">Static Site Implementation</h4>
<p>I chose Vue.js as the JavaScript framework to use. Therefore I will be working with <a href="http://bit.ly/2Aiaggm" rel="noopener">Nuxt.js</a>, which is a static site generator for Vue.js.</p>
<p>If you are using a different framework, look for a static site generator built on top of that framework (for example <a href="http://bit.ly/2ypBwZ7" rel="noopener">Gatsby</a> for <a href="http://bit.ly/2PGeCTL" rel="noopener">React.js</a>).</p>
<p>Essentially, Nuxt is a combination of multiple tools that together enable you to create static sites. The tools include:</p>
<ul>
<li>Vue2 — Core Vue.js library.</li>
<li>Vue Router — Handles URL routing for pages within the website.</li>
<li>Vuex — Memory store for data that are shared by components.</li>
<li>Vue Server Renderer — Enables server side rendering of pages before the actual static files generation</li>
<li>Vue-Meta — Manages page metadata info</li>
</ul>
<p>Nuxt also defines how the website needs to be built in order to generate static files.</p>
<h4 id="installation">Installation</h4>
<p>In order to start building websites with Nuxt, you need to install it. See detailed installation instructions on the <a href="http://bit.ly/2R0LTJH" rel="noopener">Nuxt.js webpage</a>. In a nutshell, you need <code>npx</code> (shipped with NPM by default) installed and run:</p><pre><code>npx create-nuxt-app &lt;website-name&gt;</code></pre>
<p>You can just use default selections, unless you have preferences otherwise.</p>
<h4 id="components">Components</h4>
<p>In <a href="http://bit.ly/2zLRE8a" rel="noopener">one of my previous articles</a> I explained how to create a template layout and components. All of them were defined within single file <code>components.js</code>. That needs to be changed with Nuxt. All components need to be extracted from <code>components.js</code> file into separate files under folder <code>components</code>. Take a look at my <code>blog-list</code> component and its previous implementation:</p><pre><code>Vue.component('blog-list', { props: ['limit'], data: function(){  return {   articles: null  } },</code></pre><pre><code> created: function(){  var query = deliveryClient   .items()   .type('blog_post')   .elementsParameter(['link', 'title', 'image_url', 'image', 'teaser'])   .orderParameter('elements.published', SortOrder.desc);   if (this.limit){   query = query.limitParameter(this.limit);  }  query   .getPromise()   .then(response =&gt;    this.$data.articles = response.items.map(item =&gt; ({     url: item.link.value,     header: item.title.value,     image: item.image_url.value != '' ? item.image_url.value : item.image.assets[0].url,     teaser: item.teaser.value    }))   ); },</code></pre><pre><code> template: `  &lt;section class="features"&gt;   &lt;article v-for="article in articles"&gt;    ...   &lt;/article&gt;  &lt;/section&gt; ` });</code></pre>
<p>To separate it, you also need to change the component’s syntax to match the following template:</p><pre><code>&lt;template&gt; HTML of the component&lt;/template&gt;&lt;script&gt; export default {  Vue.js code }&lt;/script&gt;</code></pre>
<p>Therefore my adjusted <code>Blog-list</code> component looks like this:</p><pre><code>&lt;template&gt; &lt;section class="features"&gt;  &lt;article v-for="article in blogPosts"&gt;   ...  &lt;/article&gt; &lt;/section&gt;&lt;/template&gt;&lt;script&gt; export default {  props: ['limit'],  computed: {   blogPosts: function(){    return this.$store.state.blogPosts &amp;&amp; this.limit &amp;&amp; this.$store.state.blogPosts.length &gt; this.limit ? this.$store.state.blogPosts.slice(0, this.limit) : this.$store.state.blogPosts;   }  } }&lt;/script&gt;</code></pre>
<p>You see the template stayed the same. What changed is the implementation that is now within <code>export default</code> section. Also, there used to be a function gathering data from headless CMS Kentico Cloud.</p>
<p>That content is now stored within Vuex store. I will explain this part later. Convert all of your components this way, to contain template within <code>&lt;templa</code>te&gt; tags and implementation w<code>ithin &amp;l</code>t;script&gt; tags. You should end up with a similar file structure as I have:</p>
<p>Note that I have two new components here — Menu and Header. As my aim was to also improve performance, I decided to remove jQuery from my website. jQuery is quite a large and heavy library that was used only for small UI effects. I was able to recreate them using just Vue.js. Therefore, I converted the static HTML representing header to component. I also added the UI related functionality into <code>mounted</code> function of this component.</p><pre><code>mounted: function(){ window.addEventListener(‘scroll’, this.scroll); …},methods: { scroll: function(){  … }}</code></pre>
<h3 id="handling-vue-js-events-with-nuxt">Handling Vue.js Events with Nuxt</h3>
<p>I used to leverage Vue events in my website. The main reason was reCaptcha control used for form validation. When it was initialized, it would broadcast the event so that form component can unlock the submit button of the contact form.</p>
<p>With Nuxt, I no longer use <code>app.js</code> or <code>components.js</code> files. Therefore I created a new <code>recaptcha.js</code> file that contains a simple function emitting the event when reCaptcha gets ready. Note that instead of creating new Vue.js instance just for events (<code>let bus = new Vue();</code> in my old code), it is possible to simply use <code>this.$nuxt</code> the same way.</p><pre><code>var recaptchaLoaded = function(){ this.$nuxt.$emit('recaptchaLoaded');}</code></pre>
<h3 id="layout-and-pages">Layout and Pages</h3>
<p>The main frame of the page was <code>index.html</code>, and each page defined its own layout in constants that were handed over to Vue router.</p>
<p>With Nuxt, the main frame including <code>&lt;ht</code>ml&gt;<code> tag</code>, meta tags and other essentials of any HTML page are handled by Nuxt. The actual website implementation is handling only content w<code>ithin </code>&lt;body&gt; tags. Move the layout that is common for all your<code> pages into layouts</code>/default.vue and respect the same template as with components. My layout looks like this:</p><pre><code>&lt;template&gt; &lt;div&gt;  &lt;Menu&gt;&lt;/Menu&gt;  &lt;div id="page-wrapper"&gt;   &lt;Header&gt;&lt;/Header&gt;   &lt;nuxt/&gt;   &lt;section id="footer"&gt;    &lt;div class="inner"&gt;     …     &lt;ContactForm&gt;&lt;/ContactForm&gt;     …    &lt;/div&gt;   &lt;/section&gt;  &lt;/div&gt; &lt;/div&gt;&lt;/template&gt;&lt;script&gt; import ContactForm from ‘~/components/Contact-form.vue’ import Menu from ‘~/components/Menu.vue’ import Header from ‘~/components/Header.vue’  export default {  components: {   ContactForm,   Menu,   Header  } } &lt;/script&gt;</code></pre>
<p>The layout is basically the HTML markup of my old <code>index.html</code>. However, note the <code>&lt;scri</code>pt&gt; section. All of the components I want to use within this layout template need to be imported from their location and specified in exported object.</p>
<p>Page components were previously defined in <code>app.js</code> as constants. Take a look at my old Home page for example:</p><pre><code>const Home = { template: `  &lt;div&gt;   &lt;banner&gt;&lt;/banner&gt;   &lt;section id="wrapper"&gt;    &lt;about-overview&gt;&lt;/about-overview&gt;    ...    &lt;blog-list limit="4"&gt;&lt;/blog-list&gt;    &lt;ul class="actions"&gt;     &lt;li&gt;&lt;a href="/blog" class="button"&gt;See all&lt;/a&gt;&lt;/li&gt;    &lt;/ul&gt;    ...   &lt;/section&gt;  &lt;/div&gt; `}</code></pre>
<p>All these pages need to be defined in separate files within <code>pages</code> folder. Main page is always called <code>index.vue</code>. This is how my new <code>pages/index.vue</code> (my Homepage) looks like:</p><pre><code>&lt;template&gt; &lt;div&gt;  &lt;Banner&gt;&lt;/Banner&gt;  &lt;section id="wrapper"&gt;   &lt;AboutOverview&gt;&lt;/AboutOverview&gt;   ...   &lt;BlogList limit="4"&gt;&lt;/BlogList&gt;   &lt;ul class="actions"&gt;    &lt;li&gt;&lt;a href="/blog" class="button"&gt;See all&lt;/a&gt;&lt;/li&gt;   &lt;/ul&gt;   ...  &lt;/section&gt; &lt;/div&gt;&lt;/template&gt;&lt;script&gt; import Banner from ‘~/components/Banner.vue’ import AboutOverview from ‘~/components/About-overview.vue’ import BlogList from ‘~/components/Blog-list.vue’  export default {  components: {   Banner,   AboutOverview,   BlogList  }, }&lt;/script&gt;</code></pre>
<h3 id="where-to-store-assets">Where to Store Assets</h3>
<p>On every website there are assets like CSS stylesheets, images, logos, and JavaScripts. With Nuxt, all these static files need to be stored under folder static. So the folder structure currently looks like this:</p>
<p>When you reference any resources from CSS stylesheets like fonts or images, you need to use static folder as a root:</p><pre><code>background-image: url("~/assets/images/bg.jpg");</code></pre>
<h3 id="getting-content">Getting Content</h3>
<p>With all the components and pages in place, we finally get to it: getting content into components.</p>
<p>Getting content using Nuxt is a bit different than it used to be. The important aspect of this process when using a static site generator is that the content needs to be gathered before all the pages are generated. Otherwise you will end up with a static website, but requests for content would still be dynamic, hitting the headless CMS from each visitor’s browser and you would lose the main benefit.</p>
<p>Nuxt contains two special methods that handle asynchronous data fetching at the right time, that is before the pages are generated. These methods are <code>asyncData </code>and <code>fetch</code>. They are available only to page components (that is files within <code>pages </code>folder) and their purpose is the same, but <code>asyncData </code>will automatically store received data within the component dataset.</p>
<p>This can be beneficial if you have many components on a single page using the same set of data. In my case, I even have multiple pages with many components that need to share the same data. Therefore I would either need to request the same data on each page or use a shared space that all pages and components could access.</p>
<p>I chose the latter. Nuxt makes it very easy for us. It automatically includes Vuex store that enables our components and pages access any data that are within the store. To start using the store all you need to do is create an <code>index.js</code> file within the <code>store</code> folder.</p><pre><code>import Vuex from 'vuex'</code></pre><pre><code>const createStore = () =&gt; { return new Vuex.Store({  state: () =&gt; ({}),  mutations: {},  actions: {}, })}export default createStore</code></pre>
<p>You see the instance has a few properties:</p>
<ul>
<li><strong>State</strong><br>State is similar to data in components. It contains definition of data fields that are used to store data.</li>
<li><strong>Mutations</strong><br>Mutation are special functions that are permitted to change data in State (mutate the state).</li>
<li><strong>Actions</strong><br>Actions are simple methods that enable you to, for example, implement content gathering logic.</li>
</ul>
<p>Let’s get back to the <code>Blog-list</code> component. This component needs an array of blog posts in order to render its markup. Therefore blog posts need to be stored within Vuex store:</p><pre><code>…const createStore = () =&gt; { return new Vuex.Store({  state: () =&gt; ({   blogPosts: null  }),  mutations: {   setBlogPosts(state, blogPosts){    state.blogPosts = blogPosts;   }  },  actions: {   getBlogPosts (context) {    logic to get content from Kentico Cloud   }  }, })}</code></pre>
<p>After adjusting Vuex store this way, the <code>Blog-list</code> component can use its data:</p><pre><code>&lt;article v-for="article in $store.state.blogPosts"&gt; …&lt;/article&gt;</code></pre>
<p>I already shared the whole implementation of this component above. If you noticed, it uses <code>computed</code> function as a middle layer between component markup and Vuex store. That middle layer ensures the component displays only a specific amount of articles as configured in the <code>limit</code> field.</p>
<h3 id="querying-the-headless-cms">Querying the Headless CMS</h3>
<p>Maybe you remember the <code>deliveryClient</code> was used to get data from <a href="http://bit.ly/2QzUALM" rel="noopener">Kentico Cloud</a> into the components.</p>
<p><em>Disclaimer: I work for Kentico, a CMS vendor that provides both traditional (coupled) CMS and a new cloud-first headless CMS — Kentico Cloud.</em></p>
<p>The very same logic can be used here in the Vuex store actions with a little tweak. Kentico Cloud has a <a href="http://bit.ly/2Qiovur" rel="noopener">module for Nuxt.js</a>, install it using following command:</p><pre><code>npm i kenticocloud-nuxt-module — savenpm i rxjs — save</code></pre>
<p>With this module you can keep using <code>deliveryClient</code> like before, just with a <code>$</code> prefix. So in my case the logic to get blog posts looks like this:</p><pre><code>…getBlogPosts (context) { return this.$deliveryClient  .items()  ...  .orderParameter('elements.published', SortOrder.desc)  .getPromise()  .then(response =&gt; {   context.commit('setBlogPosts', response.items.map(item =&gt; ({    url: item.link.value,    header: item.title.value,    image: item.image_url.value != '' ? item.image_url.value : item.image.assets[0].url,    teaser: item.teaser.value   })))  }); },…</code></pre>
<p>If you want to use ordering using the <code>orderParameter</code>, you may need to include another import in the <code>store/index.js</code> file:</p><pre><code>import { SortOrder } from 'kentico-cloud-delivery'</code></pre>
<p>Now when the content gathering logic is implemented, it’s time to use the special asynchronous function fetch that I mentioned before. See my implementation in the <code>index.vue</code> page:</p><pre><code>async fetch ({store, params}) { await store.dispatch('getBlogPosts')}</code></pre>
<p>The call to <code>store.dispatch</code> automatically invokes <code>getBlogPosts</code> action. Within the <code>getBlogPosts</code> implementation note the call for <code>context.commit</code>. <code>context</code> refers to Vuex store and <code>commit</code> will hand over blog posts data to <code>setBlogPosts</code> mutation. Updating the data set with blog posts changes the state of the store (mutates it). And we are almost finished!</p>
<h4 id="other-content-storage-options">Other content storage options</h4>
<p>I used <a href="http://bit.ly/2QzUALM" rel="noopener">Kentico Cloud</a> headless CMS and its API here, as I am using it throughout all articles in this series. If you want to also check out other options, you can find an independent list of headless CMSs and their features at <a href="http://bit.ly/2S8gxSi" rel="noopener">headlesscms.org</a>.</p>
<p>If you don’t want to use a headless CMS and its API, you may decide to store your content in some other way — usually as a set of markdown files directly stored within your project or Git repository. You can find a nice example of this approach in <a href="http://bit.ly/2R5PQAo" rel="noopener">nuxt-markdown-example GitHub repository</a>.</p>
<h3 id="nuxt-configuration">Nuxt Configuration</h3>
<p>The whole application needs to be properly configured using <code>Nuxt.config.js</code> file. This file contains information about used modules, their configuration and site essentials like title or SEO tags. The configuration of my website looks like this:</p><pre><code>export default { head: {  title: 'Ondrej Polesny',  meta: [   { charset: 'utf-8' },   ...   { hid: 'description', name: 'description', content: 'Ondrej Polesny — Developer Evangelist + dog lover + freelance bus driver' }  ],  script: [   { src: 'https://www.google.com/recaptcha/api.js?onload=recaptchaLoaded', type: "text/javascript" },   { src: 'assets/js/recaptcha.js', type: "text/javascript" }  ], }, modules: [  'kenticocloud-nuxt-module' ], kenticocloud: {  projectId: '*KenticoCloud projectId*',  enableAdvancedLogging: false,  previewApiKey: '' }, css: [  {src: 'static/assets/css/main.css'}, ], build: {  extractCSS: {   allChunks: true  } }}</code></pre>
<p>The head section describes website essentials like <code>title </code>and <code>meta </code>tags you want to include in header.</p>
<p>Note the <code>modules </code>and <code>kenticocloud</code> configuration. The first one lists all modules your application depends on and the second one is specific module configuration. This is the place where you need to put your project API key.</p>
<p>To see all the options for meta tags, please refer to <a href="http://  https://github.com/declandewet/vue-meta" rel="noopener">https://github.com/declandewet/vue-meta</a></p>
<h3 id="running-and-generating">Running and Generating</h3>
<p>Static sites need to be generated before anyone can access them or upload them to an FTP server. However, it would be very time consuming to regenerate the site every single time a change has been made during the development phase. Therefore, you can run the application locally using:</p><pre><code>npm run dev</code></pre>
<p>This will create a development server for you and enable you to access your website on http://localhost:8000 (or similar). While you keep your console running this command, every change you make in your scripts will have immediate effect on the website.</p>
<p>To generate a true static site, execute following command:</p><pre><code>npx nuxt generate</code></pre>
<p>The output, that is your static site, will be in <code>dist</code> folder. Feel free to open any page in your favorite text editor and see if the source code contains content from the headless CMS. If it does, it was successfully fetched.</p>
<h3 id="conclusion">Conclusion</h3>
<p>Having a generated static site will greatly improve the website’s performance. Compared to traditional sites, the webserver does not need to perform any CPU heavy operations. It only serves static files.</p>
<p>Compared to API based websites, the clients receive requested data instantly with the very first response. That’s what makes them all that fast — they do not need to wait for external content to be delivered via additional asynchronous requests. The content is already there in the first response from the server. That dramatically improves user experience.</p>
<p>Converting the site from Vue.js implementation to Nuxt definitions is very straightforward and does not require deep knowledge of all used components and packages.</p>
<p>Have you successfully created your first static site? Have you experienced any struggles? Please leave a comment.</p>
<p>In the next article I will focus on automated regeneration of static sites and where to host them, so stay tuned.</p>
<h4 id="other-articles-in-the-series-">Other articles in the series:</h4>
<ol>
<li><a href="http://bit.ly/2Duglu1" rel="noopener">How to start creating an impressive website for the first time</a></li>
<li><a href="http://bit.ly/2N0kXY4" rel="noopener">How to decide on the best technology for your website?</a></li>
<li><a href="http://bit.ly/2zLRE8a" rel="noopener">How to power up your website with Vue.js and minimal effort</a></li>
<li><a href="http://bit.ly/2CyDnhX" rel="noopener">How to Mix Headless CMS with a Vue.js Website and Pay Zero</a></li>
<li><a href="http://bit.ly/2P0gidP" rel="noopener">How to Make Form Submissions Secure on an API Website</a></li>
<li><a href="http://bit.ly/2QVSm9a" rel="noopener">Building a super-fast and secure website with a CMS is no big deal. Or is it?</a></li>
<li><strong>How to generate a static website with Vue.js in no time</strong></li>
<li><a href="http://bit.ly/2Dv2UGS" rel="noopener">How to quickly set up a build process for a static site</a></li>
</ol>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
