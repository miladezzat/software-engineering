---
card: "https://cdn-media-1.freecodecamp.org/images/1*UNpp95VAxeCcyKy8z6w_oA.jpeg"
tags: [JavaScript]
description: by Dmitri Grabov
author: "Milad E. Fahmy"
title: "JavaScript Objects, Square Brackets and Algorithms"
created: "2021-08-15T19:47:52+02:00"
modified: "2021-08-15T19:47:52+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-algorithms tag-software-development tag-computer-science tag-learning-to-code ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Objects, Square Brackets and Algorithms</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*UNpp95VAxeCcyKy8z6w_oA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*UNpp95VAxeCcyKy8z6w_oA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*UNpp95VAxeCcyKy8z6w_oA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*UNpp95VAxeCcyKy8z6w_oA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*UNpp95VAxeCcyKy8z6w_oA.jpeg" alt="JavaScript Objects, Square Brackets and Algorithms">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Dmitri Grabov</p>
<h1 id="javascript-objects-square-brackets-and-algorithms">JavaScript Objects, Square Brackets and Algorithms</h1>
<p>One of the most powerful aspects of JavaScript is being able to dynamically refer to properties of objects. In this article we will look at how this works and what advantages this might give us. We will take a quick look at some of the data structures used in Computer Science. In addition we will look at something called Big O notation which is used to describe the performance of an algorithm.</p>
<h3 id="objects-intro">Objects intro</h3>
<p>Let’s begin by creating a simple object representing a car. Each object has something called <code>properties</code>. A property is a variable that belongs to an object. Our car object will have three properties: <code>make</code>, <code>model</code> and <code>color</code>.</p>
<p>Let’s see what it could look like:</p><pre><code>const car = {  make: 'Ford',  model: 'Fiesta',  color: 'Red'};</code></pre>
<p>We can refer to individual properties of an object using dot notation. For example, if we wanted to find out what the color of our car is, we can use dot notation like this <code>car.color</code>.</p>
<p>We could even output it using <code>console.log</code>:</p><pre><code>console.log(car.color); //outputs: Red</code></pre>
<p>Another way to refer to a property is using square bracket notation:</p><pre><code>console.log(car['color']); //outputs: Red</code></pre>
<p>In the above example, we use the property name as a string inside square brackets to get the value corresponding to that property name. The useful thing about square bracket notation is that we can also use variables to get properties dynamically.</p>
<p>That is, rather than hardcoding a specific property name, we can specify it as a string in a variable:</p><pre><code>const propertyName = 'color';const console.log(car[propertyName]); //outputs: Red</code></pre>
<h3 id="using-dynamic-lookup-with-square-bracket-notation">Using dynamic lookup with square bracket notation</h3>
<p>Let’s look at an example where we can use this. Let’s say we run a restaurant and we want to be able to get the prices of items on our menu. One way doing this is using <code>if/else</code> statements.</p>
<p>Let’s write a function which will accept an item name and return a price:</p><pre><code>function getPrice(itemName){  if(itemName === 'burger') {    return 10;  } else if(itemName === 'fries') {    return 3;  } else if(itemName === 'coleslaw') {    return 4;  } else if(itemName === 'coke') {    return 2;  } else if(itemName === 'beer') {    return 5;  }}</code></pre>
<p>While the above approach works, it’s not ideal. We have hardcoded the menu in our code. Now if our menu changes, we will have to rewrite our code and redeploy it. In addition, we could have a long menu and having to write all this code would be cumbersome.</p>
<p>A better approach would be to separate our data and our logic. The data will contain our menu and the logic will look up prices from that menu.</p>
<p>We can represent the <code>menu</code> as an object where the property name, also known as a key, corresponds to a value.</p>
<p>In this case the key will be the item name and value will be the item price:</p><pre><code>const menu = {  burger: 10,  fries: 3,  coleslaw: 4,  coke: 2,  beer: 5};</code></pre>
<p>Using square bracket notation we can create a function which will accept two arguments:</p>
<ul>
<li>a menu object</li>
<li>a string with item name</li>
</ul>
<p>and return the price of that item:</p><pre><code>const menu = {  burger: 10,  fries: 3,  coleslaw: 4,  coke: 2,  beer: 5};</code></pre><pre><code>function getPrice(itemName, menu){  const itemPrice = menu[itemName];  return itemPrice;}</code></pre><pre><code>const priceOfBurger = getPrice('burger', menu);console.log(priceOfBurger); // outputs: 10</code></pre>
<p>The neat thing about this approach is that we have separated our data from our logic. In this example, the data lives in our code, but it could just as easily be coming from a database or API. It is no longer tightly coupled with our lookup logic which converts item name to item price.</p>
<h3 id="datastructures-and-algorithms">Datastructures and algorithms</h3>
<p>A map in Computer Science terms is a data structure which is a collection of key/value pairs where each key maps to a corresponding value. We can use it to look a value which corresponds to a specific key. This is what we are doing in the previous example. We have a key which is an item name and we can look up the corresponding price of that item using our menu object. We are using an object to implement a map data structure.</p>
<p>Let’s look at an example of why we may want to use a map. Let’s say we run a book shop and have a list of books. Each book has a unique indentifier called International Standard Book Number (ISBN), which is a 13 digit number. We store our books in an array and want to be able to look them up using the ISBN.</p>
<p>One way of doing so is by looping over the array, checking the ISBN value of each book and if it matches returning it:</p><pre><code>const books = [{  isbn: '978-0099540946',  author: 'Mikhail Bulgakov',  title: 'Master and Margarita'}, {  isbn: '978-0596517748',  author: 'Douglas Crockford',  title: 'JavaScript: The Good Parts'}, {  isbn: '978-1593275846',  author: 'Marijn Haverbeke',  title: 'Eloquent JavaScript'}];</code></pre><pre><code>function getBookByIsbn(isbn, books){  for(let i = 0; i &lt; books.length; i++){    if(books[i].isbn === isbn) {      return books[i];    }  }}</code></pre><pre><code>const myBook = getBookByIsbn('978-1593275846', books);</code></pre>
<p>That works fine in this example since we only have three books (it’s a small book shop). However, if we were Amazon, iterating over millions of books could be very slow and computationally expensive.</p>
<p><a href="https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/" rel="noopener">Big O notation</a> is used in Computer Science to describe the performance of an algorithm. For example if <em>n</em> is the number of books in our collection, the cost of using iteration to look up a book in the worst case scenario (the book we look for is last in the list) will be <em>O(n)</em>. That means if the number of books in our collection doubles, the cost of finding a book using iteration will double as well.</p>
<p>Let’s take a look at how we can make our algorithm more efficient by using a different data structure.</p>
<p>As discussed, a map can be used to look up the value which corresponds to a key. We can structure our data as map instead of an array by using an object.</p>
<p>The key will be the ISBN and the value will be the corresponding book object:</p><pre><code>const books = {  '978-0099540946':{    isbn: '978-0099540946',    author: 'Mikhail Bulgakov',    title: 'Master and Margarita'  },  '978-0596517748': {    isbn: '978-0596517748',    author: 'Douglas Crockford',    title: 'JavaScript: The Good Parts'  },  '978-1593275846': {    isbn: '978-1593275846',    author: 'Marijn Haverbeke',    title: 'Eloquent JavaScript'  }};</code></pre><pre><code>function getBookByIsbn(isbn, books){  return books[isbn];}</code></pre><pre><code>const myBook = getBookByIsbn('978-1593275846', books);</code></pre>
<p>Instead of using iteration, we can now use a simple map lookup by ISBN to get our value. We no longer need to check the ISBN value for each object. We get the value directly from the map using the key.</p>
<p>In terms of performance, a map lookup will provide a huge improvement over iteration. This is because the map lookup has constant cost in terms of computation. This can be written using Big O notation as <em>O(1)</em>. It does not matter if we have three or three million books, we can get the book we want just as fast by doing a map lookup using the ISBN key.</p>
<h3 id="recap">Recap</h3>
<ul>
<li>We have seen we can access the values of object properties using dot notation and square bracket notation</li>
<li>We learned how we can dynamically look up values of property by using variables with square bracket notation</li>
<li>We have also learned that a map datastructure maps keys to values. We can use keys to directly look up values in a map which we implement using an object.</li>
<li>We had a first glance at how algorithm performance is described using <em>Big O</em> notation. In addition, we saw how we can improve the performance of a search by converting an array of objects into a map and using direct lookup rather than iteration.</li>
</ul>
<p>Want to test your new found skills? Try the <a href="https://www.codewars.com/kata/crash-override/javascript" rel="noopener">Crash Override</a> exercise on Codewars.</p>
<p>Want to learn how to write web applications using JavaScript? I run <a href="http://constructorlabs.com/" rel="noopener">Constructor Labs</a>, a 12 week <a href="http://constructorlabs.com/course" rel="noopener">JavaScript coding bootcamp</a> in London. The technologies taught include <strong>HMTL</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, <strong>Redux</strong>, <strong>Node</strong> and <strong>Postgres</strong>. Everything you need to create an entire web app from scratch and get your first job in the industry. Fees are £3,000 and next cohort starts on 29th May. <a href="http://constructorlabs.com/admission" rel="noopener">Applications are open now</a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
