---
card: "https://cdn-media-1.freecodecamp.org/images/0*RqZwiPYCVDIz5bLA"
tags: [JavaScript]
description: "Are you interested in Front End Development?"
author: "Milad E. Fahmy"
title: "A quick introduction to Vue.js"
created: "2021-08-16T11:37:28+02:00"
modified: "2021-08-16T11:37:28+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-vuejs tag-web-development tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">A quick introduction to Vue.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*RqZwiPYCVDIz5bLA 300w,
https://cdn-media-1.freecodecamp.org/images/0*RqZwiPYCVDIz5bLA 600w,
https://cdn-media-1.freecodecamp.org/images/0*RqZwiPYCVDIz5bLA 1000w,
https://cdn-media-1.freecodecamp.org/images/0*RqZwiPYCVDIz5bLA 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*RqZwiPYCVDIz5bLA" alt="A quick introduction to Vue.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
.demo {
background-color: cyan;
}
&lt;/style&gt;</code></pre><p>This is basic CSS. The parameter <strong>scoped</strong> in <code>&lt;style scoped&gt;</code> means that the CSS applies to this component only.</p><h4 id="javascript">JavaScript</h4><pre><code class="language-html">&lt;script&gt;
export default {
name: 'First',
props: {
msg: String
}
}
&lt;/script&gt;</code></pre><p><strong>name</strong> parameter indicates the name of the component which is <strong>First</strong>.</p><p><strong>props</strong> parameter indicates the <strong>input</strong> to this component. Here we will have one input called as <strong>msg</strong> which is of type <strong>String.</strong></p><h4 id="html">HTML</h4><pre><code class="language-html">&lt;template&gt;
&lt;div class="demo"&gt;
&lt;h1&gt;{{ msg }}&lt;/h1&gt;
&lt;/div&gt;
&lt;/template&gt;</code></pre><p><code>{{msg}}</code> is the way in which the input parameter to the <strong>Vue</strong> Component can be accessed in the <strong>HTML</strong> code.</p><h4 id="complete-code-for-first-component">Complete Code for First Component</h4><p>This is the content of the file <strong>First.vue:</strong></p><pre><code class="language-html">&lt;template&gt;
&lt;div class="demo"&gt;
&lt;h1&gt;{{ msg }}&lt;/h1&gt;
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
name: 'First',
props: {
msg: String
}
}
&lt;/script&gt;
&lt;style scoped&gt;
.demo {
background-color: cyan;
}
&lt;div id="app"&gt;
&lt;img alt="Vue logo" src="./assets/logo.png"&gt;
&lt;First msg="First Component"/&gt;
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
import HelloWorld from './components/HelloWorld.vue'
import First from './components/First.vue'
export default {
name: 'app',
components: {
First
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
