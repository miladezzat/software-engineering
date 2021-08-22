---
card: "https://cdn-media-2.freecodecamp.org/w1280/5fcb4bbce6787e098393a6fd.jpg"
tags: [JavaScript]
description: "Over the past few years, there have been many updates to the "
author: "Milad E. Fahmy"
title: "Modern JavaScript – Imports, Exports, Let, Const, and Promises in ES6+"
created: "2021-08-16T10:04:23+02:00"
modified: "2021-08-16T10:04:23+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-es6 tag-promises tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">Modern JavaScript – Imports, Exports, Let, Const, and Promises in ES6+</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5fcb4bbce6787e098393a6fd.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5fcb4bbce6787e098393a6fd.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5fcb4bbce6787e098393a6fd.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5fcb4bbce6787e098393a6fd.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5fcb4bbce6787e098393a6fd.jpg" alt="Modern JavaScript – Imports, Exports, Let, Const, and Promises in ES6+">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Over the past few years, there have been many updates to the JavaScript language. And these updates are very useful if you want to improve your coding.</p><p>​Keeping abreast of the newest developments in the language is really important. It can help you get a higher paying job, keep up to date with the latest trends, improve your code quality, and excel in your current job.</p><p>And you definitely need to know the latest features if you're trying to learn a JavaScript library like React or framework like Angular or Vue.</p><p>Recently, there have been many useful additions to JavaScript like the <strong>Nullish coalescing operator</strong>, <strong>optional chaining</strong>, <strong>Promises</strong>, <strong>async/await</strong>, <strong>ES6 destructuring</strong>, and more.</p><p>So today, we will look at some of these concepts which every JavaScript developer should be aware of.</p><p>Let's get started and dive into the things you need to know about JS.</p><h2 id="let-and-const-in-javascript">Let and const in JavaScript</h2><p>Before ES6, JavaScript used the <code>var</code> keyword which only used function and global scope. There was no block-level scope.</p><p>With the addition of <code>let</code> and <code>const</code> JavaScript added block scoping.</p><h3 id="how-to-use-let-in-javascript">How to use let in JavaScript</h3><p>When we declare a variable using the <code>let</code> keyword, we can<strong> assign</strong> a new value to that variable later but we cannot<strong> re-declare</strong> it with the same name.</p><pre><code class="language-js">// ES5 Code
var value = 10;
console.log(value); // 10
var value = "hello";
console.log(value); // hello
var value = 30;
console.log(value); // 30
</code></pre><p>As you can see above, we have re-declared the variable <code>value</code> using the <code>var</code> keyword multiple times.</p><p>Before ES6, we were able to re-declare a variable that had already been declared before if it wasn't used meaningfully and was instead causing confusion.</p><p>But what if we already had a variable declared with the same name somewhere else and we're re-declaring it without realizing it? Then we might override the variable value, causing some difficult to debug issues.</p><p>So when you use the <code>let</code> keyword, you will get an error when you try to re-declare the variable with the same name – which is a good thing.</p><pre><code class="language-js">// ES6 Code
let value = 10;
console.log(value); // 10
let value = "hello"; // Uncaught SyntaxError: Identifier 'value' has already been declared
</code></pre><p>But, the following code is valid:</p><pre><code class="language-js">// ES6 Code
let value = 10;
console.log(value); // 10
value = "hello";
console.log(value); // hello
</code></pre><p>We don't get an error in the above code because we're <strong>re-assigning</strong> a new value to the &nbsp;<code>value</code> variable. But we're <strong>not re-declaring</strong> <code>value</code> again.</p><p>Now, take a look at the below code:</p><pre><code class="language-js">// ES5 Code
var isValid = true;
if(isValid) {
var number = 10;
console.log('inside:', number); // inside: 10
}
console.log('outside:', number); // outside: 10
</code></pre><p>As you can see in this code, when we declare a variable with the <code>var</code> keyword, it's available outside the <code>if</code> block also.</p><p>Now take a look at the below code:</p><pre><code class="language-js">// ES6 Code
let isValid = true;
if(isValid) {
let number = 10;
console.log('inside:', number); // inside: 10
}
console.log('outside:', number); // Uncaught ReferenceError: number is not defined
</code></pre><p>As you can see, the <code>number</code> variable when declared using the <code>let</code> keyword is only accessible inside the <code>if</code> block. Outside the block it's not available, so we got a reference error when we tried to access it outside the <code>if</code> block.</p><p>But if there is a <code>number</code> variable outside the <code>if</code> block, then it will work as shown below:</p><pre><code class="language-js">// ES6 Code
let isValid = true;
let number = 20;
if(isValid) {
let number = 10;
console.log('inside:', number); // inside: 10
}
console.log('outside:', number); // outside: 20
</code></pre><p>Here, we have two <code>number</code> variables in a separate scope. So outside the <code>if</code> block, the value of <code>number</code> will be 20.</p><p>Take a look at the below code:</p><pre><code class="language-js">// ES5 Code
for(var i = 0; i &lt; 10; i++){
console.log(i);
}
console.log('outside:', i); // 10
</code></pre><p>When using the <code>var</code> keyword, <code>i</code> is available even outside the <code>for</code> loop.</p><pre><code class="language-js">// ES6 Code
for(let i = 0; i &lt; 10; i++){
console.log(i);
}
console.log('outside:', i); // Uncaught ReferenceError: i is not defined
</code></pre><p>But when using the <code>let</code> keyword, it's not available outside the loop.</p><p>So as you can see from the above code samples, using <code>let</code> makes the variable available only inside that block and it's not accessible outside the block.</p><p>We can also create a block by a pair of curly brackets like this:</p><pre><code class="language-js">let i = 10;
{
let i = 20;
console.log('inside:', i); // inside: 20
i = 30;
console.log('i again:', i); // i again: 30
}
console.log('outside:', i); // outside: 10
</code></pre><p>If you remember, I said we cannot re-declare a <code>let</code> based variable in the same block but we can re-declare it in another block. As you can see in the above code, we have re-declared <code>i</code> and assigned a new value of <code>20</code> inside the block. Once declared, that variable value will be available only in that block.</p><p>Outside the block, when we printed that variable, we got <code>10</code> instead of the previously assigned value of <code>30</code> because outside the block, the inside <code>i</code> variable does not exist.</p><p>If we don't have the variable <code>i</code> declared outside, then we'll get an error as you can see in the below code:</p><pre><code class="language-js">{
let i = 20;
console.log('inside:', i); // inside: 20
i = 30;
console.log('i again:', i); // i again: 30
}
console.log('outside:', i); // Uncaught ReferenceError: i is not defined
</code></pre><h3 id="how-to-use-const-in-javascript">How to use const in JavaScript</h3><p>The <code>const</code> keyword works exactly the same as the <code>let</code> keyword in its block scoping functionality. So let's look at how they differ from each other.</p><p>When we declare a variable as <code>const</code>, it's considered a constant variable whose value will never change.</p><p>In the case of <code>let</code>, we're able to assign a new value to that variable later like this:</p><pre><code class="language-js">let number = 10;
number = 20;
console.log(number); // 20
</code></pre><p>But we can't do that in case of <code>const</code>:</p><pre><code class="language-js">const number = 10;
number = 20; // Uncaught TypeError: Assignment to constant variable.
</code></pre><p>We can't even<strong> re-declare</strong> a <code>const</code> variable.</p><pre><code class="language-js">const number = 20;
console.log(number); // 20
const number = 10; // Uncaught SyntaxError: Identifier 'number' has already been declared
</code></pre><p>Now, take a look at the below code:</p><pre><code class="language-js">const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr); // [1, 2, 3, 4, 5]
</code></pre><p>We said that the <code>const</code> variable is constant whose value will never change – but we have changed the constant array above. So how does that make sense?</p><blockquote>Note: Arrays are reference types and not primitive types in JavaScript</blockquote><p>So what actually gets stored in <code>arr</code> is not the actual array but only the reference (address) of the memory location where the actual array is stored.</p><p>So by doing <code>arr.push(5);</code> we're not actually changing the reference where the <code>arr</code> points to, but we're changing the values stored at that reference.</p><p>The same is the case with objects:</p><pre><code class="language-js">const obj = {
name: 'David',
age: 30
};
obj.age = 40;
console.log(obj); // { name: 'David', age: 40 }
</code></pre><p>Here, also we're not changing the reference of where the <code>obj</code> points to but we're changing the values stored at that reference.</p><p>So the above code will work, but the below code will not work.</p><pre><code class="language-js">const obj = { name: 'David', age: 30 };
const obj1 = { name: 'Mike', age: 40 };
obj = obj1; // Uncaught TypeError: Assignment to constant variable.
</code></pre><p>The above code does not work because we're trying to change the reference that the &nbsp;<code>const</code> variable points to.</p><p>So the key point to remember when using const is that, when we declare a variable as a constant using const we cannot re-define it. We also cannot re-assign that variable, but we can change the values stored at that location if the variable is of reference type.</p><p>So the below code is invalid because we're re-assigning a new value to it.</p><pre><code class="language-js">const arr = [1, 2, 3, 4];
arr = [10, 20, 30]; // Uncaught TypeError: Assignment to constant variable.
</code></pre><p>But note that we can change the values inside the array, as we saw previously.</p><p>The following code of re-defining a <code>const</code> variable is also invalid.</p><pre><code class="language-js">const name = "David";
const name = "Raj"; // Uncaught SyntaxError: Identifier 'name' has already been declared
</code></pre><h3 id="let-and-const-wrap-up">let and const wrap up</h3><ul><li>The keywords <code>let</code> and <code>const</code> add block scoping in JavaScript.</li><li>When we declare a variable as <code>let</code>, we cannot <code>re-define</code> or <code>re-declare</code> another let variable with the same name in the same scope (function or block scope) but we can <code>re-assign</code> a value to it.</li><li>When we declare a variable as <code>const</code>, we cannot <code>re-define</code> or <code>re-declare</code> another <code>const</code> variable with the same name in the same scope (function or block scope). But we can change the values stored in that variable if the variable is of a reference type like an array or object.</li></ul><p>Alright, let's move on to the next big topic: promises.</p><h2 id="promises-in-javascript">Promises in JavaScript</h2><p>Promises are one of the most important yet confusing and difficult to understand part of JavaScript. And most new devs, as well as experienced ones, struggle to understand them.</p><p>Promises were added in ES6 as a native implementation.</p><p>So what is a promise? A promise represents an asynchronous operation to be completed in the future.</p><p>Previously, Before ES6, there was no way to wait for something to perform some operation.</p><p>For example, when we wanted to make an API call, there was no way to wait until the results came back before ES6.</p><p>For that, we used to use external libraries like Jquery or Ajax which had their own implementation of promises. But there was no browser implemented promise thing.</p><p>But now using Promises in ES6, we can make an API call ourselves and wait until it's done to perform some operation.</p><h3 id="how-to-create-a-promise">How to create a Promise</h3><p>To create a promise we need to use the <code>Promise</code> constructor function like this:</p><pre><code class="language-js">const promise = new Promise(function(resolve, reject) {
});
</code></pre><p>The <code>Promise</code> constructor takes a function as an argument and that function internally receives <code>resolve</code> and <code>reject</code> as parameters.</p><p>The <code>resolve</code> and <code>reject</code> parameters are actually functions that we can call depending on the outcome of the asynchronous operation.</p><p>A <code>Promise</code> goes through three states:</p><ul><li>Pending</li><li>Fulfilled</li><li>Rejected</li></ul><p>When we create a promise, it’s in a pending state. When we call the <code>resolve</code> function, it goes in a fulfilled state and if we call <code>reject</code> it will go in the rejected state.</p><p>To simulate the long-running or asynchronous operation, we will use the <code>setTimeout</code> function.</p><pre><code class="language-js">const promise = new Promise(function(resolve, reject) {
setTimeout(function() {
const sum = 4 + 5;
resolve(sum);
}, 2000);
});
</code></pre><p>Here, we've created a promise which will resolve to the sum of <code>4</code> and <code>5</code> after a 2000ms (2 second) timeout is over.</p><p>To get the result of the successful promise execution, we need to register a callback using <code>.then</code> like this:</p><pre><code class="language-js">const promise = new Promise(function(resolve, reject) {
setTimeout(function() {
const sum = 4 + 5;
resolve(sum);
}, 2000);
});
promise.then(function(result) {
console.log(result); // 9
});
</code></pre><p>So whenever we call <code>resolve</code>, the promise will return back the value passed to the <code>resolve</code> function which we can collect using the <code>.then</code> handler.</p><p>If the operation is not successful, then we call the <code>reject</code> function like this:</p><pre><code class="language-js">const promise = new Promise(function(resolve, reject) {
setTimeout(function() {
const sum = 4 + 5 + 'a';
if(isNaN(sum)) {
reject('Error while calculating sum.');
} else {
resolve(sum);
}
}, 2000);
});
promise.then(function(result) {
console.log(result);
});
console.log(result);
}).catch(function(error) {
console.log(error);
});
console.log('first .then handler');
return result;
}).then(function(result) {
console.log('second .then handler');
console.log(result);
}).catch(function(error) {
console.log(error);
});
return new Promise(function(resolve, reject) {
setTimeout(function() {
const sum = 4 + 5;
if(isNaN(sum)) {
reject('Error while calculating sum.');
} else {
resolve(sum);
}
}, 2000);
});
}
</code></pre><p>This way, we can use the function parameters inside the promise, making the function truly dynamic.</p><pre><code class="language-js">function createPromise(a, b) {
return new Promise(function(resolve, reject) {
setTimeout(function() {
const sum = a + b;
if(isNaN(sum)) {
reject('Error while calculating sum.');
} else {
resolve(sum);
}
}, 2000);
});
}
createPromise(1,8)
.then(function(output) {
console.log(output); // 9
});
// OR
createPromise(10,24)
.then(function(output) {
console.log(output); // 34
});
setTimeout(function() {
const sum = 4 + 5;
resolve({
a: 4,
b: 5,
sum
});
}, 2000);
});
promise.then(function(result) {
console.log(result);
}).catch(function(error) {
console.log(error);
});
setTimeout(() =&gt; {
const sum = 4 + 5 + 'a';
if(isNaN(sum)) {
reject('Error while calculating sum.');
} else {
resolve(sum);
}
}, 2000);
});
promise.then((result) =&gt; {
console.log(result);
});
</code></pre><p>You can either use ES5 or ES6 function syntax depending on your preferences and needs.</p><h2 id="es6-import-and-export-syntax">ES6 Import And Export Syntax</h2><p>Before ES6 came into play, we used multiple <code>script</code> tags in a single HTML file to import different JavaScript files like this:</p><pre><code class="language-js">&lt;script type="text/javascript" src="home.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="profile.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="user.js"&gt;&lt;/script&gt;
</code></pre><p>So, if we had a variable with the same name in different JavaScript files, it would create a naming conflict and the value you were expecting would not be the actual value you got.</p><p>ES6 has fixed this issue with the concept of modules.</p><p>Every JavaScript file we write in ES6 is known as a module. The variables and functions we declare in each file are not available to other files until we specifically export them from that file and import them into another file.</p><p>So the functions and variables defined in the file are private to each file and can’t be accessed outside the file until we export them.</p><p>There are two types of exports:</p><ul><li>Named Exports: There can be multiple named exports in a single file</li><li>Default Exports: There can be only one default export in a single file</li></ul><h3 id="named-exports-in-javascript">Named Exports in JavaScript</h3><p>To export a single value as a named export, we export it like this:</p><pre><code class="language-js">export const temp = "This is some dummy text";
</code></pre><p>If we have multiple things to export, we can write an export statement on a separate line instead of in front of variable declaration. We specify the things to export in curly brackets.</p><pre><code class="language-js">const temp1 = "This is some dummy text1";
const temp2 = "This is some dummy text2";
export { temp1, temp2 };
</code></pre><p>Note that the export syntax is not an object literal syntax. So in ES6, to export something we can't use key-value pairs like this:</p><pre><code class="language-js"> // This is invalid syntax of export in ES6
export { key1: value1, key2: value2 }
</code></pre><p>To import the things we exported as a named export, we use the following syntax:</p><pre><code class="language-js">import { temp1, temp2 } from './filename';
</code></pre><p>Note that while importing something from the file, we don't need to add the <code>.js</code> extension to the filename as it's considered by default.</p><pre><code class="language-js">// import from functions.js file from current directory
import { temp1, temp2 } from './functions';
// import from functions.js file from parent of current directory
import { temp1 } from '../functions';
</code></pre><p>Here's a Code Sandbox demo: <a href="https://codesandbox.io/s/hardcore-pond-q4cjx">https://codesandbox.io/s/hardcore-pond-q4cjx</a></p><p><strong>One thing to note is that the name used while exporting has to match the name we use while importing.</strong></p><p>So if you are exporting as:</p><pre><code class="language-js">// constants.js
export const PI = 3.14159;
</code></pre><p>then while importing you have to use the same name used while exporting:</p><pre><code class="language-js">import { PI } from './constants';
</code></pre><p>You can't use any other name like this:</p><pre><code class="language-js">import { PiValue } from './constants'; // This will throw an error
</code></pre><p>But if you already have the variable with the same name as the exported variable, you can use the renaming syntax while importing like this:</p><pre><code class="language-js">import { PI as PIValue } from './constants';
</code></pre><p>Here we have renamed <code>PI</code> to <code>PIValue</code> and so we can’t use the <code>PI</code> variable name now. Instead, we have to use the <code>PIValue</code> variable to get the exported value of <code>PI</code>.</p><p>We can also use the renaming syntax at the time of exporting:</p><pre><code class="language-js">// constants.js
const PI = 3.14159;
export { PI as PIValue };
</code></pre><p>then while importing we have to use <code>PIValue</code> like this:</p><pre><code class="language-js">import { PIValue } from './constants';
</code></pre><p>To export something as a named export, we have to declare it first.</p><pre><code class="language-js">export 'hello'; // this will result in error
export const greeting = 'hello'; // this will work
export { name: 'David' }; // This will result in error
export const object = { name: 'David' }; // This will work
</code></pre><p><strong>The order in which we import the multiple named exports is not important.</strong></p><p>Take a look at the below <code>validations.js</code> file:</p><pre><code class="language-js">// utils/validations.js
const isValidEmail = function(email) {
if (/^[^@ ]+@[^@ ]+\.[^@ \.]{2,}$/.test(email)) {
return "email is valid";
} else {
return "email is invalid";
}
};
const isValidPhone = function(phone) {
if (/^[\\(]\d{3}[\\)]\s\d{3}-\d{4}$/.test(phone)) {
return "phone number is valid";
} else {
return "phone number is invalid";
}
};
function isEmpty(value) {
if (/^\s*$/.test(value)) {
return "string is empty or contains only spaces";
} else {
return "string is not empty and does not contain spaces";
}
}
export { isValidEmail, isValidPhone, isEmpty };
</code></pre><p>and in <code>index.js</code> we use these functions as shown below:</p><pre><code class="language-js">// index.js
import { isEmpty, isValidEmail } from "./utils/validations";
console.log("isEmpty:", isEmpty("abcd")); // isEmpty: string is not empty and does not contain spaces
console.log("isValidEmail:", isValidEmail("abc@11gmail.com")); // isValidEmail: email is valid
console.log("isValidEmail:", isValidEmail("ab@c@11gmail.com")); // isValidEmail: email is invalid
</code></pre><p>Here's a Code Sandbox demo: <a href="https://codesandbox.io/s/youthful-flower-xesus">https://codesandbox.io/s/youthful-flower-xesus</a></p><p>As you can see, we can import only the required exported things and in any order, so we don’t need to check in what order we exported in another file. That’s the beauty of named exports.</p><h3 id="default-exports-in-javascript">Default Exports in JavaScript</h3><p>As I said earlier, there can be at most one default export in a single file.</p><p>You can, however, combine multiple named exports and one default export in a single file.</p><p>To declare a default export we add the default keyword in front of the export keyword like this:</p><pre><code class="language-js">//constants.js
const name = 'David';
export default name;
</code></pre><p>To import the default export we don’t add the curly brackets as we did in named export like this:</p><pre><code class="language-js">import name from './constants';
</code></pre><p>If we have multiple named exports and one default export like this:</p><pre><code class="language-js">// constants.js
export const PI = 3.14159;
export const AGE = 30;
const NAME = "David";
export default NAME;
</code></pre><p>then to import everything on a single line we need to use the default exported variable before the curly bracket only.</p><pre><code class="language-js">// NAME is default export and PI and AGE are named exports here
import NAME, { PI, AGE } from './constants';
</code></pre><p><strong>One specialty of default export is that we can change the name of the exported variable while importing:</strong></p><pre><code class="language-js">// constants.js
const AGE = 30;
export default AGE;
</code></pre><p>And in another file, we can use another name while importing</p><pre><code class="language-js">import myAge from ‘./constants’;
console.log(myAge); // 30
</code></pre><p>Here, we have changed the name of the default exported variable from <code>AGE</code> to <code>myAge</code>.</p><p>This works because there can be only one default export so you can name it whatever you want.</p><p>Another thing to note about default export is that the export default keyword cannot come before variable declaration like this:</p><pre><code class="language-js">// constants.js
export default const AGE = 30; // This is an error and will not work
</code></pre><p>so we have to use the export default keyword on a separate line like this:</p><pre><code class="language-js">// constants.js
const AGE = 30;
export default AGE;
</code></pre><p>We can, however, export default without declaring the variable like this:</p><pre><code class="language-js">//constants.js
export default {
name: "Billy",
age: 40
};
</code></pre><p>and in another file use it like this:</p><pre><code class="language-js">import user from './constants';
console.log(user.name); // Billy
console.log(user.age); // 40
</code></pre><p>There is another way of importing all the variables exported in a file using the following syntax:</p><pre><code class="language-js">import * as constants from './constants';
</code></pre><p>Here, we are importing all the named and default exports we have in <code>constants.js</code> and stored in the <code>constants</code> variable. So, <code>constants</code> will become an object now.</p><pre><code class="language-js">// constants.js
export const USERNAME = "David";
export default {
name: "Billy",
age: 40
};
</code></pre><p>And in another file, we use it as below:</p><pre><code class="language-js">// test.js
import * as constants from './constants';
console.log(constants.USERNAME); // David
console.log(constants.default); // { name: "Billy", age: 40 }
console.log(constants.default.age); // 40
</code></pre><p>Here's a Code Sandbox demo: <a href="https://codesandbox.io/s/green-hill-dj43b">https://codesandbox.io/s/green-hill-dj43b</a></p><p>If you don’t want to export on separate lines for default and named<br>exports, you can combine it as shown below:</p><pre><code class="language-js">// constants.js
const PI = 3.14159; const AGE = 30;
const USERNAME = "David";
const USER = {
name: "Billy",
age: 40
};
export { PI, AGE, USERNAME, USER as default };
</code></pre><p>Here, we are exporting <code>USER</code> as the default export and others as named exports.</p><p>In another file, you can use it like this:</p><pre><code class="language-js">import USER, { PI, AGE, USERNAME } from "./constants";
</code></pre><p>Here's a Code Sandbox demo: <a href="https://codesandbox.io/s/eloquent-northcutt-7btp1">https://codesandbox.io/s/eloquent-northcutt-7btp1</a></p><h3 id="in-summary-">In summary:</h3><ol><li>In ES6, data declared in one file is not accessible to another file until it is exported from that file and imported into another file.</li><li>If we have a single thing in a file to export like class declaration, we use default export otherwise we use named export. We can also combine default and named exports in a single file.</li></ol><h2 id="default-parameters-in-javascript">Default Parameters in JavaScript</h2><p>ES6 has added a pretty useful feature of providing default parameters while defining functions.</p><p>Suppose we have an application, where once the user login into the system, we show them a welcome message like this:</p><pre><code class="language-js">function showMessage(firstName) {
return "Welcome back, " + firstName;
}
console.log(showMessage('John')); // Welcome back, John
</code></pre><p>But what if we don’t have the user name in our database as it was an optional field while registering? Then we can show the <code>Welcome Guest</code> message to the user after login.</p><p>So we first need to check if the <code>firstName</code> is provided and then display the corresponding message. Before ES6, we would have had to write code like this:</p><pre><code class="language-js">function showMessage(firstName) {
if(firstName) {
return "Welcome back, " + firstName;
} else {
return "Welcome back, Guest";
}
}
console.log(showMessage('John')); // Welcome back, John
console.log(showMessage()); // Welcome back, Guest
</code></pre><p>But now in ES6 using default function parameters we can write the above code as shown below:</p><pre><code class="language-js">function showMessage(firstName = 'Guest') {
return "Welcome back, " + firstName;
}
console.log(showMessage('John')); // Welcome back, John
console.log(showMessage()); // Welcome back, Guest
</code></pre><p><strong>We can assign any value as a default value to the function parameter.</strong></p><pre><code class="language-js">function display(a = 10, b = 20, c = b) {
console.log(a, b, c);
}
display(); // 10 20 20
display(40); // 40 20 20
display(1, 70); // 1 70 70
display(1, 30, 70); // 1 30 70
</code></pre><p>As you can see, we have assigned unique values to a and b function parameters but for c we're assigning the value of b. So whatever value we have provided for b will be assigned to c also if there is no specific value provided for c while calling the function.</p><p>In the above code, we have not provided all the arguments to the function. So the above function calls will be the same as below:</p><pre><code class="language-js">display(); // is same as display(undefined, undefined, undefined)
display(40); // is same as display(40, undefined, undefined)
display(1, 70); // is same as display(1, 70, undefined)
</code></pre><p>So if the argument passed is <code>undefined</code>, the default value will be used for the corresponding parameter.</p><p><strong>We can also assign complex or calculated values as a default value.</strong></p><pre><code class="language-js">const defaultUser = {
name: 'Jane',
location: 'NY',
job: 'Software Developer'
};
const display = (user = defaultUser, age = 60 / 2 ) =&gt; {
console.log(user, age);
};
display();
/* output
{
name: 'Jane',
location: 'NY',
job: 'Software Developer'
} 30
*/
</code></pre><p>Now, take a look at the below ES5 code:</p><pre><code class="language-js">// ES5 Code
function getUsers(page, results, gender, nationality) {
var params = "";
if(page === 0 || page) {
params += `page=${page}&amp;`;
}
if(results) {
params += `results=${results}&amp;`;
}
if(gender) {
params += `gender=${gender}&amp;`;
}
if(nationality) {
params += `nationality=${nationality}`;
}
fetch('https://randomuser.me/api/?' + params)
.then(function(response) {
return response.json();
})
.then(function(result) {
console.log(result);
})
.catch(function(error) {
console.log('error', error);
});
}
getUsers(0, 10, 'male', 'us');
</code></pre><p>In this code, we’re making an API call to the <a href="https://randomuser.me/">Random user</a> API by passing various optional parameters in the <code>getUsers</code> function.</p><p>So before making the API call, we have added various if conditions to check if the parameter is added or not, and based on that we’re constructing the query string like this: <code>https://randomuser.me/api/? page=0&amp;results=10&amp;gender=male&amp;nationality=us</code>.</p><p>But instead of adding so many if conditions, we can use the default parameters while defining the function parameters as shown below:</p><pre><code class="language-js">function getUsers(page = 0, results = 10, gender = 'male',nationality = 'us') {
fetch(`https://randomuser.me/api/?page=${page}&amp;results=${results}&amp;gender=${gender}&amp;nationality=${nationality}`)
.then(function(response) {
return response.json();
})
.then(function(result) {
console.log(result);
})
.catch(function(error) {
console.log('error', error);
});
}
getUsers();
</code></pre><p>As you can see, we have simplified the code a lot. So when we don’t provide any argument to the <code>getUsers</code> function, it will take default values and we can also provide our own values like this:</p><pre><code class="language-js">getUsers(1, 20, 'female', 'gb');
</code></pre><p>So it will override the default parameters of the function.</p><h3 id="null-is-not-equal-to-undefined">null is not equal to undefined</h3><p>But you need to be aware of one thing: <code>null</code> and <code>undefined</code> are two different things while defining default parameters.</p><p>Take a look at the below code:</p><pre><code class="language-js">function display(name = 'David', age = 35, location = 'NY'){
console.log(name, age, location);
}
display('David', 35); // David 35 NY
display('David', 35, undefined); // David 35 NY
</code></pre><p>As we have not provided the third value for the location parameter in the first call to display, it will be <code>undefined</code> by default so the default value of location will be used in both of the function calls. But the below function calls are not equal.</p><pre><code class="language-js">display('David', 35, undefined); // David 35 NY
display('David', 35, null); // David 35 null
</code></pre><p>When we pass <code>null</code> as an argument, we’re specifically saying to assign a <code>null</code> value to the <code>location</code> parameter which is not the same as <code>undefined</code>. So it will not take the default value of <code>NY</code>.</p><h2 id="array-prototype-includes">Array.prototype.includes</h2><p>ES7 has added a new function that checks if an element is present in the array or not and returns a boolean value of either <code>true</code> or <code>false</code>.</p><pre><code class="language-js">// ES5 Code
const numbers = ["one", "two", "three", "four"];
console.log(numbers.indexOf("one") &gt; -1); // true
console.log(numbers.indexOf("five") &gt; -1); // false</code></pre><p>The same code using the Array <code>includes</code> method can be written as shown below:</p><pre><code class="language-js">// ES7 Code
const numbers = ["one", "two", "three", "four"];
console.log(numbers.includes("one")); // true
console.log(numbers.includes("five")); // false</code></pre><p>So using the Array <code>includes</code> methods makes code short and easy to understand.</p><p>The <code>includes</code> method also comes in handy when comparing with different values.</p><p>Take a look at the below code:</p><pre><code class="language-js">const day = "monday";
if(day === "monday" || day === "tuesday" || day === "wednesday") {
// do something
}</code></pre><p>The above code using the <code>includes</code> method can be simplified as shown below:</p><pre><code class="language-js">const day = "monday";
if(["monday", "tuesday", "wednesday"].includes(day)) {
// do something
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
