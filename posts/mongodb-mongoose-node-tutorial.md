---
card: "/images/default.jpg"
tags: [node.js]
description: MongoDB is undoubtedly one of the most popular NoSQL database
author: "Milad E. Fahmy"
title: "How to Use MongoDB + Mongoose with Node.js – Best Practices for Back End Devs"
created: "2021-08-15T19:28:11+02:00"
modified: "2021-08-15T19:28:11+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-node-js tag-back-end-development tag-javascript tag-mongodb tag-mongoose ">
<header class="post-full-header">
<h1 class="post-full-title">How to Use MongoDB + Mongoose with Node.js – Best Practices for Back End Devs</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/10/node-mongodb-fundamentals.png 300w,
/news/content/images/size/w600/2020/10/node-mongodb-fundamentals.png 600w,
/news/content/images/size/w1000/2020/10/node-mongodb-fundamentals.png 1000w,
/news/content/images/size/w2000/2020/10/node-mongodb-fundamentals.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/10/node-mongodb-fundamentals.png" alt="How to Use MongoDB + Mongoose with Node.js – Best Practices for Back End Devs">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>MongoDB is undoubtedly one of the most popular NoSQL database choices today. And it has a great community and ecosystem. </p>
<p>In this article, we'll review some of the best practices to follow when you're setting up MongoDB and Mongoose with Node.js.</p>
<h2 id="pre-requisites-for-this-article">Pre-requisites for this article</h2>
<p>This article is one of the part codedamn's <a href="https://codedamn.com/learning-paths/backend">backend learning path</a>, where we start from backend basics and cover them in detail. Therefore I assume you have some experience with JavaScript (and Node.js) already. </p>
<p>Currently we are here:</p>
<p>If you have very little experience with Node.js/JavaScript or the back end in general, <a href="https://codedamn.com/learning-paths/backend">this is probably a good place to start</a>. You can also find a <a href="https://codedamn.com/learn/node-mongodb-fundamentals">free course on Mongoose + MongoDB + Node.js here</a>. Let's dive in.</p>
<h2 id="why-do-you-need-mongoose">Why do you need Mongoose?</h2>
<p>To understand why we need Mongoose, let's understand how MongoDB (and a database) works on the architecture level.</p>
<ul>
<li>You have a database server (MongoDB community server, for example)</li>
<li>You have a Node.js script running (as a process)</li>
</ul>
<p>MongoDB server listens on a TCP socket (usually), and your Node.js process can connect to it using a TCP connection. </p>
<p>But on the top of TCP, MongoDB also has its own protocol for understanding what exactly the client (our Node.js process) wants the database to do.</p>
<p>For this communication, instead of learning the messages we have to send on the TCP layer, we abstract that away with the help of a "driver" software, called MongoDB driver in this case. MongoDB driver is available as an <a href="https://www.npmjs.com/package/mongodb">npm package here</a>.</p>
<p>Now remember, the MongoDB driver is responsible for connecting and abstracting the low level communication request/responses from you – but this only gets you so far as a developer. </p>
<p>Because MongoDB is a schemaless database, it gives you way more power than you need as a beginner. More power means more surface area to get things wrong. You need to reduce your surface area of bugs and screw-ups you can make in your code. You need something more.</p>
<p>Meet Mongoose. Mongoose is an abstraction over the native MongoDB driver (the npm package I mentioned above). </p>
<p>The general rule of thumb with abstractions (the way I understand) is that with every abstraction you lose some low-level operation power. But that doesn't necessarily mean it is bad. Sometimes it boosts productivity 1000x+ because you never really need to have full access to the underlying API anyway.</p>
<p>A good way to think about it is you technically create a realtime chat app both in C and in Python. </p>
<p>The Python example would be much easier and faster for you as a developer to implement with higher productivity. </p>
<p>C <em>might</em> be more efficient, but it'll come at a huge cost in productivity/speed of development/bugs/crashes. Plus, for the most part you don't need to have the power C gives you to implement websockets.</p>
<p>Similarly, with Mongoose, you can limit your surface area of lower level API access, but unlock a lot of potential gains and good DX.</p>
<h2 id="how-to-connect-mongoose-mongodb">How to connect Mongoose + MongoDB</h2>
<p>Firstly, let's quickly see how you should connect to your MongoDB database in 2020 with Mongoose:</p><pre><code class="language-js">mongoose.connect(DB_CONNECTION_STRING, {
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false
})</code></pre>
<p>This connection format makes sure that you're using the new URL Parser from Mongoose, and that you are not using any deprecated practices. You can read in depth about all these deprecation messages <a href="https://mongoosejs.com/docs/deprecations.html">here</a> if you like.</p>
<h2 id="how-to-perform-mongoose-operations">How to perform Mongoose operations</h2>
<p>Let's now go ahead and quickly discuss operations with Mongoose, and how you should perform them.</p>
<p>Mongoose gives you options for two things:</p>
<ol>
<li>Cursor-based querying</li>
<li>Full fetching query</li>
</ol>
<h3 id="cursor-based-querying">Cursor-based querying</h3>
<p>Cursor-based querying means that you work with a single record at a time while you fetch a single or a batch of documents at a time from the database. This is an efficient way of working with huge amounts of data in a limited memory environment. </p>
<p>Imagine that you have to parse documents of 10GB in total size on a 1GB/1core cloud server. You cannot fetch the whole collection because that will not fit on your system. Cursor is a good (and the only?) option here.</p>
<h3 id="full-fetching-querying">Full fetching querying</h3>
<p>This is the type of query where you get the full response of your query all at once. For the most part, this is what you'll be using. Therefore, we'll be focusing mostly on this method here.</p>
<h2 id="how-to-use-mongoose-models">How to use Mongoose Models</h2>
<p>Models are the superpower of Mongoose. They help you enforce "schema" rules and provide a seamless integration of your Node code into database calls. </p>
<p>The very first step is to define a good model:</p><pre><code>import mongoose from 'mongoose'
const CompletedSchema = new mongoose.Schema(
{
type: { type: String, enum: ['course', 'classroom'], required: true },
parentslug: { type: String, required: true },
slug: { type: String, required: true },
userid: { type: String, required: true }
},
{ collection: 'completed' }
)
CompletedSchema.index({ slug: 1, userid: 1 }, { unique: true })
const model = mongoose.model('Completed', CompletedSchema)
export default model
</code></pre>
<p>This is one trimmed down example directly from codedamn's codebase. A few interesting things you should note here:</p>
<ol>
<li>Try to keep <code>required: true</code> on all fields which are required. This can be a huge pain saver for you if you don't use a static type checking system like TypeScript to assist you with correct property names while creating an object. Plus the free validation is super cool, too.</li>
<li>Define indexes and unique fields. <code>unique</code> property can also be added within a schema. Indexes are a broad topic, so I will not go into depth here. But on a large scale they can really help you to speed up your queries a lot.</li>
<li>Define a collection name explicitly. Although Mongoose can automatically give a collection name based on the name of model (<code>Completed</code> here, for example), this is way too much abstraction in my opinion. You should at least know about your database names and collections in your codebase.</li>
<li>Restrict values if you can, using enums.</li>
</ol>
<h2 id="how-to-perform-crud-operations">How to perform CRUD Operations</h2>
<p>CRUD means <strong>C</strong>reate, <strong>R</strong>ead, <strong>U</strong>pdate and <strong>D</strong>elete. These are the four fundamental options with which you can perform any sort of data manipulation in a database. Let's quickly see some examples of these operations.</p>
<h3 id="the-create-operation">The Create Operation</h3>
<p>This simply means creating a new record in a database. Let's use the model we defined above to create a record:</p><pre><code class="language-js">try {
const res = await CompletedSchema.create(record)
} catch(error) {
console.error(error)
// handle the error
}</code></pre>
<p>Again, a few pointers here:</p>
<ol>
<li>Use async-await instead of callbacks (nice on the eyes, no ground breaking performance benefit as such)</li>
<li>Use try-catch blocks around queries because your query <em>can</em> fail for a number of reasons (duplicate record, incorrect value, and so on)</li>
</ol>
<h3 id="the-read-operation">The Read Operation</h3>
<p>This means reading existing values from the database. it's simple just like it sounds, but there are a couple of gotchas you should know with Mongoose:</p><pre><code>const res = await CompletedSchema.find(info).lean()</code></pre>
<ol>
<li>Can you see the <code>lean()</code> function call there? It is super useful for performance. By default, Mongoose processes the returned document(s) from the database and adds its <em>magical</em> methods on it (for example <code>.save</code>)</li>
<li>When you use <code>.lean()</code>, Mongoose returns plain JSON objects instead of memory and resource heavy documents. Makes queries faster and less expensive on your CPU, too.</li>
<li>However, you can omit <code>.lean()</code> if you are actually thinking of updating data (we'll see that next)</li>
</ol>
<h3 id="the-update-operation">The Update Operation</h3>
<p>If you already have a Mongoose document with you (without firing with <code>.lean()</code>), you can simply go ahead and modify the object property, and save it using <code>object.save()</code>:</p><pre><code>const doc = await CompletedSchema.findOne(info)
doc.slug = 'something-else'
await doc.save()</code></pre>
<p>Remember that here, there are two database calls made. The first one is on <code>findOne</code> and the second one is on <code>doc.save</code>. </p>
<p>If you can, you should always reduce the number of requests hitting the database (because if you're comparing memory, network, and disk, network is almost always the slowest).</p>
<p>In the other case, you can use a query like this:</p><pre><code>const res = await CompletedSchema.updateOne(&lt;condition&gt;, &lt;query&gt;).lean()</code></pre>
<p>and it will only make a single call to the database.</p>
<h3 id="the-delete-operation">The Delete Operation</h3>
<p>Delete is also straightforward with Mongoose. Let's see how you can delete a single document:</p><pre><code class="language-js">const res = await CompletedSchema.deleteOne(&lt;condition&gt;)</code></pre>
<p>Just like <code>updateOne</code>, <code>deleteOne</code> also accepts the first argument as the matching condition for the document. </p>
<p>There is also another method called <code>deleteMany</code> which should be used only when you know you want to delete multiple documents. </p>
<p>In any other case, always use <code>deleteOne</code> to avoid accidental multiple deletes, especially when you're trying to execute queries yourself. </p>
<h2 id="conclusion">Conclusion</h2>
<p>This article was a simple introduction to the Mongoose and MongoDB world for Node.js developers. </p>
<p>If you enjoyed this article, you can step up your game even more as a developer by following the <a href="https://codedamn.com/learning-paths/backend">codedamn backend learning path</a>. Please feel free to reach out to me on <a href="https://twitter.com/mehulmpt">Twitter</a> for any feedback!</p>
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
