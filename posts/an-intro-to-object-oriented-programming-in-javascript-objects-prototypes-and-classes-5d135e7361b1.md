---
card: "https://cdn-media-1.freecodecamp.org/images/1*zGuG4nFo8O4e0WMoNWVbMA.jpeg"
tags: [JavaScript]
description: by Andrea Koutifaris
author: "Milad E. Fahmy"
title: "An intro to object-oriented programming in JavaScript: objects, prototypes, and classes"
created: "2021-08-15T19:39:48+02:00"
modified: "2021-08-15T19:39:48+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-object-oriented tag-prototype tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">An intro to object-oriented programming in JavaScript: objects, prototypes, and classes</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*zGuG4nFo8O4e0WMoNWVbMA.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*zGuG4nFo8O4e0WMoNWVbMA.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*zGuG4nFo8O4e0WMoNWVbMA.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*zGuG4nFo8O4e0WMoNWVbMA.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*zGuG4nFo8O4e0WMoNWVbMA.jpeg" alt="An intro to object-oriented programming in JavaScript: objects, prototypes, and classes">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>by Andrea Koutifaris</p>
<h1 id="an-intro-to-object-oriented-programming-in-javascript-objects-prototypes-and-classes">An intro to object-oriented programming in JavaScript: objects, prototypes, and classes</h1>
<figcaption>Objects in a class(room).</figcaption>
</figure>
<p>In many programming languages, classes are a well-defined concept. In JavaScript that is not the case. Or at least that wasn’t the case. If you search for O.O.P. and JavaScript you will run into many articles with a lot of different recipes on how you can emulate a <code>class</code> in JavaScript.</p>
<p>Is there a simple, K.I.S.S. way to define a class in JavaScript? And if so, why so many different recipes to define a class?</p>
<p>Before answering to those questions, let’s understand better what a JavaScript <code>Object</code> is.</p>
<h3 id="objects-in-javascript"><strong>Objects in JavaScript</strong></h3>
<p>Let’s begin with a very simple example:</p><pre><code class="language-js">const a = {};
a.foo = 'bar';</code></pre>
<p>In the above code snippet an object is created and enhanced with a property <code>foo</code>. The possibility of adding things to an existing object is what makes JavaScript different from classic languages like Java.</p>
<p>More in detail, the fact that an object can be enhanced makes it possible to create an instance of an “implicit” class without the need to actually create the class. Let’s clarify this concept with an example:</p><pre><code class="language-js">function distance(p1, p2) {
return Math.sqrt(
(p1.x - p2.x) ** 2 +
(p1.y - p2.y) ** 2
);
}
distance({x:1,y:1},{x:2,y:2});</code></pre>
<p>In the example above, I didn’t need a Point class to create a point, I just extended an instance of <code>Object</code> adding <code>x</code> and <code>y</code> properties. The function distance doesn’t care if the arguments are an instance of the class <code>Point</code> or not. Until you call <code>distance</code> function with two objects that have an <code>x</code> and <code>y</code> property of type <code>Number</code>, it will work just fine. This concept is sometimes called <em>duck typing</em>.</p>
<p>Up to now, I’ve only used a data object: an object containing only data and no functions. But in JavaScript it is possible to add functions to an object:</p><pre><code class="language-js">const point1 = {
x: 1,
y: 1,
toString() {
return `(${this.x},${this.y})`;
}
};
const point2 = {
x: 2,
y: 2,
toString() {
return `(${this.x},${this.y})`;
}
};</code></pre>
<p>This time, the objects representing a 2D point have a <code>toString()</code> method. In the example above, the <code>toString</code> code has been duplicated, and this is not good.</p>
<p>There are many ways to avoid that duplication, and, in fact, in different articles about objects and classes in JS you will find different solutions. Have you ever heard of the “Revealing module pattern”? It contains the words “pattern” and “revealing”, sounds cool, and “module” is a must. So it must be the right way to create objects… except that it isn’t. Revealing module pattern can be the right choice in some cases, but it is definitely not the default way of creating objects with behaviors.</p>
<p>We are now ready to introduce classes.</p>
<h3 id="classes-in-javascript"><strong>Classes in JavaScript</strong></h3>
<p>What is a class? From a dictionary: a class is “a set or category of things having some property or attribute in common and differentiated from others by kind, type, or quality.”</p>
<p>In programming languages we often say “An object is an instance of a class”. This means that, using a class, I can create many objects and they all share methods and properties.</p>
<p>Since objects can be enhanced, as we’ve seen earlier, there are may ways to create objects sharing methods and properties. But we want the simplest one.</p>
<p>Fortunately ECMAScript 6 provides the keyword <code>class</code>, making it very easy to create a class:</p><pre><code class="language-js">class Point {
constructor(x, y) {
this.x = x;
this.y = y;
}
toString() {
return `(${this.x},${this.y})`;
}
}</code></pre>
<p>So, in my opinion, that is the best way of declaring classes in JavaScript. Classes are often related to inheritance:</p><pre><code class="language-js">class Point extends HasXY {
constructor(x, y) {
super(x, y);
}
toString() {
return `(${this.x},${this.y})`;
}
}</code></pre>
<p>As you can see in the example above, to extend another class it is enough to use the keyword <code>extends</code> .</p>
<p>You can create an object from a class using the <code>new</code> operator:</p><pre><code class="language-js">const p = new Point(1,1);
console.log(p instanceof Point); // prints true</code></pre>
<p>A good object oriented way of defining classes should provide:</p>
<ul>
<li>a simple syntax to declare a class</li>
<li>a simple way to access to the current instance, a.k.a. <code>this</code></li>
<li>a simple syntax to extend a class</li>
<li>a simple way to access the super class instance, a.k.a. <code>super</code></li>
<li>possibly, a simple way of telling if an object is an instance of a particular class. <code>obj instanceof AClass</code> should return <code>true</code> if that object is an instance of that class.</li>
</ul>
<p>The new <code>class</code> syntax provides all the points above.</p>
<p>Before the introduction of the <code>class</code> keyword, what was the way to define a class in JavaScript?</p>
<p>In addition, what really is a class in JavaScript? Why do we often speak about <em>prototypes</em>?</p>
<h3 id="classes-in-javascript-5"><strong>Classes in JavaScript 5</strong></h3>
<p>From <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes" rel="noopener">Mozilla MDN page about classes</a>:</p>
<blockquote>JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript’s existing <strong>prototype-based inheritance</strong>. The class syntax does not introduce a new object-oriented inheritance model to JavaScript.</blockquote>
<p>The key concept here is <strong>prototype-based inheritance</strong>. Since there is a lot of misunderstanding on what that kind of inheritance is, I will proceed step by step, moving from <code>class</code> keyword to <code>function</code> keyword.</p><pre><code class="language-js">class Shape {}
console.log(typeof Shape);
// prints function</code></pre>
<p>It seems that <code>class</code> and <code>function</code> are related. Is <code>class</code> just an alias for <code>function</code> ? No, it isn’t.</p><pre><code class="language-js">Shape(2);
// Uncaught TypeError: Class constructor Shape cannot be invoked without 'new'</code></pre>
<p>So, it seems that the people who introduced <code>class</code> keyword wanted to tell us that a class is a function that must be called using the <code>new</code> operator.</p><pre><code class="language-js">var Shape = function Shape() {} // Or just function Shape(){}
var aShape = new Shape();
console.log(aShape instanceof Shape);
// prints true</code></pre>
<p>The example above shows that we can use <code>function</code> to declare a class. We cannot, however, force the user to call the function using the <code>new</code> operator. It is possible to throw an exception if the <code>new</code> operator wasn’t used to call the function.</p>
<p>Anyway I suggest you don’t put that check in every function that acts as a class. Instead use this convention: any function whose name begins with a capital letter is a class and must be called using the <code>new</code> operator.</p>
<p>Let’s move on, and find out what a <em>prototype</em> is:</p><pre><code class="language-js">class Shape {
getName() {
return 'Shape';
}
}
console.log(Shape.prototype.getName);
// prints function getName() ...</code></pre>
<p>Each time you declare a method inside a class, you actually add that method to the prototype of the corresponding function. The equivalent in JS 5 is:</p><pre><code class="language-js">function Shape() {}
Shape.prototype.getName = function getName() {
return 'Shape';
};
console.log(new Shape().getName()); // prints Shape</code></pre>
<p>Sometimes the class-functions are called <em>constructors</em> because they act like constructors in a regular class.</p>
<p>You may wonder what happens if you declare a static method:</p><pre><code class="language-js">class Point {
static distance(p1, p2) {
// ...
}
}
console.log(Point.distance); // prints function distance
console.log(Point.prototype.distance); // prints undefined</code></pre>
<p>Since static methods are in a 1 to 1 relation with classes, the static function is added to the constructor-function, not to the prototype.</p>
<p>Let’s recap all these concepts in a simple example:</p><pre><code class="language-js">function Point(x, y) {
this.x = x;
this.y = y;
}
Point.prototype.toString = function toString() {
return '(' + this.x + ',' + this.y + ')';
};
Point.distance = function distance() {
// ...
}
console.log(new Point(1,2).toString()); // prints (1,2)
console.log(new Point(1,2) instanceof Point); // prints true</code></pre>
<p>Up to now, we have found a simple way to:</p>
<ul>
<li>declare a function that acts as a class</li>
<li>access the class instance using the <code>this</code> keyword</li>
<li>create objects that are actually an instance of that class (<code>new Point(1,2) instanceof Point</code> returns <code>true</code> )</li>
</ul>
<p>But what about inheritance? What about accessing the super class?</p><pre><code class="language-js">class Hello {
constructor(greeting) {
this._greeting = greeting;
}
greeting() {
return this._greeting;
}
}
class World extends Hello {
constructor() {
super('hello');
}
worldGreeting() {
return super.greeting() + ' world';
}
}
console.log(new World().greeting()); // Prints hello
console.log(new World().worldGreeting()); // Prints hello world</code></pre>
<p>Above is a simple example of inheritance using ECMAScript 6, below the same example using the the so called <strong>prototype inheritance</strong>:</p><pre><code class="language-js">function Hello(greeting) {
this._greeting = greeting;
}
Hello.prototype.greeting = function () {
return this._greeting;
};
function World() {
Hello.call(this, 'hello');
}
// Copies the super prototype
World.prototype = Object.create(Hello.prototype);
// Makes constructor property reference the sub class
World.prototype.constructor = World;
World.prototype.worldGreeting = function () {
const hello = Hello.prototype.greeting.call(this);
return hello + ' world';
};
console.log(new World().greeting()); // Prints hello
console.log(new World().worldGreeting()); // Prints hello world</code></pre>
<p>This way of declaring classes is also suggested in the Mozilla MDN example <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Examples" rel="noopener">here</a>.</p>
<p>Using the <code>class</code> syntax, we deduced that creating classes involves altering the prototype of a function. But why is that so? To answer this question we must understand what the <code>new</code> operator actually does.</p>
<h3 id="new-operator-in-javascript">New operator in JavaScript</h3>
<p>The <code>new</code> operator is explained quite well in the Mozilla MDN page <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new" rel="noopener">here</a>. But I can provide you with a relatively simple example that emulates what the <code>new</code> operator does:</p><pre><code class="language-js">function customNew(constructor, ...args) {
const obj = Object.create(constructor.prototype);
const result = constructor.call(obj, ...args);
return result instanceof Object ? result : obj;
}
function Point() {}
console.log(customNew(Point) instanceof Point); // prints true</code></pre>
<p>Note that the real <code>new</code> algorithm is more complex. The purpose of the example above is just to explain what happens when you use the <code>new</code> operator.</p>
<p>When you write <code>new Point(1,2)</code>what happens is:</p>
<ul>
<li>The <code>Point</code> prototype is used to create an object.</li>
<li>The function constructor is called and the just created object is passed as the context (a.k.a. <code>this</code>) along with the other arguments.</li>
<li>If the constructor returns an Object, then this object is the result of the new, otherwise the object created from the prototype is the result.</li>
</ul>
<p>So, what does <strong>prototype inheritance</strong> mean? It means that you can create objects that inherit all the properties defined in the prototype of the function that was called with the <code>new</code> operator.</p>
<p>If you think of it, in a classical language the same process happens: when you create an instance of a class, that instance can use the <code>this</code> keyword to access to all the functions and properties (public) defined in the class (and the ancestors). As opposite to properties, all the instances of a class will likely share the same references to the class methods, because there is no need to duplicate the method’s binary code.</p>
<h3 id="functional-programming">Functional programming</h3>
<p>Sometimes people say that JavaScript is not well suited for Object Oriented programming, and you should use functional programming instead.</p>
<p>While I don’t agree that JS is not suited for O.O.P, I do think that functional programming is a very good way of programming. In JavaScript functions are <a href="https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function" rel="noopener">first class citizens</a> (e.g. you can pass a function to another function) and it provides features like <code>bind</code> , <code>call</code> or <code>apply</code> which are base constructs used in functional programming.</p>
<p>In addition RX programming could be seen as an evolution (or a specialization) of functional programming. Have a look to <a href="https://rxjs-dev.firebaseapp.com/" rel="noopener">RxJs here</a>.</p>
<h3 id="conclusion">Conclusion</h3>
<p>Use, when possible, ECMAScript 6 <code>class</code> syntax:</p><pre><code class="language-js">class Point {
toString() {
//...
}
}</code></pre>
<p>or use function prototypes to define classes in ECMAScript 5:</p><pre><code class="language-js">function Point() {}
Point.prototype.toString = function toString() {
// ...
}</code></pre>
<p>Hope you enjoyed the reading!</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
