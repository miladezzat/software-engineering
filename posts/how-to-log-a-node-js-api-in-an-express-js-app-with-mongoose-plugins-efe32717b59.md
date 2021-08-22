---
card: "https://cdn-media-1.freecodecamp.org/images/1*tLsF0BLHtCPk5voPS1yFhw.jpeg"
tags: [Nodejs]
description: As your application grows, logging becomes a crucial part to
author: "Milad E. Fahmy"
title: "How to log a Node.js API in an Express.js app with Mongoose plugins"
created: "2021-08-15T19:41:56+02:00"
modified: "2021-08-15T19:41:56+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nodejs tag-javascript tag-debugging tag-mongodb tag-developer ">
<header class="post-full-header">
<h1 class="post-full-title">How to log a Node.js API in an Express.js app with Mongoose plugins</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*tLsF0BLHtCPk5voPS1yFhw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*tLsF0BLHtCPk5voPS1yFhw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*tLsF0BLHtCPk5voPS1yFhw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*tLsF0BLHtCPk5voPS1yFhw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*tLsF0BLHtCPk5voPS1yFhw.jpeg" alt="How to log a Node.js API in an Express.js app with Mongoose plugins">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<blockquote>This tutorial will require prior knowledge of the <a href="https://mongoosejs.com/" rel="noopener">mongoose</a> Object Relational Mapping (ORM) technique</blockquote>
<h4 id="introduction">Introduction</h4>
<p>As your application grows, logging becomes a crucial part to keep track of everything. It is especially important for debugging purposes.</p>
<p>Nowadays there are already logging modules available at npm. These modules can store logs in a file in different formats, or levels. We are going to discuss the API logging in your Node.js Express app using the popular ORM Mongoose.</p>
<p>So how you would create a <strong>Mongoose plugin</strong> that will do logging for you in a cleaner way and make API logging easy?</p>
<h4 id="what-is-a-plugin-in-mongoose">What is a plugin in Mongoose?</h4>
<p>In Mongoose, schemas are pluggable. A plugin is like a function that you can use in your schema and reuse again and again over schema instances.</p>
<p>Mongoose also provides<strong> global plugins </strong>which you can use for all schemas. For example, we are going to write a plugin that will create a <code><strong>diff</strong></code> of two <code><strong>jsons</strong></code> and write to <code><strong>mongodb</strong></code><strong>.</strong></p>
<h3 id="step-1-creating-a-basic-log-schema-model">Step 1: Creating a Basic Log Schema Model</h3>
<p>Let’s create a basic log schema with the following six properties:</p>
<ul>
<li><strong>Action: </strong>As per its name, this will be a course of action of the API whether it is <code>create</code> <code>update</code> <code>delete</code> or something else.</li>
<li><strong>Category: </strong>API category. For example doctors and patients. It is more like a class.</li>
<li><strong>CreatedBy: </strong>User who is using the API or invoked it.</li>
<li><strong>Message: </strong>Here you can include any kind of message you want to show that will make sense or help during debugging.</li>
<li><strong>Diff: </strong>This is the main property which will have the <em>diff </em>of two<em> JSONs</em></li>
</ul>
<p>You can add more fields if you want that make sense for your own application. A schema can be changed and upgraded according to requirements.</p>
<p>Here is our model: <code>models/log.js</code></p><pre><code class="language-js">const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { ObjectId } = Schema
const LogSchema = new Schema({
action: { type: String, required: true },
category: { type: String, required: true },
createdBy: { type: ObjectId, ref: 'Account', required: true },
message: { type: String, required: true },
diff: { type: Schema.Types.Mixed },
},{
timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
})
LogSchema.index({ action: 1, category: 1 })
module.exports = mongoose.model('Log', LogSchema)</code></pre>
<h3 id="step-2-write-a-function-to-get-the-difference-between-2-jsons">Step 2: Write a function to get the difference between 2 JSONs</h3>
<p>So the next step is that you need a reusable function that will create a <code>diff</code> of two JSONs on the fly.</p>
<p>Let's call it <code>diff.js</code></p><pre><code class="language-js">const _ = require('lodash')
exports.getDiff = (curr, prev) =&gt; {
function changes(object, base) {
return _.transform(object, (result, value, key) =&gt; {
if (!_.isEqual(value, base[key]))
result[key] = (_.isObject(value) &amp;&amp; _.isObject(base[key])) ?                 changes(value, base[key]) : value
})
}
return changes(curr, prev)
}</code></pre>
<p>I have used <code><a href="https://lodash.com/docs/4.17.10" rel="noopener"><strong>lodash</strong></a></code><strong>, </strong>which is a popular library, to provide the same functionality.</p>
<p>Let's break down the above function and see what's going on:</p>
<ul>
<li><strong>_.transform: </strong>It’s an alternative to <code>.reduce</code> for arrays. Basically, it will iterate over your object <code>keys</code> and <code>values</code>. It provides an <code>accumulator</code> which is the first argument. <code>result</code><strong> </strong>is the accumulator and it is mutable.</li>
<li><strong>_.isEqual: </strong>Performs a deep comparison between two values to determine if they are equivalent.</li>
</ul>
<blockquote><strong><em>isEqual</em></strong><em>: This method supports comparing arrays, array buffers, booleans, date objects, error objects, maps, numbers, <code>Object</code> objects, regexes, sets, strings, symbols, and typed arrays. <code>Object</code> objects are compared by their own, not inherited, enumerable properties. Functions and DOM nodes are compared by strict equality, i.e. <code>===</code>.</em></blockquote>
<p>Here we are iterating over each object property and value and comparing it with our old/prev object.</p>
<p>If the <code>value</code> of the current object is not equal to a value of the same property in the previous object: <code>base[key]</code> and if that value is the object itself, we call the function <code>changes</code> <strong>recursively</strong> until it gets a value which will be finally stored in <code>result</code> as <code>result[key] = value</code>.</p>
<h3 id="step3-create-a-plugin-to-use-diff-and-save-it-to-database">Step3: Create a plugin to use diff and save it to database</h3>
<p>Now we need to keep track of the previous <code>document</code> in the database and create a <code>diff</code> before saving to <code>mongodb</code>.</p><pre><code class="language-js">const _ = require('lodash')
const LogSchema = require('../models/log')
const { getDiff } = require('../utils/diff')
const plugin = function (schema) {
schema.post('init', doc =&gt; {
doc._original = doc.toObject({transform: false})
})
schema.pre('save', function (next) {
if (this.isNew) {
next()
}else {
this._diff = getDiff(this, this._original)
next()
}
})
schema.methods.log = function (data)  {
data.diff = {
before: this._original,
after: this._diff,
}
return LogSchema.create(data)
}
}
module.exports = plugin</code></pre>
<p>In Mongoose, there are different hooks available. For now, we need to use the <code><a href="https://mongoosejs.com/docs/api.html#document_Document-init" rel="noopener">init</a></code> and <code><a href="https://mongoosejs.com/docs/api.html#document_Document-save" rel="noopener">save</a></code> methods available on the schema.</p>
<p><code>this.isNew()</code> : If you are creating the new document then just return <code>next()</code> middleware.</p>
<p>In <code>schema.post('init')</code> <code><a href="https://mongoosejs.com/docs/api.html#document_Document-toObject">toObject()</a></code>:</p><pre><code class="language-js">doc._original = doc.toObject({transform: false})</code></pre>
<p>Mongoose <code>Model</code>s inherit from <code>Document</code>s, which have a <code>toObject()</code> method. It will convert a <code>document</code> into an <code>Object()</code> and <code>transform:false</code> is for not allowing to transform the return object.</p>
<h3 id="step-4-usage-how-to-use-in-express-js-api">Step 4: Usage — How to use in express.js API</h3>
<p>In your main <code>server.js</code> or <code>app.js</code> :</p>
<p>Initialise a global <a href="https://mongoosejs.com/docs/plugins.html" rel="noopener">plugin</a> so that it will be available for all schemas. You can also use it for a particular schema by initializing it in the schema model.</p><pre><code class="language-js">const mongoose = require('mongoose')
mongoose.plugin(require('./app/utils/diff-plugin'))</code></pre>
<p>Here is a basic example of <code>user</code> update API:</p><pre><code class="language-js">const User = require('../models/user')
exports.updateUser = (req, res, next) =&gt; {
return User.findById(req.params.id)
.then(user =&gt; {
if (!user)
throw new Error('Target user does not exist. Failed to update.')
const { name } = req.body
if (name) user.name = name
return user.save()
})
.then(result =&gt; {
res.json(result)
return result
})
.catch(next)
.then(user =&gt; {
if (user &amp;&amp; typeof user.log === 'function') {
const data = {
action: 'update-user',
category: 'users',
createdBy: req.user.id,
message: 'Updated user name',
}
return user.log(data)
}
}).catch(err =&gt; {
console.log('Caught error while logging: ', err)
})
}</code></pre>
<h3 id="conclusion">Conclusion</h3>
<p>In this tutorial, you learned how to create a Mongoose plugin and use it to log the <code>changes</code> in your API. You can do a lot more with plugins to build a robust node application.</p>
<p>Here are resources to learn more about Mongoose and plugin usage:</p>
<ul>
<li>80/20 Guide to mongoose plugins: <a href="http://thecodebarbarian.com/2015/03/06/guide-to-mongoose-plugins" rel="noopener">http://thecodebarbarian.com/2015/03/06/guide-to-mongoose-plugins</a></li>
<li><a href="https://mongoosejs.com/docs/plugins.html" rel="noopener">https://mongoosejs.com/docs/plugins.html</a></li>
</ul>
<p>I hope you find this tutorial useful, feel free to reach <a href="https://101node.io" rel="noopener">out</a> if you have any questions.</p>
<p>Follow <a href="/news/author/thatshailesh/">Shailesh Shekhawat</a> to get notified whenever I publish a new post.</p>
<p><em>Don’t hesitate to clap if you considered this a worthwhile read!</em></p>
<p><em>Originally published at <a href="https://101node.io/blog/better-logging-with-mongoose-plugins-in-node-js-express-app/" rel="noopener">101node.io</a> on September 2, 2018.</em></p>
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
