---
card: "/images/default.jpg"
tags: [JavaScript]
description: JavaScript's this keyword is one of the hardest aspects of th
author: "Milad E. Fahmy"
title: "The JavaScript `this` Keyword + 5 Key Binding Rules Explained for JS Beginners"
created: "2021-08-15T19:28:12+02:00"
modified: "2021-08-15T19:28:12+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">The JavaScript `this` Keyword + 5 Key Binding Rules Explained for JS Beginners</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/10/cover_freecodecamp.png 300w,
/news/content/images/size/w600/2020/10/cover_freecodecamp.png 600w,
/news/content/images/size/w1000/2020/10/cover_freecodecamp.png 1000w,
/news/content/images/size/w2000/2020/10/cover_freecodecamp.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/10/cover_freecodecamp.png" alt="The JavaScript `this` Keyword + 5 Key Binding Rules Explained for JS Beginners">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>JavaScript's <code>this</code> keyword is one of the hardest aspects of the language to grasp. But it is critically important for writing more advanced JavaScript code.</p>
<p>In JavaScript, the <code>this</code> keyword allows us to:</p>
<ul>
<li>Reuse functions in different execution contexts. It means, a function once defined can be invoked for different objects using the <code>this</code> keyword. </li>
<li>Identifying the object in the current execution context when we invoke a method.</li>
</ul>
<p>The <code>this</code> keyword is very closely associated with JavaScript functions. When it comes to <code>this</code>, the fundamental thing is to understand where a function is invoked. Because we don't know what is in the <code>this</code> keyword until the function is invoked.</p>
<p>The usage of <code>this</code> can be categorized into five different <code>binding</code> aspects. In this article, we will learn about all five aspects with examples.</p>
<h1 id="first-what-is-binding"><strong>First, What is Binding?</strong></h1>
<p>In JavaScript, a <code>Lexical Environment</code> is where your code is physically written. In the example below, the variable name is <code>lexically</code> inside the function <code>sayName()</code>.</p><pre><code class="language-js">function sayName() {
let name = 'someName';
console.log('The name is, ', name);
}</code></pre>
<p>An <code>Execution Context</code> refers to the code that is currently running and everything else that helps run it. There can be lots of lexical environments available but the one that's <em><em>currently</em></em> running is managed by the <em><em><a href="https://blog.greenroots.info/understanding-javascript-execution-context-like-never-before-ckb8x246k00f56hs1nefzpysq">Execution Context</a></em></em>.</p>
<figcaption><em>Lexical Environment vs Execution Context</em></figcaption>
</figure>
<p>Each of the Execution Context contains an <code>Environment Record</code>. As JavaScript engine executes the code, variables and function names gets added to the Environment Record. </p>
<p>This phenomenon is known as <code>Binding</code> in JavaScript. <code>Binding</code> helps associate the identifiers(variables, function names) with the <code>this</code> keyword for an <code>execution context</code>.</p>
<p>Don't worry if you find this a bit hard to understand now. You will get a better grasp as we proceed.</p>
<h1 id="rule-1-how-javascript-implicit-binding-works">Rule #1: How JavaScript Implicit Binding Works</h1>
<p>Implicit binding covers most of the use-cases for dealing with the <code>this</code> keyword.</p>
<p>In implicit binding, you need to check what's to the <em><em>left of the dot(.) operator adjacent to a function</em></em> at invocation time. This determines what <code>this</code> is binding to.</p>
<p>Let's look at an example to understand it better.</p><pre><code class="language-js">let user = {
name: 'Tapas',
address: 'freecodecamp',
getName: function() {
console.log(this.name);
}
};
user.getName();</code></pre>
<p>Here <code>this</code> is bound to the user object. We know this because, to the left of the dot(.) operator adjacent to the function <code>getName()</code>, we see the <code>user</code> object. So <code>this.name</code> is going to log <em><em>Tapas</em></em> in the console.</p>
<p>Let's see another example to better understand this concept:</p><pre><code class="language-js">function decorateLogName(obj) {
obj.logName = function() {
console.log(this.name);
}
};
let tom = {
name: 'Tom',
age: 7
};
let jerry = {
name: 'jerry',
age: 3
};
decorateLogName(tom);
decorateLogName(jerry);
tom.logName();
jerry.logName();</code></pre>
<p>In this example, we have two objects, <code>tom</code> and <code>jerry</code>. We have decorated (enhanced) these objects by attaching a method called <code>logName()</code>.</p>
<p>Notice that when we invoke <code>tom.logName()</code>, the <code>tom</code> object is to the left of the dot(.) operator adjacent to the function <code>logName()</code>. So <code>this</code> is bound to the <code>tom</code> object and it logs the value <em><em>tom </em></em>(<code>this.name</code> is equal to tom here). The same applies when <code>jerry.logName()</code> is invoked.</p>
<h1 id="rule-2-how-javascript-explicit-binding-works">Rule #2: How JavaScript Explicit Binding Works</h1>
<p>We have seen that JavaScript creates an environment to execute the code we write. It takes care of the memory creation for variables, functions, objects, and so on in the <em><em>creation phase</em></em>. Finally it executes the code in the <em><em>execution phase</em></em>. This special environment is called the <code>Execution Context</code>.</p>
<p>There can be many such environments (Execution Contexts) in a JavaScript application. Each execution context operates independently from the others.</p>
<p>But at times, we may want to use stuff from one execution context in another. That is where explicit binding comes into play.</p>
<p>In explicit binding, we can call a function with an object when the function is outside of the execution context of the object.</p>
<p>There are three very special methods, <code>call()</code>, <code>apply()</code> and <code>bind()</code> that help us achieve explicit binding.</p>
<h2 id="how-the-javascript-call-method-works">How the JavaScript <code>call()</code> Method Works</h2>
<p>With the <code>call()</code> method, the context with which the function has to be called will be passed as a parameter to the <code>call()</code>. Let us see how it works with an example:</p><pre><code class="language-js">let getName = function() {
console.log(this.name);
}
let user = {
name: 'Tapas',
address: 'Freecodecamp'
};
getName.call(user);</code></pre>
<p>Here the <code>call()</code> method is invoked on a function called <code>getName()</code>. The <code>getName()</code> function just logs <code>this.name</code>. But what is <code>this</code> here? That gets determined by what has been passed to the <code>call()</code> method.</p>
<p>Here, <code>this</code> will bind to the user object because we have passed the user as a parameter to the <code>call()</code> method. So <code>this.name</code> should log the value of the name property of the user object, that is <em><em>Tapas</em></em>.</p>
<p>In the above example, we have passed just one argument to <code>call()</code>. But we can also pass multiple arguments to <code>call()</code>, like this:</p><pre><code class="language-js">let getName = function(hobby1, hobby2) {
console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
}
let user = {
name: 'Tapas',
address: 'Bangalore'
};
let hobbies = ['Swimming', 'Blogging'];
getName.call(user, hobbies[0], hobbies[1]);</code></pre>
<p>Here we have passed multiple arguments to the <code>call()</code> method. The first argument must be the object context with which the function has to be invoked. Other parameters could just be values to use.</p>
<p>Here I am passing <em><em>Swimming</em></em> and <em><em>Blogging</em></em> as two parameters to the <code>getName()</code> function.</p>
<p>Did you notice a pain point here? In case of a <code>call()</code>, the arguments need to be passed one by one – which is not a smart way of doing things! That's where our next method, <code>apply()</code>, comes into the picture.</p>
<h2 id="how-the-javascript-apply-method-works">How the JavaScript <code>apply()</code> Method Works</h2>
<p>This hectic way of passing arguments to the <code>call()</code> method can be solved by another alternate method called <code>apply()</code>. It is exactly the same as <code>call()</code> but allows you to pass the arguments more conveniently. Have a look:</p><pre><code class="language-js">let getName = function(hobby1, hobby2) {
console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
}
let user = {
name: 'Tapas',
address: 'Bangalore'
};
let hobbies = ['Swimming', 'Blogging'];
getName.apply(user, hobbies);</code></pre>
<p>Here we are able to pass an array of arguments, which is much more convenient than passing them one by one.</p>
<p>Tip: When you only have one value argument or no value arguments to pass, use <code>call()</code>. When you have multiple value arguments to pass, use <code>apply()</code>.</p>
<h2 id="how-the-javascript-bind-method-works">How The JavaScript <code>bind()</code> Method Works</h2>
<p>The <code>bind()</code> method is similar to the <code>call()</code> method but with one difference. Unlike the <code>call()</code> method of calling the function directly, <code>bind()</code> returns a brand new function and we can invoke that instead.</p><pre><code class="language-js">let getName = function(hobby1, hobby2) {
console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
}
let user = {
name: 'Tapas',
address: 'Bangalore'
};
let hobbies = ['Swimming', 'Blogging'];
let newFn = getName.bind(user, hobbies[0], hobbies[1]);
newFn();</code></pre>
<p>Here the <code>getName.bind()</code> doesn't invoke the function <code>getName()</code><em><em> </em></em>directly. It returns a new function, <code>newFn</code> and we can invoke it as <code>newFn()</code>.</p>
<h1 id="rule-3-the-javascript-new-binding">Rule #3: The JavaScript <code>new</code> Binding</h1>
<p>A <code>new</code> keyword is used to create an object from the constructor function.</p><pre><code class="language-js">let Cartoon = function(name, character) {
this.name = name;
this.character = character;
this.log = function() {
console.log(this.name +  ' is a ' + this.character);
}
};</code></pre>
<p>You can create objects using the <code>new</code> keyword &nbsp;like this:</p><pre><code class="language-js"> let tom = new Cartoon('Tom', 'Cat');
let jerry = new Cartoon('Jerry', 'Mouse');</code></pre>
<p>When a function is invoked with the <code>new</code> keyword, JavaScript creates an internal <code>this</code> object(like, this = {}) within the function. The newly created <code>this</code> binds to the object being created using the <code>new</code> keyword.</p>
<p>Sounds complex? Ok, let's break it down. Take this line,</p><pre><code class="language-js">let tom = new Cartoon('Tom', 'Cat');</code></pre>
<p>Here the function Cartoon is invoked with the <code>new</code> keyword. So the internally created <code>this</code> will be bound to the new object being created here, which is <em><em>tom</em></em>.</p>
<h1 id="rule-4-javascript-global-object-binding">Rule #4: JavaScript Global Object Binding</h1>
<p>What do you think will be the output of the code below? What is <code>this</code> binding to here?</p><pre><code class="language-js">let sayName = function(name) {
console.log(this.name);
};
window.name = 'Tapas';
sayName();</code></pre>
<p>If the <code>this</code> keyword is not resolved with any of the bindings, <code>implicit</code>, <code>explicit</code> or <code>new</code>, then the <code>this</code> is bound to the <code>window(global)</code> object.</p>
<p>There is one exception though. JavaScript <strong><strong>strict mode</strong></strong> does not allow this default binding.</p><pre><code class="language-js">"use strict";
function myFunction() {
return this;
}</code></pre>
<p>In the above case, <code>this</code> is <code>undefined.</code></p>
<h1 id="rule-5-html-event-element-binding-in-javascript">Rule #5: HTML Event Element Binding in JavaScript</h1>
<p>In HTML event handlers, <code>this</code> binds to the HTML elements that receive the event.</p><pre><code class="language-html">&lt;button onclick="console.log(this)"&gt;Click Me!&lt;/button&gt;</code></pre>
<p>The is the output log in the console when you click on the button:</p><pre><code class="language-shell">"&lt;button onclick='console.log(this)'&gt;Click Me!&lt;/button&gt;"</code></pre>
<p>You can change the button style using the <code>this</code> keyword, like this:</p><pre><code class="language-html">&lt;button onclick="this.style.color='teal'"&gt;Click Me!&lt;/button&gt;</code></pre>
<p>But be mindful when you call a function on the button click and use <code>this</code> inside that function.</p><pre><code class="language-html">&lt;button onclick="changeColor()"&gt;Click Me!&lt;/button&gt;</code></pre>
<p>and the JavaScript:</p><pre><code class="language-js">function changeColor() {
this.style.color='teal';
}</code></pre>
<p>The above code won't work as expected. As we have seen in the Rule 4, here <code>this</code> will be bound to the global object (in the 'non-strict' mode) where there is no <em>style</em> object to set the color.</p>
<h1 id="in-summary">In Summary</h1>
<p>To summarize,</p>
<ul>
<li>In the case of implicit binding, <code>this</code> binds to the object to the left of the dot(.) operator.</li>
<li>In the case of explicit binding, we can call a function with an object when the function is outside of the execution context of the object. The methods <code>call()</code>, <code>apply()</code>, and <code>bind()</code> play a big role here.</li>
<li>When a function is invoked with the <code>new</code> keyword, the <code>this</code> keyword inside the function binds to the new object being constructed.</li>
<li>When the <code>this</code> keyword is not resolved with any of the bindings, <code>implicit</code>, <code>explicit</code> or <code>new</code>, then <code>this</code> is bound to the <code>window(global)</code> object. In JavaScript's strict mode, <code>this</code> will be undefined.</li>
<li>In HTML event handlers, <code>this</code> binds to the HTML elements that receive the event.</li>
</ul>
<p>There is one more case where <code>this</code> behaves differently, such as with <code>ES6 arrow function</code>s. We will take a look at that in a future article.</p>
<p>I hope you found this article insightful. You may also like,</p>
<ul>
<li><a href="https://blog.greenroots.info/javascript-hoisting-internals-ckbuavl6f00dllas14hl9ckq1">JavaScript Hoisting Internals</a></li>
<li><a href="https://blog.greenroots.info/understanding-javascript-execution-context-like-never-before-ckb8x246k00f56hs1nefzpysq">Understanding JavaScript Execution Context like never before</a></li>
<li><a href="https://blog.greenroots.info/javascript-scope-fundamentals-with-tom-and-jerry-ckcq723h4007vkxs18dxa97ae">JavaScript Scope Fundamentals with Tom and Jerry</a></li>
<li><a href="https://blog.greenroots.info/understanding-javascript-closure-with-example-ckd17fci5001iw5s1fju4f8r0">Understanding JavaScript Closure with example</a></li>
</ul>
<p>If this article was useful, please share it so others can read it as well. You can @ me on Twitter (<a href="https://twitter.com/tapasadhikary">@tapasadhikary</a>) with comments, or feel free to follow me.</p>
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
