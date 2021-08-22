---
card: "https://cdn-media-2.freecodecamp.org/w1280/6060ec269618b008528a8ce1.jpg"
tags: [JavaScript]
description: "JavaScript is a dynamic programming language that s used for "
author: "Milad E. Fahmy"
title: "What is JavaScript? A Definition of the JS Programming Language"
created: "2021-08-16T10:03:55+02:00"
modified: "2021-08-16T10:03:55+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">What is JavaScript? A Definition of the JS Programming Language</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/6060ec269618b008528a8ce1.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/6060ec269618b008528a8ce1.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/6060ec269618b008528a8ce1.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/6060ec269618b008528a8ce1.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/6060ec269618b008528a8ce1.jpg" alt="What is JavaScript? A Definition of the JS Programming Language">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>Many browsers use JavaScript as a scripting language for doing dynamic things on the web. Any time you see a click-to-show dropdown menu, extra content added to a page, and dynamically changing element colors on  a page, to name a few features, you're seeing the effects of JavaScript.</p>
<h2 id="whatwouldtheweblooklikewithoutjavascript">What Would the Web Look Like Without JavaScript?</h2>
<p>Without JavaScript, all you would have on the web would be HTML and CSS. These alone limit you to a few web page implementations. 90% (if not more) of your webpages would be static, and you'd only have the dynamic changes like animations that CSS provides.</p>
<h2 id="howjavascriptmakesthingsdynamic">How JavaScript Makes Things Dynamic</h2>
<p>HTML defines the structure of your web document and the content therein. CSS declares various styles for the contents provided on the web document.</p>
<p>HTML and CSS are often called markup languages rather than programming languages, because they, at their core, provide markups for documents with very little dynamism.</p>
<p>JavaScript, on the other hand, is a dynamic programming language that supports Math calculations, allows you to dynamically add HTML contents to the <a href="https://thewebfor5.com/p/javascript/the-dom/">DOM</a>, creates dynamic style declarations, fetches contents from another website, and lots more.</p>
<p>Before we go into how JavaScript does all of these things, let's look at a quick example.</p>
<p>Check out this codepen: <a href="https://codepen.io/Dillion/full/XWjvdMG">https://codepen.io/Dillion/full/XWjvdMG</a></p>
<p>In the codepen, you'll see that as you type in the input field, the text shows on the screen. That is made possible by JavaScript. You cannot get this with HTML, CSS, nor both of them together.</p>
<p>JavaScript can do a lot more than what I can cover in this article. But to get you started with JS, we'll look at:</p>
<ul>
<li>how to use JavaScript in HTML</li>
<li>data types</li>
<li>variables</li>
<li>comments</li>
<li>functions</li>
</ul>
<h2 id="howtousejavascriptinhtml">How to Use JavaScript in HTML</h2>
<p>Just like with CSS, JavaScript can be used in HTML in various ways, such as:</p>
<h3 id="1inlinejavascript">1. Inline JavaScript</h3>
<p>Here, you have the JavaScript code in HTML tags in some special JS-based attributes.</p>
<p>For example, HTML tags have <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers">event attributes</a> that allow you to execute some code inline when an event is triggered. Here's what I mean:</p>
<pre><code class="language-html">&lt;button onclick="alert('You just clicked a button')"&gt;Click me!&lt;/button&gt;
</code></pre>
<p>This is an example of inline JavaScript. The value of <code>onclick</code> can be some Match calculation, a dynamic addition to the DOM – any syntax-valid JavaScript code.</p>
<h3 id="2internaljavascriptwiththescripttag">2. Internal JavaScript, with the <code>script</code> tag</h3>
<p>Just like the <code>style</code> tag for style declarations within an HTML page, the <code>script</code> tag exists for JavaScript. Here's how it's used:</p>
<pre><code class="language-html">&lt;script&gt;
function(){
alert("I am inside a script tag")
}
&lt;/script&gt;
</code></pre>
<h3 id="3externaljavascript">3. External JavaScript</h3>
<p>You may want to have your JavaScript code in a different file. External JavaScript allows this. For such uses-cases, here's how it's done:</p>
<pre><code class="language-html">&lt;!-- index.html --&gt;
&lt;script src="./script.js"&gt;&lt;/script&gt;
</code></pre>
<pre><code class="language-js">// script.js
alert("I am inside an external file");
</code></pre>
<p>The <code>src</code> attribute of the <code>script</code> tag allows you to apply a source for the JavaScript code. That reference is important because it notifies the browser to also fetch the content of <code>script.js</code>.</p>
<p><code>script.js</code> can be in the same directory with <code>index.html</code>, or it can be gotten from another website. For the latter, you'll need to pass the full URL (<code>https://.../script.js</code>).</p>
<p>Notice the <code>.js</code> extension? That's the extension for JavaScript files, just like HTML has <code>.html</code>.</p>
<p>Now that we've looked at ways to apply JavaScript to our HTML, let's look at some of the features of JavaScript.</p>
<h2 id="datatypesinjavascript">Data Types in JavaScript</h2>
<p>In JavaScript, data has to be of one type or another. JavaScript needs to know this so that it knows how to use it with other data or how to operate on such data.</p>
<p>Here are the basic data types that JavaScript supports:</p>
<ul>
<li>Number (for example, <code>6</code>, <code>7</code>, <code>8.9</code>): on which you can apply arithmetic operations (like addition) and many more</li>
<li>String (like <code>"javascript"</code>, <code>'a long sentence'</code>, <code>a short paragraph</code>): anything found between single quotes (<code>'...'</code>), double quotes (<code>"..."</code>) and backticks (<code>...</code>). There's no difference between single and double quotes, but backticks have more features, such as:
<ul>
<li>interpolating variables in strings, like so: <code>My name is ${name}</code>. <code>name</code> here is a variable, injected into the string.</li>
<li>multiline strings. With normal quotes, you'd need to add escape characters like <code>\n</code> for a newline, but backticks allow you to continue your string on another line, like so:</li>
</ul>
</li>
</ul>
<pre><code class="language-js">let str = `I am a
multiline string`;
</code></pre>
<ul>
<li>Boolean (can only be of two values: <code>true</code> or <code>false</code>): more like yes (<code>true</code>) or no (<code>false</code>)</li>
<li>Array (for example, <code>[1, 2, "hello", false]</code>): a group of data (which can be of any type, including arrays) separated by a comma. Indexing starts from 0. Accessing the content of such a group can be like so: <code>array[0]</code>, which for this example will return <code>1</code>, since it's the first item.</li>
<li>Object (for example <code>{name: 'javascript', age: 5}</code>): also a group of data but in the form of a <code>key:value</code> pair. The <code>key</code> has to be a string, and the value can be any type including another object. Accessing the content of the group is done with the key, for example <code>obj.age</code> or <code>obj["age"]</code> will return <code>5.</code></li>
<li>Undefined (the only data this type supports is <code>undefined</code>): This data can be assigned to a variable explicitly, or implicitly (by JavaScript) if a variable has been declared but not assigned a value. Later in this article, we'll look at variable declaration and value assignment.</li>
<li>Null (the only data this type supports is <code>null</code>): Null means there is no value. It holds a value, but not a real value – rather, null.</li>
<li>Function (for example, <code>function(){ console.log("function") }</code>): A function is a data type that invokes a block of code when called. More on functions later in this article.</li>
</ul>
<p>JavaScript data types can be a bit complicated to understand. You may have heard that arrays and functions are also objects, and that's true.</p>
<p>Understanding this involves understanding <a href="https://dillionmegida.com/p/understanding-the-prototype-chain-in-javascript/">the nature of JavaScript prototypes</a>. But, at the basic level, these are the data types you need to know first in JavaScript.</p>
<h2 id="variablesinjavascript">Variables in JavaScript</h2>
<p>Variables are containers for values of any data type. They hold values such that when the variables are used, JavaScript uses the value they represent for that operation.</p>
<p>Variables can be declared and can be assigned a value. When you declare a variable, you're doing this:</p>
<pre><code class="language-js">let name;
</code></pre>
<p>For the above, <code>name</code> has been declared, but it doesn't have a value yet.</p>
<p>As you'd expect from the data types section, JavaScript automatically assigns a value of <code>undefined</code> to <code>name</code>. So if you try to use <code>name</code> anywhere, <code>undefined</code> will be used for that operation.</p>
<p>Here's what it means to assign a value to a variable:</p>
<pre><code class="language-js">let name;
name = "JavaScript";
</code></pre>
<p>Now if you use <code>name</code>, it will represent <code>JavaScript</code>.</p>
<p>Declarations and assignments can be done on one line like so:</p>
<pre><code class="language-js">let name = "JavaScript";
</code></pre>
<p>Why <code>let</code>? you may have asked yourself, and here's why: JavaScript supports three methods of variable declarations, which are:</p>
<ul>
<li>the <code>var</code> operator: this has been with JavaScript since its inception. You can declare variables and assign values to them which can be changed later in the code. Here's what I mean:</li>
</ul>
<pre><code class="language-js">var name = "JavaScript";
name = "Language";
</code></pre>
<ul>
<li>the <code>let</code> operator: this is also very similar to <code>var</code> – it declares and assigns values to variables that can be changed later in the code. The major difference between these operators is that <code>var</code> hoists such variables, while <code>let</code> does not hoist. The concept of hoisting can be explained briefly with the following code:</li>
</ul>
<pre><code class="language-js">function print() {
console.log(name);
console.log(age);
var name = "JavaScript";
let age = 5;
}
print();
</code></pre>
<p>On calling the <code>print</code> function (<code>print()</code>), the first <code>console.log</code> prints <code>undefined</code> while the second <code>console.log</code> throws an error that it "Cannot access <code>age</code> before initialization".</p>
<p>This is because the <code>name</code> variable's declaration is hoisted (raised) to the top of the function and the assignment for the variable stays at the same line while the <code>age</code> declaration and assignment stays at the same line.</p>
<p>Here's how the above code is compiled:</p>
<pre><code class="language-js">function print() {
var name;
console.log(name);
console.log(age);
name = "JavaScript";
let age = 5;
}
print();
</code></pre>
<p>Hoist problems can happen unexpectedly, and that's why you should use <code>let</code> instead of <code>var</code>.</p>
<ul>
<li>the <code>const</code> operator: this also does not hoist variables, but it does one more thing: it ensures that a variable cannot be assigned another value other than what it was assigned during initialization.</li>
</ul>
<p>For example:</p>
<pre><code class="language-js">let name = "JavaScript"
name = "Language" // no errors
const age = 5
age = 6 // error, cannot reassign variable
</code></pre>
<h2 id="commentsinjavascript">Comments in JavaScript</h2>
<p>Just like HTML, sometimes we may want to put a note beside our code which does not need to be executed.</p>
<p>We can do this in JavaScript in two ways:</p>
<ul>
<li>with single-line comments, like this: <code>// a single line comment</code></li>
<li>or with multi-line comments, like this:</li>
</ul>
<pre><code class="language-js">/*
a multi
line comment
*/
</code></pre>
<h2 id="functionsinjavascript">Functions in JavaScript</h2>
<p>With functions, you can store a block of code that can be used in other places in your code. Say you wanted to print "JavaScript" and "Language" at different places in your code. Instead of doing this:</p>
<pre><code class="language-js">console.log("JavaScript")
console.log("Language")
// some things here
console.log("JavaScript")
console.log("Language")
// more things here
console.log("JavaScript")
console.log("Language")
</code></pre>
<p>You can do this:</p>
<pre><code class="language-js">function print() {
console.log("JavaScript")
console.log("Language")
}
print()
// some things here
print()
// more things here
print()
</code></pre>
<p>This way, we've stored the repeated code block in a function that can be used wherever we want. But that's not all. Say we wanted to find the average of three numbers. The code for this would be:</p>
<pre><code class="language-js">let num1 = 5
let num2 = 6
let num3 = 8
let average = (num1 + num2 + num3) / 3
</code></pre>
<p>Doing this outside of a function may not hurt, but if we had to do that in many places? Then, we'd have a function like so:</p>
<pre><code class="language-js">function findAverage(n1, n2, n3) {
let aver = (n1 + n2 + n3) / 3
return aver
}
let num1 = 5
let num2 = 6
let num3 = 8
let average = findAverage(num1, num2, num3)
// later on, somewhere else
let average2 = findAverage(...)
// later on, somewhere else
let average3 = findAverage(...)
</code></pre>
<p>As you'll notice in <code>findAverage</code>'s declaration, we have <code>n1, n2, n3</code> in the parentheses. These are parameters, which serve as <strong>placeholders</strong> for values that would be provided when the function is to be called.</p>
<p>The code block uses those placeholders to find the average, and the <code>return</code> keyword returns the average from the function.</p>
<p>Placeholders make your functions reusable such that different values at different times can be passed to the functions to use the same logic.</p>
<h2 id="conclusion">Conclusion</h2>
<p>JavaScript has many more features we could discuss, but I hope this article has given you a clear starting point to go further. Now you should know what the language is and how you can use it on the web.</p>
<p>In this article, we've looked at how to add JavaScript code to our HTML files, the different types of data that JavaScript supports, variables that serve as containers for values, how to write comments in JavaScript, and a little bit about how to declare and use functions.</p>
<p>There are so many places to go from here, but I'd recommend learning about <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction">The DOM and how JavaScript interacts with it</a> next.</p>
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
