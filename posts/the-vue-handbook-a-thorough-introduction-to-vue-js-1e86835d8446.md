---
card: "https://cdn-media-1.freecodecamp.org/images/1*Nzc4LiAlVXl8ic9T6v31zw.jpeg"
tags: [JavaScript]
description: "Vue is a very popular JavaScript front-end framework, one tha"
author: "Milad E. Fahmy"
title: "The Vue Handbook: a thorough introduction to Vue.js"
created: "2021-08-16T11:41:05+02:00"
modified: "2021-08-16T11:41:05+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-vuejs tag-vuex tag-programming tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">The Vue Handbook: a thorough introduction to Vue.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Nzc4LiAlVXl8ic9T6v31zw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*Nzc4LiAlVXl8ic9T6v31zw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*Nzc4LiAlVXl8ic9T6v31zw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Nzc4LiAlVXl8ic9T6v31zw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Nzc4LiAlVXl8ic9T6v31zw.jpeg" alt="The Vue Handbook: a thorough introduction to Vue.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<blockquote>Get this post in PDF/ePub/MOBI format at <a href="https://vuehandbook.com" rel="noopener">vuehandbook.com</a></blockquote><p>Vue is a very popular JavaScript front-end framework, one that’s experiencing a huge amount of growth.</p><p>It is simple, tiny (~24KB), and very performant. It feels different from all the other JavaScript front-end frameworks and view libraries. Let’s find out why.</p><h3 id="first-what-is-a-javascript-front-end-framework">First, what is a JavaScript front-end framework?</h3><p>If you’re unsure what a JavaScript framework is, Vue is the perfect first encounter with one.</p><p>A JavaScript framework helps us to create modern applications. Modern JavaScript applications are mostly used on the Web, but also power a lot of Desktop and Mobile applications.</p><p>Until the early 2000s, browsers didn’t have the capabilities they have now. They were a lot less powerful, and building complex applications inside them was not feasible performance-wise. The tooling was not even something that people thought about.</p><p>Everything changed when Google unveiled <a href="https://www.google.com/maps" rel="noopener">Google Maps</a> and <a href="https://www.google.com/gmail" rel="noopener">GMail</a>, two applications that ran inside the browser. <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started" rel="noopener">Ajax</a> made asynchronous network requests possible. Over time, developers started building on top of the Web platform, while engineers worked on the platform itself — browsers, the Web standards, the browser APIs, and the JavaScript language.</p><p>Libraries like <a href="https://jquery.com/" rel="noopener">jQuery</a> and <a href="https://mootools.net/" rel="noopener">Mootools</a> were the first big projects that built upon JavaScript and were hugely popular for a while. They basically provided a nicer API to interact with the browser and provided workarounds for bugs and inconsistencies among the various browsers.</p><p>Frameworks like <a href="http://backbonejs.org/" rel="noopener">Backbone</a>, <a href="https://www.emberjs.com/" rel="noopener">Ember</a>, <a href="http://knockoutjs.com/" rel="noopener">Knockout</a>, and <a href="https://angularjs.org/" rel="noopener">AngularJS</a> were the first wave of modern JavaScript frameworks.</p><p>The second wave, which is the current one, has <a href="https://reactjs.org/" rel="noopener">React</a>, <a href="https://angular.io/" rel="noopener">Angular</a>, and <a href="https://vuejs.org/" rel="noopener">Vue</a> as its main actors.</p><p>Note that jQuery, Ember and the other projects I mentioned are still being heavily used, actively maintained, and millions of websites rely on them.</p><p>That said, techniques and tools evolve, and as a JavaScript developer, you’re now likely to be required to know React, Angular or Vue rather than those older frameworks.</p><p>Frameworks abstract the interaction with the browser and the DOM. Instead of manipulating elements by referencing them in the DOM, we <a href="https://en.wikipedia.org/wiki/Declarative_programming" rel="noopener">declaratively</a> define and interact with them, at a higher level.</p><p>Using a framework is like using the <a href="https://en.wikipedia.org/wiki/C_(programming_language)" rel="noopener">C programming language</a> instead of using the <a href="https://en.wikipedia.org/wiki/Assembly_language" rel="noopener">Assembly language</a> to write system programs. It’s like using a computer to write a document instead of using a typewriter. It’s like having a self-driving car instead of driving the car yourself.</p><p>Well, not that far, but you get the idea. Instead of using low-level APIs offered by the browser to manipulate elements, and building hugely complex systems to write an application, you use tools built by very smart people that make our life easier.</p><h3 id="the-popularity-of-vue">The popularity of Vue</h3><p>How popular is Vue.js?</p><p>Vue had:</p><ul><li>7,600 stars on GitHub in 2016</li><li>36,700 stars on GitHub in 2017</li></ul><p>and it has more than 100,000+ stars on GitHub, as of June 2018.</p><p>Its <a href="https://www.npmjs.com/" rel="noopener">npm</a> download count is growing every day, and now it’s at ~350,000 downloads per week.</p><p>I would say Vue is very popular, given those numbers.</p><p>In relative terms, it has approximately the same numbers of GitHub stars as React, which was born years before.</p><p>Numbers are not everything, of course. The impression I have of Vue is that developers <strong>love</strong> it.</p><p>A key point in time of the rise of Vue has been the adoption in the Laravel ecosystem, a hugely popular PHP web application framework. But since then it has become widespread among many other development communities.</p><h4 id="why-developers-love-vue">Why developers love Vue</h4><p>First, Vue is called a progressive framework.</p><p>This means that it adapts to the needs of the developer. Other frameworks require a complete buy-in from a developer or team and often want you to rewrite an existing application because they require some specific set of conventions. Vue happily lands inside your app with a simple <code>script</code> tag to start with, and it can grow along with your needs, spreading from 3 lines to managing your entire view layer.</p><p>You don’t need to know about <a href="https://webpack.js.org/" rel="noopener">webpack</a>, <a href="https://babeljs.io/" rel="noopener">Babel</a>, npm or anything to get started with Vue. But when you’re ready, Vue makes it simple for you to rely on them.</p><p>This is one great selling point, especially in the current ecosystem of JavaScript front-end frameworks and libraries that tend to alienate newcomers and also experienced developers that feel lost in the ocean of possibilities and choices.</p><p>Vue.js is probably the most approachable front-end framework around. Some people call Vue the <strong>new jQuery</strong>, because it easily gets in the application via a script tag, and gradually gains space from there. Think of it as a compliment, since jQuery dominated the Web in the past few years, and it still does its job on a huge number of sites.</p><p>Vue was built by picking the best ideas of frameworks like Angular, React and Knockout, and by cherry-picking the best choices those frameworks made. And by excluding some less brilliant ones, it kind of started as a “best-of” set and grew from there.</p><h4 id="where-does-vue-js-position-itself-in-the-frameworks-landscape">Where does Vue.js position itself in the frameworks landscape?</h4><p>The two elephants in the room, when talking about web development, are React and Angular. How does Vue position itself relative to those two big and popular frameworks?</p><p>Vue was created by Evan You when he was working at Google on AngularJS (Angular 1.0) apps. It was born out of a need to create more performant applications. Vue picked some of the Angular templating syntax, but removed the opinionated, complex stack that Angular required, and made it very performant.</p><p>The new Angular (Angular 2.0) also solved many of the AngularJS issues, but in very different ways. It also requires a buy-in to <a href="https://www.typescriptlang.org/" rel="noopener">TypeScript</a> which not all developers enjoy using (or want to learn).</p><p>What about React? Vue took many good ideas from React, most importantly the Virtual DOM. But Vue implements it with some sort of automatic dependency management. This tracks which components are affected by a change of the state so that only those components are re-rendered when that state property changes.</p><p>In React, on the other hand, when a part of the state that affects a component changes, the component will be re-rendered. By default all its children will be re-rendered as well. To avoid this you need to use the <code>shouldComponentUpdate</code> method of each component and determine if that component should be re-rendered. This gives Vue a bit of an advantage in terms of ease of use, and out of the box performance gains.</p><p>One big difference with React is <a href="https://reactjs.org/docs/introducing-jsx.html" rel="noopener">JSX</a>. While you can technically use JSX in Vue, it’s not a popular approach and instead the <a href="https://vuejs.org/v2/guide/syntax.html" rel="noopener">templating system</a> is used. Any HTML file is a valid Vue template. JSX is very different than HTML, and has a learning curve for people on the team that might only need to work with the HTML part of the app, like designers.</p><p>Vue templates are very similar to <a href="http://mustache.github.io/" rel="noopener">Mustache</a> and <a href="https://handlebarsjs.com/" rel="noopener">Handlebars</a> (although they differ in terms of flexibility). As such, they are more familiar to developers that already used frameworks like Angular and Ember.</p><p>The official state management library, <a href="https://vuex.vuejs.org/" rel="noopener">Vuex</a>, follows the Flux architecture and is somewhat similar to <a href="https://redux.js.org/" rel="noopener">Redux</a> in its concepts. Again, this is part of the positive things about Vue, which saw this good pattern in React and borrowed it for its ecosystem. And while you can use Redux with Vue, Vuex is specifically tailored for Vue and its inner workings.</p><p>Vue is flexible, but the fact that the core team maintains two packages that are very important for any web app (like routing and state management) makes it a lot less fragmented than React. For example: <code>vue-router</code> and <code>vuex</code> are key to the success of Vue.</p><p>You don't need to choose or worry if that library you chose is going to be maintained in the future and will keep up with framework updates. Since they are official, they are the canonical go-to libraries for their niche (but you can choose to use what you like, of course).</p><p>One thing that puts Vue in a different bucket compared to React and Angular is that Vue is an <strong>indie</strong> project: it’s not backed by a huge corporation like Facebook or Google.</p><p>Instead, it’s completely backed by the community, which fosters development through donations and sponsors. This makes sure the roadmap of Vue is not driven by a single company’s agenda.</p><h3 id="your-first-vue-app">Your first Vue App</h3><p>If you’ve never created a Vue.js application, I am going to guide you through the task of creating one so that you understand how it works.</p><h4 id="first-example">First example</h4><p>First I’ll go through the most basic example of using Vue.</p><p>You create an HTML file which contains:</p><pre><code class="language-html">&lt;html&gt;
&lt;body&gt;
&lt;div id="example"&gt;
&lt;p&gt;{{ hello }}&lt;/p&gt;
&lt;/div&gt;
&lt;script src="https://unpkg.com/vue"&gt;&lt;/script&gt;
&lt;script&gt;
new Vue({
el: '#example',
data: { hello: 'Hello World!' }
})
&lt;/script&gt;
&lt;/body&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta charset="utf-8"&gt;
&lt;meta name="viewport" content="width=device-width,initial-scale=1.0"&gt;
&lt;title&gt;CodeSandbox Vue&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="app"&gt;&lt;/div&gt;
&lt;!-- built files will be auto injected --&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre><h4 id="src-main-js"><code>src/main.js</code></h4><p>This is the main JavaScript file that drives our app.</p><p>We first import the Vue library and the App component from <code>App.vue</code>.</p><p>We set <code>productionTip</code> to <code>false</code>, to avoid Vue outputting a “you’re in development mode” tip in the console.</p><p>Next, we create the Vue instance, by assigning it to the DOM element identified by <code>#app</code>, which we defined in <code>index.html</code>, and we tell it to use the App component.</p><pre><code class="language-js">// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
el: '#app',
components: { App },
template: '&lt;App/&gt;'
})</code></pre><h4 id="src-app-vue"><code>src/App.vue</code></h4><p><code>App.vue</code> is a Single File Component. It contains three chunks of code: HTML, CSS, and JavaScript.</p><p>This might seem weird at first, but Single File Components are a great way to create self-contained components that have all they need in a single file.</p><p>We have the markup, the JavaScript that is going to interact with it, and style that’s applied to it, which can be scoped or not. In this case, it’s not scoped, and it’s just outputting that CSS which is applied like regular CSS to the page.</p><p>The interesting part lies in the <code>script</code> tag.</p><p>We import a component from the <code>components/HelloWorld.vue</code> file, which we'll describe later.</p><p>This component is going to be referenced in our component. It’s a dependency. We are going to output this code</p><pre><code class="language-html">&lt;div id="app"&gt;
&lt;img width="25%" src="./assets/logo.png"&gt;
&lt;HelloWorld/&gt;
&lt;/div&gt;</code></pre><p>from this component, which you see references the <code>HelloWorld</code> component. Vue will automatically insert that component inside this placeholder.</p><pre><code class="language-html">&lt;template&gt;
&lt;div id="app"&gt;
&lt;img width="25%" src="./assets/logo.png"&gt;
&lt;HelloWorld/&gt;
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
import HelloWorld from './components/HelloWorld'
export default {
name: 'App',
components: {
HelloWorld
}
}
&lt;/script&gt;
&lt;style&gt;
#app {
font-family: 'Avenir', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}
&lt;/style&gt;</code></pre><h4 id="src-components-helloworld-vue"><code>src/components/HelloWorld.vue</code></h4><p>Here’s the <code>HelloWorld</code> component, which is included by the App component.</p><p>This component outputs a set of links, along with a message.</p><p>Remember above we talked about CSS in App.vue, which was not scoped? The <code>HelloWorld</code> component has scoped CSS.</p><p>You can easily determine it by looking at the <code>style</code> tag. If it has the <code>scoped</code> attribute, then it's scoped: <code>&lt;style scop</code>ed&gt;</p><p>This means that the generated CSS will be targeting the component uniquely, via a class that’s applied by Vue transparently. You don’t need to worry about this, and you know the CSS won’t <strong>leak</strong> to other parts of the page.</p><p>The message the component outputs is stored in the <code>data</code> property of the Vue instance, and outputted in the template as <code>{{ msg }}</code>.</p><p>Anything that’s stored in <code>data</code> is reachable directly in the template via its own name. We didn't need to say <code>data.msg</code>, just <code>msg</code>.</p><pre><code class="language-html">&lt;template&gt;
&lt;div class="hello"&gt;
&lt;h1&gt;{{ msg }}&lt;/h1&gt;
&lt;h2&gt;Essential Links&lt;/h2&gt;
&lt;ul&gt;
&lt;li&gt;
&lt;a
href="https://vuejs.org"
target="_blank"
&gt;
Core Docs
&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a
href="https://forum.vuejs.org"
target="_blank"
&gt;
Forum
&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a
href="https://chat.vuejs.org"
target="_blank"
&gt;
Community Chat
&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a
href="https://twitter.com/vuejs"
target="_blank"
&gt;
Twitter
&lt;/a&gt;
&lt;/li&gt;
&lt;br&gt;
&lt;li&gt;
&lt;a
href="http://vuejs-templates.github.io/webpack/"
target="_blank"
&gt;
Docs for This Template
&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;h2&gt;Ecosystem&lt;/h2&gt;
&lt;ul&gt;
&lt;li&gt;
&lt;a
href="http://router.vuejs.org/"
target="_blank"
&gt;
vue-router
&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a
href="http://vuex.vuejs.org/"
target="_blank"
&gt;
vuex
&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a
href="http://vue-loader.vuejs.org/"
target="_blank"
&gt;
vue-loader
&lt;/a&gt;
&lt;/li&gt;
&lt;li&gt;
&lt;a
href="https://github.com/vuejs/awesome-vue"
target="_blank"
&gt;
awesome-vue
&lt;/a&gt;
&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
name: 'HelloWorld',
data() {
return {
msg: 'Welcome to Your Vue.js App'
}
}
}
&lt;/script&gt;
&lt;!-- Add "scoped" attribute to limit CSS to this component only --&gt;
&lt;style scoped&gt;
h1,
h2 {
font-weight: normal;
}
ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
}
a {
color: #42b983;
}
"useTaobaoRegistry": false,
"packageManager": "yarn",
"presets": {
"favourite": {
"useConfigFiles": true,
"plugins": {
"@vue/cli-plugin-babel": {},
"@vue/cli-plugin-eslint": {
"config": "prettier",
"lintOn": [
"save"
]
},
"@vue/cli-plugin-unit-jest": {}
},
"router": true,
"vuex": true
}
}
}</code></pre><h4 id="plugins">Plugins</h4><p>As you can see from reading the configuration, a preset is basically a collection of plugins, with some optional configuration.</p><p>Once a project is created, you can add more plugins by using <code>vue add</code>:</p><pre><code>vue add @vue/cli-plugin-babel</code></pre><p>All those plugins are used in the latest version available. You can force Vue CLI to use a specific version by passing the version property:</p><pre><code class="language-json">"@vue/cli-plugin-eslint": {
"version": "^3.0.0"
data: {
name: 'Flavio'
},
template: '&lt;span&gt;Hello!&lt;/span&gt;'
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
