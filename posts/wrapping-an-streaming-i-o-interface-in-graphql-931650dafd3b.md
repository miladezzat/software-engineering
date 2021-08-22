---
card: "https://cdn-media-1.freecodecamp.org/images/1*q_D9nZAIvlL8Sj9wSwluJQ.jpeg"
tags: [GraphQL]
description: "This post will be about using GraphQL to handle a service tha"
author: "Milad E. Fahmy"
title: "How to Wrap a Streaming I/O Interface in GraphQL"
created: "2021-08-16T10:14:40+02:00"
modified: "2021-08-16T10:14:40+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-graphql tag-javascript tag-software-development tag-web-development tag-nodejs ">
<header class="post-full-header">
<h1 class="post-full-title">How to Wrap a Streaming I/O Interface in GraphQL</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*q_D9nZAIvlL8Sj9wSwluJQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*q_D9nZAIvlL8Sj9wSwluJQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*q_D9nZAIvlL8Sj9wSwluJQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*q_D9nZAIvlL8Sj9wSwluJQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*q_D9nZAIvlL8Sj9wSwluJQ.jpeg" alt="How to Wrap a Streaming I/O Interface in GraphQL">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
// tell the engine to switch to UCI mode
uci
// engine identify
id name Shredder
id author Stefan MK
// engine sends the options it can change
option name Hash type spin default 1 min 1 max 128
option name NalimovPath type string default
option name NalimovCache type spin default 1 min 1 max 32
// the engine has sent all parameters and is ready
uciok
// now the GUI sets some values in the engine
// set hash to 32 MB
setoption name Hash value 32
setoption name NalimovCache value 1
setoption name NalimovPath value d:\tb;c\tb
// this command and the answer is required here!
isready
// engine has finished setting up the internal values
readyok
// now we are ready to go</code></pre><figcaption>These commands are abstracted from the <a href="http://wbec-ridderkerk.nl/html/UCIProtocol.html">UCI documentation</a></figcaption></figure><p>Engine responses to client commands are indented. The first state transition is to initiate the UCI protocol, where the engine responds with default option settings and a <strong>uciok </strong>signal indicating it is finished. At this point, the client can configure options. These will only take effect when the command <strong>isready </strong>is issued. The engine responds with <strong>readyok </strong>when all options are set.<strong> </strong>Later state transitions will occur during game set up and analysis (not shown).</p><p>Running several queries in parallel may issue commands prematurely, since no query waits for the response of another query. The problem can be illustrated with a simple GraphQL API to an mock asynchronous service:</p><pre><code class="language-js">import {makeExecutableSchema} from 'graphql-tools';
const typeDefs = `
type Query {
message(id: ID!): String!
}
type Mutation {
message(id: ID!): String!
}
`
const resolvers = {
Query: {
message: (_, {id}) =&gt; new Promise(resolve =&gt; {
setTimeout(function() {
let message = `response to message ${id}`;
console.log(message)
resolve(message);
}, Math.random() * 10000)
})
},
Mutation: {
message: (_, {id}) =&gt; new Promise(resolve =&gt; {
setTimeout(function() {
let message = `response to message ${id}`;
console.log(message)
resolve(message);
}, Math.random() * 10000)
})
}
}
const schema = makeExecutableSchema({typeDefs, resolvers});
export {
schema
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
