---
card: "/images/default.jpg"
tags: [JavaScript]
description: JavaScript is an easy-to-learn programming language compared
author: "Milad E. Fahmy"
title: "JavaScript Execution Context and Hoisting Explained with Code Examples"
created: "2021-08-15T19:26:29+02:00"
modified: "2021-08-15T19:26:29+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-beginners-guide ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Execution Context and Hoisting Explained with Code Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/04/freeCodeCamp-Cover-4.png 300w,
/news/content/images/size/w600/2021/04/freeCodeCamp-Cover-4.png 600w,
/news/content/images/size/w1000/2021/04/freeCodeCamp-Cover-4.png 1000w,
/news/content/images/size/w2000/2021/04/freeCodeCamp-Cover-4.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/04/freeCodeCamp-Cover-4.png" alt="JavaScript Execution Context and Hoisting Explained with Code Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>JavaScript is an easy-to-learn programming language compared to many of its counterparts. However, a few basic concepts need a bit more attention if you want to understand, debug, and write better code. </p>
<p>In this article, we will learn about two such concepts,</p>
<ul>
<li>Execution Context</li>
<li>Hoisting</li>
</ul>
<p>As a beginner to JavaScript, understanding these concepts will help you understand the <code>this</code> keyword, <code>scope</code>, and <code>closure</code> much more comfortably. So enjoy, and keep reading.</p>
<h1 id="execution-context-in-javascript">Execution Context in JavaScript</h1>
<p>In general, a JavaScript source file will have multiple lines of code. As developers, we organize the code into variables, functions, data structures like objects and arrays, and more. </p>
<p>A <code>Lexical Environment</code> determines how and where we write our code physically. Take a look at the code below:</p><pre><code class="language-js">function doSomething() {
var age= 7;
// Some more code
}
</code></pre>
<p>In the above code, the variable <code>age</code> is lexically inside the function <code>doSomething</code>. </p>
<p>Please note that our code does not run as-is. It has to be translated by the compiler into computer understandable byte-code. So the compiler needs to map what is lexically placed where in the meaningful and valid way.</p>
<p>Usually, there will be more than one <code>Lexical Environment</code> in your code. However, not all the environments get executed at once. </p>
<p>The environment that helps the code get executed is called the <code>Execution Context</code>. It is the code that's currently running, and everything surrounding that helps to run it. </p>
<p>There can be lots of <code>Lexical Environment</code>s available, but the one currently running code is managed by the <code>Execution Context</code>.</p>
<p>Check out the image below to understand the difference between a Lexical Environment and Execution Context:</p>
<figcaption>Lexical Environment vs Execution Context</figcaption>
</figure>
<p>So what exactly happens in the Execution Context? The code gets parsed line-by-line, generates executable byte-code, allocates memory, and executes. </p>
<p>Let's take the same function we have seen above. What do you think may happen when the following line gets executed?</p><pre><code class="language-js">var age = 7;
</code></pre>
<p>There are many things happening behind the scenes. That piece of source code goes through the following phases before it is finally gets executed:</p>
<ul>
<li><strong>Tokenizing:</strong> In this phase, the source code string breaks into multiple meaningful chunks called <code>Tokens</code>. For example, the code <code>var age = 7;</code> tokenizes into <strong>var</strong>, <strong>age</strong>, <strong>=</strong>, <strong>7</strong> and, <strong>;</strong>.</li>
<li><strong>Parsing: </strong>The next phase is parsing, where an array of tokens turns into a tree of nested elements understood by the language's grammar. This tree is called an <code>AST</code> (Abstract Syntax Tree).</li>
<li><strong>Code Generation:</strong> In this phase, the AST created in the parsing phase turns into executable byte-code. This executable byte-code is then optimized further by the JIT (Just-In-Time) compiler.</li>
</ul>
<p>The animated picture below shows the transition of the source code to executable byte-code.</p>
<figcaption>Source Code to Executable Byte-Code</figcaption>
</figure>
<p>All these things happen in an <code>Execution Context</code>. So the execution context is the environment where a specific portion of the code executes.</p>
<p>There are two types of execution contexts:</p>
<ul>
<li>Global Execution Context (GEC)</li>
<li>Function Execution Context (FEC)</li>
</ul>
<p>And each of the execution contexts has two phases:</p>
<ul>
<li>Creation Phase</li>
<li>Execution Phase</li>
</ul>
<p>Let's take a detailed look at each of them and understand them a bit better.</p>
<h2 id="global-execution-context-gec-in-javascript">Global Execution Context (GEC) in JavaScript</h2>
<p>Whenever we execute JavaScript code, it creates a Global Execution Context (also knows as Base Execution Context). The global execution context has two phases.</p>
<h3 id="creation-phase">Creation Phase</h3>
<p>In the creation phase, two unique things get created:</p>
<ul>
<li>A global object called <code>window</code> (for the client-side JavaScript).</li>
<li>A global variable called <code>this</code>.</li>
</ul>
<p>If there are any variables declared in the code, the memory gets allocated for the variable. The variable gets initialized with a unique value called <code>undefined</code>. &nbsp;If there is a <code>function</code> in the code, it gets placed directly into the memory. We will learn more about this part in the <code>Hoisting</code> section later.</p>
<h3 id="execution-phase">Execution Phase</h3>
<p>The code execution starts in this phase. Here, the value assignment of the global variables takes place. Please note that no function gets invoked here as it happens in the Function Execution Context. We will see that in a while.</p>
<p>Let's understand both the phases with a couple of examples.</p>
<h4 id="example-1-load-an-empty-script">Example 1: Load an Empty Script</h4>
<p>Create an empty JavaScript file with the name <code>index.js</code>. Now create an HTML file with the following content:</p><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8"&gt;
&lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;title&gt;Document&lt;/title&gt;
&lt;script src='./index.js'&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
I'm loading an empty script
&lt;/body&gt;
&lt;/html&gt;</code></pre>
<p>Note that we are importing the empty script file into the HTML file using the <code>&lt;script&gt;</code> tag. </p>
<p>Load the HTML file in the browser and open Chrome DevTools (usually using the <code>F12</code> key) or equivalent for other browsers. Browse to the <code>console</code> tab, type <code>window</code>, and press enter. You should see the value as the browser's <code>Window</code> object.</p>
<figcaption>The Window object</figcaption>
</figure>
<p>Now, type the word <code>this</code> and press enter. You should see the same <code>Window</code> object value printed in the browser console.</p>
<figcaption>Value of 'this'</figcaption>
</figure>
<p>Great, now try to check if window is equal to <code>this</code>. Yes, it is.</p>
<figcaption>window is equal to 'this'</figcaption>
</figure>
<p>Alright, so what have we learned?</p>
<ul>
<li>The Global Execution Context gets created when we load the JavaScript file, even when it is empty.</li>
<li>It creates two special things for us in its creation phase, that is the <code>window</code> object and <code>this</code>.</li>
<li>In Global Execution context, the <code>window</code> object and <code>this</code> are equal.</li>
<li>There is nothing to execute as the script file is blank. So nothing happens in the execution phase.</li>
</ul>
<h4 id="example-2-with-variables-and-functions">Example 2: With Variables and Functions</h4>
<p>Let's now see an example with some code in the JavaScript file. We'll add a variable (blog) with a value assigned to it. We'll also define a function with the name <code>logBlog</code>.</p><pre><code class="language-js">var blog = 'freeCodeCamp';
function logBlog() {
console.log(this.blog);
}
</code></pre>
<p>In the creation phase:</p>
<ul>
<li>The global object <code>window</code> and the variable <code>this</code> get created.</li>
<li>Memory gets allocated for the variable <code>blog</code> and the function <code>logBlog</code>.</li>
<li>The variable <code>blog</code> gets initialized by a special value <code>undefined</code>. The function <code>logBlog</code> gets placed in the memory directly.</li>
</ul>
<p>In the execution phase:</p>
<ul>
<li>The value <code>freeCodeCamp</code> is assigned to the variable <code>blog</code>.</li>
<li>As we have defined the function but not called it yet, the function execution does not take place. We will call the function and see what happens when we learn about the Function Execution Context.</li>
</ul>
<h2 id="function-execution-context-fec-in-javascript">Function Execution Context (FEC) in JavaScript</h2>
<p>When we invoke a function, a Function Execution Context gets created. Let's extend the same example we used above, but this time we will call the function.</p><pre><code class="language-js">var blog = 'freeCodeCamp';
function logBlog() {
console.log(this.blog);
}
// Let us call the function
logBlog();</code></pre>
<p>The function execution context goes through the same phases, creation and execution. </p>
<p>The function execution phase has access to a special value called <code>arguments</code>. It is the arguments passed to the function. In our example, there are no arguments passed. </p>
<p>Please note that the <code>window</code> object and the <code>this</code> variable created in the Global Execution Context are still accessible in this context.</p>
<p>When a function invokes another function, a new function execution context gets created for the new function call. Each of the function execution contexts determines the <code>scope</code> of the variables used in the respective functions.</p>
<h1 id="hoisting-in-javascript">Hoisting in JavaScript</h1>
<p>I hope you enjoyed learning about <code>Execution Context</code>. Let's move over to another fundamental concept called <code>Hoisting</code>. When I first heard about hoisting, it took some time to realize something seriously wrong with the name <code>Hoisting</code>.</p>
<p>In the English language, hoisting means raising something using ropes and pulleys. The name may mislead you to think that the JavaScript engine pulls the variables and functions up at a specific code execution phase. Well, this isn't what happens. </p>
<p>So let's understand <code>Hoisting</code> using the concept of the <code>Execution Context</code>.</p>
<h2 id="variable-hoisting-in-javascript">Variable Hoisting in JavaScript</h2>
<p>Please have a look at the example below and guess the output:</p><pre><code class="language-js">console.log(name);
var name;
</code></pre>
<p>I'm sure you guessed it already. It's the following:</p><pre><code class="language-shell">undefined
</code></pre>
<p>However, the question is why? Suppose we use similar code in some other programming language. In that case, we may get an error saying the variable <code>name</code> is not declared, and we are trying to access it well before that. The answer lies in the execution context.</p>
<p>In the <code>creation</code> phase,</p>
<ul>
<li>The memory gets allocated for the variable <code>name</code>, and</li>
<li>A special value <code>undefined</code> is assigned to the variable.</li>
</ul>
<p>In the <code>execution</code> phase,</p>
<ul>
<li>The <code>console.log(name)</code> statement will execute.</li>
</ul>
<p>This mechanism of allocating memory for variables and initializing with the value <code>undefined</code> at the execution context's creation phase is called <code>Variable Hoisting</code>.</p>
<blockquote>The special value <code>undefined</code> means that a variable is declared but no value is assigned.</blockquote>
<p>If we assign the variable a value like this:</p><pre><code class="language-js">name = 'freeCodeCamp';</code></pre>
<p>The execution phase will assign this value to the variable.</p>
<h2 id="function-hoisting-in-javascript">Function Hoisting in JavaScript</h2>
<p>Now let's talk about <code>Function Hoisting</code>. It follows the same pattern as <code>Variable Hoisting</code>. </p>
<p>The creation phase of the execution context puts the function declaration into the memory, and the execution phase executes it. Please have a look at the example below:</p><pre><code class="language-js">// Invoke the function functionA
functionA();
// Declare the function functionA
function functionA() {
console.log('Function A');
// Invoke the function FunctionB
functionB();
}
// Declare the function FunctionB
function functionB() {
console.log('Function B');
}</code></pre>
<p>The output is the following:</p><pre><code class="language-shell">Function A
Function B</code></pre>
<ul>
<li>The execution context creates the memory for the function and puts the entire function declaration of <code>functionA</code> in it.</li>
<li>The functions create their own execution context. So a similar thing happens for <code>functionB</code> as well.</li>
<li>Next, the functions get executed in their execution context respectively.</li>
</ul>
<p>Putting the entire function declaration ahead into the memory at the creation phase is called <code>Function Hoisting</code>.</p>
<h2 id="a-few-ground-rules">A Few Ground Rules</h2>
<p>Since we understand the concept of <code>Hoisting</code> now, let's understand a few ground rules:</p>
<ul>
<li>Always define variables and functions before using them in your code. It reduces the chances of surprise errors and debugging nightmares.</li>
<li>Hoisting is only for function declaration, not initialization. Here is an example of function initialization where the code execution will break.</li>
</ul><pre><code class="language-js">logMe();
var logMe = function() {
console.log('Logging...');
}</code></pre>
<p>The code execution will break because with function initialization, the variable <code>logMe</code> will be hoisted as a variable, not as function. So with variable hoisting, memory allocation will happen with the initialization with <code>undefined</code>. That's the reason we will get the error:</p>
<figcaption>Error in hoisting a function initialization</figcaption>
</figure>
<p>Suppose we try to access a variable ahead of declaration and use the <code>let</code> and <code>const</code> keywords to declare it later. In that case, they will be hoisted but not assigned with the default <code>undefined</code>. Accessing such variables will result in the <code>ReferenceError</code>. Here is an example:</p><pre><code class="language-js">console.log(name);
let name;</code></pre>
<p>It will throw the error:</p>
<figcaption>Error with hoisting variable declared with let and const keywords</figcaption>
</figure>
<p>The same code will run without a problem if we use <code>var</code> instead of <code>let</code> and <code>const</code>. This error is a safeguard mechanism from the JavaScript language as we have discussed already, as accidental hoisting may cause unnecessary troubles.</p>
<h1 id="before-we-end-">Before We End...</h1>
<p>I hope you've found this article insightful, and that it helps you understand the concepts of <code>Execution Context</code> and <code>hoisting</code> better. I shall write an article on <code>Scope</code> and <code>Closure</code> soon based on these concepts. Stay tuned.</p>
<p>Let's connect. You will find me active on <a href="https://twitter.com/tapasadhikary">Twitter (@tapasadhikary)</a>. Please feel free to give a follow.</p>
<p>You may also like these articles:</p>
<ul>
<li><a href="/news/javascript-this-keyword-binding-rules/">The JavaScript <code>this</code> Keyword + 5 Key Binding Rules Explained for JS Beginners</a></li>
<li><a href="/news/learn-something-new-every-day-as-a-software-developer/">How to Learn Something New Every Day as a Software Developer</a></li>
<li><a href="https://blog.greenroots.info/my-favorite-javascript-tips-and-tricks-ckd60i4cq011em8s16uobcelc">My Favorite JavaScript Tips and Tricks</a></li>
<li><a href="https://blog.greenroots.info/explain-me-like-i-am-five-what-are-es6-symbols-ckeuz5sb8001qafs14of305dw">Explain Me Like I am Five: What are ES6 Symbols?</a></li>
<li><a href="https://blog.greenroots.info/16-side-project-github-repositories-you-may-find-useful-ckk50hic406quhls1dui2d6sd">16 side project GitHub repositories you may find useful</a></li>
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
