---
card: "/images/default.jpg"
tags: [JavaScript]
description: Objects are the main unit of encapsulation in Object-Oriented
author: "Milad E. Fahmy"
title: "JavaScript Create Object  –  How to Define Objects in JS"
created: "2021-08-15T19:28:55+02:00"
modified: "2021-08-15T19:28:55+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-object-oriented-programming ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Create Object  –  How to Define Objects in&nbsp;JS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/07/IMG_7192.JPG 300w,
/news/content/images/size/w600/2020/07/IMG_7192.JPG 600w,
/news/content/images/size/w1000/2020/07/IMG_7192.JPG 1000w,
/news/content/images/size/w2000/2020/07/IMG_7192.JPG 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/07/IMG_7192.JPG" alt="JavaScript Create Object  –  How to Define Objects in&nbsp;JS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Objects are the main unit of encapsulation in Object-Oriented Programming. In this article, I will describe several ways to build objects in JavaScript. They are:</p>
<ul>
<li>Object literal</li>
<li>Object.create()</li>
<li>Classes</li>
<li>Factory functions</li>
</ul>
<h2 id="object-literal">Object Literal</h2>
<p>First, we need to make a distinction between data structures and object-oriented objects. Data structures have public data and no behavior. That means they have no methods.</p>
<p>We can easily create such objects using the object literal syntax. It looks like this:</p><pre><code>const product = {
name: 'apple',
category: 'fruits',
price: 1.99
}
console.log(product);</code></pre>
<p>Objects in JavaScript are dynamic collections of key-value pairs. The key is always a string and has to be unique in the collection. The value can a primitive, an object, or even a function.</p>
<p>We can access a property using the dot or the square notation.</p><pre><code>console.log(product.name);
//"apple"
console.log(product["name"]);
//"apple"</code></pre>
<p>Here is an example where the value is another object.</p><pre><code>const product = {
name: 'apple',
category: 'fruits',
price: 1.99,
nutrients : {
carbs: 0.95,
fats: 0.3,
protein: 0.2
}
}</code></pre>
<p>The value of the <code>carbs</code> property is a new object. Here is how we can access the <code>carbs</code> property.</p><pre><code>console.log(product.nutrients.carbs);
//0.95</code></pre>
<h3 id="shorthand-property-names">Shorthand Property Names</h3>
<p>Consider the case where we have the values of our properties stored in variables.</p><pre><code>const name = 'apple';
const category = 'fruits';
const price = 1.99;
const product = {
name: name,
category: category,
price: price
}</code></pre>
<p>JavaScript supports what is called the shorthand property names. It allows us to create an object using just the name of the variable. It will create a property with the same name. The next object literal is equivalent to the previous one.</p><pre><code>const name = 'apple';
const category = 'fruits';
const price = 1.99;
const product = {
name,
category,
price
}</code></pre>
<h2 id="object-create">Object.create</h2>
<p>Next, let's look at how to implement objects with behavior, object-oriented objects.</p>
<p>JavaScript has what is called the prototype system that allows sharing behavior between objects. The main idea is to create an object called the prototype with a common behavior and then use it when creating new objects.</p>
<p>The prototype system allows us to create objects that inherit behavior from other objects.</p>
<p>Let’s create a prototype object that allows us to add products and get the total price from a shopping cart.</p><pre><code>const cartPrototype = {
addProduct: function(product){
if(!this.products){
this.products = [product]
} else {
this.products.push(product);
}
},
getTotalPrice: function(){
return this.products.reduce((total, p) =&gt; total + p.price, 0);
}
}</code></pre>
<p>Notice that this time the value of the property <code> addProduct</code> is a function. We can also write the previous object using a shorter form called the shorthand method syntax.</p><pre><code>const cartPrototype = {
addProduct(product){/*code*/},
getTotalPrice(){/*code*/}
}</code></pre>
<p>The <code>cartPrototype</code> is the prototype object that keeps the common behavior represented by two methods, <code>addProduct</code> and <code>getTotalPrice</code>. It can be used to build other objects inheriting this behavior.</p><pre><code>const cart = Object.create(cartPrototype);
cart.addProduct({name: 'orange', price: 1.25});
cart.addProduct({name: 'lemon', price: 1.75});
console.log(cart.getTotalPrice());
//3</code></pre>
<p>The <code>cart</code> object has <code>cartPrototype</code> as its prototype. It inherits the behavior from it. <code>cart</code> has a hidden property that points to the prototype object.</p>
<p>When we use a method on an object, that method is first searched on the object itself rather than on its prototype.</p>
<h3 id="this">this</h3>
<p>Note that we are using a special keyword called <code>this</code> to access and modify the data on the object.</p>
<p>Remember that functions are independent units of behavior in JavaScript. They are not necessarily part of an object. When they are, we need to have a reference that allows the function to access other members on the same object. <code>this</code> is the function context. It gives access to other properties.</p>
<h3 id="data">Data</h3>
<p>You may wonder why we haven’t defined and initialized the <code>products</code> property on the prototype object itself.</p>
<p>We shouldn't do that. Prototypes should be used to share behavior, not data. Sharing data will lead to having the same products on several cart objects. Consider the code below:</p><pre><code>const cartPrototype = {
products:[],
addProduct: function(product){
this.products.push(product);
},
getTotalPrice: function(){}
}
const cart1 = Object.create(cartPrototype);
cart1.addProduct({name: 'orange', price: 1.25});
cart1.addProduct({name: 'lemon', price: 1.75});
console.log(cart1.getTotalPrice());
//3
const cart2 = Object.create(cartPrototype);
console.log(cart2.getTotalPrice());
//3</code></pre>
<p>Both the <code>cart1</code> and <code>cart2</code> objects inheriting the common behavior from the <code>cartPrototype</code> also share the same data. We don’t want that. Prototypes should be used to share behavior, not data.</p>
<h2 id="class">Class</h2>
<p>The prototype system is not a common way of building objects. Developers are more familiar with building objects out of classes.</p>
<p>The class syntax allows a more familiar way of creating objects sharing a common behavior. It still creates the same prototype behind the scene but the syntax is clearer and we also avoid the previous data-related issue. The class offers a specific place to define the data distinct for each object.</p>
<p>Here is the same object created using the class sugar syntax:</p><pre><code>class Cart{
constructor(){
this.products = [];
}
addProduct(product){
this.products.push(product);
}
getTotalPrice(){
return this.products.reduce((total, p) =&gt; total + p.price, 0);
}
}
const cart = new Cart();
cart.addProduct({name: 'orange', price: 1.25});
cart.addProduct({name: 'lemon', price: 1.75});
console.log(cart.getTotalPrice());
//3
const cart2 = new Cart();
console.log(cart2.getTotalPrice());
//0</code></pre>
<p>Notice that the class has a constructor method that initialized that data distinct for each new object. The data in the constructor is not shared between instances. In order to create a new instance, we use the <code>new</code> keyword.</p>
<p>I think the class syntax is more clear and familiar to most developers. Nevertheless, it does a similar thing, it creates a prototype with all the methods and uses it to define new objects. The prototype can be accessed with <code>Cart.prototype</code>.</p>
<p>It turns out that the prototype system is flexible enough to allow the class syntax. So the class system can be simulated using the prototype system.</p>
<h3 id="private-properties">Private Properties</h3>
<p>The only thing is that the <code>products</code> property on the new object is public by default.</p><pre><code>console.log(cart.products);
//[{name: "orange", price: 1.25}
// {name: "lemon", price: 1.75}]</code></pre>
<p>We can make it private using the hash <code>#</code> prefix.</p>
<p>Private properties are declared with <code>#name</code> syntax. <code>#</code> is a part of the property name itself and should be used for declaring and accessing the property. Here is an example of declaring <code>products</code> as a private property:</p><pre><code>class Cart{
#products
constructor(){
this.#products = [];
}
addProduct(product){
this.#products.push(product);
}
getTotalPrice(){
return this.#products.reduce((total, p) =&gt; total + p.price, 0);
}
}
console.log(cart.#products);
//Uncaught SyntaxError: Private field '#products' must be declared in an enclosing class</code></pre>
<h3 id="factory-functions">Factory Functions</h3>
<p>Another option is to create objects as collections of closures.</p>
<p>Closure is the ability of a function to access variables and parameters from the other function even after the outer function has executed. Take a look at the <code>cart</code> object built with what is called a factory function.</p><pre><code>function Cart() {
const products = [];
function addProduct(product){
products.push(product);
}
function getTotalPrice(){
return products.reduce((total, p) =&gt; total + p.price, 0);
}
return {
addProduct,
getTotalPrice
}
}
const cart = Cart();
cart.addProduct({name: 'orange', price: 1.25});
cart.addProduct({name: 'lemon', price: 1.75});
console.log(cart.getTotalPrice());
//3</code></pre>
<p><code>addProduct</code> and <code>getTotalPrice</code> are two inner functions accessing the variable <code>products</code> from their parent. They have access to the <code>products</code> variable event after the parent <code>Cart</code> has executed. <code>addProduct</code> and <code>getTotalPrice</code> are two closures sharing the same private variable.</p>
<p><code>Cart</code> is a factory function.</p>
<p>The new object <code>cart</code> created with the factory function has the <code>products</code> variable private. It cannot be accessed from the outside.</p><pre><code>console.log(cart.products);
//undefined</code></pre>
<p>Factory functions don’t need the <code>new</code> keyword but you can use it if you want. It will return the same object no matter if you use it or not.</p>
<h2 id="recap">Recap</h2>
<p>Usually, we work with two types of objects, data structures that have public data and no behavior and object-oriented objects that have private data and public behavior.</p>
<p>Data structures can be easily built using the object literal syntax.</p>
<p>JavaScript offers two innovative ways of creating object-oriented objects. The first is using a prototype object to share the common behavior. Objects inherit from other objects. Classes offer a nice sugar syntax to create such objects.</p>
<p>The other option is to define objects are collections of closures.</p>
<p><strong>For more on closures and function programming techniques check out my book series <a href="https://www.amazon.com/gp/product/B08BW8BY1H" rel="noopener">Functional Programming with JavaScript and React</a>.</strong></p>
<p><strong>The </strong><a href="https://www.amazon.com/dp/B08CZZ4FQQ" rel="noopener"><strong>Functional Programming in JavaScript</strong></a><strong> book is coming out.</strong></p>
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
