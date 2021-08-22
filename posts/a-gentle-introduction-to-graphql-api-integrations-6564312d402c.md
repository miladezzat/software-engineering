---
card: "https://cdn-media-1.freecodecamp.org/images/1*A6Cr5WakyAJjuES53YXBow.jpeg"
tags: [GraphQL]
description: "GraphQL is a great alternative to REST (or other HTTP API des"
author: "Milad E. Fahmy"
title: "A gentle introduction to GraphQL API integrations"
created: "2021-08-16T15:40:30+02:00"
modified: "2021-08-16T15:40:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-graphql tag-javascript tag-python tag-api tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">A gentle introduction to GraphQL API integrations</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*A6Cr5WakyAJjuES53YXBow.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*A6Cr5WakyAJjuES53YXBow.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*A6Cr5WakyAJjuES53YXBow.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*A6Cr5WakyAJjuES53YXBow.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*A6Cr5WakyAJjuES53YXBow.jpeg" alt="A gentle introduction to GraphQL API integrations">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>GraphQL is a great alternative to REST (or other HTTP API designs). This is a quick introduction to the core concepts around <em>consuming</em> a GraphQL API.</p><p>To see some examples consuming a GraphQL API:</p><ul><li>In Python, see <a href="https://codewithhugo.com/python-graphql-client-requests-example-using-gql/" rel="noopener">Python GraphQL client requests example using gql</a></li><li>In JavaScript <a href="https://codewithhugo.com/javascript-graphql-client-requests-in-node-and-the-browser-using-graphql.js/" rel="noopener">browser and Node, see last week’s Code with Hugo newsletter</a></li></ul><h3 id="what-is-graphql-and-what-problems-does-it-solve">What is GraphQL and what problems does it solve?</h3><p>GraphQL is <a href="https://graphql.org/" rel="noopener">“a query language for your API”</a>.</p><p>In plain English, it makes the client define what (nested) data it needs.</p><p>If we compare it to <a href="https://en.wikipedia.org/wiki/Representational_state_transfer" rel="noopener">REST</a> approaches:</p><ul><li>the “pure” REST approach is to return IDs (or resource links) for any associations (or nested resources).</li><li>The less pure approach is to expand all the nested stuff.</li></ul><p>The first situation leads to having to make lots of calls to fetch all the data. The second leads to huge payloads and slow load times.</p><p>In GraphQL, the client states in the request what it wants expanded, renamed or whatever else in the response.</p><p>It has some nice side-effects, for example less need to version your API since the client defines what it wants and GraphQL has a way to deprecate fields.</p><h3 id="schema">Schema</h3><p><a href="https://github.com/graphql/graphiql" rel="noopener">GraphiQL</a>, “An in-browser IDE for exploring GraphQL.” is available by navigating to the endpoint in your browser. It’s possible to generate the schema using the GraphQL CLI (requires Node + npm 5+):</p><pre><code>npx graphql-cli get-schema --endpoint $BASE_URL/api/graphql --no-all -o schema.graphql</code></pre><h3 id="queries">Queries</h3><h4 id="graphql-query-concepts">GraphQL query concepts</h4><h4 id="fields">Fields</h4><p>What we would like returned in the query, see <a href="https://graphql.org/learn/queries/#fields/" rel="noopener">the GraphQL documentation for “fields”</a>. The GraphQL query for that returns the fields <code>name</code>, <code>fleeRate</code>, <code>maxCP</code>, <code>maxHP</code>, is the following:</p><pre><code class="language-graphql">{
pokemon(name: "Pikachu") {
name
fleeRate
maxCP
maxHP
}
}</code></pre><h4 id="arguments">Arguments</h4><p>How we are going to filter the query data down, see <a href="https://graphql.org/learn/queries/#arguments" rel="noopener">the GraphQL documentation for “arguments”</a>. To get the names of the first 10 pokemon we use <code>pokemons (first: 10) { FIELDS }</code>to see the output <a href="https://graphql-pokemon.now.sh/?query=%7B%0A%20%20pokemons%20(first%3A%2010)%20%7B%0A%20%20%20%20name%0A%20%20%20%20fleeRate%0A%20%20%20%20maxCP%0A%20%20%20%20maxHP%0A%20%20%7D%0A%7D%0A" rel="noopener">here</a>:</p><pre><code class="language-graphql">{
pokemons (first: 10) {
name
fleeRate
maxCP
maxHP
}
}</code></pre><h4 id="aliases">Aliases</h4><p>Aliases give us the ability to rename fields. (See <a href="https://graphql.org/learn/queries/#aliases" rel="noopener">the GraphQL documentation for “aliases”</a>). We’re actually going to use it to map fields in the query eg. from camel to snake case:</p><pre><code class="language-graphql">{
pokemon(name: "Pikachu") {
evolution_requirements: evolutionRequirements {
amount
name
}
}
}</code></pre><p>Running this query (<a href="https://graphql-pokemon.now.sh/?query=%7B%0A%20%20pokemon(name%3A%20%22Pikachu%22)%20%7B%0A%20%20%20%20evolution_requirements%3A%20evolutionRequirements%20%7B%0A%20%20%20%20%20%20amount%0A%20%20%20%20%20%20name%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A" rel="noopener">here</a>) gives us the following, where the <code>evolutionRequirements</code> is what we’ve aliased it to.</p><pre><code class="language-graphql">{
"data": {
"pokemon": {
"evolution_requirements": {
"amount": 50,
"name": "Pikachu candies"
}
}
}
}</code></pre><h4 id="fragments">Fragments</h4><p>The definition of fields to be expanded on a type. It’s a way to keep the queries DRY and in general split out the field definitions that are repeated, re-used or deeply nested, see <a href="https://graphql.org/learn/queries/#fragments" rel="noopener">the GraphQL documentation for fragments</a>. It’s going to mean that instead of doing (<a href="https://graphql-pokemon.now.sh/?query=%0A%7B%0A%20%20pokemon(name%3A%20%22Pikachu%22)%20%7B%0A%20%20%20%20id%0A%20%20%20%20number%0A%20%20%20%20weight%20%7B%0A%20%20%20%20%20%20minimum%0A%20%20%20%20%20%20maximum%0A%20%20%20%20%7D%0A%20%20%20%20height%20%7B%0A%20%20%20%20%20%20minimum%0A%20%20%20%20%20%20maximum%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D" rel="noopener">see</a> <a href="https://graphql-pokemon.now.sh/?query=%0A%7B%0A%20%20pokemon(name%3A%20%22Pikachu%22)%20%7B%0A%20%20%20%20weight%20%7B%0A%20%20%20%20%20%20minimum%0A%20%20%20%20%20%20maximum%0A%20%20%20%20%7D%0A%20%20%20%20height%20%7B%0A%20%20%20%20%20%20minimum%0A%20%20%20%20%20%20maximum%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D" rel="noopener">the query in action here</a>):</p><pre><code class="language-graphql">{
pokemon(name: "Pikachu") {
weight {
minimum
maximum
}
height {
minimum
maximum
}
}
}</code></pre><p>We can for example run this (<a href="https://graphql-pokemon.now.sh/?query=%7B%0A%20%20pokemon(name%3A%20%22Pikachu%22)%20%7B%0A%20%20%20%20id%0A%20%20%20%20number%0A%20%20%20%20weight%20%7B...FullPokemonDimensions%7D%0A%20%20%20%20height%20%7B...FullPokemonDimensions%7D%0A%20%20%7D%0A%7D%0A%0Afragment%20FullPokemonDimensions%20on%20PokemonDimension%20%7B%0A%20%20minimum%0A%20%20maximum%0A%7D" rel="noopener">query</a> <a href="https://graphql-pokemon.now.sh/?query=%0A%7B%0A%20%20pokemon(name%3A%20%22Pikachu%22)%20%7B%0A%20%20%20%20weight%20%7B...FullPokemonDimensions%7D%0A%20%20%20%20height%20%7B...FullPokemonDimensions%7D%0A%20%20%7D%0A%7D%0A%0Afragment%20FullPokemonDimensions%20on%20PokemonDimension%20%7B%0A%20%20minimum%0A%20%20maximum%0A%7D" rel="noopener">here</a>):</p><pre><code class="language-graphql">{
pokemon(name: "Pikachu") {
weight {...FullPokemonDimensions}
height {...FullPokemonDimensions}
}
}
fragment FullPokemonDimensions on PokemonDimension {
minimum
maximum
}</code></pre><p>The output is equivalent:</p><pre><code class="language-graphql">{
"data": {
"pokemon": {
"weight": {
"minimum": "5.25kg",
"maximum": "6.75kg"
},
"height": {
"minimum": "0.35m",
"maximum": "0.45m"
}
}
}
}</code></pre><h3 id="running-a-graphql-query">Running a GraphQL query</h3><p>A GraphQL query can be run over POST or GET, it consists of:</p><h4 id="post-recommended-">POST (recommended)</h4><ul><li>Required headers: <code>Content-Type: application/json</code></li><li>Required JSON body parameter: <code>query: { # insert your query }</code></li></ul><p><strong>Raw HTTP request</strong></p><pre><code>POST / HTTP/1.1
Host: graphql-pokemon.now.sh
Content-Type: application/json
{
"query": "{ pokemons(first: 10) { name } }"
}</code></pre><p><strong>cURL</strong></p><pre><code>curl -X POST \
https://graphql-pokemon.now.sh/ \
-H 'Content-Type: application/json' \
-d '{
"query": "{ pokemons(first: 10) { name } }"
}'</code></pre><h4 id="get">GET</h4><ul><li>Required query param: <code>query</code></li></ul><p><strong>raw HTTP request</strong></p><pre><code>GET /?query={%20pokemons(first:%2010)%20{%20name%20}%20} HTTP/1.1
Host: graphql-pokemon.now.sh</code></pre><p><strong>cURL</strong></p><pre><code>curl -X GET 'https://graphql-pokemon.now.sh/?query={%20pokemons%28first:%2010%29%20{%20name%20}%20}'</code></pre><h3 id="top-level-queries">Top-level queries</h3><p>There are 2 types of queries on the <a href="https://graphql-pokemon.now.sh/" rel="noopener">GraphQL Pokemon API</a> at the moment:</p><ul><li>First X pokemon: get all items (with whatever fields are defined in the query)</li><li>Single Pokemon by name: get a single item by its slug (with whatever fields are defined in the query)</li><li>Single Pokemon by id: get a single item by its slug (with whatever fields are defined in the query)</li></ul><h4 id="first-x-pokemon">First X Pokemon</h4><p>Queries of the form (<a href="https://graphql-pokemon.now.sh/?query=%7B%0A%20%20pokemons(first%3A%205)%20%7B%0A%20%20%20%20name%0A%20%20%7D%0A%7D" rel="noopener">see it in action in GraphiQL</a>):</p><pre><code class="language-graphql">{
pokemons(first: 5) {
name
# other fields
}
}</code></pre><h4 id="single-pokemon-by-name">Single Pokemon by name</h4><p>Queries of the form (<a href="https://graphql-pokemon.now.sh/?query=%7B%0A%20%20pokemon(name%3A%20%22Pikachu%22)%20%7B%0A%20%20%20%20name%0A%20%20%20%20classification%0A%20%20%7D%0A%7D" rel="noopener">see it in action in GraphiQL</a>):</p><pre><code class="language-graphql">{
pokemon(name: "Pikachu") {
name
classification
# other fields
}
}</code></pre><blockquote><em>Note the double quotes (<code>""</code>) around the argument value</em></blockquote><h4 id="single-pokemon-by-id">Single Pokemon by id</h4><p>Queries of the form (<a href="https://graphql-pokemon.now.sh/?query=%7B%0A%20%20pokemon(id%3A%20%22UG9rZW1vbjowMjU%3D%22)%20%7B%0A%20%20%20%20name%0A%20%20%20%20classification%0A%20%20%7D%0A%7D" rel="noopener">see it in action in GraphiQL</a>):</p><pre><code class="language-graphql">{
pokemon(id: "UG9rZW1vbjowMjU=") {
name
classification
# other fields
}
}</code></pre><blockquote><em>Note the double quotes (<code>""</code>) around the argument value</em></blockquote><h3 id="sample-queries">Sample queries</h3><h4 id="get-some-pokemon-to-create-strengths-weakness-resistance-classification">Get some Pokemon to create strengths/weakness/resistance classification</h4><p>Query (<a href="https://graphql-pokemon.now.sh/?query=%7B%0A%20%20pokemons(first%3A%20100)%20%7B%0A%20%20%20%20name%0A%20%20%20%20image%0A%20%20%20%20maxHP%0A%20%20%20%20types%0A%20%20%20%20weaknesses%0A%20%20%20%20resistant%0A%20%20%7D%0A%7D" rel="noopener">see it in GraphiQL</a>):</p><pre><code class="language-graphql">{
pokemons(first: 100) {
name
image
maxHP
types
weaknesses
resistant
}
}</code></pre><h4 id="get-pokemon-and-evolutions-expanded-for-physical-stats-and-attacks">Get Pokemon and evolutions expanded for physical stats and attacks</h4><p>Query (<a href="https://graphql-pokemon.now.sh/?query=%7B%0A%20%20pokemon(name%3A%20%22Pikachu%22)%20%7B%0A%20%20%20%20...PokemonWithAttack%0A%20%20%20%20...FullPhysicalStats%0A%20%20%20%20evolutions%20%7B%0A%20%20%20%20%20%20...FullPhysicalStats%0A%20%20%20%20%20%20...PokemonWithAttack%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Afragment%20PokemonWithAttack%20on%20Pokemon%20%7B%0A%20%20name%0A%20%20attacks%20%7B%0A%20%20%20%20fast%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20type%0A%20%20%20%20%20%20damage%0A%20%20%20%20%7D%0A%20%20%20%20special%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20type%0A%20%20%20%20%20%20damage%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Afragment%20FullPhysicalStats%20on%20Pokemon%20%7B%0A%20%20height%20%7B%20...FullDimension%20%7D%0A%20%20weight%20%7B%20...FullDimension%20%7D%0A%7D%0A%0Afragment%20FullDimension%20on%20PokemonDimension%20%7B%0A%20%20minimum%0A%20%20maximum%0A%7D" rel="noopener">see it in GraphiQL</a>):</p><pre><code class="language-graphql">{
pokemon(name: "Pikachu") {
...PokemonWithAttack
...FullPhysicalStats
evolutions {
...FullPhysicalStats
...PokemonWithAttack
}
}
}
fragment PokemonWithAttack on Pokemon {
name
attacks {
fast {
name
type
damage
}
special {
name
type
damage
}
}
}
fragment FullPhysicalStats on Pokemon {
height { ...FullDimension }
weight { ...FullDimension }
}
fragment FullDimension on PokemonDimension {
minimum
maximum
}</code></pre><h4 id="get-selected-pokemon-as-named-fields-with-their-evolution-names">Get selected Pokemon as named fields with their evolution names</h4><p>Query (<a href="https://graphql-pokemon.now.sh/?query=%7B%0A%20%20pikachu%3A%20pokemon(name%3A%20%22Pikachu%22)%20%7B%0A%20%20%20%20...FullPokemon%0A%20%20%20%20evolutions%20%7B%0A%20%20%20%20%20%20...FullPokemon%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20bulbasaur%3Apokemon(name%3A%20%22Bulbasaur%22)%20%7B%0A%20%20%20%20...FullPokemon%0A%20%20%20%20evolutions%20%7B%0A%20%20%20%20%20%20...FullPokemon%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Afragment%20FullPokemon%20on%20Pokemon%20%7B%0A%20%20name%0A%7D%0A" rel="noopener">see it in GraphiQL</a>).</p><p>We can rename top-level queries using aliases. That’s helpful if we want to do the following:</p><pre><code class="language-graphql">{
pikachu: pokemon(name: "Pikachu") {
...FullPokemon
evolutions {
...FullPokemon
}
}
bulbasaur:pokemon(name: "Bulbasaur") {
...FullPokemon
evolutions {
...FullPokemon
}
}
}
fragment FullPokemon on Pokemon {
name
}</code></pre><p>If you want to learn how to integrate with a GraphQL API:</p><p>- In Python, see <a href="https://codewithhugo.com/python-graphql-client-requests-example-using-gql/" rel="noopener">Python GraphQL client requests example using gql</a><br>- In JavaScript <a href="https://codewithhugo.com/javascript-graphql-client-requests-in-node-and-the-browser-using-graphql.js/" rel="noopener">browser and Node, see last week’s Code with Hugo newsletter</a></p><p>Read more of my articles on my website, <a href="https://codewithhugo.com">Code With Hugo</a>.</p>
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
