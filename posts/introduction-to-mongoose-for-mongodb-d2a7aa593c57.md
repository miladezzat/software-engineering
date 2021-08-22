---
card: "https://cdn-media-1.freecodecamp.org/images/1*uTZXsVta4TwghNobMkZeZg.png"
tags: [Nodejs]
description: "by Nick Karnik"
author: "Milad E. Fahmy"
title: "Introduction to Mongoose for MongoDB"
created: "2021-08-16T10:17:20+02:00"
modified: "2021-08-16T10:17:20+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-nodejs tag-mongoose tag-mongodb tag-web-development tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Introduction to Mongoose for MongoDB</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*uTZXsVta4TwghNobMkZeZg.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*uTZXsVta4TwghNobMkZeZg.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*uTZXsVta4TwghNobMkZeZg.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*uTZXsVta4TwghNobMkZeZg.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*uTZXsVta4TwghNobMkZeZg.png" alt="Introduction to Mongoose for MongoDB">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
const server = '127.0.0.1:27017'; // REPLACE WITH YOUR DB SERVER
const database = 'fcc-Mail';// REPLACE WITH YOUR DB NAME
class Database {
constructor() {
this._connect()
}
_connect() {
mongoose.connect(`mongodb://${server}/${database}`)
.then(() =&gt; {
console.log('Database connection successful')
})
.catch(err =&gt; {
console.error('Database connection error')
})
}
}
email: String
})</code></pre><p>Here we define a property called <strong>email </strong>with a schema type <strong>String </strong>which maps to an internal validator that will be triggered when the model is saved to the database. It will fail if the data type of the value is not a string type.</p><p>The following Schema Types are permitted:</p><ul><li>Array</li><li>Boolean</li><li>Buffer</li><li>Date</li><li>Mixed (A generic / flexible data type)</li><li>Number</li><li>ObjectId</li><li>String</li></ul><p>Mixed and ObjectId are defined under <code>require(‘mongoose’).Schema.Types</code>.</p><h4 id="3-exporting-a-model"><strong>3. Exporting a Model</strong></h4><p>We need to call the model constructor on the Mongoose instance and pass it the name of the collection and a reference to the schema definition.</p><pre><code class="language-js">module.exports = mongoose.model('Email', emailSchema)</code></pre><p>Let’s combine the above code into <code>./src/models/email.js</code><strong> </strong>to define the contents of a basic email model:</p><pre><code class="language-js">let mongoose = require('mongoose')
let emailSchema = new mongoose.Schema({
email: String
})
module.exports = mongoose.model('Email', emailSchema)</code></pre><p>A schema definition should be simple, but its complexity is usually based on application requirements. Schemas can be reused and they can contain several child-schemas too. In the example above, the value of the email property is a simple value type. However, it can also be an object type with additional properties on it.</p><p>We can create an instance of the model we defined above and populate it using the following syntax:</p><pre><code class="language-js">let EmailModel = require('./email')
let msg = new EmailModel({
email: 'ada.lovelace@gmail.com'
})</code></pre><p>Let’s enhance the Email schema to make the email property a unique, required field and convert the value to lowercase before saving it. We can also add a validation function that will ensure that the value is a valid email address. We will reference and use the validator library installed earlier.</p><pre><code class="language-js">let mongoose = require('mongoose')
let validator = require('validator')
let emailSchema = new mongoose.Schema({
email: {
type: String,
required: true,
unique: true,
lowercase: true,
validate: (value) =&gt; {
return validator.isEmail(value)
}
}
})
module.exports = mongoose.model('Email', emailSchema)</code></pre><h3 id="basic-operations">Basic Operations</h3><p>Mongoose has a flexible API and provides many ways to accomplish a task. We will not focus on the variations because that is out of scope for this article, but remember that most of the operations can be done in more than one way either syntactically or via the application architecture.</p><h4 id="create-record">Create Record</h4><p>Let’s create an instance of the email model and save it to the database:</p><pre><code>let EmailModel = require('./email')
let msg = new EmailModel({
email: 'ADA.LOVELACE@GMAIL.COM'
})
msg.save()
.then(doc =&gt; {
console.log(doc)
})
.catch(err =&gt; {
console.error(err)
})</code></pre><p>The result is a document that is returned upon a successful save:</p><pre><code class="language-json">{
_id: 5a78fe3e2f44ba8f85a2409a,
email: 'ada.lovelace@gmail.com',
__v: 0
}</code></pre><p>The following fields are returned (internal fields are prefixed with an underscore):</p><ol><li>The <code>_id</code> field is auto-generated by Mongo and is a primary key of the collection. Its value is a unique identifier for the document.</li><li>The value of the <code>email</code> field is returned. Notice that it is lower-cased because we specified the <code>lowercase:true</code> attribute in the schema.</li><li><code>__v</code> is the versionKey property set on each document when first created by Mongoose. Its value contains the internal revision of the document.</li></ol><p>If you try to repeat the save operation above, you will get an error because we have specified that the email field should be unique.</p><h4 id="fetch-record">Fetch Record</h4><p>Let’s try to retrieve the record we saved to the database earlier. The model class exposes several static and instance methods to perform operations on the database. We will now try to find the record that we created previously using the find method and pass the email as the search term.</p><pre><code>EmailModel
.find({
email: 'ada.lovelace@gmail.com'   // search query
})
.then(doc =&gt; {
console.log(doc)
})
.catch(err =&gt; {
console.error(err)
})</code></pre><p>The document returned will be similar to what was displayed when we created the record:</p><pre><code class="language-json">{
_id: 5a78fe3e2f44ba8f85a2409a,
email: 'ada.lovelace@gmail.com',
__v: 0
}</code></pre><h4 id="update-record">Update Record</h4><p>Let’s modify the record above by changing the email address and adding another field to it, all in a single operation. For performance reasons, Mongoose won’t return the updated document so we need to pass an additional parameter to ask for it:</p><pre><code class="language-js">EmailModel
.findOneAndUpdate(
{
email: 'ada.lovelace@gmail.com'  // search query
},
{
email: 'theoutlander@live.com'   // field:values to update
},
{
new: true,                       // return updated doc
runValidators: true              // validate before update
})
.then(doc =&gt; {
console.log(doc)
})
.catch(err =&gt; {
console.error(err)
})</code></pre><p>The document returned will contain the updated email:</p><pre><code class="language-json">{
_id: 5a78fe3e2f44ba8f85a2409a,
email: 'theoutlander@live.com',
__v: 0
}</code></pre><h4 id="delete-record">Delete Record</h4><p>We will use the <code>findOneAndRemove</code> call to delete a record. It returns the original document that was removed:</p><pre><code class="language-js">EmailModel
.findOneAndRemove({
email: 'theoutlander@live.com'
})
.then(response =&gt; {
console.log(response)
})
.catch(err =&gt; {
console.error(err)
})</code></pre><h3 id="helpers">Helpers</h3><p>We have looked at some of the basic functionality above known as CRUD (Create, Read, Update, Delete) operations, but Mongoose also provides the ability to configure several types of helper methods and properties. These can be used to further simplify working with data.</p><p>Let’s create a user schema in <code>./src/models/user.js</code> with the fields<code>firstName</code> and <code>lastName</code>:</p><pre><code class="language-js">let mongoose = require('mongoose')
let userSchema = new mongoose.Schema({
firstName: String,
lastName: String
})
module.exports = mongoose.model('User', userSchema)</code></pre><h4 id="virtual-property">Virtual Property</h4><p>A virtual property is not persisted to the database. We can add it to our schema as a helper to get and set values.</p><p>Let’s create a virtual property called <code>fullName</code> which can be used to set values on <code>firstName</code> and <code>lastName</code> and retrieve them as a combined value when read:</p><pre><code class="language-js">userSchema.virtual('fullName').get(function() {
return this.firstName + ' ' + this.lastName
})
userSchema.virtual('fullName').set(function(name) {
let str = name.split(' ')
this.firstName = str[0]
this.lastName = str[1]
})</code></pre><p>Callbacks for get and set must use the function keyword as we need to access the model via the <code>this</code><strong> </strong>keyword. Using fat arrow functions will change what <code>this</code> refers to.</p><p>Now, we can set <code>firstName</code> and <code>lastName</code> by assigning a value to <code>fullName</code>:</p><pre><code class="language-js">let model = new UserModel()
model.fullName = 'Thomas Anderson'
console.log(model.toJSON())  // Output model fields as JSON
console.log()
console.log(model.fullName)  // Output the full name</code></pre><p>The code above will output the following:</p><pre><code class="language-bash">{ _id: 5a7a4248550ebb9fafd898cf,
firstName: 'Thomas',
lastName: 'Anderson' }
Thomas Anderson</code></pre><h4 id="instance-methods">Instance Methods</h4><p>We can create custom helper methods on the schema and access them via the model instance. These methods will have access to the model object and they can be used quite creatively. For instance, we could create a method to find all the people who have the same first name as the current instance.</p><p>In this example, let’s create a function to return the initials for the current user. Let’s add a custom helper method called <code>getInitials</code> to the schema:</p><pre><code class="language-js">userSchema.methods.getInitials = function() {
return this.firstName[0] + this.lastName[0]
}</code></pre><p>This method will be accessible via a model instance:</p><pre><code class="language-js">let model = new UserModel({
firstName: 'Thomas',
lastName: 'Anderson'
})
let initials = model.getInitials()
console.log(initials) // This will output: TA</code></pre><h4 id="static-methods">Static Methods</h4><p>Similar to instance methods, we can create static methods on the schema. Let’s create a method to retrieve all users in the database:</p><pre><code class="language-js">userSchema.statics.getUsers = function() {
return new Promise((resolve, reject) =&gt; {
this.find((err, docs) =&gt; {
if(err) {
console.error(err)
return reject(err)
}
resolve(docs)
})
})
}</code></pre><p>Calling <code>getUsers</code> on the Model class will return all the users in the database:</p><pre><code class="language-js">UserModel.getUsers()
.then(docs =&gt; {
console.log(docs)
})
.catch(err =&gt; {
console.error(err)
let userSchema = new mongoose.Schema({
firstName: String,
lastName: String,
createdAt: Date,
updatedAt: Date
})
module.exports = mongoose.model('User', userSchema)</code></pre><p>When <code>model.save()</code> is called, there is a <code>pre(‘save’, …)</code> and <code>post(‘save’, …)</code> event that is triggered. For the second parameter, you can pass a function that is called when the event is triggered. These functions take a parameter to the next function in the middleware chain.</p><p>Let’s add a pre-save hook and set values for <code>createdAt</code> and <code>updatedAt</code>:</p><pre><code class="language-js">userSchema.pre('save', function (next) {
let now = Date.now()
this.updatedAt = now
// Set a value for createdAt only if it is null
if (!this.createdAt) {
this.createdAt = now
}
// Call the next function in the pre-save chain
next()
})</code></pre><p>Let’s create and save our model:</p><pre><code class="language-js">let UserModel = require('./user')
let model = new UserModel({
fullName: 'Thomas Anderson'
}
msg.save()
.then(doc =&gt; {
console.log(doc)
})
.catch(err =&gt; {
console.error(err)
})</code></pre><p>You should see values for <code>createdAt</code> and <code>updatedAt</code> when the record that is created is printed:</p><pre><code class="language-json">{ _id: 5a7bbbeebc3b49cb919da675,
firstName: 'Thomas',
lastName: 'Anderson',
updatedAt: 2018-02-08T02:54:38.888Z,
createdAt: 2018-02-08T02:54:38.888Z,
__v: 0 }</code></pre><h4 id="plugins">Plugins</h4><p>Suppose that we want to track when a record was created and last updated on every collection in our database. Instead of repeating the above process, we can create a plugin and apply it to every schema.</p><p>Let’s create a file <code>./src/model/plugins/timestamp.js</code> and replicate the above functionality as a reusable module:</p><pre><code class="language-js">module.exports = function timestamp(schema) {
// Add the two fields to the schema
schema.add({
createdAt: Date,
updatedAt: Date
})
// Create a pre-save hook
schema.pre('save', function (next) {
let now = Date.now()
this.updatedAt = now
// Set a value for createdAt only if it is null
if (!this.createdAt) {
this.createdAt = now
}
// Call the next function in the pre-save chain
next()
})
}</code></pre><p>To use this plugin, we simply pass it to the schemas that should be given this functionality:</p><pre><code class="language-js">let timestampPlugin = require('./plugins/timestamp')
emailSchema.plugin(timestampPlugin)
userSchema.plugin(timestampPlugin)</code></pre><h3 id="query-building">Query Building</h3><p>Mongoose has a very rich API that handles many complex operations supported by MongoDB. Consider a query where we can incrementally build query components.</p><p>In this example, we are going to:</p><ol><li>Find all users</li><li>Skip the first 100 records</li><li>Limit the results to 10 records</li><li>Sort the results by the firstName field</li><li>Select the firstName</li><li>Execute that query</li></ol><pre><code class="language-js">UserModel.find()             // find all users
.skip(100)                // skip the first 100 items
.limit(10)                // limit to 10 items
.sort({firstName: 1}      // sort ascending by firstName
.select({firstName: true} // select firstName only
.exec()                   // execute the query
.then(docs =&gt; {
console.log(docs)
})
.catch(err =&gt; {
console.error(err)
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
