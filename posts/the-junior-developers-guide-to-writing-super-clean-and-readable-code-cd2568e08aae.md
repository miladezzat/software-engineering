---
card: "https://cdn-media-1.freecodecamp.org/images/1*BbAtAVDs9srxs33lkY9sbw.jpeg"
tags: [Programming]
description: "Writing code is one thing, but writing clean, readable code i"
author: "Milad E. Fahmy"
title: "The junior developer’s guide to writing super clean and readable code"
created: "2021-08-16T11:31:09+02:00"
modified: "2021-08-16T11:31:09+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-programming tag-technology tag-software-development tag-clean-code tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">The junior developer’s guide to writing super clean and readable code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*BbAtAVDs9srxs33lkY9sbw.jpeg 300w,
https://cdn-media-1.freecodecamp.org/images/1*BbAtAVDs9srxs33lkY9sbw.jpeg 600w,
https://cdn-media-1.freecodecamp.org/images/1*BbAtAVDs9srxs33lkY9sbw.jpeg 1000w,
https://cdn-media-1.freecodecamp.org/images/1*BbAtAVDs9srxs33lkY9sbw.jpeg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*BbAtAVDs9srxs33lkY9sbw.jpeg" alt="The junior developer’s guide to writing super clean and readable code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Writing code is one thing, but writing clean, readable code is another thing. But what is “clean code?” I’ve created this short <em>clean code for beginners guide</em> to help you on your way to mastering and understanding the art of clean code.</p><p>Imagine you are reading an article. There’s an opening paragraph, which gives you a brief overview of what the article is about. There are headings, each with a bunch of paragraphs. The paragraphs are structured with the relevant bits of information grouped together and ordered so that the article “flows” and reads nicely.</p><p>Now, image the article didn’t have any headings. There are paragraphs, but they are long and in a confusing order. You can’t skim read the article, and have to really dive into the content to get a feel for what the article is about. This can be quite frustrating!</p><p>Your code should read like a good article. Think of your classes/files as headings, and your methods as paragraphs. Sentences are the statements in your code. Here are some of the characteristics of clean code:</p><ol><li>Clean code is focused — Each function, each class, and module should do one thing and do it well.</li><li>It should be elegant — Clean code should be <em>simple </em>to read. Reading it should make you smile. It should leave you thinking “I know exactly what this code is doing”</li><li>Clean code is taken care of. Someone has taken the time to keep it simple and orderly. They have paid appropriate attention to details. They have cared.</li><li>The tests should pass — Broken code isn’t clean!</li></ol><p>On to the big question of the day — how do you actually write clean code as a junior developer? Here’s my top tips to get started.</p><h3 id="use-consistent-formatting-indentation">Use consistent formatting &amp; indentation</h3><p>Books would be hard to read if the line spacing was inconsistent, the font sizes were different, and the line breaks were all over the place. The same goes for your code.</p><p>To make your code clear and easy to read, make sure the indentation, line breaks, and formatting are consistent. Here’s a good and bad example:</p><h4 id="the-good">The Good</h4><pre><code class="language-js">function getStudents(id) {
if (id !== null) {
go_and_get_the_student();
} else {
abort_mission();
}
}</code></pre><ul><li>At a glance, you can tell there is an <code>if/else</code> statement within the function</li><li>Braces and consistent indentation make it easy to see where the code blocks start and end</li><li>Braces are consistent — Notice how the opening brace for the <code>function</code> and for the <code>if</code> are on the same line</li></ul><h4 id="the-bad">The Bad</h4><pre><code class="language-js">function getStudents(id) {
if (id !== null) {
go_and_get_the_student();}
else
{
abort_mission();
}
}</code></pre><p>Woah! So much wrong here.</p><ul><li>The indentation is all over the place — you can’t tell where the function ends, or where the <code>if/else</code> block starts (yes there is an if/else block in there!)</li><li>The braces are confusing and are not consistent</li><li>The line spacing is inconsistent</li></ul><p>This is a bit of an exaggerated example, but it shows the benefit of using consistent indentation and formatting. I don’t know about you, but the “good” example was much easier on the eyes for me!</p><p>The good news is that there are many IDE plugins you can use to automatically format code for you. Hallelujah!</p><ul><li>VS Code: <a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" rel="noopener">Prettier</a></li><li>Atom: <a href="https://atom.io/packages/atom-beautify" rel="noopener">Atom Beautify</a></li><li>Sublime Text: <a href="https://packagecontrol.io/packages/HTML-CSS-JS%20Prettify" rel="noopener">Prettify</a></li></ul><h3 id="use-clear-variable-and-method-names">Use clear variable and method names</h3><p>In the beginning, I talked about how it’s important that your code is easy to read. A big aspect of this is the naming you choose (this is one of the <a href="https://www.chrisblakely.dev/7-mistakes-i-made-as-a-junior-developer/" rel="noopener">mistakes I made when I was a junior developer</a>). Let’s look at an example of good naming:</p><pre><code>function changeStudentLabelText(studentId){
const studentNameLabel = getStudentName(studentId);
}
function getStudentName(studentId){
const student = api.getStudentById(studentId);
return student.name;
}</code></pre><p>This code snippet is good for a number of ways:</p><ul><li>The functions are named clearly with well-named arguments. When a developer is reading this, it’s clear in their mind, “If I call the <code>getStudentName()</code> method with a <code>studentId</code>, I will get a student name back" - they don't have to navigate to the <code>getStudentName()</code> method if they don't need to!</li><li>Within the <code>getStudentName()</code> method, the variables and method calls are again clearly named - it's easy to see that the method calls an <code>api</code>, get's a <code>student</code> object, and returns the <code>name</code> property. Easy!</li></ul><p>Choosing good names when writing clean code for beginners is harder than you think. As your app grows, use these conventions to ensure your code is easy to read:</p><ul><li>Choose a naming style and be consistent. Either <code>camelCase</code> or <code>under_scores</code> but not both!</li><li>Name your function, methods, and variables by what that thing does, or what that thing is. If your method <em>get’s</em> something, put <code>get</code> in the name. If your variable <em>stores</em> a color of a car, call it <code>carColour</code>, for example.</li></ul><p><strong>BONUS TIP</strong> — if you can’t name your function or method, then that function is doing too much. Go ahead and break it up into smaller functions! E.g if you end up calling your function <code>updateCarAndSave()</code>, create 2 methods <code>updateCar()</code> and <code>saveCar()</code>.</p><h3 id="use-comments-where-necessary">Use comments where necessary</h3><p>There is a saying, “code should be self-documenting”, which basically means, instead of using comments, your code should read well enough reducing the need for comments. This is a valid point, and I guess this makes sense in a perfect world. Yet, the world of coding is far from perfect, so sometimes comments are necessary.</p><p>Documentation comments are comments that describe what a particular function or class does. If you’re writing a library, this will be helpful for developers who are using your library. Here’s an example from useJSDoc:</p><pre><code class="language-js">/** * Solves equations of the form a * x = b
* @example *
// returns 2 * globalNS.method1(5, 10);
* @example *
// returns 3 * globalNS.method(5, 15);
* @returns {Number} Returns the value of x for the equation. */ globalNS.method1 = function (a, b) { return b / a; };</code></pre><p>Clarification comments are intended for anyone (including your future self) who may need to maintain, refactor, or extend your code. More often than not, clarification comments could be avoided, in favor of “self-documenting code”. Here’s an example of a clarification comment:</p><pre><code class="language-js">/* This function calls a third party API. Due to some issue with the API vender, the response returns "BAD REQUEST" at times. If it does, we need to retry */
function getImageLinks(){
const imageLinks = makeApiCall();
if(imageLinks === null){
retryApiCall();
} else {
doSomeOtherStuff();
}
}</code></pre><p>Here’s some comments you should try and avoid. They don’t offer much value, can be misleading and simply clutter the code.</p><p>Redundant comments that don’t add value:</p><pre><code class="language-js">// this sets the students age
function setStudentAge();</code></pre><p>Misleading comments:</p><pre><code class="language-js">//this sets the fullname of the student
function setLastName();</code></pre><p>Funny or insulting comments:</p><pre><code class="language-js">// this method is 5000 lines long but it's impossible to refactor so don't try
function reallyLongFunction();</code></pre><h3 id="remember-the-dry-principle-don-t-repeat-yourself-">Remember the DRY principle (Don’t Repeat Yourself)</h3><p>The DRY principle is stated as:</p><blockquote>“Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.”</blockquote><p>At its simplest level, this basically means that you should aim to reduce the amount of duplicated code that exists. (Note that I said “<em>reduce”</em> and not <em>“eliminate” — </em>There are some instances where duplicated code isn’t the end of the world!)</p><p>Duplicated code can be a nightmare to maintain and alter. Let’s look at an example:</p><pre><code class="language-js">function addEmployee(){
// create the user object and give the role
const user = {
firstName: 'Rory',
lastName: 'Millar',
role: 'Admin'
}
// add the new user to the database - and log out the response or error
axios.post('/user', user)
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});
}
function addManager(){
// create the user object and give the role
const user = {
firstName: 'James',
lastName: 'Marley',
role: 'Admin'
}
// add the new user to the database - and log out the response or error
axios.post('/user', user)
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});
}
function addAdmin(){
// create the user object and give the role
const user = {
firstName: 'Gary',
lastName: 'Judge',
role: 'Admin'
}
// add the new user to the database - and log out the response or error
axios.post('/user', user)
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log(error);
});
}</code></pre><p>Imagine you are creating a human resources web app for a client. This app allows admins to add users with roles to a database via an API. There are 3 roles; employee, manager, and admin. Let’s look at some of the functions that might exist:</p><p>Cool! The code works and all is well in the world. After a while, our client comes along and says:</p><blockquote><em>Hey! We would like the error message that is displayed to contain the sentence “there was an error”. Also, to be extra annoying, we want to change the API endpoint from <code>/user</code> to <code>/users</code>. Thanks!</em></blockquote><p>So before we jump in and start coding, let’s step back. Remember at the beginning of this clean code for beginners article, when I said <em>“Clean code should be focused”. </em>i.e,<em> </em>do one thing and do it well? This is where our current code has a small issue. The code that makes the API call and handles the error is repeated — which means we have to change the code in 3 places to meet the new requirements. Annoying!</p><p>So, what if we refactored this to <em>be more focused</em>? Have a look at the following:</p><pre><code class="language-js">function addEmployee(){
// create the user object and give the role
const user = {
firstName: 'Rory',
lastName: 'Millar',
role: 'Admin'
}
// add the new user to the database - and log out the response or error
saveUserToDatabase(user);
}
function addManager(){
// create the user object and give the role
const user = {
firstName: 'James',
lastName: 'Marley',
role: 'Admin'
}
// add the new user to the database - and log out the response or error
saveUserToDatabase(user);
}
function addAdmin(){
// create the user object and give the role
const user = {
firstName: 'Gary',
lastName: 'Judge',
role: 'Admin'
}
// add the new user to the database - and log out the response or error
saveUserToDatabase(user);
}
function saveUserToDatabase(user){
axios.post('/users', user)
.then(function (response) {
console.log(response);
})
.catch(function (error) {
console.log("there was an error " + error);
});
}</code></pre><p>We’ve moved the logic that creates an API call into its own method <code>saveUserToDatabase(user)</code> (is that a good name? You decide!) which the other methods <em>will call</em> to save the user. Now, if we need to change the API logic again, we only have to update 1 method. Likewise, if we have to add another method that creates users, the method to save the user to the database via api already exists. Hurray!</p><h3 id="an-example-of-refactoring-using-what-we-learned-so-far">An example of refactoring using what we learned so far</h3><p>Let’s close our eyes and pretend really hard that we’re making a calculator app. There are functions that are used which allows us to add, subtract, multiply and divide respectively. The result is outputted to the console.</p><p>Here’s what we have so far. See if you can spot the issues before moving on:</p><pre><code class="language-js">function addNumbers(number1, number2)
{
const result = number1 + number2;
const output = 'The result is ' + result;
console.log(output);
}
// this function substracts 2 numbers
function substractNumbers(number1, number2){
//store the result in a variable called result
const result = number1 - number2;
const output = 'The result is ' + result;
console.log(output);
}
function doStuffWithNumbers(number1, number2){
const result = number1 * number2;
const output = 'The result is ' + result;
console.log(output);
}
function divideNumbers(x, y){
const result = number1 / number2;
const output = 'The result is ' + result;
console.log(output);
}</code></pre><p>What are the issues?</p><ul><li>The indentation is inconsistent — it doesn’t matter too much what indentation format we use, just as long as it’s consistent</li><li>The 2nd function has some redundant comments — we can tell what’s going on by reading the function name and the code within the function, so do we really need a comment here?</li><li>The 3rd and 4th functions don’t use good naming — <code>doStuffWithNumbers()</code> isn't the best function name as it doesn't state what it does. <code>(x, y)</code> aren't descriptive variables either - are <code>x &amp; y</code> functions? numbers? bananas?</li><li>The methods <em>do more than one thing — </em>performs the calculation, but also displays the output. We can split the <em>display </em>logic out to a separate method — as per the <strong>DRY principle</strong></li></ul><p>Now we’ll use what we learned in this clean code for beginners guide to refactor everything so that our new code looks like:</p><pre><code class="language-js">function addNumbers(number1, number2){
const result = number1 + number2;
displayOutput(result)
}
function substractNumbers(number1, number2){
const result = number1 - number2;
displayOutput(result)
}
function multiplyNumbers(number1, number2){
const result = number1 * number2;
displayOutput(result)
}
function divideNumbers(number1, number2){
const result = number1 * number2;
displayOutput(result)
}
function displayOutput(result){
const output = 'The result is ' + result;
console.log(output);
}</code></pre><ul><li>We’ve fixed the indentation so that it's consistent</li><li>Adjusted the naming of the functions and variables</li><li>Removed the unneeded comments</li><li>Moved the <code>displayOutput()</code> logic into its own method - if the output needs to change, we only need to change it one place</li></ul><p>Congrats! You can now talk about how you know clean code principles in your interviews and when <a href="https://www.chrisblakely.dev/how-to-write-an-awesome-junior-developer-resume-in-a-few-simple-steps/" rel="noopener">writing your killer resume</a>!</p><h3 id="don-t-over-clean-your-code">Don’t “over clean” your code</h3><p>I often see developers go over the top when it comes to clean code. Be careful not to try and clean your code too much, as it can have the opposite effect, and actually make your code <em>harder to read and maintain. </em>It can also have an impact on productivity, if a developer has to constantly jump between many files/methods in order to make a simple change.</p><p>Be mindful of clean code, but do not overthink it at the early stages of your projects. Make sure your code works, and is well tested. During the refactoring stage is when you should really think about how to clean up your code using the DRY principle etc.</p><p>In this clean code for beginners guide, we learned how to:</p><ul><li>Use consistent formatting &amp; indentation</li><li>Use clear variable and method names</li><li>Use comments where necessary</li><li>Use the DRY principle (Don’t Repeat Yourself)</li></ul><p>If you enjoyed this guide, make sure to check out <a href="https://amzn.to/2U7JO4N" rel="noopener"><em>Clean Code: A Handbook of Agile Software Craftsmanship</em> by Robert C Martin</a>. If you are serious about writing clean code and breaking out of the junior developer level, I highly recommend this book.</p><p>Thanks for reading!</p><p>To get the latest guides and courses for junior developers straight to your inbox, make sure to join the mailing list at <a href="https://www.chrisblakely.dev/#sign-up" rel="noopener">www.chrisblakely.dev</a>!</p>
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
