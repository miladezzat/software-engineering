---
card: "https://cdn-media-1.freecodecamp.org/images/1*RuxaPPPrL6K09eF4pFhISw.jpeg"
tags: [JavaScript]
description: "by Mariya Diminsky"
author: "Milad E. Fahmy"
title: "Learn ES6 The Dope Way Part III: Template Literals, Spread Operators, and Generators!"
created: "2021-08-16T10:29:12+02:00"
modified: "2021-08-16T10:29:12+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-es6 tag-education tag-web-development tag-tutorial ">
<header class="post-full-header">
<h1 class="post-full-title">Learn ES6 The Dope Way Part III: Template Literals, Spread Operators, and Generators!</h1>
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
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*RuxaPPPrL6K09eF4pFhISw.jpeg" alt="Learn ES6 The Dope Way Part III: Template Literals, Spread Operators, and Generators!">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
// Before:
function sayHi(petSquirrelName) { console.log('Greetings ' + petSquirrelName + '!'); }
sayHi('Brigadier Sir Nutkins II'); // =&gt; Greetings Brigadier Sir Nutkins II!
// After:
function sayHi(petSquirrelName) { console.log(`Greetings ${petSquirrelName}!`); }
sayHi('Brigadier Sir Nutkins II'); // =&gt; Greetings Brigadier Sir Nutkins II!
// #2
// Before:
console.log('first text string \n' + 'second text string');
// =&gt; first text string
// =&gt; second text string
// After:
console.log(`first text string
second text string`);
// =&gt; first text string
// =&gt; second text string
// #3
// Before:
var num1 = 5;
var num2 = 10;
console.log('She is ' + (num1 + num2) +  ' years old and\nnot ' + (2 * num1 + num2) + '.');
// =&gt; She is 15 years old and
// =&gt; not 20.
// After:
var num1 = 5;
var num2 = 10;
console.log(`She is ${num1 + num2} years old and\nnot ${2 * num1 + num2}.`);
// =&gt; She is 15 years old and
// =&gt; not 20.
// #4
// Before:
var num1 = 12;
var num2 = 8;
console.log('The number of JS MVC frameworks is ' + (2 * (num1 + num2)) + ' and not ' + (10 * (num1 + num2)) + '.');
//=&gt; The number of JS frameworks is 40 and not 200.
// After:
var num1 = 12;
var num2 = 8;
console.log(`The number of JS MVC frameworks is ${2 * (num1 + num2)} and not ${10 * (num1 + num2)}.`);
//=&gt; The number of JS frameworks is 40 and not 200.
// #5
// The ${} works fine with any kind of expression, including method calls:
// Before:
var registeredOffender = {name: 'Bunny BurgerKins'};
console.log((registeredOffender.name.toUpperCase()) + ' you have been arrested for the possession of illegal carrot bits!');
// =&gt; BUNNY BURGERKINS you have been arrested for the possession of illegal carrot bits!
// After:
var registeredOffender = {name: 'Bunny BurgerKins'};
console.log(`${registeredOffender.name.toUpperCase()} you have been arrested for the possession of illegal carrot bits!`);
// =&gt; BUNNY BURGERKINS you have been arrested for the possession of illegal carrot bits!</code></pre><p>Let’s checkout an even more complex way of using Template Literals! Look at how easy it is to include all this information without worrying about all the “+” signs, spaces, math logic, and quotation placement! It can be <em>so</em> convenient! Also please note, you will need to include another dollar sign, outside of the placeholder, if printing out prices:</p><pre><code class="language-js">function bunnyBailMoneyReceipt(bunnyName, bailoutCash) {
var bunnyTip = 100;
console.log(
`
Greetings ${bunnyName.toUpperCase()}, you have been bailed out!
Total: $${bailoutCash}
Tip: $${bunnyTip}
------------
Grand Total: $${bailoutCash + bunnyTip}
We hope you a pleasant carrot nip-free day!
`
);
}
bunnyBailMoneyReceipt('Bunny Burgerkins', 200);
// Enter the above code into your console to get this result:
/*
Greetings BUNNY BURGERKINS, you have been bailed out!
Total: $200
Tip: $100
------------
Grand Total: $300
We hope you a pleasant carrot nip-free day!
var bunnyNames = ['Lady FluffButt', 'Brigadier Giant'];
var animalNames = ['Lady Butt', squirrelNames, 'Juicy Biscuiteer', bunnyNames];
animalNames;
// =&gt; ['Lady Butt', ['Lady Nutkins', 'Squirrely McSquirrel', 'Sergeant Squirrelbottom'], 'Juicy Biscuiteer', ['Lady FluffButt', 'Brigadier Giant']]
// To flatten this array we need another step:
var flattened = [].concat.apply([], animalNames);
flattened;
// =&gt; ['Lady Butt', 'Lady Nutkins', 'Squirrely McSquirrel', 'Sergeant Squirrelbottom', 'Juicy Biscuiteer', 'Lady FluffButt', 'Brigadier Giant']
</code></pre><p>With the Spread Operator, your arrays are automatically inserted and concatenated wherever you’d like. No need for any extra steps:</p><pre><code class="language-js">var squirrelNames = ['Lady Nutkins', 'Squirrely McSquirrel', 'Sergeant Squirrelbottom'];
var bunnyNames = ['Lady FluffButt', 'Brigadier Giant'];
var animalNames = ['Lady Butt', ...squirrelNames, 'Juicy Biscuiteer', ...bunnyNames];
animalNames;
// =&gt; ['Lady Butt', 'Lady Nutkins', 'Squirrely McSquirrel', 'Sergeant Squirrelbottom', 'Juicy Biscuiteer', 'Lady FluffButt', 'Brigadier Giant']
</code></pre><p>Another useful example:</p><pre><code class="language-js">var values = [25, 50, 75, 100]
// This:
console.log(Math.max(25, 50, 75, 100)); // =&gt; 100
// Is the same as this:
console.log(Math.max(...values)); // =&gt; 100
/*
NOTE: Math.max() typically does not work for arrays unless you write it like:
Math.max.apply(null, values), but with Spread Operators you can just insert it
and voila! No need for the .apply() part! Wohoo! :)
*/</code></pre><h4 id="potentially-more-useful-than-apply-">Potentially more useful than .apply()</h4><p>What if you have multiple arguments to place inside of a function? You could use the good ol’ <em>Function.prototype.apply</em>:</p><pre><code class="language-js">function myFunction(x, y, z) {
console.log(x + y + z)
};
var args = [0, 1, 2];
myFunction.apply(null, args);
// =&gt; 3</code></pre><p>Or use the Spread Operator:</p><pre><code class="language-js">function myFunction(x, y, z) {
console.log(x + y + z);
}
var args = [0, 1, 2];
myFunction(...args);
// =&gt; 3</code></pre><p>In ES5 it is not possible to compose the <em>new</em> keyword with the <em>apply</em> method. Since the introduction of the Spread Operator syntax, you can now!</p><pre><code class="language-js">var dateFields = readDateFields(database);
var d = new Date(…dateFields);</code></pre><h4 id="generators">Generators</h4><p>Benefits:</p><ul><li>Allows you to pause functions to be resumed later.</li><li>Easier to create asynchronous functions.</li><li>Used commonly with <em>setTimeout()</em> or <em>setInterval()</em> to time asynchronous events.</li></ul><p>Be aware:</p><ul><li>You know you are looking at a generator if you see * and the word <em>yield</em>.</li><li>You need to call the function each time so the next function within is called, otherwise it won’t run, unless it’s within a <em>setInterval()</em>.</li><li>Result naturally comes out in object form, add .<em>value</em> to get value only.</li><li>Object comes with <em>done</em> property that is set to false until all <em>yield</em> expressions are printed.</li><li>Generators end either when all functions/values have been called or if a <em>return</em> statement is present.</li></ul><p>Example:</p><pre><code class="language-js">function* callMe() {
yield '1';
yield '…and a 2';
yield '…and a 3';
return;
yield 'this won’t print';
}
var anAction = callMe();
console.log(anAction.next());
//=&gt; { value: ‘1’, done: false }
console.log(anAction.next());
//=&gt; { value: ‘…and a 2’, done: false }
console.log(anAction.next());
//=&gt; { value: ‘…and a 3’, done: false }
console.log(anAction.next());
//=&gt; { value: ‘undefined’, done: true }
console.log(anAction.next());
//=&gt; { value: ‘undefined’, done: true }
// NOTE: To get only the value use anAction.next().value otherwise the entire object will be printed.
</code></pre><p>Generators are super useful when it comes to asynchronous functions calls. Let’s say you have 3 different functions that you’ve stored in an array and you want to call each one after another after a certain amount of time:</p><pre><code class="language-js">// Bunny needs to go grocery shopping for her friend’s birthday party.
var groceries = '';
// Let’s create three functions that need to be called for Bunny.
var buyCarrots = function () {
groceries += 'carrots';
}
var buyGrass = function () {
groceries += ', grass';
}
var buyApples = function () {
groceries += ', and apples';
}
// Bunny is in a hurry so you have to buy the groceries within certain amount of time!
// This is an example of when you would use a timer with a Generator.
// First store the functions within an array:
var buyGroceries = [buyCarrots, buyGrass, buyApples];
// Then loop through the array within a Generator:
// There are some issues doing this with the forEach, recreate this using a for loop.
function* loopThrough(arr) {
for(var i=0; i&lt;arr.length; i++) {
yield arr[i]();
}
}
// add the array of three functions to the loopThrough function.
var functions = loopThrough(buyGroceries);
// Lastly, set the time you want paused before the next function call
// using the setInterval method(calls a function/expression after a specific set time).
var timedGroceryHunt = setInterval(function() {
var functionCall = functions.next();
if(!functionCall.done) {
console.log(`Bunny bought ${groceries}!`);
}else {
clearInterval(timedGroceryHunt);
console.log(`Thank you! Bunny bought all the ${groceries} in time thanks to your help!`);
}
}, 1000);
// Enter this code into your console to test it out!
// after 1 second: =&gt; Bunny bought carrots!
// after 1 second: =&gt; Bunny bought carrots, grass!
// after 1 second: =&gt; Bunny bought carrots, grass, and apples!
// after 1 second: =&gt; Thank you! Bunny bought all the carrots, grass, and apples in time thanks to your help!
</code></pre><p>This can similarly be accomplished via a <em>promise </em>(an operation that hasn’t completed yet, but is expected in the future) as well. Developers sometimes use promises and Generators together in their code, so it’s good to be aware of both.</p><p>Congrats! You’ve made it through <strong>Learn ES6 The Dope Way</strong> Part III and now you’ve acquired three super valuable concepts! You can now safely brush up and make efficient use of Template Literals, Spread Operators, and Generators within your code. Woohoo! Go you!</p><p>Although, you might want to wait since there are still browser issues with ES6 and it’s important to use compilers like <em>Babel</em> or a module bundler like <em>Webpack</em> before publishing your code. All of these will be discussed in future editions of <strong>Learn ES6 The Dope Way! Thanks for reading</strong> <strong>❤</strong></p><p>Keep your wisdom updated by liking and following as more <strong>Learn ES6 The Dope Way</strong> is coming soon to Medium!</p><p><strong><a href="/news/learn-es6-the-dope-way-i-const-let-var-ae828580472b/">Part I: const, let &amp; var</a></strong></p><p><strong><a href="/news/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881/">Part II: (Arrow) =&gt; functions and ‘this’ keyword</a></strong></p><p><strong><a href="/news/learn-es6-the-dope-way-part-iii-template-literals-spread-operators-generators-592765337294/">Part III: Template Literals, Spread Operators &amp; Generators!</a></strong></p><p><strong><a href="/news/learn-es6-the-dope-way-part-iv-default-parameters-destructuring-assignment-a-new-es6-method-44393190b8c9/">Part IV: Default Parameters, Destructuring Assignment, and a new ES6 method!</a></strong></p><p><strong><a href="/news/learn-es6-the-dope-way-part-v-classes-browser-compatibility-transpiling-es6-code-47f62267661/">Part V: Classes, Transpiling ES6 Code &amp; More Resources!</a></strong></p><p>You can also find me on github ❤ <a href="https://github.com/Mashadim" rel="noopener">https://github.com/Mashadim</a></p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
