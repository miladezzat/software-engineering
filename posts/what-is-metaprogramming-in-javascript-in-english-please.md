---
card: "/images/default.jpg"
tags: [JavaScript]
description: JavaScript has many useful features that most developers know
author: "Milad E. Fahmy"
title: "What is Metaprogramming in JavaScript? In English, please."
created: "2021-08-15T19:28:07+02:00"
modified: "2021-08-15T19:28:07+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">What is Metaprogramming in JavaScript? In English, please.</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/11/cover_freeCodeCamp.png 300w,
/news/content/images/size/w600/2020/11/cover_freeCodeCamp.png 600w,
/news/content/images/size/w1000/2020/11/cover_freeCodeCamp.png 1000w,
/news/content/images/size/w2000/2020/11/cover_freeCodeCamp.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/11/cover_freeCodeCamp.png" alt="What is Metaprogramming in JavaScript? In English, please.">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>JavaScript has many useful features that most developers know about. At the same time, there are some hidden gems that can solve really challenging problems if you're aware of them.</p>
<p>Metaprogramming in JavaScript is one such concept that many of us may not be familiar with. In this article, we will learn about Metaprogramming and how it's useful to us.</p>
<p>With ES6 (ECMAScript 2015), we have support for the <code>Reflect</code> and <code>Proxy</code> objects that allow us to do Metaprogramming with ease. In this article, we'll learn how to use them with examples.</p>
<h1 id="what-is-metaprogramming"><strong>What is Metaprogramming?</strong></h1>
<p><code>Metaprogramming</code> is nothing less than the <em><em>magic in programming</em></em>! How about writing a program that reads, modifies, analyzes, and even generates a program? Doesn't that sound wizardly and powerful?</p>
<figcaption>Metaprogramming is magic</figcaption>
</figure>
<p>Wikipedia describes Metaprogramming like this:</p>
<blockquote><code>Metaprogramming</code> is a programming technique in which computer programs have the ability to treat other programs as their data. This means that a program can be designed to read, generate, analyze, or transform other programs, and even modify itself while running.</blockquote>
<p>Simply put, Metaprogramming involves writing code that can</p>
<ul>
<li>Generate code</li>
<li>Manipulate language constructs at the run time. This phenomenon is known as <code>Reflective Metaprogramming</code> or <code>Reflection</code>.</li>
</ul>
<h2 id="what-is-reflection-in-metaprogramming"><strong>What is Reflection in Metaprogramming?</strong></h2>
<p><code>Reflection</code> is a branch of Metaprogramming. Reflection has three sub-branches:</p>
<ol>
<li><strong><strong>Introspection</strong></strong>: Code is able to inspect itself. It is used to access the internal properties such that we can get the low-level information of our code.</li>
<li><strong><strong>Self-Modification</strong></strong>: As the name suggests, code is able to modify itself.</li>
<li><strong><strong>Intercession</strong></strong>: The literal meaning of intercession is, acting on behalf of somebody else. In metaprogramming, the intercession does exactly the same using the concepts like, wrapping, trapping, intercepting.</li>
</ol>
<p>ES6 gives us the <code>Reflect</code> object (aka the Reflect API) to achieve <code>Introspection</code>. The <code>Proxy</code> object of ES6 helps us with <code>Intercession</code>. We won't talk too much about &nbsp;<code>Self-Modification</code> as we want to stay away from it as much as possible.</p>
<p>Hang on a second! Just to be clear, Metaprogramming wasn't introduced in ES6. Rather, it has been available in the language from its inception. ES6 just made it a lot easier to use.</p>
<h2 id="pre-es6-era-of-metaprogramming"><strong>Pre-ES6 era of Metaprogramming</strong></h2>
<p>Do you remember <code>eval</code>? Let's have a look at how it was used:</p><pre><code class="language-js">const blog = {
name: 'freeCodeCamp'
}
console.log('Before eval:', blog);
const key = 'author';
const value = 'Tapas';
testEval = () =&gt; eval(`blog.${key} = '${value}'`);
// Call the function
testEval();
console.log('After eval magic:', blog);
</code></pre>
<p>As you may notice, <code>eval</code> helped with additional code generation. In this case, the object <code>blog</code> has been modified with an additional property at execution time.</p><pre><code class="language-shell">Before eval: {name: freeCodeCamp}
After eval magic: {name: "freeCodeCamp", author: "Tapas"}
</code></pre>
<h3 id="introspection"><strong>Introspection</strong></h3>
<p>Before the inclusion of the <code>Reflect object</code> in ES6, we could still do introspection. Here is an example of reading the structure of the program:</p><pre><code class="language-js">var users = {
'Tom': 32,
'Bill': 50,
'Sam': 65
};
Object.keys(users).forEach(name =&gt; {
const age = users[name];
console.log(`User ${name} is ${age} years old!`);
});
</code></pre>
<p>Here we are reading the <code>users</code> object structure and logging the key-value in a sentence.</p><pre><code class="language-shell">User Tom is 32 years old!
User Bill is 50 years old!
User Sam is 65 years old!
</code></pre>
<h3 id="self-modification"><strong>Self Modification</strong></h3>
<p>Let's take a blog object that has a method to modify itself:</p><pre><code class="language-js">var blog = {
name: 'freeCodeCamp',
modifySelf: function(key, value) {blog[key] = value}
}
</code></pre>
<p>The <code>blog</code> object can modify itself by doing this:</p><pre><code class="language-js">blog.modifySelf('author', 'Tapas');
</code></pre>
<h3 id="intercession"><strong>Intercession</strong></h3>
<p><code>Intercession</code> in metaprogramming means acting or changing things on behalf of somebody or something else. The pre-ES6 <code>Object.defineProperty()</code> method can change an object's semantics:</p><pre><code class="language-js">var sun = {};
Object.defineProperty(sun, 'rises', {
value: true,
configurable: false,
writable: false,
enumerable: false
});
console.log('sun rises', sun.rises);
sun.rises = false;
console.log('sun rises', sun.rises);
</code></pre>
<p>Output:</p><pre><code class="language-shell">sun rises true
sun rises true
</code></pre>
<p>As you can see, the <code>sun</code> object was created as a normal object. Then the semantics were been changed so that it is not writable.</p>
<p>Now let's jump into understanding the <code>Reflect</code> and <code>Proxy</code> objects with their respective usages.</p>
<h1 id="the-reflect-api"><strong>The Reflect API</strong></h1>
<p>In ES6, Reflect is a new <code>Global Object</code> (like Math) that provides a number of utility functions. Some of these functions may do exactly the same thing as the methods from <code>Object</code> or <code>Function</code>. &nbsp;</p>
<p>All these functions are Introspection functions where you could query some internal details about the program at the run time.</p>
<p>Here is the list of available methods from the <code>Reflect</code> object. </p><pre><code class="language-js">// Reflect object methods
Reflect.apply()
Reflect.construct()
Reflect.get()
Reflect.has()
Reflect.ownKeys()
Reflect.set()
Reflect.setPrototypeOf()
Reflect.defineProperty()
Reflect.deleteProperty()
Reflect.getOwnPropertyDescriptor()
Reflect.getPrototypeOf()
Reflect.isExtensible()
</code></pre>
<p>But wait, here's a question: Why do we need a new API object when these could just exist already or could be added to <code>Object</code> or <code>Function</code>?</p>
<p>Confused? Let's try to figure this out.</p>
<h3 id="all-in-one-namespace"><strong>All in one namespace</strong></h3>
<p>JavaScript already had support for object reflection. But these APIs were not organized under one namespace. Since ES6 they're now under <code>Reflect</code>.</p>
<p>All the methods of the Reflect object are static in nature. It means, you do not have to instantiate the Reflect object using the <code>new</code> keyword. </p>
<h3 id="simple-to-use"><strong>Simple to use</strong></h3>
<p>The <code>introspection</code> methods of <code>Object</code> throw an exception when they fail to complete the operation. This is an added burden to the consumer (programmer) to handle that exception in the code.</p>
<p>You may prefer to handle it as a <code>boolean(true | false)</code> instead of using exception handling. The Reflect object helps you do that.</p>
<p>Here's an example with Object.defineProperty:</p><pre><code class="language-js"> try {
Object.defineProperty(obj, name, desc);
} catch (e) {
// Handle the exception
}</code></pre>
<p>And with the Reflect API:</p><pre><code class="language-js">if (Reflect.defineProperty(obj, name, desc)) {
// success
} else {
// failure (and far better)
}
</code></pre>
<h3 id="the-impression-of-the-first-class-function"><strong>The impression of the First-Class function</strong></h3>
<p>We can find the existence of a property for an object as (prop in obj). If we need to use it multiple times in our code, we have to create a function by wrapping this code.</p>
<p>In ES6, the Reflect API solves this problem by introducing a first-class function, <code>Reflect.has(obj, prop)</code>.</p>
<p>Let's look at another example: Delete an object property.</p><pre><code class="language-js">const obj = { bar: true, baz: false};
// We define this function
function deleteProperty(object, key) {
delete object[key];
}
deleteProperty(obj, 'bar');
</code></pre>
<p>With the Reflect API:</p><pre><code class="language-js">// With Reflect API
Reflect.deleteProperty(obj, 'bar');
</code></pre>
<h3 id="a-more-reliable-way-of-using-the-apply-method"><strong>A more reliable way of using the apply() method</strong></h3>
<p>The <code>apply()</code> method in ES5 helps calling a function with the context of a <code>this</code> value. We can also pass the arguments as an array.</p><pre><code class="language-js">Function.prototype.apply.call(func, obj, arr);
// or
func.apply(obj, arr);
</code></pre>
<p>This is less reliable because <code>func</code> could be an object that would have defined its own <code>apply</code> method.</p>
<p>In ES6 we have a more reliable and elegant way of solving this:</p><pre><code class="language-js">Reflect.apply(func, obj, arr);
</code></pre>
<p>In this case, we will get a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError"><code>TypeError</code></a> if <code>func</code> is not callable.</p>
<h3 id="helping-other-kinds-of-reflection"><strong>Helping other kinds of reflection</strong></h3>
<p>We<strong><strong> </strong></strong>will see what this means in a bit when we learn about the <code>Proxy</code> object. The Reflect API methods can be used with Proxy in many use cases.</p>
<h1 id="the-proxy-object"><strong>The Proxy Object</strong></h1>
<p>ES6's <code>Proxy</code> object helps in <code>intercession</code>.</p>
<p>As the name suggests, a <code>proxy</code> object helps in acting on the behalf of something. It does this by virtualizing another object. Object virtualization provides custom behaviors to that object. </p>
<p>For example, using the proxy object we can virtualize object property lookup, function invocation, and so on. We will see some of these in detail more detail below.</p>
<p>Here are a few useful terms you need to remember and use:</p>
<ul>
<li>The <code>target</code>: An object that proxy provides custom behaviors to.</li>
<li>The <code>handler</code>: It is an object that contains traps.</li>
<li>The <code>trap</code>: Trap is a method that provide access to the target object's properties. This is achieved using the Reflect API methods. Each of the trap methods are mapped with the methods from the Reflect API.</li>
</ul>
<p>You can imagine it something like this:</p>
<p>A handler with a <code>trap</code> function should be defined. Then we need to create a Proxy object using the handler and the target object. The Proxy object will have all the changes with the custom behaviors applied.</p>
<p>It is perfectly fine if you don't quite understand yet from the description above. We will get a grasp of it through code and examples in a minute.</p>
<p>The syntax to create a Proxy object is as follows:</p><pre><code class="language-js">let proxy = new Proxy(target, handler);
</code></pre>
<p>There are many proxy traps (handler functions) available to access and customize a target object. Here is the list of them.</p><pre><code class="language-js">handler.apply()
handler.construct()
handler.get()
handler.has()
handler.ownKeys()
handler.set()
handler.setPrototypeOf()
handler.getPrototypeOf()
handler.defineProperty()
handler.deleteProperty()
handler.getOwnPropertyDescriptor()
handler.preventExtensions()
handler.isExtensible()
</code></pre>
<p>Note that each of the traps has a mapping with the <code>Reflect</code> object's methods. This means that you can use <code>Reflect</code> and <code>Proxy</code> together in many use cases.</p>
<h2 id="how-to-get-unavailable-object-property-values"><strong>How to get unavailable object property values</strong></h2>
<p>Let's look at an example of an <code>employee</code> object and try to print some of its properties:</p><pre><code class="language-js">const employee = {
firstName: 'Tapas',
lastName: 'Adhikary'
};
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.org);
console.log(employee.fullName);
</code></pre>
<p>The expected output is the following:</p><pre><code class="language-shell">Tapas
Adhikary
undefined
undefined
</code></pre>
<p>Now let's use the Proxy object to add some custom behavior to the <code>employee</code> object.</p>
<h3 id="step-1-create-a-handler-that-uses-a-get-trap"><strong>Step 1: Create a Handler that uses a get trap</strong></h3>
<p>We will use a trap called <code>get</code> which lets us get a property value. Here is our handler:</p><pre><code class="language-js">let handler = {
get: function(target, fieldName) {
if(fieldName === 'fullName' ) {
return `${target.firstName} ${target.lastName}`;
}
return fieldName in target ?
target[fieldName] :
`No such property as, '${fieldName}'!`
}
};
</code></pre>
<p>The above handler helps to create the value for the <code>fullName</code> property. It also adds a better error message when an object property is missing.</p>
<h3 id="step-2-create-a-proxy-object"><strong>Step 2: Create a Proxy Object</strong></h3>
<p>As we have the target <code>employee</code> object and the handler, we will be able to create a Proxy object like this:</p><pre><code class="language-js">let proxy = new Proxy(employee, handler);
</code></pre>
<h3 id="step-3-access-the-properties-on-the-proxy-object"><strong>Step 3: Access the properties on the Proxy object</strong></h3>
<p>Now we can access the employee object properties using the proxy object, like this:</p><pre><code class="language-js">console.log(proxy.firstName);
console.log(proxy.lastName);
console.log(proxy.org);
console.log(proxy.fullName);
</code></pre>
<p>The output will be:</p><pre><code class="language-shell">Tapas
Adhikary
No such property as, 'org'!
Tapas Adhikary
</code></pre>
<p>Notice how we have magically changed things for the <code>employee</code> object!</p>
<h2 id="proxy-for-validation-of-values"><strong>Proxy for Validation of Values</strong></h2>
<p>Let's create a proxy object to validate an integer value.</p>
<h3 id="step-1-create-a-handler-that-uses-a-set-trap"><strong>Step 1: Create a handler that uses a set trap</strong></h3>
<p>The handler looks like this:</p><pre><code class="language-js">const validator = {
set: function(obj, prop, value) {
if (prop === 'age') {
if(!Number.isInteger(value)) {
throw new TypeError('Age is always an Integer, Please Correct it!');
}
if(value &lt; 0) {
throw new TypeError('This is insane, a negative age?');
}
}
}
};
</code></pre>
<h3 id="step-2-create-a-proxy-object-1"><strong>Step 2: Create a Proxy Object</strong></h3>
<p>Create a proxy object like this:</p><pre><code class="language-js">let proxy = new Proxy(employee, validator);
</code></pre>
<h3 id="step-3-assign-a-non-integer-value-to-a-property-say-age"><strong>Step 3: Assign a non-integer value to a property, say, age</strong></h3>
<p>Try doing this:</p><pre><code class="language-js">proxy.age = 'I am testing a blunder'; // string value
</code></pre>
<p>The output will be like this:</p><pre><code class="language-shell">TypeError: Age is always an Integer, Please Correct it!
at Object.set (E:\Projects\KOSS\metaprogramming\js-mtprog\proxy\userSetProxy.js:28:23)
at Object.&lt;anonymous&gt; (E:\Projects\KOSS\metaprogramming\js-mtprog\proxy\userSetProxy.js:40:7)
at Module._compile (module.js:652:30)
at Object.Module._extensions..js (module.js:663:10)
at Module.load (module.js:565:32)
at tryModuleLoad (module.js:505:12)
at Function.Module._load (module.js:497:3)
at Function.Module.runMain (module.js:693:10)
at startup (bootstrap_node.js:188:16)
at bootstrap_node.js:609:3
</code></pre>
<p>Similarly, try doing this:</p><pre><code class="language-js">p.age = -1; // will result in error
</code></pre>
<h2 id="how-to-use-proxy-and-reflect-together"><strong>How to use Proxy and Reflect together</strong></h2>
<p>Here is an example of a handler where we use methods from the Reflect API:</p><pre><code class="language-js">const employee = {
firstName: 'Tapas',
lastName: 'Adhikary'
};
let logHandler = {
get: function(target, fieldName) {
console.log("Log: ", target[fieldName]);
// Use the get method of the Reflect object
return Reflect.get(target, fieldName);
}
};
let func = () =&gt; {
let p = new Proxy(employee, logHandler);
p.firstName;
p.lastName;
};
func();</code></pre>
<h2 id="a-few-more-proxy-use-cases"><strong>A few more Proxy use cases</strong></h2>
<p>There are several other use-cases where this concept can be used.</p>
<ul>
<li>To protect the <em><em>ID</em></em> field of an object from deletion (trap: deleteProperty)</li>
<li>To trace Property Accesses (trap: get, set)</li>
<li>For Data Binding (trap: set)</li>
<li>With revocable references</li>
<li>To manipulate the <code>in</code> operator behavior</li>
</ul>
<p>... and many more.</p>
<h1 id="metaprogramming-pitfalls"><strong>Metaprogramming Pitfalls</strong></h1>
<p>While the concept of <code>Metaprogramming</code> gives us lots of power, the magic of it can go the wrong way sometimes.</p>
<figcaption>Be careful of the other side of the magic</figcaption>
</figure>
<p>Be careful of:</p>
<ul>
<li>Too much <code>magic</code>! Make sure you understand it before you apply it.</li>
<li>Possible performance hits when you're making the impossible possible</li>
<li>Could be seen as counter-debugging.</li>
</ul>
<h1 id="in-summary"><strong>In Summary</strong></h1>
<p>To summarize,</p>
<ul>
<li><code>Reflect</code> and <code>Proxy</code> are great inclusions in JavaScript to help with Metaprogramming.</li>
<li>Lots of complex situations can be handled with their help.</li>
<li>Be aware of the downsides as well.</li>
<li><a href="https://blog.greenroots.info/explain-me-like-i-am-five-what-are-es6-symbols-ckeuz5sb8001qafs14of305dw" rel="nofollow">ES6 Symbols</a> also can be used with your existing classes and objects to change their behavior.</li>
</ul>
<p>I hope you found this article insightful. All the source code used in this article can be found in my <a href="https://github.com/atapas/js-mtprog">GitHub repository</a>.</p>
<p>Please share the article so others can read it as well. You can @ me on Twitter (<a href="https://twitter.com/tapasadhikary" rel="nofollow">@tapasadhikary</a>) with comments, or feel free to follow me.</p>
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
