---
card: "https://cdn-media-1.freecodecamp.org/images/1*0-gCRnSTrgH7kWyg91ofGA.png"
tags: [JavaScript]
description: "JavaScript is undoubtedly one of the most popular programming"
author: "Milad E. Fahmy"
title: "Learn ES6+ in this free and interactive 23-part course"
created: "2021-08-15T23:48:19+02:00"
modified: "2021-08-15T23:48:19+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-tech tag-coding tag-programming tag-es6 ">
<header class="post-full-header">
<h1 class="post-full-title">Learn ES6+ in this free and interactive 23-part course</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*0-gCRnSTrgH7kWyg91ofGA.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*0-gCRnSTrgH7kWyg91ofGA.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*0-gCRnSTrgH7kWyg91ofGA.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*0-gCRnSTrgH7kWyg91ofGA.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*0-gCRnSTrgH7kWyg91ofGA.png" alt="Learn ES6+ in this free and interactive 23-part course">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
let name = 'Dylan';
let str2 = `${str1} ${name}`
// --&gt; 'My name is: Dylan'
</code></pre><p>Template literals start with a backtick, and we use the <code>$</code> sign and curly brackets to introduce a variable in-between.</p><h3 id="part-3-destructuring-objects">Part #3: Destructuring Objects</h3><p>In part 3, you’ll learn how to de-structure an object and extract the properties you are interested in.</p><pre><code class="language-js">let information = { firstName: 'Dylan', lastName: 'Israel'};
let { firstName, lastName } = information;
</code></pre><p>In the code above, we’re extracting the properties <code>firstName</code> and <code>lastName</code> from the object and we assign them to variables by using Object Destructuring.</p><h3 id="part-4-destructuring-arrays">Part #4: Destructuring Arrays</h3><p>In this part, you’ll learn how to get the pointer of the item we are interested in from the array by using array destruction.</p><pre><code class="language-js">let [ firstName ] = ['Dylan', 'Israel'];
</code></pre><p>Here, <code>firstName</code> is pointing towards the first item in the array on the right-hand side. We can also create more pointers on the left-hand side of the elements in our array.</p><h3 id="part-5-object-literal">Part #5: Object Literal</h3><p>In part 5 of our course, we will learn another cool feature of ES6, which is the Object Literal. Object Literals allow you to omit the key in the object if the name of the key and value are the same.</p><pre><code class="language-js">let firstName = 'Dylan';
let information = { firstName };
</code></pre><p>So, in the example above, we wanted to add the property of <code>firstName</code> in our <code>information</code> object. The <code>firstName</code> variable is another variable with the same name. We omit the key and just pass the name of the variable, and it will create the property and assign value itself.</p><h3 id="part-6-object-literal-challenge-">Part #6: Object Literal (Challenge)</h3><p>Now it’s time for the first challenge of the course! The goal here is to console log the new city, the new address, and the country with it.</p><pre><code class="language-js">function addressMaker(address) {
const newAddress = {
city: address.city,
state: address.state,
country: 'United States'
};
...
}
</code></pre><p>You are encouraged to use the topics we have learned so far to solve this problem. This includes Template Literals, Object Destruction, and Object Literals.</p><h3 id="part-7-for-of-loop">Part #7: For…Of Loop</h3><p>In part 7, you will learn about a new way of looping through elements. ES6 introduced a For…Of loop statement, which creates a loop that iterates over iterable objects like String, Array, NodeList objects, and more.</p><pre><code class="language-js">let str = 'hello';
for (let char of str) {  console.log(char);}// "h"// "e"// "l"// "l"// "o"
</code></pre><p>In the code example above, the For…Of loop loops over a string and logs the characters out.</p><h3 id="part-8-for-of-loop-challenge">Part #8: For…Of Loop challenge</h3><p>In this challenge, you are asked to guess what happens when you use <code>let</code> over <code>const</code> inside a <code>for…of</code> loop, and to try to manipulate the values inside the loop.</p><pre><code class="language-js">let incomes = [62000, 67000, 75000];
for (const income of incomes) {
}
console.log(incomes);
</code></pre><h3 id="part-9-spread-operator">Part #9: Spread Operator</h3><p>In part 9 of the course, you will learn about one of the coolest features included in ES6: the Spread Operator.</p><pre><code class="language-js">let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
// arr3 = [1, 2, 3, 4, 5, 6];
</code></pre><p>The code above demonstrates one of the many cool implementations of using the spread operator. Here we are combining two arrays by putting them in a new array with three dots (…) in front of the name of the array.</p><h3 id="part-10-rest-operator">Part #10: Rest Operator</h3><p>In this lesson, you’ll be learning a few use cases for the Rest operator. The Rest operator helps us handle function parameters in a better way by allowing us to represent the variable number of the function parameters as an array.</p><pre><code class="language-js">function findLength(...args) {  console.log(args.length);}
findLength();  // 0
findLength(1); // 1
findLength(2, 3, 4); // 3
</code></pre><p>Here, we are calling the same function with a different number of parameters, and the Rest operator is handling that perfectly for us.</p><h3 id="part-11-arrow-functions">Part #11: Arrow Functions</h3><p>This lesson teaches us one of the coolest and most talked about features introduced in ES6: Arrow Functions. Arrow Functions have changed the way we write functions.</p><pre><code class="language-js">const square = num =&gt; num * num;
square(2); // 4
</code></pre><p>By using the arrow function, the look of a <em>squaring</em> function has completely been changed. In just a single line of code, we are able to return the square of a number. Arrow Functions have a lot of other awesome implementations, which are explained in the lesson.</p><h3 id="part-12-default-parameters">Part #12: Default Parameters</h3><p>Default parameters allow us to initialise functions with the default value. In this lesson, you will learn how helpful this feature can be in real life coding tasks, as it helps you avoid errors and bugs. A simple example of default parameters would be:</p><pre><code class="language-js">function sum (a, b = 1) {
return a + b;
}
sum(5); // 6
</code></pre><p>Here we are setting the default value of <code>b</code> so that when we do not pass any value of b, it will use the default value for calculating the result.</p><h3 id="part-13-includes-">Part #13: includes()</h3><p>Using the <code>includes</code> method, we can find out if any string contains a particular character or a substring. In this lesson, you will learn in detail about the practical use-cases of this function.</p><pre><code class="language-js">let str = 'Hello World';
console.log(str.includes('hello')); // true
</code></pre><p>Here, we find out if our string contains the substring of <code>hello</code>. As you can see, the includes method returns either true or false depending on whether or not the condition is matching.</p><h3 id="part-14-let-and-cost">Part #14: Let and Cost</h3><p>Perhaps the most important feature of ES6 is the two new keywords for declaring variables: <code>let</code> and <code>const</code>.</p><pre><code class="language-js">let str = 'Hello World';
const num = 12345;
</code></pre><p>Using <code>let</code>, we can create variables which can be changed later in the program. Variables declared with <code>const</code> can never be changed. We will learn about them in this lesson.</p><h3 id="part-15-import-and-export">Part #15: Import and Export</h3><p>We all know how important it is to have modular code, especially if you are working on large-scale applications. With <code>import</code> and <code>export</code> statements in JavaScript, it has become extremely easy and clean to declare and use modules.</p><p>In part 15 of this course, you will learn how to use export and import statements to create modules.</p><pre><code class="language-js">// exports function
export function double(num) {
return num * num;
}
</code></pre><p>In the code above, we are exporting a function by the name of <code>double.</code> We’re then importing the function in a separate file:</p><pre><code class="language-js">// imports function
import { double } from '..filepath/filename
</code></pre><h3 id="part-16-padstart-and-padend-">Part #16: padStart() and padEnd()</h3><p>ES2017 introduced two new methods to manipulate strings, which you will learn in detail in this part. <code>padStart</code> and <code>padEnd</code> will simply add padding at the start and end of the string.</p><pre><code class="language-js">let str = 'Hello';
str.padStart(3); // '   Hello'
str.padEnd(3); // 'Hello   '
</code></pre><h3 id="part-17-padstart-and-padend-challenge">Part #17: padStart() and padEnd() challenge</h3><p>In this part, you’ll tackle the third challenge of this course. It’s a small quiz in which Dylan first asks you to guess, and then explains what happens when the following code runs</p><pre><code class="language-js">let example = 'YouTube.com/CodingTutorials360';
// console.log(example.padStart(100));
// console.log(example.padEnd(1));
</code></pre><h3 id="part-18-classes">Part #18: Classes</h3><p>Classes were introduced in ES6, and they have completely stepped up the game for using Object Oriented Patterns in JavaScript. Although it is simply syntactical sugar over JavaScript’s existing prototypical inheritance, it has made it easier to write in a more object-oriented way.</p><p>So in this lesson, you will learn in detail how you can use classes and take the benefit of OOP features like, for example, inheritance. Below is a simple example of using classes.</p><pre><code class="language-js">class Car {
constructor(wheels, doors) {
this.wheels = wheels;
this.doors = doors;
}
describeMe() {
console.log(`Doors: ${this.doors} and Wheels: ${this.wheels}`);
}}
const car1 = new Car(4, 2);
car1.describeMe(); // Doors: 2 and Wheels: 4
</code></pre><p>Here, we create a simple Car class in which we have a constructor assigning the wheels and doors. We also have a method which logs the number of doors and wheels of the car.</p><p>Then, we create a new instance and pass the values of wheels and doors. Finally, we call the <code>describeMe</code> method on it.</p><h3 id="part-19-trailing-commas">Part #19: Trailing Commas</h3><p>In lesson 19, you will be learning how to use trailing commas. They make it easier to add new elements, properties, or attributes to your code, as you can do so without having to worry about adding a comma to the previous element.</p><pre><code class="language-js">let arr = [  1,   2,   3, ];arr.length; // 3
</code></pre><p>This was just a simple example of using trailing commas. You will learn more about them in our lesson during our course.</p><h3 id="part-20-async-await">Part #20: Async &amp; Await</h3><p>Async &amp; Await is my favourite features of ES6. With Async &amp; Await, we can write asynchronous code which looks like synchronous code. This is clean, easy to read, and easy to understand. So in this lesson, you’ll learn a few practical examples of how to use it.</p><pre><code class="language-js">let response = await fetch('https://example.com/books');
console.log('response');
</code></pre><p>In the example above, we have used the await keyword before the fetch statement, so it will wait until the result of this API has been fetched before moving forward to the next line.</p><h3 id="part-21-async-await-challenge-">Part #21: Async &amp; Await (Challenge)</h3><p>This is the last challenge of this course, and it is of course about Async &amp; Await. You will be asked to first try converting the following promise-based code into using Async &amp; Await:</p><pre><code class="language-js">function resolveAfter3Seconds() {
return new Promise(resolve =&gt; {
setTimeout(() =&gt; {
resolve('resolved');
}, 3000);
});
}
</code></pre><p>Don’t worry if you can’t solve it completely. Dylan will explain in detail how to do it. By the end of the lesson, you will be confident enough to start using it immediately.</p><h3 id="part-22-sets">Part #22: Sets</h3><p>In the final lecture of the course, you will be learning about a very important data structure, Set. This is an object which lets you store unique values. So whenever you want to have a collection which contains only unique values, you can use Sets.</p><pre><code class="language-js">const set1 = new Set([1, 2, 3, 4, 5]);
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
