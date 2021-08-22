---
card: "https://cdn-media-1.freecodecamp.org/images/1*1m6Z6xg7J2DDFOsK_-HgBw.jpeg"
tags: [JavaScript]
description: "The verbosity and elegance of a solution are driven by the to"
author: "Milad E. Fahmy"
title: "Finding Your Way With .Map()"
created: "2021-08-16T10:08:29+02:00"
modified: "2021-08-16T10:08:29+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development tag-programming tag-tech tag-coding ">
<header class="post-full-header">
<h1 class="post-full-title">Finding Your Way With&nbsp;.Map()</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*1m6Z6xg7J2DDFOsK_-HgBw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*1m6Z6xg7J2DDFOsK_-HgBw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*1m6Z6xg7J2DDFOsK_-HgBw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*1m6Z6xg7J2DDFOsK_-HgBw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*1m6Z6xg7J2DDFOsK_-HgBw.jpeg" alt="Finding Your Way With&nbsp;.Map()">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>The verbosity and elegance of a solution are driven by the tools we have to solve a particular problem. While the goal of problem-solving is <em>to solve a problem</em>, it’s methods should move towards the most elegant way possible. The journey towards such a solution, however, seems to lie on an asymptotic curve. Perfection gets closer and closer but forever remains out of reach.</p><h4 id="the-problem">The Problem</h4><p>Imagine having an array and needing to change each element in the array. Maybe, for example, taking an array of heights in inches and needing to convert them to centimeters. Or possibly converting an array of temperatures in Celcius to Fahrenheit. If you are new to programming, your mind might immediately go to some form of a loop. And, guess what? I’m sure you could make it work.</p><p>However, I am here to give you one more tool — something to get you just a little closer to elegant: <code>Array.prototype.map()</code>.</p><p>The <code>map</code> method allows us to transform each element of an array, without affecting the original array. It’s considered a <em>higher-order function</em> and a functional-programming technique because it takes a function as an argument and we are performing computation without mutating the state of our application.</p><blockquote><code>Map</code> is a property that is inherited from the array prototype. Prototypes provide built-in-methods that objects come with (arrays are special types of objects in the eyes of JavaScript). While <code>map</code> may be a little more foreign, this prototype is no different than, for example, the <code>Array.length</code> prototype. These are simply methods that are baked into JavaScript. Array prototypes can be added and mutated by: <code>Array.prototype.&lt;someMethodHere&gt;</code> = ...</blockquote><p>By the end of this lesson, we will discover how <code>map</code> works and write our own array prototype method.</p><h4 id="so-what-does-map-do">So what does .map() do?</h4><p>Let’s say you have an array of temperatures in Celsius that you want to convert to Fahrenheit.</p><p>There are a number of ways to solve this problem. One way may be to write a <code>for</code> loop to create an array of Fahrenheit temperatures from the given Celsius temperatures.</p><p>With the <code>for</code> loop we might write:</p><pre><code class="language-js">const celciusTemps = [22, 36, 71, 54];
const getFahrenheitTemps = (function(temp) {
const fahrenheitTemps = [];
for (let i = 0; i &lt; celciusTemps.length; i += 1) {
temp = celciusTemps[i] * (9/5) + 32
fahrenheitTemps.push(temp);
}
console.log(fahrenheitTemps); [71.6, 96.8, 159.8, 129.2
})();</code></pre><p>A couple things to note:</p><ol><li>It works.</li><li>We use an Immediately Invoked Function Expression (IIFE) to avoid also having to call the function.</li><li>It’s a bit verbose and not very elegant.</li></ol><p><code>Map</code> allows us to take the above code and refactor it to the following:</p><pre><code class="language-js">const fahrenheitTemps = celciusTemps.map(e =&gt; e * (9/5) + 32);
console.log(fahrenheitTemps); // [71.6, 96.8, 159.8, 129.2]</code></pre><h4 id="so-how-does-map-work">So how does map work?</h4><p><code>Map</code> takes a function and applies that function to each element in the array. We could write <code>map</code> a bit more verbose with ES5 to see this a bit more clearly.</p><pre><code class="language-js">const fahrenheitTemps = celciusTemps
.map(function(elementOfArray) {
return elementOfArray * (9/5) + 32;
});
console.log(fahrenheitTemps); // [71.6, 96.8, 159.8, 129.2]</code></pre><p>If our map function could say what it is doing, it would say:</p><p>“For every element in the array, I multiply it by (9/5), then add 32. When that is done, I return the result as an element in a new array called fahrenheitTemps.”</p><p>Let’s look at a more common use case. Let’s assume we have an array of <code>people</code> objects. Each object has a <code>name</code> and <code>age</code> key-value-pair. We want to create a variable that is just the names of everyone in the array. With our <code>for</code> loop method we might write:</p><pre><code class="language-js">const people = [
{name: Steve, age: 32},
{name: Mary, age: 28},
{name: Bill, age: 41},
];
const getNames = (function(person) {
const names = [];
for (let i = 0; i &lt; people.length; i += 1) {
name = people[i].name;
names.push(name);
}
console.log(names); // [Steve, Mary, Bill];
})();</code></pre><p>With <code>map</code>:</p><pre><code class="language-js">const names = people.map(e =&gt; e.name);
console.log(names) // [Steve, Mary, Bill];</code></pre><p>Notice here we don’t transform anything, we simply return the key-value-pair <code>name</code>.</p><p>Again, the <code>for</code> loops works. But, it is verbose, and we have to create a new custom function every time we want to do a different transformation. A principal part of programming is writing DRY code (Don’t Repeat Yourself). These higher-order functions such as map, allows us to do more complex programming in fewer lines of code than we could without them.</p><h4 id="reinventing-the-wheel-">Reinventing the wheel:</h4><p>To better understand what is happening under the hood, we will make our own map function that we will attach to the array prototype.</p><p>First, to attach a prototype method to an Array, we will write:</p><p><code>Array.prototype.&lt;yourMethodHere&gt;</code></p><p>so for us:</p><p><code>Array.prototype.myMap = &lt;our code&gt;</code></p><p>But, what will our code be?</p><p>We already have the logic we need from the <code>for</code> loops above. All we need to do is refactor it a bit. Let’s refactor the last function we wrote <code>getNames()</code>.</p><p>Remember, this function took a person (in other words an element of our array), did a custom transformation to that element (with the <code>for</code> loop and some logic), and returned an array of names (or a new array).</p><pre><code class="language-js">const getNames = (function(person) {
const names = [];
for (let i = 0; i &lt; people.length; i += 1) {
name = people[i].name;
names.push(name);
}
console.log(names); // [Steve, Mary, Bill];
})();</code></pre><p>First, let’s change the name of our function. After all, this new method doesn’t assume to know what kind of array it will be acting upon:</p><pre><code class="language-js">const myMap = (function(person) { //Changed name
const names = [];
for (let i = 0; i &lt; people.length; i += 1) {
name = people[i].name;
names.push(name);
}
console.log(names); // [Steve, Mary, Bill];
})();</code></pre><p>Second, we are creating our own version of <code>.map()</code>. We know this will take a function that the user provides. Let’s change the parameter our function takes:</p><pre><code class="language-js">// It is a bit verbose, but a very clear parameter name
const myMap = (function(userProvidedFunction) {
const names = [];
for (let i = 0; i &lt; people.length; i += 1) {
name = people[i].name;
names.push(name);
}
console.log(names); // [Steve, Mary, Bill];
})();</code></pre><p>Finally, we have no idea what array this method will act on. So, we can’t refer to <code>people.length</code> but we <em>can</em> refer to <code>this.length</code>. <code>this</code>, will return the array the method is acting on. Also, let's clean up some of the other variable names:</p><pre><code class="language-js">const myMap = (function(userProvidedFunction) {
// change variable name
const newArr = [];
// use "this.length"
for (let i = 0; i &lt; this.length; i += 1) {
// use "this[i]", and change variable name
const newElement = this[i];
// update the array we push into
newArr.push(newElement);
}
// Return the newly created array
return newArr;
})();</code></pre><p>We’re almost there, but there is one thing we are forgetting. We haven’t transformed the array! All we’ve done above is return the old array. We have to apply the user-provided function to each element of the array:</p><pre><code class="language-js">const myMap = (function(userProvidedFunction) {
const newArr = [];
for (let i = 0; i &lt; this.length; i += 1) {
/* Transform the element by passing it into the
* user-provided function
*/
const newElement = userProvidedFunction(this[i]);
newArr.push(newElement);
}
return newArr;
})();</code></pre><p>Finally, we can attach our new function to<code>Array.prototype</code>.</p><p><code>Array.prototype.myMap = myMap;</code></p><p>A final sanity check:</p><pre><code class="language-js">const myArray = [1, 2, 3];
// Multiply each element x 2
const myMappedArray = myArray.myMap(e =&gt; e * 2)
console.log(myMappedArray) // [2, 4, 6];</code></pre><h4 id="summary">Summary</h4><p><code>Map</code> is a prototype method offered by arrays. Behind the scenes, it iterates through the array, applying a user-provided function to each element. Ultimately, it returns a new array with the transformed values. It does this without mutating the original array. Because the parameter it takes is a function, it is considered a higher-order function. In addition, its use falls into the functional programming paradigm.</p><p>Thanks for reading!</p><p>woz</p>
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
