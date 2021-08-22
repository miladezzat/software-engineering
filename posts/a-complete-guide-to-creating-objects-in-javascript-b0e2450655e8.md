---
card: "https://cdn-media-1.freecodecamp.org/images/1*S6zT7E9uySUcbD69OPQR8A.jpeg"
tags: [Technology]
description: "by Kaashan Hussain"
author: "Milad E. Fahmy"
title: "How to create objects in JavaScript"
created: "2021-08-16T11:35:10+02:00"
modified: "2021-08-16T11:35:10+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-technology tag-javascript tag-education tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">How to create objects in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*S6zT7E9uySUcbD69OPQR8A.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*S6zT7E9uySUcbD69OPQR8A.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*S6zT7E9uySUcbD69OPQR8A.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*S6zT7E9uySUcbD69OPQR8A.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*S6zT7E9uySUcbD69OPQR8A.jpeg" alt="How to create objects in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Kaashan Hussain</p><p>We all deal with objects in one way or another while writing code in a programming language. In JavaScript, objects provide a way for us to store, manipulate, and send data over the network.</p><p>There are many ways in which objects in JavaScript differ from objects in other mainstream programming languages, like Java. I will try to cover that in a another topic. Here, let us only focus on the various ways in which JavaScript allows us to create objects.</p><p>In JavaScript, think of objects as a collection of ‘key:value’ pairs. This brings to us the first and most popular way we create objects in JavaScript.</p><p>Let’s get this started.</p><h4 id="1-creating-objects-using-object-literal-syntax">1. Creating objects using object literal syntax</h4><p>This is really simple. All you have to do is throw your key value pairs separated by ‘:’ inside a set of curly braces({ }) and your object is ready to be served (or consumed), like below:</p><pre><code class="language-js">const person = {
firstName: 'testFirstName',
lastName: 'testLastName'
};</code></pre><p>This is the simplest and most popular way to create objects in JavaScript.</p><h4 id="2-creating-objects-using-the-new-keyword">2. Creating objects using the ‘new’ keyword</h4><p>This method of object creation resembles the way objects are created in class-based languages, like Java. By the way, starting with ES6, classes are native to JavaScript as well and we will look at creating objects by defining classes towards the end of this article. So, to create an object using the ‘new’ keyword, you need to have a constructor function.</p><p>Here are 2 ways you can use the ‘new’ keyword pattern —</p><p><strong>a) Using the ‘new’ keyword with’ in-built Object constructor function</strong></p><p>To create an object, use the new keyword with <code>Object()</code> constructor, like this:</p><pre><code class="language-js">const person = new Object();</code></pre><p>Now, to add properties to this object, we have to do something like this:</p><pre><code class="language-js">person.firstName = 'testFirstName';
person.lastName = 'testLastName';</code></pre><p>You might have figured that this method is a bit longer to type. Also, this practice is not recommended as there is a scope resolution that happens behind the scenes to find if the constructor function is built-in or user-defined.</p><p><strong>b) Using ‘new’ with user defined constructor function</strong></p><p>The other problem with the approach of using the ‘Object’ constructor function result from the fact that every time we create an object, we have to manually add the properties to the created object.</p><p>What if we had to create hundreds of person objects? You can imagine the pain now. So, to get rid of manually adding properties to the objects, we create custom (or user-defined) functions. We first create a constructor function and then use the ‘new’ keyword to get objects:</p><pre><code class="language-js">function Person(fname, lname) {
this.firstName = fname;
this.lastName = lname;
}</code></pre><p>Now, anytime you want a ‘Person’ object, just do this:</p><pre><code class="language-js">const personOne = new Person('testFirstNameOne', 'testLastNameOne');
const personTwo = new Person('testFirstNameTwo', 'testLastNameTwo');</code></pre><h4 id="3-using-object-create-to-create-new-objects">3. Using Object.create() to create new objects</h4><p>This pattern comes in very handy when we are asked to create objects from other existing objects and not directly using the ‘new’ keyword syntax. Let’s see how to use this pattern. As stated on <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create" rel="noopener">MDN</a>:</p><blockquote>The <code><strong>Object.create()</strong></code> method creates a new object, using an existing object as the prototype of the newly created object.</blockquote><p>To understand the <code><strong>Object.create</strong></code> method, just remember that it takes two parameters. The first parameter is a mandatory object that serves as the prototype of the new object to be created. The second parameter is an optional object which contains the properties to be added to the new object.</p><p>We will not deep dive into prototypes and inheritance chains now to keep our focus on the topic. But as a quick point, you can think of prototypes as objects from which other objects can borrow properties/methods they need.</p><p>Imagine you have an organization represented by <code>orgObject</code></p><pre><code>const orgObject = { company: 'ABC Corp' };</code></pre><p>And you want to create employees for this organization. Clearly, you want all the employee objects.</p><pre><code class="language-js">const employee = Object.create(orgObject, { name: { value: 'EmployeeOne' } });
console.log(employee); // { company: "ABC Corp" }
console.log(employee.name); // "EmployeeOne"</code></pre><h4 id="4-using-object-assign-to-create-new-objects">4. Using Object.assign() to create new objects</h4><p>What if we want to create an object that needs to have properties from more than one object? <code>Object.assign()</code> comes to our help.</p><p>As stated on <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign" rel="noopener">MDN</a>:</p><blockquote>The <code>Object<strong>.</strong>assign<strong>()</strong></code> method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.</blockquote><p><code>Object<strong><em>.</em></strong>assign</code> method can take any number of objects as parameters. The first parameter is the object that it will create and return. The rest of the objects passed to it will be used to copy the properties into the new object. Let’s understand it by extending the previous example we saw.</p><p>Assume you have two objects as below:</p><pre><code class="language-js">const orgObject = { company: 'ABC Corp' }
const carObject = { carName: 'Ford' }</code></pre><p>Now, you want an employee object of ‘ABC Corp’ who drives a ‘Ford’ car. You can do that with the help of <code>Object.assign</code> as below:</p><p><code>const employee = Object.assign({}, orgObject, carObject);</code></p><p>Now, you get an <code>employee</code> object that has <code>company</code> and <code>carName</code> as its property.</p><pre><code class="language-js">console.log(employee); // { carName: "Ford", company: "ABC Corp" }</code></pre><h4 id="5-using-es6-classes-to-create-objects">5. Using ES6 classes to create objects</h4><p>You will notice that this method is similar to using ‘new’ with user defined constructor function. The constructor functions are now replaced by classes as they are supported through ES6 specifications. Let’s see the code now.</p><pre><code class="language-js">class Person {
constructor(fname, lname) {
this.firstName = fname;
this.lastName = lname;
}
}
const person = new Person('testFirstName', 'testLastName');
console.log(person.firstName); // testFirstName
console.log(person.lastName); // testLastName
</code></pre><p>These are all the ways I know to create objects in JavaScript. I hope you enjoyed this post and now understand how to create objects.</p><p><em>Thanks for your time for reading this article. If you liked this post and it was helpful to you, please click the clap ? button to show your support. Keep learning more!</em></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
