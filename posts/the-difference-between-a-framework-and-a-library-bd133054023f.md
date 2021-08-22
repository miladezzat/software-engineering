---
card: "https://cdn-media-1.freecodecamp.org/images/1*tO6yh-odg-YDLazUQ6FWVQ.jpeg"
tags: [JavaScript]
description: Developers often use the terms “library” and “framework” inte
author: "Milad E. Fahmy"
title: "The Difference Between a Framework and a Library"
created: "2021-08-15T19:37:38+02:00"
modified: "2021-08-15T19:37:38+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-jquery tag-tech tag-programming tag-vuejs ">
<header class="post-full-header">
<h1 class="post-full-title">The Difference Between a Framework and a Library</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*tO6yh-odg-YDLazUQ6FWVQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*tO6yh-odg-YDLazUQ6FWVQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*tO6yh-odg-YDLazUQ6FWVQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*tO6yh-odg-YDLazUQ6FWVQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*tO6yh-odg-YDLazUQ6FWVQ.jpeg" alt="The Difference Between a Framework and a Library">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Developers often use the terms “library” and “framework” interchangeably. But there is a difference.</p>
<p>Both frameworks and libraries are code written by someone else that is used to help solve common problems.</p>
<p>For example, let’s say you have a program where you plan on working with strings. You decide to keep your code DRY (don’t repeat yourself) and write some reusable functions like these:</p><pre><code class="language-js">function getWords(str) {
const words = str.split(' ');
return words;
}
function createSentence(words) {
const sentence = words.join(' ');
return sentence;
}</code></pre>
<p>Congratulations. You’ve created a library.</p>
<p>There isn’t anything magic about frameworks or library. Both libraries and frameworks are reusable code written by someone else. Their purpose is to help you solve common problems in easier ways.</p>
<p>I often use a house as a metaphor for web development concepts.</p>
<p>A library is like going to Ikea. You already have a home, but you need a bit of help with furniture. You don’t feel like making your own table from scratch. Ikea allows you to pick and choose different things to go in your home. You are in control.</p>
<p>A framework, on the other hand, is like building a model home. You have a set of blueprints and a few <em>limited</em> choices when it comes to architecture and design. Ultimately, the contractor and blueprint are in control. And they will let you know when and where you can provide your input.</p>
<h4 id="the-technical-difference">The Technical Difference</h4>
<p>The technical difference between a framework and library lies in a term called inversion of control.</p>
<p>When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.</p>
<p>Let’s look at an example using jQuery (a library) and Vue.js (a framework).</p>
<p>Imagine we want to display an error message when an error is present. In our example, we will click a button, and pretend an error occurs.</p>
<h4 id="with-jquery-">With jQuery:</h4><pre><code class="language-html">// index.html
&lt;html&gt;
&lt;head&gt;
&lt;script src="https://code.jquery.com/jquery-3.3.1.min.js"
&lt;/script&gt;
&lt;script src="./app.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="app"&gt;
&lt;button id="myButton"&gt;Submit&lt;/button&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
// app.js
// A bunch of our own code,
// followed by calling the jQuery library
let error = false;
const errorMessage = 'An Error Occurred';
$('#myButton').on('click', () =&gt; {
error = true; // pretend some error occurs and set error = true
if (error) {
$('#app')
.append(`&lt;p id="error"&gt;${errorMessage}&lt;/p&gt;`);
} else {
$('#error').remove();
}
});</code></pre>
<p>Notice how we use jQuery. <em>We</em> tell our program where we want to call it. This is much like going to a physical library and pulling certain books off the shelf as we want them.</p>
<p>That’s not to say jQuery functions don’t require certain inputs <em>once</em> we call them, but jQuery itself is a library of those functions. We are in charge.</p>
<h4 id="with-vue-js">With Vue.js</h4><pre><code class="language-html">//index.html
&lt;html&gt;
&lt;head&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;
&lt;script src="./app.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div id="app"&gt;&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
const vm = new Vue({
template: `&lt;div id="vue-example"&gt;
&lt;button @click="checkForErrors"&gt;Submit&lt;/button&gt;
&lt;p v-if="error"&gt;{{ errorMessage }}&lt;/p&gt;
&lt;/div&gt;`,
el: '#vue-example',
data: {
error: null,
errorMessage: 'An Error Occurred',
},
methods: {
checkForErrors()  {
this.error = !this.error;
},
},
});</code></pre>
<p>With Vue, we have to fill in the blanks. The Vue constructor is an object with certain properties. It tells us what it needs, and then behind the scenes, Vue decides when it needs it. Vue inverts the control of the program. We plug our code into Vue. Vue is in charge.</p>
<p>The difference whether it is a library or framework is whether or not there is an inversion of control.</p>
<h4 id="a-note-on-being-opinionated-">A note on being “opinionated”</h4>
<p>You’ll often hear frameworks and libraries described as “opinionated” or “un-opinionated.” These terms are subjective. They attempt to define the level of freedom a developer has when structuring their code.</p>
<p>Frameworks are more opinionated than not since — by definition — the inversion of control requires a concession of application-design freedom.</p>
<p>Again, the degree to which something is opinionated is subjective. For example, I personally would consider Angular a highly opinionated framework, and Vue.js a less-opinionated framework.</p>
<h3 id="in-summary">In summary</h3>
<ul>
<li>Frameworks and libraries are both code written by someone else that helps you perform some common tasks in a less verbose way.</li>
<li>A framework inverts the control of the program. It tells the developer what they need. A library doesn’t. The programmer calls the library where and when <em>they</em> need it.</li>
<li>The degree of freedom a library or framework gives the developer will dictate how “opinionated” it is.</li>
</ul>
<p>Thanks for reading!</p>
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
