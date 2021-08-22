---
card: "https://cdn-media-1.freecodecamp.org/images/1*Nv9ljDdFOhR9AklvsB1rXQ.png"
tags: [JavaScript]
description: "¡Hola! Bonjour. Ciao. 你好. Here is how you add internationaliz"
author: "Milad E. Fahmy"
title: "How to add Internationalization to a Vue Application"
created: "2021-08-16T11:35:12+02:00"
modified: "2021-08-16T11:35:12+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-software-development tag-software-engineering tag-vuejs tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">How to add Internationalization to a Vue Application</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*Nv9ljDdFOhR9AklvsB1rXQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*Nv9ljDdFOhR9AklvsB1rXQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*Nv9ljDdFOhR9AklvsB1rXQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*Nv9ljDdFOhR9AklvsB1rXQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*Nv9ljDdFOhR9AklvsB1rXQ.png" alt="How to add Internationalization to a Vue Application">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);</code></pre><p>Now Vue knows to use our internationalization plugin. Next step is to create the translations for every language we support. For demonstration purposes, I am going to add just two languages: English and Spanish. Once you understand how this works it is very easy to keep adding more and more languages to your application.</p><p>To add languages we have to create a message object. Objects in JavaScript are made up of key-value pairs. The keys for the messages object will be the languages that we support. Let’s create this using English and Spanish for our supported languages. Add the following code below the <code>Vue.use</code> line in the <code>i18n.js</code> file.</p><pre><code class="language-js">const messages = {
'en': {},
'es': {}
};</code></pre><p>Next, we have to create a new internationalization object and tell Vue to use it. After the messages object add the following code:</p><pre><code class="language-js">const i18n = new VueI18n({
locale: 'en', // set locale
fallbackLocale: 'es', // set fallback locale
messages, // set locale messages
});</code></pre><p>When we create our internationalization object we have to tell it the default locale that we will show initially. In case there is a problem showing this language we can set a fallback locale. Then we tell it the messages object that has our translations. The last line exports this object.</p><p>Vue needs to be told to use the internationalization. We do this in the <code>main.js</code> file. Open up the <code>main.js</code> file. Import our internationalization file with this command:</p><pre><code>import i18n from '@/plugins/i18n';</code></pre><blockquote>Note: if you are not familiar with using the @ in the import line, by default Vue knows that this points to the src directory. This allows you to avoid trying to do relative paths to the plugins directory.</blockquote><p>We have to tell Vue to use it so we add <code>i18n</code> to the Vue object. Here is what your <code>main.js</code> file should look like:</p><pre><code class="language-js">import Vue from 'vue';
import App from './App.vue';
import i18n from '@/plugins/i18n';
Vue.config.productionTip = false;
new Vue({
i18n,
render: h =&gt; h(App),
}).$mount('#app');</code></pre><h4 id="adding-international-translations">Adding International Translations</h4><p>Open up the <code>i18n.js</code> file. We are going to create our first translation. We will start with the phrase “Welcome to Your Vue.js App.” The translation for each language in the message object is an object.</p><p>Just a reminder that an object is a key-value pair. The key is what we will use and value is the translation of the phrase in that language.</p><p>So let me show you how this works with English. Update the file to include the following:</p><pre><code class="language-js">const messages = {
'en': {
welcomeMsg: 'Welcome to Your Vue.js App'
},
'es': {}
'en': {
welcomeMsg: 'Welcome to Your Vue.js App'
},
'es': {
welcomeMsg: 'Bienvenido a tu aplicación Vue.js'
}
};</code></pre><p>Now that we have this translation we need to replace the English text in our default application to use our internationalization text. Open up the <code>App.vue</code> file. In the template, it is passing a prop called <code>msg</code> to the HelloWorld component. We want to replace this text with our international text. For simplicity, I am going to remove this prop and place the text in the HelloWorld component.</p><p>Open the <code>HelloWorld</code> component. In the <code>h1</code> tag, the prop msg is being displayed. Let’s replace it with the following code:</p><pre><code class="language-vue">&lt;h1&gt;{{ $t('welcomeMsg') }}&lt;/h1&gt;</code></pre><p>The $t specifies we are using the internationalization plugin. The text we want to be displayed is the value of the welcomeMsg key in our message object. If you have your server stopped, you can start it with this command:</p><pre><code>npm run serve</code></pre><p>Then go to your browser and you will see the international text displayed.</p><h4 id="changing-languages">Changing Languages</h4><p>We want to be able to see the text change to Spanish if we set our local to be Spanish. The question is how do we do this? The simplest way is to provide a drop-down that shows the flags of the countries whose language support is provided in the application. Users can select their language which results in all text being rendered in that language. So we need a way to allow users to change languages.</p><p>To display the flags in a drop-down we could use a <code>.png</code> graphics file. That will clearly work. Let me show you a better way. The <code>vue-flag-icon</code> package provides a collection of all country flags in SVG. Let’s install it with this command:</p><pre><code>npm install vue-flag-icon --save</code></pre><p>Now that we have it installed we have to tell Vue to use it. Open up the main.js file. We have to import the package we just installed and tell Vue to use it. Your main.js file should look like this now:</p><pre><code class="language-vue">import Vue from 'vue';
import App from './App.vue';
import i18n from '@/plugins/i18n';
import FlagIcon from 'vue-flag-icon';
Vue.use(FlagIcon);
Vue.config.productionTip = false;
new Vue({
i18n,
render: h =&gt; h(App),
}).$mount('#app');</code></pre><p>Next, we need to create buttons for the user to select their language. Open up the <code>App.vue</code> component. We are going to show a button for both languages. The user can click on the button to show the text in their language.</p><p>In this demo, I am only supporting two languages. In a real-world app, you will probably be supporting many more languages. In that case, you would have an array of all the supported languages. Let’s do this now in our application so you can see how easy it is to transfer over to a bigger application.</p><p>We need to add data to our script. We will have an entry called <code>languages</code> which will be an array of objects. The object will contain a flag, language, and a title. This is what the data should look like:</p><pre><code class="language-vue">data() {
return {
languages: [
{ flag: 'us', language: 'en', title: 'English' },
{ flag: 'es', language: 'es', title: 'Español' }
]
};
}</code></pre><p>In our template, we need to create a button for each language in our <code>languages</code> array. We will use a <code>v-for</code> directive to loop over all the entries and create a button for each one. Here is the code you should add to the template before the <code>img</code>.</p><pre><code class="language-vue">&lt;div&gt;
&lt;button v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)"&gt;
&lt;flag :iso="entry.flag" v-bind:squared=false /&gt; {{entry.title}}
&lt;/button&gt;
&lt;/div&gt;</code></pre><p>In the code above we loop through all entries in the <code>languages</code> array. Inside the button, we display the countries flag and the title. When you run this initially we get the default styling for a button provided by your browser. Let’s style the button, so add the following CSS in the style section:</p><pre><code class="language-css">button {
padding: 15px;
border: 1px solid green;
font-size: 18px;
margin: 15px;
}</code></pre><p>I am providing padding around the text and putting a green border around the button. The font-size makes the text readable on the screen. The margin is there just to set space between the two buttons as well as some space between the buttons and the image.</p><p>When we created the button we told it to call a method <code>changeLocale</code> if a user clicks the button. This method will change the locale to the language on the button the user clicks. To change the locale we will first need to import our i18n plugin. You can import it with this command:</p><pre><code class="language-js">import i18n from '@/plugins/i18n';</code></pre><p>Now we can create our <code>changeLocale</code> method. Here is what it looks like:</p><pre><code class="language-js">methods: {
changeLocale(locale) {
i18n.locale = locale;
}
'en': {
welcomeMsg: 'Welcome to Your Vue.js App',
guide: 'For a guide and recipes on how to configure / customize this project,',
checkout: 'check out the',
plugins: 'Installed CLI Plugins',
links: 'Essential Links',
ecosystem: 'Ecosystem'
},
'es': {
welcomeMsg: 'Bienvenido a tu aplicación Vue.js',
guide: 'Para una guía y recetas sobre cómo configurar / personalizar este proyecto,',
checkout: 'revisar la',
plugins: 'Plugins de CLI instalados',
links: 'Enlaces esenciales',
ecosystem: 'Ecosistema'
}
};</code></pre><p>Now we need to update the HelloWorld component with these translations. Here is the translated template:</p><pre><code class="language-vue">&lt;template&gt;
&lt;div class="hello"&gt;
&lt;h1&gt;{{ $t('welcomeMsg') }}&lt;/h1&gt;
&lt;p&gt;
{{ $t('guide') }}&lt;br&gt;
{{ $t('checkout') }}
&lt;a href="https://cli.vuejs.org" target="_blank" rel="noopener"&gt;vue-cli documentation&lt;/a&gt;.
&lt;/p&gt;
&lt;h3&gt;{{ $t('plugins') }}&lt;/h3&gt;
&lt;ul&gt;
&lt;li&gt;&lt;a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank"
rel="noopener"&gt;babel&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank"
rel="noopener"&gt;eslint&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;h3&gt;{{ $t('links') }}&lt;/h3&gt;
&lt;ul&gt;
&lt;li&gt;&lt;a href="https://vuejs.org" target="_blank" rel="noopener"&gt;Core Docs&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="https://forum.vuejs.org" target="_blank" rel="noopener"&gt;Forum&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="https://chat.vuejs.org" target="_blank" rel="noopener"&gt;Community Chat&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="https://twitter.com/vuejs" target="_blank" rel="noopener"&gt;Twitter&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="https://news.vuejs.org" target="_blank" rel="noopener"&gt;News&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;h3&gt;{{ $t('ecosystem') }}&lt;/h3&gt;
&lt;ul&gt;
&lt;li&gt;&lt;a href="https://router.vuejs.org" target="_blank" rel="noopener"&gt;vue-router&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="https://vuex.vuejs.org" target="_blank" rel="noopener"&gt;vuex&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank"
rel="noopener"&gt;vue-devtools&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"&gt;vue-loader&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener"&gt;awesome-vue&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
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
