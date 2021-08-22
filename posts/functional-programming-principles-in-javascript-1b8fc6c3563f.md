---
card: "https://cdn-media-1.freecodecamp.org/images/1*JyVlvqwsCBYl2FuvPFVRZQ.png"
tags: [Functional Programming]
description: "After a long time learning and working with object-oriented p"
author: "Milad E. Fahmy"
title: "Functional Programming Principles in Javascript"
created: "2021-08-16T11:34:32+02:00"
modified: "2021-08-16T11:34:32+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-functional-programming tag-programming tag-javascript tag-software-development tag-technology ">
<header class="post-full-header">
<h1 class="post-full-title">Functional Programming Principles in Javascript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*JyVlvqwsCBYl2FuvPFVRZQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*JyVlvqwsCBYl2FuvPFVRZQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*JyVlvqwsCBYl2FuvPFVRZQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*JyVlvqwsCBYl2FuvPFVRZQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*JyVlvqwsCBYl2FuvPFVRZQ.png" alt="Functional Programming Principles in Javascript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
const calculateArea = (radius) =&gt; radius * radius * PI;
calculateArea(10); // returns 314.0</code></pre><p>Why is this an impure function? Simply because it uses a global object that was not passed as a parameter to the function.</p><p>Now imagine some mathematicians argue that the <code>PI</code> value is actually <code><a href="https://en.wikipedia.org/wiki/Phrases_from_The_Hitchhiker%27s_Guide_to_the_Galaxy#Answer_to_the_Ultimate_Question_of_Life,_the_Universe,_and_Everything_(42)" rel="noopener">42</a></code>and change the value of the global object.</p><p>Our impure function will now result in <code>10 * 10 * 42</code> = <code>4200</code>. For the same parameter (<code>radius = 10</code>), we have a different result.</p><p>Let's fix it!</p><pre><code class="language-js">let PI = 3.14;
const calculateArea = (radius, pi) =&gt; radius * radius * pi;
calculateArea(10, PI); // returns 314.0</code></pre><p>Now we’ll always pass the value of <code>PI</code> as a parameter to the function. So now we are just accessing parameters passed to the function. No <code>external object</code>.</p><ul><li>For the parameters <code>radius = 10</code> and<code>PI = 3.14</code>, we will always have the same the result: <code>314.0</code></li><li>For the parameters <code>radius = 10</code> and<code>PI = 42</code>, we will always have the same the result: <code>4200</code></li></ul><h4 id="reading-files">Reading Files</h4><p>If our function reads external files, it’s not a pure function — the file’s contents can change.</p><pre><code class="language-js">const charactersCounter = (text) =&gt; `Character count: ${text.length}`;
function analyzeFile(filename) {
let fileContent = open(filename);
return charactersCounter(fileContent);
}</code></pre><h4 id="random-number-generation">Random number generation</h4><p>Any function that relies on a random number generator cannot be pure.</p><pre><code class="language-js">function yearEndEvaluation() {
if (Math.random() &gt; 0.5) {
return "You get a raise!";
} else {
return "Better luck next year!";
}
}</code></pre><h4 id="it-does-not-cause-any-observable-side-effects">It does not cause any observable side effects</h4><p>Examples of observable side effects include modifying a global object or a parameter passed by reference.</p><p>Now we want to implement a function to receive an integer value and return the value increased by 1.</p><pre><code class="language-js">let counter = 1;
function increaseCounter(value) {
counter = value + 1;
}
increaseCounter(counter);
console.log(counter); // 2</code></pre><p>We have the <code>counter</code> value. Our impure function receives that value and re-assigns the counter with the value increased by 1.</p><pre><code class="language-js">let counter = 1;
const increaseCounter = (value) =&gt; value + 1;
increaseCounter(counter); // 2
console.log(counter); // 1</code></pre><p><strong>Observation</strong>: mutability is discouraged in functional programming.</p><p>We are modifying the global object. But how would we make it <code>pure</code>? Just return the value increased by 1.</p><p>See that our pure function <code>increaseCounter</code> returns 2, but the <code>counter</code> value is still the same. The function returns the incremented value without altering the value of the variable.</p><p>If we follow these two simple rules, it gets easier to understand our programs. Now every function is isolated and unable to impact other parts of our system.</p><p>Pure functions are stable, consistent, and predictable. Given the same parameters, pure functions will always return the same result. We don’t need to think of situations when the same parameter has different results — because it will never happen.</p><h4 id="pure-functions-benefits">Pure functions benefits</h4><p>The code’s definitely easier to test. We don’t need to mock anything. So we can unit test pure functions with different contexts:</p><ul><li>Given a parameter <code>A</code> → expect the function to return value <code>B</code></li><li>Given a parameter <code>C</code> → expect the function to return value <code>D</code></li></ul><p>A simple example would be a function to receive a collection of numbers and expect it to increment each element of this collection.</p><pre><code class="language-js">let list = [1, 2, 3, 4, 5];
var sumOfValues = 0;
for (var i = 0; i &lt; values.length; i++) {
sumOfValues += values[i];
}
sumOfValues // 15</code></pre><p>For each iteration, we are changing the <code>i</code> and the <code>sumOfValue</code> state. But how do we handle mutability in iteration? Recursion.</p><pre><code class="language-js">
let list = [1, 2, 3, 4, 5];
let accumulator = 0;
function sum(list, accumulator) {
if (list.length == 0) {
return accumulator;
}
return sum(list.slice(1), accumulator + list[0]);
}
sum(list, accumulator); // 15
list; // [1, 2, 3, 4, 5]
accumulator; // 0</code></pre><p>So here we have the <code>sum</code> function that receives a vector of numerical values. The function calls itself until we get the list empty (<a href="https://en.wikipedia.org/wiki/Recursion_(computer_science)#Recursive_functions_and_algorithms" rel="noopener">our recursion <code>base case</code></a>). For each "iteration" we will add the value to the <code>total</code> accumulator.</p><p>With recursion, we keep our variables<em> </em>immutable. The <code>list</code> and the <code>accumulator</code> variables are not changed. It keeps the same value.</p><p><strong>Observation</strong>: We can use <code>reduce</code> to implement this function. We will cover this in the higher order functions topic.</p><p>It is also very common to build up the final state of an object. Imagine we have a string, and we want to transform this string into a <code>url slug</code>.</p><p>In Object Oriented Programming in Ruby, we would create a class, let’s say, <code>UrlSlugify</code>. And this class will have a <code>slugify</code> method to transform the string input into a <code>url slug</code>.</p><pre><code class="language-js">class UrlSlugify
attr_reader :text
def initialize(text)
@text = text
end
def slugify!
text.downcase!
text.strip!
text.gsub!(' ', '-')
end
end
UrlSlugify.new(' I will be a url slug   ').slugify! # "i-will-be-a-url-slug"</code></pre><p>It’s implemented!</p><p>Here we have imperative programming saying exactly what we want to do in each <code>slugify</code> process — first lower-case, then remove useless white spaces and, finally, replace remaining white spaces with hyphens.</p><p>But we are mutating the input state in this process.</p><p>We can handle this mutation by doing function composition, or function chaining. In other words, the result of a function will be used as an input for the next function, without modifying the original input string.</p><pre><code class="language-js">const string = " I will be a url slug   ";
const slugify = string =&gt;
string
.toLowerCase()
.trim()
.split(" ")
.join("-");
square(2); // 4
square(2); // 4
const subtraction = (a, b) =&gt; a - b;
const doubleOperator = (f, a, b) =&gt; f(a, b) * 2;
doubleOperator(sum, 3, 1); // 8
doubleOperator(subtraction, 3, 1); // 4</code></pre><p>Now we have an <code>f</code> argument, and use it to process <code>a</code> and <code>b</code>. We passed the <code>sum</code> and <code>subtraction</code> functions to compose with the <code>doubleOperator</code> function and create a new behavior.</p><h4 id="higher-order-functions">Higher-order functions</h4><p>When we talk about higher-order functions, we mean a function that either:</p><ul><li>takes one or more functions as arguments, or</li><li>returns a function as its result</li></ul><p>The <code>doubleOperator</code> function we implemented above is a higher-order function because it takes an operator function as an argument and uses it.</p><p>You’ve probably already heard about <code>filter</code>, <code>map</code>, and <code>reduce</code>. Let's take a look at these.</p><h4 id="filter-function filter() { [native code] }1">Filter</h4><p>Given a collection, we want to filter by an attribute. The filter function expects a <code>true</code> or <code>false</code> value to determine if the element should or should not be included in the result collection. Basically, if the callback expression is <code>true</code>, the filter function will include the element in the result collection. Otherwise, it will not.</p><p>A simple example is when we have a collection of integers and we want only the even numbers.</p><h4 id="imperative-approach"><strong>Imperative approach</strong></h4><p>An imperative way to do it with JavaScript is to:</p><ul><li>create an empty array <code>evenNumbers</code></li><li>iterate over the <code>numbers</code> array</li><li>push the even numbers to the <code>evenNumbers</code> array</li></ul><pre><code class="language-js">var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenNumbers = [];
for (var i = 0; i &lt; numbers.length; i++) {
if (numbers[i] % 2 == 0) {
evenNumbers.push(numbers[i]);
}
}
console.log(evenNumbers); // (6) [0, 2, 4, 6, 8, 10]</code></pre><p>We can also use the <code>filter</code> higher order function to receive the <code>even</code> function, and return a list of even numbers:</p><pre><code class="language-js">const even = n =&gt; n % 2 == 0;
const listOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
listOfNumbers.filter(even); // [0, 2, 4, 6, 8, 10]</code></pre><p>One interesting problem I solved on <a href="https://www.hackerrank.com/domains/fp" rel="noopener">Hacker Rank FP</a> Path was the <a href="https://www.hackerrank.com/challenges/fp-filter-array/problem" rel="noopener">Filter Array problem</a>. The problem idea is to filter a given array of integers and output only those values that are less than a specified value <code>X</code>.</p><p>An imperative JavaScript solution to this problem is something like:</p><pre><code class="language-js">var filterArray = function(x, coll) {
var resultArray = [];
for (var i = 0; i &lt; coll.length; i++) {
if (coll[i] &lt; x) {
resultArray.push(coll[i]);
}
}
return resultArray;
}
console.log(filterArray(3, [10, 9, 8, 2, 7, 5, 1, 3, 0])); // (3) [2, 1, 0]</code></pre><p>We say exactly what our function needs to do — iterate over the collection, compare the collection current item with <code>x</code>, and push this element to the <code>resultArray</code> if it pass the condition.</p><h4 id="declarative-approach"><strong>Declarative approach</strong></h4><p>But we want a more declarative way to solve this problem, and using the <code>filter</code> higher order function as well.</p><p>A declarative JavaScript solution would be something like this:</p><pre><code class="language-js">function smaller(number) {
return number &lt; this;
}
function filterArray(x, listOfNumbers) {
return listOfNumbers.filter(smaller, x);
}
let numbers = [10, 9, 8, 2, 7, 5, 1, 3, 0];
filterArray(3, numbers); // [2, 1, 0]</code></pre><p>Using <code>this</code> in the <code>smaller</code> function seems a bit strange in the first place, but is easy to understand.</p><p><code>this</code> will be the second parameter in the <code>filter</code> function. In this case, <code>3</code> (the <code>x</code>) is represented by <code>this</code>. That's it.</p><p>We can also do this with maps. Imagine we have a map of people with their <code>name</code> and <code>age</code>.</p><pre><code class="language-js">let people = [
{ name: "TK", age: 26 },
{ name: "Kaio", age: 10 },
{ name: "Kazumi", age: 30 }
];</code></pre><p>And we want to filter only people over a specified value of age, in this example people who are more than 21 years old.</p><pre><code class="language-js">const olderThan21 = person =&gt; person.age &gt; 21;
const overAge = people =&gt; people.filter(olderThan21);
overAge(people); // [{ name: 'TK', age: 26 }, { name: 'Kazumi', age: 30 }]</code></pre><p>Summary of code:</p><ul><li>we have a list of people (with <code>name</code> and <code>age</code>).</li><li>we have a function <code>olderThan21</code>. In this case, for each person in people array, we want to access the <code>age</code> and see if it is older than 21.</li><li>we filter all people based on this function.</li></ul><h4 id="map-function map() { [native code] }1">Map</h4><p>The idea of map is to transform a collection.</p><blockquote>The <code>map</code> method transforms a collection by applying a function to all of its elements and building a new collection from the returned values.</blockquote><p>Let’s get the same <code>people</code> collection above. We don't want to filter by “over age” now. We just want a list of strings, something like <code>TK is 26 years old</code>. So the final string might be <code>:name is :age years old</code> where <code>:name</code> and <code>:age</code> are attributes from each element in the <code>people</code> collection.</p><p>In a imperative JavaScript way, it would be:</p><pre><code class="language-js">var people = [
{ name: "TK", age: 26 },
{ name: "Kaio", age: 10 },
{ name: "Kazumi", age: 30 }
];
var peopleSentences = [];
for (var i = 0; i &lt; people.length; i++) {
var sentence = people[i].name + " is " + people[i].age + " years old";
peopleSentences.push(sentence);
}
console.log(peopleSentences); // ['TK is 26 years old', 'Kaio is 10 years old', 'Kazumi is 30 years old']
</code></pre><p>In a declarative JavaScript way, it would be:</p><pre><code class="language-js">const makeSentence = (person) =&gt; `${person.name} is ${person.age} years old`;
const peopleSentences = (people) =&gt; people.map(makeSentence);
peopleSentences(people);
// ['TK is 26 years old', 'Kaio is 10 years old', 'Kazumi is 30 years old']</code></pre><p>The whole idea is to transform a given array into a new array.</p><p>Another interesting Hacker Rank problem was the <a href="https://www.hackerrank.com/challenges/fp-update-list/problem" rel="noopener">update list problem</a>. We just want to update the values of a given array with their absolute values.</p><p>For example, the input <code>[1, 2, 3, -4, 5]</code>needs the output to be <code>[1, 2, 3, 4, 5]</code>. The absolute value of <code>-4</code> is <code>4</code>.</p><p>A simple solution would be an in-place update for each collection value.</p><pre><code class="language-js">var values = [1, 2, 3, -4, 5];
for (var i = 0; i &lt; values.length; i++) {
values[i] = Math.abs(values[i]);
}
console.log(values); // [1, 2, 3, 4, 5]</code></pre><p>We use the <code>Math.abs</code> function to transform the value into its absolute value, and do the in-place update.</p><p>This is <strong>not</strong> a functional way to implement this solution.</p><p>First, we learned about immutability. We know how immutability is important to make our functions more consistent and predictable. The idea is to build a new collection with all absolute values.</p><p>Second, why not use <code>map</code> here to "transform" all data?</p><p>My first idea was to test the <code>Math.abs</code> function to handle only one value.</p><pre><code class="language-js">Math.abs(-1); // 1
Math.abs(1); // 1
Math.abs(-2); // 2
Math.abs(2); // 2</code></pre><p>We want to transform each value into a positive value (the absolute value).</p><p>Now that we know how to do <code>absolute</code> for one value, we can use this function to pass as an argument to the <code>map</code> function. Do you remember that a <code>higher order function</code> can receive a function as an argument and use it? Yes, map can do it!</p><pre><code class="language-js">let values = [1, 2, 3, -4, 5];
const updateListMap = (values) =&gt; values.map(Math.abs);
updateListMap(values); // [1, 2, 3, 4, 5]</code></pre><p>Wow. So beautiful!</p><h4 id="reduce-function reduce() { [native code] }1">Reduce</h4><p>The idea of reduce is to receive a function and a collection, and return a value created by combining the items.</p><p>A common example people talk about is to get the total amount of an order. Imagine you were at a shopping website. You’ve added <code>Product 1</code>, <code>Product 2</code>, <code>Product 3</code>, and <code>Product 4</code> to your shopping cart (order). Now we want to calculate the total amount of the shopping cart.</p><p>In imperative way, we would iterate the order list and sum each product amount to the total amount.</p><pre><code class="language-js">var orders = [
{ productTitle: "Product 1", amount: 10 },
{ productTitle: "Product 2", amount: 30 },
{ productTitle: "Product 3", amount: 20 },
{ productTitle: "Product 4", amount: 60 }
];
var totalAmount = 0;
for (var i = 0; i &lt; orders.length; i++) {
totalAmount += orders[i].amount;
}
console.log(totalAmount); // 120</code></pre><p>Using <code>reduce</code>, we can build a function to handle the <code>amount sum</code> and pass it as an argument to the <code>reduce</code> function.</p><pre><code class="language-js">let shoppingCart = [
{ productTitle: "Product 1", amount: 10 },
{ productTitle: "Product 2", amount: 30 },
{ productTitle: "Product 3", amount: 20 },
{ productTitle: "Product 4", amount: 60 }
];
const sumAmount = (currentTotalAmount, order) =&gt; currentTotalAmount + order.amount;
const getTotalAmount = (shoppingCart) =&gt; shoppingCart.reduce(sumAmount, 0);
getTotalAmount(shoppingCart); // 120</code></pre><p>Here we have <code>shoppingCart</code>, the function <code>sumAmount</code> that receives the current <code>currentTotalAmount</code> , and the <code>order</code> object to <code>sum</code> them.</p><p>The <code>getTotalAmount</code> function is used to <code>reduce</code> the <code>shoppingCart</code> by using the <code>sumAmount</code> and starting from <code>0</code>.</p><p>Another way to get the total amount is to compose <code>map</code> and <code>reduce</code>. What do I mean by that? We can use <code>map</code> to transform the <code>shoppingCart</code> into a collection of <code>amount</code> values, and then just use the <code>reduce</code> function with <code>sumAmount</code> function.</p><pre><code class="language-js">const getAmount = (order) =&gt; order.amount;
const sumAmount = (acc, amount) =&gt; acc + amount;
function getTotalAmount(shoppingCart) {
return shoppingCart
.map(getAmount)
.reduce(sumAmount, 0);
}
getTotalAmount(shoppingCart); // 120</code></pre><p>The <code>getAmount</code> receives the product object and returns only the <code>amount</code> value. So what we have here is <code>[10, 30, 20, 60]</code>. And then the <code>reduce</code> combines all items by adding up. Beautiful!</p><p>We took a look at how each higher order function works. I want to show you an example of how we can compose all three functions in a simple example.</p><p>Talking about <code>shopping cart</code>, imagine we have this list of products in our order:</p><pre><code class="language-js">let shoppingCart = [
{ productTitle: "Functional Programming", type: "books", amount: 10 },
{ productTitle: "Kindle", type: "eletronics", amount: 30 },
{ productTitle: "Shoes", type: "fashion", amount: 20 },
{ productTitle: "Clean Code", type: "books", amount: 60 }
]</code></pre><p>We want the total amount of all books in our shopping cart. Simple as that. The algorithm?</p><ul><li>filter by book type</li><li>transform the shopping cart into a collection of amount using map</li><li>combine all items by adding them up with reduce</li></ul><pre><code class="language-js">let shoppingCart = [
{ productTitle: "Functional Programming", type: "books", amount: 10 },
{ productTitle: "Kindle", type: "eletronics", amount: 30 },
{ productTitle: "Shoes", type: "fashion", amount: 20 },
{ productTitle: "Clean Code", type: "books", amount: 60 }
]
const byBooks = (order) =&gt; order.type == "books";
const getAmount = (order) =&gt; order.amount;
const sumAmount = (acc, amount) =&gt; acc + amount;
function getTotalAmount(shoppingCart) {
return shoppingCart
.filter(byBooks)
.map(getAmount)
.reduce(sumAmount, 0);
}
getTotalAmount(shoppingCart); // 70</code></pre><p>Done!</p><h4 id="resources">Resources</h4><p>I’ve organised some resources I read and studied. I’m sharing the ones that I found really interesting. For more resources, visit my <a href="https://github.com/LeandroTk/learning-functional-programming" rel="noopener">Functional Programming Github repository</a></p><ul><li><a href="https://ES6.io/friend/LEANDRO" rel="noopener">EcmaScript 6 course by Wes Bos</a></li><li><a href="https://mbsy.co/lFtbC" rel="noopener">JavaScript by OneMonth</a></li><li><a href="https://github.com/LeandroTk/learning-functional-programming/tree/master/ruby" rel="noopener">Ruby specific resources</a></li><li><a href="https://github.com/LeandroTk/learning-functional-programming/tree/master/javascript" rel="noopener">Javascript specific resources</a></li><li><a href="https://github.com/LeandroTk/learning-functional-programming/tree/master/clojure" rel="noopener">Clojure specific resources</a></li><li><a href="https://alterclass.io/?ref=5ec57f513c1321001703dcd2">Learn React by building an App</a></li></ul><h4 id="intros">Intros</h4><ul><li><a href="https://www.youtube.com/watch?v=e-5obm1G_FY" rel="noopener">Learning FP in JS</a></li><li><a href="https://codewords.recurse.com/issues/one/an-introduction-to-functional-programming" rel="noopener">Intro do FP with Python</a></li><li><a href="https://blog.codeship.com/overview-of-functional-programming" rel="noopener">Overview of FP</a></li><li><a href="https://hackernoon.com/a-quick-introduction-to-functional-javascript-7e6fe520e7fa" rel="noopener">A quick intro to functional JS</a></li><li><a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0" rel="noopener">What is FP?</a></li><li><a href="https://github.com/hemanth/functional-programming-jargon" rel="noopener">Functional Programming Jargon</a></li></ul><h4 id="pure-functions-1">Pure functions</h4><ul><li><a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976" rel="noopener">What is a pure function?</a></li><li><a href="https://www.fpcomplete.com/blog/2017/04/pure-functional-programming" rel="noopener">Pure Functional Programming 1</a></li><li><a href="https://www.fpcomplete.com/blog/2017/05/pure-functional-programming-part-2" rel="noopener">Pure Functional Programming 2</a></li></ul><h4 id="immutable-data">Immutable data</h4><ul><li><a href="https://www.youtube.com/watch?v=Wo0qiGPSV-s" rel="noopener">Immutable DS for functional programming</a></li><li><a href="http://henrikeichenhardt.blogspot.com/2013/06/why-shared-mutable-state-is-root-of-all.html" rel="noopener">Why shared mutable state is the root of all evil</a></li></ul><h4 id="higher-order-functions-1">Higher-order functions</h4><ul><li><a href="https://eloquentjavascript.net/05_higher_order.html" rel="noopener">Eloquent JS: Higher Order Functions</a></li><li><a href="https://www.youtube.com/watch?v=BMUiFMZr7vk&amp;t=0s&amp;list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&amp;index=2&amp;ab_channel=FunFunFunction" rel="noopener">Fun fun function Filter</a></li><li><a href="https://www.youtube.com/watch?v=bCqtb-Z5YGQ&amp;index=2&amp;list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&amp;ab_channel=FunFunFunction" rel="noopener">Fun fun function Map</a></li><li><a href="https://www.youtube.com/watch?v=Wl98eZpkp-c&amp;list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&amp;index=3&amp;frags=wn&amp;ab_channel=FunFunFunction" rel="noopener">Fun fun function Basic Reduce</a></li><li><a href="https://www.youtube.com/watch?v=1DMolJ2FrNY&amp;list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&amp;index=4&amp;ab_channel=FunFunFunction" rel="noopener">Fun fun function Advanced Reduce</a></li><li><a href="https://clojure.org/guides/higher_order_functions" rel="noopener">Clojure Higher Order Functions</a></li><li><a href="https://purelyfunctional.tv/lesson/filter/" rel="noopener">Purely Function Filter</a></li><li><a href="https://purelyfunctional.tv/lesson/map/" rel="noopener">Purely Functional Map</a></li><li><a href="https://purelyfunctional.tv/lesson/reduce/" rel="noopener">Purely Functional Reduce</a></li></ul><h4 id="declarative-programming">Declarative Programming</h4><ul><li><a href="https://tylermcginnis.com/imperative-vs-declarative-programming/" rel="noopener">Declarative Programming vs Imperative</a></li></ul><h4 id="that-s-it-">That’s it!</h4><p>Hey people, I hope you had fun reading this post, and I hope you learned a lot here! This was my attempt to share what I’m learning.</p><p><a href="https://github.com/tk-notes/fp-in-javascript-article-source-code" rel="noopener">Here is the repository with all codes</a> from this article.</p><p>Come learn with me. I’m sharing resources and my code in this <a href="https://github.com/LeandroTk/learning-functional-programming" rel="noopener">Learning Functional Programming repository</a>.</p><p>I also wrote an <a href="https://medium.freecodecamp.org/an-introduction-to-the-basic-principles-of-functional-programming-a2c2a15c84" rel="noopener">FP post but using mainly Clojure</a></p><p>I hope you saw something useful to you here. And see you next time! :)</p><p>My <a href="https://twitter.com/LeandroTk_" rel="noopener">Twitter</a> &amp; <a href="https://github.com/LeandroTk" rel="noopener">Github</a>.</p><p>TK.</p>
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
