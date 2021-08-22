---
card: "https://cdn-media-1.freecodecamp.org/images/1*CtOATbW-ewf3UHbrZVi7Iw.jpeg"
tags: [Development]
description: "Looking for a front-end framework to try out, I started with "
author: "Milad E. Fahmy"
title: "Common mistakes to avoid while working with Vue.js"
created: "2021-08-16T10:14:51+02:00"
modified: "2021-08-16T10:14:51+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-development tag-programming tag-tech tag-web-development tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">Common mistakes to avoid while working with Vue.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*CtOATbW-ewf3UHbrZVi7Iw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*CtOATbW-ewf3UHbrZVi7Iw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*CtOATbW-ewf3UHbrZVi7Iw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*CtOATbW-ewf3UHbrZVi7Iw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*CtOATbW-ewf3UHbrZVi7Iw.jpeg" alt="Common mistakes to avoid while working with Vue.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Looking for a front-end framework to try out, I started with React and then tried Vue.js.</p><p>Unfortunately<strong>, </strong>I encountered a lot of issues with Vue.js at the very beginning. In this article, I’d like to share a few common issues that you may have to deal with when working with Vue.js. Some of these issues may seem obvious, but I figured that sharing my experience might help someone.</p><h3 id="include-template-compiler">Include template compiler</h3><p>My first issue was a pretty basic one. The first thing to do in order to use Vue.js is to import it. If you follow the <a href="https://vuejs.org/v2/guide/#Composing-with-Components" rel="noopener">official guide</a> and use an inline template for your component, you will get a blank page.</p><pre><code class="language-js">import Vue from 'vue';
var vm = new Vue({
el: '#vm',
template: '&lt;div&gt;Hello World&lt;/div&gt;',
});</code></pre><p>Note that this issue doesn’t occur when you define templates with the render function or SFC (<a href="https://vuejs.org/v2/guide/single-file-components.html#ad" rel="noopener">Single File Component</a>).</p><p>Actually, there are many <a href="https://vuejs.org/v2/guide/installation.html#Explanation-of-Different-Builds" rel="noopener">Vue builds</a>. The default build exported by the NPM package is the <strong>runtime-only build</strong>. It doesn’t bring the template compiler.</p><p>For some background information, the template compiler works exactly like <a href="https://reactjs.org/docs/introducing-jsx.html" rel="noopener">JSX for React</a>. It replaces template strings with function calls to create a Virtual DOM node.</p><pre><code class="language-js">// #1: import full build in JavaScript file
import Vue from 'vue/dist/vue.js';
// OR #2: make an alias in webpack configuration
config.resolve: {
alias: { vue: 'vue/dist/vue.js' }
}
// OR #3: use render function directly
var vm = new Vue({
el: '#vm',
render: function(createElement) {
return createElement('div', 'Hello world');
}
});</code></pre><p>With SFCs, this issue does not occur. Both <strong>vue-loader</strong> and <strong>vueify </strong>are tools used to handle SFCs. They generates plain JavaScript components using the render function to define the template.</p><p>To use string templates in components, use a full Vue.js build.</p><p>In summary, to fix this issue, specify the correct build during import, or make an alias for Vue in your bundler configuration.</p><p>You should note that using string templates reduces your app performance, because the compilation occurs at runtime.</p><p>There are many more ways to define a component template, so <a href="https://vuejsdevelopers.com/2017/03/24/vue-js-component-templates/" rel="noopener">check out this article</a>. Also, I recommend using the <a href="https://vuejsdevelopers.com/2017/09/17/vue-js-avoid-dom-templates/" rel="noopener">render function in Vue instance</a>.</p><h3 id="keep-property-s-reactivity">Keep property’s reactivity</h3><p>If you use React, you probably know its reactivity relies on calling the <code>setState</code> function to update the value of properties.</p><p>Reactivity with Vue.js is a bit different. It’s based on proxying the component properties. <a href="https://vuejs.org/v2/guide/reactivity.html#How-Changes-Are-Tracked" rel="noopener">Getter and setter</a> functions will be overridden and will notify updates to the Virtual DOM.</p><pre><code class="language-js">var vm = new Vue({
el: '#vm',
template: `&lt;div&gt;{{ item.count }}&lt;input type="button" value="Click" @click="updateCount"/&gt;&lt;/div&gt;`,
data: {
item: {}
},
beforeMount () {
this.$data.item.count = 0;
},
methods: {
updateCount () {
// JavaScript object is updated but
// the component template is not rendered again
this.$data.item.count++;
}
}
});</code></pre><p>In the code snippet above, the Vue instance has a property called <code>item</code> (defined in data). This property contains an empty literal object.</p><p>During the component initialization, Vue creates a proxy under the <code>get</code> and <code>set</code> functions attached to the <code>item</code> property. Thus, the framework will watch value changes and eventually react.</p><p>However, the <code>count</code> property isn’t reactive, because it wasn’t declared at initialization time.</p><p>Actually, proxifying only occurs at component initialization time, and the<code>beforeMount</code> lifecycle function triggers later.</p><p>Besides, the <code>item</code> setter isn’t called during <code>count</code> definition. So the proxy won’t trigger and the <code>count</code> property will have no watch.</p><pre><code class="language-js">beforeMount () {
// #1: Call parent setter
// item setter is called so proxifying is propaged
this.$data.item = {
count: 0
};
// OR #2: explicitly ask for watching
// item.count got its getter and setter proxyfied
this.$set(this.$data.item, 'count', 0);
// "Short-hand" for:
Vue.set(this.$data.item, 'count', 0);
}</code></pre><p>If you keep the <code>item.count</code> affectation in <code>beforeMount</code>, calling <code>Vue.set</code> later won’t create a watch.</p><p>The exact same issue also occurs with arrays when using direct affection on unknown indexes. In such cases, you should prefer <a href="https://vuejs.org/v2/guide/list.html#Array-Change-Detection" rel="noopener">array proxifyed functions</a> such as <code>push</code> and <code>slice</code>.</p><p>Also, you can read <a href="https://vuejsdevelopers.com/2017/03/05/vue-js-reactivity/" rel="noopener">this article</a> from the Vue.js Developer’s website.</p><h3 id="be-careful-with-sfc-exports">Be careful with SFC exports</h3><p>You can use Vue regularly in JavaScript files, but you can also use <a href="https://vuejs.org/v2/guide/single-file-components.html#ad" rel="noopener">Single File Components</a>. It helps to gather JavaScript, HTML, and CSS code in a single file.</p><p>With SFCs, the component code is the script tag of a <code>.vue</code> file. Still written in JavaScript, it has to export the component.</p><p>There are many ways to export a variable/component. Often, we use either direct, named, or default exports. Named exports will prevent users from renaming the component. It will also be eligible for <a href="https://en.wikipedia.org/wiki/Tree_shaking" rel="noopener">tree-shaking</a>.</p><pre><code class="language-js">/* File: user.vue */
&lt;template&gt;
&lt;div&gt;{{ user.name }}&lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
const User = {
data: () =&gt; ({
user: {
name: 'John Doe'
}
})
};
export User; // Not work
export default User; // Works
&lt;/script&gt;
/* File: app.js */
import {User} from 'user.vue'; // Not work
import User from 'user.vue'; // Works (".vue" is required)</code></pre><p>Using named exports is not compatible with SFCs, be mindful about this!</p><p>In summary, exporting a named variable by default might be a good idea. This way, you will get more explicit debug messages.</p><h3 id="don-t-mix-sfc-components">Don’t mix SFC components</h3><p>Putting code, template, and style together is a good idea. Besides, depending on your constraints and opinions, you may want to keep the <a href="https://en.wikipedia.org/wiki/Separation_of_concerns" rel="noopener">separation of concerns</a>.</p><p>As described in the <a href="https://vuejs.org/v2/guide/single-file-components.html#What-About-Separation-of-Concerns" rel="noopener">Vue documentation</a>, it’s compatible with SFC.</p><p>Afterward, one idea came to my mind. Use the same JavaScript code and include it in different templates. You may point it as a bad practice, but it keeps things simple.</p><p>For instance, a component can have both read-only and read-write mode and keep the same implementation.</p><pre><code class="language-js">/* File: user.js */
const User = {
data: () =&gt; ({
user: {
name: 'John Doe'
}
})
};
export default User;
/* File: user-read-only.vue */
&lt;template&gt;&lt;div&gt;{{ user.name }}&lt;/div&gt;&lt;/template&gt;
&lt;script src="./user.js"&gt;&lt;/script&gt;
/* File: user-read-write.vue */
&lt;template&gt;&lt;input v-model="user.name"/&gt;&lt;/template&gt;
&lt;script src="./user.js"&gt;&lt;/script&gt;</code></pre><p>In this snippet, both read-only and read-write templates use the same JavaScript user component.</p><p>Once you import both components, you will figure out that it doesn’t work as expected.</p><pre><code class="language-js">// The last import wins
import UserReadWrite from './user-read-write.vue';
import UserReadOnly from './user-read-only.vue';
Vue.component('UserReadOnly', UserReadOnly);
Vue.component('UserReadWrite', UserReadWrite);
// Renders two times a UserReadOnly
var vm = new Vue({
el: '#vm',
template: `&lt;div&gt;&lt;UserReadOnly/&gt;&lt;UserReadWrite/&gt;&lt;/div&gt;`
});</code></pre><p>The component defined in<em> </em><code>user.js</code> can only be used in a single SFC. Otherwise, the last imported SFC which uses it will override the previous.</p><blockquote>SFCs allow splitting code in separate files. But you can’t import thoses files in multiple Vue components.</blockquote><p>To make it simple, don’t reuse JavaScript component code in multiple SFC components. The separate code feature is a handy syntax, not a design pattern.</p><p>Thanks for reading, hope my experience has been useful to make you avoid the mistakes I made.</p><p><strong>If it was useful, please click on the </strong>? <strong>button a few times to make others find the article and show your support! ?</strong></p><p><strong>Don’t forget to follow me to get notified about my upcoming articles </strong>?</p><h3 id="check-out-my-other-articles">Check out my <a href="https://medium.com/@jbardon/latest" rel="noopener">Other</a> Articles</h3><h4 id="-javascript">➥ JavaScript</h4><ul><li><a href="/news/how-to-improve-your-javascript-skills-by-writing-your-own-web-development-framework-eed2226f190/">How to Improve Your JavaScript Skills by Writing Your Own Web Development Framework ?</a></li><li><a href="https://medium.com/dailyjs/stop-painful-javascript-debug-and-embrace-intellij-with-source-map-6fe68eda8555" rel="noopener">Stop Painful JavaScript Debug and Embrace Intellij with Source Map</a></li></ul><h4 id="-react-for-beginners-series">➥ React for beginners series</h4><ul><li><a href="/news/a-quick-guide-to-learn-react-and-how-its-virtual-dom-works-c869d788cd44/">Begin with the first article</a></li><li><a href="/news/the-beginners-collection-of-powerful-tips-and-tricks-for-react-f2e3833c6f12/">Get the best practices guide</a></li></ul>
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
