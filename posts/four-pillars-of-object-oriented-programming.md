---
card: "/images/default.jpg"
tags: [object oriented programming]
description: JavaScript is a multi-paradigm language and can be written fo
author: "Milad E. Fahmy"
title: "The Four Pillars of Object-Oriented Programming"
created: "2021-08-15T19:27:48+02:00"
modified: "2021-08-15T19:27:48+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-object-oriented-programming tag-javascript tag-object-oriented ">
<header class="post-full-header">
<h1 class="post-full-title">The Four Pillars of Object-Oriented Programming</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/12/The-four-pillars-of-object-orientation.png 300w,
/news/content/images/size/w600/2020/12/The-four-pillars-of-object-orientation.png 600w,
/news/content/images/size/w1000/2020/12/The-four-pillars-of-object-orientation.png 1000w,
/news/content/images/size/w2000/2020/12/The-four-pillars-of-object-orientation.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/12/The-four-pillars-of-object-orientation.png" alt="The Four Pillars of Object-Oriented Programming">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>JavaScript is a multi-paradigm language and can be written following different programming paradigms. A programming paradigm is essentially a bunch of rules that you follow when writing code, to help you solve a particular problem.</p>
<p>That's what the four pillars are. They're software design principles to help you write clean Object-Orientated code.</p>
<p>The four pillars of object-oriented programming are: </p>
<ul>
<li>Abstraction </li>
<li>Encapsulation</li>
<li>Inheritance</li>
<li>Polymorphism</li>
</ul>
<p>Let's take a closer look at each of them.</p>
<h1 id="abstraction-in-object-oriented-programming">Abstraction in Object-Oriented Programming</h1>
<p>To abstract something away means to hide away the implementation details inside something – sometimes a prototype, sometimes a function. So when you call the function you don't have to understand exactly what it is doing. </p>
<p>If you had to understand every single function in a big codebase you would never code anything. It would take months to finish reading through it all.</p>
<p>You can create a reusable, simple to understand, and easily changeable codebase by abstracting away certain details. Let me give you an example:</p>
if (type instanceof InitialLoad) {
// Implementation example
} else if (type instanceof NavBar) {
// Implementation example
} else {
// Implementation example
}
}</code></pre>
<figcaption>This is not abstracted away at all.</figcaption>
</figure>
<p>Can you see in the example how you have to implement exactly what you need for your custom use-case? </p>
<p>Every new API &nbsp;you need to hit needs a new <code>if</code> block, and it's own custom code. This isn't abstracted away as you need to worry about the implementation for every new type you add. It isn't reusable, and is a maintenance nightmare. </p>
<p>How about something like the below?</p><pre><code class="language-javascript">hitApi('www.kealanparr.com', HTTPMethod.Get)</code></pre>
<p>You now can just pass a URL to your function and what HTTP method you want to use and you're done.</p>
<p>You don't have to worry about how the function works. It's dealt with. This massively helps code reuse! And makes your code a lot more maintainable, too.</p>
<p>That is what <strong>Abstraction </strong>is all about. Finding things that are similar in your code and providing a generic function or object to serve multiple places/with multiple concerns.</p>
<p>Here's a good final example of <strong>Abstraction</strong>: imagine if you were creating a machine to make coffee for your users. There could be two approaches:</p>
<h2 id="how-to-create-it-with-abstraction">How to Create it With Abstraction</h2>
<ul>
<li>Have a button with the title "Make coffee"</li>
</ul>
<h2 id="how-to-create-it-without-abstraction">How to Create it Without Abstraction</h2>
<ul>
<li>Have a button with the title "Boil the water"</li>
<li>Have a button with the title "Add the cold water to the kettle"</li>
<li>Have a button with the title "Add 1 spoon of ground coffee to a clean cup"</li>
<li>Have a button with the title "Clean any dirty cups"</li>
<li>And all the other buttons</li>
</ul>
<p>It's a very simple example, but the first approach <em>abstracts </em>away the logic into the machine. But the second approach forces the user to understand how to make coffee and essentially make their own.</p>
<p>The next pillar shows us one way we can achieve <strong>Abstraction</strong>, by using <strong>Encapsulation.</strong></p>
<h1 id="encapsulation-in-object-oriented-programming">Encapsulation in Object-Oriented Programming</h1>
<p>The definition of encapsulation is "the action of enclosing something in or as if in a capsule". Removing access to parts of your code and making things private is exactly what <strong>Encapsulation </strong>is all about (often times, people refer to it as data hiding).</p>
<p>Encapsulation means that each object in your code should control its own state. State is the current "snapshot" of your object. The keys, the methods on your object, Boolean properties and so on. If you were to reset a Boolean or delete a key from the object, they're all changes to your state. </p>
<p>Limit what pieces of your code can access. Make more things inaccessible, if they aren't needed.</p>
<p>Private properties are achieved in JavaScript by using closures. Here's an example below:</p><pre><code class="language-javascript">var Dog = (function () {
// Private
var play = function () {
// play implementation
};
// Private
var breed = "Dalmatian"
// Public
var name = "Rex";
// Public
var makeNoise = function () {
return 'Bark bark!';
};
return {
makeNoise: makeNoise,
name: name
};
})();
</code></pre>
<p>The first thing we did was create a function that immediately gets called (called an <strong>Immediately Invoked Function Expression</strong>, or IIFE for short). This created an object that anyone can access but hid away some of the details. You can't call <code>play</code> and you can't access <code>breed</code> as we didn't expose it in the final object with the return. </p>
<p>This particular pattern above is called the <strong>Revealing Module Pattern</strong>, but it's just an example of how you can achieve <strong>Encapsulation. </strong></p>
<p>I want to focus more on the idea of <strong>Encapsulation </strong>(as it is more important than just learning one pattern and counting <strong>Encapsulation </strong>as totally complete now).</p>
<p>Reflect, and think more about how you can hide away your data and code, and separate it out. Modularising and having clear responsibilities is key to <strong>Object Orientation</strong>.</p>
<p>Why should we prefer privacy? Why not just have everything global?</p>
<ul>
<li>Lots of unrelated bits of code will become dependent/coupled to one another via the global variable.</li>
<li>You will likely override the variables if the name get's reused, which can lead to bugs or unpredictable behaviour.</li>
<li>You will likely end up with <strong>Spaghetti Code</strong> – code that's hard to reason through and follow what is reading and writing to your variables and changing state.</li>
</ul>
<p>Encapsulation can be applied by separating out long lines of code into smaller separate functions. Separate out those functions into modules. We hide away the data in a place nothing else needs access to, and cleanly expose what is needed. </p>
<p>That is <strong>Encapsulation </strong>is a nutshell. Binding your data to something, whether it's a class, object, module or function, and doing your best to keep it as private as you reasonably can.</p>
<h1 id="inheritance-in-object-oriented-programming">Inheritance in Object-Oriented Programming</h1>
<p>Inheritance lets one object acquire the properties and methods of another object. In JavaScript this is done by <strong>Prototypal Inheritance</strong>. </p>
<p>Reusability is the main benefit here. We know sometimes that multiple places need to do the same thing, and they need to do everything the same except for one small part. This is a problem inheritance can solve.</p>
<p>Whenever we use inheritance, we try to make it so that the parent and the child have <strong>high cohesion. Cohesion </strong>is how related your code is. For example, does the &nbsp;<code>Bird</code> type extend from the <code>DieselEngine</code> type? </p>
<p>Keep your inheritance simple to understand and predictable. Don't inherit from somewhere completely unrelated because there's one method or property you need. Inheritance doesn't fix that particular problem well.</p>
<p>When using inheritance, you should require most of the functionality (you don't always need absolutely everything). </p>
<p>Developers have a principle called the <strong>Liskov Substitution principle</strong>. It states that if you can use a parent class (let's call it <code>ParentType</code>) anywhere you use a child (let's call it <code>ChildType</code>) – and <code>ChildType</code> inherits from the <code>ParentType</code> – then you pass the test. </p>
<p>The main reason you would fail this test, is if the <code>ChildType</code> is removing things from the parent. If <code>ChildType</code> removed methods it inherited from the parent, it'd lead to <code>TypeError</code>'s where things are undefined that you are expecting not to be.</p>
<figcaption>The arrows look like they're going the wrong way. But the Animal is the base - the parent.</figcaption>
</figure>
<p>Inheritance chain is the term used to describe the flow of inheritance from the base object's prototype (the one that everything else inherits from) to the "end" of the inheritance chain (the last type that is inheriting – <strong>Dog </strong>in the above example).</p>
<p>Do your best to keep your inheritance chains clean and sensible. You can easily end up coding an anti-patterns when using <strong>Inheritance (</strong>called the <strong>Fragile base anti-pattern</strong>).<strong> </strong>This happens where your base prototypes are considered "fragile" because you make a "safe" change to the base object and then start to break all your children. </p>
<h1 id="polymorphism-in-object-oriented-programming">Polymorphism in Object-Oriented Programming</h1>
<p>Polymorphism means "the condition of occurring in several different forms." That's exactly what the fourth and final pillar is concerned with – types in the same inheritance chains being able to do different things. </p>
<p>If you have used inheritance correctly you can now reliably use parents like their children. When two types share an inheritance chain, they can be used interchangeably with no errors or assertions in your code.</p>
<p>From the last diagram, we might have a base prototype that is called <code>Animal</code> which defines <code>makeNoise</code>. Then every type extending from that prototype can override to do their own custom work. Something like this:</p><pre><code class="language-javascript">// Let's set up an Animal and Dog example
function Animal(){}
function Dog(){}
Animal.prototype.makeNoise = function(){
console.log("Base noise");
};
// Most animals we code up have 4. This can be overridden if needed
Animal.prototype.legs = 4;
Dog.prototype = new Animal();
Dog.prototype.makeNoise = function(){
console.log("Woof woof");
};
var animal = new Animal();
var dog = new Dog();
animal.makeNoise(); // Base noise
dog.makeNoise();    // Woof woof- this was overridden
dog.legs;           // 4! This was inherited</code></pre>
<p><code>Dog</code> extends from <code>Animal</code> and can make use of the default <code>legs</code> property. But it's also able to do its own implementation of making its own noise.</p>
<p>The real power of polymorphism is sharing behaviours, and allowing custom overrides.</p>
<h1 id="conclusion">Conclusion</h1>
<p>I hope this has explained what the four pillars of object-oriented programming are, and how they lead to cleaner and more robust code. </p>
<p>I share my writing on <a href="https://twitter.com/kealanparr">Twitter </a>if you enjoyed this article and want to see more.</p>
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
