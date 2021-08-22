---
card: "/images/default.jpg"
tags: [JavaScript]
description: Variables are a fundamental concept in any programming langua
author: "Milad E. Fahmy"
title: "JavaScript Variables – A Beginner's Guide to var, const, and let"
created: "2021-08-15T19:27:56+02:00"
modified: "2021-08-15T19:27:56+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-variables tag-beginners-guide ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Variables – A Beginner's Guide to var, const, and let</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/11/Screen-Shot-2020-11-22-at-8.51.01-PM.png 300w,
/news/content/images/size/w600/2020/11/Screen-Shot-2020-11-22-at-8.51.01-PM.png 600w,
/news/content/images/size/w1000/2020/11/Screen-Shot-2020-11-22-at-8.51.01-PM.png 1000w,
/news/content/images/size/w2000/2020/11/Screen-Shot-2020-11-22-at-8.51.01-PM.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/11/Screen-Shot-2020-11-22-at-8.51.01-PM.png" alt="JavaScript Variables – A Beginner's Guide to var, const, and let">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Variables are a fundamental concept in any programming language. In JavaScript, you can declare variables by using the keywords var, const, or let.</p>
<p>In this article, you’ll learn why we use variables, how to use them, and the differences between const, let and var.</p>
<h2 id="what-are-variables-used-for-in-javascript"><strong>What are variables used for in JavaScript?</strong></h2>
<p>In the context of coding, data is information that we use in our computer programs. For example, your Twitter username is a piece of data.</p>
<p>Much of programming is about manipulating or displaying data. In order to do this, programmers need a way of storing and keeping track of data. Let's demonstrate this with an example.</p>
<p>First we’ll open up our JavaScript console. To launch your JavaScript console on Chrome, you can use the shortcut Ctrl + Shift + J on Windows and Linux. For Mac, use Cmd + Option + J. <strong> </strong></p>
<p>Once the console has launched, think of your dog or cat’s current age (or any similar number if you don't have pets) and enter it into the console.</p><pre><code class="language-js">4</code></pre>
<p>Now what if we want to refer to that number again? We’ll have to type it out for a second time.</p>
<p>We need a way to refer to this piece of data so we can reuse it throughout our program.</p>
<h2 id="introducing-variables-in-javascript"><strong>Introducing variables in JavaScript</strong></h2>
<p>A helpful analogy is to think of variables as labels for our values. Think of a container of blueberries with a label on it marked blueberries. In this example, the variable, <em>blueberries</em>, points to a value, which is the blueberries themselves.</p>
<p>Let's declare a variable, age, and use the assignment operator (the equals sign) to assign our value, 4, to this variable. We’ll use the var keyword.</p><pre><code class="language-js">var age = 4</code></pre>
<p>Variables are how programmers give a name to a value so that we can reuse it, update it, or simply keep track of it. Variables can be used to store any JavaScript type.</p>
<p>Now that we’ve assigned this value to the variable age, we can refer back to this value later. If you now type in the variable age in your console, you’ll have the value of 4 returned back to you.</p>
<h2 id="how-to-use-the-var-keyword-in-javascript">How to use the var keyword in JavaScript</h2>
<p>Keywords in JavaScript are reserved words. When you use the var keyword, you’re telling JavaScript you’ll be declaring a variable.</p>
<p>When using the var keyword, variables can be reassigned. We’ll demonstrate this by first declaring a new variable, name, and assigning it to the value of Madison.</p><pre><code>var name = 'Madison'</code></pre>
<p>Next, we’ll reassign this variable to point to the value of a different name, Ben.</p><pre><code>name = 'Ben'</code></pre>
<p>Now if you run <code>console.log(name)</code> you’ll get the output of Ben.</p>
<p>When using the var keyword, variables can also be declared with no initial value.</p><pre><code>var year</code></pre>
<p>Here, we’ve declared a variable <code>year</code> but it does not point to any value. Later on if we want it to point to a value, we can use the assignment operator to do so.</p><pre><code>Year = 2020</code></pre>
<p>Now our variable year will point to the value of 2020.</p>
<p>When JavaScript was first created, the only way to declare a variable was with the var keyword.</p>
<p>In recent updates to JavaScript (ECMAScript2015), <code>const</code> and <code>let</code> were created as other keywords to declared variables. </p>
<p>To explain why they were needed, we’ll look at problems with the var keyword. In order to look at these problems, we’ll learn about what scope is.</p>
<h2 id="what-is-scope">What is scope?</h2>
<p>Scope refers to where in our code variables are available for use. When a variable is<em> globally scoped</em>, that means it is available anywhere in your program. Let’s look at an example. </p>
<p>Take the following code and enter it into your console.</p><pre><code class="language-js">var name = ‘Bob’
function printName() {
console.log(name)
}
printName()</code></pre>
<p>Here we’ve created and called a function, printName, that will print the value of the name var, <code>Madison</code>. You’ll see this printed in your console.</p>
<p>Because our var was created outside of the function, it is globally scoped. This means that it is available anywhere in your code, including inside of any function. This is why our function, printName, has access to the name var.</p>
<p>Let’s now create a variable that is function-scoped. This means that the variable is only accessible inside the function it was created in. This next example will be very similar to the code above, but with a different placement of the variable. </p><pre><code class="language-js">function printYear() {
var year = 2020
}
console.log(year)</code></pre>
<p>Now in our console we’ll get an error: <code>year is not defined.</code> This is because the var year is function-scoped. That is, it only exists inside of the function it was created in. We don’t have access to it outside of the function, which is where we’re trying to access it when we run our console.log.</p>
<p>Function-scoped variables are helpful to programmers because we often want to create variables that are only useful or needed inside a certain function. Creating global variables can also lead to errors or mistakes.</p>
<p>Now that we have a basic understanding of scope, we can return to our discussion of problems with the var keyword.</p>
<h2 id="problems-with-the-var-keyword-in-javascript">Problems with the var keyword in JavaScript</h2>
<p>Let's look at another example. </p>
<p>We'll create a variable, <code>age</code>. Next we’ll write an if statement that checks if age has a value, and if it does, returns a console.log of the number that is double that age. </p>
<p>This is a simplified example, but we’ll first check if age has a value because we want to make sure we are adding to a valid value. </p><pre><code class="language-js">var age = 27
If (age) {
var doubleAge = age + age
console.log(`Double your current age is ${yearPlusTwenty}`)
}</code></pre>
<p>Now in our console, you’ll see <code>Double your current age is 47</code>.</p>
<p>Our variable, <code>doubleAge</code>, is now a global variable. If you enter <code>doubleAge</code> into your console, you’ll see that you have access to it.</p><pre><code class="language-js">doubleAge
47</code></pre>
<p>As previously discussed, variables created with the var keyword are function-scoped. Function-scoped variables only exist inside of the function they were created in. </p>
<p>But since the <code>doubleAge</code> variable is not inside a function, that means it has been scoped globally. That is, the <code>doubleAge</code> variable is now available anywhere in our code.</p>
<p>The problem is, <code>doubleAge</code> is just a variable we used once inside of our <code>if statement</code>, and we don’t necessarily need it available everywhere in our code. It has “leaked” outside of the if statement it was created in, even though we didn’t need it to.</p><pre><code class="language-js">var age = 27
if (age) {
//We need our doubleAge var only in this block of code in between our curley brackets.
var doubleAge = age + age
console.log(`Double your current age is ${yearPlusTwenty}`)
}
doubleAge
47
//our doubleAge var is available outside of these curly brackets, on the global sbope.</code></pre>
<p>It would be great if we had a way of creating a variable that *only* existed inside the if statement it was created in. In other words, the block of code that exists in between the curly brackets. </p><pre><code class="language-js">var age = 27
If (age) {
//We want our variable to only exist here, where we will use it
var doubleAge = age + age
console.log(`Double your current age is ${yearPlusTwenty}`)
}</code></pre>
<p>To help fix this problem, the const and let keywords were introduced in JavaScript.</p>
<h2 id="how-to-use-the-const-keyword-in-javascript">How to use the const keyword in JavaScript</h2>
<p><code>const</code> works similarly to var, but with a few big differences.</p>
<p>First, <code>const</code> is <em>block</em>-scoped, whereas var is <em>function</em>-scoped.</p>
<p>What is a <strong>block</strong>? </p>
<p>A <em>block </em>refers to any space between an opening and closing bracket. This might seem confusing at first. Let's write out our previous example, but this time using const instead of let when declaring our <code>doubleAge</code> variable.</p><pre><code class="language-js">var age = 27
If (age) {
const doubleAge = age + age
console.log(`Double your current age is ${yearPlusTwenty}`)
}</code></pre>
<p>Now, type <code>doubleAge</code> into your console and hit enter. You should get an error, <code>doubleAge is not defined.</code> This is because const is block-scoped: <em>it only exists in the block it was defined.</em> </p>
<p>The &nbsp;<code>doubleAge</code> variable is ‘trapped’ inside the two curly brackets it was defined in. Code that is also inside those brackets can access doubleAge, but no code outside of it can.</p>
<p>By using <code>const</code> instead of <code>var</code>, our previous problem is fixed. Our <code>doubleAge</code> var is no longer “leaking” into our global scope unnecessarily. Instead, it only exists inside of the block it was created in. </p>
<p>How do block-scoped variables work within the context of functions? To learn about this, let's create and then call a function, <code>returnX.</code></p><pre><code class="language-js">function returnX() {
const x = 1
return x
}
returnX()</code></pre>
<p>By calling this function <code>returnX</code>, we can see that our function returns the value of x, which is 1.</p>
<p>If we next type in <code>x</code>, we’ll get back <code>referenceError: x is not defined</code>. This is because functions are also considered blocks, so our const <code>x</code> will exist only within the function.</p>
<p>The next thing to know about const is that it can only ever be declared once. Type this code into your console:</p><pre><code class="language-js">const y = 1
const y = 2</code></pre>
<p>You should see an error, &nbsp;<code>Identifier 'x' has already been declared.</code></p>
<p>This is a difference between var and const. While const will give you an error, letting you know that you’ve already declared this variable, the var keyword won’t.</p><pre><code class="language-js">var x = 1
var x = 2</code></pre>
<p>The variable <code>x</code> will point to the value of <code>2</code> without an error. This can cause bugs for you as a programmer, as perhaps you did not mean to reassign your value to a new variable. Thus, using const can help you as you’ll receive an error if you accidentally try to reassign a variable.</p>
<p>This is a strength of the <code>const</code> keyword that was introduced as an updated and better way of creating variables in JavaScript. However, what about the times when you <em>do</em> want to update your variable? </p>
<p>Let's look at an example that shows why we would want to do this.</p>
<p>Let's declare a variable, <code>adult</code>, and set it to <code>false</code>. We’ll also create an <code>age</code> variable and set it to <code>20</code>.</p>
<p><code>const adult = false</code></p>
<p><code>const age = 20.</code></p>
<p>Say we want to check a user’s age, and set our adult variable to false if age is over 18. We can write an if statement to do this.</p><pre><code class="language-js">if (age &gt; 18) {
adult = true
}</code></pre>
<p>What happens when we run this code?</p>
<p>Here we’ll see <code>Error: Assignment to constant variable.</code></p>
<p>This is because, in accordance with the rules of <code>const</code>, we cannot redeclare this variable. That is, our variable <code>age</code> is already pointing to the value of true, and we cannot now point it to something else. &nbsp;</p>
<p>If we print out <code>adult</code> again, we can see that it has stayed the same and still holds the value of <code>false</code>.</p>
<p>We cannot reassign our <code>age</code> variable, and <code>const</code> is working as expected. However, what if we <em>do</em> want to reassign this variable?</p>
<p>Often times programmers will want to be able to redeclare their variables. </p>
<p>This is where our third keyword, let, comes in.</p>
<h2 id="how-to-use-the-let-keyword-in-javascript">How to use the let keyword in JavaScript</h2>
<p>First let’s go over how <code>let</code> is similar to <code>const</code>.</p>
<p><code>Let</code>, like <code>const</code>, is block-scoped. If you replaced const with let in our above <code>doubleAge</code> example, it would work the same.</p>
<p>However, <code>let</code> differs from <code>const</code> in a fundament way. Variables declared with the <code>let</code> keyword can be redeclared, while variables created with the <code>const</code> keyword cannot. Let’s go over an example.</p>
<p>Using our same example above, replace const with let. We’ll keep our age variable as a <code>const</code> with the value of <code>20</code>.</p><pre><code class="language-js">let adult = false
const age = 20
if (age &gt; 18) {
adult = true
}</code></pre>
<p>Now if we type out <code>adult</code>, instead of getting an error as we previously did, we’ll see the output of <code>true</code>. </p>
<p>By using the <code>let</code> keyword, we’ve updated our variable to point to the value of <code>true</code> as we wanted to. Sometimes in programming we’ll want to update our variable depending on certain data that we receive. We can use <code>let</code> to do this.</p>
<h2 id="wrapping-up">Wrapping up</h2>
<p>In summary, we’ve learned that variables are used to keep track of and reuse data in our computer programs. Scope refers to where in our code variables are available for use.</p>
<p>Variables can be declared using var, const, or let. Var is function-scoped, while const and let are block-scoped. Const variables cannot be reassigned, while let variables can be. &nbsp;</p>
<p>Var, const, and let can be confusing at first. It can help to read different tutorials on them, as well as test out your own code in different ways to solidify your understanding. </p>
<p>Having a strong foundation of var, const, and let will help you not just at the start of your JavaScript career but throughout its entirety.</p>
<h3 id="thank-you-for-reading-">Thank you for reading!</h3>
<p>If you enjoyed this post, sign up for<a href="https://madisonkanna.us14.list-manage.com/subscribe/post?u=323fd92759e9e0b8d4083d008&amp;id=033dfeb98f"> my email list</a> where I send out my latest articles and announce meetings for my coding book club.</p>
<p>If you have feedback or questions on this post, feel free to Tweet me @<a href="https://twitter.com/Madisonkanna">madisonkanna.</a></p>
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
