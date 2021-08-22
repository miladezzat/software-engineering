---
card: "https://cdn-media-1.freecodecamp.org/images/1*bBlPwnLZ3hoVAUbxoczzqQ.png"
tags: [JavaScript]
description: "As a part of our collaboration with freeCodeCamp, their emine"
author: "Milad E. Fahmy"
title: "Learn ES6 in this free 28-part Scrimba course"
created: "2021-08-16T10:07:50+02:00"
modified: "2021-08-16T10:07:50+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-es6 tag-web-development tag-coding tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Learn ES6 in this free 28-part Scrimba course</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*bBlPwnLZ3hoVAUbxoczzqQ.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*bBlPwnLZ3hoVAUbxoczzqQ.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*bBlPwnLZ3hoVAUbxoczzqQ.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*bBlPwnLZ3hoVAUbxoczzqQ.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*bBlPwnLZ3hoVAUbxoczzqQ.png" alt="Learn ES6 in this free 28-part Scrimba course">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
var catName = "Beau";
// Works fine!
let dogName = "Quincy";
let dogName = "Beau";
// Error: TypeError: unknown: Duplicate declaration "dogName"
const sentence = fcc + " is cool!";
sentence = fcc + " is amazing!";
// Error: SyntaxError: unknown: "sentence" is read-only
</code></pre><h3 id="5-mutate-an-array-declared-with-const">5. Mutate an Array Declared with const</h3><p>You should be careful with <code>const</code>, though as it is still possible to mutate arrays assigned with it.</p><pre><code class="language-js">const myArray = [5, 7, 2];
myArray[0] = 2;
myArray[1] = 7;
myArray[2] = 5;
console.log(myArray);
// [2, 7, 5]
</code></pre><p>Same applies to objects.</p><h3 id="6-prevent-object-mutation">6. Prevent Object Mutation</h3><p>In order to avoid object and array mutation, you can use <code>Object.freeze()</code>:</p><pre><code class="language-js">const MATH_CONSTANTS = {
PI: 3.14
};
Object.freeze(MATH_CONSTANTS);
MATH_CONSTANTS.PI = 99;
// TypeError: Cannot assign to read-only property 'PI' of object '#&lt;Object&gt;'
</code></pre><p>If you wish to freeze arrays, you can also use <code>Object.freeze()</code> and pass your array, but it might not work on some old browsers.</p><h3 id="7-use-arrow-functions-to-write-concise-anonymous-functions">7. Use Arrow Functions to Write Concise Anonymous Functions</h3><p>ES6 also introduces a shorter way of writing anonymous functions.</p><pre><code class="language-js">// ES5 anonymous function
var magic = function() {
return new Date();
};
// A shorter ES6 arrow function
var magic = () =&gt; {
return new Date();
};
// And we can shorten it even further
var magic = () =&gt; new Date();
</code></pre><h3 id="8-write-arrow-functions-with-parameters">8. Write Arrow Functions with Parameters</h3><p>Passing parameters to arrow functions is also easy.</p><pre><code class="language-js">var myConcat = (arr1, arr2) =&gt; arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));
// [1, 2, 3, 4, 5]
function increment(number, value = 1) {
return number + value;
};
console.log(increment(5, 2)); // 7
console.log(increment(5)); // 6
</code></pre><h3 id="11-use-the-rest-operator-with-function-parameters">11. Use the Rest Operator with Function Parameters</h3><p>Rest operator allows you to create a function that takes a variable number of arguments.</p><pre><code class="language-js">function sum(...args) {
return args.reduce((a, b) =&gt; a + b);
};
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4)); // 10
</code></pre><h3 id="12-use-the-spread-operator-to-evaluate-arrays-in-place">12. Use the Spread Operator to Evaluate Arrays In-Place</h3><p>The <em>spread</em> operator looks exactly like the <em>rest</em> operator and looks like this: <code>…</code>, but it expands an already existing array into individual parts.</p><pre><code class="language-js">const monthsOriginal = ['JAN', 'FEB', 'MAR'];
let monthsNew = [...monthsOriginal];
monthsOriginal[0] = 'potato';
console.log(monthsOriginal); // ['potato', 'FEB', 'MAR']
console.log(monthsNew); // ['JAN', 'FEB', 'MAR']
</code></pre><h3 id="13-use-destructuring-assignment-to-assign-variables-from-objects">13. Use Destructuring Assignment to Assign Variables from Objects</h3><p>Destructuring is a special syntax for neatly assigning values taken directly from an object to a new variable.</p><pre><code class="language-js">// Object we want to destructure
var voxel = {x: 3.6, y: 7.4, z: 6.54 };
// This is how we would do it in ES5
var a = voxel.x; // a = 3.6
var b = voxel.y; // b = 7.4
var c = voxel.z; // c = 6.54
// A shorter ES6 way
const { x : a, y : b, z : c } = voxel;
// a = 3.6, b = 7.4, c = 6.54
</code></pre><h3 id="14-use-destructuring-assignment-to-assign-variables-from-nested-objects">14. Use Destructuring Assignment to Assign Variables from Nested Objects</h3><p>You can use destructuring to get values out of even nested objects:</p><pre><code class="language-js">const LOCAL_FORECAST = {
today: { min: 72, max: 83 },
tomorrow: { min: 73.3, max: 84.6 }
};
function getMaxOfTmrw(forecast) {
"use strict";
// we get tomorrow object out of the forecast
// and then we create maxOfTomorrow with value from max
const { tomorrow : { max : maxOfTomorrow }} = forecast;
return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));
// 84.6
</code></pre><h3 id="15-use-destructuring-assignment-to-assign-variables-from-arrays">15. Use Destructuring Assignment to Assign Variables from Arrays</h3><p>Do you wonder if destructuring can be used with arrays? Absolutely! There is one important difference though. While destructuring arrays, you cannot specify a value you wish to go into a specific variable and they all go in order.</p><pre><code class="language-js">const [z, x, , y] = [1, 2, 3, 4, 5, 6];
// z = 1;
// x = 2;
// Skip 3
// y = 4;
</code></pre><h3 id="16-use-destructuring-assignment-with-the-rest-operator-to-reassign-array-elements">16. Use Destructuring Assignment with the Rest Operator to Reassign Array Elements</h3><p>Let’s now combine the rest operator with destructuring to supercharge our ES6 skills.</p><pre><code class="language-js">const list = [1,2,3,4,5,6,7,8,9,10];
// Create a and b out of first two members
// Put the rest in a variable called newList
const [ a, b, ...newList] = list;
// a = 1;
// b = 2;
// newList = [3,4,5,6,7,8,9,10];
</code></pre><h3 id="17-use-destructuring-assignment-to-pass-an-object-as-a-function-s-parameters">17. Use Destructuring Assignment to Pass an Object as a Function’s Parameters</h3><p>We can create more readable functions.</p><pre><code class="language-js">const stats = {
max: 56.78,
standard_deviation: 4.34,
median: 34.54,
mode: 23.87,
min: -0.75,
average: 35.85
};
// ES5
function half(stats) {
return (stats.max + stats.min) / 2.0;
};
// ES6 using destructuring
function half({max, min}) {
return (max + min) / 2.0;
};
console.log(half(stats));
// 28.015
</code></pre><h3 id="18-create-strings-using-template-literals">18. Create Strings using Template Literals</h3><p>Template literals help us to create complex strings. They use a special syntax of <code>``</code> and <code>${}</code> where you can combine template text with variables together. For example <code>`Hello, my name is ${myNameVariable} and I love ES6!`</code></p><pre><code class="language-js">const person = {
name: "Zodiac Hasbro",
age: 56
};
// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;
console.log(greeting);
</code></pre><h3 id="19-write-concise-object-literal-declarations-using-simple-fields">19. Write Concise Object Literal Declarations Using Simple Fields</h3><p>ES6 added support for easily defining object literals.</p><pre><code class="language-js">// returns a new object from passed in parameters
const createPerson = (name, age, gender) =&gt; ({
name: name,
age: age,
gender: gender
});
console.log(createPerson("Zodiac Hasbro", 56, "male"));
// { name: "Zodiac Hasbro", age: 56, gender: "male" }
</code></pre><h3 id="20-write-concise-declarative-functions-with-es6">20. Write Concise Declarative Functions with ES6</h3><p>Objects in JavaScript can contain functions.</p><pre><code class="language-js">
const ES5_Bicycle = {
gear: 2,
setGear: function(newGear) {
"use strict";
this.gear = newGear;
}
};
const ES6_Bicycle = {
gear: 2,
setGear(newGear) {
"use strict";
this.gear = newGear;
}
};
ES6_Bicycle.setGear(3);
console.log(ES6Bicycle.gear); // 3
</code></pre><h3 id="21-use-class-syntax-to-define-a-constructor-function">21. Use class Syntax to Define a Constructor Function</h3><p>ES6 provides syntax to create objects using the <code>class</code> keyword:</p><pre><code class="language-js">
var ES5_SpaceShuttle = function(targetPlanet){
this.targetPlanet = targetPlanet;
}
class ES6_SpaceShuttle {
constructor(targetPlanet){
this.targetPlanet = targetPlanet;
}
}
var zeus = new ES6_SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet); // 'Jupiter'
</code></pre><h3 id="22-use-getters-and-setters-to-control-access-to-an-object">22. Use getters and setters to Control Access to an Object</h3><p>With an object, you often want to obtain values of properties and set a value of a property within an object. These are called <em>getters</em> and <em>setters.</em> They exist to hide some underlying code, as it should not be of concern for anyone using the class.</p><pre><code class="language-js">
class Thermostat {
// We create Thermostat using temperature in Fahrenheit.
constructor(temp) {
// _temp is a private variable which is not meant
// to be accessed from outside the class.
this._temp = 5/9 * (temp - 32);
}
// getter for _temp
get temperature(){
return this._temp;
}
// setter for _temp
// we can update temperature using Celsius.
set temperature(updatedTemp){
this._temp = updatedTemp;
}
}
// Create Thermostat using Fahrenheit value
const thermos = new Thermostat(76);
let temp = thermos.temperature;
// We can update value using Celsius
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp) // 26
</code></pre><h3 id="23-understand-the-differences-between-import-and-require">23. Understand the Differences Between import and require</h3><p>In the past, we could only use <code>require</code> to import functions and code from other files. In ES6 we can use <code>import</code>:</p><pre><code class="language-js">
// in string_function.js file
export const capitalizeString = str =&gt; str.toUpperCase()
// in index.js file
import { capitalizeString } from "./string_function"
const cap = capitalizeString("hello!");
console.log(cap); // "HELLO!"
</code></pre><h3 id="24-use-export-to-reuse-a-code-block">24. Use export to Reuse a Code Block</h3><p>You would normally <code>export</code> functions and variables in certain files so that you can import them in other files — and now we can reuse the code!</p><pre><code class="language-js">
const capitalizeString = (string) =&gt; {
return string.charAt(0).toUpperCase() + string.slice(1);
}
// Named export
export { capitalizeString };
// Same line named export
export const foo = "bar";
export const bar = "foo";
</code></pre><h3 id="25-use-to-import-everything-from-a-file">25. Use * to Import Everything from a File</h3><p>If a file exports several different things, you can either import them individually, or you can use <code>*</code> to import everything from a file.</p><p>This is how you would import all the variables from the file in the previous exercise.</p><pre><code class="language-js">
import * as capitalizeStrings from "capitalize_strings";
</code></pre><h3 id="26-create-an-export-fallback-with-export-default">26. Create an Export Fallback with export default</h3><p>We looked at named exports in previous chapters and sometimes there might be a single function or a variable that we want to export from a file — <code>export default</code>, often used as a fallback export too.</p><pre><code class="language-js">
// In math_functions.js file
export default function subtract(x,y) {
return x - y;
}
</code></pre><h3 id="27-import-a-default-export">27. Import a Default Export</h3><p>If you wish to import <code>export default</code> function from the previous exercise, this is how you would do it.</p><p>Note the absence of <code>{}</code> around the <code>subtract</code> function. Default exports don’t need them.</p><pre><code class="language-js">
// In index.js file
import subtract from "math_functions";
subtract(7,4); // returns 3;
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
