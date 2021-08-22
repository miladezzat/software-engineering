---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9a0e740569d1a4ca2335.jpg"
tags: [JavaScript]
description: JavaScript is a scripting language used in webpages to add fu
author: "Milad E. Fahmy"
title: "The Nine Most Common Mistakes Developers Make in JavaScript (and How to Fix Them)"
created: "2021-08-15T19:29:08+02:00"
modified: "2021-08-15T19:29:08+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-productivity tag-self-improvement ">
<header class="post-full-header">
<h1 class="post-full-title">The Nine Most Common Mistakes Developers Make in JavaScript (and How to Fix Them)</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9a0e740569d1a4ca2335.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a0e740569d1a4ca2335.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a0e740569d1a4ca2335.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9a0e740569d1a4ca2335.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9a0e740569d1a4ca2335.jpg" alt="The Nine Most Common Mistakes Developers Make in JavaScript (and How to Fix Them)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>JavaScript is a <a href="https://en.wikipedia.org/wiki/Scripting_language" rel="noreferrer nofollow noopener">scripting language</a> used in webpages to add functionality and interactivity. For a beginner coming from a different programming language, JavaScript is quite easy to understand. With a few tutorials, you should be able to get started with it right away.</p>
<p>However, there are a few common mistakes that many beginner programmers make. In this article, we’ll address nine common mistakes (or bad practices) and their solutions to help you become a better JS developer.</p>
<h2 id="confusing-the-assignment-and-equality-operators">Confusing the assignment (=) and equality (==, ===) operators</h2>
<p>Like its name implies, the <a href="https://www.w3resource.com/javascript/operators/assignment-operator.php#:~:text=Assignment%20Operators,value%20of%20its%20right%20operand.&amp;text=That%20is%2C%20a%20%3D%20b%20assigns,shown%20in%20the%20following%20table." rel="noreferrer nofollow noopener">assignment operator</a>(=) is used to assign values to variables. Developers often confuse it with the equality operator.</p>
<p>Here's an example:</p><pre><code class="language-javascript">const name = "javascript";
if ((name = "nodejs")) {
console.log(name);
}
// output - nodejs</code></pre>
<p>The name variable and ‘nodejs' string are not compared in this case. Instead, 'nodejs' is assigned to name and 'nodejs' is printed to the console.</p>
<p>In JavaScript, the double equal sign(==) and triple equal sign(===) are called comparison operators.</p>
<p>For the code above, this is the appropriate way of comparing values:</p><pre><code class="language-javascript">const name = "javascript";
if (name == "nodejs") {
console.log(name);
}
// no output
// OR
if (name === "nodejs") {
console.log(name);
}
// no output</code></pre>
<p>The difference between these comparison operators is that the double equals performs a <strong>loose</strong> comparison while triple equals performs a <strong>strict</strong> comparison.</p>
<p>In a loose comparison, only the values are compared. But in a strict comparison, the values and datatype are compared.</p>
<p>The following code explains it better:</p><pre><code class="language-javascript">const number = "1";
console.log(number == 1);
// true
console.log(number === 1);
// false</code></pre>
<p>The variable number was assigned a string value of 1. When compared with 1 (of number type) using double equals, it returns true because both values are 1.</p>
<p>But when compared using triple equals, it returns false because each value has a different data type.</p>
<h2 id="expecting-callbacks-to-be-synchronous">Expecting callbacks to be synchronous</h2>
<p>Callbacks are one way that JavaScript handles asynchronous operations. Promises and async/await, however, are preferable methods for handling asynchronous operations because multiple callbacks lead to <a href="http://callbackhell.com/" rel="noreferrer nofollow noopener">callback hell</a>.</p>
<p>Callbacks are not <strong><strong>synchronous</strong></strong>. They are used as a function to be called after an operation when a delayed execution completes.</p>
<p>An example is the global <code>setTimeout​</code> function which receives a callback function as its first argument and a duration (in ms) as a second argument like so:</p><pre><code class="language-javascript">function callback() {
​​    console.log("I am the first");
​​}
​​setTimeout(callback, 300);
​​console.log("I am the last");
​​// output
​​// I am the last
​​// I am the first</code></pre>
<p>After 300 milliseconds, the callback function is called. But before it completes, the rest of the code runs. This is the reason why the last console.log was run first.​​</p>
<p>A common mistake developers make is to misinterpret callbacks as synchronous. For example, a callback which returns a value that would be used for other operations.</p>
<p>​​Here's that mistake:</p><pre><code class="language-javascript">function addTwoNumbers() {
​​    let firstNumber = 5;
​​    let secondNumber;
​​    setTimeout(function () {
​​        secondNumber = 10;
​​    }, 200);
​​    console.log(firstNumber + secondNumber);
​​}
​​addTwoNumbers();
​​// NaN</code></pre>
<p><code>NaN</code>​ is the output because <code>secondNumber​</code> is undefined​. At the time of running <code>firstNumber + secondNumber</code>, <code>secondNumber</code> is still undefined because the <code>setTimeout</code> function would execute the callback after <code>200ms</code>.</p>
<p>The best way to approach this is to execute the rest of the code in the callback function:</p><pre><code class="language-javascript">function addTwoNumbers() {
​​    let firstNumber = 5;
​​    let secondNumber;
​​    setTimeout(function () {
​​        secondNumber = 10;
​​        console.log(firstNumber + secondNumber);
​​    }, 200);
​​}
​​addTwoNumbers();
​​// 15</code></pre>
<h2 id="wrong-references-to-this-">Wrong references to <code>this​</code></h2>
<p><code>this​</code> is a commonly <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this" rel="noreferrer nofollow noopener">misunderstood concept</a> in JavaScript. To use <code>this</code>​ in JavaScript, you really need to understand how it works because it operates a bit differently compared to other languages.</p>
<p>Here's an example of a common mistake when using <code>this​</code>:</p><pre><code class="language-javascript">const obj = {
​​    name: "JavaScript",
​​    printName: function () {
​​        console.log(this.name);
​​    },
​​    printNameIn2Secs: function () {
​​        setTimeout(function () {
​​            console.log(this.name);
​​        }, 2000);
​​    },
​​};
​​obj.printName();
​​// JavaScript
​​obj.printNameIn2Secs();
​​// undefined</code></pre>
<p>​​The first result is <strong><code>JavaScript</code></strong> because <code>this.name</code>​ correctly points to the object's name property. The second result is <code><strong>undefined</strong>​</code> because <code>this​</code> has lost reference to the object's properties (including name).</p>
<p>This is because <code>this​</code> depends on the object calling the function which it lives in. There is a <code>this</code>​ variable in every function but the object it points to is determined by the object calling it.</p>
<p>The <code>this​</code> in <code>obj.printName()</code>​ points directly to <code>obj</code>​. The <code>this</code>​ in <code>obj.printNameIn2Secs​</code> points directly to <code>obj​</code>. But the <code>this​</code> in the callback function of <code>setTimeout​</code> does not point to any object because no object called it.</p>
<p>For an object to have called <code>setTimeout​</code>, something like <code>obj.setTimeout...​</code> would be executed. Since there is no object calling that function, the default object (which is <code>window</code>​) is used.</p>
<p>​​ <code>name</code>​ does not exist on window​, resulting in <code>undefined</code>​.</p>
<p>The best ways to go about retaining the reference to <code>this</code>​ in <code>setTimeout</code> is to use <code>bind​</code>, <code>call​</code>, <code>apply</code>​ or arrow functions (introduced in ES6). Unlike normal functions, arrow functions do not create their own <code>this</code>​.</p>
<p>​​So, the following will retain its reference to <code>this​</code>:​​</p><pre><code class="language-javascript">​​const obj = {
​​    name: "JavaScript",
​​    printName: function () {
​​        console.log(this.name);
​​    },
​​    printNameIn2Secs: function () {
​​        setTimeout(() =&gt; {
​​            console.log(this.name);
​​        }, 2000);
​​    },
​​};
​​obj.printName();
​​// JavaScript
​​obj.printNameIn2Secs();
​​// JavaScript</code></pre>
<h2 id="disregarding-object-mutability">Disregarding object mutability</h2>
<p>Unlike primitive data types like string, number and so on, in JavaScript objects are reference data types. For example, in key-value objects:</p><pre><code class="language-javascript">const obj1 = {
​​    name: "JavaScript",
​​};
​​const obj2 = obj1;
​​obj2.name = "programming";
​​console.log(obj1.name);
​​// programming</code></pre>
<p><code>obj1​</code> and <code>obj2</code>​ possess the same reference to the location in memory where the object is stored.</p>
<p>In arrays:</p><pre><code class="language-javascript">const arr1 = [2, 3, 4];
​​const arr2 = arr1;
​​arr2[0] = "javascript";
​​console.log(arr1);
​​// ['javascript', 3, 4]</code></pre>
<p>A common mistake developers make is they disregard this nature of JavaScript and this results in unexpected errors. For instance, if 5 objects have the same reference to the same object, one of the object may interfere with the properties in a large-scale code base.</p>
<p>When this happens, any attempt to access the original properties would return undefined​ or possibly throw an error.</p>
<p>The best practice for this is to always create new references for new objects when you want to duplicate an object. To do this, the rest operator ( <code>...​</code> &nbsp;introduced in ES6) is a perfect solution.</p>
<p>​​For example, in key-value objects:</p><pre><code class="language-javascript">​​const obj1 = {
​​    name: "JavaScript",
​​};
​​const obj2 = { ...obj1 };
​​console.log(obj2);
​​// {name: 'JavaScript' }
​​obj2.name = "programming";
​​console.log(obj.name);
​​// 'JavaScript'</code></pre>
<p>​​In arrays:</p><pre><code class="language-javascript">const arr1 = [2, 3, 4];
​​const arr2 = [...arr1];
​​console.log(arr2);
​​// [2,3,4]
​​arr2[0] = "javascript";
​​console.log(arr1);
​​// [2, 3, 4]</code></pre>
<h2 id="saving-arrays-and-objects-to-browser-storage">Saving arrays and objects to browser storage</h2>
<p>Sometimes, while working with JavaScript, developers may want to take advantage of the <code>localStorage</code> for saving values. But a common mistake is trying to save <a href="https://www.tutorialspoint.com/javascript/javascript_arrays_object.htm" rel="noreferrer nofollow noopener">arrays and objects</a> as-is in the <code>localStorage</code>. <code>localStorage</code> only accepts strings.</p>
<p>In an attempt to save objects, JavaScript converts the object to a string. The result is <code>[Object Object]</code> for objects and a comma-separated string for array elements.</p>
<p>For example:</p><pre><code class="language-javascript">​​const obj = { name: "JavaScript" };
​​window.localStorage.setItem("test-object", obj);
​​console.log(window.localStorage.getItem("test-object"));
​​// [Object Object]
​​const arr = ["JavaScript", "programming", 45];
​​window.localStorage.setItem("test-array", arr);
​​console.log(window.localStorage.getItem("test-array"));
​​// JavaScript, programming, 45</code></pre>
<p>When objects are saved like this, it becomes difficult to access them. For the object example, accessing the object like <code>.name​</code> would result in an error. This is because <code>[Object Object]</code> is a string now, without a <code>​name</code> property.</p>
<p>A better way to save objects and arrays in local storage is by using <code>JSON.stringify​</code>(for converting objects to strings) and <code>JSON.parse​</code> (for converting strings to objects). This way, accessing the objects becomes easy.</p>
<p>The correct version of the code above would be:</p><pre><code class="language-javascript">​​const obj = { name: "JavaScript" };
​​window.localStorage.setItem("test-object", JSON.stringify(obj));
​​const objInStorage = window.localStorage.getItem("test-object");
​​console.log(JSON.parse(objInStorage));
​​// {name: 'JavaScript'}
​​const arr = ["JavaScript", "programming", 45];
​​window.localStorage.setItem("test-array", JSON.stringify(arr));
​​const arrInStorage = window.localStorage.getItem("test-array");
​​console.log(JSON.parse(arrInStorage));
​​// JavaScript, programming, 45</code></pre>
<h2 id="not-using-default-values">Not using default values</h2>
<p>Setting <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters" rel="noreferrer nofollow noopener">default values</a> in dynamic variables is a very good practice for preventing unexpected errors. Here's an example of a common mistake:​​</p><pre><code class="language-javascript">function addTwoNumbers(a, b) {
​​    console.log(a + b);
​​}
​​addTwoNumbers();
​​// NaN</code></pre>
<p>The result is <code>NaN​</code> because <code>a</code>​ is <code>undefined</code>​ and <code>b</code>​ is <code>undefined​</code>. By using default values, errors like this can be prevented. For example:</p><pre><code class="language-javascript">function addTwoNumbers(a, b) {
​​    if (!a) a = 0;
​​    if (!b) b = 0;
​​    console.log(a + b);
​​}
​​addTwoNumbers();
​​// 0</code></pre>
<p>Alternatively, the default value feature introduced in ES6 can be used like so:</p><pre><code class="language-javascript">​​function addTwoNumbers(a = 0, b = 0) {
​​    console.log(a + b);
​​}
​​addTwoNumbers();
​​// 0</code></pre>
<p>This example, though minimal, emphasizes the importance of default values. Additionally, developers can provide errors or warning messages when expected values are not provided.</p>
<h2 id="improper-naming-of-variables">Improper naming of variables</h2>
<p>Yes, developers still make this mistake. Naming is hard, but developers really have no choice. Comments are good practice in programming, and so is naming <a href="https://en.wikipedia.org/wiki/Variable_(computer_science)" rel="noreferrer nofollow noopener">variables</a>.</p>
<p>For example:</p><pre><code class="language-javascript">function total(discount, p) {
​​    return p * discount
​​}</code></pre>
<p>The variable <code>discount</code>​ is okay, but what about <code>p</code>​ or <code>total​</code>? Total of what? A better practice for above would be:</p><pre><code class="language-javascript">function totalPrice(discount, price) {
​​    return discount * price
​​}</code></pre>
<p>​​Properly naming variables is important because a developer may never be the only developer on a codebase at a particular time or in the future.</p>
<p>Naming variables properly will allow contributors easily understand how a project works.</p>
<h2 id="check-up-for-boolean-values">Check-up for boolean values</h2><pre><code class="language-javascript">const isRaining = false
​​if(isRaining) {
​​    console.log('It is raining')
​​} else {
​​    console.log('It is not raining')
​​}
​​// It is not raining</code></pre>
<p>It is common practice to check <a href="https://www.w3schools.com/js/js_booleans.asp" rel="noreferrer nofollow noopener">boolean values</a> as seen in the above code. While this is okay, errors set in when testing some values.</p>
<p>​​In JavaScript, a loose comparison of <code>0</code>​ and <code>false</code>​ returns <code>true</code> and <code>1</code>​ and <code>true​</code> returns <code>true</code>. This means that if <code>isRaining</code>​ was <code>1</code>​, <code>isRaining</code>​ would be <code>true</code>.</p>
<p>This is also a mistake often made in objects. For example:</p><pre><code class="language-javascript">const obj = {
​​    name: 'JavaScript',
​​    number: 0
​​}
​​if(obj.number) {
​​    console.log('number property exists')
​​} else {
​​    console.log('number property does not exist')
​​}
​​// number property does not exist</code></pre>
<p>Although the <code>number</code>​ property exists, <code>obj.number</code>​ returns <code>0</code>, which is a <code>falsy</code> value, therefore the <code>else​</code> block is executed.</p>
<p>So unless you're sure of the range of values that would be used, boolean values and properties in objects should be tested like this:</p><pre><code class="language-javascript">if(a === false)...
if(object.hasOwnProperty(property))...</code></pre>
<h2 id="confusing-addition-and-concatenation">Confusing Addition and Concatenation</h2>
<p>The plus sign <code>(+)</code> has two functions in JavaScript: addition and concatenation. Addition is for numbers and Concatenation is for strings. Some developers often misuse this operator.</p>
<p>For example:</p><pre><code class="language-javascript">const num1 = 30;
​​const num2 = "20";
​​const num3 = 30;
​​const word1 = "Java"
​​const word2 = "Script"
​​console.log(num1 + num2);
​​// 3020
​​console.log(num1 + num3);
​​// 60
​​console.log(word1 + word2);
​​// JavaScript
​​</code></pre>
<p>​​When adding strings and numbers, JavaScript converts the numbers to strings, and concatenates all values. For addition of numbers, a mathematical operation is performed.​​</p>
<h2 id="conclusion">Conclusion</h2>
<p>There are, of course, more mistakes (some trivial, some serious) than the ones listed above. So just make sure you stay up to date with developments in the language. </p>
<p>Studying and avoiding these mistakes will help you build better and more reliable web applications and tools.</p>
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
