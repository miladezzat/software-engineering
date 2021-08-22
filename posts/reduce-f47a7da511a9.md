---
card: "https://cdn-media-1.freecodecamp.org/images/1*7Lt21vtHVtY6j0oBWNDd4w.png"
tags: [JavaScript]
description: "by Josh Pitzalis"
author: "Milad E. Fahmy"
title: "A Guide To The Reduce Method In Javascript​"
created: "2021-08-16T10:25:20+02:00"
modified: "2021-08-16T10:25:20+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-functional-programming tag-programming tag-learning-to-code tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">A Guide To The Reduce Method In Javascript​</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*7Lt21vtHVtY6j0oBWNDd4w.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*7Lt21vtHVtY6j0oBWNDd4w.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*7Lt21vtHVtY6j0oBWNDd4w.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*7Lt21vtHVtY6j0oBWNDd4w.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*7Lt21vtHVtY6j0oBWNDd4w.png" alt="A Guide To The Reduce Method In Javascript​">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
const sum = euros.reduce((total, amount) =&gt; total + amount);
sum // 118.11</code></pre><p>How to use it:</p><ul><li>In this example, Reduce accepts two parameters, the total and the current amount.</li><li>The reduce method cycles through each number in the array much like it would in a for-loop.</li><li>When the loop starts the total value is the number on the far left (29.76) and the current amount is the one next to it (41.85).</li><li>In this particular example, we want to add the current amount to the total.</li><li>The calculation is repeated for each amount in the array, but each time the current value changes to the next number in the array, moving right.</li><li>When there are no more numbers left in the array the method returns the total value.</li></ul><h4 id="the-es5-version-of-the-reduce-method-in-javascript-"><strong>The ES5 version of the Reduce Method In JavaScript​</strong></h4><p>If you have never used ES6 syntax before, don’t let the example above intimidate you. It’s exactly the same as writing:</p><pre><code class="language-js">var euros = [29.76, 41.85, 46.5];
var sum = euros.reduce( function(total, amount){
return total + amount
});
sum // 118.11</code></pre><p>We use <code>const</code> instead of <code>var</code> and we replace the word <code>function</code> with a “fat arrow” (<code>=&gt;</code>) after the parameters, and we omit the word ‘return’.</p><p>I’ll use ES6 syntax for the rest of the examples, since it’s more concise and leaves less room for errors.</p><h4 id="finding-an-average-with-the-reduce-method-in-javascript-">Finding an Average with the Reduce Method In JavaScript​</h4><p>Instead of logging the sum, you could divide the sum by the length of the array before you return a final value.</p><p>The way to do this is by taking advantage of the other arguments in the reduce method. The first of those arguments is the <em>index</em>. Much like a for-loop, the index refers to the number of times the reducer has looped over the array. The last argument is the <em>array</em> itself.</p><pre><code class="language-js">const euros = [29.76, 41.85, 46.5];
const average = euros.reduce((total, amount, index, array) =&gt; {
total += amount;
if( index === array.length-1) {
return total/array.length;
}else {
return total;
}
});
average // 39.37</code></pre><h4 id="map-and-filter-as-reductions">Map and Filter as Reductions</h4><p>If you can use the reduce function to spit out an average then you can use it any way you want.</p><p>For example, you could double the total, or half each number before adding them together, or use an if statement inside the reducer to only add numbers that are greater than 10. My point is that the <em>Reduce Method In JavaScript​</em> gives you a mini CodePen where you can write whatever logic you want. <em>It</em> will repeat the logic for each amount in the array and then return a single value.</p><p>The thing is, you don’t always have to return a single value. You can reduce an array into a new array.</p><p>For instance, lets reduce an array of amounts into another array where every amount is doubled. To do this we need to set the initial value for our accumulator to an empty array.</p><p>The initial value is the value of the total parameter when the reduction starts. You set the initial value by adding a comma followed by your initial value inside the parentheses but after the curly braces (<strong>bolded in the example below</strong>).</p><pre><code class="language-js">const average = euros.reduce((total, amount, index, array) =&gt; {
total += amount
return total/array.length
}, 0);</code></pre><p>In previous examples, the initial value was zero so I omitted it. By omitting the initial value, the <em>total</em> will default to the first amount in the array.</p><p>By setting the initial value to an empty array we can then push each <em>amount</em> into the <em>total</em>. If we want to reduce an array of values into another array where every value is doubled, we need to push the <em>amount</em> * 2. Then we return the total when there are no more amounts to push.</p><pre><code class="language-js">const euros = [29.76, 41.85, 46.5];
const doubled = euros.reduce((total, amount) =&gt; {
total.push(amount * 2);
return total;
}, []);
doubled // [59.52, 83.7, 93]</code></pre><p>We’ve created a new array where every amount is doubled. We could also filter out numbers we don’t want to double by adding an if statement inside our reducer.</p><pre><code class="language-js">const euro = [29.76, 41.85, 46.5];
const above30 = euro.reduce((total, amount) =&gt; {
if (amount &gt; 30) {
total.push(amount);
}
return total;
}, []);
above30 // [ 41.85, 46.5 ]</code></pre><p>These operations are the <em>map</em> and <em>filter</em> methods rewritten as a reduce method.</p><p>For these examples, it would make more sense to use map or filter because they are simpler to use. The benefit of using reduce comes into play when you want to map and filter together and you have a lot of data to go over.</p><p>If you chain map and filter together you are doing the work twice. You filter every single value and then you map the remaining values. With reduce you can filter and then map in a single pass.</p><p>Use map and filter but when you start chaining lots of methods together you now know that it is faster to reduce the data instead.</p><h4 id="creating-a-tally-with-the-reduce-method-in-javascript-">Creating a Tally with the Reduce Method In JavaScript​</h4><p><strong>Use it when</strong>: You have a collection of items and you want to know how many of each item are in the collection.</p><pre><code class="language-js">const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];
const count = fruitBasket.reduce( (tally, fruit) =&gt; {
tally[fruit] = (tally[fruit] || 0) + 1 ;
return tally;
} , {})
count // { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }</code></pre><p>To tally items in an array our initial value must be an empty object, not an empty array like it was in the last example.</p><p>Since we are going to be returning an object we can now store key-value pairs in the total.</p><pre><code class="language-js">fruitBasket.reduce( (tally, fruit) =&gt; {
tally[fruit] = 1;
return tally;
}, {})</code></pre><p>On our first pass, we want the name of the first key to be our current value and we want to give it a value of 1.</p><p>This gives us an object with all the fruit as keys, each with a value of 1. We want the amount of each fruit to increase if they repeat.</p><p>To do this, on our second loop we check if our total contain a key with the current fruit of the reducer. If it doesn’t then we create it. If it does then we increment the amount by one.</p><pre><code class="language-js">fruitBasket.reduce((tally, fruit) =&gt; {
if (!tally[fruit]) {
tally[fruit] = 1;
} else {
tally[fruit] = tally[fruit] + 1;
}
return tally;
}, {});</code></pre><p>I rewrote the exact same logic in a more concise way up top.</p><h4 id="flattening-an-array-of-arrays-with-the-reduce-method-in-javascript-">Flattening an array of arrays with the Reduce Method In JavaScript​​</h4><p>We can use reduce to flatten nested amounts into a single array.</p><p>We set the initial value to an empty array and then concatenate the current value to the total.</p><pre><code class="language-js">const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flat = data.reduce((total, amount) =&gt; {
return total.concat(amount);
}, []);
flat // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]</code></pre><p>More often than not, information is nested in more complicated ways. For instance, lets say we just want all the colors in the data variable below.</p><pre><code class="language-js">const data = [
{a: 'happy', b: 'robin', c: ['blue','green']},
{a: 'tired', b: 'panther', c: ['green','black','orange','blue']},
{a: 'sad', b: 'goldfish', c: ['green','red']}
];</code></pre><p>We’re going to step through each object and pull out the colours. We do this by pointing amount.c for each object in the array. We then use a forEach loop to push every value in the nested array into out total.</p><pre><code class="language-js">const colors = data.reduce((total, amount) =&gt; {
amount.c.forEach( color =&gt; {
total.push(color);
})
return total;
}, [])
colors //['blue','green','green','black','orange','blue','green','red']</code></pre><p>If we only need unique number then we can check to see of the number already exists in <em>total</em> before we push it.</p><pre><code class="language-js">const uniqueColors = data.reduce((total, amount) =&gt; {
amount.c.forEach( color =&gt; {
if (total.indexOf(color) === -1){
total.push(color);
}
});
return total;
}, []);
uniqueColors // [ 'blue', 'red', 'green', 'black', 'orange']</code></pre><h4 id="piping-with-reduce">Piping with Reduce</h4><p>An interesting aspect of the reduce method in JavaScript is that you can reduce over functions as well as numbers and strings.</p><p>Let’s say we have a collection of simple mathematical functions. these functions allow us to increment, decrement, double and halve an amount.</p><pre><code class="language-js">function increment(input) { return input + 1;}
function decrement(input) { return input — 1; }
function double(input) { return input * 2; }
function halve(input) { return input / 2; }</code></pre><p>For whatever reason, we need to increment, then double, then decrement an amount.</p><p>You could write a function that takes an input, and returns (input + 1) * 2 -1. The problem is that we know we are going to need to increment the amount three times, then double it, then decrement it, and then halve it at some point in the future. We don’t want to have to rewrite our function every time so we going to use reduce to create a pipeline.</p><p>A pipeline is a term used for a list of functions that transform some initial value into a final value. Our pipeline will consist of our three functions in the order that we want to use them.</p><pre><code class="language-js">let pipeline = [increment, double, decrement];</code></pre><p>Instead of reducing an array of values we reduce over our pipeline of functions. This works because we set the initial value as the amount we want to transform.</p><pre><code class="language-js">const result = pipeline.reduce(function(total, func) {
return func(total);
}, 1);
result // 3</code></pre><p>Because the pipeline is an array, it can be easily modified. If we want to decrement something three times, then double it, decrement it , and halve it then we just alter the pipeline.</p><pre><code class="language-js">var pipeline = [
increment,
increment,
increment,
double,
decrement,
halve
];</code></pre><p>The reduce function stays exactly the same.</p><h4 id="silly-mistakes-to-avoid">Silly Mistakes to avoid</h4><p>If you don’t pass in an initial value, reduce will assume the first item in your array is your initial value. This worked fine in the first few examples because we were adding up a list of numbers.</p><p>If you’re trying to tally up fruit, and you leave out the initial value then things get weird. Not entering an initial value is an easy mistake to make and one of the first things you should check when debugging.</p><p>Another common mistake is to forget to return the total. You must return something for the reduce function to work. Always double check and make sure that you’re actually returning the value you want.</p><p><strong>Tools, Tips &amp; References</strong></p><ul><li>Everything in this post came from a fantastic video series on egghead called <a href="https://egghead.io/courses/reduce-data-with-javascript" rel="noopener">Introducing Reduce</a>. I give <a href="https://twitter.com/mykola" rel="noopener">Mykola Bilokonsky</a> full credit and I am grateful to him for everything I now know about using the Reduce Method In JavaScript​. I have tried to rewrite much of what he explains in my own words as an exercise to better understand each concept. Also, it’s easier for me to reference an article, as opposed to a video, when I need to remember how to do something.</li><li>The <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" rel="noopener">MDN Reduce documentation</a> labels what I called a <em>total</em> the <code>accumulator</code>. It is important to know this because most people will refer to it as an accumulator if you read about it online. Some people call it <code>prev</code> as in <em>previous value</em>. It all refers to the same thing. I found it easier to think of a <em>total</em> when I was learning reduce.</li><li>If you would like to practice using reduce I recommend signing up to <a href="https://www.freecodecamp.com/" rel="noopener">freeCodeCamp</a> and completing as many of the <a href="https://www.freecodecamp.com/map-aside#nested-collapseIntermediateAlgorithmScripting" rel="noopener">intermediate algorithms</a> as you can using reduce.</li><li>If the ‘const’ variables in the example snippets are new to you I wrote another article about <a href="https://medium.com/@joshpitzalis/es6-variables-and-why-you-might-want-to-use-them-fbc84ce27262#.981ejmn1f" rel="noopener">ES6 variables and why you might want to use them</a>.</li><li>I also wrote an article called <a href="https://medium.com/@joshpitzalis/the-trouble-with-loops-f639e3cc52d9#.8xkmhn7z6" rel="noopener">The Trouble With Loops</a> that explain how to use map() and filter() if the are new to you.</li></ul><p>Thanks for reading! If you’d like to be notified when I write a new article please <a href="https://tinyletter.com/joshpitzalis" rel="noopener">enter your email</a> here.</p><p>And if you liked the article, please share it on social media so others can find it.</p>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
