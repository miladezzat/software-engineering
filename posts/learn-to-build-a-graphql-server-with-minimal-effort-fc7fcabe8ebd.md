---
card: "https://cdn-media-1.freecodecamp.org/images/0*5WsW82sZj2yuVHOt"
tags: [JavaScript]
description: "Today in web development, we will be learning how to:"
author: "Milad E. Fahmy"
title: "Learn to Build a GraphQL Server with Minimal Effort"
created: "2021-08-16T10:12:02+02:00"
modified: "2021-08-16T10:12:02+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-graphql tag-web-development tag-tech ">
<header class="post-full-header">
<h1 class="post-full-title">Learn to Build a GraphQL Server with Minimal Effort</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*5WsW82sZj2yuVHOt 300w,
https://cdn-media-1.freecodecamp.org/images/0*5WsW82sZj2yuVHOt 600w,
https://cdn-media-1.freecodecamp.org/images/0*5WsW82sZj2yuVHOt 1000w,
https://cdn-media-1.freecodecamp.org/images/0*5WsW82sZj2yuVHOt 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*5WsW82sZj2yuVHOt" alt="Learn to Build a GraphQL Server with Minimal Effort">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Today in web development, we will be learning how to:</p><ul><li>Easily setup a GraphQL Server with NodeJS</li><li>Mock data without a database using json-server</li><li>Build a CRUD app that speaks GraphQL</li><li>How Apollo saves us a lot of time and effort</li></ul><p>If any of these items interest you, read on! Be sure to check out the <a href="https://github.com/iwilsonq/social-graphql" rel="noopener">source code for this repo</a> if you would like to refer to the completed example.</p><h3 id="gentle-introduction">Gentle Introduction</h3><p>A couple years ago, I spun up my first Node HTTP server with Express. It took only 6 lines of code on my end.</p><pre><code class="language-javascript">const express = require('express')
const app = express()
app.get('/', function(req, res) {
res.send({ hello: 'there' })
})
app.listen(3000, () =&gt; 'Listening at http://localhost:3000')</code></pre><p>This reduced the necessary effort for building server side apps greatly, especially considering we could use our familiar JavaScript.</p><p>The floodgates were opened for countless tutorials and videos on setting up a Node server, usually for building some sort of CRUD REST API in record time.</p><p>CRUD refers to an app, server, or backend that can create, read, update, and delete — perhaps from a real database.</p><p>But this is 2018, we can do much cooler things.</p><p>Let’s replace REST with GraphQL.</p><h3 id="enter-graphql">Enter GraphQL</h3><p>GraphQL is a declarative data fetch and manipulation layer that makes consuming APIs more client friendly.</p><p>Some benefits of consuming data via a GraphQL server are:</p><ul><li>You get exactly the data you are requesting by specifying the fields you need.</li><li>Fewer requests and less over-fetching. GraphQL queries are usually specific enough to avoid grabbing unnecessary records or fields.</li><li>Strongly typed schemas, as opposed to raw JSON fields that have no opinion on the type of data being returned.</li><li>GraphQL playground for data exploration that comes with autocomplete and built-in documentation. If you like working with <a href="https://www.getpostman.com/" rel="noopener">Postman</a>, you would be right at home with this interface.</li></ul><p>That last point in particular makes on-boarding new developers much easier.</p><p>They no longer have to study your hundreds of endpoints on swagger, because they can explore the types and relations between them in this interface.</p><p>More on this soon, let’s get to coding.</p><h3 id="getting-started-and-installing-dependencies">Getting Started and Installing Dependencies</h3><p>Let us start by creating a directory and initializing a <code>package.json</code> file.</p><pre><code>mkdir social-graphql &amp;&amp; cd social-graphql &amp;&amp; npm init -y</code></pre><p>Our tech stack will look like this:</p><ul><li>JavaScript running with Node (no client side code today)</li><li>Babel for writing modern ES6</li><li>Express for quickly setting up an HTTP server</li><li>Apollo Server for all of the useful GraphQL utilities that help us set up the server and build schemas</li><li>json-server for testing on a fake dataset (much easier than querying a real database)</li></ul><pre><code>npm install -S express apollo-server-express graphql json-server axios</code></pre><p>In addition, we’ll have some dev dependencies that’ll assist us.</p><pre><code>npm install -D babel-cli babel-preset-env nodemon npm-run-all</code></pre><p>With the dependencies out of the way, we can get into coding.</p><h4 id="starting-with-a-basic-http-server">Starting with a basic HTTP server</h4><p>Let’s create an HTTP server that handles the index route. That is, if I run the server and navigate to <a href="http://localhost:3500" rel="noopener">http://localhost:3500</a> I should see the JSON message, as opposed to ‘Cannot GET “/”’.</p><p>Create an <code>index.js</code> file:</p><pre><code class="language-javascript">import express from 'express'
const PORT = process.env.PORT || 3500
const app = express()
app.get('/', function(req, res) {
res.send({ hello: 'there!' })
})
app.listen(PORT, () =&gt; `Listening at http://localhost:${PORT}`)</code></pre><p>This is very similar to the code at the beginning of the article, with the exception of the import syntax and the port being configurable through environment variables.</p><p>To get the import syntax working here, we’ll need to take advantage of our babel preset. Create a file called <code>.babelrc</code> and:</p><pre><code>{
"presets": ["env"]
}</code></pre><p>Finally, to run the server, update the start script in <code>package.json</code> to this:</p><pre><code>"scripts": {
"dev:api": "nodemon --exec 'babel-node index.js'"
}</code></pre><p>And then enter <code>npm run dev:api</code> in your terminal. By navigating to <a href="http://localhost:3500" rel="noopener">http://localhost:3500</a> you will be able to see a response that says “hello: there!”.</p><p>Unlike the more typical <code>node index.js</code> in an <code>npm start</code> script, we are using a dev command along with nodemon executing babel-node.</p><p>Nodemon restarts your dev server whenever you save files so that you don’t have to. Usually it executes with <code>node</code>, but we are telling it to execute with <code>babel-node</code> so it handles our fancy ES6 imports.</p><h4 id="upgrading-to-apollo">Upgrading to Apollo</h4><p>Alright, we have put together a basic HTTP server that can serve REST endpoints. Let us update it in order to serve GraphQL.</p><pre><code class="language-js">import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { resolvers, typeDefs } from './schema'
const PORT = process.env.PORT || 3500
const app = express()
const server = new ApolloServer({
typeDefs,
resolvers,
playground: true
})
server.applyMiddleware({ app })
app.get('/', (req, res) =&gt; {
res.send({ hello: 'there!' })
})
app.listen(PORT, () =&gt;
console.log(`Listening at http://localhost:${PORT}/graphql`)
)</code></pre><p>Then, inside a new file that I will call <code>schema.js</code>, insert:</p><pre><code class="language-js">import { gql } from 'apollo-server-express'
export const typeDefs = gql`
type Query {
users: String
}
`
export const resolvers = {
Query: {
users() {
return "This will soon return users!"
}
}
"dev": "npm-run-all --parallel dev:*",
"dev:api": "nodemon --exec 'babel-node index.js' --ignore db.json",
"dev:json": "json-server --watch db.json"
}</code></pre><p>Re-run the server with <code>npm run dev</code> and press on.</p><p>In a GraphQL server, there is a concept of the <strong>root query</strong>. This query type is the entry point for any data fetch requests to our GraphQL schema. For us, it looks like this:</p><pre><code class="language-js">type Query {
users: String
}</code></pre><p>If we are serving users, posts, or airplanes, the client that is requesting data must do it by going through the root query.</p><pre><code class="language-js">type Query {
users: [User] # here the "[]"s mean these are returning lists
posts: [Post]
airplanes: [Airplane]
}</code></pre><p>For instance, if we wanted to define a new query on our server, we would have to update at least two places.</p><ol><li>Add the query under the Query type within our type definitions.</li><li>Add a resolver function under the Query object in our resolvers object.</li></ol><p>We would then need to make sure we have the correct type of the return data. For a lists of users, that means returning an array of objects, each with a name, email, age, friends, and ID.</p><p>Our current schema has our users query returning a simple string. This is no good, as we expect <strong>user</strong> data to come back from this route.</p><p>Update <code>schema.js</code> as follows:</p><pre><code class="language-js">export const typeDefs = gql`
type User {
id: ID
name: String
age: Int
email: String
friends: [User]
}
type Query {
users: [User]
}
`</code></pre><p>Great, we have the user type, and the root query that returns some list of users.</p><p>Let us update the resolver:</p><pre><code class="language-js">export const resolvers = {
Query: {
users() {
return userModel.list()
}
}
}</code></pre><p>Inside of our resolver, we call list from the <code>userModel</code>, which we have yet to define.</p><p>Inside a new file called <code>models.js</code>, add the following:</p><pre><code class="language-js">import axios from 'axios'
class User {
constructor() {
this.api = axios.create({
baseURL: 'http://localhost:3000' // json-server endpoint
})
}
list() {
return this.api.get('/users').then(res =&gt; res.data)
}
}
export default new User()</code></pre><p>This class forms an abstraction layer over the logic that directly handles our data.</p><p>Finally, at the top of <code>schema.js</code>, add this import:</p><pre><code>import userModel from './models'</code></pre><p>Back to <a href="http://localhost:3500/graphql," rel="noopener">http://localhost:3500/graphql,</a> paste and run this query:</p><pre><code class="language-js">query Users {
users {
id
name
email
}
users {
id
name
friends {
id
name
}
}
}</code></pre><p>In order to do this, note the shape of data in our <code>db.json</code> file: each user has a friends field which is an array of objects keyed by ID.</p><p>Basically, we are going to make some sort of request for each ID that we find, for each user.</p><p>Does it sound like an intense computation?</p><p>It is, we would be executing a new query to our data store for every single friend of every single user we retrieve.</p><p>Implementing some sort of cache would help tremendously in reducing the amount of work done to complete the query — but let us not worry about optimizing it for now.</p><p>In <code>models.js</code>, and this <code>find</code> method to the User class:</p><pre><code class="language-js">class User {
constructor() {
this.api = axios.create({
baseURL: 'http://localhost:3000' // json-server endpoint
})
}
list() {
return this.api.get('/users').then(res =&gt; res.data)
}
find(id) {
return this.api.get(`/users/${id}`).then(res =&gt; res.data)
}
}</code></pre><p>Now we can use this method in a new User resolver. The difference in this resolver is that it gets used when it is trying to resolve connections to a particular type, <code>friends</code> here.</p><p>Otherwise, the query would not know how to resolve a list of Users when it sees <code>friends</code>.</p><pre><code class="language-js">export const resolvers = {
Query: {
users() {
return userModel.list()
}
},
User: {
friends(source) {
if (!source.friends || !source.friends.length) {
return
}
return Promise.all(
source.friends.map(({ id }) =&gt; userModel.find(id))
)
}
},
}</code></pre><p>In the friends method, source is the parent value that the resolver function gets called with. That is, for the user with id 0, Peck Montoya, the value of source is the whole object with the list of friend ids.</p><p>For root queries, source is most often undefined, because the root query is not resolved from a particular source.</p><p>The friends method returns when all of the requests to find individual users have been resolved.</p><p>Now try running this query if you didn’t try earlier:</p><pre><code class="language-js">query UsersAndFriends {
users {
id
name
friends {
id
name
}
}
}</code></pre><h4 id="mutations-creating-a-user">Mutations: Creating a User</h4><p>So far we have just been getting data. What if we wanted to mutate data?</p><p>Let’s start by creating a user with a name and age.</p><p>Take a look at this mutation:</p><pre><code class="language-js">mutation CreateUser($name: String!, $email: String, $age: Int) {
createUser(name: $name, email: $email, age: $age) {
name
email
age
}
}</code></pre><p>Some differences at first glance:</p><ul><li>we denote this code with “mutation” rather than “query”</li><li>we pass two sets of similar looking arguments</li></ul><p>The arguments are basically type declarations for the variables expected by our query.</p><p>If there is a mismatch between those types and the ones passed by a client such as a web or mobile app, the GraphQL server will throw an error.</p><p>To get this query to work now, let us first update the User class in <code>model.js</code>:</p><pre><code class="language-js">create(data) {
data.friends = data.friends
? data.friends.map(id =&gt; ({ id }))
: []
return this.api.post('/users', data).then(res =&gt; res.data)
}</code></pre><p>When we fire off this request, json-server will append a new user with the data we passed up.</p><p>Now update <code>schema.js</code> to the following:</p><pre><code class="language-js">export const typeDefs = gql`
# other types...
type Mutation {
createUser(name: String!, email: String, age: Int): User
}
`
export const resolvers = {
// other resolvers...
Mutation: {
createUser(source, args) {
return userModel.create(args)
}
}
}</code></pre><p>At this point, the query should work. But we can do a little better.</p><h4 id="simplifying-query-mutation-arguments">Simplifying Query &amp; Mutation Arguments</h4><p>Rather than write out every single argument for the mutation, we can define <strong>input types</strong>. This will make future mutations and queries we write more composable.</p><pre><code class="language-javascript">export const typeDefs = gql`
# other types...
input CreateUserInput {
id: Int
name: String
age: Int
email: String
friends: [Int]
}
type Mutation {
createUser(input: CreateUserInput!): User
}
`
export const resolvers = {
// other resolvers...
Mutation: {
createUser(source, args) {
return userModel.create(args.input)
}
}
}
</code></pre><p>See that if we wanted to implement an UpdateUser mutation, we could probably take advantage of this new input type.</p><p>Now try out this mutation:</p><pre><code class="language-javascript">mutation CreateUser($input: CreateUserInput!) {
createUser(input: $input) {
name
email
age
friends {
id
name
}
}
}</code></pre><p>In order to populate the variables that go into the query, click and expand the tab labeled “Query Variables“ in the lower left of the GraphQL playground.</p><p>Then, input this JSON:</p><pre><code class="language-js">{
"input": {
"name": "Indigo Montoya",
"email": "indigomontoya@gmail.com",
"age": 29,
"id": 13,
"friends": [1,2]
}
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
