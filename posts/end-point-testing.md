---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9ca097740569d1a4ca49a0.jpg"
tags: [JavaScript]
description: I've been playing around with testing lately. One thing I tri
author: "Milad E. Fahmy"
title: "A step-by-step intro to end-point testing"
created: "2021-08-15T19:32:55+02:00"
modified: "2021-08-15T19:32:55+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-nodejs tag-expressjs tag-testing ">
<header class="post-full-header">
<h1 class="post-full-title">A step-by-step intro to end-point testing</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9ca097740569d1a4ca49a0.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca097740569d1a4ca49a0.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca097740569d1a4ca49a0.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9ca097740569d1a4ca49a0.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9ca097740569d1a4ca49a0.jpg" alt="A step-by-step intro to end-point testing">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I've been playing around with testing lately. One thing I tried to do was to test the endpoints of my Express application.</p>
<p>Setting up the test was the hard part. People who write about tests don't actually teach you how they set it up. I could not find any useful information about this, and I had to try and figure it out.</p>
<p>So today, I want to share the setup I created for myself. Hopefully, this can help you when you create your own tests.</p>
<h2 id="tableofcontents">Table of Contents</h2>
<ol>
<li><a href="#part1">Setting up Jest and Supertest</a></li>
<li><a href="#part2">Connecting Jest and Mongoose</a></li>
<li><a href="#part3">Seeding a database</a></li>
</ol>
<h2 id="part1">Setting up Jest and Supertest</h2>
<p>First, let's talk about the stack.</p>
<h3 id="thestack">The Stack</h3>
<ul>
<li>I created my app with Express.</li>
<li>I used Mongoose to connect to MongoDB</li>
<li>I used Jest as my test framework.</li>
</ul>
<p>You might have expected Express and Mongoose because everyone else seems to use those two frameworks. I used them too.</p>
<p>But why Jest and not other test frameworks?</p>
<h3 id="whyjest">Why Jest</h3>
<p>I don't like Facebook, so I didn't want to try anything that was created by Facebook's team. I know it sounds silly, but that was the truth.</p>
<p>Before Jest, I tried out all sorts of test frameworks. I tried Tap, Tape, Mocha, Jasmine, and AVA. Each test framework has its own pros and cons. I almost ended up with AVA, but I didn't go with AVA because I found it hard to set up. Eventually, I tried Jest out because Kent C. Dodds recommended it.</p>
<p>I fell in love with Jest after trying it out. I love it because:</p>
<ol>
<li>It's easy to setup</li>
<li>The <a href="https://egghead.io/lessons/javascript-use-jest-s-interactive-watch-mode" title="Use Jest's Interactive Watch Mode">watch-mode</a> is amazing</li>
<li>When you <code>console.log</code> something, it actually shows up without any difficulty (this was a bitch with AVA).</li>
</ol>
<h3 id="settingupjest">Setting up Jest</h3>
<p>First, you need to install Jest.</p>
<pre><code class="language-js">npm install jest --save-dev
</code></pre>
<p>Next, you want to add tests scripts to your <code>package.json</code> file. It helps to add the <code>test</code> and <code>test:watch</code> scripts (for one-off testing and watch-mode respectively).</p>
<pre><code class="language-js">"scripts": {
"test": "jest",
"test:watch": "jest --watch"
},
</code></pre>
<p>You can choose to write your test files in one of the following formats. Jest picks them up for you automatically.</p>
<ol>
<li><code>js</code> files in the <code>__tests__</code> folder</li>
<li>files named with <code>test.js</code> (like <code>user.test.js</code>)</li>
<li>files named with <code>spec.js</code> (like <code>user.spec.js</code>)</li>
</ol>
<p>You can place your files however you like. When I tested endpoints, I put the test files together with my endpoints. I found this easier to manage.</p>
<pre><code class="language-bash">- routes
|- users/
|- index.js
|- users.test.js
</code></pre>
<h3 id="writingyourfirsttest">Writing your first test</h3>
<p>Jest includes <code>describe</code>, <code>it</code> and <code>expect</code> for you in every test file. You don't have to <code>require</code> them.</p>
<ul>
<li><code>describe</code> lets you wrap many tests together under one umbrella. (It is used for organizing your tests).</li>
<li><code>it</code> lets you run a test.</li>
<li><code>expect</code> lets you perform assertions. The test passes if all assertions passes.</li>
</ul>
<p>Here's an example of a test that fails. In this example, I <code>expect</code> that <code>1</code> should be strictly equal to <code>2</code>. Since <code>1 !== 2</code>, the test fails.</p>
<pre><code class="language-js">// This test fails because 1 !== 2
it("Testing to see if Jest works", () =&gt; {
expect(1).toBe(2);
});
</code></pre>
<p>You'll see a failing message from Jest if you run Jest.</p>
<pre><code class="language-js">npm run test:watch
</code></pre>
<figure><img src="https://zellwk.com/images/2019/endpoint-testing/test-fail.png" alt="Output from Terminal. Test fails."></figure>
<p>You can make the test pass by expecting <code>1 === 1</code>.</p>
<pre><code class="language-js">// This passes because 1 === 1
it("Testing to see if Jest works", () =&gt; {
expect(1).toBe(1);
});
</code></pre>
<figure><img src="https://zellwk.com/images/2019/endpoint-testing/test-pass.png" alt="Output from Terminal. Test successful."></figure>
<p>This is the most basic of tests. It's not useful at all because we haven't testing anything real yet.</p>
<h2 id="asynchronoustests">Asynchronous tests</h2>
<p>You need to send a request to test an endpoint. Requests are asynchronous, which means you must be able to conduct asynchronous tests.</p>
<p>This is easy with Jest. There are two steps:</p>
<ol>
<li>Add the <code>async</code> keyword</li>
<li>Call <code>done</code> when you're done with your tests</li>
</ol>
<p>Here's what it can look like:</p>
<pre><code class="language-js">it("Async test", async done =&gt; {
// Do your async tests here
done();
});
</code></pre>
<p>Note: <a href="https://zellwk.com/blog/async-await">Here's an article</a> on Async/await in JavaScript if you don't know how to use it.</p>
<h2 id="testingendpoints">Testing Endpoints</h2>
<p>You can use Supertest to test endpoints. First, you need to install Supertest.</p>
<pre><code class="language-bash">npm install supertest --save-dev
</code></pre>
<p>Before you can test endpoints, you need to setup the server so Supertest can use it in your tests.</p>
<p>Most tutorials teach you to <code>listen</code> to the Express app in the server file, like this:</p>
<pre><code class="language-js">const express = require("express");
const app = express();
// Middlewares...
// Routes...
app.listen(3000);
</code></pre>
<p>This doesn't work because it starts listening to one port. If you try to write many test files, you'll get an error that says "port in use".</p>
<p>You want to allow each test file to start a server on their own. To do this, you need to export <code>app</code> without listening to it.</p>
<pre><code class="language-js">// server.js
const express = require("express");
const app = express();
// Middlewares...
// Routes...
module.exports = app;
</code></pre>
<p>For development or production purposes, you can listen to your <code>app</code> like normal in a different file like <code>start.js</code>.</p>
<pre><code class="language-js">// start.js
const app = require("./server.js");
app.listen(3000);
</code></pre>
<h3 id="usingsupertest">Using Supertest</h3>
<p>To use Supertest, you require your app and supertest in the test file.</p>
<pre><code class="language-js">const app = require("./server"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);
</code></pre>
<p>Once you do this, you get the ability to send GET, POST, PUT, PATCH and DELETE requests. Before we send a request, we need to have an endpoint. Let's say we have a <code>/test</code> endpoint.</p>
<pre><code class="language-js">app.get("/test", async (req, res) =&gt; {
res.json({ message: "pass!" });
});
</code></pre>
<p>To send a GET request to <code>/test</code>, you use the <code>.get</code> method from Supertest.</p>
<pre><code class="language-js">it("Gets the test endpoint", async done =&gt; {
// Sends GET Request to /test endpoint
const res = await request.get("/test");
// ...
done();
});
</code></pre>
<p>Supertest gives you a response from the endpoint. You can test both HTTP status and the body (whatever you send through <code>res.json</code>) like this:</p>
<pre><code class="language-js">it("gets the test endpoint", async done =&gt; {
const response = await request.get("/test");
expect(response.status).toBe(200);
expect(response.body.message).toBe("pass!");
done();
});
</code></pre>
<figure><img src="https://zellwk.com/images/2019/endpoint-testing/test-endpoint-pass.png" alt="First endpoint test passes."></figure>
<h2 id="part2">Connecting Jest and Mongoose</h2>
<p>The hard part about testing a backend application is setting up a test database. It can be complicated.</p>
<p>Today, I want to share how I setup Jest and Mongoose.</p>
<h3 id="settingupmongoosewithjest">Setting up Mongoose with Jest</h3>
<p>Jest gives you a warning if you try to use Mongoose with Jest.</p>
<figure role="figure"><img src="https://zellwk.com/images/2019/jest-and-mongoose/mongoose-jest-warning.png" alt="Warning if you try to use Mongoose with Jest"></figure>
<p>If you don't want to see this error, you need to set <code>testEnvironment</code> to <code>node</code> in your <code>package.json</code> file.</p>
<pre><code class="language-js">"jest": {
"testEnvironment": "node"
}
</code></pre>
<h3 id="settingupmongooseinatestfile">Setting up Mongoose in a test file</h3>
<p>You want to connect to a database before you begin any tests. You can use the <code>beforeAll</code> hook to do so.</p>
<pre><code class="language-js">beforeAll(async () =&gt; {
// Connect to a Mongo DB
});
</code></pre>
<p>To connect to a MongoDB, you can use Mongoose's <code>connect</code> command.</p>
<pre><code class="language-js">const mongoose = require("mongoose");
const databaseName = "test";
beforeAll(async () =&gt; {
const url = `mongodb://127.0.0.1/${databaseName}`;
await mongoose.connect(url, { useNewUrlParser: true });
});
</code></pre>
<p>This creates a connection to the database named <code>test</code>. You can name your database anything. You'll learn how to clean them up later.</p>
<p>Note: Make sure you have an active local MongoDB Connection before you test. Your tests will fail if you don't have an active local MongoDB Connection. <a href="https://zellwk.com/blog/local-mongodb">Read this</a> to learn how to create a local MongoDB connection.</p>
<h3 id="creatingdatabasesforeachtestfile">Creating databases for each test file</h3>
<p>When you test, you want to connect to a different database for each test file, because:</p>
<ol>
<li>Jest runs each test file asynchronously. You won't know which file comes first.</li>
<li>You don't want tests to share the same database. You don't want data from one test file to spill over to the next test file.</li>
</ol>
<p>To connect to a different database, you change the name of the database.</p>
<pre><code class="language-js">// Connects to database called avengers
beforeAll(async () =&gt; {
const url = `mongodb://127.0.0.1/avengers`;
await mongoose.connect(url, { useNewUrlParser: true });
});
</code></pre>
<pre><code class="language-js">// Connects to database power-rangers
beforeAll(async () =&gt; {
const url = `mongodb://127.0.0.1/power-rangers`;
await mongoose.connect(url, { useNewUrlParser: true });
});
</code></pre>
<h3 id="sendingapostrequest">Sending a POST request</h3>
<p>Let's say you want to create a user for your app. The user has a name and an email address. Your Mongoose Schema might look like this:</p>
<pre><code class="language-js">const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
name: String,
email: {
type: String,
require: true,
unique: true
}
});
module.exports = mongoose.model("User", userSchema);
</code></pre>
<p>To create a user, you need to save the <code>name</code> and <code>email</code> into MongoDB. Your route and controller might look like this:</p>
<pre><code class="language-js">const User = require("../model/User"); // Link to your user model
app.post("/signup", async (req, res) =&gt; {
const { name, email } = req.body;
const user = new User({ name, email });
const ret = await user.save();
res.json(ret);
});
</code></pre>
<p>To save the user into the database, you can send a POST request to <code>signup</code>. To send a post request, you use the <code>post</code> method. To send data along with the POST request, you use the <code>send</code> method. In your tests, it'll look like this.</p>
<pre><code class="language-js">it("Should save user to database", async done =&gt; {
const res = await request.post("/signup").send({
name: "Zell",
email: "testing@gmail.com"
});
done();
});
</code></pre>
<p>Note: If you run this code two times, you'll get an <code>E1100 duplicate key error</code>. This error occurred because:</p>
<ol>
<li>We said the <code>email</code> should be <code>unique</code> in the Schema above.</li>
<li>We tried to create another user with <code>testing@gmail.com</code>. even though one already exists in the database. (The first one was created when you sent the first request).</li>
</ol>
<figure role="figure"><img src="https://zellwk.com/images/2019/jest-and-mongoose/duplicate-error.png" alt="Duplicate key error."></figure>
<h2 id="cleaningupthedatabasebetweentests">Cleaning up the database between tests</h2>
<p>You want to remove entries from the database between each test. This ensures you always start with an empty database.</p>
<p>You can do this with the <code>afterEach</code> hook.</p>
<pre><code class="language-js">// Cleans up database between each test
afterEach(async () =&gt; {
await User.deleteMany();
});
</code></pre>
<p>In this code above, we only cleared the <code>User</code> collection in the database. In a real scenario, you want to clear all collections. You can use the following code to do so:</p>
<pre><code class="language-js">async function removeAllCollections() {
const collections = Object.keys(mongoose.connection.collections);
for (const collectionName of collections) {
const collection = mongoose.connection.collections[collectionName];
await collection.deleteMany();
}
}
afterEach(async () =&gt; {
await removeAllCollections();
});
</code></pre>
<h3 id="testingtheendpoint">Testing the Endpoint</h3>
<p>Let's begin our tests. In this test, we will send a POST request to the <code>/signup</code> endpoint. We want to make sure:</p>
<ol>
<li>The user gets saved to the database</li>
<li>The returned object contains information about the user</li>
</ol>
<h3 id="checkingiftheuserwassavedtothedatabase">Checking if the user was saved to the database</h3>
<p>To check whether the user gets saved into the database, you search the database for the user.</p>
<pre><code class="language-js">const User = require("../model/User"); // Link to your user model
it("Should save user to database", async done =&gt; {
const res = await request.post("/signup").send({
name: "Zell",
email: "testing@gmail.com"
});
// Searches the user in the database
const user = await User.findOne({ email: "testing@gmail.com" });
done();
});
</code></pre>
<p>If you <code>console.log</code> user, you should see something like this:</p>
<figure role="figure"><img src="https://zellwk.com/images/2019/jest-and-mongoose/user.png" alt="User object from MongoDB."></figure>
<p>This means our user got saved to the database. If we want to confirm the user has a name and an email, we can do <code>expect</code> them to be true.</p>
<pre><code class="language-js">it("Should save user to database", async done =&gt; {
// Sends request...
// Searches the user in the database
const user = await User.findOne({ email: "testing@gmail.com" });
expect(user.name).toBeTruthy();
expect(user.email).toBeTruthy();
done();
});
</code></pre>
<h4 id="checkingifthereturnedobjectcontainstheinformationabouttheuser">Checking if the returned object contains the information about the user</h4>
<p>We want to make sure the returned object contains the user's name and email address. To do this, we check the response from the post request.</p>
<pre><code class="language-js">it("Should save user to database", async done =&gt; {
// Sends request...
// Searches the user in the database...
// Ensures response contains name and email
expect(res.body.name).toBeTruthy();
expect(res.body.email).toBeTruthy();
done();
});
</code></pre>
<p>We're done with our tests now. We want to delete the database from MongoDB.</p>
<h3 id="deletingthedatabase">Deleting the database</h3>
<p>To delete the database, you need to ensure there are 0 collections in the database. We can do this by dropping each collection we used.</p>
<p>We'll do after all our tests have run, in the <code>afterAll</code> hook.</p>
<pre><code class="language-js">afterAll(async () =&gt; {
// Removes the User collection
await User.drop();
});
</code></pre>
<p>To drop all your collections you can use this:</p>
<pre><code class="language-js">async function dropAllCollections() {
const collections = Object.keys(mongoose.connection.collections);
for (const collectionName of collections) {
const collection = mongoose.connection.collections[collectionName];
try {
await collection.drop();
} catch (error) {
// This error happens when you try to drop a collection that's already dropped. Happens infrequently.
// Safe to ignore.
if (error.message === "ns not found") return;
// This error happens when you use it.todo.
// Safe to ignore.
if (error.message.includes("a background operation is currently running"))
return;
console.log(error.message);
}
}
}
// Disconnect Mongoose
afterAll(async () =&gt; {
await dropAllCollections();
});
</code></pre>
<p>Finally, you want to close the Mongoose connection to end the test. Here's how you can do it:</p>
<pre><code class="language-js">afterAll(async () =&gt; {
await dropAllCollections();
// Closes the Mongoose connection
await mongoose.connection.close();
});
</code></pre>
<p>That's everything you need to do to setup Mongoose with Jest!</p>
<h3 id="refactoring">Refactoring</h3>
<p>There's a lot of code that goes into <code>beforeEach</code>, <code>afterEach</code>, and <code>afterAll</code> hooks. We will be using them for every test file. It makes sense to create a setup file for these hooks.</p>
<pre><code class="language-js">// test-setup.js
const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
mongoose.promise = global.Promise;
async function removeAllCollections() {
const collections = Object.keys(mongoose.connection.collections);
for (const collectionName of collections) {
const collection = mongoose.connection.collections[collectionName];
await collection.deleteMany();
}
}
async function dropAllCollections() {
const collections = Object.keys(mongoose.connection.collections);
for (const collectionName of collections) {
const collection = mongoose.connection.collections[collectionName];
try {
await collection.drop();
} catch (error) {
// Sometimes this error happens, but you can safely ignore it
if (error.message === "ns not found") return;
// This error occurs when you use it.todo. You can
// safely ignore this error too
if (error.message.includes("a background operation is currently running"))
return;
console.log(error.message);
}
}
}
module.exports = {
setupDB(databaseName) {
// Connect to Mongoose
beforeAll(async () =&gt; {
const url = `mongodb://127.0.0.1/${databaseName}`;
await mongoose.connect(url, { useNewUrlParser: true });
});
// Cleans up database between each test
afterEach(async () =&gt; {
await removeAllCollections();
});
// Disconnect Mongoose
afterAll(async () =&gt; {
await dropAllCollections();
await mongoose.connection.close();
});
}
};
</code></pre>
<p>You can import the setup file for each test like this:</p>
<pre><code class="language-js">const { setupDB } = require("../test-setup");
// Setup a Test Database
setupDB("endpoint-testing");
// Continue with your tests...
</code></pre>
<p>There's one more thing I want to show you.</p>
<p>When you create tests, you want to seed the database with fake data.</p>
<h3 id="part3">Seeding a database</h3>
<p>When you write tests for the backend, you need to test for four different kinds of operations:</p>
<ol>
<li>Create (for adding things to the database)</li>
<li>Read (for getting things from the database)</li>
<li>Update (for changing the database)</li>
<li>Delete (for deleting things from the database)</li>
</ol>
<p>The easiest type to test for is create operations. You put something into the database and test whether it's there.</p>
<p>For the other three types of operations, you need to put something into the database <em>before</em> you write the test.</p>
<h3 id="puttingthingsintothedatabase">Putting things into the database</h3>
<p>The process where you add things to a database is called <strong>seeding a database</strong>.</p>
<p>Let's say you want to add three users to the database. These users contain a name and an email address.</p>
<pre><code class="language-js">const users = [
{
name: "Zell",
email: "testing1@gmail.com"
},
{
name: "Vincy",
email: "testing2@gmail.com"
},
{
name: "Shion",
email: "testing3@gmail.com"
}
];
</code></pre>
<p>You can use your models to seed the database at the start of the test.</p>
<pre><code class="language-js">const User = require("../model/User"); // Link to User model
it("does something", async done =&gt; {
// Add users to the database
for (const u of users) {
const user = new User(u);
await user.save();
}
// Create the rest of your test here
});
</code></pre>
<p>If you need these users for every test, the best way is to add them through the <code>beforeEach</code> hook. The <code>beforeEach</code> hook runs before every <code>it</code> declaration.</p>
<pre><code class="language-js">// Seed the database with users
beforeEach(async () =&gt; {
for (u of users) {
const user = new User(u);
await user.save();
}
});
</code></pre>
<p>You can also use Mongoose's <code>create</code> function to do the same thing. It runs <code>new Model()</code> and <code>save()</code>, so the code below and the one above does the same thing.</p>
<pre><code class="language-js">// Seed the database with users
beforeEach(async () =&gt; {
await User.create(users);
});
</code></pre>
<h3 id="createvsinsertmany">create vs insertMany</h3>
<p>Mongoose has a second method to help you seed the database. This method is called <code>insertMany</code>. <code>insertMany</code> is faster than <code>create</code>, because:</p>
<ul>
<li><code>insertMany</code> sends one operation to the server</li>
<li><code>create</code> sends one operation for each document</li>
</ul>
<p>However, <code>insertMany</code> does not run the <code>save</code> middleware.</p>
<h4 id="istriggeringthesavemiddlewareimportant">Is triggering the save middleware important?</h4>
<p>This depends on your seed data. If your seed data needs to go through the <code>save</code> middleware, you need to use <code>create</code>. For example, let's say you want to save a user's password into the database. You have this data:</p>
<pre><code class="language-js">const users = [
{
name: "Zell",
email: "testing1@gmail.com",
password: "12345678"
},
{
name: "Vincy",
email: "testing2@gmail.com",
password: "12345678"
},
{
name: "Shion",
email: "testing3@gmail.com",
password: "12345678"
}
];
</code></pre>
<p>When we save a user's password into the database, we want to hash the password for security reasons. We usually hash the password through the <code>save</code> middleware.</p>
<pre><code class="language-js">// Hashes password automatically
userSchema.pre("save", async function(next) {
if (!this.isModified("password")) return next();
const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync(password, salt);
this.password = hashedPassword;
});
</code></pre>
<p>If you use <code>create</code>, you'll get users with hashed passwords:</p>
<figure role="figure"><img src="https://zellwk.com/images/2019/seed-database/create.png" alt="Create runs the save middleware."></figure>
<p>If you use <code>insertMany</code>, you'll get users without hashed passwords:</p>
<figure role="figure"><img src="https://zellwk.com/images/2019/seed-database/insert-many.png" alt="InsertMany does not run the save middleware."></figure>
<h3 id="whentousecreatewhentouseinsertmany">When to use create, when to use insertMany</h3>
<p>Since <code>insertMany</code> is faster than <code>create</code>, you want to use <code>insertMany</code> whenever you can.</p>
<p>Here's how I do it:</p>
<ol>
<li>If seed data does not require the <code>save</code> middleware, use <code>insertMany</code>.</li>
<li>If seed data requires <code>save</code> middleware, use <code>create</code>. Then, overwrite seed data so it no longer requires the <code>save</code> middleware.</li>
</ol>
<p>For the password example above, I would run <code>create</code> first. Then, I copy-paste the hashed password seed data. Then, I'll run <code>insertMany</code> from this point onwards.</p>
<p>If you want to overwrite complicated seed data, you might want to get JSON straight from MongoDB. To do this, you can use <code>mongoexport</code>:</p>
<pre><code class="language-js">mongoexport --db &lt;databaseName&gt; --collection &lt;collectionName&gt; --jsonArray --pretty --out output.json
</code></pre>
<p>This says:</p>
<ol>
<li>Export <code>&lt;collection&gt;</code> from <code>&lt;databaseName&gt;</code></li>
<li>Creates output as a JSON Array, prettified, in a file called <code>output.json</code>. This file will be placed in the folder where you run the command.</li>
</ol>
<h3 id="seedingmultipletestfilesandcollections">Seeding multiple test files and collections</h3>
<p>You want a place to store your seed data so you can use them across all your tests and collections. Here's a system I use:</p>
<ol>
<li>I name my seed files according to their models. I seed a <code>User</code> model with the <code>user.seed.js</code> file.</li>
<li>I put my seed files in the <code>seeds</code> folder</li>
<li>I loop through each seed file to seed the database.</li>
</ol>
<p>To loop through each seed file, you need to use the <code>fs</code> module. <code>fs</code> stands for filesystem.</p>
<p>The easiest way to loop through the files is to create an <code>index.js</code> file in the same <code>seeds</code> folder. Once you have the <code>index.js</code> file, you can use the following code to look for all files with <code>*.seed.js</code></p>
<pre><code class="language-js">const fs = require("fs");
const util = require("util");
// fs.readdir is written with callbacks.
// This line converts fs.readdir into a promise
const readDir = util.promisify(fs.readdir);
async function seedDatabase() {
// Gets list of files in the directory
// `__dirname` points to the `seeds/` folder
const dir = await readDir(__dirname);
// Gets a list of files that matches *.seed.js
const seedFiles = dir.filter(f =&gt; f.endsWith(".seed.js"));
}
</code></pre>
<p>Once you have a list of seed files, you can loop through each seed file to seed the database. Here, I use a <code>for...of</code> loop to keep things simple.</p>
<pre><code class="language-js">async function seedDatabase() {
for (const file of seedFiles) {
// Seed the database
}
}
</code></pre>
<p>To seed the database, we need to find the correct Mongoose model from the name of the seed file. A file called <code>user.seed.js</code> should seed the <code>User</code> model. This means:</p>
<ol>
<li>We must find <code>user</code> from <code>user.seed.js</code></li>
<li>We must capitalize <code>user</code> into <code>User</code></li>
</ol>
<p>Here's a crude version that does what's required. (If you want to, you can make the code more robust with regex instead of <code>split</code>).</p>
<pre><code class="language-js">for (const file of seedFiles) {
const fileName = file.split(".seed.js")[0];
const modelName = toTitleCase(fileName);
const model = mongoose.models[modelName];
}
</code></pre>
<p>Next, we want to make sure each file has a Model that corresponds to it. If the model cannot be found, we want to throw an error.</p>
<pre><code class="language-js">for (const file of seedFiles) {
//...
if (!model) throw new Error(`Cannot find Model '${modelName}'`);
}
</code></pre>
<p>If there's a corresponding model, we want to seed the database with the contents in the seed file. To do this, we need to read the seed file first. Here, since I used the <code>.js</code> extension, I can simply require the file.</p>
<pre><code class="language-js">for (const file of seedFiles) {
//...
const fileContents = require(path.join(__dirname, file));
}
</code></pre>
<p>For this to work, my seed files must export an array of data.</p>
<pre><code class="language-js">module.exports = [
{
name: "Zell",
email: "testing1@gmail.com",
password: "12345678"
},
{
name: "Vincy",
email: "testing2@gmail.com",
password: "12345678"
},
{
name: "Shion",
email: "testing3@gmail.com",
password: "12345678"
}
];
</code></pre>
<p>Once I have the contents of the seed file, I can run <code>create</code> or <code>insertMany</code>.</p>
<pre><code class="language-js">async function seedDatabase(runSaveMiddleware = false) {
// ...
for (const file of seedFiles) {
// ...
runSaveMiddleware
? model.create(fileContents)
: model.insertMany(fileContents);
}
}
</code></pre>
<p>Here's the whole <code>seedDatabase</code> code:</p>
<pre><code class="language-js">const fs = require("fs");
const util = require("util");
const readDir = util.promisify(fs.readdir).bind(fs);
const path = require("path");
const mongoose = require("mongoose");
function toTitleCase(str) {
return str.replace(/\w\S*/g, txt =&gt; {
return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
});
}
async function seedDatabase(runSaveMiddleware = false) {
const dir = await readDir(__dirname);
const seedFiles = dir.filter(f =&gt; f.endsWith(".seed.js"));
for (const file of seedFiles) {
const fileName = file.split(".seed.js")[0];
const modelName = toTitleCase(fileName);
const model = mongoose.models[modelName];
if (!model) throw new Error(`Cannot find Model '${modelName}'`);
const fileContents = require(path.join(__dirname, file));
runSaveMiddleware
? await model.create(fileContents)
: await model.insertMany(fileContents);
}
}
</code></pre>
<h3 id="whyjsnotjson">Why JS, not JSON?</h3>
<p>It's the industry norm to use JSON to store data. In this case, I find it easier to use JavaScript objects because:</p>
<ol>
<li>I don't have to write opening and closing double-quotes for each property.</li>
<li>I don't have to use double-quotes at all! (It's easier to write single-quotes because there's no need to press the shift key).</li>
</ol>
<pre><code class="language-js">// Which is easier to write. JavaScript objects or JSON?
// JavaScript objects
module.exports = [
{
objectName: "property"
}
][
// JSON
{
objectName: "property"
}
];
</code></pre>
<p>If you want to use JSON, make sure you change <code>seedDatabase</code> to work with JSON. (I'll let you work through the code yourself).</p>
<h2 id="adjustingthesetupdbfunction">Adjusting the setupDB function</h2>
<p>Earlier, I created a <code>setupDB</code> function to help set up databases for my tests. <code>seedDatabase</code> goes into the <code>setupDB</code> function since seeding is part of the setting up process.</p>
<pre><code class="language-js">async function seedDatabase(runSaveMiddleware = false) {
// ...
}
module.exports = {
setupDB(databaseName, runSaveMiddleware = false) {
// Connect to Mongoose
beforeAll(/*...*/);
// Seed Data
beforeEach(async () =&gt; {
await seedDatabase(runSaveMiddleware);
});
// Cleans up database between each test
afterEach(/*...*/);
// Disconnect Mongoose
afterAll(/*...*/);
}
};
</code></pre>
<h3 id="agithubrepository">A Github Repository</h3>
<p>I created a <a href="https://github.com/zellwk/endpoint-testing-example" title="Endpoint testing example">Github repository</a> to go with this article. I hope this demo code helps you start testing your applications.</p>
<hr>
<p>Thanks for reading. This article was originally posted on <a href="https://zellwk.com/blog/endpoint-testing">my blog</a>. Sign up for <a href="https://zellwk.com">my newsletter</a> if you want more articles to help you become a better frontend developer.</p>
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
