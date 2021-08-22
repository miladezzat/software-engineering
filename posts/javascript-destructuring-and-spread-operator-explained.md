---
card: "/images/default.jpg"
tags: [JavaScript]
description: "JavaScript has two awesome data structures that help you write clean and efficient code. But handling them can get messy sometimes."
author: "Milad E. Fahmy"
title: "JavaScript Destructuring and the Spread Operator – Explained with Example Code"
created: "2021-08-15T19:15:52+02:00"
modified: "2021-08-15T19:15:52+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Destructuring and the Spread Operator – Explained with Example Code</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/08/Cheers--1-.png 300w,
/news/content/images/size/w600/2021/08/Cheers--1-.png 600w,
/news/content/images/size/w1000/2021/08/Cheers--1-.png 1000w,
/news/content/images/size/w2000/2021/08/Cheers--1-.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/08/Cheers--1-.png" alt="JavaScript Destructuring and the Spread Operator – Explained with Example Code">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>JavaScript has two awesome data structures that help you write clean and efficient code. But handling them can get messy sometimes.</p>
<p>In this blog, I am going to show you how to handle destructuring in arrays and objects in JavaScript. We'll also learn how to use the spread operator as well.</p>
<p>Let's dive in.</p>
<h2 id="what-is-array-destructuring-in-javascript">What is Array Destructuring in JavaScript?</h2>
<p>Let's say we have an array that contains five numbers, like this:</p>
<figcaption>Array with five numbers</figcaption>
</figure>
<p>To get the elements from the array, we can do something like getting the number according to its indexes:</p>
array1[1];
array1[2];
array1[3];
array1[4];
</code></pre>
<figcaption>Getting the array elements</figcaption>
</figure>
<p>But this method is old and clunky, and there is a better way to do it – using array destructuring. It looks like this:</p>
<figcaption>Using Array Destructuring</figcaption>
</figure>
<p>Both methods above will yield the same result:</p>
<p>Now, we have five elements in the array, and we print those. &nbsp;But what if we want to skip one element in between?</p><pre><code>let [ indexOne, indexTwo, , indexFour, indexFive ] = array1;</code></pre>
<p>Here, we have skipped <code>indexThird</code>, and there's an empty space between indexTwo and indexFour.</p>
console.log(indexOne);
console.log(indexTwo)
console.log(indexFour)
console.log(indexFive)</code></pre>
<figcaption>Skipping the third element</figcaption>
</figure>
<p>You can see that we are not getting the third element because we have set it as empty.</p>
<h2 id="what-is-object-destructuring-in-javascript">What is Object Destructuring in JavaScript?</h2>
<p>This destructuring works well with objects too. Let me give you an example.</p>
name: "Nishant",
age: 24,
salary: 200,
height: '20 meters',
weight: '70 KG'
}</code></pre>
<figcaption>An JavaScript Object</figcaption>
</figure>
<p>Let's say we want the name, salary, and weight from this object to be printed out in the console.</p>
console.log(object.salary)
console.log(object.weight)</code></pre>
<figcaption>Getting the name, salary and weight from the object</figcaption>
</figure>
<p>We can get them using the keys, which are name, salary, and weight.</p>
<p>But this code becomes difficult to understand sometimes. That's when destructuring comes in handy:</p>
console.log(name)
console.log(salary)
console.log(weight)</code></pre>
<figcaption>Destructuring Objects</figcaption>
</figure>
<p>And now, we can just log name, salary, and weight instead of using that old method.</p>
<p>We can also use destructuring to set default values if the value is not present in the object.</p><pre><code>let object = {
name: "Nishant",
age: 24,
height: '20 meters',
weight: '70 KG'
}
let { name, salary, weight } = object;
console.log(name)
console.log(salary)
console.log(weight)</code></pre>
<p>Here, we have name and weight present in the object, but not the salary:</p>
<p>We will get an undefined value for the salary. </p>
<p>To correct that issue, we can set default values when we are destructuring the object.</p>
name: "Nishant",
age: 24,
height: '20 meters',
weight: '70 KG'
}
let { name, salary = 200, weight } = object;
console.log(name)
console.log(salary)
console.log(weight)</code></pre>
<figcaption>Setting default value for Salary</figcaption>
</figure>
<p>You can see that we get 200 as the Salary. This only works when we don't have that key in the object, and we want to set a default value.</p><pre><code>let object = {
name: "Nishant",
age: 24,
salary: 300,
height: '20 meters',
weight: '70 KG'
}
let { name, salary = 200, weight } = object;
console.log(name)
console.log(salary)
console.log(weight)</code></pre>
<p>Add salary in the object, and you will get 300 as the salary.</p>
<h2 id="how-to-use-object-destructuring-with-functions">How to Use Object Destructuring with Functions</h2>
<p>Let's say we have a function that prints all the data in the array to the console.</p>
name: "Nishant",
age: 24,
salary: 300,
height: '20 meters',
weight: '70 KG'
}
function printData(){
}
printData(object)
</code></pre>
<figcaption>Function to print data in the console</figcaption>
</figure>
<p>We are passing the object as a parameter in the function when it gets called:</p><pre><code>let object = {
name: "Nishant",
age: 24,
salary: 300,
height: '20 meters',
weight: '70 KG'
}
function printData(object){
console.log(object)
}
printData(object)</code></pre>
<p>Normally, we would do something like this – passing the object and logging it in the console.</p>
<p>But again, we can do the same using destructuring.</p>
name: "Nishant",
age: 24,
salary: 300,
height: '20 meters',
weight: '70 KG'
}
function printData({name, age, salary, height, weight}){
console.log(name, age, salary, height, weight)
}
printData(object)</code></pre>
<figcaption>Using Destructuring in Functions</figcaption>
</figure>
<p>Here, we are destructuring the object into name, age, salary, height and weight in the function parameters and we print everything on the same line. </p>
<p>You can see how destructuring makes it so much easier to understand.</p>
<figcaption>Printing object data using Destructuring</figcaption>
</figure>
<p>Let's look at one last example. </p>
return [a + b, a * b]
}
let example = sample(2, 5);
console.log(example)</code></pre>
<figcaption>Function to Add and Multiply two numbers</figcaption>
</figure>
<p>We have a function here which accepts two numbers. It returns an array adding them and multiplying them and logs them into the console.</p>
<p>Let's use destructuring here instead.</p>
<p>We can destructure it into addition and multiplication variables like this:</p>
console.log(addition)
console.log(multiplication)</code></pre>
<figcaption>Using Destructuring</figcaption>
</figure>
<p>And in the output, you can see we get the <em>addition </em>and <em>multiplication </em>of both numbers.</p>
<h2 id="what-is-the-spread-operator-in-javascript">What is the Spread Operator in JavaScript?</h2>
<p>Spread means spreading or expanding. And the spread operator in JavaScript is denoted by three dots. </p>
<p>This spread operator has many different uses. Let's see them one by one.</p>
<h3 id="spread-operator-examples">Spread Operator Examples</h3>
<p>Let's say we have two arrays and we want to merge them. </p>
let array2 = [6, 7, 8, 9, 10]
let array3 = array1.concat(array2);
console.log(array3)</code></pre>
<figcaption>Merging two arrays with concat method</figcaption>
</figure>
<p>We are getting the combination of both arrays, which are array1 and array2.</p>
<p>But there is an easier way to do this:</p>
let array2 = [6, 7, 8, 9, 10]
let array3 = [...array1, ...array2]
console.log(array3)</code></pre>
<figcaption>Merging two arrays with Spread Operator</figcaption>
</figure>
<p>In this case, we are using the spread operator to merge both arrays.</p>
<p>And you can see, we will get the same output.</p>
<p>Let's imagine another use case where we have to insert <em>array1</em> between the elements of <em>array2</em>.</p>
<p>For example, we want to insert <em>array2 </em>between the second and third element of <em>array1</em>.</p>
<p> So, how do we do that? We can do something like this:</p>
let array2 = [6, 7, ...array1, 8, 9, 10]
console.log(array2);</code></pre>
<figcaption>Inserting array1 between 7 and 8 of array2</figcaption>
</figure>
<p>And you can see, we get the array1 elements between 7 and 8.</p>
<p>Now, let's merge two objects together using the spread operator.</p>
firstName: "Nishant",
age: 24,
salary: 300,
}
let object2 = {
lastName: "Kumar",
height: '20 meters',
weight: '70 KG'
}</code></pre>
<figcaption>Two objects ready to merge</figcaption>
</figure>
<p>We have two objects here. One contains firstName, age, and salary. The second one contains lastName, height, and weight. </p>
<p>Let's merge them together.</p>
firstName: "Nishant",
age: 24,
salary: 300,
}
let object2 = {
lastName: "Kumar",
height: '20 meters',
weight: '70 KG'
}
let object3 = {...object1, ...object2}
console.log(object3);</code></pre>
<figcaption>Merging the two objects into an third Object</figcaption>
</figure>
<p>We have now merged both objects using the spread operator, and we've logged the value in the console.</p>
<figcaption>Combination of previous objects</figcaption>
</figure>
<p>You can see that we are getting the combination of both objects.</p>
<p>Lastly, we can also copy one array into another using the spread operator. Let me show you how it works:</p>
let array2 = [...array1]
console.log(array2);</code></pre>
<figcaption>Copying array1 into array2</figcaption>
</figure>
<p>Here, we are copying <em>array1</em> into <em>array2</em> using the spread operator.</p>
<p>We are logging <em>array2 </em>in the console, and we are getting the items of <em>array1</em>.</p>
<h2 id="conclusion">Conclusion</h2>
<p>That's all, folks! In this article, we learned about array and object destructuring and the spread operator.</p>
<p>You can also watch my Youtube video on <a href="https://youtu.be/QvQ4o0K9_g0">Array and Object Destructuring and the Spread Operator</a> if you want to supplement your learning.</p>
<blockquote>Happy Learning.</blockquote>
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
