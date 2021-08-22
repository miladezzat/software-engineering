---
card: "https://cdn-media-1.freecodecamp.org/images/1*KOwj7MMEgc1V_9t6EQP2ag.jpeg"
tags: [JavaScript]
description: "In the previous post, I showed how to get started with input "
author: "Milad E. Fahmy"
title: "How to perform custom validation in your Express.js app (Part-2)"
created: "2021-08-16T10:10:53+02:00"
modified: "2021-08-16T10:10:53+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-web-development tag-programming tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">How to perform custom validation in your Express.js app (Part-2)</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*KOwj7MMEgc1V_9t6EQP2ag.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*KOwj7MMEgc1V_9t6EQP2ag.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*KOwj7MMEgc1V_9t6EQP2ag.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*KOwj7MMEgc1V_9t6EQP2ag.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*KOwj7MMEgc1V_9t6EQP2ag.jpeg" alt="How to perform custom validation in your Express.js app (Part-2)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In the <a href="https://medium.freecodecamp.org/how-to-make-input-validation-simple-and-clean-in-your-express-js-app-ea9b5ff5a8a7" rel="noopener">previous post</a>, I showed how to get started with input validation in an express.js application. I used the <a href="https://github.com/ctavan/express-validator" rel="noopener">express-validator</a> module and discussed its important features with implementation.</p><p>If you haven’t checked that out, please go read the first post <a href="https://medium.freecodecamp.org/how-to-make-input-validation-simple-and-clean-in-your-express-js-app-ea9b5ff5a8a7" rel="noopener">here</a>.</p><p>So now let’s get started. In part 2 of this tutorial, you will learn how to perform custom validation in an Express.js app.</p><h3 id="what-you-can-achieve-with-custom-validation">What you can achieve with custom validation</h3><ul><li>It can be used to verify the existence of the entity in your database.</li><li>Also to test if a certain value exists in an array, object, string etc.</li><li>If you want to change the data format itself.</li></ul><p>And a lot more…</p><p>The <a href="https://express-validator.github.io/docs/" rel="noopener">express-validator</a> library provides a <code>custom</code> method which you can use to do all sorts of custom validations</p><p>Implementation of a custom validator uses the chain method <a href="https://express-validator.github.io/docs/validation-chain-api.html#customvalidator" rel="noopener">.custom()</a>. It takes a validator function.</p><p>Custom validators return Promises to show an async validation or <code>throw</code> any value/reject a promise to <a href="https://express-validator.github.io/docs/custom-error-messages.html#custom-validator-level" rel="noopener">use a custom error message</a>.</p><p>Now I will show you examples of the above custom validation use cases.</p><h3 id="check-if-the-entity-exists-in-your-database">Check if the entity exists in your database</h3><p>An important one which I use on day to day basis — and I guess you will be using to verify an entity against a database</p><p>For example, if someone requests to update their name, you’d use it for a basic <code>PUT</code> request <code>/api/users/:userId</code>.</p><p>To make sure that the user should exist in our database, I created a function to check against the DB.</p><pre><code class="language-js">param('userId')
.exists()
.isMongoId()
.custom(val =&gt; UserSchema.isValidUser(val))</code></pre><p><code>isValidUser()</code> is a static function which will make an async call to the database and find if the user exists or not.</p><p>Let’s write a static function in mongoose<code>Schema</code>:</p><pre><code class="language-js">UserSchema.statics = {
isValid(id) {
return this.findById(id)
.then(result =&gt; {
if (!result) throw new Error('User not found')
})
},
}</code></pre><p>As we cannot trust the <code>userId</code> sent by the client based on its format only, we need to make sure it is a real account.</p><h3 id="verify-against-certain-values-in-array-or-object"><strong>Verify against certain values in Array or Object</strong></h3><p>For example, if you want to apply a rule on a <strong>username</strong> that it must have a character <code>@</code>.</p><p>So in your <code>POST</code> request of user creation or while updating, you can do something like this:</p><pre><code class="language-js">body('username', 'Invalid Username')
.exists()
.isString().isLowercase()
.custom(val =&gt; {
if (val.indexOf('@') !== -1) return true
return false
type: {
}
}</code></pre><p>As you can see in <code>req.query</code>, you will get a property <code>type</code> whose type is a <code>string</code>.</p><p>With the help of<code>.customSanitizer()</code> we are able to convert a string into an array of strings.</p><p>At the validation level:</p><pre><code class="language-js">const commaToArray  = (value = '') =&gt; value.split(',')
items:[
{_id: 'someObjectId', number: '200'},
...
]
.exists()
.isMongoId()
.custom(val =&gt; ItemSchema.isValid(val)), //similar to isValidUser()
sanitize('items.*.number').toInt()</code></pre><p>There you have it — an introduction to input validation using the express-validator module</p><p>If you encounter any problems, feel free to <em>get in <a href="https://101node.io" rel="noopener">touch</a> or comment below.</em><br>I would be happy to help :)</p><p><em>Don’t hesitate to clap if you considered this a worthwhile read!</em></p><p>Follow <a href="/news/author/thatshailesh/">Shailesh Shekhawat</a> to get notified whenever I publish a new post.</p><p><em>Originally published at <a href="https://101node.io/blog/how-to-make-input-validation-in-express-js-app-part-2/" rel="noopener">101node.io</a> on September 22, 2018.</em></p>
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
