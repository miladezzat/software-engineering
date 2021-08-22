---
card: "/images/default.jpg"
tags: [JavaScript]
description: "You can t get very far in JavaScript without dealing with obj"
author: "Milad E. Fahmy"
title: "A Beginner’s Guide to JavaScript’s Prototype"
created: "2021-08-16T10:06:16+02:00"
modified: "2021-08-16T10:06:16+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-prototype tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">A Beginner’s Guide to JavaScript’s Prototype</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/05/1_45wTCahuSKO_9Ne260qf5w.png 300w,
/news/content/images/size/w600/2019/05/1_45wTCahuSKO_9Ne260qf5w.png 600w,
/news/content/images/size/w1000/2019/05/1_45wTCahuSKO_9Ne260qf5w.png 1000w,
/news/content/images/size/w2000/2019/05/1_45wTCahuSKO_9Ne260qf5w.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/05/1_45wTCahuSKO_9Ne260qf5w.png" alt="A Beginner’s Guide to JavaScript’s Prototype">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
animal.name = 'Leo'
animal.energy = 10
animal.eat = function (amount) {
console.log(`${this.name} is eating.`)
this.energy += amount
}
animal.sleep = function (length) {
console.log(`${this.name} is sleeping.`)
this.energy += length
}
animal.play = function (length) {
console.log(`${this.name} is playing.`)
this.energy -= length
}
</code></pre><p>Simple. Now odds are in our application we'll need to create more than one animal. Naturally the next step for this would be to encapsulate that logic inside of a function that we can invoke whenever we needed to create a new animal. We'll call this pattern <code>Functional Instantiation</code> and we'll call the function itself a "constructor function" since it's responsible for "constructing" a new object.</p><h4 id="functional-instantiation">Functional Instantiation</h4><pre><code class="language-js">function Animal (name, energy) {
let animal = {}
animal.name = name
animal.energy = energy
animal.eat = function (amount) {
console.log(`${this.name} is eating.`)
this.energy += amount
}
animal.sleep = function (length) {
console.log(`${this.name} is sleeping.`)
this.energy += length
}
animal.play = function (length) {
console.log(`${this.name} is playing.`)
this.energy -= length
}
return animal
}
const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)
</code></pre><p><code>"I thought this was an Advanced JavaScript course...?" - Your brain</code> </p><p><strong>It is. We'll get there.</strong></p><p>Now whenever we want to create a new animal (or more broadly speaking a new "instance"), all we have to do is invoke our <code>Animal</code> function, passing it the animal's <code>name</code> and <code>energy</code> level. This works great and it's incredibly simple. However, can you spot any weaknesses with this pattern? The biggest and the one we'll attempt to solve has to do with the three methods - <code>eat</code>, <code>sleep</code>, and <code>play</code>. Each of those methods are not only dynamic, but they're also completely generic. What that means is that there's no reason to re-create those methods as we're currently doing whenever we create a new animal. We're just wasting memory and making each animal object bigger than it needs to be. Can you think of a solution? What if instead of re-creating those methods every time we create a new animal, we move them to their own object then we can have each animal reference that object? We can call this pattern <code>Functional Instantiation with Shared Methods</code>, wordy but descriptive ?‍♂️.</p><h4 id="functional-instantiation-with-shared-methods">Functional Instantiation with Shared Methods</h4><pre><code class="language-js">const animalMethods = {
eat(amount) {
console.log(`${this.name} is eating.`)
this.energy += amount
},
sleep(length) {
console.log(`${this.name} is sleeping.`)
this.energy += length
},
play(length) {
console.log(`${this.name} is playing.`)
this.energy -= length
}
}
function Animal (name, energy) {
let animal = {}
animal.name = name
animal.energy = energy
animal.eat = animalMethods.eat
animal.sleep = animalMethods.sleep
animal.play = animalMethods.play
return animal
}
const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)
</code></pre><p>By moving the shared methods to their own object and referencing that object inside of our <code>Animal</code> function, we've now solved the problem of memory waste and overly large animal objects.</p><h4 id="object-create">Object.create</h4><p>Let's improve our example once again by using <code>Object.create</code>. Simply put, <strong>Object.create allows you to create an object which will delegate to another object on failed lookups</strong>. Put differently, Object.create allows you to create an object and whenever there's a failed property lookup on that object, it can consult another object to see if that other object has the property. That was a lot of words. Let's see some code.</p><pre><code class="language-js">const parent = {
name: 'Stacey',
age: 35,
heritage: 'Irish'
}
const child = Object.create(parent)
child.name = 'Ryan'
child.age = 7
console.log(child.name) // Ryan
console.log(child.age) // 7
console.log(child.heritage) // Irish
</code></pre><p>So in the example above, because <code>child</code> was created with <code>Object.create(parent)</code>, whenever there's a failed property lookup on <code>child</code>, JavaScript will delegate that lookup to the <code>parent</code> object. What that means is that even though <code>child</code> doesn't have a <code>heritage</code> property, <code>parent</code> does so when you log <code>child.heritage</code> you'll get the <code>parent</code>'s heritage which was <code>Irish</code>.</p><p>Now with <code>Object.create</code> in our tool shed, how can we use it in order to simplify our <code>Animal</code> code from earlier? Well, instead of adding all the shared methods to the animal one by one like we're doing now, we can use Object.create to delegate to the <code>animalMethods</code> object instead. To sound really smart, let's call this one <code>Functional Instantiation with Shared Methods and Object.create</code> ?</p><h4 id="functional-instantiation-with-shared-methods-and-object-create">Functional Instantiation with Shared Methods and Object.create</h4><pre><code class="language-js{17}">const animalMethods = {
eat(amount) {
console.log(`${this.name} is eating.`)
this.energy += amount
},
sleep(length) {
console.log(`${this.name} is sleeping.`)
this.energy += length
},
play(length) {
console.log(`${this.name} is playing.`)
this.energy -= length
}
}
function Animal (name, energy) {
let animal = Object.create(animalMethods)
animal.name = name
animal.energy = energy
return animal
}
const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)
leo.eat(10)
snoop.play(5)
</code></pre><p>? So now when we call <code>leo.eat</code>, JavaScript will look for the <code>eat</code> method on the <code>leo</code> object. That lookup will fail, then, because of Object.create, it'll delegate to the <code>animalMethods</code> object which is where it'll find <code>eat</code>.</p><p>So far, so good. There are still some improvements we can make though. It seems just a tad "hacky" to have to manage a separate object (<code>animalMethods</code>) in order to share methods across instances. That seems like a common feature that you'd want to be implemented into the language itself. Turns out it is and it's the whole reason you're here - <code>prototype</code>.</p><p>So what exactly is <code>prototype</code> in JavaScript? Well, simply put, every function in JavaScript has a <code>prototype</code> property that references an object. Anticlimactic, right? Test it out for yourself.</p><pre><code class="language-js">function doThing () {}
console.log(doThing.prototype) // {}
</code></pre><p>What if instead of creating a separate object to manage our methods (like we're doing with <code>animalMethods</code>), we just put each of those methods on the <code>Animal</code> function's prototype? Then all we would have to do is instead of using Object.create to delegate to <code>animalMethods</code>, we could use it to delegate to <code>Animal.prototype</code>. We'll call this pattern <code>Prototypal Instantiation</code>.</p><h4 id="prototypal-instantiation">Prototypal Instantiation</h4><pre><code class="language-js{2,9-22}">function Animal (name, energy) {
let animal = Object.create(Animal.prototype)
animal.name = name
animal.energy = energy
return animal
}
Animal.prototype.eat = function (amount) {
console.log(`${this.name} is eating.`)
this.energy += amount
}
Animal.prototype.sleep = function (length) {
console.log(`${this.name} is sleeping.`)
this.energy += length
}
Animal.prototype.play = function (length) {
console.log(`${this.name} is playing.`)
this.energy -= length
}
const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)
leo.eat(10)
snoop.play(5)
</code></pre><p>??? Hopefully you just had a big "aha" moment. Again, <code>prototype</code> is just a property that every function in JavaScript has and, as we saw above, it allows us to share methods across all instances of a function. All our functionality is still the same but now instead of having to manage a separate object for all the methods, we can just use another object that comes built into the <code>Animal</code> function itself, <code>Animal.prototype</code>.</p><hr><h2 id="let-s-go-deeper-">Let's. Go. Deeper.</h2><p>At this point we know three things:</p><ol><li>How to create a constructor function.</li><li>How to add methods to the constructor function's prototype.</li><li>How to use Object.create to delegate failed lookups to the function's prototype.</li></ol><p>Those three tasks seem pretty foundational to any programming language. Is JavaScript really that bad that there's no easier, "built in" way to accomplish the same thing? As you can probably guess at this point there is, and it's by using the <code>new</code> keyword.</p><p>What's nice about the slow, methodical approach we took to get here is you'll now have a deep understanding of exactly what the <code>new</code> keyword in JavaScript is doing under the hood.</p><p>Looking back at our <code>Animal</code> constructor, the two most important parts were creating the object and returning it. Without creating the object with <code>Object.create</code>, we wouldn't be able to delegate to the function's prototype on failed lookups. Without the <code>return</code> statement, we wouldn't ever get back the created object.</p><pre><code class="language-js{2,6}">function Animal (name, energy) {
let animal = Object.create(Animal.prototype)
animal.name = name
animal.energy = energy
return animal
}
</code></pre><p>Here's the cool thing about <code>new</code> - when you invoke a function using the <code>new</code> keyword, those two lines are done for you implicitly ("under the hood") and the object that is created is called <code>this</code>.</p><p>Using comments to show what happens under the hood and assuming the <code>Animal</code> constructor is called with the <code>new</code> keyword, it can be re-written as this.</p><pre><code class="language-js">function Animal (name, energy) {
// const this = Object.create(Animal.prototype)
this.name = name
this.energy = energy
// return this
}
const leo = new Animal('Leo', 7)
const snoop = new Animal('Snoop', 10)
</code></pre><p>and without the "under the hood" comments</p><pre><code class="language-js">function Animal (name, energy) {
this.name = name
this.energy = energy
}
Animal.prototype.eat = function (amount) {
console.log(`${this.name} is eating.`)
this.energy += amount
}
Animal.prototype.sleep = function (length) {
console.log(`${this.name} is sleeping.`)
this.energy += length
}
Animal.prototype.play = function (length) {
console.log(`${this.name} is playing.`)
this.energy -= length
}
const leo = new Animal('Leo', 7)
const snoop = new Animal('Snoop', 10)
</code></pre><p>Again the reason this works and that the <code>this</code> object is created for us is because we called the constructor function with the <code>new</code> keyword. If you leave off <code>new</code> when you invoke the function, that <code>this</code> object never gets created nor does it get implicitly returned. We can see the issue with this in the example below.</p><pre><code class="language-js{6-7}">function Animal (name, energy) {
this.name = name
this.energy = energy
}
const leo = Animal('Leo', 7)
console.log(leo) // undefined
</code></pre><p>The name for this pattern is <code>Pseudoclassical Instantiation</code>.</p><p>If JavaScript isn't your first programming language, you might be getting a little restless.</p><p>"WTF this dude just re-created a crappier version of a Class" - You</p><p>For those unfamiliar, a Class allows you to create a blueprint for an object. Then whenever you create an instance of that Class, you get an object with the properties and methods defined in the blueprint.</p><p>Sound familiar? That's basically what we did with our <code>Animal</code> constructor function above. However, instead of using the <code>class</code> keyword, we just used a regular old JavaScript function to re-create the same functionality. Granted, it took a little extra work as well as some knowledge about what happens "under the hood" of JavaScript but the results are the same.</p><p>Here's the good news. JavaScript isn't a dead language. It's constantly being improved and added to by the <a href="https://tylermcginnis.com/ecmascript/">TC-39 committee</a>. What that means is that even though the initial version of JavaScript didn't support classes, there's no reason they can't be added to the official specification. In fact, that's exactly what the TC-39 committee did. In 2015, EcmaScript (the official JavaScript specification) 6 was released with support for Classes and the <code>class</code> keyword. Let's see how our <code>Animal</code> constructor function above would look like with the new class syntax.</p><pre><code class="language-js">class Animal {
constructor(name, energy) {
this.name = name
this.energy = energy
}
eat(amount) {
console.log(`${this.name} is eating.`)
this.energy += amount
}
sleep(length) {
console.log(`${this.name} is sleeping.`)
this.energy += length
}
play(length) {
console.log(`${this.name} is playing.`)
this.energy -= length
}
}
const leo = new Animal('Leo', 7)
const snoop = new Animal('Snoop', 10)
</code></pre><p>Pretty clean, right?</p><p>So if this is the new way to create classes, why did we spend so much time going over the old way? The reason for that is because the new way (with the <code>class</code> keyword) is primarily just "syntactical sugar" over the existing way we've called the pseudoclassical pattern. In order to <em>fully</em> understand the convenience syntax of ES6 classes, you first must understand the pseudoclassical pattern.</p><hr><p>At this point we've covered the fundamentals of JavaScript's prototype. The rest of this post will be dedicated to understanding other "good to know" topics related to it. In another post we'll look at how we can take these fundamentals and use them to understand how inheritance works in JavaScript.</p><hr><h3 id="array-methods">Array Methods</h3><p>We talked in depth above about how if you want to share methods across instances of a class, you should stick those methods on the class' (or function's) prototype. We can see this same pattern demonstrated if we look at the <code>Array</code> class. Historically you've probably created your arrays like this</p><pre><code class="language-js">const friends = []
</code></pre><p>Turns out that's just sugar over creating a <code>new</code> instance of the <code>Array</code> class.</p><pre><code class="language-js">const friendsWithSugar = []
const friendsWithoutSugar = new Array()
</code></pre><p>One thing you might have never thought about is how does every instance of an array have all of those built in methods (<code>splice</code>, <code>slice</code>, <code>pop</code>, etc)?</p><p>Well as you now know, it's because those methods live on <code>Array.prototype</code> and when you create a new instance of <code>Array</code>, you use the <code>new</code> keyword which sets up that delegation to <code>Array.prototype</code> on failed lookups.</p><p>We can see all the array's methods by simply logging <code>Array.prototype</code>.</p><pre><code class="language-js">console.log(Array.prototype)
/*
concat: ƒn concat()
constructor: ƒn Array()
copyWithin: ƒn copyWithin()
entries: ƒn entries()
every: ƒn every()
fill: ƒn fill()
filter: ƒn filter()
find: ƒn find()
findIndex: ƒn findIndex()
forEach: ƒn forEach()
includes: ƒn includes()
indexOf: ƒn indexOf()
join: ƒn join()
keys: ƒn keys()
lastIndexOf: ƒn lastIndexOf()
length: 0n
map: ƒn map()
pop: ƒn pop()
push: ƒn push()
reduce: ƒn reduce()
reduceRight: ƒn reduceRight()
reverse: ƒn reverse()
shift: ƒn shift()
slice: ƒn slice()
some: ƒn some()
sort: ƒn sort()
splice: ƒn splice()
toLocaleString: ƒn toLocaleString()
toString: ƒn toString()
unshift: ƒn unshift()
values: ƒn values()
*/
</code></pre><p>The exact same logic exists for Objects as well. Alls object will delegate to <code>Object.prototype</code> on failed lookups which is why all objects have methods like <code>toString</code> and <code>hasOwnProperty</code>.</p><h3 id="static-methods">Static Methods</h3><p>Up until this point we've covered the why and how of sharing methods between instances of a Class. However, what if we had a method that was important to the Class, but didn't need to be shared across instances? For example, what if we had a function that took in an array of <code>Animal</code> instances and determined which one needed to be fed next? We'll call it <code>nextToEat</code>.</p><pre><code class="language-js">function nextToEat (animals) {
const sortedByLeastEnergy = animals.sort((a,b) =&gt; {
return a.energy - b.energy
})
return sortedByLeastEnergy[0].name
}
</code></pre><p>It doesn't make sense to have <code>nextToEat</code> live on <code>Animal.prototype</code> since we don't want to share it amongst all instances. Instead, we can think of it as more of a helper method. So if <code>nextToEat</code> shouldn't live on <code>Animal.prototype</code>, where should we put it? Well the obvious answer is we could just stick <code>nextToEat</code> in the same scope as our <code>Animal</code> class then reference it when we need it as we normally would.</p><pre><code class="language-js">class Animal {
constructor(name, energy) {
this.name = name
this.energy = energy
}
eat(amount) {
console.log(`${this.name} is eating.`)
this.energy += amount
}
sleep(length) {
console.log(`${this.name} is sleeping.`)
this.energy += length
}
play(length) {
console.log(`${this.name} is playing.`)
this.energy -= length
}
}
function nextToEat (animals) {
const sortedByLeastEnergy = animals.sort((a,b) =&gt; {
return a.energy - b.energy
})
return sortedByLeastEnergy[0].name
}
const leo = new Animal('Leo', 7)
const snoop = new Animal('Snoop', 10)
console.log(nextToEat([leo, snoop])) // Leo
</code></pre><p>Now this works, but there's a better way.</p><p>Whenever you have a method that is specific to a class itself, but doesn't need to be shared across instances of that class, you can add it as a <code>static</code> property of the class.</p><pre><code class="language-js{18-24}">class Animal {
constructor(name, energy) {
this.name = name
this.energy = energy
}
eat(amount) {
console.log(`${this.name} is eating.`)
this.energy += amount
}
sleep(length) {
console.log(`${this.name} is sleeping.`)
this.energy += length
}
play(length) {
console.log(`${this.name} is playing.`)
this.energy -= length
}
static nextToEat(animals) {
const sortedByLeastEnergy = animals.sort((a,b) =&gt; {
return a.energy - b.energy
})
return sortedByLeastEnergy[0].name
}
}
</code></pre><p>Now, because we added <code>nextToEat</code> as a <code>static</code> property on the class, it lives on the <code>Animal</code> class itself (not its prototype) and can be accessed using <code>Animal.nextToEat</code>.</p><pre><code class="language-js{4}">const leo = new Animal('Leo', 7)
const snoop = new Animal('Snoop', 10)
console.log(Animal.nextToEat([leo, snoop])) // Leo
</code></pre><p>Because we've followed a similar pattern throughout this post, let's take a look at how we would accomplish this same thing using ES5. In the example above we saw how using the <code>static</code> keyword would put the method directly onto the class itself. With ES5, this same pattern is as simple as just manually adding the method to the function object.</p><pre><code class="language-js{21-27}">function Animal (name, energy) {
this.name = name
this.energy = energy
}
Animal.prototype.eat = function (amount) {
console.log(`${this.name} is eating.`)
this.energy += amount
}
Animal.prototype.sleep = function (length) {
console.log(`${this.name} is sleeping.`)
this.energy += length
}
Animal.prototype.play = function (length) {
console.log(`${this.name} is playing.`)
this.energy -= length
}
Animal.nextToEat = function (nextToEat) {
const sortedByLeastEnergy = animals.sort((a,b) =&gt; {
return a.energy - b.energy
})
return sortedByLeastEnergy[0].name
}
const leo = new Animal('Leo', 7)
const snoop = new Animal('Snoop', 10)
console.log(Animal.nextToEat([leo, snoop])) // Leo
</code></pre><h3 id="getting-the-prototype-of-an-object">Getting the prototype of an object</h3><p>Regardless of whichever pattern you used to create an object, getting that object's prototype can be accomplished using the <code>Object.getPrototypeOf</code> method.</p><pre><code class="language-js{24,25,27}">function Animal (name, energy) {
this.name = name
this.energy = energy
}
Animal.prototype.eat = function (amount) {
console.log(`${this.name} is eating.`)
this.energy += amount
}
Animal.prototype.sleep = function (length) {
console.log(`${this.name} is sleeping.`)
this.energy += length
}
Animal.prototype.play = function (length) {
console.log(`${this.name} is playing.`)
this.energy -= length
}
const leo = new Animal('Leo', 7)
const prototype = Object.getPrototypeOf(leo)
console.log(prototype)
// {constructor: ƒ, eat: ƒ, sleep: ƒ, play: ƒ}
prototype === Animal.prototype // true
</code></pre><p>There are two important takeaways from the code above.</p><p>First, you'll notice that <code>proto</code> is an object with 4 methods, <code>constructor</code>, <code>eat</code>, <code>sleep</code>, and <code>play</code>. That makes sense. We used <code>getPrototypeOf</code> passing in the instance, <code>leo</code> getting back that instances' prototype, which is where all of our methods are living. This tells us one more thing about <code>prototype</code> as well that we haven't talked about yet. By default, the <code>prototype</code> object will have a <code>constructor</code> property which points to the original function or the class that the instance was created from. What this also means is that because JavaScript puts a <code>constructor</code> property on the prototype by default, any instances will be able to access their constructor via <code>instance.constructor</code>.</p><p>The second important takeaway from above is that <code>Object.getPrototypeOf(leo) === Animal.prototype</code>. That makes sense as well. The <code>Animal</code> constructor function has a prototype property where we can share methods across all instances and <code>getPrototypeOf</code> allows us to see the prototype of the instance itself.</p><pre><code class="language-js">function Animal (name, energy) {
this.name = name
this.energy = energy
}
const leo = new Animal('Leo', 7)
console.log(leo.constructor) // Logs the constructor function
</code></pre><p>To tie in what we talked about earlier with <code>Object.create</code>, the reason this works is because any instances of <code>Animal</code> are going to delegate to <code>Animal.prototype</code> on failed lookups. So when you try to access <code>leo.constructor</code>, <code>leo</code> doesn't have a <code>constructor</code> property so it will delegate that lookup to <code>Animal.prototype</code> which indeed does have a <code>constructor</code> property. If this paragraph didn't make sense, go back and read about <code>Object.create</code> above.</p><p>You may have seen __proto__ used before to get an instances' prototype. That's a relic of the past. Instead, use <strong>Object.getPrototypeOf(instance)</strong> as we saw above.</p><h3 id="determining-if-a-property-lives-on-the-prototype">Determining if a property lives on the prototype</h3><p>There are certain cases where you need to know if a property lives on the instance itself or if it lives on the prototype the object delegates to. We can see this in action by looping over our <code>leo</code> object we've been creating. Let's say the goal was the loop over <code>leo</code> and log all of its keys and values. Using a <code>for in</code> loop, that would probably look like this.</p><pre><code class="language-js">function Animal (name, energy) {
this.name = name
this.energy = energy
}
Animal.prototype.eat = function (amount) {
console.log(`${this.name} is eating.`)
this.energy += amount
}
Animal.prototype.sleep = function (length) {
console.log(`${this.name} is sleeping.`)
this.energy += length
}
Animal.prototype.play = function (length) {
console.log(`${this.name} is playing.`)
this.energy -= length
}
const leo = new Animal('Leo', 7)
for(let key in leo) {
console.log(`Key: ${key}. Value: ${leo[key]}`)
}
</code></pre><p>What would you expect to see? Most likely, it was something like this -</p><pre><code class="language-js">Key: name. Value: Leo
Key: energy. Value: 7
</code></pre><p>However, what you saw if you ran the code was this -</p><pre><code class="language-js">Key: name. Value: Leo
Key: energy. Value: 7
Key: eat. Value: function (amount) {
console.log(`${this.name} is eating.`)
this.energy += amount
}
Key: sleep. Value: function (length) {
console.log(`${this.name} is sleeping.`)
this.energy += length
}
Key: play. Value: function (length) {
console.log(`${this.name} is playing.`)
this.energy -= length
}
</code></pre><p>Why is that? Well a <code>for in</code> loop is going to loop over all of the <strong>enumerable properties</strong> on both the object itself as well as the prototype it delegates to. Because by default any property you add to the function's prototype is enumerable, we see not only <code>name</code> and <code>energy</code>, but we also see all the methods on the prototype - <code>eat</code>, <code>sleep</code>, and <code>play</code>. To fix this, we either need to specify that all of the prototype methods are non-enumerable <strong>or</strong> we need a way to only console.log if the property is on the <code>leo</code> object itself and not the prototype that <code>leo</code> delegates to on failed lookups. This is where <code>hasOwnProperty</code> can help us out.</p><p><code>hasOwnProperty</code> is a property on every object that returns a boolean indicating whether the object has the specified property as its own property rather than on the prototype the object delegates to. That's exactly what we need. Now with this new knowledge we can modify our code to take advantage of <code>hasOwnProperty</code> inside of our <code>for in</code> loop.</p><pre><code class="language-js">...
const leo = new Animal('Leo', 7)
for(let key in leo) {
if (leo.hasOwnProperty(key)) {
console.log(`Key: ${key}. Value: ${leo[key]}`)
}
}
</code></pre><p>And now what we see are only the properties that are on the <code>leo</code> object itself rather than on the prototype <code>leo</code> delegates to as well.</p><pre><code class="language-js">Key: name. Value: Leo
Key: energy. Value: 7
</code></pre><p>If you're still a tad confused about <code>hasOwnProperty</code>, here is some code that may clear it up.</p><pre><code class="language-js">function Animal (name, energy) {
this.name = name
this.energy = energy
}
Animal.prototype.eat = function (amount) {
console.log(`${this.name} is eating.`)
this.energy += amount
}
Animal.prototype.sleep = function (length) {
console.log(`${this.name} is sleeping.`)
this.energy += length
}
Animal.prototype.play = function (length) {
console.log(`${this.name} is playing.`)
this.energy -= length
}
const leo = new Animal('Leo', 7)
leo.hasOwnProperty('name') // true
leo.hasOwnProperty('energy') // true
leo.hasOwnProperty('eat') // false
leo.hasOwnProperty('sleep') // false
leo.hasOwnProperty('play') // false
</code></pre><h3 id="check-if-an-object-is-an-instance-of-a-class">Check if an object is an instance of a Class</h3><p>Sometimes you want to know whether an object is an instance of a specific class. To do this, you can use the &nbsp;<code>instanceof</code> operator. The use case is pretty straight forward but the actual syntax is a bit weird if you've never seen it before. It works like this</p><pre><code class="language-js">object instanceof Class
</code></pre><p>The statement above will return true if <code>object</code> is an instance of <code>Class</code> and false if it isn't. Going back to our <code>Animal</code> example we'd have something like this.</p><pre><code class="language-js">function Animal (name, energy) {
this.name = name
this.energy = energy
}
function User () {}
const leo = new Animal('Leo', 7)
leo instanceof Animal // true
leo instanceof User // false
</code></pre><p>The way that <code>instanceof</code> works is it checks for the presence of <code>constructor.prototype</code> in the object's prototype chain. In the example above, <code>leo instanceof Animal</code> is <code>true</code> because <code>Object.getPrototypeOf(leo) === Animal.prototype</code>. In addition, <code>leo instanceof User</code> is <code>false</code> because <code>Object.getPrototypeOf(leo) !== User.prototype</code>.</p><h3 id="creating-new-agnostic-constructor-functions">Creating new agnostic constructor functions</h3><p>Can you spot the error in the code below?</p><pre><code class="language-js">function Animal (name, energy) {
this.name = name
this.energy = energy
}
const leo = Animal('Leo', 7)
</code></pre><p>Even seasoned JavaScript developers will sometimes get tripped up on the example above. Because we're using the <code>pseudoclassical pattern</code> that we learned about earlier, when the <code>Animal</code> constructor function is invoked, we need to make sure we invoke it with the <code>new</code> keyword. If we don't, then the <code>this</code> keyword won't be created and it also won't be implicitly returned.</p><p>As a refresher, the commented out lines are what happens behind the scenes when you use the <code>new</code> keyword on a function.</p><pre><code class="language-js">function Animal (name, energy) {
// const this = Object.create(Animal.prototype)
this.name = name
this.energy = energy
// return this
}
</code></pre><p>This seems like too important of a detail to leave up to other developers to remember. Assuming we're working on a team with other developers, is there a way we could ensure that our <code>Animal</code> constructor is always invoked with the <code>new</code> keyword? &nbsp;Turns out there is and it's by using the <code>instanceof</code> operator we learned about previously.</p><p>If the constructor was called with the <code>new</code> keyword, then <code>this</code> inside of the body of the constructor will be an <code>instanceof</code> the constructor function itself. That was a lot of big words. Here's some code.</p><pre><code class="language-js">function Animal (name, energy) {
if (this instanceof Animal === false) {
console.warn('Forgot to call Animal with the new keyword')
}
this.name = name
this.energy = energy
}
</code></pre><p>Now instead of just logging a warning to the consumer of the function, what if we re-invoke the function, but with the <code>new</code> keyword this time?</p><pre><code class="language-js">function Animal (name, energy) {
if (this instanceof Animal === false) {
return new Animal(name, energy)
}
this.name = name
this.energy = energy
}
</code></pre><p>Now regardless of if <code>Animal</code> is invoked with the <code>new</code> keyword, it'll still work properly.</p><h3 id="re-creating-object-create">Re-creating Object.create</h3><p>Throughout this post we've relied heavily upon <code>Object.create</code> in order to create objects which delegate to the constructor function's prototype. At this point, you should know how to use <code>Object.create</code> inside of your code but one thing that you might not have thought of is how <code>Object.create</code> actually works under the hood. In order for you to <strong>really</strong> understand how <code>Object.create</code> works, we're going to re-create it ourselves. First, what do we know about how <code>Object.create</code> works?</p><ol><li>It takes in an argument that is an object.</li><li>It creates an object that delegates to the argument object on failed lookups.</li><li>It returns the new created object.</li></ol><p>Let's start off with #1.</p><pre><code class="language-js">Object.create = function (objToDelegateTo) {
}
</code></pre><p>Simple enough.</p><p>Now #2 - we need to create an object that will delegate to the argument object on failed lookups. This one is a little more tricky. To do this, we'll use our knowledge of how the <code>new</code> keyword and prototypes work in JavaScript. First, inside the body of our <code>Object.create</code> implementation, we'll create an empty function. Then, we'll set the prototype of that empty function equal to the argument object. Then, in order to create a new object, we'll invoke our empty function using the <code>new</code> keyword. If we return that newly created object, that'll finish #3 as well.</p><pre><code class="language-js">Object.create = function (objToDelegateTo) {
function Fn(){}
Fn.prototype = objToDelegateTo
return new Fn()
}
</code></pre><p>Wild. Let's walk through it.</p><p>When we create a new function, <code>Fn</code> in the code above, it comes with a <code>prototype</code> property. When we invoke it with the <code>new</code> keyword, we know what we'll get back is an object that will delegate to the function's prototype on failed lookups. If we override the function's prototype, then we can decide which object to delegate to on failed lookups. So in our example above, we override <code>Fn</code>'s prototype with the object that was passed in when <code>Object.create</code> was invoked which we call <code>objToDelegateTo</code>.</p><p>Note that we're only supporting a single argument to Object.create. The official implementation also supports a second, optional argument which allow you to add more properties to the created object.</p><h3 id="arrow-functions">Arrow Functions</h3><p>Arrow functions don't have their own <code>this</code> keyword. As a result, arrow functions can't be constructor functions and if you try to invoke an arrow function with the <code>new</code> keyword, it'll throw an error.</p><pre><code class="language-js">const Animal = () =&gt; {}
const leo = new Animal() // Error: Animal is not a constructor
</code></pre><p>Also, because we demonstrated above that the pseudoclassical pattern can't be used with arrow functions, arrow functions also don't have a <code>prototype</code> property.</p><pre><code class="language-js">const Animal = () =&gt; {}
console.log(Animal.prototype) // undefined
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
