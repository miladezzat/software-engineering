---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9cb38c740569d1a4cac9a0.jpg"
tags: [GraphQL]
description: In my last article, I took the original Apollo LaunchPad Post
author: "Milad E. Fahmy"
title: "Mocking GraphQL with graphql-tools+"
created: "2021-08-15T19:50:47+02:00"
modified: "2021-08-15T19:50:47+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-graphql tag-mocking tag-apollo tag-javascript tag-testing ">
<header class="post-full-header">
<h1 class="post-full-title">Mocking GraphQL with graphql-tools+</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9cb38c740569d1a4cac9a0.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9cb38c740569d1a4cac9a0.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9cb38c740569d1a4cac9a0.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9cb38c740569d1a4cac9a0.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9cb38c740569d1a4cac9a0.jpg" alt="Mocking GraphQL with graphql-tools+">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h4 id="how-to-mock-up-your-graphql-api-with-realistic-values">How to mock up your GraphQL API with realistic values</h4>
<p>In <a href="https://medium.com/@jefflowery/declarative-graphql-with-graphql-tools-cd1645f94fc" rel="noopener">my last article,</a> I took the original Apollo LaunchPad <a href="https://launchpad.graphql.com/1jzxrj179" rel="noopener">Posts and Authors API</a> and broke it down into domains and components. I wanted to illustrate how one could organize a large GraphQL project using <a href="https://github.com/apollographql/graphql-tools" rel="noopener">graphql-tools</a>.</p>
<p>Now I’d like the API to return mock data when I query it. How?</p>
<h3 id="the-original-source">The original source</h3>
<p>In the original Apollo Launchpad example, we used static data structures and simple mapping resolvers to provide output for queries.</p>
<p>For instance, given this query:</p><pre><code class="language-graphql"># Welcome to GraphiQL
query PostsForAuthor {
author(id: 1) {
firstName
posts {
title
votes
}
}
}</code></pre>
<p>The output would be:</p><pre><code class="language-json">{
"data": {
"author": {
"firstName": "Tom",
"posts": [
{
"title": "Introduction to GraphQL",
"votes": 2
}
]
}
}
}</code></pre>
<p>The resolvers object has functions that take care of mapping authors to posts and visa-versa. It’s not truly a mock, though.</p>
<p>The problem is that the more relationships and the more complex the entities become, the more code needs to go into the resolvers. Then more data needs to be provided.</p>
<p>When it comes to testing, tests are likely to sometimes reveal problems in the data or in the resolvers. You really want focus testing of the API itself.</p>
<h3 id="using-mocks">Using mocks</h3>
<p>There are three Node.js modules that make mocking an API quick and easy. The first is part of the <code>graphql-tools</code><strong> </strong>module. Using this module, a beginning step is to require or import the method <code>addMockFunctionsToSchema</code><strong> </strong>from the module into the root <code>schema.js</code> file:</p><pre><code class="language-js">import {
makeExecutableSchema,
addMockFunctionsToSchema
} from 'graphql-tools';</code></pre>
<p>Then, after creating an executable <code>schema</code> by calling <code>createExecutableSchema</code>,<strong> </strong>you add your mocks like so:</p><pre><code class="language-js">    addMockFunctionsToSchema({
schema: executableSchema,
})</code></pre>
<p>Here’s a full listing of the root <code>schema.js</code>:</p>
// and vice-versa Read the complete docs for graphql-tools here: http://dev.apollodata.com/tools/graphql-tools/generate-schema.html
import {
makeExecutableSchema,
addMockFunctionsToSchema
} from 'graphql-tools';
import {
schema as authorpostsSchema,
resolvers as authorpostsResolvers
} from './authorposts';
import {
schema as myLittleTypoSchema,
resolvers as myLittleTypeResolvers
} from './myLittleDomain';
import {
merge
} from 'lodash';
const baseSchema = [
`
type Query {
domain: String
}
type Mutation {
domain: String
}
schema {
query: Query,
mutation: Mutation
}`
]
// Put schema together into one array of schema strings and one map of resolvers, like makeExecutableSchema expects
const schema = [...baseSchema, ...authorpostsSchema, ...myLittleTypoSchema]
const options = {
typeDefs: schema,
resolvers: merge(authorpostsResolvers, myLittleTypeResolvers)
}
const executableSchema = makeExecutableSchema(options);
addMockFunctionsToSchema({
schema: executableSchema
})
export default executableSchema;</code></pre>
<figcaption>schema.js</figcaption>
</figure>
<p>So what’s the output? Executing the same query as before yields:</p><pre><code class="language-json">{
"data": {
"author": {
"firstName": "Hello World",
"posts": [
{
"title": "Hello World",
"votes": -70
},
{
"title": "Hello World",
"votes": -77
}
]
}
}
}</code></pre>
<p>Well, that’s kind of dumb. Every string is “Hello World”, votes are negative, and there will always be exactly two posts per author. We’ll fix that, but first…</p>
<h4 id="why-use-mocks">Why use mocks?</h4>
<p>Mocks are often used in unit tests to separate the functionality being tested from the dependencies that those functions rely on. You want to test the function (the unit), not a whole complex of functions.</p>
<p>At this early stage of development, mocks serve another purpose: to test the tests. In a basic test, you want to ensure first that the test is calling the API correctly, and that the results returned have the expected structure, properties, and types. I think the cool kids call this “shape”.</p>
<p>This offers more limited testing than a queryable data structure, because reference semantics are not enforced.<code> id</code> is meaningless. Nonetheless, mocks offer something to structure your tests around</p>
<h3 id="realistic-mocking">Realistic mocking</h3>
<p>There’s a module called <a href="https://github.com/boo1ean/casual" rel="noopener">casual </a>that I really like. It provides reasonable and variable values for a lot of common data types. If you are demonstrating your new API in front of jaded colleagues, it actually looks like you’ve done something special.</p>
<p>Here’s a wish list for mock values to display:</p>
<ol>
<li>Author’s first name should be <strong>first-name-like</strong></li>
<li>Post titles should be variable <strong>lorem ipsum</strong> text of limited length</li>
<li>votes should be positive or zero</li>
<li>the number of posts should vary between 1 and 7</li>
</ol>
<p>First thing is to create a folder called <code>mocks</code>. Next, we’ll add an <code>index.js</code> file to that folder with the mock methods. Finally, the custom mocks will be added to the generated executable schema.</p>
<p>The <strong>casual </strong>library can generate values by data type (<code>String, ID, Int, …</code>) or by property name. Also, graphql-tools MockList object will be used to vary the number of items in a list — in this case <code>posts</code>. So let’s start.</p>
<p><code>Import</code> both casual and MockList into <code>/mocks/index.js</code>:</p><pre><code class="language-js">import casual from 'casual';
import {
MockList
} from 'graphql-tools';</code></pre>
<p>Now let create a default export with the following properties:</p><pre><code class="language-js">export default {
Int: () =&gt; casual.integer(0),
Author: () =&gt; ({
firstName: casual.first_name,
posts: () =&gt; new MockList([1, 7])
}),
Post: () =&gt; ({
title: casual.title
})
}</code></pre>
<p>The <code>Int</code> declaration takes care of all integer types appearing in our schema and it will ensure that <code>Post.votes</code> will be positive or zero.</p>
<p>Next, <code>Author.firstName</code> will be a reasonable first name. MockList is used to ensure the number of posts associated with each Author will be between 1 and 7. Finally, casual will generate a <strong>lorem ipsum</strong> <code>title</code> for each <code>Post</code>.</p>
<p>Now the generated output varies each time the query is executed. And it looks credible:</p><pre><code class="language-json">{
"data": {
"author": {
"firstName": "Eldon",
"posts": [
{
"title": "Voluptatum quae laudantium",
"votes": 581
},
{
"title": "Vero quos",
"votes": 85
},
{
"title": "Doloribus labore corrupti",
"votes": 771
},
{
"title": "Qui nulla qui",
"votes": 285
}
]
}
}
}</code></pre>
<h3 id="generating-custom-values">Generating custom values</h3>
<p>I just scratched the surface of what casual can do, but it is well-documented and there’s nothing much to add.</p>
<p>Sometimes, though, there are values that have to conform to a standard format. I would like to introduce one more module: <a href="https://www.npmjs.com/package/randexp" rel="noopener">randexp</a>.</p>
<p>randexp allows you to generate values conforming to the regexp expression you provide it. For instance, ISBN numbers have the format:</p>
<p><strong>/ISBN-\d-\d{3}-\d{5}-\d/</strong></p>
<p>Now I can add Books to the schema, add books to Author, and generate ISBN and title for each <code>Book</code>:</p><pre><code class="language-js">// book.js
export default `
type Book {
ISBN: String
title: String
}</code></pre>
<p>mocks.js:</p><pre><code class="language-js">import casual from 'casual';
import RandExp from 'randexp';
import {
MockList
} from 'graphql-tools';
import {
startCase
} from 'lodash';
export default {
Int: () =&gt; casual.integer(0),
Author: () =&gt; ({
firstName: casual.first_name,
posts: () =&gt; new MockList([1, 7]),
books: () =&gt; new MockList([0, 5])
}),
Post: () =&gt; ({
title: casual.title
}),
Book: () =&gt; ({
ISBN: new RandExp(/ISBN-\d-\d{3}-\d{5}-\d/)
.gen(),
title: startCase(casual.title)
})
}</code></pre>
<p>And here’s a new query:</p><pre><code class="language-graphql">query PostsForAuthor {
author(id: 1) {
firstName
posts {
title
votes
}
books {
title
ISBN
}
}
}</code></pre>
<p>Sample response:</p><pre><code class="language-json">{
"data": {
"author": {
"firstName": "Rosemarie",
"posts": [
{
"title": "Et ipsum quo",
"votes": 248
},
{
"title": "Deleniti nihil",
"votes": 789
},
{
"title": "Aut aut reprehenderit",
"votes": 220
},
{
"title": "Nesciunt debitis mollitia",
"votes": 181
}
],
"books": [
{
"title": "Consequatur Veniam Voluptas",
"ISBN": "ISBN-0-843-74186-9"
},
{
"title": "Totam Et Iusto",
"ISBN": "ISBN-6-532-70557-3"
},
{
"title": "Voluptatem Est Sunt",
"ISBN": "ISBN-2-323-13918-2"
}
]
}
}
}</code></pre>
<p>So that’s the basics of mocking using graphql-tools plus a couple of other useful modules .</p>
<p><strong>Note</strong>: I use snippets throughout this post. If you want to follow along in a broader context, sample code is <a href="https://github.com/JeffML/graphql_authors_mock" rel="noopener">here</a>.</p>
<p>The <a href="https://github.com/JeffML/graphql_authors_mock" rel="noopener">Full source</a> is on GitHub for your perusal.</p>
<p>Give me a hand if you found this article informative.</p>
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
