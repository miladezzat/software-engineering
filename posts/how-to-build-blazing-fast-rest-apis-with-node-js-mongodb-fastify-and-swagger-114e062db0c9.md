---
card: "https://cdn-media-1.freecodecamp.org/images/1*B8yGyadpWiDJtyXGVtNO-Q.png"
tags: [Nodejs]
description: Presumably no web developer is a stranger to REST APIs and th
author: "Milad E. Fahmy"
title: "How to build blazing fast REST APIs with Node.js, MongoDB, Fastify and Swagger"
created: "2021-08-15T19:39:34+02:00"
modified: "2021-08-15T19:39:34+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nodejs tag-rest-api tag-javascript tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to build blazing fast REST APIs with Node.js, MongoDB, Fastify and Swagger</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*B8yGyadpWiDJtyXGVtNO-Q.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*B8yGyadpWiDJtyXGVtNO-Q.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*B8yGyadpWiDJtyXGVtNO-Q.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*B8yGyadpWiDJtyXGVtNO-Q.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*B8yGyadpWiDJtyXGVtNO-Q.png" alt="How to build blazing fast REST APIs with Node.js, MongoDB, Fastify and Swagger">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Presumably no web developer is a stranger to <strong>REST APIs</strong> and the challenges that architecting an effective and efficient <strong>API</strong> solution brings.</p>
<p>These challenges include:</p>
<ul>
<li>Speed (API Response Times)</li>
<li>Documentation (Clear concise documents, describing the API)</li>
<li>Architecture and Sustainability (Maintainable and expandable codebase)</li>
</ul>
<p>In this tutorial we are going to address all of the above using a combination of <strong>Node.js</strong>, <strong>MongoDB</strong>, <strong>Fastify</strong> and <strong>Swagger</strong>.</p>
<p>The source code for the project is available on <a href="https://github.com/siegfriedgrimbeek/fastify-api" rel="noopener">GitHub</a>.</p>
<h3 id="before-we-begin-">Before we begin…</h3>
<p>You should have some beginner/intermediate <strong>JavaScript knowledge</strong>, have heard of <strong>Node.js</strong> and <strong>MongoDB,</strong> and know what <strong>REST APIs</strong> are.</p>
<p>Below are some links to get you updated:</p>
<ul>
<li><a href="https://developer.mozilla.org/bm/docs/Web/JavaScript" rel="noopener">JavaScript</a></li>
<li><a href="https://codeburst.io/the-only-nodejs-introduction-youll-ever-need-d969a47ef219" rel="noopener">Node.js</a></li>
<li><a href="https://docs.mongodb.com/manual/introduction/" rel="noopener">MongoDB</a></li>
<li><a href="https://restful.io/an-introduction-to-api-s-cee90581ca1b" rel="noopener">REST APIs</a></li>
</ul>
<h4 id="the-technology-we-will-be-using-">The Technology we will be using:</h4>
<ul>
<li><a href="https://www.fastify.io/" rel="noopener">Fastify</a></li>
<li><a href="https://mongoosejs.com/" rel="noopener">Mongoose</a></li>
<li><a href="https://swagger.io/" rel="noopener">Swagger</a></li>
</ul>
<p>It is a good idea to open the above pages in new tabs, for easy reference.</p>
<h4 id="you-will-need-to-have-the-following-installed-">You will need to have the following installed:</h4>
<ul>
<li><a href="https://nodejs.org/en/" rel="noopener">NodeJS/NPM</a></li>
<li><a href="https://docs.mongodb.com/manual/installation/" rel="noopener">MongoDB</a></li>
<li><a href="https://www.getpostman.com/" rel="noopener">Postman</a></li>
</ul>
<p>You will also need an <a href="https://ourcodeworld.com/articles/read/200/top-7-best-free-web-development-ide-for-javascript-html-and-css" rel="noopener"><strong>IDE</strong></a> and a <strong>terminal, </strong>I use <a href="https://www.iterm2.com/" rel="noopener">iTerm2</a> for Mac and <a href="https://hyper.is/" rel="noopener">Hyper</a> for Windows.</p>
<h3 id="let-s-get-started-">Let’s get started!</h3>
<p>Initialise a new project by opening your <strong>terminal,</strong> executing each of the following lines of code:</p><pre><code class="language-bash">mkdir fastify-api
cd fastify-api
mkdir src
cd src
touch index.js
npm init</code></pre>
<p>In the above code, we created two new directories, navigated into them, created an <code>index.js</code> file and initialed our project via <a href="https://www.npmjs.com/" rel="noopener">npm</a>.</p>
<p>You will be prompted to enter several values when initialising a new project, these you can leave blank and update at a later stage.</p>
<p>Once completed, a <a href="https://alligator.io/nodejs/package-json/" rel="noopener">package.json</a> file is generated in the <code>src</code> directory. In this file you can change the values entered when the project was initialised.</p>
<p>Next we install all the <strong>dependancies</strong> that we will need:</p><pre><code class="language-bash">npm i nodemon mongoose fastify fastify-swagger boom</code></pre>
<p>Below is a brief description of what each package does, quoted from their respective websites:</p>
<p><a href="https://github.com/remy/nodemon" rel="noopener"><strong>nodemon</strong></a></p>
<blockquote>nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.<br><br>nodemon does not require <em>any</em> additional changes to your code or method of development. nodemon is a replacement wrapper for <code>node</code>, to use <code>nodemon</code> replace the word <code>node</code> on the command line when executing your script.</blockquote>
<p>To set up <strong>nodemon</strong>, we need to add the following line of code to our <code>package.json</code> file, in the scripts object:</p><pre><code class="language-json">“start”: “./node_modules/nodemon/bin/nodemon.js ./src/index.js”,</code></pre>
<p>Our <code>package.json</code> file should now look as follows:</p><pre><code class="language-json">{
"name": "fastify-api",
"version": "1.0.0",
"description": "A blazing fast REST APIs with Node.js, MongoDB, Fastify and Swagger.",
"main": "index.js",
"scripts": {
"start": "./node_modules/nodemon/bin/nodemon.js ./src/index.js",
"test": "echo \"Error: no test specified\" &amp;&amp; exit 1"
},
"author": "Siegfried Grimbeek &lt;siegfried.grimbeek@gmail.com&gt; (www.siegfriedgrimbeek.co.za)",
"license": "ISC",
"dependencies": {
"boom": "^7.2.2",
"fastify": "^1.13.0",
"fastify-swagger": "^0.15.3",
"mongoose": "^5.3.14",
"nodemon": "^1.18.7"
}
}</code></pre>
<p><a href="https://mongoosejs.com/" rel="noopener"><strong>mongoose</strong></a></p>
<blockquote>Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.</blockquote>
<p><a href="https://www.fastify.io/" rel="noopener"><strong>fastify</strong></a></p>
<blockquote>Fastify is a web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture. It is inspired by Hapi and Express and as far as we know, it is one of the fastest web frameworks in town.</blockquote>
<p><a href="https://github.com/fastify/fastify-swagger" rel="noopener"><strong>fastify-swagger</strong></a></p>
<blockquote><a href="https://swagger.io/" rel="noopener">Swagger</a> documentation generator for Fastify. It uses the schemas you declare in your routes to generate a swagger compliant doc.</blockquote>
<p><a href="https://github.com/hapijs/boom" rel="noopener"><strong>boom</strong></a></p>
<blockquote>boom provides a set of utilities for returning HTTP errors.</blockquote>
<h3 id="setup-up-the-server-and-create-the-first-route-">Setup up the server and create the first route!</h3>
<p>Add the following code to your <code>index.js</code> file:</p><pre><code class="language-js">// Require the framework and instantiate it
const fastify = require('fastify')({
logger: true
})
// Declare a route
fastify.get('/', async (request, reply) =&gt; {
return { hello: 'world' }
})
// Run the server!
const start = async () =&gt; {
try {
await fastify.listen(3000)
fastify.log.info(`server listening on ${fastify.server.address().port}`)
} catch (err) {
fastify.log.error(err)
process.exit(1)
}
}
start()</code></pre>
<p>We require the <strong>Fastify</strong> framework, declare our first route and initialise the server on <code>port 3000</code>, the code is pretty self explanatory but take note of the options object passed when initialising <strong>Fastify</strong>:</p><pre><code class="language-js">// Require the fastify framework and instantiate it
const fastify = require('fastify')({
logger: true
})</code></pre>
<p>The above code enables <strong>Fastify’s</strong> built in logger which is disabled by default.</p>
<p>You can now run the follow code in your <code>src</code> directory in your <strong>terminal</strong>:</p><pre><code class="language-bash">npm start</code></pre>
<p>Now when you navigate to <a href="http://localhost:3000/" rel="noopener">http://localhost:3000/</a> you should see the <code>{hello:world}</code> object returned.</p>
<p>We will get back to the <code>index.js</code> file but for now let’s move on to setting up our database.</p>
<h3 id="start-mongodb-and-create-the-model-">Start MongoDB and create the model!</h3>
<p>Once <strong>MongoDB</strong> has been successfully installed, you can open a new terminal window and start up a <strong>MongoDB</strong> instance by running the following:</p><pre><code>mongod</code></pre>
<p>With <strong>MongoDB</strong>, we do not need to create a database. We can just specify a name in the setup and as soon as we store data, <strong>MongoDB</strong> will create this database for us.</p>
<p>Add the following to your <code>index.js</code> file:</p><pre><code class="language-js">...
// Require external modules
const mongoose = require('mongoose')
// Connect to DB
mongoose.connect(‘mongodb://localhost/mycargarage’)
.then(() =&gt; console.log(‘MongoDB connected…’))
.catch(err =&gt; console.log(err))
...</code></pre>
<p>In the above code we require <strong>Mongoose</strong> and connect to our <strong>MongoDB</strong> database. The database is called <code>mycargarage</code> and if all went well, you will now see <code>MongoDB connected... </code>in your terminal.</p>
<p><em>Notice that you did not have to restart the app, thanks to the <code>Nodemon</code> package that we added earlier.</em></p>
<p>Now that our database is up and running, we can create our first Model. Create a new folder within the <code>src</code> directory called <code>models</code>, and within it create a new file called <code>Car.js</code> and add the following code:</p><pre><code class="language-js">// External Dependancies
const mongoose = require('mongoose')
const carSchema = new mongoose.Schema({
title: String,
brand: String,
price: String,
age: Number,
services: {
type: Map,
of: String
}
})
module.exports = mongoose.model('Car', carSchema)</code></pre>
<p>The above code declares our <code>carSchema</code> that contains all the information related to our cars. Apart from the two obvious data types: <code>String</code> and <code>Number</code>. We also make use of a <code>Map</code> which is relatively new to <strong>Mongoose</strong> and you can read more about it <a href="https://thecodebarbarian.com/whats-new-in-mongoose-5.1-map-support.html" rel="noopener">here</a>. We then export our <code>carSchema</code> to be used within our app.</p>
<p>We could proceed with setting up our routes, controllers and config in the <code>index.js</code> file, but part of this tutorial is demonstrating a sustainable codebase. Therefore each component will have its own folder.</p>
<h3 id="create-the-car-controller">Create the car controller</h3>
<p>To get started with creating the controllers, we create a folder in the <code>src</code> directory called <code>controllers</code>, and within the folder, we create a <code>carController.js</code> file:</p><pre><code class="language-js">// External Dependancies
const boom = require('boom')
// Get Data Models
const Car = require('../models/Car')
// Get all cars
exports.getCars = async (req, reply) =&gt; {
try {
const cars = await Car.find()
return cars
} catch (err) {
throw boom.boomify(err)
}
}
// Get single car by ID
exports.getSingleCar = async (req, reply) =&gt; {
try {
const id = req.params.id
const car = await Car.findById(id)
return car
} catch (err) {
throw boom.boomify(err)
}
}
// Add a new car
exports.addCar = async (req, reply) =&gt; {
try {
const car = new Car(req.body)
return car.save()
} catch (err) {
throw boom.boomify(err)
}
}
// Update an existing car
exports.updateCar = async (req, reply) =&gt; {
try {
const id = req.params.id
const car = req.body
const { ...updateData } = car
const update = await Car.findByIdAndUpdate(id, updateData, { new: true })
return update
} catch (err) {
throw boom.boomify(err)
}
}
// Delete a car
exports.deleteCar = async (req, reply) =&gt; {
try {
const id = req.params.id
const car = await Car.findByIdAndRemove(id)
return car
} catch (err) {
throw boom.boomify(err)
}
}</code></pre>
<p>The above may seem like a little much to take in, but it is actually really simple.</p>
<ul>
<li>We require <strong>boom</strong> to handle our errors: <code>boom.boomify(err)</code>.</li>
<li>We export each of our functions which we will use in our route.</li>
<li>Each function is an <strong>async </strong>function that can contain an <strong>await</strong> expression that pauses the execution of the <strong>async function</strong> and waits for the passed Promise’s resolution, and then resumes the <strong>async function’s</strong> execution and returns the resolved value. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function" rel="noopener">Learn more here.</a></li>
<li>Each function is wrapped in a try / catch statement. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch" rel="noopener">Learn more here.</a></li>
<li>Each function takes two parameters: <code>req</code> (the request) and <code>reply</code> (the reply). In our tutorial we only make use of the request parameter. We will use it to access the request body and the request parameters, allowing us to process the data. <a href="https://www.fastify.io/docs/latest/Reply/" rel="noopener">Learn more here.</a></li>
<li>Take note of the code on line 31:<br><code>const car = new Car({ …req.body })</code> <br>This makes use of the <strong>JavaScript</strong> spread operator. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax" rel="noopener">Learn more here.</a></li>
<li>Take note of the code on line 42:<br><code>const { …updateData } = car</code><br>This makes use of the <strong>JavaScript </strong>destructuring in conjunction with the spread operator. <a href="https://codeburst.io/use-es2015-object-rest-operator-to-omit-properties-38a3ecffe90" rel="noopener">Learn more here.</a></li>
</ul>
<p>Other than that, we make use of some standard <strong>Mongoose </strong>features used to manipulate our database.</p>
<p>You are probably burning to fire up your API and do a sanity check, but before we do this, we just need to connect the <strong>controller </strong>to the <strong>routes </strong>and then lastly connect the <strong>routes </strong>to the app.</p>
<h4 id="create-and-import-the-routes">Create and import the routes</h4>
<p>Once again, we can start by creating a folder in the root directory of our project, but this time, it is called <code>routes</code>. Within the folder, we create an <code>index.js</code> file with the following code:</p><pre><code class="language-js">// Import our Controllers
const carController = require('../controllers/carController')
const routes = [
{
method: 'GET',
url: '/api/cars',
handler: carController.getCars
},
{
method: 'GET',
url: '/api/cars/:id',
handler: carController.getSingleCar
},
{
method: 'POST',
url: '/api/cars',
handler: carController.addCar,
schema: documentation.addCarSchema
},
{
method: 'PUT',
url: '/api/cars/:id',
handler: carController.updateCar
},
{
method: 'DELETE',
url: '/api/cars/:id',
handler: carController.deleteCar
}
]
module.exports = routes</code></pre>
<p>Here we are requiring our <strong>controller</strong> and assigning each of the functions that we created in our controller to our routes.</p>
<p>As you can see, each route consists out of a method, a url and a handler, instructing the app on which function to use when one of the routes is accessed.</p>
<p>The <code>:id</code> following some of the routes is a common way to pass parameters to the routes, and this will allow us to access the <strong>id </strong>as follows:</p>
<p><code><a href="http://127.0.0.1:3000/api/cars/5bfe30b46fe410e1cfff2323" rel="noopener">http://127.0.0.1:3000/api/cars/5bfe30b46fe410e1cfff2323</a></code></p>
<h4 id="putting-it-all-together-and-testing-our-api">Putting it all together and testing our API</h4>
<p>Now that we have most of our parts constructed, we just need to connect them all together to start serving data via our <strong>API</strong>. Firstly we need to import our <strong>routes</strong> that we created by adding the following line of code to our main <code>index.js</code> file:</p><pre><code class="language-js">const routes = require(‘./routes’)</code></pre>
<p>We then need to loop over our routes array to initialise them with <strong>Fastify. </strong>We can do this with the following code, which also needs to be added to the main <code>index.js</code> file:</p><pre><code class="language-js">routes.forEach((route, index) =&gt; {
fastify.route(route)
})</code></pre>
<p>Now we are ready to start testing!</p>
<p>The best tool for the job is <a href="https://www.getpostman.com/" rel="noopener">Postman</a>, which we will use to test all of our routes. We will be sending our data as raw objects in the body of the request and as parameters.</p>
<p>Finding all cars:</p>
<p>Finding a single car:</p>
<p>Adding a new car**:</p>
<p>** The services appear to be empty, but the information does in fact persist to the database.</p>
<p>Updating a car:</p>
<p>Deleting a car:</p>
<p>We now have a fully functional API — but what about the documentation? This is where <strong>Swagger</strong> is really handy.</p>
<h4 id="adding-swagger-and-wrapping-up-">Adding Swagger and wrapping up.</h4>
<p>Now we will create our final folder called <strong>config.</strong> Inside we will create a file called <code>swagger.js</code> with the following code:</p><pre><code class="language-js">exports.options = {
routePrefix: '/documentation',
exposeRoute: true,
swagger: {
info: {
title: 'Fastify API',
description: 'Building a blazing fast REST API with Node.js, MongoDB, Fastify and Swagger',
version: '1.0.0'
},
externalDocs: {
url: 'https://swagger.io',
description: 'Find more info here'
},
host: 'localhost',
schemes: ['http'],
consumes: ['application/json'],
produces: ['application/json']
}
}</code></pre>
<p>The above code is an object with the options which we will pass into our <strong>fastify-swagger </strong>plugin. To do this, we need to add the following to our <code>index.js</code> file:</p><pre><code class="language-js">// Import Swagger Options
const swagger = require(‘./config/swagger’)
// Register Swagger
fastify.register(require(‘fastify-swagger’), swagger.options)</code></pre>
<p>And then we need to add the following line after we have initialised our <strong>Fastify</strong> server:</p><pre><code class="language-js">...
await fastify.listen(3000)
fastify.swagger()
fastify.log.info(`listening on ${fastify.server.address().port}`)
...</code></pre>
<p>And that is it! If you now navigate to <a href="http://localhost:3000/documentation" rel="noopener">http://localhost:3000/documentation</a>, you should see the following:</p>
<p>As simple as that! You now have self updating API documentation that will evolve with your API. You can easily add additional information to your routes, see more <a href="https://github.com/fastify/fastify-swagger" rel="noopener">here</a>.</p>
<h4 id="whats-next">Whats Next?</h4>
<p>Now that we have a basic API in place, the possibilities are limitless. It can be used as the base for any app imaginable.</p>
<p>In the next tutorial, we will integrate <strong>GraphQL</strong> and eventually integrate the frontend with <strong>Vue.js</strong> too!</p>
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
