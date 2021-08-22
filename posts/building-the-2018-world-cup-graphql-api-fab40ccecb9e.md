---
card: "https://cdn-media-1.freecodecamp.org/images/0*y_uooSFcpVZy14uv"
tags: [GraphQL]
description: by Michael Hunger
author: "Milad E. Fahmy"
title: "How we built the 2018 World Cup GraphQL API"
created: "2021-08-15T19:44:35+02:00"
modified: "2021-08-15T19:44:35+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-graphql tag-world-cup tag-api tag-javascript tag-grandstack ">
<header class="post-full-header">
<h1 class="post-full-title">How we built the 2018 World Cup GraphQL API</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*y_uooSFcpVZy14uv 300w,
https://cdn-media-1.freecodecamp.org/images/0*y_uooSFcpVZy14uv 600w,
https://cdn-media-1.freecodecamp.org/images/0*y_uooSFcpVZy14uv 1000w,
https://cdn-media-1.freecodecamp.org/images/0*y_uooSFcpVZy14uv 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*y_uooSFcpVZy14uv" alt="How we built the 2018 World Cup GraphQL API">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Michael Hunger</p>
<h1 id="how-we-built-the-2018-world-cup-graphql-api">How we built the 2018 World Cup GraphQL API</h1>
<p>After the second round of matches at World Cup 2018 got underway, we wanted to create an <strong>easy way</strong> for people to answer all their questions about the teams involved.</p>
<h3 id="tl-dr">TL;DR</h3>
<p>We’ve created a Neo4j backed GraphQL API for World Cup 2018. You can play with it <a href="https://worldcup-2018.now.sh/" rel="noopener">here</a>.</p>
<h3 id="building-a-graphql-api-backed-by-neo4j">Building a GraphQL API backed by Neo4j</h3>
<p>We’d already created a <a href="https://medium.com/neo4j/world-cup-2018-graph-19fbac0a75db" rel="noopener">database with <em>all the World Cup Data</em></a><em> </em>for people to use and query with, but we wanted to make the data accessible to people who don’t know Neo4j’s query language, Cypher.</p>
<p><strong>GraphQL to the rescue!</strong></p>
<p>Before we get to that, let’s first take a look at the Neo4j graph model that we’ve created.</p>
<p>The <strong>WorldCup</strong> node sits in the middle of our graph, and all other parts of the model revolve around that. We have one WorldCup node for each tournament.</p>
<p>Next up we have the host <strong>Country</strong> which is connected to the WorldCup node by a <strong>HOSTED_BY</strong> relationship. <strong>Matches</strong> also belong to a WorldCup<strong>,</strong> and each <strong>Country</strong> names a <strong>Squad of Players</strong> that will represent them in a WorldCup<em> </em>tournament<em>.</em></p>
<p>A player is connected to an <strong>Appearance</strong> node for each match that they participate in either as a starter or substitute. If they score a <strong>Goal,</strong> the Appearance node will connect to that Goal node.</p>
<h3 id="the-grandstack-starter-kit">The GRANDstack Starter Kit</h3>
<p>Ok that’s enough Neo4j, let’s get back to GraphQL.</p>
<p>The GRANDstack combines<em> <strong>G</strong>raphQL, <strong>R</strong>eact, <strong>A</strong>pollo and <strong>N</strong>eo4j <strong>D</strong>atabase</em> into an easy to use bundle for quickly building APIs and apps. It uses the GraphQL schema to automatically transpile GraphQL queries to <strong>single</strong> Neo4j queries and is able to auto-generate all queries, mutations, and fields from the annotated schema.</p>
<figcaption>GRANDstack Logo</figcaption>
</figure>
<p>We used the <a href="https://github.com/grand-stack/grand-stack-starter/tree/master/api" rel="noopener">GRANDstack.io starter kit</a> to create a GraphQL API on top of our existing Neo4j database.</p>
<p>It consist of two parts: a backend <code>api</code> and a front-end <code>ui</code>. The backend serves the GraphQL API and also a GraphQL Playground (a really neat browser and editor for GraphQL queries), which also provides the data schema, docs, and auto-completion.</p>
<p>We forked it to our own repository and then merged it back to a <a href="https://github.com/grand-stack/grand-stack-starter/tree/worldcup" rel="noopener">branch <code>worldcup</code></a> for you to use.</p>
<p>The first step is to create a <strong>GraphQL schema</strong>. You can see what we came up with below, which closely matches what we have above in our Graph Model.</p>
<p>A minimal schema looks like this:</p>
<p>We extended it quite a bit with some GRANDstack specific Neo4j extensions to have some alternative mappings and so on.</p>
<p><a href="https://github.com/grand-stack/grand-stack-starter/blob/worldcup/api/src/graphql-schema.js" rel="noopener"><strong>grand-stack/grand-stack-starter</strong></a><br><a href="https://github.com/grand-stack/grand-stack-starter/blob/worldcup/api/src/graphql-schema.js" rel="noopener"><em>grand-stack-starter - Simple starter project for GRANDstack full stack apps</em>github.com</a></p>
<p>Once we’d defined the schema, we updated our .env file to point to our Neo4j Cloud (https://neo4j.com/cloud/) hosted database.</p><pre><code>NEO4J_URI=bolt://c27d992b.databases.neo4j.ioNEO4J_USER=worldcupNEO4J_PASSWORD=worldcup</code></pre>
<p>You can run this locally by executing <code>yarn &amp;&amp; yarn start</code>. That will launch the Playground at <a href="http://localhost:4000," rel="noopener">http://localhost:4000,</a> where you can start to play around with some queries.</p>
<p>We can write some queries to find the world’s best player.</p>
<figcaption>GraphQL Playground</figcaption>
</figure>
<p>Of course we can find out much more about him.</p>
<figcaption>Result for details on Messi</figcaption>
</figure>
<h3 id="deploy-to-zeit-now">Deploy to zeit.now</h3>
<p>Now we’re ready to deploy. We could deploy our service to anywhere that hosts Node.js apps, but @Will.Lyon recommended <a href="https://zeit.co/now" rel="noopener">Zeit Now</a> — a great and easy to use service for hosting your app that has an easy to use free plan for small projects.</p>
<p>We just install the service and then run the <code>now</code> command in our directory to deploy. For stable URLs, you can alias the project to a fixed name.</p>
<p>The GraphQL server is deployed at <a href="https://worldcup-2018.now.sh/" rel="noopener">https://worldcup-2018.now.sh/</a> and is ready for use now. Let’s have a look at the types of queries we can run against the dataset.</p>
<h4 id="portugal-vs-morocco">Portugal vs. Morocco</h4>
<p>As I’m writing this post, <strong>Portugal</strong> is playing <strong>Morocco.</strong> We can check for the latest score by executing this GraphQL query in the playground defined above.</p>
<figcaption>Portugal vs. Morocco results</figcaption>
</figure>
<p>Portugal are 1–0 up at the moment, and it’s no surprise to learn that Cristiano Ronaldo was the scorer.</p>
<h4 id="who-is-cristiano">Who is Cristiano?</h4>
<p>If we want to learn more about Cristiano, we can query for players as well. For example, the following query will show us his date of birth and how many goals he’s ever scored in the World Cup, as well as how many goals he has scored this time around:</p>
<p>So he’s got 4 goals in World Cup 2018 and 7 in total, which means he’s got more goals in this tournament than the previous ones combined!</p>
<h4 id="germany-s-score-in-1990">Germany’s score in 1990</h4>
<p>Although Germany didn’t get off to a great start in this World Cup, we can write a nostalgic query to find out the score of the 1990 World Cup final:</p>
<h4 id="bad-times-in-1966-">Bad times in 1966 :(</h4>
<p>Or we could look back to 1966, as my colleague Mark forced me to do:</p>
<h3 id="keeping-the-data-fresh">Keeping the data fresh</h3>
<p>The database is being updated via a Lambda job every few minutes while matches are being played, so the data should be reasonably fresh whenever you query it.</p>
<h3 id="the-react-ui">The React UI</h3>
<p>The front-end <code>ui</code> is basically just a React app that uses Apollo Client to query our API and render the results in components.</p>
<p>Please note that the current React code is really ugly and horrible. We leave that as challenge to you to build beautiful web and/or mobile apps using the <strong>World Cup GraphQL API</strong>. :)</p>
<figcaption>my (ugly) world cup screen</figcaption>
</figure>
<p>Of course you can also use Vue or Angular or other ui-frameworks you love.</p>
<p>It connects to the URL provided in the <code>.env</code> file, where we just put either our local <code>http://localhost:4000</code> or our now.sh URI.</p><pre><code>REACT_APP_GRAPHQL_URI=https://worldcup-2018.now.sh/</code></pre>
<p>Again, a single <code>now</code> command deploys our UI as well. In our case we don’t need it, but Zeit now has support if you have any secret credentials.</p>
<h3 id="grandstack-hackathon">GRANDstack Hackathon</h3>
<p>Luckily, the <a href="https://blog.grandstack.io/announcing-the-grandstack-online-hackathon-for-graphql-europe-2018-7d256ebf68e1" rel="noopener">GRANDstack Hackathon</a> is <strong>still ongoing to gather great ideas </strong>and there are some really cool prizes for your submissions.</p>
<blockquote>Thanks a lot to my colleague <a href="undefined" rel="noopener">Mark Needham</a> for doing all the hard work of putting the data and model together.</blockquote>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
