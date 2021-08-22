---
card: "https://cdn-media-1.freecodecamp.org/images/1*S9ztlTg2A3gvRxPfUg3jTQ.png"
tags: [JavaScript]
description: "Vue.js is a JavaScript library for building user interfaces. "
author: "Milad E. Fahmy"
title: "Learn Vue: a 3-minute interactive Vue JS tutorial"
created: "2021-08-16T10:23:21+02:00"
modified: "2021-08-16T10:23:21+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development tag-programming tag-web-design tag-open-source ">
<header class="post-full-header">
<h1 class="post-full-title">Learn Vue: a 3-minute interactive Vue JS tutorial</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*S9ztlTg2A3gvRxPfUg3jTQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*S9ztlTg2A3gvRxPfUg3jTQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*S9ztlTg2A3gvRxPfUg3jTQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*S9ztlTg2A3gvRxPfUg3jTQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*S9ztlTg2A3gvRxPfUg3jTQ.png" alt="Learn Vue: a 3-minute interactive Vue JS tutorial">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Vue.js is a JavaScript library for building user interfaces. Last year, it started to become quite popular among web developers. It’s lightweight, relatively easy to learn, and powerful.</p><p>In the three minutes that Medium says it will take you to read this article, you’ll be equipped to start building basic Vue apps. With each segment, I’ve also included an interactive <a href="https://scrimba.com/p/pXKqta?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=vue_in_3_minutes">Scrimba</a> screencast, where you can watch me explain the concepts and play around with the code yourself.</p><p>Let’s jump into it.</p><h3 id="template-syntax-and-data">Template syntax and data</h3><p>At the core of Vue.js is a straightforward template syntax which looks like this:</p><pre><code class="language-vue">&lt;div id="myApp"&gt;
{{ message }}
&lt;/div&gt;
</code></pre><p>Pair that with the following JavaScript snippet:</p><pre><code class="language-js">var myApp = new Vue({
el: '#myApp',
data: {
message: 'Hello world!'
}
})
</code></pre><p>Here is a screencast which explains this exact concept:</p><h3 id="directives">Directives</h3><p>The next concept you’ll need to learn is directives. Directives are HTML attributes that are prefixed with <code>v-</code>, which indicates that they apply reactive behavior to the rendered DOM.</p><p>Let’s say we only want to render something if a condition is true, and hide it if it’s false. Then we’ll use <code>v-if</code>.</p><p>In the HTML, it looks like this.</p><pre><code class="language-vue">&lt;div id="app"&gt;
&lt;p v-if="seen"&gt;Now you see me&lt;/p&gt;
&lt;/div&gt;
</code></pre><p>And some JavaScript:</p><pre><code class="language-js">var app = new Vue({
el: '#app',
data: {
seen: true
}
})
</code></pre><p>This will result in rendering out the <em>Now you see me</em> paragraph if <code>seen</code> in <code>data</code> is <strong>true.</strong> To hide the paragraph, you can set <code>seen</code> to <strong>false,</strong> like this:</p><p><code>app.seen = false;</code></p><p>Here is a screencast explaining the same concept:</p><p>There are many other directives, like <code>v-for</code>, <code>v-on,</code> <code>v-bind</code> and <code>v-model</code>.</p><h3 id="handling-user-input">Handling user input</h3><p>Another core directive you need to learn is <code>v-on</code>. It will hook up an event listener to the DOM element, so that you can handle user input. You specify the type of event after the colon. So <code>v-on:click</code> will listen for clicks.</p><pre><code class="language-vue">&lt;div id="app"&gt;
&lt;button v-on:click="myClickHandler"&gt;Click me!&lt;/button&gt;
&lt;/div&gt;
</code></pre><p><code>myClickHandler</code> refers to the key with the same name in the <code>methods</code> object. Needless to say, that’s the object where you place your app’s methods. You can have as many methods as you want.</p><pre><code class="language-js">var app = new Vue({
el: '#app',
methods: {
myClickHandler: function () {
console.log('button clicked!');
}
}
})
</code></pre><p>This will result in <em>button clicked</em> being logged to the console when clicking the button.</p><p>Here is a screencast explaining the concept:</p><h3 id="tying-it-all-together">Tying it all together</h3><p>Now let’s create an example where we’re using both <code>data</code> and <code>methods</code>, tying together what we’ve learned up until now.</p><pre><code class="language-vue">&lt;div id="app"&gt;
&lt;p&gt;{{ message }}&lt;/p&gt;
&lt;button v-on:click="changeMessage"&gt;Click me!&lt;/button&gt;
&lt;/div&gt;
</code></pre><p>And the JavaScript:</p><pre><code class="language-js">var app = new Vue({
el: '#app',
data: {
message: 'Start message'
},
methods: {
changeMessage: function () {
this.message = 'The message has changed!'
}
}
})
</code></pre><p>Initially, it’ll display out <em>Start message</em> on the page, however after the click it’ll display <em>This message has changed</em> instead.</p><p>The <code>this</code> &nbsp;keyword refers to the Vue instance, the one we’ve called <code>app</code>. It is on this instance that our data lives, so we can refer to the <code>message</code> data through <code>this.message</code>.</p><p><a href="https://scrimba.com/p/playlist-38/cast-1933?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=vue_in_3_minutes">Check out this screencast explaining the concept.</a></p><p>And by that, you should know enough Vue.js to get started creating simple apps.</p><p>In the next tutorial, you’ll learn how to create Vue components. So be sure to follow this publication if you liked this article.</p>
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
