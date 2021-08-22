---
card: "/images/default.jpg"
tags: [JavaScript]
description: Surely you've heard that, in JavaScript, everything is an obj
author: "Milad E. Fahmy"
title: "JavaScript Standard Objects: Arrays"
created: "2021-08-15T19:31:08+02:00"
modified: "2021-08-15T19:31:08+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-arrays tag-toothbrush ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Standard Objects: Arrays</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2020/02/very-large-array.jpg 300w,
/news/content/images/size/w600/2020/02/very-large-array.jpg 600w,
/news/content/images/size/w1000/2020/02/very-large-array.jpg 1000w,
/news/content/images/size/w2000/2020/02/very-large-array.jpg 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2020/02/very-large-array.jpg" alt="JavaScript Standard Objects: Arrays">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content medium-migrated-article">
<p>Surely you've heard that, in JavaScript, everything is an object. Strings, numbers, functions, arrays, and, well, objects are considered objects.</p>
<p>In this tutorial we'll take a deep dive into the <strong>Array</strong> "global" or "standard built-in" object, along with the methods associated with it.</p>
<h2 id="what-s-an-array">What's an array?</h2>
<p>In JavaScript, an array is a list-like object that stores comma separated values. These values can be anything – strings, numbers, objects, or even functions.</p>
<p>Arrays start with an opening bracket (<code>[</code>) and end with a closing bracket (<code>]</code>), use numbers as element indexes.</p>
<h3 id="how-to-create-an-array-">How to create an array:</h3><pre><code class="language-js">const shoppingList = ['Bread', 'Cheese', 'Apples'];</code></pre>
<h3 id="access-a-value-in-an-array-with-bracket-notation">Access a value in an array with bracket notation</h3><pre><code class="language-js">const shoppingList = ['Bread', 'Cheese', 'Apples'];
console.log(shoppingList[1])
// Cheese</code></pre>
<p>The array standard object has a number of useful methods, some of which are listed below.</p>
<h2 id="array-prototype-isarray-">Array.prototype.isArray()</h2>
<p>The <code>Array.isArray()</code> method returns <code>true</code> if an object is an array, <code>false</code> if it is not.</p>
<h3 id="syntax">Syntax</h3><pre><code class="language-text">Array.isArray(obj)</code></pre>
<h3 id="parameters"><strong>Parameters</strong></h3>
<p><strong><strong>obj</strong></strong> The object to be checked.</p>
<h3 id="examples-of-isarray-">Examples of .isArray()</h3><pre><code class="language-text">// all following calls return true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
// Little known fact: Array.prototype itself is an array:
Array.isArray(Array.prototype);
// all following calls return false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray({ __proto__: Array.prototype });</code></pre>
<h2 id="array-prototype-length"><strong>Array.prototype.length</strong></h2>
<p><code>length</code> is a property of arrays in JavaScript that returns or sets the number of elements in a given array.</p>
<p>The <code>length</code> property of an array can be returned like so.</p><pre><code class="language-js">let desserts = ["Cake", "Pie", "Brownies"];
console.log(desserts.length); // 3</code></pre>
<p>The assignment operator, in conjunction with the <code>length</code> property, can be used to set then number of elements in an array like so.</p><pre><code class="language-js">let cars = ["Saab", "BMW", "Volvo"];
cars.length = 2;
console.log(cars.length); // 2</code></pre>
<h2 id="array-prototype-push">Array.prototype.push</h2>
<p>The <code>push()</code> method is used to add one or more new elements to the end of an array. It also returns the new length of the array. If no arguments are provided, it will simply return the current length of the array. </p>
<h3 id="syntax-1"><strong>Syntax</strong></h3><pre><code class="language-javascript">arr.push([element1[, ...[, elementN]]])</code></pre>
<h3 id="parameters-1"><strong>Parameters</strong></h3>
<ul>
<li><strong><strong>elementN</strong></strong> The elements to add to the end of the array.</li>
</ul>
<h3 id="return-value"><strong>Return value</strong></h3>
<p>The new length of the array on which the method was called.</p>
<h2 id="example-"><strong>Example:</strong></h2><pre><code class="language-javascript">let myStarkFamily = ['John', 'Robb', 'Sansa', 'Bran'];</code></pre>
<p>Suppose you have an array of the children of House Stark from Game of Thrones. However, one of the members, <strong><strong>Arya</strong></strong>, is missing. Knowing the code above, you could add her by assigning <code>'Arya'</code> to the array at the index after the last index like so:</p><pre><code class="language-javascript">myStarkFamily[4] = 'Arya';</code></pre>
<p>The problem with this solution is that it can’t handle general cases. If you didn’t know beforehand what the length of the array is, you can’t add new elements this way. This is what <code>push()</code> is for. We don’t need to know how long the array is. We just add our element to the end of the array.</p><pre><code class="language-javascript">myStarkFamily.push('Arya');
console.log(myStarkFamily);  // ['John', 'Robb', 'Sansa', 'Bran', 'Arya']
let newLength = myStarkFamily.push('Rickon');  // oops! forgot Rickon
console.log(newLength);  // 6
console.log(myStarkFamily);  // ['John', 'Robb', 'Sansa', 'Bran', 'Arya', 'Rickon']</code></pre>
<h2 id="array-prototype-reverse">Array.prototype.reverse</h2>
<p>The JavaScript array method <code>.reverse()</code> will reverse the order of the elements within the array.</p>
<p><strong><strong>Syntax</strong></strong></p><pre><code class="language-javascript">  let array = [1, 2, 3, 4, 5];
array.reverse();</code></pre>
<h2 id="description"><strong>Description</strong></h2>
<p><code>.reverse()</code> reverses the index of the elements of an array.</p>
<h2 id="examples"><strong>Examples</strong></h2>
<p><strong><strong>Use <code>.reverse()</code> to reverse the elements of an array</strong></strong></p><pre><code class="language-javascript">  let array = [1, 2, 3, 4, 5];
console.log(array);
// Console will output 1, 2, 3, 4, 5
array.reverse();
console.log(array);
/* Console will output 5, 4, 3, 2, 1 and
the variable array now contains the set [5, 4, 3, 2, 1] */</code></pre>
<h2 id="array-prototype-indexof">Array.prototype.indexOf</h2>
<p>The <code>indexOf()</code> method returns the first index at which a given element can be found in the array. If the element is not present, it returns -1.</p>
<p>The <code>indexOf()</code> takes an element you want to search for as a parameter, iterates through the elements in an array, and returns the first index where the element can be found. If the element is not in the array, <code>indexOf</code> returns -1.</p>
<p><strong>Syntax</strong></p><pre><code class="language-javascript">  arr.indexOf(searchElement[, fromIndex])</code></pre>
<p><strong>Parameters</strong></p>
<ul>
<li><strong><strong>searchElement</strong>: </strong>The element you're searching for.</li>
<li><strong><strong>fromIndex</strong></strong> (Optional): The index at which you want to start the search at. If the <code>fromIndex</code> is greater than or equal to the array’s length, the array is not searched and the method returns -1. If the fromIndex is a negative number, it considered an offset from the end of the array (the array is still searched forwards from there). The default value is 0, which means the entire array is searched.</li>
<li>The array index you want to start searching form. The default value is 0, meaning the search starts from the first index of the array. If <code>fromIndex</code> is greater than or equal to the array's length, then the method doesn't search the array and returns -1.</li>
</ul>
<h3 id="examples-1">Examples</h3><pre><code class="language-javascript">var array = [1, 2, 4, 1, 7]
array.indexOf(1); // 0
array.indexOf(7); // 4
array.indexOf(6); // -1
array.indexOf('1'); // -1
array.indexOf('hello'); // -1
array.indexOf(1, 2); // 3
array.indexOf(1, -3); // 3</code></pre>
<h2 id="array-prototype-findindex">Array.prototype.findIndex</h2>
<p>The <code>findIndex()</code> method goes through an array and tests every element against the testing function that's passed as a parameter. It returns the index of the first element of the array that returns true against the testing functions. If no elements return true, <code>findIndex()</code> returns -1.</p>
<p>Note that <code>findIndex()</code> does not mutate the array it's called on.</p>
<p><strong>Syntax</strong></p><pre><code class="language-text">arr.findIndex(callback(element, index, array), [thisArg])</code></pre>
<h5 id="parameters-2"><strong>Parameters</strong></h5>
<p><code>callback</code>: Function to execute on each value in the array, which takes three arguments: </p>
<ul>
<li><code>element</code>: The current element being processed in the array.</li>
<li><code>index</code>: The index of the current element being processed in the array.</li>
<li><code>array</code>: The array findIndex() was called upon.</li>
</ul>
<p><code>thisArg</code> (Optional): An object to use as <code>this</code> when executing the callback function.</p>
<h3 id="examples-2">Examples</h3>
<p>This example will find the corresponding item in the array and return the index from it.</p><pre><code class="language-javascript">let items = [
{name: 'books', quantity: 2},
{name: 'movies', quantity: 1},
{name: 'games', quantity: 5}
];
function findMovies(item) {
return item.name === 'movies';
}
console.log(items.findIndex(findMovies));
// Index of 2nd element in the Array is returned,
// so this will result in '1'</code></pre>
<p>The following example shows the output of each optional parameter to the callback function. This will return <code>-1</code> because none of the items will return true from the callback function.</p><pre><code class="language-javascript">function showInfo(element, index, array) {
console.log('element = ' + element + ', index = ' + index + ', array = ' + array);
return false;
}
console.log('return = ' + [4, 6, 8, 12].findIndex(showInfo));
// Output
//  element = 4, index = 0, array = 4,6,8,12
//  element = 6, index = 1, array = 4,6,8,12
//  element = 8, index = 2, array = 4,6,8,12
//  element = 12, index = 3, array = 4,6,8,12
//  return = -1</code></pre>
<h2 id="array-prototype-find">Array.prototype.find</h2>
<p>The <code>find()</code> method goes through an array and tests every element against the testing function that's passed as a parameter. It returns the value of the first element of the array that returns true against the testing functions. If no elements return true, <code>find()</code> returns <code>undefined</code>.</p>
<p>Note that <code>find()</code> does not mutate the array it's called on.</p>
<h3 id="syntax-2">Syntax</h3><pre><code class="language-text">arr.find(callback(element, index, array), [thisArg])</code></pre>
<h5 id="parameters-3"><strong>Parameters</strong></h5>
<p><code>callback</code>: Function to execute on each value in the array. It takes three arguments:</p>
<ul>
<li><code>element</code>: The current element being processed in the array.</li>
<li><code>index</code>: The index of the current element being processed in the array.</li>
<li><code>array</code>: The array find was called upon.</li>
</ul>
<p><code>thisArg</code> (Optional): An object to use as <code>this</code> when executing the callback function.</p>
<h3 id="examples-3">Examples</h3>
<p>This example will find the corresponding item in the array and return the object from it.</p><pre><code class="language-javascript">let items = [
{name: 'books', quantity: 2},
{name: 'movies', quantity: 1},
{name: 'games', quantity: 5}
];
function findMovies(item) {
return item.name === 'movies';
}
console.log(items.find(findMovies));
// Output
//  { name: 'movies', quantity: 1 }</code></pre>
<p>The following example shows the output of each optional parameter to the callback function. This will return <code>undefined</code> because none of the items will return true from the callback function.</p><pre><code class="language-javascript">function showInfo(element, index, array) {
console.log('element = ' + element + ', index = ' + index + ', array = ' + array);
return false;
}
console.log('return = ' + [4, 6, 8, 12].find(showInfo));
// Output
//  element = 4, index = 0, array = 4,6,8,12
//  element = 6, index = 1, array = 4,6,8,12
//  element = 8, index = 2, array = 4,6,8,12
//  element = 12, index = 3, array = 4,6,8,12
//  return = undefined</code></pre>
<h2 id="array-prototype-join">Array.prototype.join</h2>
<p>The JavaScript array method <code>.join()</code> will combine all elements of an array into a single string.</p>
<p><strong><strong>Syntax</strong></strong></p><pre><code class="language-javascript">  const array = ["Lorem", "Ipsum", "Dolor", "Sit"];
const str = array.join([separator]);</code></pre>
<h3 id="parameters-4">Parameters</h3>
<p><strong><strong>separator</strong> </strong>Optional. Specifies the string to use to separate each element of the original array. If the separator is not a string, it will be converted to a string. If separator parameter is not provided, array elements are separated with a comma by default. If separator is an empty string <code>""</code>, all array elements are joined without a separator character between them.</p>
<h3 id="description-1">Description</h3>
<p><code>.join()</code> joins all elements of an array into a single string. If any of the array elements are <code>undefined</code> or <code>null</code>, that element is converted to the empty string <code>""</code>.</p>
<h3 id="examples-4">Examples</h3>
<p><strong><strong>Using <code>.join()</code> four different ways</strong></strong></p><pre><code class="language-javascript">const array = ["Lorem", "Ipsum", "Dolor" ,"Sit"];
const join1 = array.join();           /* assigns "Lorem,Ipsum,Dolor,Sit" to join1 variable
(because no separator was provided .join()
defaulted to using a comma) */
const join2 = array.join(", ");       // assigns "Lorem, Ipsum, Dolor, Sit" to join2 variable
const join3 = array.join(" + ");      // assigns "Lorem + Ipsum + Dolor + Sit" to join3 variable
const join4 = array.join("");         // assigns "LoremIpsumDolorSit" to join4 variable</code></pre>
<h2 id="array-prototype-concat"><strong>Array.prototype.concat</strong></h2>
<p>The <code>.concat()</code> method returns a new array consisting of the elements of the array on which you call it, followed by the elements of the arguments in the order they are passed.</p>
<p>You can pass multiple arguments to the <code>.concat()</code> method. The arguments can be arrays, or data types like booleans, strings, and numbers.</p>
<h3 id="syntax-3"><strong>Syntax</strong></h3><pre><code class="language-javascript">const newArray = array.concat(value1, value2, value3...);</code></pre>
<h3 id="examples-5"><strong>Examples</strong></h3>
<h4 id="concatenating-two-arrays"><strong>Concatenating two arrays</strong></h4><pre><code class="language-javascript">const cold = ['Blue', 'Green', 'Purple'];
const warm = ['Red', 'Orange', 'Yellow'];
const result = cold.concat(warm);
console.log(result);
// results in ['Blue', 'Green', 'Purple', 'Red', 'Orange', 'Yellow'];</code></pre>
<h4 id="concatenating-value-to-an-array"><strong>Concatenating value to an array</strong></h4><pre><code class="language-javascript">const odd = [1, 3, 5, 7, 9];
const even = [0, 2, 4, 6, 8];
const oddAndEvenAndTen = odd.concat(even, 10);
console.log(oddAndEvenAndTen);
// results in [1, 3, 5, 7, 9, 0, 2, 4, 6, 8, 10];</code></pre>
<h2 id="array-prototype-slice">Array.prototype.slice</h2>
<p>The JavaScript array method <code>.slice()</code> will return a new array object which will be a segment (a slice) of the original array. The original array is not modified.</p>
<p><strong><strong>Syntax</strong></strong></p><pre><code class="language-javascript">  array.slice()
arr.slice(startIndex)
arr.slice(startIndex, endIndex) </code></pre>
<h3 id="parameters-5">Parameters</h3>
<ul>
<li><strong><strong>startIndex</strong></strong> The zero-based index where the slice should begin. If the value is omitted, it will start at 0.</li>
<li><strong><strong>endIndex</strong></strong> The slice will end <strong><strong>before</strong></strong> this zero-based index. A negative index is used to offset from the end of the array. If the value is omitted, the segment will slice to the end of the array.</li>
</ul>
<h3 id="examples-6">Examples</h3><pre><code class="language-javascript">  const array = ['books', 'games', 'cup', 'sandwich', 'bag', 'phone', 'cactus']
const everything = array.slice()
// everything = ['books', 'games', 'cup', 'sandwich', 'bag', 'phone', 'cactus']
const kitchen = array.slice(2, 4)
// kitchen = ['cup', 'sandwich']
const random = array.slice(4)
// random = ['bag', 'phone', 'cactus']
const noPlants = array.slice(0, -1)
// noPlats = ['books', 'games', 'cup', 'sandwich', 'bag', 'phone']
// array will still equal ['books', 'games', 'cup', 'sandwich', 'bag', 'phone', 'cactus']</code></pre>
<h4></h4>
<h2 id="array-prototype-splice"><strong>Array.prototype.splice</strong></h2>
<p>The splice method is similar to <a href="https://guide.freecodecamp.org/javascript/standard-objects/array/array-prototype-slice" rel="nofollow">Array.prototype.slice</a>, but unlike <code>slice()</code> it mutates the array it is called on. It also differs in that it can be used to add values to an array as well as remove them.</p>
<h3 id="parameters-6"><strong>Parameters</strong></h3>
<p><code>splice()</code> can take one or more parameters detailed below.</p>
<h4 id="splice-start-"><strong>splice(start)</strong></h4>
<p>If only one parameter is included, then <code>splice(start)</code> will remove all array elements from <code>start</code> to the end of the array.</p><pre><code class="language-js">let exampleArray = ['first', 'second', 'third', 'fourth'];
exampleArray.splice(2);
// exampleArray is now ['first', 'second'];</code></pre>
<p>If <code>start</code> is negative, it will count backwards from the end of the array.</p><pre><code class="language-js">let exampleArray = ['first', 'second', 'third', 'fourth'];
exampleArray.splice(-1);
// exampleArray is now ['first', 'second', 'third'];</code></pre>
<h4 id="splice-start-deletecount-"><strong>splice(start, deleteCount)</strong></h4>
<p>If a second parameter is included, then <code>splice(start, deleteCount)</code> will remove <code>deleteCount</code> elements from the array, beginning with <code>start</code>.</p><pre><code class="language-js">let exampleArray = ['first', 'second', 'third', 'fourth'];
exampleArray.splice(1, 2);
// exampleArray is now ['first', 'fourth'];</code></pre>
<h4 id="splice-start-deletecount-newelement1-newelement2-"><strong>splice(start, deleteCount, newElement1, newElement2, …)</strong></h4>
<p>If more than two parameters are included, the additional parameters will be new elements that are added to the array. The location of these added elements will be begin at <code>start</code>.</p>
<p>Elements can be added without removing any elements by passing <code>0</code> as the second parameter.</p><pre><code class="language-js">let exampleArray = ['first', 'second', 'third', 'fourth'];
exampleArray.splice(1, 0, 'new 1', 'new 2');
// exampleArray is now ['first', 'new 1', 'new 2', 'second', 'third', 'fourth']</code></pre>
<p>Elements can also be replaced.</p><pre><code class="language-js">let exampleArray = ['first', 'second', 'third', 'fourth'];
exampleArray.splice(1, 2, 'new second', 'new third');
// exampleArray is now ['first', 'new second', 'new third', 'fourth']</code></pre>
<h3 id="return-value-1"><strong>Return value</strong></h3>
<p>In addition to changing the array that it is called on, <code>splice()</code> also returns an array containing the removed values. This is a way of cutting an array into two different arrays.</p><pre><code class="language-js">let exampleArray = ['first', 'second', 'third', 'fourth'];
let newArray = exampleArray.splice(1, 2);
// exampleArray is now ['first', 'fourth']
// newArray is ['second', 'third']</code></pre>
<h2 id="array-prototype-filter"><strong>Array.prototype.filter</strong></h2>
<p>The filter method takes an array as an input. It takes each element in the array and it applies a conditional statement against it. If this conditional returns true, the element gets “pushed” to the output array.</p>
<p>Once each element in the input array is “filtered” as such, it outputs a new array containing each element that returned true.</p>
<p>In this example below, there is an array that has multiple objects within it. Normally, to iterate through this array, you might use a for loop.</p>
<p>In this case, we want to get all the students whose grades are greater than or equal to 90.</p><pre><code class="language-javascript">const students = [
{ name: 'Quincy', grade: 96 },
{ name: 'Jason', grade: 84 },
{ name: 'Alexis', grade: 100 },
{ name: 'Sam', grade: 65 },
{ name: 'Katie', grade: 90 }
];
//Define an array to push student objects to.
let studentsGrades = []
for (var i = 0; i &lt; students.length; i++) {
//Check if grade is greater than 90
if (students[i].grade &gt;= 90) {
//Add a student to the studentsGrades array.
studentsGrades.push(students[i])
}
}
console.log(studentsGrades); // [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ]</code></pre>
<p>This for loop works, but it is pretty lengthy. It can also become tedious to write for loops over and over again for many arrays that you need to iterate through.</p>
<p>This is a great use case for filter!</p>
<p>Here is the same example using filter:</p><pre><code class="language-javascript">const students = [
{ name: 'Quincy', grade: 96 },
{ name: 'Jason', grade: 84 },
{ name: 'Alexis', grade: 100 },
{ name: 'Sam', grade: 65 },
{ name: 'Katie', grade: 90 }
];
const studentGrades = students.filter(function (student) {
//This tests if student.grade is greater than or equal to 90. It returns the "student" object if this conditional is met.
return student.grade &gt;= 90;
});
console.log(studentGrades); // [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ]</code></pre>
<p>The filter method is much faster to write and cleaner to read while still accomplishing the same thing. Using ES6 syntax we can even replicate the 6-line for-loop with filter:</p><pre><code class="language-javascript">const students = [
{ name: 'Quincy', grade: 96 },
{ name: 'Jason', grade: 84 },
{ name: 'Alexis', grade: 100 },
{ name: 'Sam', grade: 65 },
{ name: 'Katie', grade: 90 }
];
const studentGrades = students.filter(student =&gt; student.grade &gt;= 90);
console.log(studentGrades); // [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ]</code></pre>
<p>Filter is very useful and a great choice over for loops to filter arrays against conditional statements.</p>
<h2 id="array-prototype-foreach"><strong>Array.prototype.forEach</strong></h2>
<p>The <code>.forEach()</code> array method is used to iterate through each item in an array. The method is called on the array object and is passed a function that is called on each item in the array.</p><pre><code class="language-javascript">let arr = [1, 2, 3, 4, 5];
arr.forEach(number =&gt; console.log(number * 2));
// 2
// 4
// 6
// 8
// 10</code></pre>
<p>The callback function can also take a second parameter of an index in case you need to reference the index of the current item in the array.</p><pre><code class="language-javascript">let arr = [1, 2, 3, 4, 5];
arr.forEach((number, i) =&gt; console.log(`${number} is at index ${i}`));
// '1 is at index 0'
// '2 is at index 1'
// '3 is at index 2'
// '4 is at index 3'
// '5 is at index 4'</code></pre>
<h2 id="array-prototype-reduce"><strong>Array.prototype.reduce</strong></h2>
<p>The <code>reduce()</code> method reduces an array of values down to just one value. It's been called the Swiss Army knife, or multi-tool, of array transformation methods. Others, such as <code>map()</code> and <code>filter()</code>, provide more specific transformations, whereas <code>reduce()</code> can be used to transform arrays into any output you desire.</p>
<h3 id="syntax-4"><strong>Syntax</strong></h3><pre><code class="language-js">arr.reduce(callback[, initialValue])</code></pre>
<p>The <code>callback</code> argument is a function that will be called once for every item in the array. This function takes four arguments, but often only the first two are used.</p>
<ul>
<li><em>accumulator</em> - the returned value of the previous iteration</li>
<li><em>currentValue</em> - the current item in the array</li>
<li><em>index</em> - the index of the current item</li>
<li><em>array</em> - the original array on which reduce was called</li>
<li>The <code>initialValue</code> argument is optional. If provided, it will be used as the initial accumulator value in the first call to the callback function (see Example 2 below).</li>
</ul>
<h3 id="example-1"><strong>Example 1</strong></h3>
<p>Transform an array of integers into the sum of all integers in the array.</p><pre><code class="language-js">const numbers = [1,2,3];
const sum = numbers.reduce(function(total, current){
return total + current;
});
console.log(sum); </code></pre>
<p>This will output <code>6</code> to the console.</p>
<h3 id="example-2"><strong>Example 2</strong></h3>
<p>Transform an array of strings into a single object that shows how many times each string appears in the array. Notice this call to reduce passes an empty object <code>{}</code> as the <code>initialValue</code> parameter. This will be used as the initial value of the accumulator (the first argument) passed to the callback function.</p><pre><code class="language-js">const pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
const petCounts = pets.reduce(function(obj, pet){
if (!obj[pet]) {
obj[pet] = 1;
} else {
obj[pet]++;
}
return obj;
}, {});
console.log(petCounts); </code></pre>
<p>Output:</p><pre><code class="language-js"> {
dog: 2,
chicken: 3,
cat: 1,
rabbit: 1
}</code></pre>
<h2 id="array-prototype-sort"><strong>Array.prototype.sort</strong></h2>
<p>This method sorts the elements of an array in place and returns the array.</p>
<p>The <code>sort()</code> method follows the <strong><strong>ASCII order</strong></strong>!</p><pre><code class="language-js">let myArray = ['#', '!'];
let sortedArray = myArray.sort();   // ['!', '#'] because in the ASCII table "!" is before "#"
myArray = ['a', 'c', 'b'];
console.log(myArray.sort()); // ['a', 'b', 'c']
console.log(myArray) // ['a', 'b', 'c']
myArray = ['b', 'a', 'aa'];
console.log(myArray.sort());   // ['a', 'aa', 'b']
myArray = [1, 2, 13, 23];
console.log(myArray.sort());   // [1, 13, 2, 23] numbers are treated like strings!</code></pre>
<h3 id="advanced-usage">Advanced usage</h3>
<p>The <code>sort()</code> method can also accept a parameter: <code>array.sort(compareFunction)</code></p>
<h3 id="for-example"><strong>For example</strong></h3><pre><code class="language-js">function compare(a, b){
if (a &lt; b){return -1;}
if (a &gt; b){return 1;}
if (a === b){return 0;}
}
let myArray = [1, 2, 23, 13];
console.log(myArray.sort()); // [ 1, 13, 2, 23 ]
console.log(myArray.sort(compare));   // [ 1, 2, 13, 23 ]
myArray = [3, 4, 1, 2];
sortedArray = myArray.sort(function(a, b){.....});   // it depends from the compareFunction</code></pre>
<h2 id="array-prototype-some-">Array.prototype.some()</h2>
<p>The JavaScript array method <code>.some()</code> will take a callback function to test each element in the array; once the callback returns <code>true</code> then <code>.some()</code> will return true immediately.</p>
<p><strong><strong>Syntax</strong></strong></p><pre><code class="language-javascript">  var arr = [1, 2, 3, 4];
arr.some(callback[, thisArg]);</code></pre>
<h2 id="callback-function"><strong>Callback Function</strong></h2>
<p><strong><strong>Syntax</strong></strong></p><pre><code class="language-javascript">  var isEven = function isEven(currentElement, index, array) {
if(currentElement % 2 === 0) {
return true;
} else {
return false;
}
}</code></pre>
<p>See wiki on <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators" rel="nofollow">Arithmetic Operators</a> to see the remainder operator <code>%</code></p>
<p><strong><strong>Has 3 arguments</strong></strong></p>
<p>currentElement</p>
<ul>
<li>this is a variable that represents the element that is being passed to the callback.</li>
</ul>
<p>index</p>
<ul>
<li>this is the index value of the current element starting at 0</li>
</ul>
<p>array</p>
<ul>
<li>the array that <code>.some()</code> was call on.</li>
</ul>
<p>The callback function should implement a test case.</p>
<h3 id="thisarg">thisArg</h3>
<p>Is an optional parameter and more info can be found at the [MDN</p>
<h3 id="description-2">Description</h3>
<p><code>.some()</code> will run the callback function for each element in the array. Once the callback returns true, <code>.some()</code> will return <code>true</code>. If the callback returns a <a href="https://developer.mozilla.org/en-US/docs/Glossary/Falsy" rel="nofollow">falsy value</a> for <em>every</em> element in the array then <code>.some()</code> returns false.</p>
<p><code>.some()</code> will not change/mutate the array that called it.</p>
<h3 id="examples-7">Examples</h3>
<p><strong><strong>Passing a function to <code>.some()</code></strong></strong></p><pre><code class="language-javascript">const isEven = function isEven(currentElement, index, array) {
if(currentElement % 2 === 0) {
return true;
} else {
return false;
}
}
const arr1 = [1, 2, 3, 4, 5, 6];
arr1.some(isEven);  // returns true
const arr2 = [1, 3, 5, 7];
arr2.some(isEven);  // returns false</code></pre>
<p><strong><strong>Anonymous function</strong></strong></p><pre><code class="language-javascript">const arr3 = ['Free', 'Code', 'Camp', 'The Amazing'];
arr3.some(function(curr, index, arr) {
if (curr === 'The Amazing') {
return true;
}
}); // returns true
const arr4 = [1, 2, 14, 5, 17, 9];
arr4.some(function(curr, index, arr) {
return curr &gt; 20;
});  // returns false
// ES6 arrows functions
arr4.some((curr) =&gt; curr &gt;= 14)  // returns true</code></pre>
<h2 id="array-prototype-every">Array.prototype.every</h2>
<p>The <code>every()</code> method tests every whether every element in the array passes the provided test.</p>
<p><strong><strong>Syntax</strong></strong></p><pre><code class="language-javascript">  arr.every(callback[, thisArg])</code></pre>
<h3 id="parameters-7">Parameters</h3>
<ol>
<li>The <strong>callback</strong> takes up to three arguments:</li>
</ol>
<ul>
<li><strong><strong>currentValue</strong></strong> (required) – The current element in the array.</li>
<li><strong><strong>index</strong></strong> (optional) – The index or the current element in the array.</li>
<li><strong><strong>array</strong></strong> (optional) – The array the <code>every</code> method was called on.</li>
</ul>
<p>2. &nbsp;<strong><strong>thisArg</strong></strong> is optional. It's the value used as <code>this</code> in the callback.</p>
<h2 id="description-3"><strong>Description</strong></h2>
<p>The <code>every</code> method calls the <code>callback</code> function one time for each array element, in ascending index order, until the <code>callback</code> function returns false. If an element that causes <code>callback</code> to return false is found, the every method immediately returns <code>false</code>. Otherwise, the every method returns <code>true</code>.</p>
<p>The callback function is not called for missing elements of the array.</p>
<p>In addition to array objects, the every method can be used by any object that has a length property and that has numerically indexed property names. <code>every</code> does not mutate the array on which it is called.</p>
<h2 id="examples-8"><strong>Examples</strong></h2><pre><code class="language-javascript">  function isBigEnough(element, index, array) {
return element &gt;= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
// Define the callback function.
function CheckIfEven(value, index, ar) {
document.write(value + " ");
if (value % 2 == 0)
return true;
else
return false;
}
// Create an array.
var numbers = [2, 4, 5, 6, 8];
// Check whether the callback function returns true for all of the
// array values.
if (numbers.every(CheckIfEven))
document.write("All are even.");
else
document.write("Some are not even.");
// Output:
// 2 4 5 Some are not even.</code></pre>
<h2 id="array-prototype-map"><strong>Array.prototype.map</strong></h2>
<p>The <code>.map()</code> method loops through the given array and executes the provided function on each element. It returns a new array which contains the results of the function call on each element.</p>
<h3 id="examples-9"><strong>Examples</strong></h3>
<p><strong><strong>ES5</strong></strong></p><pre><code class="language-js">var arr = [1, 2, 3, 4];
var newArray = arr.map(function(element) { return element * 2});
console.log(newArray); // [2, 4, 6, 8]</code></pre>
<p><strong><strong>ES6</strong></strong></p><pre><code class="language-js">const arr = [1, 2, 3, 4];
const newArray = arr.map(element =&gt; element * 2);
console.log(newArray);
//[2, 4, 6, 8]</code></pre>
<h2 id="array-prototype-includes"><strong>Array.prototype.includes</strong></h2>
<p>The <code>includes()</code> method determines whether an array includes a value. It returns true or false.</p>
<p>It takes two arguments:</p>
<ol>
<li><code>searchValue</code> - The element to search for in the array.</li>
<li><code>fromIndex</code> - The position in the array to start searching for the proivded <code>searchValue</code>. If a negative value is supplied it starts from the array’s length minus the negative value.</li>
</ol>
<h3 id="example"><strong>Example</strong></h3><pre><code class="language-js">const a = [1, 2, 3];
a.includes(2); // true
a.includes(4); // false</code></pre>
<h2 id="array-prototype-tolocalestring"><strong>Array.prototype.toLocaleString</strong></h2>
<p>The <code>toLocaleString()</code> method returns a string representing the elements of an array. All the elements are converted to Strings using their toLocaleString methods. The result of calling this function is intended to be locale-specific.</p>
<h5 id="syntax-"><strong>Syntax:</strong></h5><pre><code class="language-text">arr.toLocaleString();</code></pre>
<h5 id="parameters-8"><strong>Parameters</strong></h5>
<ul>
<li><code>locales</code> (Optional) - argument holding either a string or an array of language tags <a href="http://tools.ietf.org/html/rfc5646">BCP 47 language tag</a>.</li>
<li><code>options</code> (Optional) - object with configuration properties</li>
</ul>
<h5 id="return-value-2"><strong>Return value</strong></h5>
<p>A string representing the elements of the array separated by a locale-specific String (such as a comma “,”)</p>
<h3 id="examples-10">Examples</h3><pre><code class="language-javascript">const number = 12345;
const date = new Date();
const myArray = [number, date, 'foo'];
const myString = myArray.toLocaleString();
console.log(myString);
// OUTPUT '12345,10/25/2017, 4:20:02 PM,foo'</code></pre>
<p>Different outputs could be displayed based on the language and region identifier (the locale).</p><pre><code class="language-javascript">const number = 54321;
const date = new Date();
const myArray = [number, date, 'foo'];
const myJPString = myArray.toLocaleString('ja-JP');
console.log(myJPString);
// OUTPUT '54321,10/26/2017, 5:20:02 PM,foo'</code></pre>
<p>And with that, you should know everything necessary to create and manipulate arrays in JavaScript. Now go forth and array stuff up!</p>
<h2 id="more-info-about-arrays-">More info about arrays:</h2>
<ul>
<li><a href="/news/what-in-the-world-is-a-javascript-array/">What in the world is a JavaScript array?</a></li>
<li><a href="/news/javascript-map-reduce-and-filter-explained-with-examples/">JavaScript array functions explained with examples</a></li>
<li><a href="/news/the-ultimate-guide-to-javascript-array-methods-reduce/">Ultimate guide to Reduce</a></li>
<li><a href="/news/the-ultimate-guide-to-javascript-array-methods-map/">Ultimate guide to Map</a></li>
<li><a href="/news/javascript-array-length/">JavaScript array length explained</a></li>
</ul>
<h2 id="more-info-about-callback-functions">More info about callback functions</h2>
<p>One thing you've undoubtedly noticed is that many of the array methods use callback functions. Check out these articles for more information about them:</p>
<ul>
<li><a href="/news/what-is-a-callback-function-in-javascript/">What is a callback function in JavaScript?</a></li>
<li><a href="/news/how-to-deal-with-nested-callbacks-and-avoid-callback-hell-1bc8dc4a2012/">How to avoid callback hell</a></li>
</ul>
</div>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
