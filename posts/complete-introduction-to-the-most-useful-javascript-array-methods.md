---
card: "https://cdn-media-2.freecodecamp.org/w1280/602b49ef0a2838549dcc6285.jpg"
tags: [JavaScript]
description: "If you re a JavaScript developer and want to improve your cod"
author: "Milad E. Fahmy"
title: "JavaScript Array Methods Tutorial – The Most Useful Methods Explained with Examples"
created: "2021-08-16T10:04:04+02:00"
modified: "2021-08-16T10:04:04+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-arrays tag-web-development tag-react ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Array Methods Tutorial – The Most Useful Methods Explained with Examples</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/602b49ef0a2838549dcc6285.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/602b49ef0a2838549dcc6285.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/602b49ef0a2838549dcc6285.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/602b49ef0a2838549dcc6285.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/602b49ef0a2838549dcc6285.jpg" alt="JavaScript Array Methods Tutorial – The Most Useful Methods Explained with Examples">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>If you're a JavaScript developer and want to improve your coding, then you should be familiar with the most commonly used ES5 and ES6+ array methods.</p><p>These methods make coding a lot easier and also make your code look clean and easy to understand.</p><p>So in this article, we will explore some of the most popular and widely used array methods. So let's get started.</p><h2 id="the-array-foreach-method">The Array.forEach Method</h2><p>The <code>Array.forEach</code> method has the following syntax:</p><pre><code class="language-js">Array.forEach(callback(currentValue [, index [, array]])[, thisArg]);</code></pre><p>The <code>forEach</code> method executes a provided function once for every element in the array.</p><p>Take a look at the below code:</p><pre><code class="language-js">const months = ['January', 'February', 'March', 'April'];
months.forEach(function(month) {
console.log(month);
});
/* output
January
February
March
April
*/
</code></pre><p>Here's a <a href="https://codepen.io/myogeshchavan97/pen/bGBqzOw?editors=0012">Code Pen Demo</a>.</p><p>Here, inside the <code>forEach</code> loop callback function, each element of the array is automatically passed as the first parameter of the function. &nbsp;</p><p>The equivalent for loop code for the above example looks like this:</p><pre><code class="language-js">const months = ['January', 'February', 'March', 'April'];
for(let i = 0; i &lt; months.length; i++) {
console.log(months[i]);
}
/* output
January
February
March
April
*/
</code></pre><p>Here's a <a href="https://codepen.io/myogeshchavan97/pen/abBJXMR?editors=0012">Code Pen Demo</a>.</p><p>The thing you need to keep in mind is that the <code>forEach</code> method does not return any value.</p><p>Take a look at the below code:</p><pre><code class="language-js">const months = ['January', 'February', 'March', 'April'];
const returnedValue = months.forEach(function (month) {
return month;
});
console.log('returnedValue: ', returnedValue); // undefined
</code></pre><p>Here's a <a href="https://codepen.io/myogeshchavan97/pen/PobpxGb?editors=0012">Code Pen Demo</a>.</p><blockquote><em>Note that </em><code><em>forEach</em></code><em> is only used to loop through the array and perform some processing or logging. It does not return any value, even if you explicitly return a value from the callback function (this means that the returned value comes as </em><code>undefined</code><em> in the above example).</em></blockquote><p>In all the above examples, we have used only the first parameter of the callback function. But the callback function also receives two additional parameters, which are:</p><ul><li>index - the index of the element which is currently being iterated</li><li>array - original array which we're looping over</li></ul><pre><code class="language-js">const months = ['January', 'February', 'March', 'April'];
months.forEach(function(month, index, array) {
console.log(month, index, array);
});
/* output
January 0 ["January", "February", "March", "April"]
February 1 ["January", "February", "March", "April"]
March 2 ["January", "February", "March", "April"]
April 3 ["January", "February", "March", "April"]
*/
</code></pre><p>Here's a <a href="https://codepen.io/myogeshchavan97/pen/OJbpqJR?editors=0012">Code Pen Demo</a>.</p><p>Depending on the requirement, you may find it useful to use the <code>index</code> and <code>array</code> parameters.</p><h3 id="advantages-of-using-foreach-instead-of-a-for-loop">Advantages of using forEach instead of a for loop</h3><ul><li>Using a <code>forEach</code> loop makes your code shorter and easier to understand</li><li>When using a <code>forEach</code> loop, we don't need to keep track of how many elements are available in the array. So it avoids the creation of an extra counter variable.</li><li>Using a <code>forEach</code> loop makes code easy to debug because there are no extra variables for looping through the array</li><li>The <code>forEach</code> loop automatically stops when all the elements of the array are finished iterating.</li></ul><h3 id="browser-support">Browser Support</h3><ul><li>All modern browsers and Internet Explorer (IE) version 9 and above</li><li>Microsoft Edge version 12 and above</li></ul><h2 id="the-array-map-method">The Array.map Method</h2><p>The Array map method is the most useful and widely used array method among all other methods.</p><p>The <code>Array.map</code> method has the following syntax:</p><pre><code class="language-js">Array.map(function callback(currentValue[, index[, array]]) {
// Return element for new_array
}[, thisArg])</code></pre><p>The <code>map</code> method executes a provided function once for every element in the array and it <strong>returns a new transformed array.</strong></p><p>Take a look at the below code:</p><pre><code class="language-js">const months = ['January', 'February', 'March', 'April'];
const transformedArray = months.map(function (month) {
return month.toUpperCase();
});
console.log(transformedArray); // ["JANUARY", "FEBRUARY", "MARCH", "APRIL"]
</code></pre><p>Here's a <a href="https://codepen.io/myogeshchavan97/pen/ExNWOyr?editors=0012">Code Pen Demo</a>.</p><p>In the above code, inside the callback function, we’re converting each element to uppercase and returning it.</p><p>The equivalent for loop code for the above example looks like this:</p><pre><code class="language-js">const months = ['January', 'February', 'March', 'April'];
const converted = [];
for(let i = 0; i &lt; months.length; i++) {
converted.push(months[i].toUpperCase());
};
console.log(converted); // ["JANUARY", "FEBRUARY", "MARCH", "APRIL"]
</code></pre><p>Here's a <a href="https://codepen.io/myogeshchavan97/pen/gOLmyQQ?editors=0012">Code Pen Demo</a>.</p><p>Using <code>map</code> helps to avoid creating a separate <code>converted</code> array beforehand for storing the converted elements. So it saves memory space and also the code looks much cleaner using array <code>map</code>, like this:</p><pre><code class="language-js">const months = ['January', 'February', 'March', 'April'];
console.log(months.map(function (month) {
return month.toUpperCase();
})); // ["JANUARY", "FEBRUARY", "MARCH", "APRIL"]
</code></pre><p>Here's a <a href="https://codepen.io/myogeshchavan97/pen/oNYZVoX?editors=0012">Code Pen Demo</a>.</p><p>Note that the <code>map</code> method returns a new array that is of the exact same length as the original array.</p><p>The difference between the <code>forEach</code> and <code>map</code> methods is that <code>forEach</code> is only used for looping and does not return anything back. On the other hand, the <code>map</code> method returns a new array that is of the exact same length as the original array.</p><p>Also, note that <code>map</code> does not change the original array but returns a new array.</p><p>Take a look at the below code:</p><pre><code class="language-js">const users = [
{
first_name: 'Mike',
last_name: 'Sheridan'
},
{
first_name: 'Tim',
last_name: 'Lee'
},
{
first_name: 'John',
last_name: 'Carte'
}
];
const usersList = users.map(function (user) {
return user.first_name + ' ' + user.last_name;
});
console.log(usersList); // ["Mike Sheridan", "Tim Lee", "John Carte"]
</code></pre><p>Here's a <a href="https://codepen.io/myogeshchavan97/pen/LYbWaxP?editors=0012">Code Pen Demo</a>.</p><p>Here, by using the array of objects and <code>map</code> methods, we're easily generating a single array with first and last name concatenated.</p><p>In the above code, we're using the <code>+</code> operator to concatenate two values. But it's much more common to use ES6 template literal syntax as shown below:</p><pre><code class="language-js">const users = [
{
first_name: 'Mike',
last_name: 'Sheridan'
},
{
first_name: 'Tim',
last_name: 'Lee'
},
{
first_name: 'John',
last_name: 'Carte'
}
];
const usersList = users.map(function (user) {
return `${user.first_name} ${user.last_name}`;
});
console.log(usersList); // ["Mike Sheridan", "Tim Lee", "John Carte"]
</code></pre><p>Here's a <a href="https://codepen.io/myogeshchavan97/pen/abBJMqe?editors=0012">Code Pen Demo</a>.</p><p>The array <code>map</code> method is also useful, if you want to extract only specific data from the array like this:</p><pre><code class="language-js">const users = [
{
first_name: 'Mike',
last_name: 'Sheridan',
age: 30
},
{
first_name: 'Tim',
last_name: 'Lee',
age: 45
},
{
first_name: 'John',
last_name: 'Carte',
age: 25
}
];
const surnames = users.map(function (user) {
return user.last_name;
});
console.log(surnames); // ["Sheridan", "Lee", "Carte"]
</code></pre><p>Here's a <a href="https://codepen.io/myogeshchavan97/pen/rNWyRdR?editors=0012">Code Pen Demo</a>.</p><p>In the above code, we're extracting only the last names of each user and storing them in an array.</p><p>We can even use <code>map</code> to generate an array with dynamic content as shown below:</p><pre><code class="language-js">const users = [
{
first_name: 'Mike',
location: 'London'
},
{
first_name: 'Tim',
location: 'US'
},
{
first_name: 'John',
location: 'Australia'
}
];
const usersList = users.map(function (user) {
return `${user.first_name} lives in ${user.location}`;
});
console.log(usersList); // ["Mike lives in London", "Tim lives in US", "John lives in Australia"]
</code></pre><p>Here's a <a href="https://codepen.io/myogeshchavan97/pen/ExNWMOY?editors=0012">Code Pen Demo</a>.</p><p>Note that in the above code, we're not changing the original <code>users</code> array. We're creating a new array with dynamic content because <code>map</code> always returns a new array.</p><h3 id="advantages-of-using-the-map-method">Advantages of using the map method</h3><ul><li>It helps quickly generate a new array without changing the original array</li><li>It helps generate an array with dynamic content based on each element</li><li>It allows us to quickly extract any element of the array</li><li>It generates an array with the exact same length as the original array</li></ul><p><strong>Browser Support:</strong></p><ul><li>All modern browsers and Internet Explorer (IE) version 9 and above</li><li>Microsoft Edge version 12 and above</li></ul><h2 id="the-array-find-method">The Array.find Method</h2><p>The <code>Array.find</code> method has the following syntax:</p><pre><code class="language-js">Array.find(callback(element[, index[, array]])[, thisArg])</code></pre><blockquote><em>The </em><code><em>find</em></code><em> method returns the </em><code><em>value</em></code><em> of the</em><strong><em> </em></strong><code><em>first element</em></code><em> in the array that satisfies the provided test condition.</em></blockquote><p>The <code>find</code> method takes a callback function as the first argument and executes the callback function for every element of the array. Each array element value is passed as the first parameter to the callback function.</p><p>Suppose, we have a list of employees like this:</p><pre><code class="language-js">const employees = [
{ name: "David Carlson", age: 30 },
{ name: "John Cena", age: 34 },
{ name: "Mike Sheridan", age: 25 },
{ name: "John Carte", age: 50 }
];</code></pre><p>and we want to get the record for the employee whose name is <code>John</code>. In this case, we can use the <code>find</code> method as shown below:</p><pre><code class="language-js">const employee = employees.find(function (employee) {
return employee.name.indexOf('John') &gt; -1;
});
console.log(employee); // { name: "John Cena", age: 34 }
</code></pre><p>Here's a <a href="https://codepen.io/myogeshchavan97/pen/VwmpVmL?editors=0011">Code Pen Demo</a>.</p><p>Even though there is <code>"John Carte"</code> in the list, the <code>find</code> method will stop when it finds the first match. So it will not return the object with the name <code>"John Carte".</code></p><p>The equivalent for loop code for the above example looks like this:</p><pre><code class="language-js">const employees = [
{ name: "David Carlson", age: 30 },
{ name: "John Cena", age: 34 },
{ name: "Mike Sheridan", age: 25 },
{ name: "John Carte", age: 50 }
];
let user;
for(let i = 0; i &lt; employees.length; i++) {
if(employees[i].name.indexOf('John') &gt; -1) {
user = employees[i];
break;
}
}
console.log(user); // { name: "John Cena", age: 34 }
</code></pre><p>Here's a <a href="https://codepen.io/myogeshchavan97/pen/BaQWbeY?editors=0012">Code Pen Demo</a>.</p><p>As you can see, using normal for loop makes the code much larger and harder to understand. But using the <code>find</code> method, we can write the same code in an easy to understand way.</p><h3 id="advantages-of-using-the-find-method">Advantages of using the find method</h3><ul><li>It allows us to quickly find any element without writing a lot of code</li><li>It stops looping as soon as it finds a match so there is no need for an extra break statement</li></ul><p><strong>Browser Support:</strong></p><ul><li>All modern browsers except Internet Explorer (IE)</li><li>Microsoft Edge version 12 and above</li></ul><h2 id="the-array-findindex-method">The Array.findIndex Method</h2><p>The <code>Array.findIndex</code> method has the following syntax:</p><pre><code class="language-js">Array.findIndex(callback(element[, index[, array]])[, thisArg])</code></pre><p>The <code>findIndex</code> method returns the <strong>index</strong> of the first element in the array <strong>that satisfies the provided test condition</strong>. Otherwise, it returns <code>-1</code>, indicating that no element passed the test.</p><pre><code class="language-js">const employees = [
{ name: 'David Carlson', age: 30 },
{ name: 'John Cena', age: 34 },
{ name: 'Mike Sheridan', age: 25 },
{ name: 'John Carte', age: 50 }
];
const index = employees.findIndex(function (employee) {
return employee.name.indexOf('John') &gt; -1;
});
console.log(index); // 1</code></pre><p>Here's a <a href="https://codepen.io/myogeshchavan97/pen/JjbWebQ?editors=0012">Code Pen Demo</a>.</p><p>Here we get the output as <strong>1</strong> which is the index of the first object with the name <code>John</code>. Note that the index starts with zero.</p><p>The equivalent for loop code for the above example looks like this:</p><pre><code class="language-js">const employees = [
{ name: 'David Carlson', age: 30 },
{ name: 'John Cena', age: 34 },
{ name: 'Mike Sheridan', age: 25 },
{ name: 'John Carte', age: 50 }
];
let index = -1;
for(let i = 0; i &lt; employees.length; i++) {
if(employees[i].name.indexOf('John') &gt; -1) {
index = i;
break;
}
}
console.log(index); // 1
</code></pre><p>Here's a <a href="https://codepen.io/myogeshchavan97/pen/oNYZOgY?editors=0012">Code Pen Demo</a>.</p><h3 id="advantages-of-using-the-findindex-method">Advantages of using the findIndex method</h3><ul><li>It allows us to quickly find the index of an element without writing a lot of code</li><li>It stops looping as soon as it finds a match so there is no need for an extra break statement</li><li>We can find the index using the array <code>find</code> method also, but using <code>findIndex</code> makes it easy and avoids creating extra variables to store the index </li></ul><p><strong>Browser Support:</strong></p><ul><li>All modern browsers except Internet Explorer (IE)</li><li>Microsoft Edge version 12 and above</li></ul><h2 id="the-array-filter-method">The Array.filter Method</h2><p>The <code>Array.filter</code> method has the following syntax:</p><pre><code class="language-js">Array.filter(callback(element[, index[, array]])[, thisArg])</code></pre><p>The <code>filter</code> method returns <code>a new array</code> with all the elements that satisfy the provided test condition.</p><p>The <code>filter</code> method takes a callback function as the first argument and executes the callback function for every element of the array. Each array element value is passed as the first parameter to the callback function.</p><pre><code class="language-js">const employees = [
{ name: 'David Carlson', age: 30 },
{ name: 'John Cena', age: 34 },
{ name: 'Mike Sheridan', age: 25 },
{ name: 'John Carte', age: 50 }
];
const employee = employees.filter(function (employee) {
return employee.name.indexOf('John') &gt; -1;
});
console.log(employee); // [ { name: "John Cena", age: 34 }, { name: "John Carte", age: 50 }]
</code></pre><p>Here's a <a href="https://codepen.io/myogeshchavan97/pen/yLVMQgE?editors=0011">Code Pen Demo</a>.</p><p>As can be seen in the above code, using <code>filter</code> helps to find all the elements from the array that match the specified test condition.</p><p>So using <code>filter</code> does not stop when it finds a particular match but keeps checking for other elements in the array that match the condition. Then it returns all the matching elements from the array.</p><blockquote>The main difference between <code>find</code> and <code>filter</code> is that <code>find</code> only returns the first matching element of the array, but using <code>filter</code> returns all the matching elements from the array.</blockquote><p>Note that the <code>filter</code> method always returns an array. If no element passes the test condition, an empty array will be returned.</p><p>The equivalent for loop code for the above example looks like this:</p><pre><code class="language-js">const employees = [
{ name: 'David Carlson', age: 30 },
{ name: 'John Cena', age: 34 },
{ name: 'Mike Sheridan', age: 25 },
{ name: 'John Carte', age: 50 }
];
let filtered = [];
for(let i = 0; i &lt; employees.length; i++) {
if(employees[i].name.indexOf('John') &gt; -1) {
filtered.push(employees[i]);
}
}
console.log(filtered); // [ { name: "John Cena", age: 34 }, { name: "John Carte", age: 50 }]
</code></pre><p>Here's a <a href="https://codepen.io/myogeshchavan97/pen/qBqrwaq?editors=0011">Code Pen Demo</a>.</p><h3 id="advantages-of-using-the-filter-method">Advantages of using the filter method</h3><ul><li>It allows us to quickly find all the matching elements from the array</li><li>It always returns an array even if there is no match, so it avoids writing extra <code>if</code> conditions</li><li>It avoids the need of creating an extra variable to store the filtered elements</li></ul><p><strong>Browser Support:</strong></p><ul><li>All modern browsers and Internet Explorer (IE) version 9 and above</li><li>Microsoft Edge version 12 and above</li></ul><h2 id="the-array-every-method">The Array.every Method</h2><p>The <code>Array.every</code> method has the following syntax:</p><pre><code class="language-js">Array.every(callback(element[, index[, array]])[, thisArg])</code></pre><p>The <code>every</code> method tests whether all elements in the array pass the provided test conditions and returns a boolean <code>true</code> or <code>false</code> value.</p><p>Suppose we have an array of numbers and we want to check if every element of the array is a positive number. We can use the <code>every</code> method to achieve it.</p><pre><code class="language-js">let numbers = [10, -30, 20, 50];
let allPositive = numbers.every(function (number) {
return number &gt; 0;
});
console.log(allPositive); // false
numbers = [10, 30, 20, 50];
allPositive = numbers.every(function (number) {
return number &gt; 0;
});
console.log(allPositive); // true
</code></pre><p>Imagine you have a registration form, and you want to check if all of the required fields are entered or not before submitting the form. You can use the <code>every</code> method to check for each field value easily.</p><pre><code class="language-js">window.onload = function () {
const form = document.getElementById('registration_form');
form.addEventListener('submit', function (event) {
event.preventDefault();
const fields = ['first_name', 'last_name', 'email', 'city'];
const allFieldsEntered = fields.every(function (fieldId) {
return document.getElementById(fieldId).value.trim() !== '';
});
if (allFieldsEntered) {
console.log('All the fields are entered');
// All the field values are entered, submit the form
} else {
alert('Please, fill out all the field values.');
}
});
};
</code></pre><p>Here's a <a href="https://codepen.io/myogeshchavan97/pen/rNWyQwo?editors=0011">Code Pen Demo</a>.</p><p>Here, inside the callback function of the <code>every</code> method, we’re checking if each field value is not empty and returning a boolean value.</p><p>In the above code, the <code>every</code> method returns <code>true</code> if, for all the elements in the <code>fields</code> array, the callback function returns a <code>true</code> value.</p><p>If the callback function returns a <code>false</code> value for any of the elements in the <code>fields</code> array, then the <code>every</code> method will return <code>false</code> as the result.</p><h3 id="advantage-of-using-the-every-method">Advantage of using the every method</h3><ul><li>It allows us to quickly check if all the elements match certain criteria without writing a lot of code</li></ul><h3 id="browser-support-">Browser Support:</h3><ul><li>All modern browsers and Internet Explorer (IE) version 9 and above</li><li>Microsoft Edge version 12 and above</li></ul><h2 id="the-array-some-method">The Array.some Method</h2><p>The <code>Array.some</code> method has the following syntax:</p><pre><code class="language-js"> Array.some(callback(element[, index[, array]])[, thisArg]</code></pre><p>The <code>some</code> method tests whether at least one element in the array passes the test condition given by the provided function and returns a boolean <code>true</code> or <code>false</code> value.</p><p>It returns <code>true</code> once it finds the first match and returns <code>false</code> if there is no match.</p><p>Suppose we have an array of numbers and we want to check if the array contains at least one positive element. We can use the <code>some</code> method to achieve it.</p><pre><code class="language-js">let numbers = [-30, 40, 20, 50];
let containsPositive = numbers.some(function (number) {
return number &gt; 0;
});
console.log(containsPositive); // true
numbers = [-10, -30, -20, -50];
containsPositive = numbers.every(function (number) {
return number &gt; 0;
});
console.log(containsPositive); // false
</code></pre><p>There are some useful scenarios for using the <code>some</code> method. </p><h3 id="some-method-example-1-"><code>Some</code> method example 1:</h3><p>Let's say we have a list of employees and we want to check if a particular employee is present in that array or not. We also want to get the index position of that employee if the employee is found. </p><p>So instead of using the <code>find</code> and <code>findIndex</code> methods separately, we can use the <code>some</code> method to do both of these.</p><pre><code class="language-js">const employees = [
{ name: 'David Carlson', age: 30 },
{ name: 'John Cena', age: 34 },
{ name: 'Mike Sheridon', age: 25 },
{ name: 'John Carte', age: 50 }
];
let indexValue = -1;
const employee = employees.some(function (employee, index) {
const isFound = employee.name.indexOf('John') &gt; -1;
if (isFound) {
indexValue = index;
}
return isFound;
});
console.log(employee, indexValue); // true 1
</code></pre><p>Here's a <a href="https://codepen.io/myogeshchavan97/pen/ExNWOvz?editors=0011">Code Pen Demo</a>.</p><h3 id="some-method-example-2-"><code>Some</code> method example 2:</h3><p>The array <code>forEach</code>, <code>map</code>, and <code>filter</code> methods run from start to finish until all of the elements of the array are processed. There is no way of stopping of breaking out of the loop, once a particular element is found.</p><p>In such cases, we can use the array <code>some</code> method. The <code>map</code>, <code>forEach</code> and <code>some</code> method takes the same parameters in the callback function:</p><ul><li>The first parameter is the actual value</li><li>The second parameter is the index</li><li>The third parameter is the original array</li></ul><p>The <code>some</code> method stops looping through the array once it finds a particular match as can be seen in the above example 1.</p><h3 id="advantages-of-using-the-some-method">Advantages of using the some method</h3><ul><li>It allows us to quickly check if some of the elements match certain criteria without writing a lot of code</li><li>It allows us to quickly break out of the loop, which was not possible with other looping methods seen above</li></ul><h3 id="browser-support--1">Browser Support:</h3><ul><li>All modern browsers and Internet Explorer (IE) version 9 and above</li><li>Microsoft Edge version 12 and above</li></ul><h2 id="the-array-reduce-method">The Array.reduce Method </h2><p>The <code>Array.reduce</code> method has the following syntax:</p><pre><code class="language-js">Array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])</code></pre><p>The <code>reduce</code> method executes a <strong>reducer</strong> function (that you provide) on each element of the array, resulting in a single output value.</p><blockquote>Note that the output of the <code>reduce</code> method is always a single value. It can be an object, a number, a string, an array, and so on. It depends on what you want the output of <code>reduce</code> method to generate but it's always a single value.</blockquote><p>Suppose that you want to find the sum of all the numbers in the array. You can use the <code>reduce</code> method for that.</p><pre><code class="language-js">const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function(accumulator, number) {
return accumulator + number;
}, 0);
console.log(sum); // 15</code></pre><p>Here's a <a href="https://codepen.io/myogeshchavan97/pen/ExNWzmo?editors=0012">Code Pen Demo</a>.</p><p>The <code>reduce</code> method accepts a callback function that receives <code>accumulator</code>, <code>number</code>, <code>index</code> and <code>array</code> as the values. In the above code, we’re using only <code>accumulator</code> and <code>number</code>.</p><p>The <code>accumulator</code> will contain the <code>initialValue</code> to be used for the array. The <code>initialValue</code> decides the return type of the data returned by the <code>reduce</code> method.</p><p>The <code>number</code> is the second parameter to the callback function that will contain the array element during each iteration of the loop.</p><p>In the above code, we have provided <code>0</code> as the <code>initialValue</code> for the <code>accumulator</code>. So the first time the callback function executes, the <code>accumulator + number</code> will be <code>0 + 1 = 1</code> and we're returning back the value <code>1</code>. </p><p>The next time the callback function runs, <code>accumulator + number</code> will be <code>1 + 2 = 3</code> (<code>1</code> here is the previous value returned in the last iteration and <code>2</code> is the next element from the array).</p><p>Then, the next time the callback function runs, <code>accumulator + number</code> will be <br><code>3 + 3 = 6</code>(the first <code>3</code> here is the previous value returned in the last iteration and the next <code>3</code> is the next element from the array) and it will continue this way until all the elements in the <code>numbers</code> array are not iterated.</p><p>So the <code>accumulator</code> will retain the value of the last operation just like a static variable.</p><p>In the above code, <code>initialValue</code> of <code>0</code> is not required because all the elements of the array are integers.</p><p>So the below code will also work:</p><pre><code class="language-js">const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function (accumulator, number) {
return accumulator + number;
});
console.log(sum); // 15
</code></pre><p>Here's a <a href="https://codepen.io/myogeshchavan97/pen/ExNWObz?editors=0012">Code Pen Demo</a>.</p><p>Here, the <code>accumulator</code> will contain the first element of the array and <code>number</code> will contain the next element of the array ( <code>1 + 2 = 3</code> during the first iteration and then<code> 3 + 3 = 6</code> during the next iteration, and so on).</p><p>But it’s always good to specify the <code>initialValue</code> of <code>accumulator</code> as it makes it easy to understand the return type of the <code>reduce</code> method and get the correct type of data back.</p><p>Take a look at the below code:</p><pre><code class="language-js">const numbers = [1, 2, 3, 4, 5];
const doublesSum = numbers.reduce(function (accumulator, number) {
return accumulator + number * 2;
}, 10);
console.log(doublesSum); // 40
</code></pre><p>Here's a <a href="https://codepen.io/myogeshchavan97/pen/jOVBQYx?editors=0012">Code Pen Demo</a>.</p><p>Here, we’re multiplying each element of the array by 2. We have provided an <code>initialValue</code> of 10 to the <code>accumulator</code> so 10 will be added to the final result of the sum like this:</p><pre><code class="language-js">[1 * 2, 2 * 2, 3 * 2, 4 * 2, 5 * 2] = [2, 4, 6, 8, 10] = 30 + 10 = 40</code></pre><p>Suppose, you have an array of objects with x and y coordinates and you want to get the sum of x coordinates. You can use the <code>reduce</code> method for that.</p><pre><code class="language-js">const coordinates = [
{ x: 1, y: 2 },
{ x: 2, y: 3 },
{ x: 3, y: 4 }
];
const sum = coordinates.reduce(function (accumulator, currentValue) {
return accumulator + currentValue.x;
}, 0);
console.log(sum); // 6</code></pre><p>Here's a <a href="https://codepen.io/myogeshchavan97/pen/OJbpaOg?editors=0012">Code Pen Demo</a>.</p><h3 id="advantages-of-using-the-reduce-method">Advantages of using the reduce method</h3><ul><li>Using <code>reduce</code> allows us to generate any type of simple or complex data based on the array</li><li>It remembers the previously returns data from the loop so helps us avoid creating a global variable to store the previous value</li></ul><p><strong>Browser Support:</strong></p><ul><li>All modern browsers and Internet Explorer (IE) version 9 and above</li><li>Microsoft Edge version 12 and above</li></ul><h3 id="thanks-for-reading-">Thanks for reading!</h3><p>Want to learn all ES6+ features in detail including <code>let</code> and <code>const</code>, promises, various promise methods, array and object destructuring, arrow functions, async/await, import and export and a whole lot more?</p><p>Check out my <a href="https://yogeshchavan1.podia.com/mastering-modern-javascript?coupon=LA1HR55">Mastering Modern JavaScript</a> book. This book covers all the pre-requisites for learning React and helps you to become better at JavaScript and React.</p><p>Also, check out my free <a href="https://yogeshchavan1.podia.com/react-router-introduction">Introduction to React Router</a> course to learn React Router from scratch.</p><p><strong>Want to stay up to date with regular content regarding JavaScript, React, Node.js? <a href="https://www.linkedin.com/in/yogesh-chavan97/">Follow me on LinkedIn</a>.</strong></p>
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
