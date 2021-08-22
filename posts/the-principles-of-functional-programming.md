---
card: "/images/default.jpg"
tags: [Functional Programming]
description: In this post, I will lay down the major principles of Functio
author: "Milad E. Fahmy"
title: "The Principles of Functional Programming"
created: "2021-08-15T19:28:36+02:00"
modified: "2021-08-15T19:28:36+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-functional-programming tag-javascript ">
<header class="post-full-header">
<h1 class="post-full-title">The Principles of Functional Programming</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/08/fp-cover-1.png 300w,
/news/content/images/size/w600/2020/08/fp-cover-1.png 600w,
/news/content/images/size/w1000/2020/08/fp-cover-1.png 1000w,
/news/content/images/size/w2000/2020/08/fp-cover-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/08/fp-cover-1.png" alt="The Principles of Functional Programming">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In this post, I will lay down the major principles of Functional Programming, starting with the basics and then exploring more advanced concepts.</p>
<p>I'll first talk about why you should bother with Functional Programming, that is when it's useful and when it's not.</p>
<p>We will cover a lot of stuff here, so please go at your own pace. Take some breaks and naps between your reading sessions and do the exercises I propose.</p>
<p>Of course, you can skip sections or go back and fourth depending on your needs.</p>
<p>This post intentionally targets several kind of readers:</p>
<ol>
<li>Those who know almost nothing about FP but are pretty familiar with JavaScript</li>
<li>Those with an Intermediate knowledge of FP and some familiarity with the paradigm, but who want a clearer picture of the whole and want to explore advanced concepts</li>
<li>Those who know a lot about FP and want a cheatsheet+ to revisit some concepts if needed</li>
</ol>
<p>I invite you to ponder each sentence carefully instead of rushing through the content like we're all used to.</p>
<p>I hope this post will be an important milestone in your journey into Functional Programming, as well as a source of information to go back to when needed.</p>
<p>Just a heads up, though – this post doesn't constitute a single source of truth but rather an invitation to go further after reading it.</p>
<p>In other words, it's meant to be revisited and expanded with further resources and practice.</p>
<p>I hope to clarify the functional landscape in your mind, spark your interest for what you didn't know, and more importantly, provide useful tools for your day-to-day projects.</p>
<p>Without further ado, let's get started!</p>
<h2 id="why-functional-programming">Why Functional Programming?</h2>
<p>In my opinion, there are 3 major benefits to FP and 3 (little) drawbacks:</p>
<p>Advantages:</p>
<ol>
<li>More readability, thus maintainability</li>
<li>Less buggy, especially in concurrent contexts</li>
<li>A new way of thinking about problem solving</li>
<li>(Personal bonus) Just great to learn about!</li>
</ol>
<p>Drawbacks:</p>
<ol>
<li>Can have performance issues</li>
<li>Less intuitive to work with when dealing with state and I/O</li>
<li>Unfamiliar for most people + math terminology that slows the learning process</li>
</ol>
<p>Now I'll explain why I think that.</p>
<h3 id="increased-readability">Increased Readability</h3>
<p>First, Functional Programming is often more readable because of its <strong>declarative</strong> nature.</p>
<p>In other words, the code is focused on describing the outcome of the computations, not the computations themselves.</p>
<p><a href="https://github.com/getify/Functional-Light-JS/blob/master/manuscript/ch1.md/#chapter-1-why-functional-programming">Kyle Simpson</a> phrases it like this:</p>
<blockquote>Declarative code is code that's more focused on describing the "what" outcome. Imperative code (the opposite) is focused on precisely instructing the computer "how" to do something.</blockquote>
<p>Because we spend the vast majority of our time reading code (around 80% of the time I guess) and not writing it, readability is the first thing we should enhance in order to increase our efficiency when programming.</p>
<p>It's also very likely that you'll return back to a project after several weeks of not touching it, so all the context loaded in your short-term memory will have disappeared.</p>
<p>Thus, understanding your <strong>imperative</strong> code will not be as easy as it was.</p>
<p>The same thing goes for the potential colleagues that work with you on the project.</p>
<p>So readability is a huge advantage for an ever more important purpose: maintainability.</p>
<p>I could stop arguing right there. Increased readability should give you major motivation to learn Functional Programming.</p>
<p>Luckily, that's an advantage that you'll experience more and more as you get familiar with the paradigm.</p>
<p>No need to be an expert. The moment you write a declarative line of code you'll experience it.</p>
<p>Now the second argument.</p>
<h3 id="less-buggy-code">Less buggy code</h3>
<p>Functional programs are less buggy, especially in concurrent contexts.</p>
<p>Because the functional style strives to avoid mutations, shared resources will not have unexpected contents.</p>
<p>For example, imagine that 2 threads access the same variable.</p>
<p>If this variable can be mutated, then, as the programs grow, you'll likely not get what you want when re-accessing it.</p>
<p>In addition, the rise of multiprocessor systems allows multiple threads to execute in parallel.</p>
<p>So now there's also a risk of overlapping (one thread may try to write while the other tries to read).</p>
<p>It's kind of a shame not to leverage the hardware because we're not able to make the software work.</p>
<p>However, JavaScript is single-threaded and my personal experience doesn't expand much beyond it.</p>
<p>Thus, I'm less confident in this argument, but more experienced programmers seem to agree on that fact (for what I've heard/read).</p>
<h3 id="problem-solving">Problem solving</h3>
<p>Finally, the last advantage – and more important than you might think – is that Functional Programming gives you a new way of thinking about problem solving.</p>
<p>You might be so used to solving problems using classes and objects (Object-Oriented Programming) that you don't even think there might be a better way to do so.</p>
<p>I'm not saying that Functional Programming is always better.</p>
<p>I'm saying that it will be better in certain cases and that having this knowledge will (re)open your mind and make you a better programmer.</p>
<p>Because now you'll have more tools and an increased capacity to choose the right one for the problem at hand.</p>
<p>I even think that some core principles in FP can translate to problem solving outside the domain of computers.</p>
<p>Let's see the drawbacks now.</p>
<h3 id="performance-issues">Performance issues</h3>
<p>The first is that, by applying FP techniques, you can end up using a lot of time and/or memory.</p>
<p>Because you don't want to mutate things, the process is basically to copy the data, then mutate that copy and use it as the current state.</p>
<p>This means that the original data is left untouched but you allocate a bunch of time and memory to make the new copy.</p>
<p>So when you make a lot of copies (really big nested objects) or use techniques like recursion (accumulating layers in the callstack), performance issues may appear.</p>
<p>However, many solutions exist (structural sharing, tail-call optimization) which make poor performance very rare.</p>
<h3 id="less-intuitive">Less intuitive</h3>
<p>The second drawback is when you need state or I/O operations.</p>
<p>Well, you're gonna say:</p>
<blockquote>Computers are stateful machines! And eventually I'll need to call my database, or display something on the screen, or write a file.</blockquote>
<p>I totally agree.</p>
<p>The thing is to remember that Functional Programming is a style convenient for humans, but machines make imperative operations (aka mutations) all the time.</p>
<p>That's just how it works at the lowest level.</p>
<p>The computer is in one state at a given moment and it changes all the time.</p>
<p>The point of FP is to ease our reasoning about the code which increases the chances that the messy stuff that comes out of it actually works.</p>
<p>And Functional Reactive Programming helps us deal with state (if you want to learn more, there are links at the end of the post).</p>
<p>Even if imperative code seems easier/more intuitive at first sight, you'll eventually lose track. I'm pretty confident that if you make the initial efforts of learning FP, it will pay off.</p>
<p>For I/O – short for Input/Output, that is code that transfers data to or from a computer and to or from a peripheral device – we can't have pure isolated functions anymore.</p>
<p>To deal with that, we can take a <a href="https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell">Functional Core Imperative Shell</a> approach.</p>
<p>In other words, we want to do as much as we can in a functional way and push back the I/O operations to the outer layer of the program:</p>
<h3 id="steeper-learning-curve">Steeper learning curve</h3>
<p>Finally, the last drawback is that Functional Programming is kind of cluttered with math terminology. This often creates unnecessary friction when developers are trying to learn it.</p>
<p>It's likely because this style of programming first appeared in the academic world and stayed there a long time before emerging and becoming more popular.</p>
<p>However, these technical/unfamiliar terms shouldn't make you neglect the very powerful mathematical principles that underlie them.</p>
<p>All in all, I think the strengths of FP outweigh the weaknesses.</p>
<p>And functional programming makes a lot of sense for the majority of general-purpose JavaScript programming.</p>
<p>Just keep in mind that there are few programs with peculiar requirements for which FP is not a good fit. But if that's not your case, there's no reason not to leverage this paradigm.</p>
<p>Now, if you're a total beginner you might be feeling a bit lost. It's ok – bear with me. The following sections will clarify the concepts I referred to here.</p>
<p>Now let's dive into the nuts and bolts of functional programming.</p>
<h2 id="data-calculations-and-actions">Data, Calculations, and Actions</h2>
<p>In FP, you can break down your program in 3 parts: data, calculations and actions.</p>
<h3 id="data">Data</h3>
<p>The data is, well, the data. In our languages, they have different forms, different types.</p>
<p>In JavaScript you have numbers, strings, arrays, objects, and so on. But at the end of the day, they are just bits.</p>
<p>Data are the building blocks of the program. Having none of it is like having no water in an aquatic park.</p>
<p>Then we can do things with the data: calculations or actions. </p>
<h3 id="calculations">Calculations</h3>
<p>Calculations are mathematical-like transformations of the data. </p>
<p>Functions are a way to create them. You provide it a set of inputs and it returns you a set of outputs.</p>
<p>That's it.</p>
<p>It does nothing outside the function, like in math. The world around the function is not impacted.</p>
<p>In addition, if you feed the function with the same input multiple times, it should always give you the same output.</p>
<p>A common term for this type of function is <strong>pure function</strong>. </p>
<p>Because of its characteristics, its entire behavior is known in advance. In fact, because it just returns a value, we can treat it as that value, as data.</p>
<p>In other words, we could replace the function call by the value it returns and it would not change the state of the program.</p>
<p>This is called <strong>referential transparency</strong>. Thus, they're really easy to reason about, and you can use them as function input or output and assign them to variables.</p>
<p>These kinds of functions are called <strong>first-class</strong> functions. In JavaScript, all functions are first-class.</p>
<p>It's safe to use pure functions because, again, they're like values.</p>
<p>For functions that do more than return a value, you rely on human memory. That's a bad strategy, especially for large software with multiple people working on it.</p>
<p>So you can use <strong>pure functions</strong> as a replacement for <strong>calculations</strong>. They are identical.</p>
<p>Now let's talk about actions.</p>
<h3 id="actions">Actions</h3>
<p>Of course, we also need functions that impact the outside world, that actually do something. Otherwise, your program would be a calculator without screen.</p>
<p>When a function impacts things outside of itself, we say that it has <strong>side-effects</strong>. As opposed to pure functions, it is said to be <strong>impure</strong>.</p>
<p>Common side-effects are assignments/mutations of variables outside the function, logging to the console, making an API call, and so on.</p>
<p>So basically, <strong>actions</strong> and <strong>impure functions</strong> are the same.</p>
<p>Here's a simple example to illustrate these concepts:</p><pre><code class="language-js">
// ↓ variable
//      ↓ data
let a = 3;
// Calculation / Pure function
const double = (x) =&gt; x * 2;
double(a);
// 6
// Action / Impure function
const IncThenPrint = () =&gt; {
// assignment of a variable outside the scope of the function
a = a + 1;
// do something (here printing) outside the function
console.log(a);
};
IncThenPrint();
// console: 4</code></pre>
<h3 id="data-calculations-and-actions-in-functional-programming">Data, calculations, and actions in functional programming</h3>
<p>In FP, the objective is to separate the data, the calculations, and the actions while striving to do most of the job with calculations.</p>
<p>Why? Because actions rely on the outside world. We don't have total control on it.</p>
<p>Thus, we may get unexpected results/behaviors out of it. So if the majority of your program is made of actions, it quickly becomes a mess.</p>
<p>Taking the previous example, what if somewhere else in the program, someone decided to assign an object to the variable <code>a</code> ?</p>
<p>Well, we'll get an unexpected result when running <code>IncThenPrint</code> because it makes no sense to add 1 to an object:</p><pre><code class="language-js">let a = 3;
// ...
a = { key: "value" };
// ...
// Action / Impure function
const IncThenPrint = () =&gt; {
// assignment of a variable outside the scope of the function
a = a + 1;
// do something (here printing) outside the function
console.log(a);
// prints: 4
};
IncThenPrint();
// prints: [object Object]1
// (Because JavaScript is a dynamically-typed language, it converts both operands of the + operator
// to strings so it can perform the operation, thus explaining the result.
// But obviously, that not what was intended.)</code></pre>
<p>The ability to differentiate data, calculations, and actions in your program is a fundamental skill to develop.</p>
<h3 id="mapping">Mapping</h3>
<p>Mapping is a fairly trivial but very important concept in the world of functional programming.</p>
<p>"Mapping from A to B" means going from A to B via some association.</p>
<p>In other words, A points to B by means of some linkage between them.</p>
<p>For example, a pure function maps an input to an output. We can write it like this: input --&gt; output; where the arrow indicates a function.</p>
<p>Another example are objects in JavaScript. They map keys to values.</p>
<p>In other languages, this data structure is often called a "map" or "hash-map", which is more explanatory.</p>
<p>Like the latter term infers, the thing that happens behind the scene is that each key is linked to its value via a <em>hash</em> function. The key is passed to the <em>hash</em> function which returns the index of the corresponding value in the array that stores them all.</p>
<p>Without going into further detail, I wanted to introduce this term because I'll use it throughout this article.</p>
<h3 id="more-on-side-effects">More on side-effects</h3>
<p>Before we move on, I want to go deeper into side-effects in JavaScript and showcase a vicious pitfall that you may not be aware of.</p>
<p>To remind ourselves, saying that a function has side-effects is the same as saying, "When this function runs, something outside of its scope will change."</p>
<p>Like I said, it can be logging to the console, making an API call, changing an outer variable, etc.</p>
<p>Let's see an example of the latter:</p><pre><code class="language-js">let y;
const f = (x) =&gt; {
y = x * x;
};
f(5);
y; // 25</code></pre>
<p>That's pretty easy to grasp.</p>
<p>When <code>f</code> runs, it assigns a new value to the outer variable <code>y</code>, which is a side-effect.</p>
<p>A pure version of this example would be:</p><pre><code class="language-js">const f = (x) =&gt; x * x;
const y = f(5);
// 25</code></pre>
<p>But there's another way to change an outer variable that's more subtle:</p><pre><code class="language-js">let myArr = [1, 2, 3, { key: "value" }, "a string", 4];
const g = (arr) =&gt; {
let total = 0;
for (let i = 0; i &lt; arr.length; i++) {
if (Number.isNaN(Number(arr[i]))) {
arr[i] = 0;
}
total += arr[i];
}
return total;
};
g(myArr);
// 10
myArr;
// [1, 2, 3, 0, 0, 4]
// Oops, all elements that were not numbers have been changed to 0 !</code></pre>
<p>Why is that?</p>
<p>In JavaScript, when assigning a value to a variable or passing it to a function, it's automatically copied.</p>
<p>But there's a distinction to make here.</p>
<p><strong>Primitive values</strong> (<code>null</code>, <code>undefined</code>, strings, numbers, booleans and symbols) are always assigned/passed by <strong>value-copy</strong>.</p>
<p>In contrast, <strong>compound values</strong> like objects, arrays and functions (by the way, arrays and functions are objects in JavaScript, but I don't refer to them as objects for clarity) create a copy by <strong>reference</strong> on assignment or passing.</p>
<p>So in the previous example, the value passed to <code>g</code> is a compound one, the array <code>myArr</code>.</p>
<p>What happens is that <code>g</code> stores the memory address of <code>myArr</code> in <code>arr</code>, the parameter's name used in the function's body.</p>
<p>In other words, there's no value-copy of each elements in <code>myArr</code> like you would expect. Thus, when you manipulate or change <code>arr</code>, it actually goes to <code>myArr</code> memory's location and perform whatever computation you specified.</p>
<p>So yeah, be aware of that quirk.</p>
<h3 id="exercises-set-1-">Exercises (Set 1)</h3>
<ol>
<li>In the snippet below, find the pure functions and the impure ones:</li>
</ol><pre><code class="language-js">// a
const capitalizeFirst = (str) =&gt; str.charAt(0).toUpperCase() + str.slice(1);
// b
const greeting = (persons) =&gt; {
persons.forEach((person) =&gt; {
const fullname = `${capitalizeFirst(person.firstname)} ${capitalizeFirst(
person.lastname
)}`;
console.log(`Hello ${fullname} !`);
});
};
// c
const getLabels = async (endpoint) =&gt; {
const res = await fetch("https://my-database-api/" + endpoint);
const data = await res.json();
return data.labels;
};
// d
const counter = (start, end) =&gt; {
return start === end
? "End"
: // e
() =&gt; counter(start + 1, end);
};</code></pre>
<p>2. Convert this snippet into a pure one (you can make more than one function if you feel the need to):</p><pre><code class="language-js">const people = [
{ firstname: "Bill", lastname: "Harold", age: 54 },
{ firstname: "Ana", lastname: "Atkins", age: 42 },
{ firstname: "John", lastname: "Doe", age: 57 },
{ firstname: "Davy", lastname: "Johnson", age: 34 },
];
const parsePeople = (people) =&gt; {
const parsedPeople = [];
for (let i = 0; i &lt; people.length; i++) {
people[i].firstname = people[i].firstname.toUpperCase();
people[i].lastname = people[i].lastname.toUpperCase();
}
const compareAges = (person1, person2) =&gt; person1.age - person2.age;
return people.sort(compareAges);
};
parsePeople(people);
// [
//   {firstname: "DAVY", lastname: "JOHNSON", age: 34},
//   {firstname: "ANA", lastname: "ATKINS", age: 42},
//   {firstname: "BILL", lastname: "HAROLD", age: 54},
//   {firstname: "JOHN", lastname: "DOE", age: 57},
// ]</code></pre>
<p><a href="/news/the-principles-of-functional-programming/#set-1">Check answers</a>.</p>
<h2 id="immutability">Immutability</h2>
<p>Like we've seen previously, a common side-effect is to mutate a variable.</p>
<p>You don't want to do that in functional programming. So an important characteristic of a functional program is the <strong>immutability</strong> of data.</p>
<p>In functional languages like Clojure and Haskell, this feature is built-in – you have no way to mutate the data unless the language allows it. In any case, you must consciously opt to do so.</p>
<p>But in JavaScript, that's not the case.</p>
<p>So it's more about having the "immutability" mindset than a real robust implementation of this feature.</p>
<p>What this means is that you will basically make copies of the data you want to work on.</p>
<p>In the first section, we saw that JavaScript functions automatically make copies of the arguments passed. While primitive values are copied by value, compound values are only copied by reference, so it's still possible to mutate them.</p>
<p>Thus, when working with an object/array in a function, you should make a copy and then operate on it.</p>
<p>By the way, notice that some built-in functions doesn't mutate the value it's called upon, while others do.</p>
<p>For example, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map">Array.prototype.map</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">Array.prototype.filter</a>, or <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce">Array.prototype.reduce</a> are don't mutate the original array.</p>
<p>On the other hand, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse">Array.prototype.reverse</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push">Array.prototype.push</a> are mutate the original array.</p>
<p>You can find out if a built-in function mutates the value it's called upon or not in the documentation, so check it out if you're not sure.</p>
<p>That's annoying, and ultimately not perfectly safe.</p>
<h3 id="shallow-vs-deep-copies">Shallow vs. deep copies</h3>
<p>Since ES6, it's easy to make object/array copies through spread notation, <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/from"><code>Array.from()</code></a>, <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/assign"><code>Object.assign()</code></a>.</p>
<p>For example:</p><pre><code class="language-js">// arrays
const fruits = ["apple", "strawberry", "banana"];
const fruitsCopy = [...fruits];
fruitsCopy[0] = "mutation";
// fruitsCopy: ['mutation', 'strawberry', 'banana']
// fruits (not mutated): ['apple', 'strawberry', 'banana']
// objects
const obj = { a: 1, b: 2, c: 3 };
const objCopy = { ...obj };
objCopy.a = "mutation";
// objCopy: {a: "mutation", b: 2, c: 3}
// obj (not mutated): {a: 1, b: 2, c: 3}
console.log(obj);
console.log(objCopy);</code></pre>
<p>That's cool but there's a gotcha.</p>
<p>Spread arrays/objects only have there first level copied by value, also known as a <strong>shallow</strong> copy.</p>
<p>So all subsequent levels are still mutable:</p><pre><code class="language-js">// But with nested objects/arrays, that doesn't work
const nestedObj = { a: { b: "canBeMutated" } };
const nestedObjCopy = { ...nestedObj };
nestedObjCopy.a.b = "hasBeenMutated!";
console.log(nestedObj);
console.log(nestedObjCopy);
// nestedObjCopy: {a: {b: "hasBeenMutated!"}}}
// nestedObj (mutated): {a: {b: "hasBeenMutated!"}}</code></pre>
<p>To resolve this problem, we need a custom function to do <strong>deep</strong> copies. This <a href="https://medium.com/javascript-in-plain-english/how-to-deep-copy-objects-and-arrays-in-javascript-7c911359b089">article</a> discusses multiple solutions.</p>
<p>Here's a shortened version of the custom function proposed in it:</p><pre><code class="language-js">// works for arrays and objects
const deepCopy = (obj) =&gt; {
if (typeof obj !== "object" || obj === null) {
return obj; // Return the value if obj is not an object
}
// Create an array or object to hold the values
let newObj = Array.isArray(obj) ? [] : {};
for (let key in obj) {
// Recursively (deep) copy for nested objects, including arrays
newObj[key] = deepCopy(obj[key]);
}
return newObj;
};
const nestedObj = {
lvl1: { lvl2: { lvl3: { lvl4: "tryToMutateMe" } } },
b: ["tryToMutateMe"],
};
const nestedObjCopy = deepCopy(nestedObj);
nestedObjCopy.lvl1.lvl2.lvl3.lvl4 = "mutated";
nestedObjCopy.b[0] = "mutated";
console.log(nestedObj);
// { lvl1: { lvl2: { lvl3: { lvl4: "tryToMutateMe" } } }, b: ["tryToMutateMe"]}
console.log(nestedObjCopy);
// { lvl1: { lvl2: { lvl3: { lvl4: "mutated" } } }, b: ["mutated"]}</code></pre>
<p>If you already use a library that provides functional utilities, it's likely that it has one to do deep copies. I personally like <a href="https://ramdajs.com">Ramda</a>. See its <a href="https://ramdajs.com/docs/#clone">clone</a> function.</p>
<p>If the difference between shallow and deep copies still isn't clear, check <a href="https://medium.com/@manjuladube/understanding-deep-and-shallow-copy-in-javascript-13438bad941c">this</a> out.</p>
<p>Now let's talk about performance.</p>
<p>Obviously, making copies doesn't come without a cost.</p>
<p>For performance-sensitive parts of the program, or in cases where changes happen frequently, creating a new array or object (especially if it contains lots of data) is undesirable for both processing and memory reasons.</p>
<p>In these cases, using immutable data structures from a library like <a href="https://immutable-js.github.io/immutable-js/">Immutable.js</a> is probably a better idea.</p>
<p>They use a technique called <strong>structural sharing </strong>which I referred to when talking about the downsides of FP earlier in this post.</p>
<p>Check out this great <a href="https://www.youtube.com/watch?v=I7IdS-PbEgI&amp;list=PLts8-qGf74Q5QfIkOPGqwO_7d1ljMWa8p&amp;index=22&amp;t=0s">talk</a> to learn more.</p>
<p>Dealing with immutable data is thus, in my opinion, the second skill to have in your functional programmer tool belt.</p>
<h2 id="composition-and-currying">Composition and Currying</h2>
<h3 id="composition">Composition</h3>
<p>Unsurprisingly, the fundamental building blocks of a functional program are functions.</p>
<p>Because your functions are free of side-effects and considered first-class, we can compose them.</p>
<p>Like I said, <em>first-class</em> means that they're treated as regular data structures, possibly being assigned to variables, passed as arguments, or returned from other functions.</p>
<p>Composition is a powerful idea.</p>
<p>From tiny little functions, you can add up their functionalities to form a more complex one, but without the pain of laying it down upfront.</p>
<p>In addition, you get greater flexibility because you can easily rearrange your compositions.</p>
<p>Being backed up by mathematical laws, we know that everything will work if we follow them.</p>
<p>Let's introduce some code to make things concrete:</p><pre><code class="language-js">const map = (fn, arr) =&gt; arr.map(fn);
const first = (xs) =&gt; xs[0];
const formatInitial = (x) =&gt; x.toUpperCase() + ".";
const intercalate = (sep, arr) =&gt; arr.join(sep);
const employees = ["Yann", "Brigitte", "John", "William"];
const initials = intercalate("\n", map(formatInitial, map(first, employees)));
// Y.
// B.
// J.
// W.</code></pre>
<p>Ouch – there's a little bit of nesting here.</p>
<p>Take some time to understand what's going on. As you can see, there are function calls passed as arguments to outer functions.</p>
<p>With the power of <code>map</code>, we essentially composed the functionalities of <code>first</code>, <code>formatInitial</code>, and <code>join</code> to eventually apply them on the <code>employees</code> array.</p>
<p>Pretty cool! </p>
<p>But as you can see, nesting is annoying. It makes things harder to read.</p>
<h3 id="currying">Currying</h3>
<p>To flatten that stuff and make composition a breeze, we have to talk about <strong>currying</strong>.</p>
<p>This term may scare you, but don't worry, it's just jargon for a simple idea: feeding a function one argument at a time.</p>
<p>Usually, when we make a function call, we provide all the arguments at once and get back the result:</p><pre><code class="language-js">const add = (x, y) =&gt; x + y;
add(3, 7);
// 10</code></pre>
<p>But what if we could pass only one argument and provide the second one later?</p>
<p>Well, we can do that by currying <code>add</code> like so:</p><pre><code class="language-js">const add = (x) =&gt; (y) =&gt; x + y;
const addTo3 = add(3);
// (y) =&gt; 3 + y
// ...later
addTo3(7);
// 10</code></pre>
<p>This can be useful if we don't have all the arguments yet.</p>
<p>You might not understand why we wouldn't have all the arguments beforehand, but you'll see later.</p>
<p>Thanks to closures, we're preloading the function with its arguments step-by-step until we eventually run it.</p>
<p>If you have a hard time grasping the concept of closure, check <a href="https://www.youtube.com/watch?v=CQqwU2Ixu-U">this</a>, then <a href="https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch7.md#chapter-7-using-closures">this</a> to go deeper.</p>
<p>In short, closure allows an inner function to access variables of an outer function's scope. That's why we can access <code>x</code> in the scope of <code>addTo3</code> which comes from the outer scope, <code>add</code>.</p>
<p>Often you don't want to bother writing your functions in this special form. In addition, you can't always write them this way, for example, when you use external library functions and virtually anything you don't write but use all the same.</p>
<p>For this reason, there's a common helper to curry a function (<a href="https://github.com/getify/Functional-Light-JS/blob/master/manuscript/ch3.md/#currying-more-than-one-argument">from Kyle Simpson book YDKJS</a>):</p><pre><code class="language-js">const curry = (fn, arity = fn.length) =&gt; {
return (function nextCurried(prevArgs) {
return function curried(...nextArgs) {
const args = [...prevArgs, ...nextArgs];
return args.length &lt; arity ? nextCurried(args) : fn(...args);
};
})([]);
};</code></pre>
<p><code>curry</code> takes a function and a number called <strong>arity</strong> (optional).</p>
<p>The arity of a function is the number of arguments it takes.</p>
<p>In the case of <code>add</code>, it's 2.</p>
<p>We need that information to know when all the arguments are there, and thus decide to run the function or return another curried function that will take the remaining ones.</p>
<p>So let's refactor our example with <code>add</code>:</p><pre><code class="language-js">const add = curry((x, y) =&gt; x + y);
const addTo3 = add(3);
addTo3(7);
// 10</code></pre>
<p>Or we can still call <code>add</code> with all its arguments directly:</p><pre><code class="language-js">const add = curry((x, y) =&gt; x + y);
add(3, 7);
// 10</code></pre>
<h3 id="partial-application">Partial application</h3>
<p>Actually, <em>curried</em> strictly means "takes one argument at a time", no more, no less.</p>
<p>When we can provide the number of arguments we want, we're actually talking about <strong>partial application</strong>.</p>
<p>Thus, currying is a constrained form of partial application.</p>
<p>Let's see a more explicit example of partial application compared to currying:</p><pre><code class="language-js">const listOf4 = curry((a, b, c, d) =&gt; `1. ${a}\n2. ${b}\n3. ${c}\n4. ${d}`);
// strict currying
const a = listOf4("First")("Second")("Third")("Fourth");
// or
const b = listOf4("First");
// later
const c = b("Second")("Third");
// later
const d = c("Fourth");
// partial application
const e = listOf4("First", "Second", "Third", "Fourth");
// or
const b = listOf4("First");
// later
const c = b("Second", "Third");
// later
const d = c("Fourth");</code></pre>
<p>Do you see the difference?</p>
<p>With currying, you should provide one argument at a time. If you want to feed more than one argument, then you need to make a new function call, hence the pair of parentheses around each argument.</p>
<p>Honestly, that's just a matter of style.</p>
<p>It seems a bit awkward when you're not used to it, but on the other hand, some people find the partial application style to be messy.</p>
<p>The <code>curry</code> helper I introduced allows you to do both. </p>
<p>It stretches the real definition of currying, but I prefer to have both functionalities and don't like the name <code>looseCurry</code> that Kyle Simpson used in is book. So, I cheated a little bit.</p>
<p>Just keep the differences in mind and be aware that <code>curry</code> helpers you find in libraries probably follow the strict definition.</p>
<h3 id="data-comes-last">Data comes last</h3>
<p>A final point I want to make is that we usually place the data as the last argument.</p>
<p>With the previous functions I used, it's not obvious because all arguments are data. But take a look at this:</p><pre><code class="language-js">const replace = curry((regex, replacement, str) =&gt;
str.replace(regex, replacement)
);</code></pre>
<p>You can see that the data (<code>str</code>) is in the last position because it's likely to be the last thing we'll want to pass through.</p>
<p>You will see that this is the case when composing functions.</p>
<h3 id="bring-it-all-together">Bring it all together</h3>
<p>Now to take advantage of currying and flatten our nested jumble from before, we also need a helper for composition.</p>
<p>You guessed it, it's called <code>compose</code>!:</p><pre><code class="language-js">const compose = (...fns) =&gt;
fns.reverse().reduce((fn1, fn2) =&gt; (...args) =&gt; fn2(fn1(...args)));</code></pre>
<p><code>compose</code> takes functions as arguments and returns another function which takes the argument(s) to pass through the whole pipeline.</p>
<p>Functions are applied from right to left because of <code>fns.reverse()</code>.</p>
<p>Because <code>compose</code> returns a function that takes the future argument(s), we can freely associate our functions without calling them, which allow us to create intermediate functions.</p>
<p>So with our initial example:</p><pre><code class="language-js">const map = (fn, arr) =&gt; arr.map(fn);
const first = (xs) =&gt; xs[0];
const formatInitial = (x) =&gt; x.toUpperCase() + ".";
const intercalate = (sep, arr) =&gt; arr.join(sep);
const getInitials = compose(formatInitial, first);
const employees = ["Yann", "Brigitte", "John", "William"];
const initials = intercalate("\n", map(getInitials, employees));
// Y.
// B.
// J.
// W.</code></pre>
<p><code>first</code> and <code>formatInitial</code> already take one argument.</p>
<p>But <code>map</code> and <code>intercalate</code> take 2 arguments, so we can't include them as is in our <code>compose</code> helper because only one argument will be passed. In this case it's an array that both take as a final argument (remember, data is the last thing to get passed).</p>
<p>It would be nice to give <code>map</code> and <code>intercalate</code> their respective first argument in advance.</p>
<p>Wait a minute – we can curry them!:</p><pre><code class="language-js">// ...
const map = curry((fn, arr) =&gt; arr.map(fn));
const intercalate = curry((sep, arr) =&gt; arr.join(sep));
const formatInitials = compose(
intercalate("\n"),
map(formatInitial),
map(first)
);
const employees = ["Yann", "Brigitte", "John", "William"];
const initials = formatInitials(employees);
// Y.
// B.
// J.
// W.</code></pre>
<p>So clean!</p>
<p>Like I said, <code>compose</code> makes a pipeline with the functions we give it, calling them from right to left.</p>
<p>So let's visualize what happens when <code>formatInitials(employees)</code> is parsed:</p>
<p>Personally, I prefer when it goes from left to right, because when writing the function, I like to think about what transformation to apply first, write it down, then repeat until the end of the pipeline.</p>
<p>Whereas with <code>compose</code>, I have to step back to write the next transformation. That just breaks the flow of my thinking.</p>
<p>Fortunately, it's not complicated to tweak it in order to go from left to right.</p>
<p>We just have to get rid of the <code>.reverse()</code> part.</p>
<p>Let's call our new helper <code>pipe</code>:</p><pre><code class="language-js">const pipe = (...fns) =&gt; fns.reduce((fn1, fn2) =&gt; (...args) =&gt; f2(f1(...args)));
</code></pre>
<p>So if we refactor the previous snippet, we get:</p><pre><code class="language-js">const formatInitials = pipe(map(first), map(formatInitial), intercalate("\n"));
</code></pre>
<p>For the visualization, same thing as <code>compose</code> but in reverse order:</p>
<h2 id="hindley-milner-type-signatures">Hindley-Milner type signatures</h2>
<p>As you know, a complete program ends up with quite a few functions.</p>
<p>When you plunge back into a project after several weeks, you don't have the context to easily understand what each function does.</p>
<p>To counter that, you reread only the parts you need. But this can be quite tedious.</p>
<p>It would be nice to have a quick and powerful way to document your functions and explain what they do at a glance.</p>
<p>That's where type signatures come in. They are a way to document how a function operates and its inputs and outputs.</p>
<p>For example:</p><pre><code class="language-js">// ↓ function name
//                  ↓ input
//                            ↓ output
// formatInitial :: String -&gt; String
const formatInitial = (x) =&gt; x.toUpperCase() + ".";</code></pre>
<p>Here we see that <code>formatInitial</code> takes a <code>String</code> and returns a <code>String</code>.</p>
<p>We don't care about the implementation.</p>
<p>Let's look at another example:</p><pre><code class="language-js">// first :: [a] -&gt; a
const first = (xs) =&gt; xs[0];
</code></pre>
<p>Types can be expressed with variables (usually <code>a</code>, <code>b</code>, etc.) and the brackets means "an array of" whatever is inside.</p>
<p>So we could literally read this signature like this:</p>
<p><code>first</code> takes an array of <code>a</code> and returns an <code>a</code>, where <code>a</code> can be of any type.</p>
<p>But because the type taken as input is the same as the one returned as output, we use the same variable.</p>
<p>If the output had another type, we would have used <code>b</code>:</p><pre><code class="language-js">// imaginaryFunction :: a -&gt; b
</code></pre>
<p>Warning!</p>
<p>That doesn't ensure that <code>a</code> and <code>b</code> are different types. They still can be the same.</p>
<p>Finally, let's see the case of <code>intercalate</code> which is a bit more complex:</p><pre><code class="language-js">// intercalate :: String -&gt; [a] -&gt; String
const intercalate = curry((sep, arr) =&gt; arr.join(sep));
</code></pre>
<p>OK, here there are 2 arrows, which can be replaced by "returns...".</p>
<p>They indicate functions.</p>
<p>So <code>intercalate</code> takes a <code>String</code> then returns a function which takes an array of <code>a</code>, which returns a <code>String</code>.</p>
<p>Wow, that's hard to keep track of.</p>
<p>We could have written the signature like this:</p><pre><code class="language-js">// intercalate :: String -&gt; ([a] -&gt; String)
</code></pre>
<p>Now it's more obvious that it first returns a function, which is in parentheses here. And then that function will take <code>[a]</code> as input and return <code>String</code>.</p>
<p>But we usually don't use them for clarity sake. Basically, if you stumble upon a signature of the form:</p><pre><code class="language-js">// imaginaryFunction :: a -&gt; b -&gt; c -&gt; d -&gt; e
// or
// imaginaryFunction :: a -&gt; (b -&gt; (c -&gt; (d -&gt; e)))
// ...you see how parens nesting affects readability
</code></pre>
<p><code>e</code>, the type on the right side, is the output.</p>
<p>And everything before are inputs given one-by-one, which indicates that the function is curried.</p>
<p>Nowadays, we usually have type systems like TypeScript or Flow, and the IDE is able to give us the type signature of a function when we hover over its name. Thus, it might be unnecessary to write them as comments in your code.</p>
<p>But this remains a nice tool to have in your toolkit because a lot of functional libraries out there use these type signatures in their documentations. And idiomatic functional languages (like Haskell) use them heavily.</p>
<p>So if you give them a shot, you will hopefully not be completely lost.</p>
<p>Pat yourself on the back for having read this far.</p>
<p>You should now have the ability to work with higher-order functions. Higher-order functions are simply functions that take functions as inputs and/or return them.</p>
<p>Indeed, that's exactly what we did.</p>
<p>For example, <code>curry</code> is an higher-order function because it takes a function as input and returns one as output.</p>
<p><code>compose</code>, <code>pipe</code>, <code>map</code>, and <code>reduce</code> are all higher-order functions because they take at least one function as input.</p>
<p>They are pretty cool because they allow to create very powerful abstractions.</p>
<p>Enough nattering. Let's get some practice.</p>
<h3 id="exercises-set-2-">Exercises (Set 2)</h3>
<ol>
<li>Given a string of the form:</li>
</ol><pre><code class="language-js">const input = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
</code></pre>
<p>...and these helpers:</p><pre><code class="language-js">// filter :: (a -&gt; Boolean) -&gt; [a] -&gt; [a]
const filter = curry((fn, arr) =&gt; arr.filter(fn));
// removeDuplicates :: [a] -&gt; [a]
const removeDuplicates = (arr) =&gt; Array.from(new Set(arr));
// getChars :: String -&gt; [Character]
const getChars = (str) =&gt; str.split("");
// lowercase :: String -&gt; String
const lowercase = (str) =&gt; str.toLowerCase();
// sort :: [a] -&gt; [a]
const sort = (arr) =&gt; [...arr].sort();</code></pre>
<p>Create a function <code>getLetters</code> that returns all the letters in a string without duplicates, in alphabetical order, and in lowercase.</p>
<p>The goal is to use <code>compose</code> and/or <code>pipe</code>:</p><pre><code class="language-js">// getLetters :: String -&gt; [Character]
const getLetters = ...
</code></pre>
<p>Note: You may have to create intermediate functions before the final one.</p>
<p>2. Imagine you have an object with groups' names as keys and arrays of objects representing people as values:</p><pre><code class="language-js">{
"groupName": [
{firstname: "John", lastname: "Doe", age: 35, sex: "M"},
{firstname: "Maria", lastname: "Talinski", age: 28, sex: "F"},
// ...
],
// ...
}
</code></pre>
<p>Create a function that returns an object of the form:</p><pre><code class="language-js">{
"groupName": {
"medianAgeM": 34,
"medianAgeF": 38,
},
// ...
}
</code></pre>
<p>Where <code>medianAgeM</code> is the median age of men in the group and <code>medianAgeF</code> the one of women.</p>
<p>Here's some helpers:</p><pre><code class="language-js">// map :: (a -&gt; b) -&gt; [a] -&gt; [b]
const map = curry((fn, arr) =&gt; arr.map(fn));
// getEntries :: Object -&gt; [[Key, Val]]
const getEntries = (o) =&gt; Object.entries(o);
// fromEntries:: [[Key, Val]] -&gt; Object
const fromEntries = (entries) =&gt; Object.fromEntries(entries);
// mean :: Number -&gt; Number -&gt; Number
const mean = curry((x, y) =&gt; Math.round((x + y) / 2));
// reduceOverVal :: (b -&gt; a -&gt; b) -&gt; b -&gt; [Key, [a]] -&gt; [Key, b]
const reduceOverVal = curry((fn, initVal, entry) =&gt; [
entry[0],
entry[1].reduce(fn, initVal),
]);</code></pre>
<p>You may have to create intermediate functions before the final one, and like before, try to use <code>compose</code> and <code>pipe</code>:</p><pre><code class="language-js">// groupsMedianAges :: Object -&gt; Object
const groupsMedianAges = ...
</code></pre>
<p>3. Find the type signature of <code>reduce</code>:</p><pre><code class="language-js">const reduce = curry((fn, initVal, arr) =&gt; arr.reduce(fn, initVal));</code></pre>
<p>4. Find the type signature of <code>curry</code>:</p><pre><code class="language-js">const curry = (fn, arity = fn.length) =&gt; {
return (function nextCurried(prevArgs) {
return function curried(...nextArgs) {
const args = [...prevArgs, ...nextArgs];
return args.length &lt; arity ? nextCurried(args) : fn(...args);
};
})([]);
};</code></pre>
<p><a href="/news/the-principles-of-functional-programming/#set-2">Check answers</a>.</p>
<h2 id="working-with-boxes-from-functors-to-monads">Working with boxes: From Functors to Monads</h2>
<p>You may already be stressed out by the title of this section. You might be thinking, "What the heck are 'Functors' and 'Monads'?"</p>
<p>Or maybe you've heard about monads because they're famously "difficult" to understand.</p>
<p>Unfortunately, I can't predict that you will definitely understand these concepts, or effectively apply them in whatever work you do.</p>
<p>In fact, if I talk about them at the end of this tutorial, it's because I think they're very powerful tools that we don't need very often.</p>
<p>Here's the reassuring part: Like anything in the world, they're not magic.</p>
<p>They follow the same rules of physics (and more specifically computer science and math) as everything else. </p>
<p>So at the end of the day, they're understandable. It just requires the right amount of time and energy.</p>
<p>In addition, they essentially build upon what we've previously talked about: types, mapping and composition.</p>
<p>Now, find that tube of <em>perseverance</em> in your toolkit and let's get started.</p>
<h3 id="why-use-boxes">Why use boxes?</h3>
<p>We want to make our program with pure functions. Then we use composition to specify in which order to run them over the data.</p>
<p>However, how do we deal with <code>null</code> or <code>undefined</code>? How do we deal with exceptions? </p>
<p>Also, how do we manage side-effects without losing control, because one day we'll need to perform them?</p>
<p>The first two cases involve branching. Either the value is <code>null</code> and we do this, or we do that. Either there's an error and we do this, or a success and we do that.</p>
<p>The usual way to deal with branching is control flow.</p>
<p>However, control flow is imperative. It describes "how" the code operates.</p>
<p>So functional programmers came up with the idea of using a box that contains one of two possible values.</p>
<p>We use that box as input/output to functions regardless of what's inside.</p>
<p>But because those boxes also have specific behaviors that abstract function application, we can apply a function over a box and it will decide how to actually perform it depending on its inner value.</p>
<p>Thus, we don't have to adapt our functions to the data. We don't have to clutter them with logic that doesn't belong to.</p>
<p>Things like:</p><pre><code class="language-js">const myFunc = (x) =&gt; {
// ...
if (x !== null) {
// ...
} else {
// ...
}
};</code></pre>
<p>With that, we can implement branching (and other stuff) while using only functions and preserve composition.</p>
<p>The boxes we'll see, named <strong>Algebraic Data Types</strong> (ADT), enable us to do more while keeping the data and the functions separate.</p>
<p>Functors and monads are indeed Algebraic Data Types.</p>
<h3 id="functors">Functors</h3>
<p>Functors are containers/data structures/types that hold data along with a <code>map</code> method.</p>
<p>This <code>map</code> method allow us to apply a function on the value(s) contained in the functor. What's returned is the same functor but containing the result of the function call.</p>
<p>Let's introduce <code>Identity</code>, the simplest functor:</p>
<p>We could implement it with a class, but I'll use regular functions here:</p><pre><code class="language-js">const Identity = (x) =&gt; ({
inspect: () =&gt; `Identity(${x})`,
map: (fn) =&gt; Identity(fn(x)),
value: x,
});
// add5 :: Number -&gt; Number
const add5 = (x) =&gt; x + 5;
const myFirstFunctor = Identity(1);
myFirstFunctor.map(add5);
// Identity(6)</code></pre>
<p>You see? Not that complicated!</p>
<p><code>Identity</code> is the equivalent of the <code>identity</code> function but in the world of functors.</p>
<p><code>identity</code> is a well-known function in FP that may seem useless at first sight:</p><pre><code class="language-js">// identity :: a -&gt; a
const identity = (x) =&gt; x;
</code></pre>
<p>It does nothing on the data, just returns it as is.</p>
<p>But it can be useful when doing stuff like composition because sometimes, you don't want to do anything with the data, just pass it through.</p>
<p>And because composition works with functions and not raw values, you need to wrap them into the <code>identity</code> function.</p>
<p><code>Identity</code> serves the same purpose but when composing functors.</p>
<p>More on that later.</p>
<p>Returning back to the previous snippet, we could have done <code>map(add5, 1)</code> and it would have given us the same result apart from the fact that there would not have been a container around it.</p>
<p>So there's no extra feature here.</p>
<p>Now let's see another functor called <code>Maybe</code>:</p><pre><code class="language-js">const Nothing = () =&gt; ({
inspect: () =&gt; `Nothing()`,
map: Nothing,
});
const Maybe = { Just, Nothing };
// Just is equivalent to Identity</code></pre>
<p><code>Maybe</code> is a mix of 2 functors, <code>Just</code> and <code>Nothing</code>.</p>
<p><code>Nothing</code> contains, well, nothing. But it's still a functor so we can use it wherever we need functors.</p>
<p><code>Maybe</code>, like its name suggests, <em>may</em> contain a value (<code>Just</code>) or not (<code>Nothing</code>).</p>
<p>Now how would we use it?</p>
<p>Most of the time, it's used in functions that can return <code>null</code> or <code>undefined</code>:</p><pre><code class="language-js">// isNothing :: a -&gt; Boolean
const isNothing = (x) =&gt; x === null || x === undefined;
// safeProp :: String -&gt; Object -&gt; Maybe a
const safeProp = curry((prop, obj) =&gt;
isNothing(obj[prop]) ? Maybe.Nothing() : Maybe.Just(obj[prop])
);
const o = { a: 1 };
const a = safeProp("a", o);
// Just(1)
const b = safeProp("b", o);
// Nothing
a.map(add5);
// Just(6)
b.map(add5);
// Nothing</code></pre>
<p>Do you see were the power of <code>Maybe</code> lies?</p>
<p>You can safely apply a function on the inner value within whatever functor <code>safeProp</code> returns, you will not get an unexpected <code>NaN</code> result because you added a number with <code>null</code> or <code>undefined</code>.</p>
<p>Thanks to the <code>Nothing</code> functor, the function mapped will not be called at all.</p>
<p>However, <code>Maybe</code> implementations often cheat a little bit by doing the <code>isNothing</code> check inside the monad, whereas a strictly pure monad shouldn't:</p><pre><code class="language-js">const Maybe = (x) =&gt; ({
map: (fn) =&gt; (x === null || x === undefined ? Maybe(x) : Maybe(fn(x))),
inspect: () =&gt; `Maybe(${x})`,
value: x,
});
// safeProp :: String -&gt; Object -&gt; Maybe a
const safeProp = curry((prop, obj) =&gt; Maybe(obj[prop]));
const o = { a: 1 };
const c = safeProp("a", o);
// Maybe(1)
const d = safeProp("b", o);
// Maybe(undefined)
c.map(add5);
// Maybe(6)
d.map(add5);
// Maybe(undefined)</code></pre>
<p>The advantage of having these functors is that, to be called "functors", they must implement a specific interface, in this case <code>map</code>.</p>
<p>Thus, each type of functor has unique features while having capabilities shared by all functors, which make them predictable.</p>
<p>When using <code>Maybe</code> in real cases, we eventually need to do something with the data to release the value.</p>
<p>In addition, if the operations took the unwanted branch and fails, we'll get <code>Nothing</code>.</p>
<p>Let's imagine we want to print the value retrieved from <code>o</code> in our previous example.</p>
<p>We might want to print something more useful to the user than <code>"Nothing"</code> if the operation failed.</p>
<p>So for releasing the value and provide a fallback if we get <code>Nothing</code>, we have a little helper called <code>maybe</code>:</p><pre><code class="language-js">// maybe :: c -&gt; (a -&gt; b) -&gt; Maybe a -&gt; b | c
const maybe = curry((fallbackVal, fn, maybeFunctor) =&gt;
maybeFunctor.val === undefined ? fallbackVal : fn(maybeFunctor.val)
);
// ...
const o = { a: 1 };
const printVal1 = pipe(
safeProp("a"),
maybe("Failure to retrieve the value.", add5),
console.log
);
const printVal2 = pipe(
safeProp("b"),
maybe("Failure to retrieve the value.", add5),
console.log
);
printVal1(o);
// console: 6
printVal2(o);
// console: "Failure to retrieve the value."</code></pre>
<p>Great!</p>
<p>If this is the first time you've been exposed to this concept, that might seem unclear and unfamiliar.</p>
<p>But actually, it's something you're already familiar with.</p>
<p>If you're familiar with JavaScript, chances are that you've used the built-in <code>map</code>:</p><pre><code class="language-js">[1, 2, 3].map((x) =&gt; x * 2);
// [2, 4, 6]
</code></pre>
<p>Well, remember the definition of a functor. It's a data structure that has a <code>map</code> method.</p>
<p>Now look at the previous snippet: what's the data structure that has a <code>map</code> method here?</p>
<p>The <code>Array</code>! The native <code>Array</code> type in JavaScript is a functor!</p>
<p>Its specialty is that it can contain multiple values. But the essence of <code>map</code> stays the same: it takes a value as input and returns/maps it to an output.</p>
<p>So in this case, the mapper function runs for each value.</p>
<p>Cool!</p>
<p>Now that we know what's a functor, let's move on to extend its interface.</p>
<h3 id="pointed">Pointed</h3>
<p>A pointed functor is one that has an <code>of</code> (aka <code>pure</code>, <code>unit</code>) method.</p>
<p>So with <code>Maybe</code> that gives us:</p><pre><code class="language-js">const Maybe = {Just, Nothing, of: Just};
</code></pre>
<p><code>of</code> is meant to place a given value into the <strong>default minimum context</strong> of the functor.</p>
<p>You may ask:</p>
<blockquote>Why <code>Just</code> and not <code>Nothing</code> ?</blockquote>
<p>When using <code>of</code>, we expect to be able to map right away.</p>
<p>If we use <code>Nothing</code>, it would ignore everything we map.</p>
<p><code>of</code> expects you to insert a "successful" value.</p>
<p>Thus, you can still shoot yourself in the foot by inserting <code>undefined</code>, for example, and then map a function that doesn't expect this value:</p><pre><code class="language-js">Maybe.of(undefined).map((x) =&gt; x + 1);
// Just(NaN)
</code></pre>
<p>Let's introduce another functor to better understand when it's useful:</p><pre><code class="language-js">const IO = (dangerousFn) =&gt; ({
inspect: () =&gt; `IO(?)`,
map: (fn) =&gt; IO(() =&gt; fn(dangerousFn())),
});
IO.of = (x) =&gt; IO(() =&gt; x);</code></pre>
<p>Unlike <code>Just</code>, <code>IO</code> don't get a value as is but needs it wrapped in a function.</p>
<p>Why is that?</p>
<p><em>I/O</em> stands for <em>Input/Output</em>.</p>
<p>The term is used to describe any program, operation, or device that transfers data to or from a computer and to or from a peripheral device.</p>
<p>So it's intended to be used for input/output operations, which are side-effects because they rely on/affect the outside world.</p>
<p>Querying the DOM is an example:</p><pre><code class="language-js">// getEl :: String -&gt; DOM
const getEl = (sel) =&gt; document.querySelector(sel);
</code></pre>
<p>This function is impure because given a same input, it can return different outputs:</p><pre><code class="language-js">getEl("#root");
// &lt;div id="root"&gt;&lt;/div&gt;
// or
getEl("#root");
// &lt;div id="root"&gt;There's text now !&lt;/div&gt;
// or
getEl("#root");
// null</code></pre>
<p>Whereas by inserting an intermediate function, <code>getEl</code> returns always the same output:</p><pre><code class="language-js">// getEl :: String -&gt; _ -&gt; DOM
const getEl = (sel) =&gt; () =&gt; document.querySelector(sel);
getEl("#root");
// function...
</code></pre>
<p>Whatever the argument passed is, <code>getEl</code> will always return a function, allowing it to be pure.</p>
<p>However, we're not magically erasing the effect because now, it's the returned function that's impure.</p>
<p>We get purity out of laziness.</p>
<p>The outer function only serves as a protective box that we can pass around safely. When we are ready to release the effect, we call the returned function's function.</p>
<p>And because we want to be careful doing so, we name the function <code>unsafePerformIO</code> to remind the programmer that it's dangerous.</p>
<p>Until then, we can do our mapping and composition stuff peacefully.</p>
<p>So that's the mechanism used by <code>IO</code>.</p>
<p>If you pass a value directly to it, it must be a function with the same signature as the one that <code>getEl</code> returns:</p><pre><code class="language-js">const a = IO(() =&gt; document.querySelector("#root"));
// and not:
const invalid = IO(document.querySelector("#root"));</code></pre>
<p>But as you can imagine, it quickly becomes tedious to always wrap our value in a function before passing it into <code>IO</code>.</p>
<p>Here's where <code>of</code> shines – it will do that for us:</p><pre><code class="language-js">const betterNow = IO.of(document.querySelector("#root"));
</code></pre>
<p>That's what I meant by <strong>default minimum context</strong>.</p>
<p>In the case of <code>IO</code>, it's wrapping the raw value in a function. But it can be something else, it depends of the functor in question.</p>
<h3 id="exercises-set-3-">Exercises (Set 3)</h3>
<ol>
<li>Write a function <code>uppercaseF</code> that uppercase a string inside a functor:</li>
</ol><pre><code class="language-js">// uppercaseF :: Functor F =&gt; F String -&gt; F String
const uppercaseF = ...
</code></pre>
<p>2. Use the <code>uppercaseF</code> function you previously built, <code>maybe</code>, and <code>safeProp</code> to create a function that retrieves the name of a user and prints an uppercased version of it.</p>
<p>The user object has this form:</p><pre><code class="language-js">{
name: "Yann Salmon",
age: 18,
interests: ["Programming", "Sport", "Reading", "Math"],
// ...
}
</code></pre><pre><code class="language-js">// safeProp :: String -&gt; Object -&gt; Maybe a
// maybe :: c -&gt; (a -&gt; b) -&gt; Maybe a -&gt; b | c
// printUsername :: User -&gt; _
const printUsername = ...
</code></pre>
<p><a href="/news/the-principles-of-functional-programming/#set-3">Check answers</a>.</p>
<h3 id="applicatives">Applicatives</h3>
<p>If you work with functors, you will stumble upon situations where you have multiple functors containing values on which you would like to apply a function:</p><pre><code class="language-js">// concatStr :: String -&gt; String -&gt; String
const concatStr = curry((str1, str2) =&gt; str1 + str2);
const a = Identity("Hello");
const b = Identity(" world !");</code></pre>
<p>Unfortunately, we can't pass functors as arguments to <code>concatStr</code> because it expects strings.</p>
<p>The <code>Applicative</code> interface solves that problem.</p>
<p>A functor that implements it is one that implements an <code>ap</code> method. <code>ap</code> takes a functor as argument and returns a functor of the same type.</p>
<p>Within the returned functor, there will be the result of mapping the value of the functor <code>ap</code> was called on, over the value of the functor previously taken as argument.</p>
<p>I know that's a lot to digest. Take some time and let that sink in.</p>
<p>Let's continue our previous snippet to see it in action:</p><pre><code class="language-js">// concatStr :: String -&gt; String -&gt; String
const concatStr = curry((str1, str2) =&gt; str1 + str2);
const a = Identity("Hello");
const b = Identity(" world !");
const c = a.map(concatStr);
// Identity(concatStr("Hello", _))
const result = c.ap(b);
// Identity("Hello world !")</code></pre>
<p>First, we map <code>concatStr</code> over <code>a</code>. What happens is that <code>concatStr("Hello")</code> is called and becomes the inner value of <code>c</code>, still an <code>Identity</code> functor.</p>
<p>And remember, what does return <code>concatStr("Hello")</code>? Another function that waits for the remaining arguments!</p>
<p>Indeed, <code>concatStr</code> is curried.</p>
<p>Note that currying is necessary in order to use this technique.</p>
<p>Then, like I said, <code>ap</code> maps the value of the functor it's called on (in this case <code>c</code>, so it maps <code>concatStr("Hello")</code>) over the value of the functor taken as argument (here it's <code>b</code> containing <code>" world !"</code>).</p>
<p>So <code>result</code> ends up being an <code>Identity</code> functor (same type as <code>b</code>) containing the result of <code>concatStr("Hello")(" world !")</code>, that is <code>"Hello world !"</code>!</p>
<p>Here's the implementation:</p><pre><code class="language-js">const Identity = (x) =&gt; ({
inspect: () =&gt; `Identity(${x})`,
// Functor interface
map: (fn) =&gt; Identity(fn(x)),
// Applicative interface
ap: (functor) =&gt; functor.map(x),
value: x,
});
// Pointed interface
Identity.of = (x) =&gt; Identity(x);</code></pre>
<p>As you can see, the functor <code>ap</code> is called on must contain a function. Otherwise it wouldn't work. In our previous example, that was the <code>c</code> step.</p>
<p>If we inline everything, we get:</p><pre><code class="language-js">// concatStr :: String -&gt; String -&gt; String
const concatStr = curry((str1, str2) =&gt; str1 + str2);
const result = Identity("Hello").map(concatStr).ap(Identity(" world !"));
// Identity("Hello world !")</code></pre>
<p>There's an interesting mathematical property about <code>ap</code>:</p><pre><code class="language-js">F(x).map(fn) === F(fn).ap(F(x));
</code></pre>
<p>The left side of the equality corresponds to what we did previously.</p>
<p>So following the right side, <code>result</code> could also be written like this:</p><pre><code class="language-js">const result = Identity(concatStr)
.ap(Identity("Hello"))
.ap(Identity(" world !"));</code></pre>
<p>Take the time to reread if you feel overwhelmed.</p>
<p>The latter version ressembles more to a regular function call than the previous. We're feeding <code>concatStr</code> with its arguments in a left-to-right manner:</p>
<p>And all of that happens inside our protecting container.</p>
<p>Finally, we can further clean up this process with parametrization.</p>
<p>A function called <code>liftA2</code> do that:</p><pre><code class="language-js">// liftA2 :: Apply functor F =&gt; (a -&gt; b -&gt; c) -&gt; F a -&gt; F b -&gt; F c
const liftA2 = curry((fn, F1, F2) =&gt; F1.map(fn).ap(F2));
// ...
const result = liftA2(concatStr, Identity("Hello"), Identity(" world !"));</code></pre>
<p>I'm sure we can agree that this name is really awkward.</p>
<p>I guess it made sense for the pioneers of Functional Programming, who were probably "math" people.</p>
<p>But anyway, you can think of it as "lifting" a function and its arguments, then putting them into a functor in order to <code>ap</code> each one on the other.</p>
<p>However, this metaphor is just partially true because arguments are already given within their container.</p>
<p>The interesting part is the body of the function.</p>
<p>You can notice that it uses the left-hand side of the mathematical property we saw earlier.</p>
<p>If we implement it using the right-hand side, we need to know what type of functor <code>F1</code> and <code>F2</code> are because we need to wrap the function with the same:</p><pre><code class="language-js">const liftA2 = curry((fn, F1, F2) =&gt; F(fn).ap(F1).ap(F2));
//                                   ↑ what's F ? We need the precise constructor.
</code></pre>
<p>So by using the left version, we abstract the functor type for free.</p>
<p>Now you might think, "OK, but what if the function requires 3, 4, or more arguments?"</p>
<p>If that's the case, you can build variants just by extending our previous <code>liftA2</code>:</p><pre><code class="language-js">// liftA3 :: Apply functor F =&gt; (a -&gt; b -&gt; c -&gt; d) -&gt; F a -&gt; F b -&gt; F c -&gt; F d
const liftA3 = curry((fn, F1, F2, F3) =&gt; F1.map(fn).ap(F2).ap(F3));
// liftA4 :: Apply functor F =&gt; (a -&gt; b -&gt; c -&gt; d -&gt; e) -&gt; F a -&gt; F b -&gt; F c -&gt; F d -&gt; F e
const liftA4 = curry((fn, F1, F2, F3, F4) =&gt; F1.map(fn).ap(F2).ap(F3).ap(F4));
// take3Args :: String -&gt; String -&gt; Number -&gt; String
const take3Args = curry(
(firstname, lastname, age) =&gt;
`My name is ${firstname} ${lastname} and I'm ${age}.`
);
// take4Args :: a -&gt; b -&gt; c -&gt; d -&gt; [a, b, c, d]
const take4Args = curry((a, b, c, d) =&gt; [a, b, c, d]);
liftA3(take3Args, Identity("Yann"), Identity("Salmon"), Identity(18));
// Identity("My name is Yann Salmon and I'm 18.")
liftA4(take4Args, Identity(1), Identity(2), Identity(3), Identity(4));
// Identity([1, 2, 3, 4])</code></pre>
<p>As you can notice, <em>A*</em> refers to the number of arguments.</p>
<p>Wow! We've covered a bunch of things.</p>
<p>Again, I want to congratulate you for the time and attention you've given so far.</p>
<p>We almost have a fully fledged toolbox for resolving real world problems in a functional way.</p>
<p>We now need to explore the <code>Monad</code> interface.</p>
<h3 id="exercises-set-4-">Exercises (Set 4)</h3>
<p>Consider this user object for the next 2 exercises:</p><pre><code class="language-js">const user = {
id: "012345",
name: "John Doe",
hobbies: ["Cycling", "Drawing"],
friends: [
{name: "Mickael Bolp", ...},
// ...
],
partner: {name: "Theresa Doe", ...},
// ...
}
</code></pre>
<ol>
<li>Create a function that returns a phrase describing the couple if the user has a partner using the given helpers and <code>ap</code>:</li>
</ol><pre><code class="language-js">// safeProp :: String -&gt; Object -&gt; Maybe a
const safeProp = curry((prop, obj) =&gt;
obj[prop] === undefined || obj[prop] === null
? Maybe.Nothing()
: Maybe.Just(obj[prop])
);
// getCouplePresentation :: User -&gt; User -&gt; String
const getCouplePresentation = curry(
(name1, name2) =&gt; `${name1} and ${name2} are partners.`
);
// getName :: User -&gt; String
const getName = (user) =&gt; user.name;
// I could have written: const getName = safeProp("name")
// but I didn't and that's intentional.
// We assume that a user always has a name.
const couple = ...
</code></pre>
<p>2. Refactor the previous answer using <code>liftA2</code> (check out the answer of the previous question before):</p><pre><code class="language-js">// liftA2 :: Apply functor F =&gt; (a -&gt; b -&gt; c) -&gt; F a -&gt; F b -&gt; F c
const liftA2 = curry((fn, F1, F2) =&gt; F1.map(fn).ap(F2));
const couple = ...
</code></pre>
<p><a href="/news/the-principles-of-functional-programming/#set-4">Check answers</a>.</p>
<h3 id="monads">Monads</h3>
<p>In the exercises just before, I gave the helper <code>getName</code> whereas we could have derived it from <code>safeProp</code>.</p>
<p>The reason I did that is because <code>safeProp</code> returns a <code>Maybe</code> functor.</p>
<p>Thus, by trying to get the partner's name of a user, we end up with 2 nested <code>Maybe</code> functors:</p><pre><code class="language-js">
const getPartnerName = pipe(safeProp("partner"), map(safeProp("name")));
// Maybe(Maybe("Theresa Doe"))</code></pre>
<p>Let's see another example where this problem get even worse:</p><pre><code class="language-js">// getUser :: Object -&gt; IO User
const getUser = ({ email, password }) =&gt; IO.of(db.getUser(email, password));
// getLastPurchases :: User -&gt; IO [Purchase]
const getLastPurchases = (user) =&gt; IO.of(db.purchases(user));
// display :: [Purchase] -&gt; IO _
const display = "some implementation";
// displayUserPurchases :: Object -&gt; IO _
const displayUserPurchases = pipe(
getUser,
map(getLastPurchases),
map(map(display))
);
displayUserPurchases({ email: "johndoe@whatever.com", password: "1234" });
// IO(IO(IO _))</code></pre>
<p>How to get rid of these layers of container that enforce us to do nested <code>map</code> that impairs readability ?</p>
<p>Monads to our rescue! Monads are functors that can flatten.</p>
<p>Again, like regular functors, you will probably not use them very often.</p>
<p>However, they're powerful abstractions that bundle a specific set of behaviors with a value. </p>
<p>They're data structures backed up by mathematical laws which make them extremely predictable and reliable.</p>
<p>In addition, laws like composition or associativity tell us that we can do the same thing while making the operations in a different way.</p>
<p>Remember what we saw with Applicatives and <code>ap</code>:</p><pre><code class="language-js">F(x).map(fn) === F(fn).ap(F(x));
</code></pre>
<p>These can be helpful because certain variants might be more efficient computationaly.</p>
<p>The thing is that the way we prefer to write programs may differ from the way they should be written if we wanted them to be efficient as much as possible.</p>
<p>So because these laws ensure us that all variants do the same thing, we can write how we like and ask the compiler to use the more efficient variant later.</p>
<p>That's why I didn't bothered you with these laws very much. But be aware of their utility (which certainly extends beyond that).</p>
<p>Going back to our monads, the flattening behavior is usually implemented with a <code>chain</code> (aka <code>flatMap</code>, <code>bind</code>, <code>&gt;==</code>) method:</p><pre><code class="language-js">const Identity = (x) =&gt; ({
inspect: () =&gt; `Identity(${x})`,
// Functor interface
map: (fn) =&gt; Identity(fn(x)),
// Applicative interface
ap: (functor) =&gt; functor.map(x),
// Monad interface
chain: (fn) =&gt; fn(x),
value: x,
});
// Pointed interface
Identity.of = (x) =&gt; Identity(x);
// chain :: Monad M =&gt; (a -&gt; M b) -&gt; M a -&gt; M b
const chain = curry((fn, monad) =&gt; monad.chain(fn));
const getPartnerName = pipe(safeProp("partner"), chain(safeProp("name")));</code></pre>
<p>In the case of <code>Identity</code>, <code>chain</code> is like <code>map</code> but without a new <code>Identity</code> functor surrounding it.</p>
<p>You may think, "That defeats the purpose, we'll get back a value unboxed!"</p>
<p>But, we won't because <code>fn</code> is meant to return a functor.</p>
<p>Look at the type signature of this <code>chain</code> helper:</p><pre><code class="language-js">// chain :: Monad M =&gt; (a -&gt; M b) -&gt; M a -&gt; M b
const chain = curry((fn, monad) =&gt; monad.chain(fn));</code></pre>
<p>In fact, we could do the same by first applying the function that returns a functor, which gives us a nested one, and then removing the inner or the outer.</p>
<p>For example:</p><pre><code class="language-js">const Identity = (x) =&gt; ({
// ...
chain: (fn) =&gt; Identity(x).map(fn).value,
value: x,
});</code></pre>
<p>You can see that we first wrap <code>x</code>, then map, then grab the inner value.</p>
<p>Because wrapping <code>x</code> in a new <code>Identity</code> and eventually picking its inner value are opposite, it's cleaner to do none of those like in the first version.</p>
<p>Now let's refactor the fist snippet of this section (with nested functors) using the <code>chain</code> helper:</p><pre><code class="language-js">// BEFORE
// ...
// displayUserPurchases :: Object -&gt; IO _
const displayUserPurchases = pipe(
getUser,
map(getLastPurchases),
map(map(display))
);
displayUserPurchases({ email: "johndoe@whatever.com", password: "1234" });
// IO(IO(IO _))
// AFTER
// ...
const displayUserPurchases = pipe(
getUser,
chain(getLastPurchases),
chain(display)
);
displayUserPurchases({ email: "johndoe@whatever.com", password: "1234" });
// IO _</code></pre>
<p>First, <code>getUser</code> returns an <code>IO(User)</code>.</p>
<p>Then, we chain <code>getLastPurchases</code> instead of mapping it.</p>
<p>In other words, we keep the result of <code>getLastPurchases(User)</code> (which is <code>IO(?)</code>), getting rid of the original <code>IO</code> that surrounded <code>User</code>.</p>
<p>That's why monads are often compared to onions – flattening/chaining them is like removing an onion's layer. When you do it, you're releasing potential unwanted results which could make you cry ?.</p>
<p>In the last example, if the first computation <code>getUser</code> had returned <code>Nothing</code>, calling <code>chain</code> on it would have returned <code>Nothing</code> too.</p>
<p>This functor does no operation.</p>
<p>However, we need to extend the simple version we saw earlier in this post in order to give it the <code>Applicative</code> and <code>Monad</code> interfaces.</p>
<p>Otherwise, we couldn't use it as such:</p><pre><code class="language-js">const Nothing = () =&gt; ({
inspect: () =&gt; `Nothing()`,
map: Nothing,
ap: Nothing,
chain: Nothing,
});
Nothing.of = () =&gt; Nothing();</code></pre>
<p>As long as you keep at least one layer (that is one functor) until you're ready to release the effect, that's ok.</p>
<p>But if you flatten the monad to get the raw value contained within all over the place because you're not able to figure out how to compose it, that defeats the purpose.</p>
<h3 id="recap">Recap</h3>
<p><strong>Functors</strong> apply a function to a wrapped value (<code>map</code>).</p>
<p><strong>Pointed</strong> functors have a method to place a value in the default minimum context of the functor (<code>of</code>).</p>
<p><strong>Applicatives</strong> apply a wrapped function to a wrapped value (<code>ap</code> + <code>of</code>).</p>
<p><strong>Monads</strong> apply a function that returns a wrapped value to a wrapped value (<code>chain</code> + <code>of</code>).</p>
<h3 id="exercises-set-5-">Exercises (Set 5)</h3>
<ol>
<li>Consider this object:</li>
</ol><pre><code class="language-js">const restaurant = {
name: "The Creamery",
address: {
city: "Los Angeles",
street: {
name: "Melrose Avenue",
},
},
rating: 8,
};</code></pre>
<p>Create a function <code>getStreetName</code> that, like the name suggests, returns the street name of the restaurant.</p>
<p>Use <code>safeProp</code> (and <code>chain</code>, along with any other functional helpers you need) to do so in a pure way.</p><pre><code class="language-js">// safeProp :: String -&gt; Object -&gt; Maybe a
const safeProp = curry((prop, obj) =&gt;
obj[prop] === undefined || obj[prop] === null
? Maybe.Nothing()
: Maybe.Just(obj[prop])
);
// getStreetName :: Object -&gt; Maybe String
const getStreetName = ...
</code></pre>
<p><a href="/news/the-principles-of-functional-programming/#set-5">Check answers</a>.</p>
<h2 id="exercise-answers">Exercise Answers</h2>
<p>The answers I propose are not the only ones. You may come up with your own, even better solutions.</p>
<p>As long as your solution works, that's great.</p>
<h3 id="set-1">Set 1</h3>
<p><a href="/news/the-principles-of-functional-programming/#exercises-set-1-">Go back to exercise</a>.</p>
<ol>
<li>Pure functions: a, d, e / Impure functions: b, c</li>
</ol>
<p>For <em>e</em>, the answer might not be easy to understand.</p>
<p>It was this function:</p><pre><code class="language-js">const counter = (start, end) =&gt; {
// ...
// e
() =&gt; counter(start + 1, end);
};</code></pre>
<p>So it's one function inside another.</p>
<p>We said that a pure function shouldn't rely on the outside, but here it accesses variables outside its scope, those on which it has a closure over (<code>counter</code>, <code>start</code> and <code>end</code>).</p>
<p>In a pure functional language, unlike JavaScript, <code>counter</code>, <code>start</code> and <code>end</code> would be immutable so <em>e</em> would be pure because, for the same input (in this case none), we would always get the same output.</p>
<p>However, values in JavaScript are mutable by default.</p>
<p>So if <code>start</code> was an object for whatever reason, it could be mutated outside of <code>counter</code> or inside <em>e</em> itself.</p>
<p>In this case, <em>e</em> would be considered impure.</p>
<p>But because that's not the case here, I class it as a pure function.</p>
<p>See this <a href="https://softwareengineering.stackexchange.com/questions/235175/are-closures-considered-impure-functional-style">thread</a> for more details.</p>
<p>2.</p><pre><code class="language-js">const people = [
{ firstname: "Bill", lastname: "Harold", age: 54 },
{ firstname: "Ana", lastname: "Atkins", age: 42 },
{ firstname: "John", lastname: "Doe", age: 57 },
{ firstname: "Davy", lastname: "Johnson", age: 34 },
];
const uppercaseNames = (person) =&gt; ({
firstname: person.firstname.toUpperCase(),
lastname: person.lastname.toUpperCase(),
age: person.age,
});
// "sort" mutates the original array it's applied on.
// So I make a copy before ([...people]) to not mutate the original argument.
const sortByAge = (people) =&gt;
[...people].sort((person1, person2) =&gt; person1.age - person2.age);
const parsePeople = (people) =&gt; sortByAge(people.map(uppercaseNames));
// NOT SURE TO INCLUDE
// If you have already read the section on Composition (after this one), you may come up with
// a more readable version for "parsePeople":
const parsePeople = pipe(map(uppercaseNames), sortByAge);
// or
const parsePeople = compose(sortByAge, map(uppercaseNames));
parsePeople(people);
// [
//   {firstname: "DAVY", lastname: "JOHNSON", age: 34},
//   {firstname: "ANA", lastname: "ATKINS", age: 42},
//   {firstname: "BILL", lastname: "HAROLD", age: 54},
//   {firstname: "JOHN", lastname: "DOE", age: 57},
// ]</code></pre>
<p>That's the version I came with, but any variation works from the moment it has no side-effects.</p>
<p>The function in the exercise indeed mutates the object passed as argument.</p>
<p>But you can verify that the original <code>people</code> array is unchanged in this correction.</p>
<h3 id="set-2">Set 2</h3>
<p><a href="/news/the-principles-of-functional-programming/#exercises-set-2-">Go back to exercise</a>.</p>
<ol>
<li></li>
</ol><pre><code class="language-js">const input =
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
// ...
// keepLetters :: [Character] -&gt; [Character] | []
const keepLetters = filter((char) =&gt;
"abcdefghijklmnopqrstuvwxyz".includes(char)
);
// getLetters :: String -&gt; [Character]
const getLetters = pipe(
lowercase,
getChars,
keepLetters,
removeDuplicates,
sort
);
// or
const getLetters = compose(
sort,
removeDuplicates,
keepLetters,
getChars,
lowercase
);
getLetters(input);
// ["a", "b", "c", "d", "e", "f", "g", "h", "i", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x"]</code></pre>
<p>2.</p><pre><code class="language-js">// getMedianAges :: [Key, [Person]] -&gt;  [Key, Object]
const getMedianAges = reduceOverVal((acc, person) =&gt; {
const key = `medianAge${person.sex}`;
return !acc[key]
? { ...acc, [key]: person.age }
: { ...acc, [key]: mean(acc[key], person.age) };
}, {});
// groupsMedianAges :: Object -&gt; Object
const groupsMedianAges = pipe(getEntries, map(getMedianAges), fromEntries);
// or
const groupsMedianAges = compose(fromEntries, map(getMedianAges), getEntries);</code></pre>
<p>3.</p><pre><code class="language-js">// reduce :: (b -&gt; a -&gt; b) -&gt; b -&gt; [a] -&gt; b
</code></pre>
<p>4.</p><pre><code class="language-js">// curry :: ((a, b, ...) -&gt; c) -&gt; a -&gt; b -&gt;  ... -&gt; c
</code></pre>
<h3 id="set-3">Set 3</h3>
<p><a href="/news/the-principles-of-functional-programming/#exercises-set-3-">Go back to exercise</a>.</p>
<ol>
<li></li>
</ol><pre><code class="language-js">const uppercaseF = map((str) =&gt; str.toUpperCase())
// Example:
const myFunctor = Just("string")
uppercaseF(myFunctor)
// Just("STRING")
</code></pre>
<p>2.</p><pre><code class="language-js">const uppercaseF = map((str) =&gt; str.toUpperCase());
// Example:
const myFunctor = Just("string");
uppercaseF(myFunctor);
// Just("STRING")
```
2.
```js
// printUsername :: User -&gt; _
const printUsername = pipe(
safeProp("name"),
uppercaseF,
maybe("Username not found !", console.log)
);
// Example:
printUsername({
name: "Yann Salmon",
age: 18,
interests: ["Programming", "Sport", "Reading", "Math"],
// ...
});
// console: YANN SALMON</code></pre>
<h3 id="set-4">Set 4</h3>
<p><a href="/news/the-principles-of-functional-programming/#exercises-set-4-">Go back to exercise</a>.</p>
<ol>
<li></li>
</ol><pre><code class="language-js">// getPartnerName :: User -&gt; Maybe String
const getPartnerName = pipe(safeProp("partner"), map(getName));
// userName :: Maybe String
const userName = Maybe.of(getName(user));
// partnerName :: Maybe String
const partnerName = getPartnerName(user);
// couple :: Maybe String
const couple = Maybe.of(getCouplePresentation).ap(userName).ap(partnerName);
// Just("John Doe and Theresa Doe are partners.")</code></pre>
<p>2.</p><pre><code class="language-js">// ...
const couple = liftA2(getCouplePresentation, userName, partnerName);</code></pre>
<h3 id="set-5">Set 5</h3>
<p><a href="/news/the-principles-of-functional-programming/#exercises-set-5-">Go back to exercise</a>.</p>
<ol>
<li></li>
</ol><pre><code class="language-js">// ...
// getStreetName :: Object -&gt; Maybe String
const getStreetName = pipe(
safeProp("address"),
chain(safeProp("street")),
chain(safeProp("name"))
);
getStreetName(restaurant);
// Just("Melrose Avenue")</code></pre>
<h2 id="going-further">Going further</h2>
<p>This post is mainly inspired by what I learned from these 3 amazing resources (in order of difficulty):</p>
<ul>
<li><a href="https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84">Fun Fun Function playlist</a> (video)</li>
<li><a href="https://github.com/getify/Functional-Light-JS">Functional-Light JavaScript</a> (book)</li>
<li><a href="https://mostly-adequate.gitbooks.io/mostly-adequate-guide/content/">Mostly adequate guide for Functional Programming</a> (book)</li>
</ul>
<p>Like me, you'll certainly find some concepts really hard to grasp at first.</p>
<p>But please keep going. Don't hesitate to rewind videos and reread paragraphs after a good night of sleep.</p>
<p>I ensure you that it will pay off.</p>
<p>There's also a great <a href="https://github.com/stoeffel/awesome-fp-js">Github repository</a> that gather resources about Functional Programming in JavaScript.</p>
<p>You'll find, among other things, nice libraries that provide functional helpers. My favorite at the time is <a href="https://ramdajs.com/">Ramda JS</a>. Others also provide monads like <a href="https://sanctuary.js.org/">Sanctuary</a>.</p>
<p>I certainly don't know everything about Functional Programming, so there are topics I didn't cover.</p>
<p>Those I'm aware of are:</p>
<ul>
<li>A technique called <strong>transducing</strong>. In short, it's a way of composing <code>map</code>, <code>filter</code> and <code>reduce</code> operations together. Check <a href="https://github.com/getify/Functional-Light-JS/blob/master/manuscript/apA.md/#appendix-a-transducing">this</a> and <a href="https://www.youtube.com/watch?v=6mTbuzafcII">that</a> to learn more.</li>
<li>Other common types of monads: Either, Map, List</li>
<li>Other algebraic structures like semi-groups and monoids</li>
<li><a href="https://www.learnrxjs.io/">Functional Reactive Programming</a></li>
</ul>
<h2 id="conclusion">Conclusion</h2>
<p>That's it!</p>
<p>Before we finish, I want to warn you about potential mistakes.</p>
<p>I'm not an expert in Functional Programming, so please be critical of this article as you learn more about it. I'm always open to discussions and refinements.</p>
<p>In any case, I hope that I laid down what I consider to be the fundamentals necessary for you to be more productive in your day-to-day work, as well as giving you the tools and the interest to go further.</p>
<p>And with that, keep coding! ?</p>
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
