---
card: "https://cdn-media-1.freecodecamp.org/images/1*RuxaPPPrL6K09eF4pFhISw.jpeg"
tags: [JavaScript]
description: "by Mariya Diminsky"
author: "Milad E. Fahmy"
title: "Learn ES6 The Dope Way Part IV: Default Parameters, Destructuring Assignment, and a new method!"
created: "2021-08-16T10:29:06+02:00"
modified: "2021-08-16T10:29:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-es6 tag-web-development tag-tutorial tag-education ">
<header class="post-full-header">
<h1 class="post-full-title">Learn ES6 The Dope Way Part IV: Default Parameters, Destructuring Assignment, and a new method!</h1>
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
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*RuxaPPPrL6K09eF4pFhISw.jpeg" alt="Learn ES6 The Dope Way Part IV: Default Parameters, Destructuring Assignment, and a new method!">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
console.log(x+y);
}
add(); // =&gt; NaN</code></pre><p>You would get <em>NaN</em>, not a number. But now you can do this:</p><pre><code class="language-js">function add(x=5, y=7) {
console.log(x+y);
}
add(); // =&gt; 12</code></pre><p>You get 12! This means if you don’t specifically add values to this function when you call it, it will use the default values. So you can also do this:</p><pre><code class="language-js">function add(x=5, y=7) {
console.log(x+y);
}
add(12, 15); // =&gt; 27
add(); // =&gt; 12
// AND THIS:
function haveFun(action='burrowing', time=3) {
console.log(`I will go ${action} with Bunny for ${time} hours.`)
}
haveFun(); // =&gt; I will go burrowing with Bunny for 3 hours.
haveFun('swimming', 2); // =&gt; I will go swimming with Bunny for 2 hours.</code></pre><p>The overwriting of default values will occur based on the position in which you enter your input values when you call the function. For example:</p><pre><code class="language-js">function multiply(a, b = 2) {
return a*b;
}
multiply(3) // =&gt; 6 (returns 3 * 2)
multiply(5, 10) // =&gt; 50 (returns 5 * 10 since 10 replaces the default value)</code></pre><p>When passing undefined values, the default value is still chosen:</p><pre><code class="language-js">// TEST IT HERE: http://goo.gl/f6y1xb
function changeFontColor(elementId, color='blue') {
document.getElementById(elementId).style.color = color;
}
changeFontColor('title') // =&gt; sets title to blue
changeFontColor('title', 'pink') // =&gt; sets title to pink
changeFontColor('title', undefined) // =&gt; sets title to blue</code></pre><p>If no default value is assigned for a parameter, it will just return undefined, as normal:</p><pre><code class="language-js">function test(word1='HeyHeyHey', word2) {
return `${word1} there, ${word2}!`
}
test(); // =&gt; HeyHeyHey there, undefined!
// IMPORTANT:
// In order to reach the second parameter and overwrite the default function,
// we need to include the first input as well:
test('Hi', 'Bunny') // =&gt; Hi there, Bunny!</code></pre><h4 id="destructuring-assignment">Destructuring Assignment</h4><p>Benefits:</p><ul><li>Extracts data from arrays and objects and assigns them to variables</li><li>Simplifies the amount of keystrokes needed, and improves readability</li><li>Super useful when needing to pass in large amount of data with the same properties (such as user profiles)</li></ul><p>Beware:</p><ul><li>Can be a bit complicated to understand in the beginning, but once you understand its benefits, just review the examples provided and research further. You’ll get the hang of it! :)</li></ul><p>Let’s take a step back and learn about Destructuring Assignment, and how it’s used in relation to Arrays, Objects, and even in combination with Default Parameters!</p><p>First, let’s practice with arrays by creating an array of Bunny’s favorite food. We <em>could</em> access the first and fifth item in the array the traditional way:</p><pre><code class="language-js">var BunnyFavFoods = ['Carrots', 'Carrot Bits', 'Grass', 'Berries', 'Papaya', 'Apples'];
console.log(BunnyFavFoods[0]) // =&gt; Carrots
console.log(BunnyFavFoods[4]) // =&gt; Papaya</code></pre><p>Or we could use Destructuring Assignment! We do this by removing the variable name and passing in a bracket that will point to what items we want in the array when we call it:</p><pre><code class="language-js">var [firstItem, fifthItem] = ['Carrots', 'Carrot Bits', 'Grass', 'Berries', 'Papaya', 'Apples'];
console.log(firstItem) // =&gt; Carrots
var [firstItem,,,,fifthItem] = ['Carrots', 'Carrot Bits', 'Grass', 'Berries', 'Papaya', 'Apples'];
console.log(firstItem) // =&gt; Carrots
console.log(fifthItem) // =&gt; Papaya
// Wohoo! Let’s try some more! Which item in the array will this get?
var [firstItem,,guessThisItem,,fifthItem] = ['Carrots', 'Carrot Bits', 'Grass', 'Berries', 'Papaya', 'Apples'];
console.log(firstItem) // =&gt; Carrots
console.log(guessThisItem) // =&gt; Grass
console.log(fifthItem) // =&gt; Papaya
// Are you noticing a pattern? One comma separates one word from another and
// every additional comma before a word represents a place in the array.
// Ok, What would happen if we added a comma to the front?
var [,firstItem,,guessThisItem,,fifthItem] = ['Carrots', 'Carrot Bits', 'Grass', 'Berries', 'Papaya', 'Apples'];
console.log(firstItem) // =&gt; Carrot Bits
console.log(guessThisItem) // =&gt; Berries
console.log(fifthItem) // =&gt; Apples
// Everything moves one place over!
// And what if we moved everything back and added a word to the end?
var [firstItem,,guessThisItem,,fifthItem, whichOneAmI] = ['Carrots', 'Carrot Bits', 'Grass', 'Berries', 'Papaya', 'Apples'];
console.log(firstItem) // =&gt; Carrots
console.log(guessThisItem) // =&gt; Grass
console.log(fifthItem) // =&gt; Papaya
console.log(whichOneAmI) // =&gt; Apples</code></pre><p>Play around with this code in your console so you can better understand this new concept, and tell us all in the comments section what you find. :)</p><p>Ok, we’ve got arrays down, so now how about Destructuring Assignment with objects? Let’s first check out the typical way we access items in an object:</p><pre><code class="language-js">var iceCream = {
cost: 3.99,
title: 'Ice Cream Flavors',
type: ['chocolate', 'vanilla', 'caramel', 'strawberry', 'watermelon']
}
console.log(iceCream.cost, iceCream.title, iceCream.type[2]);
//=&gt; 3.99 ‘Ice Cream Flavors’ ‘caramel’</code></pre><p>Now let’s destructure this object using a similar approach to what we used with arrays . Take away the variable name and in it’s place, put curly braces — as this is an object — just like we did brackets for arrays.</p><p>Inside the curly braces, pass in the object properties that we’ll want access to:</p><pre><code class="language-js">var {cost, title, type} = {
cost: 3.99,
title: 'Ice Cream Flavors',
type: ['chocolate', 'vanilla', 'caramel', 'strawberry', 'watermelon']
}
// VOILA!
console.log(cost, title, type[2])
//=&gt; 3.99 'Ice Cream Flavors' 'caramel'</code></pre><p>Here’s a slightly more complicated but useful way of using Destructuring:</p><p>Let’s say you have a function that you want to gain access to all the objects with the same properties but different values. This can be especially useful for large data sets, such as user profiles. But in this example we will use Bunny’s favorite things to make the concept clear:</p><pre><code class="language-js">var iceCream = {
cost: 3.99,
name: 'Ice Cream Flavors',
type: ['chocolate', 'vanilla', 'caramel', 'strawberry', 'watermelon']
}
var sushi = {
cost: 5.99,
name: 'Sushi Combinations',
type: ['Eel Roll', 'Philadelphia Roll', 'Spicy Salmon Handroll', 'Rainbow Roll', 'Special Roll']
}
var fruit = {
cost: 1.99,
name: 'Fruits',
type: ['cherry', 'watermelon', 'strawberry', 'cantaloupe', 'mangosteen']
}
function favThings({cost, name, type}) {
var randomNum = Math.floor((Math.random() * 4) + 1);
console.log(`Bunny loves her ${name}! She especially loves ${type[randomNum]} for only $${cost}!`);
}
// Randomly generated for the type parameter.
// First time:
favThings(iceCream) // =&gt; Bunny loves her Ice Cream Flavors! She especially loves caramel for only $3.99!
favThings(sushi) // =&gt; Bunny loves her Sushi Combinations! She especially loves Philadelphia Roll for only $5.99!
favThings(fruit) // =&gt; Bunny loves her Fruits! She especially loves cantaloupe for only $1.99!
// Second time:
favThings(iceCream) // =&gt; Bunny loves her Ice Cream Flavors! She especially loves vanilla for only $3.99!
favThings(sushi) // =&gt; Bunny loves her Sushi Combinations! She especially loves Spicy Salmon Handroll for only $5.99!
favThings(fruit) // =&gt; Bunny loves her Fruits! She especially loves mangosteen for only $1.99!
// Try it in the console yourself and see what you get!</code></pre><p>So what just happened?</p><p>When we passed in our objects(iceCream, sushi, fruit), the favThings function parsed it and allowed us to access these properties because we used same property names in each object.</p><h4 id="combining-destructuring-assignment-with-default-parameters">Combining Destructuring Assignment with Default Parameters</h4><p>Study the example below:</p><pre><code class="language-js">function profilePage({favColor: favColor} = {favColor: 'vintage pink'}, [name, age] = ['Bunny', 24]) {
console.log(`My name is ${name}. I am ${age} years old and my favorite color is ${favColor}!`)
}
profilePage();
// =&gt; My name is Bunny. I am 24 years old and my favorite color is vintage pink!
profilePage({favColor: 'blue'}, ['Ed', 30])
// =&gt; My name is Ed. I am 30 years old and my favorite color is blue!</code></pre><p>Or if you had an object and array ready for Destructuring:</p><pre><code class="language-js">var aboutEdward = {
info: ['Edward', 30],
favColor: 'blue',
favSushiRoll: 'Squidy squid squid'
}
function profilePage({favColor} = {favColor: 'vintage pink'}, [name, age] = ['Bunny', 24]) {
console.log(`My name is ${name}. I am ${age} years old and my favorite color is ${favColor}!`)
}
profilePage();
// =&gt; My name is Bunny. I am 24 years old and my favorite color is vintage pink!
profilePage(aboutEdward, aboutEdward.info);
// Examples:
'Bunny'.repeat(3); // =&gt; BunnyBunnyBunny
'Bunny'.repeat(2.5)// =&gt; BunnyBunny
'Bunny'.repeat(10/2) // =&gt; BunnyBunnyBunnyBunnyBunny
'Bunny'.repeat(-3) // =&gt; RangeError: Invalid count value
'Bunny'.repeat(1/0) // =&gt; RangeError: Invalid count value</code></pre><p>Though if you’re reading this and you’re learning algorithms or haven’t started learning them yet, I would highly advise to actually create a function for repeating a string and not using this method since that would defeat the purpose of learning and solving challenges. Once you got it down, go ahead and use this method to your heart’s content. YIPEE!</p><p>Congrats! You’ve made it through <strong>Learn ES6 The Dope Way</strong> Part IV and now you’ve acquired two super important ES6 concepts: Default Function Parameters and Destructuring Assignment, as well as learned a fun new method for repeating a string! Yay! Go you!</p><p>Remember that if you want to use ES6, there are still browser compatibility issues, so use compilers like <em>Babel</em> or a module bundler like <em>Webpack</em> before publishing your code. All of these will be discussed in future editions of <strong>Learn ES6 The Dope Way! Thanks for reading</strong> <strong>❤</strong></p><p>Keep your wisdom updated by liking and following as more <strong>Learn ES6 The Dope Way</strong> is coming soon to Medium!</p><p><strong><a href="/news/learn-es6-the-dope-way-i-const-let-var-ae828580472b/">Part I: const, let &amp; var</a></strong></p><p><strong><a href="/news/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881/">Part II: (Arrow) =&gt; functions and ‘this’ keyword</a></strong></p><p><strong><a href="/news/learn-es6-the-dope-way-part-iii-template-literals-spread-operators-generators-592765337294/">Part III: Template Literals, Spread Operators &amp; Generators!</a></strong></p><p><strong><a href="/news/learn-es6-the-dope-way-part-iv-default-parameters-destructuring-assignment-a-new-es6-method-44393190b8c9/">Part IV: Default Parameters, Destructuring Assignment, and a new ES6 method!</a></strong></p><p><strong><a href="/news/learn-es6-the-dope-way-part-v-classes-browser-compatibility-transpiling-es6-code-47f62267661/">Part V: Classes, Transpiling ES6 Code &amp; More Resources!</a></strong></p><p>You can also find me on github ❤ <a href="https://github.com/Mashadim" rel="noopener">https://github.com/Mashadim</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
