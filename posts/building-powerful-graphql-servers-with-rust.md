---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca05e740569d1a4ca483f.jpg"
tags: [Rust]
description: "Setting up a GraphQL server with Rust, Juniper, Diesel, and A"
author: "Milad E. Fahmy"
title: "How to Build Powerful GraphQL Servers with Rust"
created: "2021-08-16T10:05:54+02:00"
modified: "2021-08-16T10:05:54+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-rust tag-rustlang tag-graphql tag-web-development tag-postgres ">
<header class="post-full-header">
<h1 class="post-full-title">How to Build Powerful GraphQL Servers with Rust</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca05e740569d1a4ca483f.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca05e740569d1a4ca483f.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca05e740569d1a4ca483f.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca05e740569d1a4ca483f.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca05e740569d1a4ca483f.jpg" alt="How to Build Powerful GraphQL Servers with Rust">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Setting up a GraphQL server with Rust, Juniper, Diesel, and Actix; learning about Rust's web frameworks and powerful macros along the way.</p><p>Source Code: <a href="https://github.com/iwilsonq/rust-graphql-example">github.com/iwilsonq/rust-graphql-example</a></p><p>Serving applications via GraphQL is quickly becoming the easiest and most effective way to deliver data to clients. Whether you're on a mobile device or a browser, it provides the data requested and nothing more.</p><p>Client applications no longer need to stitch together information from separate data sources. GraphQL servers are in charge of the integration, eliminating the need for excess data and round-trip requests for data.</p><p>Of course, this implies that the server has to handle aggregating data from different sources, such as home-owned backend services, databases, or third party APIs. This may be resource intensive, how can we optimize for CPU time?</p><p>Rust is a marvel of a language, pairing the raw performance of a low level language like C with the expressiveness of modern languages. It emphasizes type and memory safety, especially when there are potentially data races in concurrent operations.</p><p>Let us see what goes into building a GraphQL server with Rust. We are going to learn about</p><ul><li>Juniper GraphQL Server</li><li>Actix web framework integrated with Juniper</li><li>Diesel for quering a SQL database</li><li>Useful Rust macros and derived traits for working with these libraries</li></ul><p>Note that I will not go into detail regarding installing Rust or Cargo. This article assumes some preliminary knowledge of the Rust toolchain.</p><h2 id="setting-up-an-http-server">Setting up an HTTP Server</h2><p>To begin, we need to initialize our project &nbsp;with <code>cargo</code> and then install dependencies.</p><pre><code class="language-sh">    cargo new rust-graphql-example
cd rust-graphql-example
</code></pre><p>The initialization command bootstraps our Cargo.toml file which contains our projects dependencies as well as a <a href="http://main.rs">main.rs</a> file which has a simple "Hello World" example.</p><pre><code class="language-rust">    // main.rs
fn main() {
println!("Hello, world!");
}
</code></pre><p>As a sanity check, feel free to run <code>cargo run</code> in order to execute the program.</p><p>Installing the necessary libraries in Rust means adding a line containing the library name and version number. Let's update the dependencies sections of Cargo.toml like so:</p><pre><code class="language-rust">
# Cargo.toml
[dependencies]
actix-web = "1.0.0"
diesel = { version = "1.0.0", features = ["postgres"] }
dotenv = "0.9.0"
env_logger = "0.6"
futures = "0.1"
juniper = "0.13.1"
serde = "1.0"
serde_derive = "1.0"
serde_json = "1.0"
</code></pre><p>This article will cover implementing a GraphQL server using <a href="https://github.com/graphql-rust/juniper">Juniper</a> as the GraphQL &nbsp;library and <a href="https://actix.rs/">Actix</a> as the underlying HTTP server. Actix has a very nice API and works well with the stable version of Rust.</p><p>When those lines are added, the next time the project compiles it will include those libraries. Before we compile, lets update main.rs with a basic HTTP server, handling the index route.</p><pre><code class="language-rust">    // main.rs
use std::io;
use actix_web::{web, App, HttpResponse, HttpServer, Responder};
fn main() -&gt; io::Result&lt;()&gt; {
HttpServer::new(|| {
App::new()
.route("/", web::get().to(index))
})
.bind("localhost:8080")?
.run()
}
fn index() -&gt; impl Responder {
HttpResponse::Ok().body("Hello world!")
}
</code></pre><p>The first two lines at the top bring the module we need into scope. The main function here returns an <code>io::Result</code> type, which allows us to use the question mark as a shorthand for handling results.</p><p>The server's routing and configuration is created in the instance of <code>App</code>, which is created in a closure provided by the HTTP server's constructor.</p><p>The route itself is handled by the index function, whose name is arbitrary. As long as this function properly implements <code>Responder</code> it can be used as the parameter for the GET request at the index route.</p><p>If we were writing a REST API, we could proceed with adding more routes and associated handlers. We will see soon that we are trading a listing of route handlers for objects and their relations.</p><p>Now we will introduce the GraphQL library.</p><h2 id="creating-the-graphql-schema">Creating the GraphQL Schema</h2><p>At the root of every GraphQL schema is a root query. From this root we can query lists of objects, specific objects, &nbsp;and whatever fields they might contain.</p><p>Call this the QueryRoot, and we shall denote it with the same name in our code. Since we are not going to be setting up a database or any third party APIs, we'll be hard-coding the little data we have here.</p><p>To add a little color to this example, the schema will depict a generic list of members.</p><p>Under src, add a new file called graphql_schema.rs along with the following contents:</p><pre><code class="language-rust">    // graphql_schema.rs
use juniper::{EmptyMutation, RootNode};
struct Member {
id: i32,
name: String,
}
#[juniper::object(description = "A member of a team")]
impl Member {
pub fn id(&amp;self) -&gt; i32 {
self.id
}
pub fn name(&amp;self) -&gt; &amp;str {
self.name.as_str()
}
}
pub struct QueryRoot;
#[juniper::object]
impl QueryRoot {
fn members() -&gt; Vec&lt;Member&gt; {
vec![
Member {
id: 1,
name: "Link".to_owned(),
},
Member {
id: 2,
name: "Mario".to_owned(),
}
]
}
}
</code></pre><p>Along with our imports, we define our first GraphQL object in this project, the member. They are simple beings, with an id and name. We'll think about more complicated fields and patterns later.</p><p>After stubbing out the <code>QueryRoot</code> type as a unit struct, we get to define the field itself. Juniper exposes a Rust macro called <code>object</code> which allows us to define fields on the different nodes throughout our schema. For now, we only have the QueryRoot node, so we'll expose a field called members on it.</p><p>Rust macros often have an unusual syntax compared to standard functions. They don't merely take some arguments and produce a result, they expand into much more complex code at compile time.</p><h2 id="exposing-the-schema">Exposing the Schema</h2><p>Below our macro call to create the members field, we will define the <code>RootNode</code> type that we expose on our schema.</p><pre><code class="language-rust">    // graphql_schema.rs
pub type Schema = RootNode&lt;'static, QueryRoot, EmptyMutation&lt;()&gt;&gt;;
pub fn create_schema() -&gt; Schema {
Schema::new(QueryRoot {}, EmptyMutation::new())
}
</code></pre><p>Because of the strong typing in Rust, we are forced to provide the mutation object argument. Juniper exposes an <code>EmptyMutation</code> struct for just this occasion, that is, when we want to create a read-only schema.</p><p>Now that the schema is prepared, we can update our server in main.rs to handle the "/graphql" route. Since having a playground is also nice, we'll add a route for GraphiQL, the interactive GraphQL playground.</p><pre><code class="language-rust">    // main.rs
#[macro_use]
extern crate juniper;
use std::io;
use std::sync::Arc;
use actix_web::{web, App, Error, HttpResponse, HttpServer};
use futures::future::Future;
use juniper::http::graphiql::graphiql_source;
use juniper::http::GraphQLRequest;
mod graphql_schema;
use crate::schema::{create_schema, Schema};
fn main() -&gt; io::Result&lt;()&gt; {
let schema = std::sync::Arc::new(create_schema());
HttpServer::new(move || {
App::new()
.data(schema.clone())
.service(web::resource("/graphql").route(web::post().to_async(graphql)))
.service(web::resource("/graphiql").route(web::get().to(graphiql)))
})
.bind("localhost:8080")?
.run()
}
</code></pre><p>You'll notice I've specified a number of imports that we will be using, including the schema we've just created. Also see that:</p><ul><li>we call <code>create_schema</code> inside an Arc (atomically reference counted), to allow shared immutable state across threads (cooking with ? here I know)</li><li>we mark the closure inside HttpServer::new with <strong>move</strong>, indicating that the closure takes ownership of the inner variables, that is, it gains a copy of <code>schema</code></li><li><code>schema</code> is passed to the <code>data</code> method indicating that it is to be used inside the application as shared state between the two services</li></ul><p>We must now implement the handlers for those two services. Starting with the "/graphql" route:</p><pre><code class="language-rust">    // main.rs
// fn main() ...
fn graphql(
st: web::Data&lt;Arc&lt;Schema&gt;&gt;,
data: web::Json&lt;GraphQLRequest&gt;,
) -&gt; impl Future&lt;Item = HttpResponse, Error = Error&gt; {
web::block(move || {
let res = data.execute(&amp;st, &amp;());
Ok::&lt;_, serde_json::error::Error&gt;(serde_json::to_string(&amp;res)?)
})
.map_err(Error::from)
.and_then(|user| {
Ok(HttpResponse::Ok()
.content_type("application/json")
.body(user))
})
}
</code></pre><p>Our implementation of the "/graphql" route takes executes a GraphQL request against our schema from application state. It does this by creating a <strong>future</strong> from <code>web::block</code> and chaining handlers for success and error states.</p><p>Futures are analogous to Promises in JavaScript, which is enough to understand this code snippet. For a greater explanation of Futures in Rust, I recommend <a href="https://www.viget.com/articles/understanding-futures-in-rust-part-1/">this article by Joe Jackson</a>.</p><p>In order to test out our GraphQL schema, we'll also add a handler for "/graphiql".</p><pre><code class="language-rust">    // main.rs
// fn graphql() ...
fn graphiql() -&gt; HttpResponse {
let html = graphiql_source("http://localhost:8080/graphql");
HttpResponse::Ok()
.content_type("text/html; charset=utf-8")
.body(html)
}
</code></pre><p>After that, we will add a connection URL to a .env file in our working directory:</p><pre><code class="language-sh">    echo DATABASE_URL=postgres://localhost/rust_graphql_example &gt; .env
</code></pre><p>Once that's there, you can run:</p><pre><code class="language-sh">    diesel setup
# followed by
diesel migration generate create_members
</code></pre><p>Now you'll have a migrations folder in your directory. Within it, you'll have two SQL files: one up.sql for setting up your database, the other down.sql for tearing it down.</p><p>I will add the following to up.sql:</p><pre><code class="language-sql">    CREATE TABLE teams (
id SERIAL PRIMARY KEY,
name VARCHAR NOT NULL
);
CREATE TABLE members (
id SERIAL PRIMARY KEY,
name VARCHAR NOT NULL,
knockouts INT NOT NULL DEFAULT 0,
team_id INT NOT NULL,
FOREIGN KEY (team_id) REFERENCES teams(id)
);
INSERT INTO teams(id, name) VALUES (1, 'Heroes');
INSERT INTO members(name, knockouts, team_id) VALUES ('Link', 14, 1);
INSERT INTO members(name, knockouts, team_id) VALUES ('Mario', 11, 1);
INSERT INTO members(name, knockouts, team_id) VALUES ('Kirby', 8, 1);
INSERT INTO teams(id, name) VALUES (2, 'Villains');
INSERT INTO members(name, knockouts, team_id) VALUES ('Ganondorf', 8, 2);
INSERT INTO members(name, knockouts, team_id) VALUES ('Bowser', 11, 2);
INSERT INTO members(name, knockouts, team_id) VALUES ('Mewtwo', 12, 2);
</code></pre><p>And into down.sql I will add:</p><pre><code class="language-sql">    DROP TABLE members;
DROP TABLE teams;
</code></pre><p>If you've written SQL in the past, these statements will make some sense. We are creating two tables, one to store teams and one to store members of those teams.</p><p>I am modeling this data based on Smash Bros if you have not yet noticed. It helps the learning stick.</p><p>Now to run the migrations:</p><pre><code class="language-sh">    diesel migration run
</code></pre><p>If you'd like to verify that the down.sql script works to destroy those tables, run: <code>diesel migration redo</code>.</p><p>Now the reason why I named the GraphQL schema file graphql_schema.rs instead of schema.rs, is because diesel overwrites that file in our src direction by default.</p><p>It keeps a Rust macro representation of our SQL tables in that file. It is not so important to know how exactly this <code>table!</code> macro works, but try not to edit this file — the ordering of the fields matters!</p><pre><code class="language-rust">    // schema.rs (Generated by diesel cli)
table! {
members (id) {
id -&gt; Int4,
name -&gt; Varchar,
knockouts -&gt; Int4,
team_id -&gt; Int4,
}
}
table! {
teams (id) {
id -&gt; Int4,
name -&gt; Varchar,
}
}
joinable!(members -&gt; teams (team_id));
allow_tables_to_appear_in_same_query!(
members,
teams,
);
</code></pre><h2 id="wiring-up-our-handlers-with-diesel">Wiring up our Handlers with Diesel</h2><p>In order to serve the data in our tables, we must first update our <code>Member</code> struct with the new fields:</p><pre><code class="language-diff">    // graphql_schema.rs
+ #[derive(Queryable)]
pub struct Member {
pub id: i32,
pub name: String,
+ pub knockouts: i32,
+ pub team_id: i32,
}
#[juniper::object(description = "A member of a team")]
impl Member {
pub fn id(&amp;self) -&gt; i32 {
self.id
}
pub fn name(&amp;self) -&gt; &amp;str {
self.name.as_str()
}
+ pub fn knockouts(&amp;self) -&gt; i32 {
+   self.knockouts
+ }
+ pub fn team_id(&amp;self) -&gt; i32 {
+   self.team_id
+ }
}
</code></pre><p>Note that we are also adding the <code>Queryable</code> derived attribute to <code>Member</code>. This tells Diesel everything it needs to know in order to query the right table in Postgres.</p><p>Additionally, add a <code>Team</code> struct:</p><pre><code class="language-rust">    // graphql_schema.rs
#[derive(Queryable)]
pub struct Team {
pub id: i32,
pub name: String,
}
#[juniper::object(description = "A team of members")]
impl Team {
pub fn id(&amp;self) -&gt; i32 {
self.id
}
pub fn name(&amp;self) -&gt; &amp;str {
self.name.as_str()
}
pub fn members(&amp;self) -&gt; Vec&lt;Member&gt; {
vec![]
}
}
</code></pre><p>In a short while, we will update the <code>members</code> function on <code>Team</code> to return a database query. But first, let us add a root call for members.</p><pre><code class="language-diff">    // graphql_schema.rs
+ extern crate dotenv;
+ use std::env;
+ use diesel::pg::PgConnection;
+ use diesel::prelude::*;
+ use dotenv::dotenv;
use juniper::{EmptyMutation, RootNode};
+ use crate::schema::members;
pub struct QueryRoot;
+  fn establish_connection() -&gt; PgConnection {
+    dotenv().ok();
+    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
+    PgConnection::establish(&amp;database_url).expect(&amp;format!("Error connecting to {}", database_url))
+  }
#[juniper::object]
impl QueryRoot {
fn members() -&gt; Vec&lt;Member&gt; {
-   vec![
-     Member {
- id: 1,
- name: "Link".to_owned(),
-     },
-     Member {
- id: 2,
- name: "Mario".to_owned(),
-     }
-   ]
+   use crate::schema::members::dsl::*;
+   let connection = establish_connection();
+   members
+     .limit(100)
+     .load::&lt;Member&gt;(&amp;connection)
+     .expect("Error loading members")
}
}
</code></pre><p>Very good, we have our first usage of a diesel query. After initializing a connection, we use the members dsl, which is generated from our <code>table!</code> macros in schema.rs, and call <strong>load</strong>, indicating that we wish to load <code>Member</code> objects.</p><p>Establishing a connection means connecting to our local Postgres database by using the env variable we declared earlier.</p><p>Assuming that was all input correctly, restart the server with <code>cargo run</code>, open GraphiQL and issue the members query, perhaps adding the two new fields.</p><p>The teams query will be very similar — the difference being we must also add a part of the query to the members function on the <code>Team</code> struct in order to resolve the relationship between GraphQL types.</p><pre><code class="language-rust">    // graphql_schema.rs
#[juniper::object]
impl QueryRoot {
fn members() -&gt; Vec&lt;Member&gt; {
use crate::schema::members::dsl::*;
let connection = establish_connection();
members
.limit(100)
.load::&lt;Member&gt;(&amp;connection)
.expect("Error loading members")
}
+  fn teams() -&gt; Vec&lt;Team&gt; {
+    use crate::schema::teams::dsl::*;
+    let connection = establish_connection();
+    teams
+.limit(10)
+.load::&lt;Team&gt;(&amp;connection)
+.expect("Error loading teams")
+  }
}
// ...
#[juniper::object(description = "A team of members")]
impl Team {
pub fn id(&amp;self) -&gt; i32 {
self.id
}
pub fn name(&amp;self) -&gt; &amp;str {
self.name.as_str()
}
pub fn members(&amp;self) -&gt; Vec&lt;Member&gt; {
-    vec![]
+    use crate::schema::members::dsl::*;
+    let connection = establish_connection();
+    members
+.filter(team_id.eq(self.id))
+.limit(100)
+.load::&lt;Member&gt;(&amp;connection)
+.expect("Error loading members")
}
}
// ...
pub struct MutationRoot;
#[juniper::object]
impl MutationRoot {
fn create_member(data: NewMember) -&gt; Member {
let connection = establish_connection();
diesel::insert_into(members::table)
.values(&amp;data)
.get_result(&amp;connection)
.expect("Error saving new post")
}
}
#[derive(juniper::GraphQLInputObject, Insertable)]
#[table_name = "members"]
pub struct NewMember {
pub name: String,
pub knockouts: i32,
pub team_id: i32,
}
</code></pre><p>As GraphQL mutations typically go, we define an input object called <code>NewMember</code> and make it the argument of the <code>create_member</code> function. Inside this function, we establish a connection and call the insert query on the members table, passing the entire input object.</p><p>It is super convenient that Rust allows us to use the same structs for GraphQL input objects as well as Diesel insertable objects.</p><p>Let me make this a little more clear, for the <code>NewMember</code> struct:</p><ul><li>we derive <code>juniper::GraphQLInputObject</code> in order to create a input object for our GraphQL schema</li><li>we derive <code>Insertable</code> in order to let Diesel know that this struct is valid input for an insertion SQL statement</li><li>we add the <code>table_name</code> attribute so that Diesel knows which table to insert it in</li></ul><p>There is a lot of <em>magic</em> going on here. This is what I love about Rust, it has great performance but the code has features like macros and derived traits to abstract away boilerplate and add functionality.</p><p>Finally, at the bottom of the file, add the <code>MutationRoot</code> to the schema:</p><pre><code class="language-rust">    // graphql_schema.rs
pub type Schema = RootNode&lt;'static, QueryRoot, MutationRoot&gt;;
pub fn create_schema() -&gt; Schema {
Schema::new(QueryRoot {}, MutationRoot {})
}
</code></pre><p>I hope that everything is there, we can test out all of our queries and mutations thus far now:</p><pre><code class="language-graphql">    # GraphiQL
mutation CreateMemberMutation($data: NewMember!) {
createMember(data: $data) {
id
name
knockouts
teamId
}
}
# example query variables
# {
#   "data": {
#     "name": "Samus",
#     "knockouts": 19,
#     "teamId": 1
#   }
# }
</code></pre><p>If that mutation ran successfully, you can pop open a bottle of champagne as you are on your way to building performant and type-safe GraphQL Servers with Rust.</p><h2 id="thanks-for-reading">Thanks For Reading</h2><p>I hope you have enjoyed this article, I also hope that it gave you some sort of inspiration for your own work.</p><p>If you'd like to keep up with the next time I drop an article in the realm of Rust, ReasonML, GraphQL, or software development at large, feel free to give me a follow on <a href="https://twitter.com/iwilson">Twitter</a>, <a href="https://dev.to/iwilsonq">dev.to</a>, or on my website at <a href="https://ianwilson.io">ianwilson.io</a>.</p><p>The source code is here <a href="https://github.com/iwilsonq/rust-graphql-example">github.com/iwilsonq/rust-graphql-example</a>.</p><h3 id="other-neat-reading-material">Other Neat Reading Material</h3><p>Here are some of the libraries we worked with here. They have great documentation and guides as well so be sure to give them a read :)</p><ul><li><a href="https://tokio.rs/docs/getting-started/futures/">Implementation of Rust Futures in Tokio</a></li><li><a href="https://graphql-rust.github.io/juniper/master/index.html">Juniper - GraphQL Server for Rust</a></li><li><a href="http://diesel.rs/">Diesel - Safe, Extensible ORM and Query Builder for Rust</a></li><li><a href="https://actix.rs/">Actix - Rust's powerful actor system and most fun web framework</a></li></ul>
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
