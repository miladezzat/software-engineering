---
card: "/images/default.jpg"
tags: [JavaScript]
description: "In general, a string represents a sequence of characters in a"
author: "Milad E. Fahmy"
title: "JavaScript Split – How to Split a String into an Array in JS"
created: "2021-08-16T10:03:33+02:00"
modified: "2021-08-16T10:03:33+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-javascript tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">JavaScript Split – How to Split a String into an Array in JS</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="/news/content/images/size/w300/2021/06/freeCodeCamp-Cover-1.png 300w,
/news/content/images/size/w600/2021/06/freeCodeCamp-Cover-1.png 600w,
/news/content/images/size/w1000/2021/06/freeCodeCamp-Cover-1.png 1000w,
/news/content/images/size/w2000/2021/06/freeCodeCamp-Cover-1.png 2000w">
<img onerror="this.style.display='none'" src="/news/content/images/size/w2000/2021/06/freeCodeCamp-Cover-1.png" alt="JavaScript Split – How to Split a String into an Array in JS">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>In general, a <code>string</code> represents a sequence of characters in a programming language. </p><p>Let's look at an example of a string created using a sequence of characters, "Yes, You Can DO It!". In JavaScript, we can create a string in a couple of ways:</p><ul><li>Using the string literal as a primitive</li></ul><pre><code class="language-js">const msg = "Yes, You Can DO It!";</code></pre><ul><li>Using the <code>String()</code> constructor as an object</li></ul><pre><code class="language-js">const msg = new String("Yes, You Can DO It!");</code></pre><p>One interesting fact about strings in JavaScript is that we can access the characters in a string using its index. The index of the first character is 0, and it increments by 1. So, we can access each of the characters of a string like this:</p><pre><code class="language-js">let str = "Yes, You Can Do It!";
console.log(str[0]); // Y
console.log(str[1]); // e
console.log(str[2]); // s
console.log(str[3]); // ,
</code></pre><p>We can call the <code>split()</code> method on the <code>message</code> string. Let's split the string based on the space (<code>' &nbsp;'</code>) character. Here the space character acts as a splitter or divider.</p><pre><code class="language-js">// Split using a space character
let arr = message.split(' ');
// The array
console.log(arr); // ["I", "am", "a", "Happy", "Go", "lucky", "Guy"]
// Access each of the elements of the array.
console.log(arr[0]); // "I"
console.log(arr[1]); // "am"
console.log(arr[2]); // "a"
console.log(arr[3]); // "Happy"
console.log(arr[4]); // "Go",
console.log(arr[5]); // "lucky"
console.log(arr[6]); // "Guy"
</code></pre><p>The main purpose of the <code>split()</code> method is to get the chunks you're interested in from a string to use them in any further use cases.</p><h2 id="how-to-split-a-string-by-each-character">How to Split a String by Each Character</h2><p>You can split a string by each character using an empty string('') as the splitter. In the example below, we split the same message using an empty string. The result of the split will be an array containing all the characters in the message string.</p><pre><code class="language-js">console.log(message.split('')); // ["I", " ", "a", "m", " ", "a", " ", "H", "a", "p", "p", "y", " ", "G", "o", " ", "l", "u", "c", "k", "y", " ", "G", "u", "y"]</code></pre><blockquote>💡 Please note that splitting an empty string('') using an empty string as the splitter returns an empty array. You may get this as a question in your upcoming job interviews!</blockquote><pre><code class="language-js">''.split(''); // returns []</code></pre><h2 id="how-to-split-a-string-into-one-array">How to Split a String into One Array</h2><p>You can invoke the <code>split()</code> method on a string without a splitter/divider. This just means the <code>split()</code> method doesn't have any arguments passed to it. </p><p>When you invoke the <code>split()</code> method on a string without a splitter, it returns an array containing the entire string.</p><pre><code class="language-js">let message = 'I am a Happy Go lucky Guy';
console.log(message.split()); // returns ["I am a Happy Go lucky Guy"]</code></pre><blockquote>💡 Note again, calling the <code>split()</code> method on an empty string('') without a splitter will return an array with an empty string. It doesn't return an empty array.</blockquote><p>Here are two examples so you can see the difference:</p><pre><code class="language-js">// Returns an empty array
''.split(''); // returns []
// Returns an array with an empty string
''.split() // returns [""]</code></pre><h2 id="how-to-split-a-string-using-a-non-matching-character">How to Split a String Using a Non-matching Character</h2><p>Usually, we use a splitter that is part of the string we are trying to split. There could be cases where you may have passed a splitter that is not part of the string or doesn't match any part of it. In that case, the <code>split()</code> method returns an array with the entire string as an element.</p><p>In the example below, the message string doesn't have a comma (,) character. Let's try to split the string using the splitter comma (,).</p><pre><code class="language-js">let message = 'I am a Happy Go lucky Guy';
console.log(message.split(',')); // ["I am a Happy Go lucky Guy"]</code></pre><blockquote>💡 You should be aware of this as it might help you debug an issue due to a trivial error like passing the wrong splitter in the <code>split()</code> method.</blockquote><h1 id="how-to-split-with-a-limit">How to Split with a Limit</h1><p>If you thought that the <code>split()</code> method only takes the splitter as an optional parameter, let me tell you that there is one more. You can also pass the <code>limit</code> as an optional parameter to the <code>split()</code> method.</p><pre><code class="language-js">string.split(splitter, limit);</code></pre><p>As the name indicates, the <code>limit</code> parameter limits the number of splits. It means the resulting array will only have the number of elements specified by the limit parameter.</p><p>In the example below, we split a string using a space (' ') as a splitter. We also pass the number <code>4</code> as the limit. <code>The split()</code> method returns an array with only four elements, ignoring the rest.</p><pre><code class="language-js">let message = 'I am a Happy Go lucky Guy';
console.log(message.split(' ', 4)); // ["I", "am", "a", "Happy"] </code></pre><h1 id="how-to-split-using-regex">How to Split Using Regex</h1><p>We can also pass a regular expression (regex) as the splitter/divider to the <code>split()</code> method. Let's consider this string to split:</p><pre><code class="language-js">let message = 'The sky is blue. Grass is green! Do you know the color of the Cloud?';</code></pre><p>Let's split this string at the period (.), exclamation point (!), and the question mark (?). We can write a regex that identifies when these characters occur. Then we pass the regex to the <code>split()</code> method and invoke it on the above string.</p><pre><code class="language-js">let sentences = message.split(/[.,!,?]/);
let subs = name.split(' ');
console.log(subs); // ["Tapas", "Adhikary"]
let joined = subs.join('-');
console.log(joined); // Tapas-Adhikary</code></pre><p>Consider the name has the first name (Tapas) and last name (Adhikary) separated by a space. Here we first split the name using the space splitter. It returns an array containing the first and last names as elements, that is<code>['Tapas', 'Adhikary']</code>.</p><p>Then we use the array method called <code>join()</code> to join the elements of the array using the <code>-</code> character. The <code>join()</code> method returns a string by joining the element using a character passed as a parameter. Hence we get the final output as <code>Tapas-Adhikary</code>.</p><h1 id="es6-how-to-split-with-array-destructuring">ES6: How to Split with Array Destructuring</h1><p>ECMAScript2015 (ES6) introduced a more innovative way to extract an element from an array and assign it to a variable. This smart syntax is known as <code>Array Destructuring</code>. We can use this with the <code>split()</code> method to assign the output to a variable easily with less code.</p><pre><code class="language-js">let name = 'Tapas Adhikary';
let [firstName, lastName] = name.split(' ');
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
