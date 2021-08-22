---
card: "https://cdn-media-1.freecodecamp.org/images/1*xwtbmeBwPveQTgzDMP-zsw.jpeg"
tags: [React]
description: Storage has always been an integral part of building apps. Wh
author: "Milad E. Fahmy"
title: "How to use Redux Persist when migrating your states"
created: "2021-08-15T19:47:47+02:00"
modified: "2021-08-15T19:47:47+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-react tag-redux tag-javascript tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to use Redux Persist when migrating your states</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*xwtbmeBwPveQTgzDMP-zsw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*xwtbmeBwPveQTgzDMP-zsw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*xwtbmeBwPveQTgzDMP-zsw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*xwtbmeBwPveQTgzDMP-zsw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*xwtbmeBwPveQTgzDMP-zsw.jpeg" alt="How to use Redux Persist when migrating your states">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Storage has always been an integral part of building apps. While building a webapp for our company, I needed a way to persist my states in storage which was reliable, easy to use, and configurable based on the requirements.</p>
<p>Thankfully this library was the answer to all my problems!</p>
<p>This article is based on a problem I faced while working on a project. Let us dive deep and understand how the library helped me solve it.</p>
<p>If you haven’t already used <a href="https://github.com/rt2zz/redux-persist" rel="noopener">redux-persist</a>, then do read the docs, as they’re self-explanatory. If you want to know why you should use this library, go through this <a href="https://medium.com/async-la/redux-persist-your-state-7ad346c4dd07" rel="noopener">article</a> — it is a great intro by the <a href="https://twitter.com/rt2zz" rel="noopener">author</a> himself!</p>
<h3 id="problem">Problem</h3>
<p>Let’s take an example where I wanted to persist a reducer in my localStorage:</p><pre><code class="language-javascript">//Reducer
reducerA: {
engine: {
model: "F5AAA",
manufacturer: "Ferrari"
},
tyre: {
model: "T123",
manufacturer: "MRF",
owner: {
details: {
name: "Zack",
age: "26"
}
}
},
condition: "prime"
}</code></pre><pre><code class="language-javascript">//View
class TestComponent extends React.Component {
render() {
const model = someStateOfReducerA.tyre.model
const manufacturer = someStateOfReducerA.tyre.manufacturer
return (
&lt;div&gt;{model}&lt;/div&gt;
&lt;div&gt;{manufacturer}&lt;/div&gt;
)
}
}
//Reducer in localStorage
reducerA: {
engine: {
model: "F5AAA",
manufacturer: "Ferrari"
},
tyre: {
model: "T123",
manufacturer: "MRF",
owner: {
details: {
name: "Zack",
age: "26"
}
}
},
condition: "prime"
}</code></pre>
<p>Now this reducer has persisted in our client’s device. So what will happen if I introduce a new key to our <strong>reducerA</strong>?</p><pre><code class="language-javascript">reducerA: {
engine: {
model: "F5AAA",
manufacturer: "Ferrari"
},
tyre: {
model: "T123",
manufacturer: "MRF",
owner: {
details: {
name: "Zack",
age: "26",
address: "CA" // NEW KEY ADDED
}
}
},
condition: "prime"
}</code></pre>
<p>Let’s say we have a view which renders the value of our newly introduced key:</p><pre><code class="language-javascript">//View with new key address
class TestComponent extends React.Component {
render() {
const model = someStateOfReducerA.tyre.model
const manufacturer = someStateOfReducerA.tyre.manufacturer
const address = someStateOfReducerA.tyre.owner.details.address
return (
&lt;div&gt;{model}&lt;/div&gt;
&lt;div&gt;{manufacturer}&lt;/div&gt;
&lt;div&gt;{address}&lt;/div&gt;
)
}
}</code></pre>
<p>When I load my application with the newly introduced key, the rendering of our view fails. It throws an error where it states:</p><pre><code class="language-javascript">Cannot render address of undefined</code></pre>
<p>This happened because the client’s storage is in sync with the rootReducer initialized during our app reload.</p>
<p>Even though we introduced the new key, the client’s storage never received it. It initializes our rootReducer with the old values in storage, where the address never existed, and causes the rendering of our component to fail.</p>
<h3 id="solution">Solution</h3>
<p>This leads to a well-known concept: the migration of the database.</p>
<blockquote>A schema <strong>migration</strong> is performed on a <strong>database</strong> whenever it is necessary to update or revert that <strong>database’s</strong> schema to some newer or older version. <strong>Migrations</strong> are performed programmatically by using a schema <strong>migration</strong> tool — <a href="https://en.wikipedia.org/wiki/Schema_migration" rel="noopener">Wikipedia</a></blockquote>
<p>LocalStorage is in fact a small database of key value pairs. Redux Persist does it beautifully. If you look at a project initialized with this library, it already uses a <strong>default version -1</strong>. Take a look below at the screenshot taken from the application tab in the Chrome dev tool.</p>
<figcaption>localStorage in Chrome Dev Tool</figcaption>
</figure>
<p>This is really good! The library already maintains a default version for us, so that we can incorporate the migration feature in the future.</p>
<p>The key is to configure your persist configuration in your rootReducer.</p><pre><code class="language-javascript">export const persistConfig = {
key: 'testApp',
version: 0, //New version 0, default or previous version -1
storage,
debug: true,
stateReconciler: autoMergeLevel2,
migrate: createMigrate(migrations, { debug: true })
}</code></pre>
<p>It is important that we update the version to 0, so that it migrates our storage from -1 to 0.</p>
<p>Next, we write the migration to let our storage know that there is an update.</p><pre><code class="language-javascript">const migrations = {
0: (state) =&gt; {
return {      ...
state,
tyre: {        ...
state.tyre,
owner: {          ...
state.tyre.owner,
details: {
state.tyre.owner.details,
address: "CA" //New Key added for migration
}
}
}
}
}
}</code></pre>
<p>The <strong>migrations </strong>are then used in our persist config mentioned above:</p><pre><code>migrate: createMigrate(migrations, { debug: true })</code></pre>
<p>Thus, when we reload our application, our application goes through a reconciliation phase where the storage is brought in sync with the newly-updated reducer.</p>
<h3 id="conclusion">Conclusion</h3>
<p>The configuration above will always keep the application updated on the client side when you release new versions. It is very important that we are careful about this when making offline first apps.</p>
<p>It is simple once you understand the basic concept and technique to do it. I hope this article helped you understand the importance of managing versions of your states in storage :)</p>
<p><em>Follow me on<strong> <a href="https://twitter.com/daslusan" rel="noopener">twitter</a></strong> to get more updates regarding new articles and to stay updated in latest frontend developments. Also share this article on twitter to help others know about it. Sharing is caring<strong> ^_^.</strong></em></p>
<h3 id="some-helpful-resources">Some helpful resources</h3>
<ol>
<li><a href="https://github.com/rt2zz/redux-persist/blob/master/docs/api.md" rel="noopener">https://github.com/rt2zz/redux-persist/blob/master/docs/api.md</a></li>
<li><a href="https://medium.com/@clrksanford/persist-ence-is-key-using-redux-persist-to-store-your-state-in-localstorage-ac6a000aee63" rel="noopener">https://medium.com/@clrksanford/persist-ence-is-key-using-redux-persist-to-store-your-state-in-localstorage-ac6a000aee63</a></li>
<li><a href="https://medium.com/async-la/redux-persist-your-state-7ad346c4dd07" rel="noopener">https://medium.com/async-la/redux-persist-your-state-7ad346c4dd07</a></li>
</ol>
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
