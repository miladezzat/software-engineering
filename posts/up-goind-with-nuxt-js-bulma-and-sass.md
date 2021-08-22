---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca202740569d1a4ca51f3.jpg"
tags: [Vue]
description:" TL;DR: Overcome Nuxt.js, Bulma and Sass shenanigans with this"
author: "Milad E. Fahmy"
title: "Up & Going with Nuxt.js, Bulma and Sass"
created: "2021-08-15T19:33:33+02:00"
modified: "2021-08-15T19:33:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-vue tag-programming tag-freecodecamp tag-bulma tag-sass tag-javascript tag-100daysofcode tag-nuxtjs ">
<header class="post-full-header">
<h1 class="post-full-title">Up &amp; Going with Nuxt.js, Bulma and Sass</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca202740569d1a4ca51f3.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca202740569d1a4ca51f3.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca202740569d1a4ca51f3.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca202740569d1a4ca51f3.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca202740569d1a4ca51f3.jpg" alt="Up &amp; Going with Nuxt.js, Bulma and  Sass">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><strong>TL;DR: Overcome Nuxt.js, Bulma and Sass shenanigans with this quick article to help you start developing your next App in less than 10 minutes.</strong></p>
<p>Hi everyone ❤️! Few days ago I found myself struggling a bit to put <strong>Nuxt.js</strong>, <strong>Bulma</strong> and <strong>Sass</strong> to work correctly and the info I found on google didn't help too much. </p>
<p>Most of the configurations I found were not working, because they were outdated or didn't explain quite well how to do it. So I deep dived a little bit on this subject and decided to write an article to help you do the same in less than 10 minutes.</p>
<p>Let's have some fun and get our hands dirty while grokking a few concepts needed to do this.</p>
<h2 id="1-scaffolding-nuxt-js">1. Scaffolding Nuxt.js</h2>
<p></p>
<p>Nowadays, to get started quickly with Nuxt.js we use a scaffolding tool called <strong><a href="https://github.com/nuxt/create-nuxt-app">create-nuxt-app</a></strong>. Please make sure you have <strong><a href="https://www.npmjs.com/package/npx">npx</a></strong> installed on your machine.</p>
<p>Let's open a terminal and do: <code>npx create-nuxt-app nuxt-bulma-sass</code>, where <code>nuxt-bulma-sass</code> is the name of the project we're scaffolding for the purpose of this article.</p>
<p><strong>create-nuxt-app</strong> will ask you some questions before creating the scaffold. For the purpose of this article I've chosen the following setup:</p>
<figcaption>create-nuxt-app init questions</figcaption>
</figure>
<p>So, the next step will be to change directory into our project folder:</p>
<p><code>cd nuxt-bulma-sass</code></p>
<p>and launch the project with: <code>yarn run dev</code>. (you can also use npm if you like it)</p>
<p>At this point we have our project running:</p>
<p>And if we open our browser on localhost:3000 we'll be getting this screen:</p>
<figcaption>localhost:3000 pages/index.vue</figcaption>
</figure>
<p>So at this point we have the pages/index.vue on the screen, which is the first page to be rendered in your project by default.</p>
<p>Let's replace the content of this file by the following one:</p>
<p>If we inspect our page in the browser we see we got <strong>bulma</strong> installed because section is formatted according to it.</p>
<p>Easy peasy lemon squeezy.</p>
<p>Let's add a class and choose some colors:</p>
<p>What if we want to nest .<em>hello-nuxt</em> inside .<em>edo-theme</em>? We're going to need SASS to be able to do it.</p>
<h2 id="2-adding-sass">2. Adding Sass</h2>
<p></p>
<p>So, to add Sass to our project we'll need to stop our running app (Ctrl+c) and do the following:</p>
<p><code>yarn add node-sass sass-loader --dev</code></p>
<p>These are the two packages needed as dev-dependencies to be able to have Sass in our boilerplate.</p>
<p>Note that we're adding it as a dev dependency because we only need it while developing and at build time. After that <strong>Sass</strong> is transformed into <strong>CSS</strong> and we don't need it anymore.</p>
<p>Let's sneak peek my package.json for you to check it:</p>
<figcaption>package.json with sass added to the project</figcaption>
</figure>
<p>Okay everyone ❤️, at this point we're able to nest the classes we wanted to.</p>
<p>Let's run our boilerplate again: <code>yarn run dev</code> and do the tweaks needed ?</p>
<p>Noice! We already did a lot today! Go grab a coffee ☕, I'll wait for you here ?</p>
<p>Okay, let's abstract things a bit and create this file <em>~/assets/scss/main.scss</em> and put there some classes and variables:</p>
<figcaption>new ~/assets/scss/main.scss</figcaption>
</figure>
<p>Nice! It's working!</p>
<p>Now we have two problems: </p>
<ol>
<li>We need to import main.scss into each one of our pages/components, which is not nice. We want to import it only once and have it available in all our &lt;style&gt; "bags"</li>
<li>We can't use bulma sass variables (try to change the <strong>background-color</strong> from the .edo-theme class from <strong>$edo</strong> to <strong>$primary</strong>. We want to have bulma sass variables in order to override them and create new themes from there.</li>
</ol>
<p>So... what if we want to use <a href="https://bulma.io/documentation/overview/colors/">bulma sass variables</a>? </p>
<figcaption>bulma sass variables (colors doc)</figcaption>
</figure>
<h2 id="3-here-comes-the-hard-part-which-took-me-some-time-to-understand-">3. Here comes the hard part which took me some time to understand.</h2>
<p></p>
<p>Bulma is being imported in the create-nuxt-app scaffold. When you do <code>yarn run dev</code> there's this hidden .<strong>nuxt</strong> folder into your <strong>nuxt-bulma-sass</strong> folder.</p>
<p>If you take a look at App.js there:</p>
<p>You'll see that bulma is being imported from the node-modules when you launch dev environment.</p>
<figcaption>.nuxt/App.js</figcaption>
</figure>
<p>So, importing bulma while launching nuxt.js scaffold is not okay if we want to override bulma sass variables.</p>
<p>Don't despair, you don't have to throw your project away. Show must go on ?</p>
<h2 id="4-using-bulma-the-right-way">4. Using Bulma the right way ?</h2>
<p></p>
<p>How do we get bulma into our boilerplate the way we need? </p>
<p>Let's start by commenting out @nuxtjs/bulma from the <strong>nuxt.config.js</strong> modules section (keep it on the package.json because what it does there is install bulma, it would be the same, AFAIK, as doing <code>yarn add bulma</code>).</p>
<p>Stop your running environment and do <code>yarn run dev</code> again.</p>
<p>If you take a look into <em>./nuxt/App</em> you'll see that it's not importing bulma anymore.</p>
<p>So now what we have to do is to go to our main.scss file and import it in the last line of the file.</p>
<p><em>I've also imported bulma/sass/utilities/_all.sass </em>for us to have the sass variables with the colors there.</p>
<figcaption>/bulma/sass/utilities folder</figcaption>
</figure>
<p>Of course later you can improve it by only importing exactly what you need. But that's another story for another article ?</p>
<p>Well well, check your browser and see it working.</p>
<h2 id="5-yeah-it-s-working-baby-">5. Yeah! It's working baby!</h2>
<p></p>
<p><strong>Now the last problem!</strong> We don't want to import it into our &lt;style&gt; scaffold each time we want to use it. We want it to be available as a global anywhere in the boilerplate.</p>
<p>The solution for this is to import a package called <strong><a href="https://www.npmjs.com/package/@nuxtjs/style-resources">@nuxtjs/style-resources</a>.</strong> </p>
<p>This package allows you to share variables, mixins, function across all files. No more imports needed on your &lt;style&gt; tag of each component or page.</p>
<p>Just stop &nbsp;your dev environment and do:</p>
<p><code>yarn add @nuxjs/style-resources</code> &nbsp;Note: don't try to install it as a dev-dependency because it won't work correctly.</p>
<p>Also, open your nuxt.config.js file and add '@nuxtjs/style-resources' to your modules key/value.</p>
<p>You also need to add <em>styleResources. </em>Check how mine is after that ?</p>
<p>Do <code>yarn run dev</code> again and... no errors... but...</p>
<p><strong>CSS classes not being imported anymore.</strong></p>
<p><strong>FML</strong> ??‍?☠️</p>
<h2 id="6-last-tweak">6. Last tweak</h2>
<p></p>
<p><strong>What's happening here? </strong></p>
<p>So, from the point you import and use <em>@nuxt/style-resources</em> you can't import actual styles from the main.scss anymore just because they won't exist in the actual build.</p>
<p>So, to solve this problem:</p>
<p>Stop your running the boilerplate again and open your nuxt.config.js:</p>
<p>Add the main.scss path to the global css array, like this:</p>
<p>This way we make sure that global css styles are also imported into the scope of our templates.</p>
<p>From this point on of course you can establish an architectural pattern for your css files, create independent variable, functions and mixins files and compose stuff with some extra @imports.</p>
<p>In the styleResources object you have the option to include more files as you need them in your boilerplate.</p>
<p>Again, that's beyond the scope of this article which was to show you how to unblock from this tiny complexities that nuxt and its ecosystems introduce in our App's flow.</p>
<h2 id="hope-you-have-enjoyed-it-">Hope you have enjoyed it! ❤️</h2>
<h2 id="be-strong-and-code-on">Be Strong and Code On ?</h2>
<p></p>
<h2 id="7-last-but-not-least">7. Last but not least</h2>
<p></p>
<p>You can clone my repo and play around with it.</p>
<p><a href="https://github.com/evedes/nuxt-bulma-sass">https://github.com/evedes/nuxt-bulma-sass</a></p>
<p>Thank you very much <a href="https://twitter.com/ruiposse">@ruiposse</a> for reviewing this article and for mentoring me into the vue ecosystem. ❤️</p>
<h2 id="8-bibliography">8. Bibliography</h2>
<p></p>
<p>01. <a href="https://nuxtjs.org/">Nuxtjs.org</a></p>
<p>02. <a href="https://github.com/nuxt-community/style-resources-module">Nuxt Style Resources</a></p>
<p>03. <a href="https://bulma.io/">Bulma.io</a></p>
<p>04. Some hours around google getting frustrated and seeing people also frustrated with this ?</p>
<hr>
<p>Hey! I'm Edo, a frontend engineer dedicated to the JavaScript stack. Nowadays I work mostly with React, Vue and all the ecosystem around. </p>
<p>If you liked this article you can read more <a href="/news/author/evedes/">here</a>.</p>
<p></p>
<p></p>
<p></p>
<p> </p>
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
