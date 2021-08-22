---
card: "https://cdn-media-1.freecodecamp.org/images/1*2K1k1leVNAnXnscL1KBjEQ.jpeg"
tags: [JavaScript]
description: "Discover Functional JavaScript was named one of the best new "
author: "Milad E. Fahmy"
title: "Learn these JavaScript fundamentals and become a better developer"
created: "2021-08-15T23:47:51+02:00"
modified: "2021-08-15T23:47:51+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-coding tag-tech tag-programming tag-self-improvement ">
<header class="post-full-header">
<h1 class="post-full-title">Learn these JavaScript fundamentals and become a better developer</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*2K1k1leVNAnXnscL1KBjEQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*2K1k1leVNAnXnscL1KBjEQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*2K1k1leVNAnXnscL1KBjEQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*2K1k1leVNAnXnscL1KBjEQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*2K1k1leVNAnXnscL1KBjEQ.jpeg" alt="Learn these JavaScript fundamentals and become a better developer">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE" rel="nofollow noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener noopener nofollow noopener nofollow noopener"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the <a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781" rel="noopener nofollow nofollow noopener"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><p>JavaScript has primitives, objects and functions. All of them are values. All are treated as objects, even primitives.</p><h3 id="primitives">Primitives</h3><p>Number, boolean, string, <code>undefined</code> and <code>null</code> are primitives.</p><h4 id="number">Number</h4><p>There is only one number type in JavaScript, the 64-bit binary floating point type. Decimal numbers’ arithmetic is inexact.</p><p>As you may already know, <code>0.1 + 0.2</code> does not make <code>0.3</code> . But with integers, the arithmetic is exact, so <code>1+2 === 3</code> .</p><p>Numbers inherit methods from the <code>Number.prototype</code> object. Methods can be called on numbers:</p><pre><code>(123).toString();  //"123"
(1.23).toFixed(1); //"1.2"</code></pre><p>There are functions for converting strings to numbers : <code>Number.parseInt()</code>, <code>Number.parseFloat()</code> and <code>Number()</code>:</p><pre><code>Number.parseInt("1") //1
Number.parseInt("text")    //NaN
Number.parseFloat("1.234") //1.234
Number("1")          //1
Number("1.234")      //1.234</code></pre><p>Invalid arithmetic operations or invalid conversions will not throw an exception, but will result in the <code>NaN</code> “Not-a-Number” value. <code>Number.isNaN()</code> can detect <code>NaN</code> .</p><p>The <code>+</code> operator can add or concatenate.</p><pre><code>1 + 1      //2
"1" + "1"  //"11"
1 + "1"    //"11"</code></pre><h4 id="string">String</h4><p>A string stores a series of Unicode characters. The text can be inside double quotes <code>""</code> or single quotes <code>''</code>.</p><p>Strings inherit methods from <code>String.prototype</code>. They have methods like : <code>substring()</code>, <code>indexOf()</code> and <code>concat()</code> .</p><pre><code>"text".substring(1,3) //"ex"
"text".indexOf('x')   //2
"text".concat(" end") //"text end"</code></pre><p>Strings, like all primitives, are immutable. For example <code>concat()</code> doesn’t modify the existing string but creates a new one.</p><h4 id="boolean">Boolean</h4><p>A boolean has two values : <code>true</code> and <code>false</code> .<br>The language has truthy and falsy values.<br><code>false</code>, <code>null</code>, <code>undefined</code>, <code>''</code>(empty string), <code>0 </code>and <code>NaN</code> are falsy. All other values, including all objects, are truthy.</p><p>The truthy value is evaluated to <code>true</code> when executed in a boolean context. Falsy value is evaluated to <code>false</code>. Take a look at the next example displaying the <code>false</code> branch.</p><pre><code>let text = '';
if(text) {
console.log("This is true");
} else {
console.log("This is false");
}</code></pre><p>The equality operator is <code>===</code>. The not equal operator is <code>!==</code> .</p><h3 id="variables">Variables</h3><p>Variables can be defined using <code>var</code>, <code>let</code> and <code>const</code>.</p><p><code>var</code> declares and optionally initializes a variable. Variables declared with <code>var</code> have a function scope. They are treated as declared at the top of the function. This is called variable hoisting.</p><p>The <code>let</code> declaration has a block scope.</p><p>The value of a variable that is not initialize is <code>undefined</code> .</p><p>A variable declared with <code>const</code> cannot be reassigned. Its value, however, can still be mutable. <code>const</code> freezes the variable, <code>Object.freeze()</code> freezes the object. The <code>const</code> declaration has a block scope.</p><h3 id="objects">Objects</h3><p>An object is a dynamic collection of properties.</p><p>The property key is a unique string. When a non string is used as the property key, it will be converted to a string. The property value can be a primitive, object, or function.</p><p>The simplest way to create an object is to use an object literal:</p><pre><code>let obj = {
message : "A message",
doSomething : function() {}
}</code></pre><p>There are two ways to access properties: dot notation and bracket notation. We can read, add, edit and remove an object’s properties at any time.</p><ul><li>get: <code>object.name</code>, <code>object[expression]</code></li><li>set: <code>object.name = value,</code> <code>object[expression] = value</code></li><li>delete: <code>delete object.name</code>, <code>delete object[expression]</code></li></ul><pre><code>let obj = {}; //create empty object
obj.message = "A message"; //add property
obj.message = "A new message"; //edit property
delete obj.message; //delete property</code></pre><p>Objects can be used as maps. A simple map can be created using <code>Object.create(null)</code> :</p><pre><code>let french = Object.create(null);
french["yes"] = "oui";
french["no"]  = "non";
french["yes"];//"oui"</code></pre><p>All object’s properties are public. <code>Object.keys()</code> can be used to iterate over all properties.</p><pre><code>function logProperty(name){
console.log(name); //property name
console.log(obj[name]); //property value
}
Object.keys(obj).forEach(logProperty);</code></pre><p><code>Object.assign()</code> copies all properties from one object to another. An object can be cloned by copying all its properties to an empty object:</p><pre><code>let book = { title: "The good parts" };
let clone = Object.assign({}, book);</code></pre><p>An immutable object is an object that once created cannot be changed. If you want to make the object immutable, use <code>Object.freeze()</code> .</p><h4 id="primitives-vs-objects">Primitives vs Objects</h4><p>Primitives (except <code>null</code> and <code>undefined</code>) are treated like objects, in the sense that they have methods but they are not objects.</p><p>Numbers, strings, and booleans have object equivalent wrappers. These are the <code>Number</code>, <code>String</code>, and <code>Boolean</code> functions.</p><p>In order to allow access to properties on primitives, JavaScript creates an wrapper object and then destroys it. The process of creating and destroying wrapper objects is optimized by the JavaScript engine.</p><p>Primitives are immutable, and objects are mutable.</p><h3 id="array">Array</h3><p>Arrays are indexed collections of values. Each value is an element. Elements are ordered and accessed by their index number.</p><p>JavaScript has array-like objects. Arrays are implemented using objects. Indexes are converted to strings and used as names for retrieving values.</p><p>A simple array like <code>let arr = ['A', 'B', 'C']</code> is emulated using an object like the one below:</p><pre><code>{
'0': 'A',
'1': 'B',
'2': 'C'
}</code></pre><p>Note that <code>arr[1]</code> gives the same value as <code>arr['1']</code> : <code>arr[1] === arr['1']</code> .</p><p>Removing values from the array with <code>delete</code> will leave holes. <code>splice()</code> can be used to avoid the problem, but it can be slow.</p><pre><code>let arr = ['A', 'B', 'C'];
delete arr[1];
console.log(arr); // ['A', empty, 'C']
console.log(arr.length); // 3</code></pre><p>JavaScript’s arrays don’t throw “index out of range” exceptions. If the index is not available, it will return <code>undefined</code>.</p><p>Stack and queue can easily be implemented using the array methods:</p><pre><code>let stack = [];
stack.push(1);     // [1]
stack.push(2);     // [1, 2]
let last = stack.pop();  // [1]
console.log(last); // 2
let queue = [];
queue.push(1);     // [1]
queue.push(2);     // [1, 2]
let first = queue.shift();//[2]
console.log(first);// 1</code></pre><h2 id="functions">Functions</h2><p>Functions are independent units of behavior.</p><p>Functions are objects. Functions can be assigned to variables, stored in objects or arrays, passed as an argument to other functions, and returned from functions.</p><p>There are three ways to define a function:</p><ul><li>Function Declaration (aka Function Statement)</li><li>Function Expression (aka Function Literal)</li><li>Arrow Function</li></ul><h2 id="the-function-declaration">The Function Declaration</h2><ul><li><code>function</code> is the first keyword on the line</li><li>it must have a name</li><li>it can be used before definition. Function declarations are moved, or “hoisted<strong><strong>”, </strong></strong>to the top of their scope.</li></ul><pre><code>function doSomething(){}</code></pre><p>The Function Expression</p><ul><li><code>function</code> is not the first keyword on the line</li><li>the name is optional. There can be an anonymous function expression or a named function expression.</li><li>it needs to be defined, then it can execute</li><li>it can auto-execute after definition (called “IIFE” Immediately Invoked Function Expression)</li></ul><pre><code>let doSomething = function() {}</code></pre><h2 id="arrow-function">Arrow Function</h2><p>The arrow function is a sugar syntax for creating an anonymous functionexpression.</p><pre><code>let doSomething = () =&gt; {};</code></pre><p>Arrow functions don’t have their own <code>this</code> and <code>arguments</code>.</p><h2 id="function-invocation">Function invocation</h2><p>A function, defined with the <code>function</code> keyword, can be invoked in different ways:</p><ul><li>Function form</li></ul><pre><code>doSomething(arguments)</code></pre><ul><li>Method form</li></ul><pre><code>theObject.doSomething(arguments)
theObject["doSomething"](arguments)</code></pre><ul><li>Constructor form</li></ul><pre><code>new Constructor(arguments)</code></pre><ul><li>Apply form</li></ul><pre><code> doSomething.apply(theObject, [arguments])
doSomething.call(theObject, arguments)</code></pre><p>Functions can be invoked with more or fewer arguments than declared in the definition. The extra arguments will be ignored, and the missing parameters will be set to <code>undefined</code>.</p><p>Functions (except arrow functions) have two pseudo-parameters: <code>this</code> and <code>arguments</code>.</p><h2 id="this">this</h2><p>Methods are functions that are stored in objects. Functions are independent. In order for a function to know on which object to work on<code>this</code> is used. <code>this</code> represents the function’s context.</p><p>There is no point to use <code>this </code>when a function is invoked with the function form: <code>doSomething()</code>. In this case <code>this</code> is <code>undefined</code> or is the <code>window</code> object, depending if the strict mode is enabled or not.</p><p>When a function is invoked with the method form <code>theObject.doSomething()</code>,<code>this</code> represents the object.</p><p>When a function is used as a constructor <code>new Constructor()</code>, <code>this</code>represents the newly created object.</p><p>The value of <code>this</code> can be set with <code>apply()</code> or <code>call()</code>:<code>doSomething.apply(theObject)</code>. In this case <code>this</code> is the object sent as the first parameter to the method.</p><p>The value of <code>this</code> depends on how the function was invoked, not where the function was defined. This is of course a source of confusion.</p><h2 id="arguments">arguments</h2><p>The <code>arguments</code> pseudo-parameter gives all the arguments used at invocation. It’s an array-like object, but not an array. It lacks the array methods.</p><pre><code>function log(message){
console.log(message);
}
function logAll(){
let args = Array.prototype.slice.call(arguments);
return args.forEach(log);
}
logAll("msg1", "msg2", "msg3");</code></pre><p>An alternative is the new rest parameters syntax. This time <code>args</code> is an array object.</p><pre><code>function logAll(...args){
return args.forEach(log);
}</code></pre><h2 id="return">return</h2><p>A function with no <code>return</code> statement returns <code>undefined</code>. Pay attention to the automatic semi-colon insertion when using <code>return</code>. The following function will not return an empty object, but rather an <code>undefined</code> one.</p><pre><code>function getObject(){
return
{
}
}
getObject()</code></pre><p>To avoid the issue, use <code>{</code> on the same line as <code>return</code> :</p><pre><code>function getObject(){
return {
}
}</code></pre><h2 id="dynamic-typing">Dynamic Typing</h2><p>JavaScript has dynamic typing. Values have types, variables do not. Types can change at run time.</p><pre><code>function log(value){
console.log(value);
}
log(1);
log("text");
log({message : "text"});</code></pre><p>The <code>typeof()</code> operator can check the type of a variable.</p><pre><code>let n = 1;
typeof(n);   //number
let s = "text";
typeof(s);   //string
let fn = function() {};
typeof(fn);  //function</code></pre><h2 id="a-single-thread">A Single Thread</h2><p>The main JavaScript runtime is single threaded. Two functions can’t run at the same time. The runtime contains an Event Queue which stores a list of messages to be processed. There are no race conditions, no deadlocks.However, the code in the Event Queue needs to run fast. Otherwise the browser will become unresponsive and will ask to kill the task.</p><h2 id="exceptions">Exceptions</h2><p>JavaScript has an exception handling mechanism. It works like you may expect, by wrapping the code using the <code>try/catch</code> statement. The statement has a single <code>catch</code> block that handles all exceptions.</p><p>It’s good to know that JavaScript sometimes has a preference for silent errors. The next code will not throw an exception when I try to modify a frozen object:</p><pre><code>let obj = Object.freeze({});
obj.message = "text";</code></pre><p>Strict mode eliminates some JavaScript silent errors. <code>"use strict";</code> enables strict mode.</p><h2 id="prototype-patterns">Prototype Patterns</h2><p><code>Object.create()</code>, constructor function, and <code>class</code> build objects over the prototype system.</p><p>Consider the next example:</p><pre><code>let servicePrototype = {
doSomething : function() {}
}
let service = Object.create(servicePrototype);
console.log(service.__proto__ === servicePrototype); //true</code></pre><p><code>Object.create()</code> builds a new object <code>service</code> which has the<code>servicePrototype</code> object as its prototype. This means that <code>doSomething()</code> is available on the <code>service</code> object. It also means that the <code>__proto__</code> property of <code>service</code> points to the <code>servicePrototype</code> object.</p><p>Let’s now build a similar object using <code>class</code>.</p><pre><code>class Service {
doSomething(){}
}
let service = new Service();
console.log(service.__proto__ === Service.prototype);</code></pre><p>All methods defined in the <code>Service</code> class will be added to the<code>Service.prototype</code> object. Instances of the <code>Service</code> class will have the same prototype (<code>Service.prototype</code>) object. All instances will delegate method calls to the <code>Service.prototype</code> object. Methods are defined once on<code>Service.prototype</code> and then inherited by all instances.</p><h2 id="prototype-chain">Prototype chain</h2><p>Objects inherit from other objects. Each object has a prototype and inherits their properties from it. The prototype is available through the “hidden” property <code>__proto__</code> .</p><p>When you request a property which the object does not contain, JavaScript will look down the prototype chain until it either finds the requested property, or until it reaches the end of the chain.</p><h2 id="functional-patterns">Functional Patterns</h2><p>JavaScript has first class functions and closures. These are concepts that open the way for Functional Programming in JavaScript. As a result, higher order functions are possible.</p><p><code>filter()</code>,<code> map()</code>, <code>reduce()</code> are the basic toolbox for working with arrays in a function style.</p><p><code>filter()</code><strong><strong> </strong></strong>selects values from a list based on a predicate function that decides what values should be kept.</p><p><code>map()</code> transforms a list of values to another list of values using a mapping function.</p><pre><code>let numbers = [1,2,3,4,5,6];
function isEven(number){
return number % 2 === 0;
}
function doubleNumber(x){
return x*2;
}
let evenNumbers = numbers.filter(isEven);
//2 4 6
let doubleNumbers = numbers.map(doubleNumber);
//2 4 6 8 10 12</code></pre><p><code>reduce()</code><em><em> </em></em>reduces a list of values to one value.</p><pre><code>function addNumber(total, value){
return total + value;
}
function sum(...args){
return args.reduce(addNumber, 0);
}
sum(1,2,3); //6</code></pre><p>Closure is an inner function that has access to the parent function’s variables, even after the parent function has executed. <a href="https://jsfiddle.net/cristi_salcescu/wxzy52mq/?source=post_page---------------------------">Look at the next example</a>:</p><pre><code>function createCount(){
let state = 0;
return function count(){
state += 1;
return state;
}
}
let count = createCount();
console.log(count()); //1
console.log(count()); //2</code></pre><p><code>count()</code> is a nested function. <code>count()</code> accesses the variable <code>state</code> from its parent. It survives the invocation of the parent function <code>createCount()</code>.<code>count()</code> is a closure.</p><p>A higher order function is a function that takes another function as an input, returns a function, or does both.</p><p><code>filter()</code>,<code> map()</code>, <code>reduce()</code> are higher-order functions.</p><p>A pure function is a function that returns a value based only of its input. Pure functions don’t use variables from the outer functions. Pure functions cause no mutations.</p><p>In the previous examples <code>isEven()</code>, <code>doubleNumber()</code>, <code>addNumber()</code> and <code>sum()</code>are pure functions.</p><h2 id="conclusion">Conclusion</h2><p>The power of JavaScript lies in its simplicity.</p><p>Knowing the JavaScript fundamentals makes us better at understanding and using the language.</p><p>Learn <strong><strong>functional React</strong></strong>, in a project-based way, with <a href="https://read.amazon.com/kp/embed?asin=B0846NRJYR&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_o.hlEbDD02JB2" rel="noopener nofollow"><strong><strong>Functional Architecture with React and Redux</strong></strong></a><strong><strong>.</strong></strong></p><p><a href="https://read.amazon.com/kp/embed?asin=B07PBQJYYG&amp;preview=newtab&amp;linkCode=kpe&amp;ref_=cm_sw_r_kb_dp_cm5KCbE5BDJGE&amp;source=post_page---------------------------"><strong><strong>Discover Functional JavaScript</strong></strong></a> was named one of the<strong><strong> </strong></strong><a href="https://bookauthority.org/books/new-functional-programming-books?t=7p46zt&amp;s=award&amp;book=1095338781&amp;source=post_page---------------------------"><strong><strong>best new Functional Programming books by BookAuthority</strong></strong></a><strong><strong>!</strong></strong></p><p><strong><strong>For more on applying functional programming techniques in React take a look at</strong></strong> <strong><strong><a href="https://www.amazon.com/dp/B088FZQ1XN">Functional React</a>.</strong></strong></p><p><a href="https://twitter.com/cristi_salcescu" rel="noopener nofollow nofollow noopener nofollow noopener nofollow noopener">Follow on Twitter</a></p>
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
