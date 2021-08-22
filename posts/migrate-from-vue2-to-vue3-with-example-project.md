---
card: "/images/default.jpg"
tags: [Vuejs]
description: Vue.js is a progressive JavaScript frontend framework written
author: "Milad E. Fahmy"
title: "How to Migrate from Vue v.2 to Vue v.3 with a Simple Example Project"
created: "2021-08-15T19:26:14+02:00"
modified: "2021-08-15T19:26:14+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-vuejs tag-vue-router tag-javascript tag-front-end-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to Migrate from Vue v.2 to Vue v.3 with a Simple Example Project</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/06/Cover_migration_vue_2_3.jpg 300w,
/news/content/images/size/w600/2021/06/Cover_migration_vue_2_3.jpg 600w,
/news/content/images/size/w1000/2021/06/Cover_migration_vue_2_3.jpg 1000w,
/news/content/images/size/w2000/2021/06/Cover_migration_vue_2_3.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/06/Cover_migration_vue_2_3.jpg" alt="How to Migrate from Vue v.2 to Vue v.3 with a Simple Example Project">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h2 id="whatisvuejs">What is Vue.js?</h2>
<p>Vue.js is a progressive JavaScript frontend framework written by Evan You. It's one of the most powerful and easy to learn frameworks, and it has over 9.5 million downloads per month.</p>
<p>In September 2020, Vue 3 core was released. The new Vue.js release introduces some cool new features but also some breaking changes.</p>
<h2 id="whyshouldimigratetovue3">Why should I migrate to Vue3?</h2>
<p>As the tech industry evolves, so do libraries, languages, and frameworks. At each release, bugs are fixed and new features introduced. And often with any major release, your workflow is enhanced. New features can give you the opportunity to do things that were tedious before.</p>
<p>Vue 3 is still relatively new. You don't have to migrate all your projects over, but as time goes by, support for version 2 might end. Because of this it's a good idea to know the steps you'll need to take to migrate your projects.</p>
<p>In this guide, I'll walk you through the basic steps you will need to follow to approach the migration. We will take a simple project and migrate it to Vue 3.</p>
<p>The project that we will use is intentionally simple, and so anyone can follow along. The more complex your project is, the more carefully you'll want to plan for the migration.</p>
<h2 id="intro">Intro</h2>
<p>The new Vue.js version does come with quite a few breaking changes and new features. Also, popular libraries like Vue Router have been updated to support the new Vue version.</p>
<p>If you already know Vue 2, the basics are quite the same. But before you can migrate a project to Vue 3 there are changes you need to take into account.</p>
<p>Depending on the size of the project you want to migrate, make sure to consider all the changes introduced with the new release so that your application will still work after the migration.</p>
<p>For this tutorial, I'll keep things simple and show you how to migrate a Vue.js project that currently uses the Vue 2 CDN.</p>
<p>I'm taking the project from the book I wrote for freeCodeCamp, which you can find <a href="/news/build-a-portfolio-with-vuejs/">here</a>.</p>
<p>In that project we used Vue Router, so we will also look at Vue router's changes in this article.</p>
<h2 id="whatyouneedtofollowalongwiththisarticle">What you need to follow along with this article</h2>
<p>To follow along you need a basic knowledge of Vue.js and Vue Router. If you don't have that. then I suggest you start by checking out my book available on <a href="/news/build-a-portfolio-with-vuejs/">freeCodeCamp</a>.</p>
<p>You can also find the playlist with the full 8 hour course available for free on my <a href="https://www.youtube.com/playlist?list=PL-qez5yxvgfjYZE_BP7WyxZuLyVPyWrF1">YouTube channel</a>.</p>
<h2 id="whatwellcoverinthisarticle">What we'll cover in this article</h2>
<p>This tutorial is organised into three main chapters. First, we will have a look at the changes in Vue.js v3.x then a quick overview of Vue Router v4.x. And finally, we will start planning the migration of a real project.</p>
<ul>
<li>Vue v3.x overview
<ul>
<li>breaking changes</li>
</ul>
</li>
<li>Vue Router v4.x overview
<ul>
<li>breaking changes</li>
</ul>
</li>
<li>Portfolio Project Migration
<ul>
<li>Clone the Repo</li>
<li>Update CDN scripts</li>
<li>Update Vue instance</li>
<li>Update Vue Router instance</li>
</ul>
</li>
</ul>
<p>Here's the video version of this article if you want to follow along there:</p>
<p>Watching the video will help you reinforce your learning while reading the steps below. Here you can find the final <a href="https://bitbucket.org/fbhood/advanced-vuejs/src/master/">repository</a> for the project.</p>
<h2 id="vuev3xoverview">Vue v3.x Overview</h2>
<p>Vue 3 introduces a few new features and a bunch of breaking changes. Let's see how these changes will affect our application and consider them before migrating.</p>
<h3 id="vuev3xbreakingchanges">Vue V3.x Breaking Changes</h3>
<p>In Vue 3 the breaking changes basically fall into seven categories:</p>
<ul>
<li>Global API<br>
(responsible for how Vue behaves) - it's highly likely that you want to look at these changes.</li>
<li>Template Directives<br>
(Changes made to how v- directives work) - it's highly likely that you want to look at these changes.</li>
<li>Components<br>
(Changes to how components work) - if your application uses components it's highly likely that you want to look at these changes</li>
<li>Render Function (Lets you create HTML elements programmatically)</li>
<li>Custom Elements (Tells Vue about the creation of custom HTML elements)</li>
<li>Minor Changes (These might not affect you, but you'll still want to look into these)</li>
<li>Removed APIs (Things that are no longer available in Vue 3)</li>
</ul>
<p>Among all the changes there are some of them that any application will use, like the Global API and components. So you will need to take them into account if you want to start using the new Vue release.</p>
<p>And it's worth mentioning the following additional changes:</p>
<ul>
<li>The way you create Vue Applications and Component Instances has changed (Global API)</li>
<li>You should always declare the data option as a function (minor change)</li>
<li>Change of precedence when using v-if and v-for on the same element (template Ddrectives)</li>
<li>You should declare an emits option for component events (components)</li>
</ul>
<p>For a complete list of changes, you can head over to the <a href="https://v3.vuejs.org/guide/migration/introduction.html#breaking-changes">documentation</a></p>
<p>Let's look at some of these changes in more detail now.</p>
<h3 id="howtocreateapplicationandcomponentinstancesinvue3">How to Create Application and Component Instances in Vue 3</h3>
<p>In Vue 3 the way you create an app has changed. The Vue app now uses the new <code>.createApp()</code> method to create application instances.</p>
<p>The Vue application is now considered a root component, so the way you define its data options has changed as well.</p>
<p>The HTML root element hasn't changed, so inside an index.html file, you will still see something like this:</p>
<pre><code class="language-html">&lt;div id="app"&gt;&lt;/div&gt;
</code></pre>
<p>Inside the JavaScript file, there is an important change you need to understand: You will no longer use <code>new Vue()</code> to create a new app instance but instead you'll use a new method called <code>createApp()</code>:</p>
<pre><code class="language-js">
// Vue 3 syntax
const app = Vue.createApp({
// options object
})
app.mounth('#app') // Vue Instance - Root component
// Vue 2 syntax
const app = new Vue({
// options object
el: '#app'
})
</code></pre>
<h3 id="howtodefineacomponentinvue3">How to Define a Component in Vue 3</h3>
<p>To define a component in Vue 3, you no longer use <code>Vue.component()</code>. Instead you now use the application root component, like so:</p>
<pre><code class="language-js">/* Vue 3 syntax */
const app = Vue.createApp({
// options here
})
app.component('componenet-name', {
// component code here
})
/* Vue 2 syntax*/
Vue.component('component-name', {
// component code here
})
</code></pre>
<h3 id="howtousethedataoptionsobjectinvue3">How to Use the Data Options Object in Vue 3</h3>
<p>Given that the main app instance is now considered a root component, you can no longer specify the data property as an object. Instead, you need to define it as a function that returns an object like you usually do in components.</p>
<pre><code class="language-js">// Vue 3
const app = Vue.createApp({
// options object
data(){
return {
message: 'hi there'
}
}
})
app.mounth('#app') // Vue Instance - Root component
// Vue 2 syntax
const app = new Vue({
// options object
el: '#app'
data: {
message: 'hi there'
}
})
</code></pre>
<h3 id="changeofprecedenceforvifvforinvue3">Change of Precedence for v-if/v-for in Vue 3</h3>
<p>In Vue 2 if you used both directives on the same element, the v-for directive would take precedence over v-if. But in Vue 3 v-if always takes precedence.</p>
<p>However, using both directives isn't a great idea. Make sure to visit the documentation <a href="https://v3.vuejs.org/guide/migration/v-if-v-for.html#overview">here</a> to learn more.</p>
<h3 id="howtousetheemitspropertyoncomponenteventsinvue3breakingchangenewfeature">How to Use the Emits Property on Component Events in Vue 3 (breaking change/new feature)</h3>
<p>Similar to the <code>props</code> property, now in Vue 3 there is also an <code>emits</code> property that a component can use to declare the events that it can emit to the parent component.</p>
<p>I strongly recommend using this property to avoid emitting events twice in components that need to re-emit native events, like a click event.</p>
<p>Here is an example from the official documentation:</p>
<pre><code class="language-js">&lt;template&gt;
&lt;div&gt;
&lt;p&gt;{{ text }}&lt;/p&gt;
&lt;button v-on:click="$emit('accepted')"&gt;OK&lt;/button&gt;
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
props: ['text'],
emits: ['accepted']
}
&lt;/script&gt;
</code></pre>
<p>The emits property can also accept an object.</p>
<p>I won't go in-depth into this just yet, but I'll tackle each of the features/changes in a dedicated video series sooner or later, I promise.</p>
<h2 id="vuerouterv4xoverview">Vue Router v4.x Overview</h2>
<p>With the new release of Vue.js, we also have a new version of Vue Router. The new release v4.x has some breaking changes that you'll need to consider if you want to migrate a project to the new Vue release.</p>
<h3 id="vuerouterv4breakingchanges">Vue Router V4 Breaking Changes</h3>
<p>Two breaking changes are especially worth mentioning, since they are at the base of a Vue Router application. You will need to know about them to migrate your application later.</p>
<ul>
<li>The Vue Router instance has changed</li>
<li>Theres a new history option</li>
</ul>
<p>The full list of changes is available <a href="https://next.router.vuejs.org/guide/migration/index.html">here</a>.</p>
<p>Let's look at these two changes in depth.</p>
<h3 id="thevuerouter4instancehaschanged">The Vue Router 4 Instance Has Changed</h3>
<p>To create a new Vue Router instance, you no longer use the VueRuter function constructor.</p>
<p>Here is the Vue Router v.3x <a href="https://router.vuejs.org/guide/#javascript">documentation</a> so you can compare.</p>
<p>The code changes from this:</p>
<pre><code class="language-js">// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
routes // short for `routes: routes`
})
// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
router
}).$mount('#app')
</code></pre>
<p>To this:</p>
<pre><code class="language-js">// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
history: VueRouter.createWebHashHistory(), // &lt;-- this is a new property and it is mandatory!
routes, // short for `routes: routes`
})
// 5. Create and mount the root instance.
const app = Vue.createApp({})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)
app.mount('#app')
</code></pre>
<p>In the code above, to create a new Vue router instance you now have to use the VueRouter object and call the <code>createRouter()</code> method.</p>
<p>Also, the new history property is mandatory – <code>history: VueRouter.createWebHashHistory()</code>. You must define it or you will get a console error.</p>
<p>Next, you'll create the Vue instance using the <code>createApp()</code> method and use the variable <code>app</code> to call the <code>.use()</code> method. You pass the router instance there that you created in the previous step.</p>
<p>Finally, you can mount the root DOM element on the app instance using <code>app.mount('#app')</code>.</p>
<p>You can read the Vue router v4.x <a href="https://next.router.vuejs.org/guide/#javascript">documentation</a> for more details.</p>
<h2 id="howtomigrateaportfolioprojectfromvue2tovue3">How to Migrate a Portfolio Project from Vue 2 to Vue 3</h2>
<p>You can see how to do this in the video on <a href="https://youtu.be/5y8-fKSY_Lg">YouTube</a> if you'd like to follow along.</p>
<p>Considering all the above, and after a careful review of the breaking changes, let's try to upgrade one of our projects my Vue course. I'll use the Portfolio, the final project of the course.</p>
<p>We'll need to:</p>
<ul>
<li>Clone the repo</li>
<li>Update the CDN scripts</li>
<li>Update the Vue instance</li>
<li>Update the Vue Router instance</li>
</ul>
<p>To migrate our app to Vue 3 we will definitely need to update the following:</p>
<ul>
<li>Vue Application instance</li>
<li>Vue-Router instance</li>
<li>CDN Links</li>
</ul>
<p>Let's take it step by step.</p>
<h3 id="clonetheprojectrepository">Clone the Project Repository</h3>
<p>First, make sure you clone the repo inside the current folder:</p>
<pre><code class="language-sh">git clone https://bitbucket.org/fbhood/vue-folio/src/master/ vue-folio
</code></pre>
<p>Since our project still uses the CDN, the next step is to update its links.</p>
<h3 id="updatetheprojectscdn">Update the Project's CDN</h3>
<p>In our project we're using both the Vue CDN and the Vue Router CDN, so let's update them both.</p>
<p>Open the index.html file and replace this:</p>
<pre><code class="language-html">    &lt;!-- VueJS 3 production version --&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue@2.6.12"&gt;&lt;/script&gt;
&lt;!-- Vue Router --&gt;
&lt;script src="https://unpkg.com/vue-router@2.0.0/dist/vue-router.js"&gt;&lt;/script&gt;
</code></pre>
<p>with this:</p>
<pre><code class="language-html">    &lt;!-- VueJS 3 --&gt;
&lt;script src="https://unpkg.com/vue@3"&gt;&lt;/script&gt;
&lt;!-- Vue Router --&gt;
&lt;script src="https://unpkg.com/vue-router@4"&gt;&lt;/script&gt;
</code></pre>
<h3 id="updatethecode">Update the Code</h3>
<p>Now if you open the project with the live server and open the inspector, you will notice that the application doesn't show up and there are two errors in the console. Both seem related to the Vue router:</p>
<pre><code class="language-js">You are running a development build of Vue.
Make sure to use the production build (*.prod.js) when deploying for production.
Uncaught TypeError: window.Vue.use is not a function
at vue-router.js:1832
at vue-router.js:9
at vue-router.js:10
Uncaught ReferenceError: VueRouter is not defined
at main.js:185
</code></pre>
<p>Vue router?! Why?</p>
<p>Well, remember that when Vue was rewritten, its libraries had to update their codebases, too. So don't forget those breaking changes related to Vue-router since our application uses it.</p>
<p>Let's first update the main Vue instance to use the new syntax. Then we will look at what changes we need to make so that Vue Router works.</p>
<p>Update this code inside the main.js file from this:</p>
<pre><code class="language-js">// create and mount the Vue instance
const app = new Vue({
router
}).$mount('#app')
</code></pre>
<p>to this:</p>
<pre><code class="language-js">// create and mount the Vue instance
const app = Vue.createApp({
router
})
app.mount('#app')
</code></pre>
<h3 id="vuerouter4changes">Vue Router 4 Changes</h3>
<p>Above we saw the new syntax to define the root Vue instance component. But now, since we are using the Vue router, we need to take into account its <a href="https://next.router.vuejs.org/guide/migration/index.html">breacking changes</a> too.</p>
<h4 id="thewayvuerouterisinstantiatedhaschanged">The way Vue Router is instantiated has changed</h4>
<p>It changed from this:</p>
<pre><code class="language-js">// create the router instance
const router = new VueRouter({
routes
})
</code></pre>
<p>to this:</p>
<pre><code class="language-js">// create the router instance
const router = VueRouter.createRouter({
// Provide the history implementation to use. We are using the hash history for simplicity here.
history: VueRouter.createWebHashHistory(),
routes, // short for `routes: routes`
})
</code></pre>
<p>The code above deals with two major changes: <code>new VueRouter()</code> has been replaced by <code>VueRouter.createRouter()</code>, and the new <code>history</code> option now replaces <code>mode</code>.</p>
<p>Visit the <a href="https://next.router.vuejs.org/guide/#html">documentation</a> for Vue Router 4 to find out more.</p>
<p>Finally, let's make our app aware that we are using Vue Router. If we injected the router instance in the Vue app, now we need to instruct it to use the Vue router, use the <code>.use()</code> method to do so, and pass to it the router instance.</p>
<p>Change from this:</p>
<pre><code class="language-js">// create and mount the Vue instance
const app = Vue.createApp({
router
})
app.mount('#app')
</code></pre>
<p>to this:</p>
<pre><code class="language-js">// create and mount the Vue instance
const app = Vue.createApp({})
app.use(router)
app.mount('#app')
</code></pre>
<p>And there you have it!</p>
<h2 id="conclusion">Conclusion</h2>
<p>It doesn't really matter how complex your Vue application is – if you want to migrate to a new major release you will still need to plan for it, read the release notes, and go over all the breaking changes to make sure that you understand what will break.</p>
<p>The more complex the application is and more carefully you should plan your migration.</p>
<p>For our simple application that's all there is to do. But it's not always like that. So get ready and plan in advance.</p>
<p>If you enjoyed this guide please share the article and remember to subscribe to my <a href="https://youtube.com/channel/UCTuFYi0pTsR9tOaO4qjV_pQ">YouTube channel</a>. Thanks for reading!</p>
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
