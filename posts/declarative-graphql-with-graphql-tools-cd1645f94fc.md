---
card: "https://cdn-media-1.freecodecamp.org/images/1*-AdNar_hX9-ougYftbv3qg.jpeg"
tags: [GraphQL]
description: "I’ve been working with GraphQL for a few months now, but only"
author: "Milad E. Fahmy"
title: "Declarative GraphQL: write less code and get more done with graphql-tools"
created: "2021-08-16T10:22:22+02:00"
modified: "2021-08-16T10:22:22+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-graphql tag-javascript tag-web-development tag-programming tag-software-development ">
<header class="post-full-header">
<h1 class="post-full-title">Declarative GraphQL: write less code and get more done with graphql-tools</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*-AdNar_hX9-ougYftbv3qg.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*-AdNar_hX9-ougYftbv3qg.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*-AdNar_hX9-ougYftbv3qg.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*-AdNar_hX9-ougYftbv3qg.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*-AdNar_hX9-ougYftbv3qg.jpeg" alt="Declarative GraphQL: write less code and get more done with graphql-tools">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I’ve been working with GraphQL for a few months now, but only recently began using Apollo’s graphql-tools library. After learning a few idioms, I am able to mock up a functional API quickly. This is largely due to its low-code, declarative approach to type definitions.</p><h3 id="starting-with-their-example">Starting with their example</h3><p>Apollo has an interactive <a href="https://launchpad.graphql.com/" rel="noopener">LaunchPad</a> web site, like the ones covered in my <a href="https://medium.com/@jefflowery/staggered-by-swagger-82acf85f3c3b" rel="noopener">Swagger series</a>. There are several example schemas you can use, and for this article I will use their<a href="https://launchpad.graphql.com/1jzxrj179" rel="noopener"> Post and Authors schema</a>. You can download or fork the code.</p><p>I will be rearranging the project folders. For this post I’ll download and store it in Github, so I can branch and modify the code through each step. Along the way, I’ll link the branches to this post.</p><h4 id="the-basics">The basics</h4><ul><li><strong>declaring schema types</strong></li></ul><p>In the Launchpad, you’ll see a <code>typeDefs</code> template literal:</p><pre><code class="language-js">const typeDefs = `
type Author {
id: Int!
firstName: String
lastName: String
posts: [Post] # the list of Posts by this author
}
type Post {
id: Int!
title: String
author: Author
votes: Int
}
# the schema allows the following query:
type Query {
posts: [Post]
author(id: Int!): Author
}
# this schema allows the following mutation:
type Mutation {
upvotePost (
postId: Int!
): Post
}
`;</code></pre><p>There are two <strong>entities</strong> defined, <code>Author</code> and <code>Post</code>. In addition, there are two “magic” <strong>types</strong>: <code>Query</code> and <code>Mutation</code>. The Query type defines the root <code>accessors</code>. In this case, there’s an accessor to fetch all <code>Posts</code>, and another to fetch a single <code>Author</code> by <code>ID</code>.</p><p>Note there is no way to directly query for a list of authors or for a single post. It is possible to add such queries later.</p><ul><li><strong>declaring resolvers</strong></li></ul><p>Resolvers provide the necessary logic to support the schema. They are written as a JavaScript object with keys that match the types defined in the schema. The <code>resolver</code> shown below operates against static data, which I’ll cover in a moment.</p><pre><code class="language-js">const resolvers = {
Query: {
posts: () =&gt; posts,
author: (_, { id }) =&gt; find(authors, { id: id }),
},
Mutation: {
upvotePost: (_, { postId }) =&gt; {
const post = find(posts, { id: postId });
if (!post) {
throw new Error(`Couldn't find post with id ${postId}`);
}
post.votes += 1;
return post;
},
},
Author: {
posts: (author) =&gt; filter(posts, { authorId: author.id }),
},
Post: {
author: (post) =&gt; find(authors, { id: post.authorId }),
},
};</code></pre><p>To link <code>schema</code> and <code>resolver</code> together, we’ll create an executable schema instance:</p><pre><code class="language-js">export const schema = makeExecutableSchema({
typeDefs,
resolvers,
});</code></pre><ul><li><strong>the data source</strong></li></ul><p>For this simple example, the data comes from two arrays of objects defined as constants: <code><strong>authors</strong></code><strong> </strong>and <code><strong>posts</strong></code>:</p><pre><code class="language-js">const authors = [
{ id: 1, firstName: 'Tom', lastName: 'Coleman' },
{ id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
{ id: 3, firstName: 'Mikhail', lastName: 'Novikov' },
];
const posts = [
{ id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
{ id: 2, authorId: 2, title: 'Welcome to Meteor', votes: 3 },
{ id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
{ id: 4, authorId: 3, title: 'Launchpad is Cool', votes: 7 },
];</code></pre><ul><li><strong>the server</strong></li></ul><p>You can serve up the executable schema through <strong>graphql_express</strong>, <strong>apollo_graphql_express</strong>, or <strong>graphql-server-express. </strong>We see that in this example.</p><p>The important bits are:</p><pre><code class="language-js">import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { schema, rootValue, context } from './schema';
const PORT = 3000;
const server = express();
server.use('/graphql', bodyParser.json(), graphqlExpress(request =&gt; ({
schema,
rootValue,
context: context(request.headers, process.env),
})));
server.use('/graphiql', graphiqlExpress({
endpointURL: '/graphql',
}));
server.listen(PORT, () =&gt; {
console.log(`GraphQL Server is now running on
http://localhost:${PORT}/graphql`);
console.log(`View GraphiQL at
http://localhost:${PORT}/graphiql`);
makeExecutableSchema
} from 'graphql-tools';
import {
schema as authorpostsSchema,
resolvers as authorpostsResolvers
} from './authorposts';
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
const schema = [...baseSchema, ...authorpostsSchema]
const options = {
typeDefs: schema,
resolvers: {...authorPostResolvers}
}
const executableSchema = makeExecutableSchema(options);
authors,
posts
} from './dataSource';
const rootResolvers = {
Query: {
posts: () =&gt; posts,
author: (_, {
id
}) =&gt; authors.find(a =&gt; a.id === id)
},
Mutation: {
upvotePost: (_, {
postId
}) =&gt; {
const post = posts.find(p =&gt; p.id === postId);
if (!post) {
throw new Error(`Couldn't find post with id ${postId}`);
}
post.votes += 1;
return post;
}
},
Author: {
posts: (author) =&gt; posts.filter(p =&gt; p.authorId === author.id)
},
Post: {
author: (post) =&gt; authors.find(a =&gt; a.id === post.authorId)
}
};
`
type Author {
id: Int!
firstName: String
lastName: String
posts: [Post] # the list of Posts by this author
}
type Post {
id: Int!
title: String
author: Author
votes: Int
}
# the schema allows the following query:
extend type Query {
posts: [Post]
author(id: Int!): Author
}
# this schema allows the following mutation:
extend type Mutation {
upvotePost (
postId: Int!
): Post
}
`
];
type Author {
id: Int!
firstName: String
lastName: String
posts: [Post] # the list of Posts by this author
type Post {
id: Int!
title: String
author: Author
votes: Int
import Post from './components/post'
const typeDefs =
`
# the schema allows the following query:
extend type Query {
posts: [Post]
author(id: Int!): Author
}
# this schema allows the following mutation:
extend type Mutation {
upvotePost (
postId: Int!
): Post
}
`;
id: 1,
description: 'This is good',
}, {
id: 2,
description: 'This is better',
}, {
id: 3,
description: 'This is the best!',
}];
export {
myLittleTypes
type MyLittleType {
id: Int!
description: String
myLittleTypes
} from './dataSource';
const rootResolvers = {
Query: {
myLittleType: (_, {
id
}) =&gt; myLittleTypes.find(t =&gt; t.id === id)
},
};
const typeDefs =
`
# the schema allows the following query:
extend type Query {
myLittleType(id: Int!): MyLittleType
}
`;
export default [typeDefs, MyLittleType];</code></pre><figcaption>schema.js</figcaption></figure><p>Finally, the root schema.js file must combine the schemas and resolvers from both domains:</p><pre><code class="language-js">//...
import {
schema as myLittleTypoSchema,
resolvers as myLittleTypeResolvers
} from './myLittleDomain';
import {
merge
} from 'lodash';
//...
const schema = [...baseSchema, ...authorpostsSchema, ...myLittleTypoSchema]
const options = {
typeDefs: schema,
resolvers: merge(authorpostsResolvers, myLittleTypeResolvers)
}</code></pre><p>Note that I had to include <code><strong>lodash</strong></code><strong> merge </strong>here because of the need for a deep merge of the two <strong>resolvers</strong><em> </em>imports.</p><h3 id="dealing-with-namespace-collisions">Dealing with Namespace Collisions</h3><p>If you are on a large project, you will encounter type name collisions. You might think that Account in one domain would mean the same as Account in another. Yet even if they do mean more or less similar things, chances are the properties and relationships will be different. So technically they are not the same type.</p><p>At the time of this writing, GraphQL uses a single namespace for types.</p><p>How to work around this? Facebook apparently uses a <a href="https://github.com/facebook/graphql/issues/163#issuecomment-241607229" rel="noopener">naming convention</a> for their 10,000 types. As awkward as that seems, it works for them.</p><p>The Apollo graphql-tools stack appears to catch type name duplications. So you should be good there.</p><p>There is an ongoing discussion on <a href="https://github.com/facebook/graphql/issues/163#issuecomment-230163416" rel="noopener">whether</a> to include namespaces in GraphQL. It isn’t a simple decision . I remember the complexities caused by the introduction of <a href="https://www.w3.org/TR/REC-xml-names/" rel="noopener">XML Namespaces</a> 10 years ago.</p><h3 id="where-to-go-from-here">Where to go from here?</h3><p>This post only scratches the surface of how one might organize a large set of GraphQL schemas. The next post will be about mocking GraphQL resolvers, and how it’s possible to mix both real and mocked values in query responses.</p>
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
