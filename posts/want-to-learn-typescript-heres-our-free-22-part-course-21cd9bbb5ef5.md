---
card: "https://www.freecodecamp.org/news/content/images/2019/12/Screenshot-2019-12-04-at-06.35.08.png"
tags: [JavaScript]
description: "Click on the image to go to the Scrimba course"
author: "Milad E. Fahmy"
title: "Learn TypeScript for free with this interactive Scrimba course"
created: "2021-08-16T10:12:34+02:00"
modified: "2021-08-16T10:12:34+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-typescript tag-learn-to-code tag-web-development tag-tech no-image no-image">
<header class="post-full-header">
<h1 class="post-full-title">Learn TypeScript for free with this interactive Scrimba course</h1>
</header>
<section class="post-full-content">
<div class="post-content">
let age: number;
let isMarried: boolean;
</code></pre><p>You can see how we have types attached to all the variables. If we try to put a string value in place of a number type variable, TypeScript will catch it at compile time.</p><h3 id="part-3-multiple-types">Part #3: Multiple types</h3><p>In TypeScript, we keep a single type for a variable but that is not possible every time. So, instead, TypeScript provides us with the<code>any</code> type. This means we can assign multiple types of values to one variable.</p><pre><code class="language-ts">let myVariable: any = 'Hello World';
myVariable = 10;
myVariable = false;
</code></pre><p>Above, we’ve declared <code>myVariable</code> with <code>any</code> type. First we assigned it a string, next a number, and finally a boolean. This is possible because of the <code>any</code> type.</p><h3 id="part-4-sub-types">Part #4: Sub types</h3><p>Sub types are used when we are unaware of the value of the variable. TypeScript provides us with two sub types: <code>null</code> and <code>undefined</code>. This lesson explains when we should use either of those.</p><pre><code class="language-ts">let myVariable: number = undefined;
</code></pre><p>The variable <code>myVariable</code> has been assigned the value of <code>undefined</code> because, at this point in time, we don’t know what it is going to be. We can also use <code>null</code> here.</p><h3 id="part-5-implicit-vs-explicit-typing">Part #5: Implicit vs explicit typing</h3><p>Part 5 talks about the difference between implicit and explicit typing. In the examples above, we saw explicit types where we set the type of the variable. Implicit typing, on other hand, is performed by the compiler without us stating the variable type.</p><pre><code class="language-ts">let myVariable = 'Hello World';
</code></pre><p>In this example, we have not assigned any type to the variable. We can check the type of this variable using the<code>typeof</code> function. This will show that <code>myVariable</code> is of <code>string</code> type because the compiler took care of the typing.</p><h3 id="part-6-checking-types">Part #6: Checking types</h3><p>In this lesson we’ll learn how we can check the type of a variable, and catch any error or perform any operation. It uses an example in which we test if our variable is of type <code>Bear</code> (where <code>Bear</code> is a <code>class</code>). If we want to check the type of our variable, we can use the<code>instanceof</code> method.</p><pre><code class="language-ts">import { Bear } from 'somefile.ts';
let bear = new Bear(3);
if (bear instanceof Bear) {
//perform some operation
}
</code></pre><h3 id="part-7-type-assertions">Part #7: Type assertions</h3><p>Type assertion means we can cast a variable to any particular type, and we tell TypeScript to handle that variable using that type. Let’s try to understand it with an example:</p><pre><code class="language-ts">let variable1: any = 'Hello World';
if ((variable1 as string).length) {
//perform some operation
}
</code></pre><p><code>variable1</code> has the type of <code>any</code> . But, if we want to check its length, it will produce an error until we tell TypeScript to handle it as a string. This lesson explains more details about this concept.</p><h3 id="part-8-arrays">Part #8: Arrays</h3><p>This part of the course explains TypeScript arrays. In JavaScript, when we assign values to an array, we can put in different types of items. But, with TypeScript, we can declare an array with types as well.</p><pre><code class="language-ts">let array1: number[] = [1, 2, 3, 4, 5];
</code></pre><p>In the above example, we declared an array of numbers by assigning it the <code>number</code> type. Now TypeScript will make sure the array contains only numbers.</p><h3 id="part-9-tuples">Part #9: Tuples</h3><p>Sometimes we need to store multiple types of values in one collection. Arrays will not serve in this case. TypeScript gives us the data type of tuples. These are used to store values of multiple types.</p><pre><code class="language-ts">let tuple_name = [10, 'Hello World'];
</code></pre><p>This example shows that we can have data items of number <strong>and</strong> string types in one collection. This lesson explains the concept of tuples in more detail.</p><h3 id="part-10-enums">Part #10: Enums</h3><p>In this lesson, we will learn about enums in TypeScript. Enums are used to define a set of named constants which can be used to document intent or to create a set of different cases.</p><pre><code class="language-ts">**enum** Direction {
Up = "UP",
Down = "DOWN",
Left = "LEFT",
Right = "RIGHT"
}
</code></pre><p>Here is a basic example of how enums are declared, and how different properties are created inside them. The rest of the details are explained in this section of the course.</p><h3 id="part-11-object">Part #11: Object</h3><p>In JavaScript, objects have a pretty major role in how language has been defined and has evolved. This lesson talks about objects in TypeScript — how to declare an object, and which kinds of values can fit inside the object type.</p><h3 id="part-12-parameters">Part #12: Parameters</h3><p>Using TypeScript, we can also assign types to the parameters of a function. In this section of the course, Dylan explains how we can add types to parameters. This is a very useful way to handle errors regarding data type in a function.</p><pre><code class="language-ts">const multiply = (num1: number, num2: number) =&gt; {
return num1 * num2;
}
</code></pre><p>We have declared a function <code>multiply</code> which takes two parameters and returns the value from multiplying them. We added a type of <code>number</code> to both the parameters so that no other value except a number can be passed to them.</p><h3 id="part-13-return-types">Part #13: Return types</h3><p>Like parameters, we can also add type-checking to the return value of a function. This way we can make sure that the return value from a function has an expected type. This part of the course explains the concept in detail.</p><pre><code class="language-ts">const multiply = (num1: number, num2: number): number =&gt; {
return num1 * num2;
}
</code></pre><p>We have added a <code>return</code> type of <code>number</code> to the function. Now, if we return anything except a <code>number</code>, it will show us an error.</p><h3 id="part-14-custom-types">Part #14: Custom types</h3><p>In TypeScript, we can create a custom type using the keyword of <code>type.</code> We can then type-check objects on the basis of that type.</p><pre><code class="language-ts">type person = {firstName: string};
const example3: person = {firstName: 'Dollan'};
</code></pre><p>This feature is almost deprecated in TypeScript, so you should rather use <code>interface</code> or <code>class</code> for this purpose. However, it’s important that you get to know it, as you might come across custom types when you start to dive into TS code.</p><h3 id="part-15-interfaces">Part #15: Interfaces</h3><p>In TypeScript, the core focus is on type-checking which enforces the use of a particular type. Interfaces are a way of naming these types. It’s basically a group of related methods and properties that describe an object. This part of the course explains how to create and use interfaces.</p><pre><code class="language-ts">interface Person {
firstName: string,
lastName: string,
age: number
}
</code></pre><p>In the example above, we have an interface <code>Person</code> which has some typed properties. Note that we don’t initiate data in interfaces, but rather define the types that the parameters will have.</p><h3 id="part-16-barrels">Part #16: Barrels</h3><p>A barrel is a way to rollup exports from multiple modules into a single module. A barrel is, itself, a module, which is exporting multiple modules from one file. This means that a user has to import just one module instead of all the modules separately.</p><pre><code class="language-ts">// Without barrel
import { Foo } from '../demo/foo';
import { Bar } from '../demo/bar';
import { Baz } from '../demo/baz';`
</code></pre><p>Instead of using these multiple lines separately to import these modules, we can create a barrel. The barrel would export all these modules and we import only that barrel.</p><pre><code>// demo/barrel.ts export * from './foo';
// re-export all of its exportsexport * from './bar';
// re-export all of its exportsexport * from './baz';
// re-export all of its exports
</code></pre><p>We can simply create a TypeScript file and export the modules from their respective file. We can then import this barrel wherever we need it.</p><pre><code class="language-ts">import { Foo, Bar, Baz } from '../demo'; // demo/barrel.ts
</code></pre><h3 id="part-17-models">Part #17: Models</h3><p>When using interfaces, we often face a number of problems. For example, interfaces can’t seem to enforce anything coming from the server side, and they can't keep the default value. To solve this issue, we use the concept of models classes. These act as an interface, and also may have default values and methods added to them.</p><h3 id="part-18-intersection-types">Part #18: Intersection types</h3><p>In this section, we’ll talk about intersection types. These are the ways we can use multiple types to a single entity or class. Sometimes we need to use multiple types to map one entity and, at that time, this feature comes in very handy.</p><pre><code class="language-ts">import { FastFood, ItalianFood, HealthyFood} from ‘./interfaces’;
let food1: FastFood | HealthyFood;
let food2: ItalianFood;
let food3: FastFood;
let food4: FastFood &amp; ItalianFood;
</code></pre><p>In the example above, we have three interfaces and we are creating different objects from them. For example, <code>food1</code> is going to be either <code>FastFood</code> <strong>or</strong> <code>HealthyFood</code>. Similarly, <code>food4</code> is going to be <code>FastFood</code> <strong>as well as</strong> <code>ItalianFood</code>.</p><h3 id="part-19-generics">Part #19: Generics</h3><p>In short, generics is a way to create reusable components which can work on a variety of data types rather than a single one.</p><p>The concept of generics is actually not available in JavaScript so far, but is widely used in popular object-oriented languages such as C# or Java. In this lesson, we’ll learn how to use generics in TypeScript, and look at its key benefits.</p><h3 id="part-20-access-modifiers">Part #20: Access modifiers</h3><p>The idea of access modifiers is relatively new in the arena of JavaScript and TypeScript, but they have been available in other object-oriented languages for a long time. Access modifiers control the accessibility of the members of a class.</p><p>In TypeScript, there are two access modifiers: public and private. Every member of a class defaults to public until you declare it otherwise.</p><pre><code class="language-ts">class Customer {
customerId: number;
public companyName: string;
private address: string;
}
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
