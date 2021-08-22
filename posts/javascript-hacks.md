---
card: "https://cdn-media-2.freecodecamp.org/w1280/5fe0fdd6e6787e0983941991.jpg"
tags: [JavaScript]
description: "If you optimize your JavaScript code with these hacks, it can"
author: "Milad E. Fahmy"
title: "10 JavaScript Hacks Every Web Developer Should Know"
created: "2021-08-16T10:04:20+02:00"
modified: "2021-08-16T10:04:20+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-optimization tag-productivity tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">10 JavaScript Hacks Every Web Developer Should Know</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-2.freecodecamp.org/w1280/5fe0fdd6e6787e0983941991.jpg 300w,
https://cdn-media-2.freecodecamp.org/w1280/5fe0fdd6e6787e0983941991.jpg 600w,
https://cdn-media-2.freecodecamp.org/w1280/5fe0fdd6e6787e0983941991.jpg 1000w,
https://cdn-media-2.freecodecamp.org/w1280/5fe0fdd6e6787e0983941991.jpg 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-2.freecodecamp.org/w1280/5fe0fdd6e6787e0983941991.jpg" alt="10 JavaScript Hacks Every Web Developer Should Know">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>If you optimize your JavaScript code with these hacks, it can help you write cleaner code, save resources, and optimize your programming time.</p><p>According to <a href="https://redmonk.com/sogrady/2020/07/27/language-rankings-6-20/">RedMonk</a>, JavaScript is the most popular programming language. Furthermore, SlashData estimates that around <a href="https://www.slashdata.co/free-resources/developer-economics-state-of-the-developer-nation-19th-edition?">12.4 million developers</a> use JavaScript, which also includes CoffeeScript and Microsoft’s TypeScript.</p><p>This means that millions of people use JavaScript to work as programmers, take freelance gigs through sites like <a href="https://www.upwork.com/freelance-jobs/javascript/">UpWork</a> and <a href="https://www.freelancer.com/jobs/javascript/">Freelancer</a>, or even start their own <a href="https://websitesetup.org/how-to-get-web-design-clients/">web developing businesses</a>.</p><p>freeCodeCamp has an excellent <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/">basics course</a> on JavaScript. But, if you’re already familiar with the fundamentals and want to advance your proficiency in JavaScript, then here are ten hacks you should learn and integrate into your workflow.</p><h2 id="1-how-to-use-shortcuts-for-conditionals">1. How to Use Shortcuts for Conditionals</h2><p>JavaScript allows you to use certain shortcuts to make your code easier on the eyes. In some simple cases you can use logical operators <code>&amp;&amp;</code> and <code>||</code> instead of <code>if</code> and <code>else</code>.</p><p>Let’s look at the <code>&amp;&amp;</code> operator in action.</p><p>Example snippet:</p><pre><code class="language-js">// instead of
if (accessible) {
console.log("It’s open!");
}
// use
accessible &amp;&amp; console.log("It’s open!");</code></pre><p>The <code>||</code> operator functions as an “or” clause. Now, using this operator is a bit trickier since it can prevent the application from executing. However, we can add a condition to get around it.</p><p>Example snippet:</p><pre><code class="language-js">// instead of
if (price.data) {
return price.data;
} else {
return 'Getting the price’';
}
// use
return (price.data || 'Getting the price');</code></pre><h2 id="2-how-to-convert-to-the-largest-integer-using-the-operator">2. How to Convert to the Largest Integer Using the ~~ Operator</h2><p>Using <code>Math.floor</code> to return the largest integer that’s less than or equal to a given number in the equation takes up resources, not to mention it’s a fairly long string to keep in mind. A more efficient way is using the <code>~~</code> operator</p><p>Here's an example:</p><pre><code class="language-js">// instead of
Math.floor(Math.random() * 50);
// use
~~(Math.random() * 50);
// You can also use the ~~ operator to convert anything into a number value.
// Example snippet:
~~('whitedress') // returns 0
~~(NaN) // returns 0</code></pre><h2 id="3-resize-or-empty-an-array-using-array-length">3. Resize or Empty an Array Using array.length</h2><p>Sometimes you need to adjust the size of your array or empty it. The most efficient way to do this is using <code>Array.length</code>.</p><p>Example snippet:</p><pre><code class="language-js">let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
console.log(array.length); // returns the length as 10
array.length = 4;
console.log(array.length); // returns the length as 4
console.log(array); // returns ['a', 'b', 'c', 'd']</code></pre><p>You can also use <code>Array.length</code> to remove all the values from a specified array.</p><p>Example snippet:</p><pre><code class="language-js">let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
array.length = 0;
console.log(array.length); // returns the length as 0
console.log(array); // returns []</code></pre><h2 id="4-how-to-merge-arrays-without-causing-server-overload">4. How to Merge Arrays Without Causing Server Overload</h2><p>It could be a serious strain on the server when merging arrays, especially if you’re dealing with large data sets. To keep things simple and keep up performance levels, use the <code>Array.concat()</code> and <code>Array.push.apply(arr1, arr2)</code> functions.</p><p>Using either of these functions depends on the size of your arrays.</p><p>Let’s look at how to deal with smaller arrays.</p><p>Example snippet:</p><pre><code class="language-js">let list1 = ['a', 'b', 'c', 'd', 'e'];
let list2 = ['f', 'g', 'h', 'i', 'j'];
console.log(list1.concat(list2)); // returns the merged values of both arrays, ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']</code></pre><p>When using the <code>Array.concat()</code> function on larger data sets, it will consume a lot of memory while creating a new array. To get around the performance drop, use <code>Array.push.apply(arr1, arr2)</code> which consolidates the second array into the first one without creating a new array.</p><p>Example snippet:</p><pre><code class="language-js">let list1 = ['a', 'b', 'c', 'd', 'e'];
let list2 = ['f', 'g', 'h', 'i', 'j'];
console.log(list1.push.apply(list1, list2)); // returns 10, the new length of list1
console.log(list1); // returns ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']</code></pre><h2 id="5-how-to-use-filters-with-arrays">5. How to Use Filters with Arrays</h2><p>Filtering an array is useful when you’re working with multiple columns of corresponding data. In this case, you can include and exclude data based on any characteristic that describes a group in your array. </p><p>To filter an array, use the <code>filter()</code> function.</p><p>Example snippet:</p><pre><code class="language-js">const cars = [
{ make: 'Opel', class: 'Regular' },
{ make: 'Bugatti', class: 'Supercar' },
{ make: 'Ferrari', class: 'Supercar' },
{ make: 'Ford', class: 'Regular' },
{ make: 'Honda', class: 'Regular' },
]
const supercar = cars.filter(car =&gt; car.class === 'Supercar');
console.table(supercar); // returns the supercar class data in a table format</code></pre><p>You can also use <code>filter()</code> together with <code>Boolean</code> to remove all <code>null</code> or <code>undefined</code> values from your array.</p><p>Example snippet:</p><pre><code class="language-js">const cars = [
{ make: 'Opel', class: 'Regular' },
null,
undefined
]
cars.filter(Boolean); // returns [{ make: 'Opel', class: 'Regular' }] </code></pre><h2 id="6-how-to-extract-unique-values">6. How to Extract Unique Values</h2><p>Suppose you have a data set of repeating values, and you need to produce unique values out of this set. You can do so with a combination of spread syntax <code>...</code> and object type <code>Set</code>. This approach works with both words and numbers.</p><p>Example snippet:</p><pre><code class="language-js">const cars = ['Opel', 'Bugatti', 'Opel', 'Ferrari', 'Ferrari', 'Opel'];
const unrepeated_cars = [...new Set(cars)];
console.log(unrepeated_cars); // returns the values Opel, Bugatti, Ferrari</code></pre><h2 id="7-how-to-use-the-replace-function-shortcut">7. How to Use the Replace Function Shortcut</h2><p>You should be familiar with the <code>String.replace()</code> function. However, it only replaces a string with a specified line once and stops from there. Suppose you have a larger data set, and you need to type this function multiple times. It gets frustrating after a while.</p><p>To make your life easier, you can add <code>/g</code> at the end of the regex, so the function runs and replaces all matching conditions without stopping at the first one.</p><p>Example snippet:</p><pre><code class="language-js">const grammar = 'synonym synonym';
console.log(grammar.replace(/syno/, 'anto')); // this returns 'antonym synonym'
console.log(grammar.replace(/syno/g, 'anto')); // this returns 'antonym antonym'</code></pre><h2 id="8-how-to-cache-values">8. How to Cache Values</h2><p>When you’re working with large arrays and need to request elements by ID using <code>getElementById()</code>, or by class name using <code>getElementsByClassName()</code>, then JavaScript runs through the array on a loop with each similar element request. This could take up a lot of resources. </p><p>However, you can increase the performance by caching a value if you know you’re regularly using a specified selection.</p><p>Example snippet:</p><pre><code class="language-js">const carSerial = serials.getElementById('serial1234');
carSerial.addClass('cached-serial1234');</code></pre><h2 id="9-how-to-check-if-an-object-has-values">9. How to Check if an Object Has Values</h2><p>When you’re working with multiple objects, it gets difficult to keep track of which ones contain actual values and which you can delete. </p><p>Here’s a quick hack on how to check if an object is empty or has a value with <code>Object.keys()</code> function.</p><p>Example snippet:</p><pre><code class="language-js">Object.keys(objectName).length // if it returns 0 then the Object is empty, otherwise it displays the number of values</code></pre><h2 id="10-how-to-minify-your-javascript-files">10. How to Minify your JavaScript Files</h2><p>Large JS files affect your page’s loading and response performance. While writing your code, you could be left with unnecessary lines, comments, and dead code. Depending on your file’s size, it can pile up and become a redundant bottleneck.</p><p>There are a couple of tools to help you clean up the code and make the JS files lighter - or minify them, in developers’ terms. Even though minifying the JS file isn’t a hack per se, it’s still beneficial for developers to know and implement.</p><p>One is <a href="https://developers.google.com/closure/compiler">Google Closure Compiler</a>, which parses your JavaScript, analyzes it, removes dead code, and rewrites and minimizes what's left. The other is <a href="https://archive.codeplex.com/?p=ajaxmin">Microsoft Ajax Minifier</a>, which enables you to improve your web application’s performance by reducing the size of your JavaScript files.</p><p>There you have it. Use these ten hacks to make your code cleaner, save server resources, and retain programming time.</p><h3 id="thanks-for-reading-">Thanks for reading!</h3><p>I'm a writer who is passionate about digital marketing, web development, and cybersecurity. You can reach me on <a href="https://www.linkedin.com/in/gert-svaiko/">LinkedIn here</a>.</p><p>You might also enjoy some other articles I have written:</p><ul><li><a href="https://www.searchenginewatch.com/2020/12/01/the-google-page-experience-what-you-need-to-know-and-five-steps-for-2021/">The Google page experience: What you need to know and five steps to prepare for 2021</a></li><li><a href="https://www.infosecurity-magazine.com/next-gen-infosec/web-hosting-threats-season/">Web Hosting Security Threats to Watch Out for During This Season</a></li><li><a href="https://www.digitalcommerce360.com/2020/12/08/how-to-boost-sales-during-the-rest-of-2020s-unusual-holiday-season/">How to boost sales during the rest of 2020's unusual holiday season</a></li></ul>
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
