---
card: "/images/default.jpg"
tags: [JavaScript]
description: I've carefully gone through over 50 resources, I've been thro
author: "Milad E. Fahmy"
title: "JavaScript Interview Prep Cheatsheet – Ace Your Coding Interviews with These Concepts"
created: "2021-08-15T19:23:37+02:00"
modified: "2021-08-15T19:23:37+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-coding-interview tag-interview-tips ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Interview Prep Cheatsheet – Ace Your Coding Interviews with These Concepts</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/06/JS-Interview--2-.png 300w,
/news/content/images/size/w600/2021/06/JS-Interview--2-.png 600w,
/news/content/images/size/w1000/2021/06/JS-Interview--2-.png 1000w,
/news/content/images/size/w2000/2021/06/JS-Interview--2-.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/06/JS-Interview--2-.png" alt="JavaScript Interview Prep Cheatsheet – Ace Your Coding Interviews with These Concepts">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I've carefully gone through over <strong>50</strong> resources, I've been through <strong>10</strong> JavaScript interviews, and I've landed a <strong>job</strong> at a unicorn startup.</p>
<p>And throughout this entire process, I started to see a <em>pattern</em> in the most frequently asked JS interview questions. </p>
<p>In this article, I have tried to list the concepts which will cover <strong>80%</strong> of any good JS interview.</p>
<p>So, if you are prepping for your next JS interview this is the perfect cheatsheet for you to review and solidify your skills. Go through this and you'll be ready to rock. 💃</p>
<h2 id="prerequisites">📝Prerequisites</h2>
<ul>
<li>Basic knowledge of the web and programming</li>
<li>Familiarity with HTML/CSS and JavaScript (especially ES6+ syntax)</li>
</ul>
<h2 id="tableofcontents">Table Of Contents 📜</h2>
<ul>
<li><a href="#javascriptbasics">JavaScript Basics</a> – JS Variables and Array Methods</li>
<li><a href="#functionalprogramminginjavascript">Functional Programming in JavaScript</a> – Scope, Closures, and Hoisting</li>
<li><a href="#objectsinjavascript">Objects in JavaScript</a> – Prototypes and "this"</li>
<li><a href="#asynchronousjavascript">Asynchronous JavaScript</a> – Event Loops, Timers, and Promises</li>
<li><a href="#advancedjavascriptconceptstoknow">Advanced JavaScript Concepts to Know</a> - Async/defer, Polyfills, Debouncing, and Throttling</li>
<li><a href="#storageinjavascript">Storage in JavaScript</a></li>
</ul>
<p><strong>Caveat:</strong> The focus here will largely be to cover concepts relevant to the interview and not to create a comprehensive booklet for learning the language. Treat this more like a cheatsheet.</p>
<p>If you want to dive in deeply and learn more JS concepts, check out <a href="https://www.freecodecamp.org/learn/">freeCodeCamp's curriculum</a>.</p>
<p>With that out of the way - let's go!</p>
<h2 id="javascriptbasics">JavaScript Basics 👶</h2>
<p>Let's start off with some basic concepts every JS developer needs to know.</p>
<h3 id="variablesinjavascript">Variables in JavaScript 📥</h3>
<p>Variables are the building blocks of every programming language. You use them to store values. A variable can be a number, string, and many other types.</p>
<p>Now, JS is a <em>loosely-typed</em> language. You don't have to state the type of variable. You can just declare it, and JS will figure it out on its own.</p>
<p>Now, in JavaScript we have <strong>3</strong> ways to declare variables: <code>var</code>, <code>let</code>, and <code>const</code>.</p>
<p>Here are the key differences:</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2021/06/-wnr0JLxh.png" alt="-wnr0JLxh"></p>
<p>Let's try to understand them through examples.</p>
<p>We will cover scope later on. For now, let's focus on the other differences.</p>
<pre><code class="language-javascript">var a = 3
var a = 4
console.log(a) // 4 as var variables can be redeclared + updated
let b = 3
let b = 4
console.log(b) // Syntax Error as let variables cannot be redeclared
// If we just do, it will work because it can be updated
b = 4
const c = 3
const c = 4
console.log(c) // Syntax Error as const variables cannot be redeclared or updated
const d
// Will this throw an error? Go through the table and try to find the answer.
</code></pre>
<p><strong>Note:</strong> In JavaScript, putting a semi-colon after the end of statement is optional. I will be skipping it here for the sake of readability.</p>
<h3 id="vsinjavascript">== vs === in JavaScript</h3>
<p>Let's compare some variables. There are two ways you can do that.</p>
<p><code>==</code> only checks for the value</p>
<p><code>===</code> checks for value + type</p>
<pre><code class="language-javascript">
let a = 5 // number
let b = '5' // string
console.log(a == b) // true
console.log(a === b) // false
</code></pre>
<h3 id="arraysinjavascript">Arrays in JavaScript</h3>
<p>Now that we know a bit about variables, let's move on to arrays and array-methods.</p>
<p>If we have declared a lot of variables, it makes sense to store them somewhere. Otherwise it will be difficult to keep track of all of them. Arrays are one way of storing a variable.</p>
<pre><code class="language-javascript">
let a = 4
const b = 5
var c = 'hello'
const array = [a, b, c]
// or you can just directly do
const arr = [4,5,'hello']
</code></pre>
<p>But only storing variables in an array is kind of boring. We can do more <em>stuff</em> with this array (like accessing these variables or changing the order in which they are stored or how they are stored).</p>
<p>For that, JS has a lot of methods. Let's look at some of them now.</p>
<h2 id="javascriptarraymethods">JavaScript Array Methods 🧰</h2>
<p>The most frequently used array methods in JS are: <code>map</code>, <code>filter</code>, <code>find</code>, <code>reduce</code>, and <code>forEach</code>.</p>
<p>Let's cover <code>map</code>, <code>filter</code>, and <code>forEach</code>. You can explore more in <a href="/news/complete-introduction-to-the-most-useful-javascript-array-methods/">this helpful article</a>.</p>
<h3 id="themaparraymethod">The <code>map</code> array method</h3>
<p><code>map</code> creates a new copy of the original array. We use it when we want to do something with the elements of the original array but don't want to change it.</p>
<p><code>map</code> iterates over the original array and takes a callback function (which we'll cover later) as an argument. In the callback function, we tell it what to do with the elements.</p>
<pre><code class="language-javascript">const a = [1,2,3,4,5]
// Create a new array which multiplies every element by 2
const d = a.map(function(item){ return item*2 })
console.log(d) // [2,4,6,8,10]
</code></pre>
<h3 id="thefilterarraymethod">The <code>filter</code> array method</h3>
<p><code>filter</code> creates a new array with elements that meet the given condition(s).</p>
<p>Let's look at an example. I have used <a href="/news/arrow-function-javascript-tutorial-how-to-declare-a-js-function-with-the-new-es6-syntax/">arrow functions</a> here. If you are a little uncomfortable with functions, you can cover the next section first and come back.</p>
<pre><code class="language-javascript">// Return the words with more than 6 letters
const words = ['react', 'script', 'interview', 'style', 'javascript']
const ans = words.filter((word) =&gt; word.length &gt; 6)
console.log(ans) // ['interview', 'javascript']
</code></pre>
<p>Try to do the exercises yourself first to test your knowledge. If you come up with different or better solutions, let me know!</p>
<p>Generally, a follow up to this: can you do it without the array method?</p>
<pre><code class="language-javascript">let newArr = []
for (let i = 0; i &lt; words.length; i++) {
if (words[i].length &gt; 6) {
newArr.push(words[i])
}
}
console.log(newArr)
</code></pre>
<h3 id="theforeacharraymethod">The <code>forEach</code> array method</h3>
<p><code>forEach</code> is very similar to <code>map</code> but has two key differences:</p>
<p>First of all, <code>map</code> returns a new Array, but <code>forEach</code> doesn't.</p>
<pre><code class="language-javascript">// Return a new array where even numbers are multiplied by 2
let arr = [1, 2, 3, 4, 5, 6, 7]
function consoleEven(arr) {
let data = arr.map((num) =&gt; (num % 2 === 0 ? num * 2 : num * 1))
console.log(data)  // [1,  4, 3, 8, 5, 12, 7]
}
// ? is the ternary operator. If the condition is true - first statement is returned otherwise the second one.
consoleEven(arr)
</code></pre>
<pre><code class="language-javascript">
function consoleEven(arr) {
let data = arr.forEach((num) =&gt; (num % 2 === 0 ? num * 2 : num * 1))
console.log(data) // undefined
}
consoleEven(arr)
</code></pre>
<p>And second, you can do method chaining in <code>map</code> but not in <code>forEach</code>.</p>
<pre><code class="language-javascript">
// Convert  the new array back to original
function consoleEven(arr) {
let data = arr
.map((num) =&gt; (num % 2 === 0 ? num * 2 : num * 1))
.map((item) =&gt; (item % 2 === 0 ? item / 2 : item / 1))
console.log(data)
}
consoleEven(arr)
</code></pre>
<p><strong>Note:</strong> <code>map</code> and <code>forEach</code> don't mutate (change) the original array.</p>
<h2 id="functionalprogramminginjavascript">Functional Programming in JavaScript 🛠</h2>
<p>We have already used functions above. Let's cover them in more detail now.</p>
<p>Just like how we used variables to store values, we can use functions to store a piece of code which we can reuse.</p>
<p>You can make function in two ways:</p>
<pre><code class="language-javascript">function a(){
console.log('I am a normal function');
}
const b = () =&gt; {
console.log('I am an arrow function')
}
// They are essentially the same but with a few differences which we will cover as we go along this tutorial.
// We can pass variables as arguments
const c = (name) =&gt; {
console.log(`My name is ${name}`)
}
// `` template literal are a new addition to the language. Very useful for string formatting. Values are accessed using ${} inside them.
// We can even pass functions as arguments to a function. Will see more on this when we try to understand closures.
const greet = () =&gt;  {
const prefix = 'Mr'
return (name) =&gt; {
console.log(`${prefix} ${name}, welcome!`)
}
}
console.log(greet()('Jack'))
</code></pre>
<p>Now, let's cover some important concepts related to functions.</p>
<h3 id="functionscopeinjavascript">Function Scope in JavaScript 🕵️</h3>
<p>Scope determines from where the variables are accessible.</p>
<p>There are three types of scope:</p>
<ul>
<li>Global (declaration outside of any function)</li>
<li>Function (declaration inside a function)</li>
<li>Block (declaration inside a block)</li>
</ul>
<p>Remember from before that <code>var</code> is globally scoped whereas <code>let</code> and <code>const</code> are block scoped. Let's understand that now.</p>
<pre><code class="language-javascript">
var a = 5 // we can access this a anywhere
function adder(){
let b = 7
console.log(a + b)
}
console.log(adder())
console.log(b) // Error as b is not accessible outside the function
{
const c = 10
console.log(c) // 10
}
console.log(c) // Error as c is not accessible outside the block
</code></pre>
<h3 id="closuresinjavascriptimportant">Closures in JavaScript (❗important) 🔒</h3>
<p>We have already used a closure without even realizing it. In the example below, <code>prefix</code> is a closed-over-variable.</p>
<pre><code>const greet = () =&gt;  {
const prefix = 'Mr'
return (name) =&gt; {
console.log(`${prefix} ${name}, welcome!`)
}
}
console.log(greet()('Jack'))
</code></pre>
<p>This section will have a lot of fancy words, so bear with me. We will cover them one by one.</p>
<p>MDN says:</p>
<blockquote>
<p>A function bundled together with its lexical environment forms a closure.</p>
</blockquote>
<p>Okay, what is a lexical environment?</p>
<p>It is essentially the surrounding state – the <strong>local memory</strong> along with the lexical environment of its parent.</p>
<p>Whaaat? 🤯 I know it's a bit of a doozy. Let's understand it with a simple example.</p>
<pre><code class="language-javascript">function x() {
var a = 7
function y() {
console.log(a)
}
return y
}
var z = x()
console.log(z) // [Function: y]
z()
</code></pre>
<p>When x is invoked, y is returned. Now, y is waiting to be executed. Kind of like a loaded gun waiting to be shot! 🔫</p>
<p>So, when we finally invoke z, y is invoked. Now, y has to log <code>a</code> so it first tries to find 🔍 it in the <strong>local memory</strong> but it's not there. It goes to its parent function. It finds <code>a</code> there.</p>
<p>Voila! There you have it - <a href="/news/closures-in-javascript/">this is closure</a>.</p>
<p>Even when functions are returned (in the above case y) they still remember their lexical scope (where it came from)</p>
<p>Totally unrelated quote for kicks 👻:</p>
<blockquote>
<p>They may forget what you said - but they will never forget how you made them feel - Carl W. Buehner</p>
</blockquote>
<p>I swear the rest of the article is legit 🤞 Keep reading.</p>
<h3 id="advantagesofclosuresinjavascript">Advantages of Closures in JavaScript 😎</h3>
<ul>
<li>Currying</li>
</ul>
<pre><code class="language-javascript">let add = function (x) {
return function (y) {
console.log(x + y)
}
}
let addByTwo = add(2)
addByTwo(3)
</code></pre>
<ul>
<li>Data Hiding/Encapsulation</li>
</ul>
<p>Suppose you want to create a counter application. Every time you call it, the count increases by 1. But you don't want to expose the variable outside the function. How to do it?</p>
<p>You guessed it – closures!</p>
<pre><code class="language-javascript">function Counter() {
var count = 0
this.incrementCount = function () {
count++
console.log(count)
}
}
console.log(count) // Error: count is not defined
var adder = new Counter()
adder.incrementCount() // 1
</code></pre>
<p>Don't worry about <code>this</code> and <code>new</code>. We have a whole section devoted to them down below.</p>
<h3 id="disadvantagesofclosuresinjavascript">Disadvantages of Closures in JavaScript 😅</h3>
<ul>
<li>Overconsumption of memory or memory leaks can happen.</li>
</ul>
<p>For example, the closed-over-variable will not be garbage collected. This is because, even if the outer function has run, the returned inner function still has a reference to the closed-over-variable.</p>
<p><strong>Note:</strong> Garbage collection basically removes unused variables from the memory automatically.</p>
<h3 id="hoistinginjavascript">Hoisting in JavaScript 🚩</h3>
<p>This is JavaScript's default behavior of moving declarations to the top of the program.</p>
<ul>
<li><code>var</code> declaration is hoisted up and initialized with <code>undefined</code>.</li>
<li><code>let</code> and <code>const</code> declarations are hoisted up but not initialized.</li>
<li><code>function</code> definitions are also hoisted up and stored as they are.</li>
</ul>
<p>Let's look at an example:</p>
<pre><code class="language-javascript">function consoleNum() {
console.log(num)
var num = 10
}
consoleNum() // undefined
// Why no error?
// This is how runtime sees this
{
var num
console.log(num)
num = 9
}
// If instead of var -&gt; let, it will give an error as let values are not initialized
</code></pre>
<p>Phew! I am done with functions here, but if you want more <a href="https://youtu.be/e-5obm1G_FY">check out this amazing talk by Anjana Vakil</a> on functional programming.</p>
<h2 id="objectsinjavascript">Objects in JavaScript 🔮</h2>
<p>Just like arrays, objects are a way of storing data. We do so with the help of key-value pairs.</p>
<pre><code class="language-javascript">
const developer = {
name: "Raj",
age: 22
}
</code></pre>
<p><code>name</code> is the <code>key</code> and <code>Raj</code> is the <code>value</code>. Keys are generally the name of the properties of the object.</p>
<p>We can store all sorts of data like functions inside an object. You can explore more here on the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">MDN</a>.</p>
<h3 id="whatisthisinjavascript">What is <code>this</code> in JavaScript?</h3>
<p>Now, working with objects is different in JS than in other popular programming languages like C++. And to understand that properly, we need a good grasp of the <code>this</code> keyword.</p>
<p>Let's try to understand it step-by-step.</p>
<p>In a program, at times, we need a way to point at stuff. Like saying this function right here belongs to this object. <code>this</code> helps us get this context.</p>
<p>You will understand what I am saying better when we look at some examples.</p>
<p>For now, think of <code>this</code> as something which provides context. And remember this important thing: its value depends on how and where it is called.</p>
<p>I know, I know. A lot of <code>this</code> 😬. Let's go over all this slowly.</p>
<p>Start a new program and just log <code>this</code>.</p>
<pre><code class="language-javascript">
console.log(this)
</code></pre>
<p>It will point to the window object.</p>
<p>Now, let's take an example with an object:</p>
<pre><code class="language-javascript">function myFunc() {
console.log(this)
}
const obj = {
bool: true,
myFunc: myFunc,
}
obj.myFunc()
</code></pre>
<p>Now, <code>this</code> will point to the object. So what's happening here?</p>
<p>In the first example, we had nothing left of the <code>.</code> so it defaulted to the <code>window</code> object. But in this example, we have the object <code>obj</code>.</p>
<p>If you do:</p>
<pre><code class="language-javascript">
myFunc() // window
</code></pre>
<p>We again get the <code>window</code> object. So, we can see that the value of <code>this</code> depends on how and where are we doing the calling.</p>
<p>What we just did above is called <strong>Implicit Binding</strong>. The value of <code>this</code> got bound to the object.</p>
<p>There is another way to use <code>this</code>. <strong>Explicit binding</strong> is when you force a function to use a certain object as its <code>this</code>.</p>
<p>Let's understand why we need explicit binding through an example.</p>
<pre><code class="language-javascript">
const student_1 =  {
name: 'Randall',
displayName_1: function displayName() {
console.log(this.name)
}
}
const student_2 =  {
name: 'Raj',
displayName_2: function displayName() {
console.log(this.name)
}
}
student_1.displayName_1()
student_2.displayName_2()
</code></pre>
<p>We are using <code>this</code> properly, but can you see the problem with the above code?</p>
<p>We are repeating code. And one of the principles of good programming is keep your code DRY! (Don't Repeat Yourself)</p>
<p>So, let's get rid of <code>displayName_2</code> and simply do:</p>
<pre><code class="language-javascript">
student_1.displayName_1.call(student_2) // Raj
</code></pre>
<p><code>call</code> forced <code>displayName_1</code> to use the second object as its <code>this</code>.</p>
<p>There are a lot of other ways we can do this.</p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1622489263380/UwpR9Rscv.png" alt="call-bind-apply.png"></p>
<p>Try to solve the given problem yourself.</p>
<pre><code class="language-javascript">const myData = {
name: 'Rajat',
city: 'Delhi',
displayStay: function () {
console.log(this.name, 'stays in', this.city)
},
}
myData.displayStay()
// create an object yourData and try to use displayStay
const yourData = {
name: 'name',
city: 'city'
}
// answer
myData.displayStay.call(yourData)
</code></pre>
<p>Finally, remember that I said that there are differences between arrow and regular functions.</p>
<p>The case of <code>this</code> is one of them.</p>
<p>For an arrow function, the value depends on the lexical scope – that is to say, the outer function where the arrow function is declared.</p>
<p>So, if we make the <code>displayName()</code> from above an arrow function, nothing will work.</p>
<p>Arrow functions basically inherit the parent's context which in the above case is the <code>window</code>.</p>
<h3 id="prototypesandprototypalinheritanceinjavascript">Prototypes and Prototypal Inheritance in JavaScript 👪</h3>
<blockquote>
<p>Whenever we create anything (like an object or function) in JavaScript, the JS Engine automatically attaches that thing with some properties and methods.</p>
</blockquote>
<p>All this comes via <code>prototypes</code>.</p>
<p><code>__proto__</code> is the object where JS is putting it all.</p>
<p>Let's see some examples. Fire up your consoles!</p>
<pre><code class="language-javascript">let arr = ['Rajat', 'Raj']
console.log(arr.__proto__.forEach)
console.log(arr.__proto__) // same as Array.prototype
console.log(arr.__proto__.__proto__) // same as Object.prototype
console.log(arr.__proto__.__proto__.__proto__) // null
</code></pre>
<p>All this is called a <code>prototype chain</code>.</p>
<p>We can do the same with objects and functions as well.</p>
<p>We will always find <code>Object.prototype</code> behind the scenes. That's why you may have heard that everything in JS is an object. 🤯</p>
<h3 id="whatisprototypalinheritanceinjavascript">What is Prototypal Inheritance in JavaScript?</h3>
<pre><code class="language-javascript">let object = {
name: 'Rajat',
city: 'Delhi',
getIntro: function () {
console.log(`${this.name}, ${this.city}`)
},
}
let object2 = {
name: 'Aditya',
}
</code></pre>
<p><strong>Note:</strong> Don't modify prototypes this way. It's just for understanding. <a href="https://javascript.plainenglish.io/how-prototypal-inheritance-works-in-javascript-and-how-to-convert-it-to-class-based-inheritance-632e31e6350d">Here's the right way to do it</a>.</p>
<pre><code class="language-javascript">object2.__proto__ = object
</code></pre>
<p>By doing this, <code>object2</code> gets access to the object's properties. So, now we can do:</p>
<pre><code class="language-javascript">console.log(object2.city)
</code></pre>
<p>This is <strong>prototypal inheritance</strong>.</p>
<h2 id="asynchronousjavascript">Asynchronous JavaScript ⚡</h2>
<p>So, JS is a <em>single-threaded</em> language. Things happen one at a time. Only after one thing is done can we move to the next thing.</p>
<p>But this creates problems in the real world, especially, when we are working with browsers.</p>
<p>For example, when we need to fetch data from the web - often times we don't know how long will it take to get it. And whether we will be able to get the data successfully.</p>
<p>To help with this, asynchronous JS comes into play.</p>
<p>And the most important concept to understand is the event loop.</p>
<h3 id="eventloopsinjavascript">Event Loops in JavaScript ➰</h3>
<p>Instead of providing a half-baked explanation here, I highly recommend watching this video by Philip Roberts if you haven't already:</p>
<p><a href="https://youtu.be/8aGhZQkoFbQ">Learn all about event loops in JS here</a>.</p>
<h3 id="timersinjavascriptsettimeoutsetintervalclearinterval">Timers in JavaScript – setTimeout, setInterval, clearInterval ⏱️</h3>
<p>I hope you watched the video. It mentioned timers. Let's talk about them more now. These are very frequently asked about in interviews.</p>
<p>The <code>setTimeout()</code> method calls a function or evaluates an expression after a specified number of milliseconds.</p>
<p><code>setInterval()</code> does the same for specified intervals.</p>
<pre><code class="language-javascript">
setTimeout(() =&gt; {
console.log('Here - I am after 2 seconds')
}, 2000);
const timer = setInterval(() =&gt; {
console.log('I will keep on coming back until you clear me')
}, 2000);
</code></pre>
<p>You use <code>clearInterval()</code> to stop the timer.</p>
<pre><code>clearInterval(timer)
</code></pre>
<p>Let's go over some questions that use these concepts.</p>
<pre><code class="language-javascript">  console.log('Hello')
setTimeout(() =&gt; {
console.log('lovely')
}, 0)
console.log('reader')
// output
Hello
reader
lovely
</code></pre>
<p>Here's a slightly trickier one:</p>
<pre><code class="language-javascript">  for (var i = 1; i &lt;= 5; i++) {
setTimeout(function () {
console.log(i)
}, i * 1000)
}
// output
6
6
6
6
6
</code></pre>
<p>And here's a short explanation of what's going on there: when <code>setTimeout</code> comes again into the picture, the entire loop has run and the value of <code> i</code> has become 6,</p>
<p>Now, let's say we want the outcome to be 1 2 3 4 5 – what do we do?</p>
<p>Instead of <code>var</code> ➡️ use <code>let</code>.</p>
<p>Why this will work?</p>
<p><code>var</code> is globally scoped but <code>let</code> is locally scoped. So for <code>let</code> a new <code>i</code> is created for every iteration.</p>
<h3 id="promisesinjavascriptimportant">Promises in JavaScript (❗important) 🤝</h3>
<p>Promises are at the heart of Asynchronous JS.</p>
<blockquote>
<p>The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.</p>
</blockquote>
<p>A promise can be in one of these three states:</p>
<ul>
<li>Pending: initial state, neither fulfilled nor rejected</li>
<li>Fulfilled: operation was completed successfully</li>
<li>Rejected: operation failed</li>
</ul>
<pre><code class="language-javascript">const promise = new Promise((resolve, reject) =&gt; {
let value = true
if (value) {
resolve('hey value is true')
} else {
reject('there was an error, value is false')
}
})
promise
.then((x) =&gt; {
console.log(x)
})
.catch((err) =&gt; console.log(err))
</code></pre>
<p><strong>Note:</strong> <code>resolve</code> and <code>reject</code> are just conventional names. Call it pizza🍕 if you like.</p>
<p>Instead of <code>then/catch</code>, we can also use <code>async/await</code>:</p>
<pre><code class="language-javascript">async function asyncCall() {
const result = await promise
console.log(result)
}
asyncCall()
</code></pre>
<p>One of the advantages of promises is that they are a much cleaner syntax. Before we had promises, we could easily get stuck in <a href="http://callbackhell.com/">callback hell</a> 🌋</p>
<h2 id="advancedjavascriptconceptstoknow">Advanced JavaScript Concepts to Know</h2>
<h3 id="polyfillsinjavascript">📚 Polyfills in JavaScript</h3>
<blockquote>
<p>A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it. <a href="https://developer.mozilla.org/en-US/docs/Glossary/Polyfill">MDN</a></p>
</blockquote>
<ul>
<li>Let's implement it for <code>map</code>:</li>
</ul>
<pre><code class="language-javascript">// this - array
// this[i] - current value
Array.prototype.myMap = function (cb) {
var arr = []
for (var i = 0; i &lt; this.length; i++) {
arr.push(cb(this[i], i, this))
}
return arr
}
const arr = [1, 2, 3]
console.log(arr.myMap((a) =&gt; a * 2)) // [2, 4, 6]
</code></pre>
<p>Notice how we use <code>this</code>. Here, we have basically created a new array and are adding values to it.</p>
<h3 id="asyncanddeferinjavascript">Async and defer in JavaScript ✔️</h3>
<p>These concepts are frequently asked about in interviews by big corporations like Amazon, Walmart, and Flipkart. 🏢</p>
<p>To understand <code>async</code> and <code>defer</code>, we need to have an idea of how browsers render a webpage. First, they parse the HTML and CSS. Then DOM trees are created. From these, a render tree is created. Finally, from the render tree - a layout is created and the painting happens.</p>
<p>For a more detailed look, check out <a href="https://youtu.be/SmE4OwHztCc">this video</a>.</p>
<p>Async and defer are <code>boolean</code> attributes which can be loaded along with the script tags. They are useful for loading external scripts into your web page.</p>
<p>Let's understand with the help of pictures.</p>
<p><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1621781371965/PciAdUTCL.png" alt="18-async-defer.png"><br>
<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1621781403795/VgIYFtP5T.png" alt="19-async-defer.png"><br>
<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1621781415787/mJEkxqe_i.png" alt="20-async.png"><br>
<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1621781428927/2nUaI8fjr.png" alt="21-defer.png">
</p>
<p>If there are multiple scripts which are dependant on each other, use <code>defer</code>. Defer script are executed in the order which they are defined.</p>
<p>If you want to load external script which is not dependant on the execution of any other scripts, use <code>async</code>.</p>
<p><strong>Note:</strong> The async attribute does not guarantee the order of execution of scripts.</p>
<h3 id="debouncinginjavascript">Debouncing in JavaScript ⛹️‍♂️</h3>
<p>Debouncing is another favorite topic of interviewers.</p>
<p>Let's understand it by creating a search bar.</p>
<p><strong>Demo:</strong> <a href="https://codesandbox.io/s/debounce-input-field-o5gml">https://codesandbox.io/s/debounce-input-field-o5gml</a></p>
<p>Create a simple input field in <code>index.html</code> like this:</p>
<pre><code class="language-javascript">&lt;input type='text' id='text' /&gt;
</code></pre>
<p>Now, in <code>index.js</code>. Don't forget to add it to <code>index.html</code> first:</p>
<pre><code class="language-javascript">const getData = (e) =&gt; {
console.log(e.target.value)
}
const inputField = document.getElementById('text')
const debounce = function (fn, delay) {
let timer
return function () {
let context = this
clearTimeout(timer)
timer = setTimeout(() =&gt; {
fn.apply(context, arguments)
}, delay)
}
}
inputField.addEventListener('keyup', debounce(getData, 300))
</code></pre>
<p>First, we have selected the input and added an <code>event listener</code> to it. Then we created a debounce function which takes a callback function and delay.</p>
<p>Now, inside the debounce function we create a timer using <code>setTimeout</code>. Now, this timer's job is to make sure that the next call for <code>getData</code> only happens after 300 ms. This is what debouncing is.</p>
<p>Also, we use <code>clearTimeout</code> to remove it. Don't want too many of them hanging out there taking up memory space!</p>
<p>Phew! Lots of theory. Let's do a fun challenge. You must have seen the countdown before a game starts (it goes like 10, 9, 8, .... with some delay in between). Try to write a program for it.</p>
<p>Here's how you'd do it:</p>
<pre><code class="language-javascript">let count = 10
for (let i = 0; i &lt; 10; i++) {
function timer(i) {
setTimeout(() =&gt; {
console.log(count)
count--
}, i * 500)
}
timer(i)
}
</code></pre>
<p>Were you able to solve it? Did you do it differently? Let me know your solution.</p>
<h3 id="throttlinginjavascript">Throttling in JavaScript 🛑</h3>
<p>Let's look at an example again. Suppose that on every window resize event we call an expensive function. Now, we want it such that the expensive function will only be executed once in the given time interval. This is what throttling is.</p>
<p>Create an <code>index.html</code> and an <code>index.js</code> with the following code:</p>
<pre><code class="language-javascript">const expensive = () =&gt; {
console.log('expensive')
}
const throttle = (fn, limit) =&gt; {
let context = this
let flag = true
return function () {
if (flag) {
fn.apply(context, arguments)
flag = false
}
setTimeout(() =&gt; {
flag = true
}, limit)
}
}
const func = throttle(expensive, 2000)
window.addEventListener('resize', func)
</code></pre>
<p>Almost the same as debouncing. The key difference is the <code>flag</code> variable. Only, when it's true we are invoking the callback function. And it is set to <code>true</code> inside the <code>setTimeout</code>. So the value is <code>true</code> only after the desired time limit.</p>
<h3 id="sowhatsthedifferencebetweendebounceandthrottling">So, what's the difference between debounce and throttling❓</h3>
<p>Let's take the search bar 🔍 example from above. When we are debouncing the input field, we are saying to only fetch the data when the difference between two <code>keyup</code> events is at least 300 ms.</p>
<p>In the case of throttling, we make a function call only after a certain period of time.</p>
<p>Suppose that you are searching for an encyclopedia in the search bar. The first call is made on <code>e</code> and it took us 300 ms to reach <code>p</code>. The next call will be made then only. All the events in between will be ignored.</p>
<p>So, to summarize, debouncing is when the difference between two <code>keyup</code> events is 300 ms. And throttling is when the difference between two function calls is 300 ms. Basically, the function is called after a certain interval of time.</p>
<h2 id="storageinjavascript">Storage in JavaScript 💾</h2>
<p>Finally, a small but important topic to wrap things up.</p>
<p><strong>localStorage:</strong> Data persists even after closing your session</p>
<p><strong>sessionStorage:</strong> You lose your data when your session is over, like when you close the browser on the tab.</p>
<pre><code class="language-javascript">// save
localStorage.setItem('key', 'value')
// get saved data
let data = localStorage.getItem('key')
// remove saved data
localStorage.removeItem('key')
// Same for sessionStorage
</code></pre>
<p>And we are done! 🏁 I hope you feel more confident about your next JS interview now. I wish you all the best.</p>
<p>If you have any queries / suggestions / feedback, you can reach me on Twitter: <a href="https://twitter.com/rajatetc">https://twitter.com/rajatetc</a>.</p>
<h2 id="mainreferences">🗃️ Main References</h2>
<ul>
<li><a href="https://developer.mozilla.org/en-US/">MDN Docs</a></li>
<li><a href="https://www.youtube.com/channel/UC3N9i_KvKZYP4F84FPIzgPQ">Akshay Saini</a></li>
<li><a href="https://www.youtube.com/channel/UCMZFwxv5l-XtKi693qMJptA">Coding Addict</a></li>
<li><a href="https://www.instagram.com/javascript_interviews/">Javascript_Interviews</a></li>
</ul>
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
