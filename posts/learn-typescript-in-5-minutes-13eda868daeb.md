---
card: "/images/default.jpg"
tags: [JavaScript]
description: TypeScript is a typed superset of JavaScript, aimed at making
author: "Milad E. Fahmy"
title: "Learn TypeScript in 5 minutes - A tutorial for beginners"
created: "2021-08-15T19:44:10+02:00"
modified: "2021-08-15T19:44:10+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-typescript tag-vuejs tag-reactjs tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">Learn TypeScript in 5 minutes - A tutorial for beginners</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/06/1_2cFbIAg4bow_0pdaBNr7Cw.png 300w,
/news/content/images/size/w600/2019/06/1_2cFbIAg4bow_0pdaBNr7Cw.png 600w,
/news/content/images/size/w1000/2019/06/1_2cFbIAg4bow_0pdaBNr7Cw.png 1000w,
/news/content/images/size/w2000/2019/06/1_2cFbIAg4bow_0pdaBNr7Cw.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/06/1_2cFbIAg4bow_0pdaBNr7Cw.png" alt="Learn TypeScript in 5 minutes - A tutorial for beginners">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<figcaption><a href="https://scrimba.com/p/gintrototypescript?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=gintrototypescript_5_minute_article">Click here to check out the free Scrimba course on TypeScript</a></figcaption>
</figure>
<p>TypeScript is a typed superset of JavaScript, aimed at making the language more scalable and reliable.</p>
<p>It’s open-source and has been maintained by Microsoft since they created it in 2012. However, TypeScript got its initial breakthrough as the core programming language in Angular 2. It’s been continuing to grow ever since, also in the React and Vue communities.</p>
<p>In this tutorial, you’ll learn the basics of TypeScript with the help of practical examples.</p>
<p><strong>We are also about to launch a free 22-part TypeScript course on Scrimba.</strong> <a href="http://eepurl.com/dyqJAj"><strong>Leave your email here if you want early access!</strong></a></p>
<p>Let’s get started.</p>
<h3 id="installing-typescript">Installing TypeScript</h3>
<p>Before we start coding, we need to install TypeScript on our computer. We’ll use <code>npm</code> for this, so just open the terminal and type the following command:</p><pre><code class="language-sh">npm install -g typescript
</code></pre>
<p>Once it is installed, we can verify it by running the command <code>tsc -v</code> which will display the version of the TypeScript installed.</p>
<h3 id="writing-some-code">Writing some code</h3>
<p>Let’s create our first TypeScript file and write some code inside it. Open up your favourite IDE or Text Editor and create a file with the name of <code>first.ts</code> — For TypeScript files, we use the extension<code>.ts</code></p>
<p>For now, we’re just going to write a few lines of plain old JavaScript, as all JavaScript code also is valid TypeScript code:</p><pre><code class="language-js">let a = 5;
let b = 5;
let c = a + b;
console.log(c);
</code></pre>
<p>The next step is to compile our TypeScript into plain JavaScript, as browsers want <code>.js</code> files to read.</p>
<h3 id="compiling-typescript">Compiling TypeScript</h3>
<p>To compile, we’ll run the command of <code>tsc filename.ts</code>, which creates a JavaScript file with the same filename but a different extension, and which we eventually can pass on to our browsers.</p>
<p>So open up the terminal at the location of the file and run the following command:</p><pre><code class="language-sh">tsc first.ts
</code></pre>
<p><strong>Tip</strong>: If you want to compile all the TypeScript files inside any folder, use the command: <code>tsc *.ts</code></p>
<h3 id="data-types">Data types</h3>
<p>TypeScript — as its name suggests — is the typed version of JavaScript. This means we can specify types to different variables at the time of declaration. They will always hold the same type of data in that scope.</p>
<p>Typing is a very useful feature to ensure reliability and scalability. Type checking helps to ensure our code works as expected. Also, it helps in hunting down bugs and errors and properly documenting our code.</p>
<p>The syntax to assign a type to any variable is to write the name of the variable followed by a <code>:</code> sign, and then the name of the type followed by a <code>=</code> sign and the value of the variable.</p>
<p>There are three different types in TypeScript: the <code>any</code> type, the <code>Built-in</code> types, and the <code>User-defined</code> types. Let’s have a look at each of them.</p>
<h4 id="any-type">any type</h4>
<p>The <code>any</code> data type is the superset of all the data types in TypeScript. Giving any variable the type of <code>any</code> is equivalent to opting out of type checking for a variable.</p><pre><code class="language-ts">let myVariable: any = 'This is a string'
</code></pre>
<h4 id="built-in-types">Built-in types</h4>
<p>These are the types which are built in TypeScript. They include <code>number</code>, <code>string</code>, <code>boolean</code>, <code>void</code>, <code>null</code> and <code>undefined</code>.</p><pre><code class="language-ts">let num: number = 5;
let name: string = 'Alex';
let isPresent: boolean = true;
</code></pre>
<h4 id="user-defined-types">User-defined types</h4>
<p>The <code>User-defined</code> types include <code>enum</code>, <code>class</code>, <code>interface</code>, <code>array</code>, and <code>tuple</code>. We will discuss some of these later in this article.</p>
<h3 id="object-oriented-programming">Object-oriented programming</h3>
<p>TypeScript supports all the features of object-oriented programming, such as classes and interfaces. This capability is a huge boost to JavaScript — it has always been struggling with its OOP functionality, especially since developers started using it for large scale applications.</p>
<h4 id="class">Class</h4>
<p>In object-oriented programming, a class is the template of objects. A class defines how an object would look like in terms of that object’s features and functionalities. A class also encapsulates data for the object.</p>
<p>TypeScript has built-in support for classes, which were unsupported by ES5 and earlier versions. This means we can use the <code>class</code> keyword to easily declare one.</p><pre><code class="language-ts">class Car {
// fields
model: String;
doors: Number;
isElectric: Boolean;
constructor(model: String, doors: Number, isElectric: Boolean) {
this.model = model;
this.doors = doors;
this.isElectric = isElectric;
}
displayMake(): void {
console.log(`This car is ${this.model}`);
}
}
</code></pre>
<p>In the above example, we have declared a <code>Car</code> class, along with some of its properties, which we’re initializing in the <code>constructor</code>. We also have a method which would display some message using its property.</p>
<p>Let’s see how we can create a new instance of this class:</p><pre><code class="language-ts">const Prius = new Car('Prius', 4, true);
Prius.displayMake(); // This car is Prius
</code></pre>
<p>To create an object of a class, we use the keyword of <code>new</code> and call the constructor of the class and pass it the properties. Now this object <code>Prius</code> has its own properties of <code>model</code>, <code>doors</code>, and <code>isElectric</code>. The object also can call the method of <code>displayMake</code>, which would have access to the properties of <code>Prius</code>.</p>
<h4 id="interface">Interface</h4>
<p>The concept of interfaces is another powerful feature of TypeScript, which allows you to define the structure of variables. An interface is like a syntactical contract to which an object should conform.</p>
<p>Interfaces are best described through an actual example. So, suppose we have an object of <code>Car</code>:</p><pre><code class="language-ts">const Car = {
model: 'Prius',
make: 'Toyota',
display() =&gt; { console.log('hi'); }
}
</code></pre>
<p>If we look at the object above and try to extract its signature, it would be:</p><pre><code class="language-ts">{
model: String,
make: String,
display(): void
}
</code></pre>
<p>If we want to reuse this signature, we can declare it in the form of an interface. To create an interface, we use the keyword <code>interface</code>.</p><pre><code class="language-ts">interface ICar {
model: String,
make: String,
display(): void
}
const Car: ICar = {
model: 'Prius',
make: 'Toyota',
display() =&gt; { console.log('hi'); }
}
</code></pre>
<p>Here, we’ve declared an interface called <code>ICar</code> , and created an object <code>Car</code>. <code>Car</code> is now binding to the <code>ICar</code> interface, ensuring that the <code>Car</code> object defines all the properties which are in the interface.</p>
<h3 id="conclusion">Conclusion</h3>
<p>So I hope this gave you a quick glimpse into how TypeScript can make your JavaScript more stable and less prone to bugs.</p>
<p>TypeScript is gaining a lot of momentum in the world of web development. There’s also an increasing amount of React developers who are adopting it. TypeScript is definitely something any front-end developer in 2018 should be aware of.</p>
<p>Happy coding :)</p>
<hr>
<p>Thanks for reading! My name is Per Borgen, I'm the co-founder of <a href="https://scrimba.com?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=gintrototypescript_5_minute_article">Scrimba</a> – the easiest way to learn to code. You should check out our <a href="https://scrimba.com/g/gresponsive?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=gintrototypescript_5_minute_article">responsive web design bootcamp</a> if want to learn to build modern website on a professional level.</p>
<figcaption><a href="https://scrimba.com/g/gresponsive?utm_source=freecodecamp.org&amp;utm_medium=referral&amp;utm_campaign=gintrototypescript_5_minute_article">Click here to get to the advanced bootcamp.</a></figcaption>
</figure>
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
