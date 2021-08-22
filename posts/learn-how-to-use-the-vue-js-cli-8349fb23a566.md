---
card: "https://cdn-media-1.freecodecamp.org/images/1*tAKfoNTaWdTFxxFgOlXHfg.png"
tags: [JavaScript]
description: One of them is the Vue Command Line Interface (CLI).
author: "Milad E. Fahmy"
title: "Learn how to use the Vue.js CLI"
created: "2021-08-15T19:44:56+02:00"
modified: "2021-08-15T19:44:56+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-vuejs tag-tech tag-programming tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">Learn how to use the Vue.js CLI</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*tAKfoNTaWdTFxxFgOlXHfg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*tAKfoNTaWdTFxxFgOlXHfg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*tAKfoNTaWdTFxxFgOlXHfg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*tAKfoNTaWdTFxxFgOlXHfg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*tAKfoNTaWdTFxxFgOlXHfg.png" alt="Learn how to use the Vue.js CLI">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<blockquote>Interested in learning Vue.js? Get my ebook at <a href="https://vuehandbook.com" rel="noopener">vuehandbook.com</a></blockquote>
<p>One of them is the Vue Command Line Interface (CLI).</p>
<p><strong>Note: There is a huge rework of the CLI going on right now, going from version 2 to 3. While not yet stable, I will describe version 3 because it’s a huge improvement over version 2, and quite different.</strong></p>
<h3 id="installation">Installation</h3>
<p>The Vue CLI is a command line utility, and you install it globally using npm:</p><pre><code>npm install -g @vue/cli</code></pre>
<p>or using yarn:</p><pre><code>yarn global add @vue/cli</code></pre>
<p>Once you do so, you can invoke the <code>vue</code> command.</p>
<h3 id="what-does-the-vue-cli-provide">What does the Vue CLI provide?</h3>
<p>The CLI is essential for rapid Vue.js development.</p>
<p>Its main goal is to make sure all the tools you need are working along, to perform what you need. It abstracts away all the nitty-gritty configuration details that using each tool in isolation would require.</p>
<p>It can perform an initial project setup and scaffolding.</p>
<p>It’s a flexible tool. Once you create a project with the CLI, you can go and tweak the configuration, without having to <strong>eject</strong> your application (like you’d do with <code>create-react-app</code>). You can configure anything and still be able to upgrade with ease.</p>
<p>After you create and configure the app, it acts as a runtime dependency tool, built on top of webpack.</p>
<p>The first encounter with the CLI is when creating a new Vue project.</p>
<h3 id="how-to-use-the-cli-to-create-a-new-vue-project">How to use the CLI to create a new Vue project</h3>
<p>The first thing you’re going to do with the CLI is to create a Vue app:</p><pre><code>vue create example</code></pre>
<p>The cool thing is that it’s an interactive process. You need to pick a preset. By default, there is one preset that’s providing Babel and ESLint integration:</p>
<p>I’m going to press the down arrow ⬇️ and manually choose the features I want:</p>
<p>Press <code>space</code> to on each feature you need, and then press <code>enter</code> to go on. Since I chose “Linter/Formatter”, Vue CLI prompts me for the configuration. I chose “ESLint + Prettier” since that’s my favorite setup:</p>
<p>The next step is choosing how to apply linting. I chose “Lint on save”.</p>
<p>Next up: testing. I picked testing, and Vue CLI offers me the two most popular solutions to choose from: “Mocha + Chai” vs “Jest”.</p>
<p>Vue CLI asks me where to put all the configuration. The choices are in the “package.json” file, or in dedicated configuration files, one for each tool. I chose the latter.</p>
<p>Next, Vue CLI asks me if I want to save these presets, and allows me to pick them as a choice the next time I use Vue CLI to create a new app. It’s a very convenient feature. Having a quick setup with all my preferences is a complexity reliever:</p>
<p>Vue CLI then asks me if I prefer using yarn or npm:</p>
<p>and it’s the last thing it asks me. It then it goes on to download the dependencies and create the Vue app:</p>
<h3 id="how-to-start-the-newly-created-vue-cli-application">How to start the newly created Vue CLI application</h3>
<p>Vue CLI has created the app for us, and we can go in the “example” folder and run <code>yarn serve</code> to start up our first app in development mode:</p>
<p>The starter example application source contains a few files, including “package.json”:</p>
<p>This is where all the CLI commands are defined, including <code>yarn serve</code>, which we used a minute ago. The other commands are</p>
<ul>
<li><code>yarn build</code>, to start a production build</li>
<li><code>yarn lint</code>, to run the linter</li>
<li><code>yarn test:unit</code>, to run the unit tests</li>
</ul>
<p>I will describe the sample application generated by Vue CLI in a separate tutorial.</p>
<h3 id="git-repository">Git repository</h3>
<p>Notice the <code>master</code> word in the lower-left corner of VS Code? That’s because Vue CLI automatically creates a repository, and makes a first commit. We can jump right in, change things, and we know what we changed:</p>
<p>This is pretty cool. How many times do you dive in and change things only to realize, when you want to commit the result, that you didn’t commit the initial state?</p>
<h3 id="use-a-preset-from-the-command-line">Use a preset from the command line</h3>
<p>You can skip the interactive panel and instruct Vue CLI to use a particular preset:</p><pre><code>vue create -p favourite example-2</code></pre>
<h3 id="where-presets-are-stored">Where presets are stored</h3>
<p>Presets are stored in the “.vuejs” file in your home directory. Here’s mine after creating the first “favourite” preset:</p><pre><code>{  "useTaobaoRegistry": false,  "packageManager": "yarn",  "presets": {    "favourite": {      "useConfigFiles": true,      "plugins": {        "@vue/cli-plugin-babel": {},        "@vue/cli-plugin-eslint": {          "config": "prettier",          "lintOn": [            "save"          ]        },        "@vue/cli-plugin-unit-jest": {}      },      "router": true,      "vuex": true    }  }}</code></pre>
<h3 id="plugins">Plugins</h3>
<p>As you can see from reading the configuration, a preset is basically a collection of plugins, with some optional configuration.</p>
<p>Once a project is created, you can add more plugins by using <code>vue add</code>:</p><pre><code>vue add @vue/cli-plugin-babel</code></pre>
<p>All those plugins are used at the latest version available. You can force Vue CLI to use a specific version by passing the version property:</p><pre><code>"@vue/cli-plugin-eslint": {  "version": "^3.0.0"}</code></pre>
<p>This is useful if a new version has breaking changes or a bug, and you need to wait a little bit before using it.</p>
<h3 id="remotely-store-presets">Remotely store presets</h3>
<p>A preset can be stored in GitHub (or on other services) by creating a repository that contains a “preset.json” file, which contains a single preset configuration.</p>
<p>Extracted from the above, I made a sample preset in <a href="https://github.com/flaviocopes/vue-cli-preset/blob/master/preset.json" rel="noopener">https://github.com/flaviocopes/vue-cli-preset/blob/master/preset.json</a> which contains this configuration:</p><pre><code>{  "useConfigFiles": true,  "plugins": {    "@vue/cli-plugin-babel": {},    "@vue/cli-plugin-eslint": {      "config": "prettier",      "lintOn": [        "save"      ]    },    "@vue/cli-plugin-unit-jest": {}  },  "router": true,  "vuex": true}</code></pre>
<p>It can be used to bootstrap a new application using:</p><pre><code>vue create --preset flaviocopes/vue-cli-preset example3</code></pre>
<h3 id="another-use-of-the-vue-cli-rapid-prototyping">Another use of the Vue CLI: rapid prototyping</h3>
<p>Until now, I’ve explained how to use the Vue CLI to create a new project from scratch, with all the bells and whistles. But for really quick prototyping, you can create a really simple Vue application — one that’s self-contained in a single .vue file — and serve that, without having to download all the dependencies in the <code>node_modules</code> folder.</p>
<p>How? First install the <code>cli-service-global</code> global package:</p><pre><code>npm install -g @vue/cli-service-global </code></pre><pre><code>//or yarn </code></pre><pre><code>global add @vue/cli-service-global</code></pre>
<p>Create an “app.vue” file:</p><pre><code>&lt;template&gt;    &lt;div&gt;        &lt;h2&gt;Hello world!&lt;/h2&gt;        &lt;marquee&gt;Heyyy&lt;;/marquee&gt;    &lt;/div&gt;&lt;/template&gt;</code></pre>
<p>and then run</p><pre><code>vue serve app.vue</code></pre>
<p>You can serve more organized projects, composed by JavaScript and HTML files as well. Vue CLI by default uses “main.js” / “index.js” as its entry point. You can have a “package.json” and any tool configuration set up. <code>vue serve</code> will pick it up.</p>
<p>Since this uses global dependencies, it’s not an optimal approach for anything more than demonstration or quick testing.</p>
<p>Running the <code>vue build</code> command will prepare the project for deployment, and generate the resulting JavaScript files in the <code>dist/</code> folder, so that it will be production-ready. All the warnings that Vue.js generates during development are removed, and the code is optimized for real-world usage.</p>
<h3 id="webpack">Webpack</h3>
<p>Internally, Vue CLI uses Webpack, but the configuration is abstracted and we don’t even see the config file in our folder. You can still access it by calling <code>vue inspect</code>:</p>
<blockquote>Interested in learning Vue.js? Get my ebook at <a href="https://vuehandbook.com" rel="noopener">vuehandbook.com</a></blockquote>
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
