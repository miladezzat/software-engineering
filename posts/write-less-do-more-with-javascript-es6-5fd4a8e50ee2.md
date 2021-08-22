---
card: "https://cdn-media-1.freecodecamp.org/images/1*_g2EvGpJlt4YKcvsNsta7g.png"
tags: [JavaScript]
description: JavaScript ES6 brings new syntax and new awesome features to
author: "Milad E. Fahmy"
title: "JavaScript ES6 — write less, do more"
created: "2021-08-15T19:46:24+02:00"
modified: "2021-08-15T19:46:24+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-es6 tag-front-end-development tag-tech tag-programming ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript ES6 — write less, do more</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*_g2EvGpJlt4YKcvsNsta7g.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*_g2EvGpJlt4YKcvsNsta7g.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*_g2EvGpJlt4YKcvsNsta7g.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*_g2EvGpJlt4YKcvsNsta7g.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*_g2EvGpJlt4YKcvsNsta7g.png" alt="JavaScript ES6 — write less, do more">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>JavaScript ES6 brings new syntax and new awesome features to make your code more modern and more readable. It allows you to write less code and do more. ES6 introduces us to many great features like arrow functions, template strings, class destruction, Modules… and more. Let’s take a look.</p>
<h3 id="const-and-let">const and let</h3>
<p><code>const</code> is a new keyword in ES6 for declaring variables. <code>const</code> is more powerful than <code>var</code>. Once used, the variable can’t be reassigned. In other words, it’s an <strong>immutable variable </strong>except when it used with objects.</p>
<p>This is really useful for targeting the selectors. For example, when we have a single button that fires an event, or when you want to select an HTML element in JavaScript, use <code>const</code> instead of <code>var</code>. This is because <code>var</code> is ‘hoisted’. It’s always preferable to use <code>const</code> when don’t want to reassign the variable .</p>
<p>In the code above, <code>const</code> will not change and cannot be reassigned. If you try to give it a new value, it will return you an error.</p>
<p><code>let</code> can be reassigned and take new value. It creates a <strong>mutable variable</strong>.</p>
<p><code>let</code> is the same as <code>const</code> in that both are blocked-scope. It means that the variable is only available within its scope.</p>
<h3 id="arrow-functions">Arrow functions</h3>
<p>The arrow function is really awesome, and makes your code more readable, more structured, and look like modern code. Instead of using this:</p>
<p>Use this:</p>
<p>As you see, the arrow function seems more readable and clean! You won’t need to use the old syntax anymore.</p>
<p>Also, you can use Arrow function with <code>map</code>, <code>filter</code>, and <code>reduce</code><strong> </strong>built-in functions.</p>
<p>The map function with arrows looks more clear and readable than <code>map</code> in ES5. With ES6 you can write shorter and smarter code. You can use the same with <code>filter</code> and <code>reduce</code>.</p>
<h3 id="template-literals">Template Literals</h3>
<p>Template literals or template strings are pretty cool. We don’t have to use the plus (+) operator to concatenate strings, or when we want to use a variable inside a string.</p>
<p>The old syntax:</p>
<p>With new ES6 syntax:</p>
<p>So simple! It’s a really huge difference between the old syntax and ES6. When playing with strings, the literal string in ES6 looks more organized and well structured than ES5.</p>
<h3 id="default-parameters"><strong>Default parameters</strong></h3>
<p>When I work in PHP, I usually use default parameters. These allow you to define a parameter in advance.</p>
<p>So, when you forget to write the parameter, it won’t return an undefined error because the parameter is already defined in the default. So when you run your function with a missed parameter, it will take the value of the default parameter <code>t</code>, and it will not return an error!</p>
<p>Look at this example:</p>
<p>The function above returns undefined, because we forgot to give it the second parameter <code>age</code>.</p>
<p>But if we used the default parameter, it won’t return undefined, and it will use its value when we forget to assign a parameter!</p>
<p>As you see, the function returns a value even though we missed the second parameter. Now with the default parameter we can handle the error in advance.</p>
<h3 id="array-and-object-destructing">Array and object destructing</h3>
<p>Destruction makes the assignment of the values of an array or object to the new variable easier.</p>
<p>The old syntax:</p>
<p>With ES6 syntax:</p>
<p>With ES5, we have to assign each value to each variable. With ES6, we just put our values within curly brackets to get any property of the object.</p>
<p>Note:<strong> </strong>if you assign a variable that is not identical to the name of property, it will return undefined. For example, if the name of the property is <code>name</code> and we assign it to a <code>username</code><strong> </strong>variable,<strong> </strong>it will return undefined.</p>
<p>We always have to name the variable the same as the name of the property. But in case we want to rename the variable, we can use the colon <code>:</code> instead.</p>
<p>For the array, we use the same syntax as the object. We have just to replace the curly brackets with square brackets.</p>
<h3 id="import-and-export">Import and export</h3>
<p>Using <code>import</code> and<code> export</code> in your JavaScript application makes it more powerful. They allow you to create separate and reusable components.</p>
<p>If you are familiar with any JavaScript MVC framework, you will see that they use <code>import</code> and <code>export</code> to handle the components most of the time. So how do they really work?</p>
<p>It is simple! <code>export</code> allows you to export a module to be used in another JavaScript component. We use <code>import</code> to import that module to use it in our component.</p>
<p>For example, we have two files. The first is named <code>detailComponent.js</code><strong> </strong>and the second is named<strong> </strong><code>homeComponent.js</code>.</p>
<p>In <code>detailComponent.js</code><strong> </strong>we are going to export the <code>detail</code> function.</p>
<p>And if we want to use this function in <code>homeComponent.js</code>,<strong> </strong>we will just use <code>import</code>.</p>
<p>If we want to import more than one module, we just put them within curly brackets.</p>
<p>So cool, isn’t it?!</p>
<h3 id="promises"><strong>Promises</strong></h3>
<p>Promises are a new feature of ES6. It’s a method to write asynchronous code. It can be used when, for example, we want to fetch data from an API, or when we have a function that takes time to be executed. Promises make it easier to solve the problem, so let’s create our first Promise!</p>
<p>If you log your console, it will return a Promise. So, if we want to execute a function after data is fetched, we will use a Promise. The Promise takes two parameters: <code>resolve</code> and <code>reject</code> to handle an expected error.</p>
<p>Note: the fetch function returns a Promise itself!</p><pre><code>const url='https://jsonplaceholder.typicode.com/posts';</code></pre><pre><code>const getData=(url)=&amp;gt;{return fetch(url);}</code></pre><pre><code>getData(url).then(data=&amp;gt; data.json()).then(result=&gt; console.log(result));</code></pre>
<p>Now if you log your console it will return an array of data.</p>
<h3 id="rest-parameter-and-spread-operator">Rest parameter and Spread operator</h3>
<p><a href="https://developer.mozilla.org/ar/docs/Web/JavaScript/Reference/Functions/rest_parameters" rel="noopener">The rest parameter</a>s are used to get the argument of an array, and return a new array.</p>
<p>The spread operator has the same syntax as the rest parameter, but the spread operator takes the Array itself and not just the arguments. We can use the Spread parameter to get the values of an Array, instead of using a for loop or any other method.</p><pre><code class="language-js">const arr=['said',20,'JavaScript enthusiast','Hi','Said','How are you?'];
const Func=(...anArray)=&gt;{
return anArray;
}
console.log(Func(arr));
//output  ["said", 20, "JavaScript enthusiast", "Hi", "Said", "How are you?"</code></pre>
<h3 id="classes">Classes</h3>
<p>Classes are the core of object oriented programming (OOP). They make your code more secure and encapsulated. Using classes gives your code a nice structure and keeps it oriented.</p>
<p>To create a class, use the <code>class</code> keyword followed by the name of the class with two curly brackets.</p>
<p>Now we can access the <code>class</code> methods and properties using the <code>new</code> keyword.</p><pre><code class="language-js">class myClass{
constructor(name,age){
this.name=name;
this.age=age;
}
}
const Home= new myClass("said",20);
console.log(Home.name)//  said</code></pre>
<p>To inherit from another class, use the <code>extends</code> keyword followed by the name of the class you want to inherit from.</p>
<p>You can learn more about Classes<strong> </strong><a href="https://developer.mozilla.org/ar/docs/Web/JavaScript/Reference/Classes" rel="noopener">here</a>.</p>
<p>ES6 has other amazing features — you can explore them <a href="http://es6-features.org" rel="noopener">here</a>.</p>
<h3 id="conclusion">Conclusion</h3>
<p>I hope you guys found this article useful, and I hope I was able to introduce you some of the ES6 features. If so, subscribe to this <a href="http://eepurl.com/dk9OJL" rel="noopener">mail-list</a> to learn more about Front-end topics. Thanks for your time.</p>
<blockquote>By the way, I’ve recently worked with a strong group of software engineers for one of my mobile applications. The organization was great, and the product was delivered very quickly, much faster than other firms and freelancers I’ve worked with, and I think I can honestly recommend them for other projects out there. Shoot me an email if you want to get in touch — <a href="mailto:said@devsdata.com">said@devsdata.com</a>.</blockquote>
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
