---
card: "/images/default.jpg"
tags: [JavaScript]
description: An important part of any programming language. Most times we
author: "Milad E. Fahmy"
title: "How to Manipulate Arrays in JavaScript"
created: "2021-08-15T19:33:35+02:00"
modified: "2021-08-15T19:33:35+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-100daysofcode tag-arrays tag-es6 ">
<header class="post-full-header">
<h1 class="post-full-title">How to Manipulate Arrays in JavaScript</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2019/06/1_EK3RyHqvMS-ZIy9UyNMxTA--1-.png 300w,
/news/content/images/size/w600/2019/06/1_EK3RyHqvMS-ZIy9UyNMxTA--1-.png 600w,
/news/content/images/size/w1000/2019/06/1_EK3RyHqvMS-ZIy9UyNMxTA--1-.png 1000w,
/news/content/images/size/w2000/2019/06/1_EK3RyHqvMS-ZIy9UyNMxTA--1-.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2019/06/1_EK3RyHqvMS-ZIy9UyNMxTA--1-.png" alt="How to Manipulate Arrays in JavaScript">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>An important part of any programming language. Most times we need to do several operations on arrays, hence this article.</p>
<p>In this article, I would show you various methods of manipulating arrays in JavaScript [^^]</p>
<h3 id="what-are-arrays-in-javascript">What are Arrays in JavaScript?</h3>
<p>Before we proceed, you need to understand what arrays really mean.</p>
<blockquote><em><em>In JavaScript, an array is a variable that is used to store different data types. It basically stores different elements in one box and can be later assesssed with the variable.</em></em></blockquote>
<p>Declaring an array:</p><pre><code class="language-javascript">let myBox = [];   // Initial Array declaration in JS</code></pre>
<p>Arrays can contain multiple data types</p><pre><code class="language-javascript">let myBox = ['hello', 1, 2, 3, true, 'hi'];</code></pre>
<p>Arrays can be manipulated by using several actions known as <strong><strong>methods. </strong></strong>Some of these methods allow us to add, remove, modify and do lots more to arrays.</p>
<p>I would be showing you a few in this article, let’s roll :)</p>
<blockquote><em><em>NB: I used <strong><strong>Arrow functions</strong></strong> in this post, If you don’t know what this means, you should read <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions" rel="nofollow noopener">here</a>. Arrow function is an <strong><strong>ES6 feature</strong></strong>.</em></em></blockquote>
<h3 id="tostring-">toString()</h3>
<p>The JavaScript method <code>toString()</code> converts an array to a string separated by a comma.</p><pre><code class="language-javascript">let colors = ['green', 'yellow', 'blue'];
console.log(colors.toString()); // green,yellow,blue</code></pre>
<h3 id="join-">join()</h3>
<p>The JavaScript <code>join()</code> method combines all array elements into a string.</p>
<p>It is similar to <code>toString()</code> method, but here you can specify the separator instead of the default comma.</p><pre><code class="language-javascript">let colors = ['green', 'yellow', 'blue'];
console.log(colors.join('-')); // green-yellow-blue</code></pre>
<h3 id="concat-function concat() { [native code] }1">concat</h3>
<p>This method combines two arrays together or add more items to an array and then return a new array.</p><pre><code class="language-javascript">let firstNumbers = [1, 2, 3];
let secondNumbers = [4, 5, 6];
let merged = firstNumbers.concat(secondNumbers);
console.log(merged); // [1, 2, 3, 4, 5, 6]</code></pre>
<h3 id="push-">push()</h3>
<p>This method adds items to the end of an array and <strong><strong>changes</strong></strong> the original array.</p><pre><code class="language-javascript">let browsers = ['chrome', 'firefox', 'edge'];
browsers.push('safari', 'opera mini');
console.log(browsers);
// ["chrome", "firefox", "edge", "safari", "opera mini"]</code></pre>
<h3 id="pop-">pop()</h3>
<p>This method removes the last item of an array and <strong><strong>returns</strong></strong> it.</p><pre><code class="language-javascript">let browsers = ['chrome', 'firefox', 'edge'];
browsers.pop(); // "edge"
console.log(browsers); // ["chrome", "firefox"]</code></pre>
<h3 id="shift-">shift()</h3>
<p>This method removes the first item of an array and <strong><strong>returns</strong></strong> it.</p><pre><code class="language-javascript">let browsers = ['chrome', 'firefox', 'edge'];
browsers.shift(); // "chrome"
console.log(browsers); // ["firefox", "edge"]</code></pre>
<h3 id="unshift-">unshift()</h3>
<p>This method adds an item(s) to the beginning of an array and <strong><strong>changes</strong></strong> the original array.</p><pre><code class="language-javascript">let browsers = ['chrome', 'firefox', 'edge'];
browsers.unshift('safari');
console.log(browsers); //  ["safari", "chrome", "firefox", "edge"]</code></pre>
<blockquote><em><em>You can also add multiple items at once</em></em></blockquote>
<h3 id="splice-">splice()</h3>
<p>This<strong><strong> </strong></strong>method <strong><strong>changes</strong></strong> an array, by adding, removing and inserting elements.</p>
<p>The syntax is:</p><pre><code>array.splice(index[, deleteCount, element1, ..., elementN])</code></pre>
<ul>
<li><code><strong><strong>Index</strong></strong></code><strong><strong> </strong></strong>here is the starting point for removing elements in the array</li>
<li><code><strong><strong>deleteCount</strong></strong> </code>is the number of elements to be deleted from that index</li>
<li><code><strong><strong>element1, …, elementN</strong></strong> </code>is the element(s) to be added</li>
</ul>
<p><strong><strong><em>Removing items</em></strong></strong></p>
<blockquote><em><em>after running <strong><strong>splice() </strong></strong>, it returns the array with the item(s) removed and removes it from the original array.</em></em></blockquote><pre><code class="language-javascript">let colors = ['green', 'yellow', 'blue', 'purple'];
colors.splice(0, 3);
console.log(colors); // ["purple"]
// deletes ["green", "yellow", "blue"]</code></pre>
<blockquote><em><em><strong><strong>NB</strong></strong>: The deleteCount does not include the last index in range.</em></em></blockquote>
<p>If the second parameter is not declared, every element starting from the given index will be removed from the array:</p><pre><code class="language-javascript">let colors = ['green', 'yellow', 'blue', 'purple'];
colors.splice(3);
console.log(colors); // ["green", "yellow", "blue"]
// deletes ['purple']</code></pre>
<p>In the next example we will remove 3 elements from the array and replace them with more items:</p><pre><code class="language-javascript">let schedule = ['I', 'have', 'a', 'meeting', 'tommorrow'];
// removes 4 first elements and replace them with another
schedule.splice(0, 4, 'we', 'are', 'going', 'to', 'swim');
console.log(schedule);
// ["we", "are", "going", "to", "swim", "tommorrow"]</code></pre>
<p><strong><strong><em>Adding items</em></strong></strong></p>
<p>To add items, we need to set the <code>deleteCount</code> to zero</p><pre><code class="language-javascript">let schedule = ['I', 'have', 'a', 'meeting', 'with'];
// adds 3 new elements to the array
schedule.splice(5, 0, 'some', 'clients', 'tommorrow');
console.log(schedule);
// ["I", "have", "a", "meeting", "with", "some", "clients", "tommorrow"]</code></pre>
<h3 id="slice-">slice()</h3>
<blockquote><em><em>This method is similar to <code>splice()</code> but very different. It returns subarrays instead of substrings.</em></em></blockquote>
<p>This method <strong><strong>copies </strong></strong>a given part of an array and returns that copied part as a new array. <strong><strong>It does not change the original array.</strong></strong></p>
<p>The syntax is:</p><pre><code>array.slice(start, end)</code></pre>
<p>Here’s a basic example:</p><pre><code class="language-javascript">let numbers = [1, 2, 3, 4]
numbers.slice(0, 3)
// returns [1, 2, 3]
console.log(numbers) // returns the original array</code></pre>
<p>The best way to use<code> slice()</code> is to assign it to a new variable.</p><pre><code class="language-javascript">let message = 'congratulations'
const abbrv = message.slice(0, 7) + 's!';
console.log(abbrv) // returns "congrats!"</code></pre>
<h3 id="split-">split()</h3>
<p>This method is used for <strong><strong>strings</strong></strong>. It divides a string into substrings and returns them as an array.</p>
<p>Here’s the syntax:string.split(separator, limit);</p>
<ul>
<li>The <code><strong><strong>separator</strong></strong></code> here defines how to split a string either by a comma.</li>
<li>The <code><strong><strong>limit</strong></strong></code> determines the number of splits to be carried out</li>
</ul><pre><code class="language-javascript">let firstName = 'Bolaji';
// return the string as an array
firstName.split() // ["Bolaji"]</code></pre>
<p>another example:</p><pre><code class="language-javascript">let firstName = 'hello, my name is bolaji, I am a dev.';
firstName.split(',', 2); // ["hello", " my name is bolaji"]</code></pre>
<blockquote><em><em><strong><strong><em>NB:</em></strong></strong><em> If we declare an empty array, like this</em></em> &nbsp;<em><code><em>firstName.split('');</em></code><em> then each item in the string will be divided as substrings</em></em>:</em></blockquote><pre><code class="language-javascript">let firstName = 'Bolaji';
firstName.split('') // ["B", "o", "l", "a", "j", "i"]</code></pre>
<h3 id="indexof-">indexOf()</h3>
<p>This method looks for an item in an array and returns <strong><strong>the index</strong></strong> where it was found else it returns <code>-1</code></p><pre><code class="language-javascript">let fruits = ['apple', 'orange', false, 3]
fruits.indexOf('orange'); // returns 1
fruits.indexOf(3); // returns 3
friuts.indexOf(null); // returns -1 (not found)</code></pre>
<h3 id="lastindexof-">lastIndexOf()</h3>
<p>This method works the same way <strong><strong>indexOf()</strong></strong> does except that it works from right to left. It returns the last index where the item was found</p><pre><code class="language-javascript">let fruits = ['apple', 'orange', false, 3, 'apple']
fruits.lastIndexOf('apple'); // returns 4</code></pre>
<h3 id="filter-">filter()</h3>
<p>This method creates a new array if the items of an array pass a certain condition.</p>
<p>The syntax is:</p><pre><code class="language-javascript">let results = array.filter(function(item, index, array) {
// returns true if the item passes the filter
});</code></pre>
<p>Example:</p>
<p>Checks users from Nigeria</p><pre><code class="language-javascript">const countryCode = ['+234', '+144', '+233', '+234'];
const nigerian = countryCode.filter( code =&gt; code === '+234');
console.log(nigerian); // ["+234", "+234"]</code></pre>
<h3 id="map-">map()</h3>
<p>This method creates a new array by manipulating the values in an array.</p>
<p>Example:</p>
<p>Displays usernames on a page. (Basic friend list display)</p><pre><code class="language-javascript">const userNames = ['tina', 'danny', 'mark', 'bolaji'];
const display = userNames.map(item =&gt; {
return '&lt;li&gt;' + item + '&lt;/li&gt;';
})
const render = '&lt;ul&gt;' + display.join('') + '&lt;/ul&gt;';
document.write(render);</code></pre>
<p>another example:</p><pre><code class="language-javascript">// adds dollar sign to numbers
const numbers = [10, 3, 4, 6];
const dollars = numbers.map( number =&gt; '$' + number);
console.log(dollars);
// ['$10', '$3', '$4', '$6'];</code></pre>
<h3 id="reduce-">reduce()</h3>
<p>This method is good for calculating totals.</p>
<p><strong><strong>reduce()</strong></strong> is used to calculate a single value based on an array.</p><pre><code class="language-js">let value = array.reduce(function(previousValue, item, index, array) {
// ...
}, initial);</code></pre>
<p>example:</p>
<blockquote><em><em>To loop through an array and sum all numbers in the array up, we can use the for of loop.</em></em></blockquote><pre><code class="language-js">const numbers = [100, 300, 500, 70];
let sum = 0;
for (let n of numbers) {
sum += n;
}
console.log(sum);</code></pre>
<p>Here’s how to do same with <code>reduce()</code></p><pre><code class="language-js">const numbers = [100, 300, 500, 70];
const sum = numbers.reduce((accummulator, value) =&gt;
accummulator + value
, 0);
console.log(sum); // 970</code></pre>
<blockquote><em><em>If you omit the initial value, the <em>total</em> will by default start from the first item in the array.</em></em></blockquote><pre><code class="language-js">const numbers = [100, 300, 500, 70];
const sum = numbers.reduce((accummulator, value) =&gt; accummulator + value);
console.log(sum); // still returns 970</code></pre>
<p>The snippet below shows how the <strong><strong>reduce()</strong></strong> method works with all four arguments.</p>
<p><strong><strong>source: MDN Docs</strong></strong></p>
<p>More insights into the <strong><strong>reduce()</strong></strong> method and various ways of using it can be found <a href="https://medium.freecodecamp.org/reduce-f47a7da511a9" rel="nofollow noopener">here</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" rel="nofollow noopener">here</a>.</p>
<h3 id="foreach-">forEach()</h3>
<p>This method is good for iterating through an array.</p>
<p>It applies a function on all items in an array</p><pre><code class="language-js">const colors = ['green', 'yellow', 'blue'];
colors.forEach((item, index) =&gt; console.log(index, item));
// returns the index and the every item in the array
// 0 "green"
// 1 "yellow"
// 2 "blue"</code></pre>
<p>iteration can be done without passing the index argument</p><pre><code class="language-js">const colors = ['green', 'yellow', 'blue'];
colors.forEach((item) =&gt; console.log(item));
// returns every item in the array
// "green"
// "yellow"
// "blue"</code></pre>
<h3 id="every-">every()</h3>
<p>This method checks if all items in an array pass the specified condition and return<code>true</code> if passed, else <code>false</code>.</p>
<blockquote><em><em>check if all numbers are positive</em></em></blockquote><pre><code class="language-js">const numbers = [1, -1, 2, 3];
let allPositive = numbers.every((value) =&gt; {
return value &gt;= 0;
})
console.log(allPositive); // would return false</code></pre>
<h3 id="some-">some()</h3>
<p>This method checks if an item (one or more) in an array pass the specified condition and return true if passed, else false.</p>
<blockquote><em><em>c<em><em>hecks if at least one number is positive</em></em></em></em></blockquote><pre><code class="language-js">const numbers = [1, -1, 2, 3];
let atLeastOnePositive = numbers.some((value) =&gt; {
return value &gt;= 0;
})
console.log(atLeastOnePositive); // would return true</code></pre>
<h3 id="includes-">includes()</h3>
<p>This method checks if an array contains a certain item. It is similar to <code>.some()</code>, but instead of looking for a specific condition to pass, it checks if the array contains a specific item.</p><pre><code class="language-js">let users = ['paddy', 'zaddy', 'faddy', 'baddy'];
users.includes('baddy'); // returns true</code></pre>
<p>If the item is not found, it returns <code>false</code></p>
<hr>
<p>There are more array methods, this is just a few of them. Also, there are tons of other actions that can be performed on arrays, try checking MDN docs <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/" rel="nofollow noopener">here</a>for deeper insights.</p>
<h3 id="summary">Summary</h3>
<ul>
<li><strong><strong>toString() </strong></strong>converts an array to a string separated by a comma.</li>
<li><strong><strong>join() </strong></strong>combines all array elements into a string.</li>
<li><strong><strong>concat</strong></strong> combines two arrays together or add more items to an array and then return a new array.</li>
<li><strong><strong>push()</strong></strong> adds item(s) to the end of an array and <strong><strong>changes</strong></strong> the original array.</li>
<li><strong><strong>pop()</strong></strong> removes the last item of an array and <strong><strong>returns</strong></strong> it</li>
<li><strong><strong>shift()</strong></strong> removes the first item of an array and <strong><strong>returns</strong></strong> it</li>
<li><strong><strong>unshift()</strong></strong> adds an item(s) to the beginning of an array and <strong><strong>changes</strong></strong> the original array.</li>
<li><strong><strong>splice()</strong></strong> c<strong><strong>hanges</strong></strong> an array, by adding, removing and inserting elements.</li>
<li><strong><strong>slice()</strong></strong> copies<strong><strong> </strong></strong>a given part of an array and returns that copied part as a new array. <strong><strong>It does not change the original array.</strong></strong></li>
<li><strong><strong>split()</strong></strong> divides a string into substrings and returns them as an array.</li>
<li><strong><strong>indexOf()</strong></strong> looks for an item in an array and returns <strong><strong>the index</strong></strong> where it was found else it returns <code>-1</code></li>
<li><strong><strong>lastIndexOf()</strong></strong> looks for an item from right to left and returns the last index where the item was found.</li>
<li><strong><strong>filter()</strong></strong> creates a new array if the items of an array pass a certain condition.</li>
<li><strong><strong>map()</strong></strong> creates a new array by manipulating the values in an array.</li>
<li><strong><strong>reduce()</strong></strong> calculates a single value based on an array.</li>
<li><strong><strong>forEach()</strong></strong> iterates through an array, it applies a function on all items in an array</li>
<li><strong><strong>every()</strong></strong> checks if all items in an array pass the specified condition and return true if passed, else false.</li>
<li><strong><strong>some() </strong></strong>checks if an item (one or more) in an array pass the specified condition and return true if passed, else false.</li>
<li><strong><strong>includes()</strong></strong> checks if an array contains a certain item.</li>
</ul>
<hr>
<p>Let’s wrap it here; Arrays are powerful and using methods to manipulate them creates the Algorithms real-world applications use.</p>
<p>Let's do a create a small function, one that converts a post title into a urlSlug.</p>
<blockquote><em><em><strong><strong>URL slug</strong></strong> is the exact address of a specific page or post on your site.</em></em></blockquote>
<p>When you write an article on <strong>Freecodecamp News<strong> </strong></strong>or any other writing platform, your post title is automatically converted to a slug with white spaces removed, characters turned to lowercase and each word in the title separated by a hyphen.</p>
<p>Here’s a basic function that does that using some of the methods we learnt just now.</p><pre><code class="language-js">const url = 'https://bolajiayodeji.com/'
const urlSlug = (postTitle) =&gt; {
let postUrl = postTitle.toLowerCase().split(' ');
let postSlug = `${url}` + postUrl.join('-');
return postSlug;
}
let postTitle = 'Introduction to Chrome Lighthouse'
console.log(urlSlug(postTitle));
// https://bolajiayodeji.com/introduction-to-chrome-lighthouse</code></pre>
<p>in <code>postUrl</code>, we convert the string to lowercase then we use the <strong><strong>split()</strong></strong>method to convert the string into substrings and returns it in an array</p><pre><code>["introduction", "to", "chrome", "lighthouse"]</code></pre>
<p>in <code>post slug</code> we join the returned array with a hyphen and then concatenate it to the category string and main <code>url</code>.</p><pre><code class="language-js">let postSlug = `${url}` + postUrl.join('-');
postUrl.join('-') // introduction-to-chrome-lighthouse</code></pre>
<p>That’s it, pretty simple, right? :)</p>
<hr>
<p>If you’re just getting started with JavaScript, you should check this repository <a href="https://github.com/BolajiAyodeji/js-code-snippets" rel="nofollow noopener">here</a>, I’m compiling a list of basic JavaScript snippets ranging from</p>
<ul>
<li>Arrays</li>
<li>Control flow</li>
<li>Functions</li>
<li>Objects</li>
<li>Operators</li>
</ul>
<p>Don’t forget to Star and share! :)</p>
<p>PS: This article was first published on my blog <a href="https://www.bolajiayodeji.com/manipulating-arrays-in-javascript/">here</a></p>
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
