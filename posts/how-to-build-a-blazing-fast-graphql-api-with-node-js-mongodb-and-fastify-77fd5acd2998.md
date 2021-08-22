---
card: "https://cdn-media-1.freecodecamp.org/images/1*vUgaEEzxSp2YWsJ7p7jgjA.png"
tags: [GraphQL]
description: This tutorial is part two of a four part series, which aims t
author: "Milad E. Fahmy"
title: "How to build a blazing fast GraphQL API with Node.js, MongoDB and Fastify"
created: "2021-08-15T19:33:50+02:00"
modified: "2021-08-15T19:33:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-graphql tag-javascript tag-nodejs tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to build a blazing fast GraphQL API with Node.js, MongoDB and Fastify</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*vUgaEEzxSp2YWsJ7p7jgjA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*vUgaEEzxSp2YWsJ7p7jgjA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*vUgaEEzxSp2YWsJ7p7jgjA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*vUgaEEzxSp2YWsJ7p7jgjA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*vUgaEEzxSp2YWsJ7p7jgjA.png" alt="How to build a blazing fast GraphQL API with Node.js, MongoDB and Fastify">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>This tutorial is part two of a four part series, which aims to take you from scratch to deploying a fully <strong>functional full stack application.</strong></p>
<ul>
<li>Part 1: How to build blazing fast REST APIs with Node.js, MongoDB, Fastify and Swagger</li>
<li><strong>Part 2: How to build a blazing fast GraphQL API with Node.js, MongoDB, Fastify and GraphQL! (You are here.)</strong></li>
<li>Part 3: Coupling <strong>Vue.js </strong>with a <strong>GraphQL API</strong>.</li>
<li>Part 4: Deploying a <strong>GraphQL API </strong>and <strong>Vue.js </strong>frontend application<strong>.</strong></li>
</ul>
<p>The first part of the series is available <a href="https://medium.freecodecamp.org/how-to-build-blazing-fast-rest-apis-with-node-js-mongodb-fastify-and-swagger-114e062db0c9" rel="noopener">here</a> and the source code for the application can be found <a href="https://github.com/siegfriedgrimbeek/fastify-graphql-api" rel="noopener">here</a>.</p>
<p>In this part we will revisit the <strong>models</strong>, <strong>controllers</strong> and <strong>routes</strong> from part one and then integrate <a href="https://graphql.org/" rel="noopener"><strong>GraphQL</strong></a> into the application. As a bonus we will also use <a href="https://github.com/marak/Faker.js/" rel="noopener"><strong>Faker.js</strong></a><strong> </strong>to create some fake data and seed <strong>the database</strong>.</p>
<h3 id="introduction-">Introduction:</h3>
<p><strong>GraphQL</strong> is a query language for APIs and a runtime for fulfilling those queries with your existing data.</p>
<p>Every <strong>GraphQL</strong> query goes through three phases: the queries are parsed, validated and executed.</p>
<p><strong>GraphQL</strong> provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need, makes it easier to evolve APIs over time, and enables powerful developer tools. <a href="https://graphql.org/" rel="noopener">Learn More</a>.</p>
<h3 id="prerequisites-">Prerequisites…</h3>
<p>If you have completed the first part of this series, you should be up to speed with beginner/intermediate <strong>JavaScript </strong>knowledge, <strong>Node.js, Fastify.JS </strong>and <strong>MongoDB (Mongoose).</strong></p>
<p>To follow along, you will need to complete <a href="https://medium.freecodecamp.org/how-to-build-blazing-fast-rest-apis-with-node-js-mongodb-fastify-and-swagger-114e062db0c9" rel="noopener">part one</a> of this series or grab the code from <a href="https://github.com/siegfriedgrimbeek/fastify-api" rel="noopener">Git</a>, although I would highly recommend at least skimming through <a href="https://medium.freecodecamp.org/how-to-build-blazing-fast-rest-apis-with-node-js-mongodb-fastify-and-swagger-114e062db0c9" rel="noopener">part one</a>.</p>
<h3 id="let-s-get-started-">Let’s get started!</h3>
<p>Clone the repo for part one (skip this step if you followed part one and you are continuing with your own code) by opening your <strong>terminal, </strong>navigating to your project directory and<strong> </strong>executing each of the following lines of code:</p><pre><code class="language-bash">git clone https://github.com/siegfriedgrimbeek/fastify-api.git
cd fastify-api</code></pre>
<p>So now that we have a copy of the codebase we will <a href="https://www.npmjs.com/package/npm-check-updates" rel="noopener">update our packages</a> and <code>package.json</code> file by running the following code:</p><pre><code class="language-bash">sudo npm i -g npm-check-updates
ncu -u
npm install</code></pre>
<p>First we globally install the <a href="https://docs.npmjs.com/about-npm/" rel="noopener">npm</a> package “<a href="https://www.npmjs.com/package/npm-check-updates" rel="noopener"><strong>npm-check-updates</strong></a>” and then we use this package to automatically update our <code>package.json</code> file with the latest package versions and then we install/update all our <strong>npm modules</strong> by running <code>npm install</code>.</p>
<p>This is done to ensure that everyone completing the tutorial is working with the same package versions.</p>
<h3 id="refactor-our-server-and-start-the-app-">Refactor our server and start the app!</h3>
<p>As with all software solutions, as the solution grows, developers often need to <strong>revisit</strong> and <a href="https://en.wikipedia.org/wiki/Code_refactoring" rel="noopener"><strong>refactor</strong></a> the code.</p>
<p>In the <code>src</code> directory we will create a new file called <code>server.js</code>:</p><pre><code class="language-bash">cd src
touch server.js</code></pre>
<p>Add the following code code to the <code>server.js</code> file:</p>
const fastify = require('fastify')({
logger: true
})
// Require external modules
const mongoose = require('mongoose')
// Connect to DB
mongoose
.connect('mongodb://localhost/mycargarage')
.then(() =&gt; console.log('MongoDB connected...'))
.catch(err =&gt; console.log(err))
module.exports = fastify</code></pre>
<figcaption>server.js</figcaption>
</figure>
<p>We have now extracted the logic that starts the <strong>server</strong> to the <code>server.js</code> file, allowing us to reuse this code throughout the project.</p>
<p>Next we need to update our <code>index.js</code> file in the <code>src</code> directory:</p>
// Import Server
const fastify = require('./server.js')
// Import Routes
const routes = require('./routes')
// Import Swagger Options
const swagger = require('./config/swagger')
// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)
// Loop over each route
routes.forEach((route, index) =&gt; {
fastify.route(route)
})
// Run the server!
const start = async () =&gt; {
try {
await fastify.listen(3000, '0.0.0.0')
fastify.swagger()
fastify.log.info(`server listening on ${fastify.server.address().port}`)
} catch (err) {
fastify.log.error(err)
process.exit(1)
}
}
start()</code></pre>
<figcaption>index.js</figcaption>
</figure>
<p>We will revisit the <code>index.js</code> file, once we setup and configure <strong>GraphQL.</strong></p>
<p>Start the <strong>Fastify </strong>server by running the following code in your <strong>terminal</strong>:</p><pre><code class="language-bash">npm start</code></pre>
<p>Note that there is no default route setup so for now, navigating to <a href="http://localhost:3000/" rel="noopener">http://localhost:3000/</a> will result in the server returning a 404 error which is correct.</p>
<h3 id="start-mongodb-and-update-the-models">Start MongoDB and update the models</h3>
<p>Let’s extend the existing model to also include <strong>Services</strong> and <strong>Owners.</strong> The below diagram below demonstrates the relationships between the collections:</p>
<figcaption>Data models</figcaption>
</figure>
<ul>
<li>One car can have one owner.</li>
<li>One owner can have many cars.</li>
<li>One car can have many services.</li>
</ul>
<p>Revisit the <code>Car.js</code> file in the <code>models</code> directory and update it as follows:</p>
const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId
const carSchema = new mongoose.Schema({
title: String,
brand: String,
price: String,
age: Number,
owner_id: ObjectId
})
module.exports = mongoose.model("Car", carSchema)</code></pre>
<figcaption>Car.js</figcaption>
</figure>
<p>Create two new files in the <code>models</code> directory, <code>Owner.js </code>and <code>Service.js</code> and add the following code to the files respectively:</p>
<p><code>Owner.js</code></p>
const mongoose = require('mongoose')
const ownerSchema = new mongoose.Schema({
firstName: String,
lastName: String,
email: String
})
module.exports = mongoose.model('Owner', ownerSchema)</code></pre>
<figcaption>Owner.js</figcaption>
</figure>
<p><code>Service.js</code></p><pre><code class="language-js">// External Dependancies
const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId
const serviceSchema = new mongoose.Schema({
car_id: ObjectId,
name: String,
date: String
})
module.exports = mongoose.model("Service", serviceSchema)
view rawService.js hosted with ❤ by GitHub</code></pre>
<p>There are no new concepts used in the above code. We have just created standard <a href="https://mongoosejs.com/docs/guide.html" rel="noopener">Mongoose Schemas</a>, as with the <code>Car.js</code> model.</p>
<h3 id="revisit-the-car-controller-and-create-the-additional-controllers">Revisit the Car Controller and create the additional controllers</h3>
<p>There are some slight changes to the <code>carController.js</code> so navigate to the <code>controllers</code> directory and update your file as per below:</p>
const boom = require('boom')
// Get Data Models
const Car = require('../models/Car')
// Get all cars
exports.getCars = async () =&gt; {
try {
const cars = await Car.find()
return cars
} catch (err) {
throw boom.boomify(err)
}
}
// Get single car by ID
exports.getSingleCar = async req =&gt; {
try {
const id = req.params === undefined ? req.id : req.params.id
const car = await Car.findById(id)
return car
} catch (err) {
throw boom.boomify(err)
}
}
// Add a new car
exports.addCar = async req =&gt; {
try {
const car = new Car(req)
const newCar = await car.save()
return newCar
} catch (err) {
throw boom.boomify(err)
}
}
// Update an existing car
exports.updateCar = async req =&gt; {
try {
const id = req.params === undefined ? req.id : req.params.id
const updateData = req.params === undefined ? req : req.params
const update = await Car.findByIdAndUpdate(id, updateData, { new: true })
return update
} catch (err) {
throw boom.boomify(err)
}
}
// Delete a car
exports.deleteCar = async req =&gt; {
try {
const id = req.params === undefined ? req.id : req.params.id
const car = await Car.findByIdAndRemove(id)
return car
} catch (err) {
throw boom.boomify(err)
}
}</code></pre>
<figcaption>carController.js</figcaption>
</figure>
<p>Create two new files in the <code>controllers</code> directory, <code>serviceController.js</code> and <code>ownerController.js</code>, and add the following code to the files respectively:</p>
<p><code>serviceController.js</code></p>
const boom = require('boom')
// Get Data Models
const Service = require('../models/Service')
// Get single service ID
exports.getSingleService = async req =&gt; {
try {
const id = req.params === undefined ? req.id : req.params.id
const service = await Service.findById(id)
return service
} catch (err) {
throw boom.boomify(err)
}
}
// Get single car's services
exports.getCarsServices = async req =&gt; {
try {
const id = req.params === undefined ? req.id : req.params.id
const services = await Service.find({ car_id: id })
return services
} catch (err) {
throw boom.boomify(err)
}
}</code></pre>
<figcaption>serviceController.js</figcaption>
</figure>
<p><code>ownerController.js</code></p>
const boom = require('boom')
// Get Data Models
const Owner = require('../models/Owner')
const Car = require('../models/Car')
// Get all owners
exports.getOwner = async () =&gt; {
try {
const owners = await Owner.find()
return owners
} catch (err) {
throw boom.boomify(err)
}
}
// Get single owner by ID
exports.getSingleOwner = async req =&gt; {
try {
const id = req.params === undefined ? req.id : req.params.id
const owner = await Owner.findById(id)
return owner
} catch (err) {
throw boom.boomify(err)
}
}
// Get single owner's cars
exports.getOwnersCars = async req =&gt; {
try {
const id = req.params === undefined ? req.id : req.params.id
const cars = await Car.find({ owner_id: id })
return cars
} catch (err) {
throw boom.boomify(err)
}
}</code></pre>
<figcaption>ownerController.js</figcaption>
</figure>
<p>The biggest change to the controllers is how we get the parameters:</p><pre><code class="language-js">const id = req.params === undefined ? req.id : req.params.id
const updateData = req.params === undefined ? req : req.params</code></pre>
<p>The above code is called a “<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator" rel="noopener"><strong>conditional (ternary) operator</strong></a><strong>” </strong>and is used as shorthand for the following if statement:</p><pre><code class="language-js">let id
if (req.params === undefined) {
id = req.id
} else {
id = req.params.id
}</code></pre>
<p>We are using the <strong>ternary operator </strong>to accommodate requests from both the <strong>REST API</strong> and the <strong>GraphQL API</strong>, as they have a slightly different implementation.</p>
<h3 id="time-to-seed-the-database-with-some-fake-data-">Time to seed the database with some fake data!</h3>
<p>In the <code>src</code> directory let’s create a new directory and file by running the following code:</p><pre><code class="language-js">mkdir helpers
touch seed.js</code></pre>
<p>Add the following code to the <code>seed.js</code> file:</p>
// Import external dependancies
const faker = require('faker')
const boom = require('boom')
// Import internal dependancies
const fastify = require('../server.js')
// Fake data
const cars = [
{
name: 'Tesla',
models: ['S', 'E', 'X', 'Y']
},
{
name: 'Mercedes',
models: ['GLA', 'GLC', 'GLE', 'GLS']
},
{
name: 'BMW',
models: ['X4', 'Z3', 'M2', '7']
},
{
name: 'Audi',
models: ['A1', 'A3', 'A4', 'A5']
},
{
name: 'Ford',
models: ['Fiesta', 'Focus', 'Fusion', 'Mustang']
}
]
const serviceGarages = ['A++ Auto Services', "Gary's Garage", 'Super Service', 'iGarage', 'Best Service']
// Get Data Models
const Car = require('../models/Car')
const Owner = require('../models/Owner')
const Service = require('../models/Service')
// Fake data generation functions
const generateOwnerData = () =&gt; {
let ownerData = []
let i = 0
while (i &lt; 50) {
const firstName = faker.fake('{{name.firstName}}')
const lastName = faker.fake('{{name.lastName}}')
const email = faker.fake(`${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`)
const owner = {
firstName,
lastName,
email
}
ownerData.push(owner)
i++
}
return ownerData
}
const generateCarData = ownersIds =&gt; {
let carData = []
let i = 0
while (i &lt; 1000) {
const owner_id = faker.random.arrayElement(ownersIds)
const carObject = faker.random.arrayElement(cars)
const title = faker.random.arrayElement(carObject.models)
const price = faker.random.number({ min: 5000, max: 30000 })
const age = faker.random.number({ min: 2, max: 10 })
const car = {
owner_id,
brand: carObject.name,
title,
price,
age
}
carData.push(car)
i++
}
return carData
}
const generateServiceData = carsIds =&gt; {
let serviceData = []
let i = 0
while (i &lt; 5000) {
const car_id = faker.random.arrayElement(carsIds)
const name = faker.random.arrayElement(serviceGarages)
const date = faker.fake('{{date.past}}')
const service = {
car_id,
name,
date
}
serviceData.push(service)
i++
}
return serviceData
}
fastify.ready().then(
async () =&gt; {
try {
const owners = await Owner.insertMany(generateOwnerData())
const ownersIds = owners.map(x =&gt; x._id)
const cars = await Car.insertMany(generateCarData(ownersIds))
const carsIds = cars.map(x =&gt; x._id)
const services = await Service.insertMany(generateServiceData(carsIds))
console.log(`
Data successfully added:
- ${owners.length} owners added.
- ${cars.length} cars added.
- ${services.length} services added.
`)
} catch (err) {
throw boom.boomify(err)
}
process.exit()
},
err =&gt; {
console.log('An error occured: ', err)
process.exit()
}
)</code></pre>
<figcaption>seed.js</figcaption>
</figure>
<p>Let’s break down this mountain of code:</p>
<p>First we import two external libraries, <a href="https://github.com/marak/Faker.js/" rel="noopener"><strong>Faker.js</strong></a><strong> </strong>which is used to generate fake data and <a href="https://github.com/hapijs/boom" rel="noopener"><strong>Boom</strong></a>, which is used to throw http friendly error objects.</p>
<p>Then we import the <code>server.js</code> file which will spin up an instance of our server allowing us to interact with the <strong>models</strong>.</p>
<p>We then declare two arrays with fake data, <code>cars</code> and <code>serviceGarages</code>.</p>
<p>Then we import the <code>models</code> and declare three functions (<code>generateOwnerData</code>, <code>generateCarData</code>, <code>generateServiceData</code>) which each return an array of objects with the <strong>owner</strong>, <strong>car</strong> and <strong>service</strong> data respectively.</p>
<p>Once the <strong>Fastify.js </strong>instance is ready we use the <a href="https://mongoosejs.com/docs/api.html#model_Model.insertMany" rel="noopener"><strong>Mongoose </strong><code>insertMany()</code> function</a> to insert the generated arrays into the database. The function then returns an array of objects containing the original object data and <code>ids</code> of the each record.</p>
<p>We use the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" rel="noopener"><strong>JavaScript Map</strong></a> function to create an array of <code>ids</code> <strong>owners</strong> and <strong>cars</strong> arrays. We use the <code>ownersIDs</code> array for when generating car data and we use the <code>carsIds</code> array when generating service data, they are passed into the respective functions and then values are randomly selected from them.</p>
<p>Lastly we need to install the <strong>Faker.js</strong> package and add the seed task to our <code>package.json</code> file.</p>
<p>We can add the <strong>Faker.js </strong>package by navigating to the <strong>root directory</strong> and running the following code:</p><pre><code class="language-bash">npm i faker -D</code></pre>
<p>We then add the following to the <code>package.json</code> file:</p><pre><code class="language-json">...
"scripts": {
...
"seed": "node ./src/helpers/seed.js"
},
...</code></pre>
<p>That’s it! We can now run our seeding script from the project root directory with the following code:</p><pre><code class="language-bash">npm run seed</code></pre>
<p>If you are using <a href="https://www.mongodb.com/products/compass" rel="noopener">MongoDB Compass</a> (you should), you will see the data in your database:</p>
<figcaption>“mycargarage” database viewed in MongoDB Compass</figcaption>
</figure>
<h3 id="graphql-installation-setup-and-testing">GraphQL installation, setup and testing</h3>
<p>Let’s get started by navigating to the <strong>root directory</strong> and running the following code:</p><pre><code class="language-bash">npm i fastify-gql graphql</code></pre>
<p>The above installs <strong>GraphQL</strong> and the <strong>Fastify barebone GraphQL</strong> adapter.</p>
<p>Navigate to the <code>src</code> directory and run the following code:</p><pre><code class="language-bash">mkdir schema
cd shema
touch index.js</code></pre>
<p>Navigate to the <code>src</code> directory update the <code>index.js</code> file with the following:</p><pre><code class="language-js">// Import Server
const fastify = require('./server.js')
// Import external dependancies
const gql = require('fastify-gql')
// Import GraphQL Schema
const schema = require('./schema')
// Register Fastify GraphQL
fastify.register(gql, {
schema,
graphiql: true
})
... end here
// Import Routes
const routes = require('./routes')</code></pre>
<p>With the above code we require the <strong>Fastify GraphQL Adapter, </strong>import the <strong>schema </strong>and register the <strong>GraphQl Adapter </strong>with <strong>Fastify.</strong></p>
<p>We register the <strong>schema </strong>and enable <strong>GraphiQL, </strong>an in-browser <a href="https://en.wikipedia.org/wiki/Integrated_development_environment" rel="noopener"><strong>IDE</strong></a> for exploring <strong>GraphQL</strong>.</p>
<p>Navigate to the <code>schema</code> directory and open the <code>index.js</code> file and add the following boilerplate code:</p>
const graphql = require('graphql')
// Destructure GraphQL functions
const {
GraphQLSchema,
GraphQLObjectType,
GraphQLString,
GraphQLInt,
GraphQLID,
GraphQLList,
GraphQLNonNull
} = graphql
// Import Controllers
const carController = require('../controllers/carController')
const ownerController = require('../controllers/ownerController')
const serviceController = require('../controllers/serviceController')
// Define Object Types
const carType = new GraphQLObjectType({
name: 'Car',
fields: () =&gt; ({})
})
const ownerType = new GraphQLObjectType({
name: 'Owner',
fields: () =&gt; ({})
})
const serviceType = new GraphQLObjectType({
name: 'Service',
fields: () =&gt; ({})
})
// Define Root Query
const RootQuery = new GraphQLObjectType({
name: 'RootQueryType',
fields: {
car: {},
cars: {},
owner: {},
service: {}
}
})
// Define Mutations
const Mutations = new GraphQLObjectType({
name: 'Mutations',
fields: {
addCar: {
type: carType,
args: {},
async resolve(args) {
return ''
}
},
editCar: {
type: carType,
args: {},
async resolve(args) {
return ''
}
},
deleteCar: {
type: carType,
args: {},
async resolve(args) {
return ''
}
}
}
})
// Export the schema
module.exports = new GraphQLSchema({
query: RootQuery,
mutation: Mutations
})</code></pre>
<figcaption>index.js</figcaption>
</figure>
<p>Let’s run through the above code:</p>
<p>We require the main <strong>GraphQL </strong>package and use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" rel="noopener">JavaScript Destructuring</a> to get the necessary <strong>GraphQL </strong>functions(<code>GraphQLSchema</code>, <code>GraphQLObjectType</code>, <code>GraphQLString</code>, <code>GraphQLInt</code>, <code>GraphQLID</code>, <code>GraphQLList</code> and <code>GraphQLNonNull</code>).</p>
<p>We import our three <code>controllers</code> (<code>carController</code>, <code>ownerController</code> and <code>serviceController</code>).</p>
<p>We declare the <code>carType</code>, <code>ownerType</code> and <code>serviceType</code> <a href="https://graphql.org/graphql-js/object-types/" rel="noopener"><strong>GraphQL Object Types</strong></a><strong>, </strong>which are functions that accept an object as a parameter, with a <code>name</code> and a <code>fields</code> key.</p>
<p>These functions are used to define our <strong>GraphQL </strong>schema, similar to the <strong>Mongoose </strong>models defined earlier.</p>
<p>The fields can return a particular <strong>type</strong>, and <strong>methods</strong> that take arguments. <a href="https://graphql.org/graphql-js/object-types/" rel="noopener">Learn More about Object Types</a>.</p>
<p>Then we declare the <code>RootQuery</code> which is also a <strong>GraphQL Object Type</strong> and is found at the top level of every <strong>GraphQL</strong> server. It represents all of the possible entry points into the <strong>GraphQL API. </strong><a href="https://graphql.org/learn/execution/" rel="noopener">Learn More about root fields and resolvers</a>.</p>
<p>We then declare our <code>Mutations</code>, which are used to <strong>change data.</strong> Although any query could be implemented to change data, operations that cause changes should be sent explicitly <strong>via a mutation</strong>. <a href="https://graphql.org/learn/queries/#mutations" rel="noopener">Learn More about Mutations</a>.</p>
<p>Lastly we export the <code>GraphQLSchema.</code></p>
<p>Now that we have our template setup we can start populating the <strong>Object Types</strong>, <strong>Root Query</strong> and <strong>Mutations</strong>.</p>
<p>Note that there are <a href="https://github.com/sarkistlt/mongoose-schema-to-graphql" rel="noopener">Mongoose to GraphQL</a> schema generators available, but for the tutorial purposes we will manually create the schema.</p>
<p>Let’s update the <code>carType</code> <strong>Object Type</strong> as follows:</p>
name: 'Car',
fields: () =&gt; ({
_id: { type: GraphQLID },
title: { type: GraphQLString },
brand: { type: GraphQLString },
price: { type: GraphQLString },
age: { type: GraphQLInt },
owner_id: { type: GraphQLID },
owner: {
type: ownerType,
async resolve(parent, args) {
return await ownerController.getSingleOwner({ id: parent.owner_id })
}
},
services: {
type: new GraphQLList(serviceType),
async resolve(parent, args) {
return await serviceController.getCarsServices({ id: parent._id })
}
}
})
})</code></pre>
<figcaption>carType Object Type</figcaption>
</figure>
<p>Let’s dive deeper into the <strong>GraphQL </strong>functions, starting with the <a href="https://softwareengineering.stackexchange.com/questions/238033/what-does-it-mean-when-data-is-scalar" rel="noopener">Scalars</a> types in <strong>GraphQL</strong>:</p>
<p><strong>GraphQL</strong> comes with a set of default scalar types out of the box:</p>
<ul>
<li><code>Int</code>: A signed 32‐bit integer. <code>GraphQLInt</code></li>
<li><code>Float</code>: A signed double-precision floating-point value. <code>GraphQLFloat</code></li>
<li><code>String</code>: A UTF‐8 character sequence. <code>GraphQLString</code></li>
<li><code>Boolean</code>: <code>true</code> or <code>false</code>. <code>GraphQLBoolean</code></li>
<li><code>ID</code>: The ID scalar type represents a unique identifier, often used to refetch an object or as the key for a cache. The ID type is serialised in the same way as a String; however, defining it as an <code>ID</code> signifies that it is not intended to be human‐readable. <code>GraphQLID</code></li>
</ul>
<p>The <code>owner</code> and <code>service</code> fields are where it gets interesting. These fields are not defined as <strong>Scalar types</strong> like the rest — instead, their <code>type</code> is referencing the <code>ownerType</code> and <code>serviceType</code> that we have created and are yet to populate.</p>
<p>The second argument that we pass into the <code>owner</code> and <code>service</code> fields are <a href="https://graphql.org/learn/execution/" rel="noopener">resolver</a> functions.</p>
<p>Resolver functions or methods are functions that <strong>resolves a value</strong> for a type or field in a schema</p>
<p>Resolvers can be asynchronous too! They can resolve values from another <strong>REST API, database, cache, constant, etc.</strong></p>
<blockquote>You can think of each field in a GraphQL query as a function or method of the previous type which returns the next type. In fact, this is exactly how GraphQL works. Each field on each type is backed by a function called the <em>resolver</em> which is provided by the GraphQL server developer. When a field is executed, the corresponding <em>resolver</em> is called to produce the next value.<br><br>If a field produces a scalar value like a string or number, then the execution completes. However if a field produces an object value then the query will contain another selection of fields which apply to that object. This continues until scalar values are reached. GraphQL queries always end at scalar values.</blockquote>
<p>In order to create the relationship between the different types we pass the <code>_id</code> and the <code>owner_id</code> values into the respective controller functions.</p>
<p>So essentially we are requesting the owner details along with the car details:</p><pre><code class="language-js">return await userController.getSingleOwner({ id: parent.owner_id })</code></pre>
<p>and the details of all the services related to the car:</p><pre><code class="language-js">return await serviceController.getCarsServices({ id: parent._id })</code></pre>
<p>To return a list or array from with <strong>GraphQL, </strong>we use the <code>GraphQLList</code>. <a href="https://graphqlmastery.com/blog/graphql-list-how-to-use-arrays-in-graphql-schema" rel="noopener">Here</a> is a great in depth tutorial about using arrays in <strong>GraphQL</strong> Schema, but it is really simple: whenever we need an array we will use the <code>GraphQLList</code> function.</p>
<p>Let’s update the <code>ownerType</code> and <code>serviceType</code> with the following code:</p>
<p><code>ownerType</code></p>
name: 'Owner',
fields: () =&gt; ({
_id: { type: GraphQLID },
firstName: { type: GraphQLString },
lastName: { type: GraphQLString },
email: { type: GraphQLString },
cars: {
type: new GraphQLList(carType),
async resolve(parent, args) {
return await ownerController.getOwnersCars({ id: parent._id })
}
}
})
})</code></pre>
<figcaption>ownerType Object Type</figcaption>
</figure>
<p><code>serviceType</code></p>
name: 'Service',
fields: () =&gt; ({
_id: { type: GraphQLID },
car_id: { type: GraphQLID },
name: { type: GraphQLString },
date: { type: GraphQLString },
car: {
type: carType,
async resolve(parent, args) {
return await carController.getSingleCar({ id: parent.car_id })
}
}
})
})</code></pre>
<figcaption>serviceType Object Type</figcaption>
</figure>
<p>The above two <strong>Object Types</strong> are very similar to the <code>carType</code>. You can notice a pattern between the different <strong>Object Types</strong> and their relationships.</p>
<p>We can now populate the <code>RootQuery</code> root with the following code:</p>
name: 'RootQueryType',
fields: {
car: {
type: carType,
args: { id: { type: GraphQLID } },
async resolve(parent, args) {
return await carController.getSingleCar(args)
}
},
cars: {
type: new GraphQLList(carType),
async resolve(parent, args) {
return await carController.getCars()
}
},
owner: {
type: ownerType,
args: { id: { type: GraphQLID } },
async resolve(parent, args) {
return await ownerController.getSingleOwner(args)
}
},
service: {
type: serviceType,
args: { id: { type: GraphQLID } },
async resolve(parent, args) {
return await serviceController.getSingleService(args)
}
}
}
})</code></pre>
<figcaption>rootQuery Object Type</figcaption>
</figure>
<p>There are no new concepts in the above code, but keep in mind that the <code>RootQuery</code> query is the entry point to all queries on the <strong>GraphQL API.</strong> So from the above we can see that we can run the following queries directly:</p>
<ul>
<li>Get all the Cars</li>
<li>Get a single Car</li>
<li>Get a single Owner</li>
<li>Get a single Service</li>
</ul>
<p>Let’s open the <strong>GraphiQL </strong>user interface and build some queries: <a href="http://localhost:3000/graphiql.html" rel="noopener">http://localhost:3000/graphiql.html</a></p>
<p>Queries are entered on the left, results are in the middle, and the documentation explorer is on the right.</p>
<p>The documentation explorer can be used to explore the entire graph down to Scalar level. This is very helpful when building queries.</p>
<p>The language used to build the queries resembles JSON. This <a href="https://devhints.io/graphql" rel="noopener">cheat sheet</a> is a great a reference.</p>
<p>Below demonstrates why <strong>GraphQL </strong>is so awesome<strong>:</strong></p>
<figcaption>GraphiQL IDE</figcaption>
</figure>
<p>In the above example, we are using the <code>cars</code> root query to display a list of all the cars, their owners, and their services.</p>
<figcaption>Get a single car — car root query</figcaption>
</figure>
<figcaption>Get a single owner — owner root query</figcaption>
</figure>
<figcaption>Get a single service — service root query</figcaption>
</figure>
<p>We have one final topic to address, and that is <code>mutations</code>. Let’s update the <code>mutations</code> with the following code:</p>
name: 'Mutations',
fields: {
addCar: {
type: carType,
args: {
title: { type: new GraphQLNonNull(GraphQLString) },
brand: { type: new GraphQLNonNull(GraphQLString) },
price: { type: GraphQLString },
age: { type: GraphQLInt },
owner_id: { type: GraphQLID }
},
async resolve(parent, args) {
const data = await carController.addCar(args)
return data
}
},
editCar: {
type: carType,
args: {
id: { type: new GraphQLNonNull(GraphQLID) },
title: { type: new GraphQLNonNull(GraphQLString) },
brand: { type: new GraphQLNonNull(GraphQLString) },
price: { type: new GraphQLNonNull(GraphQLString) },
age: { type: new GraphQLNonNull(GraphQLInt) },
owner_id: { type: GraphQLID }
},
async resolve(parent, args) {
const data = await carController.updateCar(args)
return data
}
},
deleteCar: {
type: carType,
args: {
id: { type: new GraphQLNonNull(GraphQLID) }
},
async resolve(parent, args) {
const data = await carController.deleteCar(args)
return data
}
}
}
})</code></pre>
<figcaption>mutations</figcaption>
</figure>
<p>As before, we declare our <strong>Object Type</strong>, specify the <strong>name</strong> and the <strong>fields</strong>.</p>
<p>A mutation consists of the the <strong>type</strong>, <strong>args </strong>and the <strong>async resolve</strong> function. The <strong>resolve</strong> function passes the args to the controller, which returns the result of the mutation.</p>
<figcaption>addCar Mutation</figcaption>
</figure>
<figcaption>editCar Mutation</figcaption>
</figure>
<figcaption>deleteCar Mutation</figcaption>
</figure>
<p>You have now coded a fully functional <strong>REST API</strong> and a fully functional <strong>GraphQL API.</strong></p>
<p>There are no rules stating that one should use exclusively <strong>REST </strong>or exclusively <strong>GraphQL.</strong> In some projects, the best solution may be a mix of both. This is really determined on a project-to-project basis.</p>
<p>You can download the source code form Git <a href="https://github.com/siegfriedgrimbeek/fastify-graphql-api" rel="noopener">here</a>.</p>
<h4 id="what-is-next">What is Next?</h4>
<p>In the next tutorial, we will consume our <strong>GraphQL</strong> <strong>API</strong> with a <strong>Vue.js </strong>frontend as a single page application!</p>
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
