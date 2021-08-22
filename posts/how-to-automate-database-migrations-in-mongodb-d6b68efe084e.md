---
card: "https://cdn-media-1.freecodecamp.org/images/1*4cqBCNV_7TmcsdogIaxzUA.jpeg"
tags: [JavaScript]
description: As a software developer at some point, you might have to deal
author: "Milad E. Fahmy"
title: "How to automate database migrations in MongoDB"
created: "2021-08-15T19:40:42+02:00"
modified: "2021-08-15T19:40:42+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-database tag-nodejs tag-tech tag-productivity ">
<header class="post-full-header">
<h1 class="post-full-title">How to automate database migrations in MongoDB</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*4cqBCNV_7TmcsdogIaxzUA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*4cqBCNV_7TmcsdogIaxzUA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*4cqBCNV_7TmcsdogIaxzUA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*4cqBCNV_7TmcsdogIaxzUA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*4cqBCNV_7TmcsdogIaxzUA.jpeg" alt="How to automate database migrations in MongoDB">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h3 id="introduction"><strong>Introduction</strong></h3>
<p>As a software developer at some point, you might have to deal with database migrations in one way or another.</p>
<p>As software or applications evolve and improve over the time, your database must as well. And we have to make sure data remains consistent throughout the application.</p>
<p>There are a number of different ways that a schema can change from one version of your application to the next.</p>
<ul>
<li><strong>A new member is added</strong></li>
<li><strong>A member is removed</strong></li>
<li><strong>A member is renamed</strong></li>
<li><strong>The type of a member is changed</strong></li>
<li><strong>The representation of a member is changed</strong></li>
</ul>
<p><strong>So how do you handle all of the above changes?</strong></p>
<p><a href="https://giphy.com/gifs/reaction-a5viI92PAF89q">via GIPHY</a></p>
<p>There are two strategies:</p>
<ul>
<li>Write a script that will take care of upgrading the schema as well as downgrading it to previous versions</li>
<li>Update your documents as they are used</li>
</ul>
<p>The second one is much more code-dependent and must stay in your codebase. If the code is somehow removed, then many of documents are not upgradeable.</p>
<p>For instance, if there have been 3 versions of a document, [1, 2, and 3] and we remove the upgrade code from version 1 to version 2, any documents that still exist as version 1 are not upgradeable. I personally see this as overhead to maintaining code and it becomes inflexible.</p>
<p>Since this article is about automating migrations, I am going to show you how you can write a simple script that will take care of schema changes as well as unit tests.</p>
<h3 id="a-member-has-been-added">A Member Has Been Added</h3>
<p>When a member has been added to the schema, existing document won’t have the info. So you need to query all the documents where this member doesn’t exist and update them.</p>
<p>Let’s proceed with writing some code.</p>
<p>There are quite a few npm modules available already, but I have used the library <a href="https://github.com/tj/node-migrate" rel="noopener">node-migrate</a>. I have tried others too, but some of them are not well-maintained anymore, and I faced issues getting set up with others.</p>
<h4 id="prerequisites">Prerequisites</h4>
<ul>
<li><a href="https://github.com/tj/node-migrate" rel="noopener">node-migrate</a> — Abstract migration framework for Node</li>
<li><a href="https://www.npmjs.com/package/mongodb" rel="noopener">mongodb</a> — a Native driver of MongoDB for Nodejs</li>
<li><a href="https://mochajs.org/" rel="noopener">Mocha</a> — Testing framework</li>
<li><a href="https://www.chaijs.com/" rel="noopener">Chai</a> — Assertion library for writing test cases</li>
<li><a href="http://bluebirdjs.com/docs/install.html" rel="noopener">Bluebird</a>: Promise library for handling async API calls</li>
<li><a href="https://www.npmjs.com/package/mkdirp" rel="noopener">mkdirp</a>: Like <code>mkdir -p</code> but in Node.js</li>
<li><a href="https://www.npmjs.com/package/rimraf" rel="noopener">rimraf</a>: <code>rm -rf</code> for Node</li>
</ul>
<h3 id="migration-state">Migration state</h3>
<p>A migration state is the most important key for keeping track of your current migration. Without it, we won’t be able to track:</p>
<ul>
<li>How many migrations have been done</li>
<li>What was the last migration</li>
<li>What is the current version of the schema we are using</li>
</ul>
<p>And without states, there is no way to rollback, upgrade, and vice-versa to a different state.</p>
<h4 id="creating-migrations">Creating Migrations</h4>
<p>To create a migration, execute <code>migrate create &lt;tit</code>le&gt; with a title.</p>
<p>By default, a file in <code>./migrations/</code> will be created with the following content:</p><pre><code class="language-js">'use strict'
module.exports.up = function (next) {
next()
}
module.exports.down = function (next) {
next()
}</code></pre>
<p>Let’s take an example of a <code>User</code> schema where we have a property <code>name</code> which includes both <code>first</code> and <code>last</code> name.</p>
<p>Now we want to change the schema to have a separate <code>last</code> name property.</p>
<p>So in order to automate this, we will read <code>name</code> at runtime and extract the last name and save it as new property.</p>
<p>Create a migration with this command:</p><pre><code class="language-bash">$ migrate create add-last-name.js</code></pre>
<p>This call will create <code>./migrations/{timestamp in milliseconds}-add-last-name.js</code> under the <code>migrations</code> folder in the root directory.</p>
<p>Let's write code for adding a last name to the schema and also for removing it.</p>
<h4 id="up-migration">Up Migration</h4>
<p>We will find all the users where <code>lastName</code> property doesn’t exist and create a new property <code>lastName</code> in those documents.</p><pre><code class="language-js">'use strict'
const Bluebird = require('bluebird')
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const url = 'mongodb://localhost/Sample'
Bluebird.promisifyAll(MongoClient)
module.exports.up = next =&gt; {
let mClient = null
return MongoClient.connect(url)
.then(client =&gt; {
mClient = client
return client.db();
})
.then(db =&gt; {
const User = db.collection('users')
return User
.find({ lastName: { $exists: false }})
.forEach(result =&gt; {
if (!result) return next('All docs have lastName')
if (result.name) {
const { name } = result
result.lastName = name.split(' ')[1]
result.firstName = name.split(' ')[0]
}
return db.collection('users').save(result)
})
})
.then(() =&gt; {
mClient.close()
return next()
})
.catch(err =&gt; next(err))
}</code></pre>
<h4 id="down-migration">Down Migration</h4>
<p>Similarly, let’s write a function where we will remove <code>lastName</code>:</p><pre><code class="language-js">module.exports.down = next =&gt; {
let mClient = null
return MongoClient
.connect(url)
.then(client =&gt; {
mClient = client
return client.db()
})
.then(db =&gt;
db.collection('users').update(
{
lastName: { $exists: true }
},
{
$unset: { lastName: "" },
},
{ multi: true }
))
.then(() =&gt; {
mClient.close()
return next()
})
.catch(err =&gt; next(err))
}</code></pre>
<h4 id="running-migrations">Running Migrations</h4>
<p>Check out how migrations are executed here: <a href="https://github.com/tj/node-migrate#running-migrations" rel="noopener">running migrations</a>.</p>
<h3 id="writing-custom-state-storage">Writing Custom State Storage</h3>
<p>By default, <code>migrate</code> stores the state of the migrations which have been run in a file (<code>.migrate</code>).</p>
<p><code>.migrate</code> file will contain the following code:</p><pre><code class="language-json">{
"lastRun": "{timestamp in milliseconds}-add-last-name.js",
"migrations": [
{
"title": "{timestamp in milliseconds}-add-last-name.js",
"timestamp": {timestamp in milliseconds}
}
]
}</code></pre>
<p>But you can provide a custom storage engine if you would like to do something different, like storing them in your database of choice.</p>
<p>A storage engine has a simple interface of <code>load(fn)</code> and <code>save(set, fn)</code>.</p>
<p>As long as what goes in as <code>set</code> comes out the same on <code>load</code>, then you are good to go!</p>
<p>Let’s create file <code>db-migrate-store.js</code> in root directory of the project.</p><pre><code class="language-js">const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const Bluebird = require('bluebird')
Bluebird.promisifyAll(MongoClient)
class dbStore {
constructor () {
this.url = 'mongodb://localhost/Sample' . // Manage this accordingly to your environment
this.db = null
this.mClient = null
}
connect() {
return MongoClient.connect(this.url)
.then(client =&gt; {
this.mClient = client
return client.db()
})
}
load(fn) {
return this.connect()
.then(db =&gt; db.collection('migrations').find().toArray())
.then(data =&gt; {
if (!data.length) return fn(null, {})
const store = data[0]
// Check if does not have required properties
if (!Object
.prototype
.hasOwnProperty
.call(store, 'lastRun')
||
!Object
.prototype
.hasOwnProperty
.call(store, 'migrations'))
{
return fn(new Error('Invalid store file'))
}
return fn(null, store)
}).catch(fn)
}
save(set, fn) {
return this.connect()
.then(db =&gt; db.collection('migrations')
.update({},
{
$set: {
lastRun: set.lastRun,
},
$push: {
migrations: { $each: set.migrations },
},
},
{
upsert: true,
multi: true,
}
))
.then(result =&gt; fn(null, result))
.catch(fn)
}
}
module.exports = dbStore</code></pre>
<p><code><strong>load(fn)</strong></code><strong> </strong>In this function we are just verifying if the existing migration document that has been loaded contains the <code>lastRun</code> property and <code>migrations</code> array.</p>
<p><code><strong>save(set,fn)</strong></code><strong> </strong>Here <code>set</code> is provided by library and we are updating the <code>lastRun</code> value and appending <code>migrations</code> to the existing array.</p>
<p>You might be wondering where the above file <code>db-migrate-store.js</code> is used. We are creating it because we want to store the state in the database, not in the code repository.</p>
<p>Below are test examples where you can see its usage.</p>
<h3 id="automate-migration-testing">Automate migration testing</h3>
<p>Install Mocha:</p><pre><code class="language-bash">$ npm install -g mocha</code></pre>
<blockquote>We installed this globally so we’ll be able to run <code>mocha</code> from the terminal.</blockquote>
<h4 id="structure">Structure</h4>
<p>To set up the basic tests, create a new folder called “test” in the project root, then within that folder add a folder called <em>migrations</em>.</p>
<p>Your file/folder structure should now look like this:</p><pre><code>├── package.json
├── app
│   ├── server.js
│   ├── models
│   │   └── user.js
│   └── routes
│       └── user.js
└── test
migrations
└── create-test.js
└── up-test.js
└── down-test.js</code></pre>
<h4 id="test-create-migration">Test — Create Migration</h4>
<p><strong>Goal: </strong>It should create the migrations directory and file.</p>
<p><code>$ migrate create add-last-name</code></p>
<p>This will implicitly create file <code>./migrations/{timestamp in milliseconds}-add-last-name.js</code> under the <code>migrations</code> folder in the root directory.</p>
<p>Now add the following code to the <code>create-test.js</code> file:</p><pre><code class="language-js">const Bluebird = require('bluebird')
const { spawn } = require('child_process')
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
const path = require('path')
const fs = Bluebird.promisifyAll(require('fs'))
describe('[Migrations]', () =&gt; {
const run = (cmd, args = []) =&gt; {
const process = spawn(cmd, args)
let out = ""
return new Bluebird((resolve, reject) =&gt; {
process.stdout.on('data', data =&gt; {
out += data.toString('utf8')
})
process.stderr.on('data', data =&gt; {
out += data.toString('utf8')
})
process.on('error', err =&gt; {
reject(err)
})
process.on('close', code =&gt; {
resolve(out, code)
})
})
}
const TMP_DIR = path.join(__dirname, '..', '..', 'tmp')
const INIT = path.join(__dirname, '..', '..', 'node_modules/migrate/bin', 'migrate-init')
const init = run.bind(null, INIT)
const reset = () =&gt; {
rimraf.sync(TMP_DIR)
rimraf.sync(path.join(__dirname, '..', '..', '.migrate'))
}
beforeEach(reset)
afterEach(reset)
describe('init', () =&gt; {
beforeEach(mkdirp.bind(mkdirp, TMP_DIR))
it('should create a migrations directory', done =&gt; {
init()
.then(() =&gt; fs.accessSync(path.join(TMP_DIR, '..', 'migrations')))
.then(() =&gt; done())
.catch(done)
})
})
})</code></pre>
<p>In the above test, we are using the <code>migrate-init</code> command to create the migrations directory and deleting it after each test case using <code>rimraf</code> which is <code>rm -rf</code> in Unix.</p>
<p>Later we are using <code>fs.accessSync</code> function to verify <code>migrations</code> folder exists or not.</p>
<h4 id="test-up-migration">Test — Up Migration</h4>
<p><strong>Goal: </strong>It should add <code>lastName</code> to schema and store migration state.</p>
<p>Add the following code to the <code>up-test.js</code> file:</p><pre><code class="language-js">const chance = require('chance')()
const generateUser = () =&gt; ({
email: chance.email(),
name: `${chance.first()} ${chance.last()}`
})
const migratePath = path.join(__dirname, '..', '..', 'node_modules/migrate/bin', 'migrate')
const migrate = run.bind(null, migratePath)
describe('[Migration: up]', () =&gt; {
before(done =&gt; {
MongoClient
.connect(url)
.then(client =&gt; {
db = client.db()
return db.collection('users').insert(generateUser())
})
.then(result =&gt; {
if (!result) throw new Error('Failed to insert')
return done()
}).catch(done)
})
it('should run up on specified migration', done =&gt; {
migrate(['up', 'mention here the file name we created above', '--store=./db-migrate-store.js'])
.then(() =&gt; {
const promises = []
promises.push(
db.collection('users').find().toArray()
)
Bluebird.all(promises)
.then(([users]) =&gt; {
users.forEach(elem =&gt; {
expect(elem).to.have.property('lastName')
})
done()
})
}).catch(done)
})
after(done =&gt; {
rimraf.sync(path.join(__dirname, '..', '..', '.migrate'))
db.collection('users').deleteMany()
.then(() =&gt; {
rimraf.sync(path.join(__dirname, '..', '..', '.migrate'))
return done()
}).catch(done)
})
})</code></pre>
<p>Similarly, you can write down migration and <code>before()</code> and <code>after()</code> functions remain basically the same.</p>
<h3 id="conclusion">Conclusion</h3>
<p>Hopefully you can now automate your schema changes with proper testing. :)</p>
<p>Grab the final code from <a href="https://github.com/thatshailesh/mongodb-migration" rel="noopener">repository</a>.</p>
<p><em>Don’t hesitate to clap if you considered this a worthwhile read!</em></p>
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
