---
card: "https://cdn-media-1.freecodecamp.org/images/1*yF1csYj3s_p4lBZW8L0iCA.jpeg"
tags: [JavaScript]
description: by Cynthia Lee
author: "Milad E. Fahmy"
title: "Let’s demystify JavaScript’s ‘new’ keyword"
created: "2021-08-15T19:46:18+02:00"
modified: "2021-08-15T19:46:18+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-learning tag-code tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Let’s demystify JavaScript’s ‘new’ keyword</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*yF1csYj3s_p4lBZW8L0iCA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*yF1csYj3s_p4lBZW8L0iCA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*yF1csYj3s_p4lBZW8L0iCA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*yF1csYj3s_p4lBZW8L0iCA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*yF1csYj3s_p4lBZW8L0iCA.jpeg" alt="Let’s demystify JavaScript’s ‘new’ keyword">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Cynthia Lee</p>
<h1 id="let-s-demystify-javascript-s-new-keyword">Let’s demystify JavaScript’s ‘new’ keyword</h1>
<p>Over the weekend, I completed Will Sentance’s <a href="https://frontendmasters.com/courses/javascript-hard-parts/" rel="noopener">JavaScript: The Hard Parts</a>. It might not sound like the most glorious way to spend a weekend, but I actually found it pretty fun and relaxing to complete the course. It touched on functional programming, higher-order functions, closures, and asynchronous JavaScript.</p>
<p>For me, the highlight of the course was how he expanded on the JavaScript approaches to Object-Oriented Programming (OOP) and demystified the magic behind the <strong>new </strong>operator. I now have a well-rounded understanding of what goes on under the hood when the <strong>new</strong> operator is used.</p>
<h3 id="object-oriented-programming-in-javascript">Object-Oriented Programming in <strong>JavaScript</strong></h3>
<figcaption>Photo by <a href="https://unsplash.com/@nickkarvounis?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Nick Karvounis</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" rel="noopener" target="_blank" title="">Unsplash</a></figcaption>
</figure>
<p>Object-Oriented Programming (OOP) is a programming paradigm based on the concept of “objects.” Data and functions (attributes and methods) are bundled within an object.</p>
<p>An object in JavaScript is a collection of key-value pairs. These key-value pairs are properties of the object. A property can be an array, a function, an object itself or any primitive data type such as strings or integers.</p>
<p>What techniques do we have in our JavaScript toolbox for object creation?</p>
<p>Let’s assume that we are creating users in a game that we just designed. How would we store user details such as their names, points, and implement methods such as an increment in points? Here are two options for basic object creation.</p>
<h4 id="option-1-object-literal-notation"><strong>Option 1 — Object Literal Notation</strong></h4><pre><code class="language-js">let user1 = {
name: "Taylor",
points: 5,
increment: function() {
user1.points++;
}
};</code></pre>
<p>A JavaScript object literal is a list of name-value pairs wrapped in curly braces. In the example above, the object ‘user1’ is created, and the associated data is stored within it.</p>
<h4 id="option-2-object-create-"><strong>Option 2 — Object.create()</strong></h4>
<p><code>Object.create(proto, [ propertiesObject ])</code></p>
<p><code>Object.create</code> methods accept two arguments:</p>
<ol>
<li>proto: the object which should be the prototype of the newly-created object. It has to be an object or null.</li>
<li>propertiesObject: properties of the new object. This argument is optional.</li>
</ol>
<p>Basically, you pass into <code>Object.create</code> an object that you want to inherit from, and it returns a new object that inherits from the object you passed into it.</p><pre><code class="language-js">let user2 = Object.create(null);
user2.name = "Cam";
user2.points = 8;
user2.increment = function() {
user2.points++;
}</code></pre>
<p>The basic object creation options above are repetitive. It requires each one to be manually created.</p>
<p>How do we overcome this?</p>
<h3 id="solutions">Solutions</h3>
<h4 id="solution-1-generate-objects-using-a-function"><strong>Solution 1 — Generate objects using a function</strong></h4>
<p>A simple solution is to write a function to create new users.</p><pre><code class="language-js">function createUser(name, points) {
let newUser = {};
newUser.name = name;
newUser.points = points;
newUser.increment = function() {
newUser.points++;
};
return newUser;
}</code></pre>
<p>To create a user, you would now enter the information in parameters of the function.</p><pre><code class="language-js">let user1 = createUser("Bob", 5);
user1.increment();</code></pre>
<p>However, the increment function in the example above is just a copy of the original increment function. This is not a good way to write your code, as any potential changes to the function will need to be done manually for each object.</p>
<h4 id="solution-2-use-the-prototypal-nature-of-javascript"><strong>Solution 2 — Use the prototypal nature of JavaScript</strong></h4>
<p>Unlike object-oriented languages such as Python and Java, JavaScript does not have classes. It uses the concept of prototypes and prototype chaining for inheritance.</p>
<p>When you create a new array, you automatically have access to built-in methods such as <code>Array.join</code>, <code>Array.sort</code>, and <code>Array.filter</code>. This is due to the fact that array objects inherit properties from Array.prototype.</p>
<figcaption>Image credit: <a href="https://www.toptal.com/javascript/javascript-prototypes-scopes-and-performance-what-you-need-to-know" rel="noopener" target="_blank" title="">JavaScript Prototype Chains, Scope Chains, and Performance </a>by Diego Castorina</figcaption>
</figure>
<p>Every JavaScript function has a prototype property, which is empty by default. You can add functions to this prototype property, and in this form, it is known as a method. When an inherited function is executed, the value of this points to the inheriting object.</p><pre><code class="language-js">function createUser(name, points) {
let newUser = Object.create(userFunction);
newUser.name = name;
newUser.points = points;
return newUser;
}
let userFunction = {
increment: function() {this.points++};
login: function() {console.log("Please login.")};
}
let user1 = createUser("Bob", 5);
user1.increment();</code></pre>
<p>When the <code>user1</code> object was created, a prototype chain bond with userFunction was formed.</p>
<p>When <code>user1.increment() </code>is in the call stack, the interpreter will look for user1 in the global memory. Next, it will look for the increment function, but will not find it. The interpreter will look at the next object up the prototype chain and will find the increment function there.</p>
<h4 id="solution-3-new-and-this-keywords"><strong>Solution 3 —<em> new</em> and <em>this</em> keywords</strong></h4>
<p>The<em> </em><strong>new</strong> operator is used to create an instance of an object which has a constructor function.</p>
<p>When we call the constructor function with new, we automate the following actions:</p>
<ul>
<li>A new object is created</li>
<li>It binds <code>this</code> to the object</li>
<li>The constructor function’s prototype object becomes the __proto__ property of the new object</li>
<li>It returns the object from the function</li>
</ul>
<p>This is fantastic, because the automation results in less repetitive code!</p><pre><code class="language-js">function User(name, points) {
this.name = name;
this.points = points;
}
User.prototype.increment = function(){
this.points++;
}
User.prototype.login = function() {
console.log(“Please login.”)
}
let user1 = new User(“Dylan”, 6);
user1.increment();</code></pre>
<p>By using the prototype pattern, each method and property is added directly on the object’s prototype.</p>
<p>The interpreter will go up the prototypal chain and find the increment function under the prototype property of User, which itself is also an object with the information inside it. Remember — <strong>All functions in JavaScript are also objects</strong>. Now that the interpreter has found what it needs, it can create a new local execution context to run <code>user1.increment()</code>.</p>
<p><strong>Side note: Difference between __proto__ and prototype</strong></p>
<p>If you are already getting confused about __proto__ and prototype, don’t worry! You are far from the only one to be confused about this.</p>
<p>Prototype is a property of the constructor function that determines what will become the __proto__ property on the constructed object.</p>
<p>So, __proto__ is the reference created, and that reference is known as the prototype chain bond.</p>
<h4 id="solution-4-es6-syntactic-sugar-"><strong>Solution 4 — ES6 ‘syntactic sugar’</strong></h4>
<p>Other languages allow us to write our shared methods within the object “constructor” itself. ECMAScript6 introduced the <strong>class</strong> keyword, which allows us to write classes that resemble normal classes of other classical languages. In reality, it is syntactic sugar over JavaScript’s prototypal behavior.</p><pre><code class="language-js">class User {
constructor(name, points) {
this.name = name;
this.points = points;
}
increment () {
this.points++;
}
login () {
console.log("Please login.")
}
}
let user1 = new User("John", 12);
user1.increment();</code></pre>
<p>In solution 3, the associated methods were precisely implemented using <code>User.prototype.functionName</code>. In this solution, the same results are achieved but the syntax looks cleaner.</p>
<h3 id="conclusion"><strong>Conclusion</strong></h3>
<p>We have now learned more about the different options we have in JavaScript to create objects. While <strong>class</strong> declarations and the<em> </em><strong>new</strong> operator are relatively easy to use, it is important to understand what is automated.</p>
<p>To recap, the following actions are automated when the constructor function is called with <strong>new</strong><em>:</em></p>
<ul>
<li>A new object is created</li>
<li>It binds <code>this</code> to the object</li>
<li>The constructor function’s prototype object becomes the __proto__ property of the new object</li>
<li>It returns the object from the function</li>
</ul>
<p>Thanks for reading my article, and clap if you liked it! Check out my other articles like <a href="https://medium.freecodecamp.org/how-i-built-my-pomodoro-clock-app-and-the-lessons-i-learned-along-the-way-51288983f5ee" rel="noopener">How I built my Pomodoro Clock app, and the lessons I learned along the way</a>.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
