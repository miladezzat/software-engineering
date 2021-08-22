---
card: "/images/default.jpg"
tags: [JavaScript]
description: "In programming, an array is a collection of elements or items"
author: "Milad E. Fahmy"
title: "The JavaScript Array Handbook – JS Array Methods Explained with Examples"
created: "2021-08-16T10:03:43+02:00"
modified: "2021-08-16T10:03:43+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-arrays tag-web-development tag-beginners-guide ">
<header class="post-full-header">
<h1 class="post-full-title">The JavaScript Array Handbook – JS Array Methods Explained with Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/05/freeCodeCamp-Cover-1.png 300w,
/news/content/images/size/w600/2021/05/freeCodeCamp-Cover-1.png 600w,
/news/content/images/size/w1000/2021/05/freeCodeCamp-Cover-1.png 1000w,
/news/content/images/size/w2000/2021/05/freeCodeCamp-Cover-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/05/freeCodeCamp-Cover-1.png" alt="The JavaScript Array Handbook – JS Array Methods Explained with Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In programming, an <code>array</code> is a collection of elements or items. Arrays store data as elements and retrieve them back when you need them. </p><p>The array data structure is widely used in all programming languages that support it.</p><p>In this handbook, I'll teach you all about arrays in JavaScript. You'll learn about complex data handling, destructuring, the most commonly used array methods, and more.</p><h1 id="why-did-i-write-this-article">Why Did I Write this Article?</h1><p>There are many great articles on JavaScript arrays already available around the internet. So why did I write yet another article on the same subject? What's the motivation? </p><p>Well, over the years of interacting with my mentees, I realized that most beginners need a tutorial that covers arrays thoroughly from beginning to end with examples.</p><p>So I decided to create such an article chock full of meaningful examples. If you are a beginner at JavaScript, I hope you'll find it very helpful. </p><p>But even as an experienced developer, this handbook may come in handy to help you brush up on things as you need. I'm also learning the whole thing again while writing about it. So let's dive in.</p><h1 id="what-is-an-array-in-javascript">What is an Array in JavaScript?</h1><p>A pair of <code>square brackets []</code> represents an array in JavaScript. All the elements in the array are <code>comma(,)</code> separated. </p><p>In JavaScript, arrays can be a collection of elements of any type. This means that you can create an array with elements of type String, Boolean, Number, Objects, and even other Arrays. </p><p>Here is an example of an array with four elements: type Number, Boolean, String, and Object.</p><pre><code class="language-js">const mixedTypedArray = [100, true, 'freeCodeCamp', {}];</code></pre><p>The position of an element in the array is known as its <code>index</code>. In JavaScript, the array index starts with <code>0</code>, and it increases by one with each element. </p><p>So, for example, in the above array, the element 100 is at <code>index 0</code>, true is at <code>index 1</code>, 'freeCodeCamp' is at <code>index 2</code>, and so on.</p><p>The number of elements in the array determines its length. For example, the length of the above array is four. </p><p>Interestingly, JavaScript arrays are not of fixed length. You can change the length anytime by assigning a positive numeric value. We will learn more about that in a while.</p><h1 id="how-to-create-an-array-in-javascript">How to Create an Array in JavaScript</h1><p>You can create an array in multiple ways in JavaScript. The most straightforward way is by assigning an array value to a variable.</p><pre><code class="language-js">const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];</code></pre><p>You can also use the <code>Array</code> constructor to create an array.</p><pre><code class="language-js">const salad = new Array('🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑');</code></pre><blockquote>Please Note: <code>new Array(2)</code> will create an array of length two and none of the elements are defined in it. However, <code>new Array(1,2)</code> will create an array of length two with the elements 1 and 2 in it.</blockquote><p>There are other methods like <code>Array.of()</code> and <code>Array.from()</code>, and the <code>spread</code> operator( <code>...</code>) helps you create arrays, too. We will learn about them later in this article.</p><h2 id="how-to-get-elements-from-an-array-in-js">How to Get Elements from an Array in JS</h2><p>You can access and retrieve elements from an array using its index. You need to use the <code>square bracket</code> syntax to access array elements.</p><pre><code class="language-js">const element = array[index];</code></pre><p>Based on your use-cases, you may choose to access array elements one by one or in a loop.</p><p>When you're accessing elements using index like this:</p><pre><code class="language-js">const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
salad[0]; // '🍅'
salad[2]; // '🥦'
salad[5]; // '🥕'</code></pre><p>You can use the length of an array to traverse backward and access elements.</p><pre><code class="language-js">const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
const len = salad.length;
salad[len - 1]; // '🥑'
salad[len - 3]; // '🌽'</code></pre><p>You can also loop through the array using a regular <code>for</code> or <code>forEach</code> loop, or any other loop.</p><pre><code class="language-js">const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
for(let i=0; i&lt;salad.length; i++) {
console.log(`Element at index ${i} is ${salad[i]}`);
salad.push('🥜');</code></pre><p>Now the salad array is:</p><p>["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑", "🥜"]</p><p>Note that the <code>push()</code> method adds an element to the end of the array. If you want to add an element to the beginning of the array, you'll need to use the <code>unshift()</code> method.</p><pre><code class="language-js">const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
salad.unshift('🥜');</code></pre><p>Now the salad array is:</p><p>["🥜", "🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]</p><h2 id="how-to-remove-elements-from-an-array-in-js">How to Remove Elements from an Array in JS</h2><p>The easiest way to remove a single element from an array is using the <code>pop()</code> method. Every time you call the <code>pop()</code> method, it removes an element from the end of the array. Then it returns the removed element and changes the original array.</p><pre><code class="language-js">const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
salad.pop(); // 🥑
console.log(salad); // ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕']</code></pre><p>Use the <code>shift()</code> method to remove an element from the beginning of an array. Like the <code>pop()</code> method, <code>shift()</code> returns the removed element and changes the original array.</p><pre><code class="language-js">const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
salad.shift(); // 🍅
console.log(salad); // ['🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];</code></pre><h2 id="how-to-copy-and-clone-an-array-in-js">How to Copy and Clone an Array in JS</h2><p>You can copy and clone an array to a new array using the <code>slice()</code> method. Note that the <code>slice()</code> method doesn't change the original array. Instead, it creates a new shallow copy of the original array.</p><pre><code class="language-js">const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
const saladCopy = salad.slice();
console.log(saladCopy); // ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']
salad === saladCopy; // returns false</code></pre><p>Alternatively, you can use the <code>spread</code> operator to create a copy of the array. We will learn about that soon.</p><h2 id="how-to-determine-if-a-value-is-an-array-in-js">How to Determine if a Value is an Array in JS</h2><p>You can determine if a value is an array using the <code>Array.isArray(value)</code> method. The method returns true if the passed value is an array.</p><pre><code class="language-js">Array.isArray(['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑']); // returns true
Array.isArray('🍅'); // returns false
Array.isArray({ 'tomato': '🍅'}); // returns false
Array.isArray([]); // returns true</code></pre><h1 id="array-destructuring-in-javascript">Array Destructuring in JavaScript</h1><p>With ECMAScript 6 (ES6), we have some new syntax to extract multiple properties from an array and assign them to variables in one go. It is handy to help you keep your code clean and concise. This new syntax is called destructuring syntax.</p><p>Here is an example of extracting the values from an array using the destructuring syntax:</p><pre><code class="language-js">let [tomato, mushroom, carrot] = ['🍅', '🍄', '🥕'];</code></pre><p>Now you can use the variables in your code:</p><pre><code class="language-js">console.log(tomato, mushroom, carrot); // Output, 🍅 🍄 🥕</code></pre><p>To do the same thing without the destructuring, it would look like this:</p><pre><code class="language-js">let vegetables = ['🍅', '🍄', '🥕'];
let tomato = vegetables[0];
let mushroom= vegetables[1];
let carrot= vegetables[2];</code></pre><p>So, the destructuring syntax saves you from writing lots of code. This gives you a massive boost in productivity.</p><h2 id="how-to-assign-a-default-value-to-a-variable">How to Assign a Default Value to a Variable</h2><p>You can assign a default value using destructuring when there is no value or <code>undefined</code> for the array element.</p><p>In the example below, we assign a default value for the mushroom variable.</p><pre><code class="language-js">let [tomato , mushroom = '🍄'] = ['🍅'];
console.log(tomato); // '🍅'
console.log(mushroom ); // '🍄'</code></pre><h2 id="how-to-skip-a-value-in-an-array">How to Skip a Value in an Array</h2><p>With destructuring, you can skip an array element to map to a variable. For example, you may not be interested in all the elements in an array. In that case, skipping a value comes in handy.</p><p>In the example below, we skip the mushroom element. Notice the space in the variable declaration at the left side of the expression.</p><pre><code class="language-js">let [tomato, , carrot] = ['🍅', '🍄', '🥕'];
console.log(tomato); // '🍅'
console.log(carrot); // '🥕'</code></pre><h2 id="nested-array-destructuring-in-js">Nested Array Destructuring in JS</h2><p>In JavaScript, arrays can be nested. This means that an array can have another array as an element. Array nesting can go to any depth. </p><p>For example, let's create a nested array for fruits. It has a few fruits and an array of vegetables in it.</p><pre><code class="language-js">let fruits = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];</code></pre><p>How would you access the '🥕' from the above array? Again, you could do this without destructuring, like this:</p><pre><code class="language-js">const veg = fruits[4]; // returns the array ['🍅', '🍄', '🥕']
const carrot = veg[2]; // returns '🥕'</code></pre><p>Alternatively, you could use this short-hand syntax:</p><pre><code class="language-js">fruits[4][2]; // returns '🥕'</code></pre><p>You can also access it using the destructuring syntax, like this:</p><pre><code class="language-js">let [,,,,[,,carrot]] = ['🍈', '🍍', '🍌', '🍉', ['🍅', '🍄', '🥕']];</code></pre><h1 id="how-to-use-the-spread-syntax-and-rest-parameter-in-javascript">How to Use the Spread Syntax and Rest Parameter in JavaScript</h1><p>Since ES6, we can use the <code>...</code> (yes, three consecutive dots) as spread syntax and the rest parameter in array destructuring.</p><ul><li>For the rest parameter, the <code>...</code> appears on the left side of the destructuring syntax.</li><li>For the spread syntax, the <code>...</code> appears on the right side of the destructuring syntax.</li></ul><h2 id="how-to-use-the-rest-parameter-in-js">How to Use the Rest Parameter in JS</h2><p>With <code>Rest Parameter</code>, we can map out the left elements of an array in a new array. The rest parameter must be the last variable in the destructuring syntax.</p><p>In the example below, we have mapped the first two of the array elements to the tomato and mushroom variables. The remaining elements are mapped to the <code>rest</code> variable using the <code>...</code>. The <code>rest</code> variable is a new array containing the leftover elements.</p><pre><code class="language-js">const [tomato, mushroom, ...rest] = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
console.log(tomato); // '🍅'
console.log(mushroom); // '🍄'
console.log(rest); // ["🥦", "🥒", "🌽", "🥕", "🥑"]</code></pre><h2 id="how-to-use-the-spread-operator-in-js">How to Use the Spread Operator in JS</h2><p>With the spread operator, we can create a clone/copy of an existing array like this:</p><pre><code class="language-js">const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
const saladCloned = [...salad];
console.log(saladCloned); // ["🍅", "🍄", "🥦", "🥒", "🌽", "🥕", "🥑"]
salad === saladCloned // false</code></pre><h1 id="destructuring-use-cases-in-javascript">Destructuring Use Cases in JavaScript</h1><p>Let's look at a few exciting use-cases of array destructuring, the spread operator, and the rest parameter.</p><h2 id="how-to-swap-values-with-destructuring">How to Swap Values with Destructuring</h2><p>We can swap the value of two variables easily using the array destructuring syntax.</p><pre><code class="language-js">let first = '😔';
let second = '🙂';
[first, second] = [second, first];
console.log(first);  // '🙂'
console.log(second); // '😔'</code></pre><h2 id="how-to-merge-arrays">How to Merge Arrays</h2><p>We can merge two arrays and create a new array with all the elements from both arrays. Let's take two arrays — one with a couple of smiley faces and another with a few veggies.</p><pre><code class="language-js">const emotion = ['🙂', '😔'];
const veggies = ['🥦', '🥒', '🌽', '🥕'];</code></pre><p>Now, we will merge them to create a new array.</p><pre><code class="language-js">const emotionalVeggies = [...emotion, ...veggies];
console.log(emotionalVeggies); // ["🙂", "😔", "🥦", "🥒", "🌽", "🥕"]</code></pre><h1 id="javascript-array-methods">JavaScript Array Methods</h1><p>So far, we have seen a few array properties and methods. Let's do a quick recap of the ones we've looked at:</p><ul><li><code>push()</code> – Insert an element at the end of the array.</li><li><code>unshift()</code> – Insert an element at the beginning of the array.</li><li><code>pop()</code> – Remove an element from the end of the array.</li><li><code>shift()</code> – Remove an element from the beginning of the array.</li><li><code>slice()</code> – Create a shallow copy of an array.</li><li><code>Array.isArray()</code> – Determine if a value is an array.</li><li><code>length</code> – Determine the size of an array.</li></ul><p>Now we'll learn about other important JS array methods with examples. </p><h2 id="how-to-create-remove-update-and-access-arrays-in-javascript">How to Create, Remove, Update, and Access Arrays in JavaScript</h2><p>In this section, we will learn about methods you can use to create a new array, remove elements to make the array empty, access elements, and many more.</p><h3 id="the-concat-array-method">The <code>concat()</code> array method</h3><p>The <code>concat()</code> method merges one or more arrays and returns a merged array. It is an immutable method. This means it doesn't change (mutate) existing arrays.</p><p>Let's concat two arrays.</p><pre><code class="language-js">const first = [1, 2, 3];
const second = [4, 5, 6];
const merged = first.concat(second);
console.log(merged); // [1, 2, 3, 4, 5, 6]
console.log(first); // [1, 2, 3]
console.log(second); // [4, 5, 6]</code></pre><p>Using the <code>concat()</code> method we can merge more than two arrays. We can merge any number of arrays with this syntax:</p><pre><code class="language-js">array.concat(arr1, arr2,..,..,..,arrN);</code></pre><p>Here is an example:</p><pre><code class="language-js">const first = [1, 2, 3];
const second = [4, 5, 6];
const third = [7, 8, 9];
const merged = first.concat(second, third);
console.log(merged); // [1, 2, 3, 4, 5, 6, 7, 8, 9]</code></pre><h3 id="the-join-array-method">The <code>join()</code> array method</h3><p>The <code>join()</code> method joins all the elements of the array using a separator and returns a string. The default separator used for joining is <code>comma(,)</code>. </p><pre><code class="language-js">const emotions = ['🙂', '😍', '🙄', '😟'];
const joined = emotions.join();
console.log(joined); // "🙂,😍,🙄,😟"
</code></pre><p>You can pass a separator of your choice to join the elements. Here is an example of joining the elements with a custom separator:</p><pre><code class="language-js">const joined = emotions.join('&lt;=&gt;');
console.log(joined); // "🙂&lt;=&gt;😍&lt;=&gt;🙄&lt;=&gt;😟"</code></pre><p>Invoking the <code>join()</code> method on an empty array returns an empty string:</p><pre><code class="language-js">[].join() // returns ""</code></pre><h3 id="the-fill-array-method">The <code>fill()</code> array method</h3><p>The <code>fill()</code> method fills an array with a static value. You can change all the elements to a static value or change a few selected items. Note that the <code>fill()</code> method changes the original array.</p><pre><code class="language-js">const colors = ['red', 'blue', 'green'];
colors.fill('pink');
console.log(colors); // ["pink", "pink", "pink"]</code></pre><p>Here is an example where we are changing only the last two elements of the array using the <code>fill()</code> method:</p><pre><code class="language-js">const colors = ['red', 'blue', 'green'];
names.includes('tom'); // returns true
names.includes('july'); // returns false</code></pre><h3 id="the-indexof-array-method">The <code>indexOf()</code> array method</h3><p>You may want to know the index position of an element in array. You can use the <code>indexOf()</code> method to get that. It returns the index of the first occurrence of an element in the array. If an element is not found, the <code>indexOf()</code> method returns <code>-1</code>.</p><pre><code class="language-js">const names = ['tom', 'alex', 'bob', 'john'];
names.indexOf('alex'); // returns 1
names.indexOf('rob'); // returns -1</code></pre><p>There is another method <code>lastIndexOf()</code> that helps you find the index of the last occurrence of an element in the array. Like <code>indexOf()</code>, <code>lastIndexOf()</code> also returns <code>-1</code> if the element is not found.</p><pre><code class="language-js">const names = ['tom', 'alex', 'bob', 'tom'];
names.indexOf('tom'); // returns 0
names.lastIndexOf('tom'); // returns 3</code></pre><h3 id="the-reverse-array-method">The <code>reverse()</code> array method</h3><p>As the name suggests, the <code>reverse()</code> method reverses the elements' positions in the array so that the last element goes into the first position and the first one to the last.</p><pre><code class="language-js">const names = ['tom', 'alex', 'bob'];
names.reverse(); // returns ["bob", "alex", "tom"]
</code></pre><p>The <code>reverse()</code> method modifies the original array.</p><h3 id="the-sort-array-method">The <code>sort()</code> array method</h3><p>The <code>sort()</code> method is probably one of the most often used array methods. The default <code>sort()</code> method converts the element types into strings and then sorts them. The default sorting order is ascending. The <code>sort()</code> method changes the original array.</p><pre><code class="language-js">const names = ['tom', 'alex', 'bob'];
names.sort(); // returns ["alex", "bob", "tom"]</code></pre><p>The <code>sort()</code> method accepts an optional comparator function as an argument. You can write a comparator function and pass to the <code>sort()</code> method to override the default sorting behavior.</p><p>Let's now take an array of numbers and sort them in ascending and descending order using a comparator function:</p><pre><code class="language-js">const numbers = [23, 5, 100, 56, 9, 13, 37, 10, 1]
</code></pre><p>First, we'll invoke the default <code>sort()</code> method and see the output:</p><pre><code class="language-js">numbers.sort();</code></pre><p>Now the sorted array is, [1, 10, 100, 13, 23, 37, 5, 56, 9]. Well, that's not the output we expect. But it happens because the default <code>sort()</code> method converts the elements to a string and then compares them based on the <code>UTF-16</code> code unit values.</p><p>To solve this, let's write a comparator function. Here is one for the ascending order:</p><pre><code class="language-js">function ascendingComp(a, b){
return (a-b);
}</code></pre><p>Now pass this to the <code>sort()</code> method:</p><pre><code class="language-js">numbers.sort(ascendingComp); // retruns [1, 5, 9, 10, 13, 23, 37, 56, 100]
/*
We could also code it like,
numbers.sort(function(a, b) {
return (a-b);
});
Or, with the arrow function,
numbers.sort((a, b) =&gt; (a-b));
*/</code></pre><p>For descending order, do this:</p><pre><code class="language-js">numbers.sort((a, b) =&gt; (b-a));</code></pre><p>Check out this GitHub repository for more sorting examples and tips: <a href="https://github.com/atapas/js-array-sorting">https://github.com/atapas/js-array-sorting</a></p><h3 id="the-splice-array-method">The <code>splice()</code> array method</h3><p>The <code>splice()</code> method helps you add, update, and remove elements in an array. This method may be a bit confusing at the beginning, but once you know how to use it properly, you will get it right. </p><p>The main purpose of the <code>splice()</code> method is to delete elements from array. It returns an array of the elements deleted and modifies the original array. But you can add and replace elements using it as well.</p><p>To add an element using the <code>splice()</code> method, we need to pass the position where we want to add, how many elements to delete starting with the position, and the element to add. </p><p>In the example below, we are adding an element <code>zack</code> at the index <code>1</code> without deleting any elements.</p><pre><code class="language-js">const names = ['tom', 'alex', 'bob'];
names.splice(1, 0, 'zack');
console.log(names); // ["tom", "zack", "alex", "bob"]</code></pre><p>Have a look at the following example. Here we are removing one element from the <code>index 2</code> (the 3rd element) and adding a new element, <code>zack</code>. The <code>splice()</code> method returns an array with the deleted element, <code>bob</code>.</p><pre><code class="language-js">const names = ['tom', 'alex', 'bob'];
const deleted = names.splice(2, 1, 'zack');
console.log(deleted); // ["bob"]
</figure><h2 id="static-array-methods-in-javascript">Static Array Methods in JavaScript</h2><p>In JavaScript, arrays have three static methods. We have discussed <code>Array.isArray()</code> already. Let's discuss the other two now.</p><h3 id="the-array-from-array-method">The <code>Array.from()</code> array method</h3><p>Let's take a simple HTML code snippet that contains a div and a few list elements:</p><pre><code class="language-html">&lt;div id="main"&gt;
&lt;ul&gt;
&lt;ol type="1"&gt;
&lt;li&gt;...&lt;/li&gt;
&lt;li&gt;...&lt;/li&gt;
&lt;li&gt;...&lt;/li&gt;
&lt;li&gt;...&lt;/li&gt;
&lt;li&gt;...&lt;/li&gt;
&lt;li&gt;...&lt;/li&gt;
&lt;li&gt;...&lt;/li&gt;
&lt;li&gt;...&lt;/li&gt;
&lt;li&gt;...&lt;/li&gt;
&lt;li&gt;...&lt;/li&gt;
&lt;/ol&gt;
&lt;/ul&gt;
// Do something here..
{
'id': 001,
'f_name': 'Alex',
'l_name': 'B',
'gender': 'M',
'married': false,
'age': 22,
'paid': 250,
'courses': ['JavaScript', 'React']
},
{
'id': 002,
'f_name': 'Ibrahim',
'l_name': 'M',
'gender': 'M',
'married': true,
'age': 32,
'paid': 150,
'courses': ['JavaScript', 'PWA']
},
{
'id': 003,
'f_name': 'Rubi',
'l_name': 'S',
'gender': 'F',
'married': false,
'age': 27,
'paid': 350,
'courses': ['Blogging', 'React', 'UX']
},
{
'id': 004,
'f_name': 'Zack',
'l_name': 'F',
'gender': 'M',
'married': true,
'age': 36,
'paid': 250,
'courses': ['Git', 'React', 'Branding']
}
];</code></pre><p>Alright, let's get started. All the array iterator methods take a function as an argument. You need to specify the logic to iterate and apply in that function.</p><h3 id="the-filter-array-method">The <code>filter()</code> array method</h3><p>The <code>filter()</code> method creates a new array with all the elements that satisfies the condition mentioned in the function. Let's find the student who is female. So the filter condition should be that the gender is equal to 'F'.</p><pre><code class="language-js">const femaleStudents = students.filter((element, index) =&gt; {
return element.gender === 'F';
})
const fullNames = students.map((element, index) =&gt; {
return {'fullName': element['f_name'] + ' ' + element['l_name']}
});
(accumulator, student, currentIndex, array) =&gt; {
accumulator = accumulator + student.paid;
return (accumulator);
},
0);
console.log(total); // 1000</code></pre><p>In the above code,</p><ul><li>We initialize the <code>accumulator</code> with <code>0</code>.</li><li>We apply the <code>reduce</code> method on each of the student objects. We access the <code>paid</code> property and add it to the accumulator.</li><li>Finally, we return the accumulator.</li></ul><h3 id="the-some-array-method">The <code>some()</code> array method</h3><p>The <code>some()</code> method returns a boolean value (true/false) based on at least one element in the array passing the condition in the function. Let's see if there are any students below the age 30.</p><pre><code class="language-js">let hasStudentBelow30 = students.some((element, index) =&gt; {
return element.age &lt; 30;
});
console.log(hasStudentBelow30); // true</code></pre><p>Yes, we see there is at least one student younger than 30.</p><h3 id="the-find-array-method">The <code>find()</code> array method</h3><p>Using the <code>some()</code> method, we have seen that there is a student below age 30. Let's find out who that student is. </p><p>To do that, we will use the <code>find()</code> method. It returns the first matched element from the array that satisfies the condition in the function. </p><p>Arrays have another related method, <code>findIndex()</code>, that returns the index of the element we find using the <code>find()</code> method. If no elements match the condition, the <code>findIndex()</code> method returns <code>-1</code>.</p><p>In the example below, we pass a function to the <code>find()</code> method that checks for the age of each of the student. It returns the matched student when the condition satisfies.</p><pre><code class="language-js">const student = students.find((element, index) =&gt; {
return element.age &lt; 30;
});
return elements.courses.length &gt;= 2;
});
console.log(atLeastTwoCourses); // true</code></pre><p>As expected, we see that the output is <code>true</code>.</p><h2 id="proposed-array-methods">Proposed Array Methods</h2><p>As of May, 2021, ECMAScript has a <a href="https://tc39.es/proposal-relative-indexing-method/#sec-array-prototype-additions">method in proposal</a>, the <code>at()</code> method.</p><h3 id="the-at-method">The <code>at()</code> Method</h3><p>The proposed <code>at()</code> method would help you access the elements of an array using a negative index number. As of now, this is not possible. You can access elements only from the beginning of the array using a positive index number. </p><p>Accessing elements from the back of the array is possible using the length value. With the inclusion of the <code>at()</code> method, you would be able to access the elements using both positive and negative indexes using a single method.</p><pre><code class="language-js">const junkFoodILove = ['🥖', '🍔', '🍟', '🍕', '🌭', '🥪', '🌮', '🍿'];
junkFoodILove.at(0); // 🥖
junkFoodILove.at(3); // 🍕
junkFoodILove.at(-1); // 🍿
junkFoodILove.at(-5); // 🍕
junkFoodILove.at(-8); // 🥖
junkFoodILove.at(10); // undefined
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
