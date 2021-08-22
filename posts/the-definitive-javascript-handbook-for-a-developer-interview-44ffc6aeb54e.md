---
card: "https://cdn-media-1.freecodecamp.org/images/1*FfREbc94Ge3K3DYG_tEqaQ.jpeg"
tags: [JavaScript]
description: "by Gustavo Azevedo"
author: "Milad E. Fahmy"
title: "The Definitive JavaScript Handbook for your next developer interview"
created: "2021-08-16T10:20:02+02:00"
modified: "2021-08-16T10:20:02+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development tag-programming tag-careers tag-startup ">
<header class="post-full-header">
<h1 class="post-full-title">The Definitive JavaScript Handbook for your next developer interview</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*FfREbc94Ge3K3DYG_tEqaQ.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*FfREbc94Ge3K3DYG_tEqaQ.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*FfREbc94Ge3K3DYG_tEqaQ.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*FfREbc94Ge3K3DYG_tEqaQ.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*FfREbc94Ge3K3DYG_tEqaQ.jpeg" alt="The Definitive JavaScript Handbook for your next developer interview">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
typeof true     // boolean
typeof 'Hello'  // string
typeof Math     // object
typeof null     // object  !!
typeof Symbol('Hi')   // symbol (New ES6)</code></pre><ul><li><strong>Null vs. Undefined</strong></li></ul><p><strong>Undefined </strong>is the absence of a definition. It is used as the default value for uninitialized variables, function arguments that were not provided and missing properties of objects. Functions return <code>undefined</code> when nothing has been explicitly returned.</p><p><strong>Null </strong>is the absence of a value. It is an assignment value that can be assigned to a variable as a representation of ‘no-value’.</p><ul><li><strong>Implicit coercion</strong></li></ul><p>Take a look at the following example:</p><pre><code class="language-js">var name = 'Joey';
if (name) {
console.log(name + " doesn't share food!")  // Joey doesn’t share food!
}</code></pre><p>In this case, the string variable <code>name</code> is coerced to true and you have ‘Joey doesn’t share food!’ printed in our console. But how do you know what will be coerced to true and what will be coerced to false?</p><p>Falsy values are values that will be coerced to <code>false</code> when forced a boolean coercion on it.</p><p>Falsy values: <code>""</code>, <code>0</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>, <code>false</code>.</p><p>Anything not explicitly on the falsy list is truthy —<em> </em><strong>boolean coerced to true</strong>.</p><pre><code class="language-js">Boolean(null)   // false
Boolean('hello')// true
Boolean('0')    // true
Boolean(' ')    // true
Boolean([])     // true
Boolean(function(){}) // true</code></pre><p>Yes. You read it right. Empty arrays, objects and functions are boolean coerced to true!</p><ul><li><strong>String &amp; Number coercion</strong></li></ul><p>The first thing you need to be aware of is the <code>+</code> operator. This is a tricky operator because it works for both number addition and string concatenation.</p><p>But, the *, / , and <code>-</code>operators are exclusive for numeric operations. When these operators are used with a string, it forces the string to be coerced to a number.</p><pre><code class="language-js">1 + "2" = "12"
"" + 1 + 0 = "10"
"" - 1 + 0 = -1
"-9\n" + 5 = "-9\n5"
"-9\n" - 5 = -14
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
null + 1 = 1
undefined + 1 = NaN</code></pre><ul><li><strong>== vs. ===</strong></li></ul><p>It is widely spread that <code>==</code> checks for equality and <code>===</code> checks for equality and type. Well, that is a misconception.</p><p>In fact, == checks for <strong>equality with coercion</strong> and === checks for equality without coercion — <strong>strict equality</strong>.</p><pre><code class="language-js">2 == '2'      // True
2 === '2'     // False
undefined == null   // True
undefined === null  // False</code></pre><p>Coercion can be tricky. Take a look at the following code:</p><p>What would you expect for the following comparison?<br><code>console.log(a == b);</code> <code>(1)</code></p><p>This comparison actually returns True. Why?<br>What really happens under the hood is that if you are comparing a <code>boolean</code> with something other than a <code>boolean</code>, JavaScript coerces that <code>boolean</code> to a <code>number</code> and compares. <code>(2)</code></p><p>This comparison is now between a <code>number</code> and a <code>string</code>. JavaScript now coerces that <code>string</code> to a <code>number</code> and compares both numbers. <code>(3)</code></p><p>In this case, the final comparison <code>0 == 0</code> is True.</p><pre><code class="language-js">'0' == false   (1)
'0' == 0 (2)
0  == 0 (3)</code></pre><p>For a fully comprehension on how such comparisons are performed, you can check ES5 documentation <a href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3" rel="noopener">here</a>.</p><p>For a cheat sheet, you can click <a href="http://dorey.github.io/JavaScript-Equality-Table/" rel="noopener">here</a>.</p><p>Some tricky comparisons to look out for:</p><pre><code class="language-js">false == ""  // true
false == []  // true
false == {}  // false
"" == 0// true
"" == []     // true
"" == {}     // false
0 == []// true
0 == {}// false
0 == null    // false</code></pre><h3 id="value-vs-reference">Value vs. Reference</h3><p>Simple values (also known as primitives) are always assigned by value-copy: <code>null</code>, <code>undefined</code> , <code>boolean</code>, <code>number</code>, <code>string</code> and ES6 <code>symbol</code>.</p><p>Compound values always create a copy of the reference on assignment: objects, which includes arrays, and functions.</p><pre><code class="language-js">var a = 2;  // 'a' hold a copy of the value 2.
var b = a;  // 'b' is always a copy of the value in 'a'
b++;
console.log(a);   // 2
console.log(b);   // 3
var c = [1,2,3];
var d = c;  // 'd' is a reference to the shared value
d.push( 4 );// Mutates the referenced value (object)
console.log(c);   // [1,2,3,4]
console.log(d);   // [1,2,3,4]
/* Compound values are equal by reference */
var e = [1,2,3,4];
console.log(c === d);  // true
console.log(c === e);  // false</code></pre><p>To copy a compound value by value, you need to <strong>make</strong><em> </em>a copy of it. The reference does not point to the original value.</p><h3 id="scope">Scop<em>e</em></h3><p>Scope refers to the execution context. It defines the accessibility of variables and functions in the code.</p><p><strong>Global Scope</strong> is the outermost scope. Variables declared outside a function are in the global scope and can be accessed in any other scope. In a browser, the window object is the global scope.</p><p><strong>Local Scope</strong> is a scope nested inside another function scope. Variables declared in a local scope are accessible within this scope as well as in any inner scopes.</p><pre><code class="language-js">function outer() {
let a = 1;
function inner() {
let b = 2;
function innermost() {
let c = 3;
console.log(a, b, c);   // 1 2 3
}
innermost();
console.log(a, b);  // 1 2 — 'c' is not defined
}
inner();
console.log(a);       // 1 — 'b' and 'c' are not defined
}
outer();</code></pre><p>You may think of Scopes as a series of doors decreasing in size (from biggest to smallest). A short person that fits through the smallest door — <strong>innermost scope</strong><em> — </em>also fits through any bigger doors — <strong>outer scopes</strong>.</p><p>A tall person that gets stuck on the third door, for example, will have access to all previous doors — <strong>outer scopes</strong><em> — </em>but not any further doors — <strong>inner scopes</strong>.</p><h3 id="hoisting">Hoisting</h3><p>The behavior of “moving” <code>var</code> and <code>function</code> declarations to the top of their respective scopes during the compilation phase is called <strong>hoisting</strong>.</p><p>Function declarations are completely hoisted. This means that a declared function can be called before it is defined.</p><pre><code class="language-js">console.log(toSquare(3));  // 9
function toSquare(n){
return n*n;
}</code></pre><p>Variables are partially hoisted. <code>var</code> declarations are hoisted but not its assignments.</p><p><code>let</code> and <code>const</code> are not hoisted.</p><pre><code class="language-js">{  /* Original code */
console.log(i);  // undefined
var i = 10
console.log(i);  // 10
}
{  /* Compilation phase */
var i;
console.log(i);  // undefined
i = 10
console.log(i);  // 10
}
// ES6 let &amp; const
{
console.log(i);  // ReferenceError: i is not defined
const i = 10
console.log(i);  // 10
}
{
console.log(i);  // ReferenceError: i is not defined
let i = 10
console.log(i);  // 10
}</code></pre><h3 id="function-expression-vs-function-declaration">Function Expression vs. Function Declaration</h3><ul><li><strong>Function Expression</strong><br>A Function Expression is created when the execution reaches it and is usable from then on — it is not hoisted.</li></ul><pre><code class="language-js">var sum = function(a, b) {
return a + b;
}</code></pre><ul><li><strong>Function Declaration</strong><br>A Function Declaration can be called both before and after it was defined — it is hoisted.</li></ul><pre><code class="language-js">function sum(a, b) {
return a + b;
}</code></pre><h3 id="variables-var-let-and-const">Variables: var, let and const</h3><p>Before ES6, it was only possible to declare a variable using <code>var</code>. Variables and functions declared inside another function cannot be accessed by any of the enclosing scopes — they are function-scoped.</p><p>Variables declared inside a block-scope, such as <code>if</code> statements and <code>for</code> loops, can be accessed from outside of the opening and closing curly braces of the block.</p><p><strong>Note</strong>: An undeclared variable — assignment without <code>var</code>, <code>let</code> or <code>const</code> — creates a <code>var</code> variable in global scope.</p><pre><code class="language-js">function greeting() {
console.log(s) // undefined
if(true) {
var s = 'Hi';
undeclaredVar = 'I am automatically created in global scope';
}
console.log(s) // 'Hi'
}
console.log(s);  // Error — ReferenceError: s is not defined
greeting();
console.log(undeclaredVar) // 'I am automatically created in global scope'</code></pre><p>ES6 <code>let</code> and <code>const</code> are new. They are not hoisted and block-scoped alternatives for variable declaration. This means that a pair of curly braces define a scope in which variables declared with either let or const are confined in.</p><pre><code class="language-js">let g1 = 'global 1'
let g2 = 'global 2'
{   /* Creating a new block scope */
g1 = 'new global 1'
let g2 = 'local global 2'
console.log(g1)   // 'new global 1'
console.log(g2)   // 'local global 2'
console.log(g3)   // ReferenceError: g3 is not defined
let g3 = 'I am not hoisted';
}
console.log(g1)    // 'new global 1'
console.log(g2)    // 'global 2'</code></pre><p>A common misconception is that <code>const </code>is immutable. It cannot be reassigned, but its properties can be<strong> changed</strong>!</p><pre><code class="language-js">const tryMe = 'initial assignment';
tryMe = 'this has been reassigned';  // TypeError: Assignment to constant variable.
// You cannot reassign but you can change it…
const array = ['Ted', 'is', 'awesome!'];
array[0] = 'Barney';
array[3] = 'Suit up!';
console.log(array);     // [“Barney”, “is”, “awesome!”, “Suit up!”]
const airplane = {};
airplane.wings = 2;
airplane.passengers = 200;
console.log(airplane);   // {passengers: 200, wings: 2}</code></pre><h3 id="closure">Closure</h3><p>A <strong>closure</strong> is the combination of a function and the lexical environment from which it was declared. Closure allows a function to access variables from an enclosing scope — <strong>environment</strong> — even after it leaves the scope in which it was declared.</p><pre><code class="language-js">function sayHi(name){
var message = `Hi ${name}!`;
function greeting() {
console.log(message)
}
return greeting
}
var sayHiToJon = sayHi('Jon');
console.log(sayHiToJon)     // ƒ() { console.log(message) }
console.log(sayHiToJon())   // 'Hi Jon!'</code></pre><p>The above example covers the two things you need to know about closures:</p><ol><li>Refers to variables in outer scope.<br>The returned function access the <code>message</code> variable from the enclosing scope.</li><li>It can refer to outer scope variables even after the outer function has returned. <br><code>sayHiToJon</code> is a reference to the <code>greeting</code> function, created when <code>sayHi</code> was run. The <code>greeting</code> function maintains a reference to its outer scope —<strong> environment</strong><em> </em>— in which <code>message</code> exists.</li></ol><p>One of the main benefits of closures is that it allows <strong>data encapsulation</strong>. This refers to the idea that some data should not be directly exposed. The following example illustrates that.</p><p>By the time <code>elementary</code> is created, the outer function has already returned. This means that the <code>staff</code> variable only exists inside the closure and it cannot be accessed otherwise.</p><pre><code class="language-js">function SpringfieldSchool() {
let staff = ['Seymour Skinner', 'Edna Krabappel'];
return {
getStaff: function() { console.log(staff) },
addStaff: function(name) { staff.push(name) }
}
}
let elementary = SpringfieldSchool()
console.log(elementary)  // { getStaff: ƒ, addStaff: ƒ }
console.log(staff)       // ReferenceError: staff is not defined
/* Closure allows access to the staff variable */
elementary.getStaff()    // ["Seymour Skinner", "Edna Krabappel"]
elementary.addStaff('Otto Mann')
elementary.getStaff()    // ["Seymour Skinner", "Edna Krabappel", "Otto Mann"]</code></pre><p>Let’s go deeper into closures by solving one of the most common interview problems on this subject:<br>What is wrong with the following code and how would you fix it?</p><pre><code class="language-js">const arr = [10, 12, 15, 21];
for (var i = 0; i &lt; arr.length; i++) {
setTimeout(function() {
console.log(`The value ${arr[i]} is at index: ${i}`);
}, (i+1) * 1000);
}</code></pre><p>Considering the above code, the console will display four identical messages <code>"The value undefined is at index: 4"</code>. This happens because each function executed within the loop will be executed after the whole loop has completed, referencing to the last value stored in <code>i</code>, which was 4.</p><p>This problem can be solved by using IIFE, which creates a unique scope for each iteration and storing each value within its scope.</p><pre><code class="language-js">const arr = [10, 12, 15, 21];
for (var i = 0; i &lt; arr.length; i++) {
(function(j) {
setTimeout(function() {
console.log(`The value ${arr[j]} is at index: ${j}`);
}, j * 1000);
})(i)
}</code></pre><p>Another solution would be declaring the <code>i</code> variable with <code>let</code>, which creates the same result.</p><pre><code class="language-js">const arr = [10, 12, 15, 21];
for (let i = 0; i &lt; arr.length; i++) {
setTimeout(function() {
console.log(`The value ${arr[i]} is at index: ${i}`);
}, (i) * 1000);
}</code></pre><h3 id="immediate-invoked-function-expression-iife-">Immediate Invoked Function Expression (IIFE)</h3><p>An IIFE is a function expression that is called immediately after you define it. It is usually used when you want to create a new variable scope.</p><p>The <strong>(surrounding parenthesis) </strong>prevents from treating it as a function declaration.</p><p>The <strong>final parenthesis() </strong>are executing the function expression.</p><p>On IIFE you are calling the function exactly when you are defining it.</p><pre><code class="language-js">var result = [];
for (var i=0; i &lt; 5; i++) {
result.push( function() { return i } );
}
console.log( result[1]() ); // 5
console.log( result[3]() ); // 5
result = [];
for (var i=0; i &lt; 5; i++) {
(function () {
var j = i; // copy current value of i
result.push( function() { return j } );
})();
}
console.log( result[1]() ); // 1
console.log( result[3]() ); // 3</code></pre><p>Using IIFE:</p><ul><li>Enables you to attach private data to a function.</li><li>Creates fresh environments.</li><li>Avoids polluting the global namespace.</li></ul><h3 id="context">Context</h3><p><strong>Context</strong> is often confused as the same thing as Scope. To clear things up, lets keep the following in mind:<br><strong>Context</strong> is most often determined by how a function is invoked. It always refers to the value of <code>this</code> in a particular part of your code.<br><strong>Scope </strong>refers to the visibility of variables.</p><h3 id="function-calls-call-apply-and-bind">Function calls: call, apply and bind</h3><p>All of these three methods are used to attach <code>this</code><strong> </strong>into function and the difference is in the function invocation.</p><p><code>.call()</code> invokes the function immediately and requires you to pass in arguments as a list (one by one).</p><p><code>.apply()</code> invokes the function immediately and allows you to pass in arguments as an array.</p><p><code>.call()</code> and <code>.apply()</code> are mostly equivalent and are used to borrow a method from an object. Choosing which one to use depends on which one is easier to pass the arguments in. Just decide whether it’s easier to pass in an array or a comma separated list of arguments.</p><p><strong>Quick tip:</strong> <strong>A</strong>pply for <strong>A</strong>rray — <strong>C</strong>all for <strong>C</strong>omma.</p><pre><code class="language-js">const Snow = {surename: 'Snow'}
const char = {
surename: 'Stark',
knows: function(arg, name) {
console.log(`You know ${arg}, ${name} ${this.surename}`);
}
}
char.knows('something', 'Bran');        // You know something, Bran Stark
char.knows.call(Snow, 'nothing', 'Jon');// You know nothing, Jon Snow
char.knows.apply(Snow, ['nothing', 'Jon']);   // You know nothing, Jon Snow</code></pre><p><strong>Note</strong>: If you pass in an array as one of the arguments on a call function, it will treat that entire array as a single element. <br>ES6 allows us to spread an array as arguments with the call function.</p><pre><code>char.knows.call(Snow, ...["nothing", "Jon"]);  // You know nothing, Jon Snow</code></pre><p><code>.bind()</code> returns a new function, with a certain context and parameters. It is usually used when you want a function to be called later with a certain context.</p><p>That is possible thanks to its ability to maintain a given context for calling the original function. This is useful for asynchronous callbacks and events.</p><p><code>.bind()</code> works like the call function. It requires you to pass in the arguments one by one separated by a comma.</p><pre><code class="language-js">const Snow = {surename: 'Snow'}
const char = {
surename: 'Stark',
knows: function(arg, name) {
console.log(`You know ${arg}, ${name} ${this.surename}`);}
}
const whoKnowsNothing = char.knows.bind(Snow, 'nothing');
whoKnowsNothing('Jon');  // You know nothing, Jon Snow</code></pre><h3 id="-this-keyword">'this' keyword</h3><p>Understanding the keyword <code>this</code><strong> </strong>in JavaScript, and what it is referring to, can be quite complicated at times.</p><p>The value of <code>this</code><strong> </strong>is usually determined by a functions execution context. Execution context simply means how a function is called.</p><p>The keyword <code>this</code><strong> </strong>acts as a placeholder, and will refer to whichever object called that method when the method is actually used.</p><p>The following list is the ordered rules for determining this. Stop at the first one that applies:</p><ul><li><code><strong>new</strong></code><strong> binding</strong><em> — </em>When using the <code>new</code> keyword to call a function, <code>this</code><strong> </strong>is the newly constructed object.</li></ul><pre><code class="language-js">function Person(name, age) {
this.name = name;
this.age =age;
console.log(this);
}
const Rachel = new Person('Rachel', 30);   // { age: 30, name: 'Rachel' }</code></pre><ul><li><strong>Explicit binding</strong><em> — </em>When call or apply are used to call a function, <code>this</code><strong> </strong>is the object that is passed in as the argument.<br><strong>Note</strong>: <code>.bind()</code> works a little bit differently. It creates a new function that will call the original one with the object that was bound to it.</li></ul><pre><code class="language-js">function fn() {
console.log(this);
}
var agent = {id: '007'};
fn.call(agent);    // { id: '007' }
fn.apply(agent);   // { id: '007' }
var boundFn = fn.bind(agent);
boundFn();   // { id: '007' }</code></pre><ul><li><strong>Implicit binding</strong><em> — </em>When a function is called with a context (the containing object), <code>this</code><strong> </strong>is the object that the function is a property of.<br>This means that a function is being called as a method.</li></ul><pre><code class="language-js">var building = {
floors: 5,
printThis: function() {
console.log(this);
}
}
building.printThis();  // { floors: 5, printThis: function() {…} }</code></pre><ul><li><strong>Default binding</strong><em> </em>— If none of the above rules applies, <code>this</code><strong> </strong>is the global object (in a browser, it’s the window object).<br>This happens when a function is called as a standalone function.<br>A function that is not declared as a method automatically becomes a property of the global object.</li></ul><pre><code class="language-js">function printWindow() {
console.log(this)
}
printWindow();  // window object</code></pre><p><strong>Note</strong>: This also happens when a standalone function is called from within an outer function scope.</p><pre><code class="language-js">function Dinosaur(name) {
this.name = name;
var self = this;
inner();
function inner() {
alert(this);  // window object — the function has overwritten the 'this' context
console.log(self);  // {name: 'Dino'} — referencing the stored value from the outer context
}
}
var myDinosaur = new Dinosaur('Dino');</code></pre><ul><li><strong>Lexical this</strong><em> — </em>When a function is called with an arrow function <code>=&gt;</code>, <code>this</code> receives the <code>this</code> value of its surrounding scope at the time it’s created. <code>this</code> keeps the value from its original context.</li></ul><pre><code class="language-js">function Cat(name) {
this.name = name;
console.log(this);   // { name: 'Garfield' }
( () =&gt; console.log(this) )();   // { name: 'Garfield' }
}
var myCat = new Cat('Garfield');</code></pre><h3 id="strict-mode">Strict Mode</h3><p>JavaScript is executed in strict mode by using the <code>“use strict”</code> directive. Strict mode tightens the rules for parsing and error handling on your code.</p><p>Some of its benefits are:</p><ul><li><strong>Makes debugging easier </strong>— Code errors that would otherwise have been ignored will now generate errors, such as assigning to non-writable global or property.</li><li><strong>Prevents accidental global variables</strong> — Assigning a value to an undeclared variable will now throw an error.</li><li><strong>Prevents invalid use of delete</strong> — Attempts to delete variables, functions and undeletable properties will now throw an error.</li><li><strong>Prevents duplicate property names or parameter values</strong> — Duplicated named property in an object or argument in a function will now throw an error. (This is no longer the case in ES6)</li><li><strong>Makes eval() safer </strong>— Variables and functions declared inside an <code>eval()</code> statement are not created in the surrounding scope.</li><li><strong>“Secures” JavaScript eliminating this coercion</strong> — Referencing a <code>this</code> value of null or undefined is not coerced to the global object. This means that in browsers it’s no longer possible to reference the window object using <code>this</code> inside a function.</li></ul><h3 id="-new-keyword"><strong>`new` keyword</strong></h3><p>The <code>new</code> keyword invokes a function in a special way. Functions invoked using the <code>new</code> keyword are called <strong>constructor functions</strong>.</p><p>So what does the <code>new</code> keyword actually do?</p><ol><li>Creates a new object.</li><li>Sets the <strong>object’s</strong> prototype<em> </em>to be the prototype<em> </em>of the <strong>constructor function</strong>.</li><li>Executes the constructor function with <code>this</code> as the newly created object.</li><li>Returns the created object. If the constructor returns an object, this object is returned.</li></ol><pre><code class="language-js">// In order to better understand what happens under the hood, lets build the new keyword
function myNew(constructor, ...arguments) {
var obj = {}
Object.setPrototypeOf(obj, constructor.prototype);
return constructor.apply(obj, arguments) || obj
}</code></pre><p>What is the difference between invoking a function with the <code>new</code> keyword and without it?</p><pre><code class="language-js">function Bird() {
this.wings = 2;
}
/* invoking as a normal function */
let fakeBird = Bird();
console.log(fakeBird);    // undefined
/* invoking as a constructor function */
let realBird= new Bird();
console.log(realBird)     // { wings: 2 }</code></pre><h3 id="prototype-and-inheritance">Prototype and Inheritance</h3><p>Prototype is one of the most confusing concepts in JavaScript and one of the reason for that is because there are two different contexts in which the word <strong>prototype </strong>is used.</p><ul><li><strong>Prototype relationship</strong><br>Each object has a <strong>prototype</strong><em> </em>object, from which it inherits all of its prototype’s properties.<br><code>.__proto__</code> is a non-standard mechanism (available in ES6) for retrieving the prototype<em> </em>of an object <em>(*)</em>. It points to the object’s “parent” —<strong> </strong>the <strong>object’s prototype</strong>. <br>All normal objects also inherit a <code>.constructor</code> property that points to the constructor of the object. Whenever an object is created from a constructor function, the <code>.__proto__</code> property links that object to the <code>.prototype</code> property of the constructor function used to create it.<br><em>(*) <code>Object.getPrototypeOf()</code></em>is the standard ES5 function for retrieving the prototype of an object.</li><li><strong>Prototype property </strong><br>Every function has a <code>.prototype</code> property. <br>It references to an object used to attach properties that will be inherited by objects further down the prototype chain. This object contains, by default, a <code>.constructor</code> property that points to the original constructor function. <br>Every object created with a constructor function inherits a constructor property that points back to that function.</li></ul><pre><code class="language-js">function Dog(breed, name){
this.breed = breed,
this.name = name
}
Dog.prototype.describe = function() {
console.log(`${this.name} is a ${this.breed}`)
}
const rusty = new Dog('Beagle', 'Rusty');
/* .prototype property points to an object which has constructor and attached
properties to be inherited by objects created by this constructor. */
console.log(Dog.prototype)  // { describe: ƒ , constructor: ƒ }
/* Object created from Dog constructor function */
console.log(rusty)   //  { breed: "Beagle", name: "Rusty" }
/* Object inherited properties from constructor function's prototype */
console.log(rusty.describe())   // "Rusty is a Beagle"
/* .__proto__ property points to the .prototype property of the constructor function */
console.log(rusty.__proto__)    // { describe: ƒ , constructor: ƒ }
/* .constructor property points to the constructor of the object */
console.log(rusty.constructor)  // ƒ Dog(breed, name) { ... }</code></pre><h4 id="prototype-chain"><strong>Prototype Chain</strong></h4><p>The prototype chain is a series of links between objects that reference one another.</p><p>When looking for a property in an object, JavaScript engine will first try to access that property on the object itself.</p><p>If it is not found, the JavaScript engine will look for that property on the object it inherited its properties from — the <strong>object’s prototype</strong>.</p><p>The engine will traverse up the chain looking for that property and return the first one it finds.</p><p>The last object in the chain is the built-in <code>Object.prototype</code>, which has <code>null</code> as its <strong>prototype</strong>. Once the engine reaches this object, it returns <code>undefined</code>.</p><h4 id="own-vs-inherited-properties">Own vs Inherited Properties</h4><p>Objects have own properties and inherited properties.</p><p>Own properties are properties that were defined on the object.</p><p>Inherited properties were inherited through prototype chain.</p><pre><code class="language-js">function Car() { }
Car.prototype.wheels = 4;
Car.prototype.airbags = 1;
var myCar = new Car();
myCar.color = 'black';
/*  Check for Property including Prototype Chain:  */
console.log('airbags' in myCar)  // true
console.log(myCar.wheels)  // 4
console.log(myCar.year)    // undefined
/*  Check for Own Property:  */
console.log(myCar.hasOwnProperty('airbags'))  // false — Inherited
console.log(myCar.hasOwnProperty('color'))    // true</code></pre><p><strong>Object.create(</strong><em>obj</em><strong>) </strong>— Creates a new object with the specified <strong>prototype</strong><em> </em>object and properties.</p><pre><code class="language-js">var dog = { legs: 4 };
var myDog = Object.create(dog);
console.log(myDog.hasOwnProperty('legs'))  // false
console.log(myDog.legs)              // 4
console.log(myDog.__proto__ === dog) // true</code></pre><h4 id="inheritance-by-reference"><strong>Inheritance by reference</strong></h4><p>An inherited property is a copy by reference of the <strong>prototype object’s</strong><em> </em>property from which it inherited that property.</p><p>If an object’s property is mutated on the prototype, objects which inherited that property will share the same mutation. But if the property is replaced, the change will not be shared.</p><pre><code class="language-js">var objProt = { text: 'original' };
var objAttachedToProt = Object.create(objProt);
console.log(objAttachedToProt.text)   // original
objProt.text = 'prototype property changed';
console.log(objAttachedToProt.text)   // prototype property changed
objProt = { text: 'replacing property' };
console.log(objAttachedToProt.text)   // prototype property changed</code></pre><h4 id="classical-inheritance-vs-prototypal-inheritance"><strong>Classical Inheritance vs. Prototypal Inheritance</strong></h4><p>In classical inheritance, objects inherit from classes — like a blueprint or a description of the object to be created — and create sub-class relationships. These objects are created via constructor functions using the new keyword.</p><p>The downside of classical inheritance is that it causes:</p><ul><li>inflexible hierarchy</li><li>tight coupling problems</li><li>fragile base class problems</li><li>duplication problems</li><li>And the so famous gorilla/banana problem — <em>“What you wanted was a banana, what you got was a gorilla holding the banana, and the entire jungle.”</em></li></ul><p>In prototypal inheritance, objects inherit directly from other objects. Objects are typically created via <code>Object.create()</code>, object literals or factory functions.</p><p>There are three different kinds of prototypal inheritance:</p><ul><li><strong>Prototype delegation</strong> — A delegate prototype is an object which is used as a model for another object. When you inherit from a delegate prototype, the new object gets a reference to the prototype and its properties. <br>This process is usually accomplished by using <code>Object.create()</code>.</li><li><strong>Concatenative inheritance </strong>— The process of inheriting properties from one object to another by copying the object’s prototype properties, without retaining a reference between them. <br>This process is usually accomplished by using <code>Object.assign()</code>.</li><li><strong>Functional inheritance</strong> — This process makes use of a <em>factory function(*)</em> to create an object, and then adds new properties directly to the created object.<em> </em><br>This process has the benefit of allowing data encapsulation via closure.<br><strong><em>(*)Factory function</em></strong> is a function that is not a class or constructor that returns an object without using the <code>new</code> keyword.</li></ul><pre><code class="language-js">const person = function(name) {
const message = `Hello! My name is ${name}`;
return { greeting: () =&gt; console.log(message) }
}
const will = person("Will");
console.log('First message')
}
const second = function () {
console.log('Second message')
}
const third = function() {
console.log('Third message')
}
first();
setTimeout(second, 0);
third();
// Output:
// First message
// Third message
// Second message</code></pre><ol><li>Initially the Browser console is clear and the Call Stack and Event Manager are empty.</li><li><code>first()</code> is added to the Call Stack.</li><li><code>console.log("First message")</code> is added to the Call Stack.</li><li><code>console.log("First message")</code> is executed and the Browser console displays <strong>“First message”</strong><em>.</em></li><li><code>console.log("First message")</code> is removed from the Call Stack.</li><li><code>first()</code> is removed from the Call Stack.</li><li><code>setTimeout(second, 0)</code> is added to the Call Stack.</li><li><code>setTimeout(second, 0)</code> is executed and handled by the Event Manager. And after 0ms the Event Manager moves <code>second()</code> to the Callback Queue.</li><li><code>setTimeout(second, 0)</code> is now completed and removed from the Call Stack.</li><li><code>third()</code> is added to the Call Stack.</li><li><code>console.log("Third message")</code> is added to the Call Stack.</li><li><code>console.log("Third message")</code> is executed and the Browser console displays <strong>“Third message”</strong><em>.</em></li><li><code>console.log("Third message")</code> is removed from the Call Stack.</li><li><code>third()</code> is removed from the Call Stack.</li><li>Call Stack is now empty and the <code>second()</code> function is waiting to be invoked in the Callback Queue.</li><li>The Event Loop moves <code>second()</code> from the Callback Queue to the Call Stack.</li><li><code>console.log("Second message")</code> is added to the Call Stack.</li><li><code>console.log("Second message")</code> is executed and the Browser console displays <strong>“Second message”</strong>.</li><li><code>console.log("Second message")</code> is removed from the Call Stack.</li><li><code>second()</code> is removed from the Call Stack.</li></ol><p><strong>Note</strong>: The <code>second()</code> function is not executed after 0ms. The <strong>time</strong> you pass in to <code>setTimeout</code> function does not relate to the delay of its execution. The Event Manager will wait the given time<em> </em>before moving that function into the Callback Queue. Its execution will only take place on a future ‘tick’ in the Event Loop.</p><p>Thanks and congratulations for reading up to this point! If you have any thoughts on this, feel free to leave a comment.</p><p>You can find me on <a href="https://github.com/gustavoaz7">GitHub</a> or <a href="https://twitter.com/intent/follow?screen_name=gustavoaz7_" rel="noopener">Twitter</a>.</p>
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
