---
card: "/images/default.jpg"
tags: [JavaScript]
description: I know Temporal Dead Zone sounds like a sci-fi phrase. But it
author: "Milad E. Fahmy"
title: "What is the Temporal Dead Zone (TDZ) in JavaScript?"
created: "2021-08-15T19:28:20+02:00"
modified: "2021-08-15T19:28:20+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-variables ">
<header class="post-full-header">
<h1 class="post-full-title">What is the Temporal Dead Zone (TDZ) in JavaScript?</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/10/What-is-the-Temporal-dead-zone_.png 300w,
/news/content/images/size/w600/2020/10/What-is-the-Temporal-dead-zone_.png 600w,
/news/content/images/size/w1000/2020/10/What-is-the-Temporal-dead-zone_.png 1000w,
/news/content/images/size/w2000/2020/10/What-is-the-Temporal-dead-zone_.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/10/What-is-the-Temporal-dead-zone_.png" alt="What is the Temporal Dead Zone (TDZ) in JavaScript?">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>I know Temporal Dead Zone sounds like a sci-fi phrase. But it's helpful to understand what the terms and concepts you work with everyday (or want to learn about) mean.</p>
<p>Strap in, because this gets complicated.</p>
<p>Are you aware that in JavaScript we can add <code>{ }</code> to add a level of scope wherever we want?</p>
<p>So we could always do the below:</p>
<figcaption>Hopefully, you don't see this in production code!</figcaption>
</figure>
<p>I've included this detail to make sure that the upcoming examples makes sense (as I didn't want to assume that everyone knew it).<br><br>Before ES6 there was no other way to declare variables other than <code>var</code>. But ES6 brought us <code>let</code> and <code>const</code>.</p>
<p><code>let</code> and <code>const</code> declarations are both block-scoped, which means they are only accessible within the <code>{</code> <code>}</code> surrounding them. <code>var</code>, on the other hand, doesn't have this restriction.</p>
<p>Here's an example:</p>
let isBirthday = true;
if (isBirthday) {
let babyAge = 2;
}
console.log(babyAge); // Hmmmm. This prints 1</code></pre>
<figcaption>Two unique variables, with different values.</figcaption>
</figure>
<p>The above has occurred because the re-declaration of <code>babyAge</code> to 2 is only available inside the <code>if</code> block. Beyond that, the first <code>babyAge</code> is used. Can you see that they are two different variables?</p>
<p>In contrast, the <code>var</code> declaration has no block scope:</p>
var isBirthday = true;
if (isBirthday) {
var babyAge = 2;
}
console.log(babyAge); // Ah! This prints 2</code></pre>
<figcaption>One variable with it's value re-declared.&nbsp;</figcaption>
</figure>
<p>The final salient difference between <code>let</code> / <code>const</code> and <code>var</code> is that if you access <code>var</code> before it's declared, it is undefined. But if you do the same for <code>let</code> and <code>const</code>, they throw a <code>ReferenceError</code>.</p><pre><code class="language-javascript">console.log(varNumber); // undefined
console.log(letNumber); // Doesn't log, as it throws a ReferenceError letNumber is not defined
var varNumber = 1;
let letNumber = 1;</code></pre>
<p>They throw the error all because of the Temporal Dead Zone.</p>
<h2 id="temporal-dead-zone-explained">Temporal Dead Zone explained</h2>
<p>This is what the TDZ is: the term to describe the state where variables are un-reachable. They are in scope, but they aren't declared.</p>
<p>The <code>let</code> and <code>const</code><strong> </strong>variables exist in the TDZ from the start of their enclosing scope until they are declared.</p>
<p>You could also say that the variables exist in the TDZ from the place they get bound (when the variable gets bound to the scope it's inside) until it is declared (when a name is reserved in memory for that variable).</p>
// This is the temporal dead zone for the age variable!
// This is the temporal dead zone for the age variable!
// This is the temporal dead zone for the age variable!
// This is the temporal dead zone for the age variable!
let age = 25; // Whew, we got there! No more TDZ
console.log(age);
}</code></pre>
<figcaption>The temporal dead zone captured and catalogued.</figcaption>
</figure>
<p>You can see above that if I accessed the age variable earlier than its declaration, it would throw a <code>ReferenceError</code>. Because of the TDZ. </p>
<p>But <code>var</code> won't do that. <code>var</code> is just default initialized to <code>undefined</code> unlike the other declaration.</p>
<h2 id="what-s-the-difference-between-declaring-and-initialising">What's the difference between declaring and initialising?</h2>
<p>Here is an example of declaring a variable and initialising a variable.</p>
let age; // 1
age = 20; // 2
let hands = 2; // 3
}</code></pre>
<figcaption>Declaring vs Initialising a variable.</figcaption>
</figure>
<p>Declaring a variable means we reserve the name in memory at the current scope. That is labelled 1 in the comments.</p>
<p>Initialising a variable is setting the value of the variable. That is labelled 2 in the comments.</p>
<p>Or you could always do both on one line. That is labelled 3 in the comments.</p>
<p>Just to repeat myself again: the <code>let</code> and<strong> </strong><code>const</code><strong> </strong>variables exist in the TDZ from the start of their enclosing scope until they are declared.</p>
<p>So from the above code snippet, where is the TDZ for <code>age</code>? Also, does <code>hands</code> have a TDZ? If so, where is the start and end of the TDZ for hands?</p>
<details>
<summary>Check your answer</summary>
The hands and age variables both enter the TDZ.
<br> <br>
The TDZ for hands ends when it gets declared, the same line it gets set to 2.
<br> <br>
The TZ for age ends when it gets declared, and the name reserved in memory (in step 2, where I commented).
</details>
<h2 id="why-is-the-tdz-created-when-it-is">Why is the TDZ created when it is?</h2>
<p>Let's go back to our first example:</p><pre><code>{
// This is the temporal dead zone for the age variable!
// This is the temporal dead zone for the age variable!
// This is the temporal dead zone for the age variable!
// This is the temporal dead zone for the age variable!
let age = 25; // Whew, we got there! No more TDZ
console.log(age);
}</code></pre>
<p>If we add a <code>console.log</code> inside the TDZ you will see this error:</p>
<p>Why does the TDZ exist between the top of the scope and the variable declaration? What's the specific reason for that?</p>
<p><strong>It's because of hoisting.</strong></p>
<p>The JS engine that is parsing and executing your code has 2 steps to do:</p>
<ol>
<li>Parsing of the code into an Abstract Syntax Tree/executable byte code, and</li>
<li>Run time execution.</li>
</ol>
<p>Step 1 is where hoisting happens, and this is done by the JS engine. It essentially will move all your variable declarations to the top of their scope. So an example would be:</p><pre><code class="language-js">console.log(hoistedVariable); // undefined
var hoistedVariable = 1;</code></pre>
<p>To be clear, these variables aren't physically moving in the code. But, the result would be functionally identical to the below:</p><pre><code class="language-js">var hoistedVariable;
console.log(hoistedVariable); // undefined
counter = 1;</code></pre>
<p>The only difference between <code>const</code> and <code>let</code> is that when they are hoisted, their values don't get defaulted to <code>undefined</code>.</p>
<p>Just to prove <code>let</code> and <code>const</code> also hoist, here's an example:</p><pre><code class="language-js">{
// Both the below variables will be hoisted to the top of their scope!
console.log(typeof nonsenseThatDoesntExist); // Prints undefined
console.log(typeof name); // Throws an error, cannot access 'name' before initialization
let name = "Kealan";
}</code></pre>
<p>The above snippet is proof that <code>let</code> is clearly hoisted above where it was declared, as the engine alerts us to the fact. It knows <code>name</code> exists (it's declared), but we can't access it before it is initialized.</p>
<p>If it helps you to remember, think of it like this.</p>
<p>When variables get hoisted, <code>var</code> gets <code>undefined</code> initialized to its value by default in the process of hoisting. <code>let</code> and <code>const</code> also get hoisted, but don't get set to <code>undefined</code> when they get hoisted. </p>
<p>And that's the sole reason we have the TDZ. Which is why it happens with <code>let</code> and <code>const</code> but not <code>var</code>.</p>
<h2 id="more-examples-of-the-tdz">More examples of the TDZ</h2>
<p>The TDZ can also be created for default function parameters. So something like this:</p><pre><code class="language-js">function createTDZ(a=b, b) {
}
createTDZ(undefined, 1); </code></pre>
<p>throws a <code>ReferenceError</code>, because the evaluation of variable <code>a</code> tries to access variable <code>b</code> before it has been parsed by the JS engine. The function arguments are all inside the TDZ until they are parsed.</p>
<p>Even something as simple as <code>let tdzTest = tdzTest;</code> would throw an error due to the TDZ. But <code>var</code> here would just create <code>tdzTest</code> and set it to <code>undefined</code>.</p>
<p>There's one more final and <a href="https://github.com/google/traceur-compiler/issues/1382#issuecomment-57182072">fairly advanced example</a> from Erik Arvindson (who's involved in evolving and maintaining the ECMAScript spec):</p>
const b = 2;
function f() { return b; } // 2, b is in the TDZ
</code></pre>
<figcaption>One final TDZ example.</figcaption>
</figure>
<p>You can follow the commented numbers. </p>
<p>In the first line we call the <code>f</code> function, and then try to access the <code>b</code> variable (which throws a <code>ReferenceError</code> because <code>b</code> is in the TDZ).</p>
<h2 id="why-do-we-have-the-tdz">Why do we have the TDZ?</h2>
<p>Dr Alex Rauschmayer has an excellent <a href="https://2ality.com/2015/10/why-tdz.html">post </a>on <em>why</em> the TDZ exists, and the main reason is this:</p>
<p>It helps us catch errors. </p>
<p>To try and access a variable before it is declared is the wrong way round, and shouldn't be possible.</p>
<p>It also gives more expected and rational semantics for <code>const</code> (because <code>const</code> is hoisted, what happens if a programmer tries to use it before it is declared at runtime? What variable should it hold at the point when it gets hoisted?), and was the best approach decided by the ECMAScript spec team.</p>
<h2 id="how-to-avoid-the-issues-the-tdz-causes">How to avoid the issues the TDZ causes</h2>
<p>Relatively simply, always make sure you define your <code>let</code>s and <code>const</code>s at the top of your scope.</p>
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
