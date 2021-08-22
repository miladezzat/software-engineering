---
card: "/images/default.jpg"
tags: [JavaScript]
description: "JavaScript is one of the most popular programming languages i"
author: "Milad E. Fahmy"
title: "The JavaScript Beginner s Handbook (2020 Edition)"
created: "2021-08-16T10:05:31+02:00"
modified: "2021-08-16T10:05:31+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-programming tag-web-development tag-tech tag-learning ">
<header class="post-full-header">
<h1 class="post-full-title">The JavaScript Beginner's Handbook (2020 Edition)</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/03/cover-1.png 300w,
/news/content/images/size/w600/2020/03/cover-1.png 600w,
/news/content/images/size/w1000/2020/03/cover-1.png 1000w,
/news/content/images/size/w2000/2020/03/cover-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/03/cover-1.png" alt="The JavaScript Beginner's Handbook (2020 Edition)">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I believe it's a great choice for your first programming language ever.</p>
<p>We mainly use JavaScript to create</p>
<ul>
<li>websites</li>
<li>web applications</li>
<li>server-side applications using Node.js</li>
</ul>
<p>but JavaScript is not limited to these things, and it can also be used to</p>
<ul>
<li>create mobile applications using tools like React Native</li>
<li>create programs for microcontrollers and the internet of things</li>
<li>create smartwatch applications</li>
</ul>
<p>It can basically do anything. It's so popular that everything new that shows up is going to have some kind of JavaScript integration at some point.</p>
<p>JavaScript is a programming language that is:</p>
<ul>
<li><strong>high level</strong>: it provides abstractions that allow you to ignore the details of the machine where it's running on. It manages memory automatically with a garbage collector, so you can focus on the code instead of managing memory like other languages like C would need, and provides many constructs which allow you to deal with highly powerful variables and objects.</li>
<li><strong>dynamic</strong>: opposed to static programming languages, a dynamic language executes at runtime many of the things that a static language does at compile time. This has pros and cons, and it gives us powerful features like dynamic typing, late binding, reflection, functional programming, object runtime alteration, closures and much more. Don't worry if those things are unknown to you - you'll know all of them by the end of the course.</li>
<li><strong>dynamically typed</strong>: a variable does not enforce a type. You can reassign any type to a variable, for example, assigning an integer to a variable that holds a string.</li>
<li><strong>loosely typed</strong>: as opposed to strong typing, loosely (or weakly) typed languages do not enforce the type of an object, allowing more flexibility but denying us type safety and type checking (something that TypeScript - which builds on top of JavaScript - provides)</li>
<li><strong>interpreted</strong>: it's commonly known as an interpreted language, which means that it does not need a compilation stage before a program can run, as opposed to C, Java or Go for example. In practice, browsers do compile JavaScript before executing it, for performance reasons, but this is transparent to you - there is no additional step involved.</li>
<li><strong>multi-paradigm</strong>: the language does not enforce any particular programming paradigm, unlike Java for example, which forces the use of object-oriented programming, or C that forces imperative programming. You can write JavaScript using an object-oriented paradigm, using prototypes and the new (as of ES6) classes syntax. You can write JavaScript in a functional programming style, with its first-class functions, or even in an imperative style (C-like).</li>
</ul>
<p>In case you're wondering, <em>JavaScript has nothing to do with Java</em>, it's a poor name choice but we have to live with it.</p>
<h2 id="summaryofthehandbook">Summary of the handbook</h2>
<ol>
<li><a href="#alittlebitofhistory">A little bit of history</a></li>
<li><a href="#justjavascript">Just JavaScript</a></li>
<li><a href="#abriefintrotothesyntaxofjavascript">A brief intro to the syntax of JavaScript</a></li>
<li><a href="#semicolons">Semicolons</a></li>
<li><a href="#values">Values</a></li>
<li><a href="#variables">Variables</a></li>
<li><a href="#types">Types</a></li>
<li><a href="#expressions">Expressions</a></li>
<li><a href="#operators">Operators</a></li>
<li><a href="#precedencerules">Precedence rules</a></li>
<li><a href="#comparisonoperators">Comparison operators</a></li>
<li><a href="#conditionals">Conditionals</a></li>
<li><a href="#arrays">Arrays</a></li>
<li><a href="#strings">Strings</a></li>
<li><a href="#loops">Loops</a></li>
<li><a href="#functions">Functions</a></li>
<li><a href="#arrowfunctions">Arrow functions</a></li>
<li><a href="#objects">Objects</a></li>
<li><a href="#objectproperties">Object Properties</a></li>
<li><a href="#objectmethods">Object Methods</a></li>
<li><a href="#classes">Classes</a></li>
<li><a href="#inheritance">Inheritance</a></li>
<li><a href="#asynchonousprogrammingandcallbacks">Asynchonous Programming and Callbacks</a></li>
<li><a href="#promises">Promises</a></li>
<li><a href="#asyncandawait">Async and Await</a></li>
<li><a href="#variablescope">Variable scope</a></li>
<li><a href="#conclusion">Conclusion</a></li>
</ol>
<p>Created in 1995, JavaScript has gone a very long way since its humble beginnings.</p>
<p>It was the first scripting language that was supported natively by web browsers, and thanks to this it gained a competitive advantage over any other language and today it's still the only scripting language that we can use to build Web Applications.</p>
<p>Other languages exist, but all must compile to JavaScript - or more recently to WebAssembly, but this is another story.</p>
<p>In the begining, JavaScript was not nearly powerful as it is today, and it was mainly used for fancy animations and the marvel known at the time as <em>Dynamic HTML</em>.</p>
<p>With the growing needs that the web platform demanded (and continues to demand), JavaScript <em>had</em> the responsibility to grow as well, to accommodate the needs of one of the most widely used ecosystems of the world.</p>
<p>JavaScript is also now widely used outside of the browser. The rise of Node.js in the last few years unlocked backend development, once the domain of Java, Ruby, Python, PHP, and more traditional server-side languages.</p>
<p>JavaScript is now also the language powering databases and many more applications, and it's even possible to develop embedded applications, mobile apps, TV apps, and much more. What started as a tiny language inside the browser is now the most popular language in the world.</p>
<p>Sometimes it's hard to separate JavaScript from the features of the environment it is used in.</p>
<p>For example, the <code>console.log()</code> line you can find in many code examples is not JavaScript. Instead, it's part of the vast library of APIs provided to us in the browser.</p>
<p>In the same way, on the server it can be sometimes hard to separate the JavaScript language features from the APIs provided by Node.js.</p>
<p>Is a particular feature provided by React or Vue? Or is it "plain JavaScript", or "vanilla JavaScript" as it's often called?</p>
<p>In this book I talk about JavaScript, the language.</p>
<p>Without complicating your learning process with things that are outside of it, and provided by external ecosystems.</p>
<p>In this little introduction I want to tell you about 5 concepts:</p>
<ul>
<li>white space</li>
<li>case sensitivity</li>
<li>literals</li>
<li>identifiers</li>
<li>comments</li>
</ul>
<h3 id="whitespace">White space</h3>
<p>JavaScript does not consider white space meaningful. Spaces and line breaks can be added in any fashion you might like, at least <em>in theory</em>.</p>
<p>In practice, you will most likely keep a well defined style and adhere to what people commonly use, and enforce this using a linter or a style tool such as <em>Prettier</em>.</p>
<p>For example, I always use 2 space characters for each indentation.</p>
<h4 id="casesensitive">Case sensitive</h4>
<p>JavaScript is case sensitive. A variable named <code>something</code> is different than <code>Something</code>.</p>
<p>The same goes for any identifier.</p>
<h3 id="literals">Literals</h3>
<p>We define <strong>literal</strong> as a value that is written in the source code, for example, a number, a string, a boolean or also more advanced constructs, like Object Literals or Array Literals:</p>
<pre><code class="language-js">5
'Test'
true
['a', 'b']
{color: 'red', shape: 'Rectangle'}
</code></pre>
<h3 id="identifiers">Identifiers</h3>
<p>An <strong>identifier</strong> is a sequence of characters that can be used to identify a variable, a function, or an object. It can start with a letter, the dollar sign <code>$</code> or an underscore <code>_</code>, and it can contain digits. Using Unicode, a letter can be any allowed character, for example, an emoji ?.</p>
<pre><code class="language-js">Test
test
TEST
_test
Test1
$test
</code></pre>
<p>The dollar sign is commonly used to reference DOM elements.</p>
<p>Some names are reserved for JavaScript internal use, and we can't use them as identifiers.</p>
<h3 id="comments">Comments</h3>
<p>Comments are one of the most important parts of any program, in any programming language. They are important because they let us annotate the code and add important information that otherwise would not be available to other people (or ourselves) reading the code.</p>
<p>In JavaScript, we can write a comment on a single line using <code>//</code>. Everything after <code>//</code> is not considered as code by the JavaScript interpreter.</p>
<p>Like this:</p>
<pre><code class="language-js">// a comment
true //another comment
</code></pre>
<p>Another type of comment is a multi-line comment. It starts with <code>/*</code> and ends with <code>*/</code>.</p>
<p>Everything in between is not considered as code:</p>
<pre><code class="language-js">/* some kind
of
comment
*/
</code></pre>
<p>Every line in a JavaScript program is optionally terminated using semicolons.</p>
<p>I said optionally, because the JavaScript interpreter is smart enough to introduce semicolons for you.</p>
<p>In most cases, you can omit semicolons altogether from your programs without even thinking about it.</p>
<p>This fact is very controversial. Some developers will always use semicolons, some others will never use semicolons, and you'll always find code that uses semicolons and code that does not.</p>
<p>My personal preference is to avoid semicolons, so my examples in the book will not include them.</p>
<p>A <code>hello</code> string is a <strong>value</strong>.<br>
A number like <code>12</code> is a <strong>value</strong>.</p>
<p><code>hello</code> and <code>12</code> are values. <code>string</code> and <code>number</code> are the <strong>types</strong> of those values.</p>
<p>The <strong>type</strong> is the kind of value, its category. We have many different types in JavaScript, and we'll talk about them in detail later on. Each type has its own characteristics.</p>
<p>When we need to have a reference to a value, we assign it to a <strong>variable</strong>.<br>
The variable can have a name, and the value is what's stored in a variable, so we can later access that value through the variable name.</p>
<p>A variable is a value assigned to an identifier, so you can reference and use it later in the program.</p>
<p>This is because JavaScript is <strong>loosely typed</strong>, a concept you'll frequently hear about.</p>
<p>A variable must be declared before you can use it.</p>
<p>We have 2 main ways to declare variables. The first is to use <code>const</code>:</p>
<pre><code class="language-js">const a = 0
</code></pre>
<p>The second way is to use <code>let</code>:</p>
<pre><code class="language-js">let a = 0
</code></pre>
<p>What's the difference?</p>
<p><code>const</code> defines a constant reference to a value. This means the reference cannot be changed. You cannot reassign a new value to it.</p>
<p>Using <code>let</code> you can assign a new value to it.</p>
<p>For example, you cannot do this:</p>
<pre><code class="language-js">const a = 0
a = 1
</code></pre>
<p>Because you'll get an error: <code>TypeError: Assignment to constant variable.</code>.</p>
<p>On the other hand, you can do it using <code>let</code>:</p>
<pre><code class="language-js">let a = 0
a = 1
</code></pre>
<p><code>const</code> does not mean "constant" in the way some other languages like C mean. In particular, it does not mean the value cannot change - it means it cannot be reassigned. If the variable points to an object or an array (we'll see more about objects and arrays later) the content of the object or the array can freely change.</p>
<p><code>const</code> variables must be initialized at the declaration time:</p>
<pre><code class="language-js">const a = 0
</code></pre>
<p>but <code>let</code> values can be initialized later:</p>
<pre><code class="language-js">let a
a = 0
</code></pre>
<p>You can declare multiple variables at once in the same statement:</p>
<pre><code class="language-js">const a = 1, b = 2
let c = 1, d = 2
</code></pre>
<p>But you cannot redeclare the same variable more than one time:</p>
<pre><code class="language-js">let a = 1
let a = 2
</code></pre>
<p>or you'd get a "duplicate declaration" error.</p>
<p>My advice is to always use <code>const</code> and only use <code>let</code> when you know you'll need to reassign a value to that variable. Why? Because the less power our code has, the better. If we know a value cannot be reassigned, it's one less source for bugs.</p>
<p>Now that we saw how to work with <code>const</code> and <code>let</code>, I want to mention <code>var</code>.</p>
<p>Until 2015, <code>var</code> was the only way we could declare a variable in JavaScript. Today, a modern codebase will most likely just use <code>const</code> and <code>let</code>. There are some fundamental differences which I detail <a href="https://flaviocopes.com/javascript-difference-let-var/">in this post</a> but if you're just starting out, you might not care about them. Just use <code>const</code> and <code>let</code>.</p>
<p>Variables in JavaScript do not have any type attached.</p>
<p>They are <em>untyped</em>.</p>
<p>Once you assign a value with some type to a variable, you can later reassign the variable to host a value of any other type without any issues.</p>
<p>In JavaScript we have 2 main kinds of types: <strong>primitive types</strong> and <strong>object types</strong>.</p>
<h3 id="primitivetypes">Primitive types</h3>
<p>Primitive types are</p>
<ul>
<li>numbers</li>
<li>strings</li>
<li>booleans</li>
<li>symbols</li>
</ul>
<p>And two special types: <code>null</code> and <code>undefined</code>.</p>
<h3 id="objecttypes">Object types</h3>
<p>Any value that's not of a primitive type (a string, a number, a boolean, null or undefined) is an <strong>object</strong>.</p>
<p>Object types have <strong>properties</strong> and also have <strong>methods</strong> that can act on those properties.</p>
<p>We'll talk more about objects later on.</p>
<p>An expression is a single unit of JavaScript code that the JavaScript engine can evaluate, and return a value.</p>
<p>Expressions can vary in complexity.</p>
<p>We start from the very simple ones, called primary expressions:</p>
<pre><code class="language-js">2
0.02
'something'
true
false
this //the current scope
undefined
i //where i is a variable or a constant
</code></pre>
<p>Arithmetic expressions are expressions that take a variable and an operator (more on operators soon), and result in a number:</p>
<pre><code class="language-js">1 / 2
i++
i -= 2
i * 2
</code></pre>
<p>String expressions are expressions that result in a string:</p>
<pre><code class="language-js">'A ' + 'string'
</code></pre>
<p>Logical expressions make use of logical operators and resolve to a boolean value:</p>
<pre><code class="language-js">a &amp;&amp; b
a || b
!a
</code></pre>
<p>More advanced expressions involve objects, functions, and arrays, and I'll introduce them later.</p>
<p>Operators allow you to get two simple expressions and combine them to form a more complex expression.</p>
<p>We can classify operators based on the operands they work with. Some operators work with 1 operand. Most work with 2 operands. Just one operator works with 3 operands.</p>
<p>In this first introduction to operators, we'll introduce the operators you are most likely familiar with: operators with 2 operands.</p>
<p>I already introduced one when talking about variables: the assignment operator <code>=</code>. You use <code>=</code> to assign a value to a variable:</p>
<pre><code class="language-js">let b = 2
</code></pre>
<p>Let's now introduce another set of binary operators that you're already familiar with from basic math.</p>
<h3 id="theadditionoperator">The addition operator (+)</h3>
<pre><code class="language-js">const three = 1 + 2
const four = three + 1
</code></pre>
<p>The <code>+</code> operator also does string concatenation if you use strings, so pay attention:</p>
<pre><code class="language-js">const three = 1 + 2
three + 1 // 4
'three' + 1 // three1
</code></pre>
<h3 id="thesubtractionoperator">The subtraction operator (-)</h3>
<pre><code class="language-js">const two = 4 - 2
</code></pre>
<h3 id="thedivisionoperator">The division operator (/)</h3>
<p>Returns the quotient of the first operator and the second:</p>
<pre><code class="language-js">const result = 20 / 5 //result === 4
const result = 20 / 7 //result === 2.857142857142857
</code></pre>
<p>If you divide by zero, JavaScript does not raise any error but returns the <code>Infinity</code> value (or <code>-Infinity</code> if the value is negative).</p>
<pre><code class="language-js">1 / 0 //Infinity
-1 / 0 //-Infinity
</code></pre>
<h3 id="theremainderoperator">The remainder operator (%)</h3>
<p>The remainder is a very useful calculation in many use cases:</p>
<pre><code class="language-js">const result = 20 % 5 //result === 0
const result = 20 % 7 //result === 6
</code></pre>
<p>A remainder by zero is always <code>NaN</code>, a special value that means "Not a Number":</p>
<pre><code class="language-js">1 % 0 //NaN
-1 % 0 //NaN
</code></pre>
<h3 id="themultiplicationoperator">The multiplication operator (*)</h3>
<p>Multiply two numbers</p>
<pre><code class="language-js">1 * 2 //2
-1 * 2 //-2
</code></pre>
<h3 id="theexponentiationoperator">The exponentiation operator (**)</h3>
<p>Raise the first operand to the power of the second operand</p>
<pre><code class="language-js">1 ** 2 //1
2 ** 1 //2
2 ** 2 //4
2 ** 8 //256
8 ** 2 //64
</code></pre>
<p>Every complex statement with multiple operators in the same line will introduce precedence problems.</p>
<p>Take this example:</p>
<pre><code class="language-js">let a = 1 * 2 + 5 / 2 % 2
</code></pre>
<p>The result is 2.5, but why?</p>
<p>What operations are executed first, and which need to wait?</p>
<p>Some operations have more precedence than the others. The precedence rules are listed in this table:</p>
<table>
<thead>
<tr>
<th>Operator</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>*</code> <code>/</code> <code>%</code></td>
<td>multiplication/division</td>
</tr>
<tr>
<td><code>+</code> <code>-</code></td>
<td>addition/subtraction</td>
</tr>
<tr>
<td><code>=</code></td>
<td>assignment</td>
</tr>
</tbody>
</table>
<p>Operations on the same level (like <code>+</code> and <code>-</code>) are executed in the order they are found, from left to right.</p>
<p>Following these rules, the operation above can be solved in this way:</p>
<pre><code class="language-js">let a = 1 * 2 + 5 / 2 % 2
let a = 2 + 5 / 2 % 2
let a = 2 + 2.5 % 2
let a = 2 + 0.5
let a = 2.5
</code></pre>
<p>After assignment and math operators, the third set of operators I want to introduce is conditional operators.</p>
<p>You can use the following operators to compare two numbers, or two strings.</p>
<p>Comparison operators always return a boolean, a value that's <code>true</code> or <code>false</code>).</p>
<p>Those are <strong>disequality comparison operators</strong>:</p>
<ul>
<li><code>&lt;</code> means "less than"</li>
<li><code>&lt;=</code> means "less than or equal to"</li>
<li><code>&gt;</code> means "greater than"</li>
<li><code>&gt;=</code> means "greater than or equal to"</li>
</ul>
<p>Example:</p>
<pre><code class="language-js">let a = 2
a &gt;= 1 //true
</code></pre>
<p>In addition to those, we have 4 <strong>equality operators</strong>. They accept two values, and return a boolean:</p>
<ul>
<li><code>===</code> checks for equality</li>
<li><code>!==</code> checks for inequality</li>
</ul>
<p>Note that we also have <code>==</code> and <code>!=</code> in JavaScript, but I highly suggest to only use <code>===</code> and <code>!==</code> because they can prevent some subtle problems.</p>
<p>With the comparison operators in place, we can talk about conditionals.</p>
<p>An <code>if</code> statement is used to make the program take a route, or another, depending on the result of an expression evaluation.</p>
<p>This is the simplest example, which always executes:</p>
<pre><code class="language-js">if (true) {
//do something
}
</code></pre>
<p>on the contrary, this is never executed:</p>
<pre><code class="language-js">if (false) {
//do something (? never ?)
}
</code></pre>
<p>The conditional checks the expression you pass to it for a true or false value. If you pass a number, that always evaluates to true unless it's 0. If you pass a string, it always evaluates to true unless it's an empty string. Those are general rules of casting types to a boolean.</p>
<p>Did you notice the curly braces? That is called a <strong>block</strong>, and it is used to group a list of different statements.</p>
<p>A block can be put wherever you can have a single statement. And if you have a single statement to execute after the conditionals, you can omit the block, and just write the statement:</p>
<pre><code class="language-js">if (true) doSomething()
</code></pre>
<p>But I always like to use curly braces to be more clear.</p>
<p>You can provide a second part to the <code>if</code> statement: <code>else</code>.</p>
<p>You attach a statement that is going to be executed if the <code>if</code> condition is false:</p>
<pre><code class="language-js">if (true) {
//do something
} else {
//do something else
}
</code></pre>
<p>Since <code>else</code> accepts a statement, you can nest another if/else statement inside it:</p>
<pre><code class="language-js">if (a === true) {
//do something
} else if (b === true) {
//do something else
} else {
//fallback
}
</code></pre>
<p>An array is a collection of elements.</p>
<p>Arrays in JavaScript are not a <em>type</em> on their own.</p>
<p>Arrays are <strong>objects</strong>.</p>
<p>We can initialize an empty array in these 2 different ways:</p>
<pre><code class="language-js">const a = []
const a = Array()
</code></pre>
<p>The first is using the <strong>array literal syntax</strong>. The second uses the Array built-in function.</p>
<p>You can pre-fill the array using this syntax:</p>
<pre><code class="language-js">const a = [1, 2, 3]
const a = Array.of(1, 2, 3)
</code></pre>
<p>An array can hold any value, even values of different types:</p>
<pre><code class="language-js">const a = [1, 'Flavio', ['a', 'b']]
</code></pre>
<p>Since we can add an array into an array, we can create multi-dimensional arrays, which have very useful applications (e.g. a matrix):</p>
<pre><code class="language-js">const matrix = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
]
matrix[0][0] //1
matrix[2][0] //7
</code></pre>
<p>You can access any element of the array by referencing its index, which starts from zero:</p>
<pre><code class="language-js">a[0] //1
a[1] //2
a[2] //3
</code></pre>
<p>You can initialize a new array with a set of values using this syntax, which first initializes an array of 12 elements, and fills each element with the number <code>0</code>:</p>
<pre><code class="language-js">Array(12).fill(0)
</code></pre>
<p>You can get the number of elements in the array by checking its <code>length</code> property:</p>
<pre><code class="language-js">const a = [1, 2, 3]
a.length //3
</code></pre>
<p>Note that you can set the length of the array. If you assign a bigger number than the arrays current capacity, nothing happens. If you assign a smaller number, the array is cut at that position:</p>
<pre><code class="language-js">const a = [1, 2, 3]
a //[ 1, 2, 3 ]
a.length = 2
a //[ 1, 2 ]
</code></pre>
<h3 id="howtoaddanitemtoanarray">How to add an item to an array</h3>
<p>We can add an element at the end of an array using the <code>push()</code> method:</p>
<pre><code class="language-js">a.push(4)
</code></pre>
<p>We can add an element at the beginning of an array using the <code>unshift()</code> method:</p>
<pre><code class="language-js">a.unshift(0)
a.unshift(-2, -1)
</code></pre>
<h3 id="howtoremoveanitemfromanarray">How to remove an item from an array</h3>
<p>We can remove an item from the end of an array using the <code>pop()</code> method:</p>
<pre><code class="language-js">a.pop()
</code></pre>
<p>We can remove an item from the beginning of an array using the <code>shift()</code> method:</p>
<pre><code class="language-js">a.shift()
</code></pre>
<h3 id="howtojointwoormorearrays">How to join two or more arrays</h3>
<p>You can join multiple arrays by using <code>concat()</code>:</p>
<pre><code class="language-js">const a = [1, 2]
const b = [3, 4]
const c = a.concat(b) //[1,2,3,4]
a //[1,2]
b //[3,4]
</code></pre>
<p>You can also use the <strong>spread</strong> operator (<code>...</code>) in this way:</p>
<pre><code class="language-js">const a = [1, 2]
const b = [3, 4]
const c = [...a, ...b]
c //[1,2,3,4]
</code></pre>
<h3 id="howtofindaspecificiteminthearray">How to find a specific item in the array</h3>
<p>You can use the <code>find()</code> method of an array:</p>
<pre><code class="language-js">a.find((element, index, array) =&gt; {
//return true or false
})
</code></pre>
<p>Returns the first item that returns true, and returns <code>undefined</code> if the element is not found.</p>
<p>A commonly used syntax is:</p>
<pre><code class="language-js">a.find(x =&gt; x.id === my_id)
</code></pre>
<p>The above line will return the first element in the array that has <code>id === my_id</code>.</p>
<p><code>findIndex()</code> works similarly to <code>find()</code>, but returns the index of the first item that returns true, and if not found, it returns <code>undefined</code>:</p>
<pre><code class="language-js">a.findIndex((element, index, array) =&gt; {
//return true or false
})
</code></pre>
<p>Another method is <code>includes()</code>:</p>
<pre><code class="language-js">a.includes(value)
</code></pre>
<p>Returns true if <code>a</code> contains <code>value</code>.</p>
<pre><code class="language-js">a.includes(value, i)
</code></pre>
<p>Returns true if <code>a</code> contains <code>value</code> after the position <code>i</code>.</p>
<p>A string is a sequence of characters.</p>
<p>It can be also defined as a string literal, which is enclosed in quotes or double quotes:</p>
<pre><code class="language-js">'A string'
"Another string"
</code></pre>
<p>I personally prefer single quotes all the time, and use double quotes only in HTML to define attributes.</p>
<p>You assign a string value to a variable like this:</p>
<pre><code class="language-js">const name = 'Flavio'
</code></pre>
<p>You can determine the length of a string using the <code>length</code> property of it:</p>
<pre><code class="language-js">'Flavio'.length //6
const name = 'Flavio'
name.length //6
</code></pre>
<p>This is an empty string: <code>''</code>. Its length property is 0:</p>
<pre><code class="language-js">''.length //0
</code></pre>
<p>Two strings can be joined using the <code>+</code> operator:</p>
<pre><code class="language-js">"A " + "string"
</code></pre>
<p>You can use the <code>+</code> operator to <em>interpolate</em> variables:</p>
<pre><code class="language-js">const name = 'Flavio'
"My name is " + name //My name is Flavio
</code></pre>
<p>Another way to define strings is to use template literals, defined inside backticks. They are especially useful to make multiline strings much simpler. With single or double quotes you can't define a multiline string easily - you'd need to use escaping characters.</p>
<p>Once a template literal is opened with the backtick, you just press enter to create a new line, with no special characters, and it's rendered as-is:</p>
<pre><code class="language-js">const string = `Hey
this
string
is awesome!`
</code></pre>
<p>Template literals are also great because they provide an easy way to interpolate variables and expressions into strings.</p>
<p>You do so by using the <code>${...}</code> syntax:</p>
<pre><code class="language-js">const var = 'test'
const string = `something ${var}`
//something test
</code></pre>
<p>inside the <code>${}</code> you can add anything, even expressions:</p>
<pre><code class="language-js">const string = `something ${1 + 2 + 3}`
const string2 = `something
${foo() ? 'x' : 'y'}`
</code></pre>
<p>Loops are one of the main control structures of JavaScript.</p>
<p>With a loop we can automate and repeat a block of code however many times we want it to run, even indefinitely.</p>
<p>JavaScript provides many way to iterate through loops.</p>
<p>I want to focus on 3 ways:</p>
<ul>
<li>while loops</li>
<li>for loops</li>
<li>for..of loops</li>
</ul>
<h3 id="while"><code>while</code></h3>
<p>The while loop is the simplest looping structure that JavaScript provides us.</p>
<p>We add a condition after the <code>while</code> keyword, and we provide a block that is run until the condition evaluates to <code>true</code>.</p>
<p>Example:</p>
<pre><code class="language-js">const list = ['a', 'b', 'c']
let i = 0
while (i &lt; list.length) {
console.log(list[i]) //value
console.log(i) //index
i = i + 1
}
</code></pre>
<p>You can interrupt a <code>while</code> loop using the <code>break</code> keyword, like this:</p>
<pre><code class="language-js">while (true) {
if (somethingIsTrue) break
}
</code></pre>
<p>and if you decide that in the middle of a loop you want to skip the current iteration, you can jump to the next iteration using <code>continue</code>:</p>
<pre><code class="language-js">while (true) {
if (somethingIsTrue) continue
//do something else
}
</code></pre>
<p>Very similar to <code>while</code>, we have <code>do..while</code> loops. It's basically the same as <code>while</code>, except the condition is evaluated <em>after</em> the code block is executed.</p>
<p>This means the block is always executed <em>at least once</em>.</p>
<p>Example:</p>
<pre><code class="language-js">const list = ['a', 'b', 'c']
let i = 0
do {
console.log(list[i]) //value
console.log(i) //index
i = i + 1
} while (i &lt; list.length)
</code></pre>
<h3 id="for"><code>for</code></h3>
<p>The second very important looping structure in JavaScript is the <strong>for loop</strong>.</p>
<p>We use the <code>for</code> keyword and we pass a set of 3 instructions: the initialization, the condition, and the increment part.</p>
<p>Example:</p>
<pre><code class="language-js">const list = ['a', 'b', 'c']
for (let i = 0; i &lt; list.length; i++) {
console.log(list[i]) //value
console.log(i) //index
}
</code></pre>
<p>Just like with <code>while</code> loops, you can interrupt a <code>for</code> loop using <code>break</code> and you can fast forward to the next iteration of a <code>for</code> loop using <code>continue</code>.</p>
<h3 id="forof"><code>for...of</code></h3>
<p>This loop is relatively recent (introduced in 2015)  and it's a simplified version of the <code>for</code> loop:</p>
<pre><code class="language-js">const list = ['a', 'b', 'c']
for (const value of list) {
console.log(value) //value
}
</code></pre>
<p>In any moderately complex JavaScript program, everything happens inside functions.</p>
<p>Functions are a core, essential part of JavaScript.</p>
<p>What is a function?</p>
<p>A function is a block of code, self contained.</p>
<p>Here's a <strong>function declaration</strong>:</p>
<pre><code class="language-js">function getData() {
// do something
}
</code></pre>
<p>A function can be run any time you want by invoking it, like this:</p>
<pre><code class="language-js">getData()
</code></pre>
<p>A function can have one or more argument:</p>
<pre><code class="language-js">function getData() {
//do something
}
function getData(color) {
//do something
}
function getData(color, age) {
//do something
}
</code></pre>
<p>When we can pass an argument, we invoke the function passing parameters:</p>
<pre><code class="language-js">function getData(color, age) {
//do something
}
getData('green', 24)
getData('black')
</code></pre>
<p>Note that in the second invokation I passed the <code>black</code> string parameter as the <code>color</code> argument, but no <code>age</code>. In this case, <code>age</code> inside the function is <code>undefined</code>.</p>
<p>We can check if a value is not undefined using this conditional:</p>
<pre><code class="language-js">function getData(color, age) {
//do something
if (typeof age !== 'undefined') {
//...
}
}
</code></pre>
<p><code>typeof</code> is a unary operator that allows us to check the type of a variable.</p>
<p>You can also check in this way:</p>
<pre><code class="language-js">function getData(color, age) {
//do something
if (age) {
//...
}
}
</code></pre>
<p>Although the conditional will also be true if <code>age</code> is <code>null</code>, <code>0</code> or an empty string.</p>
<p>You can have default values for parameters, in case they are not passed:</p>
<pre><code class="language-js">function getData(color = 'black', age = 25) {
//do something
}
</code></pre>
<p>You can pass any value as a parameter: numbers, strings, booleans, arrays, objects, and also functions.</p>
<p>A function has a return value. By default a function returns <code>undefined</code>, unless you add a <code>return</code> keyword with a value:</p>
<pre><code class="language-js">function getData() {
// do something
return 'hi!'
}
</code></pre>
<p>We can assign this return value to a variable when we invoke the function:</p>
<pre><code class="language-js">function getData() {
// do something
return 'hi!'
}
let result = getData()
</code></pre>
<p><code>result</code> now holds a string with the the <code>hi!</code> value.</p>
<p>You can only return one value.</p>
<p>To return multiple values, you can return an object, or an array, like this:</p>
<pre><code class="language-js">function getData() {
return ['Flavio', 37]
}
let [name, age] = getData()
</code></pre>
<p>Functions can be defined inside other functions:</p>
<pre><code class="language-js">const getData = () =&gt; {
const dosomething = () =&gt; {}
dosomething()
return 'test'
}
</code></pre>
<p>The nested function cannot be called from the outside of the enclosing function.</p>
<p>You can return a function from a function, too.</p>
<p>Arrow functions are a recent introduction to JavaScript.</p>
<p>They are very often used instead of "regular" functions, the ones I described in the previous chapter. You'll find both forms used everywhere.</p>
<p>Visually, they allows you to write functions with a shorter syntax, from:</p>
<pre><code class="language-js">function getData() {
//...
}
</code></pre>
<p>to</p>
<pre><code class="language-js">() =&gt; {
//...
}
</code></pre>
<p>But.. notice that we don't have a name here.</p>
<p>Arrow functions are anonymous. We must assign them to a variable.</p>
<p>We can assign a regular function to a variable, like this:</p>
<pre><code class="language-js">let getData = function getData() {
//...
}
</code></pre>
<p>When we do so, we can remove the name from the function:</p>
<pre><code class="language-js">let getData = function() {
//...
}
</code></pre>
<p>and invoke the function using the variable name:</p>
<pre><code class="language-js">let getData = function() {
//...
}
getData()
</code></pre>
<p>That's the same thing we do with arrow functions:</p>
<pre><code class="language-js">let getData = () =&gt; {
//...
}
getData()
</code></pre>
<p>If the function body contains just a single statement, you can omit the parentheses and write everything on a single line:</p>
<pre><code class="language-js">const getData = () =&gt; console.log('hi!')
</code></pre>
<p>Parameters are passed in the parentheses:</p>
<pre><code class="language-js">const getData = (param1, param2) =&gt;
console.log(param1, param2)
</code></pre>
<p>If you have one (and just one) parameter, you could omit the parentheses completely:</p>
<pre><code class="language-js">const getData = param =&gt; console.log(param)
</code></pre>
<p>Arrow functions allow you to have an implicit return - values are returned without having to use the <code>return</code> keyword.</p>
<p>It works when there is a one-line statement in the function body:</p>
<pre><code class="language-js">const getData = () =&gt; 'test'
getData() //'test'
</code></pre>
<p>Like with regular functions, we can have default values for parameters in case they are not passed:</p>
<pre><code class="language-js">const getData = (color = 'black',
age = 2) =&gt; {
//do something
}
</code></pre>
<p>And like regular functions, we can only return one value.</p>
<p>Arrow functions can also contain other arrow functions, or even regular functions.</p>
<p>The two types of functions are very similar, so you might ask why arrow functions were introduced. The big difference with regular functions is when they are used as object methods. This is something we'll soon look into.</p>
<p>Any value that's not of a primitive type (a string, a number, a boolean, a symbol, null, or undefined) is an <strong>object</strong>.</p>
<p>Here's how we define an object:</p>
<pre><code class="language-js">const car = {
}
</code></pre>
<p>This is the <strong>object literal</strong> syntax, which is one of the nicest things in JavaScript.</p>
<p>You can also use the <code>new Object</code> syntax:</p>
<pre><code class="language-js">const car = new Object()
</code></pre>
<p>Another syntax is to use <code>Object.create()</code>:</p>
<pre><code class="language-js">const car = Object.create()
</code></pre>
<p>You can also initialize an object using the <code>new</code> keyword before a function with a capital letter. This function serves as a constructor for that object. In there, we can initialize the arguments we receive as parameters, to setup the initial state of the object:</p>
<pre><code class="language-js">function Car(brand, model) {
this.brand = brand
this.model = model
}
</code></pre>
<p>We initialize a new object using:</p>
<pre><code class="language-js">const myCar = new Car('Ford', 'Fiesta')
myCar.brand //'Ford'
myCar.model //'Fiesta'
</code></pre>
<p>Objects are <strong>always passed by reference</strong>.</p>
<p>If you assign a variable the same value of another, if it's a primitive type like a number or a string, they are passed by value:</p>
<p>Take this example:</p>
<pre><code class="language-js">let age = 36
let myAge = age
myAge = 37
age //36
</code></pre>
<pre><code class="language-js">const car = {
color: 'blue'
}
const anotherCar = car
anotherCar.color = 'yellow'
car.color //'yellow'
</code></pre>
<p>Even arrays or functions are, under the hood, objects, so it's very important to understand how they work.</p>
<p>Objects have <strong>properties</strong>, which are composed by a label associated with a value.</p>
<p>The value of a property can be of any type, which means that it can be an array, a function, and it can even be an object, as objects can nest other objects.</p>
<p>This is the object literal syntax we saw in the previous chapter:</p>
<pre><code class="language-js">const car = {
}
</code></pre>
<p>We can define a <code>color</code> property in this way:</p>
<pre><code class="language-js">const car = {
color: 'blue'
}
</code></pre>
<p>Here we have a <code>car</code> object with a property named <code>color</code>, with value <code>blue</code>.</p>
<p>Labels can be any string, but beware of special characters - if I wanted to include a character not valid as a variable name in the property name, I would have had to use quotes around it:</p>
<pre><code class="language-js">const car = {
color: 'blue',
'the color': 'blue'
}
</code></pre>
<p>Invalid variable name characters include spaces, hyphens, and other special characters.</p>
<p>As you can see, when we have multiple properties, we separate each property with a comma.</p>
<p>We can retrieve the value of a property using 2 different syntaxes.</p>
<p>The first is <strong>dot notation</strong>:</p>
<pre><code class="language-js">car.color //'blue'
</code></pre>
<p>The second (which is the only one we can use for properties with invalid names), is to use square brackets:</p>
<pre><code class="language-js">car['the color'] //'blue'
</code></pre>
<p>If you access a nonexistant property, you'll get the <code>undefined</code> value:</p>
<pre><code class="language-js">car.brand //undefined
</code></pre>
<p>As mentioned before, objects can have nested objects as properties:</p>
<pre><code class="language-js">const car = {
brand: {
name: 'Ford'
},
color: 'blue'
}
</code></pre>
<p>In this example, you can access the brand name using</p>
<pre><code class="language-js">car.brand.name
</code></pre>
<p>or</p>
<pre><code class="language-js">car['brand']['name']
</code></pre>
<p>You can set the value of a property when you define the object.</p>
<p>But you can always update it later on:</p>
<pre><code class="language-js">const car = {
color: 'blue'
}
car.color = 'yellow'
car['color'] = 'red'
</code></pre>
<p>And you can also add new properties to an object:</p>
<pre><code class="language-js">car.model = 'Fiesta'
car.model //'Fiesta'
</code></pre>
<p>Given the object</p>
<pre><code class="language-js">const car = {
color: 'blue',
brand: 'Ford'
}
</code></pre>
<p>you can delete a property from this object using</p>
<pre><code class="language-js">delete car.brand
</code></pre>
<p>I talked about functions in a previous chapter.</p>
<p>Functions can be assigned to a function property, and in this case they are called <strong>methods</strong>.</p>
<p>In this example, the <code>start</code> property has a function assigned, and we can invoke it by using the dot syntax we used for properties, with the parentheses at the end:</p>
<pre><code class="language-js">const car = {
brand: 'Ford',
model: 'Fiesta',
start: function() {
console.log('Started')
}
}
car.start()
</code></pre>
<p>Inside a method defined using a <code>function() {}</code> syntax we have access to the object instance by referencing <code>this</code>.</p>
<p>In the following example, we have access to the <code>brand</code> and <code>model</code> properties values using <code>this.brand</code> and <code>this.model</code>:</p>
<pre><code class="language-js">const car = {
brand: 'Ford',
model: 'Fiesta',
start: function() {
console.log(`Started
${this.brand} ${this.model}`)
}
}
car.start()
</code></pre>
<p>It's important to note this distinction between regular functions and arrow functions - we don't have access to <code>this</code> if we use an arrow function:</p>
<pre><code class="language-js">const car = {
brand: 'Ford',
model: 'Fiesta',
start: () =&gt; {
console.log(`Started
${this.brand} ${this.model}`) //not going to work
}
}
car.start()
</code></pre>
<p>This is because <strong>arrow functions are not bound to the object</strong>.</p>
<p>This is the reason why regular functions are often used as object methods.</p>
<p>Methods can accept parameters, like regular functions:</p>
<pre><code class="language-js">const car = {
brand: 'Ford',
model: 'Fiesta',
goTo: function(destination) {
console.log(`Going to ${destination}`)
}
}
car.goTo('Rome')
</code></pre>
<p>We talked about objects, which are one of the most interesting parts of JavaScript.</p>
<p>In this chapter we'll go up one level by introducing classes.</p>
<p>What are classes? They are a way to define a common pattern for multiple objects.</p>
<p>Let's take a person object:</p>
<pre><code class="language-js">const person = {
name: 'Flavio'
}
</code></pre>
<p>We can create a class named <code>Person</code> (note the capital <code>P</code>, a convention when using classes), that has a <code>name</code> property:</p>
<pre><code class="language-js">class Person {
name
}
</code></pre>
<p>Now from this class, we initialize a <code>flavio</code> object like this:</p>
<pre><code class="language-js">const flavio = new Person()
</code></pre>
<p><code>flavio</code> is called an <em>instance</em> of the Person class.</p>
<p>We can set the value of the <code>name</code> property:</p>
<pre><code class="language-js">flavio.name = 'Flavio'
</code></pre>
<p>and we can access it using</p>
<pre><code class="language-js">flavio.name
</code></pre>
<p>like we do for object properties.</p>
<p>Classes can hold properties, like <code>name</code>, and methods.</p>
<p>Methods are defined in this way:</p>
<pre><code class="language-js">class Person {
hello() {
return 'Hello, I am Flavio'
}
}
</code></pre>
<p>and we can invoke methods on an instance of the class:</p>
<pre><code class="language-js">class Person {
hello() {
return 'Hello, I am Flavio'
}
}
const flavio = new Person()
flavio.hello()
</code></pre>
<p>There is a special method called <code>constructor()</code> that we can use to initialize the class properties when we create a new object instance.</p>
<p>It works like this:</p>
<pre><code class="language-js">class Person {
constructor(name) {
this.name = name
}
hello() {
return 'Hello, I am ' + this.name + '.'
}
}
</code></pre>
<p>Note how we use <code>this</code> to access the object instance.</p>
<p>Now we can instantiate a new object from the class, pass in a string, and when we call <code>hello</code> we'll get a personalized message:</p>
<pre><code class="language-js">const flavio = new Person('flavio')
flavio.hello() //'Hello, I am flavio.'
</code></pre>
<p>When the object is initialized, the <code>constructor</code> method is called with any parameters passed.</p>
<p>Normally methods are defined on the object instance, not on the class.</p>
<p>You can define a method as <code>static</code> to allow it to be executed on the class instead:</p>
<pre><code class="language-js">class Person {
static genericHello() {
return 'Hello'
}
}
Person.genericHello() //Hello
</code></pre>
<p>This is very useful, at times.</p>
<p>A class can <strong>extend</strong> another class, and objects initialized using that class inherit all the methods of both classes.</p>
<p>Suppose we have a class <code>Person</code>:</p>
<pre><code class="language-js">class Person {
hello() {
return 'Hello, I am a Person'
}
}
</code></pre>
<p>We can define a new class, <code>Programmer</code>, that extends <code>Person</code>:</p>
<pre><code class="language-js">class Programmer extends Person {
}
</code></pre>
<p>Now if we instantiate a new object with the class <code>Programmer</code>, it has access to the <code>hello()</code> method:</p>
<pre><code class="language-js">const flavio = new Programmer()
flavio.hello() //'Hello, I am a Person'
</code></pre>
<p>Inside a child class, you can reference the parent class by calling <code>super()</code>:</p>
<pre><code class="language-js">class Programmer extends Person {
hello() {
return super.hello() +
'. I am also a programmer.'
}
}
const flavio = new Programmer()
flavio.hello()
</code></pre>
<p>The above program prints <em>Hello, I am a Person. I am also a programmer.</em>.</p>
<p>Most of the time, JavaScript code is run synchronously.</p>
<p>This means that a line of code is executed, then the next one is executed, and so on.</p>
<p>Everything is as you expect, and how it works in most programming languages.</p>
<p>However, there are times when you cannot just wait for a line of code to execute.</p>
<p>You can't just wait 2 seconds for a big file to load, and halt the program completely.</p>
<p>You can't just wait for a network resource to be downloaded before doing something else.</p>
<p>JavaScript solves this problem by using <strong>callbacks</strong>.</p>
<p>One of the simplest examples of how to use callbacks is with timers. Timers are not part of JavaScript, but they are provided by the browser and Node.js. Let me talk about one of the timers we have: <code>setTimeout()</code>.</p>
<p>The <code>setTimeout()</code> function accepts 2 arguments: a function, and a number. The number is the milliseconds that must pass before the function is ran.</p>
<p>Example:</p>
<pre><code class="language-js">setTimeout(() =&gt; {
// runs after 2 seconds
console.log('inside the function')
}, 2000)
</code></pre>
<p>The function containing the <code>console.log('inside the function')</code> line will be executed after 2 seconds.</p>
<p>If you add a <code>console.log('before')</code> prior to the function, and <code>console.log('after')</code> after it:</p>
<pre><code class="language-js">console.log('before')
setTimeout(() =&gt; {
// runs after 2 seconds
console.log('inside the function')
}, 2000)
console.log('after')
</code></pre>
<p>You will see this happening in your console:</p>
<pre><code class="language-js">before
after
inside the function
</code></pre>
<p>The callback function is executed asynchronously.</p>
<p>This is a very common pattern when working with the file system, the network, events, or the DOM in the browser.</p>
<p>All of the things I mentioned are not "core" JavaScript, so they are not explained in this handbook, but you'll find lots of examples in my other handbooks available at <a href="https://flaviocopes.com">https://flaviocopes.com</a>.</p>
<p>Here's how we can implement callbacks in our code.</p>
<p>We define a function that accepts a <code>callback</code> parameter, which is a function.</p>
<p>When the code is ready to invoke the callback, we invoke it by passing the result:</p>
<pre><code class="language-js">const doSomething = callback =&gt; {
//do things
//do things
const result = /* .. */
callback(result)
}
</code></pre>
<p>Code using this function would use it like this:</p>
<pre><code class="language-js">doSomething(result =&gt; {
console.log(result)
})
</code></pre>
<p>Promises are an alternative way to deal with asynchronous code.</p>
<p>As we saw in the previous chapter, with callbacks we'd be passing a function to another function call that would be called when the function has finished processing.</p>
<p>Like this:</p>
<pre><code class="language-js">doSomething(result =&gt; {
console.log(result)
})
</code></pre>
<p>When the <code>doSomething()</code> code ends, it calls the function received as a parameter:</p>
<pre><code class="language-js">const doSomething = callback =&gt; {
//do things
//do things
const result = /* .. */
callback(result)
}
</code></pre>
<p>The main problem with this approach is that if we need to use the result of this function in the rest of our code, all our code must be nested inside the callback, and if we have to do 2-3 callbacks we enter in what is usually defined "callback hell" with many levels of functions indented into other functions:</p>
<pre><code class="language-js">doSomething(result =&gt; {
doSomethingElse(anotherResult =&gt; {
doSomethingElseAgain(yetAnotherResult =&gt; {
console.log(result)
})
})
})
</code></pre>
<p>Promises are one way to deal with this.</p>
<p>Instead of doing:</p>
<pre><code class="language-js">doSomething(result =&gt; {
console.log(result)
})
</code></pre>
<p>We call a promise-based function in this way:</p>
<pre><code class="language-js">doSomething()
.then(result =&gt; {
console.log(result)
})
</code></pre>
<p>We first call the function, then we have a <code>then()</code> method that is called when the function ends.</p>
<p>The indentation does not matter, but you'll often use this style for clarity.</p>
<p>It's common to detect errors using a <code>catch()</code> method:</p>
<pre><code class="language-js">doSomething()
.then(result =&gt; {
console.log(result)
})
.catch(error =&gt; {
console.log(error)
})
</code></pre>
<p>Now, to be able to use this syntax, the <code>doSomething()</code> function implementation must be a little bit special. It must use the Promises API.</p>
<p>Instead of declaring it as a normal function:</p>
<pre><code class="language-js">const doSomething = () =&gt; {
}
</code></pre>
<p>We declare it as a promise object:</p>
<pre><code class="language-js">const doSomething = new Promise()
</code></pre>
<p>and we pass a function in the Promise constructor:</p>
<pre><code class="language-js">const doSomething = new Promise(() =&gt; {
})
</code></pre>
<p>This function receives 2 parameters. The first is a function we call to resolve the promise, the second a function we call to reject the promise.</p>
<pre><code class="language-js">const doSomething = new Promise(
(resolve, reject) =&gt; {
})
</code></pre>
<p>Resolving a promise means to complete it successfully (which results in calling the <code>then()</code> method in whatever uses it).</p>
<p>Rejecting a promise means ending it with an error (which results in calling the <code>catch()</code> method in whatever uses it).</p>
<p>Here's how:</p>
<pre><code class="language-js">const doSomething = new Promise(
(resolve, reject) =&gt; {
//some code
const success = /* ... */
if (success) {
resolve('ok')
} else {
reject('this error occurred')
}
}
)
</code></pre>
<p>We can pass a parameter to the resolve and reject functions, of any type we want.</p>
<p>Async functions are a higher level abstraction of promises.</p>
<p>An async function returns a promise, like in this example:</p>
<pre><code class="language-js">const getData = () =&gt; {
return new Promise((resolve, reject) =&gt; {
setTimeout(() =&gt;
resolve('some data'), 2000)
})
}
</code></pre>
<p>Any code that wants to use this function will use the <code>await</code> keyword right before the function:</p>
<pre><code class="language-js">const data = await getData()
</code></pre>
<p>and doing so, any data returned by the promise is going to be assigned to the <code>data</code> variable.</p>
<p>In our case, the data is the "some data" string.</p>
<p>With one particular caveat: whenever we use the <code>await</code> keyword, we must do so inside a function defined as <code>async</code>.</p>
<p>Like this:</p>
<pre><code class="language-js">const doSomething = async () =&gt; {
const data = await getData()
console.log(data)
}
</code></pre>
<p>The async/await duo allows us to have a cleaner code and a simple mental model to work with asynchronous code.</p>
<p>As you can see in the example above, our code looks very simple. Compare it to code using promises, or callback functions.</p>
<p>And this is a very simple example, the major benefits will arise when the code is much more complex.</p>
<p>As an example, here's how you would get a JSON resource using the Fetch API, and parse it, using promises:</p>
<pre><code class="language-js">const getFirstUserData = () =&gt; {
// get users list
return fetch('/users.json')
// parse JSON
.then(response =&gt; response.json())
// pick first user
.then(users =&gt; users[0])
// get user data
.then(user =&gt;
fetch(`/users/${user.name}`))
// parse JSON
.then(userResponse =&gt; response.json())
}
getFirstUserData()
</code></pre>
<p>And here is the same functionality provided using await/async:</p>
<pre><code class="language-js">const getFirstUserData = async () =&gt; {
// get users list
const response = await fetch('/users.json')
// parse JSON
const users = await response.json()
// pick first user
const user = users[0]
// get user data
const userResponse =
await fetch(`/users/${user.name}`)
// parse JSON
const userData = await user.json()
return userData
}
getFirstUserData()
</code></pre>
<p>When I introduced variables, I talked about using <code>const</code>, <code>let</code>, and <code>var</code>.</p>
<p>Scope is the set of variables that's visible to a part of the program.</p>
<p>In JavaScript we have a global scope, block scope and function scope.</p>
<p>If a variable is defined outside of a function or block, it's attached to the global object and it has a global scope, which mean it's available in every part of a program.</p>
<p>There is a very important difference between <code>var</code>, <code>let</code> and <code>const</code> declarations.</p>
<p>A variable defined as <code>var</code> inside a function is only visible inside that function, similar to a function's arguments.</p>
<p>A variable defined as <code>const</code> or <code>let</code> on the other hand is only visible inside the <strong>block</strong> where it is defined.</p>
<p>A block is a set of instructions grouped into a pair of curly braces, like the ones we can find inside an <code>if</code> statement, a <code>for</code> loop, or a function.</p>
<p>It's important to understand that a block does not define a new scope for <code>var</code>, but it does for <code>let</code> and <code>const</code>.</p>
<p>This has very practical implications.</p>
<p>Suppose you define a <code>var</code> variable inside an <code>if</code> conditional in a function</p>
<pre><code class="language-js">function getData() {
if (true) {
var data = 'some data'
console.log(data)
}
}
</code></pre>
<p>If you call this function, you'll get <code>some data</code> printed to the console.</p>
<p>If you try to move console.log(data) after the <code>if</code>, it still works:</p>
<pre><code class="language-js">function getData() {
if (true) {
var data = 'some data'
}
console.log(data)
}
</code></pre>
<p>But if you switch <code>var data</code> to <code>let data</code>:</p>
<pre><code class="language-js">function getData() {
if (true) {
let data = 'some data'
}
console.log(data)
}
</code></pre>
<p>You'll get an error: <code>ReferenceError: data is not defined</code>.</p>
<p>This is because <code>var</code> is function scoped, and there's a special thing happening here called hoisting. In short, the <code>var</code> declaration is moved to the top of the closest function by JavaScript before it runs the code. This is what the function looks like to JS internally, more or less:</p>
<pre><code class="language-js">function getData() {
var data
if (true) {
data = 'some data'
}
console.log(data)
}
</code></pre>
<p>This is why you can also <code>console.log(data)</code> at the top of a function, even before it's declared, and you'll get <code>undefined</code> as a value for that variable:</p>
<pre><code class="language-js">function getData() {
console.log(data)
if (true) {
var data = 'some data'
}
}
</code></pre>
<p>but if you switch to <code>let</code>, you'll get an error <code>ReferenceError: data is not defined</code>, because hoisting does not happen to <code>let</code> declarations.</p>
<p><code>const</code> follows the same rules as <code>let</code>: it's block scoped.</p>
<p>It can be tricky at first, but once you realize this difference, then you'll see why <code>var</code> is considered a bad practice nowadays compared to <code>let</code> - they have less moving parts, and their scope is limited to the block, which also makes them very good as loop variables because they cease to exist after a loop has ended:</p>
<pre><code class="language-js">function doLoop() {
for (var i = 0; i &lt; 10; i++) {
console.log(i)
}
console.log(i)
}
doLoop()
</code></pre>
<p>When you exit the loop, <code>i</code> will be a valid variable with value 10.</p>
<p>If you switch to <code>let</code>, when you try to <code>console.log(i)</code> will result in an error <code>ReferenceError: i is not defined</code>.</p>
<p>Thanks a lot for reading this book.</p>
<p>I hope it will inspire you to learn more about JavaScript.</p>
<p>For more on JavaScript, check out my blog <a href="https://flaviocopes.com">flaviocopes.com</a>.</p>
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
