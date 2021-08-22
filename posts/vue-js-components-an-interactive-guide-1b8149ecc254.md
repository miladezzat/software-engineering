---
card: "https://cdn-media-1.freecodecamp.org/images/1*ieROYZuCX-w0p9V7UswJbQ.png"
tags: [JavaScript]
description: "In my previous tutorial we learned the basics of Vue.js: the "
author: "Milad E. Fahmy"
title: "Vue Components: An Interactive Vue JS Tutorial"
created: "2021-08-16T10:22:28+02:00"
modified: "2021-08-16T10:22:28+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-vuejs tag-web-development tag-tech tag-startup ">
<header class="post-full-header">
<h1 class="post-full-title">Vue Components: An Interactive Vue JS Tutorial</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*ieROYZuCX-w0p9V7UswJbQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*ieROYZuCX-w0p9V7UswJbQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*ieROYZuCX-w0p9V7UswJbQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*ieROYZuCX-w0p9V7UswJbQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*ieROYZuCX-w0p9V7UswJbQ.png" alt="Vue Components: An Interactive Vue JS Tutorial">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
template: '&lt;div&gt;A custom component!&lt;/div&gt;'
})
new Vue({
el: '#app'
})</code></pre><p>The <code>template key</code> is where you write your markup for that component. In the same object you’ll later add more functionalities. You create an <strong>instance</strong> of your component through adding <code>&lt;my-component&gt;&lt;/my-co</code>mponent&gt; in the HTML:</p><pre><code class="language-vue">&lt;div id="app"&gt;
&lt;my-component&gt;&lt;/my-component&gt;
props: ['message'],
template: `&lt;div&gt;{{ message }}&lt;/div&gt;`,
})</code></pre><p>Props will enable you to pass data into a component instance from the outside of that component. Or more correctly, pass the data down from a parent.</p><p>The <code>my-component</code> has one prop called <code>message</code>, which it’ll render out. The value of <code>message</code> will be defined when we create new instances of this component in the DOM. We can create as many <code>my-component</code>’s as we want, and give each of them different props. Thus we’ll be able to re-use our code.</p><p>To pass data down as the <code>message</code> prop, simply do the following:</p><pre><code class="language-vue">&lt;div id="app"&gt;
&lt;my-component message="Hello from Vue.js!"&gt;&lt;/my-component&gt;
&lt;/div&gt;</code></pre><p>Now, <strong>Hello from Vue.js!</strong> will be rendered on the page.</p><p>But this is still a very static solution, as we’ve hard coded the value of the prop in the HTML. A better solution would be to bind this value to a data source. Then we can change it how we want later on, like based upon user interactions or responses from API’s.</p><p>Let’s bind it to the data object on our Vue instance. First we’ll create the data object.</p><pre><code class="language-vue">var app = new Vue({
el: '#app',
data: {
msg: 'Hello from the Vue instance'
}
})</code></pre><p>To bind the prop in <code>my-component</code> to the <code>msg</code> in our Vue instance, we’ll use the <code>v-bind</code> directive we learned in the previous article:</p><pre><code class="language-vue">&lt;div id="app"&gt;
&lt;my-component v-bind:message="msg"&gt;&lt;/my-component&gt;
template: '&lt;div&gt; {{ message }} &lt;/div&gt;',
data: function() {
return {
message: 'Hello from Vue data!'
}
}
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
