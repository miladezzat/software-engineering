---
card: "https://cdn-media-1.freecodecamp.org/images/1*smV1EYFRTT4wGha020XFIA.png"
tags: [JavaScript]
description: "by Hassan Djirdeh"
author: "Milad E. Fahmy"
title: "An introduction to dynamic list rendering in Vue.js"
created: "2021-08-16T11:44:40+02:00"
modified: "2021-08-16T11:44:40+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-technology tag-vuejs tag-web-development tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">An introduction to dynamic list rendering in Vue.js</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*smV1EYFRTT4wGha020XFIA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*smV1EYFRTT4wGha020XFIA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*smV1EYFRTT4wGha020XFIA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*smV1EYFRTT4wGha020XFIA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*smV1EYFRTT4wGha020XFIA.png" alt="An introduction to dynamic list rendering in Vue.js">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
{
id: 1,
name: 'James',
handle: '@jokerjames',
img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
tweet: "If you don't succeed, dust yourself off and try again.",
likes: 10,
},
{
id: 2,
name: 'Fatima',
handle: '@fantasticfatima',
img: 'https://semantic-ui.com/images/avatar2/large/molly.png',
tweet: 'Better late than never but never late is better.',
likes: 12,
},
{
id: 3,
name: 'Xin',
handle: '@xeroxin',
img: 'https://semantic-ui.com/images/avatar2/large/elyse.png',
tweet: 'Beauty in the struggle, ugliness in the success.',
likes: 18,
}
]</code></pre><p><code>tweets</code> is a collection of <code>tweet</code> objects with each <code>tweet</code> containing details of that particular tweet—a unique identifier, the name/handle of the account, tweet message, and so on. Let’s now attempt to use the <code>v-for</code> directive to render a list of tweet components based on this data.</p><p>First and foremost, we’ll create the Vue instance — the heart of the Vue application. We’ll mount/attach our instance to a DOM element of id <code>app</code>and assign the <code>tweets</code> collection as part of the instance’s data object.</p><pre><code class="language-js">new Vue({
el: '#app',
data: {
tweets
}
});</code></pre><p>We’ll now go ahead and create a <code>tweet-component</code> that our <code>v-for</code>directive will use to render a list. We’ll use the global <code>Vue.component</code>constructor to create a component named <code>tweet-component</code>:</p><pre><code class="language-js">Vue.component('tweet-component', {
template: `
&lt;div class="tweet"&gt;
&lt;div class="box"&gt;
&lt;article class="media"&gt;
&lt;div class="media-left"&gt;
&lt;figure class="image is-64x64"&gt;
&lt;img :src="tweet.img" alt="Image"&gt;
&lt;/figure&gt;
&lt;/div&gt;
&lt;div class="media-content"&gt;
&lt;div class="content"&gt;
&lt;p&gt;
&lt;strong&gt;{{tweet.name}}&lt;/strong&gt; &lt;small&gt;{{tweet.handle}}&lt;/small&gt;
&lt;br&gt;
{{tweet.tweet}}
&lt;/p&gt;
&lt;/div&gt;
&lt;div class="level-left"&gt;
&lt;a class="level-item"&gt;
&lt;span class="icon is-small"&gt;&lt;i class="fas fa-heart"&gt;&lt;/i&gt;&lt;/span&gt;
&lt;span class="likes"&gt;{{tweet.likes}}&lt;/span&gt;
&lt;/a&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;/article&gt;
&lt;/div&gt;
&lt;/div&gt;
`,
props: {
tweet: Object
}
});</code></pre><p>A few interesting things to note here:</p><ol><li>The <code>tweet-component</code> expects a <code>tweet</code> object prop as seen in the prop validation requirement (<code>props: {tweet: Object}</code>). If the component is rendered with a <code>tweet</code> prop that is <strong>not an object</strong>, Vue will emit warnings.</li><li>We’re binding the properties of the tweet object prop on to the component template with the help of the Mustache syntax: <code>{{ }}</code>.</li><li>The component markup adapts <a href="https://bulma.io/documentation/elements/box/" rel="noopener">Bulma’s Box element</a> as it represents a good resemblance to a tweet.</li></ol><p>In the HTML template, we’ll need to create the markup where our Vue app will be mounted (i.e. the element with the id of <code>app</code>). Within this markup, we’ll use the <code>v-for</code> directive to render a list of tweets.</p><p>Since <code>tweets</code> is the data collection we’ll be iterating over, <code>tweet</code> will be an appropriate alias to use in the directive. In each rendered <code>tweet-component</code>, we’ll <strong>also</strong><em> </em>pass in the iterated <code>tweet</code> object as props for it to be accessed in the component.</p><pre><code class="language-js">&lt;div id="app" class="columns"&gt;
&lt;div class="column"&gt;
&lt;tweet-component v-for="tweet in tweets" :tweet="tweet"/&gt;
&lt;/div&gt;
See the Pen <a href='https://codepen.io/itslit/pen/xWjZKy/'>Simple Twitter Feed #1</a> by Hassan Dj
(<a href='https://codepen.io/itslit'>@itslit</a>) on <a href='https://codepen.io'>CodePen</a>.
template: `
&lt;div class="tweet"&gt;
&lt;div class="box"&gt;
// ...
&lt;/div&gt;
&lt;div class="control has-icons-left has-icons-right"&gt;
&lt;input class="input is-small" placeholder="Tweet your reply..." /&gt;
&lt;span class="icon is-small is-left"&gt;
&lt;i class="fas fa-envelope"&gt;&lt;/i&gt;
&lt;/span&gt;
&lt;/div&gt;
&lt;/div&gt;
`,
props: {
tweet: Object
}
});</code></pre><p>Assume we wanted to introduce another new feature into our app. This feature would involve allowing the user to shuffle a list of tweets randomly.</p><p>To do this, we can first include a “Shuffle!” button in our HTML template:</p><pre><code class="language-html">&lt;div id="app" class="columns"&gt;
&lt;div class="column"&gt;
&lt;button class="is-primary button" @click="shuffle"&gt;
Shuffle!
&lt;/button&gt;
&lt;tweet-component v-for="tweet in tweets" :tweet="tweet"/&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre><p>We’ve attached a click event listener on the button element to call a <code>shuffle</code> method when triggered. In our Vue instance, we’ll create the <code>shuffle</code> method responsible for randomly shuffling the <code>tweets</code> collection in the instance. We’ll use lodash’s <a href="https://lodash.com/docs/4.17.5#shuffle" rel="noopener">_shuffle</a> method to achieve this:</p><pre><code class="language-js">new Vue({
el: '#app',
data: {
tweets
},
methods: {
shuffle() {
this.tweets = _.shuffle(this.tweets)
}
}
See the Pen <a href='https://codepen.io/itslit/pen/LdmGmP/'>Simple Twitter Feed #2</a> by Hassan Dj
(<a href='https://codepen.io/itslit'>@itslit</a>) on <a href='https://codepen.io'>CodePen</a>.
&lt;div class="column"&gt;
&lt;button class="is-primary button" @click="shuffle"&gt;
Shuffle!
&lt;/button&gt;
&lt;tweet-component
v-for="tweet in tweets"
:tweet="tweet"
:key="tweet.id"
/&gt;
&lt;/div&gt;
&lt;div class="column"&gt;
&lt;button class="is-primary button" @click="shuffle"&gt;
Shuffle!
&lt;/button&gt;
&lt;transition-group name="tweets" tag="div"&gt;
&lt;tweet-component
v-for="tweet in tweets"
:tweet="tweet"
:key="tweet.id"
/&gt;
&lt;/transition-group&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre><p>Based on the name of the transition, Vue will automatically recognize if any CSS transitions/animations have been specified. Since we aim to invoke a transition for the <strong>movement</strong> of items in the list, Vue will look for a specified CSS transition along the lines of <code>tweets-move</code> (where <code>tweets</code> is the name given to our transition group).</p><p>As a result, we'll manually introduce a <code>.tweets-move</code> class that has a specified type and time of transition:</p><pre><code class="language-css">#app .tweets-move {
transition: transform 1s;
}</code></pre><p><strong>Note:</strong> This is a very brief look into applying list transitions. Be sure to check out the <a href="https://vuejs.org/v2/guide/transitions.html" rel="noopener">Vue docs</a> for detailed information on all the different types of transitions that can be applied!</p><p>Our <code>tweet-component</code> elements will now <strong>transition</strong> appropriately between locations when a shuffle is invoked. Give it a try! Type some information in the input fields and click “Shuffle!” a few times.</p><p>Pretty cool, right? Without the <code>key</code> attribute, <strong>the transition-group element can’t be used to create list transitions</strong> since the elements are <strong>patched in place </strong>instead of being reordered.</p><p>Should the <code>key</code> attribute always be used? <strong>It’s recommended</strong>. The <a href="https://vuejs.org/v2/guide/list.html#key" rel="noopener">Vue docs</a> specify that the key attribute should only be omitted if:</p><ul><li>We intentionally want the default manner of patching elements in place for performance reasons.</li><li>The DOM content is simple enough.</li></ul><h3 id="conclusion">Conclusion</h3><p>And there we have it! Hopefully this short article portrayed how useful the <code>v-for</code> directive is as well as provided a little more context to why the <code>key</code> attribute is often used. Let me know if you may have any questions/thoughts whatsoever!</p><p>If you liked my style of writing and are potentially interested in learning how to build real world apps with Vue, you may like the book <strong>Fullstack Vue: The Complete Guide to Vue.js</strong> that I helped publish! The book covers numerous facets of Vue including routing, simple state management, form handling, Vuex, server persistence, and testing, among other topics. If you’re interested and/or would like to try a sample chapter, you can get more information from our website <a href="https://www.fullstack.io/vue/" rel="noopener"><strong>https://fullstack.io/vue</strong></a><strong>!</strong></p><p>If you have any questions/thoughts/opinions, you’re more than welcome to reach out to me anytime <a href="https://twitter.com/djirdehh" rel="noopener">@djirdehh</a>!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
