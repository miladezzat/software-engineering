---
card: "/images/default.jpg"
tags: [JavaScript]
description: Bugs and errors are inevitable in programming. A friend of mi
author: "Milad E. Fahmy"
title: "Try/Catch in JavaScript – How to Handle Errors in JS"
created: "2021-08-15T19:27:45+02:00"
modified: "2021-08-15T19:27:45+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-error-handling ">
<header class="post-full-header">
<h1 class="post-full-title">Try/Catch in JavaScript – How to Handle Errors in JS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/12/neo-urban-1734495_1920-1.jpg 300w,
/news/content/images/size/w600/2020/12/neo-urban-1734495_1920-1.jpg 600w,
/news/content/images/size/w1000/2020/12/neo-urban-1734495_1920-1.jpg 1000w,
/news/content/images/size/w2000/2020/12/neo-urban-1734495_1920-1.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/12/neo-urban-1734495_1920-1.jpg" alt="Try/Catch in JavaScript – How to Handle Errors in JS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Bugs and errors are inevitable in programming. A friend of mine calls them <strong>unknown features</strong> :). </p>
<p>Call them whatever you want, but I honestly believe that bugs are one of the things that make our work as programmers interesting. </p>
<p>I mean no matter how frustrated you might be trying to debug some code overnight, I am pretty sure you will have a good laugh when you find out that the problem was a simple comma you overlooked, or something like that. Although, an error reported by a client will bring about more of a frown than a smile. </p>
<p>That said, errors can be annoying and a real pain in the behind. That is why in this article, I want to explain something called <strong>try / catch</strong> in JavaScript.</p>
<h2 id="what-is-a-try-catch-block-in-javascript">What is a try/catch block in JavaScript?</h2>
<p>A <strong>try / catch</strong> block is basically used to handle errors in JavaScript. You use this when you don't want an error in your script to break your code. </p>
<p>While this might look like something you can easily do with an <strong>if statement</strong>, try/catch gives you a lot of benefits beyond what an if/else statement can do, some of which you will see below.</p><pre><code>try{
//...
}catch(e){
//...
}</code></pre>
<p>A try statement lets you test a block of code for errors.</p>
<p>A catch statement lets you handle that error. For example:</p><pre><code>try{
getData() // getData is not defined
}catch(e){
alert(e)
}</code></pre>
<p>This is basically how a try/catch is constructed. You put your code in the <strong>try block</strong>, and immediately if there is an error, JavaScript gives the <strong>catch</strong> statement control and it just does whatever you say. In this case, it alerts you to the error. </p>
<p>All JavaScript errors are actually objects that contain two properties: the name (for example, Error, syntaxError, and so on) and the actual error message. That is why when we alert <strong>e</strong>, we get something like <strong>ReferenceError: getData is not defined</strong>. </p>
<p>Like every other object in JavaScript, you can decide to access the values differently, for example <strong>e.name</strong>(ReferenceError) and <strong>e.message</strong>(getData is not defined).</p>
<p>But honestly this is not really different from what JavaScript will do. Although JavaScript will respect you enough to log the error in the console and not show the alert for the whole world to see :). </p>
<p>What, then, is the benefit of try/catch statements?</p>
<h2 id="how-to-use-try-catch-statements">How to use try/catch statements</h2>
<h3 id="the-throw-statement">The <code>throw</code> Statement</h3>
<p>One of the benefits of try/catch is its ability to display your own custom-created error. This is called <strong><code>(throw error)</code></strong>. </p>
<p>In situations where you don't want this ugly thing that JavaScript displays, you can throw your error (an exception) with the use of the <strong>throw statement</strong>. This error can be a string, boolean, or object. And if there is an error, the catch statement will display the error you throw. </p><pre><code>let num =prompt("insert a number greater than 30 but less than 40")
try {
if(isNaN(num)) throw "Not a number (☉｡☉)!"
else if (num&gt;40) throw "Did you even read the instructions ಠ︵ಠ, less than 40"
else if (num &lt;= 30) throw "Greater than 30 (ب_ب)"
}catch(e){
alert(e)
}</code></pre>
<p>This is nice, right? But we can take it a step further by actually throwing an error with the JavaScript constructor errors.</p>
<p>Basically JavaScript categorizes errors into six groups: </p>
<ul>
<li><strong>EvalError</strong> - An error occurred in the eval function.</li>
<li><strong>RangeError</strong> - A number out of range has occurred, for example <code>1.toPrecision(500)</code>. <code>toPrecision</code> basically gives numbers a decimal value, for example 1.000, and a number cannot have 500 of that.</li>
<li><strong>ReferenceError</strong> - &nbsp;Using a variable that has not been declared</li>
<li><strong>syntaxError</strong> - When evaluating a code with a syntax error</li>
<li><strong>TypeError</strong> - If you use a value that is outside the range of expected types: for example <code>1.toUpperCase()</code></li>
<li><strong>URI (Uniform Resource Identifier) Error</strong> - A URIError is thrown if you use illegal characters in a URI function.</li>
</ul>
<p>So with all this, we could easily throw an error like <code>throw new Error("Hi there")</code>. In this case the name of the error will be <strong>Error</strong> and the message <strong>Hi there</strong>. You could even go ahead and create your own custom error constructor, for example:</p><pre><code>function CustomError(message){
this.value ="customError";
this.message=message;
}</code></pre>
<p>And you can easily use this anywhere with <code>throw new CustomError("data is not defined")</code>.</p>
<p>So far we have learnt about try/catch and how it prevents our script from dying, but that actually depends. Let's consider this example:</p><pre><code>try{
console.log({{}})
}catch(e){
alert(e.message)
}
console.log("This should run after the logged details")</code></pre>
<p>But when you try it out, even with the try statement, it still does not work. This is because there are two main types of errors in JavaScript (what I described above –syntaxError and so on – are not really types of errors. You can call them examples of errors): <strong>parse-time errors</strong> and <strong>runtime errors or exceptions</strong>. </p>
<p><strong>Parse-time errors</strong> are errors that occur inside the code, basically because the engine does not understand the code. </p>
<p>For example, from above, JavaScript does not understand what you mean by <strong>{{}}</strong>, and because of that, your try / catch has no use here (it won't work). </p>
<p>On the other hand, <strong>runtime errors</strong> are errors that occur in valid code, and these are the errors that try/catch will surely find. &nbsp;</p><pre><code>try{
y=x+7
} catch(e){
alert("x is not defined")
}
alert("No need to worry, try catch will handle this to prevent your code from breaking")</code></pre>
<p>Believe it or not, the above is valid code and the try /catch will handle the error appropriately.</p>
<h3 id="the-finally-statement">The <code>Finally</code> statement</h3>
<p>The<strong> finally</strong> statement acts like neutral ground, the base point or the final ground for your try/ catch block. With finally, you are basically saying <strong>no matter what happens in the try/catch (error or no error), this code in the finally statement should run</strong>. For example:</p><pre><code>let data=prompt("name")
try{
if(data==="") throw new Error("data is empty")
else alert(`Hi ${data} how do you do today`)
} catch(e){
alert(e)
} finally {
alert("welcome to the try catch article")
}</code></pre>
<h3 id="nesting-try-blocks">Nesting try blocks</h3>
<p>You can also nest try blocks, but like every other nesting in JavaScript (for example if, for, and so on), it tends to get clumsy and unreadable, so I advise against it. But that is just me.</p>
<p>Nesting try blocks gives you the advantage of using just one catch statement for multiple try statements. Although you could also decide to write a catch statement for each try block, like this:</p><pre><code>try {
try {
throw new Error('oops');
} catch(e){
console.log(e)
} finally {
console.log('finally');
}
} catch (ex) {
console.log('outer '+ex);
}</code></pre>
<p>In this case, there won't be any error from the outer try block because nothing is wrong with it. The error comes from the inner try block, and it is already taking care of itself (it has it own catch statement). Consider this below:</p><pre><code>try {
try {
throw new Error('inner catch error');
} finally {
console.log('finally');
}
} catch (ex) {
console.log(ex);
}</code></pre>
<p>This code above works a little bit differently: the error occurs in the inner try block with no catch statement but instead with a finally statement.</p>
<p>Note that <strong>try/catch</strong> can be written in three different ways: <code>try...catch</code>, <code>try...finally</code>, <code>try...catch...finally</code>), but the error is throw from this inner try. </p>
<p>The finally statement for this inner try will definitely work, because like we said earlier, it works no matter what happens in try/catch. But even though the outer try does not have an error, control is still given to its catch to log an error. And even better, it uses the error we created in the inner try statement because the error is coming from there. </p>
<p>If we were to create an error for the outer try, it would still display the inner error created, except the inner one catches its own error. </p>
<p>You can play around with the code below by commenting out the inner catch.</p><pre><code>try {
try {
throw new Error('inner catch error');
} catch(e){ //comment this catch out
console.log(e)
} finally {
console.log('finally');
}
throw new Error("outer catch error")
} catch (ex) {
console.log(ex);
}</code></pre>
<h3 id="the-rethrow-error">The Rethrow Error</h3>
<p>The catch statement actually catches all errors that come its way, and sometimes we might not want that. For example,</p><pre><code>"use strict"
let x=parseInt(prompt("input a number less than 5"))
try{
y=x-10
if(y&gt;=5) throw new Error(" y is not less than 5")
else alert(y)
}catch(e){
alert(e)
}</code></pre>
<p>Let's assume for a second that the number inputted will be less than 5 (the purpose of <strong>"use strict"</strong> is to indicate that the code should be executed in "strict mode"). With <strong>strict mode</strong>, you can not, for example, use undeclared variables (<a href="https://www.w3schools.com/">source</a>). </p>
<p>I want the try statement to throw an error of <strong>y is not...</strong> when the value of y is greater than 5 which is close to impossible. The error above should be for <strong>y is not less...</strong> and not <strong>y is undefined</strong>. </p>
<p>In situations like this, you can check for the name of the error, and if it is not what you want, <strong>rethrow it</strong>:</p><pre><code>"use strict"
let x = parseInt(prompt("input a number less than 5"))
try{
y=x-10
if(y&gt;=5) throw new Error(" y is not less than 5")
else alert(y)
}catch(e){
if(e instanceof ReferenceError){
throw e
}else alert(e)
}
</code></pre>
<p>This will simply <strong>rethrow the error</strong> for another try statement to catch or break the script here. This is useful when you want to only monitor a particular type of error and other errors that might occur as a result of negligence should break the code.</p>
<h2 id="conclusion">Conclusion</h2>
<p>In this article, I have tried to explain the following concepts relating to try/catch:</p>
<ul>
<li>What try /catch statements are and when they work</li>
<li>How to throw custom errors</li>
<li>What the finally statement is and how it works</li>
<li>How Nesting try / catch statements work</li>
<li>How to rethrow errors</li>
</ul>
<p>Thank you for reading. Follow me on twitter <a href="https://twitter.com/fakoredeDami">@fakoredeDami</a>.</p>
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
