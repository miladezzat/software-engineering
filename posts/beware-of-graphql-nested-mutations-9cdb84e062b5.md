---
card: "https://cdn-media-1.freecodecamp.org/images/1*6bCUDbvVF5Ccaavkye2Tjw.jpeg"
tags: [GraphQL]
description: “I have a cunning plan…”
author: "Milad E. Fahmy"
title: "Beware of GraphQL Nested Mutations!"
created: "2021-08-15T19:45:44+02:00"
modified: "2021-08-15T19:45:44+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-graphql tag-javascript tag-tech tag-programming tag-learning ">
<header class="post-full-header">
<h1 class="post-full-title">Beware of GraphQL Nested Mutations!</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*6bCUDbvVF5Ccaavkye2Tjw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*6bCUDbvVF5Ccaavkye2Tjw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*6bCUDbvVF5Ccaavkye2Tjw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*6bCUDbvVF5Ccaavkye2Tjw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*6bCUDbvVF5Ccaavkye2Tjw.jpeg" alt="Beware of GraphQL Nested Mutations!">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><em>“I have a cunning plan…”</em></p>
<p>Once upon a time, I hit upon the notion of <a href="/news/organizing-graphql-mutations-653306699f3d/">organizing GraphQL mutations</a> by nesting operations in a return type. The idea was that these operations would then mutate the parent entity.</p>
<p>The basic idea was this:</p><pre><code>input AddBookInput {
ISBN: String!
title: String!
}
input RemoveBookInput {
bookId: Int!
}
input UpdateBookInput {
ISBN: String!
title: String!
}
type AuthorOps {
addBook(input: AddBookInput!): Int
removeBook(input: RemoveBookInput! ): Boolean
updateBook(input: UpdateBookInput!): Book
}
type Mutation {
Author(id: Int!): AuthorOps
}</code></pre>
<p>And I’ve used this technique a few times without ill effect, but I’ve been lucky. Where’s the problem?</p>
<p><a href="https://medium.com/@anddoutoi/hey-jeff-bca074856669" rel="noopener">A reader pointed me</a> to <a href="https://github.com/graphql/graphql-js/issues/221" rel="noopener">an issue</a> on the GraphQL GitHub site where it was stated that the execution order of <strong>nested mutations</strong> is not guaranteed. Uh-oh. In the above case, I definitely want the <strong>addBook</strong>() mutation to occur before attempting an <strong>updateBook</strong>() operation on the same book. Alas, only so-called <strong>root</strong> <strong>mutations </strong>are guaranteed to execute in order.</p>
<h3 id="an-illustration-of-the-problem">An illustration of the problem</h3>
<p>Say I have a message queue where I want the messages stored in the order in which they were received. Some messages take longer to process, so I use a mutation to guarantee that messages are processed sequentially:</p><pre><code>type Query {
noop: String!
}
type Mutation {
message(id: ID!, wait: Int!): String!
}</code></pre>
<p>The resolver logs when the message arrives, then waits a given time before returning the mutation result:</p><pre><code class="language-js">const msg = (id, wait) =&gt; new Promise(resolve =&gt; {
setTimeout(() =&gt; {
console.log({id, wait})
let message = `response to message ${id}, wait is ${wait} seconds`;
resolve(message);
}, wait)
})
const resolvers = {
Mutation: {
message: (_, {id, wait}) =&gt; msg(id, wait),
}
}</code></pre>
<p>Now for the trial run. I will want to ensure that the console log messages are in the same order as the mutation requests. Here’s the request:</p><pre><code class="language-js">mutation root {
message1: message(id: 1, wait: 3000)
message2: message(id: 2, wait: 1000)
message3: message(id: 3, wait: 500)
message4: message(id: 4, wait: 100)
}</code></pre>
<p>The response is:</p><pre><code class="language-json">{
"data": {
"message1": "response to message 1, wait is 3000 seconds",
"message2": "response to message 2, wait is 1000 seconds",
"message3": "response to message 3, wait is 500 seconds",
"message4": "response to message 4, wait is 100 seconds"
}
}</code></pre>
<p>And the console log says:</p><pre><code>{ id: '1', wait: 3000 }
{ id: '2', wait: 1000 }
{ id: '3', wait: 500 }
{ id: '4', wait: 100 }</code></pre>
<p>Great! The messages are processed in the order in which they are received, even though the second and subsequent messages take less time than the previous. In other words, the mutations are executed sequentially.</p>
<h4 id="the-fly-in-the-ointment">The fly in the ointment</h4>
<p>Now let’s nest these operations and see what happens. First I define a <strong>MessageOps </strong>type, then add a <strong>Nested </strong>mutation:</p><pre><code>const typeDefs = `
type Query {
noop: String!
}
type MessageOps {
message(id: ID!, wait: Int!): String!
}
type Mutation {
message(id: ID!, wait: Int!): String!
Nested: MessageOps
}`</code></pre>
<p>My mutations now go through the Nested resolver, returning MessageOps, which I then use to execute my message mutation:</p><pre><code>mutation nested {
Nested {
message1: message(id: 1, wait: 3000)
message2: message(id: 2, wait: 1000)
message3: message(id: 3, wait: 500)
message4: message(id: 4, wait: 100)
}
}</code></pre>
<p>Pretty similar to what we had before, and the response to the mutation request looks nearly the same as well:</p><pre><code>{
"data": {
"Nested": {
"message1": "response to message 1, wait is 3000 seconds",
"message2": "response to message 2, wait is 1000 seconds",
"message3": "response to message 3, wait is 500 seconds",
"message4": "response to message 4, wait is 100 seconds"
}
}
}</code></pre>
<p>The only difference is the responses are packaged up in a Nested JSON object. Sadly, the console reveals a tale of woe:</p><pre><code>{ id: '4', wait: 100 }
{ id: '3', wait: 500 }
{ id: '2', wait: 1000 }
{ id: '1', wait: 3000 }</code></pre>
<p>It reveals that the messages are processed out-of-sequence: the fastest-processing messages get posted first.</p>
<p>Alright. <a href="https://github.com/JeffML/graphql-crud2" rel="noopener">In the code</a> from my original post, I actually did something more like the following:</p><pre><code>mutation nested2 {
Nested {
message1: message(id: 1, wait: 3000)
}
Nested {
message2: message(id: 2, wait: 1000)
}
Nested {
message3: message(id: 3, wait: 500)
}
Nested {
message4: message(id: 4, wait: 100)
}
}</code></pre>
<p>Maybe this works? Every mutation operation is in it’s own Nested root mutation, so we might expect the Nested mutations to execute sequentially. The response is identical to the one before:</p><pre><code>{
"data": {
"Nested": {
"message1": "response to message 1, wait is 3000 seconds",
"message2": "response to message 2, wait is 1000 seconds",
"message3": "response to message 3, wait is 500 seconds",
"message4": "response to message 4, wait is 100 seconds"
}
}
}</code></pre>
<p>But so is the console log:</p><pre><code>{ id: '4', wait: 100 }
{ id: '3', wait: 500 }
{ id: '2', wait: 1000 }
{ id: '1', wait: 3000 }</code></pre>
<h4 id="so-what-s-going-on-here">So what’s going on here?</h4>
<p>The “problem” is that GraphQL executes a Nested mutation, returning an object with further mutation methods. Unfortunately, once that object is returned, GraphQL is off to the next mutation request, unaware that there are further mutation operations to be performed in the request.</p>
<p>GraphQL is elegantly simple, but simple comes at a cost. It’s conceivable that nested mutations could be supported, say by adding a <strong><strong>mutator </strong></strong>type (its corollary would be the <a href="https://graphql.org/graphql-js/mutations-and-input-types/"><strong><strong>input </strong></strong>type</a>), which GraphQL would treat as an extension of the mutation operation. As it stands, there’s just not enough information in the mutation request to know that nested operations are mutators, also.</p>
<h3 id="organizing-graphql-mutations-part-2">Organizing GraphQL Mutations, part 2</h3>
<p>You can still use the technique for operations that are not sequentially dependent, but that’s an assumption that’s likely to be brittle and hard to debug when violated. Perhaps schema <a href="https://www.apollographql.com/docs/graphql-tools/schema-stitching.html" rel="noopener">stitching </a>or <a href="https://www.npmjs.com/package/graphql-weaver" rel="noopener">weaving </a>offers an answer. I hope to explore these approaches in a future post.</p>
<p>The complete NodeJS application used for this post can be found <a href="https://github.com/JeffML/nested_mutations" rel="noopener">here</a>.</p>
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
