---
card: "https://cdn-media-1.freecodecamp.org/images/1*KzSnqWrTeJrq6otN4JfWPQ.jpeg"
tags: [Self Improvement]
description: "You might be asking yourself, “Eh, why do I really care about"
author: "Milad E. Fahmy"
title: "How to use tiny programmable robots to introduce kids to coding"
created: "2021-08-16T14:42:24+02:00"
modified: "2021-08-16T14:42:24+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-self-improvement tag-tech tag-startup tag-life-lessons tag-education ">
<header class="post-full-header">
<h1 class="post-full-title">How to use tiny programmable robots to introduce kids to coding</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*KzSnqWrTeJrq6otN4JfWPQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*KzSnqWrTeJrq6otN4JfWPQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*KzSnqWrTeJrq6otN4JfWPQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*KzSnqWrTeJrq6otN4JfWPQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*KzSnqWrTeJrq6otN4JfWPQ.jpeg" alt="How to use tiny programmable robots to introduce kids to coding">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
var log = require('choo-log')
var choo = require('choo')
var app = choo()
// inserting middleware is as easy as this
app.use(log())
app.use(countStore)
// have you ever seen defining routes as easy as that?
app.route('/', mainView)
app.mount('body')
// views, rendered pages, can be set up as easy as that
function mainView (state, emit) {
return html`
&lt;body&gt;
&lt;h1&gt;count is ${state.count}&lt;/h1&gt;
&lt;button onclick=${onclick}&gt;Increment&lt;/button&gt;
&lt;/body&gt;
`
function onclick () {
emit('increment', 1)
}
}
function countStore (state, emitter) {
state.count = 0
emitter.on('increment', function (count) {
state.count += count
emitter.emit('render')
})
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
