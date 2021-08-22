---
card: "https://cdn-media-2.freecodecamp.org/w1280/5f9c9bd4740569d1a4ca2e24.jpg"
tags: [JavaScript]
description: A lot of shiny new features came out with ES2015 (ES6). And n
author: "Milad E. Fahmy"
title: "Var, Let, and Const – What's the Difference?"
created: "2021-08-15T19:30:15+02:00"
modified: "2021-08-15T19:30:15+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-es6 tag-frontend ">
<header class="post-full-header">
<h1 class="post-full-title">Var, Let, and Const – What's the Difference?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5f9c9bd4740569d1a4ca2e24.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9bd4740569d1a4ca2e24.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9bd4740569d1a4ca2e24.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5f9c9bd4740569d1a4ca2e24.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5f9c9bd4740569d1a4ca2e24.jpg" alt="Var, Let, and Const – What's the Difference?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>A lot of shiny new features came out with ES2015 (ES6). And now, since it's 2020, it's assumed that a lot of JavaScript developers have become familiar with and have started using these features. </p>
<p>While this assumption might be partially true, it's still possible that some of these features remain a mystery to some devs.</p>
<p>One of the features that came with ES6 is the addition of <code>let</code> and <code>const</code>, which can be used for variable declaration. The question is, what makes them different from good ol' <code>var</code> which we've been using? If you are still not clear about this, then this article is for you.</p>
<p>In this article, we'll discuss <code>var</code>, <code>let</code> and <code>const</code> &nbsp;with respect to their scope, use, and hoisting. As you read, take note of the differences between them that I'll point out.</p>
<h2 id="var">Var</h2>
<p>Before the advent of ES6, <code>var</code> declarations ruled. There are issues associated with variables declared with <code>var</code>, though. That is why it was necessary for new ways to declare variables to emerge. First, let's get to understand <code>var</code> more before we discuss those issues.</p>
<h3 id="scope-of-var">Scope of var</h3>
<p><b>Scope</b> essentially means where these variables are available for use. <code>var</code> declarations are globally scoped or function/locally scoped. </p>
<p>The scope is global when a <code>var</code> variable is declared outside a function. This means that any variable that is declared with <code>var</code> outside a function block is available for use in the whole window. </p>
<p><code>var</code> is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.</p>
<p>To understand further, look at the example below.</p><pre><code class="language-javascript">    var greeter = "hey hi";
function newFunction() {
var hello = "hello";
}
</code></pre>
<p>Here, <code>greeter</code> is globally scoped because it exists outside a function while <code>hello</code> is function scoped. So we cannot access the variable <code>hello</code> outside of a function. So if we do this:</p><pre><code class="language-javascript">    var tester = "hey hi";
function newFunction() {
var hello = "hello";
}
console.log(hello); // error: hello is not defined
</code></pre>
<p>We'll get an error which is as a result of <code>hello</code> not being available outside the function.</p>
<h3 id="var-variables-can-be-re-declared-and-updated">var variables can be re-declared and updated</h3>
<p>This means that we can do this within the same scope and won't get an error.</p><pre><code class="language-javascript">    var greeter = "hey hi";
var greeter = "say Hello instead";
</code></pre>
<p>and this also</p><pre><code class="language-javascript">    var greeter = "hey hi";
greeter = "say Hello instead";
</code></pre>
<h3 id="hoisting-of-var">Hoisting of var</h3>
<p>Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that if we do this:</p><pre><code class="language-javascript">    console.log (greeter);
var greeter = "say hello"
</code></pre>
<p>it is interpreted as this:</p><pre><code class="language-javascript">    var greeter;
console.log(greeter); // greeter is undefined
greeter = "say hello"
</code></pre>
<p>So <code>var</code> variables are hoisted to the top of their scope and initialized with a value of <code>undefined</code>.</p>
<h3 id="problem-with-var">Problem with var</h3>
<p>There's a weakness that comes with &nbsp;<code>var</code>. I'll use the example below to explain:</p><pre><code class="language-javascript">    var greeter = "hey hi";
var times = 4;
if (times &gt; 3) {
var greeter = "say Hello instead";
}
console.log(greeter) // "say Hello instead"
</code></pre>
<p>So, since <code>times &gt; 3</code> returns true, <code>greeter</code> is redefined &nbsp;to <code>"say Hello instead"</code>. While this is not a problem if you knowingly want <code>greeter</code> to be redefined, it becomes a problem when you do not realize that a variable <code>greeter</code> has already been defined before.</p>
<p>If you have used <code>greeter</code> in other parts of your code, you might be surprised at the output you might get. This will likely cause a lot of bugs in your code. This is why <code>let</code> and <code>const</code> are necessary.</p>
<h2 id="let">Let</h2>
<p><code>let</code> is now preferred for variable declaration. It's no surprise as it comes as an improvement to <code>var</code> declarations. It also solves the problem with <code>var</code> that we just covered. Let's consider why this is so.</p>
<h3 id="let-is-block-scoped">let is block scoped</h3>
<p>A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block. </p>
<p>So a variable declared in a block with <code>let</code> &nbsp;is only available for use within that block. Let me explain this with an example:</p><pre><code class="language-javascript">   let greeting = "say Hi";
let times = 4;
if (times &gt; 3) {
let hello = "say Hello instead";
console.log(hello);// "say Hello instead"
}
console.log(hello) // hello is not defined
</code></pre>
<p>We see that using <code>hello</code> outside its block (the curly braces where it was defined) returns an error. This is because <code>let</code> variables are block scoped .</p>
<h3 id="let-can-be-updated-but-not-re-declared-">let can be updated but not re-declared.</h3>
<p>Just like <code>var</code>, &nbsp;a variable declared with <code>let</code> can be updated within its scope. Unlike <code>var</code>, a <code>let</code> variable cannot be re-declared within its scope. So while this will work:</p><pre><code class="language-javascript">    let greeting = "say Hi";
greeting = "say Hello instead";
</code></pre>
<p>this will return an error:</p><pre><code class="language-javascript">    let greeting = "say Hi";
let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared
</code></pre>
<p>However, if the same variable is defined in different scopes, there will be no error:</p><pre><code class="language-javascript">    let greeting = "say Hi";
if (true) {
let greeting = "say Hello instead";
console.log(greeting); // "say Hello instead"
}
console.log(greeting); // "say Hi"
</code></pre>
<p>Why is there no error? This is because both instances are treated as different variables since they have different scopes.</p>
<p>This fact makes <code>let</code> a better choice than <code>var</code>. When using <code>let</code>, you don't have to bother if you have used a name for a variable before as a variable exists only within its scope. </p>
<p>Also, since a variable cannot be declared more than once within a scope, then the problem discussed earlier that occurs with <code>var</code> does not happen.</p>
<h3 id="hoisting-of-let">Hoisting of let</h3>
<p>Just like &nbsp;<code>var</code>, <code>let</code> declarations are hoisted to the top. Unlike <code>var</code> which is initialized as <code>undefined</code>, the <code>let</code> keyword is not initialized. So if you try to use a <code>let</code> variable before declaration, you'll get a <code>Reference Error</code>.</p>
<h2 id="const">Const</h2>
<p>Variables declared with the <code>const</code> maintain constant values. <code>const</code> declarations share some similarities with <code>let</code> declarations.</p>
<h3 id="const-declarations-are-block-scoped">const declarations are block scoped</h3>
<p>Like <code>let</code> declarations, <code>const</code> declarations can only be accessed within the block they were declared.</p>
<h3 id="const-cannot-be-updated-or-re-declared">const cannot be updated or re-declared</h3>
<p>This means that the value of a variable declared with <code>const</code> remains the same within its scope. It cannot be updated or re-declared. So if we declare a variable with <code>const</code>, we can neither do this:</p><pre><code class="language-javascript">    const greeting = "say Hi";
greeting = "say Hello instead";// error: Assignment to constant variable.
</code></pre>
<p>nor this:</p><pre><code class="language-javascript">    const greeting = "say Hi";
const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared
</code></pre>
<p>Every <code>const</code> declaration, therefore, must be initialized at the time of declaration.</p>
<p>This behavior is somehow different when it comes to objects declared with <code>const</code>. While a <code>const</code> object cannot be updated, the properties of this objects can be updated. Therefore, if we declare a <code>const</code> object as this:</p><pre><code class="language-javascript">    const greeting = {
message: "say Hi",
times: 4
}
</code></pre>
<p>while we cannot do this:</p><pre><code class="language-javascript">    greeting = {
words: "Hello",
number: "five"
} // error:  Assignment to constant variable.
</code></pre>
<p>we can do this:</p><pre><code class="language-javascript">    greeting.message = "say Hello instead";
</code></pre>
<p>This will update the value of <code>greeting.message</code> without returning errors.</p>
<h3 id="hoisting-of-const">Hoisting of const</h3>
<p>Just like <code>let</code>, <code>const</code> declarations are hoisted to the top but are not initialized.</p>
<p>So just in case you missed the differences, here they are:</p>
<ul>
<li><code>var</code> declarations are globally scoped or function scoped while <code>let</code> and <code>const</code> are block scoped.</li>
<li><code>var</code> variables can be updated and re-declared within its scope; <code>let</code> variables can be updated but not re-declared; <code>const</code> variables can neither be updated nor re-declared.</li>
<li>They are all hoisted to the top of their scope. But while <code>var</code> variables are initialized with <code>undefined</code>, <code>let</code> and <code>const</code> variables are not initialized.</li>
<li>While <code>var</code> and <code>let</code> can be declared without being initialized, <code>const</code> must be initialized during declaration.</li>
</ul>
<p>Got any question or additions? Please let me know.</p>
<p>Thank you for reading :)</p>
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
