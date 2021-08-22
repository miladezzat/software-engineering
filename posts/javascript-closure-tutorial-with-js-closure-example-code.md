---
card: "/images/default.jpg"
tags: [JavaScript]
description: Closures – many of you JavaScript devs have probably heard th
author: "Milad E. Fahmy"
title: "JavaScript Closure Tutorial – With JS Closure Example Code"
created: "2021-08-15T19:29:41+02:00"
modified: "2021-08-15T19:29:41+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-closure tag-closure-with-example tag-lexical-scoping tag-example ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Closure Tutorial – With JS Closure Example Code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/05/closure-1.jpeg 300w,
/news/content/images/size/w600/2020/05/closure-1.jpeg 600w,
/news/content/images/size/w1000/2020/05/closure-1.jpeg 1000w,
/news/content/images/size/w2000/2020/05/closure-1.jpeg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/05/closure-1.jpeg" alt="JavaScript Closure Tutorial – With JS Closure Example Code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p><strong>Closures –</strong> many of you JavaScript devs have probably heard this term before. When I started my journey with JavaScript, I encountered closures often. And I think they're one of the most important and interesting concepts in JavaScript. </p>
<p>You don't think they're interesting? This often happens when you don’t understand a concept – you don’t find it interesting. (I don’t know if this happens to you or not, but this is the case with me). </p>
<p>So in this article, I will try to make closures interesting for you.</p>
<p>Before going into the world of closures, let’s first understand <strong>lexical scoping</strong>. If you already know about it, skip the next part. Otherwise jump into it to better understand closures.</p>
<h2 id="lexical-scoping">Lexical Scoping </h2>
<p>You may be thinking – I know local and global scope, but what the heck is lexical scope? I reacted the same way when I heard this term. Not to worry! Let’s take a closer look. </p>
<p>It’s simple like other two scopes:</p><pre><code class="language-Javascript">function greetCustomer() {
var customerName = "anchal";
function greetingMsg() {
console.log("Hi! " + customerName); // Hi! anchal
}
greetingMsg();
}</code></pre>
<p>You can see from the above output that the inner function can access the outer function's variable. This is lexical scoping, where the scope and value of a variable is determined by where it is defined/created (that is, its position in the code). Got it? </p>
<p>I know that last bit might have confused you. So let me take you deeper. Did you know that lexical scoping is also known as <strong>static scoping</strong>? Yes, that's its other name. </p>
<p>There is also<strong> dynamic scoping</strong>, which some programming languages support. Why have I mentioned dynamic scoping? Because it can help you better understand lexical scoping.</p>
<p>Let’s look at some examples:</p><pre><code class="language-Javascript">function greetingMsg() {
console.log(customerName);// ReferenceError: customerName is not defined
}
function greetCustomer() {
var customerName = "anchal";
greetingMsg();
}
greetCustomer();</code></pre>
<p>Do you agree with the output? Yes, it will give a reference error. This is because both functions don’t have access to each other’s scope, as they are defined separately.</p>
<p>Let’s look at another example:</p><pre><code class="language-Javascript">function addNumbers(number1) {
console.log(number1 + number2);
}
function addNumbersGenerate() {
var number2 = 10;
addNumbers(number2);
}
addNumbersGenerate();</code></pre>
<p>The above output will be 20 for a dynamically scoped language. Languages that support lexical scoping will give<strong> </strong><code>referenceError: number2 is not defined</code>. Why?</p>
<p>Because in dynamic scoping, searching takes place in the local function first, then it goes into the function that <em>called</em> that local function. Then it searches in the function that called <em>that</em> function, and so on, up the call stack. </p>
<p>Its name is self explanatory – “dynamic” means change. The scope and value of variable can be different as it depends on from where the function is called. The meaning of a variable can change at runtime. </p>
<p>Got the gist of dynamic scoping? If yes, then just remember that lexical scoping is its opposite.</p>
<p>In lexical scoping, searching takes place in the local function first, then it goes into the function inside which <em>that</em> function is defined. Then it searches in the function inside which <em>that</em> function is defined and so on. </p>
<p>So,<strong> lexical </strong>or<strong> static scoping</strong> means the scope and value of a variable is determined from where it is defined. It doesn’t change. </p>
<p>Let’s again look at the above example and try to figure out the output on your own. Just one twist – declare <code>number2</code> at the top:</p><pre><code class="language-Javascript">var number2 = 2;
function addNumbers(number1) {
console.log(number1 + number2);
}
function addNumbersGenerate() {
var number2 = 10;
addNumbers(number2);
}
addNumbersGenerate();
</code></pre>
<p>Do you know what the output will be? </p>
<p>Correct – it’s 12 for lexically scoped languages. This is because first, it looks into an <code>addNumbers</code> function (innermost scope) then it searches inwards, where this function is defined. As it gets the <code>number2</code> variable, meaning the output is 12.</p>
<p>You may be wondering why I have spent so much time on lexical scoping here. This is a closure article, not one about lexical scoping. But if you don’t know about lexical scoping then you will not understand closures. </p>
<p>Why? You will get your answer when we look at the definition of a closure. So let’s get into the track and get back to closures.</p>
<h2 id="what-is-a-closure">What is a Closure? </h2>
<p>Let’s look at the definition of a closure:</p>
<blockquote>Closure is created when an inner function has access to its outer function variables and arguments. The inner function has access to – <br>1. Its own variables.<br>2. Outer function's variables and arguments.<br>3. Global variables.</blockquote>
<p>Wait! Is this the definition of a closure or lexical scoping? Both definitions look the same. How they are different? </p>
<p>Well, that's why I defined lexical scoping above. Because closures are related to lexical/static scoping. </p>
<p>Let’s again look at its other definition that will tell you how closures are different.</p>
<blockquote>Closure is when a function is able to access its lexical scope, even when that function is executing outside its lexical scope.</blockquote>
<p>Or,</p>
<blockquote>Inner functions can access its parent scope, even after the parent function is already executed.</blockquote>
<p>Confused? Don't worry if you haven't yet gotten the point. I have examples to help you better understand. Let’s modify the first example of lexical scoping:</p><pre><code class="language-Javascript">function greetCustomer() {
const customerName = "anchal";
function greetingMsg() {
console.log("Hi! " + customerName);
}
return greetingMsg;
}
const callGreetCustomer = greetCustomer();
callGreetCustomer(); // output – Hi! anchal</code></pre>
<p>The difference in this code is that we are returning the inner function and executing it later. In some programming languages, the local variable exists during the function’s execution. But once the function is executed, those local variables don’t exist and they will not be accessible. </p>
<p>Here, however, the scene is different. After the parent function is executed, the inner function (returned function) can still access the parent function's variables. Yes, you guessed right. Closures are the reason. </p>
<p>The inner function preserves its lexical scope when the parent function is executing and hence, later that inner function can access those variables. </p>
<p>To get a better feel for it, let’s use the <code>dir()</code> method of the console to look into the list of the properties of <code>callGreetCustomer</code>:</p><pre><code class="language-Javascript">console.dir(callGreetCustomer);</code></pre>
<p>From the above image, you can see how the inner function preserves its parent scope (<code>customerName</code>) when <code>greetCustomer()</code> is executed. And later on, it used <code>customerName</code> when <code>callGreetCustomer()</code> was executed.</p>
<p>I hope this example helped you better understand the above definition of a closure. And maybe now you find closures a bit more fun. </p>
<p>So what next? Let’s make this topic more interesting by looking at different examples.</p>
<h2 id="examples-of-closures-in-action">Examples of closures in action</h2><pre><code class="language-Javascript">function counter() {
let count = 0;
return function() {
return count++;
};
}
const countValue = counter();
countValue(); // 0
countValue(); // 1
countValue(); // 2</code></pre>
<p>Every time you call <code>countValue</code>, the count variable value is incremented by 1. Wait – did you think that the value of count is 0? </p>
<p>Well, that would be wrong as a closure doesn’t work with a value. It stores the <strong>reference</strong> of the variable. That’s why, when we update the value, it reflects in the second or third call and so on as the closure stores the reference. </p>
<p>Feeling a bit clearer now? Let’s look at another example:</p><pre><code class="language-Javascript">function counter() {
let count = 0;
return function () {
return count++;
};
}
const countValue1 = counter();
const countValue2 = counter();
countValue1();  // 0
countValue1();  // 1
countValue2();   // 0
countValue2();   // 1
</code></pre>
<p><br>I hope you guessed the right answer. If not, here is the reason. As <code>countValue1</code> and <code>countValue2</code>, both preserve their own lexical scope. They have independent lexical environments. You can use <code>dir()</code> to check the <code>[[scopes]]</code> value in both the cases.</p>
<p>Let’s look at a third example.</p>
<p>This one's a bit different. In it, we have to write a function to achieve the output:</p><pre><code class="language-Javascript">const addNumberCall = addNumber(7);
addNumberCall(8) // 15
addNumberCall(6) // 13</code></pre>
<p>Simple. Use your newly-gained closure knowledge:</p><pre><code class="language-Javascript">function addNumber(number1) {
return function (number2) {
return number1 + number2;
};
}</code></pre>
<p>Now let’s look at some tricky examples:</p><pre><code class="language-Javascript">function countTheNumber() {
var arrToStore = [];
for (var x = 0; x &lt; 9; x++) {
arrToStore[x] = function () {
return x;
};
}
return arrToStore;
}
const callInnerFunctions = countTheNumber();
callInnerFunctions[0]() // 9
callInnerFunctions[1]() // 9</code></pre>
<p>Every array element that stores a function will give you an output of 9. Did you guess right? I hope so, but still let me tell you the reason. This is because of the closure's behavior. </p>
<p>The closure stores the <strong>reference</strong>, not the value. The first time the loop runs, the value of x is 0. Then the second time x is 1, and so on. Because the closure stores the reference, every time the loop runs it's changing the value of x. And at last, the value of x will be 9. So <code>callInnerFunctions[0]()</code> gives an output of 9. </p>
<p>But what if you want an output of 0 to 8? Simple! Use a closure. </p>
<p>Think about it before looking at the solution below:</p><pre><code class="language-Javascript">function callTheNumber() {
function getAllNumbers(number) {
return function() {
return number;
};
}
var arrToStore = [];
for (var x = 0; x &lt; 9; x++) {
arrToStore[x] = getAllNumbers(x);
}
return arrToStore;
}
const callInnerFunctions = callTheNumber();
console.log(callInnerFunctions[0]()); // 0
console.log(callInnerFunctions[1]()); // 1</code></pre>
<p>Here, we have created separate scope for each iteration. You can use <code>console.dir(arrToStore)</code> to check the value of x in <code>[[scopes]]</code> for different array elements.</p>
<p>That’s it! I hope you can now say that you find closures interesting.</p>
<p>To read my other articles, check out my profile <a href="/news/author/anchal">here</a>.</p>
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
