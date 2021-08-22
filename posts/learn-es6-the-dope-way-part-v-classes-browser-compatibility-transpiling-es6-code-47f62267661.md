---
card: "https://cdn-media-1.freecodecamp.org/images/1*RuxaPPPrL6K09eF4pFhISw.jpeg"
tags: [JavaScript]
description: "by Mariya Diminsky"
author: "Milad E. Fahmy"
title: "Learn ES6 The Dope Way Part V: Classes, Transpiling ES6 Code & More Resources!"
created: "2021-08-16T10:29:01+02:00"
modified: "2021-08-16T10:29:01+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-es6 tag-web-development tag-tutorial tag-education ">
<header class="post-full-header">
<h1 class="post-full-title">Learn ES6 The Dope Way Part V: Classes, Transpiling ES6 Code &amp; More Resources!</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*RuxaPPPrL6K09eF4pFhISw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*RuxaPPPrL6K09eF4pFhISw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*RuxaPPPrL6K09eF4pFhISw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*RuxaPPPrL6K09eF4pFhISw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*RuxaPPPrL6K09eF4pFhISw.jpeg" alt="Learn ES6 The Dope Way Part V: Classes, Transpiling ES6 Code &amp; More Resources!">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
this.name = name;
this.age = age;
this.favoriteFood = favoriteFood;
}
Bunny.prototype.eatFavFood = function () {
console.log('\"Mmmm! Those ' + this.favoriteFood + ' were delicious\", said ' + this.name + ', the ' + this.age + ' year old bunny.');
};
var newBunny = new Bunny('Brigadier Fluffkins', 3, 'Raspberry Leaves');
newBunny.eatFavFood();
// "Mmmm! Those Raspberry Leaves were delicious", said Brigadier Fluffkins, the 3 year old bunny.
</code></pre><p>Now observe the same thing with ES6 <em>classes</em>:</p><pre><code class="language-js">class Bunny {
constructor(name, age, favoriteFood){
this.name = name;
this.age = age;
this.favoriteFood = favoriteFood;
}
eatFavFood() {
console.log(`"Mmmm! Those ${this.favoriteFood} were delicious", said ${this.name} the ${this.age} year old bunny.`);
};
}
let es6Bunny = new Bunny('Brigadier Fluffkins', 3, 'Raspberry Leaves');
es6Bunny.eatFavFood();
// "Mmmm! Those Raspberry Leaves were delicious", said Brigadier Fluffkins the 3 year old bunny.
</code></pre><p>What are the main differences? Clearly the <em>class</em> syntax looks like an object, but remember that actually it’s still a function and behaves so. Test it out yourself:</p><pre><code class="language-js">typeof Bunny
// function</code></pre><p>Another main difference is anything you want to store must be within a <em>constructor</em> method. Any prototype method of the <em>class</em> should be inside of that <em>class, </em>but outside of the<em> constructor, </em>without writing ‘.<em>prototype</em>’, and in ES6 function syntax.</p><h4 id="twos-ways-of-defining-a-class-prototype-inheritance">Twos Ways of Defining a Class &amp; Prototype Inheritance</h4><p>Now there are two main ways of defining a <em>class </em>— the example above is one of the more common ways, a <em>class</em> declaration. While a <em>class</em> is indeed a function and function declarations are hoisted — meaning the function can be accessed no matter if it is called before it is declared — yet you cannot hoist a <em>class</em> declaration. This is important to remember:</p><pre><code class="language-js">// Normal function declaration
// called before it is declared and it works.
callMe(); // Testing, Testing.
function callMe() {
console.log("Testing, Testing.")
}
// This is called after, as we would do in a function expression,
// and it works too!
callMe() // Testing, Testing.
// But with classes...You can't create an instance of a class
// before creating it:
let es6Bunny = new Bunny('Brigadier Fluffkins', 3, 'Raspberry Leaves');
es6Bunny.eatFavFood();
class Bunny {
constructor(name, age, favoriteFood){
this.name = name;
this.age = age;
this.favoriteFood = favoriteFood;
}
eatFavFood() {
console.log(`"Mmmm! Those ${this.favoriteFood} were delicious", said ${this.name} the ${this.age} year old bunny.`);
};
}
// Instead we get this: Uncaught ReferenceError: Bunny is not defined</code></pre><p>The reason for this limitation is that <em>classes</em> can have an <em>extends</em> clause — used for inheritance — whose value can be specified at a later time or may even depend on an inputted value or computation. Since expressions may sometime need to be evaluated another time, it makes sense for this evaluation not to be hoisted before all values are evaluated. Not doing so may cause errors in your code.</p><p>Still, it is possible to store an instance of a <em>class</em> before it is created in a function for later use and evaluate it after the <em>class</em> has been defined:</p><pre><code class="language-js">function createNewBunny() { new Bunny(); }
createNewBunny(); // ReferenceError
class Bunny {...etc}
createNewBunny(); // Works!</code></pre><p>The second way to define a class is a <em>class</em> expression. As with function expressions, class <em>expressions</em> can be named or anonymous. Be aware, these names are only local to the <em>class</em> body and cannot be accessed outside of it:</p><pre><code class="language-js">// anonymous:
const Bunny = class {
etc...
};
const BunnyBurgerKins = new Bunny();
// named
const Bunny = class SurferBunny {
whatIsMyName() {
return SurferBunny.name;
}
};
const BunnyBurgerKins = new Bunny();
console.log(BunnyBurgerKins.whatIsMyName()); // SurferBunny
console.log(SurferBunny.name); // ReferenceError: SurferBunny is not defined</code></pre><p>There are two types of <em>classes</em>: The base <em>class — </em>or the parent class — and the derived <em>class — </em>the inherited subclass. Here <em>Bunny</em> is the base class and <em>BelgianHare</em> is the derived class since it has the <em>extends</em> clause. Notice how simple the syntax for prototype inheritance is with <em>classes</em>:</p><pre><code class="language-js">class Bunny {
constructor(name, age, favoriteFood){
this.name = name;
this.age = age;
this.favoriteFood = favoriteFood;
}
eatFavFood() {
console.log(`"Mmmm! That ${this.favoriteFood} was delicious", said ${this.name} the ${this.age} year old bunny.`);
};
}
class BelgianHare extends Bunny {
constructor(favDrink, favoriteFood, name, age) {
super(name, age, favoriteFood);
this.favDrink = favDrink;
}
drinkFavDrink() {
console.log(`\"Thank you for the ${this.favDrink} and ${this.favoriteFood}!\", said ${this.name} the happy ${this.age} year old Belgian Hare bunny.`)
}
}
let newBelgHare = new BelgianHare('Water', 'Grass', 'Donald', 5);
newBelgHare.drinkFavDrink();
// "Thank you for the Water and Grass!", said Donald the happy 5 year old Belgian Hare bunny.
newBelgHare.eatFavFood();
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
