---
card: "https://cdn-media-1.freecodecamp.org/images/1*bSMhqCAGeHAqbPS6qQMe5Q.jpeg"
tags: [JavaScript]
description: Closures are a fundamental JavaScript concept that every seri
author: "Milad E. Fahmy"
title: "Learn JavaScript Closures with Code Examples"
created: "2021-08-15T19:55:24+02:00"
modified: "2021-08-15T19:55:24+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-es6 tag-programming tag-learning-to-code tag-learning ">
<header class="post-full-header">
<h1 class="post-full-title">Learn JavaScript Closures with Code Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*bSMhqCAGeHAqbPS6qQMe5Q.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*bSMhqCAGeHAqbPS6qQMe5Q.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*bSMhqCAGeHAqbPS6qQMe5Q.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*bSMhqCAGeHAqbPS6qQMe5Q.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*bSMhqCAGeHAqbPS6qQMe5Q.jpeg" alt="Learn JavaScript Closures with Code Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Closures are a fundamental JavaScript concept that every serious programmer should know inside and out.</p>
<p>The Internet is packed with great explanations of “what” closures are, but few deep-dive into the “why” side of things.</p>
<p>I find that understanding the internals ultimately gives developers a stronger grasp of their tools, so this post will be dedicated to the nuts and bolts of <em><em>how</em></em> and <em><em>why</em></em> closures work the way they do.</p>
<p>Hopefully you’ll walk away better equipped to take advantage of closures in your day-to-day work. Let’s get started!</p>
<h1 id="what-is-a-closure"><strong>What is a closure?</strong></h1>
<p>Closures are an extremely powerful property of JavaScript (and most programming languages). As defined on <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures" rel="noopener nofollow">MDN</a>:</p>
<p><em><em>Closures are <strong><strong>functions</strong></strong> that <strong><strong>refer to</strong></strong> independent <strong><strong>(free) variables</strong></strong>. In other words, the function defined in the closure <strong><strong>‘remembers’ the environment in which it was created</strong></strong>.</em></em></p>
<p>Note: Free variables are variables that are neither locally declared nor passed as parameter.</p>
<p>Let’s look at some examples:</p>
<h2 id="example-1-"><strong>Example 1:</strong></h2><pre><code class="language-js">function numberGenerator() {
// Local “free” variable that ends up within the closure
var num = 1;
function checkNumber() {
console.log(num);
}
num++;
return checkNumber;
}
var number = numberGenerator();
number(); // 2</code></pre>
<p>In the example above, the function numberGenerator creates a local “free” variable <strong><strong>num </strong></strong>(a number) and <strong><strong>checkNumber </strong></strong>(a function which prints <strong><strong>num</strong></strong> to the console). </p>
<p>The function <strong><strong>checkNumber</strong></strong> doesn’t have any local variables of its own — however, it does have access to the variables within the outer function, <strong><strong>numberGenerator,</strong></strong> because of a closure. </p>
<p>Therefore, it can use the variable <strong><strong>num</strong></strong> declared in <strong><strong>numberGenerator</strong></strong> to successfully log it to the console <em><em>even after</em></em> <strong><strong>numberGenerator</strong></strong> has returned.</p>
<h2 id="example-2-"><strong>Example 2:</strong></h2>
<p>In this example we’ll demonstrate that a closure contains any and all local variables that were declared inside the outer enclosing function.</p><pre><code class="language-js">function sayHello() {
var say = function() { console.log(hello); }
// Local variable that ends up within the closure
var hello = 'Hello, world!';
return say;
}
var sayHelloClosure = sayHello();
sayHelloClosure(); // ‘Hello, world!’</code></pre>
<p>Notice how the variable <strong><strong>hello</strong></strong> is defined <em><em>after</em></em> the anonymous function — but can still access the <strong><strong>hello</strong></strong> variable. This is because the <strong><strong>hello</strong></strong> variable has already been defined in the function “scope” at the time of creation, making it available when the anonymous function is finally executed. </p>
<p>(Don’t worry, I’ll explain what “scope” means later in the post. For now, just roll with it!)</p>
<h2 id="understanding-the-high-level"><strong>Understanding the High Level</strong></h2>
<p>These examples illustrated “what” closures are on a high level. The general theme is this: <em><em>we have access to variables defined in enclosing function(s) even after the enclosing function which defines these variables has returned</em></em>. </p>
<p>Clearly, something is happening in the background that allows those variables to still be accessible long after the enclosing function that defined them has returned.</p>
<p>To understand how this is possible, we’ll need to touch on a few related concepts — starting 3000 feet up and slowly climbing our way back down to the land of closures. Let’s start with the overarching <em><em>context</em></em> within which a function is run, known as <em><em>“Execution context”</em></em>.</p>
<h1 id="execution-context"><strong>Execution Context</strong></h1>
<p>Execution context is an abstract concept used by the ECMAScript specification to<em><em> </em></em>track the runtime evaluation of code. This can be the global context in which your code is first executed or when the flow of execution enters a function body.</p>
<p>At any point in time, there can only be one execution context running. That’s why JavaScript is “single threaded,” meaning only one command can be processed at a time. </p>
<p>Typically, browsers maintain this execution context using a “stack.” A stack is a Last In First Out (LIFO) data structure, meaning the last thing that you pushed onto the stack is the first thing that gets popped off it. (This is because we can only insert or delete elements at the top of the stack.) </p>
<p>The current or “running” execution context is always the top item in the stack. It gets popped off the top when the code in the running execution context has been completely evaluated, allowing the next top item to take over as running execution context.</p>
<p>Moreover, just because an execution context is running doesn’t mean that it has to finish running before a different execution context can run. </p>
<p>There are times when the running execution context is suspended and a different execution context becomes the running execution context. The suspended execution context might then at a later point pick back up where it left off. </p>
<p>Any time one execution context is replaced by another like this, a new execution context is created and pushed onto the stack, becoming the current execution context.</p>
<p>For a practical example of this concept in action in the browser, see the example below:</p><pre><code class="language-js">var x = 10;
function foo(a) {
var b = 20;
function bar(c) {
var d = 30;
return boop(x + a + b + c + d);
}
function boop(e) {
return e * -1;
}
return bar;
}
var moar = foo(5); // Closure
/*
The function below executes the function bar which was returned
when we executed the function foo in the line above. The function bar
invokes boop, at which point bar gets suspended and boop gets push
onto the top of the call stack (see the screenshot below)
*/
moar(15); </code></pre>
<p>Then when <strong><strong>boop</strong></strong> returns, it gets popped off the stack and <strong><strong>bar</strong></strong> is resumed:</p>
<p>When we have a bunch of execution contexts running one after another — often being paused in the middle and then later resumed — we need some way to keep track of state so we can manage the order and execution of these contexts. </p>
<p>And that is in fact the case. As per the ECMAScript spec, each execution context has various state components that are used to keep track of the progress the code in each context has made. These include:</p>
<ul>
<li><strong><strong>Code evaluation state:</strong></strong> Any state needed to perform, suspend, and resume evaluation of the code associated with this execution context</li>
<li><strong><strong>Function:</strong></strong> The function object which the execution context is evaluating (or null if the context being evaluated is a <em><em>script</em></em> or <em><em>module</em></em>)</li>
<li><strong><strong>Realm:</strong></strong> A set of internal objects, an ECMAScript global environment, all of the ECMAScript code that is loaded within the scope of that global environment, and other associated state and resources</li>
<li><strong><strong>Lexical Environment:</strong></strong> Used to resolve identifier references made by code within this execution context.</li>
<li><strong><strong>Variable Environment:</strong></strong> Lexical Environment whose EnvironmentRecord holds bindings created by VariableStatements within this execution context.</li>
</ul>
<p>If this sounds too confusing to you, don’t worry. Of all these variables, the Lexical Environment variable is the one that’s most interesting to us because it explicitly states that it resolves <em><em>“identifier references” </em></em>made by code within this execution context. </p>
<p>You can think of “identifiers” as variables. Since our original goal was to figure out how it’s possible for us to magically access variables even after a function (or “context”) has returned, Lexical Environment looks like something we should dig into!</p>
<p><strong><strong><em><em>Note</em></em></strong></strong><em><em>: Technically, both Variable Environment and Lexical Environment are used to implement closures. But for simplicity’s sake, we’ll generalize it to an “Environment”. For a detailed explanation on the difference between Lexical and Variable Environment, see Dr. Alex Rauschmayer’s excellent </em></em><a href="http://www.2ality.com/2011/04/ecmascript-5-spec-lexicalenvironment.html" rel="noopener nofollow"><em><em>article</em></em></a><em><em>.</em></em></p>
<h1 id="lexical-environment"><strong>Lexical Environment</strong></h1>
<p>By definition: </p>
<blockquote><em><em>A Lexical Environment is a specification type used to define the association of Identifiers to specific variables and functions based upon the lexical nesting structure of ECMAScript code. A Lexical Environment consists of an Environment Record and a possibly null reference to an outer Lexical Environment. Usually a Lexical Environment is associated with some specific syntactic structure of ECMAScript code such as a FunctionDeclaration, a BlockStatement, or a Catch clause of a TryStatement and a new Lexical Environment is created each time such code is evaluated. — </em></em><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-lexical-environments" rel="noopener nofollow"><em><em>ECMAScript-262/6.0</em></em></a></blockquote>
<p>Let’s break this down.</p>
<ul>
<li><strong><strong>“Used to define the association of Identifiers”:</strong></strong><em><em> </em></em>The purpose of a Lexical Environment is to manage data (i.e. identifiers) within code. In other words, it gives meaning to identifiers. For instance, if we had a line of code “<em><em>console.log(x / 10)”, </em></em>it’s meaningless to have a variable (or “identifier”) <strong><strong>x</strong></strong> without something that provides meaning for that variable. The Lexical Environments provides this meaning (or “association”) via its Environment Record (see below).</li>
<li><strong><strong>“Lexical Environment consists of an Environment Record”:</strong></strong> An Environment Record is a fancy way to say that it keeps a record of all identifiers and their bindings that exist within a Lexical Environment. Every Lexical Environment has it’s own Environment Record.</li>
<li><strong><strong>“Lexical nesting structure”:</strong></strong><em><em> </em></em>This is the interesting part, which is basically saying that an inner environment references the outer environment that surrounds it, and that this outer environment can have its own outer environment as well. As a result, an environment can serve as the outer environment for more than one inner environment. The global environment is the only Lexical environment that does not have an outer environment. The language here is tricky, so let’s use a metaphor and think of lexical environments like layers of an onion: the global environment is the outermost layer of the onion; every subsequent layer below is nested within.</li>
</ul>
<p>Abstractly, the environment looks like this in pseudocode:</p><pre><code class="language-js">LexicalEnvironment = {
EnvironmentRecord: {
// Identifier bindings go here
},
// Reference to the outer environment
outer: &lt; &gt;
};</code></pre>
<ul>
<li><strong><strong>“A new Lexical Environment is created each time such code is evaluated”:</strong></strong> Each time an enclosing outer function is called, a new lexical environment is created. This is important — we’ll come back to this point again at the end. <em><em>(Side note: a function is not the only way to create a Lexical Environment. Others include a block statement or a catch clause. For simplicity’s sake, I’ll focus on environment created by functions throughout this post)</em></em></li>
</ul>
<p>In short, every execution context has a Lexical Environment. This Lexical environments holds variables and their associated values, and also has a reference to its outer environment. </p>
<p>The Lexical Environment can be the global environment, a module environment (which contains the bindings for the top level declarations of a Module), or a function environment (environment created due to the invocation of a function).</p>
<h1 id="scope-chain"><strong>Scope Chain</strong></h1>
<p>Based on the above definition, we know that an environment has access to its parent’s environment, and its parent environment has access to its parent environment, and so on. This set of identifiers that each environment has access to is called <em><em>“scope.”</em></em> We can nest scopes into a hierarchical chain of environments known as the<em><em> “scope chain”</em></em>.</p>
<p>Let’s look at an example of this nesting structure:</p><pre><code class="language-js">var x = 10;
function foo() {
var y = 20; // free variable
function bar() {
var z = 15; // free variable
return x + y + z;
}
return bar;
}</code></pre>
<p>As you can see, <strong><strong>bar</strong></strong> is nested within <strong><strong>foo</strong></strong>. To help you visualize the nesting, see the diagram below:</p>
<p>We’ll revisit this example later in the post.</p>
<p>This scope chain, or chain of environments associated with a function, is saved to the function object at the time of its creation. In other words, it’s defined statically by location within the source code. (This is also known as “lexical scoping”.)</p>
<p>Let’s take a quick detour to understand the difference between “dynamic scope” and “static scope”, which will help clarify why static scope (or lexical scope) is necessary in order to have closures.</p>
<h1 id="detour-dynamic-scope-vs-static-scope"><strong>Detour: Dynamic Scope vs. Static Scope</strong></h1>
<p>Dynamic scoped languages have “stack-based implementations”, meaning that the local variables and arguments of functions are stored on a stack. Therefore, the runtime state of the program stack determines what variable you are referring to.</p>
<p>On the other hand, static scope is when the variables referenced in a context are recorded at the <em><em>time of creation</em></em>. In other words, the structure of the program source code determines what variables you are referring to.</p>
<p>At this point, you might be wondering how dynamic scope and static scope are different. Here’s two examples to help illustrate:</p>
<h2 id="example-1--1"><strong>Example 1:</strong></h2><pre><code class="language-js">var x = 10;
function foo() {
var y = x + 5;
return y;
}
function bar() {
var x = 2;
return foo();
}
function main() {
foo(); // Static scope: 15; Dynamic scope: 15
bar(); // Static scope: 15; Dynamic scope: 7
return 0;
}</code></pre>
<p>We see above that the static scope and dynamic scope return different values when the function bar is invoked.</p>
<p>With static scope, the return value of <strong><strong>bar</strong></strong> is based on the value of <strong><strong>x</strong></strong> at the time of <strong><strong>foo</strong></strong>’s creation. This is because of the static and lexical structure of the source code, which results in <strong><strong>x</strong></strong> being 10 and the result being 15.</p>
<p>Dynamic scope, on the other hand, gives us a stack of variable definitions tracked at runtime — such that which <strong><strong>x</strong></strong> we use depends on what exactly is in scope and has been defined dynamically at runtime. Running the function <strong><strong>bar</strong></strong> pushes x = 2 onto the top of the stack, making <strong><strong>foo</strong></strong> return 7.</p>
<h2 id="example-2--1"><strong>Example 2:</strong></h2><pre><code class="language-js">var myVar = 100;
function foo() {
console.log(myVar);
}
foo(); // Static scope: 100; Dynamic scope: 100
(function () {
var myVar = 50;
foo(); // Static scope: 100; Dynamic scope: 50
})();
// Higher-order function
(function (arg) {
var myVar = 1500;
arg();  // Static scope: 100; Dynamic scope: 1500
})(foo);</code></pre>
<p>Similarly, in the dynamic scope example above the variable <strong><strong>myVar</strong></strong> is resolved using the value of <strong><strong>myVar</strong></strong> at the place where the function is called. Static scope, on the other hand, resolves <strong><strong>myVar</strong></strong> to the variable that was saved in the scope of the two IIFE functions <em><em>at creation</em></em>.</p>
<p>As you can see, dynamic scope often leads to some ambiguity. It’s not exactly made clear which scope the free variable will be resolved from.</p>
<h1 id="closures"><strong>Closures</strong></h1>
<p>Some of that may strike you as off-topic, but we’ve actually covered everything we need to know to understand closures:</p>
<p><em><em>Every function has an execution context, which comprises of an environment that gives meaning to the variables within that function and a reference to its parent’s environment. A reference to the parent’s environment makes all variables in the parent scope available for all inner functions, regardless of whether the inner function(s) are invoked outside or inside the scope in which they were created.</em></em></p>
<p><em><em>So, it appears as if the function “remembers” this environment (or scope) because the function literally has a reference to the environment (and the variables defined in that environment)!</em></em></p>
<p>Coming back to the nested structure example:</p><pre><code class="language-js">var x = 10;
function foo() {
var y = 20; // free variable
function bar() {
var z = 15; // free variable
return x + y + z;
}
return bar;
}
var test = foo();
test(); // 45</code></pre>
<p>Based on our understanding of how environments work, we can say that the environment definitions for the above example look something like this (note, this is purely pseudocode):</p><pre><code class="language-js">GlobalEnvironment = {
EnvironmentRecord: {
// built-in identifiers
Array: '&lt;func&gt;',
Object: '&lt;func&gt;',
// etc..
// custom identifiers
x: 10
},
outer: null
};
fooEnvironment = {
EnvironmentRecord: {
y: 20,
bar: '&lt;func&gt;'
}
outer: GlobalEnvironment
};
barEnvironment = {
EnvironmentRecord: {
z: 15
}
outer: fooEnvironment
};</code></pre>
<p>When we invoke the function <strong><strong>test</strong></strong>, we get 45, which is the return value from invoking the function <strong><strong>bar</strong></strong> (because <strong><strong>foo</strong></strong> returned <strong><strong>bar</strong></strong>). <strong><strong>bar</strong></strong> has access to the free variable <strong><strong>y</strong></strong> even after the function <strong><strong>foo</strong></strong> has returned because <strong><strong>bar</strong></strong> has a reference to <strong><strong>y</strong></strong> through its outer environment, which is <strong><strong>foo</strong></strong>’s environment! <strong><strong>bar</strong></strong> also has access to the global variable <strong><strong>x</strong></strong> because <strong><strong>foo</strong></strong>’s environment has access to the global environment. This is called <em><em>“scope-chain lookup.”</em></em></p>
<p>Returning to our discussion of dynamic scope vs static scope: for closures to be implemented, we can’t use dynamic scoping via a dynamic stack to store our variables. </p>
<p>The reason is because it would mean that when a function returns, the variables would be popped off the stack and no longer available — which contradicts our initial definition of a closure. </p>
<p>What happens instead is that the closure data of the parent context is saved in what’s known as the “heap,” which allows for the data to persist after the function call that made them returns (i.e. even after the execution context is popped off the execution call stack).</p>
<p>Make sense? Good! Now that we understand the internals on an abstract level, let’s look at a couple more examples:</p>
<h2 id="example-1--2"><strong>Example 1:</strong></h2>
<p>One canonical example/mistake is when there’s a for-loop and we try to associate the counter variable in the for-loop with some function in the for-loop:</p><pre><code class="language-js">var result = [];
for (var i = 0; i &lt; 5; i++) {
result[i] = function () {
console.log(i);
};
}
result[0](); // 5, expected 0
result[1](); // 5, expected 1
result[2](); // 5, expected 2
result[3](); // 5, expected 3
result[4](); // 5, expected 4</code></pre>
<p>Going back to what we just learned, it becomes super easy to spot the mistake here! Abstractly, here’s what the environment looks like this by the time the for-loop exits:</p><pre><code class="language-js">environment: {
EnvironmentRecord: {
result: [...],
i: 5
},
outer: null,
}</code></pre>
<p>The incorrect assumption here was that the scope is different for all five functions within the result array. Instead, what’s actually happening is that the environment (or context/scope) is the same for all five functions within the result array. Therefore, every time the variable <strong><strong>i</strong></strong> is incremented, it updates scope — which is shared by all the functions. That’s why any of the 5 functions trying to access <strong><strong>i</strong></strong> returns 5 (i is equal to 5 when the for-loop exits).</p>
<p>One way to fix this is to create an additional enclosing context for each function so that they each get their own execution context/scope:</p><pre><code class="language-js">var result = [];
for (var i = 0; i &lt; 5; i++) {
result[i] = (function inner(x) {
// additional enclosing context
return function() {
console.log(x);
}
})(i);
}
result[0](); // 0, expected 0
result[1](); // 1, expected 1
result[2](); // 2, expected 2
result[3](); // 3, expected 3
result[4](); // 4, expected 4</code></pre>
<p>Yay! That fixed it :)</p>
<p>Another, rather clever approach is to use <strong><strong>let</strong></strong> instead of <strong><strong>var</strong></strong>, since <strong><strong>let</strong></strong> is block-scoped and so a new identifier binding is created for each iteration in the for-loop:</p><pre><code class="language-js">var result = [];
for (let i = 0; i &lt; 5; i++) {
result[i] = function () {
console.log(i);
};
}
result[0](); // 0, expected 0
result[1](); // 1, expected 1
result[2](); // 2, expected 2
result[3](); // 3, expected 3
result[4](); // 4, expected 4</code></pre>
<p>Tada! :)</p>
<h2 id="example-2--2"><strong>Example 2:</strong></h2>
<p>In this example, we’ll show how each <em><em>call</em></em> to a function creates a new separate closure:</p><pre><code class="language-js">function iCantThinkOfAName(num, obj) {
// This array variable, along with the 2 parameters passed in,
// are 'captured' by the nested function 'doSomething'
var array = [1, 2, 3];
function doSomething(i) {
num += i;
array.push(num);
console.log('num: ' + num);
console.log('array: ' + array);
console.log('obj.value: ' + obj.value);
}
return doSomething;
}
var referenceObject = { value: 10 };
var foo = iCantThinkOfAName(2, referenceObject); // closure #1
var bar = iCantThinkOfAName(6, referenceObject); // closure #2
foo(2);
/*
num: 4
array: 1,2,3,4
obj.value: 10
*/
bar(2);
/*
num: 8
array: 1,2,3,8
obj.value: 10
*/
referenceObject.value++;
foo(4);
/*
num: 8
array: 1,2,3,4,8
obj.value: 11
*/
bar(4);
/*
num: 12
array: 1,2,3,8,12
obj.value: 11
*/</code></pre>
<p>In this example, we can see that each call to the function <strong><strong>iCantThinkOfAName</strong></strong> creates a new closure, namely <strong><strong>foo</strong></strong> and <strong><strong>bar</strong></strong>. Subsequent invocations to either closure functions updates the closure variables within that closure itself, demonstrating that the variables in <em><em>each</em></em> closure continue to be usable by <strong><strong>iCantThinkOfAName</strong></strong>’s <strong><strong>doSomething</strong></strong> function long after <strong><strong>iCantThinkOfAName</strong></strong> returns.</p>
<h2 id="example-3-"><strong>Example 3:</strong></h2><pre><code class="language-js">function mysteriousCalculator(a, b) {
var mysteriousVariable = 3;
return {
add: function() {
var result = a + b + mysteriousVariable;
return toFixedTwoPlaces(result);
},
subtract: function() {
var result = a - b - mysteriousVariable;
return toFixedTwoPlaces(result);
}
}
}
function toFixedTwoPlaces(value) {
return value.toFixed(2);
}
var myCalculator = mysteriousCalculator(10.01, 2.01);
myCalculator.add() // 15.02
myCalculator.subtract() // 5.00</code></pre>
<p>What we can observe is that <strong><strong>mysteriousCalculator</strong></strong> is in the global scope, and it returns two functions. Abstractly, the environments for the example above look like this:</p><pre><code class="language-js">GlobalEnvironment = {
EnvironmentRecord: {
// built-in identifiers
Array: '&lt;func&gt;',
Object: '&lt;func&gt;',
// etc...
// custom identifiers
mysteriousCalculator: '&lt;func&gt;',
toFixedTwoPlaces: '&lt;func&gt;',
},
outer: null,
};
mysteriousCalculatorEnvironment = {
EnvironmentRecord: {
a: 10.01,
b: 2.01,
mysteriousVariable: 3,
}
outer: GlobalEnvironment,
};
addEnvironment = {
EnvironmentRecord: {
result: 15.02
}
outer: mysteriousCalculatorEnvironment,
};
subtractEnvironment = {
EnvironmentRecord: {
result: 5.00
}
outer: mysteriousCalculatorEnvironment,
};</code></pre>
<p>Because our <strong><strong>add</strong></strong> and <strong><strong>subtract</strong></strong> functions have a reference to the <strong><strong>mysteriousCalculator</strong></strong> function environment, they’re able to make use of the variables in that environment to calculate the result.</p>
<h2 id="example-4-"><strong>Example 4:</strong></h2>
<p>One final example to demonstrate an important use of closures: to maintain a private reference to a variable in the outer scope.</p><pre><code class="language-js">function secretPassword() {
var password = 'xh38sk';
return {
guessPassword: function(guess) {
if (guess === password) {
return true;
} else {
return false;
}
}
}
}
var passwordGame = secretPassword();
passwordGame.guessPassword('heyisthisit?'); // false
passwordGame.guessPassword('xh38sk'); // true</code></pre>
<p>This is a very powerful technique — it gives the closure function <strong><strong>guessPassword</strong></strong> exclusive access to the <strong><strong>password</strong></strong> variable, while making it impossible to access the <strong><strong>password</strong></strong> from the outside.</p>
<h1 id="tl-dr"><strong>TL;DR</strong></h1>
<ul>
<li>Execution context is an abstract concept used by the ECMAScript specification to<em><em> </em></em>track the runtime evaluation of code. At any point in time, there can only be one execution context that is executing code.</li>
<li>Every execution context has a Lexical Environment. This Lexical environments holds identifier bindings (i.e. variables and their associated values), and also has a reference to its outer environment.</li>
<li>The set of identifiers that each environment has access to is called “scope.” We can nest these scopes into a hierarchical chain of environments, known as the “scope chain”.</li>
<li>Every function has an execution context, which comprises of a Lexical Environment that gives meaning to the variables within that function and a reference to its parent’s environment. And so it appears as if the function “remembers” this environment (or scope) because the function literally has a reference to this environment. This is a closure.</li>
<li>A closure is created every time an enclosing outer function is called. In other words, the inner function does not need to return for a closure to be created.</li>
<li>The scope of a closure in JavaScript is lexical, meaning it’s defined statically by its location within the source code.</li>
<li>Closures have many practical use cases. One important use case is to maintain a private reference to a variable in the outer scope.</li>
</ul>
<h1 id="clos-ure-ing-remarks"><strong>Clos(ure)ing remarks</strong></h1>
<p>I hope this post was helpful and gave you a mental model for how closures are implemented in JavaScript. As you can see, understanding the nuts and bolts of how they work makes it much easier to spot closures — not to mention saving a lot of headache when it’s time to debug.</p>
<p>PS: I’m human and make mistakes — so if you find any mistakes I’d love for you to let me know!</p>
<h2 id="further-reading"><strong>Further Reading</strong></h2>
<p>For the sake of brevity I left out a few topics that might be interesting to some readers. Here are some links that I wanted to share:</p>
<ul>
<li><strong><strong>What’s the VariableEnvironment within an execution context?</strong></strong> Dr. Axel Rauschmayer does a phenomenol job explaining it so I’ll leave you off with a link to his blog post: <a href="http://www.2ality.com/2011/04/ecmascript-5-spec-lexicalenvironment.html" rel="noopener nofollow">http://www.2ality.com/2011/04/ecmascript-5-spec-lexicalenvironment.html</a></li>
<li><strong><strong>What are the different types of Environment Records?</strong></strong> Read the spec here: <a href="http://www.ecma-international.org/ecma-262/6.0/#sec-environment-records" rel="noopener nofollow">http://www.ecma-international.org/ecma-262/6.0/#sec-environment-records</a></li>
<li><strong><strong>Excellent article by MDN on closures:</strong></strong> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures" rel="noopener nofollow">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures</a></li>
<li>Others? Please suggest and I’ll add them!</li>
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
