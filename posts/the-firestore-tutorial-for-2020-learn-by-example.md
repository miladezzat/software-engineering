---
card: "/images/default.jpg"
tags: [Firebase]
description: Cloud Firestore is a blazing-fast, serverless NoSQL database,
author: "Milad E. Fahmy"
title: "The JavaScript + Firestore Tutorial for 2020: Learn by Example"
created: "2021-08-15T19:28:57+02:00"
modified: "2021-08-15T19:28:57+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-firebase tag-javascript tag-database tag-nosql tag-tutorial tag-cheatsheet ">
<header class="post-full-header">
<h1 class="post-full-title">The JavaScript + Firestore Tutorial for 2020: Learn by Example</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/07/The-Firestore-Tutorial-2020.png 300w,
/news/content/images/size/w600/2020/07/The-Firestore-Tutorial-2020.png 600w,
/news/content/images/size/w1000/2020/07/The-Firestore-Tutorial-2020.png 1000w,
/news/content/images/size/w2000/2020/07/The-Firestore-Tutorial-2020.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/07/The-Firestore-Tutorial-2020.png" alt="The JavaScript + Firestore Tutorial for 2020: Learn by Example">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Cloud Firestore is a blazing-fast, serverless NoSQL database, perfect for powering web and mobile apps of any size. <a href="https://reedbarger.com/resources/javascript-firestore-2020/">Grab the complete guide to learning Firestore</a>, created to show you how to use Firestore as the engine for your own amazing projects from front to back.</p>
<h2 id="table-of-contents">Table of Contents</h2>
<p>Getting Started with Firestore</p>
<ul>
<li>What is Firestore? Why Should You Use It?</li>
<li>Setting Up Firestore in a JavaScript Project</li>
<li>Firestore Documents and Collections</li>
<li>Managing our Database with the Firebase Console</li>
</ul>
<p>Fetching Data with Firestore</p>
<ul>
<li>Getting Data from a Collection with .get()</li>
<li>Subscribing to a Collection with .onSnapshot()</li>
<li>Difference between .get() and .onSnapshot()</li>
<li>Unsubscribing from a collection</li>
<li>Getting individual documents</li>
</ul>
<p>Changing Data with Firestore</p>
<ul>
<li>Adding document to a collection with .add()</li>
<li>Adding a document to a collection with .set()</li>
<li>Updating existing data</li>
<li>Deleting data</li>
</ul>
<p>Essential Patterns</p>
<ul>
<li>Working with subcollections</li>
<li>Useful methods for Firestore fields</li>
<li>Querying with .where()</li>
<li>Ordering and limiting data</li>
</ul>
<p><a href="https://reedbarger.com/resources/javascript-firestore-2020/">Note: you can download a PDF version of this tutorial so you can read it offline.</a></p>
<h3 id="what-is-firestore-why-should-you-use-it">What is Firestore? Why Should You Use It?</h3>
<p>Firestore is a very flexible, easy to use database for mobile, web and server development. If you're familiar with Firebase's realtime database, Firestore has many similarities, but with a different (arguably more declarative) API.</p>
<p>Here are some of the features that Firestore brings to the table:</p>
<h4 id="-easily-get-data-in-realtime">⚡️Easily get data in realtime </h4>
<p>Like the Firebase realtime database, Firestore provides useful methods such as .onSnapshot() which make it a breeze to listen for updates to your data in real time. It makes Firestore an ideal choice for projects that place a premium on displaying and using the most recent data (chat applications, for instance).</p>
<h4 id="flexibility-as-a-nosql-database">Flexibility as a NoSQL Database</h4>
<p>Firestore is a very flexible option for a backend because it is a NoSQL database. NoSQL means that the data isn't stored in tables and columns as a standard SQL database would be. It is structured like a key-value store, as if it was one big JavaScript object. </p>
<p>In other words, there's no schema or need to describe what data &nbsp;our database will store. As long as we provide valid keys and values, Firestore will store it. </p>
<h4 id="-effortlessly-scalable">↕️ Effortlessly scalable</h4>
<p>One great benefit of choosing Firestore for your database is the very powerful infrastructure that it builds upon that enables you to scale your application very easily. Both vertically and horizontally. No matter whether you have hundreds or millions of users. Google's servers will be able to handle whatever load you place upon it.</p>
<p>In short, Firestore is a great option for applications both small and large. For small applications it's powerful because we can do a lot without much setup and create projects very quickly with them. Firestore is well-suited for large projects due to it's scalability.</p>
<h3 id="setting-up-firestore-in-a-javascript-project">Setting Up Firestore in a JavaScript Project</h3>
<blockquote>We're going to be using the Firestore SDK for JavaScript. Throughout this cheatsheet, we'll cover how to use Firestore within the context of a JavaScript project. In spite of this, the concepts we'll cover here are easily transferable to any of the available Firestore client libraries. </blockquote>
<p> To get started with Firestore, we'll head to the Firebase console. You can visit that by going to <a href="https://firebase.com">firebase.google.com</a>. You'll need to have a Google account to sign in. </p>
<p><img src="https://miro.medium.com/max/1400/0*YdCn9BK4PBn08gR8.png" alt=""></p>
<p>Once we're signed in, we'll create a new project and give it a name. </p>
<p><img src="https://miro.medium.com/max/1400/0*qFbrdYjCWOYVemmj.png" alt=""></p>
<p>Once our project is created, we'll select it. After that, on our project's dashboard, we'll select the code button. </p>
<p>This will give us the code we need to integrate Firestore with our JavaScript project. </p>
<p><img src="https://miro.medium.com/max/1400/0*2B3LzKfnQ2VCfUdQ.gif" alt=""></p>
<p>Usually if you're setting this up in any sort of JavaScript application, you'll want to put this in a dedicated file called firebase.js. If you're using any JavaScript library that has a package.json file, you'll want to install the Firebase dependency with npm or yarn.</p><pre><code class="language-bash">// with npm
npm i firebase
// with yarn
yarn add firebase</code></pre>
<p>Firestore can be used either on the client or server. If you are using Firestore with Node, you'll need to use the CommonJS syntax with require. Otherwise, if you're using JavaScript in the client, you'll import firebase using ES Modules.</p><pre><code class="language-js">// with Commonjs syntax (if using Node)
const firebase = require("firebase/app");
require("firebase/firestore");
// with ES Modules (if using client-side JS, like React)
import firebase from 'firebase/app';
import 'firebase/firestore';
var firebaseConfig = {
apiKey: "AIzaSyDpLmM79mUqbMDBexFtOQOkSl0glxCW_ds",
authDomain: "lfasdfkjkjlkjl.firebaseapp.com",
databaseURL: "https://lfasdlkjkjlkjl.firebaseio.com",
projectId: "lfasdlkjkjlkjl",
storageBucket: "lfasdlkjkjlkjl.appspot.com",
messagingSenderId: "616270824980",
appId: "1:616270824990:web:40c8b177c6b9729cb5110f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);</code></pre>
<h3 id="firestore-collections-and-documents">Firestore Collections and Documents</h3>
<p>There are two key terms that are essential to understanding how to work with Firestore: <strong>documents</strong> and <strong>collections</strong>. </p>
<p>Documents are individual pieces of data in our database. You can think of documents to be much like simple JavaScript objects. They consist of key-value pairs, which we refer to as <strong>fields</strong>. The values of these fields can be strings, numbers, Booleans, objects, arrays, and even binary data.</p><pre><code class="language-js">document -&gt; { key: value } </code></pre>
<p>Sets of these documents of these documents are known as collections. Collections are very much like arrays of objects. Within a collection, each document is linked to a given identifier (id). </p><pre><code class="language-js">collection -&gt; [{ id: doc }, { id: doc }]</code></pre>
<h3 id="managing-our-database-with-the-firestore-console">Managing our database with the Firestore Console</h3>
<p>Before we can actually start working with our database we need to create it.</p>
<p>Within our Firebase console, go to the 'Database' tab and create your Firestore database. </p>
<p><img src="https://miro.medium.com/max/1400/0*AlfWibAkiWkVBS5q.png" alt=""></p>
<p>Once you've done that, we will start in test mode and enable all reads and writes to our database. In other words, we will have open access to get and change data in our database. If we were to add Firebase authentication, we could restrict access only to authenticated users. </p>
<p>After that, we'll be taken to our database itself, where we can start creating collections and documents. The root of our database will be a series of collections, so let's make our first collection. </p>
<p>We can select 'Start collection' and give it an id. Every collection is going to have an id or a name. For our project, we're going to keep track of our users' favorite books. We'll give our first collection the id 'books'. </p>
<p><img src="https://miro.medium.com/max/1400/0*XCqueCk-MHOwQU5p.png" alt=""></p>
<p>Next, we'll add our first document with our newly-created 'books' collection. </p>
<p>Each document is going to have an id as well, linking it to the collection in which it exists. </p>
<p>In most cases we're going to use an &nbsp;option to give it an automatically generated ID. So we can hit the button 'auto id' to do so, after which we need to provide a field, give it a type, as well as a value. </p>
<p>For our first book, we'll make a 'title' field of type 'string', with the value 'The Great Gatsby', and hit save. </p>
<p>After that, we should see our first item in our database.</p>
<p><img src="https://miro.medium.com/max/1400/0*Yr_Sx6olD7WjjymV.png" alt=""></p>
<h3 id="getting-data-from-a-collection-with-get-">Getting data from a collection with .get()</h3>
<p>To get access Firestore use all of the methods it provides, we use <code>firebase.firestore()</code>. This method need to be executed every time we want to interact with our Firestore database. </p>
<p>I would recommend creating a dedicated variable to store a single reference to Firestore. Doing so helps to cut down on the amount of code you write across your app. </p><pre><code class="language-js">const db = firebase.firestore();
</code></pre>
<blockquote>In this cheatsheet, however, I'm going to stick to using the firestore method each time to be as clear as possible.</blockquote>
<p>To reference a collection, we use the <code>.collection()</code> method and provide a collection's id as an argument. To get a reference to the books collection we created, just pass in the string 'books'.</p><pre><code class="language-js">const booksRef = firebase.firestore().collection('books');</code></pre>
<p>To get all of the document data from a collection, we can chain on the <code>.get()</code> method. </p>
<p><code>.get()</code> returns a promise, which means we can resolve it either using a <code>.then()</code> callback or we can use the async-await syntax if we're executing our code within an async function. </p>
<p>Once our promises is resolved in one way or another, we get back what's known as a <strong>snapshot</strong>. </p>
<p>For a collection query that snapshot is going to consist of a number of individual documents. We can access them by saying <code>snapshot.docs</code>. </p>
<p>From each document, we can get the id as a separate property, and the rest of the data using the <code>.data()</code> method. </p>
<p>Here's what our entire query looks like:</p><pre><code class="language-js">const booksRef = firebase
.firestore()
.collection("books");
booksRef
.get()
.then((snapshot) =&gt; {
const data = snapshot.docs.map((doc) =&gt; ({
id: doc.id,
...doc.data(),
}));
console.log("All data in 'books' collection", data);
// [ { id: 'glMeZvPpTN1Ah31sKcnj', title: 'The Great Gatsby' } ]
});</code></pre>
<h3 id="subscribing-to-a-collection-with-onsnapshot-">Subscribing to a collection with .onSnapshot()</h3>
<p>The <code>.get()</code> method simply returns all the data within our collection. </p>
<p>To leverage some of Firestore's realtime capabilities we can subscribe to a collection, which gives us the current value of the documents in that collection, whenever they are updated. </p>
<p>Instead of using the <code>.get()</code> method, which is for querying a single time, we use the <code>.onSnapshot()</code> method. </p><pre><code class="language-js">firebase
.firestore()
.collection("books")
.onSnapshot((snapshot) =&gt; {
const data = snapshot.docs.map((doc) =&gt; ({
id: doc.id,
...doc.data(),
}));
console.log("All data in 'books' collection", data);
});</code></pre>
<p>In the code above, we're using what's known as method chaining instead of creating a separate variable to reference the collection.</p>
<p>What's powerful about using firestore is that we can chain a bunch of methods one after another, making for more declarative, readable code.</p>
<p>Within onSnapshot's callback, we get direct access to the snapshot of our collection, both now and whenever it's updated in the future. Try manually updating our one document and you'll see that <code>.onSnapshot()</code> is listening for any changes in this collection.</p>
<h3 id="difference-between-get-and-onsnapshot-">Difference between .get() and .onSnapshot()</h3>
<p>The difference between the get and the snapshot methods is that get returns a promise, which needs to be resolved, and only then we get the snapshot data.</p>
<p><code>.onSnapshot</code>, however, utilizes synchronous callback function, which gives us direct access to the snapshot. </p>
<p>This is important to keep in mind when it comes to these different methods--we have to know which of them return a promise and which are synchronous. </p>
<h3 id="unsubscribing-from-a-collection-with-unsubscribe-">Unsubscribing from a collection with unsubscribe()</h3>
<p>Note additionally that <code>.onSnapshot()</code> returns a function which we can use to unsubscribe and stop listening on a given collection. </p>
<p>This is important in cases where the user, for example, goes away from a given page where we're displaying a collection's data. Here's an example, using the library React were we are calling unsubscribe within the useEffect hook. </p>
<p>When we do so this is going to make sure that when our component is unmounted (no longer displayed within the context of our app) that we're no longer listening on the collection data that we're using in this component.</p><pre><code class="language-js">function App() {
const [books, setBooks] = React.useState([]);
React.useEffect(() =&gt; {
const unsubscribe = firebase
.firestore()
.collection("books")
.onSnapshot((snapshot) =&gt; {
const data = snapshot.docs.map((doc) =&gt; ({
id: doc.id,
...doc.data(),
}));
setBooks(data);
});
}, []);
return books.map(book =&gt; &lt;BookList key={book.id} book={book} /&gt;)
}</code></pre>
<h3 id="getting-individual-documents-with-doc-">Getting Individual Documents with .doc()</h3>
<p>When it comes to getting a document within a collection., the process is just the same as getting an entire collection: we need to first create a reference to that document, and then use the get method to grab it.</p>
<p>After that, however, we use the <code>.doc()</code> method chained on to the collection method. In order to create a reference, we need to grab this id from the database if it was auto generated. After that, we can chain on <code>.get()</code> and resolve the promise. </p><pre><code class="language-js">const bookRef = firebase
.firestore()
.collection("books")
.doc("glMeZvPpTN1Ah31sKcnj");
bookRef.get().then((doc) =&gt; {
if (!doc.exists) return;
console.log("Document data:", doc.data());
// Document data: { title: 'The Great Gatsby' }
});</code></pre>
<p>Notice the conditional <code>if (!doc.exists) return;</code> in the code above.</p>
<p>Once we get the document back, it's essential to check to see whether it exists. </p>
<p>If we don't, there'll be an error in getting our document data. The way to check and see if our document exists is by saying, if <code>doc.exists</code>, which returns a true or false value. </p>
<p>If this expression returns false, we want to return from the function or maybe throw an error. If <code>doc.exists</code> is true, we can get the data from <code>doc.data</code>.</p>
<h3 id="adding-document-to-a-collection-with-add-">Adding document to a collection with .add()</h3>
<p>Next, let's move on to changing data. The easiest way to add a new document to a collection is with the <code>.add()</code> method. </p>
<p>All you need to do is select a collection reference (with <code>.collection()</code>) and chain on <code>.add()</code>. </p>
<p>Going back to our definition of documents as being like JavaScript objects, we need to pass an object to the <code>.add()</code> method and specify all the fields we want to be on the document. </p>
<p>Let's say we want to add another book, 'Of Mice and Men':</p><pre><code class="language-js">firebase
.firestore()
.collection("books")
.add({
title: "Of Mice and Men",
})
.then((ref) =&gt; {
console.log("Added doc with ID: ", ref.id);
// Added doc with ID:  ZzhIgLqELaoE3eSsOazu
});</code></pre>
<p>The <code>.add</code> method returns a promise and from this resolved promise, we get back a reference to the created document, which gives us information such as the created id. </p>
<p>The <code>.add()</code> method auto generates an id for us. Note that we can't use this ref directly to get data. We can however pass the ref to the doc method to create another query.</p>
<h3 id="adding-a-document-to-a-collection-with-set-">Adding a document to a collection with .set()</h3>
<p>Another way to add a document to a collection is with the <code>.set()</code> method. </p>
<p>Where set differs from add lies in the need to specify our own id upon adding the data. </p>
<p>This requires chaining on the <code>.doc()</code> method with the id that you want to use. Also, note how when the promise is resolved from <code>.set()</code>, we don't get a reference to the created document:</p><pre><code class="language-js">firebase
.firestore()
.collection("books")
.doc("another book")
.set({
title: "War and Peace",
})
.then(() =&gt; {
console.log("Document created");
});</code></pre>
<p>Additionally, when we use <code>.set()</code> with an existing document, it will, by default, overwrite that document. </p>
<p>If we want to merge, an old document with a new document instead of overwriting it, we need to pass an additional argument to <code>.set()</code> and provide the property <code>merge</code> set to true.</p><pre><code class="language-js">// use .set() to merge data with existing document, not overwrite
const bookRef = firebase
.firestore()
.collection("books")
.doc("another book");
bookRef
.set({
author: "Lev Nikolaevich Tolstoy"
}, { merge: true })
.then(() =&gt; {
console.log("Document merged");
bookRef
.get()
.then(doc =&gt; {
console.log("Merged document: ", doc.data());
// Merged document:  { title: 'War and Peace', author: 'Lev Nikolaevich Tolstoy' }
});
});</code></pre>
<h3 id="updating-existing-data-with-update-">Updating existing data with .update()</h3>
<p>When it comes to updating data we use the update method, like <code>.add()</code> and <code>.set()</code> it returns a promise.</p>
<p>What's helpful about using <code>.update()</code> is that, unlike <code>.set()</code>, it won't overwrite the entire document. Also like <code>.set()</code>, we need to reference an individual document. </p>
<p>When you use <code>.update()</code>, it's important to use some error handling, such as the <code>.catch()</code> callback in the event that the document doesn't exist. </p><pre><code class="language-js">const bookRef = firebase.firestore().collection("books").doc("another book");
bookRef
.update({
year: 1869,
})
.then(() =&gt; {
console.log("Document updated"); // Document updated
})
.catch((error) =&gt; {
console.error("Error updating doc", error);
});	</code></pre>
<h3 id="deleting-data-with-delete-">Deleting data with .delete()</h3>
<p>We can delete a given document collection by referencing it by it's id and executing the <code>.delete()</code> method, simple as that. It also returns a promise.</p>
<p>Here is a basic example of deleting a book with the id "another book":</p><pre><code class="language-js">firebase
.firestore()
.collection("books")
.doc("another book")
.delete()
.then(() =&gt; console.log("Document deleted")) // Document deleted
.catch((error) =&gt; console.error("Error deleting document", error));</code></pre>
<blockquote>Note that the official Firestore documentation does not recommend to delete entire collections, only individual documents.</blockquote>
<h3 id="working-with-subcollections">Working with Subcollections</h3>
<p>Let's say that we made a misstep in creating our application, and instead of just adding books we also want to connect them to the users that made them. T</p>
<p>The way that we want to restructure the data is by making a collection called 'users' in the root of our database, and have 'books' be a subcollection of 'users'. This will allow users to have their own collections of books. How do we set that up? </p>
<p>References to the subcollection 'books' should look something like this: </p><pre><code class="language-js">const userBooksRef = firebase
.firestore()
.collection('users')
.doc('user-id')
.collection('books');</code></pre>
<p>Note additionally that we can write this all within a single <code>.collection()</code> call using forward slashes. </p>
<p>The above code is equivalent to the follow, where the collection reference must have an odd number of segments. If not, Firestore will throw an error. </p><pre><code class="language-js">const userBooksRef = firebase
.firestore()
.collection('users/user-id/books');</code></pre>
<p>To create the subcollection itself, with one document (another Steinbeck novel, 'East of Eden') run the following. </p><pre><code class="language-js">firebase.firestore().collection("users/user-1/books").add({
title: "East of Eden",
});</code></pre>
<p>Then, getting that newly created subcollection would look like the following based off of the user's ID.</p><pre><code class="language-js">firebase
.firestore()
.collection("users/user-1/books")
.get()
.then((snapshot) =&gt; {
const data = snapshot.docs.map((doc) =&gt; ({
id: doc.id,
...doc.data(),
}));
console.log(data);
// [ { id: 'UO07aqpw13xvlMAfAvTF', title: 'East of Eden' } ]
});</code></pre>
<h3 id="useful-methods-for-firestore-fields">Useful methods for Firestore fields</h3>
<p>There are some useful tools that we can grab from Firestore that enables us to work with our field values a little bit easier. </p>
<p>For example, we can generate a timestamp for whenever a given document is created or updated with the following helper from the <code>FieldValue</code> property. </p>
<p>We can of course create our own date values using JavaScript, but using a server timestamp lets us know exactly when data is changed or created from Firestore itself. </p><pre><code class="language-js">firebase
.firestore()
.collection("users")
.doc("user-2")
.set({
created: firebase.firestore.FieldValue.serverTimestamp(),
})
.then(() =&gt; {
console.log("Added user"); // Added user
});</code></pre>
<p>Additionally, say we have a field on a document which keeps track of a certain number, say the number of books a user has created. Whenever a user creates a new book we want to increment that by one. </p>
<p>An easy way to do this, instead of having to first make a <code>.get()</code> request, is to use another field value helper called <code>.increment()</code>:</p><pre><code class="language-js">const userRef = firebase.firestore().collection("users").doc("user-2");
userRef
.set({
count: firebase.firestore.FieldValue.increment(1),
})
.then(() =&gt; {
console.log("Updated user");
userRef.get().then((doc) =&gt; {
console.log("Updated user data: ", doc.data());
});
});
</code></pre>
<h3 id="querying-with-where-">Querying with .where()</h3>
<p>What if we want to get data from our collections based on certain conditions? For example, say we want to get all of the users that have submitted one or more books?</p>
<p>We can write such a query with the help of the <code>.where()</code> method. First we reference a collection and then chain on <code>.where()</code>. </p>
<p>The where method takes three arguments--first, the field that we're searching on an operation, an operator, and then the value on which we want to filter our collection. </p>
<p>We can use any of the following operators and the fields we use can be primitive values as well as arrays.</p>
<p><code>&lt;</code>, <code>&lt;=</code>, <code>==</code>, <code>&gt;</code>, <code>&gt;=</code>, <code>array-contains</code>, <code>in</code>, or <code>array-contains-any</code></p>
<p>To fetch all the users who have submitted more than one book, we can use the following query. </p>
<p>After <code>.where()</code> we need to chain on <code>.get()</code>. Upon resolving our promise we get back what's known as a <strong>querySnapshot</strong>. </p>
<p>Just like getting a collection, we can iterate over the querySnapshot with <code>.map()</code> to get each documents id and data (fields):</p><pre><code class="language-js">firebase
.firestore()
.collection("users")
.where("count", "&gt;=", 1)
.get()
.then((querySnapshot) =&gt; {
const data = querySnapshot.docs.map((doc) =&gt; ({
id: doc.id,
...doc.data(),
}));
console.log("Users with &gt; 1 book: ", data);
// Users with &gt; 1 book:  [ { id: 'user-1', count: 1 } ]
});</code></pre>
<blockquote>Note that you can chain on multiple <code>.where()</code> methods to create compound queries.</blockquote>
<h3 id="limiting-and-ordering-queries">Limiting and ordering queries</h3>
<p>Another method for effectively querying our collections is to limit them. Let's say we want to limit a given query to a certain amount of documents. </p>
<p>If we only want to return a few items from our query, we just need to add on the <code>.limit()</code> method, after a given reference. </p>
<p>If we wanted to do that through our query for fetching users that have submitted at least one book, it would look like the following. </p><pre><code class="language-js">const usersRef = firebase
.firestore()
.collection("users")
.where("count", "&gt;=", 1);
usersRef.limit(3)</code></pre>
<p>Another powerful feature is to order our queried data according to document fields using <code>.orderBy()</code>. </p>
<p>If we want to order our created users by when they were first made, we can use the <code>orderBy</code> method with the 'created' field as the first argument. For the second argument, we specify whether it should be in ascending or descending order. </p>
<p>To get all of the users ordered by when they were created from newest to oldest, we can execute the following query:</p><pre><code class="language-js">const usersRef = firebase
.firestore()
.collection("users")
.where("count", "&gt;=", 1);
usersRef.orderBy("created", "desc").limit(3);</code></pre>
<p>We can chain <code>.orderBy()</code> with <code>.limit()</code>. For this to work properly, <code>.limit()</code> should be called last and not before <code>.orderBy()</code>.</p>
<h2 id="want-your-own-copy">Want your own copy? </h2>
<p>If you would like to have this guide for future reference, <a href="https://reedbarger.com/resources/javascript-firestore-2020/">download a cheatsheet of this entire tutorial here</a>. </p>
<div class="kg-bookmark-content">
<div class="kg-bookmark-title">The Ultimate Firestore Tutorial 🔥</div>
<div class="kg-bookmark-description">Snag this super in-depth, massive PDF to give you the complete developer’s guide to mastering Firestore including tons of practical examples, copyable code and more.</div>
<div class="kg-bookmark-metadata"><img class="kg-bookmark-icon" src="https://pages.convertkit.com/templates/favicon.ico"></div>
</div>
<div class="kg-bookmark-thumbnail"><img src="https://embed.filekitcdn.com/e/v5SYvTyUaG1zZTovHVhcdS/w3YyCPKbdEPN9qKQimLo3B"></div>
</a></figure>
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
