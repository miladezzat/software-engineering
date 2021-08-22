---
card: "https://cdn-media-1.freecodecamp.org/images/0*472sv1dYbnObNwS2"
tags: [JavaScript]
description: "GraphQL is a query language for API’s. It shows what are the "
author: "Milad E. Fahmy"
title: "An introduction to GraphQL: how it works and how to use it"
created: "2021-08-16T11:33:17+02:00"
modified: "2021-08-16T11:33:17+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-technology tag-web-development tag-programming tag-graphql ">
<header class="post-full-header">
<h1 class="post-full-title">An introduction to GraphQL: how it works and how to use it</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*472sv1dYbnObNwS2 300w,
https://cdn-media-1.freecodecamp.org/images/0*472sv1dYbnObNwS2 600w,
https://cdn-media-1.freecodecamp.org/images/0*472sv1dYbnObNwS2 1000w,
https://cdn-media-1.freecodecamp.org/images/0*472sv1dYbnObNwS2 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*472sv1dYbnObNwS2" alt="An introduction to GraphQL: how it works and how to use it">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>GraphQL is a query language for API’s. It shows what are the different types of data provided by the server and then the client can pick exactly what it wants.</p><p>Also in GraphQL you can get multiple server resources in one call rather than making multiple REST API calls.</p><p>You can check out <a href="https://graphql.org/" rel="noopener">https://graphql.org/</a> for the full list of benefits.</p><p>The thing is until you see GraphQL in action, it’s hard to understand the benefits. So let’s get started with using GraphQL.</p><p>We will be using GraphQL along with NodeJS in this article.</p><h3 id="pre-requisites">Pre-requisites</h3><p>Install NodeJS from here: <a href="https://nodejs.org/en/" rel="noopener">https://nodejs.org/en/</a>.</p><h3 id="how-to-use-graphql-with-nodejs">How to use GraphQL with NodeJs</h3><p>GraphQL can be used with multiple languages. Here we will focus on how we can use GraphQL with JavaScript using NodeJS.</p><p>Create a Folder called <strong>graphql-with-nodejs</strong>. Go into the project folder and run <code>npm init</code> to create the NodeJS project. The command for this is given below.</p><pre><code class="language-bash">cd graphql-with-nodejs npm init</code></pre><h3 id="install-the-dependencies">Install the Dependencies</h3><p>Install Express using the following command:</p><pre><code class="language-bash">npm install express</code></pre><p>Install GraphQL using the following command. We will be installing GraphQL and GraphQL for Express.</p><pre><code class="language-bash">npm install express-graphql graphql</code></pre><h3 id="nodejs-code">NodeJS Code</h3><p>Create a file called <strong>server.js</strong> inside the project and copy the following code into it:</p><pre><code class="language-js">const express = require('express');
const port = 5000;
const app = express();
app.get('/hello', (req,res) =&gt; {
res.send("hello");
}
);
app.listen(port);
console.log(`Server Running at localhost:${port}`);</code></pre><p>The above code has a single HTTP GET endpoint called <strong>/hello</strong>.</p><p>The end point is created using Express.</p><p>Now let us modify this code to enable GraphQL.</p><h3 id="enabling-graphql-in-the-code">Enabling GraphQL in the code</h3><p>GraphQL will have a single URL endpoint called <strong>/graphql</strong> which will handle all requests.</p><p>Copy the following code into <strong>server.js:</strong></p><pre><code class="language-js">//get all the libraries needed
const express = require('express');
const graphqlHTTP = require('express-graphql');
const {GraphQLSchema} = require('graphql');
const {queryType} = require('./query.js');
//setting up the port number and express app
const port = 5000;
const app = express();
// Define the Schema
const schema = new GraphQLSchema({ query: queryType });
//Setup the nodejs GraphQL server
app.use('/graphql', graphqlHTTP({
schema: schema,
graphiql: true,
}));
app.listen(port);
console.log(`GraphQL Server Running at localhost:${port}`);</code></pre><p>Let us go through this code now.</p><p><strong>graphqlHTTP</strong> enables us to set up a GraphQL server at <strong>/graphql</strong> url. It knows how to handle the request that is coming in.</p><p>This setup is done in the following lines of code:</p><pre><code class="language-js">app.use('/graphql', graphqlHTTP({
schema: schema,
graphiql: true,
}));</code></pre><p>Now let us explore the parameters inside graphqlHTTP.</p><h3 id="graphiql">graphiql</h3><p>graphiql is a Web UI with which you can test the GraphQL endpoints. We will set this to true so that it is easier to test the various GraphQL endpoints we create.</p><h3 id="schema">schema</h3><p>GraphQL has only one external endpoint <strong>/graphql</strong>. This endpoint can have multiple other endpoints doing various things. These endpoints would be specified in the schema.</p><p>The schema would do things like:</p><ul><li>Specify the endpoints</li><li>Indicate the input and output fields for the endpoint</li><li>Indicate what action should be done when an endpoint is hit and so on.</li></ul><p>The Schema is defined as follows in the code:</p><pre><code class="language-js">const schema = new GraphQLSchema({ query: queryType });</code></pre><p>The schema can contain <strong>query</strong> as well as <strong>mutation</strong> types. This article will focus only on the query type.</p><h3 id="query">query</h3><p>You can see in the schema that the <strong>query</strong> has been set to <strong>queryType</strong>.</p><p>We import queryType from <strong>query.js</strong> file using the following command:</p><pre><code class="language-js">const {queryType} = require('./query.js');</code></pre><p><strong>query.js</strong> is a custom file which we will be creating soon.</p><p><strong>query</strong> is where we specify the read-only endpoints in a schema.</p><p>Create a file called as <strong>query.js</strong> in the project and copy the following code into it.</p><pre><code class="language-js">const { GraphQLObjectType,
GraphQLString
} = require('graphql');
//Define the Query
const queryType = new GraphQLObjectType({
name: 'Query',
fields: {
hello: {
type: GraphQLString,
resolve: function () {
return "Hello World";
}
}
}
});
hello
}</code></pre><p>This will give the following output</p><pre><code class="language-js">{
"data": {
"hello": "Hello World"
}
}</code></pre><h3 id="congrats">Congrats ?</h3><p>You have created your first GraphQL endpoint.</p><h3 id="adding-more-endpoints">Adding more endpoints</h3><p>We will create 2 new endpoints:</p><ul><li><strong>movie</strong>: This endpoint will return a movie, given the movie ID</li><li><strong>director</strong>: This endpoint will return a director given the director ID. It will also return all the movies directed by this director.</li></ul><h3 id="adding-data">Adding Data</h3><p>Usually, an application will read data from a Database. But for this tutorial, we will be hardcoding the data in the code itself for simplicity.</p><p>Create a file called <strong>data.js</strong> and add the following code.</p><pre><code class="language-js">//Hardcode some data for movies and directors
let movies = [{
id: 1,
name: "Movie 1",
year: 2018,
directorId: 1
},
{
id: 2,
name: "Movie 2",
year: 2017,
directorId: 1
},
{
id: 3,
name: "Movie 3",
year: 2016,
directorId: 3
}
];
let directors = [{
id: 1,
name: "Director 1",
age: 20
},
{
id: 2,
name: "Director 2",
age: 30
},
{
id: 3,
name: "Director 3",
age: 40
}
];
exports.movies = movies;
exports.directors = directors;</code></pre><p>This file has the movies and directors data. We will be using the data in this file for our endpoints.</p><h3 id="adding-the-movie-endpoint-to-the-query">Adding the movie endpoint to the query</h3><p>The new endpoints will be added to queryType in query.js file.</p><p>The code for the movie endpoint is shown below:</p><pre><code class="language-js">movie: {
type: movieType,
args: {
id: { type: GraphQLInt }
},
resolve: function (source, args) {
return _.find(movies, { id: args.id });
}
}</code></pre><p>The return type of this endpoint is <strong>movieType</strong> which will be defined soon.</p><p><strong>args</strong> parameter is used to indicate the input to the movie endpoint. The input to this endpoint is <strong>id</strong> which is of type <strong>GraphQLInt.</strong></p><p><strong>resolve</strong> function returns the movie corresponding to the id, from the movies list. <strong>find</strong> is a function from <strong>lodash</strong> library used to find an element in a list.</p><p>The complete code for <strong>query.js</strong> is shown below:</p><pre><code class="language-js">const { GraphQLObjectType,
GraphQLString,
GraphQLInt
} = require('graphql');
const _ = require('lodash');
const {movieType} = require('./types.js');
let {movies} = require('./data.js');
//Define the Query
const queryType = new GraphQLObjectType({
name: 'Query',
fields: {
hello: {
type: GraphQLString,
resolve: function () {
return "Hello World";
}
},
movie: {
type: movieType,
args: {
id: { type: GraphQLInt }
},
resolve: function (source, args) {
return _.find(movies, { id: args.id });
}
}
}
});
exports.queryType = queryType;</code></pre><p>From the above code, we can see that <strong>movieType</strong> is actually defined in <strong>types.js.</strong></p><h3 id="adding-the-custom-type-movietype">Adding the Custom Type movieType</h3><p>Create a file called <strong>types.js</strong>.</p><p>Add the following code into types.js</p><pre><code class="language-js">const {
GraphQLObjectType,
GraphQLID,
GraphQLString,
GraphQLInt
} = require('graphql');
// Define Movie Type
movieType = new GraphQLObjectType({
name: 'Movie',
fields: {
id: { type: GraphQLID },
name: { type: GraphQLString },
year: { type: GraphQLInt },
directorId: { type: GraphQLID }
}
});
exports.movieType = movieType;</code></pre><p>It can be seen that <strong>movieType</strong> is created as a <strong>GraphQLObjectType.</strong></p><p>It has 4 fields: <strong>id, name, year and directorId</strong>. The types for each of these fields are specified as well while adding them.</p><p>These fields come directly from the data. In this case, it will be from <strong>movies</strong> list.</p><h3 id="adding-the-query-and-type-for-director-endpoint">Adding the query and type for director endpoint</h3><p>Like movie, even the director endpoint can be added.</p><p>In <strong>query.js</strong>, the director endpoint can be added as follows:</p><pre><code class="language-js">director: {
type: directorType,
args: {
id: { type: GraphQLInt }
},
resolve: function (source, args) {
return _.find(directors, { id: args.id });
}
}</code></pre><p><strong>directorType</strong> can be added as follows in <strong>types.js:</strong></p><pre><code class="language-js">//Define Director Type
directorType = new GraphQLObjectType({
name: 'Director',
fields: {
id: { type: GraphQLID },
name: { type: GraphQLString },
age: { type: GraphQLInt },
movies: {
type: new GraphQLList(movieType),
resolve(source, args) {
return _.filter(movies, { directorId: source.id });
}
}
}
});</code></pre><p>Wait a minute. The <strong>directorType</strong> is slightly different from <strong>movieType</strong>. Why is this?</p><p>Why is there a resolve function inside <strong>directorType?</strong> Previously we saw that resolve functions were present only in the <strong>query…</strong></p><h3 id="the-special-nature-of-directortype">The special nature of directorType</h3><p>When the <strong>director</strong> endpoint is called we have to return the director details, as well as all the movies the director has directed.</p><p>The first 3 fields <strong>id, name, age</strong> in <strong>directorType</strong> are straightforward and come directly from the data (<strong>directors</strong> list).</p><p>The fourth field, <strong>movies,</strong> needs to contain the list of movies by this director.</p><p>For this, we are mentioning that the type of <strong>movies</strong> field is a <strong>GraphQLList of movieType</strong> (List of movies).</p><p>But how exactly will we find all the movies directed by this director?</p><p>For this, we have a <strong>resolve</strong> function inside the movies field. The inputs to this resolve function are <strong>source</strong> and <strong>args</strong>.</p><p>source will have the parent object details.</p><p>Lets say the fields <strong>id =1, name = “Random” and age = 20</strong> for a director. Then <strong>source.id =1, source.name = “Random” and source.age = 20</strong></p><p>So in this example, resolve function finds out all the movies where directorId matches the Id of the required Director.</p><h3 id="code">Code</h3><p>The Entire code for this application is available in this <a href="https://github.com/aditya-sridhar/graphql-with-nodejs" rel="noopener">GitHub repo</a></p><h3 id="testing-the-application">Testing the Application</h3><p>Now let us test the application for different scenarios.</p><p>Run the application using <code>node server.js</code>.</p><p>Go to <strong>localhost:5000/graphql</strong> and try the following inputs.</p><h3 id="movie">movie</h3><p>Input:</p><pre><code class="language-js">{
movie(id: 1) {
name
}
}</code></pre><p>Output:</p><pre><code class="language-js">{
"data": {
"movie": {
"name": "Movie 1"
}
}
}</code></pre><p>From the above, we can see that the client can request exactly what it wants and GraphQL will ensure only those parameters are sent back. Here only <strong>name</strong> field is requested and only that is sent back by the server.</p><p>In <code>movie(id: 1)</code>, id is the input parameter. We are asking the server to send back the movie which has an id of 1.</p><p>Input:</p><pre><code class="language-js">{
movie(id: 3) {
name
id
year
}
}</code></pre><p>Output:</p><pre><code class="language-js">{
"data": {
"movie": {
"name": "Movie 3",
"id": "3",
"year": 2016
}
}
}</code></pre><p>In the above example <strong>name, id and year</strong> fields are requested. So the server sends back all of those fields.</p><h3 id="director">director</h3><p>Input:</p><pre><code class="language-js">{
director(id: 1) {
name
id,
age
}
}</code></pre><p>Output:</p><pre><code class="language-js">{
"data": {
"director": {
"name": "Director 1",
"id": "1",
"age": 20
}
}
}</code></pre><p>Input:</p><pre><code class="language-js">{
director(id: 1) {
name
id,
age,
movies{
name,
year
}
}
}</code></pre><p>Output:</p><pre><code class="language-js">{
"data": {
"director": {
"name": "Director 1",
"id": "1",
"age": 20,
"movies": [
{
"name": "Movie 1",
"year": 2018
},
{
"name": "Movie 2",
"year": 2017
}
]
}
}
}</code></pre><p>In the above example, we see the power of GraphQL. We indicate we want a director with id 1. Also, we indicate we want all the movies by this director. Both the director and movie fields are customizable and the client can request exactly what it wants.</p><p>Similarly, this can be extended to other fields and types. For example, we could run a query like <strong>Find a director with id 1. For this director find all the movies. For each of the movie find the actors. For each actor get the top 5 rated movies</strong> and so on. For this query, we need to specify the relationship between the types. Once we do that, the client can query any relationship it wants.</p><h3 id="congrats-1">Congrats ?</h3><p>You now know the basic concepts of GraphQL.</p><p>You can check out the <a href="https://graphql.github.io/learn/" rel="noopener">documentation</a> to know more about GraphQL</p><h3 id="about-the-author">About the author</h3><p>I love technology and follow the advancements in the field. I also like helping others with my technology knowledge.</p><p>Feel free to connect with me on my LinkedIn account <a href="https://www.linkedin.com/in/aditya1811/" rel="noopener">https://www.linkedin.com/in/aditya1811/</a></p><p>You can also follow me on twitter <a href="https://twitter.com/adityasridhar18" rel="noopener">https://twitter.com/adityasridhar18</a></p><p>My Website: <a href="https://adityasridhar.com/" rel="noopener">https://adityasridhar.com/</a></p><p>Read more of my articles on my blog at <a href="https://adityasridhar.com/">adityasridhar.com.</a></p>
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
