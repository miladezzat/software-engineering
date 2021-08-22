---
card: "https://cdn-media-1.freecodecamp.org/images/1*p6r6gML9zfQ0MlNx7IWx_A.png"
tags: [JavaScript]
description: "IndexedDB is one of the storage capabilities introduced into "
author: "Milad E. Fahmy"
title: "A quick but complete guide to IndexedDB and storing data in browsers"
created: "2021-08-16T11:29:10+02:00"
modified: "2021-08-16T11:29:10+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-programming tag-coding tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">A quick but complete guide to IndexedDB and storing data in browsers</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*p6r6gML9zfQ0MlNx7IWx_A.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*p6r6gML9zfQ0MlNx7IWx_A.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*p6r6gML9zfQ0MlNx7IWx_A.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*p6r6gML9zfQ0MlNx7IWx_A.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*p6r6gML9zfQ0MlNx7IWx_A.png" alt="A quick but complete guide to IndexedDB and storing data in browsers">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>IndexedDB is one of the storage capabilities introduced into browsers over the years.<br>
It's a key/value store (a noSQL database) considered to be <strong>the definitive solution for storing data in browsers</strong>.</p>
<p>It's an asynchronous API, which means that performing costly operations won't block the UI thread providing a sloppy experience to users. It can store an indefinite amount of data, although once over a certain threshold the user is prompted to give the site higher limits.</p>
<p>It's <a href="http://caniuse.com/#feat=indexeddb">supported on all modern browsers</a>.</p>
<p>It supports transactions, versioning and gives good performance.</p>
<p>Inside the browser we can also use:</p>
<ul>
<li><a href="https://flaviocopes.com/cookies/"><strong>Cookies</strong></a>: can host a very small amount of strings</li>
<li><a href="https://flaviocopes.com/web-storage-api/"><strong>Web Storage</strong></a> (or DOM Storage), a term that commonly identifies localStorage and  sessionStorage, two key/value stores. sessionStorage, does not retain data, which is cleared when the session ends, while localStorage keeps the data across sessions</li>
</ul>
<p>Local/session storage have the disadvantage of being capped at a small (and inconsistent) size, with browsers implementation offering from 2MB to 10MB of space per site.</p>
<p>In the past we also had <strong>Web SQL</strong>, a wrapper around SQLite, but now this is <strong>deprecated</strong> and unsupported on some modern browsers, it's never been a recognized standard and so it should not be used, although 83% of users have this technology on their devices <a href="http://caniuse.com/#feat=sql-storage">according to Can I Use</a>.</p>
<p>While you can technically create multiple databases per site, you generally <strong>create one single database</strong>, and inside that database you can create <strong>multiple object stores</strong>.</p>
<p>A database is <strong>private to a domain</strong>, so any other site cannot access another website IndexedDB stores.</p>
<p>Each store usually contains a set of <em>things</em>, which can be</p>
<ul>
<li>strings</li>
<li>numbers</li>
<li>objects</li>
<li>arrays</li>
<li>dates</li>
</ul>
<blockquote>
<p>For example you might have a store that contains posts, another that contains comments.</p>
</blockquote>
<p>A store contains a number of items which have a unique key, which represents the way by which an object can be identified.</p>
<p>You can alter those stores using transactions, by performing add, edit and delete operations, and iterating over the items they contain.</p>
<p>Since the advent of <a href="https://flaviocopes.com/javascript-promises">Promises</a> in ES6, and the subsequent move of APIs to using promises, the IndexedDB API seems a bit <em>old school</em>.</p>
<p>While there's nothing wrong in it, in all the examples that I'll explain I'll use the <a href="https://github.com/jakearchibald/idb">IndexedDB Promised Library</a> by Jake Archibald, which is a tiny layer on top of the IndexedDB API to make it easier to use.</p>
<blockquote>
<p>This library is also used on all the examples on the Google Developers website regarding IndexedDB</p>
</blockquote>
<h2 id="createanindexeddbdatabase">Create an IndexedDB Database</h2>
<p>The simplest way is to use <em>unpkg</em>, by adding this to the page header:</p>
<pre><code class="language-html">&lt;script type="module"&gt;
import { openDB, deleteDB } from 'https://unpkg.com/idb?module'
&lt;/script&gt;
</code></pre>
<p>Before using the IndexedDB API, always make sure you check for support in the browser, even though it's widely available, you never know which browser the user is using:</p>
<pre><code class="language-js">(() =&gt; {
'use strict'
if (!('indexedDB' in window)) {
console.warn('IndexedDB not supported')
return
}
//...IndexedDB code
})()
</code></pre>
<h3 id="howtocreateadatabase">How to <strong>create a database</strong></h3>
<p>Using <code>openDB()</code>:</p>
<pre><code class="language-js">(async () =&gt; {
//...
const dbName = 'mydbname'
const storeName = 'store1'
const version = 1 //versions start at 1
const db = await openDB(dbName, version, {
upgrade(db, oldVersion, newVersion, transaction) {
const store = db.createObjectStore(storeName)
}
})
})()
</code></pre>
<p>The first 2 parameters are the database name, and the verson. The third param, which is optional, is an object that contains a function <strong>called only if the version number is higher than the current installed database version</strong>. In the function body you can upgrade the structure (stores and indexes) of the db.</p>
<h2 id="addingdataintoastore">Adding data into a store</h2>
<h3 id="addingdatawhenthestoreiscreatedinitializingit">Adding data when the store is created, initializing it</h3>
<p>You use the <code>put</code> method of the object store, but first we need a reference to it, which we can get from <code>db.createObjectStore()</code> when we create it.</p>
<p>When using <code>put</code>, the value is the first argument, the key is the second. This is because if you specify <code>keyPath</code> when creating the object store, you don't need to enter the key name on every put() request, you can just write the value.</p>
<p>This populates <code>store0</code> as soon as we create it:</p>
<pre><code class="language-js">(async () =&gt; {
//...
const dbName = 'mydbname'
const storeName = 'store0'
const version = 1
const db = await openDB(dbName, version,{
upgrade(db, oldVersion, newVersion, transaction) {
const store = db.createObjectStore(storeName)
store.put('Hello world!', 'Hello')
}
})
})()
</code></pre>
<h3 id="addingdatawhenthestoreisalreadycreatedusingtransactions">Adding data when the store is already created, using transactions</h3>
<p>To add items later down the road, you need to create a read/write <strong>transaction</strong>, that ensures database integrity (if an operation fails, all the operations in the transaction are rolled back and the state goes back to a known state).</p>
<p>For that, use a reference to the <code>dbPromise</code> object we got when calling <code>openDB</code>, and run:</p>
<pre><code class="language-js">(async () =&gt; {
//...
const dbName = 'mydbname'
const storeName = 'store0'
const version = 1
const db = await openDB(/* ... */)
const tx = db.transaction(storeName, 'readwrite')
const store = await tx.objectStore(storeName)
const val = 'hey!'
const key = 'Hello again'
const value = await store.put(val, key)
await tx.done
})()
</code></pre>
<h2 id="gettingdatafromastore">Getting data from a store</h2>
<h3 id="gettingoneitemfromastoreget">Getting one item from a store: <code>get()</code></h3>
<pre><code class="language-js">const key = 'Hello again'
const item = await db.transaction(storeName).objectStore(storeName).get(key)
</code></pre>
<h3 id="gettingalltheitemsfromastoregetall">Getting all the items from a store: <code>getAll()</code></h3>
<p>Get all the keys stored</p>
<pre><code class="language-js">const items = await db.transaction(storeName).objectStore(storeName).getAllKeys()
</code></pre>
<p>Get all the values stored</p>
<pre><code class="language-js">const items = await db.transaction(storeName).objectStore(storeName).getAll()
</code></pre>
<h2 id="deletingdatafromindexeddb">Deleting data from IndexedDB</h2>
<p>Deleting the database, an object store and data</p>
<h3 id="deleteanentireindexeddbdatabase">Delete an entire IndexedDB database</h3>
<pre><code class="language-js">const dbName = 'mydbname'
await deleteDB(dbName)
</code></pre>
<h3 id="todeletedatainanobjectstore">To delete data in an object store</h3>
<p>We use a transaction:</p>
<pre><code class="language-js">(async () =&gt; {
//...
const dbName = 'mydbname'
const storeName = 'store1'
const version = 1
const db = await openDB(dbName, version, {
upgrade(db, oldVersion, newVersion, transaction) {
const store = db.createObjectStore(storeName)
}
})
const tx = await db.transaction(storeName, 'readwrite')
const store = await tx.objectStore(storeName)
const key = 'Hello again'
await store.delete(key)
await tx.done
})()
</code></pre>
<h2 id="migratefrompreviousversionofadatabase">Migrate from previous version of a database</h2>
<p>The third (optional) parameter of the <code>openDB()</code> function is an object that can contain an <code>upgrade</code> function <strong>called only if the version number is higher than the current installed database version</strong>. In that function body you can upgrade the structure (stores and indexes) of the db:</p>
<pre><code class="language-js">const name = 'mydbname'
const version = 1
openDB(name, version, {
upgrade(db, oldVersion, newVersion, transaction) {
console.log(oldVersion)
}
})
</code></pre>
<p>In this callback, you can check from which version the user is updating, and perform some operations accordingly.</p>
<p>You can perform a migration from a previous database version using this syntax</p>
<pre><code class="language-js">(async () =&gt; {
//...
const dbName = 'mydbname'
const storeName = 'store0'
const version = 1
const db = await openDB(dbName, version, {
upgrade(db, oldVersion, newVersion, transaction) {
switch (oldVersion) {
case 0: // no db created before
// a store introduced in version 1
db.createObjectStore('store1')
case 1:
// a new store in version 2
db.createObjectStore('store2', { keyPath: 'name' })
}
db.createObjectStore(storeName)
}
})
})()
</code></pre>
<h2 id="uniquekeys">Unique keys</h2>
<p><code>createObjectStore()</code> as you can see in <code>case 1</code> accepts a second parameter that indicates the index key of the database. This is very useful when you store objects: <code>put()</code> calls don't need a second parameter, but can just take the value (an object) and the key will be mapped to the object property that has that name.</p>
<p>The index gives you a way to retrieve a value later by that specific key, and it must be unique (every item must have a different key)</p>
<p>A key can be set to auto increment, so you don't need to keep track of it on the client code:</p>
<pre><code class="language-js">db.createObjectStore('notes', { autoIncrement: true })
</code></pre>
<p>Use auto increment if your values do not contain a unique key already (for example, if you collect email addresses without an associated name).</p>
<h3 id="checkifastoreexists">Check if a store exists</h3>
<p>You can check if an object store already exists by calling the <code>objectStoreNames()</code> method:</p>
<pre><code class="language-js">const storeName = 'store1'
if (!db.objectStoreNames.contains(storeName)) {
db.createObjectStore(storeName)
}
</code></pre>
<h2 id="deletingfromindexeddb">Deleting from IndexedDB</h2>
<p>Deleting the database, an object store and data</p>
<h3 id="deleteadatabase">Delete a database</h3>
<pre><code class="language-js">await deleteDB('mydb')
</code></pre>
<h3 id="deleteanobjectstore">Delete an object store</h3>
<p>An object store can only be deleted in the callback when opening a db, and that callback is only called if you specify a version higher than the one currently installed:</p>
<pre><code class="language-js">const db = await openDB('dogsdb', 2, {
upgrade(db, oldVersion, newVersion, transaction) {
switch (oldVersion) {
case 0: // no db created before
// a store introduced in version 1
db.createObjectStore('store1')
case 1:
// delete the old store in version 2, create a new one
db.deleteObjectStore('store1')
db.createObjectStore('store2')
}
}
})
</code></pre>
<h3 id="todeletedatainanobjectstoreuseatransaction">To delete data in an object store use a transaction</h3>
<pre><code class="language-js">const key = 232 //a random key
const db = await openDB(/*...*/)
const tx = await db.transaction('store', 'readwrite')
const store = await tx.objectStore('store')
await store.delete(key)
await tx.complete
</code></pre>
<h2 id="theresmore">There's more!</h2>
<p>These are just the basics. I didn't talk about cursors and more advanced stuff. There's more to IndexedDB but I hope this gives you a head start.</p>
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
