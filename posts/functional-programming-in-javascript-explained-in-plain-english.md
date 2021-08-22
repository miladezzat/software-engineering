---
card: "/images/default.jpg"
tags: [JavaScript]
description: One of the hardest things you have to do in programming is co
author: "Milad E. Fahmy"
title: "Functional Programming in JavaScript Explained in Plain English"
created: "2021-08-15T19:28:23+02:00"
modified: "2021-08-15T19:28:23+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-functional-programming tag-software-development ">
<header class="post-full-header">
<h1 class="post-full-title">Functional Programming in JavaScript Explained in Plain English</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/09/blog1.jpg 300w,
/news/content/images/size/w600/2020/09/blog1.jpg 600w,
/news/content/images/size/w1000/2020/09/blog1.jpg 1000w,
/news/content/images/size/w2000/2020/09/blog1.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/09/blog1.jpg" alt="Functional Programming in JavaScript Explained in Plain English">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>One of the hardest things you have to do in programming is control complexity. Without careful consideration, a program's size and complexity can grow to the point where it confuses even the creator of the program.</p>
<p>In fact, as one author put it:</p>
<blockquote>"The art of programming is the skill of controlling complexity" - Marijn Haverbeke</blockquote>
<p>In this article we will break down a major programming concept. This programming concept can help you keep complexity under control and write better programs.</p>
<p>By the end of this article, you will know what functional programming is, the types of functions there are, the principles of functional programming, and have a deeper understanding of Higher Order functions.</p>
<p>I assume that you already have pre-existing knowledge of the basics of functions. The fundamental concepts of functions will not be covered in this article.</p>
<p>If you want a quick review of functions in JavaScript, then I've written a detailed article <a href="https://dev.to/codingknite/javascript-functions-broken-down-4fgh">here</a>.</p>
<h2 id="what-is-functional-programming">What is Functional Programming?</h2>
<p>Functional programming is a programming paradigm or style of programming that relies heavily on the use of pure and isolated functions.</p>
<p>Just as you might have guessed from the name, the use of functions is the main component of functional programming. But, merely using functions doesn't translate to functional programming.</p>
<p>In functional programming, we use pure functions, which are functions that don't have side effects. I will explain what all of this means.</p>
<p>Before diving deeper into the article, let us understand some of the terminology and types of functions there are.</p>
<h2 id="types-of-functions">Types of Functions</h2>
<p>There are four main types of functions.</p>
<h3 id="first-class-functions">First Class Functions</h3>
<p>In JavaScript all functions are first class functions. That means they can be treated like any other variable.</p>
<p>First class functions are functions that can be assigned as values to variables, returned from other functions, and passed as arguments to other functions.</p>
<p>Consider this example of a function passed to a variable:</p><pre><code class="language-javascript">const helloWorld = () =&gt; {
console.log("Hello, World"); // Hello, World
};
helloWorld();
</code></pre>
<h3 id="callback-functions">Callback Functions</h3>
<p>Callback functions are functions that are passed into other functions as arguments and are called by the function in which they are passed.</p>
<p>Simply, callback functions are functions that we write as arguments in other functions. We can't invoke callback functions. They are invoked when the main function in which they were passed as arguments is called.</p>
<p>Let's look at an example:</p><pre><code class="language-javascript">const testValue = (value, test) =&gt; {
if (test(value)) {
return `${value} passed the test`;
} else
return `${value} did not pass the test`;
};
const checkString = testValue('Twitter',  string  =&gt;  typeof  string === 'string');
checkString; // Twitter passed the test
</code></pre>
<p><code>testValue</code> is a function that accepts a &nbsp;value and a callback function <code>test</code> &nbsp;which returns "value passed the test" if the value returns true when passed into the callback function.</p>
<p>In this case, the callback function is the second argument we passed into the <code>testValue</code> function. It is invoked when the <code>testValue</code> function is called.</p>
<h3 id="higher-order-functions">Higher Order Functions</h3>
<p>Higher order functions are functions that receive other functions as arguments or return a function.</p>
<p>In this article, am going to further elaborate on higher order functions and why they are such a powerful provision. For now, all you need to know is that these types of functions receive other functions as arguments or return functions.</p>
<h3 id="asynchronous-functions">Asynchronous Functions</h3>
<p>Asynchronous functions are functions that don't have a name and cannot be reused. These functions are normally written when we need to carry out something once and in only one place.</p>
<p>A perfect example of an asynchronous function is what we wrote earlier in the article.</p><pre><code class="language-javascript">const checkString = testValue('Twitter',  value  =&gt;  typeof  value === 'string');
checkString;
// Refer to previous code snippet</code></pre>
<p><code>checkString</code> is a variable whose value is a function. We pass two arguments into this function. </p>
<p><code>'Twitter'</code> is the first argument and the second is an asynchronous function. This function has no one name and has only one task: to check whether the given value is a string.</p>
<h2 id="principles-of-functional-programming">Principles of Functional Programming</h2>
<p>Earlier in the article I alluded to the fact that merely using functions does not translate to functional programming.</p>
<p>There are some principles we need to understand if our programs are to qualify for the functional programming standard. Let's look at those.</p>
<h3 id="avoid-mutations-and-side-effects-">Avoid Mutations and Side effects.</h3>
<p>The first principle of functional programming is to avoid changing things. A function should not change anything such as a global variable.</p>
<p>This is very important because changes often lead to bugs. If a function changes a global variable, for example, it might lead to unexpected behavior in all the places where that variable is used.</p>
<p>The second principle is that a function must be pure, meaning it has no side effects. In functional programming, changes that are made are called mutations, and the outcomes are called side effects.</p>
<p>A pure function does neither of the two. A pure function will always have the same output for the same input.</p>
<p>If a function depends on a global variable, that variable should be passed to the function as an argument. This allows us to obtain the same output for the same input.</p>
<p>Here is an example:</p><pre><code class="language-javascript">const legalAgeInTheUS = 21;
const checkLegalStatus = (age, legalAge) =&gt; {
return age &gt;= legalAge ? 'Of legal age.' : 'Not of legal age.';
};
const johnStatus = checkLegalStatus(18, legalAgeInTheUS);
johnStatus; // Not of legal age
legalAgeInTheUS; // 21
</code></pre>
<h3 id="abstraction">Abstraction</h3>
<p>Abstractions hide details and allow us to talk about problems at a higher level without describing all the implementation details of the problem.</p>
<p>We use abstractions in all almost all aspects of our lives, especially in speech.</p>
<p>For example, instead of saying <em>"I'm going to exchange money for a machine that once plugged in displays moving images accompanied with sound"</em>, you are most likely to say <em>"I'm going to buy a television"</em>.</p>
<p>In this case <strong>buy</strong> and <strong>television</strong> are abstractions. These forms of abstractions make speech a lot more easier and reduce the chances of saying the wrong thing.</p>
<p>But you'll agree with me that before using abstract terms like <strong>buy</strong> you need to first understand the meaning of the term and the problem it abstracts.</p>
<p>Functions allow us to achieve something similar. We can create functions for tasks that we are most likely to repeat again and again. Functions allows us to create our own abstractions.</p>
<p>On top of creating our own abstractions, some functions have already been created for us to abstract tasks that we are most likely to do time and again.</p>
<p>So we are going to look at some of these higher order functions that already exist to abstract repetitive tasks.</p>
<h3 id="filtering-arrays">Filtering Arrays</h3>
<p>When working with data structures like arrays, we are most likely to find ourselves in a situation where we are only interested in certain items in the array.</p>
<p>To obtain these items we can easily create a function to do the task:</p><pre><code class="language-javascript">function filterArray(array, test) {
const filteredArray = [];
for (let item of array) {
if (test(item)) {
filteredArray.push(item);
}
}
return filteredArray;
};
const mixedArray = [1, true, null, "Hello", undefined, "World", false];
const onlyStrings = filterArray(mixedArray, item =&gt; typeof item === 'string');
onlyStrings; // ['Hello', 'World']
</code></pre>
<p><code>filterArray</code> is a function that accepts an array and a callback function. It loops through the array and adds the items that pass the test in the callback function into an array called <code>filteredArray</code>.</p>
<p>Using this function we are able to filter an array and return items that we're interested in, such as in the case of <code>mixedArray</code>.</p>
<p>Imagine if we had 10 different programs and in each program we needed to filter an array. Sooner or later it would become extremely tiresome to rewrite the same function over and over again.</p>
<p>Luckily someone already thought about this. Arrays have a standard <code>filter</code> method. It returns a new array with the items in the array it receives that pass the test that we provide.</p><pre><code class="language-javascript">const mixedArray = [1, true, null, "Hello", undefined, "World", false];
const stringArray = mixedArray.filter(item =&gt; typeof item === 'string')
stringArray; // ['Hello', 'World']
</code></pre>
<p>Using the standard filter method we were able to achieve the same results we did when we defined our own function in the previous example. So, the filter method is an abstraction of the first function we wrote.</p>
<h3 id="transforming-array-items-with-map">Transforming Array Items With Map</h3>
<p>Imagine another scenario where we have an array of items but we would like to perform a certain operation on all the items. We can write a function to do this for us:</p><pre><code class="language-javascript">function transformArray(array, test) {
const transformedArray = [];
for (let item of array) {
transformedArray.push(test(item));
}
return transformedArray;
};
const ages = [12, 15, 21, 19, 32];
const doubleAges = transformArray(ages, age =&gt; age * 2);
doubleAges; // [24, 30, 42, 38, 64];
</code></pre>
<p>Just like that we &nbsp;have created a function that loops through any given array and transforms all the items in the array based on the callback function the we provide.</p>
<p>But again this would grow tedious if we had to rewrite the function in 20 different programs.</p>
<p>Again, someone thought about this for us, and luckily arrays have a standard method called <code>map</code> which does the same exact thing. It applies the callback function on all the items in the given array and then it returns a new array.</p><pre><code class="language-javascript">const ages = [12, 15, 21, 19, 32];
const doubleAges = ages.map(age =&gt; age * 2);
doubleAges; // [24, 30, 42, 38, 64];
</code></pre>
<h3 id="reducing-arrays-with-reduce">Reducing Arrays with Reduce</h3>
<p>Here's another scenario: You have an array of numbers, but you would like to compute the sum of all these numbers and return it. Of course you can write a function to do this for you.</p><pre><code class="language-javascript">function reduceArray(array, test, start) {
let sum = start;
for (let item of array) {
sum = test(sum, item)
}
return sum;
}
let numbers = [5, 10, 20];
let doubleNumbers = reduceArray(numbers, (a, b) =&gt; a + b, 0);
doubleNumbers; // 35
</code></pre>
<p>Similar to the previous examples we just looked at, arrays have a standard <code>reduce</code> method that has the same logic as the function we just wrote above.</p>
<p>The reduce method is used to reduce an array to a single value based on the callback function that we provide. It also takes an optional second argument which specifies where we want the operation in the callback to start from.</p>
<p>The callback function we provide in the reduce function has two parameters. The first parameter is the first item in the array by default. Otherwise it is the second argument we provide into the reduce method. The second parameter is the current item in the array.</p><pre><code class="language-javascript">let numbers = [5, 10, 20];
let doubleNumbers = numbers.reduce((a, b) =&gt; a + b, 10);
doubleNumbers;  // 45
//The above example uses the reduce method to add all the items in the array starting from 10.</code></pre>
<h2 id="other-useful-array-methods">Other Useful Array Methods</h2>
<h3 id="array-some-">Array.some()</h3>
<p>All arrays have the <code>some</code> method which accepts a callback function. It returns <code>true</code> if <strong>any</strong> element in the array passes the test given in the callback &nbsp;function. Otherwise it returns <code>false</code>:</p><pre><code class="language-javascript">const numbers = [12, 34, 75, 23, 16, 63]
console.log(numbers.some(item =&gt; item &lt; 100)) // true</code></pre>
<h3 id="array-every-">Array.every()</h3>
<p>The every method is the opposite of the some method. It also accepts a callback function and returns <code>true</code> if <strong>all</strong> the items in the array pass the test given in the callback &nbsp;function. Otherwise it returns <code>false</code>:</p><pre><code class="language-javascript">const numbers = [12, 34, 75, 23, 16, 63]
console.log(numbers.every(item =&gt; item &lt; 100)) // true</code></pre>
<h3 id="array-concat-">Array.concat()</h3>
<p>The <code>concat</code> method, short for concatenate, is a standard array method that concatenates or joins two arrays and returns a new array:</p><pre><code class="language-javascript">const array1 = ['one', 'two', 'three'];
const array2 = ['four', 'five', 'six'];
const array3 = array1.concat(array2);
array3; // [ 'one', 'two', 'three', 'four', 'five', 'six' ]</code></pre>
<h3 id="array-slice-">Array.slice()</h3>
<p>The <code>slice</code> method is an array method which copies the items of an array from a given index and returns a new array with the copied items. The <code>slice</code> method accepts two arguments.</p>
<p>The first argument receives the index from which to begin copying. The second argument receives the index from which to stop copying. It returns a new array with the copied items from the starting index (exclusive) to the final index (inclusive).</p>
<p>Note however that the slice method does not use zero indexing. So the index of the first array item is 1 not 0:</p><pre><code class="language-javascript">const numbers = [1,2,3,4,5,7,8];
console.log(theArray.slice(1, 4)); // [ 2, 3, 4 ]
</code></pre>
<h2 id="conclusion">Conclusion</h2>
<p>I hope you enjoyed reading this article and learned something new at the same time. </p>
<p>There are lots of array and string methods that I didn't mention in the article. If you wish, take some time to do some research on those methods.</p>
<p><em>If you would like to connect with me or to just say hi? feel free to do so via &nbsp;<a href="http://twitter.com/joeepm">Twitter</a> . I also share interesting tips and resources &nbsp;for developers.</em> ?</p>
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
