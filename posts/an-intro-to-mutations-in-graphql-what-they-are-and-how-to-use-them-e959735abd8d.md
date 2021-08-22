---
card: "https://cdn-media-1.freecodecamp.org/images/0*-z0QCz9YmonRiRBq"
tags: [GraphQL]
description: "This blog post is a continuation of my previous blog post on "
author: "Milad E. Fahmy"
title: "An intro to mutations in GraphQL: what they are and how to use them"
created: "2021-08-16T11:32:47+02:00"
modified: "2021-08-16T11:32:47+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-graphql tag-javascript tag-programming tag-technology tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">An intro to mutations in GraphQL: what they are and how to use them</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*-z0QCz9YmonRiRBq 300w,
https://cdn-media-1.freecodecamp.org/images/0*-z0QCz9YmonRiRBq 600w,
https://cdn-media-1.freecodecamp.org/images/0*-z0QCz9YmonRiRBq 1000w,
https://cdn-media-1.freecodecamp.org/images/0*-z0QCz9YmonRiRBq 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*-z0QCz9YmonRiRBq" alt="An intro to mutations in GraphQL: what they are and how to use them">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>This blog post is a continuation of my previous blog post on GraphQL Basics. <a href="https://medium.freecodecamp.org/an-introduction-to-graphql-how-it-works-and-how-to-use-it-91162ecd72d0" rel="noopener">Click Here</a> to check out the GraphQL Basics post.</p><p>It is necessary to read the GraphQL Basics post to make the best use of this article.</p><h3 id="what-is-a-mutation-in-graphql">What is a mutation in GraphQL?</h3><p>Whenever you want to write data back into the server, mutations are used.</p><h3 id="how-are-mutation-and-query-different">How are mutation and query different?</h3><p><strong>Query</strong> is used when you want to read some data from the server. <strong>Mutation</strong> is used when you want to write data back to the server.</p><p>But wait. Can’t I go to the resolver in the <strong>query</strong> and do a write operation?</p><p>Though it is possible to do a write operation in a <strong>query</strong>, it shouldn’t be done. It is necessary to separate the read the write operations, and hence <strong>mutations</strong> are needed.</p><h3 id="code">Code</h3><p><a href="https://github.com/aditya-sridhar/graphql-with-nodejs" rel="noopener">Click Here</a> to get the code from my previous blog post. We will be adding the mutation logic to this code in this article.</p><h3 id="add-movie-mutation">Add movie mutation</h3><p>Let us create a mutation which can be used to add a new movie.</p><p>Create a new file called <strong>mutation.js</strong>. Copy the following code into <strong>mutation.js</strong>:</p><pre><code class="language-js">const { GraphQLObjectType
} = require('graphql');
const _ = require('lodash');
const {movieType} = require('./types.js');
const {inputMovieType} = require('./inputtypes.js');
let {movies} = require('./data.js');
const mutationType = new GraphQLObjectType({
name: 'Mutation',
fields: {
addMovie: {
type: movieType,
args: {
input: { type: inputMovieType }
},
resolve: function (source, args) {
let movie = {
id: args.input.id,
name: args.input.name,
year: args.input.year,
directorId: args.input.directorId};
movies.push(movie);
return _.find(movies, { id: args.input.id });
}
}
}
});
exports.mutationType = mutationType;</code></pre><p>You will notice that a mutation looks very similar to a query. The main difference is that the name of the <strong>GraphQLObjectType</strong> is <strong>Mutation</strong>.</p><p>Here we have added a mutation called as <strong>addMovie</strong> which has a return type of <strong>movieType</strong> ( <em>movieType</em> was covered in the <a href="https://adityasridhar.com/posts/what-is-graphql-and-how-to-use-it" rel="noopener">previous</a> blog ).</p><p>In args, we are mentioning that we need a parameter called <strong>input</strong> which is of type <strong>inputMovieType</strong></p><p>So what is <strong>inputMovieType</strong> here?</p><h3 id="input-types">Input types</h3><p>It is possible that multiple mutations need the same input arguments. So it is a good practice to create <strong>Input Types</strong> and reuse the Input Types for all these mutations.</p><p>Here we are creating an input type for the movie called <strong>inputMovieType</strong>.</p><p>We can see that <strong>inputMovieType, in turn,</strong> comes from <strong>inputtypes.js</strong> file. Let us create this now.</p><p>Create a new file called <strong>inputtypes.js.</strong></p><p>Copy the following code into inputtypes.js:</p><pre><code class="language-js">const {
GraphQLInputObjectType,
GraphQLID,
GraphQLString,
GraphQLInt
} = require('graphql');
inputMovieType = new GraphQLInputObjectType({
name: 'MovieInput',
fields: {
id: { type: GraphQLID },
name: { type: GraphQLString },
year: { type: GraphQLInt },
directorId: { type: GraphQLID }
}
});
exports.inputMovieType = inputMovieType;</code></pre><p>We can see that an Input Type looks exactly like any other Type in GraphQL. <strong>GraphQLInputObjectType</strong> is used to create an Input Type, while <strong>GraphQLObjectType</strong> is used to create normal Types.</p><h3 id="resolve-function-of-a-mutation">Resolve function of a mutation</h3><p>The resolve function of a mutation is where the actual write operation happens.</p><p>In a real application, this can be a Database write operation.</p><p>For this example, we are just adding the data to the movies array and then returning the added movie back.</p><pre><code class="language-js">resolve: function (source, args) {
let movie = {
id: args.input.id,
name: args.input.name,
year: args.input.year,
directorId: args.input.directorId};
movies.push(movie);
return _.find(movies, { id: args.input.id });
}</code></pre><p>The above code in resolve does the following actions:</p><ul><li>Gets the input movie parameters from <strong>input</strong> arg.</li><li>Adds the new movie to the movies array</li><li>Returns the new movie which was added by fetching it from the movies array</li></ul><h3 id="add-director-mutation">Add director mutation</h3><p>Let us create a mutation which can be used to add a new director.</p><p>This would be the same as adding the movie Mutation.</p><p><strong>inputtypes.js</strong> with director Mutation added:</p><pre><code class="language-js">const {
GraphQLInputObjectType,
GraphQLID,
GraphQLString,
GraphQLInt
} = require('graphql');
inputMovieType = new GraphQLInputObjectType({
name: 'MovieInput',
fields: {
id: { type: GraphQLID },
name: { type: GraphQLString },
year: { type: GraphQLInt },
directorId: { type: GraphQLID }
}
});
inputDirectorType = new GraphQLInputObjectType({
name: 'DirectorInput',
fields: {
id: { type: GraphQLID },
name: { type: GraphQLString },
age: { type: GraphQLInt }
}
});
exports.inputMovieType = inputMovieType;
exports.inputDirectorType = inputDirectorType;</code></pre><p><strong>mutation.js</strong> after adding <strong>addDirector</strong> mutation:</p><pre><code class="language-js">const { GraphQLObjectType
} = require('graphql');
const _ = require('lodash');
const {movieType,directorType} = require('./types.js');
const {inputMovieType,inputDirectorType} = require('./inputtypes.js');
let {movies,directors} = require('./data.js');
const mutationType = new GraphQLObjectType({
name: 'Mutation',
fields: {
addMovie: {
type: movieType,
args: {
input: { type: inputMovieType }
},
resolve: function (source, args) {
let movie = {
id: args.input.id,
name: args.input.name,
year: args.input.year,
directorId: args.input.directorId};
movies.push(movie);
return _.find(movies, { id: args.input.id });
}
},
addDirector: {
type: directorType,
args: {
input: { type: inputDirectorType }
},
resolve: function (source, args) {
let director = {
id: args.input.id,
name: args.input.name,
age: args.input.age};
directors.push(director);
return _.find(directors, { id: args.input.id });
}
}
}
});
exports.mutationType = mutationType;</code></pre><h3 id="enabling-the-mutations">Enabling the mutations</h3><p>Until now we have defined the mutation endpoints and their functionalities. But we haven’t enabled the mutations yet.</p><p>To enable them, the mutations have to be added to the schema.</p><p>The mutation is added using the following code in <strong>server.js</strong>:</p><pre><code class="language-js">// Define the Schema
const schema = new GraphQLSchema(
{
query: queryType,
mutation: mutationType
}
);</code></pre><p>Complete Code in <strong>server.js</strong> after adding the mutation:</p><pre><code class="language-js">//get all the libraries needed
const express = require('express');
const graphqlHTTP = require('express-graphql');
const {GraphQLSchema} = require('graphql');
const {queryType} = require('./query.js');
const {mutationType} = require('./mutation.js');
//setting up the port number and express app
const port = 5000;
const app = express();
// Define the Schema
const schema = new GraphQLSchema(
{
query: queryType,
mutation: mutationType
}
);
//Setup the nodejs GraphQL server
app.use('/graphql', graphqlHTTP({
schema: schema,
graphiql: true,
}));
app.listen(port);
console.log(`GraphQL Server Running at localhost:${port}`);</code></pre><h3 id="code-1">Code</h3><p>The complete code for this article can be found in <a href="https://github.com/aditya-sridhar/graphql-mutations-with-nodejs" rel="noopener">this git repo</a>.</p><h3 id="testing-the-mutation-end-points">Testing the mutation end points</h3><p>Run the application using the following command:</p><pre><code class="language-bash">node server.js</code></pre><p>Open your web browser and go to the following URL <strong>localhost:5000/graphql</strong></p><h3 id="test-addmovie-mutation-endpoint">Test addMovie mutation endpoint</h3><p>Input:</p><pre><code class="language-js">mutation {
addMovie(input: {id: 4,name: "Movie 4", year: 2020,directorId:4}){
id,
name,
year,
directorId
}
}</code></pre><p>Output:</p><pre><code class="language-js">{
"data": {
"addMovie": {
"id": "4",
"name": "Movie 4",
"year": 2020,
"directorId": "4"
}
}
}</code></pre><p>Input:</p><pre><code class="language-js">mutation {
addMovie(input: {id: 5,name: "Movie 5", year: 2021,directorId:4}){
id,
name,
year,
directorId
}
}</code></pre><p>Output:</p><pre><code class="language-js">{
"data": {
"addMovie": {
"id": "5",
"name": "Movie 5",
"year": 2021,
"directorId": "4"
}
}
}</code></pre><h3 id="test-adddirector-mutation-endpoint">Test addDirector mutation endpoint</h3><p>Input:</p><pre><code class="language-js">mutation {
addDirector(input: {id: 4,name: "Director 4", age: 30}){
id,
name,
age,
movies{
id,
name,
year
}
}
}</code></pre><p>Output:</p><pre><code class="language-js">{
"data": {
"addDirector": {
"id": "4",
"name": "Director 4",
"age": 30,
"movies": [
{
"id": "4",
"name": "Movie 4",
"year": 2020
},
{
"id": "5",
"name": "Movie 5",
"year": 2021
}
]
}
}
}</code></pre><h3 id="congrats">Congrats ?</h3><p>You now know about Mutations in GraphQL!</p><p>You can check out the <a href="https://graphql.github.io/learn/" rel="noopener">documentation</a> to know more about GraphQL.</p><h3 id="about-the-author">About the author</h3><p>I love technology and follow the advancements in the field.</p><p>Feel free to connect with me on my LinkedIn account <a href="https://www.linkedin.com/in/aditya1811/" rel="noopener">https://www.linkedin.com/in/aditya1811/</a></p><p>You can also follow me on twitter <a href="https://twitter.com/adityasridhar18" rel="noopener">https://twitter.com/adityasridhar18</a></p><p>My Website: <a href="https://adityasridhar.com/" rel="noopener">https://adityasridhar.com/</a></p><p>Read more of my articles on my blog at <a href="https://adityasridhar.com/posts/what-is-a-mutation-in-graphql-and-how-to-use-it" rel="noopener">adityasridhar.com</a>.</p>
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
