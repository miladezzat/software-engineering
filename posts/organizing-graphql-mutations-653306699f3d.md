---
card: "https://cdn-media-1.freecodecamp.org/images/1*OYjAHBzgbgDRDFJeIrzr0Q.jpeg"
tags: [GraphQL]
description: "Cleaning up the CRUD."
author: "Milad E. Fahmy"
title: "Organizing GraphQL Mutations"
created: "2021-08-16T11:48:31+02:00"
modified: "2021-08-16T11:48:31+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-graphql tag-javascript tag-programming tag-tech tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Organizing GraphQL Mutations</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*OYjAHBzgbgDRDFJeIrzr0Q.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*OYjAHBzgbgDRDFJeIrzr0Q.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*OYjAHBzgbgDRDFJeIrzr0Q.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*OYjAHBzgbgDRDFJeIrzr0Q.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*OYjAHBzgbgDRDFJeIrzr0Q.jpeg" alt="Organizing GraphQL Mutations">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Cleaning up the CRUD.</p><p><strong><em>Update (5/7/2018): </em></strong>Anders Ringqvist (comments) spotted <a href="https://github.com/graphql/graphql-js/issues/221" rel="noopener">an issue report</a> that <strong>can cause problems</strong> when using this approach. Please see <a href="/news/beware-of-graphql-nested-mutations-9cdb84e062b5/">my follow up post</a>.</p><p>—</p><p>The Great Divide in GraphQL schemas runs between <a href="http://graphql.org/learn/queries/" rel="noopener">Queries and Mutations</a>. A query method reads data from a datasource, such as a SQL database or file system or even a remote service. Whereas queries can be executed concurrently, mutations cannot.</p><p>Mutations have to execute sequentially because the next mutation operation may be dependent on data stored or updated by the previous mutation. For instance, a record has to be created before it can be updated. Therefore, mutations have to execute sequentially. This is why queries and mutations have their own namespace in GraphQL.</p><p>Queries are the ‘R’ in CRUD (Create, Read, Update, &amp; Delete). The code in this article builds off of a <a href="https://launchpad.graphql.com/1jzxrj179" rel="noopener">Launchpad example</a>. In the Launchpad code, there is a query defined that will return an Author’s Posts, given an author ID. I’ve extended this example once already on my post about <a href="https://medium.freecodecamp.org/mocking-graphql-with-graphql-tools-42c2dd9d0364" rel="noopener">testing GraphQL interfaces</a>. In that post I added Books to the mix, and here I’ll extend that idea.</p><h3 id="author-posts">Author Posts</h3><p>Mutations are the CUD in CRUD. The Launchpad example linked above has an <code><strong>upvotePost</strong></code> mutation that bumps up the vote count (an update operation) for a Post.</p><pre><code class="language-js">Mutation: {
upvotePost: (_, { postId }) =&gt; {
const post = find(posts, { id: postId });
if (!post) {
throw new Error(`Couldn't find post with id ${postId}`);
}
post.votes += 1;
return post;
},
},</code></pre><p>To implement down vote also, I simply create a similar <code><strong>downvotePost</strong></code> mutation:</p><pre><code class="language-js">Mutation: {
...
downvotePost: (_, { postId }) =&gt; {
const post = find(posts, { id: postId });
if (!post) {
throw new Error(`Couldn't find post with id ${postId}`);
}
post.votes -= 1;
return post;
},
},</code></pre><p>This is not exactly a <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself" rel="noopener">DRY</a> way of doing it. The body of the logic could be put into one external function with a parameter to increment the vote up or down.</p><p>Also, I would like to get rid of the <code>upvotePost</code> and <code>downvotePost</code> naming and instead rely on a context, like <code><strong>Post.upvote()</strong></code> and <code><strong>Post.downvote()</strong></code>. That can be done by having the Mutation method return a set of operations that affect a given Post.</p><p><code>PostOps</code> is a type defined as:</p><pre><code class="language-js">type PostOps {
upvote(postId: Int!): Post
downvote(postId: Int!): Post
return new Promise((resolve, reject) =&gt; {
const post = posts.find(p =&gt; p.id === postId);
if (!post) {
reject(`Couldn't find post with id ${postId}`);
}
post.votes += updown;
resolve(post);
})
};
const PostOps =
({
upvote: ({
postId
}) =&gt; voteHandler(postId, 1),
downvote: ({
postId
}) =&gt; voteHandler(postId, -1)
});</code></pre><figcaption>resolver.js</figcaption></figure><p>You’ll notice I use a new Promise in the resolver, though technically it isn’t required for this example. Nonetheless, most applications fetch data asynchronously, so… force of habit?</p><p>Now, instead of calling a mutation method directly at the root level, it is called within the context of a <code>Post</code>:</p><pre><code class="language-js">mutation upvote {
Post {
upvote(postId: 3) {
votes
}
}
}</code></pre><p>And this returns:</p><pre><code class="language-json">{
"data": {
"Post": {
"upvote": {
"votes": 2
}
}
}
}</code></pre><p>So far, so good. The methods could be DRYed up further by moving the <code><strong>postId</strong></code><strong> </strong>argument to the top level:</p><pre><code class="language-js">extend type Mutation {
Post
(postId: Int!): PostOps
}
type PostOps {
upvote: Post
downvote: Post
}</code></pre><p>The <code>PostOp</code> resolvers would remain unchanged: they still take a <code>postId</code> parameter, but that parameter is passed from <code>Post</code> to <code>PostOps</code>. The next example will explain how this works in detail.</p><h3 id="authors-and-books">Authors and Books</h3><p>The Authors in my application not only author Posts, but some have authored Books as well. I want to perform classical Create, Update, and Delete operations on the list of books authored. The <code>AuthorOps</code> are then:</p><pre><code class="language-js">input AddBookInput {
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
}</code></pre><p>In GraphQL, <a href="http://graphql.org/graphql-js/mutations-and-input-types/" rel="noopener">Mutations take their own Input types</a> as parameters. This is commonly necessary for entities that have autogenerated IDs. In the Query type, Author ID may be required, but in the AuthorInput type, it isn’t nor can it be (the ID is generated).</p><p>In this case, ISBN is the non-generated Book ID, so is included in <code>CreateBookInput</code>. Books also have an Author. Where is that going to come from? It turns out that <code>authorId</code> gets passed to the <code>addBook</code> resolver from the context from which the create operation is called, namely <code>AuthorOps</code>:</p><pre><code class="language-js">extend type Mutation {
Post: PostOps
Author(id: Int!): AuthorOps
}</code></pre><p>The resolver for <code>AuthorOps</code> looks like:</p><pre><code class="language-js">const addBook = (book, authorId) =&gt; {
console.log("addBook", book, authorId)
return new Promise((resolve, reject) =&gt; {
book.authorId = authorId
books.push(book)
resolve(books.length)
})
}
const removeBook = (book, authorId) =&gt; {
return new Promise((resolve, reject) =&gt; {
books = books.filter(b =&gt; b.ISBN !== book.ISBN &amp;&amp; b.authorId === authorId);
resolve(books.length)
})
}
const updateBook = (book, authorId) =&gt; {
return new Promise((resolve, reject) =&gt; {
let old = books.find(b =&gt; b.ISBN === book.ISBN &amp;&amp; b.authorId === authorId);
if (!old) {
reject(`Book with ISBN = ${book.ISBN} not found`)
return
}
resolve(Object.assign(old, book))
})
}
const AuthorOps = (authorId) =&gt; ({
addBook: ({
input
}) =&gt; addBook(input, authorId),
removeBook: ({
input
}) =&gt; removeBook(input, authorId),
updateBook: ({
input
}) =&gt; updateBook(input, authorId)
})</code></pre><p>Now let’s create a book and update it:</p><pre><code class="language-js">mutation addAndUpdateBook {
Author(id: 4) {
addBook(input: {ISBN: "922-12312455", title: "Flimwitz the Magnificent"})
}
Author(id: 4) {
updateBook(input: {ISBN: "922-12312455", title: "Flumwitz the Magnificent"}) {
authorId
title
}
}
}</code></pre><p>The response is:</p><pre><code class="language-json">{
"data": {
"Author": {
"addBook": 4,
"updateBook": {
"authorId": 4,
"title": "Flumwitz the Magnificent"
}
}
}
}</code></pre><h4 id="what-about-book-">What about “Book”?</h4><p>You may notice that there is actually a subcontext at play. Notice that we have mutations named <code><strong>addBook</strong></code>, <code><strong>updateBook</strong></code>, <code><strong>removeBook</strong></code>. I could reflect this in the schema:</p><pre><code class="language-js">type AuthorOps {
Book: BookOps
}
type BookOps {
add(input: AddBookInput!): Int
remove(input: RemoveBookInput! ): Boolean
update(input: UpdateBookInput!): Book
}</code></pre><p>Nothing stops you from adding contexts as deep as you like, but be aware that the returned results are nested deeper each time this technique is used:</p><pre><code class="language-json">&gt;&gt;&gt; RESPONSE &gt;&gt;&gt;
{
"data": {
"Author": {
"Book": {
"add": 4,
"update": {
"authorId": 4,
"title": "Flumwitz the Magnificent"
}
}
}
}
}</code></pre><p>This is quite similar to the structure GraphQL queries return, but for mutation operations deep hierarchies can get in the way: you have to “dig deep” to figure out if your mutation operation was successful. In some cases, a flatter response may be better. Still, a shallow organization of mutations in a few high-level contexts seems better than none.</p><p>Working source code for this post can be found <a href="https://github.com/JeffML/graphql-crud2" rel="noopener">on my Github account</a>.</p>
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
