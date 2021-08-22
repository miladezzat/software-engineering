---
card: "/images/default.jpg"
tags: [Typescript]
description: TypeScript has taken the development world by storm. No wonde
author: "Milad E. Fahmy"
title: "Learn TypeScript Basics in this Beginner's Guide"
created: "2021-08-15T19:26:11+02:00"
modified: "2021-08-15T19:26:11+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-typescript tag-javascript tag-beginners-guide ">
<header class="post-full-header">
<h1 class="post-full-title">Learn TypeScript Basics in this Beginner's Guide</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/06/Typescript-Getting-Started.png 300w,
/news/content/images/size/w600/2021/06/Typescript-Getting-Started.png 600w,
/news/content/images/size/w1000/2021/06/Typescript-Getting-Started.png 1000w,
/news/content/images/size/w2000/2021/06/Typescript-Getting-Started.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/06/Typescript-Getting-Started.png" alt="Learn TypeScript Basics in this Beginner's Guide">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>TypeScript has taken the development world by storm. No wonder it has over 15 million weekly downloads on npm. But what is TypeScript, and what do you need to know about it?</p>
<p>In this article, I am going answer those questions. By the end you'll have a grasp of the following:</p>
<ul>
<li>What TypeScript is</li>
<li>Main pillars of TypeScript</li>
<li>Main features of TypeScript</li>
<li>Why you should use TypeScript</li>
<li>TypeScript basics to get you started</li>
</ul>
<p>First, let's address the elephant in the room.</p>
<h2 id="whatistypescript">What is TypeScript?</h2>
<p>TypeScript is a programming language built and maintained by Microsoft.<br>
It is a superset of JavaScript that adds strong type checking and is compiled into plain JavaScript code.</p>
<p>Being a superset means that TypeScript has all the features of JavaScript as well as some additional features.</p>
<p>TypeScript comes with features such as better development-time tooling, static code analysis, compile-time type checking, and code-level documentation.</p>
<p>Don't worry if you have no idea what any of this means. I'll explain all of it in this article.</p>
<p>All these features that come with TypeScript make it the perfect programming language for building large-scale JavaScript applications.</p>
<h2 id="mainpillarsoftypescript">Main pillars of Typescript</h2>
<p>Typescript is built upon three main pillars – namely the language, the compiler, and the language service.</p>
<h3 id="typescriptlanguage">TypeScript Language</h3>
<p>This consists of the syntax, keywords, and type annotations of TypeScript.<br>
TypeScript syntax is similar to but not the same as JavaScript syntax.</p>
<h3 id="typescriptcompiler">TypeScript Compiler</h3>
<p>The compiler is responsible for compiling TypeScript code into JavaScript.<br>
In reality, what happens is not actually compiling but transpiling.</p>
<blockquote>
<p>Compiling means that source code is transformed from a human-readable format to a machine-readable format, whereas transpiling is transforming source code from one human-readable format to another human-readable format.</p>
</blockquote>
<p>The TypeScript compiler is also responsible for erasing any information related to types at compile time.</p>
<p>Types are not valid features in JavaScript. And since TypeScript has to be compiled to plain JavaScript, anything related to types has to be erased before it can become valid JavaScript ready to be executed by the browser.</p>
<p>The Typescript compiler also performs code analysis. It emits errors and warnings if there's reason to do so.</p>
<h3 id="languageservice">Language Service</h3>
<p>The language service is responsible for collecting type information from the source code.</p>
<p>This information can then be used by development tools to provide IntelliSense, type hints, and refactoring alternatives.</p>
<h2 id="mainfeaturesoftypescript">Main Features of TypeScript</h2>
<h3 id="typeannotationsintypescript">Type Annotations in TypeScript</h3>
<p>Type annotation simply means assigning a type to a variable or function.</p>
<pre><code class="language-js">const birthdayGreeter = (name: string, age: number): string =&gt; {
return `Happy birthday ${name}, you are now ${age} years old!`;
};
const birthdayHero = "Jane User";
const age = 22;
console.log(birthdayGreeter(birthdayHero, 22));
</code></pre>
<p>In the above example, we define a function that accepts two parameters <code>name</code> and <code>age</code>. We assign <code>name</code> to the type <em>string</em> <code>age</code> to the type <em>number</em></p>
<p>We can also assign types to the return value of a function. In this case, our function returns a value of the type <em>string</em></p>
<pre><code class="language-js">const birthdayGreeter = (name: string, age: number): string =&gt; { };
Typescript would yield an error if we passed in arguments of different types than ones we expect
</code></pre>
<h3 id="structuraltypingintypescript">Structural Typing in TypeScript</h3>
<p>TypeScript is a structurally typed language meaning that if two elements have corresponding and identical features then they are considered to be of the same type.</p>
<h3 id="typeinferenceintypescript">Type Inference in TypeScript</h3>
<p>The TypeScript compiler can attempt to infer the type information if there is no specific type assigned. This means that TypeScript can assign a type to a variable or function based on its initial values or usage.</p>
<p>Type inference usually happens when you initialize variables, set default values, and determe function return types</p>
<pre><code class="language-js">const platform = 'freeCodeCamp';
const add = (a: number, b: number) =&gt; a + b
</code></pre>
<p>The variable platform in the above example is assigned the type <em>string</em> even though we didn't explicitly do so and the return value of the function <code>add</code> is inferred the type <em>number</em>.</p>
<h3 id="typeerasureintypescript">Type Erasure in TypeScript</h3>
<p>TypeScript removes the type system constructs during compilation:</p>
<p>Input</p>
<pre><code class="language-js">let x: someType;
</code></pre>
<p>Output</p>
<pre><code class="language-js">let x;
</code></pre>
<h2 id="whyusetypescript">Why use TypeScript?</h2>
<h3 id="typecheckingandstaticcodeanalysis">Type checking and static code analysis</h3>
<p>This reduces the overall errors in your code because TS will warn you when you wrongfully use a certain type.</p>
<p>It also reduces runtime errors and because of static code analysis, TypeScript will throw warnings about typos and such. So this means fewer errors which could potentially mean less testing.</p>
<h3 id="typeannotationscanactlikecodedocumentation">Type annotations can act like code documentation</h3>
<p>Type annotations help us to understand what type of arguments a function expects, for example, and what it returns.</p>
<p>This makes code more readable and makes it easier for others and for us to understand what the code is supposed to do.</p>
<p>Another advantage of TypeScript is that IDEs can provide more specific and smarter IntelliSense when they know exactly what types of data you are processing.</p>
<h2 id="howtogetstartedwithtypescript">How to Get Started with TypeScript</h2>
<p>Let's begin by installing the TypeScript package. Here we have two options: we can either install it globally so we can use it on any project in the system, or we can install it to use on the specific project we're working on.</p>
<p>You can install TypeScript globally by running this command:</p>
<pre><code class="language-shell">npm install -g typescript
</code></pre>
<p>If you don't wish to install globally you can just run this:</p>
<pre><code class="language-js">npm install --save-dev typescript
</code></pre>
<p>In the local installation, TypeScript is installed as a dev dependency because we use it for development. It has to first compile to JavaScript before it can be used in production. The browser can't execute TypeScript.</p>
<p>After installing TypeScript, we need to initiate a new project. You can do that by running the following command:</p>
<pre><code class="language-shell">tsc --init
</code></pre>
<p>This command initiates a new <em>tsconfig.json</em> file in the root directory of the project. This config file comes with all the configuration options we have for using TypeScript in a project.</p>
<p><img src="https://www.freecodecamp.org/news/content/images/2021/05/image1-1.png" alt="an example of a tsconfig file"></p>
<p>All the compile options for a particular project can be specified in the tsconfig.json file under the <em>compileOptions</em> key.</p>
<p>The file comes with some config options by default but you can add more options to the project as needed. You can comment out or delete unused compiler options.</p>
<h3 id="builtintypesintypescript">Built-In Types in TypeScript</h3>
<p>Typescript comes built-in with all the primitive types in JavaScript like string, number, and boolean.</p>
<p>The types can then be assigned to variables to specify what data type should be assigned to the variable. This is called type annotation.</p>
<pre><code class="language-js">const myName: string = 'Joel';
const myAge: number = 99;
</code></pre>
<p>TypeScript annotations are not always necessary because TypeScript automatically infers the type of a variable based on its initial value or usage. Therefore the following would also be valid TypeScript code:</p>
<pre><code class="language-js">// myName is inferred type 'string'
const myName = 'Jonathan';
</code></pre>
<h3 id="arraysintypescript">Arrays in TypeScript</h3>
<p>To specify the type of an array you can use the syntax <code>string[]</code> or <code>number[]</code>. This effectively means 'array of strings or array of numbers'.</p>
<p>You'll also see people use the syntax <code>Array&lt;number&gt;</code> or <code>Array&lt;string&gt;</code> which means the same thing.</p>
<h3 id="uniontypesintypescript">Union Types in TypeScript</h3>
<p>Union types allow us to define several types that may be assigned to a variable. For this, we use a pipe | to specify the various types.</p>
<pre><code class="language-js">const someValue: number | string = value;
</code></pre>
<p>By default <code>null | undefined</code> can be assigned to any variable but TypeScript comes with the <em>strictNullChecks</em> compiler option which does not allow assigning both to a variable.</p>
<h3 id="functionsintypescript">Functions in TypeScript</h3>
<p>Functions can also receive type annotations. However, with TypeScript functions, they can only receive the specified parameters. Nothing more nothing less.</p>
<pre><code class="language-js">function introduction(name: string, age: number): string {
return `Hello, my name is ${name} and I'm {age} years old`
}
</code></pre>
<p>Function parameters receive normal type annotation.</p>
<p>TypeScript functions must also specify the return data type. In the case where a function returns nothing, we can use <em>void</em> type as the return data type.</p>
<p>We can also use the <code>?</code> operator to specify <strong>parameters that are optional</strong>. In this case, Typescript won't complain if the parameter is not passed on the function call.</p>
<p>We can also assign default values to parameters just like we would in normal JavaScript.</p>
<pre><code class="language-js">const introduction = (name: string, age: number, job?: string = 'developer'): string =&gt; `Hello, my name is ${name} and I'm ${age} years old. I work as a ${job}`
</code></pre>
<p>Notice that in this example I used the JavaScript <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">arrow function</a> syntax and specified that the job parameter is optional and assigned a default value 'developer' to it.</p>
<h3 id="theanytypeintypescript">The <code>any</code> type in TypeScript</h3>
<p>In TypeScript, every variable whose type cannot be inferred becomes implicitly the type <em>any</em>.</p>
<p>However, <code>any</code> typings are usually considered to be problematic.</p>
<p>Typescript comes with the <em>noImplicitAny</em> compiler option which raises an error when we assign the type <em>any</em> to a variable or expression.</p>
<h3 id="howtocreateyourowntypesintypescript">How to Create Your Own Types in TypeScript</h3>
<p>TypeScript offers a way for us to define and use our own types for inputs. Here we can describe the exact type that is acceptable for a particular input.</p>
<p>We can use the <code>type</code> keyword to define our own types.</p>
<pre><code class="language-js">type Operator = 'multiply' | 'add' | 'divide';
</code></pre>
<p>Now the <code>Operator</code> type can accept either of the values. Notice how we use the OR operator <code>|</code> to create a union type. In this case, any variable assigned the type Operator can accept any of the three values.</p>
<h2 id="typescriptexampleproject">TypeScript Example Project</h2>
<p>Let's now use this knowledge to create a simple calculator program. A user can only enter one of three operations - add, multiply, or divide. If you want to, take a moment and try to attempt this then you come back and follow along.</p>
<p>Hopefully, you tried it on your own. The program may then look something like this:</p>
<pre><code class="language-js">type Operation = 'multiply' | 'add' | 'divide';
const calculator = (a: number, b:number, op: Operation): number =&gt; {
switch(op) {
case 'multiply':
return a * b;
case 'add':
return a + b;
case 'divide':
if (b === 0) return 'Can't divide by 0;
return a / b;
default:
return 'Operation unknow';
}
}
</code></pre>
<p>Try to read the above code and see if you can figure out what is going on.</p>
<p>We can also create custom types using the <code>interface</code> keyword. Interfaces allow us to define the property and type of an object. An interface can have the ability to extend another interface.</p>
<pre><code class="language-js">interface Employee {
name: string,
title: string
}
interface Manager extends Employee {
meeting: (topic: string) =&gt; void
}
</code></pre>
<p>Here we define an interface Employee which has two properties - <code>name</code> and <code>title</code>, both of which are of the type <em>string</em>.</p>
<p>We then use this interface to create another interface <code>Manager</code> which has the same properties as the Employee interface but with a meeting method.</p>
<p>At the outset, I mentioned that Typescript is a structurally typed language. This means that if an element has the same properties as another, they're both of the same types.</p>
<p>The same is true with interfaces. If an object has the properties of an interface then it has the type of the interface. Such an object can have additional properties as long as some properties match those of the interface.</p>
<p>We can now use our defined interface such as:</p>
<pre><code class="language-js">const newEmployee: Employee = {
name: 'Joel',
title: 'FrontEnd Developer'
}
</code></pre>
<p>So far we've seen that we can create our own types using the <em>type</em> and <em>interface</em> keywords. But, what is the difference between the two?</p>
<p>The most notable difference is that defining multiple interfaces with the same name will result in a merged interface. On the other hand, defining multiple types with the same name will result in an error indicating that the name is already declared.</p>
<h2 id="wrappingup">Wrapping Up</h2>
<p>Typescript has a lot of features that can't simply be exhausted in this article. I just highlighted a few of the features that may be helpful to understand in order to get started working with it.</p>
<p>You can learn more about Typescript by reading the <a href="https://www.typescriptlang.org/docs/">documentation</a>.</p>
<p>If you liked this article, consider following me on <a href="https://twitter.com/codingknite">Twitter</a> or connecting with me on <a href="https://linkedin.com/in/codingknite">LinkedIn</a>. I share content about what programming and what am learning. Feel free to get in touch.</p>
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
