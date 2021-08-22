---
card: "https://cdn-media-1.freecodecamp.org/images/0*OQO-Q5kH6KyxOGXf.jpg"
tags: [JavaScript]
description: "Have you been there before? Where Javascript just doesn’t see"
author: "Milad E. Fahmy"
title: "How not to be afraid of JavaScript anymore"
created: "2021-08-16T11:32:30+02:00"
modified: "2021-08-16T11:32:30+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-technology tag-productivity tag-learning-to-code ">
<header class="post-full-header">
<h1 class="post-full-title">How not to be afraid of JavaScript anymore</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/0*OQO-Q5kH6KyxOGXf.jpg 300w,
https://cdn-media-1.freecodecamp.org/images/0*OQO-Q5kH6KyxOGXf.jpg 600w,
https://cdn-media-1.freecodecamp.org/images/0*OQO-Q5kH6KyxOGXf.jpg 1000w,
https://cdn-media-1.freecodecamp.org/images/0*OQO-Q5kH6KyxOGXf.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/0*OQO-Q5kH6KyxOGXf.jpg" alt="How not to be afraid of JavaScript anymore">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<h4 id="things-to-know-to-be-a-great-javascript-developer">Things to know to be a great Javascript developer</h4><p>Have you been there before? Where Javascript just doesn’t seem to work. Where the functions you write don’t do what you expect them to? Where <code>this</code> just doesn’t make sense? What is <code>this</code>? This is <code>this</code>.</p><p>I have. So, I wrote this article. It covers everything from closures and classes to objects and hoisting.</p><p>It has helped me become a better developer. I hope it helps you too.</p><h3 id="data-model">Data Model</h3><h4 id="the-types">The types</h4><p>Stick with me. I’m doing this because there are two not so well-known types I want you to know about: Symbols and Numbers.</p><p>Also the difference between undefined and null eludes many.</p><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number" rel="noopener">Number</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" rel="noopener">String</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean" rel="noopener">Boolean</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" rel="noopener">Function</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object" rel="noopener">Object</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol" rel="noopener">Symbol</a></li><li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined" rel="noopener">undefined</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null" rel="noopener">null</a></li></ul><h4 id="numbers">Numbers</h4><p>All numbers in JS are “double precision 64-bit format IEEE 754 values”. Commonly known as floats, which means there is no concept of an integer. Your integers are stored as floats.</p><p>To convert strings to numbers: use <code>parseInt('123', 10)</code> . The second argument is the base. So, when dealing with binary, you could do:</p><pre><code class="language-js">&gt; parseInt('101',2)
5</code></pre><p>Similarly, <code>parseFloat('number')</code> exists for floating point numbers. The base here is always 10.</p><h4 id="symbols">Symbols</h4><p>The only purpose of this data type is to identify object properties. Iteration protocol and Regex are the most popular examples using Symbols. We’ll cover the iteration protocol in the next part!</p><p>You can create one via <code>Symbol()</code>. Every call generates a new symbol. Thus,</p><pre><code class="language-js">console.log(Symbol(42) === Symbol(42)) // false</code></pre><p>Symbols can persist across files in JavaScript. In this sense, they are different from global variables.</p><p>There exists a global symbol registry which stores all symbols encountered. To add a Symbol to the registry, use <code>Symbol.for()</code>, and to retrieve the symbol use <code>Symbol.keyFor()</code>.</p><p>More information on Symbols see <a href="https://developer.mozilla.org/en-US/docs/Glossary/Symbol" rel="noopener">here</a>.</p><h4 id="undefined-and-null">Undefined and Null</h4><p>Why the distinction between undefined and null?</p><p>By convention, Null indicates a deliberate non-existing value. And undefined is an un-initialized value.</p><p>For example, say you have a field which stores an ID if it exists. In this case, instead of using a magic value like “NOT_EXISTS”, you can use null. If it’s supposed to exist but isn’t there right now, you can show that via undefined.</p><h3 id="variables-and-scopes">Variables and scopes</h3><h4 id="before-es2015">Before ES2015</h4><p><code>var</code> was the only way to define variables.</p><p>Further, we had only two scopes: <a href="https://developer.mozilla.org/en-US/docs/Glossary/global_scope" rel="noopener"><strong>global</strong></a> and <strong>function</strong> scope. Variables declared inside a function become local to that function. Anything outside the function scope couldn’t access them.</p><p>Thus, they had function scope.</p><h4 id="after-es2015">After ES2015</h4><p>ES2015 introduced two new ways of defining variables:</p><ul><li><code>let</code></li><li><code>const</code></li></ul><p>With them came the concept of <strong>block</strong> scope. A block is everything between two curly braces <code>{..}</code></p><p>ES2015 is backwards compatible, so you still can use var, although their usage is discouraged.</p><pre><code class="language-js">var x = 1;
{
var x = 2;
}
console.log(x) // OUTPUT: 2, as block doesn't mean anything to var.
let x = 1;
{
let x = 2;
}
console.log(x) // OUTPUT: 1</code></pre><h4 id="variable-hoisting">Variable Hoisting</h4><p>JavaScript has a peculiar idea with <code>var</code> called hoisting.</p><pre><code class="language-js">function something() {
console.log(name);
let name = 'neil';
console.log(name);
}</code></pre><p>Can you guess what would happen above?</p><p>I say a <code>ReferenceError</code>: we are using the variable name before it’s defined. It makes sense, that’s what happens.</p><p>However, if I were using <code>var</code> instead of <code>let</code>, I’d get no error.</p><pre><code class="language-js">function something() {
console.log(name); // OUTPUT: undefined
var name = 'neil';
console.log(name); // OUTPUT: neil
}</code></pre><p>What’s happening behind the scenes?</p><pre><code class="language-js">function something() {
var name; // variable hoisting
console.log(name); // OUTPUT: undefined
name = 'neil';
console.log(name); // OUTPUT: neil
}</code></pre><p>This is another reason why the use of <code>var</code> is discouraged. It can lead to interesting bugs.</p><h3 id="short-circuit-logic-and-">Short circuit logic: &amp;&amp; and ||</h3><p>With JavaScript, something peculiar goes on with logic operations. (And in Python too.)</p><p>Something that lets you do arcane stuff like this:</p><pre><code class="language-js">// o is an object
var name = o &amp;&amp; o.name;</code></pre><p>What do you think <code>name</code> is? If the object, <code>o</code> is null or undefined, <code>name</code> is null or undefined.</p><p>If <code>o</code> is defined but <code>o.name</code> is undefined, <code>name</code> is undefined.</p><p>If <code>o</code> is defined, <code>o.name</code> is defined, then <code>name = o.name</code>.</p><p>We were using a boolean logic operator right? How is this possible then?<br>The answer is short circuiting and truthiness.</p><h4 id="truthiness">Truthiness</h4><p>A value is truthy if it evaluates to true in a Boolean context. All values are truthy except for the following falsy values:</p><ul><li><code>false</code></li><li><code>0</code></li><li><code>""</code></li><li><code>null</code></li><li><code>undefined</code></li><li><code>NaN</code></li></ul><p>Note: which means, <code>{}</code> and <code>[]</code> are truthy!</p><p>A usual trick to convert something to its truthy value: <code>!!</code></p><p><code>!</code> converts to not — the falsy value — and <code>!</code> again converts it back to true/false.</p><h4 id="short-circuiting">Short circuiting</h4><p>The idea is Boolean operators return the final value that makes the statement true or false, not whether the statement is true or false. Like we saw above, to convert it to the truthy value, you can use <code>!!</code>.</p><p>Short circuiting happens when the boolean expression isn’t evaluated completely. For example,</p><p><code>null &amp;&amp; ...</code></p><p>It doesn’t matter what <code>...</code> is. <code>null</code> is falsy, so this expression would return <code>null</code>.</p><p>Same case with <code>[] || ...</code>. <code>[]</code> is truthy, so this expression would return <code>[]</code>, irrespective of what <code>...</code> is.</p><h3 id="objects">Objects</h3><p>An Object in JavaScript is a collection of name value pairs. If you’re coming from <a href="https://neilkakkar.com/How-not-to-be-afraid-of-Python-anymore.html" rel="noopener">How not to be afraid of Python anymore</a>, don’t confuse the Python Object with the JavaScript Object.</p><p>The closest equivalence to the JavaScript <code>Object</code> is the Python <code>dict</code>.</p><p>For the types available in an Object, name: <code>string</code> or <code>Symbol</code> value: Anything.</p><p><code>Arrays</code> are a special type of object. They have a magic property: length (and a different prototype chain. See below.) The length of the array is one more than the highest index. This is mutable, which means you can do funky stuff with it (not recommended):</p><pre><code class="language-js">const funkyArray = [];
funkyArray['0'] = 'abcd';
funkyArray['length'] = 3
&gt; console.log(funkyArray);
(3) ["abcd", empty × 2]
&gt; funkyArray[4] = 'x';
&gt; console.log(funkyArray);
(5) ["abcd", empty × 3, "x"]</code></pre><p>Notice the use of numbers and strings as array indexes. Numbers work because Objects implicitly call <code>toString()</code> on the name.</p><p>Iterating over arrays and objects, using constructs like <code>for...of</code>, <code>for...in</code> and <code>forEach</code> is something I’ll leave for the next part. (Plus, an interesting bug when using objects as maps in JavaScript!)</p><h4 id="global-object">Global object</h4><p>A global object is an <a href="https://developer.mozilla.org/en-US/docs/Glossary/object" rel="noopener">object</a> that always exists in the global scope. In JavaScript, there’s always a global object defined. In a web browser, when scripts create global variables, they’re created as members of the global object [<a href="https://neilkakkar.com/How-not-to-be-afraid-of-Javascript-anymore.html#fn:1" rel="noopener">1</a>]. The global object’s interface depends on the execution context in which the script is running. For example:</p><ul><li>In a web browser, any code which the script doesn’t specifically start up as a background task has a Window as its global object. This is the vast majority of JavaScript code on the Web.</li><li>Code running in a Worker has a WorkerGlobalScope object as its global object.</li><li>Scripts running under Node.js have an object called global as their global object. [<a href="https://neilkakkar.com/How-not-to-be-afraid-of-Javascript-anymore.html#fn:2" rel="noopener">2</a>]</li></ul><h3 id="functions">Functions</h3><p>In JavaScript, functions are first class objects. They can have properties and methods like any other objects. They can be passed to other functions as parameters (meta-recursion!). The way functions differ from objects is that they are callable.</p><p>All functions extend the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function" rel="noopener"><strong>Function</strong></a> object. This object has no properties or methods pre-defined, but inherits some from the <code>Function.prototype</code>. (This will become clear in the prototype section below). Further, this <code>Function</code> object is a constructor for functions. You can create functions in at least 4 ways:</p><pre><code class="language-js">function functionDeclaration() {};
var anonymousFunctionExpression = function() {};
var namedFunctionExpression = function named() {};
var arrowFunctionExpression = () =&gt; {};
var constructorFunction = new Function(...args, functionBody); // functionBody is a string</code></pre><p>The return statement can return a value at any time, terminating the function. JavaScript returns undefined if it sees no return statement (or an empty return with no value).</p><p>All arguments defined for the function go in arguments var. The default value for all the arguments is <code>undefined</code>.</p><p>Have you ever seen the three dots in JavaScript before? <code>...</code> . Like the one I used above in <code>constructorFunction</code> ? They boggled my mind the first time I saw them. They are a part of syntax in JavaScript. It’s not pseudocode (like I first thought).</p><p>They are the <code>rest</code> and <code>spread</code> parameter syntax.</p><p>The are opposites of each other. <code>spread</code> spreads arguments, <code>rest</code> brings them back together.</p><p>Here’s an example: Excuse the poorly designed function — which doesn’t need the arguments to be named — but I am making a point.</p><pre><code class="language-js">const average = function( val1, val2, val3, ...otherValues) { // rest
console.log(otherValues);
let sum = 0;
for (let i = 0; i &lt; arguments.length; i++) {
sum += arguments[i];
}
return sum / arguments.length;
}
let values = [1, 2, 3, 4, 5, 6]
const averageValue = average(...values); // spread</code></pre><p>What’s happening here? <code>otherValues</code> is using the rest syntax to collect an infinite number of arguments passed to average. The <code>console.log()</code> would print <code>[4, 5, 6]</code> above.</p><p><code>values</code> is using the spread syntax to convert the array into single arguments. It works such that behind the scenes, the below is equivalent to the above.</p><pre><code>const averageValue = average(1,2,3,4,5,6)</code></pre><p>Another thing to note is that default argument values are evaluated every time function is called, unlike Python where it happens only once.</p><p>There are 3 interesting prototype functions available to function objects. These are <code>apply()</code>, <code>bind()</code> and <code>call()</code>. The A,B,C of JavaScript.</p><p>With the advent of spread and rest syntax, <code>apply()</code> and <code>call()</code> aren’t different anymore.</p><p><code>apply()</code> calls a function with an array of args; <code>call()</code> calls a function with individual values.</p><p>The cool bit is, they allow you to call the function with a custom <code>this</code> object.</p><p>We will talk more about <code>apply()</code> and <code>bind()</code> once we cover the <code>this</code> object.</p><h4 id="anonymous-and-inner-functions">Anonymous and inner functions</h4><pre><code class="language-js">const avg = function () {
let sum = 0;
for (let i = 0, argLength = arguments.length; i &lt; argLength; i++) { // arguments variable is an array containing all args passed to the function.
sum += arguments[i];
}
return sum / arguments.length; // argLength isn't available here
};</code></pre><p>The expressions <code>function avg()</code> and <code>var avg = function ()</code> are semantically equivalent.</p><p>However, there is a distinction between the function name (here anonymous — so doesn’t exist) and the variable the function is assigned to.</p><p>The function name cannot be changed, while the variable the function is assigned to can be reassigned. The function name can be used only within the function’s body. Attempting to use it outside the function’s body results in an error (or undefined if the function name was previously declared via a var statement).</p><p>This idea of functions being passed as variables gives rise to enormous power. For example, you can hide local variables:</p><pre><code class="language-js">var a = 1;
var b = 2;
(function() {
var b = 3; // hidden local variable
a += b;
})();
a; // 4
b; // 2</code></pre><p>The expression above is called an IIFE (Immediately invoked function expression) — where you create a function and immediately call it.</p><p>Further, we can nest functions inside each other too! These are called <strong>inner functions</strong>. The important thing to keep in mind: inner functions have access to variables defined in the parent functions, but not the other way around. This is a direct result of closures, which we will cover soon.</p><p>This lets you create functions like:</p><pre><code class="language-js">let joiner = function(separator) {    // The outer function defines separator
return function(left, right) {
return left + " " + separator + " " + right;    // The inner function has access to separator
}    // This exposes the inner function to the outside world
}
let and = joiner("and");
and("red", "green"); // There's no way to change the separator for AND now; except by reassigning the function variable.
// red and green
const or = joiner("or"); // There's no way to change the separator for OR now.
or("black", "white");
// black or white</code></pre><h4 id="function-hoisting">Function hoisting</h4><blockquote><em>With function declarations, the function definitions are hoisted to the top of the scope.</em><br><em>With function expressions, the function definitions aren’t hoisted</em>.</blockquote><p>Okay, you might be confused about what’s the difference between the terms. I was.</p><pre><code class="language-js">function declaredFunction() { // this is the function declaration
// what comes here is the function definition
}
let functionExpression = function() { // this is a function expression
// what comes here is the function definition
}</code></pre><h3 id="classes-and-the-prototype-chain">Classes and The Prototype Chain</h3><p>JavaScript uses functions as classes. The recently introduced class statement is syntactic sugar over functions.</p><p>Since all data in JavaScript is an <code>Object</code>, it makes sense that our functions — which are a class constructor — will return an <code>Object</code>.</p><p>Thus, given all the basics we know about functions and objects, we can do something like this to create a class for, say <em>(thinks really hard to figure out a non trivial, useful and relatable example…)</em><br>…. <br>… <br>.. <br>.<br>A tweet interface! That sounds like fun.</p><p>Imagine you’re building your own front-end to show tweets, talking to the twitter API to get data for the tweets.</p><pre><code class="language-js">function Tweet(id, username, content, parent = null) {
return {
id, // Javascript implicitly converts this into id: id
username,
content,
getUrl: function() {
return 'https://twitter.com/' + this.username + '/' + this.id;
},
isComment: function() {
return parent !== null;
}
};
}
var t = Tweet(1, '@neilkakkar', 'How not to be afraid of JS anymore');
// Remember, we can fill any number of args
// the rest are undefined or default
// All args are in the arguments variable
t.getUrl(); // "https://twitter.com/@neilkakkar/1"
t.isComment(); // "false"</code></pre><p><code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this" rel="noopener">this</a></code> keyword references the current object. Using dot notation, this becomes the object on which dot was applied. Otherwise, it’s the global object.</p><p>A note from MDN:</p><blockquote>In most cases, the value of this is determined by how a function is called. It can’t be set by assignment during execution, and it may be different each time the function is called. ES5 introduced the <code><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind" rel="noopener">bind()</a></code>method to set the value of a function’s <code>this</code> regardless of how it’s called, and ES2015 introduced arrow functions which don’t provide their own this binding (it retains the <code>this</code> value of the enclosing lexical context).</blockquote><p>This (pun intended) is a frequent cause of mistakes. For example:</p><pre><code class="language-js">const t = Tweet(1, '@neilkakkar', 'How not to be afraid of JS anymore');
const urlFetcher = t.getUrl; // assigning the function
urlFetcher(); // https://twitter.com/undefined/undefined</code></pre><p>When we call <code>urlFetcher()</code> alone, without using <code>t.getUrl()</code>, <code>this</code> is bound to the global object. Since there are no global variables called <code>username</code> or <code>id</code> we get <code>undefined</code> for each one.</p><p>We can take advantage of the <code>this</code> keyword to improve our Tweet function. The idea is, instead of creating an object and returning that, we expect a new object (referenced by <code>this</code>) and modify its properties.</p><pre><code class="language-js">function Tweet(id, username, content, parent = null) {
this.id = id;
this.username = username;
this.content = content;
this.getUrl = function() {
return 'https://twitter.com/' + this.username + '/' + this.id;
};
this.isComment = function() {
return parent !== null;
}
};
}
var t = new Tweet(1, '@neilkakkar', 'How not to be afraid of JS anymore');</code></pre><p>The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new" rel="noopener">new</a> keyword creates a brand new empty object, and then calls the function specified, with <code>this</code> set to the new object. Our modified function does not return a value but merely modifies the <code>this</code> object. <code>new</code> also returns the <code>this</code> object, once the function is called on it. This is what we wanted. <code>new</code> also does some extra stuff which we want — like setting up the prototype chain — but we will get into that in a little bit.</p><p>Such functions, that are designed to be called by <code>new</code>, are called <strong>constructor functions</strong>. By convention, these functions are capitalized (as a reminder to call them with <code>new</code>).</p><p>Since we get a new object every time we call <code>Tweet</code>, we have two function objects (<code>getUrl</code> and <code>isComment</code>) created every time we call <code>Tweet</code>. A better way is to write these functions outside the constructor scope — and pass a reference.</p><p>If you’re coming from an OOP background, even this might not seem good enough. You don’t want this function to be used anywhere but for this <code>Tweet</code> object. You don’t want to dirty your global function list. This is where JavaScript’s “inheritance” comes in.</p><h3 id="prototype">Prototype</h3><p><code>Tweet.prototype</code> is an object shared by all instances of <code>Tweet</code>. It forms part of a lookup chain (that has a special name, “prototype chain”): any time you access a property of <code>Tweet</code> that isn’t set, JavaScript will check <code>Tweet.prototype</code> to see if that property exists there.</p><p>As a result, anything assigned to <code>Tweet.prototype</code> becomes available to all instances of that constructor via the <code>this</code> object.</p><blockquote>Each object has a private property (<code>__proto__</code>) which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.</blockquote><p>This is an incredibly powerful tool. JavaScript lets you modify something’s prototype at any time in your program, which means you can add extra methods to existing objects at runtime (without having to call the constructor again).</p><pre><code class="language-js">var t = new Tweet(1, '@neilkakkar', 'How not to be afraid of JS anymore');
t.getComments(); // TypeError on line 1: t.getComments is not a function
Tweet.prototype.getComments = function() {
// example API call to Twitter API - let's say it exists as the twitterService object
return twitterService.getComments(this.id);
};
t.getComments(); // "[ 'This is an amazing article, thank you!' , 'I love it' ]"
// fictional comments</code></pre><h4 id="function-prototype-vs-__proto__">function.prototype vs __proto__</h4><p>You’ve probably seen both being used interchangably. They aren’t the same. Let’s clear this up.</p><p>The <code>function.prototype</code> is a constructor for <code>__proto__</code>.</p><p><code>__proto__</code> is the actual prototype object available on objects.</p><p>Thus, <code>function.prototype</code> is only available to constructor functions. You can’t access the prototype for a tweet as <code>t.prototype</code>, you’ll have to use <code>t.__proto__</code>.</p><p>But to set the prototype, you’d use <code>Tweet.prototype.getComments()</code> like in the above example.</p><h4 id="a-refresher-of-what-we-did-with-functions-and-classes">A refresher of what we did with functions and classes</h4><ul><li>Classes are functions. We began with a function that was creating a new object ( <code>return {...}</code>- using object literal syntax), then adding properties to it ( the class data ) and finally returning it.</li><li>Then come constructor functions. These assume there is a given empty object ( initialized via <code>new</code> ) and just add the properties to it.</li><li>Then comes the prototype chain, for methods that would be used by all objects of the <code>class</code></li></ul><p>Behind the scenes, this is how things work when using the <code>class</code> keyword.</p><h3 id="the-new-keyword-and-apply">The New Keyword and Apply</h3><p>We can now explore what happens behind the scenes with <code>new</code> and revisit <code>apply()</code> from the function prototype. We’ve already seen <code>bind()</code>.</p><p>The function of <code>new</code> is to create an object, pass it to the constructor function (where this object is available as <code>this</code>), and set up the prototype chain.</p><p><code>apply()</code> takes an object (the <code>this</code> value) and an array of arguments to be called on that object.</p><p>Putting these two together, we get a trivial implementation of new.</p><pre><code class="language-js">function newNew(constructorFunction, ...args) {
const thisObject = {}; // create object using object literal syntax
constructorFunction.apply(thisObject, args); // calls constructorFunction with this set to thisObject and with given args
// setting up prototype chain is tricky. Need a new prototype for constructorFunction
// not the Function constructor prototype
return thisObject;
}</code></pre><h3 id="closures">Closures</h3><p>Remember the joiner function?</p><pre><code class="language-js">let joiner = function(separator) {    // The outer function defines separator
return function(left, right) {
return left + " " + separator + " " + right;    // The inner function has access to separator
}    // This exposes the inner function to the outside world
}
let and = joiner("and");
and("red", "green"); // There's no way to change the separator for AND now; except by reassigning the function variable.
// red and green
const or = joiner("or"); // There's no way to change the separator for OR now.
or("black", "white");
// black or white</code></pre><p>A function defined inside another function has access to the outer function’s variables. Once the outer function returns, common sense would dictate that its local variables no longer exist.</p><p>But they do exist — otherwise, the joiner functions wouldn’t work. What’s more, there are two different “copies” of <code>joiner()</code>’s local variables — one in which <code>separator</code> is <code>and</code> and the other one where <code>separator</code> is <code>or</code>. How does this work?</p><h4 id="scope-object">Scope Object</h4><p>Whenever JavaScript executes a function, it creates a ‘scope’ object to hold the local variables created within that function. The scope object is initialized with variables passed in as function parameters. This is similar to the global object — as new variables “show up”, they are added to the scope object.</p><p>Two key points:</p><ul><li>a brand new scope object is created every time a function starts executing</li><li>unlike the global object, these scope objects cannot be directly accessed from your JavaScript code. There is no mechanism for iterating over the properties of the current scope object.</li></ul><p>So when <code>joiner()</code> is called, a scope object is created with one property: <code>separator</code>, which is the argument passed to <code>joiner()</code>. <code>joiner()</code> then returns the created function.</p><p>Normally JavaScript’s garbage collector would clean up the scope object created for <code>joiner()</code> at this point, but the returned function maintains a reference back to that scope object. As a result, the scope object will not be garbage-collected until there are no more references to the function object that <code>joiner()</code> returned.</p><p>Scope objects form a chain called the scope chain, similar to the prototype chain.</p><blockquote><em>A closure is the combination of a function and the scope object in which it was created. Closures let you save state — as such, they can often be used in place of objects</em></blockquote><p>Thus, you’re creating a closure whenever you’re creating a function inside another function.</p><h4 id="performance">Performance</h4><p>To end this section, let’s talk a bit about performance. To optimize performance, get rid of closures not needed. Remember, the reference lives till the scope object is needed, containing all local variables and function arguments.</p><pre><code class="language-js">function f(i) {
var o = { };  // Some large object
var a = [ ];  // Some large array
// `a` and `o` are local variables and thus will get added to the closure object.
//...
//...
// some use case for a and o
var c = [ 1, 2, 3 ].filter(item =&gt; a.indexOf(item) &gt; -1 || o[item]);
a = undefined;  // Clean up before closure
o = undefined;  // Clean up before closure
return function () { // closure created
return ++i; // we didn't need anything except i for this function,
// so makes sense to delete everything else from the closure.
};
setTimeout( () =&gt; console.log(2), 0) // t = 0;
console.log('3');</code></pre><p>…</p><p>..</p><p>.</p><p>If you guessed <code>1 2 3</code>, let’s go through the example.</p><p>Initially, we have <code>main()</code> on the call stack. Then we move through the script.</p><p>We see <code>console.log(1)</code> — that gets on the call stack, prints <code>1</code> and is popped.</p><p>We see <code>setTimeout()</code> — that goes on the call stack, passes to the Web API and is popped.</p><p>At the same time, since the timeout was for 0 seconds, the callback is passed to the callback queue.</p><p>We see <code>console.log(3)</code> — that gets on the call stack, prints <code>3</code> and is popped.</p><p>The script ends, so <code>main()</code> is popped.</p><p>Now the call stack is empty, so the <code>setTimeout()</code> callback is transferred to the call stack.</p><p>That is, we have <code>() =&gt; console.log</code>(2) on the call stack. This is called with t<code>he n</code>ull message.</p><p>Hence, the order is <code>1 3 2</code>.</p><p>This is the zero delay gotcha — a handy idea to remind yourself of how the event loop works.</p><p>This seems like a good place to stop for now. I hope this article has helped you start to get a better understanding of JavaScript! :)</p><p>References:</p><p>[1] <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript" rel="noopener">Reintroduction to Javascript</a><br>[2] <a href="https://developer.mozilla.org/en-US/" rel="noopener">MDN general docs</a></p><p><a href="https://neilkakkar.com/js-part-2.html" rel="noopener">Here is Part 2</a> on my blog.</p><p>Other stories in this series:</p><p><a href="https://neilkakkar.com/How-not-to-be-afraid-of-GIT-anymore.html" rel="noopener">How not to be afraid of GIT anymore</a></p><p><a href="https://neilkakkar.com/How-not-to-be-afraid-of-Vim-anymore.html" rel="noopener">How not to be afraid of Vim anymore</a></p><p><a href="https://neilkakkar.com/How-not-to-be-afraid-of-Python-anymore.html" rel="noopener">How not to be afraid of Python anymore</a></p><p>Read more of my articles on <a href="https://neilkakkar.com/How-not-to-be-afraid-of-Javascript-anymore.html" rel="noopener">neilkakkar.com</a>.</p>
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
