---
card: "/images/default.jpg"
tags: [JavaScript]
description: Closures are a confusing JavaScript concept to learn, because
author: "Milad E. Fahmy"
title: "How to Use Closures in JavaScript – A Beginner's Guide"
created: "2021-08-15T19:26:10+02:00"
modified: "2021-08-15T19:26:10+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-closure tag-closure-with-example ">
<header class="post-full-header">
<h1 class="post-full-title">How to Use Closures in JavaScript – A Beginner's Guide</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/01/English-Header-4.png 300w,
/news/content/images/size/w600/2021/01/English-Header-4.png 600w,
/news/content/images/size/w1000/2021/01/English-Header-4.png 1000w,
/news/content/images/size/w2000/2021/01/English-Header-4.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/01/English-Header-4.png" alt="How to Use Closures in JavaScript – A Beginner's Guide">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Closures are a confusing JavaScript concept to learn, because it's hard to see how they're actually used. </p>
<p>Unlike other concepts such as functions, variables, and objects, you don't always use closures conscientiously and directly. You don't say: Oh! Here I will use a closure as a solution.</p>
<p>But at the same time, you might have already used this concept a hundred times. Learning about closures is more about identifying when one is being used rather than learning a new concept.</p>
<h2 id="what-is-a-closure-in-javascript">What is a closure in JavaScript?</h2>
<p>You have a closure when a function reads or modifies the value of a variable defined outside its context.</p><pre><code class="language-javascript">const value = 1
function doSomething() {
let data = [1,2,3,4,5,6,7,8,9,10,11]
return data.filter(item =&gt; item % value === 0)
}
</code></pre>
<p>Here the function <code>doSomething</code> uses the variable <code>value</code>. But also the function <code>item =&gt; item % value === 0</code> can then be written like this:</p><pre><code class="language-javascript">function(item){
return item % value === 0
}
</code></pre>
<p>You use the value of the variable <code>value</code> that was defined outside of the function itself.</p>
<h2 id="functions-can-access-values-out-of-context">Functions can access values out of context</h2>
<p>As in the previous example, a function can access and use values that are defined outside its "body" or context, for example:</p><pre><code class="language-javascript">let count = 1
function counter() {
console.log(count)
}
counter() // print 1
count = 2
counter() // print 2
</code></pre>
<p>This allows us to modify the value of the <code>count</code> variable from anywhere in the module. Then when the counter function is called, it will know how to use the current value.</p>
<h2 id="why-do-we-use-functions"><strong>Why do we use functions?</strong></h2>
<p>But why do we use functions in our programs? Certainly it is possible – difficult, but possible – to write a program without using functions we define. So why do we create proper functions?</p>
<p>Imagine a piece of code that does something wonderful, whatever, and is made up of X number of lines.</p><pre><code>/* My wonderful piece of code */
</code></pre>
<p>Now suppose you must use this <strong>wonderful piece of code</strong> in various parts of your program, what would you do?.</p>
<p>The "natural" option is to put this piece of code together into a set that can be reusable, and that reusable set is what we call a function. Functions are the best way to reuse and share code within a program.</p>
<p>Now, you can use your function as many times as possible. And, ignoring some particular cases, calling your function N times is the same as writing that <strong>wonderful piece of code</strong> N times. It is a simple replacement.</p>
<h2 id="but-where-is-the-closure"><strong>But where is the closure?</strong></h2>
<p>Using the counter example, let's consider that as the <strong>wonderful piece of code.</strong></p><pre><code class="language-javascript">let count = 1
function counter() {
console.log(count)
}
counter() // print 1
</code></pre>
<p>Now, we want to reuse it in many parts, so we will "wrap" it in a function.</p><pre><code class="language-javascript">function wonderfulFunction() {
let count = 1
function counter() {
console.log(count)
}
counter() // print 1
}
</code></pre>
<p>Now what do we have? A function: <code>counter</code> that uses a value that was declared outside it <code>count</code>. And a value: <code>count</code> that was declared in the <code>wonderfulFunction</code> function scope but that is used inside the <code>counter</code> function.</p>
<p>That is, we have a function that uses a value that was declared outside its context: <strong>a closure</strong>.</p>
<p>Simple, isn't it? Now, what happens when the function <code>wonderfulFunction</code> is executed? What happens to the variable <code>count</code> and the function <code>counter</code> once the <strong>parent</strong> function is executed? </p>
<p>The variables and functions declared in its body <em>"disappear"</em> (garbage collector).</p>
<p>Now, let's modify the example a bit:</p><pre><code class="language-javascript">function wonderfulFunction() {
let count = 1
function counter() {
count++
console.log(count)
}
setInterval(counter, 2000)
}
wonderfulFunction()
</code></pre>
<p>What will happen now to the variable and function declared inside <code>wonderfulFunction</code>? </p>
<p>In this example, we tell the browser to run <code>counter</code> every 2 seconds. So the JavaScript engine must keep a reference to the function and also to the variable that is used by it. Even after the parent function <code>wonderfulFunction</code> finishes its execution cycle, the function <code>counter</code> and the value count will still "<em>live"</em>.</p>
<p>This "effect" of having closures occurs because JavaScript supports the nesting of functions. Or in other words, functions are <strong>first class citizens</strong> in the language and you can use them like any other object: nested, passed as an argument, as a value of return, and so on.</p>
<h2 id="what-can-i-do-with-closures-in-javascript"><strong>What can I do with closures in JavaScript?</strong></h2>
<h3 id="immediately-invoked-function-expression-iife-"><strong>Immediately-invoked Function Expression (IIFE)</strong></h3>
<p>This is a technique that was used a lot in the ES5 days to implement the "module" design pattern (before this was natively supported). The idea is to "wrap" your module in a function that is immediately executed.</p><pre><code class="language-javascript">(function(arg1, arg2){
...
...
})(arg1, arg2)
</code></pre>
<p>This lets you use private variables that can only be used by the module itself within the function – that is, it's allowed to emulate the access modifiers.</p><pre><code class="language-javascript">const module = (function(){
function privateMethod () {
}
const privateValue = "something"
return {
get: privateValue,
set: function(v) { privateValue = v }
}
})()
var x = module()
x.get() // "something"
x.set("Another value")
x.get() // "Another Value"
x.privateValue //Error
</code></pre>
<h3 id="function-factory"><strong>Function Factory</strong></h3>
<p>Another design pattern implemented thanks to closures is the “Function Factory”. This is when functions create functions or objects, for example, a function that allows you to create user objects.</p><pre><code class="language-javascript">
const createUser = ({ userName, avatar }) =&gt; ({
id: createID(),
userName,
avatar,
changeUserName (userName) {
this.userName = userName;
return this;
},
changeAvatar (url) {
// execute some logic to retrieve avatar image
const newAvatar = fetchAvatarFromUrl(url)
this.avatar = newAvatar
return this
}
});
console.log(createUser({ userName: 'Bender', avatar: 'bender.png' }));
{
"id":"17hakg9a7jas",
"avatar": "bender.png",
"userName": "Bender",
"changeUsername": [Function changeUsername]
"changeAvatar": [Function changeAvatar]
}
*/c</code></pre>
<p>And using this pattern you can implement an idea from functional programming called <strong>currying</strong>.</p>
<h3 id="currying"><strong>Currying</strong></h3>
<p>Currying is a design pattern (and a characteristic of some languages) where a function is immediately evaluated and returns a second function. This pattern lets you execute specialization and composition.</p>
<p>You create these "curried" functions using closures, defining and returning the inner function of the closure.</p><pre><code class="language-javascript">function multiply(a) {
return function (b) {
return function (c)  {
return a * b * c
}
}
}
let mc1 = multiply(1);
let mc2 = mc1(2);
let res = mc2(3);
console.log(res);
let res2 = multiply(1)(2)(3);
console.log(res2);
</code></pre>
<p>These types of functions take a single value or argument and return another function that also receives an argument. It is a partial application of the arguments. It is also possible to rewrite this example using ES6.</p><pre><code class="language-javascript">let multiply = (a) =&gt; (b) =&gt; (c) =&gt; {
return a * b * c;
}
let mc1 = multiply(1);
let mc2 = mc1(2);
let res = mc2(3);
console.log(res);
let res2 = multiply(1)(2)(3);
console.log(res2);
</code></pre>
<p>Where can we apply currying? In composition, let's say you have a function that creates HTML elements.</p><pre><code class="language-javascript">function createElement(element){
const el = document.createElement(element)
return function(content) {
return el.textNode = content
}
}
const bold = crearElement('b')
const italic = createElement('i')
const content = 'My content'
const myElement  = bold(italic(content)) // &lt;b&gt;&lt;i&gt;My content&lt;/i&gt;&lt;/b&gt;
</code></pre>
<h3 id="event-listeners"><strong>Event Listeners</strong></h3>
<p>Another place you can use and apply closures is in event handlers using React. </p>
<p>Suppose you are using a third party library to render the items in your data collection. This library exposes a component called <code>RenderItem</code> that has only one available prop <code>onClick</code>. This prop does not receive any parameters and does not return a value. </p>
<p>Now, in your particular app, you require that when a user clicks on the item the app displays an alert with the item's title. But the <code>onClick</code> event that you have available does not accept arguments – so what can you do? <strong>Closures to the rescue</strong>:</p><pre><code class="language-javascript">// Closure
// with es5
function onItemClick(title) {
return function() {
alert("Clicked " + title)
}
}
// with es6
const onItemClick = title =&gt; () =&gt; alert(`Clcked ${title}`)
return (
&lt;Container&gt;
{items.map(item =&gt; {
return (
&lt;RenderItem onClick={onItemClick(item.title)}&gt;
&lt;Title&gt;{item.title}&lt;/Title&gt;
&lt;/RenderItem&gt;
)
})}
&lt;/Container&gt;
)
</code></pre>
<p>In this simplified example we create a function that receives the title that you want to display and returns another function that meets the definition of the function that RenderItem receives as a prop.</p>
<h2 id="conclusion"><strong>Conclusion</strong></h2>
<p>You can develop an app without even knowing that you are using closures. But knowing that they exist and how they really work unlocks new possibilities when you're creating a solution. </p>
<p>Closures are one of those concepts that can be hard to understand when you're starting out. But once you know you're using them and understand them, it allows you to increase your tools and advance your career.</p>
<p>🐦 <a href="https://twitter.com/matiasfha">Follow me on Twitter</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ✉️ <a href="https://matiashernandez.ck.page">Join to the newsletter</a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ❤️ <a href="https://buymeacoffee.com/matiasfha">Support my work</a></p>
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
