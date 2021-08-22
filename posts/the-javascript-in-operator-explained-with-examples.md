---
card: "/images/default.jpg"
tags: [JavaScript]
description: One of the first topics you’ll come across when learning Java
author: "Milad E. Fahmy"
title: "The JavaScript `in` Operator Explained With Examples"
created: "2021-08-15T19:29:00+02:00"
modified: "2021-08-15T19:29:00+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">The JavaScript `in` Operator Explained With Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/07/javascript-in-operator.png 300w,
/news/content/images/size/w600/2020/07/javascript-in-operator.png 600w,
/news/content/images/size/w1000/2020/07/javascript-in-operator.png 1000w,
/news/content/images/size/w2000/2020/07/javascript-in-operator.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/07/javascript-in-operator.png" alt="The JavaScript `in` Operator Explained With Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>One of the first topics you’ll come across when learning JavaScript (or any other programming language) are operators. </p>
<p>The most common operators are the arithmetic, logical, and comparison operators. But did you know that JavaScript has an <code>in</code> operator?</p>
<p>If you didn't, don’t fret. I just came across it recently while searching for a solution to a problem on Google. </p>
<p>In this article, you’ll learn exactly what the JavaScript <code>in</code> operator does, when to use it, and how to use it.</p>
<h2 id="what-exactly-is-the-javascript-in-operator">What exactly is the JavaScript in operator?</h2>
<p>The JavaScript <code>in</code> operator is used to check if a specified property exists in an object or in its inherited properties (in other words, its prototype chain). The <code>in</code> operator returns <code>true</code> if the specified property exists.</p>
<figcaption>Anatomy of a simple JavaScript object.</figcaption>
</figure>
<p>The JavaScript prototype chain is how objects or object instances have access to properties and methods that were not originally theirs. These objects inherit properties and methods defined in their constructors or prototypes, which can be accessed through their <code>__proto__</code> property.</p>
<p>This article assumes that you have a basic understanding of what objects are, how to create them, what they are used for, and how JavaScript inheritance works. If you don’t, <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#:~:text=Jump%20to%20section,add%20methods%20to%20existing%20constructors.">this article on MDN</a> should help.</p>
<h2 id="when-to-use-the-javascript-in-operator">When to use the JavaScript in operator</h2>
<h3 id="to-verify-if-a-property-exists-on-an-object">To verify if a property exists on an object</h3><pre><code class="language-js">const car = {
make: 'Toyota',
model:'Camry',
year: '2018',
start: function() {
console.log(`Starting ${this.make} ${this.model}, ${this.year}`);
}
}
'make' in car // Returns true.
'start' in car // Returns true.
'Toyota' in car // Returns false. 'Toyota' is not a property name, but a value.</code></pre>
<h3 id="to-verify-if-a-property-is-inherited-by-an-object-">To verify if a property is inherited by an object.</h3>
<p>Let’s use the ES6 class syntax to create an object constructor. This would also apply to function constructors:</p><pre><code class="language-js">class Car {
constructor(make, model, year) {
this.make = make;
this.model = model;
this.year = year;
}
start() {
console.log(`Starting ${this.make} ${this.model}, ${this.year}`);
}
}
const toyota = new Car('Toyota', 'Camry', '2018');
'start' in toyota;
/* Returns true as toyota is an instance of the Car object constructor. The toyota object therefore inherits all properties of the Car constructor. */
'toString' in toyota;
/* Returns true. toString is a method property of the Object type, of which the Car constructor is an instance of. */</code></pre>
<h3 id="to-verify-if-an-index-key-exists-on-an-array-">To verify if an index/key exists on an array.</h3>
<p>You might be wondering, since we established that the JavaScript <code>in</code> operator can be used with objects, why can we also use it with arrays?</p>
<p>Well, an array is actually a prototype (instance) of the <code>Object</code> type. In fact, everything in JavaScript is an instance of the <code>Object</code> type.</p>
<p>That may sound crazy, but lets run a simple program in the browser's console to confirm.</p>
<p>First, define an array and confirm if its an instance of the <code>Object</code> type using the <code>instanceof</code> operator:</p><pre><code class="language-js">const number = [2, 3, 4, 5];
number instanceof Object // Returns true
</code></pre>
<p>Still in doubt? Type <code>number</code> into the console and press enter, then open up the output. </p>
<p>You’ll notice a list of properties, one of which is <code>__proto__</code> which points to <code>Array</code>. Opening that too and going down that list bring us to another <code>__proto__</code> property with a value of <code>Object</code>.</p>
<p>That shows that the <code>number</code> array is an instance of the <code>Array</code> type which is an instance of the <code>Object</code> type.</p>
<p>Now, back to using the <code>in</code> operator:</p><pre><code class="language-js">const number = [2, 3, 4, 5];
3 in number // Returns true.
2 in number // Returns true.
5 in number // Returns false because 5 is not an existing index on the array but a value;
'filter' in number
/* Returns true because filter is a method property on the Array type of which the number array is an instance of. The number array inherits the filter property.*/</code></pre>
<h3 id="to-verify-if-a-property-exists-on-a-html-element">To verify if a property exists on a Html element</h3>
<p>In Kirupa's article, <a href="https://www.kirupa.com/html5/check_if_you_are_on_a_touch_enabled_device.htm">Check If You Are On a Touch Enabled Device</a>, he highlights this function:</p><pre><code class="language-js">function isTouchSupported() {
var msTouchEnabled = window.navigator.msMaxTouchPoints;
var generalTouchEnabled = "ontouchstart" in document.createElement("div");
if (msTouchEnabled || generalTouchEnabled) {
return true;
}
return false;
}
</code></pre>
<p>This function returns <code>true</code> if you are on a device that supports touch and returns <code>false</code> if you are on a device that doesn't support touch by checking if the properties <code>window.navigator.msMaxTouchPoints</code> and <code>ontouchstart</code> are present. These properties only exist on devices that are touch enabled. </p>
<p>Pretty straightforward! </p>
<p>Lets focus on the highlighted line. Remember how we established that the <code>in</code> operator returns <code>true</code> if the specified property exists in an object? HTML elements used in JavaScript actually become instances of the <code>Object</code> type, hence the name "Document Object Model" or DOM.</p>
<p>Of course, you might not believe me without some sort of proof. As before, let’s type some commands into the console.</p>
<p>Create a <code>div</code> element and list out its properties using <code>console.dir()</code>:</p><pre><code class="language-js">const element = document.createElement('div');
console.dir(element);
</code></pre>
<p>You'll then see the <code>div</code> element with its properties listed in the console.</p>
<p>Open the drop down and you’ll notice that it has a <code>__proto__</code> property of <code>HtmlDivElement</code>. Open that and you’ll find another <code>__proto__</code> property of <code>HtmlElement</code>,<strong> </strong>then <code>Element</code>, <code>Node</code>, <code>Eventtarget</code>, and finally <code>Object</code><strong>. </strong></p>
<p>Also run:</p><pre><code class="language-js">element instanceof Object</code></pre>
<p>This will return <code>true</code>, showing that the <code>div</code> element is an instance of the <code>Object</code> type, which is why the <code>in</code> operator can be used on it.</p>
<h2 id="conclusion">Conclusion</h2>
<p>You’ve learned about the not so popular JavaScript <code>in</code> operator, which is used to verify the presence of properties on an object or <code>Object</code> type instances. This should come in handy when writing verification logic.</p>
<p>If you liked this article, you’ll definitely like other articles on my blog <a href="https://www.codewithlinda.com/blog">codewithlinda.com</a>. There I publish beginner friendly articles on frontend development sans technical jargon (as much as possible) ?.</p>
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
