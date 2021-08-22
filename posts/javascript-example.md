---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9f25740569d1a4ca4102.jpg"
tags: [JavaScript]
description: JavaScript is the most widely used scripting language on eart
author: "Milad E. Fahmy"
title: "The Best JavaScript Examples"
created: "2021-08-15T19:32:06+02:00"
modified: "2021-08-15T19:32:06+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">The Best JavaScript Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9f25740569d1a4ca4102.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9f25740569d1a4ca4102.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9f25740569d1a4ca4102.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9f25740569d1a4ca4102.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9f25740569d1a4ca4102.jpg" alt="The Best JavaScript Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>JavaScript is the most widely used scripting language on earth. Here are some examples of key syntax patterns in JavaScript.</p>
<h2 id="argument-example">Argument Example</h2>
<p>The arguments object is an <strong><strong>array-like object</strong></strong> <em>(in that the structure of the object is similar to that of an array; however it should not be considered an array as it has all the functionality of an object)</em> that stores all of the arguments that you passed to a function and is proprietary to that function in particular. </p>
<p>If you were to pass 3 arguments to a function, say <code>storeNames()</code>, those 3 arguments would be stored inside an object called <strong><strong>arguments</strong></strong> and it would look like this when we pass the arguments <code>storeNames("Mulder", "Scully", "Alex Krycek")</code> to our function:</p>
<ul>
<li>First, we declare a function and make it return the arguments object.</li>
<li>Then, when we execute that function with <strong><strong>n arguments</strong></strong>, 3 in this case, it will return the object to us and it will <strong><strong>look like</strong></strong> an array. We can convert it to an array, but more on that later…</li>
</ul><pre><code class="language-javascript">function storeNames() { return arguments; }</code></pre><pre><code class="language-javascript">// If we execute the following line in the console:
storeNames("Mulder", "Scully", "Alex Kryceck");
// The output will be { '0': 'Mulder', '1': 'Scully', '2': 'Alex Kryceck' }</code></pre>
<h2 id="treat-it-as-an-array"><strong><strong>Treat it as an array</strong></strong></h2>
<p>You can invoke arguments by using <code>arguments[n]</code> (where <em>n</em> is the index of the argument in the array-like object). But if you want to use it as an array for iteration purposes or applying array methods to it, you need to <em>convert it to an array</em> by declaring a variable and using the Array.prototype.slice.call method (because <em>arguments</em> is not an array):</p><pre><code class="language-javascript">var args = Array.prototype.slice.call(arguments);
// or the es6 way:
var args = Array.from(arguments)</code></pre>
<p>Since <strong><strong>slice()</strong></strong> has two (the parameter <strong><strong>end</strong></strong> is optional) parameters. You can grab a certain portion of the arguments by specifying the beginning and the ending of your portion (using the <em>slice.call()</em> method renders these two parameters optional, not just <em>end</em>). Check out the following code:</p><pre><code class="language-javascript">function getGrades() {
var args = Array.prototype.slice.call(arguments, 1, 3);
return args;
}
// Let's output this!
console.log(getGrades(90, 100, 75, 40, 89, 95));
// OUTPUT SHOULD BE: //
// [100, 75] &lt;- Why? Because it started from index 1 and stopped at index 3
// so, index 3 (40) wasn't taken into consideration.
//
// If we remove the '3' parameter, leaving just (arguments, 1) we'd get
// every argument from index 1: [100, 75, 40, 89, 95].</code></pre>
<h3 id="optimization-issues-with-array-slice-"><strong><strong>Optimization issues with Array.slice()</strong></strong></h3>
<p>There is a little problem: it’s not recommended to use slice in the arguments object (optimization reasons)…</p>
<p><strong><strong>Important</strong></strong>: You should not slice on arguments because it prevents optimizations in JavaScript engines (V8 for example). Instead, try constructing a new array by iterating through the arguments object.</p>
<p>So, what other method is available to convert <em>arguments</em> to an array? I recommend the for-loop (not the for-in loop). You can do it like this:</p><pre><code class="language-javascript">var args = []; // Empty array, at first.
for (var i = 0; i &lt; arguments.length; i++) {
args.push(arguments[i])
} // Now 'args' is an array that holds your arguments.</code></pre>
<p><a>For more information on the optimization issues:</a><br><a href="https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments">Optimization Killers: Managing Arguments</a></p>
<h3 id="es6-rest-parameter-as-a-way-to-circumvent-the-arguments-object"><strong><strong>ES6 rest parameter as a way to circumvent the arguments object</strong></strong></h3>
<p>In ES2015/ES6 it is possible to use the rest parameter (<code>...</code>) instead of the arguments object in most places. Say we have the following function (non-ES6):</p><pre><code class="language-text">function getIntoAnArgument() {
var args = arguments.slice();
args.forEach(function(arg) {
console.log(arg);
});
}</code></pre>
<p>That function can be replaced in ES6 by:</p><pre><code class="language-text">function getIntoAnArgument(...args) {
args.forEach(arg =&gt; console.log(arg));
}</code></pre>
<p>Note that we also used an arrow function to shorten the forEach callback!</p>
<p>The arguments object is not available inside the body of an arrow function.</p>
<p>The rest parameter must always come as the last argument in your function definition.<br><code>function getIntoAnArgument(arg1, arg2, arg3, ...restOfArgs /*no more arguments allowed here*/) { //function body }</code></p>
<h2 id="arithmetic-operation-example">Arithmetic Operation Example</h2>
<p>JavaScript provides the user with five arithmetic operators: <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code> and <code>%</code>. The operators are for addition, subtraction, multiplication, division and remainder, respectively.</p>
<h2 id="addition"><strong><strong>Addition</strong></strong></h2>
<p><strong><strong>Syntax</strong></strong></p>
<p><code>a + b</code></p>
<p><strong><strong>Usage</strong></strong></p><pre><code class="language-text">2 + 3          // returns 5
true + 2       // interprets true as 1 and returns 3
false + 5      // interprets false as 0 and returns 5
true + "bar"   // concatenates the boolean value and returns "truebar"
5 + "foo"      // concatenates the string and the number and returns "5foo"
"foo" + "bar"  // concatenates the strings and returns "foobar"</code></pre>
<p><em>Hint:</em> There is a handy <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment_(" rel="nofollow">increment</a> operator that is a great shortcut when you’re adding numbers by 1.</p>
<h2 id="subtraction"><strong><strong>Subtraction</strong></strong></h2>
<p><strong><strong>Syntax</strong></strong></p>
<p><code>a - b</code></p>
<p><strong><strong>Usage</strong></strong></p><pre><code class="language-text">2 - 3      // returns -1
3 - 2      // returns 1
false - 5  // interprets false as 0 and returns -5
true + 3   // interprets true as 1 and returns 4
5 + "foo"  // returns NaN (Not a Number)</code></pre>
<p><em>Hint:</em> There is a handy <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Decrement_(--" rel="nofollow">decrement</a> operator that is a great shortcut when you’re subtracting numbers by 1.</p>
<h2 id="multiplication"><strong><strong>Multiplication</strong></strong></h2>
<p><strong><strong>Syntax</strong></strong></p>
<p><code>a * b</code></p>
<p><strong><strong>Usage</strong></strong></p><pre><code class="language-text">2 * 3                // returns 6
3 * -2               // returns -6
false * 5            // interprets false as 0 and returns 0
true * 3             // interprets true as 1 and returns 3
5 * "foo"            // returns NaN (Not a Number)
Infinity * 0         // returns NaN
Infinity * Infinity  // returns Infinity</code></pre>
<p><em>Hint:</em> When making calculations it is possible to use parentheses to prioritize which numbers should be multiplied together.</p>
<h2 id="division"><strong><strong>Division</strong></strong></h2>
<p><strong><strong>Syntax</strong></strong></p>
<p><code>a / b</code></p>
<p><strong><strong>Usage</strong></strong></p><pre><code class="language-text">3 / 2                // returns 1.5
3.0 / 2/0            // returns 1.5
3 / 0                // returns Infinity
3.0 / 0.0            // returns Infinity
-3 / 0               // returns -Infinity
false / 5            // interprets false as 0 and returns 0
true / 2             // interprets true a 1 and returns 0.5
5 + "foo"            // returns NaN (Not a Number)
Infinity / Infinity  // returns NaN</code></pre>
<h2 id="remainder"><strong><strong>Remainder</strong></strong></h2>
<p><strong><strong>Syntax</strong></strong></p>
<p><code>a % b</code></p>
<p><strong><strong>Usage</strong></strong></p><pre><code class="language-text">3 % 2          // returns 1
true % 5       // interprets true as 1 and returns 1
false % 4      // interprets false as 0 and returns 0
3 % "bar"      // returns NaN</code></pre>
<h2 id="increment"><strong><strong>Increment</strong></strong></h2>
<p><strong><strong>Syntax</strong></strong></p>
<p><code>a++ or ++a</code></p>
<p><strong><strong>Usage</strong></strong> </p><pre><code class="language-js">// Postfix
x = 3; // declare a variable
y = x++; // y = 4, x = 3
// Prefix
var a = 2;
b = ++a; // a = 3, b = 3</code></pre>
<h2 id="decrement"><strong><strong>Decrement</strong></strong></h2>
<p><strong><strong>Syntax</strong></strong></p>
<p><code>a-- or --a</code></p>
<p><strong><strong>Usage</strong></strong> </p><pre><code class="language-js">// Postfix
x = 3; // declare a variable
y = x—; // y = 3, x = 3
// Prefix
var a = 2;
b = —a; // a = 1, b = 1</code></pre>
<p><em>Important:</em> As you can see, you <strong><strong>cannot</strong></strong> perform any sort of operations on <code>Infinity</code>.</p>
<h3 id="arrow-function-example">Arrow Function Example</h3>
<p>Arrow functions are a new ES6 syntax for writing JavaScript function expressions. The shorter syntax saves time, as well as simplifying the function scope.</p>
<h2 id="what-are-arrow-functions"><strong><strong>What are arrow functions?</strong></strong></h2>
<p>An arrow function expression is a more concise syntax for writing function expressions using a “fat arrow” token (<code>=&gt;</code>).</p>
<h3 id="the-basic-syntax"><strong><strong>The basic syntax</strong></strong></h3>
<p>Below is a basic example of an arrow function:</p><pre><code class="language-javascript">// ES5 syntax
var multiply = function(x, y) {
return x * y;
};
// ES6 arrow function
var multiply = (x, y) =&gt; { return x * y; };
// Or even simpler
var multiply = (x, y) =&gt; x * y;    </code></pre>
<p>You no longer need the <code>function</code> and <code>return</code> keywords, or even the curly brackets.</p>
<h3 id="a-simplified-this"><strong><strong>A simplified <code>this</code></strong></strong></h3>
<p>Before arrow functions, new functions defined their own <code>this</code> value. To use <code>this</code> inside a traditional function expression, we have to write a workaround like so:</p><pre><code class="language-javascript">// ES5 syntax
function Person() {
// we assign `this` to `self` so we can use it later
var self = this;
self.age = 0;
setInterval(function growUp() {
// `self` refers to the expected object
self.age++;
}, 1000);
}</code></pre>
<p>An arrow function doesn’t define its own <code>this</code> value, it inherits <code>this</code> from the enclosing function:</p><pre><code class="language-javascript">// ES6 syntax
function Person(){
this.age = 0;
setInterval(() =&gt; {
// `this` now refers to the Person object, brilliant!
this.age++;
}, 1000);
}
var p = new Person();</code></pre>
<h2 id="assignment-operators">Assignment Operators</h2>
<h2 id="assignment-operator-example">Assignment Operator Example</h2>
<p>Assignment operators, as the name suggests, assign (or re-assign) values to a variable. While there are quite a few variations on the assignment operators, they all build off of the basic assignment operator.</p>
<p>Syntax = <strong>y;DescriptionNecessityxVariableRequired=Assignment operatorRequiredyValue to assign to variableRequired</strong></p>
<h2 id="examples"><strong><strong>Examples</strong></strong></h2><pre><code class="language-text">let initialVar = 5;   // Variable initialization requires the use of an assignment operator
let newVar = 5;
newVar = 6;   // Variable values can be modified using an assignment operator</code></pre>
<h2 id="variations"><strong><strong>Variations</strong></strong></h2>
<p>The other assignment operators are a shorthand for performing some operation using the variable (indicated by x above) and value (indicated by y above) and then assigning the result to the variable itself.</p>
<p>For example, below is the syntax for the addition assignment operator:</p><pre><code class="language-text">x += y;</code></pre>
<p>This is the same as applying the addition operator and reassigning the sum to the original variable (that is, x), which can be expressed by the following code:</p><pre><code class="language-text">x = x + y;</code></pre>
<p>To illustrate this using actual values, here is another example of using the addition assignment operator:</p><pre><code class="language-text">let myVar = 5;   // value of myVar: 5
myVar += 7;   // value of myVar: 12 = 5 + 7</code></pre>
<h3 id="complete-list-of-javascript-s-assignment-operators">Complete list of JavaScript’s assignment operators</h3>
<table>
<thead>
<tr>
<th>Operator</th>
<th>Syntax</th>
<th>Long version</th>
</tr>
</thead>
<tbody>
<tr>
<td>Assignment</td>
<td>x = y</td>
<td>x = y</td>
</tr>
<tr>
<td>Addition assignment</td>
<td>x += y</td>
<td>x = x + y</td>
</tr>
<tr>
<td>Subtraction assignment</td>
<td>x -= y</td>
<td>x = x - y</td>
</tr>
<tr>
<td>Multiplication assignment</td>
<td>x *= y</td>
<td>x = x * y</td>
</tr>
<tr>
<td>Division assignment</td>
<td>x /= y</td>
<td>x = x / y</td>
</tr>
<tr>
<td>Remainder assignment</td>
<td>x %= y</td>
<td>x = x % y</td>
</tr>
<tr>
<td>Exponentiation assignment</td>
<td>x **= y</td>
<td>x = x ** y</td>
</tr>
<tr>
<td>Left shift assignment</td>
<td>x &lt;&lt;= y</td>
<td>x = x &lt;&lt; y</td>
</tr>
<tr>
<td>Right shift assignment</td>
<td>x &gt;&gt;= y</td>
<td>x = x &gt;&gt; y</td>
</tr>
<tr>
<td>Unsigned right shift assignment</td>
<td>x &gt;&gt;&gt;= y</td>
<td>x = x &gt;&gt;&gt; y</td>
</tr>
<tr>
<td>Bitwise AND assignment</td>
<td>x &amp;= y</td>
<td>x = x &amp; y</td>
</tr>
<tr>
<td>Bitwise XOR assignment</td>
<td>x ^= y</td>
<td>x = x ^ y</td>
</tr>
<tr>
<td>Bitwise OR assignment</td>
<td>x |= y</td>
<td>x = x | y</td>
</tr>
</tbody>
</table>
<h2 id="boolean-example"><strong>Boolean Example</strong></h2>
<p>Booleans are a primitive datatype commonly used in computer programming languages. By definition, a boolean has two possible values: <code>true</code> or <code>false</code>.</p>
<p>In JavaScript, there is often implicit type coercion to boolean. If for example you have an if statement which checks a certain expression, that expression will be coerced to a boolean:</p><pre><code class="language-javascript">var a = 'a string';
if (a) {
console.log(a); // logs 'a string'
}</code></pre>
<p>There are only a few values that will be coerced to false:</p>
<ul>
<li>false (not really coerced, as it already is false)</li>
<li>null</li>
<li>undefined</li>
<li>NaN</li>
<li>0</li>
<li>” (empty string)</li>
</ul>
<p>All other values will be coerced to true. When a value is coerced to a boolean, we also call that either ‘falsy’ or ‘truthy’.</p>
<p>One way that type coercion is used is with the use of the or (<code>||</code>) and and (<code>&amp;&amp;</code>) operators:</p><pre><code class="language-javascript">var a = 'word';
var b = false;
var c = true;
var d = 0
var e = 1
var f = 2
var g = null
console.log(a || b); // 'word'
console.log(c || a); // true
console.log(b || a); // 'word'
console.log(e || f); // 1
console.log(f || e); // 2
console.log(d || g); // null
console.log(g || d); // 0
console.log(a &amp;&amp; c); // true
console.log(c &amp;&amp; a); // 'word'</code></pre>
<p>As you can see, the <em>or</em> operator checks the first operand. If this is true or truthy, it returns it immediately (which is why we get ‘word’ in the first case &amp; true in the second case). If it is not true or truthy, it returns the second operand (which is why we get ‘word’ in the third case).</p>
<p>With the and operator it works in a similar way, but for ‘and’ to be true, both operands need to be truthy. So it will always return the second operand if both are true/truthy, otherwise it will return false. That is why in the fourth case we get true and in the last case we get ‘word’.</p>
<h2 id="the-boolean-object"><strong>The Boolean Object</strong></h2>
<p>There is also a native JavaScript <code>Boolean</code> object that wraps around a value and converts the first parameter to a boolean value. If a value is omitted or falsy –0, -0, <code>null</code>, <code>false</code>, <code>NaN</code>, <code>undefined</code>, or an empty string (<code>""</code>) – the object's value is false. Pass all other values, including the string <code>"false"</code>, and the object's value is set to true.</p>
<p>Note that primitive Boolean values (<code>true</code> and <code>false</code>) are different than those of the Boolean object.</p>
<h3 id="more-details">More Details</h3>
<p>Remember that any object, the value of which is not <code>undefined</code> or <code>null</code>, evaluates to true if used in a conditional statement. For example, even though this <code>Boolean</code> object is explicitly set to false, it evaluates to true and the code is executed:</p><pre><code class="language-javascript">var greeting = new Boolean(false);
if (greeting) {
console.log("Hello world");
}
// Hello world</code></pre>
<p>This doesn't apply to boolean primitives:</p><pre><code class="language-javascript">var greeting = false;
if (greeting) {
console.log("Hello world"); // code will not run
}</code></pre>
<p>To convert a non-boolean value to a boolean, use <code>Boolean</code> as a function rather than as an object: </p><pre><code class="language-javascript">var x = Boolean(expression);     // preferred use as a function
var x = new Boolean(expression); // don't do it this way</code></pre>
<h2 id="callback-functions">Callback Functions</h2>
<p>This section gives a brief introduction to the concept and usage of callback functions in JavaScript.</p>
<h3 id="functions-are-objects">Functions are Objects</h3>
<p>The first thing we need to know is that in JavaScript, functions are first-class objects. As such, we can work with them in the same way we work with other objects, like assigning them to variables and passing them as arguments into other functions. This is important, because it’s the latter technique that allows us to extend functionality in our applications.</p>
<h2 id="callback-function-example"><strong><strong>Callback Function</strong> Example</strong></h2>
<p>A <strong><strong>callback function</strong></strong> is a function that is passed <em>as an argument</em> to another function, to be “called back” at a later time. </p>
<p>A function that accepts other functions as arguments is called a <strong><strong>higher-order function</strong></strong>, which contains the logic for <em>when</em> the callback function gets executed. It’s the combination of these two that allow us to extend our functionality.</p>
<p>To illustrate callbacks, let’s start with a simple example:</p><pre><code class="language-javascript">function createQuote(quote, callback){
var myQuote = "Like I always say, " + quote;
callback(myQuote); // 2
}
function logQuote(quote){
console.log(quote);
}
createQuote("eat your vegetables!", logQuote); // 1
// Result in console:
// Like I always say, eat your vegetables!</code></pre>
<p>In the above example, <code>createQuote</code> is the higher-order function, which accepts two arguments, the second one being the callback. The <code>logQuote</code> function is being used to pass in as our callback function. When we execute the <code>createQuote</code> function <em>(1)</em>, notice that we are <em>not appending</em> parentheses to <code>logQuote</code> when we pass it in as an argument. This is because we do not want to execute our callback function right away, we simply want to pass the function definition along to the higher-order function so that it can be executed later.</p>
<p>Also, we need to ensure that if the callback function we pass in expects arguments, &nbsp;we supply those arguments when executing the callback <em>(2)</em>. In the above example, that would be the <code>callback(myQuote);</code>statement, since we know that <code>logQuote</code> expects a quote to be passed in.</p>
<p>Additionally, we can pass in anonymous functions as callbacks. The below call to <code>createQuote</code> would have the same result as the above example:</p><pre><code class="language-javascript">createQuote("eat your vegetables!", function(quote){
console.log(quote);
});</code></pre>
<p>Incidentally, you don’t <em>have</em> to use the word “callback” as the name of your argument. JavaScript just needs to know that it’s the correct argument name. Based on the above example, the below function will behave in exactly the same manner.</p><pre><code class="language-javascript">function createQuote(quote, functionToCall) {
var myQuote = "Like I always say, " + quote;
functionToCall(myQuote);
}</code></pre>
<h2 id="why-use-callbacks"><strong><strong>Why use Callbacks?</strong></strong></h2>
<p>Most of the time we are creating programs and applications that operate in a <strong><strong>synchronous</strong></strong> manner. In other words, some of our operations are started only after the preceding ones have completed. </p>
<p>Often when we request data from other sources, such as an external API, we don’t always know <em>when</em> our data will be served back. In these instances we want to wait for the response, but we don’t always want our entire application grinding to a halt while our data is being fetched. These situations are where callback functions come in handy.</p>
<p>Let’s take a look at an example that simulates a request to a server:</p><pre><code class="language-javascript">function serverRequest(query, callback){
setTimeout(function(){
var response = query + "full!";
callback(response);
},5000);
}
function getResults(results){
console.log("Response from the server: " + results);
}
serverRequest("The glass is half ", getResults);
// Result in console after 5 second delay:
// Response from the server: The glass is half full!</code></pre>
<p>In the above example, we make a mock request to a server. After 5 seconds elapse, the response is modified and then our callback function <code>getResults</code> gets executed. To see this in action, you can copy/paste the above code into your browser’s developer tool and execute it.</p>
<p>Also, if you are already familiar with <code>setTimeout</code>, then you’ve been using callback functions all along. The anonymous function argument passed into the above example’s <code>setTimeout</code> function call is also a callback! So the example’s original callback is actually executed by another callback. Be careful not to nest too many callbacks if you can help it, as this can lead to something called “callback hell”! As the name implies, it isn’t a joy to deal with.</p>
<h2 id="javascript-class-example"><strong>JavaScript Class Example</strong></h2>
<p>JavaScript does not have the concept of classes inherently.</p>
<p>But we could simulate the functionalities of a class by taking advantage of the prototypal nature of JavaScript.</p>
<p>This section assumes that you have a basic understanding of <a href="https://guide.freecodecamp.org/javascript/prototypes">prototypes</a>.</p>
<p>For the sake of clarity, let us assume that we want to create a class which can do the following</p><pre><code class="language-javascript">var p = new Person('James','Bond'); // create a new instance of Person class
p.log() // Output: 'I am James Bond' // Accessing a function in the class
// Using setters and getters
p.profession = 'spy'
p.profession // output: James bond is a spy</code></pre>
<h3 id="using-class-keyword"><strong>Using class keyword</strong></h3>
<p>Like in any other programming language, you can now use the <code>class</code> keyword to create a class.</p>
<p>This is not supported in older browsers and was introduced in ECMAScript 2015.</p>
<p><code>class</code> is just a syntactic sugar over JavaScript’s existing prototype-based inheritance model.</p>
<p>In general, programmers use the following ways to create a class in JavaScript.</p>
<h3 id="using-methods-added-to-prototypes-"><strong>Using methods added to prototypes:</strong></h3>
<p>Here, all the methods are added to prototype</p><pre><code class="language-javascript">function Person(firstName, lastName) {
this._firstName = firstName;
this._lastName = lastName;
}
Person.prototype.log = function() {
console.log('I am', this._firstName, this._lastName);
}
// This line adds getters and setters for the profession object. Note that in general you could just write your own get and set functions like the 'log' method above.
// Since in this example we are trying the mimic the class above, we try to use the getters and setters property provided by JavaScript
Object.defineProperty(Person.prototype, 'profession', {
set: function(val) {
this._profession = val;
},
get: function() {
console.log(this._firstName, this._lastName, 'is a', this._profession);
}
})</code></pre>
<p>You could also write prototype methods over function <code>Person</code> as below:</p><pre><code class="language-javascript">Person.prototype = {
log: function() {
console.log('I am ', this._firstName, this._lastName);
}
set profession(val) {
this._profession = val;
}
get profession() {
console.log(this._firstName, this._lastName, 'is a', this._profession);
}
}</code></pre>
<h3 id="using-methods-added-internally"><strong>Using methods added internally</strong></h3>
<p>Here the methods are added internally instead of prototype:</p><pre><code class="language-javascript">function Person(firstName, lastName) {
this._firstName = firstName;
this._lastName = lastName;
this.log = function() {
console.log('I am ', this._firstName, this._lastName);
}
Object.defineProperty(this, 'profession', {
set: function(val) {
this._profession = val;
},
get: function() {
console.log(this._firstName, this._lastName, 'is a', this._profession);
}
})
}</code></pre>
<h3 id="hiding-details-in-classes-with-symbols"><strong>Hiding details in classes with symbols</strong></h3>
<p>Most often, some properties and methods have to be hidden to prevent access from outside the function. </p>
<p>With classes, to obtain this functionality, one way to do this is by using symbols. Symbol is a new built-in type of JavaScript, which can be invoked to give a new symbol value. Every Symbol is unique and can be used as a key on object. </p>
<p>So one use case of symbols is that you can add something to an object you might not own, and you might not want to collide with any other keys of object. Therefore, creating a new one and adding it as a property to that object using symbol is the safest. Also, when symbol value is added to an object, no one else will know how to get it.</p><pre><code class="language-javascript">class Person {
constructor(firstName, lastName) {
this._firstName = firstName;
this._lastName = lastName;
}
log() {
console.log('I am', this._firstName, this._lastName);
}
// setters
set profession(val) {
this._profession = val;
}
// getters
get profession() {
console.log(this._firstName, this._lastName, 'is a', this._profession);
}
// With the above code, even though we can access the properties outside the function to change their content what if we don't want that.
// Symbols come to rescue.
let s_firstname  = new Symbol();
class Person {
constructor(firstName, lastName) {
this[s_firstName] = firstName;
this._lastName = lastName;
}
log() {
console.log('I am', this._firstName, this._lastName);
}
// setters
set profession(val) {
this._profession = val;
}
// getters
get profession() {
console.log(this[s_firstName], this._lastName, 'is a', this._profession);
}</code></pre>
<h3 id="javascript-closure-example">JavaScript Closure Example</h3>
<p>A closure is the combination of a function and the lexical environment (scope) within which that function was declared. Closures are a fundamental and powerful property of Javascript. This section discusses the ‘how’ and ‘why’ about Closures:</p>
<h3 id="example"><strong>Example</strong></h3><pre><code class="language-js">//we have an outer function named walk and an inner function named fly
function walk (){
var dist = '1780 feet';
function fly(){
console.log('At '+dist);
}
return fly;
}
var flyFunc = walk(); //calling walk returns the fly function which is being assigned to flyFunc
//you would expect that once the walk function above is run
//you would think that JavaScript has gotten rid of the 'dist' var
flyFunc(); //Logs out 'At 1780 feet'
//but you still can use the function as above
//this is the power of closures</code></pre>
<h3 id="another-example"><strong>Another Example</strong></h3><pre><code class="language-js">function by(propName) {
return function(a, b) {
return a[propName] - b[propName];
}
}
const person1 = {name: 'joe', height: 72};
const person2 = {name: 'rob', height: 70};
const person3 = {name: 'nicholas', height: 66};
const arr_ = [person1, person2, person3];
const arr_sorted = arr_.sort(by('height')); // [ { name: 'nicholas', height: 66 }, { name: 'rob', height: 70 },{ name: 'joe', height: 72 } ]</code></pre>
<p>The closure ‘remembers’ the environment in which it was created. This environment consists of any local variables that were in-scope at the time the closure was created.</p><pre><code class="language-js">function outside(num) {
var rememberedVar = num; // In this example, rememberedVar is the lexical environment that the closure 'remembers'
return function inside() { // This is the function which the closure 'remembers'
console.log(rememberedVar)
}
}
var remember1 = outside(7); // remember1 is now a closure which contains rememberedVar = 7 in its lexical environment, and //the function 'inside'
var remember2 = outside(9); // remember2 is now a closure which contains rememberedVar = 9 in its lexical environment, and //the function 'inside'
remember1(); // This now executes the function 'inside' which console.logs(rememberedVar) =&gt; 7
remember2(); // This now executes the function 'inside' which console.logs(rememberedVar) =&gt; 9 </code></pre>
<p>Closures are useful because they let you ‘remember’ data and then let you operate on that data through returned functions. This allows Javascript to emulate private methods that are found in other programming languages. Private methods are useful for restricting access to code as well as managing your global namespace.</p>
<h3 id="private-variables-and-methods"><strong>Private variables and methods</strong></h3>
<p>Closures can also be used to encapsulate private data/methods. Take a look at this example:</p><pre><code class="language-javascript">const bankAccount = (initialBalance) =&gt; {
const balance = initialBalance;
return {
getBalance: function() {
return balance;
},
deposit: function(amount) {
balance += amount;
return balance;
},
};
};
const account = bankAccount(100);
account.getBalance(); // 100
account.deposit(10); // 110</code></pre>
<p>In this example, we won’t be able to access <code>balance</code> from anywhere outside of the <code>bankAccount</code> function, which means we’ve just created a private variable. </p>
<p>Where’s the closure? Well, think about what <code>bankAccount()</code> is returning. It actually returns an Object with a bunch of functions inside it, and yet when we call <code>account.getBalance()</code>, the function is able to “remember” its initial reference to <code>balance</code>. </p>
<p>That is the power of the closure, where a function “remembers” its lexical scope (compile time scope), even when the function is executed outside that lexical scope.</p>
<h3 id="emulating-block-scoped-variables">Emulating block-scoped variables</h3>
<p>Javascript did not have a concept of block-scoped variables. Meaning that when defining a variable inside a for-loop, for example, this variable was visible from outside the for-loop as well. So how can closures help us solve this problem? Let’s take a look.</p><pre><code class="language-javascript">    var funcs = [];
for(var i = 0; i &lt; 3; i++){
funcs[i] = function(){
console.log('My value is ' + i);  //creating three different functions with different param values.
}
}
for(var j = 0; j &lt; 3; j++){
funcs[j]();             // My value is 3
// My value is 3
// My value is 3
}</code></pre>
<p>Since the variable i does not have block-scope, it’s value within all three functions was updated with the loop counter and created malicious values. Closures can help us solve this issue by creating a snapshot of the environment the function was in when it was created, preserving its state.</p><pre><code class="language-javascript">    var funcs = [];
var createFunction = function(val){
return function() {console.log("My value: " + val);};
}
for (var i = 0; i &lt; 3; i++) {
funcs[i] = createFunction(i);
}
for (var j = 0; j &lt; 3; j++) {
funcs[j]();                 // My value is 0
// My value is 1
// My value is 2
}</code></pre>
<p>The later versions of Javascript (ES6+) have a new keyword called let which can be used to give the variable a blockscope. There are also many functions (forEach) and entire libraries (lodash.js) that are dedicated to solving such problems as the ones explained above. They can certainly boost your productivity, however it remains extremely important to have knowledge of all these issues when attempting to create something big.</p>
<p>Closures have many special applications that are useful when creating large Javascript programs.</p>
<ol>
<li>Emulating private variables or encapsulation</li>
<li>Making Asynchronous server side calls</li>
<li>Creating a block-scoped variable.</li>
</ol>
<h3 id="emulating-private-variables">Emulating private variables</h3>
<p>Unlike many other languages, Javascript does not have a mechanism which allows you to create encapsulated instance variables within an object. Having public instance variables can cause a lot of problems when building medium to large programs. However with closures, this problem can be mitigated.</p>
<p>Much like in the previous example, you can build functions which return object literals with methods that have access to the object’s local variables without exposing them. Thus, making them effectively private.</p>
<p>Closures can also help you manage your global namespace to avoid collisions with globally shared data. Usually, all global variables are shared between all scripts in your project, which will definitely give you a lot of trouble when building medium to large programs. </p>
<p>That is why library and module authors use closures to hide an entire module’s methods and data. This is called the module pattern, it uses an immediately invoked function expression which exports only certain functionality to the outside world, significantly reducing the amount of global references.</p>
<p>Here’s a short sample of a module skeleton.</p><pre><code class="language-javascript">var myModule = (function() = {
let privateVariable = 'I am a private variable';
let method1 = function(){ console.log('I am method 1'); };
let method2 = function(){ console.log('I am method 2, ', privateVariable); };
return {
method1: method1,
method2: method2
}
}());
myModule.method1(); // I am method 1
myModule.method2(); // I am method 2, I am a private variable</code></pre>
<p>Closures are useful for capturing new instances of private variables contained in the ‘remembered’ environment, and those variables can only be accessed through the returned function or methods.</p>
<h3 id="javascript-comment-example">JavaScript Comment Example</h3>
<p>Programmers use comments to add hints, notes, suggestions, or warnings to their source code; they have no effect on the actual output of the code. Comments can be very helpful in explaining the intent of what your code is or should be doing.</p>
<p>It is always best practice when starting out to comment more often than not, as it can help those reading your code to understand what exactly your code is intending to do.</p>
<p>JavaScript has two ways of assigning comments in its code.</p>
<p>The first way is the <code>//</code> comment; all text following <code>//</code> on the same line into a comment. For example:</p><pre><code class="language-javascript">function hello() {
// This is a one line JavaScript comment
console.log("Hello world!");
}
hello();</code></pre>
<p>The second way is the <code>/* */</code> comment, which can be used for both single-line and multi-line comments. For example:</p><pre><code class="language-javascript">function hello() {
/* This is a one line JavaScript comment */
console.log("Hello world!");
}
hello();</code></pre><pre><code class="language-javascript">function hello() {
/* This comment spans multiple lines. Notice
that we don't need to end the comment until we're done. */
console.log("Hello world!");
}
hello();</code></pre>
<p>You can also prevent execution of Javascript code just commeting the code lines like this:</p><pre><code class="language-javascript">function hello() {
/*console.log("Hello world!");*/
}
hello();</code></pre>
<h4 id="more-information-"><strong>More Information:</strong></h4>
<p><a href="https://www.digitalocean.com/community/tutorials/how-to-write-comments-in-javascript" rel="nofollow">How To Write Comments in JavaScript</a></p>
<h3 id="many-ides-come-with-a-keyboard-shortcut-to-comment-out-lines-"><strong>Many IDEs come with a keyboard shortcut to comment out lines.</strong></h3>
<ol>
<li>Highlight text to be commented</li>
<li>Mac: Push Command(Apple Key) &amp; "/"</li>
<li>Windows: Push Control &amp; "/"</li>
<li>You can also uncomment code by doing the same steps</li>
</ol>
<p>A shortcut to comment out a section of Javascript in many code editors is to highlight the lines of code you want to comment out, then press `Cmd/Ctrl + /`.</p>
<p>Comments are also very helpful for code testing as you can prevent a certain code-line/block from running:</p><pre><code class="language-javascript">function hello() {
// The statement below is not going to get executed
// console.log('hi')
}
hello();</code></pre><pre><code class="language-text">function hello() {
// The statements below are not going to get executed
/*
console.log('hi');
console.log('code-test');
*/
}
hello();</code></pre>
<h2 id="javascript-comparison-operator-example">JavaScript Comparison Operator Example</h2>
<p>JavaScript has both <strong><strong>strict</strong></strong> and <strong><strong>type–converting</strong></strong> comparisons.</p>
<ul>
<li>The strict comparison (<code>===</code>) only evaluates to true if both operands are the same type.</li>
<li>The abstract comparison (<code>==</code>) attempts to convert both operands to the same type before comparing them.</li>
<li>With relational abstract comparisons (<code>&lt;=</code>), both operands are converted to primitives, then to the same type before comparison.</li>
<li>Strings are compared using Unicode values based on standard ordering.</li>
</ul>
<h2 id="features-of-comparisons-"><strong>Features of comparisons:</strong></h2>
<ul>
<li>Two strings are considered strictly equal when they have the characters in the same sequence and the same length.</li>
<li>Two numbers are considered strictly equal when they are the both of the type number and are numerically equal. This means that both <code>0</code> and <code>-0</code> are strictly equal since they both evaluate to <code>0</code>. Note that <code>NaN</code> is a special value and is not equal to anything, including <code>NaN</code>.</li>
<li>Two Boolean operands are considered strictly equal if both are <code>true</code> or <code>false</code>.</li>
<li>Two objects are never considered equal in both strict or abstract comparisons.</li>
<li>Expressions that compare objects are only considered true if the operands both reference the same exact object instance.</li>
<li>Null and undefined are both considered strictly equal to themselves (<code>null === null</code>) and abstractly equal to each other (<code>null == undefined</code>)</li>
</ul>
<h2 id="equality-operators"><strong>Equality operators</strong></h2>
<h3 id="equality-"><strong>Equality (==)</strong></h3>
<p>The equality operator first converts operands that are not of the same type, then strictly compares them to one another.</p>
<h4 id="syntax"><strong>Syntax</strong></h4><pre><code class="language-text"> x == y</code></pre>
<h4 id="examples-1"><strong>Examples</strong></h4><pre><code class="language-text"> 1   ==  1        // true
"1"  ==  1        // true
1   == '1'       // true
0   == false     // true
0   == null      // false
0   == undefined   // false
null  == undefined // true</code></pre>
<h3 id="inequality-"><strong>Inequality (!=)</strong></h3>
<p>The inequality operator evaluates to true if both operands are not equal. If the operands are not the same type, it will try to convert them to the same type before making the comparison.</p>
<h4 id="syntax-1"><strong>Syntax</strong></h4><pre><code class="language-text">x != y</code></pre>
<h4 id="examples-2"><strong>Examples</strong></h4><pre><code class="language-text">1 !=   2     // true
1 !=  "1"    // false
1 !=  '1'    // false
1 !=  true   // false
0 !=  false  // false</code></pre>
<h3 id="identity-strict-equality-"><strong>Identity / strict equality (===)</strong></h3>
<p>The identity or strict equality operator returns true if both operands are strictly equal in terms of value and type. Unlike the equality operator (<code>==</code>), it will not attempt to convert the operands to the same type.</p>
<h4 id="syntax-2"><strong>Syntax</strong></h4><pre><code class="language-text">x === y</code></pre>
<h4 id="examples-3"><strong>Examples</strong></h4><pre><code class="language-text">3 === 3   // true
3 === '3' // false</code></pre>
<h3 id="non-identity-strict-inequality-"><strong>Non-identity / strict inequality (!==)</strong></h3>
<p>The non-identity or strict inequality operator returns true if both operands are not strictly equal in terms of value or type.</p>
<h4 id="syntax-3"><strong>Syntax</strong></h4><pre><code class="language-text">x !== y</code></pre>
<h4 id="examples-4"><strong>Examples</strong></h4><pre><code class="language-text">3 !== '3' // true
4 !== 3   // true</code></pre>
<h2 id="relational-operators"><strong>Relational operators</strong></h2>
<h3 id="greater-than-operator-"><strong>Greater than operator (&gt;)</strong></h3>
<p>The greater than operator returns true if the operand on the left is greater than the one on the right.</p>
<h4 id="syntax-4"><strong>Syntax</strong></h4><pre><code class="language-text">x &gt; y</code></pre>
<h4 id="examples-5"><strong>Examples</strong></h4><pre><code class="language-text">4 &gt; 3 // true</code></pre>
<h3 id="greater-than-or-equal-operator-"><strong>Greater than or equal operator (&gt;=)</strong></h3>
<p>The greater than or equal operator returns true if the operand on the left is greater than or equal to the one on the right.</p>
<h4 id="syntax-5"><strong>Syntax</strong></h4><pre><code class="language-text">x &gt;= y</code></pre>
<h4 id="examples-6"><strong>Examples</strong></h4><pre><code class="language-text">4 &gt;= 3 // true
3 &gt;= 3 // true</code></pre>
<h3 id="less-than-operator-"><strong>Less than operator (&lt;)</strong></h3>
<p>The less than operator returns true if the operand on the left is less than the one on the right.</p>
<h4 id="syntax-6"><strong>Syntax</strong></h4><pre><code class="language-text">x &lt; y</code></pre>
<h4 id="examples-7"><strong>Examples</strong></h4><pre><code class="language-text">3 &lt; 4 // true</code></pre>
<h3 id="less-than-or-equal-operator-"><strong>Less than or equal operator (&lt;=)</strong></h3>
<p>The less than or equal operator returns true if the operand on the left is less than or equal to the one on the right.</p>
<h4 id="syntax-7"><strong>Syntax</strong></h4><pre><code class="language-text">x &lt;= y</code></pre>
<h4 id="examples-8"><strong>Examples</strong></h4><pre><code class="language-text">3 &lt;= 4 // true</code></pre>
<h2 id="javascript-form-validation-example"><strong>JavaScript Form Validation Example</strong></h2>
<p>Form validation used to occur at the server, after the client had entered all the necessary data and then pressed the Submit button. If the data entered by a client was incorrect or was simply missing, the server would have to send all the data back to the client and request that the form be resubmitted with correct information. This was really a lengthy process which used to put a lot of burden on the server.</p>
<p>JavaScript provides a way to validate form’s data on the client’s computer before sending it to the web server. Form validation generally performs two functions:</p>
<h3 id="basic-validation"><strong>Basic Validation</strong></h3>
<p>First of all, the form must be checked to make sure all the mandatory fields are filled in. It just requires a loop through each field in the form to check for data.</p>
<h3 id="data-format-validation"><strong>Data Format Validation</strong></h3>
<p>Secondly, the data that is entered must be checked for correct form and value. Your code must include appropriate logic to test the correctness of the data.</p>
<h4 id="example-"><strong>Example:</strong></h4><pre><code class="language-html">&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Form Validation&lt;/title&gt;
&lt;script type="text/javascript"&gt;
&lt;!--
// Form validation code will come here.
//--&gt;
&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;form action="/cgi-bin/test.cgi" name="myForm" onsubmit="return(validate());"&gt;
&lt;table cellspacing="2" cellpadding="2" border="1"&gt;
&lt;tr&gt;
&lt;td align="right"&gt;Name&lt;/td&gt;
&lt;td&gt;&lt;input type="text" name="Name" /&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td align="right"&gt;EMail&lt;/td&gt;
&lt;td&gt;&lt;input type="text" name="EMail" /&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td align="right"&gt;Zip Code&lt;/td&gt;
&lt;td&gt;&lt;input type="text" name="Zip" /&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td align="right"&gt;Country&lt;/td&gt;
&lt;td&gt;
&lt;select name="Country"&gt;
&lt;option value="-1" selected&gt;[choose yours]&lt;/option&gt;
&lt;option value="1"&gt;USA&lt;/option&gt;
&lt;option value="2"&gt;UK&lt;/option&gt;
&lt;option value="3"&gt;INDIA&lt;/option&gt;
&lt;/select&gt;
&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td align="right"&gt;&lt;/td&gt;
&lt;td&gt;&lt;input type="submit" value="Submit" /&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;
&lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<h4 id="output"><strong>Output</strong></h4>
<p>Have a look <a href="https://liveweave.com/LP9eOP">here</a>.</p>
<h3 id="basic-form-validation"><strong>Basic Form Validation</strong></h3>
<p>First let us see how to do a basic form validation. In the above form, we are calling validate() to validate data when the onsubmit event is occurring. The following code shows the implementation of this <code>validate()</code>function.</p><pre><code class="language-html">&lt;script type="text/javascript"&gt;
// Form validation code will come here.
function validate()
{
if( document.myForm.Name.value == "" )
{
alert( "Please provide your name!" );
document.myForm.Name.focus() ;
return false;
}
if( document.myForm.EMail.value == "" )
{
alert( "Please provide your Email!" );
document.myForm.EMail.focus() ;
return false;
}
if( document.myForm.Zip.value == "" ||
isNaN( document.myForm.Zip.value ) ||
document.myForm.Zip.value.length != 5 )
{
alert( "Please provide a zip in the format #####." );
document.myForm.Zip.focus() ;
return false;
}
if( document.myForm.Country.value == "-1" )
{
alert( "Please provide your country!" );
return false;
}
return( true );
}
&lt;/script&gt;</code></pre>
<h4 id="output-1"><strong>Output</strong></h4>
<p>Have a look <a href="https://liveweave.com/pCPTnP">here</a>.</p>
<h3 id="data-format-validation-1"><strong>Data Format Validation</strong></h3>
<p>Now we will see how we can validate our entered form data before submitting it to the web server.</p>
<p>The following example shows how to validate an entered email address. An email address must contain at least an ‘@’ sign and a dot (.). Also, the ‘@’ must not be the first character of the email address, and the last dot must at least be one character after the ‘@’ sign.</p>
<h4 id="example--1"><strong>Example:</strong></h4><pre><code class="language-html">&lt;script type="text/javascript"&gt;
function validateEmail()
{
var emailID = document.myForm.EMail.value;
atpos = emailID.indexOf("@");
dotpos = emailID.lastIndexOf(".");
if (atpos &lt; 1 || ( dotpos - atpos &lt; 2 ))
{
alert("Please enter correct email ID")
document.myForm.EMail.focus() ;
return false;
}
return( true );
}
&lt;/script&gt;</code></pre>
<h4 id="output-2"><strong>Output</strong></h4>
<p>Have a look <a href="https://liveweave.com/nznVs6">here</a>.</p>
<h3 id="html5-form-constraints"><strong>HTML5 Form Constraints</strong></h3>
<p>Some of the commonly used HTML5 constraints for <code>&lt;input&gt;</code> are the <code>type</code> attribute (e.g. <code>type="password"</code>), <code>maxlength</code>, <code>required</code> and <code>disabled</code>. A less commonly used constraint is the <code>pattern</code> attribute that takes a JavaScript regular expression.</p>
<h2 id="javascript-if-statement-example">JavaScript If statement example</h2>
<p>The <code>if</code> statement executes a statement if a specified condition is <code>true</code>. If the condition is <code>false</code>, another statement can be executed using the <code>else</code> statement.</p>
<p><strong><strong>Note:</strong></strong> The <code>else</code> statement is optional.</p><pre><code class="language-javascript">if (condition)
/* do something */
else
/* do something else */</code></pre>
<p>Multiple <code>if...else</code> statements can be chained to create an <code>else if</code> clause. This specifies a new condition to test and can be repeated to test multiple conditions, checking until a true statement is presented to execute.</p><pre><code class="language-javascript">if (condition1)
/* do something */
else if (condition2)
/* do something else */
else if (condition3)
/* do something else */
else
/* final statement */</code></pre>
<p><strong><strong>Note:</strong></strong> If you want to execute more than one statement in the <code>if</code>, <code>else</code> or <code>else if</code> part, curly braces are required around the statements:</p><pre><code class="language-javascript">if (condition) {
/* do */
/* something */
/* with multiple statements */
} else {
/* do something */
/* else */
}</code></pre>
<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else" rel="nofollow">MDN link</a> | <a href="https://msdn.microsoft.com/en-us/library/85yyde5c.aspx" rel="nofollow">MSDN link</a></p>
<h2 id="examples-9"><strong>Examples</strong></h2>
<p><strong><strong>Using</strong></strong> <code>if...else</code>:</p><pre><code class="language-javascript">    // If x=5 z=7 and q=42. If x is not 5 then z=19.
if (x == 5) {
z = 7;
q = 42
else
z = 19;</code></pre>
<p><strong><strong>Using</strong></strong> <code>else if</code>:</p><pre><code class="language-javascript">if (x &lt; 10)
return "Small number";
else if (x &lt; 50)
return "Medium number";
else if (x &lt; 100)
return "Large number";
else {
flag = 1;
return "Invalid number";
}</code></pre>
<h2 id="javascript-prototype-example">JavaScript Prototype Example</h2>
<p>JavaScript is a prototype-based language, therefore understanding the prototype object is one of the most important concepts which JavaScript practitioners need to know. </p>
<p>This section will give you a short overview of the Prototype object through various examples. Before reading this part, you will need to have a basic understanding of the <a href="/news/the-complete-guide-to-this-in-javascript/"><code>this</code> reference in JavaScript</a>.</p>
<h3 id="prototype-object"><strong>Prototype object</strong></h3>
<p>For the sake of clarity, let’s examine the following example:</p><pre><code class="language-javascript">function Point2D(x, y) {
this.x = x;
this.y = y;
}</code></pre>
<p>As <code>Point2D</code> function is declared, a default property named <code>prototype</code> will be created for it (note that, in JavaScript, a function is also an object). </p>
<p>The <code>prototype</code> property is an object which contains a <code>constructor</code>property and its value is <code>Point2D</code> function: <code>Point2D.prototype.constructor = Point2D</code>. And when you call <code>Point2D</code> with <code>new</code> keyword, <em>newly created objects will inherit all properties from</em> <code>Point2D.prototype</code>. </p>
<p>To check that, you can add a method named <code>move</code> into <code>Point2D.prototype</code> as follows:</p><pre><code class="language-javascript">Point2D.prototype.move = function(dx, dy) {
this.x += dx;
this.y += dy;
}
var p1 = new Point2D(1, 2);
p1.move(3, 4);
console.log(p1.x); // 4
console.log(p1.y); // 6</code></pre>
<p>The <code>Point2D.prototype</code> is called <strong><strong>prototype object</strong></strong> or <strong><strong>prototype</strong></strong> of <code>p1</code> object and for any other object created with <code>new Point2D(...)</code> syntax. You can add more properties to <code>Point2D.prototype</code> object as you like. The common pattern is to declare methods to <code>Point2D.prototype</code> and other properties will be declared in the constructor function.</p>
<p>Built-in objects in JavaScript are constructed in a similar manner. For example:</p>
<ul>
<li>Prototype of objects created with <code>new Object()</code> or <code>{}</code> syntax is <code>Object.prototype</code>.</li>
<li>Prototype of arrays created with <code>new Array()</code> or <code>[]</code> syntax is <code>Array.prototype</code>.</li>
<li>And so on with other built-in objects such as <code>Date</code> and <code>RegExp</code>.</li>
</ul>
<p><code>Object.prototype</code> is inherited by all objects and it has no prototype (its prototype is <code>null</code>).</p>
<h3 id="prototype-chain"><strong>Prototype chain</strong></h3>
<p>The prototype chain mechanism is simple: When you access a property <code>p</code> on object <code>obj</code>, the JavaScript engine will search this property inside <code>obj</code> object. If the engine fails to search, it continues searching in the prototype of <code>obj</code> object and so on until reaching <code>Object.prototype</code>. If after the search has finished, and nothing has been found, the result will be <code>undefined</code>. For example:</p><pre><code class="language-javascript">var obj1 = {
a: 1,
b: 2
};
var obj2 = Object.create(obj1);
obj2.a = 2;
console.log(obj2.a); // 2
console.log(obj2.b); // 2
console.log(obj2.c); // undefined</code></pre>
<p>In above snippet, the statement <code>var obj2 = Object.create(obj1)</code> will create <code>obj2</code> object with prototype <code>obj1</code> object. In other words, <code>obj1</code> becomes the prototype of <code>obj2</code> instead of <code>Object.prototype</code> by default. As you can see, <code>b</code> is not a property of <code>obj2</code>; you can still access it via the prototype chain. For the <code>c</code> property, however, you get an <code>undefined</code> value because it can’t be found in <code>obj1</code> and <code>Object.prototype</code>.</p>
<h3 id="classes"><strong>Classes</strong></h3>
<p>In ES2016, we now get to use the <code>Class</code> keyword as well as the methods mentioned above to manipulate <code>prototype</code>. The JavaScript <code>Class</code> appeals to developers from OOP backgrounds, but it’s essentially doing the same thing as above.</p><pre><code class="language-javascript">class Rectangle {
constructor(height, width) {
this.height = height
this.width = width
}
get area() {
return this.calcArea()
}
calcArea() {
return this.height * this.width
}
}
const square = new Rectangle(10, 10)
console.log(square.area) // 100</code></pre>
<p>This is basically the same as:</p><pre><code class="language-javascript">function Rectangle(height, width) {
this.height = height
this.width = width
}
Rectangle.prototype.calcArea = function calcArea() {
return this.height * this.width
}</code></pre>
<p>The <code>getter</code> and <code>setter</code> methods in classes bind an Object property to a function that will be called when that property is looked up. It’s just syntactic sugar to help make it easier to <em>look up</em> or <em>set</em> properties.</p>
<h2 id="javascript-scope-example">JavaScript Scope Example</h2>
<p>If you’ve been programming in JavaScript for a while, you’ve undoubtedly run into a concept known as <code>scope</code>. What is <code>scope</code>? Why should you take the time to learn it?</p>
<p>In programmer speak, <code>scope</code> is the <strong><strong>current context of execution</strong></strong>. Confused? Let’s take a look at the following piece of code:</p><pre><code class="language-text">var foo = 'Hi, I am foo!';
var baz = function () {
var bar = 'Hi, I am bar too!';
console.log(foo);
}
baz(); // Hi, I am foo!
console.log(bar); // ReferenceError...</code></pre>
<p>This is a simple example, but it does a good job of illustrating what is known as <em>Lexical scope</em>. JavaScript, and almost every other programming language, has a <em>Lexical scope</em>. There is another kind of scope known as <em>Dynamic scope</em>, but we won’t be discussing that.</p>
<p>Now, the term <em>Lexical scope</em> sounds fancy, but as you will see it’s really simple in principle. In a Lexical Scope, there are two kinds of scopes: the <em>global scope</em> and a <em>local scope</em>.</p>
<p>Before you type the first line of code in your program, a <em>global scope</em> is created for you. This contains all the variables that you declare in your program <strong><strong>outside any functions</strong></strong>.</p>
<p>In the example above, the variable <code>foo</code> is in the global scope of the program, while the variable <code>bar</code> is declared inside a function and is therefore <strong><strong>in the local scope of that function</strong></strong>.</p>
<p>Let's break down the example line by line. While you might be confused at this point, I promise you will have a much better understanding by the time you finish reading this.</p>
<p>On line 1 we are declaring the variable <code>foo</code>. Nothing too fancy here. Let's call this a left-hand size (LHS) reference to <code>foo</code>, because we are assigning a value to <code>foo</code> and it’s on the left-hand side of the <code>equal</code> sign.</p>
<p>On line 3, we are declaring a function and assigning it to variable <code>baz</code>. This is another LHS reference to <code>baz</code>. We are assigning a value to it (remember, functions are values too!). This function is then called on line 8. This is a RHS, or a right-hand side reference to <code>baz</code>. We are retrieving <code>baz</code>’s value, which in this case is a function and then invoking it. </p>
<p>Another RHS reference to <code>baz</code> would be if we assigned its value to another variable, for example <code>foo = baz</code>. This would be a LHS reference to <code>foo</code> and a RHS reference to <code>baz</code>.</p>
<p>The LHS and RHS references might sound confusing, but they are important for discussing scope. Think of it this way: a LHS reference is assigning a value to the variable, while a RHS reference is retrieving the value of the variable. They’re just a shorter and more convenient way of saying ‘retrieving the value’ and ‘assigning a value’.</p>
<p>Let’s now break down what’s happening inside the function itself.</p>
<p>When the compiler compiles the code inside a function, it enters the function’s <strong><strong>local scope</strong></strong>.</p>
<p>On line 4, the variable <code>bar</code> is declared. This is a LHS reference to <code>bar</code>. On the next line, we have a RHS reference to <code>foo</code> inside the <code>console.log()</code>. Remember, we are retrieving <code>foo</code>’s value and then passing it as an argument to the method <code>console.log()</code>.</p>
<p>When we have a RHS reference to <code>foo</code>, the compiler looks for the declaration of the variable <code>foo</code>. The compiler doesn’t find it in the function itself, or the <strong><strong>function’s local scope</strong>,</strong> so it <strong><strong>goes up one level: to the global scope</strong></strong>.</p>
<p>At this point you’re probably thinking that scope has something to do with variables. That is correct. A scope can be thought of as a container for variables. All variables that are created within a local scope are only accessible in that local scope. However, all local scopes can access the global scope. (I know you’re probably even more confused right now, but just bear with me for a few more paragraphs).</p>
<p>So the compiler goes up to the global scope to find a LHS reference to the variable <code>foo</code>. It finds one on line 1, so it retrieves the value from the LHS reference, which is a string: <code>'Hi, I am foo!'</code>. This string is sent to the <code>console.log()</code> method, and outputted to the console.</p>
<p>The compiler has finished executing the code inside the function, so we come back out to line 9. On line 9, we have a RHS reference for the variable <code>bar</code>.</p>
<p>Now, <code>bar</code> was declared in the local scope of <code>baz</code>, but there is a RHS reference for <code>bar</code> in the global scope. Since there is no LHS reference for <code>bar</code> in the global scope, the compiler can’t find a value for <code>bar</code> and throws a ReferenceError.</p>
<p>But, you might ask, if the function can look outside itself for variables, or a local scope can peek into the global scope to find LHS references, why can’t the global scope peek into a local scope? Well that’s how lexical scope works!</p><pre><code class="language-text">... // global scope
var baz = function() {
... // baz's scope
}
... /// global scope</code></pre>
<p>This is the same code from above which illustrates the scope. This forms a sort of hierarchy that goes up to the global scope:</p>
<p><code>baz -&gt; global</code>.</p>
<p>So, if there is a RHS reference for a variable inside <code>baz</code>’s scope, it can be fulfilled by a LHS reference for that variable in the global scope. But the opposite is <strong><strong>not true</strong></strong>.</p>
<p>What if we had another function inside <code>baz</code>?</p><pre><code class="language-text">... // global scope
var baz = function() {
... // baz's scope
var bar = function() {
... // bar's scope.
}
}
... /// global scope</code></pre>
<p>In this case, the hierarchy or the <strong><strong>scope chain</strong></strong> would look like this:</p>
<p><code>bar -&gt; baz -&gt; global</code></p>
<p>Any RHS references inside <code>bar</code>’s local scope can be fulfilled by LHS references in the global scope or <code>baz</code>’s scope, but a RHS reference in <code>baz</code>’s scope cannot be fulfilled by a LHS reference in <code>bar</code>’s scope.</p>
<p><strong><strong>You can only traverse down a scope chain, not up.</strong></strong></p>
<p>There are other two important things you should know about JavaScript scopes.</p>
<ol>
<li>Scopes are declared by functions, not by blocks.</li>
<li>Functions can be forward-referenced, variables can’t.</li>
</ol>
<p>Observe (each comment describes scope at the line that it’s written on):</p><pre><code class="language-text">    // outer() is in scope here because functions can be forward-referenced
function outer() {
// only inner() is in scope here
// because only functions are forward-referenced
var a = 1;
//now 'a' and inner() are in scope
function inner() {
var b = 2
if (a == 1) {
var c = 3;
}
// 'c' is still in scope because JavaScript doesn't care
// about the end of the 'if' block, only function inner()
}
// now b and c are out of scope
// a and inner() are still in scope
}
// here, only outer() is in scope</code></pre>
<h2 id="javascript-for-loop-example">JavaScript For Loop Example</h2>
<h3 id="syntax-8"><strong>Syntax</strong></h3><pre><code class="language-javascript">for ([initialization]); [condition]; [final-expression]) {
// statement
}</code></pre>
<p>The javascript <code>for</code> statement consists of three expressions and a statement:</p>
<ul>
<li>initialization - Run before the first execution on the loop. This expression is commonly used to create counters. Variables created here are scoped to the loop. Once the loop has finished its execution, they are destroyed.</li>
<li>condition - Expression that is checked prior to the execution of every iteration. If omitted, this expression evaluates to true. If it evaluates to true, the loop’s statement is executed. If it evaluates to false, the loop stops.</li>
<li>final-expression - Expression that is run after every iteration. Usually used to increment a counter. But it can be used to decrement a counter too.</li>
<li>statement - Code to be repeated in the loop</li>
</ul>
<p>any of these three expressions or the statement can be omitted. For loops are commonly used to count a certain number of iterations to repeat a statement. Use a <code>break</code> statement to exit the loop before the condition expression evaluates to false.</p>
<h2 id="common-pitfalls"><strong>Common Pitfalls</strong></h2>
<p><strong><strong>Exceeding the bounds of an array</strong></strong></p>
<p>When indexing over an array many times, it is easy to exceed the bounds of the array (ex. try to reference the 4th element of a 3 element array).</p><pre><code class="language-javascript">    // This will cause an error.
// The bounds of the array will be exceeded.
var arr = [ 1, 2, 3 ];
for (var i = 0; i &lt;= arr.length; i++) {
console.log(arr[i]);
}
output:
1
2
3
undefined</code></pre>
<p>There are two ways to fix this code. Set the condition to either <code>i &lt; arr.length</code> or <code>i &lt;= arr.length - 1</code></p>
<h3 id="examples-10"><strong>Examples</strong></h3>
<p>Iterate through integers from 0-8</p><pre><code class="language-javascript">for (var i = 0; i &lt; 9; i++) {
console.log(i);
}
output:
0
1
2
3
4
5
6
7
8</code></pre>
<p>Break out of a loop before condition expression is false</p><pre><code class="language-javascript">for (var elephant = 1; elephant &lt; 10; elephant+=2) {
if (elephant === 7) {
break;
}
console.info('elephant is ' + elephant);
}
output:
elephant is 1
elephant is 3
elephant is 5</code></pre>
<h2 id="javascript-break-statement-example">JavaScript Break Statement Example</h2>
<p>The <strong><strong>break</strong></strong> statement terminates the current loop, <code>switch</code> or <code>label</code> statement and transfers program control to the statement following the terminated statement.</p><pre><code class="language-text">break;</code></pre>
<p>If the <strong><strong>break</strong></strong> statement is used in a labeled statement, the syntax is as follows:</p><pre><code class="language-text">break labelName;</code></pre>
<h2 id="examples-11"><strong>Examples</strong></h2>
<p>The following function has a <strong><strong>break</strong></strong> statement that terminates the <code>while</code> loop when <strong><strong>i</strong></strong> is 3, and then returns the value <strong><strong>3 * x</strong></strong>.</p><pre><code class="language-text">function testBreak(x) {
var i = 0;
while (i &lt; 6) {
if (i == 3) {
break;
}
i += 1;
}
return i * x;
}</code></pre>
<p>In the following example, the counter is set up to count from 1 to 99; however, the <strong><strong>break</strong></strong> statement terminates the loop after 14 counts.</p><pre><code class="language-text">for (var i = 1; i &lt; 100; i++) {
if (i == 15) {
break;
}
}</code></pre>
<h2 id="javascript-do-while-loop-example">JavaScript Do While loop example</h2>
<p>The <code>do...while</code> loop is closely related to the <a href="http://forum.freecodecamp.com/t/javascript-while-loop/14668" rel="nofollow"><code>while</code></a> loop. In the do while loop, the condition is checked at the end of the loop.</p>
<p>Here is the <strong><strong>syntax</strong></strong> for <code>do...while</code> loop:</p>
<h2 id="syntax-"><strong>Syntax:</strong></h2><pre><code class="language-text"> do {
*Statement(s);*
} while (*condition*);</code></pre>
<p><strong><strong>statement(s):</strong></strong> A statement that is executed <strong><strong>at least once</strong></strong> before the condition or Boolean expression is evaluated and is re-executed each time the condition evaluates to true.</p>
<p><strong><strong>condition:</strong></strong> Here, a condition is a <a>Boolean expression</a>. If the Boolean expression evaluates to true, the statement is executed again. When the Boolean expression evaluates to false, the loops ends.</p>
<h2 id="example--2"><strong>Example:</strong></h2><pre><code class="language-text">var i = 0;
do {
i = i + 1;
console.log(i);
} while (i &lt; 5);
Output:
1
2
3
4
5</code></pre>
<h2 id="javascript-for-in-loop-example">JavaScript For In Loop Example</h2>
<p>The <code>for...in</code> statement iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed.</p><pre><code class="language-text">for (variable in object) {
...
}</code></pre>
<p>Required/OptionalParameterDescriptionRequiredVariable: A different property name is assigned to the variable on each iteration. OptionalObject: an object whose enumerable properties are iterated.</p>
<h2 id="examples-12"><strong>Examples</strong></h2><pre><code class="language-text">// Initialize object.
a = { "a": "Athens", "b": "Belgrade", "c": "Cairo" }
// Iterate over the properties.
var s = ""
for (var key in a) {
s += key + ": " + a[key];
s += "&lt;br /&gt;";
}
document.write (s);
// Output:
// a: Athens
// b: Belgrade
// c: Cairo
// Initialize the array.
var arr = new Array("zero", "one", "two");
// Add a few expando properties to the array.
arr["orange"] = "fruit";
arr["carrot"] = "vegetable";
// Iterate over the properties and elements.
var s = "";
for (var key in arr) {
s += key + ": " + arr[key];
s += "&lt;br /&gt;";
}
document.write (s);
// Output:
//   0: zero
//   1: one
//   2: two
//   orange: fruit
//   carrot: vegetable
// Efficient way of getting an object's keys using an expression within the for-in loop's conditions
var myObj = {a: 1, b: 2, c:3}, myKeys = [], i=0;
for (myKeys[i++] in myObj);
document.write(myKeys);
//Output:
//   a
//   b
//   c</code></pre>
<h2 id="javascript-for-of-loop-example">JavaScript For Of Loop Example</h2>
<p>The <code>for...of</code> statement creates a loop iterating over iterable objects (including Array, Map, Set, Arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.</p><pre><code class="language-javascript">    for (variable of object) {
statement
}</code></pre>
<p>Description variable: On each iteration a value of a different property is assigned to the variable.object Object whose enumerable properties are iterated.</p>
<h2 id="examples-13"><strong>Examples</strong></h2>
<h3 id="array"><strong>Array</strong></h3><pre><code class="language-javascript">    let arr = [ "fred", "tom", "bob" ];
for (let i of arr) {
console.log(i);
}
// Output:
// fred
// tom
// bob</code></pre>
<h3 id="map-function map() { [native code] }1"><strong>Map</strong></h3><pre><code class="language-javascript">    var m = new Map();
m.set(1, "black");
m.set(2, "red");
for (var n of m) {
console.log(n);
}
// Output:
// 1,black
// 2,red</code></pre>
<h3 id="set"><strong>Set</strong></h3><pre><code class="language-javascript">    var s = new Set();
s.add(1);
s.add("red");
for (var n of s) {
console.log(n);
}
// Output:
// 1
// red</code></pre>
<h3 id="arguments-object"><strong>Arguments object</strong></h3><pre><code class="language-javascript">    // your browser must support for..of loop
// and let-scoped variables in for loops
function displayArgumentsObject() {
for (let n of arguments) {
console.log(n);
}
}
displayArgumentsObject(1, 'red');
// Output:
// 1
// red</code></pre>
<h2 id="javascript-while-loop-example">JavaScript While Loop Example</h2>
<p>The while loop starts by evaluating the condition. If the condition is true, the statement(s) is/are executed. If the condition is false, the statement(s) is/are not executed. After that, while loop ends.</p>
<p>Here is the <strong><strong>syntax</strong></strong> for the while loop:</p>
<h2 id="syntax--1"><strong>Syntax:</strong></h2><pre><code class="language-text">while (condition)
{
statement(s);
}</code></pre>
<p><em>statement(s):</em> A statement that is executed as long as the condition evaluates to true.</p>
<p><em>condition:</em> Here, the condition is a Boolean expression which is evaluated before each pass through the loop. If this condition evaluates to true, statement(s) is/are executed. When the condition evaluates to false, execution continues with the statement after the while loop.</p>
<h2 id="example--3"><strong>Example:</strong></h2><pre><code class="language-text">    var i = 1;
while (i &lt; 10)
{
console.log(i);
i++; // i=i+1 same thing
}
Output:
1
2
3
4
5
6
7
8
9</code></pre>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
