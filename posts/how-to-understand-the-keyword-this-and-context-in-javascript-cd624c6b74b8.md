---
card: "https://cdn-media-1.freecodecamp.org/images/1*4Ufc1CWbaLhjEMhPgVV3Qw.jpeg"
tags: [Technology]
description: "by Lukas Gisder-Dubé"
author: "Milad E. Fahmy"
title: "How to understand the keyword this and context in JavaScript"
created: "2021-08-16T11:34:24+02:00"
modified: "2021-08-16T11:34:24+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-technology tag-programming tag-javascript tag-tech tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">How to understand the keyword this and context in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*4Ufc1CWbaLhjEMhPgVV3Qw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*4Ufc1CWbaLhjEMhPgVV3Qw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*4Ufc1CWbaLhjEMhPgVV3Qw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*4Ufc1CWbaLhjEMhPgVV3Qw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*4Ufc1CWbaLhjEMhPgVV3Qw.jpeg" alt="How to understand the keyword this and context in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
console.log(this);
strong: true,
info: function() {
console.log(`The coffee is ${this.strong ? '' : 'not '}strong`)
},
}
coffee.info() // The coffee is strong</code></pre><p>Since we call a function that is declared inside the <code>coffee</code> object, our context changes to exactly that object. We can now access all of the properties of that object through <code>this</code> . In our example above, we could also just reference it directly by doing <code>coffee.strong</code> . It gets more interesting, when we do not know what context, what object, we are in or when things simply get a bit more complex. Have a look at the following example:</p><pre><code class="language-js">const drinks = [
{
name: 'Coffee',
addictive: true,
info: function() {
console.log(`${this.name} is ${this.addictive ? '' : 'not '} addictive.`)
},
},
{
name: 'Celery Juice',
addictive: false,
info: function() {
console.log(`${this.name} is ${this.addictive ? '' : 'not '} addictive.`)
},
},
]
function pickRandom(arr) {
return arr[Math.floor(Math.random() * arr.length)]
}
pickRandom(drinks).info()</code></pre><h4 id="classes-and-instances">Classes and Instances</h4><p>Classes can be used to abstract your code and share behavior. Always repeating the <code>info</code> function declaration in the last example is not good. Since classes and their instances are in fact objects, they behave in the same way. One thing to note however, is that declaring <code>this</code> in the constructor actually is a prediction for the future, when there will be an instance.</p><p>Let’s take a look:</p><pre><code class="language-js">class Coffee {
constructor(strong) {
this.strong = !!strong
}
info() {
console.log(`This coffee is ${this.strong ? '' : 'not '}strong`)
}
}
const strongCoffee = new Coffee(true)
const normalCoffee = new Coffee(false)
strongCoffee.info() // This coffee is strong
normalCoffee.info() // This coffee is not strong</code></pre><h4 id="pitfall-seamlessly-nested-function-calls">Pitfall: seamlessly nested function calls</h4><p>Sometimes, we end up in a context that we did not really expect. This can happen, when we unknowingly call the function inside another object context. A very common example is when using <code>setTimeout</code> or <code>setInterval</code> :</p><pre><code class="language-js">// BAD EXAMPLE
const coffee = {
strong: true,
amount: 120,
drink: function() {
setTimeout(function() {
if (this.amount) this.amount -= 10
}, 10)
},
}
coffee.drink()</code></pre><p>What do you think <code>coffee.amount</code> is?</p><p>...</p><p>..</p><p>.</p><p>It is still <code>120</code> . First, we were inside the <code>coffee</code> object, since the <code>drink</code> method is declared inside of it. We just did <code>setTimeout</code> and nothing else. That’s exactly it.</p><p>As I explained earlier, the <code>setTimeout</code> method is actually declared in the <code>window</code> object. When calling it, we actually switch context to the <code>window</code> again. That means that our instructions actually tried to change <code>window.amount</code>, but it ended up doing nothing because of the <code>if</code>-statement. To take care of that, we have to <code>bind</code> our functions (see below).</p><h4 id="react">React</h4><p>Using React, this will hopefully be a thing of the past soon, thanks to Hooks. At the moment, we still have to <code>bind</code> everything (more on that later) in one way or another. When I started out, I had no idea why I was doing it, but at this point, you should already know why it is necessary.</p><p>Let’s have a look at two simple React class Components:</p><pre><code class="language-js">// BAD EXAMPLE
import React from 'react'
class Child extends React.Component {
render() {
return &lt;button onClick = {
this.props.getCoffee
} &gt; Get some Coffee! &lt; /button&gt;
}
}
class Parent extends React.Component {
constructor(props) {
super(props)
this.state = {
coffeeCount: 0,
}
// change to turn into good example – normally we would do:
// this._getCoffee = this._getCoffee.bind(this)
}
render() {
return ( &lt;
React.Fragment &gt;
&lt;
Child getCoffee = {
this._getCoffee
}
/&gt; &lt; /
React.Fragment &gt;
)
}
_getCoffee() {
this.setState({
coffeeCount: this.state.coffeeCount + 1,
})
}
class Viking {
constructor(name) {
this.name = name
}
prepareForBattle(increaseCount) {
console.log(`I am ${this.name}! Let's go fighting!`)
increaseCount()
}
}
class Battle {
constructor(vikings) {
this.vikings = vikings
this.preparedVikingsCount = 0
this.vikings.forEach(viking =&gt; {
viking.prepareForBattle(this.increaseCount)
})
}
increaseCount() {
this.preparedVikingsCount++
console.log(`${this.preparedVikingsCount} vikings are now ready to fight!`)
}
}
const vikingOne = new Viking('Olaf')
const vikingTwo = new Viking('Odin')
constructor(type) {
this.type = type
}
}
function showType() {
console.log(`The context's type is ${this.type}`)
}
const fruitSalad = new Salad('fruit')
const greekSalad = new Salad('greek')
showType.call(fruitSalad) // The context's type is fruit
showType.call(greekSalad) // The context's type is greek
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
