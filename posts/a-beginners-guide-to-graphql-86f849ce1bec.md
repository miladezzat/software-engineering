---
card: "https://cdn-media-1.freecodecamp.org/images/1*sbPjm_cUHedMps6Kdy2F-A.jpeg"
tags: [Programming]
description: "by Leonardo Maldonado"
author: "Milad E. Fahmy"
title: "A Beginner’s Guide to GraphQL"
created: "2021-08-16T11:34:08+02:00"
modified: "2021-08-16T11:34:08+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-javascript tag-software-engineering tag-technology tag-graphql ">
<header class="post-full-header">
<h1 class="post-full-title">A Beginner’s Guide to GraphQL</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*sbPjm_cUHedMps6Kdy2F-A.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*sbPjm_cUHedMps6Kdy2F-A.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*sbPjm_cUHedMps6Kdy2F-A.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*sbPjm_cUHedMps6Kdy2F-A.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*sbPjm_cUHedMps6Kdy2F-A.jpeg" alt="A Beginner’s Guide to GraphQL">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
"dev": "graphpack",
"build": "graphpack build"
}</code></pre><p>We’re going to create a folder called <code>src</code>, and it’s going to be the only folder in our entire server.</p><p>Create a folder called <code>src</code>, after that, inside our folder, we’re going to create three files only.</p><p>Inside our <code>src</code> folder create a file called <code>schema.graphql</code>. Inside this first file, put the following code:</p><pre><code class="language-js">type Query {
hello: String
}</code></pre><p>In this <code>schema.graphql</code> file is going to be our entire GraphQL schema. If you don’t know what it is, I’ll explain later — don't worry.</p><p>Now, inside our <code>src</code> folder, create a second file. Call it <code>resolvers.js</code> and, inside this second file, put the following code:</p><pre><code class="language-js">import { users } from "./db";
const resolvers = {
Query: {
hello: () =&gt; "Hello World!"
}
};
export default resolvers;</code></pre><p>This <code>resolvers.js</code> file is going to be the way we provide the instructions for turning a GraphQL operation into data.</p><p>And finally, inside your <code>src</code> folder, create a third file. Call this <code>db.js</code> and, inside this third file, put the following code:</p><pre><code class="language-js">export let users = [
{ id: 1, name: "John Doe", email: "john@gmail.com", age: 22 },
{ id: 2, name: "Jane Doe", email: "jane@gmail.com", age: 23 }
];</code></pre><p>In this tutorial we’re not using a real-world database. So this <code>db.js</code> file is going to simulate a database, just for learning purposes.</p><p>Now our <code>src</code> folder should look like this:</p><pre><code>src
|--db.js
|--resolvers.js
id: ID!
name: String!
email: String!
age: Int
}</code></pre><p>Each <code>User</code> is going to have an <code>ID</code>, so we gave it an <code>ID</code> type. <code>User</code> is also going to have a <code>name</code> and <code>email</code>, so we gave it a <code>String</code> type, and an <code>age</code>, which we gave an <code>Int</code> type. Pretty simple, right?</p><p>But, what about those <code>! </code>at the end of every line? The exclamation point means that the fields are <strong>non-nullable</strong>, which means that every field must return some data in each query. The only <strong>nullable</strong> field that we’re going to have in our <code>User</code> type will be <code>age</code>.</p><p>In GraphQL, you will deal with three main concepts:</p><ol><li><strong>queries </strong>— the way you’re going to get data from the server.</li><li><strong>mutations</strong> — the way you’re going to modify data on the server and get updated data back (create, update, delete).</li><li><strong>subscriptions</strong> — the way you’re going to maintain a real-time connection with the server.</li></ol><p>I’m going to explain all of them to you. Let’s start with Queries.</p><h3 id="queries">Queries</h3><p>To explain this in a simple way, queries in GraphQL are how you’re going to get data. One of the most beautiful things about queries in GraphQL is that you are just going to get the exact data that you want. No more, no less. This has a huge positive impact in our API — no more over-fetching or under-fetching information as we had with REST APIs.</p><p>We’re going to create our first type Query in GraphQL. All our queries will end up inside this type. So to start, we’ll go to our <code>schema.graphql</code> and write a new type called <code>Query</code>:</p><pre><code class="language-js">type Query {
users: [User!]!
}</code></pre><p>It’s very simple: the <code>users</code><strong> </strong>query will return to us an array of one or more <code>Users</code><strong><em>. </em></strong>It will not return null, because we put in the <code>!</code> , which means it’s a non-nullable query. It should always return something.</p><p>But we could also return a specific user. For that we’re going to create a new query called <code>user</code>. Inside our <code>Query</code> type, put the following code:</p><pre><code class="language-js">user(id: ID!): User!
</code></pre><p>Now our <code>Query</code> type should look like this:</p><pre><code class="language-js">type Query {
users: [User!]!
user(id: ID!): User!
}</code></pre><p>As you see, with queries in GraphQL we can also pass arguments. In this case, to query for a specific <code>user</code>, we’re going to pass its <code>ID</code>.</p><p>But, you may be wondering: how does GraphQL know where get the data? That’s why we should have a <code>resolvers.js</code> file. That file tells GraphQL how and where it's going to fetch the data.</p><p>First, go to our <code>resolvers.js</code> file and import the <code>db.js</code> that we just created a few moments ago. Your <code>resolvers.js</code> file should look like this:</p><pre><code class="language-js">import { users } from "./db";
const resolvers = {
Query: {
hello: () =&gt; "Hello World!"
}
};
export default resolvers;</code></pre><p>Now, we’re going to create our first Query. Go to your <code>resolvers.js</code> file and replace the <code>hello</code> function. Now your Query type should look like this:</p><pre><code class="language-js">import { users } from "./db";
const resolvers = {
Query: {
user: (parent, { id }, context, info) =&gt; {
return users.find(user =&gt; user.id === id);
},
users: (parent, args, context, info) =&gt; {
return users;
}
}
};
export default resolvers;</code></pre><p>Now, to explain how is it going to work:</p><p>Each query resolver has four arguments. In the <code>user</code> function, we’re going to pass <code>id</code> as an argument, and then return the specific <code>user</code> that matches the passed <code>id</code>. Pretty simple.</p><p>In the <code>users</code> function, we’re just going to return the <code>users</code> array that already exists. It’ll always return to us all of our users.</p><p>Now, we’re going to test if our queries are working fine. Go to <code>localhost:4000</code> and put in the following code:</p><pre><code class="language-js">query {
users {
id
name
email
age
}
}</code></pre><p>It should return to you all of our users.</p><p>Or, if you want to return a specific user:</p><pre><code class="language-js">query {
user(id: 1) {
id
name
email
age
}
}</code></pre><p>Now, we’re going to start learning about <strong>mutations</strong>, one of the most important features in GraphQL.</p><h3 id="mutations">Mutations</h3><p>In GraphQL, mutations are the way you’re going to modify data on the server and get updated data back. You can think like the CUD (Create, Update, Delete) of REST.</p><p>We’re going to create our first type mutation in GraphQL, and all our mutations will end up inside this type. So, to start, go to our <code>schema.graphql</code> and write a new type called <code>mutation</code>:</p><pre><code class="language-js">type Mutation {
createUser(id: ID!, name: String!, email: String!, age: Int): User!
updateUser(id: ID!, name: String, email: String, age: Int): User!
deleteUser(id: ID!): User!
}</code></pre><p>As you can see, we’re going to have three mutations:</p><p><code>createUser</code>: we should pass an <code>ID</code>, <code>name</code>, <code>email</code>, and <code>age</code>. It should return a new user to us.</p><p><code>updateUser</code>: we should pass an <code>ID</code>, and a new <code>name</code>, <code>email</code>, or <code>age</code>. It should return a new user to us.</p><p><strong>deleteUser</strong>: we should pass an <code>ID.</code> It should return a new user to us.</p><p>Now, go to our <code>resolvers.js</code> file and <strong>below</strong> the <code>Query</code> object, create a new <code>mutation</code> object like this:</p><pre><code class="language-js">Mutation: {
createUser: (parent, { id, name, email, age }, context, info) =&gt; {
const newUser = { id, name, email, age };
users.push(newUser);
return newUser;
},
updateUser: (parent, { id, name, email, age }, context, info) =&gt; {
let newUser = users.find(user =&gt; user.id === id);
newUser.name = name;
newUser.email = email;
newUser.age = age;
return newUser;
},
deleteUser: (parent, { id }, context, info) =&gt; {
const userIndex = users.findIndex(user =&gt; user.id === id);
if (userIndex === -1) throw new Error("User not found.");
const deletedUsers = users.splice(userIndex, 1);
return deletedUsers[0];
}
}</code></pre><p>Now, our <code>resolvers.js</code> file should look like this:</p><pre><code class="language-js">import { users } from "./db";
const resolvers = {
Query: {
user: (parent, { id }, context, info) =&gt; {
return users.find(user =&gt; user.id === id);
},
users: (parent, args, context, info) =&gt; {
return users;
}
},
Mutation: {
createUser: (parent, { id, name, email, age }, context, info) =&gt; {
const newUser = { id, name, email, age };
users.push(newUser);
return newUser;
},
updateUser: (parent, { id, name, email, age }, context, info) =&gt; {
let newUser = users.find(user =&gt; user.id === id);
newUser.name = name;
newUser.email = email;
newUser.age = age;
return newUser;
},
deleteUser: (parent, { id }, context, info) =&gt; {
const userIndex = users.findIndex(user =&gt; user.id === id);
if (userIndex === -1) throw new Error("User not found.");
const deletedUsers = users.splice(userIndex, 1);
return deletedUsers[0];
}
}
};
export default resolvers;</code></pre><p>Now, we’re going to test if our mutations are working fine. Go to <code>localhost:4000</code> and put in the following code:</p><pre><code class="language-js">mutation {
createUser(id: 3, name: "Robert", email: "robert@gmail.com", age: 21) {
id
name
email
age
}
users {
id
name
email
age
}
}</code></pre><p>You will say it’s very similar to a query, and yes it is. But it works differently.</p><p>When something is updated in the server, the server will run the GraphQL query specified in the subscription, and send a newly updated result to the client.</p><p>We’re not going to work with subscriptions in this specific article, but if you want to read more about them <a href="https://hackernoon.com/from-zero-to-graphql-subscriptions-416b9e0284f3" rel="noopener">click here</a>.</p><h3 id="conclusion">Conclusion</h3><p>As you have seen, GraphQL is a new technology that is really powerful. It gives us real power to build better and well-designed APIs. That’s why I recommend you start to learn it now. For me, it will eventually replace REST.</p><p>Thanks for reading the article.</p><p><a href="https://twitter.com/leonardomso" rel="noopener"><strong>Follow me on Twitter! </strong></a><br><a href="https://github.com/leonardomso" rel="noopener"><strong>Follow me on GitHub!</strong></a></p><p>I’m looking for a remote opportunity, so if have any I’d love to hear about it, so please contact me at my <a href="https://twitter.com/leonardomso" rel="noopener"><strong>Twitter</strong></a>!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
