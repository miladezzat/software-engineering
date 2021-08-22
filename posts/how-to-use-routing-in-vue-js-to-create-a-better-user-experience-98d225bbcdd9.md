---
card: "https://cdn-media-1.freecodecamp.org/images/1*ckpJ83fx62uqbRGUcaRrkw.jpeg"
tags: [JavaScript]
description: "Vue.js is a great JavaScript Framework created by Evan You. I"
author: "Milad E. Fahmy"
title: "How to use routing in Vue.js to create a better user experience"
created: "2021-08-16T11:41:35+02:00"
modified: "2021-08-16T11:41:35+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-vuejs tag-programming tag-technology tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to use routing in Vue.js to create a better user experience</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*ckpJ83fx62uqbRGUcaRrkw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*ckpJ83fx62uqbRGUcaRrkw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*ckpJ83fx62uqbRGUcaRrkw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*ckpJ83fx62uqbRGUcaRrkw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*ckpJ83fx62uqbRGUcaRrkw.jpeg" alt="How to use routing in Vue.js to create a better user experience">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
//
cd vue-router
//
&lt;div class="home"&gt;
&lt;h1&gt;Home&lt;/h1&gt;
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
name: 'home',
data () {
return {
msg: 'Welcome to Your Vue.js App'
}
}
}
&lt;/script&gt;
&lt;!-- Add "scoped" attribute to limit CSS to this component only --&gt;
&lt;style scoped&gt;
&lt;/style&gt;</code></pre><ul><li>Go to <code>index.js</code> inside the <strong>router</strong> folder and replace <code>HelloWorld</code> with <code>home</code>:</li></ul><pre><code class="language-vue">import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
Vue.use(Router)
export default new Router({
routes: [
{
path: '/',
name: 'home',
component: home
}
]
})</code></pre><p>The <code>App.vue</code> file should look like this:</p><pre><code class="language-vue">&lt;template&gt;
&lt;div id="app"&gt;
&lt;router-view/&gt;
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default {
name: 'App'
}
&lt;/script&gt;
&lt;style&gt;
#app {
}
&lt;div class="blog"&gt;
&lt;h1&gt;{{blog}}&lt;/h1&gt;
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default{
name:'blog',
data (){
return{
title:'Blog'
}
}
}
&lt;/script&gt;
&lt;style scoped&gt;
import blog from '@/components/blog'
import services from '@/components/services'
import contact from '@/components/contact'</code></pre><ul><li>Second import Vue and router module from <a href="https://router.vuejs.org" rel="noopener">vue-router</a> module:</li></ul><pre><code class="language-vue">import Vue from 'vue'
import Router from 'vue-router'
// use router
Vue.use(Router)</code></pre><p>If you have installed Vue with vue-cli, you will have the <a href="https://router.vuejs.org/" rel="noopener">vue-router</a> module imported by default.</p><ul><li>Finally, inside the router folder, we have to configure the routers to make them work. The router method takes an Array of objects which in turn takes each component’s properties:</li></ul><pre><code class="language-vue">export default new Router({
routes: [
{
path: '/',
name: 'home',
component: home
},
{
path: '/blog',
name: 'blog',
component: blog
},
{
path: '/services',
name: 'services',
component: services
},
{
path: '/contact',
name: 'contact',
component: contact
}
]
})</code></pre><ul><li><code>path</code> : the path of the component</li><li><code>name</code>: the name of the component</li><li><code>component</code> : the view of the component</li></ul><p>To make any component the default component, set slash(‘/’) to the path property:</p><pre><code class="language-vue">path:'/'</code></pre><p>In our example, we set the home page as the default page. Now, when you open the the project in the browser, the first page that will appear is the home page.</p><pre><code class="language-vue">{
path:'/',
name:'home',
component:home
&lt;router-link class="nav-link" to="/blog"&gt;Blog&lt;/router-link&gt;
&lt;/li&gt;
&lt;li class="nav-item"&gt;
&lt;router-link class="nav-link" to="/services"&gt;Services&lt;/router-link&gt;
&lt;/li&gt;
&lt;li class="nav-item"&gt;
&lt;router-link class="nav-link" to="/contact"&gt;contact&lt;/router-link&gt;
&lt;/li&gt;</code></pre><p>The router-link takes the <code>to='path'</code> attribute that takes the path of the component as a value.</p><h3 id="router-view">Router-view</h3><p>You will find the <code>&lt;router-vi</code>ew&gt; tag i<code>n the A</code>pp.vue file. It’s basically the view where the components are rendered. It’s like the main div that contains all the components, and it returns the component that match the current route. We will di<code>scuss rout</code>e-view in the next part when we use the animation transition .</p><h3 id="using-the-parameters-inside-the-routers">Using the parameters inside the routers</h3><p>At this point, we will use parameters to navigate to specific components. The parameters make the routing dynamic.</p><p>To work with parameters, we are gonna create a list of products and an array of data. When you click on the link of any product, it will take us to the page details through a parameter.</p><p>In this situation, we are not going to use a database or API to retrieve the products’ data. So what we have to do is create an Array of products that will act as a database.</p><p>Inside the <code>home.vue</code> component, put the Array within the data() method just like this:</p><pre><code class="language-vue">export default {
name: 'home',
data () {
return {
title: 'Home',
products:[
{
productTitle:"ABCN",
image       : require('../assets/images/product1.png'),
productId:1
},
{
productTitle:"KARMA",
image       : require('../assets/images/product2.png'),
productId:2
},
{
productTitle:"Tino",
image       : require('../assets/images/product3.png'),
productId:3
},
{
productTitle:"EFG",
image       : require('../assets/images/product4.png'),
productId:4
},
{
productTitle:"MLI",
image       : require('../assets/images/product5.png'),
productId:5
},
{
productTitle:"Banans",
image       : require('../assets/images/product6.png'),
productId:6
}
]
}
}
}</code></pre><p>Then fetch and loop into the Products Array using the <code>v-for</code> directive .</p><pre><code class="language-vue">&lt;div class="row"&gt;
&lt;div class="col-md-4 col-lg4" v-for="(data,index) in products" :key="index"&gt;
&lt;img :src="data.image" class="img-fluid"&gt;
&lt;h3&gt;{{data.productTitle}}&lt;/h3&gt;
&lt;/div&gt;
goTodetail() {
this.$router.push({name:'details'})
}</code></pre><p>If you click the title, it will return undefined because we haven’t created the details component yet. So let’s create one:</p><p><strong>details.vue</strong></p><pre><code class="language-vue">&lt;template&gt;
&lt;div class="details"&gt;
&lt;div class="container"&gt;
&lt;h1 class="text-primary text-center"&gt;{{title}}&lt;/h1&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default{
name:'details',
data(){
return{
title:"details"
}
}
}
{
productTitle:"ABCN",
image       : require('../assets/images/product1.png'),
productId:1
},
{
productTitle:"KARMA",
image       : require('../assets/images/product2.png'),
productId:2
},
{
productTitle:"Tino",
image       : require('../assets/images/product3.png'),
productId:3
},
{
productTitle:"EFG",
image       : require('../assets/images/product4.png'),
productId:4
},
{
productTitle:"MLI",
image       : require('../assets/images/product5.png'),
productId:5
},
{
productTitle:"Banans",
image       : require('../assets/images/product6.png'),
productId:6
}
]</code></pre><p>First we have to set the id to the goTodetail() method as a parameter:</p><pre><code>&lt;h3 @click="goTodetail(data.productId)" &gt;{{data.productTitle}}&lt;/h3&gt;</code></pre><p>Then add a second parameter to the router method.</p><p>The <code>$router</code> method takes two parameters: first, the <code>name</code> of the component we want to navigate to, and second, the <code>id</code> parameter (or any other parameter).</p><pre><code class="language-vue">this.$router.push({name:'details',params:{Pid:proId}})</code></pre><p>Add Pid as the parameter in <strong>index.js</strong> inside the <code>router</code> folder:</p><pre><code class="language-vue">{
path: '/details/:Pid',
name: 'details',
component: details
}</code></pre><p><strong>home.vue</strong></p><pre><code class="language-vue">methods:{
goTodetail(prodId) {
this.$router.push({name:'details',params:{Pid:proId}})
}
&lt;div v-if="proId == product.productId"&gt;
&lt;h1&gt;{{product.productTitle}}&lt;/h1&gt;
&lt;img :src="product.image" class="img-fluid"&gt;
&lt;/div&gt;
&lt;/div&gt;
///
export default{
name:'details',
data(){
return{
proId:this.$route.params.Pid,
title:"details"
}
&lt;div class="details"&gt;
&lt;div class="container"&gt;
&lt;div class="row"&gt;
&lt;div class="col-md-12" v-for="(product,index) in products" :key="index"&gt;
&lt;div v-if="proId == product.productId"&gt;
&lt;h1&gt;{{product.productTitle}}&lt;/h1&gt;
&lt;img :src="product.image" class="img-fluid"&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
export default{
name:'details',
data(){
return{
proId:this.$route.params.Pid,
title:"details",
products:[
{
productTitle:"ABCN",
image : require('../assets/images/product1.png'),
productId:1
},
{
productTitle:"KARMA",
image : require('../assets/images/product2.png'),
productId:2
},
{
productTitle:"Tino",
image : require('../assets/images/product3.png'),
productId:3
},
{
productTitle:"EFG",
image : require('../assets/images/product4.png'),
productId:4
},
{
productTitle:"MLI",
image : require('../assets/images/product5.png'),
productId:5
},
{
productTitle:"Banans",
image : require('../assets/images/product6.png'),
productId:6
}
]
}
}
}
&lt;router-view/&gt;
&lt;/transition&gt;</code></pre><p>To animate the transition of the component when it enters the view, add <code>enter-active</code><strong> </strong>to the name given to the transition tag. Then add<strong> </strong><code>leave-active</code><strong> </strong>and then give it the CSS transition properties just like this:</p><pre><code class="language-vue">.moveInUp-enter-active{
opacity: 0;
transition: opacity 1s ease-in;
}</code></pre><h4 id="using-css3-animation"><strong>Using CSS3 animation</strong></h4><p>Now we are gonna animate using @keyframes in CSS3.</p><p>When the component enters the view, add a fade effect to the view.</p><pre><code class="language-vue">.moveInUp-enter-active{
animation: fadeIn 1s ease-in;
}
@keyframes fadeIn{
0%{
opacity: 0;
}
50%{
opacity: 0.5;
}
100%{
opacity: 1;
}
animation: moveInUp .3s ease-in;
}
@keyframes moveInUp{
0%{
transform: translateY(0);
}
100%{
transform: translateY(-400px);
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
